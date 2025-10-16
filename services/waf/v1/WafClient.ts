import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AccessProgress } from './model/AccessProgress';
import { AccessStatusBody } from './model/AccessStatusBody';
import { Action } from './model/Action';
import { ActionDistributions } from './model/ActionDistributions';
import { AlertNoticeConfig } from './model/AlertNoticeConfig';
import { AlertNoticeConfigList } from './model/AlertNoticeConfigList';
import { AlertNoticeConfigResponse } from './model/AlertNoticeConfigResponse';
import { AlterWafProductInfo } from './model/AlterWafProductInfo';
import { AntiTamperRuleResponseBody } from './model/AntiTamperRuleResponseBody';
import { AnticrawlerCondition } from './model/AnticrawlerCondition';
import { AnticrawlerRule } from './model/AnticrawlerRule';
import { AntileakageMapResponseBodyLeakagemap } from './model/AntileakageMapResponseBodyLeakagemap';
import { AntileakageMapResponseBodyLocale } from './model/AntileakageMapResponseBodyLocale';
import { ApplyCertificateToHostRequest } from './model/ApplyCertificateToHostRequest';
import { ApplyCertificateToHostRequestBody } from './model/ApplyCertificateToHostRequestBody';
import { ApplyCertificateToHostResponse } from './model/ApplyCertificateToHostResponse';
import { AsyncJobReqBody } from './model/AsyncJobReqBody';
import { AttackActionCountItem } from './model/AttackActionCountItem';
import { AttackTypeClassificationItem } from './model/AttackTypeClassificationItem';
import { AttackTypeItem } from './model/AttackTypeItem';
import { BacthCreateWhiteBlackIpRuleRequestBody } from './model/BacthCreateWhiteBlackIpRuleRequestBody';
import { BandwidthStatisticsTimelineItem } from './model/BandwidthStatisticsTimelineItem';
import { BatchCreateAntiTamperRuleRequest } from './model/BatchCreateAntiTamperRuleRequest';
import { BatchCreateAntiTamperRuleResponse } from './model/BatchCreateAntiTamperRuleResponse';
import { BatchCreateAntiTamperRulesRequestBody } from './model/BatchCreateAntiTamperRulesRequestBody';
import { BatchCreateAntileakageRuleRequest } from './model/BatchCreateAntileakageRuleRequest';
import { BatchCreateAntileakageRuleRequestBody } from './model/BatchCreateAntileakageRuleRequestBody';
import { BatchCreateAntileakageRuleRequestBodyAction } from './model/BatchCreateAntileakageRuleRequestBodyAction';
import { BatchCreateAntileakageRuleResponse } from './model/BatchCreateAntileakageRuleResponse';
import { BatchCreateCcRuleRequest } from './model/BatchCreateCcRuleRequest';
import { BatchCreateCcRuleRequestBody } from './model/BatchCreateCcRuleRequestBody';
import { BatchCreateCcRuleResponse } from './model/BatchCreateCcRuleResponse';
import { BatchCreateCustomRuleRequest } from './model/BatchCreateCustomRuleRequest';
import { BatchCreateCustomRuleRequestBody } from './model/BatchCreateCustomRuleRequestBody';
import { BatchCreateCustomRuleResponse } from './model/BatchCreateCustomRuleResponse';
import { BatchCreateGeoIpRuleRequest } from './model/BatchCreateGeoIpRuleRequest';
import { BatchCreateGeoIpRuleRequestBody } from './model/BatchCreateGeoIpRuleRequestBody';
import { BatchCreateGeoIpRuleResponse } from './model/BatchCreateGeoIpRuleResponse';
import { BatchCreateIgnoreRuleRequest } from './model/BatchCreateIgnoreRuleRequest';
import { BatchCreateIgnoreRuleRequestBody } from './model/BatchCreateIgnoreRuleRequestBody';
import { BatchCreateIgnoreRuleResponse } from './model/BatchCreateIgnoreRuleResponse';
import { BatchCreateIpReputationRuleRequest } from './model/BatchCreateIpReputationRuleRequest';
import { BatchCreateIpReputationRuleRequestBody } from './model/BatchCreateIpReputationRuleRequestBody';
import { BatchCreateIpReputationRuleRequestBodyAction } from './model/BatchCreateIpReputationRuleRequestBodyAction';
import { BatchCreateIpReputationRuleResponse } from './model/BatchCreateIpReputationRuleResponse';
import { BatchCreatePrivacyRuleRequest } from './model/BatchCreatePrivacyRuleRequest';
import { BatchCreatePrivacyRuleRequestBody } from './model/BatchCreatePrivacyRuleRequestBody';
import { BatchCreatePrivacyRuleResponse } from './model/BatchCreatePrivacyRuleResponse';
import { BatchCreateWhiteblackipRuleRequest } from './model/BatchCreateWhiteblackipRuleRequest';
import { BatchCreateWhiteblackipRuleResponse } from './model/BatchCreateWhiteblackipRuleResponse';
import { BatchDeleteAlertNoticeConfigRequest } from './model/BatchDeleteAlertNoticeConfigRequest';
import { BatchDeleteAlertNoticeConfigResponse } from './model/BatchDeleteAlertNoticeConfigResponse';
import { BatchDeleteCompositeHostsRequest } from './model/BatchDeleteCompositeHostsRequest';
import { BatchDeleteCompositeHostsRequestBody } from './model/BatchDeleteCompositeHostsRequestBody';
import { BatchDeleteCompositeHostsResponse } from './model/BatchDeleteCompositeHostsResponse';
import { BatchDeletePoliciesRequest } from './model/BatchDeletePoliciesRequest';
import { BatchDeletePoliciesRequestBody } from './model/BatchDeletePoliciesRequestBody';
import { BatchDeletePoliciesResponse } from './model/BatchDeletePoliciesResponse';
import { BatchDeleteRulesRequest } from './model/BatchDeleteRulesRequest';
import { BatchDeleteRulesResponse } from './model/BatchDeleteRulesResponse';
import { BatchUpdateAntiTamperRulesRequestBody } from './model/BatchUpdateAntiTamperRulesRequestBody';
import { BatchUpdateAntileakageRuleRequestBody } from './model/BatchUpdateAntileakageRuleRequestBody';
import { BatchUpdateAntileakageRulesRequest } from './model/BatchUpdateAntileakageRulesRequest';
import { BatchUpdateAntileakageRulesResponse } from './model/BatchUpdateAntileakageRulesResponse';
import { BatchUpdateAntitamperRulesRequest } from './model/BatchUpdateAntitamperRulesRequest';
import { BatchUpdateAntitamperRulesResponse } from './model/BatchUpdateAntitamperRulesResponse';
import { BatchUpdateBotMRuleActionRequest } from './model/BatchUpdateBotMRuleActionRequest';
import { BatchUpdateBotMRuleActionRequestBody } from './model/BatchUpdateBotMRuleActionRequestBody';
import { BatchUpdateBotMRuleActionResponse } from './model/BatchUpdateBotMRuleActionResponse';
import { BatchUpdateBotMRuleStatusRequest } from './model/BatchUpdateBotMRuleStatusRequest';
import { BatchUpdateBotMRuleStatusRequestBody } from './model/BatchUpdateBotMRuleStatusRequestBody';
import { BatchUpdateBotMRuleStatusResponse } from './model/BatchUpdateBotMRuleStatusResponse';
import { BatchUpdateCcRulesRequest } from './model/BatchUpdateCcRulesRequest';
import { BatchUpdateCcRulesRequestBody } from './model/BatchUpdateCcRulesRequestBody';
import { BatchUpdateCcRulesResponse } from './model/BatchUpdateCcRulesResponse';
import { BatchUpdateCustomRuleResponseBody } from './model/BatchUpdateCustomRuleResponseBody';
import { BatchUpdateCustomRulesRequest } from './model/BatchUpdateCustomRulesRequest';
import { BatchUpdateCustomRulesResponse } from './model/BatchUpdateCustomRulesResponse';
import { BatchUpdateGeoipRulesRequest } from './model/BatchUpdateGeoipRulesRequest';
import { BatchUpdateGeoipRulesRequestBody } from './model/BatchUpdateGeoipRulesRequestBody';
import { BatchUpdateGeoipRulesResponse } from './model/BatchUpdateGeoipRulesResponse';
import { BatchUpdateIgnoreRuleRequestBody } from './model/BatchUpdateIgnoreRuleRequestBody';
import { BatchUpdateIgnoreRulesRequest } from './model/BatchUpdateIgnoreRulesRequest';
import { BatchUpdateIgnoreRulesResponse } from './model/BatchUpdateIgnoreRulesResponse';
import { BatchUpdateIpReputationRuleRequestBody } from './model/BatchUpdateIpReputationRuleRequestBody';
import { BatchUpdateIpReputationRulesRequest } from './model/BatchUpdateIpReputationRulesRequest';
import { BatchUpdateIpReputationRulesResponse } from './model/BatchUpdateIpReputationRulesResponse';
import { BatchUpdatePrivacyRuleRequestBody } from './model/BatchUpdatePrivacyRuleRequestBody';
import { BatchUpdatePrivacyRulesRequest } from './model/BatchUpdatePrivacyRulesRequest';
import { BatchUpdatePrivacyRulesResponse } from './model/BatchUpdatePrivacyRulesResponse';
import { BatchUpdateProtectStatusRequest } from './model/BatchUpdateProtectStatusRequest';
import { BatchUpdateProtectStatusResponse } from './model/BatchUpdateProtectStatusResponse';
import { BatchUpdateWhiteBlackIpRuleRequestBody } from './model/BatchUpdateWhiteBlackIpRuleRequestBody';
import { BatchUpdateWhiteblackipRulesRequest } from './model/BatchUpdateWhiteblackipRulesRequest';
import { BatchUpdateWhiteblackipRulesResponse } from './model/BatchUpdateWhiteblackipRulesResponse';
import { BindHost } from './model/BindHost';
import { BlockPage } from './model/BlockPage';
import { BotMBehaviorDetectionRule } from './model/BotMBehaviorDetectionRule';
import { BotMDefenseLevel } from './model/BotMDefenseLevel';
import { BotMDefenseStrategy } from './model/BotMDefenseStrategy';
import { BotMRule } from './model/BotMRule';
import { BotRequestDistributionsNormalBucket } from './model/BotRequestDistributionsNormalBucket';
import { BotRequestTimeline } from './model/BotRequestTimeline';
import { BotTypeDistributions } from './model/BotTypeDistributions';
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
import { CheckAgencyRequest } from './model/CheckAgencyRequest';
import { CheckAgencyResponse } from './model/CheckAgencyResponse';
import { CircuitBreaker } from './model/CircuitBreaker';
import { CloudWafHostItem } from './model/CloudWafHostItem';
import { CloudWafServer } from './model/CloudWafServer';
import { CompositeHostResponse } from './model/CompositeHostResponse';
import { Condition } from './model/Condition';
import { ConfirmApplicationTypesRequest } from './model/ConfirmApplicationTypesRequest';
import { ConfirmApplicationTypesResponse } from './model/ConfirmApplicationTypesResponse';
import { ConfirmAsyncJobRequest } from './model/ConfirmAsyncJobRequest';
import { ConfirmAsyncJobResponse } from './model/ConfirmAsyncJobResponse';
import { ConfirmDnsDomainRequest } from './model/ConfirmDnsDomainRequest';
import { ConfirmDnsDomainResponse } from './model/ConfirmDnsDomainResponse';
import { ConfirmIpReputationRuleRequest } from './model/ConfirmIpReputationRuleRequest';
import { ConfirmIpReputationRuleResponse } from './model/ConfirmIpReputationRuleResponse';
import { ConfirmPolicyAntileakageMapRequest } from './model/ConfirmPolicyAntileakageMapRequest';
import { ConfirmPolicyAntileakageMapResponse } from './model/ConfirmPolicyAntileakageMapResponse';
import { ConfirmPolicyIpReputationMapRequest } from './model/ConfirmPolicyIpReputationMapRequest';
import { ConfirmPolicyIpReputationMapResponse } from './model/ConfirmPolicyIpReputationMapResponse';
import { ConfirmProtectionTypesRequest } from './model/ConfirmProtectionTypesRequest';
import { ConfirmProtectionTypesResponse } from './model/ConfirmProtectionTypesResponse';
import { ConfirmThreatMapRequest } from './model/ConfirmThreatMapRequest';
import { ConfirmThreatMapResponse } from './model/ConfirmThreatMapResponse';
import { ConfirmTmsResourceInstancesRequest } from './model/ConfirmTmsResourceInstancesRequest';
import { ConfirmTmsResourceInstancesResponse } from './model/ConfirmTmsResourceInstancesResponse';
import { ConfirmUserBundleRequest } from './model/ConfirmUserBundleRequest';
import { ConfirmUserBundleResponse } from './model/ConfirmUserBundleResponse';
import { CopyPolicyByIdRequest } from './model/CopyPolicyByIdRequest';
import { CopyPolicyByIdResponse } from './model/CopyPolicyByIdResponse';
import { CountItem } from './model/CountItem';
import { CreateAgencyRequest } from './model/CreateAgencyRequest';
import { CreateAgencyResponse } from './model/CreateAgencyResponse';
import { CreateAlertNoticeConfigRequest } from './model/CreateAlertNoticeConfigRequest';
import { CreateAlertNoticeConfigResponse } from './model/CreateAlertNoticeConfigResponse';
import { CreateAntiTamperRuleRequest } from './model/CreateAntiTamperRuleRequest';
import { CreateAntiTamperRuleResponse } from './model/CreateAntiTamperRuleResponse';
import { CreateAntiTamperRulesRequestBody } from './model/CreateAntiTamperRulesRequestBody';
import { CreateAnticrawlerRuleRequest } from './model/CreateAnticrawlerRuleRequest';
import { CreateAnticrawlerRuleRequestbody } from './model/CreateAnticrawlerRuleRequestbody';
import { CreateAnticrawlerRuleResponse } from './model/CreateAnticrawlerRuleResponse';
import { CreateAntileakageRuleRequest } from './model/CreateAntileakageRuleRequest';
import { CreateAntileakageRuleRequestBody } from './model/CreateAntileakageRuleRequestBody';
import { CreateAntileakageRuleResponse } from './model/CreateAntileakageRuleResponse';
import { CreateBotMTrafficDetectionConditionRequest } from './model/CreateBotMTrafficDetectionConditionRequest';
import { CreateBotMTrafficDetectionConditionResponse } from './model/CreateBotMTrafficDetectionConditionResponse';
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
import { CreateEventExportJobRequest } from './model/CreateEventExportJobRequest';
import { CreateEventExportJobResponse } from './model/CreateEventExportJobResponse';
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
import { CreateIpReputationRuleRequest } from './model/CreateIpReputationRuleRequest';
import { CreateIpReputationRuleRequestBody } from './model/CreateIpReputationRuleRequestBody';
import { CreateIpReputationRuleRequestBodyAction } from './model/CreateIpReputationRuleRequestBodyAction';
import { CreateIpReputationRuleResponse } from './model/CreateIpReputationRuleResponse';
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
import { CreateQuickAccessDomainRequest } from './model/CreateQuickAccessDomainRequest';
import { CreateQuickAccessDomainResponse } from './model/CreateQuickAccessDomainResponse';
import { CreateSecurityReportSubscriptionRequest } from './model/CreateSecurityReportSubscriptionRequest';
import { CreateSecurityReportSubscriptionRequestBody } from './model/CreateSecurityReportSubscriptionRequestBody';
import { CreateSecurityReportSubscriptionRequestBodyReportContentSubscription } from './model/CreateSecurityReportSubscriptionRequestBodyReportContentSubscription';
import { CreateSecurityReportSubscriptionRequestBodyStatPeriod } from './model/CreateSecurityReportSubscriptionRequestBodyStatPeriod';
import { CreateSecurityReportSubscriptionResponse } from './model/CreateSecurityReportSubscriptionResponse';
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
import { DeleteAgencyRequest } from './model/DeleteAgencyRequest';
import { DeleteAgencyResponse } from './model/DeleteAgencyResponse';
import { DeleteAlertNoticeConfigRequest } from './model/DeleteAlertNoticeConfigRequest';
import { DeleteAlertNoticeConfigResponse } from './model/DeleteAlertNoticeConfigResponse';
import { DeleteAnticrawlerRuleRequest } from './model/DeleteAnticrawlerRuleRequest';
import { DeleteAnticrawlerRuleResponse } from './model/DeleteAnticrawlerRuleResponse';
import { DeleteAntileakageRuleRequest } from './model/DeleteAntileakageRuleRequest';
import { DeleteAntileakageRuleResponse } from './model/DeleteAntileakageRuleResponse';
import { DeleteAntitamperRuleRequest } from './model/DeleteAntitamperRuleRequest';
import { DeleteAntitamperRuleResponse } from './model/DeleteAntitamperRuleResponse';
import { DeleteBotMTrafficDetectionConditionRequest } from './model/DeleteBotMTrafficDetectionConditionRequest';
import { DeleteBotMTrafficDetectionConditionResponse } from './model/DeleteBotMTrafficDetectionConditionResponse';
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
import { DeleteIpReputationRuleRequest } from './model/DeleteIpReputationRuleRequest';
import { DeleteIpReputationRuleResponse } from './model/DeleteIpReputationRuleResponse';
import { DeleteIpReputationRuleResponseBodyAction } from './model/DeleteIpReputationRuleResponseBodyAction';
import { DeletePolicyRequest } from './model/DeletePolicyRequest';
import { DeletePolicyResponse } from './model/DeletePolicyResponse';
import { DeletePremiumHostRequest } from './model/DeletePremiumHostRequest';
import { DeletePremiumHostResponse } from './model/DeletePremiumHostResponse';
import { DeletePrivacyRuleRequest } from './model/DeletePrivacyRuleRequest';
import { DeletePrivacyRuleResponse } from './model/DeletePrivacyRuleResponse';
import { DeletePunishmentRuleRequest } from './model/DeletePunishmentRuleRequest';
import { DeletePunishmentRuleResponse } from './model/DeletePunishmentRuleResponse';
import { DeleteSecurityReportSubscriptionRequest } from './model/DeleteSecurityReportSubscriptionRequest';
import { DeleteSecurityReportSubscriptionResponse } from './model/DeleteSecurityReportSubscriptionResponse';
import { DeleteValueListRequest } from './model/DeleteValueListRequest';
import { DeleteValueListResponse } from './model/DeleteValueListResponse';
import { DeleteWhiteBlackIpRuleRequest } from './model/DeleteWhiteBlackIpRuleRequest';
import { DeleteWhiteBlackIpRuleResponse } from './model/DeleteWhiteBlackIpRuleResponse';
import { DnsDomain } from './model/DnsDomain';
import { DomainClassificationItem } from './model/DomainClassificationItem';
import { DomainItem } from './model/DomainItem';
import { EipInfo } from './model/EipInfo';
import { EventDump } from './model/EventDump';
import { ExpackProductInfo } from './model/ExpackProductInfo';
import { Flag } from './model/Flag';
import { GeOIpItem } from './model/GeOIpItem';
import { GeoClassificationItem } from './model/GeoClassificationItem';
import { GeoItem } from './model/GeoItem';
import { HostFlag } from './model/HostFlag';
import { IdHostnameEntry } from './model/IdHostnameEntry';
import { IgnoreAdvanced } from './model/IgnoreAdvanced';
import { IgnoreRuleBody } from './model/IgnoreRuleBody';
import { InstanceIdsStatus } from './model/InstanceIdsStatus';
import { InstanceInfo } from './model/InstanceInfo';
import { InstanceTag } from './model/InstanceTag';
import { IpClassificationItem } from './model/IpClassificationItem';
import { IpGroup } from './model/IpGroup';
import { IpGroupBody } from './model/IpGroupBody';
import { IpItem } from './model/IpItem';
import { IpReputationMapResponseBodyIpReputationMap } from './model/IpReputationMapResponseBodyIpReputationMap';
import { IpReputationMapResponseBodyLocale } from './model/IpReputationMapResponseBodyLocale';
import { IpReputationRulesListInfo } from './model/IpReputationRulesListInfo';
import { IpReputationRulesListInfoAction } from './model/IpReputationRulesListInfoAction';
import { IpsItem } from './model/IpsItem';
import { LeakageListInfo } from './model/LeakageListInfo';
import { ListAntiTamperPolicyRulesRequest } from './model/ListAntiTamperPolicyRulesRequest';
import { ListAntiTamperPolicyRulesResponse } from './model/ListAntiTamperPolicyRulesResponse';
import { ListAnticrawlerRulesRequest } from './model/ListAnticrawlerRulesRequest';
import { ListAnticrawlerRulesResponse } from './model/ListAnticrawlerRulesResponse';
import { ListAntileakagePolicyRulesRequest } from './model/ListAntileakagePolicyRulesRequest';
import { ListAntileakagePolicyRulesResponse } from './model/ListAntileakagePolicyRulesResponse';
import { ListAntileakageRulesRequest } from './model/ListAntileakageRulesRequest';
import { ListAntileakageRulesResponse } from './model/ListAntileakageRulesResponse';
import { ListAntitamperRuleRequest } from './model/ListAntitamperRuleRequest';
import { ListAntitamperRuleResponse } from './model/ListAntitamperRuleResponse';
import { ListAttackActionTypesRequest } from './model/ListAttackActionTypesRequest';
import { ListAttackActionTypesResponse } from './model/ListAttackActionTypesResponse';
import { ListBandwidthTimelineRequest } from './model/ListBandwidthTimelineRequest';
import { ListBandwidthTimelineResponse } from './model/ListBandwidthTimelineResponse';
import { ListBotMRequestDistributionRequest } from './model/ListBotMRequestDistributionRequest';
import { ListBotMRequestDistributionResponse } from './model/ListBotMRequestDistributionResponse';
import { ListBotMRulesRequest } from './model/ListBotMRulesRequest';
import { ListBotMRulesResponse } from './model/ListBotMRulesResponse';
import { ListBotMScoreDistributionRequest } from './model/ListBotMScoreDistributionRequest';
import { ListBotMScoreDistributionResponse } from './model/ListBotMScoreDistributionResponse';
import { ListBotMTimelineRequest } from './model/ListBotMTimelineRequest';
import { ListBotMTimelineResponse } from './model/ListBotMTimelineResponse';
import { ListBotMTopnRequestRequest } from './model/ListBotMTopnRequestRequest';
import { ListBotMTopnRequestResponse } from './model/ListBotMTopnRequestResponse';
import { ListCcPolicyRulesRequest } from './model/ListCcPolicyRulesRequest';
import { ListCcPolicyRulesResponse } from './model/ListCcPolicyRulesResponse';
import { ListCcRulesRequest } from './model/ListCcRulesRequest';
import { ListCcRulesResponse } from './model/ListCcRulesResponse';
import { ListCertificatesRequest } from './model/ListCertificatesRequest';
import { ListCertificatesResponse } from './model/ListCertificatesResponse';
import { ListCompositeHostsRequest } from './model/ListCompositeHostsRequest';
import { ListCompositeHostsResponse } from './model/ListCompositeHostsResponse';
import { ListCustomPolicyRulesRequest } from './model/ListCustomPolicyRulesRequest';
import { ListCustomPolicyRulesResponse } from './model/ListCustomPolicyRulesResponse';
import { ListCustomRulesRequest } from './model/ListCustomRulesRequest';
import { ListCustomRulesResponse } from './model/ListCustomRulesResponse';
import { ListEventItems } from './model/ListEventItems';
import { ListEventLogRequest } from './model/ListEventLogRequest';
import { ListEventLogResponse } from './model/ListEventLogResponse';
import { ListEventRequest } from './model/ListEventRequest';
import { ListEventResponse } from './model/ListEventResponse';
import { ListGeoIpPolicyRulesRequest } from './model/ListGeoIpPolicyRulesRequest';
import { ListGeoIpPolicyRulesResponse } from './model/ListGeoIpPolicyRulesResponse';
import { ListGeoipRuleRequest } from './model/ListGeoipRuleRequest';
import { ListGeoipRuleResponse } from './model/ListGeoipRuleResponse';
import { ListHostRequest } from './model/ListHostRequest';
import { ListHostResponse } from './model/ListHostResponse';
import { ListHostRouteRequest } from './model/ListHostRouteRequest';
import { ListHostRouteResponse } from './model/ListHostRouteResponse';
import { ListIgnorePolicyRulesRequest } from './model/ListIgnorePolicyRulesRequest';
import { ListIgnorePolicyRulesResponse } from './model/ListIgnorePolicyRulesResponse';
import { ListIgnoreRuleRequest } from './model/ListIgnoreRuleRequest';
import { ListIgnoreRuleResponse } from './model/ListIgnoreRuleResponse';
import { ListInstance } from './model/ListInstance';
import { ListInstanceRequest } from './model/ListInstanceRequest';
import { ListInstanceResponse } from './model/ListInstanceResponse';
import { ListInstanceTagsRequest } from './model/ListInstanceTagsRequest';
import { ListInstanceTagsResponse } from './model/ListInstanceTagsResponse';
import { ListIpGroupRequest } from './model/ListIpGroupRequest';
import { ListIpGroupResponse } from './model/ListIpGroupResponse';
import { ListIpReputationPolicyRulesRequest } from './model/ListIpReputationPolicyRulesRequest';
import { ListIpReputationPolicyRulesResponse } from './model/ListIpReputationPolicyRulesResponse';
import { ListIpReputationRulesRequest } from './model/ListIpReputationRulesRequest';
import { ListIpReputationRulesResponse } from './model/ListIpReputationRulesResponse';
import { ListLlmGuardPolicyRulesRequest } from './model/ListLlmGuardPolicyRulesRequest';
import { ListLlmGuardPolicyRulesResponse } from './model/ListLlmGuardPolicyRulesResponse';
import { ListNoticeConfigsRequest } from './model/ListNoticeConfigsRequest';
import { ListNoticeConfigsResponse } from './model/ListNoticeConfigsResponse';
import { ListOverviewsClassificationRequest } from './model/ListOverviewsClassificationRequest';
import { ListOverviewsClassificationResponse } from './model/ListOverviewsClassificationResponse';
import { ListPolicyRequest } from './model/ListPolicyRequest';
import { ListPolicyResponse } from './model/ListPolicyResponse';
import { ListPremiumHostRequest } from './model/ListPremiumHostRequest';
import { ListPremiumHostResponse } from './model/ListPremiumHostResponse';
import { ListPrivacyPolicyRulesRequest } from './model/ListPrivacyPolicyRulesRequest';
import { ListPrivacyPolicyRulesResponse } from './model/ListPrivacyPolicyRulesResponse';
import { ListPrivacyRuleRequest } from './model/ListPrivacyRuleRequest';
import { ListPrivacyRuleResponse } from './model/ListPrivacyRuleResponse';
import { ListProtectableResourcesRequest } from './model/ListProtectableResourcesRequest';
import { ListProtectableResourcesResponse } from './model/ListProtectableResourcesResponse';
import { ListPunishmentRulesRequest } from './model/ListPunishmentRulesRequest';
import { ListPunishmentRulesResponse } from './model/ListPunishmentRulesResponse';
import { ListQpsTimelineRequest } from './model/ListQpsTimelineRequest';
import { ListQpsTimelineResponse } from './model/ListQpsTimelineResponse';
import { ListRequestTimelineRequest } from './model/ListRequestTimelineRequest';
import { ListRequestTimelineResponse } from './model/ListRequestTimelineResponse';
import { ListResponseCodeTimelineRequest } from './model/ListResponseCodeTimelineRequest';
import { ListResponseCodeTimelineResponse } from './model/ListResponseCodeTimelineResponse';
import { ListSecurityReportHistoryPeriodResponseItems } from './model/ListSecurityReportHistoryPeriodResponseItems';
import { ListSecurityReportHistoryPeriodResponseStatPeriod } from './model/ListSecurityReportHistoryPeriodResponseStatPeriod';
import { ListSecurityReportHistoryPeriodsRequest } from './model/ListSecurityReportHistoryPeriodsRequest';
import { ListSecurityReportHistoryPeriodsResponse } from './model/ListSecurityReportHistoryPeriodsResponse';
import { ListSecurityReportSendingRecordResponseItems } from './model/ListSecurityReportSendingRecordResponseItems';
import { ListSecurityReportSendingRecordResponseStatPeriod } from './model/ListSecurityReportSendingRecordResponseStatPeriod';
import { ListSecurityReportSendingRecordsRequest } from './model/ListSecurityReportSendingRecordsRequest';
import { ListSecurityReportSendingRecordsResponse } from './model/ListSecurityReportSendingRecordsResponse';
import { ListSecurityReportSubscriptionsRequest } from './model/ListSecurityReportSubscriptionsRequest';
import { ListSecurityReportSubscriptionsResponse } from './model/ListSecurityReportSubscriptionsResponse';
import { ListStatisticsRequest } from './model/ListStatisticsRequest';
import { ListStatisticsResponse } from './model/ListStatisticsResponse';
import { ListTopAbnormalRequest } from './model/ListTopAbnormalRequest';
import { ListTopAbnormalResponse } from './model/ListTopAbnormalResponse';
import { ListTopDomainsRequest } from './model/ListTopDomainsRequest';
import { ListTopDomainsResponse } from './model/ListTopDomainsResponse';
import { ListTopIpRequest } from './model/ListTopIpRequest';
import { ListTopIpResponse } from './model/ListTopIpResponse';
import { ListTopUrlRequest } from './model/ListTopUrlRequest';
import { ListTopUrlResponse } from './model/ListTopUrlResponse';
import { ListValueListRequest } from './model/ListValueListRequest';
import { ListValueListResponse } from './model/ListValueListResponse';
import { ListWebBasicProtectionRulesRequest } from './model/ListWebBasicProtectionRulesRequest';
import { ListWebBasicProtectionRulesResponse } from './model/ListWebBasicProtectionRulesResponse';
import { ListWhiteblackipPolicyRulesRequest } from './model/ListWhiteblackipPolicyRulesRequest';
import { ListWhiteblackipPolicyRulesResponse } from './model/ListWhiteblackipPolicyRulesResponse';
import { ListWhiteblackipRuleRequest } from './model/ListWhiteblackipRuleRequest';
import { ListWhiteblackipRuleResponse } from './model/ListWhiteblackipRuleResponse';
import { Listener } from './model/Listener';
import { LlmRuleInfo } from './model/LlmRuleInfo';
import { LlmRuleInfoPromptDetectOpts } from './model/LlmRuleInfoPromptDetectOpts';
import { LlmRuleInfoPromptDetectOptsAction } from './model/LlmRuleInfoPromptDetectOptsAction';
import { LlmRuleInfoPromptDetectOptsActionResponse } from './model/LlmRuleInfoPromptDetectOptsActionResponse';
import { LlmRuleInfoRespDetectOpts } from './model/LlmRuleInfoRespDetectOpts';
import { LlmRuleInfoRespDetectOptsAction } from './model/LlmRuleInfoRespDetectOptsAction';
import { LtsIdInfo } from './model/LtsIdInfo';
import { MigrateCompositeHostsRequest } from './model/MigrateCompositeHostsRequest';
import { MigrateCompositeHostsRequestBody } from './model/MigrateCompositeHostsRequestBody';
import { MigrateCompositeHostsResponse } from './model/MigrateCompositeHostsResponse';
import { PolicyAction } from './model/PolicyAction';
import { PolicyOption } from './model/PolicyOption';
import { PolicyResponse } from './model/PolicyResponse';
import { PolicyRuleIdRequestBody } from './model/PolicyRuleIdRequestBody';
import { PolicyRuleIdRequestBodyPolicyRuleIds } from './model/PolicyRuleIdRequestBodyPolicyRuleIds';
import { PolicyRuleIdResponseBodyPolicyRuleIds } from './model/PolicyRuleIdResponseBodyPolicyRuleIds';
import { Premium } from './model/Premium';
import { PremiumWafAgencyRequest } from './model/PremiumWafAgencyRequest';
import { PremiumWafInstances } from './model/PremiumWafInstances';
import { PremiumWafServer } from './model/PremiumWafServer';
import { PrivacyResponseBody } from './model/PrivacyResponseBody';
import { ProtectableResources } from './model/ProtectableResources';
import { PunishmentInfo } from './model/PunishmentInfo';
import { RenameInstanceRequest } from './model/RenameInstanceRequest';
import { RenameInstanceRequestBody } from './model/RenameInstanceRequestBody';
import { RenameInstanceResponse } from './model/RenameInstanceResponse';
import { ResourceResponse } from './model/ResourceResponse';
import { RouteBody } from './model/RouteBody';
import { RouteServerBody } from './model/RouteServerBody';
import { RuleInfo } from './model/RuleInfo';
import { SaveTrafficDetectionConditionRequestBody } from './model/SaveTrafficDetectionConditionRequestBody';
import { SecurityReportContentResponseReportContentInfo } from './model/SecurityReportContentResponseReportContentInfo';
import { SecurityReportContentResponseReportContentInfoAttackTypeDistributionInfoList } from './model/SecurityReportContentResponseReportContentInfoAttackTypeDistributionInfoList';
import { SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfo } from './model/SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfo';
import { SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfoAverageInfoList } from './model/SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfoAverageInfoList';
import { SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfoPeakInfoList } from './model/SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfoPeakInfoList';
import { SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfoTimeline } from './model/SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfoTimeline';
import { SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfoTimeline1 } from './model/SecurityReportContentResponseReportContentInfoBandwidthStatisticsInfoTimeline1';
import { SecurityReportContentResponseReportContentInfoOverviewStatisticsListInfo } from './model/SecurityReportContentResponseReportContentInfoOverviewStatisticsListInfo';
import { SecurityReportContentResponseReportContentInfoQpsStatisticsInfo } from './model/SecurityReportContentResponseReportContentInfoQpsStatisticsInfo';
import { SecurityReportContentResponseReportContentInfoQpsStatisticsInfoAverageInfoList } from './model/SecurityReportContentResponseReportContentInfoQpsStatisticsInfoAverageInfoList';
import { SecurityReportContentResponseReportContentInfoQpsStatisticsInfoPeakInfoList } from './model/SecurityReportContentResponseReportContentInfoQpsStatisticsInfoPeakInfoList';
import { SecurityReportContentResponseReportContentInfoQpsStatisticsInfoTimeline } from './model/SecurityReportContentResponseReportContentInfoQpsStatisticsInfoTimeline';
import { SecurityReportContentResponseReportContentInfoQpsStatisticsInfoTimeline1 } from './model/SecurityReportContentResponseReportContentInfoQpsStatisticsInfoTimeline1';
import { SecurityReportContentResponseReportContentInfoRequestStatisticsInfoList } from './model/SecurityReportContentResponseReportContentInfoRequestStatisticsInfoList';
import { SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfo } from './model/SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfo';
import { SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoResponseSourceUpstreamInfoList } from './model/SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoResponseSourceUpstreamInfoList';
import { SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoResponseSourceWafInfoList } from './model/SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoResponseSourceWafInfoList';
import { SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoTimeline } from './model/SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoTimeline';
import { SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoTimeline1 } from './model/SecurityReportContentResponseReportContentInfoResponseCodeStatisticsInfoTimeline1';
import { SecurityReportContentResponseReportContentInfoTimeline } from './model/SecurityReportContentResponseReportContentInfoTimeline';
import { SecurityReportContentResponseReportContentInfoTopAbnormalUrlsInfo } from './model/SecurityReportContentResponseReportContentInfoTopAbnormalUrlsInfo';
import { SecurityReportContentResponseReportContentInfoTopAbnormalUrlsInfoAbnormal404InfoList } from './model/SecurityReportContentResponseReportContentInfoTopAbnormalUrlsInfoAbnormal404InfoList';
import { SecurityReportContentResponseReportContentInfoTopAbnormalUrlsInfoAbnormal500InfoList } from './model/SecurityReportContentResponseReportContentInfoTopAbnormalUrlsInfoAbnormal500InfoList';
import { SecurityReportContentResponseReportContentInfoTopAbnormalUrlsInfoAbnormal502InfoList } from './model/SecurityReportContentResponseReportContentInfoTopAbnormalUrlsInfoAbnormal502InfoList';
import { SecurityReportContentResponseReportContentInfoTopAttackSourceIpsInfoList } from './model/SecurityReportContentResponseReportContentInfoTopAttackSourceIpsInfoList';
import { SecurityReportContentResponseReportContentInfoTopAttackSourceLocationsInfoList } from './model/SecurityReportContentResponseReportContentInfoTopAttackSourceLocationsInfoList';
import { SecurityReportContentResponseReportContentInfoTopAttackedDomainsInfoList } from './model/SecurityReportContentResponseReportContentInfoTopAttackedDomainsInfoList';
import { SecurityReportContentResponseReportContentInfoTopAttackedUrlsInfoList } from './model/SecurityReportContentResponseReportContentInfoTopAttackedUrlsInfoList';
import { SecurityReportContentResponseReportContentInfoTopDomains } from './model/SecurityReportContentResponseReportContentInfoTopDomains';
import { SecurityReportContentResponseStatPeriod } from './model/SecurityReportContentResponseStatPeriod';
import { SecurityReportSubscriptionResponseReportContentSubscription } from './model/SecurityReportSubscriptionResponseReportContentSubscription';
import { SecurityReportSubscriptionResponseStatPeriod } from './model/SecurityReportSubscriptionResponseStatPeriod';
import { SecurityReportSubscriptionSummaryResponse } from './model/SecurityReportSubscriptionSummaryResponse';
import { Server } from './model/Server';
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
import { ShowSecurityReportContentRequest } from './model/ShowSecurityReportContentRequest';
import { ShowSecurityReportContentResponse } from './model/ShowSecurityReportContentResponse';
import { ShowSecurityReportSubscriptionRequest } from './model/ShowSecurityReportSubscriptionRequest';
import { ShowSecurityReportSubscriptionResponse } from './model/ShowSecurityReportSubscriptionResponse';
import { ShowSourceIpRequest } from './model/ShowSourceIpRequest';
import { ShowSourceIpResponse } from './model/ShowSourceIpResponse';
import { ShowSubscriptionInfoRequest } from './model/ShowSubscriptionInfoRequest';
import { ShowSubscriptionInfoResponse } from './model/ShowSubscriptionInfoResponse';
import { ShowValueListRequest } from './model/ShowValueListRequest';
import { ShowValueListResponse } from './model/ShowValueListResponse';
import { ShowWebProtectionRuleRequest } from './model/ShowWebProtectionRuleRequest';
import { ShowWebProtectionRuleResponse } from './model/ShowWebProtectionRuleResponse';
import { ShowWhiteBlackIpRuleRequest } from './model/ShowWhiteBlackIpRuleRequest';
import { ShowWhiteBlackIpRuleResponse } from './model/ShowWhiteBlackIpRuleResponse';
import { SimplePremiumWafHost } from './model/SimplePremiumWafHost';
import { StatisticsTimelineItem } from './model/StatisticsTimelineItem';
import { ThreatMapResponseBodyLocale } from './model/ThreatMapResponseBodyLocale';
import { TimeLineItem } from './model/TimeLineItem';
import { TimeoutConfig } from './model/TimeoutConfig';
import { TmsResourceInstance } from './model/TmsResourceInstance';
import { TmsResourceInstancesRequest } from './model/TmsResourceInstancesRequest';
import { TmsResourceInstancesTag } from './model/TmsResourceInstancesTag';
import { TmsResourceTag } from './model/TmsResourceTag';
import { TopDomainsCountItem } from './model/TopDomainsCountItem';
import { TrafficDetectionConditionDTO } from './model/TrafficDetectionConditionDTO';
import { TrafficMark } from './model/TrafficMark';
import { TypedStatBucket } from './model/TypedStatBucket';
import { UpdateAccessProgressRequest } from './model/UpdateAccessProgressRequest';
import { UpdateAccessProgressResponse } from './model/UpdateAccessProgressResponse';
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
import { UpdateBotMCategoryStatusRequest } from './model/UpdateBotMCategoryStatusRequest';
import { UpdateBotMCategoryStatusResponse } from './model/UpdateBotMCategoryStatusResponse';
import { UpdateBotMRuleDefenseStrategyRequest } from './model/UpdateBotMRuleDefenseStrategyRequest';
import { UpdateBotMRuleDefenseStrategyRequestBody } from './model/UpdateBotMRuleDefenseStrategyRequestBody';
import { UpdateBotMRuleDefenseStrategyResponse } from './model/UpdateBotMRuleDefenseStrategyResponse';
import { UpdateBotMRuleStatusRequestBody } from './model/UpdateBotMRuleStatusRequestBody';
import { UpdateBotMTrafficDetectionConditionRequest } from './model/UpdateBotMTrafficDetectionConditionRequest';
import { UpdateBotMTrafficDetectionConditionResponse } from './model/UpdateBotMTrafficDetectionConditionResponse';
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
import { UpdateHostAccessStatusOfUnderlineRequest } from './model/UpdateHostAccessStatusOfUnderlineRequest';
import { UpdateHostAccessStatusOfUnderlineResponse } from './model/UpdateHostAccessStatusOfUnderlineResponse';
import { UpdateHostProtectStatusRequest } from './model/UpdateHostProtectStatusRequest';
import { UpdateHostProtectStatusRequestBody } from './model/UpdateHostProtectStatusRequestBody';
import { UpdateHostProtectStatusResponse } from './model/UpdateHostProtectStatusResponse';
import { UpdateHostRequest } from './model/UpdateHostRequest';
import { UpdateHostRequestBody } from './model/UpdateHostRequestBody';
import { UpdateHostResponse } from './model/UpdateHostResponse';
import { UpdateIgnoreRuleRequest } from './model/UpdateIgnoreRuleRequest';
import { UpdateIgnoreRuleRequestBody } from './model/UpdateIgnoreRuleRequestBody';
import { UpdateIgnoreRuleResponse } from './model/UpdateIgnoreRuleResponse';
import { UpdateInstanceRouteRequest } from './model/UpdateInstanceRouteRequest';
import { UpdateInstanceRouteResponse } from './model/UpdateInstanceRouteResponse';
import { UpdateIpGroupRequest } from './model/UpdateIpGroupRequest';
import { UpdateIpGroupRequestBody } from './model/UpdateIpGroupRequestBody';
import { UpdateIpGroupResponse } from './model/UpdateIpGroupResponse';
import { UpdateIpReputationRuleRequest } from './model/UpdateIpReputationRuleRequest';
import { UpdateIpReputationRuleRequestBody } from './model/UpdateIpReputationRuleRequestBody';
import { UpdateIpReputationRuleRequestBodyAction } from './model/UpdateIpReputationRuleRequestBodyAction';
import { UpdateIpReputationRuleResponse } from './model/UpdateIpReputationRuleResponse';
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
import { UpdatePremiumHostAccessStatusRequest } from './model/UpdatePremiumHostAccessStatusRequest';
import { UpdatePremiumHostAccessStatusRequestBody } from './model/UpdatePremiumHostAccessStatusRequestBody';
import { UpdatePremiumHostAccessStatusResponse } from './model/UpdatePremiumHostAccessStatusResponse';
import { UpdatePremiumHostProtectStatusRequest } from './model/UpdatePremiumHostProtectStatusRequest';
import { UpdatePremiumHostProtectStatusRequestBody } from './model/UpdatePremiumHostProtectStatusRequestBody';
import { UpdatePremiumHostProtectStatusResponse } from './model/UpdatePremiumHostProtectStatusResponse';
import { UpdatePremiumHostRequest } from './model/UpdatePremiumHostRequest';
import { UpdatePremiumHostRequestBody } from './model/UpdatePremiumHostRequestBody';
import { UpdatePremiumHostResponse } from './model/UpdatePremiumHostResponse';
import { UpdatePremiumInstanceProgressRequest } from './model/UpdatePremiumInstanceProgressRequest';
import { UpdatePremiumInstanceProgressResponse } from './model/UpdatePremiumInstanceProgressResponse';
import { UpdatePremiumInstanceRequest } from './model/UpdatePremiumInstanceRequest';
import { UpdatePremiumInstanceRequestBody } from './model/UpdatePremiumInstanceRequestBody';
import { UpdatePremiumInstanceResponse } from './model/UpdatePremiumInstanceResponse';
import { UpdatePrivacyRuleRequest } from './model/UpdatePrivacyRuleRequest';
import { UpdatePrivacyRuleRequestBody } from './model/UpdatePrivacyRuleRequestBody';
import { UpdatePrivacyRuleResponse } from './model/UpdatePrivacyRuleResponse';
import { UpdatePunishmentRuleRequest } from './model/UpdatePunishmentRuleRequest';
import { UpdatePunishmentRuleRequestBody } from './model/UpdatePunishmentRuleRequestBody';
import { UpdatePunishmentRuleResponse } from './model/UpdatePunishmentRuleResponse';
import { UpdateSecurityReportSubscriptionRequest } from './model/UpdateSecurityReportSubscriptionRequest';
import { UpdateSecurityReportSubscriptionRequestBody } from './model/UpdateSecurityReportSubscriptionRequestBody';
import { UpdateSecurityReportSubscriptionRequestBodyReportContentSubscription } from './model/UpdateSecurityReportSubscriptionRequestBodyReportContentSubscription';
import { UpdateSecurityReportSubscriptionRequestBodyStatPeriod } from './model/UpdateSecurityReportSubscriptionRequestBodyStatPeriod';
import { UpdateSecurityReportSubscriptionResponse } from './model/UpdateSecurityReportSubscriptionResponse';
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
     * 选中多个策略为这些策略批量添加网页防篡改规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 选中多个策略为这些策略批量添加网页防篡改规则
     * @param {string} projectid **参数解释：** 项目ID，对应控制台用户名-&gt;我的凭证-&gt;项目列表-&gt;项目ID。 **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
     * @param {BatchCreateAntiTamperRulesRequestBody} bacthCreateWhiteblackipRuleRequestBody 批量创建地理位置访问控制规则
     * @param {string} [policyids] **参数解释：** 域名id。 **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
     * @param {string} [enterpriseProjectId] **参数解释：** 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目ID。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。 **约束限制：** 不涉及 **取值范围：**  - 0：代表default企业项目  - all_granted_eps：代表所有企业项目  - 其它企业项目ID：长度为36个字符  **默认取值：** 0
     * @param {string} [contentType] **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateAntiTamperRule(batchCreateAntiTamperRuleRequest?: BatchCreateAntiTamperRuleRequest): Promise<BatchCreateAntiTamperRuleResponse> {
        const options = ParamCreater().batchCreateAntiTamperRule(batchCreateAntiTamperRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 选中多个策略为这些策略批量添加防敏感信息泄漏规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 选中多个策略为这些策略批量添加防敏感信息泄漏规则
     * @param {string} projectid **参数解释：** 项目ID，对应控制台用户名-&gt;我的凭证-&gt;项目列表-&gt;项目ID。 **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
     * @param {BatchCreateAntileakageRuleRequestBody} bacthCreateWhiteblackipRuleRequestBody 批量创建防敏感信息泄漏防护规则
     * @param {string} [policyids] **参数解释：** 域名id。 **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
     * @param {string} [enterpriseProjectId] **参数解释：** 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目ID。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。 **约束限制：** 不涉及 **取值范围：**  - 0：代表default企业项目  - all_granted_eps：代表所有企业项目  - 其它企业项目ID：长度为36个字符  **默认取值：** 0
     * @param {string} [contentType] **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateAntileakageRule(batchCreateAntileakageRuleRequest?: BatchCreateAntileakageRuleRequest): Promise<BatchCreateAntileakageRuleResponse> {
        const options = ParamCreater().batchCreateAntileakageRule(batchCreateAntileakageRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 选中多个策略为这些策略批量添加cc规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 选中多个策略为这些策略批量添加cc规则
     * @param {string} projectid **参数解释：** 项目ID，对应控制台用户名-&gt;我的凭证-&gt;项目列表-&gt;项目ID。 **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
     * @param {BatchCreateCcRuleRequestBody} bacthCreateCcRuleRequestBody 批量创建cc规则
     * @param {string} [policyids] **参数解释：** 域名id。 **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
     * @param {string} [enterpriseProjectId] **参数解释：** 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目ID。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。 **约束限制：** 不涉及 **取值范围：**  - 0：代表default企业项目  - all_granted_eps：代表所有企业项目  - 其它企业项目ID：长度为36个字符  **默认取值：** 0
     * @param {string} [contentType] **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateCcRule(batchCreateCcRuleRequest?: BatchCreateCcRuleRequest): Promise<BatchCreateCcRuleResponse> {
        const options = ParamCreater().batchCreateCcRule(batchCreateCcRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 选中多个策略为这些策略批量添加精准防护规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 选中多个策略为这些策略批量添加精准防护规则
     * @param {string} projectid **参数解释：** 项目ID，对应控制台用户名-&gt;我的凭证-&gt;项目列表-&gt;项目ID。 **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
     * @param {BatchCreateCustomRuleRequestBody} bacthCreateCustomRuleRequestBody 批量创建精准防护规则
     * @param {string} [policyids] **参数解释：** 域名id。 **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
     * @param {string} [enterpriseProjectId] **参数解释：** 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目ID。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。 **约束限制：** 不涉及 **取值范围：**  - 0：代表default企业项目  - all_granted_eps：代表所有企业项目  - 其它企业项目ID：长度为36个字符  **默认取值：** 0
     * @param {string} [contentType] **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateCustomRule(batchCreateCustomRuleRequest?: BatchCreateCustomRuleRequest): Promise<BatchCreateCustomRuleResponse> {
        const options = ParamCreater().batchCreateCustomRule(batchCreateCustomRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 选中多个策略为这些策略批量添加地理位置访问控制规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 选中多个策略为这些策略批量添加地理位置访问控制规则
     * @param {string} projectid **参数解释：** 项目ID，对应控制台用户名-&gt;我的凭证-&gt;项目列表-&gt;项目ID。 **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
     * @param {BatchCreateGeoIpRuleRequestBody} batchCreateGeoIpRuleRequestBody 批量创建地理位置访问控制规则
     * @param {string} [enterpriseProjectId] **参数解释：** 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目ID。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。 **约束限制：** 不涉及 **取值范围：**  - 0：代表default企业项目  - all_granted_eps：代表所有企业项目  - 其它企业项目ID：长度为36个字符 **默认取值：** 0
     * @param {string} [contentType] **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateGeoIpRule(batchCreateGeoIpRuleRequest?: BatchCreateGeoIpRuleRequest): Promise<BatchCreateGeoIpRuleResponse> {
        const options = ParamCreater().batchCreateGeoIpRule(batchCreateGeoIpRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 选中多个策略为这些策略批量添加全局白名单规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 选中多个策略为这些策略批量添加全局白名单规则
     * @param {string} projectid **参数解释：** 项目ID，对应控制台用户名-&gt;我的凭证-&gt;项目列表-&gt;项目ID。 **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
     * @param {BatchCreateIgnoreRuleRequestBody} batchCreateIgnoreRuleRequestBody 批量创建全局白名单防护规则
     * @param {string} [policyids] **参数解释：** 域名id。 **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
     * @param {string} [enterpriseProjectId] **参数解释：** 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目ID。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。 **约束限制：** 不涉及 **取值范围：**  - 0：代表default企业项目  - all_granted_eps：代表所有企业项目  - 其它企业项目ID：长度为36个字符  **默认取值：** 0
     * @param {string} [contentType] **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateIgnoreRule(batchCreateIgnoreRuleRequest?: BatchCreateIgnoreRuleRequest): Promise<BatchCreateIgnoreRuleResponse> {
        const options = ParamCreater().batchCreateIgnoreRule(batchCreateIgnoreRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 选中多个策略为这些策略批量添加威胁情报访问控制规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 选中多个策略为这些策略批量添加威胁情报访问控制规则
     * @param {string} projectid **参数解释：** 项目ID，对应控制台用户名-&gt;我的凭证-&gt;项目列表-&gt;项目ID。 **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
     * @param {BatchCreateIpReputationRuleRequestBody} batchCreateIpReputationRuleRequestBody 批量创建威胁情报访问控制规则
     * @param {string} [policyids] **参数解释：** 域名id。 **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
     * @param {string} [enterpriseProjectId] **参数解释：** 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目ID。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。 **约束限制：** 不涉及 **取值范围：**  - 0：代表default企业项目  - all_granted_eps：代表所有企业项目  - 其它企业项目ID：长度为36个字符  **默认取值：** 0
     * @param {string} [contentType] **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateIpReputationRule(batchCreateIpReputationRuleRequest?: BatchCreateIpReputationRuleRequest): Promise<BatchCreateIpReputationRuleResponse> {
        const options = ParamCreater().batchCreateIpReputationRule(batchCreateIpReputationRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 选中多个策略为这些策略批量添加隐私屏蔽防护规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 选中多个策略为这些策略批量添加隐私屏蔽防护防护规则
     * @param {string} projectid **参数解释：** 项目ID，对应控制台用户名-&gt;我的凭证-&gt;项目列表-&gt;项目ID。 **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
     * @param {BatchCreatePrivacyRuleRequestBody} bacthCreateWhiteblackipRuleRequestBody 批量创建隐私屏蔽防护规则
     * @param {string} [policyids] **参数解释：** 域名id。 **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
     * @param {string} [enterpriseProjectId] **参数解释：** 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目ID。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。 **约束限制：** 不涉及 **取值范围：**  - 0：代表default企业项目  - all_granted_eps：代表所有企业项目  - 其它企业项目ID：长度为36个字符  **默认取值：** 0
     * @param {string} [contentType] **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreatePrivacyRule(batchCreatePrivacyRuleRequest?: BatchCreatePrivacyRuleRequest): Promise<BatchCreatePrivacyRuleResponse> {
        const options = ParamCreater().batchCreatePrivacyRule(batchCreatePrivacyRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 选中多个策略为这些策略批量添加黑白名单防护规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 选中多个策略为这些策略批量添加黑白名单防护规则
     * @param {string} projectid **参数解释：** 项目ID，对应控制台用户名-&gt;我的凭证-&gt;项目列表-&gt;项目ID。 **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
     * @param {BacthCreateWhiteBlackIpRuleRequestBody} bacthCreateWhiteblackipRuleRequestBody 批量创建黑白名单防护规则
     * @param {string} [policyids] **参数解释：** 域名id。 **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
     * @param {string} [enterpriseProjectId] **参数解释：** 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目ID。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。 **约束限制：** 不涉及 **取值范围：**  - 0：代表default企业项目  - all_granted_eps：代表所有企业项目  - 其它企业项目ID：长度为36个字符  **默认取值：** 0
     * @param {string} [contentType] **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateWhiteblackipRule(batchCreateWhiteblackipRuleRequest?: BatchCreateWhiteblackipRuleRequest): Promise<BatchCreateWhiteblackipRuleResponse> {
        const options = ParamCreater().batchCreateWhiteblackipRule(batchCreateWhiteblackipRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除告警通知
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除告警通知
     * @param {string} enterpriseProjectId **参数解释：** 企业项目ID **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} xLanguage 语言，默认值为en-us。zh-cn（中文）/en-us（英文）
     * @param {AlertNoticeConfigList} alertNoticeConfigs **参数解释：** 待删除的告警通知配置列表 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} [contentType] **参数解释：** 内容类型，指定请求体的数据格式 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteAlertNoticeConfig(batchDeleteAlertNoticeConfigRequest?: BatchDeleteAlertNoticeConfigRequest): Promise<BatchDeleteAlertNoticeConfigResponse> {
        const options = ParamCreater().batchDeleteAlertNoticeConfig(batchDeleteAlertNoticeConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除租户域名
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除租户域名
     * @param {string} contentType 内容类型
     * @param {BatchDeleteCompositeHostsRequestBody} batchDeleteCompositeHostsRequestBody 批量删除域名body
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS)的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteCompositeHosts(batchDeleteCompositeHostsRequest?: BatchDeleteCompositeHostsRequest): Promise<BatchDeleteCompositeHostsResponse> {
        const options = ParamCreater().batchDeleteCompositeHosts(batchDeleteCompositeHostsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除防护策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除防护策略
     * @param {string} contentType 内容类型
     * @param {BatchDeletePoliciesRequestBody} batchDeletePoliciesRequestBody 批量删除防护策略body
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS)的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeletePolicies(batchDeletePoliciesRequest?: BatchDeletePoliciesRequest): Promise<BatchDeletePoliciesResponse> {
        const options = ParamCreater().batchDeletePolicies(batchDeletePoliciesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * **参数解释：**
     * 批量删除规则
     * **约束限制：**
     * 不涉及
     * **取值范围：**
     * 不涉及
     * **默认取值：**
     * 不涉及
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除规则
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {string} ruleType **参数解释：** 需要删除的规则类型,目前支持cc,custom,whiteblackip,geoip,ip-reputation,antitamper,antileakage,ignore,privacy **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {PolicyRuleIdRequestBody} [batchDeleteRulesRequestBody] **参数解释：** 批量删除防护规则body **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteRules(batchDeleteRulesRequest?: BatchDeleteRulesRequest): Promise<BatchDeleteRulesResponse> {
        const options = ParamCreater().batchDeleteRules(batchDeleteRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * **参数解释：**
     * 批量修改防敏感信息泄露规则
     * **约束限制：**
     * 不涉及
     * **取值范围：**
     * 不涉及
     * **默认取值：**
     * 不涉及
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量更新防敏感信息泄露规则
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {BatchUpdateAntileakageRuleRequestBody} [batchUpdateAntileakageRuleRequestBody] **参数解释：** 批量修改防敏感信息泄露规则body **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUpdateAntileakageRules(batchUpdateAntileakageRulesRequest?: BatchUpdateAntileakageRulesRequest): Promise<BatchUpdateAntileakageRulesResponse> {
        const options = ParamCreater().batchUpdateAntileakageRules(batchUpdateAntileakageRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * **参数解释：**
     * 批量修改地理位置访问控制规则
     * **约束限制：**
     * 不涉及
     * **取值范围：**
     * 不涉及
     * **默认取值：**
     * 不涉及
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量更新网页防篡改规则
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {BatchUpdateAntiTamperRulesRequestBody} [batchUpdateAntiTamperRulesRequestBody] **参数解释：** 批量修改网页防篡改规则body **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUpdateAntitamperRules(batchUpdateAntitamperRulesRequest?: BatchUpdateAntitamperRulesRequest): Promise<BatchUpdateAntitamperRulesResponse> {
        const options = ParamCreater().batchUpdateAntitamperRules(batchUpdateAntitamperRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * **参数解释：**
     * 批量更新BotM规则防护动作
     * **约束限制：**
     * 不涉及
     * **取值范围：**
     * 不涉及
     * **默认取值：**
     * 不涉及
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量更新BotM规则防护动作
     * @param {string} policyId **参数解释：** policyId **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json
     * @param {BatchUpdateBotMRuleActionRequestBody} batchUpdateBotMRuleActionRequestBody **参数解释：** 批量更新规则防护动作的请求体 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUpdateBotMRuleAction(batchUpdateBotMRuleActionRequest?: BatchUpdateBotMRuleActionRequest): Promise<BatchUpdateBotMRuleActionResponse> {
        const options = ParamCreater().batchUpdateBotMRuleAction(batchUpdateBotMRuleActionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量更新BotM规则启用状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量更新BotM规则启用状态
     * @param {string} policyId policyId
     * @param {string} contentType 内容类型
     * @param {BatchUpdateBotMRuleStatusRequestBody} batchUpdateBotMRuleStatusRequestBody 批量更新规则启用状态的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUpdateBotMRuleStatus(batchUpdateBotMRuleStatusRequest?: BatchUpdateBotMRuleStatusRequest): Promise<BatchUpdateBotMRuleStatusResponse> {
        const options = ParamCreater().batchUpdateBotMRuleStatus(batchUpdateBotMRuleStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * **参数解释：**
     * 批量修改地理位置访问控制规则
     * **约束限制：**
     * 不涉及
     * **取值范围：**
     * 不涉及
     * **默认取值：**
     * 不涉及
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量修改CC防护规则
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {BatchUpdateCcRulesRequestBody} [batchUpdateCcRulesRequestBody] **参数解释：** 批量修CC准防护问控制规则body **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUpdateCcRules(batchUpdateCcRulesRequest?: BatchUpdateCcRulesRequest): Promise<BatchUpdateCcRulesResponse> {
        const options = ParamCreater().batchUpdateCcRules(batchUpdateCcRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * **参数解释：**
     * 批量修改地理位置访问控制规则
     * **约束限制：**
     * 不涉及
     * **取值范围：**
     * 不涉及
     * **默认取值：**
     * 不涉及
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量更新精准防护规则
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {BatchUpdateCustomRuleResponseBody} [batchUpdateCustomRuleResponseBody] **参数解释：** 批量修改精准防护控制规则body **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUpdateCustomRules(batchUpdateCustomRulesRequest?: BatchUpdateCustomRulesRequest): Promise<BatchUpdateCustomRulesResponse> {
        const options = ParamCreater().batchUpdateCustomRules(batchUpdateCustomRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * **参数解释：**
     * 批量修改地理位置访问控制规则
     * **约束限制：**
     * 不涉及
     * **取值范围：**
     * 不涉及
     * **默认取值：**
     * 不涉及
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量修改地理位置访问控制规则
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {BatchUpdateGeoipRulesRequestBody} [batchUpdateGeoipRulesRequestBody] **参数解释：** 批量修改地理位置访问控制规则body **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUpdateGeoipRules(batchUpdateGeoipRulesRequest?: BatchUpdateGeoipRulesRequest): Promise<BatchUpdateGeoipRulesResponse> {
        const options = ParamCreater().batchUpdateGeoipRules(batchUpdateGeoipRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * **参数解释：**
     * 批量修改全局白名单规则
     * **约束限制：**
     * 不涉及
     * **取值范围：**
     * 不涉及
     * **默认取值：**
     * 不涉及
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量更新全局白名单规则
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {BatchUpdateIgnoreRuleRequestBody} [batchUpdateIgnoreRuleRequestBody] **参数解释：** 批量修改全局白名单规则body **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUpdateIgnoreRules(batchUpdateIgnoreRulesRequest?: BatchUpdateIgnoreRulesRequest): Promise<BatchUpdateIgnoreRulesResponse> {
        const options = ParamCreater().batchUpdateIgnoreRules(batchUpdateIgnoreRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * **参数解释：**
     * 批量修改地理位置访问控制规则
     * **约束限制：**
     * 不涉及
     * **取值范围：**
     * 不涉及
     * **默认取值：**
     * 不涉及
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量更新黑白名单设置规则
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {BatchUpdateIpReputationRuleRequestBody} [batchUpdateIpReputationRuleRequestBody] **参数解释：** 批量修改威胁情报访问控制规则body **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUpdateIpReputationRules(batchUpdateIpReputationRulesRequest?: BatchUpdateIpReputationRulesRequest): Promise<BatchUpdateIpReputationRulesResponse> {
        const options = ParamCreater().batchUpdateIpReputationRules(batchUpdateIpReputationRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * **参数解释：**
     * 批量修改全局白名单规则
     * **约束限制：**
     * 不涉及
     * **取值范围：**
     * 不涉及
     * **默认取值：**
     * 不涉及
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量更新隐私屏蔽规则
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {BatchUpdatePrivacyRuleRequestBody} [batchUpdatePrivacyRuleRequestBody] **参数解释：** 批量修改隐私屏蔽规则body **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUpdatePrivacyRules(batchUpdatePrivacyRulesRequest?: BatchUpdatePrivacyRulesRequest): Promise<BatchUpdatePrivacyRulesResponse> {
        const options = ParamCreater().batchUpdatePrivacyRules(batchUpdatePrivacyRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * **参数解释：**
     * 批量修改防护状态
     * **约束限制：**
     * 不涉及
     * **取值范围：**
     * 不涉及
     * **默认取值：**
     * 不涉及
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary **参数解释：** 批量修改防护状态 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {InstanceIdsStatus} instanceIdsStatus **参数解释：** 批量修改域名防护状态请求体
     * @param {string} [enterpriseProjectId] **参数解释：** 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目ID。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。 **约束限制：** 不涉及 **取值范围：**  - 0：代表default企业项目  - all_granted_eps：代表所有企业项目  - 其它企业项目ID：长度为36个字符  **默认取值：** 0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUpdateProtectStatus(batchUpdateProtectStatusRequest?: BatchUpdateProtectStatusRequest): Promise<BatchUpdateProtectStatusResponse> {
        const options = ParamCreater().batchUpdateProtectStatus(batchUpdateProtectStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * **参数解释：**
     * 批量修改地理位置访问控制规则
     * **约束限制：**
     * 不涉及
     * **取值范围：**
     * 不涉及
     * **默认取值：**
     * 不涉及
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量更新黑白名单设置规则
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {BatchUpdateWhiteBlackIpRuleRequestBody} [batchUpdateWhiteBlackIpRuleRequestBody] **参数解释：** 批量修改黑白名单设置规则body **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUpdateWhiteblackipRules(batchUpdateWhiteblackipRulesRequest?: BatchUpdateWhiteblackipRulesRequest): Promise<BatchUpdateWhiteblackipRulesResponse> {
        const options = ParamCreater().batchUpdateWhiteblackipRules(batchUpdateWhiteblackipRulesRequest);

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
     * 查询独享引擎的代理
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 检查代理
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkAgency(checkAgencyRequest?: CheckAgencyRequest): Promise<CheckAgencyResponse> {
        const options = ParamCreater().checkAgency(checkAgencyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 按application规则类型获取内置规则类型
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 按application规则类型获取内置规则类型
     * @param {string} contentType 内容类型
     * @param {number} [offset] 偏移量
     * @param {number} [limit] 限制数目
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public confirmApplicationTypes(confirmApplicationTypesRequest?: ConfirmApplicationTypesRequest): Promise<ConfirmApplicationTypesResponse> {
        const options = ParamCreater().confirmApplicationTypes(confirmApplicationTypesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询异步任务的执行状态详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询异步任务详情
     * @param {string} jobId **参数解释：** 异步任务的任务id
     * @param {string} projectid **参数解释：** 项目ID，对应控制台用户名-&gt;我的凭证-&gt;项目列表-&gt;项目ID。 **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
     * @param {string} [enterpriseProjectId] **参数解释：** 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目ID。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。 **约束限制：** 不涉及 **取值范围：**  - 0：代表default企业项目  - all_granted_eps：代表所有企业项目  - 其它企业项目ID：长度为36个字符 **默认取值：** 0
     * @param {string} [contentType] **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public confirmAsyncJob(confirmAsyncJobRequest?: ConfirmAsyncJobRequest): Promise<ConfirmAsyncJobResponse> {
        const options = ParamCreater().confirmAsyncJob(confirmAsyncJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据Id查询机房IP情报防护规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据Id查询机房IP情报防护规则
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {string} policyId **参数解释：** policyid **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** \&#39;\&#39;
     * @param {string} ruleId **参数解释：** geoipRuleId **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** \&#39;\&#39;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public confirmIpReputationRule(confirmIpReputationRuleRequest?: ConfirmIpReputationRuleRequest): Promise<ConfirmIpReputationRuleResponse> {
        const options = ParamCreater().confirmIpReputationRule(confirmIpReputationRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询敏感信息选项的详细信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary SMN告警通知
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {string} lang **参数解释：** 语言 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public confirmPolicyAntileakageMap(confirmPolicyAntileakageMapRequest?: ConfirmPolicyAntileakageMapRequest): Promise<ConfirmPolicyAntileakageMapResponse> {
        const options = ParamCreater().confirmPolicyAntileakageMap(confirmPolicyAntileakageMapRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询威胁情报控制防护选项的详细信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary SMN告警通知
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {string} lang **参数解释：** 语言 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} type **参数解释：** 语言 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public confirmPolicyIpReputationMap(confirmPolicyIpReputationMapRequest?: ConfirmPolicyIpReputationMapRequest): Promise<ConfirmPolicyIpReputationMapResponse> {
        const options = ParamCreater().confirmPolicyIpReputationMap(confirmPolicyIpReputationMapRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 按防护规则类型获取内置规则类型
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 按防护规则类型获取内置规则类型
     * @param {string} contentType 内容类型
     * @param {number} [offset] 偏移量
     * @param {number} [limit] 限制数目
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public confirmProtectionTypes(confirmProtectionTypesRequest?: ConfirmProtectionTypesRequest): Promise<ConfirmProtectionTypesResponse> {
        const options = ParamCreater().confirmProtectionTypes(confirmProtectionTypesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询告警可选事件类型
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary SMN告警通知
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public confirmThreatMap(confirmThreatMapRequest?: ConfirmThreatMapRequest): Promise<ConfirmThreatMapResponse> {
        const options = ParamCreater().confirmThreatMap(confirmThreatMapRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 使用标签过滤实例，标签管理服务需要提供按标签过滤各服务实例并汇总显示在列表中，需要各服务提供查询能力。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源实例
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {string} resourceType **参数解释：** 资源类型，目前支持waf-instance，waf **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
     * @param {TmsResourceInstancesRequest} tmsResourceInstancesRequest **参数解释：** 查询请求body **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public confirmTmsResourceInstances(confirmTmsResourceInstancesRequest?: ConfirmTmsResourceInstancesRequest): Promise<ConfirmTmsResourceInstancesResponse> {
        const options = ParamCreater().confirmTmsResourceInstances(confirmTmsResourceInstancesRequest);

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
     * 根据Id复制防护策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据Id复制防护策略
     * @param {string} contentType 内容类型
     * @param {string} srcPolicyId 源策略ID
     * @param {string} destPolicyName 复制出的新策略名称
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS)的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public copyPolicyById(copyPolicyByIdRequest?: CopyPolicyByIdRequest): Promise<CopyPolicyByIdResponse> {
        const options = ParamCreater().copyPolicyById(copyPolicyByIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建独享引擎的代理
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建代理
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {PremiumWafAgencyRequest} [premiumWafAgencyRequest] **参数解释：** 独享引擎操作 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAgency(createAgencyRequest?: CreateAgencyRequest): Promise<CreateAgencyResponse> {
        const options = ParamCreater().createAgency(createAgencyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * **参数解释：**
     * 创建告警通知
     * **约束限制：**
     * 不涉及
     * **取值范围：**
     * 不涉及
     * **默认取值：**
     * 不涉及
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建告警通知
     * @param {string} xLanguage **参数解释：** 语言，默认值为en-us。zh-cn（中文）/en-us（英文） **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** zh-cn
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {string} enterpriseProjectId **参数解释：** 企业项目ID **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {AlertNoticeConfig} alertNoticeConfig **参数解释：** 请求Body **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAlertNoticeConfig(createAlertNoticeConfigRequest?: CreateAlertNoticeConfigRequest): Promise<CreateAlertNoticeConfigResponse> {
        const options = ParamCreater().createAlertNoticeConfig(createAlertNoticeConfigRequest);

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
     * 创建BotM流量检测条件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建BotM流量检测条件
     * @param {string} policyId policyId
     * @param {string} contentType 内容类型
     * @param {SaveTrafficDetectionConditionRequestBody} createBotMTrafficDetectionConditionRequestBody 是否开启规则
     * @param {string} [enterpriseProjectId] 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createBotMTrafficDetectionCondition(createBotMTrafficDetectionConditionRequest?: CreateBotMTrafficDetectionConditionRequest): Promise<CreateBotMTrafficDetectionConditionResponse> {
        const options = ParamCreater().createBotMTrafficDetectionCondition(createBotMTrafficDetectionConditionRequest);

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
     * **参数解释：**
     * 下发自定义导出攻击事件的异步任务
     * **约束限制：**
     * 不涉及
     * **取值范围：**
     * 不涉及
     * **默认取值：**
     * 不涉及
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 下发自定义导出攻击事件的异步任务
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {AsyncJobReqBody} asyncJobReqBody **参数解释：** 下发自定义导出攻击事件的异步任务的请求体 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createEventExportJob(createEventExportJobRequest?: CreateEventExportJobRequest): Promise<CreateEventExportJobResponse> {
        const options = ParamCreater().createEventExportJob(createEventExportJobRequest);

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
     * 创建IP情报规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建机房IP情报规则
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {string} policyId **参数解释：** 防护策略id，您可以通过调用查询防护策略列表（ListPolicy）获取策略id **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {CreateIpReputationRuleRequestBody} createIpReputationRuleRequestBody **参数解释：** 创建地理访问控制请求体 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} [enterpriseProjectId] **参数解释：** 您可以通过调用企业项目管理服务（EPS)的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createIpReputationRule(createIpReputationRuleRequest?: CreateIpReputationRuleRequest): Promise<CreateIpReputationRuleResponse> {
        const options = ParamCreater().createIpReputationRule(createIpReputationRuleRequest);

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
     * 创建安全报告订阅
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建安全报告订阅
     * @param {string} contentType content-type
     * @param {CreateSecurityReportSubscriptionRequestBody} createSecurityReportSubscriptionRequest 创建安全报告订阅
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSecurityReportSubscription(createSecurityReportSubscriptionRequest?: CreateSecurityReportSubscriptionRequest): Promise<CreateSecurityReportSubscriptionResponse> {
        const options = ParamCreater().createSecurityReportSubscription(createSecurityReportSubscriptionRequest);

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
     * 创建独享引擎的代理
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除代理
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {boolean} [purged] **参数解释：** 独享引擎操作 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {Array<string>} [roleIdList] **参数解释：** 待删除的代理id **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAgency(deleteAgencyRequest?: DeleteAgencyRequest): Promise<DeleteAgencyResponse> {
        const options = ParamCreater().deleteAgency(deleteAgencyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除告警通知配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新告警通知配置
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {string} xLanguage **参数解释：** zh-cn/en-us **约束限制：** 不涉及 **取值范围：** - zh-cn - en-us  **默认取值：** 不涉及
     * @param {string} alertId **参数解释：** 告警通知id **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAlertNoticeConfig(deleteAlertNoticeConfigRequest?: DeleteAlertNoticeConfigRequest): Promise<DeleteAlertNoticeConfigResponse> {
        const options = ParamCreater().deleteAlertNoticeConfig(deleteAlertNoticeConfigRequest);

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
     * 删除BotM流量检测条件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除BotM流量检测条件
     * @param {string} policyId policyId
     * @param {string} conditionId 流量检测条件Id
     * @param {string} contentType 内容类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteBotMTrafficDetectionCondition(deleteBotMTrafficDetectionConditionRequest?: DeleteBotMTrafficDetectionConditionRequest): Promise<DeleteBotMTrafficDetectionConditionResponse> {
        const options = ParamCreater().deleteBotMTrafficDetectionCondition(deleteBotMTrafficDetectionConditionRequest);

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
     * 删除IP情报防护规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除机房IP情报防护规则
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {string} policyId **参数解释：** 防护策略id，您可以通过调用查询防护策略列表（ListPolicy）获取策略id **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} ruleId **参数解释：** 机房IP情报访问控制规则id，通过查询机房IP情报规则列表接口获取https://apiexplorer.developer.huaweicloud.com/apiexplorer/doc?product&#x3D;WAF&amp;api&#x3D;ListIdcIpRule **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} [enterpriseProjectId] **参数解释：** 您可以通过调用企业项目管理服务（EPS)的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteIpReputationRule(deleteIpReputationRuleRequest?: DeleteIpReputationRuleRequest): Promise<DeleteIpReputationRuleResponse> {
        const options = ParamCreater().deleteIpReputationRule(deleteIpReputationRuleRequest);

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
     * 删除安全报告订阅
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除安全报告订阅
     * @param {string} subscriptionId 
     * @param {string} contentType content-type
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSecurityReportSubscription(deleteSecurityReportSubscriptionRequest?: DeleteSecurityReportSubscriptionRequest): Promise<DeleteSecurityReportSubscriptionResponse> {
        const options = ParamCreater().deleteSecurityReportSubscription(deleteSecurityReportSubscriptionRequest);

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
     * 查询所有策略网页防篡改
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有策略网页防篡改
     * @param {string} projectid **参数解释：** 项目ID，对应控制台用户名-&gt;我的凭证-&gt;项目列表-&gt;项目ID。 **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
     * @param {string} [policyids] **参数解释：** 域名id。 **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
     * @param {string} [enterpriseProjectId] **参数解释：** 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目ID。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。 **约束限制：** 不涉及 **取值范围：**  - 0：代表default企业项目  - all_granted_eps：代表所有企业项目  - 其它企业项目ID：长度为36个字符  **默认取值：** 0
     * @param {number} [page] **参数解释：** 分页查询的起始位置，表示从第几条记录开始返回（从1开始计数）。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 1
     * @param {number} [pagesize] **参数解释：** 分页查询时，每页包含多少条结果。 **约束限制：** 不涉及 **默认取值：** 1000
     * @param {string} [contentType] **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAntiTamperPolicyRules(listAntiTamperPolicyRulesRequest?: ListAntiTamperPolicyRulesRequest): Promise<ListAntiTamperPolicyRulesResponse> {
        const options = ParamCreater().listAntiTamperPolicyRules(listAntiTamperPolicyRulesRequest);

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
     * 查询所有策略防敏感信息泄漏规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有策略防敏感信息泄漏规则
     * @param {string} projectid **参数解释：** 项目ID，对应控制台用户名-&gt;我的凭证-&gt;项目列表-&gt;项目ID。 **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
     * @param {string} [policyids] **参数解释：** 域名id。 **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
     * @param {string} [enterpriseProjectId] **参数解释：** 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目ID。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。 **约束限制：** 不涉及 **取值范围：**  - 0：代表default企业项目  - all_granted_eps：代表所有企业项目  - 其它企业项目ID：长度为36个字符  **默认取值：** 0
     * @param {number} [page] **参数解释：** 分页查询的起始位置，表示从第几条记录开始返回（从1开始计数）。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 1
     * @param {number} [pagesize] **参数解释：** 分页查询时，每页包含多少条结果。 **约束限制：** 不涉及 **默认取值：** 1000
     * @param {string} [contentType] **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAntileakagePolicyRules(listAntileakagePolicyRulesRequest?: ListAntileakagePolicyRulesRequest): Promise<ListAntileakagePolicyRulesResponse> {
        const options = ParamCreater().listAntileakagePolicyRules(listAntileakagePolicyRulesRequest);

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
     * 查询BotM中bot的请求分布
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询BotM中bot的请求分布
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {number} startTime **参数解释：** 开始时间 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {number} endTime **参数解释：** 结束时间 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} [tenantId] **参数解释：** 租户Id **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} [enterpriseProjectId] **参数解释：** 企业项目Id **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {Array<string>} [hosts] **参数解释：** 域名 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {Array<string>} [domains] **参数解释：** 域名,要查询域名名称列表，hosts和domains二选一，都有值的话以hosts为准 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} [region] **参数解释：** 区域 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} [site] **参数解释：** 站点 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBotMRequestDistribution(listBotMRequestDistributionRequest?: ListBotMRequestDistributionRequest): Promise<ListBotMRequestDistributionResponse> {
        const options = ParamCreater().listBotMRequestDistribution(listBotMRequestDistributionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询BotM所有规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询BotM所有规则
     * @param {string} policyId policyid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBotMRules(listBotMRulesRequest?: ListBotMRulesRequest): Promise<ListBotMRulesResponse> {
        const options = ParamCreater().listBotMRules(listBotMRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询BotM中bot的评分分布
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询BotM中bot的评分分布
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {number} startTime **参数解释：** 开始时间 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {number} endTime **参数解释：** 结束时间 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} [tenantId] **参数解释：** 租户Id **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} [enterpriseProjectId] **参数解释：** 企业项目Id **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {Array<string>} [hosts] **参数解释：** 域名 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {Array<string>} [domains] **参数解释：** 域名,查询的域名列表，与hosts二选一，如果hosts不为空，以hosts为准 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} [region] **参数解释：** 区域 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} [site] **参数解释：** 站点 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBotMScoreDistribution(listBotMScoreDistributionRequest?: ListBotMScoreDistributionRequest): Promise<ListBotMScoreDistributionResponse> {
        const options = ParamCreater().listBotMScoreDistribution(listBotMScoreDistributionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询BotM中bot的请求时间趋势
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询BotM中bot的请求时间趋势
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {number} startTime **参数解释：** 开始时间 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {number} endTime **参数解释：** 结束时间 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} [tenantId] **参数解释：** 租户Id **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} [enterpriseProjectId] **参数解释：** 企业项目Id **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {Array<string>} [hosts] **参数解释：** 域名 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} [domain] **参数解释：** 域名 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} [region] **参数解释：** 区域 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} [site] **参数解释：** 站点 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBotMTimeline(listBotMTimelineRequest?: ListBotMTimelineRequest): Promise<ListBotMTimelineResponse> {
        const options = ParamCreater().listBotMTimeline(listBotMTimelineRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询BotM中topn的bot请求
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询BotM中top n的bot请求
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {number} startTime **参数解释：** 开始时间 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {number} endTime **参数解释：** 结束时间 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} [tenantId] **参数解释：** 租户Id **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} [enterpriseProjectId] **参数解释：** 企业项目Id **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {Array<string>} [hosts] **参数解释：** 域名 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {number} [topn] **参数解释：** n的取值 **约束限制：** 不涉及 **取值范围：** 1-20 **默认取值：** 5
     * @param {string} [region] **参数解释：** 区域 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} [site] **参数解释：** 站点 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBotMTopnRequest(listBotMTopnRequestRequest?: ListBotMTopnRequestRequest): Promise<ListBotMTopnRequestResponse> {
        const options = ParamCreater().listBotMTopnRequest(listBotMTopnRequestRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询所有策略CC规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有策略CC规则
     * @param {string} projectid **参数解释：** 项目ID，对应控制台用户名-&gt;我的凭证-&gt;项目列表-&gt;项目ID。 **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
     * @param {string} [policyids] **参数解释：** 域名id。 **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
     * @param {string} [enterpriseProjectId] **参数解释：** 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目ID。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。 **约束限制：** 不涉及 **取值范围：**  - 0：代表default企业项目  - all_granted_eps：代表所有企业项目  - 其它企业项目ID：长度为36个字符  **默认取值：** 0
     * @param {number} [page] **参数解释：** 分页查询的起始位置，表示从第几条记录开始返回（从1开始计数）。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 1
     * @param {number} [pagesize] **参数解释：** 分页查询时，每页包含多少条结果。 **约束限制：** 不涉及 **默认取值：** 1000
     * @param {string} [contentType] **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCcPolicyRules(listCcPolicyRulesRequest?: ListCcPolicyRulesRequest): Promise<ListCcPolicyRulesResponse> {
        const options = ParamCreater().listCcPolicyRules(listCcPolicyRulesRequest);

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
     * @param {boolean} [queryScm] 查询结果的证书来源服务是否包括SCM服务，值为true或者false。
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
     * 查询所有策略精准防护规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有策略精准防护规则
     * @param {string} projectid **参数解释：** 项目ID，对应控制台用户名-&gt;我的凭证-&gt;项目列表-&gt;项目ID。 **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
     * @param {string} [policyids] **参数解释：** 域名id。 **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
     * @param {string} [enterpriseProjectId] **参数解释：** 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目ID。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。 **约束限制：** 不涉及 **取值范围：**  - 0：代表default企业项目  - all_granted_eps：代表所有企业项目  - 其它企业项目ID：长度为36个字符  **默认取值：** 0
     * @param {number} [page] **参数解释：** 分页查询的起始位置，表示从第几条记录开始返回（从1开始计数）。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 1
     * @param {number} [pagesize] **参数解释：** 分页查询时，每页包含多少条结果。 **约束限制：** 不涉及 **默认取值：** 1000
     * @param {string} [contentType] **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCustomPolicyRules(listCustomPolicyRulesRequest?: ListCustomPolicyRulesRequest): Promise<ListCustomPolicyRulesResponse> {
        const options = ParamCreater().listCustomPolicyRules(listCustomPolicyRulesRequest);

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
     * 查询事件日志下载的url
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询事件日志下载的url
     * @param {string} contentType 内容类型
     * @param {number} [page] 页数
     * @param {number} [pagesize] 单页显示数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEventLog(listEventLogRequest?: ListEventLogRequest): Promise<ListEventLogResponse> {
        const options = ParamCreater().listEventLog(listEventLogRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询所有策略地理位置访问控制
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有策略地理位置访问控制
     * @param {string} projectid **参数解释：** 项目ID，对应控制台用户名-&gt;我的凭证-&gt;项目列表-&gt;项目ID。 **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
     * @param {string} [policyids] **参数解释：** 域名id。 **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
     * @param {string} [enterpriseProjectId] **参数解释：** 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目ID。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。 **约束限制：** 不涉及 **取值范围：**  - 0：代表default企业项目  - all_granted_eps：代表所有企业项目  - 其它企业项目ID：长度为36个字符  **默认取值：** 0
     * @param {number} [page] **参数解释：** 分页查询的起始位置，表示从第几条记录开始返回（从1开始计数）。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 1
     * @param {number} [pagesize] **参数解释：** 分页查询时，每页包含多少条结果。 **约束限制：** 不涉及 **默认取值：** 1000
     * @param {string} [contentType] **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGeoIpPolicyRules(listGeoIpPolicyRulesRequest?: ListGeoIpPolicyRulesRequest): Promise<ListGeoIpPolicyRulesResponse> {
        const options = ParamCreater().listGeoIpPolicyRules(listGeoIpPolicyRulesRequest);

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
     * **参数解释：**
     * 返回路由信息。
     * &gt; 该API局点受限使用，后续将下线。
     * **约束限制：**
     * 不涉及
     * **取值范围：**
     * 不涉及
     * **默认取值：**
     * 不涉及
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取云模式域名路由信息
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {string} instanceId **参数解释：** 域名id，您可以通过调用查询云模式防护域名列表（ListHost）获取域名id **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
     * @param {string} [enterpriseProjectId] **参数解释：** 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目ID。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。 **约束限制：** 不涉及 **取值范围：**  - 0：代表default企业项目  - all_granted_eps：代表所有企业项目  - 其它企业项目ID：长度为36个字符  **默认取值：** 0
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
     * 查询所有策略全局白名单
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有策略全局白名单
     * @param {string} projectid **参数解释：** 项目ID，对应控制台用户名-&gt;我的凭证-&gt;项目列表-&gt;项目ID。 **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
     * @param {string} [policyids] **参数解释：** 域名id。 **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
     * @param {string} [enterpriseProjectId] **参数解释：** 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目ID。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。 **约束限制：** 不涉及 **取值范围：**  - 0：代表default企业项目  - all_granted_eps：代表所有企业项目  - 其它企业项目ID：长度为36个字符  **默认取值：** 0
     * @param {number} [page] **参数解释：** 分页查询的起始位置，表示从第几条记录开始返回（从1开始计数）。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 1
     * @param {number} [pagesize] **参数解释：** 分页查询时，每页包含多少条结果。 **约束限制：** 不涉及 **默认取值：** 1000
     * @param {string} [contentType] **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listIgnorePolicyRules(listIgnorePolicyRulesRequest?: ListIgnorePolicyRulesRequest): Promise<ListIgnorePolicyRulesResponse> {
        const options = ParamCreater().listIgnorePolicyRules(listIgnorePolicyRulesRequest);

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
     * @param {string} resourceid **参数解释：** 资源类型，目前支持waf和waf-instance **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
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
     * 查询所有策略威胁情报控制规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有策略威胁情报控制规则
     * @param {string} projectid **参数解释：** 项目ID，对应控制台用户名-&gt;我的凭证-&gt;项目列表-&gt;项目ID。 **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
     * @param {string} [policyids] **参数解释：** 域名id。 **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
     * @param {string} [enterpriseProjectId] **参数解释：** 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目ID。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。 **约束限制：** 不涉及 **取值范围：**  - 0：代表default企业项目  - all_granted_eps：代表所有企业项目  - 其它企业项目ID：长度为36个字符  **默认取值：** 0
     * @param {number} [page] **参数解释：** 分页查询的起始位置，表示从第几条记录开始返回（从1开始计数）。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 1
     * @param {number} [pagesize] **参数解释：** 分页查询时，每页包含多少条结果。 **约束限制：** 不涉及 **默认取值：** 1000
     * @param {string} [contentType] **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listIpReputationPolicyRules(listIpReputationPolicyRulesRequest?: ListIpReputationPolicyRulesRequest): Promise<ListIpReputationPolicyRulesResponse> {
        const options = ParamCreater().listIpReputationPolicyRules(listIpReputationPolicyRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询威胁情报规则列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询威胁情报规则列表
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {string} policyId **参数解释：** 策略id（策略id从查询防护策略列表接口获取） **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {number} offset **参数解释：** 偏移量，表示查询该偏移量之后的记录。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {number} limit **参数解释：** 查询返回记录的数量限制。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 1000
     * @param {string} [enterpriseProjectId] **参数解释：** 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listIpReputationRules(listIpReputationRulesRequest?: ListIpReputationRulesRequest): Promise<ListIpReputationRulesResponse> {
        const options = ParamCreater().listIpReputationRules(listIpReputationRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询所有策略大模型防护规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有策略大模型防护规则
     * @param {string} projectid **参数解释：** 项目ID，对应控制台用户名-&gt;我的凭证-&gt;项目列表-&gt;项目ID。 **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
     * @param {string} [policyids] **参数解释：** 域名id。 **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
     * @param {string} [enterpriseProjectId] **参数解释：** 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目ID。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。 **约束限制：** 不涉及 **取值范围：**  - 0：代表default企业项目  - all_granted_eps：代表所有企业项目  - 其它企业项目ID：长度为36个字符  **默认取值：** 0
     * @param {number} [page] **参数解释：** 分页查询的起始位置，表示从第几条记录开始返回（从1开始计数）。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 1
     * @param {number} [pagesize] **参数解释：** 分页查询时，每页包含多少条结果。 **约束限制：** 不涉及 **默认取值：** 1000
     * @param {string} [contentType] **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLlmGuardPolicyRules(listLlmGuardPolicyRulesRequest?: ListLlmGuardPolicyRulesRequest): Promise<ListLlmGuardPolicyRulesResponse> {
        const options = ParamCreater().listLlmGuardPolicyRules(listLlmGuardPolicyRulesRequest);

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
     * 查询所有策略隐私屏蔽防护规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有策略隐私屏蔽防护规则
     * @param {string} projectid **参数解释：** 项目ID，对应控制台用户名-&gt;我的凭证-&gt;项目列表-&gt;项目ID。 **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
     * @param {string} [policyids] **参数解释：** 域名id。 **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
     * @param {string} [enterpriseProjectId] **参数解释：** 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目ID。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。 **约束限制：** 不涉及 **取值范围：**  - 0：代表default企业项目  - all_granted_eps：代表所有企业项目  - 其它企业项目ID：长度为36个字符  **默认取值：** 0
     * @param {number} [page] **参数解释：** 分页查询的起始位置，表示从第几条记录开始返回（从1开始计数）。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 1
     * @param {number} [pagesize] **参数解释：** 分页查询时，每页包含多少条结果。 **约束限制：** 不涉及 **默认取值：** 1000
     * @param {string} [contentType] **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPrivacyPolicyRules(listPrivacyPolicyRulesRequest?: ListPrivacyPolicyRulesRequest): Promise<ListPrivacyPolicyRulesResponse> {
        const options = ParamCreater().listPrivacyPolicyRules(listPrivacyPolicyRulesRequest);

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
     * 查询可防护的资源列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可防护的资源列表
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {string} resourceType **参数解释：** 查询的防护资源类型，目前支持的资源类型为:elb **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** elb
     * @param {string} [vpcId] **参数解释：** 负载均衡器所在VPC ID **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} [region] **参数解释：** 租户region **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProtectableResources(listProtectableResourcesRequest?: ListProtectableResourcesRequest): Promise<ListProtectableResourcesResponse> {
        const options = ParamCreater().listProtectableResources(listProtectableResourcesRequest);

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
     * 查询安全统计响应码数据
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询安全统计响应码数据
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {number} from **参数解释：** 起始时间 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {number} to **参数解释：** 结束时间 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} [enterpriseProjectId] **参数解释：** 企业项目id **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {Array<string>} [hosts] **参数解释：** 要查询域名列表 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {Array<string>} [instances] **参数解释：** 要查询实例列表 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {'WAF' | 'UPSTREAM'} [responseSource] **参数解释：** 响应源 **约束限制：** 不涉及 **取值范围：** 可选值为WAF、UPSTREAM **默认取值：** 不涉及
     * @param {string} [groupBy] **参数解释：** 展示维度，按天展示时传\&quot;DAY\&quot; **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listResponseCodeTimeline(listResponseCodeTimelineRequest?: ListResponseCodeTimelineRequest): Promise<ListResponseCodeTimelineResponse> {
        const options = ParamCreater().listResponseCodeTimeline(listResponseCodeTimelineRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询安全报告历史统计周期列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询安全报告历史统计周期列表
     * @param {string} contentType content-type
     * @param {string} subscriptionId 订阅ID
     * @param {number} [limit] 限制条目数量
     * @param {number} [offset] 偏移量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSecurityReportHistoryPeriods(listSecurityReportHistoryPeriodsRequest?: ListSecurityReportHistoryPeriodsRequest): Promise<ListSecurityReportHistoryPeriodsResponse> {
        const options = ParamCreater().listSecurityReportHistoryPeriods(listSecurityReportHistoryPeriodsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询安全报告发送记录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询安全报告发送记录
     * @param {string} contentType content-type
     * @param {string} [reportName] 报告名称
     * @param {string} [reportCategory] 报告类别
     * @param {number} [limit] 限制条目数量
     * @param {number} [offset] 偏移量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSecurityReportSendingRecords(listSecurityReportSendingRecordsRequest?: ListSecurityReportSendingRecordsRequest): Promise<ListSecurityReportSendingRecordsResponse> {
        const options = ParamCreater().listSecurityReportSendingRecords(listSecurityReportSendingRecordsRequest);

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
     * 查询攻击源ip
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询攻击源ip
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {number} from **参数解释：** 起始时间 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {number} to **参数解释：** 结束时间 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} [enterpriseProjectId] **参数解释：** 企业项目id **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {number} [top] **参数解释：** 要查询的前几的结果 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} [hosts] **参数解释：** 要查询域名列表 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} [instances] **参数解释：** 要查询实例列表 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTopIp(listTopIpRequest?: ListTopIpRequest): Promise<ListTopIpResponse> {
        const options = ParamCreater().listTopIp(listTopIpRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询被攻击url
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询被攻击url
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {number} from **参数解释：** 起始时间 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {number} to **参数解释：** 结束时间 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} [enterpriseProjectId] **参数解释：** 企业项目id **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {number} [top] **参数解释：** 要查询的前几的结果 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} [hosts] **参数解释：** 要查询域名列表 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} [instances] **参数解释：** 要查询实例列表 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTopUrl(listTopUrlRequest?: ListTopUrlRequest): Promise<ListTopUrlResponse> {
        const options = ParamCreater().listTopUrl(listTopUrlRequest);

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
     * 查询所有策略黑白名单防护规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有策略黑白名单防护规则
     * @param {string} projectid **参数解释：** 项目ID，对应控制台用户名-&gt;我的凭证-&gt;项目列表-&gt;项目ID。 **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
     * @param {string} [policyids] **参数解释：** 域名id。 **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
     * @param {string} [enterpriseProjectId] **参数解释：** 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目ID。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。 **约束限制：** 不涉及 **取值范围：**  - 0：代表default企业项目  - all_granted_eps：代表所有企业项目  - 其它企业项目ID：长度为36个字符  **默认取值：** 0
     * @param {number} [page] **参数解释：** 分页查询的起始位置，表示从第几条记录开始返回（从1开始计数）。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 1
     * @param {number} [pagesize] **参数解释：** 分页查询时，每页包含多少条结果。 **约束限制：** 不涉及 **默认取值：** 1000
     * @param {string} [contentType] **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listWhiteblackipPolicyRules(listWhiteblackipPolicyRulesRequest?: ListWhiteblackipPolicyRulesRequest): Promise<ListWhiteblackipPolicyRulesResponse> {
        const options = ParamCreater().listWhiteblackipPolicyRules(listWhiteblackipPolicyRulesRequest);

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
     * 查询地理位置控制防护规则详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询地理位置控制防护规则详情
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
     * 查询安全报告内容
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询安全报告内容
     * @param {string} contentType content-type
     * @param {string} reportId 报告ID
     * @param {string} subscriptionId 订阅ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSecurityReportContent(showSecurityReportContentRequest?: ShowSecurityReportContentRequest): Promise<ShowSecurityReportContentResponse> {
        const options = ParamCreater().showSecurityReportContent(showSecurityReportContentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询安全报告订阅
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询安全报告订阅
     * @param {string} subscriptionId 安全报告订阅ID
     * @param {string} contentType content-type
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSecurityReportSubscription(showSecurityReportSubscriptionRequest?: ShowSecurityReportSubscriptionRequest): Promise<ShowSecurityReportSubscriptionResponse> {
        const options = ParamCreater().showSecurityReportSubscription(showSecurityReportSubscriptionRequest);

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
     * 返回接入进度
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改域名接入进度
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {string} instanceId **参数解释：** 域名Id **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {AccessProgress} body **参数解释：** 创建域名请求body **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAccessProgress(updateAccessProgressRequest?: UpdateAccessProgressRequest): Promise<UpdateAccessProgressResponse> {
        const options = ParamCreater().updateAccessProgress(updateAccessProgressRequest);

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
     * 更新BotM规则启用状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新BotM的Category[已知BOT检测/请求特征检测]启用状态
     * @param {string} policyId policyId
     * @param {string} categoryId 类别id
     * @param {string} contentType 内容类型
     * @param {UpdateBotMRuleStatusRequestBody} updateBotMCategoryStatusRequestBody 是否开启规则
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateBotMCategoryStatus(updateBotMCategoryStatusRequest?: UpdateBotMCategoryStatusRequest): Promise<UpdateBotMCategoryStatusResponse> {
        const options = ParamCreater().updateBotMCategoryStatus(updateBotMCategoryStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * **参数解释：**
     * 更新BotM行为检测规则的防护策略
     * **约束限制：**
     * 不涉及
     * **取值范围：**
     * 不涉及
     * **默认取值：**
     * 不涉及
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新BotM行为检测规则的防护策略
     * @param {string} policyId **参数解释：** policyId **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json
     * @param {UpdateBotMRuleDefenseStrategyRequestBody} updateBotMRuleDefenseStrategyRequestBody **参数解释：** 更新防护策略 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateBotMRuleDefenseStrategy(updateBotMRuleDefenseStrategyRequest?: UpdateBotMRuleDefenseStrategyRequest): Promise<UpdateBotMRuleDefenseStrategyResponse> {
        const options = ParamCreater().updateBotMRuleDefenseStrategy(updateBotMRuleDefenseStrategyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新BotM流量检测条件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新BotM流量检测条件
     * @param {string} policyId policyId
     * @param {string} conditionId 流量检测条件Id
     * @param {string} contentType 内容类型
     * @param {SaveTrafficDetectionConditionRequestBody} updateBotMTrafficDetectionConditionRequestBody 是否开启规则
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateBotMTrafficDetectionCondition(updateBotMTrafficDetectionConditionRequest?: UpdateBotMTrafficDetectionConditionRequest): Promise<UpdateBotMTrafficDetectionConditionResponse> {
        const options = ParamCreater().updateBotMTrafficDetectionCondition(updateBotMTrafficDetectionConditionRequest);

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
     * 返回接入状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改域名接入状态
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {string} instanceId **参数解释：** 域名Id **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {AccessStatusBody} body **参数解释：** 修改接入状态的请求body **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateHostAccessStatusOfUnderline(updateHostAccessStatusOfUnderlineRequest?: UpdateHostAccessStatusOfUnderlineRequest): Promise<UpdateHostAccessStatusOfUnderlineResponse> {
        const options = ParamCreater().updateHostAccessStatusOfUnderline(updateHostAccessStatusOfUnderlineRequest);

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
     * **参数解释：**
     * 更新云模式域名路由信息
     * **约束限制：**
     * 不涉及
     * **取值范围：**
     * 不涉及
     * **默认取值：**
     * 不涉及
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改云模式域名路由信息
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {string} instanceId **参数解释：** 域名Id **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {Array<RouteBody>} updateInstanceRouteRequestBody **参数解释：** 请求body **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInstanceRoute(updateInstanceRouteRequest?: UpdateInstanceRouteRequest): Promise<UpdateInstanceRouteResponse> {
        const options = ParamCreater().updateInstanceRoute(updateInstanceRouteRequest);

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
     * 更新IP情报防护规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新机房IP情报防护规则
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {string} policyId **参数解释：** 防护策略id，您可以通过调用查询防护策略列表（ListPolicy）获取策略id，响应体的id字段 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} ruleId **参数解释：** 规则id，规则id从查询机房IP情报规则列表（ListIdcIpRule）接口获取，响应体的id字段 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {UpdateIpReputationRuleRequestBody} updateIpReputationRuleRequestBody **参数解释：** body_info **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} [enterpriseProjectId] **参数解释：** 您可以通过调用企业项目管理服务（EPS)的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateIpReputationRule(updateIpReputationRuleRequest?: UpdateIpReputationRuleRequest): Promise<UpdateIpReputationRuleResponse> {
        const options = ParamCreater().updateIpReputationRule(updateIpReputationRuleRequest);

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
     * 修改独享模式域名接入状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改独享模式域名接入状态
     * @param {string} hostId **参数解释：** 独享模式域名ID **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {UpdatePremiumHostAccessStatusRequestBody} [updatePremiumHostAccessStatusRequestBody] **参数解释：** 修改独享模式域名接入状态的请求 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePremiumHostAccessStatus(updatePremiumHostAccessStatusRequest?: UpdatePremiumHostAccessStatusRequest): Promise<UpdatePremiumHostAccessStatusResponse> {
        const options = ParamCreater().updatePremiumHostAccessStatus(updatePremiumHostAccessStatusRequest);

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
     * 操作WAF独享引擎
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 操作WAF独享引擎
     * @param {string} instanceId **参数解释：** 独享引擎ID **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {UpdatePremiumInstanceRequestBody} [updatePremiumInstanceRequestBody] **参数解释：** 独享引擎操作 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePremiumInstance(updatePremiumInstanceRequest?: UpdatePremiumInstanceRequest): Promise<UpdatePremiumInstanceResponse> {
        const options = ParamCreater().updatePremiumInstance(updatePremiumInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 返回独享接入进度
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改独享域名接入进度
     * @param {string} contentType **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {string} hostId **参数解释：** 域名Id **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {AccessProgress} body **参数解释：** 创建域名请求body **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePremiumInstanceProgress(updatePremiumInstanceProgressRequest?: UpdatePremiumInstanceProgressRequest): Promise<UpdatePremiumInstanceProgressResponse> {
        const options = ParamCreater().updatePremiumInstanceProgress(updatePremiumInstanceProgressRequest);

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
     * 修改安全报告的订阅
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改安全报告的订阅
     * @param {string} contentType content-type
     * @param {string} subscriptionId 
     * @param {UpdateSecurityReportSubscriptionRequestBody} updateDemoInfoRequestBody 修改安全报告订阅请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSecurityReportSubscription(updateSecurityReportSubscriptionRequest?: UpdateSecurityReportSubscriptionRequest): Promise<UpdateSecurityReportSubscriptionResponse> {
        const options = ParamCreater().updateSecurityReportSubscription(updateSecurityReportSubscriptionRequest);

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

    /**
     * 查询用户托管在云解析上的域名
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户托管在云解析上的域名
     * @param {string} projectid **参数解释：** 项目ID，对应控制台用户名-&gt;我的凭证-&gt;项目列表-&gt;项目ID。 **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及**参数解释：** 项目ID，对应控制台用户名-&gt;我的凭证-&gt;项目列表-&gt;项目ID。 **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
     * @param {string} [enterpriseProjectId] **参数解释：** 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目ID。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。 **约束限制：** 不涉及 **取值范围：**  - 0：代表default企业项目  - all_granted_eps：代表所有企业项目  - 其它企业项目ID：长度为36个字符  **默认取值：** 0
     * @param {string} [contentType] **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public confirmDnsDomain(confirmDnsDomainRequest?: ConfirmDnsDomainRequest): Promise<ConfirmDnsDomainResponse> {
        const options = ParamCreater().confirmDnsDomain(confirmDnsDomainRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 快速接入，直接去修改用户的DNS记录，使域名快速接入WAF
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 域名快速接入WAF
     * @param {string} projectid **参数解释：** 项目ID，对应控制台用户名-&gt;我的凭证-&gt;项目列表-&gt;项目ID。 **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及**参数解释：** 项目ID，对应控制台用户名-&gt;我的凭证-&gt;项目列表-&gt;项目ID。 **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
     * @param {string} instanceid **参数解释：** 域名id。 **约束限制：** 不涉及 **取值范围：** 只能由英文字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
     * @param {string} [enterpriseProjectId] **参数解释：** 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目ID。若需要查询当前用户所有企业项目绑定的资源信息，请传参all_granted_eps。 **约束限制：** 不涉及 **取值范围：**  - 0：代表default企业项目  - all_granted_eps：代表所有企业项目  - 其它企业项目ID：长度为36个字符  **默认取值：** 0
     * @param {string} [contentType] **参数解释：** 内容类型 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** application/json;charset&#x3D;utf8
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createQuickAccessDomain(createQuickAccessDomainRequest?: CreateQuickAccessDomainRequest): Promise<CreateQuickAccessDomainResponse> {
        const options = ParamCreater().createQuickAccessDomain(createQuickAccessDomainRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * **参数解释：**
     * 根据Id查询Web防护规则
     * **约束限制：**
     * 不涉及
     * **取值范围：**
     * 不涉及
     * **默认取值：**
     * 不涉及
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据Id查询Web防护规则
     * @param {string} ruleId **参数解释：** 防护规则ID **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} [xLanguage] **参数解释：** 语言 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showWebProtectionRule(showWebProtectionRuleRequest?: ShowWebProtectionRuleRequest): Promise<ShowWebProtectionRuleResponse> {
        const options = ParamCreater().showWebProtectionRule(showWebProtectionRuleRequest);

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
         * 选中多个策略为这些策略批量添加网页防篡改规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateAntiTamperRule(batchCreateAntiTamperRuleRequest?: BatchCreateAntiTamperRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{projectid}/waf/rule/antitamper",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectid;
            
            let policyids;
            
            let enterpriseProjectId;
            
            let contentType;

            if (batchCreateAntiTamperRuleRequest !== null && batchCreateAntiTamperRuleRequest !== undefined) {
                if (batchCreateAntiTamperRuleRequest instanceof BatchCreateAntiTamperRuleRequest) {
                    projectid = batchCreateAntiTamperRuleRequest.projectid;
                    body = batchCreateAntiTamperRuleRequest.body
                    policyids = batchCreateAntiTamperRuleRequest.policyids;
                    enterpriseProjectId = batchCreateAntiTamperRuleRequest.enterpriseProjectId;
                    contentType = batchCreateAntiTamperRuleRequest.contentType;
                } else {
                    projectid = batchCreateAntiTamperRuleRequest['projectid'];
                    body = batchCreateAntiTamperRuleRequest['body'];
                    policyids = batchCreateAntiTamperRuleRequest['policyids'];
                    enterpriseProjectId = batchCreateAntiTamperRuleRequest['enterprise_project_id'];
                    contentType = batchCreateAntiTamperRuleRequest['Content-Type'];
                }
            }

        
            if (projectid === null || projectid === undefined) {
            throw new RequiredError('projectid','Required parameter projectid was null or undefined when calling batchCreateAntiTamperRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (policyids !== null && policyids !== undefined) {
                localVarQueryParameter['policyids'] = policyids;
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
            options.pathParams = { 'projectid': projectid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 选中多个策略为这些策略批量添加防敏感信息泄漏规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateAntileakageRule(batchCreateAntileakageRuleRequest?: BatchCreateAntileakageRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{projectid}/waf/rule/antileakage",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectid;
            
            let policyids;
            
            let enterpriseProjectId;
            
            let contentType;

            if (batchCreateAntileakageRuleRequest !== null && batchCreateAntileakageRuleRequest !== undefined) {
                if (batchCreateAntileakageRuleRequest instanceof BatchCreateAntileakageRuleRequest) {
                    projectid = batchCreateAntileakageRuleRequest.projectid;
                    body = batchCreateAntileakageRuleRequest.body
                    policyids = batchCreateAntileakageRuleRequest.policyids;
                    enterpriseProjectId = batchCreateAntileakageRuleRequest.enterpriseProjectId;
                    contentType = batchCreateAntileakageRuleRequest.contentType;
                } else {
                    projectid = batchCreateAntileakageRuleRequest['projectid'];
                    body = batchCreateAntileakageRuleRequest['body'];
                    policyids = batchCreateAntileakageRuleRequest['policyids'];
                    enterpriseProjectId = batchCreateAntileakageRuleRequest['enterprise_project_id'];
                    contentType = batchCreateAntileakageRuleRequest['Content-Type'];
                }
            }

        
            if (projectid === null || projectid === undefined) {
            throw new RequiredError('projectid','Required parameter projectid was null or undefined when calling batchCreateAntileakageRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (policyids !== null && policyids !== undefined) {
                localVarQueryParameter['policyids'] = policyids;
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
            options.pathParams = { 'projectid': projectid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 选中多个策略为这些策略批量添加cc规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateCcRule(batchCreateCcRuleRequest?: BatchCreateCcRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{projectid}/waf/rule/cc",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectid;
            
            let policyids;
            
            let enterpriseProjectId;
            
            let contentType;

            if (batchCreateCcRuleRequest !== null && batchCreateCcRuleRequest !== undefined) {
                if (batchCreateCcRuleRequest instanceof BatchCreateCcRuleRequest) {
                    projectid = batchCreateCcRuleRequest.projectid;
                    body = batchCreateCcRuleRequest.body
                    policyids = batchCreateCcRuleRequest.policyids;
                    enterpriseProjectId = batchCreateCcRuleRequest.enterpriseProjectId;
                    contentType = batchCreateCcRuleRequest.contentType;
                } else {
                    projectid = batchCreateCcRuleRequest['projectid'];
                    body = batchCreateCcRuleRequest['body'];
                    policyids = batchCreateCcRuleRequest['policyids'];
                    enterpriseProjectId = batchCreateCcRuleRequest['enterprise_project_id'];
                    contentType = batchCreateCcRuleRequest['Content-Type'];
                }
            }

        
            if (projectid === null || projectid === undefined) {
            throw new RequiredError('projectid','Required parameter projectid was null or undefined when calling batchCreateCcRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (policyids !== null && policyids !== undefined) {
                localVarQueryParameter['policyids'] = policyids;
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
            options.pathParams = { 'projectid': projectid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 选中多个策略为这些策略批量添加精准防护规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateCustomRule(batchCreateCustomRuleRequest?: BatchCreateCustomRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{projectid}/waf/rule/custom",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectid;
            
            let policyids;
            
            let enterpriseProjectId;
            
            let contentType;

            if (batchCreateCustomRuleRequest !== null && batchCreateCustomRuleRequest !== undefined) {
                if (batchCreateCustomRuleRequest instanceof BatchCreateCustomRuleRequest) {
                    projectid = batchCreateCustomRuleRequest.projectid;
                    body = batchCreateCustomRuleRequest.body
                    policyids = batchCreateCustomRuleRequest.policyids;
                    enterpriseProjectId = batchCreateCustomRuleRequest.enterpriseProjectId;
                    contentType = batchCreateCustomRuleRequest.contentType;
                } else {
                    projectid = batchCreateCustomRuleRequest['projectid'];
                    body = batchCreateCustomRuleRequest['body'];
                    policyids = batchCreateCustomRuleRequest['policyids'];
                    enterpriseProjectId = batchCreateCustomRuleRequest['enterprise_project_id'];
                    contentType = batchCreateCustomRuleRequest['Content-Type'];
                }
            }

        
            if (projectid === null || projectid === undefined) {
            throw new RequiredError('projectid','Required parameter projectid was null or undefined when calling batchCreateCustomRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (policyids !== null && policyids !== undefined) {
                localVarQueryParameter['policyids'] = policyids;
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
            options.pathParams = { 'projectid': projectid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 选中多个策略为这些策略批量添加地理位置访问控制规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateGeoIpRule(batchCreateGeoIpRuleRequest?: BatchCreateGeoIpRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{projectid}/waf/rule/geoip",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectid;
            
            let enterpriseProjectId;
            
            let contentType;

            if (batchCreateGeoIpRuleRequest !== null && batchCreateGeoIpRuleRequest !== undefined) {
                if (batchCreateGeoIpRuleRequest instanceof BatchCreateGeoIpRuleRequest) {
                    projectid = batchCreateGeoIpRuleRequest.projectid;
                    body = batchCreateGeoIpRuleRequest.body
                    enterpriseProjectId = batchCreateGeoIpRuleRequest.enterpriseProjectId;
                    contentType = batchCreateGeoIpRuleRequest.contentType;
                } else {
                    projectid = batchCreateGeoIpRuleRequest['projectid'];
                    body = batchCreateGeoIpRuleRequest['body'];
                    enterpriseProjectId = batchCreateGeoIpRuleRequest['enterprise_project_id'];
                    contentType = batchCreateGeoIpRuleRequest['Content-Type'];
                }
            }

        
            if (projectid === null || projectid === undefined) {
            throw new RequiredError('projectid','Required parameter projectid was null or undefined when calling batchCreateGeoIpRule.');
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
            options.pathParams = { 'projectid': projectid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 选中多个策略为这些策略批量添加全局白名单规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateIgnoreRule(batchCreateIgnoreRuleRequest?: BatchCreateIgnoreRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{projectid}/waf/rule/ignore",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectid;
            
            let policyids;
            
            let enterpriseProjectId;
            
            let contentType;

            if (batchCreateIgnoreRuleRequest !== null && batchCreateIgnoreRuleRequest !== undefined) {
                if (batchCreateIgnoreRuleRequest instanceof BatchCreateIgnoreRuleRequest) {
                    projectid = batchCreateIgnoreRuleRequest.projectid;
                    body = batchCreateIgnoreRuleRequest.body
                    policyids = batchCreateIgnoreRuleRequest.policyids;
                    enterpriseProjectId = batchCreateIgnoreRuleRequest.enterpriseProjectId;
                    contentType = batchCreateIgnoreRuleRequest.contentType;
                } else {
                    projectid = batchCreateIgnoreRuleRequest['projectid'];
                    body = batchCreateIgnoreRuleRequest['body'];
                    policyids = batchCreateIgnoreRuleRequest['policyids'];
                    enterpriseProjectId = batchCreateIgnoreRuleRequest['enterprise_project_id'];
                    contentType = batchCreateIgnoreRuleRequest['Content-Type'];
                }
            }

        
            if (projectid === null || projectid === undefined) {
            throw new RequiredError('projectid','Required parameter projectid was null or undefined when calling batchCreateIgnoreRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (policyids !== null && policyids !== undefined) {
                localVarQueryParameter['policyids'] = policyids;
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
            options.pathParams = { 'projectid': projectid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 选中多个策略为这些策略批量添加威胁情报访问控制规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateIpReputationRule(batchCreateIpReputationRuleRequest?: BatchCreateIpReputationRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{projectid}/waf/rule/ip-reputation",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectid;
            
            let policyids;
            
            let enterpriseProjectId;
            
            let contentType;

            if (batchCreateIpReputationRuleRequest !== null && batchCreateIpReputationRuleRequest !== undefined) {
                if (batchCreateIpReputationRuleRequest instanceof BatchCreateIpReputationRuleRequest) {
                    projectid = batchCreateIpReputationRuleRequest.projectid;
                    body = batchCreateIpReputationRuleRequest.body
                    policyids = batchCreateIpReputationRuleRequest.policyids;
                    enterpriseProjectId = batchCreateIpReputationRuleRequest.enterpriseProjectId;
                    contentType = batchCreateIpReputationRuleRequest.contentType;
                } else {
                    projectid = batchCreateIpReputationRuleRequest['projectid'];
                    body = batchCreateIpReputationRuleRequest['body'];
                    policyids = batchCreateIpReputationRuleRequest['policyids'];
                    enterpriseProjectId = batchCreateIpReputationRuleRequest['enterprise_project_id'];
                    contentType = batchCreateIpReputationRuleRequest['Content-Type'];
                }
            }

        
            if (projectid === null || projectid === undefined) {
            throw new RequiredError('projectid','Required parameter projectid was null or undefined when calling batchCreateIpReputationRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (policyids !== null && policyids !== undefined) {
                localVarQueryParameter['policyids'] = policyids;
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
            options.pathParams = { 'projectid': projectid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 选中多个策略为这些策略批量添加隐私屏蔽防护规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreatePrivacyRule(batchCreatePrivacyRuleRequest?: BatchCreatePrivacyRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{projectid}/waf/rule/privacy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectid;
            
            let policyids;
            
            let enterpriseProjectId;
            
            let contentType;

            if (batchCreatePrivacyRuleRequest !== null && batchCreatePrivacyRuleRequest !== undefined) {
                if (batchCreatePrivacyRuleRequest instanceof BatchCreatePrivacyRuleRequest) {
                    projectid = batchCreatePrivacyRuleRequest.projectid;
                    body = batchCreatePrivacyRuleRequest.body
                    policyids = batchCreatePrivacyRuleRequest.policyids;
                    enterpriseProjectId = batchCreatePrivacyRuleRequest.enterpriseProjectId;
                    contentType = batchCreatePrivacyRuleRequest.contentType;
                } else {
                    projectid = batchCreatePrivacyRuleRequest['projectid'];
                    body = batchCreatePrivacyRuleRequest['body'];
                    policyids = batchCreatePrivacyRuleRequest['policyids'];
                    enterpriseProjectId = batchCreatePrivacyRuleRequest['enterprise_project_id'];
                    contentType = batchCreatePrivacyRuleRequest['Content-Type'];
                }
            }

        
            if (projectid === null || projectid === undefined) {
            throw new RequiredError('projectid','Required parameter projectid was null or undefined when calling batchCreatePrivacyRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (policyids !== null && policyids !== undefined) {
                localVarQueryParameter['policyids'] = policyids;
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
            options.pathParams = { 'projectid': projectid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 选中多个策略为这些策略批量添加黑白名单防护规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateWhiteblackipRule(batchCreateWhiteblackipRuleRequest?: BatchCreateWhiteblackipRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{projectid}/waf/rule/whiteblackip",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectid;
            
            let policyids;
            
            let enterpriseProjectId;
            
            let contentType;

            if (batchCreateWhiteblackipRuleRequest !== null && batchCreateWhiteblackipRuleRequest !== undefined) {
                if (batchCreateWhiteblackipRuleRequest instanceof BatchCreateWhiteblackipRuleRequest) {
                    projectid = batchCreateWhiteblackipRuleRequest.projectid;
                    body = batchCreateWhiteblackipRuleRequest.body
                    policyids = batchCreateWhiteblackipRuleRequest.policyids;
                    enterpriseProjectId = batchCreateWhiteblackipRuleRequest.enterpriseProjectId;
                    contentType = batchCreateWhiteblackipRuleRequest.contentType;
                } else {
                    projectid = batchCreateWhiteblackipRuleRequest['projectid'];
                    body = batchCreateWhiteblackipRuleRequest['body'];
                    policyids = batchCreateWhiteblackipRuleRequest['policyids'];
                    enterpriseProjectId = batchCreateWhiteblackipRuleRequest['enterprise_project_id'];
                    contentType = batchCreateWhiteblackipRuleRequest['Content-Type'];
                }
            }

        
            if (projectid === null || projectid === undefined) {
            throw new RequiredError('projectid','Required parameter projectid was null or undefined when calling batchCreateWhiteblackipRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (policyids !== null && policyids !== undefined) {
                localVarQueryParameter['policyids'] = policyids;
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
            options.pathParams = { 'projectid': projectid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除告警通知
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteAlertNoticeConfig(batchDeleteAlertNoticeConfigRequest?: BatchDeleteAlertNoticeConfigRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/waf/alert/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let enterpriseProjectId;
            
            let xLanguage;
            
            let contentType;

            if (batchDeleteAlertNoticeConfigRequest !== null && batchDeleteAlertNoticeConfigRequest !== undefined) {
                if (batchDeleteAlertNoticeConfigRequest instanceof BatchDeleteAlertNoticeConfigRequest) {
                    enterpriseProjectId = batchDeleteAlertNoticeConfigRequest.enterpriseProjectId;
                    xLanguage = batchDeleteAlertNoticeConfigRequest.xLanguage;
                    body = batchDeleteAlertNoticeConfigRequest.body
                    contentType = batchDeleteAlertNoticeConfigRequest.contentType;
                } else {
                    enterpriseProjectId = batchDeleteAlertNoticeConfigRequest['enterpriseProjectId'];
                    xLanguage = batchDeleteAlertNoticeConfigRequest['X-Language'];
                    body = batchDeleteAlertNoticeConfigRequest['body'];
                    contentType = batchDeleteAlertNoticeConfigRequest['Content-Type'];
                }
            }

        
            if (enterpriseProjectId === null || enterpriseProjectId === undefined) {
                throw new RequiredError('enterpriseProjectId','Required parameter enterpriseProjectId was null or undefined when calling batchDeleteAlertNoticeConfig.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterpriseProjectId'] = enterpriseProjectId;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== null && contentType !== undefined) {
                localVarQueryParameter['Content-Type'] = contentType;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除租户域名
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteCompositeHosts(batchDeleteCompositeHostsRequest?: BatchDeleteCompositeHostsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/composite-waf/hosts/batch-delete",
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

            if (batchDeleteCompositeHostsRequest !== null && batchDeleteCompositeHostsRequest !== undefined) {
                if (batchDeleteCompositeHostsRequest instanceof BatchDeleteCompositeHostsRequest) {
                    contentType = batchDeleteCompositeHostsRequest.contentType;
                    body = batchDeleteCompositeHostsRequest.body
                    enterpriseProjectId = batchDeleteCompositeHostsRequest.enterpriseProjectId;
                } else {
                    contentType = batchDeleteCompositeHostsRequest['Content-Type'];
                    body = batchDeleteCompositeHostsRequest['body'];
                    enterpriseProjectId = batchDeleteCompositeHostsRequest['enterprise_project_id'];
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
         * 批量删除防护策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeletePolicies(batchDeletePoliciesRequest?: BatchDeletePoliciesRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/waf/policies/batch-delete",
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

            if (batchDeletePoliciesRequest !== null && batchDeletePoliciesRequest !== undefined) {
                if (batchDeletePoliciesRequest instanceof BatchDeletePoliciesRequest) {
                    contentType = batchDeletePoliciesRequest.contentType;
                    body = batchDeletePoliciesRequest.body
                    enterpriseProjectId = batchDeletePoliciesRequest.enterpriseProjectId;
                } else {
                    contentType = batchDeletePoliciesRequest['Content-Type'];
                    body = batchDeletePoliciesRequest['body'];
                    enterpriseProjectId = batchDeletePoliciesRequest['enterprise_project_id'];
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
         * **参数解释：**
         * 批量删除规则
         * **约束限制：**
         * 不涉及
         * **取值范围：**
         * 不涉及
         * **默认取值：**
         * 不涉及
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteRules(batchDeleteRulesRequest?: BatchDeleteRulesRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/waf/rule/{rule_type}/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let ruleType;

            if (batchDeleteRulesRequest !== null && batchDeleteRulesRequest !== undefined) {
                if (batchDeleteRulesRequest instanceof BatchDeleteRulesRequest) {
                    contentType = batchDeleteRulesRequest.contentType;
                    ruleType = batchDeleteRulesRequest.ruleType;
                    body = batchDeleteRulesRequest.body
                } else {
                    contentType = batchDeleteRulesRequest['Content-Type'];
                    ruleType = batchDeleteRulesRequest['rule_type'];
                    body = batchDeleteRulesRequest['body'];
                }
            }

        
            if (ruleType === null || ruleType === undefined) {
            throw new RequiredError('ruleType','Required parameter ruleType was null or undefined when calling batchDeleteRules.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'rule_type': ruleType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * **参数解释：**
         * 批量修改防敏感信息泄露规则
         * **约束限制：**
         * 不涉及
         * **取值范围：**
         * 不涉及
         * **默认取值：**
         * 不涉及
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUpdateAntileakageRules(batchUpdateAntileakageRulesRequest?: BatchUpdateAntileakageRulesRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/waf/rule/antileakage/batch-update",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (batchUpdateAntileakageRulesRequest !== null && batchUpdateAntileakageRulesRequest !== undefined) {
                if (batchUpdateAntileakageRulesRequest instanceof BatchUpdateAntileakageRulesRequest) {
                    contentType = batchUpdateAntileakageRulesRequest.contentType;
                    body = batchUpdateAntileakageRulesRequest.body
                } else {
                    contentType = batchUpdateAntileakageRulesRequest['Content-Type'];
                    body = batchUpdateAntileakageRulesRequest['body'];
                }
            }

        
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * **参数解释：**
         * 批量修改地理位置访问控制规则
         * **约束限制：**
         * 不涉及
         * **取值范围：**
         * 不涉及
         * **默认取值：**
         * 不涉及
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUpdateAntitamperRules(batchUpdateAntitamperRulesRequest?: BatchUpdateAntitamperRulesRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/waf/rule/antitamper/batch-update",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (batchUpdateAntitamperRulesRequest !== null && batchUpdateAntitamperRulesRequest !== undefined) {
                if (batchUpdateAntitamperRulesRequest instanceof BatchUpdateAntitamperRulesRequest) {
                    contentType = batchUpdateAntitamperRulesRequest.contentType;
                    body = batchUpdateAntitamperRulesRequest.body
                } else {
                    contentType = batchUpdateAntitamperRulesRequest['Content-Type'];
                    body = batchUpdateAntitamperRulesRequest['body'];
                }
            }

        
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * **参数解释：**
         * 批量更新BotM规则防护动作
         * **约束限制：**
         * 不涉及
         * **取值范围：**
         * 不涉及
         * **默认取值：**
         * 不涉及
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUpdateBotMRuleAction(batchUpdateBotMRuleActionRequest?: BatchUpdateBotMRuleActionRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/waf/policy/{policy_id}/bot-manager/rule/batch-update-action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let policyId;
            
            let contentType;

            if (batchUpdateBotMRuleActionRequest !== null && batchUpdateBotMRuleActionRequest !== undefined) {
                if (batchUpdateBotMRuleActionRequest instanceof BatchUpdateBotMRuleActionRequest) {
                    policyId = batchUpdateBotMRuleActionRequest.policyId;
                    contentType = batchUpdateBotMRuleActionRequest.contentType;
                    body = batchUpdateBotMRuleActionRequest.body
                } else {
                    policyId = batchUpdateBotMRuleActionRequest['policy_id'];
                    contentType = batchUpdateBotMRuleActionRequest['Content-Type'];
                    body = batchUpdateBotMRuleActionRequest['body'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling batchUpdateBotMRuleAction.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量更新BotM规则启用状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUpdateBotMRuleStatus(batchUpdateBotMRuleStatusRequest?: BatchUpdateBotMRuleStatusRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/waf/policy/{policy_id}/bot-manager/rule/batch-update-status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let policyId;
            
            let contentType;

            if (batchUpdateBotMRuleStatusRequest !== null && batchUpdateBotMRuleStatusRequest !== undefined) {
                if (batchUpdateBotMRuleStatusRequest instanceof BatchUpdateBotMRuleStatusRequest) {
                    policyId = batchUpdateBotMRuleStatusRequest.policyId;
                    contentType = batchUpdateBotMRuleStatusRequest.contentType;
                    body = batchUpdateBotMRuleStatusRequest.body
                } else {
                    policyId = batchUpdateBotMRuleStatusRequest['policy_id'];
                    contentType = batchUpdateBotMRuleStatusRequest['Content-Type'];
                    body = batchUpdateBotMRuleStatusRequest['body'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling batchUpdateBotMRuleStatus.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * **参数解释：**
         * 批量修改地理位置访问控制规则
         * **约束限制：**
         * 不涉及
         * **取值范围：**
         * 不涉及
         * **默认取值：**
         * 不涉及
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUpdateCcRules(batchUpdateCcRulesRequest?: BatchUpdateCcRulesRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/waf/rule/cc/batch-update",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (batchUpdateCcRulesRequest !== null && batchUpdateCcRulesRequest !== undefined) {
                if (batchUpdateCcRulesRequest instanceof BatchUpdateCcRulesRequest) {
                    contentType = batchUpdateCcRulesRequest.contentType;
                    body = batchUpdateCcRulesRequest.body
                } else {
                    contentType = batchUpdateCcRulesRequest['Content-Type'];
                    body = batchUpdateCcRulesRequest['body'];
                }
            }

        
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * **参数解释：**
         * 批量修改地理位置访问控制规则
         * **约束限制：**
         * 不涉及
         * **取值范围：**
         * 不涉及
         * **默认取值：**
         * 不涉及
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUpdateCustomRules(batchUpdateCustomRulesRequest?: BatchUpdateCustomRulesRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/waf/rule/custom/batch-update",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (batchUpdateCustomRulesRequest !== null && batchUpdateCustomRulesRequest !== undefined) {
                if (batchUpdateCustomRulesRequest instanceof BatchUpdateCustomRulesRequest) {
                    contentType = batchUpdateCustomRulesRequest.contentType;
                    body = batchUpdateCustomRulesRequest.body
                } else {
                    contentType = batchUpdateCustomRulesRequest['Content-Type'];
                    body = batchUpdateCustomRulesRequest['body'];
                }
            }

        
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * **参数解释：**
         * 批量修改地理位置访问控制规则
         * **约束限制：**
         * 不涉及
         * **取值范围：**
         * 不涉及
         * **默认取值：**
         * 不涉及
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUpdateGeoipRules(batchUpdateGeoipRulesRequest?: BatchUpdateGeoipRulesRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/waf/rule/geoip/batch-update",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (batchUpdateGeoipRulesRequest !== null && batchUpdateGeoipRulesRequest !== undefined) {
                if (batchUpdateGeoipRulesRequest instanceof BatchUpdateGeoipRulesRequest) {
                    contentType = batchUpdateGeoipRulesRequest.contentType;
                    body = batchUpdateGeoipRulesRequest.body
                } else {
                    contentType = batchUpdateGeoipRulesRequest['Content-Type'];
                    body = batchUpdateGeoipRulesRequest['body'];
                }
            }

        
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * **参数解释：**
         * 批量修改全局白名单规则
         * **约束限制：**
         * 不涉及
         * **取值范围：**
         * 不涉及
         * **默认取值：**
         * 不涉及
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUpdateIgnoreRules(batchUpdateIgnoreRulesRequest?: BatchUpdateIgnoreRulesRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/waf/rule/ignore/batch-update",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (batchUpdateIgnoreRulesRequest !== null && batchUpdateIgnoreRulesRequest !== undefined) {
                if (batchUpdateIgnoreRulesRequest instanceof BatchUpdateIgnoreRulesRequest) {
                    contentType = batchUpdateIgnoreRulesRequest.contentType;
                    body = batchUpdateIgnoreRulesRequest.body
                } else {
                    contentType = batchUpdateIgnoreRulesRequest['Content-Type'];
                    body = batchUpdateIgnoreRulesRequest['body'];
                }
            }

        
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * **参数解释：**
         * 批量修改地理位置访问控制规则
         * **约束限制：**
         * 不涉及
         * **取值范围：**
         * 不涉及
         * **默认取值：**
         * 不涉及
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUpdateIpReputationRules(batchUpdateIpReputationRulesRequest?: BatchUpdateIpReputationRulesRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/waf/rule/ip-reputation/batch-update",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (batchUpdateIpReputationRulesRequest !== null && batchUpdateIpReputationRulesRequest !== undefined) {
                if (batchUpdateIpReputationRulesRequest instanceof BatchUpdateIpReputationRulesRequest) {
                    contentType = batchUpdateIpReputationRulesRequest.contentType;
                    body = batchUpdateIpReputationRulesRequest.body
                } else {
                    contentType = batchUpdateIpReputationRulesRequest['Content-Type'];
                    body = batchUpdateIpReputationRulesRequest['body'];
                }
            }

        
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * **参数解释：**
         * 批量修改全局白名单规则
         * **约束限制：**
         * 不涉及
         * **取值范围：**
         * 不涉及
         * **默认取值：**
         * 不涉及
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUpdatePrivacyRules(batchUpdatePrivacyRulesRequest?: BatchUpdatePrivacyRulesRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/waf/rule/privacy/batch-update",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (batchUpdatePrivacyRulesRequest !== null && batchUpdatePrivacyRulesRequest !== undefined) {
                if (batchUpdatePrivacyRulesRequest instanceof BatchUpdatePrivacyRulesRequest) {
                    contentType = batchUpdatePrivacyRulesRequest.contentType;
                    body = batchUpdatePrivacyRulesRequest.body
                } else {
                    contentType = batchUpdatePrivacyRulesRequest['Content-Type'];
                    body = batchUpdatePrivacyRulesRequest['body'];
                }
            }

        
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * **参数解释：**
         * 批量修改防护状态
         * **约束限制：**
         * 不涉及
         * **取值范围：**
         * 不涉及
         * **默认取值：**
         * 不涉及
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUpdateProtectStatus(batchUpdateProtectStatusRequest?: BatchUpdateProtectStatusRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/waf/instance/protect_status",
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

            if (batchUpdateProtectStatusRequest !== null && batchUpdateProtectStatusRequest !== undefined) {
                if (batchUpdateProtectStatusRequest instanceof BatchUpdateProtectStatusRequest) {
                    contentType = batchUpdateProtectStatusRequest.contentType;
                    body = batchUpdateProtectStatusRequest.body
                    enterpriseProjectId = batchUpdateProtectStatusRequest.enterpriseProjectId;
                } else {
                    contentType = batchUpdateProtectStatusRequest['Content-Type'];
                    body = batchUpdateProtectStatusRequest['body'];
                    enterpriseProjectId = batchUpdateProtectStatusRequest['enterprise_project_id'];
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
         * **参数解释：**
         * 批量修改地理位置访问控制规则
         * **约束限制：**
         * 不涉及
         * **取值范围：**
         * 不涉及
         * **默认取值：**
         * 不涉及
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUpdateWhiteblackipRules(batchUpdateWhiteblackipRulesRequest?: BatchUpdateWhiteblackipRulesRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/waf/rule/whiteblackip/batch-update",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (batchUpdateWhiteblackipRulesRequest !== null && batchUpdateWhiteblackipRulesRequest !== undefined) {
                if (batchUpdateWhiteblackipRulesRequest instanceof BatchUpdateWhiteblackipRulesRequest) {
                    contentType = batchUpdateWhiteblackipRulesRequest.contentType;
                    body = batchUpdateWhiteblackipRulesRequest.body
                } else {
                    contentType = batchUpdateWhiteblackipRulesRequest['Content-Type'];
                    body = batchUpdateWhiteblackipRulesRequest['body'];
                }
            }

        
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
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
         * 查询独享引擎的代理
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkAgency(checkAgencyRequest?: CheckAgencyRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/premium-waf/agency",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;

            if (checkAgencyRequest !== null && checkAgencyRequest !== undefined) {
                if (checkAgencyRequest instanceof CheckAgencyRequest) {
                    contentType = checkAgencyRequest.contentType;
                } else {
                    contentType = checkAgencyRequest['Content-Type'];
                }
            }

        
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 按application规则类型获取内置规则类型
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        confirmApplicationTypes(confirmApplicationTypesRequest?: ConfirmApplicationTypesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/rules/application-types",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let offset;
            
            let limit;

            if (confirmApplicationTypesRequest !== null && confirmApplicationTypesRequest !== undefined) {
                if (confirmApplicationTypesRequest instanceof ConfirmApplicationTypesRequest) {
                    contentType = confirmApplicationTypesRequest.contentType;
                    offset = confirmApplicationTypesRequest.offset;
                    limit = confirmApplicationTypesRequest.limit;
                } else {
                    contentType = confirmApplicationTypesRequest['Content-Type'];
                    offset = confirmApplicationTypesRequest['offset'];
                    limit = confirmApplicationTypesRequest['limit'];
                }
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
         * 查询异步任务的执行状态详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        confirmAsyncJob(confirmAsyncJobRequest?: ConfirmAsyncJobRequest) {
            const options = {
                method: "GET",
                url: "/v1/{projectid}/waf/async-job/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let projectid;
            
            let enterpriseProjectId;
            
            let contentType;

            if (confirmAsyncJobRequest !== null && confirmAsyncJobRequest !== undefined) {
                if (confirmAsyncJobRequest instanceof ConfirmAsyncJobRequest) {
                    jobId = confirmAsyncJobRequest.jobId;
                    projectid = confirmAsyncJobRequest.projectid;
                    enterpriseProjectId = confirmAsyncJobRequest.enterpriseProjectId;
                    contentType = confirmAsyncJobRequest.contentType;
                } else {
                    jobId = confirmAsyncJobRequest['job_id'];
                    projectid = confirmAsyncJobRequest['projectid'];
                    enterpriseProjectId = confirmAsyncJobRequest['enterpriseProjectId'];
                    contentType = confirmAsyncJobRequest['Content-Type'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling confirmAsyncJob.');
            }
            if (projectid === null || projectid === undefined) {
            throw new RequiredError('projectid','Required parameter projectid was null or undefined when calling confirmAsyncJob.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterpriseProjectId'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId,'projectid': projectid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据Id查询机房IP情报防护规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        confirmIpReputationRule(confirmIpReputationRuleRequest?: ConfirmIpReputationRuleRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/policy/{policy_id}/ip-reputation/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let policyId;
            
            let ruleId;

            if (confirmIpReputationRuleRequest !== null && confirmIpReputationRuleRequest !== undefined) {
                if (confirmIpReputationRuleRequest instanceof ConfirmIpReputationRuleRequest) {
                    contentType = confirmIpReputationRuleRequest.contentType;
                    policyId = confirmIpReputationRuleRequest.policyId;
                    ruleId = confirmIpReputationRuleRequest.ruleId;
                } else {
                    contentType = confirmIpReputationRuleRequest['Content-Type'];
                    policyId = confirmIpReputationRuleRequest['policy_id'];
                    ruleId = confirmIpReputationRuleRequest['rule_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling confirmIpReputationRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling confirmIpReputationRule.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'policy_id': policyId,'rule_id': ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询敏感信息选项的详细信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        confirmPolicyAntileakageMap(confirmPolicyAntileakageMapRequest?: ConfirmPolicyAntileakageMapRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/tag/antileakage/map",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let lang;

            if (confirmPolicyAntileakageMapRequest !== null && confirmPolicyAntileakageMapRequest !== undefined) {
                if (confirmPolicyAntileakageMapRequest instanceof ConfirmPolicyAntileakageMapRequest) {
                    contentType = confirmPolicyAntileakageMapRequest.contentType;
                    lang = confirmPolicyAntileakageMapRequest.lang;
                } else {
                    contentType = confirmPolicyAntileakageMapRequest['Content-Type'];
                    lang = confirmPolicyAntileakageMapRequest['lang'];
                }
            }

        
            if (lang === null || lang === undefined) {
                throw new RequiredError('lang','Required parameter lang was null or undefined when calling confirmPolicyAntileakageMap.');
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
         * 查询威胁情报控制防护选项的详细信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        confirmPolicyIpReputationMap(confirmPolicyIpReputationMapRequest?: ConfirmPolicyIpReputationMapRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/tag/ip-reputation/map",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let lang;
            
            let type;

            if (confirmPolicyIpReputationMapRequest !== null && confirmPolicyIpReputationMapRequest !== undefined) {
                if (confirmPolicyIpReputationMapRequest instanceof ConfirmPolicyIpReputationMapRequest) {
                    contentType = confirmPolicyIpReputationMapRequest.contentType;
                    lang = confirmPolicyIpReputationMapRequest.lang;
                    type = confirmPolicyIpReputationMapRequest.type;
                } else {
                    contentType = confirmPolicyIpReputationMapRequest['Content-Type'];
                    lang = confirmPolicyIpReputationMapRequest['lang'];
                    type = confirmPolicyIpReputationMapRequest['type'];
                }
            }

        
            if (lang === null || lang === undefined) {
                throw new RequiredError('lang','Required parameter lang was null or undefined when calling confirmPolicyIpReputationMap.');
            }
            if (lang !== null && lang !== undefined) {
                localVarQueryParameter['lang'] = lang;
            }
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling confirmPolicyIpReputationMap.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 按防护规则类型获取内置规则类型
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        confirmProtectionTypes(confirmProtectionTypesRequest?: ConfirmProtectionTypesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/rules/protection-types",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let offset;
            
            let limit;

            if (confirmProtectionTypesRequest !== null && confirmProtectionTypesRequest !== undefined) {
                if (confirmProtectionTypesRequest instanceof ConfirmProtectionTypesRequest) {
                    contentType = confirmProtectionTypesRequest.contentType;
                    offset = confirmProtectionTypesRequest.offset;
                    limit = confirmProtectionTypesRequest.limit;
                } else {
                    contentType = confirmProtectionTypesRequest['Content-Type'];
                    offset = confirmProtectionTypesRequest['offset'];
                    limit = confirmProtectionTypesRequest['limit'];
                }
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
         * 查询告警可选事件类型
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        confirmThreatMap(confirmThreatMapRequest?: ConfirmThreatMapRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/tag/threat/map",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;

            if (confirmThreatMapRequest !== null && confirmThreatMapRequest !== undefined) {
                if (confirmThreatMapRequest instanceof ConfirmThreatMapRequest) {
                    contentType = confirmThreatMapRequest.contentType;
                } else {
                    contentType = confirmThreatMapRequest['Content-Type'];
                }
            }

        
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 使用标签过滤实例，标签管理服务需要提供按标签过滤各服务实例并汇总显示在列表中，需要各服务提供查询能力。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        confirmTmsResourceInstances(confirmTmsResourceInstancesRequest?: ConfirmTmsResourceInstancesRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/waf/{resource_type}/resource-instances/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let resourceType;

            if (confirmTmsResourceInstancesRequest !== null && confirmTmsResourceInstancesRequest !== undefined) {
                if (confirmTmsResourceInstancesRequest instanceof ConfirmTmsResourceInstancesRequest) {
                    contentType = confirmTmsResourceInstancesRequest.contentType;
                    resourceType = confirmTmsResourceInstancesRequest.resourceType;
                    body = confirmTmsResourceInstancesRequest.body
                } else {
                    contentType = confirmTmsResourceInstancesRequest['Content-Type'];
                    resourceType = confirmTmsResourceInstancesRequest['resource_type'];
                    body = confirmTmsResourceInstancesRequest['body'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling confirmTmsResourceInstances.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_type': resourceType, };
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
         * 根据Id复制防护策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        copyPolicyById(copyPolicyByIdRequest?: CopyPolicyByIdRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/waf/policies/{src_policy_id}/copy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let srcPolicyId;
            
            let destPolicyName;
            
            let enterpriseProjectId;

            if (copyPolicyByIdRequest !== null && copyPolicyByIdRequest !== undefined) {
                if (copyPolicyByIdRequest instanceof CopyPolicyByIdRequest) {
                    contentType = copyPolicyByIdRequest.contentType;
                    srcPolicyId = copyPolicyByIdRequest.srcPolicyId;
                    destPolicyName = copyPolicyByIdRequest.destPolicyName;
                    enterpriseProjectId = copyPolicyByIdRequest.enterpriseProjectId;
                } else {
                    contentType = copyPolicyByIdRequest['Content-Type'];
                    srcPolicyId = copyPolicyByIdRequest['src_policy_id'];
                    destPolicyName = copyPolicyByIdRequest['dest_policy_name'];
                    enterpriseProjectId = copyPolicyByIdRequest['enterprise_project_id'];
                }
            }

        
            if (srcPolicyId === null || srcPolicyId === undefined) {
            throw new RequiredError('srcPolicyId','Required parameter srcPolicyId was null or undefined when calling copyPolicyById.');
            }
            if (destPolicyName === null || destPolicyName === undefined) {
                throw new RequiredError('destPolicyName','Required parameter destPolicyName was null or undefined when calling copyPolicyById.');
            }
            if (destPolicyName !== null && destPolicyName !== undefined) {
                localVarQueryParameter['dest_policy_name'] = destPolicyName;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'src_policy_id': srcPolicyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建独享引擎的代理
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAgency(createAgencyRequest?: CreateAgencyRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/premium-waf/agency",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (createAgencyRequest !== null && createAgencyRequest !== undefined) {
                if (createAgencyRequest instanceof CreateAgencyRequest) {
                    contentType = createAgencyRequest.contentType;
                    body = createAgencyRequest.body
                } else {
                    contentType = createAgencyRequest['Content-Type'];
                    body = createAgencyRequest['body'];
                }
            }

        
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * **参数解释：**
         * 创建告警通知
         * **约束限制：**
         * 不涉及
         * **取值范围：**
         * 不涉及
         * **默认取值：**
         * 不涉及
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAlertNoticeConfig(createAlertNoticeConfigRequest?: CreateAlertNoticeConfigRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/waf/alert",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let xLanguage;
            
            let contentType;
            
            let enterpriseProjectId;

            if (createAlertNoticeConfigRequest !== null && createAlertNoticeConfigRequest !== undefined) {
                if (createAlertNoticeConfigRequest instanceof CreateAlertNoticeConfigRequest) {
                    xLanguage = createAlertNoticeConfigRequest.xLanguage;
                    contentType = createAlertNoticeConfigRequest.contentType;
                    enterpriseProjectId = createAlertNoticeConfigRequest.enterpriseProjectId;
                    body = createAlertNoticeConfigRequest.body
                } else {
                    xLanguage = createAlertNoticeConfigRequest['X-Language'];
                    contentType = createAlertNoticeConfigRequest['Content-Type'];
                    enterpriseProjectId = createAlertNoticeConfigRequest['enterpriseProjectId'];
                    body = createAlertNoticeConfigRequest['body'];
                }
            }

        
            if (contentType === null || contentType === undefined) {
                throw new RequiredError('contentType','Required parameter contentType was null or undefined when calling createAlertNoticeConfig.');
            }
            if (contentType !== null && contentType !== undefined) {
                localVarQueryParameter['Content-Type'] = contentType;
            }
            if (enterpriseProjectId === null || enterpriseProjectId === undefined) {
                throw new RequiredError('enterpriseProjectId','Required parameter enterpriseProjectId was null or undefined when calling createAlertNoticeConfig.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterpriseProjectId'] = enterpriseProjectId;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
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
         * 创建BotM流量检测条件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createBotMTrafficDetectionCondition(createBotMTrafficDetectionConditionRequest?: CreateBotMTrafficDetectionConditionRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/waf/policy/{policy_id}/bot-manager/traffic-detection-condition",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let policyId;
            
            let contentType;
            
            let enterpriseProjectId;

            if (createBotMTrafficDetectionConditionRequest !== null && createBotMTrafficDetectionConditionRequest !== undefined) {
                if (createBotMTrafficDetectionConditionRequest instanceof CreateBotMTrafficDetectionConditionRequest) {
                    policyId = createBotMTrafficDetectionConditionRequest.policyId;
                    contentType = createBotMTrafficDetectionConditionRequest.contentType;
                    body = createBotMTrafficDetectionConditionRequest.body
                    enterpriseProjectId = createBotMTrafficDetectionConditionRequest.enterpriseProjectId;
                } else {
                    policyId = createBotMTrafficDetectionConditionRequest['policy_id'];
                    contentType = createBotMTrafficDetectionConditionRequest['Content-Type'];
                    body = createBotMTrafficDetectionConditionRequest['body'];
                    enterpriseProjectId = createBotMTrafficDetectionConditionRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling createBotMTrafficDetectionCondition.');
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
         * **参数解释：**
         * 下发自定义导出攻击事件的异步任务
         * **约束限制：**
         * 不涉及
         * **取值范围：**
         * 不涉及
         * **默认取值：**
         * 不涉及
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createEventExportJob(createEventExportJobRequest?: CreateEventExportJobRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/waf/event/job/export",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (createEventExportJobRequest !== null && createEventExportJobRequest !== undefined) {
                if (createEventExportJobRequest instanceof CreateEventExportJobRequest) {
                    contentType = createEventExportJobRequest.contentType;
                    body = createEventExportJobRequest.body
                } else {
                    contentType = createEventExportJobRequest['Content-Type'];
                    body = createEventExportJobRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
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
         * 创建IP情报规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createIpReputationRule(createIpReputationRuleRequest?: CreateIpReputationRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/waf/policy/{policy_id}/ip-reputation",
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

            if (createIpReputationRuleRequest !== null && createIpReputationRuleRequest !== undefined) {
                if (createIpReputationRuleRequest instanceof CreateIpReputationRuleRequest) {
                    contentType = createIpReputationRuleRequest.contentType;
                    policyId = createIpReputationRuleRequest.policyId;
                    body = createIpReputationRuleRequest.body
                    enterpriseProjectId = createIpReputationRuleRequest.enterpriseProjectId;
                } else {
                    contentType = createIpReputationRuleRequest['Content-Type'];
                    policyId = createIpReputationRuleRequest['policy_id'];
                    body = createIpReputationRuleRequest['body'];
                    enterpriseProjectId = createIpReputationRuleRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling createIpReputationRule.');
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
         * 创建安全报告订阅
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSecurityReportSubscription(createSecurityReportSubscriptionRequest?: CreateSecurityReportSubscriptionRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/waf/security-report/subscriptions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (createSecurityReportSubscriptionRequest !== null && createSecurityReportSubscriptionRequest !== undefined) {
                if (createSecurityReportSubscriptionRequest instanceof CreateSecurityReportSubscriptionRequest) {
                    contentType = createSecurityReportSubscriptionRequest.contentType;
                    body = createSecurityReportSubscriptionRequest.body
                } else {
                    contentType = createSecurityReportSubscriptionRequest['Content-Type'];
                    body = createSecurityReportSubscriptionRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
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
         * 创建独享引擎的代理
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAgency(deleteAgencyRequest?: DeleteAgencyRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/premium-waf/agency",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let purged;
            
            let roleIdList;

            if (deleteAgencyRequest !== null && deleteAgencyRequest !== undefined) {
                if (deleteAgencyRequest instanceof DeleteAgencyRequest) {
                    contentType = deleteAgencyRequest.contentType;
                    purged = deleteAgencyRequest.purged;
                    roleIdList = deleteAgencyRequest.roleIdList;
                } else {
                    contentType = deleteAgencyRequest['Content-Type'];
                    purged = deleteAgencyRequest['purged'];
                    roleIdList = deleteAgencyRequest['role_id_list'];
                }
            }

        
            if (purged !== null && purged !== undefined) {
                localVarQueryParameter['purged'] = purged;
            }
            if (roleIdList !== null && roleIdList !== undefined) {
                localVarQueryParameter['role_id_list'] = roleIdList;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除告警通知配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAlertNoticeConfig(deleteAlertNoticeConfigRequest?: DeleteAlertNoticeConfigRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/waf/alert/{alert_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let xLanguage;
            
            let alertId;

            if (deleteAlertNoticeConfigRequest !== null && deleteAlertNoticeConfigRequest !== undefined) {
                if (deleteAlertNoticeConfigRequest instanceof DeleteAlertNoticeConfigRequest) {
                    contentType = deleteAlertNoticeConfigRequest.contentType;
                    xLanguage = deleteAlertNoticeConfigRequest.xLanguage;
                    alertId = deleteAlertNoticeConfigRequest.alertId;
                } else {
                    contentType = deleteAlertNoticeConfigRequest['Content-Type'];
                    xLanguage = deleteAlertNoticeConfigRequest['X-Language'];
                    alertId = deleteAlertNoticeConfigRequest['alert_id'];
                }
            }

        
            if (alertId === null || alertId === undefined) {
            throw new RequiredError('alertId','Required parameter alertId was null or undefined when calling deleteAlertNoticeConfig.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'alert_id': alertId, };
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
         * 删除BotM流量检测条件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteBotMTrafficDetectionCondition(deleteBotMTrafficDetectionConditionRequest?: DeleteBotMTrafficDetectionConditionRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/waf/policy/{policy_id}/bot-manager/traffic-detection-condition/{condition_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let policyId;
            
            let conditionId;
            
            let contentType;

            if (deleteBotMTrafficDetectionConditionRequest !== null && deleteBotMTrafficDetectionConditionRequest !== undefined) {
                if (deleteBotMTrafficDetectionConditionRequest instanceof DeleteBotMTrafficDetectionConditionRequest) {
                    policyId = deleteBotMTrafficDetectionConditionRequest.policyId;
                    conditionId = deleteBotMTrafficDetectionConditionRequest.conditionId;
                    contentType = deleteBotMTrafficDetectionConditionRequest.contentType;
                } else {
                    policyId = deleteBotMTrafficDetectionConditionRequest['policy_id'];
                    conditionId = deleteBotMTrafficDetectionConditionRequest['condition_id'];
                    contentType = deleteBotMTrafficDetectionConditionRequest['Content-Type'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling deleteBotMTrafficDetectionCondition.');
            }
            if (conditionId === null || conditionId === undefined) {
            throw new RequiredError('conditionId','Required parameter conditionId was null or undefined when calling deleteBotMTrafficDetectionCondition.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'policy_id': policyId,'condition_id': conditionId, };
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
         * 删除IP情报防护规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteIpReputationRule(deleteIpReputationRuleRequest?: DeleteIpReputationRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/waf/policy/{policy_id}/ip-reputation/{rule_id}",
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

            if (deleteIpReputationRuleRequest !== null && deleteIpReputationRuleRequest !== undefined) {
                if (deleteIpReputationRuleRequest instanceof DeleteIpReputationRuleRequest) {
                    contentType = deleteIpReputationRuleRequest.contentType;
                    policyId = deleteIpReputationRuleRequest.policyId;
                    ruleId = deleteIpReputationRuleRequest.ruleId;
                    enterpriseProjectId = deleteIpReputationRuleRequest.enterpriseProjectId;
                } else {
                    contentType = deleteIpReputationRuleRequest['Content-Type'];
                    policyId = deleteIpReputationRuleRequest['policy_id'];
                    ruleId = deleteIpReputationRuleRequest['rule_id'];
                    enterpriseProjectId = deleteIpReputationRuleRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling deleteIpReputationRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling deleteIpReputationRule.');
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
         * 删除安全报告订阅
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSecurityReportSubscription(deleteSecurityReportSubscriptionRequest?: DeleteSecurityReportSubscriptionRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/waf/security-report/subscriptions/{subscription_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let subscriptionId;
            
            let contentType;

            if (deleteSecurityReportSubscriptionRequest !== null && deleteSecurityReportSubscriptionRequest !== undefined) {
                if (deleteSecurityReportSubscriptionRequest instanceof DeleteSecurityReportSubscriptionRequest) {
                    subscriptionId = deleteSecurityReportSubscriptionRequest.subscriptionId;
                    contentType = deleteSecurityReportSubscriptionRequest.contentType;
                } else {
                    subscriptionId = deleteSecurityReportSubscriptionRequest['subscription_id'];
                    contentType = deleteSecurityReportSubscriptionRequest['Content-Type'];
                }
            }

        
            if (subscriptionId === null || subscriptionId === undefined) {
            throw new RequiredError('subscriptionId','Required parameter subscriptionId was null or undefined when calling deleteSecurityReportSubscription.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'subscription_id': subscriptionId, };
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
         * 查询所有策略网页防篡改
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAntiTamperPolicyRules(listAntiTamperPolicyRulesRequest?: ListAntiTamperPolicyRulesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{projectid}/waf/rule/antitamper",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectid;
            
            let policyids;
            
            let enterpriseProjectId;
            
            let page;
            
            let pagesize;
            
            let contentType;

            if (listAntiTamperPolicyRulesRequest !== null && listAntiTamperPolicyRulesRequest !== undefined) {
                if (listAntiTamperPolicyRulesRequest instanceof ListAntiTamperPolicyRulesRequest) {
                    projectid = listAntiTamperPolicyRulesRequest.projectid;
                    policyids = listAntiTamperPolicyRulesRequest.policyids;
                    enterpriseProjectId = listAntiTamperPolicyRulesRequest.enterpriseProjectId;
                    page = listAntiTamperPolicyRulesRequest.page;
                    pagesize = listAntiTamperPolicyRulesRequest.pagesize;
                    contentType = listAntiTamperPolicyRulesRequest.contentType;
                } else {
                    projectid = listAntiTamperPolicyRulesRequest['projectid'];
                    policyids = listAntiTamperPolicyRulesRequest['policyids'];
                    enterpriseProjectId = listAntiTamperPolicyRulesRequest['enterprise_project_id'];
                    page = listAntiTamperPolicyRulesRequest['page'];
                    pagesize = listAntiTamperPolicyRulesRequest['pagesize'];
                    contentType = listAntiTamperPolicyRulesRequest['Content-Type'];
                }
            }

        
            if (projectid === null || projectid === undefined) {
            throw new RequiredError('projectid','Required parameter projectid was null or undefined when calling listAntiTamperPolicyRules.');
            }
            if (policyids !== null && policyids !== undefined) {
                localVarQueryParameter['policyids'] = policyids;
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
            options.pathParams = { 'projectid': projectid, };
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
         * 查询所有策略防敏感信息泄漏规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAntileakagePolicyRules(listAntileakagePolicyRulesRequest?: ListAntileakagePolicyRulesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{projectid}/waf/rule/antileakage",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectid;
            
            let policyids;
            
            let enterpriseProjectId;
            
            let page;
            
            let pagesize;
            
            let contentType;

            if (listAntileakagePolicyRulesRequest !== null && listAntileakagePolicyRulesRequest !== undefined) {
                if (listAntileakagePolicyRulesRequest instanceof ListAntileakagePolicyRulesRequest) {
                    projectid = listAntileakagePolicyRulesRequest.projectid;
                    policyids = listAntileakagePolicyRulesRequest.policyids;
                    enterpriseProjectId = listAntileakagePolicyRulesRequest.enterpriseProjectId;
                    page = listAntileakagePolicyRulesRequest.page;
                    pagesize = listAntileakagePolicyRulesRequest.pagesize;
                    contentType = listAntileakagePolicyRulesRequest.contentType;
                } else {
                    projectid = listAntileakagePolicyRulesRequest['projectid'];
                    policyids = listAntileakagePolicyRulesRequest['policyids'];
                    enterpriseProjectId = listAntileakagePolicyRulesRequest['enterprise_project_id'];
                    page = listAntileakagePolicyRulesRequest['page'];
                    pagesize = listAntileakagePolicyRulesRequest['pagesize'];
                    contentType = listAntileakagePolicyRulesRequest['Content-Type'];
                }
            }

        
            if (projectid === null || projectid === undefined) {
            throw new RequiredError('projectid','Required parameter projectid was null or undefined when calling listAntileakagePolicyRules.');
            }
            if (policyids !== null && policyids !== undefined) {
                localVarQueryParameter['policyids'] = policyids;
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
            options.pathParams = { 'projectid': projectid, };
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
         * 查询BotM中bot的请求分布
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBotMRequestDistribution(listBotMRequestDistributionRequest?: ListBotMRequestDistributionRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/overviews/bot-manager/bot-request-distribution",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let startTime;
            
            let endTime;
            
            let tenantId;
            
            let enterpriseProjectId;
            
            let hosts;
            
            let domains;
            
            let region;
            
            let site;

            if (listBotMRequestDistributionRequest !== null && listBotMRequestDistributionRequest !== undefined) {
                if (listBotMRequestDistributionRequest instanceof ListBotMRequestDistributionRequest) {
                    contentType = listBotMRequestDistributionRequest.contentType;
                    startTime = listBotMRequestDistributionRequest.startTime;
                    endTime = listBotMRequestDistributionRequest.endTime;
                    tenantId = listBotMRequestDistributionRequest.tenantId;
                    enterpriseProjectId = listBotMRequestDistributionRequest.enterpriseProjectId;
                    hosts = listBotMRequestDistributionRequest.hosts;
                    domains = listBotMRequestDistributionRequest.domains;
                    region = listBotMRequestDistributionRequest.region;
                    site = listBotMRequestDistributionRequest.site;
                } else {
                    contentType = listBotMRequestDistributionRequest['Content-Type'];
                    startTime = listBotMRequestDistributionRequest['start_time'];
                    endTime = listBotMRequestDistributionRequest['end_time'];
                    tenantId = listBotMRequestDistributionRequest['tenant_id'];
                    enterpriseProjectId = listBotMRequestDistributionRequest['enterprise_project_id'];
                    hosts = listBotMRequestDistributionRequest['hosts'];
                    domains = listBotMRequestDistributionRequest['domains'];
                    region = listBotMRequestDistributionRequest['region'];
                    site = listBotMRequestDistributionRequest['site'];
                }
            }

        
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listBotMRequestDistribution.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listBotMRequestDistribution.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (tenantId !== null && tenantId !== undefined) {
                localVarQueryParameter['tenant_id'] = tenantId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (hosts !== null && hosts !== undefined) {
                localVarQueryParameter['hosts'] = hosts;
            }
            if (domains !== null && domains !== undefined) {
                localVarQueryParameter['domains'] = domains;
            }
            if (region !== null && region !== undefined) {
                localVarQueryParameter['region'] = region;
            }
            if (site !== null && site !== undefined) {
                localVarQueryParameter['site'] = site;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询BotM所有规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBotMRules(listBotMRulesRequest?: ListBotMRulesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/policy/{policy_id}/bot-manager",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let policyId;

            if (listBotMRulesRequest !== null && listBotMRulesRequest !== undefined) {
                if (listBotMRulesRequest instanceof ListBotMRulesRequest) {
                    policyId = listBotMRulesRequest.policyId;
                } else {
                    policyId = listBotMRulesRequest['policy_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling listBotMRules.');
            }

            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询BotM中bot的评分分布
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBotMScoreDistribution(listBotMScoreDistributionRequest?: ListBotMScoreDistributionRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/overviews/bot-manager/bot-score-distribution",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let startTime;
            
            let endTime;
            
            let tenantId;
            
            let enterpriseProjectId;
            
            let hosts;
            
            let domains;
            
            let region;
            
            let site;

            if (listBotMScoreDistributionRequest !== null && listBotMScoreDistributionRequest !== undefined) {
                if (listBotMScoreDistributionRequest instanceof ListBotMScoreDistributionRequest) {
                    contentType = listBotMScoreDistributionRequest.contentType;
                    startTime = listBotMScoreDistributionRequest.startTime;
                    endTime = listBotMScoreDistributionRequest.endTime;
                    tenantId = listBotMScoreDistributionRequest.tenantId;
                    enterpriseProjectId = listBotMScoreDistributionRequest.enterpriseProjectId;
                    hosts = listBotMScoreDistributionRequest.hosts;
                    domains = listBotMScoreDistributionRequest.domains;
                    region = listBotMScoreDistributionRequest.region;
                    site = listBotMScoreDistributionRequest.site;
                } else {
                    contentType = listBotMScoreDistributionRequest['Content-Type'];
                    startTime = listBotMScoreDistributionRequest['start_time'];
                    endTime = listBotMScoreDistributionRequest['end_time'];
                    tenantId = listBotMScoreDistributionRequest['tenant_id'];
                    enterpriseProjectId = listBotMScoreDistributionRequest['enterprise_project_id'];
                    hosts = listBotMScoreDistributionRequest['hosts'];
                    domains = listBotMScoreDistributionRequest['domains'];
                    region = listBotMScoreDistributionRequest['region'];
                    site = listBotMScoreDistributionRequest['site'];
                }
            }

        
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listBotMScoreDistribution.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listBotMScoreDistribution.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (tenantId !== null && tenantId !== undefined) {
                localVarQueryParameter['tenant_id'] = tenantId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (hosts !== null && hosts !== undefined) {
                localVarQueryParameter['hosts'] = hosts;
            }
            if (domains !== null && domains !== undefined) {
                localVarQueryParameter['domains'] = domains;
            }
            if (region !== null && region !== undefined) {
                localVarQueryParameter['region'] = region;
            }
            if (site !== null && site !== undefined) {
                localVarQueryParameter['site'] = site;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询BotM中bot的请求时间趋势
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBotMTimeline(listBotMTimelineRequest?: ListBotMTimelineRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/overviews/bot-manager/bot-request-on-timeline",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let startTime;
            
            let endTime;
            
            let tenantId;
            
            let enterpriseProjectId;
            
            let hosts;
            
            let domain;
            
            let region;
            
            let site;

            if (listBotMTimelineRequest !== null && listBotMTimelineRequest !== undefined) {
                if (listBotMTimelineRequest instanceof ListBotMTimelineRequest) {
                    contentType = listBotMTimelineRequest.contentType;
                    startTime = listBotMTimelineRequest.startTime;
                    endTime = listBotMTimelineRequest.endTime;
                    tenantId = listBotMTimelineRequest.tenantId;
                    enterpriseProjectId = listBotMTimelineRequest.enterpriseProjectId;
                    hosts = listBotMTimelineRequest.hosts;
                    domain = listBotMTimelineRequest.domain;
                    region = listBotMTimelineRequest.region;
                    site = listBotMTimelineRequest.site;
                } else {
                    contentType = listBotMTimelineRequest['Content-Type'];
                    startTime = listBotMTimelineRequest['start_time'];
                    endTime = listBotMTimelineRequest['end_time'];
                    tenantId = listBotMTimelineRequest['tenant_id'];
                    enterpriseProjectId = listBotMTimelineRequest['enterprise_project_id'];
                    hosts = listBotMTimelineRequest['hosts'];
                    domain = listBotMTimelineRequest['domain'];
                    region = listBotMTimelineRequest['region'];
                    site = listBotMTimelineRequest['site'];
                }
            }

        
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listBotMTimeline.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listBotMTimeline.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (tenantId !== null && tenantId !== undefined) {
                localVarQueryParameter['tenant_id'] = tenantId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (hosts !== null && hosts !== undefined) {
                localVarQueryParameter['hosts'] = hosts;
            }
            if (domain !== null && domain !== undefined) {
                localVarQueryParameter['domain'] = domain;
            }
            if (region !== null && region !== undefined) {
                localVarQueryParameter['region'] = region;
            }
            if (site !== null && site !== undefined) {
                localVarQueryParameter['site'] = site;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询BotM中topn的bot请求
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBotMTopnRequest(listBotMTopnRequestRequest?: ListBotMTopnRequestRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/overviews/bot-manager/topn-bot-request",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let startTime;
            
            let endTime;
            
            let tenantId;
            
            let enterpriseProjectId;
            
            let hosts;
            
            let topn;
            
            let region;
            
            let site;

            if (listBotMTopnRequestRequest !== null && listBotMTopnRequestRequest !== undefined) {
                if (listBotMTopnRequestRequest instanceof ListBotMTopnRequestRequest) {
                    contentType = listBotMTopnRequestRequest.contentType;
                    startTime = listBotMTopnRequestRequest.startTime;
                    endTime = listBotMTopnRequestRequest.endTime;
                    tenantId = listBotMTopnRequestRequest.tenantId;
                    enterpriseProjectId = listBotMTopnRequestRequest.enterpriseProjectId;
                    hosts = listBotMTopnRequestRequest.hosts;
                    topn = listBotMTopnRequestRequest.topn;
                    region = listBotMTopnRequestRequest.region;
                    site = listBotMTopnRequestRequest.site;
                } else {
                    contentType = listBotMTopnRequestRequest['Content-Type'];
                    startTime = listBotMTopnRequestRequest['start_time'];
                    endTime = listBotMTopnRequestRequest['end_time'];
                    tenantId = listBotMTopnRequestRequest['tenant_id'];
                    enterpriseProjectId = listBotMTopnRequestRequest['enterprise_project_id'];
                    hosts = listBotMTopnRequestRequest['hosts'];
                    topn = listBotMTopnRequestRequest['topn'];
                    region = listBotMTopnRequestRequest['region'];
                    site = listBotMTopnRequestRequest['site'];
                }
            }

        
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listBotMTopnRequest.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listBotMTopnRequest.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (tenantId !== null && tenantId !== undefined) {
                localVarQueryParameter['tenant_id'] = tenantId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (hosts !== null && hosts !== undefined) {
                localVarQueryParameter['hosts'] = hosts;
            }
            if (topn !== null && topn !== undefined) {
                localVarQueryParameter['topn'] = topn;
            }
            if (region !== null && region !== undefined) {
                localVarQueryParameter['region'] = region;
            }
            if (site !== null && site !== undefined) {
                localVarQueryParameter['site'] = site;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询所有策略CC规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCcPolicyRules(listCcPolicyRulesRequest?: ListCcPolicyRulesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{projectid}/waf/rule/cc",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectid;
            
            let policyids;
            
            let enterpriseProjectId;
            
            let page;
            
            let pagesize;
            
            let contentType;

            if (listCcPolicyRulesRequest !== null && listCcPolicyRulesRequest !== undefined) {
                if (listCcPolicyRulesRequest instanceof ListCcPolicyRulesRequest) {
                    projectid = listCcPolicyRulesRequest.projectid;
                    policyids = listCcPolicyRulesRequest.policyids;
                    enterpriseProjectId = listCcPolicyRulesRequest.enterpriseProjectId;
                    page = listCcPolicyRulesRequest.page;
                    pagesize = listCcPolicyRulesRequest.pagesize;
                    contentType = listCcPolicyRulesRequest.contentType;
                } else {
                    projectid = listCcPolicyRulesRequest['projectid'];
                    policyids = listCcPolicyRulesRequest['policyids'];
                    enterpriseProjectId = listCcPolicyRulesRequest['enterprise_project_id'];
                    page = listCcPolicyRulesRequest['page'];
                    pagesize = listCcPolicyRulesRequest['pagesize'];
                    contentType = listCcPolicyRulesRequest['Content-Type'];
                }
            }

        
            if (projectid === null || projectid === undefined) {
            throw new RequiredError('projectid','Required parameter projectid was null or undefined when calling listCcPolicyRules.');
            }
            if (policyids !== null && policyids !== undefined) {
                localVarQueryParameter['policyids'] = policyids;
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
            options.pathParams = { 'projectid': projectid, };
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
            
            let queryScm;

            if (listCertificatesRequest !== null && listCertificatesRequest !== undefined) {
                if (listCertificatesRequest instanceof ListCertificatesRequest) {
                    contentType = listCertificatesRequest.contentType;
                    enterpriseProjectId = listCertificatesRequest.enterpriseProjectId;
                    page = listCertificatesRequest.page;
                    pagesize = listCertificatesRequest.pagesize;
                    name = listCertificatesRequest.name;
                    host = listCertificatesRequest.host;
                    expStatus = listCertificatesRequest.expStatus;
                    queryScm = listCertificatesRequest.queryScm;
                } else {
                    contentType = listCertificatesRequest['Content-Type'];
                    enterpriseProjectId = listCertificatesRequest['enterprise_project_id'];
                    page = listCertificatesRequest['page'];
                    pagesize = listCertificatesRequest['pagesize'];
                    name = listCertificatesRequest['name'];
                    host = listCertificatesRequest['host'];
                    expStatus = listCertificatesRequest['exp_status'];
                    queryScm = listCertificatesRequest['query_scm'];
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
            if (queryScm !== null && queryScm !== undefined) {
                localVarQueryParameter['query_scm'] = queryScm;
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
         * 查询所有策略精准防护规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCustomPolicyRules(listCustomPolicyRulesRequest?: ListCustomPolicyRulesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{projectid}/waf/rule/custom",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectid;
            
            let policyids;
            
            let enterpriseProjectId;
            
            let page;
            
            let pagesize;
            
            let contentType;

            if (listCustomPolicyRulesRequest !== null && listCustomPolicyRulesRequest !== undefined) {
                if (listCustomPolicyRulesRequest instanceof ListCustomPolicyRulesRequest) {
                    projectid = listCustomPolicyRulesRequest.projectid;
                    policyids = listCustomPolicyRulesRequest.policyids;
                    enterpriseProjectId = listCustomPolicyRulesRequest.enterpriseProjectId;
                    page = listCustomPolicyRulesRequest.page;
                    pagesize = listCustomPolicyRulesRequest.pagesize;
                    contentType = listCustomPolicyRulesRequest.contentType;
                } else {
                    projectid = listCustomPolicyRulesRequest['projectid'];
                    policyids = listCustomPolicyRulesRequest['policyids'];
                    enterpriseProjectId = listCustomPolicyRulesRequest['enterprise_project_id'];
                    page = listCustomPolicyRulesRequest['page'];
                    pagesize = listCustomPolicyRulesRequest['pagesize'];
                    contentType = listCustomPolicyRulesRequest['Content-Type'];
                }
            }

        
            if (projectid === null || projectid === undefined) {
            throw new RequiredError('projectid','Required parameter projectid was null or undefined when calling listCustomPolicyRules.');
            }
            if (policyids !== null && policyids !== undefined) {
                localVarQueryParameter['policyids'] = policyids;
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
            options.pathParams = { 'projectid': projectid, };
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
         * 查询事件日志下载的url
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEventLog(listEventLogRequest?: ListEventLogRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/event/dump",
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

            if (listEventLogRequest !== null && listEventLogRequest !== undefined) {
                if (listEventLogRequest instanceof ListEventLogRequest) {
                    contentType = listEventLogRequest.contentType;
                    page = listEventLogRequest.page;
                    pagesize = listEventLogRequest.pagesize;
                } else {
                    contentType = listEventLogRequest['Content-Type'];
                    page = listEventLogRequest['page'];
                    pagesize = listEventLogRequest['pagesize'];
                }
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
         * 查询所有策略地理位置访问控制
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGeoIpPolicyRules(listGeoIpPolicyRulesRequest?: ListGeoIpPolicyRulesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{projectid}/waf/rule/geoip",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectid;
            
            let policyids;
            
            let enterpriseProjectId;
            
            let page;
            
            let pagesize;
            
            let contentType;

            if (listGeoIpPolicyRulesRequest !== null && listGeoIpPolicyRulesRequest !== undefined) {
                if (listGeoIpPolicyRulesRequest instanceof ListGeoIpPolicyRulesRequest) {
                    projectid = listGeoIpPolicyRulesRequest.projectid;
                    policyids = listGeoIpPolicyRulesRequest.policyids;
                    enterpriseProjectId = listGeoIpPolicyRulesRequest.enterpriseProjectId;
                    page = listGeoIpPolicyRulesRequest.page;
                    pagesize = listGeoIpPolicyRulesRequest.pagesize;
                    contentType = listGeoIpPolicyRulesRequest.contentType;
                } else {
                    projectid = listGeoIpPolicyRulesRequest['projectid'];
                    policyids = listGeoIpPolicyRulesRequest['policyids'];
                    enterpriseProjectId = listGeoIpPolicyRulesRequest['enterprise_project_id'];
                    page = listGeoIpPolicyRulesRequest['page'];
                    pagesize = listGeoIpPolicyRulesRequest['pagesize'];
                    contentType = listGeoIpPolicyRulesRequest['Content-Type'];
                }
            }

        
            if (projectid === null || projectid === undefined) {
            throw new RequiredError('projectid','Required parameter projectid was null or undefined when calling listGeoIpPolicyRules.');
            }
            if (policyids !== null && policyids !== undefined) {
                localVarQueryParameter['policyids'] = policyids;
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
            options.pathParams = { 'projectid': projectid, };
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
         * **参数解释：**
         * 返回路由信息。
         * &gt; 该API局点受限使用，后续将下线。
         * **约束限制：**
         * 不涉及
         * **取值范围：**
         * 不涉及
         * **默认取值：**
         * 不涉及
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
         * 查询所有策略全局白名单
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listIgnorePolicyRules(listIgnorePolicyRulesRequest?: ListIgnorePolicyRulesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{projectid}/waf/rule/ignore",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectid;
            
            let policyids;
            
            let enterpriseProjectId;
            
            let page;
            
            let pagesize;
            
            let contentType;

            if (listIgnorePolicyRulesRequest !== null && listIgnorePolicyRulesRequest !== undefined) {
                if (listIgnorePolicyRulesRequest instanceof ListIgnorePolicyRulesRequest) {
                    projectid = listIgnorePolicyRulesRequest.projectid;
                    policyids = listIgnorePolicyRulesRequest.policyids;
                    enterpriseProjectId = listIgnorePolicyRulesRequest.enterpriseProjectId;
                    page = listIgnorePolicyRulesRequest.page;
                    pagesize = listIgnorePolicyRulesRequest.pagesize;
                    contentType = listIgnorePolicyRulesRequest.contentType;
                } else {
                    projectid = listIgnorePolicyRulesRequest['projectid'];
                    policyids = listIgnorePolicyRulesRequest['policyids'];
                    enterpriseProjectId = listIgnorePolicyRulesRequest['enterprise_project_id'];
                    page = listIgnorePolicyRulesRequest['page'];
                    pagesize = listIgnorePolicyRulesRequest['pagesize'];
                    contentType = listIgnorePolicyRulesRequest['Content-Type'];
                }
            }

        
            if (projectid === null || projectid === undefined) {
            throw new RequiredError('projectid','Required parameter projectid was null or undefined when calling listIgnorePolicyRules.');
            }
            if (policyids !== null && policyids !== undefined) {
                localVarQueryParameter['policyids'] = policyids;
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
            options.pathParams = { 'projectid': projectid, };
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
                url: "/v1/{project_id}/waf/{resourceid}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let resourceid;
            
            let enterpriseProjectId;

            if (listInstanceTagsRequest !== null && listInstanceTagsRequest !== undefined) {
                if (listInstanceTagsRequest instanceof ListInstanceTagsRequest) {
                    contentType = listInstanceTagsRequest.contentType;
                    resourceid = listInstanceTagsRequest.resourceid;
                    enterpriseProjectId = listInstanceTagsRequest.enterpriseProjectId;
                } else {
                    contentType = listInstanceTagsRequest['Content-Type'];
                    resourceid = listInstanceTagsRequest['resourceid'];
                    enterpriseProjectId = listInstanceTagsRequest['enterprise_project_id'];
                }
            }

        
            if (resourceid === null || resourceid === undefined) {
            throw new RequiredError('resourceid','Required parameter resourceid was null or undefined when calling listInstanceTags.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'resourceid': resourceid, };
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
         * 查询所有策略威胁情报控制规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listIpReputationPolicyRules(listIpReputationPolicyRulesRequest?: ListIpReputationPolicyRulesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{projectid}/waf/rule/ip-reputation",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectid;
            
            let policyids;
            
            let enterpriseProjectId;
            
            let page;
            
            let pagesize;
            
            let contentType;

            if (listIpReputationPolicyRulesRequest !== null && listIpReputationPolicyRulesRequest !== undefined) {
                if (listIpReputationPolicyRulesRequest instanceof ListIpReputationPolicyRulesRequest) {
                    projectid = listIpReputationPolicyRulesRequest.projectid;
                    policyids = listIpReputationPolicyRulesRequest.policyids;
                    enterpriseProjectId = listIpReputationPolicyRulesRequest.enterpriseProjectId;
                    page = listIpReputationPolicyRulesRequest.page;
                    pagesize = listIpReputationPolicyRulesRequest.pagesize;
                    contentType = listIpReputationPolicyRulesRequest.contentType;
                } else {
                    projectid = listIpReputationPolicyRulesRequest['projectid'];
                    policyids = listIpReputationPolicyRulesRequest['policyids'];
                    enterpriseProjectId = listIpReputationPolicyRulesRequest['enterprise_project_id'];
                    page = listIpReputationPolicyRulesRequest['page'];
                    pagesize = listIpReputationPolicyRulesRequest['pagesize'];
                    contentType = listIpReputationPolicyRulesRequest['Content-Type'];
                }
            }

        
            if (projectid === null || projectid === undefined) {
            throw new RequiredError('projectid','Required parameter projectid was null or undefined when calling listIpReputationPolicyRules.');
            }
            if (policyids !== null && policyids !== undefined) {
                localVarQueryParameter['policyids'] = policyids;
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
            options.pathParams = { 'projectid': projectid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询威胁情报规则列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listIpReputationRules(listIpReputationRulesRequest?: ListIpReputationRulesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/policy/{policy_id}/ip-reputation",
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

            if (listIpReputationRulesRequest !== null && listIpReputationRulesRequest !== undefined) {
                if (listIpReputationRulesRequest instanceof ListIpReputationRulesRequest) {
                    contentType = listIpReputationRulesRequest.contentType;
                    policyId = listIpReputationRulesRequest.policyId;
                    offset = listIpReputationRulesRequest.offset;
                    limit = listIpReputationRulesRequest.limit;
                    enterpriseProjectId = listIpReputationRulesRequest.enterpriseProjectId;
                } else {
                    contentType = listIpReputationRulesRequest['Content-Type'];
                    policyId = listIpReputationRulesRequest['policy_id'];
                    offset = listIpReputationRulesRequest['offset'];
                    limit = listIpReputationRulesRequest['limit'];
                    enterpriseProjectId = listIpReputationRulesRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling listIpReputationRules.');
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listIpReputationRules.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listIpReputationRules.');
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
         * 查询所有策略大模型防护规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLlmGuardPolicyRules(listLlmGuardPolicyRulesRequest?: ListLlmGuardPolicyRulesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{projectid}/waf/rule/llm-guards",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectid;
            
            let policyids;
            
            let enterpriseProjectId;
            
            let page;
            
            let pagesize;
            
            let contentType;

            if (listLlmGuardPolicyRulesRequest !== null && listLlmGuardPolicyRulesRequest !== undefined) {
                if (listLlmGuardPolicyRulesRequest instanceof ListLlmGuardPolicyRulesRequest) {
                    projectid = listLlmGuardPolicyRulesRequest.projectid;
                    policyids = listLlmGuardPolicyRulesRequest.policyids;
                    enterpriseProjectId = listLlmGuardPolicyRulesRequest.enterpriseProjectId;
                    page = listLlmGuardPolicyRulesRequest.page;
                    pagesize = listLlmGuardPolicyRulesRequest.pagesize;
                    contentType = listLlmGuardPolicyRulesRequest.contentType;
                } else {
                    projectid = listLlmGuardPolicyRulesRequest['projectid'];
                    policyids = listLlmGuardPolicyRulesRequest['policyids'];
                    enterpriseProjectId = listLlmGuardPolicyRulesRequest['enterprise_project_id'];
                    page = listLlmGuardPolicyRulesRequest['page'];
                    pagesize = listLlmGuardPolicyRulesRequest['pagesize'];
                    contentType = listLlmGuardPolicyRulesRequest['Content-Type'];
                }
            }

        
            if (projectid === null || projectid === undefined) {
            throw new RequiredError('projectid','Required parameter projectid was null or undefined when calling listLlmGuardPolicyRules.');
            }
            if (policyids !== null && policyids !== undefined) {
                localVarQueryParameter['policyids'] = policyids;
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
            options.pathParams = { 'projectid': projectid, };
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
         * 查询所有策略隐私屏蔽防护规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPrivacyPolicyRules(listPrivacyPolicyRulesRequest?: ListPrivacyPolicyRulesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{projectid}/waf/rule/privacy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectid;
            
            let policyids;
            
            let enterpriseProjectId;
            
            let page;
            
            let pagesize;
            
            let contentType;

            if (listPrivacyPolicyRulesRequest !== null && listPrivacyPolicyRulesRequest !== undefined) {
                if (listPrivacyPolicyRulesRequest instanceof ListPrivacyPolicyRulesRequest) {
                    projectid = listPrivacyPolicyRulesRequest.projectid;
                    policyids = listPrivacyPolicyRulesRequest.policyids;
                    enterpriseProjectId = listPrivacyPolicyRulesRequest.enterpriseProjectId;
                    page = listPrivacyPolicyRulesRequest.page;
                    pagesize = listPrivacyPolicyRulesRequest.pagesize;
                    contentType = listPrivacyPolicyRulesRequest.contentType;
                } else {
                    projectid = listPrivacyPolicyRulesRequest['projectid'];
                    policyids = listPrivacyPolicyRulesRequest['policyids'];
                    enterpriseProjectId = listPrivacyPolicyRulesRequest['enterprise_project_id'];
                    page = listPrivacyPolicyRulesRequest['page'];
                    pagesize = listPrivacyPolicyRulesRequest['pagesize'];
                    contentType = listPrivacyPolicyRulesRequest['Content-Type'];
                }
            }

        
            if (projectid === null || projectid === undefined) {
            throw new RequiredError('projectid','Required parameter projectid was null or undefined when calling listPrivacyPolicyRules.');
            }
            if (policyids !== null && policyids !== undefined) {
                localVarQueryParameter['policyids'] = policyids;
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
            options.pathParams = { 'projectid': projectid, };
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
         * 查询可防护的资源列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProtectableResources(listProtectableResourcesRequest?: ListProtectableResourcesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/premium-waf/host/protectable-resources/{resource_type}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let resourceType;
            
            let vpcId;
            
            let region;

            if (listProtectableResourcesRequest !== null && listProtectableResourcesRequest !== undefined) {
                if (listProtectableResourcesRequest instanceof ListProtectableResourcesRequest) {
                    contentType = listProtectableResourcesRequest.contentType;
                    resourceType = listProtectableResourcesRequest.resourceType;
                    vpcId = listProtectableResourcesRequest.vpcId;
                    region = listProtectableResourcesRequest.region;
                } else {
                    contentType = listProtectableResourcesRequest['Content-Type'];
                    resourceType = listProtectableResourcesRequest['resource_type'];
                    vpcId = listProtectableResourcesRequest['vpc_id'];
                    region = listProtectableResourcesRequest['region'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling listProtectableResources.');
            }
            if (vpcId !== null && vpcId !== undefined) {
                localVarQueryParameter['vpc_id'] = vpcId;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'resource_type': resourceType, };
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
         * 查询安全统计响应码数据
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listResponseCodeTimeline(listResponseCodeTimelineRequest?: ListResponseCodeTimelineRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/overviews/response-code/timeline",
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
            
            let responseSource;
            
            let groupBy;

            if (listResponseCodeTimelineRequest !== null && listResponseCodeTimelineRequest !== undefined) {
                if (listResponseCodeTimelineRequest instanceof ListResponseCodeTimelineRequest) {
                    contentType = listResponseCodeTimelineRequest.contentType;
                    from = listResponseCodeTimelineRequest.from;
                    to = listResponseCodeTimelineRequest.to;
                    enterpriseProjectId = listResponseCodeTimelineRequest.enterpriseProjectId;
                    hosts = listResponseCodeTimelineRequest.hosts;
                    instances = listResponseCodeTimelineRequest.instances;
                    responseSource = listResponseCodeTimelineRequest.responseSource;
                    groupBy = listResponseCodeTimelineRequest.groupBy;
                } else {
                    contentType = listResponseCodeTimelineRequest['Content-Type'];
                    from = listResponseCodeTimelineRequest['from'];
                    to = listResponseCodeTimelineRequest['to'];
                    enterpriseProjectId = listResponseCodeTimelineRequest['enterprise_project_id'];
                    hosts = listResponseCodeTimelineRequest['hosts'];
                    instances = listResponseCodeTimelineRequest['instances'];
                    responseSource = listResponseCodeTimelineRequest['response_source'];
                    groupBy = listResponseCodeTimelineRequest['group_by'];
                }
            }

        
            if (from === null || from === undefined) {
                throw new RequiredError('from','Required parameter from was null or undefined when calling listResponseCodeTimeline.');
            }
            if (from !== null && from !== undefined) {
                localVarQueryParameter['from'] = from;
            }
            if (to === null || to === undefined) {
                throw new RequiredError('to','Required parameter to was null or undefined when calling listResponseCodeTimeline.');
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
            if (responseSource !== null && responseSource !== undefined) {
                localVarQueryParameter['response_source'] = responseSource;
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
         * 查询安全报告历史统计周期列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSecurityReportHistoryPeriods(listSecurityReportHistoryPeriodsRequest?: ListSecurityReportHistoryPeriodsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/security-report/history-periods",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let subscriptionId;
            
            let limit;
            
            let offset;

            if (listSecurityReportHistoryPeriodsRequest !== null && listSecurityReportHistoryPeriodsRequest !== undefined) {
                if (listSecurityReportHistoryPeriodsRequest instanceof ListSecurityReportHistoryPeriodsRequest) {
                    contentType = listSecurityReportHistoryPeriodsRequest.contentType;
                    subscriptionId = listSecurityReportHistoryPeriodsRequest.subscriptionId;
                    limit = listSecurityReportHistoryPeriodsRequest.limit;
                    offset = listSecurityReportHistoryPeriodsRequest.offset;
                } else {
                    contentType = listSecurityReportHistoryPeriodsRequest['Content-Type'];
                    subscriptionId = listSecurityReportHistoryPeriodsRequest['subscription_id'];
                    limit = listSecurityReportHistoryPeriodsRequest['limit'];
                    offset = listSecurityReportHistoryPeriodsRequest['offset'];
                }
            }

        
            if (subscriptionId === null || subscriptionId === undefined) {
                throw new RequiredError('subscriptionId','Required parameter subscriptionId was null or undefined when calling listSecurityReportHistoryPeriods.');
            }
            if (subscriptionId !== null && subscriptionId !== undefined) {
                localVarQueryParameter['subscription_id'] = subscriptionId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询安全报告发送记录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSecurityReportSendingRecords(listSecurityReportSendingRecordsRequest?: ListSecurityReportSendingRecordsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/security-report/sending-records",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let reportName;
            
            let reportCategory;
            
            let limit;
            
            let offset;

            if (listSecurityReportSendingRecordsRequest !== null && listSecurityReportSendingRecordsRequest !== undefined) {
                if (listSecurityReportSendingRecordsRequest instanceof ListSecurityReportSendingRecordsRequest) {
                    contentType = listSecurityReportSendingRecordsRequest.contentType;
                    reportName = listSecurityReportSendingRecordsRequest.reportName;
                    reportCategory = listSecurityReportSendingRecordsRequest.reportCategory;
                    limit = listSecurityReportSendingRecordsRequest.limit;
                    offset = listSecurityReportSendingRecordsRequest.offset;
                } else {
                    contentType = listSecurityReportSendingRecordsRequest['Content-Type'];
                    reportName = listSecurityReportSendingRecordsRequest['report_name'];
                    reportCategory = listSecurityReportSendingRecordsRequest['report_category'];
                    limit = listSecurityReportSendingRecordsRequest['limit'];
                    offset = listSecurityReportSendingRecordsRequest['offset'];
                }
            }

        
            if (reportName !== null && reportName !== undefined) {
                localVarQueryParameter['report_name'] = reportName;
            }
            if (reportCategory !== null && reportCategory !== undefined) {
                localVarQueryParameter['report_category'] = reportCategory;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
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
         * 查询攻击源ip
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTopIp(listTopIpRequest?: ListTopIpRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/overviews/attack/ip",
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
            
            let instances;

            if (listTopIpRequest !== null && listTopIpRequest !== undefined) {
                if (listTopIpRequest instanceof ListTopIpRequest) {
                    contentType = listTopIpRequest.contentType;
                    from = listTopIpRequest.from;
                    to = listTopIpRequest.to;
                    enterpriseProjectId = listTopIpRequest.enterpriseProjectId;
                    top = listTopIpRequest.top;
                    hosts = listTopIpRequest.hosts;
                    instances = listTopIpRequest.instances;
                } else {
                    contentType = listTopIpRequest['Content-Type'];
                    from = listTopIpRequest['from'];
                    to = listTopIpRequest['to'];
                    enterpriseProjectId = listTopIpRequest['enterprise_project_id'];
                    top = listTopIpRequest['top'];
                    hosts = listTopIpRequest['hosts'];
                    instances = listTopIpRequest['instances'];
                }
            }

        
            if (from === null || from === undefined) {
                throw new RequiredError('from','Required parameter from was null or undefined when calling listTopIp.');
            }
            if (from !== null && from !== undefined) {
                localVarQueryParameter['from'] = from;
            }
            if (to === null || to === undefined) {
                throw new RequiredError('to','Required parameter to was null or undefined when calling listTopIp.');
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
         * 查询被攻击url
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTopUrl(listTopUrlRequest?: ListTopUrlRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/overviews/attack/url",
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
            
            let instances;

            if (listTopUrlRequest !== null && listTopUrlRequest !== undefined) {
                if (listTopUrlRequest instanceof ListTopUrlRequest) {
                    contentType = listTopUrlRequest.contentType;
                    from = listTopUrlRequest.from;
                    to = listTopUrlRequest.to;
                    enterpriseProjectId = listTopUrlRequest.enterpriseProjectId;
                    top = listTopUrlRequest.top;
                    hosts = listTopUrlRequest.hosts;
                    instances = listTopUrlRequest.instances;
                } else {
                    contentType = listTopUrlRequest['Content-Type'];
                    from = listTopUrlRequest['from'];
                    to = listTopUrlRequest['to'];
                    enterpriseProjectId = listTopUrlRequest['enterprise_project_id'];
                    top = listTopUrlRequest['top'];
                    hosts = listTopUrlRequest['hosts'];
                    instances = listTopUrlRequest['instances'];
                }
            }

        
            if (from === null || from === undefined) {
                throw new RequiredError('from','Required parameter from was null or undefined when calling listTopUrl.');
            }
            if (from !== null && from !== undefined) {
                localVarQueryParameter['from'] = from;
            }
            if (to === null || to === undefined) {
                throw new RequiredError('to','Required parameter to was null or undefined when calling listTopUrl.');
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
         * 查询所有策略黑白名单防护规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWhiteblackipPolicyRules(listWhiteblackipPolicyRulesRequest?: ListWhiteblackipPolicyRulesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{projectid}/waf/rule/whiteblackip",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectid;
            
            let policyids;
            
            let enterpriseProjectId;
            
            let page;
            
            let pagesize;
            
            let contentType;

            if (listWhiteblackipPolicyRulesRequest !== null && listWhiteblackipPolicyRulesRequest !== undefined) {
                if (listWhiteblackipPolicyRulesRequest instanceof ListWhiteblackipPolicyRulesRequest) {
                    projectid = listWhiteblackipPolicyRulesRequest.projectid;
                    policyids = listWhiteblackipPolicyRulesRequest.policyids;
                    enterpriseProjectId = listWhiteblackipPolicyRulesRequest.enterpriseProjectId;
                    page = listWhiteblackipPolicyRulesRequest.page;
                    pagesize = listWhiteblackipPolicyRulesRequest.pagesize;
                    contentType = listWhiteblackipPolicyRulesRequest.contentType;
                } else {
                    projectid = listWhiteblackipPolicyRulesRequest['projectid'];
                    policyids = listWhiteblackipPolicyRulesRequest['policyids'];
                    enterpriseProjectId = listWhiteblackipPolicyRulesRequest['enterprise_project_id'];
                    page = listWhiteblackipPolicyRulesRequest['page'];
                    pagesize = listWhiteblackipPolicyRulesRequest['pagesize'];
                    contentType = listWhiteblackipPolicyRulesRequest['Content-Type'];
                }
            }

        
            if (projectid === null || projectid === undefined) {
            throw new RequiredError('projectid','Required parameter projectid was null or undefined when calling listWhiteblackipPolicyRules.');
            }
            if (policyids !== null && policyids !== undefined) {
                localVarQueryParameter['policyids'] = policyids;
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
            options.pathParams = { 'projectid': projectid, };
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
         * 查询地理位置控制防护规则详情
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
         * 查询安全报告内容
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSecurityReportContent(showSecurityReportContentRequest?: ShowSecurityReportContentRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/security-reports/{report_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let reportId;
            
            let subscriptionId;

            if (showSecurityReportContentRequest !== null && showSecurityReportContentRequest !== undefined) {
                if (showSecurityReportContentRequest instanceof ShowSecurityReportContentRequest) {
                    contentType = showSecurityReportContentRequest.contentType;
                    reportId = showSecurityReportContentRequest.reportId;
                    subscriptionId = showSecurityReportContentRequest.subscriptionId;
                } else {
                    contentType = showSecurityReportContentRequest['Content-Type'];
                    reportId = showSecurityReportContentRequest['report_id'];
                    subscriptionId = showSecurityReportContentRequest['subscription_id'];
                }
            }

        
            if (reportId === null || reportId === undefined) {
            throw new RequiredError('reportId','Required parameter reportId was null or undefined when calling showSecurityReportContent.');
            }
            if (subscriptionId === null || subscriptionId === undefined) {
                throw new RequiredError('subscriptionId','Required parameter subscriptionId was null or undefined when calling showSecurityReportContent.');
            }
            if (subscriptionId !== null && subscriptionId !== undefined) {
                localVarQueryParameter['subscription_id'] = subscriptionId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'report_id': reportId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询安全报告订阅
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSecurityReportSubscription(showSecurityReportSubscriptionRequest?: ShowSecurityReportSubscriptionRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/security-report/subscriptions/{subscription_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let subscriptionId;
            
            let contentType;

            if (showSecurityReportSubscriptionRequest !== null && showSecurityReportSubscriptionRequest !== undefined) {
                if (showSecurityReportSubscriptionRequest instanceof ShowSecurityReportSubscriptionRequest) {
                    subscriptionId = showSecurityReportSubscriptionRequest.subscriptionId;
                    contentType = showSecurityReportSubscriptionRequest.contentType;
                } else {
                    subscriptionId = showSecurityReportSubscriptionRequest['subscription_id'];
                    contentType = showSecurityReportSubscriptionRequest['Content-Type'];
                }
            }

        
            if (subscriptionId === null || subscriptionId === undefined) {
            throw new RequiredError('subscriptionId','Required parameter subscriptionId was null or undefined when calling showSecurityReportSubscription.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'subscription_id': subscriptionId, };
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
         * 返回接入进度
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAccessProgress(updateAccessProgressRequest?: UpdateAccessProgressRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/waf/instance/{instance_id}/access-progress",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let instanceId;

            if (updateAccessProgressRequest !== null && updateAccessProgressRequest !== undefined) {
                if (updateAccessProgressRequest instanceof UpdateAccessProgressRequest) {
                    contentType = updateAccessProgressRequest.contentType;
                    instanceId = updateAccessProgressRequest.instanceId;
                    body = updateAccessProgressRequest.body
                } else {
                    contentType = updateAccessProgressRequest['Content-Type'];
                    instanceId = updateAccessProgressRequest['instance_id'];
                    body = updateAccessProgressRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateAccessProgress.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
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
         * 更新BotM规则启用状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateBotMCategoryStatus(updateBotMCategoryStatusRequest?: UpdateBotMCategoryStatusRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/waf/policy/{policy_id}/bot-manager/category/{category_id}/status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let policyId;
            
            let categoryId;
            
            let contentType;

            if (updateBotMCategoryStatusRequest !== null && updateBotMCategoryStatusRequest !== undefined) {
                if (updateBotMCategoryStatusRequest instanceof UpdateBotMCategoryStatusRequest) {
                    policyId = updateBotMCategoryStatusRequest.policyId;
                    categoryId = updateBotMCategoryStatusRequest.categoryId;
                    contentType = updateBotMCategoryStatusRequest.contentType;
                    body = updateBotMCategoryStatusRequest.body
                } else {
                    policyId = updateBotMCategoryStatusRequest['policy_id'];
                    categoryId = updateBotMCategoryStatusRequest['category_id'];
                    contentType = updateBotMCategoryStatusRequest['Content-Type'];
                    body = updateBotMCategoryStatusRequest['body'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling updateBotMCategoryStatus.');
            }
            if (categoryId === null || categoryId === undefined) {
            throw new RequiredError('categoryId','Required parameter categoryId was null or undefined when calling updateBotMCategoryStatus.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'policy_id': policyId,'category_id': categoryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * **参数解释：**
         * 更新BotM行为检测规则的防护策略
         * **约束限制：**
         * 不涉及
         * **取值范围：**
         * 不涉及
         * **默认取值：**
         * 不涉及
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateBotMRuleDefenseStrategy(updateBotMRuleDefenseStrategyRequest?: UpdateBotMRuleDefenseStrategyRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/waf/policy/{policy_id}/bot-manager/rule/defense-strategy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let policyId;
            
            let contentType;

            if (updateBotMRuleDefenseStrategyRequest !== null && updateBotMRuleDefenseStrategyRequest !== undefined) {
                if (updateBotMRuleDefenseStrategyRequest instanceof UpdateBotMRuleDefenseStrategyRequest) {
                    policyId = updateBotMRuleDefenseStrategyRequest.policyId;
                    contentType = updateBotMRuleDefenseStrategyRequest.contentType;
                    body = updateBotMRuleDefenseStrategyRequest.body
                } else {
                    policyId = updateBotMRuleDefenseStrategyRequest['policy_id'];
                    contentType = updateBotMRuleDefenseStrategyRequest['Content-Type'];
                    body = updateBotMRuleDefenseStrategyRequest['body'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling updateBotMRuleDefenseStrategy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新BotM流量检测条件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateBotMTrafficDetectionCondition(updateBotMTrafficDetectionConditionRequest?: UpdateBotMTrafficDetectionConditionRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/waf/policy/{policy_id}/bot-manager/traffic-detection-condition/{condition_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let policyId;
            
            let conditionId;
            
            let contentType;

            if (updateBotMTrafficDetectionConditionRequest !== null && updateBotMTrafficDetectionConditionRequest !== undefined) {
                if (updateBotMTrafficDetectionConditionRequest instanceof UpdateBotMTrafficDetectionConditionRequest) {
                    policyId = updateBotMTrafficDetectionConditionRequest.policyId;
                    conditionId = updateBotMTrafficDetectionConditionRequest.conditionId;
                    contentType = updateBotMTrafficDetectionConditionRequest.contentType;
                    body = updateBotMTrafficDetectionConditionRequest.body
                } else {
                    policyId = updateBotMTrafficDetectionConditionRequest['policy_id'];
                    conditionId = updateBotMTrafficDetectionConditionRequest['condition_id'];
                    contentType = updateBotMTrafficDetectionConditionRequest['Content-Type'];
                    body = updateBotMTrafficDetectionConditionRequest['body'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling updateBotMTrafficDetectionCondition.');
            }
            if (conditionId === null || conditionId === undefined) {
            throw new RequiredError('conditionId','Required parameter conditionId was null or undefined when calling updateBotMTrafficDetectionCondition.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'policy_id': policyId,'condition_id': conditionId, };
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
         * 返回接入状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateHostAccessStatusOfUnderline(updateHostAccessStatusOfUnderlineRequest?: UpdateHostAccessStatusOfUnderlineRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/waf/instance/{instance_id}/access-status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let instanceId;

            if (updateHostAccessStatusOfUnderlineRequest !== null && updateHostAccessStatusOfUnderlineRequest !== undefined) {
                if (updateHostAccessStatusOfUnderlineRequest instanceof UpdateHostAccessStatusOfUnderlineRequest) {
                    contentType = updateHostAccessStatusOfUnderlineRequest.contentType;
                    instanceId = updateHostAccessStatusOfUnderlineRequest.instanceId;
                    body = updateHostAccessStatusOfUnderlineRequest.body
                } else {
                    contentType = updateHostAccessStatusOfUnderlineRequest['Content-Type'];
                    instanceId = updateHostAccessStatusOfUnderlineRequest['instance_id'];
                    body = updateHostAccessStatusOfUnderlineRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateHostAccessStatusOfUnderline.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
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
         * **参数解释：**
         * 更新云模式域名路由信息
         * **约束限制：**
         * 不涉及
         * **取值范围：**
         * 不涉及
         * **默认取值：**
         * 不涉及
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstanceRoute(updateInstanceRouteRequest?: UpdateInstanceRouteRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/waf/instance/{instance_id}/route",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let instanceId;

            if (updateInstanceRouteRequest !== null && updateInstanceRouteRequest !== undefined) {
                if (updateInstanceRouteRequest instanceof UpdateInstanceRouteRequest) {
                    contentType = updateInstanceRouteRequest.contentType;
                    instanceId = updateInstanceRouteRequest.instanceId;
                    body = updateInstanceRouteRequest.body
                } else {
                    contentType = updateInstanceRouteRequest['Content-Type'];
                    instanceId = updateInstanceRouteRequest['instance_id'];
                    body = updateInstanceRouteRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstanceRoute.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
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
         * 更新IP情报防护规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateIpReputationRule(updateIpReputationRuleRequest?: UpdateIpReputationRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/waf/policy/{policy_id}/ip-reputation/{rule_id}",
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

            if (updateIpReputationRuleRequest !== null && updateIpReputationRuleRequest !== undefined) {
                if (updateIpReputationRuleRequest instanceof UpdateIpReputationRuleRequest) {
                    contentType = updateIpReputationRuleRequest.contentType;
                    policyId = updateIpReputationRuleRequest.policyId;
                    ruleId = updateIpReputationRuleRequest.ruleId;
                    body = updateIpReputationRuleRequest.body
                    enterpriseProjectId = updateIpReputationRuleRequest.enterpriseProjectId;
                } else {
                    contentType = updateIpReputationRuleRequest['Content-Type'];
                    policyId = updateIpReputationRuleRequest['policy_id'];
                    ruleId = updateIpReputationRuleRequest['rule_id'];
                    body = updateIpReputationRuleRequest['body'];
                    enterpriseProjectId = updateIpReputationRuleRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling updateIpReputationRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling updateIpReputationRule.');
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
         * 修改独享模式域名接入状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePremiumHostAccessStatus(updatePremiumHostAccessStatusRequest?: UpdatePremiumHostAccessStatusRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/premium-waf/host/{host_id}/access-status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let hostId;

            if (updatePremiumHostAccessStatusRequest !== null && updatePremiumHostAccessStatusRequest !== undefined) {
                if (updatePremiumHostAccessStatusRequest instanceof UpdatePremiumHostAccessStatusRequest) {
                    hostId = updatePremiumHostAccessStatusRequest.hostId;
                    body = updatePremiumHostAccessStatusRequest.body
                } else {
                    hostId = updatePremiumHostAccessStatusRequest['host_id'];
                    body = updatePremiumHostAccessStatusRequest['body'];
                }
            }

        
            if (hostId === null || hostId === undefined) {
            throw new RequiredError('hostId','Required parameter hostId was null or undefined when calling updatePremiumHostAccessStatus.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
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
         * 操作WAF独享引擎
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePremiumInstance(updatePremiumInstanceRequest?: UpdatePremiumInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/premium-waf/instance/{instance_id}/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updatePremiumInstanceRequest !== null && updatePremiumInstanceRequest !== undefined) {
                if (updatePremiumInstanceRequest instanceof UpdatePremiumInstanceRequest) {
                    instanceId = updatePremiumInstanceRequest.instanceId;
                    body = updatePremiumInstanceRequest.body
                } else {
                    instanceId = updatePremiumInstanceRequest['instance_id'];
                    body = updatePremiumInstanceRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updatePremiumInstance.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 返回独享接入进度
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePremiumInstanceProgress(updatePremiumInstanceProgressRequest?: UpdatePremiumInstanceProgressRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/premium-waf/host/{host_id}/access-progress",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let hostId;

            if (updatePremiumInstanceProgressRequest !== null && updatePremiumInstanceProgressRequest !== undefined) {
                if (updatePremiumInstanceProgressRequest instanceof UpdatePremiumInstanceProgressRequest) {
                    contentType = updatePremiumInstanceProgressRequest.contentType;
                    hostId = updatePremiumInstanceProgressRequest.hostId;
                    body = updatePremiumInstanceProgressRequest.body
                } else {
                    contentType = updatePremiumInstanceProgressRequest['Content-Type'];
                    hostId = updatePremiumInstanceProgressRequest['host_id'];
                    body = updatePremiumInstanceProgressRequest['body'];
                }
            }

        
            if (hostId === null || hostId === undefined) {
            throw new RequiredError('hostId','Required parameter hostId was null or undefined when calling updatePremiumInstanceProgress.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
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
         * 修改安全报告的订阅
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSecurityReportSubscription(updateSecurityReportSubscriptionRequest?: UpdateSecurityReportSubscriptionRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/waf/security-report/subscriptions/{subscription_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let subscriptionId;

            if (updateSecurityReportSubscriptionRequest !== null && updateSecurityReportSubscriptionRequest !== undefined) {
                if (updateSecurityReportSubscriptionRequest instanceof UpdateSecurityReportSubscriptionRequest) {
                    contentType = updateSecurityReportSubscriptionRequest.contentType;
                    subscriptionId = updateSecurityReportSubscriptionRequest.subscriptionId;
                    body = updateSecurityReportSubscriptionRequest.body
                } else {
                    contentType = updateSecurityReportSubscriptionRequest['Content-Type'];
                    subscriptionId = updateSecurityReportSubscriptionRequest['subscription_id'];
                    body = updateSecurityReportSubscriptionRequest['body'];
                }
            }

        
            if (subscriptionId === null || subscriptionId === undefined) {
            throw new RequiredError('subscriptionId','Required parameter subscriptionId was null or undefined when calling updateSecurityReportSubscription.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'subscription_id': subscriptionId, };
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
    
        /**
         * 查询用户托管在云解析上的域名
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        confirmDnsDomain(confirmDnsDomainRequest?: ConfirmDnsDomainRequest) {
            const options = {
                method: "GET",
                url: "/v1/{projectid}/waf/dns-domain",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectid;
            
            let enterpriseProjectId;
            
            let contentType;

            if (confirmDnsDomainRequest !== null && confirmDnsDomainRequest !== undefined) {
                if (confirmDnsDomainRequest instanceof ConfirmDnsDomainRequest) {
                    projectid = confirmDnsDomainRequest.projectid;
                    enterpriseProjectId = confirmDnsDomainRequest.enterpriseProjectId;
                    contentType = confirmDnsDomainRequest.contentType;
                } else {
                    projectid = confirmDnsDomainRequest['projectid'];
                    enterpriseProjectId = confirmDnsDomainRequest['enterprise_project_id'];
                    contentType = confirmDnsDomainRequest['Content-Type'];
                }
            }

        
            if (projectid === null || projectid === undefined) {
            throw new RequiredError('projectid','Required parameter projectid was null or undefined when calling confirmDnsDomain.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'projectid': projectid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 快速接入，直接去修改用户的DNS记录，使域名快速接入WAF
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createQuickAccessDomain(createQuickAccessDomainRequest?: CreateQuickAccessDomainRequest) {
            const options = {
                method: "POST",
                url: "/v1/{projectid}/waf/dns-domain/{instanceid}/access",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectid;
            
            let instanceid;
            
            let enterpriseProjectId;
            
            let contentType;

            if (createQuickAccessDomainRequest !== null && createQuickAccessDomainRequest !== undefined) {
                if (createQuickAccessDomainRequest instanceof CreateQuickAccessDomainRequest) {
                    projectid = createQuickAccessDomainRequest.projectid;
                    instanceid = createQuickAccessDomainRequest.instanceid;
                    enterpriseProjectId = createQuickAccessDomainRequest.enterpriseProjectId;
                    contentType = createQuickAccessDomainRequest.contentType;
                } else {
                    projectid = createQuickAccessDomainRequest['projectid'];
                    instanceid = createQuickAccessDomainRequest['instanceid'];
                    enterpriseProjectId = createQuickAccessDomainRequest['enterprise_project_id'];
                    contentType = createQuickAccessDomainRequest['Content-Type'];
                }
            }

        
            if (projectid === null || projectid === undefined) {
            throw new RequiredError('projectid','Required parameter projectid was null or undefined when calling createQuickAccessDomain.');
            }
            if (instanceid === null || instanceid === undefined) {
            throw new RequiredError('instanceid','Required parameter instanceid was null or undefined when calling createQuickAccessDomain.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'projectid': projectid,'instanceid': instanceid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * **参数解释：**
         * 根据Id查询Web防护规则
         * **约束限制：**
         * 不涉及
         * **取值范围：**
         * 不涉及
         * **默认取值：**
         * 不涉及
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showWebProtectionRule(showWebProtectionRuleRequest?: ShowWebProtectionRuleRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/waf/web-protection-rules/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let ruleId;
            
            let xLanguage;

            if (showWebProtectionRuleRequest !== null && showWebProtectionRuleRequest !== undefined) {
                if (showWebProtectionRuleRequest instanceof ShowWebProtectionRuleRequest) {
                    ruleId = showWebProtectionRuleRequest.ruleId;
                    xLanguage = showWebProtectionRuleRequest.xLanguage;
                } else {
                    ruleId = showWebProtectionRuleRequest['rule_id'];
                    xLanguage = showWebProtectionRuleRequest['X-Language'];
                }
            }

        
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling showWebProtectionRule.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'rule_id': ruleId, };
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