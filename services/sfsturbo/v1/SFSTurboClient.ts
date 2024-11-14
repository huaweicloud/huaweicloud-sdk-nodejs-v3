import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { ActionProgress } from './model/ActionProgress';
import { AutoExportPolicy } from './model/AutoExportPolicy';
import { BatchAddSharedTagsRequest } from './model/BatchAddSharedTagsRequest';
import { BatchAddSharedTagsRequestBody } from './model/BatchAddSharedTagsRequestBody';
import { BatchAddSharedTagsResponse } from './model/BatchAddSharedTagsResponse';
import { BssInfo } from './model/BssInfo';
import { BssInfoExtend } from './model/BssInfoExtend';
import { ChangeSecurityGroup } from './model/ChangeSecurityGroup';
import { ChangeSecurityGroupRequest } from './model/ChangeSecurityGroupRequest';
import { ChangeSecurityGroupRequestBody } from './model/ChangeSecurityGroupRequestBody';
import { ChangeSecurityGroupResponse } from './model/ChangeSecurityGroupResponse';
import { ChangeShareNameReq } from './model/ChangeShareNameReq';
import { ChangeShareNameRequest } from './model/ChangeShareNameRequest';
import { ChangeShareNameResponse } from './model/ChangeShareNameResponse';
import { ConfigNasTarget } from './model/ConfigNasTarget';
import { CreateBackendTargetRequest } from './model/CreateBackendTargetRequest';
import { CreateBackendTargetRequestBody } from './model/CreateBackendTargetRequestBody';
import { CreateBackendTargetResponse } from './model/CreateBackendTargetResponse';
import { CreateFsDirQuotaRequest } from './model/CreateFsDirQuotaRequest';
import { CreateFsDirQuotaRequestBody } from './model/CreateFsDirQuotaRequestBody';
import { CreateFsDirQuotaResponse } from './model/CreateFsDirQuotaResponse';
import { CreateFsDirRequest } from './model/CreateFsDirRequest';
import { CreateFsDirRequestBody } from './model/CreateFsDirRequestBody';
import { CreateFsDirResponse } from './model/CreateFsDirResponse';
import { CreateFsTaskRequest } from './model/CreateFsTaskRequest';
import { CreateFsTaskResponse } from './model/CreateFsTaskResponse';
import { CreateHpcCacheTaskReq } from './model/CreateHpcCacheTaskReq';
import { CreateHpcCacheTaskRequest } from './model/CreateHpcCacheTaskRequest';
import { CreateHpcCacheTaskResponse } from './model/CreateHpcCacheTaskResponse';
import { CreateLdapConfigRequest } from './model/CreateLdapConfigRequest';
import { CreateLdapConfigRequestBody } from './model/CreateLdapConfigRequestBody';
import { CreateLdapConfigResponse } from './model/CreateLdapConfigResponse';
import { CreatePermRuleRequest } from './model/CreatePermRuleRequest';
import { CreatePermRuleResponse } from './model/CreatePermRuleResponse';
import { CreatePermRulesRequestBody } from './model/CreatePermRulesRequestBody';
import { CreateShareRequest } from './model/CreateShareRequest';
import { CreateShareRequestBody } from './model/CreateShareRequestBody';
import { CreateShareResponse } from './model/CreateShareResponse';
import { CreateSharedTagRequest } from './model/CreateSharedTagRequest';
import { CreateSharedTagRequestBody } from './model/CreateSharedTagRequestBody';
import { CreateSharedTagResponse } from './model/CreateSharedTagResponse';
import { DeleteBackendTargetRequest } from './model/DeleteBackendTargetRequest';
import { DeleteBackendTargetResponse } from './model/DeleteBackendTargetResponse';
import { DeleteFsDirQuotaRequest } from './model/DeleteFsDirQuotaRequest';
import { DeleteFsDirQuotaRequestBody } from './model/DeleteFsDirQuotaRequestBody';
import { DeleteFsDirQuotaResponse } from './model/DeleteFsDirQuotaResponse';
import { DeleteFsDirRequest } from './model/DeleteFsDirRequest';
import { DeleteFsDirRequestBody } from './model/DeleteFsDirRequestBody';
import { DeleteFsDirResponse } from './model/DeleteFsDirResponse';
import { DeleteFsTaskRequest } from './model/DeleteFsTaskRequest';
import { DeleteFsTaskResponse } from './model/DeleteFsTaskResponse';
import { DeleteHpcCacheTaskRequest } from './model/DeleteHpcCacheTaskRequest';
import { DeleteHpcCacheTaskResponse } from './model/DeleteHpcCacheTaskResponse';
import { DeleteLdapConfigRequest } from './model/DeleteLdapConfigRequest';
import { DeleteLdapConfigResponse } from './model/DeleteLdapConfigResponse';
import { DeletePermRuleRequest } from './model/DeletePermRuleRequest';
import { DeletePermRuleResponse } from './model/DeletePermRuleResponse';
import { DeleteShareRequest } from './model/DeleteShareRequest';
import { DeleteShareResponse } from './model/DeleteShareResponse';
import { DeleteSharedTagRequest } from './model/DeleteSharedTagRequest';
import { DeleteSharedTagResponse } from './model/DeleteSharedTagResponse';
import { ExpandShareRequest } from './model/ExpandShareRequest';
import { ExpandShareRequestBody } from './model/ExpandShareRequestBody';
import { ExpandShareResponse } from './model/ExpandShareResponse';
import { Extend } from './model/Extend';
import { FailureDetailsMessage } from './model/FailureDetailsMessage';
import { FsDirReq } from './model/FsDirReq';
import { FsDirUasge } from './model/FsDirUasge';
import { FsDuInfo } from './model/FsDuInfo';
import { FsFileCount } from './model/FsFileCount';
import { GetSubJobDetail } from './model/GetSubJobDetail';
import { ListBackendTargetsRequest } from './model/ListBackendTargetsRequest';
import { ListBackendTargetsResponse } from './model/ListBackendTargetsResponse';
import { ListFsTasksRequest } from './model/ListFsTasksRequest';
import { ListFsTasksResponse } from './model/ListFsTasksResponse';
import { ListHpcCacheTasksRequest } from './model/ListHpcCacheTasksRequest';
import { ListHpcCacheTasksResponse } from './model/ListHpcCacheTasksResponse';
import { ListPermRulesRequest } from './model/ListPermRulesRequest';
import { ListPermRulesResponse } from './model/ListPermRulesResponse';
import { ListSharedTagsRequest } from './model/ListSharedTagsRequest';
import { ListSharedTagsResponse } from './model/ListSharedTagsResponse';
import { ListSharesRequest } from './model/ListSharesRequest';
import { ListSharesResponse } from './model/ListSharesResponse';
import { Metadata } from './model/Metadata';
import { ObsDataRepository } from './model/ObsDataRepository';
import { ObsDataRepositoryPolicy } from './model/ObsDataRepositoryPolicy';
import { ObsTargetAttributes } from './model/ObsTargetAttributes';
import { OneFsTaskResp } from './model/OneFsTaskResp';
import { OneHpcCacheTaskInfoResp } from './model/OneHpcCacheTaskInfoResp';
import { OnePermRuleRequestInfo } from './model/OnePermRuleRequestInfo';
import { OnePermRuleResponseInfo } from './model/OnePermRuleResponseInfo';
import { ReqConfigHpcCacheBackend } from './model/ReqConfigHpcCacheBackend';
import { ReqUpdateHpcCacheData } from './model/ReqUpdateHpcCacheData';
import { ReqUpdateHpcCacheInfo } from './model/ReqUpdateHpcCacheInfo';
import { ResourceTag } from './model/ResourceTag';
import { SetHpcCacheBackendRequest } from './model/SetHpcCacheBackendRequest';
import { SetHpcCacheBackendResponse } from './model/SetHpcCacheBackendResponse';
import { Share } from './model/Share';
import { ShareInfo } from './model/ShareInfo';
import { ShareInfoFeature } from './model/ShareInfoFeature';
import { ShareInfoFeatures } from './model/ShareInfoFeatures';
import { ShareName } from './model/ShareName';
import { ShowBackendTargetInfoRequest } from './model/ShowBackendTargetInfoRequest';
import { ShowBackendTargetInfoResponse } from './model/ShowBackendTargetInfoResponse';
import { ShowBackendTargetInfoResponseBody } from './model/ShowBackendTargetInfoResponseBody';
import { ShowFsDirQuotaRequest } from './model/ShowFsDirQuotaRequest';
import { ShowFsDirQuotaResponse } from './model/ShowFsDirQuotaResponse';
import { ShowFsDirRequest } from './model/ShowFsDirRequest';
import { ShowFsDirResponse } from './model/ShowFsDirResponse';
import { ShowFsDirUsageRequest } from './model/ShowFsDirUsageRequest';
import { ShowFsDirUsageResponse } from './model/ShowFsDirUsageResponse';
import { ShowFsTaskRequest } from './model/ShowFsTaskRequest';
import { ShowFsTaskResponse } from './model/ShowFsTaskResponse';
import { ShowHpcCacheTaskRequest } from './model/ShowHpcCacheTaskRequest';
import { ShowHpcCacheTaskResponse } from './model/ShowHpcCacheTaskResponse';
import { ShowJobDetailRequest } from './model/ShowJobDetailRequest';
import { ShowJobDetailResponse } from './model/ShowJobDetailResponse';
import { ShowLdapConfigRequest } from './model/ShowLdapConfigRequest';
import { ShowLdapConfigResponse } from './model/ShowLdapConfigResponse';
import { ShowPermRuleRequest } from './model/ShowPermRuleRequest';
import { ShowPermRuleResponse } from './model/ShowPermRuleResponse';
import { ShowShareRequest } from './model/ShowShareRequest';
import { ShowShareResponse } from './model/ShowShareResponse';
import { ShowSharedTagsRequest } from './model/ShowSharedTagsRequest';
import { ShowSharedTagsResponse } from './model/ShowSharedTagsResponse';
import { Tag } from './model/Tag';
import { UpdateFsDirQuotaRequest } from './model/UpdateFsDirQuotaRequest';
import { UpdateFsDirQuotaRequestBody } from './model/UpdateFsDirQuotaRequestBody';
import { UpdateFsDirQuotaResponse } from './model/UpdateFsDirQuotaResponse';
import { UpdateHpcShareRequest } from './model/UpdateHpcShareRequest';
import { UpdateHpcShareRequestBody } from './model/UpdateHpcShareRequestBody';
import { UpdateHpcShareResponse } from './model/UpdateHpcShareResponse';
import { UpdateLdapConfigRequest } from './model/UpdateLdapConfigRequest';
import { UpdateLdapConfigRequestBody } from './model/UpdateLdapConfigRequestBody';
import { UpdateLdapConfigResponse } from './model/UpdateLdapConfigResponse';
import { UpdateObsTargetAttributesRequest } from './model/UpdateObsTargetAttributesRequest';
import { UpdateObsTargetAttributesRequestBody } from './model/UpdateObsTargetAttributesRequestBody';
import { UpdateObsTargetAttributesResponse } from './model/UpdateObsTargetAttributesResponse';
import { UpdateObsTargetPolicyRequest } from './model/UpdateObsTargetPolicyRequest';
import { UpdateObsTargetPolicyRequestBody } from './model/UpdateObsTargetPolicyRequestBody';
import { UpdateObsTargetPolicyResponse } from './model/UpdateObsTargetPolicyResponse';
import { UpdatePermRuleRequest } from './model/UpdatePermRuleRequest';
import { UpdatePermRuleResponse } from './model/UpdatePermRuleResponse';

export class SFSTurboClient {
    public static newBuilder(): ClientBuilder<SFSTurboClient> {
            return new ClientBuilder<SFSTurboClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 指定共享批量添加标签。
     * 
     * 一个共享上最多有20个标签。
     * 一个共享上的多个标签的key不允许重复。
     * 此接口为幂等接口：如果要添加的key在共享上已存在，则覆盖更新标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加共享标签
     * @param {string} shareId 共享ID
     * @param {BatchAddSharedTagsRequestBody} batchAddSharedTagsRequestBody 批量添加共享标签请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchAddSharedTags(batchAddSharedTagsRequest?: BatchAddSharedTagsRequest): Promise<BatchAddSharedTagsResponse> {
        const options = ParamCreater().batchAddSharedTags(batchAddSharedTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改SFS Turbo文件系统绑定的安全组。修改安全组为异步任务，可以通过“查询单个文件系统”返回的子状态字段“sub_status”来判断是否修改安全组状态，子状态为“232”即为修改安全组成功。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改文件系统绑定的安全组
     * @param {string} shareId 文件系统ID
     * @param {ChangeSecurityGroupRequestBody} changeSecurityGroup change_security_group对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeSecurityGroup(changeSecurityGroupRequest?: ChangeSecurityGroupRequest): Promise<ChangeSecurityGroupResponse> {
        const options = ParamCreater().changeSecurityGroup(changeSecurityGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改文件系统名称
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改文件系统名称
     * @param {string} shareId 文件系统ID
     * @param {ChangeShareNameReq} changeName 修改文件系统名称请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeShareName(changeShareNameRequest?: ChangeShareNameRequest): Promise<ChangeShareNameResponse> {
        const options = ParamCreater().changeShareName(changeShareNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为SFS Turbo 文件系统绑定后端存储
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 绑定后端存储
     * @param {string} shareId 文件系统id
     * @param {CreateBackendTargetRequestBody} createBackendTargetRequestBody 创建文件系统后端存储请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createBackendTarget(createBackendTargetRequest?: CreateBackendTargetRequest): Promise<CreateBackendTargetResponse> {
        const options = ParamCreater().createBackendTarget(createBackendTargetRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建目录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建目录
     * @param {string} shareId 文件系统id
     * @param {CreateFsDirRequestBody} createFsDirRequestBody 文件系统目录
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createFsDir(createFsDirRequest?: CreateFsDirRequest): Promise<CreateFsDirResponse> {
        const options = ParamCreater().createFsDir(createFsDirRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建目标文件夹quota。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建目标文件夹quota
     * @param {string} shareId 文件系统id
     * @param {CreateFsDirQuotaRequestBody} createFsDirQuotaRequestBody 目标文件夹quota信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createFsDirQuota(createFsDirQuotaRequest?: CreateFsDirQuotaRequest): Promise<CreateFsDirQuotaResponse> {
        const options = ParamCreater().createFsDirQuota(createFsDirQuotaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建文件系统异步任务，仅支持异步查询目录资源使用情况，API请求路径的feature取值为dir-usage，以下简称为DU任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建文件系统异步任务
     * @param {string} shareId 文件系统id
     * @param {string} feature 任务类型。当前仅支持取值\&quot;dir-usage\&quot;。
     * @param {FsDirReq} [createFsTaskRequestBody] 文件系统内合法的目录全路径，DU任务里，此为必选参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createFsTask(createFsTaskRequest?: CreateFsTaskRequest): Promise<CreateFsTaskResponse> {
        const options = ParamCreater().createFsTask(createFsTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建数据导入导出任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建数据导入导出任务
     * @param {string} shareId 文件系统ID
     * @param {CreateHpcCacheTaskReq} createHpcCacheTaskRequestBody 联动任务请求
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createHpcCacheTask(createHpcCacheTaskRequest?: CreateHpcCacheTaskRequest): Promise<CreateHpcCacheTaskResponse> {
        const options = ParamCreater().createHpcCacheTask(createHpcCacheTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建并绑定ldap配置。LDAP（Lightweight Directory Access Protocol），中文名称轻量级目录访问协议，是对目录服务器（Directory Server）进行访问、控制的一种标准协议。LDAP服务器可以集中式地管理用户和群组的归属关系，通过绑定LDAP服务器，当一个用户访问您的文件系统的文件时，SFS Turbo将会访问您的LDAP服务器以进行用户身份验证，并且获取用户和群组的归属关系，从而进行Linux标准的文件UGO权限的检查。要使用此功能，首先您需要搭建好LDAP服务器（当前SFS Turbo仅支持LDAP v3协议），常见提供LDAP协议访问的目录服务器实现有OpenLdap(Linux)，Active Directory(Windows)等，不同目录服务器的实现细节有所差别，绑定时需要指定对应的Schema（Schema配置错误将会导致SFS Turbo无法正确获取用户以及群组信息，可能导致无权限访问文件系统内文件），当前SFS Turbo支持的Schema有：
     * 1. RFC2307（Openldap通常选择此Schema）
     * 2. MS-AD-BIS（Active Directory通常选择此Schema，支持RFC2307bis，支持嵌套的群组）
     * 
     * SFS Turbo还支持配置主备LDAP服务器，当您的一台LDAP服务器故障无法访问后，SFS Turbo将会自动切换到备LDAP服务器访问，以免影响您的业务。同时，若您还选择将allow_local_user配置为Yes（默认为No），那么当您的LDAP服务器全部故障无法访问时，SFS Turbo将会使用您的本地用户以及群组信息，而非LDAP服务器中配置的信息进行身份验证和UGO权限检查，以最大程度减少故障影响面。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建并绑定ldap配置
     * @param {string} shareId 文件系统id
     * @param {CreateLdapConfigRequestBody} createLdapConfigRequestBody 请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createLdapConfig(createLdapConfigRequest?: CreateLdapConfigRequest): Promise<CreateLdapConfigResponse> {
        const options = ParamCreater().createLdapConfig(createLdapConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建权限规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建权限规则
     * @param {string} shareId 文件系统id
     * @param {CreatePermRulesRequestBody} createPermRuleRequestBody 请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPermRule(createPermRuleRequest?: CreatePermRuleRequest): Promise<CreatePermRuleResponse> {
        const options = ParamCreater().createPermRule(createPermRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建文件系统。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建文件系统
     * @param {CreateShareRequestBody} createShareRequestBody 创建文件系统请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createShare(createShareRequest?: CreateShareRequest): Promise<CreateShareResponse> {
        const options = ParamCreater().createShare(createShareRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 指定共享添加一个标签。
     * 一个共享上最多有20个标签。
     * 一个共享上的多个标签的key不允许重复。
     * 此接口为幂等接口：如果要添加的key在共享上已存在，则覆盖更新标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建共享标签
     * @param {string} shareId 共享ID
     * @param {CreateSharedTagRequestBody} createSharedTagRequestBody 标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSharedTag(createSharedTagRequest?: CreateSharedTagRequest): Promise<CreateSharedTagResponse> {
        const options = ParamCreater().createSharedTag(createSharedTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除后端存储
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除后端存储
     * @param {string} shareId 文件系统id
     * @param {string} targetId 绑定关系id
     * @param {boolean} [deleteDataInFileSystem] 删除后端存储时是否同时删除文件系统内的联动目录及其数据文件，默认为 false。数据删除后无法恢复，请谨慎操作。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteBackendTarget(deleteBackendTargetRequest?: DeleteBackendTargetRequest): Promise<DeleteBackendTargetResponse> {
        const options = ParamCreater().deleteBackendTarget(deleteBackendTargetRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除文件系统目录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除文件系统目录
     * @param {string} shareId 文件系统id
     * @param {DeleteFsDirRequestBody} deleteFsDirRequestBody 文件系统目录
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteFsDir(deleteFsDirRequest?: DeleteFsDirRequest): Promise<DeleteFsDirResponse> {
        const options = ParamCreater().deleteFsDir(deleteFsDirRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除目标文件夹quota。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除目标文件夹quota
     * @param {string} shareId 文件系统id
     * @param {DeleteFsDirQuotaRequestBody} deleteFsDirQuotaRequestBody 删除目录quota请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteFsDirQuota(deleteFsDirQuotaRequest?: DeleteFsDirQuotaRequest): Promise<DeleteFsDirQuotaResponse> {
        const options = ParamCreater().deleteFsDirQuota(deleteFsDirQuotaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 如果异步任务正在执行，则取消并删除任务；否则，删除任务。仅支持删除目录资源使用情况的任务，API请求路径的feature取值为dir-usage，以下简称为DU任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 取消/删除文件系统异步任务
     * @param {string} shareId 文件系统id
     * @param {string} feature 任务类型。例，DU任务取值为dir-usage
     * @param {string} taskId 任务ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteFsTask(deleteFsTaskRequest?: DeleteFsTaskRequest): Promise<DeleteFsTaskResponse> {
        const options = ParamCreater().deleteFsTask(deleteFsTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除数据导入导出任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除数据导入导出任务
     * @param {string} shareId 文件系统ID
     * @param {string} taskId 任务ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteHpcCacheTask(deleteHpcCacheTaskRequest?: DeleteHpcCacheTaskRequest): Promise<DeleteHpcCacheTaskResponse> {
        const options = ParamCreater().deleteHpcCacheTask(deleteHpcCacheTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除ldap配置。LDAP（Lightweight Directory Access Protocol），中文名称轻量级目录访问协议，是对目录服务器（Directory Server）进行访问、控制的一种标准协议。LDAP服务器可以集中式地管理用户和群组的归属关系，通过绑定LDAP服务器，当一个用户访问您的文件系统的文件时，SFS Turbo将会访问您的LDAP服务器以进行用户身份验证，并且获取用户和群组的归属关系，从而进行Linux标准的文件UGO权限的检查。要使用此功能，首先您需要搭建好LDAP服务器（当前SFS Turbo仅支持LDAP v3协议），常见提供LDAP协议访问的目录服务器实现有OpenLdap(Linux)，Active Directory(Windows)等，不同目录服务器的实现细节有所差别，绑定时需要指定对应的Schema（Schema配置错误将会导致SFS Turbo无法正确获取用户以及群组信息，可能导致无权限访问文件系统内文件），当前SFS Turbo支持的Schema有：
     * 1. RFC2307（Openldap通常选择此Schema）
     * 2. MS-AD-BIS（Active Directory通常选择此Schema，支持RFC2307bis，支持嵌套的群组）
     * 
     * SFS Turbo还支持配置主备LDAP服务器，当您的一台LDAP服务器故障无法访问后，SFS Turbo将会自动切换到备LDAP服务器访问，以免影响您的业务。同时，若您还选择将allow_local_user配置为Yes（默认为No），那么当您的LDAP服务器全部故障无法访问时，SFS Turbo将会使用您的本地用户以及群组信息，而非LDAP服务器中配置的信息进行身份验证和UGO权限检查，以最大程度减少故障影响面。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除ldap配置
     * @param {string} shareId 文件系统id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteLdapConfig(deleteLdapConfigRequest?: DeleteLdapConfigRequest): Promise<DeleteLdapConfigResponse> {
        const options = ParamCreater().deleteLdapConfig(deleteLdapConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除权限规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除权限规则
     * @param {string} shareId 文件系统id
     * @param {string} ruleId 权限规则id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePermRule(deletePermRuleRequest?: DeletePermRuleRequest): Promise<DeletePermRuleResponse> {
        const options = ParamCreater().deletePermRule(deletePermRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除文件系统。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除文件系统
     * @param {string} shareId 文件系统ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteShare(deleteShareRequest?: DeleteShareRequest): Promise<DeleteShareResponse> {
        const options = ParamCreater().deleteShare(deleteShareRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 指定共享删除一个标签。当共享中不存在指定要删除的key时，接口调用将会返回404错误。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除共享标签
     * @param {string} shareId 共享ID
     * @param {string} key 标签的键,最大长度128个字符。  key不能为空，不能包含非打印字符ASCII(0-31)，“&#x3D;”,“*”,“&lt;”,“&gt;”,“\\”,“,”,“|”,“/”。只能包含大写字母、小写字母、数字，特殊字符\&quot;-\&quot;和\&quot;_\&quot;。  说明：调用删除共享标签接口删除标签时，如果标签的键中存在不被URL直接解析的特殊字符，需要对标签的键进行URL转义处理。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSharedTag(deleteSharedTagRequest?: DeleteSharedTagRequest): Promise<DeleteSharedTagResponse> {
        const options = ParamCreater().deleteSharedTag(deleteSharedTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 扩容文件系统。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 扩容文件系统
     * @param {string} shareId 文件系统ID
     * @param {ExpandShareRequestBody} expandShareRequestBody 扩容请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public expandShare(expandShareRequest?: ExpandShareRequest): Promise<ExpandShareResponse> {
        const options = ParamCreater().expandShare(expandShareRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询后端存储列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询后端存储列表
     * @param {string} shareId 文件系统id
     * @param {number} [limit] 查询列表返回元素个数
     * @param {string} [marker] 查询列表偏移量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBackendTargets(listBackendTargetsRequest?: ListBackendTargetsRequest): Promise<ListBackendTargetsResponse> {
        const options = ParamCreater().listBackendTargets(listBackendTargetsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取文件系统异步任务列表。仅支持查询目录资源使用情况的任务，API请求路径的feature取值为dir-usage，以下简称为DU任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取文件系统异步任务列表
     * @param {string} shareId 文件系统id
     * @param {string} feature 任务类型。例，DU任务取值为dir-usage
     * @param {string} [marker] marker，取值为task_id
     * @param {number} [limit] limit, 取值为正整数. 默认为20，最大值为100
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFsTasks(listFsTasksRequest?: ListFsTasksRequest): Promise<ListFsTasksResponse> {
        const options = ParamCreater().listFsTasks(listFsTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据导入导出任务列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据导入导出任务列表
     * @param {string} shareId 文件系统ID
     * @param {string} [type] 任务类型
     * @param {string} [status] 任务状态
     * @param {number} [offset] offset，默认值为 0
     * @param {number} [limit] limit，默认值为 20
     * @param {string} [startTime] start_time
     * @param {string} [endTime] end_time
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHpcCacheTasks(listHpcCacheTasksRequest?: ListHpcCacheTasksRequest): Promise<ListHpcCacheTasksResponse> {
        const options = ParamCreater().listHpcCacheTasks(listHpcCacheTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询文件系统的权限规则列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询文件系统的权限规则列表
     * @param {string} shareId 文件系统id
     * @param {number} [limit] 返回的权限规则个数
     * @param {number} [offset] 返回的权限规则的偏移量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPermRules(listPermRulesRequest?: ListPermRulesRequest): Promise<ListPermRulesResponse> {
        const options = ParamCreater().listPermRules(listPermRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户所有共享的标签集合。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户所有共享的标签
     * @param {number} [limit] 返回的标签个数
     * @param {number} [offset] 标签查询个数的偏移量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSharedTags(listSharedTagsRequest?: ListSharedTagsRequest): Promise<ListSharedTagsResponse> {
        const options = ParamCreater().listSharedTags(listSharedTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取文件系统列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取文件系统列表
     * @param {number} [limit] 设置返回的文件系统个数的最大值，不填默认为1000个
     * @param {number} [offset] 设置返回的文件系统的偏移量。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listShares(listSharesRequest?: ListSharesRequest): Promise<ListSharesResponse> {
        const options = ParamCreater().listShares(listSharesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 配置hpc缓存型后端信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 配置hpc缓存型后端信息
     * @param {string} shareId 文件系统ID
     * @param {ReqConfigHpcCacheBackend} configParam 配置hpc缓存型后端信息参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setHpcCacheBackend(setHpcCacheBackendRequest?: SetHpcCacheBackendRequest): Promise<SetHpcCacheBackendResponse> {
        const options = ParamCreater().setHpcCacheBackend(setHpcCacheBackendRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取后端存储详细信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取后端存储详细信息
     * @param {string} shareId 文件系统id
     * @param {string} targetId 绑定关系id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBackendTargetInfo(showBackendTargetInfoRequest?: ShowBackendTargetInfoRequest): Promise<ShowBackendTargetInfoResponse> {
        const options = ParamCreater().showBackendTargetInfo(showBackendTargetInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询目录是否存在
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询目录是否存在
     * @param {string} shareId 文件系统id
     * @param {string} path 需要查询的目录的全路径
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFsDir(showFsDirRequest?: ShowFsDirRequest): Promise<ShowFsDirResponse> {
        const options = ParamCreater().showFsDir(showFsDirRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询目标文件夹quota。查询的used_capacity、used_inode数据可能有延迟。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询目标文件夹quota
     * @param {string} shareId 文件系统id
     * @param {string} path 合法的已存在的目录的全路径
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFsDirQuota(showFsDirQuotaRequest?: ShowFsDirQuotaRequest): Promise<ShowFsDirQuotaResponse> {
        const options = ParamCreater().showFsDirQuota(showFsDirQuotaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询目录资源使用情况(包括子目录的资源)。后端有5min的缓存时间，查询的数据可能有延迟。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询目录资源使用情况
     * @param {string} shareId 文件系统id
     * @param {string} path 文件系统内合法的目录全路径
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFsDirUsage(showFsDirUsageRequest?: ShowFsDirUsageRequest): Promise<ShowFsDirUsageResponse> {
        const options = ParamCreater().showFsDirUsage(showFsDirUsageRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取文件系统异步任务详情。仅支持查询目录资源使用情况的任务，API请求路径的feature取值为dir-usage，以下简称为DU任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取文件系统异步任务详情
     * @param {string} shareId 文件系统id
     * @param {string} feature 任务类型。例，DU任务取值为dir-usage
     * @param {string} taskId 任务ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFsTask(showFsTaskRequest?: ShowFsTaskRequest): Promise<ShowFsTaskResponse> {
        const options = ParamCreater().showFsTask(showFsTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据导入导出任务详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据导入导出任务详情
     * @param {string} shareId 文件系统ID
     * @param {string} taskId 任务ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showHpcCacheTask(showHpcCacheTaskRequest?: ShowHpcCacheTaskRequest): Promise<ShowHpcCacheTaskResponse> {
        const options = ParamCreater().showHpcCacheTask(showHpcCacheTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询job的执行状态。 可用于查询SFS Turbo异步API的执行状态。例如：可使用调用创建并绑定ldap配置接口时返回的jobId，通过该接口查询job的执行状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询job的状态详情
     * @param {string} jobId job ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJobDetail(showJobDetailRequest?: ShowJobDetailRequest): Promise<ShowJobDetailResponse> {
        const options = ParamCreater().showJobDetail(showJobDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Ldap的配置。LDAP（Lightweight Directory Access Protocol），中文名称轻量级目录访问协议，是对目录服务器（Directory Server）进行访问、控制的一种标准协议。LDAP服务器可以集中式地管理用户和群组的归属关系，通过绑定LDAP服务器，当一个用户访问您的文件系统的文件时，SFS Turbo将会访问您的LDAP服务器以进行用户身份验证，并且获取用户和群组的归属关系，从而进行Linux标准的文件UGO权限的检查。要使用此功能，首先您需要搭建好LDAP服务器（当前SFS Turbo仅支持LDAP v3协议），常见提供LDAP协议访问的目录服务器实现有OpenLdap(Linux)，Active Directory(Windows)等，不同目录服务器的实现细节有所差别，绑定时需要指定对应的Schema（Schema配置错误将会导致SFS Turbo无法正确获取用户以及群组信息，可能导致无权限访问文件系统内文件），当前SFS Turbo支持的Schema有：
     * 1. RFC2307（Openldap通常选择此Schema）
     * 2. MS-AD-BIS（Active Directory通常选择此Schema，支持RFC2307bis，支持嵌套的群组）
     * 
     * SFS Turbo还支持配置主备LDAP服务器，当您的一台LDAP服务器故障无法访问后，SFS Turbo将会自动切换到备LDAP服务器访问，以免影响您的业务。同时，若您还选择将allow_local_user配置为Yes（默认为No），那么当您的LDAP服务器全部故障无法访问时，SFS Turbo将会使用您的本地用户以及群组信息，而非LDAP服务器中配置的信息进行身份验证和UGO权限检查，以最大程度减少故障影响面。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Ldap的配置
     * @param {string} shareId 文件系统id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showLdapConfig(showLdapConfigRequest?: ShowLdapConfigRequest): Promise<ShowLdapConfigResponse> {
        const options = ParamCreater().showLdapConfig(showLdapConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询文件系统的某一个权限规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询文件系统的某一个权限规则
     * @param {string} shareId 文件系统id
     * @param {string} ruleId 权限规则id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPermRule(showPermRuleRequest?: ShowPermRuleRequest): Promise<ShowPermRuleResponse> {
        const options = ParamCreater().showPermRule(showPermRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询SFS Turbo文件系统详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询文件系统详细信息
     * @param {string} shareId 文件系统ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showShare(showShareRequest?: ShowShareRequest): Promise<ShowShareResponse> {
        const options = ParamCreater().showShare(showShareRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定共享的所有标签信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询共享标签
     * @param {string} shareId 共享ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSharedTags(showSharedTagsRequest?: ShowSharedTagsRequest): Promise<ShowSharedTagsResponse> {
        const options = ParamCreater().showSharedTags(showSharedTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新目标文件夹quota
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新目标文件夹quota
     * @param {string} shareId 文件系统id
     * @param {UpdateFsDirQuotaRequestBody} updateFsDirQuotaRequestBody 目标文件夹quota信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateFsDirQuota(updateFsDirQuotaRequest?: UpdateFsDirQuotaRequest): Promise<UpdateFsDirQuotaResponse> {
        const options = ParamCreater().updateFsDirQuota(updateFsDirQuotaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新文件系统冷数据淘汰时间
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新文件系统
     * @param {string} shareId 文件系统ID
     * @param {UpdateHpcShareRequestBody} updateHpcShareRequestBody 更新文件系统请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateHpcShare(updateHpcShareRequest?: UpdateHpcShareRequest): Promise<UpdateHpcShareResponse> {
        const options = ParamCreater().updateHpcShare(updateHpcShareRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改ldap配置。LDAP（Lightweight Directory Access Protocol），中文名称轻量级目录访问协议，是对目录服务器（Directory Server）进行访问、控制的一种标准协议。LDAP服务器可以集中式地管理用户和群组的归属关系，通过绑定LDAP服务器，当一个用户访问您的文件系统的文件时，SFS Turbo将会访问您的LDAP服务器以进行用户身份验证，并且获取用户和群组的归属关系，从而进行Linux标准的文件UGO权限的检查。要使用此功能，首先您需要搭建好LDAP服务器（当前SFS Turbo仅支持LDAP v3协议），常见提供LDAP协议访问的目录服务器实现有OpenLdap(Linux)，Active Directory(Windows)等，不同目录服务器的实现细节有所差别，绑定时需要指定对应的Schema（Schema配置错误将会导致SFS Turbo无法正确获取用户以及群组信息，可能导致无权限访问文件系统内文件），当前SFS Turbo支持的Schema有：
     * 1. RFC2307（Openldap通常选择此Schema）
     * 2. MS-AD-BIS（Active Directory通常选择此Schema，支持RFC2307bis，支持嵌套的群组）
     * 
     * SFS Turbo还支持配置主备LDAP服务器，当您的一台LDAP服务器故障无法访问后，SFS Turbo将会自动切换到备LDAP服务器访问，以免影响您的业务。同时，若您还选择将allow_local_user配置为Yes（默认为No），那么当您的LDAP服务器全部故障无法访问时，SFS Turbo将会使用您的本地用户以及群组信息，而非LDAP服务器中配置的信息进行身份验证和UGO权限检查，以最大程度减少故障影响面。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改ldap配置
     * @param {string} shareId 文件系统id
     * @param {UpdateLdapConfigRequestBody} updateLdapConfigRequestBody 请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateLdapConfig(updateLdapConfigRequest?: UpdateLdapConfigRequest): Promise<UpdateLdapConfigResponse> {
        const options = ParamCreater().updateLdapConfig(updateLdapConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新后端存储属性
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新后端存储属性
     * @param {string} shareId 文件系统id
     * @param {string} targetId 绑定关系id
     * @param {UpdateObsTargetAttributesRequestBody} updateObsTargetAttributesRequestBody 更新后端存储属性请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateObsTargetAttributes(updateObsTargetAttributesRequest?: UpdateObsTargetAttributesRequest): Promise<UpdateObsTargetAttributesResponse> {
        const options = ParamCreater().updateObsTargetAttributes(updateObsTargetAttributesRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新后端存储自动同步策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新后端存储自动同步策略
     * @param {string} shareId 文件系统id
     * @param {string} targetId 绑定关系id
     * @param {UpdateObsTargetPolicyRequestBody} updateObsTargetPolicyRequestBody 更新后端存储自动同步策略请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateObsTargetPolicy(updateObsTargetPolicyRequest?: UpdateObsTargetPolicyRequest): Promise<UpdateObsTargetPolicyResponse> {
        const options = ParamCreater().updateObsTargetPolicy(updateObsTargetPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改权限规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改权限规则
     * @param {string} shareId 文件系统id
     * @param {string} ruleId 权限规则id
     * @param {OnePermRuleRequestInfo} updatePermRuleRequestBody 请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePermRule(updatePermRuleRequest?: UpdatePermRuleRequest): Promise<UpdatePermRuleResponse> {
        const options = ParamCreater().updatePermRule(updatePermRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 指定共享批量添加标签。
         * 
         * 一个共享上最多有20个标签。
         * 一个共享上的多个标签的key不允许重复。
         * 此接口为幂等接口：如果要添加的key在共享上已存在，则覆盖更新标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchAddSharedTags(batchAddSharedTagsRequest?: BatchAddSharedTagsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/sfs-turbo/{share_id}/tags/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let shareId;

            if (batchAddSharedTagsRequest !== null && batchAddSharedTagsRequest !== undefined) {
                if (batchAddSharedTagsRequest instanceof BatchAddSharedTagsRequest) {
                    shareId = batchAddSharedTagsRequest.shareId;
                    body = batchAddSharedTagsRequest.body
                } else {
                    shareId = batchAddSharedTagsRequest['share_id'];
                    body = batchAddSharedTagsRequest['body'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling batchAddSharedTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'share_id': shareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改SFS Turbo文件系统绑定的安全组。修改安全组为异步任务，可以通过“查询单个文件系统”返回的子状态字段“sub_status”来判断是否修改安全组状态，子状态为“232”即为修改安全组成功。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeSecurityGroup(changeSecurityGroupRequest?: ChangeSecurityGroupRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let shareId;

            if (changeSecurityGroupRequest !== null && changeSecurityGroupRequest !== undefined) {
                if (changeSecurityGroupRequest instanceof ChangeSecurityGroupRequest) {
                    shareId = changeSecurityGroupRequest.shareId;
                    body = changeSecurityGroupRequest.body
                } else {
                    shareId = changeSecurityGroupRequest['share_id'];
                    body = changeSecurityGroupRequest['body'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling changeSecurityGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'share_id': shareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改文件系统名称
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeShareName(changeShareNameRequest?: ChangeShareNameRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let shareId;

            if (changeShareNameRequest !== null && changeShareNameRequest !== undefined) {
                if (changeShareNameRequest instanceof ChangeShareNameRequest) {
                    shareId = changeShareNameRequest.shareId;
                    body = changeShareNameRequest.body
                } else {
                    shareId = changeShareNameRequest['share_id'];
                    body = changeShareNameRequest['body'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling changeShareName.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'share_id': shareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 为SFS Turbo 文件系统绑定后端存储
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createBackendTarget(createBackendTargetRequest?: CreateBackendTargetRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}/targets",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let shareId;

            if (createBackendTargetRequest !== null && createBackendTargetRequest !== undefined) {
                if (createBackendTargetRequest instanceof CreateBackendTargetRequest) {
                    shareId = createBackendTargetRequest.shareId;
                    body = createBackendTargetRequest.body
                } else {
                    shareId = createBackendTargetRequest['share_id'];
                    body = createBackendTargetRequest['body'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling createBackendTarget.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'share_id': shareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建目录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createFsDir(createFsDirRequest?: CreateFsDirRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}/fs/dir",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let shareId;

            if (createFsDirRequest !== null && createFsDirRequest !== undefined) {
                if (createFsDirRequest instanceof CreateFsDirRequest) {
                    shareId = createFsDirRequest.shareId;
                    body = createFsDirRequest.body
                } else {
                    shareId = createFsDirRequest['share_id'];
                    body = createFsDirRequest['body'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling createFsDir.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'share_id': shareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建目标文件夹quota。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createFsDirQuota(createFsDirQuotaRequest?: CreateFsDirQuotaRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}/fs/dir-quota",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let shareId;

            if (createFsDirQuotaRequest !== null && createFsDirQuotaRequest !== undefined) {
                if (createFsDirQuotaRequest instanceof CreateFsDirQuotaRequest) {
                    shareId = createFsDirQuotaRequest.shareId;
                    body = createFsDirQuotaRequest.body
                } else {
                    shareId = createFsDirQuotaRequest['share_id'];
                    body = createFsDirQuotaRequest['body'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling createFsDirQuota.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'share_id': shareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建文件系统异步任务，仅支持异步查询目录资源使用情况，API请求路径的feature取值为dir-usage，以下简称为DU任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createFsTask(createFsTaskRequest?: CreateFsTaskRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}/fs/{feature}/tasks",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let shareId;
            
            let feature;

            if (createFsTaskRequest !== null && createFsTaskRequest !== undefined) {
                if (createFsTaskRequest instanceof CreateFsTaskRequest) {
                    shareId = createFsTaskRequest.shareId;
                    feature = createFsTaskRequest.feature;
                    body = createFsTaskRequest.body
                } else {
                    shareId = createFsTaskRequest['share_id'];
                    feature = createFsTaskRequest['feature'];
                    body = createFsTaskRequest['body'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling createFsTask.');
            }
            if (feature === null || feature === undefined) {
            throw new RequiredError('feature','Required parameter feature was null or undefined when calling createFsTask.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'share_id': shareId,'feature': feature, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建数据导入导出任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createHpcCacheTask(createHpcCacheTaskRequest?: CreateHpcCacheTaskRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/sfs-turbo/{share_id}/hpc-cache/task",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let shareId;

            if (createHpcCacheTaskRequest !== null && createHpcCacheTaskRequest !== undefined) {
                if (createHpcCacheTaskRequest instanceof CreateHpcCacheTaskRequest) {
                    shareId = createHpcCacheTaskRequest.shareId;
                    body = createHpcCacheTaskRequest.body
                } else {
                    shareId = createHpcCacheTaskRequest['share_id'];
                    body = createHpcCacheTaskRequest['body'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling createHpcCacheTask.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'share_id': shareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建并绑定ldap配置。LDAP（Lightweight Directory Access Protocol），中文名称轻量级目录访问协议，是对目录服务器（Directory Server）进行访问、控制的一种标准协议。LDAP服务器可以集中式地管理用户和群组的归属关系，通过绑定LDAP服务器，当一个用户访问您的文件系统的文件时，SFS Turbo将会访问您的LDAP服务器以进行用户身份验证，并且获取用户和群组的归属关系，从而进行Linux标准的文件UGO权限的检查。要使用此功能，首先您需要搭建好LDAP服务器（当前SFS Turbo仅支持LDAP v3协议），常见提供LDAP协议访问的目录服务器实现有OpenLdap(Linux)，Active Directory(Windows)等，不同目录服务器的实现细节有所差别，绑定时需要指定对应的Schema（Schema配置错误将会导致SFS Turbo无法正确获取用户以及群组信息，可能导致无权限访问文件系统内文件），当前SFS Turbo支持的Schema有：
         * 1. RFC2307（Openldap通常选择此Schema）
         * 2. MS-AD-BIS（Active Directory通常选择此Schema，支持RFC2307bis，支持嵌套的群组）
         * 
         * SFS Turbo还支持配置主备LDAP服务器，当您的一台LDAP服务器故障无法访问后，SFS Turbo将会自动切换到备LDAP服务器访问，以免影响您的业务。同时，若您还选择将allow_local_user配置为Yes（默认为No），那么当您的LDAP服务器全部故障无法访问时，SFS Turbo将会使用您的本地用户以及群组信息，而非LDAP服务器中配置的信息进行身份验证和UGO权限检查，以最大程度减少故障影响面。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createLdapConfig(createLdapConfigRequest?: CreateLdapConfigRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}/fs/ldap",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let shareId;

            if (createLdapConfigRequest !== null && createLdapConfigRequest !== undefined) {
                if (createLdapConfigRequest instanceof CreateLdapConfigRequest) {
                    shareId = createLdapConfigRequest.shareId;
                    body = createLdapConfigRequest.body
                } else {
                    shareId = createLdapConfigRequest['share_id'];
                    body = createLdapConfigRequest['body'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling createLdapConfig.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'share_id': shareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建权限规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPermRule(createPermRuleRequest?: CreatePermRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}/fs/perm-rules",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let shareId;

            if (createPermRuleRequest !== null && createPermRuleRequest !== undefined) {
                if (createPermRuleRequest instanceof CreatePermRuleRequest) {
                    shareId = createPermRuleRequest.shareId;
                    body = createPermRuleRequest.body
                } else {
                    shareId = createPermRuleRequest['share_id'];
                    body = createPermRuleRequest['body'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling createPermRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'share_id': shareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建文件系统。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createShare(createShareRequest?: CreateShareRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/sfs-turbo/shares",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createShareRequest !== null && createShareRequest !== undefined) {
                if (createShareRequest instanceof CreateShareRequest) {
                    body = createShareRequest.body
                } else {
                    body = createShareRequest['body'];
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
         * 指定共享添加一个标签。
         * 一个共享上最多有20个标签。
         * 一个共享上的多个标签的key不允许重复。
         * 此接口为幂等接口：如果要添加的key在共享上已存在，则覆盖更新标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSharedTag(createSharedTagRequest?: CreateSharedTagRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/sfs-turbo/{share_id}/tags",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let shareId;

            if (createSharedTagRequest !== null && createSharedTagRequest !== undefined) {
                if (createSharedTagRequest instanceof CreateSharedTagRequest) {
                    shareId = createSharedTagRequest.shareId;
                    body = createSharedTagRequest.body
                } else {
                    shareId = createSharedTagRequest['share_id'];
                    body = createSharedTagRequest['body'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling createSharedTag.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'share_id': shareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除后端存储
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteBackendTarget(deleteBackendTargetRequest?: DeleteBackendTargetRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}/targets/{target_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let shareId;
            
            let targetId;
            
            let deleteDataInFileSystem;

            if (deleteBackendTargetRequest !== null && deleteBackendTargetRequest !== undefined) {
                if (deleteBackendTargetRequest instanceof DeleteBackendTargetRequest) {
                    shareId = deleteBackendTargetRequest.shareId;
                    targetId = deleteBackendTargetRequest.targetId;
                    deleteDataInFileSystem = deleteBackendTargetRequest.deleteDataInFileSystem;
                } else {
                    shareId = deleteBackendTargetRequest['share_id'];
                    targetId = deleteBackendTargetRequest['target_id'];
                    deleteDataInFileSystem = deleteBackendTargetRequest['delete_data_in_file_system'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling deleteBackendTarget.');
            }
            if (targetId === null || targetId === undefined) {
            throw new RequiredError('targetId','Required parameter targetId was null or undefined when calling deleteBackendTarget.');
            }
            if (deleteDataInFileSystem !== null && deleteDataInFileSystem !== undefined) {
                localVarQueryParameter['delete_data_in_file_system'] = deleteDataInFileSystem;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'share_id': shareId,'target_id': targetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除文件系统目录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteFsDir(deleteFsDirRequest?: DeleteFsDirRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}/fs/dir",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let shareId;

            if (deleteFsDirRequest !== null && deleteFsDirRequest !== undefined) {
                if (deleteFsDirRequest instanceof DeleteFsDirRequest) {
                    shareId = deleteFsDirRequest.shareId;
                    body = deleteFsDirRequest.body
                } else {
                    shareId = deleteFsDirRequest['share_id'];
                    body = deleteFsDirRequest['body'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling deleteFsDir.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'share_id': shareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除目标文件夹quota。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteFsDirQuota(deleteFsDirQuotaRequest?: DeleteFsDirQuotaRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}/fs/dir-quota",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let shareId;

            if (deleteFsDirQuotaRequest !== null && deleteFsDirQuotaRequest !== undefined) {
                if (deleteFsDirQuotaRequest instanceof DeleteFsDirQuotaRequest) {
                    shareId = deleteFsDirQuotaRequest.shareId;
                    body = deleteFsDirQuotaRequest.body
                } else {
                    shareId = deleteFsDirQuotaRequest['share_id'];
                    body = deleteFsDirQuotaRequest['body'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling deleteFsDirQuota.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'share_id': shareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 如果异步任务正在执行，则取消并删除任务；否则，删除任务。仅支持删除目录资源使用情况的任务，API请求路径的feature取值为dir-usage，以下简称为DU任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteFsTask(deleteFsTaskRequest?: DeleteFsTaskRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}/fs/{feature}/tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let shareId;
            
            let feature;
            
            let taskId;

            if (deleteFsTaskRequest !== null && deleteFsTaskRequest !== undefined) {
                if (deleteFsTaskRequest instanceof DeleteFsTaskRequest) {
                    shareId = deleteFsTaskRequest.shareId;
                    feature = deleteFsTaskRequest.feature;
                    taskId = deleteFsTaskRequest.taskId;
                } else {
                    shareId = deleteFsTaskRequest['share_id'];
                    feature = deleteFsTaskRequest['feature'];
                    taskId = deleteFsTaskRequest['task_id'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling deleteFsTask.');
            }
            if (feature === null || feature === undefined) {
            throw new RequiredError('feature','Required parameter feature was null or undefined when calling deleteFsTask.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling deleteFsTask.');
            }

            options.pathParams = { 'share_id': shareId,'feature': feature,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除数据导入导出任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteHpcCacheTask(deleteHpcCacheTaskRequest?: DeleteHpcCacheTaskRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/sfs-turbo/{share_id}/hpc-cache/task/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let shareId;
            
            let taskId;

            if (deleteHpcCacheTaskRequest !== null && deleteHpcCacheTaskRequest !== undefined) {
                if (deleteHpcCacheTaskRequest instanceof DeleteHpcCacheTaskRequest) {
                    shareId = deleteHpcCacheTaskRequest.shareId;
                    taskId = deleteHpcCacheTaskRequest.taskId;
                } else {
                    shareId = deleteHpcCacheTaskRequest['share_id'];
                    taskId = deleteHpcCacheTaskRequest['task_id'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling deleteHpcCacheTask.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling deleteHpcCacheTask.');
            }

            options.pathParams = { 'share_id': shareId,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除ldap配置。LDAP（Lightweight Directory Access Protocol），中文名称轻量级目录访问协议，是对目录服务器（Directory Server）进行访问、控制的一种标准协议。LDAP服务器可以集中式地管理用户和群组的归属关系，通过绑定LDAP服务器，当一个用户访问您的文件系统的文件时，SFS Turbo将会访问您的LDAP服务器以进行用户身份验证，并且获取用户和群组的归属关系，从而进行Linux标准的文件UGO权限的检查。要使用此功能，首先您需要搭建好LDAP服务器（当前SFS Turbo仅支持LDAP v3协议），常见提供LDAP协议访问的目录服务器实现有OpenLdap(Linux)，Active Directory(Windows)等，不同目录服务器的实现细节有所差别，绑定时需要指定对应的Schema（Schema配置错误将会导致SFS Turbo无法正确获取用户以及群组信息，可能导致无权限访问文件系统内文件），当前SFS Turbo支持的Schema有：
         * 1. RFC2307（Openldap通常选择此Schema）
         * 2. MS-AD-BIS（Active Directory通常选择此Schema，支持RFC2307bis，支持嵌套的群组）
         * 
         * SFS Turbo还支持配置主备LDAP服务器，当您的一台LDAP服务器故障无法访问后，SFS Turbo将会自动切换到备LDAP服务器访问，以免影响您的业务。同时，若您还选择将allow_local_user配置为Yes（默认为No），那么当您的LDAP服务器全部故障无法访问时，SFS Turbo将会使用您的本地用户以及群组信息，而非LDAP服务器中配置的信息进行身份验证和UGO权限检查，以最大程度减少故障影响面。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteLdapConfig(deleteLdapConfigRequest?: DeleteLdapConfigRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}/fs/ldap",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let shareId;

            if (deleteLdapConfigRequest !== null && deleteLdapConfigRequest !== undefined) {
                if (deleteLdapConfigRequest instanceof DeleteLdapConfigRequest) {
                    shareId = deleteLdapConfigRequest.shareId;
                } else {
                    shareId = deleteLdapConfigRequest['share_id'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling deleteLdapConfig.');
            }

            options.pathParams = { 'share_id': shareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除权限规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePermRule(deletePermRuleRequest?: DeletePermRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}/fs/perm-rules/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let shareId;
            
            let ruleId;

            if (deletePermRuleRequest !== null && deletePermRuleRequest !== undefined) {
                if (deletePermRuleRequest instanceof DeletePermRuleRequest) {
                    shareId = deletePermRuleRequest.shareId;
                    ruleId = deletePermRuleRequest.ruleId;
                } else {
                    shareId = deletePermRuleRequest['share_id'];
                    ruleId = deletePermRuleRequest['rule_id'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling deletePermRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling deletePermRule.');
            }

            options.pathParams = { 'share_id': shareId,'rule_id': ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除文件系统。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteShare(deleteShareRequest?: DeleteShareRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let shareId;

            if (deleteShareRequest !== null && deleteShareRequest !== undefined) {
                if (deleteShareRequest instanceof DeleteShareRequest) {
                    shareId = deleteShareRequest.shareId;
                } else {
                    shareId = deleteShareRequest['share_id'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling deleteShare.');
            }

            options.pathParams = { 'share_id': shareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 指定共享删除一个标签。当共享中不存在指定要删除的key时，接口调用将会返回404错误。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSharedTag(deleteSharedTagRequest?: DeleteSharedTagRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/sfs-turbo/{share_id}/tags/{key}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let shareId;
            
            let key;

            if (deleteSharedTagRequest !== null && deleteSharedTagRequest !== undefined) {
                if (deleteSharedTagRequest instanceof DeleteSharedTagRequest) {
                    shareId = deleteSharedTagRequest.shareId;
                    key = deleteSharedTagRequest.key;
                } else {
                    shareId = deleteSharedTagRequest['share_id'];
                    key = deleteSharedTagRequest['key'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling deleteSharedTag.');
            }
            if (key === null || key === undefined) {
            throw new RequiredError('key','Required parameter key was null or undefined when calling deleteSharedTag.');
            }

            options.pathParams = { 'share_id': shareId,'key': key, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 扩容文件系统。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        expandShare(expandShareRequest?: ExpandShareRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let shareId;

            if (expandShareRequest !== null && expandShareRequest !== undefined) {
                if (expandShareRequest instanceof ExpandShareRequest) {
                    shareId = expandShareRequest.shareId;
                    body = expandShareRequest.body
                } else {
                    shareId = expandShareRequest['share_id'];
                    body = expandShareRequest['body'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling expandShare.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'share_id': shareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询后端存储列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBackendTargets(listBackendTargetsRequest?: ListBackendTargetsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}/targets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let shareId;
            
            let limit;
            
            let marker;

            if (listBackendTargetsRequest !== null && listBackendTargetsRequest !== undefined) {
                if (listBackendTargetsRequest instanceof ListBackendTargetsRequest) {
                    shareId = listBackendTargetsRequest.shareId;
                    limit = listBackendTargetsRequest.limit;
                    marker = listBackendTargetsRequest.marker;
                } else {
                    shareId = listBackendTargetsRequest['share_id'];
                    limit = listBackendTargetsRequest['limit'];
                    marker = listBackendTargetsRequest['marker'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling listBackendTargets.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'share_id': shareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取文件系统异步任务列表。仅支持查询目录资源使用情况的任务，API请求路径的feature取值为dir-usage，以下简称为DU任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFsTasks(listFsTasksRequest?: ListFsTasksRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}/fs/{feature}/tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let shareId;
            
            let feature;
            
            let marker;
            
            let limit;

            if (listFsTasksRequest !== null && listFsTasksRequest !== undefined) {
                if (listFsTasksRequest instanceof ListFsTasksRequest) {
                    shareId = listFsTasksRequest.shareId;
                    feature = listFsTasksRequest.feature;
                    marker = listFsTasksRequest.marker;
                    limit = listFsTasksRequest.limit;
                } else {
                    shareId = listFsTasksRequest['share_id'];
                    feature = listFsTasksRequest['feature'];
                    marker = listFsTasksRequest['marker'];
                    limit = listFsTasksRequest['limit'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling listFsTasks.');
            }
            if (feature === null || feature === undefined) {
            throw new RequiredError('feature','Required parameter feature was null or undefined when calling listFsTasks.');
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'share_id': shareId,'feature': feature, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询数据导入导出任务列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHpcCacheTasks(listHpcCacheTasksRequest?: ListHpcCacheTasksRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/sfs-turbo/{share_id}/hpc-cache/tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let shareId;
            
            let type;
            
            let status;
            
            let offset;
            
            let limit;
            
            let startTime;
            
            let endTime;

            if (listHpcCacheTasksRequest !== null && listHpcCacheTasksRequest !== undefined) {
                if (listHpcCacheTasksRequest instanceof ListHpcCacheTasksRequest) {
                    shareId = listHpcCacheTasksRequest.shareId;
                    type = listHpcCacheTasksRequest.type;
                    status = listHpcCacheTasksRequest.status;
                    offset = listHpcCacheTasksRequest.offset;
                    limit = listHpcCacheTasksRequest.limit;
                    startTime = listHpcCacheTasksRequest.startTime;
                    endTime = listHpcCacheTasksRequest.endTime;
                } else {
                    shareId = listHpcCacheTasksRequest['share_id'];
                    type = listHpcCacheTasksRequest['type'];
                    status = listHpcCacheTasksRequest['status'];
                    offset = listHpcCacheTasksRequest['offset'];
                    limit = listHpcCacheTasksRequest['limit'];
                    startTime = listHpcCacheTasksRequest['start_time'];
                    endTime = listHpcCacheTasksRequest['end_time'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling listHpcCacheTasks.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'share_id': shareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询文件系统的权限规则列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPermRules(listPermRulesRequest?: ListPermRulesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}/fs/perm-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let shareId;
            
            let limit;
            
            let offset;

            if (listPermRulesRequest !== null && listPermRulesRequest !== undefined) {
                if (listPermRulesRequest instanceof ListPermRulesRequest) {
                    shareId = listPermRulesRequest.shareId;
                    limit = listPermRulesRequest.limit;
                    offset = listPermRulesRequest.offset;
                } else {
                    shareId = listPermRulesRequest['share_id'];
                    limit = listPermRulesRequest['limit'];
                    offset = listPermRulesRequest['offset'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling listPermRules.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'share_id': shareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户所有共享的标签集合。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSharedTags(listSharedTagsRequest?: ListSharedTagsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/sfs-turbo/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;

            if (listSharedTagsRequest !== null && listSharedTagsRequest !== undefined) {
                if (listSharedTagsRequest instanceof ListSharedTagsRequest) {
                    limit = listSharedTagsRequest.limit;
                    offset = listSharedTagsRequest.offset;
                } else {
                    limit = listSharedTagsRequest['limit'];
                    offset = listSharedTagsRequest['offset'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取文件系统列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listShares(listSharesRequest?: ListSharesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/sfs-turbo/shares/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;

            if (listSharesRequest !== null && listSharesRequest !== undefined) {
                if (listSharesRequest instanceof ListSharesRequest) {
                    limit = listSharesRequest.limit;
                    offset = listSharesRequest.offset;
                } else {
                    limit = listSharesRequest['limit'];
                    offset = listSharesRequest['offset'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 配置hpc缓存型后端信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setHpcCacheBackend(setHpcCacheBackendRequest?: SetHpcCacheBackendRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let shareId;

            if (setHpcCacheBackendRequest !== null && setHpcCacheBackendRequest !== undefined) {
                if (setHpcCacheBackendRequest instanceof SetHpcCacheBackendRequest) {
                    shareId = setHpcCacheBackendRequest.shareId;
                    body = setHpcCacheBackendRequest.body
                } else {
                    shareId = setHpcCacheBackendRequest['share_id'];
                    body = setHpcCacheBackendRequest['body'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling setHpcCacheBackend.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'share_id': shareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取后端存储详细信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBackendTargetInfo(showBackendTargetInfoRequest?: ShowBackendTargetInfoRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}/targets/{target_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let shareId;
            
            let targetId;

            if (showBackendTargetInfoRequest !== null && showBackendTargetInfoRequest !== undefined) {
                if (showBackendTargetInfoRequest instanceof ShowBackendTargetInfoRequest) {
                    shareId = showBackendTargetInfoRequest.shareId;
                    targetId = showBackendTargetInfoRequest.targetId;
                } else {
                    shareId = showBackendTargetInfoRequest['share_id'];
                    targetId = showBackendTargetInfoRequest['target_id'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling showBackendTargetInfo.');
            }
            if (targetId === null || targetId === undefined) {
            throw new RequiredError('targetId','Required parameter targetId was null or undefined when calling showBackendTargetInfo.');
            }

            options.pathParams = { 'share_id': shareId,'target_id': targetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询目录是否存在
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showFsDir(showFsDirRequest?: ShowFsDirRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}/fs/dir",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let shareId;
            
            let path;

            if (showFsDirRequest !== null && showFsDirRequest !== undefined) {
                if (showFsDirRequest instanceof ShowFsDirRequest) {
                    shareId = showFsDirRequest.shareId;
                    path = showFsDirRequest.path;
                } else {
                    shareId = showFsDirRequest['share_id'];
                    path = showFsDirRequest['path'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling showFsDir.');
            }
            if (path === null || path === undefined) {
                throw new RequiredError('path','Required parameter path was null or undefined when calling showFsDir.');
            }
            if (path !== null && path !== undefined) {
                localVarQueryParameter['path'] = path;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'share_id': shareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询目标文件夹quota。查询的used_capacity、used_inode数据可能有延迟。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showFsDirQuota(showFsDirQuotaRequest?: ShowFsDirQuotaRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}/fs/dir-quota",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let shareId;
            
            let path;

            if (showFsDirQuotaRequest !== null && showFsDirQuotaRequest !== undefined) {
                if (showFsDirQuotaRequest instanceof ShowFsDirQuotaRequest) {
                    shareId = showFsDirQuotaRequest.shareId;
                    path = showFsDirQuotaRequest.path;
                } else {
                    shareId = showFsDirQuotaRequest['share_id'];
                    path = showFsDirQuotaRequest['path'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling showFsDirQuota.');
            }
            if (path === null || path === undefined) {
                throw new RequiredError('path','Required parameter path was null or undefined when calling showFsDirQuota.');
            }
            if (path !== null && path !== undefined) {
                localVarQueryParameter['path'] = path;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'share_id': shareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询目录资源使用情况(包括子目录的资源)。后端有5min的缓存时间，查询的数据可能有延迟。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showFsDirUsage(showFsDirUsageRequest?: ShowFsDirUsageRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}/fs/dir-usage",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let shareId;
            
            let path;

            if (showFsDirUsageRequest !== null && showFsDirUsageRequest !== undefined) {
                if (showFsDirUsageRequest instanceof ShowFsDirUsageRequest) {
                    shareId = showFsDirUsageRequest.shareId;
                    path = showFsDirUsageRequest.path;
                } else {
                    shareId = showFsDirUsageRequest['share_id'];
                    path = showFsDirUsageRequest['path'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling showFsDirUsage.');
            }
            if (path === null || path === undefined) {
                throw new RequiredError('path','Required parameter path was null or undefined when calling showFsDirUsage.');
            }
            if (path !== null && path !== undefined) {
                localVarQueryParameter['path'] = path;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'share_id': shareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取文件系统异步任务详情。仅支持查询目录资源使用情况的任务，API请求路径的feature取值为dir-usage，以下简称为DU任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showFsTask(showFsTaskRequest?: ShowFsTaskRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}/fs/{feature}/tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let shareId;
            
            let feature;
            
            let taskId;

            if (showFsTaskRequest !== null && showFsTaskRequest !== undefined) {
                if (showFsTaskRequest instanceof ShowFsTaskRequest) {
                    shareId = showFsTaskRequest.shareId;
                    feature = showFsTaskRequest.feature;
                    taskId = showFsTaskRequest.taskId;
                } else {
                    shareId = showFsTaskRequest['share_id'];
                    feature = showFsTaskRequest['feature'];
                    taskId = showFsTaskRequest['task_id'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling showFsTask.');
            }
            if (feature === null || feature === undefined) {
            throw new RequiredError('feature','Required parameter feature was null or undefined when calling showFsTask.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showFsTask.');
            }

            options.pathParams = { 'share_id': shareId,'feature': feature,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询数据导入导出任务详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showHpcCacheTask(showHpcCacheTaskRequest?: ShowHpcCacheTaskRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/sfs-turbo/{share_id}/hpc-cache/task/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let shareId;
            
            let taskId;

            if (showHpcCacheTaskRequest !== null && showHpcCacheTaskRequest !== undefined) {
                if (showHpcCacheTaskRequest instanceof ShowHpcCacheTaskRequest) {
                    shareId = showHpcCacheTaskRequest.shareId;
                    taskId = showHpcCacheTaskRequest.taskId;
                } else {
                    shareId = showHpcCacheTaskRequest['share_id'];
                    taskId = showHpcCacheTaskRequest['task_id'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling showHpcCacheTask.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showHpcCacheTask.');
            }

            options.pathParams = { 'share_id': shareId,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询job的执行状态。 可用于查询SFS Turbo异步API的执行状态。例如：可使用调用创建并绑定ldap配置接口时返回的jobId，通过该接口查询job的执行状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJobDetail(showJobDetailRequest?: ShowJobDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/sfs-turbo/jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (showJobDetailRequest !== null && showJobDetailRequest !== undefined) {
                if (showJobDetailRequest instanceof ShowJobDetailRequest) {
                    jobId = showJobDetailRequest.jobId;
                } else {
                    jobId = showJobDetailRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showJobDetail.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Ldap的配置。LDAP（Lightweight Directory Access Protocol），中文名称轻量级目录访问协议，是对目录服务器（Directory Server）进行访问、控制的一种标准协议。LDAP服务器可以集中式地管理用户和群组的归属关系，通过绑定LDAP服务器，当一个用户访问您的文件系统的文件时，SFS Turbo将会访问您的LDAP服务器以进行用户身份验证，并且获取用户和群组的归属关系，从而进行Linux标准的文件UGO权限的检查。要使用此功能，首先您需要搭建好LDAP服务器（当前SFS Turbo仅支持LDAP v3协议），常见提供LDAP协议访问的目录服务器实现有OpenLdap(Linux)，Active Directory(Windows)等，不同目录服务器的实现细节有所差别，绑定时需要指定对应的Schema（Schema配置错误将会导致SFS Turbo无法正确获取用户以及群组信息，可能导致无权限访问文件系统内文件），当前SFS Turbo支持的Schema有：
         * 1. RFC2307（Openldap通常选择此Schema）
         * 2. MS-AD-BIS（Active Directory通常选择此Schema，支持RFC2307bis，支持嵌套的群组）
         * 
         * SFS Turbo还支持配置主备LDAP服务器，当您的一台LDAP服务器故障无法访问后，SFS Turbo将会自动切换到备LDAP服务器访问，以免影响您的业务。同时，若您还选择将allow_local_user配置为Yes（默认为No），那么当您的LDAP服务器全部故障无法访问时，SFS Turbo将会使用您的本地用户以及群组信息，而非LDAP服务器中配置的信息进行身份验证和UGO权限检查，以最大程度减少故障影响面。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showLdapConfig(showLdapConfigRequest?: ShowLdapConfigRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}/fs/ldap",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let shareId;

            if (showLdapConfigRequest !== null && showLdapConfigRequest !== undefined) {
                if (showLdapConfigRequest instanceof ShowLdapConfigRequest) {
                    shareId = showLdapConfigRequest.shareId;
                } else {
                    shareId = showLdapConfigRequest['share_id'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling showLdapConfig.');
            }

            options.pathParams = { 'share_id': shareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询文件系统的某一个权限规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPermRule(showPermRuleRequest?: ShowPermRuleRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}/fs/perm-rules/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let shareId;
            
            let ruleId;

            if (showPermRuleRequest !== null && showPermRuleRequest !== undefined) {
                if (showPermRuleRequest instanceof ShowPermRuleRequest) {
                    shareId = showPermRuleRequest.shareId;
                    ruleId = showPermRuleRequest.ruleId;
                } else {
                    shareId = showPermRuleRequest['share_id'];
                    ruleId = showPermRuleRequest['rule_id'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling showPermRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling showPermRule.');
            }

            options.pathParams = { 'share_id': shareId,'rule_id': ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询SFS Turbo文件系统详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showShare(showShareRequest?: ShowShareRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let shareId;

            if (showShareRequest !== null && showShareRequest !== undefined) {
                if (showShareRequest instanceof ShowShareRequest) {
                    shareId = showShareRequest.shareId;
                } else {
                    shareId = showShareRequest['share_id'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling showShare.');
            }

            options.pathParams = { 'share_id': shareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定共享的所有标签信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSharedTags(showSharedTagsRequest?: ShowSharedTagsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/sfs-turbo/{share_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let shareId;

            if (showSharedTagsRequest !== null && showSharedTagsRequest !== undefined) {
                if (showSharedTagsRequest instanceof ShowSharedTagsRequest) {
                    shareId = showSharedTagsRequest.shareId;
                } else {
                    shareId = showSharedTagsRequest['share_id'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling showSharedTags.');
            }

            options.pathParams = { 'share_id': shareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新目标文件夹quota
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateFsDirQuota(updateFsDirQuotaRequest?: UpdateFsDirQuotaRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}/fs/dir-quota",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let shareId;

            if (updateFsDirQuotaRequest !== null && updateFsDirQuotaRequest !== undefined) {
                if (updateFsDirQuotaRequest instanceof UpdateFsDirQuotaRequest) {
                    shareId = updateFsDirQuotaRequest.shareId;
                    body = updateFsDirQuotaRequest.body
                } else {
                    shareId = updateFsDirQuotaRequest['share_id'];
                    body = updateFsDirQuotaRequest['body'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling updateFsDirQuota.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'share_id': shareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新文件系统冷数据淘汰时间
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateHpcShare(updateHpcShareRequest?: UpdateHpcShareRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let shareId;

            if (updateHpcShareRequest !== null && updateHpcShareRequest !== undefined) {
                if (updateHpcShareRequest instanceof UpdateHpcShareRequest) {
                    shareId = updateHpcShareRequest.shareId;
                    body = updateHpcShareRequest.body
                } else {
                    shareId = updateHpcShareRequest['share_id'];
                    body = updateHpcShareRequest['body'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling updateHpcShare.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'share_id': shareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改ldap配置。LDAP（Lightweight Directory Access Protocol），中文名称轻量级目录访问协议，是对目录服务器（Directory Server）进行访问、控制的一种标准协议。LDAP服务器可以集中式地管理用户和群组的归属关系，通过绑定LDAP服务器，当一个用户访问您的文件系统的文件时，SFS Turbo将会访问您的LDAP服务器以进行用户身份验证，并且获取用户和群组的归属关系，从而进行Linux标准的文件UGO权限的检查。要使用此功能，首先您需要搭建好LDAP服务器（当前SFS Turbo仅支持LDAP v3协议），常见提供LDAP协议访问的目录服务器实现有OpenLdap(Linux)，Active Directory(Windows)等，不同目录服务器的实现细节有所差别，绑定时需要指定对应的Schema（Schema配置错误将会导致SFS Turbo无法正确获取用户以及群组信息，可能导致无权限访问文件系统内文件），当前SFS Turbo支持的Schema有：
         * 1. RFC2307（Openldap通常选择此Schema）
         * 2. MS-AD-BIS（Active Directory通常选择此Schema，支持RFC2307bis，支持嵌套的群组）
         * 
         * SFS Turbo还支持配置主备LDAP服务器，当您的一台LDAP服务器故障无法访问后，SFS Turbo将会自动切换到备LDAP服务器访问，以免影响您的业务。同时，若您还选择将allow_local_user配置为Yes（默认为No），那么当您的LDAP服务器全部故障无法访问时，SFS Turbo将会使用您的本地用户以及群组信息，而非LDAP服务器中配置的信息进行身份验证和UGO权限检查，以最大程度减少故障影响面。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateLdapConfig(updateLdapConfigRequest?: UpdateLdapConfigRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}/fs/ldap",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let shareId;

            if (updateLdapConfigRequest !== null && updateLdapConfigRequest !== undefined) {
                if (updateLdapConfigRequest instanceof UpdateLdapConfigRequest) {
                    shareId = updateLdapConfigRequest.shareId;
                    body = updateLdapConfigRequest.body
                } else {
                    shareId = updateLdapConfigRequest['share_id'];
                    body = updateLdapConfigRequest['body'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling updateLdapConfig.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'share_id': shareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新后端存储属性
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateObsTargetAttributes(updateObsTargetAttributesRequest?: UpdateObsTargetAttributesRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}/targets/{target_id}/attributes",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let shareId;
            
            let targetId;

            if (updateObsTargetAttributesRequest !== null && updateObsTargetAttributesRequest !== undefined) {
                if (updateObsTargetAttributesRequest instanceof UpdateObsTargetAttributesRequest) {
                    shareId = updateObsTargetAttributesRequest.shareId;
                    targetId = updateObsTargetAttributesRequest.targetId;
                    body = updateObsTargetAttributesRequest.body
                } else {
                    shareId = updateObsTargetAttributesRequest['share_id'];
                    targetId = updateObsTargetAttributesRequest['target_id'];
                    body = updateObsTargetAttributesRequest['body'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling updateObsTargetAttributes.');
            }
            if (targetId === null || targetId === undefined) {
            throw new RequiredError('targetId','Required parameter targetId was null or undefined when calling updateObsTargetAttributes.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'share_id': shareId,'target_id': targetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新后端存储自动同步策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateObsTargetPolicy(updateObsTargetPolicyRequest?: UpdateObsTargetPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}/targets/{target_id}/policy",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let shareId;
            
            let targetId;

            if (updateObsTargetPolicyRequest !== null && updateObsTargetPolicyRequest !== undefined) {
                if (updateObsTargetPolicyRequest instanceof UpdateObsTargetPolicyRequest) {
                    shareId = updateObsTargetPolicyRequest.shareId;
                    targetId = updateObsTargetPolicyRequest.targetId;
                    body = updateObsTargetPolicyRequest.body
                } else {
                    shareId = updateObsTargetPolicyRequest['share_id'];
                    targetId = updateObsTargetPolicyRequest['target_id'];
                    body = updateObsTargetPolicyRequest['body'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling updateObsTargetPolicy.');
            }
            if (targetId === null || targetId === undefined) {
            throw new RequiredError('targetId','Required parameter targetId was null or undefined when calling updateObsTargetPolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'share_id': shareId,'target_id': targetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改权限规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePermRule(updatePermRuleRequest?: UpdatePermRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}/fs/perm-rules/{rule_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let shareId;
            
            let ruleId;

            if (updatePermRuleRequest !== null && updatePermRuleRequest !== undefined) {
                if (updatePermRuleRequest instanceof UpdatePermRuleRequest) {
                    shareId = updatePermRuleRequest.shareId;
                    ruleId = updatePermRuleRequest.ruleId;
                    body = updatePermRuleRequest.body
                } else {
                    shareId = updatePermRuleRequest['share_id'];
                    ruleId = updatePermRuleRequest['rule_id'];
                    body = updatePermRuleRequest['body'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling updatePermRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling updatePermRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'share_id': shareId,'rule_id': ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): SFSTurboClient {
    return new SFSTurboClient(client);
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