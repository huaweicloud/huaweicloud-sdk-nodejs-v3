import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { Action } from './model/Action';
import { AsyncInvokeFunctionRequest } from './model/AsyncInvokeFunctionRequest';
import { AsyncInvokeFunctionResponse } from './model/AsyncInvokeFunctionResponse';
import { AsyncInvokeReservedFunctionRequest } from './model/AsyncInvokeReservedFunctionRequest';
import { AsyncInvokeReservedFunctionResponse } from './model/AsyncInvokeReservedFunctionResponse';
import { BatchDeleteFunctionTriggersRequest } from './model/BatchDeleteFunctionTriggersRequest';
import { BatchDeleteFunctionTriggersResponse } from './model/BatchDeleteFunctionTriggersResponse';
import { BatchDeleteWorkflowsRequest } from './model/BatchDeleteWorkflowsRequest';
import { BatchDeleteWorkflowsResponse } from './model/BatchDeleteWorkflowsResponse';
import { CancelAsyncInvocationRequest } from './model/CancelAsyncInvocationRequest';
import { CancelAsyncInvocationRequestBody } from './model/CancelAsyncInvocationRequestBody';
import { CancelAsyncInvocationResponse } from './model/CancelAsyncInvocationResponse';
import { CreateDependencyRequest } from './model/CreateDependencyRequest';
import { CreateDependencyRequestBody } from './model/CreateDependencyRequestBody';
import { CreateDependencyResponse } from './model/CreateDependencyResponse';
import { CreateDependencyVersionRequest } from './model/CreateDependencyVersionRequest';
import { CreateDependencyVersionResponse } from './model/CreateDependencyVersionResponse';
import { CreateEventRequest } from './model/CreateEventRequest';
import { CreateEventRequestBody } from './model/CreateEventRequestBody';
import { CreateEventResponse } from './model/CreateEventResponse';
import { CreateFunctionRequest } from './model/CreateFunctionRequest';
import { CreateFunctionRequestBody } from './model/CreateFunctionRequestBody';
import { CreateFunctionResponse } from './model/CreateFunctionResponse';
import { CreateFunctionTriggerRequest } from './model/CreateFunctionTriggerRequest';
import { CreateFunctionTriggerRequestBody } from './model/CreateFunctionTriggerRequestBody';
import { CreateFunctionTriggerResponse } from './model/CreateFunctionTriggerResponse';
import { CreateFunctionVersionRequest } from './model/CreateFunctionVersionRequest';
import { CreateFunctionVersionRequestBody } from './model/CreateFunctionVersionRequestBody';
import { CreateFunctionVersionResponse } from './model/CreateFunctionVersionResponse';
import { CreateVersionAliasRequest } from './model/CreateVersionAliasRequest';
import { CreateVersionAliasRequestBody } from './model/CreateVersionAliasRequestBody';
import { CreateVersionAliasResponse } from './model/CreateVersionAliasResponse';
import { CreateWorkflowRequest } from './model/CreateWorkflowRequest';
import { CreateWorkflowResponse } from './model/CreateWorkflowResponse';
import { CronConfig } from './model/CronConfig';
import { CustomImage } from './model/CustomImage';
import { DeleteDependencyRequest } from './model/DeleteDependencyRequest';
import { DeleteDependencyResponse } from './model/DeleteDependencyResponse';
import { DeleteDependencyVersionRequest } from './model/DeleteDependencyVersionRequest';
import { DeleteDependencyVersionResponse } from './model/DeleteDependencyVersionResponse';
import { DeleteEventRequest } from './model/DeleteEventRequest';
import { DeleteEventResponse } from './model/DeleteEventResponse';
import { DeleteFunctionAsyncInvokeConfigRequest } from './model/DeleteFunctionAsyncInvokeConfigRequest';
import { DeleteFunctionAsyncInvokeConfigResponse } from './model/DeleteFunctionAsyncInvokeConfigResponse';
import { DeleteFunctionRequest } from './model/DeleteFunctionRequest';
import { DeleteFunctionResponse } from './model/DeleteFunctionResponse';
import { DeleteFunctionTriggerRequest } from './model/DeleteFunctionTriggerRequest';
import { DeleteFunctionTriggerResponse } from './model/DeleteFunctionTriggerResponse';
import { DeleteVersionAliasRequest } from './model/DeleteVersionAliasRequest';
import { DeleteVersionAliasResponse } from './model/DeleteVersionAliasResponse';
import { Dependency } from './model/Dependency';
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
import { ListAsyncInvocationsRequest } from './model/ListAsyncInvocationsRequest';
import { ListAsyncInvocationsResponse } from './model/ListAsyncInvocationsResponse';
import { ListDependenciesRequest } from './model/ListDependenciesRequest';
import { ListDependenciesResponse } from './model/ListDependenciesResponse';
import { ListDependenciesResult } from './model/ListDependenciesResult';
import { ListDependencyVersionRequest } from './model/ListDependencyVersionRequest';
import { ListDependencyVersionResponse } from './model/ListDependencyVersionResponse';
import { ListEventsRequest } from './model/ListEventsRequest';
import { ListEventsResponse } from './model/ListEventsResponse';
import { ListEventsResult } from './model/ListEventsResult';
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
import { NodeExecution } from './model/NodeExecution';
import { NodeExecutionDetail } from './model/NodeExecutionDetail';
import { OBSTriggerConfig } from './model/OBSTriggerConfig';
import { OnError } from './model/OnError';
import { OperateErrorInfo } from './model/OperateErrorInfo';
import { OperationState } from './model/OperationState';
import { PageInfo } from './model/PageInfo';
import { ReservedInstanceConfigs } from './model/ReservedInstanceConfigs';
import { Resources } from './model/Resources';
import { Retry } from './model/Retry';
import { RetryWorkFlowRequest } from './model/RetryWorkFlowRequest';
import { RetryWorkFlowResponse } from './model/RetryWorkFlowResponse';
import { ShowDependcyRequest } from './model/ShowDependcyRequest';
import { ShowDependcyResponse } from './model/ShowDependcyResponse';
import { ShowDependencyVersionRequest } from './model/ShowDependencyVersionRequest';
import { ShowDependencyVersionResponse } from './model/ShowDependencyVersionResponse';
import { ShowEventRequest } from './model/ShowEventRequest';
import { ShowEventResponse } from './model/ShowEventResponse';
import { ShowFunctionAsyncInvokeConfigRequest } from './model/ShowFunctionAsyncInvokeConfigRequest';
import { ShowFunctionAsyncInvokeConfigResponse } from './model/ShowFunctionAsyncInvokeConfigResponse';
import { ShowFunctionCodeRequest } from './model/ShowFunctionCodeRequest';
import { ShowFunctionCodeResponse } from './model/ShowFunctionCodeResponse';
import { ShowFunctionConfigRequest } from './model/ShowFunctionConfigRequest';
import { ShowFunctionConfigResponse } from './model/ShowFunctionConfigResponse';
import { ShowFunctionTriggerRequest } from './model/ShowFunctionTriggerRequest';
import { ShowFunctionTriggerResponse } from './model/ShowFunctionTriggerResponse';
import { ShowLtsLogDetailsRequest } from './model/ShowLtsLogDetailsRequest';
import { ShowLtsLogDetailsResponse } from './model/ShowLtsLogDetailsResponse';
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
import { Trigger } from './model/Trigger';
import { TriggerEventData } from './model/TriggerEventData';
import { UpdateDependcyRequest } from './model/UpdateDependcyRequest';
import { UpdateDependcyResponse } from './model/UpdateDependcyResponse';
import { UpdateDependencyRequestBody } from './model/UpdateDependencyRequestBody';
import { UpdateEventRequest } from './model/UpdateEventRequest';
import { UpdateEventRequestBody } from './model/UpdateEventRequestBody';
import { UpdateEventResponse } from './model/UpdateEventResponse';
import { UpdateFunctionAsyncInvokeConfigRequest } from './model/UpdateFunctionAsyncInvokeConfigRequest';
import { UpdateFunctionAsyncInvokeConfigRequestBody } from './model/UpdateFunctionAsyncInvokeConfigRequestBody';
import { UpdateFunctionAsyncInvokeConfigResponse } from './model/UpdateFunctionAsyncInvokeConfigResponse';
import { UpdateFunctionCodeRequest } from './model/UpdateFunctionCodeRequest';
import { UpdateFunctionCodeRequestBody } from './model/UpdateFunctionCodeRequestBody';
import { UpdateFunctionCodeResponse } from './model/UpdateFunctionCodeResponse';
import { UpdateFunctionConfigRequest } from './model/UpdateFunctionConfigRequest';
import { UpdateFunctionConfigRequestBody } from './model/UpdateFunctionConfigRequestBody';
import { UpdateFunctionConfigResponse } from './model/UpdateFunctionConfigResponse';
import { UpdateFunctionMaxInstanceConfigRequest } from './model/UpdateFunctionMaxInstanceConfigRequest';
import { UpdateFunctionMaxInstanceConfigRequestBody } from './model/UpdateFunctionMaxInstanceConfigRequestBody';
import { UpdateFunctionMaxInstanceConfigResponse } from './model/UpdateFunctionMaxInstanceConfigResponse';
import { UpdateFunctionReservedInstancesCountRequest } from './model/UpdateFunctionReservedInstancesCountRequest';
import { UpdateFunctionReservedInstancesCountRequestBody } from './model/UpdateFunctionReservedInstancesCountRequestBody';
import { UpdateFunctionReservedInstancesCountResponse } from './model/UpdateFunctionReservedInstancesCountResponse';
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
     * 函数异步执行并返回预留实例ID用于场景指客户端请求执行比较费时任务，不需要同步等待执行完成返回结果，该方法提前返回任务执行对应的预留实例ID, 如果预留实例有异常，可以通过该实例ID把对应实例删除（该接口主要针对白名单用户）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 函数异步执行并返回预留实例ID
     * @param {string} functionUrn 函数的URN（Uniform Resource Name），唯一标识函数。
     * @param {{ [key: string]: object; }} [asyncInvokeReservedFunctionRequestBody] 函数异步执行并返回预留实例请求body体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public asyncInvokeReservedFunction(asyncInvokeReservedFunctionRequest?: AsyncInvokeReservedFunctionRequest): Promise<AsyncInvokeReservedFunctionResponse> {
        const options = ParamCreater().asyncInvokeReservedFunction(asyncInvokeReservedFunctionRequest);

         // @ts-ignore
        options['responseHeaders'] = ['Content-Type'];

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
     * -| 停止函数异步调用请求 当前仅支持recursive为false且force为true的参数。针对1：N的函数做并发异步调用 停止异步请求时实例同时在执行的其他请求也会被一并停止并返回4208 function invocation canceled 目前仅支持广州和贵阳一
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停止函数异步调用请求
     * @param {string} functionUrn 函数URN
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
     * 创建依赖包
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建依赖包
     * @param {CreateDependencyRequestBody} createDependencyRequestBody 创建依赖包请求body体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDependency(createDependencyRequest?: CreateDependencyRequest): Promise<CreateDependencyResponse> {
        const options = ParamCreater().createDependency(createDependencyRequest);

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
     * 创建函数灰度版本别名。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建函数版本别名
     * @param {string} functionUrn 函数的URN。
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
     * 删除指定的依赖包
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除指定的依赖包
     * @param {string} dependId 依赖包的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDependency(deleteDependencyRequest?: DeleteDependencyRequest): Promise<DeleteDependencyResponse> {
        const options = ParamCreater().deleteDependency(deleteDependencyRequest);

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
     * 删除函数异步配置信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除函数异步配置信息
     * @param {string} functionUrn 函数的URN（Uniform Resource Name），唯一标识函数。
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
     * @param {'TIMER' | 'APIG' | 'CTS' | 'DDS' | 'DMS' | 'DIS' | 'LTS' | 'OBS' | 'SMN' | 'KAFKA' | 'RABBITMQ' | 'DEDICATEDGATEWAY' | 'OPENSOURCEKAFKA' | 'APIC' | 'GAUSSMONGO' | 'EVENTGRID'} triggerTypeCode 触发器类型代码。
     * @param {string} triggerId 触发器编码。
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
     * 删除函数版本别名。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除函数版本别名
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {string} aliasName 要删除的别名名称。
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
     * 开通lts日志上报功能。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开通lts日志上报功能
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enableLtsLogs(): Promise<EnableLtsLogsResponse> {
        const options = ParamCreater().enableLtsLogs();

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
     * @param {boolean} [config] 是否导出函数配置，默认为false
     * @param {boolean} [code] 是否导出函数代码，默认为false
     * @param {string} [type] 不兼容与code、config参数混用；type&#x3D;code代表导出代码,type&#x3D;config代码导出配置
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
     * 获取函数异步调用请求列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取函数异步调用请求列表
     * @param {string} functionUrn 函数URN
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
     * 获取依赖包列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取依赖包列表
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
     * 按指定指标排序的函数列表。
     * 
     * 默认统计按错误次数指标统计最近一天失败次数最多的前10个函数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取按指定指标排序的函数列表
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
     * @param {string} functionUrn 函数的URN（Uniform Resource Name），唯一标识函数。
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
     * @param {string} funcUrn 函数的URN（Uniform Resource Name），唯一标识函数。
     * @param {string} period 获取最近多少分钟内函数执行的指标。
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
     * 获取指定函数的所有触发器设置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定函数的所有触发器
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
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
     * @param {string} [marker] 上一次查询到的最后的记录位置。
     * @param {string} [maxitems] 每次查询获取的最大函数记录数量 最大值：400 如果不提供该值或者提供的值大于400或等于0，则使用默认值：400 如果该值小于0，则返回参数错误。
     * @param {string} [packageName] 应用名称。
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listQuotas(): Promise<ListQuotasResponse> {
        const options = ParamCreater().listQuotas();

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
     * @param {string} [period] 时间段单位为分钟，与filter参数metric配合使用。
     * @param {string} [option] 月度统计的维度，filter参数取值为monthly_report时才生效。 当取值不在以上范围时，默认取\&quot;0\&quot;。 - \&quot;0\&quot;: 表示统计本月。 - \&quot;1\&quot;: 表示统计上月。 - \&quot;2\&quot;: 表示统计最近三个月。 - \&quot;3\&quot;: 表示统计最近六个月。
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
     * @param {string} functionUrn 函数的URN。
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
     * 获取指定依赖包
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定依赖包
     * @param {string} dependId 依赖包的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDependcy(showDependcyRequest?: ShowDependcyRequest): Promise<ShowDependcyResponse> {
        const options = ParamCreater().showDependcy(showDependcyRequest);

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
     * 获取指定函数某一版本的异步配置信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取函数异步配置信息
     * @param {string} functionUrn 函数的URN（Uniform Resource Name），唯一标识函数。
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
     * 获取特定触发器的信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定触发器的信息
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {'TIMER' | 'APIG' | 'CTS' | 'DDS' | 'DMS' | 'DIS' | 'LTS' | 'OBS' | 'SMN' | 'KAFKA' | 'RABBITMQ' | 'DEDICATEDGATEWAY' | 'OPENSOURCEKAFKA' | 'APIC' | 'GAUSSMONGO' | 'EVENTGRID'} triggerTypeCode 触发器类型代码。
     * @param {string} triggerId 触发器编码。
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
     * @param {string} functionUrn 函数的URN（Uniform Resource Name），唯一标识函数。
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
     * @param {string} functionUrn 函数的URN（Uniform Resource Name），唯一标识函数。
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
     * 更新指定依赖包
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新指定依赖包
     * @param {string} dependId 依赖包的ID。
     * @param {UpdateDependencyRequestBody} updateDependcyRequestBody 更新依赖包请求body体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDependcy(updateDependcyRequest?: UpdateDependcyRequest): Promise<UpdateDependcyResponse> {
        const options = ParamCreater().updateDependcy(updateDependcyRequest);

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
     * 设置函数异步配置信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置函数异步配置信息
     * @param {string} functionUrn 函数的URN（Uniform Resource Name），唯一标识函数。
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
     * @param {string} functionUrn 函数的URN，详细解释见表1 FunctionGraph函数字段说明表的描述。
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
     * 修改指定的函数的metadata信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改函数的metadata信息
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型。
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
     * @param {string} functionUrn 函数的URN（Uniform Resource Name），唯一标识函数。
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
     * @param {'TIMER' | 'APIG' | 'CTS' | 'DDS' | 'DMS' | 'DIS' | 'LTS' | 'OBS' | 'SMN' | 'KAFKA' | 'RABBITMQ' | 'DEDICATEDGATEWAY' | 'OPENSOURCEKAFKA' | 'APIC' | 'GAUSSMONGO' | 'EVENTGRID'} triggerTypeCode 触发器类型代码。
     * @param {string} triggerId 触发器编码。
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

            var body: any;
            
            let functionUrn;

            if (asyncInvokeFunctionRequest !== null && asyncInvokeFunctionRequest !== undefined) {
                if (asyncInvokeFunctionRequest instanceof AsyncInvokeFunctionRequest) {
                    functionUrn = asyncInvokeFunctionRequest.functionUrn;
                    body = asyncInvokeFunctionRequest.body
                } else {
                    functionUrn = asyncInvokeFunctionRequest['function_urn'];
                    body = asyncInvokeFunctionRequest['body'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling asyncInvokeFunction.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'function_urn': functionUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 函数异步执行并返回预留实例ID用于场景指客户端请求执行比较费时任务，不需要同步等待执行完成返回结果，该方法提前返回任务执行对应的预留实例ID, 如果预留实例有异常，可以通过该实例ID把对应实例删除（该接口主要针对白名单用户）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        asyncInvokeReservedFunction(asyncInvokeReservedFunctionRequest?: AsyncInvokeReservedFunctionRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/fgs/functions/{function_urn}/reserved-invocations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let functionUrn;

            if (asyncInvokeReservedFunctionRequest !== null && asyncInvokeReservedFunctionRequest !== undefined) {
                if (asyncInvokeReservedFunctionRequest instanceof AsyncInvokeReservedFunctionRequest) {
                    functionUrn = asyncInvokeReservedFunctionRequest.functionUrn;
                    body = asyncInvokeReservedFunctionRequest.body
                } else {
                    functionUrn = asyncInvokeReservedFunctionRequest['function_urn'];
                    body = asyncInvokeReservedFunctionRequest['body'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling asyncInvokeReservedFunction.');
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
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let functionUrn;

            if (batchDeleteFunctionTriggersRequest !== null && batchDeleteFunctionTriggersRequest !== undefined) {
                if (batchDeleteFunctionTriggersRequest instanceof BatchDeleteFunctionTriggersRequest) {
                    functionUrn = batchDeleteFunctionTriggersRequest.functionUrn;
                } else {
                    functionUrn = batchDeleteFunctionTriggersRequest['function_urn'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling batchDeleteFunctionTriggers.');
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

            var body: any;

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
         * -| 停止函数异步调用请求 当前仅支持recursive为false且force为true的参数。针对1：N的函数做并发异步调用 停止异步请求时实例同时在执行的其他请求也会被一并停止并返回4208 function invocation canceled 目前仅支持广州和贵阳一
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

            var body: any;
            
            let functionUrn;

            if (cancelAsyncInvocationRequest !== null && cancelAsyncInvocationRequest !== undefined) {
                if (cancelAsyncInvocationRequest instanceof CancelAsyncInvocationRequest) {
                    functionUrn = cancelAsyncInvocationRequest.functionUrn;
                    body = cancelAsyncInvocationRequest.body
                } else {
                    functionUrn = cancelAsyncInvocationRequest['function_urn'];
                    body = cancelAsyncInvocationRequest['body'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling cancelAsyncInvocation.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'function_urn': functionUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建依赖包
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDependency(createDependencyRequest?: CreateDependencyRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/fgs/dependencies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createDependencyRequest !== null && createDependencyRequest !== undefined) {
                if (createDependencyRequest instanceof CreateDependencyRequest) {
                    body = createDependencyRequest.body
                } else {
                    body = createDependencyRequest['body'];
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

            var body: any;

            if (createDependencyVersionRequest !== null && createDependencyVersionRequest !== undefined) {
                if (createDependencyVersionRequest instanceof CreateDependencyVersionRequest) {
                    body = createDependencyVersionRequest.body
                } else {
                    body = createDependencyVersionRequest['body'];
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

            var body: any;
            
            let functionUrn;

            if (createEventRequest !== null && createEventRequest !== undefined) {
                if (createEventRequest instanceof CreateEventRequest) {
                    functionUrn = createEventRequest.functionUrn;
                    body = createEventRequest.body
                } else {
                    functionUrn = createEventRequest['function_urn'];
                    body = createEventRequest['body'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling createEvent.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
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

            var body: any;

            if (createFunctionRequest !== null && createFunctionRequest !== undefined) {
                if (createFunctionRequest instanceof CreateFunctionRequest) {
                    body = createFunctionRequest.body
                } else {
                    body = createFunctionRequest['body'];
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

            var body: any;
            
            let functionUrn;

            if (createFunctionTriggerRequest !== null && createFunctionTriggerRequest !== undefined) {
                if (createFunctionTriggerRequest instanceof CreateFunctionTriggerRequest) {
                    functionUrn = createFunctionTriggerRequest.functionUrn;
                    body = createFunctionTriggerRequest.body
                } else {
                    functionUrn = createFunctionTriggerRequest['function_urn'];
                    body = createFunctionTriggerRequest['body'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling createFunctionTrigger.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
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

            var body: any;
            
            let functionUrn;

            if (createFunctionVersionRequest !== null && createFunctionVersionRequest !== undefined) {
                if (createFunctionVersionRequest instanceof CreateFunctionVersionRequest) {
                    functionUrn = createFunctionVersionRequest.functionUrn;
                    body = createFunctionVersionRequest.body
                } else {
                    functionUrn = createFunctionVersionRequest['function_urn'];
                    body = createFunctionVersionRequest['body'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling createFunctionVersion.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'function_urn': functionUrn, };
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

            var body: any;
            
            let functionUrn;

            if (createVersionAliasRequest !== null && createVersionAliasRequest !== undefined) {
                if (createVersionAliasRequest instanceof CreateVersionAliasRequest) {
                    functionUrn = createVersionAliasRequest.functionUrn;
                    body = createVersionAliasRequest.body
                } else {
                    functionUrn = createVersionAliasRequest['function_urn'];
                    body = createVersionAliasRequest['body'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling createVersionAlias.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'function_urn': functionUrn, };
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

            var body: any;

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
         * 删除指定的依赖包
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDependency(deleteDependencyRequest?: DeleteDependencyRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/fgs/dependencies/{depend_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let dependId;

            if (deleteDependencyRequest !== null && deleteDependencyRequest !== undefined) {
                if (deleteDependencyRequest instanceof DeleteDependencyRequest) {
                    dependId = deleteDependencyRequest.dependId;
                } else {
                    dependId = deleteDependencyRequest['depend_id'];
                }
            }

        
            if (dependId === null || dependId === undefined) {
            throw new RequiredError('dependId','Required parameter dependId was null or undefined when calling deleteDependency.');
            }

            options.pathParams = { 'depend_id': dependId, };
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
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let dependId;
            
            let version;

            if (deleteDependencyVersionRequest !== null && deleteDependencyVersionRequest !== undefined) {
                if (deleteDependencyVersionRequest instanceof DeleteDependencyVersionRequest) {
                    dependId = deleteDependencyVersionRequest.dependId;
                    version = deleteDependencyVersionRequest.version;
                } else {
                    dependId = deleteDependencyVersionRequest['depend_id'];
                    version = deleteDependencyVersionRequest['version'];
                }
            }

        
            if (dependId === null || dependId === undefined) {
            throw new RequiredError('dependId','Required parameter dependId was null or undefined when calling deleteDependencyVersion.');
            }
            if (version === null || version === undefined) {
            throw new RequiredError('version','Required parameter version was null or undefined when calling deleteDependencyVersion.');
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
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let functionUrn;
            
            let eventId;

            if (deleteEventRequest !== null && deleteEventRequest !== undefined) {
                if (deleteEventRequest instanceof DeleteEventRequest) {
                    functionUrn = deleteEventRequest.functionUrn;
                    eventId = deleteEventRequest.eventId;
                } else {
                    functionUrn = deleteEventRequest['function_urn'];
                    eventId = deleteEventRequest['event_id'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling deleteEvent.');
            }
            if (eventId === null || eventId === undefined) {
            throw new RequiredError('eventId','Required parameter eventId was null or undefined when calling deleteEvent.');
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
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let functionUrn;

            if (deleteFunctionRequest !== null && deleteFunctionRequest !== undefined) {
                if (deleteFunctionRequest instanceof DeleteFunctionRequest) {
                    functionUrn = deleteFunctionRequest.functionUrn;
                } else {
                    functionUrn = deleteFunctionRequest['function_urn'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling deleteFunction.');
            }

            options.pathParams = { 'function_urn': functionUrn, };
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
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let functionUrn;

            if (deleteFunctionAsyncInvokeConfigRequest !== null && deleteFunctionAsyncInvokeConfigRequest !== undefined) {
                if (deleteFunctionAsyncInvokeConfigRequest instanceof DeleteFunctionAsyncInvokeConfigRequest) {
                    functionUrn = deleteFunctionAsyncInvokeConfigRequest.functionUrn;
                } else {
                    functionUrn = deleteFunctionAsyncInvokeConfigRequest['function_urn'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling deleteFunctionAsyncInvokeConfig.');
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
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let functionUrn;
            
            let triggerTypeCode;
            
            let triggerId;

            if (deleteFunctionTriggerRequest !== null && deleteFunctionTriggerRequest !== undefined) {
                if (deleteFunctionTriggerRequest instanceof DeleteFunctionTriggerRequest) {
                    functionUrn = deleteFunctionTriggerRequest.functionUrn;
                    triggerTypeCode = deleteFunctionTriggerRequest.triggerTypeCode;
                    triggerId = deleteFunctionTriggerRequest.triggerId;
                } else {
                    functionUrn = deleteFunctionTriggerRequest['function_urn'];
                    triggerTypeCode = deleteFunctionTriggerRequest['trigger_type_code'];
                    triggerId = deleteFunctionTriggerRequest['trigger_id'];
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

            options.pathParams = { 'function_urn': functionUrn,'trigger_type_code': triggerTypeCode,'trigger_id': triggerId, };
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
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let functionUrn;
            
            let aliasName;

            if (deleteVersionAliasRequest !== null && deleteVersionAliasRequest !== undefined) {
                if (deleteVersionAliasRequest instanceof DeleteVersionAliasRequest) {
                    functionUrn = deleteVersionAliasRequest.functionUrn;
                    aliasName = deleteVersionAliasRequest.aliasName;
                } else {
                    functionUrn = deleteVersionAliasRequest['function_urn'];
                    aliasName = deleteVersionAliasRequest['alias_name'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling deleteVersionAlias.');
            }
            if (aliasName === null || aliasName === undefined) {
            throw new RequiredError('aliasName','Required parameter aliasName was null or undefined when calling deleteVersionAlias.');
            }

            options.pathParams = { 'function_urn': functionUrn,'alias_name': aliasName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 开通lts日志上报功能。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enableLtsLogs() {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/fgs/functions/enable-lts-logs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;


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
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let functionUrn;
            
            let config;
            
            let code;
            
            let type;

            if (exportFunctionRequest !== null && exportFunctionRequest !== undefined) {
                if (exportFunctionRequest instanceof ExportFunctionRequest) {
                    functionUrn = exportFunctionRequest.functionUrn;
                    config = exportFunctionRequest.config;
                    code = exportFunctionRequest.code;
                    type = exportFunctionRequest.type;
                } else {
                    functionUrn = exportFunctionRequest['function_urn'];
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

            var body: any;

            if (importFunctionRequest !== null && importFunctionRequest !== undefined) {
                if (importFunctionRequest instanceof ImportFunctionRequest) {
                    body = importFunctionRequest.body
                } else {
                    body = importFunctionRequest['body'];
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

            var body: any;
            
            let functionUrn;
            
            let xCffLogType;
            
            let xCFFRequestVersion;

            if (invokeFunctionRequest !== null && invokeFunctionRequest !== undefined) {
                if (invokeFunctionRequest instanceof InvokeFunctionRequest) {
                    functionUrn = invokeFunctionRequest.functionUrn;
                    body = invokeFunctionRequest.body
                    xCffLogType = invokeFunctionRequest.xCffLogType;
                    xCFFRequestVersion = invokeFunctionRequest.xCFFRequestVersion;
                } else {
                    functionUrn = invokeFunctionRequest['function_urn'];
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
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let functionUrn;
            
            let requestId;
            
            let marker;
            
            let limit;
            
            let status;
            
            let queryBeginTime;
            
            let queryEndTime;

            if (listAsyncInvocationsRequest !== null && listAsyncInvocationsRequest !== undefined) {
                if (listAsyncInvocationsRequest instanceof ListAsyncInvocationsRequest) {
                    functionUrn = listAsyncInvocationsRequest.functionUrn;
                    requestId = listAsyncInvocationsRequest.requestId;
                    marker = listAsyncInvocationsRequest.marker;
                    limit = listAsyncInvocationsRequest.limit;
                    status = listAsyncInvocationsRequest.status;
                    queryBeginTime = listAsyncInvocationsRequest.queryBeginTime;
                    queryEndTime = listAsyncInvocationsRequest.queryEndTime;
                } else {
                    functionUrn = listAsyncInvocationsRequest['function_urn'];
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

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'function_urn': functionUrn, };
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
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let marker;
            
            let maxitems;
            
            let ispublic;
            
            let dependencyType;
            
            let runtime;
            
            let name;
            
            let limit;

            if (listDependenciesRequest !== null && listDependenciesRequest !== undefined) {
                if (listDependenciesRequest instanceof ListDependenciesRequest) {
                    marker = listDependenciesRequest.marker;
                    maxitems = listDependenciesRequest.maxitems;
                    ispublic = listDependenciesRequest.ispublic;
                    dependencyType = listDependenciesRequest.dependencyType;
                    runtime = listDependenciesRequest.runtime;
                    name = listDependenciesRequest.name;
                    limit = listDependenciesRequest.limit;
                } else {
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
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let dependId;
            
            let marker;
            
            let maxitems;

            if (listDependencyVersionRequest !== null && listDependencyVersionRequest !== undefined) {
                if (listDependencyVersionRequest instanceof ListDependencyVersionRequest) {
                    dependId = listDependencyVersionRequest.dependId;
                    marker = listDependencyVersionRequest.marker;
                    maxitems = listDependencyVersionRequest.maxitems;
                } else {
                    dependId = listDependencyVersionRequest['depend_id'];
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
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let functionUrn;

            if (listEventsRequest !== null && listEventsRequest !== undefined) {
                if (listEventsRequest instanceof ListEventsRequest) {
                    functionUrn = listEventsRequest.functionUrn;
                } else {
                    functionUrn = listEventsRequest['function_urn'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling listEvents.');
            }

            options.pathParams = { 'function_urn': functionUrn, };
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
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let type;
            
            let startTime;
            
            let endTime;
            
            let limit;

            if (listFunctionAsMetricRequest !== null && listFunctionAsMetricRequest !== undefined) {
                if (listFunctionAsMetricRequest instanceof ListFunctionAsMetricRequest) {
                    type = listFunctionAsMetricRequest.type;
                    startTime = listFunctionAsMetricRequest.startTime;
                    endTime = listFunctionAsMetricRequest.endTime;
                    limit = listFunctionAsMetricRequest.limit;
                } else {
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
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let functionUrn;
            
            let marker;
            
            let limit;

            if (listFunctionAsyncInvokeConfigRequest !== null && listFunctionAsyncInvokeConfigRequest !== undefined) {
                if (listFunctionAsyncInvokeConfigRequest instanceof ListFunctionAsyncInvokeConfigRequest) {
                    functionUrn = listFunctionAsyncInvokeConfigRequest.functionUrn;
                    marker = listFunctionAsyncInvokeConfigRequest.marker;
                    limit = listFunctionAsyncInvokeConfigRequest.limit;
                } else {
                    functionUrn = listFunctionAsyncInvokeConfigRequest['function_urn'];
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
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let marker;
            
            let limit;
            
            let urn;

            if (listFunctionReservedInstancesRequest !== null && listFunctionReservedInstancesRequest !== undefined) {
                if (listFunctionReservedInstancesRequest instanceof ListFunctionReservedInstancesRequest) {
                    marker = listFunctionReservedInstancesRequest.marker;
                    limit = listFunctionReservedInstancesRequest.limit;
                    urn = listFunctionReservedInstancesRequest.urn;
                } else {
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
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let funcUrn;
            
            let period;

            if (listFunctionStatisticsRequest !== null && listFunctionStatisticsRequest !== undefined) {
                if (listFunctionStatisticsRequest instanceof ListFunctionStatisticsRequest) {
                    funcUrn = listFunctionStatisticsRequest.funcUrn;
                    period = listFunctionStatisticsRequest.period;
                } else {
                    funcUrn = listFunctionStatisticsRequest['func_urn'];
                    period = listFunctionStatisticsRequest['period'];
                }
            }

        
            if (funcUrn === null || funcUrn === undefined) {
            throw new RequiredError('funcUrn','Required parameter funcUrn was null or undefined when calling listFunctionStatistics.');
            }
            if (period === null || period === undefined) {
            throw new RequiredError('period','Required parameter period was null or undefined when calling listFunctionStatistics.');
            }

            options.pathParams = { 'func_urn': funcUrn,'period': period, };
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
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let functionUrn;

            if (listFunctionTriggersRequest !== null && listFunctionTriggersRequest !== undefined) {
                if (listFunctionTriggersRequest instanceof ListFunctionTriggersRequest) {
                    functionUrn = listFunctionTriggersRequest.functionUrn;
                } else {
                    functionUrn = listFunctionTriggersRequest['function_urn'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling listFunctionTriggers.');
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
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let functionUrn;
            
            let marker;
            
            let maxitems;

            if (listFunctionVersionsRequest !== null && listFunctionVersionsRequest !== undefined) {
                if (listFunctionVersionsRequest instanceof ListFunctionVersionsRequest) {
                    functionUrn = listFunctionVersionsRequest.functionUrn;
                    marker = listFunctionVersionsRequest.marker;
                    maxitems = listFunctionVersionsRequest.maxitems;
                } else {
                    functionUrn = listFunctionVersionsRequest['function_urn'];
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
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let marker;
            
            let maxitems;
            
            let packageName;

            if (listFunctionsRequest !== null && listFunctionsRequest !== undefined) {
                if (listFunctionsRequest instanceof ListFunctionsRequest) {
                    marker = listFunctionsRequest.marker;
                    maxitems = listFunctionsRequest.maxitems;
                    packageName = listFunctionsRequest.packageName;
                } else {
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

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户配额
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listQuotas() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/quotas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;


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
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let functionUrn;
            
            let marker;
            
            let limit;

            if (listReservedInstanceConfigsRequest !== null && listReservedInstanceConfigsRequest !== undefined) {
                if (listReservedInstanceConfigsRequest instanceof ListReservedInstanceConfigsRequest) {
                    functionUrn = listReservedInstanceConfigsRequest.functionUrn;
                    marker = listReservedInstanceConfigsRequest.marker;
                    limit = listReservedInstanceConfigsRequest.limit;
                } else {
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
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let filter;
            
            let period;
            
            let option;

            if (listStatisticsRequest !== null && listStatisticsRequest !== undefined) {
                if (listStatisticsRequest instanceof ListStatisticsRequest) {
                    filter = listStatisticsRequest.filter;
                    period = listStatisticsRequest.period;
                    option = listStatisticsRequest.option;
                } else {
                    filter = listStatisticsRequest['filter'];
                    period = listStatisticsRequest['period'];
                    option = listStatisticsRequest['option'];
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
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let functionUrn;

            if (listVersionAliasesRequest !== null && listVersionAliasesRequest !== undefined) {
                if (listVersionAliasesRequest instanceof ListVersionAliasesRequest) {
                    functionUrn = listVersionAliasesRequest.functionUrn;
                } else {
                    functionUrn = listVersionAliasesRequest['function_urn'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling listVersionAliases.');
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workflowId;
            
            let limit;
            
            let status;
            
            let startTime;
            
            let endTime;

            if (listWorkflowExecutionsRequest !== null && listWorkflowExecutionsRequest !== undefined) {
                if (listWorkflowExecutionsRequest instanceof ListWorkflowExecutionsRequest) {
                    workflowId = listWorkflowExecutionsRequest.workflowId;
                    limit = listWorkflowExecutionsRequest.limit;
                    status = listWorkflowExecutionsRequest.status;
                    startTime = listWorkflowExecutionsRequest.startTime;
                    endTime = listWorkflowExecutionsRequest.endTime;
                } else {
                    workflowId = listWorkflowExecutionsRequest['workflow_id'];
                    limit = listWorkflowExecutionsRequest['limit'];
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
                headers: {},
                data: {}
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
         * 获取指定依赖包
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDependcy(showDependcyRequest?: ShowDependcyRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/dependencies/{depend_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let dependId;

            if (showDependcyRequest !== null && showDependcyRequest !== undefined) {
                if (showDependcyRequest instanceof ShowDependcyRequest) {
                    dependId = showDependcyRequest.dependId;
                } else {
                    dependId = showDependcyRequest['depend_id'];
                }
            }

        
            if (dependId === null || dependId === undefined) {
            throw new RequiredError('dependId','Required parameter dependId was null or undefined when calling showDependcy.');
            }

            options.pathParams = { 'depend_id': dependId, };
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
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let dependId;
            
            let version;

            if (showDependencyVersionRequest !== null && showDependencyVersionRequest !== undefined) {
                if (showDependencyVersionRequest instanceof ShowDependencyVersionRequest) {
                    dependId = showDependencyVersionRequest.dependId;
                    version = showDependencyVersionRequest.version;
                } else {
                    dependId = showDependencyVersionRequest['depend_id'];
                    version = showDependencyVersionRequest['version'];
                }
            }

        
            if (dependId === null || dependId === undefined) {
            throw new RequiredError('dependId','Required parameter dependId was null or undefined when calling showDependencyVersion.');
            }
            if (version === null || version === undefined) {
            throw new RequiredError('version','Required parameter version was null or undefined when calling showDependencyVersion.');
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
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let functionUrn;
            
            let eventId;

            if (showEventRequest !== null && showEventRequest !== undefined) {
                if (showEventRequest instanceof ShowEventRequest) {
                    functionUrn = showEventRequest.functionUrn;
                    eventId = showEventRequest.eventId;
                } else {
                    functionUrn = showEventRequest['function_urn'];
                    eventId = showEventRequest['event_id'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling showEvent.');
            }
            if (eventId === null || eventId === undefined) {
            throw new RequiredError('eventId','Required parameter eventId was null or undefined when calling showEvent.');
            }

            options.pathParams = { 'function_urn': functionUrn,'event_id': eventId, };
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
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let functionUrn;

            if (showFunctionAsyncInvokeConfigRequest !== null && showFunctionAsyncInvokeConfigRequest !== undefined) {
                if (showFunctionAsyncInvokeConfigRequest instanceof ShowFunctionAsyncInvokeConfigRequest) {
                    functionUrn = showFunctionAsyncInvokeConfigRequest.functionUrn;
                } else {
                    functionUrn = showFunctionAsyncInvokeConfigRequest['function_urn'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling showFunctionAsyncInvokeConfig.');
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
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let functionUrn;

            if (showFunctionCodeRequest !== null && showFunctionCodeRequest !== undefined) {
                if (showFunctionCodeRequest instanceof ShowFunctionCodeRequest) {
                    functionUrn = showFunctionCodeRequest.functionUrn;
                } else {
                    functionUrn = showFunctionCodeRequest['function_urn'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling showFunctionCode.');
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
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let functionUrn;

            if (showFunctionConfigRequest !== null && showFunctionConfigRequest !== undefined) {
                if (showFunctionConfigRequest instanceof ShowFunctionConfigRequest) {
                    functionUrn = showFunctionConfigRequest.functionUrn;
                } else {
                    functionUrn = showFunctionConfigRequest['function_urn'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling showFunctionConfig.');
            }

            options.pathParams = { 'function_urn': functionUrn, };
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
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let functionUrn;
            
            let triggerTypeCode;
            
            let triggerId;

            if (showFunctionTriggerRequest !== null && showFunctionTriggerRequest !== undefined) {
                if (showFunctionTriggerRequest instanceof ShowFunctionTriggerRequest) {
                    functionUrn = showFunctionTriggerRequest.functionUrn;
                    triggerTypeCode = showFunctionTriggerRequest.triggerTypeCode;
                    triggerId = showFunctionTriggerRequest.triggerId;
                } else {
                    functionUrn = showFunctionTriggerRequest['function_urn'];
                    triggerTypeCode = showFunctionTriggerRequest['trigger_type_code'];
                    triggerId = showFunctionTriggerRequest['trigger_id'];
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
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let functionUrn;

            if (showLtsLogDetailsRequest !== null && showLtsLogDetailsRequest !== undefined) {
                if (showLtsLogDetailsRequest instanceof ShowLtsLogDetailsRequest) {
                    functionUrn = showLtsLogDetailsRequest.functionUrn;
                } else {
                    functionUrn = showLtsLogDetailsRequest['function_urn'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling showLtsLogDetails.');
            }

            options.pathParams = { 'function_urn': functionUrn, };
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let functionUrn;

            if (showTracingRequest !== null && showTracingRequest !== undefined) {
                if (showTracingRequest instanceof ShowTracingRequest) {
                    functionUrn = showTracingRequest.functionUrn;
                } else {
                    functionUrn = showTracingRequest['function_urn'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling showTracing.');
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
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let functionUrn;
            
            let aliasName;

            if (showVersionAliasRequest !== null && showVersionAliasRequest !== undefined) {
                if (showVersionAliasRequest instanceof ShowVersionAliasRequest) {
                    functionUrn = showVersionAliasRequest.functionUrn;
                    aliasName = showVersionAliasRequest.aliasName;
                } else {
                    functionUrn = showVersionAliasRequest['function_urn'];
                    aliasName = showVersionAliasRequest['alias_name'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling showVersionAlias.');
            }
            if (aliasName === null || aliasName === undefined) {
            throw new RequiredError('aliasName','Required parameter aliasName was null or undefined when calling showVersionAlias.');
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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

            var body: any;
            
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

            var body: any;
            
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
                headers: {},
                data: {}
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
         * 更新指定依赖包
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDependcy(updateDependcyRequest?: UpdateDependcyRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/fgs/dependencies/{depend_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let dependId;

            if (updateDependcyRequest !== null && updateDependcyRequest !== undefined) {
                if (updateDependcyRequest instanceof UpdateDependcyRequest) {
                    dependId = updateDependcyRequest.dependId;
                    body = updateDependcyRequest.body
                } else {
                    dependId = updateDependcyRequest['depend_id'];
                    body = updateDependcyRequest['body'];
                }
            }

        
            if (dependId === null || dependId === undefined) {
            throw new RequiredError('dependId','Required parameter dependId was null or undefined when calling updateDependcy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'depend_id': dependId, };
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

            var body: any;
            
            let functionUrn;
            
            let eventId;

            if (updateEventRequest !== null && updateEventRequest !== undefined) {
                if (updateEventRequest instanceof UpdateEventRequest) {
                    functionUrn = updateEventRequest.functionUrn;
                    eventId = updateEventRequest.eventId;
                    body = updateEventRequest.body
                } else {
                    functionUrn = updateEventRequest['function_urn'];
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
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'function_urn': functionUrn,'event_id': eventId, };
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

            var body: any;
            
            let functionUrn;

            if (updateFunctionAsyncInvokeConfigRequest !== null && updateFunctionAsyncInvokeConfigRequest !== undefined) {
                if (updateFunctionAsyncInvokeConfigRequest instanceof UpdateFunctionAsyncInvokeConfigRequest) {
                    functionUrn = updateFunctionAsyncInvokeConfigRequest.functionUrn;
                    body = updateFunctionAsyncInvokeConfigRequest.body
                } else {
                    functionUrn = updateFunctionAsyncInvokeConfigRequest['function_urn'];
                    body = updateFunctionAsyncInvokeConfigRequest['body'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling updateFunctionAsyncInvokeConfig.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
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

            var body: any;
            
            let functionUrn;

            if (updateFunctionCodeRequest !== null && updateFunctionCodeRequest !== undefined) {
                if (updateFunctionCodeRequest instanceof UpdateFunctionCodeRequest) {
                    functionUrn = updateFunctionCodeRequest.functionUrn;
                    body = updateFunctionCodeRequest.body
                } else {
                    functionUrn = updateFunctionCodeRequest['function_urn'];
                    body = updateFunctionCodeRequest['body'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling updateFunctionCode.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'function_urn': functionUrn, };
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

            var body: any;
            
            let functionUrn;

            if (updateFunctionConfigRequest !== null && updateFunctionConfigRequest !== undefined) {
                if (updateFunctionConfigRequest instanceof UpdateFunctionConfigRequest) {
                    functionUrn = updateFunctionConfigRequest.functionUrn;
                    body = updateFunctionConfigRequest.body
                } else {
                    functionUrn = updateFunctionConfigRequest['function_urn'];
                    body = updateFunctionConfigRequest['body'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling updateFunctionConfig.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
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

            var body: any;
            
            let functionUrn;

            if (updateFunctionMaxInstanceConfigRequest !== null && updateFunctionMaxInstanceConfigRequest !== undefined) {
                if (updateFunctionMaxInstanceConfigRequest instanceof UpdateFunctionMaxInstanceConfigRequest) {
                    functionUrn = updateFunctionMaxInstanceConfigRequest.functionUrn;
                    body = updateFunctionMaxInstanceConfigRequest.body
                } else {
                    functionUrn = updateFunctionMaxInstanceConfigRequest['function_urn'];
                    body = updateFunctionMaxInstanceConfigRequest['body'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling updateFunctionMaxInstanceConfig.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
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

            var body: any;
            
            let functionUrn;

            if (updateFunctionReservedInstancesCountRequest !== null && updateFunctionReservedInstancesCountRequest !== undefined) {
                if (updateFunctionReservedInstancesCountRequest instanceof UpdateFunctionReservedInstancesCountRequest) {
                    functionUrn = updateFunctionReservedInstancesCountRequest.functionUrn;
                    body = updateFunctionReservedInstancesCountRequest.body
                } else {
                    functionUrn = updateFunctionReservedInstancesCountRequest['function_urn'];
                    body = updateFunctionReservedInstancesCountRequest['body'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling updateFunctionReservedInstancesCount.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
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

            var body: any;
            
            let functionUrn;

            if (updateTracingRequest !== null && updateTracingRequest !== undefined) {
                if (updateTracingRequest instanceof UpdateTracingRequest) {
                    functionUrn = updateTracingRequest.functionUrn;
                    body = updateTracingRequest.body
                } else {
                    functionUrn = updateTracingRequest['function_urn'];
                    body = updateTracingRequest['body'];
                }
            }

        
            if (functionUrn === null || functionUrn === undefined) {
            throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling updateTracing.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
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

            var body: any;
            
            let functionUrn;
            
            let triggerTypeCode;
            
            let triggerId;

            if (updateTriggerRequest !== null && updateTriggerRequest !== undefined) {
                if (updateTriggerRequest instanceof UpdateTriggerRequest) {
                    functionUrn = updateTriggerRequest.functionUrn;
                    triggerTypeCode = updateTriggerRequest.triggerTypeCode;
                    triggerId = updateTriggerRequest.triggerId;
                    body = updateTriggerRequest.body
                } else {
                    functionUrn = updateTriggerRequest['function_urn'];
                    triggerTypeCode = updateTriggerRequest['trigger_type_code'];
                    triggerId = updateTriggerRequest['trigger_id'];
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

            var body: any;
            
            let functionUrn;
            
            let aliasName;

            if (updateVersionAliasRequest !== null && updateVersionAliasRequest !== undefined) {
                if (updateVersionAliasRequest instanceof UpdateVersionAliasRequest) {
                    functionUrn = updateVersionAliasRequest.functionUrn;
                    aliasName = updateVersionAliasRequest.aliasName;
                    body = updateVersionAliasRequest.body
                } else {
                    functionUrn = updateVersionAliasRequest['function_urn'];
                    aliasName = updateVersionAliasRequest['alias_name'];
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

            var body: any;
            
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