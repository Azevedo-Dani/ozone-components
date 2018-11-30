import {Item, UUID, Instant, OzoneType} from './Item'

@OzoneType('flowr.remote.control.settings')
export class FlowrRemoteControlSettings extends Item {
	disableIR: boolean | null

	constructor(src: FlowrRemoteControlSettings) {
		super(src)
		this.disableIR = src.disableIR
	}
}
