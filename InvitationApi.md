# .InvitationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postInvitation**](InvitationApi.md#postInvitation) | **POST** /api/invitation | send_invitation


# **postInvitation**
> void postInvitation(invitationData)

send_invitation  Invitations act as a way to invite users to join an organization. After a user is invited, they will automatically be added to the organization with the role specified in the invitation once they set their.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InvitationApi(configuration);

let body:.InvitationApiPostInvitationRequest = {
  // string | The organization id to use for the request
  tROrganization: "TR-Organization_example",
  // InvitationData | JSON request payload to send an invitation
  invitationData: {
    appUrl: "appUrl_example",
    email: "email_example",
    organizationId: "organizationId_example",
    redirectUri: "redirectUri_example",
    userRole: 1,
  },
};

apiInstance.postInvitation(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invitationData** | **InvitationData**| JSON request payload to send an invitation |
 **tROrganization** | [**string**] | The organization id to use for the request | defaults to undefined


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
**204** | Ok response. Indicates that invitation email was sent correctly. |  -  |
**400** | Invalid email or some other error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


