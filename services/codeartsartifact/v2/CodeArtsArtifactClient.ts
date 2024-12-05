import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AttentionDO } from './model/AttentionDO';
import { BatchDeleteTrashesRequest } from './model/BatchDeleteTrashesRequest';
import { BatchDeleteTrashesResponse } from './model/BatchDeleteTrashesResponse';
import { BatchRestoreRepoRequest } from './model/BatchRestoreRepoRequest';
import { BatchRestoreRepoResponse } from './model/BatchRestoreRepoResponse';
import { CreateArtifactoryRequest } from './model/CreateArtifactoryRequest';
import { CreateArtifactoryResponse } from './model/CreateArtifactoryResponse';
import { CreateAttentionRequest } from './model/CreateAttentionRequest';
import { CreateAttentionResponse } from './model/CreateAttentionResponse';
import { CreateDockerRepositoriesRequest } from './model/CreateDockerRepositoriesRequest';
import { CreateDockerRepositoriesResponse } from './model/CreateDockerRepositoriesResponse';
import { CreateDockerRepositoryDO } from './model/CreateDockerRepositoryDO';
import { CreateMavenRepoRequest } from './model/CreateMavenRepoRequest';
import { CreateMavenRepoResponse } from './model/CreateMavenRepoResponse';
import { CreateNotMavenRepoDO } from './model/CreateNotMavenRepoDO';
import { CreateProjectRelatedRepositoryRequest } from './model/CreateProjectRelatedRepositoryRequest';
import { CreateProjectRelatedRepositoryResponse } from './model/CreateProjectRelatedRepositoryResponse';
import { DeleteArtifactFileRequest } from './model/DeleteArtifactFileRequest';
import { DeleteArtifactFileResponse } from './model/DeleteArtifactFileResponse';
import { DeleteRepositoryRequest } from './model/DeleteRepositoryRequest';
import { DeleteRepositoryResponse } from './model/DeleteRepositoryResponse';
import { IDEPrivilageProjectInfo } from './model/IDEPrivilageProjectInfo';
import { IDERepoRevisionModel } from './model/IDERepoRevisionModel';
import { IDERepoSearchDO } from './model/IDERepoSearchDO';
import { IDERepositoryDO } from './model/IDERepositoryDO';
import { IDERepositoryPair } from './model/IDERepositoryPair';
import { IDETrashArtifactModel } from './model/IDETrashArtifactModel';
import { ListAllRepositoriesRequest } from './model/ListAllRepositoriesRequest';
import { ListAllRepositoriesResponse } from './model/ListAllRepositoriesResponse';
import { ListArtifactoryComponentRequest } from './model/ListArtifactoryComponentRequest';
import { ListArtifactoryComponentResponse } from './model/ListArtifactoryComponentResponse';
import { ListArtifactoryStorageStatisticRequest } from './model/ListArtifactoryStorageStatisticRequest';
import { ListArtifactoryStorageStatisticResponse } from './model/ListArtifactoryStorageStatisticResponse';
import { ListAttentionsRequest } from './model/ListAttentionsRequest';
import { ListAttentionsResponse } from './model/ListAttentionsResponse';
import { ModifyRepositoryRequest } from './model/ModifyRepositoryRequest';
import { ModifyRepositoryResponse } from './model/ModifyRepositoryResponse';
import { PathMap } from './model/PathMap';
import { ReleaseFileVersionDo } from './model/ReleaseFileVersionDo';
import { ResetUserPasswordRequest } from './model/ResetUserPasswordRequest';
import { ResetUserPasswordResponse } from './model/ResetUserPasswordResponse';
import { SearchArtifactsRequest } from './model/SearchArtifactsRequest';
import { SearchArtifactsResponse } from './model/SearchArtifactsResponse';
import { SearchByChecksumRequest } from './model/SearchByChecksumRequest';
import { SearchByChecksumResponse } from './model/SearchByChecksumResponse';
import { ShowAuditRequest } from './model/ShowAuditRequest';
import { ShowAuditResponse } from './model/ShowAuditResponse';
import { ShowFileTreeRequest } from './model/ShowFileTreeRequest';
import { ShowFileTreeResponse } from './model/ShowFileTreeResponse';
import { ShowMavenInfoRequest } from './model/ShowMavenInfoRequest';
import { ShowMavenInfoResponse } from './model/ShowMavenInfoResponse';
import { ShowProjectListRequest } from './model/ShowProjectListRequest';
import { ShowProjectListResponse } from './model/ShowProjectListResponse';
import { ShowProjectReleaseFilesRequest } from './model/ShowProjectReleaseFilesRequest';
import { ShowProjectReleaseFilesResponse } from './model/ShowProjectReleaseFilesResponse';
import { ShowReleaseProjectFilesRequest } from './model/ShowReleaseProjectFilesRequest';
import { ShowReleaseProjectFilesResponse } from './model/ShowReleaseProjectFilesResponse';
import { ShowRepositoryInfoRequest } from './model/ShowRepositoryInfoRequest';
import { ShowRepositoryInfoResponse } from './model/ShowRepositoryInfoResponse';
import { ShowRepositoryRequest } from './model/ShowRepositoryRequest';
import { ShowRepositoryResponse } from './model/ShowRepositoryResponse';
import { ShowStorageRequest } from './model/ShowStorageRequest';
import { ShowStorageResponse } from './model/ShowStorageResponse';
import { StandardResponseResult } from './model/StandardResponseResult';
import { TrashArtifactModelForDelete } from './model/TrashArtifactModelForDelete';
import { UpdateArtifactoryRequest } from './model/UpdateArtifactoryRequest';
import { UpdateArtifactoryResponse } from './model/UpdateArtifactoryResponse';
import { UpdateNotMavenRepoDO } from './model/UpdateNotMavenRepoDO';

export class CodeArtsArtifactClient {
    public static newBuilder(): ClientBuilder<CodeArtsArtifactClient> {
            let client = new ClientBuilder<CodeArtsArtifactClient>(newClient);
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
     * 批量删除回收站
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除回收站
     * @param {Array<TrashArtifactModelForDelete>} batchDeleteTrashesRequestBody 批量删除列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteTrashes(batchDeleteTrashesRequest?: BatchDeleteTrashesRequest): Promise<BatchDeleteTrashesResponse> {
        const options = ParamCreater().batchDeleteTrashes(batchDeleteTrashesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量还原回收站
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量还原回收站
     * @param {Array<IDETrashArtifactModel>} batchRestoreRepoRequestBody 参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchRestoreRepo(batchRestoreRepoRequest?: BatchRestoreRepoRequest): Promise<BatchRestoreRepoResponse> {
        const options = ParamCreater().batchRestoreRepo(batchRestoreRepoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建非maven仓库
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建非maven仓库
     * @param {CreateNotMavenRepoDO} createArtifactoryRequestBody 创建非maven仓库对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createArtifactory(createArtifactoryRequest?: CreateArtifactoryRequest): Promise<CreateArtifactoryResponse> {
        const options = ParamCreater().createArtifactory(createArtifactoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 关注组件/取消关注组件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关注组件/取消关注组件
     * @param {AttentionDO} createAttentionRequestBody 关注/取消关注请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAttention(createAttentionRequest?: CreateAttentionRequest): Promise<CreateAttentionResponse> {
        const options = ParamCreater().createAttention(createAttentionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建docker仓库
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建docker仓库
     * @param {CreateDockerRepositoryDO} createDockerRepositoriesRequestBody 创建Docker仓库对象类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDockerRepositories(createDockerRepositoriesRequest?: CreateDockerRepositoriesRequest): Promise<CreateDockerRepositoriesResponse> {
        const options = ParamCreater().createDockerRepositories(createDockerRepositoriesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建maven仓库
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建maven仓库
     * @param {IDERepositoryDO} createMavenRepoRequestBody 参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createMavenRepo(createMavenRepoRequest?: CreateMavenRepoRequest): Promise<CreateMavenRepoResponse> {
        const options = ParamCreater().createMavenRepo(createMavenRepoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建项目管理关联仓库
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建项目关联仓库
     * @param {IDEPrivilageProjectInfo} [createProjectRelatedRepositoryRequestBody] 参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createProjectRelatedRepository(createProjectRelatedRepositoryRequest?: CreateProjectRelatedRepositoryRequest): Promise<CreateProjectRelatedRepositoryResponse> {
        const options = ParamCreater().createProjectRelatedRepository(createProjectRelatedRepositoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 非maven删除文件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 非maven删除文件
     * @param {PathMap} deleteArtifactFileRequestBody 删除文件路径map
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteArtifactFile(deleteArtifactFileRequest?: DeleteArtifactFileRequest): Promise<DeleteArtifactFileResponse> {
        const options = ParamCreater().deleteArtifactFile(deleteArtifactFileRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除仓库到回收站
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除仓库到回收站
     * @param {IDERepoRevisionModel} deleteRepositoryRequestBody 参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRepository(deleteRepositoryRequest?: DeleteRepositoryRequest): Promise<DeleteRepositoryResponse> {
        const options = ParamCreater().deleteRepository(deleteRepositoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询仓库详情，不会去统计仓库下的制品数量
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询仓库详情，不会去统计仓库下的制品数量
     * @param {string} tenantId 租户id
     * @param {string} [groupId] 组id
     * @param {number} [pageNo] 页码
     * @param {number} [pageSize] 每页大小
     * @param {string} [sort] 排序类型
     * @param {string} [qname] 查询内容
     * @param {string} [type] 仓库类型
     * @param {string} [format] 仓库格式
     * @param {string} [formatList] 仓库格式列表
     * @param {boolean} [isRecycleBin] 是否是回收站文件
     * @param {boolean} [isNeedPaging] 是否需要分页
     * @param {boolean} [inProject] 是否在项目中
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAllRepositories(listAllRepositoriesRequest?: ListAllRepositoriesRequest): Promise<ListAllRepositoriesResponse> {
        const options = ParamCreater().listAllRepositories(listAllRepositoriesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询仓库文件详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询仓库文件详情
     * @param {string} tenantId 租户id
     * @param {string} repoName 仓库名称
     * @param {string} path 仓库中路径
     * @param {string} format 仓库格式
     * @param {string} [instanceId] 实例id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listArtifactoryComponent(listArtifactoryComponentRequest?: ListArtifactoryComponentRequest): Promise<ListArtifactoryComponentResponse> {
        const options = ParamCreater().listArtifactoryComponent(listArtifactoryComponentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询存储容量趋势
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询存储容量趋势
     * @param {string} tenantId 租户id
     * @param {string} [repo] 仓库id
     * @param {string} [startTime] 起始时间
     * @param {string} [endTime] 终止时间
     * @param {string} [instanceId] 实例id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listArtifactoryStorageStatistic(listArtifactoryStorageStatisticRequest?: ListArtifactoryStorageStatisticRequest): Promise<ListArtifactoryStorageStatisticResponse> {
        const options = ParamCreater().listArtifactoryStorageStatistic(listArtifactoryStorageStatisticRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询关注列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询关注列表
     * @param {number} [pageNo] 页码
     * @param {number} [pageSize] 每页大小
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAttentions(listAttentionsRequest?: ListAttentionsRequest): Promise<ListAttentionsResponse> {
        const options = ParamCreater().listAttentions(listAttentionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 编辑仓库
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 编辑仓库
     * @param {string} tabId tab_id
     * @param {IDERepositoryPair} modifyRepositoryRequestBody 参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public modifyRepository(modifyRepositoryRequest?: ModifyRepositoryRequest): Promise<ModifyRepositoryResponse> {
        const options = ParamCreater().modifyRepository(modifyRepositoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重置用户密码
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重置用户密码
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetUserPassword(resetUserPasswordRequest?: ResetUserPasswordRequest): Promise<ResetUserPasswordResponse> {
        const options = ParamCreater().resetUserPassword();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 统筹搜索
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 统筹搜索
     * @param {IDERepoSearchDO} searchArtifactsRequestBody 参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchArtifacts(searchArtifactsRequest?: SearchArtifactsRequest): Promise<SearchArtifactsResponse> {
        const options = ParamCreater().searchArtifacts(searchArtifactsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过checksum搜索文件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 通过checksum搜索文件
     * @param {string} checksum checksum
     * @param {number} [pageNo] 页码
     * @param {number} [pageSize] 每页条数
     * @param {string} [format] 仓库类型
     * @param {string} [inProject] 是否在项目中
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchByChecksum(searchByChecksumRequest?: SearchByChecksumRequest): Promise<SearchByChecksumResponse> {
        const options = ParamCreater().searchByChecksum(searchByChecksumRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询仓库或文件的审计日志信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询仓库或文件的审计日志信息
     * @param {string} tenantId 租户id
     * @param {string} module 模块
     * @param {string} repo 仓库id
     * @param {string} [userId] 用户id
     * @param {string} [instanceId] 实例id
     * @param {number} [pageNum] 页码
     * @param {number} [pageSize] 每页大小
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAudit(showAuditRequest?: ShowAuditRequest): Promise<ShowAuditResponse> {
        const options = ParamCreater().showAudit(showAuditRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询仓库文件夹目录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询仓库文件夹目录
     * @param {string} tenantId 租户id
     * @param {string} repoName 仓库名称
     * @param {string} path 仓库中路径
     * @param {string} [instanceId] 实例id
     * @param {boolean} [isRecycleBin] 是否是回收站文件
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFileTree(showFileTreeRequest?: ShowFileTreeRequest): Promise<ShowFileTreeResponse> {
        const options = ParamCreater().showFileTree(showFileTreeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户Maven仓库列表和账号密码，支持跨租户
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户Maven仓库列表和账号密码
     * @param {string} [policy] snapshot or releases
     * @param {string} [access] r or rw
     * @param {string} [_default] 是否返回默认仓库 true or false
     * @param {string} [ids] 仓库id 多个仓库id用英文逗号间隔
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMavenInfo(showMavenInfoRequest?: ShowMavenInfoRequest): Promise<ShowMavenInfoResponse> {
        const options = ParamCreater().showMavenInfo(showMavenInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询项目管理关联仓库
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目管理关联仓库
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showProjectList(showProjectListRequest?: ShowProjectListRequest): Promise<ShowProjectListResponse> {
        const options = ParamCreater().showProjectList();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取项目下文件版本信息列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取项目下文件版本信息列表
     * @param {string} fileName 文件名称，模糊搜索
     * @param {number} [limit] 每页显示的条目数量
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询， offset大于等于0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showProjectReleaseFiles(showProjectReleaseFilesRequest?: ShowProjectReleaseFilesRequest): Promise<ShowProjectReleaseFilesResponse> {
        const options = ParamCreater().showProjectReleaseFiles(showProjectReleaseFilesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取项目下文件版本信息列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取项目下文件版本信息列表
     * @param {string} fileName 文件名称，模糊搜索
     * @param {number} [limit] 每页显示的条目数量
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询， offset大于等于0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showReleaseProjectFiles(showReleaseProjectFilesRequest?: ShowReleaseProjectFilesRequest): Promise<ShowReleaseProjectFilesResponse> {
        const options = ParamCreater().showReleaseProjectFiles(showReleaseProjectFilesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询单个仓库详细信息，会去统计仓库下的制品数量
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单个仓库详细信息，会去统计仓库下的制品数量
     * @param {string} tenantId 租户id
     * @param {string} repoId 仓库id
     * @param {string} [region] 服务区
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
     * 查看仓库信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看仓库信息
     * @param {string} repoId 仓库id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRepositoryInfo(showRepositoryInfoRequest?: ShowRepositoryInfoRequest): Promise<ShowRepositoryInfoResponse> {
        const options = ParamCreater().showRepositoryInfo(showRepositoryInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 仓库用量查询
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 仓库用量查询
     * @param {string} [formatList] 类型列表
     * @param {string} [inProject] 是否在项目中
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showStorage(showStorageRequest?: ShowStorageRequest): Promise<ShowStorageResponse> {
        const options = ParamCreater().showStorage(showStorageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 编辑非maven仓库信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 编辑非maven仓库信息
     * @param {UpdateNotMavenRepoDO} updateArtifactoryRequestBody 更新非maven仓库请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateArtifactory(updateArtifactoryRequest?: UpdateArtifactoryRequest): Promise<UpdateArtifactoryResponse> {
        const options = ParamCreater().updateArtifactory(updateArtifactoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 批量删除回收站
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteTrashes(batchDeleteTrashesRequest?: BatchDeleteTrashesRequest) {
            const options = {
                method: "DELETE",
                url: "/cloudartifact/v5/trashes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDeleteTrashesRequest !== null && batchDeleteTrashesRequest !== undefined) {
                if (batchDeleteTrashesRequest instanceof BatchDeleteTrashesRequest) {
                    body = batchDeleteTrashesRequest.body
                } else {
                    body = batchDeleteTrashesRequest['body'];
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
         * 批量还原回收站
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchRestoreRepo(batchRestoreRepoRequest?: BatchRestoreRepoRequest) {
            const options = {
                method: "PUT",
                url: "/cloudartifact/v5/trashes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchRestoreRepoRequest !== null && batchRestoreRepoRequest !== undefined) {
                if (batchRestoreRepoRequest instanceof BatchRestoreRepoRequest) {
                    body = batchRestoreRepoRequest.body
                } else {
                    body = batchRestoreRepoRequest['body'];
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
         * 创建非maven仓库
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createArtifactory(createArtifactoryRequest?: CreateArtifactoryRequest) {
            const options = {
                method: "POST",
                url: "/cloudartifact/v5/artifact/",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createArtifactoryRequest !== null && createArtifactoryRequest !== undefined) {
                if (createArtifactoryRequest instanceof CreateArtifactoryRequest) {
                    body = createArtifactoryRequest.body
                } else {
                    body = createArtifactoryRequest['body'];
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
         * 关注组件/取消关注组件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAttention(createAttentionRequest?: CreateAttentionRequest) {
            const options = {
                method: "POST",
                url: "/cloudartifact/v5/attention",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createAttentionRequest !== null && createAttentionRequest !== undefined) {
                if (createAttentionRequest instanceof CreateAttentionRequest) {
                    body = createAttentionRequest.body
                } else {
                    body = createAttentionRequest['body'];
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
         * 创建docker仓库
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDockerRepositories(createDockerRepositoriesRequest?: CreateDockerRepositoriesRequest) {
            const options = {
                method: "POST",
                url: "/cloudartifact/v5/repositories",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createDockerRepositoriesRequest !== null && createDockerRepositoriesRequest !== undefined) {
                if (createDockerRepositoriesRequest instanceof CreateDockerRepositoriesRequest) {
                    body = createDockerRepositoriesRequest.body
                } else {
                    body = createDockerRepositoriesRequest['body'];
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
         * 创建maven仓库
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createMavenRepo(createMavenRepoRequest?: CreateMavenRepoRequest) {
            const options = {
                method: "POST",
                url: "/cloudartifact/v5/maven/repositories",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createMavenRepoRequest !== null && createMavenRepoRequest !== undefined) {
                if (createMavenRepoRequest instanceof CreateMavenRepoRequest) {
                    body = createMavenRepoRequest.body
                } else {
                    body = createMavenRepoRequest['body'];
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
         * 创建项目管理关联仓库
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createProjectRelatedRepository(createProjectRelatedRepositoryRequest?: CreateProjectRelatedRepositoryRequest) {
            const options = {
                method: "POST",
                url: "/cloudartifact/v5/maven/project/repository",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createProjectRelatedRepositoryRequest !== null && createProjectRelatedRepositoryRequest !== undefined) {
                if (createProjectRelatedRepositoryRequest instanceof CreateProjectRelatedRepositoryRequest) {
                    body = createProjectRelatedRepositoryRequest.body
                } else {
                    body = createProjectRelatedRepositoryRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 非maven删除文件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteArtifactFile(deleteArtifactFileRequest?: DeleteArtifactFileRequest) {
            const options = {
                method: "DELETE",
                url: "/cloudartifact/v5/file",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (deleteArtifactFileRequest !== null && deleteArtifactFileRequest !== undefined) {
                if (deleteArtifactFileRequest instanceof DeleteArtifactFileRequest) {
                    body = deleteArtifactFileRequest.body
                } else {
                    body = deleteArtifactFileRequest['body'];
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
         * 删除仓库到回收站
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRepository(deleteRepositoryRequest?: DeleteRepositoryRequest) {
            const options = {
                method: "DELETE",
                url: "/cloudartifact/v5/repositories",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (deleteRepositoryRequest !== null && deleteRepositoryRequest !== undefined) {
                if (deleteRepositoryRequest instanceof DeleteRepositoryRequest) {
                    body = deleteRepositoryRequest.body
                } else {
                    body = deleteRepositoryRequest['body'];
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
         * 查询仓库详情，不会去统计仓库下的制品数量
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAllRepositories(listAllRepositoriesRequest?: ListAllRepositoriesRequest) {
            const options = {
                method: "GET",
                url: "/cloudartifact/v5/{tenant_id}/{project_id}/repositories",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let tenantId;
            
            let groupId;
            
            let pageNo;
            
            let pageSize;
            
            let sort;
            
            let qname;
            
            let type;
            
            let format;
            
            let formatList;
            
            let isRecycleBin;
            
            let isNeedPaging;
            
            let inProject;

            if (listAllRepositoriesRequest !== null && listAllRepositoriesRequest !== undefined) {
                if (listAllRepositoriesRequest instanceof ListAllRepositoriesRequest) {
                    tenantId = listAllRepositoriesRequest.tenantId;
                    groupId = listAllRepositoriesRequest.groupId;
                    pageNo = listAllRepositoriesRequest.pageNo;
                    pageSize = listAllRepositoriesRequest.pageSize;
                    sort = listAllRepositoriesRequest.sort;
                    qname = listAllRepositoriesRequest.qname;
                    type = listAllRepositoriesRequest.type;
                    format = listAllRepositoriesRequest.format;
                    formatList = listAllRepositoriesRequest.formatList;
                    isRecycleBin = listAllRepositoriesRequest.isRecycleBin;
                    isNeedPaging = listAllRepositoriesRequest.isNeedPaging;
                    inProject = listAllRepositoriesRequest.inProject;
                } else {
                    tenantId = listAllRepositoriesRequest['tenant_id'];
                    groupId = listAllRepositoriesRequest['group_id'];
                    pageNo = listAllRepositoriesRequest['page_no'];
                    pageSize = listAllRepositoriesRequest['page_size'];
                    sort = listAllRepositoriesRequest['sort'];
                    qname = listAllRepositoriesRequest['qname'];
                    type = listAllRepositoriesRequest['type'];
                    format = listAllRepositoriesRequest['format'];
                    formatList = listAllRepositoriesRequest['format_list'];
                    isRecycleBin = listAllRepositoriesRequest['is_recycle_bin'];
                    isNeedPaging = listAllRepositoriesRequest['is_need_paging'];
                    inProject = listAllRepositoriesRequest['in_project'];
                }
            }

        
            if (tenantId === null || tenantId === undefined) {
            throw new RequiredError('tenantId','Required parameter tenantId was null or undefined when calling listAllRepositories.');
            }
            if (groupId !== null && groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (pageNo !== null && pageNo !== undefined) {
                localVarQueryParameter['page_no'] = pageNo;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (sort !== null && sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }
            if (qname !== null && qname !== undefined) {
                localVarQueryParameter['qname'] = qname;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (format !== null && format !== undefined) {
                localVarQueryParameter['format'] = format;
            }
            if (formatList !== null && formatList !== undefined) {
                localVarQueryParameter['format_list'] = formatList;
            }
            if (isRecycleBin !== null && isRecycleBin !== undefined) {
                localVarQueryParameter['is_recycle_bin'] = isRecycleBin;
            }
            if (isNeedPaging !== null && isNeedPaging !== undefined) {
                localVarQueryParameter['is_need_paging'] = isNeedPaging;
            }
            if (inProject !== null && inProject !== undefined) {
                localVarQueryParameter['in_project'] = inProject;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'tenant_id': tenantId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询仓库文件详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listArtifactoryComponent(listArtifactoryComponentRequest?: ListArtifactoryComponentRequest) {
            const options = {
                method: "GET",
                url: "/cloudartifact/v5/{tenant_id}/{project_id}/{repo_name}/file-detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let tenantId;
            
            let repoName;
            
            let path;
            
            let format;
            
            let instanceId;

            if (listArtifactoryComponentRequest !== null && listArtifactoryComponentRequest !== undefined) {
                if (listArtifactoryComponentRequest instanceof ListArtifactoryComponentRequest) {
                    tenantId = listArtifactoryComponentRequest.tenantId;
                    repoName = listArtifactoryComponentRequest.repoName;
                    path = listArtifactoryComponentRequest.path;
                    format = listArtifactoryComponentRequest.format;
                    instanceId = listArtifactoryComponentRequest.instanceId;
                } else {
                    tenantId = listArtifactoryComponentRequest['tenant_id'];
                    repoName = listArtifactoryComponentRequest['repo_name'];
                    path = listArtifactoryComponentRequest['path'];
                    format = listArtifactoryComponentRequest['format'];
                    instanceId = listArtifactoryComponentRequest['instance_id'];
                }
            }

        
            if (tenantId === null || tenantId === undefined) {
            throw new RequiredError('tenantId','Required parameter tenantId was null or undefined when calling listArtifactoryComponent.');
            }
            if (repoName === null || repoName === undefined) {
            throw new RequiredError('repoName','Required parameter repoName was null or undefined when calling listArtifactoryComponent.');
            }
            if (path === null || path === undefined) {
                throw new RequiredError('path','Required parameter path was null or undefined when calling listArtifactoryComponent.');
            }
            if (path !== null && path !== undefined) {
                localVarQueryParameter['path'] = path;
            }
            if (format === null || format === undefined) {
                throw new RequiredError('format','Required parameter format was null or undefined when calling listArtifactoryComponent.');
            }
            if (format !== null && format !== undefined) {
                localVarQueryParameter['format'] = format;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'tenant_id': tenantId,'repo_name': repoName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询存储容量趋势
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listArtifactoryStorageStatistic(listArtifactoryStorageStatisticRequest?: ListArtifactoryStorageStatisticRequest) {
            const options = {
                method: "GET",
                url: "/cloudartifact/v5/{tenant_id}/{project_id}/storageinfo/statistic",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let tenantId;
            
            let repo;
            
            let startTime;
            
            let endTime;
            
            let instanceId;

            if (listArtifactoryStorageStatisticRequest !== null && listArtifactoryStorageStatisticRequest !== undefined) {
                if (listArtifactoryStorageStatisticRequest instanceof ListArtifactoryStorageStatisticRequest) {
                    tenantId = listArtifactoryStorageStatisticRequest.tenantId;
                    repo = listArtifactoryStorageStatisticRequest.repo;
                    startTime = listArtifactoryStorageStatisticRequest.startTime;
                    endTime = listArtifactoryStorageStatisticRequest.endTime;
                    instanceId = listArtifactoryStorageStatisticRequest.instanceId;
                } else {
                    tenantId = listArtifactoryStorageStatisticRequest['tenant_id'];
                    repo = listArtifactoryStorageStatisticRequest['repo'];
                    startTime = listArtifactoryStorageStatisticRequest['start_time'];
                    endTime = listArtifactoryStorageStatisticRequest['end_time'];
                    instanceId = listArtifactoryStorageStatisticRequest['instance_id'];
                }
            }

        
            if (tenantId === null || tenantId === undefined) {
            throw new RequiredError('tenantId','Required parameter tenantId was null or undefined when calling listArtifactoryStorageStatistic.');
            }
            if (repo !== null && repo !== undefined) {
                localVarQueryParameter['repo'] = repo;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'tenant_id': tenantId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询关注列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAttentions(listAttentionsRequest?: ListAttentionsRequest) {
            const options = {
                method: "GET",
                url: "/cloudartifact/v5/attention/artifacts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let pageNo;
            
            let pageSize;

            if (listAttentionsRequest !== null && listAttentionsRequest !== undefined) {
                if (listAttentionsRequest instanceof ListAttentionsRequest) {
                    pageNo = listAttentionsRequest.pageNo;
                    pageSize = listAttentionsRequest.pageSize;
                } else {
                    pageNo = listAttentionsRequest['page_no'];
                    pageSize = listAttentionsRequest['page_size'];
                }
            }

        
            if (pageNo !== null && pageNo !== undefined) {
                localVarQueryParameter['page_no'] = pageNo;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 编辑仓库
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        modifyRepository(modifyRepositoryRequest?: ModifyRepositoryRequest) {
            const options = {
                method: "PUT",
                url: "/cloudartifact/v5/repositories/tab/{tab_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let tabId;

            if (modifyRepositoryRequest !== null && modifyRepositoryRequest !== undefined) {
                if (modifyRepositoryRequest instanceof ModifyRepositoryRequest) {
                    tabId = modifyRepositoryRequest.tabId;
                    body = modifyRepositoryRequest.body
                } else {
                    tabId = modifyRepositoryRequest['tab_id'];
                    body = modifyRepositoryRequest['body'];
                }
            }

        
            if (tabId === null || tabId === undefined) {
            throw new RequiredError('tabId','Required parameter tabId was null or undefined when calling modifyRepository.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'tab_id': tabId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重置用户密码
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetUserPassword() {
            const options = {
                method: "POST",
                url: "/cloudartifact/v5/maven/users/me",
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
         * 统筹搜索
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchArtifacts(searchArtifactsRequest?: SearchArtifactsRequest) {
            const options = {
                method: "POST",
                url: "/cloudartifact/v5/tree/repos/artifacts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (searchArtifactsRequest !== null && searchArtifactsRequest !== undefined) {
                if (searchArtifactsRequest instanceof SearchArtifactsRequest) {
                    body = searchArtifactsRequest.body
                } else {
                    body = searchArtifactsRequest['body'];
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
         * 通过checksum搜索文件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchByChecksum(searchByChecksumRequest?: SearchByChecksumRequest) {
            const options = {
                method: "GET",
                url: "/cloudartifact/v5/search/checksum",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let checksum;
            
            let pageNo;
            
            let pageSize;
            
            let format;
            
            let inProject;

            if (searchByChecksumRequest !== null && searchByChecksumRequest !== undefined) {
                if (searchByChecksumRequest instanceof SearchByChecksumRequest) {
                    checksum = searchByChecksumRequest.checksum;
                    pageNo = searchByChecksumRequest.pageNo;
                    pageSize = searchByChecksumRequest.pageSize;
                    format = searchByChecksumRequest.format;
                    inProject = searchByChecksumRequest.inProject;
                } else {
                    checksum = searchByChecksumRequest['checksum'];
                    pageNo = searchByChecksumRequest['page_no'];
                    pageSize = searchByChecksumRequest['page_size'];
                    format = searchByChecksumRequest['format'];
                    inProject = searchByChecksumRequest['in_project'];
                }
            }

        
            if (checksum === null || checksum === undefined) {
                throw new RequiredError('checksum','Required parameter checksum was null or undefined when calling searchByChecksum.');
            }
            if (checksum !== null && checksum !== undefined) {
                localVarQueryParameter['checksum'] = checksum;
            }
            if (pageNo !== null && pageNo !== undefined) {
                localVarQueryParameter['page_no'] = pageNo;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (format !== null && format !== undefined) {
                localVarQueryParameter['format'] = format;
            }
            if (inProject !== null && inProject !== undefined) {
                localVarQueryParameter['in_project'] = inProject;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询仓库或文件的审计日志信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAudit(showAuditRequest?: ShowAuditRequest) {
            const options = {
                method: "GET",
                url: "/cloudartifact/v5/{tenant_id}/{project_id}/{module}/{repo}/audit",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let tenantId;
            
            let module;
            
            let repo;
            
            let userId;
            
            let instanceId;
            
            let pageNum;
            
            let pageSize;

            if (showAuditRequest !== null && showAuditRequest !== undefined) {
                if (showAuditRequest instanceof ShowAuditRequest) {
                    tenantId = showAuditRequest.tenantId;
                    module = showAuditRequest.module;
                    repo = showAuditRequest.repo;
                    userId = showAuditRequest.userId;
                    instanceId = showAuditRequest.instanceId;
                    pageNum = showAuditRequest.pageNum;
                    pageSize = showAuditRequest.pageSize;
                } else {
                    tenantId = showAuditRequest['tenant_id'];
                    module = showAuditRequest['module'];
                    repo = showAuditRequest['repo'];
                    userId = showAuditRequest['user_id'];
                    instanceId = showAuditRequest['instance_id'];
                    pageNum = showAuditRequest['page_num'];
                    pageSize = showAuditRequest['page_size'];
                }
            }

        
            if (tenantId === null || tenantId === undefined) {
            throw new RequiredError('tenantId','Required parameter tenantId was null or undefined when calling showAudit.');
            }
            if (module === null || module === undefined) {
            throw new RequiredError('module','Required parameter module was null or undefined when calling showAudit.');
            }
            if (repo === null || repo === undefined) {
            throw new RequiredError('repo','Required parameter repo was null or undefined when calling showAudit.');
            }
            if (userId !== null && userId !== undefined) {
                localVarQueryParameter['user_id'] = userId;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (pageNum !== null && pageNum !== undefined) {
                localVarQueryParameter['page_num'] = pageNum;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'tenant_id': tenantId,'module': module,'repo': repo, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询仓库文件夹目录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showFileTree(showFileTreeRequest?: ShowFileTreeRequest) {
            const options = {
                method: "GET",
                url: "/cloudartifact/v5/{tenant_id}/{project_id}/{repo_name}/file-tree",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let tenantId;
            
            let repoName;
            
            let path;
            
            let instanceId;
            
            let isRecycleBin;

            if (showFileTreeRequest !== null && showFileTreeRequest !== undefined) {
                if (showFileTreeRequest instanceof ShowFileTreeRequest) {
                    tenantId = showFileTreeRequest.tenantId;
                    repoName = showFileTreeRequest.repoName;
                    path = showFileTreeRequest.path;
                    instanceId = showFileTreeRequest.instanceId;
                    isRecycleBin = showFileTreeRequest.isRecycleBin;
                } else {
                    tenantId = showFileTreeRequest['tenant_id'];
                    repoName = showFileTreeRequest['repo_name'];
                    path = showFileTreeRequest['path'];
                    instanceId = showFileTreeRequest['instance_id'];
                    isRecycleBin = showFileTreeRequest['is_recycle_bin'];
                }
            }

        
            if (tenantId === null || tenantId === undefined) {
            throw new RequiredError('tenantId','Required parameter tenantId was null or undefined when calling showFileTree.');
            }
            if (repoName === null || repoName === undefined) {
            throw new RequiredError('repoName','Required parameter repoName was null or undefined when calling showFileTree.');
            }
            if (path === null || path === undefined) {
                throw new RequiredError('path','Required parameter path was null or undefined when calling showFileTree.');
            }
            if (path !== null && path !== undefined) {
                localVarQueryParameter['path'] = path;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (isRecycleBin !== null && isRecycleBin !== undefined) {
                localVarQueryParameter['is_recycle_bin'] = isRecycleBin;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'tenant_id': tenantId,'repo_name': repoName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户Maven仓库列表和账号密码，支持跨租户
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMavenInfo(showMavenInfoRequest?: ShowMavenInfoRequest) {
            const options = {
                method: "GET",
                url: "/cloudartifact/v5/maven/info",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let policy;
            
            let access;
            
            let _default;
            
            let ids;

            if (showMavenInfoRequest !== null && showMavenInfoRequest !== undefined) {
                if (showMavenInfoRequest instanceof ShowMavenInfoRequest) {
                    policy = showMavenInfoRequest.policy;
                    access = showMavenInfoRequest.access;
                    _default = showMavenInfoRequest._default;
                    ids = showMavenInfoRequest.ids;
                } else {
                    policy = showMavenInfoRequest['policy'];
                    access = showMavenInfoRequest['access'];
                    _default = showMavenInfoRequest['default'];
                    ids = showMavenInfoRequest['ids'];
                }
            }

        
            if (policy !== null && policy !== undefined) {
                localVarQueryParameter['policy'] = policy;
            }
            if (access !== null && access !== undefined) {
                localVarQueryParameter['access'] = access;
            }
            if (_default !== null && _default !== undefined) {
                localVarQueryParameter['default'] = _default;
            }
            if (ids !== null && ids !== undefined) {
                localVarQueryParameter['ids'] = ids;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询项目管理关联仓库
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showProjectList() {
            const options = {
                method: "GET",
                url: "/cloudartifact/v5/maven/repository/list",
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
         * 获取项目下文件版本信息列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showProjectReleaseFiles(showProjectReleaseFilesRequest?: ShowProjectReleaseFilesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/release/files",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let fileName;
            
            let limit;
            
            let offset;

            if (showProjectReleaseFilesRequest !== null && showProjectReleaseFilesRequest !== undefined) {
                if (showProjectReleaseFilesRequest instanceof ShowProjectReleaseFilesRequest) {
                    fileName = showProjectReleaseFilesRequest.fileName;
                    limit = showProjectReleaseFilesRequest.limit;
                    offset = showProjectReleaseFilesRequest.offset;
                } else {
                    fileName = showProjectReleaseFilesRequest['file_name'];
                    limit = showProjectReleaseFilesRequest['limit'];
                    offset = showProjectReleaseFilesRequest['offset'];
                }
            }

        
            if (fileName === null || fileName === undefined) {
                throw new RequiredError('fileName','Required parameter fileName was null or undefined when calling showProjectReleaseFiles.');
            }
            if (fileName !== null && fileName !== undefined) {
                localVarQueryParameter['file_name'] = fileName;
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
         * 获取项目下文件版本信息列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showReleaseProjectFiles(showReleaseProjectFilesRequest?: ShowReleaseProjectFilesRequest) {
            const options = {
                method: "GET",
                url: "/devreposerver/v2/release/{project_id}/files",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let fileName;
            
            let limit;
            
            let offset;

            if (showReleaseProjectFilesRequest !== null && showReleaseProjectFilesRequest !== undefined) {
                if (showReleaseProjectFilesRequest instanceof ShowReleaseProjectFilesRequest) {
                    fileName = showReleaseProjectFilesRequest.fileName;
                    limit = showReleaseProjectFilesRequest.limit;
                    offset = showReleaseProjectFilesRequest.offset;
                } else {
                    fileName = showReleaseProjectFilesRequest['file_name'];
                    limit = showReleaseProjectFilesRequest['limit'];
                    offset = showReleaseProjectFilesRequest['offset'];
                }
            }

        
            if (fileName === null || fileName === undefined) {
                throw new RequiredError('fileName','Required parameter fileName was null or undefined when calling showReleaseProjectFiles.');
            }
            if (fileName !== null && fileName !== undefined) {
                localVarQueryParameter['file_name'] = fileName;
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
         * 查询单个仓库详细信息，会去统计仓库下的制品数量
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRepository(showRepositoryRequest?: ShowRepositoryRequest) {
            const options = {
                method: "GET",
                url: "/cloudartifact/v5/{tenant_id}/{project_id}/{repo_id}/repositories",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let tenantId;
            
            let repoId;
            
            let region;

            if (showRepositoryRequest !== null && showRepositoryRequest !== undefined) {
                if (showRepositoryRequest instanceof ShowRepositoryRequest) {
                    tenantId = showRepositoryRequest.tenantId;
                    repoId = showRepositoryRequest.repoId;
                    region = showRepositoryRequest.region;
                } else {
                    tenantId = showRepositoryRequest['tenant_id'];
                    repoId = showRepositoryRequest['repo_id'];
                    region = showRepositoryRequest['region'];
                }
            }

        
            if (tenantId === null || tenantId === undefined) {
            throw new RequiredError('tenantId','Required parameter tenantId was null or undefined when calling showRepository.');
            }
            if (repoId === null || repoId === undefined) {
            throw new RequiredError('repoId','Required parameter repoId was null or undefined when calling showRepository.');
            }
            if (region !== null && region !== undefined) {
                localVarQueryParameter['region'] = region;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'tenant_id': tenantId,'repo_id': repoId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看仓库信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRepositoryInfo(showRepositoryInfoRequest?: ShowRepositoryInfoRequest) {
            const options = {
                method: "GET",
                url: "/cloudartifact/v5/repositories/{repo_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let repoId;

            if (showRepositoryInfoRequest !== null && showRepositoryInfoRequest !== undefined) {
                if (showRepositoryInfoRequest instanceof ShowRepositoryInfoRequest) {
                    repoId = showRepositoryInfoRequest.repoId;
                } else {
                    repoId = showRepositoryInfoRequest['repo_id'];
                }
            }

        
            if (repoId === null || repoId === undefined) {
            throw new RequiredError('repoId','Required parameter repoId was null or undefined when calling showRepositoryInfo.');
            }

            options.pathParams = { 'repo_id': repoId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 仓库用量查询
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showStorage(showStorageRequest?: ShowStorageRequest) {
            const options = {
                method: "GET",
                url: "/cloudartifact/v5/storage",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let formatList;
            
            let inProject;

            if (showStorageRequest !== null && showStorageRequest !== undefined) {
                if (showStorageRequest instanceof ShowStorageRequest) {
                    formatList = showStorageRequest.formatList;
                    inProject = showStorageRequest.inProject;
                } else {
                    formatList = showStorageRequest['format_list'];
                    inProject = showStorageRequest['in_project'];
                }
            }

        
            if (formatList !== null && formatList !== undefined) {
                localVarQueryParameter['format_list'] = formatList;
            }
            if (inProject !== null && inProject !== undefined) {
                localVarQueryParameter['in_project'] = inProject;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 编辑非maven仓库信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateArtifactory(updateArtifactoryRequest?: UpdateArtifactoryRequest) {
            const options = {
                method: "PUT",
                url: "/cloudartifact/v5/artifact/",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateArtifactoryRequest !== null && updateArtifactoryRequest !== undefined) {
                if (updateArtifactoryRequest instanceof UpdateArtifactoryRequest) {
                    body = updateArtifactoryRequest.body
                } else {
                    body = updateArtifactoryRequest['body'];
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
    
    }
};

function newClient(client: HcClient): CodeArtsArtifactClient {
    return new CodeArtsArtifactClient(client);
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