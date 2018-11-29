import {Item, UUID, Instant, OzoneType} from './Item'

@OzoneType("recording")
export class Recording extends Item { 
	channelId: UUID
	duration?: number
	start: Instant
	stop: Instant
	video?: UUID

	constructor(src:Recording) { 
		super(src)
		this.channelId = src.channelId
		this.duration = src.duration
		this.start = src.start
		this.stop = src.stop
		this.video = src.video
	}
}
