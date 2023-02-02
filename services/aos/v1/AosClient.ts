import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AgenciesPrimitiveTypeHolder } from './model/AgenciesPrimitiveTypeHolder';
import { Agency } from './model/Agency';
import { ApplyExecutionPlanRequest } from './model/ApplyExecutionPlanRequest';
import { ApplyExecutionPlanRequestBody } from './model/ApplyExecutionPlanRequestBody';
import { ApplyExecutionPlanResponse } from './model/ApplyExecutionPlanResponse';
import { ContinueRollbackStackRequest } from './model/ContinueRollbackStackRequest';
import { ContinueRollbackStackRequestBody } from './model/ContinueRollbackStackRequestBody';
import { ContinueRollbackStackResponse } from './model/ContinueRollbackStackResponse';
import { CreateExecutionPlanRequest } from './model/CreateExecutionPlanRequest';
import { CreateExecutionPlanRequestBody } from './model/CreateExecutionPlanRequestBody';
import { CreateExecutionPlanResponse } from './model/CreateExecutionPlanResponse';
import { CreateStackRequest } from './model/CreateStackRequest';
import { CreateStackRequestBody } from './model/CreateStackRequestBody';
import { CreateStackResponse } from './model/CreateStackResponse';
import { DeleteExecutionPlanRequest } from './model/DeleteExecutionPlanRequest';
import { DeleteExecutionPlanResponse } from './model/DeleteExecutionPlanResponse';
import { DeleteStackRequest } from './model/DeleteStackRequest';
import { DeleteStackResponse } from './model/DeleteStackResponse';
import { DeployStackRequest } from './model/DeployStackRequest';
import { DeployStackRequestBody } from './model/DeployStackRequestBody';
import { DeployStackResponse } from './model/DeployStackResponse';
import { DescribeExecutionPlanRequest } from './model/DescribeExecutionPlanRequest';
import { DescribeExecutionPlanResponse } from './model/DescribeExecutionPlanResponse';
import { EnableAutoRollbackPrimitiveTypeHolder } from './model/EnableAutoRollbackPrimitiveTypeHolder';
import { EnableDeletionProtectionPrimitiveTypeHolder } from './model/EnableDeletionProtectionPrimitiveTypeHolder';
import { EncryptionStructure } from './model/EncryptionStructure';
import { EstimateExecutionPlanPriceRequest } from './model/EstimateExecutionPlanPriceRequest';
import { EstimateExecutionPlanPriceResponse } from './model/EstimateExecutionPlanPriceResponse';
import { ExecutionPlan } from './model/ExecutionPlan';
import { ExecutionPlanDiffAttribute } from './model/ExecutionPlanDiffAttribute';
import { ExecutionPlanItem } from './model/ExecutionPlanItem';
import { ExecutionPlanSummary } from './model/ExecutionPlanSummary';
import { ExecutorPrimitiveTypeHolder } from './model/ExecutorPrimitiveTypeHolder';
import { GetExecutionPlanRequest } from './model/GetExecutionPlanRequest';
import { GetExecutionPlanResponse } from './model/GetExecutionPlanResponse';
import { GetStackMetadataRequest } from './model/GetStackMetadataRequest';
import { GetStackMetadataResponse } from './model/GetStackMetadataResponse';
import { GetStackTemplateRequest } from './model/GetStackTemplateRequest';
import { GetStackTemplateResponse } from './model/GetStackTemplateResponse';
import { ItemsResponse } from './model/ItemsResponse';
import { KmsStructure } from './model/KmsStructure';
import { ListExecutionPlansRequest } from './model/ListExecutionPlansRequest';
import { ListExecutionPlansResponse } from './model/ListExecutionPlansResponse';
import { ListStackEventsRequest } from './model/ListStackEventsRequest';
import { ListStackEventsResponse } from './model/ListStackEventsResponse';
import { ListStackOutputsRequest } from './model/ListStackOutputsRequest';
import { ListStackOutputsResponse } from './model/ListStackOutputsResponse';
import { ListStackResourcesRequest } from './model/ListStackResourcesRequest';
import { ListStackResourcesResponse } from './model/ListStackResourcesResponse';
import { ListStacksRequest } from './model/ListStacksRequest';
import { ListStacksResponse } from './model/ListStacksResponse';
import { ParseTemplateVariablesRequest } from './model/ParseTemplateVariablesRequest';
import { ParseTemplateVariablesRequestBody } from './model/ParseTemplateVariablesRequestBody';
import { ParseTemplateVariablesResponse } from './model/ParseTemplateVariablesResponse';
import { ResourcePriceResponse } from './model/ResourcePriceResponse';
import { Stack } from './model/Stack';
import { StackDescriptionPrimitiveTypeHolder } from './model/StackDescriptionPrimitiveTypeHolder';
import { StackEvent } from './model/StackEvent';
import { StackIdPrimitiveTypeHolder } from './model/StackIdPrimitiveTypeHolder';
import { StackNamePrimitiveTypeHolder } from './model/StackNamePrimitiveTypeHolder';
import { StackOutput } from './model/StackOutput';
import { StackResource } from './model/StackResource';
import { StackStatusMessagePrimitiveTypeHolder } from './model/StackStatusMessagePrimitiveTypeHolder';
import { StackStatusPrimitiveTypeHolder } from './model/StackStatusPrimitiveTypeHolder';
import { TemplateBodyPrimitiveTypeHolder } from './model/TemplateBodyPrimitiveTypeHolder';
import { TemplateURIPrimitiveTypeHolder } from './model/TemplateURIPrimitiveTypeHolder';
import { UpdateStackRequest } from './model/UpdateStackRequest';
import { UpdateStackRequestBody } from './model/UpdateStackRequestBody';
import { UpdateStackResponse } from './model/UpdateStackResponse';
import { VariableResponse } from './model/VariableResponse';
import { VariableValidationResponse } from './model/VariableValidationResponse';
import { VarsBodyPrimitiveTypeHolder } from './model/VarsBodyPrimitiveTypeHolder';
import { VarsStructure } from './model/VarsStructure';
import { VarsStructurePrimitiveTypeHolder } from './model/VarsStructurePrimitiveTypeHolder';
import { VarsURIPrimitiveTypeHolder } from './model/VarsURIPrimitiveTypeHolder';

export class AosClient {
    public static newBuilder(): ClientBuilder<AosClient> {
            return new ClientBuilder<AosClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 此命令用于执行已有的执行计划(execution plan)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 此命令用于执行已有的执行计划(execution plan)
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  获取方式：https://support.huaweicloud.com/api-ticket/ticket_api_20002.html 
     * @param {string} stackName 用户希望操作的资源栈名称
     * @param {string} executionPlanName 执行计划的名字。
     * @param {ApplyExecutionPlanRequestBody} [applyExecutionPlanRequestBody] apply_execution_plan_v1 request body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public applyExecutionPlan(applyExecutionPlanRequest?: ApplyExecutionPlanRequest): Promise<ApplyExecutionPlanResponse> {
        const options = ParamCreater().applyExecutionPlan(applyExecutionPlanRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 此命令用于生成一个执行计划(execution plan)
     * * 如果资源栈删除失败，可在修复当前模板中的错误后调用CreateExecutionPlan生成执行计划。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 此命令用于生成一个执行计划(execution plan)
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  获取方式：https://support.huaweicloud.com/api-ticket/ticket_api_20002.html 
     * @param {string} stackName 用户希望操作的资源栈名称
     * @param {CreateExecutionPlanRequestBody} createExecutionPlanRequestBody create-execution-plan request parameters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createExecutionPlan(createExecutionPlanRequest?: CreateExecutionPlanRequest): Promise<CreateExecutionPlanResponse> {
        const options = ParamCreater().createExecutionPlan(createExecutionPlanRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 此命令用于删除已有的执行计划(execution plan)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 此命令用于删除已有的执行计划(execution plan)
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  获取方式：https://support.huaweicloud.com/api-ticket/ticket_api_20002.html 
     * @param {string} stackName 用户希望操作的资源栈名称
     * @param {string} executionPlanName 执行计划的名字。
     * @param {string} [stackId] 用户希望描述的资源栈的Id。若stack_name和stack_id同时存在，则资源编排服务会检查是否两个匹配，否则返回400
     * @param {string} [executionPlanId] 执行计划ID(uuid)
     * @param {string} [executor] 执行操作者的名字，将用做未来的审计工作。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteExecutionPlan(deleteExecutionPlanRequest?: DeleteExecutionPlanRequest): Promise<void> {
        const options = ParamCreater().deleteExecutionPlan(deleteExecutionPlanRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 描述执行计划当前的状态，返回执行计划的元数据
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 描述执行计划当前的状态，返回执行计划的元数据
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  获取方式：https://support.huaweicloud.com/api-ticket/ticket_api_20002.html 
     * @param {string} stackName 用户希望操作的资源栈名称
     * @param {string} executionPlanName 执行计划的名字。
     * @param {string} [stackId] 用户希望描述的资源栈的Id。若stack_name和stack_id同时存在，则资源编排服务会检查是否两个匹配，否则返回400
     * @param {string} [executionPlanId] 执行计划ID(uuid)
     * @param {string} [executor] 执行操作者的名字，将用做未来的审计工作。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public describeExecutionPlan(describeExecutionPlanRequest?: DescribeExecutionPlanRequest): Promise<DescribeExecutionPlanResponse> {
        const options = ParamCreater().describeExecutionPlan(describeExecutionPlanRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 预估执行计划的价格
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 预估执行计划的价格
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  获取方式：https://support.huaweicloud.com/api-ticket/ticket_api_20002.html 
     * @param {string} stackName 用户希望操作的资源栈名称
     * @param {string} executionPlanName 执行计划的名字。
     * @param {string} [stackId] 用户希望描述的资源栈的Id。若stack_name和stack_id同时存在，则资源编排服务会检查是否两个匹配，否则返回400
     * @param {string} [executionPlanId] 执行计划ID(uuid)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public estimateExecutionPlanPrice(estimateExecutionPlanPriceRequest?: EstimateExecutionPlanPriceRequest): Promise<EstimateExecutionPlanPriceResponse> {
        const options = ParamCreater().estimateExecutionPlanPrice(estimateExecutionPlanPriceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 此接口用于获取执行计划的详细内容
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 此接口用于获取执行计划的详细内容
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  获取方式：https://support.huaweicloud.com/api-ticket/ticket_api_20002.html 
     * @param {string} stackName 用户希望操作的资源栈名称
     * @param {string} executionPlanName 执行计划的名字。
     * @param {string} [stackId] 用户希望描述的资源栈的Id。若stack_name和stack_id同时存在，则资源编排服务会检查是否两个匹配，否则返回400
     * @param {string} [executionPlanId] 执行计划ID(uuid)
     * @param {string} [executor] 执行操作者的名字，将用做未来的审计工作。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getExecutionPlan(getExecutionPlanRequest?: GetExecutionPlanRequest): Promise<GetExecutionPlanResponse> {
        const options = ParamCreater().getExecutionPlan(getExecutionPlanRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列举执行计划
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列举执行计划
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  获取方式：https://support.huaweicloud.com/api-ticket/ticket_api_20002.html 
     * @param {string} stackName 用户希望操作的资源栈名称
     * @param {string} [executor] 执行操作者的名字，将用做未来的审计工作。
     * @param {string} [stackId] 用户希望描述的资源栈的Id。若stack_name和stack_id同时存在，则资源编排服务会检查是否两个匹配，否则返回400
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listExecutionPlans(listExecutionPlansRequest?: ListExecutionPlansRequest): Promise<ListExecutionPlansResponse> {
        const options = ParamCreater().listExecutionPlans(listExecutionPlansRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 如果资源栈开启了自动回滚，在部署失败的时候则会自动回滚。但是自动回滚依然有可能失败，用户可以根据错误信息修复后，调用ContinueRollbackStack触发继续回滚，即重试回滚
     * 
     * * 如果资源栈当前可以回滚，即处于&#x60;ROLLBACK_FAILED&#x60;，则返回202与对应生成的deploymentId，否则将不允许回滚并返回响应的错误码
     * * 继续回滚也有可能会回滚失败。如果失败，用户可以从ListStackEvents获取对应的log，解决后可再次调用ContinueRollbackStack去继续触发回滚
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 继续回滚资源栈
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  获取方式：https://support.huaweicloud.com/api-ticket/ticket_api_20002.html 
     * @param {string} stackName 用户希望操作的资源栈名称
     * @param {ContinueRollbackStackRequestBody} continueRollbackStackRequestBody ContinueRollbackStack API的请求Body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public continueRollbackStack(continueRollbackStackRequest?: ContinueRollbackStackRequest): Promise<ContinueRollbackStackResponse> {
        const options = ParamCreater().continueRollbackStack(continueRollbackStackRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * CreateStack用于生成一个资源栈
     * 
     * * 当请求中不含有模板（template）、参数（vars）等信息，将生成一个无任何资源的空资源栈，返回资源栈ID（stack_id）
     * * 当请求中携带了模板（template）、参数（vars）等信息，则会同时创建并部署资源栈，返回资源栈ID（stack_id）和部署ID（deployment_id）
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建资源栈
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  获取方式：https://support.huaweicloud.com/api-ticket/ticket_api_20002.html 
     * @param {CreateStackRequestBody} createStackRequestBody CreateStack API的请求Body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createStack(createStackRequest?: CreateStackRequest): Promise<CreateStackResponse> {
        const options = ParamCreater().createStack(createStackRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除某个资源栈
     * **请谨慎操作，删除资源栈将会删除与该资源栈相关的所有数据和资源，如：执行计划、资源栈事件、资源栈输出、资源等。**
     * 
     * * 此API会触发删除资源栈，并以最终一致性删除所有数据，用户可以调用GetStackMetadata或ListStacks跟踪资源栈删除情况
     * * 如果资源栈状态处于非终态（状态以&#x60;IN_PROGRESS&#x60;结尾）状态时，则不允许删除。包括但不限于以下状态：
     *   * 正在部署（DEPLOYMENT_IN_PROGRESS）
     *   * 正在删除（DELETION_IN_PROGRESS）
     *   * 正在回滚（ROLLBACK_IN_PROGRESS）
     * * 如果资源栈开启了删除保护，则不允许删除。用户可调用GetStackMetadata，查看返回中的&#x60;enable_deletion_protection&#x60;字段判断删除保护是否开启。用户可通过调用UpdateStack关闭删除保护。
     * * 如果资源栈删除失败，可以根据StackEvents提示信息修复当前模板中的错误后，部署成功后再次删除资源栈。有以下两种方式触发部署：
     *   * 调用CreateExecutionPlan创建执行计划，执行计划创建成功后调用ApplyExecutionPlan部署资源栈。
     *   * 调用DeployStack部署资源栈
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除资源栈
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  获取方式：https://support.huaweicloud.com/api-ticket/ticket_api_20002.html 
     * @param {string} stackName 用户希望操作的资源栈名称
     * @param {string} [stackId] 用户希望描述的资源栈的Id。若stack_name和stack_id同时存在，则资源编排服务会检查是否两个匹配，否则返回400
     * @param {string} [executor] 执行操作者的名字，将用做未来的审计工作。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteStack(deleteStackRequest?: DeleteStackRequest): Promise<void> {
        const options = ParamCreater().deleteStack(deleteStackRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 部署一个已有的资源栈
     * 
     * * 用户可以使用此API更新模板、参数等并触发一个新的部署
     * 
     * * 此API会直接触发部署，如果用户希望先确认部署会发生的时间，请使用执行计划，即使用CreateExecutionPlan以创建执行计划、使用GetExecutionPlan以获取执行计划
     * 
     * * 此API为全量API，即用户每次部署都需要给予所想要使用的template、vars的全量
     * 
     * * 当触发的部署失败时，如果资源栈开启了自动回滚，会触发自动回滚的流程，否则就会停留在部署失败时的状态
     * 
     * * 资源栈状态是DELETION_FAILED时，用户可根据StackEvents信息修复当前模板中的错误后，重新触发部署。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 部署资源栈
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  获取方式：https://support.huaweicloud.com/api-ticket/ticket_api_20002.html 
     * @param {string} stackName 用户希望操作的资源栈名称
     * @param {DeployStackRequestBody} deployStackRequestBody DeployStack API的请求Body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deployStack(deployStackRequest?: DeployStackRequest): Promise<DeployStackResponse> {
        const options = ParamCreater().deployStack(deployStackRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取资源栈的元数据，包括资源栈ID、资源栈名称、资源栈描述、创建时间、更新时间、资源栈状态、委托授权等信息。
     * 
     * 具体信息见GetStackMetadataResponseBody。
     * 
     * 注：
     * 当资源栈状态处于非终态（即以&#x60;IN_PROGRESS&#x60;结尾，详细见下方）状态时，资源栈的元数据信息处于转变阶段，可能为部署前的状态，也可能为部署后的状态。
     * 只有当资源栈状态处于终态（即以&#x60;COMPLETE&#x60;或&#x60;FAILED&#x60;结尾，详细见下方）时，资源栈的元数据信息才是部署后的状态
     * 
     * 非终态状态包括但不限于以下状态：
     *   * 正在部署（DEPLOYMENT_IN_PROGRESS）
     *   * 正在回滚（ROLLBACK_IN_PROGRESS）
     *   * 正在删除（DELETION_IN_PROGRESS）
     * 
     * 终态状态包括但不限于以下状态：
     *   * 生成空资源栈完成（CREATION_COMPLETE）
     *   * 部署失败（DEPLOYMENT_FAILED）
     *   * 部署完成（DEPLOYMENT_COMPLETE）
     *   * 回滚失败（ROLLBACK_FAILED）
     *   * 回滚完成（ROLLBACK_COMPLETE）
     *   * 删除失败（DELETION_FAILED）
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取资源栈的元数据
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  获取方式：https://support.huaweicloud.com/api-ticket/ticket_api_20002.html 
     * @param {string} stackName 用户希望操作的资源栈名称
     * @param {string} [stackId] 用户希望描述的资源栈的Id。若stack_name和stack_id同时存在，则资源编排服务会检查是否两个匹配，否则返回400
     * @param {string} [executor] 执行操作者的名字，将用做未来的审计工作。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getStackMetadata(getStackMetadataRequest?: GetStackMetadataRequest): Promise<GetStackMetadataResponse> {
        const options = ParamCreater().getStackMetadata(getStackMetadataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取资源栈最近的一次部署使用的模板。
     * 
     * 如果获取成功，则以临时重定向形式返回模板下载链接，大多数的客户端会进行自动重定向并下载模板；若未进行自动重定向，请参考HTTP的重定向规则获取模板下载链接，手动下载模板
     * 
     * 如果资源栈当前没有模板，则返回404，并提示模板不存在
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取资源栈模板
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  获取方式：https://support.huaweicloud.com/api-ticket/ticket_api_20002.html 
     * @param {string} stackName 用户希望操作的资源栈名称
     * @param {string} [stackId] 用户希望描述的资源栈的Id。若stack_name和stack_id同时存在，则资源编排服务会检查是否两个匹配，否则返回400
     * @param {string} [executor] 执行操作者的名字，将用做未来的审计工作。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getStackTemplate(getStackTemplateRequest?: GetStackTemplateRequest): Promise<void> {
        const options = ParamCreater().getStackTemplate(getStackTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列举资源栈某一次或全部的部署事件
     * 
     * * 若给予deployment_id，则会将deployment_id作为查询条件，返回对应某一次部署的资源栈事件；若不给予deployment_id，则返回全量的资源栈事件
     * * 若给定的deployment_id对应的部署不存在，则返回404
     * * 可以使用filter作为过滤器，过滤出指定事件类型（event_type）、资源类型（resource_type）、资源名称（resource_name）的资源栈事件
     * * 可以使用field选择数据应返回的属性，属性事件类型（event_type）不可配置，一定会返回，可选择的属性有逝去时间（elapsed_seconds）、事件消息（event_message）、 资源ID键（resource_id_key）、资源ID值（resource_id_value）、资源键（resource_key）、资源类型（resource_type）、资源名称（resource_name）和时间戳（timestamp）
     * * 事件返回将以时间降序排列
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列举资源栈事件
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  获取方式：https://support.huaweicloud.com/api-ticket/ticket_api_20002.html 
     * @param {string} stackName 用户希望操作的资源栈名称
     * @param {string} [stackId] 用户希望描述的资源栈的Id。若stack_name和stack_id同时存在，则资源编排服务会检查是否两个匹配，否则返回400
     * @param {string} [deploymentId] 部署时API返回的id（uuid）
     * @param {string} [executor] 执行操作者的名字，将用做未来的审计工作。
     * @param {string} [filter] 过滤条件  * 与（AND）运算符使用逗号（，）定义 * 或（OR）运算符使用竖线（|）定义，OR运算符优先级高于AND运算符 * 不支持括号 * 过滤运算符仅支持等号（&#x3D;&#x3D;） * 过滤参数名及其值仅支持包含大小写英文、数字和下划线 * 过滤条件中禁止使用分号，若有分号，则此条过滤会被忽略 * 一个过滤参数仅能与一个与条件相关，一个与条件中的多个或条件仅能与一个过滤参数相关 
     * @param {string} [field] 选择的属性名称  * 属性名仅支持包含大小写英文、数字和下划线 * 多个属性名称之间以逗号（，）分隔 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listStackEvents(listStackEventsRequest?: ListStackEventsRequest): Promise<ListStackEventsResponse> {
        const options = ParamCreater().listStackEvents(listStackEventsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列举该资源栈的所有输出
     * 
     * 资源栈输出为用户在模板中定义的 output 语句块在部署结束后所产生的返回信息，用户可在部署结束后，调用此API获取其具体的输出信息
     * 
     * output为HCL官方定义的语法，其返回信息类似于常见编程语言中的返回值，详细定义请参考HCL官方的说明
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列举资源栈输出
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  获取方式：https://support.huaweicloud.com/api-ticket/ticket_api_20002.html 
     * @param {string} stackName 用户希望操作的资源栈名称
     * @param {string} [stackId] 用户希望描述的资源栈的Id。若stack_name和stack_id同时存在，则资源编排服务会检查是否两个匹配，否则返回400
     * @param {string} [executor] 执行操作者的名字，将用做未来的审计工作。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listStackOutputs(listStackOutputsRequest?: ListStackOutputsRequest): Promise<ListStackOutputsResponse> {
        const options = ParamCreater().listStackOutputs(listStackOutputsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列举资源栈中当前管理的所有资源的信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列举资源栈资源
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  获取方式：https://support.huaweicloud.com/api-ticket/ticket_api_20002.html 
     * @param {string} stackName 用户希望操作的资源栈名称
     * @param {string} [stackId] 用户希望描述的资源栈的Id。若stack_name和stack_id同时存在，则资源编排服务会检查是否两个匹配，否则返回400
     * @param {string} [executor] 执行操作者的名字，将用做未来的审计工作。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listStackResources(listStackResourcesRequest?: ListStackResourcesRequest): Promise<ListStackResourcesResponse> {
        const options = ParamCreater().listStackResources(listStackResourcesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ListStacks 列举当前局点下用户所有的资源栈
     * 
     *   * 默认按照生成时间排序，最早生成的在最前
     *   * 注意：目前暂时返回全量资源栈信息，即不支持分页
     *   * 如果没有任何资源栈，则返回空list
     * 
     * ListStacks返回的只有摘要信息（具体摘要信息见ListStacksResponseBody），如果用户需要详细的资源栈元数据请调用GetStackMetadata
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列举资源栈
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  获取方式：https://support.huaweicloud.com/api-ticket/ticket_api_20002.html 
     * @param {string} [executor] 执行操作者的名字，将用做未来的审计工作。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listStacks(listStacksRequest?: ListStacksRequest): Promise<ListStacksResponse> {
        const options = ParamCreater().listStacks(listStacksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新资源栈的“description”、“enable_deletion_protection”、\&quot;enable_auto_rollback\&quot;、\&quot;agencies\&quot;四个属性字段中的一个或多个
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新资源栈
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  获取方式：https://support.huaweicloud.com/api-ticket/ticket_api_20002.html 
     * @param {string} stackName 用户希望操作的资源栈名称
     * @param {UpdateStackRequestBody} updateStackRequestBody 更新资源栈的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateStack(updateStackRequest?: UpdateStackRequest): Promise<void> {
        const options = ParamCreater().updateStack(updateStackRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 此命令用于解析模板参数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 此命令用于解析模板参数
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  获取方式：https://support.huaweicloud.com/api-ticket/ticket_api_20002.html 
     * @param {ParseTemplateVariablesRequestBody} parseTemplateVariablesRequestBody parse-template-variables request parameters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public parseTemplateVariables(parseTemplateVariablesRequest?: ParseTemplateVariablesRequest): Promise<ParseTemplateVariablesResponse> {
        const options = ParamCreater().parseTemplateVariables(parseTemplateVariablesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 此命令用于执行已有的执行计划(execution plan)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        applyExecutionPlan(applyExecutionPlanRequest?: ApplyExecutionPlanRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/stacks/{stack_name}/execution-plans/{execution_plan_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let clientRequestId;
            
            let projectId;
            
            let stackName;
            
            let executionPlanName;

            if (applyExecutionPlanRequest !== null && applyExecutionPlanRequest !== undefined) {
                if (applyExecutionPlanRequest instanceof ApplyExecutionPlanRequest) {
                    clientRequestId = applyExecutionPlanRequest.clientRequestId;
                    projectId = applyExecutionPlanRequest.projectId;
                    stackName = applyExecutionPlanRequest.stackName;
                    executionPlanName = applyExecutionPlanRequest.executionPlanName;
                    body = applyExecutionPlanRequest.body
                } else {
                    clientRequestId = applyExecutionPlanRequest['Client-Request-Id'];
                    projectId = applyExecutionPlanRequest['project_id'];
                    stackName = applyExecutionPlanRequest['stack_name'];
                    executionPlanName = applyExecutionPlanRequest['execution_plan_name'];
                    body = applyExecutionPlanRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling applyExecutionPlan.');
            }
            if (stackName === null || stackName === undefined) {
            throw new RequiredError('stackName','Required parameter stackName was null or undefined when calling applyExecutionPlan.');
            }
            if (executionPlanName === null || executionPlanName === undefined) {
            throw new RequiredError('executionPlanName','Required parameter executionPlanName was null or undefined when calling applyExecutionPlan.');
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'stack_name': stackName,'execution_plan_name': executionPlanName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 此命令用于生成一个执行计划(execution plan)
         * * 如果资源栈删除失败，可在修复当前模板中的错误后调用CreateExecutionPlan生成执行计划。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createExecutionPlan(createExecutionPlanRequest?: CreateExecutionPlanRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/stacks/{stack_name}/execution-plans",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let clientRequestId;
            
            let projectId;
            
            let stackName;

            if (createExecutionPlanRequest !== null && createExecutionPlanRequest !== undefined) {
                if (createExecutionPlanRequest instanceof CreateExecutionPlanRequest) {
                    clientRequestId = createExecutionPlanRequest.clientRequestId;
                    projectId = createExecutionPlanRequest.projectId;
                    stackName = createExecutionPlanRequest.stackName;
                    body = createExecutionPlanRequest.body
                } else {
                    clientRequestId = createExecutionPlanRequest['Client-Request-Id'];
                    projectId = createExecutionPlanRequest['project_id'];
                    stackName = createExecutionPlanRequest['stack_name'];
                    body = createExecutionPlanRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling createExecutionPlan.');
            }
            if (stackName === null || stackName === undefined) {
            throw new RequiredError('stackName','Required parameter stackName was null or undefined when calling createExecutionPlan.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'stack_name': stackName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 此命令用于删除已有的执行计划(execution plan)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteExecutionPlan(deleteExecutionPlanRequest?: DeleteExecutionPlanRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/stacks/{stack_name}/execution-plans/{execution_plan_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let stackName;
            
            let executionPlanName;
            
            let stackId;
            
            let executionPlanId;
            
            let executor;

            if (deleteExecutionPlanRequest !== null && deleteExecutionPlanRequest !== undefined) {
                if (deleteExecutionPlanRequest instanceof DeleteExecutionPlanRequest) {
                    clientRequestId = deleteExecutionPlanRequest.clientRequestId;
                    projectId = deleteExecutionPlanRequest.projectId;
                    stackName = deleteExecutionPlanRequest.stackName;
                    executionPlanName = deleteExecutionPlanRequest.executionPlanName;
                    stackId = deleteExecutionPlanRequest.stackId;
                    executionPlanId = deleteExecutionPlanRequest.executionPlanId;
                    executor = deleteExecutionPlanRequest.executor;
                } else {
                    clientRequestId = deleteExecutionPlanRequest['Client-Request-Id'];
                    projectId = deleteExecutionPlanRequest['project_id'];
                    stackName = deleteExecutionPlanRequest['stack_name'];
                    executionPlanName = deleteExecutionPlanRequest['execution_plan_name'];
                    stackId = deleteExecutionPlanRequest['stack_id'];
                    executionPlanId = deleteExecutionPlanRequest['execution_plan_id'];
                    executor = deleteExecutionPlanRequest['executor'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteExecutionPlan.');
            }
            if (stackName === null || stackName === undefined) {
            throw new RequiredError('stackName','Required parameter stackName was null or undefined when calling deleteExecutionPlan.');
            }
            if (executionPlanName === null || executionPlanName === undefined) {
            throw new RequiredError('executionPlanName','Required parameter executionPlanName was null or undefined when calling deleteExecutionPlan.');
            }
            if (stackId !== null && stackId !== undefined) {
                localVarQueryParameter['stack_id'] = stackId;
            }
            if (executionPlanId !== null && executionPlanId !== undefined) {
                localVarQueryParameter['execution_plan_id'] = executionPlanId;
            }
            if (executor !== null && executor !== undefined) {
                localVarQueryParameter['executor'] = executor;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'stack_name': stackName,'execution_plan_name': executionPlanName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 描述执行计划当前的状态，返回执行计划的元数据
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        describeExecutionPlan(describeExecutionPlanRequest?: DescribeExecutionPlanRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/stacks/{stack_name}/execution-plans/{execution_plan_name}/metadata",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let stackName;
            
            let executionPlanName;
            
            let stackId;
            
            let executionPlanId;
            
            let executor;

            if (describeExecutionPlanRequest !== null && describeExecutionPlanRequest !== undefined) {
                if (describeExecutionPlanRequest instanceof DescribeExecutionPlanRequest) {
                    clientRequestId = describeExecutionPlanRequest.clientRequestId;
                    projectId = describeExecutionPlanRequest.projectId;
                    stackName = describeExecutionPlanRequest.stackName;
                    executionPlanName = describeExecutionPlanRequest.executionPlanName;
                    stackId = describeExecutionPlanRequest.stackId;
                    executionPlanId = describeExecutionPlanRequest.executionPlanId;
                    executor = describeExecutionPlanRequest.executor;
                } else {
                    clientRequestId = describeExecutionPlanRequest['Client-Request-Id'];
                    projectId = describeExecutionPlanRequest['project_id'];
                    stackName = describeExecutionPlanRequest['stack_name'];
                    executionPlanName = describeExecutionPlanRequest['execution_plan_name'];
                    stackId = describeExecutionPlanRequest['stack_id'];
                    executionPlanId = describeExecutionPlanRequest['execution_plan_id'];
                    executor = describeExecutionPlanRequest['executor'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling describeExecutionPlan.');
            }
            if (stackName === null || stackName === undefined) {
            throw new RequiredError('stackName','Required parameter stackName was null or undefined when calling describeExecutionPlan.');
            }
            if (executionPlanName === null || executionPlanName === undefined) {
            throw new RequiredError('executionPlanName','Required parameter executionPlanName was null or undefined when calling describeExecutionPlan.');
            }
            if (stackId !== null && stackId !== undefined) {
                localVarQueryParameter['stack_id'] = stackId;
            }
            if (executionPlanId !== null && executionPlanId !== undefined) {
                localVarQueryParameter['execution_plan_id'] = executionPlanId;
            }
            if (executor !== null && executor !== undefined) {
                localVarQueryParameter['executor'] = executor;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'stack_name': stackName,'execution_plan_name': executionPlanName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 预估执行计划的价格
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        estimateExecutionPlanPrice(estimateExecutionPlanPriceRequest?: EstimateExecutionPlanPriceRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/stacks/{stack_name}/execution-plans/{execution_plan_name}/prices",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let stackName;
            
            let executionPlanName;
            
            let stackId;
            
            let executionPlanId;

            if (estimateExecutionPlanPriceRequest !== null && estimateExecutionPlanPriceRequest !== undefined) {
                if (estimateExecutionPlanPriceRequest instanceof EstimateExecutionPlanPriceRequest) {
                    clientRequestId = estimateExecutionPlanPriceRequest.clientRequestId;
                    projectId = estimateExecutionPlanPriceRequest.projectId;
                    stackName = estimateExecutionPlanPriceRequest.stackName;
                    executionPlanName = estimateExecutionPlanPriceRequest.executionPlanName;
                    stackId = estimateExecutionPlanPriceRequest.stackId;
                    executionPlanId = estimateExecutionPlanPriceRequest.executionPlanId;
                } else {
                    clientRequestId = estimateExecutionPlanPriceRequest['Client-Request-Id'];
                    projectId = estimateExecutionPlanPriceRequest['project_id'];
                    stackName = estimateExecutionPlanPriceRequest['stack_name'];
                    executionPlanName = estimateExecutionPlanPriceRequest['execution_plan_name'];
                    stackId = estimateExecutionPlanPriceRequest['stack_id'];
                    executionPlanId = estimateExecutionPlanPriceRequest['execution_plan_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling estimateExecutionPlanPrice.');
            }
            if (stackName === null || stackName === undefined) {
            throw new RequiredError('stackName','Required parameter stackName was null or undefined when calling estimateExecutionPlanPrice.');
            }
            if (executionPlanName === null || executionPlanName === undefined) {
            throw new RequiredError('executionPlanName','Required parameter executionPlanName was null or undefined when calling estimateExecutionPlanPrice.');
            }
            if (stackId !== null && stackId !== undefined) {
                localVarQueryParameter['stack_id'] = stackId;
            }
            if (executionPlanId !== null && executionPlanId !== undefined) {
                localVarQueryParameter['execution_plan_id'] = executionPlanId;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'stack_name': stackName,'execution_plan_name': executionPlanName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 此接口用于获取执行计划的详细内容
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getExecutionPlan(getExecutionPlanRequest?: GetExecutionPlanRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/stacks/{stack_name}/execution-plans/{execution_plan_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let stackName;
            
            let executionPlanName;
            
            let stackId;
            
            let executionPlanId;
            
            let executor;

            if (getExecutionPlanRequest !== null && getExecutionPlanRequest !== undefined) {
                if (getExecutionPlanRequest instanceof GetExecutionPlanRequest) {
                    clientRequestId = getExecutionPlanRequest.clientRequestId;
                    projectId = getExecutionPlanRequest.projectId;
                    stackName = getExecutionPlanRequest.stackName;
                    executionPlanName = getExecutionPlanRequest.executionPlanName;
                    stackId = getExecutionPlanRequest.stackId;
                    executionPlanId = getExecutionPlanRequest.executionPlanId;
                    executor = getExecutionPlanRequest.executor;
                } else {
                    clientRequestId = getExecutionPlanRequest['Client-Request-Id'];
                    projectId = getExecutionPlanRequest['project_id'];
                    stackName = getExecutionPlanRequest['stack_name'];
                    executionPlanName = getExecutionPlanRequest['execution_plan_name'];
                    stackId = getExecutionPlanRequest['stack_id'];
                    executionPlanId = getExecutionPlanRequest['execution_plan_id'];
                    executor = getExecutionPlanRequest['executor'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling getExecutionPlan.');
            }
            if (stackName === null || stackName === undefined) {
            throw new RequiredError('stackName','Required parameter stackName was null or undefined when calling getExecutionPlan.');
            }
            if (executionPlanName === null || executionPlanName === undefined) {
            throw new RequiredError('executionPlanName','Required parameter executionPlanName was null or undefined when calling getExecutionPlan.');
            }
            if (stackId !== null && stackId !== undefined) {
                localVarQueryParameter['stack_id'] = stackId;
            }
            if (executionPlanId !== null && executionPlanId !== undefined) {
                localVarQueryParameter['execution_plan_id'] = executionPlanId;
            }
            if (executor !== null && executor !== undefined) {
                localVarQueryParameter['executor'] = executor;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'stack_name': stackName,'execution_plan_name': executionPlanName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列举执行计划
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listExecutionPlans(listExecutionPlansRequest?: ListExecutionPlansRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/stacks/{stack_name}/execution-plans",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let stackName;
            
            let executor;
            
            let stackId;

            if (listExecutionPlansRequest !== null && listExecutionPlansRequest !== undefined) {
                if (listExecutionPlansRequest instanceof ListExecutionPlansRequest) {
                    clientRequestId = listExecutionPlansRequest.clientRequestId;
                    projectId = listExecutionPlansRequest.projectId;
                    stackName = listExecutionPlansRequest.stackName;
                    executor = listExecutionPlansRequest.executor;
                    stackId = listExecutionPlansRequest.stackId;
                } else {
                    clientRequestId = listExecutionPlansRequest['Client-Request-Id'];
                    projectId = listExecutionPlansRequest['project_id'];
                    stackName = listExecutionPlansRequest['stack_name'];
                    executor = listExecutionPlansRequest['executor'];
                    stackId = listExecutionPlansRequest['stack_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listExecutionPlans.');
            }
            if (stackName === null || stackName === undefined) {
            throw new RequiredError('stackName','Required parameter stackName was null or undefined when calling listExecutionPlans.');
            }
            if (executor !== null && executor !== undefined) {
                localVarQueryParameter['executor'] = executor;
            }
            if (stackId !== null && stackId !== undefined) {
                localVarQueryParameter['stack_id'] = stackId;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'stack_name': stackName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 如果资源栈开启了自动回滚，在部署失败的时候则会自动回滚。但是自动回滚依然有可能失败，用户可以根据错误信息修复后，调用ContinueRollbackStack触发继续回滚，即重试回滚
         * 
         * * 如果资源栈当前可以回滚，即处于&#x60;ROLLBACK_FAILED&#x60;，则返回202与对应生成的deploymentId，否则将不允许回滚并返回响应的错误码
         * * 继续回滚也有可能会回滚失败。如果失败，用户可以从ListStackEvents获取对应的log，解决后可再次调用ContinueRollbackStack去继续触发回滚
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        continueRollbackStack(continueRollbackStackRequest?: ContinueRollbackStackRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/stacks/{stack_name}/rollbacks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let clientRequestId;
            
            let projectId;
            
            let stackName;

            if (continueRollbackStackRequest !== null && continueRollbackStackRequest !== undefined) {
                if (continueRollbackStackRequest instanceof ContinueRollbackStackRequest) {
                    clientRequestId = continueRollbackStackRequest.clientRequestId;
                    projectId = continueRollbackStackRequest.projectId;
                    stackName = continueRollbackStackRequest.stackName;
                    body = continueRollbackStackRequest.body
                } else {
                    clientRequestId = continueRollbackStackRequest['Client-Request-Id'];
                    projectId = continueRollbackStackRequest['project_id'];
                    stackName = continueRollbackStackRequest['stack_name'];
                    body = continueRollbackStackRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling continueRollbackStack.');
            }
            if (stackName === null || stackName === undefined) {
            throw new RequiredError('stackName','Required parameter stackName was null or undefined when calling continueRollbackStack.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'stack_name': stackName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * CreateStack用于生成一个资源栈
         * 
         * * 当请求中不含有模板（template）、参数（vars）等信息，将生成一个无任何资源的空资源栈，返回资源栈ID（stack_id）
         * * 当请求中携带了模板（template）、参数（vars）等信息，则会同时创建并部署资源栈，返回资源栈ID（stack_id）和部署ID（deployment_id）
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createStack(createStackRequest?: CreateStackRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/stacks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let clientRequestId;
            
            let projectId;

            if (createStackRequest !== null && createStackRequest !== undefined) {
                if (createStackRequest instanceof CreateStackRequest) {
                    clientRequestId = createStackRequest.clientRequestId;
                    projectId = createStackRequest.projectId;
                    body = createStackRequest.body
                } else {
                    clientRequestId = createStackRequest['Client-Request-Id'];
                    projectId = createStackRequest['project_id'];
                    body = createStackRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling createStack.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除某个资源栈
         * **请谨慎操作，删除资源栈将会删除与该资源栈相关的所有数据和资源，如：执行计划、资源栈事件、资源栈输出、资源等。**
         * 
         * * 此API会触发删除资源栈，并以最终一致性删除所有数据，用户可以调用GetStackMetadata或ListStacks跟踪资源栈删除情况
         * * 如果资源栈状态处于非终态（状态以&#x60;IN_PROGRESS&#x60;结尾）状态时，则不允许删除。包括但不限于以下状态：
         *   * 正在部署（DEPLOYMENT_IN_PROGRESS）
         *   * 正在删除（DELETION_IN_PROGRESS）
         *   * 正在回滚（ROLLBACK_IN_PROGRESS）
         * * 如果资源栈开启了删除保护，则不允许删除。用户可调用GetStackMetadata，查看返回中的&#x60;enable_deletion_protection&#x60;字段判断删除保护是否开启。用户可通过调用UpdateStack关闭删除保护。
         * * 如果资源栈删除失败，可以根据StackEvents提示信息修复当前模板中的错误后，部署成功后再次删除资源栈。有以下两种方式触发部署：
         *   * 调用CreateExecutionPlan创建执行计划，执行计划创建成功后调用ApplyExecutionPlan部署资源栈。
         *   * 调用DeployStack部署资源栈
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteStack(deleteStackRequest?: DeleteStackRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/stacks/{stack_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let stackName;
            
            let stackId;
            
            let executor;

            if (deleteStackRequest !== null && deleteStackRequest !== undefined) {
                if (deleteStackRequest instanceof DeleteStackRequest) {
                    clientRequestId = deleteStackRequest.clientRequestId;
                    projectId = deleteStackRequest.projectId;
                    stackName = deleteStackRequest.stackName;
                    stackId = deleteStackRequest.stackId;
                    executor = deleteStackRequest.executor;
                } else {
                    clientRequestId = deleteStackRequest['Client-Request-Id'];
                    projectId = deleteStackRequest['project_id'];
                    stackName = deleteStackRequest['stack_name'];
                    stackId = deleteStackRequest['stack_id'];
                    executor = deleteStackRequest['executor'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteStack.');
            }
            if (stackName === null || stackName === undefined) {
            throw new RequiredError('stackName','Required parameter stackName was null or undefined when calling deleteStack.');
            }
            if (stackId !== null && stackId !== undefined) {
                localVarQueryParameter['stack_id'] = stackId;
            }
            if (executor !== null && executor !== undefined) {
                localVarQueryParameter['executor'] = executor;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'stack_name': stackName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 部署一个已有的资源栈
         * 
         * * 用户可以使用此API更新模板、参数等并触发一个新的部署
         * 
         * * 此API会直接触发部署，如果用户希望先确认部署会发生的时间，请使用执行计划，即使用CreateExecutionPlan以创建执行计划、使用GetExecutionPlan以获取执行计划
         * 
         * * 此API为全量API，即用户每次部署都需要给予所想要使用的template、vars的全量
         * 
         * * 当触发的部署失败时，如果资源栈开启了自动回滚，会触发自动回滚的流程，否则就会停留在部署失败时的状态
         * 
         * * 资源栈状态是DELETION_FAILED时，用户可根据StackEvents信息修复当前模板中的错误后，重新触发部署。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deployStack(deployStackRequest?: DeployStackRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/stacks/{stack_name}/deployments",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let clientRequestId;
            
            let projectId;
            
            let stackName;

            if (deployStackRequest !== null && deployStackRequest !== undefined) {
                if (deployStackRequest instanceof DeployStackRequest) {
                    clientRequestId = deployStackRequest.clientRequestId;
                    projectId = deployStackRequest.projectId;
                    stackName = deployStackRequest.stackName;
                    body = deployStackRequest.body
                } else {
                    clientRequestId = deployStackRequest['Client-Request-Id'];
                    projectId = deployStackRequest['project_id'];
                    stackName = deployStackRequest['stack_name'];
                    body = deployStackRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deployStack.');
            }
            if (stackName === null || stackName === undefined) {
            throw new RequiredError('stackName','Required parameter stackName was null or undefined when calling deployStack.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'stack_name': stackName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取资源栈的元数据，包括资源栈ID、资源栈名称、资源栈描述、创建时间、更新时间、资源栈状态、委托授权等信息。
         * 
         * 具体信息见GetStackMetadataResponseBody。
         * 
         * 注：
         * 当资源栈状态处于非终态（即以&#x60;IN_PROGRESS&#x60;结尾，详细见下方）状态时，资源栈的元数据信息处于转变阶段，可能为部署前的状态，也可能为部署后的状态。
         * 只有当资源栈状态处于终态（即以&#x60;COMPLETE&#x60;或&#x60;FAILED&#x60;结尾，详细见下方）时，资源栈的元数据信息才是部署后的状态
         * 
         * 非终态状态包括但不限于以下状态：
         *   * 正在部署（DEPLOYMENT_IN_PROGRESS）
         *   * 正在回滚（ROLLBACK_IN_PROGRESS）
         *   * 正在删除（DELETION_IN_PROGRESS）
         * 
         * 终态状态包括但不限于以下状态：
         *   * 生成空资源栈完成（CREATION_COMPLETE）
         *   * 部署失败（DEPLOYMENT_FAILED）
         *   * 部署完成（DEPLOYMENT_COMPLETE）
         *   * 回滚失败（ROLLBACK_FAILED）
         *   * 回滚完成（ROLLBACK_COMPLETE）
         *   * 删除失败（DELETION_FAILED）
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getStackMetadata(getStackMetadataRequest?: GetStackMetadataRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/stacks/{stack_name}/metadata",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let stackName;
            
            let stackId;
            
            let executor;

            if (getStackMetadataRequest !== null && getStackMetadataRequest !== undefined) {
                if (getStackMetadataRequest instanceof GetStackMetadataRequest) {
                    clientRequestId = getStackMetadataRequest.clientRequestId;
                    projectId = getStackMetadataRequest.projectId;
                    stackName = getStackMetadataRequest.stackName;
                    stackId = getStackMetadataRequest.stackId;
                    executor = getStackMetadataRequest.executor;
                } else {
                    clientRequestId = getStackMetadataRequest['Client-Request-Id'];
                    projectId = getStackMetadataRequest['project_id'];
                    stackName = getStackMetadataRequest['stack_name'];
                    stackId = getStackMetadataRequest['stack_id'];
                    executor = getStackMetadataRequest['executor'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling getStackMetadata.');
            }
            if (stackName === null || stackName === undefined) {
            throw new RequiredError('stackName','Required parameter stackName was null or undefined when calling getStackMetadata.');
            }
            if (stackId !== null && stackId !== undefined) {
                localVarQueryParameter['stack_id'] = stackId;
            }
            if (executor !== null && executor !== undefined) {
                localVarQueryParameter['executor'] = executor;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'stack_name': stackName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取资源栈最近的一次部署使用的模板。
         * 
         * 如果获取成功，则以临时重定向形式返回模板下载链接，大多数的客户端会进行自动重定向并下载模板；若未进行自动重定向，请参考HTTP的重定向规则获取模板下载链接，手动下载模板
         * 
         * 如果资源栈当前没有模板，则返回404，并提示模板不存在
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getStackTemplate(getStackTemplateRequest?: GetStackTemplateRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/stacks/{stack_name}/templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let stackName;
            
            let stackId;
            
            let executor;

            if (getStackTemplateRequest !== null && getStackTemplateRequest !== undefined) {
                if (getStackTemplateRequest instanceof GetStackTemplateRequest) {
                    clientRequestId = getStackTemplateRequest.clientRequestId;
                    projectId = getStackTemplateRequest.projectId;
                    stackName = getStackTemplateRequest.stackName;
                    stackId = getStackTemplateRequest.stackId;
                    executor = getStackTemplateRequest.executor;
                } else {
                    clientRequestId = getStackTemplateRequest['Client-Request-Id'];
                    projectId = getStackTemplateRequest['project_id'];
                    stackName = getStackTemplateRequest['stack_name'];
                    stackId = getStackTemplateRequest['stack_id'];
                    executor = getStackTemplateRequest['executor'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling getStackTemplate.');
            }
            if (stackName === null || stackName === undefined) {
            throw new RequiredError('stackName','Required parameter stackName was null or undefined when calling getStackTemplate.');
            }
            if (stackId !== null && stackId !== undefined) {
                localVarQueryParameter['stack_id'] = stackId;
            }
            if (executor !== null && executor !== undefined) {
                localVarQueryParameter['executor'] = executor;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'stack_name': stackName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列举资源栈某一次或全部的部署事件
         * 
         * * 若给予deployment_id，则会将deployment_id作为查询条件，返回对应某一次部署的资源栈事件；若不给予deployment_id，则返回全量的资源栈事件
         * * 若给定的deployment_id对应的部署不存在，则返回404
         * * 可以使用filter作为过滤器，过滤出指定事件类型（event_type）、资源类型（resource_type）、资源名称（resource_name）的资源栈事件
         * * 可以使用field选择数据应返回的属性，属性事件类型（event_type）不可配置，一定会返回，可选择的属性有逝去时间（elapsed_seconds）、事件消息（event_message）、 资源ID键（resource_id_key）、资源ID值（resource_id_value）、资源键（resource_key）、资源类型（resource_type）、资源名称（resource_name）和时间戳（timestamp）
         * * 事件返回将以时间降序排列
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listStackEvents(listStackEventsRequest?: ListStackEventsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/stacks/{stack_name}/events",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let stackName;
            
            let stackId;
            
            let deploymentId;
            
            let executor;
            
            let filter;
            
            let field;

            if (listStackEventsRequest !== null && listStackEventsRequest !== undefined) {
                if (listStackEventsRequest instanceof ListStackEventsRequest) {
                    clientRequestId = listStackEventsRequest.clientRequestId;
                    projectId = listStackEventsRequest.projectId;
                    stackName = listStackEventsRequest.stackName;
                    stackId = listStackEventsRequest.stackId;
                    deploymentId = listStackEventsRequest.deploymentId;
                    executor = listStackEventsRequest.executor;
                    filter = listStackEventsRequest.filter;
                    field = listStackEventsRequest.field;
                } else {
                    clientRequestId = listStackEventsRequest['Client-Request-Id'];
                    projectId = listStackEventsRequest['project_id'];
                    stackName = listStackEventsRequest['stack_name'];
                    stackId = listStackEventsRequest['stack_id'];
                    deploymentId = listStackEventsRequest['deployment_id'];
                    executor = listStackEventsRequest['executor'];
                    filter = listStackEventsRequest['filter'];
                    field = listStackEventsRequest['field'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listStackEvents.');
            }
            if (stackName === null || stackName === undefined) {
            throw new RequiredError('stackName','Required parameter stackName was null or undefined when calling listStackEvents.');
            }
            if (stackId !== null && stackId !== undefined) {
                localVarQueryParameter['stack_id'] = stackId;
            }
            if (deploymentId !== null && deploymentId !== undefined) {
                localVarQueryParameter['deployment_id'] = deploymentId;
            }
            if (executor !== null && executor !== undefined) {
                localVarQueryParameter['executor'] = executor;
            }
            if (filter !== null && filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }
            if (field !== null && field !== undefined) {
                localVarQueryParameter['field'] = field;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'stack_name': stackName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列举该资源栈的所有输出
         * 
         * 资源栈输出为用户在模板中定义的 output 语句块在部署结束后所产生的返回信息，用户可在部署结束后，调用此API获取其具体的输出信息
         * 
         * output为HCL官方定义的语法，其返回信息类似于常见编程语言中的返回值，详细定义请参考HCL官方的说明
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listStackOutputs(listStackOutputsRequest?: ListStackOutputsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/stacks/{stack_name}/outputs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let stackName;
            
            let stackId;
            
            let executor;

            if (listStackOutputsRequest !== null && listStackOutputsRequest !== undefined) {
                if (listStackOutputsRequest instanceof ListStackOutputsRequest) {
                    clientRequestId = listStackOutputsRequest.clientRequestId;
                    projectId = listStackOutputsRequest.projectId;
                    stackName = listStackOutputsRequest.stackName;
                    stackId = listStackOutputsRequest.stackId;
                    executor = listStackOutputsRequest.executor;
                } else {
                    clientRequestId = listStackOutputsRequest['Client-Request-Id'];
                    projectId = listStackOutputsRequest['project_id'];
                    stackName = listStackOutputsRequest['stack_name'];
                    stackId = listStackOutputsRequest['stack_id'];
                    executor = listStackOutputsRequest['executor'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listStackOutputs.');
            }
            if (stackName === null || stackName === undefined) {
            throw new RequiredError('stackName','Required parameter stackName was null or undefined when calling listStackOutputs.');
            }
            if (stackId !== null && stackId !== undefined) {
                localVarQueryParameter['stack_id'] = stackId;
            }
            if (executor !== null && executor !== undefined) {
                localVarQueryParameter['executor'] = executor;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'stack_name': stackName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列举资源栈中当前管理的所有资源的信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listStackResources(listStackResourcesRequest?: ListStackResourcesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/stacks/{stack_name}/resources",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let stackName;
            
            let stackId;
            
            let executor;

            if (listStackResourcesRequest !== null && listStackResourcesRequest !== undefined) {
                if (listStackResourcesRequest instanceof ListStackResourcesRequest) {
                    clientRequestId = listStackResourcesRequest.clientRequestId;
                    projectId = listStackResourcesRequest.projectId;
                    stackName = listStackResourcesRequest.stackName;
                    stackId = listStackResourcesRequest.stackId;
                    executor = listStackResourcesRequest.executor;
                } else {
                    clientRequestId = listStackResourcesRequest['Client-Request-Id'];
                    projectId = listStackResourcesRequest['project_id'];
                    stackName = listStackResourcesRequest['stack_name'];
                    stackId = listStackResourcesRequest['stack_id'];
                    executor = listStackResourcesRequest['executor'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listStackResources.');
            }
            if (stackName === null || stackName === undefined) {
            throw new RequiredError('stackName','Required parameter stackName was null or undefined when calling listStackResources.');
            }
            if (stackId !== null && stackId !== undefined) {
                localVarQueryParameter['stack_id'] = stackId;
            }
            if (executor !== null && executor !== undefined) {
                localVarQueryParameter['executor'] = executor;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'stack_name': stackName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ListStacks 列举当前局点下用户所有的资源栈
         * 
         *   * 默认按照生成时间排序，最早生成的在最前
         *   * 注意：目前暂时返回全量资源栈信息，即不支持分页
         *   * 如果没有任何资源栈，则返回空list
         * 
         * ListStacks返回的只有摘要信息（具体摘要信息见ListStacksResponseBody），如果用户需要详细的资源栈元数据请调用GetStackMetadata
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listStacks(listStacksRequest?: ListStacksRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/stacks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let executor;

            if (listStacksRequest !== null && listStacksRequest !== undefined) {
                if (listStacksRequest instanceof ListStacksRequest) {
                    clientRequestId = listStacksRequest.clientRequestId;
                    projectId = listStacksRequest.projectId;
                    executor = listStacksRequest.executor;
                } else {
                    clientRequestId = listStacksRequest['Client-Request-Id'];
                    projectId = listStacksRequest['project_id'];
                    executor = listStacksRequest['executor'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listStacks.');
            }
            if (executor !== null && executor !== undefined) {
                localVarQueryParameter['executor'] = executor;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新资源栈的“description”、“enable_deletion_protection”、\&quot;enable_auto_rollback\&quot;、\&quot;agencies\&quot;四个属性字段中的一个或多个
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateStack(updateStackRequest?: UpdateStackRequest) {
            const options = {
                method: "PATCH",
                url: "/v1/{project_id}/stacks/{stack_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let clientRequestId;
            
            let projectId;
            
            let stackName;

            if (updateStackRequest !== null && updateStackRequest !== undefined) {
                if (updateStackRequest instanceof UpdateStackRequest) {
                    clientRequestId = updateStackRequest.clientRequestId;
                    projectId = updateStackRequest.projectId;
                    stackName = updateStackRequest.stackName;
                    body = updateStackRequest.body
                } else {
                    clientRequestId = updateStackRequest['Client-Request-Id'];
                    projectId = updateStackRequest['project_id'];
                    stackName = updateStackRequest['stack_name'];
                    body = updateStackRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling updateStack.');
            }
            if (stackName === null || stackName === undefined) {
            throw new RequiredError('stackName','Required parameter stackName was null or undefined when calling updateStack.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'stack_name': stackName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 此命令用于解析模板参数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        parseTemplateVariables(parseTemplateVariablesRequest?: ParseTemplateVariablesRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/template-analyses/variables",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let clientRequestId;
            
            let projectId;

            if (parseTemplateVariablesRequest !== null && parseTemplateVariablesRequest !== undefined) {
                if (parseTemplateVariablesRequest instanceof ParseTemplateVariablesRequest) {
                    clientRequestId = parseTemplateVariablesRequest.clientRequestId;
                    projectId = parseTemplateVariablesRequest.projectId;
                    body = parseTemplateVariablesRequest.body
                } else {
                    clientRequestId = parseTemplateVariablesRequest['Client-Request-Id'];
                    projectId = parseTemplateVariablesRequest['project_id'];
                    body = parseTemplateVariablesRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling parseTemplateVariables.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): AosClient {
    return new AosClient(client);
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