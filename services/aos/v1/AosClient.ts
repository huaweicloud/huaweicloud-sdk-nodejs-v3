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
import { DeployStackRequest } from './model/DeployStackRequest';
import { DeployStackRequestBody } from './model/DeployStackRequestBody';
import { DeployStackResponse } from './model/DeployStackResponse';
import { EnableAutoRollbackPrimitiveTypeHolder } from './model/EnableAutoRollbackPrimitiveTypeHolder';
import { EnableDeletionProtectionPrimitiveTypeHolder } from './model/EnableDeletionProtectionPrimitiveTypeHolder';
import { EncryptionStructure } from './model/EncryptionStructure';
import { EstimateExecutionPlanPriceRequest } from './model/EstimateExecutionPlanPriceRequest';
import { EstimateExecutionPlanPriceResponse } from './model/EstimateExecutionPlanPriceResponse';
import { ExecutionPlan } from './model/ExecutionPlan';
import { ExecutorPrimitiveTypeHolder } from './model/ExecutorPrimitiveTypeHolder';
import { GetStackTemplateRequest } from './model/GetStackTemplateRequest';
import { GetStackTemplateResponse } from './model/GetStackTemplateResponse';
import { ItemsResponse } from './model/ItemsResponse';
import { KmsStructure } from './model/KmsStructure';
import { ListExecutionPlansRequest } from './model/ListExecutionPlansRequest';
import { ListExecutionPlansResponse } from './model/ListExecutionPlansResponse';
import { ListStackOutputsRequest } from './model/ListStackOutputsRequest';
import { ListStackOutputsResponse } from './model/ListStackOutputsResponse';
import { ListStacksRequest } from './model/ListStacksRequest';
import { ListStacksResponse } from './model/ListStacksResponse';
import { ParseTemplateVariablesRequest } from './model/ParseTemplateVariablesRequest';
import { ParseTemplateVariablesRequestBody } from './model/ParseTemplateVariablesRequestBody';
import { ParseTemplateVariablesResponse } from './model/ParseTemplateVariablesResponse';
import { ResourcePriceResponse } from './model/ResourcePriceResponse';
import { Stack } from './model/Stack';
import { StackDescriptionPrimitiveTypeHolder } from './model/StackDescriptionPrimitiveTypeHolder';
import { StackIdPrimitiveTypeHolder } from './model/StackIdPrimitiveTypeHolder';
import { StackNamePrimitiveTypeHolder } from './model/StackNamePrimitiveTypeHolder';
import { StackOutput } from './model/StackOutput';
import { StackStatusPrimitiveTypeHolder } from './model/StackStatusPrimitiveTypeHolder';
import { TemplateBodyPrimitiveTypeHolder } from './model/TemplateBodyPrimitiveTypeHolder';
import { TemplateURIPrimitiveTypeHolder } from './model/TemplateURIPrimitiveTypeHolder';
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
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 此命令用于执行已有的执行计划(execution plan)
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  获取方式：https://support.huaweicloud.com/api-ticket/ticket_api_20002.html 
     * @param {string} stackName 用户希望操作的资源栈名
     * @param {string} executionPlanName 执行计划的名字。如果未指定，则使用execution_plan_id作为execution_plan_name。
     * @param {ApplyExecutionPlanRequestBody} applyExecutionPlanRequestBody apply_execution_plan_v1 request body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public applyExecutionPlan(applyExecutionPlanRequest?: ApplyExecutionPlanRequest): Promise<ApplyExecutionPlanResponse> {
        const options = ParamCreater().applyExecutionPlan(applyExecutionPlanRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 此命令用于生成一个执行计划(execution plan)
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 此命令用于生成一个执行计划(execution plan)
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  获取方式：https://support.huaweicloud.com/api-ticket/ticket_api_20002.html 
     * @param {string} stackName 用户希望操作的资源栈名
     * @param {CreateExecutionPlanRequestBody} createExecutionPlanRequestBody create-execution-plan request parameters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createExecutionPlan(createExecutionPlanRequest?: CreateExecutionPlanRequest): Promise<CreateExecutionPlanResponse> {
        const options = ParamCreater().createExecutionPlan(createExecutionPlanRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 预估执行计划的价格
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 预估执行计划的价格
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  获取方式：https://support.huaweicloud.com/api-ticket/ticket_api_20002.html 
     * @param {string} stackName 用户希望操作的资源栈名
     * @param {string} executionPlanName 执行计划的名字。如果未指定，则使用execution_plan_id作为execution_plan_name。
     * @param {string} [stackId] 用户希望描述的栈的Id。若stack_name和stack_id同时存在，则IaC会检查是否两个匹配，否则返回400
     * @param {string} [executionPlanId] 执行计划ID(uuid)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public estimateExecutionPlanPrice(estimateExecutionPlanPriceRequest?: EstimateExecutionPlanPriceRequest): Promise<EstimateExecutionPlanPriceResponse> {
        const options = ParamCreater().estimateExecutionPlanPrice(estimateExecutionPlanPriceRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取堆栈当前使用的模板
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 获取堆栈模板
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  获取方式：https://support.huaweicloud.com/api-ticket/ticket_api_20002.html 
     * @param {string} stackName 用户希望操作的资源栈名
     * @param {string} [stackId] 用户希望描述的栈的Id。若stack_name和stack_id同时存在，则IaC会检查是否两个匹配，否则返回400
     * @param {string} [executor] 执行操作者的名字，将用做未来的审计工作。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getStackTemplate(getStackTemplateRequest?: GetStackTemplateRequest): Promise<void> {
        const options = ParamCreater().getStackTemplate(getStackTemplateRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 列举执行计划
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 列举执行计划
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  获取方式：https://support.huaweicloud.com/api-ticket/ticket_api_20002.html 
     * @param {string} stackName 用户希望操作的资源栈名
     * @param {string} [executor] 执行操作者的名字，将用做未来的审计工作。
     * @param {string} [stackId] 用户希望描述的栈的Id。若stack_name和stack_id同时存在，则IaC会检查是否两个匹配，否则返回400
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listExecutionPlans(listExecutionPlansRequest?: ListExecutionPlansRequest): Promise<ListExecutionPlansResponse> {
        const options = ParamCreater().listExecutionPlans(listExecutionPlansRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 列举堆栈的输出
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 列举堆栈的输出
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  获取方式：https://support.huaweicloud.com/api-ticket/ticket_api_20002.html 
     * @param {string} stackName 用户希望操作的资源栈名
     * @param {string} [stackId] 用户希望描述的栈的Id。若stack_name和stack_id同时存在，则IaC会检查是否两个匹配，否则返回400
     * @param {string} [executor] 执行操作者的名字，将用做未来的审计工作。
     * @param {number} [limit] 分页limit
     * @param {string} [marker] 当一页无法发回所有的细节，上一次的请求将返回next_marker以指引还有更多页数，客户可以将next_marker中的值放到此处以查询下一页的信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listStackOutputs(listStackOutputsRequest?: ListStackOutputsRequest): Promise<ListStackOutputsResponse> {
        const options = ParamCreater().listStackOutputs(listStackOutputsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 此命令用于解析模板参数
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
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
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 如果资源栈开启了自动回滚，在部署失败的时候则会自动回滚。但是自动回滚依然有可能失败，用户可以根据错误信息修复后，调用ContinueRollbackStack触发继续回滚，即重试回滚
     * 
     * * 如果资源栈当前可以回滚，即处于&#x60;ROLLBACK_FAILED&#x60;，则返回202与对应生成的deploymentId，否则将不允许回滚并返回响应的错误码
     * * 继续回滚也有可能会回滚失败。如果失败，用户可以从ListStackEvents获取对应的log，解决后可再次调用ContinueRollbackStack去继续触发回滚
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 继续回滚资源栈
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  获取方式：https://support.huaweicloud.com/api-ticket/ticket_api_20002.html 
     * @param {string} stackName 用户希望操作的资源栈名
     * @param {ContinueRollbackStackRequestBody} continueRollbackStackRequestBody ContinueRollbackStack API的请求Body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public continueRollbackStack(continueRollbackStackRequest?: ContinueRollbackStackRequest): Promise<ContinueRollbackStackResponse> {
        const options = ParamCreater().continueRollbackStack(continueRollbackStackRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * CreateStack用于生成一个资源栈
     * 
     * * 当请求中不含有模板（template）、参数（vars）等信息，将生成一个无任何资源的空资源栈，返回资源栈ID（stack_id）
     * * 当请求中携带了模板（template）、参数（vars）等信息，则会同时创建并部署资源栈，返回资源栈ID（stack_id）和部署ID（deployment_id）
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
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
        options['responseHeaders'] = [''];
        // @ts-ignore
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
     * * 当触发的部署失败时，如果堆栈开启了自动回滚，会触发自动回滚的流程，否则就会停留在部署失败时的状态
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 部署一个已有的资源栈
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  获取方式：https://support.huaweicloud.com/api-ticket/ticket_api_20002.html 
     * @param {string} stackName 用户希望操作的资源栈名
     * @param {DeployStackRequestBody} deployStackRequestBody DeployStack API的请求Body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deployStack(deployStackRequest?: DeployStackRequest): Promise<DeployStackResponse> {
        const options = ParamCreater().deployStack(deployStackRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * ListStacks 列举当前局点下用户所有的堆栈
     * 
     *   * 默认按照生成时间排序，最早生成的在最前
     *   * 注意：目前暂时返回全量堆栈信息，即不支持分页
     *   * 如果没有任何堆栈，则返回空list
     * 
     * ListStacks返回的只有摘要信息（具体摘要信息见ListStacksResponseBody），如果用户需要详细的资源栈元数据请调用GetStackMetadata
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 列举堆栈
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  获取方式：https://support.huaweicloud.com/api-ticket/ticket_api_20002.html 
     * @param {string} [executor] 执行操作者的名字，将用做未来的审计工作。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listStacks(listStacksRequest?: ListStacksRequest): Promise<ListStacksResponse> {
        const options = ParamCreater().listStacks(listStacksRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 此命令用于执行已有的执行计划(execution plan)
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
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
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
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
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
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
         * 预估执行计划的价格
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
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
         * 获取堆栈当前使用的模板
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
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
         * 列举执行计划
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
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
         * 列举堆栈的输出
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
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
            let limit;
            let marker;

            if (listStackOutputsRequest !== null && listStackOutputsRequest !== undefined) {
                if (listStackOutputsRequest instanceof ListStackOutputsRequest) {
                    clientRequestId = listStackOutputsRequest.clientRequestId;
                    projectId = listStackOutputsRequest.projectId;
                    stackName = listStackOutputsRequest.stackName;
                    stackId = listStackOutputsRequest.stackId;
                    executor = listStackOutputsRequest.executor;
                    limit = listStackOutputsRequest.limit;
                    marker = listStackOutputsRequest.marker;
                } else {
                    clientRequestId = listStackOutputsRequest['Client-Request-Id'];
                    projectId = listStackOutputsRequest['project_id'];
                    stackName = listStackOutputsRequest['stack_name'];
                    stackId = listStackOutputsRequest['stack_id'];
                    executor = listStackOutputsRequest['executor'];
                    limit = listStackOutputsRequest['limit'];
                    marker = listStackOutputsRequest['marker'];
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
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
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
         * 此命令用于解析模板参数
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
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
    
        /**
         * 如果资源栈开启了自动回滚，在部署失败的时候则会自动回滚。但是自动回滚依然有可能失败，用户可以根据错误信息修复后，调用ContinueRollbackStack触发继续回滚，即重试回滚
         * 
         * * 如果资源栈当前可以回滚，即处于&#x60;ROLLBACK_FAILED&#x60;，则返回202与对应生成的deploymentId，否则将不允许回滚并返回响应的错误码
         * * 继续回滚也有可能会回滚失败。如果失败，用户可以从ListStackEvents获取对应的log，解决后可再次调用ContinueRollbackStack去继续触发回滚
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
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
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
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
         * 部署一个已有的资源栈
         * 
         * * 用户可以使用此API更新模板、参数等并触发一个新的部署
         * 
         * * 此API会直接触发部署，如果用户希望先确认部署会发生的时间，请使用执行计划，即使用CreateExecutionPlan以创建执行计划、使用GetExecutionPlan以获取执行计划
         * 
         * * 此API为全量API，即用户每次部署都需要给予所想要使用的template、vars的全量
         * 
         * * 当触发的部署失败时，如果堆栈开启了自动回滚，会触发自动回滚的流程，否则就会停留在部署失败时的状态
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
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
         * ListStacks 列举当前局点下用户所有的堆栈
         * 
         *   * 默认按照生成时间排序，最早生成的在最前
         *   * 注意：目前暂时返回全量堆栈信息，即不支持分页
         *   * 如果没有任何堆栈，则返回空list
         * 
         * ListStacks返回的只有摘要信息（具体摘要信息见ListStacksResponseBody），如果用户需要详细的资源栈元数据请调用GetStackMetadata
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
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