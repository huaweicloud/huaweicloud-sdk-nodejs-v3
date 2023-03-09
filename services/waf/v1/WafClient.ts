import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AccessProgress } from './model/AccessProgress';
import { Action } from './model/Action';
import { Advanced } from './model/Advanced';
import { AlertNoticeConfigResponse } from './model/AlertNoticeConfigResponse';
import { AlterWafProductInfo } from './model/AlterWafProductInfo';
import { AntiTamperRuleResponseBody } from './model/AntiTamperRuleResponseBody';
import { ApplyCertificateToHostRequest } from './model/ApplyCertificateToHostRequest';
import { ApplyCertificateToHostRequestBody } from './model/ApplyCertificateToHostRequestBody';
import { ApplyCertificateToHostResponse } from './model/ApplyCertificateToHostResponse';
import { AttackTypeClassificationItem } from './model/AttackTypeClassificationItem';
import { AttackTypeItem } from './model/AttackTypeItem';
import { BandwidthStatisticsTimelineItem } from './model/BandwidthStatisticsTimelineItem';
import { BindHost } from './model/BindHost';
import { BlockPage } from './model/BlockPage';
import { CertificateBody } from './model/CertificateBody';
import { CertificateBundingHostBody } from './model/CertificateBundingHostBody';
import { ChangePrepaidCloudWafRequest } from './model/ChangePrepaidCloudWafRequest';
import { ChangePrepaidCloudWafRequestBody } from './model/ChangePrepaidCloudWafRequestBody';
import { ChangePrepaidCloudWafResponse } from './model/ChangePrepaidCloudWafResponse';
import { CircuitBreaker } from './model/CircuitBreaker';
import { CloudWafHostItem } from './model/CloudWafHostItem';
import { CloudWafServer } from './model/CloudWafServer';
import { CompositeHostResponse } from './model/CompositeHostResponse';
import { Condition } from './model/Condition';
import { CountItem } from './model/CountItem';
import { CreateAntiTamperRuleRequest } from './model/CreateAntiTamperRuleRequest';
import { CreateAntiTamperRuleResponse } from './model/CreateAntiTamperRuleResponse';
import { CreateAntiTamperRulesRequestBody } from './model/CreateAntiTamperRulesRequestBody';
import { CreateCertificateRequest } from './model/CreateCertificateRequest';
import { CreateCertificateRequestBody } from './model/CreateCertificateRequestBody';
import { CreateCertificateResponse } from './model/CreateCertificateResponse';
import { CreateCondition } from './model/CreateCondition';
import { CreateGeoIpRuleRequestBody } from './model/CreateGeoIpRuleRequestBody';
import { CreateGeoipRuleRequest } from './model/CreateGeoipRuleRequest';
import { CreateGeoipRuleResponse } from './model/CreateGeoipRuleResponse';
import { CreateHostRequest } from './model/CreateHostRequest';
import { CreateHostRequestBody } from './model/CreateHostRequestBody';
import { CreateHostResponse } from './model/CreateHostResponse';
import { CreateIgnoreRuleRequest } from './model/CreateIgnoreRuleRequest';
import { CreateIgnoreRuleRequestBody } from './model/CreateIgnoreRuleRequestBody';
import { CreateIgnoreRuleResponse } from './model/CreateIgnoreRuleResponse';
import { CreateInstanceRequest } from './model/CreateInstanceRequest';
import { CreateInstanceRequestBody } from './model/CreateInstanceRequestBody';
import { CreateInstanceResponse } from './model/CreateInstanceResponse';
import { CreateIpGroupRequest } from './model/CreateIpGroupRequest';
import { CreateIpGroupRequestBody } from './model/CreateIpGroupRequestBody';
import { CreateIpGroupResponse } from './model/CreateIpGroupResponse';
import { CreatePolicyRequest } from './model/CreatePolicyRequest';
import { CreatePolicyRequestBody } from './model/CreatePolicyRequestBody';
import { CreatePolicyResponse } from './model/CreatePolicyResponse';
import { CreatePremiumHostRequest } from './model/CreatePremiumHostRequest';
import { CreatePremiumHostRequestBody } from './model/CreatePremiumHostRequestBody';
import { CreatePremiumHostResponse } from './model/CreatePremiumHostResponse';
import { CreatePrepaidCloudWafRequest } from './model/CreatePrepaidCloudWafRequest';
import { CreatePrepaidCloudWafRequestBody } from './model/CreatePrepaidCloudWafRequestBody';
import { CreatePrepaidCloudWafResponse } from './model/CreatePrepaidCloudWafResponse';
import { CreatePrivacyRuleRequest } from './model/CreatePrivacyRuleRequest';
import { CreatePrivacyRuleRequestBody } from './model/CreatePrivacyRuleRequestBody';
import { CreatePrivacyRuleResponse } from './model/CreatePrivacyRuleResponse';
import { CreateValueListRequest } from './model/CreateValueListRequest';
import { CreateValueListRequestBody } from './model/CreateValueListRequestBody';
import { CreateValueListResponse } from './model/CreateValueListResponse';
import { CreateWhiteBlackIpRuleRequestBody } from './model/CreateWhiteBlackIpRuleRequestBody';
import { CreateWhiteblackipRuleRequest } from './model/CreateWhiteblackipRuleRequest';
import { CreateWhiteblackipRuleResponse } from './model/CreateWhiteblackipRuleResponse';
import { CustomPage } from './model/CustomPage';
import { DeleteAntitamperRuleRequest } from './model/DeleteAntitamperRuleRequest';
import { DeleteAntitamperRuleResponse } from './model/DeleteAntitamperRuleResponse';
import { DeleteCertificateRequest } from './model/DeleteCertificateRequest';
import { DeleteCertificateResponse } from './model/DeleteCertificateResponse';
import { DeleteGeoipRuleRequest } from './model/DeleteGeoipRuleRequest';
import { DeleteGeoipRuleResponse } from './model/DeleteGeoipRuleResponse';
import { DeleteHostRequest } from './model/DeleteHostRequest';
import { DeleteHostResponse } from './model/DeleteHostResponse';
import { DeleteIgnoreRuleRequest } from './model/DeleteIgnoreRuleRequest';
import { DeleteIgnoreRuleResponse } from './model/DeleteIgnoreRuleResponse';
import { DeleteInstanceRequest } from './model/DeleteInstanceRequest';
import { DeleteInstanceResponse } from './model/DeleteInstanceResponse';
import { DeleteIpGroupRequest } from './model/DeleteIpGroupRequest';
import { DeleteIpGroupResponse } from './model/DeleteIpGroupResponse';
import { DeletePolicyRequest } from './model/DeletePolicyRequest';
import { DeletePolicyResponse } from './model/DeletePolicyResponse';
import { DeletePremiumHostRequest } from './model/DeletePremiumHostRequest';
import { DeletePremiumHostResponse } from './model/DeletePremiumHostResponse';
import { DeletePrivacyRuleRequest } from './model/DeletePrivacyRuleRequest';
import { DeletePrivacyRuleResponse } from './model/DeletePrivacyRuleResponse';
import { DeleteValueListRequest } from './model/DeleteValueListRequest';
import { DeleteValueListResponse } from './model/DeleteValueListResponse';
import { DeleteWhiteBlackIpRuleRequest } from './model/DeleteWhiteBlackIpRuleRequest';
import { DeleteWhiteBlackIpRuleResponse } from './model/DeleteWhiteBlackIpRuleResponse';
import { DomainClassificationItem } from './model/DomainClassificationItem';
import { DomainItem } from './model/DomainItem';
import { ExpackProductInfo } from './model/ExpackProductInfo';
import { Flag } from './model/Flag';
import { GeOIpItem } from './model/GeOIpItem';
import { GeoClassificationItem } from './model/GeoClassificationItem';
import { GeoItem } from './model/GeoItem';
import { HostFlag } from './model/HostFlag';
import { IdHostnameEntry } from './model/IdHostnameEntry';
import { IgnoreRuleBody } from './model/IgnoreRuleBody';
import { InstanceInfo } from './model/InstanceInfo';
import { IpClassificationItem } from './model/IpClassificationItem';
import { IpGroup } from './model/IpGroup';
import { IpGroupBody } from './model/IpGroupBody';
import { IpItem } from './model/IpItem';
import { IpsItem } from './model/IpsItem';
import { ListAntitamperRuleRequest } from './model/ListAntitamperRuleRequest';
import { ListAntitamperRuleResponse } from './model/ListAntitamperRuleResponse';
import { ListBandwidthTimelineRequest } from './model/ListBandwidthTimelineRequest';
import { ListBandwidthTimelineResponse } from './model/ListBandwidthTimelineResponse';
import { ListCertificatesRequest } from './model/ListCertificatesRequest';
import { ListCertificatesResponse } from './model/ListCertificatesResponse';
import { ListCompositeHostsRequest } from './model/ListCompositeHostsRequest';
import { ListCompositeHostsResponse } from './model/ListCompositeHostsResponse';
import { ListEventItems } from './model/ListEventItems';
import { ListEventRequest } from './model/ListEventRequest';
import { ListEventResponse } from './model/ListEventResponse';
import { ListGeoipRuleRequest } from './model/ListGeoipRuleRequest';
import { ListGeoipRuleResponse } from './model/ListGeoipRuleResponse';
import { ListHostRequest } from './model/ListHostRequest';
import { ListHostResponse } from './model/ListHostResponse';
import { ListHostRouteRequest } from './model/ListHostRouteRequest';
import { ListHostRouteResponse } from './model/ListHostRouteResponse';
import { ListIgnoreRuleRequest } from './model/ListIgnoreRuleRequest';
import { ListIgnoreRuleResponse } from './model/ListIgnoreRuleResponse';
import { ListInstance } from './model/ListInstance';
import { ListInstanceRequest } from './model/ListInstanceRequest';
import { ListInstanceResponse } from './model/ListInstanceResponse';
import { ListIpGroupRequest } from './model/ListIpGroupRequest';
import { ListIpGroupResponse } from './model/ListIpGroupResponse';
import { ListNoticeConfigsRequest } from './model/ListNoticeConfigsRequest';
import { ListNoticeConfigsResponse } from './model/ListNoticeConfigsResponse';
import { ListOverviewsClassificationRequest } from './model/ListOverviewsClassificationRequest';
import { ListOverviewsClassificationResponse } from './model/ListOverviewsClassificationResponse';
import { ListPolicyRequest } from './model/ListPolicyRequest';
import { ListPolicyResponse } from './model/ListPolicyResponse';
import { ListPremiumHostRequest } from './model/ListPremiumHostRequest';
import { ListPremiumHostResponse } from './model/ListPremiumHostResponse';
import { ListPrivacyRuleRequest } from './model/ListPrivacyRuleRequest';
import { ListPrivacyRuleResponse } from './model/ListPrivacyRuleResponse';
import { ListQpsTimelineRequest } from './model/ListQpsTimelineRequest';
import { ListQpsTimelineResponse } from './model/ListQpsTimelineResponse';
import { ListRequestTimelineRequest } from './model/ListRequestTimelineRequest';
import { ListRequestTimelineResponse } from './model/ListRequestTimelineResponse';
import { ListStatisticsRequest } from './model/ListStatisticsRequest';
import { ListStatisticsResponse } from './model/ListStatisticsResponse';
import { ListTopAbnormalRequest } from './model/ListTopAbnormalRequest';
import { ListTopAbnormalResponse } from './model/ListTopAbnormalResponse';
import { ListValueListRequest } from './model/ListValueListRequest';
import { ListValueListResponse } from './model/ListValueListResponse';
import { ListWhiteblackipRuleRequest } from './model/ListWhiteblackipRuleRequest';
import { ListWhiteblackipRuleResponse } from './model/ListWhiteblackipRuleResponse';
import { LtsIdInfo } from './model/LtsIdInfo';
import { MigrateCompositeHostsRequest } from './model/MigrateCompositeHostsRequest';
import { MigrateCompositeHostsRequestBody } from './model/MigrateCompositeHostsRequestBody';
import { MigrateCompositeHostsResponse } from './model/MigrateCompositeHostsResponse';
import { PolicyAction } from './model/PolicyAction';
import { PolicyOption } from './model/PolicyOption';
import { PolicyResponse } from './model/PolicyResponse';
import { Premium } from './model/Premium';
import { PremiumWafInstances } from './model/PremiumWafInstances';
import { PremiumWafServer } from './model/PremiumWafServer';
import { PrivacyResponseBody } from './model/PrivacyResponseBody';
import { RenameInstanceRequest } from './model/RenameInstanceRequest';
import { RenameInstanceRequestBody } from './model/RenameInstanceRequestBody';
import { RenameInstanceResponse } from './model/RenameInstanceResponse';
import { ResourceResponse } from './model/ResourceResponse';
import { RouteBody } from './model/RouteBody';
import { RouteServerBody } from './model/RouteServerBody';
import { RuleInfo } from './model/RuleInfo';
import { ShareInfo } from './model/ShareInfo';
import { ShowCertificateRequest } from './model/ShowCertificateRequest';
import { ShowCertificateResponse } from './model/ShowCertificateResponse';
import { ShowCompositeHostRequest } from './model/ShowCompositeHostRequest';
import { ShowCompositeHostResponse } from './model/ShowCompositeHostResponse';
import { ShowConsoleConfigRequest } from './model/ShowConsoleConfigRequest';
import { ShowConsoleConfigResponse } from './model/ShowConsoleConfigResponse';
import { ShowEventItems } from './model/ShowEventItems';
import { ShowEventRequest } from './model/ShowEventRequest';
import { ShowEventResponse } from './model/ShowEventResponse';
import { ShowHostRequest } from './model/ShowHostRequest';
import { ShowHostResponse } from './model/ShowHostResponse';
import { ShowInstanceRequest } from './model/ShowInstanceRequest';
import { ShowInstanceResponse } from './model/ShowInstanceResponse';
import { ShowIpGroupRequest } from './model/ShowIpGroupRequest';
import { ShowIpGroupResponse } from './model/ShowIpGroupResponse';
import { ShowLtsInfoConfigRequest } from './model/ShowLtsInfoConfigRequest';
import { ShowLtsInfoConfigResponse } from './model/ShowLtsInfoConfigResponse';
import { ShowPolicyRequest } from './model/ShowPolicyRequest';
import { ShowPolicyResponse } from './model/ShowPolicyResponse';
import { ShowPremiumHostRequest } from './model/ShowPremiumHostRequest';
import { ShowPremiumHostResponse } from './model/ShowPremiumHostResponse';
import { ShowSourceIpRequest } from './model/ShowSourceIpRequest';
import { ShowSourceIpResponse } from './model/ShowSourceIpResponse';
import { ShowSubscriptionInfoRequest } from './model/ShowSubscriptionInfoRequest';
import { ShowSubscriptionInfoResponse } from './model/ShowSubscriptionInfoResponse';
import { SimplePremiumWafHost } from './model/SimplePremiumWafHost';
import { StatisticsTimelineItem } from './model/StatisticsTimelineItem';
import { TimeLineItem } from './model/TimeLineItem';
import { TimeoutConfig } from './model/TimeoutConfig';
import { TrafficMark } from './model/TrafficMark';
import { UpdateAlertNoticeConfigRequest } from './model/UpdateAlertNoticeConfigRequest';
import { UpdateAlertNoticeConfigRequestBody } from './model/UpdateAlertNoticeConfigRequestBody';
import { UpdateAlertNoticeConfigResponse } from './model/UpdateAlertNoticeConfigResponse';
import { UpdateCertificateRequest } from './model/UpdateCertificateRequest';
import { UpdateCertificateRequestBody } from './model/UpdateCertificateRequestBody';
import { UpdateCertificateResponse } from './model/UpdateCertificateResponse';
import { UpdateGeoipRuleRequest } from './model/UpdateGeoipRuleRequest';
import { UpdateGeoipRuleRequestBody } from './model/UpdateGeoipRuleRequestBody';
import { UpdateGeoipRuleResponse } from './model/UpdateGeoipRuleResponse';
import { UpdateHostProtectStatusRequest } from './model/UpdateHostProtectStatusRequest';
import { UpdateHostProtectStatusRequestBody } from './model/UpdateHostProtectStatusRequestBody';
import { UpdateHostProtectStatusResponse } from './model/UpdateHostProtectStatusResponse';
import { UpdateHostRequest } from './model/UpdateHostRequest';
import { UpdateHostRequestBody } from './model/UpdateHostRequestBody';
import { UpdateHostResponse } from './model/UpdateHostResponse';
import { UpdateIpGroupRequest } from './model/UpdateIpGroupRequest';
import { UpdateIpGroupRequestBody } from './model/UpdateIpGroupRequestBody';
import { UpdateIpGroupResponse } from './model/UpdateIpGroupResponse';
import { UpdateLtsInfoConfigRequest } from './model/UpdateLtsInfoConfigRequest';
import { UpdateLtsInfoConfigRequestBody } from './model/UpdateLtsInfoConfigRequestBody';
import { UpdateLtsInfoConfigResponse } from './model/UpdateLtsInfoConfigResponse';
import { UpdatePolicyProtectHostRequest } from './model/UpdatePolicyProtectHostRequest';
import { UpdatePolicyProtectHostResponse } from './model/UpdatePolicyProtectHostResponse';
import { UpdatePolicyRequest } from './model/UpdatePolicyRequest';
import { UpdatePolicyRequestBody } from './model/UpdatePolicyRequestBody';
import { UpdatePolicyResponse } from './model/UpdatePolicyResponse';
import { UpdatePolicyRuleStatusRequest } from './model/UpdatePolicyRuleStatusRequest';
import { UpdatePolicyRuleStatusRequestBody } from './model/UpdatePolicyRuleStatusRequestBody';
import { UpdatePolicyRuleStatusResponse } from './model/UpdatePolicyRuleStatusResponse';
import { UpdatePremiumHostProtectStatusRequest } from './model/UpdatePremiumHostProtectStatusRequest';
import { UpdatePremiumHostProtectStatusRequestBody } from './model/UpdatePremiumHostProtectStatusRequestBody';
import { UpdatePremiumHostProtectStatusResponse } from './model/UpdatePremiumHostProtectStatusResponse';
import { UpdatePremiumHostRequest } from './model/UpdatePremiumHostRequest';
import { UpdatePremiumHostRequestBody } from './model/UpdatePremiumHostRequestBody';
import { UpdatePremiumHostResponse } from './model/UpdatePremiumHostResponse';
import { UpdatePrivacyRuleRequest } from './model/UpdatePrivacyRuleRequest';
import { UpdatePrivacyRuleRequestBody } from './model/UpdatePrivacyRuleRequestBody';
import { UpdatePrivacyRuleResponse } from './model/UpdatePrivacyRuleResponse';
import { UpdateValueListRequest } from './model/UpdateValueListRequest';
import { UpdateValueListRequestBody } from './model/UpdateValueListRequestBody';
import { UpdateValueListResponse } from './model/UpdateValueListResponse';
import { UpdateWhiteBlackIpRuleRequestBody } from './model/UpdateWhiteBlackIpRuleRequestBody';
import { UpdateWhiteblackipRuleRequest } from './model/UpdateWhiteblackipRuleRequest';
import { UpdateWhiteblackipRuleResponse } from './model/UpdateWhiteblackipRuleResponse';
import { UrlClassificationItem } from './model/UrlClassificationItem';
import { UrlCountItem } from './model/UrlCountItem';
import { UrlItem } from './model/UrlItem';
import { ValueListResponseBody } from './model/ValueListResponseBody';
import { WafProductInfo } from './model/WafProductInfo';
import { WhiteBlackIpResponseBody } from './model/WhiteBlackIpResponseBody';

export class WafClient {
    public static newBuilder(): ClientBuilder<WafClient> {
            return new ClientBuilder<WafClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 绑定证书到域名
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 绑定证书到域名
     * @param {string} contentType 内容类型
     * @param {string} certificateId https证书id，您可以通过调用查询证书列表（ListCertificates）接口获取证书id
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {ApplyCertificateToHostRequestBody} [applyCertificateToHostRequestBody] 证书绑定域名请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public applyCertificateToHost(applyCertificateToHostRequest?: ApplyCertificateToHostRequest): Promise<ApplyCertificateToHostResponse> {
        const options = ParamCreater().applyCertificateToHost(applyCertificateToHostRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 变更包周期云模式waf规格。注：
     *  - 1.变更某产品规格的前提是必须已购买该产品 
     *  - 2.waf版本只支持升配，不支持降配；扩展包数量可以增加或者减少，但不支持数量减少为0 
     *  - 3.不支持同时升降配，如增加域名扩展包数量，同时减少规则扩展包数量
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 变更包周期云模式waf规格
     * @param {string} contentType 内容类型
     * @param {ChangePrepaidCloudWafRequestBody} changePrepaidCloudWafRequestBody 变更包周期云模式waf规格请求体
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changePrepaidCloudWaf(changePrepaidCloudWafRequest?: ChangePrepaidCloudWafRequest): Promise<ChangePrepaidCloudWafResponse> {
        const options = ParamCreater().changePrepaidCloudWaf(changePrepaidCloudWafRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建防篡改规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建防篡改规则
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {CreateAntiTamperRulesRequestBody} createAntiTamperRuleRequestBody 创建网页防篡改规则请求体
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAntiTamperRule(createAntiTamperRuleRequest?: CreateAntiTamperRuleRequest): Promise<CreateAntiTamperRuleResponse> {
        const options = ParamCreater().createAntiTamperRule(createAntiTamperRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建证书
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建证书
     * @param {string} contentType 内容类型
     * @param {CreateCertificateRequestBody} createCertificateRequestBody requestBody
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
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
     * 创建地理位置控制规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建地理位置控制规则
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {CreateGeoIpRuleRequestBody} createGeoIpRuleRequestBody 创建地理访问控制请求体
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createGeoipRule(createGeoipRuleRequest?: CreateGeoipRuleRequest): Promise<CreateGeoipRuleResponse> {
        const options = ParamCreater().createGeoipRule(createGeoipRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建云模式防护域名
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建云模式防护域名
     * @param {string} contentType 内容类型
     * @param {CreateHostRequestBody} createHostRequestBody 创建域名请求体
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createHost(createHostRequest?: CreateHostRequest): Promise<CreateHostResponse> {
        const options = ParamCreater().createHost(createHostRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建全局白名单(原误报屏蔽)规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建全局白名单(原误报屏蔽)规则
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {CreateIgnoreRuleRequestBody} createIgnoreRuleRequestBody 创建误报屏蔽规则请求体
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createIgnoreRule(createIgnoreRuleRequest?: CreateIgnoreRuleRequest): Promise<CreateIgnoreRuleResponse> {
        const options = ParamCreater().createIgnoreRule(createIgnoreRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建WAF独享引擎实例。独享模式只在部分局点支持，包括：华北-北京四、华东-上海一、华南-广州、华南-深圳  、中国-香港、亚太-曼谷、 亚太-新加坡。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建WAF独享引擎实例
     * @param {string} contentType 内容类型
     * @param {CreateInstanceRequestBody} createInstanceRequestBody 待创建的独享引擎信息
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createInstance(createInstanceRequest?: CreateInstanceRequest): Promise<CreateInstanceResponse> {
        const options = ParamCreater().createInstance(createInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建ip地址组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建ip地址组
     * @param {string} contentType 内容类型
     * @param {CreateIpGroupRequestBody} createIpGroupRequestBody 创建ip地址组请求体
     * @param {string} [enterpriseProjectId] 企业项目id
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
     * 创建防护策略，系统会在生成策略时配置一些默认的配置项，如果需要修改策略的默认配置项需要通过调用更新防护策略接口实现
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建防护策略
     * @param {string} contentType 内容类型
     * @param {CreatePolicyRequestBody} createPolicyRequestBody 创建防护策略请求体，只传防护策略名称，系统生成的防护策会自动生成一些默认配置
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPolicy(createPolicyRequest?: CreatePolicyRequest): Promise<CreatePolicyResponse> {
        const options = ParamCreater().createPolicy(createPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建独享模式域名
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建独享模式域名
     * @param {string} contentType 内容类型
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {CreatePremiumHostRequestBody} [createPremiumHostRequestBody] 创建独享模式域名的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPremiumHost(createPremiumHostRequest?: CreatePremiumHostRequest): Promise<CreatePremiumHostResponse> {
        const options = ParamCreater().createPremiumHost(createPremiumHostRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 购买包周期云模式waf。入门版waf不支持购买扩展包
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 购买包周期云模式waf
     * @param {string} contentType 内容类型
     * @param {CreatePrepaidCloudWafRequestBody} createPrepaidCloudWafRequestBody 购买包周期云模式waf请求体
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPrepaidCloudWaf(createPrepaidCloudWafRequest?: CreatePrepaidCloudWafRequest): Promise<CreatePrepaidCloudWafResponse> {
        const options = ParamCreater().createPrepaidCloudWaf(createPrepaidCloudWafRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建隐私屏蔽防护规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建隐私屏蔽防护规则
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {CreatePrivacyRuleRequestBody} createPrivacyRuleRequestBody 创建隐私屏蔽规则请求体
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPrivacyRule(createPrivacyRuleRequest?: CreatePrivacyRuleRequest): Promise<CreatePrivacyRuleResponse> {
        const options = ParamCreater().createPrivacyRule(createPrivacyRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建引用表，引用表能够被CC攻击防护规则和精准访问防护中的规则所引用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建引用表
     * @param {string} contentType 内容类型
     * @param {CreateValueListRequestBody} createValueListRequestBody 创建引用表请求体
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createValueList(createValueListRequest?: CreateValueListRequest): Promise<CreateValueListResponse> {
        const options = ParamCreater().createValueList(createValueListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建黑白名单规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建黑白名单规则
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {CreateWhiteBlackIpRuleRequestBody} createWhiteblackipRuleRequestBody body_info
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createWhiteblackipRule(createWhiteblackipRuleRequest?: CreateWhiteblackipRuleRequest): Promise<CreateWhiteblackipRuleResponse> {
        const options = ParamCreater().createWhiteblackipRule(createWhiteblackipRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除防篡改防护规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除防篡改防护规则
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {string} ruleId 防篡改规则id，通过查询防篡改规则列表接口（ListAntitamperRule）获取
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAntitamperRule(deleteAntitamperRuleRequest?: DeleteAntitamperRuleRequest): Promise<DeleteAntitamperRuleResponse> {
        const options = ParamCreater().deleteAntitamperRule(deleteAntitamperRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除证书
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除证书
     * @param {string} contentType 内容类型
     * @param {string} certificateId https证书id，您可以通过调用查询证书列表（ListCertificates）接口获取证书id
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
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
     * 删除地理位置控制防护规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除地理位置控制防护规则
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {string} ruleId 地理位置控制防护规则id，规则id从查询地理位置控制防护规则列表（ListGeoipRule）接口获取，响应体的id字段
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteGeoipRule(deleteGeoipRuleRequest?: DeleteGeoipRuleRequest): Promise<DeleteGeoipRuleResponse> {
        const options = ParamCreater().deleteGeoipRule(deleteGeoipRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除云模式防护域名
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除云模式防护域名
     * @param {string} contentType 内容类型
     * @param {string} instanceId 域名id，您可以通过调用查询云模式防护域名列表（ListHost）获取域名id
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteHost(deleteHostRequest?: DeleteHostRequest): Promise<DeleteHostResponse> {
        const options = ParamCreater().deleteHost(deleteHostRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除全局白名单(原误报屏蔽)防护规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除全局白名单(原误报屏蔽)防护规则
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {string} ruleId 误报屏蔽规则id，您可以通过查询误报屏蔽规则列表（ListIgnoreRule）接口的响应体中的id字段获取误报屏蔽规则id
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteIgnoreRule(deleteIgnoreRuleRequest?: DeleteIgnoreRuleRequest): Promise<DeleteIgnoreRuleResponse> {
        const options = ParamCreater().deleteIgnoreRule(deleteIgnoreRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除WAF独享引擎信息。独享模式只在部分局点支持，包括：华北-北京四、华东-上海一、华南-广州、华南-深圳  、中国-香港、亚太-曼谷、 亚太-新加坡。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除WAF独享引擎信息
     * @param {string} contentType 内容类型
     * @param {string} instanceId 独享引擎ID（通过调用WAF的ListInstance接口获取所有独享引擎信息查询独享引擎ID）
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteInstance(deleteInstanceRequest?: DeleteInstanceRequest): Promise<DeleteInstanceResponse> {
        const options = ParamCreater().deleteInstance(deleteInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除ip地址组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除ip地址组
     * @param {string} contentType 内容类型
     * @param {string} id ip地址组id
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
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
     * 删除防护策略，若策略正在使用，则需要先接解除域名与策略的绑定关系才能删除策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除防护策略
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePolicy(deletePolicyRequest?: DeletePolicyRequest): Promise<DeletePolicyResponse> {
        const options = ParamCreater().deletePolicy(deletePolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除独享模式域名
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除独享模式域名
     * @param {string} contentType 内容类型
     * @param {string} hostId 独享模式域名ID
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {boolean} [keepPolicy] 是否保留规则。false表示不保留该域名的防护策略；true表示保留该域名的防护策略。当要删除的防护域名的防护策略防护多个防护域名时，该参数不传。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePremiumHost(deletePremiumHostRequest?: DeletePremiumHostRequest): Promise<DeletePremiumHostResponse> {
        const options = ParamCreater().deletePremiumHost(deletePremiumHostRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除隐私屏蔽防护规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除隐私屏蔽防护规则
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {string} ruleId 隐私屏蔽规则id，您可以通过调用查询隐私屏蔽规则列表（ListPrivacyRule）获取规则id
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePrivacyRule(deletePrivacyRuleRequest?: DeletePrivacyRuleRequest): Promise<DeletePrivacyRuleResponse> {
        const options = ParamCreater().deletePrivacyRule(deletePrivacyRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除引用表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除引用表
     * @param {string} contentType 内容类型
     * @param {string} valuelistid 引用表id，通过查询引用表列表（ListValueList）接口获取
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteValueList(deleteValueListRequest?: DeleteValueListRequest): Promise<DeleteValueListResponse> {
        const options = ParamCreater().deleteValueList(deleteValueListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除黑白名单防护规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除黑白名单防护规则
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {string} ruleId 黑白名单规则id，您可以通过调用查询黑白名单规则列表（ListWhiteblackipRule）获取黑白名单规则id
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteWhiteBlackIpRule(deleteWhiteBlackIpRuleRequest?: DeleteWhiteBlackIpRuleRequest): Promise<DeleteWhiteBlackIpRuleResponse> {
        const options = ParamCreater().deleteWhiteBlackIpRule(deleteWhiteBlackIpRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询防篡改规则列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询防篡改规则列表
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {number} [page] 分页查询时，返回第几页数据。默认值为1，表示返回第1页数据。
     * @param {number} [pagesize] 分页查询时，每页包含多少条结果。范围1-100，默认值为10，表示每页包含10条结果。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAntitamperRule(listAntitamperRuleRequest?: ListAntitamperRuleRequest): Promise<ListAntitamperRuleResponse> {
        const options = ParamCreater().listAntitamperRule(listAntitamperRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询安全统计带宽数据，统计的带宽数据为平均值，单位为bit/s。需要注意的是，安全统计相关的接口，暂时不能支持任意时间的查询。只能支持 console上显示的 昨天，今天，3天，7天和30天 数据查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询安全统计带宽数据
     * @param {string} contentType 内容类型
     * @param {number} from 查询的带宽统计数据的起始时间（13位毫秒时间戳），需要和to同时使用
     * @param {number} to 查询的带宽统计数据的结束时间（13位毫秒时间戳），需要和from同时使用
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {string} [hosts] 域名id，用于查询指定的防护域名在from到to这段时间内的带宽数据。通过查询云模式防护域名列表（ListHost）获取域名id或者通过独享模式域名列表（ListPremiumHost）获取域名id
     * @param {string} [instances] 引擎实例id，用于查询指定的独享引擎实例所防护的域名在from到to这段时间内的带宽数据。
     * @param {string} [groupBy] 展示维度，按天展示时传\&quot;DAY\&quot;；默认不传，按照分钟展示。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBandwidthTimeline(listBandwidthTimelineRequest?: ListBandwidthTimelineRequest): Promise<ListBandwidthTimelineResponse> {
        const options = ParamCreater().listBandwidthTimeline(listBandwidthTimelineRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询证书列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询证书列表
     * @param {string} contentType 内容类型
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {number} [page] 分页查询时，返回第几页数据。默认值为1，表示返回第1页数据。
     * @param {number} [pagesize] 分页查询时，每页包含多少条结果。范围1-100，默认值为10，表示每页包含10条结果。
     * @param {string} [name] 证书名称
     * @param {boolean} [host] 是否获取证书关联的域名，默认为false   -true:获取已关联域名的证书   -false:获取未关联域名的证书
     * @param {number} [expStatus] 证书过期状态，0-未过期，1-已过期，2-即将过期（证书将在一个月内过期）
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
     * 查询全部防护域名列表，包括云模式和独享模式
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询全部防护域名列表
     * @param {string} contentType 内容类型
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {number} [page] 分页查询时，返回第几页数据。默认值为1，表示返回第1页数据。
     * @param {number} [pagesize] 分页查询时，每页包含多少条结果。范围1-100，默认值为10，表示每页包含10条结果。
     * @param {string} [hostname] 域名名称
     * @param {string} [policyname] 防护策略名称
     * @param {number} [protectStatus] 域名防护状态：  - -1：bypass，该域名的请求直接到达其后端服务器，不再经过WAF  - 0：暂停防护，WAF只转发该域名的请求，不做攻击检测  - 1：开启防护，WAF根据您配置的策略进行攻击检测
     * @param {string} [wafType] 域名所属WAF模式
     * @param {boolean} [isHttps] 域名是否使用HTTPS
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCompositeHosts(listCompositeHostsRequest?: ListCompositeHostsRequest): Promise<ListCompositeHostsResponse> {
        const options = ParamCreater().listCompositeHosts(listCompositeHostsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询攻击事件列表，该API暂时不支持查询全部防护事件，pagesize参数不可设为-1，由于性能原因，数据量越大消耗的内存越大，后端最多限制查询10000条数据，例如：自定义时间段内的数据超过了10000条，就无法查出page为101，pagesize为100之后的数据，需要调整时间区间，再进行查询
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询攻击事件列表
     * @param {string} contentType 内容类型
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {'yesterday' | 'today' | '3days' | '1week' | '1month'} [recent] 查询日志的时间范围（不能和from、to同时使用，同时使用以recent为准），且recent参数与from、to必须使用其中一个。当同时使用recent参数与from、to时，以recent参数为准
     * @param {number} [from] 起始时间(13位时间戳)，需要和to同时使用，不能和recent参数同时使用
     * @param {number} [to] 结束时间(13位时间戳)，需要和from同时使用，不能和recent参数同时使用
     * @param {Array<string>} [attacks] 攻击类型:   - vuln：其它攻击类型   - sqli： sql注入攻击   - lfi： 本地文件包含  - cmdi：命令注入攻击   - xss：XSS攻击   - robot：恶意爬虫   - rfi：远程文件包含   - custom_custom：精准防护   - cc: cc攻击   - webshell：网站木马   - custom_whiteblackip：黑白名单拦截   - custom_geoip：地理访问控制拦截   - antitamper：防篡改   - anticrawler：反爬虫    - leakage：网站信息防泄漏   - illegal：非法请求 
     * @param {Array<string>} [hosts] 域名id，从获取防护网站列表（ListHost）接口获取域名id
     * @param {number} [page] 分页查询时，返回第几页数据。默认值为1，表示返回第1页数据。
     * @param {number} [pagesize] 分页查询时，每页包含多少条结果。范围1-100，默认值为10，表示每页包含10条结果。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEvent(listEventRequest?: ListEventRequest): Promise<ListEventResponse> {
        const options = ParamCreater().listEvent(listEventRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询地理位置访问控制规则列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询地理位置访问控制规则列表
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {number} [page] 分页查询时，返回第几页数据。默认值为1，表示返回第1页数据。
     * @param {number} [pagesize] 分页查询时，每页包含多少条结果。范围1-100，默认值为10，表示每页包含10条结果。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGeoipRule(listGeoipRuleRequest?: ListGeoipRuleRequest): Promise<ListGeoipRuleResponse> {
        const options = ParamCreater().listGeoipRule(listGeoipRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询云模式防护域名列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云模式防护域名列表
     * @param {string} contentType 内容类型
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {number} [page] 分页查询时，返回第几页数据。默认值为1，表示返回第1页数据。
     * @param {number} [pagesize] 分页查询时，每页包含多少条结果。范围1-100，默认值为10，表示每页包含10条结果。
     * @param {string} [hostname] 要查询的防护域名，用于查询指定防护域名信息；可不传，查询用户云模式下所有防护域名
     * @param {string} [policyname] 防护策略名，用于查询指定防护策略下的域名，可不传
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHost(listHostRequest?: ListHostRequest): Promise<ListHostResponse> {
        const options = ParamCreater().listHost(listHostRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 返回路由信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取云模式域名路由信息
     * @param {string} contentType 内容类型
     * @param {string} instanceId 域名id，您可以通过调用查询云模式防护域名列表（ListHost）获取域名id
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHostRoute(listHostRouteRequest?: ListHostRouteRequest): Promise<ListHostRouteResponse> {
        const options = ParamCreater().listHostRoute(listHostRouteRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询全局白名单(原误报屏蔽)规则列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询全局白名单(原误报屏蔽)规则列表
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，通过指定防护策略id来指明查询该防护策略下的全局白名单规则，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {number} [page] 分页查询时，返回第几页数据。默认值为1，表示返回第1页数据。
     * @param {number} [pagesize] 分页查询时，每页包含多少条结果。范围1-100，默认值为10，表示每页包含10条结果。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listIgnoreRule(listIgnoreRuleRequest?: ListIgnoreRuleRequest): Promise<ListIgnoreRuleResponse> {
        const options = ParamCreater().listIgnoreRule(listIgnoreRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询WAF独享引擎列表。独享模式只在部分局点支持，包括：华北-北京四、华东-上海一、华南-广州、华南-深圳  、中国-香港、亚太-曼谷、 亚太-新加坡。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询WAF独享引擎列表
     * @param {string} contentType 内容类型
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {number} [page] 分页查询参数，第page页，默认值为1
     * @param {number} [pagesize] 分页查询参数，每页pagesize条记录，默认值为10
     * @param {string} [instancename] 模糊查询，独享引擎名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstance(listInstanceRequest?: ListInstanceRequest): Promise<ListInstanceResponse> {
        const options = ParamCreater().listInstance(listInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询地址组列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询地址组列表
     * @param {string} contentType 内容类型
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {number} [page] 页码，默认值为1
     * @param {number} [pagesize] 每页的条数，单页条数限制100，默认值为10
     * @param {string} [name] ip地址组名称，支持模糊查询
     * @param {string} [ip] ip地址或ip段，传入该参数将查询包含传入的ip地址或ip段的地址组
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listIpGroup(listIpGroupRequest?: ListIpGroupRequest): Promise<ListIpGroupResponse> {
        const options = ParamCreater().listIpGroup(listIpGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询告警通知配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询告警通知配置
     * @param {string} contentType 内容类型
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNoticeConfigs(listNoticeConfigsRequest?: ListNoticeConfigsRequest): Promise<ListNoticeConfigsResponse> {
        const options = ParamCreater().listNoticeConfigs(listNoticeConfigsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询安全总览分类统计TOP信息，包含受攻击域名 、攻击源ip、受攻击URL、攻击来源区域、攻击事件分布。需要注意的是，安全总览相关的接口，暂时不能支持任意时间的查询。只能支持 console上显示的 昨天，今天，3天，7天和30天 数据查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询安全总览分类统计top信息
     * @param {string} contentType 内容类型
     * @param {number} from 起始时间（13位毫秒时间戳），需要和to同时使用
     * @param {number} to 结束时间（13位毫秒时间戳），需要和from同时使用
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {number} [top] 要查询的前几的结果，最大值为10，默认值为5。
     * @param {string} [hosts] 域名id，通过查询云模式防护域名列表（ListHost）获取域名id或者通过独享模式域名列表（ListPremiumHost）获取域名id。默认不传，查询该项目下所有防护域名的top业务异常统计信息。
     * @param {string} [instances] 要查询引擎实例id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listOverviewsClassification(listOverviewsClassificationRequest?: ListOverviewsClassificationRequest): Promise<ListOverviewsClassificationResponse> {
        const options = ParamCreater().listOverviewsClassification(listOverviewsClassificationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询防护策略列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询防护策略列表
     * @param {string} contentType 内容类型
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {number} [page] 分页查询时，返回第几页数据。默认值为1，表示返回第1页数据。
     * @param {number} [pagesize] 分页查询时，每页包含多少条结果。范围1-100，默认值为10，表示每页包含10条结果。
     * @param {string} [name] 策略名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPolicy(listPolicyRequest?: ListPolicyRequest): Promise<ListPolicyResponse> {
        const options = ParamCreater().listPolicy(listPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 独享模式域名列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 独享模式域名列表
     * @param {string} contentType 内容类型
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {string} [page] 分页查询时，返回第几页数据。默认值为1，表示返回第1页数据。
     * @param {string} [pagesize] 分页查询时，每页包含多少条结果。范围1-100，默认值为10，表示每页包含10条结果。
     * @param {string} [hostname] 域名
     * @param {string} [policyname] 策略名称
     * @param {number} [protectStatus] 域名防护状态：  - -1：bypass，该域名的请求直接到达其后端服务器，不再经过WAF  - 0：暂停防护，WAF只转发该域名的请求，不做攻击检测  - 1：开启防护，WAF根据您配置的策略进行攻击检测
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPremiumHost(listPremiumHostRequest?: ListPremiumHostRequest): Promise<ListPremiumHostResponse> {
        const options = ParamCreater().listPremiumHost(listPremiumHostRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询隐私屏蔽防护规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询隐私屏蔽防护规则
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {number} [page] 分页查询时，返回第几页数据。默认值为1，表示返回第1页数据。
     * @param {number} [pagesize] 分页查询时，每页包含多少条结果。范围1-100，默认值为10，表示每页包含10条结果。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPrivacyRule(listPrivacyRuleRequest?: ListPrivacyRuleRequest): Promise<ListPrivacyRuleResponse> {
        const options = ParamCreater().listPrivacyRule(listPrivacyRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询安全统计qps次数。需要注意的是，安全统计相关的接口，暂时不能支持任意时间的查询。只能支持 console上显示的 昨天，今天，3天，7天和30天 数据查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询安全统计qps次数
     * @param {string} contentType 内容类型
     * @param {number} from 起始时间（13位毫秒时间戳），需要和to同时使用
     * @param {number} to 结束时间（13位毫秒时间戳），需要和from同时使用
     * @param {string} [enterpriseProjectId] 通过企业项目管理服务的查询企业项目列表接口ListEnterpriseProject查询通过企业项目管理服务的查询企业项目列表接口ListEnterpriseProject查询企业项目ID
     * @param {string} [hosts] 域名id，通过查询云模式防护域名列表（ListHost）获取域名id或者通过独享模式域名列表（ListPremiumHost）获取域名id
     * @param {string} [instances] 要查询引擎实例id（仅独享或者ELB实例化模式涉及）
     * @param {string} [groupBy] 展示维度，按天展示时传\&quot;DAY\&quot;；默认不传，按照分钟展示
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listQpsTimeline(listQpsTimelineRequest?: ListQpsTimelineRequest): Promise<ListQpsTimelineResponse> {
        const options = ParamCreater().listQpsTimeline(listQpsTimelineRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询安全总览中请求次数时间线统计数据。需要注意的是，安全总览相关的接口，暂时不能支持任意时间的查询。只能支持 console上显示的 昨天，今天，3天，7天和30天 数据查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询安全总览中请求次数时间线统计数据
     * @param {string} contentType 内容类型
     * @param {number} from 起始时间（13位毫秒时间戳），需要和to同时使用
     * @param {number} to 结束时间（13位毫秒时间戳），需要和from同时使用
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {Array<string>} [hosts] 域名id，通过查询云模式防护域名列表（ListHost）获取域名id或者通过独享模式域名列表（ListPremiumHost）获取域名id。默认不传，查询该项目下所有防护域名的top业务异常统计信息。
     * @param {Array<string>} [instances] 要查询引擎实例id
     * @param {string} [groupBy] 展示维度，按天展示时传\&quot;DAY\&quot;；默认不传，按照分钟展示
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRequestTimeline(listRequestTimelineRequest?: ListRequestTimelineRequest): Promise<ListRequestTimelineResponse> {
        const options = ParamCreater().listRequestTimeline(listRequestTimelineRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询安全总览请求与攻击数量。需要注意的是，安全总览相关的接口，暂时不能支持任意时间的查询。只能支持 console上显示的 昨天，今天，3天，7天和30天 数据查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询安全总览请求与攻击数量
     * @param {string} contentType 内容类型
     * @param {number} from 起始时间(13位时间戳)，需要和to同时使用
     * @param {number} to 结束时间(13位时间戳),需要和from同时使用
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {string} [hosts] 域名id，通过查询云模式防护域名列表（ListHost）获取域名id或者通过独享模式域名列表（ListPremiumHost）获取域名id
     * @param {string} [instances] 要查询引擎实例id
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
     * 查询业务异常TOP统计信息。需要注意的是，安全总览相关的接口，暂时不能支持任意时间的查询。只能支持 console上显示的 昨天，今天，3天，7天和30天 数据查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询业务异常数量
     * @param {string} contentType 内容类型
     * @param {number} from 起始时间（13位毫秒时间戳），需要和to同时使用
     * @param {number} to 结束时间（13位毫秒时间戳），需要和from同时使用
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {number} [top] 要查询的前几的结果，默认值为5，最大值为10。
     * @param {number} [code] 要查询的异常状态码，目前支持查询的异常状态码包括404、500以及502。不传该参数默认查询404的状态码。
     * @param {string} [hosts] 域名id，通过查询云模式防护域名列表（ListHost）获取域名id或者通过独享模式域名列表（ListPremiumHost）获取域名id。默认不传，查询该项目下所有防护域名的top业务异常统计信息。
     * @param {string} [instances] 要查询引擎实例id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTopAbnormal(listTopAbnormalRequest?: ListTopAbnormalRequest): Promise<ListTopAbnormalResponse> {
        const options = ParamCreater().listTopAbnormal(listTopAbnormalRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询引用表列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询引用表列表
     * @param {string} contentType 内容类型
     * @param {number} [page] 分页查询时，返回第几页数据。默认值为1，表示返回第1页数据。
     * @param {number} [pagesize] 分页查询时，每页包含多少条结果。范围1-100，默认值为10，表示每页包含10条结果。
     * @param {string} [name] 引用表名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listValueList(listValueListRequest?: ListValueListRequest): Promise<ListValueListResponse> {
        const options = ParamCreater().listValueList(listValueListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询黑白名单规则列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询黑白名单规则列表
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {number} [page] 分页查询时，返回第几页数据。默认值为1，表示返回第1页数据。
     * @param {number} [pagesize] 分页查询时，每页包含多少条结果。范围1-100，默认值为10，表示每页包含10条结果。
     * @param {string} [name] 黑白名单规则名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listWhiteblackipRule(listWhiteblackipRuleRequest?: ListWhiteblackipRuleRequest): Promise<ListWhiteblackipRuleResponse> {
        const options = ParamCreater().listWhiteblackipRule(listWhiteblackipRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 按企业项目迁移防护域名，仅专业版与独享版支持该功能
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 按企业项目迁移防护域名
     * @param {string} contentType 内容类型
     * @param {string} enterpriseProjectId 当前企业项目ID
     * @param {string} targetEnterpriseProjectId 迁移的目标企业项目ID
     * @param {MigrateCompositeHostsRequestBody} [migrateCompositeHostsRequestBody] 域名迁移的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public migrateCompositeHosts(migrateCompositeHostsRequest?: MigrateCompositeHostsRequest): Promise<MigrateCompositeHostsResponse> {
        const options = ParamCreater().migrateCompositeHosts(migrateCompositeHostsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重命名WAF独享引擎。独享模式只在部分局点支持，包括：华北-北京四、华东-上海一、华南-广州、华南-深圳  、中国-香港、亚太-曼谷、 亚太-新加坡。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重命名WAF独享引擎
     * @param {string} contentType 内容类型
     * @param {string} instanceId 独享引擎ID（通过调用WAF的ListInstance接口获取所有独享引擎信息查询独享引擎ID）
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {RenameInstanceRequestBody} [renameInstanceRequestBody] 独享引擎新名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public renameInstance(renameInstanceRequest?: RenameInstanceRequest): Promise<RenameInstanceResponse> {
        const options = ParamCreater().renameInstance(renameInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询证书
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询证书
     * @param {string} contentType 内容类型
     * @param {string} certificateId https证书id，您可以通过调用查询证书列表（ListCertificates）接口获取证书id
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
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
     * 根据Id查询防护域名
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据Id查询防护域名
     * @param {string} contentType 内容类型
     * @param {string} hostId 域名id，通过查询云模式防护域名列表（ListHost）获取域名id或者通过独享模式域名列表（ListPremiumHost）获取域名id
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCompositeHost(showCompositeHostRequest?: ShowCompositeHostRequest): Promise<ShowCompositeHostResponse> {
        const options = ParamCreater().showCompositeHost(showCompositeHostRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 局点支持特性查询
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 局点支持特性查询
     * @param {string} contentType 内容类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showConsoleConfig(showConsoleConfigRequest?: ShowConsoleConfigRequest): Promise<ShowConsoleConfigResponse> {
        const options = ParamCreater().showConsoleConfig(showConsoleConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定事件id的防护事件详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定事件id的防护事件详情
     * @param {string} contentType 内容类型
     * @param {string} eventid 防护事件id,通过调用查询攻击事件列表(ListEvent)接口获取防护事件id
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
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
     * 根据防护域名Id查询云模式防护域名详细信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据防护域名Id查询云模式防护域名详细信息
     * @param {string} contentType 内容类型
     * @param {string} instanceId 域名id，您可以通过调用查询云模式防护域名列表（ListHost）获取域名id
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showHost(showHostRequest?: ShowHostRequest): Promise<ShowHostResponse> {
        const options = ParamCreater().showHost(showHostRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询WAF独享引擎信息。独享模式只在部分局点支持，包括：华北-北京四、华东-上海一、华南-广州、华南-深圳  、中国-香港、亚太-曼谷、 亚太-新加坡。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询WAF独享引擎信息
     * @param {string} contentType 内容类型
     * @param {string} instanceId 独享引擎ID（通过调用WAF的ListInstance接口获取所有独享引擎信息查询独享引擎ID）
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstance(showInstanceRequest?: ShowInstanceRequest): Promise<ShowInstanceResponse> {
        const options = ParamCreater().showInstance(showInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询ip地址组明细
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询ip地址组明细
     * @param {string} contentType 内容类型
     * @param {string} id ip地址组id
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
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
     * 查询lts配置信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询lts配置信息
     * @param {string} contentType 内容类型
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showLtsInfoConfig(showLtsInfoConfigRequest?: ShowLtsInfoConfigRequest): Promise<ShowLtsInfoConfigResponse> {
        const options = ParamCreater().showLtsInfoConfig(showLtsInfoConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据Id查询防护策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据Id查询防护策略
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPolicy(showPolicyRequest?: ShowPolicyRequest): Promise<ShowPolicyResponse> {
        const options = ParamCreater().showPolicy(showPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看独享模式域名配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看独享模式域名配置
     * @param {string} contentType 内容类型
     * @param {string} hostId 独享模式域名ID
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPremiumHost(showPremiumHostRequest?: ShowPremiumHostRequest): Promise<ShowPremiumHostResponse> {
        const options = ParamCreater().showPremiumHost(showPremiumHostRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询WAF回源Ip信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询WAF回源Ip信息
     * @param {string} contentType 内容类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSourceIp(showSourceIpRequest?: ShowSourceIpRequest): Promise<ShowSourceIpResponse> {
        const options = ParamCreater().showSourceIp(showSourceIpRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户订购信息，包括云模式包周期、按需计费、独享模式
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户订购信息
     * @param {string} contentType 内容类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSubscriptionInfo(showSubscriptionInfoRequest?: ShowSubscriptionInfoRequest): Promise<ShowSubscriptionInfoResponse> {
        const options = ParamCreater().showSubscriptionInfo(showSubscriptionInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新告警通知配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新告警通知配置
     * @param {string} contentType 内容类型
     * @param {string} xLanguage zh-cn/en-us
     * @param {string} alertId 告警通知id
     * @param {UpdateAlertNoticeConfigRequestBody} updateAlertNoticeConfigRequestBody 请求body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAlertNoticeConfig(updateAlertNoticeConfigRequest?: UpdateAlertNoticeConfigRequest): Promise<UpdateAlertNoticeConfigResponse> {
        const options = ParamCreater().updateAlertNoticeConfig(updateAlertNoticeConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改证书
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改证书
     * @param {string} contentType 内容类型
     * @param {string} certificateId https证书id，您可以通过调用查询证书列表（ListCertificates）接口获取证书id
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {UpdateCertificateRequestBody} [updateCertificateRequestBody] 更新证书请求体
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
     * 更新地理位置控制防护规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新地理位置控制防护规则
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，您可以通过调用查询防护策略列表（ListPolicy）获取策略id，响应体的id字段
     * @param {string} ruleId 地理位置控制规则id，规则id从查询地理位置规则列表（ListGeoipRule）接口获取，响应体的id字段
     * @param {UpdateGeoipRuleRequestBody} updateGeoipRuleRequestBody body_info
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateGeoipRule(updateGeoipRuleRequest?: UpdateGeoipRuleRequest): Promise<UpdateGeoipRuleResponse> {
        const options = ParamCreater().updateGeoipRule(updateGeoipRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新云模式防护域名配置，在没有填入源站信息server的原始数据的情况下，则新的源站信息server会覆盖源站信息，而不是新增源站。此外，请求体可只传需要更新的部分。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新云模式防护域名的配置
     * @param {string} contentType 内容类型
     * @param {string} instanceId 域名id，您可以通过调用查询云模式防护域名列表（ListHost）获取域名id
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {UpdateHostRequestBody} [updateHostRequestBody] 云模式域名信息修改请求
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateHost(updateHostRequest?: UpdateHostRequest): Promise<UpdateHostResponse> {
        const options = ParamCreater().updateHost(updateHostRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改域名防护状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改域名防护状态
     * @param {string} contentType 内容类型
     * @param {string} instanceId 域名id，您可以通过调用查询云模式防护域名列表（ListHost）获取域名id
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {UpdateHostProtectStatusRequestBody} [updateHostProtectStatusRequestBody] 修改域名防护状态请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateHostProtectStatus(updateHostProtectStatusRequest?: UpdateHostProtectStatusRequest): Promise<UpdateHostProtectStatusResponse> {
        const options = ParamCreater().updateHostProtectStatus(updateHostProtectStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改ip地址组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改ip地址组
     * @param {string} contentType 内容类型
     * @param {string} id ip地址组id
     * @param {UpdateIpGroupRequestBody} updateIpGroupRequestBody 创建ip地址组请求体
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
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
     * 配置全量日志lts，该接口可用来开启与关闭waf全量日志以及配置日志组和日志流。日志组id和日志流id可前往云日志服务获取。配置的日志流id要属于所配置的日志组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 配置全量日志lts
     * @param {string} contentType 内容类型
     * @param {string} ltsconfigId lts配置信息id，通过ShowLtsInfoConfig获取
     * @param {UpdateLtsInfoConfigRequestBody} updateLtsInfoConfigRequestBody 全量日志配置请求体
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateLtsInfoConfig(updateLtsInfoConfigRequest?: UpdateLtsInfoConfigRequest): Promise<UpdateLtsInfoConfigResponse> {
        const options = ParamCreater().updateLtsInfoConfig(updateLtsInfoConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新防护策略，请求体可只传需要更新的部分
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新防护策略
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {UpdatePolicyRequestBody} updatePolicyRequestBody 部分更新防护策略
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePolicy(updatePolicyRequest?: UpdatePolicyRequest): Promise<UpdatePolicyResponse> {
        const options = ParamCreater().updatePolicy(updatePolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新防护策略的防护域名
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新防护策略的域名
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {string} hosts 域名id，您可以通过调用查询云模式防护域名列表（ListHost）获取域名id
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePolicyProtectHost(updatePolicyProtectHostRequest?: UpdatePolicyProtectHostRequest): Promise<UpdatePolicyProtectHostResponse> {
        const options = ParamCreater().updatePolicyProtectHost(updatePolicyProtectHostRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改单条规则的状态，用于开启或者关闭单条规则，比如关闭精准防护中某一条规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改单条规则的状态
     * @param {string} contentType 内容类型
     * @param {string} policyId 策略id（策略id从查询防护策略列表接口获取）
     * @param {'whiteblackip' | 'geoip' | 'privacy' | 'antitamper' | 'custom' | 'ignore'} ruletype 策略类型
     * @param {string} ruleId 规则id，根据不同的规则类型（ruletype）调用规则列表接口获取规则id，例如黑白名单（whiteblackip）规则id，您可以通过调用查询黑白名单规则列表（ListWhiteblackipRule）获取规则id
     * @param {UpdatePolicyRuleStatusRequestBody} updatePolicyRuleStatusRequestBody 修改规则状态入参
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePolicyRuleStatus(updatePolicyRuleStatusRequest?: UpdatePolicyRuleStatusRequest): Promise<UpdatePolicyRuleStatusResponse> {
        const options = ParamCreater().updatePolicyRuleStatus(updatePolicyRuleStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改独享模式域名配置，在没有填入源站信息server的原始数据的情况下，则新的源站信息server会覆盖源站信息，而不是新增源站。此外，请求体可只传需要更新的部分。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改独享模式域名配置
     * @param {string} contentType 内容类型
     * @param {string} hostId 独享模式域名ID
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {UpdatePremiumHostRequestBody} [updatePremiumHostRequestBody] 修改独享模式域名的请求
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePremiumHost(updatePremiumHostRequest?: UpdatePremiumHostRequest): Promise<UpdatePremiumHostResponse> {
        const options = ParamCreater().updatePremiumHost(updatePremiumHostRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改独享模式域名防护状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改独享模式域名防护状态
     * @param {string} contentType 内容类型
     * @param {string} hostId 独享模式域名ID
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {UpdatePremiumHostProtectStatusRequestBody} [updatePremiumHostProtectStatusRequestBody] 修改独享模式域名防护状态的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePremiumHostProtectStatus(updatePremiumHostProtectStatusRequest?: UpdatePremiumHostProtectStatusRequest): Promise<UpdatePremiumHostProtectStatusResponse> {
        const options = ParamCreater().updatePremiumHostProtectStatus(updatePremiumHostProtectStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新隐私屏蔽防护规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新隐私屏蔽防护规则
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {string} ruleId 隐私屏蔽规则id，您可以通过调用查询隐私屏蔽规则列表（ListPrivacyRule）获取规则id
     * @param {UpdatePrivacyRuleRequestBody} updatePrivacyRuleRequestBody body_info
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePrivacyRule(updatePrivacyRuleRequest?: UpdatePrivacyRuleRequest): Promise<UpdatePrivacyRuleResponse> {
        const options = ParamCreater().updatePrivacyRule(updatePrivacyRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改引用表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改引用表
     * @param {string} contentType 内容类型
     * @param {string} valuelistid 引用表id，通过查询引用表列表（ListValueList）接口获取
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {UpdateValueListRequestBody} [updateValueListRequestBody] 更新引用表的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateValueList(updateValueListRequest?: UpdateValueListRequest): Promise<UpdateValueListResponse> {
        const options = ParamCreater().updateValueList(updateValueListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新黑白名单防护规则，可以更新ip/ip段以及防护动作等信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新黑白名单防护规则
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {string} ruleId 黑白名单规则id，您可以调用查询黑白名单规则列表（ListWhiteblackipRule）获取黑白名单规则id
     * @param {UpdateWhiteBlackIpRuleRequestBody} updateWhiteblackipRuleRequestBody 更新黑白名单请求体
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateWhiteblackipRule(updateWhiteblackipRuleRequest?: UpdateWhiteblackipRuleRequest): Promise<UpdateWhiteblackipRuleResponse> {
        const options = ParamCreater().updateWhiteblackipRule(updateWhiteblackipRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 绑定证书到域名
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        applyCertificateToHost(applyCertificateToHostRequest?: ApplyCertificateToHostRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/waf/certificate/{certificate_id}/apply-to-hosts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            
            let contentType;
            
            let certificateId;
            
            let enterpriseProjectId;

            if (applyCertificateToHostRequest !== null && applyCertificateToHostRequest !== undefined) {
                if (applyCertificateToHostRequest instanceof ApplyCertificateToHostRequest) {
                    contentType = applyCertificateToHostRequest.contentType;
                    certificateId = applyCertificateToHostRequest.certificateId;
                    enterpriseProjectId = applyCertificateToHostRequest.enterpriseProjectId;
                    body = applyCertificateToHostRequest.body
                } else {
                    contentType = applyCertificateToHostRequest['Content-Type'];
                    certificateId = applyCertificateToHostRequest['certificate_id'];
                    enterpriseProjectId = applyCertificateToHostRequest['enterprise_project_id'];
                    body = applyCertificateToHostRequest['body'];
                }
            }

        
            if (certificateId === null || certificateId === undefined) {
            throw new RequiredError('certificateId','Required parameter certificateId was null or undefined when calling applyCertificateToHost.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'certificate_id': certificateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 变更包周期云模式waf规格。注：
         *  - 1.变更某产品规格的前提是必须已购买该产品 
         *  - 2.waf版本只支持升配，不支持降配；扩展包数量可以增加或者减少，但不支持数量减少为0 
         *  - 3.不支持同时升降配，如增加域名扩展包数量，同时减少规则扩展包数量
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changePrepaidCloudWaf(changePrepaidCloudWafRequest?: ChangePrepaidCloudWafRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/waf/subscription/batchalter/prepaid-cloud-waf",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            
            let contentType;
            
            let enterpriseProjectId;

            if (changePrepaidCloudWafRequest !== null && changePrepaidCloudWafRequest !== undefined) {
                if (changePrepaidCloudWafRequest instanceof ChangePrepaidCloudWafRequest) {
                    contentType = changePrepaidCloudWafRequest.contentType;
                    body = changePrepaidCloudWafRequest.body
                    enterpriseProjectId = changePrepaidCloudWafRequest.enterpriseProjectId;
                } else {
                    contentType = changePrepaidCloudWafRequest['Content-Type'];
                    body = changePrepaidCloudWafRequest['body'];
                    enterpriseProjectId = changePrepaidCloudWafRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建防篡改规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAntiTamperRule(createAntiTamperRuleRequest?: CreateAntiTamperRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/waf/policy/{policy_id}/antitamper",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            
            let contentType;
            
            let policyId;
            
            let enterpriseProjectId;

            if (createAntiTamperRuleRequest !== null && createAntiTamperRuleRequest !== undefined) {
                if (createAntiTamperRuleRequest instanceof CreateAntiTamperRuleRequest) {
                    contentType = createAntiTamperRuleRequest.contentType;
                    policyId = createAntiTamperRuleRequest.policyId;
                    body = createAntiTamperRuleRequest.body
                    enterpriseProjectId = createAntiTamperRuleRequest.enterpriseProjectId;
                } else {
                    contentType = createAntiTamperRuleRequest['Content-Type'];
                    policyId = createAntiTamperRuleRequest['policy_id'];
                    body = createAntiTamperRuleRequest['body'];
                    enterpriseProjectId = createAntiTamperRuleRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling createAntiTamperRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建证书
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCertificate(createCertificateRequest?: CreateCertificateRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/waf/certificate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            
            let contentType;
            
            let enterpriseProjectId;

            if (createCertificateRequest !== null && createCertificateRequest !== undefined) {
                if (createCertificateRequest instanceof CreateCertificateRequest) {
                    contentType = createCertificateRequest.contentType;
                    body = createCertificateRequest.body
                    enterpriseProjectId = createCertificateRequest.enterpriseProjectId;
                } else {
                    contentType = createCertificateRequest['Content-Type'];
                    body = createCertificateRequest['body'];
                    enterpriseProjectId = createCertificateRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建地理位置控制规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createGeoipRule(createGeoipRuleRequest?: CreateGeoipRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/waf/policy/{policy_id}/geoip",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            
            let contentType;
            
            let policyId;
            
            let enterpriseProjectId;

            if (createGeoipRuleRequest !== null && createGeoipRuleRequest !== undefined) {
                if (createGeoipRuleRequest instanceof CreateGeoipRuleRequest) {
                    contentType = createGeoipRuleRequest.contentType;
                    policyId = createGeoipRuleRequest.policyId;
                    body = createGeoipRuleRequest.body
                    enterpriseProjectId = createGeoipRuleRequest.enterpriseProjectId;
                } else {
                    contentType = createGeoipRuleRequest['Content-Type'];
                    policyId = createGeoipRuleRequest['policy_id'];
                    body = createGeoipRuleRequest['body'];
                    enterpriseProjectId = createGeoipRuleRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling createGeoipRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建云模式防护域名
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createHost(createHostRequest?: CreateHostRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/waf/instance",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            
            let contentType;
            
            let enterpriseProjectId;

            if (createHostRequest !== null && createHostRequest !== undefined) {
                if (createHostRequest instanceof CreateHostRequest) {
                    contentType = createHostRequest.contentType;
                    body = createHostRequest.body
                    enterpriseProjectId = createHostRequest.enterpriseProjectId;
                } else {
                    contentType = createHostRequest['Content-Type'];
                    body = createHostRequest['body'];
                    enterpriseProjectId = createHostRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建全局白名单(原误报屏蔽)规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createIgnoreRule(createIgnoreRuleRequest?: CreateIgnoreRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/waf/policy/{policy_id}/ignore",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            
            let contentType;
            
            let policyId;
            
            let enterpriseProjectId;

            if (createIgnoreRuleRequest !== null && createIgnoreRuleRequest !== undefined) {
                if (createIgnoreRuleRequest instanceof CreateIgnoreRuleRequest) {
                    contentType = createIgnoreRuleRequest.contentType;
                    policyId = createIgnoreRuleRequest.policyId;
                    body = createIgnoreRuleRequest.body
                    enterpriseProjectId = createIgnoreRuleRequest.enterpriseProjectId;
                } else {
                    contentType = createIgnoreRuleRequest['Content-Type'];
                    policyId = createIgnoreRuleRequest['policy_id'];
                    body = createIgnoreRuleRequest['body'];
                    enterpriseProjectId = createIgnoreRuleRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling createIgnoreRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建WAF独享引擎实例。独享模式只在部分局点支持，包括：华北-北京四、华东-上海一、华南-广州、华南-深圳  、中国-香港、亚太-曼谷、 亚太-新加坡。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInstance(createInstanceRequest?: CreateInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/premium-waf/instance",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            
            let contentType;
            
            let enterpriseProjectId;

            if (createInstanceRequest !== null && createInstanceRequest !== undefined) {
                if (createInstanceRequest instanceof CreateInstanceRequest) {
                    contentType = createInstanceRequest.contentType;
                    body = createInstanceRequest.body
                    enterpriseProjectId = createInstanceRequest.enterpriseProjectId;
                } else {
                    contentType = createInstanceRequest['Content-Type'];
                    body = createInstanceRequest['body'];
                    enterpriseProjectId = createInstanceRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建ip地址组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createIpGroup(createIpGroupRequest?: CreateIpGroupRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/waf/ip-groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            
            let contentType;
            
            let enterpriseProjectId;

            if (createIpGroupRequest !== null && createIpGroupRequest !== undefined) {
                if (createIpGroupRequest instanceof CreateIpGroupRequest) {
                    contentType = createIpGroupRequest.contentType;
                    body = createIpGroupRequest.body
                    enterpriseProjectId = createIpGroupRequest.enterpriseProjectId;
                } else {
                    contentType = createIpGroupRequest['Content-Type'];
                    body = createIpGroupRequest['body'];
                    enterpriseProjectId = createIpGroupRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建防护策略，系统会在生成策略时配置一些默认的配置项，如果需要修改策略的默认配置项需要通过调用更新防护策略接口实现
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPolicy(createPolicyRequest?: CreatePolicyRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/waf/policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            
            let contentType;
            
            let enterpriseProjectId;

            if (createPolicyRequest !== null && createPolicyRequest !== undefined) {
                if (createPolicyRequest instanceof CreatePolicyRequest) {
                    contentType = createPolicyRequest.contentType;
                    body = createPolicyRequest.body
                    enterpriseProjectId = createPolicyRequest.enterpriseProjectId;
                } else {
                    contentType = createPolicyRequest['Content-Type'];
                    body = createPolicyRequest['body'];
                    enterpriseProjectId = createPolicyRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建独享模式域名
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPremiumHost(createPremiumHostRequest?: CreatePremiumHostRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/premium-waf/host",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            
            let contentType;
            
            let enterpriseProjectId;

            if (createPremiumHostRequest !== null && createPremiumHostRequest !== undefined) {
                if (createPremiumHostRequest instanceof CreatePremiumHostRequest) {
                    contentType = createPremiumHostRequest.contentType;
                    enterpriseProjectId = createPremiumHostRequest.enterpriseProjectId;
                    body = createPremiumHostRequest.body
                } else {
                    contentType = createPremiumHostRequest['Content-Type'];
                    enterpriseProjectId = createPremiumHostRequest['enterprise_project_id'];
                    body = createPremiumHostRequest['body'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 购买包周期云模式waf。入门版waf不支持购买扩展包
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPrepaidCloudWaf(createPrepaidCloudWafRequest?: CreatePrepaidCloudWafRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/waf/subscription/purchase/prepaid-cloud-waf",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            
            let contentType;
            
            let enterpriseProjectId;

            if (createPrepaidCloudWafRequest !== null && createPrepaidCloudWafRequest !== undefined) {
                if (createPrepaidCloudWafRequest instanceof CreatePrepaidCloudWafRequest) {
                    contentType = createPrepaidCloudWafRequest.contentType;
                    body = createPrepaidCloudWafRequest.body
                    enterpriseProjectId = createPrepaidCloudWafRequest.enterpriseProjectId;
                } else {
                    contentType = createPrepaidCloudWafRequest['Content-Type'];
                    body = createPrepaidCloudWafRequest['body'];
                    enterpriseProjectId = createPrepaidCloudWafRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建隐私屏蔽防护规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPrivacyRule(createPrivacyRuleRequest?: CreatePrivacyRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/waf/policy/{policy_id}/privacy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            
            let contentType;
            
            let policyId;
            
            let enterpriseProjectId;

            if (createPrivacyRuleRequest !== null && createPrivacyRuleRequest !== undefined) {
                if (createPrivacyRuleRequest instanceof CreatePrivacyRuleRequest) {
                    contentType = createPrivacyRuleRequest.contentType;
                    policyId = createPrivacyRuleRequest.policyId;
                    body = createPrivacyRuleRequest.body
                    enterpriseProjectId = createPrivacyRuleRequest.enterpriseProjectId;
                } else {
                    contentType = createPrivacyRuleRequest['Content-Type'];
                    policyId = createPrivacyRuleRequest['policy_id'];
                    body = createPrivacyRuleRequest['body'];
                    enterpriseProjectId = createPrivacyRuleRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling createPrivacyRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建引用表，引用表能够被CC攻击防护规则和精准访问防护中的规则所引用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createValueList(createValueListRequest?: CreateValueListRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/waf/valuelist",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            
            let contentType;
            
            let enterpriseProjectId;

            if (createValueListRequest !== null && createValueListRequest !== undefined) {
                if (createValueListRequest instanceof CreateValueListRequest) {
                    contentType = createValueListRequest.contentType;
                    body = createValueListRequest.body
                    enterpriseProjectId = createValueListRequest.enterpriseProjectId;
                } else {
                    contentType = createValueListRequest['Content-Type'];
                    body = createValueListRequest['body'];
                    enterpriseProjectId = createValueListRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建黑白名单规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createWhiteblackipRule(createWhiteblackipRuleRequest?: CreateWhiteblackipRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/waf/policy/{policy_id}/whiteblackip",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            
            let contentType;
            
            let policyId;
            
            let enterpriseProjectId;

            if (createWhiteblackipRuleRequest !== null && createWhiteblackipRuleRequest !== undefined) {
                if (createWhiteblackipRuleRequest instanceof CreateWhiteblackipRuleRequest) {
                    contentType = createWhiteblackipRuleRequest.contentType;
                    policyId = createWhiteblackipRuleRequest.policyId;
                    body = createWhiteblackipRuleRequest.body
                    enterpriseProjectId = createWhiteblackipRuleRequest.enterpriseProjectId;
                } else {
                    contentType = createWhiteblackipRuleRequest['Content-Type'];
                    policyId = createWhiteblackipRuleRequest['policy_id'];
                    body = createWhiteblackipRuleRequest['body'];
                    enterpriseProjectId = createWhiteblackipRuleRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling createWhiteblackipRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除防篡改防护规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAntitamperRule(deleteAntitamperRuleRequest?: DeleteAntitamperRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/waf/policy/{policy_id}/antitamper/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let policyId;
            
            let ruleId;
            
            let enterpriseProjectId;

            if (deleteAntitamperRuleRequest !== null && deleteAntitamperRuleRequest !== undefined) {
                if (deleteAntitamperRuleRequest instanceof DeleteAntitamperRuleRequest) {
                    contentType = deleteAntitamperRuleRequest.contentType;
                    policyId = deleteAntitamperRuleRequest.policyId;
                    ruleId = deleteAntitamperRuleRequest.ruleId;
                    enterpriseProjectId = deleteAntitamperRuleRequest.enterpriseProjectId;
                } else {
                    contentType = deleteAntitamperRuleRequest['Content-Type'];
                    policyId = deleteAntitamperRuleRequest['policy_id'];
                    ruleId = deleteAntitamperRuleRequest['rule_id'];
                    enterpriseProjectId = deleteAntitamperRuleRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling deleteAntitamperRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling deleteAntitamperRule.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'policy_id': policyId,'rule_id': ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除证书
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCertificate(deleteCertificateRequest?: DeleteCertificateRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/waf/certificate/{certificate_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let certificateId;
            
            let enterpriseProjectId;

            if (deleteCertificateRequest !== null && deleteCertificateRequest !== undefined) {
                if (deleteCertificateRequest instanceof DeleteCertificateRequest) {
                    contentType = deleteCertificateRequest.contentType;
                    certificateId = deleteCertificateRequest.certificateId;
                    enterpriseProjectId = deleteCertificateRequest.enterpriseProjectId;
                } else {
                    contentType = deleteCertificateRequest['Content-Type'];
                    certificateId = deleteCertificateRequest['certificate_id'];
                    enterpriseProjectId = deleteCertificateRequest['enterprise_project_id'];
                }
            }

        
            if (certificateId === null || certificateId === undefined) {
            throw new RequiredError('certificateId','Required parameter certificateId was null or undefined when calling deleteCertificate.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'certificate_id': certificateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除地理位置控制防护规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteGeoipRule(deleteGeoipRuleRequest?: DeleteGeoipRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/waf/policy/{policy_id}/geoip/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let policyId;
            
            let ruleId;
            
            let enterpriseProjectId;

            if (deleteGeoipRuleRequest !== null && deleteGeoipRuleRequest !== undefined) {
                if (deleteGeoipRuleRequest instanceof DeleteGeoipRuleRequest) {
                    contentType = deleteGeoipRuleRequest.contentType;
                    policyId = deleteGeoipRuleRequest.policyId;
                    ruleId = deleteGeoipRuleRequest.ruleId;
                    enterpriseProjectId = deleteGeoipRuleRequest.enterpriseProjectId;
                } else {
                    contentType = deleteGeoipRuleRequest['Content-Type'];
                    policyId = deleteGeoipRuleRequest['policy_id'];
                    ruleId = deleteGeoipRuleRequest['rule_id'];
                    enterpriseProjectId = deleteGeoipRuleRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling deleteGeoipRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling deleteGeoipRule.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'policy_id': policyId,'rule_id': ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除云模式防护域名
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteHost(deleteHostRequest?: DeleteHostRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/waf/instance/{instance_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let instanceId;
            
            let enterpriseProjectId;

            if (deleteHostRequest !== null && deleteHostRequest !== undefined) {
                if (deleteHostRequest instanceof DeleteHostRequest) {
                    contentType = deleteHostRequest.contentType;
                    instanceId = deleteHostRequest.instanceId;
                    enterpriseProjectId = deleteHostRequest.enterpriseProjectId;
                } else {
                    contentType = deleteHostRequest['Content-Type'];
                    instanceId = deleteHostRequest['instance_id'];
                    enterpriseProjectId = deleteHostRequest['enterprise_project_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteHost.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除全局白名单(原误报屏蔽)防护规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteIgnoreRule(deleteIgnoreRuleRequest?: DeleteIgnoreRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/waf/policy/{policy_id}/ignore/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let policyId;
            
            let ruleId;
            
            let enterpriseProjectId;

            if (deleteIgnoreRuleRequest !== null && deleteIgnoreRuleRequest !== undefined) {
                if (deleteIgnoreRuleRequest instanceof DeleteIgnoreRuleRequest) {
                    contentType = deleteIgnoreRuleRequest.contentType;
                    policyId = deleteIgnoreRuleRequest.policyId;
                    ruleId = deleteIgnoreRuleRequest.ruleId;
                    enterpriseProjectId = deleteIgnoreRuleRequest.enterpriseProjectId;
                } else {
                    contentType = deleteIgnoreRuleRequest['Content-Type'];
                    policyId = deleteIgnoreRuleRequest['policy_id'];
                    ruleId = deleteIgnoreRuleRequest['rule_id'];
                    enterpriseProjectId = deleteIgnoreRuleRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling deleteIgnoreRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling deleteIgnoreRule.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'policy_id': policyId,'rule_id': ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除WAF独享引擎信息。独享模式只在部分局点支持，包括：华北-北京四、华东-上海一、华南-广州、华南-深圳  、中国-香港、亚太-曼谷、 亚太-新加坡。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteInstance(deleteInstanceRequest?: DeleteInstanceRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/premium-waf/instance/{instance_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let instanceId;
            
            let enterpriseProjectId;

            if (deleteInstanceRequest !== null && deleteInstanceRequest !== undefined) {
                if (deleteInstanceRequest instanceof DeleteInstanceRequest) {
                    contentType = deleteInstanceRequest.contentType;
                    instanceId = deleteInstanceRequest.instanceId;
                    enterpriseProjectId = deleteInstanceRequest.enterpriseProjectId;
                } else {
                    contentType = deleteInstanceRequest['Content-Type'];
                    instanceId = deleteInstanceRequest['instance_id'];
                    enterpriseProjectId = deleteInstanceRequest['enterprise_project_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteInstance.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除ip地址组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteIpGroup(deleteIpGroupRequest?: DeleteIpGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/waf/ip-group/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let id;
            
            let enterpriseProjectId;

            if (deleteIpGroupRequest !== null && deleteIpGroupRequest !== undefined) {
                if (deleteIpGroupRequest instanceof DeleteIpGroupRequest) {
                    contentType = deleteIpGroupRequest.contentType;
                    id = deleteIpGroupRequest.id;
                    enterpriseProjectId = deleteIpGroupRequest.enterpriseProjectId;
                } else {
                    contentType = deleteIpGroupRequest['Content-Type'];
                    id = deleteIpGroupRequest['id'];
                    enterpriseProjectId = deleteIpGroupRequest['enterprise_project_id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteIpGroup.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除防护策略，若策略正在使用，则需要先接解除域名与策略的绑定关系才能删除策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePolicy(deletePolicyRequest?: DeletePolicyRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/waf/policy/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let policyId;
            
            let enterpriseProjectId;

            if (deletePolicyRequest !== null && deletePolicyRequest !== undefined) {
                if (deletePolicyRequest instanceof DeletePolicyRequest) {
                    contentType = deletePolicyRequest.contentType;
                    policyId = deletePolicyRequest.policyId;
                    enterpriseProjectId = deletePolicyRequest.enterpriseProjectId;
                } else {
                    contentType = deletePolicyRequest['Content-Type'];
                    policyId = deletePolicyRequest['policy_id'];
                    enterpriseProjectId = deletePolicyRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling deletePolicy.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除独享模式域名
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePremiumHost(deletePremiumHostRequest?: DeletePremiumHostRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/premium-waf/host/{host_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let hostId;
            
            let enterpriseProjectId;
            
            let keepPolicy;

            if (deletePremiumHostRequest !== null && deletePremiumHostRequest !== undefined) {
                if (deletePremiumHostRequest instanceof DeletePremiumHostRequest) {
                    contentType = deletePremiumHostRequest.contentType;
                    hostId = deletePremiumHostRequest.hostId;
                    enterpriseProjectId = deletePremiumHostRequest.enterpriseProjectId;
                    keepPolicy = deletePremiumHostRequest.keepPolicy;
                } else {
                    contentType = deletePremiumHostRequest['Content-Type'];
                    hostId = deletePremiumHostRequest['host_id'];
                    enterpriseProjectId = deletePremiumHostRequest['enterprise_project_id'];
                    keepPolicy = deletePremiumHostRequest['keepPolicy'];
                }
            }

        
            if (hostId === null || hostId === undefined) {
            throw new RequiredError('hostId','Required parameter hostId was null or undefined when calling deletePremiumHost.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (keepPolicy !== null && keepPolicy !== undefined) {
                localVarQueryParameter['keepPolicy'] = keepPolicy;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'host_id': hostId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除隐私屏蔽防护规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePrivacyRule(deletePrivacyRuleRequest?: DeletePrivacyRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/waf/policy/{policy_id}/privacy/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let policyId;
            
            let ruleId;
            
            let enterpriseProjectId;

            if (deletePrivacyRuleRequest !== null && deletePrivacyRuleRequest !== undefined) {
                if (deletePrivacyRuleRequest instanceof DeletePrivacyRuleRequest) {
                    contentType = deletePrivacyRuleRequest.contentType;
                    policyId = deletePrivacyRuleRequest.policyId;
                    ruleId = deletePrivacyRuleRequest.ruleId;
                    enterpriseProjectId = deletePrivacyRuleRequest.enterpriseProjectId;
                } else {
                    contentType = deletePrivacyRuleRequest['Content-Type'];
                    policyId = deletePrivacyRuleRequest['policy_id'];
                    ruleId = deletePrivacyRuleRequest['rule_id'];
                    enterpriseProjectId = deletePrivacyRuleRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling deletePrivacyRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling deletePrivacyRule.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'policy_id': policyId,'rule_id': ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除引用表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteValueList(deleteValueListRequest?: DeleteValueListRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/waf/valuelist/{valuelistid}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let valuelistid;
            
            let enterpriseProjectId;

            if (deleteValueListRequest !== null && deleteValueListRequest !== undefined) {
                if (deleteValueListRequest instanceof DeleteValueListRequest) {
                    contentType = deleteValueListRequest.contentType;
                    valuelistid = deleteValueListRequest.valuelistid;
                    enterpriseProjectId = deleteValueListRequest.enterpriseProjectId;
                } else {
                    contentType = deleteValueListRequest['Content-Type'];
                    valuelistid = deleteValueListRequest['valuelistid'];
                    enterpriseProjectId = deleteValueListRequest['enterprise_project_id'];
                }
            }

        
            if (valuelistid === null || valuelistid === undefined) {
            throw new RequiredError('valuelistid','Required parameter valuelistid was null or undefined when calling deleteValueList.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'valuelistid': valuelistid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除黑白名单防护规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteWhiteBlackIpRule(deleteWhiteBlackIpRuleRequest?: DeleteWhiteBlackIpRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/waf/policy/{policy_id}/whiteblackip/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let policyId;
            
            let ruleId;
            
            let enterpriseProjectId;

            if (deleteWhiteBlackIpRuleRequest !== null && deleteWhiteBlackIpRuleRequest !== undefined) {
                if (deleteWhiteBlackIpRuleRequest instanceof DeleteWhiteBlackIpRuleRequest) {
                    contentType = deleteWhiteBlackIpRuleRequest.contentType;
                    policyId = deleteWhiteBlackIpRuleRequest.policyId;
                    ruleId = deleteWhiteBlackIpRuleRequest.ruleId;
                    enterpriseProjectId = deleteWhiteBlackIpRuleRequest.enterpriseProjectId;
                } else {
                    contentType = deleteWhiteBlackIpRuleRequest['Content-Type'];
                    policyId = deleteWhiteBlackIpRuleRequest['policy_id'];
                    ruleId = deleteWhiteBlackIpRuleRequest['rule_id'];
                    enterpriseProjectId = deleteWhiteBlackIpRuleRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling deleteWhiteBlackIpRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling deleteWhiteBlackIpRule.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'policy_id': policyId,'rule_id': ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询防篡改规则列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAntitamperRule(listAntitamperRuleRequest?: ListAntitamperRuleRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/policy/{policy_id}/antitamper",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let policyId;
            
            let enterpriseProjectId;
            
            let page;
            
            let pagesize;

            if (listAntitamperRuleRequest !== null && listAntitamperRuleRequest !== undefined) {
                if (listAntitamperRuleRequest instanceof ListAntitamperRuleRequest) {
                    contentType = listAntitamperRuleRequest.contentType;
                    policyId = listAntitamperRuleRequest.policyId;
                    enterpriseProjectId = listAntitamperRuleRequest.enterpriseProjectId;
                    page = listAntitamperRuleRequest.page;
                    pagesize = listAntitamperRuleRequest.pagesize;
                } else {
                    contentType = listAntitamperRuleRequest['Content-Type'];
                    policyId = listAntitamperRuleRequest['policy_id'];
                    enterpriseProjectId = listAntitamperRuleRequest['enterprise_project_id'];
                    page = listAntitamperRuleRequest['page'];
                    pagesize = listAntitamperRuleRequest['pagesize'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling listAntitamperRule.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (pagesize !== null && pagesize !== undefined) {
                localVarQueryParameter['pagesize'] = pagesize;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询安全统计带宽数据，统计的带宽数据为平均值，单位为bit/s。需要注意的是，安全统计相关的接口，暂时不能支持任意时间的查询。只能支持 console上显示的 昨天，今天，3天，7天和30天 数据查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBandwidthTimeline(listBandwidthTimelineRequest?: ListBandwidthTimelineRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/overviews/bandwidth/timeline",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let from;
            
            let to;
            
            let enterpriseProjectId;
            
            let hosts;
            
            let instances;
            
            let groupBy;

            if (listBandwidthTimelineRequest !== null && listBandwidthTimelineRequest !== undefined) {
                if (listBandwidthTimelineRequest instanceof ListBandwidthTimelineRequest) {
                    contentType = listBandwidthTimelineRequest.contentType;
                    from = listBandwidthTimelineRequest.from;
                    to = listBandwidthTimelineRequest.to;
                    enterpriseProjectId = listBandwidthTimelineRequest.enterpriseProjectId;
                    hosts = listBandwidthTimelineRequest.hosts;
                    instances = listBandwidthTimelineRequest.instances;
                    groupBy = listBandwidthTimelineRequest.groupBy;
                } else {
                    contentType = listBandwidthTimelineRequest['Content-Type'];
                    from = listBandwidthTimelineRequest['from'];
                    to = listBandwidthTimelineRequest['to'];
                    enterpriseProjectId = listBandwidthTimelineRequest['enterprise_project_id'];
                    hosts = listBandwidthTimelineRequest['hosts'];
                    instances = listBandwidthTimelineRequest['instances'];
                    groupBy = listBandwidthTimelineRequest['group_by'];
                }
            }

        
            if (from === null || from === undefined) {
                throw new RequiredError('from','Required parameter from was null or undefined when calling listBandwidthTimeline.');
            }
            if (from !== null && from !== undefined) {
                localVarQueryParameter['from'] = from;
            }
            if (to === null || to === undefined) {
                throw new RequiredError('to','Required parameter to was null or undefined when calling listBandwidthTimeline.');
            }
            if (to !== null && to !== undefined) {
                localVarQueryParameter['to'] = to;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (hosts !== null && hosts !== undefined) {
                localVarQueryParameter['hosts'] = hosts;
            }
            if (instances !== null && instances !== undefined) {
                localVarQueryParameter['instances'] = instances;
            }
            if (groupBy !== null && groupBy !== undefined) {
                localVarQueryParameter['group_by'] = groupBy;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询证书列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCertificates(listCertificatesRequest?: ListCertificatesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/certificate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let enterpriseProjectId;
            
            let page;
            
            let pagesize;
            
            let name;
            
            let host;
            
            let expStatus;

            if (listCertificatesRequest !== null && listCertificatesRequest !== undefined) {
                if (listCertificatesRequest instanceof ListCertificatesRequest) {
                    contentType = listCertificatesRequest.contentType;
                    enterpriseProjectId = listCertificatesRequest.enterpriseProjectId;
                    page = listCertificatesRequest.page;
                    pagesize = listCertificatesRequest.pagesize;
                    name = listCertificatesRequest.name;
                    host = listCertificatesRequest.host;
                    expStatus = listCertificatesRequest.expStatus;
                } else {
                    contentType = listCertificatesRequest['Content-Type'];
                    enterpriseProjectId = listCertificatesRequest['enterprise_project_id'];
                    page = listCertificatesRequest['page'];
                    pagesize = listCertificatesRequest['pagesize'];
                    name = listCertificatesRequest['name'];
                    host = listCertificatesRequest['host'];
                    expStatus = listCertificatesRequest['exp_status'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (pagesize !== null && pagesize !== undefined) {
                localVarQueryParameter['pagesize'] = pagesize;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (host !== null && host !== undefined) {
                localVarQueryParameter['host'] = host;
            }
            if (expStatus !== null && expStatus !== undefined) {
                localVarQueryParameter['exp_status'] = expStatus;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询全部防护域名列表，包括云模式和独享模式
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCompositeHosts(listCompositeHostsRequest?: ListCompositeHostsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/composite-waf/host",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let enterpriseProjectId;
            
            let page;
            
            let pagesize;
            
            let hostname;
            
            let policyname;
            
            let protectStatus;
            
            let wafType;
            
            let isHttps;

            if (listCompositeHostsRequest !== null && listCompositeHostsRequest !== undefined) {
                if (listCompositeHostsRequest instanceof ListCompositeHostsRequest) {
                    contentType = listCompositeHostsRequest.contentType;
                    enterpriseProjectId = listCompositeHostsRequest.enterpriseProjectId;
                    page = listCompositeHostsRequest.page;
                    pagesize = listCompositeHostsRequest.pagesize;
                    hostname = listCompositeHostsRequest.hostname;
                    policyname = listCompositeHostsRequest.policyname;
                    protectStatus = listCompositeHostsRequest.protectStatus;
                    wafType = listCompositeHostsRequest.wafType;
                    isHttps = listCompositeHostsRequest.isHttps;
                } else {
                    contentType = listCompositeHostsRequest['Content-Type'];
                    enterpriseProjectId = listCompositeHostsRequest['enterprise_project_id'];
                    page = listCompositeHostsRequest['page'];
                    pagesize = listCompositeHostsRequest['pagesize'];
                    hostname = listCompositeHostsRequest['hostname'];
                    policyname = listCompositeHostsRequest['policyname'];
                    protectStatus = listCompositeHostsRequest['protect_status'];
                    wafType = listCompositeHostsRequest['waf_type'];
                    isHttps = listCompositeHostsRequest['is_https'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (pagesize !== null && pagesize !== undefined) {
                localVarQueryParameter['pagesize'] = pagesize;
            }
            if (hostname !== null && hostname !== undefined) {
                localVarQueryParameter['hostname'] = hostname;
            }
            if (policyname !== null && policyname !== undefined) {
                localVarQueryParameter['policyname'] = policyname;
            }
            if (protectStatus !== null && protectStatus !== undefined) {
                localVarQueryParameter['protect_status'] = protectStatus;
            }
            if (wafType !== null && wafType !== undefined) {
                localVarQueryParameter['waf_type'] = wafType;
            }
            if (isHttps !== null && isHttps !== undefined) {
                localVarQueryParameter['is_https'] = isHttps;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询攻击事件列表，该API暂时不支持查询全部防护事件，pagesize参数不可设为-1，由于性能原因，数据量越大消耗的内存越大，后端最多限制查询10000条数据，例如：自定义时间段内的数据超过了10000条，就无法查出page为101，pagesize为100之后的数据，需要调整时间区间，再进行查询
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEvent(listEventRequest?: ListEventRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/event",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let enterpriseProjectId;
            
            let recent;
            
            let from;
            
            let to;
            
            let attacks;
            
            let hosts;
            
            let page;
            
            let pagesize;

            if (listEventRequest !== null && listEventRequest !== undefined) {
                if (listEventRequest instanceof ListEventRequest) {
                    contentType = listEventRequest.contentType;
                    enterpriseProjectId = listEventRequest.enterpriseProjectId;
                    recent = listEventRequest.recent;
                    from = listEventRequest.from;
                    to = listEventRequest.to;
                    attacks = listEventRequest.attacks;
                    hosts = listEventRequest.hosts;
                    page = listEventRequest.page;
                    pagesize = listEventRequest.pagesize;
                } else {
                    contentType = listEventRequest['Content-Type'];
                    enterpriseProjectId = listEventRequest['enterprise_project_id'];
                    recent = listEventRequest['recent'];
                    from = listEventRequest['from'];
                    to = listEventRequest['to'];
                    attacks = listEventRequest['attacks'];
                    hosts = listEventRequest['hosts'];
                    page = listEventRequest['page'];
                    pagesize = listEventRequest['pagesize'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (recent !== null && recent !== undefined) {
                localVarQueryParameter['recent'] = recent;
            }
            if (from !== null && from !== undefined) {
                localVarQueryParameter['from'] = from;
            }
            if (to !== null && to !== undefined) {
                localVarQueryParameter['to'] = to;
            }
            if (attacks !== null && attacks !== undefined) {
                localVarQueryParameter['attacks'] = attacks;
            }
            if (hosts !== null && hosts !== undefined) {
                localVarQueryParameter['hosts'] = hosts;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (pagesize !== null && pagesize !== undefined) {
                localVarQueryParameter['pagesize'] = pagesize;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询地理位置访问控制规则列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGeoipRule(listGeoipRuleRequest?: ListGeoipRuleRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/policy/{policy_id}/geoip",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let policyId;
            
            let enterpriseProjectId;
            
            let page;
            
            let pagesize;

            if (listGeoipRuleRequest !== null && listGeoipRuleRequest !== undefined) {
                if (listGeoipRuleRequest instanceof ListGeoipRuleRequest) {
                    contentType = listGeoipRuleRequest.contentType;
                    policyId = listGeoipRuleRequest.policyId;
                    enterpriseProjectId = listGeoipRuleRequest.enterpriseProjectId;
                    page = listGeoipRuleRequest.page;
                    pagesize = listGeoipRuleRequest.pagesize;
                } else {
                    contentType = listGeoipRuleRequest['Content-Type'];
                    policyId = listGeoipRuleRequest['policy_id'];
                    enterpriseProjectId = listGeoipRuleRequest['enterprise_project_id'];
                    page = listGeoipRuleRequest['page'];
                    pagesize = listGeoipRuleRequest['pagesize'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling listGeoipRule.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (pagesize !== null && pagesize !== undefined) {
                localVarQueryParameter['pagesize'] = pagesize;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询云模式防护域名列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHost(listHostRequest?: ListHostRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/instance",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let enterpriseProjectId;
            
            let page;
            
            let pagesize;
            
            let hostname;
            
            let policyname;

            if (listHostRequest !== null && listHostRequest !== undefined) {
                if (listHostRequest instanceof ListHostRequest) {
                    contentType = listHostRequest.contentType;
                    enterpriseProjectId = listHostRequest.enterpriseProjectId;
                    page = listHostRequest.page;
                    pagesize = listHostRequest.pagesize;
                    hostname = listHostRequest.hostname;
                    policyname = listHostRequest.policyname;
                } else {
                    contentType = listHostRequest['Content-Type'];
                    enterpriseProjectId = listHostRequest['enterprise_project_id'];
                    page = listHostRequest['page'];
                    pagesize = listHostRequest['pagesize'];
                    hostname = listHostRequest['hostname'];
                    policyname = listHostRequest['policyname'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (pagesize !== null && pagesize !== undefined) {
                localVarQueryParameter['pagesize'] = pagesize;
            }
            if (hostname !== null && hostname !== undefined) {
                localVarQueryParameter['hostname'] = hostname;
            }
            if (policyname !== null && policyname !== undefined) {
                localVarQueryParameter['policyname'] = policyname;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 返回路由信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHostRoute(listHostRouteRequest?: ListHostRouteRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/instance/{instance_id}/route",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let instanceId;
            
            let enterpriseProjectId;

            if (listHostRouteRequest !== null && listHostRouteRequest !== undefined) {
                if (listHostRouteRequest instanceof ListHostRouteRequest) {
                    contentType = listHostRouteRequest.contentType;
                    instanceId = listHostRouteRequest.instanceId;
                    enterpriseProjectId = listHostRouteRequest.enterpriseProjectId;
                } else {
                    contentType = listHostRouteRequest['Content-Type'];
                    instanceId = listHostRouteRequest['instance_id'];
                    enterpriseProjectId = listHostRouteRequest['enterprise_project_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listHostRoute.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询全局白名单(原误报屏蔽)规则列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listIgnoreRule(listIgnoreRuleRequest?: ListIgnoreRuleRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/policy/{policy_id}/ignore",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let policyId;
            
            let enterpriseProjectId;
            
            let page;
            
            let pagesize;

            if (listIgnoreRuleRequest !== null && listIgnoreRuleRequest !== undefined) {
                if (listIgnoreRuleRequest instanceof ListIgnoreRuleRequest) {
                    contentType = listIgnoreRuleRequest.contentType;
                    policyId = listIgnoreRuleRequest.policyId;
                    enterpriseProjectId = listIgnoreRuleRequest.enterpriseProjectId;
                    page = listIgnoreRuleRequest.page;
                    pagesize = listIgnoreRuleRequest.pagesize;
                } else {
                    contentType = listIgnoreRuleRequest['Content-Type'];
                    policyId = listIgnoreRuleRequest['policy_id'];
                    enterpriseProjectId = listIgnoreRuleRequest['enterprise_project_id'];
                    page = listIgnoreRuleRequest['page'];
                    pagesize = listIgnoreRuleRequest['pagesize'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling listIgnoreRule.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (pagesize !== null && pagesize !== undefined) {
                localVarQueryParameter['pagesize'] = pagesize;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询WAF独享引擎列表。独享模式只在部分局点支持，包括：华北-北京四、华东-上海一、华南-广州、华南-深圳  、中国-香港、亚太-曼谷、 亚太-新加坡。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstance(listInstanceRequest?: ListInstanceRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/premium-waf/instance",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let enterpriseProjectId;
            
            let page;
            
            let pagesize;
            
            let instancename;

            if (listInstanceRequest !== null && listInstanceRequest !== undefined) {
                if (listInstanceRequest instanceof ListInstanceRequest) {
                    contentType = listInstanceRequest.contentType;
                    enterpriseProjectId = listInstanceRequest.enterpriseProjectId;
                    page = listInstanceRequest.page;
                    pagesize = listInstanceRequest.pagesize;
                    instancename = listInstanceRequest.instancename;
                } else {
                    contentType = listInstanceRequest['Content-Type'];
                    enterpriseProjectId = listInstanceRequest['enterprise_project_id'];
                    page = listInstanceRequest['page'];
                    pagesize = listInstanceRequest['pagesize'];
                    instancename = listInstanceRequest['instancename'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (pagesize !== null && pagesize !== undefined) {
                localVarQueryParameter['pagesize'] = pagesize;
            }
            if (instancename !== null && instancename !== undefined) {
                localVarQueryParameter['instancename'] = instancename;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询地址组列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listIpGroup(listIpGroupRequest?: ListIpGroupRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/ip-groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let enterpriseProjectId;
            
            let page;
            
            let pagesize;
            
            let name;
            
            let ip;

            if (listIpGroupRequest !== null && listIpGroupRequest !== undefined) {
                if (listIpGroupRequest instanceof ListIpGroupRequest) {
                    contentType = listIpGroupRequest.contentType;
                    enterpriseProjectId = listIpGroupRequest.enterpriseProjectId;
                    page = listIpGroupRequest.page;
                    pagesize = listIpGroupRequest.pagesize;
                    name = listIpGroupRequest.name;
                    ip = listIpGroupRequest.ip;
                } else {
                    contentType = listIpGroupRequest['Content-Type'];
                    enterpriseProjectId = listIpGroupRequest['enterprise_project_id'];
                    page = listIpGroupRequest['page'];
                    pagesize = listIpGroupRequest['pagesize'];
                    name = listIpGroupRequest['name'];
                    ip = listIpGroupRequest['ip'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (pagesize !== null && pagesize !== undefined) {
                localVarQueryParameter['pagesize'] = pagesize;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (ip !== null && ip !== undefined) {
                localVarQueryParameter['ip'] = ip;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询告警通知配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNoticeConfigs(listNoticeConfigsRequest?: ListNoticeConfigsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/waf/alerts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let enterpriseProjectId;

            if (listNoticeConfigsRequest !== null && listNoticeConfigsRequest !== undefined) {
                if (listNoticeConfigsRequest instanceof ListNoticeConfigsRequest) {
                    contentType = listNoticeConfigsRequest.contentType;
                    enterpriseProjectId = listNoticeConfigsRequest.enterpriseProjectId;
                } else {
                    contentType = listNoticeConfigsRequest['Content-Type'];
                    enterpriseProjectId = listNoticeConfigsRequest['enterprise_project_id'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询安全总览分类统计TOP信息，包含受攻击域名 、攻击源ip、受攻击URL、攻击来源区域、攻击事件分布。需要注意的是，安全总览相关的接口，暂时不能支持任意时间的查询。只能支持 console上显示的 昨天，今天，3天，7天和30天 数据查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listOverviewsClassification(listOverviewsClassificationRequest?: ListOverviewsClassificationRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/overviews/classification",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let from;
            
            let to;
            
            let enterpriseProjectId;
            
            let top;
            
            let hosts;
            
            let instances;

            if (listOverviewsClassificationRequest !== null && listOverviewsClassificationRequest !== undefined) {
                if (listOverviewsClassificationRequest instanceof ListOverviewsClassificationRequest) {
                    contentType = listOverviewsClassificationRequest.contentType;
                    from = listOverviewsClassificationRequest.from;
                    to = listOverviewsClassificationRequest.to;
                    enterpriseProjectId = listOverviewsClassificationRequest.enterpriseProjectId;
                    top = listOverviewsClassificationRequest.top;
                    hosts = listOverviewsClassificationRequest.hosts;
                    instances = listOverviewsClassificationRequest.instances;
                } else {
                    contentType = listOverviewsClassificationRequest['Content-Type'];
                    from = listOverviewsClassificationRequest['from'];
                    to = listOverviewsClassificationRequest['to'];
                    enterpriseProjectId = listOverviewsClassificationRequest['enterprise_project_id'];
                    top = listOverviewsClassificationRequest['top'];
                    hosts = listOverviewsClassificationRequest['hosts'];
                    instances = listOverviewsClassificationRequest['instances'];
                }
            }

        
            if (from === null || from === undefined) {
                throw new RequiredError('from','Required parameter from was null or undefined when calling listOverviewsClassification.');
            }
            if (from !== null && from !== undefined) {
                localVarQueryParameter['from'] = from;
            }
            if (to === null || to === undefined) {
                throw new RequiredError('to','Required parameter to was null or undefined when calling listOverviewsClassification.');
            }
            if (to !== null && to !== undefined) {
                localVarQueryParameter['to'] = to;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (top !== null && top !== undefined) {
                localVarQueryParameter['top'] = top;
            }
            if (hosts !== null && hosts !== undefined) {
                localVarQueryParameter['hosts'] = hosts;
            }
            if (instances !== null && instances !== undefined) {
                localVarQueryParameter['instances'] = instances;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询防护策略列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPolicy(listPolicyRequest?: ListPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let enterpriseProjectId;
            
            let page;
            
            let pagesize;
            
            let name;

            if (listPolicyRequest !== null && listPolicyRequest !== undefined) {
                if (listPolicyRequest instanceof ListPolicyRequest) {
                    contentType = listPolicyRequest.contentType;
                    enterpriseProjectId = listPolicyRequest.enterpriseProjectId;
                    page = listPolicyRequest.page;
                    pagesize = listPolicyRequest.pagesize;
                    name = listPolicyRequest.name;
                } else {
                    contentType = listPolicyRequest['Content-Type'];
                    enterpriseProjectId = listPolicyRequest['enterprise_project_id'];
                    page = listPolicyRequest['page'];
                    pagesize = listPolicyRequest['pagesize'];
                    name = listPolicyRequest['name'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (pagesize !== null && pagesize !== undefined) {
                localVarQueryParameter['pagesize'] = pagesize;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 独享模式域名列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPremiumHost(listPremiumHostRequest?: ListPremiumHostRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/premium-waf/host",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let enterpriseProjectId;
            
            let page;
            
            let pagesize;
            
            let hostname;
            
            let policyname;
            
            let protectStatus;

            if (listPremiumHostRequest !== null && listPremiumHostRequest !== undefined) {
                if (listPremiumHostRequest instanceof ListPremiumHostRequest) {
                    contentType = listPremiumHostRequest.contentType;
                    enterpriseProjectId = listPremiumHostRequest.enterpriseProjectId;
                    page = listPremiumHostRequest.page;
                    pagesize = listPremiumHostRequest.pagesize;
                    hostname = listPremiumHostRequest.hostname;
                    policyname = listPremiumHostRequest.policyname;
                    protectStatus = listPremiumHostRequest.protectStatus;
                } else {
                    contentType = listPremiumHostRequest['Content-Type'];
                    enterpriseProjectId = listPremiumHostRequest['enterprise_project_id'];
                    page = listPremiumHostRequest['page'];
                    pagesize = listPremiumHostRequest['pagesize'];
                    hostname = listPremiumHostRequest['hostname'];
                    policyname = listPremiumHostRequest['policyname'];
                    protectStatus = listPremiumHostRequest['protect_status'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (pagesize !== null && pagesize !== undefined) {
                localVarQueryParameter['pagesize'] = pagesize;
            }
            if (hostname !== null && hostname !== undefined) {
                localVarQueryParameter['hostname'] = hostname;
            }
            if (policyname !== null && policyname !== undefined) {
                localVarQueryParameter['policyname'] = policyname;
            }
            if (protectStatus !== null && protectStatus !== undefined) {
                localVarQueryParameter['protect_status'] = protectStatus;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询隐私屏蔽防护规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPrivacyRule(listPrivacyRuleRequest?: ListPrivacyRuleRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/policy/{policy_id}/privacy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let policyId;
            
            let enterpriseProjectId;
            
            let page;
            
            let pagesize;

            if (listPrivacyRuleRequest !== null && listPrivacyRuleRequest !== undefined) {
                if (listPrivacyRuleRequest instanceof ListPrivacyRuleRequest) {
                    contentType = listPrivacyRuleRequest.contentType;
                    policyId = listPrivacyRuleRequest.policyId;
                    enterpriseProjectId = listPrivacyRuleRequest.enterpriseProjectId;
                    page = listPrivacyRuleRequest.page;
                    pagesize = listPrivacyRuleRequest.pagesize;
                } else {
                    contentType = listPrivacyRuleRequest['Content-Type'];
                    policyId = listPrivacyRuleRequest['policy_id'];
                    enterpriseProjectId = listPrivacyRuleRequest['enterprise_project_id'];
                    page = listPrivacyRuleRequest['page'];
                    pagesize = listPrivacyRuleRequest['pagesize'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling listPrivacyRule.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (pagesize !== null && pagesize !== undefined) {
                localVarQueryParameter['pagesize'] = pagesize;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询安全统计qps次数。需要注意的是，安全统计相关的接口，暂时不能支持任意时间的查询。只能支持 console上显示的 昨天，今天，3天，7天和30天 数据查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listQpsTimeline(listQpsTimelineRequest?: ListQpsTimelineRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/overviews/qps/timeline",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let from;
            
            let to;
            
            let enterpriseProjectId;
            
            let hosts;
            
            let instances;
            
            let groupBy;

            if (listQpsTimelineRequest !== null && listQpsTimelineRequest !== undefined) {
                if (listQpsTimelineRequest instanceof ListQpsTimelineRequest) {
                    contentType = listQpsTimelineRequest.contentType;
                    from = listQpsTimelineRequest.from;
                    to = listQpsTimelineRequest.to;
                    enterpriseProjectId = listQpsTimelineRequest.enterpriseProjectId;
                    hosts = listQpsTimelineRequest.hosts;
                    instances = listQpsTimelineRequest.instances;
                    groupBy = listQpsTimelineRequest.groupBy;
                } else {
                    contentType = listQpsTimelineRequest['Content-Type'];
                    from = listQpsTimelineRequest['from'];
                    to = listQpsTimelineRequest['to'];
                    enterpriseProjectId = listQpsTimelineRequest['enterprise_project_id'];
                    hosts = listQpsTimelineRequest['hosts'];
                    instances = listQpsTimelineRequest['instances'];
                    groupBy = listQpsTimelineRequest['group_by'];
                }
            }

        
            if (from === null || from === undefined) {
                throw new RequiredError('from','Required parameter from was null or undefined when calling listQpsTimeline.');
            }
            if (from !== null && from !== undefined) {
                localVarQueryParameter['from'] = from;
            }
            if (to === null || to === undefined) {
                throw new RequiredError('to','Required parameter to was null or undefined when calling listQpsTimeline.');
            }
            if (to !== null && to !== undefined) {
                localVarQueryParameter['to'] = to;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (hosts !== null && hosts !== undefined) {
                localVarQueryParameter['hosts'] = hosts;
            }
            if (instances !== null && instances !== undefined) {
                localVarQueryParameter['instances'] = instances;
            }
            if (groupBy !== null && groupBy !== undefined) {
                localVarQueryParameter['group_by'] = groupBy;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询安全总览中请求次数时间线统计数据。需要注意的是，安全总览相关的接口，暂时不能支持任意时间的查询。只能支持 console上显示的 昨天，今天，3天，7天和30天 数据查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRequestTimeline(listRequestTimelineRequest?: ListRequestTimelineRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/overviews/request/timeline",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let from;
            
            let to;
            
            let enterpriseProjectId;
            
            let hosts;
            
            let instances;
            
            let groupBy;

            if (listRequestTimelineRequest !== null && listRequestTimelineRequest !== undefined) {
                if (listRequestTimelineRequest instanceof ListRequestTimelineRequest) {
                    contentType = listRequestTimelineRequest.contentType;
                    from = listRequestTimelineRequest.from;
                    to = listRequestTimelineRequest.to;
                    enterpriseProjectId = listRequestTimelineRequest.enterpriseProjectId;
                    hosts = listRequestTimelineRequest.hosts;
                    instances = listRequestTimelineRequest.instances;
                    groupBy = listRequestTimelineRequest.groupBy;
                } else {
                    contentType = listRequestTimelineRequest['Content-Type'];
                    from = listRequestTimelineRequest['from'];
                    to = listRequestTimelineRequest['to'];
                    enterpriseProjectId = listRequestTimelineRequest['enterprise_project_id'];
                    hosts = listRequestTimelineRequest['hosts'];
                    instances = listRequestTimelineRequest['instances'];
                    groupBy = listRequestTimelineRequest['group_by'];
                }
            }

        
            if (from === null || from === undefined) {
                throw new RequiredError('from','Required parameter from was null or undefined when calling listRequestTimeline.');
            }
            if (from !== null && from !== undefined) {
                localVarQueryParameter['from'] = from;
            }
            if (to === null || to === undefined) {
                throw new RequiredError('to','Required parameter to was null or undefined when calling listRequestTimeline.');
            }
            if (to !== null && to !== undefined) {
                localVarQueryParameter['to'] = to;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (hosts !== null && hosts !== undefined) {
                localVarQueryParameter['hosts'] = hosts;
            }
            if (instances !== null && instances !== undefined) {
                localVarQueryParameter['instances'] = instances;
            }
            if (groupBy !== null && groupBy !== undefined) {
                localVarQueryParameter['group_by'] = groupBy;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询安全总览请求与攻击数量。需要注意的是，安全总览相关的接口，暂时不能支持任意时间的查询。只能支持 console上显示的 昨天，今天，3天，7天和30天 数据查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listStatistics(listStatisticsRequest?: ListStatisticsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/overviews/statistics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let from;
            
            let to;
            
            let enterpriseProjectId;
            
            let hosts;
            
            let instances;

            if (listStatisticsRequest !== null && listStatisticsRequest !== undefined) {
                if (listStatisticsRequest instanceof ListStatisticsRequest) {
                    contentType = listStatisticsRequest.contentType;
                    from = listStatisticsRequest.from;
                    to = listStatisticsRequest.to;
                    enterpriseProjectId = listStatisticsRequest.enterpriseProjectId;
                    hosts = listStatisticsRequest.hosts;
                    instances = listStatisticsRequest.instances;
                } else {
                    contentType = listStatisticsRequest['Content-Type'];
                    from = listStatisticsRequest['from'];
                    to = listStatisticsRequest['to'];
                    enterpriseProjectId = listStatisticsRequest['enterprise_project_id'];
                    hosts = listStatisticsRequest['hosts'];
                    instances = listStatisticsRequest['instances'];
                }
            }

        
            if (from === null || from === undefined) {
                throw new RequiredError('from','Required parameter from was null or undefined when calling listStatistics.');
            }
            if (from !== null && from !== undefined) {
                localVarQueryParameter['from'] = from;
            }
            if (to === null || to === undefined) {
                throw new RequiredError('to','Required parameter to was null or undefined when calling listStatistics.');
            }
            if (to !== null && to !== undefined) {
                localVarQueryParameter['to'] = to;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (hosts !== null && hosts !== undefined) {
                localVarQueryParameter['hosts'] = hosts;
            }
            if (instances !== null && instances !== undefined) {
                localVarQueryParameter['instances'] = instances;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询业务异常TOP统计信息。需要注意的是，安全总览相关的接口，暂时不能支持任意时间的查询。只能支持 console上显示的 昨天，今天，3天，7天和30天 数据查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTopAbnormal(listTopAbnormalRequest?: ListTopAbnormalRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/overviews/abnormal",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let from;
            
            let to;
            
            let enterpriseProjectId;
            
            let top;
            
            let code;
            
            let hosts;
            
            let instances;

            if (listTopAbnormalRequest !== null && listTopAbnormalRequest !== undefined) {
                if (listTopAbnormalRequest instanceof ListTopAbnormalRequest) {
                    contentType = listTopAbnormalRequest.contentType;
                    from = listTopAbnormalRequest.from;
                    to = listTopAbnormalRequest.to;
                    enterpriseProjectId = listTopAbnormalRequest.enterpriseProjectId;
                    top = listTopAbnormalRequest.top;
                    code = listTopAbnormalRequest.code;
                    hosts = listTopAbnormalRequest.hosts;
                    instances = listTopAbnormalRequest.instances;
                } else {
                    contentType = listTopAbnormalRequest['Content-Type'];
                    from = listTopAbnormalRequest['from'];
                    to = listTopAbnormalRequest['to'];
                    enterpriseProjectId = listTopAbnormalRequest['enterprise_project_id'];
                    top = listTopAbnormalRequest['top'];
                    code = listTopAbnormalRequest['code'];
                    hosts = listTopAbnormalRequest['hosts'];
                    instances = listTopAbnormalRequest['instances'];
                }
            }

        
            if (from === null || from === undefined) {
                throw new RequiredError('from','Required parameter from was null or undefined when calling listTopAbnormal.');
            }
            if (from !== null && from !== undefined) {
                localVarQueryParameter['from'] = from;
            }
            if (to === null || to === undefined) {
                throw new RequiredError('to','Required parameter to was null or undefined when calling listTopAbnormal.');
            }
            if (to !== null && to !== undefined) {
                localVarQueryParameter['to'] = to;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (top !== null && top !== undefined) {
                localVarQueryParameter['top'] = top;
            }
            if (code !== null && code !== undefined) {
                localVarQueryParameter['code'] = code;
            }
            if (hosts !== null && hosts !== undefined) {
                localVarQueryParameter['hosts'] = hosts;
            }
            if (instances !== null && instances !== undefined) {
                localVarQueryParameter['instances'] = instances;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询引用表列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listValueList(listValueListRequest?: ListValueListRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/valuelist",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let page;
            
            let pagesize;
            
            let name;

            if (listValueListRequest !== null && listValueListRequest !== undefined) {
                if (listValueListRequest instanceof ListValueListRequest) {
                    contentType = listValueListRequest.contentType;
                    page = listValueListRequest.page;
                    pagesize = listValueListRequest.pagesize;
                    name = listValueListRequest.name;
                } else {
                    contentType = listValueListRequest['Content-Type'];
                    page = listValueListRequest['page'];
                    pagesize = listValueListRequest['pagesize'];
                    name = listValueListRequest['name'];
                }
            }

        
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (pagesize !== null && pagesize !== undefined) {
                localVarQueryParameter['pagesize'] = pagesize;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询黑白名单规则列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWhiteblackipRule(listWhiteblackipRuleRequest?: ListWhiteblackipRuleRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/policy/{policy_id}/whiteblackip",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let policyId;
            
            let enterpriseProjectId;
            
            let page;
            
            let pagesize;
            
            let name;

            if (listWhiteblackipRuleRequest !== null && listWhiteblackipRuleRequest !== undefined) {
                if (listWhiteblackipRuleRequest instanceof ListWhiteblackipRuleRequest) {
                    contentType = listWhiteblackipRuleRequest.contentType;
                    policyId = listWhiteblackipRuleRequest.policyId;
                    enterpriseProjectId = listWhiteblackipRuleRequest.enterpriseProjectId;
                    page = listWhiteblackipRuleRequest.page;
                    pagesize = listWhiteblackipRuleRequest.pagesize;
                    name = listWhiteblackipRuleRequest.name;
                } else {
                    contentType = listWhiteblackipRuleRequest['Content-Type'];
                    policyId = listWhiteblackipRuleRequest['policy_id'];
                    enterpriseProjectId = listWhiteblackipRuleRequest['enterprise_project_id'];
                    page = listWhiteblackipRuleRequest['page'];
                    pagesize = listWhiteblackipRuleRequest['pagesize'];
                    name = listWhiteblackipRuleRequest['name'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling listWhiteblackipRule.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (pagesize !== null && pagesize !== undefined) {
                localVarQueryParameter['pagesize'] = pagesize;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 按企业项目迁移防护域名，仅专业版与独享版支持该功能
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        migrateCompositeHosts(migrateCompositeHostsRequest?: MigrateCompositeHostsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/composite-waf/hosts/migration",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            
            let contentType;
            
            let enterpriseProjectId;
            
            let targetEnterpriseProjectId;

            if (migrateCompositeHostsRequest !== null && migrateCompositeHostsRequest !== undefined) {
                if (migrateCompositeHostsRequest instanceof MigrateCompositeHostsRequest) {
                    contentType = migrateCompositeHostsRequest.contentType;
                    enterpriseProjectId = migrateCompositeHostsRequest.enterpriseProjectId;
                    targetEnterpriseProjectId = migrateCompositeHostsRequest.targetEnterpriseProjectId;
                    body = migrateCompositeHostsRequest.body
                } else {
                    contentType = migrateCompositeHostsRequest['Content-Type'];
                    enterpriseProjectId = migrateCompositeHostsRequest['enterprise_project_id'];
                    targetEnterpriseProjectId = migrateCompositeHostsRequest['target_enterprise_project_id'];
                    body = migrateCompositeHostsRequest['body'];
                }
            }

        
            if (enterpriseProjectId === null || enterpriseProjectId === undefined) {
                throw new RequiredError('enterpriseProjectId','Required parameter enterpriseProjectId was null or undefined when calling migrateCompositeHosts.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (targetEnterpriseProjectId === null || targetEnterpriseProjectId === undefined) {
                throw new RequiredError('targetEnterpriseProjectId','Required parameter targetEnterpriseProjectId was null or undefined when calling migrateCompositeHosts.');
            }
            if (targetEnterpriseProjectId !== null && targetEnterpriseProjectId !== undefined) {
                localVarQueryParameter['target_enterprise_project_id'] = targetEnterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重命名WAF独享引擎。独享模式只在部分局点支持，包括：华北-北京四、华东-上海一、华南-广州、华南-深圳  、中国-香港、亚太-曼谷、 亚太-新加坡。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        renameInstance(renameInstanceRequest?: RenameInstanceRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/premium-waf/instance/{instance_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            
            let contentType;
            
            let instanceId;
            
            let enterpriseProjectId;

            if (renameInstanceRequest !== null && renameInstanceRequest !== undefined) {
                if (renameInstanceRequest instanceof RenameInstanceRequest) {
                    contentType = renameInstanceRequest.contentType;
                    instanceId = renameInstanceRequest.instanceId;
                    enterpriseProjectId = renameInstanceRequest.enterpriseProjectId;
                    body = renameInstanceRequest.body
                } else {
                    contentType = renameInstanceRequest['Content-Type'];
                    instanceId = renameInstanceRequest['instance_id'];
                    enterpriseProjectId = renameInstanceRequest['enterprise_project_id'];
                    body = renameInstanceRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling renameInstance.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询证书
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCertificate(showCertificateRequest?: ShowCertificateRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/certificate/{certificate_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let certificateId;
            
            let enterpriseProjectId;

            if (showCertificateRequest !== null && showCertificateRequest !== undefined) {
                if (showCertificateRequest instanceof ShowCertificateRequest) {
                    contentType = showCertificateRequest.contentType;
                    certificateId = showCertificateRequest.certificateId;
                    enterpriseProjectId = showCertificateRequest.enterpriseProjectId;
                } else {
                    contentType = showCertificateRequest['Content-Type'];
                    certificateId = showCertificateRequest['certificate_id'];
                    enterpriseProjectId = showCertificateRequest['enterprise_project_id'];
                }
            }

        
            if (certificateId === null || certificateId === undefined) {
            throw new RequiredError('certificateId','Required parameter certificateId was null or undefined when calling showCertificate.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'certificate_id': certificateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据Id查询防护域名
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCompositeHost(showCompositeHostRequest?: ShowCompositeHostRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/composite-waf/host/{host_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let hostId;
            
            let enterpriseProjectId;

            if (showCompositeHostRequest !== null && showCompositeHostRequest !== undefined) {
                if (showCompositeHostRequest instanceof ShowCompositeHostRequest) {
                    contentType = showCompositeHostRequest.contentType;
                    hostId = showCompositeHostRequest.hostId;
                    enterpriseProjectId = showCompositeHostRequest.enterpriseProjectId;
                } else {
                    contentType = showCompositeHostRequest['Content-Type'];
                    hostId = showCompositeHostRequest['host_id'];
                    enterpriseProjectId = showCompositeHostRequest['enterprise_project_id'];
                }
            }

        
            if (hostId === null || hostId === undefined) {
            throw new RequiredError('hostId','Required parameter hostId was null or undefined when calling showCompositeHost.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'host_id': hostId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 局点支持特性查询
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showConsoleConfig(showConsoleConfigRequest?: ShowConsoleConfigRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/config/console",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;

            if (showConsoleConfigRequest !== null && showConsoleConfigRequest !== undefined) {
                if (showConsoleConfigRequest instanceof ShowConsoleConfigRequest) {
                    contentType = showConsoleConfigRequest.contentType;
                } else {
                    contentType = showConsoleConfigRequest['Content-Type'];
                }
            }

        
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定事件id的防护事件详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showEvent(showEventRequest?: ShowEventRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/event/{eventid}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let eventid;
            
            let enterpriseProjectId;

            if (showEventRequest !== null && showEventRequest !== undefined) {
                if (showEventRequest instanceof ShowEventRequest) {
                    contentType = showEventRequest.contentType;
                    eventid = showEventRequest.eventid;
                    enterpriseProjectId = showEventRequest.enterpriseProjectId;
                } else {
                    contentType = showEventRequest['Content-Type'];
                    eventid = showEventRequest['eventid'];
                    enterpriseProjectId = showEventRequest['enterprise_project_id'];
                }
            }

        
            if (eventid === null || eventid === undefined) {
            throw new RequiredError('eventid','Required parameter eventid was null or undefined when calling showEvent.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'eventid': eventid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据防护域名Id查询云模式防护域名详细信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showHost(showHostRequest?: ShowHostRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/instance/{instance_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let instanceId;
            
            let enterpriseProjectId;

            if (showHostRequest !== null && showHostRequest !== undefined) {
                if (showHostRequest instanceof ShowHostRequest) {
                    contentType = showHostRequest.contentType;
                    instanceId = showHostRequest.instanceId;
                    enterpriseProjectId = showHostRequest.enterpriseProjectId;
                } else {
                    contentType = showHostRequest['Content-Type'];
                    instanceId = showHostRequest['instance_id'];
                    enterpriseProjectId = showHostRequest['enterprise_project_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showHost.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询WAF独享引擎信息。独享模式只在部分局点支持，包括：华北-北京四、华东-上海一、华南-广州、华南-深圳  、中国-香港、亚太-曼谷、 亚太-新加坡。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstance(showInstanceRequest?: ShowInstanceRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/premium-waf/instance/{instance_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let instanceId;
            
            let enterpriseProjectId;

            if (showInstanceRequest !== null && showInstanceRequest !== undefined) {
                if (showInstanceRequest instanceof ShowInstanceRequest) {
                    contentType = showInstanceRequest.contentType;
                    instanceId = showInstanceRequest.instanceId;
                    enterpriseProjectId = showInstanceRequest.enterpriseProjectId;
                } else {
                    contentType = showInstanceRequest['Content-Type'];
                    instanceId = showInstanceRequest['instance_id'];
                    enterpriseProjectId = showInstanceRequest['enterprise_project_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstance.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询ip地址组明细
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showIpGroup(showIpGroupRequest?: ShowIpGroupRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/ip-group/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let id;
            
            let enterpriseProjectId;

            if (showIpGroupRequest !== null && showIpGroupRequest !== undefined) {
                if (showIpGroupRequest instanceof ShowIpGroupRequest) {
                    contentType = showIpGroupRequest.contentType;
                    id = showIpGroupRequest.id;
                    enterpriseProjectId = showIpGroupRequest.enterpriseProjectId;
                } else {
                    contentType = showIpGroupRequest['Content-Type'];
                    id = showIpGroupRequest['id'];
                    enterpriseProjectId = showIpGroupRequest['enterprise_project_id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showIpGroup.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询lts配置信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showLtsInfoConfig(showLtsInfoConfigRequest?: ShowLtsInfoConfigRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/config/lts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let enterpriseProjectId;

            if (showLtsInfoConfigRequest !== null && showLtsInfoConfigRequest !== undefined) {
                if (showLtsInfoConfigRequest instanceof ShowLtsInfoConfigRequest) {
                    contentType = showLtsInfoConfigRequest.contentType;
                    enterpriseProjectId = showLtsInfoConfigRequest.enterpriseProjectId;
                } else {
                    contentType = showLtsInfoConfigRequest['Content-Type'];
                    enterpriseProjectId = showLtsInfoConfigRequest['enterprise_project_id'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据Id查询防护策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPolicy(showPolicyRequest?: ShowPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/policy/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let policyId;
            
            let enterpriseProjectId;

            if (showPolicyRequest !== null && showPolicyRequest !== undefined) {
                if (showPolicyRequest instanceof ShowPolicyRequest) {
                    contentType = showPolicyRequest.contentType;
                    policyId = showPolicyRequest.policyId;
                    enterpriseProjectId = showPolicyRequest.enterpriseProjectId;
                } else {
                    contentType = showPolicyRequest['Content-Type'];
                    policyId = showPolicyRequest['policy_id'];
                    enterpriseProjectId = showPolicyRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling showPolicy.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看独享模式域名配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPremiumHost(showPremiumHostRequest?: ShowPremiumHostRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/premium-waf/host/{host_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let hostId;
            
            let enterpriseProjectId;

            if (showPremiumHostRequest !== null && showPremiumHostRequest !== undefined) {
                if (showPremiumHostRequest instanceof ShowPremiumHostRequest) {
                    contentType = showPremiumHostRequest.contentType;
                    hostId = showPremiumHostRequest.hostId;
                    enterpriseProjectId = showPremiumHostRequest.enterpriseProjectId;
                } else {
                    contentType = showPremiumHostRequest['Content-Type'];
                    hostId = showPremiumHostRequest['host_id'];
                    enterpriseProjectId = showPremiumHostRequest['enterprise_project_id'];
                }
            }

        
            if (hostId === null || hostId === undefined) {
            throw new RequiredError('hostId','Required parameter hostId was null or undefined when calling showPremiumHost.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'host_id': hostId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询WAF回源Ip信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSourceIp(showSourceIpRequest?: ShowSourceIpRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/config/source-ip",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;

            if (showSourceIpRequest !== null && showSourceIpRequest !== undefined) {
                if (showSourceIpRequest instanceof ShowSourceIpRequest) {
                    contentType = showSourceIpRequest.contentType;
                } else {
                    contentType = showSourceIpRequest['Content-Type'];
                }
            }

        
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户订购信息，包括云模式包周期、按需计费、独享模式
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSubscriptionInfo(showSubscriptionInfoRequest?: ShowSubscriptionInfoRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/subscription",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;

            if (showSubscriptionInfoRequest !== null && showSubscriptionInfoRequest !== undefined) {
                if (showSubscriptionInfoRequest instanceof ShowSubscriptionInfoRequest) {
                    contentType = showSubscriptionInfoRequest.contentType;
                } else {
                    contentType = showSubscriptionInfoRequest['Content-Type'];
                }
            }

        
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新告警通知配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAlertNoticeConfig(updateAlertNoticeConfigRequest?: UpdateAlertNoticeConfigRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/waf/alert/{alert_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let contentType;
            
            let xLanguage;
            
            let alertId;

            if (updateAlertNoticeConfigRequest !== null && updateAlertNoticeConfigRequest !== undefined) {
                if (updateAlertNoticeConfigRequest instanceof UpdateAlertNoticeConfigRequest) {
                    contentType = updateAlertNoticeConfigRequest.contentType;
                    xLanguage = updateAlertNoticeConfigRequest.xLanguage;
                    alertId = updateAlertNoticeConfigRequest.alertId;
                    body = updateAlertNoticeConfigRequest.body
                } else {
                    contentType = updateAlertNoticeConfigRequest['Content-Type'];
                    xLanguage = updateAlertNoticeConfigRequest['X-Language'];
                    alertId = updateAlertNoticeConfigRequest['alert_id'];
                    body = updateAlertNoticeConfigRequest['body'];
                }
            }

        
            if (alertId === null || alertId === undefined) {
            throw new RequiredError('alertId','Required parameter alertId was null or undefined when calling updateAlertNoticeConfig.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'alert_id': alertId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改证书
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateCertificate(updateCertificateRequest?: UpdateCertificateRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/waf/certificate/{certificate_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            
            let contentType;
            
            let certificateId;
            
            let enterpriseProjectId;

            if (updateCertificateRequest !== null && updateCertificateRequest !== undefined) {
                if (updateCertificateRequest instanceof UpdateCertificateRequest) {
                    contentType = updateCertificateRequest.contentType;
                    certificateId = updateCertificateRequest.certificateId;
                    enterpriseProjectId = updateCertificateRequest.enterpriseProjectId;
                    body = updateCertificateRequest.body
                } else {
                    contentType = updateCertificateRequest['Content-Type'];
                    certificateId = updateCertificateRequest['certificate_id'];
                    enterpriseProjectId = updateCertificateRequest['enterprise_project_id'];
                    body = updateCertificateRequest['body'];
                }
            }

        
            if (certificateId === null || certificateId === undefined) {
            throw new RequiredError('certificateId','Required parameter certificateId was null or undefined when calling updateCertificate.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'certificate_id': certificateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新地理位置控制防护规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateGeoipRule(updateGeoipRuleRequest?: UpdateGeoipRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/waf/policy/{policy_id}/geoip/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            
            let contentType;
            
            let policyId;
            
            let ruleId;
            
            let enterpriseProjectId;

            if (updateGeoipRuleRequest !== null && updateGeoipRuleRequest !== undefined) {
                if (updateGeoipRuleRequest instanceof UpdateGeoipRuleRequest) {
                    contentType = updateGeoipRuleRequest.contentType;
                    policyId = updateGeoipRuleRequest.policyId;
                    ruleId = updateGeoipRuleRequest.ruleId;
                    body = updateGeoipRuleRequest.body
                    enterpriseProjectId = updateGeoipRuleRequest.enterpriseProjectId;
                } else {
                    contentType = updateGeoipRuleRequest['Content-Type'];
                    policyId = updateGeoipRuleRequest['policy_id'];
                    ruleId = updateGeoipRuleRequest['rule_id'];
                    body = updateGeoipRuleRequest['body'];
                    enterpriseProjectId = updateGeoipRuleRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling updateGeoipRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling updateGeoipRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'policy_id': policyId,'rule_id': ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新云模式防护域名配置，在没有填入源站信息server的原始数据的情况下，则新的源站信息server会覆盖源站信息，而不是新增源站。此外，请求体可只传需要更新的部分。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateHost(updateHostRequest?: UpdateHostRequest) {
            const options = {
                method: "PATCH",
                url: "/v1/{project_id}/waf/instance/{instance_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            
            let contentType;
            
            let instanceId;
            
            let enterpriseProjectId;

            if (updateHostRequest !== null && updateHostRequest !== undefined) {
                if (updateHostRequest instanceof UpdateHostRequest) {
                    contentType = updateHostRequest.contentType;
                    instanceId = updateHostRequest.instanceId;
                    enterpriseProjectId = updateHostRequest.enterpriseProjectId;
                    body = updateHostRequest.body
                } else {
                    contentType = updateHostRequest['Content-Type'];
                    instanceId = updateHostRequest['instance_id'];
                    enterpriseProjectId = updateHostRequest['enterprise_project_id'];
                    body = updateHostRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateHost.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改域名防护状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateHostProtectStatus(updateHostProtectStatusRequest?: UpdateHostProtectStatusRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/waf/instance/{instance_id}/protect-status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            
            let contentType;
            
            let instanceId;
            
            let enterpriseProjectId;

            if (updateHostProtectStatusRequest !== null && updateHostProtectStatusRequest !== undefined) {
                if (updateHostProtectStatusRequest instanceof UpdateHostProtectStatusRequest) {
                    contentType = updateHostProtectStatusRequest.contentType;
                    instanceId = updateHostProtectStatusRequest.instanceId;
                    enterpriseProjectId = updateHostProtectStatusRequest.enterpriseProjectId;
                    body = updateHostProtectStatusRequest.body
                } else {
                    contentType = updateHostProtectStatusRequest['Content-Type'];
                    instanceId = updateHostProtectStatusRequest['instance_id'];
                    enterpriseProjectId = updateHostProtectStatusRequest['enterprise_project_id'];
                    body = updateHostProtectStatusRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateHostProtectStatus.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改ip地址组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateIpGroup(updateIpGroupRequest?: UpdateIpGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/waf/ip-group/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            
            let contentType;
            
            let id;
            
            let enterpriseProjectId;

            if (updateIpGroupRequest !== null && updateIpGroupRequest !== undefined) {
                if (updateIpGroupRequest instanceof UpdateIpGroupRequest) {
                    contentType = updateIpGroupRequest.contentType;
                    id = updateIpGroupRequest.id;
                    body = updateIpGroupRequest.body
                    enterpriseProjectId = updateIpGroupRequest.enterpriseProjectId;
                } else {
                    contentType = updateIpGroupRequest['Content-Type'];
                    id = updateIpGroupRequest['id'];
                    body = updateIpGroupRequest['body'];
                    enterpriseProjectId = updateIpGroupRequest['enterprise_project_id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateIpGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 配置全量日志lts，该接口可用来开启与关闭waf全量日志以及配置日志组和日志流。日志组id和日志流id可前往云日志服务获取。配置的日志流id要属于所配置的日志组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateLtsInfoConfig(updateLtsInfoConfigRequest?: UpdateLtsInfoConfigRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/waf/config/lts/{ltsconfig_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            
            let contentType;
            
            let ltsconfigId;
            
            let enterpriseProjectId;

            if (updateLtsInfoConfigRequest !== null && updateLtsInfoConfigRequest !== undefined) {
                if (updateLtsInfoConfigRequest instanceof UpdateLtsInfoConfigRequest) {
                    contentType = updateLtsInfoConfigRequest.contentType;
                    ltsconfigId = updateLtsInfoConfigRequest.ltsconfigId;
                    body = updateLtsInfoConfigRequest.body
                    enterpriseProjectId = updateLtsInfoConfigRequest.enterpriseProjectId;
                } else {
                    contentType = updateLtsInfoConfigRequest['Content-Type'];
                    ltsconfigId = updateLtsInfoConfigRequest['ltsconfig_id'];
                    body = updateLtsInfoConfigRequest['body'];
                    enterpriseProjectId = updateLtsInfoConfigRequest['enterprise_project_id'];
                }
            }

        
            if (ltsconfigId === null || ltsconfigId === undefined) {
            throw new RequiredError('ltsconfigId','Required parameter ltsconfigId was null or undefined when calling updateLtsInfoConfig.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'ltsconfig_id': ltsconfigId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新防护策略，请求体可只传需要更新的部分
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePolicy(updatePolicyRequest?: UpdatePolicyRequest) {
            const options = {
                method: "PATCH",
                url: "/v1/{project_id}/waf/policy/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            
            let contentType;
            
            let policyId;
            
            let enterpriseProjectId;

            if (updatePolicyRequest !== null && updatePolicyRequest !== undefined) {
                if (updatePolicyRequest instanceof UpdatePolicyRequest) {
                    contentType = updatePolicyRequest.contentType;
                    policyId = updatePolicyRequest.policyId;
                    body = updatePolicyRequest.body
                    enterpriseProjectId = updatePolicyRequest.enterpriseProjectId;
                } else {
                    contentType = updatePolicyRequest['Content-Type'];
                    policyId = updatePolicyRequest['policy_id'];
                    body = updatePolicyRequest['body'];
                    enterpriseProjectId = updatePolicyRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling updatePolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新防护策略的防护域名
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePolicyProtectHost(updatePolicyProtectHostRequest?: UpdatePolicyProtectHostRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/waf/policy/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let policyId;
            
            let hosts;
            
            let enterpriseProjectId;

            if (updatePolicyProtectHostRequest !== null && updatePolicyProtectHostRequest !== undefined) {
                if (updatePolicyProtectHostRequest instanceof UpdatePolicyProtectHostRequest) {
                    contentType = updatePolicyProtectHostRequest.contentType;
                    policyId = updatePolicyProtectHostRequest.policyId;
                    hosts = updatePolicyProtectHostRequest.hosts;
                    enterpriseProjectId = updatePolicyProtectHostRequest.enterpriseProjectId;
                } else {
                    contentType = updatePolicyProtectHostRequest['Content-Type'];
                    policyId = updatePolicyProtectHostRequest['policy_id'];
                    hosts = updatePolicyProtectHostRequest['hosts'];
                    enterpriseProjectId = updatePolicyProtectHostRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling updatePolicyProtectHost.');
            }
            if (hosts === null || hosts === undefined) {
                throw new RequiredError('hosts','Required parameter hosts was null or undefined when calling updatePolicyProtectHost.');
            }
            if (hosts !== null && hosts !== undefined) {
                localVarQueryParameter['hosts'] = hosts;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改单条规则的状态，用于开启或者关闭单条规则，比如关闭精准防护中某一条规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePolicyRuleStatus(updatePolicyRuleStatusRequest?: UpdatePolicyRuleStatusRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/waf/policy/{policy_id}/{ruletype}/{rule_id}/status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            
            let contentType;
            
            let policyId;
            
            let ruletype;
            
            let ruleId;
            
            let enterpriseProjectId;

            if (updatePolicyRuleStatusRequest !== null && updatePolicyRuleStatusRequest !== undefined) {
                if (updatePolicyRuleStatusRequest instanceof UpdatePolicyRuleStatusRequest) {
                    contentType = updatePolicyRuleStatusRequest.contentType;
                    policyId = updatePolicyRuleStatusRequest.policyId;
                    ruletype = updatePolicyRuleStatusRequest.ruletype;
                    ruleId = updatePolicyRuleStatusRequest.ruleId;
                    body = updatePolicyRuleStatusRequest.body
                    enterpriseProjectId = updatePolicyRuleStatusRequest.enterpriseProjectId;
                } else {
                    contentType = updatePolicyRuleStatusRequest['Content-Type'];
                    policyId = updatePolicyRuleStatusRequest['policy_id'];
                    ruletype = updatePolicyRuleStatusRequest['ruletype'];
                    ruleId = updatePolicyRuleStatusRequest['rule_id'];
                    body = updatePolicyRuleStatusRequest['body'];
                    enterpriseProjectId = updatePolicyRuleStatusRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling updatePolicyRuleStatus.');
            }
            if (ruletype === null || ruletype === undefined) {
            throw new RequiredError('ruletype','Required parameter ruletype was null or undefined when calling updatePolicyRuleStatus.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling updatePolicyRuleStatus.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'policy_id': policyId,'ruletype': ruletype,'rule_id': ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改独享模式域名配置，在没有填入源站信息server的原始数据的情况下，则新的源站信息server会覆盖源站信息，而不是新增源站。此外，请求体可只传需要更新的部分。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePremiumHost(updatePremiumHostRequest?: UpdatePremiumHostRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/premium-waf/host/{host_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            
            let contentType;
            
            let hostId;
            
            let enterpriseProjectId;

            if (updatePremiumHostRequest !== null && updatePremiumHostRequest !== undefined) {
                if (updatePremiumHostRequest instanceof UpdatePremiumHostRequest) {
                    contentType = updatePremiumHostRequest.contentType;
                    hostId = updatePremiumHostRequest.hostId;
                    enterpriseProjectId = updatePremiumHostRequest.enterpriseProjectId;
                    body = updatePremiumHostRequest.body
                } else {
                    contentType = updatePremiumHostRequest['Content-Type'];
                    hostId = updatePremiumHostRequest['host_id'];
                    enterpriseProjectId = updatePremiumHostRequest['enterprise_project_id'];
                    body = updatePremiumHostRequest['body'];
                }
            }

        
            if (hostId === null || hostId === undefined) {
            throw new RequiredError('hostId','Required parameter hostId was null or undefined when calling updatePremiumHost.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'host_id': hostId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改独享模式域名防护状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePremiumHostProtectStatus(updatePremiumHostProtectStatusRequest?: UpdatePremiumHostProtectStatusRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/premium-waf/host/{host_id}/protect-status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            
            let contentType;
            
            let hostId;
            
            let enterpriseProjectId;

            if (updatePremiumHostProtectStatusRequest !== null && updatePremiumHostProtectStatusRequest !== undefined) {
                if (updatePremiumHostProtectStatusRequest instanceof UpdatePremiumHostProtectStatusRequest) {
                    contentType = updatePremiumHostProtectStatusRequest.contentType;
                    hostId = updatePremiumHostProtectStatusRequest.hostId;
                    enterpriseProjectId = updatePremiumHostProtectStatusRequest.enterpriseProjectId;
                    body = updatePremiumHostProtectStatusRequest.body
                } else {
                    contentType = updatePremiumHostProtectStatusRequest['Content-Type'];
                    hostId = updatePremiumHostProtectStatusRequest['host_id'];
                    enterpriseProjectId = updatePremiumHostProtectStatusRequest['enterprise_project_id'];
                    body = updatePremiumHostProtectStatusRequest['body'];
                }
            }

        
            if (hostId === null || hostId === undefined) {
            throw new RequiredError('hostId','Required parameter hostId was null or undefined when calling updatePremiumHostProtectStatus.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'host_id': hostId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新隐私屏蔽防护规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePrivacyRule(updatePrivacyRuleRequest?: UpdatePrivacyRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/waf/policy/{policy_id}/privacy/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            
            let contentType;
            
            let policyId;
            
            let ruleId;
            
            let enterpriseProjectId;

            if (updatePrivacyRuleRequest !== null && updatePrivacyRuleRequest !== undefined) {
                if (updatePrivacyRuleRequest instanceof UpdatePrivacyRuleRequest) {
                    contentType = updatePrivacyRuleRequest.contentType;
                    policyId = updatePrivacyRuleRequest.policyId;
                    ruleId = updatePrivacyRuleRequest.ruleId;
                    body = updatePrivacyRuleRequest.body
                    enterpriseProjectId = updatePrivacyRuleRequest.enterpriseProjectId;
                } else {
                    contentType = updatePrivacyRuleRequest['Content-Type'];
                    policyId = updatePrivacyRuleRequest['policy_id'];
                    ruleId = updatePrivacyRuleRequest['rule_id'];
                    body = updatePrivacyRuleRequest['body'];
                    enterpriseProjectId = updatePrivacyRuleRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling updatePrivacyRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling updatePrivacyRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'policy_id': policyId,'rule_id': ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改引用表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateValueList(updateValueListRequest?: UpdateValueListRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/waf/valuelist/{valuelistid}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            
            let contentType;
            
            let valuelistid;
            
            let enterpriseProjectId;

            if (updateValueListRequest !== null && updateValueListRequest !== undefined) {
                if (updateValueListRequest instanceof UpdateValueListRequest) {
                    contentType = updateValueListRequest.contentType;
                    valuelistid = updateValueListRequest.valuelistid;
                    enterpriseProjectId = updateValueListRequest.enterpriseProjectId;
                    body = updateValueListRequest.body
                } else {
                    contentType = updateValueListRequest['Content-Type'];
                    valuelistid = updateValueListRequest['valuelistid'];
                    enterpriseProjectId = updateValueListRequest['enterprise_project_id'];
                    body = updateValueListRequest['body'];
                }
            }

        
            if (valuelistid === null || valuelistid === undefined) {
            throw new RequiredError('valuelistid','Required parameter valuelistid was null or undefined when calling updateValueList.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'valuelistid': valuelistid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新黑白名单防护规则，可以更新ip/ip段以及防护动作等信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateWhiteblackipRule(updateWhiteblackipRuleRequest?: UpdateWhiteblackipRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/waf/policy/{policy_id}/whiteblackip/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            
            let contentType;
            
            let policyId;
            
            let ruleId;
            
            let enterpriseProjectId;

            if (updateWhiteblackipRuleRequest !== null && updateWhiteblackipRuleRequest !== undefined) {
                if (updateWhiteblackipRuleRequest instanceof UpdateWhiteblackipRuleRequest) {
                    contentType = updateWhiteblackipRuleRequest.contentType;
                    policyId = updateWhiteblackipRuleRequest.policyId;
                    ruleId = updateWhiteblackipRuleRequest.ruleId;
                    body = updateWhiteblackipRuleRequest.body
                    enterpriseProjectId = updateWhiteblackipRuleRequest.enterpriseProjectId;
                } else {
                    contentType = updateWhiteblackipRuleRequest['Content-Type'];
                    policyId = updateWhiteblackipRuleRequest['policy_id'];
                    ruleId = updateWhiteblackipRuleRequest['rule_id'];
                    body = updateWhiteblackipRuleRequest['body'];
                    enterpriseProjectId = updateWhiteblackipRuleRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling updateWhiteblackipRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling updateWhiteblackipRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'policy_id': policyId,'rule_id': ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): WafClient {
    return new WafClient(client);
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