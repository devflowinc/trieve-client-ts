# .UserApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteUserApiKey**](UserApi.md#deleteUserApiKey) | **DELETE** /api/user/delete_api_key | delete_user_api_key
[**getUserFilesHandler**](UserApi.md#getUserFilesHandler) | **GET** /api/user/files/{user_id} | get_user_files
[**setUserApiKey**](UserApi.md#setUserApiKey) | **POST** /api/user/set_api_key | set_user_api_key
[**updateUser**](UserApi.md#updateUser) | **PUT** /api/user | update_user


# **deleteUserApiKey**
> Array<ApiKeyDTO> deleteUserApiKey(deleteUserApiKeyRequest)

delete_user_api_key  Delete an api key for the auth\'ed user.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UserApi(configuration);

let body:.UserApiDeleteUserApiKeyRequest = {
  // DeleteUserApiKeyRequest | JSON request payload to delete a user api key
  deleteUserApiKeyRequest: {
    apiKeyId: "apiKeyId_example",
  },
};

apiInstance.deleteUserApiKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteUserApiKeyRequest** | **DeleteUserApiKeyRequest**| JSON request payload to delete a user api key |


### Return type

**Array<ApiKeyDTO>**

### Authorization

[Cookie](README.md#Cookie), [ApiKey](README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON body representing the api_key for the user |  -  |
**400** | Service error relating to creating api_key for the user |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getUserFilesHandler**
> Array<any> getUserFilesHandler()

get_user_files  Get all files which belong to a given user specified by the user_id parameter.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UserApi(configuration);

let body:.UserApiGetUserFilesHandlerRequest = {
  // string | The id of the user to fetch files for.
  userId: "user_id_example",
  // string | The dataset id to use for the request
  tRDataset: "TR-Dataset_example",
};

apiInstance.getUserFilesHandler(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] | The id of the user to fetch files for. | defaults to undefined
 **tRDataset** | [**string**] | The dataset id to use for the request | defaults to undefined


### Return type

**Array<any>**

### Authorization

[Cookie](README.md#Cookie), [ApiKey](README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON body representing the files uploaded by the given user |  -  |
**400** | Service error relating to getting the files uploaded by the given user |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **setUserApiKey**
> SetUserApiKeyResponse setUserApiKey(setUserApiKeyRequest)

set_user_api_key  Create a new api key for the auth\'ed user. Successful response will contain the newly created api key.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UserApi(configuration);

let body:.UserApiSetUserApiKeyRequest = {
  // SetUserApiKeyRequest | 
  setUserApiKeyRequest: {
    name: "name_example",
    role: 1,
  },
};

apiInstance.setUserApiKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setUserApiKeyRequest** | **SetUserApiKeyRequest**|  |


### Return type

**SetUserApiKeyResponse**

### Authorization

[Cookie](README.md#Cookie), [ApiKey](README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON body representing the api_key for the user |  -  |
**400** | Service error relating to creating api_key for the user |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateUser**
> SlimUser updateUser(updateUserData)

update_user  Update a user\'s information. If the user_id is not provided, the auth\'ed user will be updated. If the user_id is provided, the auth\'ed user must be an admin (1) or owner (2) of the organization.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UserApi(configuration);

let body:.UserApiUpdateUserRequest = {
  // UpdateUserData | JSON request payload to update user information for the auth\'ed user
  updateUserData: {
    name: "name_example",
    organizationId: "organizationId_example",
    role: 1,
    userId: "userId_example",
    username: "username_example",
    visibleEmail: true,
    website: "website_example",
  },
};

apiInstance.updateUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateUserData** | **UpdateUserData**| JSON request payload to update user information for the auth\&#39;ed user |


### Return type

**SlimUser**

### Authorization

[Cookie](README.md#Cookie), [ApiKey](README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON body representing the updated user information |  -  |
**400** | Service error relating to updating the user |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


