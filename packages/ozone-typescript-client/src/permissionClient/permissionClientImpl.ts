import { Grants, UUID } from 'ozone-type'
import { httpclient } from 'typescript-http-client'
import Request = httpclient.Request
import { OzoneClient } from '../ozoneClient/ozoneClient'
import { PermissionClient, FieldsPermission } from './permissionClient'

export class PermissionClientImpl implements PermissionClient {

	constructor(private client: OzoneClient, private baseUrl: string) {}

	async bulkGetPermissions(fieldsIdentifiers: string[], itemIds: UUID[]): Promise<Map<string, FieldsPermission>> {
		const fieldsId = fieldsIdentifiers
		const parameters = new URLSearchParams()
		parameters.append('fields', fieldsId.join(','))

		const request = new Request(`${this.baseUrl}/rest/v3/items/bulkGetPermissions?${parameters.toString()}`)
			.setMethod('POST')
			.setBody(itemIds)

		const grants = await this.client.call<Grants[]>(request)

		const result = new Map<string, FieldsPermission>()
		grants.forEach((grant) => {
			result.set(grant.id!, new FieldsPermissionImpl(grant))
		})
		return result
	}

	async getPermissions(fieldsIdentifiers: string[], itemId: UUID): Promise<FieldsPermission | undefined> {
		const permissions = await this.bulkGetPermissions(fieldsIdentifiers, [itemId])
		return permissions.get(itemId)
	}
}

export class FieldsPermissionImpl implements FieldsPermission {

	constructor(public grant: Grants) {}

	isFieldEditable(fieldName: string): boolean {
		if (this.grant.fieldGrants && this.grant.fieldGrants.hasOwnProperty(fieldName)) {
			return typeof (
				this.grant.fieldGrants[fieldName]
					.find(i => i === 'FIELD_EDIT')
			) === 'string'
		} else {
			return false
		}
	}

}
