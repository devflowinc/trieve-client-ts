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

import { BookmarkChunks } from '../models/BookmarkChunks';
import { ChunkGroup } from '../models/ChunkGroup';
import { HttpFile } from '../http/http';

export class BookmarkData {
    'bookmarks': Array<BookmarkChunks>;
    'group': ChunkGroup;
    'totalPages': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "bookmarks",
            "baseName": "bookmarks",
            "type": "Array<BookmarkChunks>",
            "format": ""
        },
        {
            "name": "group",
            "baseName": "group",
            "type": "ChunkGroup",
            "format": ""
        },
        {
            "name": "totalPages",
            "baseName": "total_pages",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return BookmarkData.attributeTypeMap;
    }

    public constructor() {
    }
}

