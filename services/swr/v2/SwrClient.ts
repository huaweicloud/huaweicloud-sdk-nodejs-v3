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
     * 创建镜像自动同步任务，帮助您把最新推送的镜像自动同步到其他区域镜像仓库内。 镜像自动同步帮助您把最新推送的镜像自动同步到其他区域镜像仓库内，后期镜像有更新时，目标仓库的镜像也会自动更新，但已有的镜像不会自动同步。已有镜像的同步需要手动操作，详情请参见手动同步镜像。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建镜像自动同步任务
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {CreateImageSyncRepoRequestBody} body 需要创建镜像自动同步任务的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createImageSyncRepo(createImageSyncRepoRequest?: CreateImageSyncRepoRequest): Promise<CreateImageSyncRepoResponse> {
        const options = ParamCreater().createImageSyncRepo(createImageSyncRepoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 对于镜像仓库已有的镜像，如果想在其他区域使用，需要手动触发镜像同步。 判断是否同步成功的方法如下：响应状态码为200，无报错信息，表示同步成功。通过SWR管理控制台或调用查询镜像仓库概要信息接口，在目标区域的目标组织下，若存在所同步的镜像版本表示同步成功。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 手动同步镜像
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {CreateManualImageSyncRepoRequestBody} body 需要手动同步镜像的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createManualImageSyncRepo(createManualImageSyncRepoRequest?: CreateManualImageSyncRepoRequest): Promise<CreateManualImageSyncRepoResponse> {
        const options = ParamCreater().createManualImageSyncRepo(createManualImageSyncRepoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建组织
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建组织
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {CreateNamespaceRequestBody} createNamespaceRequestBody This is a  create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createNamespace(createNamespaceRequest?: CreateNamespaceRequest): Promise<CreateNamespaceResponse> {
        const options = ParamCreater().createNamespace(createNamespaceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建组织权限
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建组织权限
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {Array<UserAuth>} createNamespaceAuthRequestBody 创建组织权限需要的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createNamespaceAuth(createNamespaceAuthRequest?: CreateNamespaceAuthRequest): Promise<CreateNamespaceAuthResponse> {
        const options = ParamCreater().createNamespaceAuth(createNamespaceAuthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在组织下创建镜像仓库。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 在组织下创建镜像仓库
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {CreateRepoRequestBody} createRepoRequestBody dfsgdfg
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRepo(createRepoRequest?: CreateRepoRequest): Promise<CreateRepoResponse> {
        const options = ParamCreater().createRepo(createRepoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建共享帐号。镜像上传后，您可以共享私有镜像给其他帐号，并授予下载该镜像的权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建共享帐号
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {CreateRepoDomainsRequestBody} createRepoDomainsRequestBody 创建共享帐号需要的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRepoDomains(createRepoDomainsRequest?: CreateRepoDomainsRequest): Promise<CreateRepoDomainsResponse> {
        const options = ParamCreater().createRepoDomains(createRepoDomainsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建镜像老化规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
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

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 调用该接口，通过获取响应消息头的X-Swr-Dockerlogin的值及响应消息体的host值，可生成临时登录指令。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 生成临时登录指令
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} [projectname] 项目名称，缺省值默认为区域名称，例如：cn-north-1。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSecret(createSecretRequest?: CreateSecretRequest): Promise<CreateSecretResponse> {
        const options = ParamCreater().createSecret(createSecretRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Swr-Dockerlogin'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建触发器
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建触发器
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {CreateTriggerRequestBody} createTriggerRequestBody 需要创建触发器的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTrigger(createTriggerRequest?: CreateTriggerRequest): Promise<CreateTriggerResponse> {
        const options = ParamCreater().createTrigger(createTriggerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建镜像权限
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建镜像权限
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {Array<UserAuth>} createUserRepositoryAuthRequestBody 需要创建镜像权限的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createUserRepositoryAuth(createUserRepositoryAuthRequest?: CreateUserRepositoryAuthRequest): Promise<CreateUserRepositoryAuthResponse> {
        const options = ParamCreater().createUserRepositoryAuth(createUserRepositoryAuthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据目标区域、目标组织删除指定的镜像自动同步任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除镜像自动同步任务
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {DeleteImageSyncRepoRequestBody} body 需要删除镜像自动同步任务的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteImageSyncRepo(deleteImageSyncRepoRequest?: DeleteImageSyncRepoRequest): Promise<DeleteImageSyncRepoResponse> {
        const options = ParamCreater().deleteImageSyncRepo(deleteImageSyncRepoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除组织权限
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除组织权限
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {Array<string>} deleteNamespaceAuthRequestBody 需要删除权限的用户id列表，需要从IAM服务获取
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteNamespaceAuth(deleteNamespaceAuthRequest?: DeleteNamespaceAuthRequest): Promise<DeleteNamespaceAuthResponse> {
        const options = ParamCreater().deleteNamespaceAuth(deleteNamespaceAuthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除组织
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除组织
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteNamespaces(deleteNamespacesRequest?: DeleteNamespacesRequest): Promise<DeleteNamespacesResponse> {
        const options = ParamCreater().deleteNamespaces(deleteNamespacesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除组织下的镜像仓库。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除组织下的镜像仓库
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRepo(deleteRepoRequest?: DeleteRepoRequest): Promise<DeleteRepoResponse> {
        const options = ParamCreater().deleteRepo(deleteRepoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除共享帐号
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除共享帐号
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {string} accessDomain 共享租户名
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRepoDomains(deleteRepoDomainsRequest?: DeleteRepoDomainsRequest): Promise<DeleteRepoDomainsResponse> {
        const options = ParamCreater().deleteRepoDomains(deleteRepoDomainsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除镜像仓库中指定tag的镜像
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除指定tag的镜像
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {string} tag 镜像版本名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRepoTag(deleteRepoTagRequest?: DeleteRepoTagRequest): Promise<DeleteRepoTagResponse> {
        const options = ParamCreater().deleteRepoTag(deleteRepoTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除镜像老化规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除镜像老化规则
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {number} retentionId 镜像老化规则id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRetention(deleteRetentionRequest?: DeleteRetentionRequest): Promise<DeleteRetentionResponse> {
        const options = ParamCreater().deleteRetention(deleteRetentionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除触发器
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除触发器
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {string} trigger 触发器名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTrigger(deleteTriggerRequest?: DeleteTriggerRequest): Promise<DeleteTriggerResponse> {
        const options = ParamCreater().deleteTrigger(deleteTriggerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除镜像权限
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除镜像权限
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {Array<string>} deleteUserRepositoryAuthRequestBody 用户ID，需从华为云IAM服务获取。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteUserRepositoryAuth(deleteUserRepositoryAuthRequest?: DeleteUserRepositoryAuthRequest): Promise<DeleteUserRepositoryAuthResponse> {
        const options = ParamCreater().deleteUserRepositoryAuth(deleteUserRepositoryAuthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取为当前镜像仓库所创建的所有自动同步任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取镜像自动同步任务列表
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listImageAutoSyncReposDetails(listImageAutoSyncReposDetailsRequest?: ListImageAutoSyncReposDetailsRequest): Promise<ListImageAutoSyncReposDetailsResponse> {
        const options = ParamCreater().listImageAutoSyncReposDetails(listImageAutoSyncReposDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询组织列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询组织列表
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} [namespace] 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} [filter] 应填写namespace::{namespace}|mode::{mode}。其中{namespace}是组织名称，{mode}如果不设置，查看有权限的组织列表；设置为visible，查看可见的组织列表（部分组织：仓库有权限，组织没有权限）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNamespaces(listNamespacesRequest?: ListNamespacesRequest): Promise<ListNamespacesResponse> {
        const options = ParamCreater().listNamespaces(listNamespacesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取配额信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取配额信息
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
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
     * 获取共享帐号列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取共享帐号列表
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRepoDomains(listRepoDomainsRequest?: ListRepoDomainsRequest): Promise<ListRepoDomainsResponse> {
        const options = ParamCreater().listRepoDomains(listRepoDomainsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询镜像仓库列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询镜像仓库列表
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} [namespace] 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。注意：和filter最好分开使用，如果同时使用，此过滤参数将失效，以filter为准。
     * @param {string} [name] 镜像仓库名称。注意：和filter最好分开使用，如果同时使用，此过滤参数将失效，以filter为准。
     * @param {string} [category] 镜像仓库分类，可设置为app_server, linux, framework_app, database, lang, other, windows, arm。注意：和filter最好分开使用，如果同时使用，此过滤参数将失效，以filter为准。
     * @param {string} [limit] 返回条数。注意：offset和limit参数需要配套使用。
     * @param {string} [offset] 起始索引。注意：offset和limit参数需要配套使用。
     * @param {string} [orderColumn] 按列排序，可设置为updated_at（按更新时间排序）。注意：order_column和order_type参数需要配套使用。
     * @param {string} [orderType] 排序类型，可设置为desc（降序）、asc（升序）。注意：order_column和order_type参数需要配套使用。
     * @param {string} [filter] 注意：如果使用filter至少要传递一个filter参数。应填写 namespace::{namespace}|name::{name}|limit::{limit}|offset::{offset}|order_column::{order_column}|order_type::{order_type},其中{namespace}为组织名称。 {name}为镜像仓库名称，模糊匹配。{category}为镜像仓库分类，可设置为app_server、linux、framework_app、database、lang、other、windows、arm。 {limit}为返回条数,{offset}为起始索引，注意：offset和limit参数需要配套使用。{order_column}为按列排序，可设置为name、updated_time、tag_count,{order_type}为排序类型， 可设置为desc（降序）、asc（升序），注意：order_column和order_type参数需要配套使用。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listReposDetails(listReposDetailsRequest?: ListReposDetailsRequest): Promise<ListReposDetailsResponse> {
        const options = ParamCreater().listReposDetails(listReposDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['Content-Range'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询镜像tag列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询镜像tag列表
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {string} [limit] 返回条数。注意：offset和limit参数需要配套使用。
     * @param {string} [offset] 起始索引。注意：offset和limit参数需要配套使用。
     * @param {string} [orderColumn] 按列排序，可设置为updated_at（按更新时间排序）。注意：order_column和order_type参数需要配套使用。
     * @param {string} [orderType] 排序类型，可设置为desc（降序）、asc（升序）。注意：order_column和order_type参数需要配套使用。
     * @param {string} [tag] 镜像版本名。
     * @param {string} [filter] 应填写 offset::{offset}|limit::{limit}|order_column::{order_column}|order_type::{order_type}|tag::{tag} ,其中{limit}为返回条数,{offset}为起始索引,注意：offset和limit参数需要配套使用。 {order_column}为按列排序，可设置为updated_at（按更新时间排序）,{order_type}为排序类型，可设置为desc（降序）、asc（升序），{tag}为镜像版本名。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRepositoryTags(listRepositoryTagsRequest?: ListRepositoryTagsRequest): Promise<ListRepositoryTagsResponse> {
        const options = ParamCreater().listRepositoryTags(listRepositoryTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['Content-Range'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取镜像老化记录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取镜像老化记录
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {string} [filter] 应填写 limit::{limit}|offset::{offset}, 其中{limit}为返回条数,{offset}为起始索引, 注意：offset和limit参数需要配套使用
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRetentionHistories(listRetentionHistoriesRequest?: ListRetentionHistoriesRequest): Promise<ListRetentionHistoriesResponse> {
        const options = ParamCreater().listRetentionHistories(listRetentionHistoriesRequest);

         // @ts-ignore
        options['responseHeaders'] = ['Content-Range'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取镜像老化规则列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取镜像老化规则列表
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRetentions(listRetentionsRequest?: ListRetentionsRequest): Promise<ListRetentionsResponse> {
        const options = ParamCreater().listRetentions(listRetentionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询共享镜像列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询共享镜像列表
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} center self: 我共享的镜像。thirdparty: 他人共享给我的镜像
     * @param {string} [namespace] 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} [name] 镜像仓库名称
     * @param {string} [limit] 返回条数。注意：offset和limit参数需要配套使用。
     * @param {string} [offset] 起始索引。注意：offset和limit参数需要配套使用。
     * @param {string} [orderColumn] 按列排序，可设置为updated_at（按更新时间排序）。注意：order_column和order_type参数需要配套使用。
     * @param {string} [orderType] 排序类型，可设置为desc（降序）、asc（升序）。注意：order_column和order_type参数需要配套使用。
     * @param {string} [filter] 应填写 center::{center}|name::{name}|limit::{limit}|offset::{offset}|namespace::{namespace}|order_column::{order_column}|order_type::{order_type} ,其中 {center}可选为self: 我共享的镜像。thirdparty: 他人共享给我的镜像，namespace为组织名称，name为镜像仓库名称， {limit}为返回条数,{offset}为起始索引,{order_column}为按列排序，可设置为name、updated_time、tag_count,{order_type}为排序类型，可设置为desc（降序）、asc（升序）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSharedReposDetails(listSharedReposDetailsRequest?: ListSharedReposDetailsRequest): Promise<ListSharedReposDetailsResponse> {
        const options = ParamCreater().listSharedReposDetails(listSharedReposDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['Content-Range'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取镜像仓库下的触发器列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取镜像仓库下的触发器列表
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTriggersDetails(listTriggersDetailsRequest?: ListTriggersDetailsRequest): Promise<ListTriggersDetailsResponse> {
        const options = ParamCreater().listTriggersDetails(listTriggersDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 判断共享租户是否存在
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
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

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取组织详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取组织详情
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showNamespace(showNamespaceRequest?: ShowNamespaceRequest): Promise<ShowNamespaceResponse> {
        const options = ParamCreater().showNamespace(showNamespaceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询组织权限
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询组织权限
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showNamespaceAuth(showNamespaceAuthRequest?: ShowNamespaceAuthRequest): Promise<ShowNamespaceAuthResponse> {
        const options = ParamCreater().showNamespaceAuth(showNamespaceAuthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询镜像仓库概要信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询镜像仓库概要信息
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRepository(showRepositoryRequest?: ShowRepositoryRequest): Promise<ShowRepositoryResponse> {
        const options = ParamCreater().showRepository(showRepositoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取镜像老化规则记录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
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

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建镜像自动同步任务后，可以通过此接口查询该任务的状态，以判断是否同步成功。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取镜像自动同步任务信息
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {string} filter 应填写 limit::{limit}|offset::{offset}|order::{order} ,其中{limit}为返回条数,{offset}为起始索引,注意：offset和limit参数需要配套使用，且必选。{order}为排序类型（可选），可设置为desc（降序）、asc（升序）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSyncJob(showSyncJobRequest?: ShowSyncJobRequest): Promise<ShowSyncJobResponse> {
        const options = ParamCreater().showSyncJob(showSyncJobRequest);

         // @ts-ignore
        options['responseHeaders'] = ['Content-Range'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取触发器详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
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

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询镜像权限
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询镜像权限
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showUserRepositoryAuth(showUserRepositoryAuthRequest?: ShowUserRepositoryAuthRequest): Promise<ShowUserRepositoryAuthResponse> {
        const options = ParamCreater().showUserRepositoryAuth(showUserRepositoryAuthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新组织权限
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新组织权限
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {Array<UserAuth>} updateNamespaceAuthRequestBody 更新组织权限需要的权限
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateNamespaceAuth(updateNamespaceAuthRequest?: UpdateNamespaceAuthRequest): Promise<UpdateNamespaceAuthResponse> {
        const options = ParamCreater().updateNamespaceAuth(updateNamespaceAuthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新租户组织下的镜像概要信息，包括镜像类型、是否公有、描述信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新镜像仓库的概要信息
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称。小写字母或数字开头，后面跟小写字母、数字、小数点、斜杠、下划线或中划线（其中下划线最多允许连续两个，小数点、斜杠、下划线、中划线不能直接相连），小写字母或数字结尾，1-128个字符。
     * @param {UpdateRepoRequestBody} updateRepoRequestBody dfsgdfg
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRepo(updateRepoRequest?: UpdateRepoRequest): Promise<UpdateRepoResponse> {
        const options = ParamCreater().updateRepo(updateRepoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新共享帐号
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新共享帐号
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {string} accessDomain 共享帐号
     * @param {UpdateRepoDomainsRequestBody} updateRepoDomainsRequestBody 更新共享帐号需要的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRepoDomains(updateRepoDomainsRequest?: UpdateRepoDomainsRequest): Promise<UpdateRepoDomainsResponse> {
        const options = ParamCreater().updateRepoDomains(updateRepoDomainsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改镜像老化规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改镜像老化规则
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {number} retentionId 镜像老化规则id
     * @param {UpdateRetentionRequestBody} [updateRetentionRequestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRetention(updateRetentionRequest?: UpdateRetentionRequest): Promise<UpdateRetentionResponse> {
        const options = ParamCreater().updateRetention(updateRetentionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新触发器配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新触发器配置
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {string} trigger 触发器名称
     * @param {UpdateTriggerRequestBody} body 更新触发器配置的请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTrigger(updateTriggerRequest?: UpdateTriggerRequest): Promise<UpdateTriggerResponse> {
        const options = ParamCreater().updateTrigger(updateTriggerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新镜像权限
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新镜像权限
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {Array<UserAuth>} updateRepositoryAuthRequestBody 需要创建镜像权限的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateUserRepositoryAuth(updateUserRepositoryAuthRequest?: UpdateUserRepositoryAuthRequest): Promise<UpdateUserRepositoryAuthResponse> {
        const options = ParamCreater().updateUserRepositoryAuth(updateUserRepositoryAuthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询所有API版本信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有API版本信息
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApiVersions(listApiVersionsRequest?: ListApiVersionsRequest): Promise<ListApiVersionsResponse> {
        const options = ParamCreater().listApiVersions(listApiVersionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定API版本信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定API版本信息
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} apiVersion API版本号。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showApiVersion(showApiVersionRequest?: ShowApiVersionRequest): Promise<ShowApiVersionResponse> {
        const options = ParamCreater().showApiVersion(showApiVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 创建镜像自动同步任务，帮助您把最新推送的镜像自动同步到其他区域镜像仓库内。 镜像自动同步帮助您把最新推送的镜像自动同步到其他区域镜像仓库内，后期镜像有更新时，目标仓库的镜像也会自动更新，但已有的镜像不会自动同步。已有镜像的同步需要手动操作，详情请参见手动同步镜像。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
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

            let body: any;
            
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
         * 对于镜像仓库已有的镜像，如果想在其他区域使用，需要手动触发镜像同步。 判断是否同步成功的方法如下：响应状态码为200，无报错信息，表示同步成功。通过SWR管理控制台或调用查询镜像仓库概要信息接口，在目标区域的目标组织下，若存在所同步的镜像版本表示同步成功。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
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

            let body: any;
            
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
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
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

            let body: any;
            
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
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
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

            let body: any;
            
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
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
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

            let body: any;
            
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
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
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

            let body: any;
            
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
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
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

            let body: any;
            
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
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSecret(createSecretRequest?: CreateSecretRequest) {
            const options = {
                method: "POST",
                url: "/v2/manage/utils/secret",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
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

            let body: any;
            
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
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
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

            let body: any;
            
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
         * 根据目标区域、目标组织删除指定的镜像自动同步任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
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

            let body: any;
            
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
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
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

            let body: any;
            
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
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteNamespaces(deleteNamespacesRequest?: DeleteNamespacesRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/manage/namespaces/{namespace}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRepo(deleteRepoRequest?: DeleteRepoRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRepoDomains(deleteRepoDomainsRequest?: DeleteRepoDomainsRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/manage/namespaces/{namespace}/repositories/{repository}/access-domains/{access_domain}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRepoTag(deleteRepoTagRequest?: DeleteRepoTagRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/tags/{tag}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRetention(deleteRetentionRequest?: DeleteRetentionRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/retentions/{retention_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTrigger(deleteTriggerRequest?: DeleteTriggerRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/triggers/{trigger}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
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

            let body: any;
            
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
         * 获取为当前镜像仓库所创建的所有自动同步任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listImageAutoSyncReposDetails(listImageAutoSyncReposDetailsRequest?: ListImageAutoSyncReposDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/sync_repo",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNamespaces(listNamespacesRequest?: ListNamespacesRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let namespace;
            
            let filter;

            if (listNamespacesRequest !== null && listNamespacesRequest !== undefined) {
                if (listNamespacesRequest instanceof ListNamespacesRequest) {
                    contentType = listNamespacesRequest.contentType;
                    namespace = listNamespacesRequest.namespace;
                    filter = listNamespacesRequest.filter;
                } else {
                    contentType = listNamespacesRequest['Content-Type'];
                    namespace = listNamespacesRequest['namespace'];
                    filter = listNamespacesRequest['filter'];
                }
            }

        
            if (namespace !== null && namespace !== undefined) {
                localVarQueryParameter['namespace'] = namespace;
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
         * 获取配额信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listQuotas(listQuotasRequest?: ListQuotasRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/projects/{project_id}/quotas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRepoDomains(listRepoDomainsRequest?: ListRepoDomainsRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces/{namespace}/repositories/{repository}/access-domains",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listReposDetails(listReposDetailsRequest?: ListReposDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/repos",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let namespace;
            
            let name;
            
            let category;
            
            let limit;
            
            let offset;
            
            let orderColumn;
            
            let orderType;
            
            let filter;

            if (listReposDetailsRequest !== null && listReposDetailsRequest !== undefined) {
                if (listReposDetailsRequest instanceof ListReposDetailsRequest) {
                    contentType = listReposDetailsRequest.contentType;
                    namespace = listReposDetailsRequest.namespace;
                    name = listReposDetailsRequest.name;
                    category = listReposDetailsRequest.category;
                    limit = listReposDetailsRequest.limit;
                    offset = listReposDetailsRequest.offset;
                    orderColumn = listReposDetailsRequest.orderColumn;
                    orderType = listReposDetailsRequest.orderType;
                    filter = listReposDetailsRequest.filter;
                } else {
                    contentType = listReposDetailsRequest['Content-Type'];
                    namespace = listReposDetailsRequest['namespace'];
                    name = listReposDetailsRequest['name'];
                    category = listReposDetailsRequest['category'];
                    limit = listReposDetailsRequest['limit'];
                    offset = listReposDetailsRequest['offset'];
                    orderColumn = listReposDetailsRequest['order_column'];
                    orderType = listReposDetailsRequest['order_type'];
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
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (orderColumn !== null && orderColumn !== undefined) {
                localVarQueryParameter['order_column'] = orderColumn;
            }
            if (orderType !== null && orderType !== undefined) {
                localVarQueryParameter['order_type'] = orderType;
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
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRepositoryTags(listRepositoryTagsRequest?: ListRepositoryTagsRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let namespace;
            
            let repository;
            
            let limit;
            
            let offset;
            
            let orderColumn;
            
            let orderType;
            
            let tag;
            
            let filter;

            if (listRepositoryTagsRequest !== null && listRepositoryTagsRequest !== undefined) {
                if (listRepositoryTagsRequest instanceof ListRepositoryTagsRequest) {
                    contentType = listRepositoryTagsRequest.contentType;
                    namespace = listRepositoryTagsRequest.namespace;
                    repository = listRepositoryTagsRequest.repository;
                    limit = listRepositoryTagsRequest.limit;
                    offset = listRepositoryTagsRequest.offset;
                    orderColumn = listRepositoryTagsRequest.orderColumn;
                    orderType = listRepositoryTagsRequest.orderType;
                    tag = listRepositoryTagsRequest.tag;
                    filter = listRepositoryTagsRequest.filter;
                } else {
                    contentType = listRepositoryTagsRequest['Content-Type'];
                    namespace = listRepositoryTagsRequest['namespace'];
                    repository = listRepositoryTagsRequest['repository'];
                    limit = listRepositoryTagsRequest['limit'];
                    offset = listRepositoryTagsRequest['offset'];
                    orderColumn = listRepositoryTagsRequest['order_column'];
                    orderType = listRepositoryTagsRequest['order_type'];
                    tag = listRepositoryTagsRequest['tag'];
                    filter = listRepositoryTagsRequest['filter'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling listRepositoryTags.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling listRepositoryTags.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
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
         * 获取镜像老化记录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRetentionHistories(listRetentionHistoriesRequest?: ListRetentionHistoriesRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/retentions/histories",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let namespace;
            
            let repository;
            
            let filter;

            if (listRetentionHistoriesRequest !== null && listRetentionHistoriesRequest !== undefined) {
                if (listRetentionHistoriesRequest instanceof ListRetentionHistoriesRequest) {
                    contentType = listRetentionHistoriesRequest.contentType;
                    namespace = listRetentionHistoriesRequest.namespace;
                    repository = listRetentionHistoriesRequest.repository;
                    filter = listRetentionHistoriesRequest.filter;
                } else {
                    contentType = listRetentionHistoriesRequest['Content-Type'];
                    namespace = listRetentionHistoriesRequest['namespace'];
                    repository = listRetentionHistoriesRequest['repository'];
                    filter = listRetentionHistoriesRequest['filter'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling listRetentionHistories.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling listRetentionHistories.');
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
         * 获取镜像老化规则列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRetentions(listRetentionsRequest?: ListRetentionsRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/retentions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSharedReposDetails(listSharedReposDetailsRequest?: ListSharedReposDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/shared-repositories",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let center;
            
            let namespace;
            
            let name;
            
            let limit;
            
            let offset;
            
            let orderColumn;
            
            let orderType;
            
            let filter;

            if (listSharedReposDetailsRequest !== null && listSharedReposDetailsRequest !== undefined) {
                if (listSharedReposDetailsRequest instanceof ListSharedReposDetailsRequest) {
                    contentType = listSharedReposDetailsRequest.contentType;
                    center = listSharedReposDetailsRequest.center;
                    namespace = listSharedReposDetailsRequest.namespace;
                    name = listSharedReposDetailsRequest.name;
                    limit = listSharedReposDetailsRequest.limit;
                    offset = listSharedReposDetailsRequest.offset;
                    orderColumn = listSharedReposDetailsRequest.orderColumn;
                    orderType = listSharedReposDetailsRequest.orderType;
                    filter = listSharedReposDetailsRequest.filter;
                } else {
                    contentType = listSharedReposDetailsRequest['Content-Type'];
                    center = listSharedReposDetailsRequest['center'];
                    namespace = listSharedReposDetailsRequest['namespace'];
                    name = listSharedReposDetailsRequest['name'];
                    limit = listSharedReposDetailsRequest['limit'];
                    offset = listSharedReposDetailsRequest['offset'];
                    orderColumn = listSharedReposDetailsRequest['order_column'];
                    orderType = listSharedReposDetailsRequest['order_type'];
                    filter = listSharedReposDetailsRequest['filter'];
                }
            }

        
            if (center === null || center === undefined) {
                throw new RequiredError('center','Required parameter center was null or undefined when calling listSharedReposDetails.');
            }
            if (center !== null && center !== undefined) {
                localVarQueryParameter['center'] = center;
            }
            if (namespace !== null && namespace !== undefined) {
                localVarQueryParameter['namespace'] = namespace;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (orderColumn !== null && orderColumn !== undefined) {
                localVarQueryParameter['order_column'] = orderColumn;
            }
            if (orderType !== null && orderType !== undefined) {
                localVarQueryParameter['order_type'] = orderType;
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
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTriggersDetails(listTriggersDetailsRequest?: ListTriggersDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/triggers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAccessDomain(showAccessDomainRequest?: ShowAccessDomainRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces/{namespace}/repositories/{repository}/access-domains/{access_domain}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showNamespace(showNamespaceRequest?: ShowNamespaceRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces/{namespace}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showNamespaceAuth(showNamespaceAuthRequest?: ShowNamespaceAuthRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces/{namespace}/access",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRepository(showRepositoryRequest?: ShowRepositoryRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRetention(showRetentionRequest?: ShowRetentionRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/retentions/{retention_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * 创建镜像自动同步任务后，可以通过此接口查询该任务的状态，以判断是否同步成功。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSyncJob(showSyncJobRequest?: ShowSyncJobRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/sync_job",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTrigger(showTriggerRequest?: ShowTriggerRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/triggers/{trigger}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showUserRepositoryAuth(showUserRepositoryAuthRequest?: ShowUserRepositoryAuthRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/access",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
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

            let body: any;
            
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
         * 更新租户组织下的镜像概要信息，包括镜像类型、是否公有、描述信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
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

            let body: any;
            
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
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
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

            let body: any;
            
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
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
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

            let body: any;
            
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
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
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

            let body: any;
            
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
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
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

            let body: any;
            
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
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApiVersions(listApiVersionsRequest?: ListApiVersionsRequest) {
            const options = {
                method: "GET",
                url: "/",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showApiVersion(showApiVersionRequest?: ShowApiVersionRequest) {
            const options = {
                method: "GET",
                url: "/{api_version}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
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