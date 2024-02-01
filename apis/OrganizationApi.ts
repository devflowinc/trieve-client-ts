// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CreateOrganizationData } from '../models/CreateOrganizationData';
import { DefaultError } from '../models/DefaultError';
import { Organization } from '../models/Organization';
import { OrganizationUsageCount } from '../models/OrganizationUsageCount';
import { SlimUser } from '../models/SlimUser';
import { UpdateOrganizationData } from '../models/UpdateOrganizationData';

/**
 * no description
 */
export class OrganizationApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * create_organization  Create a new organization. The auth\'ed user who creates the organization will be the default owner of the organization.
     * create_organization
     * @param createOrganizationData The organization data that you want to create
     */
    public async createOrganization(createOrganizationData: CreateOrganizationData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createOrganizationData' is not null or undefined
        if (createOrganizationData === null || createOrganizationData === undefined) {
            throw new RequiredError("OrganizationApi", "createOrganization", "createOrganizationData");
        }


        // Path Params
        const localVarPath = '/api/organization';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createOrganizationData, "CreateOrganizationData", ""),
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
     * get_organization  Fetch the details of an organization by its id. The auth\'ed user must be an admin or owner of the organization to fetch it.
     * get_organization
     * @param organizationId The id of the organization you want to fetch.
     * @param tROrganization The organization id to use for the request
     */
    public async getOrganizationById(organizationId: string, tROrganization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("OrganizationApi", "getOrganizationById", "organizationId");
        }


        // verify required parameter 'tROrganization' is not null or undefined
        if (tROrganization === null || tROrganization === undefined) {
            throw new RequiredError("OrganizationApi", "getOrganizationById", "tROrganization");
        }


        // Path Params
        const localVarPath = '/api/organization/{organization_id}'
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
     * get_organization_usage  Fetch the current usage specification of an organization by its id. The auth\'ed user must be an admin or owner of the organization to fetch it.
     * get_organization_usage
     * @param organizationId The id of the organization you want to fetch the usage of.
     * @param tROrganization The organization id to use for the request
     */
    public async getOrganizationUsage(organizationId: string, tROrganization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("OrganizationApi", "getOrganizationUsage", "organizationId");
        }


        // verify required parameter 'tROrganization' is not null or undefined
        if (tROrganization === null || tROrganization === undefined) {
            throw new RequiredError("OrganizationApi", "getOrganizationUsage", "tROrganization");
        }


        // Path Params
        const localVarPath = '/api/organization/usage/{organization_id}'
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
     * get_organization_users  Fetch the users of an organization by its id. The auth\'ed user must be an admin or owner of the organization to fetch it.
     * get_organization_users
     * @param organizationId The id of the organization you want to fetch the users of.
     * @param tROrganization The organization id to use for the request
     */
    public async getOrganizationUsers(organizationId: string, tROrganization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("OrganizationApi", "getOrganizationUsers", "organizationId");
        }


        // verify required parameter 'tROrganization' is not null or undefined
        if (tROrganization === null || tROrganization === undefined) {
            throw new RequiredError("OrganizationApi", "getOrganizationUsers", "tROrganization");
        }


        // Path Params
        const localVarPath = '/api/organization/users/{organization_id}'
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
     * update_organization  Update an organization. Only the owner of the organization can update it.
     * update_organization
     * @param tROrganization The organization id to use for the request
     * @param updateOrganizationData The organization data that you want to update
     */
    public async updateOrganization(tROrganization: string, updateOrganizationData: UpdateOrganizationData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tROrganization' is not null or undefined
        if (tROrganization === null || tROrganization === undefined) {
            throw new RequiredError("OrganizationApi", "updateOrganization", "tROrganization");
        }


        // verify required parameter 'updateOrganizationData' is not null or undefined
        if (updateOrganizationData === null || updateOrganizationData === undefined) {
            throw new RequiredError("OrganizationApi", "updateOrganization", "updateOrganizationData");
        }


        // Path Params
        const localVarPath = '/api/organization';

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
            ObjectSerializer.serialize(updateOrganizationData, "UpdateOrganizationData", ""),
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

export class OrganizationApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createOrganization
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createOrganizationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Organization >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Organization = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Organization", ""
            ) as Organization;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: DefaultError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DefaultError", ""
            ) as DefaultError;
            throw new ApiException<DefaultError>(response.httpStatusCode, "Service error relating to creating the organization", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Organization = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Organization", ""
            ) as Organization;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOrganizationById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getOrganizationByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Organization >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Organization = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Organization", ""
            ) as Organization;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: DefaultError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DefaultError", ""
            ) as DefaultError;
            throw new ApiException<DefaultError>(response.httpStatusCode, "Service error relating to finding the organization by id", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Organization = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Organization", ""
            ) as Organization;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOrganizationUsage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getOrganizationUsageWithHttpInfo(response: ResponseContext): Promise<HttpInfo<OrganizationUsageCount >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OrganizationUsageCount = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrganizationUsageCount", ""
            ) as OrganizationUsageCount;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: DefaultError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DefaultError", ""
            ) as DefaultError;
            throw new ApiException<DefaultError>(response.httpStatusCode, "Service error relating to finding the organization\&#39;s usage by id", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OrganizationUsageCount = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrganizationUsageCount", ""
            ) as OrganizationUsageCount;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOrganizationUsers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getOrganizationUsersWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<SlimUser> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<SlimUser> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<SlimUser>", ""
            ) as Array<SlimUser>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: DefaultError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DefaultError", ""
            ) as DefaultError;
            throw new ApiException<DefaultError>(response.httpStatusCode, "Service error relating to finding the organization\&#39;s users by id", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<SlimUser> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<SlimUser>", ""
            ) as Array<SlimUser>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateOrganization
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateOrganizationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Organization >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Organization = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Organization", ""
            ) as Organization;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: DefaultError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DefaultError", ""
            ) as DefaultError;
            throw new ApiException<DefaultError>(response.httpStatusCode, "Service error relating to updating the organization", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Organization = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Organization", ""
            ) as Organization;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
