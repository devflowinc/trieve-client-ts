# .TopicApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTopic**](TopicApi.md#createTopic) | **POST** /api/topic | create_topic
[**deleteTopic**](TopicApi.md#deleteTopic) | **DELETE** /api/topic | delete_topic
[**getAllTopicsForUser**](TopicApi.md#getAllTopicsForUser) | **GET** /api/topic/user/{user_id} | get_all_topics_for_user
[**updateTopic**](TopicApi.md#updateTopic) | **PUT** /api/topic | update_topic


# **createTopic**
> Topic createTopic(createTopicData)

create_topic  Create a new chat topic. Topics are attached to a user and act as a coordinator for memory of gen-AI chat sessions. We are considering refactoring this resource of the API soon.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TopicApi(configuration);

let body:.TopicApiCreateTopicRequest = {
  // string | The dataset id to use for the request
  tRDataset: "TR-Dataset_example",
  // CreateTopicData | JSON request payload to create chat topic
  createTopicData: {
    firstUserMessage: "firstUserMessage_example",
    name: "name_example",
  },
};

apiInstance.createTopic(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTopicData** | **CreateTopicData**| JSON request payload to create chat topic |
 **tRDataset** | [**string**] | The dataset id to use for the request | defaults to undefined


### Return type

**Topic**

### Authorization

[Cookie](README.md#Cookie), [ApiKey](README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The JSON response payload containing the created topic |  -  |
**400** | Topic name empty or a service error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteTopic**
> void deleteTopic(deleteTopicData)

delete_topic  Delete an existing chat topic. When a topic is deleted, all associated chat messages are also deleted.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TopicApi(configuration);

let body:.TopicApiDeleteTopicRequest = {
  // string | The dataset id to use for the request
  tRDataset: "TR-Dataset_example",
  // DeleteTopicData | JSON request payload to delete a chat topic
  deleteTopicData: {
    topicId: "topicId_example",
  },
};

apiInstance.deleteTopic(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteTopicData** | **DeleteTopicData**| JSON request payload to delete a chat topic |
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
**204** | Confirmation that the topic was deleted |  -  |
**400** | Service error relating to topic deletion |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAllTopicsForUser**
> Array<Topic> getAllTopicsForUser()

get_all_topics_for_user  Get all topics belonging to a the auth\'ed user. Soon, we plan to allow specification of the user for this route and include pagination.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TopicApi(configuration);

let body:.TopicApiGetAllTopicsForUserRequest = {
  // string | The id of the user to get topics for
  userId: "user_id_example",
  // string | The dataset id to use for the request
  tRDataset: "TR-Dataset_example",
};

apiInstance.getAllTopicsForUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] | The id of the user to get topics for | defaults to undefined
 **tRDataset** | [**string**] | The dataset id to use for the request | defaults to undefined


### Return type

**Array<Topic>**

### Authorization

[Cookie](README.md#Cookie), [ApiKey](README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | All topics belonging to a given user |  -  |
**400** | Service error relating to topic get |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateTopic**
> void updateTopic(updateTopicData)

update_topic  Update an existing chat topic. Currently, only the name of the topic can be updated.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TopicApi(configuration);

let body:.TopicApiUpdateTopicRequest = {
  // string | The dataset id to use for the request
  tRDataset: "TR-Dataset_example",
  // UpdateTopicData | JSON request payload to update a chat topic
  updateTopicData: {
    name: "name_example",
    topicId: "topicId_example",
  },
};

apiInstance.updateTopic(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateTopicData** | **UpdateTopicData**| JSON request payload to update a chat topic |
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
**204** | Confirmation that the topic was updated |  -  |
**400** | Service error relating to topic update |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


