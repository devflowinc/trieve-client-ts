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

export class DatasetGroupQuery {
    'datasetId': string;
    'page': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "datasetId",
            "baseName": "dataset_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "page",
            "baseName": "page",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return DatasetGroupQuery.attributeTypeMap;
    }

    public constructor() {
    }
}
