import {Item, UUID, Instant, OzoneType} from './Item'

@OzoneType("article.category")
export class ArticleCategory extends Item { 
   description?: { [key: string]: string; }
   localizedName?: { [key: string]: string; }
 } 
