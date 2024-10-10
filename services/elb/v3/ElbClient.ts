import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { ApiVersionInfo } from './model/ApiVersionInfo';
import { AutoscalingRef } from './model/AutoscalingRef';
import { AvailabilityZone } from './model/AvailabilityZone';
import { BandwidthRef } from './model/BandwidthRef';
import { BatchAddAvailableZonesRequest } from './model/BatchAddAvailableZonesRequest';
import { BatchAddAvailableZonesRequestBody } from './model/BatchAddAvailableZonesRequestBody';
import { BatchAddAvailableZonesResponse } from './model/BatchAddAvailableZonesResponse';
import { BatchCreateMembersOption } from './model/BatchCreateMembersOption';
import { BatchCreateMembersRequest } from './model/BatchCreateMembersRequest';
import { BatchCreateMembersRequestBody } from './model/BatchCreateMembersRequestBody';
import { BatchCreateMembersResponse } from './model/BatchCreateMembersResponse';
import { BatchDeleteIpListOption } from './model/BatchDeleteIpListOption';
import { BatchDeleteIpListRequest } from './model/BatchDeleteIpListRequest';
import { BatchDeleteIpListRequestBody } from './model/BatchDeleteIpListRequestBody';
import { BatchDeleteIpListResponse } from './model/BatchDeleteIpListResponse';
import { BatchDeleteMembersOption } from './model/BatchDeleteMembersOption';
import { BatchDeleteMembersRequest } from './model/BatchDeleteMembersRequest';
import { BatchDeleteMembersRequestBody } from './model/BatchDeleteMembersRequestBody';
import { BatchDeleteMembersResponse } from './model/BatchDeleteMembersResponse';
import { BatchDeleteMembersState } from './model/BatchDeleteMembersState';
import { BatchMember } from './model/BatchMember';
import { BatchRemoveAvailableZonesRequest } from './model/BatchRemoveAvailableZonesRequest';
import { BatchRemoveAvailableZonesRequestBody } from './model/BatchRemoveAvailableZonesRequestBody';
import { BatchRemoveAvailableZonesResponse } from './model/BatchRemoveAvailableZonesResponse';
import { BatchUpdateMember } from './model/BatchUpdateMember';
import { BatchUpdateMembersOption } from './model/BatchUpdateMembersOption';
import { BatchUpdateMembersRequest } from './model/BatchUpdateMembersRequest';
import { BatchUpdateMembersRequestBody } from './model/BatchUpdateMembersRequestBody';
import { BatchUpdateMembersResponse } from './model/BatchUpdateMembersResponse';
import { BatchUpdatePoliciesPriorityRequest } from './model/BatchUpdatePoliciesPriorityRequest';
import { BatchUpdatePoliciesPriorityRequestBody } from './model/BatchUpdatePoliciesPriorityRequestBody';
import { BatchUpdatePoliciesPriorityResponse } from './model/BatchUpdatePoliciesPriorityResponse';
import { BatchUpdatePriorityRequestBody } from './model/BatchUpdatePriorityRequestBody';
import { CertificateInfo } from './model/CertificateInfo';
import { ChangeLoadbalancerChargeModeRequest } from './model/ChangeLoadbalancerChargeModeRequest';
import { ChangeLoadbalancerChargeModeRequestBody } from './model/ChangeLoadbalancerChargeModeRequestBody';
import { ChangeLoadbalancerChargeModeResponse } from './model/ChangeLoadbalancerChargeModeResponse';
import { ConnectionDrain } from './model/ConnectionDrain';
import { CountPreoccupyIpNumRequest } from './model/CountPreoccupyIpNumRequest';
import { CountPreoccupyIpNumResponse } from './model/CountPreoccupyIpNumResponse';
import { CreateCertificateOption } from './model/CreateCertificateOption';
import { CreateCertificatePrivateKeyEchoRequest } from './model/CreateCertificatePrivateKeyEchoRequest';
import { CreateCertificatePrivateKeyEchoRequestBody } from './model/CreateCertificatePrivateKeyEchoRequestBody';
import { CreateCertificatePrivateKeyEchoResponse } from './model/CreateCertificatePrivateKeyEchoResponse';
import { CreateCertificateRequest } from './model/CreateCertificateRequest';
import { CreateCertificateRequestBody } from './model/CreateCertificateRequestBody';
import { CreateCertificateResponse } from './model/CreateCertificateResponse';
import { CreateFixtedResponseConfig } from './model/CreateFixtedResponseConfig';
import { CreateHealthMonitorOption } from './model/CreateHealthMonitorOption';
import { CreateHealthMonitorRequest } from './model/CreateHealthMonitorRequest';
import { CreateHealthMonitorRequestBody } from './model/CreateHealthMonitorRequestBody';
import { CreateHealthMonitorResponse } from './model/CreateHealthMonitorResponse';
import { CreateInsertHeaderConfig } from './model/CreateInsertHeaderConfig';
import { CreateInsertHeadersConfig } from './model/CreateInsertHeadersConfig';
import { CreateIpGroupIpOption } from './model/CreateIpGroupIpOption';
import { CreateIpGroupOption } from './model/CreateIpGroupOption';
import { CreateIpGroupRequest } from './model/CreateIpGroupRequest';
import { CreateIpGroupRequestBody } from './model/CreateIpGroupRequestBody';
import { CreateIpGroupResponse } from './model/CreateIpGroupResponse';
import { CreateL7PolicyOption } from './model/CreateL7PolicyOption';
import { CreateL7PolicyRequest } from './model/CreateL7PolicyRequest';
import { CreateL7PolicyRequestBody } from './model/CreateL7PolicyRequestBody';
import { CreateL7PolicyResponse } from './model/CreateL7PolicyResponse';
import { CreateL7PolicyRuleOption } from './model/CreateL7PolicyRuleOption';
import { CreateL7RuleRequest } from './model/CreateL7RuleRequest';
import { CreateL7RuleRequestBody } from './model/CreateL7RuleRequestBody';
import { CreateL7RuleResponse } from './model/CreateL7RuleResponse';
import { CreateListenerIpGroupOption } from './model/CreateListenerIpGroupOption';
import { CreateListenerOption } from './model/CreateListenerOption';
import { CreateListenerQuicConfigOption } from './model/CreateListenerQuicConfigOption';
import { CreateListenerRequest } from './model/CreateListenerRequest';
import { CreateListenerRequestBody } from './model/CreateListenerRequestBody';
import { CreateListenerResponse } from './model/CreateListenerResponse';
import { CreateLoadBalancerBandwidthOption } from './model/CreateLoadBalancerBandwidthOption';
import { CreateLoadBalancerOption } from './model/CreateLoadBalancerOption';
import { CreateLoadBalancerPublicIpOption } from './model/CreateLoadBalancerPublicIpOption';
import { CreateLoadBalancerRequest } from './model/CreateLoadBalancerRequest';
import { CreateLoadBalancerRequestBody } from './model/CreateLoadBalancerRequestBody';
import { CreateLoadBalancerResponse } from './model/CreateLoadBalancerResponse';
import { CreateLoadbalancerAutoscalingOption } from './model/CreateLoadbalancerAutoscalingOption';
import { CreateLogtankOption } from './model/CreateLogtankOption';
import { CreateLogtankRequest } from './model/CreateLogtankRequest';
import { CreateLogtankRequestBody } from './model/CreateLogtankRequestBody';
import { CreateLogtankResponse } from './model/CreateLogtankResponse';
import { CreateMasterSlaveHealthMonitorOption } from './model/CreateMasterSlaveHealthMonitorOption';
import { CreateMasterSlaveMemberOption } from './model/CreateMasterSlaveMemberOption';
import { CreateMasterSlavePoolOption } from './model/CreateMasterSlavePoolOption';
import { CreateMasterSlavePoolRequest } from './model/CreateMasterSlavePoolRequest';
import { CreateMasterSlavePoolRequestBody } from './model/CreateMasterSlavePoolRequestBody';
import { CreateMasterSlavePoolResponse } from './model/CreateMasterSlavePoolResponse';
import { CreateMemberOption } from './model/CreateMemberOption';
import { CreateMemberRequest } from './model/CreateMemberRequest';
import { CreateMemberRequestBody } from './model/CreateMemberRequestBody';
import { CreateMemberResponse } from './model/CreateMemberResponse';
import { CreatePoolOption } from './model/CreatePoolOption';
import { CreatePoolRequest } from './model/CreatePoolRequest';
import { CreatePoolRequestBody } from './model/CreatePoolRequestBody';
import { CreatePoolResponse } from './model/CreatePoolResponse';
import { CreatePoolSessionPersistenceOption } from './model/CreatePoolSessionPersistenceOption';
import { CreatePoolSlowStartOption } from './model/CreatePoolSlowStartOption';
import { CreateRedirectPoolsConfig } from './model/CreateRedirectPoolsConfig';
import { CreateRedirectPoolsExtendConfig } from './model/CreateRedirectPoolsExtendConfig';
import { CreateRedirectPoolsStickySessionConfig } from './model/CreateRedirectPoolsStickySessionConfig';
import { CreateRedirectUrlConfig } from './model/CreateRedirectUrlConfig';
import { CreateRemoveHeaderConfig } from './model/CreateRemoveHeaderConfig';
import { CreateRemoveHeadersConfig } from './model/CreateRemoveHeadersConfig';
import { CreateRewriteUrlConfig } from './model/CreateRewriteUrlConfig';
import { CreateRuleCondition } from './model/CreateRuleCondition';
import { CreateRuleOption } from './model/CreateRuleOption';
import { CreateSecurityPolicyOption } from './model/CreateSecurityPolicyOption';
import { CreateSecurityPolicyRequest } from './model/CreateSecurityPolicyRequest';
import { CreateSecurityPolicyRequestBody } from './model/CreateSecurityPolicyRequestBody';
import { CreateSecurityPolicyResponse } from './model/CreateSecurityPolicyResponse';
import { CreateTrafficLimitConfig } from './model/CreateTrafficLimitConfig';
import { DeleteCertificateRequest } from './model/DeleteCertificateRequest';
import { DeleteCertificateResponse } from './model/DeleteCertificateResponse';
import { DeleteHealthMonitorRequest } from './model/DeleteHealthMonitorRequest';
import { DeleteHealthMonitorResponse } from './model/DeleteHealthMonitorResponse';
import { DeleteIpGroupRequest } from './model/DeleteIpGroupRequest';
import { DeleteIpGroupResponse } from './model/DeleteIpGroupResponse';
import { DeleteL7PolicyRequest } from './model/DeleteL7PolicyRequest';
import { DeleteL7PolicyResponse } from './model/DeleteL7PolicyResponse';
import { DeleteL7RuleRequest } from './model/DeleteL7RuleRequest';
import { DeleteL7RuleResponse } from './model/DeleteL7RuleResponse';
import { DeleteListenerForceRequest } from './model/DeleteListenerForceRequest';
import { DeleteListenerForceResponse } from './model/DeleteListenerForceResponse';
import { DeleteListenerRequest } from './model/DeleteListenerRequest';
import { DeleteListenerResponse } from './model/DeleteListenerResponse';
import { DeleteLoadBalancerForceRequest } from './model/DeleteLoadBalancerForceRequest';
import { DeleteLoadBalancerForceResponse } from './model/DeleteLoadBalancerForceResponse';
import { DeleteLoadBalancerRequest } from './model/DeleteLoadBalancerRequest';
import { DeleteLoadBalancerResponse } from './model/DeleteLoadBalancerResponse';
import { DeleteLogtankRequest } from './model/DeleteLogtankRequest';
import { DeleteLogtankResponse } from './model/DeleteLogtankResponse';
import { DeleteMasterSlavePoolRequest } from './model/DeleteMasterSlavePoolRequest';
import { DeleteMasterSlavePoolResponse } from './model/DeleteMasterSlavePoolResponse';
import { DeleteMemberRequest } from './model/DeleteMemberRequest';
import { DeleteMemberResponse } from './model/DeleteMemberResponse';
import { DeletePoolRequest } from './model/DeletePoolRequest';
import { DeletePoolResponse } from './model/DeletePoolResponse';
import { DeleteSecurityPolicyRequest } from './model/DeleteSecurityPolicyRequest';
import { DeleteSecurityPolicyResponse } from './model/DeleteSecurityPolicyResponse';
import { EipInfo } from './model/EipInfo';
import { FixtedResponseConfig } from './model/FixtedResponseConfig';
import { Flavor } from './model/Flavor';
import { FlavorInfo } from './model/FlavorInfo';
import { GlobalEipInfo } from './model/GlobalEipInfo';
import { HealthMonitor } from './model/HealthMonitor';
import { InsertHeaderConfig } from './model/InsertHeaderConfig';
import { InsertHeadersConfig } from './model/InsertHeadersConfig';
import { IpGroup } from './model/IpGroup';
import { IpGroupIp } from './model/IpGroupIp';
import { IpInfo } from './model/IpInfo';
import { L7Policy } from './model/L7Policy';
import { L7Rule } from './model/L7Rule';
import { ListAllMembersRequest } from './model/ListAllMembersRequest';
import { ListAllMembersResponse } from './model/ListAllMembersResponse';
import { ListApiVersionsRequest } from './model/ListApiVersionsRequest';
import { ListApiVersionsResponse } from './model/ListApiVersionsResponse';
import { ListAvailabilityZonesRequest } from './model/ListAvailabilityZonesRequest';
import { ListAvailabilityZonesResponse } from './model/ListAvailabilityZonesResponse';
import { ListCertificatesRequest } from './model/ListCertificatesRequest';
import { ListCertificatesResponse } from './model/ListCertificatesResponse';
import { ListFlavorsRequest } from './model/ListFlavorsRequest';
import { ListFlavorsResponse } from './model/ListFlavorsResponse';
import { ListHealthMonitorsRequest } from './model/ListHealthMonitorsRequest';
import { ListHealthMonitorsResponse } from './model/ListHealthMonitorsResponse';
import { ListIpGroupsRequest } from './model/ListIpGroupsRequest';
import { ListIpGroupsResponse } from './model/ListIpGroupsResponse';
import { ListL7PoliciesRequest } from './model/ListL7PoliciesRequest';
import { ListL7PoliciesResponse } from './model/ListL7PoliciesResponse';
import { ListL7RulesRequest } from './model/ListL7RulesRequest';
import { ListL7RulesResponse } from './model/ListL7RulesResponse';
import { ListListenersRequest } from './model/ListListenersRequest';
import { ListListenersResponse } from './model/ListListenersResponse';
import { ListLoadBalancersRequest } from './model/ListLoadBalancersRequest';
import { ListLoadBalancersResponse } from './model/ListLoadBalancersResponse';
import { ListLogtanksRequest } from './model/ListLogtanksRequest';
import { ListLogtanksResponse } from './model/ListLogtanksResponse';
import { ListMasterSlavePoolsRequest } from './model/ListMasterSlavePoolsRequest';
import { ListMasterSlavePoolsResponse } from './model/ListMasterSlavePoolsResponse';
import { ListMembersRequest } from './model/ListMembersRequest';
import { ListMembersResponse } from './model/ListMembersResponse';
import { ListPoolsRequest } from './model/ListPoolsRequest';
import { ListPoolsResponse } from './model/ListPoolsResponse';
import { ListQuotaDetailsRequest } from './model/ListQuotaDetailsRequest';
import { ListQuotaDetailsResponse } from './model/ListQuotaDetailsResponse';
import { ListSecurityPoliciesRequest } from './model/ListSecurityPoliciesRequest';
import { ListSecurityPoliciesResponse } from './model/ListSecurityPoliciesResponse';
import { ListSystemSecurityPoliciesRequest } from './model/ListSystemSecurityPoliciesRequest';
import { ListSystemSecurityPoliciesResponse } from './model/ListSystemSecurityPoliciesResponse';
import { Listener } from './model/Listener';
import { ListenerInsertHeaders } from './model/ListenerInsertHeaders';
import { ListenerIpGroup } from './model/ListenerIpGroup';
import { ListenerMemberInfo } from './model/ListenerMemberInfo';
import { ListenerQuicConfig } from './model/ListenerQuicConfig';
import { ListenerRef } from './model/ListenerRef';
import { LoadBalancer } from './model/LoadBalancer';
import { LoadBalancerRef } from './model/LoadBalancerRef';
import { LoadBalancerStatus } from './model/LoadBalancerStatus';
import { LoadBalancerStatusHealthMonitor } from './model/LoadBalancerStatusHealthMonitor';
import { LoadBalancerStatusL7Rule } from './model/LoadBalancerStatusL7Rule';
import { LoadBalancerStatusListener } from './model/LoadBalancerStatusListener';
import { LoadBalancerStatusMember } from './model/LoadBalancerStatusMember';
import { LoadBalancerStatusPolicy } from './model/LoadBalancerStatusPolicy';
import { LoadBalancerStatusPool } from './model/LoadBalancerStatusPool';
import { LoadBalancerStatusResult } from './model/LoadBalancerStatusResult';
import { Logtank } from './model/Logtank';
import { MasterSlaveHealthMonitor } from './model/MasterSlaveHealthMonitor';
import { MasterSlaveMember } from './model/MasterSlaveMember';
import { MasterSlavePool } from './model/MasterSlavePool';
import { Member } from './model/Member';
import { MemberInfo } from './model/MemberInfo';
import { MemberRef } from './model/MemberRef';
import { MemberStatus } from './model/MemberStatus';
import { PageInfo } from './model/PageInfo';
import { Pool } from './model/Pool';
import { PoolHealth } from './model/PoolHealth';
import { PoolRef } from './model/PoolRef';
import { PortRange } from './model/PortRange';
import { PreoccupyIp } from './model/PreoccupyIp';
import { PrepaidChangeChargeModeOption } from './model/PrepaidChangeChargeModeOption';
import { PrepaidCreateOption } from './model/PrepaidCreateOption';
import { PrepaidUpdateOption } from './model/PrepaidUpdateOption';
import { PublicIpInfo } from './model/PublicIpInfo';
import { Quota } from './model/Quota';
import { QuotaInfo } from './model/QuotaInfo';
import { RedirectPoolsConfig } from './model/RedirectPoolsConfig';
import { RedirectPoolsExtendConfig } from './model/RedirectPoolsExtendConfig';
import { RedirectPoolsStickySessionConfig } from './model/RedirectPoolsStickySessionConfig';
import { RedirectUrlConfig } from './model/RedirectUrlConfig';
import { RemoveHeaderConfig } from './model/RemoveHeaderConfig';
import { RemoveHeadersConfig } from './model/RemoveHeadersConfig';
import { ResourceID } from './model/ResourceID';
import { RewriteUrlConfig } from './model/RewriteUrlConfig';
import { RuleCondition } from './model/RuleCondition';
import { RuleRef } from './model/RuleRef';
import { SecurityPolicy } from './model/SecurityPolicy';
import { SessionPersistence } from './model/SessionPersistence';
import { ShowCertificatePrivateKeyEchoRequest } from './model/ShowCertificatePrivateKeyEchoRequest';
import { ShowCertificatePrivateKeyEchoResponse } from './model/ShowCertificatePrivateKeyEchoResponse';
import { ShowCertificateRequest } from './model/ShowCertificateRequest';
import { ShowCertificateResponse } from './model/ShowCertificateResponse';
import { ShowFlavorRequest } from './model/ShowFlavorRequest';
import { ShowFlavorResponse } from './model/ShowFlavorResponse';
import { ShowHealthMonitorRequest } from './model/ShowHealthMonitorRequest';
import { ShowHealthMonitorResponse } from './model/ShowHealthMonitorResponse';
import { ShowIpGroupRequest } from './model/ShowIpGroupRequest';
import { ShowIpGroupResponse } from './model/ShowIpGroupResponse';
import { ShowL7PolicyRequest } from './model/ShowL7PolicyRequest';
import { ShowL7PolicyResponse } from './model/ShowL7PolicyResponse';
import { ShowL7RuleRequest } from './model/ShowL7RuleRequest';
import { ShowL7RuleResponse } from './model/ShowL7RuleResponse';
import { ShowListenerRequest } from './model/ShowListenerRequest';
import { ShowListenerResponse } from './model/ShowListenerResponse';
import { ShowLoadBalancerRequest } from './model/ShowLoadBalancerRequest';
import { ShowLoadBalancerResponse } from './model/ShowLoadBalancerResponse';
import { ShowLoadBalancerStatusRequest } from './model/ShowLoadBalancerStatusRequest';
import { ShowLoadBalancerStatusResponse } from './model/ShowLoadBalancerStatusResponse';
import { ShowLogtankRequest } from './model/ShowLogtankRequest';
import { ShowLogtankResponse } from './model/ShowLogtankResponse';
import { ShowMasterSlavePoolRequest } from './model/ShowMasterSlavePoolRequest';
import { ShowMasterSlavePoolResponse } from './model/ShowMasterSlavePoolResponse';
import { ShowMemberRequest } from './model/ShowMemberRequest';
import { ShowMemberResponse } from './model/ShowMemberResponse';
import { ShowPoolRequest } from './model/ShowPoolRequest';
import { ShowPoolResponse } from './model/ShowPoolResponse';
import { ShowQuotaRequest } from './model/ShowQuotaRequest';
import { ShowQuotaResponse } from './model/ShowQuotaResponse';
import { ShowSecurityPolicyRequest } from './model/ShowSecurityPolicyRequest';
import { ShowSecurityPolicyResponse } from './model/ShowSecurityPolicyResponse';
import { SlowStart } from './model/SlowStart';
import { SystemSecurityPolicy } from './model/SystemSecurityPolicy';
import { Tag } from './model/Tag';
import { TrafficLimitConfig } from './model/TrafficLimitConfig';
import { UpadateIpGroupIpOption } from './model/UpadateIpGroupIpOption';
import { UpdateCertificateOption } from './model/UpdateCertificateOption';
import { UpdateCertificateRequest } from './model/UpdateCertificateRequest';
import { UpdateCertificateRequestBody } from './model/UpdateCertificateRequestBody';
import { UpdateCertificateResponse } from './model/UpdateCertificateResponse';
import { UpdateFixtedResponseConfig } from './model/UpdateFixtedResponseConfig';
import { UpdateHealthMonitorOption } from './model/UpdateHealthMonitorOption';
import { UpdateHealthMonitorRequest } from './model/UpdateHealthMonitorRequest';
import { UpdateHealthMonitorRequestBody } from './model/UpdateHealthMonitorRequestBody';
import { UpdateHealthMonitorResponse } from './model/UpdateHealthMonitorResponse';
import { UpdateInsertHeaderConfig } from './model/UpdateInsertHeaderConfig';
import { UpdateInsertHeadersConfig } from './model/UpdateInsertHeadersConfig';
import { UpdateIpGroupOption } from './model/UpdateIpGroupOption';
import { UpdateIpGroupRequest } from './model/UpdateIpGroupRequest';
import { UpdateIpGroupRequestBody } from './model/UpdateIpGroupRequestBody';
import { UpdateIpGroupResponse } from './model/UpdateIpGroupResponse';
import { UpdateIpListOption } from './model/UpdateIpListOption';
import { UpdateIpListRequest } from './model/UpdateIpListRequest';
import { UpdateIpListRequestBody } from './model/UpdateIpListRequestBody';
import { UpdateIpListResponse } from './model/UpdateIpListResponse';
import { UpdateL7PolicyOption } from './model/UpdateL7PolicyOption';
import { UpdateL7PolicyRequest } from './model/UpdateL7PolicyRequest';
import { UpdateL7PolicyRequestBody } from './model/UpdateL7PolicyRequestBody';
import { UpdateL7PolicyResponse } from './model/UpdateL7PolicyResponse';
import { UpdateL7RuleOption } from './model/UpdateL7RuleOption';
import { UpdateL7RuleRequest } from './model/UpdateL7RuleRequest';
import { UpdateL7RuleRequestBody } from './model/UpdateL7RuleRequestBody';
import { UpdateL7RuleResponse } from './model/UpdateL7RuleResponse';
import { UpdateListenerIpGroupOption } from './model/UpdateListenerIpGroupOption';
import { UpdateListenerOption } from './model/UpdateListenerOption';
import { UpdateListenerQuicConfigOption } from './model/UpdateListenerQuicConfigOption';
import { UpdateListenerRequest } from './model/UpdateListenerRequest';
import { UpdateListenerRequestBody } from './model/UpdateListenerRequestBody';
import { UpdateListenerResponse } from './model/UpdateListenerResponse';
import { UpdateLoadBalancerOption } from './model/UpdateLoadBalancerOption';
import { UpdateLoadBalancerRequest } from './model/UpdateLoadBalancerRequest';
import { UpdateLoadBalancerRequestBody } from './model/UpdateLoadBalancerRequestBody';
import { UpdateLoadBalancerResponse } from './model/UpdateLoadBalancerResponse';
import { UpdateLoadbalancerAutoscalingOption } from './model/UpdateLoadbalancerAutoscalingOption';
import { UpdateLogtankOption } from './model/UpdateLogtankOption';
import { UpdateLogtankRequest } from './model/UpdateLogtankRequest';
import { UpdateLogtankRequestBody } from './model/UpdateLogtankRequestBody';
import { UpdateLogtankResponse } from './model/UpdateLogtankResponse';
import { UpdateMemberOption } from './model/UpdateMemberOption';
import { UpdateMemberRequest } from './model/UpdateMemberRequest';
import { UpdateMemberRequestBody } from './model/UpdateMemberRequestBody';
import { UpdateMemberResponse } from './model/UpdateMemberResponse';
import { UpdatePoolOption } from './model/UpdatePoolOption';
import { UpdatePoolRequest } from './model/UpdatePoolRequest';
import { UpdatePoolRequestBody } from './model/UpdatePoolRequestBody';
import { UpdatePoolResponse } from './model/UpdatePoolResponse';
import { UpdatePoolSessionPersistenceOption } from './model/UpdatePoolSessionPersistenceOption';
import { UpdatePoolSlowStartOption } from './model/UpdatePoolSlowStartOption';
import { UpdateRedirectPoolsConfig } from './model/UpdateRedirectPoolsConfig';
import { UpdateRedirectPoolsExtendConfig } from './model/UpdateRedirectPoolsExtendConfig';
import { UpdateRedirectPoolsStickySessionConfig } from './model/UpdateRedirectPoolsStickySessionConfig';
import { UpdateRedirectUrlConfig } from './model/UpdateRedirectUrlConfig';
import { UpdateRemoveHeaderConfig } from './model/UpdateRemoveHeaderConfig';
import { UpdateRemoveHeadersConfig } from './model/UpdateRemoveHeadersConfig';
import { UpdateRewriteUrlConfig } from './model/UpdateRewriteUrlConfig';
import { UpdateRuleCondition } from './model/UpdateRuleCondition';
import { UpdateSecurityPolicyOption } from './model/UpdateSecurityPolicyOption';
import { UpdateSecurityPolicyRequest } from './model/UpdateSecurityPolicyRequest';
import { UpdateSecurityPolicyRequestBody } from './model/UpdateSecurityPolicyRequestBody';
import { UpdateSecurityPolicyResponse } from './model/UpdateSecurityPolicyResponse';
import { UpdateTrafficLimitConfig } from './model/UpdateTrafficLimitConfig';

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
     * 给负载均衡器新增可用区。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新增负载均衡器可用区
     * @param {string} loadbalancerId 参数解释：负载均衡器ID。
     * @param {BatchAddAvailableZonesRequestBody} batchAddAvailableZonesRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchAddAvailableZones(batchAddAvailableZonesRequest?: BatchAddAvailableZonesRequest): Promise<BatchAddAvailableZonesResponse> {
        const options = ParamCreater().batchAddAvailableZones(batchAddAvailableZonesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在指定pool下批量创建后端服务器。一次最多创建200个。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量创建后端服务器
     * @param {string} poolId 参数解释：后端服务器组ID。
     * @param {BatchCreateMembersRequestBody} batchCreateMembersRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateMembers(batchCreateMembersRequest?: BatchCreateMembersRequest): Promise<BatchCreateMembersResponse> {
        const options = ParamCreater().batchCreateMembers(batchCreateMembersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在指定pool下批量删除后端服务器。一次最多添加200个。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除后端服务器
     * @param {string} poolId 参数解释：后端服务器组ID。
     * @param {BatchDeleteMembersRequestBody} batchDeleteMembersRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteMembers(batchDeleteMembersRequest?: BatchDeleteMembersRequest): Promise<BatchDeleteMembersResponse> {
        const options = ParamCreater().batchDeleteMembers(batchDeleteMembersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 移除负载均衡器的可用区。
     * &gt; 移除可用区可能导致已有链接断开，请谨慎操作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 移除负载均衡器可用区
     * @param {string} loadbalancerId 负载均衡器ID。
     * @param {BatchRemoveAvailableZonesRequestBody} batchRemoveAvailableZonesRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchRemoveAvailableZones(batchRemoveAvailableZonesRequest?: BatchRemoveAvailableZonesRequest): Promise<BatchRemoveAvailableZonesResponse> {
        const options = ParamCreater().batchRemoveAvailableZones(batchRemoveAvailableZonesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在指定pool下批量更新后端服务器。一次最多添加200个。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量更新后端服务器
     * @param {string} poolId 参数解释：后端服务器组ID。
     * @param {BatchUpdateMembersRequestBody} batchUpdateMembersRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUpdateMembers(batchUpdateMembersRequest?: BatchUpdateMembersRequest): Promise<BatchUpdateMembersResponse> {
        const options = ParamCreater().batchUpdateMembers(batchUpdateMembersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量更新转发策略的优先级。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量更新转发策略优先级
     * @param {BatchUpdatePoliciesPriorityRequestBody} [batchUpdatePoliciesPriorityRequestBody] This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUpdatePoliciesPriority(batchUpdatePoliciesPriorityRequest?: BatchUpdatePoliciesPriorityRequest): Promise<BatchUpdatePoliciesPriorityResponse> {
        const options = ParamCreater().batchUpdatePoliciesPriority(batchUpdatePoliciesPriorityRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 负载均衡器计费模式变更，当前支持的计费模式变更为：
     * 1. 按需计费转包周期计费；
     * 2. 按需按规格计费转按需按使用量计费；
     * 3. 按需按使用量计费转按需按规格计费；
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 变更负载均衡器计费模式
     * @param {ChangeLoadbalancerChargeModeRequestBody} changeLoadbalancerChargeModeRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeLoadbalancerChargeMode(changeLoadbalancerChargeModeRequest?: ChangeLoadbalancerChargeModeRequest): Promise<ChangeLoadbalancerChargeModeResponse> {
        const options = ParamCreater().changeLoadbalancerChargeMode(changeLoadbalancerChargeModeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建证书。用于HTTPS协议监听器。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建证书
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
     * 开启或关闭证书私钥字段回显开关。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改证书私钥字段回显开关
     * @param {CreateCertificatePrivateKeyEchoRequestBody} createCertificatePrivateKeyEchoRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCertificatePrivateKeyEcho(createCertificatePrivateKeyEchoRequest?: CreateCertificatePrivateKeyEchoRequest): Promise<CreateCertificatePrivateKeyEchoResponse> {
        const options = ParamCreater().createCertificatePrivateKeyEcho(createCertificatePrivateKeyEchoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建健康检查。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建健康检查
     * @param {CreateHealthMonitorRequestBody} createHealthMonitorRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createHealthMonitor(createHealthMonitorRequest?: CreateHealthMonitorRequest): Promise<CreateHealthMonitorResponse> {
        const options = ParamCreater().createHealthMonitor(createHealthMonitorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建七层转发策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建转发策略
     * @param {CreateL7PolicyRequestBody} createL7PolicyRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createL7Policy(createL7PolicyRequest?: CreateL7PolicyRequest): Promise<CreateL7PolicyResponse> {
        const options = ParamCreater().createL7Policy(createL7PolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建七层转发规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建转发规则
     * @param {string} l7policyId 参数解释：转发策略ID。
     * @param {CreateL7RuleRequestBody} createL7RuleRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createL7Rule(createL7RuleRequest?: CreateL7RuleRequest): Promise<CreateL7RuleResponse> {
        const options = ParamCreater().createL7Rule(createL7RuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建监听器。
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
     * 创建独享型负载均衡器，包括按需及包周期计费负载均衡器。
     * 1. 若要创建内网IPv4负载均衡器，则需要传入vip_subnet_cidr_id。
     * 2. 若要创建公网IPv4负载均衡器，则需要传入publicip，以及传入vpc_id和vip_subnet_cidr_id这两个参数中的一个。
     * 3. 若要绑定有已有公网IPv4地址，则需要传入publicip_ids，以及传入vpc_id和vip_subnet_cidr_id这两个参数中的一个。
     * 4. 若要创建内网双栈负载均衡器，则需要传入ipv6_vip_virsubnet_id。
     * 5. 若要创建公网双栈负载均衡器，则需要传入ipv6_vip_virsubnet_id和ipv6_bandwidth。
     * 6. 若要创建网络型负载均衡器，则需要传入l4_flavor_id（网络型规格ID）；若要创建应用型负载均衡器，则需要传入l7_flavor_id（应用型规格ID）；若要创建网络型+应用型负载均衡器，则需要传入l4_flavor_id和l7_flavor_id。
     * 7. 若要创建包周期负载均衡器，则需要传入prepaid_options，否则创建按需计费负载均衡器。
     * 8. 按需计费分为固定规格计费和弹性规格计费，根据创建时所选规格的类型决定计费方式。具体规格说明见创建LB请求参数l4_flavor_id和l7_flavor_id。
     * [9.若要创建gateway类型的负载均衡器，则需要：
     *    - 指定loadbalancer_type&#x3D;\&quot;gateway\&quot;，且不支持指定vip_address，ipv6_vip_address。
     *    - vip_subnet_cidr_id和ipv6_subnet_cidr_id两者不能都为空，如果两者都传入，则必须属于同一子网。
     *    - 不支持创建公网gateway类型LB。
     *    - 如果要指定规格，则从请求参数gw_flavor_id传入。](tag:hws_eu)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建负载均衡器
     * @param {CreateLoadBalancerRequestBody} createLoadBalancerRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createLoadBalancer(createLoadBalancerRequest?: CreateLoadBalancerRequest): Promise<CreateLoadBalancerResponse> {
        const options = ParamCreater().createLoadBalancer(createLoadBalancerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建云日志。[荷兰region不支持云日志功能，请勿使用。](tag:dt,dt_test)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建云日志
     * @param {CreateLogtankRequestBody} createLogtankRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createLogtank(createLogtankRequest?: CreateLogtankRequest): Promise<CreateLogtankResponse> {
        const options = ParamCreater().createLogtank(createLogtankRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建主备后端服务器组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建主备后端服务器组
     * @param {CreateMasterSlavePoolRequestBody} createMasterSlavePoolRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createMasterSlavePool(createMasterSlavePoolRequest?: CreateMasterSlavePoolRequest): Promise<CreateMasterSlavePoolResponse> {
        const options = ParamCreater().createMasterSlavePool(createMasterSlavePoolRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建后端服务器。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建后端服务器
     * @param {string} poolId 参数解释：后端服务器组ID。
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
     * 创建后端服务器组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建后端服务器组
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
     * 创建自定义安全策略。用于在创建HTTPS监听器时，请求参数中指定security_policy_id来设置监听器的自定义安全策略。
     * 
     * [荷兰region不支持自定义安全策略功能，请勿使用。](tag:dt,dt_test)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建自定义安全策略
     * @param {CreateSecurityPolicyRequestBody} createSecurityPolicyRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSecurityPolicy(createSecurityPolicyRequest?: CreateSecurityPolicyRequest): Promise<CreateSecurityPolicyResponse> {
        const options = ParamCreater().createSecurityPolicy(createSecurityPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除证书。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除证书
     * @param {string} certificateId 证书ID。
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
     * 删除健康检查。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除健康检查
     * @param {string} healthmonitorId 健康检查ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteHealthMonitor(deleteHealthMonitorRequest?: DeleteHealthMonitorRequest): Promise<DeleteHealthMonitorResponse> {
        const options = ParamCreater().deleteHealthMonitor(deleteHealthMonitorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除七层转发策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除转发策略
     * @param {string} l7policyId 参数解释：转发策略ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteL7Policy(deleteL7PolicyRequest?: DeleteL7PolicyRequest): Promise<DeleteL7PolicyResponse> {
        const options = ParamCreater().deleteL7Policy(deleteL7PolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除七层转发规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除转发规则
     * @param {string} l7policyId 策略ID。
     * @param {string} l7ruleId 规则ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteL7Rule(deleteL7RuleRequest?: DeleteL7RuleRequest): Promise<DeleteL7RuleResponse> {
        const options = ParamCreater().deleteL7Rule(deleteL7RuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除监听器。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除监听器
     * @param {string} listenerId 监听器ID。
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
     * 删除监听器且级联删除其下子资源（删除监听器、转发策略等，解绑后端服务器组）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 级联删除监听器
     * @param {string} listenerId 监听器ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteListenerForce(deleteListenerForceRequest?: DeleteListenerForceRequest): Promise<DeleteListenerForceResponse> {
        const options = ParamCreater().deleteListenerForce(deleteListenerForceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除负载均衡器。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除负载均衡器
     * @param {string} loadbalancerId 负载均衡器ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteLoadBalancer(deleteLoadBalancerRequest?: DeleteLoadBalancerRequest): Promise<DeleteLoadBalancerResponse> {
        const options = ParamCreater().deleteLoadBalancer(deleteLoadBalancerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除负载均衡器且级联删除其下子资源（删除负载均衡器及其绑定的监听器、后端服务器组、后端服务器等一系列资源）
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 级联删除负载均衡器
     * @param {string} loadbalancerId 负载均衡器ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteLoadBalancerForce(deleteLoadBalancerForceRequest?: DeleteLoadBalancerForceRequest): Promise<DeleteLoadBalancerForceResponse> {
        const options = ParamCreater().deleteLoadBalancerForce(deleteLoadBalancerForceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除云日志。[荷兰region不支持云日志功能，请勿使用。](tag:dt,dt_test)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除云日志
     * @param {string} logtankId 云日志ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteLogtank(deleteLogtankRequest?: DeleteLogtankRequest): Promise<DeleteLogtankResponse> {
        const options = ParamCreater().deleteLogtank(deleteLogtankRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除主备后端服务器组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除主备后端服务器组
     * @param {string} poolId 参数解释：后端服务器组ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteMasterSlavePool(deleteMasterSlavePoolRequest?: DeleteMasterSlavePoolRequest): Promise<DeleteMasterSlavePoolResponse> {
        const options = ParamCreater().deleteMasterSlavePool(deleteMasterSlavePoolRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除后端服务器。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除后端服务器
     * @param {string} poolId 参数解释：后端服务器组ID。
     * @param {string} memberId 后端服务器ID。 &gt;说明： 此处并非ECS服务器的ID，而是ELB为绑定的后端服务器自动生成的member ID。  member ID可以通过[查询后端服务器列表](ListMembers.xml)获取。
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
     * 删除后端服务器组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除后端服务器组
     * @param {string} poolId 参数解释：后端服务器组ID。
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
     * 删除自定义安全策略。[荷兰region不支持自定义安全策略功能，请勿使用。](tag:dt,dt_test)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除自定义安全策略
     * @param {string} securityPolicyId 自定义安全策略的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSecurityPolicy(deleteSecurityPolicyRequest?: DeleteSecurityPolicyRequest): Promise<DeleteSecurityPolicyResponse> {
        const options = ParamCreater().deleteSecurityPolicy(deleteSecurityPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询当前项目下的后端服务器列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 后端服务器全局列表
     * @param {string} [marker] 上一页最后一条记录的ID。  使用说明： - 必须与limit一起使用。 - 不指定时表示查询第一页。 - 该字段不允许为空或无效的ID。
     * @param {number} [limit] 参数解释：每页返回的个数。  取值范围：0-2000  默认取值：2000
     * @param {boolean} [pageReverse] 是否反向查询。  取值： - true：查询上一页。 - false：查询下一页，默认。  使用说明： - 必须与limit一起使用。 - 当page_reverse&#x3D;true时，若要查询上一页，marker取值为当前页返回值的previous_marker。
     * @param {Array<string>} [name] 后端服务器名称。  支持多值查询，查询条件格式：*name&#x3D;xxx&amp;name&#x3D;xxx*。
     * @param {Array<number>} [weight] 后端服务器的权重，请求按权重在同一后端服务器组下的后端服务器间分发。 权重为0的后端不再接受新的请求。 当后端服务器所在的后端服务器组的lb_algorithm的取值为SOURCE_IP时，该字段无效。  支持多值查询，查询条件格式：*weight&#x3D;xxx&amp;weight&#x3D;xxx*。
     * @param {boolean} [adminStateUp] 后端服务器的管理状态；该字段虽然支持创建、更新，但实际取值决定于member对应的弹性云服务器是否存在。 若存在，该值为true，否则，该值为false。
     * @param {Array<string>} [subnetCidrId] 后端服务器所在的子网ID。该子网和后端服务器关联的负载均衡器的子网必须在同一VPC下。只支持指定IPv4的子网ID。  支持多值查询，查询条件格式：***subnet_cidr_id&#x3D;xxx&amp;subnet_cidr_id&#x3D;xxx*。
     * @param {Array<string>} [address] 后端服务器的对应的IP地址，这个IP必须在subnet_cidr_id字段的子网网段中。 例如：192.168.3.11。  支持多值查询，查询条件格式：*address&#x3D;xxx&amp;address&#x3D;xxx*。
     * @param {Array<number>} [protocolPort] 后端服务器端口号。  支持多值查询，查询条件格式：*protocol_port&#x3D;xxx&amp;protocol_port&#x3D;xxx*。
     * @param {Array<string>} [id] 后端服务器ID。  支持多值查询，查询条件格式：*id&#x3D;xxx&amp;id&#x3D;xxx*。
     * @param {Array<string>} [operatingStatus] 后端服务器的健康状态。  取值： - ONLINE，后端服务器正常运行。 - NO_MONITOR，后端服务器无健康检查。 - OFFLINE，已下线。  支持多值查询，查询条件格式：*operating_status&#x3D;xxx&amp;operating_status&#x3D;*。
     * @param {Array<string>} [enterpriseProjectId] 企业项目ID。不传时查询default企业项目\&quot;0\&quot;下的资源，鉴权按照default企业项目鉴权； 如果传值，则传已存在的企业项目ID或all_granted_eps（表示查询所有企业项目）进行查询。  支持多值查询，查询条件格式： *enterprise_project_id&#x3D;xxx&amp;enterprise_project_id&#x3D;xxx*。  [不支持该字段，请勿使用。](tag:dt,dt_test,hcso_dt)
     * @param {Array<string>} [ipVersion] IP版本，取值v4、v6。  支持多值查询，查询条件格式：*ip_version&#x3D;xxx&amp;ip_version&#x3D;xxx*。
     * @param {Array<string>} [poolId] member所属的服务器组ID  支持多值查询，查询条件格式：*pool_id&#x3D;xxx&amp;pool_id&#x3D;xxx*。
     * @param {Array<string>} [loadbalancerId] member所属的负载均衡器ID。  支持多值查询，查询条件格式：*loadbalancer_id&#x3D;xxx&amp;loadbalancer_id&#x3D;xxx*。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAllMembers(listAllMembersRequest?: ListAllMembersRequest): Promise<ListAllMembersResponse> {
        const options = ParamCreater().listAllMembers(listAllMembersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 返回租户创建LB时可使用的可用区集合列表情况。
     * 
     * - 默认情况下，会返回一个可用区集合。
     * 在（如创建LB）设置可用区时，填写的可用区必须包含在可用区集合中、为这个可用区集合的子集。
     * 
     * - 特殊场景下，部分客户要求负载均衡只能创建在指定可用区集合中，此时会返回客户定制的可用区集合。
     * 返回可用区集合可能为一个也可能为多个，比如列表有两个可用区集合\\[az1,az2\\],\\[az2,az3\\]。
     * 在创建负载均衡器时，可以选择创建在多个可用区，但所选的多个可用区必须同属于其中一个可用区集合，
     * 如可以选az2和az3，但不能选择az1和az3。你可以选择多个可用区，只要这些可用区在一个子集中
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可用区列表
     * @param {string} [publicBorderGroup] 参数解释：可用区组。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAvailabilityZones(listAvailabilityZonesRequest?: ListAvailabilityZonesRequest): Promise<ListAvailabilityZonesResponse> {
        const options = ParamCreater().listAvailabilityZones(listAvailabilityZonesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询证书列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询证书列表
     * @param {string} [marker] 上一页最后一条记录的ID。  使用说明： - 必须与limit一起使用。 - 不指定时表示查询第一页。 - 该字段不允许为空或无效的ID。
     * @param {number} [limit] 参数解释：每页返回的个数。  取值范围：0-2000  默认取值：2000
     * @param {boolean} [pageReverse] 是否反向查询。  取值： - true：查询上一页。 - false：查询下一页，默认。  使用说明： - 必须与limit一起使用。 - 当page_reverse&#x3D;true时，若要查询上一页，marker取值为当前页返回值的previous_marker。
     * @param {Array<string>} [id] 证书ID。  支持多值查询，查询条件格式：*id&#x3D;xxx&amp;id&#x3D;xxx*。
     * @param {Array<string>} [name] 证书的名称。  支持多值查询，查询条件格式：*name&#x3D;xxx&amp;name&#x3D;xxx*。
     * @param {Array<string>} [description] 证书的描述。  支持多值查询，查询条件格式：*description&#x3D;xxx&amp;description&#x3D;xxx*。
     * @param {boolean} [adminStateUp] 证书的管理状态。  不支持该字段，请勿使用。
     * @param {Array<string>} [domain] 服务器证书所签域名。该字段仅type为server时有效。  支持多值查询，查询条件格式：domain&#x3D;xxx&amp;domain&#x3D;xxx。
     * @param {Array<string>} [type] 证书的类型。分为服务器证书(server)和CA证书(client)。  支持多值查询，查询条件格式：type&#x3D;xxx&amp;type&#x3D;xxx。
     * @param {Array<string>} [commonName] 证书的主域名。  支持多值查询，查询条件格式：common_name&#x3D;xxx&amp;common_name&#x3D;xxx。
     * @param {Array<string>} [fingerprint] 证书的指纹。  支持多值查询，查询条件格式：fingerprint&#x3D;xxx&amp;fingerprint&#x3D;xxx。
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
     * 查询当前region下可用的负载均衡规格列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询规格列表
     * @param {string} [marker] 参数解释：上一页最后一条记录的ID。  约束限制： - 必须与limit一起使用。 - 不指定时表示查询第一页。 - 该字段不允许为空或无效的ID。
     * @param {number} [limit] 参数解释：每页返回的个数。  取值范围：0-2000  默认取值：2000
     * @param {boolean} [pageReverse] 参数解释：是否反向查询。  约束限制： - 必须与limit一起使用。 - 当page_reverse&#x3D;true时，若要查询上一页，marker取值为当前页返回值的previous_marker。  取值范围： - true：查询上一页。 - false：查询下一页，默认。
     * @param {Array<string>} [id] 参数解释：规格ID。  支持多值查询，查询条件格式：*id&#x3D;xxx&amp;id&#x3D;xxx*。
     * @param {Array<string>} [name] 参数解释：规格名称。  支持多值查询，查询条件格式：*name&#x3D;xxx&amp;name&#x3D;xxx*。
     * @param {Array<string>} [type] 参数解释：规格类别。  取值范围： - L4和L7 表示四层网络型和七层应用型flavor。 [- gateway 表示网关型LB的flavor，目前只支持弹性计费类型。当前仅支持欧洲局点。](tag:hws_eu) - L4_elastic和L7_elastic 表示弹性扩缩容实例的下限规格。 - L4_elastic_max、L7_elastic_max[和gateway_elastic_max](tag:hws_eu) 表示弹性扩缩容实例的上限规格。  支持多值查询，查询条件格式：*type&#x3D;xxx&amp;type&#x3D;xxx*。
     * @param {boolean} [shared] 参数解释：是否查询公共规格。  取值范围：true表示公共规格，所有租户可见。false表示私有规格，为当前租户所有。
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
     * 健康检查列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询健康检查列表
     * @param {string} [marker] 上一页最后一条记录的ID。  使用说明： - 必须与limit一起使用。 - 不指定时表示查询第一页。 - 该字段不允许为空或无效的ID。
     * @param {number} [limit] 参数解释：每页返回的个数。  取值范围：0-2000  默认取值：2000
     * @param {boolean} [pageReverse] 是否反向查询。  取值： - true：查询上一页。 - false：查询下一页，默认。  使用说明： - 必须与limit一起使用。 - 当page_reverse&#x3D;true时，若要查询上一页，marker取值为当前页返回值的previous_marker。
     * @param {Array<string>} [id] 健康检查ID。  支持多值查询，查询条件格式：*id&#x3D;xxx&amp;id&#x3D;xxx****。
     * @param {Array<number>} [monitorPort] 健康检查端口号。  支持多值查询，查询条件格式：***monitor_port&#x3D;xxx&amp;monitor_port&#x3D;xxx***。
     * @param {Array<string>} [domainName] 发送健康检查请求的域名。  取值：以数字或字母开头，只能包含数字、字母、’-’、’.’。  支持多值查询，查询条件格式：**domain_name&#x3D;xxx&amp;domain_name&#x3D;xxx**。
     * @param {Array<string>} [name] 健康检查名称。  支持多值查询，查询条件格式：*name&#x3D;xxx&amp;name&#x3D;xxx*。
     * @param {Array<number>} [delay] 健康检查间隔。  取值：1-50s。  支持多值查询，查询条件格式：*delay&#x3D;xxx&amp;delay&#x3D;xxx*。
     * @param {Array<number>} [maxRetries] 健康检查连续成功多少次后，将后端服务器的健康检查状态由OFFLINE判定为ONLINE。取值范围：1-10。  支持多值查询，查询条件格式：*******max_retries&#x3D;xxx&amp;max_retries&#x3D;xxx*******。
     * @param {boolean} [adminStateUp] 参数解释：健康检查的管理状态。  取值范围： - true：表示开启健康检查。 - false表示关闭健康检查。
     * @param {Array<number>} [maxRetriesDown] 健康检查连续失败多少次后，将后端服务器的健康检查状态由ONLINE判定为OFFLINE。取值范围：1-10。  支持多值查询，查询条件格式：******max_retries_down&#x3D;xxx&amp;max_retries_down&#x3D;xxx******。
     * @param {number} [timeout] 一次健康检查请求的超时时间。
     * @param {Array<string>} [type] 健康检查请求协议。  取值：TCP、UDP_CONNECT、HTTP、HTTPS、TLS和GRPC。  支持多值查询，查询条件格式：*****type&#x3D;xxx&amp;type&#x3D;xxx*****。
     * @param {Array<string>} [expectedCodes] 期望响应状态码。  取值： - 单值：单个返回码，例如200。 - 列表：多个特定返回码，例如200，202。 - 区间：一个返回码区间，例如200-204。   默认值：200。  仅支持HTTP/HTTPS/GRPC设置该字段，其他协议设置不会生效。  支持多值查询，查询条件格式：****expected_codes&#x3D;xxx&amp;expected_codes&#x3D;xxx****。
     * @param {Array<string>} [urlPath] 健康检查测试member健康时发送的http请求路径。默认为“/”。  使用说明：以“/”开头。当type为HTTP/HTTPS时生效。  支持多值查询，查询条件格式：***url_path&#x3D;xxx&amp;url_path&#x3D;xxx***。
     * @param {Array<string>} [httpMethod] HTTP请求方法。  取值：GET、HEAD、POST。  支持多值查询，查询条件格式：**http_method&#x3D;xxx&amp;http_method&#x3D;xxx**。
     * @param {Array<string>} [enterpriseProjectId] 企业项目ID。不传时查询default企业项目\&quot;0\&quot;下的资源，鉴权按照default企业项目鉴权； 如果传值，则传已存在的企业项目ID或all_granted_eps（表示查询所有企业项目）进行查询。  支持多值查询，查询条件格式： *enterprise_project_id&#x3D;xxx&amp;enterprise_project_id&#x3D;xxx*。  [不支持该字段，请勿使用。](tag:dt,dt_test,hcso_dt)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHealthMonitors(listHealthMonitorsRequest?: ListHealthMonitorsRequest): Promise<ListHealthMonitorsResponse> {
        const options = ParamCreater().listHealthMonitors(listHealthMonitorsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询七层转发策略列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询转发策略列表
     * @param {string} [marker] 参数解释：上一页最后一条记录的ID。  约束限制： - 必须与limit一起使用。 - 不指定时表示查询第一页。 - 该字段不允许为空或无效的ID。
     * @param {number} [limit] 参数解释：每页返回的个数。  取值范围：0-2000  默认取值：2000
     * @param {boolean} [pageReverse] 参数解释：是否反向查询。  约束限制： - 必须与limit一起使用。 - 当page_reverse&#x3D;true时，若要查询上一页，marker取值为当前页返回值的previous_marker。  取值范围： - true：查询上一页。 - false：查询下一页。  默认取值：false
     * @param {Array<string>} [enterpriseProjectId] 参数解释：企业项目ID。不传时查询default企业项目\&quot;0\&quot;下的资源，鉴权按照default企业项目鉴权。 如果传值，则传已存在的企业项目ID或all_granted_eps（表示查询所有企业项目）进行查询。  支持多值查询，查询条件格式： *enterprise_project_id&#x3D;xxx&amp;enterprise_project_id&#x3D;xxx*。  [不支持该字段，请勿使用。](tag:dt,dt_test,hcso_dt)
     * @param {Array<string>} [id] 参数解释：转发策略ID。  支持多值查询，查询条件格式：*id&#x3D;xxx&amp;id&#x3D;xxx*。
     * @param {Array<string>} [name] 参数解释：转发策略名称。  支持多值查询，查询条件格式：**name&#x3D;xxx&amp;name&#x3D;xxx**。
     * @param {Array<string>} [description] 参数解释：转发策略额描述信息。  支持多值查询，查询条件格式：*description&#x3D;xxx&amp;description&#x3D;xxx*。
     * @param {boolean} [adminStateUp] 参数解释：转发策略的管理状态。
     * @param {Array<string>} [listenerId] 参数解释：转发策略所属的监听器ID。  支持多值查询，查询条件格式：*******listener_id&#x3D;xxx&amp;listener_id&#x3D;xxx*******。
     * @param {Array<number>} [position] 参数解释：转发策略的优先级。  支持多值查询，查询条件格式：****position&#x3D;xxx&amp;position&#x3D;xxx****。  不支持该字段，请勿使用。
     * @param {Array<string>} [action] 参数解释：转发策略的转发动作。  取值范围： - REDIRECT_TO_POOL：转发到后端服务器组。 - REDIRECT_TO_LISTENER：重定向到监听器。 - REDIRECT_TO_URL：重定向到URL。 - FIXED_RESPONSE：返回固定响应体。  支持多值查询，查询条件格式：*****action&#x3D;xxx&amp;action&#x3D;xxx*****。  [不支持REDIRECT_TO_URL和FIXED_RESPONSE](tag:hcso_dt)
     * @param {Array<string>} [redirectUrl] 参数解释：转发到的url。  支持多值查询，查询条件格式：****redirect_url&#x3D;xxx&amp;redirect_url&#x3D;xxx****。  不支持该字段，请勿使用。
     * @param {Array<string>} [redirectPoolId] 参数解释：转发到pool的ID。  支持多值查询，查询条件格式：***redirect_pool_id&#x3D;xxx&amp;redirect_pool_id&#x3D;xxx***。
     * @param {Array<string>} [redirectListenerId] 参数解释：转发到的listener的ID。  支持多值查询，查询条件格式：**redirect_listener_id&#x3D;xxx&amp;redirect_listener_id&#x3D;xxx**。
     * @param {Array<string>} [provisioningStatus] 参数解释：转发策略的配置状态。  取值范围： - ACTIVE: 表示正常。 - ERROR: 表示当前策略与同一监听器下的其他策略存在相同的规则配置。  支持多值查询，查询条件格式：*provisioning_status&#x3D;xxx&amp;provisioning_status&#x3D;xxx*。
     * @param {boolean} [displayAllRules] 参数解释：是否显示转发策略下的rule详细信息。  取值范围： - true：显示policy下面的rule的详细信息。 - false：只显示policy下面的rule的id信息
     * @param {Array<number>} [priority] 参数解释：转发策略的优先级。数值越小，优先级越高。  支持多值查询，查询条件格式：*priority&#x3D;xxx&amp;priority&#x3D;xxx*。  [不支持该字段，请勿使用。](tag:hcso_dt)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listL7Policies(listL7PoliciesRequest?: ListL7PoliciesRequest): Promise<ListL7PoliciesResponse> {
        const options = ParamCreater().listL7Policies(listL7PoliciesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询转发规则列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询转发规则列表
     * @param {string} l7policyId 策略ID。
     * @param {number} [limit] 参数解释：每页返回的个数。  取值范围：0-2000  默认取值：2000
     * @param {string} [marker] 上一页最后一条记录的ID。  使用说明： - 必须与limit一起使用。 - 不指定时表示查询第一页。 - 该字段不允许为空或无效的ID。
     * @param {boolean} [pageReverse] 是否反向查询。  取值： - true：查询上一页。 - false：查询下一页，默认。  使用说明： - 必须与limit一起使用。 - 当page_reverse&#x3D;true时，若要查询上一页，marker取值为当前页返回值的previous_marker。
     * @param {Array<string>} [id] 转发规则ID。  支持多值查询，查询条件格式：*id&#x3D;xxx&amp;id&#x3D;xxx*。
     * @param {Array<string>} [compareType] 转发匹配方式。  取值： - EQUAL_TO 表示精确匹配。 - REGEX 表示正则匹配。 - STARTS_WITH 表示前缀匹配。  支持多值查询，查询条件格式：*compare_type&#x3D;xxx&amp;compare_type&#x3D;xxx*。
     * @param {Array<string>} [provisioningStatus] 转发规则的配置状态。  取值：ACTIVE 表示正常。  支持多值查询，查询条件格式：*provisioning_status&#x3D;xxx&amp;provisioning_status&#x3D;xxx*。
     * @param {boolean} [invert] 是否反向匹配。使用说明：固定为false。该字段能更新但不会生效。
     * @param {boolean} [adminStateUp] 转发规则的管理状态。  不支持该字段，请勿使用。
     * @param {Array<string>} [value] 匹配内容的值。  支持多值查询，查询条件格式：*value&#x3D;xxx&amp;value&#x3D;xxx*。
     * @param {Array<string>} [key] 匹配内容的键值，用于标识规则。  支持多值查询，查询条件格式：*key&#x3D;xxx&amp;key&#x3D;xxx*。  不支持该字段，请勿使用。
     * @param {Array<string>} [type] 匹配类别，可以为HOST_NAME，PATH。  一个l7policy下创建的l7rule的type不能重复。  支持多值查询，查询条件格式：*type&#x3D;xxx&amp;type&#x3D;xxx*。
     * @param {Array<string>} [enterpriseProjectId] 企业项目ID。不传时查询default企业项目\&quot;0\&quot;下的资源，鉴权按照default企业项目鉴权； 如果传值，则传已存在的企业项目ID或all_granted_eps（表示查询所有企业项目）进行查询。  支持多值查询，查询条件格式：*enterprise_project_id&#x3D;xxx&amp;enterprise_project_id&#x3D;xxx*。  [不支持该字段，请勿使用。](tag:dt,dt_test,hcso_dt)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listL7Rules(listL7RulesRequest?: ListL7RulesRequest): Promise<ListL7RulesResponse> {
        const options = ParamCreater().listL7Rules(listL7RulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询监听器列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询监听器列表
     * @param {number} [limit] 参数解释：每页返回的个数。  取值范围：0-2000  默认取值：2000
     * @param {string} [marker] 上一页最后一条记录的ID。  使用说明： - 必须与limit一起使用。 - 不指定时表示查询第一页。 - 该字段不允许为空或无效的ID。
     * @param {boolean} [pageReverse] 是否反向查询。  取值： - true：查询上一页。 - false：查询下一页，默认。  使用说明： - 必须与limit一起使用。 - 当page_reverse&#x3D;true时，若要查询上一页，marker取值为当前页返回值的previous_marker。
     * @param {Array<string>} [protocolPort] 监听器的前端监听端口。  [当监听器的protocol为IP时，前端端口固定为0。](tag:hws_eu) 支持多值查询，查询条件格式：*protocol_port&#x3D;xxx&amp;protocol_port&#x3D;xxx*。
     * @param {Array<string>} [protocol] 监听器的监听协议。  [取值：TCP、UDP、HTTP、HTTPS、TERMINATED_HTTPS、QUIC、TLS。 说明：TERMINATED_HTTPS为共享型LB上的监听器独有的协议。](tag:hws,hws_hk,ocb,ctc,hcs,g42,tm,cmcc,hk_g42,hws_ocb,fcs,dt)  [取值：TCP、UDP、HTTP、HTTPS。](tag:hcso_dt) [取值：TCP、UDP、IP、HTTP、HTTPS。IP为网关型LB上的监听器独有的协议。](tag:hws_eu)  支持多值查询，查询条件格式：*protocol&#x3D;xxx&amp;protocol&#x3D;xxx*。  [不支持QUIC。](tag:tm,hws_eu,g42,hk_g42,hcso_dt,dt,dt_test)
     * @param {Array<string>} [description] 监听器的描述信息。  支持多值查询，查询条件格式：*description&#x3D;xxx&amp;description&#x3D;xxx*。
     * @param {Array<string>} [defaultTlsContainerRef] 监听器的服务器证书ID。  支持多值查询，查询条件格式： *default_tls_container_ref&#x3D;xxx&amp;default_tls_container_ref&#x3D;xxx*。
     * @param {Array<string>} [clientCaTlsContainerRef] 监听器的CA证书ID。  支持多值查询，查询条件格式： *client_ca_tls_container_ref&#x3D;xxx&amp;client_ca_tls_container_ref&#x3D;xxx*。
     * @param {boolean} [adminStateUp] 监听器的管理状态。  [不支持该字段，请勿使用。](tag:dt,dt_test,hcso_dt)
     * @param {Array<number>} [connectionLimit] ​监听器的最大连接数。  取值：-1表示不限制连接数。  支持多值查询，查询条件格式：*connection_limit&#x3D;xxx&amp;connection_limit&#x3D;xxx*。  不支持该字段，请勿使用。
     * @param {Array<string>} [defaultPoolId] 监听器的默认后端服务器组ID。当请求没有匹配的转发策略时，转发到默认后端服务器上处理。  支持多值查询，查询条件格式：*default_pool_id&#x3D;xxx&amp;default_pool_id&#x3D;xxx*。
     * @param {Array<string>} [id] 监听器ID。  支持多值查询，查询条件格式：*id&#x3D;xxx&amp;id&#x3D;xxx*。
     * @param {Array<string>} [name] 监听器名称。  支持多值查询，查询条件格式：*name&#x3D;xxx&amp;name&#x3D;xxx*。
     * @param {boolean} [http2Enable] 客户端与LB之间的HTTPS请求的HTTP2功能的开启状态。 开启后，可提升客户端与LB间的访问性能，但LB与后端服务器间仍采用HTTP1.X协议。  使用说明： - 仅HTTPS协议监听器有效。 - QUIC监听器不能设置该字段，固定返回为true。 - 其他协议的监听器可设置该字段但无效，无论取值如何都不影响监听器正常运行。  [不支持QUIC。](tag:tm,hws_eu,g42,hk_g42,hcso_dt,dt,dt_test)
     * @param {Array<string>} [loadbalancerId] 监听器所属的负载均衡器ID。  支持多值查询，查询条件格式：*loadbalancer_id&#x3D;xxx&amp;loadbalancer_id&#x3D;xxx*。
     * @param {Array<string>} [tlsCiphersPolicy] 监听器使用的安全策略。  支持多值查询，查询条件格式：*tls_ciphers_policy&#x3D;xxx&amp;tls_ciphers_policy&#x3D;xxx*。
     * @param {Array<string>} [memberAddress] 后端服务器的IP地址。仅用于查询条件，不作为响应参数字段。  支持多值查询，查询条件格式：*member_address&#x3D;xxx&amp;member_address&#x3D;xxx*。
     * @param {Array<string>} [memberDeviceId] 后端服务器对应的弹性云服务器的ID。仅用于查询条件，不作为响应参数字段。  支持多值查询，查询条件格式：*member_device_id&#x3D;xxx&amp;member_device_id&#x3D;xxx*。
     * @param {Array<string>} [enterpriseProjectId] 企业项目ID。不传时查询default企业项目\&quot;0\&quot;下的资源，鉴权按照default企业项目鉴权； 如果传值，则传已存在的企业项目ID或all_granted_eps（表示查询所有企业项目）进行查询。  支持多值查询，查询条件格式：*enterprise_project_id&#x3D;xxx&amp;enterprise_project_id&#x3D;xxx*。  [不支持该字段，请勿使用。](tag:dt,dt_test,hcso_dt)
     * @param {boolean} [enableMemberRetry] 是否开启后端服务器的重试。  取值：true 开启重试，false 不开启重试。
     * @param {Array<number>} [memberTimeout] 等待后端服务器响应超时时间。请求转发后端服务器后，在等待超时member_timeout时长没有响应，负载均衡将终止等待，并返回 HTTP504错误码。  取值：1-3600s。  支持多值查询，查询条件格式：*member_timeout&#x3D;xxx&amp;member_timeout&#x3D;xxx*。
     * @param {Array<number>} [clientTimeout] 等待客户端请求超时时间，包括两种情况： - 读取整个客户端请求头的超时时长：如果客户端未在超时时长内发送完整个请求头，则请求将被中断 - 两个连续body体的数据包到达LB的时间间隔，超出client_timeout将会断开连接。  取值：1-3600s。  支持多值查询，查询条件格式：*client_timeout&#x3D;xxx&amp;client_timeout&#x3D;xxx*。
     * @param {Array<number>} [keepaliveTimeout] 客户端连接空闲超时时间。在超过keepalive_timeout时长一直没有请求， 负载均衡会暂时中断当前连接，直到下一次请求时重新建立新的连接。  取值： - TCP监听器[和IP监听器](tag:hws_eu)：10-4000s。 - HTTP/HTTPS/TERMINATED_HTTPS监听器：0-4000s。 [- 共享型实例的UDP监听器不支持此字段。](tag:hws,hws_hk,ocb,ctc,g42,tm,cmcc,hk_g42,hws_ocb,fcs,dt,dt_test,hk_tm)  支持多值查询，查询条件格式：*keepalive_timeout&#x3D;xxx&amp;keepalive_timeout&#x3D;xxx*。
     * @param {boolean} [transparentClientIpEnable] 是否透传客户端IP地址。开启后客户端IP地址将透传到后端服务器。  [仅作用于共享型LB的TCP/UDP监听器。取值：true开启，false不开启。 ](tag:hws,hws_hk,ocb,ctc,g42,tm,cmcc,hk_g42,hws_ocb,hk_vdf,fcs,dt,hk_tm)
     * @param {boolean} [proxyProtocolEnable] 是否开启proxy_protocol。仅TLS监听器可指定，其他协议的监听器该字段不生效，proxy_protocol不开启。
     * @param {boolean} [enhanceL7policyEnable] 是否开启高级转发策略功能。开启高级转发策略后，支持更灵活的转发策略和转发规则设置。  取值：true开启，false不开启。  [荷兰region不支持该字段，请勿使用。](tag:dt,dt_test)
     * @param {Array<string>} [memberInstanceId] 后端服务器ID。仅用于查询条件，不作为响应参数字段。  支持多值查询，查询条件格式：*member_instance_id&#x3D;xxx&amp;member_instance_id&#x3D;xxx*。
     * @param {Array<string>} [protectionStatus] 修改保护状态, 取值： - nonProtection: 不保护，默认值为nonProtection - consoleProtection: 控制台修改保护
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
     * 查询负载均衡器列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询负载均衡器列表
     * @param {string} [marker] 上一页最后一条记录的ID。  使用说明： - 必须与limit一起使用。 - 不指定时表示查询第一页。 - 该字段不允许为空或无效的ID。
     * @param {number} [limit] 参数解释：每页返回的个数。  取值范围：0-2000  默认取值：2000
     * @param {boolean} [pageReverse] 是否反向查询。  取值： - true：查询上一页。 - false：查询下一页，默认。  使用说明： - 必须与limit一起使用。 - 当page_reverse&#x3D;true时，若要查询上一页，marker取值为当前页返回值的previous_marker。
     * @param {Array<string>} [id] 负载均衡器ID。  支持多值查询，查询条件格式：*id&#x3D;xxx&amp;id&#x3D;xxx*。
     * @param {Array<string>} [name] 负载均衡器名称。  支持多值查询，查询条件格式：*name&#x3D;xxx&amp;name&#x3D;xxx*。
     * @param {Array<string>} [description] 负载均衡器的描述信息。  支持多值查询，查询条件格式：*description&#x3D;xxx&amp;description&#x3D;xxx*。
     * @param {boolean} [adminStateUp] 参数解释：负载均衡器的启用状态。  取值范围： - true ：启用。 - false：停用。  [不支持该字段，请勿使用。](tag:dt,dt_test)
     * @param {Array<string>} [provisioningStatus] 负载均衡器的配置状态。  取值： - ACTIVE：使用中。 - PENDING_DELETE：删除中。  支持多值查询，查询条件格式：*provisioning_status&#x3D;xxx&amp;provisioning_status&#x3D;xxx*。
     * @param {Array<string>} [operatingStatus] 负载均衡器的操作状态。  取值： - ONLINE：正常运行。 - FROZEN：已冻结。  支持多值查询，查询条件格式：*operating_status&#x3D;xxx&amp;operating_status&#x3D;xxx*。
     * @param {boolean} [guaranteed] 是否独享型LB。  取值： - false：共享型 - true：独享型  [仅支持独享型，固定为true。](tag:hws_eu,hcso_dt)
     * @param {Array<string>} [vpcId] 负载均衡器所在的VPC ID。  支持多值查询，查询条件格式：*vpc_id&#x3D;xxx&amp;vpc_id&#x3D;xxx*。
     * @param {Array<string>} [vipPortId] 负载均衡器的IPv4对应的port ID。  支持多值查询，查询条件格式：*vip_port_id&#x3D;xxx&amp;vip_port_id&#x3D;xxx*。
     * @param {Array<string>} [vipAddress] 负载均衡器的IPv4虚拟IP地址。  支持多值查询，查询条件格式：*vip_address&#x3D;xxx&amp;vip_address&#x3D;xxx*。
     * @param {Array<string>} [vipSubnetCidrId] 负载均衡器所在子网的IPv4子网ID，也称为该负载均衡器实例的前端子网。  支持多值查询，查询条件格式：*vip_subnet_cidr_id&#x3D;xxx&amp;vip_subnet_cidr_id&#x3D;xxx*。
     * @param {Array<string>} [ipv6VipPortId] 双栈类型负载均衡器的IPv6对应的port ID。  支持多值查询，查询条件格式：*ipv6_vip_port_id&#x3D;xxx&amp;ipv6_vip_port_id&#x3D;xxx*。  [不支持IPv6，请勿使用。](tag:dt,dt_test)
     * @param {Array<string>} [ipv6VipAddress] 双栈类型负载均衡器的IPv6地址。  支持多值查询，查询条件格式：*ipv6_vip_address&#x3D;xxx&amp;ipv6_vip_address&#x3D;xxx*。  [不支持IPv6，请勿使用。](tag:dt,dt_test)
     * @param {Array<string>} [ipv6VipVirsubnetId] 双栈类型负载均衡器所在的子网IPv6网络ID，也称为该负载均衡器实例的前端子网。  支持多值查询，查询条件格式：*ipv6_vip_virsubnet_id&#x3D;xxx&amp;ipv6_vip_virsubnet_id&#x3D;xxx*。  [不支持IPv6，请勿使用。](tag:dt,dt_test)
     * @param {Array<string>} [eips] 负载均衡器绑定的EIP。例如要查询绑定以下EIP的LB： \&quot;eips\&quot;: [     {         \&quot;eip_id\&quot;: \&quot;e9b72a9d-4275-455e-a724-853504e4d9c6\&quot;,         \&quot;eip_address\&quot;: \&quot;88.88.14.122\&quot;,         \&quot;ip_version\&quot;: 4     } ] 可以通如下查询： eips&#x3D;ip_version%3D4&amp;eips&#x3D;eip_address%3D88.88.14.122&amp;eips&#x3D;eip_id%3De9b72a9d-4275-455e-a724-853504e4d9c6  支持多值查询，查询条件格式： - eip_id作为查询条件：*eips&#x3D;eip_id&#x3D;xxx&amp;eips&#x3D;eip_id&#x3D;xxx*。 - eip_address作为查询条件：*eips&#x3D;eip_address&#x3D;xxx&amp;eips&#x3D;eip_address&#x3D;xxx*。 - ip_version作为查询条件：*eips&#x3D;ip_version&#x3D;xxx&amp;eips&#x3D;ip_version&#x3D;xxx*。  注：该字段与publicips字段一致。
     * @param {Array<string>} [publicips] 负载均衡器绑定的公网IP。例如要查询绑定以下公网IP的LB： \&quot;publicips&#x3D;\&quot;: [     {         \&quot;public_id\&quot;: \&quot;e9b72a9d-4275-455e-a724-853504e4d9c6\&quot;,         \&quot;public_address\&quot;: \&quot;88.88.14.122\&quot;,         \&quot;ip_version\&quot;: 4     } ] 可以通如下查询： publicips&#x3D;ip_version%3D4&amp;publicips&#x3D;public_address%3D88.88.14.122&amp;publicips&#x3D;public_id%3De9b72a9d-4275-455e-a724-853504e4d9c6   支持多值查询，查询条件格式： - publicip_id作为查询条件： *publicips&#x3D;publicip_id&#x3D;xxx&amp;publicips&#x3D;publicip_id&#x3D;xxx* - publicip_address作为查询条件： *publicips&#x3D;publicip_address&#x3D;xxx&amp;publicips&#x3D;publicip_address&#x3D;xxx* - ip_version作为查询条件： *publicips&#x3D;ip_version&#x3D;xxx&amp;publicips&#x3D;ip_version&#x3D;xxx*  注：该字段与eips字段一致。
     * @param {Array<string>} [availabilityZoneList] 负载均衡器所在可用区列表。  支持多值查询，查询条件格式： *availability_zone_list&#x3D;xxx&amp;availability_zone_list&#x3D;xxx*。
     * @param {Array<string>} [l4FlavorId] 网络型规格ID。  支持多值查询，查询条件格式：*l4_flavor_id&#x3D;xxx&amp;l4_flavor_id&#x3D;xxx*。  [不支持该字段，请勿使用。](tag:hcso,hk_vdf,fcs,fcs_vm,mix,hcso_g42,hcso_g42_b)
     * @param {Array<string>} [l4ScaleFlavorId] 四层弹性Flavor ID。  支持多值查询，查询条件格式：*l4_scale_flavor_id&#x3D;xxx&amp;l4_scale_flavor_id&#x3D;xxx*。  不支持该字段，请勿使用。
     * @param {Array<string>} [l7FlavorId] 应用型规格ID。  支持多值查询，查询条件格式：*l7_flavor_id&#x3D;xxx&amp;l7_flavor_id&#x3D;xxx*。  [不支持该字段，请勿使用。](tag:hcso,hk_vdf,fcs,fcs_vm,mix,hcso_g42,hcso_g42_b)
     * @param {Array<string>} [l7ScaleFlavorId] 七层弹性Flavor ID。  支持多值查询，查询条件格式：*l7_scale_flavor_id&#x3D;xxx&amp;l7_scale_flavor_id&#x3D;xxx*。  不支持该字段，请勿使用。
     * @param {Array<string>} [billingInfo] 资源账单信息。  支持多值查询，查询条件格式：*billing_info&#x3D;xxx&amp;billing_info&#x3D;xxx*。  [不支持该字段，请勿使用。](tag:hws_hk,hws_eu,hws_test,hcs,hcs_sm,hcso,hk_vdf,fcs,fcs_vm,mix,hcso_g42,hcso_g42_b,hcso_dt,dt,dt_test,ocb,ctc,cmcc,tm,sbc,g42,hws_ocb,hk_sbc,hk_tm,hk_g42)
     * @param {Array<string>} [memberDeviceId] 负载均衡器中的后端服务器对应的弹性云服务器的ID。仅用于查询条件，不作为响应参数字段。  支持多值查询，查询条件格式：*member_device_id&#x3D;xxx&amp;member_device_id&#x3D;xxx*。
     * @param {Array<string>} [memberAddress] 负载均衡器中的后端服务器对应的弹性云服务器的IP地址。仅用于查询条件，不作为响应参数字段。  支持多值查询，查询条件格式：*member_address&#x3D;xxx&amp;member_address&#x3D;xxx*。
     * @param {Array<string>} [enterpriseProjectId] 负载均衡器所属的企业项目ID。 查询时若不传，则查询default企业项目下的资源，鉴权按照default企业项目鉴权。 如果传值，则必须传已存在的企业项目ID（不可为\&quot;0\&quot;）或传all_granted_eps表示查询所有企业项目。  支持多值查询，查询条件格式： *enterprise_project_id&#x3D;xxx&amp;enterprise_project_id&#x3D;xxx*。  [不支持该字段，请勿使用。](tag:dt,dt_test,hcso_dt)
     * @param {Array<number>} [ipVersion] IP版本信息。  取值：4代表IPv4，6代表IPv6。  支持多值查询，查询条件格式：*ip_version&#x3D;xxx&amp;ip_version&#x3D;xxx*。  [不支持IPv6，请勿设置为6。](tag:dt,dt_test)
     * @param {boolean} [deletionProtectionEnable] 是否开启删除保护，false不开启，true开启。[不支持该字段，请勿使用。](tag:hws_eu,g42,hk_g42)  [荷兰region不支持该字段，请勿使用。](tag:dt,dt_test)
     * @param {Array<string>} [elbVirsubnetType] 下联面子网类型。  取值： - ipv4：ipv4。 - dualstack：双栈。  支持多值查询，查询条件格式： *elb_virsubnet_type&#x3D;ipv4&amp;elb_virsubnet_type&#x3D;dualstack*。
     * @param {Array<string>} [autoscaling] 是否开启弹性扩缩容。示例如下： \&quot;autoscaling\&quot;: {             \&quot;enable\&quot;: \&quot;true\&quot;         }  支持多值查询，查询条件格式：  *autoscaling&#x3D;enable&#x3D;true&amp;autoscaling&#x3D;enable&#x3D;false*。  [不支持该字段，请勿使用。](tag:hws_eu,g42,hk_g42,hcso,fcs,fcs_vm,mix,hcso_g42,hcso_g42_b)
     * @param {Array<string>} [protectionStatus] 修改保护状态, 取值： - nonProtection: 不保护，默认值为nonProtection - consoleProtection: 控制台修改保护
     * @param {Array<string>} [globalEips] 负载均衡器绑定的公网IP。示例如下：  {     \&quot;global_eips\&quot;: [         {             \&quot;global_eip_id\&quot;: \&quot;24000000-0000-0000-0000-100000000001\&quot;,             \&quot;global_eip_address\&quot;: \&quot;10.10.10.10\&quot;,             \&quot;ip_version\&quot;: 4         }     ] }   支持多值查询，查询条件格式：  - global_eip_id作为查询条件：*global_eips&#x3D;global_eip_id&#x3D;xxx&amp;global_eips&#x3D;global_eip_id&#x3D;xxx*。  - global_eip_address作为查询条件：*global_eips&#x3D;global_eip_address&#x3D;xxx&amp;global_eips&#x3D;global_eip_address&#x3D;xxx*。  - ip_version作为查询条件：*global_eips&#x3D;ip_version&#x3D;xxx&amp;global_eips&#x3D;ip_version&#x3D;xxx*。
     * @param {string} [logTopicId] LB实例绑定的logtank的topic id信息，支持多值查询，查询条件格式：*log_topic_id&#x3D;xxx&amp;log_topic_id&#x3D;xxx*。
     * @param {string} [logGroupId] LB实例绑定的logtank的group id信息，支持多值查询，查询条件格式：*log_group_id&#x3D;xxx&amp;log_group_id&#x3D;xxx*。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLoadBalancers(listLoadBalancersRequest?: ListLoadBalancersRequest): Promise<ListLoadBalancersResponse> {
        const options = ParamCreater().listLoadBalancers(listLoadBalancersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询云日志列表。[荷兰region不支持云日志功能，请勿使用。](tag:dt,dt_test)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云日志列表
     * @param {number} [limit] 参数解释：每页返回的个数。  取值范围：0-2000  默认取值：2000
     * @param {string} [marker] 上一页最后一条记录的ID。  使用说明： - 必须与limit一起使用。 - 不指定时表示查询第一页。 - 该字段不允许为空或无效的ID。
     * @param {boolean} [pageReverse] 是否反向查询。  取值： - true：查询上一页。 - false：查询下一页，默认。  使用说明： - 必须与limit一起使用。 - 当page_reverse&#x3D;true时，若要查询上一页，marker取值为当前页返回值的previous_marker
     * @param {Array<string>} [enterpriseProjectId] 企业项目ID。 支持多值查询，查询条件格式：enterprise_project_id&#x3D;xxx&amp;enterprise_project_id&#x3D;xxx。  [不支持该字段，请勿使用。](tag:dt,dt_test,hcso_dt)
     * @param {Array<string>} [id] 云日志记录ID。 支持多值查询，查询条件格式：id&#x3D;xxx&amp;id&#x3D;xxx。
     * @param {Array<string>} [loadbalancerId] 负载均衡器ID。 支持多值查询，查询条件格式：loadbalancer_id&#x3D;xxx&amp;loadbalancer_id&#x3D;xxx。
     * @param {Array<string>} [logGroupId] 云日志分组ID。 支持多值查询，查询条件格式：log_group_id&#x3D;xxx&amp;log_group_id&#x3D;xxx。
     * @param {Array<string>} [logTopicId] 云日志主题ID 支持多值查询，查询条件格式：log_topic_id&#x3D;xxx&amp;log_topic_id&#x3D;xxx。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLogtanks(listLogtanksRequest?: ListLogtanksRequest): Promise<ListLogtanksResponse> {
        const options = ParamCreater().listLogtanks(listLogtanksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 主备后端服务器组列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询主备后端服务器组列表
     * @param {string} [marker] 上一页最后一条记录的ID。  使用说明： - 必须与limit一起使用。 - 不指定时表示查询第一页。 - 该字段不允许为空或无效的ID。
     * @param {number} [limit] 参数解释：每页返回的个数。  取值范围：0-2000  默认取值：2000
     * @param {boolean} [pageReverse] 是否反向查询。  取值： - true：查询上一页。 - false：查询下一页，默认。  使用说明： - 必须与limit一起使用。 - 当page_reverse&#x3D;true时，若要查询上一页，marker取值为当前页返回值的previous_marker。
     * @param {Array<string>} [description] 后端服务器组的描述信息。  支持多值查询，查询条件格式：*description&#x3D;xxx&amp;description&#x3D;xxx*。
     * @param {Array<string>} [healthmonitorId] 后端服务器组关联的健康检查的ID。  支持多值查询，查询条件格式：*healthmonitor_id&#x3D;xxx&amp;healthmonitor_id&#x3D;xxx*。
     * @param {Array<string>} [id] 后端服务器组的ID。  支持多值查询，查询条件格式：*id&#x3D;xxx&amp;id&#x3D;xxx*。
     * @param {Array<string>} [name] 后端服务器组的名称。  支持多值查询，查询条件格式：*name&#x3D;xxx&amp;name&#x3D;xxx*。
     * @param {Array<string>} [loadbalancerId] 后端服务器组绑定的负载均衡器ID。  支持多值查询，查询条件格式：*loadbalancer_id&#x3D;xxx&amp;loadbalancer_id&#x3D;xxx*。
     * @param {Array<string>} [protocol] 后端服务器组的后端协议。  取值：TCP、UDP、[IP、](tag:hws_eu)TLS、GRPC、HTTP、HTTPS和QUIC。 [IP类型为网关型LB独有的后端服务器组协议。](tag:hws_eu)  支持多值查询，查询条件格式：*protocol&#x3D;xxx&amp;protocol&#x3D;xxx*。  [不支持QUIC。](tag:tm,hws_eu,g42,hk_g42,hcso_dt)  [荷兰region不支持QUIC。](tag:dt,dt_test)
     * @param {Array<string>} [lbAlgorithm] 后端服务器组的负载均衡算法。  取值： 1、ROUND_ROBIN：加权轮询算法。 2、LEAST_CONNECTIONS：加权最少连接算法。 3、SOURCE_IP：源IP算法。 4、QUIC_CID：连接ID算法。  支持多值查询，查询条件格式：*lb_algorithm&#x3D;xxx&amp;lb_algorithm&#x3D;xxx*。  [不支持QUIC_CID。](tag:tm,hws_eu,g42,hk_g42,hcso_dt)  [荷兰region不支持QUIC_CID。](tag:dt,dt_test)
     * @param {Array<string>} [enterpriseProjectId] 企业项目ID。不传时查询default企业项目\&quot;0\&quot;下的资源，鉴权按照default企业项目鉴权； 如果传值，则传已存在的企业项目ID或all_granted_eps（表示查询所有企业项目）进行查询。  支持多值查询，查询条件格式： *enterprise_project_id&#x3D;xxx&amp;enterprise_project_id&#x3D;xxx*。  [不支持该字段，请勿使用。](tag:dt,dt_test,hcso_dt)
     * @param {Array<string>} [ipVersion] 后端服务器组支持的IP版本。  支持多值查询，查询条件格式：*ip_version&#x3D;xxx&amp;ip_version&#x3D;xxx*。
     * @param {Array<string>} [memberAddress] 后端服务器的IP地址。仅用于查询条件，不作为响应参数字段。  支持多值查询，查询条件格式：*member_address&#x3D;xxx&amp;member_address&#x3D;xxx*。
     * @param {Array<string>} [memberDeviceId] 后端服务器对应的弹性云服务器的ID。仅用于查询条件，不作为响应参数字段。  支持多值查询，查询条件格式：*member_device_id&#x3D;xxx&amp;member_device_id&#x3D;xxx*。
     * @param {Array<string>} [listenerId] 关联的监听器ID，包括通过l7policy关联的。  支持多值查询，查询条件格式：*listener_id&#x3D;xxx&amp;listener_id&#x3D;xxx*。
     * @param {Array<string>} [memberInstanceId] 后端服务器ID。仅用于查询条件，不作为响应参数字段。  支持多值查询，查询条件格式：*member_instance_id&#x3D;xxx&amp;member_instance_id&#x3D;xxx*。
     * @param {Array<string>} [vpcId] 后端服务器组关联的虚拟私有云的ID。
     * @param {Array<string>} [type] 后端服务器组的类型。  取值： - instance：允许任意类型的后端，type指定为该类型时，vpc_id是必选字段。 - ip：只能添加跨VPC后端，type指定为该类型时，vpc_id不允许指定。 - 空字符串（\&quot;\&quot;）：允许任意类型的后端
     * @param {boolean} [connectionDrain] 查询是否开启延迟注销的功能，查询条件格式：*connection_drain&#x3D;true或者*connection_drain&#x3D;false
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMasterSlavePools(listMasterSlavePoolsRequest?: ListMasterSlavePoolsRequest): Promise<ListMasterSlavePoolsResponse> {
        const options = ParamCreater().listMasterSlavePools(listMasterSlavePoolsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Pool下的后端服务器列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询后端服务器列表
     * @param {string} poolId 参数解释：后端服务器组ID。
     * @param {string} [marker] 上一页最后一条记录的ID。  使用说明： - 必须与limit一起使用。 - 不指定时表示查询第一页。 - 该字段不允许为空或无效的ID。
     * @param {number} [limit] 参数解释：每页返回的个数。  取值范围：0-2000  默认取值：2000
     * @param {boolean} [pageReverse] 是否反向查询。  取值： - true：查询上一页。 - false：查询下一页，默认。  使用说明： - 必须与limit一起使用。 - 当page_reverse&#x3D;true时，若要查询上一页，marker取值为当前页返回值的previous_marker。
     * @param {Array<string>} [name] 后端服务器名称。  支持多值查询，查询条件格式：*name&#x3D;xxx&amp;name&#x3D;xxx*。
     * @param {Array<number>} [weight] 后端服务器的权重，请求将根据pool配置的负载均衡算法和后端服务器的权重进行负载分发。 权重值越大，分发的请求越多。权重为0的后端不再接受新的请求。  取值：0-100。  支持多值查询，查询条件格式：*weight&#x3D;xxx&amp;weight&#x3D;xxx*。
     * @param {boolean} [adminStateUp] 后端服务器的管理状态。  取值：true、false。  虽然创建、更新请求支持该字段，但实际取值决定于后端服务器对应的弹性云服务器是否存在。若存在，该值为true，否则，该值为false。
     * @param {Array<string>} [subnetCidrId] 后端服务器所在子网的IPv4子网ID或IPv6子网ID。  支持多值查询，查询条件格式：***subnet_cidr_id&#x3D;xxx&amp;subnet_cidr_id&#x3D;xxx*。  [不支持IPv6，请勿设置为IPv6子网ID。](tag:dt,dt_test)
     * @param {Array<string>} [address] 后端服务器对应的IPv4或IPv6地址。  支持多值查询，查询条件格式：*address&#x3D;xxx&amp;address&#x3D;xxx*。  [不支持IPv6，请勿设置为IPv6地址。](tag:dt,dt_test)
     * @param {Array<number>} [protocolPort] 后端服务器业务端口号。  支持多值查询，查询条件格式：*protocol_port&#x3D;xxx&amp;protocol_port&#x3D;xxx*。
     * @param {Array<string>} [id] 后端服务器ID。  支持多值查询，查询条件格式：*id&#x3D;xxx&amp;id&#x3D;xxx*。
     * @param {Array<string>} [operatingStatus] 后端服务器的健康状态。  取值： - ONLINE：后端服务器正常。 - NO_MONITOR：后端服务器所在的服务器组没有健康检查器。 - OFFLINE：后端服务器关联的ECS服务器不存在或已关机。  支持多值查询，查询条件格式：*operating_status&#x3D;xxx&amp;operating_status&#x3D;xxx*。
     * @param {Array<string>} [enterpriseProjectId] 企业项目ID。不传时查询default企业项目\&quot;0\&quot;下的资源，鉴权按照default企业项目鉴权； 如果传值，则传已存在的企业项目ID或all_granted_eps（表示查询所有企业项目）进行查询。  支持多值查询，查询条件格式：*enterprise_project_id&#x3D;xxx&amp;enterprise_project_id&#x3D;xxx*。  [不支持该字段，请勿使用。](tag:dt,dt_test,hcso_dt)
     * @param {Array<string>} [ipVersion] 当前后端服务器的IP地址版本。取值：v4、v6。
     * @param {Array<string>} [memberType] 后端服务器的类型。  取值： - ip：跨VPC的member。 - instance：关联到ECS的member。  支持多值查询，查询条件格式：*member_type&#x3D;xxx&amp;member_type&#x3D;xxx*。
     * @param {Array<string>} [instanceId] member关联的ECS实例ID，空表示跨VPC场景的member。  支持多值查询，查询条件格式：*instance_id&#x3D;xxx&amp;instance_id&#x3D;xxx*。
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
     * 后端服务器组列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询后端服务器组列表
     * @param {string} [marker] 上一页最后一条记录的ID。  使用说明： - 必须与limit一起使用。 - 不指定时表示查询第一页。 - 该字段不允许为空或无效的ID。
     * @param {number} [limit] 参数解释：每页返回的个数。  取值范围：0-2000  默认取值：2000
     * @param {boolean} [pageReverse] 是否反向查询。  取值： - true：查询上一页。 - false：查询下一页，默认。  使用说明： - 必须与limit一起使用。 - 当page_reverse&#x3D;true时，若要查询上一页，marker取值为当前页返回值的previous_marker。
     * @param {Array<string>} [description] 后端服务器组的描述信息。  支持多值查询，查询条件格式：*description&#x3D;xxx&amp;description&#x3D;xxx*。
     * @param {boolean} [adminStateUp] 后端服务器组的管理状态。  [不支持该字段，请勿使用。](tag:dt,dt_test,hcso_dt)
     * @param {Array<string>} [healthmonitorId] 后端服务器组关联的健康检查的ID。  支持多值查询，查询条件格式：*healthmonitor_id&#x3D;xxx&amp;healthmonitor_id&#x3D;xxx*。
     * @param {Array<string>} [id] 后端服务器组的ID。  支持多值查询，查询条件格式：*id&#x3D;xxx&amp;id&#x3D;xxx*。
     * @param {Array<string>} [name] 后端服务器组的名称。  支持多值查询，查询条件格式：*name&#x3D;xxx&amp;name&#x3D;xxx*。
     * @param {Array<string>} [loadbalancerId] 后端服务器组绑定的负载均衡器ID。  支持多值查询，查询条件格式：*loadbalancer_id&#x3D;xxx&amp;loadbalancer_id&#x3D;xxx*。
     * @param {Array<string>} [protocol] 后端服务器组的后端协议。  取值：TCP、UDP、[IP、](tag:hws_eu)TLS、HTTP、HTTPS、QUIC和GRPC。  支持多值查询，查询条件格式：*protocol&#x3D;xxx&amp;protocol&#x3D;xxx*。  [不支持QUIC协议。](tag:hws_eu,g42,hk_g42,hcso_dt)  [荷兰region不支持QUIC。](tag:dt,dt_test)
     * @param {Array<string>} [lbAlgorithm] 后端服务器组的负载均衡算法。  取值： - ROUND_ROBIN：加权轮询算法。 - LEAST_CONNECTIONS：加权最少连接算法。 - SOURCE_IP：源IP算法。 - QUIC_CID：连接ID算法。 [- 2_TUPLE_HASH：二元组hash算法，仅IP类型的pool支持。 - 3_TUPLE_HASH：三元组hash算法，仅IP类型的pool支持。 - 5_TUPLE_HASH：五元组hash算法，仅IP类型的pool支持。 - IP型pool不指定该字段时，默认设置为5_TUPLE_HASH。](tag:hws_eu)  支持多值查询，查询条件格式：*lb_algorithm&#x3D;xxx&amp;lb_algorithm&#x3D;xxx*。  [不支持QUIC_CID。](tag:hws_eu,g42,hk_g42,hcso_dt)  [荷兰region不支持QUIC_CID。](tag:dt,dt_test)
     * @param {Array<string>} [enterpriseProjectId] 企业项目ID。不传时查询default企业项目\&quot;0\&quot;下的资源，鉴权按照default企业项目鉴权； 如果传值，则传已存在的企业项目ID或all_granted_eps（表示查询所有企业项目）进行查询。  支持多值查询，查询条件格式：*enterprise_project_id&#x3D;xxx&amp;enterprise_project_id&#x3D;xxx*。  [不支持该字段，请勿使用。](tag:dt,dt_test,hcso_dt)
     * @param {Array<string>} [ipVersion] 后端服务器组支持的IP版本。  支持多值查询，查询条件格式：*ip_version&#x3D;xxx&amp;ip_version&#x3D;xxx*。
     * @param {Array<string>} [memberAddress] 后端服务器的IP地址。仅用于查询条件，不作为响应参数字段。  支持多值查询，查询条件格式：*member_address&#x3D;xxx&amp;member_address&#x3D;xxx*。
     * @param {Array<string>} [memberDeviceId] 后端服务器对应的弹性云服务器的ID。仅用于查询条件，不作为响应参数字段。  支持多值查询，查询条件格式：*member_device_id&#x3D;xxx&amp;member_device_id&#x3D;xxx*。
     * @param {boolean} [memberDeletionProtectionEnable] 是否开启删除保护，false不开启，true开启，不传查询全部。 [不支持该字段，请勿使用。](tag:hws_eu,g42,hk_g42)  [荷兰region不支持该字段，请勿使用。](tag:dt,dt_test)
     * @param {Array<string>} [listenerId] 关联的监听器ID，包括通过l7policy关联的。  支持多值查询，查询条件格式：*listener_id&#x3D;xxx&amp;listener_id&#x3D;xxx*。
     * @param {Array<string>} [memberInstanceId] 后端服务器ID。仅用于查询条件，不作为响应参数字段。  支持多值查询，查询条件格式：*member_instance_id&#x3D;xxx&amp;member_instance_id&#x3D;xxx*。
     * @param {Array<string>} [vpcId] 后端服务器组关联的虚拟私有云的ID。
     * @param {Array<string>} [type] 后端服务器组的类型。  取值： - instance：允许任意类型的后端，type指定为该类型时，vpc_id是必选字段。 - ip：只能添加跨VPC后端，type指定为该类型时，vpc_id不允许指定。 - 空字符串（\&quot;\&quot;）：允许任意类型的后端
     * @param {Array<string>} [protectionStatus] 修改保护状态, 取值： - nonProtection: 不保护，默认值为nonProtection - consoleProtection: 控制台修改保护
     * @param {boolean} [connectionDrain] 查询是否开启延迟注销的功能，查询条件格式：*connection_drain&#x3D;true或者*connection_drain&#x3D;false
     * @param {string} [poolHealth] 查询是否开启后端全下线转发功能，查询条件格式：*pool_health&#x3D;minimum_healthy_member_count&#x3D;0或者*pool_health&#x3D;minimum_healthy_member_count&#x3D;1
     * @param {boolean} [anyPortEnable] 后端是否开启端口透传。开启后，后端服务器端口与前端监听器端口保持一致。取值：false不开启，true开启。
     * @param {string} [publicBorderGroup] 可用区组
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
     * 查询指定项目中负载均衡相关的各类资源的当前配额和已使用配额信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询配额使用详情
     * @param {Array<string>} [quotaKey] 资源类型。  取值： loadbalancer、listener、ipgroup、pool、member、healthmonitor、l7policy、certificate、security_policy、listeners_per_loadbalancer、listeners_per_pool、members_per_pool、condition_per_policy、ipgroup_bindings、ipgroup_max_length。  支持多值查询，查询条件格式：quota_key&#x3D;xxx&amp;quota_key&#x3D;xxx。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listQuotaDetails(listQuotaDetailsRequest?: ListQuotaDetailsRequest): Promise<ListQuotaDetailsResponse> {
        const options = ParamCreater().listQuotaDetails(listQuotaDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询自定义安全策略列表。[荷兰region不支持自定义安全策略功能，请勿使用。](tag:dt,dt_test)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询自定义安全策略列表
     * @param {string} [marker] 上一页最后一条记录的ID。  使用说明： - 必须与limit一起使用。 - 不指定时表示查询第一页。 - 该字段不允许为空或无效的ID。
     * @param {number} [limit] 参数解释：每页返回的个数。  取值范围：0-2000  默认取值：2000
     * @param {boolean} [pageReverse] 是否反向查询。  取值： - true：查询上一页。 - false：查询下一页，默认。  使用说明： - 必须与limit一起使用。 - 当page_reverse&#x3D;true时，若要查询上一页，marker取值为当前页返回值的previous_marker。
     * @param {Array<string>} [id] 自定义安全策略的ID。  支持多值查询，查询条件格式：*id&#x3D;xxx&amp;id&#x3D;xxx*。
     * @param {Array<string>} [name] 自定义安全策略的名称。  支持多值查询，查询条件格式：*name&#x3D;xxx&amp;name&#x3D;xxx*。
     * @param {Array<string>} [description] 自定义安全策略的描述信息。  支持多值查询，查询条件格式：*description&#x3D;xxx&amp;description&#x3D;xxx*。
     * @param {Array<string>} [protocols] 空格分隔的自定义安全策略的TLS协议。  支持多值查询，查询条件格式：*protocols&#x3D;xxx&amp;protocols&#x3D;xxx*。
     * @param {Array<string>} [ciphers] 冒号分隔的自定义安全策略的加密套件。  支持多值查询，查询条件格式：*ciphers&#x3D;xxx&amp;ciphers&#x3D;xxx*。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSecurityPolicies(listSecurityPoliciesRequest?: ListSecurityPoliciesRequest): Promise<ListSecurityPoliciesResponse> {
        const options = ParamCreater().listSecurityPolicies(listSecurityPoliciesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询系统安全策略列表。
     * 
     * 系统安全策略为预置的所有租户通用的安全策略，租户不可新增或修改。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询系统安全策略列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSystemSecurityPolicies(listSystemSecurityPoliciesRequest?: ListSystemSecurityPoliciesRequest): Promise<ListSystemSecurityPoliciesResponse> {
        const options = ParamCreater().listSystemSecurityPolicies();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询证书详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询证书详情
     * @param {string} certificateId 证书ID。
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
     * 查询证书私钥回显开关当前的状态，开启或关闭。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询证书私钥字段回显开关
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCertificatePrivateKeyEcho(showCertificatePrivateKeyEchoRequest?: ShowCertificatePrivateKeyEchoRequest): Promise<ShowCertificatePrivateKeyEchoResponse> {
        const options = ParamCreater().showCertificatePrivateKeyEcho();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询规格的详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询规格详情
     * @param {string} flavorId 参数解释：规格ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFlavor(showFlavorRequest?: ShowFlavorRequest): Promise<ShowFlavorResponse> {
        const options = ParamCreater().showFlavor(showFlavorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询健康检查详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询健康检查详情
     * @param {string} healthmonitorId 健康检查ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showHealthMonitor(showHealthMonitorRequest?: ShowHealthMonitorRequest): Promise<ShowHealthMonitorResponse> {
        const options = ParamCreater().showHealthMonitor(showHealthMonitorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询七层转发策略详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询转发策略详情
     * @param {string} l7policyId 参数解释：转发策略ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showL7Policy(showL7PolicyRequest?: ShowL7PolicyRequest): Promise<ShowL7PolicyResponse> {
        const options = ParamCreater().showL7Policy(showL7PolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询七层转发规则详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询转发规则详情
     * @param {string} l7policyId 7层转发策略。
     * @param {string} l7ruleId 7层转发规则。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showL7Rule(showL7RuleRequest?: ShowL7RuleRequest): Promise<ShowL7RuleResponse> {
        const options = ParamCreater().showL7Rule(showL7RuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 监听器详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询监听器详情
     * @param {string} listenerId 监听器ID。
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
     * 查询负载均衡器详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询负载均衡器详情
     * @param {string} loadbalancerId 负载均衡器ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showLoadBalancer(showLoadBalancerRequest?: ShowLoadBalancerRequest): Promise<ShowLoadBalancerResponse> {
        const options = ParamCreater().showLoadBalancer(showLoadBalancerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询负载均衡器状态树，包括负载均衡器及其关联的子资源的状态信息。
     * 注意：该接口中的operating_status不一定与对应资源的operating_status相同。
     * 如：当Member的admin_state_up&#x3D;false且operating_status&#x3D;OFFLINE时，
     * 该接口返回member的operating_status&#x3D;DISABLE。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询负载均衡器状态树
     * @param {string} loadbalancerId 负载均衡器ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showLoadBalancerStatus(showLoadBalancerStatusRequest?: ShowLoadBalancerStatusRequest): Promise<ShowLoadBalancerStatusResponse> {
        const options = ParamCreater().showLoadBalancerStatus(showLoadBalancerStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 云日志详情。[荷兰region不支持云日志功能，请勿使用。](tag:dt,dt_test)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云日志详情
     * @param {string} logtankId 云日志ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showLogtank(showLogtankRequest?: ShowLogtankRequest): Promise<ShowLogtankResponse> {
        const options = ParamCreater().showLogtank(showLogtankRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 主备后端服务器组详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询主备后端服务器组详情
     * @param {string} poolId 参数解释：后端服务器组ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMasterSlavePool(showMasterSlavePoolRequest?: ShowMasterSlavePoolRequest): Promise<ShowMasterSlavePoolResponse> {
        const options = ParamCreater().showMasterSlavePool(showMasterSlavePoolRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 后端服务器详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询后端服务器详情
     * @param {string} poolId 参数解释：后端服务器组ID。
     * @param {string} memberId 后端服务器ID。 &gt;说明： 此处并非ECS服务器的ID，而是ELB为绑定的后端服务器自动生成的member ID。
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
     * 后端服务器组详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询后端服务器组详情
     * @param {string} poolId 参数解释：后端服务器组ID。
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
     * 查询指定项目中负载均衡相关的各类资源的当前配额。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询配额详情
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showQuota(showQuotaRequest?: ShowQuotaRequest): Promise<ShowQuotaResponse> {
        const options = ParamCreater().showQuota();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询自定义安全策略详情。[荷兰region不支持自定义安全策略功能，请勿使用。](tag:dt,dt_test)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询自定义安全策略详情
     * @param {string} securityPolicyId 自定义安全策略ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSecurityPolicy(showSecurityPolicyRequest?: ShowSecurityPolicyRequest): Promise<ShowSecurityPolicyResponse> {
        const options = ParamCreater().showSecurityPolicy(showSecurityPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新证书。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新证书
     * @param {string} certificateId 证书ID。
     * @param {UpdateCertificateRequestBody} updateCertificateRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateCertificate(updateCertificateRequest?: UpdateCertificateRequest): Promise<UpdateCertificateResponse> {
        const options = ParamCreater().updateCertificate(updateCertificateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新健康检查。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新健康检查
     * @param {string} healthmonitorId 健康检查ID
     * @param {UpdateHealthMonitorRequestBody} updateHealthMonitorRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateHealthMonitor(updateHealthMonitorRequest?: UpdateHealthMonitorRequest): Promise<UpdateHealthMonitorResponse> {
        const options = ParamCreater().updateHealthMonitor(updateHealthMonitorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新七层转发策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新转发策略
     * @param {string} l7policyId 参数解释：转发策略ID。
     * @param {UpdateL7PolicyRequestBody} updateL7PolicyRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateL7Policy(updateL7PolicyRequest?: UpdateL7PolicyRequest): Promise<UpdateL7PolicyResponse> {
        const options = ParamCreater().updateL7Policy(updateL7PolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新七层转发规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新转发规则
     * @param {string} l7policyId 策略ID。
     * @param {string} l7ruleId 规则ID。
     * @param {UpdateL7RuleRequestBody} updateL7RuleRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateL7Rule(updateL7RuleRequest?: UpdateL7RuleRequest): Promise<UpdateL7RuleResponse> {
        const options = ParamCreater().updateL7Rule(updateL7RuleRequest);

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
     * @param {string} listenerId 监听器ID。
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
     * @param {string} loadbalancerId 负载均衡器ID。
     * @param {UpdateLoadBalancerRequestBody} updateLoadBalancerRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateLoadBalancer(updateLoadBalancerRequest?: UpdateLoadBalancerRequest): Promise<UpdateLoadBalancerResponse> {
        const options = ParamCreater().updateLoadBalancer(updateLoadBalancerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新云日志。[荷兰region不支持云日志功能，请勿使用。](tag:dt,dt_test)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新云日志
     * @param {string} logtankId 云日志ID。
     * @param {UpdateLogtankRequestBody} updateLogtankRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateLogtank(updateLogtankRequest?: UpdateLogtankRequest): Promise<UpdateLogtankResponse> {
        const options = ParamCreater().updateLogtank(updateLogtankRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新后端服务器。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新后端服务器
     * @param {string} memberId 后端服务器ID。 &gt;说明： 此处并非ECS服务器的ID，而是ELB为绑定的后端服务器自动生成的member ID。
     * @param {string} poolId 参数解释：后端服务器组ID。
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
     * 更新后端服务器组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新后端服务器组
     * @param {string} poolId 参数解释：后端服务器组ID。
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
     * 更新自定义安全策略。[荷兰region不支持自定义安全策略功能，请勿使用。](tag:dt,dt_test)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新自定义安全策略
     * @param {string} securityPolicyId 自定义安全策略的ID。
     * @param {UpdateSecurityPolicyRequestBody} updateSecurityPolicyRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSecurityPolicy(updateSecurityPolicyRequest?: UpdateSecurityPolicyRequest): Promise<UpdateSecurityPolicyResponse> {
        const options = ParamCreater().updateSecurityPolicy(updateSecurityPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 返回ELB当前所有可用的API版本。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询API版本列表信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApiVersions(listApiVersionsRequest?: ListApiVersionsRequest): Promise<ListApiVersionsResponse> {
        const options = ParamCreater().listApiVersions();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除IP地址组的IP列表信息。[荷兰region不支持该API](tag:dt,dt_test)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除IP地址组的IP列表项
     * @param {string} ipgroupId 参数解释：IP地址组ID。
     * @param {BatchDeleteIpListRequestBody} [batchDeleteIpListRequestBody] This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteIpList(batchDeleteIpListRequest?: BatchDeleteIpListRequest): Promise<BatchDeleteIpListResponse> {
        const options = ParamCreater().batchDeleteIpList(batchDeleteIpListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 计算以下几种场景的预占用IP数量：
     * 
     * - 计算创建LB的第一个七层监听器后总占用IP数量：
     * 传入loadbalancer_id、l7_flavor_id为空、ip_target_enable不传或为false。
     * 
     * - 计算LB规格变更或开启跨VPC后总占用IP数量：
     * 传入参数loadbalancer_id，及l7_flavor_id不为空或ip_target_enable为true。
     * 
     * - 计算创建LB所需IP数量：传入参数availability_zone_id，
     * 及可选参数l7_flavor_id、ip_target_enable、ip_version，不能传loadbalancer_id。
     * 
     * 说明：
     * - 计算出来的预占IP数大于等于最终实际占用的IP数。
     * - 总占用IP数量，即整个LB所占用的IP数量。
     * 
     * [不支持传入l7_flavor_id](tag:hcso,hk_vdf,fcs,fcs_vm,mix,hcso_g42,hcso_g42_b)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 计算预占IP数
     * @param {string} [l7FlavorId] 负载均衡器七层规格的ID。传入该字段表示计算创建该规格的LB，或变更LB的原七层规格到该规格所需要的预占IP。  适用场景：创建负LB，变更LB规格。  [不支持传入l7_flavor_id](tag:hcso,hk_vdf,fcs,fcs_vm,mix,hcso_g42,hcso_g42_b)
     * @param {boolean} [ipTargetEnable] 是否开启跨VPC转发。  取值true表示计算创建或变更为开启跨VPC转发的LB的预占IP。  取值false表示计算创建或变更为不开启跨VPC转发的LB的预占IP。不传等价false。  适用场景：创建LB，变更LB规格。  [荷兰region不支持该字段，请勿使用。](tag:dt,dt_test)
     * @param {number} [ipVersion] 负载均衡器IP地址类型，取值4，6 。  取值4表示计算创建支持IPv4地址的LB的预占IP。  取值6表示计算创建支持IPv6地址的LB的预占IP。  适用场景：创建LB。  [不支持IPv6，请勿设置为6。](tag:dt,dt_test)
     * @param {string} [loadbalancerId] 负载均衡器ID。计算LB规格变更或创建LB中的第一个七层监听器的预占IP。  适用场景：变更LB规格，创建LB中的第一个七层监听器。
     * @param {Array<string>} [availabilityZoneId] 计算创建AZ列表为availability_zone_id的负载局衡器实例的预占IP。  适用场景：创建LB。  使用说明：传入loadbalancer_id时，该参数无效。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public countPreoccupyIpNum(countPreoccupyIpNumRequest?: CountPreoccupyIpNumRequest): Promise<CountPreoccupyIpNumResponse> {
        const options = ParamCreater().countPreoccupyIpNum(countPreoccupyIpNumRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建IP地址组。输入的ip可为ip地址或者CIDR子网，支持IPV4和IPV6。
     * 
     * 需要注意0.0.0.0与0.0.0.0/32视为重复，0:0:0:0:0:0:0:1与::1与::1/128视为重复，只会保存其中一个。
     * 
     * [荷兰region不支持IP地址组功能，请勿使用。](tag:dt,dt_test)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建IP地址组
     * @param {CreateIpGroupRequestBody} createIpGroupRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createIpGroup(createIpGroupRequest?: CreateIpGroupRequest): Promise<CreateIpGroupResponse> {
        const options = ParamCreater().createIpGroup(createIpGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除ip地址组。[荷兰region不支持IP地址组功能，请勿使用。](tag:dt,dt_test)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除IP地址组
     * @param {string} ipgroupId 参数解释：IP地址组的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteIpGroup(deleteIpGroupRequest?: DeleteIpGroupRequest): Promise<DeleteIpGroupResponse> {
        const options = ParamCreater().deleteIpGroup(deleteIpGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询IP地址组列表。[荷兰region不支持IP地址组功能，请勿使用。](tag:dt,dt_test)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询IP地址组列表
     * @param {string} [marker] 参数解释：上一页最后一条记录的ID。  使用说明： - 必须与limit一起使用。 - 不指定时表示查询第一页。 - 该字段不允许为空或无效的ID。
     * @param {number} [limit] 参数解释：每页返回的个数。  取值范围：0-2000  默认取值：2000
     * @param {boolean} [pageReverse] 参数解释：是否反向查询。  取值： - true：查询上一页。 - false：查询下一页，默认。  使用说明： - 必须与limit一起使用。 - 当page_reverse&#x3D;true时，若要查询上一页，marker取值为当前页返回值的previous_marker。
     * @param {Array<string>} [id] 参数解释：IP地址组的ID。
     * @param {Array<string>} [name] 参数解释：IP地址组的名称。
     * @param {Array<string>} [description] 参数解释：IP地址组的描述信息。
     * @param {Array<string>} [ipList] 参数解释：IP地址，多个用逗号分隔。
     * @param {Array<string>} [enterpriseProjectId] 参数解释：企业项目ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listIpGroups(listIpGroupsRequest?: ListIpGroupsRequest): Promise<ListIpGroupsResponse> {
        const options = ParamCreater().listIpGroups(listIpGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取IP地址组详情。[荷兰region不支持IP地址组功能，请勿使用。](tag:dt,dt_test)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询IP地址组详情
     * @param {string} ipgroupId 参数解释：IP地址组ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showIpGroup(showIpGroupRequest?: ShowIpGroupRequest): Promise<ShowIpGroupResponse> {
        const options = ParamCreater().showIpGroup(showIpGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新IP地址组，只支持全量更新IP。即IP地址组中的ip_list将被全量覆盖，不在请求参数中的IP地址将被移除。
     * 输入的ip可为ip地址或者CIDR子网，支持IPV4和IPV6。
     * 
     * 需要注意0.0.0.0与0.0.0.0/32视为重复，0:0:0:0:0:0:0:1与::1与::1/128视为重复，只会保存其中一个。
     * 
     * [荷兰region不支持IP地址组功能，请勿使用。](tag:dt,dt_test)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新IP地址组
     * @param {string} ipgroupId 参数解释：待更新的IP地址组的ID。
     * @param {UpdateIpGroupRequestBody} updateIpGroupRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateIpGroup(updateIpGroupRequest?: UpdateIpGroupRequest): Promise<UpdateIpGroupResponse> {
        const options = ParamCreater().updateIpGroup(updateIpGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加新的IP地址到IP地址组的IP列表信息，或更新已有IP地址的描述。[荷兰region不支持该API](tag:dt,dt_test)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新IP地址组的IP列表项
     * @param {string} ipgroupId 参数解释：IP地址组ID。
     * @param {UpdateIpListRequestBody} [updateIpListRequestBody] This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateIpList(updateIpListRequest?: UpdateIpListRequest): Promise<UpdateIpListResponse> {
        const options = ParamCreater().updateIpList(updateIpListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 给负载均衡器新增可用区。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchAddAvailableZones(batchAddAvailableZonesRequest?: BatchAddAvailableZonesRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/elb/loadbalancers/{loadbalancer_id}/availability-zone/batch-add",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let loadbalancerId;

            if (batchAddAvailableZonesRequest !== null && batchAddAvailableZonesRequest !== undefined) {
                if (batchAddAvailableZonesRequest instanceof BatchAddAvailableZonesRequest) {
                    loadbalancerId = batchAddAvailableZonesRequest.loadbalancerId;
                    body = batchAddAvailableZonesRequest.body
                } else {
                    loadbalancerId = batchAddAvailableZonesRequest['loadbalancer_id'];
                    body = batchAddAvailableZonesRequest['body'];
                }
            }

        
            if (loadbalancerId === null || loadbalancerId === undefined) {
            throw new RequiredError('loadbalancerId','Required parameter loadbalancerId was null or undefined when calling batchAddAvailableZones.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'loadbalancer_id': loadbalancerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在指定pool下批量创建后端服务器。一次最多创建200个。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateMembers(batchCreateMembersRequest?: BatchCreateMembersRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/elb/pools/{pool_id}/members/batch-add",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let poolId;

            if (batchCreateMembersRequest !== null && batchCreateMembersRequest !== undefined) {
                if (batchCreateMembersRequest instanceof BatchCreateMembersRequest) {
                    poolId = batchCreateMembersRequest.poolId;
                    body = batchCreateMembersRequest.body
                } else {
                    poolId = batchCreateMembersRequest['pool_id'];
                    body = batchCreateMembersRequest['body'];
                }
            }

        
            if (poolId === null || poolId === undefined) {
            throw new RequiredError('poolId','Required parameter poolId was null or undefined when calling batchCreateMembers.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'pool_id': poolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在指定pool下批量删除后端服务器。一次最多添加200个。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteMembers(batchDeleteMembersRequest?: BatchDeleteMembersRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/elb/pools/{pool_id}/members/batch-delete",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let poolId;

            if (batchDeleteMembersRequest !== null && batchDeleteMembersRequest !== undefined) {
                if (batchDeleteMembersRequest instanceof BatchDeleteMembersRequest) {
                    poolId = batchDeleteMembersRequest.poolId;
                    body = batchDeleteMembersRequest.body
                } else {
                    poolId = batchDeleteMembersRequest['pool_id'];
                    body = batchDeleteMembersRequest['body'];
                }
            }

        
            if (poolId === null || poolId === undefined) {
            throw new RequiredError('poolId','Required parameter poolId was null or undefined when calling batchDeleteMembers.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'pool_id': poolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 移除负载均衡器的可用区。
         * &gt; 移除可用区可能导致已有链接断开，请谨慎操作。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchRemoveAvailableZones(batchRemoveAvailableZonesRequest?: BatchRemoveAvailableZonesRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/elb/loadbalancers/{loadbalancer_id}/availability-zone/batch-remove",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let loadbalancerId;

            if (batchRemoveAvailableZonesRequest !== null && batchRemoveAvailableZonesRequest !== undefined) {
                if (batchRemoveAvailableZonesRequest instanceof BatchRemoveAvailableZonesRequest) {
                    loadbalancerId = batchRemoveAvailableZonesRequest.loadbalancerId;
                    body = batchRemoveAvailableZonesRequest.body
                } else {
                    loadbalancerId = batchRemoveAvailableZonesRequest['loadbalancer_id'];
                    body = batchRemoveAvailableZonesRequest['body'];
                }
            }

        
            if (loadbalancerId === null || loadbalancerId === undefined) {
            throw new RequiredError('loadbalancerId','Required parameter loadbalancerId was null or undefined when calling batchRemoveAvailableZones.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'loadbalancer_id': loadbalancerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在指定pool下批量更新后端服务器。一次最多添加200个。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUpdateMembers(batchUpdateMembersRequest?: BatchUpdateMembersRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/elb/pools/{pool_id}/members/batch-update",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let poolId;

            if (batchUpdateMembersRequest !== null && batchUpdateMembersRequest !== undefined) {
                if (batchUpdateMembersRequest instanceof BatchUpdateMembersRequest) {
                    poolId = batchUpdateMembersRequest.poolId;
                    body = batchUpdateMembersRequest.body
                } else {
                    poolId = batchUpdateMembersRequest['pool_id'];
                    body = batchUpdateMembersRequest['body'];
                }
            }

        
            if (poolId === null || poolId === undefined) {
            throw new RequiredError('poolId','Required parameter poolId was null or undefined when calling batchUpdateMembers.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'pool_id': poolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量更新转发策略的优先级。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUpdatePoliciesPriority(batchUpdatePoliciesPriorityRequest?: BatchUpdatePoliciesPriorityRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/elb/l7policies/batch-update-priority",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchUpdatePoliciesPriorityRequest !== null && batchUpdatePoliciesPriorityRequest !== undefined) {
                if (batchUpdatePoliciesPriorityRequest instanceof BatchUpdatePoliciesPriorityRequest) {
                    body = batchUpdatePoliciesPriorityRequest.body
                } else {
                    body = batchUpdatePoliciesPriorityRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 负载均衡器计费模式变更，当前支持的计费模式变更为：
         * 1. 按需计费转包周期计费；
         * 2. 按需按规格计费转按需按使用量计费；
         * 3. 按需按使用量计费转按需按规格计费；
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeLoadbalancerChargeMode(changeLoadbalancerChargeModeRequest?: ChangeLoadbalancerChargeModeRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/elb/loadbalancers/change-charge-mode",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (changeLoadbalancerChargeModeRequest !== null && changeLoadbalancerChargeModeRequest !== undefined) {
                if (changeLoadbalancerChargeModeRequest instanceof ChangeLoadbalancerChargeModeRequest) {
                    body = changeLoadbalancerChargeModeRequest.body
                } else {
                    body = changeLoadbalancerChargeModeRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建证书。用于HTTPS协议监听器。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCertificate(createCertificateRequest?: CreateCertificateRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/elb/certificates",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

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
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 开启或关闭证书私钥字段回显开关。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCertificatePrivateKeyEcho(createCertificatePrivateKeyEchoRequest?: CreateCertificatePrivateKeyEchoRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/elb/certificates/settings/private-key-echo",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createCertificatePrivateKeyEchoRequest !== null && createCertificatePrivateKeyEchoRequest !== undefined) {
                if (createCertificatePrivateKeyEchoRequest instanceof CreateCertificatePrivateKeyEchoRequest) {
                    body = createCertificatePrivateKeyEchoRequest.body
                } else {
                    body = createCertificatePrivateKeyEchoRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建健康检查。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createHealthMonitor(createHealthMonitorRequest?: CreateHealthMonitorRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/elb/healthmonitors",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createHealthMonitorRequest !== null && createHealthMonitorRequest !== undefined) {
                if (createHealthMonitorRequest instanceof CreateHealthMonitorRequest) {
                    body = createHealthMonitorRequest.body
                } else {
                    body = createHealthMonitorRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建七层转发策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createL7Policy(createL7PolicyRequest?: CreateL7PolicyRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/elb/l7policies",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createL7PolicyRequest !== null && createL7PolicyRequest !== undefined) {
                if (createL7PolicyRequest instanceof CreateL7PolicyRequest) {
                    body = createL7PolicyRequest.body
                } else {
                    body = createL7PolicyRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建七层转发规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createL7Rule(createL7RuleRequest?: CreateL7RuleRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/elb/l7policies/{l7policy_id}/rules",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let l7policyId;

            if (createL7RuleRequest !== null && createL7RuleRequest !== undefined) {
                if (createL7RuleRequest instanceof CreateL7RuleRequest) {
                    l7policyId = createL7RuleRequest.l7policyId;
                    body = createL7RuleRequest.body
                } else {
                    l7policyId = createL7RuleRequest['l7policy_id'];
                    body = createL7RuleRequest['body'];
                }
            }

        
            if (l7policyId === null || l7policyId === undefined) {
            throw new RequiredError('l7policyId','Required parameter l7policyId was null or undefined when calling createL7Rule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'l7policy_id': l7policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建监听器。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createListener(createListenerRequest?: CreateListenerRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/elb/listeners",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

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
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建独享型负载均衡器，包括按需及包周期计费负载均衡器。
         * 1. 若要创建内网IPv4负载均衡器，则需要传入vip_subnet_cidr_id。
         * 2. 若要创建公网IPv4负载均衡器，则需要传入publicip，以及传入vpc_id和vip_subnet_cidr_id这两个参数中的一个。
         * 3. 若要绑定有已有公网IPv4地址，则需要传入publicip_ids，以及传入vpc_id和vip_subnet_cidr_id这两个参数中的一个。
         * 4. 若要创建内网双栈负载均衡器，则需要传入ipv6_vip_virsubnet_id。
         * 5. 若要创建公网双栈负载均衡器，则需要传入ipv6_vip_virsubnet_id和ipv6_bandwidth。
         * 6. 若要创建网络型负载均衡器，则需要传入l4_flavor_id（网络型规格ID）；若要创建应用型负载均衡器，则需要传入l7_flavor_id（应用型规格ID）；若要创建网络型+应用型负载均衡器，则需要传入l4_flavor_id和l7_flavor_id。
         * 7. 若要创建包周期负载均衡器，则需要传入prepaid_options，否则创建按需计费负载均衡器。
         * 8. 按需计费分为固定规格计费和弹性规格计费，根据创建时所选规格的类型决定计费方式。具体规格说明见创建LB请求参数l4_flavor_id和l7_flavor_id。
         * [9.若要创建gateway类型的负载均衡器，则需要：
         *    - 指定loadbalancer_type&#x3D;\&quot;gateway\&quot;，且不支持指定vip_address，ipv6_vip_address。
         *    - vip_subnet_cidr_id和ipv6_subnet_cidr_id两者不能都为空，如果两者都传入，则必须属于同一子网。
         *    - 不支持创建公网gateway类型LB。
         *    - 如果要指定规格，则从请求参数gw_flavor_id传入。](tag:hws_eu)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createLoadBalancer(createLoadBalancerRequest?: CreateLoadBalancerRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/elb/loadbalancers",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createLoadBalancerRequest !== null && createLoadBalancerRequest !== undefined) {
                if (createLoadBalancerRequest instanceof CreateLoadBalancerRequest) {
                    body = createLoadBalancerRequest.body
                } else {
                    body = createLoadBalancerRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建云日志。[荷兰region不支持云日志功能，请勿使用。](tag:dt,dt_test)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createLogtank(createLogtankRequest?: CreateLogtankRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/elb/logtanks",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createLogtankRequest !== null && createLogtankRequest !== undefined) {
                if (createLogtankRequest instanceof CreateLogtankRequest) {
                    body = createLogtankRequest.body
                } else {
                    body = createLogtankRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建主备后端服务器组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createMasterSlavePool(createMasterSlavePoolRequest?: CreateMasterSlavePoolRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/elb/master-slave-pools",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createMasterSlavePoolRequest !== null && createMasterSlavePoolRequest !== undefined) {
                if (createMasterSlavePoolRequest instanceof CreateMasterSlavePoolRequest) {
                    body = createMasterSlavePoolRequest.body
                } else {
                    body = createMasterSlavePoolRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建后端服务器。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createMember(createMemberRequest?: CreateMemberRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/elb/pools/{pool_id}/members",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
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
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'pool_id': poolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建后端服务器组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPool(createPoolRequest?: CreatePoolRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/elb/pools",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

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
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建自定义安全策略。用于在创建HTTPS监听器时，请求参数中指定security_policy_id来设置监听器的自定义安全策略。
         * 
         * [荷兰region不支持自定义安全策略功能，请勿使用。](tag:dt,dt_test)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSecurityPolicy(createSecurityPolicyRequest?: CreateSecurityPolicyRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/elb/security-policies",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createSecurityPolicyRequest !== null && createSecurityPolicyRequest !== undefined) {
                if (createSecurityPolicyRequest instanceof CreateSecurityPolicyRequest) {
                    body = createSecurityPolicyRequest.body
                } else {
                    body = createSecurityPolicyRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除证书。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCertificate(deleteCertificateRequest?: DeleteCertificateRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/elb/certificates/{certificate_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * 删除健康检查。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteHealthMonitor(deleteHealthMonitorRequest?: DeleteHealthMonitorRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/elb/healthmonitors/{healthmonitor_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let healthmonitorId;

            if (deleteHealthMonitorRequest !== null && deleteHealthMonitorRequest !== undefined) {
                if (deleteHealthMonitorRequest instanceof DeleteHealthMonitorRequest) {
                    healthmonitorId = deleteHealthMonitorRequest.healthmonitorId;
                } else {
                    healthmonitorId = deleteHealthMonitorRequest['healthmonitor_id'];
                }
            }

        
            if (healthmonitorId === null || healthmonitorId === undefined) {
            throw new RequiredError('healthmonitorId','Required parameter healthmonitorId was null or undefined when calling deleteHealthMonitor.');
            }

            options.pathParams = { 'healthmonitor_id': healthmonitorId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除七层转发策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteL7Policy(deleteL7PolicyRequest?: DeleteL7PolicyRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/elb/l7policies/{l7policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let l7policyId;

            if (deleteL7PolicyRequest !== null && deleteL7PolicyRequest !== undefined) {
                if (deleteL7PolicyRequest instanceof DeleteL7PolicyRequest) {
                    l7policyId = deleteL7PolicyRequest.l7policyId;
                } else {
                    l7policyId = deleteL7PolicyRequest['l7policy_id'];
                }
            }

        
            if (l7policyId === null || l7policyId === undefined) {
            throw new RequiredError('l7policyId','Required parameter l7policyId was null or undefined when calling deleteL7Policy.');
            }

            options.pathParams = { 'l7policy_id': l7policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除七层转发规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteL7Rule(deleteL7RuleRequest?: DeleteL7RuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/elb/l7policies/{l7policy_id}/rules/{l7rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let l7policyId;
            
            let l7ruleId;

            if (deleteL7RuleRequest !== null && deleteL7RuleRequest !== undefined) {
                if (deleteL7RuleRequest instanceof DeleteL7RuleRequest) {
                    l7policyId = deleteL7RuleRequest.l7policyId;
                    l7ruleId = deleteL7RuleRequest.l7ruleId;
                } else {
                    l7policyId = deleteL7RuleRequest['l7policy_id'];
                    l7ruleId = deleteL7RuleRequest['l7rule_id'];
                }
            }

        
            if (l7policyId === null || l7policyId === undefined) {
            throw new RequiredError('l7policyId','Required parameter l7policyId was null or undefined when calling deleteL7Rule.');
            }
            if (l7ruleId === null || l7ruleId === undefined) {
            throw new RequiredError('l7ruleId','Required parameter l7ruleId was null or undefined when calling deleteL7Rule.');
            }

            options.pathParams = { 'l7policy_id': l7policyId,'l7rule_id': l7ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除监听器。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteListener(deleteListenerRequest?: DeleteListenerRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/elb/listeners/{listener_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * 删除监听器且级联删除其下子资源（删除监听器、转发策略等，解绑后端服务器组）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteListenerForce(deleteListenerForceRequest?: DeleteListenerForceRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/elb/listeners/{listener_id}/force",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let listenerId;

            if (deleteListenerForceRequest !== null && deleteListenerForceRequest !== undefined) {
                if (deleteListenerForceRequest instanceof DeleteListenerForceRequest) {
                    listenerId = deleteListenerForceRequest.listenerId;
                } else {
                    listenerId = deleteListenerForceRequest['listener_id'];
                }
            }

        
            if (listenerId === null || listenerId === undefined) {
            throw new RequiredError('listenerId','Required parameter listenerId was null or undefined when calling deleteListenerForce.');
            }

            options.pathParams = { 'listener_id': listenerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除负载均衡器。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteLoadBalancer(deleteLoadBalancerRequest?: DeleteLoadBalancerRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/elb/loadbalancers/{loadbalancer_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let loadbalancerId;

            if (deleteLoadBalancerRequest !== null && deleteLoadBalancerRequest !== undefined) {
                if (deleteLoadBalancerRequest instanceof DeleteLoadBalancerRequest) {
                    loadbalancerId = deleteLoadBalancerRequest.loadbalancerId;
                } else {
                    loadbalancerId = deleteLoadBalancerRequest['loadbalancer_id'];
                }
            }

        
            if (loadbalancerId === null || loadbalancerId === undefined) {
            throw new RequiredError('loadbalancerId','Required parameter loadbalancerId was null or undefined when calling deleteLoadBalancer.');
            }

            options.pathParams = { 'loadbalancer_id': loadbalancerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除负载均衡器且级联删除其下子资源（删除负载均衡器及其绑定的监听器、后端服务器组、后端服务器等一系列资源）
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteLoadBalancerForce(deleteLoadBalancerForceRequest?: DeleteLoadBalancerForceRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/elb/loadbalancers/{loadbalancer_id}/force-elb",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let loadbalancerId;

            if (deleteLoadBalancerForceRequest !== null && deleteLoadBalancerForceRequest !== undefined) {
                if (deleteLoadBalancerForceRequest instanceof DeleteLoadBalancerForceRequest) {
                    loadbalancerId = deleteLoadBalancerForceRequest.loadbalancerId;
                } else {
                    loadbalancerId = deleteLoadBalancerForceRequest['loadbalancer_id'];
                }
            }

        
            if (loadbalancerId === null || loadbalancerId === undefined) {
            throw new RequiredError('loadbalancerId','Required parameter loadbalancerId was null or undefined when calling deleteLoadBalancerForce.');
            }

            options.pathParams = { 'loadbalancer_id': loadbalancerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除云日志。[荷兰region不支持云日志功能，请勿使用。](tag:dt,dt_test)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteLogtank(deleteLogtankRequest?: DeleteLogtankRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/elb/logtanks/{logtank_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let logtankId;

            if (deleteLogtankRequest !== null && deleteLogtankRequest !== undefined) {
                if (deleteLogtankRequest instanceof DeleteLogtankRequest) {
                    logtankId = deleteLogtankRequest.logtankId;
                } else {
                    logtankId = deleteLogtankRequest['logtank_id'];
                }
            }

        
            if (logtankId === null || logtankId === undefined) {
            throw new RequiredError('logtankId','Required parameter logtankId was null or undefined when calling deleteLogtank.');
            }

            options.pathParams = { 'logtank_id': logtankId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除主备后端服务器组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteMasterSlavePool(deleteMasterSlavePoolRequest?: DeleteMasterSlavePoolRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/elb/master-slave-pools/{pool_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let poolId;

            if (deleteMasterSlavePoolRequest !== null && deleteMasterSlavePoolRequest !== undefined) {
                if (deleteMasterSlavePoolRequest instanceof DeleteMasterSlavePoolRequest) {
                    poolId = deleteMasterSlavePoolRequest.poolId;
                } else {
                    poolId = deleteMasterSlavePoolRequest['pool_id'];
                }
            }

        
            if (poolId === null || poolId === undefined) {
            throw new RequiredError('poolId','Required parameter poolId was null or undefined when calling deleteMasterSlavePool.');
            }

            options.pathParams = { 'pool_id': poolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除后端服务器。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteMember(deleteMemberRequest?: DeleteMemberRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/elb/pools/{pool_id}/members/{member_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * 删除后端服务器组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePool(deletePoolRequest?: DeletePoolRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/elb/pools/{pool_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * 删除自定义安全策略。[荷兰region不支持自定义安全策略功能，请勿使用。](tag:dt,dt_test)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSecurityPolicy(deleteSecurityPolicyRequest?: DeleteSecurityPolicyRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/elb/security-policies/{security_policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let securityPolicyId;

            if (deleteSecurityPolicyRequest !== null && deleteSecurityPolicyRequest !== undefined) {
                if (deleteSecurityPolicyRequest instanceof DeleteSecurityPolicyRequest) {
                    securityPolicyId = deleteSecurityPolicyRequest.securityPolicyId;
                } else {
                    securityPolicyId = deleteSecurityPolicyRequest['security_policy_id'];
                }
            }

        
            if (securityPolicyId === null || securityPolicyId === undefined) {
            throw new RequiredError('securityPolicyId','Required parameter securityPolicyId was null or undefined when calling deleteSecurityPolicy.');
            }

            options.pathParams = { 'security_policy_id': securityPolicyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询当前项目下的后端服务器列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAllMembers(listAllMembersRequest?: ListAllMembersRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/elb/members",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let marker;
            
            let limit;
            
            let pageReverse;
            
            let name;
            
            let weight;
            
            let adminStateUp;
            
            let subnetCidrId;
            
            let address;
            
            let protocolPort;
            
            let id;
            
            let operatingStatus;
            
            let enterpriseProjectId;
            
            let ipVersion;
            
            let poolId;
            
            let loadbalancerId;

            if (listAllMembersRequest !== null && listAllMembersRequest !== undefined) {
                if (listAllMembersRequest instanceof ListAllMembersRequest) {
                    marker = listAllMembersRequest.marker;
                    limit = listAllMembersRequest.limit;
                    pageReverse = listAllMembersRequest.pageReverse;
                    name = listAllMembersRequest.name;
                    weight = listAllMembersRequest.weight;
                    adminStateUp = listAllMembersRequest.adminStateUp;
                    subnetCidrId = listAllMembersRequest.subnetCidrId;
                    address = listAllMembersRequest.address;
                    protocolPort = listAllMembersRequest.protocolPort;
                    id = listAllMembersRequest.id;
                    operatingStatus = listAllMembersRequest.operatingStatus;
                    enterpriseProjectId = listAllMembersRequest.enterpriseProjectId;
                    ipVersion = listAllMembersRequest.ipVersion;
                    poolId = listAllMembersRequest.poolId;
                    loadbalancerId = listAllMembersRequest.loadbalancerId;
                } else {
                    marker = listAllMembersRequest['marker'];
                    limit = listAllMembersRequest['limit'];
                    pageReverse = listAllMembersRequest['page_reverse'];
                    name = listAllMembersRequest['name'];
                    weight = listAllMembersRequest['weight'];
                    adminStateUp = listAllMembersRequest['admin_state_up'];
                    subnetCidrId = listAllMembersRequest['subnet_cidr_id'];
                    address = listAllMembersRequest['address'];
                    protocolPort = listAllMembersRequest['protocol_port'];
                    id = listAllMembersRequest['id'];
                    operatingStatus = listAllMembersRequest['operating_status'];
                    enterpriseProjectId = listAllMembersRequest['enterprise_project_id'];
                    ipVersion = listAllMembersRequest['ip_version'];
                    poolId = listAllMembersRequest['pool_id'];
                    loadbalancerId = listAllMembersRequest['loadbalancer_id'];
                }
            }

        
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (pageReverse !== null && pageReverse !== undefined) {
                localVarQueryParameter['page_reverse'] = pageReverse;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (weight !== null && weight !== undefined) {
                localVarQueryParameter['weight'] = weight;
            }
            if (adminStateUp !== null && adminStateUp !== undefined) {
                localVarQueryParameter['admin_state_up'] = adminStateUp;
            }
            if (subnetCidrId !== null && subnetCidrId !== undefined) {
                localVarQueryParameter['subnet_cidr_id'] = subnetCidrId;
            }
            if (address !== null && address !== undefined) {
                localVarQueryParameter['address'] = address;
            }
            if (protocolPort !== null && protocolPort !== undefined) {
                localVarQueryParameter['protocol_port'] = protocolPort;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (operatingStatus !== null && operatingStatus !== undefined) {
                localVarQueryParameter['operating_status'] = operatingStatus;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (ipVersion !== null && ipVersion !== undefined) {
                localVarQueryParameter['ip_version'] = ipVersion;
            }
            if (poolId !== null && poolId !== undefined) {
                localVarQueryParameter['pool_id'] = poolId;
            }
            if (loadbalancerId !== null && loadbalancerId !== undefined) {
                localVarQueryParameter['loadbalancer_id'] = loadbalancerId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 返回租户创建LB时可使用的可用区集合列表情况。
         * 
         * - 默认情况下，会返回一个可用区集合。
         * 在（如创建LB）设置可用区时，填写的可用区必须包含在可用区集合中、为这个可用区集合的子集。
         * 
         * - 特殊场景下，部分客户要求负载均衡只能创建在指定可用区集合中，此时会返回客户定制的可用区集合。
         * 返回可用区集合可能为一个也可能为多个，比如列表有两个可用区集合\\[az1,az2\\],\\[az2,az3\\]。
         * 在创建负载均衡器时，可以选择创建在多个可用区，但所选的多个可用区必须同属于其中一个可用区集合，
         * 如可以选az2和az3，但不能选择az1和az3。你可以选择多个可用区，只要这些可用区在一个子集中
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAvailabilityZones(listAvailabilityZonesRequest?: ListAvailabilityZonesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/elb/availability-zones",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let publicBorderGroup;

            if (listAvailabilityZonesRequest !== null && listAvailabilityZonesRequest !== undefined) {
                if (listAvailabilityZonesRequest instanceof ListAvailabilityZonesRequest) {
                    publicBorderGroup = listAvailabilityZonesRequest.publicBorderGroup;
                } else {
                    publicBorderGroup = listAvailabilityZonesRequest['public_border_group'];
                }
            }

        
            if (publicBorderGroup !== null && publicBorderGroup !== undefined) {
                localVarQueryParameter['public_border_group'] = publicBorderGroup;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询证书列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCertificates(listCertificatesRequest?: ListCertificatesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/elb/certificates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let marker;
            
            let limit;
            
            let pageReverse;
            
            let id;
            
            let name;
            
            let description;
            
            let adminStateUp;
            
            let domain;
            
            let type;
            
            let commonName;
            
            let fingerprint;

            if (listCertificatesRequest !== null && listCertificatesRequest !== undefined) {
                if (listCertificatesRequest instanceof ListCertificatesRequest) {
                    marker = listCertificatesRequest.marker;
                    limit = listCertificatesRequest.limit;
                    pageReverse = listCertificatesRequest.pageReverse;
                    id = listCertificatesRequest.id;
                    name = listCertificatesRequest.name;
                    description = listCertificatesRequest.description;
                    adminStateUp = listCertificatesRequest.adminStateUp;
                    domain = listCertificatesRequest.domain;
                    type = listCertificatesRequest.type;
                    commonName = listCertificatesRequest.commonName;
                    fingerprint = listCertificatesRequest.fingerprint;
                } else {
                    marker = listCertificatesRequest['marker'];
                    limit = listCertificatesRequest['limit'];
                    pageReverse = listCertificatesRequest['page_reverse'];
                    id = listCertificatesRequest['id'];
                    name = listCertificatesRequest['name'];
                    description = listCertificatesRequest['description'];
                    adminStateUp = listCertificatesRequest['admin_state_up'];
                    domain = listCertificatesRequest['domain'];
                    type = listCertificatesRequest['type'];
                    commonName = listCertificatesRequest['common_name'];
                    fingerprint = listCertificatesRequest['fingerprint'];
                }
            }

        
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
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
            if (domain !== null && domain !== undefined) {
                localVarQueryParameter['domain'] = domain;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (commonName !== null && commonName !== undefined) {
                localVarQueryParameter['common_name'] = commonName;
            }
            if (fingerprint !== null && fingerprint !== undefined) {
                localVarQueryParameter['fingerprint'] = fingerprint;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询当前region下可用的负载均衡规格列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFlavors(listFlavorsRequest?: ListFlavorsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/elb/flavors",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let marker;
            
            let limit;
            
            let pageReverse;
            
            let id;
            
            let name;
            
            let type;
            
            let shared;

            if (listFlavorsRequest !== null && listFlavorsRequest !== undefined) {
                if (listFlavorsRequest instanceof ListFlavorsRequest) {
                    marker = listFlavorsRequest.marker;
                    limit = listFlavorsRequest.limit;
                    pageReverse = listFlavorsRequest.pageReverse;
                    id = listFlavorsRequest.id;
                    name = listFlavorsRequest.name;
                    type = listFlavorsRequest.type;
                    shared = listFlavorsRequest.shared;
                } else {
                    marker = listFlavorsRequest['marker'];
                    limit = listFlavorsRequest['limit'];
                    pageReverse = listFlavorsRequest['page_reverse'];
                    id = listFlavorsRequest['id'];
                    name = listFlavorsRequest['name'];
                    type = listFlavorsRequest['type'];
                    shared = listFlavorsRequest['shared'];
                }
            }

        
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
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
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (shared !== null && shared !== undefined) {
                localVarQueryParameter['shared'] = shared;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 健康检查列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHealthMonitors(listHealthMonitorsRequest?: ListHealthMonitorsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/elb/healthmonitors",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let marker;
            
            let limit;
            
            let pageReverse;
            
            let id;
            
            let monitorPort;
            
            let domainName;
            
            let name;
            
            let delay;
            
            let maxRetries;
            
            let adminStateUp;
            
            let maxRetriesDown;
            
            let timeout;
            
            let type;
            
            let expectedCodes;
            
            let urlPath;
            
            let httpMethod;
            
            let enterpriseProjectId;

            if (listHealthMonitorsRequest !== null && listHealthMonitorsRequest !== undefined) {
                if (listHealthMonitorsRequest instanceof ListHealthMonitorsRequest) {
                    marker = listHealthMonitorsRequest.marker;
                    limit = listHealthMonitorsRequest.limit;
                    pageReverse = listHealthMonitorsRequest.pageReverse;
                    id = listHealthMonitorsRequest.id;
                    monitorPort = listHealthMonitorsRequest.monitorPort;
                    domainName = listHealthMonitorsRequest.domainName;
                    name = listHealthMonitorsRequest.name;
                    delay = listHealthMonitorsRequest.delay;
                    maxRetries = listHealthMonitorsRequest.maxRetries;
                    adminStateUp = listHealthMonitorsRequest.adminStateUp;
                    maxRetriesDown = listHealthMonitorsRequest.maxRetriesDown;
                    timeout = listHealthMonitorsRequest.timeout;
                    type = listHealthMonitorsRequest.type;
                    expectedCodes = listHealthMonitorsRequest.expectedCodes;
                    urlPath = listHealthMonitorsRequest.urlPath;
                    httpMethod = listHealthMonitorsRequest.httpMethod;
                    enterpriseProjectId = listHealthMonitorsRequest.enterpriseProjectId;
                } else {
                    marker = listHealthMonitorsRequest['marker'];
                    limit = listHealthMonitorsRequest['limit'];
                    pageReverse = listHealthMonitorsRequest['page_reverse'];
                    id = listHealthMonitorsRequest['id'];
                    monitorPort = listHealthMonitorsRequest['monitor_port'];
                    domainName = listHealthMonitorsRequest['domain_name'];
                    name = listHealthMonitorsRequest['name'];
                    delay = listHealthMonitorsRequest['delay'];
                    maxRetries = listHealthMonitorsRequest['max_retries'];
                    adminStateUp = listHealthMonitorsRequest['admin_state_up'];
                    maxRetriesDown = listHealthMonitorsRequest['max_retries_down'];
                    timeout = listHealthMonitorsRequest['timeout'];
                    type = listHealthMonitorsRequest['type'];
                    expectedCodes = listHealthMonitorsRequest['expected_codes'];
                    urlPath = listHealthMonitorsRequest['url_path'];
                    httpMethod = listHealthMonitorsRequest['http_method'];
                    enterpriseProjectId = listHealthMonitorsRequest['enterprise_project_id'];
                }
            }

        
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (pageReverse !== null && pageReverse !== undefined) {
                localVarQueryParameter['page_reverse'] = pageReverse;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (monitorPort !== null && monitorPort !== undefined) {
                localVarQueryParameter['monitor_port'] = monitorPort;
            }
            if (domainName !== null && domainName !== undefined) {
                localVarQueryParameter['domain_name'] = domainName;
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
            if (maxRetriesDown !== null && maxRetriesDown !== undefined) {
                localVarQueryParameter['max_retries_down'] = maxRetriesDown;
            }
            if (timeout !== null && timeout !== undefined) {
                localVarQueryParameter['timeout'] = timeout;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (expectedCodes !== null && expectedCodes !== undefined) {
                localVarQueryParameter['expected_codes'] = expectedCodes;
            }
            if (urlPath !== null && urlPath !== undefined) {
                localVarQueryParameter['url_path'] = urlPath;
            }
            if (httpMethod !== null && httpMethod !== undefined) {
                localVarQueryParameter['http_method'] = httpMethod;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询七层转发策略列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listL7Policies(listL7PoliciesRequest?: ListL7PoliciesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/elb/l7policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let marker;
            
            let limit;
            
            let pageReverse;
            
            let enterpriseProjectId;
            
            let id;
            
            let name;
            
            let description;
            
            let adminStateUp;
            
            let listenerId;
            
            let position;
            
            let action;
            
            let redirectUrl;
            
            let redirectPoolId;
            
            let redirectListenerId;
            
            let provisioningStatus;
            
            let displayAllRules;
            
            let priority;

            if (listL7PoliciesRequest !== null && listL7PoliciesRequest !== undefined) {
                if (listL7PoliciesRequest instanceof ListL7PoliciesRequest) {
                    marker = listL7PoliciesRequest.marker;
                    limit = listL7PoliciesRequest.limit;
                    pageReverse = listL7PoliciesRequest.pageReverse;
                    enterpriseProjectId = listL7PoliciesRequest.enterpriseProjectId;
                    id = listL7PoliciesRequest.id;
                    name = listL7PoliciesRequest.name;
                    description = listL7PoliciesRequest.description;
                    adminStateUp = listL7PoliciesRequest.adminStateUp;
                    listenerId = listL7PoliciesRequest.listenerId;
                    position = listL7PoliciesRequest.position;
                    action = listL7PoliciesRequest.action;
                    redirectUrl = listL7PoliciesRequest.redirectUrl;
                    redirectPoolId = listL7PoliciesRequest.redirectPoolId;
                    redirectListenerId = listL7PoliciesRequest.redirectListenerId;
                    provisioningStatus = listL7PoliciesRequest.provisioningStatus;
                    displayAllRules = listL7PoliciesRequest.displayAllRules;
                    priority = listL7PoliciesRequest.priority;
                } else {
                    marker = listL7PoliciesRequest['marker'];
                    limit = listL7PoliciesRequest['limit'];
                    pageReverse = listL7PoliciesRequest['page_reverse'];
                    enterpriseProjectId = listL7PoliciesRequest['enterprise_project_id'];
                    id = listL7PoliciesRequest['id'];
                    name = listL7PoliciesRequest['name'];
                    description = listL7PoliciesRequest['description'];
                    adminStateUp = listL7PoliciesRequest['admin_state_up'];
                    listenerId = listL7PoliciesRequest['listener_id'];
                    position = listL7PoliciesRequest['position'];
                    action = listL7PoliciesRequest['action'];
                    redirectUrl = listL7PoliciesRequest['redirect_url'];
                    redirectPoolId = listL7PoliciesRequest['redirect_pool_id'];
                    redirectListenerId = listL7PoliciesRequest['redirect_listener_id'];
                    provisioningStatus = listL7PoliciesRequest['provisioning_status'];
                    displayAllRules = listL7PoliciesRequest['display_all_rules'];
                    priority = listL7PoliciesRequest['priority'];
                }
            }

        
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (pageReverse !== null && pageReverse !== undefined) {
                localVarQueryParameter['page_reverse'] = pageReverse;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
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
            if (position !== null && position !== undefined) {
                localVarQueryParameter['position'] = position;
            }
            if (action !== null && action !== undefined) {
                localVarQueryParameter['action'] = action;
            }
            if (redirectUrl !== null && redirectUrl !== undefined) {
                localVarQueryParameter['redirect_url'] = redirectUrl;
            }
            if (redirectPoolId !== null && redirectPoolId !== undefined) {
                localVarQueryParameter['redirect_pool_id'] = redirectPoolId;
            }
            if (redirectListenerId !== null && redirectListenerId !== undefined) {
                localVarQueryParameter['redirect_listener_id'] = redirectListenerId;
            }
            if (provisioningStatus !== null && provisioningStatus !== undefined) {
                localVarQueryParameter['provisioning_status'] = provisioningStatus;
            }
            if (displayAllRules !== null && displayAllRules !== undefined) {
                localVarQueryParameter['display_all_rules'] = displayAllRules;
            }
            if (priority !== null && priority !== undefined) {
                localVarQueryParameter['priority'] = priority;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询转发规则列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listL7Rules(listL7RulesRequest?: ListL7RulesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/elb/l7policies/{l7policy_id}/rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let l7policyId;
            
            let limit;
            
            let marker;
            
            let pageReverse;
            
            let id;
            
            let compareType;
            
            let provisioningStatus;
            
            let invert;
            
            let adminStateUp;
            
            let value;
            
            let key;
            
            let type;
            
            let enterpriseProjectId;

            if (listL7RulesRequest !== null && listL7RulesRequest !== undefined) {
                if (listL7RulesRequest instanceof ListL7RulesRequest) {
                    l7policyId = listL7RulesRequest.l7policyId;
                    limit = listL7RulesRequest.limit;
                    marker = listL7RulesRequest.marker;
                    pageReverse = listL7RulesRequest.pageReverse;
                    id = listL7RulesRequest.id;
                    compareType = listL7RulesRequest.compareType;
                    provisioningStatus = listL7RulesRequest.provisioningStatus;
                    invert = listL7RulesRequest.invert;
                    adminStateUp = listL7RulesRequest.adminStateUp;
                    value = listL7RulesRequest.value;
                    key = listL7RulesRequest.key;
                    type = listL7RulesRequest.type;
                    enterpriseProjectId = listL7RulesRequest.enterpriseProjectId;
                } else {
                    l7policyId = listL7RulesRequest['l7policy_id'];
                    limit = listL7RulesRequest['limit'];
                    marker = listL7RulesRequest['marker'];
                    pageReverse = listL7RulesRequest['page_reverse'];
                    id = listL7RulesRequest['id'];
                    compareType = listL7RulesRequest['compare_type'];
                    provisioningStatus = listL7RulesRequest['provisioning_status'];
                    invert = listL7RulesRequest['invert'];
                    adminStateUp = listL7RulesRequest['admin_state_up'];
                    value = listL7RulesRequest['value'];
                    key = listL7RulesRequest['key'];
                    type = listL7RulesRequest['type'];
                    enterpriseProjectId = listL7RulesRequest['enterprise_project_id'];
                }
            }

        
            if (l7policyId === null || l7policyId === undefined) {
            throw new RequiredError('l7policyId','Required parameter l7policyId was null or undefined when calling listL7Rules.');
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
            if (compareType !== null && compareType !== undefined) {
                localVarQueryParameter['compare_type'] = compareType;
            }
            if (provisioningStatus !== null && provisioningStatus !== undefined) {
                localVarQueryParameter['provisioning_status'] = provisioningStatus;
            }
            if (invert !== null && invert !== undefined) {
                localVarQueryParameter['invert'] = invert;
            }
            if (adminStateUp !== null && adminStateUp !== undefined) {
                localVarQueryParameter['admin_state_up'] = adminStateUp;
            }
            if (value !== null && value !== undefined) {
                localVarQueryParameter['value'] = value;
            }
            if (key !== null && key !== undefined) {
                localVarQueryParameter['key'] = key;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'l7policy_id': l7policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询监听器列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listListeners(listListenersRequest?: ListListenersRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/elb/listeners",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let pageReverse;
            
            let protocolPort;
            
            let protocol;
            
            let description;
            
            let defaultTlsContainerRef;
            
            let clientCaTlsContainerRef;
            
            let adminStateUp;
            
            let connectionLimit;
            
            let defaultPoolId;
            
            let id;
            
            let name;
            
            let http2Enable;
            
            let loadbalancerId;
            
            let tlsCiphersPolicy;
            
            let memberAddress;
            
            let memberDeviceId;
            
            let enterpriseProjectId;
            
            let enableMemberRetry;
            
            let memberTimeout;
            
            let clientTimeout;
            
            let keepaliveTimeout;
            
            let transparentClientIpEnable;
            
            let proxyProtocolEnable;
            
            let enhanceL7policyEnable;
            
            let memberInstanceId;
            
            let protectionStatus;

            if (listListenersRequest !== null && listListenersRequest !== undefined) {
                if (listListenersRequest instanceof ListListenersRequest) {
                    limit = listListenersRequest.limit;
                    marker = listListenersRequest.marker;
                    pageReverse = listListenersRequest.pageReverse;
                    protocolPort = listListenersRequest.protocolPort;
                    protocol = listListenersRequest.protocol;
                    description = listListenersRequest.description;
                    defaultTlsContainerRef = listListenersRequest.defaultTlsContainerRef;
                    clientCaTlsContainerRef = listListenersRequest.clientCaTlsContainerRef;
                    adminStateUp = listListenersRequest.adminStateUp;
                    connectionLimit = listListenersRequest.connectionLimit;
                    defaultPoolId = listListenersRequest.defaultPoolId;
                    id = listListenersRequest.id;
                    name = listListenersRequest.name;
                    http2Enable = listListenersRequest.http2Enable;
                    loadbalancerId = listListenersRequest.loadbalancerId;
                    tlsCiphersPolicy = listListenersRequest.tlsCiphersPolicy;
                    memberAddress = listListenersRequest.memberAddress;
                    memberDeviceId = listListenersRequest.memberDeviceId;
                    enterpriseProjectId = listListenersRequest.enterpriseProjectId;
                    enableMemberRetry = listListenersRequest.enableMemberRetry;
                    memberTimeout = listListenersRequest.memberTimeout;
                    clientTimeout = listListenersRequest.clientTimeout;
                    keepaliveTimeout = listListenersRequest.keepaliveTimeout;
                    transparentClientIpEnable = listListenersRequest.transparentClientIpEnable;
                    proxyProtocolEnable = listListenersRequest.proxyProtocolEnable;
                    enhanceL7policyEnable = listListenersRequest.enhanceL7policyEnable;
                    memberInstanceId = listListenersRequest.memberInstanceId;
                    protectionStatus = listListenersRequest.protectionStatus;
                } else {
                    limit = listListenersRequest['limit'];
                    marker = listListenersRequest['marker'];
                    pageReverse = listListenersRequest['page_reverse'];
                    protocolPort = listListenersRequest['protocol_port'];
                    protocol = listListenersRequest['protocol'];
                    description = listListenersRequest['description'];
                    defaultTlsContainerRef = listListenersRequest['default_tls_container_ref'];
                    clientCaTlsContainerRef = listListenersRequest['client_ca_tls_container_ref'];
                    adminStateUp = listListenersRequest['admin_state_up'];
                    connectionLimit = listListenersRequest['connection_limit'];
                    defaultPoolId = listListenersRequest['default_pool_id'];
                    id = listListenersRequest['id'];
                    name = listListenersRequest['name'];
                    http2Enable = listListenersRequest['http2_enable'];
                    loadbalancerId = listListenersRequest['loadbalancer_id'];
                    tlsCiphersPolicy = listListenersRequest['tls_ciphers_policy'];
                    memberAddress = listListenersRequest['member_address'];
                    memberDeviceId = listListenersRequest['member_device_id'];
                    enterpriseProjectId = listListenersRequest['enterprise_project_id'];
                    enableMemberRetry = listListenersRequest['enable_member_retry'];
                    memberTimeout = listListenersRequest['member_timeout'];
                    clientTimeout = listListenersRequest['client_timeout'];
                    keepaliveTimeout = listListenersRequest['keepalive_timeout'];
                    transparentClientIpEnable = listListenersRequest['transparent_client_ip_enable'];
                    proxyProtocolEnable = listListenersRequest['proxy_protocol_enable'];
                    enhanceL7policyEnable = listListenersRequest['enhance_l7policy_enable'];
                    memberInstanceId = listListenersRequest['member_instance_id'];
                    protectionStatus = listListenersRequest['protection_status'];
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
            if (protocolPort !== null && protocolPort !== undefined) {
                localVarQueryParameter['protocol_port'] = protocolPort;
            }
            if (protocol !== null && protocol !== undefined) {
                localVarQueryParameter['protocol'] = protocol;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (defaultTlsContainerRef !== null && defaultTlsContainerRef !== undefined) {
                localVarQueryParameter['default_tls_container_ref'] = defaultTlsContainerRef;
            }
            if (clientCaTlsContainerRef !== null && clientCaTlsContainerRef !== undefined) {
                localVarQueryParameter['client_ca_tls_container_ref'] = clientCaTlsContainerRef;
            }
            if (adminStateUp !== null && adminStateUp !== undefined) {
                localVarQueryParameter['admin_state_up'] = adminStateUp;
            }
            if (connectionLimit !== null && connectionLimit !== undefined) {
                localVarQueryParameter['connection_limit'] = connectionLimit;
            }
            if (defaultPoolId !== null && defaultPoolId !== undefined) {
                localVarQueryParameter['default_pool_id'] = defaultPoolId;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (http2Enable !== null && http2Enable !== undefined) {
                localVarQueryParameter['http2_enable'] = http2Enable;
            }
            if (loadbalancerId !== null && loadbalancerId !== undefined) {
                localVarQueryParameter['loadbalancer_id'] = loadbalancerId;
            }
            if (tlsCiphersPolicy !== null && tlsCiphersPolicy !== undefined) {
                localVarQueryParameter['tls_ciphers_policy'] = tlsCiphersPolicy;
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
            if (enableMemberRetry !== null && enableMemberRetry !== undefined) {
                localVarQueryParameter['enable_member_retry'] = enableMemberRetry;
            }
            if (memberTimeout !== null && memberTimeout !== undefined) {
                localVarQueryParameter['member_timeout'] = memberTimeout;
            }
            if (clientTimeout !== null && clientTimeout !== undefined) {
                localVarQueryParameter['client_timeout'] = clientTimeout;
            }
            if (keepaliveTimeout !== null && keepaliveTimeout !== undefined) {
                localVarQueryParameter['keepalive_timeout'] = keepaliveTimeout;
            }
            if (transparentClientIpEnable !== null && transparentClientIpEnable !== undefined) {
                localVarQueryParameter['transparent_client_ip_enable'] = transparentClientIpEnable;
            }
            if (proxyProtocolEnable !== null && proxyProtocolEnable !== undefined) {
                localVarQueryParameter['proxy_protocol_enable'] = proxyProtocolEnable;
            }
            if (enhanceL7policyEnable !== null && enhanceL7policyEnable !== undefined) {
                localVarQueryParameter['enhance_l7policy_enable'] = enhanceL7policyEnable;
            }
            if (memberInstanceId !== null && memberInstanceId !== undefined) {
                localVarQueryParameter['member_instance_id'] = memberInstanceId;
            }
            if (protectionStatus !== null && protectionStatus !== undefined) {
                localVarQueryParameter['protection_status'] = protectionStatus;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询负载均衡器列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLoadBalancers(listLoadBalancersRequest?: ListLoadBalancersRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/elb/loadbalancers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let marker;
            
            let limit;
            
            let pageReverse;
            
            let id;
            
            let name;
            
            let description;
            
            let adminStateUp;
            
            let provisioningStatus;
            
            let operatingStatus;
            
            let guaranteed;
            
            let vpcId;
            
            let vipPortId;
            
            let vipAddress;
            
            let vipSubnetCidrId;
            
            let ipv6VipPortId;
            
            let ipv6VipAddress;
            
            let ipv6VipVirsubnetId;
            
            let eips;
            
            let publicips;
            
            let availabilityZoneList;
            
            let l4FlavorId;
            
            let l4ScaleFlavorId;
            
            let l7FlavorId;
            
            let l7ScaleFlavorId;
            
            let billingInfo;
            
            let memberDeviceId;
            
            let memberAddress;
            
            let enterpriseProjectId;
            
            let ipVersion;
            
            let deletionProtectionEnable;
            
            let elbVirsubnetType;
            
            let autoscaling;
            
            let protectionStatus;
            
            let globalEips;
            
            let logTopicId;
            
            let logGroupId;

            if (listLoadBalancersRequest !== null && listLoadBalancersRequest !== undefined) {
                if (listLoadBalancersRequest instanceof ListLoadBalancersRequest) {
                    marker = listLoadBalancersRequest.marker;
                    limit = listLoadBalancersRequest.limit;
                    pageReverse = listLoadBalancersRequest.pageReverse;
                    id = listLoadBalancersRequest.id;
                    name = listLoadBalancersRequest.name;
                    description = listLoadBalancersRequest.description;
                    adminStateUp = listLoadBalancersRequest.adminStateUp;
                    provisioningStatus = listLoadBalancersRequest.provisioningStatus;
                    operatingStatus = listLoadBalancersRequest.operatingStatus;
                    guaranteed = listLoadBalancersRequest.guaranteed;
                    vpcId = listLoadBalancersRequest.vpcId;
                    vipPortId = listLoadBalancersRequest.vipPortId;
                    vipAddress = listLoadBalancersRequest.vipAddress;
                    vipSubnetCidrId = listLoadBalancersRequest.vipSubnetCidrId;
                    ipv6VipPortId = listLoadBalancersRequest.ipv6VipPortId;
                    ipv6VipAddress = listLoadBalancersRequest.ipv6VipAddress;
                    ipv6VipVirsubnetId = listLoadBalancersRequest.ipv6VipVirsubnetId;
                    eips = listLoadBalancersRequest.eips;
                    publicips = listLoadBalancersRequest.publicips;
                    availabilityZoneList = listLoadBalancersRequest.availabilityZoneList;
                    l4FlavorId = listLoadBalancersRequest.l4FlavorId;
                    l4ScaleFlavorId = listLoadBalancersRequest.l4ScaleFlavorId;
                    l7FlavorId = listLoadBalancersRequest.l7FlavorId;
                    l7ScaleFlavorId = listLoadBalancersRequest.l7ScaleFlavorId;
                    billingInfo = listLoadBalancersRequest.billingInfo;
                    memberDeviceId = listLoadBalancersRequest.memberDeviceId;
                    memberAddress = listLoadBalancersRequest.memberAddress;
                    enterpriseProjectId = listLoadBalancersRequest.enterpriseProjectId;
                    ipVersion = listLoadBalancersRequest.ipVersion;
                    deletionProtectionEnable = listLoadBalancersRequest.deletionProtectionEnable;
                    elbVirsubnetType = listLoadBalancersRequest.elbVirsubnetType;
                    autoscaling = listLoadBalancersRequest.autoscaling;
                    protectionStatus = listLoadBalancersRequest.protectionStatus;
                    globalEips = listLoadBalancersRequest.globalEips;
                    logTopicId = listLoadBalancersRequest.logTopicId;
                    logGroupId = listLoadBalancersRequest.logGroupId;
                } else {
                    marker = listLoadBalancersRequest['marker'];
                    limit = listLoadBalancersRequest['limit'];
                    pageReverse = listLoadBalancersRequest['page_reverse'];
                    id = listLoadBalancersRequest['id'];
                    name = listLoadBalancersRequest['name'];
                    description = listLoadBalancersRequest['description'];
                    adminStateUp = listLoadBalancersRequest['admin_state_up'];
                    provisioningStatus = listLoadBalancersRequest['provisioning_status'];
                    operatingStatus = listLoadBalancersRequest['operating_status'];
                    guaranteed = listLoadBalancersRequest['guaranteed'];
                    vpcId = listLoadBalancersRequest['vpc_id'];
                    vipPortId = listLoadBalancersRequest['vip_port_id'];
                    vipAddress = listLoadBalancersRequest['vip_address'];
                    vipSubnetCidrId = listLoadBalancersRequest['vip_subnet_cidr_id'];
                    ipv6VipPortId = listLoadBalancersRequest['ipv6_vip_port_id'];
                    ipv6VipAddress = listLoadBalancersRequest['ipv6_vip_address'];
                    ipv6VipVirsubnetId = listLoadBalancersRequest['ipv6_vip_virsubnet_id'];
                    eips = listLoadBalancersRequest['eips'];
                    publicips = listLoadBalancersRequest['publicips'];
                    availabilityZoneList = listLoadBalancersRequest['availability_zone_list'];
                    l4FlavorId = listLoadBalancersRequest['l4_flavor_id'];
                    l4ScaleFlavorId = listLoadBalancersRequest['l4_scale_flavor_id'];
                    l7FlavorId = listLoadBalancersRequest['l7_flavor_id'];
                    l7ScaleFlavorId = listLoadBalancersRequest['l7_scale_flavor_id'];
                    billingInfo = listLoadBalancersRequest['billing_info'];
                    memberDeviceId = listLoadBalancersRequest['member_device_id'];
                    memberAddress = listLoadBalancersRequest['member_address'];
                    enterpriseProjectId = listLoadBalancersRequest['enterprise_project_id'];
                    ipVersion = listLoadBalancersRequest['ip_version'];
                    deletionProtectionEnable = listLoadBalancersRequest['deletion_protection_enable'];
                    elbVirsubnetType = listLoadBalancersRequest['elb_virsubnet_type'];
                    autoscaling = listLoadBalancersRequest['autoscaling'];
                    protectionStatus = listLoadBalancersRequest['protection_status'];
                    globalEips = listLoadBalancersRequest['global_eips'];
                    logTopicId = listLoadBalancersRequest['log_topic_id'];
                    logGroupId = listLoadBalancersRequest['log_group_id'];
                }
            }

        
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
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
            if (provisioningStatus !== null && provisioningStatus !== undefined) {
                localVarQueryParameter['provisioning_status'] = provisioningStatus;
            }
            if (operatingStatus !== null && operatingStatus !== undefined) {
                localVarQueryParameter['operating_status'] = operatingStatus;
            }
            if (guaranteed !== null && guaranteed !== undefined) {
                localVarQueryParameter['guaranteed'] = guaranteed;
            }
            if (vpcId !== null && vpcId !== undefined) {
                localVarQueryParameter['vpc_id'] = vpcId;
            }
            if (vipPortId !== null && vipPortId !== undefined) {
                localVarQueryParameter['vip_port_id'] = vipPortId;
            }
            if (vipAddress !== null && vipAddress !== undefined) {
                localVarQueryParameter['vip_address'] = vipAddress;
            }
            if (vipSubnetCidrId !== null && vipSubnetCidrId !== undefined) {
                localVarQueryParameter['vip_subnet_cidr_id'] = vipSubnetCidrId;
            }
            if (ipv6VipPortId !== null && ipv6VipPortId !== undefined) {
                localVarQueryParameter['ipv6_vip_port_id'] = ipv6VipPortId;
            }
            if (ipv6VipAddress !== null && ipv6VipAddress !== undefined) {
                localVarQueryParameter['ipv6_vip_address'] = ipv6VipAddress;
            }
            if (ipv6VipVirsubnetId !== null && ipv6VipVirsubnetId !== undefined) {
                localVarQueryParameter['ipv6_vip_virsubnet_id'] = ipv6VipVirsubnetId;
            }
            if (eips !== null && eips !== undefined) {
                localVarQueryParameter['eips'] = eips;
            }
            if (publicips !== null && publicips !== undefined) {
                localVarQueryParameter['publicips'] = publicips;
            }
            if (availabilityZoneList !== null && availabilityZoneList !== undefined) {
                localVarQueryParameter['availability_zone_list'] = availabilityZoneList;
            }
            if (l4FlavorId !== null && l4FlavorId !== undefined) {
                localVarQueryParameter['l4_flavor_id'] = l4FlavorId;
            }
            if (l4ScaleFlavorId !== null && l4ScaleFlavorId !== undefined) {
                localVarQueryParameter['l4_scale_flavor_id'] = l4ScaleFlavorId;
            }
            if (l7FlavorId !== null && l7FlavorId !== undefined) {
                localVarQueryParameter['l7_flavor_id'] = l7FlavorId;
            }
            if (l7ScaleFlavorId !== null && l7ScaleFlavorId !== undefined) {
                localVarQueryParameter['l7_scale_flavor_id'] = l7ScaleFlavorId;
            }
            if (billingInfo !== null && billingInfo !== undefined) {
                localVarQueryParameter['billing_info'] = billingInfo;
            }
            if (memberDeviceId !== null && memberDeviceId !== undefined) {
                localVarQueryParameter['member_device_id'] = memberDeviceId;
            }
            if (memberAddress !== null && memberAddress !== undefined) {
                localVarQueryParameter['member_address'] = memberAddress;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (ipVersion !== null && ipVersion !== undefined) {
                localVarQueryParameter['ip_version'] = ipVersion;
            }
            if (deletionProtectionEnable !== null && deletionProtectionEnable !== undefined) {
                localVarQueryParameter['deletion_protection_enable'] = deletionProtectionEnable;
            }
            if (elbVirsubnetType !== null && elbVirsubnetType !== undefined) {
                localVarQueryParameter['elb_virsubnet_type'] = elbVirsubnetType;
            }
            if (autoscaling !== null && autoscaling !== undefined) {
                localVarQueryParameter['autoscaling'] = autoscaling;
            }
            if (protectionStatus !== null && protectionStatus !== undefined) {
                localVarQueryParameter['protection_status'] = protectionStatus;
            }
            if (globalEips !== null && globalEips !== undefined) {
                localVarQueryParameter['global_eips'] = globalEips;
            }
            if (logTopicId !== null && logTopicId !== undefined) {
                localVarQueryParameter['log_topic_id'] = logTopicId;
            }
            if (logGroupId !== null && logGroupId !== undefined) {
                localVarQueryParameter['log_group_id'] = logGroupId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询云日志列表。[荷兰region不支持云日志功能，请勿使用。](tag:dt,dt_test)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLogtanks(listLogtanksRequest?: ListLogtanksRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/elb/logtanks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let pageReverse;
            
            let enterpriseProjectId;
            
            let id;
            
            let loadbalancerId;
            
            let logGroupId;
            
            let logTopicId;

            if (listLogtanksRequest !== null && listLogtanksRequest !== undefined) {
                if (listLogtanksRequest instanceof ListLogtanksRequest) {
                    limit = listLogtanksRequest.limit;
                    marker = listLogtanksRequest.marker;
                    pageReverse = listLogtanksRequest.pageReverse;
                    enterpriseProjectId = listLogtanksRequest.enterpriseProjectId;
                    id = listLogtanksRequest.id;
                    loadbalancerId = listLogtanksRequest.loadbalancerId;
                    logGroupId = listLogtanksRequest.logGroupId;
                    logTopicId = listLogtanksRequest.logTopicId;
                } else {
                    limit = listLogtanksRequest['limit'];
                    marker = listLogtanksRequest['marker'];
                    pageReverse = listLogtanksRequest['page_reverse'];
                    enterpriseProjectId = listLogtanksRequest['enterprise_project_id'];
                    id = listLogtanksRequest['id'];
                    loadbalancerId = listLogtanksRequest['loadbalancer_id'];
                    logGroupId = listLogtanksRequest['log_group_id'];
                    logTopicId = listLogtanksRequest['log_topic_id'];
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
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (loadbalancerId !== null && loadbalancerId !== undefined) {
                localVarQueryParameter['loadbalancer_id'] = loadbalancerId;
            }
            if (logGroupId !== null && logGroupId !== undefined) {
                localVarQueryParameter['log_group_id'] = logGroupId;
            }
            if (logTopicId !== null && logTopicId !== undefined) {
                localVarQueryParameter['log_topic_id'] = logTopicId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 主备后端服务器组列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMasterSlavePools(listMasterSlavePoolsRequest?: ListMasterSlavePoolsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/elb/master-slave-pools",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let marker;
            
            let limit;
            
            let pageReverse;
            
            let description;
            
            let healthmonitorId;
            
            let id;
            
            let name;
            
            let loadbalancerId;
            
            let protocol;
            
            let lbAlgorithm;
            
            let enterpriseProjectId;
            
            let ipVersion;
            
            let memberAddress;
            
            let memberDeviceId;
            
            let listenerId;
            
            let memberInstanceId;
            
            let vpcId;
            
            let type;
            
            let connectionDrain;

            if (listMasterSlavePoolsRequest !== null && listMasterSlavePoolsRequest !== undefined) {
                if (listMasterSlavePoolsRequest instanceof ListMasterSlavePoolsRequest) {
                    marker = listMasterSlavePoolsRequest.marker;
                    limit = listMasterSlavePoolsRequest.limit;
                    pageReverse = listMasterSlavePoolsRequest.pageReverse;
                    description = listMasterSlavePoolsRequest.description;
                    healthmonitorId = listMasterSlavePoolsRequest.healthmonitorId;
                    id = listMasterSlavePoolsRequest.id;
                    name = listMasterSlavePoolsRequest.name;
                    loadbalancerId = listMasterSlavePoolsRequest.loadbalancerId;
                    protocol = listMasterSlavePoolsRequest.protocol;
                    lbAlgorithm = listMasterSlavePoolsRequest.lbAlgorithm;
                    enterpriseProjectId = listMasterSlavePoolsRequest.enterpriseProjectId;
                    ipVersion = listMasterSlavePoolsRequest.ipVersion;
                    memberAddress = listMasterSlavePoolsRequest.memberAddress;
                    memberDeviceId = listMasterSlavePoolsRequest.memberDeviceId;
                    listenerId = listMasterSlavePoolsRequest.listenerId;
                    memberInstanceId = listMasterSlavePoolsRequest.memberInstanceId;
                    vpcId = listMasterSlavePoolsRequest.vpcId;
                    type = listMasterSlavePoolsRequest.type;
                    connectionDrain = listMasterSlavePoolsRequest.connectionDrain;
                } else {
                    marker = listMasterSlavePoolsRequest['marker'];
                    limit = listMasterSlavePoolsRequest['limit'];
                    pageReverse = listMasterSlavePoolsRequest['page_reverse'];
                    description = listMasterSlavePoolsRequest['description'];
                    healthmonitorId = listMasterSlavePoolsRequest['healthmonitor_id'];
                    id = listMasterSlavePoolsRequest['id'];
                    name = listMasterSlavePoolsRequest['name'];
                    loadbalancerId = listMasterSlavePoolsRequest['loadbalancer_id'];
                    protocol = listMasterSlavePoolsRequest['protocol'];
                    lbAlgorithm = listMasterSlavePoolsRequest['lb_algorithm'];
                    enterpriseProjectId = listMasterSlavePoolsRequest['enterprise_project_id'];
                    ipVersion = listMasterSlavePoolsRequest['ip_version'];
                    memberAddress = listMasterSlavePoolsRequest['member_address'];
                    memberDeviceId = listMasterSlavePoolsRequest['member_device_id'];
                    listenerId = listMasterSlavePoolsRequest['listener_id'];
                    memberInstanceId = listMasterSlavePoolsRequest['member_instance_id'];
                    vpcId = listMasterSlavePoolsRequest['vpc_id'];
                    type = listMasterSlavePoolsRequest['type'];
                    connectionDrain = listMasterSlavePoolsRequest['connection_drain'];
                }
            }

        
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (pageReverse !== null && pageReverse !== undefined) {
                localVarQueryParameter['page_reverse'] = pageReverse;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (healthmonitorId !== null && healthmonitorId !== undefined) {
                localVarQueryParameter['healthmonitor_id'] = healthmonitorId;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
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
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (ipVersion !== null && ipVersion !== undefined) {
                localVarQueryParameter['ip_version'] = ipVersion;
            }
            if (memberAddress !== null && memberAddress !== undefined) {
                localVarQueryParameter['member_address'] = memberAddress;
            }
            if (memberDeviceId !== null && memberDeviceId !== undefined) {
                localVarQueryParameter['member_device_id'] = memberDeviceId;
            }
            if (listenerId !== null && listenerId !== undefined) {
                localVarQueryParameter['listener_id'] = listenerId;
            }
            if (memberInstanceId !== null && memberInstanceId !== undefined) {
                localVarQueryParameter['member_instance_id'] = memberInstanceId;
            }
            if (vpcId !== null && vpcId !== undefined) {
                localVarQueryParameter['vpc_id'] = vpcId;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (connectionDrain !== null && connectionDrain !== undefined) {
                localVarQueryParameter['connection_drain'] = connectionDrain;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Pool下的后端服务器列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMembers(listMembersRequest?: ListMembersRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/elb/pools/{pool_id}/members",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let poolId;
            
            let marker;
            
            let limit;
            
            let pageReverse;
            
            let name;
            
            let weight;
            
            let adminStateUp;
            
            let subnetCidrId;
            
            let address;
            
            let protocolPort;
            
            let id;
            
            let operatingStatus;
            
            let enterpriseProjectId;
            
            let ipVersion;
            
            let memberType;
            
            let instanceId;

            if (listMembersRequest !== null && listMembersRequest !== undefined) {
                if (listMembersRequest instanceof ListMembersRequest) {
                    poolId = listMembersRequest.poolId;
                    marker = listMembersRequest.marker;
                    limit = listMembersRequest.limit;
                    pageReverse = listMembersRequest.pageReverse;
                    name = listMembersRequest.name;
                    weight = listMembersRequest.weight;
                    adminStateUp = listMembersRequest.adminStateUp;
                    subnetCidrId = listMembersRequest.subnetCidrId;
                    address = listMembersRequest.address;
                    protocolPort = listMembersRequest.protocolPort;
                    id = listMembersRequest.id;
                    operatingStatus = listMembersRequest.operatingStatus;
                    enterpriseProjectId = listMembersRequest.enterpriseProjectId;
                    ipVersion = listMembersRequest.ipVersion;
                    memberType = listMembersRequest.memberType;
                    instanceId = listMembersRequest.instanceId;
                } else {
                    poolId = listMembersRequest['pool_id'];
                    marker = listMembersRequest['marker'];
                    limit = listMembersRequest['limit'];
                    pageReverse = listMembersRequest['page_reverse'];
                    name = listMembersRequest['name'];
                    weight = listMembersRequest['weight'];
                    adminStateUp = listMembersRequest['admin_state_up'];
                    subnetCidrId = listMembersRequest['subnet_cidr_id'];
                    address = listMembersRequest['address'];
                    protocolPort = listMembersRequest['protocol_port'];
                    id = listMembersRequest['id'];
                    operatingStatus = listMembersRequest['operating_status'];
                    enterpriseProjectId = listMembersRequest['enterprise_project_id'];
                    ipVersion = listMembersRequest['ip_version'];
                    memberType = listMembersRequest['member_type'];
                    instanceId = listMembersRequest['instance_id'];
                }
            }

        
            if (poolId === null || poolId === undefined) {
            throw new RequiredError('poolId','Required parameter poolId was null or undefined when calling listMembers.');
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (pageReverse !== null && pageReverse !== undefined) {
                localVarQueryParameter['page_reverse'] = pageReverse;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (weight !== null && weight !== undefined) {
                localVarQueryParameter['weight'] = weight;
            }
            if (adminStateUp !== null && adminStateUp !== undefined) {
                localVarQueryParameter['admin_state_up'] = adminStateUp;
            }
            if (subnetCidrId !== null && subnetCidrId !== undefined) {
                localVarQueryParameter['subnet_cidr_id'] = subnetCidrId;
            }
            if (address !== null && address !== undefined) {
                localVarQueryParameter['address'] = address;
            }
            if (protocolPort !== null && protocolPort !== undefined) {
                localVarQueryParameter['protocol_port'] = protocolPort;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (operatingStatus !== null && operatingStatus !== undefined) {
                localVarQueryParameter['operating_status'] = operatingStatus;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (ipVersion !== null && ipVersion !== undefined) {
                localVarQueryParameter['ip_version'] = ipVersion;
            }
            if (memberType !== null && memberType !== undefined) {
                localVarQueryParameter['member_type'] = memberType;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'pool_id': poolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 后端服务器组列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPools(listPoolsRequest?: ListPoolsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/elb/pools",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let marker;
            
            let limit;
            
            let pageReverse;
            
            let description;
            
            let adminStateUp;
            
            let healthmonitorId;
            
            let id;
            
            let name;
            
            let loadbalancerId;
            
            let protocol;
            
            let lbAlgorithm;
            
            let enterpriseProjectId;
            
            let ipVersion;
            
            let memberAddress;
            
            let memberDeviceId;
            
            let memberDeletionProtectionEnable;
            
            let listenerId;
            
            let memberInstanceId;
            
            let vpcId;
            
            let type;
            
            let protectionStatus;
            
            let connectionDrain;
            
            let poolHealth;
            
            let anyPortEnable;
            
            let publicBorderGroup;

            if (listPoolsRequest !== null && listPoolsRequest !== undefined) {
                if (listPoolsRequest instanceof ListPoolsRequest) {
                    marker = listPoolsRequest.marker;
                    limit = listPoolsRequest.limit;
                    pageReverse = listPoolsRequest.pageReverse;
                    description = listPoolsRequest.description;
                    adminStateUp = listPoolsRequest.adminStateUp;
                    healthmonitorId = listPoolsRequest.healthmonitorId;
                    id = listPoolsRequest.id;
                    name = listPoolsRequest.name;
                    loadbalancerId = listPoolsRequest.loadbalancerId;
                    protocol = listPoolsRequest.protocol;
                    lbAlgorithm = listPoolsRequest.lbAlgorithm;
                    enterpriseProjectId = listPoolsRequest.enterpriseProjectId;
                    ipVersion = listPoolsRequest.ipVersion;
                    memberAddress = listPoolsRequest.memberAddress;
                    memberDeviceId = listPoolsRequest.memberDeviceId;
                    memberDeletionProtectionEnable = listPoolsRequest.memberDeletionProtectionEnable;
                    listenerId = listPoolsRequest.listenerId;
                    memberInstanceId = listPoolsRequest.memberInstanceId;
                    vpcId = listPoolsRequest.vpcId;
                    type = listPoolsRequest.type;
                    protectionStatus = listPoolsRequest.protectionStatus;
                    connectionDrain = listPoolsRequest.connectionDrain;
                    poolHealth = listPoolsRequest.poolHealth;
                    anyPortEnable = listPoolsRequest.anyPortEnable;
                    publicBorderGroup = listPoolsRequest.publicBorderGroup;
                } else {
                    marker = listPoolsRequest['marker'];
                    limit = listPoolsRequest['limit'];
                    pageReverse = listPoolsRequest['page_reverse'];
                    description = listPoolsRequest['description'];
                    adminStateUp = listPoolsRequest['admin_state_up'];
                    healthmonitorId = listPoolsRequest['healthmonitor_id'];
                    id = listPoolsRequest['id'];
                    name = listPoolsRequest['name'];
                    loadbalancerId = listPoolsRequest['loadbalancer_id'];
                    protocol = listPoolsRequest['protocol'];
                    lbAlgorithm = listPoolsRequest['lb_algorithm'];
                    enterpriseProjectId = listPoolsRequest['enterprise_project_id'];
                    ipVersion = listPoolsRequest['ip_version'];
                    memberAddress = listPoolsRequest['member_address'];
                    memberDeviceId = listPoolsRequest['member_device_id'];
                    memberDeletionProtectionEnable = listPoolsRequest['member_deletion_protection_enable'];
                    listenerId = listPoolsRequest['listener_id'];
                    memberInstanceId = listPoolsRequest['member_instance_id'];
                    vpcId = listPoolsRequest['vpc_id'];
                    type = listPoolsRequest['type'];
                    protectionStatus = listPoolsRequest['protection_status'];
                    connectionDrain = listPoolsRequest['connection_drain'];
                    poolHealth = listPoolsRequest['pool_health'];
                    anyPortEnable = listPoolsRequest['any_port_enable'];
                    publicBorderGroup = listPoolsRequest['public_border_group'];
                }
            }

        
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (pageReverse !== null && pageReverse !== undefined) {
                localVarQueryParameter['page_reverse'] = pageReverse;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (adminStateUp !== null && adminStateUp !== undefined) {
                localVarQueryParameter['admin_state_up'] = adminStateUp;
            }
            if (healthmonitorId !== null && healthmonitorId !== undefined) {
                localVarQueryParameter['healthmonitor_id'] = healthmonitorId;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
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
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (ipVersion !== null && ipVersion !== undefined) {
                localVarQueryParameter['ip_version'] = ipVersion;
            }
            if (memberAddress !== null && memberAddress !== undefined) {
                localVarQueryParameter['member_address'] = memberAddress;
            }
            if (memberDeviceId !== null && memberDeviceId !== undefined) {
                localVarQueryParameter['member_device_id'] = memberDeviceId;
            }
            if (memberDeletionProtectionEnable !== null && memberDeletionProtectionEnable !== undefined) {
                localVarQueryParameter['member_deletion_protection_enable'] = memberDeletionProtectionEnable;
            }
            if (listenerId !== null && listenerId !== undefined) {
                localVarQueryParameter['listener_id'] = listenerId;
            }
            if (memberInstanceId !== null && memberInstanceId !== undefined) {
                localVarQueryParameter['member_instance_id'] = memberInstanceId;
            }
            if (vpcId !== null && vpcId !== undefined) {
                localVarQueryParameter['vpc_id'] = vpcId;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (protectionStatus !== null && protectionStatus !== undefined) {
                localVarQueryParameter['protection_status'] = protectionStatus;
            }
            if (connectionDrain !== null && connectionDrain !== undefined) {
                localVarQueryParameter['connection_drain'] = connectionDrain;
            }
            if (poolHealth !== null && poolHealth !== undefined) {
                localVarQueryParameter['pool_health'] = poolHealth;
            }
            if (anyPortEnable !== null && anyPortEnable !== undefined) {
                localVarQueryParameter['any_port_enable'] = anyPortEnable;
            }
            if (publicBorderGroup !== null && publicBorderGroup !== undefined) {
                localVarQueryParameter['public_border_group'] = publicBorderGroup;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定项目中负载均衡相关的各类资源的当前配额和已使用配额信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listQuotaDetails(listQuotaDetailsRequest?: ListQuotaDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/elb/quotas/details",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let quotaKey;

            if (listQuotaDetailsRequest !== null && listQuotaDetailsRequest !== undefined) {
                if (listQuotaDetailsRequest instanceof ListQuotaDetailsRequest) {
                    quotaKey = listQuotaDetailsRequest.quotaKey;
                } else {
                    quotaKey = listQuotaDetailsRequest['quota_key'];
                }
            }

        
            if (quotaKey !== null && quotaKey !== undefined) {
                localVarQueryParameter['quota_key'] = quotaKey;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询自定义安全策略列表。[荷兰region不支持自定义安全策略功能，请勿使用。](tag:dt,dt_test)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSecurityPolicies(listSecurityPoliciesRequest?: ListSecurityPoliciesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/elb/security-policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let marker;
            
            let limit;
            
            let pageReverse;
            
            let id;
            
            let name;
            
            let description;
            
            let protocols;
            
            let ciphers;

            if (listSecurityPoliciesRequest !== null && listSecurityPoliciesRequest !== undefined) {
                if (listSecurityPoliciesRequest instanceof ListSecurityPoliciesRequest) {
                    marker = listSecurityPoliciesRequest.marker;
                    limit = listSecurityPoliciesRequest.limit;
                    pageReverse = listSecurityPoliciesRequest.pageReverse;
                    id = listSecurityPoliciesRequest.id;
                    name = listSecurityPoliciesRequest.name;
                    description = listSecurityPoliciesRequest.description;
                    protocols = listSecurityPoliciesRequest.protocols;
                    ciphers = listSecurityPoliciesRequest.ciphers;
                } else {
                    marker = listSecurityPoliciesRequest['marker'];
                    limit = listSecurityPoliciesRequest['limit'];
                    pageReverse = listSecurityPoliciesRequest['page_reverse'];
                    id = listSecurityPoliciesRequest['id'];
                    name = listSecurityPoliciesRequest['name'];
                    description = listSecurityPoliciesRequest['description'];
                    protocols = listSecurityPoliciesRequest['protocols'];
                    ciphers = listSecurityPoliciesRequest['ciphers'];
                }
            }

        
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
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
            if (protocols !== null && protocols !== undefined) {
                localVarQueryParameter['protocols'] = protocols;
            }
            if (ciphers !== null && ciphers !== undefined) {
                localVarQueryParameter['ciphers'] = ciphers;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询系统安全策略列表。
         * 
         * 系统安全策略为预置的所有租户通用的安全策略，租户不可新增或修改。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSystemSecurityPolicies() {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/elb/system-security-policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询证书详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCertificate(showCertificateRequest?: ShowCertificateRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/elb/certificates/{certificate_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * 查询证书私钥回显开关当前的状态，开启或关闭。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCertificatePrivateKeyEcho() {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/elb/certificates/settings/private-key-echo",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询规格的详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showFlavor(showFlavorRequest?: ShowFlavorRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/elb/flavors/{flavor_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let flavorId;

            if (showFlavorRequest !== null && showFlavorRequest !== undefined) {
                if (showFlavorRequest instanceof ShowFlavorRequest) {
                    flavorId = showFlavorRequest.flavorId;
                } else {
                    flavorId = showFlavorRequest['flavor_id'];
                }
            }

        
            if (flavorId === null || flavorId === undefined) {
            throw new RequiredError('flavorId','Required parameter flavorId was null or undefined when calling showFlavor.');
            }

            options.pathParams = { 'flavor_id': flavorId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询健康检查详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showHealthMonitor(showHealthMonitorRequest?: ShowHealthMonitorRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/elb/healthmonitors/{healthmonitor_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let healthmonitorId;

            if (showHealthMonitorRequest !== null && showHealthMonitorRequest !== undefined) {
                if (showHealthMonitorRequest instanceof ShowHealthMonitorRequest) {
                    healthmonitorId = showHealthMonitorRequest.healthmonitorId;
                } else {
                    healthmonitorId = showHealthMonitorRequest['healthmonitor_id'];
                }
            }

        
            if (healthmonitorId === null || healthmonitorId === undefined) {
            throw new RequiredError('healthmonitorId','Required parameter healthmonitorId was null or undefined when calling showHealthMonitor.');
            }

            options.pathParams = { 'healthmonitor_id': healthmonitorId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询七层转发策略详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showL7Policy(showL7PolicyRequest?: ShowL7PolicyRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/elb/l7policies/{l7policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let l7policyId;

            if (showL7PolicyRequest !== null && showL7PolicyRequest !== undefined) {
                if (showL7PolicyRequest instanceof ShowL7PolicyRequest) {
                    l7policyId = showL7PolicyRequest.l7policyId;
                } else {
                    l7policyId = showL7PolicyRequest['l7policy_id'];
                }
            }

        
            if (l7policyId === null || l7policyId === undefined) {
            throw new RequiredError('l7policyId','Required parameter l7policyId was null or undefined when calling showL7Policy.');
            }

            options.pathParams = { 'l7policy_id': l7policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询七层转发规则详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showL7Rule(showL7RuleRequest?: ShowL7RuleRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/elb/l7policies/{l7policy_id}/rules/{l7rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let l7policyId;
            
            let l7ruleId;

            if (showL7RuleRequest !== null && showL7RuleRequest !== undefined) {
                if (showL7RuleRequest instanceof ShowL7RuleRequest) {
                    l7policyId = showL7RuleRequest.l7policyId;
                    l7ruleId = showL7RuleRequest.l7ruleId;
                } else {
                    l7policyId = showL7RuleRequest['l7policy_id'];
                    l7ruleId = showL7RuleRequest['l7rule_id'];
                }
            }

        
            if (l7policyId === null || l7policyId === undefined) {
            throw new RequiredError('l7policyId','Required parameter l7policyId was null or undefined when calling showL7Rule.');
            }
            if (l7ruleId === null || l7ruleId === undefined) {
            throw new RequiredError('l7ruleId','Required parameter l7ruleId was null or undefined when calling showL7Rule.');
            }

            options.pathParams = { 'l7policy_id': l7policyId,'l7rule_id': l7ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 监听器详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showListener(showListenerRequest?: ShowListenerRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/elb/listeners/{listener_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * 查询负载均衡器详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showLoadBalancer(showLoadBalancerRequest?: ShowLoadBalancerRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/elb/loadbalancers/{loadbalancer_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let loadbalancerId;

            if (showLoadBalancerRequest !== null && showLoadBalancerRequest !== undefined) {
                if (showLoadBalancerRequest instanceof ShowLoadBalancerRequest) {
                    loadbalancerId = showLoadBalancerRequest.loadbalancerId;
                } else {
                    loadbalancerId = showLoadBalancerRequest['loadbalancer_id'];
                }
            }

        
            if (loadbalancerId === null || loadbalancerId === undefined) {
            throw new RequiredError('loadbalancerId','Required parameter loadbalancerId was null or undefined when calling showLoadBalancer.');
            }

            options.pathParams = { 'loadbalancer_id': loadbalancerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询负载均衡器状态树，包括负载均衡器及其关联的子资源的状态信息。
         * 注意：该接口中的operating_status不一定与对应资源的operating_status相同。
         * 如：当Member的admin_state_up&#x3D;false且operating_status&#x3D;OFFLINE时，
         * 该接口返回member的operating_status&#x3D;DISABLE。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showLoadBalancerStatus(showLoadBalancerStatusRequest?: ShowLoadBalancerStatusRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/elb/loadbalancers/{loadbalancer_id}/statuses",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let loadbalancerId;

            if (showLoadBalancerStatusRequest !== null && showLoadBalancerStatusRequest !== undefined) {
                if (showLoadBalancerStatusRequest instanceof ShowLoadBalancerStatusRequest) {
                    loadbalancerId = showLoadBalancerStatusRequest.loadbalancerId;
                } else {
                    loadbalancerId = showLoadBalancerStatusRequest['loadbalancer_id'];
                }
            }

        
            if (loadbalancerId === null || loadbalancerId === undefined) {
            throw new RequiredError('loadbalancerId','Required parameter loadbalancerId was null or undefined when calling showLoadBalancerStatus.');
            }

            options.pathParams = { 'loadbalancer_id': loadbalancerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 云日志详情。[荷兰region不支持云日志功能，请勿使用。](tag:dt,dt_test)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showLogtank(showLogtankRequest?: ShowLogtankRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/elb/logtanks/{logtank_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let logtankId;

            if (showLogtankRequest !== null && showLogtankRequest !== undefined) {
                if (showLogtankRequest instanceof ShowLogtankRequest) {
                    logtankId = showLogtankRequest.logtankId;
                } else {
                    logtankId = showLogtankRequest['logtank_id'];
                }
            }

        
            if (logtankId === null || logtankId === undefined) {
            throw new RequiredError('logtankId','Required parameter logtankId was null or undefined when calling showLogtank.');
            }

            options.pathParams = { 'logtank_id': logtankId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 主备后端服务器组详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMasterSlavePool(showMasterSlavePoolRequest?: ShowMasterSlavePoolRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/elb/master-slave-pools/{pool_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let poolId;

            if (showMasterSlavePoolRequest !== null && showMasterSlavePoolRequest !== undefined) {
                if (showMasterSlavePoolRequest instanceof ShowMasterSlavePoolRequest) {
                    poolId = showMasterSlavePoolRequest.poolId;
                } else {
                    poolId = showMasterSlavePoolRequest['pool_id'];
                }
            }

        
            if (poolId === null || poolId === undefined) {
            throw new RequiredError('poolId','Required parameter poolId was null or undefined when calling showMasterSlavePool.');
            }

            options.pathParams = { 'pool_id': poolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 后端服务器详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMember(showMemberRequest?: ShowMemberRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/elb/pools/{pool_id}/members/{member_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * 后端服务器组详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPool(showPoolRequest?: ShowPoolRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/elb/pools/{pool_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * 查询指定项目中负载均衡相关的各类资源的当前配额。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showQuota() {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/elb/quotas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询自定义安全策略详情。[荷兰region不支持自定义安全策略功能，请勿使用。](tag:dt,dt_test)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSecurityPolicy(showSecurityPolicyRequest?: ShowSecurityPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/elb/security-policies/{security_policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let securityPolicyId;

            if (showSecurityPolicyRequest !== null && showSecurityPolicyRequest !== undefined) {
                if (showSecurityPolicyRequest instanceof ShowSecurityPolicyRequest) {
                    securityPolicyId = showSecurityPolicyRequest.securityPolicyId;
                } else {
                    securityPolicyId = showSecurityPolicyRequest['security_policy_id'];
                }
            }

        
            if (securityPolicyId === null || securityPolicyId === undefined) {
            throw new RequiredError('securityPolicyId','Required parameter securityPolicyId was null or undefined when calling showSecurityPolicy.');
            }

            options.pathParams = { 'security_policy_id': securityPolicyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新证书。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateCertificate(updateCertificateRequest?: UpdateCertificateRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/elb/certificates/{certificate_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
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
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'certificate_id': certificateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新健康检查。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateHealthMonitor(updateHealthMonitorRequest?: UpdateHealthMonitorRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/elb/healthmonitors/{healthmonitor_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let healthmonitorId;

            if (updateHealthMonitorRequest !== null && updateHealthMonitorRequest !== undefined) {
                if (updateHealthMonitorRequest instanceof UpdateHealthMonitorRequest) {
                    healthmonitorId = updateHealthMonitorRequest.healthmonitorId;
                    body = updateHealthMonitorRequest.body
                } else {
                    healthmonitorId = updateHealthMonitorRequest['healthmonitor_id'];
                    body = updateHealthMonitorRequest['body'];
                }
            }

        
            if (healthmonitorId === null || healthmonitorId === undefined) {
            throw new RequiredError('healthmonitorId','Required parameter healthmonitorId was null or undefined when calling updateHealthMonitor.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'healthmonitor_id': healthmonitorId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新七层转发策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateL7Policy(updateL7PolicyRequest?: UpdateL7PolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/elb/l7policies/{l7policy_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let l7policyId;

            if (updateL7PolicyRequest !== null && updateL7PolicyRequest !== undefined) {
                if (updateL7PolicyRequest instanceof UpdateL7PolicyRequest) {
                    l7policyId = updateL7PolicyRequest.l7policyId;
                    body = updateL7PolicyRequest.body
                } else {
                    l7policyId = updateL7PolicyRequest['l7policy_id'];
                    body = updateL7PolicyRequest['body'];
                }
            }

        
            if (l7policyId === null || l7policyId === undefined) {
            throw new RequiredError('l7policyId','Required parameter l7policyId was null or undefined when calling updateL7Policy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'l7policy_id': l7policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新七层转发规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateL7Rule(updateL7RuleRequest?: UpdateL7RuleRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/elb/l7policies/{l7policy_id}/rules/{l7rule_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let l7policyId;
            
            let l7ruleId;

            if (updateL7RuleRequest !== null && updateL7RuleRequest !== undefined) {
                if (updateL7RuleRequest instanceof UpdateL7RuleRequest) {
                    l7policyId = updateL7RuleRequest.l7policyId;
                    l7ruleId = updateL7RuleRequest.l7ruleId;
                    body = updateL7RuleRequest.body
                } else {
                    l7policyId = updateL7RuleRequest['l7policy_id'];
                    l7ruleId = updateL7RuleRequest['l7rule_id'];
                    body = updateL7RuleRequest['body'];
                }
            }

        
            if (l7policyId === null || l7policyId === undefined) {
            throw new RequiredError('l7policyId','Required parameter l7policyId was null or undefined when calling updateL7Rule.');
            }
            if (l7ruleId === null || l7ruleId === undefined) {
            throw new RequiredError('l7ruleId','Required parameter l7ruleId was null or undefined when calling updateL7Rule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

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
                url: "/v3/{project_id}/elb/listeners/{listener_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
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
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

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
        updateLoadBalancer(updateLoadBalancerRequest?: UpdateLoadBalancerRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/elb/loadbalancers/{loadbalancer_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let loadbalancerId;

            if (updateLoadBalancerRequest !== null && updateLoadBalancerRequest !== undefined) {
                if (updateLoadBalancerRequest instanceof UpdateLoadBalancerRequest) {
                    loadbalancerId = updateLoadBalancerRequest.loadbalancerId;
                    body = updateLoadBalancerRequest.body
                } else {
                    loadbalancerId = updateLoadBalancerRequest['loadbalancer_id'];
                    body = updateLoadBalancerRequest['body'];
                }
            }

        
            if (loadbalancerId === null || loadbalancerId === undefined) {
            throw new RequiredError('loadbalancerId','Required parameter loadbalancerId was null or undefined when calling updateLoadBalancer.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'loadbalancer_id': loadbalancerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新云日志。[荷兰region不支持云日志功能，请勿使用。](tag:dt,dt_test)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateLogtank(updateLogtankRequest?: UpdateLogtankRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/elb/logtanks/{logtank_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let logtankId;

            if (updateLogtankRequest !== null && updateLogtankRequest !== undefined) {
                if (updateLogtankRequest instanceof UpdateLogtankRequest) {
                    logtankId = updateLogtankRequest.logtankId;
                    body = updateLogtankRequest.body
                } else {
                    logtankId = updateLogtankRequest['logtank_id'];
                    body = updateLogtankRequest['body'];
                }
            }

        
            if (logtankId === null || logtankId === undefined) {
            throw new RequiredError('logtankId','Required parameter logtankId was null or undefined when calling updateLogtank.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'logtank_id': logtankId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新后端服务器。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateMember(updateMemberRequest?: UpdateMemberRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/elb/pools/{pool_id}/members/{member_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
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
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'member_id': memberId,'pool_id': poolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新后端服务器组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePool(updatePoolRequest?: UpdatePoolRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/elb/pools/{pool_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
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
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'pool_id': poolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新自定义安全策略。[荷兰region不支持自定义安全策略功能，请勿使用。](tag:dt,dt_test)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSecurityPolicy(updateSecurityPolicyRequest?: UpdateSecurityPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/elb/security-policies/{security_policy_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let securityPolicyId;

            if (updateSecurityPolicyRequest !== null && updateSecurityPolicyRequest !== undefined) {
                if (updateSecurityPolicyRequest instanceof UpdateSecurityPolicyRequest) {
                    securityPolicyId = updateSecurityPolicyRequest.securityPolicyId;
                    body = updateSecurityPolicyRequest.body
                } else {
                    securityPolicyId = updateSecurityPolicyRequest['security_policy_id'];
                    body = updateSecurityPolicyRequest['body'];
                }
            }

        
            if (securityPolicyId === null || securityPolicyId === undefined) {
            throw new RequiredError('securityPolicyId','Required parameter securityPolicyId was null or undefined when calling updateSecurityPolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'security_policy_id': securityPolicyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 返回ELB当前所有可用的API版本。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApiVersions() {
            const options = {
                method: "GET",
                url: "/versions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除IP地址组的IP列表信息。[荷兰region不支持该API](tag:dt,dt_test)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteIpList(batchDeleteIpListRequest?: BatchDeleteIpListRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/elb/ipgroups/{ipgroup_id}/iplist/batch-delete",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let ipgroupId;

            if (batchDeleteIpListRequest !== null && batchDeleteIpListRequest !== undefined) {
                if (batchDeleteIpListRequest instanceof BatchDeleteIpListRequest) {
                    ipgroupId = batchDeleteIpListRequest.ipgroupId;
                    body = batchDeleteIpListRequest.body
                } else {
                    ipgroupId = batchDeleteIpListRequest['ipgroup_id'];
                    body = batchDeleteIpListRequest['body'];
                }
            }

        
            if (ipgroupId === null || ipgroupId === undefined) {
            throw new RequiredError('ipgroupId','Required parameter ipgroupId was null or undefined when calling batchDeleteIpList.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'ipgroup_id': ipgroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 计算以下几种场景的预占用IP数量：
         * 
         * - 计算创建LB的第一个七层监听器后总占用IP数量：
         * 传入loadbalancer_id、l7_flavor_id为空、ip_target_enable不传或为false。
         * 
         * - 计算LB规格变更或开启跨VPC后总占用IP数量：
         * 传入参数loadbalancer_id，及l7_flavor_id不为空或ip_target_enable为true。
         * 
         * - 计算创建LB所需IP数量：传入参数availability_zone_id，
         * 及可选参数l7_flavor_id、ip_target_enable、ip_version，不能传loadbalancer_id。
         * 
         * 说明：
         * - 计算出来的预占IP数大于等于最终实际占用的IP数。
         * - 总占用IP数量，即整个LB所占用的IP数量。
         * 
         * [不支持传入l7_flavor_id](tag:hcso,hk_vdf,fcs,fcs_vm,mix,hcso_g42,hcso_g42_b)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        countPreoccupyIpNum(countPreoccupyIpNumRequest?: CountPreoccupyIpNumRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/elb/preoccupy-ip-num",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let l7FlavorId;
            
            let ipTargetEnable;
            
            let ipVersion;
            
            let loadbalancerId;
            
            let availabilityZoneId;

            if (countPreoccupyIpNumRequest !== null && countPreoccupyIpNumRequest !== undefined) {
                if (countPreoccupyIpNumRequest instanceof CountPreoccupyIpNumRequest) {
                    l7FlavorId = countPreoccupyIpNumRequest.l7FlavorId;
                    ipTargetEnable = countPreoccupyIpNumRequest.ipTargetEnable;
                    ipVersion = countPreoccupyIpNumRequest.ipVersion;
                    loadbalancerId = countPreoccupyIpNumRequest.loadbalancerId;
                    availabilityZoneId = countPreoccupyIpNumRequest.availabilityZoneId;
                } else {
                    l7FlavorId = countPreoccupyIpNumRequest['l7_flavor_id'];
                    ipTargetEnable = countPreoccupyIpNumRequest['ip_target_enable'];
                    ipVersion = countPreoccupyIpNumRequest['ip_version'];
                    loadbalancerId = countPreoccupyIpNumRequest['loadbalancer_id'];
                    availabilityZoneId = countPreoccupyIpNumRequest['availability_zone_id'];
                }
            }

        
            if (l7FlavorId !== null && l7FlavorId !== undefined) {
                localVarQueryParameter['l7_flavor_id'] = l7FlavorId;
            }
            if (ipTargetEnable !== null && ipTargetEnable !== undefined) {
                localVarQueryParameter['ip_target_enable'] = ipTargetEnable;
            }
            if (ipVersion !== null && ipVersion !== undefined) {
                localVarQueryParameter['ip_version'] = ipVersion;
            }
            if (loadbalancerId !== null && loadbalancerId !== undefined) {
                localVarQueryParameter['loadbalancer_id'] = loadbalancerId;
            }
            if (availabilityZoneId !== null && availabilityZoneId !== undefined) {
                localVarQueryParameter['availability_zone_id'] = availabilityZoneId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建IP地址组。输入的ip可为ip地址或者CIDR子网，支持IPV4和IPV6。
         * 
         * 需要注意0.0.0.0与0.0.0.0/32视为重复，0:0:0:0:0:0:0:1与::1与::1/128视为重复，只会保存其中一个。
         * 
         * [荷兰region不支持IP地址组功能，请勿使用。](tag:dt,dt_test)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createIpGroup(createIpGroupRequest?: CreateIpGroupRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/elb/ipgroups",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createIpGroupRequest !== null && createIpGroupRequest !== undefined) {
                if (createIpGroupRequest instanceof CreateIpGroupRequest) {
                    body = createIpGroupRequest.body
                } else {
                    body = createIpGroupRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除ip地址组。[荷兰region不支持IP地址组功能，请勿使用。](tag:dt,dt_test)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteIpGroup(deleteIpGroupRequest?: DeleteIpGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/elb/ipgroups/{ipgroup_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let ipgroupId;

            if (deleteIpGroupRequest !== null && deleteIpGroupRequest !== undefined) {
                if (deleteIpGroupRequest instanceof DeleteIpGroupRequest) {
                    ipgroupId = deleteIpGroupRequest.ipgroupId;
                } else {
                    ipgroupId = deleteIpGroupRequest['ipgroup_id'];
                }
            }

        
            if (ipgroupId === null || ipgroupId === undefined) {
            throw new RequiredError('ipgroupId','Required parameter ipgroupId was null or undefined when calling deleteIpGroup.');
            }

            options.pathParams = { 'ipgroup_id': ipgroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询IP地址组列表。[荷兰region不支持IP地址组功能，请勿使用。](tag:dt,dt_test)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listIpGroups(listIpGroupsRequest?: ListIpGroupsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/elb/ipgroups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let marker;
            
            let limit;
            
            let pageReverse;
            
            let id;
            
            let name;
            
            let description;
            
            let ipList;
            
            let enterpriseProjectId;

            if (listIpGroupsRequest !== null && listIpGroupsRequest !== undefined) {
                if (listIpGroupsRequest instanceof ListIpGroupsRequest) {
                    marker = listIpGroupsRequest.marker;
                    limit = listIpGroupsRequest.limit;
                    pageReverse = listIpGroupsRequest.pageReverse;
                    id = listIpGroupsRequest.id;
                    name = listIpGroupsRequest.name;
                    description = listIpGroupsRequest.description;
                    ipList = listIpGroupsRequest.ipList;
                    enterpriseProjectId = listIpGroupsRequest.enterpriseProjectId;
                } else {
                    marker = listIpGroupsRequest['marker'];
                    limit = listIpGroupsRequest['limit'];
                    pageReverse = listIpGroupsRequest['page_reverse'];
                    id = listIpGroupsRequest['id'];
                    name = listIpGroupsRequest['name'];
                    description = listIpGroupsRequest['description'];
                    ipList = listIpGroupsRequest['ip_list'];
                    enterpriseProjectId = listIpGroupsRequest['enterprise_project_id'];
                }
            }

        
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
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
            if (ipList !== null && ipList !== undefined) {
                localVarQueryParameter['ip_list'] = ipList;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取IP地址组详情。[荷兰region不支持IP地址组功能，请勿使用。](tag:dt,dt_test)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showIpGroup(showIpGroupRequest?: ShowIpGroupRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/elb/ipgroups/{ipgroup_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let ipgroupId;

            if (showIpGroupRequest !== null && showIpGroupRequest !== undefined) {
                if (showIpGroupRequest instanceof ShowIpGroupRequest) {
                    ipgroupId = showIpGroupRequest.ipgroupId;
                } else {
                    ipgroupId = showIpGroupRequest['ipgroup_id'];
                }
            }

        
            if (ipgroupId === null || ipgroupId === undefined) {
            throw new RequiredError('ipgroupId','Required parameter ipgroupId was null or undefined when calling showIpGroup.');
            }

            options.pathParams = { 'ipgroup_id': ipgroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新IP地址组，只支持全量更新IP。即IP地址组中的ip_list将被全量覆盖，不在请求参数中的IP地址将被移除。
         * 输入的ip可为ip地址或者CIDR子网，支持IPV4和IPV6。
         * 
         * 需要注意0.0.0.0与0.0.0.0/32视为重复，0:0:0:0:0:0:0:1与::1与::1/128视为重复，只会保存其中一个。
         * 
         * [荷兰region不支持IP地址组功能，请勿使用。](tag:dt,dt_test)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateIpGroup(updateIpGroupRequest?: UpdateIpGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/elb/ipgroups/{ipgroup_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let ipgroupId;

            if (updateIpGroupRequest !== null && updateIpGroupRequest !== undefined) {
                if (updateIpGroupRequest instanceof UpdateIpGroupRequest) {
                    ipgroupId = updateIpGroupRequest.ipgroupId;
                    body = updateIpGroupRequest.body
                } else {
                    ipgroupId = updateIpGroupRequest['ipgroup_id'];
                    body = updateIpGroupRequest['body'];
                }
            }

        
            if (ipgroupId === null || ipgroupId === undefined) {
            throw new RequiredError('ipgroupId','Required parameter ipgroupId was null or undefined when calling updateIpGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'ipgroup_id': ipgroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加新的IP地址到IP地址组的IP列表信息，或更新已有IP地址的描述。[荷兰region不支持该API](tag:dt,dt_test)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateIpList(updateIpListRequest?: UpdateIpListRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/elb/ipgroups/{ipgroup_id}/iplist/create-or-update",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let ipgroupId;

            if (updateIpListRequest !== null && updateIpListRequest !== undefined) {
                if (updateIpListRequest instanceof UpdateIpListRequest) {
                    ipgroupId = updateIpListRequest.ipgroupId;
                    body = updateIpListRequest.body
                } else {
                    ipgroupId = updateIpListRequest['ipgroup_id'];
                    body = updateIpListRequest['body'];
                }
            }

        
            if (ipgroupId === null || ipgroupId === undefined) {
            throw new RequiredError('ipgroupId','Required parameter ipgroupId was null or undefined when calling updateIpList.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'ipgroup_id': ipgroupId, };
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