# .ChunkGroupApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addBookmark**](ChunkGroupApi.md#addBookmark) | **POST** /api/chunk_group/{group_id} | add_bookmark
[**createChunkGroup**](ChunkGroupApi.md#createChunkGroup) | **POST** /api/chunk_group | create_chunk_group
[**deleteBookmark**](ChunkGroupApi.md#deleteBookmark) | **DELETE** /api/bookmark/{group_id}/{bookmark_id} | delete_bookmark
[**deleteChunkGroup**](ChunkGroupApi.md#deleteChunkGroup) | **DELETE** /api/chunk_group/{group_id} | delete_chunk_group
[**getAllBookmarks**](ChunkGroupApi.md#getAllBookmarks) | **GET** /api/chunk_group/{group_id}/{page} | get_all_bookmarks
[**getGroupsChunkIsIn**](ChunkGroupApi.md#getGroupsChunkIsIn) | **POST** /api/chunk_group/bookmark | 
[**getSpecificDatasetChunkGroups**](ChunkGroupApi.md#getSpecificDatasetChunkGroups) | **GET** /api/dataset/groups/{dataset_id}/{page} | get_dataset_groups
[**searchGroups**](ChunkGroupApi.md#searchGroups) | **POST** /api/chunk_group/search | group_search
[**updateChunkGroup**](ChunkGroupApi.md#updateChunkGroup) | **PUT** /api/chunk_group | update_chunk_group


# **addBookmark**
> void addBookmark(addChunkToGroupData)

add_bookmark  Route to add a bookmark. Think of a bookmark as a chunk which is a member of a group.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChunkGroupApi(configuration);

let body:.ChunkGroupApiAddBookmarkRequest = {
  // string | Id of the group to add the chunk to as a bookmark
  groupId: "group_id_example",
  // string | The dataset id to use for the request
  tRDataset: "TR-Dataset_example",
  // AddChunkToGroupData | JSON request payload to add a chunk to a group (bookmark it)
  addChunkToGroupData: {
    chunkId: "chunkId_example",
  },
};

apiInstance.addBookmark(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addChunkToGroupData** | **AddChunkToGroupData**| JSON request payload to add a chunk to a group (bookmark it) |
 **groupId** | [**string**] | Id of the group to add the chunk to as a bookmark | defaults to undefined
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
**204** | Confirmation that the chunk was added to the group (bookmark\&#39;ed). |  -  |
**400** | Service error relating to getting the groups that the chunk is in. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createChunkGroup**
> ChunkGroup createChunkGroup(createChunkGroupData)

create_chunk_group  Create a new chunk_group. Think of this as analogous to a bookmark folder.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChunkGroupApi(configuration);

let body:.ChunkGroupApiCreateChunkGroupRequest = {
  // string | The dataset id to use for the request
  tRDataset: "TR-Dataset_example",
  // CreateChunkGroupData | JSON request payload to cretea a chunkGroup
  createChunkGroupData: {
    description: "description_example",
    name: "name_example",
  },
};

apiInstance.createChunkGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createChunkGroupData** | **CreateChunkGroupData**| JSON request payload to cretea a chunkGroup |
 **tRDataset** | [**string**] | The dataset id to use for the request | defaults to undefined


### Return type

**ChunkGroup**

### Authorization

[Cookie](README.md#Cookie), [ApiKey](README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the created chunkGroup |  -  |
**400** | Service error relating to creating the chunkGroup |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteBookmark**
> void deleteBookmark()

delete_bookmark  Route to delete a bookmark. Think of a bookmark as a chunk which is a member of a group.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChunkGroupApi(configuration);

let body:.ChunkGroupApiDeleteBookmarkRequest = {
  // string | Id of the group to remove the bookmark\'ed chunk from
  groupId: "group_id_example",
  // string | Id of the bookmark to remove
  bookmarkId: "bookmark_id_example",
  // string | The dataset id to use for the request
  tRDataset: "TR-Dataset_example",
};

apiInstance.deleteBookmark(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Id of the group to remove the bookmark\&#39;ed chunk from | defaults to undefined
 **bookmarkId** | [**string**] | Id of the bookmark to remove | defaults to undefined
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
**204** | Confirmation that the chunk was removed to the group |  -  |
**400** | Service error relating to removing the chunk from the group |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteChunkGroup**
> void deleteChunkGroup()

delete_chunk_group  This will delete a chunk_group. This will not delete the chunks that are in the group. We will soon support deleting a chunk_group along with its member chunks.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChunkGroupApi(configuration);

let body:.ChunkGroupApiDeleteChunkGroupRequest = {
  // string | Id of the chunk_group to delete
  groupId: "group_id_example",
  // string | The dataset id to use for the request
  tRDataset: "TR-Dataset_example",
};

apiInstance.deleteChunkGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | Id of the chunk_group to delete | defaults to undefined
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
**204** | Confirmation that the chunkGroup was deleted |  -  |
**400** | Service error relating to deleting the chunkGroup |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAllBookmarks**
> BookmarkData getAllBookmarks()

get_all_bookmarks  Route to get all bookmarks for a group. Think of a bookmark as a chunk which is a member of a group. The response is paginated, with each page containing 10 chunks (bookmarks). Support for custom page size is coming soon.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChunkGroupApi(configuration);

let body:.ChunkGroupApiGetAllBookmarksRequest = {
  // string | The id of the group to get the chunks from
  groupId: "group_id_example",
  // number | The page of chunks to get from the group
  page: 0,
  // string | The dataset id to use for the request
  tRDataset: "TR-Dataset_example",
};

apiInstance.getAllBookmarks(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | The id of the group to get the chunks from | defaults to undefined
 **page** | [**number**] | The page of chunks to get from the group | defaults to undefined
 **tRDataset** | [**string**] | The dataset id to use for the request | defaults to undefined


### Return type

**BookmarkData**

### Authorization

[Cookie](README.md#Cookie), [ApiKey](README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Bookmark\&#39;ed chunks present within the specified group |  -  |
**400** | Service error relating to getting the groups that the chunk is in |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getGroupsChunkIsIn**
> Array<BookmarkGroupResult> getGroupsChunkIsIn(getGroupsForChunksData)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChunkGroupApi(configuration);

let body:.ChunkGroupApiGetGroupsChunkIsInRequest = {
  // string | The dataset id to use for the request
  tRDataset: "TR-Dataset_example",
  // GetGroupsForChunksData | JSON request payload to get the groups that a chunk is in
  getGroupsForChunksData: {
    chunkIds: [
      "chunkIds_example",
    ],
  },
};

apiInstance.getGroupsChunkIsIn(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getGroupsForChunksData** | **GetGroupsForChunksData**| JSON request payload to get the groups that a chunk is in |
 **tRDataset** | [**string**] | The dataset id to use for the request | defaults to undefined


### Return type

**Array<BookmarkGroupResult>**

### Authorization

[Cookie](README.md#Cookie), [ApiKey](README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON body representing the groups that the chunk is in |  -  |
**400** | Service error relating to getting the groups that the chunk is in |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSpecificDatasetChunkGroups**
> GroupData getSpecificDatasetChunkGroups()

get_dataset_groups  Fetch the groups which belong to a dataset specified by its id.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChunkGroupApi(configuration);

let body:.ChunkGroupApiGetSpecificDatasetChunkGroupsRequest = {
  // string | The id of the dataset to fetch groups for.
  datasetId: "dataset_id_example",
  // number | The page of groups to fetch. Each page contains 10 groups. Support for custom page size is coming soon.
  page: 1,
  // string | The dataset id to use for the request
  tRDataset: "TR-Dataset_example",
};

apiInstance.getSpecificDatasetChunkGroups(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **datasetId** | [**string**] | The id of the dataset to fetch groups for. | defaults to undefined
 **page** | [**number**] | The page of groups to fetch. Each page contains 10 groups. Support for custom page size is coming soon. | defaults to undefined
 **tRDataset** | [**string**] | The dataset id to use for the request | defaults to undefined


### Return type

**GroupData**

### Authorization

[Cookie](README.md#Cookie), [ApiKey](README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON body representing the groups created by the given dataset |  -  |
**400** | Service error relating to getting the groups created by the given dataset |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchGroups**
> SearchGroupsResult searchGroups(searchGroupsData)

group_search  This route allows you to search only within a group. This is useful for when you only want search results to contain chunks which are members of a specific group. Think about this like searching within a playlist or bookmark folder.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChunkGroupApi(configuration);

let body:.ChunkGroupApiSearchGroupsRequest = {
  // string | The dataset id to use for the request
  tRDataset: "TR-Dataset_example",
  // SearchGroupsData | JSON request payload to semantically search a group
  searchGroupsData: {
    crossEncoder: true,
    dateBias: true,
    filters: null,
    groupId: "groupId_example",
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
    weights: [
      null,
    ],
  },
};

apiInstance.searchGroups(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchGroupsData** | **SearchGroupsData**| JSON request payload to semantically search a group |
 **tRDataset** | [**string**] | The dataset id to use for the request | defaults to undefined


### Return type

**SearchGroupsResult**

### Authorization

[Cookie](README.md#Cookie), [ApiKey](README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Group chunks which are similar to the embedding vector of the search query |  -  |
**400** | Service error relating to getting the groups that the chunk is in |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateChunkGroup**
> void updateChunkGroup(updateChunkGroupData)

update_chunk_group  Update a chunk_group. Think of this as analogous to a bookmark folder.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChunkGroupApi(configuration);

let body:.ChunkGroupApiUpdateChunkGroupRequest = {
  // string | The dataset id to use for the request
  tRDataset: "TR-Dataset_example",
  // UpdateChunkGroupData | JSON request payload to update a chunkGroup
  updateChunkGroupData: {
    description: "description_example",
    groupId: "groupId_example",
    name: "name_example",
  },
};

apiInstance.updateChunkGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateChunkGroupData** | **UpdateChunkGroupData**| JSON request payload to update a chunkGroup |
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
**204** | Confirmation that the chunkGroup was updated |  -  |
**400** | Service error relating to updating the chunkGroup |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


