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

export interface TermsAggregation extends models.Aggregation {
    name: string;

    field: string;

    order?: TermsAggregation.OrderEnum;

    size?: number;

    includePattern?: string;

    excludePattern?: string;

    includeTerms?: Array<string>;

    excludeTerms?: Array<string>;

}
export namespace TermsAggregation {
    export type OrderEnum = 'TERM_ASC' | 'TERM_DESC'| 'COUNT_ASC'| 'COUNT_DESC'
}
