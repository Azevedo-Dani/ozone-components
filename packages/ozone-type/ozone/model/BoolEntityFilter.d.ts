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
export interface BoolEntityFilter extends models.EntityFilter {
    mustClauses?: Array<models.EntityFilter>;
    mustNotClauses?: Array<models.EntityFilter>;
    shouldClauses?: Array<models.EntityFilter>;
    minimumShouldMatch?: number;
}