import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { ApplyCentralNetworkPolicyRequest } from './model/ApplyCentralNetworkPolicyRequest';
import { ApplyCentralNetworkPolicyResponse } from './model/ApplyCentralNetworkPolicyResponse';
import { ApplyPolicyId } from './model/ApplyPolicyId';
import { ApprovedStateEnum } from './model/ApprovedStateEnum';
import { Area } from './model/Area';
import { AreaBandwidthPackageSpecification } from './model/AreaBandwidthPackageSpecification';
import { AreaId } from './model/AreaId';
import { AreaIdDef } from './model/AreaIdDef';
import { Asn } from './model/Asn';
import { AssociateBandwidthPackage } from './model/AssociateBandwidthPackage';
import { AssociateBandwidthPackageRequest } from './model/AssociateBandwidthPackageRequest';
import { AssociateBandwidthPackageRequestBody } from './model/AssociateBandwidthPackageRequestBody';
import { AssociateBandwidthPackageResponse } from './model/AssociateBandwidthPackageResponse';
import { AssociateErInstanceDocument } from './model/AssociateErInstanceDocument';
import { AssociateErTableDocument } from './model/AssociateErTableDocument';
import { AssociateGlobalConnectionBandwidthInstanceRequest } from './model/AssociateGlobalConnectionBandwidthInstanceRequest';
import { AssociateGlobalConnectionBandwidthInstanceRequestBody } from './model/AssociateGlobalConnectionBandwidthInstanceRequestBody';
import { AssociateGlobalConnectionBandwidthInstanceRequestInfo } from './model/AssociateGlobalConnectionBandwidthInstanceRequestInfo';
import { AssociateGlobalConnectionBandwidthInstanceResponse } from './model/AssociateGlobalConnectionBandwidthInstanceResponse';
import { AssociateGlobalConnectionBandwidthInstanceResponseInfo } from './model/AssociateGlobalConnectionBandwidthInstanceResponseInfo';
import { AssociateSiteConnectionBandwidth } from './model/AssociateSiteConnectionBandwidth';
import { AssociateSiteConnectionBandwidthRequestBody } from './model/AssociateSiteConnectionBandwidthRequestBody';
import { AssociateSiteNetworkBandwidthRequest } from './model/AssociateSiteNetworkBandwidthRequest';
import { AssociateSiteNetworkBandwidthResponse } from './model/AssociateSiteNetworkBandwidthResponse';
import { AttachedEnterpriseRouterAttachmentId } from './model/AttachedEnterpriseRouterAttachmentId';
import { AttachedEnterpriseRouterId } from './model/AttachedEnterpriseRouterId';
import { AttachedEnterpriseRouterProjectId } from './model/AttachedEnterpriseRouterProjectId';
import { AttachedEnterpriseRouterRegionId } from './model/AttachedEnterpriseRouterRegionId';
import { AttachedEnterpriseRouterSiteCode } from './model/AttachedEnterpriseRouterSiteCode';
import { AttachedEnterpriseRouterTableId } from './model/AttachedEnterpriseRouterTableId';
import { AttachmentId } from './model/AttachmentId';
import { AttachmentInstanceId } from './model/AttachmentInstanceId';
import { AttachmentInstanceProjectId } from './model/AttachmentInstanceProjectId';
import { AttachmentInstanceRegionId } from './model/AttachmentInstanceRegionId';
import { AttachmentInstanceSiteCode } from './model/AttachmentInstanceSiteCode';
import { AttachmentInstanceType } from './model/AttachmentInstanceType';
import { AttachmentInstanceTypeEnum } from './model/AttachmentInstanceTypeEnum';
import { AttachmentParentInstanceId } from './model/AttachmentParentInstanceId';
import { Authorisation } from './model/Authorisation';
import { AutoAssociateRouteEnabled } from './model/AutoAssociateRouteEnabled';
import { AutoPropagateRouteEnabled } from './model/AutoPropagateRouteEnabled';
import { BandwidthPackage } from './model/BandwidthPackage';
import { BandwidthPackageId } from './model/BandwidthPackageId';
import { BandwidthPackageLevel } from './model/BandwidthPackageLevel';
import { BandwidthPackageLine } from './model/BandwidthPackageLine';
import { BandwidthPackageLineSpecCode } from './model/BandwidthPackageLineSpecCode';
import { BandwidthPackageSite } from './model/BandwidthPackageSite';
import { BandwidthSize } from './model/BandwidthSize';
import { BandwidthSizeDefine } from './model/BandwidthSizeDefine';
import { BandwidthType } from './model/BandwidthType';
import { BandwidthTypeEnum } from './model/BandwidthTypeEnum';
import { BatchCreateGcbResourceTagsRequest } from './model/BatchCreateGcbResourceTagsRequest';
import { BatchCreateGcbResourceTagsResponse } from './model/BatchCreateGcbResourceTagsResponse';
import { BatchDeleteGcbResourceTagsRequest } from './model/BatchDeleteGcbResourceTagsRequest';
import { BatchDeleteGcbResourceTagsResponse } from './model/BatchDeleteGcbResourceTagsResponse';
import { BillingMode } from './model/BillingMode';
import { BillingModeEnum } from './model/BillingModeEnum';
import { CentralNetwork } from './model/CentralNetwork';
import { CentralNetworkAttachment } from './model/CentralNetworkAttachment';
import { CentralNetworkAttachmentSpecificationValueInfo } from './model/CentralNetworkAttachmentSpecificationValueInfo';
import { CentralNetworkCapability } from './model/CentralNetworkCapability';
import { CentralNetworkCapabilityEnum } from './model/CentralNetworkCapabilityEnum';
import { CentralNetworkConnection } from './model/CentralNetworkConnection';
import { CentralNetworkConnectionInfo } from './model/CentralNetworkConnectionInfo';
import { CentralNetworkConnectionPlaneId } from './model/CentralNetworkConnectionPlaneId';
import { CentralNetworkConnectionState } from './model/CentralNetworkConnectionState';
import { CentralNetworkConnectionStateEnum } from './model/CentralNetworkConnectionStateEnum';
import { CentralNetworkDefaultPlaneId } from './model/CentralNetworkDefaultPlaneId';
import { CentralNetworkElementChange } from './model/CentralNetworkElementChange';
import { CentralNetworkErInstance } from './model/CentralNetworkErInstance';
import { CentralNetworkErRouteTableAttachment } from './model/CentralNetworkErRouteTableAttachment';
import { CentralNetworkGdgwAttachment } from './model/CentralNetworkGdgwAttachment';
import { CentralNetworkId } from './model/CentralNetworkId';
import { CentralNetworkPlane } from './model/CentralNetworkPlane';
import { CentralNetworkPlaneDocument } from './model/CentralNetworkPlaneDocument';
import { CentralNetworkPlaneId } from './model/CentralNetworkPlaneId';
import { CentralNetworkPolicy } from './model/CentralNetworkPolicy';
import { CentralNetworkPolicyDocument } from './model/CentralNetworkPolicyDocument';
import { CentralNetworkPolicyState } from './model/CentralNetworkPolicyState';
import { CentralNetworkPolicyStateEnum } from './model/CentralNetworkPolicyStateEnum';
import { CentralNetworkQuota } from './model/CentralNetworkQuota';
import { CentralNetworkQuotaKey } from './model/CentralNetworkQuotaKey';
import { CentralNetworkQuotaKeyEnum } from './model/CentralNetworkQuotaKeyEnum';
import { CentralNetworkState } from './model/CentralNetworkState';
import { CentralNetworkStateEnum } from './model/CentralNetworkStateEnum';
import { CloudConnection } from './model/CloudConnection';
import { CloudConnectionCapabilityInfo } from './model/CloudConnectionCapabilityInfo';
import { CloudConnectionCapabilityKeyEnum } from './model/CloudConnectionCapabilityKeyEnum';
import { CloudConnectionDomainBandwidthCapabilityValue } from './model/CloudConnectionDomainBandwidthCapabilityValue';
import { CloudConnectionDomainBandwidthValue } from './model/CloudConnectionDomainBandwidthValue';
import { CloudConnectionEnterpriseSupportSitesCapabilityValue } from './model/CloudConnectionEnterpriseSupportSitesCapabilityValue';
import { CloudConnectionId } from './model/CloudConnectionId';
import { CloudConnectionIpv6SupportRegionsCapabilityValue } from './model/CloudConnectionIpv6SupportRegionsCapabilityValue';
import { CloudConnectionIsSupportCapabilityValue } from './model/CloudConnectionIsSupportCapabilityValue';
import { CloudConnectionQuota } from './model/CloudConnectionQuota';
import { CloudConnectionRoute } from './model/CloudConnectionRoute';
import { ConnectionBandwidthChargeModeEnum } from './model/ConnectionBandwidthChargeModeEnum';
import { ConnectionBandwidthSizeRange } from './model/ConnectionBandwidthSizeRange';
import { ConnectionPoint } from './model/ConnectionPoint';
import { ConnectionPointInstanceId } from './model/ConnectionPointInstanceId';
import { ConnectionPointPair } from './model/ConnectionPointPair';
import { ConnectionPointParentInstanceId } from './model/ConnectionPointParentInstanceId';
import { ConnectionPointTypeEnum } from './model/ConnectionPointTypeEnum';
import { ConnectionType } from './model/ConnectionType';
import { ConnectionTypeEnum } from './model/ConnectionTypeEnum';
import { CountGcbResourceByTagRequest } from './model/CountGcbResourceByTagRequest';
import { CountGcbResourceByTagResponse } from './model/CountGcbResourceByTagResponse';
import { CreateAuthorisation } from './model/CreateAuthorisation';
import { CreateAuthorisationRequest } from './model/CreateAuthorisationRequest';
import { CreateAuthorisationRequestBody } from './model/CreateAuthorisationRequestBody';
import { CreateAuthorisationResponse } from './model/CreateAuthorisationResponse';
import { CreateBandwidthPackage } from './model/CreateBandwidthPackage';
import { CreateBandwidthPackageRequest } from './model/CreateBandwidthPackageRequest';
import { CreateBandwidthPackageRequestBody } from './model/CreateBandwidthPackageRequestBody';
import { CreateBandwidthPackageResponse } from './model/CreateBandwidthPackageResponse';
import { CreateCentralNetwork } from './model/CreateCentralNetwork';
import { CreateCentralNetworkErRouteTableAttachment } from './model/CreateCentralNetworkErRouteTableAttachment';
import { CreateCentralNetworkErRouteTableAttachmentRequest } from './model/CreateCentralNetworkErRouteTableAttachmentRequest';
import { CreateCentralNetworkErRouteTableAttachmentResponse } from './model/CreateCentralNetworkErRouteTableAttachmentResponse';
import { CreateCentralNetworkErRouteTableAttachmentsRequestBody } from './model/CreateCentralNetworkErRouteTableAttachmentsRequestBody';
import { CreateCentralNetworkGdgwAttachment } from './model/CreateCentralNetworkGdgwAttachment';
import { CreateCentralNetworkGdgwAttachmentRequest } from './model/CreateCentralNetworkGdgwAttachmentRequest';
import { CreateCentralNetworkGdgwAttachmentRequestBody } from './model/CreateCentralNetworkGdgwAttachmentRequestBody';
import { CreateCentralNetworkGdgwAttachmentResponse } from './model/CreateCentralNetworkGdgwAttachmentResponse';
import { CreateCentralNetworkPolicyRequest } from './model/CreateCentralNetworkPolicyRequest';
import { CreateCentralNetworkPolicyRequestBody } from './model/CreateCentralNetworkPolicyRequestBody';
import { CreateCentralNetworkPolicyResponse } from './model/CreateCentralNetworkPolicyResponse';
import { CreateCentralNetworkRequest } from './model/CreateCentralNetworkRequest';
import { CreateCentralNetworkRequestBody } from './model/CreateCentralNetworkRequestBody';
import { CreateCentralNetworkResponse } from './model/CreateCentralNetworkResponse';
import { CreateCloudConnection } from './model/CreateCloudConnection';
import { CreateCloudConnectionRequest } from './model/CreateCloudConnectionRequest';
import { CreateCloudConnectionRequestBody } from './model/CreateCloudConnectionRequestBody';
import { CreateCloudConnectionResponse } from './model/CreateCloudConnectionResponse';
import { CreateDeleteGcbTagsRequestBody } from './model/CreateDeleteGcbTagsRequestBody';
import { CreateGcbResourceTagRequest } from './model/CreateGcbResourceTagRequest';
import { CreateGcbResourceTagResponse } from './model/CreateGcbResourceTagResponse';
import { CreateGcbTagRequestBody } from './model/CreateGcbTagRequestBody';
import { CreateGlobalConnectionBandwidth } from './model/CreateGlobalConnectionBandwidth';
import { CreateGlobalConnectionBandwidthRequest } from './model/CreateGlobalConnectionBandwidthRequest';
import { CreateGlobalConnectionBandwidthRequestBody } from './model/CreateGlobalConnectionBandwidthRequestBody';
import { CreateGlobalConnectionBandwidthResponse } from './model/CreateGlobalConnectionBandwidthResponse';
import { CreateInterRegionBandwidth } from './model/CreateInterRegionBandwidth';
import { CreateInterRegionBandwidthRequest } from './model/CreateInterRegionBandwidthRequest';
import { CreateInterRegionBandwidthRequestBody } from './model/CreateInterRegionBandwidthRequestBody';
import { CreateInterRegionBandwidthResponse } from './model/CreateInterRegionBandwidthResponse';
import { CreateNetworkInstance } from './model/CreateNetworkInstance';
import { CreateNetworkInstanceRequest } from './model/CreateNetworkInstanceRequest';
import { CreateNetworkInstanceRequestBody } from './model/CreateNetworkInstanceRequestBody';
import { CreateNetworkInstanceResponse } from './model/CreateNetworkInstanceResponse';
import { CreateP2PSiteNetwork } from './model/CreateP2PSiteNetwork';
import { CreateP2PSiteNetworkRequest } from './model/CreateP2PSiteNetworkRequest';
import { CreateP2PSiteNetworkRequestBody } from './model/CreateP2PSiteNetworkRequestBody';
import { CreateP2PSiteNetworkResponse } from './model/CreateP2PSiteNetworkResponse';
import { CreatePrepaidOptions } from './model/CreatePrepaidOptions';
import { CreateSiteInformation } from './model/CreateSiteInformation';
import { CreateSiteInformationPair } from './model/CreateSiteInformationPair';
import { CreatedAt } from './model/CreatedAt';
import { CrossRegionType } from './model/CrossRegionType';
import { CrossRegionTypeEnum } from './model/CrossRegionTypeEnum';
import { DeleteAuthorisationRequest } from './model/DeleteAuthorisationRequest';
import { DeleteAuthorisationResponse } from './model/DeleteAuthorisationResponse';
import { DeleteBandwidthPackageRequest } from './model/DeleteBandwidthPackageRequest';
import { DeleteBandwidthPackageResponse } from './model/DeleteBandwidthPackageResponse';
import { DeleteCentralNetworkAttachmentRequest } from './model/DeleteCentralNetworkAttachmentRequest';
import { DeleteCentralNetworkAttachmentResponse } from './model/DeleteCentralNetworkAttachmentResponse';
import { DeleteCentralNetworkPolicyRequest } from './model/DeleteCentralNetworkPolicyRequest';
import { DeleteCentralNetworkPolicyResponse } from './model/DeleteCentralNetworkPolicyResponse';
import { DeleteCentralNetworkRequest } from './model/DeleteCentralNetworkRequest';
import { DeleteCentralNetworkResponse } from './model/DeleteCentralNetworkResponse';
import { DeleteCloudConnectionRequest } from './model/DeleteCloudConnectionRequest';
import { DeleteCloudConnectionResponse } from './model/DeleteCloudConnectionResponse';
import { DeleteGcbResourceTagRequest } from './model/DeleteGcbResourceTagRequest';
import { DeleteGcbResourceTagResponse } from './model/DeleteGcbResourceTagResponse';
import { DeleteGlobalConnectionBandwidthRequest } from './model/DeleteGlobalConnectionBandwidthRequest';
import { DeleteGlobalConnectionBandwidthResponse } from './model/DeleteGlobalConnectionBandwidthResponse';
import { DeleteInterRegionBandwidthRequest } from './model/DeleteInterRegionBandwidthRequest';
import { DeleteInterRegionBandwidthResponse } from './model/DeleteInterRegionBandwidthResponse';
import { DeleteNetworkInstanceRequest } from './model/DeleteNetworkInstanceRequest';
import { DeleteNetworkInstanceResponse } from './model/DeleteNetworkInstanceResponse';
import { DeleteSiteNetworkRequest } from './model/DeleteSiteNetworkRequest';
import { DeleteSiteNetworkResponse } from './model/DeleteSiteNetworkResponse';
import { Description } from './model/Description';
import { Destination } from './model/Destination';
import { DirectedEdge } from './model/DirectedEdge';
import { DirectedEdgePair } from './model/DirectedEdgePair';
import { DirectionalConnection } from './model/DirectionalConnection';
import { DirectionalConnectionList } from './model/DirectionalConnectionList';
import { DisassociateBandwidthPackage } from './model/DisassociateBandwidthPackage';
import { DisassociateBandwidthPackageRequest } from './model/DisassociateBandwidthPackageRequest';
import { DisassociateBandwidthPackageRequestBody } from './model/DisassociateBandwidthPackageRequestBody';
import { DisassociateBandwidthPackageResponse } from './model/DisassociateBandwidthPackageResponse';
import { DisassociateGlobalConnectionBandwidthInstanceRequest } from './model/DisassociateGlobalConnectionBandwidthInstanceRequest';
import { DisassociateGlobalConnectionBandwidthInstanceRequestBody } from './model/DisassociateGlobalConnectionBandwidthInstanceRequestBody';
import { DisassociateGlobalConnectionBandwidthInstanceRequestInfo } from './model/DisassociateGlobalConnectionBandwidthInstanceRequestInfo';
import { DisassociateGlobalConnectionBandwidthInstanceResponse } from './model/DisassociateGlobalConnectionBandwidthInstanceResponse';
import { DisassociateGlobalConnectionBandwidthInstanceResponseInfo } from './model/DisassociateGlobalConnectionBandwidthInstanceResponseInfo';
import { DisassociateSiteNetworkBandwidthRequest } from './model/DisassociateSiteNetworkBandwidthRequest';
import { DisassociateSiteNetworkBandwidthResponse } from './model/DisassociateSiteNetworkBandwidthResponse';
import { DocumentTemplateVersion } from './model/DocumentTemplateVersion';
import { DocumentTemplateVersionEnum } from './model/DocumentTemplateVersionEnum';
import { DomainId } from './model/DomainId';
import { DomainIdDef } from './model/DomainIdDef';
import { EnterpriseProjectId } from './model/EnterpriseProjectId';
import { EnterpriseRouterAttachmentId } from './model/EnterpriseRouterAttachmentId';
import { EnterpriseRouterId } from './model/EnterpriseRouterId';
import { EnterpriseRouterProjectId } from './model/EnterpriseRouterProjectId';
import { EnterpriseRouterRegionId } from './model/EnterpriseRouterRegionId';
import { EnterpriseRouterSiteCode } from './model/EnterpriseRouterSiteCode';
import { EnterpriseRouterTableId } from './model/EnterpriseRouterTableId';
import { FrozenEffect } from './model/FrozenEffect';
import { FrozenEffectEnum } from './model/FrozenEffectEnum';
import { GatewayId } from './model/GatewayId';
import { GatewayType } from './model/GatewayType';
import { GatewayTypeEnum } from './model/GatewayTypeEnum';
import { GcbAdminState } from './model/GcbAdminState';
import { GcbBindingServiceAll } from './model/GcbBindingServiceAll';
import { GcbBorderCross } from './model/GcbBorderCross';
import { GcbChargeMode } from './model/GcbChargeMode';
import { GcbFrozen } from './model/GcbFrozen';
import { GcbLocalArea } from './model/GcbLocalArea';
import { GcbLocalSiteCode } from './model/GcbLocalSiteCode';
import { GcbProjectId } from './model/GcbProjectId';
import { GcbRegionId } from './model/GcbRegionId';
import { GcbRemoteArea } from './model/GcbRemoteArea';
import { GcbRemoteSiteCode } from './model/GcbRemoteSiteCode';
import { GcbResourceId } from './model/GcbResourceId';
import { GcbResourceType } from './model/GcbResourceType';
import { GcbShowLocalArea } from './model/GcbShowLocalArea';
import { GcbShowRemoveArea } from './model/GcbShowRemoveArea';
import { GcbSize } from './model/GcbSize';
import { GcbSlaLevel } from './model/GcbSlaLevel';
import { GcbSpecCodeId } from './model/GcbSpecCodeId';
import { GcbType } from './model/GcbType';
import { GlobalConnectionBandwidth } from './model/GlobalConnectionBandwidth';
import { GlobalConnectionBandwidthAssociatedInstance } from './model/GlobalConnectionBandwidthAssociatedInstance';
import { GlobalConnectionBandwidthId } from './model/GlobalConnectionBandwidthId';
import { GlobalConnectionBandwidthLineLevel } from './model/GlobalConnectionBandwidthLineLevel';
import { GlobalConnectionBandwidthQuotas } from './model/GlobalConnectionBandwidthQuotas';
import { GlobalConnectionBandwidthSites } from './model/GlobalConnectionBandwidthSites';
import { GlobalConnectionBandwidthSizeRange } from './model/GlobalConnectionBandwidthSizeRange';
import { GlobalConnectionBandwidthSpecCode } from './model/GlobalConnectionBandwidthSpecCode';
import { GlobalDcGatewayId } from './model/GlobalDcGatewayId';
import { GlobalDcGatewayPeerLinkId } from './model/GlobalDcGatewayPeerLinkId';
import { GlobalDcGatewayProjectId } from './model/GlobalDcGatewayProjectId';
import { GlobalDcGatewayRegionId } from './model/GlobalDcGatewayRegionId';
import { HostedCloud } from './model/HostedCloud';
import { HostedCloudEnum } from './model/HostedCloudEnum';
import { Index } from './model/Index';
import { InstanceDomainId } from './model/InstanceDomainId';
import { InstanceId } from './model/InstanceId';
import { InterRegion } from './model/InterRegion';
import { InterRegionBandwidth } from './model/InterRegionBandwidth';
import { IsFrozen } from './model/IsFrozen';
import { ListAreaBandwidthPackageSpecificationsRequest } from './model/ListAreaBandwidthPackageSpecificationsRequest';
import { ListAreaBandwidthPackageSpecificationsResponse } from './model/ListAreaBandwidthPackageSpecificationsResponse';
import { ListAreasRequest } from './model/ListAreasRequest';
import { ListAreasResponse } from './model/ListAreasResponse';
import { ListAuthorisationsRequest } from './model/ListAuthorisationsRequest';
import { ListAuthorisationsResponse } from './model/ListAuthorisationsResponse';
import { ListBandwidthPackageLevelsRequest } from './model/ListBandwidthPackageLevelsRequest';
import { ListBandwidthPackageLevelsResponse } from './model/ListBandwidthPackageLevelsResponse';
import { ListBandwidthPackageLinesRequest } from './model/ListBandwidthPackageLinesRequest';
import { ListBandwidthPackageLinesResponse } from './model/ListBandwidthPackageLinesResponse';
import { ListBandwidthPackageSitesRequest } from './model/ListBandwidthPackageSitesRequest';
import { ListBandwidthPackageSitesResponse } from './model/ListBandwidthPackageSitesResponse';
import { ListBandwidthPackageTagsRequest } from './model/ListBandwidthPackageTagsRequest';
import { ListBandwidthPackageTagsResponse } from './model/ListBandwidthPackageTagsResponse';
import { ListBandwidthPackagesByTagsRequest } from './model/ListBandwidthPackagesByTagsRequest';
import { ListBandwidthPackagesByTagsRequestBody } from './model/ListBandwidthPackagesByTagsRequestBody';
import { ListBandwidthPackagesByTagsResponse } from './model/ListBandwidthPackagesByTagsResponse';
import { ListBandwidthPackagesRequest } from './model/ListBandwidthPackagesRequest';
import { ListBandwidthPackagesResponse } from './model/ListBandwidthPackagesResponse';
import { ListCentralNetworkAttachmentsRequest } from './model/ListCentralNetworkAttachmentsRequest';
import { ListCentralNetworkAttachmentsResponse } from './model/ListCentralNetworkAttachmentsResponse';
import { ListCentralNetworkCapabilitiesRequest } from './model/ListCentralNetworkCapabilitiesRequest';
import { ListCentralNetworkCapabilitiesResponse } from './model/ListCentralNetworkCapabilitiesResponse';
import { ListCentralNetworkConnectionsRequest } from './model/ListCentralNetworkConnectionsRequest';
import { ListCentralNetworkConnectionsResponse } from './model/ListCentralNetworkConnectionsResponse';
import { ListCentralNetworkErRouteTableAttachmentsRequest } from './model/ListCentralNetworkErRouteTableAttachmentsRequest';
import { ListCentralNetworkErRouteTableAttachmentsResponse } from './model/ListCentralNetworkErRouteTableAttachmentsResponse';
import { ListCentralNetworkGdgwAttachmentsRequest } from './model/ListCentralNetworkGdgwAttachmentsRequest';
import { ListCentralNetworkGdgwAttachmentsResponse } from './model/ListCentralNetworkGdgwAttachmentsResponse';
import { ListCentralNetworkPoliciesRequest } from './model/ListCentralNetworkPoliciesRequest';
import { ListCentralNetworkPoliciesResponse } from './model/ListCentralNetworkPoliciesResponse';
import { ListCentralNetworkPolicyChangeSetRequest } from './model/ListCentralNetworkPolicyChangeSetRequest';
import { ListCentralNetworkPolicyChangeSetResponse } from './model/ListCentralNetworkPolicyChangeSetResponse';
import { ListCentralNetworkQuotasRequest } from './model/ListCentralNetworkQuotasRequest';
import { ListCentralNetworkQuotasResponse } from './model/ListCentralNetworkQuotasResponse';
import { ListCentralNetworkTagsRequest } from './model/ListCentralNetworkTagsRequest';
import { ListCentralNetworkTagsResponse } from './model/ListCentralNetworkTagsResponse';
import { ListCentralNetworksByTagsRequest } from './model/ListCentralNetworksByTagsRequest';
import { ListCentralNetworksByTagsRequestBody } from './model/ListCentralNetworksByTagsRequestBody';
import { ListCentralNetworksByTagsResponse } from './model/ListCentralNetworksByTagsResponse';
import { ListCentralNetworksRequest } from './model/ListCentralNetworksRequest';
import { ListCentralNetworksResponse } from './model/ListCentralNetworksResponse';
import { ListCloudConnectionCapabilitiesRequest } from './model/ListCloudConnectionCapabilitiesRequest';
import { ListCloudConnectionCapabilitiesResponse } from './model/ListCloudConnectionCapabilitiesResponse';
import { ListCloudConnectionQuotasRequest } from './model/ListCloudConnectionQuotasRequest';
import { ListCloudConnectionQuotasResponse } from './model/ListCloudConnectionQuotasResponse';
import { ListCloudConnectionRoutesRequest } from './model/ListCloudConnectionRoutesRequest';
import { ListCloudConnectionRoutesResponse } from './model/ListCloudConnectionRoutesResponse';
import { ListCloudConnectionTagsRequest } from './model/ListCloudConnectionTagsRequest';
import { ListCloudConnectionTagsResponse } from './model/ListCloudConnectionTagsResponse';
import { ListCloudConnectionsByTagsRequest } from './model/ListCloudConnectionsByTagsRequest';
import { ListCloudConnectionsByTagsRequestBody } from './model/ListCloudConnectionsByTagsRequestBody';
import { ListCloudConnectionsByTagsResponse } from './model/ListCloudConnectionsByTagsResponse';
import { ListCloudConnectionsRequest } from './model/ListCloudConnectionsRequest';
import { ListCloudConnectionsResponse } from './model/ListCloudConnectionsResponse';
import { ListGcbResourceByTagRequest } from './model/ListGcbResourceByTagRequest';
import { ListGcbResourceByTagResponse } from './model/ListGcbResourceByTagResponse';
import { ListGcbResourceTagsRequest } from './model/ListGcbResourceTagsRequest';
import { ListGcbResourceTagsResponse } from './model/ListGcbResourceTagsResponse';
import { ListGcbTenantTagsRequest } from './model/ListGcbTenantTagsRequest';
import { ListGcbTenantTagsResponse } from './model/ListGcbTenantTagsResponse';
import { ListGlobalConnectionBandwidthConfigs } from './model/ListGlobalConnectionBandwidthConfigs';
import { ListGlobalConnectionBandwidthConfigsRequest } from './model/ListGlobalConnectionBandwidthConfigsRequest';
import { ListGlobalConnectionBandwidthConfigsResponse } from './model/ListGlobalConnectionBandwidthConfigsResponse';
import { ListGlobalConnectionBandwidthLineLevelsRequest } from './model/ListGlobalConnectionBandwidthLineLevelsRequest';
import { ListGlobalConnectionBandwidthLineLevelsResponse } from './model/ListGlobalConnectionBandwidthLineLevelsResponse';
import { ListGlobalConnectionBandwidthSitesRequest } from './model/ListGlobalConnectionBandwidthSitesRequest';
import { ListGlobalConnectionBandwidthSitesResponse } from './model/ListGlobalConnectionBandwidthSitesResponse';
import { ListGlobalConnectionBandwidthSpecCodesRequest } from './model/ListGlobalConnectionBandwidthSpecCodesRequest';
import { ListGlobalConnectionBandwidthSpecCodesResponse } from './model/ListGlobalConnectionBandwidthSpecCodesResponse';
import { ListGlobalConnectionBandwidthsRequest } from './model/ListGlobalConnectionBandwidthsRequest';
import { ListGlobalConnectionBandwidthsResponse } from './model/ListGlobalConnectionBandwidthsResponse';
import { ListInterRegionBandwidthsRequest } from './model/ListInterRegionBandwidthsRequest';
import { ListInterRegionBandwidthsResponse } from './model/ListInterRegionBandwidthsResponse';
import { ListNetworkInstancesRequest } from './model/ListNetworkInstancesRequest';
import { ListNetworkInstancesResponse } from './model/ListNetworkInstancesResponse';
import { ListPermissionsRequest } from './model/ListPermissionsRequest';
import { ListPermissionsResponse } from './model/ListPermissionsResponse';
import { ListRegionBandwidthPackageSpecificationsRequest } from './model/ListRegionBandwidthPackageSpecificationsRequest';
import { ListRegionBandwidthPackageSpecificationsResponse } from './model/ListRegionBandwidthPackageSpecificationsResponse';
import { ListRegionsRequest } from './model/ListRegionsRequest';
import { ListRegionsResponse } from './model/ListRegionsResponse';
import { ListResponseBody } from './model/ListResponseBody';
import { ListSiteNetworkCapabilitiesRequest } from './model/ListSiteNetworkCapabilitiesRequest';
import { ListSiteNetworkCapabilitiesResponse } from './model/ListSiteNetworkCapabilitiesResponse';
import { ListSiteNetworkQuotasRequest } from './model/ListSiteNetworkQuotasRequest';
import { ListSiteNetworkQuotasResponse } from './model/ListSiteNetworkQuotasResponse';
import { ListSiteNetworksRequest } from './model/ListSiteNetworksRequest';
import { ListSiteNetworksResponse } from './model/ListSiteNetworksResponse';
import { ListSupportBindingConnectionBandwidthsRequest } from './model/ListSupportBindingConnectionBandwidthsRequest';
import { ListSupportBindingConnectionBandwidthsResponse } from './model/ListSupportBindingConnectionBandwidthsResponse';
import { LocalAreaId } from './model/LocalAreaId';
import { LocalAreaIdDef } from './model/LocalAreaIdDef';
import { LocalRegionId } from './model/LocalRegionId';
import { MultivaluedTag } from './model/MultivaluedTag';
import { Name } from './model/Name';
import { NameDef } from './model/NameDef';
import { NetworkInstance } from './model/NetworkInstance';
import { NextMarker } from './model/NextMarker';
import { NonDefaultAutoAssociateRouteEnabled } from './model/NonDefaultAutoAssociateRouteEnabled';
import { NonDefaultAutoPropagateRouteEnabled } from './model/NonDefaultAutoPropagateRouteEnabled';
import { NonRequiredAutoAssociateRouteEnabled } from './model/NonRequiredAutoAssociateRouteEnabled';
import { NonRequiredAutoPropagateRouteEnabled } from './model/NonRequiredAutoPropagateRouteEnabled';
import { NonRequiredCentralNetworkPlaneId } from './model/NonRequiredCentralNetworkPlaneId';
import { NonRequiredGcbChargeMode } from './model/NonRequiredGcbChargeMode';
import { NonRequiredGcbSize } from './model/NonRequiredGcbSize';
import { NonRequiredHostedCloud } from './model/NonRequiredHostedCloud';
import { NonRequiredName } from './model/NonRequiredName';
import { PageInfo } from './model/PageInfo';
import { Permission } from './model/Permission';
import { PreviousMarker } from './model/PreviousMarker';
import { ProjectId } from './model/ProjectId';
import { ProjectIdDef } from './model/ProjectIdDef';
import { QueryResourceByTagRequestBody } from './model/QueryResourceByTagRequestBody';
import { QueryTag } from './model/QueryTag';
import { QuotaLimit } from './model/QuotaLimit';
import { QuotaUnit } from './model/QuotaUnit';
import { QuotaUsed } from './model/QuotaUsed';
import { Region } from './model/Region';
import { RegionBandwidthPackageSpecification } from './model/RegionBandwidthPackageSpecification';
import { RegionId } from './model/RegionId';
import { RegionIdDef } from './model/RegionIdDef';
import { RemoteAreaId } from './model/RemoteAreaId';
import { RemoteAreaIdDef } from './model/RemoteAreaIdDef';
import { RemoteRegionId } from './model/RemoteRegionId';
import { RequestId } from './model/RequestId';
import { RequiredTag } from './model/RequiredTag';
import { ResourceId } from './model/ResourceId';
import { ResourceType } from './model/ResourceType';
import { ShowBandwidthPackageRequest } from './model/ShowBandwidthPackageRequest';
import { ShowBandwidthPackageResponse } from './model/ShowBandwidthPackageResponse';
import { ShowCentralNetworkErRouteTableAttachmentRequest } from './model/ShowCentralNetworkErRouteTableAttachmentRequest';
import { ShowCentralNetworkErRouteTableAttachmentResponse } from './model/ShowCentralNetworkErRouteTableAttachmentResponse';
import { ShowCentralNetworkGdgwAttachmentRequest } from './model/ShowCentralNetworkGdgwAttachmentRequest';
import { ShowCentralNetworkGdgwAttachmentResponse } from './model/ShowCentralNetworkGdgwAttachmentResponse';
import { ShowCentralNetworkRequest } from './model/ShowCentralNetworkRequest';
import { ShowCentralNetworkResponse } from './model/ShowCentralNetworkResponse';
import { ShowCloudConnectionRequest } from './model/ShowCloudConnectionRequest';
import { ShowCloudConnectionResponse } from './model/ShowCloudConnectionResponse';
import { ShowCloudConnectionRoutesRequest } from './model/ShowCloudConnectionRoutesRequest';
import { ShowCloudConnectionRoutesResponse } from './model/ShowCloudConnectionRoutesResponse';
import { ShowGlobalConnectionBandwidthRequest } from './model/ShowGlobalConnectionBandwidthRequest';
import { ShowGlobalConnectionBandwidthResponse } from './model/ShowGlobalConnectionBandwidthResponse';
import { ShowInterRegionBandwidthRequest } from './model/ShowInterRegionBandwidthRequest';
import { ShowInterRegionBandwidthResponse } from './model/ShowInterRegionBandwidthResponse';
import { ShowNetworkInstanceRequest } from './model/ShowNetworkInstanceRequest';
import { ShowNetworkInstanceResponse } from './model/ShowNetworkInstanceResponse';
import { ShowSiteNetworkRequest } from './model/ShowSiteNetworkRequest';
import { ShowSiteNetworkResponse } from './model/ShowSiteNetworkResponse';
import { SiteCode } from './model/SiteCode';
import { SiteCodeDef } from './model/SiteCodeDef';
import { SiteConnection } from './model/SiteConnection';
import { SiteConnectionState } from './model/SiteConnectionState';
import { SiteConnectionStateEnum } from './model/SiteConnectionStateEnum';
import { SiteGroupReferenceInfo } from './model/SiteGroupReferenceInfo';
import { SiteInformation } from './model/SiteInformation';
import { SiteNetworkCapabilityEntry } from './model/SiteNetworkCapabilityEntry';
import { SiteNetworkEntry } from './model/SiteNetworkEntry';
import { SiteNetworkId } from './model/SiteNetworkId';
import { SiteNetworkQuota } from './model/SiteNetworkQuota';
import { SiteNetworkQuotaKey } from './model/SiteNetworkQuotaKey';
import { SiteNetworkQuotaKeyEnum } from './model/SiteNetworkQuotaKeyEnum';
import { SiteNetworkSpecificationEnum } from './model/SiteNetworkSpecificationEnum';
import { SiteNetworkState } from './model/SiteNetworkState';
import { SiteNetworkStateEnum } from './model/SiteNetworkStateEnum';
import { SiteNetworkTopology } from './model/SiteNetworkTopology';
import { SiteNetworkTopologyEnum } from './model/SiteNetworkTopologyEnum';
import { SortDir } from './model/SortDir';
import { SpecCode } from './model/SpecCode';
import { SpecificationCodeInfo } from './model/SpecificationCodeInfo';
import { Tag } from './model/Tag';
import { TagBandwidthPackageRequest } from './model/TagBandwidthPackageRequest';
import { TagBandwidthPackageRequestBody } from './model/TagBandwidthPackageRequestBody';
import { TagBandwidthPackageResponse } from './model/TagBandwidthPackageResponse';
import { TagCentralNetworkRequest } from './model/TagCentralNetworkRequest';
import { TagCentralNetworkRequestBody } from './model/TagCentralNetworkRequestBody';
import { TagCentralNetworkResponse } from './model/TagCentralNetworkResponse';
import { TagCloudConnectionRequest } from './model/TagCloudConnectionRequest';
import { TagCloudConnectionRequestBody } from './model/TagCloudConnectionRequestBody';
import { TagCloudConnectionResponse } from './model/TagCloudConnectionResponse';
import { TagKey } from './model/TagKey';
import { TagValue } from './model/TagValue';
import { Tags } from './model/Tags';
import { TmsMatch } from './model/TmsMatch';
import { TmsResource } from './model/TmsResource';
import { TmsTagValues } from './model/TmsTagValues';
import { UUID32Def } from './model/UUID32Def';
import { UUID32Identifier } from './model/UUID32Identifier';
import { UUID64Def } from './model/UUID64Def';
import { UUID64Identifier } from './model/UUID64Identifier';
import { UntagBandwidthPackageRequest } from './model/UntagBandwidthPackageRequest';
import { UntagBandwidthPackageRequestBody } from './model/UntagBandwidthPackageRequestBody';
import { UntagBandwidthPackageResponse } from './model/UntagBandwidthPackageResponse';
import { UntagCentralNetworkRequest } from './model/UntagCentralNetworkRequest';
import { UntagCentralNetworkRequestBody } from './model/UntagCentralNetworkRequestBody';
import { UntagCentralNetworkResponse } from './model/UntagCentralNetworkResponse';
import { UntagCloudConnectionRequest } from './model/UntagCloudConnectionRequest';
import { UntagCloudConnectionRequestBody } from './model/UntagCloudConnectionRequestBody';
import { UntagCloudConnectionResponse } from './model/UntagCloudConnectionResponse';
import { UpdateAuthorisation } from './model/UpdateAuthorisation';
import { UpdateAuthorisationRequest } from './model/UpdateAuthorisationRequest';
import { UpdateAuthorisationRequestBody } from './model/UpdateAuthorisationRequestBody';
import { UpdateAuthorisationResponse } from './model/UpdateAuthorisationResponse';
import { UpdateBandwidthPackage } from './model/UpdateBandwidthPackage';
import { UpdateBandwidthPackageRequest } from './model/UpdateBandwidthPackageRequest';
import { UpdateBandwidthPackageRequestBody } from './model/UpdateBandwidthPackageRequestBody';
import { UpdateBandwidthPackageResponse } from './model/UpdateBandwidthPackageResponse';
import { UpdateCentralNetwork } from './model/UpdateCentralNetwork';
import { UpdateCentralNetworkConnection } from './model/UpdateCentralNetworkConnection';
import { UpdateCentralNetworkConnectionRequest } from './model/UpdateCentralNetworkConnectionRequest';
import { UpdateCentralNetworkConnectionRequestBody } from './model/UpdateCentralNetworkConnectionRequestBody';
import { UpdateCentralNetworkConnectionResponse } from './model/UpdateCentralNetworkConnectionResponse';
import { UpdateCentralNetworkErRouteTableAttachment } from './model/UpdateCentralNetworkErRouteTableAttachment';
import { UpdateCentralNetworkErRouteTableAttachmentRequest } from './model/UpdateCentralNetworkErRouteTableAttachmentRequest';
import { UpdateCentralNetworkErRouteTableAttachmentRequestBody } from './model/UpdateCentralNetworkErRouteTableAttachmentRequestBody';
import { UpdateCentralNetworkErRouteTableAttachmentResponse } from './model/UpdateCentralNetworkErRouteTableAttachmentResponse';
import { UpdateCentralNetworkGdgwAttachment } from './model/UpdateCentralNetworkGdgwAttachment';
import { UpdateCentralNetworkGdgwAttachmentRequest } from './model/UpdateCentralNetworkGdgwAttachmentRequest';
import { UpdateCentralNetworkGdgwAttachmentRequestBody } from './model/UpdateCentralNetworkGdgwAttachmentRequestBody';
import { UpdateCentralNetworkGdgwAttachmentResponse } from './model/UpdateCentralNetworkGdgwAttachmentResponse';
import { UpdateCentralNetworkRequest } from './model/UpdateCentralNetworkRequest';
import { UpdateCentralNetworkRequestBody } from './model/UpdateCentralNetworkRequestBody';
import { UpdateCentralNetworkResponse } from './model/UpdateCentralNetworkResponse';
import { UpdateCloudConnection } from './model/UpdateCloudConnection';
import { UpdateCloudConnectionRequest } from './model/UpdateCloudConnectionRequest';
import { UpdateCloudConnectionRequestBody } from './model/UpdateCloudConnectionRequestBody';
import { UpdateCloudConnectionResponse } from './model/UpdateCloudConnectionResponse';
import { UpdateGlobalConnectionBandwidth } from './model/UpdateGlobalConnectionBandwidth';
import { UpdateGlobalConnectionBandwidthRequest } from './model/UpdateGlobalConnectionBandwidthRequest';
import { UpdateGlobalConnectionBandwidthRequestBody } from './model/UpdateGlobalConnectionBandwidthRequestBody';
import { UpdateGlobalConnectionBandwidthResponse } from './model/UpdateGlobalConnectionBandwidthResponse';
import { UpdateInterRegionBandwidth } from './model/UpdateInterRegionBandwidth';
import { UpdateInterRegionBandwidthRequest } from './model/UpdateInterRegionBandwidthRequest';
import { UpdateInterRegionBandwidthRequestBody } from './model/UpdateInterRegionBandwidthRequestBody';
import { UpdateInterRegionBandwidthResponse } from './model/UpdateInterRegionBandwidthResponse';
import { UpdateNetworkInstance } from './model/UpdateNetworkInstance';
import { UpdateNetworkInstanceRequest } from './model/UpdateNetworkInstanceRequest';
import { UpdateNetworkInstanceRequestBody } from './model/UpdateNetworkInstanceRequestBody';
import { UpdateNetworkInstanceResponse } from './model/UpdateNetworkInstanceResponse';
import { UpdatePrepaidOptions } from './model/UpdatePrepaidOptions';
import { UpdateSiteConnectionBandwidth } from './model/UpdateSiteConnectionBandwidth';
import { UpdateSiteConnectionBandwidthRequestBody } from './model/UpdateSiteConnectionBandwidthRequestBody';
import { UpdateSiteConnectionBandwidthSize } from './model/UpdateSiteConnectionBandwidthSize';
import { UpdateSiteConnectionBandwidthSizeRequestBody } from './model/UpdateSiteConnectionBandwidthSizeRequestBody';
import { UpdateSiteNetwork } from './model/UpdateSiteNetwork';
import { UpdateSiteNetworkBandwidthRequest } from './model/UpdateSiteNetworkBandwidthRequest';
import { UpdateSiteNetworkBandwidthResponse } from './model/UpdateSiteNetworkBandwidthResponse';
import { UpdateSiteNetworkBandwidthSizeRequest } from './model/UpdateSiteNetworkBandwidthSizeRequest';
import { UpdateSiteNetworkBandwidthSizeResponse } from './model/UpdateSiteNetworkBandwidthSizeResponse';
import { UpdateSiteNetworkRequest } from './model/UpdateSiteNetworkRequest';
import { UpdateSiteNetworkRequestBody } from './model/UpdateSiteNetworkRequestBody';
import { UpdateSiteNetworkResponse } from './model/UpdateSiteNetworkResponse';
import { UpdatedAt } from './model/UpdatedAt';
import { Version } from './model/Version';
import { VersionDef } from './model/VersionDef';

export class CcClient {
    public static newBuilder(): ClientBuilder<CcClient> {
            let client = new ClientBuilder<CcClient>(newClient, 'GlobalCredentials');
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
     * 网络实例所属租户授予云连接实例所属租户加载其网络实例的权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建授权
     * @param {CreateAuthorisationRequestBody} createAuthorisationRequestBody 创建授权的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAuthorisation(createAuthorisationRequest?: CreateAuthorisationRequest): Promise<CreateAuthorisationResponse> {
        const options = ParamCreater().createAuthorisation(createAuthorisationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 网络实例所属租户取消授予云连接实例所属租户加载其网络实例的权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除授权
     * @param {string} id 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAuthorisation(deleteAuthorisationRequest?: DeleteAuthorisationRequest): Promise<DeleteAuthorisationResponse> {
        const options = ParamCreater().deleteAuthorisation(deleteAuthorisationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 网络实例所属租户查看其已经授予其他租户的权限。
     * 分页查询使用的参数为marker、limit。marker和limit一起使用时才会生效，单独使用无效。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询授权列表
     * @param {number} [limit] 每页返回的个数。 取值范围：1~2000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向后翻页。 翻页过程中，查询条件不能修改，包括过滤条件、排序条件、limit。
     * @param {Array<string>} [id] 根据ID查询，可查询多个ID。
     * @param {Array<string>} [name] 根据名称查询，可查询多个名称。
     * @param {Array<string>} [description] 根据描述查询，可查询多个描述。
     * @param {Array<string>} [cloudConnectionId] 根据云连接的ID过滤列表。
     * @param {Array<string>} [instanceId] 根据实例ID过滤授权列表。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuthorisations(listAuthorisationsRequest?: ListAuthorisationsRequest): Promise<ListAuthorisationsResponse> {
        const options = ParamCreater().listAuthorisations(listAuthorisationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 云连接实例所属租户查询其可加载其他租户的网络实例权限。
     * 分页查询使用的参数为marker、limit。marker和limit一起使用时才会生效，单独使用无效。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询权限列表
     * @param {number} [limit] 每页返回的个数。 取值范围：1~2000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向后翻页。 翻页过程中，查询条件不能修改，包括过滤条件、排序条件、limit。
     * @param {Array<string>} [id] 根据ID查询，可查询多个ID。
     * @param {Array<string>} [name] 根据名称查询，可查询多个名称。
     * @param {Array<string>} [description] 根据描述查询，可查询多个描述。
     * @param {Array<string>} [cloudConnectionId] 根据云连接的ID过滤列表。
     * @param {Array<string>} [instanceId] 根据实例ID过滤授权列表。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPermissions(listPermissionsRequest?: ListPermissionsRequest): Promise<ListPermissionsResponse> {
        const options = ParamCreater().listPermissions(listPermissionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新授权实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新授权
     * @param {string} id 实例ID。
     * @param {UpdateAuthorisationRequestBody} updateAuthorisationRequestBody 更新授权实例的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAuthorisation(updateAuthorisationRequest?: UpdateAuthorisationRequest): Promise<UpdateAuthorisationResponse> {
        const options = ParamCreater().updateAuthorisation(updateAuthorisationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将带宽包实例绑定到云连接实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 将带宽包实例绑定到云连接实例
     * @param {string} id 实例ID。
     * @param {AssociateBandwidthPackageRequestBody} associateBandwidthPackageRequestBody 将带宽包实例关联到资源的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateBandwidthPackage(associateBandwidthPackageRequest?: AssociateBandwidthPackageRequest): Promise<AssociateBandwidthPackageResponse> {
        const options = ParamCreater().associateBandwidthPackage(associateBandwidthPackageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建带宽包实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建带宽包实例
     * @param {CreateBandwidthPackageRequestBody} createBandwidthPackageRequestBody 创建带宽包实例的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createBandwidthPackage(createBandwidthPackageRequest?: CreateBandwidthPackageRequest): Promise<CreateBandwidthPackageResponse> {
        const options = ParamCreater().createBandwidthPackage(createBandwidthPackageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除带宽包实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除带宽包实例
     * @param {string} id 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteBandwidthPackage(deleteBandwidthPackageRequest?: DeleteBandwidthPackageRequest): Promise<DeleteBandwidthPackageResponse> {
        const options = ParamCreater().deleteBandwidthPackage(deleteBandwidthPackageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 解除带宽包实例与云连接实例的绑定。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解除带宽包实例与云连接实例的绑定
     * @param {string} id 实例ID。
     * @param {DisassociateBandwidthPackageRequestBody} disassociateBandwidthPackageRequestBody 将带宽包实例与资源解关联的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disassociateBandwidthPackage(disassociateBandwidthPackageRequest?: DisassociateBandwidthPackageRequest): Promise<DisassociateBandwidthPackageResponse> {
        const options = ParamCreater().disassociateBandwidthPackage(disassociateBandwidthPackageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询带宽包的标签信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询带宽包的标签信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBandwidthPackageTags(listBandwidthPackageTagsRequest?: ListBandwidthPackageTagsRequest): Promise<ListBandwidthPackageTagsResponse> {
        const options = ParamCreater().listBandwidthPackageTags();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询带宽包列表。
     * 分页查询使用的参数为marker、limit。marker和limit一起使用时才会生效，单独使用无效。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询带宽包列表
     * @param {number} [limit] 每页返回的个数。 取值范围：1~2000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向后翻页。 翻页过程中，查询条件不能修改，包括过滤条件、排序条件、limit。
     * @param {Array<string>} [id] 根据ID查询，可查询多个ID。
     * @param {Array<string>} [name] 根据名称查询，可查询多个名称。
     * @param {Array<string>} [enterpriseProjectId] 根据企业项目ID过滤列表。
     * @param {Array<string>} [cloudConnectionId] 根据云连接的ID过滤列表。
     * @param {Array<'ACTIVE'>} [status] 根据状态过滤带宽包实例列表。ACTIVE：表示状态可用。
     * @param {Array<string>} [billingMode] 根据计费方式过滤带宽包实例列表。
     * @param {Array<string>} [resourceId] 根据绑定的资源ID过滤带宽包实例列表。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBandwidthPackages(listBandwidthPackagesRequest?: ListBandwidthPackagesRequest): Promise<ListBandwidthPackagesResponse> {
        const options = ParamCreater().listBandwidthPackages(listBandwidthPackagesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过标签过滤带宽包实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 通过标签过滤带宽包实例
     * @param {ListBandwidthPackagesByTagsRequestBody} listBandwidthPackagesByTagsRequestBody 通过标签过滤带宽包实例的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBandwidthPackagesByTags(listBandwidthPackagesByTagsRequest?: ListBandwidthPackagesByTagsRequest): Promise<ListBandwidthPackagesByTagsResponse> {
        const options = ParamCreater().listBandwidthPackagesByTags(listBandwidthPackagesByTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询带宽包实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询带宽包实例
     * @param {string} id 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBandwidthPackage(showBandwidthPackageRequest?: ShowBandwidthPackageRequest): Promise<ShowBandwidthPackageResponse> {
        const options = ParamCreater().showBandwidthPackage(showBandwidthPackageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建带宽包标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建带宽包标签
     * @param {string} id 实例ID。
     * @param {TagBandwidthPackageRequestBody} tagBandwidthPackageRequestBody 创建带宽包标签请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public tagBandwidthPackage(tagBandwidthPackageRequest?: TagBandwidthPackageRequest): Promise<TagBandwidthPackageResponse> {
        const options = ParamCreater().tagBandwidthPackage(tagBandwidthPackageRequest);

         // @ts-ignore
        options['responseHeaders'] = ['x-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除带宽包标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除带宽包标签
     * @param {string} id 实例ID。
     * @param {UntagBandwidthPackageRequestBody} untagBandwidthPackageRequestBody 删除带宽包标签请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public untagBandwidthPackage(untagBandwidthPackageRequest?: UntagBandwidthPackageRequest): Promise<UntagBandwidthPackageResponse> {
        const options = ParamCreater().untagBandwidthPackage(untagBandwidthPackageRequest);

         // @ts-ignore
        options['responseHeaders'] = ['x-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新带宽包实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新带宽包实例
     * @param {string} id 实例ID。
     * @param {UpdateBandwidthPackageRequestBody} updateBandwidthPackageRequestBody 更新带宽包实例的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateBandwidthPackage(updateBandwidthPackageRequest?: UpdateBandwidthPackageRequest): Promise<UpdateBandwidthPackageResponse> {
        const options = ParamCreater().updateBandwidthPackage(updateBandwidthPackageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用中心网络策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 应用中心网络策略
     * @param {string} policyId 网络策略ID。
     * @param {string} centralNetworkId 中心网络的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public applyCentralNetworkPolicy(applyCentralNetworkPolicyRequest?: ApplyCentralNetworkPolicyRequest): Promise<ApplyCentralNetworkPolicyResponse> {
        const options = ParamCreater().applyCentralNetworkPolicy(applyCentralNetworkPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建中心网络。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建中心网络
     * @param {CreateCentralNetworkRequestBody} createCentralNetworkRequestBody 创建中心网络的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCentralNetwork(createCentralNetworkRequest?: CreateCentralNetworkRequest): Promise<CreateCentralNetworkResponse> {
        const options = ParamCreater().createCentralNetwork(createCentralNetworkRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建一份只读的中心网络的策略。如果您有策略文档内容改动，需要基于此版本重新创建一个新版本的策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建一个新版本的中心网络策略
     * @param {string} centralNetworkId 中心网络的ID。
     * @param {CreateCentralNetworkPolicyRequestBody} createCentralNetworkPolicyRequestBody 创建中心网络策略的请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCentralNetworkPolicy(createCentralNetworkPolicyRequest?: CreateCentralNetworkPolicyRequest): Promise<CreateCentralNetworkPolicyResponse> {
        const options = ParamCreater().createCentralNetworkPolicy(createCentralNetworkPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除中心网络，请先清除附件后再删除中心网络。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除中心网络
     * @param {string} centralNetworkId 中心网络的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCentralNetwork(deleteCentralNetworkRequest?: DeleteCentralNetworkRequest): Promise<DeleteCentralNetworkResponse> {
        const options = ParamCreater().deleteCentralNetwork(deleteCentralNetworkRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除中心网络策略版本。您无法删除正在被应用的中心策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除中心网络策略版本
     * @param {string} policyId 网络策略ID。
     * @param {string} centralNetworkId 中心网络的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCentralNetworkPolicy(deleteCentralNetworkPolicyRequest?: DeleteCentralNetworkPolicyRequest): Promise<DeleteCentralNetworkPolicyResponse> {
        const options = ParamCreater().deleteCentralNetworkPolicy(deleteCentralNetworkPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = ['x-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询所有版本的中心网络策略列表。
     * 分页查询使用的参数为marker、limit。limit默认值为0，没有指定marker时返回第一条数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有版本的中心网络策略列表
     * @param {string} centralNetworkId 中心网络的ID。
     * @param {number} [limit] 每页返回的个数。 取值范围：1~2000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向后翻页。 翻页过程中，查询条件不能修改，包括过滤条件、排序条件、limit。
     * @param {string} [sortKey] 排序字段。
     * @param {SortDir} [sortDir] 指定排序是升序还是降序（asc为升序，desc为降序）。
     * @param {Array<string>} [id] 根据ID查询，可查询多个ID。
     * @param {Array<CentralNetworkPolicyStateEnum>} [state] 根据状态查询，可查询多个状态。
     * @param {Array<Version>} [version] 根据版本查询，可查询多个版本。
     * @param {boolean} [isApplied] 是否被应用。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCentralNetworkPolicies(listCentralNetworkPoliciesRequest?: ListCentralNetworkPoliciesRequest): Promise<ListCentralNetworkPoliciesResponse> {
        const options = ParamCreater().listCentralNetworkPolicies(listCentralNetworkPoliciesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询与当前应用中心网络策略的变化集。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询中心网络策略变化集
     * @param {string} policyId 网络策略ID。
     * @param {string} centralNetworkId 中心网络的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCentralNetworkPolicyChangeSet(listCentralNetworkPolicyChangeSetRequest?: ListCentralNetworkPolicyChangeSetRequest): Promise<ListCentralNetworkPolicyChangeSetResponse> {
        const options = ParamCreater().listCentralNetworkPolicyChangeSet(listCentralNetworkPolicyChangeSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询中心网络的标签信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询中心网络的标签信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCentralNetworkTags(listCentralNetworkTagsRequest?: ListCentralNetworkTagsRequest): Promise<ListCentralNetworkTagsResponse> {
        const options = ParamCreater().listCentralNetworkTags();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询中心网络列表。
     * 分页查询使用的参数为marker、limit。limit默认值为0，没有指定marker时返回第一条数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询中心网络列表
     * @param {number} [limit] 每页返回的个数。 取值范围：1~2000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向后翻页。 翻页过程中，查询条件不能修改，包括过滤条件、排序条件、limit。
     * @param {string} [sortKey] 排序字段。
     * @param {SortDir} [sortDir] 指定排序是升序还是降序（asc为升序，desc为降序）。
     * @param {Array<string>} [id] 根据ID查询，可查询多个ID。
     * @param {Array<string>} [name] 根据名称查询，可查询多个名称。
     * @param {Array<CentralNetworkStateEnum>} [state] 根据状态查询，可查询多个状态。
     * @param {Array<string>} [enterpriseProjectId] 根据企业项目ID过滤列表。
     * @param {Array<string>} [enterpriseRouterId] 根据ER实例ID过滤列表。
     * @param {Array<string>} [attachmentInstanceId] Attachment实例的ID。
     * @param {Array<string>} [globalConnectionBandwidthId] 根据带宽包ID过滤。
     * @param {Array<string>} [connectionId] 连接的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCentralNetworks(listCentralNetworksRequest?: ListCentralNetworksRequest): Promise<ListCentralNetworksResponse> {
        const options = ParamCreater().listCentralNetworks(listCentralNetworksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过标签过滤中心网络实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 通过标签过滤中心网络实例
     * @param {ListCentralNetworksByTagsRequestBody} listCentralNetworksByTagsRequestBody 通过标签过滤中心网络实例的请求体。
     * @param {number} [limit] 每页返回的个数。 取值范围：1~2000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向后翻页。 翻页过程中，查询条件不能修改，包括过滤条件、排序条件、limit。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCentralNetworksByTags(listCentralNetworksByTagsRequest?: ListCentralNetworksByTagsRequest): Promise<ListCentralNetworksByTagsResponse> {
        const options = ParamCreater().listCentralNetworksByTags(listCentralNetworksByTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询中心网络详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询中心网络详情
     * @param {string} centralNetworkId 中心网络的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCentralNetwork(showCentralNetworkRequest?: ShowCentralNetworkRequest): Promise<ShowCentralNetworkResponse> {
        const options = ParamCreater().showCentralNetwork(showCentralNetworkRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建中心网络标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建中心网络标签
     * @param {string} centralNetworkId 中心网络的ID。
     * @param {TagCentralNetworkRequestBody} tagCentralNetworkRequestBody 创建中心网络标签请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public tagCentralNetwork(tagCentralNetworkRequest?: TagCentralNetworkRequest): Promise<TagCentralNetworkResponse> {
        const options = ParamCreater().tagCentralNetwork(tagCentralNetworkRequest);

         // @ts-ignore
        options['responseHeaders'] = ['x-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除中心网络标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除中心网络标签
     * @param {string} centralNetworkId 中心网络的ID。
     * @param {UntagCentralNetworkRequestBody} untagCentralNetworkRequestBody 删除中心网络标签请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public untagCentralNetwork(untagCentralNetworkRequest?: UntagCentralNetworkRequest): Promise<UntagCentralNetworkResponse> {
        const options = ParamCreater().untagCentralNetwork(untagCentralNetworkRequest);

         // @ts-ignore
        options['responseHeaders'] = ['x-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新中心网络详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新中心网络详情
     * @param {string} centralNetworkId 中心网络的ID。
     * @param {UpdateCentralNetworkRequestBody} updateCentralNetworkRequestBody 更新中心网络详情的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateCentralNetwork(updateCentralNetworkRequest?: UpdateCentralNetworkRequest): Promise<UpdateCentralNetworkResponse> {
        const options = ParamCreater().updateCentralNetwork(updateCentralNetworkRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建中心网络的路由表附件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建中心网络ER路由表附件
     * @param {string} centralNetworkId 中心网络的ID。
     * @param {CreateCentralNetworkErRouteTableAttachmentsRequestBody} createCentralNetworkErRouteTableAttachmentsRequestBody 创建中心网络的路由表附件的请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCentralNetworkErRouteTableAttachment(createCentralNetworkErRouteTableAttachmentRequest?: CreateCentralNetworkErRouteTableAttachmentRequest): Promise<CreateCentralNetworkErRouteTableAttachmentResponse> {
        const options = ParamCreater().createCentralNetworkErRouteTableAttachment(createCentralNetworkErRouteTableAttachmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建中心网络的GDGW附件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建中心网络GDGW附件
     * @param {string} centralNetworkId 中心网络的ID。
     * @param {CreateCentralNetworkGdgwAttachmentRequestBody} createCentralNetworkGdgwAttachmentRequestBody 创建中心网络的GDGW附件的请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCentralNetworkGdgwAttachment(createCentralNetworkGdgwAttachmentRequest?: CreateCentralNetworkGdgwAttachmentRequest): Promise<CreateCentralNetworkGdgwAttachmentResponse> {
        const options = ParamCreater().createCentralNetworkGdgwAttachment(createCentralNetworkGdgwAttachmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除中心网络附件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除中心网络附件
     * @param {string} centralNetworkId 中心网络的ID。
     * @param {string} attachmentId 中心网络附件ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCentralNetworkAttachment(deleteCentralNetworkAttachmentRequest?: DeleteCentralNetworkAttachmentRequest): Promise<DeleteCentralNetworkAttachmentResponse> {
        const options = ParamCreater().deleteCentralNetworkAttachment(deleteCentralNetworkAttachmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询中心网络附件列表，分页查询使用的参数为marker、limit。limit默认值为0，没有指定marker时返回第一条数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询中心网络附件列表
     * @param {string} centralNetworkId 中心网络的ID。
     * @param {number} [limit] 每页返回的个数。 取值范围：1~2000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向后翻页。 翻页过程中，查询条件不能修改，包括过滤条件、排序条件、limit。
     * @param {string} [sortKey] 排序字段。
     * @param {SortDir} [sortDir] 指定排序是升序还是降序（asc为升序，desc为降序）。
     * @param {Array<string>} [id] 根据ID查询，可查询多个ID。
     * @param {Array<string>} [name] 根据名称查询，可查询多个名称。
     * @param {Array<AttachmentInstanceTypeEnum>} [attachmentInstanceType] 根据附件类型查询，可查询多个附件类型。
     * @param {Array<CentralNetworkConnectionStateEnum>} [state] 根据状态查询，可查询多个状态。
     * @param {Array<string>} [attachmentInstanceId] Attachment实例的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCentralNetworkAttachments(listCentralNetworkAttachmentsRequest?: ListCentralNetworkAttachmentsRequest): Promise<ListCentralNetworkAttachmentsResponse> {
        const options = ParamCreater().listCentralNetworkAttachments(listCentralNetworkAttachmentsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询中心网络ER路由表附件列表。
     * 分页查询使用的参数为marker、limit。limit默认值为0，没有指定marker时返回第一条数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询中心网络ER路由表附件列表
     * @param {string} centralNetworkId 中心网络的ID。
     * @param {number} [limit] 每页返回的个数。 取值范围：1~2000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向后翻页。 翻页过程中，查询条件不能修改，包括过滤条件、排序条件、limit。
     * @param {string} [sortKey] 排序字段。
     * @param {SortDir} [sortDir] 指定排序是升序还是降序（asc为升序，desc为降序）。
     * @param {Array<string>} [id] 根据ID查询，可查询多个ID。
     * @param {Array<string>} [name] 根据名称查询，可查询多个名称。
     * @param {Array<CentralNetworkConnectionStateEnum>} [state] 根据状态查询，可查询多个状态。
     * @param {Array<string>} [attachmentInstanceId] Attachment实例的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCentralNetworkErRouteTableAttachments(listCentralNetworkErRouteTableAttachmentsRequest?: ListCentralNetworkErRouteTableAttachmentsRequest): Promise<ListCentralNetworkErRouteTableAttachmentsResponse> {
        const options = ParamCreater().listCentralNetworkErRouteTableAttachments(listCentralNetworkErRouteTableAttachmentsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询中心网络GDGW附件列表。
     * 分页查询使用的参数为marker、limit。limit默认值为0，没有指定marker时返回第一条数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询中心网络GDGW附件列表
     * @param {string} centralNetworkId 中心网络的ID。
     * @param {number} [limit] 每页返回的个数。 取值范围：1~2000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向后翻页。 翻页过程中，查询条件不能修改，包括过滤条件、排序条件、limit。
     * @param {string} [sortKey] 排序字段。
     * @param {SortDir} [sortDir] 指定排序是升序还是降序（asc为升序，desc为降序）。
     * @param {Array<string>} [id] 根据ID查询，可查询多个ID。
     * @param {Array<string>} [name] 根据名称查询，可查询多个名称。
     * @param {Array<CentralNetworkConnectionStateEnum>} [state] 根据状态查询，可查询多个状态。
     * @param {Array<string>} [globalDcGatewayId] 根据GDW实例ID过滤列表。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCentralNetworkGdgwAttachments(listCentralNetworkGdgwAttachmentsRequest?: ListCentralNetworkGdgwAttachmentsRequest): Promise<ListCentralNetworkGdgwAttachmentsResponse> {
        const options = ParamCreater().listCentralNetworkGdgwAttachments(listCentralNetworkGdgwAttachmentsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询中心网络ER路由表附件详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询中心网络ER路由表附件详情
     * @param {string} centralNetworkId 中心网络的ID。
     * @param {string} erRouteTableAttachmentId 中心网络ER路由表附件ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCentralNetworkErRouteTableAttachment(showCentralNetworkErRouteTableAttachmentRequest?: ShowCentralNetworkErRouteTableAttachmentRequest): Promise<ShowCentralNetworkErRouteTableAttachmentResponse> {
        const options = ParamCreater().showCentralNetworkErRouteTableAttachment(showCentralNetworkErRouteTableAttachmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询中心网络GDGW附件详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询中心网络GDGW附件详情
     * @param {string} centralNetworkId 中心网络的ID。
     * @param {string} gdgwAttachmentId 中心网络DGW附件ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCentralNetworkGdgwAttachment(showCentralNetworkGdgwAttachmentRequest?: ShowCentralNetworkGdgwAttachmentRequest): Promise<ShowCentralNetworkGdgwAttachmentResponse> {
        const options = ParamCreater().showCentralNetworkGdgwAttachment(showCentralNetworkGdgwAttachmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新中心网络ER路由表附件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新中心网络ER路由表附件
     * @param {string} centralNetworkId 中心网络的ID。
     * @param {string} erRouteTableAttachmentId 中心网络ER路由表附件ID。
     * @param {UpdateCentralNetworkErRouteTableAttachmentRequestBody} updateCentralNetworkErRouteTableAttachmentRequestBody 更新中心网络ER路由表附件的请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateCentralNetworkErRouteTableAttachment(updateCentralNetworkErRouteTableAttachmentRequest?: UpdateCentralNetworkErRouteTableAttachmentRequest): Promise<UpdateCentralNetworkErRouteTableAttachmentResponse> {
        const options = ParamCreater().updateCentralNetworkErRouteTableAttachment(updateCentralNetworkErRouteTableAttachmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新中心网络GDGW附件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新中心网络GDGW附件
     * @param {string} centralNetworkId 中心网络的ID。
     * @param {string} gdgwAttachmentId 中心网络DGW附件ID。
     * @param {UpdateCentralNetworkGdgwAttachmentRequestBody} updateCentralNetworkGdgwAttachmentRequestBody 更新中心网络GDGW附件的请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateCentralNetworkGdgwAttachment(updateCentralNetworkGdgwAttachmentRequest?: UpdateCentralNetworkGdgwAttachmentRequest): Promise<UpdateCentralNetworkGdgwAttachmentResponse> {
        const options = ParamCreater().updateCentralNetworkGdgwAttachment(updateCentralNetworkGdgwAttachmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询中心网络能力列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询中心网络能力列表
     * @param {Array<CentralNetworkCapabilityEnum>} [capability] 根据租户能力名查询，可查询多个类型。
     * @param {number} [limit] 每页返回的个数。 取值范围：1~2000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向后翻页。 翻页过程中，查询条件不能修改，包括过滤条件、排序条件、limit。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCentralNetworkCapabilities(listCentralNetworkCapabilitiesRequest?: ListCentralNetworkCapabilitiesRequest): Promise<ListCentralNetworkCapabilitiesResponse> {
        const options = ParamCreater().listCentralNetworkCapabilities(listCentralNetworkCapabilitiesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询中心网络连接列表接口。
     * 分页查询使用的参数为marker、limit。limit默认值为0，没有指定marker时返回第一条数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询中心网络连接列表
     * @param {string} centralNetworkId 中心网络的ID。
     * @param {number} [limit] 每页返回的个数。 取值范围：1~2000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向后翻页。 翻页过程中，查询条件不能修改，包括过滤条件、排序条件、limit。
     * @param {string} [sortKey] 排序字段。
     * @param {SortDir} [sortDir] 指定排序是升序还是降序（asc为升序，desc为降序）。
     * @param {Array<string>} [id] 根据ID查询，可查询多个ID。
     * @param {Array<string>} [name] 根据名称查询，可查询多个名称。
     * @param {Array<CentralNetworkConnectionStateEnum>} [state] 根据状态查询，可查询多个状态。
     * @param {Array<string>} [globalConnectionBandwidthId] 根据带宽包ID过滤。
     * @param {BandwidthTypeEnum} [bandwidthType] 根据带宽类型查询。带宽类型包括： - BandwidthPackage (按带宽计费，需要绑定全域互联带宽，并指定分配带宽大小) - TestBandwidth (不收费的测试带宽，仅保留最小带宽，用于测试跨地域连通性）
     * @param {ConnectionTypeEnum} [connectionType] 连接类型，支持。
     * @param {boolean} [isCrossRegion] 是否跨地域。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCentralNetworkConnections(listCentralNetworkConnectionsRequest?: ListCentralNetworkConnectionsRequest): Promise<ListCentralNetworkConnectionsResponse> {
        const options = ParamCreater().listCentralNetworkConnections(listCentralNetworkConnectionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新中心网络连接接口（仅支持更新带宽）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新中心网络连接接口
     * @param {string} centralNetworkId 中心网络的ID。
     * @param {string} connectionId 中心网络连接ID。
     * @param {UpdateCentralNetworkConnectionRequestBody} updateCentralNetworkConnectionRequestBody 更新中心网络连接请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateCentralNetworkConnection(updateCentralNetworkConnectionRequest?: UpdateCentralNetworkConnectionRequest): Promise<UpdateCentralNetworkConnectionResponse> {
        const options = ParamCreater().updateCentralNetworkConnection(updateCentralNetworkConnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询中心网络配额。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询中心网络配额
     * @param {Array<CentralNetworkQuotaKeyEnum>} [quotaType] 根据配额类型查询，可查询多个类型。
     * @param {number} [limit] 每页返回的个数。 取值范围：1~2000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向后翻页。 翻页过程中，查询条件不能修改，包括过滤条件、排序条件、limit。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCentralNetworkQuotas(listCentralNetworkQuotasRequest?: ListCentralNetworkQuotasRequest): Promise<ListCentralNetworkQuotasResponse> {
        const options = ParamCreater().listCentralNetworkQuotas(listCentralNetworkQuotasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建云连接实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建云连接实例
     * @param {CreateCloudConnectionRequestBody} createCloudConnectionRequestBody 创建云连接实例的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCloudConnection(createCloudConnectionRequest?: CreateCloudConnectionRequest): Promise<CreateCloudConnectionResponse> {
        const options = ParamCreater().createCloudConnection(createCloudConnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除云连接实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除云连接实例
     * @param {string} id 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCloudConnection(deleteCloudConnectionRequest?: DeleteCloudConnectionRequest): Promise<DeleteCloudConnectionResponse> {
        const options = ParamCreater().deleteCloudConnection(deleteCloudConnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = ['x-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询云连接实例的标签信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云连接实例的标签信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCloudConnectionTags(listCloudConnectionTagsRequest?: ListCloudConnectionTagsRequest): Promise<ListCloudConnectionTagsResponse> {
        const options = ParamCreater().listCloudConnectionTags();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询云连接列表。
     * 分页查询使用的参数为marker、limit。marker和limit一起使用时才会生效，单独使用无效。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云连接列表
     * @param {number} [limit] 每页返回的个数。 取值范围：1~2000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向后翻页。 翻页过程中，查询条件不能修改，包括过滤条件、排序条件、limit。
     * @param {Array<string>} [id] 根据ID查询，可查询多个ID。
     * @param {Array<string>} [name] 根据名称查询，可查询多个名称。
     * @param {Array<string>} [description] 根据描述查询，可查询多个描述。
     * @param {Array<string>} [enterpriseProjectId] 根据企业项目ID过滤列表。
     * @param {Array<'ACTIVE'>} [status] 根据状态过滤云连接实例列表。ACTIVE：表示状态可用。
     * @param {Array<string>} [type] 根据类型过滤云连接实例列表。
     * @param {Array<string>} [usedScene] 根据使用场景过滤云连接实例列表。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCloudConnections(listCloudConnectionsRequest?: ListCloudConnectionsRequest): Promise<ListCloudConnectionsResponse> {
        const options = ParamCreater().listCloudConnections(listCloudConnectionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过标签过滤云连接实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 通过标签过滤云连接实例
     * @param {ListCloudConnectionsByTagsRequestBody} listCloudConnectionsByTagsRequestBody 通过标签过滤云连接实例的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCloudConnectionsByTags(listCloudConnectionsByTagsRequest?: ListCloudConnectionsByTagsRequest): Promise<ListCloudConnectionsByTagsResponse> {
        const options = ParamCreater().listCloudConnectionsByTags(listCloudConnectionsByTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询云连接实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云连接实例
     * @param {string} id 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCloudConnection(showCloudConnectionRequest?: ShowCloudConnectionRequest): Promise<ShowCloudConnectionResponse> {
        const options = ParamCreater().showCloudConnection(showCloudConnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建云连接实例标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建云连接实例标签
     * @param {string} id 实例ID。
     * @param {TagCloudConnectionRequestBody} tagCloudConnectionRequestBody 创建云连接实例标签请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public tagCloudConnection(tagCloudConnectionRequest?: TagCloudConnectionRequest): Promise<TagCloudConnectionResponse> {
        const options = ParamCreater().tagCloudConnection(tagCloudConnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = ['x-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除云连接实例标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除云连接实例标签
     * @param {string} id 实例ID。
     * @param {UntagCloudConnectionRequestBody} untagCloudConnectionRequestBody 删除云连接实例标签请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public untagCloudConnection(untagCloudConnectionRequest?: UntagCloudConnectionRequest): Promise<UntagCloudConnectionResponse> {
        const options = ParamCreater().untagCloudConnection(untagCloudConnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = ['x-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新云连接实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新云连接实例
     * @param {string} id 实例ID。
     * @param {UpdateCloudConnectionRequestBody} updateCloudConnectionRequestBody 更新云连接实例的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateCloudConnection(updateCloudConnectionRequest?: UpdateCloudConnectionRequest): Promise<UpdateCloudConnectionResponse> {
        const options = ParamCreater().updateCloudConnection(updateCloudConnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询云连接的能力列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云连接的能力列表
     * @param {number} [limit] 每页返回的个数。 取值范围：1~2000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向后翻页。 翻页过程中，查询条件不能修改，包括过滤条件、排序条件、limit。
     * @param {string} [resourceType] 类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCloudConnectionCapabilities(listCloudConnectionCapabilitiesRequest?: ListCloudConnectionCapabilitiesRequest): Promise<ListCloudConnectionCapabilitiesResponse> {
        const options = ParamCreater().listCloudConnectionCapabilities(listCloudConnectionCapabilitiesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询云连接配额。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云连接配额
     * @param {number} [limit] 每页返回的个数。 取值范围：1~2000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向后翻页。 翻页过程中，查询条件不能修改，包括过滤条件、排序条件、limit。
     * @param {'cloud_connection' | 'cloud_connection_region' | 'cloud_connection_route' | 'region_network_instance'} [quotaType] 配额类型： - cloud_connection: 可加载的云连接实例数 - cloud_connection_region: 某云连接实例下可加载的Region数 - cloud_connection_route: 某云连接实例下可加载的路由数 - region_network_instance: 某云连接实例下某个Region下可加载的网络实例数
     * @param {string} [cloudConnectionId] 云连接ID。当查询cloud_connection_region、cloud_connection_route、region_network_instance三种类型的配额时需要填写此参数。
     * @param {string} [regionId] 区域ID。当查询region_network_instance类型的配额时需要填写此参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCloudConnectionQuotas(listCloudConnectionQuotasRequest?: ListCloudConnectionQuotasRequest): Promise<ListCloudConnectionQuotasResponse> {
        const options = ParamCreater().listCloudConnectionQuotas(listCloudConnectionQuotasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询云连接路由条目列表。
     * 分页查询使用的参数为marker、limit。marker和limit一起使用时才会生效，单独使用无效。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云连接路由条目列表
     * @param {number} [limit] 每页返回的个数。 取值范围：1~2000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向后翻页。 翻页过程中，查询条件不能修改，包括过滤条件、排序条件、limit。
     * @param {Array<string>} [cloudConnectionId] 根据云连接的ID过滤列表。
     * @param {Array<string>} [instanceId] 根据网络实例ID过滤云连接路由条目列表。
     * @param {string} [regionId] 根据Region ID过滤云连接路由条目列表。
     * @param {string} [id] 根据id查询。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCloudConnectionRoutes(listCloudConnectionRoutesRequest?: ListCloudConnectionRoutesRequest): Promise<ListCloudConnectionRoutesResponse> {
        const options = ParamCreater().listCloudConnectionRoutes(listCloudConnectionRoutesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询云连接路由条目列表。
     * 分页查询使用的参数为marker、limit。marker和limit一起使用时才会生效，单独使用无效。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云连接路由条目详情
     * @param {string} id 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCloudConnectionRoutes(showCloudConnectionRoutesRequest?: ShowCloudConnectionRoutesRequest): Promise<ShowCloudConnectionRoutesResponse> {
        const options = ParamCreater().showCloudConnectionRoutes(showCloudConnectionRoutesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 全域互联带宽绑定实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 全域互联带宽绑定实例
     * @param {string} id 实例ID。
     * @param {AssociateGlobalConnectionBandwidthInstanceRequestBody} associateGlobalConnectionBandwidthInstanceRequestBody 全域互联带宽绑定实例的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateGlobalConnectionBandwidthInstance(associateGlobalConnectionBandwidthInstanceRequest?: AssociateGlobalConnectionBandwidthInstanceRequest): Promise<AssociateGlobalConnectionBandwidthInstanceResponse> {
        const options = ParamCreater().associateGlobalConnectionBandwidthInstance(associateGlobalConnectionBandwidthInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建全域互联带宽。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建全域互联带宽
     * @param {CreateGlobalConnectionBandwidthRequestBody} createGlobalConnectionBandwidthRequestBody 创建全域互联带宽的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createGlobalConnectionBandwidth(createGlobalConnectionBandwidthRequest?: CreateGlobalConnectionBandwidthRequest): Promise<CreateGlobalConnectionBandwidthResponse> {
        const options = ParamCreater().createGlobalConnectionBandwidth(createGlobalConnectionBandwidthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除全域互联带宽。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除全域互联带宽
     * @param {string} id 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteGlobalConnectionBandwidth(deleteGlobalConnectionBandwidthRequest?: DeleteGlobalConnectionBandwidthRequest): Promise<DeleteGlobalConnectionBandwidthResponse> {
        const options = ParamCreater().deleteGlobalConnectionBandwidth(deleteGlobalConnectionBandwidthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 全域互联带宽解绑实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 全域互联带宽解绑实例
     * @param {string} id 实例ID。
     * @param {DisassociateGlobalConnectionBandwidthInstanceRequestBody} disassociateGlobalConnectionBandwidthInstanceRequestBody 全域互联带宽解绑实例的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disassociateGlobalConnectionBandwidthInstance(disassociateGlobalConnectionBandwidthInstanceRequest?: DisassociateGlobalConnectionBandwidthInstanceRequest): Promise<DisassociateGlobalConnectionBandwidthInstanceResponse> {
        const options = ParamCreater().disassociateGlobalConnectionBandwidthInstance(disassociateGlobalConnectionBandwidthInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询全域互联带宽租户配置信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询全域互联带宽租户配置信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGlobalConnectionBandwidthConfigs(listGlobalConnectionBandwidthConfigsRequest?: ListGlobalConnectionBandwidthConfigsRequest): Promise<ListGlobalConnectionBandwidthConfigsResponse> {
        const options = ParamCreater().listGlobalConnectionBandwidthConfigs();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询线路等级列表。
     * 分页查询使用的参数为marker、limit。marker和limit一起使用时才会生效，单独使用无效。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询线路等级列表
     * @param {number} [limit] 每页返回的个数。 取值范围：1~2000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向后翻页。 翻页过程中，查询条件不能修改，包括过滤条件、排序条件、limit。
     * @param {Array<string>} [id] 根据ID查询，可查询多个ID。
     * @param {string} [localArea] 线路规格本端接入点编码信息。
     * @param {string} [remoteArea] 线路规格远端接入点编码信息。
     * @param {Array<'Pt' | 'Ag'>} [levels] 带宽等级信息： - Pt: 铂金 - Ag: 银
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGlobalConnectionBandwidthLineLevels(listGlobalConnectionBandwidthLineLevelsRequest?: ListGlobalConnectionBandwidthLineLevelsRequest): Promise<ListGlobalConnectionBandwidthLineLevelsResponse> {
        const options = ParamCreater().listGlobalConnectionBandwidthLineLevels(listGlobalConnectionBandwidthLineLevelsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询站点列表。
     * 分页查询使用的参数为marker、limit。marker和limit一起使用时才会生效，单独使用无效。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询站点列表
     * @param {number} [limit] 每页返回的个数。 取值范围：1~2000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向后翻页。 翻页过程中，查询条件不能修改，包括过滤条件、排序条件、limit。
     * @param {Array<string>} [id] 根据ID查询，可查询多个ID。
     * @param {string} [nameEn] 站点信息自定义英文名称。
     * @param {string} [nameCn] 站点信息自定义中文名称。
     * @param {string} [siteCode] 站点编码。
     * @param {'Area' | 'SubArea' | 'Region'} [siteType] 站点类型： - Area: 大区 - SubArea: 区域 - Region: 城域
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGlobalConnectionBandwidthSites(listGlobalConnectionBandwidthSitesRequest?: ListGlobalConnectionBandwidthSitesRequest): Promise<ListGlobalConnectionBandwidthSitesResponse> {
        const options = ParamCreater().listGlobalConnectionBandwidthSites(listGlobalConnectionBandwidthSitesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询线路规格列表。租户白名单控制，默认为空。
     * 分页查询使用的参数为marker、limit。marker和limit一起使用时才会生效，单独使用无效。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询线路规格列表
     * @param {number} [limit] 每页返回的个数。 取值范围：1~2000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向后翻页。 翻页过程中，查询条件不能修改，包括过滤条件、排序条件、limit。
     * @param {Array<string>} [id] 根据ID查询，可查询多个ID。
     * @param {string} [localArea] 线路规格本端接入点编码信息。
     * @param {string} [remoteArea] 线路规格远端接入点编码信息。
     * @param {Array<'Pt' | 'Au' | 'Ag'>} [level] 带宽等级： - Pt: 铂金 - Au: 金 - Ag: 银
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGlobalConnectionBandwidthSpecCodes(listGlobalConnectionBandwidthSpecCodesRequest?: ListGlobalConnectionBandwidthSpecCodesRequest): Promise<ListGlobalConnectionBandwidthSpecCodesResponse> {
        const options = ParamCreater().listGlobalConnectionBandwidthSpecCodes(listGlobalConnectionBandwidthSpecCodesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询全域互联带宽列表。
     * 分页查询使用的参数为marker、limit。marker和limit一起使用时才会生效，单独使用无效。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询全域互联带宽列表
     * @param {number} [limit] 每页返回的个数。 取值范围：1~2000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向后翻页。 翻页过程中，查询条件不能修改，包括过滤条件、排序条件、limit。
     * @param {Array<string>} [id] 根据ID查询，可查询多个ID。
     * @param {Array<string>} [name] 根据名称查询，可查询多个名称。
     * @param {Array<string>} [enterpriseProjectId] 根据企业项目ID过滤列表。
     * @param {Array<string>} [instanceId] 根据绑定实例id过滤全域互联带宽列表。
     * @param {Array<'CC' | 'GEIP' | 'GCN' | 'GSN'>} [instanceType] 根据绑定实例类型过滤全域互联带宽列表。实例类型： - CC: 云连接 - GEIP: 全域弹性公网IP - GCN: 中心网络 - GSN: 分支网络
     * @param {Array<'CC' | 'GEIP' | 'GCN' | 'GSN'>} [bindingService] 根据支持绑定实例类型过滤全域互联带宽列表。实例类型： - CC: 云连接 - GEIP: 全域弹性公网IP - GCN: 中心网络 - GSN: 分支网络
     * @param {Array<'TrsArea' | 'Area' | 'SubArea' | 'Region'>} [type] 根据带宽类型过滤全域互联带宽列表。带宽类型： - TrsArea: 跨区带宽 - Area: 大区带宽 - SubArea: 区域带宽 - Region: 城域带宽
     * @param {Array<'NORMAL' | 'FREEZED'>} [adminState] 根据带宽状态过滤全域互联带宽列表： - NORMAL: 正常 - FREEZED: 冻结
     * @param {Array<'bwd' | '95' | '95avr'>} [chargeMode] 根据计费方式过滤全域互联带宽列表： - bwd: 按带宽计费 - \&#39;95\&#39;: 按传统型95计费 - 95avr (日95计费)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGlobalConnectionBandwidths(listGlobalConnectionBandwidthsRequest?: ListGlobalConnectionBandwidthsRequest): Promise<ListGlobalConnectionBandwidthsResponse> {
        const options = ParamCreater().listGlobalConnectionBandwidths(listGlobalConnectionBandwidthsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询符合绑定条件的全域互联带宽列表。
     * 分页查询使用的参数为marker、limit。marker和limit一起使用时才会生效，单独使用无效。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询符合绑定条件的全域互联带宽列表
     * @param {'CC' | 'GEIP' | 'GCN' | 'GSN'} bindingService 根据支持绑定实例类型过滤全域互联带宽列表。实例类型： - CC: 云连接 - GEIP: 全域弹性公网IP - GCN: 中心网络 - GSN: 分支网络
     * @param {number} [limit] 每页返回的个数。 取值范围：1~2000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向后翻页。 翻页过程中，查询条件不能修改，包括过滤条件、排序条件、limit。
     * @param {Array<string>} [enterpriseProjectId] 根据企业项目ID过滤列表。
     * @param {string} [localArea] 功能说明：本端接入点。   如果是region类型，则返回所有满足条件的城域带宽，不进行该字段的匹配过滤   如果是其他类型，则会用该字段跟全域互联带宽的local_area进行匹配过滤   附带过滤条件：会通过local_area和remote_area推算最佳全域互联带宽类型进行过滤查询   限制：local_area和remote_area同为空或者同不为空，且站点类型需一致
     * @param {string} [remoteArea] 功能说明：远端接入点。   如果是region类型，则返回所有满足条件的城域带宽，不进行该字段的匹配过滤   如果是其他类型，则会用该字段跟全域互联带宽的remote_area进行匹配过滤   附带过滤条件：会通过local_area和remote_area推算最佳全域互联带宽类型进行过滤查询   限制：local_area和remote_area同为空或者同不为空，且站点类型需一致
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSupportBindingConnectionBandwidths(listSupportBindingConnectionBandwidthsRequest?: ListSupportBindingConnectionBandwidthsRequest): Promise<ListSupportBindingConnectionBandwidthsResponse> {
        const options = ParamCreater().listSupportBindingConnectionBandwidths(listSupportBindingConnectionBandwidthsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询全域互联带宽详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询全域互联带宽详情
     * @param {string} id 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showGlobalConnectionBandwidth(showGlobalConnectionBandwidthRequest?: ShowGlobalConnectionBandwidthRequest): Promise<ShowGlobalConnectionBandwidthResponse> {
        const options = ParamCreater().showGlobalConnectionBandwidth(showGlobalConnectionBandwidthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新全域互联带宽详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新全域互联带宽详情
     * @param {string} id 实例ID。
     * @param {UpdateGlobalConnectionBandwidthRequestBody} updateGlobalConnectionBandwidthRequestBody 更新全域互联带宽详情的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateGlobalConnectionBandwidth(updateGlobalConnectionBandwidthRequest?: UpdateGlobalConnectionBandwidthRequest): Promise<UpdateGlobalConnectionBandwidthResponse> {
        const options = ParamCreater().updateGlobalConnectionBandwidth(updateGlobalConnectionBandwidthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * TMS批量添加资源标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加账户全域互联带宽资源标签
     * @param {string} resourceId 资源唯一标识符。
     * @param {CreateDeleteGcbTagsRequestBody} createDeleteGcbTagsRequestBody 批量添加账户全域互联带宽资源标签。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateGcbResourceTags(batchCreateGcbResourceTagsRequest?: BatchCreateGcbResourceTagsRequest): Promise<BatchCreateGcbResourceTagsResponse> {
        const options = ParamCreater().batchCreateGcbResourceTags(batchCreateGcbResourceTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除账户全域互联带宽资源标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除账户全域互联带宽资源标签
     * @param {string} resourceId 资源唯一标识符。
     * @param {CreateDeleteGcbTagsRequestBody} createDeleteGcbTagsRequestBody 批量删除账户全域互联带宽资源标签。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteGcbResourceTags(batchDeleteGcbResourceTagsRequest?: BatchDeleteGcbResourceTagsRequest): Promise<BatchDeleteGcbResourceTagsResponse> {
        const options = ParamCreater().batchDeleteGcbResourceTags(batchDeleteGcbResourceTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询账户全域互联带宽资源标签数量
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询账户全域互联带宽资源标签数量
     * @param {QueryResourceByTagRequestBody} queryResourceByTagRequestBody 查询账户全域互联带宽资源标签数量。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public countGcbResourceByTag(countGcbResourceByTagRequest?: CountGcbResourceByTagRequest): Promise<CountGcbResourceByTagResponse> {
        const options = ParamCreater().countGcbResourceByTag(countGcbResourceByTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加账户全域互联带宽资源标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加账户全域互联带宽资源标签
     * @param {string} resourceId 资源唯一标识符。
     * @param {CreateGcbTagRequestBody} createGcbTagRequestBody 添加账户全域互联带宽资源标签。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createGcbResourceTag(createGcbResourceTagRequest?: CreateGcbResourceTagRequest): Promise<CreateGcbResourceTagResponse> {
        const options = ParamCreater().createGcbResourceTag(createGcbResourceTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除账户全域互联带宽资源标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除账户全域互联带宽资源标签
     * @param {string} resourceId 资源唯一标识符。
     * @param {string} tagKey 删除的tag的key。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteGcbResourceTag(deleteGcbResourceTagRequest?: DeleteGcbResourceTagRequest): Promise<DeleteGcbResourceTagResponse> {
        const options = ParamCreater().deleteGcbResourceTag(deleteGcbResourceTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询账户全域互联带宽资源实例列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询账户全域互联带宽资源实例列表
     * @param {QueryResourceByTagRequestBody} queryResourceByTagRequestBody 查询账户全域互联带宽资源实例列表。
     * @param {number} [limit] 查询记录数。
     * @param {number} [offset] 索引位置，偏移量。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGcbResourceByTag(listGcbResourceByTagRequest?: ListGcbResourceByTagRequest): Promise<ListGcbResourceByTagResponse> {
        const options = ParamCreater().listGcbResourceByTag(listGcbResourceByTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询账户全域互联带宽资源的标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询账户全域互联带宽资源的标签
     * @param {string} resourceId 资源唯一标识符。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGcbResourceTags(listGcbResourceTagsRequest?: ListGcbResourceTagsRequest): Promise<ListGcbResourceTagsResponse> {
        const options = ParamCreater().listGcbResourceTags(listGcbResourceTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询账户全域互联带宽所有资源标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询账户全域互联带宽所有资源标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGcbTenantTags(listGcbTenantTagsRequest?: ListGcbTenantTagsRequest): Promise<ListGcbTenantTagsResponse> {
        const options = ParamCreater().listGcbTenantTags();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建域间带宽实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建域间带宽实例
     * @param {CreateInterRegionBandwidthRequestBody} createInterRegionBandwidthRequestBody 创建域间带宽实例的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createInterRegionBandwidth(createInterRegionBandwidthRequest?: CreateInterRegionBandwidthRequest): Promise<CreateInterRegionBandwidthResponse> {
        const options = ParamCreater().createInterRegionBandwidth(createInterRegionBandwidthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除域间带宽实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除域间带宽实例
     * @param {string} id 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteInterRegionBandwidth(deleteInterRegionBandwidthRequest?: DeleteInterRegionBandwidthRequest): Promise<DeleteInterRegionBandwidthResponse> {
        const options = ParamCreater().deleteInterRegionBandwidth(deleteInterRegionBandwidthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询域间带宽列表。
     * 分页查询使用的参数为marker、limit。marker和limit一起使用时才会生效，单独使用无效。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询域间带宽列表
     * @param {number} [limit] 每页返回的个数。 取值范围：1~2000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向后翻页。 翻页过程中，查询条件不能修改，包括过滤条件、排序条件、limit。
     * @param {Array<string>} [id] 根据ID查询，可查询多个ID。
     * @param {Array<string>} [enterpriseProjectId] 根据企业项目ID过滤列表。
     * @param {Array<string>} [cloudConnectionId] 根据云连接的ID过滤列表。
     * @param {Array<string>} [bandwidthPackageId] 根据带宽包列表过滤域间带宽实例列表。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInterRegionBandwidths(listInterRegionBandwidthsRequest?: ListInterRegionBandwidthsRequest): Promise<ListInterRegionBandwidthsResponse> {
        const options = ParamCreater().listInterRegionBandwidths(listInterRegionBandwidthsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询域间带宽实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询域间带宽实例
     * @param {string} id 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInterRegionBandwidth(showInterRegionBandwidthRequest?: ShowInterRegionBandwidthRequest): Promise<ShowInterRegionBandwidthResponse> {
        const options = ParamCreater().showInterRegionBandwidth(showInterRegionBandwidthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新域间带宽实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新域间带宽实例
     * @param {string} id 实例ID。
     * @param {UpdateInterRegionBandwidthRequestBody} updateInterRegionBandwidthRequestBody 更新域间带宽实例的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInterRegionBandwidth(updateInterRegionBandwidthRequest?: UpdateInterRegionBandwidthRequest): Promise<UpdateInterRegionBandwidthResponse> {
        const options = ParamCreater().updateInterRegionBandwidth(updateInterRegionBandwidthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建网络实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建网络实例
     * @param {CreateNetworkInstanceRequestBody} createNetworkInstanceRequestBody 创建网络实例的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createNetworkInstance(createNetworkInstanceRequest?: CreateNetworkInstanceRequest): Promise<CreateNetworkInstanceResponse> {
        const options = ParamCreater().createNetworkInstance(createNetworkInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除网络实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除网络实例
     * @param {string} id 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteNetworkInstance(deleteNetworkInstanceRequest?: DeleteNetworkInstanceRequest): Promise<DeleteNetworkInstanceResponse> {
        const options = ParamCreater().deleteNetworkInstance(deleteNetworkInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = ['x-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询网络实例列表。
     * 分页查询使用的参数为marker、limit。marker和limit一起使用时才会生效，单独使用无效。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询网络实例列表
     * @param {number} [limit] 每页返回的个数。 取值范围：1~2000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向后翻页。 翻页过程中，查询条件不能修改，包括过滤条件、排序条件、limit。
     * @param {Array<string>} [id] 根据ID查询，可查询多个ID。
     * @param {Array<string>} [name] 根据名称查询，可查询多个名称。
     * @param {Array<string>} [description] 根据描述查询，可查询多个描述。
     * @param {Array<string>} [cloudConnectionId] 根据云连接的ID过滤列表。
     * @param {Array<'ACTIVE'>} [status] 根据状态过滤网络实例列表。ACTIVE：表示状态可用。
     * @param {Array<string>} [type] 根据类型过滤网络实例列表。
     * @param {Array<string>} [instanceId] 根据网络实例ID过滤网络实例列表。
     * @param {Array<string>} [regionId] 根据网络实例所在的Region过滤网络实例列表。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNetworkInstances(listNetworkInstancesRequest?: ListNetworkInstancesRequest): Promise<ListNetworkInstancesResponse> {
        const options = ParamCreater().listNetworkInstances(listNetworkInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询网络实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询网络实例
     * @param {string} id 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showNetworkInstance(showNetworkInstanceRequest?: ShowNetworkInstanceRequest): Promise<ShowNetworkInstanceResponse> {
        const options = ParamCreater().showNetworkInstance(showNetworkInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新网络实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新网络实例
     * @param {string} id 实例ID。
     * @param {UpdateNetworkInstanceRequestBody} updateNetworkInstanceRequestBody 更新网络实例的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateNetworkInstance(updateNetworkInstanceRequest?: UpdateNetworkInstanceRequest): Promise<UpdateNetworkInstanceResponse> {
        const options = ParamCreater().updateNetworkInstance(updateNetworkInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 关联分支连接带宽。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关联分支连接带宽
     * @param {string} siteNetworkId 分支网络的ID。
     * @param {string} siteConnectionId 分支连接的ID
     * @param {AssociateSiteConnectionBandwidthRequestBody} associateSiteConnectionBandwidthRequestBody 关联分支连接带宽的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateSiteNetworkBandwidth(associateSiteNetworkBandwidthRequest?: AssociateSiteNetworkBandwidthRequest): Promise<AssociateSiteNetworkBandwidthResponse> {
        const options = ParamCreater().associateSiteNetworkBandwidth(associateSiteNetworkBandwidthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 解关联分支连接带宽。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解关联分支连接带宽
     * @param {string} siteNetworkId 分支网络的ID。
     * @param {string} siteConnectionId 分支连接的ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disassociateSiteNetworkBandwidth(disassociateSiteNetworkBandwidthRequest?: DisassociateSiteNetworkBandwidthRequest): Promise<DisassociateSiteNetworkBandwidthResponse> {
        const options = ParamCreater().disassociateSiteNetworkBandwidth(disassociateSiteNetworkBandwidthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更改分支连接带宽包。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更改分支连接带宽包
     * @param {string} siteNetworkId 分支网络的ID。
     * @param {string} siteConnectionId 分支连接的ID
     * @param {UpdateSiteConnectionBandwidthRequestBody} updateSiteConnectionBandwidthRequestBody 更改分支连接带宽包的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSiteNetworkBandwidth(updateSiteNetworkBandwidthRequest?: UpdateSiteNetworkBandwidthRequest): Promise<UpdateSiteNetworkBandwidthResponse> {
        const options = ParamCreater().updateSiteNetworkBandwidth(updateSiteNetworkBandwidthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更改分支连接带宽大小。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更改分支连接带宽大小
     * @param {string} siteNetworkId 分支网络的ID。
     * @param {string} siteConnectionId 分支连接的ID
     * @param {UpdateSiteConnectionBandwidthSizeRequestBody} updateSiteConnectionBandwidthSizeRequestBody 更改分支连接带宽大小的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSiteNetworkBandwidthSize(updateSiteNetworkBandwidthSizeRequest?: UpdateSiteNetworkBandwidthSizeRequest): Promise<UpdateSiteNetworkBandwidthSizeResponse> {
        const options = ParamCreater().updateSiteNetworkBandwidthSize(updateSiteNetworkBandwidthSizeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建P2P类型的分支网络。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建P2P类型的分支网络
     * @param {CreateP2PSiteNetworkRequestBody} createP2PSiteNetworkRequestBody 创建P2P分支网络的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createP2PSiteNetwork(createP2PSiteNetworkRequest?: CreateP2PSiteNetworkRequest): Promise<CreateP2PSiteNetworkResponse> {
        const options = ParamCreater().createP2PSiteNetwork(createP2PSiteNetworkRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除分支网络。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除分支网络
     * @param {string} siteNetworkId 分支网络的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSiteNetwork(deleteSiteNetworkRequest?: DeleteSiteNetworkRequest): Promise<DeleteSiteNetworkResponse> {
        const options = ParamCreater().deleteSiteNetwork(deleteSiteNetworkRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询分支网络列表。
     * 分页查询使用的参数为marker、limit。limit默认值为0，没有指定marker时返回第一条数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询分支网络列表
     * @param {number} [limit] 每页返回的个数。 取值范围：1~2000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向后翻页。 翻页过程中，查询条件不能修改，包括过滤条件、排序条件、limit。
     * @param {string} [sortKey] 排序字段。
     * @param {SortDir} [sortDir] 指定排序是升序还是降序（asc为升序，desc为降序）。
     * @param {Array<string>} [id] 根据ID查询，可查询多个ID。
     * @param {Array<string>} [name] 根据名称查询，可查询多个名称。
     * @param {Array<SiteNetworkStateEnum>} [state] 根据状态查询，可查询多个状态。
     * @param {Array<string>} [enterpriseProjectId] 根据企业项目ID过滤列表。
     * @param {Array<string>} [globalDcGatewayId] 根据GDW实例ID过滤列表。
     * @param {Array<string>} [globalConnectionBandwidthId] 根据带宽包ID过滤。
     * @param {Array<string>} [connectionId] 分支连接的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSiteNetworks(listSiteNetworksRequest?: ListSiteNetworksRequest): Promise<ListSiteNetworksResponse> {
        const options = ParamCreater().listSiteNetworks(listSiteNetworksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询分支网络详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询分支网络详情
     * @param {string} siteNetworkId 分支网络的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSiteNetwork(showSiteNetworkRequest?: ShowSiteNetworkRequest): Promise<ShowSiteNetworkResponse> {
        const options = ParamCreater().showSiteNetwork(showSiteNetworkRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新分支网络详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新分支网络详情
     * @param {string} siteNetworkId 分支网络的ID。
     * @param {UpdateSiteNetworkRequestBody} updateSiteNetworkRequestBody 更新分支网络的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSiteNetwork(updateSiteNetworkRequest?: UpdateSiteNetworkRequest): Promise<UpdateSiteNetworkResponse> {
        const options = ParamCreater().updateSiteNetwork(updateSiteNetworkRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询分支网络的能力列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询分支网络的能力列表
     * @param {Array<SiteNetworkSpecificationEnum>} [specification] 根据分支网络租户能力名查询，可查询多个类型。
     * @param {number} [limit] 每页返回的个数。 取值范围：1~2000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向后翻页。 翻页过程中，查询条件不能修改，包括过滤条件、排序条件、limit。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSiteNetworkCapabilities(listSiteNetworkCapabilitiesRequest?: ListSiteNetworkCapabilitiesRequest): Promise<ListSiteNetworkCapabilitiesResponse> {
        const options = ParamCreater().listSiteNetworkCapabilities(listSiteNetworkCapabilitiesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询分支网络配额。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询分支网络配额
     * @param {Array<SiteNetworkQuotaKeyEnum>} [quotaType] 根据配额类型查询，可查询多个类型。
     * @param {number} [limit] 每页返回的个数。 取值范围：1~2000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向后翻页。 翻页过程中，查询条件不能修改，包括过滤条件、排序条件、limit。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSiteNetworkQuotas(listSiteNetworkQuotasRequest?: ListSiteNetworkQuotasRequest): Promise<ListSiteNetworkQuotasResponse> {
        const options = ParamCreater().listSiteNetworkQuotas(listSiteNetworkQuotasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询大区互通类型的带宽包资源规格列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询大区互通类型的带宽包资源规格列表
     * @param {number} [offset] （索引位置，偏移量）， 从offset指定的下一条数据开始查询。 查询第一页数据时，不需要传入此参数，查询后续页码数据时，将查询前一页数据时响应体中的值带入此参数（action为count时无此参数） 从第一条数据偏移offset条数据后开始查询，如果action为filter默认为0（偏移0条数据，表示从第一条数据开始查询）,必须为数字，不能为负数。
     * @param {Array<string>} [localAreaId] 根据本端大区ID过滤带宽包资源规格列表。
     * @param {Array<string>} [remoteAreaId] 根据对端大区ID过滤带宽包资源规格列表。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAreaBandwidthPackageSpecifications(listAreaBandwidthPackageSpecificationsRequest?: ListAreaBandwidthPackageSpecificationsRequest): Promise<ListAreaBandwidthPackageSpecificationsResponse> {
        const options = ParamCreater().listAreaBandwidthPackageSpecifications(listAreaBandwidthPackageSpecificationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询当前支持的大区列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询当前支持的大区列表
     * @param {number} [limit] 每页返回的个数。 取值范围：1~2000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向后翻页。 翻页过程中，查询条件不能修改，包括过滤条件、排序条件、limit。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAreas(listAreasRequest?: ListAreasRequest): Promise<ListAreasResponse> {
        const options = ParamCreater().listAreas(listAreasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询带宽包等级列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询带宽包等级列表
     * @param {number} [limit] 每页返回的个数。 取值范围：1~2000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向后翻页。 翻页过程中，查询条件不能修改，包括过滤条件、排序条件、limit。
     * @param {string} [level] 根据带宽包等级进行查询。
     * @param {string} [name] 根据名称进行模糊查询。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBandwidthPackageLevels(listBandwidthPackageLevelsRequest?: ListBandwidthPackageLevelsRequest): Promise<ListBandwidthPackageLevelsResponse> {
        const options = ParamCreater().listBandwidthPackageLevels(listBandwidthPackageLevelsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询带宽包线路列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询带宽包线路列表
     * @param {number} [limit] 每页返回的个数。 取值范围：1~2000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向后翻页。 翻页过程中，查询条件不能修改，包括过滤条件、排序条件、limit。
     * @param {string} [level] 根据带宽包等级进行查询。
     * @param {string} [name] 根据名称进行模糊查询。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBandwidthPackageLines(listBandwidthPackageLinesRequest?: ListBandwidthPackageLinesRequest): Promise<ListBandwidthPackageLinesResponse> {
        const options = ParamCreater().listBandwidthPackageLines(listBandwidthPackageLinesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询带宽包站点列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询带宽包站点列表
     * @param {number} [limit] 每页返回的个数。 取值范围：1~2000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向后翻页。 翻页过程中，查询条件不能修改，包括过滤条件、排序条件、limit。
     * @param {string} [siteCode] 根据站点编码进行查询。
     * @param {string} [regionId] 根据区域ID进行查询。
     * @param {string} [name] 根据名称模糊查询。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBandwidthPackageSites(listBandwidthPackageSitesRequest?: ListBandwidthPackageSitesRequest): Promise<ListBandwidthPackageSitesResponse> {
        const options = ParamCreater().listBandwidthPackageSites(listBandwidthPackageSitesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询区域互通类型的带宽包规格列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询区域互通类型的带宽包规格列表
     * @param {number} [limit] 每页返回的个数。 取值范围：1~2000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向后翻页。 翻页过程中，查询条件不能修改，包括过滤条件、排序条件、limit。
     * @param {string} [localRegionId] 根据城域带宽包本端区域ID过滤租户城域带宽配置列表。
     * @param {string} [remoteRegionId] 根据城域带宽包对端区域ID过滤租户城域带宽配置列表。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRegionBandwidthPackageSpecifications(listRegionBandwidthPackageSpecificationsRequest?: ListRegionBandwidthPackageSpecificationsRequest): Promise<ListRegionBandwidthPackageSpecificationsResponse> {
        const options = ParamCreater().listRegionBandwidthPackageSpecifications(listRegionBandwidthPackageSpecificationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询当前支持的区域列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询当前支持的区域列表
     * @param {number} [limit] 每页返回的个数。 取值范围：1~2000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向后翻页。 翻页过程中，查询条件不能修改，包括过滤条件、排序条件、limit。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRegions(listRegionsRequest?: ListRegionsRequest): Promise<ListRegionsResponse> {
        const options = ParamCreater().listRegions(listRegionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 网络实例所属租户授予云连接实例所属租户加载其网络实例的权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAuthorisation(createAuthorisationRequest?: CreateAuthorisationRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/ccaas/authorisations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createAuthorisationRequest !== null && createAuthorisationRequest !== undefined) {
                if (createAuthorisationRequest instanceof CreateAuthorisationRequest) {
                    body = createAuthorisationRequest.body
                } else {
                    body = createAuthorisationRequest['body'];
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
         * 网络实例所属租户取消授予云连接实例所属租户加载其网络实例的权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAuthorisation(deleteAuthorisationRequest?: DeleteAuthorisationRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{domain_id}/ccaas/authorisations/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (deleteAuthorisationRequest !== null && deleteAuthorisationRequest !== undefined) {
                if (deleteAuthorisationRequest instanceof DeleteAuthorisationRequest) {
                    id = deleteAuthorisationRequest.id;
                } else {
                    id = deleteAuthorisationRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteAuthorisation.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 网络实例所属租户查看其已经授予其他租户的权限。
         * 分页查询使用的参数为marker、limit。marker和limit一起使用时才会生效，单独使用无效。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuthorisations(listAuthorisationsRequest?: ListAuthorisationsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/ccaas/authorisations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let id;
            
            let name;
            
            let description;
            
            let cloudConnectionId;
            
            let instanceId;

            if (listAuthorisationsRequest !== null && listAuthorisationsRequest !== undefined) {
                if (listAuthorisationsRequest instanceof ListAuthorisationsRequest) {
                    limit = listAuthorisationsRequest.limit;
                    marker = listAuthorisationsRequest.marker;
                    id = listAuthorisationsRequest.id;
                    name = listAuthorisationsRequest.name;
                    description = listAuthorisationsRequest.description;
                    cloudConnectionId = listAuthorisationsRequest.cloudConnectionId;
                    instanceId = listAuthorisationsRequest.instanceId;
                } else {
                    limit = listAuthorisationsRequest['limit'];
                    marker = listAuthorisationsRequest['marker'];
                    id = listAuthorisationsRequest['id'];
                    name = listAuthorisationsRequest['name'];
                    description = listAuthorisationsRequest['description'];
                    cloudConnectionId = listAuthorisationsRequest['cloud_connection_id'];
                    instanceId = listAuthorisationsRequest['instance_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
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
            if (cloudConnectionId !== null && cloudConnectionId !== undefined) {
                localVarQueryParameter['cloud_connection_id'] = cloudConnectionId;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 云连接实例所属租户查询其可加载其他租户的网络实例权限。
         * 分页查询使用的参数为marker、limit。marker和limit一起使用时才会生效，单独使用无效。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPermissions(listPermissionsRequest?: ListPermissionsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/ccaas/permissions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let id;
            
            let name;
            
            let description;
            
            let cloudConnectionId;
            
            let instanceId;

            if (listPermissionsRequest !== null && listPermissionsRequest !== undefined) {
                if (listPermissionsRequest instanceof ListPermissionsRequest) {
                    limit = listPermissionsRequest.limit;
                    marker = listPermissionsRequest.marker;
                    id = listPermissionsRequest.id;
                    name = listPermissionsRequest.name;
                    description = listPermissionsRequest.description;
                    cloudConnectionId = listPermissionsRequest.cloudConnectionId;
                    instanceId = listPermissionsRequest.instanceId;
                } else {
                    limit = listPermissionsRequest['limit'];
                    marker = listPermissionsRequest['marker'];
                    id = listPermissionsRequest['id'];
                    name = listPermissionsRequest['name'];
                    description = listPermissionsRequest['description'];
                    cloudConnectionId = listPermissionsRequest['cloud_connection_id'];
                    instanceId = listPermissionsRequest['instance_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
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
            if (cloudConnectionId !== null && cloudConnectionId !== undefined) {
                localVarQueryParameter['cloud_connection_id'] = cloudConnectionId;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新授权实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAuthorisation(updateAuthorisationRequest?: UpdateAuthorisationRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{domain_id}/ccaas/authorisations/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (updateAuthorisationRequest !== null && updateAuthorisationRequest !== undefined) {
                if (updateAuthorisationRequest instanceof UpdateAuthorisationRequest) {
                    id = updateAuthorisationRequest.id;
                    body = updateAuthorisationRequest.body
                } else {
                    id = updateAuthorisationRequest['id'];
                    body = updateAuthorisationRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateAuthorisation.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 将带宽包实例绑定到云连接实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateBandwidthPackage(associateBandwidthPackageRequest?: AssociateBandwidthPackageRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/ccaas/bandwidth-packages/{id}/associate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (associateBandwidthPackageRequest !== null && associateBandwidthPackageRequest !== undefined) {
                if (associateBandwidthPackageRequest instanceof AssociateBandwidthPackageRequest) {
                    id = associateBandwidthPackageRequest.id;
                    body = associateBandwidthPackageRequest.body
                } else {
                    id = associateBandwidthPackageRequest['id'];
                    body = associateBandwidthPackageRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling associateBandwidthPackage.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建带宽包实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createBandwidthPackage(createBandwidthPackageRequest?: CreateBandwidthPackageRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/ccaas/bandwidth-packages",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createBandwidthPackageRequest !== null && createBandwidthPackageRequest !== undefined) {
                if (createBandwidthPackageRequest instanceof CreateBandwidthPackageRequest) {
                    body = createBandwidthPackageRequest.body
                } else {
                    body = createBandwidthPackageRequest['body'];
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
         * 删除带宽包实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteBandwidthPackage(deleteBandwidthPackageRequest?: DeleteBandwidthPackageRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{domain_id}/ccaas/bandwidth-packages/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (deleteBandwidthPackageRequest !== null && deleteBandwidthPackageRequest !== undefined) {
                if (deleteBandwidthPackageRequest instanceof DeleteBandwidthPackageRequest) {
                    id = deleteBandwidthPackageRequest.id;
                } else {
                    id = deleteBandwidthPackageRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteBandwidthPackage.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 解除带宽包实例与云连接实例的绑定。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disassociateBandwidthPackage(disassociateBandwidthPackageRequest?: DisassociateBandwidthPackageRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/ccaas/bandwidth-packages/{id}/disassociate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (disassociateBandwidthPackageRequest !== null && disassociateBandwidthPackageRequest !== undefined) {
                if (disassociateBandwidthPackageRequest instanceof DisassociateBandwidthPackageRequest) {
                    id = disassociateBandwidthPackageRequest.id;
                    body = disassociateBandwidthPackageRequest.body
                } else {
                    id = disassociateBandwidthPackageRequest['id'];
                    body = disassociateBandwidthPackageRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling disassociateBandwidthPackage.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询带宽包的标签信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBandwidthPackageTags() {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/ccaas/bandwidth-packages/tags",
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
         * 查询带宽包列表。
         * 分页查询使用的参数为marker、limit。marker和limit一起使用时才会生效，单独使用无效。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBandwidthPackages(listBandwidthPackagesRequest?: ListBandwidthPackagesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/ccaas/bandwidth-packages",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let id;
            
            let name;
            
            let enterpriseProjectId;
            
            let cloudConnectionId;
            
            let status;
            
            let billingMode;
            
            let resourceId;

            if (listBandwidthPackagesRequest !== null && listBandwidthPackagesRequest !== undefined) {
                if (listBandwidthPackagesRequest instanceof ListBandwidthPackagesRequest) {
                    limit = listBandwidthPackagesRequest.limit;
                    marker = listBandwidthPackagesRequest.marker;
                    id = listBandwidthPackagesRequest.id;
                    name = listBandwidthPackagesRequest.name;
                    enterpriseProjectId = listBandwidthPackagesRequest.enterpriseProjectId;
                    cloudConnectionId = listBandwidthPackagesRequest.cloudConnectionId;
                    status = listBandwidthPackagesRequest.status;
                    billingMode = listBandwidthPackagesRequest.billingMode;
                    resourceId = listBandwidthPackagesRequest.resourceId;
                } else {
                    limit = listBandwidthPackagesRequest['limit'];
                    marker = listBandwidthPackagesRequest['marker'];
                    id = listBandwidthPackagesRequest['id'];
                    name = listBandwidthPackagesRequest['name'];
                    enterpriseProjectId = listBandwidthPackagesRequest['enterprise_project_id'];
                    cloudConnectionId = listBandwidthPackagesRequest['cloud_connection_id'];
                    status = listBandwidthPackagesRequest['status'];
                    billingMode = listBandwidthPackagesRequest['billing_mode'];
                    resourceId = listBandwidthPackagesRequest['resource_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (cloudConnectionId !== null && cloudConnectionId !== undefined) {
                localVarQueryParameter['cloud_connection_id'] = cloudConnectionId;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (billingMode !== null && billingMode !== undefined) {
                localVarQueryParameter['billing_mode'] = billingMode;
            }
            if (resourceId !== null && resourceId !== undefined) {
                localVarQueryParameter['resource_id'] = resourceId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过标签过滤带宽包实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBandwidthPackagesByTags(listBandwidthPackagesByTagsRequest?: ListBandwidthPackagesByTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/ccaas/bandwidth-packages/filter",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (listBandwidthPackagesByTagsRequest !== null && listBandwidthPackagesByTagsRequest !== undefined) {
                if (listBandwidthPackagesByTagsRequest instanceof ListBandwidthPackagesByTagsRequest) {
                    body = listBandwidthPackagesByTagsRequest.body
                } else {
                    body = listBandwidthPackagesByTagsRequest['body'];
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
         * 查询带宽包实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBandwidthPackage(showBandwidthPackageRequest?: ShowBandwidthPackageRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/ccaas/bandwidth-packages/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (showBandwidthPackageRequest !== null && showBandwidthPackageRequest !== undefined) {
                if (showBandwidthPackageRequest instanceof ShowBandwidthPackageRequest) {
                    id = showBandwidthPackageRequest.id;
                } else {
                    id = showBandwidthPackageRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showBandwidthPackage.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建带宽包标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        tagBandwidthPackage(tagBandwidthPackageRequest?: TagBandwidthPackageRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/ccaas/bandwidth-packages/{id}/tag",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (tagBandwidthPackageRequest !== null && tagBandwidthPackageRequest !== undefined) {
                if (tagBandwidthPackageRequest instanceof TagBandwidthPackageRequest) {
                    id = tagBandwidthPackageRequest.id;
                    body = tagBandwidthPackageRequest.body
                } else {
                    id = tagBandwidthPackageRequest['id'];
                    body = tagBandwidthPackageRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling tagBandwidthPackage.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除带宽包标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        untagBandwidthPackage(untagBandwidthPackageRequest?: UntagBandwidthPackageRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/ccaas/bandwidth-packages/{id}/untag",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (untagBandwidthPackageRequest !== null && untagBandwidthPackageRequest !== undefined) {
                if (untagBandwidthPackageRequest instanceof UntagBandwidthPackageRequest) {
                    id = untagBandwidthPackageRequest.id;
                    body = untagBandwidthPackageRequest.body
                } else {
                    id = untagBandwidthPackageRequest['id'];
                    body = untagBandwidthPackageRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling untagBandwidthPackage.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新带宽包实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateBandwidthPackage(updateBandwidthPackageRequest?: UpdateBandwidthPackageRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{domain_id}/ccaas/bandwidth-packages/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (updateBandwidthPackageRequest !== null && updateBandwidthPackageRequest !== undefined) {
                if (updateBandwidthPackageRequest instanceof UpdateBandwidthPackageRequest) {
                    id = updateBandwidthPackageRequest.id;
                    body = updateBandwidthPackageRequest.body
                } else {
                    id = updateBandwidthPackageRequest['id'];
                    body = updateBandwidthPackageRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateBandwidthPackage.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用中心网络策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        applyCentralNetworkPolicy(applyCentralNetworkPolicyRequest?: ApplyCentralNetworkPolicyRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/gcn/central-network/{central_network_id}/policies/{policy_id}/apply",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let policyId;
            
            let centralNetworkId;

            if (applyCentralNetworkPolicyRequest !== null && applyCentralNetworkPolicyRequest !== undefined) {
                if (applyCentralNetworkPolicyRequest instanceof ApplyCentralNetworkPolicyRequest) {
                    policyId = applyCentralNetworkPolicyRequest.policyId;
                    centralNetworkId = applyCentralNetworkPolicyRequest.centralNetworkId;
                } else {
                    policyId = applyCentralNetworkPolicyRequest['policy_id'];
                    centralNetworkId = applyCentralNetworkPolicyRequest['central_network_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling applyCentralNetworkPolicy.');
            }
            if (centralNetworkId === null || centralNetworkId === undefined) {
            throw new RequiredError('centralNetworkId','Required parameter centralNetworkId was null or undefined when calling applyCentralNetworkPolicy.');
            }

            options.pathParams = { 'policy_id': policyId,'central_network_id': centralNetworkId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建中心网络。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCentralNetwork(createCentralNetworkRequest?: CreateCentralNetworkRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/gcn/central-networks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createCentralNetworkRequest !== null && createCentralNetworkRequest !== undefined) {
                if (createCentralNetworkRequest instanceof CreateCentralNetworkRequest) {
                    body = createCentralNetworkRequest.body
                } else {
                    body = createCentralNetworkRequest['body'];
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
         * 创建一份只读的中心网络的策略。如果您有策略文档内容改动，需要基于此版本重新创建一个新版本的策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCentralNetworkPolicy(createCentralNetworkPolicyRequest?: CreateCentralNetworkPolicyRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/gcn/central-network/{central_network_id}/policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let centralNetworkId;

            if (createCentralNetworkPolicyRequest !== null && createCentralNetworkPolicyRequest !== undefined) {
                if (createCentralNetworkPolicyRequest instanceof CreateCentralNetworkPolicyRequest) {
                    centralNetworkId = createCentralNetworkPolicyRequest.centralNetworkId;
                    body = createCentralNetworkPolicyRequest.body
                } else {
                    centralNetworkId = createCentralNetworkPolicyRequest['central_network_id'];
                    body = createCentralNetworkPolicyRequest['body'];
                }
            }

        
            if (centralNetworkId === null || centralNetworkId === undefined) {
            throw new RequiredError('centralNetworkId','Required parameter centralNetworkId was null or undefined when calling createCentralNetworkPolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'central_network_id': centralNetworkId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除中心网络，请先清除附件后再删除中心网络。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCentralNetwork(deleteCentralNetworkRequest?: DeleteCentralNetworkRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{domain_id}/gcn/central-networks/{central_network_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let centralNetworkId;

            if (deleteCentralNetworkRequest !== null && deleteCentralNetworkRequest !== undefined) {
                if (deleteCentralNetworkRequest instanceof DeleteCentralNetworkRequest) {
                    centralNetworkId = deleteCentralNetworkRequest.centralNetworkId;
                } else {
                    centralNetworkId = deleteCentralNetworkRequest['central_network_id'];
                }
            }

        
            if (centralNetworkId === null || centralNetworkId === undefined) {
            throw new RequiredError('centralNetworkId','Required parameter centralNetworkId was null or undefined when calling deleteCentralNetwork.');
            }

            options.pathParams = { 'central_network_id': centralNetworkId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除中心网络策略版本。您无法删除正在被应用的中心策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCentralNetworkPolicy(deleteCentralNetworkPolicyRequest?: DeleteCentralNetworkPolicyRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{domain_id}/gcn/central-network/{central_network_id}/policies/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let policyId;
            
            let centralNetworkId;

            if (deleteCentralNetworkPolicyRequest !== null && deleteCentralNetworkPolicyRequest !== undefined) {
                if (deleteCentralNetworkPolicyRequest instanceof DeleteCentralNetworkPolicyRequest) {
                    policyId = deleteCentralNetworkPolicyRequest.policyId;
                    centralNetworkId = deleteCentralNetworkPolicyRequest.centralNetworkId;
                } else {
                    policyId = deleteCentralNetworkPolicyRequest['policy_id'];
                    centralNetworkId = deleteCentralNetworkPolicyRequest['central_network_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling deleteCentralNetworkPolicy.');
            }
            if (centralNetworkId === null || centralNetworkId === undefined) {
            throw new RequiredError('centralNetworkId','Required parameter centralNetworkId was null or undefined when calling deleteCentralNetworkPolicy.');
            }

            options.pathParams = { 'policy_id': policyId,'central_network_id': centralNetworkId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询所有版本的中心网络策略列表。
         * 分页查询使用的参数为marker、limit。limit默认值为0，没有指定marker时返回第一条数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCentralNetworkPolicies(listCentralNetworkPoliciesRequest?: ListCentralNetworkPoliciesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/gcn/central-network/{central_network_id}/policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let centralNetworkId;
            
            let limit;
            
            let marker;
            
            let sortKey;
            
            let sortDir;
            
            let id;
            
            let state;
            
            let version;
            
            let isApplied;

            if (listCentralNetworkPoliciesRequest !== null && listCentralNetworkPoliciesRequest !== undefined) {
                if (listCentralNetworkPoliciesRequest instanceof ListCentralNetworkPoliciesRequest) {
                    centralNetworkId = listCentralNetworkPoliciesRequest.centralNetworkId;
                    limit = listCentralNetworkPoliciesRequest.limit;
                    marker = listCentralNetworkPoliciesRequest.marker;
                    sortKey = listCentralNetworkPoliciesRequest.sortKey;
                    sortDir = listCentralNetworkPoliciesRequest.sortDir;
                    id = listCentralNetworkPoliciesRequest.id;
                    state = listCentralNetworkPoliciesRequest.state;
                    version = listCentralNetworkPoliciesRequest.version;
                    isApplied = listCentralNetworkPoliciesRequest.isApplied;
                } else {
                    centralNetworkId = listCentralNetworkPoliciesRequest['central_network_id'];
                    limit = listCentralNetworkPoliciesRequest['limit'];
                    marker = listCentralNetworkPoliciesRequest['marker'];
                    sortKey = listCentralNetworkPoliciesRequest['sort_key'];
                    sortDir = listCentralNetworkPoliciesRequest['sort_dir'];
                    id = listCentralNetworkPoliciesRequest['id'];
                    state = listCentralNetworkPoliciesRequest['state'];
                    version = listCentralNetworkPoliciesRequest['version'];
                    isApplied = listCentralNetworkPoliciesRequest['is_applied'];
                }
            }

        
            if (centralNetworkId === null || centralNetworkId === undefined) {
            throw new RequiredError('centralNetworkId','Required parameter centralNetworkId was null or undefined when calling listCentralNetworkPolicies.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (state !== null && state !== undefined) {
                localVarQueryParameter['state'] = state;
            }
            if (version !== null && version !== undefined) {
                localVarQueryParameter['version'] = version;
            }
            if (isApplied !== null && isApplied !== undefined) {
                localVarQueryParameter['is_applied'] = isApplied;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'central_network_id': centralNetworkId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询与当前应用中心网络策略的变化集。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCentralNetworkPolicyChangeSet(listCentralNetworkPolicyChangeSetRequest?: ListCentralNetworkPolicyChangeSetRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/gcn/central-network/{central_network_id}/policies/{policy_id}/change-set",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let policyId;
            
            let centralNetworkId;

            if (listCentralNetworkPolicyChangeSetRequest !== null && listCentralNetworkPolicyChangeSetRequest !== undefined) {
                if (listCentralNetworkPolicyChangeSetRequest instanceof ListCentralNetworkPolicyChangeSetRequest) {
                    policyId = listCentralNetworkPolicyChangeSetRequest.policyId;
                    centralNetworkId = listCentralNetworkPolicyChangeSetRequest.centralNetworkId;
                } else {
                    policyId = listCentralNetworkPolicyChangeSetRequest['policy_id'];
                    centralNetworkId = listCentralNetworkPolicyChangeSetRequest['central_network_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling listCentralNetworkPolicyChangeSet.');
            }
            if (centralNetworkId === null || centralNetworkId === undefined) {
            throw new RequiredError('centralNetworkId','Required parameter centralNetworkId was null or undefined when calling listCentralNetworkPolicyChangeSet.');
            }

            options.pathParams = { 'policy_id': policyId,'central_network_id': centralNetworkId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询中心网络的标签信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCentralNetworkTags() {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/gcn/central-networks/tags",
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
         * 查询中心网络列表。
         * 分页查询使用的参数为marker、limit。limit默认值为0，没有指定marker时返回第一条数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCentralNetworks(listCentralNetworksRequest?: ListCentralNetworksRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/gcn/central-networks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let sortKey;
            
            let sortDir;
            
            let id;
            
            let name;
            
            let state;
            
            let enterpriseProjectId;
            
            let enterpriseRouterId;
            
            let attachmentInstanceId;
            
            let globalConnectionBandwidthId;
            
            let connectionId;

            if (listCentralNetworksRequest !== null && listCentralNetworksRequest !== undefined) {
                if (listCentralNetworksRequest instanceof ListCentralNetworksRequest) {
                    limit = listCentralNetworksRequest.limit;
                    marker = listCentralNetworksRequest.marker;
                    sortKey = listCentralNetworksRequest.sortKey;
                    sortDir = listCentralNetworksRequest.sortDir;
                    id = listCentralNetworksRequest.id;
                    name = listCentralNetworksRequest.name;
                    state = listCentralNetworksRequest.state;
                    enterpriseProjectId = listCentralNetworksRequest.enterpriseProjectId;
                    enterpriseRouterId = listCentralNetworksRequest.enterpriseRouterId;
                    attachmentInstanceId = listCentralNetworksRequest.attachmentInstanceId;
                    globalConnectionBandwidthId = listCentralNetworksRequest.globalConnectionBandwidthId;
                    connectionId = listCentralNetworksRequest.connectionId;
                } else {
                    limit = listCentralNetworksRequest['limit'];
                    marker = listCentralNetworksRequest['marker'];
                    sortKey = listCentralNetworksRequest['sort_key'];
                    sortDir = listCentralNetworksRequest['sort_dir'];
                    id = listCentralNetworksRequest['id'];
                    name = listCentralNetworksRequest['name'];
                    state = listCentralNetworksRequest['state'];
                    enterpriseProjectId = listCentralNetworksRequest['enterprise_project_id'];
                    enterpriseRouterId = listCentralNetworksRequest['enterprise_router_id'];
                    attachmentInstanceId = listCentralNetworksRequest['attachment_instance_id'];
                    globalConnectionBandwidthId = listCentralNetworksRequest['global_connection_bandwidth_id'];
                    connectionId = listCentralNetworksRequest['connection_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (state !== null && state !== undefined) {
                localVarQueryParameter['state'] = state;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (enterpriseRouterId !== null && enterpriseRouterId !== undefined) {
                localVarQueryParameter['enterprise_router_id'] = enterpriseRouterId;
            }
            if (attachmentInstanceId !== null && attachmentInstanceId !== undefined) {
                localVarQueryParameter['attachment_instance_id'] = attachmentInstanceId;
            }
            if (globalConnectionBandwidthId !== null && globalConnectionBandwidthId !== undefined) {
                localVarQueryParameter['global_connection_bandwidth_id'] = globalConnectionBandwidthId;
            }
            if (connectionId !== null && connectionId !== undefined) {
                localVarQueryParameter['connection_id'] = connectionId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过标签过滤中心网络实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCentralNetworksByTags(listCentralNetworksByTagsRequest?: ListCentralNetworksByTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/gcn/central-networks/filter",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let limit;
            
            let marker;

            if (listCentralNetworksByTagsRequest !== null && listCentralNetworksByTagsRequest !== undefined) {
                if (listCentralNetworksByTagsRequest instanceof ListCentralNetworksByTagsRequest) {
                    body = listCentralNetworksByTagsRequest.body
                    limit = listCentralNetworksByTagsRequest.limit;
                    marker = listCentralNetworksByTagsRequest.marker;
                } else {
                    body = listCentralNetworksByTagsRequest['body'];
                    limit = listCentralNetworksByTagsRequest['limit'];
                    marker = listCentralNetworksByTagsRequest['marker'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询中心网络详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCentralNetwork(showCentralNetworkRequest?: ShowCentralNetworkRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/gcn/central-networks/{central_network_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let centralNetworkId;

            if (showCentralNetworkRequest !== null && showCentralNetworkRequest !== undefined) {
                if (showCentralNetworkRequest instanceof ShowCentralNetworkRequest) {
                    centralNetworkId = showCentralNetworkRequest.centralNetworkId;
                } else {
                    centralNetworkId = showCentralNetworkRequest['central_network_id'];
                }
            }

        
            if (centralNetworkId === null || centralNetworkId === undefined) {
            throw new RequiredError('centralNetworkId','Required parameter centralNetworkId was null or undefined when calling showCentralNetwork.');
            }

            options.pathParams = { 'central_network_id': centralNetworkId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建中心网络标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        tagCentralNetwork(tagCentralNetworkRequest?: TagCentralNetworkRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/gcn/central-networks/{central_network_id}/tag",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let centralNetworkId;

            if (tagCentralNetworkRequest !== null && tagCentralNetworkRequest !== undefined) {
                if (tagCentralNetworkRequest instanceof TagCentralNetworkRequest) {
                    centralNetworkId = tagCentralNetworkRequest.centralNetworkId;
                    body = tagCentralNetworkRequest.body
                } else {
                    centralNetworkId = tagCentralNetworkRequest['central_network_id'];
                    body = tagCentralNetworkRequest['body'];
                }
            }

        
            if (centralNetworkId === null || centralNetworkId === undefined) {
            throw new RequiredError('centralNetworkId','Required parameter centralNetworkId was null or undefined when calling tagCentralNetwork.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'central_network_id': centralNetworkId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除中心网络标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        untagCentralNetwork(untagCentralNetworkRequest?: UntagCentralNetworkRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/gcn/central-networks/{central_network_id}/untag",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let centralNetworkId;

            if (untagCentralNetworkRequest !== null && untagCentralNetworkRequest !== undefined) {
                if (untagCentralNetworkRequest instanceof UntagCentralNetworkRequest) {
                    centralNetworkId = untagCentralNetworkRequest.centralNetworkId;
                    body = untagCentralNetworkRequest.body
                } else {
                    centralNetworkId = untagCentralNetworkRequest['central_network_id'];
                    body = untagCentralNetworkRequest['body'];
                }
            }

        
            if (centralNetworkId === null || centralNetworkId === undefined) {
            throw new RequiredError('centralNetworkId','Required parameter centralNetworkId was null or undefined when calling untagCentralNetwork.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'central_network_id': centralNetworkId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新中心网络详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateCentralNetwork(updateCentralNetworkRequest?: UpdateCentralNetworkRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{domain_id}/gcn/central-networks/{central_network_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let centralNetworkId;

            if (updateCentralNetworkRequest !== null && updateCentralNetworkRequest !== undefined) {
                if (updateCentralNetworkRequest instanceof UpdateCentralNetworkRequest) {
                    centralNetworkId = updateCentralNetworkRequest.centralNetworkId;
                    body = updateCentralNetworkRequest.body
                } else {
                    centralNetworkId = updateCentralNetworkRequest['central_network_id'];
                    body = updateCentralNetworkRequest['body'];
                }
            }

        
            if (centralNetworkId === null || centralNetworkId === undefined) {
            throw new RequiredError('centralNetworkId','Required parameter centralNetworkId was null or undefined when calling updateCentralNetwork.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'central_network_id': centralNetworkId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建中心网络的路由表附件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCentralNetworkErRouteTableAttachment(createCentralNetworkErRouteTableAttachmentRequest?: CreateCentralNetworkErRouteTableAttachmentRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/gcn/central-network/{central_network_id}/er-route-table-attachments",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let centralNetworkId;

            if (createCentralNetworkErRouteTableAttachmentRequest !== null && createCentralNetworkErRouteTableAttachmentRequest !== undefined) {
                if (createCentralNetworkErRouteTableAttachmentRequest instanceof CreateCentralNetworkErRouteTableAttachmentRequest) {
                    centralNetworkId = createCentralNetworkErRouteTableAttachmentRequest.centralNetworkId;
                    body = createCentralNetworkErRouteTableAttachmentRequest.body
                } else {
                    centralNetworkId = createCentralNetworkErRouteTableAttachmentRequest['central_network_id'];
                    body = createCentralNetworkErRouteTableAttachmentRequest['body'];
                }
            }

        
            if (centralNetworkId === null || centralNetworkId === undefined) {
            throw new RequiredError('centralNetworkId','Required parameter centralNetworkId was null or undefined when calling createCentralNetworkErRouteTableAttachment.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'central_network_id': centralNetworkId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建中心网络的GDGW附件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCentralNetworkGdgwAttachment(createCentralNetworkGdgwAttachmentRequest?: CreateCentralNetworkGdgwAttachmentRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/gcn/central-network/{central_network_id}/gdgw-attachments",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let centralNetworkId;

            if (createCentralNetworkGdgwAttachmentRequest !== null && createCentralNetworkGdgwAttachmentRequest !== undefined) {
                if (createCentralNetworkGdgwAttachmentRequest instanceof CreateCentralNetworkGdgwAttachmentRequest) {
                    centralNetworkId = createCentralNetworkGdgwAttachmentRequest.centralNetworkId;
                    body = createCentralNetworkGdgwAttachmentRequest.body
                } else {
                    centralNetworkId = createCentralNetworkGdgwAttachmentRequest['central_network_id'];
                    body = createCentralNetworkGdgwAttachmentRequest['body'];
                }
            }

        
            if (centralNetworkId === null || centralNetworkId === undefined) {
            throw new RequiredError('centralNetworkId','Required parameter centralNetworkId was null or undefined when calling createCentralNetworkGdgwAttachment.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'central_network_id': centralNetworkId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除中心网络附件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCentralNetworkAttachment(deleteCentralNetworkAttachmentRequest?: DeleteCentralNetworkAttachmentRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{domain_id}/gcn/central-network/{central_network_id}/attachments/{attachment_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let centralNetworkId;
            
            let attachmentId;

            if (deleteCentralNetworkAttachmentRequest !== null && deleteCentralNetworkAttachmentRequest !== undefined) {
                if (deleteCentralNetworkAttachmentRequest instanceof DeleteCentralNetworkAttachmentRequest) {
                    centralNetworkId = deleteCentralNetworkAttachmentRequest.centralNetworkId;
                    attachmentId = deleteCentralNetworkAttachmentRequest.attachmentId;
                } else {
                    centralNetworkId = deleteCentralNetworkAttachmentRequest['central_network_id'];
                    attachmentId = deleteCentralNetworkAttachmentRequest['attachment_id'];
                }
            }

        
            if (centralNetworkId === null || centralNetworkId === undefined) {
            throw new RequiredError('centralNetworkId','Required parameter centralNetworkId was null or undefined when calling deleteCentralNetworkAttachment.');
            }
            if (attachmentId === null || attachmentId === undefined) {
            throw new RequiredError('attachmentId','Required parameter attachmentId was null or undefined when calling deleteCentralNetworkAttachment.');
            }

            options.pathParams = { 'central_network_id': centralNetworkId,'attachment_id': attachmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询中心网络附件列表，分页查询使用的参数为marker、limit。limit默认值为0，没有指定marker时返回第一条数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCentralNetworkAttachments(listCentralNetworkAttachmentsRequest?: ListCentralNetworkAttachmentsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/gcn/central-network/{central_network_id}/attachments",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let centralNetworkId;
            
            let limit;
            
            let marker;
            
            let sortKey;
            
            let sortDir;
            
            let id;
            
            let name;
            
            let attachmentInstanceType;
            
            let state;
            
            let attachmentInstanceId;

            if (listCentralNetworkAttachmentsRequest !== null && listCentralNetworkAttachmentsRequest !== undefined) {
                if (listCentralNetworkAttachmentsRequest instanceof ListCentralNetworkAttachmentsRequest) {
                    centralNetworkId = listCentralNetworkAttachmentsRequest.centralNetworkId;
                    limit = listCentralNetworkAttachmentsRequest.limit;
                    marker = listCentralNetworkAttachmentsRequest.marker;
                    sortKey = listCentralNetworkAttachmentsRequest.sortKey;
                    sortDir = listCentralNetworkAttachmentsRequest.sortDir;
                    id = listCentralNetworkAttachmentsRequest.id;
                    name = listCentralNetworkAttachmentsRequest.name;
                    attachmentInstanceType = listCentralNetworkAttachmentsRequest.attachmentInstanceType;
                    state = listCentralNetworkAttachmentsRequest.state;
                    attachmentInstanceId = listCentralNetworkAttachmentsRequest.attachmentInstanceId;
                } else {
                    centralNetworkId = listCentralNetworkAttachmentsRequest['central_network_id'];
                    limit = listCentralNetworkAttachmentsRequest['limit'];
                    marker = listCentralNetworkAttachmentsRequest['marker'];
                    sortKey = listCentralNetworkAttachmentsRequest['sort_key'];
                    sortDir = listCentralNetworkAttachmentsRequest['sort_dir'];
                    id = listCentralNetworkAttachmentsRequest['id'];
                    name = listCentralNetworkAttachmentsRequest['name'];
                    attachmentInstanceType = listCentralNetworkAttachmentsRequest['attachment_instance_type'];
                    state = listCentralNetworkAttachmentsRequest['state'];
                    attachmentInstanceId = listCentralNetworkAttachmentsRequest['attachment_instance_id'];
                }
            }

        
            if (centralNetworkId === null || centralNetworkId === undefined) {
            throw new RequiredError('centralNetworkId','Required parameter centralNetworkId was null or undefined when calling listCentralNetworkAttachments.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (attachmentInstanceType !== null && attachmentInstanceType !== undefined) {
                localVarQueryParameter['attachment_instance_type'] = attachmentInstanceType;
            }
            if (state !== null && state !== undefined) {
                localVarQueryParameter['state'] = state;
            }
            if (attachmentInstanceId !== null && attachmentInstanceId !== undefined) {
                localVarQueryParameter['attachment_instance_id'] = attachmentInstanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'central_network_id': centralNetworkId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询中心网络ER路由表附件列表。
         * 分页查询使用的参数为marker、limit。limit默认值为0，没有指定marker时返回第一条数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCentralNetworkErRouteTableAttachments(listCentralNetworkErRouteTableAttachmentsRequest?: ListCentralNetworkErRouteTableAttachmentsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/gcn/central-network/{central_network_id}/er-route-table-attachments",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let centralNetworkId;
            
            let limit;
            
            let marker;
            
            let sortKey;
            
            let sortDir;
            
            let id;
            
            let name;
            
            let state;
            
            let attachmentInstanceId;

            if (listCentralNetworkErRouteTableAttachmentsRequest !== null && listCentralNetworkErRouteTableAttachmentsRequest !== undefined) {
                if (listCentralNetworkErRouteTableAttachmentsRequest instanceof ListCentralNetworkErRouteTableAttachmentsRequest) {
                    centralNetworkId = listCentralNetworkErRouteTableAttachmentsRequest.centralNetworkId;
                    limit = listCentralNetworkErRouteTableAttachmentsRequest.limit;
                    marker = listCentralNetworkErRouteTableAttachmentsRequest.marker;
                    sortKey = listCentralNetworkErRouteTableAttachmentsRequest.sortKey;
                    sortDir = listCentralNetworkErRouteTableAttachmentsRequest.sortDir;
                    id = listCentralNetworkErRouteTableAttachmentsRequest.id;
                    name = listCentralNetworkErRouteTableAttachmentsRequest.name;
                    state = listCentralNetworkErRouteTableAttachmentsRequest.state;
                    attachmentInstanceId = listCentralNetworkErRouteTableAttachmentsRequest.attachmentInstanceId;
                } else {
                    centralNetworkId = listCentralNetworkErRouteTableAttachmentsRequest['central_network_id'];
                    limit = listCentralNetworkErRouteTableAttachmentsRequest['limit'];
                    marker = listCentralNetworkErRouteTableAttachmentsRequest['marker'];
                    sortKey = listCentralNetworkErRouteTableAttachmentsRequest['sort_key'];
                    sortDir = listCentralNetworkErRouteTableAttachmentsRequest['sort_dir'];
                    id = listCentralNetworkErRouteTableAttachmentsRequest['id'];
                    name = listCentralNetworkErRouteTableAttachmentsRequest['name'];
                    state = listCentralNetworkErRouteTableAttachmentsRequest['state'];
                    attachmentInstanceId = listCentralNetworkErRouteTableAttachmentsRequest['attachment_instance_id'];
                }
            }

        
            if (centralNetworkId === null || centralNetworkId === undefined) {
            throw new RequiredError('centralNetworkId','Required parameter centralNetworkId was null or undefined when calling listCentralNetworkErRouteTableAttachments.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (state !== null && state !== undefined) {
                localVarQueryParameter['state'] = state;
            }
            if (attachmentInstanceId !== null && attachmentInstanceId !== undefined) {
                localVarQueryParameter['attachment_instance_id'] = attachmentInstanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'central_network_id': centralNetworkId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询中心网络GDGW附件列表。
         * 分页查询使用的参数为marker、limit。limit默认值为0，没有指定marker时返回第一条数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCentralNetworkGdgwAttachments(listCentralNetworkGdgwAttachmentsRequest?: ListCentralNetworkGdgwAttachmentsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/gcn/central-network/{central_network_id}/gdgw-attachments",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let centralNetworkId;
            
            let limit;
            
            let marker;
            
            let sortKey;
            
            let sortDir;
            
            let id;
            
            let name;
            
            let state;
            
            let globalDcGatewayId;

            if (listCentralNetworkGdgwAttachmentsRequest !== null && listCentralNetworkGdgwAttachmentsRequest !== undefined) {
                if (listCentralNetworkGdgwAttachmentsRequest instanceof ListCentralNetworkGdgwAttachmentsRequest) {
                    centralNetworkId = listCentralNetworkGdgwAttachmentsRequest.centralNetworkId;
                    limit = listCentralNetworkGdgwAttachmentsRequest.limit;
                    marker = listCentralNetworkGdgwAttachmentsRequest.marker;
                    sortKey = listCentralNetworkGdgwAttachmentsRequest.sortKey;
                    sortDir = listCentralNetworkGdgwAttachmentsRequest.sortDir;
                    id = listCentralNetworkGdgwAttachmentsRequest.id;
                    name = listCentralNetworkGdgwAttachmentsRequest.name;
                    state = listCentralNetworkGdgwAttachmentsRequest.state;
                    globalDcGatewayId = listCentralNetworkGdgwAttachmentsRequest.globalDcGatewayId;
                } else {
                    centralNetworkId = listCentralNetworkGdgwAttachmentsRequest['central_network_id'];
                    limit = listCentralNetworkGdgwAttachmentsRequest['limit'];
                    marker = listCentralNetworkGdgwAttachmentsRequest['marker'];
                    sortKey = listCentralNetworkGdgwAttachmentsRequest['sort_key'];
                    sortDir = listCentralNetworkGdgwAttachmentsRequest['sort_dir'];
                    id = listCentralNetworkGdgwAttachmentsRequest['id'];
                    name = listCentralNetworkGdgwAttachmentsRequest['name'];
                    state = listCentralNetworkGdgwAttachmentsRequest['state'];
                    globalDcGatewayId = listCentralNetworkGdgwAttachmentsRequest['global_dc_gateway_id'];
                }
            }

        
            if (centralNetworkId === null || centralNetworkId === undefined) {
            throw new RequiredError('centralNetworkId','Required parameter centralNetworkId was null or undefined when calling listCentralNetworkGdgwAttachments.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (state !== null && state !== undefined) {
                localVarQueryParameter['state'] = state;
            }
            if (globalDcGatewayId !== null && globalDcGatewayId !== undefined) {
                localVarQueryParameter['global_dc_gateway_id'] = globalDcGatewayId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'central_network_id': centralNetworkId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询中心网络ER路由表附件详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCentralNetworkErRouteTableAttachment(showCentralNetworkErRouteTableAttachmentRequest?: ShowCentralNetworkErRouteTableAttachmentRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/gcn/central-network/{central_network_id}/er-route-table-attachments/{er_route_table_attachment_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let centralNetworkId;
            
            let erRouteTableAttachmentId;

            if (showCentralNetworkErRouteTableAttachmentRequest !== null && showCentralNetworkErRouteTableAttachmentRequest !== undefined) {
                if (showCentralNetworkErRouteTableAttachmentRequest instanceof ShowCentralNetworkErRouteTableAttachmentRequest) {
                    centralNetworkId = showCentralNetworkErRouteTableAttachmentRequest.centralNetworkId;
                    erRouteTableAttachmentId = showCentralNetworkErRouteTableAttachmentRequest.erRouteTableAttachmentId;
                } else {
                    centralNetworkId = showCentralNetworkErRouteTableAttachmentRequest['central_network_id'];
                    erRouteTableAttachmentId = showCentralNetworkErRouteTableAttachmentRequest['er_route_table_attachment_id'];
                }
            }

        
            if (centralNetworkId === null || centralNetworkId === undefined) {
            throw new RequiredError('centralNetworkId','Required parameter centralNetworkId was null or undefined when calling showCentralNetworkErRouteTableAttachment.');
            }
            if (erRouteTableAttachmentId === null || erRouteTableAttachmentId === undefined) {
            throw new RequiredError('erRouteTableAttachmentId','Required parameter erRouteTableAttachmentId was null or undefined when calling showCentralNetworkErRouteTableAttachment.');
            }

            options.pathParams = { 'central_network_id': centralNetworkId,'er_route_table_attachment_id': erRouteTableAttachmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询中心网络GDGW附件详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCentralNetworkGdgwAttachment(showCentralNetworkGdgwAttachmentRequest?: ShowCentralNetworkGdgwAttachmentRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/gcn/central-network/{central_network_id}/gdgw-attachments/{gdgw_attachment_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let centralNetworkId;
            
            let gdgwAttachmentId;

            if (showCentralNetworkGdgwAttachmentRequest !== null && showCentralNetworkGdgwAttachmentRequest !== undefined) {
                if (showCentralNetworkGdgwAttachmentRequest instanceof ShowCentralNetworkGdgwAttachmentRequest) {
                    centralNetworkId = showCentralNetworkGdgwAttachmentRequest.centralNetworkId;
                    gdgwAttachmentId = showCentralNetworkGdgwAttachmentRequest.gdgwAttachmentId;
                } else {
                    centralNetworkId = showCentralNetworkGdgwAttachmentRequest['central_network_id'];
                    gdgwAttachmentId = showCentralNetworkGdgwAttachmentRequest['gdgw_attachment_id'];
                }
            }

        
            if (centralNetworkId === null || centralNetworkId === undefined) {
            throw new RequiredError('centralNetworkId','Required parameter centralNetworkId was null or undefined when calling showCentralNetworkGdgwAttachment.');
            }
            if (gdgwAttachmentId === null || gdgwAttachmentId === undefined) {
            throw new RequiredError('gdgwAttachmentId','Required parameter gdgwAttachmentId was null or undefined when calling showCentralNetworkGdgwAttachment.');
            }

            options.pathParams = { 'central_network_id': centralNetworkId,'gdgw_attachment_id': gdgwAttachmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新中心网络ER路由表附件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateCentralNetworkErRouteTableAttachment(updateCentralNetworkErRouteTableAttachmentRequest?: UpdateCentralNetworkErRouteTableAttachmentRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{domain_id}/gcn/central-network/{central_network_id}/er-route-table-attachments/{er_route_table_attachment_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let centralNetworkId;
            
            let erRouteTableAttachmentId;

            if (updateCentralNetworkErRouteTableAttachmentRequest !== null && updateCentralNetworkErRouteTableAttachmentRequest !== undefined) {
                if (updateCentralNetworkErRouteTableAttachmentRequest instanceof UpdateCentralNetworkErRouteTableAttachmentRequest) {
                    centralNetworkId = updateCentralNetworkErRouteTableAttachmentRequest.centralNetworkId;
                    erRouteTableAttachmentId = updateCentralNetworkErRouteTableAttachmentRequest.erRouteTableAttachmentId;
                    body = updateCentralNetworkErRouteTableAttachmentRequest.body
                } else {
                    centralNetworkId = updateCentralNetworkErRouteTableAttachmentRequest['central_network_id'];
                    erRouteTableAttachmentId = updateCentralNetworkErRouteTableAttachmentRequest['er_route_table_attachment_id'];
                    body = updateCentralNetworkErRouteTableAttachmentRequest['body'];
                }
            }

        
            if (centralNetworkId === null || centralNetworkId === undefined) {
            throw new RequiredError('centralNetworkId','Required parameter centralNetworkId was null or undefined when calling updateCentralNetworkErRouteTableAttachment.');
            }
            if (erRouteTableAttachmentId === null || erRouteTableAttachmentId === undefined) {
            throw new RequiredError('erRouteTableAttachmentId','Required parameter erRouteTableAttachmentId was null or undefined when calling updateCentralNetworkErRouteTableAttachment.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'central_network_id': centralNetworkId,'er_route_table_attachment_id': erRouteTableAttachmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新中心网络GDGW附件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateCentralNetworkGdgwAttachment(updateCentralNetworkGdgwAttachmentRequest?: UpdateCentralNetworkGdgwAttachmentRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{domain_id}/gcn/central-network/{central_network_id}/gdgw-attachments/{gdgw_attachment_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let centralNetworkId;
            
            let gdgwAttachmentId;

            if (updateCentralNetworkGdgwAttachmentRequest !== null && updateCentralNetworkGdgwAttachmentRequest !== undefined) {
                if (updateCentralNetworkGdgwAttachmentRequest instanceof UpdateCentralNetworkGdgwAttachmentRequest) {
                    centralNetworkId = updateCentralNetworkGdgwAttachmentRequest.centralNetworkId;
                    gdgwAttachmentId = updateCentralNetworkGdgwAttachmentRequest.gdgwAttachmentId;
                    body = updateCentralNetworkGdgwAttachmentRequest.body
                } else {
                    centralNetworkId = updateCentralNetworkGdgwAttachmentRequest['central_network_id'];
                    gdgwAttachmentId = updateCentralNetworkGdgwAttachmentRequest['gdgw_attachment_id'];
                    body = updateCentralNetworkGdgwAttachmentRequest['body'];
                }
            }

        
            if (centralNetworkId === null || centralNetworkId === undefined) {
            throw new RequiredError('centralNetworkId','Required parameter centralNetworkId was null or undefined when calling updateCentralNetworkGdgwAttachment.');
            }
            if (gdgwAttachmentId === null || gdgwAttachmentId === undefined) {
            throw new RequiredError('gdgwAttachmentId','Required parameter gdgwAttachmentId was null or undefined when calling updateCentralNetworkGdgwAttachment.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'central_network_id': centralNetworkId,'gdgw_attachment_id': gdgwAttachmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询中心网络能力列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCentralNetworkCapabilities(listCentralNetworkCapabilitiesRequest?: ListCentralNetworkCapabilitiesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/gcn/capabilities",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let capability;
            
            let limit;
            
            let marker;

            if (listCentralNetworkCapabilitiesRequest !== null && listCentralNetworkCapabilitiesRequest !== undefined) {
                if (listCentralNetworkCapabilitiesRequest instanceof ListCentralNetworkCapabilitiesRequest) {
                    capability = listCentralNetworkCapabilitiesRequest.capability;
                    limit = listCentralNetworkCapabilitiesRequest.limit;
                    marker = listCentralNetworkCapabilitiesRequest.marker;
                } else {
                    capability = listCentralNetworkCapabilitiesRequest['capability'];
                    limit = listCentralNetworkCapabilitiesRequest['limit'];
                    marker = listCentralNetworkCapabilitiesRequest['marker'];
                }
            }

        
            if (capability !== null && capability !== undefined) {
                localVarQueryParameter['capability'] = capability;
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
         * 查询中心网络连接列表接口。
         * 分页查询使用的参数为marker、limit。limit默认值为0，没有指定marker时返回第一条数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCentralNetworkConnections(listCentralNetworkConnectionsRequest?: ListCentralNetworkConnectionsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/gcn/central-network/{central_network_id}/connections",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let centralNetworkId;
            
            let limit;
            
            let marker;
            
            let sortKey;
            
            let sortDir;
            
            let id;
            
            let name;
            
            let state;
            
            let globalConnectionBandwidthId;
            
            let bandwidthType;
            
            let connectionType;
            
            let isCrossRegion;

            if (listCentralNetworkConnectionsRequest !== null && listCentralNetworkConnectionsRequest !== undefined) {
                if (listCentralNetworkConnectionsRequest instanceof ListCentralNetworkConnectionsRequest) {
                    centralNetworkId = listCentralNetworkConnectionsRequest.centralNetworkId;
                    limit = listCentralNetworkConnectionsRequest.limit;
                    marker = listCentralNetworkConnectionsRequest.marker;
                    sortKey = listCentralNetworkConnectionsRequest.sortKey;
                    sortDir = listCentralNetworkConnectionsRequest.sortDir;
                    id = listCentralNetworkConnectionsRequest.id;
                    name = listCentralNetworkConnectionsRequest.name;
                    state = listCentralNetworkConnectionsRequest.state;
                    globalConnectionBandwidthId = listCentralNetworkConnectionsRequest.globalConnectionBandwidthId;
                    bandwidthType = listCentralNetworkConnectionsRequest.bandwidthType;
                    connectionType = listCentralNetworkConnectionsRequest.connectionType;
                    isCrossRegion = listCentralNetworkConnectionsRequest.isCrossRegion;
                } else {
                    centralNetworkId = listCentralNetworkConnectionsRequest['central_network_id'];
                    limit = listCentralNetworkConnectionsRequest['limit'];
                    marker = listCentralNetworkConnectionsRequest['marker'];
                    sortKey = listCentralNetworkConnectionsRequest['sort_key'];
                    sortDir = listCentralNetworkConnectionsRequest['sort_dir'];
                    id = listCentralNetworkConnectionsRequest['id'];
                    name = listCentralNetworkConnectionsRequest['name'];
                    state = listCentralNetworkConnectionsRequest['state'];
                    globalConnectionBandwidthId = listCentralNetworkConnectionsRequest['global_connection_bandwidth_id'];
                    bandwidthType = listCentralNetworkConnectionsRequest['bandwidth_type'];
                    connectionType = listCentralNetworkConnectionsRequest['connection_type'];
                    isCrossRegion = listCentralNetworkConnectionsRequest['is_cross_region'];
                }
            }

        
            if (centralNetworkId === null || centralNetworkId === undefined) {
            throw new RequiredError('centralNetworkId','Required parameter centralNetworkId was null or undefined when calling listCentralNetworkConnections.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (state !== null && state !== undefined) {
                localVarQueryParameter['state'] = state;
            }
            if (globalConnectionBandwidthId !== null && globalConnectionBandwidthId !== undefined) {
                localVarQueryParameter['global_connection_bandwidth_id'] = globalConnectionBandwidthId;
            }
            if (bandwidthType !== null && bandwidthType !== undefined) {
                localVarQueryParameter['bandwidth_type'] = bandwidthType;
            }
            if (connectionType !== null && connectionType !== undefined) {
                localVarQueryParameter['connection_type'] = connectionType;
            }
            if (isCrossRegion !== null && isCrossRegion !== undefined) {
                localVarQueryParameter['is_cross_region'] = isCrossRegion;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'central_network_id': centralNetworkId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新中心网络连接接口（仅支持更新带宽）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateCentralNetworkConnection(updateCentralNetworkConnectionRequest?: UpdateCentralNetworkConnectionRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{domain_id}/gcn/central-network/{central_network_id}/connections/{connection_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let centralNetworkId;
            
            let connectionId;

            if (updateCentralNetworkConnectionRequest !== null && updateCentralNetworkConnectionRequest !== undefined) {
                if (updateCentralNetworkConnectionRequest instanceof UpdateCentralNetworkConnectionRequest) {
                    centralNetworkId = updateCentralNetworkConnectionRequest.centralNetworkId;
                    connectionId = updateCentralNetworkConnectionRequest.connectionId;
                    body = updateCentralNetworkConnectionRequest.body
                } else {
                    centralNetworkId = updateCentralNetworkConnectionRequest['central_network_id'];
                    connectionId = updateCentralNetworkConnectionRequest['connection_id'];
                    body = updateCentralNetworkConnectionRequest['body'];
                }
            }

        
            if (centralNetworkId === null || centralNetworkId === undefined) {
            throw new RequiredError('centralNetworkId','Required parameter centralNetworkId was null or undefined when calling updateCentralNetworkConnection.');
            }
            if (connectionId === null || connectionId === undefined) {
            throw new RequiredError('connectionId','Required parameter connectionId was null or undefined when calling updateCentralNetworkConnection.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'central_network_id': centralNetworkId,'connection_id': connectionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询中心网络配额。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCentralNetworkQuotas(listCentralNetworkQuotasRequest?: ListCentralNetworkQuotasRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/gcn/quotas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let quotaType;
            
            let limit;
            
            let marker;

            if (listCentralNetworkQuotasRequest !== null && listCentralNetworkQuotasRequest !== undefined) {
                if (listCentralNetworkQuotasRequest instanceof ListCentralNetworkQuotasRequest) {
                    quotaType = listCentralNetworkQuotasRequest.quotaType;
                    limit = listCentralNetworkQuotasRequest.limit;
                    marker = listCentralNetworkQuotasRequest.marker;
                } else {
                    quotaType = listCentralNetworkQuotasRequest['quota_type'];
                    limit = listCentralNetworkQuotasRequest['limit'];
                    marker = listCentralNetworkQuotasRequest['marker'];
                }
            }

        
            if (quotaType !== null && quotaType !== undefined) {
                localVarQueryParameter['quota_type'] = quotaType;
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
         * 创建云连接实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCloudConnection(createCloudConnectionRequest?: CreateCloudConnectionRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/ccaas/cloud-connections",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createCloudConnectionRequest !== null && createCloudConnectionRequest !== undefined) {
                if (createCloudConnectionRequest instanceof CreateCloudConnectionRequest) {
                    body = createCloudConnectionRequest.body
                } else {
                    body = createCloudConnectionRequest['body'];
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
         * 删除云连接实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCloudConnection(deleteCloudConnectionRequest?: DeleteCloudConnectionRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{domain_id}/ccaas/cloud-connections/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (deleteCloudConnectionRequest !== null && deleteCloudConnectionRequest !== undefined) {
                if (deleteCloudConnectionRequest instanceof DeleteCloudConnectionRequest) {
                    id = deleteCloudConnectionRequest.id;
                } else {
                    id = deleteCloudConnectionRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteCloudConnection.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询云连接实例的标签信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCloudConnectionTags() {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/ccaas/cloud-connections/tags",
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
         * 查询云连接列表。
         * 分页查询使用的参数为marker、limit。marker和limit一起使用时才会生效，单独使用无效。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCloudConnections(listCloudConnectionsRequest?: ListCloudConnectionsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/ccaas/cloud-connections",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let id;
            
            let name;
            
            let description;
            
            let enterpriseProjectId;
            
            let status;
            
            let type;
            
            let usedScene;

            if (listCloudConnectionsRequest !== null && listCloudConnectionsRequest !== undefined) {
                if (listCloudConnectionsRequest instanceof ListCloudConnectionsRequest) {
                    limit = listCloudConnectionsRequest.limit;
                    marker = listCloudConnectionsRequest.marker;
                    id = listCloudConnectionsRequest.id;
                    name = listCloudConnectionsRequest.name;
                    description = listCloudConnectionsRequest.description;
                    enterpriseProjectId = listCloudConnectionsRequest.enterpriseProjectId;
                    status = listCloudConnectionsRequest.status;
                    type = listCloudConnectionsRequest.type;
                    usedScene = listCloudConnectionsRequest.usedScene;
                } else {
                    limit = listCloudConnectionsRequest['limit'];
                    marker = listCloudConnectionsRequest['marker'];
                    id = listCloudConnectionsRequest['id'];
                    name = listCloudConnectionsRequest['name'];
                    description = listCloudConnectionsRequest['description'];
                    enterpriseProjectId = listCloudConnectionsRequest['enterprise_project_id'];
                    status = listCloudConnectionsRequest['status'];
                    type = listCloudConnectionsRequest['type'];
                    usedScene = listCloudConnectionsRequest['used_scene'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
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
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (usedScene !== null && usedScene !== undefined) {
                localVarQueryParameter['used_scene'] = usedScene;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过标签过滤云连接实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCloudConnectionsByTags(listCloudConnectionsByTagsRequest?: ListCloudConnectionsByTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/ccaas/cloud-connections/filter",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (listCloudConnectionsByTagsRequest !== null && listCloudConnectionsByTagsRequest !== undefined) {
                if (listCloudConnectionsByTagsRequest instanceof ListCloudConnectionsByTagsRequest) {
                    body = listCloudConnectionsByTagsRequest.body
                } else {
                    body = listCloudConnectionsByTagsRequest['body'];
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
         * 查询云连接实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCloudConnection(showCloudConnectionRequest?: ShowCloudConnectionRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/ccaas/cloud-connections/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (showCloudConnectionRequest !== null && showCloudConnectionRequest !== undefined) {
                if (showCloudConnectionRequest instanceof ShowCloudConnectionRequest) {
                    id = showCloudConnectionRequest.id;
                } else {
                    id = showCloudConnectionRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showCloudConnection.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建云连接实例标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        tagCloudConnection(tagCloudConnectionRequest?: TagCloudConnectionRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/ccaas/cloud-connections/{id}/tag",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (tagCloudConnectionRequest !== null && tagCloudConnectionRequest !== undefined) {
                if (tagCloudConnectionRequest instanceof TagCloudConnectionRequest) {
                    id = tagCloudConnectionRequest.id;
                    body = tagCloudConnectionRequest.body
                } else {
                    id = tagCloudConnectionRequest['id'];
                    body = tagCloudConnectionRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling tagCloudConnection.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除云连接实例标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        untagCloudConnection(untagCloudConnectionRequest?: UntagCloudConnectionRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/ccaas/cloud-connections/{id}/untag",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (untagCloudConnectionRequest !== null && untagCloudConnectionRequest !== undefined) {
                if (untagCloudConnectionRequest instanceof UntagCloudConnectionRequest) {
                    id = untagCloudConnectionRequest.id;
                    body = untagCloudConnectionRequest.body
                } else {
                    id = untagCloudConnectionRequest['id'];
                    body = untagCloudConnectionRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling untagCloudConnection.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新云连接实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateCloudConnection(updateCloudConnectionRequest?: UpdateCloudConnectionRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{domain_id}/ccaas/cloud-connections/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (updateCloudConnectionRequest !== null && updateCloudConnectionRequest !== undefined) {
                if (updateCloudConnectionRequest instanceof UpdateCloudConnectionRequest) {
                    id = updateCloudConnectionRequest.id;
                    body = updateCloudConnectionRequest.body
                } else {
                    id = updateCloudConnectionRequest['id'];
                    body = updateCloudConnectionRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateCloudConnection.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询云连接的能力列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCloudConnectionCapabilities(listCloudConnectionCapabilitiesRequest?: ListCloudConnectionCapabilitiesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/ccaas/capabilities",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let resourceType;

            if (listCloudConnectionCapabilitiesRequest !== null && listCloudConnectionCapabilitiesRequest !== undefined) {
                if (listCloudConnectionCapabilitiesRequest instanceof ListCloudConnectionCapabilitiesRequest) {
                    limit = listCloudConnectionCapabilitiesRequest.limit;
                    marker = listCloudConnectionCapabilitiesRequest.marker;
                    resourceType = listCloudConnectionCapabilitiesRequest.resourceType;
                } else {
                    limit = listCloudConnectionCapabilitiesRequest['limit'];
                    marker = listCloudConnectionCapabilitiesRequest['marker'];
                    resourceType = listCloudConnectionCapabilitiesRequest['resource_type'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (resourceType !== null && resourceType !== undefined) {
                localVarQueryParameter['resource_type'] = resourceType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询云连接配额。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCloudConnectionQuotas(listCloudConnectionQuotasRequest?: ListCloudConnectionQuotasRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/ccaas/quotas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let quotaType;
            
            let cloudConnectionId;
            
            let regionId;

            if (listCloudConnectionQuotasRequest !== null && listCloudConnectionQuotasRequest !== undefined) {
                if (listCloudConnectionQuotasRequest instanceof ListCloudConnectionQuotasRequest) {
                    limit = listCloudConnectionQuotasRequest.limit;
                    marker = listCloudConnectionQuotasRequest.marker;
                    quotaType = listCloudConnectionQuotasRequest.quotaType;
                    cloudConnectionId = listCloudConnectionQuotasRequest.cloudConnectionId;
                    regionId = listCloudConnectionQuotasRequest.regionId;
                } else {
                    limit = listCloudConnectionQuotasRequest['limit'];
                    marker = listCloudConnectionQuotasRequest['marker'];
                    quotaType = listCloudConnectionQuotasRequest['quota_type'];
                    cloudConnectionId = listCloudConnectionQuotasRequest['cloud_connection_id'];
                    regionId = listCloudConnectionQuotasRequest['region_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (quotaType !== null && quotaType !== undefined) {
                localVarQueryParameter['quota_type'] = quotaType;
            }
            if (cloudConnectionId !== null && cloudConnectionId !== undefined) {
                localVarQueryParameter['cloud_connection_id'] = cloudConnectionId;
            }
            if (regionId !== null && regionId !== undefined) {
                localVarQueryParameter['region_id'] = regionId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询云连接路由条目列表。
         * 分页查询使用的参数为marker、limit。marker和limit一起使用时才会生效，单独使用无效。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCloudConnectionRoutes(listCloudConnectionRoutesRequest?: ListCloudConnectionRoutesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/ccaas/cloud-connection-routes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let cloudConnectionId;
            
            let instanceId;
            
            let regionId;
            
            let id;

            if (listCloudConnectionRoutesRequest !== null && listCloudConnectionRoutesRequest !== undefined) {
                if (listCloudConnectionRoutesRequest instanceof ListCloudConnectionRoutesRequest) {
                    limit = listCloudConnectionRoutesRequest.limit;
                    marker = listCloudConnectionRoutesRequest.marker;
                    cloudConnectionId = listCloudConnectionRoutesRequest.cloudConnectionId;
                    instanceId = listCloudConnectionRoutesRequest.instanceId;
                    regionId = listCloudConnectionRoutesRequest.regionId;
                    id = listCloudConnectionRoutesRequest.id;
                } else {
                    limit = listCloudConnectionRoutesRequest['limit'];
                    marker = listCloudConnectionRoutesRequest['marker'];
                    cloudConnectionId = listCloudConnectionRoutesRequest['cloud_connection_id'];
                    instanceId = listCloudConnectionRoutesRequest['instance_id'];
                    regionId = listCloudConnectionRoutesRequest['region_id'];
                    id = listCloudConnectionRoutesRequest['id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (cloudConnectionId !== null && cloudConnectionId !== undefined) {
                localVarQueryParameter['cloud_connection_id'] = cloudConnectionId;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (regionId !== null && regionId !== undefined) {
                localVarQueryParameter['region_id'] = regionId;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询云连接路由条目列表。
         * 分页查询使用的参数为marker、limit。marker和limit一起使用时才会生效，单独使用无效。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCloudConnectionRoutes(showCloudConnectionRoutesRequest?: ShowCloudConnectionRoutesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/ccaas/cloud-connection-routes/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (showCloudConnectionRoutesRequest !== null && showCloudConnectionRoutesRequest !== undefined) {
                if (showCloudConnectionRoutesRequest instanceof ShowCloudConnectionRoutesRequest) {
                    id = showCloudConnectionRoutesRequest.id;
                } else {
                    id = showCloudConnectionRoutesRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showCloudConnectionRoutes.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 全域互联带宽绑定实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateGlobalConnectionBandwidthInstance(associateGlobalConnectionBandwidthInstanceRequest?: AssociateGlobalConnectionBandwidthInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/gcb/gcbandwidths/{id}/associate-instance",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (associateGlobalConnectionBandwidthInstanceRequest !== null && associateGlobalConnectionBandwidthInstanceRequest !== undefined) {
                if (associateGlobalConnectionBandwidthInstanceRequest instanceof AssociateGlobalConnectionBandwidthInstanceRequest) {
                    id = associateGlobalConnectionBandwidthInstanceRequest.id;
                    body = associateGlobalConnectionBandwidthInstanceRequest.body
                } else {
                    id = associateGlobalConnectionBandwidthInstanceRequest['id'];
                    body = associateGlobalConnectionBandwidthInstanceRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling associateGlobalConnectionBandwidthInstance.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建全域互联带宽。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createGlobalConnectionBandwidth(createGlobalConnectionBandwidthRequest?: CreateGlobalConnectionBandwidthRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/gcb/gcbandwidths",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createGlobalConnectionBandwidthRequest !== null && createGlobalConnectionBandwidthRequest !== undefined) {
                if (createGlobalConnectionBandwidthRequest instanceof CreateGlobalConnectionBandwidthRequest) {
                    body = createGlobalConnectionBandwidthRequest.body
                } else {
                    body = createGlobalConnectionBandwidthRequest['body'];
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
         * 删除全域互联带宽。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteGlobalConnectionBandwidth(deleteGlobalConnectionBandwidthRequest?: DeleteGlobalConnectionBandwidthRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{domain_id}/gcb/gcbandwidths/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (deleteGlobalConnectionBandwidthRequest !== null && deleteGlobalConnectionBandwidthRequest !== undefined) {
                if (deleteGlobalConnectionBandwidthRequest instanceof DeleteGlobalConnectionBandwidthRequest) {
                    id = deleteGlobalConnectionBandwidthRequest.id;
                } else {
                    id = deleteGlobalConnectionBandwidthRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteGlobalConnectionBandwidth.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 全域互联带宽解绑实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disassociateGlobalConnectionBandwidthInstance(disassociateGlobalConnectionBandwidthInstanceRequest?: DisassociateGlobalConnectionBandwidthInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/gcb/gcbandwidths/{id}/disassociate-instance",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (disassociateGlobalConnectionBandwidthInstanceRequest !== null && disassociateGlobalConnectionBandwidthInstanceRequest !== undefined) {
                if (disassociateGlobalConnectionBandwidthInstanceRequest instanceof DisassociateGlobalConnectionBandwidthInstanceRequest) {
                    id = disassociateGlobalConnectionBandwidthInstanceRequest.id;
                    body = disassociateGlobalConnectionBandwidthInstanceRequest.body
                } else {
                    id = disassociateGlobalConnectionBandwidthInstanceRequest['id'];
                    body = disassociateGlobalConnectionBandwidthInstanceRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling disassociateGlobalConnectionBandwidthInstance.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询全域互联带宽租户配置信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGlobalConnectionBandwidthConfigs() {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/gcb/configs",
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
         * 查询线路等级列表。
         * 分页查询使用的参数为marker、limit。marker和limit一起使用时才会生效，单独使用无效。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGlobalConnectionBandwidthLineLevels(listGlobalConnectionBandwidthLineLevelsRequest?: ListGlobalConnectionBandwidthLineLevelsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/gcb/line-levels",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let id;
            
            let localArea;
            
            let remoteArea;
            
            let levels;

            if (listGlobalConnectionBandwidthLineLevelsRequest !== null && listGlobalConnectionBandwidthLineLevelsRequest !== undefined) {
                if (listGlobalConnectionBandwidthLineLevelsRequest instanceof ListGlobalConnectionBandwidthLineLevelsRequest) {
                    limit = listGlobalConnectionBandwidthLineLevelsRequest.limit;
                    marker = listGlobalConnectionBandwidthLineLevelsRequest.marker;
                    id = listGlobalConnectionBandwidthLineLevelsRequest.id;
                    localArea = listGlobalConnectionBandwidthLineLevelsRequest.localArea;
                    remoteArea = listGlobalConnectionBandwidthLineLevelsRequest.remoteArea;
                    levels = listGlobalConnectionBandwidthLineLevelsRequest.levels;
                } else {
                    limit = listGlobalConnectionBandwidthLineLevelsRequest['limit'];
                    marker = listGlobalConnectionBandwidthLineLevelsRequest['marker'];
                    id = listGlobalConnectionBandwidthLineLevelsRequest['id'];
                    localArea = listGlobalConnectionBandwidthLineLevelsRequest['local_area'];
                    remoteArea = listGlobalConnectionBandwidthLineLevelsRequest['remote_area'];
                    levels = listGlobalConnectionBandwidthLineLevelsRequest['levels'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (localArea !== null && localArea !== undefined) {
                localVarQueryParameter['local_area'] = localArea;
            }
            if (remoteArea !== null && remoteArea !== undefined) {
                localVarQueryParameter['remote_area'] = remoteArea;
            }
            if (levels !== null && levels !== undefined) {
                localVarQueryParameter['levels'] = levels;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询站点列表。
         * 分页查询使用的参数为marker、limit。marker和limit一起使用时才会生效，单独使用无效。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGlobalConnectionBandwidthSites(listGlobalConnectionBandwidthSitesRequest?: ListGlobalConnectionBandwidthSitesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/gcb/sites",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let id;
            
            let nameEn;
            
            let nameCn;
            
            let siteCode;
            
            let siteType;

            if (listGlobalConnectionBandwidthSitesRequest !== null && listGlobalConnectionBandwidthSitesRequest !== undefined) {
                if (listGlobalConnectionBandwidthSitesRequest instanceof ListGlobalConnectionBandwidthSitesRequest) {
                    limit = listGlobalConnectionBandwidthSitesRequest.limit;
                    marker = listGlobalConnectionBandwidthSitesRequest.marker;
                    id = listGlobalConnectionBandwidthSitesRequest.id;
                    nameEn = listGlobalConnectionBandwidthSitesRequest.nameEn;
                    nameCn = listGlobalConnectionBandwidthSitesRequest.nameCn;
                    siteCode = listGlobalConnectionBandwidthSitesRequest.siteCode;
                    siteType = listGlobalConnectionBandwidthSitesRequest.siteType;
                } else {
                    limit = listGlobalConnectionBandwidthSitesRequest['limit'];
                    marker = listGlobalConnectionBandwidthSitesRequest['marker'];
                    id = listGlobalConnectionBandwidthSitesRequest['id'];
                    nameEn = listGlobalConnectionBandwidthSitesRequest['name_en'];
                    nameCn = listGlobalConnectionBandwidthSitesRequest['name_cn'];
                    siteCode = listGlobalConnectionBandwidthSitesRequest['site_code'];
                    siteType = listGlobalConnectionBandwidthSitesRequest['site_type'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (nameEn !== null && nameEn !== undefined) {
                localVarQueryParameter['name_en'] = nameEn;
            }
            if (nameCn !== null && nameCn !== undefined) {
                localVarQueryParameter['name_cn'] = nameCn;
            }
            if (siteCode !== null && siteCode !== undefined) {
                localVarQueryParameter['site_code'] = siteCode;
            }
            if (siteType !== null && siteType !== undefined) {
                localVarQueryParameter['site_type'] = siteType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询线路规格列表。租户白名单控制，默认为空。
         * 分页查询使用的参数为marker、limit。marker和limit一起使用时才会生效，单独使用无效。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGlobalConnectionBandwidthSpecCodes(listGlobalConnectionBandwidthSpecCodesRequest?: ListGlobalConnectionBandwidthSpecCodesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/gcb/spec-codes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let id;
            
            let localArea;
            
            let remoteArea;
            
            let level;

            if (listGlobalConnectionBandwidthSpecCodesRequest !== null && listGlobalConnectionBandwidthSpecCodesRequest !== undefined) {
                if (listGlobalConnectionBandwidthSpecCodesRequest instanceof ListGlobalConnectionBandwidthSpecCodesRequest) {
                    limit = listGlobalConnectionBandwidthSpecCodesRequest.limit;
                    marker = listGlobalConnectionBandwidthSpecCodesRequest.marker;
                    id = listGlobalConnectionBandwidthSpecCodesRequest.id;
                    localArea = listGlobalConnectionBandwidthSpecCodesRequest.localArea;
                    remoteArea = listGlobalConnectionBandwidthSpecCodesRequest.remoteArea;
                    level = listGlobalConnectionBandwidthSpecCodesRequest.level;
                } else {
                    limit = listGlobalConnectionBandwidthSpecCodesRequest['limit'];
                    marker = listGlobalConnectionBandwidthSpecCodesRequest['marker'];
                    id = listGlobalConnectionBandwidthSpecCodesRequest['id'];
                    localArea = listGlobalConnectionBandwidthSpecCodesRequest['local_area'];
                    remoteArea = listGlobalConnectionBandwidthSpecCodesRequest['remote_area'];
                    level = listGlobalConnectionBandwidthSpecCodesRequest['level'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (localArea !== null && localArea !== undefined) {
                localVarQueryParameter['local_area'] = localArea;
            }
            if (remoteArea !== null && remoteArea !== undefined) {
                localVarQueryParameter['remote_area'] = remoteArea;
            }
            if (level !== null && level !== undefined) {
                localVarQueryParameter['level'] = level;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询全域互联带宽列表。
         * 分页查询使用的参数为marker、limit。marker和limit一起使用时才会生效，单独使用无效。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGlobalConnectionBandwidths(listGlobalConnectionBandwidthsRequest?: ListGlobalConnectionBandwidthsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/gcb/gcbandwidths",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let id;
            
            let name;
            
            let enterpriseProjectId;
            
            let instanceId;
            
            let instanceType;
            
            let bindingService;
            
            let type;
            
            let adminState;
            
            let chargeMode;

            if (listGlobalConnectionBandwidthsRequest !== null && listGlobalConnectionBandwidthsRequest !== undefined) {
                if (listGlobalConnectionBandwidthsRequest instanceof ListGlobalConnectionBandwidthsRequest) {
                    limit = listGlobalConnectionBandwidthsRequest.limit;
                    marker = listGlobalConnectionBandwidthsRequest.marker;
                    id = listGlobalConnectionBandwidthsRequest.id;
                    name = listGlobalConnectionBandwidthsRequest.name;
                    enterpriseProjectId = listGlobalConnectionBandwidthsRequest.enterpriseProjectId;
                    instanceId = listGlobalConnectionBandwidthsRequest.instanceId;
                    instanceType = listGlobalConnectionBandwidthsRequest.instanceType;
                    bindingService = listGlobalConnectionBandwidthsRequest.bindingService;
                    type = listGlobalConnectionBandwidthsRequest.type;
                    adminState = listGlobalConnectionBandwidthsRequest.adminState;
                    chargeMode = listGlobalConnectionBandwidthsRequest.chargeMode;
                } else {
                    limit = listGlobalConnectionBandwidthsRequest['limit'];
                    marker = listGlobalConnectionBandwidthsRequest['marker'];
                    id = listGlobalConnectionBandwidthsRequest['id'];
                    name = listGlobalConnectionBandwidthsRequest['name'];
                    enterpriseProjectId = listGlobalConnectionBandwidthsRequest['enterprise_project_id'];
                    instanceId = listGlobalConnectionBandwidthsRequest['instance_id'];
                    instanceType = listGlobalConnectionBandwidthsRequest['instance_type'];
                    bindingService = listGlobalConnectionBandwidthsRequest['binding_service'];
                    type = listGlobalConnectionBandwidthsRequest['type'];
                    adminState = listGlobalConnectionBandwidthsRequest['admin_state'];
                    chargeMode = listGlobalConnectionBandwidthsRequest['charge_mode'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (instanceType !== null && instanceType !== undefined) {
                localVarQueryParameter['instance_type'] = instanceType;
            }
            if (bindingService !== null && bindingService !== undefined) {
                localVarQueryParameter['binding_service'] = bindingService;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (adminState !== null && adminState !== undefined) {
                localVarQueryParameter['admin_state'] = adminState;
            }
            if (chargeMode !== null && chargeMode !== undefined) {
                localVarQueryParameter['charge_mode'] = chargeMode;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询符合绑定条件的全域互联带宽列表。
         * 分页查询使用的参数为marker、limit。marker和limit一起使用时才会生效，单独使用无效。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSupportBindingConnectionBandwidths(listSupportBindingConnectionBandwidthsRequest?: ListSupportBindingConnectionBandwidthsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/gcb/gcbandwidths/support-bindings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let bindingService;
            
            let limit;
            
            let marker;
            
            let enterpriseProjectId;
            
            let localArea;
            
            let remoteArea;

            if (listSupportBindingConnectionBandwidthsRequest !== null && listSupportBindingConnectionBandwidthsRequest !== undefined) {
                if (listSupportBindingConnectionBandwidthsRequest instanceof ListSupportBindingConnectionBandwidthsRequest) {
                    bindingService = listSupportBindingConnectionBandwidthsRequest.bindingService;
                    limit = listSupportBindingConnectionBandwidthsRequest.limit;
                    marker = listSupportBindingConnectionBandwidthsRequest.marker;
                    enterpriseProjectId = listSupportBindingConnectionBandwidthsRequest.enterpriseProjectId;
                    localArea = listSupportBindingConnectionBandwidthsRequest.localArea;
                    remoteArea = listSupportBindingConnectionBandwidthsRequest.remoteArea;
                } else {
                    bindingService = listSupportBindingConnectionBandwidthsRequest['binding_service'];
                    limit = listSupportBindingConnectionBandwidthsRequest['limit'];
                    marker = listSupportBindingConnectionBandwidthsRequest['marker'];
                    enterpriseProjectId = listSupportBindingConnectionBandwidthsRequest['enterprise_project_id'];
                    localArea = listSupportBindingConnectionBandwidthsRequest['local_area'];
                    remoteArea = listSupportBindingConnectionBandwidthsRequest['remote_area'];
                }
            }

        
            if (bindingService === null || bindingService === undefined) {
                throw new RequiredError('bindingService','Required parameter bindingService was null or undefined when calling listSupportBindingConnectionBandwidths.');
            }
            if (bindingService !== null && bindingService !== undefined) {
                localVarQueryParameter['binding_service'] = bindingService;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (localArea !== null && localArea !== undefined) {
                localVarQueryParameter['local_area'] = localArea;
            }
            if (remoteArea !== null && remoteArea !== undefined) {
                localVarQueryParameter['remote_area'] = remoteArea;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询全域互联带宽详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showGlobalConnectionBandwidth(showGlobalConnectionBandwidthRequest?: ShowGlobalConnectionBandwidthRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/gcb/gcbandwidths/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (showGlobalConnectionBandwidthRequest !== null && showGlobalConnectionBandwidthRequest !== undefined) {
                if (showGlobalConnectionBandwidthRequest instanceof ShowGlobalConnectionBandwidthRequest) {
                    id = showGlobalConnectionBandwidthRequest.id;
                } else {
                    id = showGlobalConnectionBandwidthRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showGlobalConnectionBandwidth.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新全域互联带宽详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateGlobalConnectionBandwidth(updateGlobalConnectionBandwidthRequest?: UpdateGlobalConnectionBandwidthRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{domain_id}/gcb/gcbandwidths/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (updateGlobalConnectionBandwidthRequest !== null && updateGlobalConnectionBandwidthRequest !== undefined) {
                if (updateGlobalConnectionBandwidthRequest instanceof UpdateGlobalConnectionBandwidthRequest) {
                    id = updateGlobalConnectionBandwidthRequest.id;
                    body = updateGlobalConnectionBandwidthRequest.body
                } else {
                    id = updateGlobalConnectionBandwidthRequest['id'];
                    body = updateGlobalConnectionBandwidthRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateGlobalConnectionBandwidth.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * TMS批量添加资源标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateGcbResourceTags(batchCreateGcbResourceTagsRequest?: BatchCreateGcbResourceTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/gcb/{resource_id}/tags/create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceId;

            if (batchCreateGcbResourceTagsRequest !== null && batchCreateGcbResourceTagsRequest !== undefined) {
                if (batchCreateGcbResourceTagsRequest instanceof BatchCreateGcbResourceTagsRequest) {
                    resourceId = batchCreateGcbResourceTagsRequest.resourceId;
                    body = batchCreateGcbResourceTagsRequest.body
                } else {
                    resourceId = batchCreateGcbResourceTagsRequest['resource_id'];
                    body = batchCreateGcbResourceTagsRequest['body'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling batchCreateGcbResourceTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除账户全域互联带宽资源标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteGcbResourceTags(batchDeleteGcbResourceTagsRequest?: BatchDeleteGcbResourceTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/gcb/{resource_id}/tags/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceId;

            if (batchDeleteGcbResourceTagsRequest !== null && batchDeleteGcbResourceTagsRequest !== undefined) {
                if (batchDeleteGcbResourceTagsRequest instanceof BatchDeleteGcbResourceTagsRequest) {
                    resourceId = batchDeleteGcbResourceTagsRequest.resourceId;
                    body = batchDeleteGcbResourceTagsRequest.body
                } else {
                    resourceId = batchDeleteGcbResourceTagsRequest['resource_id'];
                    body = batchDeleteGcbResourceTagsRequest['body'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling batchDeleteGcbResourceTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询账户全域互联带宽资源标签数量
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        countGcbResourceByTag(countGcbResourceByTagRequest?: CountGcbResourceByTagRequest) {
            const options = {
                method: "POST",
                url: "/v3/gcb/resource-instances/count",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (countGcbResourceByTagRequest !== null && countGcbResourceByTagRequest !== undefined) {
                if (countGcbResourceByTagRequest instanceof CountGcbResourceByTagRequest) {
                    body = countGcbResourceByTagRequest.body
                } else {
                    body = countGcbResourceByTagRequest['body'];
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
         * 添加账户全域互联带宽资源标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createGcbResourceTag(createGcbResourceTagRequest?: CreateGcbResourceTagRequest) {
            const options = {
                method: "POST",
                url: "/v3/gcb/{resource_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceId;

            if (createGcbResourceTagRequest !== null && createGcbResourceTagRequest !== undefined) {
                if (createGcbResourceTagRequest instanceof CreateGcbResourceTagRequest) {
                    resourceId = createGcbResourceTagRequest.resourceId;
                    body = createGcbResourceTagRequest.body
                } else {
                    resourceId = createGcbResourceTagRequest['resource_id'];
                    body = createGcbResourceTagRequest['body'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling createGcbResourceTag.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除账户全域互联带宽资源标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteGcbResourceTag(deleteGcbResourceTagRequest?: DeleteGcbResourceTagRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/gcb/{resource_id}/tags/{tag_key}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceId;
            
            let tagKey;

            if (deleteGcbResourceTagRequest !== null && deleteGcbResourceTagRequest !== undefined) {
                if (deleteGcbResourceTagRequest instanceof DeleteGcbResourceTagRequest) {
                    resourceId = deleteGcbResourceTagRequest.resourceId;
                    tagKey = deleteGcbResourceTagRequest.tagKey;
                } else {
                    resourceId = deleteGcbResourceTagRequest['resource_id'];
                    tagKey = deleteGcbResourceTagRequest['tag_key'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling deleteGcbResourceTag.');
            }
            if (tagKey === null || tagKey === undefined) {
            throw new RequiredError('tagKey','Required parameter tagKey was null or undefined when calling deleteGcbResourceTag.');
            }

            options.pathParams = { 'resource_id': resourceId,'tag_key': tagKey, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询账户全域互联带宽资源实例列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGcbResourceByTag(listGcbResourceByTagRequest?: ListGcbResourceByTagRequest) {
            const options = {
                method: "POST",
                url: "/v3/gcb/resource-instances/filter",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let limit;
            
            let offset;

            if (listGcbResourceByTagRequest !== null && listGcbResourceByTagRequest !== undefined) {
                if (listGcbResourceByTagRequest instanceof ListGcbResourceByTagRequest) {
                    body = listGcbResourceByTagRequest.body
                    limit = listGcbResourceByTagRequest.limit;
                    offset = listGcbResourceByTagRequest.offset;
                } else {
                    body = listGcbResourceByTagRequest['body'];
                    limit = listGcbResourceByTagRequest['limit'];
                    offset = listGcbResourceByTagRequest['offset'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询账户全域互联带宽资源的标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGcbResourceTags(listGcbResourceTagsRequest?: ListGcbResourceTagsRequest) {
            const options = {
                method: "GET",
                url: "/v3/gcb/{resource_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceId;

            if (listGcbResourceTagsRequest !== null && listGcbResourceTagsRequest !== undefined) {
                if (listGcbResourceTagsRequest instanceof ListGcbResourceTagsRequest) {
                    resourceId = listGcbResourceTagsRequest.resourceId;
                } else {
                    resourceId = listGcbResourceTagsRequest['resource_id'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling listGcbResourceTags.');
            }

            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询账户全域互联带宽所有资源标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGcbTenantTags() {
            const options = {
                method: "GET",
                url: "/v3/gcb/tags",
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
         * 创建域间带宽实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInterRegionBandwidth(createInterRegionBandwidthRequest?: CreateInterRegionBandwidthRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/ccaas/inter-region-bandwidths",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createInterRegionBandwidthRequest !== null && createInterRegionBandwidthRequest !== undefined) {
                if (createInterRegionBandwidthRequest instanceof CreateInterRegionBandwidthRequest) {
                    body = createInterRegionBandwidthRequest.body
                } else {
                    body = createInterRegionBandwidthRequest['body'];
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
         * 删除域间带宽实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteInterRegionBandwidth(deleteInterRegionBandwidthRequest?: DeleteInterRegionBandwidthRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{domain_id}/ccaas/inter-region-bandwidths/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (deleteInterRegionBandwidthRequest !== null && deleteInterRegionBandwidthRequest !== undefined) {
                if (deleteInterRegionBandwidthRequest instanceof DeleteInterRegionBandwidthRequest) {
                    id = deleteInterRegionBandwidthRequest.id;
                } else {
                    id = deleteInterRegionBandwidthRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteInterRegionBandwidth.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询域间带宽列表。
         * 分页查询使用的参数为marker、limit。marker和limit一起使用时才会生效，单独使用无效。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInterRegionBandwidths(listInterRegionBandwidthsRequest?: ListInterRegionBandwidthsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/ccaas/inter-region-bandwidths",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let id;
            
            let enterpriseProjectId;
            
            let cloudConnectionId;
            
            let bandwidthPackageId;

            if (listInterRegionBandwidthsRequest !== null && listInterRegionBandwidthsRequest !== undefined) {
                if (listInterRegionBandwidthsRequest instanceof ListInterRegionBandwidthsRequest) {
                    limit = listInterRegionBandwidthsRequest.limit;
                    marker = listInterRegionBandwidthsRequest.marker;
                    id = listInterRegionBandwidthsRequest.id;
                    enterpriseProjectId = listInterRegionBandwidthsRequest.enterpriseProjectId;
                    cloudConnectionId = listInterRegionBandwidthsRequest.cloudConnectionId;
                    bandwidthPackageId = listInterRegionBandwidthsRequest.bandwidthPackageId;
                } else {
                    limit = listInterRegionBandwidthsRequest['limit'];
                    marker = listInterRegionBandwidthsRequest['marker'];
                    id = listInterRegionBandwidthsRequest['id'];
                    enterpriseProjectId = listInterRegionBandwidthsRequest['enterprise_project_id'];
                    cloudConnectionId = listInterRegionBandwidthsRequest['cloud_connection_id'];
                    bandwidthPackageId = listInterRegionBandwidthsRequest['bandwidth_package_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (cloudConnectionId !== null && cloudConnectionId !== undefined) {
                localVarQueryParameter['cloud_connection_id'] = cloudConnectionId;
            }
            if (bandwidthPackageId !== null && bandwidthPackageId !== undefined) {
                localVarQueryParameter['bandwidth_package_id'] = bandwidthPackageId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询域间带宽实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInterRegionBandwidth(showInterRegionBandwidthRequest?: ShowInterRegionBandwidthRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/ccaas/inter-region-bandwidths/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (showInterRegionBandwidthRequest !== null && showInterRegionBandwidthRequest !== undefined) {
                if (showInterRegionBandwidthRequest instanceof ShowInterRegionBandwidthRequest) {
                    id = showInterRegionBandwidthRequest.id;
                } else {
                    id = showInterRegionBandwidthRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showInterRegionBandwidth.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新域间带宽实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInterRegionBandwidth(updateInterRegionBandwidthRequest?: UpdateInterRegionBandwidthRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{domain_id}/ccaas/inter-region-bandwidths/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (updateInterRegionBandwidthRequest !== null && updateInterRegionBandwidthRequest !== undefined) {
                if (updateInterRegionBandwidthRequest instanceof UpdateInterRegionBandwidthRequest) {
                    id = updateInterRegionBandwidthRequest.id;
                    body = updateInterRegionBandwidthRequest.body
                } else {
                    id = updateInterRegionBandwidthRequest['id'];
                    body = updateInterRegionBandwidthRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateInterRegionBandwidth.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建网络实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createNetworkInstance(createNetworkInstanceRequest?: CreateNetworkInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/ccaas/network-instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createNetworkInstanceRequest !== null && createNetworkInstanceRequest !== undefined) {
                if (createNetworkInstanceRequest instanceof CreateNetworkInstanceRequest) {
                    body = createNetworkInstanceRequest.body
                } else {
                    body = createNetworkInstanceRequest['body'];
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
         * 删除网络实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteNetworkInstance(deleteNetworkInstanceRequest?: DeleteNetworkInstanceRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{domain_id}/ccaas/network-instances/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (deleteNetworkInstanceRequest !== null && deleteNetworkInstanceRequest !== undefined) {
                if (deleteNetworkInstanceRequest instanceof DeleteNetworkInstanceRequest) {
                    id = deleteNetworkInstanceRequest.id;
                } else {
                    id = deleteNetworkInstanceRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteNetworkInstance.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询网络实例列表。
         * 分页查询使用的参数为marker、limit。marker和limit一起使用时才会生效，单独使用无效。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNetworkInstances(listNetworkInstancesRequest?: ListNetworkInstancesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/ccaas/network-instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let id;
            
            let name;
            
            let description;
            
            let cloudConnectionId;
            
            let status;
            
            let type;
            
            let instanceId;
            
            let regionId;

            if (listNetworkInstancesRequest !== null && listNetworkInstancesRequest !== undefined) {
                if (listNetworkInstancesRequest instanceof ListNetworkInstancesRequest) {
                    limit = listNetworkInstancesRequest.limit;
                    marker = listNetworkInstancesRequest.marker;
                    id = listNetworkInstancesRequest.id;
                    name = listNetworkInstancesRequest.name;
                    description = listNetworkInstancesRequest.description;
                    cloudConnectionId = listNetworkInstancesRequest.cloudConnectionId;
                    status = listNetworkInstancesRequest.status;
                    type = listNetworkInstancesRequest.type;
                    instanceId = listNetworkInstancesRequest.instanceId;
                    regionId = listNetworkInstancesRequest.regionId;
                } else {
                    limit = listNetworkInstancesRequest['limit'];
                    marker = listNetworkInstancesRequest['marker'];
                    id = listNetworkInstancesRequest['id'];
                    name = listNetworkInstancesRequest['name'];
                    description = listNetworkInstancesRequest['description'];
                    cloudConnectionId = listNetworkInstancesRequest['cloud_connection_id'];
                    status = listNetworkInstancesRequest['status'];
                    type = listNetworkInstancesRequest['type'];
                    instanceId = listNetworkInstancesRequest['instance_id'];
                    regionId = listNetworkInstancesRequest['region_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
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
            if (cloudConnectionId !== null && cloudConnectionId !== undefined) {
                localVarQueryParameter['cloud_connection_id'] = cloudConnectionId;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (regionId !== null && regionId !== undefined) {
                localVarQueryParameter['region_id'] = regionId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询网络实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showNetworkInstance(showNetworkInstanceRequest?: ShowNetworkInstanceRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/ccaas/network-instances/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (showNetworkInstanceRequest !== null && showNetworkInstanceRequest !== undefined) {
                if (showNetworkInstanceRequest instanceof ShowNetworkInstanceRequest) {
                    id = showNetworkInstanceRequest.id;
                } else {
                    id = showNetworkInstanceRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showNetworkInstance.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新网络实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateNetworkInstance(updateNetworkInstanceRequest?: UpdateNetworkInstanceRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{domain_id}/ccaas/network-instances/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (updateNetworkInstanceRequest !== null && updateNetworkInstanceRequest !== undefined) {
                if (updateNetworkInstanceRequest instanceof UpdateNetworkInstanceRequest) {
                    id = updateNetworkInstanceRequest.id;
                    body = updateNetworkInstanceRequest.body
                } else {
                    id = updateNetworkInstanceRequest['id'];
                    body = updateNetworkInstanceRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateNetworkInstance.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 关联分支连接带宽。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateSiteNetworkBandwidth(associateSiteNetworkBandwidthRequest?: AssociateSiteNetworkBandwidthRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/dcaas/site-network/{site_network_id}/connections/{site_connection_id}/associate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let siteNetworkId;
            
            let siteConnectionId;

            if (associateSiteNetworkBandwidthRequest !== null && associateSiteNetworkBandwidthRequest !== undefined) {
                if (associateSiteNetworkBandwidthRequest instanceof AssociateSiteNetworkBandwidthRequest) {
                    siteNetworkId = associateSiteNetworkBandwidthRequest.siteNetworkId;
                    siteConnectionId = associateSiteNetworkBandwidthRequest.siteConnectionId;
                    body = associateSiteNetworkBandwidthRequest.body
                } else {
                    siteNetworkId = associateSiteNetworkBandwidthRequest['site_network_id'];
                    siteConnectionId = associateSiteNetworkBandwidthRequest['site_connection_id'];
                    body = associateSiteNetworkBandwidthRequest['body'];
                }
            }

        
            if (siteNetworkId === null || siteNetworkId === undefined) {
            throw new RequiredError('siteNetworkId','Required parameter siteNetworkId was null or undefined when calling associateSiteNetworkBandwidth.');
            }
            if (siteConnectionId === null || siteConnectionId === undefined) {
            throw new RequiredError('siteConnectionId','Required parameter siteConnectionId was null or undefined when calling associateSiteNetworkBandwidth.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'site_network_id': siteNetworkId,'site_connection_id': siteConnectionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 解关联分支连接带宽。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disassociateSiteNetworkBandwidth(disassociateSiteNetworkBandwidthRequest?: DisassociateSiteNetworkBandwidthRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/dcaas/site-network/{site_network_id}/connections/{site_connection_id}/disassociate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let siteNetworkId;
            
            let siteConnectionId;

            if (disassociateSiteNetworkBandwidthRequest !== null && disassociateSiteNetworkBandwidthRequest !== undefined) {
                if (disassociateSiteNetworkBandwidthRequest instanceof DisassociateSiteNetworkBandwidthRequest) {
                    siteNetworkId = disassociateSiteNetworkBandwidthRequest.siteNetworkId;
                    siteConnectionId = disassociateSiteNetworkBandwidthRequest.siteConnectionId;
                } else {
                    siteNetworkId = disassociateSiteNetworkBandwidthRequest['site_network_id'];
                    siteConnectionId = disassociateSiteNetworkBandwidthRequest['site_connection_id'];
                }
            }

        
            if (siteNetworkId === null || siteNetworkId === undefined) {
            throw new RequiredError('siteNetworkId','Required parameter siteNetworkId was null or undefined when calling disassociateSiteNetworkBandwidth.');
            }
            if (siteConnectionId === null || siteConnectionId === undefined) {
            throw new RequiredError('siteConnectionId','Required parameter siteConnectionId was null or undefined when calling disassociateSiteNetworkBandwidth.');
            }

            options.pathParams = { 'site_network_id': siteNetworkId,'site_connection_id': siteConnectionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更改分支连接带宽包。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSiteNetworkBandwidth(updateSiteNetworkBandwidthRequest?: UpdateSiteNetworkBandwidthRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/dcaas/site-network/{site_network_id}/connections/{site_connection_id}/update-bandwidth",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let siteNetworkId;
            
            let siteConnectionId;

            if (updateSiteNetworkBandwidthRequest !== null && updateSiteNetworkBandwidthRequest !== undefined) {
                if (updateSiteNetworkBandwidthRequest instanceof UpdateSiteNetworkBandwidthRequest) {
                    siteNetworkId = updateSiteNetworkBandwidthRequest.siteNetworkId;
                    siteConnectionId = updateSiteNetworkBandwidthRequest.siteConnectionId;
                    body = updateSiteNetworkBandwidthRequest.body
                } else {
                    siteNetworkId = updateSiteNetworkBandwidthRequest['site_network_id'];
                    siteConnectionId = updateSiteNetworkBandwidthRequest['site_connection_id'];
                    body = updateSiteNetworkBandwidthRequest['body'];
                }
            }

        
            if (siteNetworkId === null || siteNetworkId === undefined) {
            throw new RequiredError('siteNetworkId','Required parameter siteNetworkId was null or undefined when calling updateSiteNetworkBandwidth.');
            }
            if (siteConnectionId === null || siteConnectionId === undefined) {
            throw new RequiredError('siteConnectionId','Required parameter siteConnectionId was null or undefined when calling updateSiteNetworkBandwidth.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'site_network_id': siteNetworkId,'site_connection_id': siteConnectionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更改分支连接带宽大小。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSiteNetworkBandwidthSize(updateSiteNetworkBandwidthSizeRequest?: UpdateSiteNetworkBandwidthSizeRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/dcaas/site-network/{site_network_id}/connections/{site_connection_id}/update-bandwidth-size",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let siteNetworkId;
            
            let siteConnectionId;

            if (updateSiteNetworkBandwidthSizeRequest !== null && updateSiteNetworkBandwidthSizeRequest !== undefined) {
                if (updateSiteNetworkBandwidthSizeRequest instanceof UpdateSiteNetworkBandwidthSizeRequest) {
                    siteNetworkId = updateSiteNetworkBandwidthSizeRequest.siteNetworkId;
                    siteConnectionId = updateSiteNetworkBandwidthSizeRequest.siteConnectionId;
                    body = updateSiteNetworkBandwidthSizeRequest.body
                } else {
                    siteNetworkId = updateSiteNetworkBandwidthSizeRequest['site_network_id'];
                    siteConnectionId = updateSiteNetworkBandwidthSizeRequest['site_connection_id'];
                    body = updateSiteNetworkBandwidthSizeRequest['body'];
                }
            }

        
            if (siteNetworkId === null || siteNetworkId === undefined) {
            throw new RequiredError('siteNetworkId','Required parameter siteNetworkId was null or undefined when calling updateSiteNetworkBandwidthSize.');
            }
            if (siteConnectionId === null || siteConnectionId === undefined) {
            throw new RequiredError('siteConnectionId','Required parameter siteConnectionId was null or undefined when calling updateSiteNetworkBandwidthSize.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'site_network_id': siteNetworkId,'site_connection_id': siteConnectionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建P2P类型的分支网络。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createP2PSiteNetwork(createP2PSiteNetworkRequest?: CreateP2PSiteNetworkRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/dcaas/p2p-site-networks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createP2PSiteNetworkRequest !== null && createP2PSiteNetworkRequest !== undefined) {
                if (createP2PSiteNetworkRequest instanceof CreateP2PSiteNetworkRequest) {
                    body = createP2PSiteNetworkRequest.body
                } else {
                    body = createP2PSiteNetworkRequest['body'];
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
         * 删除分支网络。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSiteNetwork(deleteSiteNetworkRequest?: DeleteSiteNetworkRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{domain_id}/dcaas/site-networks/{site_network_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let siteNetworkId;

            if (deleteSiteNetworkRequest !== null && deleteSiteNetworkRequest !== undefined) {
                if (deleteSiteNetworkRequest instanceof DeleteSiteNetworkRequest) {
                    siteNetworkId = deleteSiteNetworkRequest.siteNetworkId;
                } else {
                    siteNetworkId = deleteSiteNetworkRequest['site_network_id'];
                }
            }

        
            if (siteNetworkId === null || siteNetworkId === undefined) {
            throw new RequiredError('siteNetworkId','Required parameter siteNetworkId was null or undefined when calling deleteSiteNetwork.');
            }

            options.pathParams = { 'site_network_id': siteNetworkId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询分支网络列表。
         * 分页查询使用的参数为marker、limit。limit默认值为0，没有指定marker时返回第一条数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSiteNetworks(listSiteNetworksRequest?: ListSiteNetworksRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/dcaas/site-networks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let sortKey;
            
            let sortDir;
            
            let id;
            
            let name;
            
            let state;
            
            let enterpriseProjectId;
            
            let globalDcGatewayId;
            
            let globalConnectionBandwidthId;
            
            let connectionId;

            if (listSiteNetworksRequest !== null && listSiteNetworksRequest !== undefined) {
                if (listSiteNetworksRequest instanceof ListSiteNetworksRequest) {
                    limit = listSiteNetworksRequest.limit;
                    marker = listSiteNetworksRequest.marker;
                    sortKey = listSiteNetworksRequest.sortKey;
                    sortDir = listSiteNetworksRequest.sortDir;
                    id = listSiteNetworksRequest.id;
                    name = listSiteNetworksRequest.name;
                    state = listSiteNetworksRequest.state;
                    enterpriseProjectId = listSiteNetworksRequest.enterpriseProjectId;
                    globalDcGatewayId = listSiteNetworksRequest.globalDcGatewayId;
                    globalConnectionBandwidthId = listSiteNetworksRequest.globalConnectionBandwidthId;
                    connectionId = listSiteNetworksRequest.connectionId;
                } else {
                    limit = listSiteNetworksRequest['limit'];
                    marker = listSiteNetworksRequest['marker'];
                    sortKey = listSiteNetworksRequest['sort_key'];
                    sortDir = listSiteNetworksRequest['sort_dir'];
                    id = listSiteNetworksRequest['id'];
                    name = listSiteNetworksRequest['name'];
                    state = listSiteNetworksRequest['state'];
                    enterpriseProjectId = listSiteNetworksRequest['enterprise_project_id'];
                    globalDcGatewayId = listSiteNetworksRequest['global_dc_gateway_id'];
                    globalConnectionBandwidthId = listSiteNetworksRequest['global_connection_bandwidth_id'];
                    connectionId = listSiteNetworksRequest['connection_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (state !== null && state !== undefined) {
                localVarQueryParameter['state'] = state;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (globalDcGatewayId !== null && globalDcGatewayId !== undefined) {
                localVarQueryParameter['global_dc_gateway_id'] = globalDcGatewayId;
            }
            if (globalConnectionBandwidthId !== null && globalConnectionBandwidthId !== undefined) {
                localVarQueryParameter['global_connection_bandwidth_id'] = globalConnectionBandwidthId;
            }
            if (connectionId !== null && connectionId !== undefined) {
                localVarQueryParameter['connection_id'] = connectionId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询分支网络详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSiteNetwork(showSiteNetworkRequest?: ShowSiteNetworkRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/dcaas/site-networks/{site_network_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let siteNetworkId;

            if (showSiteNetworkRequest !== null && showSiteNetworkRequest !== undefined) {
                if (showSiteNetworkRequest instanceof ShowSiteNetworkRequest) {
                    siteNetworkId = showSiteNetworkRequest.siteNetworkId;
                } else {
                    siteNetworkId = showSiteNetworkRequest['site_network_id'];
                }
            }

        
            if (siteNetworkId === null || siteNetworkId === undefined) {
            throw new RequiredError('siteNetworkId','Required parameter siteNetworkId was null or undefined when calling showSiteNetwork.');
            }

            options.pathParams = { 'site_network_id': siteNetworkId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新分支网络详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSiteNetwork(updateSiteNetworkRequest?: UpdateSiteNetworkRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{domain_id}/dcaas/site-networks/{site_network_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let siteNetworkId;

            if (updateSiteNetworkRequest !== null && updateSiteNetworkRequest !== undefined) {
                if (updateSiteNetworkRequest instanceof UpdateSiteNetworkRequest) {
                    siteNetworkId = updateSiteNetworkRequest.siteNetworkId;
                    body = updateSiteNetworkRequest.body
                } else {
                    siteNetworkId = updateSiteNetworkRequest['site_network_id'];
                    body = updateSiteNetworkRequest['body'];
                }
            }

        
            if (siteNetworkId === null || siteNetworkId === undefined) {
            throw new RequiredError('siteNetworkId','Required parameter siteNetworkId was null or undefined when calling updateSiteNetwork.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'site_network_id': siteNetworkId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询分支网络的能力列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSiteNetworkCapabilities(listSiteNetworkCapabilitiesRequest?: ListSiteNetworkCapabilitiesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/dcaas/site-network/capabilities",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let specification;
            
            let limit;
            
            let marker;

            if (listSiteNetworkCapabilitiesRequest !== null && listSiteNetworkCapabilitiesRequest !== undefined) {
                if (listSiteNetworkCapabilitiesRequest instanceof ListSiteNetworkCapabilitiesRequest) {
                    specification = listSiteNetworkCapabilitiesRequest.specification;
                    limit = listSiteNetworkCapabilitiesRequest.limit;
                    marker = listSiteNetworkCapabilitiesRequest.marker;
                } else {
                    specification = listSiteNetworkCapabilitiesRequest['specification'];
                    limit = listSiteNetworkCapabilitiesRequest['limit'];
                    marker = listSiteNetworkCapabilitiesRequest['marker'];
                }
            }

        
            if (specification !== null && specification !== undefined) {
                localVarQueryParameter['specification'] = specification;
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
         * 查询分支网络配额。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSiteNetworkQuotas(listSiteNetworkQuotasRequest?: ListSiteNetworkQuotasRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/dcaas/site-network/quotas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let quotaType;
            
            let limit;
            
            let marker;

            if (listSiteNetworkQuotasRequest !== null && listSiteNetworkQuotasRequest !== undefined) {
                if (listSiteNetworkQuotasRequest instanceof ListSiteNetworkQuotasRequest) {
                    quotaType = listSiteNetworkQuotasRequest.quotaType;
                    limit = listSiteNetworkQuotasRequest.limit;
                    marker = listSiteNetworkQuotasRequest.marker;
                } else {
                    quotaType = listSiteNetworkQuotasRequest['quota_type'];
                    limit = listSiteNetworkQuotasRequest['limit'];
                    marker = listSiteNetworkQuotasRequest['marker'];
                }
            }

        
            if (quotaType !== null && quotaType !== undefined) {
                localVarQueryParameter['quota_type'] = quotaType;
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
         * 查询大区互通类型的带宽包资源规格列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAreaBandwidthPackageSpecifications(listAreaBandwidthPackageSpecificationsRequest?: ListAreaBandwidthPackageSpecificationsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/ccaas/bandwidth-packages/area-specifications",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let localAreaId;
            
            let remoteAreaId;

            if (listAreaBandwidthPackageSpecificationsRequest !== null && listAreaBandwidthPackageSpecificationsRequest !== undefined) {
                if (listAreaBandwidthPackageSpecificationsRequest instanceof ListAreaBandwidthPackageSpecificationsRequest) {
                    offset = listAreaBandwidthPackageSpecificationsRequest.offset;
                    localAreaId = listAreaBandwidthPackageSpecificationsRequest.localAreaId;
                    remoteAreaId = listAreaBandwidthPackageSpecificationsRequest.remoteAreaId;
                } else {
                    offset = listAreaBandwidthPackageSpecificationsRequest['offset'];
                    localAreaId = listAreaBandwidthPackageSpecificationsRequest['local_area_id'];
                    remoteAreaId = listAreaBandwidthPackageSpecificationsRequest['remote_area_id'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (localAreaId !== null && localAreaId !== undefined) {
                localVarQueryParameter['local_area_id'] = localAreaId;
            }
            if (remoteAreaId !== null && remoteAreaId !== undefined) {
                localVarQueryParameter['remote_area_id'] = remoteAreaId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询当前支持的大区列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAreas(listAreasRequest?: ListAreasRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/ccaas/areas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;

            if (listAreasRequest !== null && listAreasRequest !== undefined) {
                if (listAreasRequest instanceof ListAreasRequest) {
                    limit = listAreasRequest.limit;
                    marker = listAreasRequest.marker;
                } else {
                    limit = listAreasRequest['limit'];
                    marker = listAreasRequest['marker'];
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
         * 查询带宽包等级列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBandwidthPackageLevels(listBandwidthPackageLevelsRequest?: ListBandwidthPackageLevelsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/ccaas/bandwidth-packages/levels",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let level;
            
            let name;

            if (listBandwidthPackageLevelsRequest !== null && listBandwidthPackageLevelsRequest !== undefined) {
                if (listBandwidthPackageLevelsRequest instanceof ListBandwidthPackageLevelsRequest) {
                    limit = listBandwidthPackageLevelsRequest.limit;
                    marker = listBandwidthPackageLevelsRequest.marker;
                    level = listBandwidthPackageLevelsRequest.level;
                    name = listBandwidthPackageLevelsRequest.name;
                } else {
                    limit = listBandwidthPackageLevelsRequest['limit'];
                    marker = listBandwidthPackageLevelsRequest['marker'];
                    level = listBandwidthPackageLevelsRequest['level'];
                    name = listBandwidthPackageLevelsRequest['name'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (level !== null && level !== undefined) {
                localVarQueryParameter['level'] = level;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询带宽包线路列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBandwidthPackageLines(listBandwidthPackageLinesRequest?: ListBandwidthPackageLinesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/ccaas/bandwidth-packages/lines",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let level;
            
            let name;

            if (listBandwidthPackageLinesRequest !== null && listBandwidthPackageLinesRequest !== undefined) {
                if (listBandwidthPackageLinesRequest instanceof ListBandwidthPackageLinesRequest) {
                    limit = listBandwidthPackageLinesRequest.limit;
                    marker = listBandwidthPackageLinesRequest.marker;
                    level = listBandwidthPackageLinesRequest.level;
                    name = listBandwidthPackageLinesRequest.name;
                } else {
                    limit = listBandwidthPackageLinesRequest['limit'];
                    marker = listBandwidthPackageLinesRequest['marker'];
                    level = listBandwidthPackageLinesRequest['level'];
                    name = listBandwidthPackageLinesRequest['name'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (level !== null && level !== undefined) {
                localVarQueryParameter['level'] = level;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询带宽包站点列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBandwidthPackageSites(listBandwidthPackageSitesRequest?: ListBandwidthPackageSitesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/ccaas/bandwidth-packages/sites",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let siteCode;
            
            let regionId;
            
            let name;

            if (listBandwidthPackageSitesRequest !== null && listBandwidthPackageSitesRequest !== undefined) {
                if (listBandwidthPackageSitesRequest instanceof ListBandwidthPackageSitesRequest) {
                    limit = listBandwidthPackageSitesRequest.limit;
                    marker = listBandwidthPackageSitesRequest.marker;
                    siteCode = listBandwidthPackageSitesRequest.siteCode;
                    regionId = listBandwidthPackageSitesRequest.regionId;
                    name = listBandwidthPackageSitesRequest.name;
                } else {
                    limit = listBandwidthPackageSitesRequest['limit'];
                    marker = listBandwidthPackageSitesRequest['marker'];
                    siteCode = listBandwidthPackageSitesRequest['site_code'];
                    regionId = listBandwidthPackageSitesRequest['region_id'];
                    name = listBandwidthPackageSitesRequest['name'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (siteCode !== null && siteCode !== undefined) {
                localVarQueryParameter['site_code'] = siteCode;
            }
            if (regionId !== null && regionId !== undefined) {
                localVarQueryParameter['region_id'] = regionId;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询区域互通类型的带宽包规格列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRegionBandwidthPackageSpecifications(listRegionBandwidthPackageSpecificationsRequest?: ListRegionBandwidthPackageSpecificationsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/ccaas/bandwidth-packages/region-specifications",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let localRegionId;
            
            let remoteRegionId;

            if (listRegionBandwidthPackageSpecificationsRequest !== null && listRegionBandwidthPackageSpecificationsRequest !== undefined) {
                if (listRegionBandwidthPackageSpecificationsRequest instanceof ListRegionBandwidthPackageSpecificationsRequest) {
                    limit = listRegionBandwidthPackageSpecificationsRequest.limit;
                    marker = listRegionBandwidthPackageSpecificationsRequest.marker;
                    localRegionId = listRegionBandwidthPackageSpecificationsRequest.localRegionId;
                    remoteRegionId = listRegionBandwidthPackageSpecificationsRequest.remoteRegionId;
                } else {
                    limit = listRegionBandwidthPackageSpecificationsRequest['limit'];
                    marker = listRegionBandwidthPackageSpecificationsRequest['marker'];
                    localRegionId = listRegionBandwidthPackageSpecificationsRequest['local_region_id'];
                    remoteRegionId = listRegionBandwidthPackageSpecificationsRequest['remote_region_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (localRegionId !== null && localRegionId !== undefined) {
                localVarQueryParameter['local_region_id'] = localRegionId;
            }
            if (remoteRegionId !== null && remoteRegionId !== undefined) {
                localVarQueryParameter['remote_region_id'] = remoteRegionId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询当前支持的区域列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRegions(listRegionsRequest?: ListRegionsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/ccaas/regions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;

            if (listRegionsRequest !== null && listRegionsRequest !== undefined) {
                if (listRegionsRequest instanceof ListRegionsRequest) {
                    limit = listRegionsRequest.limit;
                    marker = listRegionsRequest.marker;
                } else {
                    limit = listRegionsRequest['limit'];
                    marker = listRegionsRequest['marker'];
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
    
    }
};

function newClient(client: HcClient): CcClient {
    return new CcClient(client);
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