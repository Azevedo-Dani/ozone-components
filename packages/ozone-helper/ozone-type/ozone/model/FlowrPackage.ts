import {Item, UUID, Instant, OzoneType} from './Item'

@OzoneType("flowr.package")
export class FlowrPackage extends Item { 
   localizedName?: { [key: string]: string; }
 } 
