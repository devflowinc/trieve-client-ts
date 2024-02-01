# .AuthApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**callback**](AuthApi.md#callback) | **GET** /api/auth/callback | openid_callback
[**getMe**](AuthApi.md#getMe) | **GET** /api/auth/me | get_me
[**login**](AuthApi.md#login) | **GET** /api/auth | login
[**logout**](AuthApi.md#logout) | **DELETE** /api/auth | logout


# **callback**
> SlimUser callback()

openid_callback  This is the callback route for the OAuth provider, it should not be called directly. Redirects to browser with set-cookie header.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:any = {};

apiInstance.callback(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**SlimUser**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response that returns with set-cookie header |  -  |
**400** | Email or password empty or incorrect |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMe**
> SlimUser getMe()

get_me  Get the user corresponding to your current auth credentials.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:any = {};

apiInstance.getMe(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**SlimUser**

### Authorization

[Cookie](README.md#Cookie), [ApiKey](README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The user corresponding to your current auth credentials |  -  |
**400** | Error message indicitating you are not currently signed in |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **login**
> login()

login  This will redirect you to the OAuth provider for authentication with email/pass, SSO, Google, Github, etc.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiLoginRequest = {
  // string | Code sent via email as a result of successful call to send_invitation (optional)
  invCode: "invCode_example",
  // string | ID of organization to authenticate into (optional)
  organizationId: "organizationId_example",
  // string | URL to redirect to after successful login (optional)
  redirectUri: "redirectUri_example",
};

apiInstance.login(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invCode** | [**string**] | Code sent via email as a result of successful call to send_invitation | (optional) defaults to undefined
 **organizationId** | [**string**] | ID of organization to authenticate into | (optional) defaults to undefined
 **redirectUri** | [**string**] | URL to redirect to after successful login | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**303** | Response that redirects to OAuth provider through a Location header to be handled by browser. |  -  |
**400** | OAuth error likely with OIDC provider. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **logout**
> void logout()

logout  Invalidate your current auth credential stored typically stored in a cookie. This does not invalidate your API key.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:any = {};

apiInstance.logout(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Confirmation that your current auth token has been invalidated. This does not invalidate your API key. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


