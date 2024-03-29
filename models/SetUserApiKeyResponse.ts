/**
 * trieve-server
 * Trieve REST API OpenAPI Documentation
 *
 * OpenAPI spec version: 0.3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class SetUserApiKeyResponse {
    /**
    * The api key which was created. This is the value which should be used in the Authorization header.
    */
    'apiKey': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apiKey",
            "baseName": "api_key",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SetUserApiKeyResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

