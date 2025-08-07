import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AcceptHandshakeRequest } from './model/AcceptHandshakeRequest';
import { AcceptHandshakeResponse } from './model/AcceptHandshakeResponse';
import { AccountDto } from './model/AccountDto';
import { AttachPolicyRequest } from './model/AttachPolicyRequest';
import { AttachPolicyResponse } from './model/AttachPolicyResponse';
import { CancelHandshakeRequest } from './model/CancelHandshakeRequest';
import { CancelHandshakeResponse } from './model/CancelHandshakeResponse';
import { CloseAccountRequest } from './model/CloseAccountRequest';
import { CloseAccountResponse } from './model/CloseAccountResponse';
import { CloseAccountStatusDto } from './model/CloseAccountStatusDto';
import { CreateAccountReqBody } from './model/CreateAccountReqBody';
import { CreateAccountRequest } from './model/CreateAccountRequest';
import { CreateAccountResponse } from './model/CreateAccountResponse';
import { CreateAccountStatusDto } from './model/CreateAccountStatusDto';
import { CreateAccountStatusDtoFailureDetailMsg } from './model/CreateAccountStatusDtoFailureDetailMsg';
import { CreateOrganizationRequest } from './model/CreateOrganizationRequest';
import { CreateOrganizationResponse } from './model/CreateOrganizationResponse';
import { CreateOrganizationalUnitReqBody } from './model/CreateOrganizationalUnitReqBody';
import { CreateOrganizationalUnitRequest } from './model/CreateOrganizationalUnitRequest';
import { CreateOrganizationalUnitResponse } from './model/CreateOrganizationalUnitResponse';
import { CreatePolicyReqBody } from './model/CreatePolicyReqBody';
import { CreatePolicyRequest } from './model/CreatePolicyRequest';
import { CreatePolicyResponse } from './model/CreatePolicyResponse';
import { CreateResourceAccountReqBody } from './model/CreateResourceAccountReqBody';
import { CreateResourceAccountRequest } from './model/CreateResourceAccountRequest';
import { CreateResourceAccountResponse } from './model/CreateResourceAccountResponse';
import { CreateTagResourceRequest } from './model/CreateTagResourceRequest';
import { CreateTagResourceResponse } from './model/CreateTagResourceResponse';
import { DeclineHandshakeRequest } from './model/DeclineHandshakeRequest';
import { DeclineHandshakeResponse } from './model/DeclineHandshakeResponse';
import { DelegatedAdministratorDto } from './model/DelegatedAdministratorDto';
import { DelegatedAdministratorReqBody } from './model/DelegatedAdministratorReqBody';
import { DelegatedServiceDto } from './model/DelegatedServiceDto';
import { DeleteOrganizationRequest } from './model/DeleteOrganizationRequest';
import { DeleteOrganizationResponse } from './model/DeleteOrganizationResponse';
import { DeleteOrganizationalUnitRequest } from './model/DeleteOrganizationalUnitRequest';
import { DeleteOrganizationalUnitResponse } from './model/DeleteOrganizationalUnitResponse';
import { DeletePolicyRequest } from './model/DeletePolicyRequest';
import { DeletePolicyResponse } from './model/DeletePolicyResponse';
import { DeleteTagResourceRequest } from './model/DeleteTagResourceRequest';
import { DeleteTagResourceResponse } from './model/DeleteTagResourceResponse';
import { DeregisterDelegatedAdministratorRequest } from './model/DeregisterDelegatedAdministratorRequest';
import { DeregisterDelegatedAdministratorResponse } from './model/DeregisterDelegatedAdministratorResponse';
import { DetachPolicyRequest } from './model/DetachPolicyRequest';
import { DetachPolicyResponse } from './model/DetachPolicyResponse';
import { DisablePolicyTypeRequest } from './model/DisablePolicyTypeRequest';
import { DisablePolicyTypeResponse } from './model/DisablePolicyTypeResponse';
import { DisableTrustedServiceRequest } from './model/DisableTrustedServiceRequest';
import { DisableTrustedServiceResponse } from './model/DisableTrustedServiceResponse';
import { EnablePolicyTypeRequest } from './model/EnablePolicyTypeRequest';
import { EnablePolicyTypeResponse } from './model/EnablePolicyTypeResponse';
import { EnableTrustedServiceRequest } from './model/EnableTrustedServiceRequest';
import { EnableTrustedServiceResponse } from './model/EnableTrustedServiceResponse';
import { EntityDto } from './model/EntityDto';
import { HandshakeDto } from './model/HandshakeDto';
import { InviteAccountReqBody } from './model/InviteAccountReqBody';
import { InviteAccountRequest } from './model/InviteAccountRequest';
import { InviteAccountResponse } from './model/InviteAccountResponse';
import { LeaveOrganizationRequest } from './model/LeaveOrganizationRequest';
import { LeaveOrganizationResponse } from './model/LeaveOrganizationResponse';
import { ListAccountsRequest } from './model/ListAccountsRequest';
import { ListAccountsResponse } from './model/ListAccountsResponse';
import { ListCloseAccountStatusesRequest } from './model/ListCloseAccountStatusesRequest';
import { ListCloseAccountStatusesResponse } from './model/ListCloseAccountStatusesResponse';
import { ListCreateAccountStatusesRequest } from './model/ListCreateAccountStatusesRequest';
import { ListCreateAccountStatusesResponse } from './model/ListCreateAccountStatusesResponse';
import { ListDelegatedAdministratorsRequest } from './model/ListDelegatedAdministratorsRequest';
import { ListDelegatedAdministratorsResponse } from './model/ListDelegatedAdministratorsResponse';
import { ListDelegatedServicesRequest } from './model/ListDelegatedServicesRequest';
import { ListDelegatedServicesResponse } from './model/ListDelegatedServicesResponse';
import { ListEntitiesForPolicyRequest } from './model/ListEntitiesForPolicyRequest';
import { ListEntitiesForPolicyResponse } from './model/ListEntitiesForPolicyResponse';
import { ListEntitiesRequest } from './model/ListEntitiesRequest';
import { ListEntitiesResponse } from './model/ListEntitiesResponse';
import { ListHandshakesRequest } from './model/ListHandshakesRequest';
import { ListHandshakesResponse } from './model/ListHandshakesResponse';
import { ListOrganizationalUnitsRequest } from './model/ListOrganizationalUnitsRequest';
import { ListOrganizationalUnitsResponse } from './model/ListOrganizationalUnitsResponse';
import { ListPoliciesRequest } from './model/ListPoliciesRequest';
import { ListPoliciesResponse } from './model/ListPoliciesResponse';
import { ListQuotasRequest } from './model/ListQuotasRequest';
import { ListQuotasResponse } from './model/ListQuotasResponse';
import { ListReceivedHandshakesRequest } from './model/ListReceivedHandshakesRequest';
import { ListReceivedHandshakesResponse } from './model/ListReceivedHandshakesResponse';
import { ListResourceInstancesRequest } from './model/ListResourceInstancesRequest';
import { ListResourceInstancesResponse } from './model/ListResourceInstancesResponse';
import { ListResourceTagsRequest } from './model/ListResourceTagsRequest';
import { ListResourceTagsResponse } from './model/ListResourceTagsResponse';
import { ListRootsRequest } from './model/ListRootsRequest';
import { ListRootsResponse } from './model/ListRootsResponse';
import { ListServicesRequest } from './model/ListServicesRequest';
import { ListServicesResponse } from './model/ListServicesResponse';
import { ListTagPolicyServicesRequest } from './model/ListTagPolicyServicesRequest';
import { ListTagPolicyServicesResponse } from './model/ListTagPolicyServicesResponse';
import { ListTagResourcesRequest } from './model/ListTagResourcesRequest';
import { ListTagResourcesResponse } from './model/ListTagResourcesResponse';
import { ListTagsForResourceRequest } from './model/ListTagsForResourceRequest';
import { ListTagsForResourceResponse } from './model/ListTagsForResourceResponse';
import { ListTrustedServicesRequest } from './model/ListTrustedServicesRequest';
import { ListTrustedServicesResponse } from './model/ListTrustedServicesResponse';
import { Match } from './model/Match';
import { MoveAccountReqBody } from './model/MoveAccountReqBody';
import { MoveAccountRequest } from './model/MoveAccountRequest';
import { MoveAccountResponse } from './model/MoveAccountResponse';
import { OrganizationDto } from './model/OrganizationDto';
import { OrganizationalUnitDto } from './model/OrganizationalUnitDto';
import { PageInfoDto } from './model/PageInfoDto';
import { PolicyDto } from './model/PolicyDto';
import { PolicySummaryDto } from './model/PolicySummaryDto';
import { PolicyTachReqBody } from './model/PolicyTachReqBody';
import { PolicyTypeReqBody } from './model/PolicyTypeReqBody';
import { PolicyTypeSummaryDto } from './model/PolicyTypeSummaryDto';
import { QuotaDto } from './model/QuotaDto';
import { QuotasResourcesDto } from './model/QuotasResourcesDto';
import { RegisterDelegatedAdministratorRequest } from './model/RegisterDelegatedAdministratorRequest';
import { RegisterDelegatedAdministratorResponse } from './model/RegisterDelegatedAdministratorResponse';
import { RemoveAccountRequest } from './model/RemoveAccountRequest';
import { RemoveAccountResponse } from './model/RemoveAccountResponse';
import { ResourceDTO } from './model/ResourceDTO';
import { ResourceInstanceReqBody } from './model/ResourceInstanceReqBody';
import { RootDto } from './model/RootDto';
import { ShowAccountRequest } from './model/ShowAccountRequest';
import { ShowAccountResponse } from './model/ShowAccountResponse';
import { ShowCreateAccountStatusRequest } from './model/ShowCreateAccountStatusRequest';
import { ShowCreateAccountStatusResponse } from './model/ShowCreateAccountStatusResponse';
import { ShowEffectivePoliciesRequest } from './model/ShowEffectivePoliciesRequest';
import { ShowEffectivePoliciesResponse } from './model/ShowEffectivePoliciesResponse';
import { ShowHandshakeRequest } from './model/ShowHandshakeRequest';
import { ShowHandshakeResponse } from './model/ShowHandshakeResponse';
import { ShowOrganizationRequest } from './model/ShowOrganizationRequest';
import { ShowOrganizationResponse } from './model/ShowOrganizationResponse';
import { ShowOrganizationalUnitRequest } from './model/ShowOrganizationalUnitRequest';
import { ShowOrganizationalUnitResponse } from './model/ShowOrganizationalUnitResponse';
import { ShowPolicyRequest } from './model/ShowPolicyRequest';
import { ShowPolicyResponse } from './model/ShowPolicyResponse';
import { ShowResourceInstancesCountRequest } from './model/ShowResourceInstancesCountRequest';
import { ShowResourceInstancesCountResponse } from './model/ShowResourceInstancesCountResponse';
import { TagDto } from './model/TagDto';
import { TagPolicyServiceDto } from './model/TagPolicyServiceDto';
import { TagResourceReqBody } from './model/TagResourceReqBody';
import { TagResourceRequest } from './model/TagResourceRequest';
import { TagResourceResponse } from './model/TagResourceResponse';
import { TagsDTO } from './model/TagsDTO';
import { TargetDto } from './model/TargetDto';
import { TrustedServiceDto } from './model/TrustedServiceDto';
import { TrustedServiceReqBody } from './model/TrustedServiceReqBody';
import { UntagResourceReqBody } from './model/UntagResourceReqBody';
import { UntagResourceRequest } from './model/UntagResourceRequest';
import { UntagResourceResponse } from './model/UntagResourceResponse';
import { UpdateAccountReqBody } from './model/UpdateAccountReqBody';
import { UpdateAccountRequest } from './model/UpdateAccountRequest';
import { UpdateAccountResponse } from './model/UpdateAccountResponse';
import { UpdateOrganizationalUnitReqBody } from './model/UpdateOrganizationalUnitReqBody';
import { UpdateOrganizationalUnitRequest } from './model/UpdateOrganizationalUnitRequest';
import { UpdateOrganizationalUnitResponse } from './model/UpdateOrganizationalUnitResponse';
import { UpdatePolicyReqBody } from './model/UpdatePolicyReqBody';
import { UpdatePolicyRequest } from './model/UpdatePolicyRequest';
import { UpdatePolicyResponse } from './model/UpdatePolicyResponse';

export class OrganizationsClient {
    public static newBuilder(): ClientBuilder<OrganizationsClient> {
            let client = new ClientBuilder<OrganizationsClient>(newClient);
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
     * 关闭账号。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭账号
     * @param {string} accountId 账号的唯一标识符（ID）。
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public closeAccount(closeAccountRequest?: CloseAccountRequest): Promise<CloseAccountResponse> {
        const options = ParamCreater().closeAccount(closeAccountRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建一个账号，生成的账号将自动成为调用此接口的账号所属组织的成员。此操作只能由组织的管理账号调用。组织云服务将在新账号中创建所需的服务关联委托和账号访问委托。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建账号
     * @param {CreateAccountReqBody} createAccountReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAccount(createAccountRequest?: CreateAccountRequest): Promise<CreateAccountResponse> {
        const options = ParamCreater().createAccount(createAccountRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建一个帐号，不携带手机号邮箱联系方式，生成的帐号将自动成为调用此接口的帐号所属组织的成员。此操作只能由组织的管理帐号调用。组织云服务将在新帐号中创建所需的服务关联委托和帐号访问委托。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建帐号
     * @param {CreateResourceAccountReqBody} createResourceAccountReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createResourceAccount(createResourceAccountRequest?: CreateResourceAccountRequest): Promise<CreateResourceAccountResponse> {
        const options = ParamCreater().createResourceAccount(createResourceAccountRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 向另一个账号发送邀请，受邀账号将以成员账号加入您的组织。此操作只能由组织的管理账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 邀请账号加入组织
     * @param {InviteAccountReqBody} inviteAccountReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public inviteAccount(inviteAccountRequest?: InviteAccountRequest): Promise<InviteAccountResponse> {
        const options = ParamCreater().inviteAccount(inviteAccountRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列出组织中的账号。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。如果指定父级组织单元，则将获得作为父级直系子级的所有账号的列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出组织中的账号
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {string} [parentId] 父节点（根或组织单元）的唯一标识符（ID）。
     * @param {boolean} [withRegisterContactInfo] 是否返回账号邮箱、手机号信息。若此参数为True，Limit最多200。
     * @param {number} [limit] 页面中最大结果数量。
     * @param {string} [marker] 分页标记。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAccounts(listAccountsRequest?: ListAccountsRequest): Promise<ListAccountsResponse> {
        const options = ParamCreater().listAccounts(listAccountsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列出组织中指定状态的账号关闭请求。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出关闭账号的状态
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {Array<'pending_closure' | 'suspended'>} [states] 要包含在响应中的一个或多个状态的列表。如果此参数不存在，则所有请求都包含在响应中。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCloseAccountStatuses(listCloseAccountStatusesRequest?: ListCloseAccountStatusesRequest): Promise<ListCloseAccountStatusesResponse> {
        const options = ParamCreater().listCloseAccountStatuses(listCloseAccountStatusesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列出组织中指定状态的账号创建请求。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出创建账号的状态
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {Array<'in_progress' | 'succeeded' | 'failed'>} [states] 要包含在响应中的一个或多个状态的列表。如果此参数不存在，则所有请求都包含在响应中。
     * @param {number} [limit] 页面中最大结果数量。
     * @param {string} [marker] 分页标记。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCreateAccountStatuses(listCreateAccountStatusesRequest?: ListCreateAccountStatusesRequest): Promise<ListCreateAccountStatusesResponse> {
        const options = ParamCreater().listCreateAccountStatuses(listCreateAccountStatusesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将账号从其当前源位置（根或组织单元）移动到指定的目标位置（根或组织单元）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 移动账号
     * @param {string} accountId 账号的唯一标识符（ID）。
     * @param {MoveAccountReqBody} moveAccountReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public moveAccount(moveAccountRequest?: MoveAccountRequest): Promise<MoveAccountResponse> {
        const options = ParamCreater().moveAccount(moveAccountRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 从组织中移除指定的账号。移除的账号将成为一个独立账号，该账号不是任何组织的成员。此操作只能由组织的管理账号调用。只有当账号配置了作为独立账号运行所需的信息时，您才能从组织中移除账号。注意，要移除的账号不能是组织启用的任何服务的委托管理员账号。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 移除指定的账号
     * @param {string} accountId 账号的唯一标识符（ID）。
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public removeAccount(removeAccountRequest?: RemoveAccountRequest): Promise<RemoveAccountResponse> {
        const options = ParamCreater().removeAccount(removeAccountRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询有关指定账号的信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询账号信息
     * @param {string} accountId 账号的唯一标识符（ID）。
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {boolean} [withRegisterContactInfo] 是否返回账号邮箱、手机号信息。若此参数为True，Limit最多200。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAccount(showAccountRequest?: ShowAccountRequest): Promise<ShowAccountResponse> {
        const options = ParamCreater().showAccount(showAccountRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 检索创建账号的异步请求的当前状态。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询有关创建账号状态的信息
     * @param {string} createAccountStatusId 指定唯一标识CreateAccount请求的ID值。
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCreateAccountStatus(showCreateAccountStatusRequest?: ShowCreateAccountStatusRequest): Promise<ShowCreateAccountStatusResponse> {
        const options = ParamCreater().showCreateAccountStatus(showCreateAccountStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新指定的账号信息。此操作只能由组织的管理账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新账号信息
     * @param {string} accountId 账号的唯一标识符（ID）。
     * @param {UpdateAccountReqBody} updateAccountReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAccount(updateAccountRequest?: UpdateAccountRequest): Promise<UpdateAccountResponse> {
        const options = ParamCreater().updateAccount(updateAccountRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定成员账号作为指定服务的委托管理员。此操作只能由组织的管理账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 注销服务的委托管理员
     * @param {DelegatedAdministratorReqBody} delegatedAdministratorReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deregisterDelegatedAdministrator(deregisterDelegatedAdministratorRequest?: DeregisterDelegatedAdministratorRequest): Promise<DeregisterDelegatedAdministratorResponse> {
        const options = ParamCreater().deregisterDelegatedAdministrator(deregisterDelegatedAdministratorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列出在此组织中指定为委派管理员的账号。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出此组织中指定为委托管理员的账号
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {string} [servicePrincipal] 服务主体的名称。
     * @param {number} [limit] 页面中最大结果数量。
     * @param {string} [marker] 分页标记。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDelegatedAdministrators(listDelegatedAdministratorsRequest?: ListDelegatedAdministratorsRequest): Promise<ListDelegatedAdministratorsResponse> {
        const options = ParamCreater().listDelegatedAdministrators(listDelegatedAdministratorsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列出指定账号是其委托管理员的服务。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出指定账号是其委托管理员的服务
     * @param {string} accountId 账号的唯一标识符（ID）。
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {number} [limit] 页面中最大结果数量。
     * @param {string} [marker] 分页标记。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDelegatedServices(listDelegatedServicesRequest?: ListDelegatedServicesRequest): Promise<ListDelegatedServicesResponse> {
        const options = ParamCreater().listDelegatedServices(listDelegatedServicesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 指定成员账号能够管理指定服务的组织功能。此接口授予委托管理员对组织服务数据的只读访问权限。委托管理员账号中的IAM用户仍需要IAM权限才能访问和管理服务。此操作只能由组织的管理账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 注册作为服务委托管理员
     * @param {DelegatedAdministratorReqBody} delegatedAdministratorReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public registerDelegatedAdministrator(registerDelegatedAdministratorRequest?: RegisterDelegatedAdministratorRequest): Promise<RegisterDelegatedAdministratorResponse> {
        const options = ParamCreater().registerDelegatedAdministrator(registerDelegatedAdministratorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 向邀请的发起方发送应答，接受加入组织邀请。在您接受邀请后，此邀请信息将继续保留并出现在相关API的返回结果中，保留期限为30天。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 接受邀请
     * @param {string} handshakeId 邀请的唯一标识符（ID）。账号在发起邀请时创建ID。
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public acceptHandshake(acceptHandshakeRequest?: AcceptHandshakeRequest): Promise<AcceptHandshakeResponse> {
        const options = ParamCreater().acceptHandshake(acceptHandshakeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 取消邀请，此时邀请状态将设置为已取消。此接口只能由发起邀请的账号调用。取消邀请后，此邀请信息将继续保留并出现在相关API的返回结果中，保留期限为30天。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 取消邀请
     * @param {string} handshakeId 邀请的唯一标识符（ID）。账号在发起邀请时创建ID。
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cancelHandshake(cancelHandshakeRequest?: CancelHandshakeRequest): Promise<CancelHandshakeResponse> {
        const options = ParamCreater().cancelHandshake(cancelHandshakeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 拒绝邀请请求。受邀账号拒绝邀请，此时当前邀请状态将设置为拒绝，邀请停止。此接口只能由受邀账号调用。邀请发起者无法再次激活被拒绝的邀请，但可以重新发送新的邀请。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 拒绝邀请
     * @param {string} handshakeId 邀请的唯一标识符（ID）。账号在发起邀请时创建ID。
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public declineHandshake(declineHandshakeRequest?: DeclineHandshakeRequest): Promise<DeclineHandshakeResponse> {
        const options = ParamCreater().declineHandshake(declineHandshakeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列出所属组织发送的邀请。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出发送的邀请
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {number} [limit] 页面中最大结果数量。
     * @param {string} [marker] 分页标记。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHandshakes(listHandshakesRequest?: ListHandshakesRequest): Promise<ListHandshakesResponse> {
        const options = ParamCreater().listHandshakes(listHandshakesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列出账号收到的所有邀请。此操作可以由任何账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出收到的邀请
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {number} [limit] 页面中最大结果数量。
     * @param {string} [marker] 分页标记。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listReceivedHandshakes(listReceivedHandshakesRequest?: ListReceivedHandshakesRequest): Promise<ListReceivedHandshakesResponse> {
        const options = ParamCreater().listReceivedHandshakes(listReceivedHandshakesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询组织中已有账号邀请的相关信息。此接口可以由组织中的任何账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询邀请相关信息
     * @param {string} handshakeId 邀请的唯一标识符（ID）。账号在发起邀请时创建ID。
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showHandshake(showHandshakeRequest?: ShowHandshakeRequest): Promise<ShowHandshakeResponse> {
        const options = ParamCreater().showHandshake(showHandshakeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列出组织中包含的所有根、组织单元和账号。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。您可以通过指定父ID和子ID参数来过滤实体。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出组织中的根、组织单元和账号
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {string} [parentId] 父节点（根或组织单元）的唯一标识符（ID）。
     * @param {string} [childId] 子节点（组织单元）的唯一标识符（ID）。
     * @param {number} [limit] 页面中最大结果数量。
     * @param {string} [marker] 分页标记。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEntities(listEntitiesRequest?: ListEntitiesRequest): Promise<ListEntitiesResponse> {
        const options = ParamCreater().listEntities(listEntitiesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列出租户的组织配额。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出租户的组织配额
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listQuotas(listQuotasRequest?: ListQuotasRequest): Promise<ListQuotasResponse> {
        const options = ParamCreater().listQuotas(listQuotasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列出所有可以与组织服务集成的云服务。集成后云服务将成为组织的可信服务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出所有可以与组织服务集成的云服务
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listServices(listServicesRequest?: ListServicesRequest): Promise<ListServicesResponse> {
        const options = ParamCreater().listServices(listServicesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列出被添加到标签策略强制执行的资源类型。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出被添加到标签策略强制执行的资源类型
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTagPolicyServices(listTagPolicyServicesRequest?: ListTagPolicyServicesRequest): Promise<ListTagPolicyServicesResponse> {
        const options = ParamCreater().listTagPolicyServices(listTagPolicyServicesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定策略类型和账号的有效策略信息。当前此接口不支持查询服务控制策略（service_control_policy）。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询有效的策略
     * @param {string} entityId 账号的唯一标识符（ID）。当前还不支持指定根、组织单元。
     * @param {'tag_policy'} policyType 策略类型的名称，tag_policy标签策略。
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showEffectivePolicies(showEffectivePoliciesRequest?: ShowEffectivePoliciesRequest): Promise<ShowEffectivePoliciesResponse> {
        const options = ParamCreater().showEffectivePolicies(showEffectivePoliciesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建组织。调用此接口的账号将自动成为新组织的管理账号，调用此接口的账号凭证必须是新组织管理账号的账号凭证。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建组织
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createOrganization(createOrganizationRequest?: CreateOrganizationRequest): Promise<CreateOrganizationResponse> {
        const options = ParamCreater().createOrganization(createOrganizationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除组织。您必须使用管理账号才能删除组织，并且先移除组织中的所有账号、组织单元和策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除组织
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteOrganization(deleteOrganizationRequest?: DeleteOrganizationRequest): Promise<DeleteOrganizationResponse> {
        const options = ParamCreater().deleteOrganization(deleteOrganizationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 此操作只能由组织的成员账号调用。只有当组织账号配置了作为独立账号运行所需的信息时，您才能作为成员账号离开组织。要离开的账号不能是组织启用的任何服务的委托管理员账号。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 离开当前组织
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public leaveOrganization(leaveOrganizationRequest?: LeaveOrganizationRequest): Promise<LeaveOrganizationResponse> {
        const options = ParamCreater().leaveOrganization(leaveOrganizationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列出当前组织的根。此接口只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出组织的根
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {number} [limit] 页面中最大结果数量。
     * @param {string} [marker] 分页标记。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRoots(listRootsRequest?: ListRootsRequest): Promise<ListRootsResponse> {
        const options = ParamCreater().listRoots(listRootsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询账号所属组织的信息。此操作可以由组织中的任何账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所属组织信息
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showOrganization(showOrganizationRequest?: ShowOrganizationRequest): Promise<ShowOrganizationResponse> {
        const options = ParamCreater().showOrganization(showOrganizationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在根或父组织单元中创建组织单元。组织单元是账号的容器，使您能够对账号进行分组管理，并根据业务要求应用策略。此操作只能由组织的管理账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建组织单元
     * @param {CreateOrganizationalUnitReqBody} createOrganizationalUnitReqBody 组织单元信息。
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createOrganizationalUnit(createOrganizationalUnitRequest?: CreateOrganizationalUnitRequest): Promise<CreateOrganizationalUnitResponse> {
        const options = ParamCreater().createOrganizationalUnit(createOrganizationalUnitRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 从根或其他组织单元中删除组织单元。前提是您必须先移除该组织单元中的所有成员账号或将成员账号移动至其他组织单元，必须删除该组织单元中的所有子组织单元。此操作只能由组织的管理账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除组织单元
     * @param {string} organizationalUnitId 与组织单元关联的唯一标识符（ID）。
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteOrganizationalUnit(deleteOrganizationalUnitRequest?: DeleteOrganizationalUnitRequest): Promise<DeleteOrganizationalUnitResponse> {
        const options = ParamCreater().deleteOrganizationalUnit(deleteOrganizationalUnitRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列出组织中的所有组织单元。如果指定父级组织单元，则将获得父级直系子级的组织单元列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出组织单元
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {string} [parentId] 父节点（根或组织单元）的唯一标识符（ID）。
     * @param {number} [limit] 页面中最大结果数量。
     * @param {string} [marker] 分页标记。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listOrganizationalUnits(listOrganizationalUnitsRequest?: ListOrganizationalUnitsRequest): Promise<ListOrganizationalUnitsResponse> {
        const options = ParamCreater().listOrganizationalUnits(listOrganizationalUnitsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询有关组织单元的信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询有关组织单元的信息
     * @param {string} organizationalUnitId 与组织单元关联的唯一标识符（ID）。
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showOrganizationalUnit(showOrganizationalUnitRequest?: ShowOrganizationalUnitRequest): Promise<ShowOrganizationalUnitResponse> {
        const options = ParamCreater().showOrganizationalUnit(showOrganizationalUnitRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重命名指定的组织单元。重命名后组织单元ID不变，下属子组织单元和下属账号不变，组织单元绑定的策略不变。此操作只能由组织的管理账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更改组织单元名称
     * @param {string} organizationalUnitId 与组织单元关联的唯一标识符（ID）。
     * @param {UpdateOrganizationalUnitReqBody} updateOrganizationalUnitReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateOrganizationalUnit(updateOrganizationalUnitRequest?: UpdateOrganizationalUnitRequest): Promise<UpdateOrganizationalUnitResponse> {
        const options = ParamCreater().updateOrganizationalUnit(updateOrganizationalUnitRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 绑定策略到根、组织单元或个人账号。此操作只能由组织的管理账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 将策略跟实体绑定
     * @param {string} policyId 策略的唯一标识符（ID）。
     * @param {PolicyTachReqBody} policyTachReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public attachPolicy(attachPolicyRequest?: AttachPolicyRequest): Promise<AttachPolicyResponse> {
        const options = ParamCreater().attachPolicy(attachPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建指定类型的策略。此操作只能由组织的管理账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建策略
     * @param {CreatePolicyReqBody} createPolicyReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 选择接口返回的信息的语言
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
     * 从组织中删除指定的策略。在执行此操作之前，必须首先将策略跟所有组织单元、根和账号解绑。此操作只能由组织的管理账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除策略
     * @param {string} policyId 策略的唯一标识符（ID）。
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
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
     * 从根、组织单元或账号解绑策略。此操作只能由组织的管理账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 将策略跟实体解绑
     * @param {string} policyId 策略的唯一标识符（ID）。
     * @param {PolicyTachReqBody} policyTachReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public detachPolicy(detachPolicyRequest?: DetachPolicyRequest): Promise<DetachPolicyResponse> {
        const options = ParamCreater().detachPolicy(detachPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 禁用根中的策略类型。只有在根中启用了特定类型的策略，才能将该类型的策略绑定到根中的实体。执行此操作后，您不能再将指定类型的策略绑定到该根或该根中的任何组织单元或账号。这是在后台执行的异步请求。您可以使用ListRoots查看指定根的策略类型的状态。此操作只能由组织的管理账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 禁用根中的策略类型
     * @param {PolicyTypeReqBody} policyTypeReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disablePolicyType(disablePolicyTypeRequest?: DisablePolicyTypeRequest): Promise<DisablePolicyTypeResponse> {
        const options = ParamCreater().disablePolicyType(disablePolicyTypeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在根中启用策略类型。在根中启用策略类型后，您可以将该类型的策略绑定到根、或该根中的任何组织单元和账号。这是在后台执行的异步请求。您可以使用ListRoots查看指定根的策略类型的状态。此操作只能由组织的管理账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 在根中启用策略类型
     * @param {PolicyTypeReqBody} policyTypeReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enablePolicyType(enablePolicyTypeRequest?: EnablePolicyTypeRequest): Promise<EnablePolicyTypeResponse> {
        const options = ParamCreater().enablePolicyType(enablePolicyTypeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列出跟指定策略绑定的所有根、组织单元和账号。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出跟指定策略绑定的所有实体
     * @param {string} policyId 策略的唯一标识符（ID）。
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {number} [limit] 页面中最大结果数量。
     * @param {string} [marker] 分页标记。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEntitiesForPolicy(listEntitiesForPolicyRequest?: ListEntitiesForPolicyRequest): Promise<ListEntitiesForPolicyResponse> {
        const options = ParamCreater().listEntitiesForPolicy(listEntitiesForPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列出组织中的所有策略。如果指定了资源ID，例如组织单元ID或账号ID，则将获得该资源已绑定的策略列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出策略
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {string} [attachedEntityId] 根、组织单元或账号的唯一标识符（ID）。
     * @param {number} [limit] 页面中最大结果数量。
     * @param {string} [marker] 分页标记。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 选择接口返回的信息的语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPolicies(listPoliciesRequest?: ListPoliciesRequest): Promise<ListPoliciesResponse> {
        const options = ParamCreater().listPolicies(listPoliciesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 检索策略的相关信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询策略相关信息
     * @param {string} policyId 策略的唯一标识符（ID）。
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 选择接口返回的信息的语言
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
     * 更新策略，可以更新策略的名称、描述或内容。如果不提供任何参数，则策略将保持不变。您不能更改策略的类型。此操作只能由组织的管理账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新策略
     * @param {string} policyId 策略的唯一标识符（ID）。
     * @param {UpdatePolicyReqBody} updatePolicyReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 选择接口返回的信息的语言
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
     * 向指定的资源类型添加一个或多个标签。目前，您可以将标签附加到组织中的账号、组织单元、根和策略。此操作只能由组织的管理账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 为指定资源类型添加标签
     * @param {'organizations:policies' | 'organizations:ous' | 'organizations:accounts' | 'organizations:roots'} resourceType 资源类型。枚举值：organizations:policies（服务策略）、organizations:ous（组织OU）、organizations:accounts（账号信息） 、organizations:roots：（根）。
     * @param {string} resourceId 根、组织单元、账号或策略的唯一标识符（ID）。
     * @param {TagResourceReqBody} tagResourceReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTagResource(createTagResourceRequest?: CreateTagResourceRequest): Promise<CreateTagResourceResponse> {
        const options = ParamCreater().createTagResource(createTagResourceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 从指定资源类型中删除具有指定主键的任何标签。您可以将标签绑定到组织中的账号、组织单元、根和策略。此操作只能由组织的管理账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 从指定资源类型中删除指定主键标签
     * @param {'organizations:policies' | 'organizations:ous' | 'organizations:accounts' | 'organizations:roots'} resourceType 资源类型。枚举值：organizations:policies（服务策略）、organizations:ous（组织OU）、organizations:accounts（账号信息） 、organizations:roots：（根）。
     * @param {string} resourceId 根、组织单元、账号或策略的唯一标识符（ID）。
     * @param {TagResourceReqBody} tagResourceReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTagResource(deleteTagResourceRequest?: DeleteTagResourceRequest): Promise<DeleteTagResourceResponse> {
        const options = ParamCreater().deleteTagResource(deleteTagResourceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据资源类型及标签信息查询实例列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据资源类型及标签信息查询实例列表
     * @param {'organizations:policies' | 'organizations:ous' | 'organizations:accounts' | 'organizations:roots'} resourceType 资源类型。枚举值：organizations:policies（服务策略）、organizations:ous（组织OU）、organizations:accounts（账号信息） 、organizations:roots：（根）。
     * @param {ResourceInstanceReqBody} resourceInstanceReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {number} [limit] 页面中最大结果数量。
     * @param {string} [offset] 分页标记。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listResourceInstances(listResourceInstancesRequest?: ListResourceInstancesRequest): Promise<ListResourceInstancesResponse> {
        const options = ParamCreater().listResourceInstances(listResourceInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源标签
     * @param {'organizations:policies' | 'organizations:ous' | 'organizations:accounts' | 'organizations:roots'} resourceType 资源类型。枚举值：organizations:policies（服务策略）、organizations:ous（组织OU）、organizations:accounts（账号信息） 、organizations:roots：（根）。
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
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
     * 列出绑定到指定资源类型的标签。您可以将标签附加到组织中的账号、组织单元、根和策略。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出绑定到指定资源类型的标签
     * @param {'organizations:policies' | 'organizations:ous' | 'organizations:accounts' | 'organizations:roots'} resourceType 资源类型。枚举值：organizations:policies（服务策略）、organizations:ous（组织OU）、organizations:accounts（账号信息） 、organizations:roots：（根）。
     * @param {string} resourceId 根、组织单元、账号或策略的唯一标识符（ID）。
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {number} [limit] 页面中最大结果数量。
     * @param {string} [marker] 分页标记。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTagResources(listTagResourcesRequest?: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
        const options = ParamCreater().listTagResources(listTagResourcesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列出绑定到指定资源的标签。您可以将标签附加到组织中的账号、组织单元、根和策略。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出绑定到指定资源的标签
     * @param {string} resourceId 根、组织单元、账号或策略的唯一标识符（ID）。
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {number} [limit] 页面中最大结果数量。
     * @param {string} [marker] 分页标记。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTagsForResource(listTagsForResourceRequest?: ListTagsForResourceRequest): Promise<ListTagsForResourceResponse> {
        const options = ParamCreater().listTagsForResource(listTagsForResourceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据资源类型及标签信息查询实例数量。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据资源类型及标签信息查询实例数量
     * @param {'organizations:policies' | 'organizations:ous' | 'organizations:accounts' | 'organizations:roots'} resourceType 资源类型。枚举值：organizations:policies（服务策略）、organizations:ous（组织OU）、organizations:accounts（账号信息） 、organizations:roots：（根）。
     * @param {ResourceInstanceReqBody} resourceInstanceReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showResourceInstancesCount(showResourceInstancesCountRequest?: ShowResourceInstancesCountRequest): Promise<ShowResourceInstancesCountResponse> {
        const options = ParamCreater().showResourceInstancesCount(showResourceInstancesCountRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 向指定的资源添加一个或多个标签。目前，您可以将标签附加到组织中的账号、组织单元、根和策略。此操作只能由组织的管理账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 为指定资源添加标签
     * @param {string} resourceId 根、组织单元、账号或策略的唯一标识符（ID）。
     * @param {TagResourceReqBody} tagResourceReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public tagResource(tagResourceRequest?: TagResourceRequest): Promise<TagResourceResponse> {
        const options = ParamCreater().tagResource(tagResourceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 从指定资源中删除具有指定主键的任何标签。您可以将标签绑定到组织中的账号、组织单元、根和策略。此操作只能由组织的管理账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 从指定资源中删除指定主键标签
     * @param {string} resourceId 根、组织单元、账号或策略的唯一标识符（ID）。
     * @param {UntagResourceReqBody} untagResourceReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public untagResource(untagResourceRequest?: UntagResourceRequest): Promise<UntagResourceResponse> {
        const options = ParamCreater().untagResource(untagResourceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 禁用服务（由service_principal指定的服务）与组织的集成。禁用可信服务后，指定服务将不可以在组织中的新账号中创建服务关联委托。这意味着该服务无法代表您对组织中的任何新账号执行操作。在服务完成从组织中的清理之前，服务仍可以在旧账号中执行操作。此接口只能由组织的管理账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 禁用受信任服务
     * @param {TrustedServiceReqBody} trustedServiceReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disableTrustedService(disableTrustedServiceRequest?: DisableTrustedServiceRequest): Promise<DisableTrustedServiceResponse> {
        const options = ParamCreater().disableTrustedService(disableTrustedServiceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启用服务（由service_principal指定的服务）与组织的集成。启用可信服务后，允许指定的可信服务对组织中的所有账号创建服务关联委托。这允许可信服务代表您在组织及其账号中执行操作。此接口只能由组织的管理账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启用可信服务
     * @param {TrustedServiceReqBody} trustedServiceReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enableTrustedService(enableTrustedServiceRequest?: EnableTrustedServiceRequest): Promise<EnableTrustedServiceResponse> {
        const options = ParamCreater().enableTrustedService(enableTrustedServiceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 返回启用与组织集成的可信服务列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出组织的可信服务列表
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {number} [limit] 页面中最大结果数量。
     * @param {string} [marker] 分页标记。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTrustedServices(listTrustedServicesRequest?: ListTrustedServicesRequest): Promise<ListTrustedServicesResponse> {
        const options = ParamCreater().listTrustedServices(listTrustedServicesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 关闭账号。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        closeAccount(closeAccountRequest?: CloseAccountRequest) {
            const options = {
                method: "POST",
                url: "/v1/organizations/accounts/{account_id}/close",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let accountId;
            
            let xSecurityToken;

            if (closeAccountRequest !== null && closeAccountRequest !== undefined) {
                if (closeAccountRequest instanceof CloseAccountRequest) {
                    accountId = closeAccountRequest.accountId;
                    xSecurityToken = closeAccountRequest.xSecurityToken;
                } else {
                    accountId = closeAccountRequest['account_id'];
                    xSecurityToken = closeAccountRequest['X-Security-Token'];
                }
            }

        
            if (accountId === null || accountId === undefined) {
            throw new RequiredError('accountId','Required parameter accountId was null or undefined when calling closeAccount.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'account_id': accountId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建一个账号，生成的账号将自动成为调用此接口的账号所属组织的成员。此操作只能由组织的管理账号调用。组织云服务将在新账号中创建所需的服务关联委托和账号访问委托。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAccount(createAccountRequest?: CreateAccountRequest) {
            const options = {
                method: "POST",
                url: "/v1/organizations/accounts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSecurityToken;

            if (createAccountRequest !== null && createAccountRequest !== undefined) {
                if (createAccountRequest instanceof CreateAccountRequest) {
                    body = createAccountRequest.body
                    xSecurityToken = createAccountRequest.xSecurityToken;
                } else {
                    body = createAccountRequest['body'];
                    xSecurityToken = createAccountRequest['X-Security-Token'];
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
         * 创建一个帐号，不携带手机号邮箱联系方式，生成的帐号将自动成为调用此接口的帐号所属组织的成员。此操作只能由组织的管理帐号调用。组织云服务将在新帐号中创建所需的服务关联委托和帐号访问委托。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createResourceAccount(createResourceAccountRequest?: CreateResourceAccountRequest) {
            const options = {
                method: "POST",
                url: "/v2/organizations/accounts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSecurityToken;

            if (createResourceAccountRequest !== null && createResourceAccountRequest !== undefined) {
                if (createResourceAccountRequest instanceof CreateResourceAccountRequest) {
                    body = createResourceAccountRequest.body
                    xSecurityToken = createResourceAccountRequest.xSecurityToken;
                } else {
                    body = createResourceAccountRequest['body'];
                    xSecurityToken = createResourceAccountRequest['X-Security-Token'];
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
         * 向另一个账号发送邀请，受邀账号将以成员账号加入您的组织。此操作只能由组织的管理账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        inviteAccount(inviteAccountRequest?: InviteAccountRequest) {
            const options = {
                method: "POST",
                url: "/v1/organizations/accounts/invite",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSecurityToken;

            if (inviteAccountRequest !== null && inviteAccountRequest !== undefined) {
                if (inviteAccountRequest instanceof InviteAccountRequest) {
                    body = inviteAccountRequest.body
                    xSecurityToken = inviteAccountRequest.xSecurityToken;
                } else {
                    body = inviteAccountRequest['body'];
                    xSecurityToken = inviteAccountRequest['X-Security-Token'];
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
         * 列出组织中的账号。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。如果指定父级组织单元，则将获得作为父级直系子级的所有账号的列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAccounts(listAccountsRequest?: ListAccountsRequest) {
            const options = {
                method: "GET",
                url: "/v1/organizations/accounts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xSecurityToken;
            
            let parentId;
            
            let withRegisterContactInfo;
            
            let limit;
            
            let marker;

            if (listAccountsRequest !== null && listAccountsRequest !== undefined) {
                if (listAccountsRequest instanceof ListAccountsRequest) {
                    xSecurityToken = listAccountsRequest.xSecurityToken;
                    parentId = listAccountsRequest.parentId;
                    withRegisterContactInfo = listAccountsRequest.withRegisterContactInfo;
                    limit = listAccountsRequest.limit;
                    marker = listAccountsRequest.marker;
                } else {
                    xSecurityToken = listAccountsRequest['X-Security-Token'];
                    parentId = listAccountsRequest['parent_id'];
                    withRegisterContactInfo = listAccountsRequest['with_register_contact_info'];
                    limit = listAccountsRequest['limit'];
                    marker = listAccountsRequest['marker'];
                }
            }

        
            if (parentId !== null && parentId !== undefined) {
                localVarQueryParameter['parent_id'] = parentId;
            }
            if (withRegisterContactInfo !== null && withRegisterContactInfo !== undefined) {
                localVarQueryParameter['with_register_contact_info'] = withRegisterContactInfo;
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
         * 列出组织中指定状态的账号关闭请求。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCloseAccountStatuses(listCloseAccountStatusesRequest?: ListCloseAccountStatusesRequest) {
            const options = {
                method: "GET",
                url: "/v1/organizations/close-account-status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xSecurityToken;
            
            let states;

            if (listCloseAccountStatusesRequest !== null && listCloseAccountStatusesRequest !== undefined) {
                if (listCloseAccountStatusesRequest instanceof ListCloseAccountStatusesRequest) {
                    xSecurityToken = listCloseAccountStatusesRequest.xSecurityToken;
                    states = listCloseAccountStatusesRequest.states;
                } else {
                    xSecurityToken = listCloseAccountStatusesRequest['X-Security-Token'];
                    states = listCloseAccountStatusesRequest['states'];
                }
            }

        
            if (states !== null && states !== undefined) {
                localVarQueryParameter['states'] = states;
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列出组织中指定状态的账号创建请求。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCreateAccountStatuses(listCreateAccountStatusesRequest?: ListCreateAccountStatusesRequest) {
            const options = {
                method: "GET",
                url: "/v1/organizations/create-account-status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xSecurityToken;
            
            let states;
            
            let limit;
            
            let marker;

            if (listCreateAccountStatusesRequest !== null && listCreateAccountStatusesRequest !== undefined) {
                if (listCreateAccountStatusesRequest instanceof ListCreateAccountStatusesRequest) {
                    xSecurityToken = listCreateAccountStatusesRequest.xSecurityToken;
                    states = listCreateAccountStatusesRequest.states;
                    limit = listCreateAccountStatusesRequest.limit;
                    marker = listCreateAccountStatusesRequest.marker;
                } else {
                    xSecurityToken = listCreateAccountStatusesRequest['X-Security-Token'];
                    states = listCreateAccountStatusesRequest['states'];
                    limit = listCreateAccountStatusesRequest['limit'];
                    marker = listCreateAccountStatusesRequest['marker'];
                }
            }

        
            if (states !== null && states !== undefined) {
                localVarQueryParameter['states'] = states;
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
         * 将账号从其当前源位置（根或组织单元）移动到指定的目标位置（根或组织单元）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        moveAccount(moveAccountRequest?: MoveAccountRequest) {
            const options = {
                method: "POST",
                url: "/v1/organizations/accounts/{account_id}/move",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let accountId;
            
            let xSecurityToken;

            if (moveAccountRequest !== null && moveAccountRequest !== undefined) {
                if (moveAccountRequest instanceof MoveAccountRequest) {
                    accountId = moveAccountRequest.accountId;
                    body = moveAccountRequest.body
                    xSecurityToken = moveAccountRequest.xSecurityToken;
                } else {
                    accountId = moveAccountRequest['account_id'];
                    body = moveAccountRequest['body'];
                    xSecurityToken = moveAccountRequest['X-Security-Token'];
                }
            }

        
            if (accountId === null || accountId === undefined) {
            throw new RequiredError('accountId','Required parameter accountId was null or undefined when calling moveAccount.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'account_id': accountId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 从组织中移除指定的账号。移除的账号将成为一个独立账号，该账号不是任何组织的成员。此操作只能由组织的管理账号调用。只有当账号配置了作为独立账号运行所需的信息时，您才能从组织中移除账号。注意，要移除的账号不能是组织启用的任何服务的委托管理员账号。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        removeAccount(removeAccountRequest?: RemoveAccountRequest) {
            const options = {
                method: "POST",
                url: "/v1/organizations/accounts/{account_id}/remove",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let accountId;
            
            let xSecurityToken;

            if (removeAccountRequest !== null && removeAccountRequest !== undefined) {
                if (removeAccountRequest instanceof RemoveAccountRequest) {
                    accountId = removeAccountRequest.accountId;
                    xSecurityToken = removeAccountRequest.xSecurityToken;
                } else {
                    accountId = removeAccountRequest['account_id'];
                    xSecurityToken = removeAccountRequest['X-Security-Token'];
                }
            }

        
            if (accountId === null || accountId === undefined) {
            throw new RequiredError('accountId','Required parameter accountId was null or undefined when calling removeAccount.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'account_id': accountId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询有关指定账号的信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAccount(showAccountRequest?: ShowAccountRequest) {
            const options = {
                method: "GET",
                url: "/v1/organizations/accounts/{account_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let accountId;
            
            let xSecurityToken;
            
            let withRegisterContactInfo;

            if (showAccountRequest !== null && showAccountRequest !== undefined) {
                if (showAccountRequest instanceof ShowAccountRequest) {
                    accountId = showAccountRequest.accountId;
                    xSecurityToken = showAccountRequest.xSecurityToken;
                    withRegisterContactInfo = showAccountRequest.withRegisterContactInfo;
                } else {
                    accountId = showAccountRequest['account_id'];
                    xSecurityToken = showAccountRequest['X-Security-Token'];
                    withRegisterContactInfo = showAccountRequest['with_register_contact_info'];
                }
            }

        
            if (accountId === null || accountId === undefined) {
            throw new RequiredError('accountId','Required parameter accountId was null or undefined when calling showAccount.');
            }
            if (withRegisterContactInfo !== null && withRegisterContactInfo !== undefined) {
                localVarQueryParameter['with_register_contact_info'] = withRegisterContactInfo;
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'account_id': accountId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 检索创建账号的异步请求的当前状态。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCreateAccountStatus(showCreateAccountStatusRequest?: ShowCreateAccountStatusRequest) {
            const options = {
                method: "GET",
                url: "/v1/organizations/create-account-status/{create_account_status_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let createAccountStatusId;
            
            let xSecurityToken;

            if (showCreateAccountStatusRequest !== null && showCreateAccountStatusRequest !== undefined) {
                if (showCreateAccountStatusRequest instanceof ShowCreateAccountStatusRequest) {
                    createAccountStatusId = showCreateAccountStatusRequest.createAccountStatusId;
                    xSecurityToken = showCreateAccountStatusRequest.xSecurityToken;
                } else {
                    createAccountStatusId = showCreateAccountStatusRequest['create_account_status_id'];
                    xSecurityToken = showCreateAccountStatusRequest['X-Security-Token'];
                }
            }

        
            if (createAccountStatusId === null || createAccountStatusId === undefined) {
            throw new RequiredError('createAccountStatusId','Required parameter createAccountStatusId was null or undefined when calling showCreateAccountStatus.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'create_account_status_id': createAccountStatusId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新指定的账号信息。此操作只能由组织的管理账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAccount(updateAccountRequest?: UpdateAccountRequest) {
            const options = {
                method: "PATCH",
                url: "/v1/organizations/accounts/{account_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let accountId;
            
            let xSecurityToken;

            if (updateAccountRequest !== null && updateAccountRequest !== undefined) {
                if (updateAccountRequest instanceof UpdateAccountRequest) {
                    accountId = updateAccountRequest.accountId;
                    body = updateAccountRequest.body
                    xSecurityToken = updateAccountRequest.xSecurityToken;
                } else {
                    accountId = updateAccountRequest['account_id'];
                    body = updateAccountRequest['body'];
                    xSecurityToken = updateAccountRequest['X-Security-Token'];
                }
            }

        
            if (accountId === null || accountId === undefined) {
            throw new RequiredError('accountId','Required parameter accountId was null or undefined when calling updateAccount.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'account_id': accountId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定成员账号作为指定服务的委托管理员。此操作只能由组织的管理账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deregisterDelegatedAdministrator(deregisterDelegatedAdministratorRequest?: DeregisterDelegatedAdministratorRequest) {
            const options = {
                method: "POST",
                url: "/v1/organizations/delegated-administrators/deregister",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSecurityToken;

            if (deregisterDelegatedAdministratorRequest !== null && deregisterDelegatedAdministratorRequest !== undefined) {
                if (deregisterDelegatedAdministratorRequest instanceof DeregisterDelegatedAdministratorRequest) {
                    body = deregisterDelegatedAdministratorRequest.body
                    xSecurityToken = deregisterDelegatedAdministratorRequest.xSecurityToken;
                } else {
                    body = deregisterDelegatedAdministratorRequest['body'];
                    xSecurityToken = deregisterDelegatedAdministratorRequest['X-Security-Token'];
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
         * 列出在此组织中指定为委派管理员的账号。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDelegatedAdministrators(listDelegatedAdministratorsRequest?: ListDelegatedAdministratorsRequest) {
            const options = {
                method: "GET",
                url: "/v1/organizations/delegated-administrators",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xSecurityToken;
            
            let servicePrincipal;
            
            let limit;
            
            let marker;

            if (listDelegatedAdministratorsRequest !== null && listDelegatedAdministratorsRequest !== undefined) {
                if (listDelegatedAdministratorsRequest instanceof ListDelegatedAdministratorsRequest) {
                    xSecurityToken = listDelegatedAdministratorsRequest.xSecurityToken;
                    servicePrincipal = listDelegatedAdministratorsRequest.servicePrincipal;
                    limit = listDelegatedAdministratorsRequest.limit;
                    marker = listDelegatedAdministratorsRequest.marker;
                } else {
                    xSecurityToken = listDelegatedAdministratorsRequest['X-Security-Token'];
                    servicePrincipal = listDelegatedAdministratorsRequest['service_principal'];
                    limit = listDelegatedAdministratorsRequest['limit'];
                    marker = listDelegatedAdministratorsRequest['marker'];
                }
            }

        
            if (servicePrincipal !== null && servicePrincipal !== undefined) {
                localVarQueryParameter['service_principal'] = servicePrincipal;
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
         * 列出指定账号是其委托管理员的服务。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDelegatedServices(listDelegatedServicesRequest?: ListDelegatedServicesRequest) {
            const options = {
                method: "GET",
                url: "/v1/organizations/accounts/{account_id}/delegated-services",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let accountId;
            
            let xSecurityToken;
            
            let limit;
            
            let marker;

            if (listDelegatedServicesRequest !== null && listDelegatedServicesRequest !== undefined) {
                if (listDelegatedServicesRequest instanceof ListDelegatedServicesRequest) {
                    accountId = listDelegatedServicesRequest.accountId;
                    xSecurityToken = listDelegatedServicesRequest.xSecurityToken;
                    limit = listDelegatedServicesRequest.limit;
                    marker = listDelegatedServicesRequest.marker;
                } else {
                    accountId = listDelegatedServicesRequest['account_id'];
                    xSecurityToken = listDelegatedServicesRequest['X-Security-Token'];
                    limit = listDelegatedServicesRequest['limit'];
                    marker = listDelegatedServicesRequest['marker'];
                }
            }

        
            if (accountId === null || accountId === undefined) {
            throw new RequiredError('accountId','Required parameter accountId was null or undefined when calling listDelegatedServices.');
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
            options.pathParams = { 'account_id': accountId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 指定成员账号能够管理指定服务的组织功能。此接口授予委托管理员对组织服务数据的只读访问权限。委托管理员账号中的IAM用户仍需要IAM权限才能访问和管理服务。此操作只能由组织的管理账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        registerDelegatedAdministrator(registerDelegatedAdministratorRequest?: RegisterDelegatedAdministratorRequest) {
            const options = {
                method: "POST",
                url: "/v1/organizations/delegated-administrators/register",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSecurityToken;

            if (registerDelegatedAdministratorRequest !== null && registerDelegatedAdministratorRequest !== undefined) {
                if (registerDelegatedAdministratorRequest instanceof RegisterDelegatedAdministratorRequest) {
                    body = registerDelegatedAdministratorRequest.body
                    xSecurityToken = registerDelegatedAdministratorRequest.xSecurityToken;
                } else {
                    body = registerDelegatedAdministratorRequest['body'];
                    xSecurityToken = registerDelegatedAdministratorRequest['X-Security-Token'];
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
         * 向邀请的发起方发送应答，接受加入组织邀请。在您接受邀请后，此邀请信息将继续保留并出现在相关API的返回结果中，保留期限为30天。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        acceptHandshake(acceptHandshakeRequest?: AcceptHandshakeRequest) {
            const options = {
                method: "POST",
                url: "/v1/received-handshakes/{handshake_id}/accept",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let handshakeId;
            
            let xSecurityToken;

            if (acceptHandshakeRequest !== null && acceptHandshakeRequest !== undefined) {
                if (acceptHandshakeRequest instanceof AcceptHandshakeRequest) {
                    handshakeId = acceptHandshakeRequest.handshakeId;
                    xSecurityToken = acceptHandshakeRequest.xSecurityToken;
                } else {
                    handshakeId = acceptHandshakeRequest['handshake_id'];
                    xSecurityToken = acceptHandshakeRequest['X-Security-Token'];
                }
            }

        
            if (handshakeId === null || handshakeId === undefined) {
            throw new RequiredError('handshakeId','Required parameter handshakeId was null or undefined when calling acceptHandshake.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'handshake_id': handshakeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 取消邀请，此时邀请状态将设置为已取消。此接口只能由发起邀请的账号调用。取消邀请后，此邀请信息将继续保留并出现在相关API的返回结果中，保留期限为30天。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        cancelHandshake(cancelHandshakeRequest?: CancelHandshakeRequest) {
            const options = {
                method: "POST",
                url: "/v1/organizations/handshakes/{handshake_id}/cancel",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let handshakeId;
            
            let xSecurityToken;

            if (cancelHandshakeRequest !== null && cancelHandshakeRequest !== undefined) {
                if (cancelHandshakeRequest instanceof CancelHandshakeRequest) {
                    handshakeId = cancelHandshakeRequest.handshakeId;
                    xSecurityToken = cancelHandshakeRequest.xSecurityToken;
                } else {
                    handshakeId = cancelHandshakeRequest['handshake_id'];
                    xSecurityToken = cancelHandshakeRequest['X-Security-Token'];
                }
            }

        
            if (handshakeId === null || handshakeId === undefined) {
            throw new RequiredError('handshakeId','Required parameter handshakeId was null or undefined when calling cancelHandshake.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'handshake_id': handshakeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 拒绝邀请请求。受邀账号拒绝邀请，此时当前邀请状态将设置为拒绝，邀请停止。此接口只能由受邀账号调用。邀请发起者无法再次激活被拒绝的邀请，但可以重新发送新的邀请。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        declineHandshake(declineHandshakeRequest?: DeclineHandshakeRequest) {
            const options = {
                method: "POST",
                url: "/v1/received-handshakes/{handshake_id}/decline",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let handshakeId;
            
            let xSecurityToken;

            if (declineHandshakeRequest !== null && declineHandshakeRequest !== undefined) {
                if (declineHandshakeRequest instanceof DeclineHandshakeRequest) {
                    handshakeId = declineHandshakeRequest.handshakeId;
                    xSecurityToken = declineHandshakeRequest.xSecurityToken;
                } else {
                    handshakeId = declineHandshakeRequest['handshake_id'];
                    xSecurityToken = declineHandshakeRequest['X-Security-Token'];
                }
            }

        
            if (handshakeId === null || handshakeId === undefined) {
            throw new RequiredError('handshakeId','Required parameter handshakeId was null or undefined when calling declineHandshake.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'handshake_id': handshakeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列出所属组织发送的邀请。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHandshakes(listHandshakesRequest?: ListHandshakesRequest) {
            const options = {
                method: "GET",
                url: "/v1/organizations/handshakes",
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

            if (listHandshakesRequest !== null && listHandshakesRequest !== undefined) {
                if (listHandshakesRequest instanceof ListHandshakesRequest) {
                    xSecurityToken = listHandshakesRequest.xSecurityToken;
                    limit = listHandshakesRequest.limit;
                    marker = listHandshakesRequest.marker;
                } else {
                    xSecurityToken = listHandshakesRequest['X-Security-Token'];
                    limit = listHandshakesRequest['limit'];
                    marker = listHandshakesRequest['marker'];
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
         * 列出账号收到的所有邀请。此操作可以由任何账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listReceivedHandshakes(listReceivedHandshakesRequest?: ListReceivedHandshakesRequest) {
            const options = {
                method: "GET",
                url: "/v1/received-handshakes",
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

            if (listReceivedHandshakesRequest !== null && listReceivedHandshakesRequest !== undefined) {
                if (listReceivedHandshakesRequest instanceof ListReceivedHandshakesRequest) {
                    xSecurityToken = listReceivedHandshakesRequest.xSecurityToken;
                    limit = listReceivedHandshakesRequest.limit;
                    marker = listReceivedHandshakesRequest.marker;
                } else {
                    xSecurityToken = listReceivedHandshakesRequest['X-Security-Token'];
                    limit = listReceivedHandshakesRequest['limit'];
                    marker = listReceivedHandshakesRequest['marker'];
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
         * 查询组织中已有账号邀请的相关信息。此接口可以由组织中的任何账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showHandshake(showHandshakeRequest?: ShowHandshakeRequest) {
            const options = {
                method: "GET",
                url: "/v1/organizations/handshakes/{handshake_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let handshakeId;
            
            let xSecurityToken;

            if (showHandshakeRequest !== null && showHandshakeRequest !== undefined) {
                if (showHandshakeRequest instanceof ShowHandshakeRequest) {
                    handshakeId = showHandshakeRequest.handshakeId;
                    xSecurityToken = showHandshakeRequest.xSecurityToken;
                } else {
                    handshakeId = showHandshakeRequest['handshake_id'];
                    xSecurityToken = showHandshakeRequest['X-Security-Token'];
                }
            }

        
            if (handshakeId === null || handshakeId === undefined) {
            throw new RequiredError('handshakeId','Required parameter handshakeId was null or undefined when calling showHandshake.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'handshake_id': handshakeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列出组织中包含的所有根、组织单元和账号。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。您可以通过指定父ID和子ID参数来过滤实体。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEntities(listEntitiesRequest?: ListEntitiesRequest) {
            const options = {
                method: "GET",
                url: "/v1/organizations/entities",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xSecurityToken;
            
            let parentId;
            
            let childId;
            
            let limit;
            
            let marker;

            if (listEntitiesRequest !== null && listEntitiesRequest !== undefined) {
                if (listEntitiesRequest instanceof ListEntitiesRequest) {
                    xSecurityToken = listEntitiesRequest.xSecurityToken;
                    parentId = listEntitiesRequest.parentId;
                    childId = listEntitiesRequest.childId;
                    limit = listEntitiesRequest.limit;
                    marker = listEntitiesRequest.marker;
                } else {
                    xSecurityToken = listEntitiesRequest['X-Security-Token'];
                    parentId = listEntitiesRequest['parent_id'];
                    childId = listEntitiesRequest['child_id'];
                    limit = listEntitiesRequest['limit'];
                    marker = listEntitiesRequest['marker'];
                }
            }

        
            if (parentId !== null && parentId !== undefined) {
                localVarQueryParameter['parent_id'] = parentId;
            }
            if (childId !== null && childId !== undefined) {
                localVarQueryParameter['child_id'] = childId;
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
         * 列出租户的组织配额。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listQuotas(listQuotasRequest?: ListQuotasRequest) {
            const options = {
                method: "GET",
                url: "/v1/organizations/quotas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xSecurityToken;

            if (listQuotasRequest !== null && listQuotasRequest !== undefined) {
                if (listQuotasRequest instanceof ListQuotasRequest) {
                    xSecurityToken = listQuotasRequest.xSecurityToken;
                } else {
                    xSecurityToken = listQuotasRequest['X-Security-Token'];
                }
            }

        
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列出所有可以与组织服务集成的云服务。集成后云服务将成为组织的可信服务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listServices(listServicesRequest?: ListServicesRequest) {
            const options = {
                method: "GET",
                url: "/v1/organizations/services",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xSecurityToken;

            if (listServicesRequest !== null && listServicesRequest !== undefined) {
                if (listServicesRequest instanceof ListServicesRequest) {
                    xSecurityToken = listServicesRequest.xSecurityToken;
                } else {
                    xSecurityToken = listServicesRequest['X-Security-Token'];
                }
            }

        
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列出被添加到标签策略强制执行的资源类型。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTagPolicyServices(listTagPolicyServicesRequest?: ListTagPolicyServicesRequest) {
            const options = {
                method: "GET",
                url: "/v1/organizations/tag-policy-services",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xSecurityToken;

            if (listTagPolicyServicesRequest !== null && listTagPolicyServicesRequest !== undefined) {
                if (listTagPolicyServicesRequest instanceof ListTagPolicyServicesRequest) {
                    xSecurityToken = listTagPolicyServicesRequest.xSecurityToken;
                } else {
                    xSecurityToken = listTagPolicyServicesRequest['X-Security-Token'];
                }
            }

        
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定策略类型和账号的有效策略信息。当前此接口不支持查询服务控制策略（service_control_policy）。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showEffectivePolicies(showEffectivePoliciesRequest?: ShowEffectivePoliciesRequest) {
            const options = {
                method: "GET",
                url: "/v1/organizations/entities/effective-policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let entityId;
            
            let policyType;
            
            let xSecurityToken;

            if (showEffectivePoliciesRequest !== null && showEffectivePoliciesRequest !== undefined) {
                if (showEffectivePoliciesRequest instanceof ShowEffectivePoliciesRequest) {
                    entityId = showEffectivePoliciesRequest.entityId;
                    policyType = showEffectivePoliciesRequest.policyType;
                    xSecurityToken = showEffectivePoliciesRequest.xSecurityToken;
                } else {
                    entityId = showEffectivePoliciesRequest['entity_id'];
                    policyType = showEffectivePoliciesRequest['policy_type'];
                    xSecurityToken = showEffectivePoliciesRequest['X-Security-Token'];
                }
            }

        
            if (entityId === null || entityId === undefined) {
                throw new RequiredError('entityId','Required parameter entityId was null or undefined when calling showEffectivePolicies.');
            }
            if (entityId !== null && entityId !== undefined) {
                localVarQueryParameter['entity_id'] = entityId;
            }
            if (policyType === null || policyType === undefined) {
                throw new RequiredError('policyType','Required parameter policyType was null or undefined when calling showEffectivePolicies.');
            }
            if (policyType !== null && policyType !== undefined) {
                localVarQueryParameter['policy_type'] = policyType;
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建组织。调用此接口的账号将自动成为新组织的管理账号，调用此接口的账号凭证必须是新组织管理账号的账号凭证。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createOrganization(createOrganizationRequest?: CreateOrganizationRequest) {
            const options = {
                method: "POST",
                url: "/v1/organizations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xSecurityToken;

            if (createOrganizationRequest !== null && createOrganizationRequest !== undefined) {
                if (createOrganizationRequest instanceof CreateOrganizationRequest) {
                    xSecurityToken = createOrganizationRequest.xSecurityToken;
                } else {
                    xSecurityToken = createOrganizationRequest['X-Security-Token'];
                }
            }

        
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除组织。您必须使用管理账号才能删除组织，并且先移除组织中的所有账号、组织单元和策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteOrganization(deleteOrganizationRequest?: DeleteOrganizationRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/organizations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xSecurityToken;

            if (deleteOrganizationRequest !== null && deleteOrganizationRequest !== undefined) {
                if (deleteOrganizationRequest instanceof DeleteOrganizationRequest) {
                    xSecurityToken = deleteOrganizationRequest.xSecurityToken;
                } else {
                    xSecurityToken = deleteOrganizationRequest['X-Security-Token'];
                }
            }

        
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 此操作只能由组织的成员账号调用。只有当组织账号配置了作为独立账号运行所需的信息时，您才能作为成员账号离开组织。要离开的账号不能是组织启用的任何服务的委托管理员账号。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        leaveOrganization(leaveOrganizationRequest?: LeaveOrganizationRequest) {
            const options = {
                method: "POST",
                url: "/v1/organizations/leave",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xSecurityToken;

            if (leaveOrganizationRequest !== null && leaveOrganizationRequest !== undefined) {
                if (leaveOrganizationRequest instanceof LeaveOrganizationRequest) {
                    xSecurityToken = leaveOrganizationRequest.xSecurityToken;
                } else {
                    xSecurityToken = leaveOrganizationRequest['X-Security-Token'];
                }
            }

        
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列出当前组织的根。此接口只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRoots(listRootsRequest?: ListRootsRequest) {
            const options = {
                method: "GET",
                url: "/v1/organizations/roots",
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

            if (listRootsRequest !== null && listRootsRequest !== undefined) {
                if (listRootsRequest instanceof ListRootsRequest) {
                    xSecurityToken = listRootsRequest.xSecurityToken;
                    limit = listRootsRequest.limit;
                    marker = listRootsRequest.marker;
                } else {
                    xSecurityToken = listRootsRequest['X-Security-Token'];
                    limit = listRootsRequest['limit'];
                    marker = listRootsRequest['marker'];
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
         * 查询账号所属组织的信息。此操作可以由组织中的任何账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showOrganization(showOrganizationRequest?: ShowOrganizationRequest) {
            const options = {
                method: "GET",
                url: "/v1/organizations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xSecurityToken;

            if (showOrganizationRequest !== null && showOrganizationRequest !== undefined) {
                if (showOrganizationRequest instanceof ShowOrganizationRequest) {
                    xSecurityToken = showOrganizationRequest.xSecurityToken;
                } else {
                    xSecurityToken = showOrganizationRequest['X-Security-Token'];
                }
            }

        
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在根或父组织单元中创建组织单元。组织单元是账号的容器，使您能够对账号进行分组管理，并根据业务要求应用策略。此操作只能由组织的管理账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createOrganizationalUnit(createOrganizationalUnitRequest?: CreateOrganizationalUnitRequest) {
            const options = {
                method: "POST",
                url: "/v1/organizations/organizational-units",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSecurityToken;

            if (createOrganizationalUnitRequest !== null && createOrganizationalUnitRequest !== undefined) {
                if (createOrganizationalUnitRequest instanceof CreateOrganizationalUnitRequest) {
                    body = createOrganizationalUnitRequest.body
                    xSecurityToken = createOrganizationalUnitRequest.xSecurityToken;
                } else {
                    body = createOrganizationalUnitRequest['body'];
                    xSecurityToken = createOrganizationalUnitRequest['X-Security-Token'];
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
         * 从根或其他组织单元中删除组织单元。前提是您必须先移除该组织单元中的所有成员账号或将成员账号移动至其他组织单元，必须删除该组织单元中的所有子组织单元。此操作只能由组织的管理账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteOrganizationalUnit(deleteOrganizationalUnitRequest?: DeleteOrganizationalUnitRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/organizations/organizational-units/{organizational_unit_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let organizationalUnitId;
            
            let xSecurityToken;

            if (deleteOrganizationalUnitRequest !== null && deleteOrganizationalUnitRequest !== undefined) {
                if (deleteOrganizationalUnitRequest instanceof DeleteOrganizationalUnitRequest) {
                    organizationalUnitId = deleteOrganizationalUnitRequest.organizationalUnitId;
                    xSecurityToken = deleteOrganizationalUnitRequest.xSecurityToken;
                } else {
                    organizationalUnitId = deleteOrganizationalUnitRequest['organizational_unit_id'];
                    xSecurityToken = deleteOrganizationalUnitRequest['X-Security-Token'];
                }
            }

        
            if (organizationalUnitId === null || organizationalUnitId === undefined) {
            throw new RequiredError('organizationalUnitId','Required parameter organizationalUnitId was null or undefined when calling deleteOrganizationalUnit.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'organizational_unit_id': organizationalUnitId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列出组织中的所有组织单元。如果指定父级组织单元，则将获得父级直系子级的组织单元列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listOrganizationalUnits(listOrganizationalUnitsRequest?: ListOrganizationalUnitsRequest) {
            const options = {
                method: "GET",
                url: "/v1/organizations/organizational-units",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xSecurityToken;
            
            let parentId;
            
            let limit;
            
            let marker;

            if (listOrganizationalUnitsRequest !== null && listOrganizationalUnitsRequest !== undefined) {
                if (listOrganizationalUnitsRequest instanceof ListOrganizationalUnitsRequest) {
                    xSecurityToken = listOrganizationalUnitsRequest.xSecurityToken;
                    parentId = listOrganizationalUnitsRequest.parentId;
                    limit = listOrganizationalUnitsRequest.limit;
                    marker = listOrganizationalUnitsRequest.marker;
                } else {
                    xSecurityToken = listOrganizationalUnitsRequest['X-Security-Token'];
                    parentId = listOrganizationalUnitsRequest['parent_id'];
                    limit = listOrganizationalUnitsRequest['limit'];
                    marker = listOrganizationalUnitsRequest['marker'];
                }
            }

        
            if (parentId !== null && parentId !== undefined) {
                localVarQueryParameter['parent_id'] = parentId;
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
         * 查询有关组织单元的信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showOrganizationalUnit(showOrganizationalUnitRequest?: ShowOrganizationalUnitRequest) {
            const options = {
                method: "GET",
                url: "/v1/organizations/organizational-units/{organizational_unit_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let organizationalUnitId;
            
            let xSecurityToken;

            if (showOrganizationalUnitRequest !== null && showOrganizationalUnitRequest !== undefined) {
                if (showOrganizationalUnitRequest instanceof ShowOrganizationalUnitRequest) {
                    organizationalUnitId = showOrganizationalUnitRequest.organizationalUnitId;
                    xSecurityToken = showOrganizationalUnitRequest.xSecurityToken;
                } else {
                    organizationalUnitId = showOrganizationalUnitRequest['organizational_unit_id'];
                    xSecurityToken = showOrganizationalUnitRequest['X-Security-Token'];
                }
            }

        
            if (organizationalUnitId === null || organizationalUnitId === undefined) {
            throw new RequiredError('organizationalUnitId','Required parameter organizationalUnitId was null or undefined when calling showOrganizationalUnit.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'organizational_unit_id': organizationalUnitId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重命名指定的组织单元。重命名后组织单元ID不变，下属子组织单元和下属账号不变，组织单元绑定的策略不变。此操作只能由组织的管理账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateOrganizationalUnit(updateOrganizationalUnitRequest?: UpdateOrganizationalUnitRequest) {
            const options = {
                method: "PATCH",
                url: "/v1/organizations/organizational-units/{organizational_unit_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let organizationalUnitId;
            
            let xSecurityToken;

            if (updateOrganizationalUnitRequest !== null && updateOrganizationalUnitRequest !== undefined) {
                if (updateOrganizationalUnitRequest instanceof UpdateOrganizationalUnitRequest) {
                    organizationalUnitId = updateOrganizationalUnitRequest.organizationalUnitId;
                    body = updateOrganizationalUnitRequest.body
                    xSecurityToken = updateOrganizationalUnitRequest.xSecurityToken;
                } else {
                    organizationalUnitId = updateOrganizationalUnitRequest['organizational_unit_id'];
                    body = updateOrganizationalUnitRequest['body'];
                    xSecurityToken = updateOrganizationalUnitRequest['X-Security-Token'];
                }
            }

        
            if (organizationalUnitId === null || organizationalUnitId === undefined) {
            throw new RequiredError('organizationalUnitId','Required parameter organizationalUnitId was null or undefined when calling updateOrganizationalUnit.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'organizational_unit_id': organizationalUnitId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 绑定策略到根、组织单元或个人账号。此操作只能由组织的管理账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        attachPolicy(attachPolicyRequest?: AttachPolicyRequest) {
            const options = {
                method: "POST",
                url: "/v1/organizations/policies/{policy_id}/attach",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let policyId;
            
            let xSecurityToken;

            if (attachPolicyRequest !== null && attachPolicyRequest !== undefined) {
                if (attachPolicyRequest instanceof AttachPolicyRequest) {
                    policyId = attachPolicyRequest.policyId;
                    body = attachPolicyRequest.body
                    xSecurityToken = attachPolicyRequest.xSecurityToken;
                } else {
                    policyId = attachPolicyRequest['policy_id'];
                    body = attachPolicyRequest['body'];
                    xSecurityToken = attachPolicyRequest['X-Security-Token'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling attachPolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建指定类型的策略。此操作只能由组织的管理账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPolicy(createPolicyRequest?: CreatePolicyRequest) {
            const options = {
                method: "POST",
                url: "/v1/organizations/policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSecurityToken;
            
            let xLanguage;

            if (createPolicyRequest !== null && createPolicyRequest !== undefined) {
                if (createPolicyRequest instanceof CreatePolicyRequest) {
                    body = createPolicyRequest.body
                    xSecurityToken = createPolicyRequest.xSecurityToken;
                    xLanguage = createPolicyRequest.xLanguage;
                } else {
                    body = createPolicyRequest['body'];
                    xSecurityToken = createPolicyRequest['X-Security-Token'];
                    xLanguage = createPolicyRequest['X-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 从组织中删除指定的策略。在执行此操作之前，必须首先将策略跟所有组织单元、根和账号解绑。此操作只能由组织的管理账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePolicy(deletePolicyRequest?: DeletePolicyRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/organizations/policies/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let policyId;
            
            let xSecurityToken;

            if (deletePolicyRequest !== null && deletePolicyRequest !== undefined) {
                if (deletePolicyRequest instanceof DeletePolicyRequest) {
                    policyId = deletePolicyRequest.policyId;
                    xSecurityToken = deletePolicyRequest.xSecurityToken;
                } else {
                    policyId = deletePolicyRequest['policy_id'];
                    xSecurityToken = deletePolicyRequest['X-Security-Token'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling deletePolicy.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 从根、组织单元或账号解绑策略。此操作只能由组织的管理账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        detachPolicy(detachPolicyRequest?: DetachPolicyRequest) {
            const options = {
                method: "POST",
                url: "/v1/organizations/policies/{policy_id}/detach",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let policyId;
            
            let xSecurityToken;

            if (detachPolicyRequest !== null && detachPolicyRequest !== undefined) {
                if (detachPolicyRequest instanceof DetachPolicyRequest) {
                    policyId = detachPolicyRequest.policyId;
                    body = detachPolicyRequest.body
                    xSecurityToken = detachPolicyRequest.xSecurityToken;
                } else {
                    policyId = detachPolicyRequest['policy_id'];
                    body = detachPolicyRequest['body'];
                    xSecurityToken = detachPolicyRequest['X-Security-Token'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling detachPolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 禁用根中的策略类型。只有在根中启用了特定类型的策略，才能将该类型的策略绑定到根中的实体。执行此操作后，您不能再将指定类型的策略绑定到该根或该根中的任何组织单元或账号。这是在后台执行的异步请求。您可以使用ListRoots查看指定根的策略类型的状态。此操作只能由组织的管理账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disablePolicyType(disablePolicyTypeRequest?: DisablePolicyTypeRequest) {
            const options = {
                method: "POST",
                url: "/v1/organizations/policies/disable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSecurityToken;

            if (disablePolicyTypeRequest !== null && disablePolicyTypeRequest !== undefined) {
                if (disablePolicyTypeRequest instanceof DisablePolicyTypeRequest) {
                    body = disablePolicyTypeRequest.body
                    xSecurityToken = disablePolicyTypeRequest.xSecurityToken;
                } else {
                    body = disablePolicyTypeRequest['body'];
                    xSecurityToken = disablePolicyTypeRequest['X-Security-Token'];
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
         * 在根中启用策略类型。在根中启用策略类型后，您可以将该类型的策略绑定到根、或该根中的任何组织单元和账号。这是在后台执行的异步请求。您可以使用ListRoots查看指定根的策略类型的状态。此操作只能由组织的管理账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enablePolicyType(enablePolicyTypeRequest?: EnablePolicyTypeRequest) {
            const options = {
                method: "POST",
                url: "/v1/organizations/policies/enable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSecurityToken;

            if (enablePolicyTypeRequest !== null && enablePolicyTypeRequest !== undefined) {
                if (enablePolicyTypeRequest instanceof EnablePolicyTypeRequest) {
                    body = enablePolicyTypeRequest.body
                    xSecurityToken = enablePolicyTypeRequest.xSecurityToken;
                } else {
                    body = enablePolicyTypeRequest['body'];
                    xSecurityToken = enablePolicyTypeRequest['X-Security-Token'];
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
         * 列出跟指定策略绑定的所有根、组织单元和账号。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEntitiesForPolicy(listEntitiesForPolicyRequest?: ListEntitiesForPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v1/organizations/policies/{policy_id}/attached-entities",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let policyId;
            
            let xSecurityToken;
            
            let limit;
            
            let marker;

            if (listEntitiesForPolicyRequest !== null && listEntitiesForPolicyRequest !== undefined) {
                if (listEntitiesForPolicyRequest instanceof ListEntitiesForPolicyRequest) {
                    policyId = listEntitiesForPolicyRequest.policyId;
                    xSecurityToken = listEntitiesForPolicyRequest.xSecurityToken;
                    limit = listEntitiesForPolicyRequest.limit;
                    marker = listEntitiesForPolicyRequest.marker;
                } else {
                    policyId = listEntitiesForPolicyRequest['policy_id'];
                    xSecurityToken = listEntitiesForPolicyRequest['X-Security-Token'];
                    limit = listEntitiesForPolicyRequest['limit'];
                    marker = listEntitiesForPolicyRequest['marker'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling listEntitiesForPolicy.');
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
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列出组织中的所有策略。如果指定了资源ID，例如组织单元ID或账号ID，则将获得该资源已绑定的策略列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPolicies(listPoliciesRequest?: ListPoliciesRequest) {
            const options = {
                method: "GET",
                url: "/v1/organizations/policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xSecurityToken;
            
            let attachedEntityId;
            
            let limit;
            
            let marker;
            
            let xLanguage;

            if (listPoliciesRequest !== null && listPoliciesRequest !== undefined) {
                if (listPoliciesRequest instanceof ListPoliciesRequest) {
                    xSecurityToken = listPoliciesRequest.xSecurityToken;
                    attachedEntityId = listPoliciesRequest.attachedEntityId;
                    limit = listPoliciesRequest.limit;
                    marker = listPoliciesRequest.marker;
                    xLanguage = listPoliciesRequest.xLanguage;
                } else {
                    xSecurityToken = listPoliciesRequest['X-Security-Token'];
                    attachedEntityId = listPoliciesRequest['attached_entity_id'];
                    limit = listPoliciesRequest['limit'];
                    marker = listPoliciesRequest['marker'];
                    xLanguage = listPoliciesRequest['X-Language'];
                }
            }

        
            if (attachedEntityId !== null && attachedEntityId !== undefined) {
                localVarQueryParameter['attached_entity_id'] = attachedEntityId;
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
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 检索策略的相关信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPolicy(showPolicyRequest?: ShowPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v1/organizations/policies/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let policyId;
            
            let xSecurityToken;
            
            let xLanguage;

            if (showPolicyRequest !== null && showPolicyRequest !== undefined) {
                if (showPolicyRequest instanceof ShowPolicyRequest) {
                    policyId = showPolicyRequest.policyId;
                    xSecurityToken = showPolicyRequest.xSecurityToken;
                    xLanguage = showPolicyRequest.xLanguage;
                } else {
                    policyId = showPolicyRequest['policy_id'];
                    xSecurityToken = showPolicyRequest['X-Security-Token'];
                    xLanguage = showPolicyRequest['X-Language'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling showPolicy.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新策略，可以更新策略的名称、描述或内容。如果不提供任何参数，则策略将保持不变。您不能更改策略的类型。此操作只能由组织的管理账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePolicy(updatePolicyRequest?: UpdatePolicyRequest) {
            const options = {
                method: "PATCH",
                url: "/v1/organizations/policies/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let policyId;
            
            let xSecurityToken;
            
            let xLanguage;

            if (updatePolicyRequest !== null && updatePolicyRequest !== undefined) {
                if (updatePolicyRequest instanceof UpdatePolicyRequest) {
                    policyId = updatePolicyRequest.policyId;
                    body = updatePolicyRequest.body
                    xSecurityToken = updatePolicyRequest.xSecurityToken;
                    xLanguage = updatePolicyRequest.xLanguage;
                } else {
                    policyId = updatePolicyRequest['policy_id'];
                    body = updatePolicyRequest['body'];
                    xSecurityToken = updatePolicyRequest['X-Security-Token'];
                    xLanguage = updatePolicyRequest['X-Language'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling updatePolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 向指定的资源类型添加一个或多个标签。目前，您可以将标签附加到组织中的账号、组织单元、根和策略。此操作只能由组织的管理账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTagResource(createTagResourceRequest?: CreateTagResourceRequest) {
            const options = {
                method: "POST",
                url: "/v1/organizations/{resource_type}/{resource_id}/tags/create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceType;
            
            let resourceId;
            
            let xSecurityToken;

            if (createTagResourceRequest !== null && createTagResourceRequest !== undefined) {
                if (createTagResourceRequest instanceof CreateTagResourceRequest) {
                    resourceType = createTagResourceRequest.resourceType;
                    resourceId = createTagResourceRequest.resourceId;
                    body = createTagResourceRequest.body
                    xSecurityToken = createTagResourceRequest.xSecurityToken;
                } else {
                    resourceType = createTagResourceRequest['resource_type'];
                    resourceId = createTagResourceRequest['resource_id'];
                    body = createTagResourceRequest['body'];
                    xSecurityToken = createTagResourceRequest['X-Security-Token'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling createTagResource.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling createTagResource.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 从指定资源类型中删除具有指定主键的任何标签。您可以将标签绑定到组织中的账号、组织单元、根和策略。此操作只能由组织的管理账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTagResource(deleteTagResourceRequest?: DeleteTagResourceRequest) {
            const options = {
                method: "POST",
                url: "/v1/organizations/{resource_type}/{resource_id}/tags/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceType;
            
            let resourceId;
            
            let xSecurityToken;

            if (deleteTagResourceRequest !== null && deleteTagResourceRequest !== undefined) {
                if (deleteTagResourceRequest instanceof DeleteTagResourceRequest) {
                    resourceType = deleteTagResourceRequest.resourceType;
                    resourceId = deleteTagResourceRequest.resourceId;
                    body = deleteTagResourceRequest.body
                    xSecurityToken = deleteTagResourceRequest.xSecurityToken;
                } else {
                    resourceType = deleteTagResourceRequest['resource_type'];
                    resourceId = deleteTagResourceRequest['resource_id'];
                    body = deleteTagResourceRequest['body'];
                    xSecurityToken = deleteTagResourceRequest['X-Security-Token'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling deleteTagResource.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling deleteTagResource.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据资源类型及标签信息查询实例列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listResourceInstances(listResourceInstancesRequest?: ListResourceInstancesRequest) {
            const options = {
                method: "POST",
                url: "/v1/organizations/{resource_type}/resource-instances/filter",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let resourceType;
            
            let xSecurityToken;
            
            let limit;
            
            let offset;

            if (listResourceInstancesRequest !== null && listResourceInstancesRequest !== undefined) {
                if (listResourceInstancesRequest instanceof ListResourceInstancesRequest) {
                    resourceType = listResourceInstancesRequest.resourceType;
                    body = listResourceInstancesRequest.body
                    xSecurityToken = listResourceInstancesRequest.xSecurityToken;
                    limit = listResourceInstancesRequest.limit;
                    offset = listResourceInstancesRequest.offset;
                } else {
                    resourceType = listResourceInstancesRequest['resource_type'];
                    body = listResourceInstancesRequest['body'];
                    xSecurityToken = listResourceInstancesRequest['X-Security-Token'];
                    limit = listResourceInstancesRequest['limit'];
                    offset = listResourceInstancesRequest['offset'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling listResourceInstances.');
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
            options.pathParams = { 'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询资源标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listResourceTags(listResourceTagsRequest?: ListResourceTagsRequest) {
            const options = {
                method: "GET",
                url: "/v1/organizations/{resource_type}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceType;
            
            let xSecurityToken;

            if (listResourceTagsRequest !== null && listResourceTagsRequest !== undefined) {
                if (listResourceTagsRequest instanceof ListResourceTagsRequest) {
                    resourceType = listResourceTagsRequest.resourceType;
                    xSecurityToken = listResourceTagsRequest.xSecurityToken;
                } else {
                    resourceType = listResourceTagsRequest['resource_type'];
                    xSecurityToken = listResourceTagsRequest['X-Security-Token'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling listResourceTags.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列出绑定到指定资源类型的标签。您可以将标签附加到组织中的账号、组织单元、根和策略。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTagResources(listTagResourcesRequest?: ListTagResourcesRequest) {
            const options = {
                method: "GET",
                url: "/v1/organizations/{resource_type}/{resource_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let resourceType;
            
            let resourceId;
            
            let xSecurityToken;
            
            let limit;
            
            let marker;

            if (listTagResourcesRequest !== null && listTagResourcesRequest !== undefined) {
                if (listTagResourcesRequest instanceof ListTagResourcesRequest) {
                    resourceType = listTagResourcesRequest.resourceType;
                    resourceId = listTagResourcesRequest.resourceId;
                    xSecurityToken = listTagResourcesRequest.xSecurityToken;
                    limit = listTagResourcesRequest.limit;
                    marker = listTagResourcesRequest.marker;
                } else {
                    resourceType = listTagResourcesRequest['resource_type'];
                    resourceId = listTagResourcesRequest['resource_id'];
                    xSecurityToken = listTagResourcesRequest['X-Security-Token'];
                    limit = listTagResourcesRequest['limit'];
                    marker = listTagResourcesRequest['marker'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling listTagResources.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling listTagResources.');
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
            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列出绑定到指定资源的标签。您可以将标签附加到组织中的账号、组织单元、根和策略。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTagsForResource(listTagsForResourceRequest?: ListTagsForResourceRequest) {
            const options = {
                method: "GET",
                url: "/v1/organizations/resources/{resource_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let resourceId;
            
            let xSecurityToken;
            
            let limit;
            
            let marker;

            if (listTagsForResourceRequest !== null && listTagsForResourceRequest !== undefined) {
                if (listTagsForResourceRequest instanceof ListTagsForResourceRequest) {
                    resourceId = listTagsForResourceRequest.resourceId;
                    xSecurityToken = listTagsForResourceRequest.xSecurityToken;
                    limit = listTagsForResourceRequest.limit;
                    marker = listTagsForResourceRequest.marker;
                } else {
                    resourceId = listTagsForResourceRequest['resource_id'];
                    xSecurityToken = listTagsForResourceRequest['X-Security-Token'];
                    limit = listTagsForResourceRequest['limit'];
                    marker = listTagsForResourceRequest['marker'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling listTagsForResource.');
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
            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据资源类型及标签信息查询实例数量。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showResourceInstancesCount(showResourceInstancesCountRequest?: ShowResourceInstancesCountRequest) {
            const options = {
                method: "POST",
                url: "/v1/organizations/{resource_type}/resource-instances/count",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceType;
            
            let xSecurityToken;

            if (showResourceInstancesCountRequest !== null && showResourceInstancesCountRequest !== undefined) {
                if (showResourceInstancesCountRequest instanceof ShowResourceInstancesCountRequest) {
                    resourceType = showResourceInstancesCountRequest.resourceType;
                    body = showResourceInstancesCountRequest.body
                    xSecurityToken = showResourceInstancesCountRequest.xSecurityToken;
                } else {
                    resourceType = showResourceInstancesCountRequest['resource_type'];
                    body = showResourceInstancesCountRequest['body'];
                    xSecurityToken = showResourceInstancesCountRequest['X-Security-Token'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling showResourceInstancesCount.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 向指定的资源添加一个或多个标签。目前，您可以将标签附加到组织中的账号、组织单元、根和策略。此操作只能由组织的管理账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        tagResource(tagResourceRequest?: TagResourceRequest) {
            const options = {
                method: "POST",
                url: "/v1/organizations/resources/{resource_id}/tag",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceId;
            
            let xSecurityToken;

            if (tagResourceRequest !== null && tagResourceRequest !== undefined) {
                if (tagResourceRequest instanceof TagResourceRequest) {
                    resourceId = tagResourceRequest.resourceId;
                    body = tagResourceRequest.body
                    xSecurityToken = tagResourceRequest.xSecurityToken;
                } else {
                    resourceId = tagResourceRequest['resource_id'];
                    body = tagResourceRequest['body'];
                    xSecurityToken = tagResourceRequest['X-Security-Token'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling tagResource.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 从指定资源中删除具有指定主键的任何标签。您可以将标签绑定到组织中的账号、组织单元、根和策略。此操作只能由组织的管理账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        untagResource(untagResourceRequest?: UntagResourceRequest) {
            const options = {
                method: "POST",
                url: "/v1/organizations/resources/{resource_id}/untag",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceId;
            
            let xSecurityToken;

            if (untagResourceRequest !== null && untagResourceRequest !== undefined) {
                if (untagResourceRequest instanceof UntagResourceRequest) {
                    resourceId = untagResourceRequest.resourceId;
                    body = untagResourceRequest.body
                    xSecurityToken = untagResourceRequest.xSecurityToken;
                } else {
                    resourceId = untagResourceRequest['resource_id'];
                    body = untagResourceRequest['body'];
                    xSecurityToken = untagResourceRequest['X-Security-Token'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling untagResource.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 禁用服务（由service_principal指定的服务）与组织的集成。禁用可信服务后，指定服务将不可以在组织中的新账号中创建服务关联委托。这意味着该服务无法代表您对组织中的任何新账号执行操作。在服务完成从组织中的清理之前，服务仍可以在旧账号中执行操作。此接口只能由组织的管理账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disableTrustedService(disableTrustedServiceRequest?: DisableTrustedServiceRequest) {
            const options = {
                method: "POST",
                url: "/v1/organizations/trusted-services/disable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSecurityToken;

            if (disableTrustedServiceRequest !== null && disableTrustedServiceRequest !== undefined) {
                if (disableTrustedServiceRequest instanceof DisableTrustedServiceRequest) {
                    body = disableTrustedServiceRequest.body
                    xSecurityToken = disableTrustedServiceRequest.xSecurityToken;
                } else {
                    body = disableTrustedServiceRequest['body'];
                    xSecurityToken = disableTrustedServiceRequest['X-Security-Token'];
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
         * 启用服务（由service_principal指定的服务）与组织的集成。启用可信服务后，允许指定的可信服务对组织中的所有账号创建服务关联委托。这允许可信服务代表您在组织及其账号中执行操作。此接口只能由组织的管理账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enableTrustedService(enableTrustedServiceRequest?: EnableTrustedServiceRequest) {
            const options = {
                method: "POST",
                url: "/v1/organizations/trusted-services/enable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSecurityToken;

            if (enableTrustedServiceRequest !== null && enableTrustedServiceRequest !== undefined) {
                if (enableTrustedServiceRequest instanceof EnableTrustedServiceRequest) {
                    body = enableTrustedServiceRequest.body
                    xSecurityToken = enableTrustedServiceRequest.xSecurityToken;
                } else {
                    body = enableTrustedServiceRequest['body'];
                    xSecurityToken = enableTrustedServiceRequest['X-Security-Token'];
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
         * 返回启用与组织集成的可信服务列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTrustedServices(listTrustedServicesRequest?: ListTrustedServicesRequest) {
            const options = {
                method: "GET",
                url: "/v1/organizations/trusted-services",
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

            if (listTrustedServicesRequest !== null && listTrustedServicesRequest !== undefined) {
                if (listTrustedServicesRequest instanceof ListTrustedServicesRequest) {
                    xSecurityToken = listTrustedServicesRequest.xSecurityToken;
                    limit = listTrustedServicesRequest.limit;
                    marker = listTrustedServicesRequest.marker;
                } else {
                    xSecurityToken = listTrustedServicesRequest['X-Security-Token'];
                    limit = listTrustedServicesRequest['limit'];
                    marker = listTrustedServicesRequest['marker'];
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
    
    }
};

function newClient(client: HcClient): OrganizationsClient {
    return new OrganizationsClient(client);
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