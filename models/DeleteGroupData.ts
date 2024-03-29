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

export class DeleteGroupData {
    'deleteChunks'?: boolean | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "deleteChunks",
            "baseName": "delete_chunks",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DeleteGroupData.attributeTypeMap;
    }

    public constructor() {
    }
}

