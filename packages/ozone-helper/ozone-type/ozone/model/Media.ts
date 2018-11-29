import { FlowrMedia } from './FlowrMedia'
import { RestrictedContent } from './RestrictedContent'
import { Status } from './Status'
import { TagsCustom } from './TagsCustom'

import {Item, UUID, Instant, OzoneType} from './Item'

@OzoneType("media")
export class Media extends Item implements TagsCustom, FlowrMedia, RestrictedContent { 
	byLine?: string
	caption?: string
	category?: string
	city?: string
	collections?: [UUID]
	country?: string
	creationDate?: Instant
	credit?: string
	date?: Instant
	derivedFiles?: [UUID]
	file?: UUID
	fileUTI?: [string]
	fullText?: UUID
	height?: number
	indexed_fulltext?: string
	keywords?: [string]
	length?: number
	localizedDescription?: { [key: string]: string; }
	localizedName?: { [key: string]: string; }
	localizedShortDescription?: { [key: string]: string; }
	localizedTitle?: { [key: string]: string; }
	mediaUuid?: UUID
	modificationDate?: Instant
	objectName?: string
	parentFolder?: UUID
	previewDate?: Instant
	previewRatio?: number
	publications?: [string]
	representedBy?: UUID
	restricted?: boolean
	source?: string
	specialInstructions?: string
	status?: Status
	stocks?: [UUID]
	title?: string
	usage?: string
	width?: number

	constructor(src:Media) { 
		super(src)
		this.byLine = src.byLine
		this.caption = src.caption
		this.category = src.category
		this.city = src.city
		this.collections = src.collections
		this.country = src.country
		this.creationDate = src.creationDate
		this.credit = src.credit
		this.date = src.date
		this.derivedFiles = src.derivedFiles
		this.file = src.file
		this.fileUTI = src.fileUTI
		this.fullText = src.fullText
		this.height = src.height
		this.indexed_fulltext = src.indexed_fulltext
		this.keywords = src.keywords
		this.length = src.length
		this.localizedDescription = src.localizedDescription
		this.localizedName = src.localizedName
		this.localizedShortDescription = src.localizedShortDescription
		this.localizedTitle = src.localizedTitle
		this.mediaUuid = src.mediaUuid
		this.modificationDate = src.modificationDate
		this.objectName = src.objectName
		this.parentFolder = src.parentFolder
		this.previewDate = src.previewDate
		this.previewRatio = src.previewRatio
		this.publications = src.publications
		this.representedBy = src.representedBy
		this.restricted = src.restricted
		this.source = src.source
		this.specialInstructions = src.specialInstructions
		this.status = src.status
		this.stocks = src.stocks
		this.title = src.title
		this.usage = src.usage
		this.width = src.width
	}
}
