// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CreateTopicData } from '../models/CreateTopicData';
import { DefaultError } from '../models/DefaultError';
import { DeleteTopicData } from '../models/DeleteTopicData';
import { Topic } from '../models/Topic';
import { UpdateTopicData } from '../models/UpdateTopicData';

/**
 * no description
 */
export class TopicApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * create_topic  Create a new chat topic. Topics are attached to a user and act as a coordinator for memory of gen-AI chat sessions. We are considering refactoring this resource of the API soon.
     * create_topic
     * @param tRDataset The dataset id to use for the request
     * @param createTopicData JSON request payload to create chat topic
     */
    public async createTopic(tRDataset: string, createTopicData: CreateTopicData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tRDataset' is not null or undefined
        if (tRDataset === null || tRDataset === undefined) {
            throw new RequiredError("TopicApi", "createTopic", "tRDataset");
        }


        // verify required parameter 'createTopicData' is not null or undefined
        if (createTopicData === null || createTopicData === undefined) {
            throw new RequiredError("TopicApi", "createTopic", "createTopicData");
        }


        // Path Params
        const localVarPath = '/api/topic';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("TR-Dataset", ObjectSerializer.serialize(tRDataset, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createTopicData, "CreateTopicData", ""),
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
     * delete_topic  Delete an existing chat topic. When a topic is deleted, all associated chat messages are also deleted.
     * delete_topic
     * @param tRDataset The dataset id to use for the request
     * @param deleteTopicData JSON request payload to delete a chat topic
     */
    public async deleteTopic(tRDataset: string, deleteTopicData: DeleteTopicData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tRDataset' is not null or undefined
        if (tRDataset === null || tRDataset === undefined) {
            throw new RequiredError("TopicApi", "deleteTopic", "tRDataset");
        }


        // verify required parameter 'deleteTopicData' is not null or undefined
        if (deleteTopicData === null || deleteTopicData === undefined) {
            throw new RequiredError("TopicApi", "deleteTopic", "deleteTopicData");
        }


        // Path Params
        const localVarPath = '/api/topic';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("TR-Dataset", ObjectSerializer.serialize(tRDataset, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(deleteTopicData, "DeleteTopicData", ""),
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
     * get_all_topics_for_user  Get all topics belonging to a the auth\'ed user. Soon, we plan to allow specification of the user for this route and include pagination.
     * get_all_topics_for_user
     * @param userId The id of the user to get topics for
     * @param tRDataset The dataset id to use for the request
     */
    public async getAllTopicsForUser(userId: string, tRDataset: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("TopicApi", "getAllTopicsForUser", "userId");
        }


        // verify required parameter 'tRDataset' is not null or undefined
        if (tRDataset === null || tRDataset === undefined) {
            throw new RequiredError("TopicApi", "getAllTopicsForUser", "tRDataset");
        }


        // Path Params
        const localVarPath = '/api/topic/user/{user_id}'
            .replace('{' + 'user_id' + '}', encodeURIComponent(String(userId)));

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
     * update_topic  Update an existing chat topic. Currently, only the name of the topic can be updated.
     * update_topic
     * @param tRDataset The dataset id to use for the request
     * @param updateTopicData JSON request payload to update a chat topic
     */
    public async updateTopic(tRDataset: string, updateTopicData: UpdateTopicData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tRDataset' is not null or undefined
        if (tRDataset === null || tRDataset === undefined) {
            throw new RequiredError("TopicApi", "updateTopic", "tRDataset");
        }


        // verify required parameter 'updateTopicData' is not null or undefined
        if (updateTopicData === null || updateTopicData === undefined) {
            throw new RequiredError("TopicApi", "updateTopic", "updateTopicData");
        }


        // Path Params
        const localVarPath = '/api/topic';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("TR-Dataset", ObjectSerializer.serialize(tRDataset, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateTopicData, "UpdateTopicData", ""),
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

export class TopicApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createTopic
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createTopicWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Topic >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Topic = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Topic", ""
            ) as Topic;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: DefaultError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DefaultError", ""
            ) as DefaultError;
            throw new ApiException<DefaultError>(response.httpStatusCode, "Topic name empty or a service error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Topic = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Topic", ""
            ) as Topic;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteTopic
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteTopicWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: DefaultError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DefaultError", ""
            ) as DefaultError;
            throw new ApiException<DefaultError>(response.httpStatusCode, "Service error relating to topic deletion", body, response.headers);
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
     * @params response Response returned by the server for a request to getAllTopicsForUser
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllTopicsForUserWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Topic> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Topic> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Topic>", ""
            ) as Array<Topic>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: DefaultError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DefaultError", ""
            ) as DefaultError;
            throw new ApiException<DefaultError>(response.httpStatusCode, "Service error relating to topic get", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Topic> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Topic>", ""
            ) as Array<Topic>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateTopic
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateTopicWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: DefaultError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DefaultError", ""
            ) as DefaultError;
            throw new ApiException<DefaultError>(response.httpStatusCode, "Service error relating to topic update", body, response.headers);
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

}
