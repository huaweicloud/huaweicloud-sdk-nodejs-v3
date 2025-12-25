import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
import FormData from 'form-data';

import { AgentRunReq } from './model/AgentRunReq';
import { Conversation } from './model/Conversation';
import { FeedbackReason } from './model/FeedbackReason';
import { KnowledgeBaseRetrievalReq } from './model/KnowledgeBaseRetrievalReq';
import { Message } from './model/Message';
import { NodeMessage } from './model/NodeMessage';
import { NodeRunInfo } from './model/NodeRunInfo';
import { NodeRunInfoInnerError } from './model/NodeRunInfoInnerError';
import { NodeRunInfoInnerErrorErrorBody } from './model/NodeRunInfoInnerErrorErrorBody';
import { PluginConfig } from './model/PluginConfig';
import { RetrievalResultInfo } from './model/RetrievalResultInfo';
import { RunAgentRequest } from './model/RunAgentRequest';
import { RunAgentResponse } from './model/RunAgentResponse';
import { RunWorkflowRequest } from './model/RunWorkflowRequest';
import { RunWorkflowResponse } from './model/RunWorkflowResponse';
import { SearchKnowledgeBaseRequest } from './model/SearchKnowledgeBaseRequest';
import { SearchKnowledgeBaseResponse } from './model/SearchKnowledgeBaseResponse';
import { Status } from './model/Status';
import { UploadAgentFileRequest } from './model/UploadAgentFileRequest';
import { UploadAgentFileRequestBody } from './model/UploadAgentFileRequestBody';
import { UploadAgentFileResponse } from './model/UploadAgentFileResponse';
import { UserProfile } from './model/UserProfile';
import { WorkflowRunReq } from './model/WorkflowRunReq';
import { WorkflowRunStreamRsp } from './model/WorkflowRunStreamRsp';

export class VersatileClient {
    public static newBuilder(): ClientBuilder<VersatileClient> {
            let client = new ClientBuilder<VersatileClient>(newClient);
            return client;
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 提供多知识库并行检索能力，支持语义、关键词、混合及FAQ四种检索模式，并允许自定义相似度阈值与返回结果数量，实现精准高效的信息匹配。
     * 
     * **适用场景**：
     * - 同时从多个知识库或文档集合中搜索相关内容。
     * - 在预设的问答列表中快速定位最相关的答案（FAQ检索）。
     * - 通过混合模式或调整阈值，兼顾搜索结果的准确性和全面性。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 知识库检索
     * @param {KnowledgeBaseRetrievalReq} knowledgeBaseRetrievalReq 知识库检索请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchKnowledgeBase(searchKnowledgeBaseRequest?: SearchKnowledgeBaseRequest): Promise<SearchKnowledgeBaseResponse> {
        const options = ParamCreater().searchKnowledgeBase(searchKnowledgeBaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 运行一个智能体，支持流式和非流式
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 运行一个智能体
     * @param {string} agentId **参数解释**： 智能体ID  **取值范围**： 由英文，数字，“-”，“_”组成，不超过64位字符。
     * @param {string} conversationId **参数解释**： 会话ID，历史对话记忆功能基于同一个会话  **取值范围**： 由英文，数字，“-”，“_”组成，不超过64位字符。
     * @param {AgentRunReq} agentRunReq 智能体运行入参
     * @param {string} [workspaceId] **参数解释**： 空间ID，当前资源所属工作空间  **取值范围**： 由英文，数字，“-”，“_”组成，不超过64位字符。
     * @param {string} [version] **参数解释**： 运行的智能体/工作流的发布版本号，默认运行最新发布版本  **取值范围**： 不涉及
     * @param {string} [type] **参数解释**： 指定运行的智能体是单智能体还是多智能体，默认 agent  **取值范围**： agent, controller
     * @param {boolean} [stream] **参数解释**： 是否流式响应  **取值范围**： true,false（不传默认 true，支持流式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runAgent(runAgentRequest?: RunAgentRequest): Promise<RunAgentResponse> {
        const options = ParamCreater().runAgent(runAgentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 运行一个工作流，支持流式和非流式
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 运行一个工作流
     * @param {string} workflowId **参数解释**： 工作流ID  **取值范围**： 由英文，数字，“-”，“_”组成，不超过64位字符。
     * @param {string} conversationId **参数解释**： 会话ID，历史对话记忆功能基于同一个会话  **取值范围**： 由英文，数字，“-”，“_”组成，不超过64位字符。
     * @param {WorkflowRunReq} workflowRunReq 工作流运行入参
     * @param {string} [workspaceId] **参数解释**： 空间ID，当前资源所属工作空间  **取值范围**： 由英文，数字，“-”，“_”组成，不超过64位字符。
     * @param {string} [version] **参数解释**： 运行的智能体/工作流的发布版本号，默认运行最新发布版本  **取值范围**： 不涉及
     * @param {boolean} [stream] **参数解释**： 是否流式响应  **取值范围**： true,false（不传默认 true，支持流式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runWorkflow(runWorkflowRequest?: RunWorkflowRequest): Promise<RunWorkflowResponse> {
        const options = ParamCreater().runWorkflow(runWorkflowRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 上传文件，以供agent或者工作流使用
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 上传文件
     * @param {string} workspaceId **参数解释**： 空间ID，当前资源所属工作空间  **取值范围**： 由英文，数字，“-”，“_”组成，不超过64位字符
     * @param {any} file 待上传的文件
     * @param {number} [expires] 访问授权过期时间（天）
     * @param {boolean} [isImage] 是否是图片上传
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public uploadAgentFile(uploadAgentFileRequest?: UploadAgentFileRequest): Promise<UploadAgentFileResponse> {
        const options = ParamCreater().uploadAgentFile(uploadAgentFileRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 提供多知识库并行检索能力，支持语义、关键词、混合及FAQ四种检索模式，并允许自定义相似度阈值与返回结果数量，实现精准高效的信息匹配。
         * 
         * **适用场景**：
         * - 同时从多个知识库或文档集合中搜索相关内容。
         * - 在预设的问答列表中快速定位最相关的答案（FAQ检索）。
         * - 通过混合模式或调整阈值，兼顾搜索结果的准确性和全面性。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchKnowledgeBase(searchKnowledgeBaseRequest?: SearchKnowledgeBaseRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/knowledge-bases/retrieve",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (searchKnowledgeBaseRequest !== null && searchKnowledgeBaseRequest !== undefined) {
                if (searchKnowledgeBaseRequest instanceof SearchKnowledgeBaseRequest) {
                    body = searchKnowledgeBaseRequest.body
                } else {
                    body = searchKnowledgeBaseRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 运行一个智能体，支持流式和非流式
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        runAgent(runAgentRequest?: RunAgentRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/agents/{agent_id}/conversations/{conversation_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let agentId;
            
            let conversationId;
            
            let workspaceId;
            
            let version;
            
            let type;
            
            let stream;

            if (runAgentRequest !== null && runAgentRequest !== undefined) {
                if (runAgentRequest instanceof RunAgentRequest) {
                    agentId = runAgentRequest.agentId;
                    conversationId = runAgentRequest.conversationId;
                    body = runAgentRequest.body
                    workspaceId = runAgentRequest.workspaceId;
                    version = runAgentRequest.version;
                    type = runAgentRequest.type;
                    stream = runAgentRequest.stream;
                } else {
                    agentId = runAgentRequest['agent_id'];
                    conversationId = runAgentRequest['conversation_id'];
                    body = runAgentRequest['body'];
                    workspaceId = runAgentRequest['workspace_id'];
                    version = runAgentRequest['version'];
                    type = runAgentRequest['type'];
                    stream = runAgentRequest['stream'];
                }
            }

        
            if (agentId === null || agentId === undefined) {
            throw new RequiredError('agentId','Required parameter agentId was null or undefined when calling runAgent.');
            }
            if (conversationId === null || conversationId === undefined) {
            throw new RequiredError('conversationId','Required parameter conversationId was null or undefined when calling runAgent.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspaceId !== null && workspaceId !== undefined) {
                localVarQueryParameter['workspace_id'] = workspaceId;
            }
            if (version !== null && version !== undefined) {
                localVarQueryParameter['version'] = version;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (stream !== undefined && stream !== null) {
                localVarHeaderParameter['stream'] = String(stream);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'agent_id': agentId,'conversation_id': conversationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 运行一个工作流，支持流式和非流式
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        runWorkflow(runWorkflowRequest?: RunWorkflowRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/workflows/{workflow_id}/conversations/{conversation_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let workflowId;
            
            let conversationId;
            
            let workspaceId;
            
            let version;
            
            let stream;

            if (runWorkflowRequest !== null && runWorkflowRequest !== undefined) {
                if (runWorkflowRequest instanceof RunWorkflowRequest) {
                    workflowId = runWorkflowRequest.workflowId;
                    conversationId = runWorkflowRequest.conversationId;
                    body = runWorkflowRequest.body
                    workspaceId = runWorkflowRequest.workspaceId;
                    version = runWorkflowRequest.version;
                    stream = runWorkflowRequest.stream;
                } else {
                    workflowId = runWorkflowRequest['workflow_id'];
                    conversationId = runWorkflowRequest['conversation_id'];
                    body = runWorkflowRequest['body'];
                    workspaceId = runWorkflowRequest['workspace_id'];
                    version = runWorkflowRequest['version'];
                    stream = runWorkflowRequest['stream'];
                }
            }

        
            if (workflowId === null || workflowId === undefined) {
            throw new RequiredError('workflowId','Required parameter workflowId was null or undefined when calling runWorkflow.');
            }
            if (conversationId === null || conversationId === undefined) {
            throw new RequiredError('conversationId','Required parameter conversationId was null or undefined when calling runWorkflow.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspaceId !== null && workspaceId !== undefined) {
                localVarQueryParameter['workspace_id'] = workspaceId;
            }
            if (version !== null && version !== undefined) {
                localVarQueryParameter['version'] = version;
            }
            if (stream !== undefined && stream !== null) {
                localVarHeaderParameter['stream'] = String(stream);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'workflow_id': workflowId,'conversation_id': conversationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 上传文件，以供agent或者工作流使用
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        uploadAgentFile(uploadAgentFileRequest?: UploadAgentFileRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/agent-runtime/upload-file",
                contentType: "multipart/form-data",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();
            
            let workspaceId;
            let file;
            
            
            let expires;
            
            let isImage;

            if (uploadAgentFileRequest !== null && uploadAgentFileRequest !== undefined) {
                if (uploadAgentFileRequest instanceof UploadAgentFileRequest) {
                    workspaceId = uploadAgentFileRequest.workspaceId;
                    file = uploadAgentFileRequest.body?.file;
                    expires = uploadAgentFileRequest.expires;
                    isImage = uploadAgentFileRequest.isImage;
                } else {
                    workspaceId = uploadAgentFileRequest['workspace_id'];
                    file = uploadAgentFileRequest['body']['file'];
                    expires = uploadAgentFileRequest['expires'];
                    isImage = uploadAgentFileRequest['is_image'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
                throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling uploadAgentFile.');
            }
            if (workspaceId !== null && workspaceId !== undefined) {
                localVarQueryParameter['workspace_id'] = workspaceId;
            }
            if (file === null || file === undefined) {
            throw new RequiredError('file','Required parameter file was null or undefined when calling uploadAgentFile.');
            }
            if (expires !== null && expires !== undefined) {
                localVarQueryParameter['expires'] = expires;
            }
            if (isImage !== null && isImage !== undefined) {
                localVarQueryParameter['is_image'] = isImage;
            }
            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            options.data = localVarFormParams;
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): VersatileClient {
    return new VersatileClient(client);
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