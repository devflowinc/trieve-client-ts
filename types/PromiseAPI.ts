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
import { ObservableAuthApi } from './ObservableAPI';

import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";
export class PromiseAuthApi {
    private api: ObservableAuthApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthApiRequestFactory,
        responseProcessor?: AuthApiResponseProcessor
    ) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * openid_callback  This is the callback route for the OAuth provider, it should not be called directly. Redirects to browser with set-cookie header.
     * openid_callback
     */
    public callbackWithHttpInfo(_options?: Configuration): Promise<HttpInfo<SlimUser>> {
        const result = this.api.callbackWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * openid_callback  This is the callback route for the OAuth provider, it should not be called directly. Redirects to browser with set-cookie header.
     * openid_callback
     */
    public callback(_options?: Configuration): Promise<SlimUser> {
        const result = this.api.callback(_options);
        return result.toPromise();
    }

    /**
     * get_me  Get the user corresponding to your current auth credentials.
     * get_me
     */
    public getMeWithHttpInfo(_options?: Configuration): Promise<HttpInfo<SlimUser>> {
        const result = this.api.getMeWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * get_me  Get the user corresponding to your current auth credentials.
     * get_me
     */
    public getMe(_options?: Configuration): Promise<SlimUser> {
        const result = this.api.getMe(_options);
        return result.toPromise();
    }

    /**
     * login  This will redirect you to the OAuth provider for authentication with email/pass, SSO, Google, Github, etc.
     * login
     * @param invCode Code sent via email as a result of successful call to send_invitation
     * @param organizationId ID of organization to authenticate into
     * @param redirectUri URL to redirect to after successful login
     */
    public loginWithHttpInfo(invCode?: string, organizationId?: string, redirectUri?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.loginWithHttpInfo(invCode, organizationId, redirectUri, _options);
        return result.toPromise();
    }

    /**
     * login  This will redirect you to the OAuth provider for authentication with email/pass, SSO, Google, Github, etc.
     * login
     * @param invCode Code sent via email as a result of successful call to send_invitation
     * @param organizationId ID of organization to authenticate into
     * @param redirectUri URL to redirect to after successful login
     */
    public login(invCode?: string, organizationId?: string, redirectUri?: string, _options?: Configuration): Promise<void> {
        const result = this.api.login(invCode, organizationId, redirectUri, _options);
        return result.toPromise();
    }

    /**
     * logout  Invalidate your current auth credential stored typically stored in a cookie. This does not invalidate your API key.
     * logout
     */
    public logoutWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.logoutWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * logout  Invalidate your current auth credential stored typically stored in a cookie. This does not invalidate your API key.
     * logout
     */
    public logout(_options?: Configuration): Promise<void> {
        const result = this.api.logout(_options);
        return result.toPromise();
    }


}



import { ObservableChunkApi } from './ObservableAPI';

import { ChunkApiRequestFactory, ChunkApiResponseProcessor} from "../apis/ChunkApi";
export class PromiseChunkApi {
    private api: ObservableChunkApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ChunkApiRequestFactory,
        responseProcessor?: ChunkApiResponseProcessor
    ) {
        this.api = new ObservableChunkApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * create_chunk  Create a new chunk. If the chunk has the same tracking_id as an existing chunk, the request will fail. Once a chunk is created, it can be searched for using the search endpoint.
     * create_chunk
     * @param tRDataset The dataset id to use for the request
     * @param createChunkData JSON request payload to create a new chunk (chunk)
     */
    public createChunkWithHttpInfo(tRDataset: string, createChunkData: CreateChunkData, _options?: Configuration): Promise<HttpInfo<ReturnCreatedChunk>> {
        const result = this.api.createChunkWithHttpInfo(tRDataset, createChunkData, _options);
        return result.toPromise();
    }

    /**
     * create_chunk  Create a new chunk. If the chunk has the same tracking_id as an existing chunk, the request will fail. Once a chunk is created, it can be searched for using the search endpoint.
     * create_chunk
     * @param tRDataset The dataset id to use for the request
     * @param createChunkData JSON request payload to create a new chunk (chunk)
     */
    public createChunk(tRDataset: string, createChunkData: CreateChunkData, _options?: Configuration): Promise<ReturnCreatedChunk> {
        const result = this.api.createChunk(tRDataset, createChunkData, _options);
        return result.toPromise();
    }

    /**
     * get_suggested_queries  This endpoint will generate 3 suggested queries based off the query provided in the request body and return them as a JSON object.
     * get_suggested_queries
     * @param tRDataset The dataset id to use for the request
     * @param suggestedQueriesRequest JSON request payload to get alternative suggested queries
     */
    public createSuggestedQueriesHandlerWithHttpInfo(tRDataset: string, suggestedQueriesRequest: SuggestedQueriesRequest, _options?: Configuration): Promise<HttpInfo<SuggestedQueriesResponse>> {
        const result = this.api.createSuggestedQueriesHandlerWithHttpInfo(tRDataset, suggestedQueriesRequest, _options);
        return result.toPromise();
    }

    /**
     * get_suggested_queries  This endpoint will generate 3 suggested queries based off the query provided in the request body and return them as a JSON object.
     * get_suggested_queries
     * @param tRDataset The dataset id to use for the request
     * @param suggestedQueriesRequest JSON request payload to get alternative suggested queries
     */
    public createSuggestedQueriesHandler(tRDataset: string, suggestedQueriesRequest: SuggestedQueriesRequest, _options?: Configuration): Promise<SuggestedQueriesResponse> {
        const result = this.api.createSuggestedQueriesHandler(tRDataset, suggestedQueriesRequest, _options);
        return result.toPromise();
    }

    /**
     * delete_chunk  Delete a chunk by its id. If deleting a root chunk which has a collision, the most recently created collision will become a new root chunk.
     * delete_chunk
     * @param chunkId id of the chunk you want to delete
     * @param tRDataset The dataset id to use for the request
     */
    public deleteChunkWithHttpInfo(chunkId: string, tRDataset: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteChunkWithHttpInfo(chunkId, tRDataset, _options);
        return result.toPromise();
    }

    /**
     * delete_chunk  Delete a chunk by its id. If deleting a root chunk which has a collision, the most recently created collision will become a new root chunk.
     * delete_chunk
     * @param chunkId id of the chunk you want to delete
     * @param tRDataset The dataset id to use for the request
     */
    public deleteChunk(chunkId: string, tRDataset: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteChunk(chunkId, tRDataset, _options);
        return result.toPromise();
    }

    /**
     * delete_chunk_by_tracking_id  Delete a chunk by tracking_id. This is useful for when you are coordinating with an external system and want to use the tracking_id to identify the chunk. If deleting a root chunk which has a collision, the most recently created collision will become a new root chunk.
     * delete_chunk_by_tracking_id
     * @param trackingId tracking_id of the chunk you want to delete
     * @param tRDataset The dataset id to use for the request
     */
    public deleteChunkByTrackingIdWithHttpInfo(trackingId: string, tRDataset: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteChunkByTrackingIdWithHttpInfo(trackingId, tRDataset, _options);
        return result.toPromise();
    }

    /**
     * delete_chunk_by_tracking_id  Delete a chunk by tracking_id. This is useful for when you are coordinating with an external system and want to use the tracking_id to identify the chunk. If deleting a root chunk which has a collision, the most recently created collision will become a new root chunk.
     * delete_chunk_by_tracking_id
     * @param trackingId tracking_id of the chunk you want to delete
     * @param tRDataset The dataset id to use for the request
     */
    public deleteChunkByTrackingId(trackingId: string, tRDataset: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteChunkByTrackingId(trackingId, tRDataset, _options);
        return result.toPromise();
    }

    /**
     * augmented_generation_from_chunks  This endpoint exists as an alternative to the topic+message concept where our API handles chat memory. With this endpoint, the user is responsible for providing the context window and the prompt. See more in the \"search before generate\" page at docs.trieve.ai.
     * augmented_generation_from_chunks
     * @param tRDataset The dataset id to use for the request
     * @param generateChunksRequest JSON request payload to perform RAG on some chunks (chunks)
     */
    public generateOffChunksWithHttpInfo(tRDataset: string, generateChunksRequest: GenerateChunksRequest, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.generateOffChunksWithHttpInfo(tRDataset, generateChunksRequest, _options);
        return result.toPromise();
    }

    /**
     * augmented_generation_from_chunks  This endpoint exists as an alternative to the topic+message concept where our API handles chat memory. With this endpoint, the user is responsible for providing the context window and the prompt. See more in the \"search before generate\" page at docs.trieve.ai.
     * augmented_generation_from_chunks
     * @param tRDataset The dataset id to use for the request
     * @param generateChunksRequest JSON request payload to perform RAG on some chunks (chunks)
     */
    public generateOffChunks(tRDataset: string, generateChunksRequest: GenerateChunksRequest, _options?: Configuration): Promise<string> {
        const result = this.api.generateOffChunks(tRDataset, generateChunksRequest, _options);
        return result.toPromise();
    }

    /**
     * get_chunk  Get a singular chunk by id.
     * get_chunk
     * @param chunkId Id of the chunk you want to fetch.
     * @param tRDataset The dataset id to use for the request
     */
    public getChunkByIdWithHttpInfo(chunkId: string, tRDataset: string, _options?: Configuration): Promise<HttpInfo<ChunkMetadata>> {
        const result = this.api.getChunkByIdWithHttpInfo(chunkId, tRDataset, _options);
        return result.toPromise();
    }

    /**
     * get_chunk  Get a singular chunk by id.
     * get_chunk
     * @param chunkId Id of the chunk you want to fetch.
     * @param tRDataset The dataset id to use for the request
     */
    public getChunkById(chunkId: string, tRDataset: string, _options?: Configuration): Promise<ChunkMetadata> {
        const result = this.api.getChunkById(chunkId, tRDataset, _options);
        return result.toPromise();
    }

    /**
     * get_chunk_by_tracking_id  Get a singular chunk by tracking_id. This is useful for when you are coordinating with an external system and want to use your own id as the primary reference for a chunk.
     * get_chunk_by_tracking_id
     * @param trackingId tracking_id of the chunk you want to fetch
     * @param tRDataset The dataset id to use for the request
     */
    public getChunkByTrackingIdWithHttpInfo(trackingId: string, tRDataset: string, _options?: Configuration): Promise<HttpInfo<ChunkMetadata>> {
        const result = this.api.getChunkByTrackingIdWithHttpInfo(trackingId, tRDataset, _options);
        return result.toPromise();
    }

    /**
     * get_chunk_by_tracking_id  Get a singular chunk by tracking_id. This is useful for when you are coordinating with an external system and want to use your own id as the primary reference for a chunk.
     * get_chunk_by_tracking_id
     * @param trackingId tracking_id of the chunk you want to fetch
     * @param tRDataset The dataset id to use for the request
     */
    public getChunkByTrackingId(trackingId: string, tRDataset: string, _options?: Configuration): Promise<ChunkMetadata> {
        const result = this.api.getChunkByTrackingId(trackingId, tRDataset, _options);
        return result.toPromise();
    }

    /**
     * get_recommended_chunks  Get recommendations of chunks similar to the chunks in the request. Think about this as a feature similar to the \"add to playlist\" recommendation feature on Spotify. This request pairs especially well with our groups endpoint.
     * get_recommended_chunks
     * @param tRDataset The dataset id to use for the request
     * @param recommendChunksRequest JSON request payload to get recommendations of chunks similar to the chunks in the request
     */
    public getRecommendedChunksWithHttpInfo(tRDataset: string, recommendChunksRequest: RecommendChunksRequest, _options?: Configuration): Promise<HttpInfo<Array<ChunkMetadataWithFileData>>> {
        const result = this.api.getRecommendedChunksWithHttpInfo(tRDataset, recommendChunksRequest, _options);
        return result.toPromise();
    }

    /**
     * get_recommended_chunks  Get recommendations of chunks similar to the chunks in the request. Think about this as a feature similar to the \"add to playlist\" recommendation feature on Spotify. This request pairs especially well with our groups endpoint.
     * get_recommended_chunks
     * @param tRDataset The dataset id to use for the request
     * @param recommendChunksRequest JSON request payload to get recommendations of chunks similar to the chunks in the request
     */
    public getRecommendedChunks(tRDataset: string, recommendChunksRequest: RecommendChunksRequest, _options?: Configuration): Promise<Array<ChunkMetadataWithFileData>> {
        const result = this.api.getRecommendedChunks(tRDataset, recommendChunksRequest, _options);
        return result.toPromise();
    }

    /**
     * search  This route provides the primary search functionality for the API. It can be used to search for chunks by semantic similarity, full-text similarity, or a combination of both. Results\' `chunk_html` values will be modified with `<b>` tags for sub-sentence highlighting.
     * search
     * @param tRDataset The dataset id to use for the request
     * @param searchChunkData JSON request payload to semantically search for chunks (chunks)
     */
    public searchChunkWithHttpInfo(tRDataset: string, searchChunkData: SearchChunkData, _options?: Configuration): Promise<HttpInfo<SearchChunkQueryResponseBody>> {
        const result = this.api.searchChunkWithHttpInfo(tRDataset, searchChunkData, _options);
        return result.toPromise();
    }

    /**
     * search  This route provides the primary search functionality for the API. It can be used to search for chunks by semantic similarity, full-text similarity, or a combination of both. Results\' `chunk_html` values will be modified with `<b>` tags for sub-sentence highlighting.
     * search
     * @param tRDataset The dataset id to use for the request
     * @param searchChunkData JSON request payload to semantically search for chunks (chunks)
     */
    public searchChunk(tRDataset: string, searchChunkData: SearchChunkData, _options?: Configuration): Promise<SearchChunkQueryResponseBody> {
        const result = this.api.searchChunk(tRDataset, searchChunkData, _options);
        return result.toPromise();
    }

    /**
     * update_chunk  Update a chunk. If you try to change the tracking_id of the chunk to have the same tracking_id as an existing chunk, the request will fail.
     * update_chunk
     * @param tRDataset The dataset id to use for the request
     * @param updateChunkData JSON request payload to update a chunk (chunk)
     */
    public updateChunkWithHttpInfo(tRDataset: string, updateChunkData: UpdateChunkData, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.updateChunkWithHttpInfo(tRDataset, updateChunkData, _options);
        return result.toPromise();
    }

    /**
     * update_chunk  Update a chunk. If you try to change the tracking_id of the chunk to have the same tracking_id as an existing chunk, the request will fail.
     * update_chunk
     * @param tRDataset The dataset id to use for the request
     * @param updateChunkData JSON request payload to update a chunk (chunk)
     */
    public updateChunk(tRDataset: string, updateChunkData: UpdateChunkData, _options?: Configuration): Promise<void> {
        const result = this.api.updateChunk(tRDataset, updateChunkData, _options);
        return result.toPromise();
    }

    /**
     * update_chunk_by_tracking_id  Update a chunk by tracking_id. This is useful for when you are coordinating with an external system and want to use the tracking_id to identify the chunk.
     * update_chunk_by_tracking_id
     * @param tRDataset The dataset id to use for the request
     * @param updateChunkByTrackingIdData JSON request payload to update a chunk by tracking_id (chunks)
     */
    public updateChunkByTrackingIdWithHttpInfo(tRDataset: string, updateChunkByTrackingIdData: UpdateChunkByTrackingIdData, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.updateChunkByTrackingIdWithHttpInfo(tRDataset, updateChunkByTrackingIdData, _options);
        return result.toPromise();
    }

    /**
     * update_chunk_by_tracking_id  Update a chunk by tracking_id. This is useful for when you are coordinating with an external system and want to use the tracking_id to identify the chunk.
     * update_chunk_by_tracking_id
     * @param tRDataset The dataset id to use for the request
     * @param updateChunkByTrackingIdData JSON request payload to update a chunk by tracking_id (chunks)
     */
    public updateChunkByTrackingId(tRDataset: string, updateChunkByTrackingIdData: UpdateChunkByTrackingIdData, _options?: Configuration): Promise<void> {
        const result = this.api.updateChunkByTrackingId(tRDataset, updateChunkByTrackingIdData, _options);
        return result.toPromise();
    }


}



import { ObservableChunkGroupApi } from './ObservableAPI';

import { ChunkGroupApiRequestFactory, ChunkGroupApiResponseProcessor} from "../apis/ChunkGroupApi";
export class PromiseChunkGroupApi {
    private api: ObservableChunkGroupApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ChunkGroupApiRequestFactory,
        responseProcessor?: ChunkGroupApiResponseProcessor
    ) {
        this.api = new ObservableChunkGroupApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * add_bookmark  Route to add a bookmark. Think of a bookmark as a chunk which is a member of a group.
     * add_bookmark
     * @param groupId Id of the group to add the chunk to as a bookmark
     * @param tRDataset The dataset id to use for the request
     * @param addChunkToGroupData JSON request payload to add a chunk to a group (bookmark it)
     */
    public addBookmarkWithHttpInfo(groupId: string, tRDataset: string, addChunkToGroupData: AddChunkToGroupData, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.addBookmarkWithHttpInfo(groupId, tRDataset, addChunkToGroupData, _options);
        return result.toPromise();
    }

    /**
     * add_bookmark  Route to add a bookmark. Think of a bookmark as a chunk which is a member of a group.
     * add_bookmark
     * @param groupId Id of the group to add the chunk to as a bookmark
     * @param tRDataset The dataset id to use for the request
     * @param addChunkToGroupData JSON request payload to add a chunk to a group (bookmark it)
     */
    public addBookmark(groupId: string, tRDataset: string, addChunkToGroupData: AddChunkToGroupData, _options?: Configuration): Promise<void> {
        const result = this.api.addBookmark(groupId, tRDataset, addChunkToGroupData, _options);
        return result.toPromise();
    }

    /**
     * create_chunk_group  Create a new chunk_group. Think of this as analogous to a bookmark folder.
     * create_chunk_group
     * @param tRDataset The dataset id to use for the request
     * @param createChunkGroupData JSON request payload to cretea a chunkGroup
     */
    public createChunkGroupWithHttpInfo(tRDataset: string, createChunkGroupData: CreateChunkGroupData, _options?: Configuration): Promise<HttpInfo<ChunkGroup>> {
        const result = this.api.createChunkGroupWithHttpInfo(tRDataset, createChunkGroupData, _options);
        return result.toPromise();
    }

    /**
     * create_chunk_group  Create a new chunk_group. Think of this as analogous to a bookmark folder.
     * create_chunk_group
     * @param tRDataset The dataset id to use for the request
     * @param createChunkGroupData JSON request payload to cretea a chunkGroup
     */
    public createChunkGroup(tRDataset: string, createChunkGroupData: CreateChunkGroupData, _options?: Configuration): Promise<ChunkGroup> {
        const result = this.api.createChunkGroup(tRDataset, createChunkGroupData, _options);
        return result.toPromise();
    }

    /**
     * delete_bookmark  Route to delete a bookmark. Think of a bookmark as a chunk which is a member of a group.
     * delete_bookmark
     * @param groupId Id of the group to remove the bookmark\&#39;ed chunk from
     * @param bookmarkId Id of the bookmark to remove
     * @param tRDataset The dataset id to use for the request
     */
    public deleteBookmarkWithHttpInfo(groupId: string, bookmarkId: string, tRDataset: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteBookmarkWithHttpInfo(groupId, bookmarkId, tRDataset, _options);
        return result.toPromise();
    }

    /**
     * delete_bookmark  Route to delete a bookmark. Think of a bookmark as a chunk which is a member of a group.
     * delete_bookmark
     * @param groupId Id of the group to remove the bookmark\&#39;ed chunk from
     * @param bookmarkId Id of the bookmark to remove
     * @param tRDataset The dataset id to use for the request
     */
    public deleteBookmark(groupId: string, bookmarkId: string, tRDataset: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteBookmark(groupId, bookmarkId, tRDataset, _options);
        return result.toPromise();
    }

    /**
     * delete_chunk_group  This will delete a chunk_group. This will not delete the chunks that are in the group. We will soon support deleting a chunk_group along with its member chunks.
     * delete_chunk_group
     * @param groupId Id of the chunk_group to delete
     * @param tRDataset The dataset id to use for the request
     */
    public deleteChunkGroupWithHttpInfo(groupId: string, tRDataset: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteChunkGroupWithHttpInfo(groupId, tRDataset, _options);
        return result.toPromise();
    }

    /**
     * delete_chunk_group  This will delete a chunk_group. This will not delete the chunks that are in the group. We will soon support deleting a chunk_group along with its member chunks.
     * delete_chunk_group
     * @param groupId Id of the chunk_group to delete
     * @param tRDataset The dataset id to use for the request
     */
    public deleteChunkGroup(groupId: string, tRDataset: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteChunkGroup(groupId, tRDataset, _options);
        return result.toPromise();
    }

    /**
     * get_all_bookmarks  Route to get all bookmarks for a group. Think of a bookmark as a chunk which is a member of a group. The response is paginated, with each page containing 10 chunks (bookmarks). Support for custom page size is coming soon.
     * get_all_bookmarks
     * @param groupId The id of the group to get the chunks from
     * @param page The page of chunks to get from the group
     * @param tRDataset The dataset id to use for the request
     */
    public getAllBookmarksWithHttpInfo(groupId: string, page: number, tRDataset: string, _options?: Configuration): Promise<HttpInfo<BookmarkData>> {
        const result = this.api.getAllBookmarksWithHttpInfo(groupId, page, tRDataset, _options);
        return result.toPromise();
    }

    /**
     * get_all_bookmarks  Route to get all bookmarks for a group. Think of a bookmark as a chunk which is a member of a group. The response is paginated, with each page containing 10 chunks (bookmarks). Support for custom page size is coming soon.
     * get_all_bookmarks
     * @param groupId The id of the group to get the chunks from
     * @param page The page of chunks to get from the group
     * @param tRDataset The dataset id to use for the request
     */
    public getAllBookmarks(groupId: string, page: number, tRDataset: string, _options?: Configuration): Promise<BookmarkData> {
        const result = this.api.getAllBookmarks(groupId, page, tRDataset, _options);
        return result.toPromise();
    }

    /**
     * @param tRDataset The dataset id to use for the request
     * @param getGroupsForChunksData JSON request payload to get the groups that a chunk is in
     */
    public getGroupsChunkIsInWithHttpInfo(tRDataset: string, getGroupsForChunksData: GetGroupsForChunksData, _options?: Configuration): Promise<HttpInfo<Array<BookmarkGroupResult>>> {
        const result = this.api.getGroupsChunkIsInWithHttpInfo(tRDataset, getGroupsForChunksData, _options);
        return result.toPromise();
    }

    /**
     * @param tRDataset The dataset id to use for the request
     * @param getGroupsForChunksData JSON request payload to get the groups that a chunk is in
     */
    public getGroupsChunkIsIn(tRDataset: string, getGroupsForChunksData: GetGroupsForChunksData, _options?: Configuration): Promise<Array<BookmarkGroupResult>> {
        const result = this.api.getGroupsChunkIsIn(tRDataset, getGroupsForChunksData, _options);
        return result.toPromise();
    }

    /**
     * get_dataset_groups  Fetch the groups which belong to a dataset specified by its id.
     * get_dataset_groups
     * @param datasetId The id of the dataset to fetch groups for.
     * @param page The page of groups to fetch. Each page contains 10 groups. Support for custom page size is coming soon.
     * @param tRDataset The dataset id to use for the request
     */
    public getSpecificDatasetChunkGroupsWithHttpInfo(datasetId: string, page: number, tRDataset: string, _options?: Configuration): Promise<HttpInfo<GroupData>> {
        const result = this.api.getSpecificDatasetChunkGroupsWithHttpInfo(datasetId, page, tRDataset, _options);
        return result.toPromise();
    }

    /**
     * get_dataset_groups  Fetch the groups which belong to a dataset specified by its id.
     * get_dataset_groups
     * @param datasetId The id of the dataset to fetch groups for.
     * @param page The page of groups to fetch. Each page contains 10 groups. Support for custom page size is coming soon.
     * @param tRDataset The dataset id to use for the request
     */
    public getSpecificDatasetChunkGroups(datasetId: string, page: number, tRDataset: string, _options?: Configuration): Promise<GroupData> {
        const result = this.api.getSpecificDatasetChunkGroups(datasetId, page, tRDataset, _options);
        return result.toPromise();
    }

    /**
     * group_search  This route allows you to search only within a group. This is useful for when you only want search results to contain chunks which are members of a specific group. Think about this like searching within a playlist or bookmark folder.
     * group_search
     * @param tRDataset The dataset id to use for the request
     * @param searchGroupsData JSON request payload to semantically search a group
     */
    public searchGroupsWithHttpInfo(tRDataset: string, searchGroupsData: SearchGroupsData, _options?: Configuration): Promise<HttpInfo<SearchGroupsResult>> {
        const result = this.api.searchGroupsWithHttpInfo(tRDataset, searchGroupsData, _options);
        return result.toPromise();
    }

    /**
     * group_search  This route allows you to search only within a group. This is useful for when you only want search results to contain chunks which are members of a specific group. Think about this like searching within a playlist or bookmark folder.
     * group_search
     * @param tRDataset The dataset id to use for the request
     * @param searchGroupsData JSON request payload to semantically search a group
     */
    public searchGroups(tRDataset: string, searchGroupsData: SearchGroupsData, _options?: Configuration): Promise<SearchGroupsResult> {
        const result = this.api.searchGroups(tRDataset, searchGroupsData, _options);
        return result.toPromise();
    }

    /**
     * update_chunk_group  Update a chunk_group. Think of this as analogous to a bookmark folder.
     * update_chunk_group
     * @param tRDataset The dataset id to use for the request
     * @param updateChunkGroupData JSON request payload to update a chunkGroup
     */
    public updateChunkGroupWithHttpInfo(tRDataset: string, updateChunkGroupData: UpdateChunkGroupData, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.updateChunkGroupWithHttpInfo(tRDataset, updateChunkGroupData, _options);
        return result.toPromise();
    }

    /**
     * update_chunk_group  Update a chunk_group. Think of this as analogous to a bookmark folder.
     * update_chunk_group
     * @param tRDataset The dataset id to use for the request
     * @param updateChunkGroupData JSON request payload to update a chunkGroup
     */
    public updateChunkGroup(tRDataset: string, updateChunkGroupData: UpdateChunkGroupData, _options?: Configuration): Promise<void> {
        const result = this.api.updateChunkGroup(tRDataset, updateChunkGroupData, _options);
        return result.toPromise();
    }


}



import { ObservableDatasetApi } from './ObservableAPI';

import { DatasetApiRequestFactory, DatasetApiResponseProcessor} from "../apis/DatasetApi";
export class PromiseDatasetApi {
    private api: ObservableDatasetApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DatasetApiRequestFactory,
        responseProcessor?: DatasetApiResponseProcessor
    ) {
        this.api = new ObservableDatasetApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * create_dataset  Create a new dataset. The auth\'ed user must be an owner of the organization to create a dataset.
     * create_dataset
     * @param tROrganization The organization id to use for the request
     * @param createDatasetRequest JSON request payload to create a new dataset
     */
    public createDatasetWithHttpInfo(tROrganization: string, createDatasetRequest: CreateDatasetRequest, _options?: Configuration): Promise<HttpInfo<Dataset>> {
        const result = this.api.createDatasetWithHttpInfo(tROrganization, createDatasetRequest, _options);
        return result.toPromise();
    }

    /**
     * create_dataset  Create a new dataset. The auth\'ed user must be an owner of the organization to create a dataset.
     * create_dataset
     * @param tROrganization The organization id to use for the request
     * @param createDatasetRequest JSON request payload to create a new dataset
     */
    public createDataset(tROrganization: string, createDatasetRequest: CreateDatasetRequest, _options?: Configuration): Promise<Dataset> {
        const result = this.api.createDataset(tROrganization, createDatasetRequest, _options);
        return result.toPromise();
    }

    /**
     * delete_dataset  Delete a dataset. The auth\'ed user must be an owner of the organization to delete a dataset.
     * delete_dataset
     * @param tROrganization The organization id to use for the request
     * @param deleteDatasetRequest JSON request payload to delete a dataset
     */
    public deleteDatasetWithHttpInfo(tROrganization: string, deleteDatasetRequest: DeleteDatasetRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteDatasetWithHttpInfo(tROrganization, deleteDatasetRequest, _options);
        return result.toPromise();
    }

    /**
     * delete_dataset  Delete a dataset. The auth\'ed user must be an owner of the organization to delete a dataset.
     * delete_dataset
     * @param tROrganization The organization id to use for the request
     * @param deleteDatasetRequest JSON request payload to delete a dataset
     */
    public deleteDataset(tROrganization: string, deleteDatasetRequest: DeleteDatasetRequest, _options?: Configuration): Promise<void> {
        const result = this.api.deleteDataset(tROrganization, deleteDatasetRequest, _options);
        return result.toPromise();
    }

    /**
     * get_client_dataset_config  Get the client configuration for a dataset. Will use the TR-D
     * get_client_dataset_config
     * @param tRDataset The dataset id to use for the request
     */
    public getClientDatasetConfigWithHttpInfo(tRDataset: string, _options?: Configuration): Promise<HttpInfo<ClientDatasetConfiguration>> {
        const result = this.api.getClientDatasetConfigWithHttpInfo(tRDataset, _options);
        return result.toPromise();
    }

    /**
     * get_client_dataset_config  Get the client configuration for a dataset. Will use the TR-D
     * get_client_dataset_config
     * @param tRDataset The dataset id to use for the request
     */
    public getClientDatasetConfig(tRDataset: string, _options?: Configuration): Promise<ClientDatasetConfiguration> {
        const result = this.api.getClientDatasetConfig(tRDataset, _options);
        return result.toPromise();
    }

    /**
     * get_dataset  Get a dataset by id. The auth\'ed user must be an admin or owner of the organization to get a dataset.
     * get_dataset
     * @param datasetId The id of the dataset you want to retrieve.
     * @param tROrganization The organization id to use for the request
     * @param tRDataset The dataset id to use for the request
     */
    public getDatasetWithHttpInfo(datasetId: string, tROrganization: string, tRDataset: string, _options?: Configuration): Promise<HttpInfo<Dataset>> {
        const result = this.api.getDatasetWithHttpInfo(datasetId, tROrganization, tRDataset, _options);
        return result.toPromise();
    }

    /**
     * get_dataset  Get a dataset by id. The auth\'ed user must be an admin or owner of the organization to get a dataset.
     * get_dataset
     * @param datasetId The id of the dataset you want to retrieve.
     * @param tROrganization The organization id to use for the request
     * @param tRDataset The dataset id to use for the request
     */
    public getDataset(datasetId: string, tROrganization: string, tRDataset: string, _options?: Configuration): Promise<Dataset> {
        const result = this.api.getDataset(datasetId, tROrganization, tRDataset, _options);
        return result.toPromise();
    }

    /**
     * get_organization_datasets  Get all datasets for an organization. The auth\'ed user must be an admin or owner of the organization to get its datasets.
     * get_organization_datasets
     * @param organizationId id of the organization you want to retrieve datasets for
     * @param tROrganization The organization id to use for the request
     */
    public getDatasetsFromOrganizationWithHttpInfo(organizationId: string, tROrganization: string, _options?: Configuration): Promise<HttpInfo<Array<DatasetAndUsage>>> {
        const result = this.api.getDatasetsFromOrganizationWithHttpInfo(organizationId, tROrganization, _options);
        return result.toPromise();
    }

    /**
     * get_organization_datasets  Get all datasets for an organization. The auth\'ed user must be an admin or owner of the organization to get its datasets.
     * get_organization_datasets
     * @param organizationId id of the organization you want to retrieve datasets for
     * @param tROrganization The organization id to use for the request
     */
    public getDatasetsFromOrganization(organizationId: string, tROrganization: string, _options?: Configuration): Promise<Array<DatasetAndUsage>> {
        const result = this.api.getDatasetsFromOrganization(organizationId, tROrganization, _options);
        return result.toPromise();
    }

    /**
     * update_dataset  Update a dataset. The auth\'ed user must be an owner of the organization to update a dataset.
     * update_dataset
     * @param tROrganization The organization id to use for the request
     * @param updateDatasetRequest JSON request payload to update a dataset
     */
    public updateDatasetWithHttpInfo(tROrganization: string, updateDatasetRequest: UpdateDatasetRequest, _options?: Configuration): Promise<HttpInfo<Dataset>> {
        const result = this.api.updateDatasetWithHttpInfo(tROrganization, updateDatasetRequest, _options);
        return result.toPromise();
    }

    /**
     * update_dataset  Update a dataset. The auth\'ed user must be an owner of the organization to update a dataset.
     * update_dataset
     * @param tROrganization The organization id to use for the request
     * @param updateDatasetRequest JSON request payload to update a dataset
     */
    public updateDataset(tROrganization: string, updateDatasetRequest: UpdateDatasetRequest, _options?: Configuration): Promise<Dataset> {
        const result = this.api.updateDataset(tROrganization, updateDatasetRequest, _options);
        return result.toPromise();
    }


}



import { ObservableEventsApi } from './ObservableAPI';

import { EventsApiRequestFactory, EventsApiResponseProcessor} from "../apis/EventsApi";
export class PromiseEventsApi {
    private api: ObservableEventsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EventsApiRequestFactory,
        responseProcessor?: EventsApiResponseProcessor
    ) {
        this.api = new ObservableEventsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * get_events  Get events for the auth\'ed user. Currently, this is only for events belonging to the auth\'ed user. Soon, we plan to associate events to datasets instead of users. Each page contains 10 events.
     * get_events
     * @param page Page number of events to get
     * @param tRDataset The dataset id to use for the request
     */
    public getEventsWithHttpInfo(page: number, tRDataset: string, _options?: Configuration): Promise<HttpInfo<EventReturn>> {
        const result = this.api.getEventsWithHttpInfo(page, tRDataset, _options);
        return result.toPromise();
    }

    /**
     * get_events  Get events for the auth\'ed user. Currently, this is only for events belonging to the auth\'ed user. Soon, we plan to associate events to datasets instead of users. Each page contains 10 events.
     * get_events
     * @param page Page number of events to get
     * @param tRDataset The dataset id to use for the request
     */
    public getEvents(page: number, tRDataset: string, _options?: Configuration): Promise<EventReturn> {
        const result = this.api.getEvents(page, tRDataset, _options);
        return result.toPromise();
    }


}



import { ObservableFileApi } from './ObservableAPI';

import { FileApiRequestFactory, FileApiResponseProcessor} from "../apis/FileApi";
export class PromiseFileApi {
    private api: ObservableFileApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FileApiRequestFactory,
        responseProcessor?: FileApiResponseProcessor
    ) {
        this.api = new ObservableFileApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * delete_file  Delete a file from S3 attached to the server based on its id. This will disassociate chunks from the file, but will not delete the chunks. We plan to add support for deleting chunks in a release soon. Auth\'ed user must be an admin or owner of the dataset\'s organization to upload a file.
     * delete_file
     * @param fileId The id of the file to delete
     * @param tRDataset The dataset id to use for the request
     */
    public deleteFileHandlerWithHttpInfo(fileId: string, tRDataset: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteFileHandlerWithHttpInfo(fileId, tRDataset, _options);
        return result.toPromise();
    }

    /**
     * delete_file  Delete a file from S3 attached to the server based on its id. This will disassociate chunks from the file, but will not delete the chunks. We plan to add support for deleting chunks in a release soon. Auth\'ed user must be an admin or owner of the dataset\'s organization to upload a file.
     * delete_file
     * @param fileId The id of the file to delete
     * @param tRDataset The dataset id to use for the request
     */
    public deleteFileHandler(fileId: string, tRDataset: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteFileHandler(fileId, tRDataset, _options);
        return result.toPromise();
    }

    /**
     * get_file  Download a file from S3 attached to the server based on its id. We plan to add support for getting signed S3 URLs to download from S3 directly in a release soon.
     * get_file
     * @param fileId The id of the file to fetch
     * @param tRDataset The dataset id to use for the request
     */
    public getFileHandlerWithHttpInfo(fileId: string, tRDataset: string, _options?: Configuration): Promise<HttpInfo<FileDTO>> {
        const result = this.api.getFileHandlerWithHttpInfo(fileId, tRDataset, _options);
        return result.toPromise();
    }

    /**
     * get_file  Download a file from S3 attached to the server based on its id. We plan to add support for getting signed S3 URLs to download from S3 directly in a release soon.
     * get_file
     * @param fileId The id of the file to fetch
     * @param tRDataset The dataset id to use for the request
     */
    public getFileHandler(fileId: string, tRDataset: string, _options?: Configuration): Promise<FileDTO> {
        const result = this.api.getFileHandler(fileId, tRDataset, _options);
        return result.toPromise();
    }

    /**
     * get_image_file  We strongly recommend not using this endpoint. It is disabled on the managed version and only meant for niche on-prem use cases where an image directory is mounted. Get in touch with us thru information on docs.trieve.ai for more information.
     * get_image_file
     * @param fileName The name of the image file to return
     * @param tRDataset The dataset id to use for the request
     */
    public getImageFileWithHttpInfo(fileName: string, tRDataset: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.getImageFileWithHttpInfo(fileName, tRDataset, _options);
        return result.toPromise();
    }

    /**
     * get_image_file  We strongly recommend not using this endpoint. It is disabled on the managed version and only meant for niche on-prem use cases where an image directory is mounted. Get in touch with us thru information on docs.trieve.ai for more information.
     * get_image_file
     * @param fileName The name of the image file to return
     * @param tRDataset The dataset id to use for the request
     */
    public getImageFile(fileName: string, tRDataset: string, _options?: Configuration): Promise<void> {
        const result = this.api.getImageFile(fileName, tRDataset, _options);
        return result.toPromise();
    }

    /**
     * upload_file  Upload a file to S3 attached to the server. The file will be converted to HTML with tika and chunked algorithmically, images will be OCR\'ed with tesseract. The resulting chunks will be indexed and searchable. Optionally, you can only upload the file and manually create chunks associated to the file after. See docs.trieve.ai and/or contact us for more details and tips. Auth\'ed user must be an admin or owner of the dataset\'s organization to upload a file.
     * upload_file
     * @param tRDataset The dataset id to use for the request
     * @param uploadFileData JSON request payload to upload a file
     */
    public uploadFileHandlerWithHttpInfo(tRDataset: string, uploadFileData: UploadFileData, _options?: Configuration): Promise<HttpInfo<UploadFileResult>> {
        const result = this.api.uploadFileHandlerWithHttpInfo(tRDataset, uploadFileData, _options);
        return result.toPromise();
    }

    /**
     * upload_file  Upload a file to S3 attached to the server. The file will be converted to HTML with tika and chunked algorithmically, images will be OCR\'ed with tesseract. The resulting chunks will be indexed and searchable. Optionally, you can only upload the file and manually create chunks associated to the file after. See docs.trieve.ai and/or contact us for more details and tips. Auth\'ed user must be an admin or owner of the dataset\'s organization to upload a file.
     * upload_file
     * @param tRDataset The dataset id to use for the request
     * @param uploadFileData JSON request payload to upload a file
     */
    public uploadFileHandler(tRDataset: string, uploadFileData: UploadFileData, _options?: Configuration): Promise<UploadFileResult> {
        const result = this.api.uploadFileHandler(tRDataset, uploadFileData, _options);
        return result.toPromise();
    }


}



import { ObservableHealthApi } from './ObservableAPI';

import { HealthApiRequestFactory, HealthApiResponseProcessor} from "../apis/HealthApi";
export class PromiseHealthApi {
    private api: ObservableHealthApi

    public constructor(
        configuration: Configuration,
        requestFactory?: HealthApiRequestFactory,
        responseProcessor?: HealthApiResponseProcessor
    ) {
        this.api = new ObservableHealthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public healthCheckWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.healthCheckWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public healthCheck(_options?: Configuration): Promise<void> {
        const result = this.api.healthCheck(_options);
        return result.toPromise();
    }


}



import { ObservableInvitationApi } from './ObservableAPI';

import { InvitationApiRequestFactory, InvitationApiResponseProcessor} from "../apis/InvitationApi";
export class PromiseInvitationApi {
    private api: ObservableInvitationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: InvitationApiRequestFactory,
        responseProcessor?: InvitationApiResponseProcessor
    ) {
        this.api = new ObservableInvitationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * send_invitation  Invitations act as a way to invite users to join an organization. After a user is invited, they will automatically be added to the organization with the role specified in the invitation once they set their.
     * send_invitation
     * @param tROrganization The organization id to use for the request
     * @param invitationData JSON request payload to send an invitation
     */
    public postInvitationWithHttpInfo(tROrganization: string, invitationData: InvitationData, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.postInvitationWithHttpInfo(tROrganization, invitationData, _options);
        return result.toPromise();
    }

    /**
     * send_invitation  Invitations act as a way to invite users to join an organization. After a user is invited, they will automatically be added to the organization with the role specified in the invitation once they set their.
     * send_invitation
     * @param tROrganization The organization id to use for the request
     * @param invitationData JSON request payload to send an invitation
     */
    public postInvitation(tROrganization: string, invitationData: InvitationData, _options?: Configuration): Promise<void> {
        const result = this.api.postInvitation(tROrganization, invitationData, _options);
        return result.toPromise();
    }


}



import { ObservableMessageApi } from './ObservableAPI';

import { MessageApiRequestFactory, MessageApiResponseProcessor} from "../apis/MessageApi";
export class PromiseMessageApi {
    private api: ObservableMessageApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MessageApiRequestFactory,
        responseProcessor?: MessageApiResponseProcessor
    ) {
        this.api = new ObservableMessageApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * create_message  Create a message. Messages are attached to topics in order to coordinate memory of gen-AI chat sessions. We are considering refactoring this resource of the API soon. Currently, you can only send user messages. If the topic is a RAG topic then the response will include Chunks first on the stream. The structure will look like `[chunks]||mesage`. See docs.trieve.ai for more information.
     * create_message
     * @param tRDataset The dataset id to use for the request
     * @param createMessageData JSON request payload to create a message completion
     */
    public createMessageCompletionHandlerWithHttpInfo(tRDataset: string, createMessageData: CreateMessageData, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.createMessageCompletionHandlerWithHttpInfo(tRDataset, createMessageData, _options);
        return result.toPromise();
    }

    /**
     * create_message  Create a message. Messages are attached to topics in order to coordinate memory of gen-AI chat sessions. We are considering refactoring this resource of the API soon. Currently, you can only send user messages. If the topic is a RAG topic then the response will include Chunks first on the stream. The structure will look like `[chunks]||mesage`. See docs.trieve.ai for more information.
     * create_message
     * @param tRDataset The dataset id to use for the request
     * @param createMessageData JSON request payload to create a message completion
     */
    public createMessageCompletionHandler(tRDataset: string, createMessageData: CreateMessageData, _options?: Configuration): Promise<string> {
        const result = this.api.createMessageCompletionHandler(tRDataset, createMessageData, _options);
        return result.toPromise();
    }

    /**
     * edit_message  Edit a message which exists within the topic\'s chat history. This will delete the message and replace it with a new message. The new message will be generated by the AI based on the new content provided in the request body. The response will include Chunks first on the stream if the topic is using RAG. The structure will look like `[chunks]||mesage`. See docs.trieve.ai for more information.
     * edit_message
     * @param tRDataset The dataset id to use for the request
     * @param editMessageData JSON request payload to edit a message and get a new stream
     */
    public editMessageHandlerWithHttpInfo(tRDataset: string, editMessageData: EditMessageData, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.editMessageHandlerWithHttpInfo(tRDataset, editMessageData, _options);
        return result.toPromise();
    }

    /**
     * edit_message  Edit a message which exists within the topic\'s chat history. This will delete the message and replace it with a new message. The new message will be generated by the AI based on the new content provided in the request body. The response will include Chunks first on the stream if the topic is using RAG. The structure will look like `[chunks]||mesage`. See docs.trieve.ai for more information.
     * edit_message
     * @param tRDataset The dataset id to use for the request
     * @param editMessageData JSON request payload to edit a message and get a new stream
     */
    public editMessageHandler(tRDataset: string, editMessageData: EditMessageData, _options?: Configuration): Promise<void> {
        const result = this.api.editMessageHandler(tRDataset, editMessageData, _options);
        return result.toPromise();
    }

    /**
     * get_all_messages  Get all messages for a given topic. If the topic is a RAG topic then the response will include Chunks first on each message. The structure will look like `[chunks]||mesage`. See docs.trieve.ai for more information.
     * get_all_messages
     * @param messagesTopicId The ID of the topic to get messages for.
     * @param tRDataset The dataset id to use for the request
     */
    public getAllTopicMessagesWithHttpInfo(messagesTopicId: string, tRDataset: string, _options?: Configuration): Promise<HttpInfo<Array<Message>>> {
        const result = this.api.getAllTopicMessagesWithHttpInfo(messagesTopicId, tRDataset, _options);
        return result.toPromise();
    }

    /**
     * get_all_messages  Get all messages for a given topic. If the topic is a RAG topic then the response will include Chunks first on each message. The structure will look like `[chunks]||mesage`. See docs.trieve.ai for more information.
     * get_all_messages
     * @param messagesTopicId The ID of the topic to get messages for.
     * @param tRDataset The dataset id to use for the request
     */
    public getAllTopicMessages(messagesTopicId: string, tRDataset: string, _options?: Configuration): Promise<Array<Message>> {
        const result = this.api.getAllTopicMessages(messagesTopicId, tRDataset, _options);
        return result.toPromise();
    }

    /**
     * regenerate_message  Regenerate the assistant response to the last user message of a topic. This will delete the last message and replace it with a new message. The response will include Chunks first on the stream if the topic is using RAG. The structure will look like `[chunks]||mesage`. See docs.trieve.ai for more information.
     * regenerate_message
     * @param tRDataset The dataset id to use for the request
     * @param regenerateMessageData JSON request payload to delete an agent message then regenerate it in a strem
     */
    public regenerateMessageHandlerWithHttpInfo(tRDataset: string, regenerateMessageData: RegenerateMessageData, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.regenerateMessageHandlerWithHttpInfo(tRDataset, regenerateMessageData, _options);
        return result.toPromise();
    }

    /**
     * regenerate_message  Regenerate the assistant response to the last user message of a topic. This will delete the last message and replace it with a new message. The response will include Chunks first on the stream if the topic is using RAG. The structure will look like `[chunks]||mesage`. See docs.trieve.ai for more information.
     * regenerate_message
     * @param tRDataset The dataset id to use for the request
     * @param regenerateMessageData JSON request payload to delete an agent message then regenerate it in a strem
     */
    public regenerateMessageHandler(tRDataset: string, regenerateMessageData: RegenerateMessageData, _options?: Configuration): Promise<string> {
        const result = this.api.regenerateMessageHandler(tRDataset, regenerateMessageData, _options);
        return result.toPromise();
    }


}



import { ObservableOrganizationApi } from './ObservableAPI';

import { OrganizationApiRequestFactory, OrganizationApiResponseProcessor} from "../apis/OrganizationApi";
export class PromiseOrganizationApi {
    private api: ObservableOrganizationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OrganizationApiRequestFactory,
        responseProcessor?: OrganizationApiResponseProcessor
    ) {
        this.api = new ObservableOrganizationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * create_organization  Create a new organization. The auth\'ed user who creates the organization will be the default owner of the organization.
     * create_organization
     * @param createOrganizationData The organization data that you want to create
     */
    public createOrganizationWithHttpInfo(createOrganizationData: CreateOrganizationData, _options?: Configuration): Promise<HttpInfo<Organization>> {
        const result = this.api.createOrganizationWithHttpInfo(createOrganizationData, _options);
        return result.toPromise();
    }

    /**
     * create_organization  Create a new organization. The auth\'ed user who creates the organization will be the default owner of the organization.
     * create_organization
     * @param createOrganizationData The organization data that you want to create
     */
    public createOrganization(createOrganizationData: CreateOrganizationData, _options?: Configuration): Promise<Organization> {
        const result = this.api.createOrganization(createOrganizationData, _options);
        return result.toPromise();
    }

    /**
     * get_organization  Fetch the details of an organization by its id. The auth\'ed user must be an admin or owner of the organization to fetch it.
     * get_organization
     * @param organizationId The id of the organization you want to fetch.
     * @param tROrganization The organization id to use for the request
     */
    public getOrganizationByIdWithHttpInfo(organizationId: string, tROrganization: string, _options?: Configuration): Promise<HttpInfo<Organization>> {
        const result = this.api.getOrganizationByIdWithHttpInfo(organizationId, tROrganization, _options);
        return result.toPromise();
    }

    /**
     * get_organization  Fetch the details of an organization by its id. The auth\'ed user must be an admin or owner of the organization to fetch it.
     * get_organization
     * @param organizationId The id of the organization you want to fetch.
     * @param tROrganization The organization id to use for the request
     */
    public getOrganizationById(organizationId: string, tROrganization: string, _options?: Configuration): Promise<Organization> {
        const result = this.api.getOrganizationById(organizationId, tROrganization, _options);
        return result.toPromise();
    }

    /**
     * get_organization_usage  Fetch the current usage specification of an organization by its id. The auth\'ed user must be an admin or owner of the organization to fetch it.
     * get_organization_usage
     * @param organizationId The id of the organization you want to fetch the usage of.
     * @param tROrganization The organization id to use for the request
     */
    public getOrganizationUsageWithHttpInfo(organizationId: string, tROrganization: string, _options?: Configuration): Promise<HttpInfo<OrganizationUsageCount>> {
        const result = this.api.getOrganizationUsageWithHttpInfo(organizationId, tROrganization, _options);
        return result.toPromise();
    }

    /**
     * get_organization_usage  Fetch the current usage specification of an organization by its id. The auth\'ed user must be an admin or owner of the organization to fetch it.
     * get_organization_usage
     * @param organizationId The id of the organization you want to fetch the usage of.
     * @param tROrganization The organization id to use for the request
     */
    public getOrganizationUsage(organizationId: string, tROrganization: string, _options?: Configuration): Promise<OrganizationUsageCount> {
        const result = this.api.getOrganizationUsage(organizationId, tROrganization, _options);
        return result.toPromise();
    }

    /**
     * get_organization_users  Fetch the users of an organization by its id. The auth\'ed user must be an admin or owner of the organization to fetch it.
     * get_organization_users
     * @param organizationId The id of the organization you want to fetch the users of.
     * @param tROrganization The organization id to use for the request
     */
    public getOrganizationUsersWithHttpInfo(organizationId: string, tROrganization: string, _options?: Configuration): Promise<HttpInfo<Array<SlimUser>>> {
        const result = this.api.getOrganizationUsersWithHttpInfo(organizationId, tROrganization, _options);
        return result.toPromise();
    }

    /**
     * get_organization_users  Fetch the users of an organization by its id. The auth\'ed user must be an admin or owner of the organization to fetch it.
     * get_organization_users
     * @param organizationId The id of the organization you want to fetch the users of.
     * @param tROrganization The organization id to use for the request
     */
    public getOrganizationUsers(organizationId: string, tROrganization: string, _options?: Configuration): Promise<Array<SlimUser>> {
        const result = this.api.getOrganizationUsers(organizationId, tROrganization, _options);
        return result.toPromise();
    }

    /**
     * update_organization  Update an organization. Only the owner of the organization can update it.
     * update_organization
     * @param tROrganization The organization id to use for the request
     * @param updateOrganizationData The organization data that you want to update
     */
    public updateOrganizationWithHttpInfo(tROrganization: string, updateOrganizationData: UpdateOrganizationData, _options?: Configuration): Promise<HttpInfo<Organization>> {
        const result = this.api.updateOrganizationWithHttpInfo(tROrganization, updateOrganizationData, _options);
        return result.toPromise();
    }

    /**
     * update_organization  Update an organization. Only the owner of the organization can update it.
     * update_organization
     * @param tROrganization The organization id to use for the request
     * @param updateOrganizationData The organization data that you want to update
     */
    public updateOrganization(tROrganization: string, updateOrganizationData: UpdateOrganizationData, _options?: Configuration): Promise<Organization> {
        const result = this.api.updateOrganization(tROrganization, updateOrganizationData, _options);
        return result.toPromise();
    }


}



import { ObservableStripeApi } from './ObservableAPI';

import { StripeApiRequestFactory, StripeApiResponseProcessor} from "../apis/StripeApi";
export class PromiseStripeApi {
    private api: ObservableStripeApi

    public constructor(
        configuration: Configuration,
        requestFactory?: StripeApiRequestFactory,
        responseProcessor?: StripeApiResponseProcessor
    ) {
        this.api = new ObservableStripeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param subscriptionId id of the subscription you want to cancel
     * @param tROrganization The organization id to use for the request
     */
    public cancelSubscriptionWithHttpInfo(subscriptionId: string, tROrganization: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.cancelSubscriptionWithHttpInfo(subscriptionId, tROrganization, _options);
        return result.toPromise();
    }

    /**
     * @param subscriptionId id of the subscription you want to cancel
     * @param tROrganization The organization id to use for the request
     */
    public cancelSubscription(subscriptionId: string, tROrganization: string, _options?: Configuration): Promise<void> {
        const result = this.api.cancelSubscription(subscriptionId, tROrganization, _options);
        return result.toPromise();
    }

    /**
     * @param planId id of the plan you want to subscribe to
     * @param organizationId id of the organization you want to subscribe to the plan
     */
    public directToPaymentLinkWithHttpInfo(planId: string, organizationId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.directToPaymentLinkWithHttpInfo(planId, organizationId, _options);
        return result.toPromise();
    }

    /**
     * @param planId id of the plan you want to subscribe to
     * @param organizationId id of the organization you want to subscribe to the plan
     */
    public directToPaymentLink(planId: string, organizationId: string, _options?: Configuration): Promise<void> {
        const result = this.api.directToPaymentLink(planId, organizationId, _options);
        return result.toPromise();
    }

    /**
     */
    public getAllPlansWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<StripePlan>>> {
        const result = this.api.getAllPlansWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public getAllPlans(_options?: Configuration): Promise<Array<StripePlan>> {
        const result = this.api.getAllPlans(_options);
        return result.toPromise();
    }

    /**
     * @param subscriptionId id of the subscription you want to update
     * @param planId id of the plan you want to subscribe to
     * @param tROrganization The organization id to use for the request
     */
    public updateSubscriptionPlanWithHttpInfo(subscriptionId: string, planId: string, tROrganization: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.updateSubscriptionPlanWithHttpInfo(subscriptionId, planId, tROrganization, _options);
        return result.toPromise();
    }

    /**
     * @param subscriptionId id of the subscription you want to update
     * @param planId id of the plan you want to subscribe to
     * @param tROrganization The organization id to use for the request
     */
    public updateSubscriptionPlan(subscriptionId: string, planId: string, tROrganization: string, _options?: Configuration): Promise<void> {
        const result = this.api.updateSubscriptionPlan(subscriptionId, planId, tROrganization, _options);
        return result.toPromise();
    }


}



import { ObservableTopicApi } from './ObservableAPI';

import { TopicApiRequestFactory, TopicApiResponseProcessor} from "../apis/TopicApi";
export class PromiseTopicApi {
    private api: ObservableTopicApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TopicApiRequestFactory,
        responseProcessor?: TopicApiResponseProcessor
    ) {
        this.api = new ObservableTopicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * create_topic  Create a new chat topic. Topics are attached to a user and act as a coordinator for memory of gen-AI chat sessions. We are considering refactoring this resource of the API soon.
     * create_topic
     * @param tRDataset The dataset id to use for the request
     * @param createTopicData JSON request payload to create chat topic
     */
    public createTopicWithHttpInfo(tRDataset: string, createTopicData: CreateTopicData, _options?: Configuration): Promise<HttpInfo<Topic>> {
        const result = this.api.createTopicWithHttpInfo(tRDataset, createTopicData, _options);
        return result.toPromise();
    }

    /**
     * create_topic  Create a new chat topic. Topics are attached to a user and act as a coordinator for memory of gen-AI chat sessions. We are considering refactoring this resource of the API soon.
     * create_topic
     * @param tRDataset The dataset id to use for the request
     * @param createTopicData JSON request payload to create chat topic
     */
    public createTopic(tRDataset: string, createTopicData: CreateTopicData, _options?: Configuration): Promise<Topic> {
        const result = this.api.createTopic(tRDataset, createTopicData, _options);
        return result.toPromise();
    }

    /**
     * delete_topic  Delete an existing chat topic. When a topic is deleted, all associated chat messages are also deleted.
     * delete_topic
     * @param tRDataset The dataset id to use for the request
     * @param deleteTopicData JSON request payload to delete a chat topic
     */
    public deleteTopicWithHttpInfo(tRDataset: string, deleteTopicData: DeleteTopicData, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteTopicWithHttpInfo(tRDataset, deleteTopicData, _options);
        return result.toPromise();
    }

    /**
     * delete_topic  Delete an existing chat topic. When a topic is deleted, all associated chat messages are also deleted.
     * delete_topic
     * @param tRDataset The dataset id to use for the request
     * @param deleteTopicData JSON request payload to delete a chat topic
     */
    public deleteTopic(tRDataset: string, deleteTopicData: DeleteTopicData, _options?: Configuration): Promise<void> {
        const result = this.api.deleteTopic(tRDataset, deleteTopicData, _options);
        return result.toPromise();
    }

    /**
     * get_all_topics_for_user  Get all topics belonging to a the auth\'ed user. Soon, we plan to allow specification of the user for this route and include pagination.
     * get_all_topics_for_user
     * @param userId The id of the user to get topics for
     * @param tRDataset The dataset id to use for the request
     */
    public getAllTopicsForUserWithHttpInfo(userId: string, tRDataset: string, _options?: Configuration): Promise<HttpInfo<Array<Topic>>> {
        const result = this.api.getAllTopicsForUserWithHttpInfo(userId, tRDataset, _options);
        return result.toPromise();
    }

    /**
     * get_all_topics_for_user  Get all topics belonging to a the auth\'ed user. Soon, we plan to allow specification of the user for this route and include pagination.
     * get_all_topics_for_user
     * @param userId The id of the user to get topics for
     * @param tRDataset The dataset id to use for the request
     */
    public getAllTopicsForUser(userId: string, tRDataset: string, _options?: Configuration): Promise<Array<Topic>> {
        const result = this.api.getAllTopicsForUser(userId, tRDataset, _options);
        return result.toPromise();
    }

    /**
     * update_topic  Update an existing chat topic. Currently, only the name of the topic can be updated.
     * update_topic
     * @param tRDataset The dataset id to use for the request
     * @param updateTopicData JSON request payload to update a chat topic
     */
    public updateTopicWithHttpInfo(tRDataset: string, updateTopicData: UpdateTopicData, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.updateTopicWithHttpInfo(tRDataset, updateTopicData, _options);
        return result.toPromise();
    }

    /**
     * update_topic  Update an existing chat topic. Currently, only the name of the topic can be updated.
     * update_topic
     * @param tRDataset The dataset id to use for the request
     * @param updateTopicData JSON request payload to update a chat topic
     */
    public updateTopic(tRDataset: string, updateTopicData: UpdateTopicData, _options?: Configuration): Promise<void> {
        const result = this.api.updateTopic(tRDataset, updateTopicData, _options);
        return result.toPromise();
    }


}



import { ObservableUserApi } from './ObservableAPI';

import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";
export class PromiseUserApi {
    private api: ObservableUserApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UserApiRequestFactory,
        responseProcessor?: UserApiResponseProcessor
    ) {
        this.api = new ObservableUserApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * delete_user_api_key  Delete an api key for the auth\'ed user.
     * delete_user_api_key
     * @param deleteUserApiKeyRequest JSON request payload to delete a user api key
     */
    public deleteUserApiKeyWithHttpInfo(deleteUserApiKeyRequest: DeleteUserApiKeyRequest, _options?: Configuration): Promise<HttpInfo<Array<ApiKeyDTO>>> {
        const result = this.api.deleteUserApiKeyWithHttpInfo(deleteUserApiKeyRequest, _options);
        return result.toPromise();
    }

    /**
     * delete_user_api_key  Delete an api key for the auth\'ed user.
     * delete_user_api_key
     * @param deleteUserApiKeyRequest JSON request payload to delete a user api key
     */
    public deleteUserApiKey(deleteUserApiKeyRequest: DeleteUserApiKeyRequest, _options?: Configuration): Promise<Array<ApiKeyDTO>> {
        const result = this.api.deleteUserApiKey(deleteUserApiKeyRequest, _options);
        return result.toPromise();
    }

    /**
     * get_user_files  Get all files which belong to a given user specified by the user_id parameter.
     * get_user_files
     * @param userId The id of the user to fetch files for.
     * @param tRDataset The dataset id to use for the request
     */
    public getUserFilesHandlerWithHttpInfo(userId: string, tRDataset: string, _options?: Configuration): Promise<HttpInfo<Array<any>>> {
        const result = this.api.getUserFilesHandlerWithHttpInfo(userId, tRDataset, _options);
        return result.toPromise();
    }

    /**
     * get_user_files  Get all files which belong to a given user specified by the user_id parameter.
     * get_user_files
     * @param userId The id of the user to fetch files for.
     * @param tRDataset The dataset id to use for the request
     */
    public getUserFilesHandler(userId: string, tRDataset: string, _options?: Configuration): Promise<Array<any>> {
        const result = this.api.getUserFilesHandler(userId, tRDataset, _options);
        return result.toPromise();
    }

    /**
     * set_user_api_key  Create a new api key for the auth\'ed user. Successful response will contain the newly created api key.
     * set_user_api_key
     * @param setUserApiKeyRequest 
     */
    public setUserApiKeyWithHttpInfo(setUserApiKeyRequest: SetUserApiKeyRequest, _options?: Configuration): Promise<HttpInfo<SetUserApiKeyResponse>> {
        const result = this.api.setUserApiKeyWithHttpInfo(setUserApiKeyRequest, _options);
        return result.toPromise();
    }

    /**
     * set_user_api_key  Create a new api key for the auth\'ed user. Successful response will contain the newly created api key.
     * set_user_api_key
     * @param setUserApiKeyRequest 
     */
    public setUserApiKey(setUserApiKeyRequest: SetUserApiKeyRequest, _options?: Configuration): Promise<SetUserApiKeyResponse> {
        const result = this.api.setUserApiKey(setUserApiKeyRequest, _options);
        return result.toPromise();
    }

    /**
     * update_user  Update a user\'s information. If the user_id is not provided, the auth\'ed user will be updated. If the user_id is provided, the auth\'ed user must be an admin (1) or owner (2) of the organization.
     * update_user
     * @param updateUserData JSON request payload to update user information for the auth\&#39;ed user
     */
    public updateUserWithHttpInfo(updateUserData: UpdateUserData, _options?: Configuration): Promise<HttpInfo<SlimUser>> {
        const result = this.api.updateUserWithHttpInfo(updateUserData, _options);
        return result.toPromise();
    }

    /**
     * update_user  Update a user\'s information. If the user_id is not provided, the auth\'ed user will be updated. If the user_id is provided, the auth\'ed user must be an admin (1) or owner (2) of the organization.
     * update_user
     * @param updateUserData JSON request payload to update user information for the auth\&#39;ed user
     */
    public updateUser(updateUserData: UpdateUserData, _options?: Configuration): Promise<SlimUser> {
        const result = this.api.updateUser(updateUserData, _options);
        return result.toPromise();
    }


}



