import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { ActionMatch } from './model/ActionMatch';
import { ActionTag } from './model/ActionTag';
import { BatchCreateListenerTagsRequest } from './model/BatchCreateListenerTagsRequest';
import { BatchCreateListenerTagsRequestBody } from './model/BatchCreateListenerTagsRequestBody';
import { BatchCreateListenerTagsResponse } from './model/BatchCreateListenerTagsResponse';
import { BatchCreateLoadbalancerTagsRequest } from './model/BatchCreateLoadbalancerTagsRequest';
import { BatchCreateLoadbalancerTagsRequestBody } from './model/BatchCreateLoadbalancerTagsRequestBody';
import { BatchCreateLoadbalancerTagsResponse } from './model/BatchCreateLoadbalancerTagsResponse';
import { BatchDeleteListenerTagsRequest } from './model/BatchDeleteListenerTagsRequest';
import { BatchDeleteListenerTagsRequestBody } from './model/BatchDeleteListenerTagsRequestBody';
import { BatchDeleteListenerTagsResponse } from './model/BatchDeleteListenerTagsResponse';
import { BatchDeleteLoadbalancerTagsRequest } from './model/BatchDeleteLoadbalancerTagsRequest';
import { BatchDeleteLoadbalancerTagsRequestBody } from './model/BatchDeleteLoadbalancerTagsRequestBody';
import { BatchDeleteLoadbalancerTagsResponse } from './model/BatchDeleteLoadbalancerTagsResponse';
import { CertificateResp } from './model/CertificateResp';
import { CreateCertificateRequest } from './model/CreateCertificateRequest';
import { CreateCertificateRequestBody } from './model/CreateCertificateRequestBody';
import { CreateCertificateResponse } from './model/CreateCertificateResponse';
import { CreateHealthmonitorReq } from './model/CreateHealthmonitorReq';
import { CreateHealthmonitorRequest } from './model/CreateHealthmonitorRequest';
import { CreateHealthmonitorRequestBody } from './model/CreateHealthmonitorRequestBody';
import { CreateHealthmonitorResponse } from './model/CreateHealthmonitorResponse';
import { CreateL7policyReq } from './model/CreateL7policyReq';
import { CreateL7policyRequest } from './model/CreateL7policyRequest';
import { CreateL7policyRequestBody } from './model/CreateL7policyRequestBody';
import { CreateL7policyResponse } from './model/CreateL7policyResponse';
import { CreateL7ruleReq } from './model/CreateL7ruleReq';
import { CreateL7ruleReqInPolicy } from './model/CreateL7ruleReqInPolicy';
import { CreateL7ruleRequest } from './model/CreateL7ruleRequest';
import { CreateL7ruleRequestBody } from './model/CreateL7ruleRequestBody';
import { CreateL7ruleResponse } from './model/CreateL7ruleResponse';
import { CreateListenerReq } from './model/CreateListenerReq';
import { CreateListenerRequest } from './model/CreateListenerRequest';
import { CreateListenerRequestBody } from './model/CreateListenerRequestBody';
import { CreateListenerResponse } from './model/CreateListenerResponse';
import { CreateListenerTagsRequest } from './model/CreateListenerTagsRequest';
import { CreateListenerTagsRequestBody } from './model/CreateListenerTagsRequestBody';
import { CreateListenerTagsResponse } from './model/CreateListenerTagsResponse';
import { CreateLoadbalancerReq } from './model/CreateLoadbalancerReq';
import { CreateLoadbalancerRequest } from './model/CreateLoadbalancerRequest';
import { CreateLoadbalancerRequestBody } from './model/CreateLoadbalancerRequestBody';
import { CreateLoadbalancerResponse } from './model/CreateLoadbalancerResponse';
import { CreateLoadbalancerTagsRequest } from './model/CreateLoadbalancerTagsRequest';
import { CreateLoadbalancerTagsRequestBody } from './model/CreateLoadbalancerTagsRequestBody';
import { CreateLoadbalancerTagsResponse } from './model/CreateLoadbalancerTagsResponse';
import { CreateMemberReq } from './model/CreateMemberReq';
import { CreateMemberRequest } from './model/CreateMemberRequest';
import { CreateMemberRequestBody } from './model/CreateMemberRequestBody';
import { CreateMemberResponse } from './model/CreateMemberResponse';
import { CreatePoolReq } from './model/CreatePoolReq';
import { CreatePoolRequest } from './model/CreatePoolRequest';
import { CreatePoolRequestBody } from './model/CreatePoolRequestBody';
import { CreatePoolResponse } from './model/CreatePoolResponse';
import { CreateWhitelistReq } from './model/CreateWhitelistReq';
import { CreateWhitelistRequest } from './model/CreateWhitelistRequest';
import { CreateWhitelistRequestBody } from './model/CreateWhitelistRequestBody';
import { CreateWhitelistResponse } from './model/CreateWhitelistResponse';
import { DeleteCertificateRequest } from './model/DeleteCertificateRequest';
import { DeleteCertificateResponse } from './model/DeleteCertificateResponse';
import { DeleteHealthmonitorRequest } from './model/DeleteHealthmonitorRequest';
import { DeleteHealthmonitorResponse } from './model/DeleteHealthmonitorResponse';
import { DeleteL7policyRequest } from './model/DeleteL7policyRequest';
import { DeleteL7policyResponse } from './model/DeleteL7policyResponse';
import { DeleteL7ruleRequest } from './model/DeleteL7ruleRequest';
import { DeleteL7ruleResponse } from './model/DeleteL7ruleResponse';
import { DeleteListenerRequest } from './model/DeleteListenerRequest';
import { DeleteListenerResponse } from './model/DeleteListenerResponse';
import { DeleteListenerTagsRequest } from './model/DeleteListenerTagsRequest';
import { DeleteListenerTagsResponse } from './model/DeleteListenerTagsResponse';
import { DeleteLoadbalancerRequest } from './model/DeleteLoadbalancerRequest';
import { DeleteLoadbalancerResponse } from './model/DeleteLoadbalancerResponse';
import { DeleteLoadbalancerTagsRequest } from './model/DeleteLoadbalancerTagsRequest';
import { DeleteLoadbalancerTagsResponse } from './model/DeleteLoadbalancerTagsResponse';
import { DeleteMemberRequest } from './model/DeleteMemberRequest';
import { DeleteMemberResponse } from './model/DeleteMemberResponse';
import { DeletePoolRequest } from './model/DeletePoolRequest';
import { DeletePoolResponse } from './model/DeletePoolResponse';
import { DeleteWhitelistRequest } from './model/DeleteWhitelistRequest';
import { DeleteWhitelistResponse } from './model/DeleteWhitelistResponse';
import { HealthmonitorResp } from './model/HealthmonitorResp';
import { HealthmonitorsInStatusResp } from './model/HealthmonitorsInStatusResp';
import { InsertHeader } from './model/InsertHeader';
import { L7policiesInStatusResp } from './model/L7policiesInStatusResp';
import { L7policyResp } from './model/L7policyResp';
import { L7ruleResp } from './model/L7ruleResp';
import { L7rulesInStatusResp } from './model/L7rulesInStatusResp';
import { ListCertificatesRequest } from './model/ListCertificatesRequest';
import { ListCertificatesResponse } from './model/ListCertificatesResponse';
import { ListHealthmonitorsRequest } from './model/ListHealthmonitorsRequest';
import { ListHealthmonitorsResponse } from './model/ListHealthmonitorsResponse';
import { ListL7policiesRequest } from './model/ListL7policiesRequest';
import { ListL7policiesResponse } from './model/ListL7policiesResponse';
import { ListL7rulesRequest } from './model/ListL7rulesRequest';
import { ListL7rulesResponse } from './model/ListL7rulesResponse';
import { ListListenerTagsRequest } from './model/ListListenerTagsRequest';
import { ListListenerTagsResponse } from './model/ListListenerTagsResponse';
import { ListListenersByTagsRequest } from './model/ListListenersByTagsRequest';
import { ListListenersByTagsRequestBody } from './model/ListListenersByTagsRequestBody';
import { ListListenersByTagsResponse } from './model/ListListenersByTagsResponse';
import { ListListenersRequest } from './model/ListListenersRequest';
import { ListListenersResponse } from './model/ListListenersResponse';
import { ListLoadbalancerTagsRequest } from './model/ListLoadbalancerTagsRequest';
import { ListLoadbalancerTagsResponse } from './model/ListLoadbalancerTagsResponse';
import { ListLoadbalancersByTagsRequest } from './model/ListLoadbalancersByTagsRequest';
import { ListLoadbalancersByTagsRequestBody } from './model/ListLoadbalancersByTagsRequestBody';
import { ListLoadbalancersByTagsResponse } from './model/ListLoadbalancersByTagsResponse';
import { ListLoadbalancersRequest } from './model/ListLoadbalancersRequest';
import { ListLoadbalancersResponse } from './model/ListLoadbalancersResponse';
import { ListMembersRequest } from './model/ListMembersRequest';
import { ListMembersResponse } from './model/ListMembersResponse';
import { ListPoolsRequest } from './model/ListPoolsRequest';
import { ListPoolsResponse } from './model/ListPoolsResponse';
import { ListTag } from './model/ListTag';
import { ListWhitelistsRequest } from './model/ListWhitelistsRequest';
import { ListWhitelistsResponse } from './model/ListWhitelistsResponse';
import { ListenerResp } from './model/ListenerResp';
import { ListenersInStatusResp } from './model/ListenersInStatusResp';
import { LoadbalancerInStatusResp } from './model/LoadbalancerInStatusResp';
import { LoadbalancerResp } from './model/LoadbalancerResp';
import { MemberResp } from './model/MemberResp';
import { MembersInStatusResp } from './model/MembersInStatusResp';
import { PoolResp } from './model/PoolResp';
import { PoolsInStatusResp } from './model/PoolsInStatusResp';
import { ResourceList } from './model/ResourceList';
import { ResourceTag } from './model/ResourceTag';
import { ResourcesByTag } from './model/ResourcesByTag';
import { SessionPersistence } from './model/SessionPersistence';
import { ShowCertificateRequest } from './model/ShowCertificateRequest';
import { ShowCertificateResponse } from './model/ShowCertificateResponse';
import { ShowHealthmonitorsRequest } from './model/ShowHealthmonitorsRequest';
import { ShowHealthmonitorsResponse } from './model/ShowHealthmonitorsResponse';
import { ShowL7policyRequest } from './model/ShowL7policyRequest';
import { ShowL7policyResponse } from './model/ShowL7policyResponse';
import { ShowL7ruleRequest } from './model/ShowL7ruleRequest';
import { ShowL7ruleResponse } from './model/ShowL7ruleResponse';
import { ShowListenerRequest } from './model/ShowListenerRequest';
import { ShowListenerResponse } from './model/ShowListenerResponse';
import { ShowListenerTagsRequest } from './model/ShowListenerTagsRequest';
import { ShowListenerTagsResponse } from './model/ShowListenerTagsResponse';
import { ShowLoadbalancerRequest } from './model/ShowLoadbalancerRequest';
import { ShowLoadbalancerResponse } from './model/ShowLoadbalancerResponse';
import { ShowLoadbalancerTagsRequest } from './model/ShowLoadbalancerTagsRequest';
import { ShowLoadbalancerTagsResponse } from './model/ShowLoadbalancerTagsResponse';
import { ShowLoadbalancersStatusRequest } from './model/ShowLoadbalancersStatusRequest';
import { ShowLoadbalancersStatusResponse } from './model/ShowLoadbalancersStatusResponse';
import { ShowMemberRequest } from './model/ShowMemberRequest';
import { ShowMemberResponse } from './model/ShowMemberResponse';
import { ShowPoolRequest } from './model/ShowPoolRequest';
import { ShowPoolResponse } from './model/ShowPoolResponse';
import { ShowWhitelistRequest } from './model/ShowWhitelistRequest';
import { ShowWhitelistResponse } from './model/ShowWhitelistResponse';
import { StatusResp } from './model/StatusResp';
import { UpdateCertificateRequest } from './model/UpdateCertificateRequest';
import { UpdateCertificateRequestBody } from './model/UpdateCertificateRequestBody';
import { UpdateCertificateResponse } from './model/UpdateCertificateResponse';
import { UpdateHealthmonitorReq } from './model/UpdateHealthmonitorReq';
import { UpdateHealthmonitorRequest } from './model/UpdateHealthmonitorRequest';
import { UpdateHealthmonitorRequestBody } from './model/UpdateHealthmonitorRequestBody';
import { UpdateHealthmonitorResponse } from './model/UpdateHealthmonitorResponse';
import { UpdateL7policiesRequest } from './model/UpdateL7policiesRequest';
import { UpdateL7policiesRequestBody } from './model/UpdateL7policiesRequestBody';
import { UpdateL7policiesResponse } from './model/UpdateL7policiesResponse';
import { UpdateL7policyReq } from './model/UpdateL7policyReq';
import { UpdateL7ruleReq } from './model/UpdateL7ruleReq';
import { UpdateL7ruleRequest } from './model/UpdateL7ruleRequest';
import { UpdateL7ruleRequestBody } from './model/UpdateL7ruleRequestBody';
import { UpdateL7ruleResponse } from './model/UpdateL7ruleResponse';
import { UpdateListenerReq } from './model/UpdateListenerReq';
import { UpdateListenerRequest } from './model/UpdateListenerRequest';
import { UpdateListenerRequestBody } from './model/UpdateListenerRequestBody';
import { UpdateListenerResponse } from './model/UpdateListenerResponse';
import { UpdateLoadbalancerReq } from './model/UpdateLoadbalancerReq';
import { UpdateLoadbalancerRequest } from './model/UpdateLoadbalancerRequest';
import { UpdateLoadbalancerRequestBody } from './model/UpdateLoadbalancerRequestBody';
import { UpdateLoadbalancerResponse } from './model/UpdateLoadbalancerResponse';
import { UpdateMemberReq } from './model/UpdateMemberReq';
import { UpdateMemberRequest } from './model/UpdateMemberRequest';
import { UpdateMemberRequestBody } from './model/UpdateMemberRequestBody';
import { UpdateMemberResponse } from './model/UpdateMemberResponse';
import { UpdatePoolReq } from './model/UpdatePoolReq';
import { UpdatePoolRequest } from './model/UpdatePoolRequest';
import { UpdatePoolRequestBody } from './model/UpdatePoolRequestBody';
import { UpdatePoolResponse } from './model/UpdatePoolResponse';
import { UpdateWhitelistReq } from './model/UpdateWhitelistReq';
import { UpdateWhitelistRequest } from './model/UpdateWhitelistRequest';
import { UpdateWhitelistRequestBody } from './model/UpdateWhitelistRequestBody';
import { UpdateWhitelistResponse } from './model/UpdateWhitelistResponse';
import { WhitelistResp } from './model/WhitelistResp';

export class ElbClient {
    public static newBuilder(): ClientBuilder<ElbClient> {
            return new ClientBuilder<ElbClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 批量添加监听器标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加监听器标签
     * @param {string} listenerId 监听器ID。
     * @param {BatchCreateListenerTagsRequestBody} batchCreateListenerTagsRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateListenerTags(batchCreateListenerTagsRequest?: BatchCreateListenerTagsRequest): Promise<BatchCreateListenerTagsResponse> {
        const options = ParamCreater().batchCreateListenerTags(batchCreateListenerTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量添加负载均衡器标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加负载均衡器标签
     * @param {string} loadbalancerId 负载均衡器ID。
     * @param {BatchCreateLoadbalancerTagsRequestBody} batchCreateLoadbalancerTagsRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateLoadbalancerTags(batchCreateLoadbalancerTagsRequest?: BatchCreateLoadbalancerTagsRequest): Promise<BatchCreateLoadbalancerTagsResponse> {
        const options = ParamCreater().batchCreateLoadbalancerTags(batchCreateLoadbalancerTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除监听器标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除监听器标签
     * @param {string} listenerId 监听器ID。
     * @param {BatchDeleteListenerTagsRequestBody} batchDeleteListenerTagsRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteListenerTags(batchDeleteListenerTagsRequest?: BatchDeleteListenerTagsRequest): Promise<BatchDeleteListenerTagsResponse> {
        const options = ParamCreater().batchDeleteListenerTags(batchDeleteListenerTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除负载均衡器标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除负载均衡器标签
     * @param {string} loadbalancerId 负载均衡器ID。
     * @param {BatchDeleteLoadbalancerTagsRequestBody} batchDeleteLoadbalancerTagsRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteLoadbalancerTags(batchDeleteLoadbalancerTagsRequest?: BatchDeleteLoadbalancerTagsRequest): Promise<BatchDeleteLoadbalancerTagsResponse> {
        const options = ParamCreater().batchDeleteLoadbalancerTags(batchDeleteLoadbalancerTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 给后端云服务器组添加健康检查
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建健康检查
     * @param {CreateHealthmonitorRequestBody} createHealthmonitorRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createHealthmonitor(createHealthmonitorRequest?: CreateHealthmonitorRequest): Promise<CreateHealthmonitorResponse> {
        const options = ParamCreater().createHealthmonitor(createHealthmonitorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建listener关联的转发策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建转发策略
     * @param {CreateL7policyRequestBody} createL7policyRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createL7policy(createL7policyRequest?: CreateL7policyRequest): Promise<CreateL7policyResponse> {
        const options = ParamCreater().createL7policy(createL7policyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建转发规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建转发规则
     * @param {string} l7policyId 转发策略id
     * @param {CreateL7ruleRequestBody} createL7ruleRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createL7rule(createL7ruleRequest?: CreateL7ruleRequest): Promise<CreateL7ruleResponse> {
        const options = ParamCreater().createL7rule(createL7ruleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建与负载均衡器绑定的监听器。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建监听器
     * @param {CreateListenerRequestBody} createListenerRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createListener(createListenerRequest?: CreateListenerRequest): Promise<CreateListenerResponse> {
        const options = ParamCreater().createListener(createListenerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 给指定监听器添加标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加监听器标签
     * @param {string} listenerId 监听器ID。
     * @param {CreateListenerTagsRequestBody} [createListenerTagsRequestBody] This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createListenerTags(createListenerTagsRequest?: CreateListenerTagsRequest): Promise<CreateListenerTagsResponse> {
        const options = ParamCreater().createListenerTags(createListenerTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建私网类型的增强型负载均衡器。创建成功后，该接口会返回创建的增强型负载均衡器的ID、所属子网ID、负载均衡器IP等详细信息。若要创建公网类型的增强型负载均衡器，还需调用创建浮动IP的接口，将浮动IP与私网负载均衡器的vip_port_id绑定。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建负载均衡器
     * @param {CreateLoadbalancerRequestBody} createLoadbalancerRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createLoadbalancer(createLoadbalancerRequest?: CreateLoadbalancerRequest): Promise<CreateLoadbalancerResponse> {
        const options = ParamCreater().createLoadbalancer(createLoadbalancerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 给指定负载均衡器添加标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加负载均衡器标签
     * @param {string} loadbalancerId 负载均衡器ID
     * @param {CreateLoadbalancerTagsRequestBody} [createLoadbalancerTagsRequestBody] This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createLoadbalancerTags(createLoadbalancerTagsRequest?: CreateLoadbalancerTagsRequest): Promise<CreateLoadbalancerTagsResponse> {
        const options = ParamCreater().createLoadbalancerTags(createLoadbalancerTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加属于某个后端云服务器组的后端云服务器。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建后端云服务器
     * @param {string} poolId 后端云服务器组id
     * @param {CreateMemberRequestBody} createMemberRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createMember(createMemberRequest?: CreateMemberRequest): Promise<CreateMemberResponse> {
        const options = ParamCreater().createMember(createMemberRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建后端云服务器组。将多个后端云服务器添加到后端云服务器组中后，请求会在后端云服务器间按后端云服务器组的负载均衡算法和后端云服务器的权重来做请求分发。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建后端云服务器组
     * @param {CreatePoolRequestBody} createPoolRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPool(createPoolRequest?: CreatePoolRequest): Promise<CreatePoolResponse> {
        const options = ParamCreater().createPool(createPoolRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建白名单，控制监听器的访问权限。若开启了白名单功能，只有白名单中放通的IP可以访问该监听器的后端服务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建白名单
     * @param {CreateWhitelistRequestBody} createWhitelistRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createWhitelist(createWhitelistRequest?: CreateWhitelistRequest): Promise<CreateWhitelistResponse> {
        const options = ParamCreater().createWhitelist(createWhitelistRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除健康检查
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除健康检查
     * @param {string} healthmonitorId 健康检查id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteHealthmonitor(deleteHealthmonitorRequest?: DeleteHealthmonitorRequest): Promise<DeleteHealthmonitorResponse> {
        const options = ParamCreater().deleteHealthmonitor(deleteHealthmonitorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除转发策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除转发策略
     * @param {string} l7policyId 转发策略id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteL7policy(deleteL7policyRequest?: DeleteL7policyRequest): Promise<DeleteL7policyResponse> {
        const options = ParamCreater().deleteL7policy(deleteL7policyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除转发规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除转发规则
     * @param {string} l7policyId 转发策略id
     * @param {string} l7ruleId 转发规则id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteL7rule(deleteL7ruleRequest?: DeleteL7ruleRequest): Promise<DeleteL7ruleResponse> {
        const options = ParamCreater().deleteL7rule(deleteL7ruleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据指定ID删除监听器。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除监听器
     * @param {string} listenerId 监听器id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteListener(deleteListenerRequest?: DeleteListenerRequest): Promise<DeleteListenerResponse> {
        const options = ParamCreater().deleteListener(deleteListenerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除监听器的某个key对应的标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除监听器标签
     * @param {string} listenerId 监听器ID
     * @param {string} key 待删除标签的key值。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteListenerTags(deleteListenerTagsRequest?: DeleteListenerTagsRequest): Promise<DeleteListenerTagsResponse> {
        const options = ParamCreater().deleteListenerTags(deleteListenerTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据指定ID删除负载均衡器。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除负载均衡
     * @param {string} loadbalancerId 负载均衡器id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteLoadbalancer(deleteLoadbalancerRequest?: DeleteLoadbalancerRequest): Promise<DeleteLoadbalancerResponse> {
        const options = ParamCreater().deleteLoadbalancer(deleteLoadbalancerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除负载均衡器的某个key对应的标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除负载均衡标签
     * @param {string} loadbalancerId 负载均衡器ID。
     * @param {string} key 待删除标签的key值
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteLoadbalancerTags(deleteLoadbalancerTagsRequest?: DeleteLoadbalancerTagsRequest): Promise<DeleteLoadbalancerTagsResponse> {
        const options = ParamCreater().deleteLoadbalancerTags(deleteLoadbalancerTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除后端云服务器
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除后端云服务器
     * @param {string} poolId 后端云服务器组id
     * @param {string} memberId 后端云服务器id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteMember(deleteMemberRequest?: DeleteMemberRequest): Promise<DeleteMemberResponse> {
        const options = ParamCreater().deleteMember(deleteMemberRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除后端云服务器组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除后端云服务器组
     * @param {string} poolId 后端云服务器组id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePool(deletePoolRequest?: DeletePoolRequest): Promise<DeletePoolResponse> {
        const options = ParamCreater().deletePool(deletePoolRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除白名单
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除白名单
     * @param {string} whitelistId 白名单id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteWhitelist(deleteWhitelistRequest?: DeleteWhitelistRequest): Promise<DeleteWhitelistResponse> {
        const options = ParamCreater().deleteWhitelist(deleteWhitelistRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询健康检查列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询健康检查列表
     * @param {number} [limit] 分页查询中每页的健康检查个数
     * @param {string} [marker] 分页查询的起始的资源id，表示上一页最后一条查询记录的健康检查的id。不指定时表示查询第一页。
     * @param {boolean} [pageReverse] 分页的顺序，true表示从后往前分页，false表示从前往后分页，默认为false。
     * @param {string} [id] 健康检查ID。
     * @param {string} [name] 健康检查名称。
     * @param {number} [delay] 健康检查间隔，单位秒，取值范围[1，50]。
     * @param {number} [maxRetries] 健康检查最大重试次数，取值范围[1，10]。
     * @param {boolean} [adminStateUp] 健康检查的管理状态。取值范围：true/false。默认为true；true表示开启健康检查；false表示关闭健康检查。
     * @param {number} [timeout] 健康检查超时时间，单位秒，取值范围[1，50]。 建议该值小于delay的值。
     * @param {string} [type] 健康检查的类型。取值范围：TCP、UDP_CONNECT、HTTP。
     * @param {number} [monitorPort] 健康检查端口号]。默认为空，表示使用后端云服务器的protocol_port作为健康检查的检查端口。
     * @param {string} [expectedCodes] 期望HTTP响应状态码；默认值：“200”。取值范围：单值，例如200；列表，例如200，202；区间，例如200-204。仅当type为HTTP时生效。 该字段为预留字段，暂未启用。
     * @param {string} [domainName] 健康检查时，发送的http请求的域名。仅当type为HTTP时生效。默认为空，表示使用负载均衡器的vip_address作为http请求的目的地址。以数字或字母开头，只能包含数字、字母、’-’、’.’。例如：www.huaweitest.com
     * @param {string} [urlPath] 健康检查时发送的http请求路径。默认为“/”。以“/”开头。仅当type为HTTP时生效。例如：“/test”
     * @param {string} [httpMethod] HTTP请求的方法；默认值：GET取值范围：GET、HEAD、POST、PUT、DELETE、TRACE、OPTIONS、CONNECT、PATCH。仅当type为HTTP时生效。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHealthmonitors(listHealthmonitorsRequest?: ListHealthmonitorsRequest): Promise<ListHealthmonitorsResponse> {
        const options = ParamCreater().listHealthmonitors(listHealthmonitorsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询转发策略。支持过滤查询和分页查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询转发策略列表
     * @param {number} [limit] 分页查询中每页的转发策略个数
     * @param {string} [marker] 分页查询的起始的资源id，表示上一页最后一条查询记录的转发策略的id。不指定时表示查询第一页。
     * @param {boolean} [pageReverse] 分页的顺序，true表示从后往前分页，false表示从前往后分页，默认为false。
     * @param {string} [id] 转发策略ID。
     * @param {string} [name] 转发策略名称。
     * @param {string} [description] 转发策略的描述信息。
     * @param {boolean} [adminStateUp] 转发策略的管理状态；取值范围： true/false。该字段为预留字段，暂未启用。默认为true。
     * @param {string} [listenerId] 转发策略所在的监听器ID。
     * @param {string} [action] 转发策略的匹配动作。 取值范围：REDIRECT_TO_POOL：将匹配的流量转发到redirect_pool_id指定的后端云服务器组上；REDIRECT_TO_LISTENER：将listener_id指定的HTTP监听器的流量重定向到redirect_listener_id指定的TERMINATED_HTTPS监听器上。
     * @param {string} [redirectPoolId] 流量匹配后转发到后端云服务器组的ID。
     * @param {string} [redirectListenerId] 流量匹配后转发到的监听器的ID。
     * @param {string} [redirectUrl] 转发策略重定向到的url。该字段为预留字段，暂未启用。
     * @param {number} [position] 转发优先级，从1递增，最高100。默认值：100；该字段为预留字段，暂未启用。
     * @param {string} [provisioningStatus] 转发策略的配置状态，可以为ACTIVE、PENDING_CREATE 或者ERROR。默认值：ACTIVE；该字段为预留字段，暂未启用。
     * @param {string} [enterpriseProjectId] 企业项目ID。  传入all_granted_eps表示查询所有有权限的企业项目资源；\&quot;0\&quot;表示查询默认企业项目资源；或者指定的企业项目ID下的资源。
     * @param {boolean} [displayAllRules] 是否显示所有的rule信息。取值范围：false表示不显示（跟以前一样只显示ID）；true表示显示。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listL7policies(listL7policiesRequest?: ListL7policiesRequest): Promise<ListL7policiesResponse> {
        const options = ParamCreater().listL7policies(listL7policiesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定转发策略下关联的转发规则列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询转发规则列表
     * @param {string} l7policyId 转发策略id
     * @param {number} [limit] 分页查询中每页的转发规则个数
     * @param {string} [marker] 分页查询的起始的资源id，表示上一页最后一条查询记录的转发规则的id。不指定时表示查询第一页。
     * @param {boolean} [pageReverse] 分页的顺序，true表示从后往前分页，false表示从前往后分页，默认为false。
     * @param {string} [id] 转发规则ID。
     * @param {boolean} [adminStateUp] 转发规则的管理状态；取值范围： true/false。该字段为预留字段，暂未启用。默认为true。
     * @param {string} [type] 转发规则的匹配类型。取值范围：HOST_NAME：匹配请求中的域名；PATH：匹配请求中的路径；同一个转发策略下转发规则的type不能重复。
     * @param {string} [compareType] 转发匹配方式： type为HOST_NAME时，取值范围：EQUAL_TO：精确匹配； type为PATH时，取值范围：REGEX：正则匹配；STARTS_WITH：前缀匹配；EQUAL_TO：精确匹配。
     * @param {boolean} [invert] 是否反向匹配；取值范围：true/false。默认值：false；该字段为预留字段，暂未启用。
     * @param {string} [key] 匹配内容的键值。默认为null。该字段为预留字段，暂未启用。
     * @param {string} [value] 匹配内容的值。 当type为HOST_NAME时，取值范围：String (100)，字符串只能包含英文字母、数字、“-”或“.”，且必须以字母或数字开头。 当type为PATH时，取值范围：String (128)。当转发规则的compare_type为STARTS_WITH、EQUAL_TO时，字符串只能包含英文字母、数字、_~\&#39;;@^-%#&amp;$.*+?,&#x3D;!:| /()[]{}，且必须以\&quot;/\&quot;开头。
     * @param {string} [provisioningStatus] 转发规则的配置状态，可以为ACTIVE、PENDING_CREATE 或者ERROR。默认值：ACTIVE；该字段为预留字段，暂未启用。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listL7rules(listL7rulesRequest?: ListL7rulesRequest): Promise<ListL7rulesResponse> {
        const options = ParamCreater().listL7rules(listL7rulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定项目下所有监听器的标签列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有监听器的标签列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listListenerTags(): Promise<ListListenerTagsResponse> {
        const options = ParamCreater().listListenerTags();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询监听器列表。支持过滤查询和分页查询。可以通过监听器ID、协议类型、监听端口号、关联的后端云服务器的IP等查询监听器。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询监听器列表
     * @param {number} [limit] 分页查询中每页的监听器个数
     * @param {string} [marker] 分页查询的起始的资源id，表示上一页最后一条查询记录的监听器的id。不指定时表示查询第一页。
     * @param {boolean} [pageReverse] 分页的顺序，true表示从后往前分页，false表示从前往后分页，默认为false。
     * @param {string} [id] 监听器ID。
     * @param {string} [name] 监听器名称。
     * @param {string} [description] 监听器的描述信息。
     * @param {string} [loadbalancerId] 监听器所在的负载均衡器ID。
     * @param {number} [connectionLimit] 监听器的最大连接数。
     * @param {boolean} [adminStateUp] 监听器的管理状态。该字段为预留字段，暂未启用。默认为true。
     * @param {string} [defaultPoolId] 监听器的默认后端云服务器组ID。
     * @param {string} [defaultTlsContainerRef] 监听器使用的服务器证书ID。
     * @param {string} [clientCaTlsContainerRef] 监听器使用的CA证书ID。
     * @param {string} [protocol] 监听器的监听协议。取值范围：TCP、HTTP、UDP、TERMINATED_HTTPS。
     * @param {number} [protocolPort] 监听器的监听端口。
     * @param {string} [tlsCiphersPolicy] 监听器使用的安全策略，仅对TERMINATED_HTTPS协议类型的监听器有效，且默认值为tls-1-0。取值包括：tls-1-0, tls-1-1, tls-1-2, tls-1-2-strict四种安全策略。
     * @param {string} [tlsContainerId] 查询证书所关联的监听器
     * @param {boolean} [http2Enable] HTTP2功能的开启状态。取值范围：true/false。true：开启。false：关闭。
     * @param {string} [enterpriseProjectId] 企业项目ID。  传入all_granted_eps表示查询所有有权限的企业项目资源；\&quot;0\&quot;表示查询默认企业项目资源；或者指定的企业项目ID下的资源。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listListeners(listListenersRequest?: ListListenersRequest): Promise<ListListenersResponse> {
        const options = ParamCreater().listListeners(listListenersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据标签过滤查询监听器实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据标签查询监听器
     * @param {ListListenersByTagsRequestBody} listListenersByTagsRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listListenersByTags(listListenersByTagsRequest?: ListListenersByTagsRequest): Promise<ListListenersByTagsResponse> {
        const options = ParamCreater().listListenersByTags(listListenersByTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定项目下所有负载均衡器的标签列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有负载均衡器的标签列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLoadbalancerTags(): Promise<ListLoadbalancerTagsResponse> {
        const options = ParamCreater().listLoadbalancerTags();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询负载均衡器列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询负载均衡列表
     * @param {number} [limit] 分页查询中每页的负载均衡器个数
     * @param {string} [marker] 分页查询的起始的资源id，表示上一页最后一条查询记录的负载均衡器的id。不指定时表示查询第一页。
     * @param {boolean} [pageReverse] 分页的顺序，true表示从后往前分页，false表示从前往后分页，默认为false。
     * @param {string} [id] 负载均衡器的ID。
     * @param {string} [description] 负载均衡器的描述信息。
     * @param {string} [name] 负载均衡器的名称。
     * @param {string} [operatingStatus] 负载均衡器的操作状态。取值范围：可以为ONLINE、OFFLINE、DEGRADED、DISABLED或NO_MONITOR。
     * @param {string} [provisioningStatus] 负载均衡器的配置状态。取值范围：可以为ACTIVE、PENDING_CREATE 或者ERROR。
     * @param {string} [vipAddress] 负载均衡器的内网IP。
     * @param {string} [vipPortId] 负载均衡器内网IP对应的端口ID。
     * @param {string} [vipSubnetId] 负载均衡器所在的子网IPv4网络ID。
     * @param {string} [vpcId] 负载均衡器所在的虚拟私有云ID。
     * @param {string} [enterpriseProjectId] 企业项目ID。  传入all_granted_eps表示查询所有有权限的企业项目资源；\&quot;0\&quot;表示查询默认企业项目资源；或者指定的企业项目ID下的资源。
     * @param {boolean} [adminStateUp] 负载均衡器的管理状态。负载均衡器停用时不再接收流量。取值范围：true：启用负载均衡器；false：停用负载均衡器。
     * @param {string} [memberAddress] 负载均衡器的后端服务器的IP地址
     * @param {string} [memberDeviceId] 负载均衡器的后端服务器对应的弹性云服务器ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLoadbalancers(listLoadbalancersRequest?: ListLoadbalancersRequest): Promise<ListLoadbalancersResponse> {
        const options = ParamCreater().listLoadbalancers(listLoadbalancersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据标签过滤查询负载均衡实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据标签查询负载均衡器
     * @param {ListLoadbalancersByTagsRequestBody} listLoadbalancersByTagsRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLoadbalancersByTags(listLoadbalancersByTagsRequest?: ListLoadbalancersByTagsRequest): Promise<ListLoadbalancersByTagsResponse> {
        const options = ParamCreater().listLoadbalancersByTags(listLoadbalancersByTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询属于某个后端云服务器组的后端云服务器。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询后端云服务器列表
     * @param {string} poolId 后端云服务器组id
     * @param {number} [limit] 分页查询中每页的后端服务器个数
     * @param {string} [marker] 分页查询的起始的资源id，表示上一页最后一条查询记录的后端服务器的id。不指定时表示查询第一页。
     * @param {boolean} [pageReverse] 分页的顺序，true表示从后往前分页，false表示从前往后分页，默认为false。
     * @param {string} [id] 后端云服务器的ID。
     * @param {string} [name] 后端云服务器的名称。
     * @param {string} [address] 后端云服务器对应的IP地址。
     * @param {number} [protocolPort] 后端云服务器后端端口的协议号。
     * @param {string} [subnetId] 后端云服务器所在的子网ID。
     * @param {boolean} [adminStateUp] 后端云服务器的管理状态。取值范围：true/false。
     * @param {number} [weight] 后端云服务器的权重。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMembers(listMembersRequest?: ListMembersRequest): Promise<ListMembersResponse> {
        const options = ParamCreater().listMembers(listMembersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询后端云服务器组列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询后端云服务器组列表
     * @param {number} [limit] 分页查询中每页的后端服务器组个数
     * @param {string} [marker] 分页查询的起始的资源id，表示上一页最后一条查询记录的后端服务器组的id。不指定时表示查询第一页。
     * @param {boolean} [pageReverse] 分页的顺序，true表示从后往前分页，false表示从前往后分页，默认为false。
     * @param {string} [id] 后端云服务器组ID。
     * @param {string} [name] 后端云服务器组名称。
     * @param {string} [description] 后端云服务器组的描述信息。
     * @param {string} [healthmonitorId] 后端云服务器组关联的健康检查的ID。
     * @param {string} [loadbalancerId] 后端云服务器组关联的负载均衡器ID。
     * @param {string} [protocol] 后端云服务器组的后端协议。支持TCP、UDP和HTTP。
     * @param {string} [lbAlgorithm] 后端云服务器组的负载均衡算法。取值范围：ROUND_ROBIN：加权轮询算法。LEAST_CONNECTIONS：加权最少连接算法。SOURCE_IP：源IP算法。当该字段的取值为SOURCE_IP时，后端云服务器组绑定的后端云服务器的weight字段无效。
     * @param {string} [memberAddress] 后端云服务器组关联的后端云服务器IP。
     * @param {string} [memberDeviceId] 后端云服务器组关联的后端云服务器对应的弹性云服务器的ID。
     * @param {string} [enterpriseProjectId] 企业项目ID。  传入all_granted_eps表示查询所有有权限的企业项目资源；\&quot;0\&quot;表示查询默认企业项目资源；或者指定的企业项目ID下的资源。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPools(listPoolsRequest?: ListPoolsRequest): Promise<ListPoolsResponse> {
        const options = ParamCreater().listPools(listPoolsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询白名单，支持过滤查询和分页查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询白名单列表
     * @param {number} [limit] 分页查询中每页的白名单个数
     * @param {string} [marker] 分页查询的起始的资源id，表示上一页最后一条查询记录的白名单的id。不指定时表示查询第一页。
     * @param {boolean} [pageReverse] 分页的顺序，true表示从后往前分页，false表示从前往后分页，默认为false。
     * @param {string} [id] 白名单ID。
     * @param {boolean} [enableWhitelist] 是否开启访问控制开关。true：打开false：关闭
     * @param {string} [listenerId] 白名单关联的监听器ID。
     * @param {string} [whitelist] 白名单IP的字符串。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listWhitelists(listWhitelistsRequest?: ListWhitelistsRequest): Promise<ListWhitelistsResponse> {
        const options = ParamCreater().listWhitelists(listWhitelistsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据指定ID查询健康检查详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询健康检查详情
     * @param {string} healthmonitorId 健康检查id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showHealthmonitors(showHealthmonitorsRequest?: ShowHealthmonitorsRequest): Promise<ShowHealthmonitorsResponse> {
        const options = ParamCreater().showHealthmonitors(showHealthmonitorsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据指定ID查询转发策略详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询转发策略详情
     * @param {string} l7policyId 转发策略id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showL7policy(showL7policyRequest?: ShowL7policyRequest): Promise<ShowL7policyResponse> {
        const options = ParamCreater().showL7policy(showL7policyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据指定ID查询某转发策略下关联的转发规则详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询转发规则详情
     * @param {string} l7policyId 转发策略id
     * @param {string} l7ruleId 转发规则id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showL7rule(showL7ruleRequest?: ShowL7ruleRequest): Promise<ShowL7ruleResponse> {
        const options = ParamCreater().showL7rule(showL7ruleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据指定ID查询监听器详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询监听器详情
     * @param {string} listenerId 监听器id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showListener(showListenerRequest?: ShowListenerRequest): Promise<ShowListenerResponse> {
        const options = ParamCreater().showListener(showListenerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定监听器的所有标签信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询监听器的标签详情
     * @param {string} listenerId 监听器ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showListenerTags(showListenerTagsRequest?: ShowListenerTagsRequest): Promise<ShowListenerTagsResponse> {
        const options = ParamCreater().showListenerTags(showListenerTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据指定负载均衡器ID查询负载均衡器详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询负载均衡详情
     * @param {string} loadbalancerId 负载均衡器ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showLoadbalancer(showLoadbalancerRequest?: ShowLoadbalancerRequest): Promise<ShowLoadbalancerResponse> {
        const options = ParamCreater().showLoadbalancer(showLoadbalancerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定负载均衡器的所有标签信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询负载均衡器的标签详情
     * @param {string} loadbalancerId 负载均衡器所在的项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showLoadbalancerTags(showLoadbalancerTagsRequest?: ShowLoadbalancerTagsRequest): Promise<ShowLoadbalancerTagsResponse> {
        const options = ParamCreater().showLoadbalancerTags(showLoadbalancerTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询负载均衡器状态树。可通过该接口查询负载均衡器关联的监听器、后端云服务器组、后端云服务器、健康检查、转发策略、转发规则的主要信息，了解负载均衡器下资源的拓扑情况。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询负载均衡状态树
     * @param {string} loadbalancerId 负载均衡器id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showLoadbalancersStatus(showLoadbalancersStatusRequest?: ShowLoadbalancersStatusRequest): Promise<ShowLoadbalancersStatusResponse> {
        const options = ParamCreater().showLoadbalancersStatus(showLoadbalancersStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据指定ID查询后端云服务器详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询后端云服务器详情
     * @param {string} poolId 后端云服务器组id
     * @param {string} memberId 后端云服务器id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMember(showMemberRequest?: ShowMemberRequest): Promise<ShowMemberResponse> {
        const options = ParamCreater().showMember(showMemberRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据指定ID查询后端云服务器组详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询后端云服务器组详情
     * @param {string} poolId 后端云服务器组id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPool(showPoolRequest?: ShowPoolRequest): Promise<ShowPoolResponse> {
        const options = ParamCreater().showPool(showPoolRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据指定ID查询白名单详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询白名单详情
     * @param {string} whitelistId 白名单的id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showWhitelist(showWhitelistRequest?: ShowWhitelistRequest): Promise<ShowWhitelistResponse> {
        const options = ParamCreater().showWhitelist(showWhitelistRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新健康检查
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新健康检查
     * @param {string} healthmonitorId 健康检查id
     * @param {UpdateHealthmonitorRequestBody} updateHealthmonitorRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateHealthmonitor(updateHealthmonitorRequest?: UpdateHealthmonitorRequest): Promise<UpdateHealthmonitorResponse> {
        const options = ParamCreater().updateHealthmonitor(updateHealthmonitorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新转发策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新转发策略
     * @param {string} l7policyId 待更新的转发策略id
     * @param {UpdateL7policiesRequestBody} updateL7policiesRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateL7policies(updateL7policiesRequest?: UpdateL7policiesRequest): Promise<UpdateL7policiesResponse> {
        const options = ParamCreater().updateL7policies(updateL7policiesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新指定的转发规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新转发规则
     * @param {string} l7policyId 待更新的转发规则所在的转发策略id
     * @param {string} l7ruleId 待更新的转发规则id
     * @param {UpdateL7ruleRequestBody} updateL7ruleRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateL7rule(updateL7ruleRequest?: UpdateL7ruleRequest): Promise<UpdateL7ruleResponse> {
        const options = ParamCreater().updateL7rule(updateL7ruleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新监听器。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新监听器
     * @param {string} listenerId 监听器id
     * @param {UpdateListenerRequestBody} updateListenerRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateListener(updateListenerRequest?: UpdateListenerRequest): Promise<UpdateListenerResponse> {
        const options = ParamCreater().updateListener(updateListenerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新负载均衡器。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新负载均衡器
     * @param {string} loadbalancerId 待更新的负载均衡器id
     * @param {UpdateLoadbalancerRequestBody} updateLoadbalancerRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateLoadbalancer(updateLoadbalancerRequest?: UpdateLoadbalancerRequest): Promise<UpdateLoadbalancerResponse> {
        const options = ParamCreater().updateLoadbalancer(updateLoadbalancerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新后端云服务器
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新后端云服务器
     * @param {string} memberId 后端云服务器id
     * @param {string} poolId 后端云服务器组id
     * @param {UpdateMemberRequestBody} updateMemberRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateMember(updateMemberRequest?: UpdateMemberRequest): Promise<UpdateMemberResponse> {
        const options = ParamCreater().updateMember(updateMemberRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新后端云服务器组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新后端云服务器组
     * @param {string} poolId 后端云服务器组id
     * @param {UpdatePoolRequestBody} updatePoolRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePool(updatePoolRequest?: UpdatePoolRequest): Promise<UpdatePoolResponse> {
        const options = ParamCreater().updatePool(updatePoolRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新白名单。可以打开或关闭白名单，或更新访问控制的IP。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新白名单
     * @param {string} whitelistId 待更新的白名单id
     * @param {UpdateWhitelistRequestBody} updateWhitelistRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateWhitelist(updateWhitelistRequest?: UpdateWhitelistRequest): Promise<UpdateWhitelistResponse> {
        const options = ParamCreater().updateWhitelist(updateWhitelistRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建SSL证书。将监听器和SSL证书绑定后，可以通过负载均衡器实现服务端认证，后端服务器只要提供HTTP服务就能实现安全可靠的连接。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建SSL证书
     * @param {CreateCertificateRequestBody} createCertificateRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCertificate(createCertificateRequest?: CreateCertificateRequest): Promise<CreateCertificateResponse> {
        const options = ParamCreater().createCertificate(createCertificateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定的SSL证书
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除SSL证书
     * @param {string} certificateId SSL证书ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCertificate(deleteCertificateRequest?: DeleteCertificateRequest): Promise<DeleteCertificateResponse> {
        const options = ParamCreater().deleteCertificate(deleteCertificateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询SSL证书。支持过滤查询和分页查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询SSL证书列表
     * @param {number} [limit] 每页返回的个数。 取值范围：0~intmax。
     * @param {string} [marker] 分页查询起始的证书id，为空时为查询第一页。 仅当和limit一起使用时生效
     * @param {string} [pageReverse] 分页的顺序，true表示从后往前分页，false表示从前往后分页，默认为false。 仅当和limit一起使用时生效。
     * @param {string} [id] SSL证书ID。
     * @param {string} [name] SSL证书的名称。
     * @param {string} [description] 证书描述SSL证书描述。
     * @param {string} [type] SSL证书的类型。默认值：server；取值范围：server：服务端证书；client：客户端证书；
     * @param {string} [domain] 服务端证书所签的域名。 取值：总长度为0-1024。  普通域名由若干字符串组成，字符串间以\&quot;.\&quot;分割，单个字符串长度不超过63个字符，只能包含英文字母、数字或\&quot;-\&quot;，且必须以字母或数字开头和结尾。  泛域名仅允许首段为\&quot;*\&quot;，其他取值限制与普通域名一致。如：*.domain.com，但不能是：*my.domain.com   该字段仅type为server时有效。
     * @param {string} [privateKey] PEM格式的服务端私有密钥。
     * @param {string} [certificate] PEM格式的服务端公有密钥或者用于认证客户端证书的CA证书，由type字段区分。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCertificates(listCertificatesRequest?: ListCertificatesRequest): Promise<ListCertificatesResponse> {
        const options = ParamCreater().listCertificates(listCertificatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定SSL证书的详情信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询SSL证书详情
     * @param {string} certificateId 证书id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCertificate(showCertificateRequest?: ShowCertificateRequest): Promise<ShowCertificateResponse> {
        const options = ParamCreater().showCertificate(showCertificateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新指定的SSL证书
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新SSL证书
     * @param {string} certificateId SSL证书ID
     * @param {UpdateCertificateRequestBody} [updateCertificateRequestBody] This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateCertificate(updateCertificateRequest?: UpdateCertificateRequest): Promise<UpdateCertificateResponse> {
        const options = ParamCreater().updateCertificate(updateCertificateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 批量添加监听器标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateListenerTags(batchCreateListenerTagsRequest?: BatchCreateListenerTagsRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/listeners/{listener_id}/tags/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let listenerId;

            if (batchCreateListenerTagsRequest !== null && batchCreateListenerTagsRequest !== undefined) {
                if (batchCreateListenerTagsRequest instanceof BatchCreateListenerTagsRequest) {
                    listenerId = batchCreateListenerTagsRequest.listenerId;
                    body = batchCreateListenerTagsRequest.body
                } else {
                    listenerId = batchCreateListenerTagsRequest['listener_id'];
                    body = batchCreateListenerTagsRequest['body'];
                }
            }

        
            if (listenerId === null || listenerId === undefined) {
            throw new RequiredError('listenerId','Required parameter listenerId was null or undefined when calling batchCreateListenerTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'listener_id': listenerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量添加负载均衡器标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateLoadbalancerTags(batchCreateLoadbalancerTagsRequest?: BatchCreateLoadbalancerTagsRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/loadbalancers/{loadbalancer_id}/tags/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let loadbalancerId;

            if (batchCreateLoadbalancerTagsRequest !== null && batchCreateLoadbalancerTagsRequest !== undefined) {
                if (batchCreateLoadbalancerTagsRequest instanceof BatchCreateLoadbalancerTagsRequest) {
                    loadbalancerId = batchCreateLoadbalancerTagsRequest.loadbalancerId;
                    body = batchCreateLoadbalancerTagsRequest.body
                } else {
                    loadbalancerId = batchCreateLoadbalancerTagsRequest['loadbalancer_id'];
                    body = batchCreateLoadbalancerTagsRequest['body'];
                }
            }

        
            if (loadbalancerId === null || loadbalancerId === undefined) {
            throw new RequiredError('loadbalancerId','Required parameter loadbalancerId was null or undefined when calling batchCreateLoadbalancerTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'loadbalancer_id': loadbalancerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除监听器标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteListenerTags(batchDeleteListenerTagsRequest?: BatchDeleteListenerTagsRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/listeners/{listener_id}/tags/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let listenerId;

            if (batchDeleteListenerTagsRequest !== null && batchDeleteListenerTagsRequest !== undefined) {
                if (batchDeleteListenerTagsRequest instanceof BatchDeleteListenerTagsRequest) {
                    listenerId = batchDeleteListenerTagsRequest.listenerId;
                    body = batchDeleteListenerTagsRequest.body
                } else {
                    listenerId = batchDeleteListenerTagsRequest['listener_id'];
                    body = batchDeleteListenerTagsRequest['body'];
                }
            }

        
            if (listenerId === null || listenerId === undefined) {
            throw new RequiredError('listenerId','Required parameter listenerId was null or undefined when calling batchDeleteListenerTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'listener_id': listenerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除负载均衡器标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteLoadbalancerTags(batchDeleteLoadbalancerTagsRequest?: BatchDeleteLoadbalancerTagsRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/loadbalancers/{loadbalancer_id}/tags/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let loadbalancerId;

            if (batchDeleteLoadbalancerTagsRequest !== null && batchDeleteLoadbalancerTagsRequest !== undefined) {
                if (batchDeleteLoadbalancerTagsRequest instanceof BatchDeleteLoadbalancerTagsRequest) {
                    loadbalancerId = batchDeleteLoadbalancerTagsRequest.loadbalancerId;
                    body = batchDeleteLoadbalancerTagsRequest.body
                } else {
                    loadbalancerId = batchDeleteLoadbalancerTagsRequest['loadbalancer_id'];
                    body = batchDeleteLoadbalancerTagsRequest['body'];
                }
            }

        
            if (loadbalancerId === null || loadbalancerId === undefined) {
            throw new RequiredError('loadbalancerId','Required parameter loadbalancerId was null or undefined when calling batchDeleteLoadbalancerTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'loadbalancer_id': loadbalancerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 给后端云服务器组添加健康检查
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createHealthmonitor(createHealthmonitorRequest?: CreateHealthmonitorRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/elb/healthmonitors",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createHealthmonitorRequest !== null && createHealthmonitorRequest !== undefined) {
                if (createHealthmonitorRequest instanceof CreateHealthmonitorRequest) {
                    body = createHealthmonitorRequest.body
                } else {
                    body = createHealthmonitorRequest['body'];
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
         * 创建listener关联的转发策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createL7policy(createL7policyRequest?: CreateL7policyRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/elb/l7policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createL7policyRequest !== null && createL7policyRequest !== undefined) {
                if (createL7policyRequest instanceof CreateL7policyRequest) {
                    body = createL7policyRequest.body
                } else {
                    body = createL7policyRequest['body'];
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
         * 创建转发规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createL7rule(createL7ruleRequest?: CreateL7ruleRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/elb/l7policies/{l7policy_id}/rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let l7policyId;

            if (createL7ruleRequest !== null && createL7ruleRequest !== undefined) {
                if (createL7ruleRequest instanceof CreateL7ruleRequest) {
                    l7policyId = createL7ruleRequest.l7policyId;
                    body = createL7ruleRequest.body
                } else {
                    l7policyId = createL7ruleRequest['l7policy_id'];
                    body = createL7ruleRequest['body'];
                }
            }

        
            if (l7policyId === null || l7policyId === undefined) {
            throw new RequiredError('l7policyId','Required parameter l7policyId was null or undefined when calling createL7rule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'l7policy_id': l7policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建与负载均衡器绑定的监听器。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createListener(createListenerRequest?: CreateListenerRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/elb/listeners",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createListenerRequest !== null && createListenerRequest !== undefined) {
                if (createListenerRequest instanceof CreateListenerRequest) {
                    body = createListenerRequest.body
                } else {
                    body = createListenerRequest['body'];
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
         * 给指定监听器添加标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createListenerTags(createListenerTagsRequest?: CreateListenerTagsRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/listeners/{listener_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let listenerId;

            if (createListenerTagsRequest !== null && createListenerTagsRequest !== undefined) {
                if (createListenerTagsRequest instanceof CreateListenerTagsRequest) {
                    listenerId = createListenerTagsRequest.listenerId;
                    body = createListenerTagsRequest.body
                } else {
                    listenerId = createListenerTagsRequest['listener_id'];
                    body = createListenerTagsRequest['body'];
                }
            }

        
            if (listenerId === null || listenerId === undefined) {
            throw new RequiredError('listenerId','Required parameter listenerId was null or undefined when calling createListenerTags.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'listener_id': listenerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建私网类型的增强型负载均衡器。创建成功后，该接口会返回创建的增强型负载均衡器的ID、所属子网ID、负载均衡器IP等详细信息。若要创建公网类型的增强型负载均衡器，还需调用创建浮动IP的接口，将浮动IP与私网负载均衡器的vip_port_id绑定。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createLoadbalancer(createLoadbalancerRequest?: CreateLoadbalancerRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/elb/loadbalancers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createLoadbalancerRequest !== null && createLoadbalancerRequest !== undefined) {
                if (createLoadbalancerRequest instanceof CreateLoadbalancerRequest) {
                    body = createLoadbalancerRequest.body
                } else {
                    body = createLoadbalancerRequest['body'];
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
         * 给指定负载均衡器添加标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createLoadbalancerTags(createLoadbalancerTagsRequest?: CreateLoadbalancerTagsRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/loadbalancers/{loadbalancer_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let loadbalancerId;

            if (createLoadbalancerTagsRequest !== null && createLoadbalancerTagsRequest !== undefined) {
                if (createLoadbalancerTagsRequest instanceof CreateLoadbalancerTagsRequest) {
                    loadbalancerId = createLoadbalancerTagsRequest.loadbalancerId;
                    body = createLoadbalancerTagsRequest.body
                } else {
                    loadbalancerId = createLoadbalancerTagsRequest['loadbalancer_id'];
                    body = createLoadbalancerTagsRequest['body'];
                }
            }

        
            if (loadbalancerId === null || loadbalancerId === undefined) {
            throw new RequiredError('loadbalancerId','Required parameter loadbalancerId was null or undefined when calling createLoadbalancerTags.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'loadbalancer_id': loadbalancerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加属于某个后端云服务器组的后端云服务器。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createMember(createMemberRequest?: CreateMemberRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/elb/pools/{pool_id}/members",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let poolId;

            if (createMemberRequest !== null && createMemberRequest !== undefined) {
                if (createMemberRequest instanceof CreateMemberRequest) {
                    poolId = createMemberRequest.poolId;
                    body = createMemberRequest.body
                } else {
                    poolId = createMemberRequest['pool_id'];
                    body = createMemberRequest['body'];
                }
            }

        
            if (poolId === null || poolId === undefined) {
            throw new RequiredError('poolId','Required parameter poolId was null or undefined when calling createMember.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'pool_id': poolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建后端云服务器组。将多个后端云服务器添加到后端云服务器组中后，请求会在后端云服务器间按后端云服务器组的负载均衡算法和后端云服务器的权重来做请求分发。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPool(createPoolRequest?: CreatePoolRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/elb/pools",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createPoolRequest !== null && createPoolRequest !== undefined) {
                if (createPoolRequest instanceof CreatePoolRequest) {
                    body = createPoolRequest.body
                } else {
                    body = createPoolRequest['body'];
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
         * 创建白名单，控制监听器的访问权限。若开启了白名单功能，只有白名单中放通的IP可以访问该监听器的后端服务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createWhitelist(createWhitelistRequest?: CreateWhitelistRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/elb/whitelists",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createWhitelistRequest !== null && createWhitelistRequest !== undefined) {
                if (createWhitelistRequest instanceof CreateWhitelistRequest) {
                    body = createWhitelistRequest.body
                } else {
                    body = createWhitelistRequest['body'];
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
         * 删除健康检查
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteHealthmonitor(deleteHealthmonitorRequest?: DeleteHealthmonitorRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/elb/healthmonitors/{healthmonitor_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let healthmonitorId;

            if (deleteHealthmonitorRequest !== null && deleteHealthmonitorRequest !== undefined) {
                if (deleteHealthmonitorRequest instanceof DeleteHealthmonitorRequest) {
                    healthmonitorId = deleteHealthmonitorRequest.healthmonitorId;
                } else {
                    healthmonitorId = deleteHealthmonitorRequest['healthmonitor_id'];
                }
            }

        
            if (healthmonitorId === null || healthmonitorId === undefined) {
            throw new RequiredError('healthmonitorId','Required parameter healthmonitorId was null or undefined when calling deleteHealthmonitor.');
            }

            options.pathParams = { 'healthmonitor_id': healthmonitorId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除转发策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteL7policy(deleteL7policyRequest?: DeleteL7policyRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/elb/l7policies/{l7policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let l7policyId;

            if (deleteL7policyRequest !== null && deleteL7policyRequest !== undefined) {
                if (deleteL7policyRequest instanceof DeleteL7policyRequest) {
                    l7policyId = deleteL7policyRequest.l7policyId;
                } else {
                    l7policyId = deleteL7policyRequest['l7policy_id'];
                }
            }

        
            if (l7policyId === null || l7policyId === undefined) {
            throw new RequiredError('l7policyId','Required parameter l7policyId was null or undefined when calling deleteL7policy.');
            }

            options.pathParams = { 'l7policy_id': l7policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除转发规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteL7rule(deleteL7ruleRequest?: DeleteL7ruleRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/elb/l7policies/{l7policy_id}/rules/{l7rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let l7policyId;
            
            let l7ruleId;

            if (deleteL7ruleRequest !== null && deleteL7ruleRequest !== undefined) {
                if (deleteL7ruleRequest instanceof DeleteL7ruleRequest) {
                    l7policyId = deleteL7ruleRequest.l7policyId;
                    l7ruleId = deleteL7ruleRequest.l7ruleId;
                } else {
                    l7policyId = deleteL7ruleRequest['l7policy_id'];
                    l7ruleId = deleteL7ruleRequest['l7rule_id'];
                }
            }

        
            if (l7policyId === null || l7policyId === undefined) {
            throw new RequiredError('l7policyId','Required parameter l7policyId was null or undefined when calling deleteL7rule.');
            }
            if (l7ruleId === null || l7ruleId === undefined) {
            throw new RequiredError('l7ruleId','Required parameter l7ruleId was null or undefined when calling deleteL7rule.');
            }

            options.pathParams = { 'l7policy_id': l7policyId,'l7rule_id': l7ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据指定ID删除监听器。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteListener(deleteListenerRequest?: DeleteListenerRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/elb/listeners/{listener_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let listenerId;

            if (deleteListenerRequest !== null && deleteListenerRequest !== undefined) {
                if (deleteListenerRequest instanceof DeleteListenerRequest) {
                    listenerId = deleteListenerRequest.listenerId;
                } else {
                    listenerId = deleteListenerRequest['listener_id'];
                }
            }

        
            if (listenerId === null || listenerId === undefined) {
            throw new RequiredError('listenerId','Required parameter listenerId was null or undefined when calling deleteListener.');
            }

            options.pathParams = { 'listener_id': listenerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除监听器的某个key对应的标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteListenerTags(deleteListenerTagsRequest?: DeleteListenerTagsRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.0/{project_id}/listeners/{listener_id}/tags/{key}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let listenerId;
            
            let key;

            if (deleteListenerTagsRequest !== null && deleteListenerTagsRequest !== undefined) {
                if (deleteListenerTagsRequest instanceof DeleteListenerTagsRequest) {
                    listenerId = deleteListenerTagsRequest.listenerId;
                    key = deleteListenerTagsRequest.key;
                } else {
                    listenerId = deleteListenerTagsRequest['listener_id'];
                    key = deleteListenerTagsRequest['key'];
                }
            }

        
            if (listenerId === null || listenerId === undefined) {
            throw new RequiredError('listenerId','Required parameter listenerId was null or undefined when calling deleteListenerTags.');
            }
            if (key === null || key === undefined) {
            throw new RequiredError('key','Required parameter key was null or undefined when calling deleteListenerTags.');
            }

            options.pathParams = { 'listener_id': listenerId,'key': key, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据指定ID删除负载均衡器。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteLoadbalancer(deleteLoadbalancerRequest?: DeleteLoadbalancerRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/elb/loadbalancers/{loadbalancer_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let loadbalancerId;

            if (deleteLoadbalancerRequest !== null && deleteLoadbalancerRequest !== undefined) {
                if (deleteLoadbalancerRequest instanceof DeleteLoadbalancerRequest) {
                    loadbalancerId = deleteLoadbalancerRequest.loadbalancerId;
                } else {
                    loadbalancerId = deleteLoadbalancerRequest['loadbalancer_id'];
                }
            }

        
            if (loadbalancerId === null || loadbalancerId === undefined) {
            throw new RequiredError('loadbalancerId','Required parameter loadbalancerId was null or undefined when calling deleteLoadbalancer.');
            }

            options.pathParams = { 'loadbalancer_id': loadbalancerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除负载均衡器的某个key对应的标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteLoadbalancerTags(deleteLoadbalancerTagsRequest?: DeleteLoadbalancerTagsRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.0/{project_id}/loadbalancers/{loadbalancer_id}/tags/{key}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let loadbalancerId;
            
            let key;

            if (deleteLoadbalancerTagsRequest !== null && deleteLoadbalancerTagsRequest !== undefined) {
                if (deleteLoadbalancerTagsRequest instanceof DeleteLoadbalancerTagsRequest) {
                    loadbalancerId = deleteLoadbalancerTagsRequest.loadbalancerId;
                    key = deleteLoadbalancerTagsRequest.key;
                } else {
                    loadbalancerId = deleteLoadbalancerTagsRequest['loadbalancer_id'];
                    key = deleteLoadbalancerTagsRequest['key'];
                }
            }

        
            if (loadbalancerId === null || loadbalancerId === undefined) {
            throw new RequiredError('loadbalancerId','Required parameter loadbalancerId was null or undefined when calling deleteLoadbalancerTags.');
            }
            if (key === null || key === undefined) {
            throw new RequiredError('key','Required parameter key was null or undefined when calling deleteLoadbalancerTags.');
            }

            options.pathParams = { 'loadbalancer_id': loadbalancerId,'key': key, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除后端云服务器
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteMember(deleteMemberRequest?: DeleteMemberRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/elb/pools/{pool_id}/members/{member_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let poolId;
            
            let memberId;

            if (deleteMemberRequest !== null && deleteMemberRequest !== undefined) {
                if (deleteMemberRequest instanceof DeleteMemberRequest) {
                    poolId = deleteMemberRequest.poolId;
                    memberId = deleteMemberRequest.memberId;
                } else {
                    poolId = deleteMemberRequest['pool_id'];
                    memberId = deleteMemberRequest['member_id'];
                }
            }

        
            if (poolId === null || poolId === undefined) {
            throw new RequiredError('poolId','Required parameter poolId was null or undefined when calling deleteMember.');
            }
            if (memberId === null || memberId === undefined) {
            throw new RequiredError('memberId','Required parameter memberId was null or undefined when calling deleteMember.');
            }

            options.pathParams = { 'pool_id': poolId,'member_id': memberId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除后端云服务器组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePool(deletePoolRequest?: DeletePoolRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/elb/pools/{pool_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let poolId;

            if (deletePoolRequest !== null && deletePoolRequest !== undefined) {
                if (deletePoolRequest instanceof DeletePoolRequest) {
                    poolId = deletePoolRequest.poolId;
                } else {
                    poolId = deletePoolRequest['pool_id'];
                }
            }

        
            if (poolId === null || poolId === undefined) {
            throw new RequiredError('poolId','Required parameter poolId was null or undefined when calling deletePool.');
            }

            options.pathParams = { 'pool_id': poolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除白名单
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteWhitelist(deleteWhitelistRequest?: DeleteWhitelistRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/elb/whitelists/{whitelist_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let whitelistId;

            if (deleteWhitelistRequest !== null && deleteWhitelistRequest !== undefined) {
                if (deleteWhitelistRequest instanceof DeleteWhitelistRequest) {
                    whitelistId = deleteWhitelistRequest.whitelistId;
                } else {
                    whitelistId = deleteWhitelistRequest['whitelist_id'];
                }
            }

        
            if (whitelistId === null || whitelistId === undefined) {
            throw new RequiredError('whitelistId','Required parameter whitelistId was null or undefined when calling deleteWhitelist.');
            }

            options.pathParams = { 'whitelist_id': whitelistId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询健康检查列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHealthmonitors(listHealthmonitorsRequest?: ListHealthmonitorsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/elb/healthmonitors",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let pageReverse;
            
            let id;
            
            let name;
            
            let delay;
            
            let maxRetries;
            
            let adminStateUp;
            
            let timeout;
            
            let type;
            
            let monitorPort;
            
            let expectedCodes;
            
            let domainName;
            
            let urlPath;
            
            let httpMethod;

            if (listHealthmonitorsRequest !== null && listHealthmonitorsRequest !== undefined) {
                if (listHealthmonitorsRequest instanceof ListHealthmonitorsRequest) {
                    limit = listHealthmonitorsRequest.limit;
                    marker = listHealthmonitorsRequest.marker;
                    pageReverse = listHealthmonitorsRequest.pageReverse;
                    id = listHealthmonitorsRequest.id;
                    name = listHealthmonitorsRequest.name;
                    delay = listHealthmonitorsRequest.delay;
                    maxRetries = listHealthmonitorsRequest.maxRetries;
                    adminStateUp = listHealthmonitorsRequest.adminStateUp;
                    timeout = listHealthmonitorsRequest.timeout;
                    type = listHealthmonitorsRequest.type;
                    monitorPort = listHealthmonitorsRequest.monitorPort;
                    expectedCodes = listHealthmonitorsRequest.expectedCodes;
                    domainName = listHealthmonitorsRequest.domainName;
                    urlPath = listHealthmonitorsRequest.urlPath;
                    httpMethod = listHealthmonitorsRequest.httpMethod;
                } else {
                    limit = listHealthmonitorsRequest['limit'];
                    marker = listHealthmonitorsRequest['marker'];
                    pageReverse = listHealthmonitorsRequest['page_reverse'];
                    id = listHealthmonitorsRequest['id'];
                    name = listHealthmonitorsRequest['name'];
                    delay = listHealthmonitorsRequest['delay'];
                    maxRetries = listHealthmonitorsRequest['max_retries'];
                    adminStateUp = listHealthmonitorsRequest['admin_state_up'];
                    timeout = listHealthmonitorsRequest['timeout'];
                    type = listHealthmonitorsRequest['type'];
                    monitorPort = listHealthmonitorsRequest['monitor_port'];
                    expectedCodes = listHealthmonitorsRequest['expected_codes'];
                    domainName = listHealthmonitorsRequest['domain_name'];
                    urlPath = listHealthmonitorsRequest['url_path'];
                    httpMethod = listHealthmonitorsRequest['http_method'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (pageReverse !== null && pageReverse !== undefined) {
                localVarQueryParameter['page_reverse'] = pageReverse;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (delay !== null && delay !== undefined) {
                localVarQueryParameter['delay'] = delay;
            }
            if (maxRetries !== null && maxRetries !== undefined) {
                localVarQueryParameter['max_retries'] = maxRetries;
            }
            if (adminStateUp !== null && adminStateUp !== undefined) {
                localVarQueryParameter['admin_state_up'] = adminStateUp;
            }
            if (timeout !== null && timeout !== undefined) {
                localVarQueryParameter['timeout'] = timeout;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (monitorPort !== null && monitorPort !== undefined) {
                localVarQueryParameter['monitor_port'] = monitorPort;
            }
            if (expectedCodes !== null && expectedCodes !== undefined) {
                localVarQueryParameter['expected_codes'] = expectedCodes;
            }
            if (domainName !== null && domainName !== undefined) {
                localVarQueryParameter['domain_name'] = domainName;
            }
            if (urlPath !== null && urlPath !== undefined) {
                localVarQueryParameter['url_path'] = urlPath;
            }
            if (httpMethod !== null && httpMethod !== undefined) {
                localVarQueryParameter['http_method'] = httpMethod;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询转发策略。支持过滤查询和分页查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listL7policies(listL7policiesRequest?: ListL7policiesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/elb/l7policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let pageReverse;
            
            let id;
            
            let name;
            
            let description;
            
            let adminStateUp;
            
            let listenerId;
            
            let action;
            
            let redirectPoolId;
            
            let redirectListenerId;
            
            let redirectUrl;
            
            let position;
            
            let provisioningStatus;
            
            let enterpriseProjectId;
            
            let displayAllRules;

            if (listL7policiesRequest !== null && listL7policiesRequest !== undefined) {
                if (listL7policiesRequest instanceof ListL7policiesRequest) {
                    limit = listL7policiesRequest.limit;
                    marker = listL7policiesRequest.marker;
                    pageReverse = listL7policiesRequest.pageReverse;
                    id = listL7policiesRequest.id;
                    name = listL7policiesRequest.name;
                    description = listL7policiesRequest.description;
                    adminStateUp = listL7policiesRequest.adminStateUp;
                    listenerId = listL7policiesRequest.listenerId;
                    action = listL7policiesRequest.action;
                    redirectPoolId = listL7policiesRequest.redirectPoolId;
                    redirectListenerId = listL7policiesRequest.redirectListenerId;
                    redirectUrl = listL7policiesRequest.redirectUrl;
                    position = listL7policiesRequest.position;
                    provisioningStatus = listL7policiesRequest.provisioningStatus;
                    enterpriseProjectId = listL7policiesRequest.enterpriseProjectId;
                    displayAllRules = listL7policiesRequest.displayAllRules;
                } else {
                    limit = listL7policiesRequest['limit'];
                    marker = listL7policiesRequest['marker'];
                    pageReverse = listL7policiesRequest['page_reverse'];
                    id = listL7policiesRequest['id'];
                    name = listL7policiesRequest['name'];
                    description = listL7policiesRequest['description'];
                    adminStateUp = listL7policiesRequest['admin_state_up'];
                    listenerId = listL7policiesRequest['listener_id'];
                    action = listL7policiesRequest['action'];
                    redirectPoolId = listL7policiesRequest['redirect_pool_id'];
                    redirectListenerId = listL7policiesRequest['redirect_listener_id'];
                    redirectUrl = listL7policiesRequest['redirect_url'];
                    position = listL7policiesRequest['position'];
                    provisioningStatus = listL7policiesRequest['provisioning_status'];
                    enterpriseProjectId = listL7policiesRequest['enterprise_project_id'];
                    displayAllRules = listL7policiesRequest['display_all_rules'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (pageReverse !== null && pageReverse !== undefined) {
                localVarQueryParameter['page_reverse'] = pageReverse;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (adminStateUp !== null && adminStateUp !== undefined) {
                localVarQueryParameter['admin_state_up'] = adminStateUp;
            }
            if (listenerId !== null && listenerId !== undefined) {
                localVarQueryParameter['listener_id'] = listenerId;
            }
            if (action !== null && action !== undefined) {
                localVarQueryParameter['action'] = action;
            }
            if (redirectPoolId !== null && redirectPoolId !== undefined) {
                localVarQueryParameter['redirect_pool_id'] = redirectPoolId;
            }
            if (redirectListenerId !== null && redirectListenerId !== undefined) {
                localVarQueryParameter['redirect_listener_id'] = redirectListenerId;
            }
            if (redirectUrl !== null && redirectUrl !== undefined) {
                localVarQueryParameter['redirect_url'] = redirectUrl;
            }
            if (position !== null && position !== undefined) {
                localVarQueryParameter['position'] = position;
            }
            if (provisioningStatus !== null && provisioningStatus !== undefined) {
                localVarQueryParameter['provisioning_status'] = provisioningStatus;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (displayAllRules !== null && displayAllRules !== undefined) {
                localVarQueryParameter['display_all_rules'] = displayAllRules;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定转发策略下关联的转发规则列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listL7rules(listL7rulesRequest?: ListL7rulesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/elb/l7policies/{l7policy_id}/rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let l7policyId;
            
            let limit;
            
            let marker;
            
            let pageReverse;
            
            let id;
            
            let adminStateUp;
            
            let type;
            
            let compareType;
            
            let invert;
            
            let key;
            
            let value;
            
            let provisioningStatus;

            if (listL7rulesRequest !== null && listL7rulesRequest !== undefined) {
                if (listL7rulesRequest instanceof ListL7rulesRequest) {
                    l7policyId = listL7rulesRequest.l7policyId;
                    limit = listL7rulesRequest.limit;
                    marker = listL7rulesRequest.marker;
                    pageReverse = listL7rulesRequest.pageReverse;
                    id = listL7rulesRequest.id;
                    adminStateUp = listL7rulesRequest.adminStateUp;
                    type = listL7rulesRequest.type;
                    compareType = listL7rulesRequest.compareType;
                    invert = listL7rulesRequest.invert;
                    key = listL7rulesRequest.key;
                    value = listL7rulesRequest.value;
                    provisioningStatus = listL7rulesRequest.provisioningStatus;
                } else {
                    l7policyId = listL7rulesRequest['l7policy_id'];
                    limit = listL7rulesRequest['limit'];
                    marker = listL7rulesRequest['marker'];
                    pageReverse = listL7rulesRequest['page_reverse'];
                    id = listL7rulesRequest['id'];
                    adminStateUp = listL7rulesRequest['admin_state_up'];
                    type = listL7rulesRequest['type'];
                    compareType = listL7rulesRequest['compare_type'];
                    invert = listL7rulesRequest['invert'];
                    key = listL7rulesRequest['key'];
                    value = listL7rulesRequest['value'];
                    provisioningStatus = listL7rulesRequest['provisioning_status'];
                }
            }

        
            if (l7policyId === null || l7policyId === undefined) {
            throw new RequiredError('l7policyId','Required parameter l7policyId was null or undefined when calling listL7rules.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (pageReverse !== null && pageReverse !== undefined) {
                localVarQueryParameter['page_reverse'] = pageReverse;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (adminStateUp !== null && adminStateUp !== undefined) {
                localVarQueryParameter['admin_state_up'] = adminStateUp;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (compareType !== null && compareType !== undefined) {
                localVarQueryParameter['compare_type'] = compareType;
            }
            if (invert !== null && invert !== undefined) {
                localVarQueryParameter['invert'] = invert;
            }
            if (key !== null && key !== undefined) {
                localVarQueryParameter['key'] = key;
            }
            if (value !== null && value !== undefined) {
                localVarQueryParameter['value'] = value;
            }
            if (provisioningStatus !== null && provisioningStatus !== undefined) {
                localVarQueryParameter['provisioning_status'] = provisioningStatus;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'l7policy_id': l7policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定项目下所有监听器的标签列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listListenerTags() {
            const options = {
                method: "GET",
                url: "/v2.0/{project_id}/listeners/tags",
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
         * 查询监听器列表。支持过滤查询和分页查询。可以通过监听器ID、协议类型、监听端口号、关联的后端云服务器的IP等查询监听器。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listListeners(listListenersRequest?: ListListenersRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/elb/listeners",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let pageReverse;
            
            let id;
            
            let name;
            
            let description;
            
            let loadbalancerId;
            
            let connectionLimit;
            
            let adminStateUp;
            
            let defaultPoolId;
            
            let defaultTlsContainerRef;
            
            let clientCaTlsContainerRef;
            
            let protocol;
            
            let protocolPort;
            
            let tlsCiphersPolicy;
            
            let tlsContainerId;
            
            let http2Enable;
            
            let enterpriseProjectId;

            if (listListenersRequest !== null && listListenersRequest !== undefined) {
                if (listListenersRequest instanceof ListListenersRequest) {
                    limit = listListenersRequest.limit;
                    marker = listListenersRequest.marker;
                    pageReverse = listListenersRequest.pageReverse;
                    id = listListenersRequest.id;
                    name = listListenersRequest.name;
                    description = listListenersRequest.description;
                    loadbalancerId = listListenersRequest.loadbalancerId;
                    connectionLimit = listListenersRequest.connectionLimit;
                    adminStateUp = listListenersRequest.adminStateUp;
                    defaultPoolId = listListenersRequest.defaultPoolId;
                    defaultTlsContainerRef = listListenersRequest.defaultTlsContainerRef;
                    clientCaTlsContainerRef = listListenersRequest.clientCaTlsContainerRef;
                    protocol = listListenersRequest.protocol;
                    protocolPort = listListenersRequest.protocolPort;
                    tlsCiphersPolicy = listListenersRequest.tlsCiphersPolicy;
                    tlsContainerId = listListenersRequest.tlsContainerId;
                    http2Enable = listListenersRequest.http2Enable;
                    enterpriseProjectId = listListenersRequest.enterpriseProjectId;
                } else {
                    limit = listListenersRequest['limit'];
                    marker = listListenersRequest['marker'];
                    pageReverse = listListenersRequest['page_reverse'];
                    id = listListenersRequest['id'];
                    name = listListenersRequest['name'];
                    description = listListenersRequest['description'];
                    loadbalancerId = listListenersRequest['loadbalancer_id'];
                    connectionLimit = listListenersRequest['connection_limit'];
                    adminStateUp = listListenersRequest['admin_state_up'];
                    defaultPoolId = listListenersRequest['default_pool_id'];
                    defaultTlsContainerRef = listListenersRequest['default_tls_container_ref'];
                    clientCaTlsContainerRef = listListenersRequest['client_ca_tls_container_ref'];
                    protocol = listListenersRequest['protocol'];
                    protocolPort = listListenersRequest['protocol_port'];
                    tlsCiphersPolicy = listListenersRequest['tls_ciphers_policy'];
                    tlsContainerId = listListenersRequest['tls_container_id'];
                    http2Enable = listListenersRequest['http2_enable'];
                    enterpriseProjectId = listListenersRequest['enterprise_project_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (pageReverse !== null && pageReverse !== undefined) {
                localVarQueryParameter['page_reverse'] = pageReverse;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (loadbalancerId !== null && loadbalancerId !== undefined) {
                localVarQueryParameter['loadbalancer_id'] = loadbalancerId;
            }
            if (connectionLimit !== null && connectionLimit !== undefined) {
                localVarQueryParameter['connection_limit'] = connectionLimit;
            }
            if (adminStateUp !== null && adminStateUp !== undefined) {
                localVarQueryParameter['admin_state_up'] = adminStateUp;
            }
            if (defaultPoolId !== null && defaultPoolId !== undefined) {
                localVarQueryParameter['default_pool_id'] = defaultPoolId;
            }
            if (defaultTlsContainerRef !== null && defaultTlsContainerRef !== undefined) {
                localVarQueryParameter['default_tls_container_ref'] = defaultTlsContainerRef;
            }
            if (clientCaTlsContainerRef !== null && clientCaTlsContainerRef !== undefined) {
                localVarQueryParameter['client_ca_tls_container_ref'] = clientCaTlsContainerRef;
            }
            if (protocol !== null && protocol !== undefined) {
                localVarQueryParameter['protocol'] = protocol;
            }
            if (protocolPort !== null && protocolPort !== undefined) {
                localVarQueryParameter['protocol_port'] = protocolPort;
            }
            if (tlsCiphersPolicy !== null && tlsCiphersPolicy !== undefined) {
                localVarQueryParameter['tls_ciphers_policy'] = tlsCiphersPolicy;
            }
            if (tlsContainerId !== null && tlsContainerId !== undefined) {
                localVarQueryParameter['tls_container_id'] = tlsContainerId;
            }
            if (http2Enable !== null && http2Enable !== undefined) {
                localVarQueryParameter['http2_enable'] = http2Enable;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据标签过滤查询监听器实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listListenersByTags(listListenersByTagsRequest?: ListListenersByTagsRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/listeners/resource_instances/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (listListenersByTagsRequest !== null && listListenersByTagsRequest !== undefined) {
                if (listListenersByTagsRequest instanceof ListListenersByTagsRequest) {
                    body = listListenersByTagsRequest.body
                } else {
                    body = listListenersByTagsRequest['body'];
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
         * 查询指定项目下所有负载均衡器的标签列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLoadbalancerTags() {
            const options = {
                method: "GET",
                url: "/v2.0/{project_id}/loadbalancers/tags",
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
         * 查询负载均衡器列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLoadbalancers(listLoadbalancersRequest?: ListLoadbalancersRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/elb/loadbalancers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let pageReverse;
            
            let id;
            
            let description;
            
            let name;
            
            let operatingStatus;
            
            let provisioningStatus;
            
            let vipAddress;
            
            let vipPortId;
            
            let vipSubnetId;
            
            let vpcId;
            
            let enterpriseProjectId;
            
            let adminStateUp;
            
            let memberAddress;
            
            let memberDeviceId;

            if (listLoadbalancersRequest !== null && listLoadbalancersRequest !== undefined) {
                if (listLoadbalancersRequest instanceof ListLoadbalancersRequest) {
                    limit = listLoadbalancersRequest.limit;
                    marker = listLoadbalancersRequest.marker;
                    pageReverse = listLoadbalancersRequest.pageReverse;
                    id = listLoadbalancersRequest.id;
                    description = listLoadbalancersRequest.description;
                    name = listLoadbalancersRequest.name;
                    operatingStatus = listLoadbalancersRequest.operatingStatus;
                    provisioningStatus = listLoadbalancersRequest.provisioningStatus;
                    vipAddress = listLoadbalancersRequest.vipAddress;
                    vipPortId = listLoadbalancersRequest.vipPortId;
                    vipSubnetId = listLoadbalancersRequest.vipSubnetId;
                    vpcId = listLoadbalancersRequest.vpcId;
                    enterpriseProjectId = listLoadbalancersRequest.enterpriseProjectId;
                    adminStateUp = listLoadbalancersRequest.adminStateUp;
                    memberAddress = listLoadbalancersRequest.memberAddress;
                    memberDeviceId = listLoadbalancersRequest.memberDeviceId;
                } else {
                    limit = listLoadbalancersRequest['limit'];
                    marker = listLoadbalancersRequest['marker'];
                    pageReverse = listLoadbalancersRequest['page_reverse'];
                    id = listLoadbalancersRequest['id'];
                    description = listLoadbalancersRequest['description'];
                    name = listLoadbalancersRequest['name'];
                    operatingStatus = listLoadbalancersRequest['operating_status'];
                    provisioningStatus = listLoadbalancersRequest['provisioning_status'];
                    vipAddress = listLoadbalancersRequest['vip_address'];
                    vipPortId = listLoadbalancersRequest['vip_port_id'];
                    vipSubnetId = listLoadbalancersRequest['vip_subnet_id'];
                    vpcId = listLoadbalancersRequest['vpc_id'];
                    enterpriseProjectId = listLoadbalancersRequest['enterprise_project_id'];
                    adminStateUp = listLoadbalancersRequest['admin_state_up'];
                    memberAddress = listLoadbalancersRequest['member_address'];
                    memberDeviceId = listLoadbalancersRequest['member_device_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (pageReverse !== null && pageReverse !== undefined) {
                localVarQueryParameter['page_reverse'] = pageReverse;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (operatingStatus !== null && operatingStatus !== undefined) {
                localVarQueryParameter['operating_status'] = operatingStatus;
            }
            if (provisioningStatus !== null && provisioningStatus !== undefined) {
                localVarQueryParameter['provisioning_status'] = provisioningStatus;
            }
            if (vipAddress !== null && vipAddress !== undefined) {
                localVarQueryParameter['vip_address'] = vipAddress;
            }
            if (vipPortId !== null && vipPortId !== undefined) {
                localVarQueryParameter['vip_port_id'] = vipPortId;
            }
            if (vipSubnetId !== null && vipSubnetId !== undefined) {
                localVarQueryParameter['vip_subnet_id'] = vipSubnetId;
            }
            if (vpcId !== null && vpcId !== undefined) {
                localVarQueryParameter['vpc_id'] = vpcId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (adminStateUp !== null && adminStateUp !== undefined) {
                localVarQueryParameter['admin_state_up'] = adminStateUp;
            }
            if (memberAddress !== null && memberAddress !== undefined) {
                localVarQueryParameter['member_address'] = memberAddress;
            }
            if (memberDeviceId !== null && memberDeviceId !== undefined) {
                localVarQueryParameter['member_device_id'] = memberDeviceId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据标签过滤查询负载均衡实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLoadbalancersByTags(listLoadbalancersByTagsRequest?: ListLoadbalancersByTagsRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/loadbalancers/resource_instances/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (listLoadbalancersByTagsRequest !== null && listLoadbalancersByTagsRequest !== undefined) {
                if (listLoadbalancersByTagsRequest instanceof ListLoadbalancersByTagsRequest) {
                    body = listLoadbalancersByTagsRequest.body
                } else {
                    body = listLoadbalancersByTagsRequest['body'];
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
         * 查询属于某个后端云服务器组的后端云服务器。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMembers(listMembersRequest?: ListMembersRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/elb/pools/{pool_id}/members",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let poolId;
            
            let limit;
            
            let marker;
            
            let pageReverse;
            
            let id;
            
            let name;
            
            let address;
            
            let protocolPort;
            
            let subnetId;
            
            let adminStateUp;
            
            let weight;

            if (listMembersRequest !== null && listMembersRequest !== undefined) {
                if (listMembersRequest instanceof ListMembersRequest) {
                    poolId = listMembersRequest.poolId;
                    limit = listMembersRequest.limit;
                    marker = listMembersRequest.marker;
                    pageReverse = listMembersRequest.pageReverse;
                    id = listMembersRequest.id;
                    name = listMembersRequest.name;
                    address = listMembersRequest.address;
                    protocolPort = listMembersRequest.protocolPort;
                    subnetId = listMembersRequest.subnetId;
                    adminStateUp = listMembersRequest.adminStateUp;
                    weight = listMembersRequest.weight;
                } else {
                    poolId = listMembersRequest['pool_id'];
                    limit = listMembersRequest['limit'];
                    marker = listMembersRequest['marker'];
                    pageReverse = listMembersRequest['page_reverse'];
                    id = listMembersRequest['id'];
                    name = listMembersRequest['name'];
                    address = listMembersRequest['address'];
                    protocolPort = listMembersRequest['protocol_port'];
                    subnetId = listMembersRequest['subnet_id'];
                    adminStateUp = listMembersRequest['admin_state_up'];
                    weight = listMembersRequest['weight'];
                }
            }

        
            if (poolId === null || poolId === undefined) {
            throw new RequiredError('poolId','Required parameter poolId was null or undefined when calling listMembers.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (pageReverse !== null && pageReverse !== undefined) {
                localVarQueryParameter['page_reverse'] = pageReverse;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (address !== null && address !== undefined) {
                localVarQueryParameter['address'] = address;
            }
            if (protocolPort !== null && protocolPort !== undefined) {
                localVarQueryParameter['protocol_port'] = protocolPort;
            }
            if (subnetId !== null && subnetId !== undefined) {
                localVarQueryParameter['subnet_id'] = subnetId;
            }
            if (adminStateUp !== null && adminStateUp !== undefined) {
                localVarQueryParameter['admin_state_up'] = adminStateUp;
            }
            if (weight !== null && weight !== undefined) {
                localVarQueryParameter['weight'] = weight;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'pool_id': poolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询后端云服务器组列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPools(listPoolsRequest?: ListPoolsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/elb/pools",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let pageReverse;
            
            let id;
            
            let name;
            
            let description;
            
            let healthmonitorId;
            
            let loadbalancerId;
            
            let protocol;
            
            let lbAlgorithm;
            
            let memberAddress;
            
            let memberDeviceId;
            
            let enterpriseProjectId;

            if (listPoolsRequest !== null && listPoolsRequest !== undefined) {
                if (listPoolsRequest instanceof ListPoolsRequest) {
                    limit = listPoolsRequest.limit;
                    marker = listPoolsRequest.marker;
                    pageReverse = listPoolsRequest.pageReverse;
                    id = listPoolsRequest.id;
                    name = listPoolsRequest.name;
                    description = listPoolsRequest.description;
                    healthmonitorId = listPoolsRequest.healthmonitorId;
                    loadbalancerId = listPoolsRequest.loadbalancerId;
                    protocol = listPoolsRequest.protocol;
                    lbAlgorithm = listPoolsRequest.lbAlgorithm;
                    memberAddress = listPoolsRequest.memberAddress;
                    memberDeviceId = listPoolsRequest.memberDeviceId;
                    enterpriseProjectId = listPoolsRequest.enterpriseProjectId;
                } else {
                    limit = listPoolsRequest['limit'];
                    marker = listPoolsRequest['marker'];
                    pageReverse = listPoolsRequest['page_reverse'];
                    id = listPoolsRequest['id'];
                    name = listPoolsRequest['name'];
                    description = listPoolsRequest['description'];
                    healthmonitorId = listPoolsRequest['healthmonitor_id'];
                    loadbalancerId = listPoolsRequest['loadbalancer_id'];
                    protocol = listPoolsRequest['protocol'];
                    lbAlgorithm = listPoolsRequest['lb_algorithm'];
                    memberAddress = listPoolsRequest['member_address'];
                    memberDeviceId = listPoolsRequest['member_device_id'];
                    enterpriseProjectId = listPoolsRequest['enterprise_project_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (pageReverse !== null && pageReverse !== undefined) {
                localVarQueryParameter['page_reverse'] = pageReverse;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (healthmonitorId !== null && healthmonitorId !== undefined) {
                localVarQueryParameter['healthmonitor_id'] = healthmonitorId;
            }
            if (loadbalancerId !== null && loadbalancerId !== undefined) {
                localVarQueryParameter['loadbalancer_id'] = loadbalancerId;
            }
            if (protocol !== null && protocol !== undefined) {
                localVarQueryParameter['protocol'] = protocol;
            }
            if (lbAlgorithm !== null && lbAlgorithm !== undefined) {
                localVarQueryParameter['lb_algorithm'] = lbAlgorithm;
            }
            if (memberAddress !== null && memberAddress !== undefined) {
                localVarQueryParameter['member_address'] = memberAddress;
            }
            if (memberDeviceId !== null && memberDeviceId !== undefined) {
                localVarQueryParameter['member_device_id'] = memberDeviceId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询白名单，支持过滤查询和分页查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWhitelists(listWhitelistsRequest?: ListWhitelistsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/elb/whitelists",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let pageReverse;
            
            let id;
            
            let enableWhitelist;
            
            let listenerId;
            
            let whitelist;

            if (listWhitelistsRequest !== null && listWhitelistsRequest !== undefined) {
                if (listWhitelistsRequest instanceof ListWhitelistsRequest) {
                    limit = listWhitelistsRequest.limit;
                    marker = listWhitelistsRequest.marker;
                    pageReverse = listWhitelistsRequest.pageReverse;
                    id = listWhitelistsRequest.id;
                    enableWhitelist = listWhitelistsRequest.enableWhitelist;
                    listenerId = listWhitelistsRequest.listenerId;
                    whitelist = listWhitelistsRequest.whitelist;
                } else {
                    limit = listWhitelistsRequest['limit'];
                    marker = listWhitelistsRequest['marker'];
                    pageReverse = listWhitelistsRequest['page_reverse'];
                    id = listWhitelistsRequest['id'];
                    enableWhitelist = listWhitelistsRequest['enable_whitelist'];
                    listenerId = listWhitelistsRequest['listener_id'];
                    whitelist = listWhitelistsRequest['whitelist'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (pageReverse !== null && pageReverse !== undefined) {
                localVarQueryParameter['page_reverse'] = pageReverse;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (enableWhitelist !== null && enableWhitelist !== undefined) {
                localVarQueryParameter['enable_whitelist'] = enableWhitelist;
            }
            if (listenerId !== null && listenerId !== undefined) {
                localVarQueryParameter['listener_id'] = listenerId;
            }
            if (whitelist !== null && whitelist !== undefined) {
                localVarQueryParameter['whitelist'] = whitelist;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据指定ID查询健康检查详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showHealthmonitors(showHealthmonitorsRequest?: ShowHealthmonitorsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/elb/healthmonitors/{healthmonitor_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let healthmonitorId;

            if (showHealthmonitorsRequest !== null && showHealthmonitorsRequest !== undefined) {
                if (showHealthmonitorsRequest instanceof ShowHealthmonitorsRequest) {
                    healthmonitorId = showHealthmonitorsRequest.healthmonitorId;
                } else {
                    healthmonitorId = showHealthmonitorsRequest['healthmonitor_id'];
                }
            }

        
            if (healthmonitorId === null || healthmonitorId === undefined) {
            throw new RequiredError('healthmonitorId','Required parameter healthmonitorId was null or undefined when calling showHealthmonitors.');
            }

            options.pathParams = { 'healthmonitor_id': healthmonitorId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据指定ID查询转发策略详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showL7policy(showL7policyRequest?: ShowL7policyRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/elb/l7policies/{l7policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let l7policyId;

            if (showL7policyRequest !== null && showL7policyRequest !== undefined) {
                if (showL7policyRequest instanceof ShowL7policyRequest) {
                    l7policyId = showL7policyRequest.l7policyId;
                } else {
                    l7policyId = showL7policyRequest['l7policy_id'];
                }
            }

        
            if (l7policyId === null || l7policyId === undefined) {
            throw new RequiredError('l7policyId','Required parameter l7policyId was null or undefined when calling showL7policy.');
            }

            options.pathParams = { 'l7policy_id': l7policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据指定ID查询某转发策略下关联的转发规则详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showL7rule(showL7ruleRequest?: ShowL7ruleRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/elb/l7policies/{l7policy_id}/rules/{l7rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let l7policyId;
            
            let l7ruleId;

            if (showL7ruleRequest !== null && showL7ruleRequest !== undefined) {
                if (showL7ruleRequest instanceof ShowL7ruleRequest) {
                    l7policyId = showL7ruleRequest.l7policyId;
                    l7ruleId = showL7ruleRequest.l7ruleId;
                } else {
                    l7policyId = showL7ruleRequest['l7policy_id'];
                    l7ruleId = showL7ruleRequest['l7rule_id'];
                }
            }

        
            if (l7policyId === null || l7policyId === undefined) {
            throw new RequiredError('l7policyId','Required parameter l7policyId was null or undefined when calling showL7rule.');
            }
            if (l7ruleId === null || l7ruleId === undefined) {
            throw new RequiredError('l7ruleId','Required parameter l7ruleId was null or undefined when calling showL7rule.');
            }

            options.pathParams = { 'l7policy_id': l7policyId,'l7rule_id': l7ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据指定ID查询监听器详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showListener(showListenerRequest?: ShowListenerRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/elb/listeners/{listener_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let listenerId;

            if (showListenerRequest !== null && showListenerRequest !== undefined) {
                if (showListenerRequest instanceof ShowListenerRequest) {
                    listenerId = showListenerRequest.listenerId;
                } else {
                    listenerId = showListenerRequest['listener_id'];
                }
            }

        
            if (listenerId === null || listenerId === undefined) {
            throw new RequiredError('listenerId','Required parameter listenerId was null or undefined when calling showListener.');
            }

            options.pathParams = { 'listener_id': listenerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定监听器的所有标签信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showListenerTags(showListenerTagsRequest?: ShowListenerTagsRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/{project_id}/listeners/{listener_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let listenerId;

            if (showListenerTagsRequest !== null && showListenerTagsRequest !== undefined) {
                if (showListenerTagsRequest instanceof ShowListenerTagsRequest) {
                    listenerId = showListenerTagsRequest.listenerId;
                } else {
                    listenerId = showListenerTagsRequest['listener_id'];
                }
            }

        
            if (listenerId === null || listenerId === undefined) {
            throw new RequiredError('listenerId','Required parameter listenerId was null or undefined when calling showListenerTags.');
            }

            options.pathParams = { 'listener_id': listenerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据指定负载均衡器ID查询负载均衡器详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showLoadbalancer(showLoadbalancerRequest?: ShowLoadbalancerRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/elb/loadbalancers/{loadbalancer_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let loadbalancerId;

            if (showLoadbalancerRequest !== null && showLoadbalancerRequest !== undefined) {
                if (showLoadbalancerRequest instanceof ShowLoadbalancerRequest) {
                    loadbalancerId = showLoadbalancerRequest.loadbalancerId;
                } else {
                    loadbalancerId = showLoadbalancerRequest['loadbalancer_id'];
                }
            }

        
            if (loadbalancerId === null || loadbalancerId === undefined) {
            throw new RequiredError('loadbalancerId','Required parameter loadbalancerId was null or undefined when calling showLoadbalancer.');
            }

            options.pathParams = { 'loadbalancer_id': loadbalancerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定负载均衡器的所有标签信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showLoadbalancerTags(showLoadbalancerTagsRequest?: ShowLoadbalancerTagsRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/{project_id}/loadbalancers/{loadbalancer_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let loadbalancerId;

            if (showLoadbalancerTagsRequest !== null && showLoadbalancerTagsRequest !== undefined) {
                if (showLoadbalancerTagsRequest instanceof ShowLoadbalancerTagsRequest) {
                    loadbalancerId = showLoadbalancerTagsRequest.loadbalancerId;
                } else {
                    loadbalancerId = showLoadbalancerTagsRequest['loadbalancer_id'];
                }
            }

        
            if (loadbalancerId === null || loadbalancerId === undefined) {
            throw new RequiredError('loadbalancerId','Required parameter loadbalancerId was null or undefined when calling showLoadbalancerTags.');
            }

            options.pathParams = { 'loadbalancer_id': loadbalancerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询负载均衡器状态树。可通过该接口查询负载均衡器关联的监听器、后端云服务器组、后端云服务器、健康检查、转发策略、转发规则的主要信息，了解负载均衡器下资源的拓扑情况。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showLoadbalancersStatus(showLoadbalancersStatusRequest?: ShowLoadbalancersStatusRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/elb/loadbalancers/{loadbalancer_id}/statuses",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let loadbalancerId;

            if (showLoadbalancersStatusRequest !== null && showLoadbalancersStatusRequest !== undefined) {
                if (showLoadbalancersStatusRequest instanceof ShowLoadbalancersStatusRequest) {
                    loadbalancerId = showLoadbalancersStatusRequest.loadbalancerId;
                } else {
                    loadbalancerId = showLoadbalancersStatusRequest['loadbalancer_id'];
                }
            }

        
            if (loadbalancerId === null || loadbalancerId === undefined) {
            throw new RequiredError('loadbalancerId','Required parameter loadbalancerId was null or undefined when calling showLoadbalancersStatus.');
            }

            options.pathParams = { 'loadbalancer_id': loadbalancerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据指定ID查询后端云服务器详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMember(showMemberRequest?: ShowMemberRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/elb/pools/{pool_id}/members/{member_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let poolId;
            
            let memberId;

            if (showMemberRequest !== null && showMemberRequest !== undefined) {
                if (showMemberRequest instanceof ShowMemberRequest) {
                    poolId = showMemberRequest.poolId;
                    memberId = showMemberRequest.memberId;
                } else {
                    poolId = showMemberRequest['pool_id'];
                    memberId = showMemberRequest['member_id'];
                }
            }

        
            if (poolId === null || poolId === undefined) {
            throw new RequiredError('poolId','Required parameter poolId was null or undefined when calling showMember.');
            }
            if (memberId === null || memberId === undefined) {
            throw new RequiredError('memberId','Required parameter memberId was null or undefined when calling showMember.');
            }

            options.pathParams = { 'pool_id': poolId,'member_id': memberId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据指定ID查询后端云服务器组详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPool(showPoolRequest?: ShowPoolRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/elb/pools/{pool_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let poolId;

            if (showPoolRequest !== null && showPoolRequest !== undefined) {
                if (showPoolRequest instanceof ShowPoolRequest) {
                    poolId = showPoolRequest.poolId;
                } else {
                    poolId = showPoolRequest['pool_id'];
                }
            }

        
            if (poolId === null || poolId === undefined) {
            throw new RequiredError('poolId','Required parameter poolId was null or undefined when calling showPool.');
            }

            options.pathParams = { 'pool_id': poolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据指定ID查询白名单详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showWhitelist(showWhitelistRequest?: ShowWhitelistRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/elb/whitelists/{whitelist_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let whitelistId;

            if (showWhitelistRequest !== null && showWhitelistRequest !== undefined) {
                if (showWhitelistRequest instanceof ShowWhitelistRequest) {
                    whitelistId = showWhitelistRequest.whitelistId;
                } else {
                    whitelistId = showWhitelistRequest['whitelist_id'];
                }
            }

        
            if (whitelistId === null || whitelistId === undefined) {
            throw new RequiredError('whitelistId','Required parameter whitelistId was null or undefined when calling showWhitelist.');
            }

            options.pathParams = { 'whitelist_id': whitelistId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新健康检查
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateHealthmonitor(updateHealthmonitorRequest?: UpdateHealthmonitorRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/elb/healthmonitors/{healthmonitor_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let healthmonitorId;

            if (updateHealthmonitorRequest !== null && updateHealthmonitorRequest !== undefined) {
                if (updateHealthmonitorRequest instanceof UpdateHealthmonitorRequest) {
                    healthmonitorId = updateHealthmonitorRequest.healthmonitorId;
                    body = updateHealthmonitorRequest.body
                } else {
                    healthmonitorId = updateHealthmonitorRequest['healthmonitor_id'];
                    body = updateHealthmonitorRequest['body'];
                }
            }

        
            if (healthmonitorId === null || healthmonitorId === undefined) {
            throw new RequiredError('healthmonitorId','Required parameter healthmonitorId was null or undefined when calling updateHealthmonitor.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'healthmonitor_id': healthmonitorId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新转发策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateL7policies(updateL7policiesRequest?: UpdateL7policiesRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/elb/l7policies/{l7policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let l7policyId;

            if (updateL7policiesRequest !== null && updateL7policiesRequest !== undefined) {
                if (updateL7policiesRequest instanceof UpdateL7policiesRequest) {
                    l7policyId = updateL7policiesRequest.l7policyId;
                    body = updateL7policiesRequest.body
                } else {
                    l7policyId = updateL7policiesRequest['l7policy_id'];
                    body = updateL7policiesRequest['body'];
                }
            }

        
            if (l7policyId === null || l7policyId === undefined) {
            throw new RequiredError('l7policyId','Required parameter l7policyId was null or undefined when calling updateL7policies.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'l7policy_id': l7policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新指定的转发规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateL7rule(updateL7ruleRequest?: UpdateL7ruleRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/elb/l7policies/{l7policy_id}/rules/{l7rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let l7policyId;
            
            let l7ruleId;

            if (updateL7ruleRequest !== null && updateL7ruleRequest !== undefined) {
                if (updateL7ruleRequest instanceof UpdateL7ruleRequest) {
                    l7policyId = updateL7ruleRequest.l7policyId;
                    l7ruleId = updateL7ruleRequest.l7ruleId;
                    body = updateL7ruleRequest.body
                } else {
                    l7policyId = updateL7ruleRequest['l7policy_id'];
                    l7ruleId = updateL7ruleRequest['l7rule_id'];
                    body = updateL7ruleRequest['body'];
                }
            }

        
            if (l7policyId === null || l7policyId === undefined) {
            throw new RequiredError('l7policyId','Required parameter l7policyId was null or undefined when calling updateL7rule.');
            }
            if (l7ruleId === null || l7ruleId === undefined) {
            throw new RequiredError('l7ruleId','Required parameter l7ruleId was null or undefined when calling updateL7rule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'l7policy_id': l7policyId,'l7rule_id': l7ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新监听器。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateListener(updateListenerRequest?: UpdateListenerRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/elb/listeners/{listener_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let listenerId;

            if (updateListenerRequest !== null && updateListenerRequest !== undefined) {
                if (updateListenerRequest instanceof UpdateListenerRequest) {
                    listenerId = updateListenerRequest.listenerId;
                    body = updateListenerRequest.body
                } else {
                    listenerId = updateListenerRequest['listener_id'];
                    body = updateListenerRequest['body'];
                }
            }

        
            if (listenerId === null || listenerId === undefined) {
            throw new RequiredError('listenerId','Required parameter listenerId was null or undefined when calling updateListener.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'listener_id': listenerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新负载均衡器。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateLoadbalancer(updateLoadbalancerRequest?: UpdateLoadbalancerRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/elb/loadbalancers/{loadbalancer_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let loadbalancerId;

            if (updateLoadbalancerRequest !== null && updateLoadbalancerRequest !== undefined) {
                if (updateLoadbalancerRequest instanceof UpdateLoadbalancerRequest) {
                    loadbalancerId = updateLoadbalancerRequest.loadbalancerId;
                    body = updateLoadbalancerRequest.body
                } else {
                    loadbalancerId = updateLoadbalancerRequest['loadbalancer_id'];
                    body = updateLoadbalancerRequest['body'];
                }
            }

        
            if (loadbalancerId === null || loadbalancerId === undefined) {
            throw new RequiredError('loadbalancerId','Required parameter loadbalancerId was null or undefined when calling updateLoadbalancer.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'loadbalancer_id': loadbalancerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新后端云服务器
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateMember(updateMemberRequest?: UpdateMemberRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/elb/pools/{pool_id}/members/{member_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let memberId;
            
            let poolId;

            if (updateMemberRequest !== null && updateMemberRequest !== undefined) {
                if (updateMemberRequest instanceof UpdateMemberRequest) {
                    memberId = updateMemberRequest.memberId;
                    poolId = updateMemberRequest.poolId;
                    body = updateMemberRequest.body
                } else {
                    memberId = updateMemberRequest['member_id'];
                    poolId = updateMemberRequest['pool_id'];
                    body = updateMemberRequest['body'];
                }
            }

        
            if (memberId === null || memberId === undefined) {
            throw new RequiredError('memberId','Required parameter memberId was null or undefined when calling updateMember.');
            }
            if (poolId === null || poolId === undefined) {
            throw new RequiredError('poolId','Required parameter poolId was null or undefined when calling updateMember.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'member_id': memberId,'pool_id': poolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新后端云服务器组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePool(updatePoolRequest?: UpdatePoolRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/elb/pools/{pool_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let poolId;

            if (updatePoolRequest !== null && updatePoolRequest !== undefined) {
                if (updatePoolRequest instanceof UpdatePoolRequest) {
                    poolId = updatePoolRequest.poolId;
                    body = updatePoolRequest.body
                } else {
                    poolId = updatePoolRequest['pool_id'];
                    body = updatePoolRequest['body'];
                }
            }

        
            if (poolId === null || poolId === undefined) {
            throw new RequiredError('poolId','Required parameter poolId was null or undefined when calling updatePool.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'pool_id': poolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新白名单。可以打开或关闭白名单，或更新访问控制的IP。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateWhitelist(updateWhitelistRequest?: UpdateWhitelistRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/elb/whitelists/{whitelist_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let whitelistId;

            if (updateWhitelistRequest !== null && updateWhitelistRequest !== undefined) {
                if (updateWhitelistRequest instanceof UpdateWhitelistRequest) {
                    whitelistId = updateWhitelistRequest.whitelistId;
                    body = updateWhitelistRequest.body
                } else {
                    whitelistId = updateWhitelistRequest['whitelist_id'];
                    body = updateWhitelistRequest['body'];
                }
            }

        
            if (whitelistId === null || whitelistId === undefined) {
            throw new RequiredError('whitelistId','Required parameter whitelistId was null or undefined when calling updateWhitelist.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'whitelist_id': whitelistId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建SSL证书。将监听器和SSL证书绑定后，可以通过负载均衡器实现服务端认证，后端服务器只要提供HTTP服务就能实现安全可靠的连接。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCertificate(createCertificateRequest?: CreateCertificateRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/elb/certificates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createCertificateRequest !== null && createCertificateRequest !== undefined) {
                if (createCertificateRequest instanceof CreateCertificateRequest) {
                    body = createCertificateRequest.body
                } else {
                    body = createCertificateRequest['body'];
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
         * 删除指定的SSL证书
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCertificate(deleteCertificateRequest?: DeleteCertificateRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/elb/certificates/{certificate_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let certificateId;

            if (deleteCertificateRequest !== null && deleteCertificateRequest !== undefined) {
                if (deleteCertificateRequest instanceof DeleteCertificateRequest) {
                    certificateId = deleteCertificateRequest.certificateId;
                } else {
                    certificateId = deleteCertificateRequest['certificate_id'];
                }
            }

        
            if (certificateId === null || certificateId === undefined) {
            throw new RequiredError('certificateId','Required parameter certificateId was null or undefined when calling deleteCertificate.');
            }

            options.pathParams = { 'certificate_id': certificateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询SSL证书。支持过滤查询和分页查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCertificates(listCertificatesRequest?: ListCertificatesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/elb/certificates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let pageReverse;
            
            let id;
            
            let name;
            
            let description;
            
            let type;
            
            let domain;
            
            let privateKey;
            
            let certificate;

            if (listCertificatesRequest !== null && listCertificatesRequest !== undefined) {
                if (listCertificatesRequest instanceof ListCertificatesRequest) {
                    limit = listCertificatesRequest.limit;
                    marker = listCertificatesRequest.marker;
                    pageReverse = listCertificatesRequest.pageReverse;
                    id = listCertificatesRequest.id;
                    name = listCertificatesRequest.name;
                    description = listCertificatesRequest.description;
                    type = listCertificatesRequest.type;
                    domain = listCertificatesRequest.domain;
                    privateKey = listCertificatesRequest.privateKey;
                    certificate = listCertificatesRequest.certificate;
                } else {
                    limit = listCertificatesRequest['limit'];
                    marker = listCertificatesRequest['marker'];
                    pageReverse = listCertificatesRequest['page_reverse'];
                    id = listCertificatesRequest['id'];
                    name = listCertificatesRequest['name'];
                    description = listCertificatesRequest['description'];
                    type = listCertificatesRequest['type'];
                    domain = listCertificatesRequest['domain'];
                    privateKey = listCertificatesRequest['private_key'];
                    certificate = listCertificatesRequest['certificate'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (pageReverse !== null && pageReverse !== undefined) {
                localVarQueryParameter['page_reverse'] = pageReverse;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (domain !== null && domain !== undefined) {
                localVarQueryParameter['domain'] = domain;
            }
            if (privateKey !== null && privateKey !== undefined) {
                localVarQueryParameter['private_key'] = privateKey;
            }
            if (certificate !== null && certificate !== undefined) {
                localVarQueryParameter['certificate'] = certificate;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定SSL证书的详情信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCertificate(showCertificateRequest?: ShowCertificateRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/elb/certificates/{certificate_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let certificateId;

            if (showCertificateRequest !== null && showCertificateRequest !== undefined) {
                if (showCertificateRequest instanceof ShowCertificateRequest) {
                    certificateId = showCertificateRequest.certificateId;
                } else {
                    certificateId = showCertificateRequest['certificate_id'];
                }
            }

        
            if (certificateId === null || certificateId === undefined) {
            throw new RequiredError('certificateId','Required parameter certificateId was null or undefined when calling showCertificate.');
            }

            options.pathParams = { 'certificate_id': certificateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新指定的SSL证书
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateCertificate(updateCertificateRequest?: UpdateCertificateRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/elb/certificates/{certificate_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let certificateId;

            if (updateCertificateRequest !== null && updateCertificateRequest !== undefined) {
                if (updateCertificateRequest instanceof UpdateCertificateRequest) {
                    certificateId = updateCertificateRequest.certificateId;
                    body = updateCertificateRequest.body
                } else {
                    certificateId = updateCertificateRequest['certificate_id'];
                    body = updateCertificateRequest['body'];
                }
            }

        
            if (certificateId === null || certificateId === undefined) {
            throw new RequiredError('certificateId','Required parameter certificateId was null or undefined when calling updateCertificate.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'certificate_id': certificateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): ElbClient {
    return new ElbClient(client);
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