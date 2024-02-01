// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ChunkMetadata } from '../models/ChunkMetadata';
import { ChunkMetadataWithFileData } from '../models/ChunkMetadataWithFileData';
import { CreateChunkData } from '../models/CreateChunkData';
import { DefaultError } from '../models/DefaultError';
import { GenerateChunksRequest } from '../models/GenerateChunksRequest';
import { RecommendChunksRequest } from '../models/RecommendChunksRequest';
import { ReturnCreatedChunk } from '../models/ReturnCreatedChunk';
import { SearchChunkData } from '../models/SearchChunkData';
import { SearchChunkQueryResponseBody } from '../models/SearchChunkQueryResponseBody';
import { SuggestedQueriesRequest } from '../models/SuggestedQueriesRequest';
import { SuggestedQueriesResponse } from '../models/SuggestedQueriesResponse';
import { UpdateChunkByTrackingIdData } from '../models/UpdateChunkByTrackingIdData';
import { UpdateChunkData } from '../models/UpdateChunkData';

/**
 * no description
 */
export class ChunkApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * create_chunk  Create a new chunk. If the chunk has the same tracking_id as an existing chunk, the request will fail. Once a chunk is created, it can be searched for using the search endpoint.
     * create_chunk
     * @param tRDataset The dataset id to use for the request
     * @param createChunkData JSON request payload to create a new chunk (chunk)
     */
    public async createChunk(tRDataset: string, createChunkData: CreateChunkData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tRDataset' is not null or undefined
        if (tRDataset === null || tRDataset === undefined) {
            throw new RequiredError("ChunkApi", "createChunk", "tRDataset");
        }


        // verify required parameter 'createChunkData' is not null or undefined
        if (createChunkData === null || createChunkData === undefined) {
            throw new RequiredError("ChunkApi", "createChunk", "createChunkData");
        }


        // Path Params
        const localVarPath = '/api/chunk';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("TR-Dataset", ObjectSerializer.serialize(tRDataset, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createChunkData, "CreateChunkData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["Cookie"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * get_suggested_queries  This endpoint will generate 3 suggested queries based off the query provided in the request body and return them as a JSON object.
     * get_suggested_queries
     * @param tRDataset The dataset id to use for the request
     * @param suggestedQueriesRequest JSON request payload to get alternative suggested queries
     */
    public async createSuggestedQueriesHandler(tRDataset: string, suggestedQueriesRequest: SuggestedQueriesRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tRDataset' is not null or undefined
        if (tRDataset === null || tRDataset === undefined) {
            throw new RequiredError("ChunkApi", "createSuggestedQueriesHandler", "tRDataset");
        }


        // verify required parameter 'suggestedQueriesRequest' is not null or undefined
        if (suggestedQueriesRequest === null || suggestedQueriesRequest === undefined) {
            throw new RequiredError("ChunkApi", "createSuggestedQueriesHandler", "suggestedQueriesRequest");
        }


        // Path Params
        const localVarPath = '/api/chunk/gen_suggestions';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("TR-Dataset", ObjectSerializer.serialize(tRDataset, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(suggestedQueriesRequest, "SuggestedQueriesRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["Cookie"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * delete_chunk  Delete a chunk by its id. If deleting a root chunk which has a collision, the most recently created collision will become a new root chunk.
     * delete_chunk
     * @param chunkId id of the chunk you want to delete
     * @param tRDataset The dataset id to use for the request
     */
    public async deleteChunk(chunkId: string, tRDataset: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'chunkId' is not null or undefined
        if (chunkId === null || chunkId === undefined) {
            throw new RequiredError("ChunkApi", "deleteChunk", "chunkId");
        }


        // verify required parameter 'tRDataset' is not null or undefined
        if (tRDataset === null || tRDataset === undefined) {
            throw new RequiredError("ChunkApi", "deleteChunk", "tRDataset");
        }


        // Path Params
        const localVarPath = '/api/chunk/{chunk_id}'
            .replace('{' + 'chunk_id' + '}', encodeURIComponent(String(chunkId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("TR-Dataset", ObjectSerializer.serialize(tRDataset, "string", ""));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["Cookie"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * delete_chunk_by_tracking_id  Delete a chunk by tracking_id. This is useful for when you are coordinating with an external system and want to use the tracking_id to identify the chunk. If deleting a root chunk which has a collision, the most recently created collision will become a new root chunk.
     * delete_chunk_by_tracking_id
     * @param trackingId tracking_id of the chunk you want to delete
     * @param tRDataset The dataset id to use for the request
     */
    public async deleteChunkByTrackingId(trackingId: string, tRDataset: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'trackingId' is not null or undefined
        if (trackingId === null || trackingId === undefined) {
            throw new RequiredError("ChunkApi", "deleteChunkByTrackingId", "trackingId");
        }


        // verify required parameter 'tRDataset' is not null or undefined
        if (tRDataset === null || tRDataset === undefined) {
            throw new RequiredError("ChunkApi", "deleteChunkByTrackingId", "tRDataset");
        }


        // Path Params
        const localVarPath = '/api/chunk/tracking_id/{tracking_id}'
            .replace('{' + 'tracking_id' + '}', encodeURIComponent(String(trackingId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("TR-Dataset", ObjectSerializer.serialize(tRDataset, "string", ""));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["Cookie"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * augmented_generation_from_chunks  This endpoint exists as an alternative to the topic+message concept where our API handles chat memory. With this endpoint, the user is responsible for providing the context window and the prompt. See more in the \"search before generate\" page at docs.trieve.ai.
     * augmented_generation_from_chunks
     * @param tRDataset The dataset id to use for the request
     * @param generateChunksRequest JSON request payload to perform RAG on some chunks (chunks)
     */
    public async generateOffChunks(tRDataset: string, generateChunksRequest: GenerateChunksRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tRDataset' is not null or undefined
        if (tRDataset === null || tRDataset === undefined) {
            throw new RequiredError("ChunkApi", "generateOffChunks", "tRDataset");
        }


        // verify required parameter 'generateChunksRequest' is not null or undefined
        if (generateChunksRequest === null || generateChunksRequest === undefined) {
            throw new RequiredError("ChunkApi", "generateOffChunks", "generateChunksRequest");
        }


        // Path Params
        const localVarPath = '/api/chunk/generate';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("TR-Dataset", ObjectSerializer.serialize(tRDataset, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(generateChunksRequest, "GenerateChunksRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["Cookie"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * get_chunk  Get a singular chunk by id.
     * get_chunk
     * @param chunkId Id of the chunk you want to fetch.
     * @param tRDataset The dataset id to use for the request
     */
    public async getChunkById(chunkId: string, tRDataset: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'chunkId' is not null or undefined
        if (chunkId === null || chunkId === undefined) {
            throw new RequiredError("ChunkApi", "getChunkById", "chunkId");
        }


        // verify required parameter 'tRDataset' is not null or undefined
        if (tRDataset === null || tRDataset === undefined) {
            throw new RequiredError("ChunkApi", "getChunkById", "tRDataset");
        }


        // Path Params
        const localVarPath = '/api/chunk/{chunk_id}'
            .replace('{' + 'chunk_id' + '}', encodeURIComponent(String(chunkId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("TR-Dataset", ObjectSerializer.serialize(tRDataset, "string", ""));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["Cookie"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * get_chunk_by_tracking_id  Get a singular chunk by tracking_id. This is useful for when you are coordinating with an external system and want to use your own id as the primary reference for a chunk.
     * get_chunk_by_tracking_id
     * @param trackingId tracking_id of the chunk you want to fetch
     * @param tRDataset The dataset id to use for the request
     */
    public async getChunkByTrackingId(trackingId: string, tRDataset: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'trackingId' is not null or undefined
        if (trackingId === null || trackingId === undefined) {
            throw new RequiredError("ChunkApi", "getChunkByTrackingId", "trackingId");
        }


        // verify required parameter 'tRDataset' is not null or undefined
        if (tRDataset === null || tRDataset === undefined) {
            throw new RequiredError("ChunkApi", "getChunkByTrackingId", "tRDataset");
        }


        // Path Params
        const localVarPath = '/api/chunk/tracking_id/{tracking_id}'
            .replace('{' + 'tracking_id' + '}', encodeURIComponent(String(trackingId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("TR-Dataset", ObjectSerializer.serialize(tRDataset, "string", ""));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["Cookie"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * get_recommended_chunks  Get recommendations of chunks similar to the chunks in the request. Think about this as a feature similar to the \"add to playlist\" recommendation feature on Spotify. This request pairs especially well with our groups endpoint.
     * get_recommended_chunks
     * @param tRDataset The dataset id to use for the request
     * @param recommendChunksRequest JSON request payload to get recommendations of chunks similar to the chunks in the request
     */
    public async getRecommendedChunks(tRDataset: string, recommendChunksRequest: RecommendChunksRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tRDataset' is not null or undefined
        if (tRDataset === null || tRDataset === undefined) {
            throw new RequiredError("ChunkApi", "getRecommendedChunks", "tRDataset");
        }


        // verify required parameter 'recommendChunksRequest' is not null or undefined
        if (recommendChunksRequest === null || recommendChunksRequest === undefined) {
            throw new RequiredError("ChunkApi", "getRecommendedChunks", "recommendChunksRequest");
        }


        // Path Params
        const localVarPath = '/api/chunk/recommend';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("TR-Dataset", ObjectSerializer.serialize(tRDataset, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(recommendChunksRequest, "RecommendChunksRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["Cookie"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * search  This route provides the primary search functionality for the API. It can be used to search for chunks by semantic similarity, full-text similarity, or a combination of both. Results\' `chunk_html` values will be modified with `<b>` tags for sub-sentence highlighting.
     * search
     * @param tRDataset The dataset id to use for the request
     * @param searchChunkData JSON request payload to semantically search for chunks (chunks)
     */
    public async searchChunk(tRDataset: string, searchChunkData: SearchChunkData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tRDataset' is not null or undefined
        if (tRDataset === null || tRDataset === undefined) {
            throw new RequiredError("ChunkApi", "searchChunk", "tRDataset");
        }


        // verify required parameter 'searchChunkData' is not null or undefined
        if (searchChunkData === null || searchChunkData === undefined) {
            throw new RequiredError("ChunkApi", "searchChunk", "searchChunkData");
        }


        // Path Params
        const localVarPath = '/api/chunk/search';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("TR-Dataset", ObjectSerializer.serialize(tRDataset, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(searchChunkData, "SearchChunkData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["Cookie"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * update_chunk  Update a chunk. If you try to change the tracking_id of the chunk to have the same tracking_id as an existing chunk, the request will fail.
     * update_chunk
     * @param tRDataset The dataset id to use for the request
     * @param updateChunkData JSON request payload to update a chunk (chunk)
     */
    public async updateChunk(tRDataset: string, updateChunkData: UpdateChunkData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tRDataset' is not null or undefined
        if (tRDataset === null || tRDataset === undefined) {
            throw new RequiredError("ChunkApi", "updateChunk", "tRDataset");
        }


        // verify required parameter 'updateChunkData' is not null or undefined
        if (updateChunkData === null || updateChunkData === undefined) {
            throw new RequiredError("ChunkApi", "updateChunk", "updateChunkData");
        }


        // Path Params
        const localVarPath = '/api/chunk/update';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("TR-Dataset", ObjectSerializer.serialize(tRDataset, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateChunkData, "UpdateChunkData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["Cookie"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * update_chunk_by_tracking_id  Update a chunk by tracking_id. This is useful for when you are coordinating with an external system and want to use the tracking_id to identify the chunk.
     * update_chunk_by_tracking_id
     * @param tRDataset The dataset id to use for the request
     * @param updateChunkByTrackingIdData JSON request payload to update a chunk by tracking_id (chunks)
     */
    public async updateChunkByTrackingId(tRDataset: string, updateChunkByTrackingIdData: UpdateChunkByTrackingIdData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tRDataset' is not null or undefined
        if (tRDataset === null || tRDataset === undefined) {
            throw new RequiredError("ChunkApi", "updateChunkByTrackingId", "tRDataset");
        }


        // verify required parameter 'updateChunkByTrackingIdData' is not null or undefined
        if (updateChunkByTrackingIdData === null || updateChunkByTrackingIdData === undefined) {
            throw new RequiredError("ChunkApi", "updateChunkByTrackingId", "updateChunkByTrackingIdData");
        }


        // Path Params
        const localVarPath = '/api/chunk/tracking_id/update';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("TR-Dataset", ObjectSerializer.serialize(tRDataset, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateChunkByTrackingIdData, "UpdateChunkByTrackingIdData", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["Cookie"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class ChunkApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createChunk
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createChunkWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ReturnCreatedChunk >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ReturnCreatedChunk = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReturnCreatedChunk", ""
            ) as ReturnCreatedChunk;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: DefaultError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DefaultError", ""
            ) as DefaultError;
            throw new ApiException<DefaultError>(response.httpStatusCode, "Service error relating to to creating a chunk, likely due to conflicting tracking_id", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ReturnCreatedChunk = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReturnCreatedChunk", ""
            ) as ReturnCreatedChunk;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSuggestedQueriesHandler
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createSuggestedQueriesHandlerWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SuggestedQueriesResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SuggestedQueriesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuggestedQueriesResponse", ""
            ) as SuggestedQueriesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: DefaultError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DefaultError", ""
            ) as DefaultError;
            throw new ApiException<DefaultError>(response.httpStatusCode, "Service error relating to to updating chunk, likely due to conflicting tracking_id", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SuggestedQueriesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuggestedQueriesResponse", ""
            ) as SuggestedQueriesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteChunk
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteChunkWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: DefaultError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DefaultError", ""
            ) as DefaultError;
            throw new ApiException<DefaultError>(response.httpStatusCode, "Service error relating to finding a chunk by tracking_id", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteChunkByTrackingId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteChunkByTrackingIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: DefaultError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DefaultError", ""
            ) as DefaultError;
            throw new ApiException<DefaultError>(response.httpStatusCode, "Service error relating to finding a chunk by tracking_id", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to generateOffChunks
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async generateOffChunksWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: DefaultError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DefaultError", ""
            ) as DefaultError;
            throw new ApiException<DefaultError>(response.httpStatusCode, "Service error relating to to updating chunk, likely due to conflicting tracking_id", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getChunkById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getChunkByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ChunkMetadata >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ChunkMetadata = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ChunkMetadata", ""
            ) as ChunkMetadata;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: DefaultError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DefaultError", ""
            ) as DefaultError;
            throw new ApiException<DefaultError>(response.httpStatusCode, "Service error relating to fidning a chunk by tracking_id", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ChunkMetadata = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ChunkMetadata", ""
            ) as ChunkMetadata;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getChunkByTrackingId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getChunkByTrackingIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ChunkMetadata >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ChunkMetadata = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ChunkMetadata", ""
            ) as ChunkMetadata;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: DefaultError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DefaultError", ""
            ) as DefaultError;
            throw new ApiException<DefaultError>(response.httpStatusCode, "Service error relating to fidning a chunk by tracking_id", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ChunkMetadata = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ChunkMetadata", ""
            ) as ChunkMetadata;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRecommendedChunks
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getRecommendedChunksWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<ChunkMetadataWithFileData> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<ChunkMetadataWithFileData> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ChunkMetadataWithFileData>", ""
            ) as Array<ChunkMetadataWithFileData>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: DefaultError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DefaultError", ""
            ) as DefaultError;
            throw new ApiException<DefaultError>(response.httpStatusCode, "Service error relating to to getting similar chunks", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<ChunkMetadataWithFileData> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ChunkMetadataWithFileData>", ""
            ) as Array<ChunkMetadataWithFileData>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchChunk
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async searchChunkWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SearchChunkQueryResponseBody >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SearchChunkQueryResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SearchChunkQueryResponseBody", ""
            ) as SearchChunkQueryResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: DefaultError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DefaultError", ""
            ) as DefaultError;
            throw new ApiException<DefaultError>(response.httpStatusCode, "Service error relating to searching", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SearchChunkQueryResponseBody = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SearchChunkQueryResponseBody", ""
            ) as SearchChunkQueryResponseBody;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateChunk
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateChunkWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: DefaultError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DefaultError", ""
            ) as DefaultError;
            throw new ApiException<DefaultError>(response.httpStatusCode, "Service error relating to to updating chunk, likely due to conflicting tracking_id", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateChunkByTrackingId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateChunkByTrackingIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: DefaultError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DefaultError", ""
            ) as DefaultError;
            throw new ApiException<DefaultError>(response.httpStatusCode, "Service error relating to to updating chunk", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
