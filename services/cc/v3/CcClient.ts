import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { ApplyCentralNetworkPolicyRequest } from './model/ApplyCentralNetworkPolicyRequest';
import { ApplyCentralNetworkPolicyResponse } from './model/ApplyCentralNetworkPolicyResponse';
import { ApprovedStateEnum } from './model/ApprovedStateEnum';
import { AreaIdDef } from './model/AreaIdDef';
import { Asn } from './model/Asn';
import { AssociateBandwidthPackage } from './model/AssociateBandwidthPackage';
import { AssociateBandwidthPackageRequest } from './model/AssociateBandwidthPackageRequest';
import { AssociateBandwidthPackageRequestBody } from './model/AssociateBandwidthPackageRequestBody';
import { AssociateBandwidthPackageResponse } from './model/AssociateBandwidthPackageResponse';
import { AssociateErInstanceDocument } from './model/AssociateErInstanceDocument';
import { AssociateErTableDocument } from './model/AssociateErTableDocument';
import { AttachmentInstanceId } from './model/AttachmentInstanceId';
import { AttachmentInstanceType } from './model/AttachmentInstanceType';
import { AttachmentInstanceTypeEnum } from './model/AttachmentInstanceTypeEnum';
import { Authorisation } from './model/Authorisation';
import { BandwidthPackage } from './model/BandwidthPackage';
import { BandwidthPackageId } from './model/BandwidthPackageId';
import { BandwidthSize } from './model/BandwidthSize';
import { BandwidthSizeDefine } from './model/BandwidthSizeDefine';
import { BandwidthType } from './model/BandwidthType';
import { BandwidthTypeEnum } from './model/BandwidthTypeEnum';
import { BillingMode } from './model/BillingMode';
import { BillingModeEnum } from './model/BillingModeEnum';
import { CentralNetwork } from './model/CentralNetwork';
import { CentralNetworkAttachment } from './model/CentralNetworkAttachment';
import { CentralNetworkAttachmentSpecificationValueInfo } from './model/CentralNetworkAttachmentSpecificationValueInfo';
import { CentralNetworkCapability } from './model/CentralNetworkCapability';
import { CentralNetworkCapabilityEnum } from './model/CentralNetworkCapabilityEnum';
import { CentralNetworkConnection } from './model/CentralNetworkConnection';
import { CentralNetworkConnectionInfo } from './model/CentralNetworkConnectionInfo';
import { CentralNetworkConnectionState } from './model/CentralNetworkConnectionState';
import { CentralNetworkConnectionStateEnum } from './model/CentralNetworkConnectionStateEnum';
import { CentralNetworkElementChange } from './model/CentralNetworkElementChange';
import { CentralNetworkErInstance } from './model/CentralNetworkErInstance';
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
import { CloudConnectionId } from './model/CloudConnectionId';
import { CloudConnectionQuota } from './model/CloudConnectionQuota';
import { CloudConnectionRoute } from './model/CloudConnectionRoute';
import { ConnectionPoint } from './model/ConnectionPoint';
import { ConnectionPointPair } from './model/ConnectionPointPair';
import { ConnectionPointTypeEnum } from './model/ConnectionPointTypeEnum';
import { ConnectionType } from './model/ConnectionType';
import { ConnectionTypeEnum } from './model/ConnectionTypeEnum';
import { CreateAuthorisation } from './model/CreateAuthorisation';
import { CreateAuthorisationRequest } from './model/CreateAuthorisationRequest';
import { CreateAuthorisationRequestBody } from './model/CreateAuthorisationRequestBody';
import { CreateAuthorisationResponse } from './model/CreateAuthorisationResponse';
import { CreateBandwidthPackage } from './model/CreateBandwidthPackage';
import { CreateBandwidthPackageRequest } from './model/CreateBandwidthPackageRequest';
import { CreateBandwidthPackageRequestBody } from './model/CreateBandwidthPackageRequestBody';
import { CreateBandwidthPackageResponse } from './model/CreateBandwidthPackageResponse';
import { CreateCentralNetwork } from './model/CreateCentralNetwork';
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
import { CreateInterRegionBandwidth } from './model/CreateInterRegionBandwidth';
import { CreateInterRegionBandwidthRequest } from './model/CreateInterRegionBandwidthRequest';
import { CreateInterRegionBandwidthRequestBody } from './model/CreateInterRegionBandwidthRequestBody';
import { CreateInterRegionBandwidthResponse } from './model/CreateInterRegionBandwidthResponse';
import { CreateNetworkInstance } from './model/CreateNetworkInstance';
import { CreateNetworkInstanceRequest } from './model/CreateNetworkInstanceRequest';
import { CreateNetworkInstanceRequestBody } from './model/CreateNetworkInstanceRequestBody';
import { CreateNetworkInstanceResponse } from './model/CreateNetworkInstanceResponse';
import { CreatedAt } from './model/CreatedAt';
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
import { DeleteInterRegionBandwidthRequest } from './model/DeleteInterRegionBandwidthRequest';
import { DeleteInterRegionBandwidthResponse } from './model/DeleteInterRegionBandwidthResponse';
import { DeleteNetworkInstanceRequest } from './model/DeleteNetworkInstanceRequest';
import { DeleteNetworkInstanceResponse } from './model/DeleteNetworkInstanceResponse';
import { Description } from './model/Description';
import { DisassociateBandwidthPackage } from './model/DisassociateBandwidthPackage';
import { DisassociateBandwidthPackageRequest } from './model/DisassociateBandwidthPackageRequest';
import { DisassociateBandwidthPackageRequestBody } from './model/DisassociateBandwidthPackageRequestBody';
import { DisassociateBandwidthPackageResponse } from './model/DisassociateBandwidthPackageResponse';
import { DocumentTemplateVersion } from './model/DocumentTemplateVersion';
import { DocumentTemplateVersionEnum } from './model/DocumentTemplateVersionEnum';
import { DomainId } from './model/DomainId';
import { DomainIdDef } from './model/DomainIdDef';
import { EnterpriseProjectId } from './model/EnterpriseProjectId';
import { EnterpriseRouterAttachmentId } from './model/EnterpriseRouterAttachmentId';
import { EnterpriseRouterId } from './model/EnterpriseRouterId';
import { EnterpriseRouterProjectId } from './model/EnterpriseRouterProjectId';
import { EnterpriseRouterRegionId } from './model/EnterpriseRouterRegionId';
import { EnterpriseRouterTableId } from './model/EnterpriseRouterTableId';
import { GlobalConnectionBandwidthId } from './model/GlobalConnectionBandwidthId';
import { GlobalDcGatewayId } from './model/GlobalDcGatewayId';
import { GlobalDcGatewayPeerLinkId } from './model/GlobalDcGatewayPeerLinkId';
import { HostedCloudEnum } from './model/HostedCloudEnum';
import { InstanceDomainId } from './model/InstanceDomainId';
import { InstanceId } from './model/InstanceId';
import { InterRegion } from './model/InterRegion';
import { InterRegionBandwidth } from './model/InterRegionBandwidth';
import { IsFrozen } from './model/IsFrozen';
import { ListAuthorisationsRequest } from './model/ListAuthorisationsRequest';
import { ListAuthorisationsResponse } from './model/ListAuthorisationsResponse';
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
import { ListCentralNetworksRequest } from './model/ListCentralNetworksRequest';
import { ListCentralNetworksResponse } from './model/ListCentralNetworksResponse';
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
import { ListInterRegionBandwidthsRequest } from './model/ListInterRegionBandwidthsRequest';
import { ListInterRegionBandwidthsResponse } from './model/ListInterRegionBandwidthsResponse';
import { ListNetworkInstancesRequest } from './model/ListNetworkInstancesRequest';
import { ListNetworkInstancesResponse } from './model/ListNetworkInstancesResponse';
import { ListPermissionsRequest } from './model/ListPermissionsRequest';
import { ListPermissionsResponse } from './model/ListPermissionsResponse';
import { ListResponseBody } from './model/ListResponseBody';
import { LocalAreaId } from './model/LocalAreaId';
import { MultivaluedTag } from './model/MultivaluedTag';
import { Name } from './model/Name';
import { NameDef } from './model/NameDef';
import { NetworkInstance } from './model/NetworkInstance';
import { NextMarker } from './model/NextMarker';
import { NonRequiredName } from './model/NonRequiredName';
import { PageInfo } from './model/PageInfo';
import { Permission } from './model/Permission';
import { PlaneId } from './model/PlaneId';
import { PreviousMarker } from './model/PreviousMarker';
import { ProjectId } from './model/ProjectId';
import { ProjectIdDef } from './model/ProjectIdDef';
import { QuotaLimit } from './model/QuotaLimit';
import { QuotaUnit } from './model/QuotaUnit';
import { QuotaUsed } from './model/QuotaUsed';
import { RegionId } from './model/RegionId';
import { RegionIdDef } from './model/RegionIdDef';
import { RemoteAreaId } from './model/RemoteAreaId';
import { RequestId } from './model/RequestId';
import { ResourceId } from './model/ResourceId';
import { ResourceType } from './model/ResourceType';
import { ShowBandwidthPackageRequest } from './model/ShowBandwidthPackageRequest';
import { ShowBandwidthPackageResponse } from './model/ShowBandwidthPackageResponse';
import { ShowCentralNetworkGdgwAttachmentRequest } from './model/ShowCentralNetworkGdgwAttachmentRequest';
import { ShowCentralNetworkGdgwAttachmentResponse } from './model/ShowCentralNetworkGdgwAttachmentResponse';
import { ShowCentralNetworkRequest } from './model/ShowCentralNetworkRequest';
import { ShowCentralNetworkResponse } from './model/ShowCentralNetworkResponse';
import { ShowCloudConnectionRequest } from './model/ShowCloudConnectionRequest';
import { ShowCloudConnectionResponse } from './model/ShowCloudConnectionResponse';
import { ShowCloudConnectionRoutesRequest } from './model/ShowCloudConnectionRoutesRequest';
import { ShowCloudConnectionRoutesResponse } from './model/ShowCloudConnectionRoutesResponse';
import { ShowInterRegionBandwidthRequest } from './model/ShowInterRegionBandwidthRequest';
import { ShowInterRegionBandwidthResponse } from './model/ShowInterRegionBandwidthResponse';
import { ShowNetworkInstanceRequest } from './model/ShowNetworkInstanceRequest';
import { ShowNetworkInstanceResponse } from './model/ShowNetworkInstanceResponse';
import { SiteCode } from './model/SiteCode';
import { SiteCodeDef } from './model/SiteCodeDef';
import { SortDir } from './model/SortDir';
import { SpecCode } from './model/SpecCode';
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
import { UUIDDef } from './model/UUIDDef';
import { UUIDIdentifier } from './model/UUIDIdentifier';
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
import { UpdateInterRegionBandwidth } from './model/UpdateInterRegionBandwidth';
import { UpdateInterRegionBandwidthRequest } from './model/UpdateInterRegionBandwidthRequest';
import { UpdateInterRegionBandwidthRequestBody } from './model/UpdateInterRegionBandwidthRequestBody';
import { UpdateInterRegionBandwidthResponse } from './model/UpdateInterRegionBandwidthResponse';
import { UpdateNetworkInstance } from './model/UpdateNetworkInstance';
import { UpdateNetworkInstanceRequest } from './model/UpdateNetworkInstanceRequest';
import { UpdateNetworkInstanceRequestBody } from './model/UpdateNetworkInstanceRequestBody';
import { UpdateNetworkInstanceResponse } from './model/UpdateNetworkInstanceResponse';
import { UpdatedAt } from './model/UpdatedAt';
import { Version } from './model/Version';
import { VersionDef } from './model/VersionDef';

export class CcClient {
    public static newBuilder(): ClientBuilder<CcClient> {
            return new ClientBuilder<CcClient>(newClient, 'GlobalCredentials');
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
     * @param {string} id 资源的Id。
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
     * @param {number} [limit] 每页返回的个数。 取值范围：1~1000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向翻页。 翻页过程中，查询条件不能修改，包括过滤条件，排序条件，limit。
     * @param {Array<string>} [id] 根据id查询，可查询多个id。
     * @param {Array<string>} [name] 根据名字查询，可查询多个名字。
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
     * @param {number} [limit] 每页返回的个数。 取值范围：1~1000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向翻页。 翻页过程中，查询条件不能修改，包括过滤条件，排序条件，limit。
     * @param {Array<string>} [id] 根据id查询，可查询多个id。
     * @param {Array<string>} [name] 根据名字查询，可查询多个名字。
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
     * @param {string} id 资源的Id。
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
     * @param {string} id 资源的Id。
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
     * @param {string} id 资源的Id。
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
     * @param {string} id 资源的Id。
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
     * @param {number} [limit] 每页返回的个数。 取值范围：1~1000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向翻页。 翻页过程中，查询条件不能修改，包括过滤条件，排序条件，limit。
     * @param {Array<string>} [id] 根据id查询，可查询多个id。
     * @param {Array<string>} [name] 根据名字查询，可查询多个名字。
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
     * @param {string} id 资源的Id。
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
     * @param {string} id 资源的Id。
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
     * @param {string} id 资源的Id。
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
     * @param {string} id 资源的Id。
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
     * @param {number} [limit] 每页返回的个数。 取值范围：1~1000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向翻页。 翻页过程中，查询条件不能修改，包括过滤条件，排序条件，limit。
     * @param {string} [sortKey] 排序字段。
     * @param {SortDir} [sortDir] 指定排序是升序还是降序(asc为升序，desc为降序)。
     * @param {Array<string>} [id] 根据id查询，可查询多个id。
     * @param {Array<CentralNetworkPolicyStateEnum>} [state] 根据状态查询，可查询多个状态。
     * @param {Array<Version>} [version] 根据版本查询，可查询多个名字。
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
     * @param {number} [limit] 每页返回的个数。 取值范围：1~1000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向翻页。 翻页过程中，查询条件不能修改，包括过滤条件，排序条件，limit。
     * @param {string} [sortKey] 排序字段。
     * @param {SortDir} [sortDir] 指定排序是升序还是降序(asc为升序，desc为降序)。
     * @param {Array<string>} [id] 根据id查询，可查询多个id。
     * @param {Array<string>} [name] 根据名字查询，可查询多个名字。
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
     * @param {number} [limit] 每页返回的个数。 取值范围：1~1000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向翻页。 翻页过程中，查询条件不能修改，包括过滤条件，排序条件，limit。
     * @param {string} [sortKey] 排序字段。
     * @param {SortDir} [sortDir] 指定排序是升序还是降序(asc为升序，desc为降序)。
     * @param {Array<string>} [id] 根据id查询，可查询多个id。
     * @param {Array<string>} [name] 根据名字查询，可查询多个名字。
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
     * 查询中心网络GDGW附件列表。
     * 分页查询使用的参数为marker、limit。limit默认值为0，没有指定marker时返回第一条数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询中心网络GDGW附件列表
     * @param {string} centralNetworkId 中心网络的ID。
     * @param {number} [limit] 每页返回的个数。 取值范围：1~1000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向翻页。 翻页过程中，查询条件不能修改，包括过滤条件，排序条件，limit。
     * @param {string} [sortKey] 排序字段。
     * @param {SortDir} [sortDir] 指定排序是升序还是降序(asc为升序，desc为降序)。
     * @param {Array<string>} [id] 根据id查询，可查询多个id。
     * @param {Array<string>} [name] 根据名字查询，可查询多个名字。
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
     * @param {number} [limit] 每页返回的个数。 取值范围：1~1000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向翻页。 翻页过程中，查询条件不能修改，包括过滤条件，排序条件，limit。
     * @param {string} [sortKey] 排序字段。
     * @param {SortDir} [sortDir] 指定排序是升序还是降序(asc为升序，desc为降序)。
     * @param {Array<string>} [id] 根据id查询，可查询多个id。
     * @param {Array<string>} [name] 根据名字查询，可查询多个名字。
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
     * @param {number} [limit] 每页返回的个数。 取值范围：1~1000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向翻页。 翻页过程中，查询条件不能修改，包括过滤条件，排序条件，limit。
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
     * @param {string} id 资源的Id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCloudConnection(deleteCloudConnectionRequest?: DeleteCloudConnectionRequest): Promise<DeleteCloudConnectionResponse> {
        const options = ParamCreater().deleteCloudConnection(deleteCloudConnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

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
     * @param {number} [limit] 每页返回的个数。 取值范围：1~1000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向翻页。 翻页过程中，查询条件不能修改，包括过滤条件，排序条件，limit。
     * @param {Array<string>} [id] 根据id查询，可查询多个id。
     * @param {Array<string>} [name] 根据名字查询，可查询多个名字。
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
     * @param {string} id 资源的Id。
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
     * @param {string} id 资源的Id。
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
     * @param {string} id 资源的Id。
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
     * @param {string} id 资源的Id。
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
     * 查询云连接配额。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云连接配额
     * @param {'cloud_connection' | 'cloud_connection_region' | 'cloud_connection_route' | 'region_network_instance'} quotaType 配额类型： - cloud_connection: 可加载的云连接实例数 - cloud_connection_region: 某云连接实例下可加载的Region数 - cloud_connection_route: 某云连接实例下可加载的路由数 - region_network_instance: 某云连接实例下某个Region下可加载的网络实例数
     * @param {number} [limit] 每页返回的个数。 取值范围：1~1000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向翻页。 翻页过程中，查询条件不能修改，包括过滤条件，排序条件，limit。
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
     * @param {number} [limit] 每页返回的个数。 取值范围：1~1000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向翻页。 翻页过程中，查询条件不能修改，包括过滤条件，排序条件，limit。
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
     * @param {string} id 资源的Id。
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
     * @param {string} id 资源的Id。
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
     * @param {number} [limit] 每页返回的个数。 取值范围：1~1000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向翻页。 翻页过程中，查询条件不能修改，包括过滤条件，排序条件，limit。
     * @param {Array<string>} [id] 根据id查询，可查询多个id。
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
     * @param {string} id 资源的Id。
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
     * @param {string} id 资源的Id。
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
     * @param {string} id 资源的Id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteNetworkInstance(deleteNetworkInstanceRequest?: DeleteNetworkInstanceRequest): Promise<DeleteNetworkInstanceResponse> {
        const options = ParamCreater().deleteNetworkInstance(deleteNetworkInstanceRequest);

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
     * @summary 查询网络实例列表
     * @param {number} [limit] 每页返回的个数。 取值范围：1~1000。
     * @param {string} [marker] 翻页信息，从上次API调用返回的翻页数据中获取，可填写前一页marker或者后一页marker，填入前一页previous_marker就向前翻页，后一页next_marker就向翻页。 翻页过程中，查询条件不能修改，包括过滤条件，排序条件，limit。
     * @param {Array<string>} [id] 根据id查询，可查询多个id。
     * @param {Array<string>} [name] 根据名字查询，可查询多个名字。
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
     * @param {string} id 资源的Id。
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
     * @param {string} id 资源的Id。
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

            if (listCentralNetworkCapabilitiesRequest !== null && listCentralNetworkCapabilitiesRequest !== undefined) {
                if (listCentralNetworkCapabilitiesRequest instanceof ListCentralNetworkCapabilitiesRequest) {
                    capability = listCentralNetworkCapabilitiesRequest.capability;
                } else {
                    capability = listCentralNetworkCapabilitiesRequest['capability'];
                }
            }

        
            if (capability !== null && capability !== undefined) {
                localVarQueryParameter['capability'] = capability;
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
            
            let quotaType;
            
            let limit;
            
            let marker;
            
            let cloudConnectionId;
            
            let regionId;

            if (listCloudConnectionQuotasRequest !== null && listCloudConnectionQuotasRequest !== undefined) {
                if (listCloudConnectionQuotasRequest instanceof ListCloudConnectionQuotasRequest) {
                    quotaType = listCloudConnectionQuotasRequest.quotaType;
                    limit = listCloudConnectionQuotasRequest.limit;
                    marker = listCloudConnectionQuotasRequest.marker;
                    cloudConnectionId = listCloudConnectionQuotasRequest.cloudConnectionId;
                    regionId = listCloudConnectionQuotasRequest.regionId;
                } else {
                    quotaType = listCloudConnectionQuotasRequest['quota_type'];
                    limit = listCloudConnectionQuotasRequest['limit'];
                    marker = listCloudConnectionQuotasRequest['marker'];
                    cloudConnectionId = listCloudConnectionQuotasRequest['cloud_connection_id'];
                    regionId = listCloudConnectionQuotasRequest['region_id'];
                }
            }

        
            if (quotaType === null || quotaType === undefined) {
                throw new RequiredError('quotaType','Required parameter quotaType was null or undefined when calling listCloudConnectionQuotas.');
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
         * 查询云连接列表。
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