import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AcceptResourceShareInvitationRequest } from './model/AcceptResourceShareInvitationRequest';
import { AcceptResourceShareInvitationResponse } from './model/AcceptResourceShareInvitationResponse';
import { AssociatePermissionReqBody } from './model/AssociatePermissionReqBody';
import { AssociateResourceSharePermissionRequest } from './model/AssociateResourceSharePermissionRequest';
import { AssociateResourceSharePermissionResponse } from './model/AssociateResourceSharePermissionResponse';
import { AssociateResourceShareRequest } from './model/AssociateResourceShareRequest';
import { AssociateResourceShareResponse } from './model/AssociateResourceShareResponse';
import { AssociatedPermission } from './model/AssociatedPermission';
import { BatchCreateResourceShareTagsRequest } from './model/BatchCreateResourceShareTagsRequest';
import { BatchCreateResourceShareTagsResponse } from './model/BatchCreateResourceShareTagsResponse';
import { BatchDeleteResourceShareTagsRequest } from './model/BatchDeleteResourceShareTagsRequest';
import { BatchDeleteResourceShareTagsResponse } from './model/BatchDeleteResourceShareTagsResponse';
import { CreateResourceShareReqBody } from './model/CreateResourceShareReqBody';
import { CreateResourceShareRequest } from './model/CreateResourceShareRequest';
import { CreateResourceShareResponse } from './model/CreateResourceShareResponse';
import { DeleteResourceShareRequest } from './model/DeleteResourceShareRequest';
import { DeleteResourceShareResponse } from './model/DeleteResourceShareResponse';
import { DisableOrganizationShareRequest } from './model/DisableOrganizationShareRequest';
import { DisableOrganizationShareResponse } from './model/DisableOrganizationShareResponse';
import { DisassociatePermissionReqBody } from './model/DisassociatePermissionReqBody';
import { DisassociateResourceSharePermissionRequest } from './model/DisassociateResourceSharePermissionRequest';
import { DisassociateResourceSharePermissionResponse } from './model/DisassociateResourceSharePermissionResponse';
import { DisassociateResourceShareRequest } from './model/DisassociateResourceShareRequest';
import { DisassociateResourceShareResponse } from './model/DisassociateResourceShareResponse';
import { EnableOrganizationShareRequest } from './model/EnableOrganizationShareRequest';
import { EnableOrganizationShareResponse } from './model/EnableOrganizationShareResponse';
import { ListPermissionVersionsRequest } from './model/ListPermissionVersionsRequest';
import { ListPermissionVersionsResponse } from './model/ListPermissionVersionsResponse';
import { ListPermissionsRequest } from './model/ListPermissionsRequest';
import { ListPermissionsResponse } from './model/ListPermissionsResponse';
import { ListQuotaRequest } from './model/ListQuotaRequest';
import { ListQuotaResponse } from './model/ListQuotaResponse';
import { ListResourceSharePermissionsRequest } from './model/ListResourceSharePermissionsRequest';
import { ListResourceSharePermissionsResponse } from './model/ListResourceSharePermissionsResponse';
import { ListResourceShareTagsRequest } from './model/ListResourceShareTagsRequest';
import { ListResourceShareTagsResponse } from './model/ListResourceShareTagsResponse';
import { ListResourceSharesByTagsRequest } from './model/ListResourceSharesByTagsRequest';
import { ListResourceSharesByTagsResponse } from './model/ListResourceSharesByTagsResponse';
import { ListResourceTypesRequest } from './model/ListResourceTypesRequest';
import { ListResourceTypesResponse } from './model/ListResourceTypesResponse';
import { Match } from './model/Match';
import { PageInfo } from './model/PageInfo';
import { PageInfoMarkerByKey } from './model/PageInfoMarkerByKey';
import { Permission } from './model/Permission';
import { PermissionSummary } from './model/PermissionSummary';
import { QuotaResourcesDto } from './model/QuotaResourcesDto';
import { Quotas } from './model/Quotas';
import { RejectResourceShareInvitationRequest } from './model/RejectResourceShareInvitationRequest';
import { RejectResourceShareInvitationResponse } from './model/RejectResourceShareInvitationResponse';
import { ResourceDTO } from './model/ResourceDTO';
import { ResourceShare } from './model/ResourceShare';
import { ResourceShareAssociation } from './model/ResourceShareAssociation';
import { ResourceShareAssociationReqBody } from './model/ResourceShareAssociationReqBody';
import { ResourceShareInvitation } from './model/ResourceShareInvitation';
import { ResourceSharesByTagsReqBody } from './model/ResourceSharesByTagsReqBody';
import { ResourceTypesSummary } from './model/ResourceTypesSummary';
import { SearchResourceShareAssociationsReqBody } from './model/SearchResourceShareAssociationsReqBody';
import { SearchResourceShareAssociationsRequest } from './model/SearchResourceShareAssociationsRequest';
import { SearchResourceShareAssociationsResponse } from './model/SearchResourceShareAssociationsResponse';
import { SearchResourceShareCountByTagsRequest } from './model/SearchResourceShareCountByTagsRequest';
import { SearchResourceShareCountByTagsResponse } from './model/SearchResourceShareCountByTagsResponse';
import { SearchResourceShareInvitationReqBody } from './model/SearchResourceShareInvitationReqBody';
import { SearchResourceShareInvitationRequest } from './model/SearchResourceShareInvitationRequest';
import { SearchResourceShareInvitationResponse } from './model/SearchResourceShareInvitationResponse';
import { SearchResourceSharesReqBody } from './model/SearchResourceSharesReqBody';
import { SearchResourceSharesRequest } from './model/SearchResourceSharesRequest';
import { SearchResourceSharesResponse } from './model/SearchResourceSharesResponse';
import { SearchSharedPrincipalsReqBody } from './model/SearchSharedPrincipalsReqBody';
import { SearchSharedPrincipalsRequest } from './model/SearchSharedPrincipalsRequest';
import { SearchSharedPrincipalsResponse } from './model/SearchSharedPrincipalsResponse';
import { SearchSharedResourcesReqBody } from './model/SearchSharedResourcesReqBody';
import { SearchSharedResourcesRequest } from './model/SearchSharedResourcesRequest';
import { SearchSharedResourcesResponse } from './model/SearchSharedResourcesResponse';
import { SharedPrincipal } from './model/SharedPrincipal';
import { SharedResource } from './model/SharedResource';
import { ShowOrganizationShareRequest } from './model/ShowOrganizationShareRequest';
import { ShowOrganizationShareResponse } from './model/ShowOrganizationShareResponse';
import { ShowPermissionRequest } from './model/ShowPermissionRequest';
import { ShowPermissionResponse } from './model/ShowPermissionResponse';
import { Tag } from './model/Tag';
import { TagDTO } from './model/TagDTO';
import { TagFilter } from './model/TagFilter';
import { TagResourceReqBody } from './model/TagResourceReqBody';
import { Untag } from './model/Untag';
import { UntagResourceReqBody } from './model/UntagResourceReqBody';
import { UpdateResourceShareReqBody } from './model/UpdateResourceShareReqBody';
import { UpdateResourceShareRequest } from './model/UpdateResourceShareRequest';
import { UpdateResourceShareResponse } from './model/UpdateResourceShareResponse';

export class RamClient {
    public static newBuilder(): ClientBuilder<RamClient> {
            let client = new ClientBuilder<RamClient>(newClient);
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
     * 为资源共享实例中包含的资源类型绑定或替换共享资源权限。 对于资源共享实例中的每一种资源类型，您可以设置唯一权限。仅当资源共享实例中当前没有该资源类型的资源时，您才能绑定新的共享资源权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 绑定或替换共享资源权限
     * @param {string} resourceShareId 资源共享实例的ID。
     * @param {AssociatePermissionReqBody} associatePermissionReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateResourceSharePermission(associateResourceSharePermissionRequest?: AssociateResourceSharePermissionRequest): Promise<AssociateResourceSharePermissionResponse> {
        const options = ParamCreater().associateResourceSharePermission(associateResourceSharePermissionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 移除资源共享实例绑定的共享资源权限。权限更改立即生效。只有当目前资源共享实例中没有绑定相关资源类型时，您才能从资源共享实例中移除共享资源权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 移除共享资源权限
     * @param {string} resourceShareId 资源共享实例的ID。
     * @param {DisassociatePermissionReqBody} disassociatePermissionReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disassociateResourceSharePermission(disassociateResourceSharePermissionRequest?: DisassociateResourceSharePermissionRequest): Promise<DisassociateResourceSharePermissionResponse> {
        const options = ParamCreater().disassociateResourceSharePermission(disassociateResourceSharePermissionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 检索资源共享实例关联的共享资源权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 检索绑定的共享资源权限
     * @param {string} resourceShareId 资源共享实例的ID。
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {string} [permissionName] 共享资源权限的名称。
     * @param {number} [limit] 分页页面的最大值。
     * @param {string} [marker] 页面标记。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listResourceSharePermissions(listResourceSharePermissionsRequest?: ListResourceSharePermissionsRequest): Promise<ListResourceSharePermissionsResponse> {
        const options = ParamCreater().listResourceSharePermissions(listResourceSharePermissionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询当前账号的资源共享配额信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源共享的配额
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listQuota(listQuotaRequest?: ListQuotaRequest): Promise<ListQuotaResponse> {
        const options = ParamCreater().listQuota(listQuotaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询已对接云服务的资源类型和区域等信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 检索云服务资源类型
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {number} [limit] 分页页面的最大值。
     * @param {string} [marker] 页面标记。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listResourceTypes(listResourceTypesRequest?: ListResourceTypesRequest): Promise<ListResourceTypesResponse> {
        const options = ParamCreater().listResourceTypes(listResourceTypesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 关闭与组织共享资源。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭与组织共享
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disableOrganizationShare(disableOrganizationShareRequest?: DisableOrganizationShareRequest): Promise<DisableOrganizationShareResponse> {
        const options = ParamCreater().disableOrganizationShare(disableOrganizationShareRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启用与组织共享资源。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启用与组织共享
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enableOrganizationShare(enableOrganizationShareRequest?: EnableOrganizationShareRequest): Promise<EnableOrganizationShareResponse> {
        const options = ParamCreater().enableOrganizationShare(enableOrganizationShareRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 检索是否启用与组织共享资源。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 检索是否启用与组织共享
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showOrganizationShare(showOrganizationShareRequest?: ShowOrganizationShareRequest): Promise<ShowOrganizationShareResponse> {
        const options = ParamCreater().showOrganizationShare(showOrganizationShareRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取权限的所有版本。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取权限的所有版本
     * @param {string} permissionId 共享资源权限的ID。
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {number} [limit] 分页页面的最大值。
     * @param {string} [marker] 页面标记。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPermissionVersions(listPermissionVersionsRequest?: ListPermissionVersionsRequest): Promise<ListPermissionVersionsResponse> {
        const options = ParamCreater().listPermissionVersions(listPermissionVersionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 检索指定资源类型的共享资源权限列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 检索共享资源权限列表
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {number} [limit] 分页页面的最大值。
     * @param {string} [marker] 页面标记。
     * @param {string} [resourceType] 资源类型的名称。
     * @param {'RAM_MANAGED' | 'CUSTOMER_MANAGED' | 'ALL'} [permissionType] 权限类型。RAM_MANAGED表示RAM托管的权限，CUSTOMER_MANAGED表示租户创建的自定义的权限，ALL表示所有的权限。
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
     * 检索指定资源类型的共享资源指定版本的权限内容，如果不指定权限版本，则返回默认版本的权限内容。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 检索资源共享权限内容
     * @param {string} permissionId 共享资源权限的ID。
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {number} [permissionVersion] 资源权限版本。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPermission(showPermissionRequest?: ShowPermissionRequest): Promise<ShowPermissionResponse> {
        const options = ParamCreater().showPermission(showPermissionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 检索共享资源的使用者。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 检索资源使用者
     * @param {SearchSharedPrincipalsReqBody} searchSharedPrincipalsReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchSharedPrincipals(searchSharedPrincipalsRequest?: SearchSharedPrincipalsRequest): Promise<SearchSharedPrincipalsResponse> {
        const options = ParamCreater().searchSharedPrincipals(searchSharedPrincipalsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 检索您共享的或共享给您的资源。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 检索共享的资源
     * @param {SearchSharedResourcesReqBody} searchSharedResourcesReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchSharedResources(searchSharedResourcesRequest?: SearchSharedResourcesRequest): Promise<SearchSharedResourcesResponse> {
        const options = ParamCreater().searchSharedResources(searchSharedResourcesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建一个资源共享实例。您可以指定需要共享的资源列表，资源使用者列表，以及授予资源使用者的权限列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建资源共享实例
     * @param {CreateResourceShareReqBody} createResourceShareReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createResourceShare(createResourceShareRequest?: CreateResourceShareRequest): Promise<CreateResourceShareResponse> {
        const options = ParamCreater().createResourceShare(createResourceShareRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定的资源共享实例。此操作不会删除实体资源，仅停止向其他账号共享资源。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除资源共享实例
     * @param {string} resourceShareId 资源共享实例的ID。
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteResourceShare(deleteResourceShareRequest?: DeleteResourceShareRequest): Promise<DeleteResourceShareResponse> {
        const options = ParamCreater().deleteResourceShare(deleteResourceShareRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 检索您创建的或者共享给您的资源共享实例详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 检索资源共享实例
     * @param {SearchResourceSharesReqBody} searchResourceSharesReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchResourceShares(searchResourceSharesRequest?: SearchResourceSharesRequest): Promise<SearchResourceSharesResponse> {
        const options = ParamCreater().searchResourceShares(searchResourceSharesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改资源共享实例的特定属性。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新资源共享实例
     * @param {string} resourceShareId 资源共享实例的ID。
     * @param {UpdateResourceShareReqBody} updateResourceShareReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateResourceShare(updateResourceShareRequest?: UpdateResourceShareRequest): Promise<UpdateResourceShareResponse> {
        const options = ParamCreater().updateResourceShare(updateResourceShareRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 向资源共享实例绑定指定的资源使用者列表或共享资源列表。对于新增的共享资源，有权访问此资源共享实例的资源使用者获得该共享资源的访问权限。对于新增的资源使用者，获得对此资源共享实例中共享资源的访问权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 绑定资源使用者和共享资源
     * @param {string} resourceShareId 资源共享实例的ID。
     * @param {ResourceShareAssociationReqBody} resourceShareAssociationReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateResourceShare(associateResourceShareRequest?: AssociateResourceShareRequest): Promise<AssociateResourceShareResponse> {
        const options = ParamCreater().associateResourceShare(associateResourceShareRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将指定的资源使用者或共享资源从指定的资源共享实例中移除。资源使用者也可以从指定的资源共享实例中主动退出。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 移除资源使用者或共享资源
     * @param {string} resourceShareId 资源共享实例的ID。
     * @param {ResourceShareAssociationReqBody} resourceShareAssociationReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disassociateResourceShare(disassociateResourceShareRequest?: DisassociateResourceShareRequest): Promise<DisassociateResourceShareResponse> {
        const options = ParamCreater().disassociateResourceShare(disassociateResourceShareRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 检索您拥有的资源共享实例中绑定的共享资源和资源使用者。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 检索绑定的资源使用者和共享资源
     * @param {SearchResourceShareAssociationsReqBody} searchResourceShareAssociationsReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchResourceShareAssociations(searchResourceShareAssociationsRequest?: SearchResourceShareAssociationsRequest): Promise<SearchResourceShareAssociationsResponse> {
        const options = ParamCreater().searchResourceShareAssociations(searchResourceShareAssociationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 接受来自其他账号的资源共享邀请。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 接受共享邀请
     * @param {string} resourceShareInvitationId 资源共享邀请的ID。
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public acceptResourceShareInvitation(acceptResourceShareInvitationRequest?: AcceptResourceShareInvitationRequest): Promise<AcceptResourceShareInvitationResponse> {
        const options = ParamCreater().acceptResourceShareInvitation(acceptResourceShareInvitationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 拒绝来自其他账号的资源共享邀请。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 拒绝共享邀请
     * @param {string} resourceShareInvitationId 资源共享邀请的ID。
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public rejectResourceShareInvitation(rejectResourceShareInvitationRequest?: RejectResourceShareInvitationRequest): Promise<RejectResourceShareInvitationResponse> {
        const options = ParamCreater().rejectResourceShareInvitation(rejectResourceShareInvitationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过条件检索资源共享邀请。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 检索共享邀请
     * @param {SearchResourceShareInvitationReqBody} searchResourceShareInvitationReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchResourceShareInvitation(searchResourceShareInvitationRequest?: SearchResourceShareInvitationRequest): Promise<SearchResourceShareInvitationResponse> {
        const options = ParamCreater().searchResourceShareInvitation(searchResourceShareInvitationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 资源共享实例增加标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 资源共享实例增加标签
     * @param {string} resourceShareId 资源共享实例的ID。
     * @param {TagResourceReqBody} tagResourceReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateResourceShareTags(batchCreateResourceShareTagsRequest?: BatchCreateResourceShareTagsRequest): Promise<BatchCreateResourceShareTagsResponse> {
        const options = ParamCreater().batchCreateResourceShareTags(batchCreateResourceShareTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除资源共享实例指定的标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除资源共享实例的标签
     * @param {string} resourceShareId 资源共享实例的ID。
     * @param {UntagResourceReqBody} untagResourceReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteResourceShareTags(batchDeleteResourceShareTagsRequest?: BatchDeleteResourceShareTagsRequest): Promise<BatchDeleteResourceShareTagsResponse> {
        const options = ParamCreater().batchDeleteResourceShareTags(batchDeleteResourceShareTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源共享实例已使用标签的列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询已使用的标签列表
     * @param {number} [limit] 分页页面的最大值。
     * @param {string} [marker] 页面标记。
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listResourceShareTags(listResourceShareTagsRequest?: ListResourceShareTagsRequest): Promise<ListResourceShareTagsResponse> {
        const options = ParamCreater().listResourceShareTags(listResourceShareTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据标签信息查询资源共享实例列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据标签信息查询实例列表
     * @param {ResourceSharesByTagsReqBody} resourceSharesByTagsReqBody 
     * @param {number} [limit] 分页页面的最大值。
     * @param {string} [offset] 分页标记。
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listResourceSharesByTags(listResourceSharesByTagsRequest?: ListResourceSharesByTagsRequest): Promise<ListResourceSharesByTagsResponse> {
        const options = ParamCreater().listResourceSharesByTags(listResourceSharesByTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据标签信息查询资源共享实例数量。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据标签信息查询实例数量
     * @param {ResourceSharesByTagsReqBody} resourceSharesByTagsReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchResourceShareCountByTags(searchResourceShareCountByTagsRequest?: SearchResourceShareCountByTagsRequest): Promise<SearchResourceShareCountByTagsResponse> {
        const options = ParamCreater().searchResourceShareCountByTags(searchResourceShareCountByTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 为资源共享实例中包含的资源类型绑定或替换共享资源权限。 对于资源共享实例中的每一种资源类型，您可以设置唯一权限。仅当资源共享实例中当前没有该资源类型的资源时，您才能绑定新的共享资源权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateResourceSharePermission(associateResourceSharePermissionRequest?: AssociateResourceSharePermissionRequest) {
            const options = {
                method: "POST",
                url: "/v1/resource-shares/{resource_share_id}/associate-permission",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceShareId;
            
            let xSecurityToken;

            if (associateResourceSharePermissionRequest !== null && associateResourceSharePermissionRequest !== undefined) {
                if (associateResourceSharePermissionRequest instanceof AssociateResourceSharePermissionRequest) {
                    resourceShareId = associateResourceSharePermissionRequest.resourceShareId;
                    body = associateResourceSharePermissionRequest.body
                    xSecurityToken = associateResourceSharePermissionRequest.xSecurityToken;
                } else {
                    resourceShareId = associateResourceSharePermissionRequest['resource_share_id'];
                    body = associateResourceSharePermissionRequest['body'];
                    xSecurityToken = associateResourceSharePermissionRequest['X-Security-Token'];
                }
            }

        
            if (resourceShareId === null || resourceShareId === undefined) {
            throw new RequiredError('resourceShareId','Required parameter resourceShareId was null or undefined when calling associateResourceSharePermission.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_share_id': resourceShareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 移除资源共享实例绑定的共享资源权限。权限更改立即生效。只有当目前资源共享实例中没有绑定相关资源类型时，您才能从资源共享实例中移除共享资源权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disassociateResourceSharePermission(disassociateResourceSharePermissionRequest?: DisassociateResourceSharePermissionRequest) {
            const options = {
                method: "POST",
                url: "/v1/resource-shares/{resource_share_id}/disassociate-permission",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceShareId;
            
            let xSecurityToken;

            if (disassociateResourceSharePermissionRequest !== null && disassociateResourceSharePermissionRequest !== undefined) {
                if (disassociateResourceSharePermissionRequest instanceof DisassociateResourceSharePermissionRequest) {
                    resourceShareId = disassociateResourceSharePermissionRequest.resourceShareId;
                    body = disassociateResourceSharePermissionRequest.body
                    xSecurityToken = disassociateResourceSharePermissionRequest.xSecurityToken;
                } else {
                    resourceShareId = disassociateResourceSharePermissionRequest['resource_share_id'];
                    body = disassociateResourceSharePermissionRequest['body'];
                    xSecurityToken = disassociateResourceSharePermissionRequest['X-Security-Token'];
                }
            }

        
            if (resourceShareId === null || resourceShareId === undefined) {
            throw new RequiredError('resourceShareId','Required parameter resourceShareId was null or undefined when calling disassociateResourceSharePermission.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_share_id': resourceShareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 检索资源共享实例关联的共享资源权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listResourceSharePermissions(listResourceSharePermissionsRequest?: ListResourceSharePermissionsRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-shares/{resource_share_id}/associated-permissions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let resourceShareId;
            
            let xSecurityToken;
            
            let permissionName;
            
            let limit;
            
            let marker;

            if (listResourceSharePermissionsRequest !== null && listResourceSharePermissionsRequest !== undefined) {
                if (listResourceSharePermissionsRequest instanceof ListResourceSharePermissionsRequest) {
                    resourceShareId = listResourceSharePermissionsRequest.resourceShareId;
                    xSecurityToken = listResourceSharePermissionsRequest.xSecurityToken;
                    permissionName = listResourceSharePermissionsRequest.permissionName;
                    limit = listResourceSharePermissionsRequest.limit;
                    marker = listResourceSharePermissionsRequest.marker;
                } else {
                    resourceShareId = listResourceSharePermissionsRequest['resource_share_id'];
                    xSecurityToken = listResourceSharePermissionsRequest['X-Security-Token'];
                    permissionName = listResourceSharePermissionsRequest['permission_name'];
                    limit = listResourceSharePermissionsRequest['limit'];
                    marker = listResourceSharePermissionsRequest['marker'];
                }
            }

        
            if (resourceShareId === null || resourceShareId === undefined) {
            throw new RequiredError('resourceShareId','Required parameter resourceShareId was null or undefined when calling listResourceSharePermissions.');
            }
            if (permissionName !== null && permissionName !== undefined) {
                localVarQueryParameter['permission_name'] = permissionName;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'resource_share_id': resourceShareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询当前账号的资源共享配额信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listQuota(listQuotaRequest?: ListQuotaRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-shares/quotas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xSecurityToken;

            if (listQuotaRequest !== null && listQuotaRequest !== undefined) {
                if (listQuotaRequest instanceof ListQuotaRequest) {
                    xSecurityToken = listQuotaRequest.xSecurityToken;
                } else {
                    xSecurityToken = listQuotaRequest['X-Security-Token'];
                }
            }

        
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询已对接云服务的资源类型和区域等信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listResourceTypes(listResourceTypesRequest?: ListResourceTypesRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-types",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xSecurityToken;
            
            let limit;
            
            let marker;

            if (listResourceTypesRequest !== null && listResourceTypesRequest !== undefined) {
                if (listResourceTypesRequest instanceof ListResourceTypesRequest) {
                    xSecurityToken = listResourceTypesRequest.xSecurityToken;
                    limit = listResourceTypesRequest.limit;
                    marker = listResourceTypesRequest.marker;
                } else {
                    xSecurityToken = listResourceTypesRequest['X-Security-Token'];
                    limit = listResourceTypesRequest['limit'];
                    marker = listResourceTypesRequest['marker'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 关闭与组织共享资源。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disableOrganizationShare(disableOrganizationShareRequest?: DisableOrganizationShareRequest) {
            const options = {
                method: "POST",
                url: "/v1/organization-share/disable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xSecurityToken;

            if (disableOrganizationShareRequest !== null && disableOrganizationShareRequest !== undefined) {
                if (disableOrganizationShareRequest instanceof DisableOrganizationShareRequest) {
                    xSecurityToken = disableOrganizationShareRequest.xSecurityToken;
                } else {
                    xSecurityToken = disableOrganizationShareRequest['X-Security-Token'];
                }
            }

        
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 启用与组织共享资源。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enableOrganizationShare(enableOrganizationShareRequest?: EnableOrganizationShareRequest) {
            const options = {
                method: "POST",
                url: "/v1/organization-share/enable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xSecurityToken;

            if (enableOrganizationShareRequest !== null && enableOrganizationShareRequest !== undefined) {
                if (enableOrganizationShareRequest instanceof EnableOrganizationShareRequest) {
                    xSecurityToken = enableOrganizationShareRequest.xSecurityToken;
                } else {
                    xSecurityToken = enableOrganizationShareRequest['X-Security-Token'];
                }
            }

        
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 检索是否启用与组织共享资源。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showOrganizationShare(showOrganizationShareRequest?: ShowOrganizationShareRequest) {
            const options = {
                method: "GET",
                url: "/v1/organization-share",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xSecurityToken;

            if (showOrganizationShareRequest !== null && showOrganizationShareRequest !== undefined) {
                if (showOrganizationShareRequest instanceof ShowOrganizationShareRequest) {
                    xSecurityToken = showOrganizationShareRequest.xSecurityToken;
                } else {
                    xSecurityToken = showOrganizationShareRequest['X-Security-Token'];
                }
            }

        
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取权限的所有版本。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPermissionVersions(listPermissionVersionsRequest?: ListPermissionVersionsRequest) {
            const options = {
                method: "GET",
                url: "/v1/permissions/{permission_id}/versions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let permissionId;
            
            let xSecurityToken;
            
            let limit;
            
            let marker;

            if (listPermissionVersionsRequest !== null && listPermissionVersionsRequest !== undefined) {
                if (listPermissionVersionsRequest instanceof ListPermissionVersionsRequest) {
                    permissionId = listPermissionVersionsRequest.permissionId;
                    xSecurityToken = listPermissionVersionsRequest.xSecurityToken;
                    limit = listPermissionVersionsRequest.limit;
                    marker = listPermissionVersionsRequest.marker;
                } else {
                    permissionId = listPermissionVersionsRequest['permission_id'];
                    xSecurityToken = listPermissionVersionsRequest['X-Security-Token'];
                    limit = listPermissionVersionsRequest['limit'];
                    marker = listPermissionVersionsRequest['marker'];
                }
            }

        
            if (permissionId === null || permissionId === undefined) {
            throw new RequiredError('permissionId','Required parameter permissionId was null or undefined when calling listPermissionVersions.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'permission_id': permissionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 检索指定资源类型的共享资源权限列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPermissions(listPermissionsRequest?: ListPermissionsRequest) {
            const options = {
                method: "GET",
                url: "/v1/permissions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xSecurityToken;
            
            let limit;
            
            let marker;
            
            let resourceType;
            
            let permissionType;

            if (listPermissionsRequest !== null && listPermissionsRequest !== undefined) {
                if (listPermissionsRequest instanceof ListPermissionsRequest) {
                    xSecurityToken = listPermissionsRequest.xSecurityToken;
                    limit = listPermissionsRequest.limit;
                    marker = listPermissionsRequest.marker;
                    resourceType = listPermissionsRequest.resourceType;
                    permissionType = listPermissionsRequest.permissionType;
                } else {
                    xSecurityToken = listPermissionsRequest['X-Security-Token'];
                    limit = listPermissionsRequest['limit'];
                    marker = listPermissionsRequest['marker'];
                    resourceType = listPermissionsRequest['resource_type'];
                    permissionType = listPermissionsRequest['permission_type'];
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
            if (permissionType !== null && permissionType !== undefined) {
                localVarQueryParameter['permission_type'] = permissionType;
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 检索指定资源类型的共享资源指定版本的权限内容，如果不指定权限版本，则返回默认版本的权限内容。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPermission(showPermissionRequest?: ShowPermissionRequest) {
            const options = {
                method: "GET",
                url: "/v1/permissions/{permission_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let permissionId;
            
            let xSecurityToken;
            
            let permissionVersion;

            if (showPermissionRequest !== null && showPermissionRequest !== undefined) {
                if (showPermissionRequest instanceof ShowPermissionRequest) {
                    permissionId = showPermissionRequest.permissionId;
                    xSecurityToken = showPermissionRequest.xSecurityToken;
                    permissionVersion = showPermissionRequest.permissionVersion;
                } else {
                    permissionId = showPermissionRequest['permission_id'];
                    xSecurityToken = showPermissionRequest['X-Security-Token'];
                    permissionVersion = showPermissionRequest['permission_version'];
                }
            }

        
            if (permissionId === null || permissionId === undefined) {
            throw new RequiredError('permissionId','Required parameter permissionId was null or undefined when calling showPermission.');
            }
            if (permissionVersion !== null && permissionVersion !== undefined) {
                localVarQueryParameter['permission_version'] = permissionVersion;
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'permission_id': permissionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 检索共享资源的使用者。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchSharedPrincipals(searchSharedPrincipalsRequest?: SearchSharedPrincipalsRequest) {
            const options = {
                method: "POST",
                url: "/v1/shared-principals/search",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSecurityToken;

            if (searchSharedPrincipalsRequest !== null && searchSharedPrincipalsRequest !== undefined) {
                if (searchSharedPrincipalsRequest instanceof SearchSharedPrincipalsRequest) {
                    body = searchSharedPrincipalsRequest.body
                    xSecurityToken = searchSharedPrincipalsRequest.xSecurityToken;
                } else {
                    body = searchSharedPrincipalsRequest['body'];
                    xSecurityToken = searchSharedPrincipalsRequest['X-Security-Token'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 检索您共享的或共享给您的资源。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchSharedResources(searchSharedResourcesRequest?: SearchSharedResourcesRequest) {
            const options = {
                method: "POST",
                url: "/v1/shared-resources/search",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSecurityToken;

            if (searchSharedResourcesRequest !== null && searchSharedResourcesRequest !== undefined) {
                if (searchSharedResourcesRequest instanceof SearchSharedResourcesRequest) {
                    body = searchSharedResourcesRequest.body
                    xSecurityToken = searchSharedResourcesRequest.xSecurityToken;
                } else {
                    body = searchSharedResourcesRequest['body'];
                    xSecurityToken = searchSharedResourcesRequest['X-Security-Token'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建一个资源共享实例。您可以指定需要共享的资源列表，资源使用者列表，以及授予资源使用者的权限列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createResourceShare(createResourceShareRequest?: CreateResourceShareRequest) {
            const options = {
                method: "POST",
                url: "/v1/resource-shares",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSecurityToken;

            if (createResourceShareRequest !== null && createResourceShareRequest !== undefined) {
                if (createResourceShareRequest instanceof CreateResourceShareRequest) {
                    body = createResourceShareRequest.body
                    xSecurityToken = createResourceShareRequest.xSecurityToken;
                } else {
                    body = createResourceShareRequest['body'];
                    xSecurityToken = createResourceShareRequest['X-Security-Token'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定的资源共享实例。此操作不会删除实体资源，仅停止向其他账号共享资源。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteResourceShare(deleteResourceShareRequest?: DeleteResourceShareRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/resource-shares/{resource_share_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceShareId;
            
            let xSecurityToken;

            if (deleteResourceShareRequest !== null && deleteResourceShareRequest !== undefined) {
                if (deleteResourceShareRequest instanceof DeleteResourceShareRequest) {
                    resourceShareId = deleteResourceShareRequest.resourceShareId;
                    xSecurityToken = deleteResourceShareRequest.xSecurityToken;
                } else {
                    resourceShareId = deleteResourceShareRequest['resource_share_id'];
                    xSecurityToken = deleteResourceShareRequest['X-Security-Token'];
                }
            }

        
            if (resourceShareId === null || resourceShareId === undefined) {
            throw new RequiredError('resourceShareId','Required parameter resourceShareId was null or undefined when calling deleteResourceShare.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'resource_share_id': resourceShareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 检索您创建的或者共享给您的资源共享实例详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchResourceShares(searchResourceSharesRequest?: SearchResourceSharesRequest) {
            const options = {
                method: "POST",
                url: "/v1/resource-shares/search",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSecurityToken;

            if (searchResourceSharesRequest !== null && searchResourceSharesRequest !== undefined) {
                if (searchResourceSharesRequest instanceof SearchResourceSharesRequest) {
                    body = searchResourceSharesRequest.body
                    xSecurityToken = searchResourceSharesRequest.xSecurityToken;
                } else {
                    body = searchResourceSharesRequest['body'];
                    xSecurityToken = searchResourceSharesRequest['X-Security-Token'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改资源共享实例的特定属性。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateResourceShare(updateResourceShareRequest?: UpdateResourceShareRequest) {
            const options = {
                method: "PUT",
                url: "/v1/resource-shares/{resource_share_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceShareId;
            
            let xSecurityToken;

            if (updateResourceShareRequest !== null && updateResourceShareRequest !== undefined) {
                if (updateResourceShareRequest instanceof UpdateResourceShareRequest) {
                    resourceShareId = updateResourceShareRequest.resourceShareId;
                    body = updateResourceShareRequest.body
                    xSecurityToken = updateResourceShareRequest.xSecurityToken;
                } else {
                    resourceShareId = updateResourceShareRequest['resource_share_id'];
                    body = updateResourceShareRequest['body'];
                    xSecurityToken = updateResourceShareRequest['X-Security-Token'];
                }
            }

        
            if (resourceShareId === null || resourceShareId === undefined) {
            throw new RequiredError('resourceShareId','Required parameter resourceShareId was null or undefined when calling updateResourceShare.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_share_id': resourceShareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 向资源共享实例绑定指定的资源使用者列表或共享资源列表。对于新增的共享资源，有权访问此资源共享实例的资源使用者获得该共享资源的访问权限。对于新增的资源使用者，获得对此资源共享实例中共享资源的访问权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateResourceShare(associateResourceShareRequest?: AssociateResourceShareRequest) {
            const options = {
                method: "POST",
                url: "/v1/resource-shares/{resource_share_id}/associate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceShareId;
            
            let xSecurityToken;

            if (associateResourceShareRequest !== null && associateResourceShareRequest !== undefined) {
                if (associateResourceShareRequest instanceof AssociateResourceShareRequest) {
                    resourceShareId = associateResourceShareRequest.resourceShareId;
                    body = associateResourceShareRequest.body
                    xSecurityToken = associateResourceShareRequest.xSecurityToken;
                } else {
                    resourceShareId = associateResourceShareRequest['resource_share_id'];
                    body = associateResourceShareRequest['body'];
                    xSecurityToken = associateResourceShareRequest['X-Security-Token'];
                }
            }

        
            if (resourceShareId === null || resourceShareId === undefined) {
            throw new RequiredError('resourceShareId','Required parameter resourceShareId was null or undefined when calling associateResourceShare.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_share_id': resourceShareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 将指定的资源使用者或共享资源从指定的资源共享实例中移除。资源使用者也可以从指定的资源共享实例中主动退出。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disassociateResourceShare(disassociateResourceShareRequest?: DisassociateResourceShareRequest) {
            const options = {
                method: "POST",
                url: "/v1/resource-shares/{resource_share_id}/disassociate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceShareId;
            
            let xSecurityToken;

            if (disassociateResourceShareRequest !== null && disassociateResourceShareRequest !== undefined) {
                if (disassociateResourceShareRequest instanceof DisassociateResourceShareRequest) {
                    resourceShareId = disassociateResourceShareRequest.resourceShareId;
                    body = disassociateResourceShareRequest.body
                    xSecurityToken = disassociateResourceShareRequest.xSecurityToken;
                } else {
                    resourceShareId = disassociateResourceShareRequest['resource_share_id'];
                    body = disassociateResourceShareRequest['body'];
                    xSecurityToken = disassociateResourceShareRequest['X-Security-Token'];
                }
            }

        
            if (resourceShareId === null || resourceShareId === undefined) {
            throw new RequiredError('resourceShareId','Required parameter resourceShareId was null or undefined when calling disassociateResourceShare.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_share_id': resourceShareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 检索您拥有的资源共享实例中绑定的共享资源和资源使用者。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchResourceShareAssociations(searchResourceShareAssociationsRequest?: SearchResourceShareAssociationsRequest) {
            const options = {
                method: "POST",
                url: "/v1/resource-share-associations/search",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSecurityToken;

            if (searchResourceShareAssociationsRequest !== null && searchResourceShareAssociationsRequest !== undefined) {
                if (searchResourceShareAssociationsRequest instanceof SearchResourceShareAssociationsRequest) {
                    body = searchResourceShareAssociationsRequest.body
                    xSecurityToken = searchResourceShareAssociationsRequest.xSecurityToken;
                } else {
                    body = searchResourceShareAssociationsRequest['body'];
                    xSecurityToken = searchResourceShareAssociationsRequest['X-Security-Token'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 接受来自其他账号的资源共享邀请。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        acceptResourceShareInvitation(acceptResourceShareInvitationRequest?: AcceptResourceShareInvitationRequest) {
            const options = {
                method: "POST",
                url: "/v1/resource-share-invitations/{resource_share_invitation_id}/accept",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceShareInvitationId;
            
            let xSecurityToken;

            if (acceptResourceShareInvitationRequest !== null && acceptResourceShareInvitationRequest !== undefined) {
                if (acceptResourceShareInvitationRequest instanceof AcceptResourceShareInvitationRequest) {
                    resourceShareInvitationId = acceptResourceShareInvitationRequest.resourceShareInvitationId;
                    xSecurityToken = acceptResourceShareInvitationRequest.xSecurityToken;
                } else {
                    resourceShareInvitationId = acceptResourceShareInvitationRequest['resource_share_invitation_id'];
                    xSecurityToken = acceptResourceShareInvitationRequest['X-Security-Token'];
                }
            }

        
            if (resourceShareInvitationId === null || resourceShareInvitationId === undefined) {
            throw new RequiredError('resourceShareInvitationId','Required parameter resourceShareInvitationId was null or undefined when calling acceptResourceShareInvitation.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'resource_share_invitation_id': resourceShareInvitationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 拒绝来自其他账号的资源共享邀请。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        rejectResourceShareInvitation(rejectResourceShareInvitationRequest?: RejectResourceShareInvitationRequest) {
            const options = {
                method: "POST",
                url: "/v1/resource-share-invitations/{resource_share_invitation_id}/reject",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceShareInvitationId;
            
            let xSecurityToken;

            if (rejectResourceShareInvitationRequest !== null && rejectResourceShareInvitationRequest !== undefined) {
                if (rejectResourceShareInvitationRequest instanceof RejectResourceShareInvitationRequest) {
                    resourceShareInvitationId = rejectResourceShareInvitationRequest.resourceShareInvitationId;
                    xSecurityToken = rejectResourceShareInvitationRequest.xSecurityToken;
                } else {
                    resourceShareInvitationId = rejectResourceShareInvitationRequest['resource_share_invitation_id'];
                    xSecurityToken = rejectResourceShareInvitationRequest['X-Security-Token'];
                }
            }

        
            if (resourceShareInvitationId === null || resourceShareInvitationId === undefined) {
            throw new RequiredError('resourceShareInvitationId','Required parameter resourceShareInvitationId was null or undefined when calling rejectResourceShareInvitation.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'resource_share_invitation_id': resourceShareInvitationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过条件检索资源共享邀请。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchResourceShareInvitation(searchResourceShareInvitationRequest?: SearchResourceShareInvitationRequest) {
            const options = {
                method: "POST",
                url: "/v1/resource-share-invitations/search",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSecurityToken;

            if (searchResourceShareInvitationRequest !== null && searchResourceShareInvitationRequest !== undefined) {
                if (searchResourceShareInvitationRequest instanceof SearchResourceShareInvitationRequest) {
                    body = searchResourceShareInvitationRequest.body
                    xSecurityToken = searchResourceShareInvitationRequest.xSecurityToken;
                } else {
                    body = searchResourceShareInvitationRequest['body'];
                    xSecurityToken = searchResourceShareInvitationRequest['X-Security-Token'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 资源共享实例增加标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateResourceShareTags(batchCreateResourceShareTagsRequest?: BatchCreateResourceShareTagsRequest) {
            const options = {
                method: "POST",
                url: "/v1/resource-shares/{resource_share_id}/tags/create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceShareId;
            
            let xSecurityToken;

            if (batchCreateResourceShareTagsRequest !== null && batchCreateResourceShareTagsRequest !== undefined) {
                if (batchCreateResourceShareTagsRequest instanceof BatchCreateResourceShareTagsRequest) {
                    resourceShareId = batchCreateResourceShareTagsRequest.resourceShareId;
                    body = batchCreateResourceShareTagsRequest.body
                    xSecurityToken = batchCreateResourceShareTagsRequest.xSecurityToken;
                } else {
                    resourceShareId = batchCreateResourceShareTagsRequest['resource_share_id'];
                    body = batchCreateResourceShareTagsRequest['body'];
                    xSecurityToken = batchCreateResourceShareTagsRequest['X-Security-Token'];
                }
            }

        
            if (resourceShareId === null || resourceShareId === undefined) {
            throw new RequiredError('resourceShareId','Required parameter resourceShareId was null or undefined when calling batchCreateResourceShareTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_share_id': resourceShareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除资源共享实例指定的标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteResourceShareTags(batchDeleteResourceShareTagsRequest?: BatchDeleteResourceShareTagsRequest) {
            const options = {
                method: "POST",
                url: "/v1/resource-shares/{resource_share_id}/tags/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceShareId;
            
            let xSecurityToken;

            if (batchDeleteResourceShareTagsRequest !== null && batchDeleteResourceShareTagsRequest !== undefined) {
                if (batchDeleteResourceShareTagsRequest instanceof BatchDeleteResourceShareTagsRequest) {
                    resourceShareId = batchDeleteResourceShareTagsRequest.resourceShareId;
                    body = batchDeleteResourceShareTagsRequest.body
                    xSecurityToken = batchDeleteResourceShareTagsRequest.xSecurityToken;
                } else {
                    resourceShareId = batchDeleteResourceShareTagsRequest['resource_share_id'];
                    body = batchDeleteResourceShareTagsRequest['body'];
                    xSecurityToken = batchDeleteResourceShareTagsRequest['X-Security-Token'];
                }
            }

        
            if (resourceShareId === null || resourceShareId === undefined) {
            throw new RequiredError('resourceShareId','Required parameter resourceShareId was null or undefined when calling batchDeleteResourceShareTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_share_id': resourceShareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询资源共享实例已使用标签的列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listResourceShareTags(listResourceShareTagsRequest?: ListResourceShareTagsRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-shares/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let xSecurityToken;

            if (listResourceShareTagsRequest !== null && listResourceShareTagsRequest !== undefined) {
                if (listResourceShareTagsRequest instanceof ListResourceShareTagsRequest) {
                    limit = listResourceShareTagsRequest.limit;
                    marker = listResourceShareTagsRequest.marker;
                    xSecurityToken = listResourceShareTagsRequest.xSecurityToken;
                } else {
                    limit = listResourceShareTagsRequest['limit'];
                    marker = listResourceShareTagsRequest['marker'];
                    xSecurityToken = listResourceShareTagsRequest['X-Security-Token'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据标签信息查询资源共享实例列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listResourceSharesByTags(listResourceSharesByTagsRequest?: ListResourceSharesByTagsRequest) {
            const options = {
                method: "POST",
                url: "/v1/resource-shares/resource-instances/filter",
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
            
            let xSecurityToken;

            if (listResourceSharesByTagsRequest !== null && listResourceSharesByTagsRequest !== undefined) {
                if (listResourceSharesByTagsRequest instanceof ListResourceSharesByTagsRequest) {
                    body = listResourceSharesByTagsRequest.body
                    limit = listResourceSharesByTagsRequest.limit;
                    offset = listResourceSharesByTagsRequest.offset;
                    xSecurityToken = listResourceSharesByTagsRequest.xSecurityToken;
                } else {
                    body = listResourceSharesByTagsRequest['body'];
                    limit = listResourceSharesByTagsRequest['limit'];
                    offset = listResourceSharesByTagsRequest['offset'];
                    xSecurityToken = listResourceSharesByTagsRequest['X-Security-Token'];
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
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据标签信息查询资源共享实例数量。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchResourceShareCountByTags(searchResourceShareCountByTagsRequest?: SearchResourceShareCountByTagsRequest) {
            const options = {
                method: "POST",
                url: "/v1/resource-shares/resource-instances/count",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSecurityToken;

            if (searchResourceShareCountByTagsRequest !== null && searchResourceShareCountByTagsRequest !== undefined) {
                if (searchResourceShareCountByTagsRequest instanceof SearchResourceShareCountByTagsRequest) {
                    body = searchResourceShareCountByTagsRequest.body
                    xSecurityToken = searchResourceShareCountByTagsRequest.xSecurityToken;
                } else {
                    body = searchResourceShareCountByTagsRequest['body'];
                    xSecurityToken = searchResourceShareCountByTagsRequest['X-Security-Token'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): RamClient {
    return new RamClient(client);
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