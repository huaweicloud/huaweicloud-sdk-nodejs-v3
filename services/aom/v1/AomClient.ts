import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { ApproveInfo } from './model/ApproveInfo';
import { CreateFastExecuteScriptRequest } from './model/CreateFastExecuteScriptRequest';
import { CreateFastExecuteScriptResponse } from './model/CreateFastExecuteScriptResponse';
import { CreateWorkflowRequest } from './model/CreateWorkflowRequest';
import { CreateWorkflowResponse } from './model/CreateWorkflowResponse';
import { ExecuteWorkflowRequest } from './model/ExecuteWorkflowRequest';
import { ExecuteWorkflowResponse } from './model/ExecuteWorkflowResponse';
import { ExecutionResultList } from './model/ExecutionResultList';
import { HISFastScript } from './model/HISFastScript';
import { Job } from './model/Job';
import { ListAllJobByNameRequest } from './model/ListAllJobByNameRequest';
import { ListAllJobByNameResponse } from './model/ListAllJobByNameResponse';
import { ListAllScriptByNameRequest } from './model/ListAllScriptByNameRequest';
import { ListAllScriptByNameResponse } from './model/ListAllScriptByNameResponse';
import { ListAllVersionByVersionIdRequest } from './model/ListAllVersionByVersionIdRequest';
import { ListAllVersionByVersionIdResponse } from './model/ListAllVersionByVersionIdResponse';
import { ListTemplateByJobIdRequest } from './model/ListTemplateByJobIdRequest';
import { ListTemplateByJobIdRequestBody } from './model/ListTemplateByJobIdRequestBody';
import { ListTemplateByJobIdResponse } from './model/ListTemplateByJobIdResponse';
import { ListWorkflowExecutionsRequest } from './model/ListWorkflowExecutionsRequest';
import { ListWorkflowExecutionsResponse } from './model/ListWorkflowExecutionsResponse';
import { ListWorkflowRequest } from './model/ListWorkflowRequest';
import { ListWorkflowResponse } from './model/ListWorkflowResponse';
import { Metadata } from './model/Metadata';
import { Node } from './model/Node';
import { Parameter } from './model/Parameter';
import { RateControl } from './model/RateControl';
import { ReferenceInfo } from './model/ReferenceInfo';
import { Script } from './model/Script';
import { ScriptVersion } from './model/ScriptVersion';
import { SearchJobsRequestBody } from './model/SearchJobsRequestBody';
import { SearchScriptsRequestBody } from './model/SearchScriptsRequestBody';
import { SearchTemplateByIdRequest } from './model/SearchTemplateByIdRequest';
import { SearchTemplateByIdResponse } from './model/SearchTemplateByIdResponse';
import { SearchWorkflowExecutionDetailRequest } from './model/SearchWorkflowExecutionDetailRequest';
import { SearchWorkflowExecutionDetailResponse } from './model/SearchWorkflowExecutionDetailResponse';
import { StartPausingWorkflowExecutionsRequest } from './model/StartPausingWorkflowExecutionsRequest';
import { StartPausingWorkflowExecutionsResponse } from './model/StartPausingWorkflowExecutionsResponse';
import { Step } from './model/Step';
import { StopExecutionRequest } from './model/StopExecutionRequest';
import { StopExecutionResponse } from './model/StopExecutionResponse';
import { TaskParam } from './model/TaskParam';
import { Template } from './model/Template';
import { UpdateWorkflowTriggerStatusRequest } from './model/UpdateWorkflowTriggerStatusRequest';
import { UpdateWorkflowTriggerStatusResponse } from './model/UpdateWorkflowTriggerStatusResponse';
import { WorkFlowModel } from './model/WorkFlowModel';
import { Workflow } from './model/Workflow';
import { WorkflowExecutionBrief } from './model/WorkflowExecutionBrief';
import { WorkflowQueryParam } from './model/WorkflowQueryParam';
import { WorkflowRequestBody } from './model/WorkflowRequestBody';

export class AomClient {
    public static newBuilder(): ClientBuilder<AomClient> {
            return new ClientBuilder<AomClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 该接口用于创建快速执行脚本的任务，可以指定脚本类型，执行用户，脚本参数，执行机器，脚本内容，在用户指定的机器上执行脚本。（注：接口目前开放的region为：华东-苏州二零一）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 快速创建并执行脚本
     * @param {HISFastScript} createFastExecuteScriptRequestBody 创建快速执行脚本任务的实体类。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createFastExecuteScript(createFastExecuteScriptRequest?: CreateFastExecuteScriptRequest): Promise<CreateFastExecuteScriptResponse> {
        const options = ParamCreater().createFastExecuteScript(createFastExecuteScriptRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于创建工作流（任务），返回工作流详情。任务类型取决于模板名称和\&#39;input\&#39;参数。（注：接口目前开放的region为：华北-北京四,华东-上海一,华东-上海二,华南-广州）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建任务
     * @param {WorkflowRequestBody} createWorkflowRequestBody 创建工作流请求消息体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createWorkflow(createWorkflowRequest?: CreateWorkflowRequest): Promise<CreateWorkflowResponse> {
        const options = ParamCreater().createWorkflow(createWorkflowRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可下发执行指定的任务。（注：接口目前开放的region为：华北-北京四,华东-上海一,华东-上海二,华南-广州）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 执行工作流
     * @param {string} workflowId 任务id，从工作流命令列表中获取的工作流id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeWorkflow(executeWorkflowRequest?: ExecuteWorkflowRequest): Promise<ExecuteWorkflowResponse> {
        const options = ParamCreater().executeWorkflow(executeWorkflowRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可查询已创建的作业，可指定作业名称和作业创建人去精确查询，返回作业列表信息。（注：接口目前开放的region为：华北-北京四,华东-上海一,华东-上海二,华南-广州）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 作业管理主页模糊查询
     * @param {SearchJobsRequestBody} listAllJobByNameRequestBody 作业管理请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAllJobByName(listAllJobByNameRequest?: ListAllJobByNameRequest): Promise<ListAllJobByNameResponse> {
        const options = ParamCreater().listAllJobByName(listAllJobByNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口是脚本主页查询，可指定脚本名称和脚本创建人进行精确查询，返回包含脚本基本信息的列表数据。（注：接口目前开放的region为：华北-北京四,华东-上海一,华东-上海二,华南-广州）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 脚本查询
     * @param {SearchScriptsRequestBody} listAllScriptByNameRequestBody 搜索脚本基本信息的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAllScriptByName(listAllScriptByNameRequest?: ListAllScriptByNameRequest): Promise<ListAllScriptByNameResponse> {
        const options = ParamCreater().listAllScriptByName(listAllScriptByNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可查询指定脚本ID下的所有版本，返回该名称的脚本版本列表信息。（注：接口目前开放的region为：华北-北京四,华东-上海一,华东-上海二,华南-广州）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 脚本版本查询
     * @param {SearchScriptsRequestBody} listAllVersionByVersionIdRequestBody 查询参数体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAllVersionByVersionId(listAllVersionByVersionIdRequest?: ListAllVersionByVersionIdRequest): Promise<ListAllVersionByVersionIdResponse> {
        const options = ParamCreater().listAllVersionByVersionId(listAllVersionByVersionIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可根据作业ID查询执行方案，分页返回执行方案列表。（注：接口目前开放的region为：华北-北京四,华东-上海一,华东-上海二,华南-广州）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据作业id查询方案(自定义模板)列表
     * @param {string} jobId 作业id。
     * @param {ListTemplateByJobIdRequestBody} listTemplateByJobIdRequestBody 分页查询参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTemplateByJobId(listTemplateByJobIdRequest?: ListTemplateByJobIdRequest): Promise<ListTemplateByJobIdResponse> {
        const options = ParamCreater().listTemplateByJobId(listTemplateByJobIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可返回已经创建的任务列表，可按任务名称，任务状态，任务类型，执行人，更新时间为查询条件分页查询任务。（注：接口目前开放的region为：华北-北京四,华东-上海一,华东-上海二,华南-广州）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询任务列表
     * @param {WorkflowQueryParam} listWorkflowRequestBody 查询工作流实体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listWorkflow(listWorkflowRequest?: ListWorkflowRequest): Promise<ListWorkflowResponse> {
        const options = ParamCreater().listWorkflow(listWorkflowRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可获取执行任务的执行历史。（注：接口目前开放的region为：华北-北京四,华东-上海一,华东-上海二,华南-广州）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取任务执行历史
     * @param {string} workflowId 任务id，从工作流命令列表中获取的工作流id。
     * @param {string} [xEnterpriseProjectId] 所属的企业项目id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listWorkflowExecutions(listWorkflowExecutionsRequest?: ListWorkflowExecutionsRequest): Promise<ListWorkflowExecutionsResponse> {
        const options = ParamCreater().listWorkflowExecutions(listWorkflowExecutionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可根据执行方案id查询执行方案详情。（注：接口目前开放的region为：华北-北京四,华东-上海一,华东-上海二,华南-广州）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取方案信息
     * @param {string} templateId 方案id。
     * @param {string} shareType 模板共享类型，默认为private。可选public private
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchTemplateById(searchTemplateByIdRequest?: SearchTemplateByIdRequest): Promise<SearchTemplateByIdResponse> {
        const options = ParamCreater().searchTemplateById(searchTemplateByIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可获取任务的执行详情，可指定工作流ID和执行ID去查询对应的任务，返回任务执行详情。（注：接口目前开放的region为：华北-北京四,华东-上海一,华东-上海二,华南-广州）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取工作流执行中的执行详情
     * @param {string} workflowId 工作流ID，唯一标识，根据project_id和workflow_name生成。
     * @param {string} executionId 工作流执行ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchWorkflowExecutionDetail(searchWorkflowExecutionDetailRequest?: SearchWorkflowExecutionDetailRequest): Promise<SearchWorkflowExecutionDetailResponse> {
        const options = ParamCreater().searchWorkflowExecutionDetail(searchWorkflowExecutionDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可对任务进行失败重试、失败跳过、暂停继续操作，返回操作结果。（注：接口目前开放的region为：华北-北京四,华东-上海一,华东-上海二,华南-广州）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 对暂停中的任务进行操作
     * @param {string} workflowId 工作流ID，唯一标识，根据project_id和workflow_name生成。
     * @param {string} executionId 工作流执行ID。
     * @param {'restart' | 'skip' | 'continue'} action 对当前节点的操作：失败重试，失败跳过，暂停继续。 restart可重新执行失败的节点，skip可跳过失败的节点进入下个节点的执行，continue可通过暂停节点进入下一个节点。
     * @param {string} nodeId 当前节点的id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startPausingWorkflowExecutions(startPausingWorkflowExecutionsRequest?: StartPausingWorkflowExecutionsRequest): Promise<StartPausingWorkflowExecutionsResponse> {
        const options = ParamCreater().startPausingWorkflowExecutions(startPausingWorkflowExecutionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可终止正在执行的任务，指定工作流ID和执行ID去终止对应的任务，返回终止操作状态。（注：接口目前开放的region为：华北-北京四,华东-上海一,华东-上海二,华南-广州）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 终止任务执行
     * @param {string} workflowId 任务id，从工作流命令列表中获取的工作流id。
     * @param {string} executionId 任务执行id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopExecution(stopExecutionRequest?: StopExecutionRequest): Promise<StopExecutionResponse> {
        const options = ParamCreater().stopExecution(stopExecutionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新定时任务的启停状态，可启动定时任务或停止定时任务，返回操作任务结果。（注：接口目前开放的region为：华北-北京四,华东-上海一,华东-上海二,华南-广州）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新任务
     * @param {string} workflowId 任务id，待修改任务的id。
     * @param {'enable' | 'disable'} action 启动或暂停任务的定时执行。enable为开启定时任务，disable为关闭定时任务
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateWorkflowTriggerStatus(updateWorkflowTriggerStatusRequest?: UpdateWorkflowTriggerStatusRequest): Promise<UpdateWorkflowTriggerStatusResponse> {
        const options = ParamCreater().updateWorkflowTriggerStatus(updateWorkflowTriggerStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 该接口用于创建快速执行脚本的任务，可以指定脚本类型，执行用户，脚本参数，执行机器，脚本内容，在用户指定的机器上执行脚本。（注：接口目前开放的region为：华东-苏州二零一）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createFastExecuteScript(createFastExecuteScriptRequest?: CreateFastExecuteScriptRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cms/fast-execute-script",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createFastExecuteScriptRequest !== null && createFastExecuteScriptRequest !== undefined) {
                if (createFastExecuteScriptRequest instanceof CreateFastExecuteScriptRequest) {
                    body = createFastExecuteScriptRequest.body
                } else {
                    body = createFastExecuteScriptRequest['body'];
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
         * 该接口用于创建工作流（任务），返回工作流详情。任务类型取决于模板名称和\&#39;input\&#39;参数。（注：接口目前开放的region为：华北-北京四,华东-上海一,华东-上海二,华南-广州）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createWorkflow(createWorkflowRequest?: CreateWorkflowRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cms/workflow",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createWorkflowRequest !== null && createWorkflowRequest !== undefined) {
                if (createWorkflowRequest instanceof CreateWorkflowRequest) {
                    body = createWorkflowRequest.body
                } else {
                    body = createWorkflowRequest['body'];
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
         * 该接口可下发执行指定的任务。（注：接口目前开放的region为：华北-北京四,华东-上海一,华东-上海二,华南-广州）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeWorkflow(executeWorkflowRequest?: ExecuteWorkflowRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cms/workflow/{workflow_id}/executions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workflowId;

            if (executeWorkflowRequest !== null && executeWorkflowRequest !== undefined) {
                if (executeWorkflowRequest instanceof ExecuteWorkflowRequest) {
                    workflowId = executeWorkflowRequest.workflowId;
                } else {
                    workflowId = executeWorkflowRequest['workflow_id'];
                }
            }

        
            if (workflowId === null || workflowId === undefined) {
            throw new RequiredError('workflowId','Required parameter workflowId was null or undefined when calling executeWorkflow.');
            }

            options.pathParams = { 'workflow_id': workflowId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可查询已创建的作业，可指定作业名称和作业创建人去精确查询，返回作业列表信息。（注：接口目前开放的region为：华北-北京四,华东-上海一,华东-上海二,华南-广州）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAllJobByName(listAllJobByNameRequest?: ListAllJobByNameRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cms/job/list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (listAllJobByNameRequest !== null && listAllJobByNameRequest !== undefined) {
                if (listAllJobByNameRequest instanceof ListAllJobByNameRequest) {
                    body = listAllJobByNameRequest.body
                } else {
                    body = listAllJobByNameRequest['body'];
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
         * 该接口是脚本主页查询，可指定脚本名称和脚本创建人进行精确查询，返回包含脚本基本信息的列表数据。（注：接口目前开放的region为：华北-北京四,华东-上海一,华东-上海二,华南-广州）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAllScriptByName(listAllScriptByNameRequest?: ListAllScriptByNameRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cms/script/list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (listAllScriptByNameRequest !== null && listAllScriptByNameRequest !== undefined) {
                if (listAllScriptByNameRequest instanceof ListAllScriptByNameRequest) {
                    body = listAllScriptByNameRequest.body
                } else {
                    body = listAllScriptByNameRequest['body'];
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
         * 该接口可查询指定脚本ID下的所有版本，返回该名称的脚本版本列表信息。（注：接口目前开放的region为：华北-北京四,华东-上海一,华东-上海二,华南-广州）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAllVersionByVersionId(listAllVersionByVersionIdRequest?: ListAllVersionByVersionIdRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cms/script-version-list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (listAllVersionByVersionIdRequest !== null && listAllVersionByVersionIdRequest !== undefined) {
                if (listAllVersionByVersionIdRequest instanceof ListAllVersionByVersionIdRequest) {
                    body = listAllVersionByVersionIdRequest.body
                } else {
                    body = listAllVersionByVersionIdRequest['body'];
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
         * 该接口可根据作业ID查询执行方案，分页返回执行方案列表。（注：接口目前开放的region为：华北-北京四,华东-上海一,华东-上海二,华南-广州）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTemplateByJobId(listTemplateByJobIdRequest?: ListTemplateByJobIdRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cms/template-list/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let jobId;

            if (listTemplateByJobIdRequest !== null && listTemplateByJobIdRequest !== undefined) {
                if (listTemplateByJobIdRequest instanceof ListTemplateByJobIdRequest) {
                    jobId = listTemplateByJobIdRequest.jobId;
                    body = listTemplateByJobIdRequest.body
                } else {
                    jobId = listTemplateByJobIdRequest['job_id'];
                    body = listTemplateByJobIdRequest['body'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling listTemplateByJobId.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可返回已经创建的任务列表，可按任务名称，任务状态，任务类型，执行人，更新时间为查询条件分页查询任务。（注：接口目前开放的region为：华北-北京四,华东-上海一,华东-上海二,华南-广州）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWorkflow(listWorkflowRequest?: ListWorkflowRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cms/workflow-list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (listWorkflowRequest !== null && listWorkflowRequest !== undefined) {
                if (listWorkflowRequest instanceof ListWorkflowRequest) {
                    body = listWorkflowRequest.body
                } else {
                    body = listWorkflowRequest['body'];
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
         * 该接口可获取执行任务的执行历史。（注：接口目前开放的region为：华北-北京四,华东-上海一,华东-上海二,华南-广州）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWorkflowExecutions(listWorkflowExecutionsRequest?: ListWorkflowExecutionsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cms/workflow/{workflow_id}/executions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workflowId;
            
            let xEnterpriseProjectId;

            if (listWorkflowExecutionsRequest !== null && listWorkflowExecutionsRequest !== undefined) {
                if (listWorkflowExecutionsRequest instanceof ListWorkflowExecutionsRequest) {
                    workflowId = listWorkflowExecutionsRequest.workflowId;
                    xEnterpriseProjectId = listWorkflowExecutionsRequest.xEnterpriseProjectId;
                } else {
                    workflowId = listWorkflowExecutionsRequest['workflow_id'];
                    xEnterpriseProjectId = listWorkflowExecutionsRequest['x_enterprise_project_id'];
                }
            }

        
            if (workflowId === null || workflowId === undefined) {
            throw new RequiredError('workflowId','Required parameter workflowId was null or undefined when calling listWorkflowExecutions.');
            }
            if (xEnterpriseProjectId !== null && xEnterpriseProjectId !== undefined) {
                localVarQueryParameter['x_enterprise_project_id'] = xEnterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'workflow_id': workflowId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可根据执行方案id查询执行方案详情。（注：接口目前开放的region为：华北-北京四,华东-上海一,华东-上海二,华南-广州）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchTemplateById(searchTemplateByIdRequest?: SearchTemplateByIdRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cms/template/{template_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let templateId;
            
            let shareType;

            if (searchTemplateByIdRequest !== null && searchTemplateByIdRequest !== undefined) {
                if (searchTemplateByIdRequest instanceof SearchTemplateByIdRequest) {
                    templateId = searchTemplateByIdRequest.templateId;
                    shareType = searchTemplateByIdRequest.shareType;
                } else {
                    templateId = searchTemplateByIdRequest['template_id'];
                    shareType = searchTemplateByIdRequest['share_type'];
                }
            }

        
            if (templateId === null || templateId === undefined) {
            throw new RequiredError('templateId','Required parameter templateId was null or undefined when calling searchTemplateById.');
            }
            if (shareType === null || shareType === undefined) {
                throw new RequiredError('shareType','Required parameter shareType was null or undefined when calling searchTemplateById.');
            }
            if (shareType !== null && shareType !== undefined) {
                localVarQueryParameter['share_type'] = shareType;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'template_id': templateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可获取任务的执行详情，可指定工作流ID和执行ID去查询对应的任务，返回任务执行详情。（注：接口目前开放的region为：华北-北京四,华东-上海一,华东-上海二,华南-广州）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchWorkflowExecutionDetail(searchWorkflowExecutionDetailRequest?: SearchWorkflowExecutionDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cms/workflow/{workflow_id}/executions/{execution_id}/status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workflowId;
            
            let executionId;

            if (searchWorkflowExecutionDetailRequest !== null && searchWorkflowExecutionDetailRequest !== undefined) {
                if (searchWorkflowExecutionDetailRequest instanceof SearchWorkflowExecutionDetailRequest) {
                    workflowId = searchWorkflowExecutionDetailRequest.workflowId;
                    executionId = searchWorkflowExecutionDetailRequest.executionId;
                } else {
                    workflowId = searchWorkflowExecutionDetailRequest['workflow_id'];
                    executionId = searchWorkflowExecutionDetailRequest['execution_id'];
                }
            }

        
            if (workflowId === null || workflowId === undefined) {
            throw new RequiredError('workflowId','Required parameter workflowId was null or undefined when calling searchWorkflowExecutionDetail.');
            }
            if (executionId === null || executionId === undefined) {
            throw new RequiredError('executionId','Required parameter executionId was null or undefined when calling searchWorkflowExecutionDetail.');
            }

            options.pathParams = { 'workflow_id': workflowId,'execution_id': executionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可对任务进行失败重试、失败跳过、暂停继续操作，返回操作结果。（注：接口目前开放的region为：华北-北京四,华东-上海一,华东-上海二,华南-广州）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startPausingWorkflowExecutions(startPausingWorkflowExecutionsRequest?: StartPausingWorkflowExecutionsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cms/workflow/{workflow_id}/executions/{execution_id}/operation",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workflowId;
            
            let executionId;
            
            let action;
            
            let nodeId;

            if (startPausingWorkflowExecutionsRequest !== null && startPausingWorkflowExecutionsRequest !== undefined) {
                if (startPausingWorkflowExecutionsRequest instanceof StartPausingWorkflowExecutionsRequest) {
                    workflowId = startPausingWorkflowExecutionsRequest.workflowId;
                    executionId = startPausingWorkflowExecutionsRequest.executionId;
                    action = startPausingWorkflowExecutionsRequest.action;
                    nodeId = startPausingWorkflowExecutionsRequest.nodeId;
                } else {
                    workflowId = startPausingWorkflowExecutionsRequest['workflow_id'];
                    executionId = startPausingWorkflowExecutionsRequest['execution_id'];
                    action = startPausingWorkflowExecutionsRequest['action'];
                    nodeId = startPausingWorkflowExecutionsRequest['node_id'];
                }
            }

        
            if (workflowId === null || workflowId === undefined) {
            throw new RequiredError('workflowId','Required parameter workflowId was null or undefined when calling startPausingWorkflowExecutions.');
            }
            if (executionId === null || executionId === undefined) {
            throw new RequiredError('executionId','Required parameter executionId was null or undefined when calling startPausingWorkflowExecutions.');
            }
            if (action === null || action === undefined) {
                throw new RequiredError('action','Required parameter action was null or undefined when calling startPausingWorkflowExecutions.');
            }
            if (action !== null && action !== undefined) {
                localVarQueryParameter['action'] = action;
            }
            if (nodeId === null || nodeId === undefined) {
                throw new RequiredError('nodeId','Required parameter nodeId was null or undefined when calling startPausingWorkflowExecutions.');
            }
            if (nodeId !== null && nodeId !== undefined) {
                localVarQueryParameter['node_id'] = nodeId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'workflow_id': workflowId,'execution_id': executionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可终止正在执行的任务，指定工作流ID和执行ID去终止对应的任务，返回终止操作状态。（注：接口目前开放的region为：华北-北京四,华东-上海一,华东-上海二,华南-广州）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopExecution(stopExecutionRequest?: StopExecutionRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cms/workflow/{workflow_id}/executions/{execution_id}/terminate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workflowId;
            
            let executionId;

            if (stopExecutionRequest !== null && stopExecutionRequest !== undefined) {
                if (stopExecutionRequest instanceof StopExecutionRequest) {
                    workflowId = stopExecutionRequest.workflowId;
                    executionId = stopExecutionRequest.executionId;
                } else {
                    workflowId = stopExecutionRequest['workflow_id'];
                    executionId = stopExecutionRequest['execution_id'];
                }
            }

        
            if (workflowId === null || workflowId === undefined) {
            throw new RequiredError('workflowId','Required parameter workflowId was null or undefined when calling stopExecution.');
            }
            if (executionId === null || executionId === undefined) {
            throw new RequiredError('executionId','Required parameter executionId was null or undefined when calling stopExecution.');
            }

            options.pathParams = { 'workflow_id': workflowId,'execution_id': executionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新定时任务的启停状态，可启动定时任务或停止定时任务，返回操作任务结果。（注：接口目前开放的region为：华北-北京四,华东-上海一,华东-上海二,华南-广州）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateWorkflowTriggerStatus(updateWorkflowTriggerStatusRequest?: UpdateWorkflowTriggerStatusRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/cms/workflow/{workflow_id}/trigger/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workflowId;
            
            let action;

            if (updateWorkflowTriggerStatusRequest !== null && updateWorkflowTriggerStatusRequest !== undefined) {
                if (updateWorkflowTriggerStatusRequest instanceof UpdateWorkflowTriggerStatusRequest) {
                    workflowId = updateWorkflowTriggerStatusRequest.workflowId;
                    action = updateWorkflowTriggerStatusRequest.action;
                } else {
                    workflowId = updateWorkflowTriggerStatusRequest['workflow_id'];
                    action = updateWorkflowTriggerStatusRequest['action'];
                }
            }

        
            if (workflowId === null || workflowId === undefined) {
            throw new RequiredError('workflowId','Required parameter workflowId was null or undefined when calling updateWorkflowTriggerStatus.');
            }
            if (action === null || action === undefined) {
                throw new RequiredError('action','Required parameter action was null or undefined when calling updateWorkflowTriggerStatus.');
            }
            if (action !== null && action !== undefined) {
                localVarQueryParameter['action'] = action;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'workflow_id': workflowId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): AomClient {
    return new AomClient(client);
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