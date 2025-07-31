import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AccessTopMemberVO } from './model/AccessTopMemberVO';
import { AccessTopStatisticsVO } from './model/AccessTopStatisticsVO';
import { AccessTopVO } from './model/AccessTopVO';
import { AddAclRuleRequest } from './model/AddAclRuleRequest';
import { AddAclRuleResponse } from './model/AddAclRuleResponse';
import { AddAddressItemRequest } from './model/AddAddressItemRequest';
import { AddAddressItemResponse } from './model/AddAddressItemResponse';
import { AddAddressItemsInfoDto } from './model/AddAddressItemsInfoDto';
import { AddAddressItemsInfoDtoAddressItems } from './model/AddAddressItemsInfoDtoAddressItems';
import { AddAddressSetDto } from './model/AddAddressSetDto';
import { AddAddressSetRequest } from './model/AddAddressSetRequest';
import { AddAddressSetResponse } from './model/AddAddressSetResponse';
import { AddBlackWhiteListDto } from './model/AddBlackWhiteListDto';
import { AddBlackWhiteListRequest } from './model/AddBlackWhiteListRequest';
import { AddBlackWhiteListResponse } from './model/AddBlackWhiteListResponse';
import { AddDomainListDto } from './model/AddDomainListDto';
import { AddDomainSetInfoDto } from './model/AddDomainSetInfoDto';
import { AddDomainSetRequest } from './model/AddDomainSetRequest';
import { AddDomainSetResponse } from './model/AddDomainSetResponse';
import { AddDomainsRequest } from './model/AddDomainsRequest';
import { AddDomainsResponse } from './model/AddDomainsResponse';
import { AddLogConfigRequest } from './model/AddLogConfigRequest';
import { AddLogConfigResponse } from './model/AddLogConfigResponse';
import { AddRuleAclDto } from './model/AddRuleAclDto';
import { AddRuleAclDtoRules } from './model/AddRuleAclDtoRules';
import { AddServiceItemsRequest } from './model/AddServiceItemsRequest';
import { AddServiceItemsResponse } from './model/AddServiceItemsResponse';
import { AddServiceItemsUsingPOSTRequestBody } from './model/AddServiceItemsUsingPOSTRequestBody';
import { AddServiceItemsUsingPOSTRequestBodyServiceItems } from './model/AddServiceItemsUsingPOSTRequestBodyServiceItems';
import { AddServiceSetRequest } from './model/AddServiceSetRequest';
import { AddServiceSetResponse } from './model/AddServiceSetResponse';
import { AddServiceSetUsingPOSTRequestBody } from './model/AddServiceSetUsingPOSTRequestBody';
import { AddressGroupVO } from './model/AddressGroupVO';
import { AddressItemId } from './model/AddressItemId';
import { AddressItemIdWithoutName } from './model/AddressItemIdWithoutName';
import { AddressItemListResponseDTOData } from './model/AddressItemListResponseDTOData';
import { AddressItemListResponseDTODataRecords } from './model/AddressItemListResponseDTODataRecords';
import { AddressItems } from './model/AddressItems';
import { AddressSetDetailResponseDTOData } from './model/AddressSetDetailResponseDTOData';
import { AddressSetId } from './model/AddressSetId';
import { AddressSetListResponseDTOData } from './model/AddressSetListResponseDTOData';
import { AddressSetListResponseDTODataRecords } from './model/AddressSetListResponseDTODataRecords';
import { AdvancedIpsRuleDto } from './model/AdvancedIpsRuleDto';
import { AdvancedIpsRuleListVo } from './model/AdvancedIpsRuleListVo';
import { AdvancedIpsRuleVo } from './model/AdvancedIpsRuleVo';
import { AlarmConfig } from './model/AlarmConfig';
import { AntiVirusRuleDto } from './model/AntiVirusRuleDto';
import { AntiVirusRuleVO } from './model/AntiVirusRuleVO';
import { AntiVirusSwitchDto } from './model/AntiVirusSwitchDto';
import { AntiVirusVO } from './model/AntiVirusVO';
import { AttackStatisticRespBody } from './model/AttackStatisticRespBody';
import { AttackTrendRespBody } from './model/AttackTrendRespBody';
import { BatchDeleteAclRulesRequest } from './model/BatchDeleteAclRulesRequest';
import { BatchDeleteAclRulesResponse } from './model/BatchDeleteAclRulesResponse';
import { BatchDeleteAclRulesResponseData } from './model/BatchDeleteAclRulesResponseData';
import { BatchDeleteAddressItemsRequest } from './model/BatchDeleteAddressItemsRequest';
import { BatchDeleteAddressItemsResponse } from './model/BatchDeleteAddressItemsResponse';
import { BatchDeleteDomainSetRequest } from './model/BatchDeleteDomainSetRequest';
import { BatchDeleteDomainSetResponse } from './model/BatchDeleteDomainSetResponse';
import { BatchDeleteDomainSetsDto } from './model/BatchDeleteDomainSetsDto';
import { BatchDeleteRuleInfo } from './model/BatchDeleteRuleInfo';
import { BatchDeleteServiceItemsRequest } from './model/BatchDeleteServiceItemsRequest';
import { BatchDeleteServiceItemsResponse } from './model/BatchDeleteServiceItemsResponse';
import { BatchUpdateAclRuleActionsRequest } from './model/BatchUpdateAclRuleActionsRequest';
import { BatchUpdateAclRuleActionsResponse } from './model/BatchUpdateAclRuleActionsResponse';
import { BlackWhiteListId } from './model/BlackWhiteListId';
import { BlackWhiteListResponseData } from './model/BlackWhiteListResponseData';
import { BlackWhiteListResponseDataRecords } from './model/BlackWhiteListResponseDataRecords';
import { CancelCaptureTaskDto } from './model/CancelCaptureTaskDto';
import { CancelCaptureTaskRequest } from './model/CancelCaptureTaskRequest';
import { CancelCaptureTaskResponse } from './model/CancelCaptureTaskResponse';
import { CaptureFile } from './model/CaptureFile';
import { CaptureResultUrlVO } from './model/CaptureResultUrlVO';
import { CaptureRuleAddressDto } from './model/CaptureRuleAddressDto';
import { CaptureServiceDto } from './model/CaptureServiceDto';
import { CaptureTaskDto } from './model/CaptureTaskDto';
import { CaptureTaskId } from './model/CaptureTaskId';
import { CaptureTaskVO } from './model/CaptureTaskVO';
import { ChangeEastWestFirewallStatusRequest } from './model/ChangeEastWestFirewallStatusRequest';
import { ChangeEastWestFirewallStatusResponse } from './model/ChangeEastWestFirewallStatusResponse';
import { ChangeEastWestFirewallStatusResponseData } from './model/ChangeEastWestFirewallStatusResponseData';
import { ChangeEipStatusRequest } from './model/ChangeEipStatusRequest';
import { ChangeEipStatusResponse } from './model/ChangeEipStatusResponse';
import { ChangeIpsProtectModeRequest } from './model/ChangeIpsProtectModeRequest';
import { ChangeIpsProtectModeResponse } from './model/ChangeIpsProtectModeResponse';
import { ChangeIpsRuleModeRequest } from './model/ChangeIpsRuleModeRequest';
import { ChangeIpsRuleModeResponse } from './model/ChangeIpsRuleModeResponse';
import { ChangeIpsSwitchStatusRequest } from './model/ChangeIpsSwitchStatusRequest';
import { ChangeIpsSwitchStatusResponse } from './model/ChangeIpsSwitchStatusResponse';
import { ChangeProtectStatusRequestBody } from './model/ChangeProtectStatusRequestBody';
import { ClearAccessLogRuleHitCountsDto } from './model/ClearAccessLogRuleHitCountsDto';
import { CommonResponseDTOData } from './model/CommonResponseDTOData';
import { CoveredIPVO } from './model/CoveredIPVO';
import { CreateCaptureTaskRequest } from './model/CreateCaptureTaskRequest';
import { CreateCaptureTaskResponse } from './model/CreateCaptureTaskResponse';
import { CreateEWFirewallInspectVpcResp } from './model/CreateEWFirewallInspectVpcResp';
import { CreateEWFirewallResp } from './model/CreateEWFirewallResp';
import { CreateEastWestFirewallRequest } from './model/CreateEastWestFirewallRequest';
import { CreateEastWestFirewallRequestBody } from './model/CreateEastWestFirewallRequestBody';
import { CreateEastWestFirewallResponse } from './model/CreateEastWestFirewallResponse';
import { CreateFirewallReq } from './model/CreateFirewallReq';
import { CreateFirewallReqChargeInfo } from './model/CreateFirewallReqChargeInfo';
import { CreateFirewallReqFlavor } from './model/CreateFirewallReqFlavor';
import { CreateFirewallReqTags } from './model/CreateFirewallReqTags';
import { CreateFirewallRequest } from './model/CreateFirewallRequest';
import { CreateFirewallResponse } from './model/CreateFirewallResponse';
import { CreateTag } from './model/CreateTag';
import { CreateTagRequest } from './model/CreateTagRequest';
import { CreateTagResponse } from './model/CreateTagResponse';
import { CreateTagsDto } from './model/CreateTagsDto';
import { CustomerIpsListVO } from './model/CustomerIpsListVO';
import { CustomerIpsSaveDto } from './model/CustomerIpsSaveDto';
import { CustomerIpsVO } from './model/CustomerIpsVO';
import { DeleteAclRuleHitCountRequest } from './model/DeleteAclRuleHitCountRequest';
import { DeleteAclRuleHitCountResponse } from './model/DeleteAclRuleHitCountResponse';
import { DeleteAclRuleRequest } from './model/DeleteAclRuleRequest';
import { DeleteAclRuleResponse } from './model/DeleteAclRuleResponse';
import { DeleteAddressItemRequest } from './model/DeleteAddressItemRequest';
import { DeleteAddressItemResponse } from './model/DeleteAddressItemResponse';
import { DeleteAddressItemsInfoDto } from './model/DeleteAddressItemsInfoDto';
import { DeleteAddressSetRequest } from './model/DeleteAddressSetRequest';
import { DeleteAddressSetResponse } from './model/DeleteAddressSetResponse';
import { DeleteBlackWhiteListRequest } from './model/DeleteBlackWhiteListRequest';
import { DeleteBlackWhiteListResponse } from './model/DeleteBlackWhiteListResponse';
import { DeleteCaptureTaskDto } from './model/DeleteCaptureTaskDto';
import { DeleteCaptureTaskRequest } from './model/DeleteCaptureTaskRequest';
import { DeleteCaptureTaskResponse } from './model/DeleteCaptureTaskResponse';
import { DeleteDomainDto } from './model/DeleteDomainDto';
import { DeleteDomainSetRequest } from './model/DeleteDomainSetRequest';
import { DeleteDomainSetResponse } from './model/DeleteDomainSetResponse';
import { DeleteDomainsRequest } from './model/DeleteDomainsRequest';
import { DeleteDomainsResponse } from './model/DeleteDomainsResponse';
import { DeleteFirewallRequest } from './model/DeleteFirewallRequest';
import { DeleteFirewallResponse } from './model/DeleteFirewallResponse';
import { DeleteIpBlacklistRequest } from './model/DeleteIpBlacklistRequest';
import { DeleteIpBlacklistResponse } from './model/DeleteIpBlacklistResponse';
import { DeleteRuleAclDto } from './model/DeleteRuleAclDto';
import { DeleteServiceItemDto } from './model/DeleteServiceItemDto';
import { DeleteServiceItemRequest } from './model/DeleteServiceItemRequest';
import { DeleteServiceItemResponse } from './model/DeleteServiceItemResponse';
import { DeleteServiceItemResponseBodyData } from './model/DeleteServiceItemResponseBodyData';
import { DeleteServiceSetRequest } from './model/DeleteServiceSetRequest';
import { DeleteServiceSetResponse } from './model/DeleteServiceSetResponse';
import { DeleteTagRequest } from './model/DeleteTagRequest';
import { DeleteTagResponse } from './model/DeleteTagResponse';
import { DeleteTagsDto } from './model/DeleteTagsDto';
import { DnsServersResponseDTO } from './model/DnsServersResponseDTO';
import { DomainInfo } from './model/DomainInfo';
import { DomainSetInfoDto } from './model/DomainSetInfoDto';
import { DomainSetResponseData } from './model/DomainSetResponseData';
import { DomainSetVo } from './model/DomainSetVo';
import { EIPSwitchStatusVO } from './model/EIPSwitchStatusVO';
import { EipCountRespData } from './model/EipCountRespData';
import { EipOperateProtectReq } from './model/EipOperateProtectReq';
import { EipOperateProtectReqIpInfos } from './model/EipOperateProtectReqIpInfos';
import { EipResource } from './model/EipResource';
import { EipResponseData } from './model/EipResponseData';
import { EnableIpBlacklistRequest } from './model/EnableIpBlacklistRequest';
import { EnableIpBlacklistResponse } from './model/EnableIpBlacklistResponse';
import { Er } from './model/Er';
import { ErInstance } from './model/ErInstance';
import { EwProtectResourceInfo } from './model/EwProtectResourceInfo';
import { ExportIpBlacklistRequest } from './model/ExportIpBlacklistRequest';
import { ExportIpBlacklistResponse } from './model/ExportIpBlacklistResponse';
import { FailedEipInfo } from './model/FailedEipInfo';
import { FirewallInstanceResource } from './model/FirewallInstanceResource';
import { FirewallInstanceVO } from './model/FirewallInstanceVO';
import { FirewallStatusVO } from './model/FirewallStatusVO';
import { Flavor } from './model/Flavor';
import { GetCreateFirewallJobResponseData } from './model/GetCreateFirewallJobResponseData';
import { GetEastWestFirewallResponseBody } from './model/GetEastWestFirewallResponseBody';
import { GetFirewallInstanceData } from './model/GetFirewallInstanceData';
import { GetFirewallInstanceResponseRecord } from './model/GetFirewallInstanceResponseRecord';
import { HostHeaderInfo } from './model/HostHeaderInfo';
import { HttpFirewallInstanceListResponseData } from './model/HttpFirewallInstanceListResponseData';
import { HttpGetAclTagResponseData } from './model/HttpGetAclTagResponseData';
import { HttpListCustomerIpsResponseData } from './model/HttpListCustomerIpsResponseData';
import { HttpQueryCaptureTaskResponseData } from './model/HttpQueryCaptureTaskResponseData';
import { HttpQueryCfwAccessControllerLogsResponseDTOData } from './model/HttpQueryCfwAccessControllerLogsResponseDTOData';
import { HttpQueryCfwAccessControllerLogsResponseDTODataRecords } from './model/HttpQueryCfwAccessControllerLogsResponseDTODataRecords';
import { HttpQueryCfwAttackLogsResponseDTOData } from './model/HttpQueryCfwAttackLogsResponseDTOData';
import { HttpQueryCfwAttackLogsResponseDTODataRecords } from './model/HttpQueryCfwAttackLogsResponseDTODataRecords';
import { HttpQueryCfwFlowLogsResponseDTOData } from './model/HttpQueryCfwFlowLogsResponseDTOData';
import { HttpQueryCfwFlowLogsResponseDTODataRecords } from './model/HttpQueryCfwFlowLogsResponseDTODataRecords';
import { ImportIpBlacklistRequest } from './model/ImportIpBlacklistRequest';
import { ImportIpBlacklistResponse } from './model/ImportIpBlacklistResponse';
import { IpBlacklistDeleteDto } from './model/IpBlacklistDeleteDto';
import { IpBlacklistEnableDto } from './model/IpBlacklistEnableDto';
import { IpBlacklistImportDto } from './model/IpBlacklistImportDto';
import { IpBlacklistSwitchInfoVo } from './model/IpBlacklistSwitchInfoVo';
import { IpBlacklistVO } from './model/IpBlacklistVO';
import { IpRegionDto } from './model/IpRegionDto';
import { IpsContent } from './model/IpsContent';
import { IpsProtectDTO } from './model/IpsProtectDTO';
import { IpsProtectModeObject } from './model/IpsProtectModeObject';
import { IpsRuleChangeDto } from './model/IpsRuleChangeDto';
import { IpsRuleChangeRespBody } from './model/IpsRuleChangeRespBody';
import { IpsRuleListVO } from './model/IpsRuleListVO';
import { IpsRuleUpdateTimeVO } from './model/IpsRuleUpdateTimeVO';
import { IpsRuleVO } from './model/IpsRuleVO';
import { IpsSwitchDTO } from './model/IpsSwitchDTO';
import { IpsSwitchResponseDTO } from './model/IpsSwitchResponseDTO';
import { ListAccessControlLogsRequest } from './model/ListAccessControlLogsRequest';
import { ListAccessControlLogsResponse } from './model/ListAccessControlLogsResponse';
import { ListAclRuleHitCountRequest } from './model/ListAclRuleHitCountRequest';
import { ListAclRuleHitCountResponse } from './model/ListAclRuleHitCountResponse';
import { ListAclRulesRequest } from './model/ListAclRulesRequest';
import { ListAclRulesResponse } from './model/ListAclRulesResponse';
import { ListAddressItemsRequest } from './model/ListAddressItemsRequest';
import { ListAddressItemsResponse } from './model/ListAddressItemsResponse';
import { ListAddressSetDetailRequest } from './model/ListAddressSetDetailRequest';
import { ListAddressSetDetailResponse } from './model/ListAddressSetDetailResponse';
import { ListAddressSetsRequest } from './model/ListAddressSetsRequest';
import { ListAddressSetsResponse } from './model/ListAddressSetsResponse';
import { ListAlarmWhitelistRequest } from './model/ListAlarmWhitelistRequest';
import { ListAlarmWhitelistResponse } from './model/ListAlarmWhitelistResponse';
import { ListAttackLogsRequest } from './model/ListAttackLogsRequest';
import { ListAttackLogsResponse } from './model/ListAttackLogsResponse';
import { ListAttackStatisticRequest } from './model/ListAttackStatisticRequest';
import { ListAttackStatisticResponse } from './model/ListAttackStatisticResponse';
import { ListBlackWhiteListsRequest } from './model/ListBlackWhiteListsRequest';
import { ListBlackWhiteListsResponse } from './model/ListBlackWhiteListsResponse';
import { ListCaptureResultRequest } from './model/ListCaptureResultRequest';
import { ListCaptureResultResponse } from './model/ListCaptureResultResponse';
import { ListCaptureTaskRequest } from './model/ListCaptureTaskRequest';
import { ListCaptureTaskResponse } from './model/ListCaptureTaskResponse';
import { ListCustomerIpsRequest } from './model/ListCustomerIpsRequest';
import { ListCustomerIpsResponse } from './model/ListCustomerIpsResponse';
import { ListDnsServersRequest } from './model/ListDnsServersRequest';
import { ListDnsServersResponse } from './model/ListDnsServersResponse';
import { ListDomainParseDetailRequest } from './model/ListDomainParseDetailRequest';
import { ListDomainParseDetailResponse } from './model/ListDomainParseDetailResponse';
import { ListDomainParseIpRequest } from './model/ListDomainParseIpRequest';
import { ListDomainParseIpResponse } from './model/ListDomainParseIpResponse';
import { ListDomainResponseData } from './model/ListDomainResponseData';
import { ListDomainSetsRequest } from './model/ListDomainSetsRequest';
import { ListDomainSetsResponse } from './model/ListDomainSetsResponse';
import { ListDomainsRequest } from './model/ListDomainsRequest';
import { ListDomainsResponse } from './model/ListDomainsResponse';
import { ListDomainsetsResponseData } from './model/ListDomainsetsResponseData';
import { ListEastWestFirewallRequest } from './model/ListEastWestFirewallRequest';
import { ListEastWestFirewallResponse } from './model/ListEastWestFirewallResponse';
import { ListEipCountRequest } from './model/ListEipCountRequest';
import { ListEipCountResponse } from './model/ListEipCountResponse';
import { ListEipsRequest } from './model/ListEipsRequest';
import { ListEipsResponse } from './model/ListEipsResponse';
import { ListFirewallDetailRequest } from './model/ListFirewallDetailRequest';
import { ListFirewallDetailResponse } from './model/ListFirewallDetailResponse';
import { ListFirewallListRequest } from './model/ListFirewallListRequest';
import { ListFirewallListResponse } from './model/ListFirewallListResponse';
import { ListFlowLogsRequest } from './model/ListFlowLogsRequest';
import { ListFlowLogsResponse } from './model/ListFlowLogsResponse';
import { ListIpBlacklistRequest } from './model/ListIpBlacklistRequest';
import { ListIpBlacklistResponse } from './model/ListIpBlacklistResponse';
import { ListIpBlacklistSwitchRequest } from './model/ListIpBlacklistSwitchRequest';
import { ListIpBlacklistSwitchResponse } from './model/ListIpBlacklistSwitchResponse';
import { ListIpsProtectModeRequest } from './model/ListIpsProtectModeRequest';
import { ListIpsProtectModeResponse } from './model/ListIpsProtectModeResponse';
import { ListIpsRules1Request } from './model/ListIpsRules1Request';
import { ListIpsRules1Response } from './model/ListIpsRules1Response';
import { ListIpsRulesRequest } from './model/ListIpsRulesRequest';
import { ListIpsRulesResponse } from './model/ListIpsRulesResponse';
import { ListIpsSwitchStatusRequest } from './model/ListIpsSwitchStatusRequest';
import { ListIpsSwitchStatusResponse } from './model/ListIpsSwitchStatusResponse';
import { ListJobRequest } from './model/ListJobRequest';
import { ListJobResponse } from './model/ListJobResponse';
import { ListLogConfigRequest } from './model/ListLogConfigRequest';
import { ListLogConfigResponse } from './model/ListLogConfigResponse';
import { ListProjectTagsRequest } from './model/ListProjectTagsRequest';
import { ListProjectTagsResponse } from './model/ListProjectTagsResponse';
import { ListProtectedVpcsRequest } from './model/ListProtectedVpcsRequest';
import { ListProtectedVpcsResponse } from './model/ListProtectedVpcsResponse';
import { ListRegionsRequest } from './model/ListRegionsRequest';
import { ListRegionsResponse } from './model/ListRegionsResponse';
import { ListResourceTagsRequest } from './model/ListResourceTagsRequest';
import { ListResourceTagsResponse } from './model/ListResourceTagsResponse';
import { ListRuleAclTagsRequest } from './model/ListRuleAclTagsRequest';
import { ListRuleAclTagsResponse } from './model/ListRuleAclTagsResponse';
import { ListRuleHitCountDto } from './model/ListRuleHitCountDto';
import { ListServiceItemsRequest } from './model/ListServiceItemsRequest';
import { ListServiceItemsResponse } from './model/ListServiceItemsResponse';
import { ListServiceSetDetailRequest } from './model/ListServiceSetDetailRequest';
import { ListServiceSetDetailResponse } from './model/ListServiceSetDetailResponse';
import { ListServiceSetsRequest } from './model/ListServiceSetsRequest';
import { ListServiceSetsResponse } from './model/ListServiceSetsResponse';
import { LogConfigDto } from './model/LogConfigDto';
import { Mapstringstring } from './model/Mapstringstring';
import { ObjectInfoDto } from './model/ObjectInfoDto';
import { OrderRuleAclDto } from './model/OrderRuleAclDto';
import { OrderRuleId } from './model/OrderRuleId';
import { PacketMessage } from './model/PacketMessage';
import { PageDataIpBlacklistsVo } from './model/PageDataIpBlacklistsVo';
import { PageInfo } from './model/PageInfo';
import { Port } from './model/Port';
import { ProtectObjectVO } from './model/ProtectObjectVO';
import { QueryFireWallInstanceDto } from './model/QueryFireWallInstanceDto';
import { ResourceTag } from './model/ResourceTag';
import { ResponseData } from './model/ResponseData';
import { RetryIpBlacklistRequest } from './model/RetryIpBlacklistRequest';
import { RetryIpBlacklistResponse } from './model/RetryIpBlacklistResponse';
import { RuleAclListResponseDTOData } from './model/RuleAclListResponseDTOData';
import { RuleAclListResponseDTODataRecords } from './model/RuleAclListResponseDTODataRecords';
import { RuleAddressDto } from './model/RuleAddressDto';
import { RuleAddressDtoForRequest } from './model/RuleAddressDtoForRequest';
import { RuleAddressDtoForResponse } from './model/RuleAddressDtoForResponse';
import { RuleHitCountObject } from './model/RuleHitCountObject';
import { RuleHitCountRecords } from './model/RuleHitCountRecords';
import { RuleId } from './model/RuleId';
import { RuleIdList } from './model/RuleIdList';
import { RuleServiceDto } from './model/RuleServiceDto';
import { RuleServiceDtoForResponse } from './model/RuleServiceDtoForResponse';
import { SaveTagsRequest } from './model/SaveTagsRequest';
import { SaveTagsResponse } from './model/SaveTagsResponse';
import { ScanProtocolConfig } from './model/ScanProtocolConfig';
import { ServiceGroupVO } from './model/ServiceGroupVO';
import { ServiceItem } from './model/ServiceItem';
import { ServiceItemIds } from './model/ServiceItemIds';
import { ServiceItemIdsItems } from './model/ServiceItemIdsItems';
import { ServiceItemListResponseDtoData } from './model/ServiceItemListResponseDtoData';
import { ServiceItemListResponseDtoDataRecords } from './model/ServiceItemListResponseDtoDataRecords';
import { ServiceSet } from './model/ServiceSet';
import { ServiceSetDetailResponseDto } from './model/ServiceSetDetailResponseDto';
import { ServiceSetId } from './model/ServiceSetId';
import { ServiceSetRecords } from './model/ServiceSetRecords';
import { ShowAccessTopRequest } from './model/ShowAccessTopRequest';
import { ShowAccessTopResponse } from './model/ShowAccessTopResponse';
import { ShowAlarmConfigRequest } from './model/ShowAlarmConfigRequest';
import { ShowAlarmConfigResponse } from './model/ShowAlarmConfigResponse';
import { ShowAntiVirusRuleRequest } from './model/ShowAntiVirusRuleRequest';
import { ShowAntiVirusRuleResponse } from './model/ShowAntiVirusRuleResponse';
import { ShowAntiVirusSwitchRequest } from './model/ShowAntiVirusSwitchRequest';
import { ShowAntiVirusSwitchResponse } from './model/ShowAntiVirusSwitchResponse';
import { ShowAttackTotalRequest } from './model/ShowAttackTotalRequest';
import { ShowAttackTotalRespData } from './model/ShowAttackTotalRespData';
import { ShowAttackTotalResponse } from './model/ShowAttackTotalResponse';
import { ShowAttackTrendRequest } from './model/ShowAttackTrendRequest';
import { ShowAttackTrendResponse } from './model/ShowAttackTrendResponse';
import { ShowAutoProtectStatusRequest } from './model/ShowAutoProtectStatusRequest';
import { ShowAutoProtectStatusResponse } from './model/ShowAutoProtectStatusResponse';
import { ShowCustomerIpsInfoRequest } from './model/ShowCustomerIpsInfoRequest';
import { ShowCustomerIpsInfoResponse } from './model/ShowCustomerIpsInfoResponse';
import { ShowDomainSetDetailRequest } from './model/ShowDomainSetDetailRequest';
import { ShowDomainSetDetailResponse } from './model/ShowDomainSetDetailResponse';
import { ShowImportStatusRequest } from './model/ShowImportStatusRequest';
import { ShowImportStatusResponse } from './model/ShowImportStatusResponse';
import { ShowIpsUpdateTimeRequest } from './model/ShowIpsUpdateTimeRequest';
import { ShowIpsUpdateTimeResponse } from './model/ShowIpsUpdateTimeResponse';
import { ShowTrafficTrendRequest } from './model/ShowTrafficTrendRequest';
import { ShowTrafficTrendResponse } from './model/ShowTrafficTrendResponse';
import { SubnetInfo } from './model/SubnetInfo';
import { SwitchAutoProtectStatusRequest } from './model/SwitchAutoProtectStatusRequest';
import { SwitchAutoProtectStatusResponse } from './model/SwitchAutoProtectStatusResponse';
import { SwitchEipStatusDto } from './model/SwitchEipStatusDto';
import { TagInfo } from './model/TagInfo';
import { TagValue } from './model/TagValue';
import { TagsVO } from './model/TagsVO';
import { TopInfo } from './model/TopInfo';
import { TrafficTrendVO } from './model/TrafficTrendVO';
import { UpdateAclRuleOrderRequest } from './model/UpdateAclRuleOrderRequest';
import { UpdateAclRuleOrderResponse } from './model/UpdateAclRuleOrderResponse';
import { UpdateAclRuleRequest } from './model/UpdateAclRuleRequest';
import { UpdateAclRuleResponse } from './model/UpdateAclRuleResponse';
import { UpdateAddressSetDto } from './model/UpdateAddressSetDto';
import { UpdateAddressSetRequest } from './model/UpdateAddressSetRequest';
import { UpdateAddressSetResponse } from './model/UpdateAddressSetResponse';
import { UpdateAddressSetResponseData } from './model/UpdateAddressSetResponseData';
import { UpdateAdvancedIpsRuleRequest } from './model/UpdateAdvancedIpsRuleRequest';
import { UpdateAdvancedIpsRuleResponse } from './model/UpdateAdvancedIpsRuleResponse';
import { UpdateAlarmConfigRequest } from './model/UpdateAlarmConfigRequest';
import { UpdateAlarmConfigResponse } from './model/UpdateAlarmConfigResponse';
import { UpdateAntiVirusRuleRequest } from './model/UpdateAntiVirusRuleRequest';
import { UpdateAntiVirusRuleResponse } from './model/UpdateAntiVirusRuleResponse';
import { UpdateAntiVirusSwitchRequest } from './model/UpdateAntiVirusSwitchRequest';
import { UpdateAntiVirusSwitchResponse } from './model/UpdateAntiVirusSwitchResponse';
import { UpdateAttackLogAlarmConfigDto } from './model/UpdateAttackLogAlarmConfigDto';
import { UpdateBlackWhiteListDto } from './model/UpdateBlackWhiteListDto';
import { UpdateBlackWhiteListRequest } from './model/UpdateBlackWhiteListRequest';
import { UpdateBlackWhiteListResponse } from './model/UpdateBlackWhiteListResponse';
import { UpdateCustomerIpsRequest } from './model/UpdateCustomerIpsRequest';
import { UpdateCustomerIpsResponse } from './model/UpdateCustomerIpsResponse';
import { UpdateDnsServersRequest } from './model/UpdateDnsServersRequest';
import { UpdateDnsServersRequestBody } from './model/UpdateDnsServersRequestBody';
import { UpdateDnsServersRequestBodyDnsServer } from './model/UpdateDnsServersRequestBodyDnsServer';
import { UpdateDnsServersResponse } from './model/UpdateDnsServersResponse';
import { UpdateDomainSetInfoDto } from './model/UpdateDomainSetInfoDto';
import { UpdateDomainSetRequest } from './model/UpdateDomainSetRequest';
import { UpdateDomainSetResponse } from './model/UpdateDomainSetResponse';
import { UpdateLogConfigRequest } from './model/UpdateLogConfigRequest';
import { UpdateLogConfigResponse } from './model/UpdateLogConfigResponse';
import { UpdateObjectConfigDescRequest } from './model/UpdateObjectConfigDescRequest';
import { UpdateObjectConfigDescResponse } from './model/UpdateObjectConfigDescResponse';
import { UpdateRuleAclDto } from './model/UpdateRuleAclDto';
import { UpdateSecurityPolciesActionDto } from './model/UpdateSecurityPolciesActionDto';
import { UpdateServiceSetRequest } from './model/UpdateServiceSetRequest';
import { UpdateServiceSetResponse } from './model/UpdateServiceSetResponse';
import { UpdateServiceSetUsingPUTRequestBody } from './model/UpdateServiceSetUsingPUTRequestBody';
import { UseRuleVO } from './model/UseRuleVO';
import { VPCProtectsVo } from './model/VPCProtectsVo';
import { VpcAttachmentDetail } from './model/VpcAttachmentDetail';
import { VpcDetail } from './model/VpcDetail';

export class CfwClient {
    public static newBuilder(): ClientBuilder<CfwClient> {
            let client = new ClientBuilder<CfwClient>(newClient);
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
     * 添加地址组成员
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加地址组成员
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {AddAddressItemsInfoDto} addAddressItemsUsingPOSTRequestBody 添加地址组成员请求体
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [fwInstanceId] 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addAddressItem(addAddressItemRequest?: AddAddressItemRequest): Promise<AddAddressItemResponse> {
        const options = ParamCreater().addAddressItem(addAddressItemRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加地址组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加地址组
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {AddAddressSetDto} addAddressSetInfoUsingPOSTRequestBody 添加地址组请求体
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [fwInstanceId] 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addAddressSet(addAddressSetRequest?: AddAddressSetRequest): Promise<AddAddressSetResponse> {
        const options = ParamCreater().addAddressSet(addAddressSetRequest);

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
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {AddBlackWhiteListDto} addBlackWhiteListUsingPOSTRequestBody 添加黑白名单请求体
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [fwInstanceId] 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addBlackWhiteList(addBlackWhiteListRequest?: AddBlackWhiteListRequest): Promise<AddBlackWhiteListResponse> {
        const options = ParamCreater().addBlackWhiteList(addBlackWhiteListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加域名组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加域名组
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} fwInstanceId 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {AddDomainSetInfoDto} addDomainSetInfoDto 添加域名组请求体
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addDomainSet(addDomainSetRequest?: AddDomainSetRequest): Promise<AddDomainSetResponse> {
        const options = ParamCreater().addDomainSet(addDomainSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加域名列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加域名列表
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} setId 域名组id，可通过[查询域名组列表接口](ListDomainSets.xml)查询获得，通过返回值中的data.records.set_id（.表示各对象之间层级的区分）获得。
     * @param {AddDomainListDto} addDomainListDto 添加域名列表请求体
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [fwInstanceId] 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addDomains(addDomainsRequest?: AddDomainsRequest): Promise<AddDomainsResponse> {
        const options = ParamCreater().addDomains(addDomainsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建日志配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建日志配置
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} fwInstanceId 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {LogConfigDto} logConfigDto 添加LTS日志配置
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addLogConfig(addLogConfigRequest?: AddLogConfigRequest): Promise<AddLogConfigResponse> {
        const options = ParamCreater().addLogConfig(addLogConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量添加服务组成员
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新建服务成员
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {AddServiceItemsUsingPOSTRequestBody} addServiceItemsUsingPOSTRequestBody 添加服务组成员请求体
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [fwInstanceId] 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addServiceItems(addServiceItemsRequest?: AddServiceItemsRequest): Promise<AddServiceItemsResponse> {
        const options = ParamCreater().addServiceItems(addServiceItemsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建服务组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新建服务组
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {AddServiceSetUsingPOSTRequestBody} addServiceSetUsingPOSTRequestBody 创建服务组请求体
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [fwInstanceId] 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addServiceSet(addServiceSetRequest?: AddServiceSetRequest): Promise<AddServiceSetResponse> {
        const options = ParamCreater().addServiceSet(addServiceSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除地址组成员
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除地址组成员
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {DeleteAddressItemsInfoDto} deleteAddressItemsInfoDto 批量删除地址组成员请求体
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [fwInstanceId] 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteAddressItems(batchDeleteAddressItemsRequest?: BatchDeleteAddressItemsRequest): Promise<BatchDeleteAddressItemsResponse> {
        const options = ParamCreater().batchDeleteAddressItems(batchDeleteAddressItemsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除域名组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除域名组
     * @param {string} projectId 项目ID，可以从调API处获取，也可以从控制台获取。可通过[项目ID获取方式](cfw_02_0015.xml)获取
     * @param {BatchDeleteDomainSetsDto} batchDeleteDomainSetsDto 批量删除域名组请求体
     * @param {string} [fwInstanceId] 防火墙ID，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteDomainSet(batchDeleteDomainSetRequest?: BatchDeleteDomainSetRequest): Promise<BatchDeleteDomainSetResponse> {
        const options = ParamCreater().batchDeleteDomainSet(batchDeleteDomainSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除服务组成员信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除服务组成员信息
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {DeleteServiceItemDto} deleteServiceItemDto 批量删除服务组成员请求体
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [fwInstanceId] 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteServiceItems(batchDeleteServiceItemsRequest?: BatchDeleteServiceItemsRequest): Promise<BatchDeleteServiceItemsResponse> {
        const options = ParamCreater().batchDeleteServiceItems(batchDeleteServiceItemsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 取消抓包任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 取消抓包任务
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} fwInstanceId 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {CancelCaptureTaskDto} cancelCaptureTaskDto 停止抓包任务请求体
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cancelCaptureTask(cancelCaptureTaskRequest?: CancelCaptureTaskRequest): Promise<CancelCaptureTaskResponse> {
        const options = ParamCreater().cancelCaptureTask(cancelCaptureTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 东西向防护开启/关闭
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改东西向防火墙防护状态
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {ChangeProtectStatusRequestBody} changeEwProtectStatusRequestBody 修改东西向防护状态请求体
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [fwInstanceId] 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeEastWestFirewallStatus(changeEastWestFirewallStatusRequest?: ChangeEastWestFirewallStatusRequest): Promise<ChangeEastWestFirewallStatusResponse> {
        const options = ParamCreater().changeEastWestFirewallStatus(changeEastWestFirewallStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建抓包任务，每个任务只能执行一次。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建抓包任务
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} fwInstanceId 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {CaptureTaskDto} captureTaskDto 创建抓包任务请求体
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCaptureTask(createCaptureTaskRequest?: CreateCaptureTaskRequest): Promise<CreateCaptureTaskResponse> {
        const options = ParamCreater().createCaptureTask(createCaptureTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建东西向防火墙
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建东西向防火墙
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} fwInstanceId 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {CreateEastWestFirewallRequestBody} createEastWestFirewallRequestBody 创建东西向防火墙请求体
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createEastWestFirewall(createEastWestFirewallRequest?: CreateEastWestFirewallRequest): Promise<CreateEastWestFirewallResponse> {
        const options = ParamCreater().createEastWestFirewall(createEastWestFirewallRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建防火墙
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建防火墙
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {CreateFirewallReq} createFirewallRequest 创建防火墙请求参数
     * @param {string} [xClientToken] 保证客户端请求幂等性的标识。  该标识为32位UUID格式，由客户端生成，且需确保不同请求之间该标识具有唯一性。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createFirewall(createFirewallRequest?: CreateFirewallRequest): Promise<CreateFirewallResponse> {
        const options = ParamCreater().createFirewall(createFirewallRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 标签创建接口
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} fwInstanceId 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {CreateTagsDto} [createTagsDto] 创建标签DTO
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTag(createTagRequest?: CreateTagRequest): Promise<CreateTagResponse> {
        const options = ParamCreater().createTag(createTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除地址组成员
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除地址组成员
     * @param {string} itemId 地址组成员id，可通过[查询地址组成员接口](ListAddressItems.xml)查询获得，通过返回值中的data.records.item_id（.表示各对象之间层级的区分）获得。
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [fwInstanceId] 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAddressItem(deleteAddressItemRequest?: DeleteAddressItemRequest): Promise<DeleteAddressItemResponse> {
        const options = ParamCreater().deleteAddressItem(deleteAddressItemRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除地址组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除地址组
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} setId 地址组id，可通过[查询地址组列表接口](ListAddressSets.xml)查询获得，通过返回值中的data.records.set_id（.表示各对象之间层级的区分）获得。
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [fwInstanceId] 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAddressSet(deleteAddressSetRequest?: DeleteAddressSetRequest): Promise<DeleteAddressSetResponse> {
        const options = ParamCreater().deleteAddressSet(deleteAddressSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除黑白名单规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除黑白名单规则
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} listId 黑白名单列表id，可通过[查询黑白名单列表接口](ListBlackWhiteLists.xml)查询获得，通过返回值中的data.records.list_id（.表示各对象之间层级的区分）获得。
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [fwInstanceId] 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteBlackWhiteList(deleteBlackWhiteListRequest?: DeleteBlackWhiteListRequest): Promise<DeleteBlackWhiteListResponse> {
        const options = ParamCreater().deleteBlackWhiteList(deleteBlackWhiteListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除抓包任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除抓包任务
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} fwInstanceId 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {DeleteCaptureTaskDto} deleteCaptureTaskDto 删除抓包任务请求体
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCaptureTask(deleteCaptureTaskRequest?: DeleteCaptureTaskRequest): Promise<DeleteCaptureTaskResponse> {
        const options = ParamCreater().deleteCaptureTask(deleteCaptureTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除域名组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除域名组
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} setId 域名组id，可通过[查询域名组列表接口](ListDomainSets.xml)查询获得，通过返回值中的data.records.set_id（.表示各对象之间层级的区分）获得。
     * @param {string} fwInstanceId 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDomainSet(deleteDomainSetRequest?: DeleteDomainSetRequest): Promise<DeleteDomainSetResponse> {
        const options = ParamCreater().deleteDomainSet(deleteDomainSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除域名列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除域名列表
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} setId 域名组id，可通过[查询域名组列表接口](ListDomainSets.xml)查询获得，通过返回值中的data.records.set_id（.表示各对象之间层级的区分）获得。
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [fwInstanceId] 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {DeleteDomainDto} [deleteDomainDto] 删除域名组列表请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDomains(deleteDomainsRequest?: DeleteDomainsRequest): Promise<DeleteDomainsResponse> {
        const options = ParamCreater().deleteDomains(deleteDomainsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除防火墙，仅按需生效
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除防火墙
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} resourceId 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteFirewall(deleteFirewallRequest?: DeleteFirewallRequest): Promise<DeleteFirewallResponse> {
        const options = ParamCreater().deleteFirewall(deleteFirewallRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除流量过滤功能下已经导入的IP黑名单，指定生效范围进行删除。 标准版的墙只会存在生效范围为EIP的IP黑名单，专业版的墙会存在生效范围为EIP和NAT的IP黑名单。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除已经导入的IP黑名单
     * @param {string} projectId 项目ID，可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} fwInstanceId 防火墙ID，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {IpBlacklistDeleteDto} deleteIpBlacklistRequestBody 删除IP黑名单请求的参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteIpBlacklist(deleteIpBlacklistRequest?: DeleteIpBlacklistRequest): Promise<DeleteIpBlacklistResponse> {
        const options = ParamCreater().deleteIpBlacklist(deleteIpBlacklistRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除服务组成员
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除服务成员
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} itemId 服务组成员id，可通过[查询服务成员列表接口](ListServiceItems.xml)查询获得，通过返回值中的data.records.item_id（.表示各对象之间层级的区分）获得。
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [fwInstanceId] 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteServiceItem(deleteServiceItemRequest?: DeleteServiceItemRequest): Promise<DeleteServiceItemResponse> {
        const options = ParamCreater().deleteServiceItem(deleteServiceItemRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除服务组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除服务组
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} setId 服务组id，可通过[获取服务组列表接口](ListServiceSets.xml)查询获得，通过返回值中的data.records.set_id（.表示各对象之间层级的区分）获得。
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [fwInstanceId] 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteServiceSet(deleteServiceSetRequest?: DeleteServiceSetRequest): Promise<DeleteServiceSetResponse> {
        const options = ParamCreater().deleteServiceSet(deleteServiceSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除标签
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} fwInstanceId 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {DeleteTagsDto} [deleteTagsDto] 删除标签dto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTag(deleteTagRequest?: DeleteTagRequest): Promise<DeleteTagResponse> {
        const options = ParamCreater().deleteTag(deleteTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启或者关闭流量过滤功能，当前流量过滤是通过导入IP黑名单实现的。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启或者关闭流量过滤的IP黑名单功能
     * @param {string} projectId 项目ID，可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} fwInstanceId 防火墙ID，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {IpBlacklistEnableDto} enableIpBlacklistRequestBody 流量过滤的开关信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enableIpBlacklist(enableIpBlacklistRequest?: EnableIpBlacklistRequest): Promise<EnableIpBlacklistResponse> {
        const options = ParamCreater().enableIpBlacklist(enableIpBlacklistRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 指定IP黑名单的名字进行导出，当前只有两种文件名，在EIP生效的文件名为ip-blacklist-eip.txt，在 NAT生效的文件名为ip-blacklist-nat.txt。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导出用于流量过滤的IP黑名单
     * @param {string} projectId 项目ID，可以从调API处获取，也可以从控制台获取。可通过[项目ID获取方式](cfw_02_0015.xml)获取
     * @param {string} fwInstanceId 防火墙ID，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {string} name IP黑名单的名字，如果要导出生效范围为EIP的IP黑名单，就指定名字为ip-blacklist-eip.txt，如果要导出生效范围为NAT的IP黑名单，就指定名字为ip-blacklist-nat.txt。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public exportIpBlacklist(exportIpBlacklistRequest?: ExportIpBlacklistRequest): Promise<ExportIpBlacklistResponse> {
        const options = ParamCreater().exportIpBlacklist(exportIpBlacklistRequest);

         // @ts-ignore
        options['responseHeaders'] = ['Content-Disposition', 'Content-Type'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 此接口用来导入IP黑名单，IP列表保存在request的body中，IP列表支持的格式如下：
     * 单个IP地址，例如：100.1.1.10
     * 连续的IP地址段，例如：80.1.1.3-80.1.1.30
     * 掩码格式的网段，例如：6.6.6.0/24
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导入IP黑名单用于流量过滤
     * @param {string} projectId 项目ID，可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} fwInstanceId 防火墙ID，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {IpBlacklistImportDto} importIpBlacklistRequestBody IP黑名单的导入参数，包括导入的方式(增量或者全量)、生效的范围和IP列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public importIpBlacklist(importIpBlacklistRequest?: ImportIpBlacklistRequest): Promise<ImportIpBlacklistResponse> {
        const options = ParamCreater().importIpBlacklist(importIpBlacklistRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询访问控制日志
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询访问控制日志
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} fwInstanceId 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {number} startTime 开始时间，以毫秒为单位的时间戳，如1718936272648
     * @param {number} endTime 结束时间，以毫秒为单位的时间戳，如1718936272648
     * @param {number} limit 每页显示个数，范围为1-1024
     * @param {string} [ruleId] 规则id，可通过[查询防护规则接口](ListAclRules.xml)查询获得，通过返回值中的data.records.rule_id（.表示各对象之间层级的区分）获得。
     * @param {string} [srcIp] 源IP
     * @param {number} [srcPort] 源端口
     * @param {string} [dstIp] 目的IP
     * @param {number} [dstPort] 目的端口
     * @param {string} [protocol] 协议类型，包含TCP, UDP,ICMP,ICMPV6等。
     * @param {string} [app] 规则应用类型包括：“HTTP”，\&quot;HTTPS\&quot;，\&quot;TLS1\&quot;，“DNS”，“SSH”，“MYSQL”，“SMTP”，“RDP”，“RDPS”，“VNC”，“POP3”，“IMAP4”，“SMTPS”，“POP3S”，“FTPS”，“ANY”,“BGP”等。
     * @param {string} [logId] 文档ID,第一页为空，其他页不为空，其他页可取上一次查询最后一条数据的log_id
     * @param {number} [nextDate] 下个日期，当是第一页时为空，不是第一页时不为空，其他页可取上一次查询最后一条数据的start_time
     * @param {number} [offset] 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于0，首页时为空，非首页时不为空
     * @param {'internet' | 'nat' | 'vpc'} [logType] 日志类型包括：internet，vpc，nat
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [dstHost] 目标主机
     * @param {string} [ruleName] 规则名称
     * @param {string} [action] 动作包含permit，deny
     * @param {string} [srcRegionName] 源region名称
     * @param {string} [dstRegionName] 目的region名称
     * @param {string} [srcProvinceName] 源省份名称
     * @param {string} [dstProvinceName] 目的省份名称
     * @param {string} [srcCityName] 源城市名称
     * @param {string} [dstCityName] 目的城市名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAccessControlLogs(listAccessControlLogsRequest?: ListAccessControlLogsRequest): Promise<ListAccessControlLogsResponse> {
        const options = ParamCreater().listAccessControlLogs(listAccessControlLogsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询地址组成员
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询地址组成员
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} setId 地址组id，可通过[查询地址组列表接口](ListAddressSets.xml)查询获得，通过返回值中的data.records.set_id（.表示各对象之间层级的区分）获得。
     * @param {number} limit 每页显示个数，范围为1-1024
     * @param {number} offset 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，默认0
     * @param {string} [keyWord] 关键字，包括地址组成员名称或描述的一部分
     * @param {string} [address] ip地址
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [fwInstanceId] 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {number} [queryAddressSetType] 查询地址组类型，0表示自定义地址组，1表示预定义地址组
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAddressItems(listAddressItemsRequest?: ListAddressItemsRequest): Promise<ListAddressItemsResponse> {
        const options = ParamCreater().listAddressItems(listAddressItemsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询地址组详细
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询地址组详细信息
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} setId 地址组id，可通过[查询地址组列表接口](ListAddressSets.xml)查询获得，通过返回值中的data.records.set_id（.表示各对象之间层级的区分）获得。
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [fwInstanceId] 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {number} [queryAddressSetType] 查询地址组类型，0表示自定义地址组，1表示预定义地址组
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAddressSetDetail(listAddressSetDetailRequest?: ListAddressSetDetailRequest): Promise<ListAddressSetDetailResponse> {
        const options = ParamCreater().listAddressSetDetail(listAddressSetDetailRequest);

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
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} objectId 防护对象id，是创建云防火墙后用于区分互联网边界防护和VPC边界防护的标志id，可通过调用[查询防火墙实例接口](ListFirewallDetail.xml)获得，通过返回值中的data.records.protect_objects.object_id（.表示各对象之间层级的区分）获得，注意type为0的为互联网边界防护对象id，type为1的为VPC边界防护对象id，type可通过data.records.protect_objects.type（.表示各对象之间层级的区分）获得
     * @param {number} limit 每页显示个数，范围为1-1024
     * @param {number} offset 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，默认0
     * @param {string} [keyWord] 关键字，包括地址组名称或描述的一部分
     * @param {string} [address] ip地址
     * @param {number} [addressType] 地址类型0 ipv4，1 ipv6
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [fwInstanceId] 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {number} [queryAddressSetType] 查询地址组类型，0表示自定义地址组，1表示预定义地址组，当address_set_type不为0时，query_address_set_type为1时才可以生效。
     * @param {number} [addressSetType] 地址组类型，0表示自定义地址组，1表示WAF回源IP地址组，2表示DDoS回源IP地址组，3表示NAT64转换地址组
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAddressSets(listAddressSetsRequest?: ListAddressSetsRequest): Promise<ListAddressSetsResponse> {
        const options = ParamCreater().listAddressSets(listAddressSetsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询攻击日志
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询攻击日志
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {number} startTime 开始时间，以毫秒为单位的时间戳，如1718936272648
     * @param {number} endTime 结束时间，以毫秒为单位的时间戳，如1718936272648
     * @param {number} limit 每页显示个数，范围为1-1024
     * @param {string} fwInstanceId 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {string} [srcIp] 源IP
     * @param {number} [srcPort] 源端口号
     * @param {string} [dstIp] 目的IP
     * @param {number} [dstPort] 目的端口号
     * @param {string} [protocol] 协议类型，包含TCP, UDP,ICMP,ICMPV6等。
     * @param {string} [app] 规则应用类型包括：“HTTP”，\&quot;HTTPS\&quot;，\&quot;TLS1\&quot;，“DNS”，“SSH”，“MYSQL”，“SMTP”，“RDP”，“RDPS”，“VNC”，“POP3”，“IMAP4”，“SMTPS”，“POP3S”，“FTPS”，“ANY”,“BGP”等。
     * @param {string} [logId] 文档ID,第一页为空，其他页不为空，其他页可取上一次查询最后一条数据的log_id
     * @param {number} [nextDate] 下个日期，当是第一页时为空，不是第一页时不为空，其他页可取上一次查询最后一条数据的event_time
     * @param {number} [offset] 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于0，首页时为空，非首页时不为空
     * @param {string} [action] 动作包含permit，deny
     * @param {string} [direction] 方向，包含in2out，out2in
     * @param {string} [attackType] 入侵事件类型
     * @param {string} [attackRule] 入侵事件规则
     * @param {string} [level] 威胁等级，包括CRITICAL、HIGH、MEDIUM、LOW
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [dstHost] 目标主机
     * @param {'internet' | 'nat' | 'vpc'} [logType] 日志类型包括：internet，vpc，nat
     * @param {string} [attackRuleId] 入侵事件id
     * @param {string} [srcRegionName] 源region名称
     * @param {string} [dstRegionName] 目的region名称
     * @param {string} [srcProvinceName] 源省份名称
     * @param {string} [dstProvinceName] 目的省份名称
     * @param {string} [srcCityName] 源城市名称
     * @param {string} [dstCityName] 目的城市名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAttackLogs(listAttackLogsRequest?: ListAttackLogsRequest): Promise<ListAttackLogsResponse> {
        const options = ParamCreater().listAttackLogs(listAttackLogsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据防火墙攻击日志，查询攻击统计信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询攻击统计
     * @param {string} projectId **参数解释**： 项目ID，用于明确项目归属，配置后可通过该ID查询项目下资产，可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml) **约束限制**： 不涉及 **取值范围**： 32位UUID **默认取值**： 不涉及
     * @param {string} fwInstanceId **参数解释**： 防火墙ID，用户创建防火墙实例后产生的唯一ID，配置后可区分不同防火墙，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取 **约束限制**： 不涉及 **取值范围**： 32位UUID **默认取值**： 不涉及 
     * @param {'internet' | 'nat' | 'vpc' | 'vgw'} logType **参数解释**： 日志类型 **约束限制**： 不涉及 **取值范围**： internet为南北向日志、nat为nat场景日志，vpc为东西向日志，vgw为vgw场景日志 **默认取值**： 不涉及 
     * @param {'dst' | 'src'} item **参数解释**： 聚合类型 **约束限制**： 不涉及 **取值范围**： dst TOP攻击目的统计 src TOP攻击来源统计 **默认取值**： 不涉及
     * @param {0 | 1 | 2} [range] **参数解释**： 时间范围  **约束限制**： 不涉及 **取值范围**： 0为近一时 1近一天 2近七天   **默认取值**： 不涉及 
     * @param {'in2out' | 'out2in'} [direction] **参数解释**： 会话方向 **约束限制**： 不涉及 **取值范围**： in2out为出云方向 out2in为入云方向 **默认取值**： 不涉及 
     * @param {number} [startTime] **参数解释**： 开始时间 **约束限制**： 不涉及 **取值范围**： 毫秒级时间戳 **默认取值**： 不涉及 
     * @param {number} [endTime] **参数解释**： 结束时间 **约束限制**： 不涉及 **取值范围**： 毫秒级时间戳 **默认取值**： 不涉及 
     * @param {Array<string>} [vgwId] **参数解释**： VGW ID **约束限制**： 不涉及 **取值范围**： 32位UUID **默认取值**： 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAttackStatistic(listAttackStatisticRequest?: ListAttackStatisticRequest): Promise<ListAttackStatisticResponse> {
        const options = ParamCreater().listAttackStatistic(listAttackStatisticRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询黑白名单列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询黑白名单列表
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} objectId 防护对象id，是创建云防火墙后用于区分互联网边界防护和VPC边界防护的标志id，可通过调用[查询防火墙实例接口](ListFirewallDetail.xml)获得，通过返回值中的data.records.protect_objects.object_id（.表示各对象之间层级的区分）获得，注意type为0的为互联网边界防护对象id，type为1的为VPC边界防护对象id，type可通过data.records.protect_objects.type（.表示各对象之间层级的区分）获得
     * @param {4 | 5} listType 黑白名单类型4：黑名单，5：白名单
     * @param {number} limit 每页显示个数，范围为1-1024
     * @param {number} offset 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，默认0
     * @param {number} [addressType] ip地址类型0：ipv4，1:ipv6
     * @param {string} [address] ip地址
     * @param {string} [port] 端口
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [fwInstanceId] 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBlackWhiteLists(listBlackWhiteListsRequest?: ListBlackWhiteListsRequest): Promise<ListBlackWhiteListsResponse> {
        const options = ParamCreater().listBlackWhiteLists(listBlackWhiteListsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取抓包任务结果
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取抓包任务结果
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} fwInstanceId 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {string} taskId 抓包任务id，可通过[查询抓包任务接口](ListCaptureTask.xml)查询获得，通过返回值中的data.records.task_id（.表示各对象之间层级的区分）获得。
     * @param {number} [type] 是否指定公网ip下载，0：无限制，1：指定公网ip下载
     * @param {Array<string>} [ip] 指定公网ip
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCaptureResult(listCaptureResultRequest?: ListCaptureResultRequest): Promise<ListCaptureResultResponse> {
        const options = ParamCreater().listCaptureResult(listCaptureResultRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询抓包任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询抓包任务
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} fwInstanceId 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {number} limit 每页显示个数，范围为1-1024
     * @param {number} offset 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，默认0
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCaptureTask(listCaptureTaskRequest?: ListCaptureTaskRequest): Promise<ListCaptureTaskResponse> {
        const options = ParamCreater().listCaptureTask(listCaptureTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询dns服务器列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询dns服务器列表
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {number} [limit] 每页显示个数，范围为1-1024
     * @param {number} [offset] 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，默认0
     * @param {string} [fwInstanceId] 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDnsServers(listDnsServersRequest?: ListDnsServersRequest): Promise<ListDnsServersResponse> {
        const options = ParamCreater().listDnsServers(listDnsServersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 测试域名有效性
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询域名解析ip地址
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} domainName 域名，如www.test.com
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [fwInstanceId] 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {number} [addressType] 地址类型，0 ipv4,1 ipv6
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDomainParseDetail(listDomainParseDetailRequest?: ListDomainParseDetailRequest): Promise<ListDomainParseDetailResponse> {
        const options = ParamCreater().listDomainParseDetail(listDomainParseDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取域名地址解析结果
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取域名地址解析结果
     * @param {string} domainAddressId 域名id，域名id可通过[获取域名组下域名列表接口](ListDomains.xml)查询获得，通过返回值中的data.records.domain_address_id（.表示各对象之间层级的区分）获取
     * @param {string} domainSetId 域名组ID，可通过[查询域名组列表接口](ListDomainSets.xml)查询获得，通过返回值中的data.records.set_id（.表示各对象之间层级的区分）获取
     * @param {string} projectId 项目ID，可以从调API处获取，也可以从控制台获取。可通过[项目ID获取方式](cfw_02_0015.xml)获取
     * @param {string} fwInstanceId 防火墙ID，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {number} [addressType] 地址类型，0 ipv4,1 ipv6
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDomainParseIp(listDomainParseIpRequest?: ListDomainParseIpRequest): Promise<ListDomainParseIpResponse> {
        const options = ParamCreater().listDomainParseIp(listDomainParseIpRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询域名组列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询域名组列表
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} fwInstanceId 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {number} limit 每页显示个数，范围为1-1024
     * @param {number} offset 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，默认0
     * @param {string} objectId 防护对象id，是创建云防火墙后用于区分互联网边界防护和VPC边界防护的标志id，可通过调用[查询防火墙实例接口](ListFirewallDetail.xml)获得，通过返回值中的data.records.protect_objects.object_id（.表示各对象之间层级的区分）获得，注意type为0的为互联网边界防护对象id，type为1的为VPC边界防护对象id，type可通过data.records.protect_objects.type（.表示各对象之间层级的区分）获得
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [keyWord] 关键字，可使用域名组名称或描述
     * @param {number} [domainSetType] 域名组类型，0表示应用域名组，1表示网络域名组
     * @param {number} [configStatus] 配置状态，-1表示未配置态，0表示配置失败，1表示配置成功，2表示配置中，3表示正常，4表示配置异常
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDomainSets(listDomainSetsRequest?: ListDomainSetsRequest): Promise<ListDomainSetsResponse> {
        const options = ParamCreater().listDomainSets(listDomainSetsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取域名组下域名列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取域名组下域名列表
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} domainSetId 域名组id，可通过[查询域名组列表接口](ListDomainSets.xml)查询获得，通过返回值中的data.records.set_id（.表示各对象之间层级的区分）获得。
     * @param {string} fwInstanceId 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {number} limit 每页显示个数，范围为1-1024
     * @param {number} offset 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，默认0
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [domainName] 域名名称，如www.test.com
     * @param {string} [objectId] 防护对象id，是创建云防火墙后用于区分互联网边界防护和VPC边界防护的标志id，可通过调用[查询防火墙实例接口](ListFirewallDetail.xml)获得，通过返回值中的data.records.protect_objects.object_id（.表示各对象之间层级的区分）获得，注意type为0的为互联网边界防护对象id，type为1的为VPC边界防护对象id，type可通过data.records.protect_objects.type（.表示各对象之间层级的区分）获得
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDomains(listDomainsRequest?: ListDomainsRequest): Promise<ListDomainsResponse> {
        const options = ParamCreater().listDomains(listDomainsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取东西向防火墙信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取东西向防火墙信息
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {number} limit 每页显示个数，范围为1-1024
     * @param {number} offset 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，默认0
     * @param {string} fwInstanceId 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEastWestFirewall(listEastWestFirewallRequest?: ListEastWestFirewallRequest): Promise<ListEastWestFirewallResponse> {
        const options = ParamCreater().listEastWestFirewall(listEastWestFirewallRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询防火墙实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询防火墙详细信息
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {number} offset 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，默认0
     * @param {number} limit 每页显示个数，范围为1-1024
     * @param {number} serviceType 服务类型，目前仅支持0互联网防护
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [fwInstanceId] 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用[查询防火墙实例接口](ListFirewallDetail.xml)，默认情况下，fw_instance_Id为空时，返回账号下第一个墙的信息；fw_instance_Id非空时，返回与fw_instance_Id对应墙的信息。
     * @param {string} [name] 防火墙名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFirewallDetail(listFirewallDetailRequest?: ListFirewallDetailRequest): Promise<ListFirewallDetailResponse> {
        const options = ParamCreater().listFirewallDetail(listFirewallDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询防火墙列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询防火墙列表
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {QueryFireWallInstanceDto} queryFireWallInstanceDto 查询防火墙列表请求体。
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFirewallList(listFirewallListRequest?: ListFirewallListRequest): Promise<ListFirewallListResponse> {
        const options = ParamCreater().listFirewallList(listFirewallListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询流日志
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询流日志
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} fwInstanceId 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {number} startTime 开始时间，以毫秒为单位的时间戳，如1718936272648
     * @param {number} endTime 结束时间，以毫秒为单位的时间戳，如1718936272648
     * @param {number} limit 每页显示个数，范围为1-1024
     * @param {string} [direction] 方向，包含in2out，out2in
     * @param {'internet' | 'vpc' | 'nat'} [logType] 日志类型包括：internet，vpc，nat
     * @param {string} [srcIp] 源IP
     * @param {number} [srcPort] 源端口
     * @param {string} [dstIp] 目的IP
     * @param {number} [dstPort] 目的端口
     * @param {string} [protocol] 协议类型，包含TCP, UDP,ICMP,ICMPV6等。
     * @param {string} [app] 规则应用类型包括：“HTTP”，\&quot;HTTPS\&quot;，\&quot;TLS1\&quot;，“DNS”，“SSH”，“MYSQL”，“SMTP”，“RDP”，“RDPS”，“VNC”，“POP3”，“IMAP4”，“SMTPS”，“POP3S”，“FTPS”，“ANY”,“BGP”等。
     * @param {string} [logId] 文档ID,第一页为空，其他页不为空，其他页可取上一次查询最后一条数据的log_id
     * @param {number} [nextDate] 下个日期，当是第一页时为空，不是第一页时不为空，其他页可取上一次查询最后一条数据的start_time
     * @param {number} [offset] 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于0，首页时为空，非首页时不为空
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [dstHost] 目的主机
     * @param {string} [srcRegionName] 源region名称
     * @param {string} [dstRegionName] 目的region名称
     * @param {string} [srcProvinceName] 源省份名称
     * @param {string} [dstProvinceName] 目的省份名称
     * @param {string} [srcCityName] 源城市名称
     * @param {string} [dstCityName] 目的城市名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFlowLogs(listFlowLogsRequest?: ListFlowLogsRequest): Promise<ListFlowLogsResponse> {
        const options = ParamCreater().listFlowLogs(listFlowLogsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取防火墙实例中已经导入的IP黑名单信息，标准版防火墙只会显示一条EIP的记录，专业版防火墙可能显示EIP、NAT或EIP和NAT的记录，根据导入的情况确定。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取导入的IP黑名单列表信息
     * @param {string} projectId 项目ID，可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} fwInstanceId 防火墙ID，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {number} limit 在分页查询的情况下，每页查询的记录条数，范围为1-1024
     * @param {number} offset 数据查询的偏移量，在分页查询的时候使用，指定查询记录的起始位置，必须为数字，取值范围为大于等于0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listIpBlacklist(listIpBlacklistRequest?: ListIpBlacklistRequest): Promise<ListIpBlacklistResponse> {
        const options = ParamCreater().listIpBlacklist(listIpBlacklistRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 流量过滤功能可以打开或者关闭，通过此接口可以获取当前的开关信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取流量过滤功能的开关信息
     * @param {string} projectId 项目ID，可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} fwInstanceId 防火墙ID，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listIpBlacklistSwitch(listIpBlacklistSwitchRequest?: ListIpBlacklistSwitchRequest): Promise<ListIpBlacklistSwitchResponse> {
        const options = ParamCreater().listIpBlacklistSwitch(listIpBlacklistSwitchRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取CFW任务执行状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取CFW任务执行状态
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} jobId 创建按需防火墙返回的任务ID，可通过调用[创建防火墙接口](CreateFirewall.xml)返回值获得。返回值中job_id即为此处的job_id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listJob(listJobRequest?: ListJobRequest): Promise<ListJobResponse> {
        const options = ParamCreater().listJob(listJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取日志配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取日志配置
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} fwInstanceId 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLogConfig(listLogConfigRequest?: ListLogConfigRequest): Promise<ListLogConfigResponse> {
        const options = ParamCreater().listLogConfig(listLogConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询标签信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询标签信息
     * @param {number} limit 分页查询数据限制
     * @param {number} offset 查询偏移量
     * @param {string} projectId 项目ID，可以从调API处获取，也可以从控制台获取。可通过[项目ID获取方式](cfw_02_0015.xml)获取
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProjectTags(listProjectTagsRequest?: ListProjectTagsRequest): Promise<ListProjectTagsResponse> {
        const options = ParamCreater().listProjectTags(listProjectTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询防护vpc信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询防护VPC数
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} objectId 防护对象id，是创建云防火墙后用于区分互联网边界防护和VPC边界防护的标志id，可通过调用[查询防火墙实例接口](ListFirewallDetail.xml)获得，通过返回值中的data.records.protect_objects.object_id（.表示各对象之间层级的区分）获得，注意type为0的为互联网边界防护对象id，type为1的为VPC边界防护对象id。此处仅取type为1的防护对象id，可通过data.records.protect_objects.type（.表示各对象之间层级的区分）获得。
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [fwInstanceId] 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProtectedVpcs(listProtectedVpcsRequest?: ListProtectedVpcsRequest): Promise<ListProtectedVpcsResponse> {
        const options = ParamCreater().listProtectedVpcs(listProtectedVpcsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源标签信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源标签信息
     * @param {string} fwInstanceId 防火墙ID，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {string} projectId 项目ID，可以从调API处获取，也可以从控制台获取。可通过[项目ID获取方式](cfw_02_0015.xml)获取
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listResourceTags(listResourceTagsRequest?: ListResourceTagsRequest): Promise<ListResourceTagsResponse> {
        const options = ParamCreater().listResourceTags(listResourceTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询服务组成员列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询服务成员列表
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} setId 服务组id，可通过[获取服务组列表接口](ListServiceSets.xml)查询获得，通过返回值中的data.records.set_id（.表示各对象之间层级的区分）获得。
     * @param {number} limit 每页显示个数，范围为1-1024
     * @param {number} offset 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，默认0
     * @param {string} [keyWord] 查询字段，可为服务组成员名称或服务组成员描述的一部分。
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [fwInstanceId] 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {number} [queryServiceSetType] 查询服务组类型，0表示自定义服务组，1表示预定义服务组。仅当set_id为预定义服务组id时生效
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listServiceItems(listServiceItemsRequest?: ListServiceItemsRequest): Promise<ListServiceItemsResponse> {
        const options = ParamCreater().listServiceItems(listServiceItemsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询服务组细节
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询服务组详情
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} setId 服务组id，可通过[获取服务组列表接口](ListServiceSets.xml)查询获得，通过返回值中的data.records.set_id（.表示各对象之间层级的区分）获得。
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [fwInstanceId] 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {number} [queryServiceSetType] 查询服务组类型，0表示自定义服务组，1表示预定义服务组
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listServiceSetDetail(listServiceSetDetailRequest?: ListServiceSetDetailRequest): Promise<ListServiceSetDetailResponse> {
        const options = ParamCreater().listServiceSetDetail(listServiceSetDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取服务组列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取服务组列表
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} objectId 防护对象id，是创建云防火墙后用于区分互联网边界防护和VPC边界防护的标志id，可通过调用[查询防火墙实例接口](ListFirewallDetail.xml)获得，通过返回值中的data.records.protect_objects.object_id（.表示各对象之间层级的区分）获得，注意type为0的为互联网边界防护对象id，type为1的为VPC边界防护对象id，type可通过data.records.protect_objects.type（.表示各对象之间层级的区分）获得
     * @param {number} limit 每页查询个数，范围为1-1024
     * @param {number} offset 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，默认0
     * @param {string} [keyWord] 关键字，可使用功能服务组名称和服务组描述的一部分
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [fwInstanceId] 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {number} [queryServiceSetType] 查询服务组类型，0表示自定义服务组，1表示预定义服务组
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listServiceSets(listServiceSetsRequest?: ListServiceSetsRequest): Promise<ListServiceSetsResponse> {
        const options = ParamCreater().listServiceSets(listServiceSetsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用于流量过滤的IP黑名单导入失败后，调用此接口进行重试。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 用于流量过滤的IP黑名单导入失败后进行重新导入
     * @param {string} projectId 项目ID，可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} fwInstanceId 防火墙ID，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {string} [name] 指定导入失败的IP黑名单的名字
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public retryIpBlacklist(retryIpBlacklistRequest?: RetryIpBlacklistRequest): Promise<RetryIpBlacklistResponse> {
        const options = ParamCreater().retryIpBlacklist(retryIpBlacklistRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 保存资源标签接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 保存资源标签接口
     * @param {string} fwInstanceId 防火墙ID，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {string} projectId 项目ID，可以从调API处获取，也可以从控制台获取。可通过[项目ID获取方式](cfw_02_0015.xml)获取
     * @param {CreateTagsDto} createTagsDto 标签对象
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public saveTags(saveTagsRequest?: SaveTagsRequest): Promise<SaveTagsResponse> {
        const options = ParamCreater().saveTags(saveTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取访问日志的TOP统计信息，如TOP命中规则等
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询访问日志统计信息
     * @param {string} projectId **参数解释**： 项目ID，用于明确项目归属，配置后可通过该ID查询项目下资产，可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml) **约束限制**： 不涉及 **取值范围**： 32位UUID **默认取值**： 不涉及
     * @param {string} fwInstanceId **参数解释**： 防火墙ID，用户创建防火墙实例后产生的唯一ID，配置后可区分不同防火墙，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取 **约束限制**： 不涉及 **取值范围**： 32位UUID **默认取值**： 不涉及 
     * @param {'strategy_dashboard' | 'strategy_hit_info' | 'top_deny_rule' | 'src_ip' | 'dst_ip' | 'src_region' | 'dst_region' | 'dst_port'} item **参数解释**： 聚合类型 **约束限制**： 不涉及 **取值范围**： strategy_hit_info 策略的命中趋势 strategy_dashboard 策略命中概览 top_deny_rule TOP命中拦截策略 dst_ip TOP拦截目的IP src_ip TOP拦截源IP dst_port TOP拦截端口 dst_region TOP拦截目的地区 src_region TOP拦截源地区 **默认取值**： 不涉及
     * @param {'in2out' | 'out2in'} [direction] **参数解释**： 会话方向 **约束限制**： 不涉及 **取值范围**： in2out为出云方向 out2in为入云方向 **默认取值**： 不涉及 
     * @param {0 | 1 | 2} [range] **参数解释**： 时间范围  **约束限制**： 不涉及 **取值范围**： 0为近一时 1近一天 2近七天   **默认取值**： 不涉及 
     * @param {number} [startTime] **参数解释**： 开始时间 **约束限制**： 不涉及 **取值范围**： 毫秒级时间戳 **默认取值**： 不涉及 
     * @param {number} [endTime] **参数解释**： 结束时间 **约束限制**： 不涉及 **取值范围**： 毫秒级时间戳 **默认取值**： 不涉及 
     * @param {Array<string>} [vgwId] **参数解释**： VGW ID **约束限制**： 不涉及 **取值范围**： 32位UUID **默认取值**： 不涉及 
     * @param {'internet' | 'nat' | 'vpc' | 'vgw'} [logType] **参数解释**： 日志类型 **约束限制**： 不涉及 **取值范围**： internet为南北向日志、nat为nat场景日志，vpc为东西向日志，vgw为vgw场景日志 **默认取值**： 不涉及
     * @param {Array<string>} [ruleId] **参数解释**： 规则ID列表 **约束限制**： 不涉及 **取值范围**： 32位UUID **默认取值**： 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAccessTop(showAccessTopRequest?: ShowAccessTopRequest): Promise<ShowAccessTopResponse> {
        const options = ParamCreater().showAccessTop(showAccessTopRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取告警配置信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取告警配置信息
     * @param {string} fwInstanceId 防火墙ID，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {string} projectId 项目ID，可以从调API处获取，也可以从控制台获取。可通过[项目ID获取方式](cfw_02_0015.xml)获取
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAlarmConfig(showAlarmConfigRequest?: ShowAlarmConfigRequest): Promise<ShowAlarmConfigResponse> {
        const options = ParamCreater().showAlarmConfig(showAlarmConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取防火墙反病毒规则信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取防火墙反病毒规则信息
     * @param {string} projectId 项目ID，可以从调API处获取，也可以从控制台获取。可通过[项目ID获取方式](cfw_02_0015.xml)获取
     * @param {string} objectId 防护对象ID，是创建云防火墙后用于区分互联网边界防护和VPC边界防护的标志id，可通过调用[查询防火墙实例接口](ListFirewallDetail.xml)获得，通过返回值中的data.records.protect_objects.object_id（.表示各对象之间层级的区分）获得，注意type为0的为互联网边界防护对象id，type为1的为VPC边界防护对象id。此处仅取type为1的防护对象id，可通过data.records.protect_objects.type（.表示各对象之间层级的区分）获得。
     * @param {number} engineType 防火墙类型
     * @param {number} limit 每页显示的数据量
     * @param {number} offset 查询偏移量
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAntiVirusRule(showAntiVirusRuleRequest?: ShowAntiVirusRuleRequest): Promise<ShowAntiVirusRuleResponse> {
        const options = ParamCreater().showAntiVirusRule(showAntiVirusRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看反病毒开关
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看反病毒开关
     * @param {string} projectId 项目ID，可以从调API处获取，也可以从控制台获取。可通过[项目ID获取方式](cfw_02_0015.xml)获取
     * @param {string} objectId 防护对象ID，是创建云防火墙后用于区分互联网边界防护和VPC边界防护的标志id，可通过调用[查询防火墙实例接口](ListFirewallDetail.xml)获得，通过返回值中的data.records.protect_objects.object_id（.表示各对象之间层级的区分）获得，注意type为0的为互联网边界防护对象id，type为1的为VPC边界防护对象id。此处仅取type为1的防护对象id，可通过data.records.protect_objects.type（.表示各对象之间层级的区分）获得。
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAntiVirusSwitch(showAntiVirusSwitchRequest?: ShowAntiVirusSwitchRequest): Promise<ShowAntiVirusSwitchResponse> {
        const options = ParamCreater().showAntiVirusSwitch(showAntiVirusSwitchRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询攻击概览
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询攻击概览
     * @param {string} projectId **参数解释**： 项目ID，用于明确项目归属，配置后可通过该ID查询项目下资产，可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml) **约束限制**： 不涉及 **取值范围**： 32位UUID **默认取值**： 不涉及
     * @param {string} fwInstanceId **参数解释**： 防火墙ID，用户创建防火墙实例后产生的唯一ID，配置后可区分不同防火墙，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取 **约束限制**： 不涉及 **取值范围**： 32位UUID **默认取值**： 不涉及 
     * @param {'internet' | 'nat' | 'vpc' | 'vgw'} logType **参数解释**： 日志类型 **约束限制**： 不涉及 **取值范围**： internet为南北向日志、nat为nat场景日志，vpc为东西向日志，vgw为vgw场景日志 **默认取值**： 不涉及 
     * @param {0 | 1 | 2} [range] **参数解释**： 时间范围  **约束限制**： 不涉及 **取值范围**： 0为近一时 1近一天 2近七天   **默认取值**： 不涉及 
     * @param {number} [startTime] **参数解释**： 开始时间 **约束限制**： 不涉及 **取值范围**： 毫秒级时间戳 **默认取值**： 不涉及 
     * @param {number} [endTime] **参数解释**： 结束时间 **约束限制**： 不涉及 **取值范围**： 毫秒级时间戳 **默认取值**： 不涉及 
     * @param {Array<string>} [vgwId] **参数解释**： VGW ID **约束限制**： 不涉及 **取值范围**： 32位UUID **默认取值**： 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAttackTotal(showAttackTotalRequest?: ShowAttackTotalRequest): Promise<ShowAttackTotalResponse> {
        const options = ParamCreater().showAttackTotal(showAttackTotalRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询攻击趋势
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询攻击趋势
     * @param {string} projectId **参数解释**： 项目ID，用于明确项目归属，配置后可通过该ID查询项目下资产，可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml) **约束限制**： 不涉及 **取值范围**： 32位UUID **默认取值**： 不涉及
     * @param {string} fwInstanceId **参数解释**： 防火墙ID，用户创建防火墙实例后产生的唯一ID，配置后可区分不同防火墙，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取 **约束限制**： 不涉及 **取值范围**： 32位UUID **默认取值**： 不涉及 
     * @param {'internet' | 'nat' | 'vpc' | 'vgw'} logType **参数解释**： 日志类型 **约束限制**： 不涉及 **取值范围**： internet为南北向日志、nat为nat场景日志，vpc为东西向日志，vgw为vgw场景日志 **默认取值**： 不涉及 
     * @param {0 | 1 | 2} [range] **参数解释**： 时间范围  **约束限制**： 不涉及 **取值范围**： 0为近一时 1近一天 2近七天   **默认取值**： 不涉及 
     * @param {number} [startTime] **参数解释**： 开始时间 **约束限制**： 不涉及 **取值范围**： 毫秒级时间戳 **默认取值**： 不涉及 
     * @param {number} [endTime] **参数解释**： 结束时间 **约束限制**： 不涉及 **取值范围**： 毫秒级时间戳 **默认取值**： 不涉及 
     * @param {Array<string>} [vgwId] **参数解释**： VGW ID **约束限制**： 不涉及 **取值范围**： 32位UUID **默认取值**： 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAttackTrend(showAttackTrendRequest?: ShowAttackTrendRequest): Promise<ShowAttackTrendResponse> {
        const options = ParamCreater().showAttackTrend(showAttackTrendRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看域名组详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看域名组详情
     * @param {string} projectId 项目ID，可以从调API处获取，也可以从控制台获取。可通过[项目ID获取方式](cfw_02_0015.xml)获取
     * @param {string} fwInstanceId 防火墙ID，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {string} domainSetId 域名组ID，可通过[查询域名组列表接口](ListDomainSets.xml)查询获得，通过返回值中的data.records.set_id（.表示各对象之间层级的区分）获取
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDomainSetDetail(showDomainSetDetailRequest?: ShowDomainSetDetailRequest): Promise<ShowDomainSetDetailResponse> {
        const options = ParamCreater().showDomainSetDetail(showDomainSetDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询流量趋势，包括南北向、EIP、东西向的流量趋势
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询流量趋势
     * @param {string} projectId **参数解释**： 项目ID，用于明确项目归属，配置后可通过该ID查询项目下资产，可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml) **约束限制**： 不涉及 **取值范围**： 32位UUID **默认取值**： 不涉及
     * @param {string} fwInstanceId **参数解释**： 防火墙ID，用户创建防火墙实例后产生的唯一ID，配置后可区分不同防火墙，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取 **约束限制**： 不涉及 **取值范围**： 32位UUID **默认取值**： 不涉及 
     * @param {'internet' | 'nat' | 'vpc' | 'vgw'} logType **参数解释**： 日志类型 **约束限制**： 不涉及 **取值范围**： internet为南北向日志、nat为nat场景日志，vpc为东西向日志，vgw为vgw场景日志 **默认取值**： 不涉及 
     * @param {'avg' | 'max'} aggType **参数解释**： 聚合类型 **约束限制**： 不涉及 **取值范围**： avg为平均值 max为最大值 **默认取值**： 不涉及
     * @param {0 | 1 | 2} [range] **参数解释**： 时间范围  **约束限制**： 不涉及 **取值范围**： 0为近一时 1近一天 2近七天   **默认取值**： 不涉及 
     * @param {number} [startTime] **参数解释**： 开始时间 **约束限制**： 不涉及 **取值范围**： 毫秒级时间戳 **默认取值**： 不涉及 
     * @param {number} [endTime] **参数解释**： 结束时间 **约束限制**： 不涉及 **取值范围**： 毫秒级时间戳 **默认取值**： 不涉及 
     * @param {Array<string>} [vgwId] **参数解释**： VGW ID **约束限制**： 不涉及 **取值范围**： 32位UUID **默认取值**： 不涉及 
     * @param {Array<string>} [ip] **参数解释**： IP地址列表，查看IP的流量趋势 **约束限制**： 不涉及 **取值范围**： IP地址 **默认取值**： 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTrafficTrend(showTrafficTrendRequest?: ShowTrafficTrendRequest): Promise<ShowTrafficTrendResponse> {
        const options = ParamCreater().showTrafficTrend(showTrafficTrendRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新地址组信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新地址组信息
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} setId 地址组id，可通过[查询地址组列表接口](ListAddressSets.xml)查询获得，通过返回值中的data.records.set_id（.表示各对象之间层级的区分）获得。
     * @param {UpdateAddressSetDto} updateAddressSetInfoUsingPUTRequestBody 更新地址组请求体
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [fwInstanceId] 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAddressSet(updateAddressSetRequest?: UpdateAddressSetRequest): Promise<UpdateAddressSetResponse> {
        const options = ParamCreater().updateAddressSet(updateAddressSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改告警配置接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改告警配置接口
     * @param {string} fwInstanceId 防火墙ID，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {string} projectId 项目ID，可以从调API处获取，也可以从控制台获取。可通过[项目ID获取方式](cfw_02_0015.xml)获取
     * @param {UpdateAttackLogAlarmConfigDto} updateAttackLogAlarmConfigDto 告警配置对象
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAlarmConfig(updateAlarmConfigRequest?: UpdateAlarmConfigRequest): Promise<UpdateAlarmConfigResponse> {
        const options = ParamCreater().updateAlarmConfig(updateAlarmConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改反病毒规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改反病毒规则
     * @param {string} projectId 项目ID，可以从调API处获取，也可以从控制台获取。可通过[项目ID获取方式](cfw_02_0015.xml)获取
     * @param {AntiVirusRuleDto} antiVirusRuleDto 反病毒规则对象
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAntiVirusRule(updateAntiVirusRuleRequest?: UpdateAntiVirusRuleRequest): Promise<UpdateAntiVirusRuleResponse> {
        const options = ParamCreater().updateAntiVirusRule(updateAntiVirusRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改反病毒开关
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改反病毒开关
     * @param {string} projectId 项目ID，可以从调API处获取，也可以从控制台获取。可通过[项目ID获取方式](cfw_02_0015.xml)获取
     * @param {AntiVirusSwitchDto} antiVirusSwitchDto 反病毒开关对象
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAntiVirusSwitch(updateAntiVirusSwitchRequest?: UpdateAntiVirusSwitchRequest): Promise<UpdateAntiVirusSwitchResponse> {
        const options = ParamCreater().updateAntiVirusSwitch(updateAntiVirusSwitchRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新黑白名单列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新黑白名单列表
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} listId 黑白名单列表id，可通过[查询黑白名单列表接口](ListBlackWhiteLists.xml)查询获得，通过返回值中的data.records.list_id（.表示各对象之间层级的区分）获得。
     * @param {UpdateBlackWhiteListDto} updateBlackWhiteListUsingPUTRequestBody 更新黑白名单请求体
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [fwInstanceId] 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateBlackWhiteList(updateBlackWhiteListRequest?: UpdateBlackWhiteListRequest): Promise<UpdateBlackWhiteListResponse> {
        const options = ParamCreater().updateBlackWhiteList(updateBlackWhiteListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新dns服务器列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新dns服务器列表
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} fwInstanceId 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {UpdateDnsServersRequestBody} updateDnsServersRequestBody 更新dns服务器列表请求体
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDnsServers(updateDnsServersRequest?: UpdateDnsServersRequest): Promise<UpdateDnsServersResponse> {
        const options = ParamCreater().updateDnsServers(updateDnsServersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新域名组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新域名组
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} setId 域名组id，可通过[查询域名组列表接口](ListDomainSets.xml)查询获得，通过返回值中的data.records.set_id（.表示各对象之间层级的区分）获得。
     * @param {string} fwInstanceId 防火墙实例id，创建云防火墙后用于标志防火墙由系统自动生成的标志id，可通过调用[查询防火墙实例接口](ListFirewallDetail.xml)。
     * @param {UpdateDomainSetInfoDto} updateDomainSetInfoDto 更新域名组请求体
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDomainSet(updateDomainSetRequest?: UpdateDomainSetRequest): Promise<UpdateDomainSetResponse> {
        const options = ParamCreater().updateDomainSet(updateDomainSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新日志配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新日志配置
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} fwInstanceId 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取。
     * @param {LogConfigDto} logConfigDto 更新LTS日志配置请求体
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateLogConfig(updateLogConfigRequest?: UpdateLogConfigRequest): Promise<UpdateLogConfigResponse> {
        const options = ParamCreater().updateLogConfig(updateLogConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 编辑对象组内成员的描述信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 编辑对象组内成员的描述信息
     * @param {string} projectId 项目ID，可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {ObjectInfoDto} objectInfoDto 组成员描述信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateObjectConfigDesc(updateObjectConfigDescRequest?: UpdateObjectConfigDescRequest): Promise<UpdateObjectConfigDescResponse> {
        const options = ParamCreater().updateObjectConfigDesc(updateObjectConfigDescRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新服务组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改服务组
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} setId 服务组id，可通过[获取服务组列表接口](ListServiceSets.xml)查询获得，通过返回值中的data.records.set_id（.表示各对象之间层级的区分）获得。
     * @param {UpdateServiceSetUsingPUTRequestBody} updateServiceSetUsingPUTRequestBody 更新服务组的请求体
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [fwInstanceId] 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateServiceSet(updateServiceSetRequest?: UpdateServiceSetRequest): Promise<UpdateServiceSetResponse> {
        const options = ParamCreater().updateServiceSet(updateServiceSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建ACL规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建ACL规则
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {AddRuleAclDto} addRuleAclUsingPOSTRequestBody 添加Acl规则请求体
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [fwInstanceId] 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addAclRule(addAclRuleRequest?: AddAclRuleRequest): Promise<AddAclRuleResponse> {
        const options = ParamCreater().addAclRule(addAclRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除Acl规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除Acl规则
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {DeleteRuleAclDto} deleteRuleAclDto 批量删除规则请求体
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [fwInstanceId] 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteAclRules(batchDeleteAclRulesRequest?: BatchDeleteAclRulesRequest): Promise<BatchDeleteAclRulesResponse> {
        const options = ParamCreater().batchDeleteAclRules(batchDeleteAclRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量更新规则动作
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量更新规则动作
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {UpdateSecurityPolciesActionDto} updateSecurityPoliciesActionDto 更新规则动作请求体
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [fwInstanceId] 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUpdateAclRuleActions(batchUpdateAclRuleActionsRequest?: BatchUpdateAclRuleActionsRequest): Promise<BatchUpdateAclRuleActionsResponse> {
        const options = ParamCreater().batchUpdateAclRuleActions(batchUpdateAclRuleActionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除ACL规则组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除ACL规则
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} aclRuleId 规则id，可通过[查询防护规则接口](ListAclRules.xml)查询获得，通过返回值中的data.records.rule_id（.表示各对象之间层级的区分）获得。
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [fwInstanceId] 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAclRule(deleteAclRuleRequest?: DeleteAclRuleRequest): Promise<DeleteAclRuleResponse> {
        const options = ParamCreater().deleteAclRule(deleteAclRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 清除规则击中次数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除规则击中次数
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {ClearAccessLogRuleHitCountsDto} deleteAclRuleCountRequestBody 删除规则击中次数请求体
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [fwInstanceId] 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAclRuleHitCount(deleteAclRuleHitCountRequest?: DeleteAclRuleHitCountRequest): Promise<DeleteAclRuleHitCountResponse> {
        const options = ParamCreater().deleteAclRuleHitCount(deleteAclRuleHitCountRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取规则击中次数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取规则击中次数
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [fwInstanceId] 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {ListRuleHitCountDto} [listRuleHitCountRequestBody] 获取规则击中次数请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAclRuleHitCount(listAclRuleHitCountRequest?: ListAclRuleHitCountRequest): Promise<ListAclRuleHitCountResponse> {
        const options = ParamCreater().listAclRuleHitCount(listAclRuleHitCountRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询防护规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询防护规则
     * @param {string} projectId 租户项目id
     * @param {string} objectId 防护对象id，是创建云防火墙后用于区分互联网边界防护和VPC边界防护的标志id，可通过调用[查询防火墙实例接口](ListFirewallDetail.xml)获得，通过返回值中的data.records.protect_objects.object_id（.表示各对象之间层级的区分）获得，注意type为0的为互联网边界防护对象id，type为1的为VPC边界防护对象id，type可通过data.records.protect_objects.type（.表示各对象之间层级的区分）获得
     * @param {number} limit 每页显示个数，范围为1-1024
     * @param {number} offset 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，默认0
     * @param {0 | 1 | 2} [type] 规则类型，0：互联网规则，1：vpc规则，2：nat规则
     * @param {string} [ip] ip地址
     * @param {string} [name] 规则名称
     * @param {number} [direction] 方向0：外到内1：内到外
     * @param {0 | 1} [status] 规则下发状态 0：禁用，1：启用
     * @param {0 | 1} [actionType] 动作0：permit，1：deny
     * @param {0 | 1} [addressType] 地址类型，0表示ipv4，1表示ipv6
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [fwInstanceId] 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {string} [tagsId] 规则标签id，创建规则时产生。
     * @param {string} [source] 源地址
     * @param {string} [destination] 目的地址
     * @param {string} [service] 服务端口
     * @param {string} [application] 规则应用类型包括：“HTTP”，\&quot;HTTPS\&quot;，\&quot;TLS1\&quot;，“DNS”，“SSH”，“MYSQL”，“SMTP”，“RDP”，“RDPS”，“VNC”，“POP3”，“IMAP4”，“SMTPS”，“POP3S”，“FTPS”，“ANY”,“BGP”等。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAclRules(listAclRulesRequest?: ListAclRulesRequest): Promise<ListAclRulesResponse> {
        const options = ParamCreater().listAclRules(listAclRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看region列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看region列表
     * @param {string} projectId 项目ID，可以从调API处获取，也可以从控制台获取。可通过[项目ID获取方式](cfw_02_0015.xml)获取
     * @param {string} fwInstanceId 防火墙ID，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRegions(listRegionsRequest?: ListRegionsRequest): Promise<ListRegionsResponse> {
        const options = ParamCreater().listRegions(listRegionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询规则标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询规则标签
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} fwInstanceId 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {number} offset 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，默认0
     * @param {number} limit 每页显示个数，范围为1-1024
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRuleAclTags(listRuleAclTagsRequest?: ListRuleAclTagsRequest): Promise<ListRuleAclTagsResponse> {
        const options = ParamCreater().listRuleAclTags(listRuleAclTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看导入状态接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看导入状态接口
     * @param {string} objectId 防护对象ID，是创建云防火墙后用于区分互联网边界防护和VPC边界防护的标志id，可通过调用[查询防火墙实例接口](ListFirewallDetail.xml)获得，通过返回值中的data.records.protect_objects.object_id（.表示各对象之间层级的区分）获得，注意type为0的为互联网边界防护对象id，type为1的为VPC边界防护对象id。此处仅取type为1的防护对象id，可通过data.records.protect_objects.type（.表示各对象之间层级的区分）获得。
     * @param {string} projectId 项目ID，可以从调API处获取，也可以从控制台获取。可通过[项目ID获取方式](cfw_02_0015.xml)获取
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showImportStatus(showImportStatusRequest?: ShowImportStatusRequest): Promise<ShowImportStatusResponse> {
        const options = ParamCreater().showImportStatus(showImportStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新ACL规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新ACL规则
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} aclRuleId 规则id，可通过[查询防护规则接口](ListAclRules.xml)查询获得，通过返回值中的data.records.rule_id（.表示各对象之间层级的区分）获得。
     * @param {UpdateRuleAclDto} updateRuleAclUsingPUTRequestBody 更新规则请求体
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [fwInstanceId] 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAclRule(updateAclRuleRequest?: UpdateAclRuleRequest): Promise<UpdateAclRuleResponse> {
        const options = ParamCreater().updateAclRule(updateAclRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ACL防护规则优先级设置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ACL防护规则优先级设置
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} aclRuleId 规则id，可通过[查询防护规则接口](ListAclRules.xml)查询获得，通过返回值中的data.records.rule_id（.表示各对象之间层级的区分）获得。
     * @param {OrderRuleAclDto} listRuleAclUsingPUTRequestBody 规则排序请求体
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [fwInstanceId] 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAclRuleOrder(updateAclRuleOrderRequest?: UpdateAclRuleOrderRequest): Promise<UpdateAclRuleOrderResponse> {
        const options = ParamCreater().updateAclRuleOrder(updateAclRuleOrderRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启关闭EIP，客户购买EIP后首次开启EIP防护前需使用ListEips同步EIP资产，sync字段设置为1。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 弹性IP开启关闭
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {EipOperateProtectReq} changeProtectEipRequestBody 开启关闭EIP请求体
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [fwInstanceId] 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeEipStatus(changeEipStatusRequest?: ChangeEipStatusRequest): Promise<ChangeEipStatusResponse> {
        const options = ParamCreater().changeEipStatus(changeEipStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看eip告警白名单
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看eip告警白名单
     * @param {string} fwInstanceId 防火墙ID，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {number} limit 分页查询数据量限制
     * @param {number} offset 查询偏移量
     * @param {string} projectId 项目ID，可以从调API处获取，也可以从控制台获取。可通过[项目ID获取方式](cfw_02_0015.xml)获取
     * @param {string} [ipAddress] IP地址
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAlarmWhitelist(listAlarmWhitelistRequest?: ListAlarmWhitelistRequest): Promise<ListAlarmWhitelistResponse> {
        const options = ParamCreater().listAlarmWhitelist(listAlarmWhitelistRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Eip个数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Eip个数
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} objectId 防护对象id，是创建云防火墙后用于区分互联网边界防护和VPC边界防护的标志id，可通过调用[查询防火墙实例接口](ListFirewallDetail.xml)获得，通过返回值中的data.records.protect_objects.object_id（.表示各对象之间层级的区分）获得，注意type为0的为互联网边界防护对象id，type为1的为VPC边界防护对象id。此处仅取type为0的防护对象id，可通过data.records.protect_objects.type（.表示各对象之间层级的区分）获得。
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [fwInstanceId] 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEipCount(listEipCountRequest?: ListEipCountRequest): Promise<ListEipCountResponse> {
        const options = ParamCreater().listEipCount(listEipCountRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 弹性IP列表查询
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 弹性IP列表查询
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} objectId 防护对象id，是创建云防火墙后用于区分互联网边界防护和VPC边界防护的标志id，可通过调用[查询防火墙实例接口](ListFirewallDetail.xml)获得，通过返回值中的data.records.protect_objects.object_id（.表示各对象之间层级的区分）获得，注意type为0的为互联网边界防护对象id，type为1的为VPC边界防护对象id。此处仅取type为0的防护对象id，可通过data.records.protect_objects.type（.表示各对象之间层级的区分）获得。
     * @param {number} limit 每页显示个数，范围为1-1024
     * @param {number} offset 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，默认0
     * @param {string} [keyWord] 查询防护EIP列表关键字，可选用弹性公网ID和弹性公网IP
     * @param {string} [status] 防护状态 null-全部 0-开启防护 1-关闭防护
     * @param {number} [sync] 是否同步租户EIP数据 0-不同步 1-同步
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [deviceKey] 设备关键字，是eip绑定的资产的名称或id
     * @param {number} [addressType] 地址类型0 ipv4，1 ipv6
     * @param {string} [fwInstanceId] 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {string} [fwKeyWord] 防火墙关键字，可使用防火墙id或名称查询，可通过[防火墙ID获取方式](cfw_02_0028.xml)
     * @param {string} [epsId] 弹性公网ip的企业项目id，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，租户未开启企业项目时为0
     * @param {string} [tags] 标签列表信息可通过查询EIP服务界面列表标签页签获得
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEips(listEipsRequest?: ListEipsRequest): Promise<ListEipsResponse> {
        const options = ParamCreater().listEips(listEipsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取eip自动防护状态信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取eip自动防护状态信息
     * @param {string} objectId 防护对象ID，是创建云防火墙后用于区分互联网边界防护和VPC边界防护的标志id，可通过调用[查询防火墙实例接口](ListFirewallDetail.xml)获得，通过返回值中的data.records.protect_objects.object_id（.表示各对象之间层级的区分）获得，注意type为0的为互联网边界防护对象id，type为1的为VPC边界防护对象id。此处仅取type为1的防护对象id，可通过data.records.protect_objects.type（.表示各对象之间层级的区分）获得。
     * @param {string} projectId 项目ID，可以从调API处获取，也可以从控制台获取。可通过[项目ID获取方式](cfw_02_0015.xml)获取
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAutoProtectStatus(showAutoProtectStatusRequest?: ShowAutoProtectStatusRequest): Promise<ShowAutoProtectStatusResponse> {
        const options = ParamCreater().showAutoProtectStatus(showAutoProtectStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改eip自动防护开关
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改eip自动防护开关
     * @param {string} projectId 项目ID，可以从调API处获取，也可以从控制台获取。可通过[项目ID获取方式](cfw_02_0015.xml)获取
     * @param {SwitchEipStatusDto} switchEipStatusDto eip状态对象
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchAutoProtectStatus(switchAutoProtectStatusRequest?: SwitchAutoProtectStatusRequest): Promise<SwitchAutoProtectStatusResponse> {
        const options = ParamCreater().switchAutoProtectStatus(switchAutoProtectStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 切换防护模式
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 切换防护模式
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {IpsProtectDTO} changeIpsProtectModeUsingPOSTRequestBody 修改IPS防护模式请求体
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [fwInstanceId] 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeIpsProtectMode(changeIpsProtectModeRequest?: ChangeIpsProtectModeRequest): Promise<ChangeIpsProtectModeResponse> {
        const options = ParamCreater().changeIpsProtectMode(changeIpsProtectModeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 改变ips规则模式
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 改变ips规则模式
     * @param {string} projectId 项目ID，可以从调API处获取，也可以从控制台获取。可通过[项目ID获取方式](cfw_02_0015.xml)获取
     * @param {IpsRuleChangeDto} ipsRuleChangeDto ips规则对象
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeIpsRuleMode(changeIpsRuleModeRequest?: ChangeIpsRuleModeRequest): Promise<ChangeIpsRuleModeResponse> {
        const options = ParamCreater().changeIpsRuleMode(changeIpsRuleModeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 切换开关状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary IPS特性开关操作
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {IpsSwitchDTO} changeIpsSwitchUsingPOSTRequestBody 修改ips开关请求体
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [fwInstanceId] 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeIpsSwitchStatus(changeIpsSwitchStatusRequest?: ChangeIpsSwitchStatusRequest): Promise<ChangeIpsSwitchStatusResponse> {
        const options = ParamCreater().changeIpsSwitchStatus(changeIpsSwitchStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取自定义ips规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取自定义ips规则
     * @param {string} fwInstanceId 防火墙ID，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {number} limit 分页查询数据量限制
     * @param {string} objectId 防护对象ID，是创建云防火墙后用于区分互联网边界防护和VPC边界防护的标志id，可通过调用[查询防火墙实例接口](ListFirewallDetail.xml)获得，通过返回值中的data.records.protect_objects.object_id（.表示各对象之间层级的区分）获得，注意type为0的为互联网边界防护对象id，type为1的为VPC边界防护对象id。此处仅取type为1的防护对象id，可通过data.records.protect_objects.type（.表示各对象之间层级的区分）获得。
     * @param {number} offset 查询偏移量
     * @param {string} projectId 项目ID，可以从调API处获取，也可以从控制台获取。可通过[项目ID获取方式](cfw_02_0015.xml)获取
     * @param {number} [actionType] 动作（0：只记录日志，1：重置/拦截）
     * @param {number} [affectedOs] 操作系统
     * @param {number} [attackType] 攻击类型
     * @param {string} [ipsName] ips规则名称
     * @param {number} [protocol] 协议
     * @param {number} [severity] 严重程度（critical：致命，high：高危，medium:中危，low:低危）
     * @param {number} [software] 影响软件
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCustomerIps(listCustomerIpsRequest?: ListCustomerIpsRequest): Promise<ListCustomerIpsResponse> {
        const options = ParamCreater().listCustomerIps(listCustomerIpsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询防护模式
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询防护模式
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} objectId 防护对象id，是创建云防火墙后用于区分互联网边界防护和VPC边界防护的标志id，可通过调用[查询防火墙实例接口](ListFirewallDetail.xml)获得，通过返回值中的data.records.protect_objects.object_id（.表示各对象之间层级的区分）获得，注意type为0的为互联网边界防护对象id，type为1的为VPC边界防护对象id。此处仅取type为0的防护对象id，可通过data.records.protect_objects.type（.表示各对象之间层级的区分）获得。
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [fwInstanceId] 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listIpsProtectMode(listIpsProtectModeRequest?: ListIpsProtectModeRequest): Promise<ListIpsProtectModeResponse> {
        const options = ParamCreater().listIpsProtectMode(listIpsProtectModeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询频率ips规则信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询频率ips规则信息
     * @param {string} objectId 防护对象ID，是创建云防火墙后用于区分互联网边界防护和VPC边界防护的标志id，可通过调用[查询防火墙实例接口](ListFirewallDetail.xml)获得，通过返回值中的data.records.protect_objects.object_id（.表示各对象之间层级的区分）获得，注意type为0的为互联网边界防护对象id，type为1的为VPC边界防护对象id。此处仅取type为1的防护对象id，可通过data.records.protect_objects.type（.表示各对象之间层级的区分）获得。
     * @param {string} projectId 项目ID，可以从调API处获取，也可以从控制台获取。可通过[项目ID获取方式](cfw_02_0015.xml)获取
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listIpsRules(listIpsRulesRequest?: ListIpsRulesRequest): Promise<ListIpsRulesResponse> {
        const options = ParamCreater().listIpsRules(listIpsRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取ips规则列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取ips规则列表
     * @param {number} limit 分页查询数据量限制
     * @param {string} objectId 防护对象ID，是创建云防火墙后用于区分互联网边界防护和VPC边界防护的标志id，可通过调用[查询防火墙实例接口](ListFirewallDetail.xml)获得，通过返回值中的data.records.protect_objects.object_id（.表示各对象之间层级的区分）获得，注意type为0的为互联网边界防护对象id，type为1的为VPC边界防护对象id。此处仅取type为1的防护对象id，可通过data.records.protect_objects.type（.表示各对象之间层级的区分）获得。
     * @param {number} offset 查询偏移量
     * @param {string} projectId 项目ID，可以从调API处获取，也可以从控制台获取。可通过[项目ID获取方式](cfw_02_0015.xml)获取
     * @param {number} [affectedApplicationLike] 攻击对象
     * @param {number} [createTime] 创建时间
     * @param {string} [fwInstanceId] 防火墙ID，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {number} [ipsCveLike] cve
     * @param {number} [ipsGroup] ips组
     * @param {string} [ipsId] ips规则id
     * @param {number} [ipsLevel] ips等级
     * @param {string} [ipsNameLike] ips规则名称
     * @param {number} [ipsRulesTypeLike] ips规则类型
     * @param {string} [ipsStatus] ips规则状态
     * @param {boolean} [isUpdatedIpsRuleQueried] 是否查新更新规则
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listIpsRules1(listIpsRules1Request?: ListIpsRules1Request): Promise<ListIpsRules1Response> {
        const options = ParamCreater().listIpsRules1(listIpsRules1Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询IPS特性开关状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询IPS特性开关状态
     * @param {string} projectId 项目ID, 可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml)
     * @param {string} objectId 防护对象id，是创建云防火墙后用于区分互联网边界防护和VPC边界防护的标志id，可通过调用[查询防火墙实例接口](ListFirewallDetail.xml)获得，通过返回值中的data.records.protect_objects.object_id（.表示各对象之间层级的区分）获得，注意type为0的为互联网边界防护对象id，type为1的为VPC边界防护对象id。此处仅取type为0的防护对象id，可通过data.records.protect_objects.type（.表示各对象之间层级的区分）获得。
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {string} [fwInstanceId] 防火墙id，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listIpsSwitchStatus(listIpsSwitchStatusRequest?: ListIpsSwitchStatusRequest): Promise<ListIpsSwitchStatusResponse> {
        const options = ParamCreater().listIpsSwitchStatus(listIpsSwitchStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 功能说明：自定义IPS规则详情，特性:根据路径输入的IPS ID查看对应的自定义IPS详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询自定义IPS规则详情
     * @param {string} fwInstanceId **参数解释**： 防火墙ID，用户创建防火墙实例后产生的唯一ID，配置后可区分不同防火墙，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取 **约束限制**： 不涉及 **取值范围**： 32位UUID **默认取值**： 不涉及
     * @param {string} ipsCfwId **参数解释**： cfw侧自定义IPS规则id **约束限制**： 不涉及 **取值范围**： 32位UUID **默认取值**： 不涉及
     * @param {string} objectId **参数解释**： 防护对象ID，是创建云防火墙后用于区分互联网边界防护和VPC边界防护的标志ID，可通过调用[查询防火墙实例接口](ListFirewallDetail.xml)获得，通过返回值中的data.records.protect_objects.object_id（.表示各对象之间层级的区分）获得 **约束限制**： type为0时，object_id为互联网边界防护对象ID，type为1时，object_id为VPC边界防护对象ID，type可通过data.records.protect_objects.type（.表示各对象之间层级的区分）获得 **取值范围**： 32位UUID **默认取值**： 不涉及
     * @param {string} projectId **参数解释**： 项目ID，用于明确项目归属，配置后可通过该ID查询项目下资产，可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml) **约束限制**： 不涉及 **取值范围**： 32位UUID **默认取值**： 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCustomerIpsInfo(showCustomerIpsInfoRequest?: ShowCustomerIpsInfoRequest): Promise<ShowCustomerIpsInfoResponse> {
        const options = ParamCreater().showCustomerIpsInfo(showCustomerIpsInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取ips规则细节
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取ips规则细节
     * @param {string} fwInstanceId 防火墙ID，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {string} projectId 项目ID，可以从调API处获取，也可以从控制台获取。可通过[项目ID获取方式](cfw_02_0015.xml)获取
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showIpsUpdateTime(showIpsUpdateTimeRequest?: ShowIpsUpdateTimeRequest): Promise<ShowIpsUpdateTimeResponse> {
        const options = ParamCreater().showIpsUpdateTime(showIpsUpdateTimeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建频率ips规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建频率ips规则
     * @param {string} projectId 项目ID，可以从调API处获取，也可以从控制台获取。可通过[项目ID获取方式](cfw_02_0015.xml)获取
     * @param {AdvancedIpsRuleDto} advancedIpsRuleDto advancedIpsRuleDto
     * @param {string} [fwInstanceId] 防火墙ID，可通过[防火墙ID获取方式](cfw_02_0028.xml)获取
     * @param {string} [enterpriseProjectId] 企业项目ID，用户根据组织规划企业项目，对应的ID为企业项目ID，可通过[如何获取企业项目ID](cfw_02_0027.xml)获取，用户未开启企业项目时为0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAdvancedIpsRule(updateAdvancedIpsRuleRequest?: UpdateAdvancedIpsRuleRequest): Promise<UpdateAdvancedIpsRuleResponse> {
        const options = ParamCreater().updateAdvancedIpsRule(updateAdvancedIpsRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新自定义IPS规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新自定义IPS规则
     * @param {string} ipsCfwId **参数解释**： cfw侧自定义IPS规则id **约束限制**： 不涉及 **取值范围**： 32位UUID **默认取值**： 不涉及
     * @param {string} projectId **参数解释**： 项目ID，用于明确项目归属，配置后可通过该ID查询项目下资产，可以从调API处获取，也可以从控制台获取。[项目ID获取方式](cfw_02_0015.xml) **约束限制**： 不涉及 **取值范围**： 32位UUID **默认取值**： 不涉及
     * @param {CustomerIpsSaveDto} updateCustomerIpsRequestBody 更新自定义IPS规则请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateCustomerIps(updateCustomerIpsRequest?: UpdateCustomerIpsRequest): Promise<UpdateCustomerIpsResponse> {
        const options = ParamCreater().updateCustomerIps(updateCustomerIpsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 添加地址组成员
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addAddressItem(addAddressItemRequest?: AddAddressItemRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/address-items",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (addAddressItemRequest !== null && addAddressItemRequest !== undefined) {
                if (addAddressItemRequest instanceof AddAddressItemRequest) {
                    projectId = addAddressItemRequest.projectId;
                    body = addAddressItemRequest.body
                    enterpriseProjectId = addAddressItemRequest.enterpriseProjectId;
                    fwInstanceId = addAddressItemRequest.fwInstanceId;
                } else {
                    projectId = addAddressItemRequest['project_id'];
                    body = addAddressItemRequest['body'];
                    enterpriseProjectId = addAddressItemRequest['enterprise_project_id'];
                    fwInstanceId = addAddressItemRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling addAddressItem.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加地址组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addAddressSet(addAddressSetRequest?: AddAddressSetRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/address-set",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (addAddressSetRequest !== null && addAddressSetRequest !== undefined) {
                if (addAddressSetRequest instanceof AddAddressSetRequest) {
                    projectId = addAddressSetRequest.projectId;
                    body = addAddressSetRequest.body
                    enterpriseProjectId = addAddressSetRequest.enterpriseProjectId;
                    fwInstanceId = addAddressSetRequest.fwInstanceId;
                } else {
                    projectId = addAddressSetRequest['project_id'];
                    body = addAddressSetRequest['body'];
                    enterpriseProjectId = addAddressSetRequest['enterprise_project_id'];
                    fwInstanceId = addAddressSetRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling addAddressSet.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建黑白名单规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addBlackWhiteList(addBlackWhiteListRequest?: AddBlackWhiteListRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/black-white-list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (addBlackWhiteListRequest !== null && addBlackWhiteListRequest !== undefined) {
                if (addBlackWhiteListRequest instanceof AddBlackWhiteListRequest) {
                    projectId = addBlackWhiteListRequest.projectId;
                    body = addBlackWhiteListRequest.body
                    enterpriseProjectId = addBlackWhiteListRequest.enterpriseProjectId;
                    fwInstanceId = addBlackWhiteListRequest.fwInstanceId;
                } else {
                    projectId = addBlackWhiteListRequest['project_id'];
                    body = addBlackWhiteListRequest['body'];
                    enterpriseProjectId = addBlackWhiteListRequest['enterprise_project_id'];
                    fwInstanceId = addBlackWhiteListRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling addBlackWhiteList.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加域名组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addDomainSet(addDomainSetRequest?: AddDomainSetRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/domain-set",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let fwInstanceId;
            
            let enterpriseProjectId;

            if (addDomainSetRequest !== null && addDomainSetRequest !== undefined) {
                if (addDomainSetRequest instanceof AddDomainSetRequest) {
                    projectId = addDomainSetRequest.projectId;
                    fwInstanceId = addDomainSetRequest.fwInstanceId;
                    body = addDomainSetRequest.body
                    enterpriseProjectId = addDomainSetRequest.enterpriseProjectId;
                } else {
                    projectId = addDomainSetRequest['project_id'];
                    fwInstanceId = addDomainSetRequest['fw_instance_id'];
                    body = addDomainSetRequest['body'];
                    enterpriseProjectId = addDomainSetRequest['enterprise_project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling addDomainSet.');
            }
            if (fwInstanceId === null || fwInstanceId === undefined) {
                throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling addDomainSet.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加域名列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addDomains(addDomainsRequest?: AddDomainsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/domain-set/domains/{set_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let setId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (addDomainsRequest !== null && addDomainsRequest !== undefined) {
                if (addDomainsRequest instanceof AddDomainsRequest) {
                    projectId = addDomainsRequest.projectId;
                    setId = addDomainsRequest.setId;
                    body = addDomainsRequest.body
                    enterpriseProjectId = addDomainsRequest.enterpriseProjectId;
                    fwInstanceId = addDomainsRequest.fwInstanceId;
                } else {
                    projectId = addDomainsRequest['project_id'];
                    setId = addDomainsRequest['set_id'];
                    body = addDomainsRequest['body'];
                    enterpriseProjectId = addDomainsRequest['enterprise_project_id'];
                    fwInstanceId = addDomainsRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling addDomains.');
            }
            if (setId === null || setId === undefined) {
            throw new RequiredError('setId','Required parameter setId was null or undefined when calling addDomains.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'set_id': setId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建日志配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addLogConfig(addLogConfigRequest?: AddLogConfigRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cfw/logs/configuration",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let fwInstanceId;
            
            let enterpriseProjectId;

            if (addLogConfigRequest !== null && addLogConfigRequest !== undefined) {
                if (addLogConfigRequest instanceof AddLogConfigRequest) {
                    projectId = addLogConfigRequest.projectId;
                    fwInstanceId = addLogConfigRequest.fwInstanceId;
                    body = addLogConfigRequest.body
                    enterpriseProjectId = addLogConfigRequest.enterpriseProjectId;
                } else {
                    projectId = addLogConfigRequest['project_id'];
                    fwInstanceId = addLogConfigRequest['fw_instance_id'];
                    body = addLogConfigRequest['body'];
                    enterpriseProjectId = addLogConfigRequest['enterprise_project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling addLogConfig.');
            }
            if (fwInstanceId === null || fwInstanceId === undefined) {
                throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling addLogConfig.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量添加服务组成员
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addServiceItems(addServiceItemsRequest?: AddServiceItemsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/service-items",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (addServiceItemsRequest !== null && addServiceItemsRequest !== undefined) {
                if (addServiceItemsRequest instanceof AddServiceItemsRequest) {
                    projectId = addServiceItemsRequest.projectId;
                    body = addServiceItemsRequest.body
                    enterpriseProjectId = addServiceItemsRequest.enterpriseProjectId;
                    fwInstanceId = addServiceItemsRequest.fwInstanceId;
                } else {
                    projectId = addServiceItemsRequest['project_id'];
                    body = addServiceItemsRequest['body'];
                    enterpriseProjectId = addServiceItemsRequest['enterprise_project_id'];
                    fwInstanceId = addServiceItemsRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling addServiceItems.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建服务组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addServiceSet(addServiceSetRequest?: AddServiceSetRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/service-set",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (addServiceSetRequest !== null && addServiceSetRequest !== undefined) {
                if (addServiceSetRequest instanceof AddServiceSetRequest) {
                    projectId = addServiceSetRequest.projectId;
                    body = addServiceSetRequest.body
                    enterpriseProjectId = addServiceSetRequest.enterpriseProjectId;
                    fwInstanceId = addServiceSetRequest.fwInstanceId;
                } else {
                    projectId = addServiceSetRequest['project_id'];
                    body = addServiceSetRequest['body'];
                    enterpriseProjectId = addServiceSetRequest['enterprise_project_id'];
                    fwInstanceId = addServiceSetRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling addServiceSet.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除地址组成员
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteAddressItems(batchDeleteAddressItemsRequest?: BatchDeleteAddressItemsRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/address-items",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (batchDeleteAddressItemsRequest !== null && batchDeleteAddressItemsRequest !== undefined) {
                if (batchDeleteAddressItemsRequest instanceof BatchDeleteAddressItemsRequest) {
                    projectId = batchDeleteAddressItemsRequest.projectId;
                    body = batchDeleteAddressItemsRequest.body
                    enterpriseProjectId = batchDeleteAddressItemsRequest.enterpriseProjectId;
                    fwInstanceId = batchDeleteAddressItemsRequest.fwInstanceId;
                } else {
                    projectId = batchDeleteAddressItemsRequest['project_id'];
                    body = batchDeleteAddressItemsRequest['body'];
                    enterpriseProjectId = batchDeleteAddressItemsRequest['enterprise_project_id'];
                    fwInstanceId = batchDeleteAddressItemsRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling batchDeleteAddressItems.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除域名组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteDomainSet(batchDeleteDomainSetRequest?: BatchDeleteDomainSetRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/domain-sets/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let fwInstanceId;
            
            let enterpriseProjectId;

            if (batchDeleteDomainSetRequest !== null && batchDeleteDomainSetRequest !== undefined) {
                if (batchDeleteDomainSetRequest instanceof BatchDeleteDomainSetRequest) {
                    projectId = batchDeleteDomainSetRequest.projectId;
                    body = batchDeleteDomainSetRequest.body
                    fwInstanceId = batchDeleteDomainSetRequest.fwInstanceId;
                    enterpriseProjectId = batchDeleteDomainSetRequest.enterpriseProjectId;
                } else {
                    projectId = batchDeleteDomainSetRequest['project_id'];
                    body = batchDeleteDomainSetRequest['body'];
                    fwInstanceId = batchDeleteDomainSetRequest['fw_instance_id'];
                    enterpriseProjectId = batchDeleteDomainSetRequest['enterprise_project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling batchDeleteDomainSet.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除服务组成员信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteServiceItems(batchDeleteServiceItemsRequest?: BatchDeleteServiceItemsRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/service-items",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (batchDeleteServiceItemsRequest !== null && batchDeleteServiceItemsRequest !== undefined) {
                if (batchDeleteServiceItemsRequest instanceof BatchDeleteServiceItemsRequest) {
                    projectId = batchDeleteServiceItemsRequest.projectId;
                    body = batchDeleteServiceItemsRequest.body
                    enterpriseProjectId = batchDeleteServiceItemsRequest.enterpriseProjectId;
                    fwInstanceId = batchDeleteServiceItemsRequest.fwInstanceId;
                } else {
                    projectId = batchDeleteServiceItemsRequest['project_id'];
                    body = batchDeleteServiceItemsRequest['body'];
                    enterpriseProjectId = batchDeleteServiceItemsRequest['enterprise_project_id'];
                    fwInstanceId = batchDeleteServiceItemsRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling batchDeleteServiceItems.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 取消抓包任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        cancelCaptureTask(cancelCaptureTaskRequest?: CancelCaptureTaskRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/capture-task/stop",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let fwInstanceId;
            
            let enterpriseProjectId;

            if (cancelCaptureTaskRequest !== null && cancelCaptureTaskRequest !== undefined) {
                if (cancelCaptureTaskRequest instanceof CancelCaptureTaskRequest) {
                    projectId = cancelCaptureTaskRequest.projectId;
                    fwInstanceId = cancelCaptureTaskRequest.fwInstanceId;
                    body = cancelCaptureTaskRequest.body
                    enterpriseProjectId = cancelCaptureTaskRequest.enterpriseProjectId;
                } else {
                    projectId = cancelCaptureTaskRequest['project_id'];
                    fwInstanceId = cancelCaptureTaskRequest['fw_instance_id'];
                    body = cancelCaptureTaskRequest['body'];
                    enterpriseProjectId = cancelCaptureTaskRequest['enterprise_project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling cancelCaptureTask.');
            }
            if (fwInstanceId === null || fwInstanceId === undefined) {
                throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling cancelCaptureTask.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 东西向防护开启/关闭
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeEastWestFirewallStatus(changeEastWestFirewallStatusRequest?: ChangeEastWestFirewallStatusRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/firewall/east-west/protect",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (changeEastWestFirewallStatusRequest !== null && changeEastWestFirewallStatusRequest !== undefined) {
                if (changeEastWestFirewallStatusRequest instanceof ChangeEastWestFirewallStatusRequest) {
                    projectId = changeEastWestFirewallStatusRequest.projectId;
                    body = changeEastWestFirewallStatusRequest.body
                    enterpriseProjectId = changeEastWestFirewallStatusRequest.enterpriseProjectId;
                    fwInstanceId = changeEastWestFirewallStatusRequest.fwInstanceId;
                } else {
                    projectId = changeEastWestFirewallStatusRequest['project_id'];
                    body = changeEastWestFirewallStatusRequest['body'];
                    enterpriseProjectId = changeEastWestFirewallStatusRequest['enterprise_project_id'];
                    fwInstanceId = changeEastWestFirewallStatusRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling changeEastWestFirewallStatus.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建抓包任务，每个任务只能执行一次。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCaptureTask(createCaptureTaskRequest?: CreateCaptureTaskRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/capture-task",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let fwInstanceId;
            
            let enterpriseProjectId;

            if (createCaptureTaskRequest !== null && createCaptureTaskRequest !== undefined) {
                if (createCaptureTaskRequest instanceof CreateCaptureTaskRequest) {
                    projectId = createCaptureTaskRequest.projectId;
                    fwInstanceId = createCaptureTaskRequest.fwInstanceId;
                    body = createCaptureTaskRequest.body
                    enterpriseProjectId = createCaptureTaskRequest.enterpriseProjectId;
                } else {
                    projectId = createCaptureTaskRequest['project_id'];
                    fwInstanceId = createCaptureTaskRequest['fw_instance_id'];
                    body = createCaptureTaskRequest['body'];
                    enterpriseProjectId = createCaptureTaskRequest['enterprise_project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling createCaptureTask.');
            }
            if (fwInstanceId === null || fwInstanceId === undefined) {
                throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling createCaptureTask.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建东西向防火墙
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createEastWestFirewall(createEastWestFirewallRequest?: CreateEastWestFirewallRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/firewall/east-west",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let fwInstanceId;
            
            let enterpriseProjectId;

            if (createEastWestFirewallRequest !== null && createEastWestFirewallRequest !== undefined) {
                if (createEastWestFirewallRequest instanceof CreateEastWestFirewallRequest) {
                    projectId = createEastWestFirewallRequest.projectId;
                    fwInstanceId = createEastWestFirewallRequest.fwInstanceId;
                    body = createEastWestFirewallRequest.body
                    enterpriseProjectId = createEastWestFirewallRequest.enterpriseProjectId;
                } else {
                    projectId = createEastWestFirewallRequest['project_id'];
                    fwInstanceId = createEastWestFirewallRequest['fw_instance_id'];
                    body = createEastWestFirewallRequest['body'];
                    enterpriseProjectId = createEastWestFirewallRequest['enterprise_project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling createEastWestFirewall.');
            }
            if (fwInstanceId === null || fwInstanceId === undefined) {
                throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling createEastWestFirewall.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建防火墙
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createFirewall(createFirewallRequest?: CreateFirewallRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/firewall",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;
            
            let xClientToken;

            if (createFirewallRequest !== null && createFirewallRequest !== undefined) {
                if (createFirewallRequest instanceof CreateFirewallRequest) {
                    projectId = createFirewallRequest.projectId;
                    body = createFirewallRequest.body
                    xClientToken = createFirewallRequest.xClientToken;
                } else {
                    projectId = createFirewallRequest['project_id'];
                    body = createFirewallRequest['body'];
                    xClientToken = createFirewallRequest['X-Client-Token'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling createFirewall.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xClientToken !== undefined && xClientToken !== null) {
                localVarHeaderParameter['X-Client-Token'] = String(xClientToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTag(createTagRequest?: CreateTagRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/cfw-cfw/{fw_instance_id}/tags/create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;
            
            let fwInstanceId;

            if (createTagRequest !== null && createTagRequest !== undefined) {
                if (createTagRequest instanceof CreateTagRequest) {
                    projectId = createTagRequest.projectId;
                    fwInstanceId = createTagRequest.fwInstanceId;
                    body = createTagRequest.body
                } else {
                    projectId = createTagRequest['project_id'];
                    fwInstanceId = createTagRequest['fw_instance_id'];
                    body = createTagRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling createTag.');
            }
            if (fwInstanceId === null || fwInstanceId === undefined) {
            throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling createTag.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'fw_instance_id': fwInstanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除地址组成员
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAddressItem(deleteAddressItemRequest?: DeleteAddressItemRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/address-items/{item_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let itemId;
            
            let projectId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (deleteAddressItemRequest !== null && deleteAddressItemRequest !== undefined) {
                if (deleteAddressItemRequest instanceof DeleteAddressItemRequest) {
                    itemId = deleteAddressItemRequest.itemId;
                    projectId = deleteAddressItemRequest.projectId;
                    enterpriseProjectId = deleteAddressItemRequest.enterpriseProjectId;
                    fwInstanceId = deleteAddressItemRequest.fwInstanceId;
                } else {
                    itemId = deleteAddressItemRequest['item_id'];
                    projectId = deleteAddressItemRequest['project_id'];
                    enterpriseProjectId = deleteAddressItemRequest['enterprise_project_id'];
                    fwInstanceId = deleteAddressItemRequest['fw_instance_id'];
                }
            }

        
            if (itemId === null || itemId === undefined) {
            throw new RequiredError('itemId','Required parameter itemId was null or undefined when calling deleteAddressItem.');
            }
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteAddressItem.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'item_id': itemId,'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除地址组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAddressSet(deleteAddressSetRequest?: DeleteAddressSetRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/address-sets/{set_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let setId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (deleteAddressSetRequest !== null && deleteAddressSetRequest !== undefined) {
                if (deleteAddressSetRequest instanceof DeleteAddressSetRequest) {
                    projectId = deleteAddressSetRequest.projectId;
                    setId = deleteAddressSetRequest.setId;
                    enterpriseProjectId = deleteAddressSetRequest.enterpriseProjectId;
                    fwInstanceId = deleteAddressSetRequest.fwInstanceId;
                } else {
                    projectId = deleteAddressSetRequest['project_id'];
                    setId = deleteAddressSetRequest['set_id'];
                    enterpriseProjectId = deleteAddressSetRequest['enterprise_project_id'];
                    fwInstanceId = deleteAddressSetRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteAddressSet.');
            }
            if (setId === null || setId === undefined) {
            throw new RequiredError('setId','Required parameter setId was null or undefined when calling deleteAddressSet.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'set_id': setId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除黑白名单规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteBlackWhiteList(deleteBlackWhiteListRequest?: DeleteBlackWhiteListRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/black-white-list/{list_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let listId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (deleteBlackWhiteListRequest !== null && deleteBlackWhiteListRequest !== undefined) {
                if (deleteBlackWhiteListRequest instanceof DeleteBlackWhiteListRequest) {
                    projectId = deleteBlackWhiteListRequest.projectId;
                    listId = deleteBlackWhiteListRequest.listId;
                    enterpriseProjectId = deleteBlackWhiteListRequest.enterpriseProjectId;
                    fwInstanceId = deleteBlackWhiteListRequest.fwInstanceId;
                } else {
                    projectId = deleteBlackWhiteListRequest['project_id'];
                    listId = deleteBlackWhiteListRequest['list_id'];
                    enterpriseProjectId = deleteBlackWhiteListRequest['enterprise_project_id'];
                    fwInstanceId = deleteBlackWhiteListRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteBlackWhiteList.');
            }
            if (listId === null || listId === undefined) {
            throw new RequiredError('listId','Required parameter listId was null or undefined when calling deleteBlackWhiteList.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'list_id': listId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除抓包任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCaptureTask(deleteCaptureTaskRequest?: DeleteCaptureTaskRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/capture-task/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let fwInstanceId;
            
            let enterpriseProjectId;

            if (deleteCaptureTaskRequest !== null && deleteCaptureTaskRequest !== undefined) {
                if (deleteCaptureTaskRequest instanceof DeleteCaptureTaskRequest) {
                    projectId = deleteCaptureTaskRequest.projectId;
                    fwInstanceId = deleteCaptureTaskRequest.fwInstanceId;
                    body = deleteCaptureTaskRequest.body
                    enterpriseProjectId = deleteCaptureTaskRequest.enterpriseProjectId;
                } else {
                    projectId = deleteCaptureTaskRequest['project_id'];
                    fwInstanceId = deleteCaptureTaskRequest['fw_instance_id'];
                    body = deleteCaptureTaskRequest['body'];
                    enterpriseProjectId = deleteCaptureTaskRequest['enterprise_project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteCaptureTask.');
            }
            if (fwInstanceId === null || fwInstanceId === undefined) {
                throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling deleteCaptureTask.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除域名组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDomainSet(deleteDomainSetRequest?: DeleteDomainSetRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/domain-set/{set_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let setId;
            
            let fwInstanceId;
            
            let enterpriseProjectId;

            if (deleteDomainSetRequest !== null && deleteDomainSetRequest !== undefined) {
                if (deleteDomainSetRequest instanceof DeleteDomainSetRequest) {
                    projectId = deleteDomainSetRequest.projectId;
                    setId = deleteDomainSetRequest.setId;
                    fwInstanceId = deleteDomainSetRequest.fwInstanceId;
                    enterpriseProjectId = deleteDomainSetRequest.enterpriseProjectId;
                } else {
                    projectId = deleteDomainSetRequest['project_id'];
                    setId = deleteDomainSetRequest['set_id'];
                    fwInstanceId = deleteDomainSetRequest['fw_instance_id'];
                    enterpriseProjectId = deleteDomainSetRequest['enterprise_project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteDomainSet.');
            }
            if (setId === null || setId === undefined) {
            throw new RequiredError('setId','Required parameter setId was null or undefined when calling deleteDomainSet.');
            }
            if (fwInstanceId === null || fwInstanceId === undefined) {
                throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling deleteDomainSet.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'set_id': setId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除域名列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDomains(deleteDomainsRequest?: DeleteDomainsRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/domain-set/domains/{set_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let setId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (deleteDomainsRequest !== null && deleteDomainsRequest !== undefined) {
                if (deleteDomainsRequest instanceof DeleteDomainsRequest) {
                    projectId = deleteDomainsRequest.projectId;
                    setId = deleteDomainsRequest.setId;
                    enterpriseProjectId = deleteDomainsRequest.enterpriseProjectId;
                    fwInstanceId = deleteDomainsRequest.fwInstanceId;
                    body = deleteDomainsRequest.body
                } else {
                    projectId = deleteDomainsRequest['project_id'];
                    setId = deleteDomainsRequest['set_id'];
                    enterpriseProjectId = deleteDomainsRequest['enterprise_project_id'];
                    fwInstanceId = deleteDomainsRequest['fw_instance_id'];
                    body = deleteDomainsRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteDomains.');
            }
            if (setId === null || setId === undefined) {
            throw new RequiredError('setId','Required parameter setId was null or undefined when calling deleteDomains.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'set_id': setId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除防火墙，仅按需生效
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteFirewall(deleteFirewallRequest?: DeleteFirewallRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/firewall/{resource_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;
            
            let resourceId;

            if (deleteFirewallRequest !== null && deleteFirewallRequest !== undefined) {
                if (deleteFirewallRequest instanceof DeleteFirewallRequest) {
                    projectId = deleteFirewallRequest.projectId;
                    resourceId = deleteFirewallRequest.resourceId;
                } else {
                    projectId = deleteFirewallRequest['project_id'];
                    resourceId = deleteFirewallRequest['resource_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteFirewall.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling deleteFirewall.');
            }

            options.pathParams = { 'project_id': projectId,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除流量过滤功能下已经导入的IP黑名单，指定生效范围进行删除。 标准版的墙只会存在生效范围为EIP的IP黑名单，专业版的墙会存在生效范围为EIP和NAT的IP黑名单。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteIpBlacklist(deleteIpBlacklistRequest?: DeleteIpBlacklistRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/ptf/ip-blacklist",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let fwInstanceId;

            if (deleteIpBlacklistRequest !== null && deleteIpBlacklistRequest !== undefined) {
                if (deleteIpBlacklistRequest instanceof DeleteIpBlacklistRequest) {
                    projectId = deleteIpBlacklistRequest.projectId;
                    fwInstanceId = deleteIpBlacklistRequest.fwInstanceId;
                    body = deleteIpBlacklistRequest.body
                } else {
                    projectId = deleteIpBlacklistRequest['project_id'];
                    fwInstanceId = deleteIpBlacklistRequest['fw_instance_id'];
                    body = deleteIpBlacklistRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteIpBlacklist.');
            }
            if (fwInstanceId === null || fwInstanceId === undefined) {
                throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling deleteIpBlacklist.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除服务组成员
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteServiceItem(deleteServiceItemRequest?: DeleteServiceItemRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/service-items/{item_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let itemId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (deleteServiceItemRequest !== null && deleteServiceItemRequest !== undefined) {
                if (deleteServiceItemRequest instanceof DeleteServiceItemRequest) {
                    projectId = deleteServiceItemRequest.projectId;
                    itemId = deleteServiceItemRequest.itemId;
                    enterpriseProjectId = deleteServiceItemRequest.enterpriseProjectId;
                    fwInstanceId = deleteServiceItemRequest.fwInstanceId;
                } else {
                    projectId = deleteServiceItemRequest['project_id'];
                    itemId = deleteServiceItemRequest['item_id'];
                    enterpriseProjectId = deleteServiceItemRequest['enterprise_project_id'];
                    fwInstanceId = deleteServiceItemRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteServiceItem.');
            }
            if (itemId === null || itemId === undefined) {
            throw new RequiredError('itemId','Required parameter itemId was null or undefined when calling deleteServiceItem.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'item_id': itemId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除服务组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteServiceSet(deleteServiceSetRequest?: DeleteServiceSetRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/service-sets/{set_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let setId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (deleteServiceSetRequest !== null && deleteServiceSetRequest !== undefined) {
                if (deleteServiceSetRequest instanceof DeleteServiceSetRequest) {
                    projectId = deleteServiceSetRequest.projectId;
                    setId = deleteServiceSetRequest.setId;
                    enterpriseProjectId = deleteServiceSetRequest.enterpriseProjectId;
                    fwInstanceId = deleteServiceSetRequest.fwInstanceId;
                } else {
                    projectId = deleteServiceSetRequest['project_id'];
                    setId = deleteServiceSetRequest['set_id'];
                    enterpriseProjectId = deleteServiceSetRequest['enterprise_project_id'];
                    fwInstanceId = deleteServiceSetRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteServiceSet.');
            }
            if (setId === null || setId === undefined) {
            throw new RequiredError('setId','Required parameter setId was null or undefined when calling deleteServiceSet.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'set_id': setId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTag(deleteTagRequest?: DeleteTagRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/cfw-cfw/{fw_instance_id}/tags/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;
            
            let fwInstanceId;

            if (deleteTagRequest !== null && deleteTagRequest !== undefined) {
                if (deleteTagRequest instanceof DeleteTagRequest) {
                    projectId = deleteTagRequest.projectId;
                    fwInstanceId = deleteTagRequest.fwInstanceId;
                    body = deleteTagRequest.body
                } else {
                    projectId = deleteTagRequest['project_id'];
                    fwInstanceId = deleteTagRequest['fw_instance_id'];
                    body = deleteTagRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteTag.');
            }
            if (fwInstanceId === null || fwInstanceId === undefined) {
            throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling deleteTag.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'fw_instance_id': fwInstanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 开启或者关闭流量过滤功能，当前流量过滤是通过导入IP黑名单实现的。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enableIpBlacklist(enableIpBlacklistRequest?: EnableIpBlacklistRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/ptf/ip-blacklist/switch",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let fwInstanceId;

            if (enableIpBlacklistRequest !== null && enableIpBlacklistRequest !== undefined) {
                if (enableIpBlacklistRequest instanceof EnableIpBlacklistRequest) {
                    projectId = enableIpBlacklistRequest.projectId;
                    fwInstanceId = enableIpBlacklistRequest.fwInstanceId;
                    body = enableIpBlacklistRequest.body
                } else {
                    projectId = enableIpBlacklistRequest['project_id'];
                    fwInstanceId = enableIpBlacklistRequest['fw_instance_id'];
                    body = enableIpBlacklistRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling enableIpBlacklist.');
            }
            if (fwInstanceId === null || fwInstanceId === undefined) {
                throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling enableIpBlacklist.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 指定IP黑名单的名字进行导出，当前只有两种文件名，在EIP生效的文件名为ip-blacklist-eip.txt，在 NAT生效的文件名为ip-blacklist-nat.txt。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        exportIpBlacklist(exportIpBlacklistRequest?: ExportIpBlacklistRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/ptf/ip-blacklist/export",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let fwInstanceId;
            
            let name;

            if (exportIpBlacklistRequest !== null && exportIpBlacklistRequest !== undefined) {
                if (exportIpBlacklistRequest instanceof ExportIpBlacklistRequest) {
                    projectId = exportIpBlacklistRequest.projectId;
                    fwInstanceId = exportIpBlacklistRequest.fwInstanceId;
                    name = exportIpBlacklistRequest.name;
                } else {
                    projectId = exportIpBlacklistRequest['project_id'];
                    fwInstanceId = exportIpBlacklistRequest['fw_instance_id'];
                    name = exportIpBlacklistRequest['name'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling exportIpBlacklist.');
            }
            if (fwInstanceId === null || fwInstanceId === undefined) {
                throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling exportIpBlacklist.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (name === null || name === undefined) {
                throw new RequiredError('name','Required parameter name was null or undefined when calling exportIpBlacklist.');
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 此接口用来导入IP黑名单，IP列表保存在request的body中，IP列表支持的格式如下：
         * 单个IP地址，例如：100.1.1.10
         * 连续的IP地址段，例如：80.1.1.3-80.1.1.30
         * 掩码格式的网段，例如：6.6.6.0/24
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        importIpBlacklist(importIpBlacklistRequest?: ImportIpBlacklistRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/ptf/ip-blacklist/import",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let fwInstanceId;

            if (importIpBlacklistRequest !== null && importIpBlacklistRequest !== undefined) {
                if (importIpBlacklistRequest instanceof ImportIpBlacklistRequest) {
                    projectId = importIpBlacklistRequest.projectId;
                    fwInstanceId = importIpBlacklistRequest.fwInstanceId;
                    body = importIpBlacklistRequest.body
                } else {
                    projectId = importIpBlacklistRequest['project_id'];
                    fwInstanceId = importIpBlacklistRequest['fw_instance_id'];
                    body = importIpBlacklistRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling importIpBlacklist.');
            }
            if (fwInstanceId === null || fwInstanceId === undefined) {
                throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling importIpBlacklist.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询访问控制日志
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAccessControlLogs(listAccessControlLogsRequest?: ListAccessControlLogsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cfw/logs/access-control",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let fwInstanceId;
            
            let startTime;
            
            let endTime;
            
            let limit;
            
            let ruleId;
            
            let srcIp;
            
            let srcPort;
            
            let dstIp;
            
            let dstPort;
            
            let protocol;
            
            let app;
            
            let logId;
            
            let nextDate;
            
            let offset;
            
            let logType;
            
            let enterpriseProjectId;
            
            let dstHost;
            
            let ruleName;
            
            let action;
            
            let srcRegionName;
            
            let dstRegionName;
            
            let srcProvinceName;
            
            let dstProvinceName;
            
            let srcCityName;
            
            let dstCityName;

            if (listAccessControlLogsRequest !== null && listAccessControlLogsRequest !== undefined) {
                if (listAccessControlLogsRequest instanceof ListAccessControlLogsRequest) {
                    projectId = listAccessControlLogsRequest.projectId;
                    fwInstanceId = listAccessControlLogsRequest.fwInstanceId;
                    startTime = listAccessControlLogsRequest.startTime;
                    endTime = listAccessControlLogsRequest.endTime;
                    limit = listAccessControlLogsRequest.limit;
                    ruleId = listAccessControlLogsRequest.ruleId;
                    srcIp = listAccessControlLogsRequest.srcIp;
                    srcPort = listAccessControlLogsRequest.srcPort;
                    dstIp = listAccessControlLogsRequest.dstIp;
                    dstPort = listAccessControlLogsRequest.dstPort;
                    protocol = listAccessControlLogsRequest.protocol;
                    app = listAccessControlLogsRequest.app;
                    logId = listAccessControlLogsRequest.logId;
                    nextDate = listAccessControlLogsRequest.nextDate;
                    offset = listAccessControlLogsRequest.offset;
                    logType = listAccessControlLogsRequest.logType;
                    enterpriseProjectId = listAccessControlLogsRequest.enterpriseProjectId;
                    dstHost = listAccessControlLogsRequest.dstHost;
                    ruleName = listAccessControlLogsRequest.ruleName;
                    action = listAccessControlLogsRequest.action;
                    srcRegionName = listAccessControlLogsRequest.srcRegionName;
                    dstRegionName = listAccessControlLogsRequest.dstRegionName;
                    srcProvinceName = listAccessControlLogsRequest.srcProvinceName;
                    dstProvinceName = listAccessControlLogsRequest.dstProvinceName;
                    srcCityName = listAccessControlLogsRequest.srcCityName;
                    dstCityName = listAccessControlLogsRequest.dstCityName;
                } else {
                    projectId = listAccessControlLogsRequest['project_id'];
                    fwInstanceId = listAccessControlLogsRequest['fw_instance_id'];
                    startTime = listAccessControlLogsRequest['start_time'];
                    endTime = listAccessControlLogsRequest['end_time'];
                    limit = listAccessControlLogsRequest['limit'];
                    ruleId = listAccessControlLogsRequest['rule_id'];
                    srcIp = listAccessControlLogsRequest['src_ip'];
                    srcPort = listAccessControlLogsRequest['src_port'];
                    dstIp = listAccessControlLogsRequest['dst_ip'];
                    dstPort = listAccessControlLogsRequest['dst_port'];
                    protocol = listAccessControlLogsRequest['protocol'];
                    app = listAccessControlLogsRequest['app'];
                    logId = listAccessControlLogsRequest['log_id'];
                    nextDate = listAccessControlLogsRequest['next_date'];
                    offset = listAccessControlLogsRequest['offset'];
                    logType = listAccessControlLogsRequest['log_type'];
                    enterpriseProjectId = listAccessControlLogsRequest['enterprise_project_id'];
                    dstHost = listAccessControlLogsRequest['dst_host'];
                    ruleName = listAccessControlLogsRequest['rule_name'];
                    action = listAccessControlLogsRequest['action'];
                    srcRegionName = listAccessControlLogsRequest['src_region_name'];
                    dstRegionName = listAccessControlLogsRequest['dst_region_name'];
                    srcProvinceName = listAccessControlLogsRequest['src_province_name'];
                    dstProvinceName = listAccessControlLogsRequest['dst_province_name'];
                    srcCityName = listAccessControlLogsRequest['src_city_name'];
                    dstCityName = listAccessControlLogsRequest['dst_city_name'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listAccessControlLogs.');
            }
            if (fwInstanceId === null || fwInstanceId === undefined) {
                throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling listAccessControlLogs.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listAccessControlLogs.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listAccessControlLogs.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listAccessControlLogs.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (ruleId !== null && ruleId !== undefined) {
                localVarQueryParameter['rule_id'] = ruleId;
            }
            if (srcIp !== null && srcIp !== undefined) {
                localVarQueryParameter['src_ip'] = srcIp;
            }
            if (srcPort !== null && srcPort !== undefined) {
                localVarQueryParameter['src_port'] = srcPort;
            }
            if (dstIp !== null && dstIp !== undefined) {
                localVarQueryParameter['dst_ip'] = dstIp;
            }
            if (dstPort !== null && dstPort !== undefined) {
                localVarQueryParameter['dst_port'] = dstPort;
            }
            if (protocol !== null && protocol !== undefined) {
                localVarQueryParameter['protocol'] = protocol;
            }
            if (app !== null && app !== undefined) {
                localVarQueryParameter['app'] = app;
            }
            if (logId !== null && logId !== undefined) {
                localVarQueryParameter['log_id'] = logId;
            }
            if (nextDate !== null && nextDate !== undefined) {
                localVarQueryParameter['next_date'] = nextDate;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (logType !== null && logType !== undefined) {
                localVarQueryParameter['log_type'] = logType;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (dstHost !== null && dstHost !== undefined) {
                localVarQueryParameter['dst_host'] = dstHost;
            }
            if (ruleName !== null && ruleName !== undefined) {
                localVarQueryParameter['rule_name'] = ruleName;
            }
            if (action !== null && action !== undefined) {
                localVarQueryParameter['action'] = action;
            }
            if (srcRegionName !== null && srcRegionName !== undefined) {
                localVarQueryParameter['src_region_name'] = srcRegionName;
            }
            if (dstRegionName !== null && dstRegionName !== undefined) {
                localVarQueryParameter['dst_region_name'] = dstRegionName;
            }
            if (srcProvinceName !== null && srcProvinceName !== undefined) {
                localVarQueryParameter['src_province_name'] = srcProvinceName;
            }
            if (dstProvinceName !== null && dstProvinceName !== undefined) {
                localVarQueryParameter['dst_province_name'] = dstProvinceName;
            }
            if (srcCityName !== null && srcCityName !== undefined) {
                localVarQueryParameter['src_city_name'] = srcCityName;
            }
            if (dstCityName !== null && dstCityName !== undefined) {
                localVarQueryParameter['dst_city_name'] = dstCityName;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询地址组成员
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAddressItems(listAddressItemsRequest?: ListAddressItemsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/address-items",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let setId;
            
            let limit;
            
            let offset;
            
            let keyWord;
            
            let address;
            
            let enterpriseProjectId;
            
            let fwInstanceId;
            
            let queryAddressSetType;

            if (listAddressItemsRequest !== null && listAddressItemsRequest !== undefined) {
                if (listAddressItemsRequest instanceof ListAddressItemsRequest) {
                    projectId = listAddressItemsRequest.projectId;
                    setId = listAddressItemsRequest.setId;
                    limit = listAddressItemsRequest.limit;
                    offset = listAddressItemsRequest.offset;
                    keyWord = listAddressItemsRequest.keyWord;
                    address = listAddressItemsRequest.address;
                    enterpriseProjectId = listAddressItemsRequest.enterpriseProjectId;
                    fwInstanceId = listAddressItemsRequest.fwInstanceId;
                    queryAddressSetType = listAddressItemsRequest.queryAddressSetType;
                } else {
                    projectId = listAddressItemsRequest['project_id'];
                    setId = listAddressItemsRequest['set_id'];
                    limit = listAddressItemsRequest['limit'];
                    offset = listAddressItemsRequest['offset'];
                    keyWord = listAddressItemsRequest['key_word'];
                    address = listAddressItemsRequest['address'];
                    enterpriseProjectId = listAddressItemsRequest['enterprise_project_id'];
                    fwInstanceId = listAddressItemsRequest['fw_instance_id'];
                    queryAddressSetType = listAddressItemsRequest['query_address_set_type'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listAddressItems.');
            }
            if (setId === null || setId === undefined) {
                throw new RequiredError('setId','Required parameter setId was null or undefined when calling listAddressItems.');
            }
            if (setId !== null && setId !== undefined) {
                localVarQueryParameter['set_id'] = setId;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listAddressItems.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listAddressItems.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (keyWord !== null && keyWord !== undefined) {
                localVarQueryParameter['key_word'] = keyWord;
            }
            if (address !== null && address !== undefined) {
                localVarQueryParameter['address'] = address;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (queryAddressSetType !== null && queryAddressSetType !== undefined) {
                localVarQueryParameter['query_address_set_type'] = queryAddressSetType;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询地址组详细
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAddressSetDetail(listAddressSetDetailRequest?: ListAddressSetDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/address-sets/{set_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let setId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;
            
            let queryAddressSetType;

            if (listAddressSetDetailRequest !== null && listAddressSetDetailRequest !== undefined) {
                if (listAddressSetDetailRequest instanceof ListAddressSetDetailRequest) {
                    projectId = listAddressSetDetailRequest.projectId;
                    setId = listAddressSetDetailRequest.setId;
                    enterpriseProjectId = listAddressSetDetailRequest.enterpriseProjectId;
                    fwInstanceId = listAddressSetDetailRequest.fwInstanceId;
                    queryAddressSetType = listAddressSetDetailRequest.queryAddressSetType;
                } else {
                    projectId = listAddressSetDetailRequest['project_id'];
                    setId = listAddressSetDetailRequest['set_id'];
                    enterpriseProjectId = listAddressSetDetailRequest['enterprise_project_id'];
                    fwInstanceId = listAddressSetDetailRequest['fw_instance_id'];
                    queryAddressSetType = listAddressSetDetailRequest['query_address_set_type'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listAddressSetDetail.');
            }
            if (setId === null || setId === undefined) {
            throw new RequiredError('setId','Required parameter setId was null or undefined when calling listAddressSetDetail.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (queryAddressSetType !== null && queryAddressSetType !== undefined) {
                localVarQueryParameter['query_address_set_type'] = queryAddressSetType;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'set_id': setId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询地址组列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAddressSets(listAddressSetsRequest?: ListAddressSetsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/address-sets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let objectId;
            
            let limit;
            
            let offset;
            
            let keyWord;
            
            let address;
            
            let addressType;
            
            let enterpriseProjectId;
            
            let fwInstanceId;
            
            let queryAddressSetType;
            
            let addressSetType;

            if (listAddressSetsRequest !== null && listAddressSetsRequest !== undefined) {
                if (listAddressSetsRequest instanceof ListAddressSetsRequest) {
                    projectId = listAddressSetsRequest.projectId;
                    objectId = listAddressSetsRequest.objectId;
                    limit = listAddressSetsRequest.limit;
                    offset = listAddressSetsRequest.offset;
                    keyWord = listAddressSetsRequest.keyWord;
                    address = listAddressSetsRequest.address;
                    addressType = listAddressSetsRequest.addressType;
                    enterpriseProjectId = listAddressSetsRequest.enterpriseProjectId;
                    fwInstanceId = listAddressSetsRequest.fwInstanceId;
                    queryAddressSetType = listAddressSetsRequest.queryAddressSetType;
                    addressSetType = listAddressSetsRequest.addressSetType;
                } else {
                    projectId = listAddressSetsRequest['project_id'];
                    objectId = listAddressSetsRequest['object_id'];
                    limit = listAddressSetsRequest['limit'];
                    offset = listAddressSetsRequest['offset'];
                    keyWord = listAddressSetsRequest['key_word'];
                    address = listAddressSetsRequest['address'];
                    addressType = listAddressSetsRequest['address_type'];
                    enterpriseProjectId = listAddressSetsRequest['enterprise_project_id'];
                    fwInstanceId = listAddressSetsRequest['fw_instance_id'];
                    queryAddressSetType = listAddressSetsRequest['query_address_set_type'];
                    addressSetType = listAddressSetsRequest['address_set_type'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listAddressSets.');
            }
            if (objectId === null || objectId === undefined) {
                throw new RequiredError('objectId','Required parameter objectId was null or undefined when calling listAddressSets.');
            }
            if (objectId !== null && objectId !== undefined) {
                localVarQueryParameter['object_id'] = objectId;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listAddressSets.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listAddressSets.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (keyWord !== null && keyWord !== undefined) {
                localVarQueryParameter['key_word'] = keyWord;
            }
            if (address !== null && address !== undefined) {
                localVarQueryParameter['address'] = address;
            }
            if (addressType !== null && addressType !== undefined) {
                localVarQueryParameter['address_type'] = addressType;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (queryAddressSetType !== null && queryAddressSetType !== undefined) {
                localVarQueryParameter['query_address_set_type'] = queryAddressSetType;
            }
            if (addressSetType !== null && addressSetType !== undefined) {
                localVarQueryParameter['address_set_type'] = addressSetType;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询攻击日志
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAttackLogs(listAttackLogsRequest?: ListAttackLogsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cfw/logs/attack",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let startTime;
            
            let endTime;
            
            let limit;
            
            let fwInstanceId;
            
            let srcIp;
            
            let srcPort;
            
            let dstIp;
            
            let dstPort;
            
            let protocol;
            
            let app;
            
            let logId;
            
            let nextDate;
            
            let offset;
            
            let action;
            
            let direction;
            
            let attackType;
            
            let attackRule;
            
            let level;
            
            let enterpriseProjectId;
            
            let dstHost;
            
            let logType;
            
            let attackRuleId;
            
            let srcRegionName;
            
            let dstRegionName;
            
            let srcProvinceName;
            
            let dstProvinceName;
            
            let srcCityName;
            
            let dstCityName;

            if (listAttackLogsRequest !== null && listAttackLogsRequest !== undefined) {
                if (listAttackLogsRequest instanceof ListAttackLogsRequest) {
                    projectId = listAttackLogsRequest.projectId;
                    startTime = listAttackLogsRequest.startTime;
                    endTime = listAttackLogsRequest.endTime;
                    limit = listAttackLogsRequest.limit;
                    fwInstanceId = listAttackLogsRequest.fwInstanceId;
                    srcIp = listAttackLogsRequest.srcIp;
                    srcPort = listAttackLogsRequest.srcPort;
                    dstIp = listAttackLogsRequest.dstIp;
                    dstPort = listAttackLogsRequest.dstPort;
                    protocol = listAttackLogsRequest.protocol;
                    app = listAttackLogsRequest.app;
                    logId = listAttackLogsRequest.logId;
                    nextDate = listAttackLogsRequest.nextDate;
                    offset = listAttackLogsRequest.offset;
                    action = listAttackLogsRequest.action;
                    direction = listAttackLogsRequest.direction;
                    attackType = listAttackLogsRequest.attackType;
                    attackRule = listAttackLogsRequest.attackRule;
                    level = listAttackLogsRequest.level;
                    enterpriseProjectId = listAttackLogsRequest.enterpriseProjectId;
                    dstHost = listAttackLogsRequest.dstHost;
                    logType = listAttackLogsRequest.logType;
                    attackRuleId = listAttackLogsRequest.attackRuleId;
                    srcRegionName = listAttackLogsRequest.srcRegionName;
                    dstRegionName = listAttackLogsRequest.dstRegionName;
                    srcProvinceName = listAttackLogsRequest.srcProvinceName;
                    dstProvinceName = listAttackLogsRequest.dstProvinceName;
                    srcCityName = listAttackLogsRequest.srcCityName;
                    dstCityName = listAttackLogsRequest.dstCityName;
                } else {
                    projectId = listAttackLogsRequest['project_id'];
                    startTime = listAttackLogsRequest['start_time'];
                    endTime = listAttackLogsRequest['end_time'];
                    limit = listAttackLogsRequest['limit'];
                    fwInstanceId = listAttackLogsRequest['fw_instance_id'];
                    srcIp = listAttackLogsRequest['src_ip'];
                    srcPort = listAttackLogsRequest['src_port'];
                    dstIp = listAttackLogsRequest['dst_ip'];
                    dstPort = listAttackLogsRequest['dst_port'];
                    protocol = listAttackLogsRequest['protocol'];
                    app = listAttackLogsRequest['app'];
                    logId = listAttackLogsRequest['log_id'];
                    nextDate = listAttackLogsRequest['next_date'];
                    offset = listAttackLogsRequest['offset'];
                    action = listAttackLogsRequest['action'];
                    direction = listAttackLogsRequest['direction'];
                    attackType = listAttackLogsRequest['attack_type'];
                    attackRule = listAttackLogsRequest['attack_rule'];
                    level = listAttackLogsRequest['level'];
                    enterpriseProjectId = listAttackLogsRequest['enterprise_project_id'];
                    dstHost = listAttackLogsRequest['dst_host'];
                    logType = listAttackLogsRequest['log_type'];
                    attackRuleId = listAttackLogsRequest['attack_rule_id'];
                    srcRegionName = listAttackLogsRequest['src_region_name'];
                    dstRegionName = listAttackLogsRequest['dst_region_name'];
                    srcProvinceName = listAttackLogsRequest['src_province_name'];
                    dstProvinceName = listAttackLogsRequest['dst_province_name'];
                    srcCityName = listAttackLogsRequest['src_city_name'];
                    dstCityName = listAttackLogsRequest['dst_city_name'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listAttackLogs.');
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listAttackLogs.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listAttackLogs.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listAttackLogs.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (fwInstanceId === null || fwInstanceId === undefined) {
                throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling listAttackLogs.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (srcIp !== null && srcIp !== undefined) {
                localVarQueryParameter['src_ip'] = srcIp;
            }
            if (srcPort !== null && srcPort !== undefined) {
                localVarQueryParameter['src_port'] = srcPort;
            }
            if (dstIp !== null && dstIp !== undefined) {
                localVarQueryParameter['dst_ip'] = dstIp;
            }
            if (dstPort !== null && dstPort !== undefined) {
                localVarQueryParameter['dst_port'] = dstPort;
            }
            if (protocol !== null && protocol !== undefined) {
                localVarQueryParameter['protocol'] = protocol;
            }
            if (app !== null && app !== undefined) {
                localVarQueryParameter['app'] = app;
            }
            if (logId !== null && logId !== undefined) {
                localVarQueryParameter['log_id'] = logId;
            }
            if (nextDate !== null && nextDate !== undefined) {
                localVarQueryParameter['next_date'] = nextDate;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (action !== null && action !== undefined) {
                localVarQueryParameter['action'] = action;
            }
            if (direction !== null && direction !== undefined) {
                localVarQueryParameter['direction'] = direction;
            }
            if (attackType !== null && attackType !== undefined) {
                localVarQueryParameter['attack_type'] = attackType;
            }
            if (attackRule !== null && attackRule !== undefined) {
                localVarQueryParameter['attack_rule'] = attackRule;
            }
            if (level !== null && level !== undefined) {
                localVarQueryParameter['level'] = level;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (dstHost !== null && dstHost !== undefined) {
                localVarQueryParameter['dst_host'] = dstHost;
            }
            if (logType !== null && logType !== undefined) {
                localVarQueryParameter['log_type'] = logType;
            }
            if (attackRuleId !== null && attackRuleId !== undefined) {
                localVarQueryParameter['attack_rule_id'] = attackRuleId;
            }
            if (srcRegionName !== null && srcRegionName !== undefined) {
                localVarQueryParameter['src_region_name'] = srcRegionName;
            }
            if (dstRegionName !== null && dstRegionName !== undefined) {
                localVarQueryParameter['dst_region_name'] = dstRegionName;
            }
            if (srcProvinceName !== null && srcProvinceName !== undefined) {
                localVarQueryParameter['src_province_name'] = srcProvinceName;
            }
            if (dstProvinceName !== null && dstProvinceName !== undefined) {
                localVarQueryParameter['dst_province_name'] = dstProvinceName;
            }
            if (srcCityName !== null && srcCityName !== undefined) {
                localVarQueryParameter['src_city_name'] = srcCityName;
            }
            if (dstCityName !== null && dstCityName !== undefined) {
                localVarQueryParameter['dst_city_name'] = dstCityName;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据防火墙攻击日志，查询攻击统计信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAttackStatistic(listAttackStatisticRequest?: ListAttackStatisticRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cfw/logs/attack-statistic",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let fwInstanceId;
            
            let logType;
            
            let item;
            
            let range;
            
            let direction;
            
            let startTime;
            
            let endTime;
            
            let vgwId;

            if (listAttackStatisticRequest !== null && listAttackStatisticRequest !== undefined) {
                if (listAttackStatisticRequest instanceof ListAttackStatisticRequest) {
                    projectId = listAttackStatisticRequest.projectId;
                    fwInstanceId = listAttackStatisticRequest.fwInstanceId;
                    logType = listAttackStatisticRequest.logType;
                    item = listAttackStatisticRequest.item;
                    range = listAttackStatisticRequest.range;
                    direction = listAttackStatisticRequest.direction;
                    startTime = listAttackStatisticRequest.startTime;
                    endTime = listAttackStatisticRequest.endTime;
                    vgwId = listAttackStatisticRequest.vgwId;
                } else {
                    projectId = listAttackStatisticRequest['project_id'];
                    fwInstanceId = listAttackStatisticRequest['fw_instance_id'];
                    logType = listAttackStatisticRequest['log_type'];
                    item = listAttackStatisticRequest['item'];
                    range = listAttackStatisticRequest['range'];
                    direction = listAttackStatisticRequest['direction'];
                    startTime = listAttackStatisticRequest['start_time'];
                    endTime = listAttackStatisticRequest['end_time'];
                    vgwId = listAttackStatisticRequest['vgw_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listAttackStatistic.');
            }
            if (fwInstanceId === null || fwInstanceId === undefined) {
                throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling listAttackStatistic.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (logType === null || logType === undefined) {
                throw new RequiredError('logType','Required parameter logType was null or undefined when calling listAttackStatistic.');
            }
            if (logType !== null && logType !== undefined) {
                localVarQueryParameter['log_type'] = logType;
            }
            if (item === null || item === undefined) {
                throw new RequiredError('item','Required parameter item was null or undefined when calling listAttackStatistic.');
            }
            if (item !== null && item !== undefined) {
                localVarQueryParameter['item'] = item;
            }
            if (range !== null && range !== undefined) {
                localVarQueryParameter['range'] = range;
            }
            if (direction !== null && direction !== undefined) {
                localVarQueryParameter['direction'] = direction;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (vgwId !== null && vgwId !== undefined) {
                localVarQueryParameter['vgw_id'] = vgwId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询黑白名单列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBlackWhiteLists(listBlackWhiteListsRequest?: ListBlackWhiteListsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/black-white-lists",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let objectId;
            
            let listType;
            
            let limit;
            
            let offset;
            
            let addressType;
            
            let address;
            
            let port;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (listBlackWhiteListsRequest !== null && listBlackWhiteListsRequest !== undefined) {
                if (listBlackWhiteListsRequest instanceof ListBlackWhiteListsRequest) {
                    projectId = listBlackWhiteListsRequest.projectId;
                    objectId = listBlackWhiteListsRequest.objectId;
                    listType = listBlackWhiteListsRequest.listType;
                    limit = listBlackWhiteListsRequest.limit;
                    offset = listBlackWhiteListsRequest.offset;
                    addressType = listBlackWhiteListsRequest.addressType;
                    address = listBlackWhiteListsRequest.address;
                    port = listBlackWhiteListsRequest.port;
                    enterpriseProjectId = listBlackWhiteListsRequest.enterpriseProjectId;
                    fwInstanceId = listBlackWhiteListsRequest.fwInstanceId;
                } else {
                    projectId = listBlackWhiteListsRequest['project_id'];
                    objectId = listBlackWhiteListsRequest['object_id'];
                    listType = listBlackWhiteListsRequest['list_type'];
                    limit = listBlackWhiteListsRequest['limit'];
                    offset = listBlackWhiteListsRequest['offset'];
                    addressType = listBlackWhiteListsRequest['address_type'];
                    address = listBlackWhiteListsRequest['address'];
                    port = listBlackWhiteListsRequest['port'];
                    enterpriseProjectId = listBlackWhiteListsRequest['enterprise_project_id'];
                    fwInstanceId = listBlackWhiteListsRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listBlackWhiteLists.');
            }
            if (objectId === null || objectId === undefined) {
                throw new RequiredError('objectId','Required parameter objectId was null or undefined when calling listBlackWhiteLists.');
            }
            if (objectId !== null && objectId !== undefined) {
                localVarQueryParameter['object_id'] = objectId;
            }
            if (listType === null || listType === undefined) {
                throw new RequiredError('listType','Required parameter listType was null or undefined when calling listBlackWhiteLists.');
            }
            if (listType !== null && listType !== undefined) {
                localVarQueryParameter['list_type'] = listType;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listBlackWhiteLists.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listBlackWhiteLists.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (addressType !== null && addressType !== undefined) {
                localVarQueryParameter['address_type'] = addressType;
            }
            if (address !== null && address !== undefined) {
                localVarQueryParameter['address'] = address;
            }
            if (port !== null && port !== undefined) {
                localVarQueryParameter['port'] = port;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取抓包任务结果
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCaptureResult(listCaptureResultRequest?: ListCaptureResultRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/capture-task/capture-result",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let fwInstanceId;
            
            let taskId;
            
            let type;
            
            let ip;
            
            let enterpriseProjectId;

            if (listCaptureResultRequest !== null && listCaptureResultRequest !== undefined) {
                if (listCaptureResultRequest instanceof ListCaptureResultRequest) {
                    projectId = listCaptureResultRequest.projectId;
                    fwInstanceId = listCaptureResultRequest.fwInstanceId;
                    taskId = listCaptureResultRequest.taskId;
                    type = listCaptureResultRequest.type;
                    ip = listCaptureResultRequest.ip;
                    enterpriseProjectId = listCaptureResultRequest.enterpriseProjectId;
                } else {
                    projectId = listCaptureResultRequest['project_id'];
                    fwInstanceId = listCaptureResultRequest['fw_instance_id'];
                    taskId = listCaptureResultRequest['task_id'];
                    type = listCaptureResultRequest['type'];
                    ip = listCaptureResultRequest['ip'];
                    enterpriseProjectId = listCaptureResultRequest['enterprise_project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listCaptureResult.');
            }
            if (fwInstanceId === null || fwInstanceId === undefined) {
                throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling listCaptureResult.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (taskId === null || taskId === undefined) {
                throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling listCaptureResult.');
            }
            if (taskId !== null && taskId !== undefined) {
                localVarQueryParameter['task_id'] = taskId;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (ip !== null && ip !== undefined) {
                localVarQueryParameter['ip'] = ip;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询抓包任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCaptureTask(listCaptureTaskRequest?: ListCaptureTaskRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/capture-task",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let fwInstanceId;
            
            let limit;
            
            let offset;
            
            let enterpriseProjectId;

            if (listCaptureTaskRequest !== null && listCaptureTaskRequest !== undefined) {
                if (listCaptureTaskRequest instanceof ListCaptureTaskRequest) {
                    projectId = listCaptureTaskRequest.projectId;
                    fwInstanceId = listCaptureTaskRequest.fwInstanceId;
                    limit = listCaptureTaskRequest.limit;
                    offset = listCaptureTaskRequest.offset;
                    enterpriseProjectId = listCaptureTaskRequest.enterpriseProjectId;
                } else {
                    projectId = listCaptureTaskRequest['project_id'];
                    fwInstanceId = listCaptureTaskRequest['fw_instance_id'];
                    limit = listCaptureTaskRequest['limit'];
                    offset = listCaptureTaskRequest['offset'];
                    enterpriseProjectId = listCaptureTaskRequest['enterprise_project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listCaptureTask.');
            }
            if (fwInstanceId === null || fwInstanceId === undefined) {
                throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling listCaptureTask.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listCaptureTask.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listCaptureTask.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询dns服务器列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDnsServers(listDnsServersRequest?: ListDnsServersRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dns/servers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let limit;
            
            let offset;
            
            let fwInstanceId;
            
            let enterpriseProjectId;

            if (listDnsServersRequest !== null && listDnsServersRequest !== undefined) {
                if (listDnsServersRequest instanceof ListDnsServersRequest) {
                    projectId = listDnsServersRequest.projectId;
                    limit = listDnsServersRequest.limit;
                    offset = listDnsServersRequest.offset;
                    fwInstanceId = listDnsServersRequest.fwInstanceId;
                    enterpriseProjectId = listDnsServersRequest.enterpriseProjectId;
                } else {
                    projectId = listDnsServersRequest['project_id'];
                    limit = listDnsServersRequest['limit'];
                    offset = listDnsServersRequest['offset'];
                    fwInstanceId = listDnsServersRequest['fw_instance_id'];
                    enterpriseProjectId = listDnsServersRequest['enterprise_project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listDnsServers.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 测试域名有效性
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDomainParseDetail(listDomainParseDetailRequest?: ListDomainParseDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/domain/parse/{domain_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let domainName;
            
            let enterpriseProjectId;
            
            let fwInstanceId;
            
            let addressType;

            if (listDomainParseDetailRequest !== null && listDomainParseDetailRequest !== undefined) {
                if (listDomainParseDetailRequest instanceof ListDomainParseDetailRequest) {
                    projectId = listDomainParseDetailRequest.projectId;
                    domainName = listDomainParseDetailRequest.domainName;
                    enterpriseProjectId = listDomainParseDetailRequest.enterpriseProjectId;
                    fwInstanceId = listDomainParseDetailRequest.fwInstanceId;
                    addressType = listDomainParseDetailRequest.addressType;
                } else {
                    projectId = listDomainParseDetailRequest['project_id'];
                    domainName = listDomainParseDetailRequest['domain_name'];
                    enterpriseProjectId = listDomainParseDetailRequest['enterprise_project_id'];
                    fwInstanceId = listDomainParseDetailRequest['fw_instance_id'];
                    addressType = listDomainParseDetailRequest['address_type'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listDomainParseDetail.');
            }
            if (domainName === null || domainName === undefined) {
            throw new RequiredError('domainName','Required parameter domainName was null or undefined when calling listDomainParseDetail.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (addressType !== null && addressType !== undefined) {
                localVarQueryParameter['address_type'] = addressType;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'domain_name': domainName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取域名地址解析结果
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDomainParseIp(listDomainParseIpRequest?: ListDomainParseIpRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/domain/parse-ip-list/{domain_address_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainAddressId;
            
            let domainSetId;
            
            let projectId;
            
            let fwInstanceId;
            
            let addressType;
            
            let enterpriseProjectId;

            if (listDomainParseIpRequest !== null && listDomainParseIpRequest !== undefined) {
                if (listDomainParseIpRequest instanceof ListDomainParseIpRequest) {
                    domainAddressId = listDomainParseIpRequest.domainAddressId;
                    domainSetId = listDomainParseIpRequest.domainSetId;
                    projectId = listDomainParseIpRequest.projectId;
                    fwInstanceId = listDomainParseIpRequest.fwInstanceId;
                    addressType = listDomainParseIpRequest.addressType;
                    enterpriseProjectId = listDomainParseIpRequest.enterpriseProjectId;
                } else {
                    domainAddressId = listDomainParseIpRequest['domain_address_id'];
                    domainSetId = listDomainParseIpRequest['domain_set_id'];
                    projectId = listDomainParseIpRequest['project_id'];
                    fwInstanceId = listDomainParseIpRequest['fw_instance_id'];
                    addressType = listDomainParseIpRequest['address_type'];
                    enterpriseProjectId = listDomainParseIpRequest['enterprise_project_id'];
                }
            }

        
            if (domainAddressId === null || domainAddressId === undefined) {
            throw new RequiredError('domainAddressId','Required parameter domainAddressId was null or undefined when calling listDomainParseIp.');
            }
            if (domainSetId === null || domainSetId === undefined) {
                throw new RequiredError('domainSetId','Required parameter domainSetId was null or undefined when calling listDomainParseIp.');
            }
            if (domainSetId !== null && domainSetId !== undefined) {
                localVarQueryParameter['domain_set_id'] = domainSetId;
            }
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listDomainParseIp.');
            }
            if (fwInstanceId === null || fwInstanceId === undefined) {
                throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling listDomainParseIp.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (addressType !== null && addressType !== undefined) {
                localVarQueryParameter['address_type'] = addressType;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'domain_address_id': domainAddressId,'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询域名组列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDomainSets(listDomainSetsRequest?: ListDomainSetsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/domain-sets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let fwInstanceId;
            
            let limit;
            
            let offset;
            
            let objectId;
            
            let enterpriseProjectId;
            
            let keyWord;
            
            let domainSetType;
            
            let configStatus;

            if (listDomainSetsRequest !== null && listDomainSetsRequest !== undefined) {
                if (listDomainSetsRequest instanceof ListDomainSetsRequest) {
                    projectId = listDomainSetsRequest.projectId;
                    fwInstanceId = listDomainSetsRequest.fwInstanceId;
                    limit = listDomainSetsRequest.limit;
                    offset = listDomainSetsRequest.offset;
                    objectId = listDomainSetsRequest.objectId;
                    enterpriseProjectId = listDomainSetsRequest.enterpriseProjectId;
                    keyWord = listDomainSetsRequest.keyWord;
                    domainSetType = listDomainSetsRequest.domainSetType;
                    configStatus = listDomainSetsRequest.configStatus;
                } else {
                    projectId = listDomainSetsRequest['project_id'];
                    fwInstanceId = listDomainSetsRequest['fw_instance_id'];
                    limit = listDomainSetsRequest['limit'];
                    offset = listDomainSetsRequest['offset'];
                    objectId = listDomainSetsRequest['object_id'];
                    enterpriseProjectId = listDomainSetsRequest['enterprise_project_id'];
                    keyWord = listDomainSetsRequest['key_word'];
                    domainSetType = listDomainSetsRequest['domain_set_type'];
                    configStatus = listDomainSetsRequest['config_status'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listDomainSets.');
            }
            if (fwInstanceId === null || fwInstanceId === undefined) {
                throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling listDomainSets.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listDomainSets.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listDomainSets.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (objectId === null || objectId === undefined) {
                throw new RequiredError('objectId','Required parameter objectId was null or undefined when calling listDomainSets.');
            }
            if (objectId !== null && objectId !== undefined) {
                localVarQueryParameter['object_id'] = objectId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (keyWord !== null && keyWord !== undefined) {
                localVarQueryParameter['key_word'] = keyWord;
            }
            if (domainSetType !== null && domainSetType !== undefined) {
                localVarQueryParameter['domain_set_type'] = domainSetType;
            }
            if (configStatus !== null && configStatus !== undefined) {
                localVarQueryParameter['config_status'] = configStatus;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取域名组下域名列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDomains(listDomainsRequest?: ListDomainsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/domain-set/domains/{domain_set_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let domainSetId;
            
            let fwInstanceId;
            
            let limit;
            
            let offset;
            
            let enterpriseProjectId;
            
            let domainName;
            
            let objectId;

            if (listDomainsRequest !== null && listDomainsRequest !== undefined) {
                if (listDomainsRequest instanceof ListDomainsRequest) {
                    projectId = listDomainsRequest.projectId;
                    domainSetId = listDomainsRequest.domainSetId;
                    fwInstanceId = listDomainsRequest.fwInstanceId;
                    limit = listDomainsRequest.limit;
                    offset = listDomainsRequest.offset;
                    enterpriseProjectId = listDomainsRequest.enterpriseProjectId;
                    domainName = listDomainsRequest.domainName;
                    objectId = listDomainsRequest.objectId;
                } else {
                    projectId = listDomainsRequest['project_id'];
                    domainSetId = listDomainsRequest['domain_set_id'];
                    fwInstanceId = listDomainsRequest['fw_instance_id'];
                    limit = listDomainsRequest['limit'];
                    offset = listDomainsRequest['offset'];
                    enterpriseProjectId = listDomainsRequest['enterprise_project_id'];
                    domainName = listDomainsRequest['domain_name'];
                    objectId = listDomainsRequest['object_Id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listDomains.');
            }
            if (domainSetId === null || domainSetId === undefined) {
            throw new RequiredError('domainSetId','Required parameter domainSetId was null or undefined when calling listDomains.');
            }
            if (fwInstanceId === null || fwInstanceId === undefined) {
                throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling listDomains.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listDomains.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listDomains.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (domainName !== null && domainName !== undefined) {
                localVarQueryParameter['domain_name'] = domainName;
            }
            if (objectId !== null && objectId !== undefined) {
                localVarQueryParameter['object_Id'] = objectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'domain_set_id': domainSetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取东西向防火墙信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEastWestFirewall(listEastWestFirewallRequest?: ListEastWestFirewallRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/firewall/east-west",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let limit;
            
            let offset;
            
            let fwInstanceId;
            
            let enterpriseProjectId;

            if (listEastWestFirewallRequest !== null && listEastWestFirewallRequest !== undefined) {
                if (listEastWestFirewallRequest instanceof ListEastWestFirewallRequest) {
                    projectId = listEastWestFirewallRequest.projectId;
                    limit = listEastWestFirewallRequest.limit;
                    offset = listEastWestFirewallRequest.offset;
                    fwInstanceId = listEastWestFirewallRequest.fwInstanceId;
                    enterpriseProjectId = listEastWestFirewallRequest.enterpriseProjectId;
                } else {
                    projectId = listEastWestFirewallRequest['project_id'];
                    limit = listEastWestFirewallRequest['limit'];
                    offset = listEastWestFirewallRequest['offset'];
                    fwInstanceId = listEastWestFirewallRequest['fw_instance_id'];
                    enterpriseProjectId = listEastWestFirewallRequest['enterprise_project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listEastWestFirewall.');
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listEastWestFirewall.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listEastWestFirewall.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (fwInstanceId === null || fwInstanceId === undefined) {
                throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling listEastWestFirewall.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询防火墙实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFirewallDetail(listFirewallDetailRequest?: ListFirewallDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/firewall/exist",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let offset;
            
            let limit;
            
            let serviceType;
            
            let enterpriseProjectId;
            
            let fwInstanceId;
            
            let name;

            if (listFirewallDetailRequest !== null && listFirewallDetailRequest !== undefined) {
                if (listFirewallDetailRequest instanceof ListFirewallDetailRequest) {
                    projectId = listFirewallDetailRequest.projectId;
                    offset = listFirewallDetailRequest.offset;
                    limit = listFirewallDetailRequest.limit;
                    serviceType = listFirewallDetailRequest.serviceType;
                    enterpriseProjectId = listFirewallDetailRequest.enterpriseProjectId;
                    fwInstanceId = listFirewallDetailRequest.fwInstanceId;
                    name = listFirewallDetailRequest.name;
                } else {
                    projectId = listFirewallDetailRequest['project_id'];
                    offset = listFirewallDetailRequest['offset'];
                    limit = listFirewallDetailRequest['limit'];
                    serviceType = listFirewallDetailRequest['service_type'];
                    enterpriseProjectId = listFirewallDetailRequest['enterprise_project_id'];
                    fwInstanceId = listFirewallDetailRequest['fw_instance_id'];
                    name = listFirewallDetailRequest['name'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listFirewallDetail.');
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listFirewallDetail.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listFirewallDetail.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (serviceType === null || serviceType === undefined) {
                throw new RequiredError('serviceType','Required parameter serviceType was null or undefined when calling listFirewallDetail.');
            }
            if (serviceType !== null && serviceType !== undefined) {
                localVarQueryParameter['service_type'] = serviceType;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询防火墙列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFirewallList(listFirewallListRequest?: ListFirewallListRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/firewalls/list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let enterpriseProjectId;

            if (listFirewallListRequest !== null && listFirewallListRequest !== undefined) {
                if (listFirewallListRequest instanceof ListFirewallListRequest) {
                    projectId = listFirewallListRequest.projectId;
                    body = listFirewallListRequest.body
                    enterpriseProjectId = listFirewallListRequest.enterpriseProjectId;
                } else {
                    projectId = listFirewallListRequest['project_id'];
                    body = listFirewallListRequest['body'];
                    enterpriseProjectId = listFirewallListRequest['enterprise_project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listFirewallList.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询流日志
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFlowLogs(listFlowLogsRequest?: ListFlowLogsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cfw/logs/flow",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let fwInstanceId;
            
            let startTime;
            
            let endTime;
            
            let limit;
            
            let direction;
            
            let logType;
            
            let srcIp;
            
            let srcPort;
            
            let dstIp;
            
            let dstPort;
            
            let protocol;
            
            let app;
            
            let logId;
            
            let nextDate;
            
            let offset;
            
            let enterpriseProjectId;
            
            let dstHost;
            
            let srcRegionName;
            
            let dstRegionName;
            
            let srcProvinceName;
            
            let dstProvinceName;
            
            let srcCityName;
            
            let dstCityName;

            if (listFlowLogsRequest !== null && listFlowLogsRequest !== undefined) {
                if (listFlowLogsRequest instanceof ListFlowLogsRequest) {
                    projectId = listFlowLogsRequest.projectId;
                    fwInstanceId = listFlowLogsRequest.fwInstanceId;
                    startTime = listFlowLogsRequest.startTime;
                    endTime = listFlowLogsRequest.endTime;
                    limit = listFlowLogsRequest.limit;
                    direction = listFlowLogsRequest.direction;
                    logType = listFlowLogsRequest.logType;
                    srcIp = listFlowLogsRequest.srcIp;
                    srcPort = listFlowLogsRequest.srcPort;
                    dstIp = listFlowLogsRequest.dstIp;
                    dstPort = listFlowLogsRequest.dstPort;
                    protocol = listFlowLogsRequest.protocol;
                    app = listFlowLogsRequest.app;
                    logId = listFlowLogsRequest.logId;
                    nextDate = listFlowLogsRequest.nextDate;
                    offset = listFlowLogsRequest.offset;
                    enterpriseProjectId = listFlowLogsRequest.enterpriseProjectId;
                    dstHost = listFlowLogsRequest.dstHost;
                    srcRegionName = listFlowLogsRequest.srcRegionName;
                    dstRegionName = listFlowLogsRequest.dstRegionName;
                    srcProvinceName = listFlowLogsRequest.srcProvinceName;
                    dstProvinceName = listFlowLogsRequest.dstProvinceName;
                    srcCityName = listFlowLogsRequest.srcCityName;
                    dstCityName = listFlowLogsRequest.dstCityName;
                } else {
                    projectId = listFlowLogsRequest['project_id'];
                    fwInstanceId = listFlowLogsRequest['fw_instance_id'];
                    startTime = listFlowLogsRequest['start_time'];
                    endTime = listFlowLogsRequest['end_time'];
                    limit = listFlowLogsRequest['limit'];
                    direction = listFlowLogsRequest['direction'];
                    logType = listFlowLogsRequest['log_type'];
                    srcIp = listFlowLogsRequest['src_ip'];
                    srcPort = listFlowLogsRequest['src_port'];
                    dstIp = listFlowLogsRequest['dst_ip'];
                    dstPort = listFlowLogsRequest['dst_port'];
                    protocol = listFlowLogsRequest['protocol'];
                    app = listFlowLogsRequest['app'];
                    logId = listFlowLogsRequest['log_id'];
                    nextDate = listFlowLogsRequest['next_date'];
                    offset = listFlowLogsRequest['offset'];
                    enterpriseProjectId = listFlowLogsRequest['enterprise_project_id'];
                    dstHost = listFlowLogsRequest['dst_host'];
                    srcRegionName = listFlowLogsRequest['src_region_name'];
                    dstRegionName = listFlowLogsRequest['dst_region_name'];
                    srcProvinceName = listFlowLogsRequest['src_province_name'];
                    dstProvinceName = listFlowLogsRequest['dst_province_name'];
                    srcCityName = listFlowLogsRequest['src_city_name'];
                    dstCityName = listFlowLogsRequest['dst_city_name'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listFlowLogs.');
            }
            if (fwInstanceId === null || fwInstanceId === undefined) {
                throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling listFlowLogs.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listFlowLogs.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listFlowLogs.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listFlowLogs.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (direction !== null && direction !== undefined) {
                localVarQueryParameter['direction'] = direction;
            }
            if (logType !== null && logType !== undefined) {
                localVarQueryParameter['log_type'] = logType;
            }
            if (srcIp !== null && srcIp !== undefined) {
                localVarQueryParameter['src_ip'] = srcIp;
            }
            if (srcPort !== null && srcPort !== undefined) {
                localVarQueryParameter['src_port'] = srcPort;
            }
            if (dstIp !== null && dstIp !== undefined) {
                localVarQueryParameter['dst_ip'] = dstIp;
            }
            if (dstPort !== null && dstPort !== undefined) {
                localVarQueryParameter['dst_port'] = dstPort;
            }
            if (protocol !== null && protocol !== undefined) {
                localVarQueryParameter['protocol'] = protocol;
            }
            if (app !== null && app !== undefined) {
                localVarQueryParameter['app'] = app;
            }
            if (logId !== null && logId !== undefined) {
                localVarQueryParameter['log_id'] = logId;
            }
            if (nextDate !== null && nextDate !== undefined) {
                localVarQueryParameter['next_date'] = nextDate;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (dstHost !== null && dstHost !== undefined) {
                localVarQueryParameter['dst_host'] = dstHost;
            }
            if (srcRegionName !== null && srcRegionName !== undefined) {
                localVarQueryParameter['src_region_name'] = srcRegionName;
            }
            if (dstRegionName !== null && dstRegionName !== undefined) {
                localVarQueryParameter['dst_region_name'] = dstRegionName;
            }
            if (srcProvinceName !== null && srcProvinceName !== undefined) {
                localVarQueryParameter['src_province_name'] = srcProvinceName;
            }
            if (dstProvinceName !== null && dstProvinceName !== undefined) {
                localVarQueryParameter['dst_province_name'] = dstProvinceName;
            }
            if (srcCityName !== null && srcCityName !== undefined) {
                localVarQueryParameter['src_city_name'] = srcCityName;
            }
            if (dstCityName !== null && dstCityName !== undefined) {
                localVarQueryParameter['dst_city_name'] = dstCityName;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取防火墙实例中已经导入的IP黑名单信息，标准版防火墙只会显示一条EIP的记录，专业版防火墙可能显示EIP、NAT或EIP和NAT的记录，根据导入的情况确定。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listIpBlacklist(listIpBlacklistRequest?: ListIpBlacklistRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/ptf/ip-blacklist",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let fwInstanceId;
            
            let limit;
            
            let offset;

            if (listIpBlacklistRequest !== null && listIpBlacklistRequest !== undefined) {
                if (listIpBlacklistRequest instanceof ListIpBlacklistRequest) {
                    projectId = listIpBlacklistRequest.projectId;
                    fwInstanceId = listIpBlacklistRequest.fwInstanceId;
                    limit = listIpBlacklistRequest.limit;
                    offset = listIpBlacklistRequest.offset;
                } else {
                    projectId = listIpBlacklistRequest['project_id'];
                    fwInstanceId = listIpBlacklistRequest['fw_instance_id'];
                    limit = listIpBlacklistRequest['limit'];
                    offset = listIpBlacklistRequest['offset'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listIpBlacklist.');
            }
            if (fwInstanceId === null || fwInstanceId === undefined) {
                throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling listIpBlacklist.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listIpBlacklist.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listIpBlacklist.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 流量过滤功能可以打开或者关闭，通过此接口可以获取当前的开关信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listIpBlacklistSwitch(listIpBlacklistSwitchRequest?: ListIpBlacklistSwitchRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/ptf/ip-blacklist/switch",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let fwInstanceId;

            if (listIpBlacklistSwitchRequest !== null && listIpBlacklistSwitchRequest !== undefined) {
                if (listIpBlacklistSwitchRequest instanceof ListIpBlacklistSwitchRequest) {
                    projectId = listIpBlacklistSwitchRequest.projectId;
                    fwInstanceId = listIpBlacklistSwitchRequest.fwInstanceId;
                } else {
                    projectId = listIpBlacklistSwitchRequest['project_id'];
                    fwInstanceId = listIpBlacklistSwitchRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listIpBlacklistSwitch.');
            }
            if (fwInstanceId === null || fwInstanceId === undefined) {
                throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling listIpBlacklistSwitch.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取CFW任务执行状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listJob(listJobRequest?: ListJobRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;
            
            let jobId;

            if (listJobRequest !== null && listJobRequest !== undefined) {
                if (listJobRequest instanceof ListJobRequest) {
                    projectId = listJobRequest.projectId;
                    jobId = listJobRequest.jobId;
                } else {
                    projectId = listJobRequest['project_id'];
                    jobId = listJobRequest['job_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listJob.');
            }
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling listJob.');
            }

            options.pathParams = { 'project_id': projectId,'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取日志配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLogConfig(listLogConfigRequest?: ListLogConfigRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cfw/logs/configuration",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let fwInstanceId;
            
            let enterpriseProjectId;

            if (listLogConfigRequest !== null && listLogConfigRequest !== undefined) {
                if (listLogConfigRequest instanceof ListLogConfigRequest) {
                    projectId = listLogConfigRequest.projectId;
                    fwInstanceId = listLogConfigRequest.fwInstanceId;
                    enterpriseProjectId = listLogConfigRequest.enterpriseProjectId;
                } else {
                    projectId = listLogConfigRequest['project_id'];
                    fwInstanceId = listLogConfigRequest['fw_instance_id'];
                    enterpriseProjectId = listLogConfigRequest['enterprise_project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listLogConfig.');
            }
            if (fwInstanceId === null || fwInstanceId === undefined) {
                throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling listLogConfig.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询标签信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProjectTags(listProjectTagsRequest?: ListProjectTagsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/cfw-cfw/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let projectId;
            
            let enterpriseProjectId;

            if (listProjectTagsRequest !== null && listProjectTagsRequest !== undefined) {
                if (listProjectTagsRequest instanceof ListProjectTagsRequest) {
                    limit = listProjectTagsRequest.limit;
                    offset = listProjectTagsRequest.offset;
                    projectId = listProjectTagsRequest.projectId;
                    enterpriseProjectId = listProjectTagsRequest.enterpriseProjectId;
                } else {
                    limit = listProjectTagsRequest['limit'];
                    offset = listProjectTagsRequest['offset'];
                    projectId = listProjectTagsRequest['project_id'];
                    enterpriseProjectId = listProjectTagsRequest['enterprise_project_id'];
                }
            }

        
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listProjectTags.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listProjectTags.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listProjectTags.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询防护vpc信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProtectedVpcs(listProtectedVpcsRequest?: ListProtectedVpcsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/vpcs/protection",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let objectId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (listProtectedVpcsRequest !== null && listProtectedVpcsRequest !== undefined) {
                if (listProtectedVpcsRequest instanceof ListProtectedVpcsRequest) {
                    projectId = listProtectedVpcsRequest.projectId;
                    objectId = listProtectedVpcsRequest.objectId;
                    enterpriseProjectId = listProtectedVpcsRequest.enterpriseProjectId;
                    fwInstanceId = listProtectedVpcsRequest.fwInstanceId;
                } else {
                    projectId = listProtectedVpcsRequest['project_id'];
                    objectId = listProtectedVpcsRequest['object_id'];
                    enterpriseProjectId = listProtectedVpcsRequest['enterprise_project_id'];
                    fwInstanceId = listProtectedVpcsRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listProtectedVpcs.');
            }
            if (objectId === null || objectId === undefined) {
                throw new RequiredError('objectId','Required parameter objectId was null or undefined when calling listProtectedVpcs.');
            }
            if (objectId !== null && objectId !== undefined) {
                localVarQueryParameter['object_id'] = objectId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询资源标签信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listResourceTags(listResourceTagsRequest?: ListResourceTagsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/cfw-cfw/{fw_instance_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let fwInstanceId;
            
            let projectId;
            
            let enterpriseProjectId;

            if (listResourceTagsRequest !== null && listResourceTagsRequest !== undefined) {
                if (listResourceTagsRequest instanceof ListResourceTagsRequest) {
                    fwInstanceId = listResourceTagsRequest.fwInstanceId;
                    projectId = listResourceTagsRequest.projectId;
                    enterpriseProjectId = listResourceTagsRequest.enterpriseProjectId;
                } else {
                    fwInstanceId = listResourceTagsRequest['fw_instance_id'];
                    projectId = listResourceTagsRequest['project_id'];
                    enterpriseProjectId = listResourceTagsRequest['enterprise_project_id'];
                }
            }

        
            if (fwInstanceId === null || fwInstanceId === undefined) {
            throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling listResourceTags.');
            }
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listResourceTags.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'fw_instance_id': fwInstanceId,'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询服务组成员列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listServiceItems(listServiceItemsRequest?: ListServiceItemsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/service-items",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let setId;
            
            let limit;
            
            let offset;
            
            let keyWord;
            
            let enterpriseProjectId;
            
            let fwInstanceId;
            
            let queryServiceSetType;

            if (listServiceItemsRequest !== null && listServiceItemsRequest !== undefined) {
                if (listServiceItemsRequest instanceof ListServiceItemsRequest) {
                    projectId = listServiceItemsRequest.projectId;
                    setId = listServiceItemsRequest.setId;
                    limit = listServiceItemsRequest.limit;
                    offset = listServiceItemsRequest.offset;
                    keyWord = listServiceItemsRequest.keyWord;
                    enterpriseProjectId = listServiceItemsRequest.enterpriseProjectId;
                    fwInstanceId = listServiceItemsRequest.fwInstanceId;
                    queryServiceSetType = listServiceItemsRequest.queryServiceSetType;
                } else {
                    projectId = listServiceItemsRequest['project_id'];
                    setId = listServiceItemsRequest['set_id'];
                    limit = listServiceItemsRequest['limit'];
                    offset = listServiceItemsRequest['offset'];
                    keyWord = listServiceItemsRequest['key_word'];
                    enterpriseProjectId = listServiceItemsRequest['enterprise_project_id'];
                    fwInstanceId = listServiceItemsRequest['fw_instance_id'];
                    queryServiceSetType = listServiceItemsRequest['query_service_set_type'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listServiceItems.');
            }
            if (setId === null || setId === undefined) {
                throw new RequiredError('setId','Required parameter setId was null or undefined when calling listServiceItems.');
            }
            if (setId !== null && setId !== undefined) {
                localVarQueryParameter['set_id'] = setId;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listServiceItems.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listServiceItems.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (keyWord !== null && keyWord !== undefined) {
                localVarQueryParameter['key_word'] = keyWord;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (queryServiceSetType !== null && queryServiceSetType !== undefined) {
                localVarQueryParameter['query_service_set_type'] = queryServiceSetType;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询服务组细节
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listServiceSetDetail(listServiceSetDetailRequest?: ListServiceSetDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/service-sets/{set_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let setId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;
            
            let queryServiceSetType;

            if (listServiceSetDetailRequest !== null && listServiceSetDetailRequest !== undefined) {
                if (listServiceSetDetailRequest instanceof ListServiceSetDetailRequest) {
                    projectId = listServiceSetDetailRequest.projectId;
                    setId = listServiceSetDetailRequest.setId;
                    enterpriseProjectId = listServiceSetDetailRequest.enterpriseProjectId;
                    fwInstanceId = listServiceSetDetailRequest.fwInstanceId;
                    queryServiceSetType = listServiceSetDetailRequest.queryServiceSetType;
                } else {
                    projectId = listServiceSetDetailRequest['project_id'];
                    setId = listServiceSetDetailRequest['set_id'];
                    enterpriseProjectId = listServiceSetDetailRequest['enterprise_project_id'];
                    fwInstanceId = listServiceSetDetailRequest['fw_instance_id'];
                    queryServiceSetType = listServiceSetDetailRequest['query_service_set_type'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listServiceSetDetail.');
            }
            if (setId === null || setId === undefined) {
            throw new RequiredError('setId','Required parameter setId was null or undefined when calling listServiceSetDetail.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (queryServiceSetType !== null && queryServiceSetType !== undefined) {
                localVarQueryParameter['query_service_set_type'] = queryServiceSetType;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'set_id': setId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取服务组列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listServiceSets(listServiceSetsRequest?: ListServiceSetsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/service-sets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let objectId;
            
            let limit;
            
            let offset;
            
            let keyWord;
            
            let enterpriseProjectId;
            
            let fwInstanceId;
            
            let queryServiceSetType;

            if (listServiceSetsRequest !== null && listServiceSetsRequest !== undefined) {
                if (listServiceSetsRequest instanceof ListServiceSetsRequest) {
                    projectId = listServiceSetsRequest.projectId;
                    objectId = listServiceSetsRequest.objectId;
                    limit = listServiceSetsRequest.limit;
                    offset = listServiceSetsRequest.offset;
                    keyWord = listServiceSetsRequest.keyWord;
                    enterpriseProjectId = listServiceSetsRequest.enterpriseProjectId;
                    fwInstanceId = listServiceSetsRequest.fwInstanceId;
                    queryServiceSetType = listServiceSetsRequest.queryServiceSetType;
                } else {
                    projectId = listServiceSetsRequest['project_id'];
                    objectId = listServiceSetsRequest['object_id'];
                    limit = listServiceSetsRequest['limit'];
                    offset = listServiceSetsRequest['offset'];
                    keyWord = listServiceSetsRequest['key_word'];
                    enterpriseProjectId = listServiceSetsRequest['enterprise_project_id'];
                    fwInstanceId = listServiceSetsRequest['fw_instance_id'];
                    queryServiceSetType = listServiceSetsRequest['query_service_set_type'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listServiceSets.');
            }
            if (objectId === null || objectId === undefined) {
                throw new RequiredError('objectId','Required parameter objectId was null or undefined when calling listServiceSets.');
            }
            if (objectId !== null && objectId !== undefined) {
                localVarQueryParameter['object_id'] = objectId;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listServiceSets.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listServiceSets.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (keyWord !== null && keyWord !== undefined) {
                localVarQueryParameter['key_word'] = keyWord;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (queryServiceSetType !== null && queryServiceSetType !== undefined) {
                localVarQueryParameter['query_service_set_type'] = queryServiceSetType;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用于流量过滤的IP黑名单导入失败后，调用此接口进行重试。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        retryIpBlacklist(retryIpBlacklistRequest?: RetryIpBlacklistRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/ptf/ip-blacklist/retry",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let fwInstanceId;
            
            let name;

            if (retryIpBlacklistRequest !== null && retryIpBlacklistRequest !== undefined) {
                if (retryIpBlacklistRequest instanceof RetryIpBlacklistRequest) {
                    projectId = retryIpBlacklistRequest.projectId;
                    fwInstanceId = retryIpBlacklistRequest.fwInstanceId;
                    name = retryIpBlacklistRequest.name;
                } else {
                    projectId = retryIpBlacklistRequest['project_id'];
                    fwInstanceId = retryIpBlacklistRequest['fw_instance_id'];
                    name = retryIpBlacklistRequest['name'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling retryIpBlacklist.');
            }
            if (fwInstanceId === null || fwInstanceId === undefined) {
                throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling retryIpBlacklist.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 保存资源标签接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        saveTags(saveTagsRequest?: SaveTagsRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/cfw-cfw/{fw_instance_id}/tags/save",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let fwInstanceId;
            
            let projectId;
            
            let enterpriseProjectId;

            if (saveTagsRequest !== null && saveTagsRequest !== undefined) {
                if (saveTagsRequest instanceof SaveTagsRequest) {
                    fwInstanceId = saveTagsRequest.fwInstanceId;
                    projectId = saveTagsRequest.projectId;
                    body = saveTagsRequest.body
                    enterpriseProjectId = saveTagsRequest.enterpriseProjectId;
                } else {
                    fwInstanceId = saveTagsRequest['fw_instance_id'];
                    projectId = saveTagsRequest['project_id'];
                    body = saveTagsRequest['body'];
                    enterpriseProjectId = saveTagsRequest['enterprise_project_id'];
                }
            }

        
            if (fwInstanceId === null || fwInstanceId === undefined) {
            throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling saveTags.');
            }
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling saveTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'fw_instance_id': fwInstanceId,'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取访问日志的TOP统计信息，如TOP命中规则等
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAccessTop(showAccessTopRequest?: ShowAccessTopRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cfw/logs/access-top",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let fwInstanceId;
            
            let item;
            
            let direction;
            
            let range;
            
            let startTime;
            
            let endTime;
            
            let vgwId;
            
            let logType;
            
            let ruleId;

            if (showAccessTopRequest !== null && showAccessTopRequest !== undefined) {
                if (showAccessTopRequest instanceof ShowAccessTopRequest) {
                    projectId = showAccessTopRequest.projectId;
                    fwInstanceId = showAccessTopRequest.fwInstanceId;
                    item = showAccessTopRequest.item;
                    direction = showAccessTopRequest.direction;
                    range = showAccessTopRequest.range;
                    startTime = showAccessTopRequest.startTime;
                    endTime = showAccessTopRequest.endTime;
                    vgwId = showAccessTopRequest.vgwId;
                    logType = showAccessTopRequest.logType;
                    ruleId = showAccessTopRequest.ruleId;
                } else {
                    projectId = showAccessTopRequest['project_id'];
                    fwInstanceId = showAccessTopRequest['fw_instance_id'];
                    item = showAccessTopRequest['item'];
                    direction = showAccessTopRequest['direction'];
                    range = showAccessTopRequest['range'];
                    startTime = showAccessTopRequest['start_time'];
                    endTime = showAccessTopRequest['end_time'];
                    vgwId = showAccessTopRequest['vgw_id'];
                    logType = showAccessTopRequest['log_type'];
                    ruleId = showAccessTopRequest['rule_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showAccessTop.');
            }
            if (fwInstanceId === null || fwInstanceId === undefined) {
                throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling showAccessTop.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (item === null || item === undefined) {
                throw new RequiredError('item','Required parameter item was null or undefined when calling showAccessTop.');
            }
            if (item !== null && item !== undefined) {
                localVarQueryParameter['item'] = item;
            }
            if (direction !== null && direction !== undefined) {
                localVarQueryParameter['direction'] = direction;
            }
            if (range !== null && range !== undefined) {
                localVarQueryParameter['range'] = range;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (vgwId !== null && vgwId !== undefined) {
                localVarQueryParameter['vgw_id'] = vgwId;
            }
            if (logType !== null && logType !== undefined) {
                localVarQueryParameter['log_type'] = logType;
            }
            if (ruleId !== null && ruleId !== undefined) {
                localVarQueryParameter['rule_id'] = ruleId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取告警配置信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAlarmConfig(showAlarmConfigRequest?: ShowAlarmConfigRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cfw/alarm/config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let fwInstanceId;
            
            let projectId;
            
            let enterpriseProjectId;

            if (showAlarmConfigRequest !== null && showAlarmConfigRequest !== undefined) {
                if (showAlarmConfigRequest instanceof ShowAlarmConfigRequest) {
                    fwInstanceId = showAlarmConfigRequest.fwInstanceId;
                    projectId = showAlarmConfigRequest.projectId;
                    enterpriseProjectId = showAlarmConfigRequest.enterpriseProjectId;
                } else {
                    fwInstanceId = showAlarmConfigRequest['fw_instance_id'];
                    projectId = showAlarmConfigRequest['project_id'];
                    enterpriseProjectId = showAlarmConfigRequest['enterprise_project_id'];
                }
            }

        
            if (fwInstanceId === null || fwInstanceId === undefined) {
                throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling showAlarmConfig.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showAlarmConfig.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取防火墙反病毒规则信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAntiVirusRule(showAntiVirusRuleRequest?: ShowAntiVirusRuleRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/anti-virus/rule",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let objectId;
            
            let engineType;
            
            let limit;
            
            let offset;
            
            let enterpriseProjectId;

            if (showAntiVirusRuleRequest !== null && showAntiVirusRuleRequest !== undefined) {
                if (showAntiVirusRuleRequest instanceof ShowAntiVirusRuleRequest) {
                    projectId = showAntiVirusRuleRequest.projectId;
                    objectId = showAntiVirusRuleRequest.objectId;
                    engineType = showAntiVirusRuleRequest.engineType;
                    limit = showAntiVirusRuleRequest.limit;
                    offset = showAntiVirusRuleRequest.offset;
                    enterpriseProjectId = showAntiVirusRuleRequest.enterpriseProjectId;
                } else {
                    projectId = showAntiVirusRuleRequest['project_id'];
                    objectId = showAntiVirusRuleRequest['object_id'];
                    engineType = showAntiVirusRuleRequest['engine_type'];
                    limit = showAntiVirusRuleRequest['limit'];
                    offset = showAntiVirusRuleRequest['offset'];
                    enterpriseProjectId = showAntiVirusRuleRequest['enterprise_project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showAntiVirusRule.');
            }
            if (objectId === null || objectId === undefined) {
                throw new RequiredError('objectId','Required parameter objectId was null or undefined when calling showAntiVirusRule.');
            }
            if (objectId !== null && objectId !== undefined) {
                localVarQueryParameter['object_id'] = objectId;
            }
            if (engineType === null || engineType === undefined) {
                throw new RequiredError('engineType','Required parameter engineType was null or undefined when calling showAntiVirusRule.');
            }
            if (engineType !== null && engineType !== undefined) {
                localVarQueryParameter['engine_type'] = engineType;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling showAntiVirusRule.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling showAntiVirusRule.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看反病毒开关
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAntiVirusSwitch(showAntiVirusSwitchRequest?: ShowAntiVirusSwitchRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/anti-virus/switch",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let objectId;
            
            let enterpriseProjectId;

            if (showAntiVirusSwitchRequest !== null && showAntiVirusSwitchRequest !== undefined) {
                if (showAntiVirusSwitchRequest instanceof ShowAntiVirusSwitchRequest) {
                    projectId = showAntiVirusSwitchRequest.projectId;
                    objectId = showAntiVirusSwitchRequest.objectId;
                    enterpriseProjectId = showAntiVirusSwitchRequest.enterpriseProjectId;
                } else {
                    projectId = showAntiVirusSwitchRequest['project_id'];
                    objectId = showAntiVirusSwitchRequest['object_id'];
                    enterpriseProjectId = showAntiVirusSwitchRequest['enterprise_project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showAntiVirusSwitch.');
            }
            if (objectId === null || objectId === undefined) {
                throw new RequiredError('objectId','Required parameter objectId was null or undefined when calling showAntiVirusSwitch.');
            }
            if (objectId !== null && objectId !== undefined) {
                localVarQueryParameter['object_id'] = objectId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询攻击概览
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAttackTotal(showAttackTotalRequest?: ShowAttackTotalRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cfw/logs/total-attack",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let fwInstanceId;
            
            let logType;
            
            let range;
            
            let startTime;
            
            let endTime;
            
            let vgwId;

            if (showAttackTotalRequest !== null && showAttackTotalRequest !== undefined) {
                if (showAttackTotalRequest instanceof ShowAttackTotalRequest) {
                    projectId = showAttackTotalRequest.projectId;
                    fwInstanceId = showAttackTotalRequest.fwInstanceId;
                    logType = showAttackTotalRequest.logType;
                    range = showAttackTotalRequest.range;
                    startTime = showAttackTotalRequest.startTime;
                    endTime = showAttackTotalRequest.endTime;
                    vgwId = showAttackTotalRequest.vgwId;
                } else {
                    projectId = showAttackTotalRequest['project_id'];
                    fwInstanceId = showAttackTotalRequest['fw_instance_id'];
                    logType = showAttackTotalRequest['log_type'];
                    range = showAttackTotalRequest['range'];
                    startTime = showAttackTotalRequest['start_time'];
                    endTime = showAttackTotalRequest['end_time'];
                    vgwId = showAttackTotalRequest['vgw_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showAttackTotal.');
            }
            if (fwInstanceId === null || fwInstanceId === undefined) {
                throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling showAttackTotal.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (logType === null || logType === undefined) {
                throw new RequiredError('logType','Required parameter logType was null or undefined when calling showAttackTotal.');
            }
            if (logType !== null && logType !== undefined) {
                localVarQueryParameter['log_type'] = logType;
            }
            if (range !== null && range !== undefined) {
                localVarQueryParameter['range'] = range;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (vgwId !== null && vgwId !== undefined) {
                localVarQueryParameter['vgw_id'] = vgwId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询攻击趋势
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAttackTrend(showAttackTrendRequest?: ShowAttackTrendRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cfw/logs/trend-attack",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let fwInstanceId;
            
            let logType;
            
            let range;
            
            let startTime;
            
            let endTime;
            
            let vgwId;

            if (showAttackTrendRequest !== null && showAttackTrendRequest !== undefined) {
                if (showAttackTrendRequest instanceof ShowAttackTrendRequest) {
                    projectId = showAttackTrendRequest.projectId;
                    fwInstanceId = showAttackTrendRequest.fwInstanceId;
                    logType = showAttackTrendRequest.logType;
                    range = showAttackTrendRequest.range;
                    startTime = showAttackTrendRequest.startTime;
                    endTime = showAttackTrendRequest.endTime;
                    vgwId = showAttackTrendRequest.vgwId;
                } else {
                    projectId = showAttackTrendRequest['project_id'];
                    fwInstanceId = showAttackTrendRequest['fw_instance_id'];
                    logType = showAttackTrendRequest['log_type'];
                    range = showAttackTrendRequest['range'];
                    startTime = showAttackTrendRequest['start_time'];
                    endTime = showAttackTrendRequest['end_time'];
                    vgwId = showAttackTrendRequest['vgw_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showAttackTrend.');
            }
            if (fwInstanceId === null || fwInstanceId === undefined) {
                throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling showAttackTrend.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (logType === null || logType === undefined) {
                throw new RequiredError('logType','Required parameter logType was null or undefined when calling showAttackTrend.');
            }
            if (logType !== null && logType !== undefined) {
                localVarQueryParameter['log_type'] = logType;
            }
            if (range !== null && range !== undefined) {
                localVarQueryParameter['range'] = range;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (vgwId !== null && vgwId !== undefined) {
                localVarQueryParameter['vgw_id'] = vgwId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看域名组详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDomainSetDetail(showDomainSetDetailRequest?: ShowDomainSetDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/domain-set/{domain_set_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let fwInstanceId;
            
            let domainSetId;
            
            let enterpriseProjectId;

            if (showDomainSetDetailRequest !== null && showDomainSetDetailRequest !== undefined) {
                if (showDomainSetDetailRequest instanceof ShowDomainSetDetailRequest) {
                    projectId = showDomainSetDetailRequest.projectId;
                    fwInstanceId = showDomainSetDetailRequest.fwInstanceId;
                    domainSetId = showDomainSetDetailRequest.domainSetId;
                    enterpriseProjectId = showDomainSetDetailRequest.enterpriseProjectId;
                } else {
                    projectId = showDomainSetDetailRequest['project_id'];
                    fwInstanceId = showDomainSetDetailRequest['fw_instance_id'];
                    domainSetId = showDomainSetDetailRequest['domain_set_id'];
                    enterpriseProjectId = showDomainSetDetailRequest['enterprise_project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showDomainSetDetail.');
            }
            if (fwInstanceId === null || fwInstanceId === undefined) {
                throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling showDomainSetDetail.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (domainSetId === null || domainSetId === undefined) {
            throw new RequiredError('domainSetId','Required parameter domainSetId was null or undefined when calling showDomainSetDetail.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'domain_set_id': domainSetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询流量趋势，包括南北向、EIP、东西向的流量趋势
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTrafficTrend(showTrafficTrendRequest?: ShowTrafficTrendRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cfw/logs/traffic-trend",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let fwInstanceId;
            
            let logType;
            
            let aggType;
            
            let range;
            
            let startTime;
            
            let endTime;
            
            let vgwId;
            
            let ip;

            if (showTrafficTrendRequest !== null && showTrafficTrendRequest !== undefined) {
                if (showTrafficTrendRequest instanceof ShowTrafficTrendRequest) {
                    projectId = showTrafficTrendRequest.projectId;
                    fwInstanceId = showTrafficTrendRequest.fwInstanceId;
                    logType = showTrafficTrendRequest.logType;
                    aggType = showTrafficTrendRequest.aggType;
                    range = showTrafficTrendRequest.range;
                    startTime = showTrafficTrendRequest.startTime;
                    endTime = showTrafficTrendRequest.endTime;
                    vgwId = showTrafficTrendRequest.vgwId;
                    ip = showTrafficTrendRequest.ip;
                } else {
                    projectId = showTrafficTrendRequest['project_id'];
                    fwInstanceId = showTrafficTrendRequest['fw_instance_id'];
                    logType = showTrafficTrendRequest['log_type'];
                    aggType = showTrafficTrendRequest['agg_type'];
                    range = showTrafficTrendRequest['range'];
                    startTime = showTrafficTrendRequest['start_time'];
                    endTime = showTrafficTrendRequest['end_time'];
                    vgwId = showTrafficTrendRequest['vgw_id'];
                    ip = showTrafficTrendRequest['ip'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showTrafficTrend.');
            }
            if (fwInstanceId === null || fwInstanceId === undefined) {
                throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling showTrafficTrend.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (logType === null || logType === undefined) {
                throw new RequiredError('logType','Required parameter logType was null or undefined when calling showTrafficTrend.');
            }
            if (logType !== null && logType !== undefined) {
                localVarQueryParameter['log_type'] = logType;
            }
            if (aggType === null || aggType === undefined) {
                throw new RequiredError('aggType','Required parameter aggType was null or undefined when calling showTrafficTrend.');
            }
            if (aggType !== null && aggType !== undefined) {
                localVarQueryParameter['agg_type'] = aggType;
            }
            if (range !== null && range !== undefined) {
                localVarQueryParameter['range'] = range;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (vgwId !== null && vgwId !== undefined) {
                localVarQueryParameter['vgw_id'] = vgwId;
            }
            if (ip !== null && ip !== undefined) {
                localVarQueryParameter['ip'] = ip;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新地址组信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAddressSet(updateAddressSetRequest?: UpdateAddressSetRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/address-sets/{set_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let setId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (updateAddressSetRequest !== null && updateAddressSetRequest !== undefined) {
                if (updateAddressSetRequest instanceof UpdateAddressSetRequest) {
                    projectId = updateAddressSetRequest.projectId;
                    setId = updateAddressSetRequest.setId;
                    body = updateAddressSetRequest.body
                    enterpriseProjectId = updateAddressSetRequest.enterpriseProjectId;
                    fwInstanceId = updateAddressSetRequest.fwInstanceId;
                } else {
                    projectId = updateAddressSetRequest['project_id'];
                    setId = updateAddressSetRequest['set_id'];
                    body = updateAddressSetRequest['body'];
                    enterpriseProjectId = updateAddressSetRequest['enterprise_project_id'];
                    fwInstanceId = updateAddressSetRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling updateAddressSet.');
            }
            if (setId === null || setId === undefined) {
            throw new RequiredError('setId','Required parameter setId was null or undefined when calling updateAddressSet.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'set_id': setId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改告警配置接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAlarmConfig(updateAlarmConfigRequest?: UpdateAlarmConfigRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/cfw/alarm/config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let fwInstanceId;
            
            let projectId;
            
            let enterpriseProjectId;

            if (updateAlarmConfigRequest !== null && updateAlarmConfigRequest !== undefined) {
                if (updateAlarmConfigRequest instanceof UpdateAlarmConfigRequest) {
                    fwInstanceId = updateAlarmConfigRequest.fwInstanceId;
                    projectId = updateAlarmConfigRequest.projectId;
                    body = updateAlarmConfigRequest.body
                    enterpriseProjectId = updateAlarmConfigRequest.enterpriseProjectId;
                } else {
                    fwInstanceId = updateAlarmConfigRequest['fw_instance_id'];
                    projectId = updateAlarmConfigRequest['project_id'];
                    body = updateAlarmConfigRequest['body'];
                    enterpriseProjectId = updateAlarmConfigRequest['enterprise_project_id'];
                }
            }

        
            if (fwInstanceId === null || fwInstanceId === undefined) {
                throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling updateAlarmConfig.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling updateAlarmConfig.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改反病毒规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAntiVirusRule(updateAntiVirusRuleRequest?: UpdateAntiVirusRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/anti-virus/rule",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let enterpriseProjectId;

            if (updateAntiVirusRuleRequest !== null && updateAntiVirusRuleRequest !== undefined) {
                if (updateAntiVirusRuleRequest instanceof UpdateAntiVirusRuleRequest) {
                    projectId = updateAntiVirusRuleRequest.projectId;
                    body = updateAntiVirusRuleRequest.body
                    enterpriseProjectId = updateAntiVirusRuleRequest.enterpriseProjectId;
                } else {
                    projectId = updateAntiVirusRuleRequest['project_id'];
                    body = updateAntiVirusRuleRequest['body'];
                    enterpriseProjectId = updateAntiVirusRuleRequest['enterprise_project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling updateAntiVirusRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改反病毒开关
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAntiVirusSwitch(updateAntiVirusSwitchRequest?: UpdateAntiVirusSwitchRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/anti-virus/switch",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let enterpriseProjectId;

            if (updateAntiVirusSwitchRequest !== null && updateAntiVirusSwitchRequest !== undefined) {
                if (updateAntiVirusSwitchRequest instanceof UpdateAntiVirusSwitchRequest) {
                    projectId = updateAntiVirusSwitchRequest.projectId;
                    body = updateAntiVirusSwitchRequest.body
                    enterpriseProjectId = updateAntiVirusSwitchRequest.enterpriseProjectId;
                } else {
                    projectId = updateAntiVirusSwitchRequest['project_id'];
                    body = updateAntiVirusSwitchRequest['body'];
                    enterpriseProjectId = updateAntiVirusSwitchRequest['enterprise_project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling updateAntiVirusSwitch.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新黑白名单列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateBlackWhiteList(updateBlackWhiteListRequest?: UpdateBlackWhiteListRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/black-white-list/{list_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let listId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (updateBlackWhiteListRequest !== null && updateBlackWhiteListRequest !== undefined) {
                if (updateBlackWhiteListRequest instanceof UpdateBlackWhiteListRequest) {
                    projectId = updateBlackWhiteListRequest.projectId;
                    listId = updateBlackWhiteListRequest.listId;
                    body = updateBlackWhiteListRequest.body
                    enterpriseProjectId = updateBlackWhiteListRequest.enterpriseProjectId;
                    fwInstanceId = updateBlackWhiteListRequest.fwInstanceId;
                } else {
                    projectId = updateBlackWhiteListRequest['project_id'];
                    listId = updateBlackWhiteListRequest['list_id'];
                    body = updateBlackWhiteListRequest['body'];
                    enterpriseProjectId = updateBlackWhiteListRequest['enterprise_project_id'];
                    fwInstanceId = updateBlackWhiteListRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling updateBlackWhiteList.');
            }
            if (listId === null || listId === undefined) {
            throw new RequiredError('listId','Required parameter listId was null or undefined when calling updateBlackWhiteList.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'list_id': listId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新dns服务器列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDnsServers(updateDnsServersRequest?: UpdateDnsServersRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/dns/servers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let fwInstanceId;
            
            let enterpriseProjectId;

            if (updateDnsServersRequest !== null && updateDnsServersRequest !== undefined) {
                if (updateDnsServersRequest instanceof UpdateDnsServersRequest) {
                    projectId = updateDnsServersRequest.projectId;
                    fwInstanceId = updateDnsServersRequest.fwInstanceId;
                    body = updateDnsServersRequest.body
                    enterpriseProjectId = updateDnsServersRequest.enterpriseProjectId;
                } else {
                    projectId = updateDnsServersRequest['project_id'];
                    fwInstanceId = updateDnsServersRequest['fw_instance_id'];
                    body = updateDnsServersRequest['body'];
                    enterpriseProjectId = updateDnsServersRequest['enterprise_project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling updateDnsServers.');
            }
            if (fwInstanceId === null || fwInstanceId === undefined) {
                throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling updateDnsServers.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新域名组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDomainSet(updateDomainSetRequest?: UpdateDomainSetRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/domain-set/{set_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let setId;
            
            let fwInstanceId;
            
            let enterpriseProjectId;

            if (updateDomainSetRequest !== null && updateDomainSetRequest !== undefined) {
                if (updateDomainSetRequest instanceof UpdateDomainSetRequest) {
                    projectId = updateDomainSetRequest.projectId;
                    setId = updateDomainSetRequest.setId;
                    fwInstanceId = updateDomainSetRequest.fwInstanceId;
                    body = updateDomainSetRequest.body
                    enterpriseProjectId = updateDomainSetRequest.enterpriseProjectId;
                } else {
                    projectId = updateDomainSetRequest['project_id'];
                    setId = updateDomainSetRequest['set_id'];
                    fwInstanceId = updateDomainSetRequest['fw_instance_id'];
                    body = updateDomainSetRequest['body'];
                    enterpriseProjectId = updateDomainSetRequest['enterprise_project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling updateDomainSet.');
            }
            if (setId === null || setId === undefined) {
            throw new RequiredError('setId','Required parameter setId was null or undefined when calling updateDomainSet.');
            }
            if (fwInstanceId === null || fwInstanceId === undefined) {
                throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling updateDomainSet.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'set_id': setId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新日志配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateLogConfig(updateLogConfigRequest?: UpdateLogConfigRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/cfw/logs/configuration",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let fwInstanceId;
            
            let enterpriseProjectId;

            if (updateLogConfigRequest !== null && updateLogConfigRequest !== undefined) {
                if (updateLogConfigRequest instanceof UpdateLogConfigRequest) {
                    projectId = updateLogConfigRequest.projectId;
                    fwInstanceId = updateLogConfigRequest.fwInstanceId;
                    body = updateLogConfigRequest.body
                    enterpriseProjectId = updateLogConfigRequest.enterpriseProjectId;
                } else {
                    projectId = updateLogConfigRequest['project_id'];
                    fwInstanceId = updateLogConfigRequest['fw_instance_id'];
                    body = updateLogConfigRequest['body'];
                    enterpriseProjectId = updateLogConfigRequest['enterprise_project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling updateLogConfig.');
            }
            if (fwInstanceId === null || fwInstanceId === undefined) {
                throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling updateLogConfig.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 编辑对象组内成员的描述信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateObjectConfigDesc(updateObjectConfigDescRequest?: UpdateObjectConfigDescRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/config/object/description",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (updateObjectConfigDescRequest !== null && updateObjectConfigDescRequest !== undefined) {
                if (updateObjectConfigDescRequest instanceof UpdateObjectConfigDescRequest) {
                    projectId = updateObjectConfigDescRequest.projectId;
                    body = updateObjectConfigDescRequest.body
                } else {
                    projectId = updateObjectConfigDescRequest['project_id'];
                    body = updateObjectConfigDescRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling updateObjectConfigDesc.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新服务组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateServiceSet(updateServiceSetRequest?: UpdateServiceSetRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/service-sets/{set_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let setId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (updateServiceSetRequest !== null && updateServiceSetRequest !== undefined) {
                if (updateServiceSetRequest instanceof UpdateServiceSetRequest) {
                    projectId = updateServiceSetRequest.projectId;
                    setId = updateServiceSetRequest.setId;
                    body = updateServiceSetRequest.body
                    enterpriseProjectId = updateServiceSetRequest.enterpriseProjectId;
                    fwInstanceId = updateServiceSetRequest.fwInstanceId;
                } else {
                    projectId = updateServiceSetRequest['project_id'];
                    setId = updateServiceSetRequest['set_id'];
                    body = updateServiceSetRequest['body'];
                    enterpriseProjectId = updateServiceSetRequest['enterprise_project_id'];
                    fwInstanceId = updateServiceSetRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling updateServiceSet.');
            }
            if (setId === null || setId === undefined) {
            throw new RequiredError('setId','Required parameter setId was null or undefined when calling updateServiceSet.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'set_id': setId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建ACL规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addAclRule(addAclRuleRequest?: AddAclRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/acl-rule",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (addAclRuleRequest !== null && addAclRuleRequest !== undefined) {
                if (addAclRuleRequest instanceof AddAclRuleRequest) {
                    projectId = addAclRuleRequest.projectId;
                    body = addAclRuleRequest.body
                    enterpriseProjectId = addAclRuleRequest.enterpriseProjectId;
                    fwInstanceId = addAclRuleRequest.fwInstanceId;
                } else {
                    projectId = addAclRuleRequest['project_id'];
                    body = addAclRuleRequest['body'];
                    enterpriseProjectId = addAclRuleRequest['enterprise_project_id'];
                    fwInstanceId = addAclRuleRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling addAclRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除Acl规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteAclRules(batchDeleteAclRulesRequest?: BatchDeleteAclRulesRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/acl-rule",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (batchDeleteAclRulesRequest !== null && batchDeleteAclRulesRequest !== undefined) {
                if (batchDeleteAclRulesRequest instanceof BatchDeleteAclRulesRequest) {
                    projectId = batchDeleteAclRulesRequest.projectId;
                    body = batchDeleteAclRulesRequest.body
                    enterpriseProjectId = batchDeleteAclRulesRequest.enterpriseProjectId;
                    fwInstanceId = batchDeleteAclRulesRequest.fwInstanceId;
                } else {
                    projectId = batchDeleteAclRulesRequest['project_id'];
                    body = batchDeleteAclRulesRequest['body'];
                    enterpriseProjectId = batchDeleteAclRulesRequest['enterprise_project_id'];
                    fwInstanceId = batchDeleteAclRulesRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling batchDeleteAclRules.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量更新规则动作
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUpdateAclRuleActions(batchUpdateAclRuleActionsRequest?: BatchUpdateAclRuleActionsRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/acl-rule/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (batchUpdateAclRuleActionsRequest !== null && batchUpdateAclRuleActionsRequest !== undefined) {
                if (batchUpdateAclRuleActionsRequest instanceof BatchUpdateAclRuleActionsRequest) {
                    projectId = batchUpdateAclRuleActionsRequest.projectId;
                    body = batchUpdateAclRuleActionsRequest.body
                    enterpriseProjectId = batchUpdateAclRuleActionsRequest.enterpriseProjectId;
                    fwInstanceId = batchUpdateAclRuleActionsRequest.fwInstanceId;
                } else {
                    projectId = batchUpdateAclRuleActionsRequest['project_id'];
                    body = batchUpdateAclRuleActionsRequest['body'];
                    enterpriseProjectId = batchUpdateAclRuleActionsRequest['enterprise_project_id'];
                    fwInstanceId = batchUpdateAclRuleActionsRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling batchUpdateAclRuleActions.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除ACL规则组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAclRule(deleteAclRuleRequest?: DeleteAclRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/acl-rule/{acl_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let aclRuleId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (deleteAclRuleRequest !== null && deleteAclRuleRequest !== undefined) {
                if (deleteAclRuleRequest instanceof DeleteAclRuleRequest) {
                    projectId = deleteAclRuleRequest.projectId;
                    aclRuleId = deleteAclRuleRequest.aclRuleId;
                    enterpriseProjectId = deleteAclRuleRequest.enterpriseProjectId;
                    fwInstanceId = deleteAclRuleRequest.fwInstanceId;
                } else {
                    projectId = deleteAclRuleRequest['project_id'];
                    aclRuleId = deleteAclRuleRequest['acl_rule_id'];
                    enterpriseProjectId = deleteAclRuleRequest['enterprise_project_id'];
                    fwInstanceId = deleteAclRuleRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteAclRule.');
            }
            if (aclRuleId === null || aclRuleId === undefined) {
            throw new RequiredError('aclRuleId','Required parameter aclRuleId was null or undefined when calling deleteAclRule.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'acl_rule_id': aclRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 清除规则击中次数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAclRuleHitCount(deleteAclRuleHitCountRequest?: DeleteAclRuleHitCountRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/acl-rule/count",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (deleteAclRuleHitCountRequest !== null && deleteAclRuleHitCountRequest !== undefined) {
                if (deleteAclRuleHitCountRequest instanceof DeleteAclRuleHitCountRequest) {
                    projectId = deleteAclRuleHitCountRequest.projectId;
                    body = deleteAclRuleHitCountRequest.body
                    enterpriseProjectId = deleteAclRuleHitCountRequest.enterpriseProjectId;
                    fwInstanceId = deleteAclRuleHitCountRequest.fwInstanceId;
                } else {
                    projectId = deleteAclRuleHitCountRequest['project_id'];
                    body = deleteAclRuleHitCountRequest['body'];
                    enterpriseProjectId = deleteAclRuleHitCountRequest['enterprise_project_id'];
                    fwInstanceId = deleteAclRuleHitCountRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteAclRuleHitCount.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取规则击中次数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAclRuleHitCount(listAclRuleHitCountRequest?: ListAclRuleHitCountRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/acl-rule/count",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (listAclRuleHitCountRequest !== null && listAclRuleHitCountRequest !== undefined) {
                if (listAclRuleHitCountRequest instanceof ListAclRuleHitCountRequest) {
                    projectId = listAclRuleHitCountRequest.projectId;
                    enterpriseProjectId = listAclRuleHitCountRequest.enterpriseProjectId;
                    fwInstanceId = listAclRuleHitCountRequest.fwInstanceId;
                    body = listAclRuleHitCountRequest.body
                } else {
                    projectId = listAclRuleHitCountRequest['project_id'];
                    enterpriseProjectId = listAclRuleHitCountRequest['enterprise_project_id'];
                    fwInstanceId = listAclRuleHitCountRequest['fw_instance_id'];
                    body = listAclRuleHitCountRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listAclRuleHitCount.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询防护规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAclRules(listAclRulesRequest?: ListAclRulesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/acl-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let objectId;
            
            let limit;
            
            let offset;
            
            let type;
            
            let ip;
            
            let name;
            
            let direction;
            
            let status;
            
            let actionType;
            
            let addressType;
            
            let enterpriseProjectId;
            
            let fwInstanceId;
            
            let tagsId;
            
            let source;
            
            let destination;
            
            let service;
            
            let application;

            if (listAclRulesRequest !== null && listAclRulesRequest !== undefined) {
                if (listAclRulesRequest instanceof ListAclRulesRequest) {
                    projectId = listAclRulesRequest.projectId;
                    objectId = listAclRulesRequest.objectId;
                    limit = listAclRulesRequest.limit;
                    offset = listAclRulesRequest.offset;
                    type = listAclRulesRequest.type;
                    ip = listAclRulesRequest.ip;
                    name = listAclRulesRequest.name;
                    direction = listAclRulesRequest.direction;
                    status = listAclRulesRequest.status;
                    actionType = listAclRulesRequest.actionType;
                    addressType = listAclRulesRequest.addressType;
                    enterpriseProjectId = listAclRulesRequest.enterpriseProjectId;
                    fwInstanceId = listAclRulesRequest.fwInstanceId;
                    tagsId = listAclRulesRequest.tagsId;
                    source = listAclRulesRequest.source;
                    destination = listAclRulesRequest.destination;
                    service = listAclRulesRequest.service;
                    application = listAclRulesRequest.application;
                } else {
                    projectId = listAclRulesRequest['project_id'];
                    objectId = listAclRulesRequest['object_id'];
                    limit = listAclRulesRequest['limit'];
                    offset = listAclRulesRequest['offset'];
                    type = listAclRulesRequest['type'];
                    ip = listAclRulesRequest['ip'];
                    name = listAclRulesRequest['name'];
                    direction = listAclRulesRequest['direction'];
                    status = listAclRulesRequest['status'];
                    actionType = listAclRulesRequest['action_type'];
                    addressType = listAclRulesRequest['address_type'];
                    enterpriseProjectId = listAclRulesRequest['enterprise_project_id'];
                    fwInstanceId = listAclRulesRequest['fw_instance_id'];
                    tagsId = listAclRulesRequest['tags_id'];
                    source = listAclRulesRequest['source'];
                    destination = listAclRulesRequest['destination'];
                    service = listAclRulesRequest['service'];
                    application = listAclRulesRequest['application'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listAclRules.');
            }
            if (objectId === null || objectId === undefined) {
                throw new RequiredError('objectId','Required parameter objectId was null or undefined when calling listAclRules.');
            }
            if (objectId !== null && objectId !== undefined) {
                localVarQueryParameter['object_id'] = objectId;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listAclRules.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listAclRules.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (ip !== null && ip !== undefined) {
                localVarQueryParameter['ip'] = ip;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (direction !== null && direction !== undefined) {
                localVarQueryParameter['direction'] = direction;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (actionType !== null && actionType !== undefined) {
                localVarQueryParameter['action_type'] = actionType;
            }
            if (addressType !== null && addressType !== undefined) {
                localVarQueryParameter['address_type'] = addressType;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (tagsId !== null && tagsId !== undefined) {
                localVarQueryParameter['tags_id'] = tagsId;
            }
            if (source !== null && source !== undefined) {
                localVarQueryParameter['source'] = source;
            }
            if (destination !== null && destination !== undefined) {
                localVarQueryParameter['destination'] = destination;
            }
            if (service !== null && service !== undefined) {
                localVarQueryParameter['service'] = service;
            }
            if (application !== null && application !== undefined) {
                localVarQueryParameter['application'] = application;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看region列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRegions(listRegionsRequest?: ListRegionsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/regions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let fwInstanceId;
            
            let enterpriseProjectId;

            if (listRegionsRequest !== null && listRegionsRequest !== undefined) {
                if (listRegionsRequest instanceof ListRegionsRequest) {
                    projectId = listRegionsRequest.projectId;
                    fwInstanceId = listRegionsRequest.fwInstanceId;
                    enterpriseProjectId = listRegionsRequest.enterpriseProjectId;
                } else {
                    projectId = listRegionsRequest['project_id'];
                    fwInstanceId = listRegionsRequest['fw_instance_id'];
                    enterpriseProjectId = listRegionsRequest['enterprise_project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listRegions.');
            }
            if (fwInstanceId === null || fwInstanceId === undefined) {
                throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling listRegions.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询规则标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRuleAclTags(listRuleAclTagsRequest?: ListRuleAclTagsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/cfw-acl/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let fwInstanceId;
            
            let offset;
            
            let limit;
            
            let enterpriseProjectId;

            if (listRuleAclTagsRequest !== null && listRuleAclTagsRequest !== undefined) {
                if (listRuleAclTagsRequest instanceof ListRuleAclTagsRequest) {
                    projectId = listRuleAclTagsRequest.projectId;
                    fwInstanceId = listRuleAclTagsRequest.fwInstanceId;
                    offset = listRuleAclTagsRequest.offset;
                    limit = listRuleAclTagsRequest.limit;
                    enterpriseProjectId = listRuleAclTagsRequest.enterpriseProjectId;
                } else {
                    projectId = listRuleAclTagsRequest['project_id'];
                    fwInstanceId = listRuleAclTagsRequest['fw_instance_id'];
                    offset = listRuleAclTagsRequest['offset'];
                    limit = listRuleAclTagsRequest['limit'];
                    enterpriseProjectId = listRuleAclTagsRequest['enterprise_project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listRuleAclTags.');
            }
            if (fwInstanceId === null || fwInstanceId === undefined) {
                throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling listRuleAclTags.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listRuleAclTags.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listRuleAclTags.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看导入状态接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showImportStatus(showImportStatusRequest?: ShowImportStatusRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/acl-rule/import-status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let objectId;
            
            let projectId;
            
            let enterpriseProjectId;

            if (showImportStatusRequest !== null && showImportStatusRequest !== undefined) {
                if (showImportStatusRequest instanceof ShowImportStatusRequest) {
                    objectId = showImportStatusRequest.objectId;
                    projectId = showImportStatusRequest.projectId;
                    enterpriseProjectId = showImportStatusRequest.enterpriseProjectId;
                } else {
                    objectId = showImportStatusRequest['object_id'];
                    projectId = showImportStatusRequest['project_id'];
                    enterpriseProjectId = showImportStatusRequest['enterprise_project_id'];
                }
            }

        
            if (objectId === null || objectId === undefined) {
                throw new RequiredError('objectId','Required parameter objectId was null or undefined when calling showImportStatus.');
            }
            if (objectId !== null && objectId !== undefined) {
                localVarQueryParameter['object_id'] = objectId;
            }
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showImportStatus.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新ACL规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAclRule(updateAclRuleRequest?: UpdateAclRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/acl-rule/{acl_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let aclRuleId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (updateAclRuleRequest !== null && updateAclRuleRequest !== undefined) {
                if (updateAclRuleRequest instanceof UpdateAclRuleRequest) {
                    projectId = updateAclRuleRequest.projectId;
                    aclRuleId = updateAclRuleRequest.aclRuleId;
                    body = updateAclRuleRequest.body
                    enterpriseProjectId = updateAclRuleRequest.enterpriseProjectId;
                    fwInstanceId = updateAclRuleRequest.fwInstanceId;
                } else {
                    projectId = updateAclRuleRequest['project_id'];
                    aclRuleId = updateAclRuleRequest['acl_rule_id'];
                    body = updateAclRuleRequest['body'];
                    enterpriseProjectId = updateAclRuleRequest['enterprise_project_id'];
                    fwInstanceId = updateAclRuleRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling updateAclRule.');
            }
            if (aclRuleId === null || aclRuleId === undefined) {
            throw new RequiredError('aclRuleId','Required parameter aclRuleId was null or undefined when calling updateAclRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'acl_rule_id': aclRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ACL防护规则优先级设置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAclRuleOrder(updateAclRuleOrderRequest?: UpdateAclRuleOrderRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/acl-rule/order/{acl_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let aclRuleId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (updateAclRuleOrderRequest !== null && updateAclRuleOrderRequest !== undefined) {
                if (updateAclRuleOrderRequest instanceof UpdateAclRuleOrderRequest) {
                    projectId = updateAclRuleOrderRequest.projectId;
                    aclRuleId = updateAclRuleOrderRequest.aclRuleId;
                    body = updateAclRuleOrderRequest.body
                    enterpriseProjectId = updateAclRuleOrderRequest.enterpriseProjectId;
                    fwInstanceId = updateAclRuleOrderRequest.fwInstanceId;
                } else {
                    projectId = updateAclRuleOrderRequest['project_id'];
                    aclRuleId = updateAclRuleOrderRequest['acl_rule_id'];
                    body = updateAclRuleOrderRequest['body'];
                    enterpriseProjectId = updateAclRuleOrderRequest['enterprise_project_id'];
                    fwInstanceId = updateAclRuleOrderRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling updateAclRuleOrder.');
            }
            if (aclRuleId === null || aclRuleId === undefined) {
            throw new RequiredError('aclRuleId','Required parameter aclRuleId was null or undefined when calling updateAclRuleOrder.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'acl_rule_id': aclRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 开启关闭EIP，客户购买EIP后首次开启EIP防护前需使用ListEips同步EIP资产，sync字段设置为1。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeEipStatus(changeEipStatusRequest?: ChangeEipStatusRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/eip/protect",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (changeEipStatusRequest !== null && changeEipStatusRequest !== undefined) {
                if (changeEipStatusRequest instanceof ChangeEipStatusRequest) {
                    projectId = changeEipStatusRequest.projectId;
                    body = changeEipStatusRequest.body
                    enterpriseProjectId = changeEipStatusRequest.enterpriseProjectId;
                    fwInstanceId = changeEipStatusRequest.fwInstanceId;
                } else {
                    projectId = changeEipStatusRequest['project_id'];
                    body = changeEipStatusRequest['body'];
                    enterpriseProjectId = changeEipStatusRequest['enterprise_project_id'];
                    fwInstanceId = changeEipStatusRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling changeEipStatus.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看eip告警白名单
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAlarmWhitelist(listAlarmWhitelistRequest?: ListAlarmWhitelistRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/eip/alarm-whitelist/{fw_instance_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let fwInstanceId;
            
            let limit;
            
            let offset;
            
            let projectId;
            
            let ipAddress;
            
            let enterpriseProjectId;

            if (listAlarmWhitelistRequest !== null && listAlarmWhitelistRequest !== undefined) {
                if (listAlarmWhitelistRequest instanceof ListAlarmWhitelistRequest) {
                    fwInstanceId = listAlarmWhitelistRequest.fwInstanceId;
                    limit = listAlarmWhitelistRequest.limit;
                    offset = listAlarmWhitelistRequest.offset;
                    projectId = listAlarmWhitelistRequest.projectId;
                    ipAddress = listAlarmWhitelistRequest.ipAddress;
                    enterpriseProjectId = listAlarmWhitelistRequest.enterpriseProjectId;
                } else {
                    fwInstanceId = listAlarmWhitelistRequest['fw_instance_id'];
                    limit = listAlarmWhitelistRequest['limit'];
                    offset = listAlarmWhitelistRequest['offset'];
                    projectId = listAlarmWhitelistRequest['project_id'];
                    ipAddress = listAlarmWhitelistRequest['ip_address'];
                    enterpriseProjectId = listAlarmWhitelistRequest['enterprise_project_id'];
                }
            }

        
            if (fwInstanceId === null || fwInstanceId === undefined) {
            throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling listAlarmWhitelist.');
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listAlarmWhitelist.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listAlarmWhitelist.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listAlarmWhitelist.');
            }
            if (ipAddress !== null && ipAddress !== undefined) {
                localVarQueryParameter['ip_address'] = ipAddress;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'fw_instance_id': fwInstanceId,'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Eip个数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEipCount(listEipCountRequest?: ListEipCountRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/eip-count/{object_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let objectId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (listEipCountRequest !== null && listEipCountRequest !== undefined) {
                if (listEipCountRequest instanceof ListEipCountRequest) {
                    projectId = listEipCountRequest.projectId;
                    objectId = listEipCountRequest.objectId;
                    enterpriseProjectId = listEipCountRequest.enterpriseProjectId;
                    fwInstanceId = listEipCountRequest.fwInstanceId;
                } else {
                    projectId = listEipCountRequest['project_id'];
                    objectId = listEipCountRequest['object_id'];
                    enterpriseProjectId = listEipCountRequest['enterprise_project_id'];
                    fwInstanceId = listEipCountRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listEipCount.');
            }
            if (objectId === null || objectId === undefined) {
            throw new RequiredError('objectId','Required parameter objectId was null or undefined when calling listEipCount.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'object_id': objectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 弹性IP列表查询
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEips(listEipsRequest?: ListEipsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/eips/protect",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let objectId;
            
            let limit;
            
            let offset;
            
            let keyWord;
            
            let status;
            
            let sync;
            
            let enterpriseProjectId;
            
            let deviceKey;
            
            let addressType;
            
            let fwInstanceId;
            
            let fwKeyWord;
            
            let epsId;
            
            let tags;

            if (listEipsRequest !== null && listEipsRequest !== undefined) {
                if (listEipsRequest instanceof ListEipsRequest) {
                    projectId = listEipsRequest.projectId;
                    objectId = listEipsRequest.objectId;
                    limit = listEipsRequest.limit;
                    offset = listEipsRequest.offset;
                    keyWord = listEipsRequest.keyWord;
                    status = listEipsRequest.status;
                    sync = listEipsRequest.sync;
                    enterpriseProjectId = listEipsRequest.enterpriseProjectId;
                    deviceKey = listEipsRequest.deviceKey;
                    addressType = listEipsRequest.addressType;
                    fwInstanceId = listEipsRequest.fwInstanceId;
                    fwKeyWord = listEipsRequest.fwKeyWord;
                    epsId = listEipsRequest.epsId;
                    tags = listEipsRequest.tags;
                } else {
                    projectId = listEipsRequest['project_id'];
                    objectId = listEipsRequest['object_id'];
                    limit = listEipsRequest['limit'];
                    offset = listEipsRequest['offset'];
                    keyWord = listEipsRequest['key_word'];
                    status = listEipsRequest['status'];
                    sync = listEipsRequest['sync'];
                    enterpriseProjectId = listEipsRequest['enterprise_project_id'];
                    deviceKey = listEipsRequest['device_key'];
                    addressType = listEipsRequest['address_type'];
                    fwInstanceId = listEipsRequest['fw_instance_id'];
                    fwKeyWord = listEipsRequest['fw_key_word'];
                    epsId = listEipsRequest['eps_id'];
                    tags = listEipsRequest['tags'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listEips.');
            }
            if (objectId === null || objectId === undefined) {
                throw new RequiredError('objectId','Required parameter objectId was null or undefined when calling listEips.');
            }
            if (objectId !== null && objectId !== undefined) {
                localVarQueryParameter['object_id'] = objectId;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listEips.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listEips.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (keyWord !== null && keyWord !== undefined) {
                localVarQueryParameter['key_word'] = keyWord;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (sync !== null && sync !== undefined) {
                localVarQueryParameter['sync'] = sync;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (deviceKey !== null && deviceKey !== undefined) {
                localVarQueryParameter['device_key'] = deviceKey;
            }
            if (addressType !== null && addressType !== undefined) {
                localVarQueryParameter['address_type'] = addressType;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (fwKeyWord !== null && fwKeyWord !== undefined) {
                localVarQueryParameter['fw_key_word'] = fwKeyWord;
            }
            if (epsId !== null && epsId !== undefined) {
                localVarQueryParameter['eps_id'] = epsId;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取eip自动防护状态信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAutoProtectStatus(showAutoProtectStatusRequest?: ShowAutoProtectStatusRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/eip/auto-protect-status/{object_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let objectId;
            
            let projectId;
            
            let enterpriseProjectId;

            if (showAutoProtectStatusRequest !== null && showAutoProtectStatusRequest !== undefined) {
                if (showAutoProtectStatusRequest instanceof ShowAutoProtectStatusRequest) {
                    objectId = showAutoProtectStatusRequest.objectId;
                    projectId = showAutoProtectStatusRequest.projectId;
                    enterpriseProjectId = showAutoProtectStatusRequest.enterpriseProjectId;
                } else {
                    objectId = showAutoProtectStatusRequest['object_id'];
                    projectId = showAutoProtectStatusRequest['project_id'];
                    enterpriseProjectId = showAutoProtectStatusRequest['enterprise_project_id'];
                }
            }

        
            if (objectId === null || objectId === undefined) {
            throw new RequiredError('objectId','Required parameter objectId was null or undefined when calling showAutoProtectStatus.');
            }
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showAutoProtectStatus.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'object_id': objectId,'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改eip自动防护开关
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchAutoProtectStatus(switchAutoProtectStatusRequest?: SwitchAutoProtectStatusRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/eip/auto-protect-status/switch",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let enterpriseProjectId;

            if (switchAutoProtectStatusRequest !== null && switchAutoProtectStatusRequest !== undefined) {
                if (switchAutoProtectStatusRequest instanceof SwitchAutoProtectStatusRequest) {
                    projectId = switchAutoProtectStatusRequest.projectId;
                    body = switchAutoProtectStatusRequest.body
                    enterpriseProjectId = switchAutoProtectStatusRequest.enterpriseProjectId;
                } else {
                    projectId = switchAutoProtectStatusRequest['project_id'];
                    body = switchAutoProtectStatusRequest['body'];
                    enterpriseProjectId = switchAutoProtectStatusRequest['enterprise_project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling switchAutoProtectStatus.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 切换防护模式
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeIpsProtectMode(changeIpsProtectModeRequest?: ChangeIpsProtectModeRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/ips/protect",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (changeIpsProtectModeRequest !== null && changeIpsProtectModeRequest !== undefined) {
                if (changeIpsProtectModeRequest instanceof ChangeIpsProtectModeRequest) {
                    projectId = changeIpsProtectModeRequest.projectId;
                    body = changeIpsProtectModeRequest.body
                    enterpriseProjectId = changeIpsProtectModeRequest.enterpriseProjectId;
                    fwInstanceId = changeIpsProtectModeRequest.fwInstanceId;
                } else {
                    projectId = changeIpsProtectModeRequest['project_id'];
                    body = changeIpsProtectModeRequest['body'];
                    enterpriseProjectId = changeIpsProtectModeRequest['enterprise_project_id'];
                    fwInstanceId = changeIpsProtectModeRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling changeIpsProtectMode.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 改变ips规则模式
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeIpsRuleMode(changeIpsRuleModeRequest?: ChangeIpsRuleModeRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/ips-rule/mode",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let enterpriseProjectId;

            if (changeIpsRuleModeRequest !== null && changeIpsRuleModeRequest !== undefined) {
                if (changeIpsRuleModeRequest instanceof ChangeIpsRuleModeRequest) {
                    projectId = changeIpsRuleModeRequest.projectId;
                    body = changeIpsRuleModeRequest.body
                    enterpriseProjectId = changeIpsRuleModeRequest.enterpriseProjectId;
                } else {
                    projectId = changeIpsRuleModeRequest['project_id'];
                    body = changeIpsRuleModeRequest['body'];
                    enterpriseProjectId = changeIpsRuleModeRequest['enterprise_project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling changeIpsRuleMode.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 切换开关状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeIpsSwitchStatus(changeIpsSwitchStatusRequest?: ChangeIpsSwitchStatusRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/ips/switch",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (changeIpsSwitchStatusRequest !== null && changeIpsSwitchStatusRequest !== undefined) {
                if (changeIpsSwitchStatusRequest instanceof ChangeIpsSwitchStatusRequest) {
                    projectId = changeIpsSwitchStatusRequest.projectId;
                    body = changeIpsSwitchStatusRequest.body
                    enterpriseProjectId = changeIpsSwitchStatusRequest.enterpriseProjectId;
                    fwInstanceId = changeIpsSwitchStatusRequest.fwInstanceId;
                } else {
                    projectId = changeIpsSwitchStatusRequest['project_id'];
                    body = changeIpsSwitchStatusRequest['body'];
                    enterpriseProjectId = changeIpsSwitchStatusRequest['enterprise_project_id'];
                    fwInstanceId = changeIpsSwitchStatusRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling changeIpsSwitchStatus.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取自定义ips规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCustomerIps(listCustomerIpsRequest?: ListCustomerIpsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/ips/custom-rule",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let fwInstanceId;
            
            let limit;
            
            let objectId;
            
            let offset;
            
            let projectId;
            
            let actionType;
            
            let affectedOs;
            
            let attackType;
            
            let ipsName;
            
            let protocol;
            
            let severity;
            
            let software;
            
            let enterpriseProjectId;

            if (listCustomerIpsRequest !== null && listCustomerIpsRequest !== undefined) {
                if (listCustomerIpsRequest instanceof ListCustomerIpsRequest) {
                    fwInstanceId = listCustomerIpsRequest.fwInstanceId;
                    limit = listCustomerIpsRequest.limit;
                    objectId = listCustomerIpsRequest.objectId;
                    offset = listCustomerIpsRequest.offset;
                    projectId = listCustomerIpsRequest.projectId;
                    actionType = listCustomerIpsRequest.actionType;
                    affectedOs = listCustomerIpsRequest.affectedOs;
                    attackType = listCustomerIpsRequest.attackType;
                    ipsName = listCustomerIpsRequest.ipsName;
                    protocol = listCustomerIpsRequest.protocol;
                    severity = listCustomerIpsRequest.severity;
                    software = listCustomerIpsRequest.software;
                    enterpriseProjectId = listCustomerIpsRequest.enterpriseProjectId;
                } else {
                    fwInstanceId = listCustomerIpsRequest['fw_instance_id'];
                    limit = listCustomerIpsRequest['limit'];
                    objectId = listCustomerIpsRequest['object_id'];
                    offset = listCustomerIpsRequest['offset'];
                    projectId = listCustomerIpsRequest['project_id'];
                    actionType = listCustomerIpsRequest['action_type'];
                    affectedOs = listCustomerIpsRequest['affected_os'];
                    attackType = listCustomerIpsRequest['attack_type'];
                    ipsName = listCustomerIpsRequest['ips_name'];
                    protocol = listCustomerIpsRequest['protocol'];
                    severity = listCustomerIpsRequest['severity'];
                    software = listCustomerIpsRequest['software'];
                    enterpriseProjectId = listCustomerIpsRequest['enterprise_project_id'];
                }
            }

        
            if (fwInstanceId === null || fwInstanceId === undefined) {
                throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling listCustomerIps.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listCustomerIps.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (objectId === null || objectId === undefined) {
                throw new RequiredError('objectId','Required parameter objectId was null or undefined when calling listCustomerIps.');
            }
            if (objectId !== null && objectId !== undefined) {
                localVarQueryParameter['object_id'] = objectId;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listCustomerIps.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listCustomerIps.');
            }
            if (actionType !== null && actionType !== undefined) {
                localVarQueryParameter['action_type'] = actionType;
            }
            if (affectedOs !== null && affectedOs !== undefined) {
                localVarQueryParameter['affected_os'] = affectedOs;
            }
            if (attackType !== null && attackType !== undefined) {
                localVarQueryParameter['attack_type'] = attackType;
            }
            if (ipsName !== null && ipsName !== undefined) {
                localVarQueryParameter['ips_name'] = ipsName;
            }
            if (protocol !== null && protocol !== undefined) {
                localVarQueryParameter['protocol'] = protocol;
            }
            if (severity !== null && severity !== undefined) {
                localVarQueryParameter['severity'] = severity;
            }
            if (software !== null && software !== undefined) {
                localVarQueryParameter['software'] = software;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询防护模式
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listIpsProtectMode(listIpsProtectModeRequest?: ListIpsProtectModeRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/ips/protect",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let objectId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (listIpsProtectModeRequest !== null && listIpsProtectModeRequest !== undefined) {
                if (listIpsProtectModeRequest instanceof ListIpsProtectModeRequest) {
                    projectId = listIpsProtectModeRequest.projectId;
                    objectId = listIpsProtectModeRequest.objectId;
                    enterpriseProjectId = listIpsProtectModeRequest.enterpriseProjectId;
                    fwInstanceId = listIpsProtectModeRequest.fwInstanceId;
                } else {
                    projectId = listIpsProtectModeRequest['project_id'];
                    objectId = listIpsProtectModeRequest['object_id'];
                    enterpriseProjectId = listIpsProtectModeRequest['enterprise_project_id'];
                    fwInstanceId = listIpsProtectModeRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listIpsProtectMode.');
            }
            if (objectId === null || objectId === undefined) {
                throw new RequiredError('objectId','Required parameter objectId was null or undefined when calling listIpsProtectMode.');
            }
            if (objectId !== null && objectId !== undefined) {
                localVarQueryParameter['object_id'] = objectId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询频率ips规则信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listIpsRules(listIpsRulesRequest?: ListIpsRulesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/advanced-ips-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let objectId;
            
            let projectId;
            
            let enterpriseProjectId;

            if (listIpsRulesRequest !== null && listIpsRulesRequest !== undefined) {
                if (listIpsRulesRequest instanceof ListIpsRulesRequest) {
                    objectId = listIpsRulesRequest.objectId;
                    projectId = listIpsRulesRequest.projectId;
                    enterpriseProjectId = listIpsRulesRequest.enterpriseProjectId;
                } else {
                    objectId = listIpsRulesRequest['object_id'];
                    projectId = listIpsRulesRequest['project_id'];
                    enterpriseProjectId = listIpsRulesRequest['enterprise_project_id'];
                }
            }

        
            if (objectId === null || objectId === undefined) {
                throw new RequiredError('objectId','Required parameter objectId was null or undefined when calling listIpsRules.');
            }
            if (objectId !== null && objectId !== undefined) {
                localVarQueryParameter['object_id'] = objectId;
            }
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listIpsRules.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取ips规则列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listIpsRules1(listIpsRules1Request?: ListIpsRules1Request) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/ips-rule",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let objectId;
            
            let offset;
            
            let projectId;
            
            let affectedApplicationLike;
            
            let createTime;
            
            let fwInstanceId;
            
            let ipsCveLike;
            
            let ipsGroup;
            
            let ipsId;
            
            let ipsLevel;
            
            let ipsNameLike;
            
            let ipsRulesTypeLike;
            
            let ipsStatus;
            
            let isUpdatedIpsRuleQueried;
            
            let enterpriseProjectId;

            if (listIpsRules1Request !== null && listIpsRules1Request !== undefined) {
                if (listIpsRules1Request instanceof ListIpsRules1Request) {
                    limit = listIpsRules1Request.limit;
                    objectId = listIpsRules1Request.objectId;
                    offset = listIpsRules1Request.offset;
                    projectId = listIpsRules1Request.projectId;
                    affectedApplicationLike = listIpsRules1Request.affectedApplicationLike;
                    createTime = listIpsRules1Request.createTime;
                    fwInstanceId = listIpsRules1Request.fwInstanceId;
                    ipsCveLike = listIpsRules1Request.ipsCveLike;
                    ipsGroup = listIpsRules1Request.ipsGroup;
                    ipsId = listIpsRules1Request.ipsId;
                    ipsLevel = listIpsRules1Request.ipsLevel;
                    ipsNameLike = listIpsRules1Request.ipsNameLike;
                    ipsRulesTypeLike = listIpsRules1Request.ipsRulesTypeLike;
                    ipsStatus = listIpsRules1Request.ipsStatus;
                    isUpdatedIpsRuleQueried = listIpsRules1Request.isUpdatedIpsRuleQueried;
                    enterpriseProjectId = listIpsRules1Request.enterpriseProjectId;
                } else {
                    limit = listIpsRules1Request['limit'];
                    objectId = listIpsRules1Request['object_id'];
                    offset = listIpsRules1Request['offset'];
                    projectId = listIpsRules1Request['project_id'];
                    affectedApplicationLike = listIpsRules1Request['affected_application_like'];
                    createTime = listIpsRules1Request['create_time'];
                    fwInstanceId = listIpsRules1Request['fw_instance_id'];
                    ipsCveLike = listIpsRules1Request['ips_cve_like'];
                    ipsGroup = listIpsRules1Request['ips_group'];
                    ipsId = listIpsRules1Request['ips_id'];
                    ipsLevel = listIpsRules1Request['ips_level'];
                    ipsNameLike = listIpsRules1Request['ips_name_like'];
                    ipsRulesTypeLike = listIpsRules1Request['ips_rules_type_like'];
                    ipsStatus = listIpsRules1Request['ips_status'];
                    isUpdatedIpsRuleQueried = listIpsRules1Request['is_updated_ips_rule_queried'];
                    enterpriseProjectId = listIpsRules1Request['enterprise_project_id'];
                }
            }

        
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listIpsRules1.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (objectId === null || objectId === undefined) {
                throw new RequiredError('objectId','Required parameter objectId was null or undefined when calling listIpsRules1.');
            }
            if (objectId !== null && objectId !== undefined) {
                localVarQueryParameter['object_id'] = objectId;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listIpsRules1.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listIpsRules1.');
            }
            if (affectedApplicationLike !== null && affectedApplicationLike !== undefined) {
                localVarQueryParameter['affected_application_like'] = affectedApplicationLike;
            }
            if (createTime !== null && createTime !== undefined) {
                localVarQueryParameter['create_time'] = createTime;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (ipsCveLike !== null && ipsCveLike !== undefined) {
                localVarQueryParameter['ips_cve_like'] = ipsCveLike;
            }
            if (ipsGroup !== null && ipsGroup !== undefined) {
                localVarQueryParameter['ips_group'] = ipsGroup;
            }
            if (ipsId !== null && ipsId !== undefined) {
                localVarQueryParameter['ips_id'] = ipsId;
            }
            if (ipsLevel !== null && ipsLevel !== undefined) {
                localVarQueryParameter['ips_level'] = ipsLevel;
            }
            if (ipsNameLike !== null && ipsNameLike !== undefined) {
                localVarQueryParameter['ips_name_like'] = ipsNameLike;
            }
            if (ipsRulesTypeLike !== null && ipsRulesTypeLike !== undefined) {
                localVarQueryParameter['ips_rules_type_like'] = ipsRulesTypeLike;
            }
            if (ipsStatus !== null && ipsStatus !== undefined) {
                localVarQueryParameter['ips_status'] = ipsStatus;
            }
            if (isUpdatedIpsRuleQueried !== null && isUpdatedIpsRuleQueried !== undefined) {
                localVarQueryParameter['is_updated_ips_rule_queried'] = isUpdatedIpsRuleQueried;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询IPS特性开关状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listIpsSwitchStatus(listIpsSwitchStatusRequest?: ListIpsSwitchStatusRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/ips/switch",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let objectId;
            
            let enterpriseProjectId;
            
            let fwInstanceId;

            if (listIpsSwitchStatusRequest !== null && listIpsSwitchStatusRequest !== undefined) {
                if (listIpsSwitchStatusRequest instanceof ListIpsSwitchStatusRequest) {
                    projectId = listIpsSwitchStatusRequest.projectId;
                    objectId = listIpsSwitchStatusRequest.objectId;
                    enterpriseProjectId = listIpsSwitchStatusRequest.enterpriseProjectId;
                    fwInstanceId = listIpsSwitchStatusRequest.fwInstanceId;
                } else {
                    projectId = listIpsSwitchStatusRequest['project_id'];
                    objectId = listIpsSwitchStatusRequest['object_id'];
                    enterpriseProjectId = listIpsSwitchStatusRequest['enterprise_project_id'];
                    fwInstanceId = listIpsSwitchStatusRequest['fw_instance_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listIpsSwitchStatus.');
            }
            if (objectId === null || objectId === undefined) {
                throw new RequiredError('objectId','Required parameter objectId was null or undefined when calling listIpsSwitchStatus.');
            }
            if (objectId !== null && objectId !== undefined) {
                localVarQueryParameter['object_id'] = objectId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 功能说明：自定义IPS规则详情，特性:根据路径输入的IPS ID查看对应的自定义IPS详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCustomerIpsInfo(showCustomerIpsInfoRequest?: ShowCustomerIpsInfoRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/ips/custom-rule/{ips_cfw_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let fwInstanceId;
            
            let ipsCfwId;
            
            let objectId;
            
            let projectId;

            if (showCustomerIpsInfoRequest !== null && showCustomerIpsInfoRequest !== undefined) {
                if (showCustomerIpsInfoRequest instanceof ShowCustomerIpsInfoRequest) {
                    fwInstanceId = showCustomerIpsInfoRequest.fwInstanceId;
                    ipsCfwId = showCustomerIpsInfoRequest.ipsCfwId;
                    objectId = showCustomerIpsInfoRequest.objectId;
                    projectId = showCustomerIpsInfoRequest.projectId;
                } else {
                    fwInstanceId = showCustomerIpsInfoRequest['fw_instance_id'];
                    ipsCfwId = showCustomerIpsInfoRequest['ips_cfw_id'];
                    objectId = showCustomerIpsInfoRequest['object_id'];
                    projectId = showCustomerIpsInfoRequest['project_id'];
                }
            }

        
            if (fwInstanceId === null || fwInstanceId === undefined) {
                throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling showCustomerIpsInfo.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (ipsCfwId === null || ipsCfwId === undefined) {
            throw new RequiredError('ipsCfwId','Required parameter ipsCfwId was null or undefined when calling showCustomerIpsInfo.');
            }
            if (objectId === null || objectId === undefined) {
                throw new RequiredError('objectId','Required parameter objectId was null or undefined when calling showCustomerIpsInfo.');
            }
            if (objectId !== null && objectId !== undefined) {
                localVarQueryParameter['object_id'] = objectId;
            }
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showCustomerIpsInfo.');
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'ips_cfw_id': ipsCfwId,'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取ips规则细节
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showIpsUpdateTime(showIpsUpdateTimeRequest?: ShowIpsUpdateTimeRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/ips-rule/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let fwInstanceId;
            
            let projectId;
            
            let enterpriseProjectId;

            if (showIpsUpdateTimeRequest !== null && showIpsUpdateTimeRequest !== undefined) {
                if (showIpsUpdateTimeRequest instanceof ShowIpsUpdateTimeRequest) {
                    fwInstanceId = showIpsUpdateTimeRequest.fwInstanceId;
                    projectId = showIpsUpdateTimeRequest.projectId;
                    enterpriseProjectId = showIpsUpdateTimeRequest.enterpriseProjectId;
                } else {
                    fwInstanceId = showIpsUpdateTimeRequest['fw_instance_id'];
                    projectId = showIpsUpdateTimeRequest['project_id'];
                    enterpriseProjectId = showIpsUpdateTimeRequest['enterprise_project_id'];
                }
            }

        
            if (fwInstanceId === null || fwInstanceId === undefined) {
                throw new RequiredError('fwInstanceId','Required parameter fwInstanceId was null or undefined when calling showIpsUpdateTime.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showIpsUpdateTime.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建频率ips规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAdvancedIpsRule(updateAdvancedIpsRuleRequest?: UpdateAdvancedIpsRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/advanced-ips-rule",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let fwInstanceId;
            
            let enterpriseProjectId;

            if (updateAdvancedIpsRuleRequest !== null && updateAdvancedIpsRuleRequest !== undefined) {
                if (updateAdvancedIpsRuleRequest instanceof UpdateAdvancedIpsRuleRequest) {
                    projectId = updateAdvancedIpsRuleRequest.projectId;
                    body = updateAdvancedIpsRuleRequest.body
                    fwInstanceId = updateAdvancedIpsRuleRequest.fwInstanceId;
                    enterpriseProjectId = updateAdvancedIpsRuleRequest.enterpriseProjectId;
                } else {
                    projectId = updateAdvancedIpsRuleRequest['project_id'];
                    body = updateAdvancedIpsRuleRequest['body'];
                    fwInstanceId = updateAdvancedIpsRuleRequest['fw_instance_id'];
                    enterpriseProjectId = updateAdvancedIpsRuleRequest['enterprise_project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling updateAdvancedIpsRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (fwInstanceId !== null && fwInstanceId !== undefined) {
                localVarQueryParameter['fw_instance_id'] = fwInstanceId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新自定义IPS规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateCustomerIps(updateCustomerIpsRequest?: UpdateCustomerIpsRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/ips/custom-rule/{ips_cfw_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let ipsCfwId;
            
            let projectId;

            if (updateCustomerIpsRequest !== null && updateCustomerIpsRequest !== undefined) {
                if (updateCustomerIpsRequest instanceof UpdateCustomerIpsRequest) {
                    ipsCfwId = updateCustomerIpsRequest.ipsCfwId;
                    projectId = updateCustomerIpsRequest.projectId;
                    body = updateCustomerIpsRequest.body
                } else {
                    ipsCfwId = updateCustomerIpsRequest['ips_cfw_id'];
                    projectId = updateCustomerIpsRequest['project_id'];
                    body = updateCustomerIpsRequest['body'];
                }
            }

        
            if (ipsCfwId === null || ipsCfwId === undefined) {
            throw new RequiredError('ipsCfwId','Required parameter ipsCfwId was null or undefined when calling updateCustomerIps.');
            }
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling updateCustomerIps.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'ips_cfw_id': ipsCfwId,'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): CfwClient {
    return new CfwClient(client);
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