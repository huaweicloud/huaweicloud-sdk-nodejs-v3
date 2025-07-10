import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AddDeployKeyRequest } from './model/AddDeployKeyRequest';
import { AddDeployKeyRequestBody } from './model/AddDeployKeyRequestBody';
import { AddDeployKeyResponse } from './model/AddDeployKeyResponse';
import { AddDeployKeyV2Request } from './model/AddDeployKeyV2Request';
import { AddDeployKeyV2Response } from './model/AddDeployKeyV2Response';
import { AddHooksRequest } from './model/AddHooksRequest';
import { AddHooksResponse } from './model/AddHooksResponse';
import { AddProtectAccessLevel } from './model/AddProtectAccessLevel';
import { AddProtectBranchV2Request } from './model/AddProtectBranchV2Request';
import { AddProtectBranchV2Response } from './model/AddProtectBranchV2Response';
import { AddProtectRequest } from './model/AddProtectRequest';
import { AddProtectResponse } from './model/AddProtectResponse';
import { AddRepoMembersRequest } from './model/AddRepoMembersRequest';
import { AddRepoMembersResponse } from './model/AddRepoMembersResponse';
import { AddSshKeyRequest } from './model/AddSshKeyRequest';
import { AddSshKeyRequestBody } from './model/AddSshKeyRequestBody';
import { AddSshKeyResponse } from './model/AddSshKeyResponse';
import { AddTagV2Request } from './model/AddTagV2Request';
import { AddTagV2Response } from './model/AddTagV2Response';
import { AddTagsRequest } from './model/AddTagsRequest';
import { AddTagsResponse } from './model/AddTagsResponse';
import { ApprovalActionTypeDto } from './model/ApprovalActionTypeDto';
import { ApprovalMergeRequestApproversItem } from './model/ApprovalMergeRequestApproversItem';
import { ApprovalUserDto } from './model/ApprovalUserDto';
import { ApproverBasicDto } from './model/ApproverBasicDto';
import { AssociateIssuesRequest } from './model/AssociateIssuesRequest';
import { AssociateIssuesRequestBody } from './model/AssociateIssuesRequestBody';
import { AssociateIssuesResponse } from './model/AssociateIssuesResponse';
import { Author } from './model/Author';
import { Branch } from './model/Branch';
import { BranchList } from './model/BranchList';
import { BranchResponse } from './model/BranchResponse';
import { BranchesItem } from './model/BranchesItem';
import { CategoryDto } from './model/CategoryDto';
import { Commit } from './model/Commit';
import { CommitAction } from './model/CommitAction';
import { CommitInfo } from './model/CommitInfo';
import { CommitList } from './model/CommitList';
import { CommitRepoV2 } from './model/CommitRepoV2';
import { CommitStatistic } from './model/CommitStatistic';
import { CommitV2 } from './model/CommitV2';
import { CreateCommitRequest } from './model/CreateCommitRequest';
import { CreateCommitRequestBody } from './model/CreateCommitRequestBody';
import { CreateCommitResponse } from './model/CreateCommitResponse';
import { CreateCommitResponseBody } from './model/CreateCommitResponseBody';
import { CreateCommitResponseBodyStats } from './model/CreateCommitResponseBodyStats';
import { CreateMergeRequestDiscussionBodyDto } from './model/CreateMergeRequestDiscussionBodyDto';
import { CreateMergeRequestDiscussionNoteDto } from './model/CreateMergeRequestDiscussionNoteDto';
import { CreateMergeRequestDiscussionNoteRequest } from './model/CreateMergeRequestDiscussionNoteRequest';
import { CreateMergeRequestDiscussionNoteResponse } from './model/CreateMergeRequestDiscussionNoteResponse';
import { CreateMergeRequestDiscussionRequest } from './model/CreateMergeRequestDiscussionRequest';
import { CreateMergeRequestDiscussionResponse } from './model/CreateMergeRequestDiscussionResponse';
import { CreateNewBranchRequest } from './model/CreateNewBranchRequest';
import { CreateNewBranchRequestBody } from './model/CreateNewBranchRequestBody';
import { CreateNewBranchResponse } from './model/CreateNewBranchResponse';
import { CreateProjectAndRepositoriesRequest } from './model/CreateProjectAndRepositoriesRequest';
import { CreateProjectAndRepositoriesResponse } from './model/CreateProjectAndRepositoriesResponse';
import { CreateProjectAndforkRepositoriesRequest } from './model/CreateProjectAndforkRepositoriesRequest';
import { CreateProjectAndforkRepositoriesResponse } from './model/CreateProjectAndforkRepositoriesResponse';
import { CreateProjectRepoRequest } from './model/CreateProjectRepoRequest';
import { CreateRepoMemberRequest } from './model/CreateRepoMemberRequest';
import { CreateRepoMemberResult } from './model/CreateRepoMemberResult';
import { CreateRepoRequest } from './model/CreateRepoRequest';
import { CreateRepositoryRequest } from './model/CreateRepositoryRequest';
import { CreateRepositoryResponse } from './model/CreateRepositoryResponse';
import { DeleteDeployKeyRequest } from './model/DeleteDeployKeyRequest';
import { DeleteDeployKeyResponse } from './model/DeleteDeployKeyResponse';
import { DeleteDeployKeyV2Request } from './model/DeleteDeployKeyV2Request';
import { DeleteDeployKeyV2Response } from './model/DeleteDeployKeyV2Response';
import { DeleteHooksRequest } from './model/DeleteHooksRequest';
import { DeleteHooksResponse } from './model/DeleteHooksResponse';
import { DeleteRepoMemberRequest } from './model/DeleteRepoMemberRequest';
import { DeleteRepoMemberResponse } from './model/DeleteRepoMemberResponse';
import { DeleteRepositoryRequest } from './model/DeleteRepositoryRequest';
import { DeleteRepositoryResponse } from './model/DeleteRepositoryResponse';
import { DeleteSShkeyRequest } from './model/DeleteSShkeyRequest';
import { DeleteSShkeyResponse } from './model/DeleteSShkeyResponse';
import { DevstarRepoInfo } from './model/DevstarRepoInfo';
import { DiffCommitInfo } from './model/DiffCommitInfo';
import { DiffRefsDto } from './model/DiffRefsDto';
import { DivergingCommitCounts } from './model/DivergingCommitCounts';
import { Empty } from './model/Empty';
import { ExternalKeyMessage } from './model/ExternalKeyMessage';
import { FileContentInfo } from './model/FileContentInfo';
import { FilesResponseInfo } from './model/FilesResponseInfo';
import { ForkProjectRepoRequest } from './model/ForkProjectRepoRequest';
import { GetAllRepositoryByProjectIdRequest } from './model/GetAllRepositoryByProjectIdRequest';
import { GetAllRepositoryByProjectIdResponse } from './model/GetAllRepositoryByProjectIdResponse';
import { GetProductTemplatesRequest } from './model/GetProductTemplatesRequest';
import { GetProductTemplatesResponse } from './model/GetProductTemplatesResponse';
import { GetRepositoryByProjectIdRequest } from './model/GetRepositoryByProjectIdRequest';
import { GetRepositoryByProjectIdResponse } from './model/GetRepositoryByProjectIdResponse';
import { GetTemplatesRequest } from './model/GetTemplatesRequest';
import { GetTemplatesResponse } from './model/GetTemplatesResponse';
import { Key } from './model/Key';
import { ListBranchesByRepositoryIdRequest } from './model/ListBranchesByRepositoryIdRequest';
import { ListBranchesByRepositoryIdResponse } from './model/ListBranchesByRepositoryIdResponse';
import { ListCommitStatisticsRequest } from './model/ListCommitStatisticsRequest';
import { ListCommitStatisticsResponse } from './model/ListCommitStatisticsResponse';
import { ListCommitsRequest } from './model/ListCommitsRequest';
import { ListCommitsResponse } from './model/ListCommitsResponse';
import { ListFilesByQueryRequest } from './model/ListFilesByQueryRequest';
import { ListFilesByQueryResponse } from './model/ListFilesByQueryResponse';
import { ListFilesRequest } from './model/ListFilesRequest';
import { ListFilesResponse } from './model/ListFilesResponse';
import { ListHooksRequest } from './model/ListHooksRequest';
import { ListHooksResponse } from './model/ListHooksResponse';
import { ListMergeChangesRequest } from './model/ListMergeChangesRequest';
import { ListMergeChangesResponse } from './model/ListMergeChangesResponse';
import { ListMergeChangesTreesRequest } from './model/ListMergeChangesTreesRequest';
import { ListMergeChangesTreesResponse } from './model/ListMergeChangesTreesResponse';
import { ListMergeRequestRequest } from './model/ListMergeRequestRequest';
import { ListMergeRequestResponse } from './model/ListMergeRequestResponse';
import { ListMergeRequestReviewersRequest } from './model/ListMergeRequestReviewersRequest';
import { ListMergeRequestReviewersResponse } from './model/ListMergeRequestReviewersResponse';
import { ListProductTwoTemplatesRequest } from './model/ListProductTwoTemplatesRequest';
import { ListProductTwoTemplatesResponse } from './model/ListProductTwoTemplatesResponse';
import { ListRelatedCommitsRequest } from './model/ListRelatedCommitsRequest';
import { ListRelatedCommitsResponse } from './model/ListRelatedCommitsResponse';
import { ListRepoMembersRequest } from './model/ListRepoMembersRequest';
import { ListRepoMembersResponse } from './model/ListRepoMembersResponse';
import { ListRepositoryStatusRequest } from './model/ListRepositoryStatusRequest';
import { ListRepositoryStatusResponse } from './model/ListRepositoryStatusResponse';
import { ListSshKeysRequest } from './model/ListSshKeysRequest';
import { ListSshKeysResponse } from './model/ListSshKeysResponse';
import { ListSubfilesRequest } from './model/ListSubfilesRequest';
import { ListSubfilesResponse } from './model/ListSubfilesResponse';
import { ListTemplatesTwoRequest } from './model/ListTemplatesTwoRequest';
import { ListTemplatesTwoResponse } from './model/ListTemplatesTwoResponse';
import { ListTwoTemplatesRequest } from './model/ListTwoTemplatesRequest';
import { ListTwoTemplatesResponse } from './model/ListTwoTemplatesResponse';
import { ListUserAllRepositoriesRequest } from './model/ListUserAllRepositoriesRequest';
import { ListUserAllRepositoriesResponse } from './model/ListUserAllRepositoriesResponse';
import { LogsTree } from './model/LogsTree';
import { LogsTreeList } from './model/LogsTreeList';
import { MergeChangesTrees } from './model/MergeChangesTrees';
import { MergeChangesTreesDto } from './model/MergeChangesTreesDto';
import { MergeInfoResult } from './model/MergeInfoResult';
import { MergeRequestApprovalReviewersDto } from './model/MergeRequestApprovalReviewersDto';
import { MergeRequestAssigneeListItem } from './model/MergeRequestAssigneeListItem';
import { MergeRequestBasicDiscussionDto } from './model/MergeRequestBasicDiscussionDto';
import { MergeRequestDiff } from './model/MergeRequestDiff';
import { MergeRequestDiffFileDto } from './model/MergeRequestDiffFileDto';
import { MergeRequestDiscussionDto } from './model/MergeRequestDiscussionDto';
import { MergeRequestListDtoUser } from './model/MergeRequestListDtoUser';
import { MergeRequestVersionParamsDto } from './model/MergeRequestVersionParamsDto';
import { MergeRequestsItem } from './model/MergeRequestsItem';
import { MergeResult } from './model/MergeResult';
import { ModelError } from './model/ModelError';
import { NamespaceBasicDto } from './model/NamespaceBasicDto';
import { NoteDto } from './model/NoteDto';
import { PasswordRequest } from './model/PasswordRequest';
import { PipelineBasicDto } from './model/PipelineBasicDto';
import { PositionDto } from './model/PositionDto';
import { PrivateKeyVerify } from './model/PrivateKeyVerify';
import { ProjectRepository } from './model/ProjectRepository';
import { ProjectSimpleDto } from './model/ProjectSimpleDto';
import { PublicKey } from './model/PublicKey';
import { PublicKeyList } from './model/PublicKeyList';
import { RelatedCommitListVo } from './model/RelatedCommitListVo';
import { RelatedCommitVo } from './model/RelatedCommitVo';
import { RepoCommitStatistics } from './model/RepoCommitStatistics';
import { RepoDailyCodeline } from './model/RepoDailyCodeline';
import { RepoHook } from './model/RepoHook';
import { RepoInfo } from './model/RepoInfo';
import { RepoInfoV2 } from './model/RepoInfoV2';
import { RepoListHook } from './model/RepoListHook';
import { RepoListInfo } from './model/RepoListInfo';
import { RepoListInfoV2 } from './model/RepoListInfoV2';
import { RepoMemberInfo } from './model/RepoMemberInfo';
import { RepoStatistics } from './model/RepoStatistics';
import { RepoStatisticsEvent } from './model/RepoStatisticsEvent';
import { RepoStatisticsLaunch } from './model/RepoStatisticsLaunch';
import { Repository } from './model/Repository';
import { RepositoryHookRequest } from './model/RepositoryHookRequest';
import { RepositoryMember } from './model/RepositoryMember';
import { RepositoryMemberList } from './model/RepositoryMemberList';
import { RepositoryStatisticsVO } from './model/RepositoryStatisticsVO';
import { RepositoryTemplateVO } from './model/RepositoryTemplateVO';
import { RepositoryTemplateVO2 } from './model/RepositoryTemplateVO2';
import { ResponseMergeRequestChanges } from './model/ResponseMergeRequestChanges';
import { ReviewSettingDto } from './model/ReviewSettingDto';
import { SetRepoRoleRequest } from './model/SetRepoRoleRequest';
import { SetRepoRoleRequestBody } from './model/SetRepoRoleRequestBody';
import { SetRepoRoleResponse } from './model/SetRepoRoleResponse';
import { ShareTemplatesRequest } from './model/ShareTemplatesRequest';
import { ShareTemplatesResponse } from './model/ShareTemplatesResponse';
import { ShowAllRepositoryByTwoProjectIdRequest } from './model/ShowAllRepositoryByTwoProjectIdRequest';
import { ShowAllRepositoryByTwoProjectIdResponse } from './model/ShowAllRepositoryByTwoProjectIdResponse';
import { ShowBranchesByRepositoryIdRequest } from './model/ShowBranchesByRepositoryIdRequest';
import { ShowBranchesByRepositoryIdResponse } from './model/ShowBranchesByRepositoryIdResponse';
import { ShowBranchesByTwoRepositoryIdRequest } from './model/ShowBranchesByTwoRepositoryIdRequest';
import { ShowBranchesByTwoRepositoryIdResponse } from './model/ShowBranchesByTwoRepositoryIdResponse';
import { ShowCommitsByBranchRequest } from './model/ShowCommitsByBranchRequest';
import { ShowCommitsByBranchResponse } from './model/ShowCommitsByBranchResponse';
import { ShowCommitsByRepoIdRequest } from './model/ShowCommitsByRepoIdRequest';
import { ShowCommitsByRepoIdResponse } from './model/ShowCommitsByRepoIdResponse';
import { ShowDiffCommitRequest } from './model/ShowDiffCommitRequest';
import { ShowDiffCommitResponse } from './model/ShowDiffCommitResponse';
import { ShowFileRequest } from './model/ShowFileRequest';
import { ShowFileResponse } from './model/ShowFileResponse';
import { ShowHasPipelineRequest } from './model/ShowHasPipelineRequest';
import { ShowHasPipelineResponse } from './model/ShowHasPipelineResponse';
import { ShowImageBlobRequest } from './model/ShowImageBlobRequest';
import { ShowImageBlobResponse } from './model/ShowImageBlobResponse';
import { ShowMasterRequest } from './model/ShowMasterRequest';
import { ShowMasterResponse } from './model/ShowMasterResponse';
import { ShowMergeRequestRequest } from './model/ShowMergeRequestRequest';
import { ShowMergeRequestResponse } from './model/ShowMergeRequestResponse';
import { ShowPrivateKeyVerifyRequest } from './model/ShowPrivateKeyVerifyRequest';
import { ShowPrivateKeyVerifyResponse } from './model/ShowPrivateKeyVerifyResponse';
import { ShowRepoIdRequest } from './model/ShowRepoIdRequest';
import { ShowRepoIdResponse } from './model/ShowRepoIdResponse';
import { ShowRepositoryArchiveRequest } from './model/ShowRepositoryArchiveRequest';
import { ShowRepositoryArchiveResponse } from './model/ShowRepositoryArchiveResponse';
import { ShowRepositoryByUuidRequest } from './model/ShowRepositoryByUuidRequest';
import { ShowRepositoryByUuidResponse } from './model/ShowRepositoryByUuidResponse';
import { ShowRepositoryNameExistRequest } from './model/ShowRepositoryNameExistRequest';
import { ShowRepositoryNameExistResponse } from './model/ShowRepositoryNameExistResponse';
import { ShowRepositoryStatisticsRequest } from './model/ShowRepositoryStatisticsRequest';
import { ShowRepositoryStatisticsRequestBody } from './model/ShowRepositoryStatisticsRequestBody';
import { ShowRepositoryStatisticsResponse } from './model/ShowRepositoryStatisticsResponse';
import { ShowReviewSettingRequest } from './model/ShowReviewSettingRequest';
import { ShowReviewSettingResponse } from './model/ShowReviewSettingResponse';
import { ShowSingleCommitRequest } from './model/ShowSingleCommitRequest';
import { ShowSingleCommitResponse } from './model/ShowSingleCommitResponse';
import { ShowStatisticCommitRequest } from './model/ShowStatisticCommitRequest';
import { ShowStatisticCommitResponse } from './model/ShowStatisticCommitResponse';
import { ShowStatisticCommitV3Request } from './model/ShowStatisticCommitV3Request';
import { ShowStatisticCommitV3Response } from './model/ShowStatisticCommitV3Response';
import { ShowStatisticalDataRequest } from './model/ShowStatisticalDataRequest';
import { ShowStatisticalDataResponse } from './model/ShowStatisticalDataResponse';
import { SpecificCommitInfo } from './model/SpecificCommitInfo';
import { SpecificCommitInfoLastPipeline } from './model/SpecificCommitInfoLastPipeline';
import { SpecificCommitInfoStats } from './model/SpecificCommitInfoStats';
import { Tag } from './model/Tag';
import { TagList } from './model/TagList';
import { TemplateListInfo } from './model/TemplateListInfo';
import { TemplateRepository } from './model/TemplateRepository';
import { TemplateRepositoryList } from './model/TemplateRepositoryList';
import { UpdateMergeRequestApprovalStateRequest } from './model/UpdateMergeRequestApprovalStateRequest';
import { UpdateMergeRequestApprovalStateResponse } from './model/UpdateMergeRequestApprovalStateResponse';
import { UserBasicDto } from './model/UserBasicDto';
import { UserSafeDto } from './model/UserSafeDto';
import { ValidateHttpsInfoRequest } from './model/ValidateHttpsInfoRequest';
import { ValidateHttpsInfoResponse } from './model/ValidateHttpsInfoResponse';
import { ValidateHttpsInfoV2Request } from './model/ValidateHttpsInfoV2Request';
import { ValidateHttpsInfoV2Response } from './model/ValidateHttpsInfoV2Response';

export class CodeHubClient {
    public static newBuilder(): ClientBuilder<CodeHubClient> {
            let client = new ClientBuilder<CodeHubClient>(newClient);
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
     * 能够一次提交位于不同目录的多个文件，目录不存在时，能自动创建目录。支持强制覆盖选项，当选择强制覆盖标志为true时，忽略冲突，强制提交。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建提交
     * @param {number} repoId 仓库短id
     * @param {CreateCommitRequestBody} createCommitRequestBody 创建的提交信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCommit(createCommitRequest?: CreateCommitRequest): Promise<CreateCommitResponse> {
        const options = ParamCreater().createCommit(createCommitRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据仓库短ID获取提交信息，支持根据文件路径，查询这个路径下所有的commits列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询某个仓库的提交信息
     * @param {number} repoId 仓库短id
     * @param {string} [refName] 仓库的branch名或tag名，如果为空则查询默认分支
     * @param {string} [since] 在此日期之后或当天提交，格式 YYYY-MM-DDTHH:MM:SSZ
     * @param {string} [until] 在此日期之前或当天提交，格式 YYYY-MM-DDTHH:MM:SSZ
     * @param {string} [path] 文件路径
     * @param {boolean} [all] 是否检索仓库中每个提交
     * @param {boolean} [withStats] 有关每个提交的统计信息是否添加到响应中
     * @param {number} [page] 页码
     * @param {number} [perPage] 每页条目数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCommits(listCommitsRequest?: ListCommitsRequest): Promise<ListCommitsResponse> {
        const options = ParamCreater().listCommits(listCommitsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据commit id查询提交差异信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询某个仓库的提交差异信息
     * @param {number} repoId 仓库短id
     * @param {string} sha commit id，仓库的branch名或tag名
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDiffCommit(showDiffCommitRequest?: ShowDiffCommitRequest): Promise<ShowDiffCommitResponse> {
        const options = ParamCreater().showDiffCommit(showDiffCommitRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取由commit id或分支或标记的名称标识的特定提交。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询某个仓库的特定提交信息
     * @param {number} repoId 仓库短id
     * @param {string} sha commit id，仓库的branch名或tag名
     * @param {boolean} [stats] 包括提交统计信息。默认值为true
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSingleCommit(showSingleCommitRequest?: ShowSingleCommitRequest): Promise<ShowSingleCommitResponse> {
        const options = ParamCreater().showSingleCommit(showSingleCommitRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建MR检视意见
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建MR检视意见
     * @param {number} repositoryId 仓库短id
     * @param {number} mergeRequestIid 合并请求iid
     * @param {CreateMergeRequestDiscussionBodyDto} createMergeRequestDiscussionRequestBody 检视意见内容
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createMergeRequestDiscussion(createMergeRequestDiscussionRequest?: CreateMergeRequestDiscussionRequest): Promise<CreateMergeRequestDiscussionResponse> {
        const options = ParamCreater().createMergeRequestDiscussion(createMergeRequestDiscussionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 回复MR检视意见
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 回复MR检视意见
     * @param {number} repositoryId 仓库短id
     * @param {number} mergeRequestIid 合并请求iid
     * @param {string} discussionId 评论id
     * @param {CreateMergeRequestDiscussionNoteDto} createMergeRequestDiscussionNoteRequestBody 检视意见内容
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createMergeRequestDiscussionNote(createMergeRequestDiscussionNoteRequest?: CreateMergeRequestDiscussionNoteRequest): Promise<CreateMergeRequestDiscussionNoteResponse> {
        const options = ParamCreater().createMergeRequestDiscussionNote(createMergeRequestDiscussionNoteRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取检视意见设置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取检视意见设置
     * @param {number} repositoryId 仓库短id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showReviewSetting(showReviewSettingRequest?: ShowReviewSettingRequest): Promise<ShowReviewSettingResponse> {
        const options = ParamCreater().showReviewSetting(showReviewSettingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取仓库中文件的信息，如名称、大小、内容。请注意，文件内容是Base64编码的。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询某个仓库的文件信息
     * @param {number} repoId 仓库短id
     * @param {string} filePath 文件的完整路径。
     * @param {string} ref commit id，仓库的branch名或tag名
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFilesByQuery(listFilesByQueryRequest?: ListFilesByQueryRequest): Promise<ListFilesByQueryResponse> {
        const options = ParamCreater().listFilesByQuery(listFilesByQueryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取仓库中文件的信息，如名称、大小、内容。请注意，文件内容是Base64编码的。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询某个仓库的文件信息
     * @param {number} repoId 仓库短id
     * @param {string} filePath Url编码的新文件的完整路径。
     * @param {string} ref commit id，仓库的branch名或tag名
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFile(showFileRequest?: ShowFileRequest): Promise<ShowFileResponse> {
        const options = ParamCreater().showFile(showFileRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取仓库列表 模糊查询支持范围,如果未传入project_id，则支持按仓库名或项目名模糊查询，否则，只按仓库名模糊匹配。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取项目下所有仓库信息
     * @param {string} projectUuid 项目ID，获取方式请参见[获取项目ID](codehub_api_0014.xml)。
     * @param {number} [pageIndex] 分页索引，从1开始计数
     * @param {number} [pageSize] 每页条目数
     * @param {string} [search] 搜索关键字
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getAllRepositoryByProjectId(getAllRepositoryByProjectIdRequest?: GetAllRepositoryByProjectIdRequest): Promise<GetAllRepositoryByProjectIdResponse> {
        const options = ParamCreater().getAllRepositoryByProjectId(getAllRepositoryByProjectIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取一个项目下可以设置为公开状态的仓库列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取一个项目下可以设置为公开状态的仓库列表
     * @param {string} projectUuid 项目ID，获取方式请参见[获取项目ID](codehub_api_0014.xml)。
     * @param {number} [pageNo] 分页页数
     * @param {number} [pageSize] 每页数据数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getProductTemplates(getProductTemplatesRequest?: GetProductTemplatesRequest): Promise<GetProductTemplatesResponse> {
        const options = ParamCreater().getProductTemplates(getProductTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取一个项目下可以设置为公开状态的仓库列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取一个项目下可以设置为公开状态的仓库列表
     * @param {string} projectUuid 项目ID，获取方式请参见[获取项目ID](codehub_api_0014.xml)。
     * @param {number} [pageNo] 分页页数
     * @param {number} [pageSize] 每页数据数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProductTwoTemplates(listProductTwoTemplatesRequest?: ListProductTwoTemplatesRequest): Promise<ListProductTwoTemplatesResponse> {
        const options = ParamCreater().listProductTwoTemplates(listProductTwoTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 一般创建仓库时调用。通过传入项目ID，获取方式请参见[获取项目ID](codehub_api_0014.xml)。,仓库名，来判断仓库是否重名。仓库存在result:false,仓库不存在result:true。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 校验指定项目下的仓库名
     * @param {string} projectUuid 项目ID，获取方式请参见[获取项目ID](codehub_api_0014.xml)。
     * @param {string} repositoryName 仓库名
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRepositoryNameExist(showRepositoryNameExistRequest?: ShowRepositoryNameExistRequest): Promise<ShowRepositoryNameExistResponse> {
        const options = ParamCreater().showRepositoryNameExist(showRepositoryNameExistRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加仓库成员。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加仓库成员
     * @param {string} repositoryUuid 仓库uuid(由CreateRepository接口返回)
     * @param {CreateRepoMemberRequest} createRepoMemberRequest 添加的成员的信息,
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addRepoMembers(addRepoMembersRequest?: AddRepoMembersRequest): Promise<AddRepoMembersResponse> {
        const options = ParamCreater().addRepoMembers(addRepoMembersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除仓库成员
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除仓库成员
     * @param {string} memberId 仓库成员id
     * @param {string} repositoryUuid 仓库uuid(由CreateRepository接口返回)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRepoMember(deleteRepoMemberRequest?: DeleteRepoMemberRequest): Promise<DeleteRepoMemberResponse> {
        const options = ParamCreater().deleteRepoMember(deleteRepoMemberRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取仓库成员列表,可通过关键字搜索某成员。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取仓库所有成员记录
     * @param {string} repositoryUuid 仓库uuid(由CreateRepository接口返回)
     * @param {number} [pageIndex] 第几页
     * @param {number} [pageSize] 每页显示size
     * @param {string} [subject] 搜索关键字
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRepoMembers(listRepoMembersRequest?: ListRepoMembersRequest): Promise<ListRepoMembersResponse> {
        const options = ParamCreater().listRepoMembers(listRepoMembersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 给仓库中成员设置仓库的操作权限，
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置成员在仓库中的角色
     * @param {string} memberId 用户id
     * @param {string} repositoryUuid 仓库uuid(由CreateRepository接口返回)
     * @param {SetRepoRoleRequestBody} setRepoRoleRequest 设置仓库的成员权限，取值范围：30-&gt;普通成员，40-&gt;管理员
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setRepoRole(setRepoRoleRequest?: SetRepoRoleRequest): Promise<SetRepoRoleResponse> {
        const options = ParamCreater().setRepoRole(setRepoRoleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加部署密钥
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加部署密钥
     * @param {number} repositoryId 仓库短id
     * @param {AddDeployKeyRequestBody} addDeployKeyRequest addDeployKeyRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addDeployKey(addDeployKeyRequest?: AddDeployKeyRequest): Promise<AddDeployKeyResponse> {
        const options = ParamCreater().addDeployKey(addDeployKeyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加部署密钥
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加部署密钥
     * @param {number} repositoryId 仓库主键id
     * @param {AddDeployKeyRequestBody} addDeployKeyRequest addDeployKeyRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addDeployKeyV2(addDeployKeyV2Request?: AddDeployKeyV2Request): Promise<AddDeployKeyV2Response> {
        const options = ParamCreater().addDeployKeyV2(addDeployKeyV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 新建保护分支
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新建保护分支
     * @param {number} repositoryId 仓库主键id
     * @param {string} branchName 分支名称
     * @param {AddProtectRequest} addProtectRequest addProtectRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addProtectBranchV2(addProtectBranchV2Request?: AddProtectBranchV2Request): Promise<AddProtectBranchV2Response> {
        const options = ParamCreater().addProtectBranchV2(addProtectBranchV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 新建标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新建标签
     * @param {number} repositoryId 仓库主键id
     * @param {AddTagsRequest} addTagsRequest addTagsRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addTagV2(addTagV2Request?: AddTagV2Request): Promise<AddTagV2Response> {
        const options = ParamCreater().addTagV2(addTagV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用指定的名称在指定项目上创建仓库。传入参数：仓库名、模板id、是否导入项目成员、归属项目
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建仓库
     * @param {CreateRepoRequest} createRepoRequest 创建仓库的相关信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRepository(createRepositoryRequest?: CreateRepositoryRequest): Promise<CreateRepositoryResponse> {
        const options = ParamCreater().createRepository(createRepositoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除仓库部署密钥
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除仓库部署密钥
     * @param {number} keyId 部署密钥id
     * @param {number} repositoryId 仓库短id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDeployKey(deleteDeployKeyRequest?: DeleteDeployKeyRequest): Promise<DeleteDeployKeyResponse> {
        const options = ParamCreater().deleteDeployKey(deleteDeployKeyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除仓库部署密钥
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除仓库部署密钥
     * @param {number} keyId 部署密钥id
     * @param {number} repositoryId 仓库主键id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDeployKeyV2(deleteDeployKeyV2Request?: DeleteDeployKeyV2Request): Promise<DeleteDeployKeyV2Response> {
        const options = ParamCreater().deleteDeployKeyV2(deleteDeployKeyV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据仓库32位uuid删除指定的仓库
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除仓库
     * @param {string} repositoryUuid 仓库uuid(由CreateRepository接口返回)，用来指定删除的仓库
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
     * 不建议再使用,建议使用/{repository_uuid}/status
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目下的某个仓库
     * @param {string} repositoryUuid 仓库的uuid,用来指定需要查看的仓库
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getRepositoryByProjectId(getRepositoryByProjectIdRequest?: GetRepositoryByProjectIdRequest): Promise<GetRepositoryByProjectIdResponse> {
        const options = ParamCreater().getRepositoryByProjectId(getRepositoryByProjectIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取公开示例模板列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取公开示例模板列表
     * @param {number} pageNo 分页页数
     * @param {number} pageSize 每页数据数
     * @param {string} [platform] 模板平台类型
     * @param {string} [language] 语言类型
     * @param {string} [pipeline] 是否支持流水线
     * @param {string} [entertype] 模板分类
     * @param {string} [search] 模板名称
     * @param {string} [dateorder] 模板日期排序
     * @param {string} [usedtimeorder] 模板引用次数排序
     * @param {string} [type] 模板公开类型
     * @param {string} [region] 大区名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getTemplates(getTemplatesRequest?: GetTemplatesRequest): Promise<GetTemplatesResponse> {
        const options = ParamCreater().getTemplates(getTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取仓库分支列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取仓库分支列表
     * @param {number} repositoryId 仓库短id
     * @param {string} [page] 分页页数
     * @param {string} [perPage] 每页数据数
     * @param {string} [match] 匹配条件
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBranchesByRepositoryId(listBranchesByRepositoryIdRequest?: ListBranchesByRepositoryIdRequest): Promise<ListBranchesByRepositoryIdResponse> {
        const options = ParamCreater().listBranchesByRepositoryId(listBranchesByRepositoryIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取仓库上一次的提交统计信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取仓库上一次的提交统计信息
     * @param {string} branchName 分支名
     * @param {string} repositoryId 仓库的主键id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCommitStatistics(listCommitStatisticsRequest?: ListCommitStatisticsRequest): Promise<ListCommitStatisticsResponse> {
        const options = ParamCreater().listCommitStatistics(listCommitStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取一个仓库下特定分支指定文件内容
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取一个仓库下特定分支指定文件内容
     * @param {string} repositoryUuid 仓库id
     * @param {string} branchName 分支名称
     * @param {string} path 文件路径
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
     * 获取变更文件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取变更文件
     * @param {number} repositoryId 仓库主键id
     * @param {string} mergeRequestIid MR长id
     * @param {string} [filePath] 文件路径
     * @param {boolean} [ignoreWhitespaceChange] 是否无视空格
     * @param {boolean} [forceEncode] 是否需要编码
     * @param {'simple'} [view] 是否为建议视图
     * @param {string} [commitId] commit的id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMergeChanges(listMergeChangesRequest?: ListMergeChangesRequest): Promise<ListMergeChangesResponse> {
        const options = ParamCreater().listMergeChanges(listMergeChangesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取变更文件列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取变更文件列表
     * @param {number} repositoryId 仓库主键id
     * @param {string} mergeRequestIid MR长id
     * @param {'simple'} [view] 是否为简易视图
     * @param {string} [commitId] commit的id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMergeChangesTrees(listMergeChangesTreesRequest?: ListMergeChangesTreesRequest): Promise<ListMergeChangesTreesResponse> {
        const options = ParamCreater().listMergeChangesTrees(listMergeChangesTreesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取仓库合并请求列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取仓库合并请求列表
     * @param {number} repositoryId 仓库短id
     * @param {string} [state] 匹配条件
     * @param {string} [page] 分页页数
     * @param {string} [perPage] 每页数据数
     * @param {string} [search] 匹配条件
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMergeRequest(listMergeRequestRequest?: ListMergeRequestRequest): Promise<ListMergeRequestResponse> {
        const options = ParamCreater().listMergeRequest(listMergeRequestRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据仓库短ID和合并请求短ID获取检视人信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据仓库短ID和合并请求短ID获取检视人信息
     * @param {string} repositoryId 仓库的主键id
     * @param {number} mergeRequestIid 合并请求的短id
     * @param {number} [page] 页码
     * @param {number} [perPage] 每页条数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMergeRequestReviewers(listMergeRequestReviewersRequest?: ListMergeRequestReviewersRequest): Promise<ListMergeRequestReviewersResponse> {
        const options = ParamCreater().listMergeRequestReviewers(listMergeRequestReviewersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取关联工作项信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取关联工作项信息
     * @param {string} repositoryUuid 仓库长id
     * @param {number} [type] 关联工作项类型
     * @param {string} [search] 查询关键字
     * @param {number} [page] 页码
     * @param {number} [perPage] 每页数量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRelatedCommits(listRelatedCommitsRequest?: ListRelatedCommitsRequest): Promise<ListRelatedCommitsResponse> {
        const options = ParamCreater().listRelatedCommits(listRelatedCommitsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取仓库状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看仓库的创建状态
     * @param {string} repositoryUuid 仓库的uuid,用来指定需要查看的仓库
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRepositoryStatus(listRepositoryStatusRequest?: ListRepositoryStatusRequest): Promise<ListRepositoryStatusResponse> {
        const options = ParamCreater().listRepositoryStatus(listRepositoryStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取分支目录下的文件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取分支目录下的文件
     * @param {string} repositoryUuid 仓库id
     * @param {string} branchName 分支名称
     * @param {string} [path] 文件路径
     * @param {number} [offset] 偏移量
     * @param {number} [limit] 记录数量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSubfiles(listSubfilesRequest?: ListSubfilesRequest): Promise<ListSubfilesResponse> {
        const options = ParamCreater().listSubfiles(listSubfilesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置仓库是公开状态还是私有状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置仓库是公开状态还是私有状态
     * @param {string} repositoryUuid 仓库id
     * @param {RepositoryTemplateVO2} repositoryTemplateVO2 将模板分享为公开示例模板实体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTemplatesTwo(listTemplatesTwoRequest?: ListTemplatesTwoRequest): Promise<ListTemplatesTwoResponse> {
        const options = ParamCreater().listTemplatesTwo(listTemplatesTwoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取公开示例模板列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取公开示例模板列表
     * @param {number} pageNo 分页页数
     * @param {number} pageSize 每页数据数
     * @param {string} [platform] 模板平台类型
     * @param {string} [language] 语言类型
     * @param {string} [pipeline] 是否支持流水线
     * @param {string} [enterType] 模板分类
     * @param {string} [search] 模板名称
     * @param {string} [dateOrder] 模板日期排序
     * @param {string} [usedTimeOrder] 模板引用次数排序
     * @param {string} [type] 模板公开类型
     * @param {string} [region] 大区名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTwoTemplates(listTwoTemplatesRequest?: ListTwoTemplatesRequest): Promise<ListTwoTemplatesResponse> {
        const options = ParamCreater().listTwoTemplates(listTwoTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置仓库是公开状态还是私有状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置仓库是公开状态还是私有状态
     * @param {string} repositoryUuid 仓库id
     * @param {RepositoryTemplateVO} repositoryTemplateVO 将模板分享为公开示例模板实体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public shareTemplates(shareTemplatesRequest?: ShareTemplatesRequest): Promise<ShareTemplatesResponse> {
        const options = ParamCreater().shareTemplates(shareTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据仓库id获取指定仓库的分支列表.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询某仓库对应的分支
     * @param {string} repositoryId 仓库的主键id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBranchesByRepositoryId(showBranchesByRepositoryIdRequest?: ShowBranchesByRepositoryIdRequest): Promise<ShowBranchesByRepositoryIdResponse> {
        const options = ParamCreater().showBranchesByRepositoryId(showBranchesByRepositoryIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定仓库对应的分支。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询某仓库的标签列表
     * @param {string} repositoryId 仓库的主键id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBranchesByTwoRepositoryId(showBranchesByTwoRepositoryIdRequest?: ShowBranchesByTwoRepositoryIdRequest): Promise<ShowBranchesByTwoRepositoryIdResponse> {
        const options = ParamCreater().showBranchesByTwoRepositoryId(showBranchesByTwoRepositoryIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据仓库组名、仓库名和分支获取提交列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据组名和仓库名查询某仓库某分支对应的提交
     * @param {string} groupName 仓库组名(克隆地址中域名后面仓库名前的一段 示例：git@repo.alpha.devcloud.inhuawei.com:Demo00228/testword.git  组名：Demo00228 )
     * @param {string} refName 分支或标签名，支持SHA格式
     * @param {string} repositoryName 仓库名
     * @param {number} [pageIndex] 分页索引
     * @param {number} [pageSize] 分页索引
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCommitsByBranch(showCommitsByBranchRequest?: ShowCommitsByBranchRequest): Promise<ShowCommitsByBranchResponse> {
        const options = ParamCreater().showCommitsByBranch(showCommitsByBranchRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据仓库id查询仓库某分支对应的提交.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据仓库id查询仓库某分支对应的提交，提供更多可选参数
     * @param {string} refName 分支或标签名，支持SHA格式
     * @param {number} repositoryId 仓库主键id
     * @param {string} [author] 提交作者
     * @param {string} [beginDate] 起始提交日期，格式为yyyy-MM-dd
     * @param {string} [endDate] 终止提交日期，格式为yyyy-MM-dd
     * @param {string} [message] 提交信息
     * @param {number} [pageIndex] 分页索引
     * @param {number} [pageSize] 每页数据量
     * @param {string} [path] 文件路径
     * @param {string} [statFormat] 提交的文件变更详情信息（不包含diff）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCommitsByRepoId(showCommitsByRepoIdRequest?: ShowCommitsByRepoIdRequest): Promise<ShowCommitsByRepoIdResponse> {
        const options = ParamCreater().showCommitsByRepoId(showCommitsByRepoIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改被流水线引用的仓库状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改被流水线引用的仓库状态
     * @param {string} repositoryUuid 仓库id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showHasPipeline(showHasPipelineRequest?: ShowHasPipelineRequest): Promise<ShowHasPipelineResponse> {
        const options = ParamCreater().showHasPipeline(showHasPipelineRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取一个仓库下特定分支的图片文件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取一个仓库下特定分支的图片文件
     * @param {string} repositoryUuid 仓库id
     * @param {string} branchName 分支名称
     * @param {string} path 图片路径
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showImageBlob(showImageBlobRequest?: ShowImageBlobRequest): Promise<ShowImageBlobResponse> {
        const options = ParamCreater().showImageBlob(showImageBlobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 判断用户是否有仓库的管理员权限
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 判断用户是否有仓库的管理员权限
     * @param {string} repositoryUuid 仓库id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMaster(showMasterRequest?: ShowMasterRequest): Promise<ShowMasterResponse> {
        const options = ParamCreater().showMaster(showMasterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取仓库合并请求详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取仓库合并请求详情
     * @param {number} repositoryId 仓库短id
     * @param {number} mergeRequestId 合并请求id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMergeRequest(showMergeRequestRequest?: ShowMergeRequestRequest): Promise<ShowMergeRequestResponse> {
        const options = ParamCreater().showMergeRequest(showMergeRequestRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取仓库短id,用于获取仓库详情页面url
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据仓库名组名获取仓库短id，用以拼接与commitid对应提交详情页面url
     * @param {string} groupName 仓库组名(克隆地址中域名后面仓库名前的一段 示例：git@repo.alpha.devcloud.inhuawei.com:Demo00228/testword.git  组名：Demo00228 )
     * @param {string} repositoryName 仓库名
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRepoId(showRepoIdRequest?: ShowRepoIdRequest): Promise<ShowRepoIdResponse> {
        const options = ParamCreater().showRepoId(showRepoIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 按照指定格式下载仓库
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 下载仓库
     * @param {string} repositoryUuid 仓库的uuid
     * @param {string} sha 分支名称
     * @param {string} format 下载的压缩包格式
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRepositoryArchive(showRepositoryArchiveRequest?: ShowRepositoryArchiveRequest): Promise<ShowRepositoryArchiveResponse> {
        const options = ParamCreater().showRepositoryArchive(showRepositoryArchiveRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据仓库UUID(由CreateRepository接口返回)获取仓库信息仓库信息。返回 包含id，name，组名，仓库访问URL。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询某个仓库的详细信息
     * @param {string} repositoryUuid 仓库的uuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRepositoryByUuid(showRepositoryByUuidRequest?: ShowRepositoryByUuidRequest): Promise<ShowRepositoryByUuidResponse> {
        const options = ParamCreater().showRepositoryByUuid(showRepositoryByUuidRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据仓库短id，查询仓库的代码提交记录统计
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 仓库统计
     * @param {number} repositoryId 仓库的主键id
     * @param {ShowRepositoryStatisticsRequestBody} showRepositoryStatisticsRequestBody ShowRepositoryStatisticsRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRepositoryStatistics(showRepositoryStatisticsRequest?: ShowRepositoryStatisticsRequest): Promise<ShowRepositoryStatisticsResponse> {
        const options = ParamCreater().showRepositoryStatistics(showRepositoryStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定日期内代码仓指定分支的代码提交行数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取代码提交行数
     * @param {number} repositoryId 仓库短id
     * @param {string} refName 分支名称
     * @param {string} beginDate 起始提交日期,格式为yyyy-MM-dd
     * @param {string} endDate 终止提交日期,格式为yyyy-MM-dd（begin_date和end_date时间间隔不超过60天）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showStatisticCommit(showStatisticCommitRequest?: ShowStatisticCommitRequest): Promise<ShowStatisticCommitResponse> {
        const options = ParamCreater().showStatisticCommit(showStatisticCommitRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定日期内代码仓指定分支的代码提交行数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取代码提交行数
     * @param {number} repositoryId 仓库短id
     * @param {string} refName 分支名称
     * @param {string} beginDate 起始提交日期,格式为yyyy-MM-dd
     * @param {string} endDate 终止提交日期,格式为yyyy-MM-dd（begin_date和end_date时间间隔不超过60天）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showStatisticCommitV3(showStatisticCommitV3Request?: ShowStatisticCommitV3Request): Promise<ShowStatisticCommitV3Response> {
        const options = ParamCreater().showStatisticCommitV3(showStatisticCommitV3Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取仓库统计数据
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取仓库统计数据
     * @param {string} repositoryUuid 仓库id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showStatisticalData(showStatisticalDataRequest?: ShowStatisticalDataRequest): Promise<ShowStatisticalDataResponse> {
        const options = ParamCreater().showStatisticalData(showStatisticalDataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 合并请求代码审核
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 合并请求代码审核
     * @param {string} repositoryId 仓库的主键id
     * @param {number} mergeRequestIid 合并请求的短id
     * @param {ApprovalActionTypeDto} approvalAction The approver ids
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateMergeRequestApprovalState(updateMergeRequestApprovalStateRequest?: UpdateMergeRequestApprovalStateRequest): Promise<UpdateMergeRequestApprovalStateResponse> {
        const options = ParamCreater().updateMergeRequestApprovalState(updateMergeRequestApprovalStateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加ssh key
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加ssh key
     * @param {AddSshKeyRequestBody} publicKey 公钥
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addSshKey(addSshKeyRequest?: AddSshKeyRequest): Promise<AddSshKeyResponse> {
        const options = ParamCreater().addSshKey(addSshKeyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除用户公钥。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除用户公钥
     * @param {string} id sshKey的id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSShkey(deleteSShkeyRequest?: DeleteSShkeyRequest): Promise<DeleteSShkeyResponse> {
        const options = ParamCreater().deleteSShkey(deleteSShkeyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取ssh key列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取ssh key列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSshKeys(listSshKeysRequest?: ListSshKeysRequest): Promise<ListSshKeysResponse> {
        const options = ParamCreater().listSshKeys();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 检验私钥是否有拉取代码的权限
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 检验私钥是否有拉取代码的权限
     * @param {PrivateKeyVerify} privateKey 私钥
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPrivateKeyVerify(showPrivateKeyVerifyRequest?: ShowPrivateKeyVerifyRequest): Promise<ShowPrivateKeyVerifyResponse> {
        const options = ParamCreater().showPrivateKeyVerify(showPrivateKeyVerifyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 判断用户使用 https 上传/下载代码时输入的用户名和密码是否合法。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary  https账号密码校验
     * @param {string} iamUserUuid 用户iam_user_uuid
     * @param {PasswordRequest} password 用户密码
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public validateHttpsInfo(validateHttpsInfoRequest?: ValidateHttpsInfoRequest): Promise<ValidateHttpsInfoResponse> {
        const options = ParamCreater().validateHttpsInfo(validateHttpsInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 判断用户使用 https 上传/下载代码时输入的用户名和密码是否合法。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary https账号密码校验
     * @param {string} iamUserUuid 用户iam_user_uuid
     * @param {PasswordRequest} password 用户密码
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public validateHttpsInfoV2(validateHttpsInfoV2Request?: ValidateHttpsInfoV2Request): Promise<ValidateHttpsInfoV2Response> {
        const options = ParamCreater().validateHttpsInfoV2(validateHttpsInfoV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据仓库id在指定仓库中创建分支
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建分支
     * @param {string} repositoryId 仓库的主键id
     * @param {CreateNewBranchRequestBody} branchInfo branchInfo
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createNewBranch(createNewBranchRequest?: CreateNewBranchRequest): Promise<CreateNewBranchResponse> {
        const options = ParamCreater().createNewBranch(createNewBranchRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 分支关联工作项
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 分支关联工作项
     * @param {AssociateIssuesRequestBody} associateIssuesRequestBody AssociateIssuesRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateIssues(associateIssuesRequest?: AssociateIssuesRequest): Promise<AssociateIssuesResponse> {
        const options = ParamCreater().associateIssues(associateIssuesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建项目后，创建仓库组由后台生成方式 传入参数：仓库名、模板id、是否导入项目成员、归属项目
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建项目、仓库
     * @param {CreateProjectRepoRequest} createInfo 创建项目的相关信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createProjectAndRepositories(createProjectAndRepositoriesRequest?: CreateProjectAndRepositoriesRequest): Promise<CreateProjectAndRepositoriesResponse> {
        const options = ParamCreater().createProjectAndRepositories(createProjectAndRepositoriesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建仓库后fork仓库 传入参数：仓库名、是否导入项目成员、归属项目
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建项目并fork仓库
     * @param {ForkProjectRepoRequest} createInfo fork仓库的相关信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createProjectAndforkRepositories(createProjectAndforkRepositoriesRequest?: CreateProjectAndforkRepositoriesRequest): Promise<CreateProjectAndforkRepositoriesResponse> {
        const options = ParamCreater().createProjectAndforkRepositories(createProjectAndforkRepositoriesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取用户的所有仓库信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户的所有仓库
     * @param {number} [pageIndex] 分页索引，从1开始计数
     * @param {number} [pageSize] 每页条目数
     * @param {string} [search] 搜索关键字
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listUserAllRepositories(listUserAllRepositoriesRequest?: ListUserAllRepositoriesRequest): Promise<ListUserAllRepositoriesResponse> {
        const options = ParamCreater().listUserAllRepositories(listUserAllRepositoriesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取仓库列表,模糊查询支持范围,如果未传入project uuid，则支持按仓库名或项目名模糊查询，否则，只按仓库名模糊匹配
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目下的所有仓库
     * @param {string} projectUuid 项目ID，获取方式请参见[获取项目ID](codehub_api_0014.xml)。
     * @param {number} [pageIndex] 分页索引，从1开始计数
     * @param {number} [pageSize] 每页条目数
     * @param {string} [search] 搜索关键字
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAllRepositoryByTwoProjectId(showAllRepositoryByTwoProjectIdRequest?: ShowAllRepositoryByTwoProjectIdRequest): Promise<ShowAllRepositoryByTwoProjectIdResponse> {
        const options = ParamCreater().showAllRepositoryByTwoProjectId(showAllRepositoryByTwoProjectIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 提交代码自动触发编译构建，添加仓库钩子
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 为指定仓库添加hook
     * @param {string} groupName 组名(克隆地址中域名后面仓库名前的一段 示例：git@repo.alpha.devcloud.inhuawei.com:Demo00228/testword.git  组名：Demo00228 )
     * @param {string} repositoryName 仓库名
     * @param {RepositoryHookRequest} repositoryHookRequest 仓库hook VO
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addHooks(addHooksRequest?: AddHooksRequest): Promise<AddHooksResponse> {
        const options = ParamCreater().addHooks(addHooksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 提交代码自动触发编译构建，删除仓库钩子
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除指定仓库的 hook
     * @param {string} groupName 组名(克隆地址中域名后面仓库名前的一段 示例：git@repo.alpha.devcloud.inhuawei.com:Demo00228/testword.git  组名：Demo00228 )
     * @param {number} hookId 通过id删除指定仓库的hook
     * @param {string} repositoryName 仓库名
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteHooks(deleteHooksRequest?: DeleteHooksRequest): Promise<DeleteHooksResponse> {
        const options = ParamCreater().deleteHooks(deleteHooksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取仓库webhook
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定仓库的webhook
     * @param {string} groupName 组名(克隆地址中域名后面仓库名前的一段 示例：git@repo.alpha.devcloud.inhuawei.com:Demo00228/testword.git  组名：Demo00228 )
     * @param {string} repositoryName 仓库名
     * @param {string} [hookId] hook id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHooks(listHooksRequest?: ListHooksRequest): Promise<ListHooksResponse> {
        const options = ParamCreater().listHooks(listHooksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 能够一次提交位于不同目录的多个文件，目录不存在时，能自动创建目录。支持强制覆盖选项，当选择强制覆盖标志为true时，忽略冲突，强制提交。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCommit(createCommitRequest?: CreateCommitRequest) {
            const options = {
                method: "POST",
                url: "/v2/projects/{repo_id}/repository/commits",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let repoId;

            if (createCommitRequest !== null && createCommitRequest !== undefined) {
                if (createCommitRequest instanceof CreateCommitRequest) {
                    repoId = createCommitRequest.repoId;
                    body = createCommitRequest.body
                } else {
                    repoId = createCommitRequest['repo_id'];
                    body = createCommitRequest['body'];
                }
            }

        
            if (repoId === null || repoId === undefined) {
            throw new RequiredError('repoId','Required parameter repoId was null or undefined when calling createCommit.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'repo_id': repoId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据仓库短ID获取提交信息，支持根据文件路径，查询这个路径下所有的commits列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCommits(listCommitsRequest?: ListCommitsRequest) {
            const options = {
                method: "GET",
                url: "/v2/projects/{repo_id}/repository/commits",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let repoId;
            
            let refName;
            
            let since;
            
            let until;
            
            let path;
            
            let all;
            
            let withStats;
            
            let page;
            
            let perPage;

            if (listCommitsRequest !== null && listCommitsRequest !== undefined) {
                if (listCommitsRequest instanceof ListCommitsRequest) {
                    repoId = listCommitsRequest.repoId;
                    refName = listCommitsRequest.refName;
                    since = listCommitsRequest.since;
                    until = listCommitsRequest.until;
                    path = listCommitsRequest.path;
                    all = listCommitsRequest.all;
                    withStats = listCommitsRequest.withStats;
                    page = listCommitsRequest.page;
                    perPage = listCommitsRequest.perPage;
                } else {
                    repoId = listCommitsRequest['repo_id'];
                    refName = listCommitsRequest['ref_name'];
                    since = listCommitsRequest['since'];
                    until = listCommitsRequest['until'];
                    path = listCommitsRequest['path'];
                    all = listCommitsRequest['all'];
                    withStats = listCommitsRequest['with_stats'];
                    page = listCommitsRequest['page'];
                    perPage = listCommitsRequest['per_page'];
                }
            }

        
            if (repoId === null || repoId === undefined) {
            throw new RequiredError('repoId','Required parameter repoId was null or undefined when calling listCommits.');
            }
            if (refName !== null && refName !== undefined) {
                localVarQueryParameter['ref_name'] = refName;
            }
            if (since !== null && since !== undefined) {
                localVarQueryParameter['since'] = since;
            }
            if (until !== null && until !== undefined) {
                localVarQueryParameter['until'] = until;
            }
            if (path !== null && path !== undefined) {
                localVarQueryParameter['path'] = path;
            }
            if (all !== null && all !== undefined) {
                localVarQueryParameter['all'] = all;
            }
            if (withStats !== null && withStats !== undefined) {
                localVarQueryParameter['with_stats'] = withStats;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (perPage !== null && perPage !== undefined) {
                localVarQueryParameter['per_page'] = perPage;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'repo_id': repoId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据commit id查询提交差异信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDiffCommit(showDiffCommitRequest?: ShowDiffCommitRequest) {
            const options = {
                method: "GET",
                url: "/v2/projects/{repo_id}/repository/commits/{sha}/diff",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let repoId;
            
            let sha;

            if (showDiffCommitRequest !== null && showDiffCommitRequest !== undefined) {
                if (showDiffCommitRequest instanceof ShowDiffCommitRequest) {
                    repoId = showDiffCommitRequest.repoId;
                    sha = showDiffCommitRequest.sha;
                } else {
                    repoId = showDiffCommitRequest['repo_id'];
                    sha = showDiffCommitRequest['sha'];
                }
            }

        
            if (repoId === null || repoId === undefined) {
            throw new RequiredError('repoId','Required parameter repoId was null or undefined when calling showDiffCommit.');
            }
            if (sha === null || sha === undefined) {
            throw new RequiredError('sha','Required parameter sha was null or undefined when calling showDiffCommit.');
            }

            options.pathParams = { 'repo_id': repoId,'sha': sha, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取由commit id或分支或标记的名称标识的特定提交。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSingleCommit(showSingleCommitRequest?: ShowSingleCommitRequest) {
            const options = {
                method: "GET",
                url: "/v2/projects/{repo_id}/repository/commits/{sha}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let repoId;
            
            let sha;
            
            let stats;

            if (showSingleCommitRequest !== null && showSingleCommitRequest !== undefined) {
                if (showSingleCommitRequest instanceof ShowSingleCommitRequest) {
                    repoId = showSingleCommitRequest.repoId;
                    sha = showSingleCommitRequest.sha;
                    stats = showSingleCommitRequest.stats;
                } else {
                    repoId = showSingleCommitRequest['repo_id'];
                    sha = showSingleCommitRequest['sha'];
                    stats = showSingleCommitRequest['stats'];
                }
            }

        
            if (repoId === null || repoId === undefined) {
            throw new RequiredError('repoId','Required parameter repoId was null or undefined when calling showSingleCommit.');
            }
            if (sha === null || sha === undefined) {
            throw new RequiredError('sha','Required parameter sha was null or undefined when calling showSingleCommit.');
            }
            if (stats !== null && stats !== undefined) {
                localVarQueryParameter['stats'] = stats;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'repo_id': repoId,'sha': sha, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建MR检视意见
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createMergeRequestDiscussion(createMergeRequestDiscussionRequest?: CreateMergeRequestDiscussionRequest) {
            const options = {
                method: "POST",
                url: "/v2/repositories/{repository_id}/merge_requests/{merge_request_iid}/discussions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let repositoryId;
            
            let mergeRequestIid;

            if (createMergeRequestDiscussionRequest !== null && createMergeRequestDiscussionRequest !== undefined) {
                if (createMergeRequestDiscussionRequest instanceof CreateMergeRequestDiscussionRequest) {
                    repositoryId = createMergeRequestDiscussionRequest.repositoryId;
                    mergeRequestIid = createMergeRequestDiscussionRequest.mergeRequestIid;
                    body = createMergeRequestDiscussionRequest.body
                } else {
                    repositoryId = createMergeRequestDiscussionRequest['repository_id'];
                    mergeRequestIid = createMergeRequestDiscussionRequest['merge_request_iid'];
                    body = createMergeRequestDiscussionRequest['body'];
                }
            }

        
            if (repositoryId === null || repositoryId === undefined) {
            throw new RequiredError('repositoryId','Required parameter repositoryId was null or undefined when calling createMergeRequestDiscussion.');
            }
            if (mergeRequestIid === null || mergeRequestIid === undefined) {
            throw new RequiredError('mergeRequestIid','Required parameter mergeRequestIid was null or undefined when calling createMergeRequestDiscussion.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'repository_id': repositoryId,'merge_request_iid': mergeRequestIid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 回复MR检视意见
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createMergeRequestDiscussionNote(createMergeRequestDiscussionNoteRequest?: CreateMergeRequestDiscussionNoteRequest) {
            const options = {
                method: "POST",
                url: "/v2/repositories/{repository_id}/merge_requests/{merge_request_iid}/discussions/{discussion_id}/notes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let repositoryId;
            
            let mergeRequestIid;
            
            let discussionId;

            if (createMergeRequestDiscussionNoteRequest !== null && createMergeRequestDiscussionNoteRequest !== undefined) {
                if (createMergeRequestDiscussionNoteRequest instanceof CreateMergeRequestDiscussionNoteRequest) {
                    repositoryId = createMergeRequestDiscussionNoteRequest.repositoryId;
                    mergeRequestIid = createMergeRequestDiscussionNoteRequest.mergeRequestIid;
                    discussionId = createMergeRequestDiscussionNoteRequest.discussionId;
                    body = createMergeRequestDiscussionNoteRequest.body
                } else {
                    repositoryId = createMergeRequestDiscussionNoteRequest['repository_id'];
                    mergeRequestIid = createMergeRequestDiscussionNoteRequest['merge_request_iid'];
                    discussionId = createMergeRequestDiscussionNoteRequest['discussion_id'];
                    body = createMergeRequestDiscussionNoteRequest['body'];
                }
            }

        
            if (repositoryId === null || repositoryId === undefined) {
            throw new RequiredError('repositoryId','Required parameter repositoryId was null or undefined when calling createMergeRequestDiscussionNote.');
            }
            if (mergeRequestIid === null || mergeRequestIid === undefined) {
            throw new RequiredError('mergeRequestIid','Required parameter mergeRequestIid was null or undefined when calling createMergeRequestDiscussionNote.');
            }
            if (discussionId === null || discussionId === undefined) {
            throw new RequiredError('discussionId','Required parameter discussionId was null or undefined when calling createMergeRequestDiscussionNote.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'repository_id': repositoryId,'merge_request_iid': mergeRequestIid,'discussion_id': discussionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取检视意见设置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showReviewSetting(showReviewSettingRequest?: ShowReviewSettingRequest) {
            const options = {
                method: "GET",
                url: "/v2/repositories/{repository_id}/review_setting",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let repositoryId;

            if (showReviewSettingRequest !== null && showReviewSettingRequest !== undefined) {
                if (showReviewSettingRequest instanceof ShowReviewSettingRequest) {
                    repositoryId = showReviewSettingRequest.repositoryId;
                } else {
                    repositoryId = showReviewSettingRequest['repository_id'];
                }
            }

        
            if (repositoryId === null || repositoryId === undefined) {
            throw new RequiredError('repositoryId','Required parameter repositoryId was null or undefined when calling showReviewSetting.');
            }

            options.pathParams = { 'repository_id': repositoryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取仓库中文件的信息，如名称、大小、内容。请注意，文件内容是Base64编码的。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFilesByQuery(listFilesByQueryRequest?: ListFilesByQueryRequest) {
            const options = {
                method: "GET",
                url: "/v2/projects/{repo_id}/repository/files",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let repoId;
            
            let filePath;
            
            let ref;

            if (listFilesByQueryRequest !== null && listFilesByQueryRequest !== undefined) {
                if (listFilesByQueryRequest instanceof ListFilesByQueryRequest) {
                    repoId = listFilesByQueryRequest.repoId;
                    filePath = listFilesByQueryRequest.filePath;
                    ref = listFilesByQueryRequest.ref;
                } else {
                    repoId = listFilesByQueryRequest['repo_id'];
                    filePath = listFilesByQueryRequest['file_path'];
                    ref = listFilesByQueryRequest['ref'];
                }
            }

        
            if (repoId === null || repoId === undefined) {
            throw new RequiredError('repoId','Required parameter repoId was null or undefined when calling listFilesByQuery.');
            }
            if (filePath === null || filePath === undefined) {
                throw new RequiredError('filePath','Required parameter filePath was null or undefined when calling listFilesByQuery.');
            }
            if (filePath !== null && filePath !== undefined) {
                localVarQueryParameter['file_path'] = filePath;
            }
            if (ref === null || ref === undefined) {
                throw new RequiredError('ref','Required parameter ref was null or undefined when calling listFilesByQuery.');
            }
            if (ref !== null && ref !== undefined) {
                localVarQueryParameter['ref'] = ref;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'repo_id': repoId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取仓库中文件的信息，如名称、大小、内容。请注意，文件内容是Base64编码的。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showFile(showFileRequest?: ShowFileRequest) {
            const options = {
                method: "GET",
                url: "/v2/projects/{repo_id}/repository/files/{file_path}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let repoId;
            
            let filePath;
            
            let ref;

            if (showFileRequest !== null && showFileRequest !== undefined) {
                if (showFileRequest instanceof ShowFileRequest) {
                    repoId = showFileRequest.repoId;
                    filePath = showFileRequest.filePath;
                    ref = showFileRequest.ref;
                } else {
                    repoId = showFileRequest['repo_id'];
                    filePath = showFileRequest['file_path'];
                    ref = showFileRequest['ref'];
                }
            }

        
            if (repoId === null || repoId === undefined) {
            throw new RequiredError('repoId','Required parameter repoId was null or undefined when calling showFile.');
            }
            if (filePath === null || filePath === undefined) {
            throw new RequiredError('filePath','Required parameter filePath was null or undefined when calling showFile.');
            }
            if (ref === null || ref === undefined) {
                throw new RequiredError('ref','Required parameter ref was null or undefined when calling showFile.');
            }
            if (ref !== null && ref !== undefined) {
                localVarQueryParameter['ref'] = ref;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'repo_id': repoId,'file_path': filePath, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取仓库列表 模糊查询支持范围,如果未传入project_id，则支持按仓库名或项目名模糊查询，否则，只按仓库名模糊匹配。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getAllRepositoryByProjectId(getAllRepositoryByProjectIdRequest?: GetAllRepositoryByProjectIdRequest) {
            const options = {
                method: "GET",
                url: "/v1/projects/{project_uuid}/repositories",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectUuid;
            
            let pageIndex;
            
            let pageSize;
            
            let search;

            if (getAllRepositoryByProjectIdRequest !== null && getAllRepositoryByProjectIdRequest !== undefined) {
                if (getAllRepositoryByProjectIdRequest instanceof GetAllRepositoryByProjectIdRequest) {
                    projectUuid = getAllRepositoryByProjectIdRequest.projectUuid;
                    pageIndex = getAllRepositoryByProjectIdRequest.pageIndex;
                    pageSize = getAllRepositoryByProjectIdRequest.pageSize;
                    search = getAllRepositoryByProjectIdRequest.search;
                } else {
                    projectUuid = getAllRepositoryByProjectIdRequest['project_uuid'];
                    pageIndex = getAllRepositoryByProjectIdRequest['page_index'];
                    pageSize = getAllRepositoryByProjectIdRequest['page_size'];
                    search = getAllRepositoryByProjectIdRequest['search'];
                }
            }

        
            if (projectUuid === null || projectUuid === undefined) {
            throw new RequiredError('projectUuid','Required parameter projectUuid was null or undefined when calling getAllRepositoryByProjectId.');
            }
            if (pageIndex !== null && pageIndex !== undefined) {
                localVarQueryParameter['page_index'] = pageIndex;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (search !== null && search !== undefined) {
                localVarQueryParameter['search'] = search;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_uuid': projectUuid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取一个项目下可以设置为公开状态的仓库列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getProductTemplates(getProductTemplatesRequest?: GetProductTemplatesRequest) {
            const options = {
                method: "GET",
                url: "/v1/projects/{project_uuid}/repositories/template_status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectUuid;
            
            let pageNo;
            
            let pageSize;

            if (getProductTemplatesRequest !== null && getProductTemplatesRequest !== undefined) {
                if (getProductTemplatesRequest instanceof GetProductTemplatesRequest) {
                    projectUuid = getProductTemplatesRequest.projectUuid;
                    pageNo = getProductTemplatesRequest.pageNo;
                    pageSize = getProductTemplatesRequest.pageSize;
                } else {
                    projectUuid = getProductTemplatesRequest['project_uuid'];
                    pageNo = getProductTemplatesRequest['page_no'];
                    pageSize = getProductTemplatesRequest['page_size'];
                }
            }

        
            if (projectUuid === null || projectUuid === undefined) {
            throw new RequiredError('projectUuid','Required parameter projectUuid was null or undefined when calling getProductTemplates.');
            }
            if (pageNo !== null && pageNo !== undefined) {
                localVarQueryParameter['page_no'] = pageNo;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_uuid': projectUuid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取一个项目下可以设置为公开状态的仓库列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProductTwoTemplates(listProductTwoTemplatesRequest?: ListProductTwoTemplatesRequest) {
            const options = {
                method: "GET",
                url: "/v2/projects/{project_uuid}/repositories/template-status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectUuid;
            
            let pageNo;
            
            let pageSize;

            if (listProductTwoTemplatesRequest !== null && listProductTwoTemplatesRequest !== undefined) {
                if (listProductTwoTemplatesRequest instanceof ListProductTwoTemplatesRequest) {
                    projectUuid = listProductTwoTemplatesRequest.projectUuid;
                    pageNo = listProductTwoTemplatesRequest.pageNo;
                    pageSize = listProductTwoTemplatesRequest.pageSize;
                } else {
                    projectUuid = listProductTwoTemplatesRequest['project_uuid'];
                    pageNo = listProductTwoTemplatesRequest['page_no'];
                    pageSize = listProductTwoTemplatesRequest['page_size'];
                }
            }

        
            if (projectUuid === null || projectUuid === undefined) {
            throw new RequiredError('projectUuid','Required parameter projectUuid was null or undefined when calling listProductTwoTemplates.');
            }
            if (pageNo !== null && pageNo !== undefined) {
                localVarQueryParameter['page_no'] = pageNo;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_uuid': projectUuid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 一般创建仓库时调用。通过传入项目ID，获取方式请参见[获取项目ID](codehub_api_0014.xml)。,仓库名，来判断仓库是否重名。仓库存在result:false,仓库不存在result:true。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRepositoryNameExist(showRepositoryNameExistRequest?: ShowRepositoryNameExistRequest) {
            const options = {
                method: "GET",
                url: "/v1/projects/{project_uuid}/repositories/validation/{repository_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectUuid;
            
            let repositoryName;

            if (showRepositoryNameExistRequest !== null && showRepositoryNameExistRequest !== undefined) {
                if (showRepositoryNameExistRequest instanceof ShowRepositoryNameExistRequest) {
                    projectUuid = showRepositoryNameExistRequest.projectUuid;
                    repositoryName = showRepositoryNameExistRequest.repositoryName;
                } else {
                    projectUuid = showRepositoryNameExistRequest['project_uuid'];
                    repositoryName = showRepositoryNameExistRequest['repository_name'];
                }
            }

        
            if (projectUuid === null || projectUuid === undefined) {
            throw new RequiredError('projectUuid','Required parameter projectUuid was null or undefined when calling showRepositoryNameExist.');
            }
            if (repositoryName === null || repositoryName === undefined) {
            throw new RequiredError('repositoryName','Required parameter repositoryName was null or undefined when calling showRepositoryNameExist.');
            }

            options.pathParams = { 'project_uuid': projectUuid,'repository_name': repositoryName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加仓库成员。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addRepoMembers(addRepoMembersRequest?: AddRepoMembersRequest) {
            const options = {
                method: "POST",
                url: "/v1/repositories/{repository_uuid}/members",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let repositoryUuid;

            if (addRepoMembersRequest !== null && addRepoMembersRequest !== undefined) {
                if (addRepoMembersRequest instanceof AddRepoMembersRequest) {
                    repositoryUuid = addRepoMembersRequest.repositoryUuid;
                    body = addRepoMembersRequest.body
                } else {
                    repositoryUuid = addRepoMembersRequest['repository_uuid'];
                    body = addRepoMembersRequest['body'];
                }
            }

        
            if (repositoryUuid === null || repositoryUuid === undefined) {
            throw new RequiredError('repositoryUuid','Required parameter repositoryUuid was null or undefined when calling addRepoMembers.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'repository_uuid': repositoryUuid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除仓库成员
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRepoMember(deleteRepoMemberRequest?: DeleteRepoMemberRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/repositories/{repository_uuid}/members/{member_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let memberId;
            
            let repositoryUuid;

            if (deleteRepoMemberRequest !== null && deleteRepoMemberRequest !== undefined) {
                if (deleteRepoMemberRequest instanceof DeleteRepoMemberRequest) {
                    memberId = deleteRepoMemberRequest.memberId;
                    repositoryUuid = deleteRepoMemberRequest.repositoryUuid;
                } else {
                    memberId = deleteRepoMemberRequest['member_id'];
                    repositoryUuid = deleteRepoMemberRequest['repository_uuid'];
                }
            }

        
            if (memberId === null || memberId === undefined) {
            throw new RequiredError('memberId','Required parameter memberId was null or undefined when calling deleteRepoMember.');
            }
            if (repositoryUuid === null || repositoryUuid === undefined) {
            throw new RequiredError('repositoryUuid','Required parameter repositoryUuid was null or undefined when calling deleteRepoMember.');
            }

            options.pathParams = { 'member_id': memberId,'repository_uuid': repositoryUuid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取仓库成员列表,可通过关键字搜索某成员。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRepoMembers(listRepoMembersRequest?: ListRepoMembersRequest) {
            const options = {
                method: "GET",
                url: "/v1/repositories/{repository_uuid}/members",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let repositoryUuid;
            
            let pageIndex;
            
            let pageSize;
            
            let subject;

            if (listRepoMembersRequest !== null && listRepoMembersRequest !== undefined) {
                if (listRepoMembersRequest instanceof ListRepoMembersRequest) {
                    repositoryUuid = listRepoMembersRequest.repositoryUuid;
                    pageIndex = listRepoMembersRequest.pageIndex;
                    pageSize = listRepoMembersRequest.pageSize;
                    subject = listRepoMembersRequest.subject;
                } else {
                    repositoryUuid = listRepoMembersRequest['repository_uuid'];
                    pageIndex = listRepoMembersRequest['page_index'];
                    pageSize = listRepoMembersRequest['page_size'];
                    subject = listRepoMembersRequest['subject'];
                }
            }

        
            if (repositoryUuid === null || repositoryUuid === undefined) {
            throw new RequiredError('repositoryUuid','Required parameter repositoryUuid was null or undefined when calling listRepoMembers.');
            }
            if (pageIndex !== null && pageIndex !== undefined) {
                localVarQueryParameter['page_index'] = pageIndex;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (subject !== null && subject !== undefined) {
                localVarQueryParameter['subject'] = subject;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'repository_uuid': repositoryUuid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 给仓库中成员设置仓库的操作权限，
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setRepoRole(setRepoRoleRequest?: SetRepoRoleRequest) {
            const options = {
                method: "PUT",
                url: "/v1/repositories/{repository_uuid}/members/{member_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let memberId;
            
            let repositoryUuid;

            if (setRepoRoleRequest !== null && setRepoRoleRequest !== undefined) {
                if (setRepoRoleRequest instanceof SetRepoRoleRequest) {
                    memberId = setRepoRoleRequest.memberId;
                    repositoryUuid = setRepoRoleRequest.repositoryUuid;
                    body = setRepoRoleRequest.body
                } else {
                    memberId = setRepoRoleRequest['member_id'];
                    repositoryUuid = setRepoRoleRequest['repository_uuid'];
                    body = setRepoRoleRequest['body'];
                }
            }

        
            if (memberId === null || memberId === undefined) {
            throw new RequiredError('memberId','Required parameter memberId was null or undefined when calling setRepoRole.');
            }
            if (repositoryUuid === null || repositoryUuid === undefined) {
            throw new RequiredError('repositoryUuid','Required parameter repositoryUuid was null or undefined when calling setRepoRole.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'member_id': memberId,'repository_uuid': repositoryUuid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加部署密钥
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addDeployKey(addDeployKeyRequest?: AddDeployKeyRequest) {
            const options = {
                method: "POST",
                url: "/v1/repositories/{repository_id}/deploy_keys",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let repositoryId;

            if (addDeployKeyRequest !== null && addDeployKeyRequest !== undefined) {
                if (addDeployKeyRequest instanceof AddDeployKeyRequest) {
                    repositoryId = addDeployKeyRequest.repositoryId;
                    body = addDeployKeyRequest.body
                } else {
                    repositoryId = addDeployKeyRequest['repository_id'];
                    body = addDeployKeyRequest['body'];
                }
            }

        
            if (repositoryId === null || repositoryId === undefined) {
            throw new RequiredError('repositoryId','Required parameter repositoryId was null or undefined when calling addDeployKey.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'repository_id': repositoryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加部署密钥
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addDeployKeyV2(addDeployKeyV2Request?: AddDeployKeyV2Request) {
            const options = {
                method: "POST",
                url: "/v2/repositories/{repository_id}/deploy-keys",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let repositoryId;

            if (addDeployKeyV2Request !== null && addDeployKeyV2Request !== undefined) {
                if (addDeployKeyV2Request instanceof AddDeployKeyV2Request) {
                    repositoryId = addDeployKeyV2Request.repositoryId;
                    body = addDeployKeyV2Request.body
                } else {
                    repositoryId = addDeployKeyV2Request['repository_id'];
                    body = addDeployKeyV2Request['body'];
                }
            }

        
            if (repositoryId === null || repositoryId === undefined) {
            throw new RequiredError('repositoryId','Required parameter repositoryId was null or undefined when calling addDeployKeyV2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'repository_id': repositoryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 新建保护分支
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addProtectBranchV2(addProtectBranchV2Request?: AddProtectBranchV2Request) {
            const options = {
                method: "PUT",
                url: "/v2/repositories/{repository_id}/branch/{branch_name}/protect",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let repositoryId;
            
            let branchName;

            if (addProtectBranchV2Request !== null && addProtectBranchV2Request !== undefined) {
                if (addProtectBranchV2Request instanceof AddProtectBranchV2Request) {
                    repositoryId = addProtectBranchV2Request.repositoryId;
                    branchName = addProtectBranchV2Request.branchName;
                    body = addProtectBranchV2Request.body
                } else {
                    repositoryId = addProtectBranchV2Request['repository_id'];
                    branchName = addProtectBranchV2Request['branch_name'];
                    body = addProtectBranchV2Request['body'];
                }
            }

        
            if (repositoryId === null || repositoryId === undefined) {
            throw new RequiredError('repositoryId','Required parameter repositoryId was null or undefined when calling addProtectBranchV2.');
            }
            if (branchName === null || branchName === undefined) {
            throw new RequiredError('branchName','Required parameter branchName was null or undefined when calling addProtectBranchV2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'repository_id': repositoryId,'branch_name': branchName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 新建标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addTagV2(addTagV2Request?: AddTagV2Request) {
            const options = {
                method: "POST",
                url: "/v2/repositories/{repository_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let repositoryId;

            if (addTagV2Request !== null && addTagV2Request !== undefined) {
                if (addTagV2Request instanceof AddTagV2Request) {
                    repositoryId = addTagV2Request.repositoryId;
                    body = addTagV2Request.body
                } else {
                    repositoryId = addTagV2Request['repository_id'];
                    body = addTagV2Request['body'];
                }
            }

        
            if (repositoryId === null || repositoryId === undefined) {
            throw new RequiredError('repositoryId','Required parameter repositoryId was null or undefined when calling addTagV2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'repository_id': repositoryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用指定的名称在指定项目上创建仓库。传入参数：仓库名、模板id、是否导入项目成员、归属项目
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRepository(createRepositoryRequest?: CreateRepositoryRequest) {
            const options = {
                method: "POST",
                url: "/v1/repositories",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createRepositoryRequest !== null && createRepositoryRequest !== undefined) {
                if (createRepositoryRequest instanceof CreateRepositoryRequest) {
                    body = createRepositoryRequest.body
                } else {
                    body = createRepositoryRequest['body'];
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
         * 删除仓库部署密钥
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDeployKey(deleteDeployKeyRequest?: DeleteDeployKeyRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/repositories/{repository_id}/deploy_keys/{key_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let keyId;
            
            let repositoryId;

            if (deleteDeployKeyRequest !== null && deleteDeployKeyRequest !== undefined) {
                if (deleteDeployKeyRequest instanceof DeleteDeployKeyRequest) {
                    keyId = deleteDeployKeyRequest.keyId;
                    repositoryId = deleteDeployKeyRequest.repositoryId;
                } else {
                    keyId = deleteDeployKeyRequest['key_id'];
                    repositoryId = deleteDeployKeyRequest['repository_id'];
                }
            }

        
            if (keyId === null || keyId === undefined) {
            throw new RequiredError('keyId','Required parameter keyId was null or undefined when calling deleteDeployKey.');
            }
            if (repositoryId === null || repositoryId === undefined) {
            throw new RequiredError('repositoryId','Required parameter repositoryId was null or undefined when calling deleteDeployKey.');
            }

            options.pathParams = { 'key_id': keyId,'repository_id': repositoryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除仓库部署密钥
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDeployKeyV2(deleteDeployKeyV2Request?: DeleteDeployKeyV2Request) {
            const options = {
                method: "DELETE",
                url: "/v2/repositories/{repository_id}/deploy-keys/{key_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let keyId;
            
            let repositoryId;

            if (deleteDeployKeyV2Request !== null && deleteDeployKeyV2Request !== undefined) {
                if (deleteDeployKeyV2Request instanceof DeleteDeployKeyV2Request) {
                    keyId = deleteDeployKeyV2Request.keyId;
                    repositoryId = deleteDeployKeyV2Request.repositoryId;
                } else {
                    keyId = deleteDeployKeyV2Request['key_id'];
                    repositoryId = deleteDeployKeyV2Request['repository_id'];
                }
            }

        
            if (keyId === null || keyId === undefined) {
            throw new RequiredError('keyId','Required parameter keyId was null or undefined when calling deleteDeployKeyV2.');
            }
            if (repositoryId === null || repositoryId === undefined) {
            throw new RequiredError('repositoryId','Required parameter repositoryId was null or undefined when calling deleteDeployKeyV2.');
            }

            options.pathParams = { 'key_id': keyId,'repository_id': repositoryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据仓库32位uuid删除指定的仓库
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRepository(deleteRepositoryRequest?: DeleteRepositoryRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/repositories/{repository_uuid}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let repositoryUuid;

            if (deleteRepositoryRequest !== null && deleteRepositoryRequest !== undefined) {
                if (deleteRepositoryRequest instanceof DeleteRepositoryRequest) {
                    repositoryUuid = deleteRepositoryRequest.repositoryUuid;
                } else {
                    repositoryUuid = deleteRepositoryRequest['repository_uuid'];
                }
            }

        
            if (repositoryUuid === null || repositoryUuid === undefined) {
            throw new RequiredError('repositoryUuid','Required parameter repositoryUuid was null or undefined when calling deleteRepository.');
            }

            options.pathParams = { 'repository_uuid': repositoryUuid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 不建议再使用,建议使用/{repository_uuid}/status
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getRepositoryByProjectId(getRepositoryByProjectIdRequest?: GetRepositoryByProjectIdRequest) {
            const options = {
                method: "GET",
                url: "/v1/repositories/{repository_uuid}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let repositoryUuid;

            if (getRepositoryByProjectIdRequest !== null && getRepositoryByProjectIdRequest !== undefined) {
                if (getRepositoryByProjectIdRequest instanceof GetRepositoryByProjectIdRequest) {
                    repositoryUuid = getRepositoryByProjectIdRequest.repositoryUuid;
                } else {
                    repositoryUuid = getRepositoryByProjectIdRequest['repository_uuid'];
                }
            }

        
            if (repositoryUuid === null || repositoryUuid === undefined) {
            throw new RequiredError('repositoryUuid','Required parameter repositoryUuid was null or undefined when calling getRepositoryByProjectId.');
            }

            options.pathParams = { 'repository_uuid': repositoryUuid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取公开示例模板列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getTemplates(getTemplatesRequest?: GetTemplatesRequest) {
            const options = {
                method: "GET",
                url: "/v1/repositories/repository_templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let pageNo;
            
            let pageSize;
            
            let platform;
            
            let language;
            
            let pipeline;
            
            let entertype;
            
            let search;
            
            let dateorder;
            
            let usedtimeorder;
            
            let type;
            
            let region;

            if (getTemplatesRequest !== null && getTemplatesRequest !== undefined) {
                if (getTemplatesRequest instanceof GetTemplatesRequest) {
                    pageNo = getTemplatesRequest.pageNo;
                    pageSize = getTemplatesRequest.pageSize;
                    platform = getTemplatesRequest.platform;
                    language = getTemplatesRequest.language;
                    pipeline = getTemplatesRequest.pipeline;
                    entertype = getTemplatesRequest.entertype;
                    search = getTemplatesRequest.search;
                    dateorder = getTemplatesRequest.dateorder;
                    usedtimeorder = getTemplatesRequest.usedtimeorder;
                    type = getTemplatesRequest.type;
                    region = getTemplatesRequest.region;
                } else {
                    pageNo = getTemplatesRequest['page_no'];
                    pageSize = getTemplatesRequest['page_size'];
                    platform = getTemplatesRequest['platform'];
                    language = getTemplatesRequest['language'];
                    pipeline = getTemplatesRequest['pipeline'];
                    entertype = getTemplatesRequest['entertype'];
                    search = getTemplatesRequest['search'];
                    dateorder = getTemplatesRequest['dateorder'];
                    usedtimeorder = getTemplatesRequest['usedtimeorder'];
                    type = getTemplatesRequest['type'];
                    region = getTemplatesRequest['region'];
                }
            }

        
            if (pageNo === null || pageNo === undefined) {
                throw new RequiredError('pageNo','Required parameter pageNo was null or undefined when calling getTemplates.');
            }
            if (pageNo !== null && pageNo !== undefined) {
                localVarQueryParameter['page_no'] = pageNo;
            }
            if (pageSize === null || pageSize === undefined) {
                throw new RequiredError('pageSize','Required parameter pageSize was null or undefined when calling getTemplates.');
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (platform !== null && platform !== undefined) {
                localVarQueryParameter['platform'] = platform;
            }
            if (language !== null && language !== undefined) {
                localVarQueryParameter['language'] = language;
            }
            if (pipeline !== null && pipeline !== undefined) {
                localVarQueryParameter['pipeline'] = pipeline;
            }
            if (entertype !== null && entertype !== undefined) {
                localVarQueryParameter['entertype'] = entertype;
            }
            if (search !== null && search !== undefined) {
                localVarQueryParameter['search'] = search;
            }
            if (dateorder !== null && dateorder !== undefined) {
                localVarQueryParameter['dateorder'] = dateorder;
            }
            if (usedtimeorder !== null && usedtimeorder !== undefined) {
                localVarQueryParameter['usedtimeorder'] = usedtimeorder;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (region !== null && region !== undefined) {
                localVarQueryParameter['region'] = region;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取仓库分支列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBranchesByRepositoryId(listBranchesByRepositoryIdRequest?: ListBranchesByRepositoryIdRequest) {
            const options = {
                method: "GET",
                url: "/v2/repositories/{repository_id}/branches",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let repositoryId;
            
            let page;
            
            let perPage;
            
            let match;

            if (listBranchesByRepositoryIdRequest !== null && listBranchesByRepositoryIdRequest !== undefined) {
                if (listBranchesByRepositoryIdRequest instanceof ListBranchesByRepositoryIdRequest) {
                    repositoryId = listBranchesByRepositoryIdRequest.repositoryId;
                    page = listBranchesByRepositoryIdRequest.page;
                    perPage = listBranchesByRepositoryIdRequest.perPage;
                    match = listBranchesByRepositoryIdRequest.match;
                } else {
                    repositoryId = listBranchesByRepositoryIdRequest['repository_id'];
                    page = listBranchesByRepositoryIdRequest['page'];
                    perPage = listBranchesByRepositoryIdRequest['per_page'];
                    match = listBranchesByRepositoryIdRequest['match'];
                }
            }

        
            if (repositoryId === null || repositoryId === undefined) {
            throw new RequiredError('repositoryId','Required parameter repositoryId was null or undefined when calling listBranchesByRepositoryId.');
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (perPage !== null && perPage !== undefined) {
                localVarQueryParameter['per_page'] = perPage;
            }
            if (match !== null && match !== undefined) {
                localVarQueryParameter['match'] = match;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'repository_id': repositoryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取仓库上一次的提交统计信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCommitStatistics(listCommitStatisticsRequest?: ListCommitStatisticsRequest) {
            const options = {
                method: "GET",
                url: "/v1/repositories/{repository_id}/statistics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let branchName;
            
            let repositoryId;

            if (listCommitStatisticsRequest !== null && listCommitStatisticsRequest !== undefined) {
                if (listCommitStatisticsRequest instanceof ListCommitStatisticsRequest) {
                    branchName = listCommitStatisticsRequest.branchName;
                    repositoryId = listCommitStatisticsRequest.repositoryId;
                } else {
                    branchName = listCommitStatisticsRequest['branch_name'];
                    repositoryId = listCommitStatisticsRequest['repository_id'];
                }
            }

        
            if (branchName === null || branchName === undefined) {
                throw new RequiredError('branchName','Required parameter branchName was null or undefined when calling listCommitStatistics.');
            }
            if (branchName !== null && branchName !== undefined) {
                localVarQueryParameter['branch_name'] = branchName;
            }
            if (repositoryId === null || repositoryId === undefined) {
            throw new RequiredError('repositoryId','Required parameter repositoryId was null or undefined when calling listCommitStatistics.');
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'repository_id': repositoryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取一个仓库下特定分支指定文件内容
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFiles(listFilesRequest?: ListFilesRequest) {
            const options = {
                method: "GET",
                url: "/v1/repositories/{repository_uuid}/branch/{branch_name}/file",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let repositoryUuid;
            
            let branchName;
            
            let path;

            if (listFilesRequest !== null && listFilesRequest !== undefined) {
                if (listFilesRequest instanceof ListFilesRequest) {
                    repositoryUuid = listFilesRequest.repositoryUuid;
                    branchName = listFilesRequest.branchName;
                    path = listFilesRequest.path;
                } else {
                    repositoryUuid = listFilesRequest['repository_uuid'];
                    branchName = listFilesRequest['branch_name'];
                    path = listFilesRequest['path'];
                }
            }

        
            if (repositoryUuid === null || repositoryUuid === undefined) {
            throw new RequiredError('repositoryUuid','Required parameter repositoryUuid was null or undefined when calling listFiles.');
            }
            if (branchName === null || branchName === undefined) {
            throw new RequiredError('branchName','Required parameter branchName was null or undefined when calling listFiles.');
            }
            if (path === null || path === undefined) {
                throw new RequiredError('path','Required parameter path was null or undefined when calling listFiles.');
            }
            if (path !== null && path !== undefined) {
                localVarQueryParameter['path'] = path;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'repository_uuid': repositoryUuid,'branch_name': branchName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取变更文件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMergeChanges(listMergeChangesRequest?: ListMergeChangesRequest) {
            const options = {
                method: "GET",
                url: "/v2/repositories/{repository_id}/merge-requests/{merge_request_iid}/changes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let repositoryId;
            
            let mergeRequestIid;
            
            let filePath;
            
            let ignoreWhitespaceChange;
            
            let forceEncode;
            
            let view;
            
            let commitId;

            if (listMergeChangesRequest !== null && listMergeChangesRequest !== undefined) {
                if (listMergeChangesRequest instanceof ListMergeChangesRequest) {
                    repositoryId = listMergeChangesRequest.repositoryId;
                    mergeRequestIid = listMergeChangesRequest.mergeRequestIid;
                    filePath = listMergeChangesRequest.filePath;
                    ignoreWhitespaceChange = listMergeChangesRequest.ignoreWhitespaceChange;
                    forceEncode = listMergeChangesRequest.forceEncode;
                    view = listMergeChangesRequest.view;
                    commitId = listMergeChangesRequest.commitId;
                } else {
                    repositoryId = listMergeChangesRequest['repository_id'];
                    mergeRequestIid = listMergeChangesRequest['merge_request_iid'];
                    filePath = listMergeChangesRequest['file_path'];
                    ignoreWhitespaceChange = listMergeChangesRequest['ignore_whitespace_change'];
                    forceEncode = listMergeChangesRequest['force_encode'];
                    view = listMergeChangesRequest['view'];
                    commitId = listMergeChangesRequest['commit_id'];
                }
            }

        
            if (repositoryId === null || repositoryId === undefined) {
            throw new RequiredError('repositoryId','Required parameter repositoryId was null or undefined when calling listMergeChanges.');
            }
            if (mergeRequestIid === null || mergeRequestIid === undefined) {
            throw new RequiredError('mergeRequestIid','Required parameter mergeRequestIid was null or undefined when calling listMergeChanges.');
            }
            if (filePath !== null && filePath !== undefined) {
                localVarQueryParameter['file_path'] = filePath;
            }
            if (ignoreWhitespaceChange !== null && ignoreWhitespaceChange !== undefined) {
                localVarQueryParameter['ignore_whitespace_change'] = ignoreWhitespaceChange;
            }
            if (forceEncode !== null && forceEncode !== undefined) {
                localVarQueryParameter['force_encode'] = forceEncode;
            }
            if (view !== null && view !== undefined) {
                localVarQueryParameter['view'] = view;
            }
            if (commitId !== null && commitId !== undefined) {
                localVarQueryParameter['commit_id'] = commitId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'repository_id': repositoryId,'merge_request_iid': mergeRequestIid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取变更文件列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMergeChangesTrees(listMergeChangesTreesRequest?: ListMergeChangesTreesRequest) {
            const options = {
                method: "GET",
                url: "/v2/repositories/{repository_id}/merge-requests/{merge_request_iid}/changes-trees",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let repositoryId;
            
            let mergeRequestIid;
            
            let view;
            
            let commitId;

            if (listMergeChangesTreesRequest !== null && listMergeChangesTreesRequest !== undefined) {
                if (listMergeChangesTreesRequest instanceof ListMergeChangesTreesRequest) {
                    repositoryId = listMergeChangesTreesRequest.repositoryId;
                    mergeRequestIid = listMergeChangesTreesRequest.mergeRequestIid;
                    view = listMergeChangesTreesRequest.view;
                    commitId = listMergeChangesTreesRequest.commitId;
                } else {
                    repositoryId = listMergeChangesTreesRequest['repository_id'];
                    mergeRequestIid = listMergeChangesTreesRequest['merge_request_iid'];
                    view = listMergeChangesTreesRequest['view'];
                    commitId = listMergeChangesTreesRequest['commit_id'];
                }
            }

        
            if (repositoryId === null || repositoryId === undefined) {
            throw new RequiredError('repositoryId','Required parameter repositoryId was null or undefined when calling listMergeChangesTrees.');
            }
            if (mergeRequestIid === null || mergeRequestIid === undefined) {
            throw new RequiredError('mergeRequestIid','Required parameter mergeRequestIid was null or undefined when calling listMergeChangesTrees.');
            }
            if (view !== null && view !== undefined) {
                localVarQueryParameter['view'] = view;
            }
            if (commitId !== null && commitId !== undefined) {
                localVarQueryParameter['commit_id'] = commitId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'repository_id': repositoryId,'merge_request_iid': mergeRequestIid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取仓库合并请求列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMergeRequest(listMergeRequestRequest?: ListMergeRequestRequest) {
            const options = {
                method: "GET",
                url: "/v2/repositories/{repository_id}/merge_request",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let repositoryId;
            
            let state;
            
            let page;
            
            let perPage;
            
            let search;

            if (listMergeRequestRequest !== null && listMergeRequestRequest !== undefined) {
                if (listMergeRequestRequest instanceof ListMergeRequestRequest) {
                    repositoryId = listMergeRequestRequest.repositoryId;
                    state = listMergeRequestRequest.state;
                    page = listMergeRequestRequest.page;
                    perPage = listMergeRequestRequest.perPage;
                    search = listMergeRequestRequest.search;
                } else {
                    repositoryId = listMergeRequestRequest['repository_id'];
                    state = listMergeRequestRequest['state'];
                    page = listMergeRequestRequest['page'];
                    perPage = listMergeRequestRequest['per_page'];
                    search = listMergeRequestRequest['search'];
                }
            }

        
            if (repositoryId === null || repositoryId === undefined) {
            throw new RequiredError('repositoryId','Required parameter repositoryId was null or undefined when calling listMergeRequest.');
            }
            if (state !== null && state !== undefined) {
                localVarQueryParameter['state'] = state;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (perPage !== null && perPage !== undefined) {
                localVarQueryParameter['per_page'] = perPage;
            }
            if (search !== null && search !== undefined) {
                localVarQueryParameter['search'] = search;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'repository_id': repositoryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据仓库短ID和合并请求短ID获取检视人信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMergeRequestReviewers(listMergeRequestReviewersRequest?: ListMergeRequestReviewersRequest) {
            const options = {
                method: "GET",
                url: "/v2/repositories/{repository_id}/merge-requests/{merge_request_iid}/approval-reviewers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let repositoryId;
            
            let mergeRequestIid;
            
            let page;
            
            let perPage;

            if (listMergeRequestReviewersRequest !== null && listMergeRequestReviewersRequest !== undefined) {
                if (listMergeRequestReviewersRequest instanceof ListMergeRequestReviewersRequest) {
                    repositoryId = listMergeRequestReviewersRequest.repositoryId;
                    mergeRequestIid = listMergeRequestReviewersRequest.mergeRequestIid;
                    page = listMergeRequestReviewersRequest.page;
                    perPage = listMergeRequestReviewersRequest.perPage;
                } else {
                    repositoryId = listMergeRequestReviewersRequest['repository_id'];
                    mergeRequestIid = listMergeRequestReviewersRequest['merge_request_iid'];
                    page = listMergeRequestReviewersRequest['page'];
                    perPage = listMergeRequestReviewersRequest['per_page'];
                }
            }

        
            if (repositoryId === null || repositoryId === undefined) {
            throw new RequiredError('repositoryId','Required parameter repositoryId was null or undefined when calling listMergeRequestReviewers.');
            }
            if (mergeRequestIid === null || mergeRequestIid === undefined) {
            throw new RequiredError('mergeRequestIid','Required parameter mergeRequestIid was null or undefined when calling listMergeRequestReviewers.');
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (perPage !== null && perPage !== undefined) {
                localVarQueryParameter['per_page'] = perPage;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'repository_id': repositoryId,'merge_request_iid': mergeRequestIid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取关联工作项信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRelatedCommits(listRelatedCommitsRequest?: ListRelatedCommitsRequest) {
            const options = {
                method: "GET",
                url: "/v2/repositories/{repository_uuid}/related-commits",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let repositoryUuid;
            
            let type;
            
            let search;
            
            let page;
            
            let perPage;

            if (listRelatedCommitsRequest !== null && listRelatedCommitsRequest !== undefined) {
                if (listRelatedCommitsRequest instanceof ListRelatedCommitsRequest) {
                    repositoryUuid = listRelatedCommitsRequest.repositoryUuid;
                    type = listRelatedCommitsRequest.type;
                    search = listRelatedCommitsRequest.search;
                    page = listRelatedCommitsRequest.page;
                    perPage = listRelatedCommitsRequest.perPage;
                } else {
                    repositoryUuid = listRelatedCommitsRequest['repository_uuid'];
                    type = listRelatedCommitsRequest['type'];
                    search = listRelatedCommitsRequest['search'];
                    page = listRelatedCommitsRequest['page'];
                    perPage = listRelatedCommitsRequest['per_page'];
                }
            }

        
            if (repositoryUuid === null || repositoryUuid === undefined) {
            throw new RequiredError('repositoryUuid','Required parameter repositoryUuid was null or undefined when calling listRelatedCommits.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (search !== null && search !== undefined) {
                localVarQueryParameter['search'] = search;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (perPage !== null && perPage !== undefined) {
                localVarQueryParameter['per_page'] = perPage;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'repository_uuid': repositoryUuid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取仓库状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRepositoryStatus(listRepositoryStatusRequest?: ListRepositoryStatusRequest) {
            const options = {
                method: "GET",
                url: "/v1/repositories/{repository_uuid}/status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let repositoryUuid;

            if (listRepositoryStatusRequest !== null && listRepositoryStatusRequest !== undefined) {
                if (listRepositoryStatusRequest instanceof ListRepositoryStatusRequest) {
                    repositoryUuid = listRepositoryStatusRequest.repositoryUuid;
                } else {
                    repositoryUuid = listRepositoryStatusRequest['repository_uuid'];
                }
            }

        
            if (repositoryUuid === null || repositoryUuid === undefined) {
            throw new RequiredError('repositoryUuid','Required parameter repositoryUuid was null or undefined when calling listRepositoryStatus.');
            }

            options.pathParams = { 'repository_uuid': repositoryUuid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取分支目录下的文件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSubfiles(listSubfilesRequest?: ListSubfilesRequest) {
            const options = {
                method: "GET",
                url: "/v1/repositories/{repository_uuid}/branch/{branch_name}/sub-files",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let repositoryUuid;
            
            let branchName;
            
            let path;
            
            let offset;
            
            let limit;

            if (listSubfilesRequest !== null && listSubfilesRequest !== undefined) {
                if (listSubfilesRequest instanceof ListSubfilesRequest) {
                    repositoryUuid = listSubfilesRequest.repositoryUuid;
                    branchName = listSubfilesRequest.branchName;
                    path = listSubfilesRequest.path;
                    offset = listSubfilesRequest.offset;
                    limit = listSubfilesRequest.limit;
                } else {
                    repositoryUuid = listSubfilesRequest['repository_uuid'];
                    branchName = listSubfilesRequest['branch_name'];
                    path = listSubfilesRequest['path'];
                    offset = listSubfilesRequest['offset'];
                    limit = listSubfilesRequest['limit'];
                }
            }

        
            if (repositoryUuid === null || repositoryUuid === undefined) {
            throw new RequiredError('repositoryUuid','Required parameter repositoryUuid was null or undefined when calling listSubfiles.');
            }
            if (branchName === null || branchName === undefined) {
            throw new RequiredError('branchName','Required parameter branchName was null or undefined when calling listSubfiles.');
            }
            if (path !== null && path !== undefined) {
                localVarQueryParameter['path'] = path;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'repository_uuid': repositoryUuid,'branch_name': branchName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置仓库是公开状态还是私有状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTemplatesTwo(listTemplatesTwoRequest?: ListTemplatesTwoRequest) {
            const options = {
                method: "PUT",
                url: "/v2/repositories/{repository_uuid}/template-status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let repositoryUuid;

            if (listTemplatesTwoRequest !== null && listTemplatesTwoRequest !== undefined) {
                if (listTemplatesTwoRequest instanceof ListTemplatesTwoRequest) {
                    repositoryUuid = listTemplatesTwoRequest.repositoryUuid;
                    body = listTemplatesTwoRequest.body
                } else {
                    repositoryUuid = listTemplatesTwoRequest['repository_uuid'];
                    body = listTemplatesTwoRequest['body'];
                }
            }

        
            if (repositoryUuid === null || repositoryUuid === undefined) {
            throw new RequiredError('repositoryUuid','Required parameter repositoryUuid was null or undefined when calling listTemplatesTwo.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'repository_uuid': repositoryUuid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取公开示例模板列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTwoTemplates(listTwoTemplatesRequest?: ListTwoTemplatesRequest) {
            const options = {
                method: "GET",
                url: "/v2/repositories/repository-templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let pageNo;
            
            let pageSize;
            
            let platform;
            
            let language;
            
            let pipeline;
            
            let enterType;
            
            let search;
            
            let dateOrder;
            
            let usedTimeOrder;
            
            let type;
            
            let region;

            if (listTwoTemplatesRequest !== null && listTwoTemplatesRequest !== undefined) {
                if (listTwoTemplatesRequest instanceof ListTwoTemplatesRequest) {
                    pageNo = listTwoTemplatesRequest.pageNo;
                    pageSize = listTwoTemplatesRequest.pageSize;
                    platform = listTwoTemplatesRequest.platform;
                    language = listTwoTemplatesRequest.language;
                    pipeline = listTwoTemplatesRequest.pipeline;
                    enterType = listTwoTemplatesRequest.enterType;
                    search = listTwoTemplatesRequest.search;
                    dateOrder = listTwoTemplatesRequest.dateOrder;
                    usedTimeOrder = listTwoTemplatesRequest.usedTimeOrder;
                    type = listTwoTemplatesRequest.type;
                    region = listTwoTemplatesRequest.region;
                } else {
                    pageNo = listTwoTemplatesRequest['page_no'];
                    pageSize = listTwoTemplatesRequest['page_size'];
                    platform = listTwoTemplatesRequest['platform'];
                    language = listTwoTemplatesRequest['language'];
                    pipeline = listTwoTemplatesRequest['pipeline'];
                    enterType = listTwoTemplatesRequest['enter_type'];
                    search = listTwoTemplatesRequest['search'];
                    dateOrder = listTwoTemplatesRequest['date_order'];
                    usedTimeOrder = listTwoTemplatesRequest['used_time_order'];
                    type = listTwoTemplatesRequest['type'];
                    region = listTwoTemplatesRequest['region'];
                }
            }

        
            if (pageNo === null || pageNo === undefined) {
                throw new RequiredError('pageNo','Required parameter pageNo was null or undefined when calling listTwoTemplates.');
            }
            if (pageNo !== null && pageNo !== undefined) {
                localVarQueryParameter['page_no'] = pageNo;
            }
            if (pageSize === null || pageSize === undefined) {
                throw new RequiredError('pageSize','Required parameter pageSize was null or undefined when calling listTwoTemplates.');
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (platform !== null && platform !== undefined) {
                localVarQueryParameter['platform'] = platform;
            }
            if (language !== null && language !== undefined) {
                localVarQueryParameter['language'] = language;
            }
            if (pipeline !== null && pipeline !== undefined) {
                localVarQueryParameter['pipeline'] = pipeline;
            }
            if (enterType !== null && enterType !== undefined) {
                localVarQueryParameter['enter_type'] = enterType;
            }
            if (search !== null && search !== undefined) {
                localVarQueryParameter['search'] = search;
            }
            if (dateOrder !== null && dateOrder !== undefined) {
                localVarQueryParameter['date_order'] = dateOrder;
            }
            if (usedTimeOrder !== null && usedTimeOrder !== undefined) {
                localVarQueryParameter['used_time_order'] = usedTimeOrder;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (region !== null && region !== undefined) {
                localVarQueryParameter['region'] = region;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置仓库是公开状态还是私有状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        shareTemplates(shareTemplatesRequest?: ShareTemplatesRequest) {
            const options = {
                method: "PUT",
                url: "/v1/repositories/{repository_uuid}/template_status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let repositoryUuid;

            if (shareTemplatesRequest !== null && shareTemplatesRequest !== undefined) {
                if (shareTemplatesRequest instanceof ShareTemplatesRequest) {
                    repositoryUuid = shareTemplatesRequest.repositoryUuid;
                    body = shareTemplatesRequest.body
                } else {
                    repositoryUuid = shareTemplatesRequest['repository_uuid'];
                    body = shareTemplatesRequest['body'];
                }
            }

        
            if (repositoryUuid === null || repositoryUuid === undefined) {
            throw new RequiredError('repositoryUuid','Required parameter repositoryUuid was null or undefined when calling shareTemplates.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'repository_uuid': repositoryUuid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据仓库id获取指定仓库的分支列表.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBranchesByRepositoryId(showBranchesByRepositoryIdRequest?: ShowBranchesByRepositoryIdRequest) {
            const options = {
                method: "GET",
                url: "/v1/repositories/{repository_id}/branches",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let repositoryId;

            if (showBranchesByRepositoryIdRequest !== null && showBranchesByRepositoryIdRequest !== undefined) {
                if (showBranchesByRepositoryIdRequest instanceof ShowBranchesByRepositoryIdRequest) {
                    repositoryId = showBranchesByRepositoryIdRequest.repositoryId;
                } else {
                    repositoryId = showBranchesByRepositoryIdRequest['repository_id'];
                }
            }

        
            if (repositoryId === null || repositoryId === undefined) {
            throw new RequiredError('repositoryId','Required parameter repositoryId was null or undefined when calling showBranchesByRepositoryId.');
            }

            options.pathParams = { 'repository_id': repositoryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定仓库对应的分支。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBranchesByTwoRepositoryId(showBranchesByTwoRepositoryIdRequest?: ShowBranchesByTwoRepositoryIdRequest) {
            const options = {
                method: "GET",
                url: "/v2/repositories/{repository_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let repositoryId;

            if (showBranchesByTwoRepositoryIdRequest !== null && showBranchesByTwoRepositoryIdRequest !== undefined) {
                if (showBranchesByTwoRepositoryIdRequest instanceof ShowBranchesByTwoRepositoryIdRequest) {
                    repositoryId = showBranchesByTwoRepositoryIdRequest.repositoryId;
                } else {
                    repositoryId = showBranchesByTwoRepositoryIdRequest['repository_id'];
                }
            }

        
            if (repositoryId === null || repositoryId === undefined) {
            throw new RequiredError('repositoryId','Required parameter repositoryId was null or undefined when calling showBranchesByTwoRepositoryId.');
            }

            options.pathParams = { 'repository_id': repositoryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据仓库组名、仓库名和分支获取提交列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCommitsByBranch(showCommitsByBranchRequest?: ShowCommitsByBranchRequest) {
            const options = {
                method: "GET",
                url: "/v1/repositories/{group_name}/{repository_name}/commits",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let groupName;
            
            let refName;
            
            let repositoryName;
            
            let pageIndex;
            
            let pageSize;

            if (showCommitsByBranchRequest !== null && showCommitsByBranchRequest !== undefined) {
                if (showCommitsByBranchRequest instanceof ShowCommitsByBranchRequest) {
                    groupName = showCommitsByBranchRequest.groupName;
                    refName = showCommitsByBranchRequest.refName;
                    repositoryName = showCommitsByBranchRequest.repositoryName;
                    pageIndex = showCommitsByBranchRequest.pageIndex;
                    pageSize = showCommitsByBranchRequest.pageSize;
                } else {
                    groupName = showCommitsByBranchRequest['group_name'];
                    refName = showCommitsByBranchRequest['ref_name'];
                    repositoryName = showCommitsByBranchRequest['repository_name'];
                    pageIndex = showCommitsByBranchRequest['page_index'];
                    pageSize = showCommitsByBranchRequest['page_size'];
                }
            }

        
            if (groupName === null || groupName === undefined) {
            throw new RequiredError('groupName','Required parameter groupName was null or undefined when calling showCommitsByBranch.');
            }
            if (refName === null || refName === undefined) {
                throw new RequiredError('refName','Required parameter refName was null or undefined when calling showCommitsByBranch.');
            }
            if (refName !== null && refName !== undefined) {
                localVarQueryParameter['ref_name'] = refName;
            }
            if (repositoryName === null || repositoryName === undefined) {
            throw new RequiredError('repositoryName','Required parameter repositoryName was null or undefined when calling showCommitsByBranch.');
            }
            if (pageIndex !== null && pageIndex !== undefined) {
                localVarQueryParameter['page_index'] = pageIndex;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'group_name': groupName,'repository_name': repositoryName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据仓库id查询仓库某分支对应的提交.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCommitsByRepoId(showCommitsByRepoIdRequest?: ShowCommitsByRepoIdRequest) {
            const options = {
                method: "GET",
                url: "/v1/repositories/{repository_id}/commits",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let refName;
            
            let repositoryId;
            
            let author;
            
            let beginDate;
            
            let endDate;
            
            let message;
            
            let pageIndex;
            
            let pageSize;
            
            let path;
            
            let statFormat;

            if (showCommitsByRepoIdRequest !== null && showCommitsByRepoIdRequest !== undefined) {
                if (showCommitsByRepoIdRequest instanceof ShowCommitsByRepoIdRequest) {
                    refName = showCommitsByRepoIdRequest.refName;
                    repositoryId = showCommitsByRepoIdRequest.repositoryId;
                    author = showCommitsByRepoIdRequest.author;
                    beginDate = showCommitsByRepoIdRequest.beginDate;
                    endDate = showCommitsByRepoIdRequest.endDate;
                    message = showCommitsByRepoIdRequest.message;
                    pageIndex = showCommitsByRepoIdRequest.pageIndex;
                    pageSize = showCommitsByRepoIdRequest.pageSize;
                    path = showCommitsByRepoIdRequest.path;
                    statFormat = showCommitsByRepoIdRequest.statFormat;
                } else {
                    refName = showCommitsByRepoIdRequest['ref_name'];
                    repositoryId = showCommitsByRepoIdRequest['repository_id'];
                    author = showCommitsByRepoIdRequest['author'];
                    beginDate = showCommitsByRepoIdRequest['begin_date'];
                    endDate = showCommitsByRepoIdRequest['end_date'];
                    message = showCommitsByRepoIdRequest['message'];
                    pageIndex = showCommitsByRepoIdRequest['page_index'];
                    pageSize = showCommitsByRepoIdRequest['page_size'];
                    path = showCommitsByRepoIdRequest['path'];
                    statFormat = showCommitsByRepoIdRequest['stat_format'];
                }
            }

        
            if (refName === null || refName === undefined) {
                throw new RequiredError('refName','Required parameter refName was null or undefined when calling showCommitsByRepoId.');
            }
            if (refName !== null && refName !== undefined) {
                localVarQueryParameter['ref_name'] = refName;
            }
            if (repositoryId === null || repositoryId === undefined) {
            throw new RequiredError('repositoryId','Required parameter repositoryId was null or undefined when calling showCommitsByRepoId.');
            }
            if (author !== null && author !== undefined) {
                localVarQueryParameter['author'] = author;
            }
            if (beginDate !== null && beginDate !== undefined) {
                localVarQueryParameter['begin_date'] = beginDate;
            }
            if (endDate !== null && endDate !== undefined) {
                localVarQueryParameter['end_date'] = endDate;
            }
            if (message !== null && message !== undefined) {
                localVarQueryParameter['message'] = message;
            }
            if (pageIndex !== null && pageIndex !== undefined) {
                localVarQueryParameter['page_index'] = pageIndex;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (path !== null && path !== undefined) {
                localVarQueryParameter['path'] = path;
            }
            if (statFormat !== null && statFormat !== undefined) {
                localVarQueryParameter['stat_format'] = statFormat;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'repository_id': repositoryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改被流水线引用的仓库状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showHasPipeline(showHasPipelineRequest?: ShowHasPipelineRequest) {
            const options = {
                method: "PUT",
                url: "/v1/repositories/{repository_uuid}/pipeline",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let repositoryUuid;

            if (showHasPipelineRequest !== null && showHasPipelineRequest !== undefined) {
                if (showHasPipelineRequest instanceof ShowHasPipelineRequest) {
                    repositoryUuid = showHasPipelineRequest.repositoryUuid;
                } else {
                    repositoryUuid = showHasPipelineRequest['repository_uuid'];
                }
            }

        
            if (repositoryUuid === null || repositoryUuid === undefined) {
            throw new RequiredError('repositoryUuid','Required parameter repositoryUuid was null or undefined when calling showHasPipeline.');
            }

            options.pathParams = { 'repository_uuid': repositoryUuid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取一个仓库下特定分支的图片文件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showImageBlob(showImageBlobRequest?: ShowImageBlobRequest) {
            const options = {
                method: "GET",
                url: "/v1/repositories/{repository_uuid}/branch/{branch_name}/image",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let repositoryUuid;
            
            let branchName;
            
            let path;

            if (showImageBlobRequest !== null && showImageBlobRequest !== undefined) {
                if (showImageBlobRequest instanceof ShowImageBlobRequest) {
                    repositoryUuid = showImageBlobRequest.repositoryUuid;
                    branchName = showImageBlobRequest.branchName;
                    path = showImageBlobRequest.path;
                } else {
                    repositoryUuid = showImageBlobRequest['repository_uuid'];
                    branchName = showImageBlobRequest['branch_name'];
                    path = showImageBlobRequest['path'];
                }
            }

        
            if (repositoryUuid === null || repositoryUuid === undefined) {
            throw new RequiredError('repositoryUuid','Required parameter repositoryUuid was null or undefined when calling showImageBlob.');
            }
            if (branchName === null || branchName === undefined) {
            throw new RequiredError('branchName','Required parameter branchName was null or undefined when calling showImageBlob.');
            }
            if (path === null || path === undefined) {
                throw new RequiredError('path','Required parameter path was null or undefined when calling showImageBlob.');
            }
            if (path !== null && path !== undefined) {
                localVarQueryParameter['path'] = path;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'repository_uuid': repositoryUuid,'branch_name': branchName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 判断用户是否有仓库的管理员权限
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMaster(showMasterRequest?: ShowMasterRequest) {
            const options = {
                method: "GET",
                url: "/v1/repositories/{repository_uuid}/master",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let repositoryUuid;

            if (showMasterRequest !== null && showMasterRequest !== undefined) {
                if (showMasterRequest instanceof ShowMasterRequest) {
                    repositoryUuid = showMasterRequest.repositoryUuid;
                } else {
                    repositoryUuid = showMasterRequest['repository_uuid'];
                }
            }

        
            if (repositoryUuid === null || repositoryUuid === undefined) {
            throw new RequiredError('repositoryUuid','Required parameter repositoryUuid was null or undefined when calling showMaster.');
            }

            options.pathParams = { 'repository_uuid': repositoryUuid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取仓库合并请求详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMergeRequest(showMergeRequestRequest?: ShowMergeRequestRequest) {
            const options = {
                method: "GET",
                url: "/v2/repositories/{repository_id}/merge_request/{merge_request_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let repositoryId;
            
            let mergeRequestId;

            if (showMergeRequestRequest !== null && showMergeRequestRequest !== undefined) {
                if (showMergeRequestRequest instanceof ShowMergeRequestRequest) {
                    repositoryId = showMergeRequestRequest.repositoryId;
                    mergeRequestId = showMergeRequestRequest.mergeRequestId;
                } else {
                    repositoryId = showMergeRequestRequest['repository_id'];
                    mergeRequestId = showMergeRequestRequest['merge_request_id'];
                }
            }

        
            if (repositoryId === null || repositoryId === undefined) {
            throw new RequiredError('repositoryId','Required parameter repositoryId was null or undefined when calling showMergeRequest.');
            }
            if (mergeRequestId === null || mergeRequestId === undefined) {
            throw new RequiredError('mergeRequestId','Required parameter mergeRequestId was null or undefined when calling showMergeRequest.');
            }

            options.pathParams = { 'repository_id': repositoryId,'merge_request_id': mergeRequestId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取仓库短id,用于获取仓库详情页面url
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRepoId(showRepoIdRequest?: ShowRepoIdRequest) {
            const options = {
                method: "GET",
                url: "/v1/repositories/repoid",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let groupName;
            
            let repositoryName;

            if (showRepoIdRequest !== null && showRepoIdRequest !== undefined) {
                if (showRepoIdRequest instanceof ShowRepoIdRequest) {
                    groupName = showRepoIdRequest.groupName;
                    repositoryName = showRepoIdRequest.repositoryName;
                } else {
                    groupName = showRepoIdRequest['group_name'];
                    repositoryName = showRepoIdRequest['repository_name'];
                }
            }

        
            if (groupName === null || groupName === undefined) {
                throw new RequiredError('groupName','Required parameter groupName was null or undefined when calling showRepoId.');
            }
            if (groupName !== null && groupName !== undefined) {
                localVarQueryParameter['group_name'] = groupName;
            }
            if (repositoryName === null || repositoryName === undefined) {
                throw new RequiredError('repositoryName','Required parameter repositoryName was null or undefined when calling showRepoId.');
            }
            if (repositoryName !== null && repositoryName !== undefined) {
                localVarQueryParameter['repository_name'] = repositoryName;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 按照指定格式下载仓库
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRepositoryArchive(showRepositoryArchiveRequest?: ShowRepositoryArchiveRequest) {
            const options = {
                method: "GET",
                url: "/v2/repositories/{repository_uuid}/archive",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let repositoryUuid;
            
            let sha;
            
            let format;

            if (showRepositoryArchiveRequest !== null && showRepositoryArchiveRequest !== undefined) {
                if (showRepositoryArchiveRequest instanceof ShowRepositoryArchiveRequest) {
                    repositoryUuid = showRepositoryArchiveRequest.repositoryUuid;
                    sha = showRepositoryArchiveRequest.sha;
                    format = showRepositoryArchiveRequest.format;
                } else {
                    repositoryUuid = showRepositoryArchiveRequest['repository_uuid'];
                    sha = showRepositoryArchiveRequest['sha'];
                    format = showRepositoryArchiveRequest['format'];
                }
            }

        
            if (repositoryUuid === null || repositoryUuid === undefined) {
            throw new RequiredError('repositoryUuid','Required parameter repositoryUuid was null or undefined when calling showRepositoryArchive.');
            }
            if (sha === null || sha === undefined) {
                throw new RequiredError('sha','Required parameter sha was null or undefined when calling showRepositoryArchive.');
            }
            if (sha !== null && sha !== undefined) {
                localVarQueryParameter['sha'] = sha;
            }
            if (format === null || format === undefined) {
                throw new RequiredError('format','Required parameter format was null or undefined when calling showRepositoryArchive.');
            }
            if (format !== null && format !== undefined) {
                localVarQueryParameter['format'] = format;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'repository_uuid': repositoryUuid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据仓库UUID(由CreateRepository接口返回)获取仓库信息仓库信息。返回 包含id，name，组名，仓库访问URL。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRepositoryByUuid(showRepositoryByUuidRequest?: ShowRepositoryByUuidRequest) {
            const options = {
                method: "GET",
                url: "/v2/repositories/{repository_uuid}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let repositoryUuid;

            if (showRepositoryByUuidRequest !== null && showRepositoryByUuidRequest !== undefined) {
                if (showRepositoryByUuidRequest instanceof ShowRepositoryByUuidRequest) {
                    repositoryUuid = showRepositoryByUuidRequest.repositoryUuid;
                } else {
                    repositoryUuid = showRepositoryByUuidRequest['repository_uuid'];
                }
            }

        
            if (repositoryUuid === null || repositoryUuid === undefined) {
            throw new RequiredError('repositoryUuid','Required parameter repositoryUuid was null or undefined when calling showRepositoryByUuid.');
            }

            options.pathParams = { 'repository_uuid': repositoryUuid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据仓库短id，查询仓库的代码提交记录统计
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRepositoryStatistics(showRepositoryStatisticsRequest?: ShowRepositoryStatisticsRequest) {
            const options = {
                method: "POST",
                url: "/v1/repositories/{repository_id}/statistics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let repositoryId;

            if (showRepositoryStatisticsRequest !== null && showRepositoryStatisticsRequest !== undefined) {
                if (showRepositoryStatisticsRequest instanceof ShowRepositoryStatisticsRequest) {
                    repositoryId = showRepositoryStatisticsRequest.repositoryId;
                    body = showRepositoryStatisticsRequest.body
                } else {
                    repositoryId = showRepositoryStatisticsRequest['repository_id'];
                    body = showRepositoryStatisticsRequest['body'];
                }
            }

        
            if (repositoryId === null || repositoryId === undefined) {
            throw new RequiredError('repositoryId','Required parameter repositoryId was null or undefined when calling showRepositoryStatistics.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'repository_id': repositoryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定日期内代码仓指定分支的代码提交行数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showStatisticCommit(showStatisticCommitRequest?: ShowStatisticCommitRequest) {
            const options = {
                method: "GET",
                url: "/v2/repositories/{repository_id}/commit_lines",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let repositoryId;
            
            let refName;
            
            let beginDate;
            
            let endDate;

            if (showStatisticCommitRequest !== null && showStatisticCommitRequest !== undefined) {
                if (showStatisticCommitRequest instanceof ShowStatisticCommitRequest) {
                    repositoryId = showStatisticCommitRequest.repositoryId;
                    refName = showStatisticCommitRequest.refName;
                    beginDate = showStatisticCommitRequest.beginDate;
                    endDate = showStatisticCommitRequest.endDate;
                } else {
                    repositoryId = showStatisticCommitRequest['repository_id'];
                    refName = showStatisticCommitRequest['ref_name'];
                    beginDate = showStatisticCommitRequest['begin_date'];
                    endDate = showStatisticCommitRequest['end_date'];
                }
            }

        
            if (repositoryId === null || repositoryId === undefined) {
            throw new RequiredError('repositoryId','Required parameter repositoryId was null or undefined when calling showStatisticCommit.');
            }
            if (refName === null || refName === undefined) {
                throw new RequiredError('refName','Required parameter refName was null or undefined when calling showStatisticCommit.');
            }
            if (refName !== null && refName !== undefined) {
                localVarQueryParameter['ref_name'] = refName;
            }
            if (beginDate === null || beginDate === undefined) {
                throw new RequiredError('beginDate','Required parameter beginDate was null or undefined when calling showStatisticCommit.');
            }
            if (beginDate !== null && beginDate !== undefined) {
                localVarQueryParameter['begin_date'] = beginDate;
            }
            if (endDate === null || endDate === undefined) {
                throw new RequiredError('endDate','Required parameter endDate was null or undefined when calling showStatisticCommit.');
            }
            if (endDate !== null && endDate !== undefined) {
                localVarQueryParameter['end_date'] = endDate;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'repository_id': repositoryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定日期内代码仓指定分支的代码提交行数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showStatisticCommitV3(showStatisticCommitV3Request?: ShowStatisticCommitV3Request) {
            const options = {
                method: "GET",
                url: "/v3/repositories/{repository_id}/commit-lines",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let repositoryId;
            
            let refName;
            
            let beginDate;
            
            let endDate;

            if (showStatisticCommitV3Request !== null && showStatisticCommitV3Request !== undefined) {
                if (showStatisticCommitV3Request instanceof ShowStatisticCommitV3Request) {
                    repositoryId = showStatisticCommitV3Request.repositoryId;
                    refName = showStatisticCommitV3Request.refName;
                    beginDate = showStatisticCommitV3Request.beginDate;
                    endDate = showStatisticCommitV3Request.endDate;
                } else {
                    repositoryId = showStatisticCommitV3Request['repository_id'];
                    refName = showStatisticCommitV3Request['ref_name'];
                    beginDate = showStatisticCommitV3Request['begin_date'];
                    endDate = showStatisticCommitV3Request['end_date'];
                }
            }

        
            if (repositoryId === null || repositoryId === undefined) {
            throw new RequiredError('repositoryId','Required parameter repositoryId was null or undefined when calling showStatisticCommitV3.');
            }
            if (refName === null || refName === undefined) {
                throw new RequiredError('refName','Required parameter refName was null or undefined when calling showStatisticCommitV3.');
            }
            if (refName !== null && refName !== undefined) {
                localVarQueryParameter['ref_name'] = refName;
            }
            if (beginDate === null || beginDate === undefined) {
                throw new RequiredError('beginDate','Required parameter beginDate was null or undefined when calling showStatisticCommitV3.');
            }
            if (beginDate !== null && beginDate !== undefined) {
                localVarQueryParameter['begin_date'] = beginDate;
            }
            if (endDate === null || endDate === undefined) {
                throw new RequiredError('endDate','Required parameter endDate was null or undefined when calling showStatisticCommitV3.');
            }
            if (endDate !== null && endDate !== undefined) {
                localVarQueryParameter['end_date'] = endDate;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'repository_id': repositoryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取仓库统计数据
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showStatisticalData(showStatisticalDataRequest?: ShowStatisticalDataRequest) {
            const options = {
                method: "GET",
                url: "/v1/repositories/{repository_uuid}/statistic-data",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let repositoryUuid;

            if (showStatisticalDataRequest !== null && showStatisticalDataRequest !== undefined) {
                if (showStatisticalDataRequest instanceof ShowStatisticalDataRequest) {
                    repositoryUuid = showStatisticalDataRequest.repositoryUuid;
                } else {
                    repositoryUuid = showStatisticalDataRequest['repository_uuid'];
                }
            }

        
            if (repositoryUuid === null || repositoryUuid === undefined) {
            throw new RequiredError('repositoryUuid','Required parameter repositoryUuid was null or undefined when calling showStatisticalData.');
            }

            options.pathParams = { 'repository_uuid': repositoryUuid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 合并请求代码审核
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateMergeRequestApprovalState(updateMergeRequestApprovalStateRequest?: UpdateMergeRequestApprovalStateRequest) {
            const options = {
                method: "PUT",
                url: "/v2/repositories/{repository_id}/merge-requests/{merge_request_iid}/approval",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let repositoryId;
            
            let mergeRequestIid;

            if (updateMergeRequestApprovalStateRequest !== null && updateMergeRequestApprovalStateRequest !== undefined) {
                if (updateMergeRequestApprovalStateRequest instanceof UpdateMergeRequestApprovalStateRequest) {
                    repositoryId = updateMergeRequestApprovalStateRequest.repositoryId;
                    mergeRequestIid = updateMergeRequestApprovalStateRequest.mergeRequestIid;
                    body = updateMergeRequestApprovalStateRequest.body
                } else {
                    repositoryId = updateMergeRequestApprovalStateRequest['repository_id'];
                    mergeRequestIid = updateMergeRequestApprovalStateRequest['merge_request_iid'];
                    body = updateMergeRequestApprovalStateRequest['body'];
                }
            }

        
            if (repositoryId === null || repositoryId === undefined) {
            throw new RequiredError('repositoryId','Required parameter repositoryId was null or undefined when calling updateMergeRequestApprovalState.');
            }
            if (mergeRequestIid === null || mergeRequestIid === undefined) {
            throw new RequiredError('mergeRequestIid','Required parameter mergeRequestIid was null or undefined when calling updateMergeRequestApprovalState.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'repository_id': repositoryId,'merge_request_iid': mergeRequestIid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加ssh key
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addSshKey(addSshKeyRequest?: AddSshKeyRequest) {
            const options = {
                method: "POST",
                url: "/v1/users/sshkey",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (addSshKeyRequest !== null && addSshKeyRequest !== undefined) {
                if (addSshKeyRequest instanceof AddSshKeyRequest) {
                    body = addSshKeyRequest.body
                } else {
                    body = addSshKeyRequest['body'];
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
         * 删除用户公钥。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSShkey(deleteSShkeyRequest?: DeleteSShkeyRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/users/sshkey/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (deleteSShkeyRequest !== null && deleteSShkeyRequest !== undefined) {
                if (deleteSShkeyRequest instanceof DeleteSShkeyRequest) {
                    id = deleteSShkeyRequest.id;
                } else {
                    id = deleteSShkeyRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteSShkey.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取ssh key列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSshKeys() {
            const options = {
                method: "GET",
                url: "/v1/users/sshkey",
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
         * 检验私钥是否有拉取代码的权限
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPrivateKeyVerify(showPrivateKeyVerifyRequest?: ShowPrivateKeyVerifyRequest) {
            const options = {
                method: "POST",
                url: "/v1/users/sshkey/privatekey/verify",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (showPrivateKeyVerifyRequest !== null && showPrivateKeyVerifyRequest !== undefined) {
                if (showPrivateKeyVerifyRequest instanceof ShowPrivateKeyVerifyRequest) {
                    body = showPrivateKeyVerifyRequest.body
                } else {
                    body = showPrivateKeyVerifyRequest['body'];
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
         * 判断用户使用 https 上传/下载代码时输入的用户名和密码是否合法。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        validateHttpsInfo(validateHttpsInfoRequest?: ValidateHttpsInfoRequest) {
            const options = {
                method: "POST",
                url: "/v1/user/{iam_user_uuid}/validateHttpsInfo",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let iamUserUuid;

            if (validateHttpsInfoRequest !== null && validateHttpsInfoRequest !== undefined) {
                if (validateHttpsInfoRequest instanceof ValidateHttpsInfoRequest) {
                    iamUserUuid = validateHttpsInfoRequest.iamUserUuid;
                    body = validateHttpsInfoRequest.body
                } else {
                    iamUserUuid = validateHttpsInfoRequest['iam_user_uuid'];
                    body = validateHttpsInfoRequest['body'];
                }
            }

        
            if (iamUserUuid === null || iamUserUuid === undefined) {
            throw new RequiredError('iamUserUuid','Required parameter iamUserUuid was null or undefined when calling validateHttpsInfo.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'iam_user_uuid': iamUserUuid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 判断用户使用 https 上传/下载代码时输入的用户名和密码是否合法。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        validateHttpsInfoV2(validateHttpsInfoV2Request?: ValidateHttpsInfoV2Request) {
            const options = {
                method: "POST",
                url: "/v2/user/{iam_user_uuid}/validate-https-info",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let iamUserUuid;

            if (validateHttpsInfoV2Request !== null && validateHttpsInfoV2Request !== undefined) {
                if (validateHttpsInfoV2Request instanceof ValidateHttpsInfoV2Request) {
                    iamUserUuid = validateHttpsInfoV2Request.iamUserUuid;
                    body = validateHttpsInfoV2Request.body
                } else {
                    iamUserUuid = validateHttpsInfoV2Request['iam_user_uuid'];
                    body = validateHttpsInfoV2Request['body'];
                }
            }

        
            if (iamUserUuid === null || iamUserUuid === undefined) {
            throw new RequiredError('iamUserUuid','Required parameter iamUserUuid was null or undefined when calling validateHttpsInfoV2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'iam_user_uuid': iamUserUuid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据仓库id在指定仓库中创建分支
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createNewBranch(createNewBranchRequest?: CreateNewBranchRequest) {
            const options = {
                method: "POST",
                url: "/v2/repositories/{repository_id}/branches",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let repositoryId;

            if (createNewBranchRequest !== null && createNewBranchRequest !== undefined) {
                if (createNewBranchRequest instanceof CreateNewBranchRequest) {
                    repositoryId = createNewBranchRequest.repositoryId;
                    body = createNewBranchRequest.body
                } else {
                    repositoryId = createNewBranchRequest['repository_id'];
                    body = createNewBranchRequest['body'];
                }
            }

        
            if (repositoryId === null || repositoryId === undefined) {
            throw new RequiredError('repositoryId','Required parameter repositoryId was null or undefined when calling createNewBranch.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'repository_id': repositoryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 分支关联工作项
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateIssues(associateIssuesRequest?: AssociateIssuesRequest) {
            const options = {
                method: "POST",
                url: "/v2/projects/issues",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (associateIssuesRequest !== null && associateIssuesRequest !== undefined) {
                if (associateIssuesRequest instanceof AssociateIssuesRequest) {
                    body = associateIssuesRequest.body
                } else {
                    body = associateIssuesRequest['body'];
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
         * 创建项目后，创建仓库组由后台生成方式 传入参数：仓库名、模板id、是否导入项目成员、归属项目
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createProjectAndRepositories(createProjectAndRepositoriesRequest?: CreateProjectAndRepositoriesRequest) {
            const options = {
                method: "POST",
                url: "/v2/projects/repositories",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createProjectAndRepositoriesRequest !== null && createProjectAndRepositoriesRequest !== undefined) {
                if (createProjectAndRepositoriesRequest instanceof CreateProjectAndRepositoriesRequest) {
                    body = createProjectAndRepositoriesRequest.body
                } else {
                    body = createProjectAndRepositoriesRequest['body'];
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
         * 创建仓库后fork仓库 传入参数：仓库名、是否导入项目成员、归属项目
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createProjectAndforkRepositories(createProjectAndforkRepositoriesRequest?: CreateProjectAndforkRepositoriesRequest) {
            const options = {
                method: "POST",
                url: "/v2/projects/repositories/fork",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createProjectAndforkRepositoriesRequest !== null && createProjectAndforkRepositoriesRequest !== undefined) {
                if (createProjectAndforkRepositoriesRequest instanceof CreateProjectAndforkRepositoriesRequest) {
                    body = createProjectAndforkRepositoriesRequest.body
                } else {
                    body = createProjectAndforkRepositoriesRequest['body'];
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
         * 获取用户的所有仓库信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listUserAllRepositories(listUserAllRepositoriesRequest?: ListUserAllRepositoriesRequest) {
            const options = {
                method: "GET",
                url: "/v2/projects/repositories",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let pageIndex;
            
            let pageSize;
            
            let search;

            if (listUserAllRepositoriesRequest !== null && listUserAllRepositoriesRequest !== undefined) {
                if (listUserAllRepositoriesRequest instanceof ListUserAllRepositoriesRequest) {
                    pageIndex = listUserAllRepositoriesRequest.pageIndex;
                    pageSize = listUserAllRepositoriesRequest.pageSize;
                    search = listUserAllRepositoriesRequest.search;
                } else {
                    pageIndex = listUserAllRepositoriesRequest['page_index'];
                    pageSize = listUserAllRepositoriesRequest['page_size'];
                    search = listUserAllRepositoriesRequest['search'];
                }
            }

        
            if (pageIndex !== null && pageIndex !== undefined) {
                localVarQueryParameter['page_index'] = pageIndex;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (search !== null && search !== undefined) {
                localVarQueryParameter['search'] = search;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取仓库列表,模糊查询支持范围,如果未传入project uuid，则支持按仓库名或项目名模糊查询，否则，只按仓库名模糊匹配
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAllRepositoryByTwoProjectId(showAllRepositoryByTwoProjectIdRequest?: ShowAllRepositoryByTwoProjectIdRequest) {
            const options = {
                method: "GET",
                url: "/v2/projects/{project_uuid}/repositories",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectUuid;
            
            let pageIndex;
            
            let pageSize;
            
            let search;

            if (showAllRepositoryByTwoProjectIdRequest !== null && showAllRepositoryByTwoProjectIdRequest !== undefined) {
                if (showAllRepositoryByTwoProjectIdRequest instanceof ShowAllRepositoryByTwoProjectIdRequest) {
                    projectUuid = showAllRepositoryByTwoProjectIdRequest.projectUuid;
                    pageIndex = showAllRepositoryByTwoProjectIdRequest.pageIndex;
                    pageSize = showAllRepositoryByTwoProjectIdRequest.pageSize;
                    search = showAllRepositoryByTwoProjectIdRequest.search;
                } else {
                    projectUuid = showAllRepositoryByTwoProjectIdRequest['project_uuid'];
                    pageIndex = showAllRepositoryByTwoProjectIdRequest['page_index'];
                    pageSize = showAllRepositoryByTwoProjectIdRequest['page_size'];
                    search = showAllRepositoryByTwoProjectIdRequest['search'];
                }
            }

        
            if (projectUuid === null || projectUuid === undefined) {
            throw new RequiredError('projectUuid','Required parameter projectUuid was null or undefined when calling showAllRepositoryByTwoProjectId.');
            }
            if (pageIndex !== null && pageIndex !== undefined) {
                localVarQueryParameter['page_index'] = pageIndex;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (search !== null && search !== undefined) {
                localVarQueryParameter['search'] = search;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_uuid': projectUuid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 提交代码自动触发编译构建，添加仓库钩子
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addHooks(addHooksRequest?: AddHooksRequest) {
            const options = {
                method: "POST",
                url: "/v1/repositories/{group_name}/{repository_name}/hooks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let groupName;
            
            let repositoryName;

            if (addHooksRequest !== null && addHooksRequest !== undefined) {
                if (addHooksRequest instanceof AddHooksRequest) {
                    groupName = addHooksRequest.groupName;
                    repositoryName = addHooksRequest.repositoryName;
                    body = addHooksRequest.body
                } else {
                    groupName = addHooksRequest['group_name'];
                    repositoryName = addHooksRequest['repository_name'];
                    body = addHooksRequest['body'];
                }
            }

        
            if (groupName === null || groupName === undefined) {
            throw new RequiredError('groupName','Required parameter groupName was null or undefined when calling addHooks.');
            }
            if (repositoryName === null || repositoryName === undefined) {
            throw new RequiredError('repositoryName','Required parameter repositoryName was null or undefined when calling addHooks.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'group_name': groupName,'repository_name': repositoryName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 提交代码自动触发编译构建，删除仓库钩子
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteHooks(deleteHooksRequest?: DeleteHooksRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/repositories/{group_name}/{repository_name}/hooks/{hook_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let groupName;
            
            let hookId;
            
            let repositoryName;

            if (deleteHooksRequest !== null && deleteHooksRequest !== undefined) {
                if (deleteHooksRequest instanceof DeleteHooksRequest) {
                    groupName = deleteHooksRequest.groupName;
                    hookId = deleteHooksRequest.hookId;
                    repositoryName = deleteHooksRequest.repositoryName;
                } else {
                    groupName = deleteHooksRequest['group_name'];
                    hookId = deleteHooksRequest['hook_id'];
                    repositoryName = deleteHooksRequest['repository_name'];
                }
            }

        
            if (groupName === null || groupName === undefined) {
            throw new RequiredError('groupName','Required parameter groupName was null or undefined when calling deleteHooks.');
            }
            if (hookId === null || hookId === undefined) {
            throw new RequiredError('hookId','Required parameter hookId was null or undefined when calling deleteHooks.');
            }
            if (repositoryName === null || repositoryName === undefined) {
            throw new RequiredError('repositoryName','Required parameter repositoryName was null or undefined when calling deleteHooks.');
            }

            options.pathParams = { 'group_name': groupName,'hook_id': hookId,'repository_name': repositoryName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取仓库webhook
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHooks(listHooksRequest?: ListHooksRequest) {
            const options = {
                method: "GET",
                url: "/v1/repositories/{group_name}/{repository_name}/hooks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let groupName;
            
            let repositoryName;
            
            let hookId;

            if (listHooksRequest !== null && listHooksRequest !== undefined) {
                if (listHooksRequest instanceof ListHooksRequest) {
                    groupName = listHooksRequest.groupName;
                    repositoryName = listHooksRequest.repositoryName;
                    hookId = listHooksRequest.hookId;
                } else {
                    groupName = listHooksRequest['group_name'];
                    repositoryName = listHooksRequest['repository_name'];
                    hookId = listHooksRequest['hook_id'];
                }
            }

        
            if (groupName === null || groupName === undefined) {
            throw new RequiredError('groupName','Required parameter groupName was null or undefined when calling listHooks.');
            }
            if (repositoryName === null || repositoryName === undefined) {
            throw new RequiredError('repositoryName','Required parameter repositoryName was null or undefined when calling listHooks.');
            }
            if (hookId !== null && hookId !== undefined) {
                localVarQueryParameter['hook_id'] = hookId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'group_name': groupName,'repository_name': repositoryName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): CodeHubClient {
    return new CodeHubClient(client);
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