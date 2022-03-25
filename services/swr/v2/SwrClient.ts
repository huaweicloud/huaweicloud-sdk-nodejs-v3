import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AuthInfo } from './model/AuthInfo';
import { CreateImageSyncRepoRequest } from './model/CreateImageSyncRepoRequest';
import { CreateImageSyncRepoRequestBody } from './model/CreateImageSyncRepoRequestBody';
import { CreateImageSyncRepoResponse } from './model/CreateImageSyncRepoResponse';
import { CreateManualImageSyncRepoRequest } from './model/CreateManualImageSyncRepoRequest';
import { CreateManualImageSyncRepoRequestBody } from './model/CreateManualImageSyncRepoRequestBody';
import { CreateManualImageSyncRepoResponse } from './model/CreateManualImageSyncRepoResponse';
import { CreateNamespaceAuthRequest } from './model/CreateNamespaceAuthRequest';
import { CreateNamespaceAuthResponse } from './model/CreateNamespaceAuthResponse';
import { CreateNamespaceRequest } from './model/CreateNamespaceRequest';
import { CreateNamespaceRequestBody } from './model/CreateNamespaceRequestBody';
import { CreateNamespaceResponse } from './model/CreateNamespaceResponse';
import { CreateRepoDomainsRequest } from './model/CreateRepoDomainsRequest';
import { CreateRepoDomainsRequestBody } from './model/CreateRepoDomainsRequestBody';
import { CreateRepoDomainsResponse } from './model/CreateRepoDomainsResponse';
import { CreateRepoRequest } from './model/CreateRepoRequest';
import { CreateRepoRequestBody } from './model/CreateRepoRequestBody';
import { CreateRepoResponse } from './model/CreateRepoResponse';
import { CreateRetentionRequest } from './model/CreateRetentionRequest';
import { CreateRetentionRequestBody } from './model/CreateRetentionRequestBody';
import { CreateRetentionResponse } from './model/CreateRetentionResponse';
import { CreateSecretRequest } from './model/CreateSecretRequest';
import { CreateSecretResponse } from './model/CreateSecretResponse';
import { CreateTriggerRequest } from './model/CreateTriggerRequest';
import { CreateTriggerRequestBody } from './model/CreateTriggerRequestBody';
import { CreateTriggerResponse } from './model/CreateTriggerResponse';
import { CreateUserRepositoryAuthRequest } from './model/CreateUserRepositoryAuthRequest';
import { CreateUserRepositoryAuthResponse } from './model/CreateUserRepositoryAuthResponse';
import { DeleteImageSyncRepoRequest } from './model/DeleteImageSyncRepoRequest';
import { DeleteImageSyncRepoRequestBody } from './model/DeleteImageSyncRepoRequestBody';
import { DeleteImageSyncRepoResponse } from './model/DeleteImageSyncRepoResponse';
import { DeleteNamespaceAuthRequest } from './model/DeleteNamespaceAuthRequest';
import { DeleteNamespaceAuthResponse } from './model/DeleteNamespaceAuthResponse';
import { DeleteNamespacesRequest } from './model/DeleteNamespacesRequest';
import { DeleteNamespacesResponse } from './model/DeleteNamespacesResponse';
import { DeleteRepoDomainsRequest } from './model/DeleteRepoDomainsRequest';
import { DeleteRepoDomainsResponse } from './model/DeleteRepoDomainsResponse';
import { DeleteRepoRequest } from './model/DeleteRepoRequest';
import { DeleteRepoResponse } from './model/DeleteRepoResponse';
import { DeleteRepoTagRequest } from './model/DeleteRepoTagRequest';
import { DeleteRepoTagResponse } from './model/DeleteRepoTagResponse';
import { DeleteRetentionRequest } from './model/DeleteRetentionRequest';
import { DeleteRetentionResponse } from './model/DeleteRetentionResponse';
import { DeleteTriggerRequest } from './model/DeleteTriggerRequest';
import { DeleteTriggerResponse } from './model/DeleteTriggerResponse';
import { DeleteUserRepositoryAuthRequest } from './model/DeleteUserRepositoryAuthRequest';
import { DeleteUserRepositoryAuthResponse } from './model/DeleteUserRepositoryAuthResponse';
import { ImageTag } from './model/ImageTag';
import { Link } from './model/Link';
import { ListApiVersionsRequest } from './model/ListApiVersionsRequest';
import { ListApiVersionsResponse } from './model/ListApiVersionsResponse';
import { ListImageAutoSyncReposDetailsRequest } from './model/ListImageAutoSyncReposDetailsRequest';
import { ListImageAutoSyncReposDetailsResponse } from './model/ListImageAutoSyncReposDetailsResponse';
import { ListNamespacesRequest } from './model/ListNamespacesRequest';
import { ListNamespacesResponse } from './model/ListNamespacesResponse';
import { ListQuotasRequest } from './model/ListQuotasRequest';
import { ListQuotasResponse } from './model/ListQuotasResponse';
import { ListRepoDomainsRequest } from './model/ListRepoDomainsRequest';
import { ListRepoDomainsResponse } from './model/ListRepoDomainsResponse';
import { ListReposDetailsRequest } from './model/ListReposDetailsRequest';
import { ListReposDetailsResponse } from './model/ListReposDetailsResponse';
import { ListRepositoryTagsRequest } from './model/ListRepositoryTagsRequest';
import { ListRepositoryTagsResponse } from './model/ListRepositoryTagsResponse';
import { ListRetentionHistoriesRequest } from './model/ListRetentionHistoriesRequest';
import { ListRetentionHistoriesResponse } from './model/ListRetentionHistoriesResponse';
import { ListRetentionsRequest } from './model/ListRetentionsRequest';
import { ListRetentionsResponse } from './model/ListRetentionsResponse';
import { ListSharedReposDetailsRequest } from './model/ListSharedReposDetailsRequest';
import { ListSharedReposDetailsResponse } from './model/ListSharedReposDetailsResponse';
import { ListTriggersDetailsRequest } from './model/ListTriggersDetailsRequest';
import { ListTriggersDetailsResponse } from './model/ListTriggersDetailsResponse';
import { Retention } from './model/Retention';
import { RetentionLog } from './model/RetentionLog';
import { Rule } from './model/Rule';
import { ShowAccessDomainRequest } from './model/ShowAccessDomainRequest';
import { ShowAccessDomainResponse } from './model/ShowAccessDomainResponse';
import { ShowApiVersionRequest } from './model/ShowApiVersionRequest';
import { ShowApiVersionResponse } from './model/ShowApiVersionResponse';
import { ShowNamespace } from './model/ShowNamespace';
import { ShowNamespaceAuthRequest } from './model/ShowNamespaceAuthRequest';
import { ShowNamespaceAuthResponse } from './model/ShowNamespaceAuthResponse';
import { ShowNamespaceRequest } from './model/ShowNamespaceRequest';
import { ShowNamespaceResponse } from './model/ShowNamespaceResponse';
import { ShowQuota } from './model/ShowQuota';
import { ShowRepoDomainsResponse } from './model/ShowRepoDomainsResponse';
import { ShowReposResp } from './model/ShowReposResp';
import { ShowReposTagResp } from './model/ShowReposTagResp';
import { ShowRepositoryRequest } from './model/ShowRepositoryRequest';
import { ShowRepositoryResponse } from './model/ShowRepositoryResponse';
import { ShowRetentionRequest } from './model/ShowRetentionRequest';
import { ShowRetentionResponse } from './model/ShowRetentionResponse';
import { ShowSyncJobRequest } from './model/ShowSyncJobRequest';
import { ShowSyncJobResponse } from './model/ShowSyncJobResponse';
import { ShowTriggerRequest } from './model/ShowTriggerRequest';
import { ShowTriggerResponse } from './model/ShowTriggerResponse';
import { ShowUserRepositoryAuthRequest } from './model/ShowUserRepositoryAuthRequest';
import { ShowUserRepositoryAuthResponse } from './model/ShowUserRepositoryAuthResponse';
import { SyncJob } from './model/SyncJob';
import { SyncRepo } from './model/SyncRepo';
import { TagSelector } from './model/TagSelector';
import { Trigger } from './model/Trigger';
import { TriggerHistories } from './model/TriggerHistories';
import { UpdateNamespaceAuthRequest } from './model/UpdateNamespaceAuthRequest';
import { UpdateNamespaceAuthResponse } from './model/UpdateNamespaceAuthResponse';
import { UpdateRepoDomainsRequest } from './model/UpdateRepoDomainsRequest';
import { UpdateRepoDomainsRequestBody } from './model/UpdateRepoDomainsRequestBody';
import { UpdateRepoDomainsResponse } from './model/UpdateRepoDomainsResponse';
import { UpdateRepoRequest } from './model/UpdateRepoRequest';
import { UpdateRepoRequestBody } from './model/UpdateRepoRequestBody';
import { UpdateRepoResponse } from './model/UpdateRepoResponse';
import { UpdateRetentionRequest } from './model/UpdateRetentionRequest';
import { UpdateRetentionRequestBody } from './model/UpdateRetentionRequestBody';
import { UpdateRetentionResponse } from './model/UpdateRetentionResponse';
import { UpdateTriggerRequest } from './model/UpdateTriggerRequest';
import { UpdateTriggerRequestBody } from './model/UpdateTriggerRequestBody';
import { UpdateTriggerResponse } from './model/UpdateTriggerResponse';
import { UpdateUserRepositoryAuthRequest } from './model/UpdateUserRepositoryAuthRequest';
import { UpdateUserRepositoryAuthResponse } from './model/UpdateUserRepositoryAuthResponse';
import { UserAuth } from './model/UserAuth';
import { VersionDetail } from './model/VersionDetail';

export class SwrClient {
    public static newBuilder(): ClientBuilder<SwrClient> {
        return new ClientBuilder<SwrClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }

    /**
     * 创建镜像自动同步任务
     * @summary 创建镜像自动同步任务
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {CreateImageSyncRepoRequestBody} body 需要创建镜像自动同步任务的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createImageSyncRepo(createImageSyncRepoRequest?: CreateImageSyncRepoRequest): Promise<void> {
        const options = ParamCreater().createImageSyncRepo(createImageSyncRepoRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 手动同步镜像
     * @summary 手动同步镜像
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {CreateManualImageSyncRepoRequestBody} body 需要手动同步镜像的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createManualImageSyncRepo(createManualImageSyncRepoRequest?: CreateManualImageSyncRepoRequest): Promise<Array<string>> {
        const options = ParamCreater().createManualImageSyncRepo(createManualImageSyncRepoRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 创建组织
     * @summary 创建组织
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {CreateNamespaceRequestBody} createNamespaceRequestBody This is a  create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createNamespace(createNamespaceRequest?: CreateNamespaceRequest): Promise<void> {
        const options = ParamCreater().createNamespace(createNamespaceRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 创建组织权限
     * @summary 创建组织权限
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {Array<UserAuth>} createNamespaceAuthRequestBody 创建组织权限需要的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createNamespaceAuth(createNamespaceAuthRequest?: CreateNamespaceAuthRequest): Promise<void> {
        const options = ParamCreater().createNamespaceAuth(createNamespaceAuthRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 在组织下创建镜像仓库。
     * @summary 在组织下创建镜像仓库
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {CreateRepoRequestBody} createRepoRequestBody dfsgdfg
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRepo(createRepoRequest?: CreateRepoRequest): Promise<void> {
        const options = ParamCreater().createRepo(createRepoRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 创建共享帐号。镜像上传后，您可以共享私有镜像给其他帐号，并授予下载该镜像的权限。
     * @summary 创建共享帐号
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {CreateRepoDomainsRequestBody} createRepoDomainsRequestBody 创建共享帐号需要的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRepoDomains(createRepoDomainsRequest?: CreateRepoDomainsRequest): Promise<void> {
        const options = ParamCreater().createRepoDomains(createRepoDomainsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 创建镜像老化规则
     * @summary 创建镜像老化规则
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {CreateRetentionRequestBody} createRetentionRequestBody 需要创建镜像老化规则的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRetention(createRetentionRequest?: CreateRetentionRequest): Promise<CreateRetentionResponse> {
        const options = ParamCreater().createRetention(createRetentionRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 调用该接口，通过获取响应消息头的X-Swr-Dockerlogin的值及响应消息体的host值，可生成临时登录指令。
     * @summary 生成临时登录指令
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} [projectname] 项目名称，缺省值默认为区域名称，例如：cn-north-1。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSecret(createSecretRequest?: CreateSecretRequest): Promise<CreateSecretResponse> {
        const options = ParamCreater().createSecret(createSecretRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 创建触发器
     * @summary 创建触发器
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {CreateTriggerRequestBody} createTriggerRequestBody 需要创建触发器的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTrigger(createTriggerRequest?: CreateTriggerRequest): Promise<void> {
        const options = ParamCreater().createTrigger(createTriggerRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 创建镜像权限
     * @summary 创建镜像权限
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {Array<UserAuth>} createUserRepositoryAuthRequestBody 需要创建镜像权限的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createUserRepositoryAuth(createUserRepositoryAuthRequest?: CreateUserRepositoryAuthRequest): Promise<void> {
        const options = ParamCreater().createUserRepositoryAuth(createUserRepositoryAuthRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 删除镜像自动同步任务
     * @summary 删除镜像自动同步任务
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {DeleteImageSyncRepoRequestBody} body 需要删除镜像自动同步任务的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteImageSyncRepo(deleteImageSyncRepoRequest?: DeleteImageSyncRepoRequest): Promise<void> {
        const options = ParamCreater().deleteImageSyncRepo(deleteImageSyncRepoRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 删除组织权限
     * @summary 删除组织权限
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {Array<string>} deleteNamespaceAuthRequestBody 删除权限需要的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteNamespaceAuth(deleteNamespaceAuthRequest?: DeleteNamespaceAuthRequest): Promise<void> {
        const options = ParamCreater().deleteNamespaceAuth(deleteNamespaceAuthRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 删除组织
     * @summary 删除组织
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteNamespaces(deleteNamespacesRequest?: DeleteNamespacesRequest): Promise<void> {
        const options = ParamCreater().deleteNamespaces(deleteNamespacesRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 删除组织下的镜像仓库。
     * @summary 删除组织下的镜像仓库
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRepo(deleteRepoRequest?: DeleteRepoRequest): Promise<void> {
        const options = ParamCreater().deleteRepo(deleteRepoRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 删除共享帐号
     * @summary 删除共享帐号
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {string} accessDomain 共享租户名
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRepoDomains(deleteRepoDomainsRequest?: DeleteRepoDomainsRequest): Promise<void> {
        const options = ParamCreater().deleteRepoDomains(deleteRepoDomainsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 删除镜像仓库中指定tag的镜像
     * @summary 删除指定tag的镜像
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {string} tag 镜像版本名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRepoTag(deleteRepoTagRequest?: DeleteRepoTagRequest): Promise<void> {
        const options = ParamCreater().deleteRepoTag(deleteRepoTagRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 删除镜像老化规则
     * @summary 删除镜像老化规则
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {number} retentionId 镜像老化规则id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRetention(deleteRetentionRequest?: DeleteRetentionRequest): Promise<void> {
        const options = ParamCreater().deleteRetention(deleteRetentionRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 删除触发器
     * @summary 删除触发器
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {string} trigger 触发器名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTrigger(deleteTriggerRequest?: DeleteTriggerRequest): Promise<void> {
        const options = ParamCreater().deleteTrigger(deleteTriggerRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 删除镜像权限
     * @summary 删除镜像权限
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {Array<string>} deleteUserRepositoryAuthRequestBody 用户ID，需从华为云IAM服务获取。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteUserRepositoryAuth(deleteUserRepositoryAuthRequest?: DeleteUserRepositoryAuthRequest): Promise<void> {
        const options = ParamCreater().deleteUserRepositoryAuth(deleteUserRepositoryAuthRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 获取镜像自动同步任务列表
     * @summary 获取镜像自动同步任务列表
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listImageAutoSyncReposDetails(listImageAutoSyncReposDetailsRequest?: ListImageAutoSyncReposDetailsRequest): Promise<Array<SyncRepo>> {
        const options = ParamCreater().listImageAutoSyncReposDetails(listImageAutoSyncReposDetailsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 查询组织列表
     * @summary 查询组织列表
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} [namespace] 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNamespaces(listNamespacesRequest?: ListNamespacesRequest): Promise<ListNamespacesResponse> {
        const options = ParamCreater().listNamespaces(listNamespacesRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 获取配额信息
     * @summary 获取配额信息
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listQuotas(listQuotasRequest?: ListQuotasRequest): Promise<ListQuotasResponse> {
        const options = ParamCreater().listQuotas(listQuotasRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 获取共享帐号列表
     * @summary 获取共享帐号列表
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRepoDomains(listRepoDomainsRequest?: ListRepoDomainsRequest): Promise<Array<ShowRepoDomainsResponse>> {
        const options = ParamCreater().listRepoDomains(listRepoDomainsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 查询镜像仓库列表
     * @summary 查询镜像仓库列表
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} [namespace] 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} [name] 镜像仓库名称
     * @param {string} [category] 镜像仓库分类，可设置为app_server, linux, framework_app, database, lang, other, windows, arm。
     * @param {string} [filter] 应填写 center::{center}|limit::{limit}|offset::{offset}|order_column::{order_column}|order_type::{order_type} , 其中{center}为self或thirdparty，自己的镜像或第三方镜像，默认值为self,{limit}为返回条数,{offset}为起始索引, {order_column}为按列排序，可设置为name、updated_time、tag_count,{order_type}为排序类型，可设置为desc（降序）、asc（升序）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listReposDetails(listReposDetailsRequest?: ListReposDetailsRequest): Promise<Array<ShowReposResp>> {
        const options = ParamCreater().listReposDetails(listReposDetailsRequest);
        options['responseHeaders'] = ['Content-Range'];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 查询镜像tag列表
     * @summary 查询镜像tag列表
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {string} [offset] 起始索引。**注意：offset和limit参数需要配套使用** 
     * @param {string} [limit] 返回条数。**注意：offset和limit参数需要配套使用* 
     * @param {string} [orderColumn] 按列排序，可设置为updated_at（按更新时间排序） 
     * @param {'desc' | 'asc'} [orderType] 排序类型，可设置为desc（降序）、asc（升序） 
     * @param {string} [tag] 镜像版本名
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRepositoryTags(listRepositoryTagsRequest?: ListRepositoryTagsRequest): Promise<Array<ShowReposTagResp>> {
        const options = ParamCreater().listRepositoryTags(listRepositoryTagsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 获取镜像老化记录
     * @summary 获取镜像老化记录
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {string} [offset] 起始索引。**注意：offset和limit参数需要配套使用** 
     * @param {string} [limit] 返回条数。**注意：offset和limit参数需要配套使用** 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRetentionHistories(listRetentionHistoriesRequest?: ListRetentionHistoriesRequest): Promise<ListRetentionHistoriesResponse> {
        const options = ParamCreater().listRetentionHistories(listRetentionHistoriesRequest);
        options['responseHeaders'] = ['Content-Range'];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 获取镜像老化规则列表
     * @summary 获取镜像老化规则列表
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRetentions(listRetentionsRequest?: ListRetentionsRequest): Promise<Array<Retention>> {
        const options = ParamCreater().listRetentions(listRetentionsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 查询共享镜像列表
     * @summary 查询共享镜像列表
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} [filter] 应填写 center::{center}|limit::{limit}|offset::{offset}|order_column::{order_column}|order_type::{order_type} ,其中{limit}为返回条数,{offset}为起始索引, {order_column}为按列排序，可设置为name、updated_time、tag_count,{order_type}为排序类型，可设置为desc（降序）、asc（升序）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSharedReposDetails(listSharedReposDetailsRequest?: ListSharedReposDetailsRequest): Promise<Array<ShowReposResp>> {
        const options = ParamCreater().listSharedReposDetails(listSharedReposDetailsRequest);
        options['responseHeaders'] = ['Content-Range'];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 获取镜像仓库下的触发器列表
     * @summary 获取镜像仓库下的触发器列表
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTriggersDetails(listTriggersDetailsRequest?: ListTriggersDetailsRequest): Promise<Array<Trigger>> {
        const options = ParamCreater().listTriggersDetails(listTriggersDetailsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 判断共享租户是否存在
     * @summary 判断共享帐号是否存在
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {string} accessDomain 共享帐号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAccessDomain(showAccessDomainRequest?: ShowAccessDomainRequest): Promise<ShowAccessDomainResponse> {
        const options = ParamCreater().showAccessDomain(showAccessDomainRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 获取组织详情
     * @summary 获取组织详情
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showNamespace(showNamespaceRequest?: ShowNamespaceRequest): Promise<ShowNamespaceResponse> {
        const options = ParamCreater().showNamespace(showNamespaceRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 查询组织权限
     * @summary 查询组织权限
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showNamespaceAuth(showNamespaceAuthRequest?: ShowNamespaceAuthRequest): Promise<ShowNamespaceAuthResponse> {
        const options = ParamCreater().showNamespaceAuth(showNamespaceAuthRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 查询镜像仓库概要信息
     * @summary 查询镜像仓库概要信息
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRepository(showRepositoryRequest?: ShowRepositoryRequest): Promise<ShowRepositoryResponse> {
        const options = ParamCreater().showRepository(showRepositoryRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 获取镜像老化规则记录
     * @summary 获取镜像老化规则记录
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {number} retentionId 镜像老化规则id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRetention(showRetentionRequest?: ShowRetentionRequest): Promise<ShowRetentionResponse> {
        const options = ParamCreater().showRetention(showRetentionRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 获取镜像同步任务信息
     * @summary 获取镜像同步任务信息
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {string} filter 应填写 limit::{limit}|offset::{offset}|order::{order} ,其中{limit}为返回条数,{offset}为起始索引,{order}为排序类型，可设置为desc（降序）、asc（升序）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSyncJob(showSyncJobRequest?: ShowSyncJobRequest): Promise<Array<SyncJob>> {
        const options = ParamCreater().showSyncJob(showSyncJobRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 获取触发器详情
     * @summary 获取触发器详情
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {string} trigger 触发器名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTrigger(showTriggerRequest?: ShowTriggerRequest): Promise<ShowTriggerResponse> {
        const options = ParamCreater().showTrigger(showTriggerRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 查询镜像权限
     * @summary 查询镜像权限
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showUserRepositoryAuth(showUserRepositoryAuthRequest?: ShowUserRepositoryAuthRequest): Promise<ShowUserRepositoryAuthResponse> {
        const options = ParamCreater().showUserRepositoryAuth(showUserRepositoryAuthRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 更新组织权限
     * @summary 更新组织权限
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {Array<UserAuth>} updateNamespaceAuthRequestBody 更新组织权限需要的权限
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateNamespaceAuth(updateNamespaceAuthRequest?: UpdateNamespaceAuthRequest): Promise<void> {
        const options = ParamCreater().updateNamespaceAuth(updateNamespaceAuthRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 更新租户命名空间下的镜像概要信息，包括镜像类型、是否公有、描述信息
     * @summary 更新镜像仓库的概要信息
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称。小写字母或数字开头，后面跟小写字母、数字、小数点、斜杠、下划线或中划线（其中下划线最多允许连续两个，小数点、斜杠、下划线、中划线不能直接相连），小写字母或数字结尾，1-128个字符。
     * @param {UpdateRepoRequestBody} updateRepoRequestBody dfsgdfg
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRepo(updateRepoRequest?: UpdateRepoRequest): Promise<void> {
        const options = ParamCreater().updateRepo(updateRepoRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 更新共享帐号
     * @summary 更新共享帐号
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {string} accessDomain 共享帐号
     * @param {UpdateRepoDomainsRequestBody} updateRepoDomainsRequestBody 更新共享帐号需要的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRepoDomains(updateRepoDomainsRequest?: UpdateRepoDomainsRequest): Promise<void> {
        const options = ParamCreater().updateRepoDomains(updateRepoDomainsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 修改镜像老化规则
     * @summary 修改镜像老化规则
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {number} retentionId 镜像老化规则id
     * @param {UpdateRetentionRequestBody} [updateRetentionRequestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRetention(updateRetentionRequest?: UpdateRetentionRequest): Promise<void> {
        const options = ParamCreater().updateRetention(updateRetentionRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 更新触发器配置
     * @summary 更新触发器配置
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {string} trigger 触发器名称
     * @param {UpdateTriggerRequestBody} body 更新触发器配置的请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTrigger(updateTriggerRequest?: UpdateTriggerRequest): Promise<void> {
        const options = ParamCreater().updateTrigger(updateTriggerRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 更新镜像权限
     * @summary 更新镜像权限
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {Array<UserAuth>} updateRepositoryAuthRequestBody 需要创建镜像权限的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateUserRepositoryAuth(updateUserRepositoryAuthRequest?: UpdateUserRepositoryAuthRequest): Promise<void> {
        const options = ParamCreater().updateUserRepositoryAuth(updateUserRepositoryAuthRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 查询所有API版本信息
     * @summary 查询所有API版本信息
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApiVersions(listApiVersionsRequest?: ListApiVersionsRequest): Promise<ListApiVersionsResponse> {
        const options = ParamCreater().listApiVersions(listApiVersionsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 查询指定API版本信息
     * @summary 查询指定API版本信息
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} apiVersion API版本号。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showApiVersion(showApiVersionRequest?: ShowApiVersionRequest): Promise<ShowApiVersionResponse> {
        const options = ParamCreater().showApiVersion(showApiVersionRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 创建镜像自动同步任务
         */
        createImageSyncRepo(createImageSyncRepoRequest?: CreateImageSyncRepoRequest) {
            const options = {
                method: "POST",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/sync_repo",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let contentType;
            let namespace;
            let repository;

            if (createImageSyncRepoRequest !== null && createImageSyncRepoRequest !== undefined) {
                if (createImageSyncRepoRequest instanceof CreateImageSyncRepoRequest) {
                    contentType = createImageSyncRepoRequest.contentType;
                    namespace = createImageSyncRepoRequest.namespace;
                    repository = createImageSyncRepoRequest.repository;
                    body = createImageSyncRepoRequest.body
                } else {
                    contentType = createImageSyncRepoRequest['Content-Type'];
                    namespace = createImageSyncRepoRequest['namespace'];
                    repository = createImageSyncRepoRequest['repository'];
                    body = createImageSyncRepoRequest['body'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling createImageSyncRepo.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling createImageSyncRepo.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'namespace': namespace,'repository': repository, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 手动同步镜像
         */
        createManualImageSyncRepo(createManualImageSyncRepoRequest?: CreateManualImageSyncRepoRequest) {
            const options = {
                method: "POST",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/sync_images",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let contentType;
            let namespace;
            let repository;

            if (createManualImageSyncRepoRequest !== null && createManualImageSyncRepoRequest !== undefined) {
                if (createManualImageSyncRepoRequest instanceof CreateManualImageSyncRepoRequest) {
                    contentType = createManualImageSyncRepoRequest.contentType;
                    namespace = createManualImageSyncRepoRequest.namespace;
                    repository = createManualImageSyncRepoRequest.repository;
                    body = createManualImageSyncRepoRequest.body
                } else {
                    contentType = createManualImageSyncRepoRequest['Content-Type'];
                    namespace = createManualImageSyncRepoRequest['namespace'];
                    repository = createManualImageSyncRepoRequest['repository'];
                    body = createManualImageSyncRepoRequest['body'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling createManualImageSyncRepo.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling createManualImageSyncRepo.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'namespace': namespace,'repository': repository, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建组织
         */
        createNamespace(createNamespaceRequest?: CreateNamespaceRequest) {
            const options = {
                method: "POST",
                url: "/v2/manage/namespaces",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let contentType;

            if (createNamespaceRequest !== null && createNamespaceRequest !== undefined) {
                if (createNamespaceRequest instanceof CreateNamespaceRequest) {
                    contentType = createNamespaceRequest.contentType;
                    body = createNamespaceRequest.body
                } else {
                    contentType = createNamespaceRequest['Content-Type'];
                    body = createNamespaceRequest['body'];
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
         * 创建组织权限
         */
        createNamespaceAuth(createNamespaceAuthRequest?: CreateNamespaceAuthRequest) {
            const options = {
                method: "POST",
                url: "/v2/manage/namespaces/{namespace}/access",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let contentType;
            let namespace;

            if (createNamespaceAuthRequest !== null && createNamespaceAuthRequest !== undefined) {
                if (createNamespaceAuthRequest instanceof CreateNamespaceAuthRequest) {
                    contentType = createNamespaceAuthRequest.contentType;
                    namespace = createNamespaceAuthRequest.namespace;
                    body = createNamespaceAuthRequest.body
                } else {
                    contentType = createNamespaceAuthRequest['Content-Type'];
                    namespace = createNamespaceAuthRequest['namespace'];
                    body = createNamespaceAuthRequest['body'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling createNamespaceAuth.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'namespace': namespace, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在组织下创建镜像仓库。
         */
        createRepo(createRepoRequest?: CreateRepoRequest) {
            const options = {
                method: "POST",
                url: "/v2/manage/namespaces/{namespace}/repos",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let contentType;
            let namespace;

            if (createRepoRequest !== null && createRepoRequest !== undefined) {
                if (createRepoRequest instanceof CreateRepoRequest) {
                    contentType = createRepoRequest.contentType;
                    namespace = createRepoRequest.namespace;
                    body = createRepoRequest.body
                } else {
                    contentType = createRepoRequest['Content-Type'];
                    namespace = createRepoRequest['namespace'];
                    body = createRepoRequest['body'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling createRepo.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'namespace': namespace, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建共享帐号。镜像上传后，您可以共享私有镜像给其他帐号，并授予下载该镜像的权限。
         */
        createRepoDomains(createRepoDomainsRequest?: CreateRepoDomainsRequest) {
            const options = {
                method: "POST",
                url: "/v2/manage/namespaces/{namespace}/repositories/{repository}/access-domains",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let contentType;
            let namespace;
            let repository;

            if (createRepoDomainsRequest !== null && createRepoDomainsRequest !== undefined) {
                if (createRepoDomainsRequest instanceof CreateRepoDomainsRequest) {
                    contentType = createRepoDomainsRequest.contentType;
                    namespace = createRepoDomainsRequest.namespace;
                    repository = createRepoDomainsRequest.repository;
                    body = createRepoDomainsRequest.body
                } else {
                    contentType = createRepoDomainsRequest['Content-Type'];
                    namespace = createRepoDomainsRequest['namespace'];
                    repository = createRepoDomainsRequest['repository'];
                    body = createRepoDomainsRequest['body'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling createRepoDomains.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling createRepoDomains.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'namespace': namespace,'repository': repository, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建镜像老化规则
         */
        createRetention(createRetentionRequest?: CreateRetentionRequest) {
            const options = {
                method: "POST",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/retentions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let contentType;
            let namespace;
            let repository;

            if (createRetentionRequest !== null && createRetentionRequest !== undefined) {
                if (createRetentionRequest instanceof CreateRetentionRequest) {
                    contentType = createRetentionRequest.contentType;
                    namespace = createRetentionRequest.namespace;
                    repository = createRetentionRequest.repository;
                    body = createRetentionRequest.body
                } else {
                    contentType = createRetentionRequest['Content-Type'];
                    namespace = createRetentionRequest['namespace'];
                    repository = createRetentionRequest['repository'];
                    body = createRetentionRequest['body'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling createRetention.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling createRetention.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'namespace': namespace,'repository': repository, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 调用该接口，通过获取响应消息头的X-Swr-Dockerlogin的值及响应消息体的host值，可生成临时登录指令。
         */
        createSecret(createSecretRequest?: CreateSecretRequest) {
            const options = {
                method: "POST",
                url: "/v2/manage/utils/secret",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let contentType;
            let projectname;

            if (createSecretRequest !== null && createSecretRequest !== undefined) {
                if (createSecretRequest instanceof CreateSecretRequest) {
                    contentType = createSecretRequest.contentType;
                    projectname = createSecretRequest.projectname;
                } else {
                    contentType = createSecretRequest['Content-Type'];
                    projectname = createSecretRequest['projectname'];
                }
            }

        
            if (projectname !== null && projectname !== undefined) {
                localVarQueryParameter['projectname'] = projectname;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建触发器
         */
        createTrigger(createTriggerRequest?: CreateTriggerRequest) {
            const options = {
                method: "POST",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/triggers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let contentType;
            let namespace;
            let repository;

            if (createTriggerRequest !== null && createTriggerRequest !== undefined) {
                if (createTriggerRequest instanceof CreateTriggerRequest) {
                    contentType = createTriggerRequest.contentType;
                    namespace = createTriggerRequest.namespace;
                    repository = createTriggerRequest.repository;
                    body = createTriggerRequest.body
                } else {
                    contentType = createTriggerRequest['Content-Type'];
                    namespace = createTriggerRequest['namespace'];
                    repository = createTriggerRequest['repository'];
                    body = createTriggerRequest['body'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling createTrigger.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling createTrigger.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'namespace': namespace,'repository': repository, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建镜像权限
         */
        createUserRepositoryAuth(createUserRepositoryAuthRequest?: CreateUserRepositoryAuthRequest) {
            const options = {
                method: "POST",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/access",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let contentType;
            let namespace;
            let repository;

            if (createUserRepositoryAuthRequest !== null && createUserRepositoryAuthRequest !== undefined) {
                if (createUserRepositoryAuthRequest instanceof CreateUserRepositoryAuthRequest) {
                    contentType = createUserRepositoryAuthRequest.contentType;
                    namespace = createUserRepositoryAuthRequest.namespace;
                    repository = createUserRepositoryAuthRequest.repository;
                    body = createUserRepositoryAuthRequest.body
                } else {
                    contentType = createUserRepositoryAuthRequest['Content-Type'];
                    namespace = createUserRepositoryAuthRequest['namespace'];
                    repository = createUserRepositoryAuthRequest['repository'];
                    body = createUserRepositoryAuthRequest['body'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling createUserRepositoryAuth.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling createUserRepositoryAuth.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'namespace': namespace,'repository': repository, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除镜像自动同步任务
         */
        deleteImageSyncRepo(deleteImageSyncRepoRequest?: DeleteImageSyncRepoRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/sync_repo",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let contentType;
            let namespace;
            let repository;

            if (deleteImageSyncRepoRequest !== null && deleteImageSyncRepoRequest !== undefined) {
                if (deleteImageSyncRepoRequest instanceof DeleteImageSyncRepoRequest) {
                    contentType = deleteImageSyncRepoRequest.contentType;
                    namespace = deleteImageSyncRepoRequest.namespace;
                    repository = deleteImageSyncRepoRequest.repository;
                    body = deleteImageSyncRepoRequest.body
                } else {
                    contentType = deleteImageSyncRepoRequest['Content-Type'];
                    namespace = deleteImageSyncRepoRequest['namespace'];
                    repository = deleteImageSyncRepoRequest['repository'];
                    body = deleteImageSyncRepoRequest['body'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling deleteImageSyncRepo.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling deleteImageSyncRepo.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'namespace': namespace,'repository': repository, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除组织权限
         */
        deleteNamespaceAuth(deleteNamespaceAuthRequest?: DeleteNamespaceAuthRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/manage/namespaces/{namespace}/access",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let contentType;
            let namespace;

            if (deleteNamespaceAuthRequest !== null && deleteNamespaceAuthRequest !== undefined) {
                if (deleteNamespaceAuthRequest instanceof DeleteNamespaceAuthRequest) {
                    contentType = deleteNamespaceAuthRequest.contentType;
                    namespace = deleteNamespaceAuthRequest.namespace;
                    body = deleteNamespaceAuthRequest.body
                } else {
                    contentType = deleteNamespaceAuthRequest['Content-Type'];
                    namespace = deleteNamespaceAuthRequest['namespace'];
                    body = deleteNamespaceAuthRequest['body'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling deleteNamespaceAuth.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'namespace': namespace, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除组织
         */
        deleteNamespaces(deleteNamespacesRequest?: DeleteNamespacesRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/manage/namespaces/{namespace}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let contentType;
            let namespace;

            if (deleteNamespacesRequest !== null && deleteNamespacesRequest !== undefined) {
                if (deleteNamespacesRequest instanceof DeleteNamespacesRequest) {
                    contentType = deleteNamespacesRequest.contentType;
                    namespace = deleteNamespacesRequest.namespace;
                } else {
                    contentType = deleteNamespacesRequest['Content-Type'];
                    namespace = deleteNamespacesRequest['namespace'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling deleteNamespaces.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'namespace': namespace, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除组织下的镜像仓库。
         */
        deleteRepo(deleteRepoRequest?: DeleteRepoRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let contentType;
            let namespace;
            let repository;

            if (deleteRepoRequest !== null && deleteRepoRequest !== undefined) {
                if (deleteRepoRequest instanceof DeleteRepoRequest) {
                    contentType = deleteRepoRequest.contentType;
                    namespace = deleteRepoRequest.namespace;
                    repository = deleteRepoRequest.repository;
                } else {
                    contentType = deleteRepoRequest['Content-Type'];
                    namespace = deleteRepoRequest['namespace'];
                    repository = deleteRepoRequest['repository'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling deleteRepo.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling deleteRepo.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'namespace': namespace,'repository': repository, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除共享帐号
         */
        deleteRepoDomains(deleteRepoDomainsRequest?: DeleteRepoDomainsRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/manage/namespaces/{namespace}/repositories/{repository}/access-domains/{access_domain}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let contentType;
            let namespace;
            let repository;
            let accessDomain;

            if (deleteRepoDomainsRequest !== null && deleteRepoDomainsRequest !== undefined) {
                if (deleteRepoDomainsRequest instanceof DeleteRepoDomainsRequest) {
                    contentType = deleteRepoDomainsRequest.contentType;
                    namespace = deleteRepoDomainsRequest.namespace;
                    repository = deleteRepoDomainsRequest.repository;
                    accessDomain = deleteRepoDomainsRequest.accessDomain;
                } else {
                    contentType = deleteRepoDomainsRequest['Content-Type'];
                    namespace = deleteRepoDomainsRequest['namespace'];
                    repository = deleteRepoDomainsRequest['repository'];
                    accessDomain = deleteRepoDomainsRequest['access_domain'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling deleteRepoDomains.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling deleteRepoDomains.');
            }
            if (accessDomain === null || accessDomain === undefined) {
            throw new RequiredError('accessDomain','Required parameter accessDomain was null or undefined when calling deleteRepoDomains.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'namespace': namespace,'repository': repository,'access_domain': accessDomain, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除镜像仓库中指定tag的镜像
         */
        deleteRepoTag(deleteRepoTagRequest?: DeleteRepoTagRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/tags/{tag}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let contentType;
            let namespace;
            let repository;
            let tag;

            if (deleteRepoTagRequest !== null && deleteRepoTagRequest !== undefined) {
                if (deleteRepoTagRequest instanceof DeleteRepoTagRequest) {
                    contentType = deleteRepoTagRequest.contentType;
                    namespace = deleteRepoTagRequest.namespace;
                    repository = deleteRepoTagRequest.repository;
                    tag = deleteRepoTagRequest.tag;
                } else {
                    contentType = deleteRepoTagRequest['Content-Type'];
                    namespace = deleteRepoTagRequest['namespace'];
                    repository = deleteRepoTagRequest['repository'];
                    tag = deleteRepoTagRequest['tag'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling deleteRepoTag.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling deleteRepoTag.');
            }
            if (tag === null || tag === undefined) {
            throw new RequiredError('tag','Required parameter tag was null or undefined when calling deleteRepoTag.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'namespace': namespace,'repository': repository,'tag': tag, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除镜像老化规则
         */
        deleteRetention(deleteRetentionRequest?: DeleteRetentionRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/retentions/{retention_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let contentType;
            let namespace;
            let repository;
            let retentionId;

            if (deleteRetentionRequest !== null && deleteRetentionRequest !== undefined) {
                if (deleteRetentionRequest instanceof DeleteRetentionRequest) {
                    contentType = deleteRetentionRequest.contentType;
                    namespace = deleteRetentionRequest.namespace;
                    repository = deleteRetentionRequest.repository;
                    retentionId = deleteRetentionRequest.retentionId;
                } else {
                    contentType = deleteRetentionRequest['Content-Type'];
                    namespace = deleteRetentionRequest['namespace'];
                    repository = deleteRetentionRequest['repository'];
                    retentionId = deleteRetentionRequest['retention_id'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling deleteRetention.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling deleteRetention.');
            }
            if (retentionId === null || retentionId === undefined) {
            throw new RequiredError('retentionId','Required parameter retentionId was null or undefined when calling deleteRetention.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'namespace': namespace,'repository': repository,'retention_id': retentionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除触发器
         */
        deleteTrigger(deleteTriggerRequest?: DeleteTriggerRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/triggers/{trigger}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let contentType;
            let namespace;
            let repository;
            let trigger;

            if (deleteTriggerRequest !== null && deleteTriggerRequest !== undefined) {
                if (deleteTriggerRequest instanceof DeleteTriggerRequest) {
                    contentType = deleteTriggerRequest.contentType;
                    namespace = deleteTriggerRequest.namespace;
                    repository = deleteTriggerRequest.repository;
                    trigger = deleteTriggerRequest.trigger;
                } else {
                    contentType = deleteTriggerRequest['Content-Type'];
                    namespace = deleteTriggerRequest['namespace'];
                    repository = deleteTriggerRequest['repository'];
                    trigger = deleteTriggerRequest['trigger'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling deleteTrigger.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling deleteTrigger.');
            }
            if (trigger === null || trigger === undefined) {
            throw new RequiredError('trigger','Required parameter trigger was null or undefined when calling deleteTrigger.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'namespace': namespace,'repository': repository,'trigger': trigger, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除镜像权限
         */
        deleteUserRepositoryAuth(deleteUserRepositoryAuthRequest?: DeleteUserRepositoryAuthRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/access",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let contentType;
            let namespace;
            let repository;

            if (deleteUserRepositoryAuthRequest !== null && deleteUserRepositoryAuthRequest !== undefined) {
                if (deleteUserRepositoryAuthRequest instanceof DeleteUserRepositoryAuthRequest) {
                    contentType = deleteUserRepositoryAuthRequest.contentType;
                    namespace = deleteUserRepositoryAuthRequest.namespace;
                    repository = deleteUserRepositoryAuthRequest.repository;
                    body = deleteUserRepositoryAuthRequest.body
                } else {
                    contentType = deleteUserRepositoryAuthRequest['Content-Type'];
                    namespace = deleteUserRepositoryAuthRequest['namespace'];
                    repository = deleteUserRepositoryAuthRequest['repository'];
                    body = deleteUserRepositoryAuthRequest['body'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling deleteUserRepositoryAuth.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling deleteUserRepositoryAuth.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'namespace': namespace,'repository': repository, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取镜像自动同步任务列表
         */
        listImageAutoSyncReposDetails(listImageAutoSyncReposDetailsRequest?: ListImageAutoSyncReposDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/sync_repo",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let contentType;
            let namespace;
            let repository;

            if (listImageAutoSyncReposDetailsRequest !== null && listImageAutoSyncReposDetailsRequest !== undefined) {
                if (listImageAutoSyncReposDetailsRequest instanceof ListImageAutoSyncReposDetailsRequest) {
                    contentType = listImageAutoSyncReposDetailsRequest.contentType;
                    namespace = listImageAutoSyncReposDetailsRequest.namespace;
                    repository = listImageAutoSyncReposDetailsRequest.repository;
                } else {
                    contentType = listImageAutoSyncReposDetailsRequest['Content-Type'];
                    namespace = listImageAutoSyncReposDetailsRequest['namespace'];
                    repository = listImageAutoSyncReposDetailsRequest['repository'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling listImageAutoSyncReposDetails.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling listImageAutoSyncReposDetails.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'namespace': namespace,'repository': repository, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询组织列表
         */
        listNamespaces(listNamespacesRequest?: ListNamespacesRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let contentType;
            let namespace;

            if (listNamespacesRequest !== null && listNamespacesRequest !== undefined) {
                if (listNamespacesRequest instanceof ListNamespacesRequest) {
                    contentType = listNamespacesRequest.contentType;
                    namespace = listNamespacesRequest.namespace;
                } else {
                    contentType = listNamespacesRequest['Content-Type'];
                    namespace = listNamespacesRequest['namespace'];
                }
            }

        
            if (namespace !== null && namespace !== undefined) {
                localVarQueryParameter['namespace'] = namespace;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取配额信息
         */
        listQuotas(listQuotasRequest?: ListQuotasRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/projects/{project_id}/quotas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let contentType;

            if (listQuotasRequest !== null && listQuotasRequest !== undefined) {
                if (listQuotasRequest instanceof ListQuotasRequest) {
                    contentType = listQuotasRequest.contentType;
                } else {
                    contentType = listQuotasRequest['Content-Type'];
                }
            }

        
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取共享帐号列表
         */
        listRepoDomains(listRepoDomainsRequest?: ListRepoDomainsRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces/{namespace}/repositories/{repository}/access-domains",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let contentType;
            let namespace;
            let repository;

            if (listRepoDomainsRequest !== null && listRepoDomainsRequest !== undefined) {
                if (listRepoDomainsRequest instanceof ListRepoDomainsRequest) {
                    contentType = listRepoDomainsRequest.contentType;
                    namespace = listRepoDomainsRequest.namespace;
                    repository = listRepoDomainsRequest.repository;
                } else {
                    contentType = listRepoDomainsRequest['Content-Type'];
                    namespace = listRepoDomainsRequest['namespace'];
                    repository = listRepoDomainsRequest['repository'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling listRepoDomains.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling listRepoDomains.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'namespace': namespace,'repository': repository, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询镜像仓库列表
         */
        listReposDetails(listReposDetailsRequest?: ListReposDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/repos",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let contentType;
            let namespace;
            let name;
            let category;
            let filter;

            if (listReposDetailsRequest !== null && listReposDetailsRequest !== undefined) {
                if (listReposDetailsRequest instanceof ListReposDetailsRequest) {
                    contentType = listReposDetailsRequest.contentType;
                    namespace = listReposDetailsRequest.namespace;
                    name = listReposDetailsRequest.name;
                    category = listReposDetailsRequest.category;
                    filter = listReposDetailsRequest.filter;
                } else {
                    contentType = listReposDetailsRequest['Content-Type'];
                    namespace = listReposDetailsRequest['namespace'];
                    name = listReposDetailsRequest['name'];
                    category = listReposDetailsRequest['category'];
                    filter = listReposDetailsRequest['filter'];
                }
            }

        
            if (namespace !== null && namespace !== undefined) {
                localVarQueryParameter['namespace'] = namespace;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (category !== null && category !== undefined) {
                localVarQueryParameter['category'] = category;
            }
            if (filter !== null && filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询镜像tag列表
         */
        listRepositoryTags(listRepositoryTagsRequest?: ListRepositoryTagsRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let contentType;
            let namespace;
            let repository;
            let offset;
            let limit;
            let orderColumn;
            let orderType;
            let tag;

            if (listRepositoryTagsRequest !== null && listRepositoryTagsRequest !== undefined) {
                if (listRepositoryTagsRequest instanceof ListRepositoryTagsRequest) {
                    contentType = listRepositoryTagsRequest.contentType;
                    namespace = listRepositoryTagsRequest.namespace;
                    repository = listRepositoryTagsRequest.repository;
                    offset = listRepositoryTagsRequest.offset;
                    limit = listRepositoryTagsRequest.limit;
                    orderColumn = listRepositoryTagsRequest.orderColumn;
                    orderType = listRepositoryTagsRequest.orderType;
                    tag = listRepositoryTagsRequest.tag;
                } else {
                    contentType = listRepositoryTagsRequest['Content-Type'];
                    namespace = listRepositoryTagsRequest['namespace'];
                    repository = listRepositoryTagsRequest['repository'];
                    offset = listRepositoryTagsRequest['offset'];
                    limit = listRepositoryTagsRequest['limit'];
                    orderColumn = listRepositoryTagsRequest['order_column'];
                    orderType = listRepositoryTagsRequest['order_type'];
                    tag = listRepositoryTagsRequest['tag'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling listRepositoryTags.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling listRepositoryTags.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (orderColumn !== null && orderColumn !== undefined) {
                localVarQueryParameter['order_column'] = orderColumn;
            }
            if (orderType !== null && orderType !== undefined) {
                localVarQueryParameter['order_type'] = orderType;
            }
            if (tag !== null && tag !== undefined) {
                localVarQueryParameter['tag'] = tag;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'namespace': namespace,'repository': repository, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取镜像老化记录
         */
        listRetentionHistories(listRetentionHistoriesRequest?: ListRetentionHistoriesRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/retentions/histories",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let contentType;
            let namespace;
            let repository;
            let offset;
            let limit;

            if (listRetentionHistoriesRequest !== null && listRetentionHistoriesRequest !== undefined) {
                if (listRetentionHistoriesRequest instanceof ListRetentionHistoriesRequest) {
                    contentType = listRetentionHistoriesRequest.contentType;
                    namespace = listRetentionHistoriesRequest.namespace;
                    repository = listRetentionHistoriesRequest.repository;
                    offset = listRetentionHistoriesRequest.offset;
                    limit = listRetentionHistoriesRequest.limit;
                } else {
                    contentType = listRetentionHistoriesRequest['Content-Type'];
                    namespace = listRetentionHistoriesRequest['namespace'];
                    repository = listRetentionHistoriesRequest['repository'];
                    offset = listRetentionHistoriesRequest['offset'];
                    limit = listRetentionHistoriesRequest['limit'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling listRetentionHistories.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling listRetentionHistories.');
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
            options.pathParams = { 'namespace': namespace,'repository': repository, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取镜像老化规则列表
         */
        listRetentions(listRetentionsRequest?: ListRetentionsRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/retentions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let contentType;
            let namespace;
            let repository;

            if (listRetentionsRequest !== null && listRetentionsRequest !== undefined) {
                if (listRetentionsRequest instanceof ListRetentionsRequest) {
                    contentType = listRetentionsRequest.contentType;
                    namespace = listRetentionsRequest.namespace;
                    repository = listRetentionsRequest.repository;
                } else {
                    contentType = listRetentionsRequest['Content-Type'];
                    namespace = listRetentionsRequest['namespace'];
                    repository = listRetentionsRequest['repository'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling listRetentions.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling listRetentions.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'namespace': namespace,'repository': repository, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询共享镜像列表
         */
        listSharedReposDetails(listSharedReposDetailsRequest?: ListSharedReposDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/shared-repositories",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let contentType;
            let filter;

            if (listSharedReposDetailsRequest !== null && listSharedReposDetailsRequest !== undefined) {
                if (listSharedReposDetailsRequest instanceof ListSharedReposDetailsRequest) {
                    contentType = listSharedReposDetailsRequest.contentType;
                    filter = listSharedReposDetailsRequest.filter;
                } else {
                    contentType = listSharedReposDetailsRequest['Content-Type'];
                    filter = listSharedReposDetailsRequest['filter'];
                }
            }

        
            if (filter !== null && filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取镜像仓库下的触发器列表
         */
        listTriggersDetails(listTriggersDetailsRequest?: ListTriggersDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/triggers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let contentType;
            let namespace;
            let repository;

            if (listTriggersDetailsRequest !== null && listTriggersDetailsRequest !== undefined) {
                if (listTriggersDetailsRequest instanceof ListTriggersDetailsRequest) {
                    contentType = listTriggersDetailsRequest.contentType;
                    namespace = listTriggersDetailsRequest.namespace;
                    repository = listTriggersDetailsRequest.repository;
                } else {
                    contentType = listTriggersDetailsRequest['Content-Type'];
                    namespace = listTriggersDetailsRequest['namespace'];
                    repository = listTriggersDetailsRequest['repository'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling listTriggersDetails.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling listTriggersDetails.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'namespace': namespace,'repository': repository, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 判断共享租户是否存在
         */
        showAccessDomain(showAccessDomainRequest?: ShowAccessDomainRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces/{namespace}/repositories/{repository}/access-domains/{access_domain}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let contentType;
            let namespace;
            let repository;
            let accessDomain;

            if (showAccessDomainRequest !== null && showAccessDomainRequest !== undefined) {
                if (showAccessDomainRequest instanceof ShowAccessDomainRequest) {
                    contentType = showAccessDomainRequest.contentType;
                    namespace = showAccessDomainRequest.namespace;
                    repository = showAccessDomainRequest.repository;
                    accessDomain = showAccessDomainRequest.accessDomain;
                } else {
                    contentType = showAccessDomainRequest['Content-Type'];
                    namespace = showAccessDomainRequest['namespace'];
                    repository = showAccessDomainRequest['repository'];
                    accessDomain = showAccessDomainRequest['access_domain'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling showAccessDomain.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling showAccessDomain.');
            }
            if (accessDomain === null || accessDomain === undefined) {
            throw new RequiredError('accessDomain','Required parameter accessDomain was null or undefined when calling showAccessDomain.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'namespace': namespace,'repository': repository,'access_domain': accessDomain, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取组织详情
         */
        showNamespace(showNamespaceRequest?: ShowNamespaceRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces/{namespace}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let contentType;
            let namespace;

            if (showNamespaceRequest !== null && showNamespaceRequest !== undefined) {
                if (showNamespaceRequest instanceof ShowNamespaceRequest) {
                    contentType = showNamespaceRequest.contentType;
                    namespace = showNamespaceRequest.namespace;
                } else {
                    contentType = showNamespaceRequest['Content-Type'];
                    namespace = showNamespaceRequest['namespace'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling showNamespace.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'namespace': namespace, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询组织权限
         */
        showNamespaceAuth(showNamespaceAuthRequest?: ShowNamespaceAuthRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces/{namespace}/access",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let contentType;
            let namespace;

            if (showNamespaceAuthRequest !== null && showNamespaceAuthRequest !== undefined) {
                if (showNamespaceAuthRequest instanceof ShowNamespaceAuthRequest) {
                    contentType = showNamespaceAuthRequest.contentType;
                    namespace = showNamespaceAuthRequest.namespace;
                } else {
                    contentType = showNamespaceAuthRequest['Content-Type'];
                    namespace = showNamespaceAuthRequest['namespace'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling showNamespaceAuth.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'namespace': namespace, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询镜像仓库概要信息
         */
        showRepository(showRepositoryRequest?: ShowRepositoryRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let contentType;
            let namespace;
            let repository;

            if (showRepositoryRequest !== null && showRepositoryRequest !== undefined) {
                if (showRepositoryRequest instanceof ShowRepositoryRequest) {
                    contentType = showRepositoryRequest.contentType;
                    namespace = showRepositoryRequest.namespace;
                    repository = showRepositoryRequest.repository;
                } else {
                    contentType = showRepositoryRequest['Content-Type'];
                    namespace = showRepositoryRequest['namespace'];
                    repository = showRepositoryRequest['repository'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling showRepository.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling showRepository.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'namespace': namespace,'repository': repository, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取镜像老化规则记录
         */
        showRetention(showRetentionRequest?: ShowRetentionRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/retentions/{retention_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let contentType;
            let namespace;
            let repository;
            let retentionId;

            if (showRetentionRequest !== null && showRetentionRequest !== undefined) {
                if (showRetentionRequest instanceof ShowRetentionRequest) {
                    contentType = showRetentionRequest.contentType;
                    namespace = showRetentionRequest.namespace;
                    repository = showRetentionRequest.repository;
                    retentionId = showRetentionRequest.retentionId;
                } else {
                    contentType = showRetentionRequest['Content-Type'];
                    namespace = showRetentionRequest['namespace'];
                    repository = showRetentionRequest['repository'];
                    retentionId = showRetentionRequest['retention_id'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling showRetention.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling showRetention.');
            }
            if (retentionId === null || retentionId === undefined) {
            throw new RequiredError('retentionId','Required parameter retentionId was null or undefined when calling showRetention.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'namespace': namespace,'repository': repository,'retention_id': retentionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取镜像同步任务信息
         */
        showSyncJob(showSyncJobRequest?: ShowSyncJobRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/sync_job",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let contentType;
            let namespace;
            let repository;
            let filter;

            if (showSyncJobRequest !== null && showSyncJobRequest !== undefined) {
                if (showSyncJobRequest instanceof ShowSyncJobRequest) {
                    contentType = showSyncJobRequest.contentType;
                    namespace = showSyncJobRequest.namespace;
                    repository = showSyncJobRequest.repository;
                    filter = showSyncJobRequest.filter;
                } else {
                    contentType = showSyncJobRequest['Content-Type'];
                    namespace = showSyncJobRequest['namespace'];
                    repository = showSyncJobRequest['repository'];
                    filter = showSyncJobRequest['filter'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling showSyncJob.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling showSyncJob.');
            }
            if (filter === null || filter === undefined) {
                throw new RequiredError('filter','Required parameter filter was null or undefined when calling showSyncJob.');
            }
            if (filter !== null && filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'namespace': namespace,'repository': repository, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取触发器详情
         */
        showTrigger(showTriggerRequest?: ShowTriggerRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/triggers/{trigger}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let contentType;
            let namespace;
            let repository;
            let trigger;

            if (showTriggerRequest !== null && showTriggerRequest !== undefined) {
                if (showTriggerRequest instanceof ShowTriggerRequest) {
                    contentType = showTriggerRequest.contentType;
                    namespace = showTriggerRequest.namespace;
                    repository = showTriggerRequest.repository;
                    trigger = showTriggerRequest.trigger;
                } else {
                    contentType = showTriggerRequest['Content-Type'];
                    namespace = showTriggerRequest['namespace'];
                    repository = showTriggerRequest['repository'];
                    trigger = showTriggerRequest['trigger'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling showTrigger.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling showTrigger.');
            }
            if (trigger === null || trigger === undefined) {
            throw new RequiredError('trigger','Required parameter trigger was null or undefined when calling showTrigger.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'namespace': namespace,'repository': repository,'trigger': trigger, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询镜像权限
         */
        showUserRepositoryAuth(showUserRepositoryAuthRequest?: ShowUserRepositoryAuthRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/access",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let contentType;
            let namespace;
            let repository;

            if (showUserRepositoryAuthRequest !== null && showUserRepositoryAuthRequest !== undefined) {
                if (showUserRepositoryAuthRequest instanceof ShowUserRepositoryAuthRequest) {
                    contentType = showUserRepositoryAuthRequest.contentType;
                    namespace = showUserRepositoryAuthRequest.namespace;
                    repository = showUserRepositoryAuthRequest.repository;
                } else {
                    contentType = showUserRepositoryAuthRequest['Content-Type'];
                    namespace = showUserRepositoryAuthRequest['namespace'];
                    repository = showUserRepositoryAuthRequest['repository'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling showUserRepositoryAuth.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling showUserRepositoryAuth.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'namespace': namespace,'repository': repository, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新组织权限
         */
        updateNamespaceAuth(updateNamespaceAuthRequest?: UpdateNamespaceAuthRequest) {
            const options = {
                method: "PATCH",
                url: "/v2/manage/namespaces/{namespace}/access",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let contentType;
            let namespace;

            if (updateNamespaceAuthRequest !== null && updateNamespaceAuthRequest !== undefined) {
                if (updateNamespaceAuthRequest instanceof UpdateNamespaceAuthRequest) {
                    contentType = updateNamespaceAuthRequest.contentType;
                    namespace = updateNamespaceAuthRequest.namespace;
                    body = updateNamespaceAuthRequest.body
                } else {
                    contentType = updateNamespaceAuthRequest['Content-Type'];
                    namespace = updateNamespaceAuthRequest['namespace'];
                    body = updateNamespaceAuthRequest['body'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling updateNamespaceAuth.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'namespace': namespace, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新租户命名空间下的镜像概要信息，包括镜像类型、是否公有、描述信息
         */
        updateRepo(updateRepoRequest?: UpdateRepoRequest) {
            const options = {
                method: "PATCH",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let contentType;
            let namespace;
            let repository;

            if (updateRepoRequest !== null && updateRepoRequest !== undefined) {
                if (updateRepoRequest instanceof UpdateRepoRequest) {
                    contentType = updateRepoRequest.contentType;
                    namespace = updateRepoRequest.namespace;
                    repository = updateRepoRequest.repository;
                    body = updateRepoRequest.body
                } else {
                    contentType = updateRepoRequest['Content-Type'];
                    namespace = updateRepoRequest['namespace'];
                    repository = updateRepoRequest['repository'];
                    body = updateRepoRequest['body'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling updateRepo.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling updateRepo.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'namespace': namespace,'repository': repository, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新共享帐号
         */
        updateRepoDomains(updateRepoDomainsRequest?: UpdateRepoDomainsRequest) {
            const options = {
                method: "PATCH",
                url: "/v2/manage/namespaces/{namespace}/repositories/{repository}/access-domains/{access_domain}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let contentType;
            let namespace;
            let repository;
            let accessDomain;

            if (updateRepoDomainsRequest !== null && updateRepoDomainsRequest !== undefined) {
                if (updateRepoDomainsRequest instanceof UpdateRepoDomainsRequest) {
                    contentType = updateRepoDomainsRequest.contentType;
                    namespace = updateRepoDomainsRequest.namespace;
                    repository = updateRepoDomainsRequest.repository;
                    accessDomain = updateRepoDomainsRequest.accessDomain;
                    body = updateRepoDomainsRequest.body
                } else {
                    contentType = updateRepoDomainsRequest['Content-Type'];
                    namespace = updateRepoDomainsRequest['namespace'];
                    repository = updateRepoDomainsRequest['repository'];
                    accessDomain = updateRepoDomainsRequest['access_domain'];
                    body = updateRepoDomainsRequest['body'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling updateRepoDomains.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling updateRepoDomains.');
            }
            if (accessDomain === null || accessDomain === undefined) {
            throw new RequiredError('accessDomain','Required parameter accessDomain was null or undefined when calling updateRepoDomains.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'namespace': namespace,'repository': repository,'access_domain': accessDomain, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改镜像老化规则
         */
        updateRetention(updateRetentionRequest?: UpdateRetentionRequest) {
            const options = {
                method: "PATCH",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/retentions/{retention_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let contentType;
            let namespace;
            let repository;
            let retentionId;

            if (updateRetentionRequest !== null && updateRetentionRequest !== undefined) {
                if (updateRetentionRequest instanceof UpdateRetentionRequest) {
                    contentType = updateRetentionRequest.contentType;
                    namespace = updateRetentionRequest.namespace;
                    repository = updateRetentionRequest.repository;
                    retentionId = updateRetentionRequest.retentionId;
                    body = updateRetentionRequest.body
                } else {
                    contentType = updateRetentionRequest['Content-Type'];
                    namespace = updateRetentionRequest['namespace'];
                    repository = updateRetentionRequest['repository'];
                    retentionId = updateRetentionRequest['retention_id'];
                    body = updateRetentionRequest['body'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling updateRetention.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling updateRetention.');
            }
            if (retentionId === null || retentionId === undefined) {
            throw new RequiredError('retentionId','Required parameter retentionId was null or undefined when calling updateRetention.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'namespace': namespace,'repository': repository,'retention_id': retentionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新触发器配置
         */
        updateTrigger(updateTriggerRequest?: UpdateTriggerRequest) {
            const options = {
                method: "PATCH",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/triggers/{trigger}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let contentType;
            let namespace;
            let repository;
            let trigger;

            if (updateTriggerRequest !== null && updateTriggerRequest !== undefined) {
                if (updateTriggerRequest instanceof UpdateTriggerRequest) {
                    contentType = updateTriggerRequest.contentType;
                    namespace = updateTriggerRequest.namespace;
                    repository = updateTriggerRequest.repository;
                    trigger = updateTriggerRequest.trigger;
                    body = updateTriggerRequest.body
                } else {
                    contentType = updateTriggerRequest['Content-Type'];
                    namespace = updateTriggerRequest['namespace'];
                    repository = updateTriggerRequest['repository'];
                    trigger = updateTriggerRequest['trigger'];
                    body = updateTriggerRequest['body'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling updateTrigger.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling updateTrigger.');
            }
            if (trigger === null || trigger === undefined) {
            throw new RequiredError('trigger','Required parameter trigger was null or undefined when calling updateTrigger.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'namespace': namespace,'repository': repository,'trigger': trigger, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新镜像权限
         */
        updateUserRepositoryAuth(updateUserRepositoryAuthRequest?: UpdateUserRepositoryAuthRequest) {
            const options = {
                method: "PATCH",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/access",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let contentType;
            let namespace;
            let repository;

            if (updateUserRepositoryAuthRequest !== null && updateUserRepositoryAuthRequest !== undefined) {
                if (updateUserRepositoryAuthRequest instanceof UpdateUserRepositoryAuthRequest) {
                    contentType = updateUserRepositoryAuthRequest.contentType;
                    namespace = updateUserRepositoryAuthRequest.namespace;
                    repository = updateUserRepositoryAuthRequest.repository;
                    body = updateUserRepositoryAuthRequest.body
                } else {
                    contentType = updateUserRepositoryAuthRequest['Content-Type'];
                    namespace = updateUserRepositoryAuthRequest['namespace'];
                    repository = updateUserRepositoryAuthRequest['repository'];
                    body = updateUserRepositoryAuthRequest['body'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling updateUserRepositoryAuth.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling updateUserRepositoryAuth.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'namespace': namespace,'repository': repository, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询所有API版本信息
         */
        listApiVersions(listApiVersionsRequest?: ListApiVersionsRequest) {
            const options = {
                method: "GET",
                url: "/",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let contentType;

            if (listApiVersionsRequest !== null && listApiVersionsRequest !== undefined) {
                if (listApiVersionsRequest instanceof ListApiVersionsRequest) {
                    contentType = listApiVersionsRequest.contentType;
                } else {
                    contentType = listApiVersionsRequest['Content-Type'];
                }
            }

        
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定API版本信息
         */
        showApiVersion(showApiVersionRequest?: ShowApiVersionRequest) {
            const options = {
                method: "GET",
                url: "/{api_version}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let contentType;
            let apiVersion;

            if (showApiVersionRequest !== null && showApiVersionRequest !== undefined) {
                if (showApiVersionRequest instanceof ShowApiVersionRequest) {
                    contentType = showApiVersionRequest.contentType;
                    apiVersion = showApiVersionRequest.apiVersion;
                } else {
                    contentType = showApiVersionRequest['Content-Type'];
                    apiVersion = showApiVersionRequest['api_version'];
                }
            }

        
            if (apiVersion === null || apiVersion === undefined) {
            throw new RequiredError('apiVersion','Required parameter apiVersion was null or undefined when calling showApiVersion.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'api_version': apiVersion, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): SwrClient {
    return new SwrClient(client);
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