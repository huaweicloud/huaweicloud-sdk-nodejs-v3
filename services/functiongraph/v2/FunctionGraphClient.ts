import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AsyncInvokeFunctionRequest } from './model/AsyncInvokeFunctionRequest';
import { AsyncInvokeFunctionResponse } from './model/AsyncInvokeFunctionResponse';
import { AsyncInvokeReservedFunctionRequest } from './model/AsyncInvokeReservedFunctionRequest';
import { AsyncInvokeReservedFunctionResponse } from './model/AsyncInvokeReservedFunctionResponse';
import { BatchDeleteFunctionTriggersRequest } from './model/BatchDeleteFunctionTriggersRequest';
import { BatchDeleteFunctionTriggersResponse } from './model/BatchDeleteFunctionTriggersResponse';
import { CreateDependencyRequest } from './model/CreateDependencyRequest';
import { CreateDependencyRequestBody } from './model/CreateDependencyRequestBody';
import { CreateDependencyResponse } from './model/CreateDependencyResponse';
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
import { DeleteDependencyRequest } from './model/DeleteDependencyRequest';
import { DeleteDependencyResponse } from './model/DeleteDependencyResponse';
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
import { FuncAsyncDestinationConfig } from './model/FuncAsyncDestinationConfig';
import { FuncCode } from './model/FuncCode';
import { FuncDestinationConfig } from './model/FuncDestinationConfig';
import { FuncMount } from './model/FuncMount';
import { FuncVpc } from './model/FuncVpc';
import { FunctionAsyncConfig } from './model/FunctionAsyncConfig';
import { ImportFunctionRequest } from './model/ImportFunctionRequest';
import { ImportFunctionRequestBody } from './model/ImportFunctionRequestBody';
import { ImportFunctionResponse } from './model/ImportFunctionResponse';
import { InvokeFunctionRequest } from './model/InvokeFunctionRequest';
import { InvokeFunctionResponse } from './model/InvokeFunctionResponse';
import { ListDependenciesRequest } from './model/ListDependenciesRequest';
import { ListDependenciesResponse } from './model/ListDependenciesResponse';
import { ListDependenciesResult } from './model/ListDependenciesResult';
import { ListEventsRequest } from './model/ListEventsRequest';
import { ListEventsResponse } from './model/ListEventsResponse';
import { ListEventsResult } from './model/ListEventsResult';
import { ListFunctionAsyncInvocationsRequest } from './model/ListFunctionAsyncInvocationsRequest';
import { ListFunctionAsyncInvocationsResponse } from './model/ListFunctionAsyncInvocationsResponse';
import { ListFunctionAsyncInvocationsResult } from './model/ListFunctionAsyncInvocationsResult';
import { ListFunctionAsyncInvokeConfigRequest } from './model/ListFunctionAsyncInvokeConfigRequest';
import { ListFunctionAsyncInvokeConfigResponse } from './model/ListFunctionAsyncInvokeConfigResponse';
import { ListFunctionAsyncInvokeConfigResult } from './model/ListFunctionAsyncInvokeConfigResult';
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
import { ListStatisticsRequest } from './model/ListStatisticsRequest';
import { ListStatisticsResponse } from './model/ListStatisticsResponse';
import { ListVersionAliasResult } from './model/ListVersionAliasResult';
import { ListVersionAliasesRequest } from './model/ListVersionAliasesRequest';
import { ListVersionAliasesResponse } from './model/ListVersionAliasesResponse';
import { MonthUsed } from './model/MonthUsed';
import { MountConfig } from './model/MountConfig';
import { MountUser } from './model/MountUser';
import { PageInfo } from './model/PageInfo';
import { Resources } from './model/Resources';
import { ShowDependencyRequest } from './model/ShowDependencyRequest';
import { ShowDependencyResponse } from './model/ShowDependencyResponse';
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
import { ShowTracingRequest } from './model/ShowTracingRequest';
import { ShowTracingResponse } from './model/ShowTracingResponse';
import { ShowVersionAliasRequest } from './model/ShowVersionAliasRequest';
import { ShowVersionAliasResponse } from './model/ShowVersionAliasResponse';
import { SlaReportsValue } from './model/SlaReportsValue';
import { StrategyConfig } from './model/StrategyConfig';
import { UpdateDependencyRequest } from './model/UpdateDependencyRequest';
import { UpdateDependencyRequestBody } from './model/UpdateDependencyRequestBody';
import { UpdateDependencyResponse } from './model/UpdateDependencyResponse';
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
import { UpdateFunctionReservedInstancesRequest } from './model/UpdateFunctionReservedInstancesRequest';
import { UpdateFunctionReservedInstancesRequestBody } from './model/UpdateFunctionReservedInstancesRequestBody';
import { UpdateFunctionReservedInstancesResponse } from './model/UpdateFunctionReservedInstancesResponse';
import { UpdateTracingRequest } from './model/UpdateTracingRequest';
import { UpdateTracingRequestBody } from './model/UpdateTracingRequestBody';
import { UpdateTracingResponse } from './model/UpdateTracingResponse';
import { UpdateTriggerRequest } from './model/UpdateTriggerRequest';
import { UpdateTriggerRequestBody } from './model/UpdateTriggerRequestBody';
import { UpdateTriggerResponse } from './model/UpdateTriggerResponse';
import { UpdateVersionAliasRequest } from './model/UpdateVersionAliasRequest';
import { UpdateVersionAliasRequestBody } from './model/UpdateVersionAliasRequestBody';
import { UpdateVersionAliasResponse } from './model/UpdateVersionAliasResponse';

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
     * @summary 异步执行函数。
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {{ [key: string]: object; }} asyncInvokeFunctionRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public asyncInvokeFunction(asyncInvokeFunctionRequest?: AsyncInvokeFunctionRequest): Promise<AsyncInvokeFunctionResponse> {
        const options = ParamCreater().asyncInvokeFunction(asyncInvokeFunctionRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 函数异步执行并返回预留实例ID用于场景指客户端请求执行比较费时任务，不需要同步等待执行完成返回结果，该方法提前返回任务执行对应的预留实例ID, 如果预留实例有异常， 可以通过该实例ID把对应实例删除（该接口主要针对白名单用户）。
     * @summary 函数异步执行并返回预留实例ID。
     * @param {string} functionUrn 函数的URN（Uniform Resource Name），唯一标识函数。
     * @param {{ [key: string]: object; }} asyncInvokeReservedFunctionRequestBody 函数异步执行并返回预留实例请求body体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public asyncInvokeReservedFunction(asyncInvokeReservedFunctionRequest?: AsyncInvokeReservedFunctionRequest): Promise<AsyncInvokeReservedFunctionResponse> {
        const options = ParamCreater().asyncInvokeReservedFunction(asyncInvokeReservedFunctionRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 创建依赖包。
     * @summary 创建依赖包
     * @param {CreateDependencyRequestBody} createDependencyRequestBody 添加依赖包的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDependency(createDependencyRequest?: CreateDependencyRequest): Promise<CreateDependencyResponse> {
        const options = ParamCreater().createDependency(createDependencyRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 创建测试事件。
     * @summary 创建测试事件
     * @param {string} functionUrn 函数的URN（Uniform Resource Name），唯一标识函数。
     * @param {CreateEventRequestBody} createEventRequestBody 创建测试事件请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createEvent(createEventRequest?: CreateEventRequest): Promise<CreateEventResponse> {
        const options = ParamCreater().createEvent(createEventRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 创建指定的函数。
     * @summary 创建函数。
     * @param {CreateFunctionRequestBody} createFunctionRequestBody 创建函数请求body体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createFunction(createFunctionRequest?: CreateFunctionRequest): Promise<CreateFunctionResponse> {
        const options = ParamCreater().createFunction(createFunctionRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 发布函数版本。
     * @summary 发布函数版本。
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {CreateFunctionVersionRequestBody} createFunctionVersionRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createFunctionVersion(createFunctionVersionRequest?: CreateFunctionVersionRequest): Promise<CreateFunctionVersionResponse> {
        const options = ParamCreater().createFunctionVersion(createFunctionVersionRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 创建函数灰度版本别名。
     * @summary 创建函数版本别名。
     * @param {string} functionUrn 函数的URN。
     * @param {CreateVersionAliasRequestBody} createVersionAliasRequestBody 创建函数请求body体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVersionAlias(createVersionAliasRequest?: CreateVersionAliasRequest): Promise<CreateVersionAliasResponse> {
        const options = ParamCreater().createVersionAlias(createVersionAliasRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 删除指定的依赖包。
     * @summary 删除依赖包
     * @param {string} dependId 依赖包的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDependency(deleteDependencyRequest?: DeleteDependencyRequest): Promise<void> {
        const options = ParamCreater().deleteDependency(deleteDependencyRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 删除测试事件。
     * @summary 删除测试事件
     * @param {string} eventId 事件ID。
     * @param {string} functionUrn 函数的URN（Uniform Resource Name），唯一标识函数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteEvent(deleteEventRequest?: DeleteEventRequest): Promise<void> {
        const options = ParamCreater().deleteEvent(deleteEventRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 删除指定的函数或者特定的版本（不允许删除latest版本）。  如果URN中包含函数版本或者别名，则删除特定的函数版本或者别名指向的版本以及该版本关联的trigger。 如果URN中不包含版本或者别名，则删除整个函数，包含所有版本以及别名，触发器。
     * @summary 删除函数/版本。
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。  不允许删除函数的latest版本，如要删除整个函数（包含所有版本），提供不带任何版本号/别名的urn，如： urn:fss:xxxxxxxx:7aad83af3e8d42e99ac194e8419e2c9b:function:default:test
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteFunction(deleteFunctionRequest?: DeleteFunctionRequest): Promise<void> {
        const options = ParamCreater().deleteFunction(deleteFunctionRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 删除函数异步配置信息。
     * @summary 删除函数异步配置信息。
     * @param {string} functionUrn 函数的URN（Uniform Resource Name），唯一标识函数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteFunctionAsyncInvokeConfig(deleteFunctionAsyncInvokeConfigRequest?: DeleteFunctionAsyncInvokeConfigRequest): Promise<void> {
        const options = ParamCreater().deleteFunctionAsyncInvokeConfig(deleteFunctionAsyncInvokeConfigRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 删除函数版本别名。
     * @summary 删除函数版本别名。
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {string} aliasName 要删除的别名名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteVersionAlias(deleteVersionAliasRequest?: DeleteVersionAliasRequest): Promise<void> {
        const options = ParamCreater().deleteVersionAlias(deleteVersionAliasRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 开通lts日志上报功能。
     * @summary 开通lts日志上报功能。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enableLtsLogs(): Promise<void> {
        const options = ParamCreater().enableLtsLogs();
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 导出函数。
     * @summary 导出函数。
     * @param {string} functionUrn 函数的URN（Uniform Resource Name），唯一标识函数。
     * @param {boolean} [config] 是否导出函数配置
     * @param {boolean} [code] 是否导出函数代码
     * @param {'type' | 'code'} [type] 兼容老的方式，type&#x3D;code代表导出代码,type&#x3D;config代码导出配置
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public exportFunction(exportFunctionRequest?: ExportFunctionRequest): Promise<void> {
        const options = ParamCreater().exportFunction(exportFunctionRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 导入函数。
     * @summary 导入函数。
     * @param {ImportFunctionRequestBody} importFunctionRequestBody 导入函数的请求body体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public importFunction(importFunctionRequest?: ImportFunctionRequest): Promise<ImportFunctionResponse> {
        const options = ParamCreater().importFunction(importFunctionRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 同步调用指的是客户端请求需要明确等到响应结果，也就是说这样的请求必须得调用到用户的函数，并且等到调用完成才返回。
     * @summary 同步执行函数。
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {{ [key: string]: object; }} invokeFunctionRequestBody 
     * @param {string} [xCffLogType] 取值为：tail（返回函数执行后的4K日志），或者为空（不返回日志）。
     * @param {string} [xCFFRequestVersion] 返回体格式，取值v0,v1。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public invokeFunction(invokeFunctionRequest?: InvokeFunctionRequest): Promise<InvokeFunctionResponse> {
        const options = ParamCreater().invokeFunction(invokeFunctionRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 获取依赖包列表。
     * @summary 获取依赖包列表
     * @param {'public' | 'private' | 'all'} [dependencyType] 依赖包类型public：公开,private:私有，all：全部。缺省时查询全量。
     * @param {'Java 8' | 'Node.js 6.10' | 'Node.js 8.10' | 'Node.js 10.16' | 'Node.js 12.13' | 'Python 2.7' | 'Python 3.6' | 'Go 1.8' | 'Go 1.x' | 'C#(.NET Core 2.0)' | 'C#(.NET Core 2.1)' | 'C#(.NET Core 3.1)' | 'PHP 7.3'} [runtime] 运行时语言
     * @param {string} [name] 依赖包名称。
     * @param {string} [marker] 上一次查询依赖包的最后记录位置，默认为\&quot;0\&quot;。
     * @param {string} [limit] 本次查询可获取的依赖包的最大数目，默认为\&quot;400\&quot;。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDependencies(listDependenciesRequest?: ListDependenciesRequest): Promise<ListDependenciesResponse> {
        const options = ParamCreater().listDependencies(listDependenciesRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 获取指定函数的测试事件列表。
     * @summary 获取测试事件列表
     * @param {string} functionUrn 函数的URN（Uniform Resource Name），唯一标识函数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEvents(listEventsRequest?: ListEventsRequest): Promise<ListEventsResponse> {
        const options = ParamCreater().listEvents(listEventsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 获取函数异步调用请求列表
     * @summary 获取函数异步调用请求列表
     * @param {string} functionUrn 函数URN
     * @param {string} [requestId] 需要查询的异步请求ID。如果不指定，默认查询所有异步调用记录
     * @param {string} [limit] 本次查询最大返回的数据条数，最大值500，默认值100
     * @param {'WAIT' | 'RUNNING' | 'SUCCESS' | 'FAIL' | 'DISCARD'} [status] 本次查询指定的异步调用状态，支持5种状态，如果不指定，则查询所有状态的调用记录 WAIT: 等待 RUNNING: 执行中 SUCCESS: 执行成功 FAIL: 执行失败 DISCARD: 请求丢弃
     * @param {Date} [queryBeginTime] 搜索起始时间（格式为YYYY-MM-DD\&#39;T\&#39;HH:mm:ss,UTC时间）。如果不指定默认为当前时间前1小时
     * @param {Date} [queryEndTime] 搜索结束时间（格式为YYYY-MM-DD\&#39;T\&#39;HH:mm:ss,UTC时间）。如果不指定默认为当前时间
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFunctionAsyncInvocations(listFunctionAsyncInvocationsRequest?: ListFunctionAsyncInvocationsRequest): Promise<ListFunctionAsyncInvocationsResponse> {
        const options = ParamCreater().listFunctionAsyncInvocations(listFunctionAsyncInvocationsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 获取函数异步配置列表。
     * @summary 获取函数异步配置列表
     * @param {string} functionUrn 函数的URN（Uniform Resource Name），唯一标识函数。
     * @param {string} [marker] 上一次查询到的最后的记录位置。
     * @param {string} [limit] 每页显示的条目数量。 - 如果不提供该值或者提供的值等于0，则使用默认值：10，最大值100，大于100取值100。 - 如果该值小于0，则返回参数错误。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFunctionAsyncInvokeConfig(listFunctionAsyncInvokeConfigRequest?: ListFunctionAsyncInvokeConfigRequest): Promise<ListFunctionAsyncInvokeConfigResponse> {
        const options = ParamCreater().listFunctionAsyncInvokeConfig(listFunctionAsyncInvokeConfigRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 获取指定时间段的函数运行指标。
     * @summary 获取指定时间段的函数运行指标
     * @param {string} funcUrn 函数的URN（Uniform Resource Name），唯一标识函数。
     * @param {string} period 获取最近多少分钟内函数执行的指标。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFunctionStatistics(listFunctionStatisticsRequest?: ListFunctionStatisticsRequest): Promise<ListFunctionStatisticsResponse> {
        const options = ParamCreater().listFunctionStatistics(listFunctionStatisticsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 获取指定函数的版本列表。
     * @summary 获取指定函数的版本列表。
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {string} [marker] 上一次查询到的最后的记录位置。
     * @param {string} [maxitems] 每次查询获取的最大函数记录数量。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFunctionVersions(listFunctionVersionsRequest?: ListFunctionVersionsRequest): Promise<ListFunctionVersionsResponse> {
        const options = ParamCreater().listFunctionVersions(listFunctionVersionsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 获取函数列表
     * @summary 获取函数列表
     * @param {string} [marker] 上一次查询到的最后的记录位置。
     * @param {string} [maxitems] 每次查询获取的最大函数记录数量 最大值：400 如果不提供该值或者提供的值大于400或等于0，则使用默认值：400 如果该值小于0，则返回参数错误。
     * @param {string} [packageName] 应用名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFunctions(listFunctionsRequest?: ListFunctionsRequest): Promise<ListFunctionsResponse> {
        const options = ParamCreater().listFunctions(listFunctionsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 查询租户配额
     * @summary 查询租户配额
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listQuotas(): Promise<ListQuotasResponse> {
        const options = ParamCreater().listQuotas();
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 租户函数统计信息。  返回三类的统计信息，函数格式和大小使用情况包括配额和使用量，流量报告。 通过查询参数filter可以进行过滤，查询参数period可以指定返回的时间段。
     * @summary 租户函数统计信息
     * @param {'monitor_data' | 'monthly_report'} filter 参数过滤器。
     * @param {string} [period] 时间段单位为分钟，与filter参数配合使用。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listStatistics(listStatisticsRequest?: ListStatisticsRequest): Promise<ListStatisticsResponse> {
        const options = ParamCreater().listStatistics(listStatisticsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 获取函数版本别名列表。
     * @summary 获取指定函数所有版本别名列表。
     * @param {string} functionUrn 函数的URN。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVersionAliases(listVersionAliasesRequest?: ListVersionAliasesRequest): Promise<Array<ListVersionAliasResult>> {
        const options = ParamCreater().listVersionAliases(listVersionAliasesRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 获取指定依赖包。
     * @summary 获取指定依赖包
     * @param {string} dependId 依赖包的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDependency(showDependencyRequest?: ShowDependencyRequest): Promise<ShowDependencyResponse> {
        const options = ParamCreater().showDependency(showDependencyRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 获取测试事件详细信息。
     * @summary 获取测试事件详细信息
     * @param {string} eventId 事件ID。
     * @param {string} functionUrn 函数的URN（Uniform Resource Name），唯一标识函数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showEvent(showEventRequest?: ShowEventRequest): Promise<ShowEventResponse> {
        const options = ParamCreater().showEvent(showEventRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 获取函数异步配置信息。
     * @summary 获取函数异步配置信息。
     * @param {string} functionUrn 函数的URN（Uniform Resource Name），唯一标识函数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFunctionAsyncInvokeConfig(showFunctionAsyncInvokeConfigRequest?: ShowFunctionAsyncInvokeConfigRequest): Promise<ShowFunctionAsyncInvokeConfigResponse> {
        const options = ParamCreater().showFunctionAsyncInvokeConfig(showFunctionAsyncInvokeConfigRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 获取指定函数的代码。
     * @summary 获取指定函数代码。
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFunctionCode(showFunctionCodeRequest?: ShowFunctionCodeRequest): Promise<ShowFunctionCodeResponse> {
        const options = ParamCreater().showFunctionCode(showFunctionCodeRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 获取指定函数的metadata。
     * @summary 获取函数的metadata。
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFunctionConfig(showFunctionConfigRequest?: ShowFunctionConfigRequest): Promise<ShowFunctionConfigResponse> {
        const options = ParamCreater().showFunctionConfig(showFunctionConfigRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 获取指定函数的lts日志组日志流配置。
     * @summary 获取指定函数的lts日志组日志流配置。
     * @param {string} functionUrn 函数的URN（Uniform Resource Name），唯一标识函数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showLtsLogDetails(showLtsLogDetailsRequest?: ShowLtsLogDetailsRequest): Promise<ShowLtsLogDetailsResponse> {
        const options = ParamCreater().showLtsLogDetails(showLtsLogDetailsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 获取函数调用链配置
     * @summary 获取函数调用链配置
     * @param {string} functionUrn 函数的URN（Uniform Resource Name），唯一标识函数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTracing(showTracingRequest?: ShowTracingRequest): Promise<ShowTracingResponse> {
        const options = ParamCreater().showTracing(showTracingRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 获取函数指定的版本别名信息。
     * @summary 获取函数版本的指定别名信息。
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {string} aliasName 要查询的别名名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVersionAlias(showVersionAliasRequest?: ShowVersionAliasRequest): Promise<ShowVersionAliasResponse> {
        const options = ParamCreater().showVersionAlias(showVersionAliasRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 更新依赖包指定依赖包。
     * @summary 更新依赖包指定依赖包
     * @param {string} dependId 依赖包的ID。
     * @param {UpdateDependencyRequestBody} updateDependencyRequestBody 更新依赖包的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDependency(updateDependencyRequest?: UpdateDependencyRequest): Promise<UpdateDependencyResponse> {
        const options = ParamCreater().updateDependency(updateDependencyRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 更新测试事件。
     * @summary 更新测试事件
     * @param {string} eventId 事件ID。
     * @param {string} functionUrn 函数的URN（Uniform Resource Name），唯一标识函数。
     * @param {UpdateEventRequestBody} updateEventRequestBody 更新测试事件的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateEvent(updateEventRequest?: UpdateEventRequest): Promise<UpdateEventResponse> {
        const options = ParamCreater().updateEvent(updateEventRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 设置函数异步配置信息。
     * @summary 设置函数异步配置信息。
     * @param {string} functionUrn 函数的URN（Uniform Resource Name），唯一标识函数。
     * @param {UpdateFunctionAsyncInvokeConfigRequestBody} updateFunctionAsyncInvokeConfigRequestBody 设置函数异步配置请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateFunctionAsyncInvokeConfig(updateFunctionAsyncInvokeConfigRequest?: UpdateFunctionAsyncInvokeConfigRequest): Promise<UpdateFunctionAsyncInvokeConfigResponse> {
        const options = ParamCreater().updateFunctionAsyncInvokeConfig(updateFunctionAsyncInvokeConfigRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 修改指定的函数的代码。
     * @summary 修改函数代码。
     * @param {string} functionUrn 函数的URN，详细解释见表1 FunctionGraph函数字段说明表的描述。
     * @param {UpdateFunctionCodeRequestBody} updateFunctionCodeRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateFunctionCode(updateFunctionCodeRequest?: UpdateFunctionCodeRequest): Promise<UpdateFunctionCodeResponse> {
        const options = ParamCreater().updateFunctionCode(updateFunctionCodeRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 修改指定的函数的metadata信息。
     * @summary 修改函数的metadata信息。
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型。
     * @param {UpdateFunctionConfigRequestBody} updateFunctionConfigRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateFunctionConfig(updateFunctionConfigRequest?: UpdateFunctionConfigRequest): Promise<UpdateFunctionConfigResponse> {
        const options = ParamCreater().updateFunctionConfig(updateFunctionConfigRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 为函数绑定预留实例
     * @summary 更新函数预留实例个数
     * @param {string} functionUrn 函数的URN（Uniform Resource Name），唯一标识函数。
     * @param {UpdateFunctionReservedInstancesRequestBody} updateFunctionReservedInstancesRequestBody 更新函数预留实例请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateFunctionReservedInstances(updateFunctionReservedInstancesRequest?: UpdateFunctionReservedInstancesRequest): Promise<UpdateFunctionReservedInstancesResponse> {
        const options = ParamCreater().updateFunctionReservedInstances(updateFunctionReservedInstancesRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 修改函数调用链配置,开通/修改传入aksk，关闭aksk传空
     * @summary 修改函数调用链配置
     * @param {string} functionUrn 函数的URN（Uniform Resource Name），唯一标识函数。
     * @param {UpdateTracingRequestBody} updateTracingRequestBody 请求body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTracing(updateTracingRequest?: UpdateTracingRequest): Promise<void> {
        const options = ParamCreater().updateTracing(updateTracingRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 修改函数版本别名信息。
     * @summary 修改函数版本别名信息。
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {string} aliasName 要更新的别名名称。
     * @param {UpdateVersionAliasRequestBody} updateVersionAliasRequestBody 创建函数请求body体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateVersionAlias(updateVersionAliasRequest?: UpdateVersionAliasRequest): Promise<UpdateVersionAliasResponse> {
        const options = ParamCreater().updateVersionAlias(updateVersionAliasRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 删除指定函数所有触发器设置。  在提供函数版本且非latest的情况下，删除对应函数版本的触发器。 在提供函数别名的情况下，删除对应函数别名的触发器。 在不提供函数版本（也不提供别名）或版本为latest的情况下，删除该函数所有的触发器（包括所有版本和别名）。
     * @summary 删除指定函数的所有触发器。
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteFunctionTriggers(batchDeleteFunctionTriggersRequest?: BatchDeleteFunctionTriggersRequest): Promise<void> {
        const options = ParamCreater().batchDeleteFunctionTriggers(batchDeleteFunctionTriggersRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 创建触发器。  - 可以创建的触发器类型包括TIMER、APIG、CTS、DDS、DMS、DIS、LTS、OBS、SMN、KAFKA。 - DDS和KAFKA触发器创建时默认为DISABLED状态，其他触发器默认为ACTIVE状态。 - TIMER、DDS、DMS、KAFKA、LTS触发器支持禁用，其他触发器不支持。
     * @summary 创建触发器。
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {CreateFunctionTriggerRequestBody} createFunctionTriggerRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createFunctionTrigger(createFunctionTriggerRequest?: CreateFunctionTriggerRequest): Promise<CreateFunctionTriggerResponse> {
        const options = ParamCreater().createFunctionTrigger(createFunctionTriggerRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 删除触发器。
     * @summary 删除触发器。
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {'TIMER' | 'APIG' | 'CTS' | 'DDS' | 'DMS' | 'DIS' | 'LTS' | 'OBS' | 'SMN' | 'KAFKA'} triggerTypeCode 触发器类型代码。
     * @param {string} triggerId 触发器编码。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteFunctionTrigger(deleteFunctionTriggerRequest?: DeleteFunctionTriggerRequest): Promise<void> {
        const options = ParamCreater().deleteFunctionTrigger(deleteFunctionTriggerRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 获取指定函数的所有触发器设置。
     * @summary 获取指定函数的所有触发器。
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFunctionTriggers(listFunctionTriggersRequest?: ListFunctionTriggersRequest): Promise<Array<ListFunctionTriggerResult>> {
        const options = ParamCreater().listFunctionTriggers(listFunctionTriggersRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 获取特定触发器的信息。
     * @summary 获取指定触发器的信息。
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {'TIMER' | 'APIG' | 'CTS' | 'DDS' | 'DMS' | 'DIS' | 'LTS' | 'OBS' | 'SMN' | 'KAFKA'} triggerTypeCode 
     * @param {string} triggerId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFunctionTrigger(showFunctionTriggerRequest?: ShowFunctionTriggerRequest): Promise<ShowFunctionTriggerResponse> {
        const options = ParamCreater().showFunctionTrigger(showFunctionTriggerRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 更新触发器
     * @summary 更新触发器
     * @param {string} functionUrn 函数的URN，详细解释见FunctionGraph函数模型的描述。
     * @param {'TIMER' | 'APIG' | 'CTS' | 'DDS' | 'DMS' | 'DIS' | 'LTS' | 'OBS' | 'SMN' | 'KAFKA'} triggerTypeCode 触发器类型代码。
     * @param {string} triggerId 触发器编码。
     * @param {UpdateTriggerRequestBody} updateTriggerRequestBody 更新触发器的请求body体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTrigger(updateTriggerRequest?: UpdateTriggerRequest): Promise<void> {
        const options = ParamCreater().updateTrigger(updateTriggerRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 异步执行函数。
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
         * 函数异步执行并返回预留实例ID用于场景指客户端请求执行比较费时任务，不需要同步等待执行完成返回结果，该方法提前返回任务执行对应的预留实例ID, 如果预留实例有异常， 可以通过该实例ID把对应实例删除（该接口主要针对白名单用户）。
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
         * 创建依赖包。
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
         * 创建测试事件。
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
         * 发布函数版本。
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
         * 删除指定的依赖包。
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
         * 删除测试事件。
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

            let eventId;
            let functionUrn;

            if (deleteEventRequest !== null && deleteEventRequest !== undefined) {
                if (deleteEventRequest instanceof DeleteEventRequest) {
                    eventId = deleteEventRequest.eventId;
                    functionUrn = deleteEventRequest.functionUrn;
                } else {
                    eventId = deleteEventRequest['event_id'];
                    functionUrn = deleteEventRequest['function_urn'];
                }
            }
        
            if (eventId === null || eventId === undefined) {
                throw new RequiredError('eventId','Required parameter eventId was null or undefined when calling deleteEvent.');
            }
            if (functionUrn === null || functionUrn === undefined) {
                throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling deleteEvent.');
            }

            options.pathParams = { 'event_id': eventId,'function_urn': functionUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定的函数或者特定的版本（不允许删除latest版本）。  如果URN中包含函数版本或者别名，则删除特定的函数版本或者别名指向的版本以及该版本关联的trigger。 如果URN中不包含版本或者别名，则删除整个函数，包含所有版本以及别名，触发器。
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
         * 删除函数版本别名。
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
         * 导出函数。
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
         * 导入函数。
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
         * 获取依赖包列表。
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
            let dependencyType;
            let runtime;
            let name;
            let marker;
            let limit;

            if (listDependenciesRequest !== null && listDependenciesRequest !== undefined) {
                if (listDependenciesRequest instanceof ListDependenciesRequest) {
                    dependencyType = listDependenciesRequest.dependencyType;
                    runtime = listDependenciesRequest.runtime;
                    name = listDependenciesRequest.name;
                    marker = listDependenciesRequest.marker;
                    limit = listDependenciesRequest.limit;
                } else {
                    dependencyType = listDependenciesRequest['dependency_type'];
                    runtime = listDependenciesRequest['runtime'];
                    name = listDependenciesRequest['name'];
                    marker = listDependenciesRequest['marker'];
                    limit = listDependenciesRequest['limit'];
                }
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
         * 获取指定函数的测试事件列表。
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
         * 获取函数异步调用请求列表
         */
        listFunctionAsyncInvocations(listFunctionAsyncInvocationsRequest?: ListFunctionAsyncInvocationsRequest) {
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
            let limit;
            let status;
            let queryBeginTime;
            let queryEndTime;

            if (listFunctionAsyncInvocationsRequest !== null && listFunctionAsyncInvocationsRequest !== undefined) {
                if (listFunctionAsyncInvocationsRequest instanceof ListFunctionAsyncInvocationsRequest) {
                    functionUrn = listFunctionAsyncInvocationsRequest.functionUrn;
                    requestId = listFunctionAsyncInvocationsRequest.requestId;
                    limit = listFunctionAsyncInvocationsRequest.limit;
                    status = listFunctionAsyncInvocationsRequest.status;
                    queryBeginTime = listFunctionAsyncInvocationsRequest.queryBeginTime;
                    queryEndTime = listFunctionAsyncInvocationsRequest.queryEndTime;
                } else {
                    functionUrn = listFunctionAsyncInvocationsRequest['function_urn'];
                    requestId = listFunctionAsyncInvocationsRequest['request_id'];
                    limit = listFunctionAsyncInvocationsRequest['limit'];
                    status = listFunctionAsyncInvocationsRequest['status'];
                    queryBeginTime = listFunctionAsyncInvocationsRequest['query_begin_time'];
                    queryEndTime = listFunctionAsyncInvocationsRequest['query_end_time'];
                }
            }
        
            if (functionUrn === null || functionUrn === undefined) {
                throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling listFunctionAsyncInvocations.');
            }
            if (requestId !== null && requestId !== undefined) {
                localVarQueryParameter['request_id'] = requestId;
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
         * 获取函数异步配置列表。
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
         * 获取指定时间段的函数运行指标。
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
         * 获取指定函数的版本列表。
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
         * 租户函数统计信息。  返回三类的统计信息，函数格式和大小使用情况包括配额和使用量，流量报告。 通过查询参数filter可以进行过滤，查询参数period可以指定返回的时间段。
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

            if (listStatisticsRequest !== null && listStatisticsRequest !== undefined) {
                if (listStatisticsRequest instanceof ListStatisticsRequest) {
                    filter = listStatisticsRequest.filter;
                    period = listStatisticsRequest.period;
                } else {
                    filter = listStatisticsRequest['filter'];
                    period = listStatisticsRequest['period'];
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

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取函数版本别名列表。
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
         * 获取指定依赖包。
         */
        showDependency(showDependencyRequest?: ShowDependencyRequest) {
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

            if (showDependencyRequest !== null && showDependencyRequest !== undefined) {
                if (showDependencyRequest instanceof ShowDependencyRequest) {
                    dependId = showDependencyRequest.dependId;
                } else {
                    dependId = showDependencyRequest['depend_id'];
                }
            }
        
            if (dependId === null || dependId === undefined) {
                throw new RequiredError('dependId','Required parameter dependId was null or undefined when calling showDependency.');
            }

            options.pathParams = { 'depend_id': dependId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取测试事件详细信息。
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

            let eventId;
            let functionUrn;

            if (showEventRequest !== null && showEventRequest !== undefined) {
                if (showEventRequest instanceof ShowEventRequest) {
                    eventId = showEventRequest.eventId;
                    functionUrn = showEventRequest.functionUrn;
                } else {
                    eventId = showEventRequest['event_id'];
                    functionUrn = showEventRequest['function_urn'];
                }
            }
        
            if (eventId === null || eventId === undefined) {
                throw new RequiredError('eventId','Required parameter eventId was null or undefined when calling showEvent.');
            }
            if (functionUrn === null || functionUrn === undefined) {
                throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling showEvent.');
            }

            options.pathParams = { 'event_id': eventId,'function_urn': functionUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取函数异步配置信息。
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
         * 获取指定函数的lts日志组日志流配置。
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
         * 获取函数调用链配置
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
         * 更新依赖包指定依赖包。
         */
        updateDependency(updateDependencyRequest?: UpdateDependencyRequest) {
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

            if (updateDependencyRequest !== null && updateDependencyRequest !== undefined) {
                if (updateDependencyRequest instanceof UpdateDependencyRequest) {
                    dependId = updateDependencyRequest.dependId;
                    body = updateDependencyRequest.body
                } else {
                    dependId = updateDependencyRequest['depend_id'];
                    body = updateDependencyRequest['body'];
                }
            }
        
            if (dependId === null || dependId === undefined) {
                throw new RequiredError('dependId','Required parameter dependId was null or undefined when calling updateDependency.');
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
         * 更新测试事件。
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
            let eventId;
            let functionUrn;

            if (updateEventRequest !== null && updateEventRequest !== undefined) {
                if (updateEventRequest instanceof UpdateEventRequest) {
                    eventId = updateEventRequest.eventId;
                    functionUrn = updateEventRequest.functionUrn;
                    body = updateEventRequest.body
                } else {
                    eventId = updateEventRequest['event_id'];
                    functionUrn = updateEventRequest['function_urn'];
                    body = updateEventRequest['body'];
                }
            }
        
            if (eventId === null || eventId === undefined) {
                throw new RequiredError('eventId','Required parameter eventId was null or undefined when calling updateEvent.');
            }
            if (functionUrn === null || functionUrn === undefined) {
                throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling updateEvent.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'event_id': eventId,'function_urn': functionUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置函数异步配置信息。
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
         * 为函数绑定预留实例
         */
        updateFunctionReservedInstances(updateFunctionReservedInstancesRequest?: UpdateFunctionReservedInstancesRequest) {
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

            if (updateFunctionReservedInstancesRequest !== null && updateFunctionReservedInstancesRequest !== undefined) {
                if (updateFunctionReservedInstancesRequest instanceof UpdateFunctionReservedInstancesRequest) {
                    functionUrn = updateFunctionReservedInstancesRequest.functionUrn;
                    body = updateFunctionReservedInstancesRequest.body
                } else {
                    functionUrn = updateFunctionReservedInstancesRequest['function_urn'];
                    body = updateFunctionReservedInstancesRequest['body'];
                }
            }
        
            if (functionUrn === null || functionUrn === undefined) {
                throw new RequiredError('functionUrn','Required parameter functionUrn was null or undefined when calling updateFunctionReservedInstances.');
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
         * 修改函数版本别名信息。
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
         * 删除指定函数所有触发器设置。  在提供函数版本且非latest的情况下，删除对应函数版本的触发器。 在提供函数别名的情况下，删除对应函数别名的触发器。 在不提供函数版本（也不提供别名）或版本为latest的情况下，删除该函数所有的触发器（包括所有版本和别名）。
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
         * 创建触发器。  - 可以创建的触发器类型包括TIMER、APIG、CTS、DDS、DMS、DIS、LTS、OBS、SMN、KAFKA。 - DDS和KAFKA触发器创建时默认为DISABLED状态，其他触发器默认为ACTIVE状态。 - TIMER、DDS、DMS、KAFKA、LTS触发器支持禁用，其他触发器不支持。
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
         * 删除触发器。
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
         * 获取指定函数的所有触发器设置。
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
         * 获取特定触发器的信息。
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
         * 更新触发器
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