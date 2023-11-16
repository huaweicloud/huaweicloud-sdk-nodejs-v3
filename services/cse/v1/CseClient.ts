import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { ClusterNode } from './model/ClusterNode';
import { CreateBussinessScene } from './model/CreateBussinessScene';
import { CreateBussinessSceneSpec } from './model/CreateBussinessSceneSpec';
import { CreateBussinessSceneSpecMatches } from './model/CreateBussinessSceneSpecMatches';
import { CreateEngineRequest } from './model/CreateEngineRequest';
import { CreateEngineResponse } from './model/CreateEngineResponse';
import { CreateGovPolicy } from './model/CreateGovPolicy';
import { CreateGovernancePolicyRequest } from './model/CreateGovernancePolicyRequest';
import { CreateGovernancePolicyResponse } from './model/CreateGovernancePolicyResponse';
import { CreateKieReq } from './model/CreateKieReq';
import { CreateMatch } from './model/CreateMatch';
import { CreateMatchHeaders } from './model/CreateMatchHeaders';
import { CreateMatchHeadersAaaa } from './model/CreateMatchHeadersAaaa';
import { CreateMicroserviceRouteRuleRequest } from './model/CreateMicroserviceRouteRuleRequest';
import { CreateMicroserviceRouteRuleResponse } from './model/CreateMicroserviceRouteRuleResponse';
import { CreateNacosNamespacesRequest } from './model/CreateNacosNamespacesRequest';
import { CreateNacosNamespacesResponse } from './model/CreateNacosNamespacesResponse';
import { CreateRoute } from './model/CreateRoute';
import { CreateRouteTags } from './model/CreateRouteTags';
import { CreateRules } from './model/CreateRules';
import { DeleteEngineRequest } from './model/DeleteEngineRequest';
import { DeleteEngineResponse } from './model/DeleteEngineResponse';
import { DeleteGovernancePolicyRequest } from './model/DeleteGovernancePolicyRequest';
import { DeleteGovernancePolicyResponse } from './model/DeleteGovernancePolicyResponse';
import { DeleteMicroserviceRouteRuleRequest } from './model/DeleteMicroserviceRouteRuleRequest';
import { DeleteMicroserviceRouteRuleResponse } from './model/DeleteMicroserviceRouteRuleResponse';
import { DeleteNacosNamespacesRequest } from './model/DeleteNacosNamespacesRequest';
import { DeleteNacosNamespacesResponse } from './model/DeleteNacosNamespacesResponse';
import { DownloadKieReqBody } from './model/DownloadKieReqBody';
import { DownloadKieRequest } from './model/DownloadKieRequest';
import { DownloadKieResponse } from './model/DownloadKieResponse';
import { DownloadKieResponseBodyMetadata } from './model/DownloadKieResponseBodyMetadata';
import { EngineAdditionalActionReq } from './model/EngineAdditionalActionReq';
import { EngineConfigureReq } from './model/EngineConfigureReq';
import { EngineCreateReq } from './model/EngineCreateReq';
import { EngineExternalEntrypoint } from './model/EngineExternalEntrypoint';
import { EngineModifyReq } from './model/EngineModifyReq';
import { EngineRbacPwd } from './model/EngineRbacPwd';
import { EngineReference } from './model/EngineReference';
import { EngineSimpleInfo } from './model/EngineSimpleInfo';
import { EngineUpdateReq } from './model/EngineUpdateReq';
import { EntrypointItem } from './model/EntrypointItem';
import { FlavorBrief } from './model/FlavorBrief';
import { GovSelector } from './model/GovSelector';
import { ListEnginesRequest } from './model/ListEnginesRequest';
import { ListEnginesResponse } from './model/ListEnginesResponse';
import { ListFlavorsRequest } from './model/ListFlavorsRequest';
import { ListFlavorsResponse } from './model/ListFlavorsResponse';
import { ListGovernancePolicyByPolicyIdRequest } from './model/ListGovernancePolicyByPolicyIdRequest';
import { ListGovernancePolicyByPolicyIdResponse } from './model/ListGovernancePolicyByPolicyIdResponse';
import { ListGovernancePolicyRequest } from './model/ListGovernancePolicyRequest';
import { ListGovernancePolicyResponse } from './model/ListGovernancePolicyResponse';
import { ListGovernancePolicyResponseBody } from './model/ListGovernancePolicyResponseBody';
import { ListGovernancePolicyResponsePolicies } from './model/ListGovernancePolicyResponsePolicies';
import { ListGovernancePolicysRequest } from './model/ListGovernancePolicysRequest';
import { ListGovernancePolicysResponse } from './model/ListGovernancePolicysResponse';
import { ListMicroserviceRouteRuleRequest } from './model/ListMicroserviceRouteRuleRequest';
import { ListMicroserviceRouteRuleResponse } from './model/ListMicroserviceRouteRuleResponse';
import { ListNacosNamespacesRequest } from './model/ListNacosNamespacesRequest';
import { ListNacosNamespacesResponse } from './model/ListNacosNamespacesResponse';
import { ResizeEngineRequest } from './model/ResizeEngineRequest';
import { ResizeEngineResponse } from './model/ResizeEngineResponse';
import { RetryEngineRequest } from './model/RetryEngineRequest';
import { RetryEngineResponse } from './model/RetryEngineResponse';
import { ShowEngineJobRequest } from './model/ShowEngineJobRequest';
import { ShowEngineJobResponse } from './model/ShowEngineJobResponse';
import { ShowEngineRequest } from './model/ShowEngineRequest';
import { ShowEngineResponse } from './model/ShowEngineResponse';
import { Spec } from './model/Spec';
import { SpecClusterNode } from './model/SpecClusterNode';
import { Task } from './model/Task';
import { TaskExecutorBrief } from './model/TaskExecutorBrief';
import { TaskSteps } from './model/TaskSteps';
import { UpdateGovernancePolicyRequest } from './model/UpdateGovernancePolicyRequest';
import { UpdateGovernancePolicyResponse } from './model/UpdateGovernancePolicyResponse';
import { UpdateNacosNamespacesRequest } from './model/UpdateNacosNamespacesRequest';
import { UpdateNacosNamespacesResponse } from './model/UpdateNacosNamespacesResponse';
import { UpgradeEngineConfigRequest } from './model/UpgradeEngineConfigRequest';
import { UpgradeEngineConfigResponse } from './model/UpgradeEngineConfigResponse';
import { UpgradeEngineRequest } from './model/UpgradeEngineRequest';
import { UpgradeEngineResponse } from './model/UpgradeEngineResponse';

export class CseClient {
    public static newBuilder(): ClientBuilder<CseClient> {
            return new ClientBuilder<CseClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 创建微服务引擎专享版。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建微服务引擎专享版
     * @param {EngineCreateReq} createEngineRequestBody 创建微服务专享版请求结构体。
     * @param {string} [xEnterpriseProjectID] 如果不带则默认企业项目为\&quot;default\&quot;，ID为\&quot;0\&quot;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createEngine(createEngineRequest?: CreateEngineRequest): Promise<CreateEngineResponse> {
        const options = ParamCreater().createEngine(createEngineRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建治理策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建治理策略
     * @param {string} contentType 该字段内容填为 \&quot;application/json;charset&#x3D;UTF-8\&quot;。
     * @param {string} xEngineId 微服务引擎专享版的实例ID
     * @param {string} xEnterpriseProjectID 企业项目ID
     * @param {string} kind 治理策略类型
     * @param {CreateGovPolicy} createGovernancePolicyRequestBody 创建治理策略请求结构体。
     * @param {string} [xEnvironment] 所属环境
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createGovernancePolicy(createGovernancePolicyRequest?: CreateGovernancePolicyRequest): Promise<CreateGovernancePolicyResponse> {
        const options = ParamCreater().createGovernancePolicy(createGovernancePolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建灰度发布策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建灰度发布策略
     * @param {string} contentType 该字段内容填为 \&quot;application/json;charset&#x3D;UTF-8\&quot;。
     * @param {string} xEngineId 微服务引擎专享版的实例ID
     * @param {string} xEnterpriseProjectID 企业项目ID
     * @param {string} serviceName 微服务名称
     * @param {Array<CreateRules>} createMicroserviceRouteRuleRequestBody 创建灰度发布策略请求结构体。
     * @param {string} [environment] 所属环境，不填表示&lt;空&gt;环境
     * @param {string} [appId] 所属应用，不填默认为default应用
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createMicroserviceRouteRule(createMicroserviceRouteRuleRequest?: CreateMicroserviceRouteRuleRequest): Promise<CreateMicroserviceRouteRuleResponse> {
        const options = ParamCreater().createMicroserviceRouteRule(createMicroserviceRouteRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除微服务引擎专享版。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除微服务引擎专享版
     * @param {string} engineId 微服务引擎专享版ID
     * @param {string} [xEnterpriseProjectID] 如果不带则默认企业项目为\&quot;default\&quot;，ID为\&quot;0\&quot;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteEngine(deleteEngineRequest?: DeleteEngineRequest): Promise<DeleteEngineResponse> {
        const options = ParamCreater().deleteEngine(deleteEngineRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除治理策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除治理策略
     * @param {string} contentType 该字段内容填为 \&quot;application/json;charset&#x3D;UTF-8\&quot;。
     * @param {string} xEngineId 微服务引擎专享版的实例ID
     * @param {string} xEnterpriseProjectID 企业项目ID
     * @param {string} kind 治理策略类型
     * @param {string} policyId 治理策略id
     * @param {string} [xEnvironment] 所属环境
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteGovernancePolicy(deleteGovernancePolicyRequest?: DeleteGovernancePolicyRequest): Promise<DeleteGovernancePolicyResponse> {
        const options = ParamCreater().deleteGovernancePolicy(deleteGovernancePolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除灰度发布策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除灰度发布策略
     * @param {string} contentType 该字段内容填为 \&quot;application/json;charset&#x3D;UTF-8\&quot;。
     * @param {string} xEngineId 微服务引擎专享版的实例ID
     * @param {string} xEnterpriseProjectID 企业项目ID
     * @param {string} serviceName 微服务名称
     * @param {string} [environment] 所属环境，不填表示&lt;空&gt;环境
     * @param {string} [appId] 所属应用，不填默认为default应用
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteMicroserviceRouteRule(deleteMicroserviceRouteRuleRequest?: DeleteMicroserviceRouteRuleRequest): Promise<DeleteMicroserviceRouteRuleResponse> {
        const options = ParamCreater().deleteMicroserviceRouteRule(deleteMicroserviceRouteRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 导出kie配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导出kie配置
     * @param {string} xEngineId 微服务引擎专享版ID。
     * @param {DownloadKieReqBody} downloadKieRequestBody 导出的配置ID列表，如不填时，按label匹配规则全量导出，如填写的id对应的label不匹配label过滤项，则导出会忽略此id。
     * @param {string} [xEnterpriseProjectID] 如果不带则默认企业项目为\&quot;default\&quot;，ID为\&quot;0\&quot;
     * @param {string} [label] 按label过滤项导出，格式为：{标签key}:{标签value}
     * @param {'exact'} [match] 对label过滤项的匹配选项，如果值为exact：表示严格匹配，包括label个数和内容相等；不填表示包含匹配
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public downloadKie(downloadKieRequest?: DownloadKieRequest): Promise<DownloadKieResponse> {
        const options = ParamCreater().downloadKie(downloadKieRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询微服务引擎列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询微服务引擎列表
     * @param {number} [offset] 偏移量。
     * @param {string} [limit] 每页显示的条目数量。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEngines(listEnginesRequest?: ListEnginesRequest): Promise<ListEnginesResponse> {
        const options = ParamCreater().listEngines(listEnginesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询微服务引擎专享版的规格列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询微服务引擎专享版的规格列表
     * @param {string} [specType] 微服务引擎专享版应用部署类型，查询CSE微服务引擎专享版需要将该值设置为CSE2。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFlavors(listFlavorsRequest?: ListFlavorsRequest): Promise<ListFlavorsResponse> {
        const options = ParamCreater().listFlavors(listFlavorsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定类型治理策略列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定类型治理策略列表
     * @param {string} contentType 该字段内容填为 \&quot;application/json;charset&#x3D;UTF-8\&quot;。
     * @param {string} xEngineId 微服务引擎专享版的实例ID
     * @param {string} xEnterpriseProjectID 企业项目ID
     * @param {string} kind 治理策略类型
     * @param {string} [xEnvironment] 所属环境
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGovernancePolicy(listGovernancePolicyRequest?: ListGovernancePolicyRequest): Promise<ListGovernancePolicyResponse> {
        const options = ParamCreater().listGovernancePolicy(listGovernancePolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询治理策略详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询治理策略详情
     * @param {string} contentType 该字段内容填为 \&quot;application/json;charset&#x3D;UTF-8\&quot;。
     * @param {string} xEngineId 微服务引擎专享版的实例ID
     * @param {string} xEnterpriseProjectID 企业项目ID
     * @param {string} kind 治理策略类型
     * @param {string} policyId 治理策略id
     * @param {string} [xEnvironment] 所属环境
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGovernancePolicyByPolicyId(listGovernancePolicyByPolicyIdRequest?: ListGovernancePolicyByPolicyIdRequest): Promise<ListGovernancePolicyByPolicyIdResponse> {
        const options = ParamCreater().listGovernancePolicyByPolicyId(listGovernancePolicyByPolicyIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询治理策略列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询治理策略列表
     * @param {string} contentType 该字段内容填为 \&quot;application/json;charset&#x3D;UTF-8\&quot;。
     * @param {string} xEngineId 微服务引擎专享版的实例ID
     * @param {string} xEnterpriseProjectID 企业项目ID
     * @param {string} environment 所属环境，填写all时表示查询所有环境。
     * @param {string} [app] 所属应用
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGovernancePolicys(listGovernancePolicysRequest?: ListGovernancePolicysRequest): Promise<ListGovernancePolicysResponse> {
        const options = ParamCreater().listGovernancePolicys(listGovernancePolicysRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询微服务的灰度发布规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询微服务的灰度发布规则
     * @param {string} xEngineId 微服务引擎专享版的实例ID
     * @param {string} xEnterpriseProjectID 企业项目ID
     * @param {string} serviceName 微服务名称
     * @param {string} [environment] 所属环境，不填表示&lt;空&gt;环境
     * @param {string} [appId] 所属应用，不填默认为default应用
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMicroserviceRouteRule(listMicroserviceRouteRuleRequest?: ListMicroserviceRouteRuleRequest): Promise<ListMicroserviceRouteRuleResponse> {
        const options = ParamCreater().listMicroserviceRouteRule(listMicroserviceRouteRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 变更微服务引擎规格。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 变更微服务引擎规格
     * @param {string} contentType 该字段内容填为 \&quot;application/json;charset&#x3D;UTF-8\&quot;
     * @param {string} accept 该字段内容填为 \&quot;application/json\&quot;
     * @param {string} engineId 引擎id
     * @param {string} [xEnterpriseProjectID] 如果不带则默认企业项目为\&quot;default\&quot;，ID为\&quot;0\&quot;
     * @param {EngineModifyReq} [resizeEngineRequestBody] 变更微服务引擎规格请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resizeEngine(resizeEngineRequest?: ResizeEngineRequest): Promise<ResizeEngineResponse> {
        const options = ParamCreater().resizeEngine(resizeEngineRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 对微服务引擎专享版进行重试
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 对微服务引擎专享版进行重试
     * @param {string} engineId 引擎id
     * @param {EngineAdditionalActionReq} retryEngineRequestBody 重试微服务引擎专享版的请求体
     * @param {string} [xEnterpriseProjectID] 如果不带则默认企业项目为\&quot;default\&quot;，ID为\&quot;0\&quot;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public retryEngine(retryEngineRequest?: RetryEngineRequest): Promise<RetryEngineResponse> {
        const options = ParamCreater().retryEngine(retryEngineRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询微服务引擎专享版详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询微服务引擎专享版详情
     * @param {string} engineId 微服务引擎专享版ID。
     * @param {string} [xEnterpriseProjectID] 如果不带则默认企业项目为\&quot;default\&quot;，ID为\&quot;0\&quot;。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showEngine(showEngineRequest?: ShowEngineRequest): Promise<ShowEngineResponse> {
        const options = ParamCreater().showEngine(showEngineRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询微服务引擎任务详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询微服务引擎任务详情
     * @param {string} engineId 微服务引擎专享版ID。
     * @param {string} jobId 任务ID。
     * @param {string} [xEnterpriseProjectID] 如果不带则默认企业项目为\&quot;default\&quot;，ID为\&quot;0\&quot;。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showEngineJob(showEngineJobRequest?: ShowEngineJobRequest): Promise<ShowEngineJobResponse> {
        const options = ParamCreater().showEngineJob(showEngineJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改治理策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改治理策略
     * @param {string} contentType 该字段内容填为 \&quot;application/json;charset&#x3D;UTF-8\&quot;。
     * @param {string} xEngineId 微服务引擎专享版的实例ID
     * @param {string} xEnterpriseProjectID 企业项目ID
     * @param {string} kind 治理策略类型
     * @param {string} policyId 治理策略id
     * @param {CreateGovPolicy} updateGovernancePolicyRequestBody 修改治理策略请求结构体。
     * @param {string} [xEnvironment] 所属环境
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateGovernancePolicy(updateGovernancePolicyRequest?: UpdateGovernancePolicyRequest): Promise<UpdateGovernancePolicyResponse> {
        const options = ParamCreater().updateGovernancePolicy(updateGovernancePolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 升级微服务引擎专享版
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 升级微服务引擎专享版
     * @param {string} engineId 升级的引擎Id
     * @param {EngineUpdateReq} upgradeEngineRequestBody 升级微服务引擎专享版请求体
     * @param {string} [xEnterpriseProjectID] 如果不带则默认企业项目为\&quot;default\&quot;，ID为\&quot;0\&quot;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public upgradeEngine(upgradeEngineRequest?: UpgradeEngineRequest): Promise<UpgradeEngineResponse> {
        const options = ParamCreater().upgradeEngine(upgradeEngineRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新微服务引擎专享版配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新微服务引擎专享版配置
     * @param {string} engineId 更新的引擎Id
     * @param {EngineConfigureReq} upgradeEngineConfigRequestBody 更新微服务引擎专享版配置请求体
     * @param {string} [xEnterpriseProjectID] 如果不带则默认企业项目为\&quot;default\&quot;，ID为\&quot;0\&quot;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public upgradeEngineConfig(upgradeEngineConfigRequest?: UpgradeEngineConfigRequest): Promise<UpgradeEngineConfigResponse> {
        const options = ParamCreater().upgradeEngineConfig(upgradeEngineConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建nacos命名空间。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建nacos命名空间
     * @param {string} xEngineId 微服务引擎专享版的实例ID
     * @param {string} xEnterpriseProjectID 企业项目ID
     * @param {string} customNamespaceId 命名空间ID，仅支持大小写字母、数字、短划线（-）和下划线（_），不超过128个字符。
     * @param {string} namespaceName 命名空间名，支持非@、#、$、%、^、&amp;、*，不超过128个字符。
     * @param {string} [namespaceDesc] 命名空间描述，不超过256个字符。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createNacosNamespaces(createNacosNamespacesRequest?: CreateNacosNamespacesRequest): Promise<CreateNacosNamespacesResponse> {
        const options = ParamCreater().createNacosNamespaces(createNacosNamespacesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除nacos命名空间。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除nacos命名空间
     * @param {string} xEngineId 微服务引擎专享版的实例ID
     * @param {string} xEnterpriseProjectID 企业项目ID
     * @param {string} namespaceId 命名空间ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteNacosNamespaces(deleteNacosNamespacesRequest?: DeleteNacosNamespacesRequest): Promise<DeleteNacosNamespacesResponse> {
        const options = ParamCreater().deleteNacosNamespaces(deleteNacosNamespacesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询nacos命名空间。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询nacos命名空间
     * @param {string} xEngineId 微服务引擎专享版的实例ID
     * @param {string} xEnterpriseProjectID 企业项目ID
     * @param {number} offset 分页参数，偏移量，从0开始
     * @param {number} limit 分页参数，分页大小，0表示不分页
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNacosNamespaces(listNacosNamespacesRequest?: ListNacosNamespacesRequest): Promise<ListNacosNamespacesResponse> {
        const options = ParamCreater().listNacosNamespaces(listNacosNamespacesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新nacos命名空间。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新nacos命名空间
     * @param {string} xEngineId 微服务引擎专享版的实例ID
     * @param {string} xEnterpriseProjectID 企业项目ID
     * @param {string} namespace 命名空间ID
     * @param {string} namespaceShowName 命名空间名，支持非@、#、$、%、^、&amp;、*，不超过128个字符。
     * @param {string} namespaceDesc 命名空间描述，不超过256个字符。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateNacosNamespaces(updateNacosNamespacesRequest?: UpdateNacosNamespacesRequest): Promise<UpdateNacosNamespacesResponse> {
        const options = ParamCreater().updateNacosNamespaces(updateNacosNamespacesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 创建微服务引擎专享版。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createEngine(createEngineRequest?: CreateEngineRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/enginemgr/engines",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xEnterpriseProjectID;

            if (createEngineRequest !== null && createEngineRequest !== undefined) {
                if (createEngineRequest instanceof CreateEngineRequest) {
                    body = createEngineRequest.body
                    xEnterpriseProjectID = createEngineRequest.xEnterpriseProjectID;
                } else {
                    body = createEngineRequest['body'];
                    xEnterpriseProjectID = createEngineRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建治理策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createGovernancePolicy(createGovernancePolicyRequest?: CreateGovernancePolicyRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/govern/governance/{kind}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let xEngineId;
            
            let xEnterpriseProjectID;
            
            let kind;
            
            let xEnvironment;

            if (createGovernancePolicyRequest !== null && createGovernancePolicyRequest !== undefined) {
                if (createGovernancePolicyRequest instanceof CreateGovernancePolicyRequest) {
                    contentType = createGovernancePolicyRequest.contentType;
                    xEngineId = createGovernancePolicyRequest.xEngineId;
                    xEnterpriseProjectID = createGovernancePolicyRequest.xEnterpriseProjectID;
                    kind = createGovernancePolicyRequest.kind;
                    body = createGovernancePolicyRequest.body
                    xEnvironment = createGovernancePolicyRequest.xEnvironment;
                } else {
                    contentType = createGovernancePolicyRequest['Content-Type'];
                    xEngineId = createGovernancePolicyRequest['x-engine-id'];
                    xEnterpriseProjectID = createGovernancePolicyRequest['X-Enterprise-Project-ID'];
                    kind = createGovernancePolicyRequest['kind'];
                    body = createGovernancePolicyRequest['body'];
                    xEnvironment = createGovernancePolicyRequest['x-environment'];
                }
            }

        
            if (kind === null || kind === undefined) {
            throw new RequiredError('kind','Required parameter kind was null or undefined when calling createGovernancePolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            if (xEngineId !== undefined && xEngineId !== null) {
                localVarHeaderParameter['x-engine-id'] = String(xEngineId);
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironment !== undefined && xEnvironment !== null) {
                localVarHeaderParameter['x-environment'] = String(xEnvironment);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'kind': kind, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建灰度发布策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createMicroserviceRouteRule(createMicroserviceRouteRuleRequest?: CreateMicroserviceRouteRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/govern/route-rule/microservices/{service_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let contentType;
            
            let xEngineId;
            
            let xEnterpriseProjectID;
            
            let serviceName;
            
            let environment;
            
            let appId;

            if (createMicroserviceRouteRuleRequest !== null && createMicroserviceRouteRuleRequest !== undefined) {
                if (createMicroserviceRouteRuleRequest instanceof CreateMicroserviceRouteRuleRequest) {
                    contentType = createMicroserviceRouteRuleRequest.contentType;
                    xEngineId = createMicroserviceRouteRuleRequest.xEngineId;
                    xEnterpriseProjectID = createMicroserviceRouteRuleRequest.xEnterpriseProjectID;
                    serviceName = createMicroserviceRouteRuleRequest.serviceName;
                    body = createMicroserviceRouteRuleRequest.body
                    environment = createMicroserviceRouteRuleRequest.environment;
                    appId = createMicroserviceRouteRuleRequest.appId;
                } else {
                    contentType = createMicroserviceRouteRuleRequest['Content-Type'];
                    xEngineId = createMicroserviceRouteRuleRequest['x-engine-id'];
                    xEnterpriseProjectID = createMicroserviceRouteRuleRequest['X-Enterprise-Project-ID'];
                    serviceName = createMicroserviceRouteRuleRequest['service_name'];
                    body = createMicroserviceRouteRuleRequest['body'];
                    environment = createMicroserviceRouteRuleRequest['environment'];
                    appId = createMicroserviceRouteRuleRequest['app_id'];
                }
            }

        
            if (serviceName === null || serviceName === undefined) {
            throw new RequiredError('serviceName','Required parameter serviceName was null or undefined when calling createMicroserviceRouteRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (environment !== null && environment !== undefined) {
                localVarQueryParameter['environment'] = environment;
            }
            if (appId !== null && appId !== undefined) {
                localVarQueryParameter['app_id'] = appId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            if (xEngineId !== undefined && xEngineId !== null) {
                localVarHeaderParameter['x-engine-id'] = String(xEngineId);
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'service_name': serviceName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除微服务引擎专享版。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteEngine(deleteEngineRequest?: DeleteEngineRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/enginemgr/engines/{engine_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let engineId;
            
            let xEnterpriseProjectID;

            if (deleteEngineRequest !== null && deleteEngineRequest !== undefined) {
                if (deleteEngineRequest instanceof DeleteEngineRequest) {
                    engineId = deleteEngineRequest.engineId;
                    xEnterpriseProjectID = deleteEngineRequest.xEnterpriseProjectID;
                } else {
                    engineId = deleteEngineRequest['engine_id'];
                    xEnterpriseProjectID = deleteEngineRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (engineId === null || engineId === undefined) {
            throw new RequiredError('engineId','Required parameter engineId was null or undefined when calling deleteEngine.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }

            options.pathParams = { 'engine_id': engineId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除治理策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteGovernancePolicy(deleteGovernancePolicyRequest?: DeleteGovernancePolicyRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/govern/governance/{kind}/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let xEngineId;
            
            let xEnterpriseProjectID;
            
            let kind;
            
            let policyId;
            
            let xEnvironment;

            if (deleteGovernancePolicyRequest !== null && deleteGovernancePolicyRequest !== undefined) {
                if (deleteGovernancePolicyRequest instanceof DeleteGovernancePolicyRequest) {
                    contentType = deleteGovernancePolicyRequest.contentType;
                    xEngineId = deleteGovernancePolicyRequest.xEngineId;
                    xEnterpriseProjectID = deleteGovernancePolicyRequest.xEnterpriseProjectID;
                    kind = deleteGovernancePolicyRequest.kind;
                    policyId = deleteGovernancePolicyRequest.policyId;
                    xEnvironment = deleteGovernancePolicyRequest.xEnvironment;
                } else {
                    contentType = deleteGovernancePolicyRequest['Content-Type'];
                    xEngineId = deleteGovernancePolicyRequest['x-engine-id'];
                    xEnterpriseProjectID = deleteGovernancePolicyRequest['X-Enterprise-Project-ID'];
                    kind = deleteGovernancePolicyRequest['kind'];
                    policyId = deleteGovernancePolicyRequest['policy_id'];
                    xEnvironment = deleteGovernancePolicyRequest['x-environment'];
                }
            }

        
            if (kind === null || kind === undefined) {
            throw new RequiredError('kind','Required parameter kind was null or undefined when calling deleteGovernancePolicy.');
            }
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling deleteGovernancePolicy.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            if (xEngineId !== undefined && xEngineId !== null) {
                localVarHeaderParameter['x-engine-id'] = String(xEngineId);
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironment !== undefined && xEnvironment !== null) {
                localVarHeaderParameter['x-environment'] = String(xEnvironment);
            }

            options.pathParams = { 'kind': kind,'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除灰度发布策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteMicroserviceRouteRule(deleteMicroserviceRouteRuleRequest?: DeleteMicroserviceRouteRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/govern/route-rule/microservices/{service_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let xEngineId;
            
            let xEnterpriseProjectID;
            
            let serviceName;
            
            let environment;
            
            let appId;

            if (deleteMicroserviceRouteRuleRequest !== null && deleteMicroserviceRouteRuleRequest !== undefined) {
                if (deleteMicroserviceRouteRuleRequest instanceof DeleteMicroserviceRouteRuleRequest) {
                    contentType = deleteMicroserviceRouteRuleRequest.contentType;
                    xEngineId = deleteMicroserviceRouteRuleRequest.xEngineId;
                    xEnterpriseProjectID = deleteMicroserviceRouteRuleRequest.xEnterpriseProjectID;
                    serviceName = deleteMicroserviceRouteRuleRequest.serviceName;
                    environment = deleteMicroserviceRouteRuleRequest.environment;
                    appId = deleteMicroserviceRouteRuleRequest.appId;
                } else {
                    contentType = deleteMicroserviceRouteRuleRequest['Content-Type'];
                    xEngineId = deleteMicroserviceRouteRuleRequest['x-engine-id'];
                    xEnterpriseProjectID = deleteMicroserviceRouteRuleRequest['X-Enterprise-Project-ID'];
                    serviceName = deleteMicroserviceRouteRuleRequest['service_name'];
                    environment = deleteMicroserviceRouteRuleRequest['environment'];
                    appId = deleteMicroserviceRouteRuleRequest['app_id'];
                }
            }

        
            if (serviceName === null || serviceName === undefined) {
            throw new RequiredError('serviceName','Required parameter serviceName was null or undefined when calling deleteMicroserviceRouteRule.');
            }
            if (environment !== null && environment !== undefined) {
                localVarQueryParameter['environment'] = environment;
            }
            if (appId !== null && appId !== undefined) {
                localVarQueryParameter['app_id'] = appId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            if (xEngineId !== undefined && xEngineId !== null) {
                localVarHeaderParameter['x-engine-id'] = String(xEngineId);
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'service_name': serviceName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 导出kie配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        downloadKie(downloadKieRequest?: DownloadKieRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/kie/download",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let xEngineId;
            
            let xEnterpriseProjectID;
            
            let label;
            
            let match;

            if (downloadKieRequest !== null && downloadKieRequest !== undefined) {
                if (downloadKieRequest instanceof DownloadKieRequest) {
                    xEngineId = downloadKieRequest.xEngineId;
                    body = downloadKieRequest.body
                    xEnterpriseProjectID = downloadKieRequest.xEnterpriseProjectID;
                    label = downloadKieRequest.label;
                    match = downloadKieRequest.match;
                } else {
                    xEngineId = downloadKieRequest['x-engine-id'];
                    body = downloadKieRequest['body'];
                    xEnterpriseProjectID = downloadKieRequest['X-Enterprise-Project-ID'];
                    label = downloadKieRequest['label'];
                    match = downloadKieRequest['match'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (label !== null && label !== undefined) {
                localVarQueryParameter['label'] = label;
            }
            if (match !== null && match !== undefined) {
                localVarQueryParameter['match'] = match;
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEngineId !== undefined && xEngineId !== null) {
                localVarHeaderParameter['x-engine-id'] = String(xEngineId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询微服务引擎列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEngines(listEnginesRequest?: ListEnginesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/enginemgr/engines",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;

            if (listEnginesRequest !== null && listEnginesRequest !== undefined) {
                if (listEnginesRequest instanceof ListEnginesRequest) {
                    offset = listEnginesRequest.offset;
                    limit = listEnginesRequest.limit;
                } else {
                    offset = listEnginesRequest['offset'];
                    limit = listEnginesRequest['limit'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询微服务引擎专享版的规格列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFlavors(listFlavorsRequest?: ListFlavorsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/enginemgr/flavors",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let specType;

            if (listFlavorsRequest !== null && listFlavorsRequest !== undefined) {
                if (listFlavorsRequest instanceof ListFlavorsRequest) {
                    specType = listFlavorsRequest.specType;
                } else {
                    specType = listFlavorsRequest['spec_type'];
                }
            }

        
            if (specType !== null && specType !== undefined) {
                localVarQueryParameter['spec_type'] = specType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定类型治理策略列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGovernancePolicy(listGovernancePolicyRequest?: ListGovernancePolicyRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/govern/governance/{kind}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let xEngineId;
            
            let xEnterpriseProjectID;
            
            let kind;
            
            let xEnvironment;

            if (listGovernancePolicyRequest !== null && listGovernancePolicyRequest !== undefined) {
                if (listGovernancePolicyRequest instanceof ListGovernancePolicyRequest) {
                    contentType = listGovernancePolicyRequest.contentType;
                    xEngineId = listGovernancePolicyRequest.xEngineId;
                    xEnterpriseProjectID = listGovernancePolicyRequest.xEnterpriseProjectID;
                    kind = listGovernancePolicyRequest.kind;
                    xEnvironment = listGovernancePolicyRequest.xEnvironment;
                } else {
                    contentType = listGovernancePolicyRequest['Content-Type'];
                    xEngineId = listGovernancePolicyRequest['x-engine-id'];
                    xEnterpriseProjectID = listGovernancePolicyRequest['X-Enterprise-Project-ID'];
                    kind = listGovernancePolicyRequest['kind'];
                    xEnvironment = listGovernancePolicyRequest['x-environment'];
                }
            }

        
            if (kind === null || kind === undefined) {
            throw new RequiredError('kind','Required parameter kind was null or undefined when calling listGovernancePolicy.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            if (xEngineId !== undefined && xEngineId !== null) {
                localVarHeaderParameter['x-engine-id'] = String(xEngineId);
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironment !== undefined && xEnvironment !== null) {
                localVarHeaderParameter['x-environment'] = String(xEnvironment);
            }

            options.pathParams = { 'kind': kind, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询治理策略详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGovernancePolicyByPolicyId(listGovernancePolicyByPolicyIdRequest?: ListGovernancePolicyByPolicyIdRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/govern/governance/{kind}/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let xEngineId;
            
            let xEnterpriseProjectID;
            
            let kind;
            
            let policyId;
            
            let xEnvironment;

            if (listGovernancePolicyByPolicyIdRequest !== null && listGovernancePolicyByPolicyIdRequest !== undefined) {
                if (listGovernancePolicyByPolicyIdRequest instanceof ListGovernancePolicyByPolicyIdRequest) {
                    contentType = listGovernancePolicyByPolicyIdRequest.contentType;
                    xEngineId = listGovernancePolicyByPolicyIdRequest.xEngineId;
                    xEnterpriseProjectID = listGovernancePolicyByPolicyIdRequest.xEnterpriseProjectID;
                    kind = listGovernancePolicyByPolicyIdRequest.kind;
                    policyId = listGovernancePolicyByPolicyIdRequest.policyId;
                    xEnvironment = listGovernancePolicyByPolicyIdRequest.xEnvironment;
                } else {
                    contentType = listGovernancePolicyByPolicyIdRequest['Content-Type'];
                    xEngineId = listGovernancePolicyByPolicyIdRequest['x-engine-id'];
                    xEnterpriseProjectID = listGovernancePolicyByPolicyIdRequest['X-Enterprise-Project-ID'];
                    kind = listGovernancePolicyByPolicyIdRequest['kind'];
                    policyId = listGovernancePolicyByPolicyIdRequest['policy_id'];
                    xEnvironment = listGovernancePolicyByPolicyIdRequest['x-environment'];
                }
            }

        
            if (kind === null || kind === undefined) {
            throw new RequiredError('kind','Required parameter kind was null or undefined when calling listGovernancePolicyByPolicyId.');
            }
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling listGovernancePolicyByPolicyId.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            if (xEngineId !== undefined && xEngineId !== null) {
                localVarHeaderParameter['x-engine-id'] = String(xEngineId);
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironment !== undefined && xEnvironment !== null) {
                localVarHeaderParameter['x-environment'] = String(xEnvironment);
            }

            options.pathParams = { 'kind': kind,'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询治理策略列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGovernancePolicys(listGovernancePolicysRequest?: ListGovernancePolicysRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/govern/governance/display",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let xEngineId;
            
            let xEnterpriseProjectID;
            
            let environment;
            
            let app;

            if (listGovernancePolicysRequest !== null && listGovernancePolicysRequest !== undefined) {
                if (listGovernancePolicysRequest instanceof ListGovernancePolicysRequest) {
                    contentType = listGovernancePolicysRequest.contentType;
                    xEngineId = listGovernancePolicysRequest.xEngineId;
                    xEnterpriseProjectID = listGovernancePolicysRequest.xEnterpriseProjectID;
                    environment = listGovernancePolicysRequest.environment;
                    app = listGovernancePolicysRequest.app;
                } else {
                    contentType = listGovernancePolicysRequest['Content-Type'];
                    xEngineId = listGovernancePolicysRequest['x-engine-id'];
                    xEnterpriseProjectID = listGovernancePolicysRequest['X-Enterprise-Project-ID'];
                    environment = listGovernancePolicysRequest['environment'];
                    app = listGovernancePolicysRequest['app'];
                }
            }

        
            if (environment === null || environment === undefined) {
                throw new RequiredError('environment','Required parameter environment was null or undefined when calling listGovernancePolicys.');
            }
            if (environment !== null && environment !== undefined) {
                localVarQueryParameter['environment'] = environment;
            }
            if (app !== null && app !== undefined) {
                localVarQueryParameter['app'] = app;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            if (xEngineId !== undefined && xEngineId !== null) {
                localVarHeaderParameter['x-engine-id'] = String(xEngineId);
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询微服务的灰度发布规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMicroserviceRouteRule(listMicroserviceRouteRuleRequest?: ListMicroserviceRouteRuleRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/govern/route-rule/microservices/{service_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xEngineId;
            
            let xEnterpriseProjectID;
            
            let serviceName;
            
            let environment;
            
            let appId;

            if (listMicroserviceRouteRuleRequest !== null && listMicroserviceRouteRuleRequest !== undefined) {
                if (listMicroserviceRouteRuleRequest instanceof ListMicroserviceRouteRuleRequest) {
                    xEngineId = listMicroserviceRouteRuleRequest.xEngineId;
                    xEnterpriseProjectID = listMicroserviceRouteRuleRequest.xEnterpriseProjectID;
                    serviceName = listMicroserviceRouteRuleRequest.serviceName;
                    environment = listMicroserviceRouteRuleRequest.environment;
                    appId = listMicroserviceRouteRuleRequest.appId;
                } else {
                    xEngineId = listMicroserviceRouteRuleRequest['x-engine-id'];
                    xEnterpriseProjectID = listMicroserviceRouteRuleRequest['X-Enterprise-Project-ID'];
                    serviceName = listMicroserviceRouteRuleRequest['service_name'];
                    environment = listMicroserviceRouteRuleRequest['environment'];
                    appId = listMicroserviceRouteRuleRequest['app_id'];
                }
            }

        
            if (serviceName === null || serviceName === undefined) {
            throw new RequiredError('serviceName','Required parameter serviceName was null or undefined when calling listMicroserviceRouteRule.');
            }
            if (environment !== null && environment !== undefined) {
                localVarQueryParameter['environment'] = environment;
            }
            if (appId !== null && appId !== undefined) {
                localVarQueryParameter['app_id'] = appId;
            }
            if (xEngineId !== undefined && xEngineId !== null) {
                localVarHeaderParameter['x-engine-id'] = String(xEngineId);
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'service_name': serviceName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 变更微服务引擎规格。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resizeEngine(resizeEngineRequest?: ResizeEngineRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/enginemgr/engines/{engine_id}/resize",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let accept;
            
            let engineId;
            
            let xEnterpriseProjectID;

            if (resizeEngineRequest !== null && resizeEngineRequest !== undefined) {
                if (resizeEngineRequest instanceof ResizeEngineRequest) {
                    contentType = resizeEngineRequest.contentType;
                    accept = resizeEngineRequest.accept;
                    engineId = resizeEngineRequest.engineId;
                    xEnterpriseProjectID = resizeEngineRequest.xEnterpriseProjectID;
                    body = resizeEngineRequest.body
                } else {
                    contentType = resizeEngineRequest['Content-Type'];
                    accept = resizeEngineRequest['Accept'];
                    engineId = resizeEngineRequest['engine_id'];
                    xEnterpriseProjectID = resizeEngineRequest['X-Enterprise-Project-ID'];
                    body = resizeEngineRequest['body'];
                }
            }

        
            if (engineId === null || engineId === undefined) {
            throw new RequiredError('engineId','Required parameter engineId was null or undefined when calling resizeEngine.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            if (accept !== undefined && accept !== null) {
                localVarHeaderParameter['Accept'] = String(accept);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'engine_id': engineId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 对微服务引擎专享版进行重试
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        retryEngine(retryEngineRequest?: RetryEngineRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/enginemgr/engines/{engine_id}/actions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let engineId;
            
            let xEnterpriseProjectID;

            if (retryEngineRequest !== null && retryEngineRequest !== undefined) {
                if (retryEngineRequest instanceof RetryEngineRequest) {
                    engineId = retryEngineRequest.engineId;
                    body = retryEngineRequest.body
                    xEnterpriseProjectID = retryEngineRequest.xEnterpriseProjectID;
                } else {
                    engineId = retryEngineRequest['engine_id'];
                    body = retryEngineRequest['body'];
                    xEnterpriseProjectID = retryEngineRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (engineId === null || engineId === undefined) {
            throw new RequiredError('engineId','Required parameter engineId was null or undefined when calling retryEngine.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'engine_id': engineId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询微服务引擎专享版详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showEngine(showEngineRequest?: ShowEngineRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/enginemgr/engines/{engine_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let engineId;
            
            let xEnterpriseProjectID;

            if (showEngineRequest !== null && showEngineRequest !== undefined) {
                if (showEngineRequest instanceof ShowEngineRequest) {
                    engineId = showEngineRequest.engineId;
                    xEnterpriseProjectID = showEngineRequest.xEnterpriseProjectID;
                } else {
                    engineId = showEngineRequest['engine_id'];
                    xEnterpriseProjectID = showEngineRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (engineId === null || engineId === undefined) {
            throw new RequiredError('engineId','Required parameter engineId was null or undefined when calling showEngine.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }

            options.pathParams = { 'engine_id': engineId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询微服务引擎任务详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showEngineJob(showEngineJobRequest?: ShowEngineJobRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/enginemgr/engines/{engine_id}/jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let engineId;
            
            let jobId;
            
            let xEnterpriseProjectID;

            if (showEngineJobRequest !== null && showEngineJobRequest !== undefined) {
                if (showEngineJobRequest instanceof ShowEngineJobRequest) {
                    engineId = showEngineJobRequest.engineId;
                    jobId = showEngineJobRequest.jobId;
                    xEnterpriseProjectID = showEngineJobRequest.xEnterpriseProjectID;
                } else {
                    engineId = showEngineJobRequest['engine_id'];
                    jobId = showEngineJobRequest['job_id'];
                    xEnterpriseProjectID = showEngineJobRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (engineId === null || engineId === undefined) {
            throw new RequiredError('engineId','Required parameter engineId was null or undefined when calling showEngineJob.');
            }
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showEngineJob.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }

            options.pathParams = { 'engine_id': engineId,'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改治理策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateGovernancePolicy(updateGovernancePolicyRequest?: UpdateGovernancePolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/govern/governance/{kind}/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let xEngineId;
            
            let xEnterpriseProjectID;
            
            let kind;
            
            let policyId;
            
            let xEnvironment;

            if (updateGovernancePolicyRequest !== null && updateGovernancePolicyRequest !== undefined) {
                if (updateGovernancePolicyRequest instanceof UpdateGovernancePolicyRequest) {
                    contentType = updateGovernancePolicyRequest.contentType;
                    xEngineId = updateGovernancePolicyRequest.xEngineId;
                    xEnterpriseProjectID = updateGovernancePolicyRequest.xEnterpriseProjectID;
                    kind = updateGovernancePolicyRequest.kind;
                    policyId = updateGovernancePolicyRequest.policyId;
                    body = updateGovernancePolicyRequest.body
                    xEnvironment = updateGovernancePolicyRequest.xEnvironment;
                } else {
                    contentType = updateGovernancePolicyRequest['Content-Type'];
                    xEngineId = updateGovernancePolicyRequest['x-engine-id'];
                    xEnterpriseProjectID = updateGovernancePolicyRequest['X-Enterprise-Project-ID'];
                    kind = updateGovernancePolicyRequest['kind'];
                    policyId = updateGovernancePolicyRequest['policy_id'];
                    body = updateGovernancePolicyRequest['body'];
                    xEnvironment = updateGovernancePolicyRequest['x-environment'];
                }
            }

        
            if (kind === null || kind === undefined) {
            throw new RequiredError('kind','Required parameter kind was null or undefined when calling updateGovernancePolicy.');
            }
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling updateGovernancePolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            if (xEngineId !== undefined && xEngineId !== null) {
                localVarHeaderParameter['x-engine-id'] = String(xEngineId);
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironment !== undefined && xEnvironment !== null) {
                localVarHeaderParameter['x-environment'] = String(xEnvironment);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'kind': kind,'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 升级微服务引擎专享版
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        upgradeEngine(upgradeEngineRequest?: UpgradeEngineRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/enginemgr/engines/{engine_id}/upgrade",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let engineId;
            
            let xEnterpriseProjectID;

            if (upgradeEngineRequest !== null && upgradeEngineRequest !== undefined) {
                if (upgradeEngineRequest instanceof UpgradeEngineRequest) {
                    engineId = upgradeEngineRequest.engineId;
                    body = upgradeEngineRequest.body
                    xEnterpriseProjectID = upgradeEngineRequest.xEnterpriseProjectID;
                } else {
                    engineId = upgradeEngineRequest['engine_id'];
                    body = upgradeEngineRequest['body'];
                    xEnterpriseProjectID = upgradeEngineRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (engineId === null || engineId === undefined) {
            throw new RequiredError('engineId','Required parameter engineId was null or undefined when calling upgradeEngine.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'engine_id': engineId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新微服务引擎专享版配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        upgradeEngineConfig(upgradeEngineConfigRequest?: UpgradeEngineConfigRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/enginemgr/engines/{engine_id}/config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let engineId;
            
            let xEnterpriseProjectID;

            if (upgradeEngineConfigRequest !== null && upgradeEngineConfigRequest !== undefined) {
                if (upgradeEngineConfigRequest instanceof UpgradeEngineConfigRequest) {
                    engineId = upgradeEngineConfigRequest.engineId;
                    body = upgradeEngineConfigRequest.body
                    xEnterpriseProjectID = upgradeEngineConfigRequest.xEnterpriseProjectID;
                } else {
                    engineId = upgradeEngineConfigRequest['engine_id'];
                    body = upgradeEngineConfigRequest['body'];
                    xEnterpriseProjectID = upgradeEngineConfigRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (engineId === null || engineId === undefined) {
            throw new RequiredError('engineId','Required parameter engineId was null or undefined when calling upgradeEngineConfig.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'engine_id': engineId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建nacos命名空间。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createNacosNamespaces(createNacosNamespacesRequest?: CreateNacosNamespacesRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/nacos/v1/console/namespaces",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xEngineId;
            
            let xEnterpriseProjectID;
            
            let customNamespaceId;
            
            let namespaceName;
            
            let namespaceDesc;

            if (createNacosNamespacesRequest !== null && createNacosNamespacesRequest !== undefined) {
                if (createNacosNamespacesRequest instanceof CreateNacosNamespacesRequest) {
                    xEngineId = createNacosNamespacesRequest.xEngineId;
                    xEnterpriseProjectID = createNacosNamespacesRequest.xEnterpriseProjectID;
                    customNamespaceId = createNacosNamespacesRequest.customNamespaceId;
                    namespaceName = createNacosNamespacesRequest.namespaceName;
                    namespaceDesc = createNacosNamespacesRequest.namespaceDesc;
                } else {
                    xEngineId = createNacosNamespacesRequest['x-engine-id'];
                    xEnterpriseProjectID = createNacosNamespacesRequest['X-Enterprise-Project-ID'];
                    customNamespaceId = createNacosNamespacesRequest['custom_namespace_id'];
                    namespaceName = createNacosNamespacesRequest['namespace_name'];
                    namespaceDesc = createNacosNamespacesRequest['namespace_desc'];
                }
            }

        
            if (customNamespaceId === null || customNamespaceId === undefined) {
                throw new RequiredError('customNamespaceId','Required parameter customNamespaceId was null or undefined when calling createNacosNamespaces.');
            }
            if (customNamespaceId !== null && customNamespaceId !== undefined) {
                localVarQueryParameter['custom_namespace_id'] = customNamespaceId;
            }
            if (namespaceName === null || namespaceName === undefined) {
                throw new RequiredError('namespaceName','Required parameter namespaceName was null or undefined when calling createNacosNamespaces.');
            }
            if (namespaceName !== null && namespaceName !== undefined) {
                localVarQueryParameter['namespace_name'] = namespaceName;
            }
            if (namespaceDesc !== null && namespaceDesc !== undefined) {
                localVarQueryParameter['namespace_desc'] = namespaceDesc;
            }
            if (xEngineId !== undefined && xEngineId !== null) {
                localVarHeaderParameter['x-engine-id'] = String(xEngineId);
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除nacos命名空间。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteNacosNamespaces(deleteNacosNamespacesRequest?: DeleteNacosNamespacesRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/nacos/v1/console/namespaces",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xEngineId;
            
            let xEnterpriseProjectID;
            
            let namespaceId;

            if (deleteNacosNamespacesRequest !== null && deleteNacosNamespacesRequest !== undefined) {
                if (deleteNacosNamespacesRequest instanceof DeleteNacosNamespacesRequest) {
                    xEngineId = deleteNacosNamespacesRequest.xEngineId;
                    xEnterpriseProjectID = deleteNacosNamespacesRequest.xEnterpriseProjectID;
                    namespaceId = deleteNacosNamespacesRequest.namespaceId;
                } else {
                    xEngineId = deleteNacosNamespacesRequest['x-engine-id'];
                    xEnterpriseProjectID = deleteNacosNamespacesRequest['X-Enterprise-Project-ID'];
                    namespaceId = deleteNacosNamespacesRequest['namespace_id'];
                }
            }

        
            if (namespaceId === null || namespaceId === undefined) {
                throw new RequiredError('namespaceId','Required parameter namespaceId was null or undefined when calling deleteNacosNamespaces.');
            }
            if (namespaceId !== null && namespaceId !== undefined) {
                localVarQueryParameter['namespace_id'] = namespaceId;
            }
            if (xEngineId !== undefined && xEngineId !== null) {
                localVarHeaderParameter['x-engine-id'] = String(xEngineId);
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询nacos命名空间。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNacosNamespaces(listNacosNamespacesRequest?: ListNacosNamespacesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/nacos/v1/console/namespaces",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xEngineId;
            
            let xEnterpriseProjectID;
            
            let offset;
            
            let limit;

            if (listNacosNamespacesRequest !== null && listNacosNamespacesRequest !== undefined) {
                if (listNacosNamespacesRequest instanceof ListNacosNamespacesRequest) {
                    xEngineId = listNacosNamespacesRequest.xEngineId;
                    xEnterpriseProjectID = listNacosNamespacesRequest.xEnterpriseProjectID;
                    offset = listNacosNamespacesRequest.offset;
                    limit = listNacosNamespacesRequest.limit;
                } else {
                    xEngineId = listNacosNamespacesRequest['x-engine-id'];
                    xEnterpriseProjectID = listNacosNamespacesRequest['X-Enterprise-Project-ID'];
                    offset = listNacosNamespacesRequest['offset'];
                    limit = listNacosNamespacesRequest['limit'];
                }
            }

        
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listNacosNamespaces.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listNacosNamespaces.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (xEngineId !== undefined && xEngineId !== null) {
                localVarHeaderParameter['x-engine-id'] = String(xEngineId);
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新nacos命名空间。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateNacosNamespaces(updateNacosNamespacesRequest?: UpdateNacosNamespacesRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/nacos/v1/console/namespaces",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xEngineId;
            
            let xEnterpriseProjectID;
            
            let namespace;
            
            let namespaceShowName;
            
            let namespaceDesc;

            if (updateNacosNamespacesRequest !== null && updateNacosNamespacesRequest !== undefined) {
                if (updateNacosNamespacesRequest instanceof UpdateNacosNamespacesRequest) {
                    xEngineId = updateNacosNamespacesRequest.xEngineId;
                    xEnterpriseProjectID = updateNacosNamespacesRequest.xEnterpriseProjectID;
                    namespace = updateNacosNamespacesRequest.namespace;
                    namespaceShowName = updateNacosNamespacesRequest.namespaceShowName;
                    namespaceDesc = updateNacosNamespacesRequest.namespaceDesc;
                } else {
                    xEngineId = updateNacosNamespacesRequest['x-engine-id'];
                    xEnterpriseProjectID = updateNacosNamespacesRequest['X-Enterprise-Project-ID'];
                    namespace = updateNacosNamespacesRequest['namespace'];
                    namespaceShowName = updateNacosNamespacesRequest['namespace_show_name'];
                    namespaceDesc = updateNacosNamespacesRequest['namespace_desc'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
                throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling updateNacosNamespaces.');
            }
            if (namespace !== null && namespace !== undefined) {
                localVarQueryParameter['namespace'] = namespace;
            }
            if (namespaceShowName === null || namespaceShowName === undefined) {
                throw new RequiredError('namespaceShowName','Required parameter namespaceShowName was null or undefined when calling updateNacosNamespaces.');
            }
            if (namespaceShowName !== null && namespaceShowName !== undefined) {
                localVarQueryParameter['namespace_show_name'] = namespaceShowName;
            }
            if (namespaceDesc === null || namespaceDesc === undefined) {
                throw new RequiredError('namespaceDesc','Required parameter namespaceDesc was null or undefined when calling updateNacosNamespaces.');
            }
            if (namespaceDesc !== null && namespaceDesc !== undefined) {
                localVarQueryParameter['namespace_desc'] = namespaceDesc;
            }
            if (xEngineId !== undefined && xEngineId !== null) {
                localVarHeaderParameter['x-engine-id'] = String(xEngineId);
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): CseClient {
    return new CseClient(client);
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