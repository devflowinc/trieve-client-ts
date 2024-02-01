import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { AddChunkToGroupData } from '../models/AddChunkToGroupData';
import { ApiKeyDTO } from '../models/ApiKeyDTO';
import { AuthData } from '../models/AuthData';
import { BookmarkChunks } from '../models/BookmarkChunks';
import { BookmarkData } from '../models/BookmarkData';
import { BookmarkGroupResult } from '../models/BookmarkGroupResult';
import { ChatMessageProxy } from '../models/ChatMessageProxy';
import { ChunkGroup } from '../models/ChunkGroup';
import { ChunkGroupAndFile } from '../models/ChunkGroupAndFile';
import { ChunkMetadata } from '../models/ChunkMetadata';
import { ChunkMetadataWithFileData } from '../models/ChunkMetadataWithFileData';
import { ClientDatasetConfiguration } from '../models/ClientDatasetConfiguration';
import { CreateChunkData } from '../models/CreateChunkData';
import { CreateChunkGroupData } from '../models/CreateChunkGroupData';
import { CreateDatasetRequest } from '../models/CreateDatasetRequest';
import { CreateMessageData } from '../models/CreateMessageData';
import { CreateOrganizationData } from '../models/CreateOrganizationData';
import { CreateTopicData } from '../models/CreateTopicData';
import { Dataset } from '../models/Dataset';
import { DatasetAndOrgWithSubAndPlan } from '../models/DatasetAndOrgWithSubAndPlan';
import { DatasetAndUsage } from '../models/DatasetAndUsage';
import { DatasetDTO } from '../models/DatasetDTO';
import { DatasetGroupQuery } from '../models/DatasetGroupQuery';
import { DatasetUsageCount } from '../models/DatasetUsageCount';
import { DefaultError } from '../models/DefaultError';
import { DeleteBookmarkPathData } from '../models/DeleteBookmarkPathData';
import { DeleteDatasetRequest } from '../models/DeleteDatasetRequest';
import { DeleteGroupData } from '../models/DeleteGroupData';
import { DeleteTopicData } from '../models/DeleteTopicData';
import { DeleteUserApiKeyRequest } from '../models/DeleteUserApiKeyRequest';
import { EditMessageData } from '../models/EditMessageData';
import { Event } from '../models/Event';
import { EventId } from '../models/EventId';
import { EventReturn } from '../models/EventReturn';
import { Events } from '../models/Events';
import { FileDTO } from '../models/FileDTO';
import { GenerateChunksRequest } from '../models/GenerateChunksRequest';
import { GenerateOffGroupData } from '../models/GenerateOffGroupData';
import { GetAllBookmarksData } from '../models/GetAllBookmarksData';
import { GetDirectPaymentLinkData } from '../models/GetDirectPaymentLinkData';
import { GetGroupsForChunksData } from '../models/GetGroupsForChunksData';
import { GetUserWithChunksData } from '../models/GetUserWithChunksData';
import { GroupData } from '../models/GroupData';
import { InvitationData } from '../models/InvitationData';
import { Message } from '../models/Message';
import { ModelFile } from '../models/ModelFile';
import { Organization } from '../models/Organization';
import { OrganizationUsageCount } from '../models/OrganizationUsageCount';
import { OrganizationWithSubAndPlan } from '../models/OrganizationWithSubAndPlan';
import { RecommendChunksRequest } from '../models/RecommendChunksRequest';
import { RegenerateMessageData } from '../models/RegenerateMessageData';
import { ReturnCreatedChunk } from '../models/ReturnCreatedChunk';
import { ScoreChunkDTO } from '../models/ScoreChunkDTO';
import { SearchChunkData } from '../models/SearchChunkData';
import { SearchChunkDataTimeRangeInner } from '../models/SearchChunkDataTimeRangeInner';
import { SearchChunkDataWeightsInner } from '../models/SearchChunkDataWeightsInner';
import { SearchChunkQueryResponseBody } from '../models/SearchChunkQueryResponseBody';
import { SearchGroupsData } from '../models/SearchGroupsData';
import { SearchGroupsResult } from '../models/SearchGroupsResult';
import { SetUserApiKeyRequest } from '../models/SetUserApiKeyRequest';
import { SetUserApiKeyResponse } from '../models/SetUserApiKeyResponse';
import { SlimGroup } from '../models/SlimGroup';
import { SlimUser } from '../models/SlimUser';
import { StripePlan } from '../models/StripePlan';
import { StripeSubscription } from '../models/StripeSubscription';
import { SuggestedQueriesRequest } from '../models/SuggestedQueriesRequest';
import { SuggestedQueriesResponse } from '../models/SuggestedQueriesResponse';
import { Topic } from '../models/Topic';
import { UpdateChunkByTrackingIdData } from '../models/UpdateChunkByTrackingIdData';
import { UpdateChunkData } from '../models/UpdateChunkData';
import { UpdateChunkGroupData } from '../models/UpdateChunkGroupData';
import { UpdateDatasetRequest } from '../models/UpdateDatasetRequest';
import { UpdateOrganizationData } from '../models/UpdateOrganizationData';
import { UpdateSubscriptionData } from '../models/UpdateSubscriptionData';
import { UpdateTopicData } from '../models/UpdateTopicData';
import { UpdateUserData } from '../models/UpdateUserData';
import { UploadFileData } from '../models/UploadFileData';
import { UploadFileResult } from '../models/UploadFileResult';
import { UserDTO } from '../models/UserDTO';
import { UserDTOWithChunks } from '../models/UserDTOWithChunks';
import { UserOrganization } from '../models/UserOrganization';
import { UserRole } from '../models/UserRole';

import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";
export class ObservableAuthApi {
    private requestFactory: AuthApiRequestFactory;
    private responseProcessor: AuthApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthApiRequestFactory,
        responseProcessor?: AuthApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuthApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuthApiResponseProcessor();
    }

    /**
     * openid_callback  This is the callback route for the OAuth provider, it should not be called directly. Redirects to browser with set-cookie header.
     * openid_callback
     */
    public callbackWithHttpInfo(_options?: Configuration): Observable<HttpInfo<SlimUser>> {
        const requestContextPromise = this.requestFactory.callback(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.callbackWithHttpInfo(rsp)));
            }));
    }

    /**
     * openid_callback  This is the callback route for the OAuth provider, it should not be called directly. Redirects to browser with set-cookie header.
     * openid_callback
     */
    public callback(_options?: Configuration): Observable<SlimUser> {
        return this.callbackWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<SlimUser>) => apiResponse.data));
    }

    /**
     * get_me  Get the user corresponding to your current auth credentials.
     * get_me
     */
    public getMeWithHttpInfo(_options?: Configuration): Observable<HttpInfo<SlimUser>> {
        const requestContextPromise = this.requestFactory.getMe(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMeWithHttpInfo(rsp)));
            }));
    }

    /**
     * get_me  Get the user corresponding to your current auth credentials.
     * get_me
     */
    public getMe(_options?: Configuration): Observable<SlimUser> {
        return this.getMeWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<SlimUser>) => apiResponse.data));
    }

    /**
     * login  This will redirect you to the OAuth provider for authentication with email/pass, SSO, Google, Github, etc.
     * login
     * @param invCode Code sent via email as a result of successful call to send_invitation
     * @param organizationId ID of organization to authenticate into
     * @param redirectUri URL to redirect to after successful login
     */
    public loginWithHttpInfo(invCode?: string, organizationId?: string, redirectUri?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.login(invCode, organizationId, redirectUri, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.loginWithHttpInfo(rsp)));
            }));
    }

    /**
     * login  This will redirect you to the OAuth provider for authentication with email/pass, SSO, Google, Github, etc.
     * login
     * @param invCode Code sent via email as a result of successful call to send_invitation
     * @param organizationId ID of organization to authenticate into
     * @param redirectUri URL to redirect to after successful login
     */
    public login(invCode?: string, organizationId?: string, redirectUri?: string, _options?: Configuration): Observable<void> {
        return this.loginWithHttpInfo(invCode, organizationId, redirectUri, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * logout  Invalidate your current auth credential stored typically stored in a cookie. This does not invalidate your API key.
     * logout
     */
    public logoutWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.logout(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.logoutWithHttpInfo(rsp)));
            }));
    }

    /**
     * logout  Invalidate your current auth credential stored typically stored in a cookie. This does not invalidate your API key.
     * logout
     */
    public logout(_options?: Configuration): Observable<void> {
        return this.logoutWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { ChunkApiRequestFactory, ChunkApiResponseProcessor} from "../apis/ChunkApi";
export class ObservableChunkApi {
    private requestFactory: ChunkApiRequestFactory;
    private responseProcessor: ChunkApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ChunkApiRequestFactory,
        responseProcessor?: ChunkApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ChunkApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ChunkApiResponseProcessor();
    }

    /**
     * create_chunk  Create a new chunk. If the chunk has the same tracking_id as an existing chunk, the request will fail. Once a chunk is created, it can be searched for using the search endpoint.
     * create_chunk
     * @param tRDataset The dataset id to use for the request
     * @param createChunkData JSON request payload to create a new chunk (chunk)
     */
    public createChunkWithHttpInfo(tRDataset: string, createChunkData: CreateChunkData, _options?: Configuration): Observable<HttpInfo<ReturnCreatedChunk>> {
        const requestContextPromise = this.requestFactory.createChunk(tRDataset, createChunkData, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createChunkWithHttpInfo(rsp)));
            }));
    }

    /**
     * create_chunk  Create a new chunk. If the chunk has the same tracking_id as an existing chunk, the request will fail. Once a chunk is created, it can be searched for using the search endpoint.
     * create_chunk
     * @param tRDataset The dataset id to use for the request
     * @param createChunkData JSON request payload to create a new chunk (chunk)
     */
    public createChunk(tRDataset: string, createChunkData: CreateChunkData, _options?: Configuration): Observable<ReturnCreatedChunk> {
        return this.createChunkWithHttpInfo(tRDataset, createChunkData, _options).pipe(map((apiResponse: HttpInfo<ReturnCreatedChunk>) => apiResponse.data));
    }

    /**
     * get_suggested_queries  This endpoint will generate 3 suggested queries based off the query provided in the request body and return them as a JSON object.
     * get_suggested_queries
     * @param tRDataset The dataset id to use for the request
     * @param suggestedQueriesRequest JSON request payload to get alternative suggested queries
     */
    public createSuggestedQueriesHandlerWithHttpInfo(tRDataset: string, suggestedQueriesRequest: SuggestedQueriesRequest, _options?: Configuration): Observable<HttpInfo<SuggestedQueriesResponse>> {
        const requestContextPromise = this.requestFactory.createSuggestedQueriesHandler(tRDataset, suggestedQueriesRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createSuggestedQueriesHandlerWithHttpInfo(rsp)));
            }));
    }

    /**
     * get_suggested_queries  This endpoint will generate 3 suggested queries based off the query provided in the request body and return them as a JSON object.
     * get_suggested_queries
     * @param tRDataset The dataset id to use for the request
     * @param suggestedQueriesRequest JSON request payload to get alternative suggested queries
     */
    public createSuggestedQueriesHandler(tRDataset: string, suggestedQueriesRequest: SuggestedQueriesRequest, _options?: Configuration): Observable<SuggestedQueriesResponse> {
        return this.createSuggestedQueriesHandlerWithHttpInfo(tRDataset, suggestedQueriesRequest, _options).pipe(map((apiResponse: HttpInfo<SuggestedQueriesResponse>) => apiResponse.data));
    }

    /**
     * delete_chunk  Delete a chunk by its id. If deleting a root chunk which has a collision, the most recently created collision will become a new root chunk.
     * delete_chunk
     * @param chunkId id of the chunk you want to delete
     * @param tRDataset The dataset id to use for the request
     */
    public deleteChunkWithHttpInfo(chunkId: string, tRDataset: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteChunk(chunkId, tRDataset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteChunkWithHttpInfo(rsp)));
            }));
    }

    /**
     * delete_chunk  Delete a chunk by its id. If deleting a root chunk which has a collision, the most recently created collision will become a new root chunk.
     * delete_chunk
     * @param chunkId id of the chunk you want to delete
     * @param tRDataset The dataset id to use for the request
     */
    public deleteChunk(chunkId: string, tRDataset: string, _options?: Configuration): Observable<void> {
        return this.deleteChunkWithHttpInfo(chunkId, tRDataset, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * delete_chunk_by_tracking_id  Delete a chunk by tracking_id. This is useful for when you are coordinating with an external system and want to use the tracking_id to identify the chunk. If deleting a root chunk which has a collision, the most recently created collision will become a new root chunk.
     * delete_chunk_by_tracking_id
     * @param trackingId tracking_id of the chunk you want to delete
     * @param tRDataset The dataset id to use for the request
     */
    public deleteChunkByTrackingIdWithHttpInfo(trackingId: string, tRDataset: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteChunkByTrackingId(trackingId, tRDataset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteChunkByTrackingIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * delete_chunk_by_tracking_id  Delete a chunk by tracking_id. This is useful for when you are coordinating with an external system and want to use the tracking_id to identify the chunk. If deleting a root chunk which has a collision, the most recently created collision will become a new root chunk.
     * delete_chunk_by_tracking_id
     * @param trackingId tracking_id of the chunk you want to delete
     * @param tRDataset The dataset id to use for the request
     */
    public deleteChunkByTrackingId(trackingId: string, tRDataset: string, _options?: Configuration): Observable<void> {
        return this.deleteChunkByTrackingIdWithHttpInfo(trackingId, tRDataset, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * augmented_generation_from_chunks  This endpoint exists as an alternative to the topic+message concept where our API handles chat memory. With this endpoint, the user is responsible for providing the context window and the prompt. See more in the \"search before generate\" page at docs.trieve.ai.
     * augmented_generation_from_chunks
     * @param tRDataset The dataset id to use for the request
     * @param generateChunksRequest JSON request payload to perform RAG on some chunks (chunks)
     */
    public generateOffChunksWithHttpInfo(tRDataset: string, generateChunksRequest: GenerateChunksRequest, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.generateOffChunks(tRDataset, generateChunksRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.generateOffChunksWithHttpInfo(rsp)));
            }));
    }

    /**
     * augmented_generation_from_chunks  This endpoint exists as an alternative to the topic+message concept where our API handles chat memory. With this endpoint, the user is responsible for providing the context window and the prompt. See more in the \"search before generate\" page at docs.trieve.ai.
     * augmented_generation_from_chunks
     * @param tRDataset The dataset id to use for the request
     * @param generateChunksRequest JSON request payload to perform RAG on some chunks (chunks)
     */
    public generateOffChunks(tRDataset: string, generateChunksRequest: GenerateChunksRequest, _options?: Configuration): Observable<string> {
        return this.generateOffChunksWithHttpInfo(tRDataset, generateChunksRequest, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * get_chunk  Get a singular chunk by id.
     * get_chunk
     * @param chunkId Id of the chunk you want to fetch.
     * @param tRDataset The dataset id to use for the request
     */
    public getChunkByIdWithHttpInfo(chunkId: string, tRDataset: string, _options?: Configuration): Observable<HttpInfo<ChunkMetadata>> {
        const requestContextPromise = this.requestFactory.getChunkById(chunkId, tRDataset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getChunkByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * get_chunk  Get a singular chunk by id.
     * get_chunk
     * @param chunkId Id of the chunk you want to fetch.
     * @param tRDataset The dataset id to use for the request
     */
    public getChunkById(chunkId: string, tRDataset: string, _options?: Configuration): Observable<ChunkMetadata> {
        return this.getChunkByIdWithHttpInfo(chunkId, tRDataset, _options).pipe(map((apiResponse: HttpInfo<ChunkMetadata>) => apiResponse.data));
    }

    /**
     * get_chunk_by_tracking_id  Get a singular chunk by tracking_id. This is useful for when you are coordinating with an external system and want to use your own id as the primary reference for a chunk.
     * get_chunk_by_tracking_id
     * @param trackingId tracking_id of the chunk you want to fetch
     * @param tRDataset The dataset id to use for the request
     */
    public getChunkByTrackingIdWithHttpInfo(trackingId: string, tRDataset: string, _options?: Configuration): Observable<HttpInfo<ChunkMetadata>> {
        const requestContextPromise = this.requestFactory.getChunkByTrackingId(trackingId, tRDataset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getChunkByTrackingIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * get_chunk_by_tracking_id  Get a singular chunk by tracking_id. This is useful for when you are coordinating with an external system and want to use your own id as the primary reference for a chunk.
     * get_chunk_by_tracking_id
     * @param trackingId tracking_id of the chunk you want to fetch
     * @param tRDataset The dataset id to use for the request
     */
    public getChunkByTrackingId(trackingId: string, tRDataset: string, _options?: Configuration): Observable<ChunkMetadata> {
        return this.getChunkByTrackingIdWithHttpInfo(trackingId, tRDataset, _options).pipe(map((apiResponse: HttpInfo<ChunkMetadata>) => apiResponse.data));
    }

    /**
     * get_recommended_chunks  Get recommendations of chunks similar to the chunks in the request. Think about this as a feature similar to the \"add to playlist\" recommendation feature on Spotify. This request pairs especially well with our groups endpoint.
     * get_recommended_chunks
     * @param tRDataset The dataset id to use for the request
     * @param recommendChunksRequest JSON request payload to get recommendations of chunks similar to the chunks in the request
     */
    public getRecommendedChunksWithHttpInfo(tRDataset: string, recommendChunksRequest: RecommendChunksRequest, _options?: Configuration): Observable<HttpInfo<Array<ChunkMetadataWithFileData>>> {
        const requestContextPromise = this.requestFactory.getRecommendedChunks(tRDataset, recommendChunksRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRecommendedChunksWithHttpInfo(rsp)));
            }));
    }

    /**
     * get_recommended_chunks  Get recommendations of chunks similar to the chunks in the request. Think about this as a feature similar to the \"add to playlist\" recommendation feature on Spotify. This request pairs especially well with our groups endpoint.
     * get_recommended_chunks
     * @param tRDataset The dataset id to use for the request
     * @param recommendChunksRequest JSON request payload to get recommendations of chunks similar to the chunks in the request
     */
    public getRecommendedChunks(tRDataset: string, recommendChunksRequest: RecommendChunksRequest, _options?: Configuration): Observable<Array<ChunkMetadataWithFileData>> {
        return this.getRecommendedChunksWithHttpInfo(tRDataset, recommendChunksRequest, _options).pipe(map((apiResponse: HttpInfo<Array<ChunkMetadataWithFileData>>) => apiResponse.data));
    }

    /**
     * search  This route provides the primary search functionality for the API. It can be used to search for chunks by semantic similarity, full-text similarity, or a combination of both. Results\' `chunk_html` values will be modified with `<b>` tags for sub-sentence highlighting.
     * search
     * @param tRDataset The dataset id to use for the request
     * @param searchChunkData JSON request payload to semantically search for chunks (chunks)
     */
    public searchChunkWithHttpInfo(tRDataset: string, searchChunkData: SearchChunkData, _options?: Configuration): Observable<HttpInfo<SearchChunkQueryResponseBody>> {
        const requestContextPromise = this.requestFactory.searchChunk(tRDataset, searchChunkData, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchChunkWithHttpInfo(rsp)));
            }));
    }

    /**
     * search  This route provides the primary search functionality for the API. It can be used to search for chunks by semantic similarity, full-text similarity, or a combination of both. Results\' `chunk_html` values will be modified with `<b>` tags for sub-sentence highlighting.
     * search
     * @param tRDataset The dataset id to use for the request
     * @param searchChunkData JSON request payload to semantically search for chunks (chunks)
     */
    public searchChunk(tRDataset: string, searchChunkData: SearchChunkData, _options?: Configuration): Observable<SearchChunkQueryResponseBody> {
        return this.searchChunkWithHttpInfo(tRDataset, searchChunkData, _options).pipe(map((apiResponse: HttpInfo<SearchChunkQueryResponseBody>) => apiResponse.data));
    }

    /**
     * update_chunk  Update a chunk. If you try to change the tracking_id of the chunk to have the same tracking_id as an existing chunk, the request will fail.
     * update_chunk
     * @param tRDataset The dataset id to use for the request
     * @param updateChunkData JSON request payload to update a chunk (chunk)
     */
    public updateChunkWithHttpInfo(tRDataset: string, updateChunkData: UpdateChunkData, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateChunk(tRDataset, updateChunkData, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateChunkWithHttpInfo(rsp)));
            }));
    }

    /**
     * update_chunk  Update a chunk. If you try to change the tracking_id of the chunk to have the same tracking_id as an existing chunk, the request will fail.
     * update_chunk
     * @param tRDataset The dataset id to use for the request
     * @param updateChunkData JSON request payload to update a chunk (chunk)
     */
    public updateChunk(tRDataset: string, updateChunkData: UpdateChunkData, _options?: Configuration): Observable<void> {
        return this.updateChunkWithHttpInfo(tRDataset, updateChunkData, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * update_chunk_by_tracking_id  Update a chunk by tracking_id. This is useful for when you are coordinating with an external system and want to use the tracking_id to identify the chunk.
     * update_chunk_by_tracking_id
     * @param tRDataset The dataset id to use for the request
     * @param updateChunkByTrackingIdData JSON request payload to update a chunk by tracking_id (chunks)
     */
    public updateChunkByTrackingIdWithHttpInfo(tRDataset: string, updateChunkByTrackingIdData: UpdateChunkByTrackingIdData, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateChunkByTrackingId(tRDataset, updateChunkByTrackingIdData, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateChunkByTrackingIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * update_chunk_by_tracking_id  Update a chunk by tracking_id. This is useful for when you are coordinating with an external system and want to use the tracking_id to identify the chunk.
     * update_chunk_by_tracking_id
     * @param tRDataset The dataset id to use for the request
     * @param updateChunkByTrackingIdData JSON request payload to update a chunk by tracking_id (chunks)
     */
    public updateChunkByTrackingId(tRDataset: string, updateChunkByTrackingIdData: UpdateChunkByTrackingIdData, _options?: Configuration): Observable<void> {
        return this.updateChunkByTrackingIdWithHttpInfo(tRDataset, updateChunkByTrackingIdData, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { ChunkGroupApiRequestFactory, ChunkGroupApiResponseProcessor} from "../apis/ChunkGroupApi";
export class ObservableChunkGroupApi {
    private requestFactory: ChunkGroupApiRequestFactory;
    private responseProcessor: ChunkGroupApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ChunkGroupApiRequestFactory,
        responseProcessor?: ChunkGroupApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ChunkGroupApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ChunkGroupApiResponseProcessor();
    }

    /**
     * add_bookmark  Route to add a bookmark. Think of a bookmark as a chunk which is a member of a group.
     * add_bookmark
     * @param groupId Id of the group to add the chunk to as a bookmark
     * @param tRDataset The dataset id to use for the request
     * @param addChunkToGroupData JSON request payload to add a chunk to a group (bookmark it)
     */
    public addBookmarkWithHttpInfo(groupId: string, tRDataset: string, addChunkToGroupData: AddChunkToGroupData, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.addBookmark(groupId, tRDataset, addChunkToGroupData, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addBookmarkWithHttpInfo(rsp)));
            }));
    }

    /**
     * add_bookmark  Route to add a bookmark. Think of a bookmark as a chunk which is a member of a group.
     * add_bookmark
     * @param groupId Id of the group to add the chunk to as a bookmark
     * @param tRDataset The dataset id to use for the request
     * @param addChunkToGroupData JSON request payload to add a chunk to a group (bookmark it)
     */
    public addBookmark(groupId: string, tRDataset: string, addChunkToGroupData: AddChunkToGroupData, _options?: Configuration): Observable<void> {
        return this.addBookmarkWithHttpInfo(groupId, tRDataset, addChunkToGroupData, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * create_chunk_group  Create a new chunk_group. Think of this as analogous to a bookmark folder.
     * create_chunk_group
     * @param tRDataset The dataset id to use for the request
     * @param createChunkGroupData JSON request payload to cretea a chunkGroup
     */
    public createChunkGroupWithHttpInfo(tRDataset: string, createChunkGroupData: CreateChunkGroupData, _options?: Configuration): Observable<HttpInfo<ChunkGroup>> {
        const requestContextPromise = this.requestFactory.createChunkGroup(tRDataset, createChunkGroupData, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createChunkGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * create_chunk_group  Create a new chunk_group. Think of this as analogous to a bookmark folder.
     * create_chunk_group
     * @param tRDataset The dataset id to use for the request
     * @param createChunkGroupData JSON request payload to cretea a chunkGroup
     */
    public createChunkGroup(tRDataset: string, createChunkGroupData: CreateChunkGroupData, _options?: Configuration): Observable<ChunkGroup> {
        return this.createChunkGroupWithHttpInfo(tRDataset, createChunkGroupData, _options).pipe(map((apiResponse: HttpInfo<ChunkGroup>) => apiResponse.data));
    }

    /**
     * delete_bookmark  Route to delete a bookmark. Think of a bookmark as a chunk which is a member of a group.
     * delete_bookmark
     * @param groupId Id of the group to remove the bookmark\&#39;ed chunk from
     * @param bookmarkId Id of the bookmark to remove
     * @param tRDataset The dataset id to use for the request
     */
    public deleteBookmarkWithHttpInfo(groupId: string, bookmarkId: string, tRDataset: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteBookmark(groupId, bookmarkId, tRDataset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteBookmarkWithHttpInfo(rsp)));
            }));
    }

    /**
     * delete_bookmark  Route to delete a bookmark. Think of a bookmark as a chunk which is a member of a group.
     * delete_bookmark
     * @param groupId Id of the group to remove the bookmark\&#39;ed chunk from
     * @param bookmarkId Id of the bookmark to remove
     * @param tRDataset The dataset id to use for the request
     */
    public deleteBookmark(groupId: string, bookmarkId: string, tRDataset: string, _options?: Configuration): Observable<void> {
        return this.deleteBookmarkWithHttpInfo(groupId, bookmarkId, tRDataset, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * delete_chunk_group  This will delete a chunk_group. This will not delete the chunks that are in the group. We will soon support deleting a chunk_group along with its member chunks.
     * delete_chunk_group
     * @param groupId Id of the chunk_group to delete
     * @param tRDataset The dataset id to use for the request
     */
    public deleteChunkGroupWithHttpInfo(groupId: string, tRDataset: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteChunkGroup(groupId, tRDataset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteChunkGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * delete_chunk_group  This will delete a chunk_group. This will not delete the chunks that are in the group. We will soon support deleting a chunk_group along with its member chunks.
     * delete_chunk_group
     * @param groupId Id of the chunk_group to delete
     * @param tRDataset The dataset id to use for the request
     */
    public deleteChunkGroup(groupId: string, tRDataset: string, _options?: Configuration): Observable<void> {
        return this.deleteChunkGroupWithHttpInfo(groupId, tRDataset, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * get_all_bookmarks  Route to get all bookmarks for a group. Think of a bookmark as a chunk which is a member of a group. The response is paginated, with each page containing 10 chunks (bookmarks). Support for custom page size is coming soon.
     * get_all_bookmarks
     * @param groupId The id of the group to get the chunks from
     * @param page The page of chunks to get from the group
     * @param tRDataset The dataset id to use for the request
     */
    public getAllBookmarksWithHttpInfo(groupId: string, page: number, tRDataset: string, _options?: Configuration): Observable<HttpInfo<BookmarkData>> {
        const requestContextPromise = this.requestFactory.getAllBookmarks(groupId, page, tRDataset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllBookmarksWithHttpInfo(rsp)));
            }));
    }

    /**
     * get_all_bookmarks  Route to get all bookmarks for a group. Think of a bookmark as a chunk which is a member of a group. The response is paginated, with each page containing 10 chunks (bookmarks). Support for custom page size is coming soon.
     * get_all_bookmarks
     * @param groupId The id of the group to get the chunks from
     * @param page The page of chunks to get from the group
     * @param tRDataset The dataset id to use for the request
     */
    public getAllBookmarks(groupId: string, page: number, tRDataset: string, _options?: Configuration): Observable<BookmarkData> {
        return this.getAllBookmarksWithHttpInfo(groupId, page, tRDataset, _options).pipe(map((apiResponse: HttpInfo<BookmarkData>) => apiResponse.data));
    }

    /**
     * @param tRDataset The dataset id to use for the request
     * @param getGroupsForChunksData JSON request payload to get the groups that a chunk is in
     */
    public getGroupsChunkIsInWithHttpInfo(tRDataset: string, getGroupsForChunksData: GetGroupsForChunksData, _options?: Configuration): Observable<HttpInfo<Array<BookmarkGroupResult>>> {
        const requestContextPromise = this.requestFactory.getGroupsChunkIsIn(tRDataset, getGroupsForChunksData, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGroupsChunkIsInWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param tRDataset The dataset id to use for the request
     * @param getGroupsForChunksData JSON request payload to get the groups that a chunk is in
     */
    public getGroupsChunkIsIn(tRDataset: string, getGroupsForChunksData: GetGroupsForChunksData, _options?: Configuration): Observable<Array<BookmarkGroupResult>> {
        return this.getGroupsChunkIsInWithHttpInfo(tRDataset, getGroupsForChunksData, _options).pipe(map((apiResponse: HttpInfo<Array<BookmarkGroupResult>>) => apiResponse.data));
    }

    /**
     * get_dataset_groups  Fetch the groups which belong to a dataset specified by its id.
     * get_dataset_groups
     * @param datasetId The id of the dataset to fetch groups for.
     * @param page The page of groups to fetch. Each page contains 10 groups. Support for custom page size is coming soon.
     * @param tRDataset The dataset id to use for the request
     */
    public getSpecificDatasetChunkGroupsWithHttpInfo(datasetId: string, page: number, tRDataset: string, _options?: Configuration): Observable<HttpInfo<GroupData>> {
        const requestContextPromise = this.requestFactory.getSpecificDatasetChunkGroups(datasetId, page, tRDataset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSpecificDatasetChunkGroupsWithHttpInfo(rsp)));
            }));
    }

    /**
     * get_dataset_groups  Fetch the groups which belong to a dataset specified by its id.
     * get_dataset_groups
     * @param datasetId The id of the dataset to fetch groups for.
     * @param page The page of groups to fetch. Each page contains 10 groups. Support for custom page size is coming soon.
     * @param tRDataset The dataset id to use for the request
     */
    public getSpecificDatasetChunkGroups(datasetId: string, page: number, tRDataset: string, _options?: Configuration): Observable<GroupData> {
        return this.getSpecificDatasetChunkGroupsWithHttpInfo(datasetId, page, tRDataset, _options).pipe(map((apiResponse: HttpInfo<GroupData>) => apiResponse.data));
    }

    /**
     * group_search  This route allows you to search only within a group. This is useful for when you only want search results to contain chunks which are members of a specific group. Think about this like searching within a playlist or bookmark folder.
     * group_search
     * @param tRDataset The dataset id to use for the request
     * @param searchGroupsData JSON request payload to semantically search a group
     */
    public searchGroupsWithHttpInfo(tRDataset: string, searchGroupsData: SearchGroupsData, _options?: Configuration): Observable<HttpInfo<SearchGroupsResult>> {
        const requestContextPromise = this.requestFactory.searchGroups(tRDataset, searchGroupsData, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchGroupsWithHttpInfo(rsp)));
            }));
    }

    /**
     * group_search  This route allows you to search only within a group. This is useful for when you only want search results to contain chunks which are members of a specific group. Think about this like searching within a playlist or bookmark folder.
     * group_search
     * @param tRDataset The dataset id to use for the request
     * @param searchGroupsData JSON request payload to semantically search a group
     */
    public searchGroups(tRDataset: string, searchGroupsData: SearchGroupsData, _options?: Configuration): Observable<SearchGroupsResult> {
        return this.searchGroupsWithHttpInfo(tRDataset, searchGroupsData, _options).pipe(map((apiResponse: HttpInfo<SearchGroupsResult>) => apiResponse.data));
    }

    /**
     * update_chunk_group  Update a chunk_group. Think of this as analogous to a bookmark folder.
     * update_chunk_group
     * @param tRDataset The dataset id to use for the request
     * @param updateChunkGroupData JSON request payload to update a chunkGroup
     */
    public updateChunkGroupWithHttpInfo(tRDataset: string, updateChunkGroupData: UpdateChunkGroupData, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateChunkGroup(tRDataset, updateChunkGroupData, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateChunkGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * update_chunk_group  Update a chunk_group. Think of this as analogous to a bookmark folder.
     * update_chunk_group
     * @param tRDataset The dataset id to use for the request
     * @param updateChunkGroupData JSON request payload to update a chunkGroup
     */
    public updateChunkGroup(tRDataset: string, updateChunkGroupData: UpdateChunkGroupData, _options?: Configuration): Observable<void> {
        return this.updateChunkGroupWithHttpInfo(tRDataset, updateChunkGroupData, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { DatasetApiRequestFactory, DatasetApiResponseProcessor} from "../apis/DatasetApi";
export class ObservableDatasetApi {
    private requestFactory: DatasetApiRequestFactory;
    private responseProcessor: DatasetApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DatasetApiRequestFactory,
        responseProcessor?: DatasetApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DatasetApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DatasetApiResponseProcessor();
    }

    /**
     * create_dataset  Create a new dataset. The auth\'ed user must be an owner of the organization to create a dataset.
     * create_dataset
     * @param tROrganization The organization id to use for the request
     * @param createDatasetRequest JSON request payload to create a new dataset
     */
    public createDatasetWithHttpInfo(tROrganization: string, createDatasetRequest: CreateDatasetRequest, _options?: Configuration): Observable<HttpInfo<Dataset>> {
        const requestContextPromise = this.requestFactory.createDataset(tROrganization, createDatasetRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDatasetWithHttpInfo(rsp)));
            }));
    }

    /**
     * create_dataset  Create a new dataset. The auth\'ed user must be an owner of the organization to create a dataset.
     * create_dataset
     * @param tROrganization The organization id to use for the request
     * @param createDatasetRequest JSON request payload to create a new dataset
     */
    public createDataset(tROrganization: string, createDatasetRequest: CreateDatasetRequest, _options?: Configuration): Observable<Dataset> {
        return this.createDatasetWithHttpInfo(tROrganization, createDatasetRequest, _options).pipe(map((apiResponse: HttpInfo<Dataset>) => apiResponse.data));
    }

    /**
     * delete_dataset  Delete a dataset. The auth\'ed user must be an owner of the organization to delete a dataset.
     * delete_dataset
     * @param tROrganization The organization id to use for the request
     * @param deleteDatasetRequest JSON request payload to delete a dataset
     */
    public deleteDatasetWithHttpInfo(tROrganization: string, deleteDatasetRequest: DeleteDatasetRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteDataset(tROrganization, deleteDatasetRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteDatasetWithHttpInfo(rsp)));
            }));
    }

    /**
     * delete_dataset  Delete a dataset. The auth\'ed user must be an owner of the organization to delete a dataset.
     * delete_dataset
     * @param tROrganization The organization id to use for the request
     * @param deleteDatasetRequest JSON request payload to delete a dataset
     */
    public deleteDataset(tROrganization: string, deleteDatasetRequest: DeleteDatasetRequest, _options?: Configuration): Observable<void> {
        return this.deleteDatasetWithHttpInfo(tROrganization, deleteDatasetRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * get_client_dataset_config  Get the client configuration for a dataset. Will use the TR-D
     * get_client_dataset_config
     * @param tRDataset The dataset id to use for the request
     */
    public getClientDatasetConfigWithHttpInfo(tRDataset: string, _options?: Configuration): Observable<HttpInfo<ClientDatasetConfiguration>> {
        const requestContextPromise = this.requestFactory.getClientDatasetConfig(tRDataset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getClientDatasetConfigWithHttpInfo(rsp)));
            }));
    }

    /**
     * get_client_dataset_config  Get the client configuration for a dataset. Will use the TR-D
     * get_client_dataset_config
     * @param tRDataset The dataset id to use for the request
     */
    public getClientDatasetConfig(tRDataset: string, _options?: Configuration): Observable<ClientDatasetConfiguration> {
        return this.getClientDatasetConfigWithHttpInfo(tRDataset, _options).pipe(map((apiResponse: HttpInfo<ClientDatasetConfiguration>) => apiResponse.data));
    }

    /**
     * get_dataset  Get a dataset by id. The auth\'ed user must be an admin or owner of the organization to get a dataset.
     * get_dataset
     * @param datasetId The id of the dataset you want to retrieve.
     * @param tROrganization The organization id to use for the request
     * @param tRDataset The dataset id to use for the request
     */
    public getDatasetWithHttpInfo(datasetId: string, tROrganization: string, tRDataset: string, _options?: Configuration): Observable<HttpInfo<Dataset>> {
        const requestContextPromise = this.requestFactory.getDataset(datasetId, tROrganization, tRDataset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDatasetWithHttpInfo(rsp)));
            }));
    }

    /**
     * get_dataset  Get a dataset by id. The auth\'ed user must be an admin or owner of the organization to get a dataset.
     * get_dataset
     * @param datasetId The id of the dataset you want to retrieve.
     * @param tROrganization The organization id to use for the request
     * @param tRDataset The dataset id to use for the request
     */
    public getDataset(datasetId: string, tROrganization: string, tRDataset: string, _options?: Configuration): Observable<Dataset> {
        return this.getDatasetWithHttpInfo(datasetId, tROrganization, tRDataset, _options).pipe(map((apiResponse: HttpInfo<Dataset>) => apiResponse.data));
    }

    /**
     * get_organization_datasets  Get all datasets for an organization. The auth\'ed user must be an admin or owner of the organization to get its datasets.
     * get_organization_datasets
     * @param organizationId id of the organization you want to retrieve datasets for
     * @param tROrganization The organization id to use for the request
     */
    public getDatasetsFromOrganizationWithHttpInfo(organizationId: string, tROrganization: string, _options?: Configuration): Observable<HttpInfo<Array<DatasetAndUsage>>> {
        const requestContextPromise = this.requestFactory.getDatasetsFromOrganization(organizationId, tROrganization, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDatasetsFromOrganizationWithHttpInfo(rsp)));
            }));
    }

    /**
     * get_organization_datasets  Get all datasets for an organization. The auth\'ed user must be an admin or owner of the organization to get its datasets.
     * get_organization_datasets
     * @param organizationId id of the organization you want to retrieve datasets for
     * @param tROrganization The organization id to use for the request
     */
    public getDatasetsFromOrganization(organizationId: string, tROrganization: string, _options?: Configuration): Observable<Array<DatasetAndUsage>> {
        return this.getDatasetsFromOrganizationWithHttpInfo(organizationId, tROrganization, _options).pipe(map((apiResponse: HttpInfo<Array<DatasetAndUsage>>) => apiResponse.data));
    }

    /**
     * update_dataset  Update a dataset. The auth\'ed user must be an owner of the organization to update a dataset.
     * update_dataset
     * @param tROrganization The organization id to use for the request
     * @param updateDatasetRequest JSON request payload to update a dataset
     */
    public updateDatasetWithHttpInfo(tROrganization: string, updateDatasetRequest: UpdateDatasetRequest, _options?: Configuration): Observable<HttpInfo<Dataset>> {
        const requestContextPromise = this.requestFactory.updateDataset(tROrganization, updateDatasetRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateDatasetWithHttpInfo(rsp)));
            }));
    }

    /**
     * update_dataset  Update a dataset. The auth\'ed user must be an owner of the organization to update a dataset.
     * update_dataset
     * @param tROrganization The organization id to use for the request
     * @param updateDatasetRequest JSON request payload to update a dataset
     */
    public updateDataset(tROrganization: string, updateDatasetRequest: UpdateDatasetRequest, _options?: Configuration): Observable<Dataset> {
        return this.updateDatasetWithHttpInfo(tROrganization, updateDatasetRequest, _options).pipe(map((apiResponse: HttpInfo<Dataset>) => apiResponse.data));
    }

}

import { EventsApiRequestFactory, EventsApiResponseProcessor} from "../apis/EventsApi";
export class ObservableEventsApi {
    private requestFactory: EventsApiRequestFactory;
    private responseProcessor: EventsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EventsApiRequestFactory,
        responseProcessor?: EventsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EventsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EventsApiResponseProcessor();
    }

    /**
     * get_events  Get events for the auth\'ed user. Currently, this is only for events belonging to the auth\'ed user. Soon, we plan to associate events to datasets instead of users. Each page contains 10 events.
     * get_events
     * @param page Page number of events to get
     * @param tRDataset The dataset id to use for the request
     */
    public getEventsWithHttpInfo(page: number, tRDataset: string, _options?: Configuration): Observable<HttpInfo<EventReturn>> {
        const requestContextPromise = this.requestFactory.getEvents(page, tRDataset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEventsWithHttpInfo(rsp)));
            }));
    }

    /**
     * get_events  Get events for the auth\'ed user. Currently, this is only for events belonging to the auth\'ed user. Soon, we plan to associate events to datasets instead of users. Each page contains 10 events.
     * get_events
     * @param page Page number of events to get
     * @param tRDataset The dataset id to use for the request
     */
    public getEvents(page: number, tRDataset: string, _options?: Configuration): Observable<EventReturn> {
        return this.getEventsWithHttpInfo(page, tRDataset, _options).pipe(map((apiResponse: HttpInfo<EventReturn>) => apiResponse.data));
    }

}

import { FileApiRequestFactory, FileApiResponseProcessor} from "../apis/FileApi";
export class ObservableFileApi {
    private requestFactory: FileApiRequestFactory;
    private responseProcessor: FileApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FileApiRequestFactory,
        responseProcessor?: FileApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FileApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FileApiResponseProcessor();
    }

    /**
     * delete_file  Delete a file from S3 attached to the server based on its id. This will disassociate chunks from the file, but will not delete the chunks. We plan to add support for deleting chunks in a release soon. Auth\'ed user must be an admin or owner of the dataset\'s organization to upload a file.
     * delete_file
     * @param fileId The id of the file to delete
     * @param tRDataset The dataset id to use for the request
     */
    public deleteFileHandlerWithHttpInfo(fileId: string, tRDataset: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteFileHandler(fileId, tRDataset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteFileHandlerWithHttpInfo(rsp)));
            }));
    }

    /**
     * delete_file  Delete a file from S3 attached to the server based on its id. This will disassociate chunks from the file, but will not delete the chunks. We plan to add support for deleting chunks in a release soon. Auth\'ed user must be an admin or owner of the dataset\'s organization to upload a file.
     * delete_file
     * @param fileId The id of the file to delete
     * @param tRDataset The dataset id to use for the request
     */
    public deleteFileHandler(fileId: string, tRDataset: string, _options?: Configuration): Observable<void> {
        return this.deleteFileHandlerWithHttpInfo(fileId, tRDataset, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * get_file  Download a file from S3 attached to the server based on its id. We plan to add support for getting signed S3 URLs to download from S3 directly in a release soon.
     * get_file
     * @param fileId The id of the file to fetch
     * @param tRDataset The dataset id to use for the request
     */
    public getFileHandlerWithHttpInfo(fileId: string, tRDataset: string, _options?: Configuration): Observable<HttpInfo<FileDTO>> {
        const requestContextPromise = this.requestFactory.getFileHandler(fileId, tRDataset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFileHandlerWithHttpInfo(rsp)));
            }));
    }

    /**
     * get_file  Download a file from S3 attached to the server based on its id. We plan to add support for getting signed S3 URLs to download from S3 directly in a release soon.
     * get_file
     * @param fileId The id of the file to fetch
     * @param tRDataset The dataset id to use for the request
     */
    public getFileHandler(fileId: string, tRDataset: string, _options?: Configuration): Observable<FileDTO> {
        return this.getFileHandlerWithHttpInfo(fileId, tRDataset, _options).pipe(map((apiResponse: HttpInfo<FileDTO>) => apiResponse.data));
    }

    /**
     * get_image_file  We strongly recommend not using this endpoint. It is disabled on the managed version and only meant for niche on-prem use cases where an image directory is mounted. Get in touch with us thru information on docs.trieve.ai for more information.
     * get_image_file
     * @param fileName The name of the image file to return
     * @param tRDataset The dataset id to use for the request
     */
    public getImageFileWithHttpInfo(fileName: string, tRDataset: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getImageFile(fileName, tRDataset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getImageFileWithHttpInfo(rsp)));
            }));
    }

    /**
     * get_image_file  We strongly recommend not using this endpoint. It is disabled on the managed version and only meant for niche on-prem use cases where an image directory is mounted. Get in touch with us thru information on docs.trieve.ai for more information.
     * get_image_file
     * @param fileName The name of the image file to return
     * @param tRDataset The dataset id to use for the request
     */
    public getImageFile(fileName: string, tRDataset: string, _options?: Configuration): Observable<void> {
        return this.getImageFileWithHttpInfo(fileName, tRDataset, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * upload_file  Upload a file to S3 attached to the server. The file will be converted to HTML with tika and chunked algorithmically, images will be OCR\'ed with tesseract. The resulting chunks will be indexed and searchable. Optionally, you can only upload the file and manually create chunks associated to the file after. See docs.trieve.ai and/or contact us for more details and tips. Auth\'ed user must be an admin or owner of the dataset\'s organization to upload a file.
     * upload_file
     * @param tRDataset The dataset id to use for the request
     * @param uploadFileData JSON request payload to upload a file
     */
    public uploadFileHandlerWithHttpInfo(tRDataset: string, uploadFileData: UploadFileData, _options?: Configuration): Observable<HttpInfo<UploadFileResult>> {
        const requestContextPromise = this.requestFactory.uploadFileHandler(tRDataset, uploadFileData, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.uploadFileHandlerWithHttpInfo(rsp)));
            }));
    }

    /**
     * upload_file  Upload a file to S3 attached to the server. The file will be converted to HTML with tika and chunked algorithmically, images will be OCR\'ed with tesseract. The resulting chunks will be indexed and searchable. Optionally, you can only upload the file and manually create chunks associated to the file after. See docs.trieve.ai and/or contact us for more details and tips. Auth\'ed user must be an admin or owner of the dataset\'s organization to upload a file.
     * upload_file
     * @param tRDataset The dataset id to use for the request
     * @param uploadFileData JSON request payload to upload a file
     */
    public uploadFileHandler(tRDataset: string, uploadFileData: UploadFileData, _options?: Configuration): Observable<UploadFileResult> {
        return this.uploadFileHandlerWithHttpInfo(tRDataset, uploadFileData, _options).pipe(map((apiResponse: HttpInfo<UploadFileResult>) => apiResponse.data));
    }

}

import { HealthApiRequestFactory, HealthApiResponseProcessor} from "../apis/HealthApi";
export class ObservableHealthApi {
    private requestFactory: HealthApiRequestFactory;
    private responseProcessor: HealthApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: HealthApiRequestFactory,
        responseProcessor?: HealthApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new HealthApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new HealthApiResponseProcessor();
    }

    /**
     */
    public healthCheckWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.healthCheck(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.healthCheckWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public healthCheck(_options?: Configuration): Observable<void> {
        return this.healthCheckWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { InvitationApiRequestFactory, InvitationApiResponseProcessor} from "../apis/InvitationApi";
export class ObservableInvitationApi {
    private requestFactory: InvitationApiRequestFactory;
    private responseProcessor: InvitationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: InvitationApiRequestFactory,
        responseProcessor?: InvitationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new InvitationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new InvitationApiResponseProcessor();
    }

    /**
     * send_invitation  Invitations act as a way to invite users to join an organization. After a user is invited, they will automatically be added to the organization with the role specified in the invitation once they set their.
     * send_invitation
     * @param tROrganization The organization id to use for the request
     * @param invitationData JSON request payload to send an invitation
     */
    public postInvitationWithHttpInfo(tROrganization: string, invitationData: InvitationData, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.postInvitation(tROrganization, invitationData, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postInvitationWithHttpInfo(rsp)));
            }));
    }

    /**
     * send_invitation  Invitations act as a way to invite users to join an organization. After a user is invited, they will automatically be added to the organization with the role specified in the invitation once they set their.
     * send_invitation
     * @param tROrganization The organization id to use for the request
     * @param invitationData JSON request payload to send an invitation
     */
    public postInvitation(tROrganization: string, invitationData: InvitationData, _options?: Configuration): Observable<void> {
        return this.postInvitationWithHttpInfo(tROrganization, invitationData, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { MessageApiRequestFactory, MessageApiResponseProcessor} from "../apis/MessageApi";
export class ObservableMessageApi {
    private requestFactory: MessageApiRequestFactory;
    private responseProcessor: MessageApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MessageApiRequestFactory,
        responseProcessor?: MessageApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MessageApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MessageApiResponseProcessor();
    }

    /**
     * create_message  Create a message. Messages are attached to topics in order to coordinate memory of gen-AI chat sessions. We are considering refactoring this resource of the API soon. Currently, you can only send user messages. If the topic is a RAG topic then the response will include Chunks first on the stream. The structure will look like `[chunks]||mesage`. See docs.trieve.ai for more information.
     * create_message
     * @param tRDataset The dataset id to use for the request
     * @param createMessageData JSON request payload to create a message completion
     */
    public createMessageCompletionHandlerWithHttpInfo(tRDataset: string, createMessageData: CreateMessageData, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.createMessageCompletionHandler(tRDataset, createMessageData, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createMessageCompletionHandlerWithHttpInfo(rsp)));
            }));
    }

    /**
     * create_message  Create a message. Messages are attached to topics in order to coordinate memory of gen-AI chat sessions. We are considering refactoring this resource of the API soon. Currently, you can only send user messages. If the topic is a RAG topic then the response will include Chunks first on the stream. The structure will look like `[chunks]||mesage`. See docs.trieve.ai for more information.
     * create_message
     * @param tRDataset The dataset id to use for the request
     * @param createMessageData JSON request payload to create a message completion
     */
    public createMessageCompletionHandler(tRDataset: string, createMessageData: CreateMessageData, _options?: Configuration): Observable<string> {
        return this.createMessageCompletionHandlerWithHttpInfo(tRDataset, createMessageData, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * edit_message  Edit a message which exists within the topic\'s chat history. This will delete the message and replace it with a new message. The new message will be generated by the AI based on the new content provided in the request body. The response will include Chunks first on the stream if the topic is using RAG. The structure will look like `[chunks]||mesage`. See docs.trieve.ai for more information.
     * edit_message
     * @param tRDataset The dataset id to use for the request
     * @param editMessageData JSON request payload to edit a message and get a new stream
     */
    public editMessageHandlerWithHttpInfo(tRDataset: string, editMessageData: EditMessageData, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.editMessageHandler(tRDataset, editMessageData, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.editMessageHandlerWithHttpInfo(rsp)));
            }));
    }

    /**
     * edit_message  Edit a message which exists within the topic\'s chat history. This will delete the message and replace it with a new message. The new message will be generated by the AI based on the new content provided in the request body. The response will include Chunks first on the stream if the topic is using RAG. The structure will look like `[chunks]||mesage`. See docs.trieve.ai for more information.
     * edit_message
     * @param tRDataset The dataset id to use for the request
     * @param editMessageData JSON request payload to edit a message and get a new stream
     */
    public editMessageHandler(tRDataset: string, editMessageData: EditMessageData, _options?: Configuration): Observable<void> {
        return this.editMessageHandlerWithHttpInfo(tRDataset, editMessageData, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * get_all_messages  Get all messages for a given topic. If the topic is a RAG topic then the response will include Chunks first on each message. The structure will look like `[chunks]||mesage`. See docs.trieve.ai for more information.
     * get_all_messages
     * @param messagesTopicId The ID of the topic to get messages for.
     * @param tRDataset The dataset id to use for the request
     */
    public getAllTopicMessagesWithHttpInfo(messagesTopicId: string, tRDataset: string, _options?: Configuration): Observable<HttpInfo<Array<Message>>> {
        const requestContextPromise = this.requestFactory.getAllTopicMessages(messagesTopicId, tRDataset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllTopicMessagesWithHttpInfo(rsp)));
            }));
    }

    /**
     * get_all_messages  Get all messages for a given topic. If the topic is a RAG topic then the response will include Chunks first on each message. The structure will look like `[chunks]||mesage`. See docs.trieve.ai for more information.
     * get_all_messages
     * @param messagesTopicId The ID of the topic to get messages for.
     * @param tRDataset The dataset id to use for the request
     */
    public getAllTopicMessages(messagesTopicId: string, tRDataset: string, _options?: Configuration): Observable<Array<Message>> {
        return this.getAllTopicMessagesWithHttpInfo(messagesTopicId, tRDataset, _options).pipe(map((apiResponse: HttpInfo<Array<Message>>) => apiResponse.data));
    }

    /**
     * regenerate_message  Regenerate the assistant response to the last user message of a topic. This will delete the last message and replace it with a new message. The response will include Chunks first on the stream if the topic is using RAG. The structure will look like `[chunks]||mesage`. See docs.trieve.ai for more information.
     * regenerate_message
     * @param tRDataset The dataset id to use for the request
     * @param regenerateMessageData JSON request payload to delete an agent message then regenerate it in a strem
     */
    public regenerateMessageHandlerWithHttpInfo(tRDataset: string, regenerateMessageData: RegenerateMessageData, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.regenerateMessageHandler(tRDataset, regenerateMessageData, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.regenerateMessageHandlerWithHttpInfo(rsp)));
            }));
    }

    /**
     * regenerate_message  Regenerate the assistant response to the last user message of a topic. This will delete the last message and replace it with a new message. The response will include Chunks first on the stream if the topic is using RAG. The structure will look like `[chunks]||mesage`. See docs.trieve.ai for more information.
     * regenerate_message
     * @param tRDataset The dataset id to use for the request
     * @param regenerateMessageData JSON request payload to delete an agent message then regenerate it in a strem
     */
    public regenerateMessageHandler(tRDataset: string, regenerateMessageData: RegenerateMessageData, _options?: Configuration): Observable<string> {
        return this.regenerateMessageHandlerWithHttpInfo(tRDataset, regenerateMessageData, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

}

import { OrganizationApiRequestFactory, OrganizationApiResponseProcessor} from "../apis/OrganizationApi";
export class ObservableOrganizationApi {
    private requestFactory: OrganizationApiRequestFactory;
    private responseProcessor: OrganizationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OrganizationApiRequestFactory,
        responseProcessor?: OrganizationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OrganizationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OrganizationApiResponseProcessor();
    }

    /**
     * create_organization  Create a new organization. The auth\'ed user who creates the organization will be the default owner of the organization.
     * create_organization
     * @param createOrganizationData The organization data that you want to create
     */
    public createOrganizationWithHttpInfo(createOrganizationData: CreateOrganizationData, _options?: Configuration): Observable<HttpInfo<Organization>> {
        const requestContextPromise = this.requestFactory.createOrganization(createOrganizationData, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOrganizationWithHttpInfo(rsp)));
            }));
    }

    /**
     * create_organization  Create a new organization. The auth\'ed user who creates the organization will be the default owner of the organization.
     * create_organization
     * @param createOrganizationData The organization data that you want to create
     */
    public createOrganization(createOrganizationData: CreateOrganizationData, _options?: Configuration): Observable<Organization> {
        return this.createOrganizationWithHttpInfo(createOrganizationData, _options).pipe(map((apiResponse: HttpInfo<Organization>) => apiResponse.data));
    }

    /**
     * get_organization  Fetch the details of an organization by its id. The auth\'ed user must be an admin or owner of the organization to fetch it.
     * get_organization
     * @param organizationId The id of the organization you want to fetch.
     * @param tROrganization The organization id to use for the request
     */
    public getOrganizationByIdWithHttpInfo(organizationId: string, tROrganization: string, _options?: Configuration): Observable<HttpInfo<Organization>> {
        const requestContextPromise = this.requestFactory.getOrganizationById(organizationId, tROrganization, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrganizationByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * get_organization  Fetch the details of an organization by its id. The auth\'ed user must be an admin or owner of the organization to fetch it.
     * get_organization
     * @param organizationId The id of the organization you want to fetch.
     * @param tROrganization The organization id to use for the request
     */
    public getOrganizationById(organizationId: string, tROrganization: string, _options?: Configuration): Observable<Organization> {
        return this.getOrganizationByIdWithHttpInfo(organizationId, tROrganization, _options).pipe(map((apiResponse: HttpInfo<Organization>) => apiResponse.data));
    }

    /**
     * get_organization_usage  Fetch the current usage specification of an organization by its id. The auth\'ed user must be an admin or owner of the organization to fetch it.
     * get_organization_usage
     * @param organizationId The id of the organization you want to fetch the usage of.
     * @param tROrganization The organization id to use for the request
     */
    public getOrganizationUsageWithHttpInfo(organizationId: string, tROrganization: string, _options?: Configuration): Observable<HttpInfo<OrganizationUsageCount>> {
        const requestContextPromise = this.requestFactory.getOrganizationUsage(organizationId, tROrganization, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrganizationUsageWithHttpInfo(rsp)));
            }));
    }

    /**
     * get_organization_usage  Fetch the current usage specification of an organization by its id. The auth\'ed user must be an admin or owner of the organization to fetch it.
     * get_organization_usage
     * @param organizationId The id of the organization you want to fetch the usage of.
     * @param tROrganization The organization id to use for the request
     */
    public getOrganizationUsage(organizationId: string, tROrganization: string, _options?: Configuration): Observable<OrganizationUsageCount> {
        return this.getOrganizationUsageWithHttpInfo(organizationId, tROrganization, _options).pipe(map((apiResponse: HttpInfo<OrganizationUsageCount>) => apiResponse.data));
    }

    /**
     * get_organization_users  Fetch the users of an organization by its id. The auth\'ed user must be an admin or owner of the organization to fetch it.
     * get_organization_users
     * @param organizationId The id of the organization you want to fetch the users of.
     * @param tROrganization The organization id to use for the request
     */
    public getOrganizationUsersWithHttpInfo(organizationId: string, tROrganization: string, _options?: Configuration): Observable<HttpInfo<Array<SlimUser>>> {
        const requestContextPromise = this.requestFactory.getOrganizationUsers(organizationId, tROrganization, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrganizationUsersWithHttpInfo(rsp)));
            }));
    }

    /**
     * get_organization_users  Fetch the users of an organization by its id. The auth\'ed user must be an admin or owner of the organization to fetch it.
     * get_organization_users
     * @param organizationId The id of the organization you want to fetch the users of.
     * @param tROrganization The organization id to use for the request
     */
    public getOrganizationUsers(organizationId: string, tROrganization: string, _options?: Configuration): Observable<Array<SlimUser>> {
        return this.getOrganizationUsersWithHttpInfo(organizationId, tROrganization, _options).pipe(map((apiResponse: HttpInfo<Array<SlimUser>>) => apiResponse.data));
    }

    /**
     * update_organization  Update an organization. Only the owner of the organization can update it.
     * update_organization
     * @param tROrganization The organization id to use for the request
     * @param updateOrganizationData The organization data that you want to update
     */
    public updateOrganizationWithHttpInfo(tROrganization: string, updateOrganizationData: UpdateOrganizationData, _options?: Configuration): Observable<HttpInfo<Organization>> {
        const requestContextPromise = this.requestFactory.updateOrganization(tROrganization, updateOrganizationData, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateOrganizationWithHttpInfo(rsp)));
            }));
    }

    /**
     * update_organization  Update an organization. Only the owner of the organization can update it.
     * update_organization
     * @param tROrganization The organization id to use for the request
     * @param updateOrganizationData The organization data that you want to update
     */
    public updateOrganization(tROrganization: string, updateOrganizationData: UpdateOrganizationData, _options?: Configuration): Observable<Organization> {
        return this.updateOrganizationWithHttpInfo(tROrganization, updateOrganizationData, _options).pipe(map((apiResponse: HttpInfo<Organization>) => apiResponse.data));
    }

}

import { StripeApiRequestFactory, StripeApiResponseProcessor} from "../apis/StripeApi";
export class ObservableStripeApi {
    private requestFactory: StripeApiRequestFactory;
    private responseProcessor: StripeApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: StripeApiRequestFactory,
        responseProcessor?: StripeApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new StripeApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new StripeApiResponseProcessor();
    }

    /**
     * @param subscriptionId id of the subscription you want to cancel
     * @param tROrganization The organization id to use for the request
     */
    public cancelSubscriptionWithHttpInfo(subscriptionId: string, tROrganization: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.cancelSubscription(subscriptionId, tROrganization, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cancelSubscriptionWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param subscriptionId id of the subscription you want to cancel
     * @param tROrganization The organization id to use for the request
     */
    public cancelSubscription(subscriptionId: string, tROrganization: string, _options?: Configuration): Observable<void> {
        return this.cancelSubscriptionWithHttpInfo(subscriptionId, tROrganization, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param planId id of the plan you want to subscribe to
     * @param organizationId id of the organization you want to subscribe to the plan
     */
    public directToPaymentLinkWithHttpInfo(planId: string, organizationId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.directToPaymentLink(planId, organizationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.directToPaymentLinkWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param planId id of the plan you want to subscribe to
     * @param organizationId id of the organization you want to subscribe to the plan
     */
    public directToPaymentLink(planId: string, organizationId: string, _options?: Configuration): Observable<void> {
        return this.directToPaymentLinkWithHttpInfo(planId, organizationId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public getAllPlansWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<StripePlan>>> {
        const requestContextPromise = this.requestFactory.getAllPlans(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllPlansWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public getAllPlans(_options?: Configuration): Observable<Array<StripePlan>> {
        return this.getAllPlansWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<StripePlan>>) => apiResponse.data));
    }

    /**
     * @param subscriptionId id of the subscription you want to update
     * @param planId id of the plan you want to subscribe to
     * @param tROrganization The organization id to use for the request
     */
    public updateSubscriptionPlanWithHttpInfo(subscriptionId: string, planId: string, tROrganization: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateSubscriptionPlan(subscriptionId, planId, tROrganization, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateSubscriptionPlanWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param subscriptionId id of the subscription you want to update
     * @param planId id of the plan you want to subscribe to
     * @param tROrganization The organization id to use for the request
     */
    public updateSubscriptionPlan(subscriptionId: string, planId: string, tROrganization: string, _options?: Configuration): Observable<void> {
        return this.updateSubscriptionPlanWithHttpInfo(subscriptionId, planId, tROrganization, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { TopicApiRequestFactory, TopicApiResponseProcessor} from "../apis/TopicApi";
export class ObservableTopicApi {
    private requestFactory: TopicApiRequestFactory;
    private responseProcessor: TopicApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TopicApiRequestFactory,
        responseProcessor?: TopicApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TopicApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TopicApiResponseProcessor();
    }

    /**
     * create_topic  Create a new chat topic. Topics are attached to a user and act as a coordinator for memory of gen-AI chat sessions. We are considering refactoring this resource of the API soon.
     * create_topic
     * @param tRDataset The dataset id to use for the request
     * @param createTopicData JSON request payload to create chat topic
     */
    public createTopicWithHttpInfo(tRDataset: string, createTopicData: CreateTopicData, _options?: Configuration): Observable<HttpInfo<Topic>> {
        const requestContextPromise = this.requestFactory.createTopic(tRDataset, createTopicData, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTopicWithHttpInfo(rsp)));
            }));
    }

    /**
     * create_topic  Create a new chat topic. Topics are attached to a user and act as a coordinator for memory of gen-AI chat sessions. We are considering refactoring this resource of the API soon.
     * create_topic
     * @param tRDataset The dataset id to use for the request
     * @param createTopicData JSON request payload to create chat topic
     */
    public createTopic(tRDataset: string, createTopicData: CreateTopicData, _options?: Configuration): Observable<Topic> {
        return this.createTopicWithHttpInfo(tRDataset, createTopicData, _options).pipe(map((apiResponse: HttpInfo<Topic>) => apiResponse.data));
    }

    /**
     * delete_topic  Delete an existing chat topic. When a topic is deleted, all associated chat messages are also deleted.
     * delete_topic
     * @param tRDataset The dataset id to use for the request
     * @param deleteTopicData JSON request payload to delete a chat topic
     */
    public deleteTopicWithHttpInfo(tRDataset: string, deleteTopicData: DeleteTopicData, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteTopic(tRDataset, deleteTopicData, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteTopicWithHttpInfo(rsp)));
            }));
    }

    /**
     * delete_topic  Delete an existing chat topic. When a topic is deleted, all associated chat messages are also deleted.
     * delete_topic
     * @param tRDataset The dataset id to use for the request
     * @param deleteTopicData JSON request payload to delete a chat topic
     */
    public deleteTopic(tRDataset: string, deleteTopicData: DeleteTopicData, _options?: Configuration): Observable<void> {
        return this.deleteTopicWithHttpInfo(tRDataset, deleteTopicData, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * get_all_topics_for_user  Get all topics belonging to a the auth\'ed user. Soon, we plan to allow specification of the user for this route and include pagination.
     * get_all_topics_for_user
     * @param userId The id of the user to get topics for
     * @param tRDataset The dataset id to use for the request
     */
    public getAllTopicsForUserWithHttpInfo(userId: string, tRDataset: string, _options?: Configuration): Observable<HttpInfo<Array<Topic>>> {
        const requestContextPromise = this.requestFactory.getAllTopicsForUser(userId, tRDataset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllTopicsForUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * get_all_topics_for_user  Get all topics belonging to a the auth\'ed user. Soon, we plan to allow specification of the user for this route and include pagination.
     * get_all_topics_for_user
     * @param userId The id of the user to get topics for
     * @param tRDataset The dataset id to use for the request
     */
    public getAllTopicsForUser(userId: string, tRDataset: string, _options?: Configuration): Observable<Array<Topic>> {
        return this.getAllTopicsForUserWithHttpInfo(userId, tRDataset, _options).pipe(map((apiResponse: HttpInfo<Array<Topic>>) => apiResponse.data));
    }

    /**
     * update_topic  Update an existing chat topic. Currently, only the name of the topic can be updated.
     * update_topic
     * @param tRDataset The dataset id to use for the request
     * @param updateTopicData JSON request payload to update a chat topic
     */
    public updateTopicWithHttpInfo(tRDataset: string, updateTopicData: UpdateTopicData, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateTopic(tRDataset, updateTopicData, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateTopicWithHttpInfo(rsp)));
            }));
    }

    /**
     * update_topic  Update an existing chat topic. Currently, only the name of the topic can be updated.
     * update_topic
     * @param tRDataset The dataset id to use for the request
     * @param updateTopicData JSON request payload to update a chat topic
     */
    public updateTopic(tRDataset: string, updateTopicData: UpdateTopicData, _options?: Configuration): Observable<void> {
        return this.updateTopicWithHttpInfo(tRDataset, updateTopicData, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";
export class ObservableUserApi {
    private requestFactory: UserApiRequestFactory;
    private responseProcessor: UserApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UserApiRequestFactory,
        responseProcessor?: UserApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UserApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UserApiResponseProcessor();
    }

    /**
     * delete_user_api_key  Delete an api key for the auth\'ed user.
     * delete_user_api_key
     * @param deleteUserApiKeyRequest JSON request payload to delete a user api key
     */
    public deleteUserApiKeyWithHttpInfo(deleteUserApiKeyRequest: DeleteUserApiKeyRequest, _options?: Configuration): Observable<HttpInfo<Array<ApiKeyDTO>>> {
        const requestContextPromise = this.requestFactory.deleteUserApiKey(deleteUserApiKeyRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteUserApiKeyWithHttpInfo(rsp)));
            }));
    }

    /**
     * delete_user_api_key  Delete an api key for the auth\'ed user.
     * delete_user_api_key
     * @param deleteUserApiKeyRequest JSON request payload to delete a user api key
     */
    public deleteUserApiKey(deleteUserApiKeyRequest: DeleteUserApiKeyRequest, _options?: Configuration): Observable<Array<ApiKeyDTO>> {
        return this.deleteUserApiKeyWithHttpInfo(deleteUserApiKeyRequest, _options).pipe(map((apiResponse: HttpInfo<Array<ApiKeyDTO>>) => apiResponse.data));
    }

    /**
     * get_user_files  Get all files which belong to a given user specified by the user_id parameter.
     * get_user_files
     * @param userId The id of the user to fetch files for.
     * @param tRDataset The dataset id to use for the request
     */
    public getUserFilesHandlerWithHttpInfo(userId: string, tRDataset: string, _options?: Configuration): Observable<HttpInfo<Array<any>>> {
        const requestContextPromise = this.requestFactory.getUserFilesHandler(userId, tRDataset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserFilesHandlerWithHttpInfo(rsp)));
            }));
    }

    /**
     * get_user_files  Get all files which belong to a given user specified by the user_id parameter.
     * get_user_files
     * @param userId The id of the user to fetch files for.
     * @param tRDataset The dataset id to use for the request
     */
    public getUserFilesHandler(userId: string, tRDataset: string, _options?: Configuration): Observable<Array<any>> {
        return this.getUserFilesHandlerWithHttpInfo(userId, tRDataset, _options).pipe(map((apiResponse: HttpInfo<Array<any>>) => apiResponse.data));
    }

    /**
     * set_user_api_key  Create a new api key for the auth\'ed user. Successful response will contain the newly created api key.
     * set_user_api_key
     * @param setUserApiKeyRequest 
     */
    public setUserApiKeyWithHttpInfo(setUserApiKeyRequest: SetUserApiKeyRequest, _options?: Configuration): Observable<HttpInfo<SetUserApiKeyResponse>> {
        const requestContextPromise = this.requestFactory.setUserApiKey(setUserApiKeyRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setUserApiKeyWithHttpInfo(rsp)));
            }));
    }

    /**
     * set_user_api_key  Create a new api key for the auth\'ed user. Successful response will contain the newly created api key.
     * set_user_api_key
     * @param setUserApiKeyRequest 
     */
    public setUserApiKey(setUserApiKeyRequest: SetUserApiKeyRequest, _options?: Configuration): Observable<SetUserApiKeyResponse> {
        return this.setUserApiKeyWithHttpInfo(setUserApiKeyRequest, _options).pipe(map((apiResponse: HttpInfo<SetUserApiKeyResponse>) => apiResponse.data));
    }

    /**
     * update_user  Update a user\'s information. If the user_id is not provided, the auth\'ed user will be updated. If the user_id is provided, the auth\'ed user must be an admin (1) or owner (2) of the organization.
     * update_user
     * @param updateUserData JSON request payload to update user information for the auth\&#39;ed user
     */
    public updateUserWithHttpInfo(updateUserData: UpdateUserData, _options?: Configuration): Observable<HttpInfo<SlimUser>> {
        const requestContextPromise = this.requestFactory.updateUser(updateUserData, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * update_user  Update a user\'s information. If the user_id is not provided, the auth\'ed user will be updated. If the user_id is provided, the auth\'ed user must be an admin (1) or owner (2) of the organization.
     * update_user
     * @param updateUserData JSON request payload to update user information for the auth\&#39;ed user
     */
    public updateUser(updateUserData: UpdateUserData, _options?: Configuration): Observable<SlimUser> {
        return this.updateUserWithHttpInfo(updateUserData, _options).pipe(map((apiResponse: HttpInfo<SlimUser>) => apiResponse.data));
    }

}
