import {Item, UUID, Instant, OzoneType} from './Item'

@OzoneType("room")
export class Room extends Item { 
   roomNumber?: string
   wakeUps?: [string]
 } 
