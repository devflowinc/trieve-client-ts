# .DatasetApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDataset**](DatasetApi.md#createDataset) | **POST** /api/dataset | create_dataset
[**deleteDataset**](DatasetApi.md#deleteDataset) | **DELETE** /api/dataset | delete_dataset
[**getClientDatasetConfig**](DatasetApi.md#getClientDatasetConfig) | **GET** /api/dataset/envs | get_client_dataset_config
[**getDataset**](DatasetApi.md#getDataset) | **GET** /api/dataset/{dataset_id} | get_dataset
[**getDatasetsFromOrganization**](DatasetApi.md#getDatasetsFromOrganization) | **GET** /api/dataset/organization/{organization_id} | get_organization_datasets
[**updateDataset**](DatasetApi.md#updateDataset) | **PUT** /api/dataset | update_dataset


# **createDataset**
> Dataset createDataset(createDatasetRequest)

create_dataset  Create a new dataset. The auth\'ed user must be an owner of the organization to create a dataset.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DatasetApi(configuration);

let body:.DatasetApiCreateDatasetRequest = {
  // string | The organization id to use for the request
  tROrganization: "TR-Organization_example",
  // CreateDatasetRequest | JSON request payload to create a new dataset
  createDatasetRequest: {
    clientConfiguration: null,
    datasetName: "datasetName_example",
    organizationId: "organizationId_example",
    serverConfiguration: null,
  },
};

apiInstance.createDataset(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createDatasetRequest** | **CreateDatasetRequest**| JSON request payload to create a new dataset |
 **tROrganization** | [**string**] | The organization id to use for the request | defaults to undefined


### Return type

**Dataset**

### Authorization

[Cookie](README.md#Cookie), [ApiKey](README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Dataset created successfully |  -  |
**400** | Service error relating to creating the dataset |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteDataset**
> void deleteDataset(deleteDatasetRequest)

delete_dataset  Delete a dataset. The auth\'ed user must be an owner of the organization to delete a dataset.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DatasetApi(configuration);

let body:.DatasetApiDeleteDatasetRequest = {
  // string | The organization id to use for the request
  tROrganization: "TR-Organization_example",
  // DeleteDatasetRequest | JSON request payload to delete a dataset
  deleteDatasetRequest: {
    datasetId: "datasetId_example",
  },
};

apiInstance.deleteDataset(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteDatasetRequest** | **DeleteDatasetRequest**| JSON request payload to delete a dataset |
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
**204** | Dataset deleted successfully |  -  |
**400** | Service error relating to deleting the dataset |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getClientDatasetConfig**
> ClientDatasetConfiguration getClientDatasetConfig()

get_client_dataset_config  Get the client configuration for a dataset. Will use the TR-D

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DatasetApi(configuration);

let body:.DatasetApiGetClientDatasetConfigRequest = {
  // string | The dataset id to use for the request
  tRDataset: "TR-Dataset_example",
};

apiInstance.getClientDatasetConfig(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tRDataset** | [**string**] | The dataset id to use for the request | defaults to undefined


### Return type

**ClientDatasetConfiguration**

### Authorization

[Cookie](README.md#Cookie), [ApiKey](README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Dataset environment variables |  -  |
**400** | Service error relating to retrieving the dataset. Typically this only happens when your auth credentials are invalid. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getDataset**
> Dataset getDataset()

get_dataset  Get a dataset by id. The auth\'ed user must be an admin or owner of the organization to get a dataset.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DatasetApi(configuration);

let body:.DatasetApiGetDatasetRequest = {
  // string | The id of the dataset you want to retrieve.
  datasetId: "dataset_id_example",
  // string | The organization id to use for the request
  tROrganization: "TR-Organization_example",
  // string | The dataset id to use for the request
  tRDataset: "TR-Dataset_example",
};

apiInstance.getDataset(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **datasetId** | [**string**] | The id of the dataset you want to retrieve. | defaults to undefined
 **tROrganization** | [**string**] | The organization id to use for the request | defaults to undefined
 **tRDataset** | [**string**] | The dataset id to use for the request | defaults to undefined


### Return type

**Dataset**

### Authorization

[Cookie](README.md#Cookie), [ApiKey](README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Dataset retrieved successfully |  -  |
**400** | Service error relating to retrieving the dataset |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getDatasetsFromOrganization**
> Array<DatasetAndUsage> getDatasetsFromOrganization()

get_organization_datasets  Get all datasets for an organization. The auth\'ed user must be an admin or owner of the organization to get its datasets.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DatasetApi(configuration);

let body:.DatasetApiGetDatasetsFromOrganizationRequest = {
  // string | id of the organization you want to retrieve datasets for
  organizationId: "organization_id_example",
  // string | The organization id to use for the request
  tROrganization: "TR-Organization_example",
};

apiInstance.getDatasetsFromOrganization(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | id of the organization you want to retrieve datasets for | defaults to undefined
 **tROrganization** | [**string**] | The organization id to use for the request | defaults to undefined


### Return type

**Array<DatasetAndUsage>**

### Authorization

[Cookie](README.md#Cookie), [ApiKey](README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Datasets retrieved successfully |  -  |
**400** | Service error relating to retrieving the dataset |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateDataset**
> Dataset updateDataset(updateDatasetRequest)

update_dataset  Update a dataset. The auth\'ed user must be an owner of the organization to update a dataset.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DatasetApi(configuration);

let body:.DatasetApiUpdateDatasetRequest = {
  // string | The organization id to use for the request
  tROrganization: "TR-Organization_example",
  // UpdateDatasetRequest | JSON request payload to update a dataset
  updateDatasetRequest: {
    clientConfiguration: null,
    datasetId: "datasetId_example",
    datasetName: "datasetName_example",
    serverConfiguration: null,
  },
};

apiInstance.updateDataset(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateDatasetRequest** | **UpdateDatasetRequest**| JSON request payload to update a dataset |
 **tROrganization** | [**string**] | The organization id to use for the request | defaults to undefined


### Return type

**Dataset**

### Authorization

[Cookie](README.md#Cookie), [ApiKey](README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Dataset updated successfully |  -  |
**400** | Service error relating to updating the dataset |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


