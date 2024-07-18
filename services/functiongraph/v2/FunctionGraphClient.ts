import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { Action } from './model/Action';
import { ApigTriggerFuncInfo } from './model/ApigTriggerFuncInfo';
import { AppTemplateResourceDetail } from './model/AppTemplateResourceDetail';
import { AsyncInvokeFunctionRequest } from './model/AsyncInvokeFunctionRequest';
import { AsyncInvokeFunctionResponse } from './model/AsyncInvokeFunctionResponse';
import { BatchDeleteFunctionTriggersRequest } from './model/BatchDeleteFunctionTriggersRequest';
import { BatchDeleteFunctionTriggersResponse } from './model/BatchDeleteFunctionTriggersResponse';
import { BatchDeleteWorkflowsRequest } from './model/BatchDeleteWorkflowsRequest';
import { BatchDeleteWorkflowsResponse } from './model/BatchDeleteWorkflowsResponse';
import { CallbackWorkflowRequestBody } from './model/CallbackWorkflowRequestBody';
import { CancelAsyncInvocationRequest } from './model/CancelAsyncInvocationRequest';
import { CancelAsyncInvocationRequestBody } from './model/CancelAsyncInvocationRequestBody';
import { CancelAsyncInvocationResponse } from './model/CancelAsyncInvocationResponse';
import { CreateCallbackWorkflowRequest } from './model/CreateCallbackWorkflowRequest';
import { CreateCallbackWorkflowResponse } from './model/CreateCallbackWorkflowResponse';
import { CreateDependencyRequestBody } from './model/CreateDependencyRequestBody';
import { CreateDependencyVersionRequest } from './model/CreateDependencyVersionRequest';
import { CreateDependencyVersionResponse } from './model/CreateDependencyVersionResponse';
import { CreateEventRequest } from './model/CreateEventRequest';
import { CreateEventRequestBody } from './model/CreateEventRequestBody';
import { CreateEventResponse } from './model/CreateEventResponse';
import { CreateFunctionAppRequest } from './model/CreateFunctionAppRequest';
import { CreateFunctionAppRequestBody } from './model/CreateFunctionAppRequestBody';
import { CreateFunctionAppResponse } from './model/CreateFunctionAppResponse';
import { CreateFunctionRequest } from './model/CreateFunctionRequest';
import { CreateFunctionRequestBody } from './model/CreateFunctionRequestBody';
import { CreateFunctionResponse } from './model/CreateFunctionResponse';
import { CreateFunctionTriggerRequest } from './model/CreateFunctionTriggerRequest';
import { CreateFunctionTriggerRequestBody } from './model/CreateFunctionTriggerRequestBody';
import { CreateFunctionTriggerResponse } from './model/CreateFunctionTriggerResponse';
import { CreateFunctionVersionRequest } from './model/CreateFunctionVersionRequest';
import { CreateFunctionVersionRequestBody } from './model/CreateFunctionVersionRequestBody';
import { CreateFunctionVersionResponse } from './model/CreateFunctionVersionResponse';
import { CreateTagsRequest } from './model/CreateTagsRequest';
import { CreateTagsResponse } from './model/CreateTagsResponse';
import { CreateVersionAliasRequest } from './model/CreateVersionAliasRequest';
import { CreateVersionAliasRequestBody } from './model/CreateVersionAliasRequestBody';
import { CreateVersionAliasResponse } from './model/CreateVersionAliasResponse';
import { CreateVpcEndpointRequest } from './model/CreateVpcEndpointRequest';
import { CreateVpcEndpointRequestBody } from './model/CreateVpcEndpointRequestBody';
import { CreateVpcEndpointResponse } from './model/CreateVpcEndpointResponse';
import { CreateWorkflowRequest } from './model/CreateWorkflowRequest';
import { CreateWorkflowResponse } from './model/CreateWorkflowResponse';
import { CronConfig } from './model/CronConfig';
import { CustomImage } from './model/CustomImage';
import { DeleteDependencyVersionRequest } from './model/DeleteDependencyVersionRequest';
import { DeleteDependencyVersionResponse } from './model/DeleteDependencyVersionResponse';
import { DeleteEventRequest } from './model/DeleteEventRequest';
import { DeleteEventResponse } from './model/DeleteEventResponse';
import { DeleteFunctionAppRequest } from './model/DeleteFunctionAppRequest';
import { DeleteFunctionAppResponse } from './model/DeleteFunctionAppResponse';
import { DeleteFunctionAsyncInvokeConfigRequest } from './model/DeleteFunctionAsyncInvokeConfigRequest';
import { DeleteFunctionAsyncInvokeConfigResponse } from './model/DeleteFunctionAsyncInvokeConfigResponse';
import { DeleteFunctionRequest } from './model/DeleteFunctionRequest';
import { DeleteFunctionResponse } from './model/DeleteFunctionResponse';
import { DeleteFunctionTriggerRequest } from './model/DeleteFunctionTriggerRequest';
import { DeleteFunctionTriggerResponse } from './model/DeleteFunctionTriggerResponse';
import { DeleteTagsRequest } from './model/DeleteTagsRequest';
import { DeleteTagsResponse } from './model/DeleteTagsResponse';
import { DeleteVersionAliasRequest } from './model/DeleteVersionAliasRequest';
import { DeleteVersionAliasResponse } from './model/DeleteVersionAliasResponse';
import { DeleteVpcEndpointRequest } from './model/DeleteVpcEndpointRequest';
import { DeleteVpcEndpointResponse } from './model/DeleteVpcEndpointResponse';
import { Dependency } from './model/Dependency';
import { EnableAsyncStatusLogRequest } from './model/EnableAsyncStatusLogRequest';
import { EnableAsyncStatusLogResponse } from './model/EnableAsyncStatusLogResponse';
import { EnableLtsLogsRequest } from './model/EnableLtsLogsRequest';
import { EnableLtsLogsResponse } from './model/EnableLtsLogsResponse';
import { ExportFunctionRequest } from './model/ExportFunctionRequest';
import { ExportFunctionResponse } from './model/ExportFunctionResponse';
import { ExpressConfig } from './model/ExpressConfig';
import { FlowExecuteBody } from './model/FlowExecuteBody';
import { FlowExecutionBrief } from './model/FlowExecutionBrief';
import { FlowExecutionBriefV2 } from './model/FlowExecutionBriefV2';
import { FuncAsyncDestinationConfig } from './model/FuncAsyncDestinationConfig';
import { FuncCode } from './model/FuncCode';
import { FuncDestinationConfig } from './model/FuncDestinationConfig';
import { FuncLogConfig } from './model/FuncLogConfig';
import { FuncMount } from './model/FuncMount';
import { FuncReservedInstance } from './model/FuncReservedInstance';
import { FuncVpc } from './model/FuncVpc';
import { Function } from './model/Function';
import { FunctionAsyncConfig } from './model/FunctionAsyncConfig';
import { FunctionMetric } from './model/FunctionMetric';
import { FunctionRef } from './model/FunctionRef';
import { ImportFunctionRequest } from './model/ImportFunctionRequest';
import { ImportFunctionRequestBody } from './model/ImportFunctionRequestBody';
import { ImportFunctionResponse } from './model/ImportFunctionResponse';
import { InvokeFunctionRequest } from './model/InvokeFunctionRequest';
import { InvokeFunctionResponse } from './model/InvokeFunctionResponse';
import { KvItem } from './model/KvItem';
import { ListActiveAsyncInvocationsRequest } from './model/ListActiveAsyncInvocationsRequest';
import { ListActiveAsyncInvocationsResponse } from './model/ListActiveAsyncInvocationsResponse';
import { ListAppTemplatesRequest } from './model/ListAppTemplatesRequest';
import { ListAppTemplatesResponse } from './model/ListAppTemplatesResponse';
import { ListAppTemplatesResult } from './model/ListAppTemplatesResult';
import { ListAsyncInvocationsRequest } from './model/ListAsyncInvocationsRequest';
import { ListAsyncInvocationsResponse } from './model/ListAsyncInvocationsResponse';
import { ListBridgeFunctionsRequest } from './model/ListBridgeFunctionsRequest';
import { ListBridgeFunctionsResponse } from './model/ListBridgeFunctionsResponse';
import { ListBridgeVersionsRequest } from './model/ListBridgeVersionsRequest';
import { ListBridgeVersionsResponse } from './model/ListBridgeVersionsResponse';
import { ListDependenciesRequest } from './model/ListDependenciesRequest';
import { ListDependenciesResponse } from './model/ListDependenciesResponse';
import { ListDependenciesResult } from './model/ListDependenciesResult';
import { ListDependencyVersionRequest } from './model/ListDependencyVersionRequest';
import { ListDependencyVersionResponse } from './model/ListDependencyVersionResponse';
import { ListDependencyVersionsResult } from './model/ListDependencyVersionsResult';
import { ListEnterpriseResourceDetail } from './model/ListEnterpriseResourceDetail';
import { ListEnterpriseResourceRequestBody } from './model/ListEnterpriseResourceRequestBody';
import { ListEnterpriseResourceResult } from './model/ListEnterpriseResourceResult';
import { ListEventsRequest } from './model/ListEventsRequest';
import { ListEventsResponse } from './model/ListEventsResponse';
import { ListEventsResult } from './model/ListEventsResult';
import { ListFunctionApplicationResult } from './model/ListFunctionApplicationResult';
import { ListFunctionApplicationsRequest } from './model/ListFunctionApplicationsRequest';
import { ListFunctionApplicationsResponse } from './model/ListFunctionApplicationsResponse';
import { ListFunctionAsMetricRequest } from './model/ListFunctionAsMetricRequest';
import { ListFunctionAsMetricResponse } from './model/ListFunctionAsMetricResponse';
import { ListFunctionAsyncInvocationsResult } from './model/ListFunctionAsyncInvocationsResult';
import { ListFunctionAsyncInvokeConfigRequest } from './model/ListFunctionAsyncInvokeConfigRequest';
import { ListFunctionAsyncInvokeConfigResponse } from './model/ListFunctionAsyncInvokeConfigResponse';
import { ListFunctionAsyncInvokeConfigResult } from './model/ListFunctionAsyncInvokeConfigResult';
import { ListFunctionReservedInstancesRequest } from './model/ListFunctionReservedInstancesRequest';
import { ListFunctionReservedInstancesResponse } from './model/ListFunctionReservedInstancesResponse';
import { ListFunctionResult } from './model/ListFunctionResult';
import { ListFunctionStatisticsRequest } from './model/ListFunctionStatisticsRequest';
import { ListFunctionStatisticsResponse } from './model/ListFunctionStatisticsResponse';
import { ListFunctionStatisticsResponseBody } from './model/ListFunctionStatisticsResponseBody';
import { ListFunctionTagsRequest } from './model/ListFunctionTagsRequest';
import { ListFunctionTagsResponse } from './model/ListFunctionTagsResponse';
import { ListFunctionTemplateRequest } from './model/ListFunctionTemplateRequest';
import { ListFunctionTemplateResponse } from './model/ListFunctionTemplateResponse';
import { ListFunctionTriggerResult } from './model/ListFunctionTriggerResult';
import { ListFunctionTriggersRequest } from './model/ListFunctionTriggersRequest';
import { ListFunctionTriggersResponse } from './model/ListFunctionTriggersResponse';
import { ListFunctionVersionResult } from './model/ListFunctionVersionResult';
import { ListFunctionVersionsRequest } from './model/ListFunctionVersionsRequest';
import { ListFunctionVersionsResponse } from './model/ListFunctionVersionsResponse';
import { ListFunctionsRequest } from './model/ListFunctionsRequest';
import { ListFunctionsResponse } from './model/ListFunctionsResponse';
import { ListQuotasRequest } from './model/ListQuotasRequest';
import { ListQuotasResponse } from './model/ListQuotasResponse';
import { ListQuotasResult } from './model/ListQuotasResult';
import { ListReservedInstanceConfigsRequest } from './model/ListReservedInstanceConfigsRequest';
import { ListReservedInstanceConfigsResponse } from './model/ListReservedInstanceConfigsResponse';
import { ListStatisticsRequest } from './model/ListStatisticsRequest';
import { ListStatisticsResponse } from './model/ListStatisticsResponse';
import { ListVersionAliasResult } from './model/ListVersionAliasResult';
import { ListVersionAliasesRequest } from './model/ListVersionAliasesRequest';
import { ListVersionAliasesResponse } from './model/ListVersionAliasesResponse';
import { ListWorkflowExecutionsRequest } from './model/ListWorkflowExecutionsRequest';
import { ListWorkflowExecutionsResponse } from './model/ListWorkflowExecutionsResponse';
import { ListWorkflowRequest } from './model/ListWorkflowRequest';
import { ListWorkflowResponse } from './model/ListWorkflowResponse';
import { MetricConfig } from './model/MetricConfig';
import { MonthUsed } from './model/MonthUsed';
import { MountConfig } from './model/MountConfig';
import { MountUser } from './model/MountUser';
import { NetworkControlConfig } from './model/NetworkControlConfig';
import { NodeExecution } from './model/NodeExecution';
import { NodeExecutionDetail } from './model/NodeExecutionDetail';
import { OBSTriggerConfig } from './model/OBSTriggerConfig';
import { OnError } from './model/OnError';
import { OperateErrorInfo } from './model/OperateErrorInfo';
import { OperationState } from './model/OperationState';
import { PageInfo } from './model/PageInfo';
import { RepoInfo } from './model/RepoInfo';
import { ReservedInstanceConfigs } from './model/ReservedInstanceConfigs';
import { Resources } from './model/Resources';
import { Retry } from './model/Retry';
import { RetryWorkFlowRequest } from './model/RetryWorkFlowRequest';
import { RetryWorkFlowResponse } from './model/RetryWorkFlowResponse';
import { ServiceBridgeVersion } from './model/ServiceBridgeVersion';
import { ShowAppTemplateRequest } from './model/ShowAppTemplateRequest';
import { ShowAppTemplateResponse } from './model/ShowAppTemplateResponse';
import { ShowDependencyVersionRequest } from './model/ShowDependencyVersionRequest';
import { ShowDependencyVersionResponse } from './model/ShowDependencyVersionResponse';
import { ShowEventRequest } from './model/ShowEventRequest';
import { ShowEventResponse } from './model/ShowEventResponse';
import { ShowFuncReservedInstanceMetricsRequest } from './model/ShowFuncReservedInstanceMetricsRequest';
import { ShowFuncReservedInstanceMetricsResponse } from './model/ShowFuncReservedInstanceMetricsResponse';
import { ShowFuncSnapshotStateRequest } from './model/ShowFuncSnapshotStateRequest';
import { ShowFuncSnapshotStateResponse } from './model/ShowFuncSnapshotStateResponse';
import { ShowFunctionAppRequest } from './model/ShowFunctionAppRequest';
import { ShowFunctionAppResponse } from './model/ShowFunctionAppResponse';
import { ShowFunctionAsyncInvokeConfigRequest } from './model/ShowFunctionAsyncInvokeConfigRequest';
import { ShowFunctionAsyncInvokeConfigResponse } from './model/ShowFunctionAsyncInvokeConfigResponse';
import { ShowFunctionCodeRequest } from './model/ShowFunctionCodeRequest';
import { ShowFunctionCodeResponse } from './model/ShowFunctionCodeResponse';
import { ShowFunctionConfigRequest } from './model/ShowFunctionConfigRequest';
import { ShowFunctionConfigResponse } from './model/ShowFunctionConfigResponse';
import { ShowFunctionMetricsRequest } from './model/ShowFunctionMetricsRequest';
import { ShowFunctionMetricsResponse } from './model/ShowFunctionMetricsResponse';
import { ShowFunctionTemplateRequest } from './model/ShowFunctionTemplateRequest';
import { ShowFunctionTemplateResponse } from './model/ShowFunctionTemplateResponse';
import { ShowFunctionTemplateResponseBody } from './model/ShowFunctionTemplateResponseBody';
import { ShowFunctionTriggerRequest } from './model/ShowFunctionTriggerRequest';
import { ShowFunctionTriggerResponse } from './model/ShowFunctionTriggerResponse';
import { ShowLtsLogDetailsRequest } from './model/ShowLtsLogDetailsRequest';
import { ShowLtsLogDetailsResponse } from './model/ShowLtsLogDetailsResponse';
import { ShowProjectAsyncStatusLogInfoRequest } from './model/ShowProjectAsyncStatusLogInfoRequest';
import { ShowProjectAsyncStatusLogInfoResponse } from './model/ShowProjectAsyncStatusLogInfoResponse';
import { ShowProjectTagsListRequest } from './model/ShowProjectTagsListRequest';
import { ShowProjectTagsListResponse } from './model/ShowProjectTagsListResponse';
import { ShowResInstanceInfoRequest } from './model/ShowResInstanceInfoRequest';
import { ShowResInstanceInfoResponse } from './model/ShowResInstanceInfoResponse';
import { ShowTenantMetricRequest } from './model/ShowTenantMetricRequest';
import { ShowTenantMetricResponse } from './model/ShowTenantMetricResponse';
import { ShowTracingRequest } from './model/ShowTracingRequest';
import { ShowTracingResponse } from './model/ShowTracingResponse';
import { ShowVersionAliasRequest } from './model/ShowVersionAliasRequest';
import { ShowVersionAliasResponse } from './model/ShowVersionAliasResponse';
import { ShowWorkFlowMetricRequest } from './model/ShowWorkFlowMetricRequest';
import { ShowWorkFlowMetricResponse } from './model/ShowWorkFlowMetricResponse';
import { ShowWorkFlowRequest } from './model/ShowWorkFlowRequest';
import { ShowWorkFlowResponse } from './model/ShowWorkFlowResponse';
import { ShowWorkflowExecutionForPageRequest } from './model/ShowWorkflowExecutionForPageRequest';
import { ShowWorkflowExecutionForPageResponse } from './model/ShowWorkflowExecutionForPageResponse';
import { ShowWorkflowExecutionRequest } from './model/ShowWorkflowExecutionRequest';
import { ShowWorkflowExecutionResponse } from './model/ShowWorkflowExecutionResponse';
import { SlaReportsValue } from './model/SlaReportsValue';
import { StackResource } from './model/StackResource';
import { StartSyncWorkflowExecutionRequest } from './model/StartSyncWorkflowExecutionRequest';
import { StartSyncWorkflowExecutionResponse } from './model/StartSyncWorkflowExecutionResponse';
import { StartWorkflowExecutionRequest } from './model/StartWorkflowExecutionRequest';
import { StartWorkflowExecutionResponse } from './model/StartWorkflowExecutionResponse';
import { StateDataFilter } from './model/StateDataFilter';
import { StopWorkFlowRequest } from './model/StopWorkFlowRequest';
import { StopWorkFlowResponse } from './model/StopWorkFlowResponse';
import { StrategyConfig } from './model/StrategyConfig';
import { SyncExecutionNodeErrorDetail } from './model/SyncExecutionNodeErrorDetail';
import { TacticsConfig } from './model/TacticsConfig';
import { TagItem } from './model/TagItem';
import { TempDetail } from './model/TempDetail';
import { Trigger } from './model/Trigger';
import { TriggerEventDataRequestBody } from './model/TriggerEventDataRequestBody';
import { TriggerEventDataResponseBody } from './model/TriggerEventDataResponseBody';
import { TriggerMetadataList } from './model/TriggerMetadataList';
import { UpdateEventRequest } from './model/UpdateEventRequest';
import { UpdateEventRequestBody } from './model/UpdateEventRequestBody';
import { UpdateEventResponse } from './model/UpdateEventResponse';
import { UpdateFuncSnapshotRequest } from './model/UpdateFuncSnapshotRequest';
import { UpdateFuncSnapshotResponse } from './model/UpdateFuncSnapshotResponse';
import { UpdateFunctionAsyncInvokeConfigRequest } from './model/UpdateFunctionAsyncInvokeConfigRequest';
import { UpdateFunctionAsyncInvokeConfigRequestBody } from './model/UpdateFunctionAsyncInvokeConfigRequestBody';
import { UpdateFunctionAsyncInvokeConfigResponse } from './model/UpdateFunctionAsyncInvokeConfigResponse';
import { UpdateFunctionCodeRequest } from './model/UpdateFunctionCodeRequest';
import { UpdateFunctionCodeRequestBody } from './model/UpdateFunctionCodeRequestBody';
import { UpdateFunctionCodeResponse } from './model/UpdateFunctionCodeResponse';
import { UpdateFunctionCollectStateRequest } from './model/UpdateFunctionCollectStateRequest';
import { UpdateFunctionCollectStateResponse } from './model/UpdateFunctionCollectStateResponse';
import { UpdateFunctionConfigRequest } from './model/UpdateFunctionConfigRequest';
import { UpdateFunctionConfigRequestBody } from './model/UpdateFunctionConfigRequestBody';
import { UpdateFunctionConfigResponse } from './model/UpdateFunctionConfigResponse';
import { UpdateFunctionMaxInstanceConfigRequest } from './model/UpdateFunctionMaxInstanceConfigRequest';
import { UpdateFunctionMaxInstanceConfigRequestBody } from './model/UpdateFunctionMaxInstanceConfigRequestBody';
import { UpdateFunctionMaxInstanceConfigResponse } from './model/UpdateFunctionMaxInstanceConfigResponse';
import { UpdateFunctionReservedInstancesCountRequest } from './model/UpdateFunctionReservedInstancesCountRequest';
import { UpdateFunctionReservedInstancesCountRequestBody } from './model/UpdateFunctionReservedInstancesCountRequestBody';
import { UpdateFunctionReservedInstancesCountResponse } from './model/UpdateFunctionReservedInstancesCountResponse';
import { UpdateFunctionTagsRequestBody } from './model/UpdateFunctionTagsRequestBody';
import { UpdateTracingRequest } from './model/UpdateTracingRequest';
import { UpdateTracingRequestBody } from './model/UpdateTracingRequestBody';
import { UpdateTracingResponse } from './model/UpdateTracingResponse';
import { UpdateTriggerRequest } from './model/UpdateTriggerRequest';
import { UpdateTriggerRequestBody } from './model/UpdateTriggerRequestBody';
import { UpdateTriggerResponse } from './model/UpdateTriggerResponse';
import { UpdateVersionAliasRequest } from './model/UpdateVersionAliasRequest';
import { UpdateVersionAliasRequestBody } from './model/UpdateVersionAliasRequestBody';
import { UpdateVersionAliasResponse } from './model/UpdateVersionAliasResponse';
import { UpdateWorkFlowRequest } from './model/UpdateWorkFlowRequest';
import { UpdateWorkFlowResponse } from './model/UpdateWorkFlowResponse';
import { UpdateriggerEventData } from './model/UpdateriggerEventData';
import { VersionStrategy } from './model/VersionStrategy';
import { VersionStrategyRules } from './model/VersionStrategyRules';
import { VpcConfig } from './model/VpcConfig';
import { WorkflowCreateBody } from './model/WorkflowCreateBody';
import { WorkflowDeleteBody } from './model/WorkflowDeleteBody';
import { WorkflowSimpleInfo } from './model/WorkflowSimpleInfo';
import { WorkflowUrn } from './model/WorkflowUrn';

export class FunctionGraphClient {
    public static newBuilder(): ClientBuilder<FunctionGraphClient> {
            return new ClientBuilder<FunctionGraphClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 异步执行函数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 异步执行函数
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {string} contentType 消息体的类型（格式）
     * @param {{ [key: string]: object; }} asyncInvokeFunctionRequestBody 异步执行函数请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public asyncInvokeFunction(asyncInvokeFunctionRequest?: AsyncInvokeFunctionRequest): Promise<AsyncInvokeFunctionResponse> {
        const options = ParamCreater().asyncInvokeFunction(asyncInvokeFunctionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定函数所有触发器设置。
     * 
     * 在提供函数版本且非latest的情况下，删除对应函数版本的触发器。
     * 在提供函数别名的情况下，删除对应函数别名的触发器。
     * 在不提供函数版本（也不提供别名）或版本为latest的情况下，删除该函数所有的触发器（包括所有版本和别名）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除指定函数的所有触发器
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteFunctionTriggers(batchDeleteFunctionTriggersRequest?: BatchDeleteFunctionTriggersRequest): Promise<BatchDeleteFunctionTriggersResponse> {
        const options = ParamCreater().batchDeleteFunctionTriggers(batchDeleteFunctionTriggersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除函数流
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除函数流
     * @param {WorkflowDeleteBody} batchDeleteWorkflowsRequestBody 批量删除函数流的Body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteWorkflows(batchDeleteWorkflowsRequest?: BatchDeleteWorkflowsRequest): Promise<BatchDeleteWorkflowsResponse> {
        const options = ParamCreater().batchDeleteWorkflows(batchDeleteWorkflowsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * -| 当前仅支持参数recursive为false且force为true的函数。 在1：N的函数做并发异步调用的场景下调用停止异步请求接口时，同一函数实例同时在执行的其他请求也会被一并停止并返回4208 function invocation canceled
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停止函数异步调用请求
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {string} contentType 消息体的类型（格式）
     * @param {CancelAsyncInvocationRequestBody} cancelAsyncInvocationRequestBody 更新tags的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cancelAsyncInvocation(cancelAsyncInvocationRequest?: CancelAsyncInvocationRequest): Promise<CancelAsyncInvocationResponse> {
        const options = ParamCreater().cancelAsyncInvocation(cancelAsyncInvocationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 回调工作流
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 回调工作流
     * @param {string} workflowId 函数工作流ID
     * @param {string} xWorkflowRunId workflow run id
     * @param {string} xWorkflowStateId workflow state id
     * @param {CallbackWorkflowRequestBody} createCallbackWorkflowRequestBody callback workflow body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCallbackWorkflow(createCallbackWorkflowRequest?: CreateCallbackWorkflowRequest): Promise<CreateCallbackWorkflowResponse> {
        const options = ParamCreater().createCallbackWorkflow(createCallbackWorkflowRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建依赖包版本
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建依赖包版本
     * @param {string} contentType 消息体的类型（格式）
     * @param {CreateDependencyRequestBody} createDependencyVersionRequestBody 创建依赖包版本请求body体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDependencyVersion(createDependencyVersionRequest?: CreateDependencyVersionRequest): Promise<CreateDependencyVersionResponse> {
        const options = ParamCreater().createDependencyVersion(createDependencyVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建测试事件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建测试事件
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {string} contentType 消息体的类型（格式）
     * @param {CreateEventRequestBody} createEventRequestBody 创建测试事件请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createEvent(createEventRequest?: CreateEventRequest): Promise<CreateEventResponse> {
        const options = ParamCreater().createEvent(createEventRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建指定的函数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建函数
     * @param {string} contentType 消息体的类型（格式）
     * @param {CreateFunctionRequestBody} createFunctionRequestBody 创建函数请求body体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createFunction(createFunctionRequest?: CreateFunctionRequest): Promise<CreateFunctionResponse> {
        const options = ParamCreater().createFunction(createFunctionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建应用程序（该功能目前仅支持华北-北京四、华东-上海一）
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建应用程序
     * @param {string} contentType 消息体的类型（格式）
     * @param {CreateFunctionAppRequestBody} createFunctionAppRequestBody 创建应用程序请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createFunctionApp(createFunctionAppRequest?: CreateFunctionAppRequest): Promise<CreateFunctionAppResponse> {
        const options = ParamCreater().createFunctionApp(createFunctionAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建触发器。
     * 
     * - 可以创建的触发器类型包括TIMER、APIG、CTS、DDS、DMS、DIS、LTS、OBS、SMN、KAFKA。
     * - DDS和KAFKA触发器创建时默认为DISABLED状态，其他触发器默认为ACTIVE状态。
     * - TIMER、DDS、DMS、KAFKA、LTS触发器支持禁用，其他触发器不支持。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建触发器
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {string} contentType 消息体的类型（格式）
     * @param {CreateFunctionTriggerRequestBody} createFunctionTriggerRequestBody 创建触发器请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createFunctionTrigger(createFunctionTriggerRequest?: CreateFunctionTriggerRequest): Promise<CreateFunctionTriggerResponse> {
        const options = ParamCreater().createFunctionTrigger(createFunctionTriggerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 发布函数版本。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 发布函数版本
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {string} contentType 消息体的类型（格式）
     * @param {CreateFunctionVersionRequestBody} createFunctionVersionRequestBody 发布函数版本请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createFunctionVersion(createFunctionVersionRequest?: CreateFunctionVersionRequest): Promise<CreateFunctionVersionResponse> {
        const options = ParamCreater().createFunctionVersion(createFunctionVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建资源标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建资源标签
     * @param {string} resourceType 资源类型，此处请填写functions
     * @param {string} resourceId 资源ID
     * @param {string} contentType 消息体的类型（格式）
     * @param {UpdateFunctionTagsRequestBody} createTagsRequestBody 创建资源标签的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTags(createTagsRequest?: CreateTagsRequest): Promise<CreateTagsResponse> {
        const options = ParamCreater().createTags(createTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建函数灰度版本别名。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建函数版本别名
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {string} contentType 消息体的类型（格式）
     * @param {CreateVersionAliasRequestBody} createVersionAliasRequestBody 创建函数请求body体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVersionAlias(createVersionAliasRequest?: CreateVersionAliasRequest): Promise<CreateVersionAliasResponse> {
        const options = ParamCreater().createVersionAlias(createVersionAliasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建下沉入口。（该功能目前仅支持华北-北京四、华东-上海一、华东-上海二、西南-贵阳一）
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建下沉入口
     * @param {string} contentType 消息体的类型（格式）
     * @param {CreateVpcEndpointRequestBody} createVpcEndpointRequestBody 创建下沉入口的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVpcEndpoint(createVpcEndpointRequest?: CreateVpcEndpointRequest): Promise<CreateVpcEndpointResponse> {
        const options = ParamCreater().createVpcEndpoint(createVpcEndpointRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建函数流
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建函数流
     * @param {WorkflowCreateBody} createWorkflowRequestBody 创建函数流的body体
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
     * 删除依赖包版本
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除依赖包版本
     * @param {string} dependId 依赖包的ID。
     * @param {string} version 依赖包版本号。
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDependencyVersion(deleteDependencyVersionRequest?: DeleteDependencyVersionRequest): Promise<DeleteDependencyVersionResponse> {
        const options = ParamCreater().deleteDependencyVersion(deleteDependencyVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定测试事件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除指定测试事件
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} eventId 测试事件ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteEvent(deleteEventRequest?: DeleteEventRequest): Promise<DeleteEventResponse> {
        const options = ParamCreater().deleteEvent(deleteEventRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定的函数或者特定的版本（不允许删除latest版本）。
     * 
     * 如果URN中包含函数版本或者别名，则删除特定的函数版本或者别名指向的版本以及该版本关联的trigger。
     * 如果URN中不包含版本或者别名，则删除整个函数，包含所有版本以及别名，触发器。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除函数/版本
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。  不允许删除函数的latest版本，如要删除整个函数（包含所有版本），提供不带任何版本号/别名的urn，如： urn:fss:xxxxxxxx:7aad83af3e8d42e99ac194e8419e2c9b:function:default:test
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteFunction(deleteFunctionRequest?: DeleteFunctionRequest): Promise<DeleteFunctionResponse> {
        const options = ParamCreater().deleteFunction(deleteFunctionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除应用程序（该功能目前仅支持华北-北京四、华东-上海一）
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除应用程序
     * @param {string} id 应用ID。
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteFunctionApp(deleteFunctionAppRequest?: DeleteFunctionAppRequest): Promise<DeleteFunctionAppResponse> {
        const options = ParamCreater().deleteFunctionApp(deleteFunctionAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除函数异步配置信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除函数异步配置信息
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteFunctionAsyncInvokeConfig(deleteFunctionAsyncInvokeConfigRequest?: DeleteFunctionAsyncInvokeConfigRequest): Promise<DeleteFunctionAsyncInvokeConfigResponse> {
        const options = ParamCreater().deleteFunctionAsyncInvokeConfig(deleteFunctionAsyncInvokeConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除触发器。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除触发器
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {'TIMER' | 'APIG' | 'CTS' | 'DDS' | 'DMS' | 'DIS' | 'LTS' | 'OBS' | 'SMN' | 'KAFKA' | 'RABBITMQ' | 'DEDICATEDGATEWAY' | 'OPENSOURCEKAFKA' | 'APIC' | 'GAUSSMONGO' | 'EVENTGRID' | 'IOTDA'} triggerTypeCode 触发器类型代码。
     * @param {string} triggerId 触发器编码。
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteFunctionTrigger(deleteFunctionTriggerRequest?: DeleteFunctionTriggerRequest): Promise<DeleteFunctionTriggerResponse> {
        const options = ParamCreater().deleteFunctionTrigger(deleteFunctionTriggerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除资源标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除资源标签
     * @param {string} resourceType 资源类型，此处请填写functions
     * @param {string} resourceId 资源ID
     * @param {string} contentType 消息体的类型（格式）
     * @param {UpdateFunctionTagsRequestBody} deleteTagsRequestBody 删除资源标签的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTags(deleteTagsRequest?: DeleteTagsRequest): Promise<DeleteTagsResponse> {
        const options = ParamCreater().deleteTags(deleteTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除函数版本别名。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除函数版本别名
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {string} aliasName 要删除的别名名称。
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteVersionAlias(deleteVersionAliasRequest?: DeleteVersionAliasRequest): Promise<DeleteVersionAliasResponse> {
        const options = ParamCreater().deleteVersionAlias(deleteVersionAliasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除下沉入口。（该功能目前仅支持华北-北京四、华东-上海一、华东-上海二、西南-贵阳一）
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除下沉入口
     * @param {string} vpcId vpc ID
     * @param {string} subnetId 子网编号
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteVpcEndpoint(deleteVpcEndpointRequest?: DeleteVpcEndpointRequest): Promise<DeleteVpcEndpointResponse> {
        const options = ParamCreater().deleteVpcEndpoint(deleteVpcEndpointRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 允许异步状态通知。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 允许异步状态通知
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enableAsyncStatusLog(enableAsyncStatusLogRequest?: EnableAsyncStatusLogRequest): Promise<EnableAsyncStatusLogResponse> {
        const options = ParamCreater().enableAsyncStatusLog(enableAsyncStatusLogRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开通lts日志上报功能。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开通lts日志上报功能
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enableLtsLogs(enableLtsLogsRequest?: EnableLtsLogsRequest): Promise<EnableLtsLogsResponse> {
        const options = ParamCreater().enableLtsLogs(enableLtsLogsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 导出函数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导出函数
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {string} contentType 消息体的类型（格式）
     * @param {boolean} [config] 是否导出函数配置，默认为false。若无type参数，则必填code&#x3D;true或config&#x3D;true至少一项。
     * @param {boolean} [code] 是否导出函数代码，默认为false。若无type参数，则必填code&#x3D;true或config&#x3D;true至少一项。
     * @param {string} [type] 不兼容与code、config参数混用；type&#x3D;code代表导出代码，type&#x3D;config代码导出配置
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public exportFunction(exportFunctionRequest?: ExportFunctionRequest): Promise<ExportFunctionResponse> {
        const options = ParamCreater().exportFunction(exportFunctionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 导入函数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导入函数
     * @param {string} contentType 消息体的类型（格式）
     * @param {ImportFunctionRequestBody} importFunctionRequestBody 导入函数的请求body体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public importFunction(importFunctionRequest?: ImportFunctionRequest): Promise<ImportFunctionResponse> {
        const options = ParamCreater().importFunction(importFunctionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 同步调用指的是客户端请求需要明确等到响应结果，也就是说这样的请求必须得调用到用户的函数，并且等到调用完成才返回。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 同步执行函数
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {string} contentType 消息体的类型（格式）
     * @param {{ [key: string]: object; }} invokeFunctionRequestBody 执行函数请求体
     * @param {string} [xCffLogType] 取值为：tail（返回函数执行后的4K日志），或者为空（不返回日志）。
     * @param {string} [xCFFRequestVersion] 返回体格式，取值v0,v1。 v0:默认返回文本格式 v1:默认返回json格式，sdk需要使用此值。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public invokeFunction(invokeFunctionRequest?: InvokeFunctionRequest): Promise<InvokeFunctionResponse> {
        const options = ParamCreater().invokeFunction(invokeFunctionRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Cff-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取函数异步调用活跃请求列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取函数活跃异步调用请求列表
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} [requests] 需要查询的异步请求ID, 多个请求id使用\&#39;,\&#39;分割， 最大支持10个请求id查询。如果不指定，默认查询所有异步调用记录
     * @param {string} [marker] 本次查询起始位置，默认值0
     * @param {string} [limit] 本次查询最大返回的数据条数，最大值500，默认值100
     * @param {string} [status] 本次查询指定的异步调用状态，支持5种状态，如果不指定，则查询所有状态的调用记录 WAIT: 等待 RUNNING: 执行中 SUCCESS: 执行成功 FAIL: 执行失败 DISCARD: 请求丢弃
     * @param {Date} [queryBeginTime] 搜索起始时间（格式为YYYY-MM-DD\&#39;T\&#39;HH:mm:ss,UTC时间）。如果不指定默认为当前时间前1小时
     * @param {Date} [queryEndTime] 搜索结束时间（格式为YYYY-MM-DD\&#39;T\&#39;HH:mm:ss,UTC时间）。如果不指定默认为当前时间
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listActiveAsyncInvocations(listActiveAsyncInvocationsRequest?: ListActiveAsyncInvocationsRequest): Promise<ListActiveAsyncInvocationsResponse> {
        const options = ParamCreater().listActiveAsyncInvocations(listActiveAsyncInvocationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询应用程序模板列表（该功能目前仅支持华北-北京四、华东-上海一）
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用程序模板列表
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} [marker] 本次查询起始位置，默认值0
     * @param {string} [maxitems] 本次查询最大返回的数据条数，最大值500，默认值100
     * @param {string} [runtime] 模板执行运行时
     * @param {string} [category] 模板类别
     * @param {string} [xLanguage] 模板语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAppTemplates(listAppTemplatesRequest?: ListAppTemplatesRequest): Promise<ListAppTemplatesResponse> {
        const options = ParamCreater().listAppTemplates(listAppTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取函数异步调用请求列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取函数异步调用请求列表
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} [requestId] 需要查询的异步请求ID。如果不指定，默认查询所有异步调用记录
     * @param {string} [marker] 本次查询起始位置，默认值0
     * @param {string} [limit] 本次查询最大返回的数据条数，最大值500，默认值100
     * @param {string} [status] 本次查询指定的异步调用状态，支持5种状态，如果不指定，则查询所有状态的调用记录 WAIT: 等待 RUNNING: 执行中 SUCCESS: 执行成功 FAIL: 执行失败 DISCARD: 请求丢弃
     * @param {Date} [queryBeginTime] 搜索起始时间（格式为YYYY-MM-DD\&#39;T\&#39;HH:mm:ss,UTC时间）。如果不指定默认为当前时间前1小时
     * @param {Date} [queryEndTime] 搜索结束时间（格式为YYYY-MM-DD\&#39;T\&#39;HH:mm:ss,UTC时间）。如果不指定默认为当前时间
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAsyncInvocations(listAsyncInvocationsRequest?: ListAsyncInvocationsRequest): Promise<ListAsyncInvocationsResponse> {
        const options = ParamCreater().listAsyncInvocations(listAsyncInvocationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定函数绑定的servicebridge函数列表信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定函数绑定的servicebridge函数列表
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} [type] servicebridge类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBridgeFunctions(listBridgeFunctionsRequest?: ListBridgeFunctionsRequest): Promise<ListBridgeFunctionsResponse> {
        const options = ParamCreater().listBridgeFunctions(listBridgeFunctionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取servicebridge可用的版本
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取servicebridge可用的版本
     * @param {string} type servicebridge 类型，可选  rds, mqs 或 cache
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBridgeVersions(listBridgeVersionsRequest?: ListBridgeVersionsRequest): Promise<ListBridgeVersionsResponse> {
        const options = ParamCreater().listBridgeVersions(listBridgeVersionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取依赖包列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取依赖包列表
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} [marker] 上一次查询依赖包的最后记录位置，默认为\&quot;0\&quot;。
     * @param {string} [maxitems] 单次查询最大条数
     * @param {string} [ispublic] 是否为公共依赖包
     * @param {string} [dependencyType] 依赖包类型public：公开,private:私有，all：全部。缺省时查询全量
     * @param {string} [runtime] FunctionGraph函数的执行环境 Python2.7: Python语言2.7版本。 Python3.6: Pyton语言3.6版本。 Python3.9: Python语言3.9版本。 Go1.8: Go语言1.8版本。 Go1.x: Go语言1.x版本。 Java8: Java语言8版本。 Java11: Java语言11版本。 Node.js6.10: Nodejs语言6.10版本。 Node.js8.10: Nodejs语言8.10版本。 Node.js10.16: Nodejs语言10.16版本。 Node.js12.13: Nodejs语言12.13版本。 Node.js14.18: Nodejs语言14.18版本。 C#(.NET Core 2.0): C#语言2.0版本。 C#(.NET Core 2.1): C#语言2.1版本。 C#(.NET Core 3.1): C#语言3.1版本。 Custom: 自定义运行时。 PHP7.3: Php语言7.3版本。 http: HTTP函数。
     * @param {string} [name] 依赖包名称。
     * @param {string} [limit] 本次查询可获取的依赖包的最大数目，默认为\&quot;400\&quot;。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDependencies(listDependenciesRequest?: ListDependenciesRequest): Promise<ListDependenciesResponse> {
        const options = ParamCreater().listDependencies(listDependenciesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取依赖包版本列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取依赖包版本列表
     * @param {string} dependId 依赖包的ID。
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} [marker] 上一次查询依赖包的最后记录位置，默认为\&quot;0\&quot;。
     * @param {string} [maxitems] 单次查询最大条数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDependencyVersion(listDependencyVersionRequest?: ListDependencyVersionRequest): Promise<ListDependencyVersionResponse> {
        const options = ParamCreater().listDependencyVersion(listDependencyVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定函数的测试事件列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定函数的测试事件列表
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEvents(listEventsRequest?: ListEventsRequest): Promise<ListEventsResponse> {
        const options = ParamCreater().listEvents(listEventsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询应用程序列表（该功能目前仅支持华北-北京四、华东-上海一）
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用程序列表
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} [limit] 本次查询最大返回的数据条数，最大值500，默认值100
     * @param {string} [marker] 本次查询起始位置，默认值0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFunctionApplications(listFunctionApplicationsRequest?: ListFunctionApplicationsRequest): Promise<ListFunctionApplicationsResponse> {
        const options = ParamCreater().listFunctionApplications(listFunctionApplicationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 按指定指标排序的函数列表。
     * 
     * 默认统计按错误次数指标统计最近一天失败次数最多的前10个函数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取按指定指标排序的函数列表
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} [type] 指标类型，默认值为failcount。
     * @param {string} [startTime] 起始时间。
     * @param {string} [endTime] 结束时间。
     * @param {string} [limit] 指标类型，默认值为failcount。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFunctionAsMetric(listFunctionAsMetricRequest?: ListFunctionAsMetricRequest): Promise<ListFunctionAsMetricResponse> {
        const options = ParamCreater().listFunctionAsMetric(listFunctionAsMetricRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定函数所有版本的异步配置列表。。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取函数异步配置列表
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} [marker] 上一次查询到的最后的记录位置。
     * @param {string} [limit] 每页显示的条目数量。 - 如果不提供该值或者提供的值等于0，则使用默认值：10，最大值100，大于100取值100。 - 如果该值小于0，则返回参数错误。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFunctionAsyncInvokeConfig(listFunctionAsyncInvokeConfigRequest?: ListFunctionAsyncInvokeConfigRequest): Promise<ListFunctionAsyncInvokeConfigResponse> {
        const options = ParamCreater().listFunctionAsyncInvokeConfig(listFunctionAsyncInvokeConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取函数预留实例数量。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取函数预留实例数量
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} [marker] 上一次查询到的最后的记录位置。
     * @param {string} [limit] 每次查询获取的最大函数记录数量  最大值：400 如果不提供该值或者提供的值大于400或等于0，则使用默认值：400 如果该值小于0，则返回参数错误。
     * @param {string} [urn] 查询指定函数版本预留实例数的函数urn。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFunctionReservedInstances(listFunctionReservedInstancesRequest?: ListFunctionReservedInstancesRequest): Promise<ListFunctionReservedInstancesResponse> {
        const options = ParamCreater().listFunctionReservedInstances(listFunctionReservedInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定时间段的函数运行指标。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定时间段的函数运行指标
     * @param {string} funcUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {string} period 获取最近多少分钟内函数执行的指标。
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFunctionStatistics(listFunctionStatisticsRequest?: ListFunctionStatisticsRequest): Promise<ListFunctionStatisticsResponse> {
        const options = ParamCreater().listFunctionStatistics(listFunctionStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询函数标签列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询函数标签列表
     * @param {string} resourceType 资源类型，此处请填写functions
     * @param {string} resourceId 资源ID
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFunctionTags(listFunctionTagsRequest?: ListFunctionTagsRequest): Promise<ListFunctionTagsResponse> {
        const options = ParamCreater().listFunctionTags(listFunctionTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取函数模板列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取函数模板列表
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} [marker] 本次查询起始位置，默认值0
     * @param {string} [maxitems] 每次查询获取的最大模板数量。
     * @param {string} [ispublic] 是否为公开模板
     * @param {string} [runtime] 指定运行时模板
     * @param {string} [scene] 指定场景模板
     * @param {string} [service] 指定云服务模板
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFunctionTemplate(listFunctionTemplateRequest?: ListFunctionTemplateRequest): Promise<ListFunctionTemplateResponse> {
        const options = ParamCreater().listFunctionTemplate(listFunctionTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定函数的所有触发器设置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定函数的所有触发器
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFunctionTriggers(listFunctionTriggersRequest?: ListFunctionTriggersRequest): Promise<ListFunctionTriggersResponse> {
        const options = ParamCreater().listFunctionTriggers(listFunctionTriggersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定函数的版本列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定函数的版本列表
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} [marker] 上一次查询到的最后的记录位置。
     * @param {string} [maxitems] 每次查询获取的最大函数记录数量。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFunctionVersions(listFunctionVersionsRequest?: ListFunctionVersionsRequest): Promise<ListFunctionVersionsResponse> {
        const options = ParamCreater().listFunctionVersions(listFunctionVersionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取函数列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取函数列表
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} [marker] 上一次查询到的最后的记录位置。
     * @param {string} [maxitems] 每次查询获取的最大函数记录数量 最大值：400 如果不提供该值或者提供的值大于400或等于0，则使用默认值：400 如果该值小于0，则返回参数错误。
     * @param {string} [packageName] 自定义分组名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFunctions(listFunctionsRequest?: ListFunctionsRequest): Promise<ListFunctionsResponse> {
        const options = ParamCreater().listFunctions(listFunctionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户配额
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户配额
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listQuotas(listQuotasRequest?: ListQuotasRequest): Promise<ListQuotasResponse> {
        const options = ParamCreater().listQuotas(listQuotasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取函数预留实例配置列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取函数预留实例配置列表
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} [functionUrn] 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {string} [marker] 本次查询起始位置，默认值0
     * @param {string} [limit] 本次查询最大返回的数据条数，最大值500，默认值100
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listReservedInstanceConfigs(listReservedInstanceConfigsRequest?: ListReservedInstanceConfigsRequest): Promise<ListReservedInstanceConfigsResponse> {
        const options = ParamCreater().listReservedInstanceConfigs(listReservedInstanceConfigsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 租户函数统计信息。
     * 
     * 返回三类的统计信息，函数格式和大小使用情况包括配额和使用量，流量报告。
     * 通过查询参数filter可以进行过滤，查询参数period可以指定返回的时间段。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 租户函数统计信息
     * @param {'monitor_data' | 'monthly_report'} filter 参数过滤器。 monitor_data: 查询统计信息。 monthly_report：查询月度统计信息。
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} [period] 时间段单位为分钟，与filter参数metric配合使用。
     * @param {string} [option] 月度统计的维度，filter参数取值为monthly_report时才生效。 当取值不在以上范围时，默认取\&quot;0\&quot;。 - \&quot;0\&quot;: 表示统计本月。 - \&quot;1\&quot;: 表示统计上月。 - \&quot;2\&quot;: 表示统计最近三个月。 - \&quot;3\&quot;: 表示统计最近六个月。
     * @param {string} [limit] 本次查询最大返回的数据条数，最大值500，默认值100
     * @param {string} [marker] 本次查询起始位置，默认值0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listStatistics(listStatisticsRequest?: ListStatisticsRequest): Promise<ListStatisticsResponse> {
        const options = ParamCreater().listStatistics(listStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取函数版本别名列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定函数所有版本别名列表
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVersionAliases(listVersionAliasesRequest?: ListVersionAliasesRequest): Promise<ListVersionAliasesResponse> {
        const options = ParamCreater().listVersionAliases(listVersionAliasesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询函数流
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询函数流
     * @param {string} [workflowName] 函数流名称
     * @param {number} [limit] 分页查询，每页显示的条目数量，默认值为200 limit大于200时，按照200处理
     * @param {number} [offset] 分页查询，分页的偏移量，默认值为0 offset小于0时，按照0处理
     * @param {string} [enterpriseProject] 企业项目ID
     * @param {string} [mode] 函数流模式 \&quot;NORMAL\&quot;标准函数流 \&quot;EXPRESS\&quot;快速函数流
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
     * 获取指定函数流执行实例列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定函数流执行实例列表
     * @param {string} workflowId 函数工作流ID
     * @param {number} [limit] 分页查询，每页显示的条目数量，最大数量200，超过200后只返回200
     * @param {number} [offset] 分页查询，分页的偏移量，默认值为0 offset小于0时，按照0处理
     * @param {'success' | 'fail' | 'running' | 'timeout' | 'cancel'} [status] 需要过滤的流程实例状态
     * @param {string} [startTime] 查询开始时间，UTC时间。若起始时间未填写，以终止时间前推3天为起始时间
     * @param {string} [endTime] 查询开始时间，UTC时间。若终止时间未填写，以起始时间后退3天未终止时间。若均未填写，默认查询最近3天数据。
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
     * 重试函数流
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重试函数流
     * @param {string} workflowId 函数工作流ID
     * @param {string} executionId 函数流执行实例ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public retryWorkFlow(retryWorkFlowRequest?: RetryWorkFlowRequest): Promise<RetryWorkFlowResponse> {
        const options = ParamCreater().retryWorkFlow(retryWorkFlowRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询应用程序模板详情（该功能目前仅支持华北-北京四、华东-上海一）
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用程序模板详情
     * @param {string} id 应用模板ID。
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAppTemplate(showAppTemplateRequest?: ShowAppTemplateRequest): Promise<ShowAppTemplateResponse> {
        const options = ParamCreater().showAppTemplate(showAppTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取依赖包版本详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取依赖包版本详情
     * @param {string} dependId 依赖包的ID。
     * @param {string} version 依赖包版本号。
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDependencyVersion(showDependencyVersionRequest?: ShowDependencyVersionRequest): Promise<ShowDependencyVersionResponse> {
        const options = ParamCreater().showDependencyVersion(showDependencyVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取测试事件详细信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取测试事件详细信息
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} eventId 测试事件ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showEvent(showEventRequest?: ShowEventRequest): Promise<ShowEventResponse> {
        const options = ParamCreater().showEvent(showEventRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询函数实例使用情况指标。
     * 
     * - 指标单位为分钟：
     *     当查询时间范围小于1小时,指标周期为1分钟
     *     当查询时间范围小于1天,指标周期为30分钟
     *     当查询时间范围大于1天,指标周期为180分钟
     * - 指标分为如下几类：reservedinstancenum（预留实例使用）、concurrency（实例使用/并发）
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询函数实例使用情况指标
     * @param {string} funcUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} [marker] 本次查询起始位置，默认值0
     * @param {string} [limit] 本次查询最大返回的数据条数，最大值500，默认值100
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFuncReservedInstanceMetrics(showFuncReservedInstanceMetricsRequest?: ShowFuncReservedInstanceMetricsRequest): Promise<ShowFuncReservedInstanceMetricsResponse> {
        const options = ParamCreater().showFuncReservedInstanceMetrics(showFuncReservedInstanceMetricsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询函数快照制作状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询函数快照制作状态
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {'state' | 'enableSnapshot'} action 查询快照制作开关状态
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFuncSnapshotState(showFuncSnapshotStateRequest?: ShowFuncSnapshotStateRequest): Promise<ShowFuncSnapshotStateResponse> {
        const options = ParamCreater().showFuncSnapshotState(showFuncSnapshotStateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询应用程序详情（该功能目前仅支持华北-北京四、华东-上海一）
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用程序详情
     * @param {string} id 应用ID。
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFunctionApp(showFunctionAppRequest?: ShowFunctionAppRequest): Promise<ShowFunctionAppResponse> {
        const options = ParamCreater().showFunctionApp(showFunctionAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定函数某一版本的异步配置信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取函数异步配置信息
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFunctionAsyncInvokeConfig(showFunctionAsyncInvokeConfigRequest?: ShowFunctionAsyncInvokeConfigRequest): Promise<ShowFunctionAsyncInvokeConfigResponse> {
        const options = ParamCreater().showFunctionAsyncInvokeConfig(showFunctionAsyncInvokeConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定函数的代码。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定函数代码
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFunctionCode(showFunctionCodeRequest?: ShowFunctionCodeRequest): Promise<ShowFunctionCodeResponse> {
        const options = ParamCreater().showFunctionCode(showFunctionCodeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定函数的metadata。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取函数的metadata
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFunctionConfig(showFunctionConfigRequest?: ShowFunctionConfigRequest): Promise<ShowFunctionConfigResponse> {
        const options = ParamCreater().showFunctionConfig(showFunctionConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询函数流量指标。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询函数实例流量指标
     * @param {string} funcUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {string} period 时间间隔（单位：min）
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFunctionMetrics(showFunctionMetricsRequest?: ShowFunctionMetricsRequest): Promise<ShowFunctionMetricsResponse> {
        const options = ParamCreater().showFunctionMetrics(showFunctionMetricsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定函数模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定函数模板
     * @param {string} templateId 指定模板id。
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFunctionTemplate(showFunctionTemplateRequest?: ShowFunctionTemplateRequest): Promise<ShowFunctionTemplateResponse> {
        const options = ParamCreater().showFunctionTemplate(showFunctionTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取特定触发器的信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定触发器的信息
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {'TIMER' | 'APIG' | 'CTS' | 'DDS' | 'DMS' | 'DIS' | 'LTS' | 'OBS' | 'SMN' | 'KAFKA' | 'RABBITMQ' | 'DEDICATEDGATEWAY' | 'OPENSOURCEKAFKA' | 'APIC' | 'GAUSSMONGO' | 'EVENTGRID' | 'IOTDA'} triggerTypeCode 触发器类型代码。
     * @param {string} triggerId 触发器编码。
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFunctionTrigger(showFunctionTriggerRequest?: ShowFunctionTriggerRequest): Promise<ShowFunctionTriggerResponse> {
        const options = ParamCreater().showFunctionTrigger(showFunctionTriggerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定函数的lts日志组日志流配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定函数的lts日志组日志流配置
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showLtsLogDetails(showLtsLogDetailsRequest?: ShowLtsLogDetailsRequest): Promise<ShowLtsLogDetailsResponse> {
        const options = ParamCreater().showLtsLogDetails(showLtsLogDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询异步日志详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询异步日志详情
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showProjectAsyncStatusLogInfo(showProjectAsyncStatusLogInfoRequest?: ShowProjectAsyncStatusLogInfoRequest): Promise<ShowProjectAsyncStatusLogInfoResponse> {
        const options = ParamCreater().showProjectAsyncStatusLogInfo(showProjectAsyncStatusLogInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源标签
     * @param {string} resourceType 资源类型，此处请填写functions
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showProjectTagsList(showProjectTagsListRequest?: ShowProjectTagsListRequest): Promise<ShowProjectTagsListResponse> {
        const options = ParamCreater().showProjectTagsList(showProjectTagsListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源实例
     * @param {string} resourceType 资源类型，此处请填写functions
     * @param {string} action 禁用/启用
     * @param {string} contentType 消息体的类型（格式）
     * @param {ListEnterpriseResourceRequestBody} showResInstanceInfoRequestBody 查询资源实例请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showResInstanceInfo(showResInstanceInfoRequest?: ShowResInstanceInfoRequest): Promise<ShowResInstanceInfoResponse> {
        const options = ParamCreater().showResInstanceInfo(showResInstanceInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取函数流指标
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取函数流指标
     * @param {string} [period] 时间段，单位为分钟
     * @param {string} [startTime] 开始时间，精确到ms的时间戳
     * @param {string} [endTime] 结束时间，精确到ms的时间戳
     * @param {string} [metricType] 指标类型，为空或不在取值范围内时，查询所有指标。取值范围：totalCount 调用次数；errorCount 错误次数； averageDuration 运行时间；running 运行中个数；rejectCount  拒绝个数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTenantMetric(showTenantMetricRequest?: ShowTenantMetricRequest): Promise<ShowTenantMetricResponse> {
        const options = ParamCreater().showTenantMetric(showTenantMetricRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取函数调用链配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取函数调用链配置
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTracing(showTracingRequest?: ShowTracingRequest): Promise<ShowTracingResponse> {
        const options = ParamCreater().showTracing(showTracingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取函数指定的版本别名信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取函数版本的指定别名信息
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {string} aliasName 要查询的别名名称。
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVersionAlias(showVersionAliasRequest?: ShowVersionAliasRequest): Promise<ShowVersionAliasResponse> {
        const options = ParamCreater().showVersionAlias(showVersionAliasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定函数流实例的元数据
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定函数流实例的元数据
     * @param {string} workflowId 函数工作流ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showWorkFlow(showWorkFlowRequest?: ShowWorkFlowRequest): Promise<ShowWorkFlowResponse> {
        const options = ParamCreater().showWorkFlow(showWorkFlowRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定函数流指标
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定函数流指标
     * @param {string} workflowUrn 函数工作流URN, 格式为： urn:fss:&lt;region_id&gt;:&lt;project_id&gt;:workflow:\\&lt;package\\&gt;:&lt;workflow_name&gt;:\\&lt;version\\&gt; 注意： package当前只支持default version当前只支持latest
     * @param {string} [period] 时间段，单位为分钟
     * @param {string} [startTime] 开始时间，精确到ms的时间戳
     * @param {string} [endTime] 结束时间，精确到ms的时间戳
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showWorkFlowMetric(showWorkFlowMetricRequest?: ShowWorkFlowMetricRequest): Promise<ShowWorkFlowMetricResponse> {
        const options = ParamCreater().showWorkFlowMetric(showWorkFlowMetricRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定函数流执行实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定函数流执行实例
     * @param {string} workflowId 函数工作流ID
     * @param {string} executionId 函数流执行实例ID
     * @param {boolean} [xGetWorkflowFullHistoryData] 获取函数流执行详情完整输出值
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showWorkflowExecution(showWorkflowExecutionRequest?: ShowWorkflowExecutionRequest): Promise<ShowWorkflowExecutionResponse> {
        const options = ParamCreater().showWorkflowExecution(showWorkflowExecutionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 分页获取指定函数流执行实例列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 分页获取指定函数流执行实例列表
     * @param {string} workflowId 函数工作流ID
     * @param {number} offset 偏移量，表示从此偏移量开始查询，offset大于等于0
     * @param {number} limit 分页查询，每页查询数据条数，取值范围：1,2,3...100
     * @param {string} [startTime] 查询开始时间，UTC时间，格式：YYYY-MM-DD hh:mm:ss。若起始时间未填写，以终止时间前推3天为起始时间。
     * @param {string} [endTime] 查询结束时间，UTC时间，格式：YYYY-MM-DD hh:mm:ss。若终止时间未填写，以起始时间后退3天未终止时间。若均未填写，默认查询最近3天数据。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showWorkflowExecutionForPage(showWorkflowExecutionForPageRequest?: ShowWorkflowExecutionForPageRequest): Promise<ShowWorkflowExecutionForPageResponse> {
        const options = ParamCreater().showWorkflowExecutionForPage(showWorkflowExecutionForPageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 以同步执行方式启动函数流（仅快速模式函数流支持）
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 同步执行函数流
     * @param {string} workflowId 函数流定义ID
     * @param {FlowExecuteBody} startSyncWorkflowExecutionRequestBody 函数流执行body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startSyncWorkflowExecution(startSyncWorkflowExecutionRequest?: StartSyncWorkflowExecutionRequest): Promise<StartSyncWorkflowExecutionResponse> {
        const options = ParamCreater().startSyncWorkflowExecution(startSyncWorkflowExecutionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 以异步执行方式启动函数流
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开始执行函数流
     * @param {string} workflowId 函数流定义ID
     * @param {FlowExecuteBody} startWorkflowExecutionRequestBody 函数流创建body体
     * @param {string} [xCreateTime] workflowRun task create time
     * @param {string} [xWorkflowRunID] workflowRun id
     * @param {string} [xWorkflowRunMergeFnParameters] Combines the output of the previous node with the input of the next node into an input.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startWorkflowExecution(startWorkflowExecutionRequest?: StartWorkflowExecutionRequest): Promise<StartWorkflowExecutionResponse> {
        const options = ParamCreater().startWorkflowExecution(startWorkflowExecutionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 停止函数流
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停止函数流
     * @param {string} workflowId 函数工作流ID
     * @param {string} executionId 函数流执行实例ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopWorkFlow(stopWorkFlowRequest?: StopWorkFlowRequest): Promise<StopWorkFlowResponse> {
        const options = ParamCreater().stopWorkFlow(stopWorkFlowRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新测试事件详细信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新测试事件详细信息
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} eventId 测试事件ID
     * @param {UpdateEventRequestBody} updateEventRequestBody 更新测试事件请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateEvent(updateEventRequest?: UpdateEventRequest): Promise<UpdateEventResponse> {
        const options = ParamCreater().updateEvent(updateEventRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 禁用/启动函数快照，仅支持java运行时函数，且为非latest版本才能开启函数快照功能。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 禁用/启动函数快照
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {'enable' | 'disable'} action 禁用/启用
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateFuncSnapshot(updateFuncSnapshotRequest?: UpdateFuncSnapshotRequest): Promise<UpdateFuncSnapshotResponse> {
        const options = ParamCreater().updateFuncSnapshot(updateFuncSnapshotRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置函数异步配置信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置函数异步配置信息
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {string} contentType 消息体的类型（格式）
     * @param {UpdateFunctionAsyncInvokeConfigRequestBody} updateFunctionAsyncInvokeConfigRequestBody 设置函数异步配置请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateFunctionAsyncInvokeConfig(updateFunctionAsyncInvokeConfigRequest?: UpdateFunctionAsyncInvokeConfigRequest): Promise<UpdateFunctionAsyncInvokeConfigResponse> {
        const options = ParamCreater().updateFunctionAsyncInvokeConfig(updateFunctionAsyncInvokeConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改指定的函数的代码。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改函数代码
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {string} contentType 消息体的类型（格式）
     * @param {UpdateFunctionCodeRequestBody} updateFunctionCodeRequestBody 更新函数代码请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateFunctionCode(updateFunctionCodeRequest?: UpdateFunctionCodeRequest): Promise<UpdateFunctionCodeResponse> {
        const options = ParamCreater().updateFunctionCode(updateFunctionCodeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新函数置顶状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新函数置顶状态
     * @param {string} funcUrn 函数URN
     * @param {string} state 置顶状态
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateFunctionCollectState(updateFunctionCollectStateRequest?: UpdateFunctionCollectStateRequest): Promise<UpdateFunctionCollectStateResponse> {
        const options = ParamCreater().updateFunctionCollectState(updateFunctionCollectStateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改指定的函数的metadata信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改函数的metadata信息
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {string} contentType 消息体的类型（格式）
     * @param {UpdateFunctionConfigRequestBody} updateFunctionConfigRequestBody 更新函数配置请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateFunctionConfig(updateFunctionConfigRequest?: UpdateFunctionConfigRequest): Promise<UpdateFunctionConfigResponse> {
        const options = ParamCreater().updateFunctionConfig(updateFunctionConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新函数最大实例数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新函数最大实例数
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {string} contentType 消息体的类型（格式）
     * @param {UpdateFunctionMaxInstanceConfigRequestBody} updateFunctionMaxInstanceConfigRequestBody 更新函数配置请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateFunctionMaxInstanceConfig(updateFunctionMaxInstanceConfigRequest?: UpdateFunctionMaxInstanceConfigRequest): Promise<UpdateFunctionMaxInstanceConfigResponse> {
        const options = ParamCreater().updateFunctionMaxInstanceConfig(updateFunctionMaxInstanceConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改函数预留实例数量。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改函数预留实例数量
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {string} contentType 消息体的类型（格式）
     * @param {UpdateFunctionReservedInstancesCountRequestBody} updateFunctionReservedInstancesCountRequestBody 更新预留实例个数请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateFunctionReservedInstancesCount(updateFunctionReservedInstancesCountRequest?: UpdateFunctionReservedInstancesCountRequest): Promise<UpdateFunctionReservedInstancesCountResponse> {
        const options = ParamCreater().updateFunctionReservedInstancesCount(updateFunctionReservedInstancesCountRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改函数调用链配置,开通/修改传入aksk，关闭aksk传空
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改函数调用链配置
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {string} contentType 消息体的类型（格式）
     * @param {UpdateTracingRequestBody} updateTracingRequestBody 请求body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTracing(updateTracingRequest?: UpdateTracingRequest): Promise<UpdateTracingResponse> {
        const options = ParamCreater().updateTracing(updateTracingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新触发器
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新触发器
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {'TIMER' | 'APIG' | 'CTS' | 'DDS' | 'DMS' | 'DIS' | 'LTS' | 'OBS' | 'SMN' | 'KAFKA' | 'RABBITMQ' | 'DEDICATEDGATEWAY' | 'OPENSOURCEKAFKA' | 'APIC' | 'GAUSSMONGO' | 'EVENTGRID' | 'IOTDA'} triggerTypeCode 触发器类型代码。
     * @param {string} triggerId 触发器编码。
     * @param {string} contentType 消息体的类型（格式）
     * @param {UpdateTriggerRequestBody} updateTriggerRequestBody 更新触发器的请求body体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTrigger(updateTriggerRequest?: UpdateTriggerRequest): Promise<UpdateTriggerResponse> {
        const options = ParamCreater().updateTrigger(updateTriggerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改函数版本别名信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改函数版本别名信息
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {string} aliasName 要更新的别名名称。
     * @param {string} contentType 消息体的类型（格式）
     * @param {UpdateVersionAliasRequestBody} updateVersionAliasRequestBody 创建函数请求body体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateVersionAlias(updateVersionAliasRequest?: UpdateVersionAliasRequest): Promise<UpdateVersionAliasResponse> {
        const options = ParamCreater().updateVersionAlias(updateVersionAliasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改指定函数流实例的元数据
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改指定函数流实例的元数据
     * @param {string} workflowId 函数工作流ID
     * @param {WorkflowCreateBody} updateWorkflowRequestBody 函数流创建body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateWorkFlow(updateWorkFlowRequest?: UpdateWorkFlowRequest): Promise<UpdateWorkFlowResponse> {
        const options = ParamCreater().updateWorkFlow(updateWorkFlowRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 异步执行函数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        asyncInvokeFunction(asyncInvokeFunctionRequest?: AsyncInvokeFunctionRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/fgs/functions/{function_urn}/invocations-async",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let functionUrn;
            
            let contentType;

            if (asyncInvokeFunctionRequest !== null && asyncInvokeFunctionRequest !== undefined) {
                if (asyncInvokeFunctionRequest instanceof AsyncInvokeFunctionRequest) {
                    functionUrn = asyncInvokeFunctionRequest.functionUrn;
                    contentType = asyncInvokeFunctionRequest.contentType;
                    body = asyncInvokeFunctionRequest.body
                } else {
                    functionUrn = asyncInvokeFunctionRequest['function_urn'];
                    contentType = asyncInvokeFunctionRequest['Content-Type'];
                    body = asyncInvokeFunctionRequest['body'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling asyncInvokeFunction.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'function_urn': functionUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定函数所有触发器设置。
         * 
         * 在提供函数版本且非latest的情况下，删除对应函数版本的触发器。
         * 在提供函数别名的情况下，删除对应函数别名的触发器。
         * 在不提供函数版本（也不提供别名）或版本为latest的情况下，删除该函数所有的触发器（包括所有版本和别名）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteFunctionTriggers(batchDeleteFunctionTriggersRequest?: BatchDeleteFunctionTriggersRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/fgs/triggers/{function_urn}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let functionUrn;
            
            let contentType;

            if (batchDeleteFunctionTriggersRequest !== null && batchDeleteFunctionTriggersRequest !== undefined) {
                if (batchDeleteFunctionTriggersRequest instanceof BatchDeleteFunctionTriggersRequest) {
                    functionUrn = batchDeleteFunctionTriggersRequest.functionUrn;
                    contentType = batchDeleteFunctionTriggersRequest.contentType;
                } else {
                    functionUrn = batchDeleteFunctionTriggersRequest['function_urn'];
                    contentType = batchDeleteFunctionTriggersRequest['Content-Type'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling batchDeleteFunctionTriggers.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'function_urn': functionUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除函数流
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteWorkflows(batchDeleteWorkflowsRequest?: BatchDeleteWorkflowsRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/fgs/workflows",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDeleteWorkflowsRequest !== null && batchDeleteWorkflowsRequest !== undefined) {
                if (batchDeleteWorkflowsRequest instanceof BatchDeleteWorkflowsRequest) {
                    body = batchDeleteWorkflowsRequest.body
                } else {
                    body = batchDeleteWorkflowsRequest['body'];
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
         * -| 当前仅支持参数recursive为false且force为true的函数。 在1：N的函数做并发异步调用的场景下调用停止异步请求接口时，同一函数实例同时在执行的其他请求也会被一并停止并返回4208 function invocation canceled
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        cancelAsyncInvocation(cancelAsyncInvocationRequest?: CancelAsyncInvocationRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/fgs/functions/{function_urn}/cancel",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let functionUrn;
            
            let contentType;

            if (cancelAsyncInvocationRequest !== null && cancelAsyncInvocationRequest !== undefined) {
                if (cancelAsyncInvocationRequest instanceof CancelAsyncInvocationRequest) {
                    functionUrn = cancelAsyncInvocationRequest.functionUrn;
                    contentType = cancelAsyncInvocationRequest.contentType;
                    body = cancelAsyncInvocationRequest.body
                } else {
                    functionUrn = cancelAsyncInvocationRequest['function_urn'];
                    contentType = cancelAsyncInvocationRequest['Content-Type'];
                    body = cancelAsyncInvocationRequest['body'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling cancelAsyncInvocation.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'function_urn': functionUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 回调工作流
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCallbackWorkflow(createCallbackWorkflowRequest?: CreateCallbackWorkflowRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/fgs/workflows/{workflow_id}/callback",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workflowId;
            
            let xWorkflowRunId;
            
            let xWorkflowStateId;

            if (createCallbackWorkflowRequest !== null && createCallbackWorkflowRequest !== undefined) {
                if (createCallbackWorkflowRequest instanceof CreateCallbackWorkflowRequest) {
                    workflowId = createCallbackWorkflowRequest.workflowId;
                    xWorkflowRunId = createCallbackWorkflowRequest.xWorkflowRunId;
                    xWorkflowStateId = createCallbackWorkflowRequest.xWorkflowStateId;
                    body = createCallbackWorkflowRequest.body
                } else {
                    workflowId = createCallbackWorkflowRequest['workflow_id'];
                    xWorkflowRunId = createCallbackWorkflowRequest['X-Workflow-Run-Id'];
                    xWorkflowStateId = createCallbackWorkflowRequest['X-Workflow-State-Id'];
                    body = createCallbackWorkflowRequest['body'];
                }
            }

        
            if (workflowId === null || workflowId === undefined) {
            throw new RequiredError('workflowId','Required parameter workflowId was null or undefined when calling createCallbackWorkflow.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xWorkflowRunId !== undefined && xWorkflowRunId !== null) {
                localVarHeaderParameter['X-Workflow-Run-Id'] = String(xWorkflowRunId);
            }
            if (xWorkflowStateId !== undefined && xWorkflowStateId !== null) {
                localVarHeaderParameter['X-Workflow-State-Id'] = String(xWorkflowStateId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workflow_id': workflowId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建依赖包版本
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDependencyVersion(createDependencyVersionRequest?: CreateDependencyVersionRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/fgs/dependencies/version",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (createDependencyVersionRequest !== null && createDependencyVersionRequest !== undefined) {
                if (createDependencyVersionRequest instanceof CreateDependencyVersionRequest) {
                    contentType = createDependencyVersionRequest.contentType;
                    body = createDependencyVersionRequest.body
                } else {
                    contentType = createDependencyVersionRequest['Content-Type'];
                    body = createDependencyVersionRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建测试事件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createEvent(createEventRequest?: CreateEventRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/fgs/functions/{function_urn}/events",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let functionUrn;
            
            let contentType;

            if (createEventRequest !== null && createEventRequest !== undefined) {
                if (createEventRequest instanceof CreateEventRequest) {
                    functionUrn = createEventRequest.functionUrn;
                    contentType = createEventRequest.contentType;
                    body = createEventRequest.body
                } else {
                    functionUrn = createEventRequest['function_urn'];
                    contentType = createEventRequest['Content-Type'];
                    body = createEventRequest['body'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling createEvent.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'function_urn': functionUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建指定的函数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createFunction(createFunctionRequest?: CreateFunctionRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/fgs/functions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (createFunctionRequest !== null && createFunctionRequest !== undefined) {
                if (createFunctionRequest instanceof CreateFunctionRequest) {
                    contentType = createFunctionRequest.contentType;
                    body = createFunctionRequest.body
                } else {
                    contentType = createFunctionRequest['Content-Type'];
                    body = createFunctionRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建应用程序（该功能目前仅支持华北-北京四、华东-上海一）
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createFunctionApp(createFunctionAppRequest?: CreateFunctionAppRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/fgs/applications",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (createFunctionAppRequest !== null && createFunctionAppRequest !== undefined) {
                if (createFunctionAppRequest instanceof CreateFunctionAppRequest) {
                    contentType = createFunctionAppRequest.contentType;
                    body = createFunctionAppRequest.body
                } else {
                    contentType = createFunctionAppRequest['Content-Type'];
                    body = createFunctionAppRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建触发器。
         * 
         * - 可以创建的触发器类型包括TIMER、APIG、CTS、DDS、DMS、DIS、LTS、OBS、SMN、KAFKA。
         * - DDS和KAFKA触发器创建时默认为DISABLED状态，其他触发器默认为ACTIVE状态。
         * - TIMER、DDS、DMS、KAFKA、LTS触发器支持禁用，其他触发器不支持。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createFunctionTrigger(createFunctionTriggerRequest?: CreateFunctionTriggerRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/fgs/triggers/{function_urn}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let functionUrn;
            
            let contentType;

            if (createFunctionTriggerRequest !== null && createFunctionTriggerRequest !== undefined) {
                if (createFunctionTriggerRequest instanceof CreateFunctionTriggerRequest) {
                    functionUrn = createFunctionTriggerRequest.functionUrn;
                    contentType = createFunctionTriggerRequest.contentType;
                    body = createFunctionTriggerRequest.body
                } else {
                    functionUrn = createFunctionTriggerRequest['function_urn'];
                    contentType = createFunctionTriggerRequest['Content-Type'];
                    body = createFunctionTriggerRequest['body'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling createFunctionTrigger.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'function_urn': functionUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 发布函数版本。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createFunctionVersion(createFunctionVersionRequest?: CreateFunctionVersionRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/fgs/functions/{function_urn}/versions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let functionUrn;
            
            let contentType;

            if (createFunctionVersionRequest !== null && createFunctionVersionRequest !== undefined) {
                if (createFunctionVersionRequest instanceof CreateFunctionVersionRequest) {
                    functionUrn = createFunctionVersionRequest.functionUrn;
                    contentType = createFunctionVersionRequest.contentType;
                    body = createFunctionVersionRequest.body
                } else {
                    functionUrn = createFunctionVersionRequest['function_urn'];
                    contentType = createFunctionVersionRequest['Content-Type'];
                    body = createFunctionVersionRequest['body'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling createFunctionVersion.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'function_urn': functionUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建资源标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTags(createTagsRequest?: CreateTagsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/{resource_type}/{resource_id}/tags/create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceType;
            
            let resourceId;
            
            let contentType;

            if (createTagsRequest !== null && createTagsRequest !== undefined) {
                if (createTagsRequest instanceof CreateTagsRequest) {
                    resourceType = createTagsRequest.resourceType;
                    resourceId = createTagsRequest.resourceId;
                    contentType = createTagsRequest.contentType;
                    body = createTagsRequest.body
                } else {
                    resourceType = createTagsRequest['resource_type'];
                    resourceId = createTagsRequest['resource_id'];
                    contentType = createTagsRequest['Content-Type'];
                    body = createTagsRequest['body'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling createTags.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling createTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建函数灰度版本别名。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createVersionAlias(createVersionAliasRequest?: CreateVersionAliasRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/fgs/functions/{function_urn}/aliases",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let functionUrn;
            
            let contentType;

            if (createVersionAliasRequest !== null && createVersionAliasRequest !== undefined) {
                if (createVersionAliasRequest instanceof CreateVersionAliasRequest) {
                    functionUrn = createVersionAliasRequest.functionUrn;
                    contentType = createVersionAliasRequest.contentType;
                    body = createVersionAliasRequest.body
                } else {
                    functionUrn = createVersionAliasRequest['function_urn'];
                    contentType = createVersionAliasRequest['Content-Type'];
                    body = createVersionAliasRequest['body'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling createVersionAlias.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'function_urn': functionUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建下沉入口。（该功能目前仅支持华北-北京四、华东-上海一、华东-上海二、西南-贵阳一）
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createVpcEndpoint(createVpcEndpointRequest?: CreateVpcEndpointRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/fgs/vpc-endpoint",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (createVpcEndpointRequest !== null && createVpcEndpointRequest !== undefined) {
                if (createVpcEndpointRequest instanceof CreateVpcEndpointRequest) {
                    contentType = createVpcEndpointRequest.contentType;
                    body = createVpcEndpointRequest.body
                } else {
                    contentType = createVpcEndpointRequest['Content-Type'];
                    body = createVpcEndpointRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建函数流
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createWorkflow(createWorkflowRequest?: CreateWorkflowRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/fgs/workflows",
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
         * 删除依赖包版本
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDependencyVersion(deleteDependencyVersionRequest?: DeleteDependencyVersionRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/fgs/dependencies/{depend_id}/version/{version}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let dependId;
            
            let version;
            
            let contentType;

            if (deleteDependencyVersionRequest !== null && deleteDependencyVersionRequest !== undefined) {
                if (deleteDependencyVersionRequest instanceof DeleteDependencyVersionRequest) {
                    dependId = deleteDependencyVersionRequest.dependId;
                    version = deleteDependencyVersionRequest.version;
                    contentType = deleteDependencyVersionRequest.contentType;
                } else {
                    dependId = deleteDependencyVersionRequest['depend_id'];
                    version = deleteDependencyVersionRequest['version'];
                    contentType = deleteDependencyVersionRequest['Content-Type'];
                }
            }

        
            if (dependId === null || dependId === undefined) {
            throw new RequiredError('dependId','Required parameter dependId was null or undefined when calling deleteDependencyVersion.');
            }
            if (version === null || version === undefined) {
            throw new RequiredError('version','Required parameter version was null or undefined when calling deleteDependencyVersion.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'depend_id': dependId,'version': version, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定测试事件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteEvent(deleteEventRequest?: DeleteEventRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/fgs/functions/{function_urn}/events/{event_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let functionUrn;
            
            let contentType;
            
            let eventId;

            if (deleteEventRequest !== null && deleteEventRequest !== undefined) {
                if (deleteEventRequest instanceof DeleteEventRequest) {
                    functionUrn = deleteEventRequest.functionUrn;
                    contentType = deleteEventRequest.contentType;
                    eventId = deleteEventRequest.eventId;
                } else {
                    functionUrn = deleteEventRequest['function_urn'];
                    contentType = deleteEventRequest['Content-Type'];
                    eventId = deleteEventRequest['event_id'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling deleteEvent.');
            }
            if (eventId === null || eventId === undefined) {
            throw new RequiredError('eventId','Required parameter eventId was null or undefined when calling deleteEvent.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'function_urn': functionUrn,'event_id': eventId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定的函数或者特定的版本（不允许删除latest版本）。
         * 
         * 如果URN中包含函数版本或者别名，则删除特定的函数版本或者别名指向的版本以及该版本关联的trigger。
         * 如果URN中不包含版本或者别名，则删除整个函数，包含所有版本以及别名，触发器。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteFunction(deleteFunctionRequest?: DeleteFunctionRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/fgs/functions/{function_urn}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let functionUrn;
            
            let contentType;

            if (deleteFunctionRequest !== null && deleteFunctionRequest !== undefined) {
                if (deleteFunctionRequest instanceof DeleteFunctionRequest) {
                    functionUrn = deleteFunctionRequest.functionUrn;
                    contentType = deleteFunctionRequest.contentType;
                } else {
                    functionUrn = deleteFunctionRequest['function_urn'];
                    contentType = deleteFunctionRequest['Content-Type'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling deleteFunction.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'function_urn': functionUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除应用程序（该功能目前仅支持华北-北京四、华东-上海一）
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteFunctionApp(deleteFunctionAppRequest?: DeleteFunctionAppRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/fgs/applications/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;
            
            let contentType;

            if (deleteFunctionAppRequest !== null && deleteFunctionAppRequest !== undefined) {
                if (deleteFunctionAppRequest instanceof DeleteFunctionAppRequest) {
                    id = deleteFunctionAppRequest.id;
                    contentType = deleteFunctionAppRequest.contentType;
                } else {
                    id = deleteFunctionAppRequest['id'];
                    contentType = deleteFunctionAppRequest['Content-Type'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteFunctionApp.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除函数异步配置信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteFunctionAsyncInvokeConfig(deleteFunctionAsyncInvokeConfigRequest?: DeleteFunctionAsyncInvokeConfigRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/fgs/functions/{function_urn}/async-invoke-config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let functionUrn;
            
            let contentType;

            if (deleteFunctionAsyncInvokeConfigRequest !== null && deleteFunctionAsyncInvokeConfigRequest !== undefined) {
                if (deleteFunctionAsyncInvokeConfigRequest instanceof DeleteFunctionAsyncInvokeConfigRequest) {
                    functionUrn = deleteFunctionAsyncInvokeConfigRequest.functionUrn;
                    contentType = deleteFunctionAsyncInvokeConfigRequest.contentType;
                } else {
                    functionUrn = deleteFunctionAsyncInvokeConfigRequest['function_urn'];
                    contentType = deleteFunctionAsyncInvokeConfigRequest['Content-Type'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling deleteFunctionAsyncInvokeConfig.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'function_urn': functionUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除触发器。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteFunctionTrigger(deleteFunctionTriggerRequest?: DeleteFunctionTriggerRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/fgs/triggers/{function_urn}/{trigger_type_code}/{trigger_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let functionUrn;
            
            let triggerTypeCode;
            
            let triggerId;
            
            let contentType;

            if (deleteFunctionTriggerRequest !== null && deleteFunctionTriggerRequest !== undefined) {
                if (deleteFunctionTriggerRequest instanceof DeleteFunctionTriggerRequest) {
                    functionUrn = deleteFunctionTriggerRequest.functionUrn;
                    triggerTypeCode = deleteFunctionTriggerRequest.triggerTypeCode;
                    triggerId = deleteFunctionTriggerRequest.triggerId;
                    contentType = deleteFunctionTriggerRequest.contentType;
                } else {
                    functionUrn = deleteFunctionTriggerRequest['function_urn'];
                    triggerTypeCode = deleteFunctionTriggerRequest['trigger_type_code'];
                    triggerId = deleteFunctionTriggerRequest['trigger_id'];
                    contentType = deleteFunctionTriggerRequest['Content-Type'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling deleteFunctionTrigger.');
            }
            if (triggerTypeCode === null || triggerTypeCode === undefined) {
            throw new RequiredError('triggerTypeCode','Required parameter triggerTypeCode was null or undefined when calling deleteFunctionTrigger.');
            }
            if (triggerId === null || triggerId === undefined) {
            throw new RequiredError('triggerId','Required parameter triggerId was null or undefined when calling deleteFunctionTrigger.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'function_urn': functionUrn,'trigger_type_code': triggerTypeCode,'trigger_id': triggerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除资源标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTags(deleteTagsRequest?: DeleteTagsRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/{resource_type}/{resource_id}/tags/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceType;
            
            let resourceId;
            
            let contentType;

            if (deleteTagsRequest !== null && deleteTagsRequest !== undefined) {
                if (deleteTagsRequest instanceof DeleteTagsRequest) {
                    resourceType = deleteTagsRequest.resourceType;
                    resourceId = deleteTagsRequest.resourceId;
                    contentType = deleteTagsRequest.contentType;
                    body = deleteTagsRequest.body
                } else {
                    resourceType = deleteTagsRequest['resource_type'];
                    resourceId = deleteTagsRequest['resource_id'];
                    contentType = deleteTagsRequest['Content-Type'];
                    body = deleteTagsRequest['body'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling deleteTags.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling deleteTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除函数版本别名。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteVersionAlias(deleteVersionAliasRequest?: DeleteVersionAliasRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/fgs/functions/{function_urn}/aliases/{alias_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let functionUrn;
            
            let aliasName;
            
            let contentType;

            if (deleteVersionAliasRequest !== null && deleteVersionAliasRequest !== undefined) {
                if (deleteVersionAliasRequest instanceof DeleteVersionAliasRequest) {
                    functionUrn = deleteVersionAliasRequest.functionUrn;
                    aliasName = deleteVersionAliasRequest.aliasName;
                    contentType = deleteVersionAliasRequest.contentType;
                } else {
                    functionUrn = deleteVersionAliasRequest['function_urn'];
                    aliasName = deleteVersionAliasRequest['alias_name'];
                    contentType = deleteVersionAliasRequest['Content-Type'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling deleteVersionAlias.');
            }
            if (aliasName === null || aliasName === undefined) {
            throw new RequiredError('aliasName','Required parameter aliasName was null or undefined when calling deleteVersionAlias.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'function_urn': functionUrn,'alias_name': aliasName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除下沉入口。（该功能目前仅支持华北-北京四、华东-上海一、华东-上海二、西南-贵阳一）
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteVpcEndpoint(deleteVpcEndpointRequest?: DeleteVpcEndpointRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/fgs/vpc-endpoint/{vpc_id}/{subnet_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let vpcId;
            
            let subnetId;
            
            let contentType;

            if (deleteVpcEndpointRequest !== null && deleteVpcEndpointRequest !== undefined) {
                if (deleteVpcEndpointRequest instanceof DeleteVpcEndpointRequest) {
                    vpcId = deleteVpcEndpointRequest.vpcId;
                    subnetId = deleteVpcEndpointRequest.subnetId;
                    contentType = deleteVpcEndpointRequest.contentType;
                } else {
                    vpcId = deleteVpcEndpointRequest['vpc_id'];
                    subnetId = deleteVpcEndpointRequest['subnet_id'];
                    contentType = deleteVpcEndpointRequest['Content-Type'];
                }
            }

        
            if (vpcId === null || vpcId === undefined) {
            throw new RequiredError('vpcId','Required parameter vpcId was null or undefined when calling deleteVpcEndpoint.');
            }
            if (subnetId === null || subnetId === undefined) {
            throw new RequiredError('subnetId','Required parameter subnetId was null or undefined when calling deleteVpcEndpoint.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'vpc_id': vpcId,'subnet_id': subnetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 允许异步状态通知。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enableAsyncStatusLog(enableAsyncStatusLogRequest?: EnableAsyncStatusLogRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/fgs/functions/enable-async-status-logs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;

            if (enableAsyncStatusLogRequest !== null && enableAsyncStatusLogRequest !== undefined) {
                if (enableAsyncStatusLogRequest instanceof EnableAsyncStatusLogRequest) {
                    contentType = enableAsyncStatusLogRequest.contentType;
                } else {
                    contentType = enableAsyncStatusLogRequest['Content-Type'];
                }
            }

        
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 开通lts日志上报功能。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enableLtsLogs(enableLtsLogsRequest?: EnableLtsLogsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/fgs/functions/enable-lts-logs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;

            if (enableLtsLogsRequest !== null && enableLtsLogsRequest !== undefined) {
                if (enableLtsLogsRequest instanceof EnableLtsLogsRequest) {
                    contentType = enableLtsLogsRequest.contentType;
                } else {
                    contentType = enableLtsLogsRequest['Content-Type'];
                }
            }

        
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 导出函数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        exportFunction(exportFunctionRequest?: ExportFunctionRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/functions/{function_urn}/export",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let functionUrn;
            
            let contentType;
            
            let config;
            
            let code;
            
            let type;

            if (exportFunctionRequest !== null && exportFunctionRequest !== undefined) {
                if (exportFunctionRequest instanceof ExportFunctionRequest) {
                    functionUrn = exportFunctionRequest.functionUrn;
                    contentType = exportFunctionRequest.contentType;
                    config = exportFunctionRequest.config;
                    code = exportFunctionRequest.code;
                    type = exportFunctionRequest.type;
                } else {
                    functionUrn = exportFunctionRequest['function_urn'];
                    contentType = exportFunctionRequest['Content-Type'];
                    config = exportFunctionRequest['config'];
                    code = exportFunctionRequest['code'];
                    type = exportFunctionRequest['type'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling exportFunction.');
            }
            if (config !== null && config !== undefined) {
                localVarQueryParameter['config'] = config;
            }
            if (code !== null && code !== undefined) {
                localVarQueryParameter['code'] = code;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'function_urn': functionUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 导入函数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        importFunction(importFunctionRequest?: ImportFunctionRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/fgs/functions/import",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (importFunctionRequest !== null && importFunctionRequest !== undefined) {
                if (importFunctionRequest instanceof ImportFunctionRequest) {
                    contentType = importFunctionRequest.contentType;
                    body = importFunctionRequest.body
                } else {
                    contentType = importFunctionRequest['Content-Type'];
                    body = importFunctionRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 同步调用指的是客户端请求需要明确等到响应结果，也就是说这样的请求必须得调用到用户的函数，并且等到调用完成才返回。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        invokeFunction(invokeFunctionRequest?: InvokeFunctionRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/fgs/functions/{function_urn}/invocations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let functionUrn;
            
            let contentType;
            
            let xCffLogType;
            
            let xCFFRequestVersion;

            if (invokeFunctionRequest !== null && invokeFunctionRequest !== undefined) {
                if (invokeFunctionRequest instanceof InvokeFunctionRequest) {
                    functionUrn = invokeFunctionRequest.functionUrn;
                    contentType = invokeFunctionRequest.contentType;
                    body = invokeFunctionRequest.body
                    xCffLogType = invokeFunctionRequest.xCffLogType;
                    xCFFRequestVersion = invokeFunctionRequest.xCFFRequestVersion;
                } else {
                    functionUrn = invokeFunctionRequest['function_urn'];
                    contentType = invokeFunctionRequest['Content-Type'];
                    body = invokeFunctionRequest['body'];
                    xCffLogType = invokeFunctionRequest['X-Cff-Log-Type'];
                    xCFFRequestVersion = invokeFunctionRequest['X-CFF-Request-Version'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling invokeFunction.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            if (xCffLogType !== undefined && xCffLogType !== null) {
                localVarHeaderParameter['X-Cff-Log-Type'] = String(xCffLogType);
            }
            if (xCFFRequestVersion !== undefined && xCFFRequestVersion !== null) {
                localVarHeaderParameter['X-CFF-Request-Version'] = String(xCFFRequestVersion);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'function_urn': functionUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取函数异步调用活跃请求列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listActiveAsyncInvocations(listActiveAsyncInvocationsRequest?: ListActiveAsyncInvocationsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/functions/{function_urn}/active-async-invocations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let functionUrn;
            
            let contentType;
            
            let requests;
            
            let marker;
            
            let limit;
            
            let status;
            
            let queryBeginTime;
            
            let queryEndTime;

            if (listActiveAsyncInvocationsRequest !== null && listActiveAsyncInvocationsRequest !== undefined) {
                if (listActiveAsyncInvocationsRequest instanceof ListActiveAsyncInvocationsRequest) {
                    functionUrn = listActiveAsyncInvocationsRequest.functionUrn;
                    contentType = listActiveAsyncInvocationsRequest.contentType;
                    requests = listActiveAsyncInvocationsRequest.requests;
                    marker = listActiveAsyncInvocationsRequest.marker;
                    limit = listActiveAsyncInvocationsRequest.limit;
                    status = listActiveAsyncInvocationsRequest.status;
                    queryBeginTime = listActiveAsyncInvocationsRequest.queryBeginTime;
                    queryEndTime = listActiveAsyncInvocationsRequest.queryEndTime;
                } else {
                    functionUrn = listActiveAsyncInvocationsRequest['function_urn'];
                    contentType = listActiveAsyncInvocationsRequest['Content-Type'];
                    requests = listActiveAsyncInvocationsRequest['requests'];
                    marker = listActiveAsyncInvocationsRequest['marker'];
                    limit = listActiveAsyncInvocationsRequest['limit'];
                    status = listActiveAsyncInvocationsRequest['status'];
                    queryBeginTime = listActiveAsyncInvocationsRequest['query_begin_time'];
                    queryEndTime = listActiveAsyncInvocationsRequest['query_end_time'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling listActiveAsyncInvocations.');
            }
            if (requests !== null && requests !== undefined) {
                localVarQueryParameter['requests'] = requests;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (queryBeginTime !== null && queryBeginTime !== undefined) {
                localVarQueryParameter['query_begin_time'] = queryBeginTime;
            }
            if (queryEndTime !== null && queryEndTime !== undefined) {
                localVarQueryParameter['query_end_time'] = queryEndTime;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'function_urn': functionUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询应用程序模板列表（该功能目前仅支持华北-北京四、华东-上海一）
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAppTemplates(listAppTemplatesRequest?: ListAppTemplatesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/application/templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let marker;
            
            let maxitems;
            
            let runtime;
            
            let category;
            
            let xLanguage;

            if (listAppTemplatesRequest !== null && listAppTemplatesRequest !== undefined) {
                if (listAppTemplatesRequest instanceof ListAppTemplatesRequest) {
                    contentType = listAppTemplatesRequest.contentType;
                    marker = listAppTemplatesRequest.marker;
                    maxitems = listAppTemplatesRequest.maxitems;
                    runtime = listAppTemplatesRequest.runtime;
                    category = listAppTemplatesRequest.category;
                    xLanguage = listAppTemplatesRequest.xLanguage;
                } else {
                    contentType = listAppTemplatesRequest['Content-Type'];
                    marker = listAppTemplatesRequest['marker'];
                    maxitems = listAppTemplatesRequest['maxitems'];
                    runtime = listAppTemplatesRequest['runtime'];
                    category = listAppTemplatesRequest['category'];
                    xLanguage = listAppTemplatesRequest['X-Language'];
                }
            }

        
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (maxitems !== null && maxitems !== undefined) {
                localVarQueryParameter['maxitems'] = maxitems;
            }
            if (runtime !== null && runtime !== undefined) {
                localVarQueryParameter['runtime'] = runtime;
            }
            if (category !== null && category !== undefined) {
                localVarQueryParameter['category'] = category;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取函数异步调用请求列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAsyncInvocations(listAsyncInvocationsRequest?: ListAsyncInvocationsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/functions/{function_urn}/async-invocations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let functionUrn;
            
            let contentType;
            
            let requestId;
            
            let marker;
            
            let limit;
            
            let status;
            
            let queryBeginTime;
            
            let queryEndTime;

            if (listAsyncInvocationsRequest !== null && listAsyncInvocationsRequest !== undefined) {
                if (listAsyncInvocationsRequest instanceof ListAsyncInvocationsRequest) {
                    functionUrn = listAsyncInvocationsRequest.functionUrn;
                    contentType = listAsyncInvocationsRequest.contentType;
                    requestId = listAsyncInvocationsRequest.requestId;
                    marker = listAsyncInvocationsRequest.marker;
                    limit = listAsyncInvocationsRequest.limit;
                    status = listAsyncInvocationsRequest.status;
                    queryBeginTime = listAsyncInvocationsRequest.queryBeginTime;
                    queryEndTime = listAsyncInvocationsRequest.queryEndTime;
                } else {
                    functionUrn = listAsyncInvocationsRequest['function_urn'];
                    contentType = listAsyncInvocationsRequest['Content-Type'];
                    requestId = listAsyncInvocationsRequest['request_id'];
                    marker = listAsyncInvocationsRequest['marker'];
                    limit = listAsyncInvocationsRequest['limit'];
                    status = listAsyncInvocationsRequest['status'];
                    queryBeginTime = listAsyncInvocationsRequest['query_begin_time'];
                    queryEndTime = listAsyncInvocationsRequest['query_end_time'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling listAsyncInvocations.');
            }
            if (requestId !== null && requestId !== undefined) {
                localVarQueryParameter['request_id'] = requestId;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (queryBeginTime !== null && queryBeginTime !== undefined) {
                localVarQueryParameter['query_begin_time'] = queryBeginTime;
            }
            if (queryEndTime !== null && queryEndTime !== undefined) {
                localVarQueryParameter['query_end_time'] = queryEndTime;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'function_urn': functionUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定函数绑定的servicebridge函数列表信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBridgeFunctions(listBridgeFunctionsRequest?: ListBridgeFunctionsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/functions/{function_urn}/servicebridge/relation",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let functionUrn;
            
            let contentType;
            
            let type;

            if (listBridgeFunctionsRequest !== null && listBridgeFunctionsRequest !== undefined) {
                if (listBridgeFunctionsRequest instanceof ListBridgeFunctionsRequest) {
                    functionUrn = listBridgeFunctionsRequest.functionUrn;
                    contentType = listBridgeFunctionsRequest.contentType;
                    type = listBridgeFunctionsRequest.type;
                } else {
                    functionUrn = listBridgeFunctionsRequest['function_urn'];
                    contentType = listBridgeFunctionsRequest['Content-Type'];
                    type = listBridgeFunctionsRequest['type'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling listBridgeFunctions.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'function_urn': functionUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取servicebridge可用的版本
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBridgeVersions(listBridgeVersionsRequest?: ListBridgeVersionsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/servicebridge/version",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let type;
            
            let contentType;

            if (listBridgeVersionsRequest !== null && listBridgeVersionsRequest !== undefined) {
                if (listBridgeVersionsRequest instanceof ListBridgeVersionsRequest) {
                    type = listBridgeVersionsRequest.type;
                    contentType = listBridgeVersionsRequest.contentType;
                } else {
                    type = listBridgeVersionsRequest['type'];
                    contentType = listBridgeVersionsRequest['Content-Type'];
                }
            }

        
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling listBridgeVersions.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取依赖包列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDependencies(listDependenciesRequest?: ListDependenciesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/dependencies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let marker;
            
            let maxitems;
            
            let ispublic;
            
            let dependencyType;
            
            let runtime;
            
            let name;
            
            let limit;

            if (listDependenciesRequest !== null && listDependenciesRequest !== undefined) {
                if (listDependenciesRequest instanceof ListDependenciesRequest) {
                    contentType = listDependenciesRequest.contentType;
                    marker = listDependenciesRequest.marker;
                    maxitems = listDependenciesRequest.maxitems;
                    ispublic = listDependenciesRequest.ispublic;
                    dependencyType = listDependenciesRequest.dependencyType;
                    runtime = listDependenciesRequest.runtime;
                    name = listDependenciesRequest.name;
                    limit = listDependenciesRequest.limit;
                } else {
                    contentType = listDependenciesRequest['Content-Type'];
                    marker = listDependenciesRequest['marker'];
                    maxitems = listDependenciesRequest['maxitems'];
                    ispublic = listDependenciesRequest['ispublic'];
                    dependencyType = listDependenciesRequest['dependency_type'];
                    runtime = listDependenciesRequest['runtime'];
                    name = listDependenciesRequest['name'];
                    limit = listDependenciesRequest['limit'];
                }
            }

        
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (maxitems !== null && maxitems !== undefined) {
                localVarQueryParameter['maxitems'] = maxitems;
            }
            if (ispublic !== null && ispublic !== undefined) {
                localVarQueryParameter['ispublic'] = ispublic;
            }
            if (dependencyType !== null && dependencyType !== undefined) {
                localVarQueryParameter['dependency_type'] = dependencyType;
            }
            if (runtime !== null && runtime !== undefined) {
                localVarQueryParameter['runtime'] = runtime;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取依赖包版本列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDependencyVersion(listDependencyVersionRequest?: ListDependencyVersionRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/dependencies/{depend_id}/version",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let dependId;
            
            let contentType;
            
            let marker;
            
            let maxitems;

            if (listDependencyVersionRequest !== null && listDependencyVersionRequest !== undefined) {
                if (listDependencyVersionRequest instanceof ListDependencyVersionRequest) {
                    dependId = listDependencyVersionRequest.dependId;
                    contentType = listDependencyVersionRequest.contentType;
                    marker = listDependencyVersionRequest.marker;
                    maxitems = listDependencyVersionRequest.maxitems;
                } else {
                    dependId = listDependencyVersionRequest['depend_id'];
                    contentType = listDependencyVersionRequest['Content-Type'];
                    marker = listDependencyVersionRequest['marker'];
                    maxitems = listDependencyVersionRequest['maxitems'];
                }
            }

        
            if (dependId === null || dependId === undefined) {
            throw new RequiredError('dependId','Required parameter dependId was null or undefined when calling listDependencyVersion.');
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (maxitems !== null && maxitems !== undefined) {
                localVarQueryParameter['maxitems'] = maxitems;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'depend_id': dependId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定函数的测试事件列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEvents(listEventsRequest?: ListEventsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/functions/{function_urn}/events",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let functionUrn;
            
            let contentType;

            if (listEventsRequest !== null && listEventsRequest !== undefined) {
                if (listEventsRequest instanceof ListEventsRequest) {
                    functionUrn = listEventsRequest.functionUrn;
                    contentType = listEventsRequest.contentType;
                } else {
                    functionUrn = listEventsRequest['function_urn'];
                    contentType = listEventsRequest['Content-Type'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling listEvents.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'function_urn': functionUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询应用程序列表（该功能目前仅支持华北-北京四、华东-上海一）
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFunctionApplications(listFunctionApplicationsRequest?: ListFunctionApplicationsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/applications",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let limit;
            
            let marker;

            if (listFunctionApplicationsRequest !== null && listFunctionApplicationsRequest !== undefined) {
                if (listFunctionApplicationsRequest instanceof ListFunctionApplicationsRequest) {
                    contentType = listFunctionApplicationsRequest.contentType;
                    limit = listFunctionApplicationsRequest.limit;
                    marker = listFunctionApplicationsRequest.marker;
                } else {
                    contentType = listFunctionApplicationsRequest['Content-Type'];
                    limit = listFunctionApplicationsRequest['limit'];
                    marker = listFunctionApplicationsRequest['marker'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 按指定指标排序的函数列表。
         * 
         * 默认统计按错误次数指标统计最近一天失败次数最多的前10个函数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFunctionAsMetric(listFunctionAsMetricRequest?: ListFunctionAsMetricRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/function/report",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let type;
            
            let startTime;
            
            let endTime;
            
            let limit;

            if (listFunctionAsMetricRequest !== null && listFunctionAsMetricRequest !== undefined) {
                if (listFunctionAsMetricRequest instanceof ListFunctionAsMetricRequest) {
                    contentType = listFunctionAsMetricRequest.contentType;
                    type = listFunctionAsMetricRequest.type;
                    startTime = listFunctionAsMetricRequest.startTime;
                    endTime = listFunctionAsMetricRequest.endTime;
                    limit = listFunctionAsMetricRequest.limit;
                } else {
                    contentType = listFunctionAsMetricRequest['Content-Type'];
                    type = listFunctionAsMetricRequest['type'];
                    startTime = listFunctionAsMetricRequest['start_time'];
                    endTime = listFunctionAsMetricRequest['end_time'];
                    limit = listFunctionAsMetricRequest['limit'];
                }
            }

        
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定函数所有版本的异步配置列表。。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFunctionAsyncInvokeConfig(listFunctionAsyncInvokeConfigRequest?: ListFunctionAsyncInvokeConfigRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/functions/{function_urn}/async-invoke-configs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let functionUrn;
            
            let contentType;
            
            let marker;
            
            let limit;

            if (listFunctionAsyncInvokeConfigRequest !== null && listFunctionAsyncInvokeConfigRequest !== undefined) {
                if (listFunctionAsyncInvokeConfigRequest instanceof ListFunctionAsyncInvokeConfigRequest) {
                    functionUrn = listFunctionAsyncInvokeConfigRequest.functionUrn;
                    contentType = listFunctionAsyncInvokeConfigRequest.contentType;
                    marker = listFunctionAsyncInvokeConfigRequest.marker;
                    limit = listFunctionAsyncInvokeConfigRequest.limit;
                } else {
                    functionUrn = listFunctionAsyncInvokeConfigRequest['function_urn'];
                    contentType = listFunctionAsyncInvokeConfigRequest['Content-Type'];
                    marker = listFunctionAsyncInvokeConfigRequest['marker'];
                    limit = listFunctionAsyncInvokeConfigRequest['limit'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling listFunctionAsyncInvokeConfig.');
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'function_urn': functionUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取函数预留实例数量。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFunctionReservedInstances(listFunctionReservedInstancesRequest?: ListFunctionReservedInstancesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/functions/reservedinstances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let marker;
            
            let limit;
            
            let urn;

            if (listFunctionReservedInstancesRequest !== null && listFunctionReservedInstancesRequest !== undefined) {
                if (listFunctionReservedInstancesRequest instanceof ListFunctionReservedInstancesRequest) {
                    contentType = listFunctionReservedInstancesRequest.contentType;
                    marker = listFunctionReservedInstancesRequest.marker;
                    limit = listFunctionReservedInstancesRequest.limit;
                    urn = listFunctionReservedInstancesRequest.urn;
                } else {
                    contentType = listFunctionReservedInstancesRequest['Content-Type'];
                    marker = listFunctionReservedInstancesRequest['marker'];
                    limit = listFunctionReservedInstancesRequest['limit'];
                    urn = listFunctionReservedInstancesRequest['urn'];
                }
            }

        
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (urn !== null && urn !== undefined) {
                localVarQueryParameter['urn'] = urn;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定时间段的函数运行指标。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFunctionStatistics(listFunctionStatisticsRequest?: ListFunctionStatisticsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/functions/{func_urn}/statistics/{period}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let funcUrn;
            
            let period;
            
            let contentType;

            if (listFunctionStatisticsRequest !== null && listFunctionStatisticsRequest !== undefined) {
                if (listFunctionStatisticsRequest instanceof ListFunctionStatisticsRequest) {
                    funcUrn = listFunctionStatisticsRequest.funcUrn;
                    period = listFunctionStatisticsRequest.period;
                    contentType = listFunctionStatisticsRequest.contentType;
                } else {
                    funcUrn = listFunctionStatisticsRequest['func_urn'];
                    period = listFunctionStatisticsRequest['period'];
                    contentType = listFunctionStatisticsRequest['Content-Type'];
                }
            }

        
            if (funcUrn === null || funcUrn === undefined) {
            throw new RequiredError('funcUrn','Required parameter funcUrn was null or undefined when calling listFunctionStatistics.');
            }
            if (period === null || period === undefined) {
            throw new RequiredError('period','Required parameter period was null or undefined when calling listFunctionStatistics.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'func_urn': funcUrn,'period': period, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询函数标签列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFunctionTags(listFunctionTagsRequest?: ListFunctionTagsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/{resource_type}/{resource_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceType;
            
            let resourceId;
            
            let contentType;

            if (listFunctionTagsRequest !== null && listFunctionTagsRequest !== undefined) {
                if (listFunctionTagsRequest instanceof ListFunctionTagsRequest) {
                    resourceType = listFunctionTagsRequest.resourceType;
                    resourceId = listFunctionTagsRequest.resourceId;
                    contentType = listFunctionTagsRequest.contentType;
                } else {
                    resourceType = listFunctionTagsRequest['resource_type'];
                    resourceId = listFunctionTagsRequest['resource_id'];
                    contentType = listFunctionTagsRequest['Content-Type'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling listFunctionTags.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling listFunctionTags.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取函数模板列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFunctionTemplate(listFunctionTemplateRequest?: ListFunctionTemplateRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let marker;
            
            let maxitems;
            
            let ispublic;
            
            let runtime;
            
            let scene;
            
            let service;

            if (listFunctionTemplateRequest !== null && listFunctionTemplateRequest !== undefined) {
                if (listFunctionTemplateRequest instanceof ListFunctionTemplateRequest) {
                    contentType = listFunctionTemplateRequest.contentType;
                    marker = listFunctionTemplateRequest.marker;
                    maxitems = listFunctionTemplateRequest.maxitems;
                    ispublic = listFunctionTemplateRequest.ispublic;
                    runtime = listFunctionTemplateRequest.runtime;
                    scene = listFunctionTemplateRequest.scene;
                    service = listFunctionTemplateRequest.service;
                } else {
                    contentType = listFunctionTemplateRequest['Content-Type'];
                    marker = listFunctionTemplateRequest['marker'];
                    maxitems = listFunctionTemplateRequest['maxitems'];
                    ispublic = listFunctionTemplateRequest['ispublic'];
                    runtime = listFunctionTemplateRequest['runtime'];
                    scene = listFunctionTemplateRequest['scene'];
                    service = listFunctionTemplateRequest['service'];
                }
            }

        
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (maxitems !== null && maxitems !== undefined) {
                localVarQueryParameter['maxitems'] = maxitems;
            }
            if (ispublic !== null && ispublic !== undefined) {
                localVarQueryParameter['ispublic'] = ispublic;
            }
            if (runtime !== null && runtime !== undefined) {
                localVarQueryParameter['runtime'] = runtime;
            }
            if (scene !== null && scene !== undefined) {
                localVarQueryParameter['scene'] = scene;
            }
            if (service !== null && service !== undefined) {
                localVarQueryParameter['service'] = service;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定函数的所有触发器设置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFunctionTriggers(listFunctionTriggersRequest?: ListFunctionTriggersRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/triggers/{function_urn}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let functionUrn;
            
            let contentType;

            if (listFunctionTriggersRequest !== null && listFunctionTriggersRequest !== undefined) {
                if (listFunctionTriggersRequest instanceof ListFunctionTriggersRequest) {
                    functionUrn = listFunctionTriggersRequest.functionUrn;
                    contentType = listFunctionTriggersRequest.contentType;
                } else {
                    functionUrn = listFunctionTriggersRequest['function_urn'];
                    contentType = listFunctionTriggersRequest['Content-Type'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling listFunctionTriggers.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'function_urn': functionUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定函数的版本列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFunctionVersions(listFunctionVersionsRequest?: ListFunctionVersionsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/functions/{function_urn}/versions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let functionUrn;
            
            let contentType;
            
            let marker;
            
            let maxitems;

            if (listFunctionVersionsRequest !== null && listFunctionVersionsRequest !== undefined) {
                if (listFunctionVersionsRequest instanceof ListFunctionVersionsRequest) {
                    functionUrn = listFunctionVersionsRequest.functionUrn;
                    contentType = listFunctionVersionsRequest.contentType;
                    marker = listFunctionVersionsRequest.marker;
                    maxitems = listFunctionVersionsRequest.maxitems;
                } else {
                    functionUrn = listFunctionVersionsRequest['function_urn'];
                    contentType = listFunctionVersionsRequest['Content-Type'];
                    marker = listFunctionVersionsRequest['marker'];
                    maxitems = listFunctionVersionsRequest['maxitems'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling listFunctionVersions.');
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (maxitems !== null && maxitems !== undefined) {
                localVarQueryParameter['maxitems'] = maxitems;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'function_urn': functionUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取函数列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFunctions(listFunctionsRequest?: ListFunctionsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/functions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let marker;
            
            let maxitems;
            
            let packageName;

            if (listFunctionsRequest !== null && listFunctionsRequest !== undefined) {
                if (listFunctionsRequest instanceof ListFunctionsRequest) {
                    contentType = listFunctionsRequest.contentType;
                    marker = listFunctionsRequest.marker;
                    maxitems = listFunctionsRequest.maxitems;
                    packageName = listFunctionsRequest.packageName;
                } else {
                    contentType = listFunctionsRequest['Content-Type'];
                    marker = listFunctionsRequest['marker'];
                    maxitems = listFunctionsRequest['maxitems'];
                    packageName = listFunctionsRequest['package_name'];
                }
            }

        
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (maxitems !== null && maxitems !== undefined) {
                localVarQueryParameter['maxitems'] = maxitems;
            }
            if (packageName !== null && packageName !== undefined) {
                localVarQueryParameter['package_name'] = packageName;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户配额
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listQuotas(listQuotasRequest?: ListQuotasRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/quotas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;

            if (listQuotasRequest !== null && listQuotasRequest !== undefined) {
                if (listQuotasRequest instanceof ListQuotasRequest) {
                    contentType = listQuotasRequest.contentType;
                } else {
                    contentType = listQuotasRequest['Content-Type'];
                }
            }

        
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取函数预留实例配置列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listReservedInstanceConfigs(listReservedInstanceConfigsRequest?: ListReservedInstanceConfigsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/functions/reservedinstanceconfigs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let functionUrn;
            
            let marker;
            
            let limit;

            if (listReservedInstanceConfigsRequest !== null && listReservedInstanceConfigsRequest !== undefined) {
                if (listReservedInstanceConfigsRequest instanceof ListReservedInstanceConfigsRequest) {
                    contentType = listReservedInstanceConfigsRequest.contentType;
                    functionUrn = listReservedInstanceConfigsRequest.functionUrn;
                    marker = listReservedInstanceConfigsRequest.marker;
                    limit = listReservedInstanceConfigsRequest.limit;
                } else {
                    contentType = listReservedInstanceConfigsRequest['Content-Type'];
                    functionUrn = listReservedInstanceConfigsRequest['function_urn'];
                    marker = listReservedInstanceConfigsRequest['marker'];
                    limit = listReservedInstanceConfigsRequest['limit'];
                }
            }

        
            if (functionUrn !== null && functionUrn !== undefined) {
                localVarQueryParameter['function_urn'] = functionUrn;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 租户函数统计信息。
         * 
         * 返回三类的统计信息，函数格式和大小使用情况包括配额和使用量，流量报告。
         * 通过查询参数filter可以进行过滤，查询参数period可以指定返回的时间段。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listStatistics(listStatisticsRequest?: ListStatisticsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/functions/statistics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let filter;
            
            let contentType;
            
            let period;
            
            let option;
            
            let limit;
            
            let marker;

            if (listStatisticsRequest !== null && listStatisticsRequest !== undefined) {
                if (listStatisticsRequest instanceof ListStatisticsRequest) {
                    filter = listStatisticsRequest.filter;
                    contentType = listStatisticsRequest.contentType;
                    period = listStatisticsRequest.period;
                    option = listStatisticsRequest.option;
                    limit = listStatisticsRequest.limit;
                    marker = listStatisticsRequest.marker;
                } else {
                    filter = listStatisticsRequest['filter'];
                    contentType = listStatisticsRequest['Content-Type'];
                    period = listStatisticsRequest['period'];
                    option = listStatisticsRequest['option'];
                    limit = listStatisticsRequest['limit'];
                    marker = listStatisticsRequest['marker'];
                }
            }

        
            if (filter === null || filter === undefined) {
                throw new RequiredError('filter','Required parameter filter was null or undefined when calling listStatistics.');
            }
            if (filter !== null && filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }
            if (period !== null && period !== undefined) {
                localVarQueryParameter['period'] = period;
            }
            if (option !== null && option !== undefined) {
                localVarQueryParameter['option'] = option;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取函数版本别名列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVersionAliases(listVersionAliasesRequest?: ListVersionAliasesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/functions/{function_urn}/aliases",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let functionUrn;
            
            let contentType;

            if (listVersionAliasesRequest !== null && listVersionAliasesRequest !== undefined) {
                if (listVersionAliasesRequest instanceof ListVersionAliasesRequest) {
                    functionUrn = listVersionAliasesRequest.functionUrn;
                    contentType = listVersionAliasesRequest.contentType;
                } else {
                    functionUrn = listVersionAliasesRequest['function_urn'];
                    contentType = listVersionAliasesRequest['Content-Type'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling listVersionAliases.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'function_urn': functionUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询函数流
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWorkflow(listWorkflowRequest?: ListWorkflowRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/workflows",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workflowName;
            
            let limit;
            
            let offset;
            
            let enterpriseProject;
            
            let mode;

            if (listWorkflowRequest !== null && listWorkflowRequest !== undefined) {
                if (listWorkflowRequest instanceof ListWorkflowRequest) {
                    workflowName = listWorkflowRequest.workflowName;
                    limit = listWorkflowRequest.limit;
                    offset = listWorkflowRequest.offset;
                    enterpriseProject = listWorkflowRequest.enterpriseProject;
                    mode = listWorkflowRequest.mode;
                } else {
                    workflowName = listWorkflowRequest['workflow_name'];
                    limit = listWorkflowRequest['limit'];
                    offset = listWorkflowRequest['offset'];
                    enterpriseProject = listWorkflowRequest['enterprise_project'];
                    mode = listWorkflowRequest['mode'];
                }
            }

        
            if (workflowName !== null && workflowName !== undefined) {
                localVarQueryParameter['workflow_name'] = workflowName;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (enterpriseProject !== null && enterpriseProject !== undefined) {
                localVarQueryParameter['enterprise_project'] = enterpriseProject;
            }
            if (mode !== null && mode !== undefined) {
                localVarQueryParameter['mode'] = mode;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定函数流执行实例列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWorkflowExecutions(listWorkflowExecutionsRequest?: ListWorkflowExecutionsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/workflows/{workflow_id}/executions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workflowId;
            
            let limit;
            
            let offset;
            
            let status;
            
            let startTime;
            
            let endTime;

            if (listWorkflowExecutionsRequest !== null && listWorkflowExecutionsRequest !== undefined) {
                if (listWorkflowExecutionsRequest instanceof ListWorkflowExecutionsRequest) {
                    workflowId = listWorkflowExecutionsRequest.workflowId;
                    limit = listWorkflowExecutionsRequest.limit;
                    offset = listWorkflowExecutionsRequest.offset;
                    status = listWorkflowExecutionsRequest.status;
                    startTime = listWorkflowExecutionsRequest.startTime;
                    endTime = listWorkflowExecutionsRequest.endTime;
                } else {
                    workflowId = listWorkflowExecutionsRequest['workflow_id'];
                    limit = listWorkflowExecutionsRequest['limit'];
                    offset = listWorkflowExecutionsRequest['offset'];
                    status = listWorkflowExecutionsRequest['status'];
                    startTime = listWorkflowExecutionsRequest['start_time'];
                    endTime = listWorkflowExecutionsRequest['end_time'];
                }
            }

        
            if (workflowId === null || workflowId === undefined) {
            throw new RequiredError('workflowId','Required parameter workflowId was null or undefined when calling listWorkflowExecutions.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'workflow_id': workflowId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重试函数流
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        retryWorkFlow(retryWorkFlowRequest?: RetryWorkFlowRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/fgs/workflows/{workflow_id}/executions/{execution_id}/retry",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workflowId;
            
            let executionId;

            if (retryWorkFlowRequest !== null && retryWorkFlowRequest !== undefined) {
                if (retryWorkFlowRequest instanceof RetryWorkFlowRequest) {
                    workflowId = retryWorkFlowRequest.workflowId;
                    executionId = retryWorkFlowRequest.executionId;
                } else {
                    workflowId = retryWorkFlowRequest['workflow_id'];
                    executionId = retryWorkFlowRequest['execution_id'];
                }
            }

        
            if (workflowId === null || workflowId === undefined) {
            throw new RequiredError('workflowId','Required parameter workflowId was null or undefined when calling retryWorkFlow.');
            }
            if (executionId === null || executionId === undefined) {
            throw new RequiredError('executionId','Required parameter executionId was null or undefined when calling retryWorkFlow.');
            }

            options.pathParams = { 'workflow_id': workflowId,'execution_id': executionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询应用程序模板详情（该功能目前仅支持华北-北京四、华东-上海一）
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAppTemplate(showAppTemplateRequest?: ShowAppTemplateRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/application/templates/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;
            
            let contentType;

            if (showAppTemplateRequest !== null && showAppTemplateRequest !== undefined) {
                if (showAppTemplateRequest instanceof ShowAppTemplateRequest) {
                    id = showAppTemplateRequest.id;
                    contentType = showAppTemplateRequest.contentType;
                } else {
                    id = showAppTemplateRequest['id'];
                    contentType = showAppTemplateRequest['Content-Type'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showAppTemplate.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取依赖包版本详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDependencyVersion(showDependencyVersionRequest?: ShowDependencyVersionRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/dependencies/{depend_id}/version/{version}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let dependId;
            
            let version;
            
            let contentType;

            if (showDependencyVersionRequest !== null && showDependencyVersionRequest !== undefined) {
                if (showDependencyVersionRequest instanceof ShowDependencyVersionRequest) {
                    dependId = showDependencyVersionRequest.dependId;
                    version = showDependencyVersionRequest.version;
                    contentType = showDependencyVersionRequest.contentType;
                } else {
                    dependId = showDependencyVersionRequest['depend_id'];
                    version = showDependencyVersionRequest['version'];
                    contentType = showDependencyVersionRequest['Content-Type'];
                }
            }

        
            if (dependId === null || dependId === undefined) {
            throw new RequiredError('dependId','Required parameter dependId was null or undefined when calling showDependencyVersion.');
            }
            if (version === null || version === undefined) {
            throw new RequiredError('version','Required parameter version was null or undefined when calling showDependencyVersion.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'depend_id': dependId,'version': version, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取测试事件详细信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showEvent(showEventRequest?: ShowEventRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/functions/{function_urn}/events/{event_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let functionUrn;
            
            let contentType;
            
            let eventId;

            if (showEventRequest !== null && showEventRequest !== undefined) {
                if (showEventRequest instanceof ShowEventRequest) {
                    functionUrn = showEventRequest.functionUrn;
                    contentType = showEventRequest.contentType;
                    eventId = showEventRequest.eventId;
                } else {
                    functionUrn = showEventRequest['function_urn'];
                    contentType = showEventRequest['Content-Type'];
                    eventId = showEventRequest['event_id'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling showEvent.');
            }
            if (eventId === null || eventId === undefined) {
            throw new RequiredError('eventId','Required parameter eventId was null or undefined when calling showEvent.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'function_urn': functionUrn,'event_id': eventId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询函数实例使用情况指标。
         * 
         * - 指标单位为分钟：
         *     当查询时间范围小于1小时,指标周期为1分钟
         *     当查询时间范围小于1天,指标周期为30分钟
         *     当查询时间范围大于1天,指标周期为180分钟
         * - 指标分为如下几类：reservedinstancenum（预留实例使用）、concurrency（实例使用/并发）
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showFuncReservedInstanceMetrics(showFuncReservedInstanceMetricsRequest?: ShowFuncReservedInstanceMetricsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/functions/{func_urn}/instancereports",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let funcUrn;
            
            let contentType;
            
            let marker;
            
            let limit;

            if (showFuncReservedInstanceMetricsRequest !== null && showFuncReservedInstanceMetricsRequest !== undefined) {
                if (showFuncReservedInstanceMetricsRequest instanceof ShowFuncReservedInstanceMetricsRequest) {
                    funcUrn = showFuncReservedInstanceMetricsRequest.funcUrn;
                    contentType = showFuncReservedInstanceMetricsRequest.contentType;
                    marker = showFuncReservedInstanceMetricsRequest.marker;
                    limit = showFuncReservedInstanceMetricsRequest.limit;
                } else {
                    funcUrn = showFuncReservedInstanceMetricsRequest['func_urn'];
                    contentType = showFuncReservedInstanceMetricsRequest['Content-Type'];
                    marker = showFuncReservedInstanceMetricsRequest['marker'];
                    limit = showFuncReservedInstanceMetricsRequest['limit'];
                }
            }

        
            if (funcUrn === null || funcUrn === undefined) {
            throw new RequiredError('funcUrn','Required parameter funcUrn was null or undefined when calling showFuncReservedInstanceMetrics.');
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'func_urn': funcUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询函数快照制作状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showFuncSnapshotState(showFuncSnapshotStateRequest?: ShowFuncSnapshotStateRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/functions/{function_urn}/snapshots/{action}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let functionUrn;
            
            let action;
            
            let contentType;

            if (showFuncSnapshotStateRequest !== null && showFuncSnapshotStateRequest !== undefined) {
                if (showFuncSnapshotStateRequest instanceof ShowFuncSnapshotStateRequest) {
                    functionUrn = showFuncSnapshotStateRequest.functionUrn;
                    action = showFuncSnapshotStateRequest.action;
                    contentType = showFuncSnapshotStateRequest.contentType;
                } else {
                    functionUrn = showFuncSnapshotStateRequest['function_urn'];
                    action = showFuncSnapshotStateRequest['action'];
                    contentType = showFuncSnapshotStateRequest['Content-Type'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling showFuncSnapshotState.');
            }
            if (action === null || action === undefined) {
            throw new RequiredError('action','Required parameter action was null or undefined when calling showFuncSnapshotState.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'function_urn': functionUrn,'action': action, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询应用程序详情（该功能目前仅支持华北-北京四、华东-上海一）
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showFunctionApp(showFunctionAppRequest?: ShowFunctionAppRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/applications/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;
            
            let contentType;

            if (showFunctionAppRequest !== null && showFunctionAppRequest !== undefined) {
                if (showFunctionAppRequest instanceof ShowFunctionAppRequest) {
                    id = showFunctionAppRequest.id;
                    contentType = showFunctionAppRequest.contentType;
                } else {
                    id = showFunctionAppRequest['id'];
                    contentType = showFunctionAppRequest['Content-Type'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showFunctionApp.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定函数某一版本的异步配置信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showFunctionAsyncInvokeConfig(showFunctionAsyncInvokeConfigRequest?: ShowFunctionAsyncInvokeConfigRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/functions/{function_urn}/async-invoke-config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let functionUrn;
            
            let contentType;

            if (showFunctionAsyncInvokeConfigRequest !== null && showFunctionAsyncInvokeConfigRequest !== undefined) {
                if (showFunctionAsyncInvokeConfigRequest instanceof ShowFunctionAsyncInvokeConfigRequest) {
                    functionUrn = showFunctionAsyncInvokeConfigRequest.functionUrn;
                    contentType = showFunctionAsyncInvokeConfigRequest.contentType;
                } else {
                    functionUrn = showFunctionAsyncInvokeConfigRequest['function_urn'];
                    contentType = showFunctionAsyncInvokeConfigRequest['Content-Type'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling showFunctionAsyncInvokeConfig.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'function_urn': functionUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定函数的代码。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showFunctionCode(showFunctionCodeRequest?: ShowFunctionCodeRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/functions/{function_urn}/code",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let functionUrn;
            
            let contentType;

            if (showFunctionCodeRequest !== null && showFunctionCodeRequest !== undefined) {
                if (showFunctionCodeRequest instanceof ShowFunctionCodeRequest) {
                    functionUrn = showFunctionCodeRequest.functionUrn;
                    contentType = showFunctionCodeRequest.contentType;
                } else {
                    functionUrn = showFunctionCodeRequest['function_urn'];
                    contentType = showFunctionCodeRequest['Content-Type'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling showFunctionCode.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'function_urn': functionUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定函数的metadata。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showFunctionConfig(showFunctionConfigRequest?: ShowFunctionConfigRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/functions/{function_urn}/config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let functionUrn;
            
            let contentType;

            if (showFunctionConfigRequest !== null && showFunctionConfigRequest !== undefined) {
                if (showFunctionConfigRequest instanceof ShowFunctionConfigRequest) {
                    functionUrn = showFunctionConfigRequest.functionUrn;
                    contentType = showFunctionConfigRequest.contentType;
                } else {
                    functionUrn = showFunctionConfigRequest['function_urn'];
                    contentType = showFunctionConfigRequest['Content-Type'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling showFunctionConfig.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'function_urn': functionUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询函数流量指标。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showFunctionMetrics(showFunctionMetricsRequest?: ShowFunctionMetricsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/functions/{func_urn}/slareports/{period}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let funcUrn;
            
            let period;
            
            let contentType;

            if (showFunctionMetricsRequest !== null && showFunctionMetricsRequest !== undefined) {
                if (showFunctionMetricsRequest instanceof ShowFunctionMetricsRequest) {
                    funcUrn = showFunctionMetricsRequest.funcUrn;
                    period = showFunctionMetricsRequest.period;
                    contentType = showFunctionMetricsRequest.contentType;
                } else {
                    funcUrn = showFunctionMetricsRequest['func_urn'];
                    period = showFunctionMetricsRequest['period'];
                    contentType = showFunctionMetricsRequest['Content-Type'];
                }
            }

        
            if (funcUrn === null || funcUrn === undefined) {
            throw new RequiredError('funcUrn','Required parameter funcUrn was null or undefined when calling showFunctionMetrics.');
            }
            if (period === null || period === undefined) {
            throw new RequiredError('period','Required parameter period was null or undefined when calling showFunctionMetrics.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'func_urn': funcUrn,'period': period, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定函数模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showFunctionTemplate(showFunctionTemplateRequest?: ShowFunctionTemplateRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/templates/{template_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let templateId;
            
            let contentType;

            if (showFunctionTemplateRequest !== null && showFunctionTemplateRequest !== undefined) {
                if (showFunctionTemplateRequest instanceof ShowFunctionTemplateRequest) {
                    templateId = showFunctionTemplateRequest.templateId;
                    contentType = showFunctionTemplateRequest.contentType;
                } else {
                    templateId = showFunctionTemplateRequest['template_id'];
                    contentType = showFunctionTemplateRequest['Content-Type'];
                }
            }

        
            if (templateId === null || templateId === undefined) {
            throw new RequiredError('templateId','Required parameter templateId was null or undefined when calling showFunctionTemplate.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'template_id': templateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取特定触发器的信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showFunctionTrigger(showFunctionTriggerRequest?: ShowFunctionTriggerRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/triggers/{function_urn}/{trigger_type_code}/{trigger_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let functionUrn;
            
            let triggerTypeCode;
            
            let triggerId;
            
            let contentType;

            if (showFunctionTriggerRequest !== null && showFunctionTriggerRequest !== undefined) {
                if (showFunctionTriggerRequest instanceof ShowFunctionTriggerRequest) {
                    functionUrn = showFunctionTriggerRequest.functionUrn;
                    triggerTypeCode = showFunctionTriggerRequest.triggerTypeCode;
                    triggerId = showFunctionTriggerRequest.triggerId;
                    contentType = showFunctionTriggerRequest.contentType;
                } else {
                    functionUrn = showFunctionTriggerRequest['function_urn'];
                    triggerTypeCode = showFunctionTriggerRequest['trigger_type_code'];
                    triggerId = showFunctionTriggerRequest['trigger_id'];
                    contentType = showFunctionTriggerRequest['Content-Type'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling showFunctionTrigger.');
            }
            if (triggerTypeCode === null || triggerTypeCode === undefined) {
            throw new RequiredError('triggerTypeCode','Required parameter triggerTypeCode was null or undefined when calling showFunctionTrigger.');
            }
            if (triggerId === null || triggerId === undefined) {
            throw new RequiredError('triggerId','Required parameter triggerId was null or undefined when calling showFunctionTrigger.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'function_urn': functionUrn,'trigger_type_code': triggerTypeCode,'trigger_id': triggerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定函数的lts日志组日志流配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showLtsLogDetails(showLtsLogDetailsRequest?: ShowLtsLogDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/functions/{function_urn}/lts-log-detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let functionUrn;
            
            let contentType;

            if (showLtsLogDetailsRequest !== null && showLtsLogDetailsRequest !== undefined) {
                if (showLtsLogDetailsRequest instanceof ShowLtsLogDetailsRequest) {
                    functionUrn = showLtsLogDetailsRequest.functionUrn;
                    contentType = showLtsLogDetailsRequest.contentType;
                } else {
                    functionUrn = showLtsLogDetailsRequest['function_urn'];
                    contentType = showLtsLogDetailsRequest['Content-Type'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling showLtsLogDetails.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'function_urn': functionUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询异步日志详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showProjectAsyncStatusLogInfo(showProjectAsyncStatusLogInfoRequest?: ShowProjectAsyncStatusLogInfoRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/functions/async-status-log-detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;

            if (showProjectAsyncStatusLogInfoRequest !== null && showProjectAsyncStatusLogInfoRequest !== undefined) {
                if (showProjectAsyncStatusLogInfoRequest instanceof ShowProjectAsyncStatusLogInfoRequest) {
                    contentType = showProjectAsyncStatusLogInfoRequest.contentType;
                } else {
                    contentType = showProjectAsyncStatusLogInfoRequest['Content-Type'];
                }
            }

        
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询资源标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showProjectTagsList(showProjectTagsListRequest?: ShowProjectTagsListRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/{resource_type}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceType;
            
            let contentType;

            if (showProjectTagsListRequest !== null && showProjectTagsListRequest !== undefined) {
                if (showProjectTagsListRequest instanceof ShowProjectTagsListRequest) {
                    resourceType = showProjectTagsListRequest.resourceType;
                    contentType = showProjectTagsListRequest.contentType;
                } else {
                    resourceType = showProjectTagsListRequest['resource_type'];
                    contentType = showProjectTagsListRequest['Content-Type'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling showProjectTagsList.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询资源实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showResInstanceInfo(showResInstanceInfoRequest?: ShowResInstanceInfoRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/{resource_type}/resource-instances/{action}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceType;
            
            let action;
            
            let contentType;

            if (showResInstanceInfoRequest !== null && showResInstanceInfoRequest !== undefined) {
                if (showResInstanceInfoRequest instanceof ShowResInstanceInfoRequest) {
                    resourceType = showResInstanceInfoRequest.resourceType;
                    action = showResInstanceInfoRequest.action;
                    contentType = showResInstanceInfoRequest.contentType;
                    body = showResInstanceInfoRequest.body
                } else {
                    resourceType = showResInstanceInfoRequest['resource_type'];
                    action = showResInstanceInfoRequest['action'];
                    contentType = showResInstanceInfoRequest['Content-Type'];
                    body = showResInstanceInfoRequest['body'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling showResInstanceInfo.');
            }
            if (action === null || action === undefined) {
            throw new RequiredError('action','Required parameter action was null or undefined when calling showResInstanceInfo.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_type': resourceType,'action': action, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取函数流指标
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTenantMetric(showTenantMetricRequest?: ShowTenantMetricRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/workflow-statistic",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let period;
            
            let startTime;
            
            let endTime;
            
            let metricType;

            if (showTenantMetricRequest !== null && showTenantMetricRequest !== undefined) {
                if (showTenantMetricRequest instanceof ShowTenantMetricRequest) {
                    period = showTenantMetricRequest.period;
                    startTime = showTenantMetricRequest.startTime;
                    endTime = showTenantMetricRequest.endTime;
                    metricType = showTenantMetricRequest.metricType;
                } else {
                    period = showTenantMetricRequest['period'];
                    startTime = showTenantMetricRequest['start_time'];
                    endTime = showTenantMetricRequest['end_time'];
                    metricType = showTenantMetricRequest['metric_type'];
                }
            }

        
            if (period !== null && period !== undefined) {
                localVarQueryParameter['period'] = period;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (metricType !== null && metricType !== undefined) {
                localVarQueryParameter['metric_type'] = metricType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取函数调用链配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTracing(showTracingRequest?: ShowTracingRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/functions/{function_urn}/tracing",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let functionUrn;
            
            let contentType;

            if (showTracingRequest !== null && showTracingRequest !== undefined) {
                if (showTracingRequest instanceof ShowTracingRequest) {
                    functionUrn = showTracingRequest.functionUrn;
                    contentType = showTracingRequest.contentType;
                } else {
                    functionUrn = showTracingRequest['function_urn'];
                    contentType = showTracingRequest['Content-Type'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling showTracing.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'function_urn': functionUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取函数指定的版本别名信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVersionAlias(showVersionAliasRequest?: ShowVersionAliasRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/functions/{function_urn}/aliases/{alias_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let functionUrn;
            
            let aliasName;
            
            let contentType;

            if (showVersionAliasRequest !== null && showVersionAliasRequest !== undefined) {
                if (showVersionAliasRequest instanceof ShowVersionAliasRequest) {
                    functionUrn = showVersionAliasRequest.functionUrn;
                    aliasName = showVersionAliasRequest.aliasName;
                    contentType = showVersionAliasRequest.contentType;
                } else {
                    functionUrn = showVersionAliasRequest['function_urn'];
                    aliasName = showVersionAliasRequest['alias_name'];
                    contentType = showVersionAliasRequest['Content-Type'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling showVersionAlias.');
            }
            if (aliasName === null || aliasName === undefined) {
            throw new RequiredError('aliasName','Required parameter aliasName was null or undefined when calling showVersionAlias.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'function_urn': functionUrn,'alias_name': aliasName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定函数流实例的元数据
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showWorkFlow(showWorkFlowRequest?: ShowWorkFlowRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/workflows/{workflow_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workflowId;

            if (showWorkFlowRequest !== null && showWorkFlowRequest !== undefined) {
                if (showWorkFlowRequest instanceof ShowWorkFlowRequest) {
                    workflowId = showWorkFlowRequest.workflowId;
                } else {
                    workflowId = showWorkFlowRequest['workflow_id'];
                }
            }

        
            if (workflowId === null || workflowId === undefined) {
            throw new RequiredError('workflowId','Required parameter workflowId was null or undefined when calling showWorkFlow.');
            }

            options.pathParams = { 'workflow_id': workflowId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定函数流指标
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showWorkFlowMetric(showWorkFlowMetricRequest?: ShowWorkFlowMetricRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/workflow-statistic/{workflow_urn}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workflowUrn;
            
            let period;
            
            let startTime;
            
            let endTime;

            if (showWorkFlowMetricRequest !== null && showWorkFlowMetricRequest !== undefined) {
                if (showWorkFlowMetricRequest instanceof ShowWorkFlowMetricRequest) {
                    workflowUrn = showWorkFlowMetricRequest.workflowUrn;
                    period = showWorkFlowMetricRequest.period;
                    startTime = showWorkFlowMetricRequest.startTime;
                    endTime = showWorkFlowMetricRequest.endTime;
                } else {
                    workflowUrn = showWorkFlowMetricRequest['workflow_urn'];
                    period = showWorkFlowMetricRequest['period'];
                    startTime = showWorkFlowMetricRequest['start_time'];
                    endTime = showWorkFlowMetricRequest['end_time'];
                }
            }

        
            if (workflowUrn === null || workflowUrn === undefined) {
            throw new RequiredError('workflowUrn','Required parameter workflowUrn was null or undefined when calling showWorkFlowMetric.');
            }
            if (period !== null && period !== undefined) {
                localVarQueryParameter['period'] = period;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'workflow_urn': workflowUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定函数流执行实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showWorkflowExecution(showWorkflowExecutionRequest?: ShowWorkflowExecutionRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/workflows/{workflow_id}/executions/{execution_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workflowId;
            
            let executionId;
            
            let xGetWorkflowFullHistoryData;

            if (showWorkflowExecutionRequest !== null && showWorkflowExecutionRequest !== undefined) {
                if (showWorkflowExecutionRequest instanceof ShowWorkflowExecutionRequest) {
                    workflowId = showWorkflowExecutionRequest.workflowId;
                    executionId = showWorkflowExecutionRequest.executionId;
                    xGetWorkflowFullHistoryData = showWorkflowExecutionRequest.xGetWorkflowFullHistoryData;
                } else {
                    workflowId = showWorkflowExecutionRequest['workflow_id'];
                    executionId = showWorkflowExecutionRequest['execution_id'];
                    xGetWorkflowFullHistoryData = showWorkflowExecutionRequest['X-Get-Workflow-Full-History-Data'];
                }
            }

        
            if (workflowId === null || workflowId === undefined) {
            throw new RequiredError('workflowId','Required parameter workflowId was null or undefined when calling showWorkflowExecution.');
            }
            if (executionId === null || executionId === undefined) {
            throw new RequiredError('executionId','Required parameter executionId was null or undefined when calling showWorkflowExecution.');
            }
            if (xGetWorkflowFullHistoryData !== undefined && xGetWorkflowFullHistoryData !== null) {
                localVarHeaderParameter['X-Get-Workflow-Full-History-Data'] = String(xGetWorkflowFullHistoryData);
            }

            options.pathParams = { 'workflow_id': workflowId,'execution_id': executionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 分页获取指定函数流执行实例列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showWorkflowExecutionForPage(showWorkflowExecutionForPageRequest?: ShowWorkflowExecutionForPageRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/workflows/{workflow_id}/executions-history",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workflowId;
            
            let offset;
            
            let limit;
            
            let startTime;
            
            let endTime;

            if (showWorkflowExecutionForPageRequest !== null && showWorkflowExecutionForPageRequest !== undefined) {
                if (showWorkflowExecutionForPageRequest instanceof ShowWorkflowExecutionForPageRequest) {
                    workflowId = showWorkflowExecutionForPageRequest.workflowId;
                    offset = showWorkflowExecutionForPageRequest.offset;
                    limit = showWorkflowExecutionForPageRequest.limit;
                    startTime = showWorkflowExecutionForPageRequest.startTime;
                    endTime = showWorkflowExecutionForPageRequest.endTime;
                } else {
                    workflowId = showWorkflowExecutionForPageRequest['workflow_id'];
                    offset = showWorkflowExecutionForPageRequest['offset'];
                    limit = showWorkflowExecutionForPageRequest['limit'];
                    startTime = showWorkflowExecutionForPageRequest['start_time'];
                    endTime = showWorkflowExecutionForPageRequest['end_time'];
                }
            }

        
            if (workflowId === null || workflowId === undefined) {
            throw new RequiredError('workflowId','Required parameter workflowId was null or undefined when calling showWorkflowExecutionForPage.');
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling showWorkflowExecutionForPage.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling showWorkflowExecutionForPage.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'workflow_id': workflowId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 以同步执行方式启动函数流（仅快速模式函数流支持）
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startSyncWorkflowExecution(startSyncWorkflowExecutionRequest?: StartSyncWorkflowExecutionRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/fgs/workflows/{workflow_id}/sync-executions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workflowId;

            if (startSyncWorkflowExecutionRequest !== null && startSyncWorkflowExecutionRequest !== undefined) {
                if (startSyncWorkflowExecutionRequest instanceof StartSyncWorkflowExecutionRequest) {
                    workflowId = startSyncWorkflowExecutionRequest.workflowId;
                    body = startSyncWorkflowExecutionRequest.body
                } else {
                    workflowId = startSyncWorkflowExecutionRequest['workflow_id'];
                    body = startSyncWorkflowExecutionRequest['body'];
                }
            }

        
            if (workflowId === null || workflowId === undefined) {
            throw new RequiredError('workflowId','Required parameter workflowId was null or undefined when calling startSyncWorkflowExecution.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workflow_id': workflowId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 以异步执行方式启动函数流
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startWorkflowExecution(startWorkflowExecutionRequest?: StartWorkflowExecutionRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/fgs/workflows/{workflow_id}/executions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workflowId;
            
            let xCreateTime;
            
            let xWorkflowRunID;
            
            let xWorkflowRunMergeFnParameters;

            if (startWorkflowExecutionRequest !== null && startWorkflowExecutionRequest !== undefined) {
                if (startWorkflowExecutionRequest instanceof StartWorkflowExecutionRequest) {
                    workflowId = startWorkflowExecutionRequest.workflowId;
                    body = startWorkflowExecutionRequest.body
                    xCreateTime = startWorkflowExecutionRequest.xCreateTime;
                    xWorkflowRunID = startWorkflowExecutionRequest.xWorkflowRunID;
                    xWorkflowRunMergeFnParameters = startWorkflowExecutionRequest.xWorkflowRunMergeFnParameters;
                } else {
                    workflowId = startWorkflowExecutionRequest['workflow_id'];
                    body = startWorkflowExecutionRequest['body'];
                    xCreateTime = startWorkflowExecutionRequest['X-Create-Time'];
                    xWorkflowRunID = startWorkflowExecutionRequest['X-WorkflowRun-ID'];
                    xWorkflowRunMergeFnParameters = startWorkflowExecutionRequest['X-WorkflowRun-MergeFnParameters'];
                }
            }

        
            if (workflowId === null || workflowId === undefined) {
            throw new RequiredError('workflowId','Required parameter workflowId was null or undefined when calling startWorkflowExecution.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xCreateTime !== undefined && xCreateTime !== null) {
                localVarHeaderParameter['X-Create-Time'] = String(xCreateTime);
            }
            if (xWorkflowRunID !== undefined && xWorkflowRunID !== null) {
                localVarHeaderParameter['X-WorkflowRun-ID'] = String(xWorkflowRunID);
            }
            if (xWorkflowRunMergeFnParameters !== undefined && xWorkflowRunMergeFnParameters !== null) {
                localVarHeaderParameter['X-WorkflowRun-MergeFnParameters'] = String(xWorkflowRunMergeFnParameters);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workflow_id': workflowId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 停止函数流
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopWorkFlow(stopWorkFlowRequest?: StopWorkFlowRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/fgs/workflows/{workflow_id}/executions/{execution_id}/terminate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workflowId;
            
            let executionId;

            if (stopWorkFlowRequest !== null && stopWorkFlowRequest !== undefined) {
                if (stopWorkFlowRequest instanceof StopWorkFlowRequest) {
                    workflowId = stopWorkFlowRequest.workflowId;
                    executionId = stopWorkFlowRequest.executionId;
                } else {
                    workflowId = stopWorkFlowRequest['workflow_id'];
                    executionId = stopWorkFlowRequest['execution_id'];
                }
            }

        
            if (workflowId === null || workflowId === undefined) {
            throw new RequiredError('workflowId','Required parameter workflowId was null or undefined when calling stopWorkFlow.');
            }
            if (executionId === null || executionId === undefined) {
            throw new RequiredError('executionId','Required parameter executionId was null or undefined when calling stopWorkFlow.');
            }

            options.pathParams = { 'workflow_id': workflowId,'execution_id': executionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新测试事件详细信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateEvent(updateEventRequest?: UpdateEventRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/fgs/functions/{function_urn}/events/{event_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let functionUrn;
            
            let contentType;
            
            let eventId;

            if (updateEventRequest !== null && updateEventRequest !== undefined) {
                if (updateEventRequest instanceof UpdateEventRequest) {
                    functionUrn = updateEventRequest.functionUrn;
                    contentType = updateEventRequest.contentType;
                    eventId = updateEventRequest.eventId;
                    body = updateEventRequest.body
                } else {
                    functionUrn = updateEventRequest['function_urn'];
                    contentType = updateEventRequest['Content-Type'];
                    eventId = updateEventRequest['event_id'];
                    body = updateEventRequest['body'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling updateEvent.');
            }
            if (eventId === null || eventId === undefined) {
            throw new RequiredError('eventId','Required parameter eventId was null or undefined when calling updateEvent.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'function_urn': functionUrn,'event_id': eventId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 禁用/启动函数快照，仅支持java运行时函数，且为非latest版本才能开启函数快照功能。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateFuncSnapshot(updateFuncSnapshotRequest?: UpdateFuncSnapshotRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/fgs/functions/{function_urn}/snapshots/{action}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let functionUrn;
            
            let action;
            
            let contentType;

            if (updateFuncSnapshotRequest !== null && updateFuncSnapshotRequest !== undefined) {
                if (updateFuncSnapshotRequest instanceof UpdateFuncSnapshotRequest) {
                    functionUrn = updateFuncSnapshotRequest.functionUrn;
                    action = updateFuncSnapshotRequest.action;
                    contentType = updateFuncSnapshotRequest.contentType;
                } else {
                    functionUrn = updateFuncSnapshotRequest['function_urn'];
                    action = updateFuncSnapshotRequest['action'];
                    contentType = updateFuncSnapshotRequest['Content-Type'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling updateFuncSnapshot.');
            }
            if (action === null || action === undefined) {
            throw new RequiredError('action','Required parameter action was null or undefined when calling updateFuncSnapshot.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'function_urn': functionUrn,'action': action, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置函数异步配置信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateFunctionAsyncInvokeConfig(updateFunctionAsyncInvokeConfigRequest?: UpdateFunctionAsyncInvokeConfigRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/fgs/functions/{function_urn}/async-invoke-config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let functionUrn;
            
            let contentType;

            if (updateFunctionAsyncInvokeConfigRequest !== null && updateFunctionAsyncInvokeConfigRequest !== undefined) {
                if (updateFunctionAsyncInvokeConfigRequest instanceof UpdateFunctionAsyncInvokeConfigRequest) {
                    functionUrn = updateFunctionAsyncInvokeConfigRequest.functionUrn;
                    contentType = updateFunctionAsyncInvokeConfigRequest.contentType;
                    body = updateFunctionAsyncInvokeConfigRequest.body
                } else {
                    functionUrn = updateFunctionAsyncInvokeConfigRequest['function_urn'];
                    contentType = updateFunctionAsyncInvokeConfigRequest['Content-Type'];
                    body = updateFunctionAsyncInvokeConfigRequest['body'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling updateFunctionAsyncInvokeConfig.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'function_urn': functionUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改指定的函数的代码。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateFunctionCode(updateFunctionCodeRequest?: UpdateFunctionCodeRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/fgs/functions/{function_urn}/code",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let functionUrn;
            
            let contentType;

            if (updateFunctionCodeRequest !== null && updateFunctionCodeRequest !== undefined) {
                if (updateFunctionCodeRequest instanceof UpdateFunctionCodeRequest) {
                    functionUrn = updateFunctionCodeRequest.functionUrn;
                    contentType = updateFunctionCodeRequest.contentType;
                    body = updateFunctionCodeRequest.body
                } else {
                    functionUrn = updateFunctionCodeRequest['function_urn'];
                    contentType = updateFunctionCodeRequest['Content-Type'];
                    body = updateFunctionCodeRequest['body'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling updateFunctionCode.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'function_urn': functionUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新函数置顶状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateFunctionCollectState(updateFunctionCollectStateRequest?: UpdateFunctionCollectStateRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/fgs/functions/{func_urn}/collect/{state}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let funcUrn;
            
            let state;
            
            let contentType;

            if (updateFunctionCollectStateRequest !== null && updateFunctionCollectStateRequest !== undefined) {
                if (updateFunctionCollectStateRequest instanceof UpdateFunctionCollectStateRequest) {
                    funcUrn = updateFunctionCollectStateRequest.funcUrn;
                    state = updateFunctionCollectStateRequest.state;
                    contentType = updateFunctionCollectStateRequest.contentType;
                } else {
                    funcUrn = updateFunctionCollectStateRequest['func_urn'];
                    state = updateFunctionCollectStateRequest['state'];
                    contentType = updateFunctionCollectStateRequest['Content-Type'];
                }
            }

        
            if (funcUrn === null || funcUrn === undefined) {
            throw new RequiredError('funcUrn','Required parameter funcUrn was null or undefined when calling updateFunctionCollectState.');
            }
            if (state === null || state === undefined) {
            throw new RequiredError('state','Required parameter state was null or undefined when calling updateFunctionCollectState.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'func_urn': funcUrn,'state': state, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改指定的函数的metadata信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateFunctionConfig(updateFunctionConfigRequest?: UpdateFunctionConfigRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/fgs/functions/{function_urn}/config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let functionUrn;
            
            let contentType;

            if (updateFunctionConfigRequest !== null && updateFunctionConfigRequest !== undefined) {
                if (updateFunctionConfigRequest instanceof UpdateFunctionConfigRequest) {
                    functionUrn = updateFunctionConfigRequest.functionUrn;
                    contentType = updateFunctionConfigRequest.contentType;
                    body = updateFunctionConfigRequest.body
                } else {
                    functionUrn = updateFunctionConfigRequest['function_urn'];
                    contentType = updateFunctionConfigRequest['Content-Type'];
                    body = updateFunctionConfigRequest['body'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling updateFunctionConfig.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'function_urn': functionUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新函数最大实例数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateFunctionMaxInstanceConfig(updateFunctionMaxInstanceConfigRequest?: UpdateFunctionMaxInstanceConfigRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/fgs/functions/{function_urn}/config-max-instance",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let functionUrn;
            
            let contentType;

            if (updateFunctionMaxInstanceConfigRequest !== null && updateFunctionMaxInstanceConfigRequest !== undefined) {
                if (updateFunctionMaxInstanceConfigRequest instanceof UpdateFunctionMaxInstanceConfigRequest) {
                    functionUrn = updateFunctionMaxInstanceConfigRequest.functionUrn;
                    contentType = updateFunctionMaxInstanceConfigRequest.contentType;
                    body = updateFunctionMaxInstanceConfigRequest.body
                } else {
                    functionUrn = updateFunctionMaxInstanceConfigRequest['function_urn'];
                    contentType = updateFunctionMaxInstanceConfigRequest['Content-Type'];
                    body = updateFunctionMaxInstanceConfigRequest['body'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling updateFunctionMaxInstanceConfig.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'function_urn': functionUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改函数预留实例数量。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateFunctionReservedInstancesCount(updateFunctionReservedInstancesCountRequest?: UpdateFunctionReservedInstancesCountRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/fgs/functions/{function_urn}/reservedinstances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let functionUrn;
            
            let contentType;

            if (updateFunctionReservedInstancesCountRequest !== null && updateFunctionReservedInstancesCountRequest !== undefined) {
                if (updateFunctionReservedInstancesCountRequest instanceof UpdateFunctionReservedInstancesCountRequest) {
                    functionUrn = updateFunctionReservedInstancesCountRequest.functionUrn;
                    contentType = updateFunctionReservedInstancesCountRequest.contentType;
                    body = updateFunctionReservedInstancesCountRequest.body
                } else {
                    functionUrn = updateFunctionReservedInstancesCountRequest['function_urn'];
                    contentType = updateFunctionReservedInstancesCountRequest['Content-Type'];
                    body = updateFunctionReservedInstancesCountRequest['body'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling updateFunctionReservedInstancesCount.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'function_urn': functionUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改函数调用链配置,开通/修改传入aksk，关闭aksk传空
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTracing(updateTracingRequest?: UpdateTracingRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/fgs/functions/{function_urn}/tracing",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let functionUrn;
            
            let contentType;

            if (updateTracingRequest !== null && updateTracingRequest !== undefined) {
                if (updateTracingRequest instanceof UpdateTracingRequest) {
                    functionUrn = updateTracingRequest.functionUrn;
                    contentType = updateTracingRequest.contentType;
                    body = updateTracingRequest.body
                } else {
                    functionUrn = updateTracingRequest['function_urn'];
                    contentType = updateTracingRequest['Content-Type'];
                    body = updateTracingRequest['body'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling updateTracing.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'function_urn': functionUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新触发器
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTrigger(updateTriggerRequest?: UpdateTriggerRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/fgs/triggers/{function_urn}/{trigger_type_code}/{trigger_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let functionUrn;
            
            let triggerTypeCode;
            
            let triggerId;
            
            let contentType;

            if (updateTriggerRequest !== null && updateTriggerRequest !== undefined) {
                if (updateTriggerRequest instanceof UpdateTriggerRequest) {
                    functionUrn = updateTriggerRequest.functionUrn;
                    triggerTypeCode = updateTriggerRequest.triggerTypeCode;
                    triggerId = updateTriggerRequest.triggerId;
                    contentType = updateTriggerRequest.contentType;
                    body = updateTriggerRequest.body
                } else {
                    functionUrn = updateTriggerRequest['function_urn'];
                    triggerTypeCode = updateTriggerRequest['trigger_type_code'];
                    triggerId = updateTriggerRequest['trigger_id'];
                    contentType = updateTriggerRequest['Content-Type'];
                    body = updateTriggerRequest['body'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling updateTrigger.');
            }
            if (triggerTypeCode === null || triggerTypeCode === undefined) {
            throw new RequiredError('triggerTypeCode','Required parameter triggerTypeCode was null or undefined when calling updateTrigger.');
            }
            if (triggerId === null || triggerId === undefined) {
            throw new RequiredError('triggerId','Required parameter triggerId was null or undefined when calling updateTrigger.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'function_urn': functionUrn,'trigger_type_code': triggerTypeCode,'trigger_id': triggerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改函数版本别名信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateVersionAlias(updateVersionAliasRequest?: UpdateVersionAliasRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/fgs/functions/{function_urn}/aliases/{alias_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let functionUrn;
            
            let aliasName;
            
            let contentType;

            if (updateVersionAliasRequest !== null && updateVersionAliasRequest !== undefined) {
                if (updateVersionAliasRequest instanceof UpdateVersionAliasRequest) {
                    functionUrn = updateVersionAliasRequest.functionUrn;
                    aliasName = updateVersionAliasRequest.aliasName;
                    contentType = updateVersionAliasRequest.contentType;
                    body = updateVersionAliasRequest.body
                } else {
                    functionUrn = updateVersionAliasRequest['function_urn'];
                    aliasName = updateVersionAliasRequest['alias_name'];
                    contentType = updateVersionAliasRequest['Content-Type'];
                    body = updateVersionAliasRequest['body'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling updateVersionAlias.');
            }
            if (aliasName === null || aliasName === undefined) {
            throw new RequiredError('aliasName','Required parameter aliasName was null or undefined when calling updateVersionAlias.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'function_urn': functionUrn,'alias_name': aliasName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改指定函数流实例的元数据
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateWorkFlow(updateWorkFlowRequest?: UpdateWorkFlowRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/fgs/workflows/{workflow_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workflowId;

            if (updateWorkFlowRequest !== null && updateWorkFlowRequest !== undefined) {
                if (updateWorkFlowRequest instanceof UpdateWorkFlowRequest) {
                    workflowId = updateWorkFlowRequest.workflowId;
                    body = updateWorkFlowRequest.body
                } else {
                    workflowId = updateWorkFlowRequest['workflow_id'];
                    body = updateWorkFlowRequest['body'];
                }
            }

        
            if (workflowId === null || workflowId === undefined) {
            throw new RequiredError('workflowId','Required parameter workflowId was null or undefined when calling updateWorkFlow.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workflow_id': workflowId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): FunctionGraphClient {
    return new FunctionGraphClient(client);
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