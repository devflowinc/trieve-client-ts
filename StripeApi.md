# .StripeApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelSubscription**](StripeApi.md#cancelSubscription) | **DELETE** /api/stripe/subscription/{subscription_id} | 
[**directToPaymentLink**](StripeApi.md#directToPaymentLink) | **GET** /api/stripe/payment_link/{plan_id}/{organization_id} | 
[**getAllPlans**](StripeApi.md#getAllPlans) | **GET** /api/stripe/plans | 
[**updateSubscriptionPlan**](StripeApi.md#updateSubscriptionPlan) | **PATCH** /api/stripe/subscription_plan/{subscription_id}/{plan_id} | 


# **cancelSubscription**
> void cancelSubscription()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StripeApi(configuration);

let body:.StripeApiCancelSubscriptionRequest = {
  // string | id of the subscription you want to cancel
  subscriptionId: "subscription_id_example",
  // string | The organization id to use for the request
  tROrganization: "TR-Organization_example",
};

apiInstance.cancelSubscription(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | [**string**] | id of the subscription you want to cancel | defaults to undefined
 **tROrganization** | [**string**] | The organization id to use for the request | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Confirmation that the subscription was cancelled |  -  |
**400** | Service error relating to creating a URL for a stripe checkout page |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **directToPaymentLink**
> directToPaymentLink()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StripeApi(configuration);

let body:.StripeApiDirectToPaymentLinkRequest = {
  // string | id of the plan you want to subscribe to
  planId: "plan_id_example",
  // string | id of the organization you want to subscribe to the plan
  organizationId: "organization_id_example",
};

apiInstance.directToPaymentLink(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **planId** | [**string**] | id of the plan you want to subscribe to | defaults to undefined
 **organizationId** | [**string**] | id of the organization you want to subscribe to the plan | defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**303** | SeeOther response redirecting user to stripe checkout page |  -  |
**400** | Service error relating to creating a URL for a stripe checkout page |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAllPlans**
> Array<StripePlan> getAllPlans()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StripeApi(configuration);

let body:any = {};

apiInstance.getAllPlans(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<StripePlan>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of all plans |  -  |
**400** | Service error relating to getting all plans |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateSubscriptionPlan**
> void updateSubscriptionPlan()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StripeApi(configuration);

let body:.StripeApiUpdateSubscriptionPlanRequest = {
  // string | id of the subscription you want to update
  subscriptionId: "subscription_id_example",
  // string | id of the plan you want to subscribe to
  planId: "plan_id_example",
  // string | The organization id to use for the request
  tROrganization: "TR-Organization_example",
};

apiInstance.updateSubscriptionPlan(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | [**string**] | id of the subscription you want to update | defaults to undefined
 **planId** | [**string**] | id of the plan you want to subscribe to | defaults to undefined
 **tROrganization** | [**string**] | The organization id to use for the request | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Confirmation that the subscription was updated to the new plan |  -  |
**400** | Service error relating to updating the subscription to the new plan |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


