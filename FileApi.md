# .FileApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteFileHandler**](FileApi.md#deleteFileHandler) | **DELETE** /api/file/{file_id} | delete_file
[**getFileHandler**](FileApi.md#getFileHandler) | **GET** /api/file/{file_id} | get_file
[**getImageFile**](FileApi.md#getImageFile) | **GET** /api/image/{file_name} | get_image_file
[**uploadFileHandler**](FileApi.md#uploadFileHandler) | **POST** /api/file | upload_file


# **deleteFileHandler**
> void deleteFileHandler()

delete_file  Delete a file from S3 attached to the server based on its id. This will disassociate chunks from the file, but will not delete the chunks. We plan to add support for deleting chunks in a release soon. Auth\'ed user must be an admin or owner of the dataset\'s organization to upload a file.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FileApi(configuration);

let body:.FileApiDeleteFileHandlerRequest = {
  // string | The id of the file to delete
  fileId: "file_id_example",
  // string | The dataset id to use for the request
  tRDataset: "TR-Dataset_example",
};

apiInstance.deleteFileHandler(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileId** | [**string**] | The id of the file to delete | defaults to undefined
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
**204** | Confirmation that the file has been deleted |  -  |
**400** | Service error relating to finding or deleting the file |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getFileHandler**
> FileDTO getFileHandler()

get_file  Download a file from S3 attached to the server based on its id. We plan to add support for getting signed S3 URLs to download from S3 directly in a release soon.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FileApi(configuration);

let body:.FileApiGetFileHandlerRequest = {
  // string | The id of the file to fetch
  fileId: "file_id_example",
  // string | The dataset id to use for the request
  tRDataset: "TR-Dataset_example",
};

apiInstance.getFileHandler(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileId** | [**string**] | The id of the file to fetch | defaults to undefined
 **tRDataset** | [**string**] | The dataset id to use for the request | defaults to undefined


### Return type

**FileDTO**

### Authorization

[Cookie](README.md#Cookie), [ApiKey](README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The signed s3 url corresponding to the file_id requested |  -  |
**400** | Service error relating to finding the file |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getImageFile**
> void getImageFile()

get_image_file  We strongly recommend not using this endpoint. It is disabled on the managed version and only meant for niche on-prem use cases where an image directory is mounted. Get in touch with us thru information on docs.trieve.ai for more information.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FileApi(configuration);

let body:.FileApiGetImageFileRequest = {
  // string | The name of the image file to return
  fileName: "file_name_example",
  // string | The dataset id to use for the request
  tRDataset: "TR-Dataset_example",
};

apiInstance.getImageFile(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileName** | [**string**] | The name of the image file to return | defaults to undefined
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
**200** | The raw image file corresponding to the file_name requested such that it can be a src for an img tag |  -  |
**400** | Service error relating to finding the file |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **uploadFileHandler**
> UploadFileResult uploadFileHandler(uploadFileData)

upload_file  Upload a file to S3 attached to the server. The file will be converted to HTML with tika and chunked algorithmically, images will be OCR\'ed with tesseract. The resulting chunks will be indexed and searchable. Optionally, you can only upload the file and manually create chunks associated to the file after. See docs.trieve.ai and/or contact us for more details and tips. Auth\'ed user must be an admin or owner of the dataset\'s organization to upload a file.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FileApi(configuration);

let body:.FileApiUploadFileHandlerRequest = {
  // string | The dataset id to use for the request
  tRDataset: "TR-Dataset_example",
  // UploadFileData | JSON request payload to upload a file
  uploadFileData: {
    base64File: "base64File_example",
    createChunks: true,
    description: "description_example",
    fileMimeType: "fileMimeType_example",
    fileName: "fileName_example",
    link: "link_example",
    metadata: null,
    tagSet: "tagSet_example",
    timeStamp: "timeStamp_example",
  },
};

apiInstance.uploadFileHandler(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uploadFileData** | **UploadFileData**| JSON request payload to upload a file |
 **tRDataset** | [**string**] | The dataset id to use for the request | defaults to undefined


### Return type

**UploadFileResult**

### Authorization

[Cookie](README.md#Cookie), [ApiKey](README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Confirmation that the file is uploading |  -  |
**400** | Service error relating to uploading the file |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


