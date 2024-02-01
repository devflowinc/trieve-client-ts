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

export class RegenerateMessageData {
    /**
    * Whether or not to highlight the citations in the response. If this is set to true or not included, the citations will be highlighted. If this is set to false, the citations will not be highlighted. Default is true.
    */
    'highlightCitations'?: boolean | null;
    /**
    * The delimiters to use for highlighting the citations. If this is not included, the default delimiters will be used. Default is `[\".\", \"!\", \"?\", \"\\n\", \"\\t\", \",\"]`.
    */
    'highlightDelimiters'?: Array<string> | null;
    /**
    * The model to use for the assistant generative inferences. This can be any model from the openrouter model list. If no model is provided, the gryphe/mythomax-l2-13b will be used.~
    */
    'model'?: string | null;
    /**
    * Whether or not to stream the response. If this is set to true or not included, the response will be a stream. If this is set to false, the response will be a normal JSON response. Default is true.
    */
    'streamResponse'?: boolean | null;
    /**
    * The id of the topic to regenerate the last message for.
    */
    'topicId': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "highlightCitations",
            "baseName": "highlight_citations",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "highlightDelimiters",
            "baseName": "highlight_delimiters",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "model",
            "baseName": "model",
            "type": "string",
            "format": ""
        },
        {
            "name": "streamResponse",
            "baseName": "stream_response",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "topicId",
            "baseName": "topic_id",
            "type": "string",
            "format": "uuid"
        }    ];

    static getAttributeTypeMap() {
        return RegenerateMessageData.attributeTypeMap;
    }

    public constructor() {
    }
}

