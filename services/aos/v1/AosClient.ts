import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AgenciesPrimitiveTypeHolder } from './model/AgenciesPrimitiveTypeHolder';
import { Agency } from './model/Agency';
import { ApplyExecutionPlanRequest } from './model/ApplyExecutionPlanRequest';
import { ApplyExecutionPlanRequestBody } from './model/ApplyExecutionPlanRequestBody';
import { ApplyExecutionPlanResponse } from './model/ApplyExecutionPlanResponse';
import { BaseTemplate } from './model/BaseTemplate';
import { BaseTemplateVersion } from './model/BaseTemplateVersion';
import { ContinueDeployStackRequest } from './model/ContinueDeployStackRequest';
import { ContinueDeployStackRequestBody } from './model/ContinueDeployStackRequestBody';
import { ContinueDeployStackResponse } from './model/ContinueDeployStackResponse';
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
import { DeleteTemplateRequest } from './model/DeleteTemplateRequest';
import { DeleteTemplateResponse } from './model/DeleteTemplateResponse';
import { DeleteTemplateVersionRequest } from './model/DeleteTemplateVersionRequest';
import { DeleteTemplateVersionResponse } from './model/DeleteTemplateVersionResponse';
import { DeployStackRequest } from './model/DeployStackRequest';
import { DeployStackRequestBody } from './model/DeployStackRequestBody';
import { DeployStackResponse } from './model/DeployStackResponse';
import { DeploymentIdPrimitiveTypeHolder } from './model/DeploymentIdPrimitiveTypeHolder';
import { EnableAutoRollbackPrimitiveTypeHolder } from './model/EnableAutoRollbackPrimitiveTypeHolder';
import { EnableDeletionProtectionPrimitiveTypeHolder } from './model/EnableDeletionProtectionPrimitiveTypeHolder';
import { EncryptionStructure } from './model/EncryptionStructure';
import { EstimateExecutionPlanPriceRequest } from './model/EstimateExecutionPlanPriceRequest';
import { EstimateExecutionPlanPriceResponse } from './model/EstimateExecutionPlanPriceResponse';
import { ExecutionPlan } from './model/ExecutionPlan';
import { ExecutionPlanDescriptionPrimitiveTypeHolder } from './model/ExecutionPlanDescriptionPrimitiveTypeHolder';
import { ExecutionPlanDiffAttribute } from './model/ExecutionPlanDiffAttribute';
import { ExecutionPlanIdPrimitiveTypeHolder } from './model/ExecutionPlanIdPrimitiveTypeHolder';
import { ExecutionPlanItem } from './model/ExecutionPlanItem';
import { ExecutionPlanNamePrimitiveTypeHolder } from './model/ExecutionPlanNamePrimitiveTypeHolder';
import { ExecutionPlanStatusMessagePrimitiveTypeHolder } from './model/ExecutionPlanStatusMessagePrimitiveTypeHolder';
import { ExecutionPlanStatusPrimitiveTypeHolder } from './model/ExecutionPlanStatusPrimitiveTypeHolder';
import { ExecutionPlanSummary } from './model/ExecutionPlanSummary';
import { GetExecutionPlanMetadataRequest } from './model/GetExecutionPlanMetadataRequest';
import { GetExecutionPlanMetadataResponse } from './model/GetExecutionPlanMetadataResponse';
import { GetExecutionPlanRequest } from './model/GetExecutionPlanRequest';
import { GetExecutionPlanResponse } from './model/GetExecutionPlanResponse';
import { GetStackMetadataRequest } from './model/GetStackMetadataRequest';
import { GetStackMetadataResponse } from './model/GetStackMetadataResponse';
import { GetStackTemplateRequest } from './model/GetStackTemplateRequest';
import { GetStackTemplateResponse } from './model/GetStackTemplateResponse';
import { IndexPrimitiveTypeHolder } from './model/IndexPrimitiveTypeHolder';
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
import { ListTemplateVersionsRequest } from './model/ListTemplateVersionsRequest';
import { ListTemplateVersionsResponse } from './model/ListTemplateVersionsResponse';
import { ListTemplatesRequest } from './model/ListTemplatesRequest';
import { ListTemplatesResponse } from './model/ListTemplatesResponse';
import { ParseTemplateVariablesRequest } from './model/ParseTemplateVariablesRequest';
import { ParseTemplateVariablesRequestBody } from './model/ParseTemplateVariablesRequestBody';
import { ParseTemplateVariablesResponse } from './model/ParseTemplateVariablesResponse';
import { ResourceAttribute } from './model/ResourceAttribute';
import { ResourceNamePrimitiveTypeHolder } from './model/ResourceNamePrimitiveTypeHolder';
import { ResourcePriceResponse } from './model/ResourcePriceResponse';
import { ResourceTypePrimitiveTypeHolder } from './model/ResourceTypePrimitiveTypeHolder';
import { ShowTemplateMetadataRequest } from './model/ShowTemplateMetadataRequest';
import { ShowTemplateMetadataResponse } from './model/ShowTemplateMetadataResponse';
import { ShowTemplateVersionContentRequest } from './model/ShowTemplateVersionContentRequest';
import { ShowTemplateVersionContentResponse } from './model/ShowTemplateVersionContentResponse';
import { ShowTemplateVersionMetadataRequest } from './model/ShowTemplateVersionMetadataRequest';
import { ShowTemplateVersionMetadataResponse } from './model/ShowTemplateVersionMetadataResponse';
import { Stack } from './model/Stack';
import { StackDescriptionPrimitiveTypeHolder } from './model/StackDescriptionPrimitiveTypeHolder';
import { StackEvent } from './model/StackEvent';
import { StackIdPrimitiveTypeHolder } from './model/StackIdPrimitiveTypeHolder';
import { StackNamePrimitiveTypeHolder } from './model/StackNamePrimitiveTypeHolder';
import { StackOutput } from './model/StackOutput';
import { StackResource } from './model/StackResource';
import { StackStatusMessagePrimitiveTypeHolder } from './model/StackStatusMessagePrimitiveTypeHolder';
import { StackStatusPrimitiveTypeHolder } from './model/StackStatusPrimitiveTypeHolder';
import { Template } from './model/Template';
import { TemplateBodyPrimitiveTypeHolder } from './model/TemplateBodyPrimitiveTypeHolder';
import { TemplateURIPrimitiveTypeHolder } from './model/TemplateURIPrimitiveTypeHolder';
import { TemplateVersion } from './model/TemplateVersion';
import { UpdateStackRequest } from './model/UpdateStackRequest';
import { UpdateStackRequestBody } from './model/UpdateStackRequestBody';
import { UpdateStackResponse } from './model/UpdateStackResponse';
import { UpdateTemplateMetadataRequest } from './model/UpdateTemplateMetadataRequest';
import { UpdateTemplateMetadataRequestBody } from './model/UpdateTemplateMetadataRequestBody';
import { UpdateTemplateMetadataResponse } from './model/UpdateTemplateMetadataResponse';
import { VariableResponse } from './model/VariableResponse';
import { VariableValidationResponse } from './model/VariableValidationResponse';
import { VarsBodyPrimitiveTypeHolder } from './model/VarsBodyPrimitiveTypeHolder';
import { VarsStructure } from './model/VarsStructure';
import { VarsStructurePrimitiveTypeHolder } from './model/VarsStructurePrimitiveTypeHolder';
import { VarsURIPrimitiveTypeHolder } from './model/VarsURIPrimitiveTypeHolder';
import { VarsUriContentPrimitiveTypeHolder } from './model/VarsUriContentPrimitiveTypeHolder';

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
     * 执行执行计划（ApplyExecutionPlan）
     * 
     * 此API用于执行一个执行计划
     * 
     * * 当执行请求接受后，执行计划状态将变为&#x60;APPLY_IN_PROGRESS&#x60;，后台会进行异步处理。
     * * 当执行结束后，执行计划状态将变为&#x60;APPLIED&#x60;。
     * * 用户可以调用GetStackMetadata查询资源栈的状态（status）来跟踪资源栈部署情况以及确认本次执行结果是否成功。
     * 
     * 如果不希望通过执行计划进行部署操作，也可以选择调用DeployStack进行直接部署
     * 
     * 关于执行计划的过期失效：
     *   1. 若指定资源栈下有多个执行计划，则在执行某个执行计划后（无论结果是否成功），剩余所有的执行计划将过期失效；
     *   2. 若调用ApplyExecutionPlan时，指定的执行计划已经过期失效，则返回403
     * 
     * 若资源栈状态处于非终态（即以&#x60;IN_PROGRESS&#x60;结尾，详细见下方）状态时，则不允许执行执行计划，并返回403。非终态状态包括但不限于以下状态：
     *   * 正在部署（DEPLOYMENT_IN_PROGRESS）
     *   * 正在删除（DELETION_IN_PROGRESS）
     *   * 正在回滚（ROLLBACK_IN_PROGRESS）
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 执行执行计划
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {string} stackName 资源栈的名称。此名字在domain_id+区域+project_id下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} executionPlanName 执行计划的名称。此名字在domain_id+区域+project_id+stack_id下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {ApplyExecutionPlanRequestBody} [applyExecutionPlanRequestBody] ApplyExecutionPlan API的请求Body体
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
     * 创建执行计划（CreateExecutionPlan）
     * 
     * 此API用于在指定的资源栈下生成一个执行计划，执行计划描述了当前资源栈中记录的资源状态和模板描述的目的资源状态之间的区别（如，资源A将以以下配置文件生成，资源B将以下参数从XXX修改成YYY）
     * 
     * 调用此API触发创建执行计划之后，可以通过GetExecutionPlanMetadata来跟踪执行计划的状态
     * 当执行计划状态为&#x60;AVAILABLE&#x60;时，可以通过GetExecutionPlan获取本次执行计划的结果
     * 
     * 执行计划不会做过多深层的检查和校验，如用户是否有权限生成、修改资源等
     * 
     * **注意：**
     *   * 若指定资源栈不存在，则返回404
     *   * 若请求中不含有template_body和template_uri，则返回400
     *   * 若资源栈进行了某次部署操作，则在该次部署操作前生成的执行计划将全部失效
     *   * 执行计划只代表生成时刻的结果，若执行计划生成后，用户手动修改资源状态，则执行计划不会自动更新
     *   * 若资源栈状态处于&#x60;DEPLOYMENT_IN_PROGRESS&#x60;、&#x60;ROLLBACK_IN_PROGRESS&#x60;、&#x60;DELETION_IN_PROGRESS&#x60;等状态时，则不允许创建执行计划，并返回403
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建执行计划
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {string} stackName 资源栈的名称。此名字在domain_id+区域+project_id下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {CreateExecutionPlanRequestBody} createExecutionPlanRequestBody CreateExecutionPlan API的请求Body体
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
     * 删除执行计划（DeleteExecutionPlan）
     * 
     * 删除指定的执行计划
     * 
     * 若执行计划状态处于&#x60;CREATION_IN_PROGRESS&#x60;、&#x60;APPLY_IN_PROGRESS&#x60;状态时，则不允许删除并返回403
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除执行计划
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {string} stackName 资源栈的名称。此名字在domain_id+区域+project_id下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} executionPlanName 执行计划的名称。此名字在domain_id+区域+project_id+stack_id下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} [stackId] 资源栈（stack）的唯一Id。  此Id由资源编排服务在生成资源栈的时候生成，为UUID。  由于资源栈名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的资源栈，删除，再重新创建一个同名资源栈。  对于团队并行开发，用户可能希望确保，当前我操作的资源栈就是我认为的那个，而不是其他队友删除后创建的同名资源栈。因此，使用ID就可以做到强匹配。  资源编排服务保证每次创建的资源栈所对应的ID都不相同，更新不会影响ID。如果给与的stack_id和当前资源栈的ID不一致，则返回400
     * @param {string} [executionPlanId] 执行计划（execution_plan）的唯一Id。  此Id由资源编排服务在生成执行计划的时候生成，为UUID。  由于执行计划名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的执行计划，删除，再重新创建一个同名执行计划。  对于团队并行开发，用户可能希望确保，当前我操作的执行计划就是我认为的那个，而不是其他队友删除后创建的同名执行计划。因此，使用ID就可以做到强匹配。  资源编排服务保证每次创建的执行计划所对应的ID都不相同，更新不会影响ID。如果给与的execution_plan_id和当前执行计划的ID不一致，则返回400
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteExecutionPlan(deleteExecutionPlanRequest?: DeleteExecutionPlanRequest): Promise<DeleteExecutionPlanResponse> {
        const options = ParamCreater().deleteExecutionPlan(deleteExecutionPlanRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 预估执行计划价格（EstimateExecutionPlanPrice）
     * 
     * 此API可以基于一份已有的执行计划中增量的资源进行询价，当前支持询价的计费模式有包周期计费、按需计费、免费，暂不支持其他形式的计费模式，例如竞价计费模式等。
     * 
     * 注：
     *   * 由于某些资源的属性值含有默认值，且该属性和询价参数相关。若用户的模板中描述的资源没有声明这些属性，则询价结果可能存在偏差。
     *   * 询价结果仅为预估结果，具体请以实际为准。
     *   * 若用户在模板中使用了depends_on参数，如A资源询价必要字段依赖于B资源的创建，则A资源不支持询价。
     *   * 暂不支持传入data sources的flavor.id的场景的询价。
     *   * 暂不支持镜像询价。
     *   * 模板中询价的资源的个数是有限制的。当前一个模板中最多支持12个包周期计费资源和24个按需计费资源。
     *   * 支持询价的资源列表和询价必要参数
     *       * huaweicloud_cce_cluster: 
     *           * 支持的计费模式：包周期、按需
     *       * huaweicloud_css_cluster:
     *           * 支持的计费模式：按需
     *       * huaweicloud_evs_volume: 
     *           * 支持的计费模式：包周期、按需
     *           * 询价必要参数：size（磁盘规格）
     *       * huaweicloud_compute_instance: 
     *           * 支持的计费模式：包周期、按需
     *           * 询价必要参数：flavor_id（规格ID）、flavor_name（规格名称，flavor_id和flavor_name至少给出一个）、system_disk_size（系统磁盘大小）
     *       * huaweicloud_vpc_bandwidth:
     *           * 支持的计费模式：按需
     *           * 询价必要参数：charge_mode仅支持bandwidth
     *       * huaweicloud_vpc_eip: 
     *           * 支持的计费模式：包周期、按需
     *           * 询价必要参数：bandwidth.size（带宽大小）
     *       * huaweicloud_gaussdb_redis_instance: 
     *           * 支持的计费模式：包周期、按需
     *       * huaweicloud_nat_gateway: 
     *           * 支持的计费模式：按需
     *       * huaweicloud_rds_instance: 
     *           * 支持的计费模式：包周期、按需
     *       * huaweicloud_sfs_turbo: 
     *           * 支持的计费模式：按需
     *           * 询价必要参数：share_type（文件系统类型）
     *       * huaweicloud_dms_kafka_instance: 
     *           * 支持的计费模式：按需
     *           * 询价必要参数：flavor_id（规格ID）、product_id（产品ID。flavor_id和product_id至少给出一个。）、storage_space（存储容量）
     *       * huaweicloud_dcs_instance: 
     *           * 支持的计费模式：包周期、按需
     *       * huaweicloud_gaussdb_mysql_instance: 
     *           * 支持的计费模式：包周期、按需
     *           * 询价必要参数：proxy_node_number（代理节点数量）、volume_size（挂载卷的存储空间）
     *       * huaweicloud_vpc: 
     *           * 支持的计费模式：免费
     *       * huaweicloud_drs_job: 
     *           * 支持的计费模式：按需
     *       * huaweicloud_apig_instance: 
     *           * 支持的计费模式：按需
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 预估执行计划价格
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {string} stackName 资源栈的名称。此名字在domain_id+区域+project_id下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} executionPlanName 执行计划的名称。此名字在domain_id+区域+project_id+stack_id下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} [stackId] 资源栈（stack）的唯一Id。  此Id由资源编排服务在生成资源栈的时候生成，为UUID。  由于资源栈名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的资源栈，删除，再重新创建一个同名资源栈。  对于团队并行开发，用户可能希望确保，当前我操作的资源栈就是我认为的那个，而不是其他队友删除后创建的同名资源栈。因此，使用ID就可以做到强匹配。  资源编排服务保证每次创建的资源栈所对应的ID都不相同，更新不会影响ID。如果给与的stack_id和当前资源栈的ID不一致，则返回400
     * @param {string} [executionPlanId] 执行计划（execution_plan）的唯一Id。  此Id由资源编排服务在生成执行计划的时候生成，为UUID。  由于执行计划名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的执行计划，删除，再重新创建一个同名执行计划。  对于团队并行开发，用户可能希望确保，当前我操作的执行计划就是我认为的那个，而不是其他队友删除后创建的同名执行计划。因此，使用ID就可以做到强匹配。  资源编排服务保证每次创建的执行计划所对应的ID都不相同，更新不会影响ID。如果给与的execution_plan_id和当前执行计划的ID不一致，则返回400
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
     * 获取执行计划（GetExecutionPlan）
     * 
     * 此API用于获取指定执行计划的详细内容（即执行计划项目），用户可通过此API得知指定执行计划在执行后，资源栈中的资源会发生何种变化
     * 
     * 若执行计划状态为&#x60;CREATION_IN_PROGRESS&#x60;或&#x60;CREATION_FAILED&#x60;，则不返回执行计划项目列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取执行计划
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {string} stackName 资源栈的名称。此名字在domain_id+区域+project_id下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} executionPlanName 执行计划的名称。此名字在domain_id+区域+project_id+stack_id下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} [stackId] 资源栈（stack）的唯一Id。  此Id由资源编排服务在生成资源栈的时候生成，为UUID。  由于资源栈名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的资源栈，删除，再重新创建一个同名资源栈。  对于团队并行开发，用户可能希望确保，当前我操作的资源栈就是我认为的那个，而不是其他队友删除后创建的同名资源栈。因此，使用ID就可以做到强匹配。  资源编排服务保证每次创建的资源栈所对应的ID都不相同，更新不会影响ID。如果给与的stack_id和当前资源栈的ID不一致，则返回400
     * @param {string} [executionPlanId] 执行计划（execution_plan）的唯一Id。  此Id由资源编排服务在生成执行计划的时候生成，为UUID。  由于执行计划名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的执行计划，删除，再重新创建一个同名执行计划。  对于团队并行开发，用户可能希望确保，当前我操作的执行计划就是我认为的那个，而不是其他队友删除后创建的同名执行计划。因此，使用ID就可以做到强匹配。  资源编排服务保证每次创建的执行计划所对应的ID都不相同，更新不会影响ID。如果给与的execution_plan_id和当前执行计划的ID不一致，则返回400
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
     * 获取执行计划元数据（GetExecutionPlanMetadata）
     * 
     * 该API可以获取指定执行计划的元数据，包括资源栈ID、资源栈名称、执行计划ID、执行计划名称、执行计划描述、执行计划的创建时间和执行时间、执行计划状态等信息。
     * 
     * 具体信息见GetExecutionPlanMetadataResponseBody。
     * 
     * 如果需要获取执行计划的具体内容，请调用GetExecutionPlan。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取执行计划元数据
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {string} stackName 资源栈的名称。此名字在domain_id+区域+project_id下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} executionPlanName 执行计划的名称。此名字在domain_id+区域+project_id+stack_id下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} [stackId] 资源栈（stack）的唯一Id。  此Id由资源编排服务在生成资源栈的时候生成，为UUID。  由于资源栈名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的资源栈，删除，再重新创建一个同名资源栈。  对于团队并行开发，用户可能希望确保，当前我操作的资源栈就是我认为的那个，而不是其他队友删除后创建的同名资源栈。因此，使用ID就可以做到强匹配。  资源编排服务保证每次创建的资源栈所对应的ID都不相同，更新不会影响ID。如果给与的stack_id和当前资源栈的ID不一致，则返回400
     * @param {string} [executionPlanId] 执行计划（execution_plan）的唯一Id。  此Id由资源编排服务在生成执行计划的时候生成，为UUID。  由于执行计划名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的执行计划，删除，再重新创建一个同名执行计划。  对于团队并行开发，用户可能希望确保，当前我操作的执行计划就是我认为的那个，而不是其他队友删除后创建的同名执行计划。因此，使用ID就可以做到强匹配。  资源编排服务保证每次创建的执行计划所对应的ID都不相同，更新不会影响ID。如果给与的execution_plan_id和当前执行计划的ID不一致，则返回400
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getExecutionPlanMetadata(getExecutionPlanMetadataRequest?: GetExecutionPlanMetadataRequest): Promise<GetExecutionPlanMetadataResponse> {
        const options = ParamCreater().getExecutionPlanMetadata(getExecutionPlanMetadataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列举执行计划（ListExecutionPlans）
     * 
     * 列举当前局点下用户指定资源栈下所有的执行计划
     * 
     *   * 默认按照生成时间排序，最早生成的在最前
     *   * 注意：目前暂时返回全量执行计划信息，即不支持分页
     *   * 如果指定的资源栈下没有任何执行计划，则返回空list
     *   * 如果指定的资源栈不存在，则返回404
     * 
     * ListExecutionPlans返回的只有摘要信息（具体摘要信息见ListExecutionPlansResponseBody），如果用户需要详细的执行计划元数据请调用GetExecutionPlanMetadata
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列举执行计划
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {string} stackName 资源栈的名称。此名字在domain_id+区域+project_id下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} [stackId] 资源栈（stack）的唯一Id。  此Id由资源编排服务在生成资源栈的时候生成，为UUID。  由于资源栈名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的资源栈，删除，再重新创建一个同名资源栈。  对于团队并行开发，用户可能希望确保，当前我操作的资源栈就是我认为的那个，而不是其他队友删除后创建的同名资源栈。因此，使用ID就可以做到强匹配。  资源编排服务保证每次创建的资源栈所对应的ID都不相同，更新不会影响ID。如果给与的stack_id和当前资源栈的ID不一致，则返回400
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
     * 继续部署资源栈（ContinueDeployStack）
     * 
     * 此API用于继续部署一个已有的资源栈
     * 
     * * 如果资源栈当前可以继续部署，即处于&#x60;DEPLOYMENT_FAILED&#x60;，则返回202与对应生成的deploymentId，否则将不允许继续部署并返回相应的错误码
     * 
     * * 继续部署操作依然有可能部署失败，用户可以从ListStackEvents获取对应的log，解决后可再次调用此API触发继续部署
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 继续部署资源栈
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {string} stackName 资源栈的名称。此名字在domain_id+区域+project_id下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {ContinueDeployStackRequestBody} [continueDeployStackRequestBody] ContinueDeployStack API的请求Body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public continueDeployStack(continueDeployStackRequest?: ContinueDeployStackRequest): Promise<ContinueDeployStackResponse> {
        const options = ParamCreater().continueDeployStack(continueDeployStackRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 继续回滚资源栈（ContinueRollbackStack）
     * 
     * 此API用于继续回滚一个已有的资源栈
     * 
     * 如果资源栈开启了自动回滚，在部署失败的时候则会自动回滚。但是自动回滚依然有可能失败，用户可以根据错误信息修复后，调用ContinueRollbackStack触发继续回滚，即重试回滚
     * 
     * * 如果资源栈当前可以回滚，即处于&#x60;ROLLBACK_FAILED&#x60;，则返回202与对应生成的deploymentId，否则将不允许回滚并返回响应的错误码
     * * 继续回滚也有可能会回滚失败。如果失败，用户可以从ListStackEvents获取对应的log，解决后可再次调用ContinueRollbackStack去继续触发回滚
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 继续回滚资源栈
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {string} stackName 资源栈的名称。此名字在domain_id+区域+project_id下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {ContinueRollbackStackRequestBody} [continueRollbackStackRequestBody] ContinueRollbackStack API的请求Body体
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
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
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
     * 删除资源栈（DeleteStack）
     * 
     * 此API用于删除某个资源栈
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
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {string} stackName 资源栈的名称。此名字在domain_id+区域+project_id下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} [stackId] 资源栈（stack）的唯一Id。  此Id由资源编排服务在生成资源栈的时候生成，为UUID。  由于资源栈名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的资源栈，删除，再重新创建一个同名资源栈。  对于团队并行开发，用户可能希望确保，当前我操作的资源栈就是我认为的那个，而不是其他队友删除后创建的同名资源栈。因此，使用ID就可以做到强匹配。  资源编排服务保证每次创建的资源栈所对应的ID都不相同，更新不会影响ID。如果给与的stack_id和当前资源栈的ID不一致，则返回400
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteStack(deleteStackRequest?: DeleteStackRequest): Promise<DeleteStackResponse> {
        const options = ParamCreater().deleteStack(deleteStackRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 部署资源栈（DeployStack）
     * 
     * 此API用于部署一个已有的资源栈
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
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {string} stackName 资源栈的名称。此名字在domain_id+区域+project_id下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
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
     * 获取资源栈元数据（GetStackMetadata）
     * 
     * 此API用于获取指定资源栈的元数据，包括资源栈ID、资源栈名称、资源栈描述、创建时间、更新时间、资源栈状态、委托授权等信息。
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
     * @summary 获取资源栈元数据
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {string} stackName 资源栈的名称。此名字在domain_id+区域+project_id下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} [stackId] 资源栈（stack）的唯一Id。  此Id由资源编排服务在生成资源栈的时候生成，为UUID。  由于资源栈名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的资源栈，删除，再重新创建一个同名资源栈。  对于团队并行开发，用户可能希望确保，当前我操作的资源栈就是我认为的那个，而不是其他队友删除后创建的同名资源栈。因此，使用ID就可以做到强匹配。  资源编排服务保证每次创建的资源栈所对应的ID都不相同，更新不会影响ID。如果给与的stack_id和当前资源栈的ID不一致，则返回400
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
     * 获取资源栈模板（GetStackTemplate）
     * 
     * 此API用于获取资源栈最近一次部署终态使用的模板。
     * 
     * 注：
     * 当资源栈状态处于非终态（即以&#x60;IN_PROGRESS&#x60;结尾，详细见下方）状态时，资源栈处于转变阶段，此API获取资源栈上一次部署使用的模板。
     * 只有当资源栈状态处于终态（即以&#x60;COMPLETE&#x60;或&#x60;FAILED&#x60;结尾，详细见下方）时，此API获取当前最新一次部署使用的模板。CREATION_COMPLETE除外，此时资源栈没有模板，返回404，并提示模板不存在
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
     * 如果获取成功，则以临时重定向形式返回模板下载链接（OBS Pre Signed地址，有效期为5分钟），大多数的客户端会进行自动重定向并下载模板；
     * 若未进行自动重定向，请参考HTTP的重定向规则获取模板下载链接，手动下载模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取资源栈模板
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {string} stackName 资源栈的名称。此名字在domain_id+区域+project_id下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} [stackId] 资源栈（stack）的唯一Id。  此Id由资源编排服务在生成资源栈的时候生成，为UUID。  由于资源栈名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的资源栈，删除，再重新创建一个同名资源栈。  对于团队并行开发，用户可能希望确保，当前我操作的资源栈就是我认为的那个，而不是其他队友删除后创建的同名资源栈。因此，使用ID就可以做到强匹配。  资源编排服务保证每次创建的资源栈所对应的ID都不相同，更新不会影响ID。如果给与的stack_id和当前资源栈的ID不一致，则返回400
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getStackTemplate(getStackTemplateRequest?: GetStackTemplateRequest): Promise<GetStackTemplateResponse> {
        const options = ParamCreater().getStackTemplate(getStackTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = ['Location'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列举资源栈事件（ListStackEvents）
     * 
     * 此API用于列举资源栈某一次或全部的部署事件
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
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {string} stackName 资源栈的名称。此名字在domain_id+区域+project_id下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} [stackId] 资源栈（stack）的唯一Id。  此Id由资源编排服务在生成资源栈的时候生成，为UUID。  由于资源栈名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的资源栈，删除，再重新创建一个同名资源栈。  对于团队并行开发，用户可能希望确保，当前我操作的资源栈就是我认为的那个，而不是其他队友删除后创建的同名资源栈。因此，使用ID就可以做到强匹配。  资源编排服务保证每次创建的资源栈所对应的ID都不相同，更新不会影响ID。如果给与的stack_id和当前资源栈的ID不一致，则返回400
     * @param {string} [deploymentId] 标识部署的唯一Id，此Id由资源编排服务在触发部署、回滚等操作时生成，为UUID。
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
     * 列举资源栈输出（ListStackOutputs）
     * 
     * 此API用于列举该资源栈的所有输出
     * 
     * 资源栈输出为用户在模板中定义的 output 语句块在部署结束后所产生的返回信息，用户可在部署结束后，调用此API获取其具体的输出信息
     * 
     * 当资源栈状态处于非终态（状态以&#x60;IN_PROGRESS&#x60;结尾）状态时，此API将返回空。非终态包括但不限于以下状态：
     *   * 正在部署（DEPLOYMENT_IN_PROGRESS）
     *   * 正在删除（DELETION_IN_PROGRESS）
     *   * 正在回滚（ROLLBACK_IN_PROGRESS）
     * 
     * output为HCL官方定义的语法，其返回信息类似于常见编程语言中的返回值，详细定义请参考HCL官方的说明
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列举资源栈输出
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {string} stackName 资源栈的名称。此名字在domain_id+区域+project_id下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} [stackId] 资源栈（stack）的唯一Id。  此Id由资源编排服务在生成资源栈的时候生成，为UUID。  由于资源栈名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的资源栈，删除，再重新创建一个同名资源栈。  对于团队并行开发，用户可能希望确保，当前我操作的资源栈就是我认为的那个，而不是其他队友删除后创建的同名资源栈。因此，使用ID就可以做到强匹配。  资源编排服务保证每次创建的资源栈所对应的ID都不相同，更新不会影响ID。如果给与的stack_id和当前资源栈的ID不一致，则返回400
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
     * 列举资源栈资源（ListStackResources）
     * 
     * 此API用于列举资源栈中当前管理的所有资源的信息
     * 
     * 当资源栈处于非终态时，仅输出资源栈下资源的简要信息，包含逻辑资源名称（logical_resource_name），逻辑资源类型（logical_resource_type），物理资源id（physical_resource_id），物理资源名称（physical_resource_name），资源状态（status）等信息；当资源栈处于终态时，将额外输出具体信息，如资源属性（resource_attributes）
     * 
     * 非终态包括但不限于以下状态：
     *   * 正在部署（DEPLOYMENT_IN_PROGRESS）
     *   * 正在删除（DELETION_IN_PROGRESS）
     *   * 正在回滚（ROLLBACK_IN_PROGRESS）
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列举资源栈资源
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {string} stackName 资源栈的名称。此名字在domain_id+区域+project_id下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} [stackId] 资源栈（stack）的唯一Id。  此Id由资源编排服务在生成资源栈的时候生成，为UUID。  由于资源栈名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的资源栈，删除，再重新创建一个同名资源栈。  对于团队并行开发，用户可能希望确保，当前我操作的资源栈就是我认为的那个，而不是其他队友删除后创建的同名资源栈。因此，使用ID就可以做到强匹配。  资源编排服务保证每次创建的资源栈所对应的ID都不相同，更新不会影响ID。如果给与的stack_id和当前资源栈的ID不一致，则返回400
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
     * 列举资源栈（ListStacks）
     * 
     * 此API用于列举当前局点下用户所有的资源栈
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
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
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
     * 更新资源栈的属性，该API可以根据用户给予的信息对资源栈的属性进行更新，可以更新资源栈的“description”、“enable_deletion_protection”、\&quot;enable_auto_rollback\&quot;、\&quot;agencies\&quot;四个属性中的一个或多个
     * 
     * 该API只会更新用户给予的信息中所涉及的字段；若某字段未给予，则不会对该资源栈属性进行更新
     * 
     * 注：所有属性的更新都是覆盖式更新。即，所给予的参数将被完全覆盖至资源栈已有的属性上
     * 
     * 例如，若要新增agencies，请通过GetStackMetadata获取该资源栈原有的agencies信息，将新旧agencies信息进行整合后再调用UpdateStack
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新资源栈
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {string} stackName 资源栈的名称。此名字在domain_id+区域+project_id下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {UpdateStackRequestBody} updateStackRequestBody UpdateStack API的请求Body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateStack(updateStackRequest?: UpdateStackRequest): Promise<UpdateStackResponse> {
        const options = ParamCreater().updateStack(updateStackRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 解析模板参数（ParseTemplateVariables）
     * 
     * 此API用于解析用户输入的模板中的参数（variable），将解析模板中的所有variable块并返回
     * 
     * * 若用户传入的模板中定义了variable参数，则返回200和所有variable
     * * 若用户传入的模板中没有定义variable参数，则返回200和空对象
     * * 若用户请求非法或传入的模板非法，则返回400
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解析模板参数
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {ParseTemplateVariablesRequestBody} parseTemplateVariablesRequestBody ParseTemplateVariables API的请求Body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public parseTemplateVariables(parseTemplateVariablesRequest?: ParseTemplateVariablesRequest): Promise<ParseTemplateVariablesResponse> {
        const options = ParamCreater().parseTemplateVariables(parseTemplateVariablesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除模板（DeleteTemplate）
     * 
     * 此API用于删除某个模板以及模板下的全部模板版本
     * **请谨慎操作，删除模板将会删除模板下的所有模板版本。**
     * 
     *   * tempate_id是模板的唯一Id。此Id由资源编排服务在生成模板的时候生成，为UUID。由于模板名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的模板，删除，再重新创建一个同名模板。对于团队并行开发，用户可能希望确保，当前我操作的模板就是我认为的那个，而不是其他队友删除后创建的同名模板。因此，使用ID就可以做到强匹配。资源编排服务保证每次创建的模板所对应的ID都不相同，更新不会影响ID。如果给与的template_id和当前模板管理的ID不一致，则返回400
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除模板
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)
     * @param {string} templateName 用户希望创建的模板名称
     * @param {string} [templateId] 模板的ID。当template_id存在时，模板服务会检查template_id是否和template_name匹配，不匹配会返回400
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTemplate(deleteTemplateRequest?: DeleteTemplateRequest): Promise<DeleteTemplateResponse> {
        const options = ParamCreater().deleteTemplate(deleteTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除模板版本（DeleteTemplateVersion）
     * 
     * 此API用于删除某个模板版本
     * 
     *   * tempate_id是模板的唯一Id。此Id由资源编排服务在生成模板的时候生成，为UUID。由于模板名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的模板，删除，再重新创建一个同名模板。对于团队并行开发，用户可能希望确保，当前我操作的模板就是我认为的那个，而不是其他队友删除后创建的同名模板。因此，使用ID就可以做到强匹配。资源编排服务保证每次创建的模板所对应的ID都不相同，更新不会影响ID。如果给与的template_id和当前模板管理的ID不一致，则返回400
     *   * 若模板下只存在唯一模板版本，此模板版本将无法被删除，如果需要删除此模板版本，请调用DeleteTemplate。模板服务不允许存在没有模板版本的模板
     * 
     * **请谨慎操作**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除模板版本
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)
     * @param {string} templateName 用户希望创建的模板名称
     * @param {string} versionId 模板版本ID，以大写V开头，每次创建模板版本，模板版本ID数字部分会自增加一
     * @param {string} [templateId] 模板的ID。当template_id存在时，模板服务会检查template_id是否和template_name匹配，不匹配会返回400
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTemplateVersion(deleteTemplateVersionRequest?: DeleteTemplateVersionRequest): Promise<DeleteTemplateVersionResponse> {
        const options = ParamCreater().deleteTemplateVersion(deleteTemplateVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列举模板版本信息（ListTemplateVersions）
     * 
     * 此API用于列举模板下所有的模板版本信息
     * 
     *   * 默认按照生成时间排序，最早生成的模板排列在最前面
     *   * 注意：目前返回全量模板版本信息，即不支持分页
     *   * 如果没有任何模板版本，则返回空list
     *   * tempate_id是模板的唯一Id。此Id由资源编排服务在生成模板的时候生成，为UUID。由于模板名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的模板，删除，再重新创建一个同名模板。对于团队并行开发，用户可能希望确保，当前我操作的模板就是我认为的那个，而不是其他队友删除后创建的同名模板。因此，使用ID就可以做到强匹配。资源编排服务保证每次创建的模板所对应的ID都不相同，更新不会影响ID。如果给与的template_id和当前模板管理的ID不一致，则返回400
     *   * 若模板不存在则返回404
     * 
     * ListTemplateVersions返回的信息只包含模板版本摘要信息（具体摘要信息见ListTemplateVersionsResponseBody），若用户需要了解模板版本内容，请调用ShowTemplateVersionContent
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列举模板版本
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)
     * @param {string} templateName 用户希望创建的模板名称
     * @param {string} [templateId] 模板的ID。当template_id存在时，模板服务会检查template_id是否和template_name匹配，不匹配会返回400
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTemplateVersions(listTemplateVersionsRequest?: ListTemplateVersionsRequest): Promise<ListTemplateVersionsResponse> {
        const options = ParamCreater().listTemplateVersions(listTemplateVersionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列举模板（ListTemplates）
     * 
     * 此API用于列举当前局点下用户所有的模板
     * 
     *   * 默认按照生成时间排序，最早生成的模板排列在最前面
     *   * 注意：目前返回全量模板信息，即不支持分页
     *   * 如果没有任何模板，则返回空list
     *   * 若用户需要详细的模板版本信息，请调用ListTemplateVersions
     * 
     * ListTemplates返回的信息只包含模板摘要信息（具体摘要信息见ListTemplatesResponseBody），若用户需要详细的某个模板信息，请调用ShowTemplateMetadata
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列举模板
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTemplates(listTemplatesRequest?: ListTemplatesRequest): Promise<ListTemplatesResponse> {
        const options = ParamCreater().listTemplates(listTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取模板元数据（ShowTemplateMetadata）
     * 
     * 此API用于获取当前模板的元数据信息
     * 
     * 具体信息见ShowTemplateMetadataResponseBody，若想查看模板下全部模板版本，请调用ListTemplateVersions。
     * 
     *   * tempate_id是模板的唯一Id。此Id由资源编排服务在生成模板的时候生成，为UUID。由于模板名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的模板，删除，再重新创建一个同名模板。对于团队并行开发，用户可能希望确保，当前我操作的模板就是我认为的那个，而不是其他队友删除后创建的同名模板。因此，使用ID就可以做到强匹配。资源编排服务保证每次创建的模板所对应的ID都不相同，更新不会影响ID。如果给与的template_id和当前模板管理的ID不一致，则返回400
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取模板元数据
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)
     * @param {string} templateName 用户希望创建的模板名称
     * @param {string} [templateId] 模板的ID。当template_id存在时，模板服务会检查template_id是否和template_name匹配，不匹配会返回400
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTemplateMetadata(showTemplateMetadataRequest?: ShowTemplateMetadataRequest): Promise<ShowTemplateMetadataResponse> {
        const options = ParamCreater().showTemplateMetadata(showTemplateMetadataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取模板版本内容（ShowTemplateVersionContent）
     * 
     * 此API用于获取用户的模板版本内容
     * 
     *   * tempate_id是模板的唯一Id。此Id由资源编排服务在生成模板的时候生成，为UUID。由于模板名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的模板，删除，再重新创建一个同名模板。对于团队并行开发，用户可能希望确保，当前我操作的模板就是我认为的那个，而不是其他队友删除后创建的同名模板。因此，使用ID就可以做到强匹配。资源编排服务保证每次创建的模板所对应的ID都不相同，更新不会影响ID。如果给与的template_id和当前模板管理的ID不一致，则返回400
     *   * 此api会以临时重定向形式返回模板内容的下载链接，用户通过下载获取模板版本内容（OBS Pre Signed地址，有效期为5分钟）
     * 
     * ShowTemplateVersionContent返回的信息只包含模板版本内容，若想知道模板版本的元数据，请调用ShowTemplateVersionMetadata
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取模板版本内容
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)
     * @param {string} templateName 用户希望创建的模板名称
     * @param {string} versionId 模板版本ID，以大写V开头，每次创建模板版本，模板版本ID数字部分会自增加一
     * @param {string} [templateId] 模板的ID。当template_id存在时，模板服务会检查template_id是否和template_name匹配，不匹配会返回400
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTemplateVersionContent(showTemplateVersionContentRequest?: ShowTemplateVersionContentRequest): Promise<ShowTemplateVersionContentResponse> {
        const options = ParamCreater().showTemplateVersionContent(showTemplateVersionContentRequest);

         // @ts-ignore
        options['responseHeaders'] = ['Location'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取模板版本元数据（ShowTemplateVersionMetadata）
     * 
     * 此API用于展示某一版本模板的元数据
     * 
     *   * tempate_id是模板的唯一Id。此Id由资源编排服务在生成模板的时候生成，为UUID。由于模板名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的模板，删除，再重新创建一个同名模板。对于团队并行开发，用户可能希望确保，当前我操作的模板就是我认为的那个，而不是其他队友删除后创建的同名模板。因此，使用ID就可以做到强匹配。资源编排服务保证每次创建的模板所对应的ID都不相同，更新不会影响ID。如果给与的template_id和当前模板管理的ID不一致，则返回400
     * 
     * ShowTemplateVersionMetadata返回的信息只包含模板版本元数据信息（具体摘要信息见ShowTemplateVersionMetadataResponseBody），若用户需要了解模板版本内容，请调用ShowTemplateVersionContent
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取模板版本元数据
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)
     * @param {string} templateName 用户希望创建的模板名称
     * @param {string} versionId 模板版本ID，以大写V开头，每次创建模板版本，模板版本ID数字部分会自增加一
     * @param {string} [templateId] 模板的ID。当template_id存在时，模板服务会检查template_id是否和template_name匹配，不匹配会返回400
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTemplateVersionMetadata(showTemplateVersionMetadataRequest?: ShowTemplateVersionMetadataRequest): Promise<ShowTemplateVersionMetadataResponse> {
        const options = ParamCreater().showTemplateVersionMetadata(showTemplateVersionMetadataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新模板元数据（UpdateTemplateMetadata）
     * 
     * 此API用于更新模板元数据
     * 
     * * 此api只支持更新模板描述
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新模板元数据
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)
     * @param {string} templateName 用户希望创建的模板名称
     * @param {UpdateTemplateMetadataRequestBody} updateTemplateMetadataRequestBody 更新模板元数据API请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTemplateMetadata(updateTemplateMetadataRequest?: UpdateTemplateMetadataRequest): Promise<UpdateTemplateMetadataResponse> {
        const options = ParamCreater().updateTemplateMetadata(updateTemplateMetadataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 执行执行计划（ApplyExecutionPlan）
         * 
         * 此API用于执行一个执行计划
         * 
         * * 当执行请求接受后，执行计划状态将变为&#x60;APPLY_IN_PROGRESS&#x60;，后台会进行异步处理。
         * * 当执行结束后，执行计划状态将变为&#x60;APPLIED&#x60;。
         * * 用户可以调用GetStackMetadata查询资源栈的状态（status）来跟踪资源栈部署情况以及确认本次执行结果是否成功。
         * 
         * 如果不希望通过执行计划进行部署操作，也可以选择调用DeployStack进行直接部署
         * 
         * 关于执行计划的过期失效：
         *   1. 若指定资源栈下有多个执行计划，则在执行某个执行计划后（无论结果是否成功），剩余所有的执行计划将过期失效；
         *   2. 若调用ApplyExecutionPlan时，指定的执行计划已经过期失效，则返回403
         * 
         * 若资源栈状态处于非终态（即以&#x60;IN_PROGRESS&#x60;结尾，详细见下方）状态时，则不允许执行执行计划，并返回403。非终态状态包括但不限于以下状态：
         *   * 正在部署（DEPLOYMENT_IN_PROGRESS）
         *   * 正在删除（DELETION_IN_PROGRESS）
         *   * 正在回滚（ROLLBACK_IN_PROGRESS）
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

            let body: any;
            
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
         * 创建执行计划（CreateExecutionPlan）
         * 
         * 此API用于在指定的资源栈下生成一个执行计划，执行计划描述了当前资源栈中记录的资源状态和模板描述的目的资源状态之间的区别（如，资源A将以以下配置文件生成，资源B将以下参数从XXX修改成YYY）
         * 
         * 调用此API触发创建执行计划之后，可以通过GetExecutionPlanMetadata来跟踪执行计划的状态
         * 当执行计划状态为&#x60;AVAILABLE&#x60;时，可以通过GetExecutionPlan获取本次执行计划的结果
         * 
         * 执行计划不会做过多深层的检查和校验，如用户是否有权限生成、修改资源等
         * 
         * **注意：**
         *   * 若指定资源栈不存在，则返回404
         *   * 若请求中不含有template_body和template_uri，则返回400
         *   * 若资源栈进行了某次部署操作，则在该次部署操作前生成的执行计划将全部失效
         *   * 执行计划只代表生成时刻的结果，若执行计划生成后，用户手动修改资源状态，则执行计划不会自动更新
         *   * 若资源栈状态处于&#x60;DEPLOYMENT_IN_PROGRESS&#x60;、&#x60;ROLLBACK_IN_PROGRESS&#x60;、&#x60;DELETION_IN_PROGRESS&#x60;等状态时，则不允许创建执行计划，并返回403
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

            let body: any;
            
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
         * 删除执行计划（DeleteExecutionPlan）
         * 
         * 删除指定的执行计划
         * 
         * 若执行计划状态处于&#x60;CREATION_IN_PROGRESS&#x60;、&#x60;APPLY_IN_PROGRESS&#x60;状态时，则不允许删除并返回403
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
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let stackName;
            
            let executionPlanName;
            
            let stackId;
            
            let executionPlanId;

            if (deleteExecutionPlanRequest !== null && deleteExecutionPlanRequest !== undefined) {
                if (deleteExecutionPlanRequest instanceof DeleteExecutionPlanRequest) {
                    clientRequestId = deleteExecutionPlanRequest.clientRequestId;
                    projectId = deleteExecutionPlanRequest.projectId;
                    stackName = deleteExecutionPlanRequest.stackName;
                    executionPlanName = deleteExecutionPlanRequest.executionPlanName;
                    stackId = deleteExecutionPlanRequest.stackId;
                    executionPlanId = deleteExecutionPlanRequest.executionPlanId;
                } else {
                    clientRequestId = deleteExecutionPlanRequest['Client-Request-Id'];
                    projectId = deleteExecutionPlanRequest['project_id'];
                    stackName = deleteExecutionPlanRequest['stack_name'];
                    executionPlanName = deleteExecutionPlanRequest['execution_plan_name'];
                    stackId = deleteExecutionPlanRequest['stack_id'];
                    executionPlanId = deleteExecutionPlanRequest['execution_plan_id'];
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
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'stack_name': stackName,'execution_plan_name': executionPlanName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 预估执行计划价格（EstimateExecutionPlanPrice）
         * 
         * 此API可以基于一份已有的执行计划中增量的资源进行询价，当前支持询价的计费模式有包周期计费、按需计费、免费，暂不支持其他形式的计费模式，例如竞价计费模式等。
         * 
         * 注：
         *   * 由于某些资源的属性值含有默认值，且该属性和询价参数相关。若用户的模板中描述的资源没有声明这些属性，则询价结果可能存在偏差。
         *   * 询价结果仅为预估结果，具体请以实际为准。
         *   * 若用户在模板中使用了depends_on参数，如A资源询价必要字段依赖于B资源的创建，则A资源不支持询价。
         *   * 暂不支持传入data sources的flavor.id的场景的询价。
         *   * 暂不支持镜像询价。
         *   * 模板中询价的资源的个数是有限制的。当前一个模板中最多支持12个包周期计费资源和24个按需计费资源。
         *   * 支持询价的资源列表和询价必要参数
         *       * huaweicloud_cce_cluster: 
         *           * 支持的计费模式：包周期、按需
         *       * huaweicloud_css_cluster:
         *           * 支持的计费模式：按需
         *       * huaweicloud_evs_volume: 
         *           * 支持的计费模式：包周期、按需
         *           * 询价必要参数：size（磁盘规格）
         *       * huaweicloud_compute_instance: 
         *           * 支持的计费模式：包周期、按需
         *           * 询价必要参数：flavor_id（规格ID）、flavor_name（规格名称，flavor_id和flavor_name至少给出一个）、system_disk_size（系统磁盘大小）
         *       * huaweicloud_vpc_bandwidth:
         *           * 支持的计费模式：按需
         *           * 询价必要参数：charge_mode仅支持bandwidth
         *       * huaweicloud_vpc_eip: 
         *           * 支持的计费模式：包周期、按需
         *           * 询价必要参数：bandwidth.size（带宽大小）
         *       * huaweicloud_gaussdb_redis_instance: 
         *           * 支持的计费模式：包周期、按需
         *       * huaweicloud_nat_gateway: 
         *           * 支持的计费模式：按需
         *       * huaweicloud_rds_instance: 
         *           * 支持的计费模式：包周期、按需
         *       * huaweicloud_sfs_turbo: 
         *           * 支持的计费模式：按需
         *           * 询价必要参数：share_type（文件系统类型）
         *       * huaweicloud_dms_kafka_instance: 
         *           * 支持的计费模式：按需
         *           * 询价必要参数：flavor_id（规格ID）、product_id（产品ID。flavor_id和product_id至少给出一个。）、storage_space（存储容量）
         *       * huaweicloud_dcs_instance: 
         *           * 支持的计费模式：包周期、按需
         *       * huaweicloud_gaussdb_mysql_instance: 
         *           * 支持的计费模式：包周期、按需
         *           * 询价必要参数：proxy_node_number（代理节点数量）、volume_size（挂载卷的存储空间）
         *       * huaweicloud_vpc: 
         *           * 支持的计费模式：免费
         *       * huaweicloud_drs_job: 
         *           * 支持的计费模式：按需
         *       * huaweicloud_apig_instance: 
         *           * 支持的计费模式：按需
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
                headers: {}
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
         * 获取执行计划（GetExecutionPlan）
         * 
         * 此API用于获取指定执行计划的详细内容（即执行计划项目），用户可通过此API得知指定执行计划在执行后，资源栈中的资源会发生何种变化
         * 
         * 若执行计划状态为&#x60;CREATION_IN_PROGRESS&#x60;或&#x60;CREATION_FAILED&#x60;，则不返回执行计划项目列表
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
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let stackName;
            
            let executionPlanName;
            
            let stackId;
            
            let executionPlanId;

            if (getExecutionPlanRequest !== null && getExecutionPlanRequest !== undefined) {
                if (getExecutionPlanRequest instanceof GetExecutionPlanRequest) {
                    clientRequestId = getExecutionPlanRequest.clientRequestId;
                    projectId = getExecutionPlanRequest.projectId;
                    stackName = getExecutionPlanRequest.stackName;
                    executionPlanName = getExecutionPlanRequest.executionPlanName;
                    stackId = getExecutionPlanRequest.stackId;
                    executionPlanId = getExecutionPlanRequest.executionPlanId;
                } else {
                    clientRequestId = getExecutionPlanRequest['Client-Request-Id'];
                    projectId = getExecutionPlanRequest['project_id'];
                    stackName = getExecutionPlanRequest['stack_name'];
                    executionPlanName = getExecutionPlanRequest['execution_plan_name'];
                    stackId = getExecutionPlanRequest['stack_id'];
                    executionPlanId = getExecutionPlanRequest['execution_plan_id'];
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
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'stack_name': stackName,'execution_plan_name': executionPlanName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取执行计划元数据（GetExecutionPlanMetadata）
         * 
         * 该API可以获取指定执行计划的元数据，包括资源栈ID、资源栈名称、执行计划ID、执行计划名称、执行计划描述、执行计划的创建时间和执行时间、执行计划状态等信息。
         * 
         * 具体信息见GetExecutionPlanMetadataResponseBody。
         * 
         * 如果需要获取执行计划的具体内容，请调用GetExecutionPlan。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getExecutionPlanMetadata(getExecutionPlanMetadataRequest?: GetExecutionPlanMetadataRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/stacks/{stack_name}/execution-plans/{execution_plan_name}/metadata",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let stackName;
            
            let executionPlanName;
            
            let stackId;
            
            let executionPlanId;

            if (getExecutionPlanMetadataRequest !== null && getExecutionPlanMetadataRequest !== undefined) {
                if (getExecutionPlanMetadataRequest instanceof GetExecutionPlanMetadataRequest) {
                    clientRequestId = getExecutionPlanMetadataRequest.clientRequestId;
                    projectId = getExecutionPlanMetadataRequest.projectId;
                    stackName = getExecutionPlanMetadataRequest.stackName;
                    executionPlanName = getExecutionPlanMetadataRequest.executionPlanName;
                    stackId = getExecutionPlanMetadataRequest.stackId;
                    executionPlanId = getExecutionPlanMetadataRequest.executionPlanId;
                } else {
                    clientRequestId = getExecutionPlanMetadataRequest['Client-Request-Id'];
                    projectId = getExecutionPlanMetadataRequest['project_id'];
                    stackName = getExecutionPlanMetadataRequest['stack_name'];
                    executionPlanName = getExecutionPlanMetadataRequest['execution_plan_name'];
                    stackId = getExecutionPlanMetadataRequest['stack_id'];
                    executionPlanId = getExecutionPlanMetadataRequest['execution_plan_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling getExecutionPlanMetadata.');
            }
            if (stackName === null || stackName === undefined) {
            throw new RequiredError('stackName','Required parameter stackName was null or undefined when calling getExecutionPlanMetadata.');
            }
            if (executionPlanName === null || executionPlanName === undefined) {
            throw new RequiredError('executionPlanName','Required parameter executionPlanName was null or undefined when calling getExecutionPlanMetadata.');
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
         * 列举执行计划（ListExecutionPlans）
         * 
         * 列举当前局点下用户指定资源栈下所有的执行计划
         * 
         *   * 默认按照生成时间排序，最早生成的在最前
         *   * 注意：目前暂时返回全量执行计划信息，即不支持分页
         *   * 如果指定的资源栈下没有任何执行计划，则返回空list
         *   * 如果指定的资源栈不存在，则返回404
         * 
         * ListExecutionPlans返回的只有摘要信息（具体摘要信息见ListExecutionPlansResponseBody），如果用户需要详细的执行计划元数据请调用GetExecutionPlanMetadata
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
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let stackName;
            
            let stackId;

            if (listExecutionPlansRequest !== null && listExecutionPlansRequest !== undefined) {
                if (listExecutionPlansRequest instanceof ListExecutionPlansRequest) {
                    clientRequestId = listExecutionPlansRequest.clientRequestId;
                    projectId = listExecutionPlansRequest.projectId;
                    stackName = listExecutionPlansRequest.stackName;
                    stackId = listExecutionPlansRequest.stackId;
                } else {
                    clientRequestId = listExecutionPlansRequest['Client-Request-Id'];
                    projectId = listExecutionPlansRequest['project_id'];
                    stackName = listExecutionPlansRequest['stack_name'];
                    stackId = listExecutionPlansRequest['stack_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listExecutionPlans.');
            }
            if (stackName === null || stackName === undefined) {
            throw new RequiredError('stackName','Required parameter stackName was null or undefined when calling listExecutionPlans.');
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
         * 继续部署资源栈（ContinueDeployStack）
         * 
         * 此API用于继续部署一个已有的资源栈
         * 
         * * 如果资源栈当前可以继续部署，即处于&#x60;DEPLOYMENT_FAILED&#x60;，则返回202与对应生成的deploymentId，否则将不允许继续部署并返回相应的错误码
         * 
         * * 继续部署操作依然有可能部署失败，用户可以从ListStackEvents获取对应的log，解决后可再次调用此API触发继续部署
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        continueDeployStack(continueDeployStackRequest?: ContinueDeployStackRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/stacks/{stack_name}/continuations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clientRequestId;
            
            let projectId;
            
            let stackName;

            if (continueDeployStackRequest !== null && continueDeployStackRequest !== undefined) {
                if (continueDeployStackRequest instanceof ContinueDeployStackRequest) {
                    clientRequestId = continueDeployStackRequest.clientRequestId;
                    projectId = continueDeployStackRequest.projectId;
                    stackName = continueDeployStackRequest.stackName;
                    body = continueDeployStackRequest.body
                } else {
                    clientRequestId = continueDeployStackRequest['Client-Request-Id'];
                    projectId = continueDeployStackRequest['project_id'];
                    stackName = continueDeployStackRequest['stack_name'];
                    body = continueDeployStackRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling continueDeployStack.');
            }
            if (stackName === null || stackName === undefined) {
            throw new RequiredError('stackName','Required parameter stackName was null or undefined when calling continueDeployStack.');
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
         * 继续回滚资源栈（ContinueRollbackStack）
         * 
         * 此API用于继续回滚一个已有的资源栈
         * 
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

            let body: any;
            
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

            let body: any;
            
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
         * 删除资源栈（DeleteStack）
         * 
         * 此API用于删除某个资源栈
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
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let stackName;
            
            let stackId;

            if (deleteStackRequest !== null && deleteStackRequest !== undefined) {
                if (deleteStackRequest instanceof DeleteStackRequest) {
                    clientRequestId = deleteStackRequest.clientRequestId;
                    projectId = deleteStackRequest.projectId;
                    stackName = deleteStackRequest.stackName;
                    stackId = deleteStackRequest.stackId;
                } else {
                    clientRequestId = deleteStackRequest['Client-Request-Id'];
                    projectId = deleteStackRequest['project_id'];
                    stackName = deleteStackRequest['stack_name'];
                    stackId = deleteStackRequest['stack_id'];
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
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'stack_name': stackName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 部署资源栈（DeployStack）
         * 
         * 此API用于部署一个已有的资源栈
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

            let body: any;
            
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
         * 获取资源栈元数据（GetStackMetadata）
         * 
         * 此API用于获取指定资源栈的元数据，包括资源栈ID、资源栈名称、资源栈描述、创建时间、更新时间、资源栈状态、委托授权等信息。
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
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let stackName;
            
            let stackId;

            if (getStackMetadataRequest !== null && getStackMetadataRequest !== undefined) {
                if (getStackMetadataRequest instanceof GetStackMetadataRequest) {
                    clientRequestId = getStackMetadataRequest.clientRequestId;
                    projectId = getStackMetadataRequest.projectId;
                    stackName = getStackMetadataRequest.stackName;
                    stackId = getStackMetadataRequest.stackId;
                } else {
                    clientRequestId = getStackMetadataRequest['Client-Request-Id'];
                    projectId = getStackMetadataRequest['project_id'];
                    stackName = getStackMetadataRequest['stack_name'];
                    stackId = getStackMetadataRequest['stack_id'];
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
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'stack_name': stackName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取资源栈模板（GetStackTemplate）
         * 
         * 此API用于获取资源栈最近一次部署终态使用的模板。
         * 
         * 注：
         * 当资源栈状态处于非终态（即以&#x60;IN_PROGRESS&#x60;结尾，详细见下方）状态时，资源栈处于转变阶段，此API获取资源栈上一次部署使用的模板。
         * 只有当资源栈状态处于终态（即以&#x60;COMPLETE&#x60;或&#x60;FAILED&#x60;结尾，详细见下方）时，此API获取当前最新一次部署使用的模板。CREATION_COMPLETE除外，此时资源栈没有模板，返回404，并提示模板不存在
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
         * 如果获取成功，则以临时重定向形式返回模板下载链接（OBS Pre Signed地址，有效期为5分钟），大多数的客户端会进行自动重定向并下载模板；
         * 若未进行自动重定向，请参考HTTP的重定向规则获取模板下载链接，手动下载模板。
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
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let stackName;
            
            let stackId;

            if (getStackTemplateRequest !== null && getStackTemplateRequest !== undefined) {
                if (getStackTemplateRequest instanceof GetStackTemplateRequest) {
                    clientRequestId = getStackTemplateRequest.clientRequestId;
                    projectId = getStackTemplateRequest.projectId;
                    stackName = getStackTemplateRequest.stackName;
                    stackId = getStackTemplateRequest.stackId;
                } else {
                    clientRequestId = getStackTemplateRequest['Client-Request-Id'];
                    projectId = getStackTemplateRequest['project_id'];
                    stackName = getStackTemplateRequest['stack_name'];
                    stackId = getStackTemplateRequest['stack_id'];
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
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'stack_name': stackName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列举资源栈事件（ListStackEvents）
         * 
         * 此API用于列举资源栈某一次或全部的部署事件
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
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let stackName;
            
            let stackId;
            
            let deploymentId;
            
            let filter;
            
            let field;

            if (listStackEventsRequest !== null && listStackEventsRequest !== undefined) {
                if (listStackEventsRequest instanceof ListStackEventsRequest) {
                    clientRequestId = listStackEventsRequest.clientRequestId;
                    projectId = listStackEventsRequest.projectId;
                    stackName = listStackEventsRequest.stackName;
                    stackId = listStackEventsRequest.stackId;
                    deploymentId = listStackEventsRequest.deploymentId;
                    filter = listStackEventsRequest.filter;
                    field = listStackEventsRequest.field;
                } else {
                    clientRequestId = listStackEventsRequest['Client-Request-Id'];
                    projectId = listStackEventsRequest['project_id'];
                    stackName = listStackEventsRequest['stack_name'];
                    stackId = listStackEventsRequest['stack_id'];
                    deploymentId = listStackEventsRequest['deployment_id'];
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
         * 列举资源栈输出（ListStackOutputs）
         * 
         * 此API用于列举该资源栈的所有输出
         * 
         * 资源栈输出为用户在模板中定义的 output 语句块在部署结束后所产生的返回信息，用户可在部署结束后，调用此API获取其具体的输出信息
         * 
         * 当资源栈状态处于非终态（状态以&#x60;IN_PROGRESS&#x60;结尾）状态时，此API将返回空。非终态包括但不限于以下状态：
         *   * 正在部署（DEPLOYMENT_IN_PROGRESS）
         *   * 正在删除（DELETION_IN_PROGRESS）
         *   * 正在回滚（ROLLBACK_IN_PROGRESS）
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
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let stackName;
            
            let stackId;

            if (listStackOutputsRequest !== null && listStackOutputsRequest !== undefined) {
                if (listStackOutputsRequest instanceof ListStackOutputsRequest) {
                    clientRequestId = listStackOutputsRequest.clientRequestId;
                    projectId = listStackOutputsRequest.projectId;
                    stackName = listStackOutputsRequest.stackName;
                    stackId = listStackOutputsRequest.stackId;
                } else {
                    clientRequestId = listStackOutputsRequest['Client-Request-Id'];
                    projectId = listStackOutputsRequest['project_id'];
                    stackName = listStackOutputsRequest['stack_name'];
                    stackId = listStackOutputsRequest['stack_id'];
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
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'stack_name': stackName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列举资源栈资源（ListStackResources）
         * 
         * 此API用于列举资源栈中当前管理的所有资源的信息
         * 
         * 当资源栈处于非终态时，仅输出资源栈下资源的简要信息，包含逻辑资源名称（logical_resource_name），逻辑资源类型（logical_resource_type），物理资源id（physical_resource_id），物理资源名称（physical_resource_name），资源状态（status）等信息；当资源栈处于终态时，将额外输出具体信息，如资源属性（resource_attributes）
         * 
         * 非终态包括但不限于以下状态：
         *   * 正在部署（DEPLOYMENT_IN_PROGRESS）
         *   * 正在删除（DELETION_IN_PROGRESS）
         *   * 正在回滚（ROLLBACK_IN_PROGRESS）
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
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let stackName;
            
            let stackId;

            if (listStackResourcesRequest !== null && listStackResourcesRequest !== undefined) {
                if (listStackResourcesRequest instanceof ListStackResourcesRequest) {
                    clientRequestId = listStackResourcesRequest.clientRequestId;
                    projectId = listStackResourcesRequest.projectId;
                    stackName = listStackResourcesRequest.stackName;
                    stackId = listStackResourcesRequest.stackId;
                } else {
                    clientRequestId = listStackResourcesRequest['Client-Request-Id'];
                    projectId = listStackResourcesRequest['project_id'];
                    stackName = listStackResourcesRequest['stack_name'];
                    stackId = listStackResourcesRequest['stack_id'];
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
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'stack_name': stackName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列举资源栈（ListStacks）
         * 
         * 此API用于列举当前局点下用户所有的资源栈
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
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clientRequestId;
            
            let projectId;

            if (listStacksRequest !== null && listStacksRequest !== undefined) {
                if (listStacksRequest instanceof ListStacksRequest) {
                    clientRequestId = listStacksRequest.clientRequestId;
                    projectId = listStacksRequest.projectId;
                } else {
                    clientRequestId = listStacksRequest['Client-Request-Id'];
                    projectId = listStacksRequest['project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listStacks.');
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新资源栈的属性，该API可以根据用户给予的信息对资源栈的属性进行更新，可以更新资源栈的“description”、“enable_deletion_protection”、\&quot;enable_auto_rollback\&quot;、\&quot;agencies\&quot;四个属性中的一个或多个
         * 
         * 该API只会更新用户给予的信息中所涉及的字段；若某字段未给予，则不会对该资源栈属性进行更新
         * 
         * 注：所有属性的更新都是覆盖式更新。即，所给予的参数将被完全覆盖至资源栈已有的属性上
         * 
         * 例如，若要新增agencies，请通过GetStackMetadata获取该资源栈原有的agencies信息，将新旧agencies信息进行整合后再调用UpdateStack
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

            let body: any;
            
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
         * 解析模板参数（ParseTemplateVariables）
         * 
         * 此API用于解析用户输入的模板中的参数（variable），将解析模板中的所有variable块并返回
         * 
         * * 若用户传入的模板中定义了variable参数，则返回200和所有variable
         * * 若用户传入的模板中没有定义variable参数，则返回200和空对象
         * * 若用户请求非法或传入的模板非法，则返回400
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

            let body: any;
            
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
         * 删除模板（DeleteTemplate）
         * 
         * 此API用于删除某个模板以及模板下的全部模板版本
         * **请谨慎操作，删除模板将会删除模板下的所有模板版本。**
         * 
         *   * tempate_id是模板的唯一Id。此Id由资源编排服务在生成模板的时候生成，为UUID。由于模板名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的模板，删除，再重新创建一个同名模板。对于团队并行开发，用户可能希望确保，当前我操作的模板就是我认为的那个，而不是其他队友删除后创建的同名模板。因此，使用ID就可以做到强匹配。资源编排服务保证每次创建的模板所对应的ID都不相同，更新不会影响ID。如果给与的template_id和当前模板管理的ID不一致，则返回400
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTemplate(deleteTemplateRequest?: DeleteTemplateRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/templates/{template_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let templateName;
            
            let templateId;

            if (deleteTemplateRequest !== null && deleteTemplateRequest !== undefined) {
                if (deleteTemplateRequest instanceof DeleteTemplateRequest) {
                    clientRequestId = deleteTemplateRequest.clientRequestId;
                    projectId = deleteTemplateRequest.projectId;
                    templateName = deleteTemplateRequest.templateName;
                    templateId = deleteTemplateRequest.templateId;
                } else {
                    clientRequestId = deleteTemplateRequest['Client-Request-Id'];
                    projectId = deleteTemplateRequest['project_id'];
                    templateName = deleteTemplateRequest['template_name'];
                    templateId = deleteTemplateRequest['template_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteTemplate.');
            }
            if (templateName === null || templateName === undefined) {
            throw new RequiredError('templateName','Required parameter templateName was null or undefined when calling deleteTemplate.');
            }
            if (templateId !== null && templateId !== undefined) {
                localVarQueryParameter['template_id'] = templateId;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'template_name': templateName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除模板版本（DeleteTemplateVersion）
         * 
         * 此API用于删除某个模板版本
         * 
         *   * tempate_id是模板的唯一Id。此Id由资源编排服务在生成模板的时候生成，为UUID。由于模板名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的模板，删除，再重新创建一个同名模板。对于团队并行开发，用户可能希望确保，当前我操作的模板就是我认为的那个，而不是其他队友删除后创建的同名模板。因此，使用ID就可以做到强匹配。资源编排服务保证每次创建的模板所对应的ID都不相同，更新不会影响ID。如果给与的template_id和当前模板管理的ID不一致，则返回400
         *   * 若模板下只存在唯一模板版本，此模板版本将无法被删除，如果需要删除此模板版本，请调用DeleteTemplate。模板服务不允许存在没有模板版本的模板
         * 
         * **请谨慎操作**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTemplateVersion(deleteTemplateVersionRequest?: DeleteTemplateVersionRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/templates/{template_name}/versions/{version_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let templateName;
            
            let versionId;
            
            let templateId;

            if (deleteTemplateVersionRequest !== null && deleteTemplateVersionRequest !== undefined) {
                if (deleteTemplateVersionRequest instanceof DeleteTemplateVersionRequest) {
                    clientRequestId = deleteTemplateVersionRequest.clientRequestId;
                    projectId = deleteTemplateVersionRequest.projectId;
                    templateName = deleteTemplateVersionRequest.templateName;
                    versionId = deleteTemplateVersionRequest.versionId;
                    templateId = deleteTemplateVersionRequest.templateId;
                } else {
                    clientRequestId = deleteTemplateVersionRequest['Client-Request-Id'];
                    projectId = deleteTemplateVersionRequest['project_id'];
                    templateName = deleteTemplateVersionRequest['template_name'];
                    versionId = deleteTemplateVersionRequest['version_id'];
                    templateId = deleteTemplateVersionRequest['template_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteTemplateVersion.');
            }
            if (templateName === null || templateName === undefined) {
            throw new RequiredError('templateName','Required parameter templateName was null or undefined when calling deleteTemplateVersion.');
            }
            if (versionId === null || versionId === undefined) {
            throw new RequiredError('versionId','Required parameter versionId was null or undefined when calling deleteTemplateVersion.');
            }
            if (templateId !== null && templateId !== undefined) {
                localVarQueryParameter['template_id'] = templateId;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'template_name': templateName,'version_id': versionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列举模板版本信息（ListTemplateVersions）
         * 
         * 此API用于列举模板下所有的模板版本信息
         * 
         *   * 默认按照生成时间排序，最早生成的模板排列在最前面
         *   * 注意：目前返回全量模板版本信息，即不支持分页
         *   * 如果没有任何模板版本，则返回空list
         *   * tempate_id是模板的唯一Id。此Id由资源编排服务在生成模板的时候生成，为UUID。由于模板名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的模板，删除，再重新创建一个同名模板。对于团队并行开发，用户可能希望确保，当前我操作的模板就是我认为的那个，而不是其他队友删除后创建的同名模板。因此，使用ID就可以做到强匹配。资源编排服务保证每次创建的模板所对应的ID都不相同，更新不会影响ID。如果给与的template_id和当前模板管理的ID不一致，则返回400
         *   * 若模板不存在则返回404
         * 
         * ListTemplateVersions返回的信息只包含模板版本摘要信息（具体摘要信息见ListTemplateVersionsResponseBody），若用户需要了解模板版本内容，请调用ShowTemplateVersionContent
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTemplateVersions(listTemplateVersionsRequest?: ListTemplateVersionsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/templates/{template_name}/versions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let templateName;
            
            let templateId;

            if (listTemplateVersionsRequest !== null && listTemplateVersionsRequest !== undefined) {
                if (listTemplateVersionsRequest instanceof ListTemplateVersionsRequest) {
                    clientRequestId = listTemplateVersionsRequest.clientRequestId;
                    projectId = listTemplateVersionsRequest.projectId;
                    templateName = listTemplateVersionsRequest.templateName;
                    templateId = listTemplateVersionsRequest.templateId;
                } else {
                    clientRequestId = listTemplateVersionsRequest['Client-Request-Id'];
                    projectId = listTemplateVersionsRequest['project_id'];
                    templateName = listTemplateVersionsRequest['template_name'];
                    templateId = listTemplateVersionsRequest['template_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listTemplateVersions.');
            }
            if (templateName === null || templateName === undefined) {
            throw new RequiredError('templateName','Required parameter templateName was null or undefined when calling listTemplateVersions.');
            }
            if (templateId !== null && templateId !== undefined) {
                localVarQueryParameter['template_id'] = templateId;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'template_name': templateName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列举模板（ListTemplates）
         * 
         * 此API用于列举当前局点下用户所有的模板
         * 
         *   * 默认按照生成时间排序，最早生成的模板排列在最前面
         *   * 注意：目前返回全量模板信息，即不支持分页
         *   * 如果没有任何模板，则返回空list
         *   * 若用户需要详细的模板版本信息，请调用ListTemplateVersions
         * 
         * ListTemplates返回的信息只包含模板摘要信息（具体摘要信息见ListTemplatesResponseBody），若用户需要详细的某个模板信息，请调用ShowTemplateMetadata
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTemplates(listTemplatesRequest?: ListTemplatesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clientRequestId;
            
            let projectId;

            if (listTemplatesRequest !== null && listTemplatesRequest !== undefined) {
                if (listTemplatesRequest instanceof ListTemplatesRequest) {
                    clientRequestId = listTemplatesRequest.clientRequestId;
                    projectId = listTemplatesRequest.projectId;
                } else {
                    clientRequestId = listTemplatesRequest['Client-Request-Id'];
                    projectId = listTemplatesRequest['project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listTemplates.');
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取模板元数据（ShowTemplateMetadata）
         * 
         * 此API用于获取当前模板的元数据信息
         * 
         * 具体信息见ShowTemplateMetadataResponseBody，若想查看模板下全部模板版本，请调用ListTemplateVersions。
         * 
         *   * tempate_id是模板的唯一Id。此Id由资源编排服务在生成模板的时候生成，为UUID。由于模板名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的模板，删除，再重新创建一个同名模板。对于团队并行开发，用户可能希望确保，当前我操作的模板就是我认为的那个，而不是其他队友删除后创建的同名模板。因此，使用ID就可以做到强匹配。资源编排服务保证每次创建的模板所对应的ID都不相同，更新不会影响ID。如果给与的template_id和当前模板管理的ID不一致，则返回400
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTemplateMetadata(showTemplateMetadataRequest?: ShowTemplateMetadataRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/templates/{template_name}/metadata",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let templateName;
            
            let templateId;

            if (showTemplateMetadataRequest !== null && showTemplateMetadataRequest !== undefined) {
                if (showTemplateMetadataRequest instanceof ShowTemplateMetadataRequest) {
                    clientRequestId = showTemplateMetadataRequest.clientRequestId;
                    projectId = showTemplateMetadataRequest.projectId;
                    templateName = showTemplateMetadataRequest.templateName;
                    templateId = showTemplateMetadataRequest.templateId;
                } else {
                    clientRequestId = showTemplateMetadataRequest['Client-Request-Id'];
                    projectId = showTemplateMetadataRequest['project_id'];
                    templateName = showTemplateMetadataRequest['template_name'];
                    templateId = showTemplateMetadataRequest['template_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showTemplateMetadata.');
            }
            if (templateName === null || templateName === undefined) {
            throw new RequiredError('templateName','Required parameter templateName was null or undefined when calling showTemplateMetadata.');
            }
            if (templateId !== null && templateId !== undefined) {
                localVarQueryParameter['template_id'] = templateId;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'template_name': templateName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取模板版本内容（ShowTemplateVersionContent）
         * 
         * 此API用于获取用户的模板版本内容
         * 
         *   * tempate_id是模板的唯一Id。此Id由资源编排服务在生成模板的时候生成，为UUID。由于模板名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的模板，删除，再重新创建一个同名模板。对于团队并行开发，用户可能希望确保，当前我操作的模板就是我认为的那个，而不是其他队友删除后创建的同名模板。因此，使用ID就可以做到强匹配。资源编排服务保证每次创建的模板所对应的ID都不相同，更新不会影响ID。如果给与的template_id和当前模板管理的ID不一致，则返回400
         *   * 此api会以临时重定向形式返回模板内容的下载链接，用户通过下载获取模板版本内容（OBS Pre Signed地址，有效期为5分钟）
         * 
         * ShowTemplateVersionContent返回的信息只包含模板版本内容，若想知道模板版本的元数据，请调用ShowTemplateVersionMetadata
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTemplateVersionContent(showTemplateVersionContentRequest?: ShowTemplateVersionContentRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/templates/{template_name}/versions/{version_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let templateName;
            
            let versionId;
            
            let templateId;

            if (showTemplateVersionContentRequest !== null && showTemplateVersionContentRequest !== undefined) {
                if (showTemplateVersionContentRequest instanceof ShowTemplateVersionContentRequest) {
                    clientRequestId = showTemplateVersionContentRequest.clientRequestId;
                    projectId = showTemplateVersionContentRequest.projectId;
                    templateName = showTemplateVersionContentRequest.templateName;
                    versionId = showTemplateVersionContentRequest.versionId;
                    templateId = showTemplateVersionContentRequest.templateId;
                } else {
                    clientRequestId = showTemplateVersionContentRequest['Client-Request-Id'];
                    projectId = showTemplateVersionContentRequest['project_id'];
                    templateName = showTemplateVersionContentRequest['template_name'];
                    versionId = showTemplateVersionContentRequest['version_id'];
                    templateId = showTemplateVersionContentRequest['template_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showTemplateVersionContent.');
            }
            if (templateName === null || templateName === undefined) {
            throw new RequiredError('templateName','Required parameter templateName was null or undefined when calling showTemplateVersionContent.');
            }
            if (versionId === null || versionId === undefined) {
            throw new RequiredError('versionId','Required parameter versionId was null or undefined when calling showTemplateVersionContent.');
            }
            if (templateId !== null && templateId !== undefined) {
                localVarQueryParameter['template_id'] = templateId;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'template_name': templateName,'version_id': versionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取模板版本元数据（ShowTemplateVersionMetadata）
         * 
         * 此API用于展示某一版本模板的元数据
         * 
         *   * tempate_id是模板的唯一Id。此Id由资源编排服务在生成模板的时候生成，为UUID。由于模板名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的模板，删除，再重新创建一个同名模板。对于团队并行开发，用户可能希望确保，当前我操作的模板就是我认为的那个，而不是其他队友删除后创建的同名模板。因此，使用ID就可以做到强匹配。资源编排服务保证每次创建的模板所对应的ID都不相同，更新不会影响ID。如果给与的template_id和当前模板管理的ID不一致，则返回400
         * 
         * ShowTemplateVersionMetadata返回的信息只包含模板版本元数据信息（具体摘要信息见ShowTemplateVersionMetadataResponseBody），若用户需要了解模板版本内容，请调用ShowTemplateVersionContent
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTemplateVersionMetadata(showTemplateVersionMetadataRequest?: ShowTemplateVersionMetadataRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/templates/{template_name}/versions/{version_id}/metadata",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let templateName;
            
            let versionId;
            
            let templateId;

            if (showTemplateVersionMetadataRequest !== null && showTemplateVersionMetadataRequest !== undefined) {
                if (showTemplateVersionMetadataRequest instanceof ShowTemplateVersionMetadataRequest) {
                    clientRequestId = showTemplateVersionMetadataRequest.clientRequestId;
                    projectId = showTemplateVersionMetadataRequest.projectId;
                    templateName = showTemplateVersionMetadataRequest.templateName;
                    versionId = showTemplateVersionMetadataRequest.versionId;
                    templateId = showTemplateVersionMetadataRequest.templateId;
                } else {
                    clientRequestId = showTemplateVersionMetadataRequest['Client-Request-Id'];
                    projectId = showTemplateVersionMetadataRequest['project_id'];
                    templateName = showTemplateVersionMetadataRequest['template_name'];
                    versionId = showTemplateVersionMetadataRequest['version_id'];
                    templateId = showTemplateVersionMetadataRequest['template_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showTemplateVersionMetadata.');
            }
            if (templateName === null || templateName === undefined) {
            throw new RequiredError('templateName','Required parameter templateName was null or undefined when calling showTemplateVersionMetadata.');
            }
            if (versionId === null || versionId === undefined) {
            throw new RequiredError('versionId','Required parameter versionId was null or undefined when calling showTemplateVersionMetadata.');
            }
            if (templateId !== null && templateId !== undefined) {
                localVarQueryParameter['template_id'] = templateId;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'template_name': templateName,'version_id': versionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新模板元数据（UpdateTemplateMetadata）
         * 
         * 此API用于更新模板元数据
         * 
         * * 此api只支持更新模板描述
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTemplateMetadata(updateTemplateMetadataRequest?: UpdateTemplateMetadataRequest) {
            const options = {
                method: "PATCH",
                url: "/v1/{project_id}/templates/{template_name}/metadata",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clientRequestId;
            
            let projectId;
            
            let templateName;

            if (updateTemplateMetadataRequest !== null && updateTemplateMetadataRequest !== undefined) {
                if (updateTemplateMetadataRequest instanceof UpdateTemplateMetadataRequest) {
                    clientRequestId = updateTemplateMetadataRequest.clientRequestId;
                    projectId = updateTemplateMetadataRequest.projectId;
                    templateName = updateTemplateMetadataRequest.templateName;
                    body = updateTemplateMetadataRequest.body
                } else {
                    clientRequestId = updateTemplateMetadataRequest['Client-Request-Id'];
                    projectId = updateTemplateMetadataRequest['project_id'];
                    templateName = updateTemplateMetadataRequest['template_name'];
                    body = updateTemplateMetadataRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling updateTemplateMetadata.');
            }
            if (templateName === null || templateName === undefined) {
            throw new RequiredError('templateName','Required parameter templateName was null or undefined when calling updateTemplateMetadata.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'template_name': templateName, };
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