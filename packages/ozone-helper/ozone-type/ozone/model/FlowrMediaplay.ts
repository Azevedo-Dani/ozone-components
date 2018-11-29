import { ServiceInfo } from './ServiceInfo'
import { TimestampedItem } from './TimestampedItem'

import {Item, UUID, Instant, OzoneType} from './Item'

@OzoneType("flowr.mediaplay")
export class FlowrMediaplay extends TimestampedItem implements ServiceInfo { 
	description?: string
	effectivelyPlayedDuration?: number
	instanceId: string
	itemId?: UUID
	playId?: UUID
	properties?: { [key: string]:string; }
	ratioEffectiveTotal?: number
	replicaId?: string
	serviceName?: string
	totalDuration?: number
	url?: string
	userAgent?: string

	constructor(src:FlowrMediaplay) { 
		super(src)
		this.description = src.description
		this.effectivelyPlayedDuration = src.effectivelyPlayedDuration
		this.instanceId = src.instanceId
		this.itemId = src.itemId
		this.playId = src.playId
		this.properties = src.properties
		this.ratioEffectiveTotal = src.ratioEffectiveTotal
		this.replicaId = src.replicaId
		this.serviceName = src.serviceName
		this.totalDuration = src.totalDuration
		this.url = src.url
		this.userAgent = src.userAgent
	}
}
