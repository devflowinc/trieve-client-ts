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

export class RecommendChunksRequest {
    /**
    * The ids of the chunks to be used as positive examples for the recommendation. The chunks in this array will be used to find similar chunks.
    */
    'positiveChunkIds': Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "positiveChunkIds",
            "baseName": "positive_chunk_ids",
            "type": "Array<string>",
            "format": "uuid"
        }    ];

    static getAttributeTypeMap() {
        return RecommendChunksRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
