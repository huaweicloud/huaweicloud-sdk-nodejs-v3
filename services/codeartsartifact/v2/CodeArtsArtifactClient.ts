import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { ArtifactSearchResult } from './model/ArtifactSearchResult';
import { AttentionDO } from './model/AttentionDO';
import { AuditDO } from './model/AuditDO';
import { AuditResult } from './model/AuditResult';
import { BasePaginationResponseEntity } from './model/BasePaginationResponseEntity';
import { BasePaginationResponseEntityV5 } from './model/BasePaginationResponseEntityV5';
import { BasicDOV5 } from './model/BasicDOV5';
import { BatchDeleteTrashesRequest } from './model/BatchDeleteTrashesRequest';
import { BatchDeleteTrashesResponse } from './model/BatchDeleteTrashesResponse';
import { BatchRestoreRepoRequest } from './model/BatchRestoreRepoRequest';
import { BatchRestoreRepoResponse } from './model/BatchRestoreRepoResponse';
import { CapacitySettingVO } from './model/CapacitySettingVO';
import { CreateArtifactoryRequest } from './model/CreateArtifactoryRequest';
import { CreateArtifactoryResponse } from './model/CreateArtifactoryResponse';
import { CreateArtifactoryResult } from './model/CreateArtifactoryResult';
import { CreateAttentionRequest } from './model/CreateAttentionRequest';
import { CreateAttentionResponse } from './model/CreateAttentionResponse';
import { CreateDockerRepositoriesRequest } from './model/CreateDockerRepositoriesRequest';
import { CreateDockerRepositoriesResponse } from './model/CreateDockerRepositoriesResponse';
import { CreateDockerRepositoryDO } from './model/CreateDockerRepositoryDO';
import { CreateMavenRepoRequest } from './model/CreateMavenRepoRequest';
import { CreateMavenRepoResponse } from './model/CreateMavenRepoResponse';
import { CreateMavenRepoResult } from './model/CreateMavenRepoResult';
import { CreateNotMavenRepoDO } from './model/CreateNotMavenRepoDO';
import { CreateProjectRelatedRepositoryRequest } from './model/CreateProjectRelatedRepositoryRequest';
import { CreateProjectRelatedRepositoryResponse } from './model/CreateProjectRelatedRepositoryResponse';
import { DeleteArtifactFileRequest } from './model/DeleteArtifactFileRequest';
import { DeleteArtifactFileResponse } from './model/DeleteArtifactFileResponse';
import { DeleteCompletelyUpdateFileStateRequest } from './model/DeleteCompletelyUpdateFileStateRequest';
import { DeleteCompletelyUpdateFileStateResponse } from './model/DeleteCompletelyUpdateFileStateResponse';
import { DeleteRepositoryRequest } from './model/DeleteRepositoryRequest';
import { DeleteRepositoryResponse } from './model/DeleteRepositoryResponse';
import { DevcloudUserDOV5 } from './model/DevcloudUserDOV5';
import { DevcloudUserDOV5Page } from './model/DevcloudUserDOV5Page';
import { DomainIPWhiteListModel } from './model/DomainIPWhiteListModel';
import { DomainIPWhiteListModelPage } from './model/DomainIPWhiteListModelPage';
import { DownloadFolderInfo } from './model/DownloadFolderInfo';
import { IDEPrivilageProjectInfo } from './model/IDEPrivilageProjectInfo';
import { IDERepoRevisionModel } from './model/IDERepoRevisionModel';
import { IDERepoSearchDO } from './model/IDERepoSearchDO';
import { IDERepositoryDO } from './model/IDERepositoryDO';
import { IDERepositoryPair } from './model/IDERepositoryPair';
import { IDETrashArtifactModel } from './model/IDETrashArtifactModel';
import { LatestVersionFilesCount } from './model/LatestVersionFilesCount';
import { ListAllRepositoriesRequest } from './model/ListAllRepositoriesRequest';
import { ListAllRepositoriesResponse } from './model/ListAllRepositoriesResponse';
import { ListAllRepositoriesResult } from './model/ListAllRepositoriesResult';
import { ListArtifactoryComponentRequest } from './model/ListArtifactoryComponentRequest';
import { ListArtifactoryComponentResponse } from './model/ListArtifactoryComponentResponse';
import { ListArtifactoryStorageStatisticRequest } from './model/ListArtifactoryStorageStatisticRequest';
import { ListArtifactoryStorageStatisticResponse } from './model/ListArtifactoryStorageStatisticResponse';
import { ListAttentionPageResult } from './model/ListAttentionPageResult';
import { ListAttentionResult } from './model/ListAttentionResult';
import { ListAttentionsRequest } from './model/ListAttentionsRequest';
import { ListAttentionsResponse } from './model/ListAttentionsResponse';
import { ListCapacityMessageSettingRequest } from './model/ListCapacityMessageSettingRequest';
import { ListCapacityMessageSettingResponse } from './model/ListCapacityMessageSettingResponse';
import { ListChildProxyRepositoriesListRequest } from './model/ListChildProxyRepositoriesListRequest';
import { ListChildProxyRepositoriesListResponse } from './model/ListChildProxyRepositoriesListResponse';
import { ListDomainIpConfigRequest } from './model/ListDomainIpConfigRequest';
import { ListDomainIpConfigResponse } from './model/ListDomainIpConfigResponse';
import { ListFileBuildArchivesRequest } from './model/ListFileBuildArchivesRequest';
import { ListFileBuildArchivesResponse } from './model/ListFileBuildArchivesResponse';
import { ListFilesRequest } from './model/ListFilesRequest';
import { ListFilesResponse } from './model/ListFilesResponse';
import { ListLatestVersionFilesRequest } from './model/ListLatestVersionFilesRequest';
import { ListLatestVersionFilesResponse } from './model/ListLatestVersionFilesResponse';
import { ListMavenListRequest } from './model/ListMavenListRequest';
import { ListMavenListResponse } from './model/ListMavenListResponse';
import { ListMavenUserRequest } from './model/ListMavenUserRequest';
import { ListMavenUserResponse } from './model/ListMavenUserResponse';
import { ListNetProxyRequest } from './model/ListNetProxyRequest';
import { ListNetProxyResponse } from './model/ListNetProxyResponse';
import { ListProjectRolePermissionsRequest } from './model/ListProjectRolePermissionsRequest';
import { ListProjectRolePermissionsResponse } from './model/ListProjectRolePermissionsResponse';
import { ListProjectUsersRequest } from './model/ListProjectUsersRequest';
import { ListProjectUsersResponse } from './model/ListProjectUsersResponse';
import { ListSecGuardListRequest } from './model/ListSecGuardListRequest';
import { ListSecGuardListResponse } from './model/ListSecGuardListResponse';
import { MalwareCount } from './model/MalwareCount';
import { MavenTabRepo } from './model/MavenTabRepo';
import { ModifyRepositoryRequest } from './model/ModifyRepositoryRequest';
import { ModifyRepositoryResponse } from './model/ModifyRepositoryResponse';
import { NetProxyModelV5 } from './model/NetProxyModelV5';
import { OpensourceCount } from './model/OpensourceCount';
import { PageParam } from './model/PageParam';
import { PathMap } from './model/PathMap';
import { PrivilegesResponseResult } from './model/PrivilegesResponseResult';
import { ProjectRolePermissionDo } from './model/ProjectRolePermissionDo';
import { ReleaseFileVersionDo } from './model/ReleaseFileVersionDo';
import { ReleaseStorageVOV5 } from './model/ReleaseStorageVOV5';
import { RepoFileDOV5 } from './model/RepoFileDOV5';
import { RepoFileDOV5Page } from './model/RepoFileDOV5Page';
import { RepoFileQueryDTOV5 } from './model/RepoFileQueryDTOV5';
import { RepoUserPrivilegeResult } from './model/RepoUserPrivilegeResult';
import { RepoUserPrivilegeV5 } from './model/RepoUserPrivilegeV5';
import { RepositoryBasicDO } from './model/RepositoryBasicDO';
import { RepositoryBuildVO } from './model/RepositoryBuildVO';
import { RepositoryDO } from './model/RepositoryDO';
import { RepositoryDOV5 } from './model/RepositoryDOV5';
import { RepositoryUserDO } from './model/RepositoryUserDO';
import { ResetUserPasswordRequest } from './model/ResetUserPasswordRequest';
import { ResetUserPasswordResponse } from './model/ResetUserPasswordResponse';
import { SearchArtifactsRequest } from './model/SearchArtifactsRequest';
import { SearchArtifactsResponse } from './model/SearchArtifactsResponse';
import { SearchArtifactsResult } from './model/SearchArtifactsResult';
import { SearchByChecksumRequest } from './model/SearchByChecksumRequest';
import { SearchByChecksumResponse } from './model/SearchByChecksumResponse';
import { SecGuardTaskCount } from './model/SecGuardTaskCount';
import { SecGuardTaskDetail } from './model/SecGuardTaskDetail';
import { ShowAuditRequest } from './model/ShowAuditRequest';
import { ShowAuditResponse } from './model/ShowAuditResponse';
import { ShowAutoDeleteJobSettingsRequest } from './model/ShowAutoDeleteJobSettingsRequest';
import { ShowAutoDeleteJobSettingsResponse } from './model/ShowAutoDeleteJobSettingsResponse';
import { ShowDomainReleaseRepoStorageRequest } from './model/ShowDomainReleaseRepoStorageRequest';
import { ShowDomainReleaseRepoStorageResponse } from './model/ShowDomainReleaseRepoStorageResponse';
import { ShowFileDetailByFullNameRequest } from './model/ShowFileDetailByFullNameRequest';
import { ShowFileDetailByFullNameResponse } from './model/ShowFileDetailByFullNameResponse';
import { ShowFileDetailRequest } from './model/ShowFileDetailRequest';
import { ShowFileDetailResponse } from './model/ShowFileDetailResponse';
import { ShowFileTreeRequest } from './model/ShowFileTreeRequest';
import { ShowFileTreeResponse } from './model/ShowFileTreeResponse';
import { ShowFileTreeResult } from './model/ShowFileTreeResult';
import { ShowFileTreeResultChildren } from './model/ShowFileTreeResultChildren';
import { ShowLatestVersionFilesCountRequest } from './model/ShowLatestVersionFilesCountRequest';
import { ShowLatestVersionFilesCountResponse } from './model/ShowLatestVersionFilesCountResponse';
import { ShowMavenInfoRequest } from './model/ShowMavenInfoRequest';
import { ShowMavenInfoResponse } from './model/ShowMavenInfoResponse';
import { ShowMultiRolesUserPermissionsRequest } from './model/ShowMultiRolesUserPermissionsRequest';
import { ShowMultiRolesUserPermissionsResponse } from './model/ShowMultiRolesUserPermissionsResponse';
import { ShowOpenSourceEnabledRequest } from './model/ShowOpenSourceEnabledRequest';
import { ShowOpenSourceEnabledResponse } from './model/ShowOpenSourceEnabledResponse';
import { ShowPackageDataDetailRequest } from './model/ShowPackageDataDetailRequest';
import { ShowPackageDataDetailResponse } from './model/ShowPackageDataDetailResponse';
import { ShowPackageInfoRequest } from './model/ShowPackageInfoRequest';
import { ShowPackageInfoResponse } from './model/ShowPackageInfoResponse';
import { ShowProjectListRequest } from './model/ShowProjectListRequest';
import { ShowProjectListResponse } from './model/ShowProjectListResponse';
import { ShowProjectListResult } from './model/ShowProjectListResult';
import { ShowProjectReleaseFilesRequest } from './model/ShowProjectReleaseFilesRequest';
import { ShowProjectReleaseFilesResponse } from './model/ShowProjectReleaseFilesResponse';
import { ShowProjectStorageInfoRequest } from './model/ShowProjectStorageInfoRequest';
import { ShowProjectStorageInfoResponse } from './model/ShowProjectStorageInfoResponse';
import { ShowReleaseProjectFilesRequest } from './model/ShowReleaseProjectFilesRequest';
import { ShowReleaseProjectFilesResponse } from './model/ShowReleaseProjectFilesResponse';
import { ShowRepoUserInfoRequest } from './model/ShowRepoUserInfoRequest';
import { ShowRepoUserInfoResponse } from './model/ShowRepoUserInfoResponse';
import { ShowRepositoryInfoRequest } from './model/ShowRepositoryInfoRequest';
import { ShowRepositoryInfoResponse } from './model/ShowRepositoryInfoResponse';
import { ShowRepositoryRequest } from './model/ShowRepositoryRequest';
import { ShowRepositoryResponse } from './model/ShowRepositoryResponse';
import { ShowStorageRequest } from './model/ShowStorageRequest';
import { ShowStorageResponse } from './model/ShowStorageResponse';
import { ShowUserPrivilegesRequest } from './model/ShowUserPrivilegesRequest';
import { ShowUserPrivilegesResponse } from './model/ShowUserPrivilegesResponse';
import { ShowUserTicketRequest } from './model/ShowUserTicketRequest';
import { ShowUserTicketResponse } from './model/ShowUserTicketResponse';
import { StandarBaseResponseV5 } from './model/StandarBaseResponseV5';
import { StandardResponseResult } from './model/StandardResponseResult';
import { StorageInfoDOV5 } from './model/StorageInfoDOV5';
import { StorageMap } from './model/StorageMap';
import { StorageStatisticDO } from './model/StorageStatisticDO';
import { TrashArtifactModelForDelete } from './model/TrashArtifactModelForDelete';
import { TrashcanResultData } from './model/TrashcanResultData';
import { UpdateArtifactoryRequest } from './model/UpdateArtifactoryRequest';
import { UpdateArtifactoryResponse } from './model/UpdateArtifactoryResponse';
import { UpdateNotMavenRepoDO } from './model/UpdateNotMavenRepoDO';
import { VersionViewVoV5 } from './model/VersionViewVoV5';

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
     * 根据文件ID彻底删除文件或文件夹，删除后不能恢复，支持批量删除。可使用该接口清理不再需要的文件或文件夹以释放存储空间。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 彻底删除文件/文件夹
     * @param {Array<string>} [deleteCompletelyUpdateFileStateRequestBody] 删除文件id列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCompletelyUpdateFileState(deleteCompletelyUpdateFileStateRequest?: DeleteCompletelyUpdateFileStateRequest): Promise<DeleteCompletelyUpdateFileStateResponse> {
        const options = ParamCreater().deleteCompletelyUpdateFileState(deleteCompletelyUpdateFileStateRequest);

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
     * 查询租户容量消息通知设置，包含容量阈值和是否启用邮件通知等信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户容量消息通知设置信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCapacityMessageSetting(listCapacityMessageSettingRequest?: ListCapacityMessageSettingRequest): Promise<ListCapacityMessageSettingResponse> {
        const options = ParamCreater().listCapacityMessageSetting();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据仓库ID获取指定聚合仓的仓库代理列表，包含仓库状态、类型、地址和访问路径白名单等信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取聚合仓下的仓库代理列表
     * @param {string} repoId **参数解释**: 仓库id，格式为{region}_{domainId}_{format}_{sequence}。可以从私有依赖库首页-&gt;仓库概览-&gt;仓库地址 url 中获取，最后两个\&quot;/\&quot;中间的字符串即为仓库id。 **约束限制**: 不涉及。 **取值范围**: 根据仓库id格式中region, domainId需要为有效值，format有效值为:npm|go|pypi|rpm|composer|maven|debian|conan|nuget|docker2|cocoapods|ohpm|generic|helm|conda, sequence取值根据套餐不同有不同上限值。 **默认取值**: 不涉及。
     * @param {string} [type] **参数解释**: type。 **约束限制**: 不涉及。 **取值范围**: 不涉及。 **默认取值**: 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listChildProxyRepositoriesList(listChildProxyRepositoriesListRequest?: ListChildProxyRepositoriesListRequest): Promise<ListChildProxyRepositoriesListResponse> {
        const options = ParamCreater().listChildProxyRepositoriesList(listChildProxyRepositoriesListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户级IP白名单列表。在IP白名单的IP才能访问制品仓库，未配置IP白名单时，默认所有IP都可访问。该功能可用于保障制品仓库的安全，对访问IP进行严格控制。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户级IP白名单
     * @param {number} [pageNo] **参数解释**: 分页查询的页数。 **约束限制**: 不涉及。 **取值范围**: 最小值1，最大值2147483647。 **默认取值**: 1
     * @param {number} [pageSize] **参数解释**: 分页查询的每页数据量。 **约束限制**: 不涉及。 **取值范围**: 最小值1，最大值100。 **默认取值**: 10
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDomainIpConfig(listDomainIpConfigRequest?: ListDomainIpConfigRequest): Promise<ListDomainIpConfigResponse> {
        const options = ParamCreater().listDomainIpConfig(listDomainIpConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当归档包数量庞大时，分页查询构建归档包列表，包含文件名、文件大小、下载地址、MD5校验和、构建地址、构建代码分支等信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 分页查询构建归档包列表
     * @param {string} [parentId] 父节点id
     * @param {string} [buildId] 构建id
     * @param {string} [buildNo] 构建序号
     * @param {number} [pageNo] 页数
     * @param {number} [pageSize] 每页数据量
     * @param {string} [repoBranch] codehub仓库分支
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFileBuildArchives(listFileBuildArchivesRequest?: ListFileBuildArchivesRequest): Promise<ListFileBuildArchivesResponse> {
        const options = ParamCreater().listFileBuildArchives(listFileBuildArchivesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当项目或文件数量庞大时，分页查询项目或文件列表。可根据文件名、文件状态和文件的发布状态等参数进行过滤，从而快速找到所需文件，包含文件名、文件大小和下载地址等信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询文件/项目列表
     * @param {RepoFileQueryDTOV5} listFilesRequestBody **参数解释**： 查询参数。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFiles(listFilesRequest?: ListFilesRequest): Promise<ListFilesResponse> {
        const options = ParamCreater().listFiles(listFilesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当项目文件数量庞大时，通过该接口可以分页查询项目下所有文件的最新版本，包含文件名、文件大小、文件状态和发布状态等信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目下所有文件的最新版本
     * @param {string} [name] **参数解释**： name。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [sortBy] **参数解释**： sort_by。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [sortDir] **参数解释**： sort_dir。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [offset] **参数解释**： offset。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [limit] **参数解释**： limit。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLatestVersionFiles(listLatestVersionFilesRequest?: ListLatestVersionFilesRequest): Promise<ListLatestVersionFilesResponse> {
        const options = ParamCreater().listLatestVersionFiles(listLatestVersionFilesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Maven仓库列表，包含仓库状态、类型、地址和访问路径白名单等信息。支持根据项目ID和仓库ID等参数进行过滤。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Maven仓库列表
     * @param {boolean} [_default] **参数解释**: 是否返回默认仓库。 **约束限制**: 不涉及。 **取值范围**: true or false。 **默认取值**: false。
     * @param {string} [policy] **参数解释**: 仓库类型：snapshot 或 release。 **约束限制**: 不涉及。 **取值范围**: snapshot or releases。 **默认取值**: 不涉及。
     * @param {string} [repoIds] **参数解释**: 仓库id，多个仓库id用英文逗号间隔。仓库id格式为{region}_{domainId}_{format}_{sequence}。可以从私有依赖库首页-&gt;仓库概览-&gt;仓库地址 url 中获取，最后两个\&quot;/\&quot;中间的字符串即为仓库id。 **约束限制**: 不涉及。 **取值范围**: 最大长度512。 **默认取值**: 不涉及。
     * @param {string} [access] **参数解释**: 权限过滤设置，允许过滤读(r)和读写(rw)权限。 **约束限制**: 不涉及。 **取值范围**: r or rw。 **默认取值**: r。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMavenList(listMavenListRequest?: ListMavenListRequest): Promise<ListMavenListResponse> {
        const options = ParamCreater().listMavenList(listMavenListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 分页查询私有库用户列表，包含用户名和用户是否启用等信息。可根据用户名进行过滤。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询私有库用户列表
     * @param {string} [userName] **参数解释**: 用户名。 **约束限制**: 不涉及。 **取值范围**: 不涉及。 **默认取值**: 不涉及。
     * @param {number} [pageNo] **参数解释**: 分页查询的页数。 **约束限制**: 不涉及。 **取值范围**: 最小值1，最大值2147483647。 **默认取值**: 1
     * @param {number} [pageSize] **参数解释**: 分页查询的每页数据量。 **约束限制**: 不涉及。 **取值范围**: 最小值1，最大值100。 **默认取值**: 10
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMavenUser(listMavenUserRequest?: ListMavenUserRequest): Promise<ListMavenUserResponse> {
        const options = ParamCreater().listMavenUser(listMavenUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询网络代理列表，返回代理源的访问地址及认证信息等，用于代理外部公开的制品资源。通过网络代理，开发人员可以安全、高效地访问所需的外部资源。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询网络代理列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNetProxy(listNetProxyRequest?: ListNetProxyRequest): Promise<ListNetProxyResponse> {
        const options = ParamCreater().listNetProxy();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看项目的角色权限设置，包含上传下载、创建文件夹、清空或者还原回收站和更改软件包状态等设置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看项目的角色权限设置
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProjectRolePermissions(listProjectRolePermissionsRequest?: ListProjectRolePermissionsRequest): Promise<ListProjectRolePermissionsResponse> {
        const options = ParamCreater().listProjectRolePermissions();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当项目中的用户数量较多时，分页查询指定项目下的用户列表，包含用户名和角色等信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目下的用户
     * @param {string} repoId **参数解释**: 仓库id。可在私有库仓库**概览**界面查看。 **约束限制**: 不涉及。 **取值范围**: 不涉及。 **默认取值**: 无。
     * @param {string} [scene] **参数解释**: scene。 **约束限制**: 不涉及。 **取值范围**: 不涉及。 **默认取值**: 无。
     * @param {number} [pageNo] **参数解释**: 分页查询的页数。 **约束限制**: 不涉及。 **取值范围**: 最小值1，最大值2147483647。 **默认取值**: 1
     * @param {number} [pageSize] **参数解释**: 分页查询的每页数据量。 **约束限制**: 不涉及。 **取值范围**: 最小值1，最大值100。 **默认取值**: 10
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProjectUsers(listProjectUsersRequest?: ListProjectUsersRequest): Promise<ListProjectUsersResponse> {
        const options = ParamCreater().listProjectUsers(listProjectUsersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 分页查询制品安全扫描任务列表，包含扫描制品数量、漏洞数量、病毒文件数量和恶意代码文件数量等信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询制品安全扫描任务列表
     * @param {number} [date] **参数解释**: 查询多少天内的任务。 **约束限制**: 不涉及。 **取值范围**: 不涉及。 **默认取值**: 1。
     * @param {number} [pageNo] **参数解释**: 分页查询的页数。 **约束限制**: 不涉及。 **取值范围**: 最小值1，最大值2147483647。 **默认取值**: 1
     * @param {number} [pageSize] **参数解释**: 分页查询的每页数据量。 **约束限制**: 不涉及。 **取值范围**: 最小值1，最大值100。 **默认取值**: 10
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSecGuardList(listSecGuardListRequest?: ListSecGuardListRequest): Promise<ListSecGuardListResponse> {
        const options = ParamCreater().listSecGuardList(listSecGuardListRequest);

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
     * 查询项目自动删除任务设置，包含文件的过期自动删除时间及删除规则。自动删除任务可以自动执行文件清理任务，减少管理员的工作负担，确保存储资源的有效利用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目自动删除任务设置
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAutoDeleteJobSettings(showAutoDeleteJobSettingsRequest?: ShowAutoDeleteJobSettingsRequest): Promise<ShowAutoDeleteJobSettingsResponse> {
        const options = ParamCreater().showAutoDeleteJobSettings();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户发布库存储容量，包含已使用存储容量、最大存储容量、套餐类型和仓库数量等信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户发布库存储容量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDomainReleaseRepoStorage(showDomainReleaseRepoStorageRequest?: ShowDomainReleaseRepoStorageRequest): Promise<ShowDomainReleaseRepoStorageResponse> {
        const options = ParamCreater().showDomainReleaseRepoStorage();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在日常数据管理工作中，根据文件ID查询指定文件详情，包含文件名、文件大小、下载地址、校验和、文件状态和发布状态等信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据文件ID查询文件详情
     * @param {string} id **参数解释**： 文件id。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFileDetail(showFileDetailRequest?: ShowFileDetailRequest): Promise<ShowFileDetailResponse> {
        const options = ParamCreater().showFileDetail(showFileDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在日常数据管理工作中，根据文件完整路径查询指定文件详情，包含文件名、文件大小、下载地址、校验和、文件状态和发布状态等信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据文件完整路径查询文件详情
     * @param {string} fileName **参数解释**： 文件名。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFileDetailByFullName(showFileDetailByFullNameRequest?: ShowFileDetailByFullNameRequest): Promise<ShowFileDetailByFullNameResponse> {
        const options = ParamCreater().showFileDetailByFullName(showFileDetailByFullNameRequest);

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
     * 查询项目下所有文件的数量，该接口会识别所有文件的最新版本，从而提供准确的文件数量统计。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目下所有文件的数量
     * @param {string} [name] **参数解释**： 文件名。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showLatestVersionFilesCount(showLatestVersionFilesCountRequest?: ShowLatestVersionFilesCountRequest): Promise<ShowLatestVersionFilesCountResponse> {
        const options = ParamCreater().showLatestVersionFilesCount(showLatestVersionFilesCountRequest);

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
     * 查询多角色用户权限，包含上传下载、创建文件夹、清空或者还原回收站和更改软件包状态等权限信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询多角色用户权限
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMultiRolesUserPermissions(showMultiRolesUserPermissionsRequest?: ShowMultiRolesUserPermissionsRequest): Promise<ShowMultiRolesUserPermissionsResponse> {
        const options = ParamCreater().showMultiRolesUserPermissions();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询中心仓是否启用，用于确定当前局点是否具备中心仓功能，从而确保业务流程的顺利进行。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询中心仓是否启用
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showOpenSourceEnabled(showOpenSourceEnabledRequest?: ShowOpenSourceEnabledRequest): Promise<ShowOpenSourceEnabledResponse> {
        const options = ParamCreater().showOpenSourceEnabled();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取当前用户的套餐信息，包含总存储容量和已使用存储容量等信息，以便合理规划资源使用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取当前用户的套餐信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPackageDataDetail(showPackageDataDetailRequest?: ShowPackageDataDetailRequest): Promise<ShowPackageDataDetailResponse> {
        const options = ParamCreater().showPackageDataDetail();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取当前用户的套餐状态，包含套餐扩展包的容量和流量规格，如资源类型、套餐状态、剩余天数等信息，帮助用户高效管理云资源。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取当前用户的套餐状态
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPackageInfo(showPackageInfoRequest?: ShowPackageInfoRequest): Promise<ShowPackageInfoResponse> {
        const options = ParamCreater().showPackageInfo();

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
     * 查询项目下的制品存储容量，包含已使用存储容量和文件数量等信息。在项目管理中，可以使用该接口监控项目下的制品存储情况，以确保资源的有效利用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目下的制品存储容量信息
     * @param {string} [parentId] **参数解释**： parent_id。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showProjectStorageInfo(showProjectStorageInfoRequest?: ShowProjectStorageInfoRequest): Promise<ShowProjectStorageInfoResponse> {
        const options = ParamCreater().showProjectStorageInfo(showProjectStorageInfoRequest);

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
     * 在自动化构建场景，用户可调用该接口查询租户私有依赖库的账号密码，以便进行后续的上传下载操作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户私有依赖库的账号密码
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRepoUserInfo(showRepoUserInfoRequest?: ShowRepoUserInfoRequest): Promise<ShowRepoUserInfoResponse> {
        const options = ParamCreater().showRepoUserInfo();

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
     * 查询用户在项目下的权限
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户在项目下的权限
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showUserPrivileges(showUserPrivilegesRequest?: ShowUserPrivilegesRequest): Promise<ShowUserPrivilegesResponse> {
        const options = ParamCreater().showUserPrivileges();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户凭证，该凭证为IDC用户下载制品时使用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户凭证
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showUserTicket(showUserTicketRequest?: ShowUserTicketRequest): Promise<ShowUserTicketResponse> {
        const options = ParamCreater().showUserTicket();

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
         * 根据文件ID彻底删除文件或文件夹，删除后不能恢复，支持批量删除。可使用该接口清理不再需要的文件或文件夹以释放存储空间。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCompletelyUpdateFileState(deleteCompletelyUpdateFileStateRequest?: DeleteCompletelyUpdateFileStateRequest) {
            const options = {
                method: "DELETE",
                url: "/devreposerver/v5/files/compeletion",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (deleteCompletelyUpdateFileStateRequest !== null && deleteCompletelyUpdateFileStateRequest !== undefined) {
                if (deleteCompletelyUpdateFileStateRequest instanceof DeleteCompletelyUpdateFileStateRequest) {
                    body = deleteCompletelyUpdateFileStateRequest.body
                } else {
                    body = deleteCompletelyUpdateFileStateRequest['body'];
                }
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
         * 查询租户容量消息通知设置，包含容量阈值和是否启用邮件通知等信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCapacityMessageSetting() {
            const options = {
                method: "GET",
                url: "/devreposerver/v5/capacity-notice/settings",
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
         * 根据仓库ID获取指定聚合仓的仓库代理列表，包含仓库状态、类型、地址和访问路径白名单等信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listChildProxyRepositoriesList(listChildProxyRepositoriesListRequest?: ListChildProxyRepositoriesListRequest) {
            const options = {
                method: "GET",
                url: "/cloudartifact/v5/repositories/proxy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let repoId;
            
            let type;

            if (listChildProxyRepositoriesListRequest !== null && listChildProxyRepositoriesListRequest !== undefined) {
                if (listChildProxyRepositoriesListRequest instanceof ListChildProxyRepositoriesListRequest) {
                    repoId = listChildProxyRepositoriesListRequest.repoId;
                    type = listChildProxyRepositoriesListRequest.type;
                } else {
                    repoId = listChildProxyRepositoriesListRequest['repo_id'];
                    type = listChildProxyRepositoriesListRequest['type'];
                }
            }

        
            if (repoId === null || repoId === undefined) {
                throw new RequiredError('repoId','Required parameter repoId was null or undefined when calling listChildProxyRepositoriesList.');
            }
            if (repoId !== null && repoId !== undefined) {
                localVarQueryParameter['repo_id'] = repoId;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户级IP白名单列表。在IP白名单的IP才能访问制品仓库，未配置IP白名单时，默认所有IP都可访问。该功能可用于保障制品仓库的安全，对访问IP进行严格控制。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDomainIpConfig(listDomainIpConfigRequest?: ListDomainIpConfigRequest) {
            const options = {
                method: "GET",
                url: "/cloudartifact/v5/domain/ipconfig",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let pageNo;
            
            let pageSize;

            if (listDomainIpConfigRequest !== null && listDomainIpConfigRequest !== undefined) {
                if (listDomainIpConfigRequest instanceof ListDomainIpConfigRequest) {
                    pageNo = listDomainIpConfigRequest.pageNo;
                    pageSize = listDomainIpConfigRequest.pageSize;
                } else {
                    pageNo = listDomainIpConfigRequest['page_no'];
                    pageSize = listDomainIpConfigRequest['page_size'];
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
         * 当归档包数量庞大时，分页查询构建归档包列表，包含文件名、文件大小、下载地址、MD5校验和、构建地址、构建代码分支等信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFileBuildArchives(listFileBuildArchivesRequest?: ListFileBuildArchivesRequest) {
            const options = {
                method: "GET",
                url: "/devreposerver/v5/files/archives",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let parentId;
            
            let buildId;
            
            let buildNo;
            
            let pageNo;
            
            let pageSize;
            
            let repoBranch;

            if (listFileBuildArchivesRequest !== null && listFileBuildArchivesRequest !== undefined) {
                if (listFileBuildArchivesRequest instanceof ListFileBuildArchivesRequest) {
                    parentId = listFileBuildArchivesRequest.parentId;
                    buildId = listFileBuildArchivesRequest.buildId;
                    buildNo = listFileBuildArchivesRequest.buildNo;
                    pageNo = listFileBuildArchivesRequest.pageNo;
                    pageSize = listFileBuildArchivesRequest.pageSize;
                    repoBranch = listFileBuildArchivesRequest.repoBranch;
                } else {
                    parentId = listFileBuildArchivesRequest['parent_id'];
                    buildId = listFileBuildArchivesRequest['build_id'];
                    buildNo = listFileBuildArchivesRequest['build_no'];
                    pageNo = listFileBuildArchivesRequest['page_no'];
                    pageSize = listFileBuildArchivesRequest['page_size'];
                    repoBranch = listFileBuildArchivesRequest['repo_branch'];
                }
            }

        
            if (parentId !== null && parentId !== undefined) {
                localVarQueryParameter['parent_id'] = parentId;
            }
            if (buildId !== null && buildId !== undefined) {
                localVarQueryParameter['build_id'] = buildId;
            }
            if (buildNo !== null && buildNo !== undefined) {
                localVarQueryParameter['build_no'] = buildNo;
            }
            if (pageNo !== null && pageNo !== undefined) {
                localVarQueryParameter['page_no'] = pageNo;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (repoBranch !== null && repoBranch !== undefined) {
                localVarQueryParameter['repo_branch'] = repoBranch;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当项目或文件数量庞大时，分页查询项目或文件列表。可根据文件名、文件状态和文件的发布状态等参数进行过滤，从而快速找到所需文件，包含文件名、文件大小和下载地址等信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFiles(listFilesRequest?: ListFilesRequest) {
            const options = {
                method: "POST",
                url: "/devreposerver/v5/files/list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (listFilesRequest !== null && listFilesRequest !== undefined) {
                if (listFilesRequest instanceof ListFilesRequest) {
                    body = listFilesRequest.body
                } else {
                    body = listFilesRequest['body'];
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
         * 当项目文件数量庞大时，通过该接口可以分页查询项目下所有文件的最新版本，包含文件名、文件大小、文件状态和发布状态等信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLatestVersionFiles(listLatestVersionFilesRequest?: ListLatestVersionFilesRequest) {
            const options = {
                method: "GET",
                url: "/devreposerver/v5/{project_id}/files/version",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let name;
            
            let sortBy;
            
            let sortDir;
            
            let offset;
            
            let limit;

            if (listLatestVersionFilesRequest !== null && listLatestVersionFilesRequest !== undefined) {
                if (listLatestVersionFilesRequest instanceof ListLatestVersionFilesRequest) {
                    name = listLatestVersionFilesRequest.name;
                    sortBy = listLatestVersionFilesRequest.sortBy;
                    sortDir = listLatestVersionFilesRequest.sortDir;
                    offset = listLatestVersionFilesRequest.offset;
                    limit = listLatestVersionFilesRequest.limit;
                } else {
                    name = listLatestVersionFilesRequest['name'];
                    sortBy = listLatestVersionFilesRequest['sort_by'];
                    sortDir = listLatestVersionFilesRequest['sort_dir'];
                    offset = listLatestVersionFilesRequest['offset'];
                    limit = listLatestVersionFilesRequest['limit'];
                }
            }

        
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (sortBy !== null && sortBy !== undefined) {
                localVarQueryParameter['sort_by'] = sortBy;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Maven仓库列表，包含仓库状态、类型、地址和访问路径白名单等信息。支持根据项目ID和仓库ID等参数进行过滤。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMavenList(listMavenListRequest?: ListMavenListRequest) {
            const options = {
                method: "GET",
                url: "/cloudartifact/v5/maven/list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let _default;
            
            let policy;
            
            let repoIds;
            
            let access;

            if (listMavenListRequest !== null && listMavenListRequest !== undefined) {
                if (listMavenListRequest instanceof ListMavenListRequest) {
                    _default = listMavenListRequest._default;
                    policy = listMavenListRequest.policy;
                    repoIds = listMavenListRequest.repoIds;
                    access = listMavenListRequest.access;
                } else {
                    _default = listMavenListRequest['default'];
                    policy = listMavenListRequest['policy'];
                    repoIds = listMavenListRequest['repo_ids'];
                    access = listMavenListRequest['access'];
                }
            }

        
            if (_default !== null && _default !== undefined) {
                localVarQueryParameter['default'] = _default;
            }
            if (policy !== null && policy !== undefined) {
                localVarQueryParameter['policy'] = policy;
            }
            if (repoIds !== null && repoIds !== undefined) {
                localVarQueryParameter['repo_ids'] = repoIds;
            }
            if (access !== null && access !== undefined) {
                localVarQueryParameter['access'] = access;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 分页查询私有库用户列表，包含用户名和用户是否启用等信息。可根据用户名进行过滤。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMavenUser(listMavenUserRequest?: ListMavenUserRequest) {
            const options = {
                method: "GET",
                url: "/cloudartifact/v5/repositories/users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let userName;
            
            let pageNo;
            
            let pageSize;

            if (listMavenUserRequest !== null && listMavenUserRequest !== undefined) {
                if (listMavenUserRequest instanceof ListMavenUserRequest) {
                    userName = listMavenUserRequest.userName;
                    pageNo = listMavenUserRequest.pageNo;
                    pageSize = listMavenUserRequest.pageSize;
                } else {
                    userName = listMavenUserRequest['user_name'];
                    pageNo = listMavenUserRequest['page_no'];
                    pageSize = listMavenUserRequest['page_size'];
                }
            }

        
            if (userName !== null && userName !== undefined) {
                localVarQueryParameter['user_name'] = userName;
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
         * 查询网络代理列表，返回代理源的访问地址及认证信息等，用于代理外部公开的制品资源。通过网络代理，开发人员可以安全、高效地访问所需的外部资源。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNetProxy() {
            const options = {
                method: "GET",
                url: "/cloudartifact/v5/tree/net/proxy",
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
         * 查看项目的角色权限设置，包含上传下载、创建文件夹、清空或者还原回收站和更改软件包状态等设置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProjectRolePermissions() {
            const options = {
                method: "GET",
                url: "/devreposerver/v5/project-role/permissions",
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
         * 当项目中的用户数量较多时，分页查询指定项目下的用户列表，包含用户名和角色等信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProjectUsers(listProjectUsersRequest?: ListProjectUsersRequest) {
            const options = {
                method: "GET",
                url: "/cloudartifact/v5/projects/{project_id}/users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let repoId;
            
            let scene;
            
            let pageNo;
            
            let pageSize;

            if (listProjectUsersRequest !== null && listProjectUsersRequest !== undefined) {
                if (listProjectUsersRequest instanceof ListProjectUsersRequest) {
                    repoId = listProjectUsersRequest.repoId;
                    scene = listProjectUsersRequest.scene;
                    pageNo = listProjectUsersRequest.pageNo;
                    pageSize = listProjectUsersRequest.pageSize;
                } else {
                    repoId = listProjectUsersRequest['repo_id'];
                    scene = listProjectUsersRequest['scene'];
                    pageNo = listProjectUsersRequest['page_no'];
                    pageSize = listProjectUsersRequest['page_size'];
                }
            }

        
            if (repoId === null || repoId === undefined) {
                throw new RequiredError('repoId','Required parameter repoId was null or undefined when calling listProjectUsers.');
            }
            if (repoId !== null && repoId !== undefined) {
                localVarQueryParameter['repo_id'] = repoId;
            }
            if (scene !== null && scene !== undefined) {
                localVarQueryParameter['scene'] = scene;
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
         * 分页查询制品安全扫描任务列表，包含扫描制品数量、漏洞数量、病毒文件数量和恶意代码文件数量等信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSecGuardList(listSecGuardListRequest?: ListSecGuardListRequest) {
            const options = {
                method: "GET",
                url: "/cloudartifact/v5/sec-guard/task/list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let date;
            
            let pageNo;
            
            let pageSize;

            if (listSecGuardListRequest !== null && listSecGuardListRequest !== undefined) {
                if (listSecGuardListRequest instanceof ListSecGuardListRequest) {
                    date = listSecGuardListRequest.date;
                    pageNo = listSecGuardListRequest.pageNo;
                    pageSize = listSecGuardListRequest.pageSize;
                } else {
                    date = listSecGuardListRequest['date'];
                    pageNo = listSecGuardListRequest['page_no'];
                    pageSize = listSecGuardListRequest['page_size'];
                }
            }

        
            if (date !== null && date !== undefined) {
                localVarQueryParameter['date'] = date;
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
         * 查询项目自动删除任务设置，包含文件的过期自动删除时间及删除规则。自动删除任务可以自动执行文件清理任务，减少管理员的工作负担，确保存储资源的有效利用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAutoDeleteJobSettings() {
            const options = {
                method: "GET",
                url: "/devreposerver/v5/release/{project_id}/auto-deletion/settings",
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
         * 查询租户发布库存储容量，包含已使用存储容量、最大存储容量、套餐类型和仓库数量等信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDomainReleaseRepoStorage() {
            const options = {
                method: "GET",
                url: "/devreposerver/v5/storage",
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
         * 在日常数据管理工作中，根据文件ID查询指定文件详情，包含文件名、文件大小、下载地址、校验和、文件状态和发布状态等信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showFileDetail(showFileDetailRequest?: ShowFileDetailRequest) {
            const options = {
                method: "GET",
                url: "/devreposerver/v5/files/{id}/info",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (showFileDetailRequest !== null && showFileDetailRequest !== undefined) {
                if (showFileDetailRequest instanceof ShowFileDetailRequest) {
                    id = showFileDetailRequest.id;
                } else {
                    id = showFileDetailRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showFileDetail.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在日常数据管理工作中，根据文件完整路径查询指定文件详情，包含文件名、文件大小、下载地址、校验和、文件状态和发布状态等信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showFileDetailByFullName(showFileDetailByFullNameRequest?: ShowFileDetailByFullNameRequest) {
            const options = {
                method: "GET",
                url: "/devreposerver/v5/files/info",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let fileName;

            if (showFileDetailByFullNameRequest !== null && showFileDetailByFullNameRequest !== undefined) {
                if (showFileDetailByFullNameRequest instanceof ShowFileDetailByFullNameRequest) {
                    fileName = showFileDetailByFullNameRequest.fileName;
                } else {
                    fileName = showFileDetailByFullNameRequest['file_name'];
                }
            }

        
            if (fileName === null || fileName === undefined) {
                throw new RequiredError('fileName','Required parameter fileName was null or undefined when calling showFileDetailByFullName.');
            }
            if (fileName !== null && fileName !== undefined) {
                localVarQueryParameter['file_name'] = fileName;
            }

            options.queryParams = localVarQueryParameter;
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
         * 查询项目下所有文件的数量，该接口会识别所有文件的最新版本，从而提供准确的文件数量统计。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showLatestVersionFilesCount(showLatestVersionFilesCountRequest?: ShowLatestVersionFilesCountRequest) {
            const options = {
                method: "GET",
                url: "/devreposerver/v5/{project_id}/files/version/count",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let name;

            if (showLatestVersionFilesCountRequest !== null && showLatestVersionFilesCountRequest !== undefined) {
                if (showLatestVersionFilesCountRequest instanceof ShowLatestVersionFilesCountRequest) {
                    name = showLatestVersionFilesCountRequest.name;
                } else {
                    name = showLatestVersionFilesCountRequest['name'];
                }
            }

        
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            options.queryParams = localVarQueryParameter;
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
         * 查询多角色用户权限，包含上传下载、创建文件夹、清空或者还原回收站和更改软件包状态等权限信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMultiRolesUserPermissions() {
            const options = {
                method: "GET",
                url: "/devreposerver/v5/user/permissions",
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
         * 查询中心仓是否启用，用于确定当前局点是否具备中心仓功能，从而确保业务流程的顺利进行。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showOpenSourceEnabled() {
            const options = {
                method: "GET",
                url: "/cloudartifact/v5/opensource/enabled",
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
         * 获取当前用户的套餐信息，包含总存储容量和已使用存储容量等信息，以便合理规划资源使用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPackageDataDetail() {
            const options = {
                method: "GET",
                url: "/devreposerver/v5/data/package",
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
         * 获取当前用户的套餐状态，包含套餐扩展包的容量和流量规格，如资源类型、套餐状态、剩余天数等信息，帮助用户高效管理云资源。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPackageInfo() {
            const options = {
                method: "GET",
                url: "/devreposerver/v5/data/package/info",
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
         * 查询项目下的制品存储容量，包含已使用存储容量和文件数量等信息。在项目管理中，可以使用该接口监控项目下的制品存储情况，以确保资源的有效利用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showProjectStorageInfo(showProjectStorageInfoRequest?: ShowProjectStorageInfoRequest) {
            const options = {
                method: "GET",
                url: "/devreposerver/v5/{project_id}/storage",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let parentId;

            if (showProjectStorageInfoRequest !== null && showProjectStorageInfoRequest !== undefined) {
                if (showProjectStorageInfoRequest instanceof ShowProjectStorageInfoRequest) {
                    parentId = showProjectStorageInfoRequest.parentId;
                } else {
                    parentId = showProjectStorageInfoRequest['parent_id'];
                }
            }

        
            if (parentId !== null && parentId !== undefined) {
                localVarQueryParameter['parent_id'] = parentId;
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
         * 在自动化构建场景，用户可调用该接口查询租户私有依赖库的账号密码，以便进行后续的上传下载操作。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRepoUserInfo() {
            const options = {
                method: "GET",
                url: "/cloudartifact/v5/repositories/user/info",
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
         * 查询用户在项目下的权限
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showUserPrivileges() {
            const options = {
                method: "GET",
                url: "/cloudartifact/v3/user/{project_id}/privileges",
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
         * 查询用户凭证，该凭证为IDC用户下载制品时使用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showUserTicket() {
            const options = {
                method: "GET",
                url: "/cloudartifact/v5/ticket",
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