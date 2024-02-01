# .OrganizationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrganization**](OrganizationApi.md#createOrganization) | **POST** /api/organization | create_organization
[**getOrganizationById**](OrganizationApi.md#getOrganizationById) | **GET** /api/organization/{organization_id} | get_organization
[**getOrganizationUsage**](OrganizationApi.md#getOrganizationUsage) | **GET** /api/organization/usage/{organization_id} | get_organization_usage
[**getOrganizationUsers**](OrganizationApi.md#getOrganizationUsers) | **GET** /api/organization/users/{organization_id} | get_organization_users
[**updateOrganization**](OrganizationApi.md#updateOrganization) | **PUT** /api/organization | update_organization


# **createOrganization**
> Organization createOrganization(createOrganizationData)

create_organization  Create a new organization. The auth\'ed user who creates the organization will be the default owner of the organization.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrganizationApi(configuration);

let body:.OrganizationApiCreateOrganizationRequest = {
  // CreateOrganizationData | The organization data that you want to create
  createOrganizationData: {
    name: "name_example",
  },
};

apiInstance.createOrganization(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOrganizationData** | **CreateOrganizationData**| The organization data that you want to create |


### Return type

**Organization**

### Authorization

[Cookie](README.md#Cookie), [ApiKey](README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Created organization object |  -  |
**400** | Service error relating to creating the organization |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOrganizationById**
> Organization getOrganizationById()

get_organization  Fetch the details of an organization by its id. The auth\'ed user must be an admin or owner of the organization to fetch it.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrganizationApi(configuration);

let body:.OrganizationApiGetOrganizationByIdRequest = {
  // string | The id of the organization you want to fetch.
  organizationId: "organization_id_example",
  // string | The organization id to use for the request
  tROrganization: "TR-Organization_example",
};

apiInstance.getOrganizationById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | The id of the organization you want to fetch. | defaults to undefined
 **tROrganization** | [**string**] | The organization id to use for the request | defaults to undefined


### Return type

**Organization**

### Authorization

[Cookie](README.md#Cookie), [ApiKey](README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Organization with the id that was requested |  -  |
**400** | Service error relating to finding the organization by id |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOrganizationUsage**
> OrganizationUsageCount getOrganizationUsage()

get_organization_usage  Fetch the current usage specification of an organization by its id. The auth\'ed user must be an admin or owner of the organization to fetch it.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrganizationApi(configuration);

let body:.OrganizationApiGetOrganizationUsageRequest = {
  // string | The id of the organization you want to fetch the usage of.
  organizationId: "organization_id_example",
  // string | The organization id to use for the request
  tROrganization: "TR-Organization_example",
};

apiInstance.getOrganizationUsage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | The id of the organization you want to fetch the usage of. | defaults to undefined
 **tROrganization** | [**string**] | The organization id to use for the request | defaults to undefined


### Return type

**OrganizationUsageCount**

### Authorization

[Cookie](README.md#Cookie), [ApiKey](README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The current usage of the specified organization |  -  |
**400** | Service error relating to finding the organization\&#39;s usage by id |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOrganizationUsers**
> Array<SlimUser> getOrganizationUsers()

get_organization_users  Fetch the users of an organization by its id. The auth\'ed user must be an admin or owner of the organization to fetch it.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrganizationApi(configuration);

let body:.OrganizationApiGetOrganizationUsersRequest = {
  // string | The id of the organization you want to fetch the users of.
  organizationId: "organization_id_example",
  // string | The organization id to use for the request
  tROrganization: "TR-Organization_example",
};

apiInstance.getOrganizationUsers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | The id of the organization you want to fetch the users of. | defaults to undefined
 **tROrganization** | [**string**] | The organization id to use for the request | defaults to undefined


### Return type

**Array<SlimUser>**

### Authorization

[Cookie](README.md#Cookie), [ApiKey](README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of users who belong to the specified by organization |  -  |
**400** | Service error relating to finding the organization\&#39;s users by id |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateOrganization**
> Organization updateOrganization(updateOrganizationData)

update_organization  Update an organization. Only the owner of the organization can update it.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrganizationApi(configuration);

let body:.OrganizationApiUpdateOrganizationRequest = {
  // string | The organization id to use for the request
  tROrganization: "TR-Organization_example",
  // UpdateOrganizationData | The organization data that you want to update
  updateOrganizationData: {
    name: "name_example",
    organizationId: "organizationId_example",
  },
};

apiInstance.updateOrganization(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateOrganizationData** | **UpdateOrganizationData**| The organization data that you want to update |
 **tROrganization** | [**string**] | The organization id to use for the request | defaults to undefined


### Return type

**Organization**

### Authorization

[Cookie](README.md#Cookie), [ApiKey](README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated organization object |  -  |
**400** | Service error relating to updating the organization |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


