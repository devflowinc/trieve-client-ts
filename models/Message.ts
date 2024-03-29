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

export class Message {
    'completionTokens'?: number | null;
    'content': string;
    'createdAt': Date;
    'datasetId': string;
    'deleted': boolean;
    'id': string;
    'promptTokens'?: number | null;
    'role': string;
    'sortOrder': number;
    'topicId': string;
    'updatedAt': Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "completionTokens",
            "baseName": "completion_tokens",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "content",
            "baseName": "content",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "datasetId",
            "baseName": "dataset_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "deleted",
            "baseName": "deleted",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "promptTokens",
            "baseName": "prompt_tokens",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "role",
            "baseName": "role",
            "type": "string",
            "format": ""
        },
        {
            "name": "sortOrder",
            "baseName": "sort_order",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "topicId",
            "baseName": "topic_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return Message.attributeTypeMap;
    }

    public constructor() {
    }
}

