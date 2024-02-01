// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ClientDatasetConfiguration } from '../models/ClientDatasetConfiguration';
import { CreateDatasetRequest } from '../models/CreateDatasetRequest';
import { Dataset } from '../models/Dataset';
import { DatasetAndUsage } from '../models/DatasetAndUsage';
import { DefaultError } from '../models/DefaultError';
import { DeleteDatasetRequest } from '../models/DeleteDatasetRequest';
import { UpdateDatasetRequest } from '../models/UpdateDatasetRequest';

/**
 * no description
 */
export class DatasetApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * create_dataset  Create a new dataset. The auth\'ed user must be an owner of the organization to create a dataset.
     * create_dataset
     * @param tROrganization The organization id to use for the request
     * @param createDatasetRequest JSON request payload to create a new dataset
     */
    public async createDataset(tROrganization: string, createDatasetRequest: CreateDatasetRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tROrganization' is not null or undefined
        if (tROrganization === null || tROrganization === undefined) {
            throw new RequiredError("DatasetApi", "createDataset", "tROrganization");
        }


        // verify required parameter 'createDatasetRequest' is not null or undefined
        if (createDatasetRequest === null || createDatasetRequest === undefined) {
            throw new RequiredError("DatasetApi", "createDataset", "createDatasetRequest");
        }


        // Path Params
        const localVarPath = '/api/dataset';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("TR-Organization", ObjectSerializer.serialize(tROrganization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createDatasetRequest, "CreateDatasetRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["Cookie"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * delete_dataset  Delete a dataset. The auth\'ed user must be an owner of the organization to delete a dataset.
     * delete_dataset
     * @param tROrganization The organization id to use for the request
     * @param deleteDatasetRequest JSON request payload to delete a dataset
     */
    public async deleteDataset(tROrganization: string, deleteDatasetRequest: DeleteDatasetRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tROrganization' is not null or undefined
        if (tROrganization === null || tROrganization === undefined) {
            throw new RequiredError("DatasetApi", "deleteDataset", "tROrganization");
        }


        // verify required parameter 'deleteDatasetRequest' is not null or undefined
        if (deleteDatasetRequest === null || deleteDatasetRequest === undefined) {
            throw new RequiredError("DatasetApi", "deleteDataset", "deleteDatasetRequest");
        }


        // Path Params
        const localVarPath = '/api/dataset';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("TR-Organization", ObjectSerializer.serialize(tROrganization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(deleteDatasetRequest, "DeleteDatasetRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["Cookie"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * get_client_dataset_config  Get the client configuration for a dataset. Will use the TR-D
     * get_client_dataset_config
     * @param tRDataset The dataset id to use for the request
     */
    public async getClientDatasetConfig(tRDataset: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tRDataset' is not null or undefined
        if (tRDataset === null || tRDataset === undefined) {
            throw new RequiredError("DatasetApi", "getClientDatasetConfig", "tRDataset");
        }


        // Path Params
        const localVarPath = '/api/dataset/envs';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("TR-Dataset", ObjectSerializer.serialize(tRDataset, "string", ""));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["Cookie"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * get_dataset  Get a dataset by id. The auth\'ed user must be an admin or owner of the organization to get a dataset.
     * get_dataset
     * @param datasetId The id of the dataset you want to retrieve.
     * @param tROrganization The organization id to use for the request
     * @param tRDataset The dataset id to use for the request
     */
    public async getDataset(datasetId: string, tROrganization: string, tRDataset: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'datasetId' is not null or undefined
        if (datasetId === null || datasetId === undefined) {
            throw new RequiredError("DatasetApi", "getDataset", "datasetId");
        }


        // verify required parameter 'tROrganization' is not null or undefined
        if (tROrganization === null || tROrganization === undefined) {
            throw new RequiredError("DatasetApi", "getDataset", "tROrganization");
        }


        // verify required parameter 'tRDataset' is not null or undefined
        if (tRDataset === null || tRDataset === undefined) {
            throw new RequiredError("DatasetApi", "getDataset", "tRDataset");
        }


        // Path Params
        const localVarPath = '/api/dataset/{dataset_id}'
            .replace('{' + 'dataset_id' + '}', encodeURIComponent(String(datasetId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("TR-Organization", ObjectSerializer.serialize(tROrganization, "string", ""));

        // Header Params
        requestContext.setHeaderParam("TR-Dataset", ObjectSerializer.serialize(tRDataset, "string", ""));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["Cookie"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * get_organization_datasets  Get all datasets for an organization. The auth\'ed user must be an admin or owner of the organization to get its datasets.
     * get_organization_datasets
     * @param organizationId id of the organization you want to retrieve datasets for
     * @param tROrganization The organization id to use for the request
     */
    public async getDatasetsFromOrganization(organizationId: string, tROrganization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("DatasetApi", "getDatasetsFromOrganization", "organizationId");
        }


        // verify required parameter 'tROrganization' is not null or undefined
        if (tROrganization === null || tROrganization === undefined) {
            throw new RequiredError("DatasetApi", "getDatasetsFromOrganization", "tROrganization");
        }


        // Path Params
        const localVarPath = '/api/dataset/organization/{organization_id}'
            .replace('{' + 'organization_id' + '}', encodeURIComponent(String(organizationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("TR-Organization", ObjectSerializer.serialize(tROrganization, "string", ""));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["Cookie"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * update_dataset  Update a dataset. The auth\'ed user must be an owner of the organization to update a dataset.
     * update_dataset
     * @param tROrganization The organization id to use for the request
     * @param updateDatasetRequest JSON request payload to update a dataset
     */
    public async updateDataset(tROrganization: string, updateDatasetRequest: UpdateDatasetRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tROrganization' is not null or undefined
        if (tROrganization === null || tROrganization === undefined) {
            throw new RequiredError("DatasetApi", "updateDataset", "tROrganization");
        }


        // verify required parameter 'updateDatasetRequest' is not null or undefined
        if (updateDatasetRequest === null || updateDatasetRequest === undefined) {
            throw new RequiredError("DatasetApi", "updateDataset", "updateDatasetRequest");
        }


        // Path Params
        const localVarPath = '/api/dataset';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("TR-Organization", ObjectSerializer.serialize(tROrganization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateDatasetRequest, "UpdateDatasetRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["Cookie"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["ApiKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class DatasetApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createDataset
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createDatasetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Dataset >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Dataset = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Dataset", ""
            ) as Dataset;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: DefaultError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DefaultError", ""
            ) as DefaultError;
            throw new ApiException<DefaultError>(response.httpStatusCode, "Service error relating to creating the dataset", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Dataset = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Dataset", ""
            ) as Dataset;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteDataset
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteDatasetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: DefaultError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DefaultError", ""
            ) as DefaultError;
            throw new ApiException<DefaultError>(response.httpStatusCode, "Service error relating to deleting the dataset", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getClientDatasetConfig
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getClientDatasetConfigWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ClientDatasetConfiguration >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ClientDatasetConfiguration = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClientDatasetConfiguration", ""
            ) as ClientDatasetConfiguration;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: DefaultError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DefaultError", ""
            ) as DefaultError;
            throw new ApiException<DefaultError>(response.httpStatusCode, "Service error relating to retrieving the dataset. Typically this only happens when your auth credentials are invalid.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ClientDatasetConfiguration = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClientDatasetConfiguration", ""
            ) as ClientDatasetConfiguration;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDataset
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDatasetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Dataset >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Dataset = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Dataset", ""
            ) as Dataset;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: DefaultError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DefaultError", ""
            ) as DefaultError;
            throw new ApiException<DefaultError>(response.httpStatusCode, "Service error relating to retrieving the dataset", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Dataset = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Dataset", ""
            ) as Dataset;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDatasetsFromOrganization
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDatasetsFromOrganizationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<DatasetAndUsage> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<DatasetAndUsage> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<DatasetAndUsage>", ""
            ) as Array<DatasetAndUsage>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: DefaultError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DefaultError", ""
            ) as DefaultError;
            throw new ApiException<DefaultError>(response.httpStatusCode, "Service error relating to retrieving the dataset", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<DatasetAndUsage> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<DatasetAndUsage>", ""
            ) as Array<DatasetAndUsage>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateDataset
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateDatasetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Dataset >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Dataset = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Dataset", ""
            ) as Dataset;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: DefaultError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DefaultError", ""
            ) as DefaultError;
            throw new ApiException<DefaultError>(response.httpStatusCode, "Service error relating to updating the dataset", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Dataset = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Dataset", ""
            ) as Dataset;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
