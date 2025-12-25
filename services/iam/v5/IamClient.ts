import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AccessKey } from './model/AccessKey';
import { AccessKeyLastUsed } from './model/AccessKeyLastUsed';
import { AccessKeyMetadata } from './model/AccessKeyMetadata';
import { AccessKeyStatus } from './model/AccessKeyStatus';
import { Action } from './model/Action';
import { ActionAssociatedResource } from './model/ActionAssociatedResource';
import { ActionName } from './model/ActionName';
import { AddUserToGroupReqBody } from './model/AddUserToGroupReqBody';
import { AddUserToGroupV5Request } from './model/AddUserToGroupV5Request';
import { AddUserToGroupV5Response } from './model/AddUserToGroupV5Response';
import { Agency } from './model/Agency';
import { AgencyEx } from './model/AgencyEx';
import { AgencyId } from './model/AgencyId';
import { AgencyName } from './model/AgencyName';
import { AgencyUsage } from './model/AgencyUsage';
import { AllowAddressNetmask } from './model/AllowAddressNetmask';
import { AllowIpRange } from './model/AllowIpRange';
import { AsymmetricSignature } from './model/AsymmetricSignature';
import { AsymmetricSignatureWithDomainId } from './model/AsymmetricSignatureWithDomainId';
import { AttachAgencyPolicyReqBody } from './model/AttachAgencyPolicyReqBody';
import { AttachAgencyPolicyV5Request } from './model/AttachAgencyPolicyV5Request';
import { AttachAgencyPolicyV5Response } from './model/AttachAgencyPolicyV5Response';
import { AttachGroupPolicyReqBody } from './model/AttachGroupPolicyReqBody';
import { AttachGroupPolicyV5Request } from './model/AttachGroupPolicyV5Request';
import { AttachGroupPolicyV5Response } from './model/AttachGroupPolicyV5Response';
import { AttachUserPolicyReqBody } from './model/AttachUserPolicyReqBody';
import { AttachUserPolicyV5Request } from './model/AttachUserPolicyV5Request';
import { AttachUserPolicyV5Response } from './model/AttachUserPolicyV5Response';
import { AttachedAt } from './model/AttachedAt';
import { AttachedPolicy } from './model/AttachedPolicy';
import { ChangePasswordReqBody } from './model/ChangePasswordReqBody';
import { ChangePasswordV5Request } from './model/ChangePasswordV5Request';
import { ChangePasswordV5Response } from './model/ChangePasswordV5Response';
import { Condition } from './model/Condition';
import { ConditionKey } from './model/ConditionKey';
import { CreateAccessKeyV5Request } from './model/CreateAccessKeyV5Request';
import { CreateAccessKeyV5Response } from './model/CreateAccessKeyV5Response';
import { CreateAgencyReqBody } from './model/CreateAgencyReqBody';
import { CreateAgencyV5Request } from './model/CreateAgencyV5Request';
import { CreateAgencyV5Response } from './model/CreateAgencyV5Response';
import { CreateGroupReqBody } from './model/CreateGroupReqBody';
import { CreateGroupV5Request } from './model/CreateGroupV5Request';
import { CreateGroupV5Response } from './model/CreateGroupV5Response';
import { CreateLoginProfileReqBody } from './model/CreateLoginProfileReqBody';
import { CreateLoginProfileV5Request } from './model/CreateLoginProfileV5Request';
import { CreateLoginProfileV5Response } from './model/CreateLoginProfileV5Response';
import { CreatePolicyReqBody } from './model/CreatePolicyReqBody';
import { CreatePolicyV5Request } from './model/CreatePolicyV5Request';
import { CreatePolicyV5Response } from './model/CreatePolicyV5Response';
import { CreatePolicyVersionReqBody } from './model/CreatePolicyVersionReqBody';
import { CreatePolicyVersionV5Request } from './model/CreatePolicyVersionV5Request';
import { CreatePolicyVersionV5Response } from './model/CreatePolicyVersionV5Response';
import { CreateServiceLinkedAgencyReqBody } from './model/CreateServiceLinkedAgencyReqBody';
import { CreateServiceLinkedAgencyV5Request } from './model/CreateServiceLinkedAgencyV5Request';
import { CreateServiceLinkedAgencyV5Response } from './model/CreateServiceLinkedAgencyV5Response';
import { CreateUserReqBody } from './model/CreateUserReqBody';
import { CreateUserV5Request } from './model/CreateUserV5Request';
import { CreateUserV5Response } from './model/CreateUserV5Response';
import { CreateVirtualMfaDeviceReqBody } from './model/CreateVirtualMfaDeviceReqBody';
import { CreateVirtualMfaDeviceV5Request } from './model/CreateVirtualMfaDeviceV5Request';
import { CreateVirtualMfaDeviceV5Response } from './model/CreateVirtualMfaDeviceV5Response';
import { CurrentCount } from './model/CurrentCount';
import { DeleteAccessKeyV5Request } from './model/DeleteAccessKeyV5Request';
import { DeleteAccessKeyV5Response } from './model/DeleteAccessKeyV5Response';
import { DeleteAgencyV5Request } from './model/DeleteAgencyV5Request';
import { DeleteAgencyV5Response } from './model/DeleteAgencyV5Response';
import { DeleteGroupV5Request } from './model/DeleteGroupV5Request';
import { DeleteGroupV5Response } from './model/DeleteGroupV5Response';
import { DeleteLoginProfileV5Request } from './model/DeleteLoginProfileV5Request';
import { DeleteLoginProfileV5Response } from './model/DeleteLoginProfileV5Response';
import { DeletePolicyV5Request } from './model/DeletePolicyV5Request';
import { DeletePolicyV5Response } from './model/DeletePolicyV5Response';
import { DeletePolicyVersionV5Request } from './model/DeletePolicyVersionV5Request';
import { DeletePolicyVersionV5Response } from './model/DeletePolicyVersionV5Response';
import { DeleteResourceTagsV5Request } from './model/DeleteResourceTagsV5Request';
import { DeleteResourceTagsV5Response } from './model/DeleteResourceTagsV5Response';
import { DeleteServiceLinkedAgencyV5Request } from './model/DeleteServiceLinkedAgencyV5Request';
import { DeleteServiceLinkedAgencyV5Response } from './model/DeleteServiceLinkedAgencyV5Response';
import { DeleteUserV5Request } from './model/DeleteUserV5Request';
import { DeleteUserV5Response } from './model/DeleteUserV5Response';
import { DeleteVirtualMfaDeviceV5Request } from './model/DeleteVirtualMfaDeviceV5Request';
import { DeleteVirtualMfaDeviceV5Response } from './model/DeleteVirtualMfaDeviceV5Response';
import { DeletionTaskId } from './model/DeletionTaskId';
import { DeletionTaskStatus } from './model/DeletionTaskStatus';
import { Description } from './model/Description';
import { DetachAgencyPolicyReqBody } from './model/DetachAgencyPolicyReqBody';
import { DetachAgencyPolicyV5Request } from './model/DetachAgencyPolicyV5Request';
import { DetachAgencyPolicyV5Response } from './model/DetachAgencyPolicyV5Response';
import { DetachGroupPolicyReqBody } from './model/DetachGroupPolicyReqBody';
import { DetachGroupPolicyV5Request } from './model/DetachGroupPolicyV5Request';
import { DetachGroupPolicyV5Response } from './model/DetachGroupPolicyV5Response';
import { DetachUserPolicyReqBody } from './model/DetachUserPolicyReqBody';
import { DetachUserPolicyV5Request } from './model/DetachUserPolicyV5Request';
import { DetachUserPolicyV5Response } from './model/DetachUserPolicyV5Response';
import { DisableMfaDeviceReqBody } from './model/DisableMfaDeviceReqBody';
import { DisableMfaDeviceV5Request } from './model/DisableMfaDeviceV5Request';
import { DisableMfaDeviceV5Response } from './model/DisableMfaDeviceV5Response';
import { EnableMfaDeviceReqBody } from './model/EnableMfaDeviceReqBody';
import { EnableMfaDeviceV5Request } from './model/EnableMfaDeviceV5Request';
import { EnableMfaDeviceV5Response } from './model/EnableMfaDeviceV5Response';
import { FeatureStatus } from './model/FeatureStatus';
import { GetAccountSummaryV5Request } from './model/GetAccountSummaryV5Request';
import { GetAccountSummaryV5Response } from './model/GetAccountSummaryV5Response';
import { GetAgencyV5Request } from './model/GetAgencyV5Request';
import { GetAgencyV5Response } from './model/GetAgencyV5Response';
import { GetAsymmetricSignatureSwitchV5Request } from './model/GetAsymmetricSignatureSwitchV5Request';
import { GetAsymmetricSignatureSwitchV5Response } from './model/GetAsymmetricSignatureSwitchV5Response';
import { GetAuthorizationSchemaV5Request } from './model/GetAuthorizationSchemaV5Request';
import { GetAuthorizationSchemaV5Response } from './model/GetAuthorizationSchemaV5Response';
import { GetFeatureStatusV5Request } from './model/GetFeatureStatusV5Request';
import { GetFeatureStatusV5Response } from './model/GetFeatureStatusV5Response';
import { GetPolicyV5Request } from './model/GetPolicyV5Request';
import { GetPolicyV5Response } from './model/GetPolicyV5Response';
import { GetPolicyVersionV5Request } from './model/GetPolicyVersionV5Request';
import { GetPolicyVersionV5Response } from './model/GetPolicyVersionV5Response';
import { GetServiceLinkedAgencyDeletionStatusV5Request } from './model/GetServiceLinkedAgencyDeletionStatusV5Request';
import { GetServiceLinkedAgencyDeletionStatusV5Response } from './model/GetServiceLinkedAgencyDeletionStatusV5Response';
import { Group } from './model/Group';
import { GroupDescription } from './model/GroupDescription';
import { GroupId } from './model/GroupId';
import { GroupName } from './model/GroupName';
import { GroupSummary } from './model/GroupSummary';
import { Key } from './model/Key';
import { ListAccessKeysV5Request } from './model/ListAccessKeysV5Request';
import { ListAccessKeysV5Response } from './model/ListAccessKeysV5Response';
import { ListAgenciesV5Request } from './model/ListAgenciesV5Request';
import { ListAgenciesV5Response } from './model/ListAgenciesV5Response';
import { ListAttachedAgencyPoliciesV5Request } from './model/ListAttachedAgencyPoliciesV5Request';
import { ListAttachedAgencyPoliciesV5Response } from './model/ListAttachedAgencyPoliciesV5Response';
import { ListAttachedGroupPoliciesV5Request } from './model/ListAttachedGroupPoliciesV5Request';
import { ListAttachedGroupPoliciesV5Response } from './model/ListAttachedGroupPoliciesV5Response';
import { ListAttachedUserPoliciesV5Request } from './model/ListAttachedUserPoliciesV5Request';
import { ListAttachedUserPoliciesV5Response } from './model/ListAttachedUserPoliciesV5Response';
import { ListEntitiesForPolicyV5Request } from './model/ListEntitiesForPolicyV5Request';
import { ListEntitiesForPolicyV5Response } from './model/ListEntitiesForPolicyV5Response';
import { ListGroupsV5Request } from './model/ListGroupsV5Request';
import { ListGroupsV5Response } from './model/ListGroupsV5Response';
import { ListMfaDevicesV5Request } from './model/ListMfaDevicesV5Request';
import { ListMfaDevicesV5Response } from './model/ListMfaDevicesV5Response';
import { ListPoliciesV5Request } from './model/ListPoliciesV5Request';
import { ListPoliciesV5Response } from './model/ListPoliciesV5Response';
import { ListPolicyVersionsV5Request } from './model/ListPolicyVersionsV5Request';
import { ListPolicyVersionsV5Response } from './model/ListPolicyVersionsV5Response';
import { ListRegisteredServicesForAuthSchemaV5Request } from './model/ListRegisteredServicesForAuthSchemaV5Request';
import { ListRegisteredServicesForAuthSchemaV5Response } from './model/ListRegisteredServicesForAuthSchemaV5Response';
import { ListResourceTagsV5Request } from './model/ListResourceTagsV5Request';
import { ListResourceTagsV5Response } from './model/ListResourceTagsV5Response';
import { ListServicePrincipalsV5Request } from './model/ListServicePrincipalsV5Request';
import { ListServicePrincipalsV5Response } from './model/ListServicePrincipalsV5Response';
import { ListUsersV5Request } from './model/ListUsersV5Request';
import { ListUsersV5Response } from './model/ListUsersV5Response';
import { LoginPolicy } from './model/LoginPolicy';
import { LoginProfile } from './model/LoginProfile';
import { MaxSessionDuration } from './model/MaxSessionDuration';
import { MfaDeviceMetadata } from './model/MfaDeviceMetadata';
import { MfaEnabled } from './model/MfaEnabled';
import { NextMarker } from './model/NextMarker';
import { Operation } from './model/Operation';
import { PageInfo } from './model/PageInfo';
import { PasswordPolicy } from './model/PasswordPolicy';
import { PasswordResetRequired } from './model/PasswordResetRequired';
import { Path } from './model/Path';
import { Policy } from './model/Policy';
import { PolicyAgency } from './model/PolicyAgency';
import { PolicyDescription } from './model/PolicyDescription';
import { PolicyDocument } from './model/PolicyDocument';
import { PolicyGroup } from './model/PolicyGroup';
import { PolicyId } from './model/PolicyId';
import { PolicyName } from './model/PolicyName';
import { PolicyType } from './model/PolicyType';
import { PolicyUser } from './model/PolicyUser';
import { PolicyVersion } from './model/PolicyVersion';
import { PolicyVersionId } from './model/PolicyVersionId';
import { Reason } from './model/Reason';
import { RegionName } from './model/RegionName';
import { RemoveUserFromGroupReqBody } from './model/RemoveUserFromGroupReqBody';
import { RemoveUserFromGroupV5Request } from './model/RemoveUserFromGroupV5Request';
import { RemoveUserFromGroupV5Response } from './model/RemoveUserFromGroupV5Response';
import { Resource } from './model/Resource';
import { ServiceCode } from './model/ServiceCode';
import { ServicePrincipal } from './model/ServicePrincipal';
import { ServicePrincipalMetadata } from './model/ServicePrincipalMetadata';
import { SetAsymmetricSignatureReq } from './model/SetAsymmetricSignatureReq';
import { SetAsymmetricSignatureSwitchV5Request } from './model/SetAsymmetricSignatureSwitchV5Request';
import { SetAsymmetricSignatureSwitchV5Response } from './model/SetAsymmetricSignatureSwitchV5Response';
import { SetDefaultPolicyVersionV5Request } from './model/SetDefaultPolicyVersionV5Request';
import { SetDefaultPolicyVersionV5Response } from './model/SetDefaultPolicyVersionV5Response';
import { ShowAccessKeyLastUsedV5Request } from './model/ShowAccessKeyLastUsedV5Request';
import { ShowAccessKeyLastUsedV5Response } from './model/ShowAccessKeyLastUsedV5Response';
import { ShowGroupSummaryRequest } from './model/ShowGroupSummaryRequest';
import { ShowGroupSummaryResponse } from './model/ShowGroupSummaryResponse';
import { ShowGroupV5Request } from './model/ShowGroupV5Request';
import { ShowGroupV5Response } from './model/ShowGroupV5Response';
import { ShowLoginPolicyV5Request } from './model/ShowLoginPolicyV5Request';
import { ShowLoginPolicyV5Response } from './model/ShowLoginPolicyV5Response';
import { ShowLoginProfileV5Request } from './model/ShowLoginProfileV5Request';
import { ShowLoginProfileV5Response } from './model/ShowLoginProfileV5Response';
import { ShowPasswordPolicyV5Request } from './model/ShowPasswordPolicyV5Request';
import { ShowPasswordPolicyV5Response } from './model/ShowPasswordPolicyV5Response';
import { ShowUserLastLoginV5Request } from './model/ShowUserLastLoginV5Request';
import { ShowUserLastLoginV5Response } from './model/ShowUserLastLoginV5Response';
import { ShowUserV5Request } from './model/ShowUserV5Request';
import { ShowUserV5Response } from './model/ShowUserV5Response';
import { Tag } from './model/Tag';
import { TagResourceV5Request } from './model/TagResourceV5Request';
import { TagResourceV5Response } from './model/TagResourceV5Response';
import { Tags } from './model/Tags';
import { TrustAgency } from './model/TrustAgency';
import { TrustAgencyId } from './model/TrustAgencyId';
import { TrustAgencyName } from './model/TrustAgencyName';
import { TrustMaxSessionDuration } from './model/TrustMaxSessionDuration';
import { TrustPolicyDocument } from './model/TrustPolicyDocument';
import { TypeName } from './model/TypeName';
import { UpdateAccessKeyReqBody } from './model/UpdateAccessKeyReqBody';
import { UpdateAccessKeyV5Request } from './model/UpdateAccessKeyV5Request';
import { UpdateAccessKeyV5Response } from './model/UpdateAccessKeyV5Response';
import { UpdateAgencyReqBody } from './model/UpdateAgencyReqBody';
import { UpdateAgencyV5Request } from './model/UpdateAgencyV5Request';
import { UpdateAgencyV5Response } from './model/UpdateAgencyV5Response';
import { UpdateGroupReqBody } from './model/UpdateGroupReqBody';
import { UpdateGroupV5Request } from './model/UpdateGroupV5Request';
import { UpdateGroupV5Response } from './model/UpdateGroupV5Response';
import { UpdateLoginPolicyReqBody } from './model/UpdateLoginPolicyReqBody';
import { UpdateLoginPolicyV5Request } from './model/UpdateLoginPolicyV5Request';
import { UpdateLoginPolicyV5Response } from './model/UpdateLoginPolicyV5Response';
import { UpdateLoginProfileReqBody } from './model/UpdateLoginProfileReqBody';
import { UpdateLoginProfileV5Request } from './model/UpdateLoginProfileV5Request';
import { UpdateLoginProfileV5Response } from './model/UpdateLoginProfileV5Response';
import { UpdatePasswordPolicyReqBody } from './model/UpdatePasswordPolicyReqBody';
import { UpdatePasswordPolicyV5Request } from './model/UpdatePasswordPolicyV5Request';
import { UpdatePasswordPolicyV5Response } from './model/UpdatePasswordPolicyV5Response';
import { UpdateTrustPolicyReqBody } from './model/UpdateTrustPolicyReqBody';
import { UpdateTrustPolicyV5Request } from './model/UpdateTrustPolicyV5Request';
import { UpdateTrustPolicyV5Response } from './model/UpdateTrustPolicyV5Response';
import { UpdateUserReqBody } from './model/UpdateUserReqBody';
import { UpdateUserV5Request } from './model/UpdateUserV5Request';
import { UpdateUserV5Response } from './model/UpdateUserV5Response';
import { Urn } from './model/Urn';
import { UrnTemplate } from './model/UrnTemplate';
import { User } from './model/User';
import { UserDescription } from './model/UserDescription';
import { UserEnabled } from './model/UserEnabled';
import { UserEx } from './model/UserEx';
import { UserId } from './model/UserId';
import { UserLastLogin } from './model/UserLastLogin';
import { UserName } from './model/UserName';
import { UserPassword } from './model/UserPassword';
import { UserPasswordNew } from './model/UserPasswordNew';
import { UserPasswordOld } from './model/UserPasswordOld';
import { VirtualMfaDevice } from './model/VirtualMfaDevice';

export class IamClient {
    public static newBuilder(): ClientBuilder<IamClient> {
            let client = new ClientBuilder<IamClient>(newClient, 'GlobalCredentials,BasicCredentials');
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
     * 该接口可以用于获取此账号中IAM实体使用情况和IAM配额的摘要信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取此账号中IAM实体使用情况和IAM配额的摘要信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getAccountSummaryV5(getAccountSummaryV5Request?: GetAccountSummaryV5Request): Promise<GetAccountSummaryV5Response> {
        const options = ParamCreater().getAccountSummaryV5();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于获取账号非对称签名开关的状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取账号非对称签名开关状态
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getAsymmetricSignatureSwitchV5(getAsymmetricSignatureSwitchV5Request?: GetAsymmetricSignatureSwitchV5Request): Promise<GetAsymmetricSignatureSwitchV5Response> {
        const options = ParamCreater().getAsymmetricSignatureSwitchV5();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于获取此账号的功能状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取此账号的功能状态
     * @param {'v5_console' | 'access_analyzer'} featureName 功能特征的唯一名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getFeatureStatusV5(getFeatureStatusV5Request?: GetFeatureStatusV5Request): Promise<GetFeatureStatusV5Response> {
        const options = ParamCreater().getFeatureStatusV5(getFeatureStatusV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于设置账号开启或关闭非对称签名功能。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置账号开启或关闭非对称签名
     * @param {SetAsymmetricSignatureReq} setAsymmetricSignatureReq 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setAsymmetricSignatureSwitchV5(setAsymmetricSignatureSwitchV5Request?: SetAsymmetricSignatureSwitchV5Request): Promise<SetAsymmetricSignatureSwitchV5Response> {
        const options = ParamCreater().setAsymmetricSignatureSwitchV5(setAsymmetricSignatureSwitchV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于创建信任委托。
     * 
     * &gt; 信任委托只能授予身份策略且仅兼容支持身份策略的云服务，详情见[[支持身份策略与信任委托的云服务列表](https://support.huaweicloud.com/productdesc-iam/iam_01_1224.html)](tag:hws)[[支持身份策略与信任委托的云服务列表](https://support.huaweicloud.com/intl/zh-cn/productdesc-iam/iam_01_1224.html)](tag:hws_hk)[[支持身份策略与信任委托的云服务列表](https://support.huaweicloud.com/eu/productdesc-iam/iam_01_1224.html)](tag:hws_eu)[《统一身份认证用户指南》的“支持身份策略与信任委托的云服务列表”章节](tag:fcs,fcs_vm,ctc,hws_test,g42,tm)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建信任委托
     * @param {CreateAgencyReqBody} createAgencyReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAgencyV5(createAgencyV5Request?: CreateAgencyV5Request): Promise<CreateAgencyV5Response> {
        const options = ParamCreater().createAgencyV5(createAgencyV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于创建服务关联委托。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建服务关联委托
     * @param {CreateServiceLinkedAgencyReqBody} createServiceLinkedAgencyReqBody 服务主体信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createServiceLinkedAgencyV5(createServiceLinkedAgencyV5Request?: CreateServiceLinkedAgencyV5Request): Promise<CreateServiceLinkedAgencyV5Response> {
        const options = ParamCreater().createServiceLinkedAgencyV5(createServiceLinkedAgencyV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于删除信任委托。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除信任委托
     * @param {string} agencyId 信任委托ID，长度为1到64个字符，只包含字母、数字和\&quot;-\&quot;的字符串。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAgencyV5(deleteAgencyV5Request?: DeleteAgencyV5Request): Promise<DeleteAgencyV5Response> {
        const options = ParamCreater().deleteAgencyV5(deleteAgencyV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于服务关联委托删除自己。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除服务关联委托
     * @param {string} agencyId 委托或信任委托ID，长度为1到64个字符，只包含字母、数字和\&quot;-\&quot;的字符串。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteServiceLinkedAgencyV5(deleteServiceLinkedAgencyV5Request?: DeleteServiceLinkedAgencyV5Request): Promise<DeleteServiceLinkedAgencyV5Response> {
        const options = ParamCreater().deleteServiceLinkedAgencyV5(deleteServiceLinkedAgencyV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于查询委托或信任委托详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询委托或信任委托详情
     * @param {string} agencyId 委托或信任委托ID，长度为1到64个字符，只包含字母、数字和\&quot;-\&quot;的字符串。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getAgencyV5(getAgencyV5Request?: GetAgencyV5Request): Promise<GetAgencyV5Response> {
        const options = ParamCreater().getAgencyV5(getAgencyV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于获取服务关联委托删除状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取服务关联委托删除状态
     * @param {string} deletionTaskId 删除任务ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getServiceLinkedAgencyDeletionStatusV5(getServiceLinkedAgencyDeletionStatusV5Request?: GetServiceLinkedAgencyDeletionStatusV5Request): Promise<GetServiceLinkedAgencyDeletionStatusV5Response> {
        const options = ParamCreater().getServiceLinkedAgencyDeletionStatusV5(getServiceLinkedAgencyDeletionStatusV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于查询指定条件下的委托及信任委托列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定条件下的委托及信任委托列表
     * @param {number} [limit] 每页显示的条目数量，范围为1到200条，默认为100条。
     * @param {string} [marker] 分页标记，长度为4到400个字符，只包含字母、数字、\&quot;+\&quot;、\&quot;/\&quot;、\&quot;&#x3D;\&quot;、\&quot;-\&quot;和\&quot;_\&quot;的字符串。
     * @param {string} [pathPrefix] 资源路径前缀，由若干段字符串拼接而成，每段先包含一个或多个字母、数字、\&quot;.\&quot;、\&quot;,\&quot;、\&quot;+\&quot;、\&quot;@\&quot;、\&quot;&#x3D;\&quot;、\&quot;_\&quot;或\&quot;-\&quot;，并以\&quot;/\&quot;结尾，例如\&quot;foo/bar/\&quot;。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAgenciesV5(listAgenciesV5Request?: ListAgenciesV5Request): Promise<ListAgenciesV5Response> {
        const options = ParamCreater().listAgenciesV5(listAgenciesV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于修改信任委托。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改信任委托
     * @param {string} agencyId 信任委托ID，长度为1到64个字符，只包含字母、数字和\&quot;-\&quot;的字符串。
     * @param {UpdateAgencyReqBody} updateAgencyReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAgencyV5(updateAgencyV5Request?: UpdateAgencyV5Request): Promise<UpdateAgencyV5Response> {
        const options = ParamCreater().updateAgencyV5(updateAgencyV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于修改信任委托信任策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改信任委托信任策略
     * @param {string} agencyId 信任委托ID，长度为1到64个字符，只包含字母、数字和\&quot;-\&quot;的字符串。
     * @param {UpdateTrustPolicyReqBody} updateTrustPolicyReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTrustPolicyV5(updateTrustPolicyV5Request?: UpdateTrustPolicyV5Request): Promise<UpdateTrustPolicyV5Response> {
        const options = ParamCreater().updateTrustPolicyV5(updateTrustPolicyV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于查询指定云服务的授权概要。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定服务授权概要
     * @param {string} serviceCode 服务名称缩写，长度为1到56个字符，只包含字母、数字和\&quot;-\&quot;的字符串。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getAuthorizationSchemaV5(getAuthorizationSchemaV5Request?: GetAuthorizationSchemaV5Request): Promise<GetAuthorizationSchemaV5Response> {
        const options = ParamCreater().getAuthorizationSchemaV5(getAuthorizationSchemaV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于查询已注册云服务列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询已注册云服务列表
     * @param {number} [limit] 每页显示的条目数量，范围为1到200条，默认为100条。
     * @param {string} [marker] 分页标记，长度为4到400个字符，只包含字母、数字、\&quot;+\&quot;、\&quot;/\&quot;、\&quot;&#x3D;\&quot;、\&quot;-\&quot;和\&quot;_\&quot;的字符串。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRegisteredServicesForAuthSchemaV5(listRegisteredServicesForAuthSchemaV5Request?: ListRegisteredServicesForAuthSchemaV5Request): Promise<ListRegisteredServicesForAuthSchemaV5Response> {
        const options = ParamCreater().listRegisteredServicesForAuthSchemaV5(listRegisteredServicesForAuthSchemaV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于获取全部服务主体。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取全部服务主体
     * @param {number} [limit] 每页显示的条目数量，范围为1到200条，默认为100条。
     * @param {string} [marker] 分页标记，长度为4到400个字符，只包含字母、数字、\&quot;+\&quot;、\&quot;/\&quot;、\&quot;&#x3D;\&quot;、\&quot;-\&quot;和\&quot;_\&quot;的字符串。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 选择接口返回的信息的语言，可以为中文（\&quot;zh-cn\&quot;）或英文（\&quot;en-us\&quot;），默认为中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listServicePrincipalsV5(listServicePrincipalsV5Request?: ListServicePrincipalsV5Request): Promise<ListServicePrincipalsV5Response> {
        const options = ParamCreater().listServicePrincipalsV5(listServicePrincipalsV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于添加IAM用户到用户组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加IAM用户到用户组
     * @param {string} groupId 用户组ID，长度为1到64个字符，只包含字母、数字和\&quot;-\&quot;的字符串。
     * @param {AddUserToGroupReqBody} addUserToGroupReqBody The ID of the user to be added to the group.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addUserToGroupV5(addUserToGroupV5Request?: AddUserToGroupV5Request): Promise<AddUserToGroupV5Response> {
        const options = ParamCreater().addUserToGroupV5(addUserToGroupV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于创建用户组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建用户组
     * @param {CreateGroupReqBody} createGroupReqBody The information of the group.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createGroupV5(createGroupV5Request?: CreateGroupV5Request): Promise<CreateGroupV5Response> {
        const options = ParamCreater().createGroupV5(createGroupV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于删除用户组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除用户组
     * @param {string} groupId 用户组ID，长度为1到64个字符，只包含字母、数字和\&quot;-\&quot;的字符串。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteGroupV5(deleteGroupV5Request?: DeleteGroupV5Request): Promise<DeleteGroupV5Response> {
        const options = ParamCreater().deleteGroupV5(deleteGroupV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于查询用户组列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户组列表
     * @param {number} [limit] 每页显示的条目数量，范围为1到200条，默认为100条。
     * @param {string} [marker] 分页标记，长度为4到400个字符，只包含字母、数字、\&quot;+\&quot;、\&quot;/\&quot;、\&quot;&#x3D;\&quot;、\&quot;-\&quot;和\&quot;_\&quot;的字符串。
     * @param {string} [userId] IAM用户ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGroupsV5(listGroupsV5Request?: ListGroupsV5Request): Promise<ListGroupsV5Response> {
        const options = ParamCreater().listGroupsV5(listGroupsV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于移除用户组中的IAM用户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 移除用户组中的IAM用户
     * @param {string} groupId 用户组ID，长度为1到64个字符，只包含字母、数字和\&quot;-\&quot;的字符串。
     * @param {RemoveUserFromGroupReqBody} removeUserFromGroupReqBody The ID of the user to be removed from the group.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public removeUserFromGroupV5(removeUserFromGroupV5Request?: RemoveUserFromGroupV5Request): Promise<RemoveUserFromGroupV5Response> {
        const options = ParamCreater().removeUserFromGroupV5(removeUserFromGroupV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于查询用户组相关属性。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户组相关属性
     * @param {number} [limit] 每页显示的条目数量，范围为1到200条，默认为100条。
     * @param {string} [marker] 分页标记，长度为4到400个字符，只包含字母、数字、\&quot;+\&quot;、\&quot;/\&quot;、\&quot;&#x3D;\&quot;、\&quot;-\&quot;和\&quot;_\&quot;的字符串。
     * @param {string} [userId] IAM用户ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showGroupSummary(showGroupSummaryRequest?: ShowGroupSummaryRequest): Promise<ShowGroupSummaryResponse> {
        const options = ParamCreater().showGroupSummary(showGroupSummaryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于查询用户组详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户组详情
     * @param {string} groupId 用户组ID，长度为1到64个字符，只包含字母、数字和\&quot;-\&quot;的字符串。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showGroupV5(showGroupV5Request?: ShowGroupV5Request): Promise<ShowGroupV5Response> {
        const options = ParamCreater().showGroupV5(showGroupV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于修改用户组信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改用户组
     * @param {string} groupId 用户组ID，长度为1到64个字符，只包含字母、数字和\&quot;-\&quot;的字符串。
     * @param {UpdateGroupReqBody} updateGroupReqBody The information of the group.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateGroupV5(updateGroupV5Request?: UpdateGroupV5Request): Promise<UpdateGroupV5Response> {
        const options = ParamCreater().updateGroupV5(updateGroupV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于创建MFA设备。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建MFA设备
     * @param {CreateVirtualMfaDeviceReqBody} createVirtualMfaDeviceReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVirtualMfaDeviceV5(createVirtualMfaDeviceV5Request?: CreateVirtualMfaDeviceV5Request): Promise<CreateVirtualMfaDeviceV5Response> {
        const options = ParamCreater().createVirtualMfaDeviceV5(createVirtualMfaDeviceV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于删除MFA设备。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除MFA设备
     * @param {string} userId IAM用户ID。
     * @param {string} serialNumber MFA设备序列号。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteVirtualMfaDeviceV5(deleteVirtualMfaDeviceV5Request?: DeleteVirtualMfaDeviceV5Request): Promise<DeleteVirtualMfaDeviceV5Response> {
        const options = ParamCreater().deleteVirtualMfaDeviceV5(deleteVirtualMfaDeviceV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于禁用指定的MFA设备并删除其与对应IAM用户的关联。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 禁用MFA设备
     * @param {DisableMfaDeviceReqBody} disableMfaDeviceReqBody 禁止MFA设备接口请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disableMfaDeviceV5(disableMfaDeviceV5Request?: DisableMfaDeviceV5Request): Promise<DisableMfaDeviceV5Response> {
        const options = ParamCreater().disableMfaDeviceV5(disableMfaDeviceV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于启用指定的MFA设备并将其与指定的IAM用户关联。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启用MFA设备
     * @param {EnableMfaDeviceReqBody} enableMfaDeviceReqBody 允许MFA设备接口请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enableMfaDeviceV5(enableMfaDeviceV5Request?: EnableMfaDeviceV5Request): Promise<EnableMfaDeviceV5Response> {
        const options = ParamCreater().enableMfaDeviceV5(enableMfaDeviceV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于列举全部MFA设备。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列举全部MFA设备
     * @param {string} [userId] IAM用户ID。
     * @param {number} [limit] 每页显示的条目数量，范围为1到200条，默认为100条。
     * @param {string} [marker] 分页标记，长度为4到400个字符，只包含字母、数字、\&quot;+\&quot;、\&quot;/\&quot;、\&quot;&#x3D;\&quot;、\&quot;-\&quot;和\&quot;_\&quot;的字符串。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMfaDevicesV5(listMfaDevicesV5Request?: ListMfaDevicesV5Request): Promise<ListMfaDevicesV5Response> {
        const options = ParamCreater().listMfaDevicesV5(listMfaDevicesV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于创建一个默认版本为v1的新自定义身份策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建自定义身份策略
     * @param {CreatePolicyReqBody} createPolicyReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPolicyV5(createPolicyV5Request?: CreatePolicyV5Request): Promise<CreatePolicyV5Response> {
        const options = ParamCreater().createPolicyV5(createPolicyV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于为指定身份策略创建一个新版本。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 为指定身份策略创建一个新版本
     * @param {string} policyId 身份策略ID，长度为1到64个字符，只包含字母、数字和\&quot;-\&quot;的字符串。
     * @param {CreatePolicyVersionReqBody} createPolicyVersionReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPolicyVersionV5(createPolicyVersionV5Request?: CreatePolicyVersionV5Request): Promise<CreatePolicyVersionV5Response> {
        const options = ParamCreater().createPolicyVersionV5(createPolicyVersionV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于删除一个存在的自定义身份策略，必须确保该自定义身份策略没有附加在任何IAM用户、用户组、委托或信任委托上。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除自定义身份策略
     * @param {string} policyId 身份策略ID，长度为1到64个字符，只包含字母、数字和\&quot;-\&quot;的字符串。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePolicyV5(deletePolicyV5Request?: DeletePolicyV5Request): Promise<DeletePolicyV5Response> {
        const options = ParamCreater().deletePolicyV5(deletePolicyV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于删除指定身份策略的指定版本。默认身份策略版本不能被删除。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除指定身份策略版本
     * @param {string} policyId 身份策略ID，长度为1到64个字符，只包含字母、数字和\&quot;-\&quot;的字符串。
     * @param {string} versionId 身份策略版本号，以\&quot;v\&quot;开头后跟数字的字符串，例如\&quot;v5\&quot;。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePolicyVersionV5(deletePolicyVersionV5Request?: DeletePolicyVersionV5Request): Promise<DeletePolicyVersionV5Response> {
        const options = ParamCreater().deletePolicyVersionV5(deletePolicyVersionV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于通过身份策略ID获取身份策略信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 通过身份策略ID获取身份策略
     * @param {string} policyId 身份策略ID，长度为1到64个字符，只包含字母、数字和\&quot;-\&quot;的字符串。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 选择接口返回的信息的语言，可以为中文（\&quot;zh-cn\&quot;）或英文（\&quot;en-us\&quot;），默认为中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getPolicyV5(getPolicyV5Request?: GetPolicyV5Request): Promise<GetPolicyV5Response> {
        const options = ParamCreater().getPolicyV5(getPolicyV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于查询指定身份策略的指定版本的相关信息，包括身份策略文档。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定身份策略版本
     * @param {string} policyId 身份策略ID，长度为1到64个字符，只包含字母、数字和\&quot;-\&quot;的字符串。
     * @param {string} versionId 身份策略版本号，以\&quot;v\&quot;开头后跟数字的字符串，例如\&quot;v5\&quot;。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getPolicyVersionV5(getPolicyVersionV5Request?: GetPolicyVersionV5Request): Promise<GetPolicyVersionV5Response> {
        const options = ParamCreater().getPolicyVersionV5(getPolicyVersionV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于查询所有身份策略，包含系统预置身份策略和自定义身份策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有身份策略
     * @param {number} [limit] 每页显示的条目数量，范围为1到200条，默认为100条。
     * @param {string} [marker] 分页标记，长度为4到400个字符，只包含字母、数字、\&quot;+\&quot;、\&quot;/\&quot;、\&quot;&#x3D;\&quot;、\&quot;-\&quot;和\&quot;_\&quot;的字符串。
     * @param {'custom' | 'system'} [policyType] 身份策略类型，可以为“自定义”（custom）或“系统预置”（system）。
     * @param {string} [pathPrefix] 资源路径前缀，由若干段字符串拼接而成，每段先包含一个或多个字母、数字、\&quot;.\&quot;、\&quot;,\&quot;、\&quot;+\&quot;、\&quot;@\&quot;、\&quot;&#x3D;\&quot;、\&quot;_\&quot;或\&quot;-\&quot;，并以\&quot;/\&quot;结尾，例如\&quot;foo/bar/\&quot;。
     * @param {boolean} [onlyAttached] 是否仅列举存在附加实体的身份策略。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 选择接口返回的信息的语言，可以为中文（\&quot;zh-cn\&quot;）或英文（\&quot;en-us\&quot;），默认为中文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPoliciesV5(listPoliciesV5Request?: ListPoliciesV5Request): Promise<ListPoliciesV5Response> {
        const options = ParamCreater().listPoliciesV5(listPoliciesV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于查询指定身份策略的所有版本信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定身份策略的所有版本
     * @param {string} policyId 身份策略ID，长度为1到64个字符，只包含字母、数字和\&quot;-\&quot;的字符串。
     * @param {number} [limit] 每页显示的条目数量，范围为1到200条，默认为100条。
     * @param {string} [marker] 分页标记，长度为4到400个字符，只包含字母、数字、\&quot;+\&quot;、\&quot;/\&quot;、\&quot;&#x3D;\&quot;、\&quot;-\&quot;和\&quot;_\&quot;的字符串。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPolicyVersionsV5(listPolicyVersionsV5Request?: ListPolicyVersionsV5Request): Promise<ListPolicyVersionsV5Response> {
        const options = ParamCreater().listPolicyVersionsV5(listPolicyVersionsV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于将指定身份策略的指定版本设置为默认版本。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 将指定身份策略版本设置为默认版本
     * @param {string} policyId 身份策略ID，长度为1到64个字符，只包含字母、数字和\&quot;-\&quot;的字符串。
     * @param {string} versionId 身份策略版本号，以\&quot;v\&quot;开头后跟数字的字符串，例如\&quot;v5\&quot;。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setDefaultPolicyVersionV5(setDefaultPolicyVersionV5Request?: SetDefaultPolicyVersionV5Request): Promise<SetDefaultPolicyVersionV5Response> {
        const options = ParamCreater().setDefaultPolicyVersionV5(setDefaultPolicyVersionV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于为指定委托或信任委托附加指定身份策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 为委托或信任委托附加身份策略
     * @param {string} policyId 身份策略ID，长度为1到64个字符，只包含字母、数字和\&quot;-\&quot;的字符串。
     * @param {AttachAgencyPolicyReqBody} attachAgencyPolicyReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public attachAgencyPolicyV5(attachAgencyPolicyV5Request?: AttachAgencyPolicyV5Request): Promise<AttachAgencyPolicyV5Response> {
        const options = ParamCreater().attachAgencyPolicyV5(attachAgencyPolicyV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于为指定用户组附加指定身份策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 为用户组附加身份策略
     * @param {string} policyId 身份策略ID，长度为1到64个字符，只包含字母、数字和\&quot;-\&quot;的字符串。
     * @param {AttachGroupPolicyReqBody} attachGroupPolicyReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public attachGroupPolicyV5(attachGroupPolicyV5Request?: AttachGroupPolicyV5Request): Promise<AttachGroupPolicyV5Response> {
        const options = ParamCreater().attachGroupPolicyV5(attachGroupPolicyV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于为指定IAM用户附加指定身份策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 为IAM用户附加身份策略
     * @param {string} policyId 身份策略ID，长度为1到64个字符，只包含字母、数字和\&quot;-\&quot;的字符串。
     * @param {AttachUserPolicyReqBody} attachUserPolicyReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public attachUserPolicyV5(attachUserPolicyV5Request?: AttachUserPolicyV5Request): Promise<AttachUserPolicyV5Response> {
        const options = ParamCreater().attachUserPolicyV5(attachUserPolicyV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于从指定委托或信任委托中分离指定身份策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 从委托或信任委托分离身份策略
     * @param {string} policyId 身份策略ID，长度为1到64个字符，只包含字母、数字和\&quot;-\&quot;的字符串。
     * @param {DetachAgencyPolicyReqBody} detachAgencyPolicyReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public detachAgencyPolicyV5(detachAgencyPolicyV5Request?: DetachAgencyPolicyV5Request): Promise<DetachAgencyPolicyV5Response> {
        const options = ParamCreater().detachAgencyPolicyV5(detachAgencyPolicyV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于从指定用户组分离指定身份策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 从用户组分离身份策略
     * @param {string} policyId 身份策略ID，长度为1到64个字符，只包含字母、数字和\&quot;-\&quot;的字符串。
     * @param {DetachGroupPolicyReqBody} detachGroupPolicyReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public detachGroupPolicyV5(detachGroupPolicyV5Request?: DetachGroupPolicyV5Request): Promise<DetachGroupPolicyV5Response> {
        const options = ParamCreater().detachGroupPolicyV5(detachGroupPolicyV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于从指定的IAM用户分离指定身份策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 从IAM用户分离身份策略
     * @param {string} policyId 身份策略ID，长度为1到64个字符，只包含字母、数字和\&quot;-\&quot;的字符串。
     * @param {DetachUserPolicyReqBody} detachUserPolicyReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public detachUserPolicyV5(detachUserPolicyV5Request?: DetachUserPolicyV5Request): Promise<DetachUserPolicyV5Response> {
        const options = ParamCreater().detachUserPolicyV5(detachUserPolicyV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可用于查询指定委托或信任委托附加的所有身份策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定委托或信任委托附加的所有身份策略
     * @param {string} agencyId 委托或信任委托ID，长度为1到64个字符，只包含字母、数字和\&quot;-\&quot;的字符串。
     * @param {number} [limit] 每页显示的条目数量，范围为1到200条，默认为100条。
     * @param {string} [marker] 分页标记，长度为4到400个字符，只包含字母、数字、\&quot;+\&quot;、\&quot;/\&quot;、\&quot;&#x3D;\&quot;、\&quot;-\&quot;和\&quot;_\&quot;的字符串。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAttachedAgencyPoliciesV5(listAttachedAgencyPoliciesV5Request?: ListAttachedAgencyPoliciesV5Request): Promise<ListAttachedAgencyPoliciesV5Response> {
        const options = ParamCreater().listAttachedAgencyPoliciesV5(listAttachedAgencyPoliciesV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可用于查询指定用户组附加的所有身份策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定用户组附加的所有身份策略
     * @param {string} groupId 用户组ID，长度为1到64个字符，只包含字母、数字和\&quot;-\&quot;的字符串。
     * @param {number} [limit] 每页显示的条目数量，范围为1到200条，默认为100条。
     * @param {string} [marker] 分页标记，长度为4到400个字符，只包含字母、数字、\&quot;+\&quot;、\&quot;/\&quot;、\&quot;&#x3D;\&quot;、\&quot;-\&quot;和\&quot;_\&quot;的字符串。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAttachedGroupPoliciesV5(listAttachedGroupPoliciesV5Request?: ListAttachedGroupPoliciesV5Request): Promise<ListAttachedGroupPoliciesV5Response> {
        const options = ParamCreater().listAttachedGroupPoliciesV5(listAttachedGroupPoliciesV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可用于查询指定IAM用户附加的所有身份策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定IAM用户附加的所有身份策略
     * @param {string} userId IAM用户ID。
     * @param {number} [limit] 每页显示的条目数量，范围为1到200条，默认为100条。
     * @param {string} [marker] 分页标记，长度为4到400个字符，只包含字母、数字、\&quot;+\&quot;、\&quot;/\&quot;、\&quot;&#x3D;\&quot;、\&quot;-\&quot;和\&quot;_\&quot;的字符串。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAttachedUserPoliciesV5(listAttachedUserPoliciesV5Request?: ListAttachedUserPoliciesV5Request): Promise<ListAttachedUserPoliciesV5Response> {
        const options = ParamCreater().listAttachedUserPoliciesV5(listAttachedUserPoliciesV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可用于查询指定身份策略附加的所有实体。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定身份策略附加的所有实体
     * @param {string} policyId 身份策略ID，长度为1到64个字符，只包含字母、数字和\&quot;-\&quot;的字符串。
     * @param {'user' | 'group' | 'agency'} [entityType] 实体类型，包含user、 group 和 agency三种类型。
     * @param {number} [limit] 每页显示的条目数量，范围为1到200条，默认为100条。
     * @param {string} [marker] 分页标记，长度为4到400个字符，只包含字母、数字、\&quot;+\&quot;、\&quot;/\&quot;、\&quot;&#x3D;\&quot;、\&quot;-\&quot;和\&quot;_\&quot;的字符串。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEntitiesForPolicyV5(listEntitiesForPolicyV5Request?: ListEntitiesForPolicyV5Request): Promise<ListEntitiesForPolicyV5Response> {
        const options = ParamCreater().listEntitiesForPolicyV5(listEntitiesForPolicyV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于删除指定资源的部分标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除指定资源的部分标签
     * @param {string} resourceId 资源ID，长度为1到64个字符，只包含字母、数字和\&quot;-\&quot;的字符串。
     * @param {'agency' | 'user'} resourceType 资源类型，可以为“信任委托”（trust agency）或“IAM用户”（user）。
     * @param {Array<string>} requestBody 待删除的标签键列表。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteResourceTagsV5(deleteResourceTagsV5Request?: DeleteResourceTagsV5Request): Promise<DeleteResourceTagsV5Response> {
        const options = ParamCreater().deleteResourceTagsV5(deleteResourceTagsV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于获取指定资源的所有标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定资源的所有标签
     * @param {string} resourceId 资源ID，长度为1到64个字符，只包含字母、数字和\&quot;-\&quot;的字符串。
     * @param {'agency' | 'user'} resourceType 资源类型，可以为“信任委托”（trust agency）或“IAM用户”（user）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listResourceTagsV5(listResourceTagsV5Request?: ListResourceTagsV5Request): Promise<ListResourceTagsV5Response> {
        const options = ParamCreater().listResourceTagsV5(listResourceTagsV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于为IAM资源打上标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 为IAM资源打上标签
     * @param {string} resourceId 资源ID，长度为1到64个字符，只包含字母、数字和\&quot;-\&quot;的字符串。
     * @param {'agency' | 'user'} resourceType 资源类型，可以为“信任委托”（trust agency）或“IAM用户”（user）。
     * @param {Tags} tags 需要创建的资源标签信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public tagResourceV5(tagResourceV5Request?: TagResourceV5Request): Promise<TagResourceV5Response> {
        const options = ParamCreater().tagResourceV5(tagResourceV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于查询账号登录策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询账号登录策略
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showLoginPolicyV5(showLoginPolicyV5Request?: ShowLoginPolicyV5Request): Promise<ShowLoginPolicyV5Response> {
        const options = ParamCreater().showLoginPolicyV5();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于查询账号密码策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询账号密码策略
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPasswordPolicyV5(showPasswordPolicyV5Request?: ShowPasswordPolicyV5Request): Promise<ShowPasswordPolicyV5Response> {
        const options = ParamCreater().showPasswordPolicyV5();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于修改账号登录策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改账号登录策略
     * @param {UpdateLoginPolicyReqBody} updateLoginPolicyReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateLoginPolicyV5(updateLoginPolicyV5Request?: UpdateLoginPolicyV5Request): Promise<UpdateLoginPolicyV5Response> {
        const options = ParamCreater().updateLoginPolicyV5(updateLoginPolicyV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于修改账号密码策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改账号密码策略
     * @param {UpdatePasswordPolicyReqBody} updatePasswordPolicyReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePasswordPolicyV5(updatePasswordPolicyV5Request?: UpdatePasswordPolicyV5Request): Promise<UpdatePasswordPolicyV5Response> {
        const options = ParamCreater().updatePasswordPolicyV5(updatePasswordPolicyV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于创建IAM用户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建IAM用户
     * @param {CreateUserReqBody} createUserReqBody The information about the user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createUserV5(createUserV5Request?: CreateUserV5Request): Promise<CreateUserV5Response> {
        const options = ParamCreater().createUserV5(createUserV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于删除指定IAM用户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除IAM用户
     * @param {string} userId IAM用户ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteUserV5(deleteUserV5Request?: DeleteUserV5Request): Promise<DeleteUserV5Response> {
        const options = ParamCreater().deleteUserV5(deleteUserV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于查询IAM用户列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询IAM用户列表
     * @param {number} [limit] 每页显示的条目数量，范围为1到200条，默认为100条。
     * @param {string} [marker] 分页标记，长度为4到400个字符，只包含字母、数字、\&quot;+\&quot;、\&quot;/\&quot;、\&quot;&#x3D;\&quot;、\&quot;-\&quot;和\&quot;_\&quot;的字符串。
     * @param {string} [groupId] 用户组ID，长度为1到64个字符，只包含字母、数字和\&quot;-\&quot;的字符串。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listUsersV5(listUsersV5Request?: ListUsersV5Request): Promise<ListUsersV5Response> {
        const options = ParamCreater().listUsersV5(listUsersV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于查询IAM用户的最后登录时间。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询IAM用户最后登录时间
     * @param {string} userId IAM用户ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showUserLastLoginV5(showUserLastLoginV5Request?: ShowUserLastLoginV5Request): Promise<ShowUserLastLoginV5Response> {
        const options = ParamCreater().showUserLastLoginV5(showUserLastLoginV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于查询IAM用户详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询IAM用户详情
     * @param {string} userId IAM用户ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showUserV5(showUserV5Request?: ShowUserV5Request): Promise<ShowUserV5Response> {
        const options = ParamCreater().showUserV5(showUserV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于修改IAM用户信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改IAM用户信息
     * @param {string} userId IAM用户ID。
     * @param {UpdateUserReqBody} updateUserReqBody The information about the user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateUserV5(updateUserV5Request?: UpdateUserV5Request): Promise<UpdateUserV5Response> {
        const options = ParamCreater().updateUserV5(updateUserV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于IAM用户修改自己的密码。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改IAM用户密码
     * @param {ChangePasswordReqBody} changePasswordReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changePasswordV5(changePasswordV5Request?: ChangePasswordV5Request): Promise<ChangePasswordV5Response> {
        const options = ParamCreater().changePasswordV5(changePasswordV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于给IAM用户创建永久访问密钥。
     * 
     * 访问密钥（Access Key ID/Secret Access Key，简称AK/SK），是您通过开发工具（API、CLI、SDK）访问的身份凭证，不用于登录控制台。系统通过AK识别访问用户的身份，通过SK进行签名验证，通过加密签名验证可以确保请求的机密性、完整性和请求者身份的正确性。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建永久访问密钥
     * @param {string} userId IAM用户ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAccessKeyV5(createAccessKeyV5Request?: CreateAccessKeyV5Request): Promise<CreateAccessKeyV5Response> {
        const options = ParamCreater().createAccessKeyV5(createAccessKeyV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于创建指定IAM用户的登录信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建IAM用户登录信息
     * @param {string} userId IAM用户ID。
     * @param {CreateLoginProfileReqBody} createLoginProfileReqBody The information about the login profile.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createLoginProfileV5(createLoginProfileV5Request?: CreateLoginProfileV5Request): Promise<CreateLoginProfileV5Response> {
        const options = ParamCreater().createLoginProfileV5(createLoginProfileV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于删除IAM用户的指定永久访问密钥。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除指定永久访问密钥
     * @param {string} userId IAM用户ID。
     * @param {string} accessKeyId 永久访问密钥ID，即AK。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAccessKeyV5(deleteAccessKeyV5Request?: DeleteAccessKeyV5Request): Promise<DeleteAccessKeyV5Response> {
        const options = ParamCreater().deleteAccessKeyV5(deleteAccessKeyV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于删除指定IAM用户的登录信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除IAM用户登录信息
     * @param {string} userId IAM用户ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteLoginProfileV5(deleteLoginProfileV5Request?: DeleteLoginProfileV5Request): Promise<DeleteLoginProfileV5Response> {
        const options = ParamCreater().deleteLoginProfileV5(deleteLoginProfileV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于查询IAM用户的所有永久访问密钥。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有永久访问密钥
     * @param {string} userId IAM用户ID。
     * @param {number} [limit] 每页显示的条目数量，范围为1到200条，默认为100条。
     * @param {string} [marker] 分页标记，长度为4到400个字符，只包含字母、数字、\&quot;+\&quot;、\&quot;/\&quot;、\&quot;&#x3D;\&quot;、\&quot;-\&quot;和\&quot;_\&quot;的字符串。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAccessKeysV5(listAccessKeysV5Request?: ListAccessKeysV5Request): Promise<ListAccessKeysV5Response> {
        const options = ParamCreater().listAccessKeysV5(listAccessKeysV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于查询IAM用户的指定永久访问密钥的最后使用时间。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定永久访问密钥最后使用时间
     * @param {string} userId IAM用户ID。
     * @param {string} accessKeyId 永久访问密钥ID，即AK。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAccessKeyLastUsedV5(showAccessKeyLastUsedV5Request?: ShowAccessKeyLastUsedV5Request): Promise<ShowAccessKeyLastUsedV5Response> {
        const options = ParamCreater().showAccessKeyLastUsedV5(showAccessKeyLastUsedV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于查询指定IAM用户的登录信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询IAM用户登录信息
     * @param {string} userId IAM用户ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showLoginProfileV5(showLoginProfileV5Request?: ShowLoginProfileV5Request): Promise<ShowLoginProfileV5Response> {
        const options = ParamCreater().showLoginProfileV5(showLoginProfileV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于修改IAM用户的指定永久访问密钥。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改指定永久访问密钥
     * @param {string} userId IAM用户ID。
     * @param {string} accessKeyId 永久访问密钥ID，即AK。
     * @param {UpdateAccessKeyReqBody} updateAccessKeyReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAccessKeyV5(updateAccessKeyV5Request?: UpdateAccessKeyV5Request): Promise<UpdateAccessKeyV5Response> {
        const options = ParamCreater().updateAccessKeyV5(updateAccessKeyV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于修改指定IAM用户的登录信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改IAM用户登录信息
     * @param {string} userId IAM用户ID。
     * @param {UpdateLoginProfileReqBody} updateLoginProfileReqBody The information about the login profile.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateLoginProfileV5(updateLoginProfileV5Request?: UpdateLoginProfileV5Request): Promise<UpdateLoginProfileV5Response> {
        const options = ParamCreater().updateLoginProfileV5(updateLoginProfileV5Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 该接口可以用于获取此账号中IAM实体使用情况和IAM配额的摘要信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getAccountSummaryV5() {
            const options = {
                method: "GET",
                url: "/v5/account-summary",
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
         * 该接口用于获取账号非对称签名开关的状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getAsymmetricSignatureSwitchV5() {
            const options = {
                method: "GET",
                url: "/v5/asymmetric-signature-switch",
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
         * 该接口可以用于获取此账号的功能状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getFeatureStatusV5(getFeatureStatusV5Request?: GetFeatureStatusV5Request) {
            const options = {
                method: "GET",
                url: "/v5/features/{feature_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let featureName;

            if (getFeatureStatusV5Request !== null && getFeatureStatusV5Request !== undefined) {
                if (getFeatureStatusV5Request instanceof GetFeatureStatusV5Request) {
                    featureName = getFeatureStatusV5Request.featureName;
                } else {
                    featureName = getFeatureStatusV5Request['feature_name'];
                }
            }

        
            if (featureName === null || featureName === undefined) {
            throw new RequiredError('featureName','Required parameter featureName was null or undefined when calling getFeatureStatusV5.');
            }

            options.pathParams = { 'feature_name': featureName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于设置账号开启或关闭非对称签名功能。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setAsymmetricSignatureSwitchV5(setAsymmetricSignatureSwitchV5Request?: SetAsymmetricSignatureSwitchV5Request) {
            const options = {
                method: "PUT",
                url: "/v5/asymmetric-signature-switch",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (setAsymmetricSignatureSwitchV5Request !== null && setAsymmetricSignatureSwitchV5Request !== undefined) {
                if (setAsymmetricSignatureSwitchV5Request instanceof SetAsymmetricSignatureSwitchV5Request) {
                    body = setAsymmetricSignatureSwitchV5Request.body
                } else {
                    body = setAsymmetricSignatureSwitchV5Request['body'];
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
         * 该接口可以用于创建信任委托。
         * 
         * &gt; 信任委托只能授予身份策略且仅兼容支持身份策略的云服务，详情见[[支持身份策略与信任委托的云服务列表](https://support.huaweicloud.com/productdesc-iam/iam_01_1224.html)](tag:hws)[[支持身份策略与信任委托的云服务列表](https://support.huaweicloud.com/intl/zh-cn/productdesc-iam/iam_01_1224.html)](tag:hws_hk)[[支持身份策略与信任委托的云服务列表](https://support.huaweicloud.com/eu/productdesc-iam/iam_01_1224.html)](tag:hws_eu)[《统一身份认证用户指南》的“支持身份策略与信任委托的云服务列表”章节](tag:fcs,fcs_vm,ctc,hws_test,g42,tm)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAgencyV5(createAgencyV5Request?: CreateAgencyV5Request) {
            const options = {
                method: "POST",
                url: "/v5/agencies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createAgencyV5Request !== null && createAgencyV5Request !== undefined) {
                if (createAgencyV5Request instanceof CreateAgencyV5Request) {
                    body = createAgencyV5Request.body
                } else {
                    body = createAgencyV5Request['body'];
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
         * 该接口可以用于创建服务关联委托。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createServiceLinkedAgencyV5(createServiceLinkedAgencyV5Request?: CreateServiceLinkedAgencyV5Request) {
            const options = {
                method: "PUT",
                url: "/v5/service-linked-agencies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createServiceLinkedAgencyV5Request !== null && createServiceLinkedAgencyV5Request !== undefined) {
                if (createServiceLinkedAgencyV5Request instanceof CreateServiceLinkedAgencyV5Request) {
                    body = createServiceLinkedAgencyV5Request.body
                } else {
                    body = createServiceLinkedAgencyV5Request['body'];
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
         * 该接口可以用于删除信任委托。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAgencyV5(deleteAgencyV5Request?: DeleteAgencyV5Request) {
            const options = {
                method: "DELETE",
                url: "/v5/agencies/{agency_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let agencyId;

            if (deleteAgencyV5Request !== null && deleteAgencyV5Request !== undefined) {
                if (deleteAgencyV5Request instanceof DeleteAgencyV5Request) {
                    agencyId = deleteAgencyV5Request.agencyId;
                } else {
                    agencyId = deleteAgencyV5Request['agency_id'];
                }
            }

        
            if (agencyId === null || agencyId === undefined) {
            throw new RequiredError('agencyId','Required parameter agencyId was null or undefined when calling deleteAgencyV5.');
            }

            options.pathParams = { 'agency_id': agencyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于服务关联委托删除自己。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteServiceLinkedAgencyV5(deleteServiceLinkedAgencyV5Request?: DeleteServiceLinkedAgencyV5Request) {
            const options = {
                method: "DELETE",
                url: "/v5/service-linked-agencies/{agency_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let agencyId;

            if (deleteServiceLinkedAgencyV5Request !== null && deleteServiceLinkedAgencyV5Request !== undefined) {
                if (deleteServiceLinkedAgencyV5Request instanceof DeleteServiceLinkedAgencyV5Request) {
                    agencyId = deleteServiceLinkedAgencyV5Request.agencyId;
                } else {
                    agencyId = deleteServiceLinkedAgencyV5Request['agency_id'];
                }
            }

        
            if (agencyId === null || agencyId === undefined) {
            throw new RequiredError('agencyId','Required parameter agencyId was null or undefined when calling deleteServiceLinkedAgencyV5.');
            }

            options.pathParams = { 'agency_id': agencyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于查询委托或信任委托详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getAgencyV5(getAgencyV5Request?: GetAgencyV5Request) {
            const options = {
                method: "GET",
                url: "/v5/agencies/{agency_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let agencyId;

            if (getAgencyV5Request !== null && getAgencyV5Request !== undefined) {
                if (getAgencyV5Request instanceof GetAgencyV5Request) {
                    agencyId = getAgencyV5Request.agencyId;
                } else {
                    agencyId = getAgencyV5Request['agency_id'];
                }
            }

        
            if (agencyId === null || agencyId === undefined) {
            throw new RequiredError('agencyId','Required parameter agencyId was null or undefined when calling getAgencyV5.');
            }

            options.pathParams = { 'agency_id': agencyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于获取服务关联委托删除状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getServiceLinkedAgencyDeletionStatusV5(getServiceLinkedAgencyDeletionStatusV5Request?: GetServiceLinkedAgencyDeletionStatusV5Request) {
            const options = {
                method: "GET",
                url: "/v5/service-linked-agencies/deletion-task/{deletion_task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let deletionTaskId;

            if (getServiceLinkedAgencyDeletionStatusV5Request !== null && getServiceLinkedAgencyDeletionStatusV5Request !== undefined) {
                if (getServiceLinkedAgencyDeletionStatusV5Request instanceof GetServiceLinkedAgencyDeletionStatusV5Request) {
                    deletionTaskId = getServiceLinkedAgencyDeletionStatusV5Request.deletionTaskId;
                } else {
                    deletionTaskId = getServiceLinkedAgencyDeletionStatusV5Request['deletion_task_id'];
                }
            }

        
            if (deletionTaskId === null || deletionTaskId === undefined) {
            throw new RequiredError('deletionTaskId','Required parameter deletionTaskId was null or undefined when calling getServiceLinkedAgencyDeletionStatusV5.');
            }

            options.pathParams = { 'deletion_task_id': deletionTaskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于查询指定条件下的委托及信任委托列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAgenciesV5(listAgenciesV5Request?: ListAgenciesV5Request) {
            const options = {
                method: "GET",
                url: "/v5/agencies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let pathPrefix;

            if (listAgenciesV5Request !== null && listAgenciesV5Request !== undefined) {
                if (listAgenciesV5Request instanceof ListAgenciesV5Request) {
                    limit = listAgenciesV5Request.limit;
                    marker = listAgenciesV5Request.marker;
                    pathPrefix = listAgenciesV5Request.pathPrefix;
                } else {
                    limit = listAgenciesV5Request['limit'];
                    marker = listAgenciesV5Request['marker'];
                    pathPrefix = listAgenciesV5Request['path_prefix'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (pathPrefix !== null && pathPrefix !== undefined) {
                localVarQueryParameter['path_prefix'] = pathPrefix;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于修改信任委托。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAgencyV5(updateAgencyV5Request?: UpdateAgencyV5Request) {
            const options = {
                method: "PUT",
                url: "/v5/agencies/{agency_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let agencyId;

            if (updateAgencyV5Request !== null && updateAgencyV5Request !== undefined) {
                if (updateAgencyV5Request instanceof UpdateAgencyV5Request) {
                    agencyId = updateAgencyV5Request.agencyId;
                    body = updateAgencyV5Request.body
                } else {
                    agencyId = updateAgencyV5Request['agency_id'];
                    body = updateAgencyV5Request['body'];
                }
            }

        
            if (agencyId === null || agencyId === undefined) {
            throw new RequiredError('agencyId','Required parameter agencyId was null or undefined when calling updateAgencyV5.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'agency_id': agencyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于修改信任委托信任策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTrustPolicyV5(updateTrustPolicyV5Request?: UpdateTrustPolicyV5Request) {
            const options = {
                method: "PUT",
                url: "/v5/agencies/{agency_id}/trust-policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let agencyId;

            if (updateTrustPolicyV5Request !== null && updateTrustPolicyV5Request !== undefined) {
                if (updateTrustPolicyV5Request instanceof UpdateTrustPolicyV5Request) {
                    agencyId = updateTrustPolicyV5Request.agencyId;
                    body = updateTrustPolicyV5Request.body
                } else {
                    agencyId = updateTrustPolicyV5Request['agency_id'];
                    body = updateTrustPolicyV5Request['body'];
                }
            }

        
            if (agencyId === null || agencyId === undefined) {
            throw new RequiredError('agencyId','Required parameter agencyId was null or undefined when calling updateTrustPolicyV5.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'agency_id': agencyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于查询指定云服务的授权概要。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getAuthorizationSchemaV5(getAuthorizationSchemaV5Request?: GetAuthorizationSchemaV5Request) {
            const options = {
                method: "GET",
                url: "/v5/authorization-schemas/services/{service_code}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serviceCode;

            if (getAuthorizationSchemaV5Request !== null && getAuthorizationSchemaV5Request !== undefined) {
                if (getAuthorizationSchemaV5Request instanceof GetAuthorizationSchemaV5Request) {
                    serviceCode = getAuthorizationSchemaV5Request.serviceCode;
                } else {
                    serviceCode = getAuthorizationSchemaV5Request['service_code'];
                }
            }

        
            if (serviceCode === null || serviceCode === undefined) {
            throw new RequiredError('serviceCode','Required parameter serviceCode was null or undefined when calling getAuthorizationSchemaV5.');
            }

            options.pathParams = { 'service_code': serviceCode, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于查询已注册云服务列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRegisteredServicesForAuthSchemaV5(listRegisteredServicesForAuthSchemaV5Request?: ListRegisteredServicesForAuthSchemaV5Request) {
            const options = {
                method: "GET",
                url: "/v5/authorization-schemas/registered-services",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;

            if (listRegisteredServicesForAuthSchemaV5Request !== null && listRegisteredServicesForAuthSchemaV5Request !== undefined) {
                if (listRegisteredServicesForAuthSchemaV5Request instanceof ListRegisteredServicesForAuthSchemaV5Request) {
                    limit = listRegisteredServicesForAuthSchemaV5Request.limit;
                    marker = listRegisteredServicesForAuthSchemaV5Request.marker;
                } else {
                    limit = listRegisteredServicesForAuthSchemaV5Request['limit'];
                    marker = listRegisteredServicesForAuthSchemaV5Request['marker'];
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
         * 该接口可以用于获取全部服务主体。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listServicePrincipalsV5(listServicePrincipalsV5Request?: ListServicePrincipalsV5Request) {
            const options = {
                method: "GET",
                url: "/v5/service-principals",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let xLanguage;

            if (listServicePrincipalsV5Request !== null && listServicePrincipalsV5Request !== undefined) {
                if (listServicePrincipalsV5Request instanceof ListServicePrincipalsV5Request) {
                    limit = listServicePrincipalsV5Request.limit;
                    marker = listServicePrincipalsV5Request.marker;
                    xLanguage = listServicePrincipalsV5Request.xLanguage;
                } else {
                    limit = listServicePrincipalsV5Request['limit'];
                    marker = listServicePrincipalsV5Request['marker'];
                    xLanguage = listServicePrincipalsV5Request['X-Language'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于添加IAM用户到用户组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addUserToGroupV5(addUserToGroupV5Request?: AddUserToGroupV5Request) {
            const options = {
                method: "POST",
                url: "/v5/groups/{group_id}/add-user",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let groupId;

            if (addUserToGroupV5Request !== null && addUserToGroupV5Request !== undefined) {
                if (addUserToGroupV5Request instanceof AddUserToGroupV5Request) {
                    groupId = addUserToGroupV5Request.groupId;
                    body = addUserToGroupV5Request.body
                } else {
                    groupId = addUserToGroupV5Request['group_id'];
                    body = addUserToGroupV5Request['body'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling addUserToGroupV5.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于创建用户组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createGroupV5(createGroupV5Request?: CreateGroupV5Request) {
            const options = {
                method: "POST",
                url: "/v5/groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createGroupV5Request !== null && createGroupV5Request !== undefined) {
                if (createGroupV5Request instanceof CreateGroupV5Request) {
                    body = createGroupV5Request.body
                } else {
                    body = createGroupV5Request['body'];
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
         * 该接口可以用于删除用户组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteGroupV5(deleteGroupV5Request?: DeleteGroupV5Request) {
            const options = {
                method: "DELETE",
                url: "/v5/groups/{group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let groupId;

            if (deleteGroupV5Request !== null && deleteGroupV5Request !== undefined) {
                if (deleteGroupV5Request instanceof DeleteGroupV5Request) {
                    groupId = deleteGroupV5Request.groupId;
                } else {
                    groupId = deleteGroupV5Request['group_id'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling deleteGroupV5.');
            }

            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于查询用户组列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGroupsV5(listGroupsV5Request?: ListGroupsV5Request) {
            const options = {
                method: "GET",
                url: "/v5/groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let userId;

            if (listGroupsV5Request !== null && listGroupsV5Request !== undefined) {
                if (listGroupsV5Request instanceof ListGroupsV5Request) {
                    limit = listGroupsV5Request.limit;
                    marker = listGroupsV5Request.marker;
                    userId = listGroupsV5Request.userId;
                } else {
                    limit = listGroupsV5Request['limit'];
                    marker = listGroupsV5Request['marker'];
                    userId = listGroupsV5Request['user_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (userId !== null && userId !== undefined) {
                localVarQueryParameter['user_id'] = userId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于移除用户组中的IAM用户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        removeUserFromGroupV5(removeUserFromGroupV5Request?: RemoveUserFromGroupV5Request) {
            const options = {
                method: "POST",
                url: "/v5/groups/{group_id}/remove-user",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let groupId;

            if (removeUserFromGroupV5Request !== null && removeUserFromGroupV5Request !== undefined) {
                if (removeUserFromGroupV5Request instanceof RemoveUserFromGroupV5Request) {
                    groupId = removeUserFromGroupV5Request.groupId;
                    body = removeUserFromGroupV5Request.body
                } else {
                    groupId = removeUserFromGroupV5Request['group_id'];
                    body = removeUserFromGroupV5Request['body'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling removeUserFromGroupV5.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于查询用户组相关属性。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showGroupSummary(showGroupSummaryRequest?: ShowGroupSummaryRequest) {
            const options = {
                method: "GET",
                url: "/v5/groups-summary",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let userId;

            if (showGroupSummaryRequest !== null && showGroupSummaryRequest !== undefined) {
                if (showGroupSummaryRequest instanceof ShowGroupSummaryRequest) {
                    limit = showGroupSummaryRequest.limit;
                    marker = showGroupSummaryRequest.marker;
                    userId = showGroupSummaryRequest.userId;
                } else {
                    limit = showGroupSummaryRequest['limit'];
                    marker = showGroupSummaryRequest['marker'];
                    userId = showGroupSummaryRequest['user_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (userId !== null && userId !== undefined) {
                localVarQueryParameter['user_id'] = userId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于查询用户组详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showGroupV5(showGroupV5Request?: ShowGroupV5Request) {
            const options = {
                method: "GET",
                url: "/v5/groups/{group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let groupId;

            if (showGroupV5Request !== null && showGroupV5Request !== undefined) {
                if (showGroupV5Request instanceof ShowGroupV5Request) {
                    groupId = showGroupV5Request.groupId;
                } else {
                    groupId = showGroupV5Request['group_id'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling showGroupV5.');
            }

            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于修改用户组信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateGroupV5(updateGroupV5Request?: UpdateGroupV5Request) {
            const options = {
                method: "PUT",
                url: "/v5/groups/{group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let groupId;

            if (updateGroupV5Request !== null && updateGroupV5Request !== undefined) {
                if (updateGroupV5Request instanceof UpdateGroupV5Request) {
                    groupId = updateGroupV5Request.groupId;
                    body = updateGroupV5Request.body
                } else {
                    groupId = updateGroupV5Request['group_id'];
                    body = updateGroupV5Request['body'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling updateGroupV5.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于创建MFA设备。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createVirtualMfaDeviceV5(createVirtualMfaDeviceV5Request?: CreateVirtualMfaDeviceV5Request) {
            const options = {
                method: "POST",
                url: "/v5/virtual-mfa-devices",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createVirtualMfaDeviceV5Request !== null && createVirtualMfaDeviceV5Request !== undefined) {
                if (createVirtualMfaDeviceV5Request instanceof CreateVirtualMfaDeviceV5Request) {
                    body = createVirtualMfaDeviceV5Request.body
                } else {
                    body = createVirtualMfaDeviceV5Request['body'];
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
         * 该接口可以用于删除MFA设备。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteVirtualMfaDeviceV5(deleteVirtualMfaDeviceV5Request?: DeleteVirtualMfaDeviceV5Request) {
            const options = {
                method: "DELETE",
                url: "/v5/virtual-mfa-devices",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let userId;
            
            let serialNumber;

            if (deleteVirtualMfaDeviceV5Request !== null && deleteVirtualMfaDeviceV5Request !== undefined) {
                if (deleteVirtualMfaDeviceV5Request instanceof DeleteVirtualMfaDeviceV5Request) {
                    userId = deleteVirtualMfaDeviceV5Request.userId;
                    serialNumber = deleteVirtualMfaDeviceV5Request.serialNumber;
                } else {
                    userId = deleteVirtualMfaDeviceV5Request['user_id'];
                    serialNumber = deleteVirtualMfaDeviceV5Request['serial_number'];
                }
            }

        
            if (userId === null || userId === undefined) {
                throw new RequiredError('userId','Required parameter userId was null or undefined when calling deleteVirtualMfaDeviceV5.');
            }
            if (userId !== null && userId !== undefined) {
                localVarQueryParameter['user_id'] = userId;
            }
            if (serialNumber === null || serialNumber === undefined) {
                throw new RequiredError('serialNumber','Required parameter serialNumber was null or undefined when calling deleteVirtualMfaDeviceV5.');
            }
            if (serialNumber !== null && serialNumber !== undefined) {
                localVarQueryParameter['serial_number'] = serialNumber;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于禁用指定的MFA设备并删除其与对应IAM用户的关联。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disableMfaDeviceV5(disableMfaDeviceV5Request?: DisableMfaDeviceV5Request) {
            const options = {
                method: "POST",
                url: "/v5/mfa-devices/disable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (disableMfaDeviceV5Request !== null && disableMfaDeviceV5Request !== undefined) {
                if (disableMfaDeviceV5Request instanceof DisableMfaDeviceV5Request) {
                    body = disableMfaDeviceV5Request.body
                } else {
                    body = disableMfaDeviceV5Request['body'];
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
         * 该接口可以用于启用指定的MFA设备并将其与指定的IAM用户关联。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enableMfaDeviceV5(enableMfaDeviceV5Request?: EnableMfaDeviceV5Request) {
            const options = {
                method: "POST",
                url: "/v5/mfa-devices/enable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (enableMfaDeviceV5Request !== null && enableMfaDeviceV5Request !== undefined) {
                if (enableMfaDeviceV5Request instanceof EnableMfaDeviceV5Request) {
                    body = enableMfaDeviceV5Request.body
                } else {
                    body = enableMfaDeviceV5Request['body'];
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
         * 该接口可以用于列举全部MFA设备。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMfaDevicesV5(listMfaDevicesV5Request?: ListMfaDevicesV5Request) {
            const options = {
                method: "GET",
                url: "/v5/mfa-devices",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let userId;
            
            let limit;
            
            let marker;

            if (listMfaDevicesV5Request !== null && listMfaDevicesV5Request !== undefined) {
                if (listMfaDevicesV5Request instanceof ListMfaDevicesV5Request) {
                    userId = listMfaDevicesV5Request.userId;
                    limit = listMfaDevicesV5Request.limit;
                    marker = listMfaDevicesV5Request.marker;
                } else {
                    userId = listMfaDevicesV5Request['user_id'];
                    limit = listMfaDevicesV5Request['limit'];
                    marker = listMfaDevicesV5Request['marker'];
                }
            }

        
            if (userId !== null && userId !== undefined) {
                localVarQueryParameter['user_id'] = userId;
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
         * 该接口可以用于创建一个默认版本为v1的新自定义身份策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPolicyV5(createPolicyV5Request?: CreatePolicyV5Request) {
            const options = {
                method: "POST",
                url: "/v5/policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createPolicyV5Request !== null && createPolicyV5Request !== undefined) {
                if (createPolicyV5Request instanceof CreatePolicyV5Request) {
                    body = createPolicyV5Request.body
                } else {
                    body = createPolicyV5Request['body'];
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
         * 该接口可以用于为指定身份策略创建一个新版本。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPolicyVersionV5(createPolicyVersionV5Request?: CreatePolicyVersionV5Request) {
            const options = {
                method: "POST",
                url: "/v5/policies/{policy_id}/versions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let policyId;

            if (createPolicyVersionV5Request !== null && createPolicyVersionV5Request !== undefined) {
                if (createPolicyVersionV5Request instanceof CreatePolicyVersionV5Request) {
                    policyId = createPolicyVersionV5Request.policyId;
                    body = createPolicyVersionV5Request.body
                } else {
                    policyId = createPolicyVersionV5Request['policy_id'];
                    body = createPolicyVersionV5Request['body'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling createPolicyVersionV5.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于删除一个存在的自定义身份策略，必须确保该自定义身份策略没有附加在任何IAM用户、用户组、委托或信任委托上。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePolicyV5(deletePolicyV5Request?: DeletePolicyV5Request) {
            const options = {
                method: "DELETE",
                url: "/v5/policies/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let policyId;

            if (deletePolicyV5Request !== null && deletePolicyV5Request !== undefined) {
                if (deletePolicyV5Request instanceof DeletePolicyV5Request) {
                    policyId = deletePolicyV5Request.policyId;
                } else {
                    policyId = deletePolicyV5Request['policy_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling deletePolicyV5.');
            }

            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于删除指定身份策略的指定版本。默认身份策略版本不能被删除。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePolicyVersionV5(deletePolicyVersionV5Request?: DeletePolicyVersionV5Request) {
            const options = {
                method: "DELETE",
                url: "/v5/policies/{policy_id}/versions/{version_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let policyId;
            
            let versionId;

            if (deletePolicyVersionV5Request !== null && deletePolicyVersionV5Request !== undefined) {
                if (deletePolicyVersionV5Request instanceof DeletePolicyVersionV5Request) {
                    policyId = deletePolicyVersionV5Request.policyId;
                    versionId = deletePolicyVersionV5Request.versionId;
                } else {
                    policyId = deletePolicyVersionV5Request['policy_id'];
                    versionId = deletePolicyVersionV5Request['version_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling deletePolicyVersionV5.');
            }
            if (versionId === null || versionId === undefined) {
            throw new RequiredError('versionId','Required parameter versionId was null or undefined when calling deletePolicyVersionV5.');
            }

            options.pathParams = { 'policy_id': policyId,'version_id': versionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于通过身份策略ID获取身份策略信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getPolicyV5(getPolicyV5Request?: GetPolicyV5Request) {
            const options = {
                method: "GET",
                url: "/v5/policies/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let policyId;
            
            let xLanguage;

            if (getPolicyV5Request !== null && getPolicyV5Request !== undefined) {
                if (getPolicyV5Request instanceof GetPolicyV5Request) {
                    policyId = getPolicyV5Request.policyId;
                    xLanguage = getPolicyV5Request.xLanguage;
                } else {
                    policyId = getPolicyV5Request['policy_id'];
                    xLanguage = getPolicyV5Request['X-Language'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling getPolicyV5.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于查询指定身份策略的指定版本的相关信息，包括身份策略文档。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getPolicyVersionV5(getPolicyVersionV5Request?: GetPolicyVersionV5Request) {
            const options = {
                method: "GET",
                url: "/v5/policies/{policy_id}/versions/{version_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let policyId;
            
            let versionId;

            if (getPolicyVersionV5Request !== null && getPolicyVersionV5Request !== undefined) {
                if (getPolicyVersionV5Request instanceof GetPolicyVersionV5Request) {
                    policyId = getPolicyVersionV5Request.policyId;
                    versionId = getPolicyVersionV5Request.versionId;
                } else {
                    policyId = getPolicyVersionV5Request['policy_id'];
                    versionId = getPolicyVersionV5Request['version_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling getPolicyVersionV5.');
            }
            if (versionId === null || versionId === undefined) {
            throw new RequiredError('versionId','Required parameter versionId was null or undefined when calling getPolicyVersionV5.');
            }

            options.pathParams = { 'policy_id': policyId,'version_id': versionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于查询所有身份策略，包含系统预置身份策略和自定义身份策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPoliciesV5(listPoliciesV5Request?: ListPoliciesV5Request) {
            const options = {
                method: "GET",
                url: "/v5/policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let policyType;
            
            let pathPrefix;
            
            let onlyAttached;
            
            let xLanguage;

            if (listPoliciesV5Request !== null && listPoliciesV5Request !== undefined) {
                if (listPoliciesV5Request instanceof ListPoliciesV5Request) {
                    limit = listPoliciesV5Request.limit;
                    marker = listPoliciesV5Request.marker;
                    policyType = listPoliciesV5Request.policyType;
                    pathPrefix = listPoliciesV5Request.pathPrefix;
                    onlyAttached = listPoliciesV5Request.onlyAttached;
                    xLanguage = listPoliciesV5Request.xLanguage;
                } else {
                    limit = listPoliciesV5Request['limit'];
                    marker = listPoliciesV5Request['marker'];
                    policyType = listPoliciesV5Request['policy_type'];
                    pathPrefix = listPoliciesV5Request['path_prefix'];
                    onlyAttached = listPoliciesV5Request['only_attached'];
                    xLanguage = listPoliciesV5Request['X-Language'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (policyType !== null && policyType !== undefined) {
                localVarQueryParameter['policy_type'] = policyType;
            }
            if (pathPrefix !== null && pathPrefix !== undefined) {
                localVarQueryParameter['path_prefix'] = pathPrefix;
            }
            if (onlyAttached !== null && onlyAttached !== undefined) {
                localVarQueryParameter['only_attached'] = onlyAttached;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于查询指定身份策略的所有版本信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPolicyVersionsV5(listPolicyVersionsV5Request?: ListPolicyVersionsV5Request) {
            const options = {
                method: "GET",
                url: "/v5/policies/{policy_id}/versions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let policyId;
            
            let limit;
            
            let marker;

            if (listPolicyVersionsV5Request !== null && listPolicyVersionsV5Request !== undefined) {
                if (listPolicyVersionsV5Request instanceof ListPolicyVersionsV5Request) {
                    policyId = listPolicyVersionsV5Request.policyId;
                    limit = listPolicyVersionsV5Request.limit;
                    marker = listPolicyVersionsV5Request.marker;
                } else {
                    policyId = listPolicyVersionsV5Request['policy_id'];
                    limit = listPolicyVersionsV5Request['limit'];
                    marker = listPolicyVersionsV5Request['marker'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling listPolicyVersionsV5.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于将指定身份策略的指定版本设置为默认版本。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setDefaultPolicyVersionV5(setDefaultPolicyVersionV5Request?: SetDefaultPolicyVersionV5Request) {
            const options = {
                method: "POST",
                url: "/v5/policies/{policy_id}/versions/{version_id}/set-default",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let policyId;
            
            let versionId;

            if (setDefaultPolicyVersionV5Request !== null && setDefaultPolicyVersionV5Request !== undefined) {
                if (setDefaultPolicyVersionV5Request instanceof SetDefaultPolicyVersionV5Request) {
                    policyId = setDefaultPolicyVersionV5Request.policyId;
                    versionId = setDefaultPolicyVersionV5Request.versionId;
                } else {
                    policyId = setDefaultPolicyVersionV5Request['policy_id'];
                    versionId = setDefaultPolicyVersionV5Request['version_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling setDefaultPolicyVersionV5.');
            }
            if (versionId === null || versionId === undefined) {
            throw new RequiredError('versionId','Required parameter versionId was null or undefined when calling setDefaultPolicyVersionV5.');
            }

            options.pathParams = { 'policy_id': policyId,'version_id': versionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于为指定委托或信任委托附加指定身份策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        attachAgencyPolicyV5(attachAgencyPolicyV5Request?: AttachAgencyPolicyV5Request) {
            const options = {
                method: "POST",
                url: "/v5/policies/{policy_id}/attach-agency",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let policyId;

            if (attachAgencyPolicyV5Request !== null && attachAgencyPolicyV5Request !== undefined) {
                if (attachAgencyPolicyV5Request instanceof AttachAgencyPolicyV5Request) {
                    policyId = attachAgencyPolicyV5Request.policyId;
                    body = attachAgencyPolicyV5Request.body
                } else {
                    policyId = attachAgencyPolicyV5Request['policy_id'];
                    body = attachAgencyPolicyV5Request['body'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling attachAgencyPolicyV5.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于为指定用户组附加指定身份策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        attachGroupPolicyV5(attachGroupPolicyV5Request?: AttachGroupPolicyV5Request) {
            const options = {
                method: "POST",
                url: "/v5/policies/{policy_id}/attach-group",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let policyId;

            if (attachGroupPolicyV5Request !== null && attachGroupPolicyV5Request !== undefined) {
                if (attachGroupPolicyV5Request instanceof AttachGroupPolicyV5Request) {
                    policyId = attachGroupPolicyV5Request.policyId;
                    body = attachGroupPolicyV5Request.body
                } else {
                    policyId = attachGroupPolicyV5Request['policy_id'];
                    body = attachGroupPolicyV5Request['body'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling attachGroupPolicyV5.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于为指定IAM用户附加指定身份策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        attachUserPolicyV5(attachUserPolicyV5Request?: AttachUserPolicyV5Request) {
            const options = {
                method: "POST",
                url: "/v5/policies/{policy_id}/attach-user",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let policyId;

            if (attachUserPolicyV5Request !== null && attachUserPolicyV5Request !== undefined) {
                if (attachUserPolicyV5Request instanceof AttachUserPolicyV5Request) {
                    policyId = attachUserPolicyV5Request.policyId;
                    body = attachUserPolicyV5Request.body
                } else {
                    policyId = attachUserPolicyV5Request['policy_id'];
                    body = attachUserPolicyV5Request['body'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling attachUserPolicyV5.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于从指定委托或信任委托中分离指定身份策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        detachAgencyPolicyV5(detachAgencyPolicyV5Request?: DetachAgencyPolicyV5Request) {
            const options = {
                method: "POST",
                url: "/v5/policies/{policy_id}/detach-agency",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let policyId;

            if (detachAgencyPolicyV5Request !== null && detachAgencyPolicyV5Request !== undefined) {
                if (detachAgencyPolicyV5Request instanceof DetachAgencyPolicyV5Request) {
                    policyId = detachAgencyPolicyV5Request.policyId;
                    body = detachAgencyPolicyV5Request.body
                } else {
                    policyId = detachAgencyPolicyV5Request['policy_id'];
                    body = detachAgencyPolicyV5Request['body'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling detachAgencyPolicyV5.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于从指定用户组分离指定身份策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        detachGroupPolicyV5(detachGroupPolicyV5Request?: DetachGroupPolicyV5Request) {
            const options = {
                method: "POST",
                url: "/v5/policies/{policy_id}/detach-group",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let policyId;

            if (detachGroupPolicyV5Request !== null && detachGroupPolicyV5Request !== undefined) {
                if (detachGroupPolicyV5Request instanceof DetachGroupPolicyV5Request) {
                    policyId = detachGroupPolicyV5Request.policyId;
                    body = detachGroupPolicyV5Request.body
                } else {
                    policyId = detachGroupPolicyV5Request['policy_id'];
                    body = detachGroupPolicyV5Request['body'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling detachGroupPolicyV5.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于从指定的IAM用户分离指定身份策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        detachUserPolicyV5(detachUserPolicyV5Request?: DetachUserPolicyV5Request) {
            const options = {
                method: "POST",
                url: "/v5/policies/{policy_id}/detach-user",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let policyId;

            if (detachUserPolicyV5Request !== null && detachUserPolicyV5Request !== undefined) {
                if (detachUserPolicyV5Request instanceof DetachUserPolicyV5Request) {
                    policyId = detachUserPolicyV5Request.policyId;
                    body = detachUserPolicyV5Request.body
                } else {
                    policyId = detachUserPolicyV5Request['policy_id'];
                    body = detachUserPolicyV5Request['body'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling detachUserPolicyV5.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可用于查询指定委托或信任委托附加的所有身份策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAttachedAgencyPoliciesV5(listAttachedAgencyPoliciesV5Request?: ListAttachedAgencyPoliciesV5Request) {
            const options = {
                method: "GET",
                url: "/v5/agencies/{agency_id}/attached-policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let agencyId;
            
            let limit;
            
            let marker;

            if (listAttachedAgencyPoliciesV5Request !== null && listAttachedAgencyPoliciesV5Request !== undefined) {
                if (listAttachedAgencyPoliciesV5Request instanceof ListAttachedAgencyPoliciesV5Request) {
                    agencyId = listAttachedAgencyPoliciesV5Request.agencyId;
                    limit = listAttachedAgencyPoliciesV5Request.limit;
                    marker = listAttachedAgencyPoliciesV5Request.marker;
                } else {
                    agencyId = listAttachedAgencyPoliciesV5Request['agency_id'];
                    limit = listAttachedAgencyPoliciesV5Request['limit'];
                    marker = listAttachedAgencyPoliciesV5Request['marker'];
                }
            }

        
            if (agencyId === null || agencyId === undefined) {
            throw new RequiredError('agencyId','Required parameter agencyId was null or undefined when calling listAttachedAgencyPoliciesV5.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'agency_id': agencyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可用于查询指定用户组附加的所有身份策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAttachedGroupPoliciesV5(listAttachedGroupPoliciesV5Request?: ListAttachedGroupPoliciesV5Request) {
            const options = {
                method: "GET",
                url: "/v5/groups/{group_id}/attached-policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let groupId;
            
            let limit;
            
            let marker;

            if (listAttachedGroupPoliciesV5Request !== null && listAttachedGroupPoliciesV5Request !== undefined) {
                if (listAttachedGroupPoliciesV5Request instanceof ListAttachedGroupPoliciesV5Request) {
                    groupId = listAttachedGroupPoliciesV5Request.groupId;
                    limit = listAttachedGroupPoliciesV5Request.limit;
                    marker = listAttachedGroupPoliciesV5Request.marker;
                } else {
                    groupId = listAttachedGroupPoliciesV5Request['group_id'];
                    limit = listAttachedGroupPoliciesV5Request['limit'];
                    marker = listAttachedGroupPoliciesV5Request['marker'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling listAttachedGroupPoliciesV5.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可用于查询指定IAM用户附加的所有身份策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAttachedUserPoliciesV5(listAttachedUserPoliciesV5Request?: ListAttachedUserPoliciesV5Request) {
            const options = {
                method: "GET",
                url: "/v5/users/{user_id}/attached-policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let userId;
            
            let limit;
            
            let marker;

            if (listAttachedUserPoliciesV5Request !== null && listAttachedUserPoliciesV5Request !== undefined) {
                if (listAttachedUserPoliciesV5Request instanceof ListAttachedUserPoliciesV5Request) {
                    userId = listAttachedUserPoliciesV5Request.userId;
                    limit = listAttachedUserPoliciesV5Request.limit;
                    marker = listAttachedUserPoliciesV5Request.marker;
                } else {
                    userId = listAttachedUserPoliciesV5Request['user_id'];
                    limit = listAttachedUserPoliciesV5Request['limit'];
                    marker = listAttachedUserPoliciesV5Request['marker'];
                }
            }

        
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling listAttachedUserPoliciesV5.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可用于查询指定身份策略附加的所有实体。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEntitiesForPolicyV5(listEntitiesForPolicyV5Request?: ListEntitiesForPolicyV5Request) {
            const options = {
                method: "GET",
                url: "/v5/policies/{policy_id}/attached-entities",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let policyId;
            
            let entityType;
            
            let limit;
            
            let marker;

            if (listEntitiesForPolicyV5Request !== null && listEntitiesForPolicyV5Request !== undefined) {
                if (listEntitiesForPolicyV5Request instanceof ListEntitiesForPolicyV5Request) {
                    policyId = listEntitiesForPolicyV5Request.policyId;
                    entityType = listEntitiesForPolicyV5Request.entityType;
                    limit = listEntitiesForPolicyV5Request.limit;
                    marker = listEntitiesForPolicyV5Request.marker;
                } else {
                    policyId = listEntitiesForPolicyV5Request['policy_id'];
                    entityType = listEntitiesForPolicyV5Request['entity_type'];
                    limit = listEntitiesForPolicyV5Request['limit'];
                    marker = listEntitiesForPolicyV5Request['marker'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling listEntitiesForPolicyV5.');
            }
            if (entityType !== null && entityType !== undefined) {
                localVarQueryParameter['entity_type'] = entityType;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于删除指定资源的部分标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteResourceTagsV5(deleteResourceTagsV5Request?: DeleteResourceTagsV5Request) {
            const options = {
                method: "DELETE",
                url: "/v5/{resource_type}/{resource_id}/tags/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceId;
            
            let resourceType;

            if (deleteResourceTagsV5Request !== null && deleteResourceTagsV5Request !== undefined) {
                if (deleteResourceTagsV5Request instanceof DeleteResourceTagsV5Request) {
                    resourceId = deleteResourceTagsV5Request.resourceId;
                    resourceType = deleteResourceTagsV5Request.resourceType;
                    body = deleteResourceTagsV5Request.body
                } else {
                    resourceId = deleteResourceTagsV5Request['resource_id'];
                    resourceType = deleteResourceTagsV5Request['resource_type'];
                    body = deleteResourceTagsV5Request['body'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling deleteResourceTagsV5.');
            }
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling deleteResourceTagsV5.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_id': resourceId,'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于获取指定资源的所有标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listResourceTagsV5(listResourceTagsV5Request?: ListResourceTagsV5Request) {
            const options = {
                method: "GET",
                url: "/v5/{resource_type}/{resource_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceId;
            
            let resourceType;

            if (listResourceTagsV5Request !== null && listResourceTagsV5Request !== undefined) {
                if (listResourceTagsV5Request instanceof ListResourceTagsV5Request) {
                    resourceId = listResourceTagsV5Request.resourceId;
                    resourceType = listResourceTagsV5Request.resourceType;
                } else {
                    resourceId = listResourceTagsV5Request['resource_id'];
                    resourceType = listResourceTagsV5Request['resource_type'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling listResourceTagsV5.');
            }
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling listResourceTagsV5.');
            }

            options.pathParams = { 'resource_id': resourceId,'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于为IAM资源打上标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        tagResourceV5(tagResourceV5Request?: TagResourceV5Request) {
            const options = {
                method: "POST",
                url: "/v5/{resource_type}/{resource_id}/tags/create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceId;
            
            let resourceType;

            if (tagResourceV5Request !== null && tagResourceV5Request !== undefined) {
                if (tagResourceV5Request instanceof TagResourceV5Request) {
                    resourceId = tagResourceV5Request.resourceId;
                    resourceType = tagResourceV5Request.resourceType;
                    body = tagResourceV5Request.body
                } else {
                    resourceId = tagResourceV5Request['resource_id'];
                    resourceType = tagResourceV5Request['resource_type'];
                    body = tagResourceV5Request['body'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling tagResourceV5.');
            }
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling tagResourceV5.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_id': resourceId,'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于查询账号登录策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showLoginPolicyV5() {
            const options = {
                method: "GET",
                url: "/v5/login-policy",
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
         * 该接口可以用于查询账号密码策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPasswordPolicyV5() {
            const options = {
                method: "GET",
                url: "/v5/password-policy",
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
         * 该接口可以用于修改账号登录策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateLoginPolicyV5(updateLoginPolicyV5Request?: UpdateLoginPolicyV5Request) {
            const options = {
                method: "PUT",
                url: "/v5/login-policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateLoginPolicyV5Request !== null && updateLoginPolicyV5Request !== undefined) {
                if (updateLoginPolicyV5Request instanceof UpdateLoginPolicyV5Request) {
                    body = updateLoginPolicyV5Request.body
                } else {
                    body = updateLoginPolicyV5Request['body'];
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
         * 该接口可以用于修改账号密码策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePasswordPolicyV5(updatePasswordPolicyV5Request?: UpdatePasswordPolicyV5Request) {
            const options = {
                method: "PUT",
                url: "/v5/password-policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updatePasswordPolicyV5Request !== null && updatePasswordPolicyV5Request !== undefined) {
                if (updatePasswordPolicyV5Request instanceof UpdatePasswordPolicyV5Request) {
                    body = updatePasswordPolicyV5Request.body
                } else {
                    body = updatePasswordPolicyV5Request['body'];
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
         * 该接口可以用于创建IAM用户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createUserV5(createUserV5Request?: CreateUserV5Request) {
            const options = {
                method: "POST",
                url: "/v5/users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createUserV5Request !== null && createUserV5Request !== undefined) {
                if (createUserV5Request instanceof CreateUserV5Request) {
                    body = createUserV5Request.body
                } else {
                    body = createUserV5Request['body'];
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
         * 该接口可以用于删除指定IAM用户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteUserV5(deleteUserV5Request?: DeleteUserV5Request) {
            const options = {
                method: "DELETE",
                url: "/v5/users/{user_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let userId;

            if (deleteUserV5Request !== null && deleteUserV5Request !== undefined) {
                if (deleteUserV5Request instanceof DeleteUserV5Request) {
                    userId = deleteUserV5Request.userId;
                } else {
                    userId = deleteUserV5Request['user_id'];
                }
            }

        
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling deleteUserV5.');
            }

            options.pathParams = { 'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于查询IAM用户列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listUsersV5(listUsersV5Request?: ListUsersV5Request) {
            const options = {
                method: "GET",
                url: "/v5/users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let groupId;

            if (listUsersV5Request !== null && listUsersV5Request !== undefined) {
                if (listUsersV5Request instanceof ListUsersV5Request) {
                    limit = listUsersV5Request.limit;
                    marker = listUsersV5Request.marker;
                    groupId = listUsersV5Request.groupId;
                } else {
                    limit = listUsersV5Request['limit'];
                    marker = listUsersV5Request['marker'];
                    groupId = listUsersV5Request['group_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (groupId !== null && groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于查询IAM用户的最后登录时间。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showUserLastLoginV5(showUserLastLoginV5Request?: ShowUserLastLoginV5Request) {
            const options = {
                method: "GET",
                url: "/v5/users/{user_id}/last-login",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let userId;

            if (showUserLastLoginV5Request !== null && showUserLastLoginV5Request !== undefined) {
                if (showUserLastLoginV5Request instanceof ShowUserLastLoginV5Request) {
                    userId = showUserLastLoginV5Request.userId;
                } else {
                    userId = showUserLastLoginV5Request['user_id'];
                }
            }

        
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling showUserLastLoginV5.');
            }

            options.pathParams = { 'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于查询IAM用户详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showUserV5(showUserV5Request?: ShowUserV5Request) {
            const options = {
                method: "GET",
                url: "/v5/users/{user_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let userId;

            if (showUserV5Request !== null && showUserV5Request !== undefined) {
                if (showUserV5Request instanceof ShowUserV5Request) {
                    userId = showUserV5Request.userId;
                } else {
                    userId = showUserV5Request['user_id'];
                }
            }

        
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling showUserV5.');
            }

            options.pathParams = { 'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于修改IAM用户信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateUserV5(updateUserV5Request?: UpdateUserV5Request) {
            const options = {
                method: "PUT",
                url: "/v5/users/{user_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let userId;

            if (updateUserV5Request !== null && updateUserV5Request !== undefined) {
                if (updateUserV5Request instanceof UpdateUserV5Request) {
                    userId = updateUserV5Request.userId;
                    body = updateUserV5Request.body
                } else {
                    userId = updateUserV5Request['user_id'];
                    body = updateUserV5Request['body'];
                }
            }

        
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling updateUserV5.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于IAM用户修改自己的密码。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changePasswordV5(changePasswordV5Request?: ChangePasswordV5Request) {
            const options = {
                method: "POST",
                url: "/v5/caller-password",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (changePasswordV5Request !== null && changePasswordV5Request !== undefined) {
                if (changePasswordV5Request instanceof ChangePasswordV5Request) {
                    body = changePasswordV5Request.body
                } else {
                    body = changePasswordV5Request['body'];
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
         * 该接口可以用于给IAM用户创建永久访问密钥。
         * 
         * 访问密钥（Access Key ID/Secret Access Key，简称AK/SK），是您通过开发工具（API、CLI、SDK）访问的身份凭证，不用于登录控制台。系统通过AK识别访问用户的身份，通过SK进行签名验证，通过加密签名验证可以确保请求的机密性、完整性和请求者身份的正确性。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAccessKeyV5(createAccessKeyV5Request?: CreateAccessKeyV5Request) {
            const options = {
                method: "POST",
                url: "/v5/users/{user_id}/access-keys",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let userId;

            if (createAccessKeyV5Request !== null && createAccessKeyV5Request !== undefined) {
                if (createAccessKeyV5Request instanceof CreateAccessKeyV5Request) {
                    userId = createAccessKeyV5Request.userId;
                } else {
                    userId = createAccessKeyV5Request['user_id'];
                }
            }

        
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling createAccessKeyV5.');
            }

            options.pathParams = { 'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于创建指定IAM用户的登录信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createLoginProfileV5(createLoginProfileV5Request?: CreateLoginProfileV5Request) {
            const options = {
                method: "POST",
                url: "/v5/users/{user_id}/login-profile",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let userId;

            if (createLoginProfileV5Request !== null && createLoginProfileV5Request !== undefined) {
                if (createLoginProfileV5Request instanceof CreateLoginProfileV5Request) {
                    userId = createLoginProfileV5Request.userId;
                    body = createLoginProfileV5Request.body
                } else {
                    userId = createLoginProfileV5Request['user_id'];
                    body = createLoginProfileV5Request['body'];
                }
            }

        
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling createLoginProfileV5.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于删除IAM用户的指定永久访问密钥。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAccessKeyV5(deleteAccessKeyV5Request?: DeleteAccessKeyV5Request) {
            const options = {
                method: "DELETE",
                url: "/v5/users/{user_id}/access-keys/{access_key_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let userId;
            
            let accessKeyId;

            if (deleteAccessKeyV5Request !== null && deleteAccessKeyV5Request !== undefined) {
                if (deleteAccessKeyV5Request instanceof DeleteAccessKeyV5Request) {
                    userId = deleteAccessKeyV5Request.userId;
                    accessKeyId = deleteAccessKeyV5Request.accessKeyId;
                } else {
                    userId = deleteAccessKeyV5Request['user_id'];
                    accessKeyId = deleteAccessKeyV5Request['access_key_id'];
                }
            }

        
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling deleteAccessKeyV5.');
            }
            if (accessKeyId === null || accessKeyId === undefined) {
            throw new RequiredError('accessKeyId','Required parameter accessKeyId was null or undefined when calling deleteAccessKeyV5.');
            }

            options.pathParams = { 'user_id': userId,'access_key_id': accessKeyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于删除指定IAM用户的登录信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteLoginProfileV5(deleteLoginProfileV5Request?: DeleteLoginProfileV5Request) {
            const options = {
                method: "DELETE",
                url: "/v5/users/{user_id}/login-profile",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let userId;

            if (deleteLoginProfileV5Request !== null && deleteLoginProfileV5Request !== undefined) {
                if (deleteLoginProfileV5Request instanceof DeleteLoginProfileV5Request) {
                    userId = deleteLoginProfileV5Request.userId;
                } else {
                    userId = deleteLoginProfileV5Request['user_id'];
                }
            }

        
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling deleteLoginProfileV5.');
            }

            options.pathParams = { 'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于查询IAM用户的所有永久访问密钥。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAccessKeysV5(listAccessKeysV5Request?: ListAccessKeysV5Request) {
            const options = {
                method: "GET",
                url: "/v5/users/{user_id}/access-keys",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let userId;
            
            let limit;
            
            let marker;

            if (listAccessKeysV5Request !== null && listAccessKeysV5Request !== undefined) {
                if (listAccessKeysV5Request instanceof ListAccessKeysV5Request) {
                    userId = listAccessKeysV5Request.userId;
                    limit = listAccessKeysV5Request.limit;
                    marker = listAccessKeysV5Request.marker;
                } else {
                    userId = listAccessKeysV5Request['user_id'];
                    limit = listAccessKeysV5Request['limit'];
                    marker = listAccessKeysV5Request['marker'];
                }
            }

        
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling listAccessKeysV5.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于查询IAM用户的指定永久访问密钥的最后使用时间。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAccessKeyLastUsedV5(showAccessKeyLastUsedV5Request?: ShowAccessKeyLastUsedV5Request) {
            const options = {
                method: "GET",
                url: "/v5/users/{user_id}/access-keys/{access_key_id}/last-used",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let userId;
            
            let accessKeyId;

            if (showAccessKeyLastUsedV5Request !== null && showAccessKeyLastUsedV5Request !== undefined) {
                if (showAccessKeyLastUsedV5Request instanceof ShowAccessKeyLastUsedV5Request) {
                    userId = showAccessKeyLastUsedV5Request.userId;
                    accessKeyId = showAccessKeyLastUsedV5Request.accessKeyId;
                } else {
                    userId = showAccessKeyLastUsedV5Request['user_id'];
                    accessKeyId = showAccessKeyLastUsedV5Request['access_key_id'];
                }
            }

        
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling showAccessKeyLastUsedV5.');
            }
            if (accessKeyId === null || accessKeyId === undefined) {
            throw new RequiredError('accessKeyId','Required parameter accessKeyId was null or undefined when calling showAccessKeyLastUsedV5.');
            }

            options.pathParams = { 'user_id': userId,'access_key_id': accessKeyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于查询指定IAM用户的登录信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showLoginProfileV5(showLoginProfileV5Request?: ShowLoginProfileV5Request) {
            const options = {
                method: "GET",
                url: "/v5/users/{user_id}/login-profile",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let userId;

            if (showLoginProfileV5Request !== null && showLoginProfileV5Request !== undefined) {
                if (showLoginProfileV5Request instanceof ShowLoginProfileV5Request) {
                    userId = showLoginProfileV5Request.userId;
                } else {
                    userId = showLoginProfileV5Request['user_id'];
                }
            }

        
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling showLoginProfileV5.');
            }

            options.pathParams = { 'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于修改IAM用户的指定永久访问密钥。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAccessKeyV5(updateAccessKeyV5Request?: UpdateAccessKeyV5Request) {
            const options = {
                method: "PUT",
                url: "/v5/users/{user_id}/access-keys/{access_key_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let userId;
            
            let accessKeyId;

            if (updateAccessKeyV5Request !== null && updateAccessKeyV5Request !== undefined) {
                if (updateAccessKeyV5Request instanceof UpdateAccessKeyV5Request) {
                    userId = updateAccessKeyV5Request.userId;
                    accessKeyId = updateAccessKeyV5Request.accessKeyId;
                    body = updateAccessKeyV5Request.body
                } else {
                    userId = updateAccessKeyV5Request['user_id'];
                    accessKeyId = updateAccessKeyV5Request['access_key_id'];
                    body = updateAccessKeyV5Request['body'];
                }
            }

        
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling updateAccessKeyV5.');
            }
            if (accessKeyId === null || accessKeyId === undefined) {
            throw new RequiredError('accessKeyId','Required parameter accessKeyId was null or undefined when calling updateAccessKeyV5.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'user_id': userId,'access_key_id': accessKeyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于修改指定IAM用户的登录信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateLoginProfileV5(updateLoginProfileV5Request?: UpdateLoginProfileV5Request) {
            const options = {
                method: "PUT",
                url: "/v5/users/{user_id}/login-profile",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let userId;

            if (updateLoginProfileV5Request !== null && updateLoginProfileV5Request !== undefined) {
                if (updateLoginProfileV5Request instanceof UpdateLoginProfileV5Request) {
                    userId = updateLoginProfileV5Request.userId;
                    body = updateLoginProfileV5Request.body
                } else {
                    userId = updateLoginProfileV5Request['user_id'];
                    body = updateLoginProfileV5Request['body'];
                }
            }

        
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling updateLoginProfileV5.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): IamClient {
    return new IamClient(client);
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