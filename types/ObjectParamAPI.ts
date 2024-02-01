import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

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

import { ObservableAuthApi } from "./ObservableAPI";
import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";

export interface AuthApiCallbackRequest {
}

export interface AuthApiGetMeRequest {
}

export interface AuthApiLoginRequest {
    /**
     * Code sent via email as a result of successful call to send_invitation
     * @type string
     * @memberof AuthApilogin
     */
    invCode?: string
    /**
     * ID of organization to authenticate into
     * @type string
     * @memberof AuthApilogin
     */
    organizationId?: string
    /**
     * URL to redirect to after successful login
     * @type string
     * @memberof AuthApilogin
     */
    redirectUri?: string
}

export interface AuthApiLogoutRequest {
}

export class ObjectAuthApi {
    private api: ObservableAuthApi

    public constructor(configuration: Configuration, requestFactory?: AuthApiRequestFactory, responseProcessor?: AuthApiResponseProcessor) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * openid_callback  This is the callback route for the OAuth provider, it should not be called directly. Redirects to browser with set-cookie header.
     * openid_callback
     * @param param the request object
     */
    public callbackWithHttpInfo(param: AuthApiCallbackRequest = {}, options?: Configuration): Promise<HttpInfo<SlimUser>> {
        return this.api.callbackWithHttpInfo( options).toPromise();
    }

    /**
     * openid_callback  This is the callback route for the OAuth provider, it should not be called directly. Redirects to browser with set-cookie header.
     * openid_callback
     * @param param the request object
     */
    public callback(param: AuthApiCallbackRequest = {}, options?: Configuration): Promise<SlimUser> {
        return this.api.callback( options).toPromise();
    }

    /**
     * get_me  Get the user corresponding to your current auth credentials.
     * get_me
     * @param param the request object
     */
    public getMeWithHttpInfo(param: AuthApiGetMeRequest = {}, options?: Configuration): Promise<HttpInfo<SlimUser>> {
        return this.api.getMeWithHttpInfo( options).toPromise();
    }

    /**
     * get_me  Get the user corresponding to your current auth credentials.
     * get_me
     * @param param the request object
     */
    public getMe(param: AuthApiGetMeRequest = {}, options?: Configuration): Promise<SlimUser> {
        return this.api.getMe( options).toPromise();
    }

    /**
     * login  This will redirect you to the OAuth provider for authentication with email/pass, SSO, Google, Github, etc.
     * login
     * @param param the request object
     */
    public loginWithHttpInfo(param: AuthApiLoginRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.loginWithHttpInfo(param.invCode, param.organizationId, param.redirectUri,  options).toPromise();
    }

    /**
     * login  This will redirect you to the OAuth provider for authentication with email/pass, SSO, Google, Github, etc.
     * login
     * @param param the request object
     */
    public login(param: AuthApiLoginRequest = {}, options?: Configuration): Promise<void> {
        return this.api.login(param.invCode, param.organizationId, param.redirectUri,  options).toPromise();
    }

    /**
     * logout  Invalidate your current auth credential stored typically stored in a cookie. This does not invalidate your API key.
     * logout
     * @param param the request object
     */
    public logoutWithHttpInfo(param: AuthApiLogoutRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.logoutWithHttpInfo( options).toPromise();
    }

    /**
     * logout  Invalidate your current auth credential stored typically stored in a cookie. This does not invalidate your API key.
     * logout
     * @param param the request object
     */
    public logout(param: AuthApiLogoutRequest = {}, options?: Configuration): Promise<void> {
        return this.api.logout( options).toPromise();
    }

}

import { ObservableChunkApi } from "./ObservableAPI";
import { ChunkApiRequestFactory, ChunkApiResponseProcessor} from "../apis/ChunkApi";

export interface ChunkApiCreateChunkRequest {
    /**
     * The dataset id to use for the request
     * @type string
     * @memberof ChunkApicreateChunk
     */
    tRDataset: string
    /**
     * JSON request payload to create a new chunk (chunk)
     * @type CreateChunkData
     * @memberof ChunkApicreateChunk
     */
    createChunkData: CreateChunkData
}

export interface ChunkApiCreateSuggestedQueriesHandlerRequest {
    /**
     * The dataset id to use for the request
     * @type string
     * @memberof ChunkApicreateSuggestedQueriesHandler
     */
    tRDataset: string
    /**
     * JSON request payload to get alternative suggested queries
     * @type SuggestedQueriesRequest
     * @memberof ChunkApicreateSuggestedQueriesHandler
     */
    suggestedQueriesRequest: SuggestedQueriesRequest
}

export interface ChunkApiDeleteChunkRequest {
    /**
     * id of the chunk you want to delete
     * @type string
     * @memberof ChunkApideleteChunk
     */
    chunkId: string
    /**
     * The dataset id to use for the request
     * @type string
     * @memberof ChunkApideleteChunk
     */
    tRDataset: string
}

export interface ChunkApiDeleteChunkByTrackingIdRequest {
    /**
     * tracking_id of the chunk you want to delete
     * @type string
     * @memberof ChunkApideleteChunkByTrackingId
     */
    trackingId: string
    /**
     * The dataset id to use for the request
     * @type string
     * @memberof ChunkApideleteChunkByTrackingId
     */
    tRDataset: string
}

export interface ChunkApiGenerateOffChunksRequest {
    /**
     * The dataset id to use for the request
     * @type string
     * @memberof ChunkApigenerateOffChunks
     */
    tRDataset: string
    /**
     * JSON request payload to perform RAG on some chunks (chunks)
     * @type GenerateChunksRequest
     * @memberof ChunkApigenerateOffChunks
     */
    generateChunksRequest: GenerateChunksRequest
}

export interface ChunkApiGetChunkByIdRequest {
    /**
     * Id of the chunk you want to fetch.
     * @type string
     * @memberof ChunkApigetChunkById
     */
    chunkId: string
    /**
     * The dataset id to use for the request
     * @type string
     * @memberof ChunkApigetChunkById
     */
    tRDataset: string
}

export interface ChunkApiGetChunkByTrackingIdRequest {
    /**
     * tracking_id of the chunk you want to fetch
     * @type string
     * @memberof ChunkApigetChunkByTrackingId
     */
    trackingId: string
    /**
     * The dataset id to use for the request
     * @type string
     * @memberof ChunkApigetChunkByTrackingId
     */
    tRDataset: string
}

export interface ChunkApiGetRecommendedChunksRequest {
    /**
     * The dataset id to use for the request
     * @type string
     * @memberof ChunkApigetRecommendedChunks
     */
    tRDataset: string
    /**
     * JSON request payload to get recommendations of chunks similar to the chunks in the request
     * @type RecommendChunksRequest
     * @memberof ChunkApigetRecommendedChunks
     */
    recommendChunksRequest: RecommendChunksRequest
}

export interface ChunkApiSearchChunkRequest {
    /**
     * The dataset id to use for the request
     * @type string
     * @memberof ChunkApisearchChunk
     */
    tRDataset: string
    /**
     * JSON request payload to semantically search for chunks (chunks)
     * @type SearchChunkData
     * @memberof ChunkApisearchChunk
     */
    searchChunkData: SearchChunkData
}

export interface ChunkApiUpdateChunkRequest {
    /**
     * The dataset id to use for the request
     * @type string
     * @memberof ChunkApiupdateChunk
     */
    tRDataset: string
    /**
     * JSON request payload to update a chunk (chunk)
     * @type UpdateChunkData
     * @memberof ChunkApiupdateChunk
     */
    updateChunkData: UpdateChunkData
}

export interface ChunkApiUpdateChunkByTrackingIdRequest {
    /**
     * The dataset id to use for the request
     * @type string
     * @memberof ChunkApiupdateChunkByTrackingId
     */
    tRDataset: string
    /**
     * JSON request payload to update a chunk by tracking_id (chunks)
     * @type UpdateChunkByTrackingIdData
     * @memberof ChunkApiupdateChunkByTrackingId
     */
    updateChunkByTrackingIdData: UpdateChunkByTrackingIdData
}

export class ObjectChunkApi {
    private api: ObservableChunkApi

    public constructor(configuration: Configuration, requestFactory?: ChunkApiRequestFactory, responseProcessor?: ChunkApiResponseProcessor) {
        this.api = new ObservableChunkApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * create_chunk  Create a new chunk. If the chunk has the same tracking_id as an existing chunk, the request will fail. Once a chunk is created, it can be searched for using the search endpoint.
     * create_chunk
     * @param param the request object
     */
    public createChunkWithHttpInfo(param: ChunkApiCreateChunkRequest, options?: Configuration): Promise<HttpInfo<ReturnCreatedChunk>> {
        return this.api.createChunkWithHttpInfo(param.tRDataset, param.createChunkData,  options).toPromise();
    }

    /**
     * create_chunk  Create a new chunk. If the chunk has the same tracking_id as an existing chunk, the request will fail. Once a chunk is created, it can be searched for using the search endpoint.
     * create_chunk
     * @param param the request object
     */
    public createChunk(param: ChunkApiCreateChunkRequest, options?: Configuration): Promise<ReturnCreatedChunk> {
        return this.api.createChunk(param.tRDataset, param.createChunkData,  options).toPromise();
    }

    /**
     * get_suggested_queries  This endpoint will generate 3 suggested queries based off the query provided in the request body and return them as a JSON object.
     * get_suggested_queries
     * @param param the request object
     */
    public createSuggestedQueriesHandlerWithHttpInfo(param: ChunkApiCreateSuggestedQueriesHandlerRequest, options?: Configuration): Promise<HttpInfo<SuggestedQueriesResponse>> {
        return this.api.createSuggestedQueriesHandlerWithHttpInfo(param.tRDataset, param.suggestedQueriesRequest,  options).toPromise();
    }

    /**
     * get_suggested_queries  This endpoint will generate 3 suggested queries based off the query provided in the request body and return them as a JSON object.
     * get_suggested_queries
     * @param param the request object
     */
    public createSuggestedQueriesHandler(param: ChunkApiCreateSuggestedQueriesHandlerRequest, options?: Configuration): Promise<SuggestedQueriesResponse> {
        return this.api.createSuggestedQueriesHandler(param.tRDataset, param.suggestedQueriesRequest,  options).toPromise();
    }

    /**
     * delete_chunk  Delete a chunk by its id. If deleting a root chunk which has a collision, the most recently created collision will become a new root chunk.
     * delete_chunk
     * @param param the request object
     */
    public deleteChunkWithHttpInfo(param: ChunkApiDeleteChunkRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteChunkWithHttpInfo(param.chunkId, param.tRDataset,  options).toPromise();
    }

    /**
     * delete_chunk  Delete a chunk by its id. If deleting a root chunk which has a collision, the most recently created collision will become a new root chunk.
     * delete_chunk
     * @param param the request object
     */
    public deleteChunk(param: ChunkApiDeleteChunkRequest, options?: Configuration): Promise<void> {
        return this.api.deleteChunk(param.chunkId, param.tRDataset,  options).toPromise();
    }

    /**
     * delete_chunk_by_tracking_id  Delete a chunk by tracking_id. This is useful for when you are coordinating with an external system and want to use the tracking_id to identify the chunk. If deleting a root chunk which has a collision, the most recently created collision will become a new root chunk.
     * delete_chunk_by_tracking_id
     * @param param the request object
     */
    public deleteChunkByTrackingIdWithHttpInfo(param: ChunkApiDeleteChunkByTrackingIdRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteChunkByTrackingIdWithHttpInfo(param.trackingId, param.tRDataset,  options).toPromise();
    }

    /**
     * delete_chunk_by_tracking_id  Delete a chunk by tracking_id. This is useful for when you are coordinating with an external system and want to use the tracking_id to identify the chunk. If deleting a root chunk which has a collision, the most recently created collision will become a new root chunk.
     * delete_chunk_by_tracking_id
     * @param param the request object
     */
    public deleteChunkByTrackingId(param: ChunkApiDeleteChunkByTrackingIdRequest, options?: Configuration): Promise<void> {
        return this.api.deleteChunkByTrackingId(param.trackingId, param.tRDataset,  options).toPromise();
    }

    /**
     * augmented_generation_from_chunks  This endpoint exists as an alternative to the topic+message concept where our API handles chat memory. With this endpoint, the user is responsible for providing the context window and the prompt. See more in the \"search before generate\" page at docs.trieve.ai.
     * augmented_generation_from_chunks
     * @param param the request object
     */
    public generateOffChunksWithHttpInfo(param: ChunkApiGenerateOffChunksRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.generateOffChunksWithHttpInfo(param.tRDataset, param.generateChunksRequest,  options).toPromise();
    }

    /**
     * augmented_generation_from_chunks  This endpoint exists as an alternative to the topic+message concept where our API handles chat memory. With this endpoint, the user is responsible for providing the context window and the prompt. See more in the \"search before generate\" page at docs.trieve.ai.
     * augmented_generation_from_chunks
     * @param param the request object
     */
    public generateOffChunks(param: ChunkApiGenerateOffChunksRequest, options?: Configuration): Promise<string> {
        return this.api.generateOffChunks(param.tRDataset, param.generateChunksRequest,  options).toPromise();
    }

    /**
     * get_chunk  Get a singular chunk by id.
     * get_chunk
     * @param param the request object
     */
    public getChunkByIdWithHttpInfo(param: ChunkApiGetChunkByIdRequest, options?: Configuration): Promise<HttpInfo<ChunkMetadata>> {
        return this.api.getChunkByIdWithHttpInfo(param.chunkId, param.tRDataset,  options).toPromise();
    }

    /**
     * get_chunk  Get a singular chunk by id.
     * get_chunk
     * @param param the request object
     */
    public getChunkById(param: ChunkApiGetChunkByIdRequest, options?: Configuration): Promise<ChunkMetadata> {
        return this.api.getChunkById(param.chunkId, param.tRDataset,  options).toPromise();
    }

    /**
     * get_chunk_by_tracking_id  Get a singular chunk by tracking_id. This is useful for when you are coordinating with an external system and want to use your own id as the primary reference for a chunk.
     * get_chunk_by_tracking_id
     * @param param the request object
     */
    public getChunkByTrackingIdWithHttpInfo(param: ChunkApiGetChunkByTrackingIdRequest, options?: Configuration): Promise<HttpInfo<ChunkMetadata>> {
        return this.api.getChunkByTrackingIdWithHttpInfo(param.trackingId, param.tRDataset,  options).toPromise();
    }

    /**
     * get_chunk_by_tracking_id  Get a singular chunk by tracking_id. This is useful for when you are coordinating with an external system and want to use your own id as the primary reference for a chunk.
     * get_chunk_by_tracking_id
     * @param param the request object
     */
    public getChunkByTrackingId(param: ChunkApiGetChunkByTrackingIdRequest, options?: Configuration): Promise<ChunkMetadata> {
        return this.api.getChunkByTrackingId(param.trackingId, param.tRDataset,  options).toPromise();
    }

    /**
     * get_recommended_chunks  Get recommendations of chunks similar to the chunks in the request. Think about this as a feature similar to the \"add to playlist\" recommendation feature on Spotify. This request pairs especially well with our groups endpoint.
     * get_recommended_chunks
     * @param param the request object
     */
    public getRecommendedChunksWithHttpInfo(param: ChunkApiGetRecommendedChunksRequest, options?: Configuration): Promise<HttpInfo<Array<ChunkMetadataWithFileData>>> {
        return this.api.getRecommendedChunksWithHttpInfo(param.tRDataset, param.recommendChunksRequest,  options).toPromise();
    }

    /**
     * get_recommended_chunks  Get recommendations of chunks similar to the chunks in the request. Think about this as a feature similar to the \"add to playlist\" recommendation feature on Spotify. This request pairs especially well with our groups endpoint.
     * get_recommended_chunks
     * @param param the request object
     */
    public getRecommendedChunks(param: ChunkApiGetRecommendedChunksRequest, options?: Configuration): Promise<Array<ChunkMetadataWithFileData>> {
        return this.api.getRecommendedChunks(param.tRDataset, param.recommendChunksRequest,  options).toPromise();
    }

    /**
     * search  This route provides the primary search functionality for the API. It can be used to search for chunks by semantic similarity, full-text similarity, or a combination of both. Results\' `chunk_html` values will be modified with `<b>` tags for sub-sentence highlighting.
     * search
     * @param param the request object
     */
    public searchChunkWithHttpInfo(param: ChunkApiSearchChunkRequest, options?: Configuration): Promise<HttpInfo<SearchChunkQueryResponseBody>> {
        return this.api.searchChunkWithHttpInfo(param.tRDataset, param.searchChunkData,  options).toPromise();
    }

    /**
     * search  This route provides the primary search functionality for the API. It can be used to search for chunks by semantic similarity, full-text similarity, or a combination of both. Results\' `chunk_html` values will be modified with `<b>` tags for sub-sentence highlighting.
     * search
     * @param param the request object
     */
    public searchChunk(param: ChunkApiSearchChunkRequest, options?: Configuration): Promise<SearchChunkQueryResponseBody> {
        return this.api.searchChunk(param.tRDataset, param.searchChunkData,  options).toPromise();
    }

    /**
     * update_chunk  Update a chunk. If you try to change the tracking_id of the chunk to have the same tracking_id as an existing chunk, the request will fail.
     * update_chunk
     * @param param the request object
     */
    public updateChunkWithHttpInfo(param: ChunkApiUpdateChunkRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateChunkWithHttpInfo(param.tRDataset, param.updateChunkData,  options).toPromise();
    }

    /**
     * update_chunk  Update a chunk. If you try to change the tracking_id of the chunk to have the same tracking_id as an existing chunk, the request will fail.
     * update_chunk
     * @param param the request object
     */
    public updateChunk(param: ChunkApiUpdateChunkRequest, options?: Configuration): Promise<void> {
        return this.api.updateChunk(param.tRDataset, param.updateChunkData,  options).toPromise();
    }

    /**
     * update_chunk_by_tracking_id  Update a chunk by tracking_id. This is useful for when you are coordinating with an external system and want to use the tracking_id to identify the chunk.
     * update_chunk_by_tracking_id
     * @param param the request object
     */
    public updateChunkByTrackingIdWithHttpInfo(param: ChunkApiUpdateChunkByTrackingIdRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateChunkByTrackingIdWithHttpInfo(param.tRDataset, param.updateChunkByTrackingIdData,  options).toPromise();
    }

    /**
     * update_chunk_by_tracking_id  Update a chunk by tracking_id. This is useful for when you are coordinating with an external system and want to use the tracking_id to identify the chunk.
     * update_chunk_by_tracking_id
     * @param param the request object
     */
    public updateChunkByTrackingId(param: ChunkApiUpdateChunkByTrackingIdRequest, options?: Configuration): Promise<void> {
        return this.api.updateChunkByTrackingId(param.tRDataset, param.updateChunkByTrackingIdData,  options).toPromise();
    }

}

import { ObservableChunkGroupApi } from "./ObservableAPI";
import { ChunkGroupApiRequestFactory, ChunkGroupApiResponseProcessor} from "../apis/ChunkGroupApi";

export interface ChunkGroupApiAddBookmarkRequest {
    /**
     * Id of the group to add the chunk to as a bookmark
     * @type string
     * @memberof ChunkGroupApiaddBookmark
     */
    groupId: string
    /**
     * The dataset id to use for the request
     * @type string
     * @memberof ChunkGroupApiaddBookmark
     */
    tRDataset: string
    /**
     * JSON request payload to add a chunk to a group (bookmark it)
     * @type AddChunkToGroupData
     * @memberof ChunkGroupApiaddBookmark
     */
    addChunkToGroupData: AddChunkToGroupData
}

export interface ChunkGroupApiCreateChunkGroupRequest {
    /**
     * The dataset id to use for the request
     * @type string
     * @memberof ChunkGroupApicreateChunkGroup
     */
    tRDataset: string
    /**
     * JSON request payload to cretea a chunkGroup
     * @type CreateChunkGroupData
     * @memberof ChunkGroupApicreateChunkGroup
     */
    createChunkGroupData: CreateChunkGroupData
}

export interface ChunkGroupApiDeleteBookmarkRequest {
    /**
     * Id of the group to remove the bookmark\&#39;ed chunk from
     * @type string
     * @memberof ChunkGroupApideleteBookmark
     */
    groupId: string
    /**
     * Id of the bookmark to remove
     * @type string
     * @memberof ChunkGroupApideleteBookmark
     */
    bookmarkId: string
    /**
     * The dataset id to use for the request
     * @type string
     * @memberof ChunkGroupApideleteBookmark
     */
    tRDataset: string
}

export interface ChunkGroupApiDeleteChunkGroupRequest {
    /**
     * Id of the chunk_group to delete
     * @type string
     * @memberof ChunkGroupApideleteChunkGroup
     */
    groupId: string
    /**
     * The dataset id to use for the request
     * @type string
     * @memberof ChunkGroupApideleteChunkGroup
     */
    tRDataset: string
}

export interface ChunkGroupApiGetAllBookmarksRequest {
    /**
     * The id of the group to get the chunks from
     * @type string
     * @memberof ChunkGroupApigetAllBookmarks
     */
    groupId: string
    /**
     * The page of chunks to get from the group
     * @type number
     * @memberof ChunkGroupApigetAllBookmarks
     */
    page: number
    /**
     * The dataset id to use for the request
     * @type string
     * @memberof ChunkGroupApigetAllBookmarks
     */
    tRDataset: string
}

export interface ChunkGroupApiGetGroupsChunkIsInRequest {
    /**
     * The dataset id to use for the request
     * @type string
     * @memberof ChunkGroupApigetGroupsChunkIsIn
     */
    tRDataset: string
    /**
     * JSON request payload to get the groups that a chunk is in
     * @type GetGroupsForChunksData
     * @memberof ChunkGroupApigetGroupsChunkIsIn
     */
    getGroupsForChunksData: GetGroupsForChunksData
}

export interface ChunkGroupApiGetSpecificDatasetChunkGroupsRequest {
    /**
     * The id of the dataset to fetch groups for.
     * @type string
     * @memberof ChunkGroupApigetSpecificDatasetChunkGroups
     */
    datasetId: string
    /**
     * The page of groups to fetch. Each page contains 10 groups. Support for custom page size is coming soon.
     * @type number
     * @memberof ChunkGroupApigetSpecificDatasetChunkGroups
     */
    page: number
    /**
     * The dataset id to use for the request
     * @type string
     * @memberof ChunkGroupApigetSpecificDatasetChunkGroups
     */
    tRDataset: string
}

export interface ChunkGroupApiSearchGroupsRequest {
    /**
     * The dataset id to use for the request
     * @type string
     * @memberof ChunkGroupApisearchGroups
     */
    tRDataset: string
    /**
     * JSON request payload to semantically search a group
     * @type SearchGroupsData
     * @memberof ChunkGroupApisearchGroups
     */
    searchGroupsData: SearchGroupsData
}

export interface ChunkGroupApiUpdateChunkGroupRequest {
    /**
     * The dataset id to use for the request
     * @type string
     * @memberof ChunkGroupApiupdateChunkGroup
     */
    tRDataset: string
    /**
     * JSON request payload to update a chunkGroup
     * @type UpdateChunkGroupData
     * @memberof ChunkGroupApiupdateChunkGroup
     */
    updateChunkGroupData: UpdateChunkGroupData
}

export class ObjectChunkGroupApi {
    private api: ObservableChunkGroupApi

    public constructor(configuration: Configuration, requestFactory?: ChunkGroupApiRequestFactory, responseProcessor?: ChunkGroupApiResponseProcessor) {
        this.api = new ObservableChunkGroupApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * add_bookmark  Route to add a bookmark. Think of a bookmark as a chunk which is a member of a group.
     * add_bookmark
     * @param param the request object
     */
    public addBookmarkWithHttpInfo(param: ChunkGroupApiAddBookmarkRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.addBookmarkWithHttpInfo(param.groupId, param.tRDataset, param.addChunkToGroupData,  options).toPromise();
    }

    /**
     * add_bookmark  Route to add a bookmark. Think of a bookmark as a chunk which is a member of a group.
     * add_bookmark
     * @param param the request object
     */
    public addBookmark(param: ChunkGroupApiAddBookmarkRequest, options?: Configuration): Promise<void> {
        return this.api.addBookmark(param.groupId, param.tRDataset, param.addChunkToGroupData,  options).toPromise();
    }

    /**
     * create_chunk_group  Create a new chunk_group. Think of this as analogous to a bookmark folder.
     * create_chunk_group
     * @param param the request object
     */
    public createChunkGroupWithHttpInfo(param: ChunkGroupApiCreateChunkGroupRequest, options?: Configuration): Promise<HttpInfo<ChunkGroup>> {
        return this.api.createChunkGroupWithHttpInfo(param.tRDataset, param.createChunkGroupData,  options).toPromise();
    }

    /**
     * create_chunk_group  Create a new chunk_group. Think of this as analogous to a bookmark folder.
     * create_chunk_group
     * @param param the request object
     */
    public createChunkGroup(param: ChunkGroupApiCreateChunkGroupRequest, options?: Configuration): Promise<ChunkGroup> {
        return this.api.createChunkGroup(param.tRDataset, param.createChunkGroupData,  options).toPromise();
    }

    /**
     * delete_bookmark  Route to delete a bookmark. Think of a bookmark as a chunk which is a member of a group.
     * delete_bookmark
     * @param param the request object
     */
    public deleteBookmarkWithHttpInfo(param: ChunkGroupApiDeleteBookmarkRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteBookmarkWithHttpInfo(param.groupId, param.bookmarkId, param.tRDataset,  options).toPromise();
    }

    /**
     * delete_bookmark  Route to delete a bookmark. Think of a bookmark as a chunk which is a member of a group.
     * delete_bookmark
     * @param param the request object
     */
    public deleteBookmark(param: ChunkGroupApiDeleteBookmarkRequest, options?: Configuration): Promise<void> {
        return this.api.deleteBookmark(param.groupId, param.bookmarkId, param.tRDataset,  options).toPromise();
    }

    /**
     * delete_chunk_group  This will delete a chunk_group. This will not delete the chunks that are in the group. We will soon support deleting a chunk_group along with its member chunks.
     * delete_chunk_group
     * @param param the request object
     */
    public deleteChunkGroupWithHttpInfo(param: ChunkGroupApiDeleteChunkGroupRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteChunkGroupWithHttpInfo(param.groupId, param.tRDataset,  options).toPromise();
    }

    /**
     * delete_chunk_group  This will delete a chunk_group. This will not delete the chunks that are in the group. We will soon support deleting a chunk_group along with its member chunks.
     * delete_chunk_group
     * @param param the request object
     */
    public deleteChunkGroup(param: ChunkGroupApiDeleteChunkGroupRequest, options?: Configuration): Promise<void> {
        return this.api.deleteChunkGroup(param.groupId, param.tRDataset,  options).toPromise();
    }

    /**
     * get_all_bookmarks  Route to get all bookmarks for a group. Think of a bookmark as a chunk which is a member of a group. The response is paginated, with each page containing 10 chunks (bookmarks). Support for custom page size is coming soon.
     * get_all_bookmarks
     * @param param the request object
     */
    public getAllBookmarksWithHttpInfo(param: ChunkGroupApiGetAllBookmarksRequest, options?: Configuration): Promise<HttpInfo<BookmarkData>> {
        return this.api.getAllBookmarksWithHttpInfo(param.groupId, param.page, param.tRDataset,  options).toPromise();
    }

    /**
     * get_all_bookmarks  Route to get all bookmarks for a group. Think of a bookmark as a chunk which is a member of a group. The response is paginated, with each page containing 10 chunks (bookmarks). Support for custom page size is coming soon.
     * get_all_bookmarks
     * @param param the request object
     */
    public getAllBookmarks(param: ChunkGroupApiGetAllBookmarksRequest, options?: Configuration): Promise<BookmarkData> {
        return this.api.getAllBookmarks(param.groupId, param.page, param.tRDataset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getGroupsChunkIsInWithHttpInfo(param: ChunkGroupApiGetGroupsChunkIsInRequest, options?: Configuration): Promise<HttpInfo<Array<BookmarkGroupResult>>> {
        return this.api.getGroupsChunkIsInWithHttpInfo(param.tRDataset, param.getGroupsForChunksData,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getGroupsChunkIsIn(param: ChunkGroupApiGetGroupsChunkIsInRequest, options?: Configuration): Promise<Array<BookmarkGroupResult>> {
        return this.api.getGroupsChunkIsIn(param.tRDataset, param.getGroupsForChunksData,  options).toPromise();
    }

    /**
     * get_dataset_groups  Fetch the groups which belong to a dataset specified by its id.
     * get_dataset_groups
     * @param param the request object
     */
    public getSpecificDatasetChunkGroupsWithHttpInfo(param: ChunkGroupApiGetSpecificDatasetChunkGroupsRequest, options?: Configuration): Promise<HttpInfo<GroupData>> {
        return this.api.getSpecificDatasetChunkGroupsWithHttpInfo(param.datasetId, param.page, param.tRDataset,  options).toPromise();
    }

    /**
     * get_dataset_groups  Fetch the groups which belong to a dataset specified by its id.
     * get_dataset_groups
     * @param param the request object
     */
    public getSpecificDatasetChunkGroups(param: ChunkGroupApiGetSpecificDatasetChunkGroupsRequest, options?: Configuration): Promise<GroupData> {
        return this.api.getSpecificDatasetChunkGroups(param.datasetId, param.page, param.tRDataset,  options).toPromise();
    }

    /**
     * group_search  This route allows you to search only within a group. This is useful for when you only want search results to contain chunks which are members of a specific group. Think about this like searching within a playlist or bookmark folder.
     * group_search
     * @param param the request object
     */
    public searchGroupsWithHttpInfo(param: ChunkGroupApiSearchGroupsRequest, options?: Configuration): Promise<HttpInfo<SearchGroupsResult>> {
        return this.api.searchGroupsWithHttpInfo(param.tRDataset, param.searchGroupsData,  options).toPromise();
    }

    /**
     * group_search  This route allows you to search only within a group. This is useful for when you only want search results to contain chunks which are members of a specific group. Think about this like searching within a playlist or bookmark folder.
     * group_search
     * @param param the request object
     */
    public searchGroups(param: ChunkGroupApiSearchGroupsRequest, options?: Configuration): Promise<SearchGroupsResult> {
        return this.api.searchGroups(param.tRDataset, param.searchGroupsData,  options).toPromise();
    }

    /**
     * update_chunk_group  Update a chunk_group. Think of this as analogous to a bookmark folder.
     * update_chunk_group
     * @param param the request object
     */
    public updateChunkGroupWithHttpInfo(param: ChunkGroupApiUpdateChunkGroupRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateChunkGroupWithHttpInfo(param.tRDataset, param.updateChunkGroupData,  options).toPromise();
    }

    /**
     * update_chunk_group  Update a chunk_group. Think of this as analogous to a bookmark folder.
     * update_chunk_group
     * @param param the request object
     */
    public updateChunkGroup(param: ChunkGroupApiUpdateChunkGroupRequest, options?: Configuration): Promise<void> {
        return this.api.updateChunkGroup(param.tRDataset, param.updateChunkGroupData,  options).toPromise();
    }

}

import { ObservableDatasetApi } from "./ObservableAPI";
import { DatasetApiRequestFactory, DatasetApiResponseProcessor} from "../apis/DatasetApi";

export interface DatasetApiCreateDatasetRequest {
    /**
     * The organization id to use for the request
     * @type string
     * @memberof DatasetApicreateDataset
     */
    tROrganization: string
    /**
     * JSON request payload to create a new dataset
     * @type CreateDatasetRequest
     * @memberof DatasetApicreateDataset
     */
    createDatasetRequest: CreateDatasetRequest
}

export interface DatasetApiDeleteDatasetRequest {
    /**
     * The organization id to use for the request
     * @type string
     * @memberof DatasetApideleteDataset
     */
    tROrganization: string
    /**
     * JSON request payload to delete a dataset
     * @type DeleteDatasetRequest
     * @memberof DatasetApideleteDataset
     */
    deleteDatasetRequest: DeleteDatasetRequest
}

export interface DatasetApiGetClientDatasetConfigRequest {
    /**
     * The dataset id to use for the request
     * @type string
     * @memberof DatasetApigetClientDatasetConfig
     */
    tRDataset: string
}

export interface DatasetApiGetDatasetRequest {
    /**
     * The id of the dataset you want to retrieve.
     * @type string
     * @memberof DatasetApigetDataset
     */
    datasetId: string
    /**
     * The organization id to use for the request
     * @type string
     * @memberof DatasetApigetDataset
     */
    tROrganization: string
    /**
     * The dataset id to use for the request
     * @type string
     * @memberof DatasetApigetDataset
     */
    tRDataset: string
}

export interface DatasetApiGetDatasetsFromOrganizationRequest {
    /**
     * id of the organization you want to retrieve datasets for
     * @type string
     * @memberof DatasetApigetDatasetsFromOrganization
     */
    organizationId: string
    /**
     * The organization id to use for the request
     * @type string
     * @memberof DatasetApigetDatasetsFromOrganization
     */
    tROrganization: string
}

export interface DatasetApiUpdateDatasetRequest {
    /**
     * The organization id to use for the request
     * @type string
     * @memberof DatasetApiupdateDataset
     */
    tROrganization: string
    /**
     * JSON request payload to update a dataset
     * @type UpdateDatasetRequest
     * @memberof DatasetApiupdateDataset
     */
    updateDatasetRequest: UpdateDatasetRequest
}

export class ObjectDatasetApi {
    private api: ObservableDatasetApi

    public constructor(configuration: Configuration, requestFactory?: DatasetApiRequestFactory, responseProcessor?: DatasetApiResponseProcessor) {
        this.api = new ObservableDatasetApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * create_dataset  Create a new dataset. The auth\'ed user must be an owner of the organization to create a dataset.
     * create_dataset
     * @param param the request object
     */
    public createDatasetWithHttpInfo(param: DatasetApiCreateDatasetRequest, options?: Configuration): Promise<HttpInfo<Dataset>> {
        return this.api.createDatasetWithHttpInfo(param.tROrganization, param.createDatasetRequest,  options).toPromise();
    }

    /**
     * create_dataset  Create a new dataset. The auth\'ed user must be an owner of the organization to create a dataset.
     * create_dataset
     * @param param the request object
     */
    public createDataset(param: DatasetApiCreateDatasetRequest, options?: Configuration): Promise<Dataset> {
        return this.api.createDataset(param.tROrganization, param.createDatasetRequest,  options).toPromise();
    }

    /**
     * delete_dataset  Delete a dataset. The auth\'ed user must be an owner of the organization to delete a dataset.
     * delete_dataset
     * @param param the request object
     */
    public deleteDatasetWithHttpInfo(param: DatasetApiDeleteDatasetRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteDatasetWithHttpInfo(param.tROrganization, param.deleteDatasetRequest,  options).toPromise();
    }

    /**
     * delete_dataset  Delete a dataset. The auth\'ed user must be an owner of the organization to delete a dataset.
     * delete_dataset
     * @param param the request object
     */
    public deleteDataset(param: DatasetApiDeleteDatasetRequest, options?: Configuration): Promise<void> {
        return this.api.deleteDataset(param.tROrganization, param.deleteDatasetRequest,  options).toPromise();
    }

    /**
     * get_client_dataset_config  Get the client configuration for a dataset. Will use the TR-D
     * get_client_dataset_config
     * @param param the request object
     */
    public getClientDatasetConfigWithHttpInfo(param: DatasetApiGetClientDatasetConfigRequest, options?: Configuration): Promise<HttpInfo<ClientDatasetConfiguration>> {
        return this.api.getClientDatasetConfigWithHttpInfo(param.tRDataset,  options).toPromise();
    }

    /**
     * get_client_dataset_config  Get the client configuration for a dataset. Will use the TR-D
     * get_client_dataset_config
     * @param param the request object
     */
    public getClientDatasetConfig(param: DatasetApiGetClientDatasetConfigRequest, options?: Configuration): Promise<ClientDatasetConfiguration> {
        return this.api.getClientDatasetConfig(param.tRDataset,  options).toPromise();
    }

    /**
     * get_dataset  Get a dataset by id. The auth\'ed user must be an admin or owner of the organization to get a dataset.
     * get_dataset
     * @param param the request object
     */
    public getDatasetWithHttpInfo(param: DatasetApiGetDatasetRequest, options?: Configuration): Promise<HttpInfo<Dataset>> {
        return this.api.getDatasetWithHttpInfo(param.datasetId, param.tROrganization, param.tRDataset,  options).toPromise();
    }

    /**
     * get_dataset  Get a dataset by id. The auth\'ed user must be an admin or owner of the organization to get a dataset.
     * get_dataset
     * @param param the request object
     */
    public getDataset(param: DatasetApiGetDatasetRequest, options?: Configuration): Promise<Dataset> {
        return this.api.getDataset(param.datasetId, param.tROrganization, param.tRDataset,  options).toPromise();
    }

    /**
     * get_organization_datasets  Get all datasets for an organization. The auth\'ed user must be an admin or owner of the organization to get its datasets.
     * get_organization_datasets
     * @param param the request object
     */
    public getDatasetsFromOrganizationWithHttpInfo(param: DatasetApiGetDatasetsFromOrganizationRequest, options?: Configuration): Promise<HttpInfo<Array<DatasetAndUsage>>> {
        return this.api.getDatasetsFromOrganizationWithHttpInfo(param.organizationId, param.tROrganization,  options).toPromise();
    }

    /**
     * get_organization_datasets  Get all datasets for an organization. The auth\'ed user must be an admin or owner of the organization to get its datasets.
     * get_organization_datasets
     * @param param the request object
     */
    public getDatasetsFromOrganization(param: DatasetApiGetDatasetsFromOrganizationRequest, options?: Configuration): Promise<Array<DatasetAndUsage>> {
        return this.api.getDatasetsFromOrganization(param.organizationId, param.tROrganization,  options).toPromise();
    }

    /**
     * update_dataset  Update a dataset. The auth\'ed user must be an owner of the organization to update a dataset.
     * update_dataset
     * @param param the request object
     */
    public updateDatasetWithHttpInfo(param: DatasetApiUpdateDatasetRequest, options?: Configuration): Promise<HttpInfo<Dataset>> {
        return this.api.updateDatasetWithHttpInfo(param.tROrganization, param.updateDatasetRequest,  options).toPromise();
    }

    /**
     * update_dataset  Update a dataset. The auth\'ed user must be an owner of the organization to update a dataset.
     * update_dataset
     * @param param the request object
     */
    public updateDataset(param: DatasetApiUpdateDatasetRequest, options?: Configuration): Promise<Dataset> {
        return this.api.updateDataset(param.tROrganization, param.updateDatasetRequest,  options).toPromise();
    }

}

import { ObservableEventsApi } from "./ObservableAPI";
import { EventsApiRequestFactory, EventsApiResponseProcessor} from "../apis/EventsApi";

export interface EventsApiGetEventsRequest {
    /**
     * Page number of events to get
     * @type number
     * @memberof EventsApigetEvents
     */
    page: number
    /**
     * The dataset id to use for the request
     * @type string
     * @memberof EventsApigetEvents
     */
    tRDataset: string
}

export class ObjectEventsApi {
    private api: ObservableEventsApi

    public constructor(configuration: Configuration, requestFactory?: EventsApiRequestFactory, responseProcessor?: EventsApiResponseProcessor) {
        this.api = new ObservableEventsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * get_events  Get events for the auth\'ed user. Currently, this is only for events belonging to the auth\'ed user. Soon, we plan to associate events to datasets instead of users. Each page contains 10 events.
     * get_events
     * @param param the request object
     */
    public getEventsWithHttpInfo(param: EventsApiGetEventsRequest, options?: Configuration): Promise<HttpInfo<EventReturn>> {
        return this.api.getEventsWithHttpInfo(param.page, param.tRDataset,  options).toPromise();
    }

    /**
     * get_events  Get events for the auth\'ed user. Currently, this is only for events belonging to the auth\'ed user. Soon, we plan to associate events to datasets instead of users. Each page contains 10 events.
     * get_events
     * @param param the request object
     */
    public getEvents(param: EventsApiGetEventsRequest, options?: Configuration): Promise<EventReturn> {
        return this.api.getEvents(param.page, param.tRDataset,  options).toPromise();
    }

}

import { ObservableFileApi } from "./ObservableAPI";
import { FileApiRequestFactory, FileApiResponseProcessor} from "../apis/FileApi";

export interface FileApiDeleteFileHandlerRequest {
    /**
     * The id of the file to delete
     * @type string
     * @memberof FileApideleteFileHandler
     */
    fileId: string
    /**
     * The dataset id to use for the request
     * @type string
     * @memberof FileApideleteFileHandler
     */
    tRDataset: string
}

export interface FileApiGetFileHandlerRequest {
    /**
     * The id of the file to fetch
     * @type string
     * @memberof FileApigetFileHandler
     */
    fileId: string
    /**
     * The dataset id to use for the request
     * @type string
     * @memberof FileApigetFileHandler
     */
    tRDataset: string
}

export interface FileApiGetImageFileRequest {
    /**
     * The name of the image file to return
     * @type string
     * @memberof FileApigetImageFile
     */
    fileName: string
    /**
     * The dataset id to use for the request
     * @type string
     * @memberof FileApigetImageFile
     */
    tRDataset: string
}

export interface FileApiUploadFileHandlerRequest {
    /**
     * The dataset id to use for the request
     * @type string
     * @memberof FileApiuploadFileHandler
     */
    tRDataset: string
    /**
     * JSON request payload to upload a file
     * @type UploadFileData
     * @memberof FileApiuploadFileHandler
     */
    uploadFileData: UploadFileData
}

export class ObjectFileApi {
    private api: ObservableFileApi

    public constructor(configuration: Configuration, requestFactory?: FileApiRequestFactory, responseProcessor?: FileApiResponseProcessor) {
        this.api = new ObservableFileApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * delete_file  Delete a file from S3 attached to the server based on its id. This will disassociate chunks from the file, but will not delete the chunks. We plan to add support for deleting chunks in a release soon. Auth\'ed user must be an admin or owner of the dataset\'s organization to upload a file.
     * delete_file
     * @param param the request object
     */
    public deleteFileHandlerWithHttpInfo(param: FileApiDeleteFileHandlerRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteFileHandlerWithHttpInfo(param.fileId, param.tRDataset,  options).toPromise();
    }

    /**
     * delete_file  Delete a file from S3 attached to the server based on its id. This will disassociate chunks from the file, but will not delete the chunks. We plan to add support for deleting chunks in a release soon. Auth\'ed user must be an admin or owner of the dataset\'s organization to upload a file.
     * delete_file
     * @param param the request object
     */
    public deleteFileHandler(param: FileApiDeleteFileHandlerRequest, options?: Configuration): Promise<void> {
        return this.api.deleteFileHandler(param.fileId, param.tRDataset,  options).toPromise();
    }

    /**
     * get_file  Download a file from S3 attached to the server based on its id. We plan to add support for getting signed S3 URLs to download from S3 directly in a release soon.
     * get_file
     * @param param the request object
     */
    public getFileHandlerWithHttpInfo(param: FileApiGetFileHandlerRequest, options?: Configuration): Promise<HttpInfo<FileDTO>> {
        return this.api.getFileHandlerWithHttpInfo(param.fileId, param.tRDataset,  options).toPromise();
    }

    /**
     * get_file  Download a file from S3 attached to the server based on its id. We plan to add support for getting signed S3 URLs to download from S3 directly in a release soon.
     * get_file
     * @param param the request object
     */
    public getFileHandler(param: FileApiGetFileHandlerRequest, options?: Configuration): Promise<FileDTO> {
        return this.api.getFileHandler(param.fileId, param.tRDataset,  options).toPromise();
    }

    /**
     * get_image_file  We strongly recommend not using this endpoint. It is disabled on the managed version and only meant for niche on-prem use cases where an image directory is mounted. Get in touch with us thru information on docs.trieve.ai for more information.
     * get_image_file
     * @param param the request object
     */
    public getImageFileWithHttpInfo(param: FileApiGetImageFileRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getImageFileWithHttpInfo(param.fileName, param.tRDataset,  options).toPromise();
    }

    /**
     * get_image_file  We strongly recommend not using this endpoint. It is disabled on the managed version and only meant for niche on-prem use cases where an image directory is mounted. Get in touch with us thru information on docs.trieve.ai for more information.
     * get_image_file
     * @param param the request object
     */
    public getImageFile(param: FileApiGetImageFileRequest, options?: Configuration): Promise<void> {
        return this.api.getImageFile(param.fileName, param.tRDataset,  options).toPromise();
    }

    /**
     * upload_file  Upload a file to S3 attached to the server. The file will be converted to HTML with tika and chunked algorithmically, images will be OCR\'ed with tesseract. The resulting chunks will be indexed and searchable. Optionally, you can only upload the file and manually create chunks associated to the file after. See docs.trieve.ai and/or contact us for more details and tips. Auth\'ed user must be an admin or owner of the dataset\'s organization to upload a file.
     * upload_file
     * @param param the request object
     */
    public uploadFileHandlerWithHttpInfo(param: FileApiUploadFileHandlerRequest, options?: Configuration): Promise<HttpInfo<UploadFileResult>> {
        return this.api.uploadFileHandlerWithHttpInfo(param.tRDataset, param.uploadFileData,  options).toPromise();
    }

    /**
     * upload_file  Upload a file to S3 attached to the server. The file will be converted to HTML with tika and chunked algorithmically, images will be OCR\'ed with tesseract. The resulting chunks will be indexed and searchable. Optionally, you can only upload the file and manually create chunks associated to the file after. See docs.trieve.ai and/or contact us for more details and tips. Auth\'ed user must be an admin or owner of the dataset\'s organization to upload a file.
     * upload_file
     * @param param the request object
     */
    public uploadFileHandler(param: FileApiUploadFileHandlerRequest, options?: Configuration): Promise<UploadFileResult> {
        return this.api.uploadFileHandler(param.tRDataset, param.uploadFileData,  options).toPromise();
    }

}

import { ObservableHealthApi } from "./ObservableAPI";
import { HealthApiRequestFactory, HealthApiResponseProcessor} from "../apis/HealthApi";

export interface HealthApiHealthCheckRequest {
}

export class ObjectHealthApi {
    private api: ObservableHealthApi

    public constructor(configuration: Configuration, requestFactory?: HealthApiRequestFactory, responseProcessor?: HealthApiResponseProcessor) {
        this.api = new ObservableHealthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public healthCheckWithHttpInfo(param: HealthApiHealthCheckRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.healthCheckWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public healthCheck(param: HealthApiHealthCheckRequest = {}, options?: Configuration): Promise<void> {
        return this.api.healthCheck( options).toPromise();
    }

}

import { ObservableInvitationApi } from "./ObservableAPI";
import { InvitationApiRequestFactory, InvitationApiResponseProcessor} from "../apis/InvitationApi";

export interface InvitationApiPostInvitationRequest {
    /**
     * The organization id to use for the request
     * @type string
     * @memberof InvitationApipostInvitation
     */
    tROrganization: string
    /**
     * JSON request payload to send an invitation
     * @type InvitationData
     * @memberof InvitationApipostInvitation
     */
    invitationData: InvitationData
}

export class ObjectInvitationApi {
    private api: ObservableInvitationApi

    public constructor(configuration: Configuration, requestFactory?: InvitationApiRequestFactory, responseProcessor?: InvitationApiResponseProcessor) {
        this.api = new ObservableInvitationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * send_invitation  Invitations act as a way to invite users to join an organization. After a user is invited, they will automatically be added to the organization with the role specified in the invitation once they set their.
     * send_invitation
     * @param param the request object
     */
    public postInvitationWithHttpInfo(param: InvitationApiPostInvitationRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.postInvitationWithHttpInfo(param.tROrganization, param.invitationData,  options).toPromise();
    }

    /**
     * send_invitation  Invitations act as a way to invite users to join an organization. After a user is invited, they will automatically be added to the organization with the role specified in the invitation once they set their.
     * send_invitation
     * @param param the request object
     */
    public postInvitation(param: InvitationApiPostInvitationRequest, options?: Configuration): Promise<void> {
        return this.api.postInvitation(param.tROrganization, param.invitationData,  options).toPromise();
    }

}

import { ObservableMessageApi } from "./ObservableAPI";
import { MessageApiRequestFactory, MessageApiResponseProcessor} from "../apis/MessageApi";

export interface MessageApiCreateMessageCompletionHandlerRequest {
    /**
     * The dataset id to use for the request
     * @type string
     * @memberof MessageApicreateMessageCompletionHandler
     */
    tRDataset: string
    /**
     * JSON request payload to create a message completion
     * @type CreateMessageData
     * @memberof MessageApicreateMessageCompletionHandler
     */
    createMessageData: CreateMessageData
}

export interface MessageApiEditMessageHandlerRequest {
    /**
     * The dataset id to use for the request
     * @type string
     * @memberof MessageApieditMessageHandler
     */
    tRDataset: string
    /**
     * JSON request payload to edit a message and get a new stream
     * @type EditMessageData
     * @memberof MessageApieditMessageHandler
     */
    editMessageData: EditMessageData
}

export interface MessageApiGetAllTopicMessagesRequest {
    /**
     * The ID of the topic to get messages for.
     * @type string
     * @memberof MessageApigetAllTopicMessages
     */
    messagesTopicId: string
    /**
     * The dataset id to use for the request
     * @type string
     * @memberof MessageApigetAllTopicMessages
     */
    tRDataset: string
}

export interface MessageApiRegenerateMessageHandlerRequest {
    /**
     * The dataset id to use for the request
     * @type string
     * @memberof MessageApiregenerateMessageHandler
     */
    tRDataset: string
    /**
     * JSON request payload to delete an agent message then regenerate it in a strem
     * @type RegenerateMessageData
     * @memberof MessageApiregenerateMessageHandler
     */
    regenerateMessageData: RegenerateMessageData
}

export class ObjectMessageApi {
    private api: ObservableMessageApi

    public constructor(configuration: Configuration, requestFactory?: MessageApiRequestFactory, responseProcessor?: MessageApiResponseProcessor) {
        this.api = new ObservableMessageApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * create_message  Create a message. Messages are attached to topics in order to coordinate memory of gen-AI chat sessions. We are considering refactoring this resource of the API soon. Currently, you can only send user messages. If the topic is a RAG topic then the response will include Chunks first on the stream. The structure will look like `[chunks]||mesage`. See docs.trieve.ai for more information.
     * create_message
     * @param param the request object
     */
    public createMessageCompletionHandlerWithHttpInfo(param: MessageApiCreateMessageCompletionHandlerRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.createMessageCompletionHandlerWithHttpInfo(param.tRDataset, param.createMessageData,  options).toPromise();
    }

    /**
     * create_message  Create a message. Messages are attached to topics in order to coordinate memory of gen-AI chat sessions. We are considering refactoring this resource of the API soon. Currently, you can only send user messages. If the topic is a RAG topic then the response will include Chunks first on the stream. The structure will look like `[chunks]||mesage`. See docs.trieve.ai for more information.
     * create_message
     * @param param the request object
     */
    public createMessageCompletionHandler(param: MessageApiCreateMessageCompletionHandlerRequest, options?: Configuration): Promise<string> {
        return this.api.createMessageCompletionHandler(param.tRDataset, param.createMessageData,  options).toPromise();
    }

    /**
     * edit_message  Edit a message which exists within the topic\'s chat history. This will delete the message and replace it with a new message. The new message will be generated by the AI based on the new content provided in the request body. The response will include Chunks first on the stream if the topic is using RAG. The structure will look like `[chunks]||mesage`. See docs.trieve.ai for more information.
     * edit_message
     * @param param the request object
     */
    public editMessageHandlerWithHttpInfo(param: MessageApiEditMessageHandlerRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.editMessageHandlerWithHttpInfo(param.tRDataset, param.editMessageData,  options).toPromise();
    }

    /**
     * edit_message  Edit a message which exists within the topic\'s chat history. This will delete the message and replace it with a new message. The new message will be generated by the AI based on the new content provided in the request body. The response will include Chunks first on the stream if the topic is using RAG. The structure will look like `[chunks]||mesage`. See docs.trieve.ai for more information.
     * edit_message
     * @param param the request object
     */
    public editMessageHandler(param: MessageApiEditMessageHandlerRequest, options?: Configuration): Promise<void> {
        return this.api.editMessageHandler(param.tRDataset, param.editMessageData,  options).toPromise();
    }

    /**
     * get_all_messages  Get all messages for a given topic. If the topic is a RAG topic then the response will include Chunks first on each message. The structure will look like `[chunks]||mesage`. See docs.trieve.ai for more information.
     * get_all_messages
     * @param param the request object
     */
    public getAllTopicMessagesWithHttpInfo(param: MessageApiGetAllTopicMessagesRequest, options?: Configuration): Promise<HttpInfo<Array<Message>>> {
        return this.api.getAllTopicMessagesWithHttpInfo(param.messagesTopicId, param.tRDataset,  options).toPromise();
    }

    /**
     * get_all_messages  Get all messages for a given topic. If the topic is a RAG topic then the response will include Chunks first on each message. The structure will look like `[chunks]||mesage`. See docs.trieve.ai for more information.
     * get_all_messages
     * @param param the request object
     */
    public getAllTopicMessages(param: MessageApiGetAllTopicMessagesRequest, options?: Configuration): Promise<Array<Message>> {
        return this.api.getAllTopicMessages(param.messagesTopicId, param.tRDataset,  options).toPromise();
    }

    /**
     * regenerate_message  Regenerate the assistant response to the last user message of a topic. This will delete the last message and replace it with a new message. The response will include Chunks first on the stream if the topic is using RAG. The structure will look like `[chunks]||mesage`. See docs.trieve.ai for more information.
     * regenerate_message
     * @param param the request object
     */
    public regenerateMessageHandlerWithHttpInfo(param: MessageApiRegenerateMessageHandlerRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.regenerateMessageHandlerWithHttpInfo(param.tRDataset, param.regenerateMessageData,  options).toPromise();
    }

    /**
     * regenerate_message  Regenerate the assistant response to the last user message of a topic. This will delete the last message and replace it with a new message. The response will include Chunks first on the stream if the topic is using RAG. The structure will look like `[chunks]||mesage`. See docs.trieve.ai for more information.
     * regenerate_message
     * @param param the request object
     */
    public regenerateMessageHandler(param: MessageApiRegenerateMessageHandlerRequest, options?: Configuration): Promise<string> {
        return this.api.regenerateMessageHandler(param.tRDataset, param.regenerateMessageData,  options).toPromise();
    }

}

import { ObservableOrganizationApi } from "./ObservableAPI";
import { OrganizationApiRequestFactory, OrganizationApiResponseProcessor} from "../apis/OrganizationApi";

export interface OrganizationApiCreateOrganizationRequest {
    /**
     * The organization data that you want to create
     * @type CreateOrganizationData
     * @memberof OrganizationApicreateOrganization
     */
    createOrganizationData: CreateOrganizationData
}

export interface OrganizationApiGetOrganizationByIdRequest {
    /**
     * The id of the organization you want to fetch.
     * @type string
     * @memberof OrganizationApigetOrganizationById
     */
    organizationId: string
    /**
     * The organization id to use for the request
     * @type string
     * @memberof OrganizationApigetOrganizationById
     */
    tROrganization: string
}

export interface OrganizationApiGetOrganizationUsageRequest {
    /**
     * The id of the organization you want to fetch the usage of.
     * @type string
     * @memberof OrganizationApigetOrganizationUsage
     */
    organizationId: string
    /**
     * The organization id to use for the request
     * @type string
     * @memberof OrganizationApigetOrganizationUsage
     */
    tROrganization: string
}

export interface OrganizationApiGetOrganizationUsersRequest {
    /**
     * The id of the organization you want to fetch the users of.
     * @type string
     * @memberof OrganizationApigetOrganizationUsers
     */
    organizationId: string
    /**
     * The organization id to use for the request
     * @type string
     * @memberof OrganizationApigetOrganizationUsers
     */
    tROrganization: string
}

export interface OrganizationApiUpdateOrganizationRequest {
    /**
     * The organization id to use for the request
     * @type string
     * @memberof OrganizationApiupdateOrganization
     */
    tROrganization: string
    /**
     * The organization data that you want to update
     * @type UpdateOrganizationData
     * @memberof OrganizationApiupdateOrganization
     */
    updateOrganizationData: UpdateOrganizationData
}

export class ObjectOrganizationApi {
    private api: ObservableOrganizationApi

    public constructor(configuration: Configuration, requestFactory?: OrganizationApiRequestFactory, responseProcessor?: OrganizationApiResponseProcessor) {
        this.api = new ObservableOrganizationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * create_organization  Create a new organization. The auth\'ed user who creates the organization will be the default owner of the organization.
     * create_organization
     * @param param the request object
     */
    public createOrganizationWithHttpInfo(param: OrganizationApiCreateOrganizationRequest, options?: Configuration): Promise<HttpInfo<Organization>> {
        return this.api.createOrganizationWithHttpInfo(param.createOrganizationData,  options).toPromise();
    }

    /**
     * create_organization  Create a new organization. The auth\'ed user who creates the organization will be the default owner of the organization.
     * create_organization
     * @param param the request object
     */
    public createOrganization(param: OrganizationApiCreateOrganizationRequest, options?: Configuration): Promise<Organization> {
        return this.api.createOrganization(param.createOrganizationData,  options).toPromise();
    }

    /**
     * get_organization  Fetch the details of an organization by its id. The auth\'ed user must be an admin or owner of the organization to fetch it.
     * get_organization
     * @param param the request object
     */
    public getOrganizationByIdWithHttpInfo(param: OrganizationApiGetOrganizationByIdRequest, options?: Configuration): Promise<HttpInfo<Organization>> {
        return this.api.getOrganizationByIdWithHttpInfo(param.organizationId, param.tROrganization,  options).toPromise();
    }

    /**
     * get_organization  Fetch the details of an organization by its id. The auth\'ed user must be an admin or owner of the organization to fetch it.
     * get_organization
     * @param param the request object
     */
    public getOrganizationById(param: OrganizationApiGetOrganizationByIdRequest, options?: Configuration): Promise<Organization> {
        return this.api.getOrganizationById(param.organizationId, param.tROrganization,  options).toPromise();
    }

    /**
     * get_organization_usage  Fetch the current usage specification of an organization by its id. The auth\'ed user must be an admin or owner of the organization to fetch it.
     * get_organization_usage
     * @param param the request object
     */
    public getOrganizationUsageWithHttpInfo(param: OrganizationApiGetOrganizationUsageRequest, options?: Configuration): Promise<HttpInfo<OrganizationUsageCount>> {
        return this.api.getOrganizationUsageWithHttpInfo(param.organizationId, param.tROrganization,  options).toPromise();
    }

    /**
     * get_organization_usage  Fetch the current usage specification of an organization by its id. The auth\'ed user must be an admin or owner of the organization to fetch it.
     * get_organization_usage
     * @param param the request object
     */
    public getOrganizationUsage(param: OrganizationApiGetOrganizationUsageRequest, options?: Configuration): Promise<OrganizationUsageCount> {
        return this.api.getOrganizationUsage(param.organizationId, param.tROrganization,  options).toPromise();
    }

    /**
     * get_organization_users  Fetch the users of an organization by its id. The auth\'ed user must be an admin or owner of the organization to fetch it.
     * get_organization_users
     * @param param the request object
     */
    public getOrganizationUsersWithHttpInfo(param: OrganizationApiGetOrganizationUsersRequest, options?: Configuration): Promise<HttpInfo<Array<SlimUser>>> {
        return this.api.getOrganizationUsersWithHttpInfo(param.organizationId, param.tROrganization,  options).toPromise();
    }

    /**
     * get_organization_users  Fetch the users of an organization by its id. The auth\'ed user must be an admin or owner of the organization to fetch it.
     * get_organization_users
     * @param param the request object
     */
    public getOrganizationUsers(param: OrganizationApiGetOrganizationUsersRequest, options?: Configuration): Promise<Array<SlimUser>> {
        return this.api.getOrganizationUsers(param.organizationId, param.tROrganization,  options).toPromise();
    }

    /**
     * update_organization  Update an organization. Only the owner of the organization can update it.
     * update_organization
     * @param param the request object
     */
    public updateOrganizationWithHttpInfo(param: OrganizationApiUpdateOrganizationRequest, options?: Configuration): Promise<HttpInfo<Organization>> {
        return this.api.updateOrganizationWithHttpInfo(param.tROrganization, param.updateOrganizationData,  options).toPromise();
    }

    /**
     * update_organization  Update an organization. Only the owner of the organization can update it.
     * update_organization
     * @param param the request object
     */
    public updateOrganization(param: OrganizationApiUpdateOrganizationRequest, options?: Configuration): Promise<Organization> {
        return this.api.updateOrganization(param.tROrganization, param.updateOrganizationData,  options).toPromise();
    }

}

import { ObservableStripeApi } from "./ObservableAPI";
import { StripeApiRequestFactory, StripeApiResponseProcessor} from "../apis/StripeApi";

export interface StripeApiCancelSubscriptionRequest {
    /**
     * id of the subscription you want to cancel
     * @type string
     * @memberof StripeApicancelSubscription
     */
    subscriptionId: string
    /**
     * The organization id to use for the request
     * @type string
     * @memberof StripeApicancelSubscription
     */
    tROrganization: string
}

export interface StripeApiDirectToPaymentLinkRequest {
    /**
     * id of the plan you want to subscribe to
     * @type string
     * @memberof StripeApidirectToPaymentLink
     */
    planId: string
    /**
     * id of the organization you want to subscribe to the plan
     * @type string
     * @memberof StripeApidirectToPaymentLink
     */
    organizationId: string
}

export interface StripeApiGetAllPlansRequest {
}

export interface StripeApiUpdateSubscriptionPlanRequest {
    /**
     * id of the subscription you want to update
     * @type string
     * @memberof StripeApiupdateSubscriptionPlan
     */
    subscriptionId: string
    /**
     * id of the plan you want to subscribe to
     * @type string
     * @memberof StripeApiupdateSubscriptionPlan
     */
    planId: string
    /**
     * The organization id to use for the request
     * @type string
     * @memberof StripeApiupdateSubscriptionPlan
     */
    tROrganization: string
}

export class ObjectStripeApi {
    private api: ObservableStripeApi

    public constructor(configuration: Configuration, requestFactory?: StripeApiRequestFactory, responseProcessor?: StripeApiResponseProcessor) {
        this.api = new ObservableStripeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public cancelSubscriptionWithHttpInfo(param: StripeApiCancelSubscriptionRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.cancelSubscriptionWithHttpInfo(param.subscriptionId, param.tROrganization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public cancelSubscription(param: StripeApiCancelSubscriptionRequest, options?: Configuration): Promise<void> {
        return this.api.cancelSubscription(param.subscriptionId, param.tROrganization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public directToPaymentLinkWithHttpInfo(param: StripeApiDirectToPaymentLinkRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.directToPaymentLinkWithHttpInfo(param.planId, param.organizationId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public directToPaymentLink(param: StripeApiDirectToPaymentLinkRequest, options?: Configuration): Promise<void> {
        return this.api.directToPaymentLink(param.planId, param.organizationId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAllPlansWithHttpInfo(param: StripeApiGetAllPlansRequest = {}, options?: Configuration): Promise<HttpInfo<Array<StripePlan>>> {
        return this.api.getAllPlansWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAllPlans(param: StripeApiGetAllPlansRequest = {}, options?: Configuration): Promise<Array<StripePlan>> {
        return this.api.getAllPlans( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateSubscriptionPlanWithHttpInfo(param: StripeApiUpdateSubscriptionPlanRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateSubscriptionPlanWithHttpInfo(param.subscriptionId, param.planId, param.tROrganization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateSubscriptionPlan(param: StripeApiUpdateSubscriptionPlanRequest, options?: Configuration): Promise<void> {
        return this.api.updateSubscriptionPlan(param.subscriptionId, param.planId, param.tROrganization,  options).toPromise();
    }

}

import { ObservableTopicApi } from "./ObservableAPI";
import { TopicApiRequestFactory, TopicApiResponseProcessor} from "../apis/TopicApi";

export interface TopicApiCreateTopicRequest {
    /**
     * The dataset id to use for the request
     * @type string
     * @memberof TopicApicreateTopic
     */
    tRDataset: string
    /**
     * JSON request payload to create chat topic
     * @type CreateTopicData
     * @memberof TopicApicreateTopic
     */
    createTopicData: CreateTopicData
}

export interface TopicApiDeleteTopicRequest {
    /**
     * The dataset id to use for the request
     * @type string
     * @memberof TopicApideleteTopic
     */
    tRDataset: string
    /**
     * JSON request payload to delete a chat topic
     * @type DeleteTopicData
     * @memberof TopicApideleteTopic
     */
    deleteTopicData: DeleteTopicData
}

export interface TopicApiGetAllTopicsForUserRequest {
    /**
     * The id of the user to get topics for
     * @type string
     * @memberof TopicApigetAllTopicsForUser
     */
    userId: string
    /**
     * The dataset id to use for the request
     * @type string
     * @memberof TopicApigetAllTopicsForUser
     */
    tRDataset: string
}

export interface TopicApiUpdateTopicRequest {
    /**
     * The dataset id to use for the request
     * @type string
     * @memberof TopicApiupdateTopic
     */
    tRDataset: string
    /**
     * JSON request payload to update a chat topic
     * @type UpdateTopicData
     * @memberof TopicApiupdateTopic
     */
    updateTopicData: UpdateTopicData
}

export class ObjectTopicApi {
    private api: ObservableTopicApi

    public constructor(configuration: Configuration, requestFactory?: TopicApiRequestFactory, responseProcessor?: TopicApiResponseProcessor) {
        this.api = new ObservableTopicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * create_topic  Create a new chat topic. Topics are attached to a user and act as a coordinator for memory of gen-AI chat sessions. We are considering refactoring this resource of the API soon.
     * create_topic
     * @param param the request object
     */
    public createTopicWithHttpInfo(param: TopicApiCreateTopicRequest, options?: Configuration): Promise<HttpInfo<Topic>> {
        return this.api.createTopicWithHttpInfo(param.tRDataset, param.createTopicData,  options).toPromise();
    }

    /**
     * create_topic  Create a new chat topic. Topics are attached to a user and act as a coordinator for memory of gen-AI chat sessions. We are considering refactoring this resource of the API soon.
     * create_topic
     * @param param the request object
     */
    public createTopic(param: TopicApiCreateTopicRequest, options?: Configuration): Promise<Topic> {
        return this.api.createTopic(param.tRDataset, param.createTopicData,  options).toPromise();
    }

    /**
     * delete_topic  Delete an existing chat topic. When a topic is deleted, all associated chat messages are also deleted.
     * delete_topic
     * @param param the request object
     */
    public deleteTopicWithHttpInfo(param: TopicApiDeleteTopicRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteTopicWithHttpInfo(param.tRDataset, param.deleteTopicData,  options).toPromise();
    }

    /**
     * delete_topic  Delete an existing chat topic. When a topic is deleted, all associated chat messages are also deleted.
     * delete_topic
     * @param param the request object
     */
    public deleteTopic(param: TopicApiDeleteTopicRequest, options?: Configuration): Promise<void> {
        return this.api.deleteTopic(param.tRDataset, param.deleteTopicData,  options).toPromise();
    }

    /**
     * get_all_topics_for_user  Get all topics belonging to a the auth\'ed user. Soon, we plan to allow specification of the user for this route and include pagination.
     * get_all_topics_for_user
     * @param param the request object
     */
    public getAllTopicsForUserWithHttpInfo(param: TopicApiGetAllTopicsForUserRequest, options?: Configuration): Promise<HttpInfo<Array<Topic>>> {
        return this.api.getAllTopicsForUserWithHttpInfo(param.userId, param.tRDataset,  options).toPromise();
    }

    /**
     * get_all_topics_for_user  Get all topics belonging to a the auth\'ed user. Soon, we plan to allow specification of the user for this route and include pagination.
     * get_all_topics_for_user
     * @param param the request object
     */
    public getAllTopicsForUser(param: TopicApiGetAllTopicsForUserRequest, options?: Configuration): Promise<Array<Topic>> {
        return this.api.getAllTopicsForUser(param.userId, param.tRDataset,  options).toPromise();
    }

    /**
     * update_topic  Update an existing chat topic. Currently, only the name of the topic can be updated.
     * update_topic
     * @param param the request object
     */
    public updateTopicWithHttpInfo(param: TopicApiUpdateTopicRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateTopicWithHttpInfo(param.tRDataset, param.updateTopicData,  options).toPromise();
    }

    /**
     * update_topic  Update an existing chat topic. Currently, only the name of the topic can be updated.
     * update_topic
     * @param param the request object
     */
    public updateTopic(param: TopicApiUpdateTopicRequest, options?: Configuration): Promise<void> {
        return this.api.updateTopic(param.tRDataset, param.updateTopicData,  options).toPromise();
    }

}

import { ObservableUserApi } from "./ObservableAPI";
import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";

export interface UserApiDeleteUserApiKeyRequest {
    /**
     * JSON request payload to delete a user api key
     * @type DeleteUserApiKeyRequest
     * @memberof UserApideleteUserApiKey
     */
    deleteUserApiKeyRequest: DeleteUserApiKeyRequest
}

export interface UserApiGetUserFilesHandlerRequest {
    /**
     * The id of the user to fetch files for.
     * @type string
     * @memberof UserApigetUserFilesHandler
     */
    userId: string
    /**
     * The dataset id to use for the request
     * @type string
     * @memberof UserApigetUserFilesHandler
     */
    tRDataset: string
}

export interface UserApiSetUserApiKeyRequest {
    /**
     * 
     * @type SetUserApiKeyRequest
     * @memberof UserApisetUserApiKey
     */
    setUserApiKeyRequest: SetUserApiKeyRequest
}

export interface UserApiUpdateUserRequest {
    /**
     * JSON request payload to update user information for the auth\&#39;ed user
     * @type UpdateUserData
     * @memberof UserApiupdateUser
     */
    updateUserData: UpdateUserData
}

export class ObjectUserApi {
    private api: ObservableUserApi

    public constructor(configuration: Configuration, requestFactory?: UserApiRequestFactory, responseProcessor?: UserApiResponseProcessor) {
        this.api = new ObservableUserApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * delete_user_api_key  Delete an api key for the auth\'ed user.
     * delete_user_api_key
     * @param param the request object
     */
    public deleteUserApiKeyWithHttpInfo(param: UserApiDeleteUserApiKeyRequest, options?: Configuration): Promise<HttpInfo<Array<ApiKeyDTO>>> {
        return this.api.deleteUserApiKeyWithHttpInfo(param.deleteUserApiKeyRequest,  options).toPromise();
    }

    /**
     * delete_user_api_key  Delete an api key for the auth\'ed user.
     * delete_user_api_key
     * @param param the request object
     */
    public deleteUserApiKey(param: UserApiDeleteUserApiKeyRequest, options?: Configuration): Promise<Array<ApiKeyDTO>> {
        return this.api.deleteUserApiKey(param.deleteUserApiKeyRequest,  options).toPromise();
    }

    /**
     * get_user_files  Get all files which belong to a given user specified by the user_id parameter.
     * get_user_files
     * @param param the request object
     */
    public getUserFilesHandlerWithHttpInfo(param: UserApiGetUserFilesHandlerRequest, options?: Configuration): Promise<HttpInfo<Array<any>>> {
        return this.api.getUserFilesHandlerWithHttpInfo(param.userId, param.tRDataset,  options).toPromise();
    }

    /**
     * get_user_files  Get all files which belong to a given user specified by the user_id parameter.
     * get_user_files
     * @param param the request object
     */
    public getUserFilesHandler(param: UserApiGetUserFilesHandlerRequest, options?: Configuration): Promise<Array<any>> {
        return this.api.getUserFilesHandler(param.userId, param.tRDataset,  options).toPromise();
    }

    /**
     * set_user_api_key  Create a new api key for the auth\'ed user. Successful response will contain the newly created api key.
     * set_user_api_key
     * @param param the request object
     */
    public setUserApiKeyWithHttpInfo(param: UserApiSetUserApiKeyRequest, options?: Configuration): Promise<HttpInfo<SetUserApiKeyResponse>> {
        return this.api.setUserApiKeyWithHttpInfo(param.setUserApiKeyRequest,  options).toPromise();
    }

    /**
     * set_user_api_key  Create a new api key for the auth\'ed user. Successful response will contain the newly created api key.
     * set_user_api_key
     * @param param the request object
     */
    public setUserApiKey(param: UserApiSetUserApiKeyRequest, options?: Configuration): Promise<SetUserApiKeyResponse> {
        return this.api.setUserApiKey(param.setUserApiKeyRequest,  options).toPromise();
    }

    /**
     * update_user  Update a user\'s information. If the user_id is not provided, the auth\'ed user will be updated. If the user_id is provided, the auth\'ed user must be an admin (1) or owner (2) of the organization.
     * update_user
     * @param param the request object
     */
    public updateUserWithHttpInfo(param: UserApiUpdateUserRequest, options?: Configuration): Promise<HttpInfo<SlimUser>> {
        return this.api.updateUserWithHttpInfo(param.updateUserData,  options).toPromise();
    }

    /**
     * update_user  Update a user\'s information. If the user_id is not provided, the auth\'ed user will be updated. If the user_id is provided, the auth\'ed user must be an admin (1) or owner (2) of the organization.
     * update_user
     * @param param the request object
     */
    public updateUser(param: UserApiUpdateUserRequest, options?: Configuration): Promise<SlimUser> {
        return this.api.updateUser(param.updateUserData,  options).toPromise();
    }

}
