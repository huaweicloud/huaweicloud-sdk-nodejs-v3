import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { ChatChoice } from './model/ChatChoice';
import { ChatCompletionReq } from './model/ChatCompletionReq';
import { CompletionUsage } from './model/CompletionUsage';
import { ExecuteChatCompletionRequest } from './model/ExecuteChatCompletionRequest';
import { ExecuteChatCompletionResponse } from './model/ExecuteChatCompletionResponse';
import { ExecuteTextCompletionRequest } from './model/ExecuteTextCompletionRequest';
import { ExecuteTextCompletionResponse } from './model/ExecuteTextCompletionResponse';
import { Message } from './model/Message';
import { MessageItem } from './model/MessageItem';
import { TextChoice } from './model/TextChoice';
import { TextCompletionReq } from './model/TextCompletionReq';

export class PanguLargeModelsClient {
    public static newBuilder(): ClientBuilder<PanguLargeModelsClient> {
            return new ClientBuilder<PanguLargeModelsClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 基于对话问答功能，用户可以与模型进行自然而流畅的对话和交流。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 对话问答
     * @param {string} deploymentId 模型的部署ID
     * @param {ChatCompletionReq} executeTextCompletionRequestBody 通用文本请求
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeChatCompletion(executeChatCompletionRequest?: ExecuteChatCompletionRequest): Promise<ExecuteChatCompletionResponse> {
        const options = ParamCreater().executeChatCompletion(executeChatCompletionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 给定一个提示和一些参数，模型会根据这些信息生成一个或多个预测的补全，还可以返回每个位置上不同词语的概率。它可以用来做文本生成、自动写作、代码补全等任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 通用文本
     * @param {string} deploymentId 模型的部署ID
     * @param {TextCompletionReq} executeTextCompletionRequestBody 通用文本请求
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeTextCompletion(executeTextCompletionRequest?: ExecuteTextCompletionRequest): Promise<ExecuteTextCompletionResponse> {
        const options = ParamCreater().executeTextCompletion(executeTextCompletionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 基于对话问答功能，用户可以与模型进行自然而流畅的对话和交流。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeChatCompletion(executeChatCompletionRequest?: ExecuteChatCompletionRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/deployments/{deployment_id}/chat/completions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let deploymentId;

            if (executeChatCompletionRequest !== null && executeChatCompletionRequest !== undefined) {
                if (executeChatCompletionRequest instanceof ExecuteChatCompletionRequest) {
                    deploymentId = executeChatCompletionRequest.deploymentId;
                    body = executeChatCompletionRequest.body
                } else {
                    deploymentId = executeChatCompletionRequest['deployment_id'];
                    body = executeChatCompletionRequest['body'];
                }
            }

        
            if (deploymentId === null || deploymentId === undefined) {
            throw new RequiredError('deploymentId','Required parameter deploymentId was null or undefined when calling executeChatCompletion.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'deployment_id': deploymentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 给定一个提示和一些参数，模型会根据这些信息生成一个或多个预测的补全，还可以返回每个位置上不同词语的概率。它可以用来做文本生成、自动写作、代码补全等任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeTextCompletion(executeTextCompletionRequest?: ExecuteTextCompletionRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/deployments/{deployment_id}/text/completions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let deploymentId;

            if (executeTextCompletionRequest !== null && executeTextCompletionRequest !== undefined) {
                if (executeTextCompletionRequest instanceof ExecuteTextCompletionRequest) {
                    deploymentId = executeTextCompletionRequest.deploymentId;
                    body = executeTextCompletionRequest.body
                } else {
                    deploymentId = executeTextCompletionRequest['deployment_id'];
                    body = executeTextCompletionRequest['body'];
                }
            }

        
            if (deploymentId === null || deploymentId === undefined) {
            throw new RequiredError('deploymentId','Required parameter deploymentId was null or undefined when calling executeTextCompletion.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'deployment_id': deploymentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): PanguLargeModelsClient {
    return new PanguLargeModelsClient(client);
}

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name: "RequiredError" = "RequiredError";
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}