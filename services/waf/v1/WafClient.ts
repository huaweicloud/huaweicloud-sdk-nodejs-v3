import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AccessProgress } from './model/AccessProgress';
import { Action } from './model/Action';
import { AlertNoticeConfigResponse } from './model/AlertNoticeConfigResponse';
import { AlterWafProductInfo } from './model/AlterWafProductInfo';
import { AntiTamperRuleResponseBody } from './model/AntiTamperRuleResponseBody';
import { AnticrawlerCondition } from './model/AnticrawlerCondition';
import { AnticrawlerRule } from './model/AnticrawlerRule';
import { ApplyCertificateToHostRequest } from './model/ApplyCertificateToHostRequest';
import { ApplyCertificateToHostRequestBody } from './model/ApplyCertificateToHostRequestBody';
import { ApplyCertificateToHostResponse } from './model/ApplyCertificateToHostResponse';
import { AttackActionCountItem } from './model/AttackActionCountItem';
import { AttackTypeClassificationItem } from './model/AttackTypeClassificationItem';
import { AttackTypeItem } from './model/AttackTypeItem';
import { BandwidthStatisticsTimelineItem } from './model/BandwidthStatisticsTimelineItem';
import { BindHost } from './model/BindHost';
import { BlockPage } from './model/BlockPage';
import { CcCondition } from './model/CcCondition';
import { CcrulesListInfo } from './model/CcrulesListInfo';
import { CcrulesListInfoAction } from './model/CcrulesListInfoAction';
import { CcrulesListInfoActionDetail } from './model/CcrulesListInfoActionDetail';
import { CcrulesListInfoActionDetailResponse } from './model/CcrulesListInfoActionDetailResponse';
import { CcrulesListInfoTagCondition } from './model/CcrulesListInfoTagCondition';
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
import { ConfirmUserBundleRequest } from './model/ConfirmUserBundleRequest';
import { ConfirmUserBundleResponse } from './model/ConfirmUserBundleResponse';
import { CountItem } from './model/CountItem';
import { CreateAntiTamperRuleRequest } from './model/CreateAntiTamperRuleRequest';
import { CreateAntiTamperRuleResponse } from './model/CreateAntiTamperRuleResponse';
import { CreateAntiTamperRulesRequestBody } from './model/CreateAntiTamperRulesRequestBody';
import { CreateAnticrawlerRuleRequest } from './model/CreateAnticrawlerRuleRequest';
import { CreateAnticrawlerRuleRequestbody } from './model/CreateAnticrawlerRuleRequestbody';
import { CreateAnticrawlerRuleResponse } from './model/CreateAnticrawlerRuleResponse';
import { CreateAntileakageRuleRequest } from './model/CreateAntileakageRuleRequest';
import { CreateAntileakageRuleRequestBody } from './model/CreateAntileakageRuleRequestBody';
import { CreateAntileakageRuleRequestBodyAction } from './model/CreateAntileakageRuleRequestBodyAction';
import { CreateAntileakageRuleResponse } from './model/CreateAntileakageRuleResponse';
import { CreateCcRuleRequest } from './model/CreateCcRuleRequest';
import { CreateCcRuleRequestBody } from './model/CreateCcRuleRequestBody';
import { CreateCcRuleRequestBodyAction } from './model/CreateCcRuleRequestBodyAction';
import { CreateCcRuleRequestBodyActionDetail } from './model/CreateCcRuleRequestBodyActionDetail';
import { CreateCcRuleRequestBodyActionDetailResponse } from './model/CreateCcRuleRequestBodyActionDetailResponse';
import { CreateCcRuleResponse } from './model/CreateCcRuleResponse';
import { CreateCertificateRequest } from './model/CreateCertificateRequest';
import { CreateCertificateRequestBody } from './model/CreateCertificateRequestBody';
import { CreateCertificateResponse } from './model/CreateCertificateResponse';
import { CreateCloudWafPostPaidResourceRequest } from './model/CreateCloudWafPostPaidResourceRequest';
import { CreateCloudWafPostPaidResourceRequestbody } from './model/CreateCloudWafPostPaidResourceRequestbody';
import { CreateCloudWafPostPaidResourceResponse } from './model/CreateCloudWafPostPaidResourceResponse';
import { CreateCondition } from './model/CreateCondition';
import { CreateCustomRuleRequest } from './model/CreateCustomRuleRequest';
import { CreateCustomRuleRequestBody } from './model/CreateCustomRuleRequestBody';
import { CreateCustomRuleResponse } from './model/CreateCustomRuleResponse';
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
import { CreatePunishmentRuleRequest } from './model/CreatePunishmentRuleRequest';
import { CreatePunishmentRuleRequestBody } from './model/CreatePunishmentRuleRequestBody';
import { CreatePunishmentRuleResponse } from './model/CreatePunishmentRuleResponse';
import { CreateValueListRequest } from './model/CreateValueListRequest';
import { CreateValueListRequestBody } from './model/CreateValueListRequestBody';
import { CreateValueListResponse } from './model/CreateValueListResponse';
import { CreateWhiteBlackIpRuleRequestBody } from './model/CreateWhiteBlackIpRuleRequestBody';
import { CreateWhiteblackipRuleRequest } from './model/CreateWhiteblackipRuleRequest';
import { CreateWhiteblackipRuleResponse } from './model/CreateWhiteblackipRuleResponse';
import { CustomAction } from './model/CustomAction';
import { CustomConditions } from './model/CustomConditions';
import { CustomPage } from './model/CustomPage';
import { CustomRule } from './model/CustomRule';
import { CustomRuleConditions } from './model/CustomRuleConditions';
import { DeleteAnticrawlerRuleRequest } from './model/DeleteAnticrawlerRuleRequest';
import { DeleteAnticrawlerRuleResponse } from './model/DeleteAnticrawlerRuleResponse';
import { DeleteAntileakageRuleRequest } from './model/DeleteAntileakageRuleRequest';
import { DeleteAntileakageRuleResponse } from './model/DeleteAntileakageRuleResponse';
import { DeleteAntitamperRuleRequest } from './model/DeleteAntitamperRuleRequest';
import { DeleteAntitamperRuleResponse } from './model/DeleteAntitamperRuleResponse';
import { DeleteCcRuleRequest } from './model/DeleteCcRuleRequest';
import { DeleteCcRuleResponse } from './model/DeleteCcRuleResponse';
import { DeleteCertificateRequest } from './model/DeleteCertificateRequest';
import { DeleteCertificateResponse } from './model/DeleteCertificateResponse';
import { DeleteCloudWafPostPaidResourceRequest } from './model/DeleteCloudWafPostPaidResourceRequest';
import { DeleteCloudWafPostPaidResourceResponse } from './model/DeleteCloudWafPostPaidResourceResponse';
import { DeleteCustomRuleRequest } from './model/DeleteCustomRuleRequest';
import { DeleteCustomRuleResponse } from './model/DeleteCustomRuleResponse';
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
import { DeletePunishmentRuleRequest } from './model/DeletePunishmentRuleRequest';
import { DeletePunishmentRuleResponse } from './model/DeletePunishmentRuleResponse';
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
import { IgnoreAdvanced } from './model/IgnoreAdvanced';
import { IgnoreRuleBody } from './model/IgnoreRuleBody';
import { InstanceInfo } from './model/InstanceInfo';
import { InstanceTag } from './model/InstanceTag';
import { IpClassificationItem } from './model/IpClassificationItem';
import { IpGroup } from './model/IpGroup';
import { IpGroupBody } from './model/IpGroupBody';
import { IpItem } from './model/IpItem';
import { IpsItem } from './model/IpsItem';
import { LeakageListInfo } from './model/LeakageListInfo';
import { ListAnticrawlerRulesRequest } from './model/ListAnticrawlerRulesRequest';
import { ListAnticrawlerRulesResponse } from './model/ListAnticrawlerRulesResponse';
import { ListAntileakageRulesRequest } from './model/ListAntileakageRulesRequest';
import { ListAntileakageRulesResponse } from './model/ListAntileakageRulesResponse';
import { ListAntitamperRuleRequest } from './model/ListAntitamperRuleRequest';
import { ListAntitamperRuleResponse } from './model/ListAntitamperRuleResponse';
import { ListAttackActionTypesRequest } from './model/ListAttackActionTypesRequest';
import { ListAttackActionTypesResponse } from './model/ListAttackActionTypesResponse';
import { ListBandwidthTimelineRequest } from './model/ListBandwidthTimelineRequest';
import { ListBandwidthTimelineResponse } from './model/ListBandwidthTimelineResponse';
import { ListCcRulesRequest } from './model/ListCcRulesRequest';
import { ListCcRulesResponse } from './model/ListCcRulesResponse';
import { ListCertificatesRequest } from './model/ListCertificatesRequest';
import { ListCertificatesResponse } from './model/ListCertificatesResponse';
import { ListCompositeHostsRequest } from './model/ListCompositeHostsRequest';
import { ListCompositeHostsResponse } from './model/ListCompositeHostsResponse';
import { ListCustomRulesRequest } from './model/ListCustomRulesRequest';
import { ListCustomRulesResponse } from './model/ListCustomRulesResponse';
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
import { ListInstanceTagsRequest } from './model/ListInstanceTagsRequest';
import { ListInstanceTagsResponse } from './model/ListInstanceTagsResponse';
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
import { ListPunishmentRulesRequest } from './model/ListPunishmentRulesRequest';
import { ListPunishmentRulesResponse } from './model/ListPunishmentRulesResponse';
import { ListQpsTimelineRequest } from './model/ListQpsTimelineRequest';
import { ListQpsTimelineResponse } from './model/ListQpsTimelineResponse';
import { ListRequestTimelineRequest } from './model/ListRequestTimelineRequest';
import { ListRequestTimelineResponse } from './model/ListRequestTimelineResponse';
import { ListSecurityReportSubscriptionsRequest } from './model/ListSecurityReportSubscriptionsRequest';
import { ListSecurityReportSubscriptionsResponse } from './model/ListSecurityReportSubscriptionsResponse';
import { ListStatisticsRequest } from './model/ListStatisticsRequest';
import { ListStatisticsResponse } from './model/ListStatisticsResponse';
import { ListTopAbnormalRequest } from './model/ListTopAbnormalRequest';
import { ListTopAbnormalResponse } from './model/ListTopAbnormalResponse';
import { ListTopDomainsRequest } from './model/ListTopDomainsRequest';
import { ListTopDomainsResponse } from './model/ListTopDomainsResponse';
import { ListValueListRequest } from './model/ListValueListRequest';
import { ListValueListResponse } from './model/ListValueListResponse';
import { ListWebBasicProtectionRulesRequest } from './model/ListWebBasicProtectionRulesRequest';
import { ListWebBasicProtectionRulesResponse } from './model/ListWebBasicProtectionRulesResponse';
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
import { PunishmentInfo } from './model/PunishmentInfo';
import { RenameInstanceRequest } from './model/RenameInstanceRequest';
import { RenameInstanceRequestBody } from './model/RenameInstanceRequestBody';
import { RenameInstanceResponse } from './model/RenameInstanceResponse';
import { ResourceResponse } from './model/ResourceResponse';
import { RouteBody } from './model/RouteBody';
import { RouteServerBody } from './model/RouteServerBody';
import { RuleInfo } from './model/RuleInfo';
import { SecurityReportSubscriptionSummaryResponse } from './model/SecurityReportSubscriptionSummaryResponse';
import { ShareInfo } from './model/ShareInfo';
import { ShowAnticrawlerRuleRequest } from './model/ShowAnticrawlerRuleRequest';
import { ShowAnticrawlerRuleResponse } from './model/ShowAnticrawlerRuleResponse';
import { ShowAntileakageRuleRequest } from './model/ShowAntileakageRuleRequest';
import { ShowAntileakageRuleResponse } from './model/ShowAntileakageRuleResponse';
import { ShowAntitamperRuleRequest } from './model/ShowAntitamperRuleRequest';
import { ShowAntitamperRuleResponse } from './model/ShowAntitamperRuleResponse';
import { ShowCcRuleRequest } from './model/ShowCcRuleRequest';
import { ShowCcRuleResponse } from './model/ShowCcRuleResponse';
import { ShowCertificateRequest } from './model/ShowCertificateRequest';
import { ShowCertificateResponse } from './model/ShowCertificateResponse';
import { ShowCompositeHostRequest } from './model/ShowCompositeHostRequest';
import { ShowCompositeHostResponse } from './model/ShowCompositeHostResponse';
import { ShowConsoleConfigRequest } from './model/ShowConsoleConfigRequest';
import { ShowConsoleConfigResponse } from './model/ShowConsoleConfigResponse';
import { ShowCustomRuleRequest } from './model/ShowCustomRuleRequest';
import { ShowCustomRuleResponse } from './model/ShowCustomRuleResponse';
import { ShowEventItems } from './model/ShowEventItems';
import { ShowEventRequest } from './model/ShowEventRequest';
import { ShowEventResponse } from './model/ShowEventResponse';
import { ShowGeoipRuleRequest } from './model/ShowGeoipRuleRequest';
import { ShowGeoipRuleResponse } from './model/ShowGeoipRuleResponse';
import { ShowHostRequest } from './model/ShowHostRequest';
import { ShowHostResponse } from './model/ShowHostResponse';
import { ShowHostStatusRequest } from './model/ShowHostStatusRequest';
import { ShowHostStatusResponse } from './model/ShowHostStatusResponse';
import { ShowIgnoreRuleRequest } from './model/ShowIgnoreRuleRequest';
import { ShowIgnoreRuleResponse } from './model/ShowIgnoreRuleResponse';
import { ShowInstanceRequest } from './model/ShowInstanceRequest';
import { ShowInstanceResponse } from './model/ShowInstanceResponse';
import { ShowIpGroupRequest } from './model/ShowIpGroupRequest';
import { ShowIpGroupResponse } from './model/ShowIpGroupResponse';
import { ShowLtsInfoConfigRequest } from './model/ShowLtsInfoConfigRequest';
import { ShowLtsInfoConfigResponse } from './model/ShowLtsInfoConfigResponse';
import { ShowPolicyGeoipMapRequest } from './model/ShowPolicyGeoipMapRequest';
import { ShowPolicyGeoipMapResponse } from './model/ShowPolicyGeoipMapResponse';
import { ShowPolicyRequest } from './model/ShowPolicyRequest';
import { ShowPolicyResponse } from './model/ShowPolicyResponse';
import { ShowPremiumHostRequest } from './model/ShowPremiumHostRequest';
import { ShowPremiumHostResponse } from './model/ShowPremiumHostResponse';
import { ShowPrivacyRuleRequest } from './model/ShowPrivacyRuleRequest';
import { ShowPrivacyRuleResponse } from './model/ShowPrivacyRuleResponse';
import { ShowPunishmentRuleRequest } from './model/ShowPunishmentRuleRequest';
import { ShowPunishmentRuleResponse } from './model/ShowPunishmentRuleResponse';
import { ShowSourceIpRequest } from './model/ShowSourceIpRequest';
import { ShowSourceIpResponse } from './model/ShowSourceIpResponse';
import { ShowSubscriptionInfoRequest } from './model/ShowSubscriptionInfoRequest';
import { ShowSubscriptionInfoResponse } from './model/ShowSubscriptionInfoResponse';
import { ShowValueListRequest } from './model/ShowValueListRequest';
import { ShowValueListResponse } from './model/ShowValueListResponse';
import { ShowWhiteBlackIpRuleRequest } from './model/ShowWhiteBlackIpRuleRequest';
import { ShowWhiteBlackIpRuleResponse } from './model/ShowWhiteBlackIpRuleResponse';
import { SimplePremiumWafHost } from './model/SimplePremiumWafHost';
import { StatisticsTimelineItem } from './model/StatisticsTimelineItem';
import { TimeLineItem } from './model/TimeLineItem';
import { TimeoutConfig } from './model/TimeoutConfig';
import { TmsResourceTag } from './model/TmsResourceTag';
import { TopDomainsCountItem } from './model/TopDomainsCountItem';
import { TrafficMark } from './model/TrafficMark';
import { UpdateAlertNoticeConfigRequest } from './model/UpdateAlertNoticeConfigRequest';
import { UpdateAlertNoticeConfigRequestBody } from './model/UpdateAlertNoticeConfigRequestBody';
import { UpdateAlertNoticeConfigResponse } from './model/UpdateAlertNoticeConfigResponse';
import { UpdateAntiTamperRuleRefreshRequest } from './model/UpdateAntiTamperRuleRefreshRequest';
import { UpdateAntiTamperRuleRefreshResponse } from './model/UpdateAntiTamperRuleRefreshResponse';
import { UpdateAnticrawlerRuleRequest } from './model/UpdateAnticrawlerRuleRequest';
import { UpdateAnticrawlerRuleRequestBody } from './model/UpdateAnticrawlerRuleRequestBody';
import { UpdateAnticrawlerRuleResponse } from './model/UpdateAnticrawlerRuleResponse';
import { UpdateAnticrawlerRuleTypeRequest } from './model/UpdateAnticrawlerRuleTypeRequest';
import { UpdateAnticrawlerRuleTypeRequestbody } from './model/UpdateAnticrawlerRuleTypeRequestbody';
import { UpdateAnticrawlerRuleTypeResponse } from './model/UpdateAnticrawlerRuleTypeResponse';
import { UpdateAntileakageRuleRequest } from './model/UpdateAntileakageRuleRequest';
import { UpdateAntileakageRuleRequestBody } from './model/UpdateAntileakageRuleRequestBody';
import { UpdateAntileakageRuleResponse } from './model/UpdateAntileakageRuleResponse';
import { UpdateCcRuleRequest } from './model/UpdateCcRuleRequest';
import { UpdateCcRuleRequestBody } from './model/UpdateCcRuleRequestBody';
import { UpdateCcRuleResponse } from './model/UpdateCcRuleResponse';
import { UpdateCertificateRequest } from './model/UpdateCertificateRequest';
import { UpdateCertificateRequestBody } from './model/UpdateCertificateRequestBody';
import { UpdateCertificateResponse } from './model/UpdateCertificateResponse';
import { UpdateCustomRuleRequest } from './model/UpdateCustomRuleRequest';
import { UpdateCustomRuleRequestBody } from './model/UpdateCustomRuleRequestBody';
import { UpdateCustomRuleResponse } from './model/UpdateCustomRuleResponse';
import { UpdateGeoipRuleRequest } from './model/UpdateGeoipRuleRequest';
import { UpdateGeoipRuleRequestBody } from './model/UpdateGeoipRuleRequestBody';
import { UpdateGeoipRuleResponse } from './model/UpdateGeoipRuleResponse';
import { UpdateHostProtectStatusRequest } from './model/UpdateHostProtectStatusRequest';
import { UpdateHostProtectStatusRequestBody } from './model/UpdateHostProtectStatusRequestBody';
import { UpdateHostProtectStatusResponse } from './model/UpdateHostProtectStatusResponse';
import { UpdateHostRequest } from './model/UpdateHostRequest';
import { UpdateHostRequestBody } from './model/UpdateHostRequestBody';
import { UpdateHostResponse } from './model/UpdateHostResponse';
import { UpdateIgnoreRuleRequest } from './model/UpdateIgnoreRuleRequest';
import { UpdateIgnoreRuleRequestBody } from './model/UpdateIgnoreRuleRequestBody';
import { UpdateIgnoreRuleResponse } from './model/UpdateIgnoreRuleResponse';
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
import { UpdatePunishmentRuleRequest } from './model/UpdatePunishmentRuleRequest';
import { UpdatePunishmentRuleRequestBody } from './model/UpdatePunishmentRuleRequestBody';
import { UpdatePunishmentRuleResponse } from './model/UpdatePunishmentRuleResponse';
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
import { WafServer } from './model/WafServer';
import { WebBasicProtectionRulesItem } from './model/WebBasicProtectionRulesItem';
import { WhiteBlackIpResponseBody } from './model/WhiteBlackIpResponseBody';

export class WafClient {
    public static newBuilder(): ClientBuilder<WafClient> {
            let client = new ClientBuilder<WafClient>(newClient);
            return client;
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
     * 获取用户购买的WAF规格信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取用户套餐信息
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {string} [enterpriseProjectId] **参数解释：** 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目ID。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。 **约束限制：** 不涉及 **取值范围：**  - 0：代表default企业项目  - all_granted_eps：代表所有企业项目  - 其它企业项目ID：长度为36个字符  **默认取值：** 0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public confirmUserBundle(confirmUserBundleRequest?: ConfirmUserBundleRequest): Promise<ConfirmUserBundleResponse> {
        const options = ParamCreater().confirmUserBundle(confirmUserBundleRequest);

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
     * 创建JS脚本反爬虫规则，在调用此接口创建防护规则前，需要调用更新JS脚本反爬虫规则防护模式（UpdateAnticrawlerRuleType）接口指定防护模式
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建JS脚本反爬虫规则
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，通过指定防护策略id来指明查询该防护策略下的防护规则，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {CreateAnticrawlerRuleRequestbody} createAnticrawlerRuleRequestBody 创建JS脚本反爬虫规则请求体
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAnticrawlerRule(createAnticrawlerRuleRequest?: CreateAnticrawlerRuleRequest): Promise<CreateAnticrawlerRuleResponse> {
        const options = ParamCreater().createAnticrawlerRule(createAnticrawlerRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建防敏感信息泄露规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建防敏感信息泄露规则
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {CreateAntileakageRuleRequestBody} createAntileakageRuleRequestBody 创建防泄漏规则请求参数
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAntileakageRule(createAntileakageRuleRequest?: CreateAntileakageRuleRequest): Promise<CreateAntileakageRuleResponse> {
        const options = ParamCreater().createAntileakageRule(createAntileakageRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建cc规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建cc规则
     * @param {string} contentType 内容类型
     * @param {string} policyId 策略id（策略id从查询防护策略列表接口获取）
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {CreateCcRuleRequestBody} [createCcRuleRequestBody] CreateCcRuleRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCcRule(createCcRuleRequest?: CreateCcRuleRequest): Promise<CreateCcRuleResponse> {
        const options = ParamCreater().createCcRule(createCcRuleRequest);

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
     * 开通云模式按需计费接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开通云模式按需计费接口
     * @param {string} contentType 内容类型
     * @param {string} region 区域id
     * @param {CreateCloudWafPostPaidResourceRequestbody} createCloudWafPostPaidResourceRequestBody 请求body
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCloudWafPostPaidResource(createCloudWafPostPaidResourceRequest?: CreateCloudWafPostPaidResourceRequest): Promise<CreateCloudWafPostPaidResourceResponse> {
        const options = ParamCreater().createCloudWafPostPaidResource(createCloudWafPostPaidResourceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建精准防护规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建精准防护规则
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，通过指定防护策略id来指明查询该防护策略下的防护规则，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {CreateCustomRuleRequestBody} createCustomRuleRequestBody CreateCustomRuleRequestBody
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCustomRule(createCustomRuleRequest?: CreateCustomRuleRequest): Promise<CreateCustomRuleResponse> {
        const options = ParamCreater().createCustomRule(createCustomRuleRequest);

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
     * 创建WAF独享引擎实例。独享模式支持的局点包括：华东-青岛、中东-利雅得、华北-北京一、华北-北京四、华北-乌兰察布一、华东-上海一、华东-上海二、华南-广州、华南-深圳、中国-香港、西南-贵阳一、亚太-曼谷、 亚太-新加坡、非洲约翰内斯堡、土耳其-伊斯坦布尔；普通租户类独享支持的局点：华北-北京四、华东-上海一、华南-广州、中国-香港、亚太-曼谷、 亚太-新加坡。
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
     * 购买包周期云模式waf。
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
     * 创建攻击惩罚规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建攻击惩罚规则
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {CreatePunishmentRuleRequestBody} createPunishmentRuleRequestBody 创建攻击惩罚规则请求参数
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPunishmentRule(createPunishmentRuleRequest?: CreatePunishmentRuleRequest): Promise<CreatePunishmentRuleResponse> {
        const options = ParamCreater().createPunishmentRule(createPunishmentRuleRequest);

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
     * 删除JS脚本反爬虫防护规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除JS脚本反爬虫防护规则
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，通过指定防护策略id来指明查询该防护策略下的防护规则，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {string} ruleId 规则id
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAnticrawlerRule(deleteAnticrawlerRuleRequest?: DeleteAnticrawlerRuleRequest): Promise<DeleteAnticrawlerRuleResponse> {
        const options = ParamCreater().deleteAnticrawlerRule(deleteAnticrawlerRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除防敏感信息泄露防护规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除防敏感信息泄露防护规则
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {string} ruleId 防敏感信息泄露规则id，通过查询防敏感信息泄露规则列表接口（ListAntileakageRules）获取
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAntileakageRule(deleteAntileakageRuleRequest?: DeleteAntileakageRuleRequest): Promise<DeleteAntileakageRuleResponse> {
        const options = ParamCreater().deleteAntileakageRule(deleteAntileakageRuleRequest);

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
     * 删除cc防护规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除cc防护规则
     * @param {string} contentType 内容类型
     * @param {string} policyId 策略id（策略id从查询防护策略列表接口获取）
     * @param {string} ruleId ID of the cc rule. It can be obtained by calling the **ListCcRules** API.
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCcRule(deleteCcRuleRequest?: DeleteCcRuleRequest): Promise<DeleteCcRuleResponse> {
        const options = ParamCreater().deleteCcRule(deleteCcRuleRequest);

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
     * 关闭云模式按需计费接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭云模式按需计费接口
     * @param {string} contentType 内容类型
     * @param {string} [region] 区域id
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCloudWafPostPaidResource(deleteCloudWafPostPaidResourceRequest?: DeleteCloudWafPostPaidResourceRequest): Promise<DeleteCloudWafPostPaidResourceResponse> {
        const options = ParamCreater().deleteCloudWafPostPaidResource(deleteCloudWafPostPaidResourceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除精准防护规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除精准防护规则
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，通过指定防护策略id来指明查询该防护策略下的防护规则，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {string} ruleId 精准防护规则id，通过查询精准防护规则列表接口（ListCustomRules）获取
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCustomRule(deleteCustomRuleRequest?: DeleteCustomRuleRequest): Promise<DeleteCustomRuleResponse> {
        const options = ParamCreater().deleteCustomRule(deleteCustomRuleRequest);

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
     * 删除攻击惩罚规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除攻击惩罚规则
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {string} ruleId 攻击惩罚规则id，通过查询攻击惩罚规则列表接口（ListPunishmentRules）获取
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePunishmentRule(deletePunishmentRuleRequest?: DeletePunishmentRuleRequest): Promise<DeletePunishmentRuleResponse> {
        const options = ParamCreater().deletePunishmentRule(deletePunishmentRuleRequest);

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
     * 查询JS脚本反爬虫规则列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询JS脚本反爬虫规则列表
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，通过指定防护策略id来指明查询该防护策略下的防护规则，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {number} offset 偏移量，表示查询该偏移量之后的记录。
     * @param {number} limit 查询返回记录的数量限制。
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。
     * @param {string} [type] JS脚本反爬虫规则防护模式   - anticrawler_except_url: 防护所有路径模式，在该模式下，查询的JS脚本反爬虫规则为排除的防护路径规则   - anticrawler_specific_url: 防护指定路径模式，在该模式下，查询的JS脚本反爬虫规则为指定要防护的路径规则   - 默认值：anticrawler_except_url
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAnticrawlerRules(listAnticrawlerRulesRequest?: ListAnticrawlerRulesRequest): Promise<ListAnticrawlerRulesResponse> {
        const options = ParamCreater().listAnticrawlerRules(listAnticrawlerRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询防敏感信息泄露规则列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询防敏感信息泄露规则列表
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，通过指定防护策略id来指明查询该防护策略下的防敏感信息泄露规则，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {number} offset 偏移量，表示查询该偏移量之后的记录。
     * @param {number} limit 查询返回记录的数量限制。
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAntileakageRules(listAntileakageRulesRequest?: ListAntileakageRulesRequest): Promise<ListAntileakageRulesResponse> {
        const options = ParamCreater().listAntileakageRules(listAntileakageRulesRequest);

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
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。
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
     * 查询攻击防护类型
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询攻击防护类型
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {number} from **参数解释：** 起始时间（13位毫秒时间戳），需要和to同时使用。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {number} to **参数解释：** 结束时间（13位毫秒时间戳），需要和from同时使用。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} [enterpriseProjectId] **参数解释：** 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目ID。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。 **约束限制：** 不涉及 **取值范围：**  - 0：代表default企业项目  - all_granted_eps：代表所有企业项目  - 其它企业项目ID：长度为36个字符  **默认取值：** 0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAttackActionTypes(listAttackActionTypesRequest?: ListAttackActionTypesRequest): Promise<ListAttackActionTypesResponse> {
        const options = ParamCreater().listAttackActionTypes(listAttackActionTypesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询安全统计带宽数据，统计的带宽数据为平均值，单位为bit/s。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询安全统计带宽数据
     * @param {string} contentType 内容类型
     * @param {number} from 查询的带宽统计数据的起始时间（13位毫秒时间戳），需要和to同时使用
     * @param {number} to 查询的带宽统计数据的结束时间（13位毫秒时间戳），需要和from同时使用
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。
     * @param {string} [hosts] 域名id，用于查询指定的防护域名在from到to这段时间内的带宽数据。通过查询云模式防护域名列表（ListHost）获取域名id或者通过独享模式域名列表（ListPremiumHost）获取域名id
     * @param {string} [instances] 引擎实例id，用于查询指定的独享引擎实例所防护的域名在from到to这段时间内的带宽数据。
     * @param {string} [groupBy] 展示维度，按天展示时传\&quot;DAY\&quot;；默认不传，按照分钟展示。
     * @param {number} [displayOption] 发送/接受字节数，查看峰值请输入1，查看平均值请输入0
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
     * 查询cc规则列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询cc规则列表
     * @param {string} contentType 内容类型
     * @param {string} policyId 策略id（策略id从查询防护策略列表接口获取）
     * @param {number} offset 偏移量，表示查询该偏移量之后的记录。
     * @param {number} limit 查询返回记录的数量限制。
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCcRules(listCcRulesRequest?: ListCcRulesRequest): Promise<ListCcRulesResponse> {
        const options = ParamCreater().listCcRules(listCcRulesRequest);

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
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。
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
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。默认值为0，表示默认企业项目。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。  缺省值：0
     * @param {number} [page] 分页查询时，返回第几页数据。默认值为1，表示返回第1页数据。
     * @param {number} [pagesize] 分页查询时，每页包含多少条结果。范围1-100，默认值为10，表示每页包含10条结果。如果需要一次查全部域名，该参数值填-1。
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
     * 查询精准防护规则列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询精准防护规则列表
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，通过指定防护策略id来指明查询该防护策略下的防护规则，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {number} offset 偏移量，表示查询该偏移量之后的记录。
     * @param {number} limit 查询返回记录的数量限制。
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCustomRules(listCustomRulesRequest?: ListCustomRulesRequest): Promise<ListCustomRulesResponse> {
        const options = ParamCreater().listCustomRules(listCustomRulesRequest);

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
     * @param {string} [xLanguage] 语言，默认值为en-us。zh-cn（中文）/en-us（英文）
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。
     * @param {'yesterday' | 'today' | '3days' | '1week' | '1month'} [recent] 查询日志的时间范围（不能和from、to同时使用，同时使用以recent为准），且recent参数与from、to必须使用其中一个。当同时使用recent参数与from、to时，以recent参数为准
     * @param {number} [from] 起始时间(13位时间戳)，需要和to同时使用，不能和recent参数同时使用
     * @param {number} [to] 结束时间(13位时间戳)，需要和from同时使用，不能和recent参数同时使用
     * @param {Array<string>} [attacks] 攻击类型:   - vuln：其它攻击类型   - sqli： sql注入攻击   - lfi： 本地文件包含  - cmdi：命令注入攻击   - xss：XSS攻击   - robot：恶意爬虫   - rfi：远程文件包含   - custom_custom：精准防护   - cc: cc攻击   - webshell：网站木马   - custom_whiteblackip：黑白名单拦截   - custom_geoip：地理访问控制拦截   - antitamper：防篡改   - anticrawler：反爬虫    - leakage：网站信息防泄漏   - illegal：非法请求   - antiscan_high_freq_scan：高频扫描封禁   - antiscan_dir_traversal：目录遍历防护
     * @param {Array<string>} [hosts] 域名id，从获取防护网站列表（ListHost）接口获取域名id
     * @param {Array<string>} [sips] 源ip，Web访问者的IP地址（攻击者IP地址）
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
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。
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
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。
     * @param {number} [page] 分页查询时，返回第几页数据。默认值为1，表示返回第1页数据。
     * @param {number} [pagesize] 分页查询时，每页包含多少条结果。范围1-100，默认值为10，表示每页包含10条结果。如果需要一次查全部域名，该参数值填-1。
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
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。
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
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。
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
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。
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
     * 查询WAF独享引擎标签。独享模式只在部分局点支持，包括：华北-北京四、华东-上海一、华南-广州、华南-深圳  、中国-香港、亚太-曼谷、 亚太-新加坡。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询WAF独享引擎标签
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {string} [enterpriseProjectId] **参数解释：** 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目ID。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。 **约束限制：** 不涉及 **取值范围：**  - 0：代表default企业项目  - all_granted_eps：代表所有企业项目  - 其它企业项目ID：长度为36个字符  **默认取值：** 0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceTags(listInstanceTagsRequest?: ListInstanceTagsRequest): Promise<ListInstanceTagsResponse> {
        const options = ParamCreater().listInstanceTags(listInstanceTagsRequest);

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
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。
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
     * 查询安全总览分类统计TOP信息，包含受攻击域名 、攻击源ip、受攻击URL、攻击来源区域、攻击事件分布。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询安全总览分类统计top信息
     * @param {string} contentType 内容类型
     * @param {number} from 起始时间（13位毫秒时间戳），需要和to同时使用
     * @param {number} to 结束时间（13位毫秒时间戳），需要和from同时使用
     * @param {string} [xLanguage] 语言，默认值为en-us。zh-cn（中文）/en-us（英文）
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。
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
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。
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
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。
     * @param {string} [page] 分页查询时，返回第几页数据。默认值为1，表示返回第1页数据。
     * @param {string} [pagesize] 分页查询时，每页包含多少条结果。范围1-100，默认值为10，表示每页包含10条结果。如果需要一次查全部域名，该参数值填-1。
     * @param {string} [hostname] 域名
     * @param {string} [policyname] 策略名称
     * @param {number} [protectStatus] 域名防护状态：  - 0：暂停防护，WAF只转发该域名的请求，不做攻击检测  - 1：开启防护，WAF根据您配置的策略进行攻击检测
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
     * 查询隐私屏蔽防护规则列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询隐私屏蔽防护规则列表
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。
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
     * 查询攻击惩罚规则列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询攻击惩罚规则列表
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，通过指定防护策略id来指明查询该防护策略下的攻击惩罚规则，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {number} offset 偏移量，表示查询该偏移量之后的记录。
     * @param {number} limit 查询返回记录的数量限制。
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPunishmentRules(listPunishmentRulesRequest?: ListPunishmentRulesRequest): Promise<ListPunishmentRulesResponse> {
        const options = ParamCreater().listPunishmentRules(listPunishmentRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询安全统计qps次数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询安全统计qps次数
     * @param {string} contentType 内容类型
     * @param {number} from 起始时间（13位毫秒时间戳），需要和to同时使用
     * @param {number} to 结束时间（13位毫秒时间戳），需要和from同时使用
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。
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
     * 查询安全总览中请求次数时间线统计数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询安全总览中请求次数时间线统计数据
     * @param {string} contentType 内容类型
     * @param {number} from 起始时间（13位毫秒时间戳），需要和to同时使用
     * @param {number} to 结束时间（13位毫秒时间戳），需要和from同时使用
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。
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
     * 查询安全报告订阅列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询安全报告订阅列表
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {string} enterpriseProjectId **参数解释：** 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目ID。仅支持查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。 **约束限制：** 不涉及 **取值范围：**  - all_granted_eps：所有企业项目  **默认取值：** all_granted_eps
     * @param {string} [reportName] **参数解释：** 报告模板名称 **约束限制：** 不涉及 **取值范围：** 只能由中文、字母、数字和括号内所列符号（_-.:：）组成，且不能超过256个字符长度。 **默认取值：** 不涉及
     * @param {string} [reportCategory] **参数解释：** 报告类型 **约束限制：** 不涉及 **取值范围：** - daily_report：安全日报 - weekly_report：安全周报 - monthly_report：安全月报 - custom_report：自定义报告  **默认取值：** 不涉及
     * @param {string} [reportStatus] **参数解释：** 开启状态 **约束限制：** 不涉及 **取值范围：** - opened：已开启 - closed：已关闭  **默认取值：** 不涉及
     * @param {number} [offset] **参数解释：** 分页查询的起始位置，表示从第几条记录开始返回（从0开始计数）。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 0
     * @param {number} [limit] **参数解释：** 分页查询的单页返回数量，控制每次请求返回的记录条数。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 1000
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSecurityReportSubscriptions(listSecurityReportSubscriptionsRequest?: ListSecurityReportSubscriptionsRequest): Promise<ListSecurityReportSubscriptionsResponse> {
        const options = ParamCreater().listSecurityReportSubscriptions(listSecurityReportSubscriptionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询安全总览请求与攻击数量。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询安全总览请求与攻击数量
     * @param {string} contentType 内容类型
     * @param {number} from 起始时间(13位时间戳)，需要和to同时使用
     * @param {number} to 结束时间(13位时间戳),需要和from同时使用
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。
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
     * 查询业务异常TOP统计信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询业务异常数量
     * @param {string} contentType 内容类型
     * @param {number} from 起始时间（13位毫秒时间戳），需要和to同时使用
     * @param {number} to 结束时间（13位毫秒时间戳），需要和from同时使用
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。
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
     * 查询top受攻击域名
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询top受攻击域名
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {number} from **参数解释：** 起始时间（13位毫秒时间戳），需要和to同时使用。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {number} to **参数解释：** 结束时间（13位毫秒时间戳），需要和from同时使用。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} [enterpriseProjectId] **参数解释：** 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目ID。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。 **约束限制：** 不涉及 **取值范围：**  - 0：代表default企业项目  - all_granted_eps：代表所有企业项目  - 其它企业项目ID：长度为36个字符  **默认取值：** 0
     * @param {number} [top] **参数解释：** 查询受攻击次数排名在前几的结果 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 5
     * @param {Array<string>} [hosts] **参数解释：** 域名ID，查询的域名列表 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTopDomains(listTopDomainsRequest?: ListTopDomainsRequest): Promise<ListTopDomainsResponse> {
        const options = ParamCreater().listTopDomains(listTopDomainsRequest);

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
     * 查询web基础防护内置规则列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询web基础防护内置规则列表
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {'zh-cn' | 'en-us'} [xLanguage] **参数解释：** 语言，默认值为zh-cn。zh-cn（中文）/en-us（英文）。 **约束限制：** 不涉及 **取值范围：** - zh-cn：中文 - en-us：英文  **默认取值：** - zh-cn
     * @param {string} [enterpriseProjectId] **参数解释：** 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目ID。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。 **约束限制：** 不涉及 **取值范围：**  - 0：代表default企业项目  - all_granted_eps：代表所有企业项目  - 其它企业项目ID：长度为36个字符  **默认取值：** 0
     * @param {number} [offset] **参数解释：** 分页查询的起始位置，表示从第几条记录开始返回（从1开始计数）。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 1
     * @param {number} [limit] **参数解释：** 分页查询的单页返回数量，控制每次请求返回的记录条数。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 10
     * @param {number} [from] **参数解释：** 起始时间（13位毫秒时间戳），需要和to同时使用。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {number} [to] **参数解释：** 结束时间（13位毫秒时间戳），需要和from同时使用。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {1 | 2 | 3} [level] **参数解释：** 规则集的防护严格程度。规则集（宽松）下对业务的误报率降低，但漏报率可能会增高；而规则集（严格）下对业务的误报率可能会增高，但漏报率降低。 **约束限制：** 不涉及 **取值范围：** - 1：宽松 - 2：中等 - 3：严格  **默认取值：** 不涉及
     * @param {string} [id] **参数解释：** 规则ID，规则的唯一标识。 **约束限制：** 不涉及 **取值范围：** 长度为6个字符 **默认取值：** 不涉及
     * @param {string} [description] **参数解释：** 规则描述 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} [cveNumber] **参数解释：** CVE编号 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {1 | 2 | 3} [riskLevel] **参数解释：** 危险等级 **约束限制：** 不涉及 **取值范围：** - 1：高危 - 2：中危 - 3：低危  **默认取值：** 不涉及
     * @param {'vuln' | 'xss' | 'cmdi' | 'lfi' | 'rfi' | 'webshell' | 'robot' | 'sqli'} [protectionTypeNames] **参数解释：** 防护类型 **约束限制：** 不涉及 **取值范围：** - vuln：其他 - xss：跨站脚本 - cmdi：命令注入 - lfi：本地文件包含 - rfi：远程文件包含 - webshell：网站木马 - robot：恶意爬虫 - sqli：SQL注入  **默认取值：** 不涉及
     * @param {string} [applicationTypeNames] **参数解释：** 应用类型 **约束限制：** 不涉及 **取值范围：** 请参见WAF控制台，Web基础防护规则详情页面的应用类型。 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listWebBasicProtectionRules(listWebBasicProtectionRulesRequest?: ListWebBasicProtectionRulesRequest): Promise<ListWebBasicProtectionRulesResponse> {
        const options = ParamCreater().listWebBasicProtectionRules(listWebBasicProtectionRulesRequest);

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
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。
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
     * 根据Id查询JS脚本反爬虫防护规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询JS脚本反爬虫防护规则
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，通过指定防护策略id来指明查询该防护策略下的防护规则，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {string} ruleId 规则id
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAnticrawlerRule(showAnticrawlerRuleRequest?: ShowAnticrawlerRuleRequest): Promise<ShowAnticrawlerRuleResponse> {
        const options = ParamCreater().showAnticrawlerRule(showAnticrawlerRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据Id查询防敏感信息泄露防护规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询防敏感信息泄露防护规则
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {string} ruleId 防敏感信息泄露规则id，通过查询防敏感信息泄露规则列表接口（ListAntileakageRules）获取
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAntileakageRule(showAntileakageRuleRequest?: ShowAntileakageRuleRequest): Promise<ShowAntileakageRuleResponse> {
        const options = ParamCreater().showAntileakageRule(showAntileakageRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询防篡改防护规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询防篡改防护规则
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {string} ruleId 防篡改规则id，通过查询防篡改规则列表接口（ListAntitamperRule）获取
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAntitamperRule(showAntitamperRuleRequest?: ShowAntitamperRuleRequest): Promise<ShowAntitamperRuleResponse> {
        const options = ParamCreater().showAntitamperRule(showAntitamperRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据Id查询cc防护规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据Id查询cc防护规则
     * @param {string} contentType 内容类型
     * @param {string} policyId 策略id（策略id从查询防护策略列表接口获取）
     * @param {string} ruleId ID of the cc rule. It can be obtained by calling the **ListCcRules** API.
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCcRule(showCcRuleRequest?: ShowCcRuleRequest): Promise<ShowCcRuleResponse> {
        const options = ParamCreater().showCcRule(showCcRuleRequest);

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
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。
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
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。
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
     * 根据Id查询精准防护规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据Id查询精准防护规则
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，通过指定防护策略id来指明查询该防护策略下的防护规则，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {string} ruleId 精准防护规则id，通过查询精准防护规则列表接口（ListCustomRules）获取
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCustomRule(showCustomRuleRequest?: ShowCustomRuleRequest): Promise<ShowCustomRuleResponse> {
        const options = ParamCreater().showCustomRule(showCustomRuleRequest);

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
     * @param {string} [xLanguage] 语言，默认值为en-us。zh-cn（中文）/en-us（英文）
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。
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
    public showGeoipRule(showGeoipRuleRequest?: ShowGeoipRuleRequest): Promise<ShowGeoipRuleResponse> {
        const options = ParamCreater().showGeoipRule(showGeoipRuleRequest);

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
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。
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
     * 查询域名运行状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询域名运行状态
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {string} hostId **参数解释：** 域名ID，您可以通过调用查询全部防护域名列表（ListCompositeHosts）获取域名ID。 **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showHostStatus(showHostStatusRequest?: ShowHostStatusRequest): Promise<ShowHostStatusResponse> {
        const options = ParamCreater().showHostStatus(showHostStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询全局白名单(原误报屏蔽)防护规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询全局白名单(原误报屏蔽)防护规则
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {string} ruleId 误报屏蔽规则id，您可以通过查询误报屏蔽规则列表（ListIgnoreRule）接口的响应体中的id字段获取误报屏蔽规则id
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showIgnoreRule(showIgnoreRuleRequest?: ShowIgnoreRuleRequest): Promise<ShowIgnoreRuleResponse> {
        const options = ParamCreater().showIgnoreRule(showIgnoreRuleRequest);

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
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。
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
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。
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
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。
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
     * 查询地理位置选项的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询地理位置选项的详细信息
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {'cn' | 'en'} [lang] **参数解释：** 语言的类型 - cn代表中文 - en代表英文  **约束限制：** 不涉及 **取值范围：** - cn - en  **默认取值：** - cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPolicyGeoipMap(showPolicyGeoipMapRequest?: ShowPolicyGeoipMapRequest): Promise<ShowPolicyGeoipMapResponse> {
        const options = ParamCreater().showPolicyGeoipMap(showPolicyGeoipMapRequest);

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
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。
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
     * 查询隐私屏蔽防护规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询隐私屏蔽防护规则
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {string} ruleId 隐私屏蔽规则id，您可以通过调用查询隐私屏蔽规则列表（ListPrivacyRule）获取规则id
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPrivacyRule(showPrivacyRuleRequest?: ShowPrivacyRuleRequest): Promise<ShowPrivacyRuleResponse> {
        const options = ParamCreater().showPrivacyRule(showPrivacyRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据Id查询攻击惩罚防护规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据Id查询攻击惩罚防护规则
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {string} ruleId 攻击惩罚规则id，通过查询攻击惩罚规则列表接口（ListPunishmentRules）获取
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPunishmentRule(showPunishmentRuleRequest?: ShowPunishmentRuleRequest): Promise<ShowPunishmentRuleResponse> {
        const options = ParamCreater().showPunishmentRule(showPunishmentRuleRequest);

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
     * 查询引用表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询引用表
     * @param {string} contentType 内容类型
     * @param {string} valuelistid 引用表id，通过查询引用表列表（ListValueList）接口获取
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showValueList(showValueListRequest?: ShowValueListRequest): Promise<ShowValueListResponse> {
        const options = ParamCreater().showValueList(showValueListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询黑白名单防护规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询黑白名单防护规则
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {string} ruleId 黑白名单规则id，您可以通过调用查询黑白名单规则列表（ListWhiteblackipRule）获取黑白名单规则id
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showWhiteBlackIpRule(showWhiteBlackIpRuleRequest?: ShowWhiteBlackIpRuleRequest): Promise<ShowWhiteBlackIpRuleResponse> {
        const options = ParamCreater().showWhiteBlackIpRule(showWhiteBlackIpRuleRequest);

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
     * 网页防篡改规则更新缓存
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 网页防篡改规则更新缓存
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {string} ruleId 防篡改规则id，通过查询防篡改规则列表接口（ListAntitamperRule）获取
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAntiTamperRuleRefresh(updateAntiTamperRuleRefreshRequest?: UpdateAntiTamperRuleRefreshRequest): Promise<UpdateAntiTamperRuleRefreshResponse> {
        const options = ParamCreater().updateAntiTamperRuleRefresh(updateAntiTamperRuleRefreshRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新JS脚本反爬虫防护规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新JS脚本反爬虫防护规则
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，通过指定防护策略id来指明查询该防护策略下的防护规则，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {string} ruleId 规则id
     * @param {UpdateAnticrawlerRuleRequestBody} updateAnticrawlerRuleRequestBody 更新反爬虫规则的请求体
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAnticrawlerRule(updateAnticrawlerRuleRequest?: UpdateAnticrawlerRuleRequest): Promise<UpdateAnticrawlerRuleResponse> {
        const options = ParamCreater().updateAnticrawlerRule(updateAnticrawlerRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新JS脚本反爬虫规则防护模式，在创建JS脚本反爬虫规则前，需要调用该接口指定JS脚本反爬虫规则防护模式。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新JS脚本反爬虫规则防护模式
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，通过指定防护策略id来指明查询该防护策略下的防护规则，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {UpdateAnticrawlerRuleTypeRequestbody} updateAnticrawlerRuleTypeRequestbody 创建JS脚本反爬虫规则body
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAnticrawlerRuleType(updateAnticrawlerRuleTypeRequest?: UpdateAnticrawlerRuleTypeRequest): Promise<UpdateAnticrawlerRuleTypeResponse> {
        const options = ParamCreater().updateAnticrawlerRuleType(updateAnticrawlerRuleTypeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新防敏感信息泄露防护规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新防敏感信息泄露防护规则
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {string} ruleId 防敏感信息泄露规则id，通过查询防敏感信息泄露规则列表接口（ListAntileakageRules）获取
     * @param {UpdateAntileakageRuleRequestBody} updateAntileakageRuleRequestBody UpdateAntileakageRuleRequestBody
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAntileakageRule(updateAntileakageRuleRequest?: UpdateAntileakageRuleRequest): Promise<UpdateAntileakageRuleResponse> {
        const options = ParamCreater().updateAntileakageRule(updateAntileakageRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新cc防护规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新cc防护规则
     * @param {string} contentType 内容类型
     * @param {string} policyId 策略id（策略id从查询防护策略列表接口获取）
     * @param {string} ruleId ID of the cc rule. It can be obtained by calling the **ListCcRules** API.
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {UpdateCcRuleRequestBody} [updateCcRuleRequestBody] UpdateCcRuleRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateCcRule(updateCcRuleRequest?: UpdateCcRuleRequest): Promise<UpdateCcRuleResponse> {
        const options = ParamCreater().updateCcRule(updateCcRuleRequest);

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
     * 更新精准防护规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新精准防护规则
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，通过指定防护策略id来指明查询该防护策略下的防护规则，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {string} ruleId 精准防护规则id，通过查询精准防护规则列表接口（ListCustomRules）获取
     * @param {UpdateCustomRuleRequestBody} updateCustomRuleRequestBody UpdateCustomRuleRequestBody
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateCustomRule(updateCustomRuleRequest?: UpdateCustomRuleRequest): Promise<UpdateCustomRuleResponse> {
        const options = ParamCreater().updateCustomRule(updateCustomRuleRequest);

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
     * 更新全局白名单(原误报屏蔽)防护规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新全局白名单(原误报屏蔽)防护规则
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {string} ruleId 误报屏蔽规则id，您可以通过查询误报屏蔽规则列表（ListIgnoreRule）接口的响应体中的id字段获取误报屏蔽规则id
     * @param {UpdateIgnoreRuleRequestBody} updateRuleRequestBody 请求体
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateIgnoreRule(updateIgnoreRuleRequest?: UpdateIgnoreRuleRequest): Promise<UpdateIgnoreRuleResponse> {
        const options = ParamCreater().updateIgnoreRule(updateIgnoreRuleRequest);

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
     * @param {string} [action] 增量修改ip地址组时，此为必传字段，传入“add”;删除一个或者多个ip时传入“delete”
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
     * @param {'whiteblackip' | 'geoip' | 'privacy' | 'antitamper' | 'custom' | 'ignore' | 'cc'} ruletype 策略类型
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
     * 更新攻击惩罚规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新攻击惩罚规则
     * @param {string} contentType 内容类型
     * @param {string} policyId 防护策略id，您可以通过调用查询防护策略列表（ListPolicy）获取策略id
     * @param {string} ruleId 攻击惩罚规则id，通过查询攻击惩罚规则列表接口（ListPunishmentRules）获取
     * @param {UpdatePunishmentRuleRequestBody} updatePunishmentRuleRequestBody 更新攻击惩罚规则的请求体
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePunishmentRule(updatePunishmentRuleRequest?: UpdatePunishmentRuleRequest): Promise<UpdatePunishmentRuleResponse> {
        const options = ParamCreater().updatePunishmentRule(updatePunishmentRuleRequest);

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
            let body: any;
            
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
            let body: any;
            
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
         * 获取用户购买的WAF规格信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        confirmUserBundle(confirmUserBundleRequest?: ConfirmUserBundleRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/bundle",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let enterpriseProjectId;

            if (confirmUserBundleRequest !== null && confirmUserBundleRequest !== undefined) {
                if (confirmUserBundleRequest instanceof ConfirmUserBundleRequest) {
                    contentType = confirmUserBundleRequest.contentType;
                    enterpriseProjectId = confirmUserBundleRequest.enterpriseProjectId;
                } else {
                    contentType = confirmUserBundleRequest['Content-Type'];
                    enterpriseProjectId = confirmUserBundleRequest['enterprise_project_id'];
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
            let body: any;
            
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
         * 创建JS脚本反爬虫规则，在调用此接口创建防护规则前，需要调用更新JS脚本反爬虫规则防护模式（UpdateAnticrawlerRuleType）接口指定防护模式
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAnticrawlerRule(createAnticrawlerRuleRequest?: CreateAnticrawlerRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/waf/policy/{policy_id}/anticrawler",
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
            
            let policyId;
            
            let enterpriseProjectId;

            if (createAnticrawlerRuleRequest !== null && createAnticrawlerRuleRequest !== undefined) {
                if (createAnticrawlerRuleRequest instanceof CreateAnticrawlerRuleRequest) {
                    contentType = createAnticrawlerRuleRequest.contentType;
                    policyId = createAnticrawlerRuleRequest.policyId;
                    body = createAnticrawlerRuleRequest.body
                    enterpriseProjectId = createAnticrawlerRuleRequest.enterpriseProjectId;
                } else {
                    contentType = createAnticrawlerRuleRequest['Content-Type'];
                    policyId = createAnticrawlerRuleRequest['policy_id'];
                    body = createAnticrawlerRuleRequest['body'];
                    enterpriseProjectId = createAnticrawlerRuleRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling createAnticrawlerRule.');
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
         * 创建防敏感信息泄露规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAntileakageRule(createAntileakageRuleRequest?: CreateAntileakageRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/waf/policy/{policy_id}/antileakage",
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
            
            let policyId;
            
            let enterpriseProjectId;

            if (createAntileakageRuleRequest !== null && createAntileakageRuleRequest !== undefined) {
                if (createAntileakageRuleRequest instanceof CreateAntileakageRuleRequest) {
                    contentType = createAntileakageRuleRequest.contentType;
                    policyId = createAntileakageRuleRequest.policyId;
                    body = createAntileakageRuleRequest.body
                    enterpriseProjectId = createAntileakageRuleRequest.enterpriseProjectId;
                } else {
                    contentType = createAntileakageRuleRequest['Content-Type'];
                    policyId = createAntileakageRuleRequest['policy_id'];
                    body = createAntileakageRuleRequest['body'];
                    enterpriseProjectId = createAntileakageRuleRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling createAntileakageRule.');
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
         * 创建cc规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCcRule(createCcRuleRequest?: CreateCcRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/waf/policy/{policy_id}/cc",
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
            
            let policyId;
            
            let enterpriseProjectId;

            if (createCcRuleRequest !== null && createCcRuleRequest !== undefined) {
                if (createCcRuleRequest instanceof CreateCcRuleRequest) {
                    contentType = createCcRuleRequest.contentType;
                    policyId = createCcRuleRequest.policyId;
                    enterpriseProjectId = createCcRuleRequest.enterpriseProjectId;
                    body = createCcRuleRequest.body
                } else {
                    contentType = createCcRuleRequest['Content-Type'];
                    policyId = createCcRuleRequest['policy_id'];
                    enterpriseProjectId = createCcRuleRequest['enterprise_project_id'];
                    body = createCcRuleRequest['body'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling createCcRule.');
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
            let body: any;
            
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
         * 开通云模式按需计费接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCloudWafPostPaidResource(createCloudWafPostPaidResourceRequest?: CreateCloudWafPostPaidResourceRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/waf/postpaid",
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
            
            let region;
            
            let enterpriseProjectId;

            if (createCloudWafPostPaidResourceRequest !== null && createCloudWafPostPaidResourceRequest !== undefined) {
                if (createCloudWafPostPaidResourceRequest instanceof CreateCloudWafPostPaidResourceRequest) {
                    contentType = createCloudWafPostPaidResourceRequest.contentType;
                    region = createCloudWafPostPaidResourceRequest.region;
                    body = createCloudWafPostPaidResourceRequest.body
                    enterpriseProjectId = createCloudWafPostPaidResourceRequest.enterpriseProjectId;
                } else {
                    contentType = createCloudWafPostPaidResourceRequest['Content-Type'];
                    region = createCloudWafPostPaidResourceRequest['region'];
                    body = createCloudWafPostPaidResourceRequest['body'];
                    enterpriseProjectId = createCloudWafPostPaidResourceRequest['enterprise_project_id'];
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
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建精准防护规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCustomRule(createCustomRuleRequest?: CreateCustomRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/waf/policy/{policy_id}/custom",
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
            
            let policyId;
            
            let enterpriseProjectId;

            if (createCustomRuleRequest !== null && createCustomRuleRequest !== undefined) {
                if (createCustomRuleRequest instanceof CreateCustomRuleRequest) {
                    contentType = createCustomRuleRequest.contentType;
                    policyId = createCustomRuleRequest.policyId;
                    body = createCustomRuleRequest.body
                    enterpriseProjectId = createCustomRuleRequest.enterpriseProjectId;
                } else {
                    contentType = createCustomRuleRequest['Content-Type'];
                    policyId = createCustomRuleRequest['policy_id'];
                    body = createCustomRuleRequest['body'];
                    enterpriseProjectId = createCustomRuleRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling createCustomRule.');
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
            let body: any;
            
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
            let body: any;
            
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
            let body: any;
            
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
         * 创建WAF独享引擎实例。独享模式支持的局点包括：华东-青岛、中东-利雅得、华北-北京一、华北-北京四、华北-乌兰察布一、华东-上海一、华东-上海二、华南-广州、华南-深圳、中国-香港、西南-贵阳一、亚太-曼谷、 亚太-新加坡、非洲约翰内斯堡、土耳其-伊斯坦布尔；普通租户类独享支持的局点：华北-北京四、华东-上海一、华南-广州、中国-香港、亚太-曼谷、 亚太-新加坡。
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
            let body: any;
            
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
            let body: any;
            
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
            let body: any;
            
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
            let body: any;
            
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
         * 购买包周期云模式waf。
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
            let body: any;
            
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
            let body: any;
            
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
         * 创建攻击惩罚规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPunishmentRule(createPunishmentRuleRequest?: CreatePunishmentRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/waf/policy/{policy_id}/punishment",
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
            
            let policyId;
            
            let enterpriseProjectId;

            if (createPunishmentRuleRequest !== null && createPunishmentRuleRequest !== undefined) {
                if (createPunishmentRuleRequest instanceof CreatePunishmentRuleRequest) {
                    contentType = createPunishmentRuleRequest.contentType;
                    policyId = createPunishmentRuleRequest.policyId;
                    body = createPunishmentRuleRequest.body
                    enterpriseProjectId = createPunishmentRuleRequest.enterpriseProjectId;
                } else {
                    contentType = createPunishmentRuleRequest['Content-Type'];
                    policyId = createPunishmentRuleRequest['policy_id'];
                    body = createPunishmentRuleRequest['body'];
                    enterpriseProjectId = createPunishmentRuleRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling createPunishmentRule.');
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
            let body: any;
            
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
            let body: any;
            
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
         * 删除JS脚本反爬虫防护规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAnticrawlerRule(deleteAnticrawlerRuleRequest?: DeleteAnticrawlerRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/waf/policy/{policy_id}/anticrawler/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let policyId;
            
            let ruleId;
            
            let enterpriseProjectId;

            if (deleteAnticrawlerRuleRequest !== null && deleteAnticrawlerRuleRequest !== undefined) {
                if (deleteAnticrawlerRuleRequest instanceof DeleteAnticrawlerRuleRequest) {
                    contentType = deleteAnticrawlerRuleRequest.contentType;
                    policyId = deleteAnticrawlerRuleRequest.policyId;
                    ruleId = deleteAnticrawlerRuleRequest.ruleId;
                    enterpriseProjectId = deleteAnticrawlerRuleRequest.enterpriseProjectId;
                } else {
                    contentType = deleteAnticrawlerRuleRequest['Content-Type'];
                    policyId = deleteAnticrawlerRuleRequest['policy_id'];
                    ruleId = deleteAnticrawlerRuleRequest['rule_id'];
                    enterpriseProjectId = deleteAnticrawlerRuleRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling deleteAnticrawlerRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling deleteAnticrawlerRule.');
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
         * 删除防敏感信息泄露防护规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAntileakageRule(deleteAntileakageRuleRequest?: DeleteAntileakageRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/waf/policy/{policy_id}/antileakage/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let policyId;
            
            let ruleId;
            
            let enterpriseProjectId;

            if (deleteAntileakageRuleRequest !== null && deleteAntileakageRuleRequest !== undefined) {
                if (deleteAntileakageRuleRequest instanceof DeleteAntileakageRuleRequest) {
                    contentType = deleteAntileakageRuleRequest.contentType;
                    policyId = deleteAntileakageRuleRequest.policyId;
                    ruleId = deleteAntileakageRuleRequest.ruleId;
                    enterpriseProjectId = deleteAntileakageRuleRequest.enterpriseProjectId;
                } else {
                    contentType = deleteAntileakageRuleRequest['Content-Type'];
                    policyId = deleteAntileakageRuleRequest['policy_id'];
                    ruleId = deleteAntileakageRuleRequest['rule_id'];
                    enterpriseProjectId = deleteAntileakageRuleRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling deleteAntileakageRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling deleteAntileakageRule.');
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
                headers: {}
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
         * 删除cc防护规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCcRule(deleteCcRuleRequest?: DeleteCcRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/waf/policy/{policy_id}/cc/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let policyId;
            
            let ruleId;
            
            let enterpriseProjectId;

            if (deleteCcRuleRequest !== null && deleteCcRuleRequest !== undefined) {
                if (deleteCcRuleRequest instanceof DeleteCcRuleRequest) {
                    contentType = deleteCcRuleRequest.contentType;
                    policyId = deleteCcRuleRequest.policyId;
                    ruleId = deleteCcRuleRequest.ruleId;
                    enterpriseProjectId = deleteCcRuleRequest.enterpriseProjectId;
                } else {
                    contentType = deleteCcRuleRequest['Content-Type'];
                    policyId = deleteCcRuleRequest['policy_id'];
                    ruleId = deleteCcRuleRequest['rule_id'];
                    enterpriseProjectId = deleteCcRuleRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling deleteCcRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling deleteCcRule.');
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
                headers: {}
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
         * 关闭云模式按需计费接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCloudWafPostPaidResource(deleteCloudWafPostPaidResourceRequest?: DeleteCloudWafPostPaidResourceRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/waf/postpaid",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let region;
            
            let enterpriseProjectId;

            if (deleteCloudWafPostPaidResourceRequest !== null && deleteCloudWafPostPaidResourceRequest !== undefined) {
                if (deleteCloudWafPostPaidResourceRequest instanceof DeleteCloudWafPostPaidResourceRequest) {
                    contentType = deleteCloudWafPostPaidResourceRequest.contentType;
                    region = deleteCloudWafPostPaidResourceRequest.region;
                    enterpriseProjectId = deleteCloudWafPostPaidResourceRequest.enterpriseProjectId;
                } else {
                    contentType = deleteCloudWafPostPaidResourceRequest['Content-Type'];
                    region = deleteCloudWafPostPaidResourceRequest['region'];
                    enterpriseProjectId = deleteCloudWafPostPaidResourceRequest['enterprise_project_id'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除精准防护规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCustomRule(deleteCustomRuleRequest?: DeleteCustomRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/waf/policy/{policy_id}/custom/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let policyId;
            
            let ruleId;
            
            let enterpriseProjectId;

            if (deleteCustomRuleRequest !== null && deleteCustomRuleRequest !== undefined) {
                if (deleteCustomRuleRequest instanceof DeleteCustomRuleRequest) {
                    contentType = deleteCustomRuleRequest.contentType;
                    policyId = deleteCustomRuleRequest.policyId;
                    ruleId = deleteCustomRuleRequest.ruleId;
                    enterpriseProjectId = deleteCustomRuleRequest.enterpriseProjectId;
                } else {
                    contentType = deleteCustomRuleRequest['Content-Type'];
                    policyId = deleteCustomRuleRequest['policy_id'];
                    ruleId = deleteCustomRuleRequest['rule_id'];
                    enterpriseProjectId = deleteCustomRuleRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling deleteCustomRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling deleteCustomRule.');
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
                headers: {}
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
                headers: {}
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
                headers: {}
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
                headers: {}
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
                headers: {}
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
                headers: {}
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
                headers: {}
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
                headers: {}
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
         * 删除攻击惩罚规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePunishmentRule(deletePunishmentRuleRequest?: DeletePunishmentRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/waf/policy/{policy_id}/punishment/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let policyId;
            
            let ruleId;
            
            let enterpriseProjectId;

            if (deletePunishmentRuleRequest !== null && deletePunishmentRuleRequest !== undefined) {
                if (deletePunishmentRuleRequest instanceof DeletePunishmentRuleRequest) {
                    contentType = deletePunishmentRuleRequest.contentType;
                    policyId = deletePunishmentRuleRequest.policyId;
                    ruleId = deletePunishmentRuleRequest.ruleId;
                    enterpriseProjectId = deletePunishmentRuleRequest.enterpriseProjectId;
                } else {
                    contentType = deletePunishmentRuleRequest['Content-Type'];
                    policyId = deletePunishmentRuleRequest['policy_id'];
                    ruleId = deletePunishmentRuleRequest['rule_id'];
                    enterpriseProjectId = deletePunishmentRuleRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling deletePunishmentRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling deletePunishmentRule.');
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
                headers: {}
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
                headers: {}
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
         * 查询JS脚本反爬虫规则列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAnticrawlerRules(listAnticrawlerRulesRequest?: ListAnticrawlerRulesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/policy/{policy_id}/anticrawler",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let policyId;
            
            let offset;
            
            let limit;
            
            let enterpriseProjectId;
            
            let type;

            if (listAnticrawlerRulesRequest !== null && listAnticrawlerRulesRequest !== undefined) {
                if (listAnticrawlerRulesRequest instanceof ListAnticrawlerRulesRequest) {
                    contentType = listAnticrawlerRulesRequest.contentType;
                    policyId = listAnticrawlerRulesRequest.policyId;
                    offset = listAnticrawlerRulesRequest.offset;
                    limit = listAnticrawlerRulesRequest.limit;
                    enterpriseProjectId = listAnticrawlerRulesRequest.enterpriseProjectId;
                    type = listAnticrawlerRulesRequest.type;
                } else {
                    contentType = listAnticrawlerRulesRequest['Content-Type'];
                    policyId = listAnticrawlerRulesRequest['policy_id'];
                    offset = listAnticrawlerRulesRequest['offset'];
                    limit = listAnticrawlerRulesRequest['limit'];
                    enterpriseProjectId = listAnticrawlerRulesRequest['enterprise_project_id'];
                    type = listAnticrawlerRulesRequest['type'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling listAnticrawlerRules.');
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listAnticrawlerRules.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listAnticrawlerRules.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
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
         * 查询防敏感信息泄露规则列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAntileakageRules(listAntileakageRulesRequest?: ListAntileakageRulesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/policy/{policy_id}/antileakage",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let policyId;
            
            let offset;
            
            let limit;
            
            let enterpriseProjectId;

            if (listAntileakageRulesRequest !== null && listAntileakageRulesRequest !== undefined) {
                if (listAntileakageRulesRequest instanceof ListAntileakageRulesRequest) {
                    contentType = listAntileakageRulesRequest.contentType;
                    policyId = listAntileakageRulesRequest.policyId;
                    offset = listAntileakageRulesRequest.offset;
                    limit = listAntileakageRulesRequest.limit;
                    enterpriseProjectId = listAntileakageRulesRequest.enterpriseProjectId;
                } else {
                    contentType = listAntileakageRulesRequest['Content-Type'];
                    policyId = listAntileakageRulesRequest['policy_id'];
                    offset = listAntileakageRulesRequest['offset'];
                    limit = listAntileakageRulesRequest['limit'];
                    enterpriseProjectId = listAntileakageRulesRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling listAntileakageRules.');
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listAntileakageRules.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listAntileakageRules.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
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
                headers: {}
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
         * 查询攻击防护类型
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAttackActionTypes(listAttackActionTypesRequest?: ListAttackActionTypesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/overviews/attack/action-types",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let from;
            
            let to;
            
            let enterpriseProjectId;

            if (listAttackActionTypesRequest !== null && listAttackActionTypesRequest !== undefined) {
                if (listAttackActionTypesRequest instanceof ListAttackActionTypesRequest) {
                    contentType = listAttackActionTypesRequest.contentType;
                    from = listAttackActionTypesRequest.from;
                    to = listAttackActionTypesRequest.to;
                    enterpriseProjectId = listAttackActionTypesRequest.enterpriseProjectId;
                } else {
                    contentType = listAttackActionTypesRequest['Content-Type'];
                    from = listAttackActionTypesRequest['from'];
                    to = listAttackActionTypesRequest['to'];
                    enterpriseProjectId = listAttackActionTypesRequest['enterprise_project_id'];
                }
            }

        
            if (from === null || from === undefined) {
                throw new RequiredError('from','Required parameter from was null or undefined when calling listAttackActionTypes.');
            }
            if (from !== null && from !== undefined) {
                localVarQueryParameter['from'] = from;
            }
            if (to === null || to === undefined) {
                throw new RequiredError('to','Required parameter to was null or undefined when calling listAttackActionTypes.');
            }
            if (to !== null && to !== undefined) {
                localVarQueryParameter['to'] = to;
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
         * 查询安全统计带宽数据，统计的带宽数据为平均值，单位为bit/s。
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
                headers: {}
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
            
            let displayOption;

            if (listBandwidthTimelineRequest !== null && listBandwidthTimelineRequest !== undefined) {
                if (listBandwidthTimelineRequest instanceof ListBandwidthTimelineRequest) {
                    contentType = listBandwidthTimelineRequest.contentType;
                    from = listBandwidthTimelineRequest.from;
                    to = listBandwidthTimelineRequest.to;
                    enterpriseProjectId = listBandwidthTimelineRequest.enterpriseProjectId;
                    hosts = listBandwidthTimelineRequest.hosts;
                    instances = listBandwidthTimelineRequest.instances;
                    groupBy = listBandwidthTimelineRequest.groupBy;
                    displayOption = listBandwidthTimelineRequest.displayOption;
                } else {
                    contentType = listBandwidthTimelineRequest['Content-Type'];
                    from = listBandwidthTimelineRequest['from'];
                    to = listBandwidthTimelineRequest['to'];
                    enterpriseProjectId = listBandwidthTimelineRequest['enterprise_project_id'];
                    hosts = listBandwidthTimelineRequest['hosts'];
                    instances = listBandwidthTimelineRequest['instances'];
                    groupBy = listBandwidthTimelineRequest['group_by'];
                    displayOption = listBandwidthTimelineRequest['display_option'];
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
            if (displayOption !== null && displayOption !== undefined) {
                localVarQueryParameter['display_option'] = displayOption;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询cc规则列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCcRules(listCcRulesRequest?: ListCcRulesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/policy/{policy_id}/cc",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let policyId;
            
            let offset;
            
            let limit;
            
            let enterpriseProjectId;

            if (listCcRulesRequest !== null && listCcRulesRequest !== undefined) {
                if (listCcRulesRequest instanceof ListCcRulesRequest) {
                    contentType = listCcRulesRequest.contentType;
                    policyId = listCcRulesRequest.policyId;
                    offset = listCcRulesRequest.offset;
                    limit = listCcRulesRequest.limit;
                    enterpriseProjectId = listCcRulesRequest.enterpriseProjectId;
                } else {
                    contentType = listCcRulesRequest['Content-Type'];
                    policyId = listCcRulesRequest['policy_id'];
                    offset = listCcRulesRequest['offset'];
                    limit = listCcRulesRequest['limit'];
                    enterpriseProjectId = listCcRulesRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling listCcRules.');
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listCcRules.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listCcRules.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
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
                headers: {}
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
                headers: {}
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
         * 查询精准防护规则列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCustomRules(listCustomRulesRequest?: ListCustomRulesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/policy/{policy_id}/custom",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let policyId;
            
            let offset;
            
            let limit;
            
            let enterpriseProjectId;

            if (listCustomRulesRequest !== null && listCustomRulesRequest !== undefined) {
                if (listCustomRulesRequest instanceof ListCustomRulesRequest) {
                    contentType = listCustomRulesRequest.contentType;
                    policyId = listCustomRulesRequest.policyId;
                    offset = listCustomRulesRequest.offset;
                    limit = listCustomRulesRequest.limit;
                    enterpriseProjectId = listCustomRulesRequest.enterpriseProjectId;
                } else {
                    contentType = listCustomRulesRequest['Content-Type'];
                    policyId = listCustomRulesRequest['policy_id'];
                    offset = listCustomRulesRequest['offset'];
                    limit = listCustomRulesRequest['limit'];
                    enterpriseProjectId = listCustomRulesRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling listCustomRules.');
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listCustomRules.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listCustomRules.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
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
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let xLanguage;
            
            let enterpriseProjectId;
            
            let recent;
            
            let from;
            
            let to;
            
            let attacks;
            
            let hosts;
            
            let sips;
            
            let page;
            
            let pagesize;

            if (listEventRequest !== null && listEventRequest !== undefined) {
                if (listEventRequest instanceof ListEventRequest) {
                    contentType = listEventRequest.contentType;
                    xLanguage = listEventRequest.xLanguage;
                    enterpriseProjectId = listEventRequest.enterpriseProjectId;
                    recent = listEventRequest.recent;
                    from = listEventRequest.from;
                    to = listEventRequest.to;
                    attacks = listEventRequest.attacks;
                    hosts = listEventRequest.hosts;
                    sips = listEventRequest.sips;
                    page = listEventRequest.page;
                    pagesize = listEventRequest.pagesize;
                } else {
                    contentType = listEventRequest['Content-Type'];
                    xLanguage = listEventRequest['X-Language'];
                    enterpriseProjectId = listEventRequest['enterprise_project_id'];
                    recent = listEventRequest['recent'];
                    from = listEventRequest['from'];
                    to = listEventRequest['to'];
                    attacks = listEventRequest['attacks'];
                    hosts = listEventRequest['hosts'];
                    sips = listEventRequest['sips'];
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
            if (sips !== null && sips !== undefined) {
                localVarQueryParameter['sips'] = sips;
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
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
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
                headers: {}
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
                headers: {}
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
                headers: {}
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
                headers: {}
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
                headers: {}
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
         * 查询WAF独享引擎标签。独享模式只在部分局点支持，包括：华北-北京四、华东-上海一、华南-广州、华南-深圳  、中国-香港、亚太-曼谷、 亚太-新加坡。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceTags(listInstanceTagsRequest?: ListInstanceTagsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/waf-instance/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let enterpriseProjectId;

            if (listInstanceTagsRequest !== null && listInstanceTagsRequest !== undefined) {
                if (listInstanceTagsRequest instanceof ListInstanceTagsRequest) {
                    contentType = listInstanceTagsRequest.contentType;
                    enterpriseProjectId = listInstanceTagsRequest.enterpriseProjectId;
                } else {
                    contentType = listInstanceTagsRequest['Content-Type'];
                    enterpriseProjectId = listInstanceTagsRequest['enterprise_project_id'];
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
                headers: {}
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
                headers: {}
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
         * 查询安全总览分类统计TOP信息，包含受攻击域名 、攻击源ip、受攻击URL、攻击来源区域、攻击事件分布。
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
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let from;
            
            let to;
            
            let xLanguage;
            
            let enterpriseProjectId;
            
            let top;
            
            let hosts;
            
            let instances;

            if (listOverviewsClassificationRequest !== null && listOverviewsClassificationRequest !== undefined) {
                if (listOverviewsClassificationRequest instanceof ListOverviewsClassificationRequest) {
                    contentType = listOverviewsClassificationRequest.contentType;
                    from = listOverviewsClassificationRequest.from;
                    to = listOverviewsClassificationRequest.to;
                    xLanguage = listOverviewsClassificationRequest.xLanguage;
                    enterpriseProjectId = listOverviewsClassificationRequest.enterpriseProjectId;
                    top = listOverviewsClassificationRequest.top;
                    hosts = listOverviewsClassificationRequest.hosts;
                    instances = listOverviewsClassificationRequest.instances;
                } else {
                    contentType = listOverviewsClassificationRequest['Content-Type'];
                    from = listOverviewsClassificationRequest['from'];
                    to = listOverviewsClassificationRequest['to'];
                    xLanguage = listOverviewsClassificationRequest['X-Language'];
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
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
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
                headers: {}
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
                headers: {}
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
         * 查询隐私屏蔽防护规则列表
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
                headers: {}
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
         * 查询攻击惩罚规则列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPunishmentRules(listPunishmentRulesRequest?: ListPunishmentRulesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/policy/{policy_id}/punishment",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let policyId;
            
            let offset;
            
            let limit;
            
            let enterpriseProjectId;

            if (listPunishmentRulesRequest !== null && listPunishmentRulesRequest !== undefined) {
                if (listPunishmentRulesRequest instanceof ListPunishmentRulesRequest) {
                    contentType = listPunishmentRulesRequest.contentType;
                    policyId = listPunishmentRulesRequest.policyId;
                    offset = listPunishmentRulesRequest.offset;
                    limit = listPunishmentRulesRequest.limit;
                    enterpriseProjectId = listPunishmentRulesRequest.enterpriseProjectId;
                } else {
                    contentType = listPunishmentRulesRequest['Content-Type'];
                    policyId = listPunishmentRulesRequest['policy_id'];
                    offset = listPunishmentRulesRequest['offset'];
                    limit = listPunishmentRulesRequest['limit'];
                    enterpriseProjectId = listPunishmentRulesRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling listPunishmentRules.');
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listPunishmentRules.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listPunishmentRules.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
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
         * 查询安全统计qps次数。
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
                headers: {}
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
         * 查询安全总览中请求次数时间线统计数据。
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
                headers: {}
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
         * 查询安全报告订阅列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSecurityReportSubscriptions(listSecurityReportSubscriptionsRequest?: ListSecurityReportSubscriptionsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/security-report/subscriptions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let enterpriseProjectId;
            
            let reportName;
            
            let reportCategory;
            
            let reportStatus;
            
            let offset;
            
            let limit;

            if (listSecurityReportSubscriptionsRequest !== null && listSecurityReportSubscriptionsRequest !== undefined) {
                if (listSecurityReportSubscriptionsRequest instanceof ListSecurityReportSubscriptionsRequest) {
                    contentType = listSecurityReportSubscriptionsRequest.contentType;
                    enterpriseProjectId = listSecurityReportSubscriptionsRequest.enterpriseProjectId;
                    reportName = listSecurityReportSubscriptionsRequest.reportName;
                    reportCategory = listSecurityReportSubscriptionsRequest.reportCategory;
                    reportStatus = listSecurityReportSubscriptionsRequest.reportStatus;
                    offset = listSecurityReportSubscriptionsRequest.offset;
                    limit = listSecurityReportSubscriptionsRequest.limit;
                } else {
                    contentType = listSecurityReportSubscriptionsRequest['Content-Type'];
                    enterpriseProjectId = listSecurityReportSubscriptionsRequest['enterprise_project_id'];
                    reportName = listSecurityReportSubscriptionsRequest['report_name'];
                    reportCategory = listSecurityReportSubscriptionsRequest['report_category'];
                    reportStatus = listSecurityReportSubscriptionsRequest['report_status'];
                    offset = listSecurityReportSubscriptionsRequest['offset'];
                    limit = listSecurityReportSubscriptionsRequest['limit'];
                }
            }

        
            if (enterpriseProjectId === null || enterpriseProjectId === undefined) {
                throw new RequiredError('enterpriseProjectId','Required parameter enterpriseProjectId was null or undefined when calling listSecurityReportSubscriptions.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (reportName !== null && reportName !== undefined) {
                localVarQueryParameter['report_name'] = reportName;
            }
            if (reportCategory !== null && reportCategory !== undefined) {
                localVarQueryParameter['report_category'] = reportCategory;
            }
            if (reportStatus !== null && reportStatus !== undefined) {
                localVarQueryParameter['report_status'] = reportStatus;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
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
         * 查询安全总览请求与攻击数量。
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
                headers: {}
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
         * 查询业务异常TOP统计信息。
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
                headers: {}
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
         * 查询top受攻击域名
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTopDomains(listTopDomainsRequest?: ListTopDomainsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/overviews/attack/top-domains",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let from;
            
            let to;
            
            let enterpriseProjectId;
            
            let top;
            
            let hosts;

            if (listTopDomainsRequest !== null && listTopDomainsRequest !== undefined) {
                if (listTopDomainsRequest instanceof ListTopDomainsRequest) {
                    contentType = listTopDomainsRequest.contentType;
                    from = listTopDomainsRequest.from;
                    to = listTopDomainsRequest.to;
                    enterpriseProjectId = listTopDomainsRequest.enterpriseProjectId;
                    top = listTopDomainsRequest.top;
                    hosts = listTopDomainsRequest.hosts;
                } else {
                    contentType = listTopDomainsRequest['Content-Type'];
                    from = listTopDomainsRequest['from'];
                    to = listTopDomainsRequest['to'];
                    enterpriseProjectId = listTopDomainsRequest['enterprise_project_id'];
                    top = listTopDomainsRequest['top'];
                    hosts = listTopDomainsRequest['hosts'];
                }
            }

        
            if (from === null || from === undefined) {
                throw new RequiredError('from','Required parameter from was null or undefined when calling listTopDomains.');
            }
            if (from !== null && from !== undefined) {
                localVarQueryParameter['from'] = from;
            }
            if (to === null || to === undefined) {
                throw new RequiredError('to','Required parameter to was null or undefined when calling listTopDomains.');
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
                headers: {}
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
         * 查询web基础防护内置规则列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWebBasicProtectionRules(listWebBasicProtectionRulesRequest?: ListWebBasicProtectionRulesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/policy/basic-protection/default-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let xLanguage;
            
            let enterpriseProjectId;
            
            let offset;
            
            let limit;
            
            let from;
            
            let to;
            
            let level;
            
            let id;
            
            let description;
            
            let cveNumber;
            
            let riskLevel;
            
            let protectionTypeNames;
            
            let applicationTypeNames;

            if (listWebBasicProtectionRulesRequest !== null && listWebBasicProtectionRulesRequest !== undefined) {
                if (listWebBasicProtectionRulesRequest instanceof ListWebBasicProtectionRulesRequest) {
                    contentType = listWebBasicProtectionRulesRequest.contentType;
                    xLanguage = listWebBasicProtectionRulesRequest.xLanguage;
                    enterpriseProjectId = listWebBasicProtectionRulesRequest.enterpriseProjectId;
                    offset = listWebBasicProtectionRulesRequest.offset;
                    limit = listWebBasicProtectionRulesRequest.limit;
                    from = listWebBasicProtectionRulesRequest.from;
                    to = listWebBasicProtectionRulesRequest.to;
                    level = listWebBasicProtectionRulesRequest.level;
                    id = listWebBasicProtectionRulesRequest.id;
                    description = listWebBasicProtectionRulesRequest.description;
                    cveNumber = listWebBasicProtectionRulesRequest.cveNumber;
                    riskLevel = listWebBasicProtectionRulesRequest.riskLevel;
                    protectionTypeNames = listWebBasicProtectionRulesRequest.protectionTypeNames;
                    applicationTypeNames = listWebBasicProtectionRulesRequest.applicationTypeNames;
                } else {
                    contentType = listWebBasicProtectionRulesRequest['Content-Type'];
                    xLanguage = listWebBasicProtectionRulesRequest['X-Language'];
                    enterpriseProjectId = listWebBasicProtectionRulesRequest['enterprise_project_id'];
                    offset = listWebBasicProtectionRulesRequest['offset'];
                    limit = listWebBasicProtectionRulesRequest['limit'];
                    from = listWebBasicProtectionRulesRequest['from'];
                    to = listWebBasicProtectionRulesRequest['to'];
                    level = listWebBasicProtectionRulesRequest['level'];
                    id = listWebBasicProtectionRulesRequest['id'];
                    description = listWebBasicProtectionRulesRequest['description'];
                    cveNumber = listWebBasicProtectionRulesRequest['cve_number'];
                    riskLevel = listWebBasicProtectionRulesRequest['risk_level'];
                    protectionTypeNames = listWebBasicProtectionRulesRequest['protection_type_names'];
                    applicationTypeNames = listWebBasicProtectionRulesRequest['application_type_names'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (from !== null && from !== undefined) {
                localVarQueryParameter['from'] = from;
            }
            if (to !== null && to !== undefined) {
                localVarQueryParameter['to'] = to;
            }
            if (level !== null && level !== undefined) {
                localVarQueryParameter['level'] = level;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (cveNumber !== null && cveNumber !== undefined) {
                localVarQueryParameter['cve_number'] = cveNumber;
            }
            if (riskLevel !== null && riskLevel !== undefined) {
                localVarQueryParameter['risk_level'] = riskLevel;
            }
            if (protectionTypeNames !== null && protectionTypeNames !== undefined) {
                localVarQueryParameter['protection_type_names'] = protectionTypeNames;
            }
            if (applicationTypeNames !== null && applicationTypeNames !== undefined) {
                localVarQueryParameter['application_type_names'] = applicationTypeNames;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
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
                headers: {}
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
            let body: any;
            
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
            let body: any;
            
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
         * 根据Id查询JS脚本反爬虫防护规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAnticrawlerRule(showAnticrawlerRuleRequest?: ShowAnticrawlerRuleRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/policy/{policy_id}/anticrawler/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let policyId;
            
            let ruleId;
            
            let enterpriseProjectId;

            if (showAnticrawlerRuleRequest !== null && showAnticrawlerRuleRequest !== undefined) {
                if (showAnticrawlerRuleRequest instanceof ShowAnticrawlerRuleRequest) {
                    contentType = showAnticrawlerRuleRequest.contentType;
                    policyId = showAnticrawlerRuleRequest.policyId;
                    ruleId = showAnticrawlerRuleRequest.ruleId;
                    enterpriseProjectId = showAnticrawlerRuleRequest.enterpriseProjectId;
                } else {
                    contentType = showAnticrawlerRuleRequest['Content-Type'];
                    policyId = showAnticrawlerRuleRequest['policy_id'];
                    ruleId = showAnticrawlerRuleRequest['rule_id'];
                    enterpriseProjectId = showAnticrawlerRuleRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling showAnticrawlerRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling showAnticrawlerRule.');
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
         * 根据Id查询防敏感信息泄露防护规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAntileakageRule(showAntileakageRuleRequest?: ShowAntileakageRuleRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/policy/{policy_id}/antileakage/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let policyId;
            
            let ruleId;
            
            let enterpriseProjectId;

            if (showAntileakageRuleRequest !== null && showAntileakageRuleRequest !== undefined) {
                if (showAntileakageRuleRequest instanceof ShowAntileakageRuleRequest) {
                    contentType = showAntileakageRuleRequest.contentType;
                    policyId = showAntileakageRuleRequest.policyId;
                    ruleId = showAntileakageRuleRequest.ruleId;
                    enterpriseProjectId = showAntileakageRuleRequest.enterpriseProjectId;
                } else {
                    contentType = showAntileakageRuleRequest['Content-Type'];
                    policyId = showAntileakageRuleRequest['policy_id'];
                    ruleId = showAntileakageRuleRequest['rule_id'];
                    enterpriseProjectId = showAntileakageRuleRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling showAntileakageRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling showAntileakageRule.');
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
         * 查询防篡改防护规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAntitamperRule(showAntitamperRuleRequest?: ShowAntitamperRuleRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/policy/{policy_id}/antitamper/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let policyId;
            
            let ruleId;
            
            let enterpriseProjectId;

            if (showAntitamperRuleRequest !== null && showAntitamperRuleRequest !== undefined) {
                if (showAntitamperRuleRequest instanceof ShowAntitamperRuleRequest) {
                    contentType = showAntitamperRuleRequest.contentType;
                    policyId = showAntitamperRuleRequest.policyId;
                    ruleId = showAntitamperRuleRequest.ruleId;
                    enterpriseProjectId = showAntitamperRuleRequest.enterpriseProjectId;
                } else {
                    contentType = showAntitamperRuleRequest['Content-Type'];
                    policyId = showAntitamperRuleRequest['policy_id'];
                    ruleId = showAntitamperRuleRequest['rule_id'];
                    enterpriseProjectId = showAntitamperRuleRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling showAntitamperRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling showAntitamperRule.');
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
         * 根据Id查询cc防护规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCcRule(showCcRuleRequest?: ShowCcRuleRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/policy/{policy_id}/cc/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let policyId;
            
            let ruleId;
            
            let enterpriseProjectId;

            if (showCcRuleRequest !== null && showCcRuleRequest !== undefined) {
                if (showCcRuleRequest instanceof ShowCcRuleRequest) {
                    contentType = showCcRuleRequest.contentType;
                    policyId = showCcRuleRequest.policyId;
                    ruleId = showCcRuleRequest.ruleId;
                    enterpriseProjectId = showCcRuleRequest.enterpriseProjectId;
                } else {
                    contentType = showCcRuleRequest['Content-Type'];
                    policyId = showCcRuleRequest['policy_id'];
                    ruleId = showCcRuleRequest['rule_id'];
                    enterpriseProjectId = showCcRuleRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling showCcRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling showCcRule.');
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
                headers: {}
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
                headers: {}
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
                headers: {}
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
         * 根据Id查询精准防护规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCustomRule(showCustomRuleRequest?: ShowCustomRuleRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/policy/{policy_id}/custom/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let policyId;
            
            let ruleId;
            
            let enterpriseProjectId;

            if (showCustomRuleRequest !== null && showCustomRuleRequest !== undefined) {
                if (showCustomRuleRequest instanceof ShowCustomRuleRequest) {
                    contentType = showCustomRuleRequest.contentType;
                    policyId = showCustomRuleRequest.policyId;
                    ruleId = showCustomRuleRequest.ruleId;
                    enterpriseProjectId = showCustomRuleRequest.enterpriseProjectId;
                } else {
                    contentType = showCustomRuleRequest['Content-Type'];
                    policyId = showCustomRuleRequest['policy_id'];
                    ruleId = showCustomRuleRequest['rule_id'];
                    enterpriseProjectId = showCustomRuleRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling showCustomRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling showCustomRule.');
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
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let eventid;
            
            let xLanguage;
            
            let enterpriseProjectId;

            if (showEventRequest !== null && showEventRequest !== undefined) {
                if (showEventRequest instanceof ShowEventRequest) {
                    contentType = showEventRequest.contentType;
                    eventid = showEventRequest.eventid;
                    xLanguage = showEventRequest.xLanguage;
                    enterpriseProjectId = showEventRequest.enterpriseProjectId;
                } else {
                    contentType = showEventRequest['Content-Type'];
                    eventid = showEventRequest['eventid'];
                    xLanguage = showEventRequest['X-Language'];
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
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'eventid': eventid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除地理位置控制防护规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showGeoipRule(showGeoipRuleRequest?: ShowGeoipRuleRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/policy/{policy_id}/geoip/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let policyId;
            
            let ruleId;
            
            let enterpriseProjectId;

            if (showGeoipRuleRequest !== null && showGeoipRuleRequest !== undefined) {
                if (showGeoipRuleRequest instanceof ShowGeoipRuleRequest) {
                    contentType = showGeoipRuleRequest.contentType;
                    policyId = showGeoipRuleRequest.policyId;
                    ruleId = showGeoipRuleRequest.ruleId;
                    enterpriseProjectId = showGeoipRuleRequest.enterpriseProjectId;
                } else {
                    contentType = showGeoipRuleRequest['Content-Type'];
                    policyId = showGeoipRuleRequest['policy_id'];
                    ruleId = showGeoipRuleRequest['rule_id'];
                    enterpriseProjectId = showGeoipRuleRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling showGeoipRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling showGeoipRule.');
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
                headers: {}
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
         * 查询域名运行状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showHostStatus(showHostStatusRequest?: ShowHostStatusRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/instance/{host_id}/host-status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let hostId;

            if (showHostStatusRequest !== null && showHostStatusRequest !== undefined) {
                if (showHostStatusRequest instanceof ShowHostStatusRequest) {
                    contentType = showHostStatusRequest.contentType;
                    hostId = showHostStatusRequest.hostId;
                } else {
                    contentType = showHostStatusRequest['Content-Type'];
                    hostId = showHostStatusRequest['host_id'];
                }
            }

        
            if (hostId === null || hostId === undefined) {
            throw new RequiredError('hostId','Required parameter hostId was null or undefined when calling showHostStatus.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'host_id': hostId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询全局白名单(原误报屏蔽)防护规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showIgnoreRule(showIgnoreRuleRequest?: ShowIgnoreRuleRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/policy/{policy_id}/ignore/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let policyId;
            
            let ruleId;
            
            let enterpriseProjectId;

            if (showIgnoreRuleRequest !== null && showIgnoreRuleRequest !== undefined) {
                if (showIgnoreRuleRequest instanceof ShowIgnoreRuleRequest) {
                    contentType = showIgnoreRuleRequest.contentType;
                    policyId = showIgnoreRuleRequest.policyId;
                    ruleId = showIgnoreRuleRequest.ruleId;
                    enterpriseProjectId = showIgnoreRuleRequest.enterpriseProjectId;
                } else {
                    contentType = showIgnoreRuleRequest['Content-Type'];
                    policyId = showIgnoreRuleRequest['policy_id'];
                    ruleId = showIgnoreRuleRequest['rule_id'];
                    enterpriseProjectId = showIgnoreRuleRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling showIgnoreRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling showIgnoreRule.');
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
                headers: {}
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
                headers: {}
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
                headers: {}
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
                headers: {}
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
         * 查询地理位置选项的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPolicyGeoipMap(showPolicyGeoipMapRequest?: ShowPolicyGeoipMapRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/tag/geoip/map",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let lang;

            if (showPolicyGeoipMapRequest !== null && showPolicyGeoipMapRequest !== undefined) {
                if (showPolicyGeoipMapRequest instanceof ShowPolicyGeoipMapRequest) {
                    contentType = showPolicyGeoipMapRequest.contentType;
                    lang = showPolicyGeoipMapRequest.lang;
                } else {
                    contentType = showPolicyGeoipMapRequest['Content-Type'];
                    lang = showPolicyGeoipMapRequest['lang'];
                }
            }

        
            if (lang !== null && lang !== undefined) {
                localVarQueryParameter['lang'] = lang;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
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
                headers: {}
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
         * 查询隐私屏蔽防护规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPrivacyRule(showPrivacyRuleRequest?: ShowPrivacyRuleRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/policy/{policy_id}/privacy/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let policyId;
            
            let ruleId;
            
            let enterpriseProjectId;

            if (showPrivacyRuleRequest !== null && showPrivacyRuleRequest !== undefined) {
                if (showPrivacyRuleRequest instanceof ShowPrivacyRuleRequest) {
                    contentType = showPrivacyRuleRequest.contentType;
                    policyId = showPrivacyRuleRequest.policyId;
                    ruleId = showPrivacyRuleRequest.ruleId;
                    enterpriseProjectId = showPrivacyRuleRequest.enterpriseProjectId;
                } else {
                    contentType = showPrivacyRuleRequest['Content-Type'];
                    policyId = showPrivacyRuleRequest['policy_id'];
                    ruleId = showPrivacyRuleRequest['rule_id'];
                    enterpriseProjectId = showPrivacyRuleRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling showPrivacyRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling showPrivacyRule.');
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
         * 根据Id查询攻击惩罚防护规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPunishmentRule(showPunishmentRuleRequest?: ShowPunishmentRuleRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/policy/{policy_id}/punishment/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let policyId;
            
            let ruleId;
            
            let enterpriseProjectId;

            if (showPunishmentRuleRequest !== null && showPunishmentRuleRequest !== undefined) {
                if (showPunishmentRuleRequest instanceof ShowPunishmentRuleRequest) {
                    contentType = showPunishmentRuleRequest.contentType;
                    policyId = showPunishmentRuleRequest.policyId;
                    ruleId = showPunishmentRuleRequest.ruleId;
                    enterpriseProjectId = showPunishmentRuleRequest.enterpriseProjectId;
                } else {
                    contentType = showPunishmentRuleRequest['Content-Type'];
                    policyId = showPunishmentRuleRequest['policy_id'];
                    ruleId = showPunishmentRuleRequest['rule_id'];
                    enterpriseProjectId = showPunishmentRuleRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling showPunishmentRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling showPunishmentRule.');
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
                headers: {}
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
                headers: {}
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
         * 查询引用表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showValueList(showValueListRequest?: ShowValueListRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/valuelist/{valuelistid}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let valuelistid;
            
            let enterpriseProjectId;

            if (showValueListRequest !== null && showValueListRequest !== undefined) {
                if (showValueListRequest instanceof ShowValueListRequest) {
                    contentType = showValueListRequest.contentType;
                    valuelistid = showValueListRequest.valuelistid;
                    enterpriseProjectId = showValueListRequest.enterpriseProjectId;
                } else {
                    contentType = showValueListRequest['Content-Type'];
                    valuelistid = showValueListRequest['valuelistid'];
                    enterpriseProjectId = showValueListRequest['enterprise_project_id'];
                }
            }

        
            if (valuelistid === null || valuelistid === undefined) {
            throw new RequiredError('valuelistid','Required parameter valuelistid was null or undefined when calling showValueList.');
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
         * 查询黑白名单防护规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showWhiteBlackIpRule(showWhiteBlackIpRuleRequest?: ShowWhiteBlackIpRuleRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/policy/{policy_id}/whiteblackip/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let policyId;
            
            let ruleId;
            
            let enterpriseProjectId;

            if (showWhiteBlackIpRuleRequest !== null && showWhiteBlackIpRuleRequest !== undefined) {
                if (showWhiteBlackIpRuleRequest instanceof ShowWhiteBlackIpRuleRequest) {
                    contentType = showWhiteBlackIpRuleRequest.contentType;
                    policyId = showWhiteBlackIpRuleRequest.policyId;
                    ruleId = showWhiteBlackIpRuleRequest.ruleId;
                    enterpriseProjectId = showWhiteBlackIpRuleRequest.enterpriseProjectId;
                } else {
                    contentType = showWhiteBlackIpRuleRequest['Content-Type'];
                    policyId = showWhiteBlackIpRuleRequest['policy_id'];
                    ruleId = showWhiteBlackIpRuleRequest['rule_id'];
                    enterpriseProjectId = showWhiteBlackIpRuleRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling showWhiteBlackIpRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling showWhiteBlackIpRule.');
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

            let body: any;
            
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
         * 网页防篡改规则更新缓存
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAntiTamperRuleRefresh(updateAntiTamperRuleRefreshRequest?: UpdateAntiTamperRuleRefreshRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/waf/policy/{policy_id}/antitamper/{rule_id}/refresh",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let policyId;
            
            let ruleId;
            
            let enterpriseProjectId;

            if (updateAntiTamperRuleRefreshRequest !== null && updateAntiTamperRuleRefreshRequest !== undefined) {
                if (updateAntiTamperRuleRefreshRequest instanceof UpdateAntiTamperRuleRefreshRequest) {
                    contentType = updateAntiTamperRuleRefreshRequest.contentType;
                    policyId = updateAntiTamperRuleRefreshRequest.policyId;
                    ruleId = updateAntiTamperRuleRefreshRequest.ruleId;
                    enterpriseProjectId = updateAntiTamperRuleRefreshRequest.enterpriseProjectId;
                } else {
                    contentType = updateAntiTamperRuleRefreshRequest['Content-Type'];
                    policyId = updateAntiTamperRuleRefreshRequest['policy_id'];
                    ruleId = updateAntiTamperRuleRefreshRequest['rule_id'];
                    enterpriseProjectId = updateAntiTamperRuleRefreshRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling updateAntiTamperRuleRefresh.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling updateAntiTamperRuleRefresh.');
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
         * 更新JS脚本反爬虫防护规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAnticrawlerRule(updateAnticrawlerRuleRequest?: UpdateAnticrawlerRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/waf/policy/{policy_id}/anticrawler/{rule_id}",
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
            
            let policyId;
            
            let ruleId;
            
            let enterpriseProjectId;

            if (updateAnticrawlerRuleRequest !== null && updateAnticrawlerRuleRequest !== undefined) {
                if (updateAnticrawlerRuleRequest instanceof UpdateAnticrawlerRuleRequest) {
                    contentType = updateAnticrawlerRuleRequest.contentType;
                    policyId = updateAnticrawlerRuleRequest.policyId;
                    ruleId = updateAnticrawlerRuleRequest.ruleId;
                    body = updateAnticrawlerRuleRequest.body
                    enterpriseProjectId = updateAnticrawlerRuleRequest.enterpriseProjectId;
                } else {
                    contentType = updateAnticrawlerRuleRequest['Content-Type'];
                    policyId = updateAnticrawlerRuleRequest['policy_id'];
                    ruleId = updateAnticrawlerRuleRequest['rule_id'];
                    body = updateAnticrawlerRuleRequest['body'];
                    enterpriseProjectId = updateAnticrawlerRuleRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling updateAnticrawlerRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling updateAnticrawlerRule.');
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
         * 更新JS脚本反爬虫规则防护模式，在创建JS脚本反爬虫规则前，需要调用该接口指定JS脚本反爬虫规则防护模式。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAnticrawlerRuleType(updateAnticrawlerRuleTypeRequest?: UpdateAnticrawlerRuleTypeRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/waf/policy/{policy_id}/anticrawler",
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
            
            let policyId;
            
            let enterpriseProjectId;

            if (updateAnticrawlerRuleTypeRequest !== null && updateAnticrawlerRuleTypeRequest !== undefined) {
                if (updateAnticrawlerRuleTypeRequest instanceof UpdateAnticrawlerRuleTypeRequest) {
                    contentType = updateAnticrawlerRuleTypeRequest.contentType;
                    policyId = updateAnticrawlerRuleTypeRequest.policyId;
                    body = updateAnticrawlerRuleTypeRequest.body
                    enterpriseProjectId = updateAnticrawlerRuleTypeRequest.enterpriseProjectId;
                } else {
                    contentType = updateAnticrawlerRuleTypeRequest['Content-Type'];
                    policyId = updateAnticrawlerRuleTypeRequest['policy_id'];
                    body = updateAnticrawlerRuleTypeRequest['body'];
                    enterpriseProjectId = updateAnticrawlerRuleTypeRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling updateAnticrawlerRuleType.');
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
         * 更新防敏感信息泄露防护规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAntileakageRule(updateAntileakageRuleRequest?: UpdateAntileakageRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/waf/policy/{policy_id}/antileakage/{rule_id}",
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
            
            let policyId;
            
            let ruleId;
            
            let enterpriseProjectId;

            if (updateAntileakageRuleRequest !== null && updateAntileakageRuleRequest !== undefined) {
                if (updateAntileakageRuleRequest instanceof UpdateAntileakageRuleRequest) {
                    contentType = updateAntileakageRuleRequest.contentType;
                    policyId = updateAntileakageRuleRequest.policyId;
                    ruleId = updateAntileakageRuleRequest.ruleId;
                    body = updateAntileakageRuleRequest.body
                    enterpriseProjectId = updateAntileakageRuleRequest.enterpriseProjectId;
                } else {
                    contentType = updateAntileakageRuleRequest['Content-Type'];
                    policyId = updateAntileakageRuleRequest['policy_id'];
                    ruleId = updateAntileakageRuleRequest['rule_id'];
                    body = updateAntileakageRuleRequest['body'];
                    enterpriseProjectId = updateAntileakageRuleRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling updateAntileakageRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling updateAntileakageRule.');
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
         * 更新cc防护规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateCcRule(updateCcRuleRequest?: UpdateCcRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/waf/policy/{policy_id}/cc/{rule_id}",
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
            
            let policyId;
            
            let ruleId;
            
            let enterpriseProjectId;

            if (updateCcRuleRequest !== null && updateCcRuleRequest !== undefined) {
                if (updateCcRuleRequest instanceof UpdateCcRuleRequest) {
                    contentType = updateCcRuleRequest.contentType;
                    policyId = updateCcRuleRequest.policyId;
                    ruleId = updateCcRuleRequest.ruleId;
                    enterpriseProjectId = updateCcRuleRequest.enterpriseProjectId;
                    body = updateCcRuleRequest.body
                } else {
                    contentType = updateCcRuleRequest['Content-Type'];
                    policyId = updateCcRuleRequest['policy_id'];
                    ruleId = updateCcRuleRequest['rule_id'];
                    enterpriseProjectId = updateCcRuleRequest['enterprise_project_id'];
                    body = updateCcRuleRequest['body'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling updateCcRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling updateCcRule.');
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
            let body: any;
            
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
         * 更新精准防护规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateCustomRule(updateCustomRuleRequest?: UpdateCustomRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/waf/policy/{policy_id}/custom/{rule_id}",
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
            
            let policyId;
            
            let ruleId;
            
            let enterpriseProjectId;

            if (updateCustomRuleRequest !== null && updateCustomRuleRequest !== undefined) {
                if (updateCustomRuleRequest instanceof UpdateCustomRuleRequest) {
                    contentType = updateCustomRuleRequest.contentType;
                    policyId = updateCustomRuleRequest.policyId;
                    ruleId = updateCustomRuleRequest.ruleId;
                    body = updateCustomRuleRequest.body
                    enterpriseProjectId = updateCustomRuleRequest.enterpriseProjectId;
                } else {
                    contentType = updateCustomRuleRequest['Content-Type'];
                    policyId = updateCustomRuleRequest['policy_id'];
                    ruleId = updateCustomRuleRequest['rule_id'];
                    body = updateCustomRuleRequest['body'];
                    enterpriseProjectId = updateCustomRuleRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling updateCustomRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling updateCustomRule.');
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
            let body: any;
            
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
            let body: any;
            
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
            let body: any;
            
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
         * 更新全局白名单(原误报屏蔽)防护规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateIgnoreRule(updateIgnoreRuleRequest?: UpdateIgnoreRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/waf/policy/{policy_id}/ignore/{rule_id}",
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
            
            let policyId;
            
            let ruleId;
            
            let enterpriseProjectId;

            if (updateIgnoreRuleRequest !== null && updateIgnoreRuleRequest !== undefined) {
                if (updateIgnoreRuleRequest instanceof UpdateIgnoreRuleRequest) {
                    contentType = updateIgnoreRuleRequest.contentType;
                    policyId = updateIgnoreRuleRequest.policyId;
                    ruleId = updateIgnoreRuleRequest.ruleId;
                    body = updateIgnoreRuleRequest.body
                    enterpriseProjectId = updateIgnoreRuleRequest.enterpriseProjectId;
                } else {
                    contentType = updateIgnoreRuleRequest['Content-Type'];
                    policyId = updateIgnoreRuleRequest['policy_id'];
                    ruleId = updateIgnoreRuleRequest['rule_id'];
                    body = updateIgnoreRuleRequest['body'];
                    enterpriseProjectId = updateIgnoreRuleRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling updateIgnoreRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling updateIgnoreRule.');
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
            let body: any;
            
            let contentType;
            
            let id;
            
            let enterpriseProjectId;
            
            let action;

            if (updateIpGroupRequest !== null && updateIpGroupRequest !== undefined) {
                if (updateIpGroupRequest instanceof UpdateIpGroupRequest) {
                    contentType = updateIpGroupRequest.contentType;
                    id = updateIpGroupRequest.id;
                    body = updateIpGroupRequest.body
                    enterpriseProjectId = updateIpGroupRequest.enterpriseProjectId;
                    action = updateIpGroupRequest.action;
                } else {
                    contentType = updateIpGroupRequest['Content-Type'];
                    id = updateIpGroupRequest['id'];
                    body = updateIpGroupRequest['body'];
                    enterpriseProjectId = updateIpGroupRequest['enterprise_project_id'];
                    action = updateIpGroupRequest['action'];
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
            if (action !== null && action !== undefined) {
                localVarQueryParameter['action'] = action;
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
            let body: any;
            
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
            let body: any;
            
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
                headers: {}
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
            let body: any;
            
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
            let body: any;
            
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
            let body: any;
            
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
            let body: any;
            
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
         * 更新攻击惩罚规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePunishmentRule(updatePunishmentRuleRequest?: UpdatePunishmentRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/waf/policy/{policy_id}/punishment/{rule_id}",
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
            
            let policyId;
            
            let ruleId;
            
            let enterpriseProjectId;

            if (updatePunishmentRuleRequest !== null && updatePunishmentRuleRequest !== undefined) {
                if (updatePunishmentRuleRequest instanceof UpdatePunishmentRuleRequest) {
                    contentType = updatePunishmentRuleRequest.contentType;
                    policyId = updatePunishmentRuleRequest.policyId;
                    ruleId = updatePunishmentRuleRequest.ruleId;
                    body = updatePunishmentRuleRequest.body
                    enterpriseProjectId = updatePunishmentRuleRequest.enterpriseProjectId;
                } else {
                    contentType = updatePunishmentRuleRequest['Content-Type'];
                    policyId = updatePunishmentRuleRequest['policy_id'];
                    ruleId = updatePunishmentRuleRequest['rule_id'];
                    body = updatePunishmentRuleRequest['body'];
                    enterpriseProjectId = updatePunishmentRuleRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling updatePunishmentRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling updatePunishmentRule.');
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
            let body: any;
            
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
            let body: any;
            
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