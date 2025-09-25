import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { ASICAcceleratorInfo } from './model/ASICAcceleratorInfo';
import { AcceptScheduledEventRequest } from './model/AcceptScheduledEventRequest';
import { AcceptScheduledEventResponse } from './model/AcceptScheduledEventResponse';
import { AddServerGroupMemberRequest } from './model/AddServerGroupMemberRequest';
import { AddServerGroupMemberRequestBody } from './model/AddServerGroupMemberRequestBody';
import { AddServerGroupMemberResponse } from './model/AddServerGroupMemberResponse';
import { AssociateServerVirtualIpOption } from './model/AssociateServerVirtualIpOption';
import { AssociateServerVirtualIpRequest } from './model/AssociateServerVirtualIpRequest';
import { AssociateServerVirtualIpRequestBody } from './model/AssociateServerVirtualIpRequestBody';
import { AssociateServerVirtualIpResponse } from './model/AssociateServerVirtualIpResponse';
import { Association } from './model/Association';
import { AttachServerVolumeOption } from './model/AttachServerVolumeOption';
import { AttachServerVolumeRequest } from './model/AttachServerVolumeRequest';
import { AttachServerVolumeRequestBody } from './model/AttachServerVolumeRequestBody';
import { AttachServerVolumeResponse } from './model/AttachServerVolumeResponse';
import { AttachableQuantityForNic } from './model/AttachableQuantityForNic';
import { BatchAddServerNicOption } from './model/BatchAddServerNicOption';
import { BatchAddServerNicsRequest } from './model/BatchAddServerNicsRequest';
import { BatchAddServerNicsRequestBody } from './model/BatchAddServerNicsRequestBody';
import { BatchAddServerNicsResponse } from './model/BatchAddServerNicsResponse';
import { BatchAddServerTag } from './model/BatchAddServerTag';
import { BatchAttachSharableVolumesOption } from './model/BatchAttachSharableVolumesOption';
import { BatchAttachSharableVolumesRequest } from './model/BatchAttachSharableVolumesRequest';
import { BatchAttachSharableVolumesRequestBody } from './model/BatchAttachSharableVolumesRequestBody';
import { BatchAttachSharableVolumesResponse } from './model/BatchAttachSharableVolumesResponse';
import { BatchCreateServerTagsRequest } from './model/BatchCreateServerTagsRequest';
import { BatchCreateServerTagsRequestBody } from './model/BatchCreateServerTagsRequestBody';
import { BatchCreateServerTagsResponse } from './model/BatchCreateServerTagsResponse';
import { BatchDeleteServerNicOption } from './model/BatchDeleteServerNicOption';
import { BatchDeleteServerNicsRequest } from './model/BatchDeleteServerNicsRequest';
import { BatchDeleteServerNicsRequestBody } from './model/BatchDeleteServerNicsRequestBody';
import { BatchDeleteServerNicsResponse } from './model/BatchDeleteServerNicsResponse';
import { BatchDeleteServerTagsRequest } from './model/BatchDeleteServerTagsRequest';
import { BatchDeleteServerTagsRequestBody } from './model/BatchDeleteServerTagsRequestBody';
import { BatchDeleteServerTagsResponse } from './model/BatchDeleteServerTagsResponse';
import { BatchDetachVolumesRequest } from './model/BatchDetachVolumesRequest';
import { BatchDetachVolumesResponse } from './model/BatchDetachVolumesResponse';
import { BatchRebootServersRequest } from './model/BatchRebootServersRequest';
import { BatchRebootServersRequestBody } from './model/BatchRebootServersRequestBody';
import { BatchRebootServersResponse } from './model/BatchRebootServersResponse';
import { BatchRebootSeversOption } from './model/BatchRebootSeversOption';
import { BatchResetServersPasswordRequest } from './model/BatchResetServersPasswordRequest';
import { BatchResetServersPasswordRequestBody } from './model/BatchResetServersPasswordRequestBody';
import { BatchResetServersPasswordResponse } from './model/BatchResetServersPasswordResponse';
import { BatchResizeServersOption } from './model/BatchResizeServersOption';
import { BatchResizeServersReq } from './model/BatchResizeServersReq';
import { BatchResizeServersRequest } from './model/BatchResizeServersRequest';
import { BatchResizeServersResponse } from './model/BatchResizeServersResponse';
import { BatchStartServersOption } from './model/BatchStartServersOption';
import { BatchStartServersRequest } from './model/BatchStartServersRequest';
import { BatchStartServersRequestBody } from './model/BatchStartServersRequestBody';
import { BatchStartServersResponse } from './model/BatchStartServersResponse';
import { BatchStopServersOption } from './model/BatchStopServersOption';
import { BatchStopServersRequest } from './model/BatchStopServersRequest';
import { BatchStopServersRequestBody } from './model/BatchStopServersRequestBody';
import { BatchStopServersResponse } from './model/BatchStopServersResponse';
import { BatchUpdateServersNameRequest } from './model/BatchUpdateServersNameRequest';
import { BatchUpdateServersNameRequestBody } from './model/BatchUpdateServersNameRequestBody';
import { BatchUpdateServersNameResponse } from './model/BatchUpdateServersNameResponse';
import { BlockDeviceAttachableQuantity } from './model/BlockDeviceAttachableQuantity';
import { ChangeServerChargeModePrepaidOption } from './model/ChangeServerChargeModePrepaidOption';
import { ChangeServerChargeModeRequest } from './model/ChangeServerChargeModeRequest';
import { ChangeServerChargeModeRequestBody } from './model/ChangeServerChargeModeRequestBody';
import { ChangeServerChargeModeResponse } from './model/ChangeServerChargeModeResponse';
import { ChangeServerNetworkInterfaceRequest } from './model/ChangeServerNetworkInterfaceRequest';
import { ChangeServerNetworkInterfaceRequestBody } from './model/ChangeServerNetworkInterfaceRequestBody';
import { ChangeServerNetworkInterfaceResponse } from './model/ChangeServerNetworkInterfaceResponse';
import { ChangeServerOsWithCloudInitOption } from './model/ChangeServerOsWithCloudInitOption';
import { ChangeServerOsWithCloudInitRequest } from './model/ChangeServerOsWithCloudInitRequest';
import { ChangeServerOsWithCloudInitRequestBody } from './model/ChangeServerOsWithCloudInitRequestBody';
import { ChangeServerOsWithCloudInitResponse } from './model/ChangeServerOsWithCloudInitResponse';
import { ChangeServerOsWithoutCloudInitOption } from './model/ChangeServerOsWithoutCloudInitOption';
import { ChangeServerOsWithoutCloudInitRequest } from './model/ChangeServerOsWithoutCloudInitRequest';
import { ChangeServerOsWithoutCloudInitRequestBody } from './model/ChangeServerOsWithoutCloudInitRequestBody';
import { ChangeServerOsWithoutCloudInitResponse } from './model/ChangeServerOsWithoutCloudInitResponse';
import { ChangeSeversOsMetadata } from './model/ChangeSeversOsMetadata';
import { ChangeSeversOsMetadataWithoutCloudInitOption } from './model/ChangeSeversOsMetadataWithoutCloudInitOption';
import { ChangeVpcNicBody } from './model/ChangeVpcNicBody';
import { ChangeVpcRequest } from './model/ChangeVpcRequest';
import { ChangeVpcRequestBody } from './model/ChangeVpcRequestBody';
import { ChangeVpcResponse } from './model/ChangeVpcResponse';
import { ChangeVpcSecurityGroups } from './model/ChangeVpcSecurityGroups';
import { CloudServer } from './model/CloudServer';
import { CpuOptions } from './model/CpuOptions';
import { CreateLaunchTemplateRequest } from './model/CreateLaunchTemplateRequest';
import { CreateLaunchTemplateRequestBody } from './model/CreateLaunchTemplateRequestBody';
import { CreateLaunchTemplateResponse } from './model/CreateLaunchTemplateResponse';
import { CreatePostPaidServersRequest } from './model/CreatePostPaidServersRequest';
import { CreatePostPaidServersRequestBody } from './model/CreatePostPaidServersRequestBody';
import { CreatePostPaidServersResponse } from './model/CreatePostPaidServersResponse';
import { CreateServerGroupOption } from './model/CreateServerGroupOption';
import { CreateServerGroupRequest } from './model/CreateServerGroupRequest';
import { CreateServerGroupRequestBody } from './model/CreateServerGroupRequestBody';
import { CreateServerGroupResponse } from './model/CreateServerGroupResponse';
import { CreateServerGroupResult } from './model/CreateServerGroupResult';
import { CreateServerNicAllowedAddressPairs } from './model/CreateServerNicAllowedAddressPairs';
import { CreateServersRequest } from './model/CreateServersRequest';
import { CreateServersRequestBody } from './model/CreateServersRequestBody';
import { CreateServersResponse } from './model/CreateServersResponse';
import { DeleteLaunchTemplatesRequest } from './model/DeleteLaunchTemplatesRequest';
import { DeleteLaunchTemplatesResponse } from './model/DeleteLaunchTemplatesResponse';
import { DeleteRecycleBinServerRequest } from './model/DeleteRecycleBinServerRequest';
import { DeleteRecycleBinServerResponse } from './model/DeleteRecycleBinServerResponse';
import { DeleteServerGroupMemberRequest } from './model/DeleteServerGroupMemberRequest';
import { DeleteServerGroupMemberRequestBody } from './model/DeleteServerGroupMemberRequestBody';
import { DeleteServerGroupMemberResponse } from './model/DeleteServerGroupMemberResponse';
import { DeleteServerGroupRequest } from './model/DeleteServerGroupRequest';
import { DeleteServerGroupResponse } from './model/DeleteServerGroupResponse';
import { DeleteServerMetadataRequest } from './model/DeleteServerMetadataRequest';
import { DeleteServerMetadataResponse } from './model/DeleteServerMetadataResponse';
import { DeleteServerPasswordRequest } from './model/DeleteServerPasswordRequest';
import { DeleteServerPasswordResponse } from './model/DeleteServerPasswordResponse';
import { DeleteServersRequest } from './model/DeleteServersRequest';
import { DeleteServersRequestBody } from './model/DeleteServersRequestBody';
import { DeleteServersResponse } from './model/DeleteServersResponse';
import { DetachServerVolumeRequest } from './model/DetachServerVolumeRequest';
import { DetachServerVolumeResponse } from './model/DetachServerVolumeResponse';
import { DisassociateServerVirtualIpOption } from './model/DisassociateServerVirtualIpOption';
import { DisassociateServerVirtualIpRequest } from './model/DisassociateServerVirtualIpRequest';
import { DisassociateServerVirtualIpRequestBody } from './model/DisassociateServerVirtualIpRequestBody';
import { DisassociateServerVirtualIpResponse } from './model/DisassociateServerVirtualIpResponse';
import { EnclaveOptions } from './model/EnclaveOptions';
import { EventResponse } from './model/EventResponse';
import { EventResponseExecuteOptions } from './model/EventResponseExecuteOptions';
import { EventResponseSource } from './model/EventResponseSource';
import { ExecuteServerDumpRequest } from './model/ExecuteServerDumpRequest';
import { ExecuteServerDumpResponse } from './model/ExecuteServerDumpResponse';
import { ExecuteServerRedeployRequest } from './model/ExecuteServerRedeployRequest';
import { ExecuteServerRedeployResponse } from './model/ExecuteServerRedeployResponse';
import { Fault } from './model/Fault';
import { FixedIp } from './model/FixedIp';
import { Flavor } from './model/Flavor';
import { FlavorExtraSpec } from './model/FlavorExtraSpec';
import { FlavorLink } from './model/FlavorLink';
import { FlavorQuasar } from './model/FlavorQuasar';
import { FlavorSpotOptions } from './model/FlavorSpotOptions';
import { GetServerRemoteConsoleOption } from './model/GetServerRemoteConsoleOption';
import { GpuInfo } from './model/GpuInfo';
import { Hypervisor } from './model/Hypervisor';
import { Image } from './model/Image';
import { InterfaceAttachableQuantity } from './model/InterfaceAttachableQuantity';
import { InterfaceAttachment } from './model/InterfaceAttachment';
import { InterfaceExt } from './model/InterfaceExt';
import { Ipv6Bandwidth } from './model/Ipv6Bandwidth';
import { JobEntities } from './model/JobEntities';
import { LaunchTemplate } from './model/LaunchTemplate';
import { LaunchTemplateOption } from './model/LaunchTemplateOption';
import { Link } from './model/Link';
import { ListCloudServersRequest } from './model/ListCloudServersRequest';
import { ListCloudServersResponse } from './model/ListCloudServersResponse';
import { ListEventsResponsePageInfo } from './model/ListEventsResponsePageInfo';
import { ListFlavorSellPoliciesRequest } from './model/ListFlavorSellPoliciesRequest';
import { ListFlavorSellPoliciesResponse } from './model/ListFlavorSellPoliciesResponse';
import { ListFlavorSellPoliciesResult } from './model/ListFlavorSellPoliciesResult';
import { ListFlavorsRequest } from './model/ListFlavorsRequest';
import { ListFlavorsResponse } from './model/ListFlavorsResponse';
import { ListLaunchTemplateVersionsRequest } from './model/ListLaunchTemplateVersionsRequest';
import { ListLaunchTemplateVersionsResponse } from './model/ListLaunchTemplateVersionsResponse';
import { ListRecycleBinServersRequest } from './model/ListRecycleBinServersRequest';
import { ListRecycleBinServersResponse } from './model/ListRecycleBinServersResponse';
import { ListResizeFlavorsRequest } from './model/ListResizeFlavorsRequest';
import { ListResizeFlavorsResponse } from './model/ListResizeFlavorsResponse';
import { ListResizeFlavorsResult } from './model/ListResizeFlavorsResult';
import { ListScheduledEventsRequest } from './model/ListScheduledEventsRequest';
import { ListScheduledEventsResponse } from './model/ListScheduledEventsResponse';
import { ListServerAzInfo } from './model/ListServerAzInfo';
import { ListServerAzInfoRequest } from './model/ListServerAzInfoRequest';
import { ListServerAzInfoResponse } from './model/ListServerAzInfoResponse';
import { ListServerBlockDevicesRequest } from './model/ListServerBlockDevicesRequest';
import { ListServerBlockDevicesResponse } from './model/ListServerBlockDevicesResponse';
import { ListServerGroupsPageInfoResult } from './model/ListServerGroupsPageInfoResult';
import { ListServerGroupsRequest } from './model/ListServerGroupsRequest';
import { ListServerGroupsResponse } from './model/ListServerGroupsResponse';
import { ListServerGroupsResult } from './model/ListServerGroupsResult';
import { ListServerInterfacesRequest } from './model/ListServerInterfacesRequest';
import { ListServerInterfacesResponse } from './model/ListServerInterfacesResponse';
import { ListServerTagsRequest } from './model/ListServerTagsRequest';
import { ListServerTagsResponse } from './model/ListServerTagsResponse';
import { ListServerVolumeAttachmentsRequest } from './model/ListServerVolumeAttachmentsRequest';
import { ListServerVolumeAttachmentsResponse } from './model/ListServerVolumeAttachmentsResponse';
import { ListServersByTagRequest } from './model/ListServersByTagRequest';
import { ListServersByTagRequestBody } from './model/ListServersByTagRequestBody';
import { ListServersByTagResponse } from './model/ListServersByTagResponse';
import { ListServersDetailsRequest } from './model/ListServersDetailsRequest';
import { ListServersDetailsResponse } from './model/ListServersDetailsResponse';
import { ListTemplatesRequest } from './model/ListTemplatesRequest';
import { ListTemplatesResponse } from './model/ListTemplatesResponse';
import { MarketModel } from './model/MarketModel';
import { MarketModelPrepaidInfo } from './model/MarketModelPrepaidInfo';
import { MigrateServerOption } from './model/MigrateServerOption';
import { MigrateServerRequest } from './model/MigrateServerRequest';
import { MigrateServerRequestBody } from './model/MigrateServerRequestBody';
import { MigrateServerResponse } from './model/MigrateServerResponse';
import { NetworkAddresses } from './model/NetworkAddresses';
import { NetworkInterfaces } from './model/NetworkInterfaces';
import { NovaAddSecurityGroupOption } from './model/NovaAddSecurityGroupOption';
import { NovaAssociateSecurityGroupRequest } from './model/NovaAssociateSecurityGroupRequest';
import { NovaAssociateSecurityGroupRequestBody } from './model/NovaAssociateSecurityGroupRequestBody';
import { NovaAssociateSecurityGroupResponse } from './model/NovaAssociateSecurityGroupResponse';
import { NovaAttachInterfaceFixedIp } from './model/NovaAttachInterfaceFixedIp';
import { NovaAttachInterfaceOption } from './model/NovaAttachInterfaceOption';
import { NovaAttachInterfaceRequest } from './model/NovaAttachInterfaceRequest';
import { NovaAttachInterfaceRequestBody } from './model/NovaAttachInterfaceRequestBody';
import { NovaAttachInterfaceResponse } from './model/NovaAttachInterfaceResponse';
import { NovaAvailabilityZone } from './model/NovaAvailabilityZone';
import { NovaAvailabilityZoneState } from './model/NovaAvailabilityZoneState';
import { NovaCreateKeypairOption } from './model/NovaCreateKeypairOption';
import { NovaCreateKeypairRequest } from './model/NovaCreateKeypairRequest';
import { NovaCreateKeypairRequestBody } from './model/NovaCreateKeypairRequestBody';
import { NovaCreateKeypairResponse } from './model/NovaCreateKeypairResponse';
import { NovaCreateServersOption } from './model/NovaCreateServersOption';
import { NovaCreateServersRequest } from './model/NovaCreateServersRequest';
import { NovaCreateServersRequestBody } from './model/NovaCreateServersRequestBody';
import { NovaCreateServersResponse } from './model/NovaCreateServersResponse';
import { NovaCreateServersResult } from './model/NovaCreateServersResult';
import { NovaCreateServersSchedulerHint } from './model/NovaCreateServersSchedulerHint';
import { NovaDeleteKeypairRequest } from './model/NovaDeleteKeypairRequest';
import { NovaDeleteKeypairResponse } from './model/NovaDeleteKeypairResponse';
import { NovaDeleteServerRequest } from './model/NovaDeleteServerRequest';
import { NovaDeleteServerResponse } from './model/NovaDeleteServerResponse';
import { NovaDisassociateSecurityGroupRequest } from './model/NovaDisassociateSecurityGroupRequest';
import { NovaDisassociateSecurityGroupRequestBody } from './model/NovaDisassociateSecurityGroupRequestBody';
import { NovaDisassociateSecurityGroupResponse } from './model/NovaDisassociateSecurityGroupResponse';
import { NovaKeypair } from './model/NovaKeypair';
import { NovaKeypairDetail } from './model/NovaKeypairDetail';
import { NovaLink } from './model/NovaLink';
import { NovaListAvailabilityZonesRequest } from './model/NovaListAvailabilityZonesRequest';
import { NovaListAvailabilityZonesResponse } from './model/NovaListAvailabilityZonesResponse';
import { NovaListKeypairsRequest } from './model/NovaListKeypairsRequest';
import { NovaListKeypairsResponse } from './model/NovaListKeypairsResponse';
import { NovaListKeypairsResult } from './model/NovaListKeypairsResult';
import { NovaListServerSecurityGroupsRequest } from './model/NovaListServerSecurityGroupsRequest';
import { NovaListServerSecurityGroupsResponse } from './model/NovaListServerSecurityGroupsResponse';
import { NovaListServersDetailsRequest } from './model/NovaListServersDetailsRequest';
import { NovaListServersDetailsResponse } from './model/NovaListServersDetailsResponse';
import { NovaListServersRequest } from './model/NovaListServersRequest';
import { NovaListServersResponse } from './model/NovaListServersResponse';
import { NovaListVersionsRequest } from './model/NovaListVersionsRequest';
import { NovaListVersionsResponse } from './model/NovaListVersionsResponse';
import { NovaNetwork } from './model/NovaNetwork';
import { NovaRemoveSecurityGroupOption } from './model/NovaRemoveSecurityGroupOption';
import { NovaSecurityGroup } from './model/NovaSecurityGroup';
import { NovaSecurityGroupCommonGroup } from './model/NovaSecurityGroupCommonGroup';
import { NovaSecurityGroupCommonIpRange } from './model/NovaSecurityGroupCommonIpRange';
import { NovaSecurityGroupCommonRule } from './model/NovaSecurityGroupCommonRule';
import { NovaServer } from './model/NovaServer';
import { NovaServerBlockDeviceMapping } from './model/NovaServerBlockDeviceMapping';
import { NovaServerFault } from './model/NovaServerFault';
import { NovaServerFlavor } from './model/NovaServerFlavor';
import { NovaServerImage } from './model/NovaServerImage';
import { NovaServerInterfaceDetail } from './model/NovaServerInterfaceDetail';
import { NovaServerInterfaceFixedIp } from './model/NovaServerInterfaceFixedIp';
import { NovaServerNetwork } from './model/NovaServerNetwork';
import { NovaServerSchedulerHints } from './model/NovaServerSchedulerHints';
import { NovaServerSecurityGroup } from './model/NovaServerSecurityGroup';
import { NovaServerVolume } from './model/NovaServerVolume';
import { NovaShowFlavorExtraSpecsRequest } from './model/NovaShowFlavorExtraSpecsRequest';
import { NovaShowFlavorExtraSpecsResponse } from './model/NovaShowFlavorExtraSpecsResponse';
import { NovaShowKeypairRequest } from './model/NovaShowKeypairRequest';
import { NovaShowKeypairResponse } from './model/NovaShowKeypairResponse';
import { NovaShowServerInterfaceRequest } from './model/NovaShowServerInterfaceRequest';
import { NovaShowServerInterfaceResponse } from './model/NovaShowServerInterfaceResponse';
import { NovaShowServerRequest } from './model/NovaShowServerRequest';
import { NovaShowServerResponse } from './model/NovaShowServerResponse';
import { NovaShowVersionRequest } from './model/NovaShowVersionRequest';
import { NovaShowVersionResponse } from './model/NovaShowVersionResponse';
import { NovaSimpleKeypair } from './model/NovaSimpleKeypair';
import { NovaSimpleServer } from './model/NovaSimpleServer';
import { NovaVersion } from './model/NovaVersion';
import { NovaVersionDetail } from './model/NovaVersionDetail';
import { NovaVersionMediaType } from './model/NovaVersionMediaType';
import { PageLink } from './model/PageLink';
import { PostPaidServer } from './model/PostPaidServer';
import { PostPaidServerDataVolume } from './model/PostPaidServerDataVolume';
import { PostPaidServerDataVolumeExtendParam } from './model/PostPaidServerDataVolumeExtendParam';
import { PostPaidServerDataVolumeMetadata } from './model/PostPaidServerDataVolumeMetadata';
import { PostPaidServerEip } from './model/PostPaidServerEip';
import { PostPaidServerEipBandwidth } from './model/PostPaidServerEipBandwidth';
import { PostPaidServerEipExtendParam } from './model/PostPaidServerEipExtendParam';
import { PostPaidServerExtendParam } from './model/PostPaidServerExtendParam';
import { PostPaidServerIpv6Bandwidth } from './model/PostPaidServerIpv6Bandwidth';
import { PostPaidServerNic } from './model/PostPaidServerNic';
import { PostPaidServerPublicip } from './model/PostPaidServerPublicip';
import { PostPaidServerRootVolume } from './model/PostPaidServerRootVolume';
import { PostPaidServerRootVolumeExtendParam } from './model/PostPaidServerRootVolumeExtendParam';
import { PostPaidServerRootVolumeMetadata } from './model/PostPaidServerRootVolumeMetadata';
import { PostPaidServerSchedulerHints } from './model/PostPaidServerSchedulerHints';
import { PostPaidServerSecurityGroup } from './model/PostPaidServerSecurityGroup';
import { PostPaidServerTag } from './model/PostPaidServerTag';
import { PrePaidServer } from './model/PrePaidServer';
import { PrePaidServerDataVolume } from './model/PrePaidServerDataVolume';
import { PrePaidServerDataVolumeExtendParam } from './model/PrePaidServerDataVolumeExtendParam';
import { PrePaidServerDataVolumeMetadata } from './model/PrePaidServerDataVolumeMetadata';
import { PrePaidServerEip } from './model/PrePaidServerEip';
import { PrePaidServerEipBandwidth } from './model/PrePaidServerEipBandwidth';
import { PrePaidServerEipExtendParam } from './model/PrePaidServerEipExtendParam';
import { PrePaidServerExtendParam } from './model/PrePaidServerExtendParam';
import { PrePaidServerIpv6Bandwidth } from './model/PrePaidServerIpv6Bandwidth';
import { PrePaidServerNic } from './model/PrePaidServerNic';
import { PrePaidServerPublicip } from './model/PrePaidServerPublicip';
import { PrePaidServerRootVolume } from './model/PrePaidServerRootVolume';
import { PrePaidServerRootVolumeExtendParam } from './model/PrePaidServerRootVolumeExtendParam';
import { PrePaidServerRootVolumeMetadata } from './model/PrePaidServerRootVolumeMetadata';
import { PrePaidServerSchedulerHints } from './model/PrePaidServerSchedulerHints';
import { PrePaidServerSecurityGroup } from './model/PrePaidServerSecurityGroup';
import { PrePaidServerTag } from './model/PrePaidServerTag';
import { ProjectFlavorLimit } from './model/ProjectFlavorLimit';
import { ProjectTag } from './model/ProjectTag';
import { Promotion } from './model/Promotion';
import { QueryFlavorCapacityAzInfo } from './model/QueryFlavorCapacityAzInfo';
import { RecycleBinPolicys } from './model/RecycleBinPolicys';
import { RegisterServerMonitorRequest } from './model/RegisterServerMonitorRequest';
import { RegisterServerMonitorRequestBody } from './model/RegisterServerMonitorRequestBody';
import { RegisterServerMonitorResponse } from './model/RegisterServerMonitorResponse';
import { ReinstallServerWithCloudInitOption } from './model/ReinstallServerWithCloudInitOption';
import { ReinstallServerWithCloudInitRequest } from './model/ReinstallServerWithCloudInitRequest';
import { ReinstallServerWithCloudInitRequestBody } from './model/ReinstallServerWithCloudInitRequestBody';
import { ReinstallServerWithCloudInitResponse } from './model/ReinstallServerWithCloudInitResponse';
import { ReinstallServerWithoutCloudInitOption } from './model/ReinstallServerWithoutCloudInitOption';
import { ReinstallServerWithoutCloudInitRequest } from './model/ReinstallServerWithoutCloudInitRequest';
import { ReinstallServerWithoutCloudInitRequestBody } from './model/ReinstallServerWithoutCloudInitRequestBody';
import { ReinstallServerWithoutCloudInitResponse } from './model/ReinstallServerWithoutCloudInitResponse';
import { ReinstallSeverMetadata } from './model/ReinstallSeverMetadata';
import { ReinstallSeverMetadataWithoutCloudInitOption } from './model/ReinstallSeverMetadataWithoutCloudInitOption';
import { ResetServerPasswordOption } from './model/ResetServerPasswordOption';
import { ResetServerPasswordRequest } from './model/ResetServerPasswordRequest';
import { ResetServerPasswordRequestBody } from './model/ResetServerPasswordRequestBody';
import { ResetServerPasswordResponse } from './model/ResetServerPasswordResponse';
import { ResizePostPaidServerOption } from './model/ResizePostPaidServerOption';
import { ResizePostPaidServerRequest } from './model/ResizePostPaidServerRequest';
import { ResizePostPaidServerRequestBody } from './model/ResizePostPaidServerRequestBody';
import { ResizePostPaidServerResponse } from './model/ResizePostPaidServerResponse';
import { ResizePrePaidServerOption } from './model/ResizePrePaidServerOption';
import { ResizeServerExtendParam } from './model/ResizeServerExtendParam';
import { ResizeServerRequest } from './model/ResizeServerRequest';
import { ResizeServerRequestBody } from './model/ResizeServerRequestBody';
import { ResizeServerResponse } from './model/ResizeServerResponse';
import { ResourceTag } from './model/ResourceTag';
import { ResponsePageInfoV3 } from './model/ResponsePageInfoV3';
import { RevertRecycleBinServerRequest } from './model/RevertRecycleBinServerRequest';
import { RevertRecycleBinServerResponse } from './model/RevertRecycleBinServerResponse';
import { ScheduledEventAcceptBody } from './model/ScheduledEventAcceptBody';
import { ScheduledEventUpdateBody } from './model/ScheduledEventUpdateBody';
import { SecurityGroup } from './model/SecurityGroup';
import { SecurityOptions } from './model/SecurityOptions';
import { SerialConsoleOptions } from './model/SerialConsoleOptions';
import { ServerAddress } from './model/ServerAddress';
import { ServerAttachableQuantity } from './model/ServerAttachableQuantity';
import { ServerBlockDevice } from './model/ServerBlockDevice';
import { ServerDetail } from './model/ServerDetail';
import { ServerExtendVolumeAttachment } from './model/ServerExtendVolumeAttachment';
import { ServerFlavor } from './model/ServerFlavor';
import { ServerGroupMember } from './model/ServerGroupMember';
import { ServerId } from './model/ServerId';
import { ServerImage } from './model/ServerImage';
import { ServerInterfaceFixedIp } from './model/ServerInterfaceFixedIp';
import { ServerLimits } from './model/ServerLimits';
import { ServerNicSecurityGroup } from './model/ServerNicSecurityGroup';
import { ServerRemoteConsole } from './model/ServerRemoteConsole';
import { ServerResource } from './model/ServerResource';
import { ServerSchedulerHints } from './model/ServerSchedulerHints';
import { ServerSecurityGroup } from './model/ServerSecurityGroup';
import { ServerSystemTag } from './model/ServerSystemTag';
import { ServerTag } from './model/ServerTag';
import { ServerTagMatch } from './model/ServerTagMatch';
import { ServerTags } from './model/ServerTags';
import { ServerVolumeAttachment } from './model/ServerVolumeAttachment';
import { ShowAppendableVolumeQuotaRequest } from './model/ShowAppendableVolumeQuotaRequest';
import { ShowAppendableVolumeQuotaResponse } from './model/ShowAppendableVolumeQuotaResponse';
import { ShowFlavorCapacityRequest } from './model/ShowFlavorCapacityRequest';
import { ShowFlavorCapacityResponse } from './model/ShowFlavorCapacityResponse';
import { ShowJobRequest } from './model/ShowJobRequest';
import { ShowJobResponse } from './model/ShowJobResponse';
import { ShowMetadataOptionsRequest } from './model/ShowMetadataOptionsRequest';
import { ShowMetadataOptionsResponse } from './model/ShowMetadataOptionsResponse';
import { ShowRecycleBinRequest } from './model/ShowRecycleBinRequest';
import { ShowRecycleBinResponse } from './model/ShowRecycleBinResponse';
import { ShowResetPasswordFlagRequest } from './model/ShowResetPasswordFlagRequest';
import { ShowResetPasswordFlagResponse } from './model/ShowResetPasswordFlagResponse';
import { ShowSerialConsoleActionsOption } from './model/ShowSerialConsoleActionsOption';
import { ShowSerialConsoleActionsRequest } from './model/ShowSerialConsoleActionsRequest';
import { ShowSerialConsoleActionsResponse } from './model/ShowSerialConsoleActionsResponse';
import { ShowServerAttachableNicNumRequest } from './model/ShowServerAttachableNicNumRequest';
import { ShowServerAttachableNicNumResponse } from './model/ShowServerAttachableNicNumResponse';
import { ShowServerBlockDeviceRequest } from './model/ShowServerBlockDeviceRequest';
import { ShowServerBlockDeviceResponse } from './model/ShowServerBlockDeviceResponse';
import { ShowServerGroupRequest } from './model/ShowServerGroupRequest';
import { ShowServerGroupResponse } from './model/ShowServerGroupResponse';
import { ShowServerGroupResult } from './model/ShowServerGroupResult';
import { ShowServerLimitsRequest } from './model/ShowServerLimitsRequest';
import { ShowServerLimitsResponse } from './model/ShowServerLimitsResponse';
import { ShowServerPasswordRequest } from './model/ShowServerPasswordRequest';
import { ShowServerPasswordResponse } from './model/ShowServerPasswordResponse';
import { ShowServerRemoteConsoleRequest } from './model/ShowServerRemoteConsoleRequest';
import { ShowServerRemoteConsoleRequestBody } from './model/ShowServerRemoteConsoleRequestBody';
import { ShowServerRemoteConsoleResponse } from './model/ShowServerRemoteConsoleResponse';
import { ShowServerRequest } from './model/ShowServerRequest';
import { ShowServerResponse } from './model/ShowServerResponse';
import { ShowServerTagsRequest } from './model/ShowServerTagsRequest';
import { ShowServerTagsResponse } from './model/ShowServerTagsResponse';
import { SimpleFlavor } from './model/SimpleFlavor';
import { SubJob } from './model/SubJob';
import { SubJobEntities } from './model/SubJobEntities';
import { TemplateBandwidthOption } from './model/TemplateBandwidthOption';
import { TemplateBlockDeviceMappingAttachmentOption } from './model/TemplateBlockDeviceMappingAttachmentOption';
import { TemplateBlockDeviceMappingOption } from './model/TemplateBlockDeviceMappingOption';
import { TemplateData } from './model/TemplateData';
import { TemplateInternetAccessOption } from './model/TemplateInternetAccessOption';
import { TemplateMarketOptions } from './model/TemplateMarketOptions';
import { TemplateNetworkInterfaceAttachmentOption } from './model/TemplateNetworkInterfaceAttachmentOption';
import { TemplateNetworkInterfaceOption } from './model/TemplateNetworkInterfaceOption';
import { TemplateOsProfile } from './model/TemplateOsProfile';
import { TemplatePublicIpOption } from './model/TemplatePublicIpOption';
import { TemplateSpotOptions } from './model/TemplateSpotOptions';
import { TemplateTag } from './model/TemplateTag';
import { TemplateTagOptions } from './model/TemplateTagOptions';
import { TemplateVersion } from './model/TemplateVersion';
import { UpdateMetadataOptionsRequest } from './model/UpdateMetadataOptionsRequest';
import { UpdateMetadataOptionsResponse } from './model/UpdateMetadataOptionsResponse';
import { UpdateNicInfoRequestBody } from './model/UpdateNicInfoRequestBody';
import { UpdateRecycleBinOption } from './model/UpdateRecycleBinOption';
import { UpdateRecycleBinPolicyOption } from './model/UpdateRecycleBinPolicyOption';
import { UpdateRecycleBinPolicyReq } from './model/UpdateRecycleBinPolicyReq';
import { UpdateRecycleBinPolicyRequest } from './model/UpdateRecycleBinPolicyRequest';
import { UpdateRecycleBinPolicyResponse } from './model/UpdateRecycleBinPolicyResponse';
import { UpdateRecycleBinReq } from './model/UpdateRecycleBinReq';
import { UpdateRecycleBinRequest } from './model/UpdateRecycleBinRequest';
import { UpdateRecycleBinResponse } from './model/UpdateRecycleBinResponse';
import { UpdateScheduledEventRequest } from './model/UpdateScheduledEventRequest';
import { UpdateScheduledEventResponse } from './model/UpdateScheduledEventResponse';
import { UpdateSerialConsoleOptionsOption } from './model/UpdateSerialConsoleOptionsOption';
import { UpdateSerialConsoleOptionsRequest } from './model/UpdateSerialConsoleOptionsRequest';
import { UpdateSerialConsoleOptionsRequestBody } from './model/UpdateSerialConsoleOptionsRequestBody';
import { UpdateSerialConsoleOptionsResponse } from './model/UpdateSerialConsoleOptionsResponse';
import { UpdateServerAddress } from './model/UpdateServerAddress';
import { UpdateServerAutoTerminateTimeRequest } from './model/UpdateServerAutoTerminateTimeRequest';
import { UpdateServerAutoTerminateTimeRequestBody } from './model/UpdateServerAutoTerminateTimeRequestBody';
import { UpdateServerAutoTerminateTimeResponse } from './model/UpdateServerAutoTerminateTimeResponse';
import { UpdateServerBlockDeviceOption } from './model/UpdateServerBlockDeviceOption';
import { UpdateServerBlockDeviceReq } from './model/UpdateServerBlockDeviceReq';
import { UpdateServerBlockDeviceRequest } from './model/UpdateServerBlockDeviceRequest';
import { UpdateServerBlockDeviceResponse } from './model/UpdateServerBlockDeviceResponse';
import { UpdateServerInterfaceRequest } from './model/UpdateServerInterfaceRequest';
import { UpdateServerInterfaceResponse } from './model/UpdateServerInterfaceResponse';
import { UpdateServerMetadataOptionsRequestBody } from './model/UpdateServerMetadataOptionsRequestBody';
import { UpdateServerMetadataRequest } from './model/UpdateServerMetadataRequest';
import { UpdateServerMetadataRequestBody } from './model/UpdateServerMetadataRequestBody';
import { UpdateServerMetadataResponse } from './model/UpdateServerMetadataResponse';
import { UpdateServerOption } from './model/UpdateServerOption';
import { UpdateServerRequest } from './model/UpdateServerRequest';
import { UpdateServerRequestBody } from './model/UpdateServerRequestBody';
import { UpdateServerResponse } from './model/UpdateServerResponse';
import { UpdateServerResult } from './model/UpdateServerResult';
import { VolumeAttach } from './model/VolumeAttach';
import { VolumeBatchDetachRequest } from './model/VolumeBatchDetachRequest';

export class EcsClient {
    public static newBuilder(): ClientBuilder<EcsClient> {
            let client = new ClientBuilder<EcsClient>(newClient);
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
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 接受并授权执行计划事件操作
     * @param {string} id resource id
     * @param {ScheduledEventAcceptBody} scheduledEventAcceptBody 修改计划事件计划执行开始时间
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public acceptScheduledEvent(acceptScheduledEventRequest?: AcceptScheduledEventRequest): Promise<AcceptScheduledEventResponse> {
        const options = ParamCreater().acceptScheduledEvent(acceptScheduledEventRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将云服务器加入云服务器组。添加成功后，如果该云服务器组是反亲和性策略的，则该云服务器与云服务器组中的其他成员尽量分散地创建在不同主机上。如果该云服务器时故障域类型的，则该云服务器会拥有故障域属性。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加云服务器组成员
     * @param {string} serverGroupId 云服务器组ID。
     * @param {AddServerGroupMemberRequestBody} addServerGroupMemberRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addServerGroupMember(addServerGroupMemberRequest?: AddServerGroupMemberRequest): Promise<AddServerGroupMemberResponse> {
        const options = ParamCreater().addServerGroupMember(addServerGroupMemberRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 虚拟IP地址用于为网卡提供第二个IP地址，同时支持与多个弹性云服务器的网卡绑定，从而实现多个弹性云服务器之间的高可用性。
     * 
     * 该接口用于给云服务器网卡配置虚拟IP地址：
     * 
     * - 当指定的IP地址是一个不存在的虚拟IP地址时，系统会创建该虚拟IP，并绑定至对应网卡。
     * 
     * - 当指定的IP地址是一个已经创建好的私有IP时，系统会将指定的网卡和虚拟IP绑定。如果该IP的device_owner为空，则仅支持VPC内二三层通信；如果该IP的device_owner为neutron:VIP_PORT，则支持VPC内二三层通信、VPC之间对等连接访问，以及弹性公网IP、VPN、云专线等Internet接入。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 云服务器网卡配置虚拟IP地址
     * @param {string} nicId 云服务器网卡ID。
     * @param {AssociateServerVirtualIpRequestBody} associateServerVirtualIpRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateServerVirtualIp(associateServerVirtualIpRequest?: AssociateServerVirtualIpRequest): Promise<AssociateServerVirtualIpResponse> {
        const options = ParamCreater().associateServerVirtualIp(associateServerVirtualIpRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 把磁盘挂载到弹性云服务器上。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 弹性云服务器挂载磁盘
     * @param {string} serverId 云服务器ID。
     * @param {AttachServerVolumeRequestBody} attachServerVolumeRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public attachServerVolume(attachServerVolumeRequest?: AttachServerVolumeRequest): Promise<AttachServerVolumeResponse> {
        const options = ParamCreater().attachServerVolume(attachServerVolumeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 给云服务器添加一张或多张网卡。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加云服务器网卡
     * @param {string} serverId 云服务器ID。
     * @param {BatchAddServerNicsRequestBody} batchAddServerNicsRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchAddServerNics(batchAddServerNicsRequest?: BatchAddServerNicsRequest): Promise<BatchAddServerNicsResponse> {
        const options = ParamCreater().batchAddServerNics(batchAddServerNicsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将指定的共享磁盘一次性挂载到多个弹性云服务器，实现批量挂载。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量挂载指定共享盘
     * @param {string} volumeId 共享磁盘ID。
     * @param {BatchAttachSharableVolumesRequestBody} batchAttachSharableVolumesRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchAttachSharableVolumes(batchAttachSharableVolumesRequest?: BatchAttachSharableVolumesRequest): Promise<BatchAttachSharableVolumesResponse> {
        const options = ParamCreater().batchAttachSharableVolumes(batchAttachSharableVolumesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 为指定云服务器批量添加标签。
     * 
     * - 标签管理服务TMS使用该接口批量管理云服务器的标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加云服务器标签
     * @param {string} serverId 云服务器ID。
     * @param {BatchCreateServerTagsRequestBody} batchCreateServerTagsRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateServerTags(batchCreateServerTagsRequest?: BatchCreateServerTagsRequest): Promise<BatchCreateServerTagsResponse> {
        const options = ParamCreater().batchCreateServerTags(batchCreateServerTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 卸载并删除云服务器中的一张或多张网卡。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除云服务器网卡
     * @param {string} serverId 云服务器ID。
     * @param {BatchDeleteServerNicsRequestBody} batchDeleteServerNicsRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteServerNics(batchDeleteServerNicsRequest?: BatchDeleteServerNicsRequest): Promise<BatchDeleteServerNicsResponse> {
        const options = ParamCreater().batchDeleteServerNics(batchDeleteServerNicsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 为指定云服务器批量删除标签。
     * 
     * - 标签管理服务TMS使用该接口批量管理云服务器的标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除云服务器标签
     * @param {string} serverId 云服务器ID。
     * @param {BatchDeleteServerTagsRequestBody} batchDeleteServerTagsRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteServerTags(batchDeleteServerTagsRequest?: BatchDeleteServerTagsRequest): Promise<BatchDeleteServerTagsResponse> {
        const options = ParamCreater().batchDeleteServerTags(batchDeleteServerTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量卸载卷
     * @param {string} volumeId 卷ID。
     * @param {VolumeBatchDetachRequest} volumeBatchDetachRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDetachVolumes(batchDetachVolumesRequest?: BatchDetachVolumesRequest): Promise<BatchDetachVolumesResponse> {
        const options = ParamCreater().batchDetachVolumes(batchDetachVolumesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据给定的云服务器ID列表，批量重启云服务器，一次最多可以重启1000台。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量重启云服务器
     * @param {BatchRebootServersRequestBody} batchRebootServersRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchRebootServers(batchRebootServersRequest?: BatchRebootServersRequest): Promise<BatchRebootServersResponse> {
        const options = ParamCreater().batchRebootServers(batchRebootServersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量重置弹性云服务器管理帐号（root用户或Administrator用户）的密码。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量重置弹性云服务器密码
     * @param {BatchResetServersPasswordRequestBody} batchResetServersPasswordRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchResetServersPassword(batchResetServersPasswordRequest?: BatchResetServersPasswordRequest): Promise<BatchResetServersPasswordResponse> {
        const options = ParamCreater().batchResetServersPassword(batchResetServersPasswordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量变更云服务器规格
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量变更云服务器规格
     * @param {BatchResizeServersReq} batchResizeServersReq 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchResizeServers(batchResizeServersRequest?: BatchResizeServersRequest): Promise<BatchResizeServersResponse> {
        const options = ParamCreater().batchResizeServers(batchResizeServersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据给定的云服务器ID列表，批量启动云服务器，一次最多可以启动1000台。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量启动云服务器
     * @param {BatchStartServersRequestBody} batchStartServersRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchStartServers(batchStartServersRequest?: BatchStartServersRequest): Promise<BatchStartServersResponse> {
        const options = ParamCreater().batchStartServers(batchStartServersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据给定的云服务器ID列表，批量关闭云服务器，一次最多可以关闭1000台。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量关闭云服务器
     * @param {BatchStopServersRequestBody} batchStopServersRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchStopServers(batchStopServersRequest?: BatchStopServersRequest): Promise<BatchStopServersResponse> {
        const options = ParamCreater().batchStopServers(batchStopServersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量修改弹性云服务器信息。
     * 当前仅支持批量修改云服务器名称，一次最多可以修改1000台。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量修改弹性云服务器
     * @param {BatchUpdateServersNameRequestBody} batchUpdateServersNameRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUpdateServersName(batchUpdateServersNameRequest?: BatchUpdateServersNameRequest): Promise<BatchUpdateServersNameResponse> {
        const options = ParamCreater().batchUpdateServersName(batchUpdateServersNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更换云服务器的计费模式
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更换云服务器计费模式
     * @param {ChangeServerChargeModeRequestBody} changeServerChargeModeRequestBody This is a change server charge mode Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeServerChargeMode(changeServerChargeModeRequest?: ChangeServerChargeModeRequest): Promise<ChangeServerChargeModeResponse> {
        const options = ParamCreater().changeServerChargeMode(changeServerChargeModeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新云服务器指定网卡属性，当前仅支持更新网卡IP。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新云服务器指定网卡属性
     * @param {string} portId 网卡port id
     * @param {string} serverId 云服务器ID。
     * @param {ChangeServerNetworkInterfaceRequestBody} changeServerNetworkInterfaceRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeServerNetworkInterface(changeServerNetworkInterfaceRequest?: ChangeServerNetworkInterfaceRequest): Promise<ChangeServerNetworkInterfaceResponse> {
        const options = ParamCreater().changeServerNetworkInterface(changeServerNetworkInterfaceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 切换弹性云服务器操作系统。支持弹性云服务器数据盘不变的情况下，使用新镜像重装系统盘。
     * 
     * 调用该接口后，系统将卸载系统盘，然后使用新镜像重新创建系统盘，并挂载至弹性云服务器，实现切换操作系统功能。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 切换弹性云服务器操作系统(安装Cloud init)
     * @param {string} serverId 云服务器ID。
     * @param {ChangeServerOsWithCloudInitRequestBody} changeServerOsWithCloudInitRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeServerOsWithCloudInit(changeServerOsWithCloudInitRequest?: ChangeServerOsWithCloudInitRequest): Promise<ChangeServerOsWithCloudInitResponse> {
        const options = ParamCreater().changeServerOsWithCloudInit(changeServerOsWithCloudInitRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 切换弹性云服务器操作系统。
     * 
     * 该接口支持未安装Cloud-init或Cloudbase-init的镜像使用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 切换弹性云服务器操作系统(未安装Cloud init)
     * @param {string} serverId 云服务器ID。
     * @param {ChangeServerOsWithoutCloudInitRequestBody} changeServerOsWithoutCloudInitRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeServerOsWithoutCloudInit(changeServerOsWithoutCloudInitRequest?: ChangeServerOsWithoutCloudInitRequest): Promise<ChangeServerOsWithoutCloudInitResponse> {
        const options = ParamCreater().changeServerOsWithoutCloudInit(changeServerOsWithoutCloudInitRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 云服务器切换虚拟私有云。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 云服务器切换虚拟私有云
     * @param {string} serverId 云服务器ID。
     * @param {ChangeVpcRequestBody} changeOsRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeVpc(changeVpcRequest?: ChangeVpcRequest): Promise<ChangeVpcResponse> {
        const options = ParamCreater().changeVpc(changeVpcRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建启动模板。将创建一个全新的模板，并自动生成版本号为1的作为默认版本。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建模板
     * @param {CreateLaunchTemplateRequestBody} createLaunchTemplateRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createLaunchTemplate(createLaunchTemplateRequest?: CreateLaunchTemplateRequest): Promise<CreateLaunchTemplateResponse> {
        const options = ParamCreater().createLaunchTemplate(createLaunchTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建一台或多台[按需付费](https://support.huaweicloud.com/productdesc-ecs/ecs_01_0065.html)方式的云服务器。
     * 
     * 弹性云服务器的登录鉴权方式包括两种：密钥对、密码。为安全起见，推荐使用密钥对方式。
     * 
     * - 密钥对
     * 密钥对指使用密钥对作为弹性云服务器的鉴权方式。
     * 接口调用方法：使用key_name字段，指定弹性云服务器登录时使用的密钥文件。
     * 
     * - 密码
     * 密码指使用设置初始密码方式作为弹性云服务器的鉴权方式，此时，您可以通过用户名密码方式登录弹性云服务器，Linux操作系统时为root用户的初始密码，Windows操作系统时为Administrator用户的初始密码。
     * 
     * 接口调用方法：使用adminPass字段，指定管理员帐号的初始登录密码。对于镜像已安装Cloud-init的Linux云服务器，如果需要使用密文密码，可以使用user_data字段进行密码注入。
     * 
     * &gt; 对于安装Cloud-init镜像的Linux云服务器云主机，若指定user_data字段，则adminPass字段无效。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建云服务器(按需)
     * @param {CreatePostPaidServersRequestBody} createPostPaidServersRequestBody This is a auto create Body Object
     * @param {string} [xClientToken] 保证客户端请求幂等性的标识
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPostPaidServers(createPostPaidServersRequest?: CreatePostPaidServersRequest): Promise<CreatePostPaidServersResponse> {
        const options = ParamCreater().createPostPaidServers(createPostPaidServersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建弹性云服务器组。
     * 
     * 与原生的创建云服务器组接口不同之处在于该接口支持企业项目细粒度权限的校验。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建云服务器组
     * @param {CreateServerGroupRequestBody} createServerGroupRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createServerGroup(createServerGroupRequest?: CreateServerGroupRequest): Promise<CreateServerGroupResponse> {
        const options = ParamCreater().createServerGroup(createServerGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建一台或多台云服务器。
     * 
     * 指该接口兼容《弹性云服务器接口参考》创建云服务器v1的功能，同时合入新功能，支持创建[包年/包月](https://support.huaweicloud.com/productdesc-ecs/ecs_01_0065.html)的弹性云服务器。
     * 
     * 弹性云服务器的登录鉴权方式包括两种：密钥对、密码。为安全起见，推荐使用密钥对方式。
     * 
     * - 密钥对
     * 
     * 指使用密钥对作为弹性云服务器的鉴权方式。
     * 
     * 接口调用方法：使用key_name字段，指定弹性云服务器登录时使用的密钥文件。
     * 
     * - 密码
     * 
     * 指使用设置初始密码方式作为弹性云服务器的鉴权方式，此时，您可以通过用户名密码方式登录弹性云服务器，Linux操作系统时为root用户的初始密码，Windows操作系统时为Administrator用户的初始密码。
     * 
     * 接口调用方法：使用adminPass字段，指定管理员帐号的初始登录密码。对于镜像已安装Cloud-init的Linux云服务器，如果需要使用密文密码，可以使用user_data字段进行密码注入。
     * 
     * &gt; 对于安装Cloud-init镜像的Linux云服务器云主机，若指定user_data字段，则adminPass字段无效。
     * 
     * 购买操作示例：
     * - [使用API购买ECS过程中常见问题及处理方法](https://support.huaweicloud.com/api-ecs/ecs_04_0007.html)
     * - [获取Token并检验Token的有效期 ](https://support.huaweicloud.com/api-ecs/ecs_04_0008.html)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建云服务器
     * @param {CreateServersRequestBody} createServersRequestBody This is a auto create Body Object
     * @param {string} [xClientToken] 保证客户端请求幂等性的标识
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createServers(createServersRequest?: CreateServersRequest): Promise<CreateServersResponse> {
        const options = ParamCreater().createServers(createServersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除启动模板。删除一个启动模板。并同时删除模板下所有的版本。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除模板
     * @param {string} launchTemplateId 模板ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteLaunchTemplates(deleteLaunchTemplatesRequest?: DeleteLaunchTemplatesRequest): Promise<DeleteLaunchTemplatesResponse> {
        const options = ParamCreater().deleteLaunchTemplates(deleteLaunchTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除回收站中虚拟机
     * @param {string} serverId 云服务器ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRecycleBinServer(deleteRecycleBinServerRequest?: DeleteRecycleBinServerRequest): Promise<DeleteRecycleBinServerResponse> {
        const options = ParamCreater().deleteRecycleBinServer(deleteRecycleBinServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除云服务器组。
     * 
     * 与原生的删除云服务器组接口不同之处在于该接口支持企业项目细粒度权限的校验。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除云服务器组
     * @param {string} serverGroupId 弹性云服务器组UUID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteServerGroup(deleteServerGroupRequest?: DeleteServerGroupRequest): Promise<DeleteServerGroupResponse> {
        const options = ParamCreater().deleteServerGroup(deleteServerGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将弹性云服务器移出云服务器组。移出后，该云服务器与云服务器组中的成员不再遵从反亲和策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除云服务器组成员
     * @param {string} serverGroupId 云服务器组ID。
     * @param {DeleteServerGroupMemberRequestBody} deleteServerGroupMemberRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteServerGroupMember(deleteServerGroupMemberRequest?: DeleteServerGroupMemberRequest): Promise<DeleteServerGroupMemberResponse> {
        const options = ParamCreater().deleteServerGroupMember(deleteServerGroupMemberRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除云服务器指定元数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除云服务器指定元数据
     * @param {string} key 待删除的云服务器metadata键值
     * @param {string} serverId 云服务器ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteServerMetadata(deleteServerMetadataRequest?: DeleteServerMetadataRequest): Promise<DeleteServerMetadataResponse> {
        const options = ParamCreater().deleteServerMetadata(deleteServerMetadataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 清除Windows云服务器初始安装时系统生成的密码记录。清除密码后，不影响云服务器密码登录功能，但不能再使用获取密码功能来查询该云服务器密码。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 云服务器清除密码(企业项目)
     * @param {string} serverId 云服务器ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteServerPassword(deleteServerPasswordRequest?: DeleteServerPasswordRequest): Promise<DeleteServerPasswordResponse> {
        const options = ParamCreater().deleteServerPassword(deleteServerPasswordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据指定的云服务器ID列表，删除云服务器。
     * 
     * 系统支持删除单台云服务器和批量删除多台云服务器操作，批量删除云服务器时，一次最多可以删除1000台。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除云服务器
     * @param {DeleteServersRequestBody} deleteServersRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteServers(deleteServersRequest?: DeleteServersRequest): Promise<DeleteServersResponse> {
        const options = ParamCreater().deleteServers(deleteServersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 从弹性云服务器中卸载磁盘。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 弹性云服务器卸载磁盘
     * @param {string} serverId 云服务器ID。
     * @param {string} volumeId 磁盘ID。
     * @param {'0' | '1'} [deleteFlag] 是否强制卸载数据盘。  - 是，值为“1”。  - 否，值为“0”。  默认值为0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public detachServerVolume(detachServerVolumeRequest?: DetachServerVolumeRequest): Promise<DetachServerVolumeResponse> {
        const options = ParamCreater().detachServerVolume(detachServerVolumeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 虚拟IP地址用于为网卡提供第二个IP地址，同时支持与多个弹性云服务器的网卡绑定，从而实现多个弹性云服务器之间的高可用性。
     * 
     * 该接口用于解绑定弹性云服务器网卡的虚拟IP地址。解绑后，网卡不会被删除。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 云服务器网卡解绑虚拟IP地址
     * @param {string} nicId 云服务器网卡ID。
     * @param {DisassociateServerVirtualIpRequestBody} disassociateServerVirtualIpRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disassociateServerVirtualIp(disassociateServerVirtualIpRequest?: DisassociateServerVirtualIpRequest): Promise<DisassociateServerVirtualIpResponse> {
        const options = ParamCreater().disassociateServerVirtualIp(disassociateServerVirtualIpRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 触发云服务器内核dump
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 触发云服务器内核dump
     * @param {string} serverId 云服务器ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeServerDump(executeServerDumpRequest?: ExecuteServerDumpRequest): Promise<ExecuteServerDumpResponse> {
        const options = ParamCreater().executeServerDump(executeServerDumpRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重部署云服务器
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重部署云服务器
     * @param {string} serverId 云服务器ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeServerRedeploy(executeServerRedeployRequest?: ExecuteServerRedeployRequest): Promise<ExecuteServerRedeployResponse> {
        const options = ParamCreater().executeServerRedeploy(executeServerRedeployRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询云服务器列表接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云服务器列表接口
     * @param {string} [id] 云服务器ID，格式为UUID，匹配规则为精确匹配。
     * @param {string} [name] 云服务器名称，匹配规则为模糊匹配。
     * @param {string} [status] 云服务器状态。  取值范围：  ACTIVE， BUILD，ERROR，HARD_REBOOT，MIGRATING，REBOOT，RESIZE，REVERT_RESIZE，SHELVED，SHELVED_OFFLOADED，SHUTOFF，UNKNOWN，VERIFY_RESIZE  弹性云服务器状态说明请参考[云服务器状态](https://support.huaweicloud.com/api-ecs/ecs_08_0002.html)
     * @param {boolean} [inRecycleBin] 云服务器是否处于回收站中
     * @param {string} [spodId] 共池裸机按整机柜发放的同一批次的批创id。
     * @param {string} [flavorName] 云服务器规格名称。
     * @param {string} [imageId] 镜像ID。
     * @param {string} [metadata] 元数据过滤，支持key&#x3D;value过滤。
     * @param {string} [metadataKey] 元数据key过滤。
     * @param {string} [tags] 查询tag字段中包含该值的云服务器。
     * @param {string} [notTags]  查询tag字段中不包含该值的云服务器
     * @param {string} [availabilityZone] 云服务器所在的AZ，匹配规则为模糊匹配。
     * @param {string} [availabilityZoneEq] 云服务器所在的AZ，匹配规则为精确匹配。
     * @param {string} [chargingMode] 云服务器的计费类型。
     * @param {string} [keyName] 云服务器使用的密钥对名称。
     * @param {string} [launchedSince] 过滤在launched_since时间之后启动的云服务器。格式为ISO8601时间格式，例如：2013-06-09T06:42:18Z。
     * @param {string} [enterpriseProjectId] 过滤绑定某个企业项目的云服务器。 若需要查询当前用户所有企业项目绑定的云服务，请传参all_granted_eps。
     * @param {Array<string>} [expectFields] 控制查询输出的字段。在默认字段的基础上选择是否查询。   launched_at：云服务器启动时间。   key_name：云服务器使用的密钥对名称。   locked：云服务器是否为锁定状态。   root_device_name：云服务器系统盘的设备名称。   tenancy：在专属主机或共享池中创建云服务器。   dedicated_host_id：专属主机ID。   enterprise_project_id：查询绑定某个企业项目的云服务器。   tags：云服务器的标签列表。   metadata：云服务器元数据。   addresses：云服务器对应的网络地址信息。   security_groups：云服务器的安全组信息。   volumes_attached：云服务器挂载磁盘信息。   image：云服务器镜像信息。   power_state：云服务器电源状态。   cpu_options：自定义CPU选项。   market_info：云服务器计费信息，包含计费类型、到期时间等字段。
     * @param {number} [limit] 查询返回VM数量限制。 limit 默认为10，最大为100。
     * @param {string} [marker] 以单页最后一条server的ID作为分页标记。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCloudServers(listCloudServersRequest?: ListCloudServersRequest): Promise<ListCloudServersResponse> {
        const options = ParamCreater().listCloudServers(listCloudServersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询规格销售策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询规格销售策略
     * @param {string} [flavorId] 云服务器的系统规格的ID
     * @param {'available' | 'sellout'} [sellStatus] 云服务器的系统规格销售状态。  取值范围：  - available：正常售卖 - sellout：售罄
     * @param {'postPaid' | 'prePaid' | 'spot' | 'ri'} [sellMode] 计费模式。  key的取值范围：  - postPaid：按需计费实例。 - prePaid：包年/包月计费实例。 - spot：竞价实例。 - ri：预留实例。
     * @param {string} [availabilityZoneId] 可用区，需要指定可用区（AZ）
     * @param {number} [longestSpotDurationHoursGt] 查询竞价实例时长大于设置值的策略
     * @param {number} [largestSpotDurationCountGt] 查询“竞价实例时长”的个数大于设置值的策略
     * @param {number} [longestSpotDurationHours] 查询竞价实例时长等于设置值的策略
     * @param {number} [largestSpotDurationCount] 查询“竞价实例时长”的个数等于设置值的策略
     * @param {'immediate' | 'delay'} [interruptionPolicy] 中断策略。  取值范围：  - immediate：立即释放 - delay：延迟释放
     * @param {number} [limit] 单页面可显示的flavor条数最大值，默认是1000。
     * @param {string} [marker] 以单页最后一条flavor的ID作为分页标记。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFlavorSellPolicies(listFlavorSellPoliciesRequest?: ListFlavorSellPoliciesRequest): Promise<ListFlavorSellPoliciesResponse> {
        const options = ParamCreater().listFlavorSellPolicies(listFlavorSellPoliciesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询云服务器规格详情信息和规格扩展信息列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询规格详情和规格扩展信息列表
     * @param {string} [availabilityZone] 可用区，需要指定可用区（AZ）的名称或者ID或者code。  可通过接口 [查询可用区列表接口](https://apiexplorer.developer.huaweicloud.com/apiexplorer/doc?product&#x3D;ECS&amp;api&#x3D;NovaListAvailabilityZones) 获取，也可参考[地区和终端节点](https://developer.huaweicloud.com/endpoint)获取。
     * @param {string} [flavorId] 规格id
     * @param {number} [limit] 查询返回云服务器规格列表当前页面的数量。默认为1000
     * @param {string} [marker] 从marker指定的flavor_id的下一条数据开始查询
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
     * 根据用户请求条件从数据库筛选、查询启动模板的版本相关信息，支持按照image_id和flavor_id进行过滤。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询模板版本列表
     * @param {number} [limit] max number of resources to return
     * @param {string} [marker] next page resource index id
     * @param {string} [launchTemplateId] 模板id
     * @param {string} [imageId] 镜像id
     * @param {string} [flavorId] 规格id
     * @param {Array<number>} [version] 版本
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLaunchTemplateVersions(listLaunchTemplateVersionsRequest?: ListLaunchTemplateVersionsRequest): Promise<ListLaunchTemplateVersionsResponse> {
        const options = ParamCreater().listLaunchTemplateVersions(listLaunchTemplateVersionsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询回收站中虚拟机列表
     * @param {string} [allTenants] 所有租户 管理员字段 1: 返回所有租户的VM 0: 返回当前租户的VM，如果为0，与不设置该查询字段的效果一致
     * @param {string} [availabilityZone] 
     * @param {'Available values : power_state' | 'host_status' | 'hostname' | 'hypervisor_hostname' | 'user_data' | 'key_name' | 'root_device_name' | 'volumes_attached' | 'security_groups' | 'addresses' | 'image' | 'metadata' | 'tags' | 'system_tags' | 'dedicated_host_id' | 'enterprise_project_id' | 'cpu_options'} [expectFields] 
     * @param {string} [ipAddress] 
     * @param {number} [limit] 
     * @param {string} [marker] 
     * @param {string} [name] 
     * @param {string} [offset] 
     * @param {Array<string>} [tags] 
     * @param {Array<string>} [tagsKey] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRecycleBinServers(listRecycleBinServersRequest?: ListRecycleBinServersRequest): Promise<ListRecycleBinServersResponse> {
        const options = ParamCreater().listRecycleBinServers(listRecycleBinServersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 变更规格时，部分规格的云服务器之间不能互相变更。您可以通过本接口，通过指定弹性云服务器规格，查询该规格可以变更的规格列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云服务器规格变更支持列表
     * @param {string} [instanceUuid] 进行规格切换的云服务器ID，UUID格式。(instance_uuid,source_flavor_id and source_flavor_name 不能都为空)
     * @param {number} [limit] 单页面可显示的flavor条数最大值，默认是1000。
     * @param {string} [marker] 以单页最后一条flavor的ID作为分页标记。
     * @param {'asc' | 'desc'} [sortDir] 升序/降序排序，默认值为：asc。  取值范围：  - asc：表示升序。 - desc：表示降序
     * @param {'flavorid' | 'sort_key' | 'name' | 'memory_mb' | 'vcpus' | 'root_gb'} [sortKey] 排序字段。默认值为“flavorid”。  key的取值范围：  - flavorid：表示规格ID。 - name：表示规格名称。 - memory_mb：表示内存大小。 - vcpus：表示CPU大小。 - root_gb：表示系统盘大小。
     * @param {string} [sourceFlavorId] 进行规格切换的云服务器源规格ID。(instance_uuid,source_flavor_id and source_flavor_name 不能都为空)
     * @param {string} [sourceFlavorName] 进行规格切换的云服务器源规格名称。(instance_uuid,source_flavor_id and source_flavor_name 不能都为空)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listResizeFlavors(listResizeFlavorsRequest?: ListResizeFlavorsRequest): Promise<ListResizeFlavorsResponse> {
        const options = ParamCreater().listResizeFlavors(listResizeFlavorsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询计划事件列表
     * 支持查看过去7天内计划事件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询计划事件列表
     * @param {string} [marker] 从marker指定的事件的下一条数据开始查询。
     * @param {string} [id] 事件ID
     * @param {Array<string>} [instanceId] 实例ID
     * @param {Array<string>} [type] 事件类型
     * @param {Array<string>} [state] 事件状态
     * @param {string} [publishSince] 事件发布开始时间
     * @param {string} [publishUntil] 事件发布截至时间
     * @param {number} [limit] 每页显示的条目数量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listScheduledEvents(listScheduledEventsRequest?: ListScheduledEventsRequest): Promise<ListScheduledEventsResponse> {
        const options = ParamCreater().listScheduledEvents(listScheduledEventsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询可用区列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可用区列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listServerAzInfo(listServerAzInfoRequest?: ListServerAzInfoRequest): Promise<ListServerAzInfoResponse> {
        const options = ParamCreater().listServerAzInfo();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询弹性云服务器挂载的磁盘信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询弹性云服务器挂载磁盘列表详情信息
     * @param {string} serverId 云服务器ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listServerBlockDevices(listServerBlockDevicesRequest?: ListServerBlockDevicesRequest): Promise<ListServerBlockDevicesResponse> {
        const options = ParamCreater().listServerBlockDevices(listServerBlockDevicesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询弹性云服务器组。
     * 
     * 与原生的创建云服务器组接口不同之处在于该接口支持企业项目细粒度权限的校验。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云服务器组列表
     * @param {number} [limit] 查询返回server group数量限制。
     * @param {string} [marker] 从marker指定的server group的下一条数据开始查询。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listServerGroups(listServerGroupsRequest?: ListServerGroupsRequest): Promise<ListServerGroupsResponse> {
        const options = ParamCreater().listServerGroups(listServerGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询云服务器网卡信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云服务器网卡信息
     * @param {string} serverId 云服务器ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listServerInterfaces(listServerInterfacesRequest?: ListServerInterfacesRequest): Promise<ListServerInterfacesResponse> {
        const options = ParamCreater().listServerInterfaces(listServerInterfacesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 项目（Project）用于将OpenStack的资源（计算资源、存储资源和网络资源）进行分组和隔离。项目可以是一个部门或者一个项目组。一个帐户中可以创建多个项目。
     * 
     * 该接口用于查询用户在指定项目所使用的全部标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listServerTags(listServerTagsRequest?: ListServerTagsRequest): Promise<ListServerTagsResponse> {
        const options = ParamCreater().listServerTags();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询弹性云服务器挂载的磁盘信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询弹性云服务器挂载磁盘列表信息
     * @param {string} serverId 云服务器ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listServerVolumeAttachments(listServerVolumeAttachmentsRequest?: ListServerVolumeAttachmentsRequest): Promise<ListServerVolumeAttachmentsResponse> {
        const options = ParamCreater().listServerVolumeAttachments(listServerVolumeAttachmentsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 使用标签过滤弹性云服务器，并返回云服务器使用的所有标签和资源列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 按标签查询云服务器列表
     * @param {ListServersByTagRequestBody} listServersByTagRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listServersByTag(listServersByTagRequest?: ListServersByTagRequest): Promise<ListServersByTagResponse> {
        const options = ParamCreater().listServersByTag(listServersByTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据用户请求条件从数据库筛选、查询所有的弹性云服务器，并关联相关表获取到弹性云服务器的详细信息。
     * 
     * 该接口支持查询弹性云服务器计费方式，以及是否被冻结。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云服务器详情列表
     * @param {string} [enterpriseProjectId] 查询绑定某个企业项目的弹性云服务器。  若需要查询当前用户所有企业项目绑定的弹性云服务，请传参all_granted_eps。
     * @param {string} [flavor] 云服务器规格ID,已上线的规格请参见《弹性云服务器用户指南》的“实例和应用场景”章节。
     * @param {string} [ip] IPv4地址过滤结果，匹配规则为模糊匹配。
     * @param {number} [limit] 查询返回云服务器当前页面的大小。每页默认值是25，最多返回1000台云服务器的信息。
     * @param {string} [name] 云服务器名称，匹配规则为模糊匹配。
     * @param {string} [notTags] 查询tag字段中不包含该值的云服务器。
     * @param {number} [offset] 页码。 当前页面数，默认为1，取值范围大于等于0。 当取值为0时，系统默认返回第1页，与取值为1时相同。 建议设置该参数大于等于1。
     * @param {string} [reservationId] 批量创建弹性云服务器时，指定返回的ID，用于查询本次批量创建的弹性云服务器。
     * @param {string} [status] 云服务器状态。  取值范围：  ACTIVE， BUILD，DELETED，ERROR，HARD_REBOOT，MIGRATING，REBOOT，RESIZE，REVERT_RESIZE，SHELVED，SHELVED_OFFLOADED，SHUTOFF，UNKNOWN，VERIFY_RESIZE  只有管理员可以使用“deleted”状态过滤查询已经删除的弹性云服务器。  弹性云服务器状态说明请参考[云服务器状态](https://support.huaweicloud.com/api-ecs/ecs_08_0002.html)
     * @param {string} [tags] 查询tag字段中包含该值的云服务器。
     * @param {string} [ipEq] IPv4地址过滤结果，匹配规则为精确匹配。
     * @param {string} [serverId] 云服务器ID，格式为UUID，匹配规则为精确匹配  示例: server_id&#x3D;id1,id2  说明： 在使用server_id作为过滤条件时，不能同时使用其他过滤条件。如果同时指定server_id及其他过滤条件，则以server_id条件为准，其他过滤条件会被忽略 当server_id中含有不存在的云服务器ID时，返回的响应参数中该云服务器ID对应的servers结构体中除了id和fault其它字段均为null 为了避免API的URI过长，建议一次查询的server_id个数不超过100个
     * @param {string} [marker] 以单页最后一条server的id作为分页标记。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listServersDetails(listServersDetailsRequest?: ListServersDetailsRequest): Promise<ListServersDetailsResponse> {
        const options = ParamCreater().listServersDetails(listServersDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据用户请求条件从数据库筛选、查询启动模板相关信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询模板列表
     * @param {number} [limit] max number of resources to return
     * @param {string} [marker] next page resource index id
     * @param {Array<string>} [launchTemplateId] 模板ID
     * @param {Array<string>} [name] 模板名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTemplates(listTemplatesRequest?: ListTemplatesRequest): Promise<ListTemplatesResponse> {
        const options = ParamCreater().listTemplates(listTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 将部署在专属主机上的弹性云服务器迁移至其他专属主机。
     * - 将部署在专属主机上的弹性云服务器迁移至公共资源池，即不再部署在专属主机上。
     * - 将公共资源池的弹性云服务器迁移至专属主机上，成为专属主机上部署的弹性云服务器。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 冷迁移云服务器
     * @param {string} serverId 云服务器ID。
     * @param {MigrateServerRequestBody} migrateServerRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public migrateServer(migrateServerRequest?: MigrateServerRequest): Promise<MigrateServerResponse> {
        const options = ParamCreater().migrateServer(migrateServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为弹性云服务器添加一个安全组。
     * 
     * 添加多个安全组时，建议最多为弹性云服务器添加5个安全组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加安全组
     * @param {string} serverId 弹性云服务器ID。
     * @param {NovaAssociateSecurityGroupRequestBody} novaAssociateSecurityGroupRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public novaAssociateSecurityGroup(novaAssociateSecurityGroupRequest?: NovaAssociateSecurityGroupRequest): Promise<NovaAssociateSecurityGroupResponse> {
        const options = ParamCreater().novaAssociateSecurityGroup(novaAssociateSecurityGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 给云服务器添加一张网卡。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加云服务器网卡
     * @param {string} serverId 云服务器ID。
     * @param {NovaAttachInterfaceRequestBody} novaAttachInterfaceRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public novaAttachInterface(novaAttachInterfaceRequest?: NovaAttachInterfaceRequest): Promise<NovaAttachInterfaceResponse> {
        const options = ParamCreater().novaAttachInterface(novaAttachInterfaceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建SSH密钥，或把公钥导入系统，生成密钥对。
     * 
     * 创建SSH密钥成功后，请把响应数据中的私钥内容保存到本地文件，用户使用该私钥登录云服务器云主机。为保证云服务器云主机器安全，私钥数据只能读取一次，请妥善保管。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建和导入SSH密钥
     * @param {NovaCreateKeypairRequestBody} novaCreateKeypairRequestBody This is a auto create Body Object
     * @param {string} [openStackAPIVersion] 微版本头
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public novaCreateKeypair(novaCreateKeypairRequest?: NovaCreateKeypairRequest): Promise<NovaCreateKeypairResponse> {
        const options = ParamCreater().novaCreateKeypair(novaCreateKeypairRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建一台弹性云服务器。
     * 
     * 弹性云服务器创建完成后，如需开启自动恢复功能，可以调用配置云服务器自动恢复的接口，具体使用请参见管理云服务器自动恢复动作。
     * 
     * 该接口在云服务器创建失败后不支持自动回滚。若需要自动回滚能力，可以调用POST /v1/{project_id}/cloudservers接口，具体使用请参见创建云服务器（按需）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建云服务器
     * @param {NovaCreateServersRequestBody} novaCreateServersRequestBody This is a auto create Body Object
     * @param {string} [openStackAPIVersion] 微版本头
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public novaCreateServers(novaCreateServersRequest?: NovaCreateServersRequest): Promise<NovaCreateServersResponse> {
        const options = ParamCreater().novaCreateServers(novaCreateServersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据SSH密钥的名称，删除指定SSH密钥。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除SSH密钥
     * @param {string} keypairName 密钥名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public novaDeleteKeypair(novaDeleteKeypairRequest?: NovaDeleteKeypairRequest): Promise<NovaDeleteKeypairResponse> {
        const options = ParamCreater().novaDeleteKeypair(novaDeleteKeypairRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除一台云服务器。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除云服务器
     * @param {string} serverId 云服务器ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public novaDeleteServer(novaDeleteServerRequest?: NovaDeleteServerRequest): Promise<NovaDeleteServerResponse> {
        const options = ParamCreater().novaDeleteServer(novaDeleteServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 移除弹性云服务器中的安全组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 移除安全组
     * @param {string} serverId 云服务器ID。
     * @param {NovaDisassociateSecurityGroupRequestBody} novaDisassociateSecurityGroupRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public novaDisassociateSecurityGroup(novaDisassociateSecurityGroupRequest?: NovaDisassociateSecurityGroupRequest): Promise<NovaDisassociateSecurityGroupResponse> {
        const options = ParamCreater().novaDisassociateSecurityGroup(novaDisassociateSecurityGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询可用域列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可用区列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public novaListAvailabilityZones(novaListAvailabilityZonesRequest?: NovaListAvailabilityZonesRequest): Promise<NovaListAvailabilityZonesResponse> {
        const options = ParamCreater().novaListAvailabilityZones();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询SSH密钥信息列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询SSH密钥列表
     * @param {number} [limit] 查询返回秘钥数量限制。  在微版本2.35后支持
     * @param {string} [marker] 从marker指定的keypair的名称的下一条数据开始查询。  在微版本2.35后支持。
     * @param {string} [openStackAPIVersion] 微版本头
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public novaListKeypairs(novaListKeypairsRequest?: NovaListKeypairsRequest): Promise<NovaListKeypairsResponse> {
        const options = ParamCreater().novaListKeypairs(novaListKeypairsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定弹性云服务器的安全组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定云服务器安全组列表
     * @param {string} serverId 云服务器ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public novaListServerSecurityGroups(novaListServerSecurityGroupsRequest?: NovaListServerSecurityGroupsRequest): Promise<NovaListServerSecurityGroupsResponse> {
        const options = ParamCreater().novaListServerSecurityGroups(novaListServerSecurityGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询云服务器信息列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云服务器列表
     * @param {string} [changesSince] 云服务器上次更新状态的时间戳信息。格式符合ISO 8601，例如：  CCYY-MM-DDThh:mm:ss+/-hh:mm  &gt; 说明： &gt;  &gt; 可以查询到“deleted”状态的弹性云服务器。
     * @param {string} [flavor] 云服务器类型ID。
     * @param {string} [host] 主机节点名称。
     * @param {string} [image] 镜像ID。  在使用image作为条件过滤时，不能同时支持其他过滤条件和分页条件。如果同时指定image及其他条件，则以image条件为准；当条件不含image时，接口功能不受限制。
     * @param {string} [ip] IPv4地址过滤结果，匹配规则为模糊匹配。
     * @param {number} [limit] 查询返回云服务器数量限制。
     * @param {string} [marker] 从marker指定的云服务器ID的下一条数据开始查询。
     * @param {string} [name] 云服务器名称。
     * @param {string} [notTags] 查询tag字段中不包含该值的云服务器，值为标签的Key。  &gt; 说明： &gt;  &gt; 系统近期对标签功能进行了升级。如果之前添加的Tag为“Key.Value”的形式，则查询的时候需要使用“Key”来查询。 &gt;  &gt; 例如：之前添加的tag为“a.b”,则升级后，查询时需使用“not-tags&#x3D;a”。
     * @param {string} [reservationId] 批量创建弹性云服务器时，指定返回的ID，用于查询本次批量创建的弹性云服务器。
     * @param {'created_at' | 'availability_zone' | 'display_name' | 'host' | 'instance_type_id' | 'key_name' | 'project_id' | 'user_id' | 'updated_at' | 'uuid' | 'vm_state'} [sortKey] 查询结果按弹性云服务器属性排序，默认排序顺序为created_at逆序。
     * @param {'ACTIVE' | 'BUILD' | 'DELETED' | 'ERROR' | 'HARD_REBOOT' | 'MIGRATING' | 'REBOOT' | 'RESIZE' | 'REVERT_RESIZE' | 'SHELVED' | 'SHELVED_OFFLOADED' | 'SHUTOFF' | 'UNKNOWN' | 'VERIFY_RESIZE'} [status] 云服务器状态。  取值范围： ACTIVE， BUILD，DELETED，ERROR，HARD_REBOOT，MIGRATING，REBOOT，RESIZE，REVERT_RESIZE，SHELVED，SHELVED_OFFLOADED，SHUTOFF，UNKNOWN，VERIFY_RESIZE 其中DELETED 状态虚拟机只有管理员有权限查 直到2.37微版本，非上面范围的status字段将返回空列表，2.38之后的微版本，将返回400错误。  云服务器状态说明请参考[云服务器状态](https://support.huaweicloud.com/api-ecs/ecs_08_0002.html)。
     * @param {string} [tags] 云服务器标签。
     * @param {string} [openStackAPIVersion] 微版本头
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public novaListServers(novaListServersRequest?: NovaListServersRequest): Promise<NovaListServersResponse> {
        const options = ParamCreater().novaListServers(novaListServersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询云服务器详情信息列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云服务器详情列表
     * @param {string} [changesSince] 云服务器上次更新状态的时间戳信息。时间戳为UTC格式。
     * @param {string} [flavor] 云服务器规格ID。
     * @param {string} [image] 镜像ID  在使用image作为条件过滤时，不能同时支持其他过滤条件和分页条件。如果同时指定image及其他条件，则以image条件为准；当条件不含image时，接口功能不受限制。
     * @param {string} [ip] IPv4地址过滤结果，匹配规则为模糊匹配。
     * @param {number} [limit] 查询返回云服务器数量限制。
     * @param {string} [marker] 从marker指定的云服务器ID的下一条数据开始查询。
     * @param {string} [name] 云服务器名称。
     * @param {string} [notTags] 查询tag字段中不包含该值的云服务器，值为标签的Key。  &gt; 说明： &gt;  &gt; 系统近期对标签功能进行了升级。如果之前添加的Tag为“Key.Value”的形式，则查询的时候需要使用“Key”来查询。 &gt;  &gt; 例如：之前添加的tag为“a.b”,则升级后，查询时需使用“not-tags&#x3D;a”。
     * @param {string} [reservationId] 批量创建弹性云服务器时，指定返回的ID，用于查询本次批量创建的弹性云服务器。
     * @param {'created_at' | 'availability_zone' | 'display_name' | 'host' | 'instance_type_id' | 'key_name' | 'project_id' | 'user_id' | 'updated_at' | 'uuid' | 'vm_state'} [sortKey] 查询结果按弹性云服务器属性排序，默认排序顺序为created_at逆序。
     * @param {'ACTIVE' | 'BUILD' | 'DELETED' | 'ERROR' | 'HARD_REBOOT' | 'MIGRATING' | 'REBOOT' | 'RESIZE' | 'REVERT_RESIZE' | 'SHELVED' | 'SHELVED_OFFLOADED' | 'SHUTOFF' | 'UNKNOWN' | 'VERIFY_RESIZE'} [status] 云服务器状态。  取值范围： ACTIVE， BUILD，DELETED，ERROR，HARD_REBOOT，MIGRATING，REBOOT，RESIZE，REVERT_RESIZE，SHELVED，SHELVED_OFFLOADED，SHUTOFF，UNKNOWN，VERIFY_RESIZE  直到2.37微版本，非上面范围的status字段将返回空列表，2.38之后的微版本，将返回400错误。  云服务器状态说明请参考[云服务器状态](https://support.huaweicloud.com/api-ecs/ecs_08_0002.html)。
     * @param {string} [tags] 查询tag字段中包含该值的云服务器。
     * @param {string} [openStackAPIVersion] 微版本头
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public novaListServersDetails(novaListServersDetailsRequest?: NovaListServersDetailsRequest): Promise<NovaListServersDetailsResponse> {
        const options = ParamCreater().novaListServersDetails(novaListServersDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定的规格的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云服务器规格extra_specs的详情
     * @param {string} flavorId 规格id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public novaShowFlavorExtraSpecs(novaShowFlavorExtraSpecsRequest?: NovaShowFlavorExtraSpecsRequest): Promise<NovaShowFlavorExtraSpecsResponse> {
        const options = ParamCreater().novaShowFlavorExtraSpecs(novaShowFlavorExtraSpecsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据SSH密钥名称查询指定SSH密钥。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询SSH密钥详情
     * @param {string} keypairName 密钥名称信息。
     * @param {string} [openStackAPIVersion] 微版本头
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public novaShowKeypair(novaShowKeypairRequest?: NovaShowKeypairRequest): Promise<NovaShowKeypairResponse> {
        const options = ParamCreater().novaShowKeypair(novaShowKeypairRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据云服务器ID，查询云服务器的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云服务器详情
     * @param {string} serverId 云服务器ID。
     * @param {string} [openStackAPIVersion] 微版本头
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public novaShowServer(novaShowServerRequest?: NovaShowServerRequest): Promise<NovaShowServerResponse> {
        const options = ParamCreater().novaShowServer(novaShowServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据网卡ID，查询云服务器网卡信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定云服务器网卡信息
     * @param {string} portId 网卡port id
     * @param {string} serverId 云服务器ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public novaShowServerInterface(novaShowServerInterfaceRequest?: NovaShowServerInterfaceRequest): Promise<NovaShowServerInterfaceResponse> {
        const options = ParamCreater().novaShowServerInterface(novaShowServerInterfaceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将云服务器添加到监控表中。
     * 
     * 注册到监控表中的云服务会被ceilometer周期性采集监控数据，包括平台的版本、cpu信息、内存、网卡、磁盘、硬件平台等信息，这些数据上报给云监控。例如SAP云服务器内部的插件会周期性从云监控中查询监控数据，以报表形式呈现给SAP。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 注册云服务器监控
     * @param {string} serverId 云服务器ID。
     * @param {RegisterServerMonitorRequestBody} registerServerMonitorRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public registerServerMonitor(registerServerMonitorRequest?: RegisterServerMonitorRequest): Promise<RegisterServerMonitorResponse> {
        const options = ParamCreater().registerServerMonitor(registerServerMonitorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重装弹性云服务器的操作系统。支持弹性云服务器数据盘不变的情况下，使用原镜像重装系统盘。
     * 
     * 调用该接口后，系统将卸载系统盘，然后使用原镜像重新创建系统盘，并挂载至弹性云服务器，实现重装操作系统功能。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重装弹性云服务器操作系统(安装Cloud-init)
     * @param {string} serverId 云服务器ID。
     * @param {ReinstallServerWithCloudInitRequestBody} reinstallServerWithCloudInitRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public reinstallServerWithCloudInit(reinstallServerWithCloudInitRequest?: ReinstallServerWithCloudInitRequest): Promise<ReinstallServerWithCloudInitResponse> {
        const options = ParamCreater().reinstallServerWithCloudInit(reinstallServerWithCloudInitRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重装弹性云服务器的操作系统。
     * 
     * 该接口支持未安装Cloud-init或Cloudbase-init的镜像。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重装弹性云服务器操作系统(未安装Cloud init)
     * @param {string} serverId 云服务器ID。
     * @param {ReinstallServerWithoutCloudInitRequestBody} reinstallServerWithoutCloudInitRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public reinstallServerWithoutCloudInit(reinstallServerWithoutCloudInitRequest?: ReinstallServerWithoutCloudInitRequest): Promise<ReinstallServerWithoutCloudInitResponse> {
        const options = ParamCreater().reinstallServerWithoutCloudInit(reinstallServerWithoutCloudInitRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重置弹性云服务器管理帐号（root用户或Administrator用户）的密码。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 一键重置弹性云服务器密码(企业项目)
     * @param {string} serverId 云服务器ID。
     * @param {ResetServerPasswordRequestBody} resetServerPasswordRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetServerPassword(resetServerPasswordRequest?: ResetServerPasswordRequest): Promise<ResetServerPasswordResponse> {
        const options = ParamCreater().resetServerPassword(resetServerPasswordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当您创建的弹性云服务器规格无法满足业务需要时，可以变更云服务器规格，升级vCPU、内存。具体接口的使用，请参见本节内容。
     * 
     * 变更规格时，部分规格的云服务器之间不能互相变更。
     * 
     * 您可以通过接口“/v1/{project_id}/cloudservers/resize_flavors?{instance_uuid,source_flavor_id,source_flavor_name}”查询支持列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 变更云服务器规格(按需)
     * @param {string} serverId 云服务器ID。
     * @param {ResizePostPaidServerRequestBody} resizePostPaidServerRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resizePostPaidServer(resizePostPaidServerRequest?: ResizePostPaidServerRequest): Promise<ResizePostPaidServerResponse> {
        const options = ParamCreater().resizePostPaidServer(resizePostPaidServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 变更云服务器规格。
     * 
     * v1.1版本：指该接口兼容v1接口的功能，同时合入新功能，支持变更包年/包月弹性云服务器的规格。
     * 
     * 注意事项：
     * 
     * - 该接口可以使用合作伙伴自身的AK/SK或者token调用，也可以用合作伙伴子客户的AK/SK或者token来调用。
     * - 如果使用AK/SK认证方式，示例代码中region请参考[地区和终端节点](https://developer.huaweicloud.com/endpoint)中“弹性云服务 ECS”下“区域”的内容，，serviceName（英文服务名称缩写）请指定为ECS。
     * - Endpoint请参考[地区和终端节点](https://developer.huaweicloud.com/endpoint)中“弹性云服务 ECS”下“终端节点（Endpoint）”的内容。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 变更云服务器规格
     * @param {string} serverId 云服务器ID。
     * @param {ResizeServerRequestBody} resizeServerRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resizeServer(resizeServerRequest?: ResizeServerRequest): Promise<ResizeServerResponse> {
        const options = ParamCreater().resizeServer(resizeServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 回收站中的虚拟机从回收站中恢复
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 恢复回收站中虚拟机
     * @param {string} serverId 云服务器ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public revertRecycleBinServer(revertRecycleBinServerRequest?: RevertRecycleBinServerRequest): Promise<RevertRecycleBinServerResponse> {
        const options = ParamCreater().revertRecycleBinServer(revertRecycleBinServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询包周期虚拟机可以追加卷数量
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询包周期虚拟机可以追加卷数量
     * @param {string} serverId 云服务器ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAppendableVolumeQuota(showAppendableVolumeQuotaRequest?: ShowAppendableVolumeQuotaRequest): Promise<ShowAppendableVolumeQuotaResponse> {
        const options = ParamCreater().showAppendableVolumeQuota(showAppendableVolumeQuotaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询flavor的容量
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询flavor的容量
     * @param {string} flavorId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFlavorCapacity(showFlavorCapacityRequest?: ShowFlavorCapacityRequest): Promise<ShowFlavorCapacityResponse> {
        const options = ParamCreater().showFlavorCapacity(showFlavorCapacityRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询云服务器元数据配置，通过本接口，您可以查询指定云服务器的元数据配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云服务器元数据配置
     * @param {string} serverId 云服务器ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMetadataOptions(showMetadataOptionsRequest?: ShowMetadataOptionsRequest): Promise<ShowMetadataOptionsResponse> {
        const options = ParamCreater().showMetadataOptions(showMetadataOptionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询回收站配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询回收站配置
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRecycleBin(showRecycleBinRequest?: ShowRecycleBinRequest): Promise<ShowRecycleBinResponse> {
        const options = ParamCreater().showRecycleBin();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询弹性云服务器是否支持一键重置密码。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询是否支持一键重置密码
     * @param {string} serverId 云服务器ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showResetPasswordFlag(showResetPasswordFlagRequest?: ShowResetPasswordFlagRequest): Promise<ShowResetPasswordFlagResponse> {
        const options = ParamCreater().showResetPasswordFlag(showResetPasswordFlagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取云服务器云主机串口登录地址。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取串口登录地址
     * @param {string} serverId 云服务器ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSerialConsoleActions(showSerialConsoleActionsRequest?: ShowSerialConsoleActionsRequest): Promise<ShowSerialConsoleActionsResponse> {
        const options = ParamCreater().showSerialConsoleActions(showSerialConsoleActionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询弹性云服务器的详细信息。
     * 
     * 该接口支持查询弹性云服务器的计费方式，以及是否被冻结。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云服务器详情
     * @param {string} serverId 云服务器ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showServer(showServerRequest?: ShowServerRequest): Promise<ShowServerResponse> {
        const options = ParamCreater().showServer(showServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询虚拟机可挂载网卡
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询虚拟机可挂载网卡
     * @param {string} serverId 云服务器ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showServerAttachableNicNum(showServerAttachableNicNumRequest?: ShowServerAttachableNicNumRequest): Promise<ShowServerAttachableNicNumResponse> {
        const options = ParamCreater().showServerAttachableNicNum(showServerAttachableNicNumRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询弹性云服务器挂载的单个磁盘信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询弹性云服务器单个磁盘信息
     * @param {string} serverId 云服务器ID。
     * @param {string} volumeId 云硬盘ID，UUID格式。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showServerBlockDevice(showServerBlockDeviceRequest?: ShowServerBlockDeviceRequest): Promise<ShowServerBlockDeviceResponse> {
        const options = ParamCreater().showServerBlockDevice(showServerBlockDeviceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询弹性云服务器组详情。
     * 
     * 与原生的创建云服务器组接口不同之处在于该接口支持企业项目细粒度权限的校验。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云服务器组详情
     * @param {string} serverGroupId 弹性云服务器组UUID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showServerGroup(showServerGroupRequest?: ShowServerGroupRequest): Promise<ShowServerGroupResponse> {
        const options = ParamCreater().showServerGroup(showServerGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户配额信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户配额
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showServerLimits(showServerLimitsRequest?: ShowServerLimitsRequest): Promise<ShowServerLimitsResponse> {
        const options = ParamCreater().showServerLimits();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当通过支持Cloudbase-init功能的镜像创建Windows云服务器时，获取云服务器初始安装时系统生成的管理员帐户（Administrator帐户或Cloudbase-init设置的帐户）随机密码。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 云服务器获取密码(企业项目)
     * @param {string} serverId 云服务器ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showServerPassword(showServerPasswordRequest?: ShowServerPasswordRequest): Promise<ShowServerPasswordResponse> {
        const options = ParamCreater().showServerPassword(showServerPasswordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取弹性云服务器VNC远程登录地址。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取VNC远程登录地址
     * @param {string} serverId 云服务器ID。
     * @param {ShowServerRemoteConsoleRequestBody} showServerRemoteConsoleRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showServerRemoteConsole(showServerRemoteConsoleRequest?: ShowServerRemoteConsoleRequest): Promise<ShowServerRemoteConsoleResponse> {
        const options = ParamCreater().showServerRemoteConsole(showServerRemoteConsoleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 查询指定云服务器的标签信息。
     * 
     * - 标签管理服务TMS使用该接口查询指定云服务器的全部标签数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云服务器标签
     * @param {string} serverId 云服务器ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showServerTags(showServerTagsRequest?: ShowServerTagsRequest): Promise<ShowServerTagsResponse> {
        const options = ParamCreater().showServerTags(showServerTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新云服务器元数据配置，通过本接口，您可以选择启用或关闭IMDS服务，也可以选择IMDS服务的版本。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新云服务器元数据配置
     * @param {string} serverId 云服务器ID。
     * @param {UpdateServerMetadataOptionsRequestBody} updateServerMetadataOptionsRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateMetadataOptions(updateMetadataOptionsRequest?: UpdateMetadataOptionsRequest): Promise<UpdateMetadataOptionsResponse> {
        const options = ParamCreater().updateMetadataOptions(updateMetadataOptionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新回收站属性信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新回收站配置
     * @param {UpdateRecycleBinReq} updateRecycleBinReq This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRecycleBin(updateRecycleBinRequest?: UpdateRecycleBinRequest): Promise<UpdateRecycleBinResponse> {
        const options = ParamCreater().updateRecycleBin(updateRecycleBinRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新回收站策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新回收站策略
     * @param {UpdateRecycleBinPolicyReq} updateRecycleBinPolicyReq This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRecycleBinPolicy(updateRecycleBinPolicyRequest?: UpdateRecycleBinPolicyRequest): Promise<UpdateRecycleBinPolicyResponse> {
        const options = ParamCreater().updateRecycleBinPolicy(updateRecycleBinPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新计划事件
     * @param {string} id resource id
     * @param {ScheduledEventUpdateBody} scheduledEventUpdateBody 修改计划事件计划执行开始时间
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateScheduledEvent(updateScheduledEventRequest?: UpdateScheduledEventRequest): Promise<UpdateScheduledEventResponse> {
        const options = ParamCreater().updateScheduledEvent(updateScheduledEventRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置云服务器云主机串口登录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置云服务器云主机串口登录
     * @param {string} serverId 云服务器ID。
     * @param {UpdateSerialConsoleOptionsRequestBody} updateSerialConsoleOptionsRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSerialConsoleOptions(updateSerialConsoleOptionsRequest?: UpdateSerialConsoleOptionsRequest): Promise<UpdateSerialConsoleOptionsResponse> {
        const options = ParamCreater().updateSerialConsoleOptions(updateSerialConsoleOptionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改云服务器信息，目前支持修改云服务器名称及描述和hostname。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改云服务器
     * @param {string} serverId 云服务器ID。
     * @param {UpdateServerRequestBody} updateServerRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateServer(updateServerRequest?: UpdateServerRequest): Promise<UpdateServerResponse> {
        const options = ParamCreater().updateServer(updateServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改按需服务器，设置定时删除时间。如果设置的定时删除时间为空字符串，表示取消定时删除。
     * 
     * 该接口支持企业项目细粒度权限的校验，具体细粒度请参见 ecs:cloudServers:put。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改云服务器定时删除时间
     * @param {string} serverId 云服务器ID。
     * @param {UpdateServerAutoTerminateTimeRequestBody} updateServerAutoTerminateTimeRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateServerAutoTerminateTime(updateServerAutoTerminateTimeRequest?: UpdateServerAutoTerminateTimeRequest): Promise<UpdateServerAutoTerminateTimeResponse> {
        const options = ParamCreater().updateServerAutoTerminateTime(updateServerAutoTerminateTimeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改云服务器云主机挂载的单个磁盘信息。\&#39;当前仅支持修改delete_on_termination字段。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改云服务器挂载的单个磁盘信息
     * @param {string} serverId 云服务器ID。
     * @param {string} volumeId 磁盘id，uuid格式
     * @param {UpdateServerBlockDeviceReq} updateServerBlockDeviceReq This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateServerBlockDevice(updateServerBlockDeviceRequest?: UpdateServerBlockDeviceRequest): Promise<UpdateServerBlockDeviceResponse> {
        const options = ParamCreater().updateServerBlockDevice(updateServerBlockDeviceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新云服务器网卡挂载信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新云服务器网卡挂载信息
     * @param {string} serverId 云服务器ID。
     * @param {string} portId The network card ID of the cloud server.
     * @param {UpdateNicInfoRequestBody} updateNicInfoRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateServerInterface(updateServerInterfaceRequest?: UpdateServerInterfaceRequest): Promise<UpdateServerInterfaceResponse> {
        const options = ParamCreater().updateServerInterface(updateServerInterfaceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新云服务器元数据。
     * 
     * - 如果元数据中没有待更新字段，则自动添加该字段。
     * 
     * - 如果元数据中已存在待更新字段，则直接更新字段值。
     * 
     * - 如果元数据中的字段不再请求参数中，则保持不变
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新云服务器元数据
     * @param {string} serverId 云服务器ID。
     * @param {UpdateServerMetadataRequestBody} updateServerMetadataRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateServerMetadata(updateServerMetadataRequest?: UpdateServerMetadataRequest): Promise<UpdateServerMetadataResponse> {
        const options = ParamCreater().updateServerMetadata(updateServerMetadataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 返回Nova当前所有可用的版本。
     * 
     * 为了支持功能不断扩展，Nova API支持版本号区分。Nova中有两种形式的版本号：
     * 
     * - \&quot;主版本号\&quot;: 具有独立的url。
     * - \&quot;微版本号\&quot;: 通过Http请求头X-OpenStack-Nova-API-Version来使用，从2.27版本后更改为OpenStack-API-Version。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询API版本信息列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public novaListVersions(novaListVersionsRequest?: NovaListVersionsRequest): Promise<NovaListVersionsResponse> {
        const options = ParamCreater().novaListVersions();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 返回指定版本的信息。
     * 为了支持功能不断扩展，Nova API支持版本号区分。Nova中有两种形式的版本号：
     * 
     * - \&quot;主版本号\&quot;: 具有独立的url。
     * - \&quot;微版本号\&quot;: 通过Http请求头X-OpenStack-Nova-API-Version来使用，从2.27版本后更改为OpenStack-API-Version。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定API版本信息
     * @param {string} apiVersion API版本号。例如: v2
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public novaShowVersion(novaShowVersionRequest?: NovaShowVersionRequest): Promise<NovaShowVersionResponse> {
        const options = ParamCreater().novaShowVersion(novaShowVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Job的执行状态。
     * 
     * 对于创建云服务器、删除云服务器、云服务器批量操作和网卡操作等异步API，命令下发后，会返回job_id，通过job_id可以查询任务的执行状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询任务的执行状态
     * @param {string} jobId 异步请求的任务ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJob(showJobRequest?: ShowJobRequest): Promise<ShowJobResponse> {
        const options = ParamCreater().showJob(showJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        acceptScheduledEvent(acceptScheduledEventRequest?: AcceptScheduledEventRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instance-scheduled-events/{id}/actions/accept",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (acceptScheduledEventRequest !== null && acceptScheduledEventRequest !== undefined) {
                if (acceptScheduledEventRequest instanceof AcceptScheduledEventRequest) {
                    id = acceptScheduledEventRequest.id;
                    body = acceptScheduledEventRequest.body
                } else {
                    id = acceptScheduledEventRequest['id'];
                    body = acceptScheduledEventRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling acceptScheduledEvent.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 将云服务器加入云服务器组。添加成功后，如果该云服务器组是反亲和性策略的，则该云服务器与云服务器组中的其他成员尽量分散地创建在不同主机上。如果该云服务器时故障域类型的，则该云服务器会拥有故障域属性。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addServerGroupMember(addServerGroupMemberRequest?: AddServerGroupMemberRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloudservers/os-server-groups/{server_group_id}/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverGroupId;

            if (addServerGroupMemberRequest !== null && addServerGroupMemberRequest !== undefined) {
                if (addServerGroupMemberRequest instanceof AddServerGroupMemberRequest) {
                    serverGroupId = addServerGroupMemberRequest.serverGroupId;
                    body = addServerGroupMemberRequest.body
                } else {
                    serverGroupId = addServerGroupMemberRequest['server_group_id'];
                    body = addServerGroupMemberRequest['body'];
                }
            }

        
            if (serverGroupId === null || serverGroupId === undefined) {
            throw new RequiredError('serverGroupId','Required parameter serverGroupId was null or undefined when calling addServerGroupMember.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_group_id': serverGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 虚拟IP地址用于为网卡提供第二个IP地址，同时支持与多个弹性云服务器的网卡绑定，从而实现多个弹性云服务器之间的高可用性。
         * 
         * 该接口用于给云服务器网卡配置虚拟IP地址：
         * 
         * - 当指定的IP地址是一个不存在的虚拟IP地址时，系统会创建该虚拟IP，并绑定至对应网卡。
         * 
         * - 当指定的IP地址是一个已经创建好的私有IP时，系统会将指定的网卡和虚拟IP绑定。如果该IP的device_owner为空，则仅支持VPC内二三层通信；如果该IP的device_owner为neutron:VIP_PORT，则支持VPC内二三层通信、VPC之间对等连接访问，以及弹性公网IP、VPN、云专线等Internet接入。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateServerVirtualIp(associateServerVirtualIpRequest?: AssociateServerVirtualIpRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/cloudservers/nics/{nic_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let nicId;

            if (associateServerVirtualIpRequest !== null && associateServerVirtualIpRequest !== undefined) {
                if (associateServerVirtualIpRequest instanceof AssociateServerVirtualIpRequest) {
                    nicId = associateServerVirtualIpRequest.nicId;
                    body = associateServerVirtualIpRequest.body
                } else {
                    nicId = associateServerVirtualIpRequest['nic_id'];
                    body = associateServerVirtualIpRequest['body'];
                }
            }

        
            if (nicId === null || nicId === undefined) {
            throw new RequiredError('nicId','Required parameter nicId was null or undefined when calling associateServerVirtualIp.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'nic_id': nicId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 把磁盘挂载到弹性云服务器上。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        attachServerVolume(attachServerVolumeRequest?: AttachServerVolumeRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloudservers/{server_id}/attachvolume",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (attachServerVolumeRequest !== null && attachServerVolumeRequest !== undefined) {
                if (attachServerVolumeRequest instanceof AttachServerVolumeRequest) {
                    serverId = attachServerVolumeRequest.serverId;
                    body = attachServerVolumeRequest.body
                } else {
                    serverId = attachServerVolumeRequest['server_id'];
                    body = attachServerVolumeRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling attachServerVolume.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 给云服务器添加一张或多张网卡。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchAddServerNics(batchAddServerNicsRequest?: BatchAddServerNicsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloudservers/{server_id}/nics",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (batchAddServerNicsRequest !== null && batchAddServerNicsRequest !== undefined) {
                if (batchAddServerNicsRequest instanceof BatchAddServerNicsRequest) {
                    serverId = batchAddServerNicsRequest.serverId;
                    body = batchAddServerNicsRequest.body
                } else {
                    serverId = batchAddServerNicsRequest['server_id'];
                    body = batchAddServerNicsRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling batchAddServerNics.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 将指定的共享磁盘一次性挂载到多个弹性云服务器，实现批量挂载。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchAttachSharableVolumes(batchAttachSharableVolumesRequest?: BatchAttachSharableVolumesRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/batchaction/attachvolumes/{volume_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let volumeId;

            if (batchAttachSharableVolumesRequest !== null && batchAttachSharableVolumesRequest !== undefined) {
                if (batchAttachSharableVolumesRequest instanceof BatchAttachSharableVolumesRequest) {
                    volumeId = batchAttachSharableVolumesRequest.volumeId;
                    body = batchAttachSharableVolumesRequest.body
                } else {
                    volumeId = batchAttachSharableVolumesRequest['volume_id'];
                    body = batchAttachSharableVolumesRequest['body'];
                }
            }

        
            if (volumeId === null || volumeId === undefined) {
            throw new RequiredError('volumeId','Required parameter volumeId was null or undefined when calling batchAttachSharableVolumes.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'volume_id': volumeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 为指定云服务器批量添加标签。
         * 
         * - 标签管理服务TMS使用该接口批量管理云服务器的标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateServerTags(batchCreateServerTagsRequest?: BatchCreateServerTagsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloudservers/{server_id}/tags/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (batchCreateServerTagsRequest !== null && batchCreateServerTagsRequest !== undefined) {
                if (batchCreateServerTagsRequest instanceof BatchCreateServerTagsRequest) {
                    serverId = batchCreateServerTagsRequest.serverId;
                    body = batchCreateServerTagsRequest.body
                } else {
                    serverId = batchCreateServerTagsRequest['server_id'];
                    body = batchCreateServerTagsRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling batchCreateServerTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 卸载并删除云服务器中的一张或多张网卡。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteServerNics(batchDeleteServerNicsRequest?: BatchDeleteServerNicsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloudservers/{server_id}/nics/delete",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (batchDeleteServerNicsRequest !== null && batchDeleteServerNicsRequest !== undefined) {
                if (batchDeleteServerNicsRequest instanceof BatchDeleteServerNicsRequest) {
                    serverId = batchDeleteServerNicsRequest.serverId;
                    body = batchDeleteServerNicsRequest.body
                } else {
                    serverId = batchDeleteServerNicsRequest['server_id'];
                    body = batchDeleteServerNicsRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling batchDeleteServerNics.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 为指定云服务器批量删除标签。
         * 
         * - 标签管理服务TMS使用该接口批量管理云服务器的标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteServerTags(batchDeleteServerTagsRequest?: BatchDeleteServerTagsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloudservers/{server_id}/tags/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (batchDeleteServerTagsRequest !== null && batchDeleteServerTagsRequest !== undefined) {
                if (batchDeleteServerTagsRequest instanceof BatchDeleteServerTagsRequest) {
                    serverId = batchDeleteServerTagsRequest.serverId;
                    body = batchDeleteServerTagsRequest.body
                } else {
                    serverId = batchDeleteServerTagsRequest['server_id'];
                    body = batchDeleteServerTagsRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling batchDeleteServerTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDetachVolumes(batchDetachVolumesRequest?: BatchDetachVolumesRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/batchaction/detachvolumes/{volume_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let volumeId;

            if (batchDetachVolumesRequest !== null && batchDetachVolumesRequest !== undefined) {
                if (batchDetachVolumesRequest instanceof BatchDetachVolumesRequest) {
                    volumeId = batchDetachVolumesRequest.volumeId;
                    body = batchDetachVolumesRequest.body
                } else {
                    volumeId = batchDetachVolumesRequest['volume_id'];
                    body = batchDetachVolumesRequest['body'];
                }
            }

        
            if (volumeId === null || volumeId === undefined) {
            throw new RequiredError('volumeId','Required parameter volumeId was null or undefined when calling batchDetachVolumes.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'volume_id': volumeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据给定的云服务器ID列表，批量重启云服务器，一次最多可以重启1000台。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchRebootServers(batchRebootServersRequest?: BatchRebootServersRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloudservers/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchRebootServersRequest !== null && batchRebootServersRequest !== undefined) {
                if (batchRebootServersRequest instanceof BatchRebootServersRequest) {
                    body = batchRebootServersRequest.body
                } else {
                    body = batchRebootServersRequest['body'];
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
         * 批量重置弹性云服务器管理帐号（root用户或Administrator用户）的密码。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchResetServersPassword(batchResetServersPasswordRequest?: BatchResetServersPasswordRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/cloudservers/os-reset-passwords",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchResetServersPasswordRequest !== null && batchResetServersPasswordRequest !== undefined) {
                if (batchResetServersPasswordRequest instanceof BatchResetServersPasswordRequest) {
                    body = batchResetServersPasswordRequest.body
                } else {
                    body = batchResetServersPasswordRequest['body'];
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
         * 批量变更云服务器规格
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchResizeServers(batchResizeServersRequest?: BatchResizeServersRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloudservers/batch-resize",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchResizeServersRequest !== null && batchResizeServersRequest !== undefined) {
                if (batchResizeServersRequest instanceof BatchResizeServersRequest) {
                    body = batchResizeServersRequest.body
                } else {
                    body = batchResizeServersRequest['body'];
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
         * 根据给定的云服务器ID列表，批量启动云服务器，一次最多可以启动1000台。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchStartServers(batchStartServersRequest?: BatchStartServersRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloudservers/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchStartServersRequest !== null && batchStartServersRequest !== undefined) {
                if (batchStartServersRequest instanceof BatchStartServersRequest) {
                    body = batchStartServersRequest.body
                } else {
                    body = batchStartServersRequest['body'];
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
         * 根据给定的云服务器ID列表，批量关闭云服务器，一次最多可以关闭1000台。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchStopServers(batchStopServersRequest?: BatchStopServersRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloudservers/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchStopServersRequest !== null && batchStopServersRequest !== undefined) {
                if (batchStopServersRequest instanceof BatchStopServersRequest) {
                    body = batchStopServersRequest.body
                } else {
                    body = batchStopServersRequest['body'];
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
         * 批量修改弹性云服务器信息。
         * 当前仅支持批量修改云服务器名称，一次最多可以修改1000台。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUpdateServersName(batchUpdateServersNameRequest?: BatchUpdateServersNameRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/cloudservers/server-name",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchUpdateServersNameRequest !== null && batchUpdateServersNameRequest !== undefined) {
                if (batchUpdateServersNameRequest instanceof BatchUpdateServersNameRequest) {
                    body = batchUpdateServersNameRequest.body
                } else {
                    body = batchUpdateServersNameRequest['body'];
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
         * 更换云服务器的计费模式
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeServerChargeMode(changeServerChargeModeRequest?: ChangeServerChargeModeRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloudservers/actions/change-charge-mode",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (changeServerChargeModeRequest !== null && changeServerChargeModeRequest !== undefined) {
                if (changeServerChargeModeRequest instanceof ChangeServerChargeModeRequest) {
                    body = changeServerChargeModeRequest.body
                } else {
                    body = changeServerChargeModeRequest['body'];
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
         * 更新云服务器指定网卡属性，当前仅支持更新网卡IP。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeServerNetworkInterface(changeServerNetworkInterfaceRequest?: ChangeServerNetworkInterfaceRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloudservers/{server_id}/os-interface/{port_id}/change-network-interface",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let portId;
            
            let serverId;

            if (changeServerNetworkInterfaceRequest !== null && changeServerNetworkInterfaceRequest !== undefined) {
                if (changeServerNetworkInterfaceRequest instanceof ChangeServerNetworkInterfaceRequest) {
                    portId = changeServerNetworkInterfaceRequest.portId;
                    serverId = changeServerNetworkInterfaceRequest.serverId;
                    body = changeServerNetworkInterfaceRequest.body
                } else {
                    portId = changeServerNetworkInterfaceRequest['port_id'];
                    serverId = changeServerNetworkInterfaceRequest['server_id'];
                    body = changeServerNetworkInterfaceRequest['body'];
                }
            }

        
            if (portId === null || portId === undefined) {
            throw new RequiredError('portId','Required parameter portId was null or undefined when calling changeServerNetworkInterface.');
            }
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling changeServerNetworkInterface.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'port_id': portId,'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 切换弹性云服务器操作系统。支持弹性云服务器数据盘不变的情况下，使用新镜像重装系统盘。
         * 
         * 调用该接口后，系统将卸载系统盘，然后使用新镜像重新创建系统盘，并挂载至弹性云服务器，实现切换操作系统功能。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeServerOsWithCloudInit(changeServerOsWithCloudInitRequest?: ChangeServerOsWithCloudInitRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/cloudservers/{server_id}/changeos",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (changeServerOsWithCloudInitRequest !== null && changeServerOsWithCloudInitRequest !== undefined) {
                if (changeServerOsWithCloudInitRequest instanceof ChangeServerOsWithCloudInitRequest) {
                    serverId = changeServerOsWithCloudInitRequest.serverId;
                    body = changeServerOsWithCloudInitRequest.body
                } else {
                    serverId = changeServerOsWithCloudInitRequest['server_id'];
                    body = changeServerOsWithCloudInitRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling changeServerOsWithCloudInit.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 切换弹性云服务器操作系统。
         * 
         * 该接口支持未安装Cloud-init或Cloudbase-init的镜像使用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeServerOsWithoutCloudInit(changeServerOsWithoutCloudInitRequest?: ChangeServerOsWithoutCloudInitRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloudservers/{server_id}/changeos",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (changeServerOsWithoutCloudInitRequest !== null && changeServerOsWithoutCloudInitRequest !== undefined) {
                if (changeServerOsWithoutCloudInitRequest instanceof ChangeServerOsWithoutCloudInitRequest) {
                    serverId = changeServerOsWithoutCloudInitRequest.serverId;
                    body = changeServerOsWithoutCloudInitRequest.body
                } else {
                    serverId = changeServerOsWithoutCloudInitRequest['server_id'];
                    body = changeServerOsWithoutCloudInitRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling changeServerOsWithoutCloudInit.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 云服务器切换虚拟私有云。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeVpc(changeVpcRequest?: ChangeVpcRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloudservers/{server_id}/changevpc",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (changeVpcRequest !== null && changeVpcRequest !== undefined) {
                if (changeVpcRequest instanceof ChangeVpcRequest) {
                    serverId = changeVpcRequest.serverId;
                    body = changeVpcRequest.body
                } else {
                    serverId = changeVpcRequest['server_id'];
                    body = changeVpcRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling changeVpc.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建启动模板。将创建一个全新的模板，并自动生成版本号为1的作为默认版本。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createLaunchTemplate(createLaunchTemplateRequest?: CreateLaunchTemplateRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/launch-templates",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createLaunchTemplateRequest !== null && createLaunchTemplateRequest !== undefined) {
                if (createLaunchTemplateRequest instanceof CreateLaunchTemplateRequest) {
                    body = createLaunchTemplateRequest.body
                } else {
                    body = createLaunchTemplateRequest['body'];
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
         * 创建一台或多台[按需付费](https://support.huaweicloud.com/productdesc-ecs/ecs_01_0065.html)方式的云服务器。
         * 
         * 弹性云服务器的登录鉴权方式包括两种：密钥对、密码。为安全起见，推荐使用密钥对方式。
         * 
         * - 密钥对
         * 密钥对指使用密钥对作为弹性云服务器的鉴权方式。
         * 接口调用方法：使用key_name字段，指定弹性云服务器登录时使用的密钥文件。
         * 
         * - 密码
         * 密码指使用设置初始密码方式作为弹性云服务器的鉴权方式，此时，您可以通过用户名密码方式登录弹性云服务器，Linux操作系统时为root用户的初始密码，Windows操作系统时为Administrator用户的初始密码。
         * 
         * 接口调用方法：使用adminPass字段，指定管理员帐号的初始登录密码。对于镜像已安装Cloud-init的Linux云服务器，如果需要使用密文密码，可以使用user_data字段进行密码注入。
         * 
         * &gt; 对于安装Cloud-init镜像的Linux云服务器云主机，若指定user_data字段，则adminPass字段无效。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPostPaidServers(createPostPaidServersRequest?: CreatePostPaidServersRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloudservers",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xClientToken;

            if (createPostPaidServersRequest !== null && createPostPaidServersRequest !== undefined) {
                if (createPostPaidServersRequest instanceof CreatePostPaidServersRequest) {
                    body = createPostPaidServersRequest.body
                    xClientToken = createPostPaidServersRequest.xClientToken;
                } else {
                    body = createPostPaidServersRequest['body'];
                    xClientToken = createPostPaidServersRequest['X-Client-Token'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xClientToken !== undefined && xClientToken !== null) {
                localVarHeaderParameter['X-Client-Token'] = String(xClientToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建弹性云服务器组。
         * 
         * 与原生的创建云服务器组接口不同之处在于该接口支持企业项目细粒度权限的校验。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createServerGroup(createServerGroupRequest?: CreateServerGroupRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloudservers/os-server-groups",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createServerGroupRequest !== null && createServerGroupRequest !== undefined) {
                if (createServerGroupRequest instanceof CreateServerGroupRequest) {
                    body = createServerGroupRequest.body
                } else {
                    body = createServerGroupRequest['body'];
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
         * 创建一台或多台云服务器。
         * 
         * 指该接口兼容《弹性云服务器接口参考》创建云服务器v1的功能，同时合入新功能，支持创建[包年/包月](https://support.huaweicloud.com/productdesc-ecs/ecs_01_0065.html)的弹性云服务器。
         * 
         * 弹性云服务器的登录鉴权方式包括两种：密钥对、密码。为安全起见，推荐使用密钥对方式。
         * 
         * - 密钥对
         * 
         * 指使用密钥对作为弹性云服务器的鉴权方式。
         * 
         * 接口调用方法：使用key_name字段，指定弹性云服务器登录时使用的密钥文件。
         * 
         * - 密码
         * 
         * 指使用设置初始密码方式作为弹性云服务器的鉴权方式，此时，您可以通过用户名密码方式登录弹性云服务器，Linux操作系统时为root用户的初始密码，Windows操作系统时为Administrator用户的初始密码。
         * 
         * 接口调用方法：使用adminPass字段，指定管理员帐号的初始登录密码。对于镜像已安装Cloud-init的Linux云服务器，如果需要使用密文密码，可以使用user_data字段进行密码注入。
         * 
         * &gt; 对于安装Cloud-init镜像的Linux云服务器云主机，若指定user_data字段，则adminPass字段无效。
         * 
         * 购买操作示例：
         * - [使用API购买ECS过程中常见问题及处理方法](https://support.huaweicloud.com/api-ecs/ecs_04_0007.html)
         * - [获取Token并检验Token的有效期 ](https://support.huaweicloud.com/api-ecs/ecs_04_0008.html)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createServers(createServersRequest?: CreateServersRequest) {
            const options = {
                method: "POST",
                url: "/v1.1/{project_id}/cloudservers",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xClientToken;

            if (createServersRequest !== null && createServersRequest !== undefined) {
                if (createServersRequest instanceof CreateServersRequest) {
                    body = createServersRequest.body
                    xClientToken = createServersRequest.xClientToken;
                } else {
                    body = createServersRequest['body'];
                    xClientToken = createServersRequest['X-Client-Token'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xClientToken !== undefined && xClientToken !== null) {
                localVarHeaderParameter['X-Client-Token'] = String(xClientToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除启动模板。删除一个启动模板。并同时删除模板下所有的版本。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteLaunchTemplates(deleteLaunchTemplatesRequest?: DeleteLaunchTemplatesRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/launch-templates/{launch_template_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let launchTemplateId;

            if (deleteLaunchTemplatesRequest !== null && deleteLaunchTemplatesRequest !== undefined) {
                if (deleteLaunchTemplatesRequest instanceof DeleteLaunchTemplatesRequest) {
                    launchTemplateId = deleteLaunchTemplatesRequest.launchTemplateId;
                } else {
                    launchTemplateId = deleteLaunchTemplatesRequest['launch_template_id'];
                }
            }

        
            if (launchTemplateId === null || launchTemplateId === undefined) {
            throw new RequiredError('launchTemplateId','Required parameter launchTemplateId was null or undefined when calling deleteLaunchTemplates.');
            }

            options.pathParams = { 'launch_template_id': launchTemplateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRecycleBinServer(deleteRecycleBinServerRequest?: DeleteRecycleBinServerRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/recycle-bin/cloudservers/{server_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverId;

            if (deleteRecycleBinServerRequest !== null && deleteRecycleBinServerRequest !== undefined) {
                if (deleteRecycleBinServerRequest instanceof DeleteRecycleBinServerRequest) {
                    serverId = deleteRecycleBinServerRequest.serverId;
                } else {
                    serverId = deleteRecycleBinServerRequest['server_id'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling deleteRecycleBinServer.');
            }

            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除云服务器组。
         * 
         * 与原生的删除云服务器组接口不同之处在于该接口支持企业项目细粒度权限的校验。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteServerGroup(deleteServerGroupRequest?: DeleteServerGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/cloudservers/os-server-groups/{server_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverGroupId;

            if (deleteServerGroupRequest !== null && deleteServerGroupRequest !== undefined) {
                if (deleteServerGroupRequest instanceof DeleteServerGroupRequest) {
                    serverGroupId = deleteServerGroupRequest.serverGroupId;
                } else {
                    serverGroupId = deleteServerGroupRequest['server_group_id'];
                }
            }

        
            if (serverGroupId === null || serverGroupId === undefined) {
            throw new RequiredError('serverGroupId','Required parameter serverGroupId was null or undefined when calling deleteServerGroup.');
            }

            options.pathParams = { 'server_group_id': serverGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 将弹性云服务器移出云服务器组。移出后，该云服务器与云服务器组中的成员不再遵从反亲和策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteServerGroupMember(deleteServerGroupMemberRequest?: DeleteServerGroupMemberRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloudservers/os-server-groups/{server_group_id}/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverGroupId;

            if (deleteServerGroupMemberRequest !== null && deleteServerGroupMemberRequest !== undefined) {
                if (deleteServerGroupMemberRequest instanceof DeleteServerGroupMemberRequest) {
                    serverGroupId = deleteServerGroupMemberRequest.serverGroupId;
                    body = deleteServerGroupMemberRequest.body
                } else {
                    serverGroupId = deleteServerGroupMemberRequest['server_group_id'];
                    body = deleteServerGroupMemberRequest['body'];
                }
            }

        
            if (serverGroupId === null || serverGroupId === undefined) {
            throw new RequiredError('serverGroupId','Required parameter serverGroupId was null or undefined when calling deleteServerGroupMember.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_group_id': serverGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除云服务器指定元数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteServerMetadata(deleteServerMetadataRequest?: DeleteServerMetadataRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/cloudservers/{server_id}/metadata/{key}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let key;
            
            let serverId;

            if (deleteServerMetadataRequest !== null && deleteServerMetadataRequest !== undefined) {
                if (deleteServerMetadataRequest instanceof DeleteServerMetadataRequest) {
                    key = deleteServerMetadataRequest.key;
                    serverId = deleteServerMetadataRequest.serverId;
                } else {
                    key = deleteServerMetadataRequest['key'];
                    serverId = deleteServerMetadataRequest['server_id'];
                }
            }

        
            if (key === null || key === undefined) {
            throw new RequiredError('key','Required parameter key was null or undefined when calling deleteServerMetadata.');
            }
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling deleteServerMetadata.');
            }

            options.pathParams = { 'key': key,'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 清除Windows云服务器初始安装时系统生成的密码记录。清除密码后，不影响云服务器密码登录功能，但不能再使用获取密码功能来查询该云服务器密码。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteServerPassword(deleteServerPasswordRequest?: DeleteServerPasswordRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/cloudservers/{server_id}/os-server-password",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverId;

            if (deleteServerPasswordRequest !== null && deleteServerPasswordRequest !== undefined) {
                if (deleteServerPasswordRequest instanceof DeleteServerPasswordRequest) {
                    serverId = deleteServerPasswordRequest.serverId;
                } else {
                    serverId = deleteServerPasswordRequest['server_id'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling deleteServerPassword.');
            }

            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据指定的云服务器ID列表，删除云服务器。
         * 
         * 系统支持删除单台云服务器和批量删除多台云服务器操作，批量删除云服务器时，一次最多可以删除1000台。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteServers(deleteServersRequest?: DeleteServersRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloudservers/delete",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (deleteServersRequest !== null && deleteServersRequest !== undefined) {
                if (deleteServersRequest instanceof DeleteServersRequest) {
                    body = deleteServersRequest.body
                } else {
                    body = deleteServersRequest['body'];
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
         * 从弹性云服务器中卸载磁盘。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        detachServerVolume(detachServerVolumeRequest?: DetachServerVolumeRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/cloudservers/{server_id}/detachvolume/{volume_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let serverId;
            
            let volumeId;
            
            let deleteFlag;

            if (detachServerVolumeRequest !== null && detachServerVolumeRequest !== undefined) {
                if (detachServerVolumeRequest instanceof DetachServerVolumeRequest) {
                    serverId = detachServerVolumeRequest.serverId;
                    volumeId = detachServerVolumeRequest.volumeId;
                    deleteFlag = detachServerVolumeRequest.deleteFlag;
                } else {
                    serverId = detachServerVolumeRequest['server_id'];
                    volumeId = detachServerVolumeRequest['volume_id'];
                    deleteFlag = detachServerVolumeRequest['delete_flag'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling detachServerVolume.');
            }
            if (volumeId === null || volumeId === undefined) {
            throw new RequiredError('volumeId','Required parameter volumeId was null or undefined when calling detachServerVolume.');
            }
            if (deleteFlag !== null && deleteFlag !== undefined) {
                localVarQueryParameter['delete_flag'] = deleteFlag;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'server_id': serverId,'volume_id': volumeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 虚拟IP地址用于为网卡提供第二个IP地址，同时支持与多个弹性云服务器的网卡绑定，从而实现多个弹性云服务器之间的高可用性。
         * 
         * 该接口用于解绑定弹性云服务器网卡的虚拟IP地址。解绑后，网卡不会被删除。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disassociateServerVirtualIp(disassociateServerVirtualIpRequest?: DisassociateServerVirtualIpRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/cloudservers/nics/{nic_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let nicId;

            if (disassociateServerVirtualIpRequest !== null && disassociateServerVirtualIpRequest !== undefined) {
                if (disassociateServerVirtualIpRequest instanceof DisassociateServerVirtualIpRequest) {
                    nicId = disassociateServerVirtualIpRequest.nicId;
                    body = disassociateServerVirtualIpRequest.body
                } else {
                    nicId = disassociateServerVirtualIpRequest['nic_id'];
                    body = disassociateServerVirtualIpRequest['body'];
                }
            }

        
            if (nicId === null || nicId === undefined) {
            throw new RequiredError('nicId','Required parameter nicId was null or undefined when calling disassociateServerVirtualIp.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'nic_id': nicId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 触发云服务器内核dump
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeServerDump(executeServerDumpRequest?: ExecuteServerDumpRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloudservers/{server_id}/actions/trigger-crash-dump",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverId;

            if (executeServerDumpRequest !== null && executeServerDumpRequest !== undefined) {
                if (executeServerDumpRequest instanceof ExecuteServerDumpRequest) {
                    serverId = executeServerDumpRequest.serverId;
                } else {
                    serverId = executeServerDumpRequest['server_id'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling executeServerDump.');
            }

            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重部署云服务器
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeServerRedeploy(executeServerRedeployRequest?: ExecuteServerRedeployRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloudservers/{server_id}/actions/redeploy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverId;

            if (executeServerRedeployRequest !== null && executeServerRedeployRequest !== undefined) {
                if (executeServerRedeployRequest instanceof ExecuteServerRedeployRequest) {
                    serverId = executeServerRedeployRequest.serverId;
                } else {
                    serverId = executeServerRedeployRequest['server_id'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling executeServerRedeploy.');
            }

            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询云服务器列表接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCloudServers(listCloudServersRequest?: ListCloudServersRequest) {
            const options = {
                method: "GET",
                url: "/v1.1/{project_id}/cloudservers/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let id;
            
            let name;
            
            let status;
            
            let inRecycleBin;
            
            let spodId;
            
            let flavorName;
            
            let imageId;
            
            let metadata;
            
            let metadataKey;
            
            let tags;
            
            let notTags;
            
            let availabilityZone;
            
            let availabilityZoneEq;
            
            let chargingMode;
            
            let keyName;
            
            let launchedSince;
            
            let enterpriseProjectId;
            
            let expectFields;
            
            let limit;
            
            let marker;

            if (listCloudServersRequest !== null && listCloudServersRequest !== undefined) {
                if (listCloudServersRequest instanceof ListCloudServersRequest) {
                    id = listCloudServersRequest.id;
                    name = listCloudServersRequest.name;
                    status = listCloudServersRequest.status;
                    inRecycleBin = listCloudServersRequest.inRecycleBin;
                    spodId = listCloudServersRequest.spodId;
                    flavorName = listCloudServersRequest.flavorName;
                    imageId = listCloudServersRequest.imageId;
                    metadata = listCloudServersRequest.metadata;
                    metadataKey = listCloudServersRequest.metadataKey;
                    tags = listCloudServersRequest.tags;
                    notTags = listCloudServersRequest.notTags;
                    availabilityZone = listCloudServersRequest.availabilityZone;
                    availabilityZoneEq = listCloudServersRequest.availabilityZoneEq;
                    chargingMode = listCloudServersRequest.chargingMode;
                    keyName = listCloudServersRequest.keyName;
                    launchedSince = listCloudServersRequest.launchedSince;
                    enterpriseProjectId = listCloudServersRequest.enterpriseProjectId;
                    expectFields = listCloudServersRequest.expectFields;
                    limit = listCloudServersRequest.limit;
                    marker = listCloudServersRequest.marker;
                } else {
                    id = listCloudServersRequest['id'];
                    name = listCloudServersRequest['name'];
                    status = listCloudServersRequest['status'];
                    inRecycleBin = listCloudServersRequest['in_recycle_bin'];
                    spodId = listCloudServersRequest['spod_id'];
                    flavorName = listCloudServersRequest['flavor_name'];
                    imageId = listCloudServersRequest['image_id'];
                    metadata = listCloudServersRequest['metadata'];
                    metadataKey = listCloudServersRequest['metadata-key'];
                    tags = listCloudServersRequest['tags'];
                    notTags = listCloudServersRequest['not-tags'];
                    availabilityZone = listCloudServersRequest['availability_zone'];
                    availabilityZoneEq = listCloudServersRequest['availability_zone_eq'];
                    chargingMode = listCloudServersRequest['charging_mode'];
                    keyName = listCloudServersRequest['key_name'];
                    launchedSince = listCloudServersRequest['launched_since'];
                    enterpriseProjectId = listCloudServersRequest['enterprise_project_id'];
                    expectFields = listCloudServersRequest['expect-fields'];
                    limit = listCloudServersRequest['limit'];
                    marker = listCloudServersRequest['marker'];
                }
            }

        
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (inRecycleBin !== null && inRecycleBin !== undefined) {
                localVarQueryParameter['in_recycle_bin'] = inRecycleBin;
            }
            if (spodId !== null && spodId !== undefined) {
                localVarQueryParameter['spod_id'] = spodId;
            }
            if (flavorName !== null && flavorName !== undefined) {
                localVarQueryParameter['flavor_name'] = flavorName;
            }
            if (imageId !== null && imageId !== undefined) {
                localVarQueryParameter['image_id'] = imageId;
            }
            if (metadata !== null && metadata !== undefined) {
                localVarQueryParameter['metadata'] = metadata;
            }
            if (metadataKey !== null && metadataKey !== undefined) {
                localVarQueryParameter['metadata-key'] = metadataKey;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }
            if (notTags !== null && notTags !== undefined) {
                localVarQueryParameter['not-tags'] = notTags;
            }
            if (availabilityZone !== null && availabilityZone !== undefined) {
                localVarQueryParameter['availability_zone'] = availabilityZone;
            }
            if (availabilityZoneEq !== null && availabilityZoneEq !== undefined) {
                localVarQueryParameter['availability_zone_eq'] = availabilityZoneEq;
            }
            if (chargingMode !== null && chargingMode !== undefined) {
                localVarQueryParameter['charging_mode'] = chargingMode;
            }
            if (keyName !== null && keyName !== undefined) {
                localVarQueryParameter['key_name'] = keyName;
            }
            if (launchedSince !== null && launchedSince !== undefined) {
                localVarQueryParameter['launched_since'] = launchedSince;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (expectFields !== null && expectFields !== undefined) {
                localVarQueryParameter['expect-fields'] = expectFields;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询规格销售策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFlavorSellPolicies(listFlavorSellPoliciesRequest?: ListFlavorSellPoliciesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloudservers/flavor-sell-policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let flavorId;
            
            let sellStatus;
            
            let sellMode;
            
            let availabilityZoneId;
            
            let longestSpotDurationHoursGt;
            
            let largestSpotDurationCountGt;
            
            let longestSpotDurationHours;
            
            let largestSpotDurationCount;
            
            let interruptionPolicy;
            
            let limit;
            
            let marker;

            if (listFlavorSellPoliciesRequest !== null && listFlavorSellPoliciesRequest !== undefined) {
                if (listFlavorSellPoliciesRequest instanceof ListFlavorSellPoliciesRequest) {
                    flavorId = listFlavorSellPoliciesRequest.flavorId;
                    sellStatus = listFlavorSellPoliciesRequest.sellStatus;
                    sellMode = listFlavorSellPoliciesRequest.sellMode;
                    availabilityZoneId = listFlavorSellPoliciesRequest.availabilityZoneId;
                    longestSpotDurationHoursGt = listFlavorSellPoliciesRequest.longestSpotDurationHoursGt;
                    largestSpotDurationCountGt = listFlavorSellPoliciesRequest.largestSpotDurationCountGt;
                    longestSpotDurationHours = listFlavorSellPoliciesRequest.longestSpotDurationHours;
                    largestSpotDurationCount = listFlavorSellPoliciesRequest.largestSpotDurationCount;
                    interruptionPolicy = listFlavorSellPoliciesRequest.interruptionPolicy;
                    limit = listFlavorSellPoliciesRequest.limit;
                    marker = listFlavorSellPoliciesRequest.marker;
                } else {
                    flavorId = listFlavorSellPoliciesRequest['flavor_id'];
                    sellStatus = listFlavorSellPoliciesRequest['sell_status'];
                    sellMode = listFlavorSellPoliciesRequest['sell_mode'];
                    availabilityZoneId = listFlavorSellPoliciesRequest['availability_zone_id'];
                    longestSpotDurationHoursGt = listFlavorSellPoliciesRequest['longest_spot_duration_hours_gt'];
                    largestSpotDurationCountGt = listFlavorSellPoliciesRequest['largest_spot_duration_count_gt'];
                    longestSpotDurationHours = listFlavorSellPoliciesRequest['longest_spot_duration_hours'];
                    largestSpotDurationCount = listFlavorSellPoliciesRequest['largest_spot_duration_count'];
                    interruptionPolicy = listFlavorSellPoliciesRequest['interruption_policy'];
                    limit = listFlavorSellPoliciesRequest['limit'];
                    marker = listFlavorSellPoliciesRequest['marker'];
                }
            }

        
            if (flavorId !== null && flavorId !== undefined) {
                localVarQueryParameter['flavor_id'] = flavorId;
            }
            if (sellStatus !== null && sellStatus !== undefined) {
                localVarQueryParameter['sell_status'] = sellStatus;
            }
            if (sellMode !== null && sellMode !== undefined) {
                localVarQueryParameter['sell_mode'] = sellMode;
            }
            if (availabilityZoneId !== null && availabilityZoneId !== undefined) {
                localVarQueryParameter['availability_zone_id'] = availabilityZoneId;
            }
            if (longestSpotDurationHoursGt !== null && longestSpotDurationHoursGt !== undefined) {
                localVarQueryParameter['longest_spot_duration_hours_gt'] = longestSpotDurationHoursGt;
            }
            if (largestSpotDurationCountGt !== null && largestSpotDurationCountGt !== undefined) {
                localVarQueryParameter['largest_spot_duration_count_gt'] = largestSpotDurationCountGt;
            }
            if (longestSpotDurationHours !== null && longestSpotDurationHours !== undefined) {
                localVarQueryParameter['longest_spot_duration_hours'] = longestSpotDurationHours;
            }
            if (largestSpotDurationCount !== null && largestSpotDurationCount !== undefined) {
                localVarQueryParameter['largest_spot_duration_count'] = largestSpotDurationCount;
            }
            if (interruptionPolicy !== null && interruptionPolicy !== undefined) {
                localVarQueryParameter['interruption_policy'] = interruptionPolicy;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询云服务器规格详情信息和规格扩展信息列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFlavors(listFlavorsRequest?: ListFlavorsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloudservers/flavors",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let availabilityZone;
            
            let flavorId;
            
            let limit;
            
            let marker;

            if (listFlavorsRequest !== null && listFlavorsRequest !== undefined) {
                if (listFlavorsRequest instanceof ListFlavorsRequest) {
                    availabilityZone = listFlavorsRequest.availabilityZone;
                    flavorId = listFlavorsRequest.flavorId;
                    limit = listFlavorsRequest.limit;
                    marker = listFlavorsRequest.marker;
                } else {
                    availabilityZone = listFlavorsRequest['availability_zone'];
                    flavorId = listFlavorsRequest['flavor_id'];
                    limit = listFlavorsRequest['limit'];
                    marker = listFlavorsRequest['marker'];
                }
            }

        
            if (availabilityZone !== null && availabilityZone !== undefined) {
                localVarQueryParameter['availability_zone'] = availabilityZone;
            }
            if (flavorId !== null && flavorId !== undefined) {
                localVarQueryParameter['flavor_id'] = flavorId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据用户请求条件从数据库筛选、查询启动模板的版本相关信息，支持按照image_id和flavor_id进行过滤。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLaunchTemplateVersions(listLaunchTemplateVersionsRequest?: ListLaunchTemplateVersionsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/launch-template-versions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let launchTemplateId;
            
            let imageId;
            
            let flavorId;
            
            let version;

            if (listLaunchTemplateVersionsRequest !== null && listLaunchTemplateVersionsRequest !== undefined) {
                if (listLaunchTemplateVersionsRequest instanceof ListLaunchTemplateVersionsRequest) {
                    limit = listLaunchTemplateVersionsRequest.limit;
                    marker = listLaunchTemplateVersionsRequest.marker;
                    launchTemplateId = listLaunchTemplateVersionsRequest.launchTemplateId;
                    imageId = listLaunchTemplateVersionsRequest.imageId;
                    flavorId = listLaunchTemplateVersionsRequest.flavorId;
                    version = listLaunchTemplateVersionsRequest.version;
                } else {
                    limit = listLaunchTemplateVersionsRequest['limit'];
                    marker = listLaunchTemplateVersionsRequest['marker'];
                    launchTemplateId = listLaunchTemplateVersionsRequest['launch_template_id'];
                    imageId = listLaunchTemplateVersionsRequest['image_id'];
                    flavorId = listLaunchTemplateVersionsRequest['flavor_id'];
                    version = listLaunchTemplateVersionsRequest['version'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (launchTemplateId !== null && launchTemplateId !== undefined) {
                localVarQueryParameter['launch_template_id'] = launchTemplateId;
            }
            if (imageId !== null && imageId !== undefined) {
                localVarQueryParameter['image_id'] = imageId;
            }
            if (flavorId !== null && flavorId !== undefined) {
                localVarQueryParameter['flavor_id'] = flavorId;
            }
            if (version !== null && version !== undefined) {
                localVarQueryParameter['version'] = version;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRecycleBinServers(listRecycleBinServersRequest?: ListRecycleBinServersRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/recycle-bin/cloudservers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let allTenants;
            
            let availabilityZone;
            
            let expectFields;
            
            let ipAddress;
            
            let limit;
            
            let marker;
            
            let name;
            
            let offset;
            
            let tags;
            
            let tagsKey;

            if (listRecycleBinServersRequest !== null && listRecycleBinServersRequest !== undefined) {
                if (listRecycleBinServersRequest instanceof ListRecycleBinServersRequest) {
                    allTenants = listRecycleBinServersRequest.allTenants;
                    availabilityZone = listRecycleBinServersRequest.availabilityZone;
                    expectFields = listRecycleBinServersRequest.expectFields;
                    ipAddress = listRecycleBinServersRequest.ipAddress;
                    limit = listRecycleBinServersRequest.limit;
                    marker = listRecycleBinServersRequest.marker;
                    name = listRecycleBinServersRequest.name;
                    offset = listRecycleBinServersRequest.offset;
                    tags = listRecycleBinServersRequest.tags;
                    tagsKey = listRecycleBinServersRequest.tagsKey;
                } else {
                    allTenants = listRecycleBinServersRequest['all_tenants'];
                    availabilityZone = listRecycleBinServersRequest['availability_zone'];
                    expectFields = listRecycleBinServersRequest['expect-fields'];
                    ipAddress = listRecycleBinServersRequest['ip_address'];
                    limit = listRecycleBinServersRequest['limit'];
                    marker = listRecycleBinServersRequest['marker'];
                    name = listRecycleBinServersRequest['name'];
                    offset = listRecycleBinServersRequest['offset'];
                    tags = listRecycleBinServersRequest['tags'];
                    tagsKey = listRecycleBinServersRequest['tags_key'];
                }
            }

        
            if (allTenants !== null && allTenants !== undefined) {
                localVarQueryParameter['all_tenants'] = allTenants;
            }
            if (availabilityZone !== null && availabilityZone !== undefined) {
                localVarQueryParameter['availability_zone'] = availabilityZone;
            }
            if (expectFields !== null && expectFields !== undefined) {
                localVarQueryParameter['expect-fields'] = expectFields;
            }
            if (ipAddress !== null && ipAddress !== undefined) {
                localVarQueryParameter['ip_address'] = ipAddress;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }
            if (tagsKey !== null && tagsKey !== undefined) {
                localVarQueryParameter['tags_key'] = tagsKey;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 变更规格时，部分规格的云服务器之间不能互相变更。您可以通过本接口，通过指定弹性云服务器规格，查询该规格可以变更的规格列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listResizeFlavors(listResizeFlavorsRequest?: ListResizeFlavorsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloudservers/resize_flavors",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceUuid;
            
            let limit;
            
            let marker;
            
            let sortDir;
            
            let sortKey;
            
            let sourceFlavorId;
            
            let sourceFlavorName;

            if (listResizeFlavorsRequest !== null && listResizeFlavorsRequest !== undefined) {
                if (listResizeFlavorsRequest instanceof ListResizeFlavorsRequest) {
                    instanceUuid = listResizeFlavorsRequest.instanceUuid;
                    limit = listResizeFlavorsRequest.limit;
                    marker = listResizeFlavorsRequest.marker;
                    sortDir = listResizeFlavorsRequest.sortDir;
                    sortKey = listResizeFlavorsRequest.sortKey;
                    sourceFlavorId = listResizeFlavorsRequest.sourceFlavorId;
                    sourceFlavorName = listResizeFlavorsRequest.sourceFlavorName;
                } else {
                    instanceUuid = listResizeFlavorsRequest['instance_uuid'];
                    limit = listResizeFlavorsRequest['limit'];
                    marker = listResizeFlavorsRequest['marker'];
                    sortDir = listResizeFlavorsRequest['sort_dir'];
                    sortKey = listResizeFlavorsRequest['sort_key'];
                    sourceFlavorId = listResizeFlavorsRequest['source_flavor_id'];
                    sourceFlavorName = listResizeFlavorsRequest['source_flavor_name'];
                }
            }

        
            if (instanceUuid !== null && instanceUuid !== undefined) {
                localVarQueryParameter['instance_uuid'] = instanceUuid;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sourceFlavorId !== null && sourceFlavorId !== undefined) {
                localVarQueryParameter['source_flavor_id'] = sourceFlavorId;
            }
            if (sourceFlavorName !== null && sourceFlavorName !== undefined) {
                localVarQueryParameter['source_flavor_name'] = sourceFlavorName;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询计划事件列表
         * 支持查看过去7天内计划事件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listScheduledEvents(listScheduledEventsRequest?: ListScheduledEventsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instance-scheduled-events",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let marker;
            
            let id;
            
            let instanceId;
            
            let type;
            
            let state;
            
            let publishSince;
            
            let publishUntil;
            
            let limit;

            if (listScheduledEventsRequest !== null && listScheduledEventsRequest !== undefined) {
                if (listScheduledEventsRequest instanceof ListScheduledEventsRequest) {
                    marker = listScheduledEventsRequest.marker;
                    id = listScheduledEventsRequest.id;
                    instanceId = listScheduledEventsRequest.instanceId;
                    type = listScheduledEventsRequest.type;
                    state = listScheduledEventsRequest.state;
                    publishSince = listScheduledEventsRequest.publishSince;
                    publishUntil = listScheduledEventsRequest.publishUntil;
                    limit = listScheduledEventsRequest.limit;
                } else {
                    marker = listScheduledEventsRequest['marker'];
                    id = listScheduledEventsRequest['id'];
                    instanceId = listScheduledEventsRequest['instance_id'];
                    type = listScheduledEventsRequest['type'];
                    state = listScheduledEventsRequest['state'];
                    publishSince = listScheduledEventsRequest['publish_since'];
                    publishUntil = listScheduledEventsRequest['publish_until'];
                    limit = listScheduledEventsRequest['limit'];
                }
            }

        
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (state !== null && state !== undefined) {
                localVarQueryParameter['state'] = state;
            }
            if (publishSince !== null && publishSince !== undefined) {
                localVarQueryParameter['publish_since'] = publishSince;
            }
            if (publishUntil !== null && publishUntil !== undefined) {
                localVarQueryParameter['publish_until'] = publishUntil;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询可用区列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listServerAzInfo() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/availability-zones",
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
         * 查询弹性云服务器挂载的磁盘信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listServerBlockDevices(listServerBlockDevicesRequest?: ListServerBlockDevicesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloudservers/{server_id}/block_device",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverId;

            if (listServerBlockDevicesRequest !== null && listServerBlockDevicesRequest !== undefined) {
                if (listServerBlockDevicesRequest instanceof ListServerBlockDevicesRequest) {
                    serverId = listServerBlockDevicesRequest.serverId;
                } else {
                    serverId = listServerBlockDevicesRequest['server_id'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling listServerBlockDevices.');
            }

            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询弹性云服务器组。
         * 
         * 与原生的创建云服务器组接口不同之处在于该接口支持企业项目细粒度权限的校验。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listServerGroups(listServerGroupsRequest?: ListServerGroupsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloudservers/os-server-groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;

            if (listServerGroupsRequest !== null && listServerGroupsRequest !== undefined) {
                if (listServerGroupsRequest instanceof ListServerGroupsRequest) {
                    limit = listServerGroupsRequest.limit;
                    marker = listServerGroupsRequest.marker;
                } else {
                    limit = listServerGroupsRequest['limit'];
                    marker = listServerGroupsRequest['marker'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询云服务器网卡信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listServerInterfaces(listServerInterfacesRequest?: ListServerInterfacesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloudservers/{server_id}/os-interface",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverId;

            if (listServerInterfacesRequest !== null && listServerInterfacesRequest !== undefined) {
                if (listServerInterfacesRequest instanceof ListServerInterfacesRequest) {
                    serverId = listServerInterfacesRequest.serverId;
                } else {
                    serverId = listServerInterfacesRequest['server_id'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling listServerInterfaces.');
            }

            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 项目（Project）用于将OpenStack的资源（计算资源、存储资源和网络资源）进行分组和隔离。项目可以是一个部门或者一个项目组。一个帐户中可以创建多个项目。
         * 
         * 该接口用于查询用户在指定项目所使用的全部标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listServerTags() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloudservers/tags",
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
         * 查询弹性云服务器挂载的磁盘信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listServerVolumeAttachments(listServerVolumeAttachmentsRequest?: ListServerVolumeAttachmentsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloudservers/{server_id}/os-volume_attachments",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverId;

            if (listServerVolumeAttachmentsRequest !== null && listServerVolumeAttachmentsRequest !== undefined) {
                if (listServerVolumeAttachmentsRequest instanceof ListServerVolumeAttachmentsRequest) {
                    serverId = listServerVolumeAttachmentsRequest.serverId;
                } else {
                    serverId = listServerVolumeAttachmentsRequest['server_id'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling listServerVolumeAttachments.');
            }

            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 使用标签过滤弹性云服务器，并返回云服务器使用的所有标签和资源列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listServersByTag(listServersByTagRequest?: ListServersByTagRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloudservers/resource_instances/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (listServersByTagRequest !== null && listServersByTagRequest !== undefined) {
                if (listServersByTagRequest instanceof ListServersByTagRequest) {
                    body = listServersByTagRequest.body
                } else {
                    body = listServersByTagRequest['body'];
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
         * 根据用户请求条件从数据库筛选、查询所有的弹性云服务器，并关联相关表获取到弹性云服务器的详细信息。
         * 
         * 该接口支持查询弹性云服务器计费方式，以及是否被冻结。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listServersDetails(listServersDetailsRequest?: ListServersDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloudservers/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let enterpriseProjectId;
            
            let flavor;
            
            let ip;
            
            let limit;
            
            let name;
            
            let notTags;
            
            let offset;
            
            let reservationId;
            
            let status;
            
            let tags;
            
            let ipEq;
            
            let serverId;
            
            let marker;

            if (listServersDetailsRequest !== null && listServersDetailsRequest !== undefined) {
                if (listServersDetailsRequest instanceof ListServersDetailsRequest) {
                    enterpriseProjectId = listServersDetailsRequest.enterpriseProjectId;
                    flavor = listServersDetailsRequest.flavor;
                    ip = listServersDetailsRequest.ip;
                    limit = listServersDetailsRequest.limit;
                    name = listServersDetailsRequest.name;
                    notTags = listServersDetailsRequest.notTags;
                    offset = listServersDetailsRequest.offset;
                    reservationId = listServersDetailsRequest.reservationId;
                    status = listServersDetailsRequest.status;
                    tags = listServersDetailsRequest.tags;
                    ipEq = listServersDetailsRequest.ipEq;
                    serverId = listServersDetailsRequest.serverId;
                    marker = listServersDetailsRequest.marker;
                } else {
                    enterpriseProjectId = listServersDetailsRequest['enterprise_project_id'];
                    flavor = listServersDetailsRequest['flavor'];
                    ip = listServersDetailsRequest['ip'];
                    limit = listServersDetailsRequest['limit'];
                    name = listServersDetailsRequest['name'];
                    notTags = listServersDetailsRequest['not-tags'];
                    offset = listServersDetailsRequest['offset'];
                    reservationId = listServersDetailsRequest['reservation_id'];
                    status = listServersDetailsRequest['status'];
                    tags = listServersDetailsRequest['tags'];
                    ipEq = listServersDetailsRequest['ip_eq'];
                    serverId = listServersDetailsRequest['server_id'];
                    marker = listServersDetailsRequest['marker'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (flavor !== null && flavor !== undefined) {
                localVarQueryParameter['flavor'] = flavor;
            }
            if (ip !== null && ip !== undefined) {
                localVarQueryParameter['ip'] = ip;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (notTags !== null && notTags !== undefined) {
                localVarQueryParameter['not-tags'] = notTags;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (reservationId !== null && reservationId !== undefined) {
                localVarQueryParameter['reservation_id'] = reservationId;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }
            if (ipEq !== null && ipEq !== undefined) {
                localVarQueryParameter['ip_eq'] = ipEq;
            }
            if (serverId !== null && serverId !== undefined) {
                localVarQueryParameter['server_id'] = serverId;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据用户请求条件从数据库筛选、查询启动模板相关信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTemplates(listTemplatesRequest?: ListTemplatesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/launch-templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let launchTemplateId;
            
            let name;

            if (listTemplatesRequest !== null && listTemplatesRequest !== undefined) {
                if (listTemplatesRequest instanceof ListTemplatesRequest) {
                    limit = listTemplatesRequest.limit;
                    marker = listTemplatesRequest.marker;
                    launchTemplateId = listTemplatesRequest.launchTemplateId;
                    name = listTemplatesRequest.name;
                } else {
                    limit = listTemplatesRequest['limit'];
                    marker = listTemplatesRequest['marker'];
                    launchTemplateId = listTemplatesRequest['launch_template_id'];
                    name = listTemplatesRequest['name'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (launchTemplateId !== null && launchTemplateId !== undefined) {
                localVarQueryParameter['launch_template_id'] = launchTemplateId;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 将部署在专属主机上的弹性云服务器迁移至其他专属主机。
         * - 将部署在专属主机上的弹性云服务器迁移至公共资源池，即不再部署在专属主机上。
         * - 将公共资源池的弹性云服务器迁移至专属主机上，成为专属主机上部署的弹性云服务器。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        migrateServer(migrateServerRequest?: MigrateServerRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloudservers/{server_id}/migrate",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (migrateServerRequest !== null && migrateServerRequest !== undefined) {
                if (migrateServerRequest instanceof MigrateServerRequest) {
                    serverId = migrateServerRequest.serverId;
                    body = migrateServerRequest.body
                } else {
                    serverId = migrateServerRequest['server_id'];
                    body = migrateServerRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling migrateServer.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 为弹性云服务器添加一个安全组。
         * 
         * 添加多个安全组时，建议最多为弹性云服务器添加5个安全组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        novaAssociateSecurityGroup(novaAssociateSecurityGroupRequest?: NovaAssociateSecurityGroupRequest) {
            const options = {
                method: "POST",
                url: "/v2.1/{project_id}/servers/{server_id}/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (novaAssociateSecurityGroupRequest !== null && novaAssociateSecurityGroupRequest !== undefined) {
                if (novaAssociateSecurityGroupRequest instanceof NovaAssociateSecurityGroupRequest) {
                    serverId = novaAssociateSecurityGroupRequest.serverId;
                    body = novaAssociateSecurityGroupRequest.body
                } else {
                    serverId = novaAssociateSecurityGroupRequest['server_id'];
                    body = novaAssociateSecurityGroupRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling novaAssociateSecurityGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 给云服务器添加一张网卡。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        novaAttachInterface(novaAttachInterfaceRequest?: NovaAttachInterfaceRequest) {
            const options = {
                method: "POST",
                url: "/v2.1/{project_id}/servers/{server_id}/os-interface",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (novaAttachInterfaceRequest !== null && novaAttachInterfaceRequest !== undefined) {
                if (novaAttachInterfaceRequest instanceof NovaAttachInterfaceRequest) {
                    serverId = novaAttachInterfaceRequest.serverId;
                    body = novaAttachInterfaceRequest.body
                } else {
                    serverId = novaAttachInterfaceRequest['server_id'];
                    body = novaAttachInterfaceRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling novaAttachInterface.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建SSH密钥，或把公钥导入系统，生成密钥对。
         * 
         * 创建SSH密钥成功后，请把响应数据中的私钥内容保存到本地文件，用户使用该私钥登录云服务器云主机。为保证云服务器云主机器安全，私钥数据只能读取一次，请妥善保管。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        novaCreateKeypair(novaCreateKeypairRequest?: NovaCreateKeypairRequest) {
            const options = {
                method: "POST",
                url: "/v2.1/{project_id}/os-keypairs",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let openStackAPIVersion;

            if (novaCreateKeypairRequest !== null && novaCreateKeypairRequest !== undefined) {
                if (novaCreateKeypairRequest instanceof NovaCreateKeypairRequest) {
                    body = novaCreateKeypairRequest.body
                    openStackAPIVersion = novaCreateKeypairRequest.openStackAPIVersion;
                } else {
                    body = novaCreateKeypairRequest['body'];
                    openStackAPIVersion = novaCreateKeypairRequest['OpenStack-API-Version'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (openStackAPIVersion !== undefined && openStackAPIVersion !== null) {
                localVarHeaderParameter['OpenStack-API-Version'] = String(openStackAPIVersion);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建一台弹性云服务器。
         * 
         * 弹性云服务器创建完成后，如需开启自动恢复功能，可以调用配置云服务器自动恢复的接口，具体使用请参见管理云服务器自动恢复动作。
         * 
         * 该接口在云服务器创建失败后不支持自动回滚。若需要自动回滚能力，可以调用POST /v1/{project_id}/cloudservers接口，具体使用请参见创建云服务器（按需）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        novaCreateServers(novaCreateServersRequest?: NovaCreateServersRequest) {
            const options = {
                method: "POST",
                url: "/v2.1/{project_id}/servers",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let openStackAPIVersion;

            if (novaCreateServersRequest !== null && novaCreateServersRequest !== undefined) {
                if (novaCreateServersRequest instanceof NovaCreateServersRequest) {
                    body = novaCreateServersRequest.body
                    openStackAPIVersion = novaCreateServersRequest.openStackAPIVersion;
                } else {
                    body = novaCreateServersRequest['body'];
                    openStackAPIVersion = novaCreateServersRequest['OpenStack-API-Version'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (openStackAPIVersion !== undefined && openStackAPIVersion !== null) {
                localVarHeaderParameter['OpenStack-API-Version'] = String(openStackAPIVersion);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据SSH密钥的名称，删除指定SSH密钥。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        novaDeleteKeypair(novaDeleteKeypairRequest?: NovaDeleteKeypairRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.1/{project_id}/os-keypairs/{keypair_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let keypairName;

            if (novaDeleteKeypairRequest !== null && novaDeleteKeypairRequest !== undefined) {
                if (novaDeleteKeypairRequest instanceof NovaDeleteKeypairRequest) {
                    keypairName = novaDeleteKeypairRequest.keypairName;
                } else {
                    keypairName = novaDeleteKeypairRequest['keypair_name'];
                }
            }

        
            if (keypairName === null || keypairName === undefined) {
            throw new RequiredError('keypairName','Required parameter keypairName was null or undefined when calling novaDeleteKeypair.');
            }

            options.pathParams = { 'keypair_name': keypairName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除一台云服务器。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        novaDeleteServer(novaDeleteServerRequest?: NovaDeleteServerRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.1/{project_id}/servers/{server_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverId;

            if (novaDeleteServerRequest !== null && novaDeleteServerRequest !== undefined) {
                if (novaDeleteServerRequest instanceof NovaDeleteServerRequest) {
                    serverId = novaDeleteServerRequest.serverId;
                } else {
                    serverId = novaDeleteServerRequest['server_id'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling novaDeleteServer.');
            }

            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 移除弹性云服务器中的安全组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        novaDisassociateSecurityGroup(novaDisassociateSecurityGroupRequest?: NovaDisassociateSecurityGroupRequest) {
            const options = {
                method: "POST",
                url: "/v2.1/{project_id}/servers/{server_id}/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (novaDisassociateSecurityGroupRequest !== null && novaDisassociateSecurityGroupRequest !== undefined) {
                if (novaDisassociateSecurityGroupRequest instanceof NovaDisassociateSecurityGroupRequest) {
                    serverId = novaDisassociateSecurityGroupRequest.serverId;
                    body = novaDisassociateSecurityGroupRequest.body
                } else {
                    serverId = novaDisassociateSecurityGroupRequest['server_id'];
                    body = novaDisassociateSecurityGroupRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling novaDisassociateSecurityGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询可用域列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        novaListAvailabilityZones() {
            const options = {
                method: "GET",
                url: "/v2.1/{project_id}/os-availability-zone",
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
         * 查询SSH密钥信息列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        novaListKeypairs(novaListKeypairsRequest?: NovaListKeypairsRequest) {
            const options = {
                method: "GET",
                url: "/v2.1/{project_id}/os-keypairs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let openStackAPIVersion;

            if (novaListKeypairsRequest !== null && novaListKeypairsRequest !== undefined) {
                if (novaListKeypairsRequest instanceof NovaListKeypairsRequest) {
                    limit = novaListKeypairsRequest.limit;
                    marker = novaListKeypairsRequest.marker;
                    openStackAPIVersion = novaListKeypairsRequest.openStackAPIVersion;
                } else {
                    limit = novaListKeypairsRequest['limit'];
                    marker = novaListKeypairsRequest['marker'];
                    openStackAPIVersion = novaListKeypairsRequest['OpenStack-API-Version'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (openStackAPIVersion !== undefined && openStackAPIVersion !== null) {
                localVarHeaderParameter['OpenStack-API-Version'] = String(openStackAPIVersion);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定弹性云服务器的安全组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        novaListServerSecurityGroups(novaListServerSecurityGroupsRequest?: NovaListServerSecurityGroupsRequest) {
            const options = {
                method: "GET",
                url: "/v2.1/{project_id}/servers/{server_id}/os-security-groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverId;

            if (novaListServerSecurityGroupsRequest !== null && novaListServerSecurityGroupsRequest !== undefined) {
                if (novaListServerSecurityGroupsRequest instanceof NovaListServerSecurityGroupsRequest) {
                    serverId = novaListServerSecurityGroupsRequest.serverId;
                } else {
                    serverId = novaListServerSecurityGroupsRequest['server_id'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling novaListServerSecurityGroups.');
            }

            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询云服务器信息列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        novaListServers(novaListServersRequest?: NovaListServersRequest) {
            const options = {
                method: "GET",
                url: "/v2.1/{project_id}/servers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let changesSince;
            
            let flavor;
            
            let host;
            
            let image;
            
            let ip;
            
            let limit;
            
            let marker;
            
            let name;
            
            let notTags;
            
            let reservationId;
            
            let sortKey;
            
            let status;
            
            let tags;
            
            let openStackAPIVersion;

            if (novaListServersRequest !== null && novaListServersRequest !== undefined) {
                if (novaListServersRequest instanceof NovaListServersRequest) {
                    changesSince = novaListServersRequest.changesSince;
                    flavor = novaListServersRequest.flavor;
                    host = novaListServersRequest.host;
                    image = novaListServersRequest.image;
                    ip = novaListServersRequest.ip;
                    limit = novaListServersRequest.limit;
                    marker = novaListServersRequest.marker;
                    name = novaListServersRequest.name;
                    notTags = novaListServersRequest.notTags;
                    reservationId = novaListServersRequest.reservationId;
                    sortKey = novaListServersRequest.sortKey;
                    status = novaListServersRequest.status;
                    tags = novaListServersRequest.tags;
                    openStackAPIVersion = novaListServersRequest.openStackAPIVersion;
                } else {
                    changesSince = novaListServersRequest['changes-since'];
                    flavor = novaListServersRequest['flavor'];
                    host = novaListServersRequest['host'];
                    image = novaListServersRequest['image'];
                    ip = novaListServersRequest['ip'];
                    limit = novaListServersRequest['limit'];
                    marker = novaListServersRequest['marker'];
                    name = novaListServersRequest['name'];
                    notTags = novaListServersRequest['not-tags'];
                    reservationId = novaListServersRequest['reservation_id'];
                    sortKey = novaListServersRequest['sort_key'];
                    status = novaListServersRequest['status'];
                    tags = novaListServersRequest['tags'];
                    openStackAPIVersion = novaListServersRequest['OpenStack-API-Version'];
                }
            }

        
            if (changesSince !== null && changesSince !== undefined) {
                localVarQueryParameter['changes-since'] = changesSince;
            }
            if (flavor !== null && flavor !== undefined) {
                localVarQueryParameter['flavor'] = flavor;
            }
            if (host !== null && host !== undefined) {
                localVarQueryParameter['host'] = host;
            }
            if (image !== null && image !== undefined) {
                localVarQueryParameter['image'] = image;
            }
            if (ip !== null && ip !== undefined) {
                localVarQueryParameter['ip'] = ip;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (notTags !== null && notTags !== undefined) {
                localVarQueryParameter['not-tags'] = notTags;
            }
            if (reservationId !== null && reservationId !== undefined) {
                localVarQueryParameter['reservation_id'] = reservationId;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }
            if (openStackAPIVersion !== undefined && openStackAPIVersion !== null) {
                localVarHeaderParameter['OpenStack-API-Version'] = String(openStackAPIVersion);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询云服务器详情信息列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        novaListServersDetails(novaListServersDetailsRequest?: NovaListServersDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v2.1/{project_id}/servers/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let changesSince;
            
            let flavor;
            
            let image;
            
            let ip;
            
            let limit;
            
            let marker;
            
            let name;
            
            let notTags;
            
            let reservationId;
            
            let sortKey;
            
            let status;
            
            let tags;
            
            let openStackAPIVersion;

            if (novaListServersDetailsRequest !== null && novaListServersDetailsRequest !== undefined) {
                if (novaListServersDetailsRequest instanceof NovaListServersDetailsRequest) {
                    changesSince = novaListServersDetailsRequest.changesSince;
                    flavor = novaListServersDetailsRequest.flavor;
                    image = novaListServersDetailsRequest.image;
                    ip = novaListServersDetailsRequest.ip;
                    limit = novaListServersDetailsRequest.limit;
                    marker = novaListServersDetailsRequest.marker;
                    name = novaListServersDetailsRequest.name;
                    notTags = novaListServersDetailsRequest.notTags;
                    reservationId = novaListServersDetailsRequest.reservationId;
                    sortKey = novaListServersDetailsRequest.sortKey;
                    status = novaListServersDetailsRequest.status;
                    tags = novaListServersDetailsRequest.tags;
                    openStackAPIVersion = novaListServersDetailsRequest.openStackAPIVersion;
                } else {
                    changesSince = novaListServersDetailsRequest['changes-since'];
                    flavor = novaListServersDetailsRequest['flavor'];
                    image = novaListServersDetailsRequest['image'];
                    ip = novaListServersDetailsRequest['ip'];
                    limit = novaListServersDetailsRequest['limit'];
                    marker = novaListServersDetailsRequest['marker'];
                    name = novaListServersDetailsRequest['name'];
                    notTags = novaListServersDetailsRequest['not-tags'];
                    reservationId = novaListServersDetailsRequest['reservation_id'];
                    sortKey = novaListServersDetailsRequest['sort_key'];
                    status = novaListServersDetailsRequest['status'];
                    tags = novaListServersDetailsRequest['tags'];
                    openStackAPIVersion = novaListServersDetailsRequest['OpenStack-API-Version'];
                }
            }

        
            if (changesSince !== null && changesSince !== undefined) {
                localVarQueryParameter['changes-since'] = changesSince;
            }
            if (flavor !== null && flavor !== undefined) {
                localVarQueryParameter['flavor'] = flavor;
            }
            if (image !== null && image !== undefined) {
                localVarQueryParameter['image'] = image;
            }
            if (ip !== null && ip !== undefined) {
                localVarQueryParameter['ip'] = ip;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (notTags !== null && notTags !== undefined) {
                localVarQueryParameter['not-tags'] = notTags;
            }
            if (reservationId !== null && reservationId !== undefined) {
                localVarQueryParameter['reservation_id'] = reservationId;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }
            if (openStackAPIVersion !== undefined && openStackAPIVersion !== null) {
                localVarHeaderParameter['OpenStack-API-Version'] = String(openStackAPIVersion);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定的规格的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        novaShowFlavorExtraSpecs(novaShowFlavorExtraSpecsRequest?: NovaShowFlavorExtraSpecsRequest) {
            const options = {
                method: "GET",
                url: "/v2.1/{project_id}/flavors/{flavor_id}/os-extra_specs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let flavorId;

            if (novaShowFlavorExtraSpecsRequest !== null && novaShowFlavorExtraSpecsRequest !== undefined) {
                if (novaShowFlavorExtraSpecsRequest instanceof NovaShowFlavorExtraSpecsRequest) {
                    flavorId = novaShowFlavorExtraSpecsRequest.flavorId;
                } else {
                    flavorId = novaShowFlavorExtraSpecsRequest['flavor_id'];
                }
            }

        
            if (flavorId === null || flavorId === undefined) {
            throw new RequiredError('flavorId','Required parameter flavorId was null or undefined when calling novaShowFlavorExtraSpecs.');
            }

            options.pathParams = { 'flavor_id': flavorId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据SSH密钥名称查询指定SSH密钥。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        novaShowKeypair(novaShowKeypairRequest?: NovaShowKeypairRequest) {
            const options = {
                method: "GET",
                url: "/v2.1/{project_id}/os-keypairs/{keypair_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let keypairName;
            
            let openStackAPIVersion;

            if (novaShowKeypairRequest !== null && novaShowKeypairRequest !== undefined) {
                if (novaShowKeypairRequest instanceof NovaShowKeypairRequest) {
                    keypairName = novaShowKeypairRequest.keypairName;
                    openStackAPIVersion = novaShowKeypairRequest.openStackAPIVersion;
                } else {
                    keypairName = novaShowKeypairRequest['keypair_name'];
                    openStackAPIVersion = novaShowKeypairRequest['OpenStack-API-Version'];
                }
            }

        
            if (keypairName === null || keypairName === undefined) {
            throw new RequiredError('keypairName','Required parameter keypairName was null or undefined when calling novaShowKeypair.');
            }
            if (openStackAPIVersion !== undefined && openStackAPIVersion !== null) {
                localVarHeaderParameter['OpenStack-API-Version'] = String(openStackAPIVersion);
            }

            options.pathParams = { 'keypair_name': keypairName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据云服务器ID，查询云服务器的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        novaShowServer(novaShowServerRequest?: NovaShowServerRequest) {
            const options = {
                method: "GET",
                url: "/v2.1/{project_id}/servers/{server_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverId;
            
            let openStackAPIVersion;

            if (novaShowServerRequest !== null && novaShowServerRequest !== undefined) {
                if (novaShowServerRequest instanceof NovaShowServerRequest) {
                    serverId = novaShowServerRequest.serverId;
                    openStackAPIVersion = novaShowServerRequest.openStackAPIVersion;
                } else {
                    serverId = novaShowServerRequest['server_id'];
                    openStackAPIVersion = novaShowServerRequest['OpenStack-API-Version'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling novaShowServer.');
            }
            if (openStackAPIVersion !== undefined && openStackAPIVersion !== null) {
                localVarHeaderParameter['OpenStack-API-Version'] = String(openStackAPIVersion);
            }

            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据网卡ID，查询云服务器网卡信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        novaShowServerInterface(novaShowServerInterfaceRequest?: NovaShowServerInterfaceRequest) {
            const options = {
                method: "GET",
                url: "/v2.1/{project_id}/servers/{server_id}/os-interface/{port_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let portId;
            
            let serverId;

            if (novaShowServerInterfaceRequest !== null && novaShowServerInterfaceRequest !== undefined) {
                if (novaShowServerInterfaceRequest instanceof NovaShowServerInterfaceRequest) {
                    portId = novaShowServerInterfaceRequest.portId;
                    serverId = novaShowServerInterfaceRequest.serverId;
                } else {
                    portId = novaShowServerInterfaceRequest['port_id'];
                    serverId = novaShowServerInterfaceRequest['server_id'];
                }
            }

        
            if (portId === null || portId === undefined) {
            throw new RequiredError('portId','Required parameter portId was null or undefined when calling novaShowServerInterface.');
            }
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling novaShowServerInterface.');
            }

            options.pathParams = { 'port_id': portId,'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 将云服务器添加到监控表中。
         * 
         * 注册到监控表中的云服务会被ceilometer周期性采集监控数据，包括平台的版本、cpu信息、内存、网卡、磁盘、硬件平台等信息，这些数据上报给云监控。例如SAP云服务器内部的插件会周期性从云监控中查询监控数据，以报表形式呈现给SAP。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        registerServerMonitor(registerServerMonitorRequest?: RegisterServerMonitorRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/servers/{server_id}/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (registerServerMonitorRequest !== null && registerServerMonitorRequest !== undefined) {
                if (registerServerMonitorRequest instanceof RegisterServerMonitorRequest) {
                    serverId = registerServerMonitorRequest.serverId;
                    body = registerServerMonitorRequest.body
                } else {
                    serverId = registerServerMonitorRequest['server_id'];
                    body = registerServerMonitorRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling registerServerMonitor.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重装弹性云服务器的操作系统。支持弹性云服务器数据盘不变的情况下，使用原镜像重装系统盘。
         * 
         * 调用该接口后，系统将卸载系统盘，然后使用原镜像重新创建系统盘，并挂载至弹性云服务器，实现重装操作系统功能。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        reinstallServerWithCloudInit(reinstallServerWithCloudInitRequest?: ReinstallServerWithCloudInitRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/cloudservers/{server_id}/reinstallos",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (reinstallServerWithCloudInitRequest !== null && reinstallServerWithCloudInitRequest !== undefined) {
                if (reinstallServerWithCloudInitRequest instanceof ReinstallServerWithCloudInitRequest) {
                    serverId = reinstallServerWithCloudInitRequest.serverId;
                    body = reinstallServerWithCloudInitRequest.body
                } else {
                    serverId = reinstallServerWithCloudInitRequest['server_id'];
                    body = reinstallServerWithCloudInitRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling reinstallServerWithCloudInit.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重装弹性云服务器的操作系统。
         * 
         * 该接口支持未安装Cloud-init或Cloudbase-init的镜像。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        reinstallServerWithoutCloudInit(reinstallServerWithoutCloudInitRequest?: ReinstallServerWithoutCloudInitRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloudservers/{server_id}/reinstallos",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (reinstallServerWithoutCloudInitRequest !== null && reinstallServerWithoutCloudInitRequest !== undefined) {
                if (reinstallServerWithoutCloudInitRequest instanceof ReinstallServerWithoutCloudInitRequest) {
                    serverId = reinstallServerWithoutCloudInitRequest.serverId;
                    body = reinstallServerWithoutCloudInitRequest.body
                } else {
                    serverId = reinstallServerWithoutCloudInitRequest['server_id'];
                    body = reinstallServerWithoutCloudInitRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling reinstallServerWithoutCloudInit.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重置弹性云服务器管理帐号（root用户或Administrator用户）的密码。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetServerPassword(resetServerPasswordRequest?: ResetServerPasswordRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/cloudservers/{server_id}/os-reset-password",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (resetServerPasswordRequest !== null && resetServerPasswordRequest !== undefined) {
                if (resetServerPasswordRequest instanceof ResetServerPasswordRequest) {
                    serverId = resetServerPasswordRequest.serverId;
                    body = resetServerPasswordRequest.body
                } else {
                    serverId = resetServerPasswordRequest['server_id'];
                    body = resetServerPasswordRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling resetServerPassword.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当您创建的弹性云服务器规格无法满足业务需要时，可以变更云服务器规格，升级vCPU、内存。具体接口的使用，请参见本节内容。
         * 
         * 变更规格时，部分规格的云服务器之间不能互相变更。
         * 
         * 您可以通过接口“/v1/{project_id}/cloudservers/resize_flavors?{instance_uuid,source_flavor_id,source_flavor_name}”查询支持列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resizePostPaidServer(resizePostPaidServerRequest?: ResizePostPaidServerRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloudservers/{server_id}/resize",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (resizePostPaidServerRequest !== null && resizePostPaidServerRequest !== undefined) {
                if (resizePostPaidServerRequest instanceof ResizePostPaidServerRequest) {
                    serverId = resizePostPaidServerRequest.serverId;
                    body = resizePostPaidServerRequest.body
                } else {
                    serverId = resizePostPaidServerRequest['server_id'];
                    body = resizePostPaidServerRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling resizePostPaidServer.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 变更云服务器规格。
         * 
         * v1.1版本：指该接口兼容v1接口的功能，同时合入新功能，支持变更包年/包月弹性云服务器的规格。
         * 
         * 注意事项：
         * 
         * - 该接口可以使用合作伙伴自身的AK/SK或者token调用，也可以用合作伙伴子客户的AK/SK或者token来调用。
         * - 如果使用AK/SK认证方式，示例代码中region请参考[地区和终端节点](https://developer.huaweicloud.com/endpoint)中“弹性云服务 ECS”下“区域”的内容，，serviceName（英文服务名称缩写）请指定为ECS。
         * - Endpoint请参考[地区和终端节点](https://developer.huaweicloud.com/endpoint)中“弹性云服务 ECS”下“终端节点（Endpoint）”的内容。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resizeServer(resizeServerRequest?: ResizeServerRequest) {
            const options = {
                method: "POST",
                url: "/v1.1/{project_id}/cloudservers/{server_id}/resize",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (resizeServerRequest !== null && resizeServerRequest !== undefined) {
                if (resizeServerRequest instanceof ResizeServerRequest) {
                    serverId = resizeServerRequest.serverId;
                    body = resizeServerRequest.body
                } else {
                    serverId = resizeServerRequest['server_id'];
                    body = resizeServerRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling resizeServer.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 回收站中的虚拟机从回收站中恢复
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        revertRecycleBinServer(revertRecycleBinServerRequest?: RevertRecycleBinServerRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/recycle-bin/cloudservers/{server_id}/actions/revert",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverId;

            if (revertRecycleBinServerRequest !== null && revertRecycleBinServerRequest !== undefined) {
                if (revertRecycleBinServerRequest instanceof RevertRecycleBinServerRequest) {
                    serverId = revertRecycleBinServerRequest.serverId;
                } else {
                    serverId = revertRecycleBinServerRequest['server_id'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling revertRecycleBinServer.');
            }

            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询包周期虚拟机可以追加卷数量
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAppendableVolumeQuota(showAppendableVolumeQuotaRequest?: ShowAppendableVolumeQuotaRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloudservers/{server_id}/appendvolumequota",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverId;

            if (showAppendableVolumeQuotaRequest !== null && showAppendableVolumeQuotaRequest !== undefined) {
                if (showAppendableVolumeQuotaRequest instanceof ShowAppendableVolumeQuotaRequest) {
                    serverId = showAppendableVolumeQuotaRequest.serverId;
                } else {
                    serverId = showAppendableVolumeQuotaRequest['server_id'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling showAppendableVolumeQuota.');
            }

            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询flavor的容量
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showFlavorCapacity(showFlavorCapacityRequest?: ShowFlavorCapacityRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloudservers/flavors/{flavor_id}/resources",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let flavorId;

            if (showFlavorCapacityRequest !== null && showFlavorCapacityRequest !== undefined) {
                if (showFlavorCapacityRequest instanceof ShowFlavorCapacityRequest) {
                    flavorId = showFlavorCapacityRequest.flavorId;
                } else {
                    flavorId = showFlavorCapacityRequest['flavor_id'];
                }
            }

        
            if (flavorId === null || flavorId === undefined) {
            throw new RequiredError('flavorId','Required parameter flavorId was null or undefined when calling showFlavorCapacity.');
            }

            options.pathParams = { 'flavor_id': flavorId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询云服务器元数据配置，通过本接口，您可以查询指定云服务器的元数据配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMetadataOptions(showMetadataOptionsRequest?: ShowMetadataOptionsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloudservers/{server_id}/metadata-options",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverId;

            if (showMetadataOptionsRequest !== null && showMetadataOptionsRequest !== undefined) {
                if (showMetadataOptionsRequest instanceof ShowMetadataOptionsRequest) {
                    serverId = showMetadataOptionsRequest.serverId;
                } else {
                    serverId = showMetadataOptionsRequest['server_id'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling showMetadataOptions.');
            }

            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询回收站配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRecycleBin() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/recycle-bin",
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
         * 查询弹性云服务器是否支持一键重置密码。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showResetPasswordFlag(showResetPasswordFlagRequest?: ShowResetPasswordFlagRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloudservers/{server_id}/os-resetpwd-flag",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverId;

            if (showResetPasswordFlagRequest !== null && showResetPasswordFlagRequest !== undefined) {
                if (showResetPasswordFlagRequest instanceof ShowResetPasswordFlagRequest) {
                    serverId = showResetPasswordFlagRequest.serverId;
                } else {
                    serverId = showResetPasswordFlagRequest['server_id'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling showResetPasswordFlag.');
            }

            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取云服务器云主机串口登录地址。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSerialConsoleActions(showSerialConsoleActionsRequest?: ShowSerialConsoleActionsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloudservers/{server_id}/actions/serial-console",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverId;

            if (showSerialConsoleActionsRequest !== null && showSerialConsoleActionsRequest !== undefined) {
                if (showSerialConsoleActionsRequest instanceof ShowSerialConsoleActionsRequest) {
                    serverId = showSerialConsoleActionsRequest.serverId;
                } else {
                    serverId = showSerialConsoleActionsRequest['server_id'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling showSerialConsoleActions.');
            }

            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询弹性云服务器的详细信息。
         * 
         * 该接口支持查询弹性云服务器的计费方式，以及是否被冻结。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showServer(showServerRequest?: ShowServerRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloudservers/{server_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverId;

            if (showServerRequest !== null && showServerRequest !== undefined) {
                if (showServerRequest instanceof ShowServerRequest) {
                    serverId = showServerRequest.serverId;
                } else {
                    serverId = showServerRequest['server_id'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling showServer.');
            }

            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询虚拟机可挂载网卡
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showServerAttachableNicNum(showServerAttachableNicNumRequest?: ShowServerAttachableNicNumRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloudservers/{server_id}/os-interface_extension",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverId;

            if (showServerAttachableNicNumRequest !== null && showServerAttachableNicNumRequest !== undefined) {
                if (showServerAttachableNicNumRequest instanceof ShowServerAttachableNicNumRequest) {
                    serverId = showServerAttachableNicNumRequest.serverId;
                } else {
                    serverId = showServerAttachableNicNumRequest['server_id'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling showServerAttachableNicNum.');
            }

            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询弹性云服务器挂载的单个磁盘信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showServerBlockDevice(showServerBlockDeviceRequest?: ShowServerBlockDeviceRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloudservers/{server_id}/block_device/{volume_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverId;
            
            let volumeId;

            if (showServerBlockDeviceRequest !== null && showServerBlockDeviceRequest !== undefined) {
                if (showServerBlockDeviceRequest instanceof ShowServerBlockDeviceRequest) {
                    serverId = showServerBlockDeviceRequest.serverId;
                    volumeId = showServerBlockDeviceRequest.volumeId;
                } else {
                    serverId = showServerBlockDeviceRequest['server_id'];
                    volumeId = showServerBlockDeviceRequest['volume_id'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling showServerBlockDevice.');
            }
            if (volumeId === null || volumeId === undefined) {
            throw new RequiredError('volumeId','Required parameter volumeId was null or undefined when calling showServerBlockDevice.');
            }

            options.pathParams = { 'server_id': serverId,'volume_id': volumeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询弹性云服务器组详情。
         * 
         * 与原生的创建云服务器组接口不同之处在于该接口支持企业项目细粒度权限的校验。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showServerGroup(showServerGroupRequest?: ShowServerGroupRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloudservers/os-server-groups/{server_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverGroupId;

            if (showServerGroupRequest !== null && showServerGroupRequest !== undefined) {
                if (showServerGroupRequest instanceof ShowServerGroupRequest) {
                    serverGroupId = showServerGroupRequest.serverGroupId;
                } else {
                    serverGroupId = showServerGroupRequest['server_group_id'];
                }
            }

        
            if (serverGroupId === null || serverGroupId === undefined) {
            throw new RequiredError('serverGroupId','Required parameter serverGroupId was null or undefined when calling showServerGroup.');
            }

            options.pathParams = { 'server_group_id': serverGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户配额信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showServerLimits() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloudservers/limits",
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
         * 当通过支持Cloudbase-init功能的镜像创建Windows云服务器时，获取云服务器初始安装时系统生成的管理员帐户（Administrator帐户或Cloudbase-init设置的帐户）随机密码。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showServerPassword(showServerPasswordRequest?: ShowServerPasswordRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloudservers/{server_id}/os-server-password",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverId;

            if (showServerPasswordRequest !== null && showServerPasswordRequest !== undefined) {
                if (showServerPasswordRequest instanceof ShowServerPasswordRequest) {
                    serverId = showServerPasswordRequest.serverId;
                } else {
                    serverId = showServerPasswordRequest['server_id'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling showServerPassword.');
            }

            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取弹性云服务器VNC远程登录地址。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showServerRemoteConsole(showServerRemoteConsoleRequest?: ShowServerRemoteConsoleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloudservers/{server_id}/remote_console",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (showServerRemoteConsoleRequest !== null && showServerRemoteConsoleRequest !== undefined) {
                if (showServerRemoteConsoleRequest instanceof ShowServerRemoteConsoleRequest) {
                    serverId = showServerRemoteConsoleRequest.serverId;
                    body = showServerRemoteConsoleRequest.body
                } else {
                    serverId = showServerRemoteConsoleRequest['server_id'];
                    body = showServerRemoteConsoleRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling showServerRemoteConsole.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 查询指定云服务器的标签信息。
         * 
         * - 标签管理服务TMS使用该接口查询指定云服务器的全部标签数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showServerTags(showServerTagsRequest?: ShowServerTagsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloudservers/{server_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverId;

            if (showServerTagsRequest !== null && showServerTagsRequest !== undefined) {
                if (showServerTagsRequest instanceof ShowServerTagsRequest) {
                    serverId = showServerTagsRequest.serverId;
                } else {
                    serverId = showServerTagsRequest['server_id'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling showServerTags.');
            }

            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新云服务器元数据配置，通过本接口，您可以选择启用或关闭IMDS服务，也可以选择IMDS服务的版本。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateMetadataOptions(updateMetadataOptionsRequest?: UpdateMetadataOptionsRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/cloudservers/{server_id}/metadata-options",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (updateMetadataOptionsRequest !== null && updateMetadataOptionsRequest !== undefined) {
                if (updateMetadataOptionsRequest instanceof UpdateMetadataOptionsRequest) {
                    serverId = updateMetadataOptionsRequest.serverId;
                    body = updateMetadataOptionsRequest.body
                } else {
                    serverId = updateMetadataOptionsRequest['server_id'];
                    body = updateMetadataOptionsRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling updateMetadataOptions.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新回收站属性信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateRecycleBin(updateRecycleBinRequest?: UpdateRecycleBinRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/recycle-bin",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateRecycleBinRequest !== null && updateRecycleBinRequest !== undefined) {
                if (updateRecycleBinRequest instanceof UpdateRecycleBinRequest) {
                    body = updateRecycleBinRequest.body
                } else {
                    body = updateRecycleBinRequest['body'];
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
         * 更新回收站策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateRecycleBinPolicy(updateRecycleBinPolicyRequest?: UpdateRecycleBinPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/recycle-bin/policy",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateRecycleBinPolicyRequest !== null && updateRecycleBinPolicyRequest !== undefined) {
                if (updateRecycleBinPolicyRequest instanceof UpdateRecycleBinPolicyRequest) {
                    body = updateRecycleBinPolicyRequest.body
                } else {
                    body = updateRecycleBinPolicyRequest['body'];
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
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateScheduledEvent(updateScheduledEventRequest?: UpdateScheduledEventRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instance-scheduled-events/{id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (updateScheduledEventRequest !== null && updateScheduledEventRequest !== undefined) {
                if (updateScheduledEventRequest instanceof UpdateScheduledEventRequest) {
                    id = updateScheduledEventRequest.id;
                    body = updateScheduledEventRequest.body
                } else {
                    id = updateScheduledEventRequest['id'];
                    body = updateScheduledEventRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateScheduledEvent.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置云服务器云主机串口登录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSerialConsoleOptions(updateSerialConsoleOptionsRequest?: UpdateSerialConsoleOptionsRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/cloudservers/{server_id}/serial-console-options",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (updateSerialConsoleOptionsRequest !== null && updateSerialConsoleOptionsRequest !== undefined) {
                if (updateSerialConsoleOptionsRequest instanceof UpdateSerialConsoleOptionsRequest) {
                    serverId = updateSerialConsoleOptionsRequest.serverId;
                    body = updateSerialConsoleOptionsRequest.body
                } else {
                    serverId = updateSerialConsoleOptionsRequest['server_id'];
                    body = updateSerialConsoleOptionsRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling updateSerialConsoleOptions.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改云服务器信息，目前支持修改云服务器名称及描述和hostname。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateServer(updateServerRequest?: UpdateServerRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/cloudservers/{server_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (updateServerRequest !== null && updateServerRequest !== undefined) {
                if (updateServerRequest instanceof UpdateServerRequest) {
                    serverId = updateServerRequest.serverId;
                    body = updateServerRequest.body
                } else {
                    serverId = updateServerRequest['server_id'];
                    body = updateServerRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling updateServer.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改按需服务器，设置定时删除时间。如果设置的定时删除时间为空字符串，表示取消定时删除。
         * 
         * 该接口支持企业项目细粒度权限的校验，具体细粒度请参见 ecs:cloudServers:put。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateServerAutoTerminateTime(updateServerAutoTerminateTimeRequest?: UpdateServerAutoTerminateTimeRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloudservers/{server_id}/actions/update-auto-terminate-time",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (updateServerAutoTerminateTimeRequest !== null && updateServerAutoTerminateTimeRequest !== undefined) {
                if (updateServerAutoTerminateTimeRequest instanceof UpdateServerAutoTerminateTimeRequest) {
                    serverId = updateServerAutoTerminateTimeRequest.serverId;
                    body = updateServerAutoTerminateTimeRequest.body
                } else {
                    serverId = updateServerAutoTerminateTimeRequest['server_id'];
                    body = updateServerAutoTerminateTimeRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling updateServerAutoTerminateTime.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改云服务器云主机挂载的单个磁盘信息。\&#39;当前仅支持修改delete_on_termination字段。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateServerBlockDevice(updateServerBlockDeviceRequest?: UpdateServerBlockDeviceRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/cloudservers/{server_id}/block_device/{volume_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;
            
            let volumeId;

            if (updateServerBlockDeviceRequest !== null && updateServerBlockDeviceRequest !== undefined) {
                if (updateServerBlockDeviceRequest instanceof UpdateServerBlockDeviceRequest) {
                    serverId = updateServerBlockDeviceRequest.serverId;
                    volumeId = updateServerBlockDeviceRequest.volumeId;
                    body = updateServerBlockDeviceRequest.body
                } else {
                    serverId = updateServerBlockDeviceRequest['server_id'];
                    volumeId = updateServerBlockDeviceRequest['volume_id'];
                    body = updateServerBlockDeviceRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling updateServerBlockDevice.');
            }
            if (volumeId === null || volumeId === undefined) {
            throw new RequiredError('volumeId','Required parameter volumeId was null or undefined when calling updateServerBlockDevice.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId,'volume_id': volumeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新云服务器网卡挂载信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateServerInterface(updateServerInterfaceRequest?: UpdateServerInterfaceRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/cloudservers/{server_id}/os-interface/{port_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;
            
            let portId;

            if (updateServerInterfaceRequest !== null && updateServerInterfaceRequest !== undefined) {
                if (updateServerInterfaceRequest instanceof UpdateServerInterfaceRequest) {
                    serverId = updateServerInterfaceRequest.serverId;
                    portId = updateServerInterfaceRequest.portId;
                    body = updateServerInterfaceRequest.body
                } else {
                    serverId = updateServerInterfaceRequest['server_id'];
                    portId = updateServerInterfaceRequest['port_id'];
                    body = updateServerInterfaceRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling updateServerInterface.');
            }
            if (portId === null || portId === undefined) {
            throw new RequiredError('portId','Required parameter portId was null or undefined when calling updateServerInterface.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId,'port_id': portId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新云服务器元数据。
         * 
         * - 如果元数据中没有待更新字段，则自动添加该字段。
         * 
         * - 如果元数据中已存在待更新字段，则直接更新字段值。
         * 
         * - 如果元数据中的字段不再请求参数中，则保持不变
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateServerMetadata(updateServerMetadataRequest?: UpdateServerMetadataRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloudservers/{server_id}/metadata",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (updateServerMetadataRequest !== null && updateServerMetadataRequest !== undefined) {
                if (updateServerMetadataRequest instanceof UpdateServerMetadataRequest) {
                    serverId = updateServerMetadataRequest.serverId;
                    body = updateServerMetadataRequest.body
                } else {
                    serverId = updateServerMetadataRequest['server_id'];
                    body = updateServerMetadataRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling updateServerMetadata.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 返回Nova当前所有可用的版本。
         * 
         * 为了支持功能不断扩展，Nova API支持版本号区分。Nova中有两种形式的版本号：
         * 
         * - \&quot;主版本号\&quot;: 具有独立的url。
         * - \&quot;微版本号\&quot;: 通过Http请求头X-OpenStack-Nova-API-Version来使用，从2.27版本后更改为OpenStack-API-Version。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        novaListVersions() {
            const options = {
                method: "GET",
                url: "/",
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
         * 返回指定版本的信息。
         * 为了支持功能不断扩展，Nova API支持版本号区分。Nova中有两种形式的版本号：
         * 
         * - \&quot;主版本号\&quot;: 具有独立的url。
         * - \&quot;微版本号\&quot;: 通过Http请求头X-OpenStack-Nova-API-Version来使用，从2.27版本后更改为OpenStack-API-Version。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        novaShowVersion(novaShowVersionRequest?: NovaShowVersionRequest) {
            const options = {
                method: "GET",
                url: "/{api_version}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let apiVersion;

            if (novaShowVersionRequest !== null && novaShowVersionRequest !== undefined) {
                if (novaShowVersionRequest instanceof NovaShowVersionRequest) {
                    apiVersion = novaShowVersionRequest.apiVersion;
                } else {
                    apiVersion = novaShowVersionRequest['api_version'];
                }
            }

        
            if (apiVersion === null || apiVersion === undefined) {
            throw new RequiredError('apiVersion','Required parameter apiVersion was null or undefined when calling novaShowVersion.');
            }

            options.pathParams = { 'api_version': apiVersion, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Job的执行状态。
         * 
         * 对于创建云服务器、删除云服务器、云服务器批量操作和网卡操作等异步API，命令下发后，会返回job_id，通过job_id可以查询任务的执行状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJob(showJobRequest?: ShowJobRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (showJobRequest !== null && showJobRequest !== undefined) {
                if (showJobRequest instanceof ShowJobRequest) {
                    jobId = showJobRequest.jobId;
                } else {
                    jobId = showJobRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showJob.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): EcsClient {
    return new EcsClient(client);
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