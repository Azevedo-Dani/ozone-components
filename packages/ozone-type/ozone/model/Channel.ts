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

export interface Channel extends models.Item {
    restricted?: boolean;

    logo?: string;

    ottUrl?: string;

    aliases?: Array<string>;

    keywords?: Array<string>;

    languages?: Array<string>;

    tvGuideNames?: Array<string>;

    verticalRes?: number;

    channelUuid?: string;

    channelType?: string;

    storage?: string;

    multicastUrl?: string;

    languageIndexes?: Array<string>;

    enabled?: boolean;

    cbUrl?: string;

    output?: any;

    input?: any;

    transcodingEnabled?: boolean;

    bufferDuration?: number;

    defaultPackages?: Array<string>;

    scenes?: Array<string>;

    horizontalRes?: number;

}
