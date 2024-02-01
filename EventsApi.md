# .EventsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEvents**](EventsApi.md#getEvents) | **GET** /api/events/{page} | get_events


# **getEvents**
> EventReturn getEvents()

get_events  Get events for the auth\'ed user. Currently, this is only for events belonging to the auth\'ed user. Soon, we plan to associate events to datasets instead of users. Each page contains 10 events.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventsApi(configuration);

let body:.EventsApiGetEventsRequest = {
  // number | Page number of events to get
  page: 1,
  // string | The dataset id to use for the request
  tRDataset: "TR-Dataset_example",
};

apiInstance.getEvents(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | Page number of events to get | defaults to undefined
 **tRDataset** | [**string**] | The dataset id to use for the request | defaults to undefined


### Return type

**EventReturn**

### Authorization

[Cookie](README.md#Cookie), [ApiKey](README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Events for the dataset |  -  |
**400** | Service error relating to getting events for the dataset |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


