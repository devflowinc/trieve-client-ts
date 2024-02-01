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

export class DatasetUsageCount {
    'chunkCount': number;
    'datasetId': string;
    'id': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "chunkCount",
            "baseName": "chunk_count",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "datasetId",
            "baseName": "dataset_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        }    ];

    static getAttributeTypeMap() {
        return DatasetUsageCount.attributeTypeMap;
    }

    public constructor() {
    }
}
