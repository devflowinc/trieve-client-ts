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

export class GenerateOffGroupData {
    'groupId': string;
    'page'?: number | null;
    'query'?: string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "groupId",
            "baseName": "group_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "page",
            "baseName": "page",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "query",
            "baseName": "query",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GenerateOffGroupData.attributeTypeMap;
    }

    public constructor() {
    }
}

