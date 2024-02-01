# .ChunkApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createChunk**](ChunkApi.md#createChunk) | **POST** /api/chunk | create_chunk
[**createSuggestedQueriesHandler**](ChunkApi.md#createSuggestedQueriesHandler) | **POST** /api/chunk/gen_suggestions | get_suggested_queries
[**deleteChunk**](ChunkApi.md#deleteChunk) | **DELETE** /api/chunk/{chunk_id} | delete_chunk
[**deleteChunkByTrackingId**](ChunkApi.md#deleteChunkByTrackingId) | **DELETE** /api/chunk/tracking_id/{tracking_id} | delete_chunk_by_tracking_id
[**generateOffChunks**](ChunkApi.md#generateOffChunks) | **POST** /api/chunk/generate | augmented_generation_from_chunks
[**getChunkById**](ChunkApi.md#getChunkById) | **GET** /api/chunk/{chunk_id} | get_chunk
[**getChunkByTrackingId**](ChunkApi.md#getChunkByTrackingId) | **GET** /api/chunk/tracking_id/{tracking_id} | get_chunk_by_tracking_id
[**getRecommendedChunks**](ChunkApi.md#getRecommendedChunks) | **POST** /api/chunk/recommend | get_recommended_chunks
[**searchChunk**](ChunkApi.md#searchChunk) | **POST** /api/chunk/search | search
[**updateChunk**](ChunkApi.md#updateChunk) | **PUT** /api/chunk/update | update_chunk
[**updateChunkByTrackingId**](ChunkApi.md#updateChunkByTrackingId) | **PUT** /api/chunk/tracking_id/update | update_chunk_by_tracking_id


# **createChunk**
> ReturnCreatedChunk createChunk(createChunkData)

create_chunk  Create a new chunk. If the chunk has the same tracking_id as an existing chunk, the request will fail. Once a chunk is created, it can be searched for using the search endpoint.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChunkApi(configuration);

let body:.ChunkApiCreateChunkRequest = {
  // string | The dataset id to use for the request
  tRDataset: "TR-Dataset_example",
  // CreateChunkData | JSON request payload to create a new chunk (chunk)
  createChunkData: {
    chunkHtml: "chunkHtml_example",
    chunkVector: [
      3.14,
    ],
    fileUuid: "fileUuid_example",
    groupId: "groupId_example",
    link: "link_example",
    metadata: null,
    tagSet: "tagSet_example",
    timeStamp: "timeStamp_example",
    trackingId: "trackingId_example",
    weight: 3.14,
  },
};

apiInstance.createChunk(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createChunkData** | **CreateChunkData**| JSON request payload to create a new chunk (chunk) |
 **tRDataset** | [**string**] | The dataset id to use for the request | defaults to undefined


### Return type

**ReturnCreatedChunk**

### Authorization

[Cookie](README.md#Cookie), [ApiKey](README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON response payload containing the created chunk |  -  |
**400** | Service error relating to to creating a chunk, likely due to conflicting tracking_id |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createSuggestedQueriesHandler**
> SuggestedQueriesResponse createSuggestedQueriesHandler(suggestedQueriesRequest)

get_suggested_queries  This endpoint will generate 3 suggested queries based off the query provided in the request body and return them as a JSON object.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChunkApi(configuration);

let body:.ChunkApiCreateSuggestedQueriesHandlerRequest = {
  // string | The dataset id to use for the request
  tRDataset: "TR-Dataset_example",
  // SuggestedQueriesRequest | JSON request payload to get alternative suggested queries
  suggestedQueriesRequest: {
    query: "query_example",
  },
};

apiInstance.createSuggestedQueriesHandler(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **suggestedQueriesRequest** | **SuggestedQueriesRequest**| JSON request payload to get alternative suggested queries |
 **tRDataset** | [**string**] | The dataset id to use for the request | defaults to undefined


### Return type

**SuggestedQueriesResponse**

### Authorization

[Cookie](README.md#Cookie), [ApiKey](README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A JSON object containing a list of alternative suggested queries |  -  |
**400** | Service error relating to to updating chunk, likely due to conflicting tracking_id |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteChunk**
> void deleteChunk()

delete_chunk  Delete a chunk by its id. If deleting a root chunk which has a collision, the most recently created collision will become a new root chunk.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChunkApi(configuration);

let body:.ChunkApiDeleteChunkRequest = {
  // string | id of the chunk you want to delete
  chunkId: "chunk_id_example",
  // string | The dataset id to use for the request
  tRDataset: "TR-Dataset_example",
};

apiInstance.deleteChunk(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chunkId** | [**string**] | id of the chunk you want to delete | defaults to undefined
 **tRDataset** | [**string**] | The dataset id to use for the request | defaults to undefined


### Return type

**void**

### Authorization

[Cookie](README.md#Cookie), [ApiKey](README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Confirmation that the chunk with the id specified was deleted |  -  |
**400** | Service error relating to finding a chunk by tracking_id |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteChunkByTrackingId**
> void deleteChunkByTrackingId()

delete_chunk_by_tracking_id  Delete a chunk by tracking_id. This is useful for when you are coordinating with an external system and want to use the tracking_id to identify the chunk. If deleting a root chunk which has a collision, the most recently created collision will become a new root chunk.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChunkApi(configuration);

let body:.ChunkApiDeleteChunkByTrackingIdRequest = {
  // string | tracking_id of the chunk you want to delete
  trackingId: "tracking_id_example",
  // string | The dataset id to use for the request
  tRDataset: "TR-Dataset_example",
};

apiInstance.deleteChunkByTrackingId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trackingId** | [**string**] | tracking_id of the chunk you want to delete | defaults to undefined
 **tRDataset** | [**string**] | The dataset id to use for the request | defaults to undefined


### Return type

**void**

### Authorization

[Cookie](README.md#Cookie), [ApiKey](README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Confirmation that the chunk with the tracking_id specified was deleted |  -  |
**400** | Service error relating to finding a chunk by tracking_id |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **generateOffChunks**
> string generateOffChunks(generateChunksRequest)

augmented_generation_from_chunks  This endpoint exists as an alternative to the topic+message concept where our API handles chat memory. With this endpoint, the user is responsible for providing the context window and the prompt. See more in the \"search before generate\" page at docs.trieve.ai.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChunkApi(configuration);

let body:.ChunkApiGenerateOffChunksRequest = {
  // string | The dataset id to use for the request
  tRDataset: "TR-Dataset_example",
  // GenerateChunksRequest | JSON request payload to perform RAG on some chunks (chunks)
  generateChunksRequest: {
    chunkIds: [
      "chunkIds_example",
    ],
    model: "model_example",
    prevMessages: [
      {
        content: "content_example",
        role: "role_example",
      },
    ],
    prompt: "prompt_example",
    streamResponse: true,
  },
};

apiInstance.generateOffChunks(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateChunksRequest** | **GenerateChunksRequest**| JSON request payload to perform RAG on some chunks (chunks) |
 **tRDataset** | [**string**] | The dataset id to use for the request | defaults to undefined


### Return type

**string**

### Authorization

[Cookie](README.md#Cookie), [ApiKey](README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/plain, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This will be a JSON response of a string containing the LLM\&#39;s generated inference. Response if not streaming. |  -  |
**400** | Service error relating to to updating chunk, likely due to conflicting tracking_id |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getChunkById**
> ChunkMetadata getChunkById()

get_chunk  Get a singular chunk by id.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChunkApi(configuration);

let body:.ChunkApiGetChunkByIdRequest = {
  // string | Id of the chunk you want to fetch.
  chunkId: "chunk_id_example",
  // string | The dataset id to use for the request
  tRDataset: "TR-Dataset_example",
};

apiInstance.getChunkById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chunkId** | [**string**] | Id of the chunk you want to fetch. | defaults to undefined
 **tRDataset** | [**string**] | The dataset id to use for the request | defaults to undefined


### Return type

**ChunkMetadata**

### Authorization

[Cookie](README.md#Cookie), [ApiKey](README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | chunk with the id that you were searching for |  -  |
**400** | Service error relating to fidning a chunk by tracking_id |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getChunkByTrackingId**
> ChunkMetadata getChunkByTrackingId()

get_chunk_by_tracking_id  Get a singular chunk by tracking_id. This is useful for when you are coordinating with an external system and want to use your own id as the primary reference for a chunk.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChunkApi(configuration);

let body:.ChunkApiGetChunkByTrackingIdRequest = {
  // string | tracking_id of the chunk you want to fetch
  trackingId: "tracking_id_example",
  // string | The dataset id to use for the request
  tRDataset: "TR-Dataset_example",
};

apiInstance.getChunkByTrackingId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trackingId** | [**string**] | tracking_id of the chunk you want to fetch | defaults to undefined
 **tRDataset** | [**string**] | The dataset id to use for the request | defaults to undefined


### Return type

**ChunkMetadata**

### Authorization

[Cookie](README.md#Cookie), [ApiKey](README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | chunk with the tracking_id that you were searching for |  -  |
**400** | Service error relating to fidning a chunk by tracking_id |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getRecommendedChunks**
> Array<ChunkMetadataWithFileData> getRecommendedChunks(recommendChunksRequest)

get_recommended_chunks  Get recommendations of chunks similar to the chunks in the request. Think about this as a feature similar to the \"add to playlist\" recommendation feature on Spotify. This request pairs especially well with our groups endpoint.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChunkApi(configuration);

let body:.ChunkApiGetRecommendedChunksRequest = {
  // string | The dataset id to use for the request
  tRDataset: "TR-Dataset_example",
  // RecommendChunksRequest | JSON request payload to get recommendations of chunks similar to the chunks in the request
  recommendChunksRequest: {
    positiveChunkIds: [
      "positiveChunkIds_example",
    ],
  },
};

apiInstance.getRecommendedChunks(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recommendChunksRequest** | **RecommendChunksRequest**| JSON request payload to get recommendations of chunks similar to the chunks in the request |
 **tRDataset** | [**string**] | The dataset id to use for the request | defaults to undefined


### Return type

**Array<ChunkMetadataWithFileData>**

### Authorization

[Cookie](README.md#Cookie), [ApiKey](README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON response payload containing chunks with scores which are similar to those in the request body |  -  |
**400** | Service error relating to to getting similar chunks |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchChunk**
> SearchChunkQueryResponseBody searchChunk(searchChunkData)

search  This route provides the primary search functionality for the API. It can be used to search for chunks by semantic similarity, full-text similarity, or a combination of both. Results\' `chunk_html` values will be modified with `<b>` tags for sub-sentence highlighting.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChunkApi(configuration);

let body:.ChunkApiSearchChunkRequest = {
  // string | The dataset id to use for the request
  tRDataset: "TR-Dataset_example",
  // SearchChunkData | JSON request payload to semantically search for chunks (chunks)
  searchChunkData: {
    crossEncoder: true,
    dateBias: true,
    filters: null,
    getCollisions: true,
    highlightDelimiters: [
      "highlightDelimiters_example",
    ],
    highlightResults: true,
    link: [
      "link_example",
    ],
    page: 0,
    query: "query_example",
    searchType: "searchType_example",
    tagSet: [
      "tagSet_example",
    ],
    timeRange: [
      null,
    ],
    weights: [
      null,
    ],
  },
};

apiInstance.searchChunk(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchChunkData** | **SearchChunkData**| JSON request payload to semantically search for chunks (chunks) |
 **tRDataset** | [**string**] | The dataset id to use for the request | defaults to undefined


### Return type

**SearchChunkQueryResponseBody**

### Authorization

[Cookie](README.md#Cookie), [ApiKey](README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | chunks which are similar to the embedding vector of the search query |  -  |
**400** | Service error relating to searching |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateChunk**
> void updateChunk(updateChunkData)

update_chunk  Update a chunk. If you try to change the tracking_id of the chunk to have the same tracking_id as an existing chunk, the request will fail.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChunkApi(configuration);

let body:.ChunkApiUpdateChunkRequest = {
  // string | The dataset id to use for the request
  tRDataset: "TR-Dataset_example",
  // UpdateChunkData | JSON request payload to update a chunk (chunk)
  updateChunkData: {
    chunkHtml: "chunkHtml_example",
    chunkUuid: "chunkUuid_example",
    link: "link_example",
    metadata: null,
    timeStamp: "timeStamp_example",
    trackingId: "trackingId_example",
    weight: 3.14,
  },
};

apiInstance.updateChunk(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateChunkData** | **UpdateChunkData**| JSON request payload to update a chunk (chunk) |
 **tRDataset** | [**string**] | The dataset id to use for the request | defaults to undefined


### Return type

**void**

### Authorization

[Cookie](README.md#Cookie), [ApiKey](README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No content Ok response indicating the chunk was updated as requested |  -  |
**400** | Service error relating to to updating chunk, likely due to conflicting tracking_id |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateChunkByTrackingId**
> void updateChunkByTrackingId(updateChunkByTrackingIdData)

update_chunk_by_tracking_id  Update a chunk by tracking_id. This is useful for when you are coordinating with an external system and want to use the tracking_id to identify the chunk.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChunkApi(configuration);

let body:.ChunkApiUpdateChunkByTrackingIdRequest = {
  // string | The dataset id to use for the request
  tRDataset: "TR-Dataset_example",
  // UpdateChunkByTrackingIdData | JSON request payload to update a chunk by tracking_id (chunks)
  updateChunkByTrackingIdData: {
    chunkHtml: "chunkHtml_example",
    link: "link_example",
    metadata: null,
    timeStamp: "timeStamp_example",
    trackingId: "trackingId_example",
    weight: 3.14,
  },
};

apiInstance.updateChunkByTrackingId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateChunkByTrackingIdData** | **UpdateChunkByTrackingIdData**| JSON request payload to update a chunk by tracking_id (chunks) |
 **tRDataset** | [**string**] | The dataset id to use for the request | defaults to undefined


### Return type

**void**

### Authorization

[Cookie](README.md#Cookie), [ApiKey](README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Confirmation that the chunk has been updated as per your request |  -  |
**400** | Service error relating to to updating chunk |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


