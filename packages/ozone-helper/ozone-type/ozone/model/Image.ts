import { Media } from './Media'

import {Item, UUID, Instant, OzoneType} from './Item'

@OzoneType("image")
export class Image extends Media { 
   dpi?: number
 } 
