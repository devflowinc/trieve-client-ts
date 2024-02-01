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

export class DeleteTopicData {
    /**
    * The id of the topic to target.
    */
    'topicId': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "topicId",
            "baseName": "topic_id",
            "type": "string",
            "format": "uuid"
        }    ];

    static getAttributeTypeMap() {
        return DeleteTopicData.attributeTypeMap;
    }

    public constructor() {
    }
}

