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

export class Event {
    'createdAt': Date;
    'datasetId': string;
    'eventData': any | null;
    'eventType': string;
    'id': string;
    'updatedAt': Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
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
            "name": "eventData",
            "baseName": "event_data",
            "type": "any",
            "format": ""
        },
        {
            "name": "eventType",
            "baseName": "event_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
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
        return Event.attributeTypeMap;
    }

    public constructor() {
    }
}
