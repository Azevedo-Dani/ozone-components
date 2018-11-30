import {Item, UUID, Instant, OzoneType} from './Item'

@OzoneType('postingindex')
export class Postingindex extends Item {
	creationDate: number | null
	sequentialIndex: number | null

	constructor(src: Postingindex) {
		super(src)
		this.creationDate = src.creationDate
		this.sequentialIndex = src.sequentialIndex
	}
}
