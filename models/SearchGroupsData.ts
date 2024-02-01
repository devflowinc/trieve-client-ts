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

import { SearchChunkDataWeightsInner } from '../models/SearchChunkDataWeightsInner';
import { HttpFile } from '../http/http';

export class SearchGroupsData {
    /**
    * Set cross_encoder to true to use the BAAI/bge-reranker-large model to re-rank search results. This will only apply if in hybrid search mode. If no weighs are specified, the re-ranker will be used by default.
    */
    'crossEncoder'?: boolean | null;
    /**
    * Set date_bias to true to bias search results towards more recent chunks. This will work best in hybrid search mode.
    */
    'dateBias'?: boolean | null;
    /**
    * Filters is a JSON object which can be used to filter chunks. The values on each key in the object will be used to check for an exact substring match on the metadata values for each existing chunk. This is useful for when you want to filter chunks by arbitrary metadata. Unlike with tag filtering, there is a performance hit for filtering on metadata.
    */
    'filters'?: any | null;
    /**
    * Group specifies the group to search within. Results will only consist of chunks which are bookmarks within the specified group.
    */
    'groupId': string;
    /**
    * Set highlight_delimiters to a list of strings to use as delimiters for highlighting.
    */
    'highlightDelimiters'?: Array<string> | null;
    /**
    * Set highlight_results to true to highlight the results.
    */
    'highlightResults'?: boolean | null;
    /**
    * The link set is a comma separated list of links. This can be used to filter chunks by link. HNSW indices do not exist for links, so there is a performance hit for filtering on them.
    */
    'link'?: Array<string> | null;
    /**
    * The page of chunks to fetch. Each page is 10 chunks. Support for custom page size is coming soon.
    */
    'page'?: number | null;
    /**
    * The query is the search query. This can be any string. The query will be used to create an embedding vector and/or SPLADE vector which will be used to find the result set.
    */
    'query': string;
    /**
    * Search_type can be either \"semantic\", \"fulltext\", or \"hybrid\". \"hybrid\" will pull in one page (10 chunks) of both semantic and full-text results then re-rank them using BAAI/bge-reranker-large. \"semantic\" will pull in one page (10 chunks) of the nearest cosine distant vectors. \"fulltext\" will pull in one page (10 chunks) of full-text results based on SPLADE.
    */
    'searchType': string;
    /**
    * The tag set is a comma separated list of tags. This can be used to filter chunks by tag. Unlike with metadata filtering, HNSW indices will exist for each tag such that there is not a performance hit for filtering on them.
    */
    'tagSet'?: Array<string> | null;
    /**
    * Weights are a tuple of two floats. The first value is the weight for the semantic search results and the second value is the weight for the full-text search results. This can be used to bias search results towards semantic or full-text results. This will only apply if in hybrid search mode and cross_encoder is set to false.
    */
    'weights'?: Array<SearchChunkDataWeightsInner> | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "crossEncoder",
            "baseName": "cross_encoder",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "dateBias",
            "baseName": "date_bias",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "filters",
            "baseName": "filters",
            "type": "any",
            "format": ""
        },
        {
            "name": "groupId",
            "baseName": "group_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "highlightDelimiters",
            "baseName": "highlight_delimiters",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "highlightResults",
            "baseName": "highlight_results",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "page",
            "baseName": "page",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "query",
            "baseName": "query",
            "type": "string",
            "format": ""
        },
        {
            "name": "searchType",
            "baseName": "search_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "tagSet",
            "baseName": "tag_set",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "weights",
            "baseName": "weights",
            "type": "Array<SearchChunkDataWeightsInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SearchGroupsData.attributeTypeMap;
    }

    public constructor() {
    }
}

