/**
 * Ozone
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 3.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface SearchRequest {
    searchMode?: SearchRequest.SearchModeEnum;

    id?: number;
    ids?: Array<number>

    offset?: number;

    size?: number;

    query?: models.Query;

    sorts?: Array<models.Sort>;

    aggregations?: Array<models.TermsAggregation>;

    projectionFields?: Array<string>;

}
export namespace SearchRequest {
    export enum SearchModeEnum {
        DEFAULT = <any> 'DEFAULT',
        TRASH = <any> 'TRASH',
        ALL = <any> 'ALL'
    }
}
