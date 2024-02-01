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

import { ChunkGroupAndFile } from '../models/ChunkGroupAndFile';
import { HttpFile } from '../http/http';

export class GroupData {
    'groups': Array<ChunkGroupAndFile>;
    'totalPages': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "groups",
            "baseName": "groups",
            "type": "Array<ChunkGroupAndFile>",
            "format": ""
        },
        {
            "name": "totalPages",
            "baseName": "total_pages",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return GroupData.attributeTypeMap;
    }

    public constructor() {
    }
}
