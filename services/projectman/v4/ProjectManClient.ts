import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
import FormData from 'form-data';

import { AddApplyJoinProjectForAgcRequest } from './model/AddApplyJoinProjectForAgcRequest';
import { AddApplyJoinProjectForAgcResponse } from './model/AddApplyJoinProjectForAgcResponse';
import { AddIssueWorkHoursRequest } from './model/AddIssueWorkHoursRequest';
import { AddIssueWorkHoursRequestBody } from './model/AddIssueWorkHoursRequestBody';
import { AddIssueWorkHoursResponse } from './model/AddIssueWorkHoursResponse';
import { AddIssueWorkHoursResponseBodyAddedWorkHours } from './model/AddIssueWorkHoursResponseBodyAddedWorkHours';
import { AddMemberRequestV4 } from './model/AddMemberRequestV4';
import { AddMemberV4Request } from './model/AddMemberV4Request';
import { AddMemberV4Response } from './model/AddMemberV4Response';
import { AssociateIssueDetail } from './model/AssociateIssueDetail';
import { AssociatedTestCase } from './model/AssociatedTestCase';
import { AttachWikiDetail } from './model/AttachWikiDetail';
import { BatchAddMemberRequestV4 } from './model/BatchAddMemberRequestV4';
import { BatchAddMembersV4Request } from './model/BatchAddMembersV4Request';
import { BatchAddMembersV4RequestBody } from './model/BatchAddMembersV4RequestBody';
import { BatchAddMembersV4Response } from './model/BatchAddMembersV4Response';
import { BatchAssociatedIssue } from './model/BatchAssociatedIssue';
import { BatchDelelteIssuesRequestV4 } from './model/BatchDelelteIssuesRequestV4';
import { BatchDeleteIssuesV4Request } from './model/BatchDeleteIssuesV4Request';
import { BatchDeleteIssuesV4Response } from './model/BatchDeleteIssuesV4Response';
import { BatchDeleteIterationsV4Request } from './model/BatchDeleteIterationsV4Request';
import { BatchDeleteIterationsV4RequestBody } from './model/BatchDeleteIterationsV4RequestBody';
import { BatchDeleteIterationsV4Response } from './model/BatchDeleteIterationsV4Response';
import { BatchDeleteMembersV4Request } from './model/BatchDeleteMembersV4Request';
import { BatchDeleteMembersV4RequestBody } from './model/BatchDeleteMembersV4RequestBody';
import { BatchDeleteMembersV4Response } from './model/BatchDeleteMembersV4Response';
import { BatchListAssociatedIssuesRequest } from './model/BatchListAssociatedIssuesRequest';
import { BatchListAssociatedIssuesResponse } from './model/BatchListAssociatedIssuesResponse';
import { BatchUpdateChildNickNamesRequest } from './model/BatchUpdateChildNickNamesRequest';
import { BatchUpdateChildNickNamesResponse } from './model/BatchUpdateChildNickNamesResponse';
import { BatchUpdateChildUserNickNamesRequestBody } from './model/BatchUpdateChildUserNickNamesRequestBody';
import { BugStatisticResponseV4 } from './model/BugStatisticResponseV4';
import { CancelProjectDomainRequest } from './model/CancelProjectDomainRequest';
import { CancelProjectDomainResponse } from './model/CancelProjectDomainResponse';
import { Chart } from './model/Chart';
import { CheckProjectNameRequestV4 } from './model/CheckProjectNameRequestV4';
import { CheckProjectNameV4Request } from './model/CheckProjectNameV4Request';
import { CheckProjectNameV4Response } from './model/CheckProjectNameV4Response';
import { CommentUserV4 } from './model/CommentUserV4';
import { CommitRecordDetail } from './model/CommitRecordDetail';
import { CreateCustomfieldV1Req } from './model/CreateCustomfieldV1Req';
import { CreateCustomfieldsRequest } from './model/CreateCustomfieldsRequest';
import { CreateCustomfieldsResponse } from './model/CreateCustomfieldsResponse';
import { CreateIssueRequestV4 } from './model/CreateIssueRequestV4';
import { CreateIssueResponseV4Domain } from './model/CreateIssueResponseV4Domain';
import { CreateIssueResponseV4ParentIssue } from './model/CreateIssueResponseV4ParentIssue';
import { CreateIssueResponseV4Tracker } from './model/CreateIssueResponseV4Tracker';
import { CreateIssueV4Request } from './model/CreateIssueV4Request';
import { CreateIssueV4Response } from './model/CreateIssueV4Response';
import { CreateIterationRequestV4 } from './model/CreateIterationRequestV4';
import { CreateIterationV4Request } from './model/CreateIterationV4Request';
import { CreateIterationV4Response } from './model/CreateIterationV4Response';
import { CreateProjectDomainRequest } from './model/CreateProjectDomainRequest';
import { CreateProjectDomainRequestBody } from './model/CreateProjectDomainRequestBody';
import { CreateProjectDomainResponse } from './model/CreateProjectDomainResponse';
import { CreateProjectDomainResponseBody } from './model/CreateProjectDomainResponseBody';
import { CreateProjectModuleRequest } from './model/CreateProjectModuleRequest';
import { CreateProjectModuleRequestBody } from './model/CreateProjectModuleRequestBody';
import { CreateProjectModuleResponse } from './model/CreateProjectModuleResponse';
import { CreateProjectV4Request } from './model/CreateProjectV4Request';
import { CreateProjectV4RequestBody } from './model/CreateProjectV4RequestBody';
import { CreateProjectV4Response } from './model/CreateProjectV4Response';
import { CreateSystemIssueRequestV4 } from './model/CreateSystemIssueRequestV4';
import { CreateSystemIssueV4Request } from './model/CreateSystemIssueV4Request';
import { CreateSystemIssueV4Response } from './model/CreateSystemIssueV4Response';
import { Creator } from './model/Creator';
import { CustomFeildRecord } from './model/CustomFeildRecord';
import { CustomField } from './model/CustomField';
import { DeleteAttachmentRequest } from './model/DeleteAttachmentRequest';
import { DeleteAttachmentResponse } from './model/DeleteAttachmentResponse';
import { DeleteIssueV4Request } from './model/DeleteIssueV4Request';
import { DeleteIssueV4Response } from './model/DeleteIssueV4Response';
import { DeleteIterationV4Request } from './model/DeleteIterationV4Request';
import { DeleteIterationV4Response } from './model/DeleteIterationV4Response';
import { DeleteProjectModuleRequest } from './model/DeleteProjectModuleRequest';
import { DeleteProjectModuleResponse } from './model/DeleteProjectModuleResponse';
import { DeleteProjectV4Request } from './model/DeleteProjectV4Request';
import { DeleteProjectV4Response } from './model/DeleteProjectV4Response';
import { DemandStatisticResponseV4 } from './model/DemandStatisticResponseV4';
import { DownloadAttachmentRequest } from './model/DownloadAttachmentRequest';
import { DownloadAttachmentResponse } from './model/DownloadAttachmentResponse';
import { DownloadImageFileRequest } from './model/DownloadImageFileRequest';
import { DownloadImageFileResponse } from './model/DownloadImageFileResponse';
import { FieldVO } from './model/FieldVO';
import { GetProjectInfoV4ResultProject } from './model/GetProjectInfoV4ResultProject';
import { GetProjectInfoV4ResultProjectCreator } from './model/GetProjectInfoV4ResultProjectCreator';
import { IPDStatusVO } from './model/IPDStatusVO';
import { IssueAccessory } from './model/IssueAccessory';
import { IssueAttrHistoryRecord } from './model/IssueAttrHistoryRecord';
import { IssueCommentV4 } from './model/IssueCommentV4';
import { IssueCompletionRateResponseV4 } from './model/IssueCompletionRateResponseV4';
import { IssueCompletionRateV4IssueCompletionRates } from './model/IssueCompletionRateV4IssueCompletionRates';
import { IssueCompletionRateV4IssueStatus } from './model/IssueCompletionRateV4IssueStatus';
import { IssueConfigFieldsResponseBodyResult } from './model/IssueConfigFieldsResponseBodyResult';
import { IssueConfigFieldsResponseBodyResultConfigFields } from './model/IssueConfigFieldsResponseBodyResultConfigFields';
import { IssueCustomField } from './model/IssueCustomField';
import { IssueDetailCustomField } from './model/IssueDetailCustomField';
import { IssueDetailResponseV4Env } from './model/IssueDetailResponseV4Env';
import { IssueDetailResponseV4StoryPoint } from './model/IssueDetailResponseV4StoryPoint';
import { IssueItemSfV4 } from './model/IssueItemSfV4';
import { IssueItemSfV4Domain } from './model/IssueItemSfV4Domain';
import { IssueItemSfV4Iteration } from './model/IssueItemSfV4Iteration';
import { IssueItemSfV4Module } from './model/IssueItemSfV4Module';
import { IssueItemSfV4Priority } from './model/IssueItemSfV4Priority';
import { IssueItemSfV4Severity } from './model/IssueItemSfV4Severity';
import { IssueItemSfV4Status } from './model/IssueItemSfV4Status';
import { IssueItemSfV4StoryPoint } from './model/IssueItemSfV4StoryPoint';
import { IssueItemSfV4Tracker } from './model/IssueItemSfV4Tracker';
import { IssueOrder } from './model/IssueOrder';
import { IssueProjectResponseV4 } from './model/IssueProjectResponseV4';
import { IssueRecordV4 } from './model/IssueRecordV4';
import { IssueRecordV4Details } from './model/IssueRecordV4Details';
import { IssueRecordV4User } from './model/IssueRecordV4User';
import { IssueRequestV4 } from './model/IssueRequestV4';
import { IssueResponseV4 } from './model/IssueResponseV4';
import { IssueResponseV4Order } from './model/IssueResponseV4Order';
import { IssueStatus } from './model/IssueStatus';
import { IssueStatusResponseV4 } from './model/IssueStatusResponseV4';
import { IssueUser } from './model/IssueUser';
import { IterationHistory } from './model/IterationHistory';
import { IterationHistoryDetails } from './model/IterationHistoryDetails';
import { IterationHistoryOperator } from './model/IterationHistoryOperator';
import { ListAssociatedIssuesRequest } from './model/ListAssociatedIssuesRequest';
import { ListAssociatedIssuesResponse } from './model/ListAssociatedIssuesResponse';
import { ListAssociatedTestCasesRequest } from './model/ListAssociatedTestCasesRequest';
import { ListAssociatedTestCasesResponse } from './model/ListAssociatedTestCasesResponse';
import { ListAssociatedWikisRequest } from './model/ListAssociatedWikisRequest';
import { ListAssociatedWikisResponse } from './model/ListAssociatedWikisResponse';
import { ListChildIssuesV4Request } from './model/ListChildIssuesV4Request';
import { ListChildIssuesV4Response } from './model/ListChildIssuesV4Response';
import { ListDomainNotAddedProjectsV4Request } from './model/ListDomainNotAddedProjectsV4Request';
import { ListDomainNotAddedProjectsV4Response } from './model/ListDomainNotAddedProjectsV4Response';
import { ListDomainNotAddedProjectsV4ResponseBodyCreator } from './model/ListDomainNotAddedProjectsV4ResponseBodyCreator';
import { ListDomainNotAddedProjectsV4ResponseBodyProjects } from './model/ListDomainNotAddedProjectsV4ResponseBodyProjects';
import { ListIssueAssociatedCommitsRequest } from './model/ListIssueAssociatedCommitsRequest';
import { ListIssueAssociatedCommitsResponse } from './model/ListIssueAssociatedCommitsResponse';
import { ListIssueCommentsV4Request } from './model/ListIssueCommentsV4Request';
import { ListIssueCommentsV4Response } from './model/ListIssueCommentsV4Response';
import { ListIssueCustomFieldsRequest } from './model/ListIssueCustomFieldsRequest';
import { ListIssueCustomFieldsRequestBody } from './model/ListIssueCustomFieldsRequestBody';
import { ListIssueCustomFieldsResponse } from './model/ListIssueCustomFieldsResponse';
import { ListIssueFieldsRequest } from './model/ListIssueFieldsRequest';
import { ListIssueFieldsResponse } from './model/ListIssueFieldsResponse';
import { ListIssueItemResponse } from './model/ListIssueItemResponse';
import { ListIssueRecordsV4Request } from './model/ListIssueRecordsV4Request';
import { ListIssueRecordsV4Response } from './model/ListIssueRecordsV4Response';
import { ListIssueRequestV4 } from './model/ListIssueRequestV4';
import { ListIssueRequestV4CustomFields } from './model/ListIssueRequestV4CustomFields';
import { ListIssueStatuesRequest } from './model/ListIssueStatuesRequest';
import { ListIssueStatuesResponse } from './model/ListIssueStatuesResponse';
import { ListIssuesSfV4Request } from './model/ListIssuesSfV4Request';
import { ListIssuesSfV4Response } from './model/ListIssuesSfV4Response';
import { ListIssuesV4Request } from './model/ListIssuesV4Request';
import { ListIssuesV4Response } from './model/ListIssuesV4Response';
import { ListIterationHistoriesRequest } from './model/ListIterationHistoriesRequest';
import { ListIterationHistoriesResponse } from './model/ListIterationHistoriesResponse';
import { ListProjectBugStaticsV4Request } from './model/ListProjectBugStaticsV4Request';
import { ListProjectBugStaticsV4Response } from './model/ListProjectBugStaticsV4Response';
import { ListProjectDemandStaticV4Request } from './model/ListProjectDemandStaticV4Request';
import { ListProjectDemandStaticV4Response } from './model/ListProjectDemandStaticV4Response';
import { ListProjectDomainsRequest } from './model/ListProjectDomainsRequest';
import { ListProjectDomainsResponse } from './model/ListProjectDomainsResponse';
import { ListProjectIssuesRecordsV4Request } from './model/ListProjectIssuesRecordsV4Request';
import { ListProjectIssuesRecordsV4Response } from './model/ListProjectIssuesRecordsV4Response';
import { ListProjectIterationsV4Request } from './model/ListProjectIterationsV4Request';
import { ListProjectIterationsV4Response } from './model/ListProjectIterationsV4Response';
import { ListProjectMembersV4Request } from './model/ListProjectMembersV4Request';
import { ListProjectMembersV4Response } from './model/ListProjectMembersV4Response';
import { ListProjectModulesRequest } from './model/ListProjectModulesRequest';
import { ListProjectModulesResponse } from './model/ListProjectModulesResponse';
import { ListProjectVersionsV4ResponseBodyIterations } from './model/ListProjectVersionsV4ResponseBodyIterations';
import { ListProjectWorkHoursRequest } from './model/ListProjectWorkHoursRequest';
import { ListProjectWorkHoursRequestBody } from './model/ListProjectWorkHoursRequestBody';
import { ListProjectWorkHoursResponse } from './model/ListProjectWorkHoursResponse';
import { ListProjectWorkHoursTypeRequest } from './model/ListProjectWorkHoursTypeRequest';
import { ListProjectWorkHoursTypeResponse } from './model/ListProjectWorkHoursTypeResponse';
import { ListProjectsV4Request } from './model/ListProjectsV4Request';
import { ListProjectsV4Response } from './model/ListProjectsV4Response';
import { ListProjectsV4ResponseBodyCreator } from './model/ListProjectsV4ResponseBodyCreator';
import { ListProjectsV4ResponseBodyProjects } from './model/ListProjectsV4ResponseBodyProjects';
import { ListScrumProjectStatusesRequest } from './model/ListScrumProjectStatusesRequest';
import { ListScrumProjectStatusesResponse } from './model/ListScrumProjectStatusesResponse';
import { ListSpecIssueStayTimesRequest } from './model/ListSpecIssueStayTimesRequest';
import { ListSpecIssueStayTimesRequestBody } from './model/ListSpecIssueStayTimesRequestBody';
import { ListSpecIssueStayTimesResponse } from './model/ListSpecIssueStayTimesResponse';
import { ListSpecIssueStayTimesResponseBodyData } from './model/ListSpecIssueStayTimesResponseBodyData';
import { ListStatusStatisticRequest } from './model/ListStatusStatisticRequest';
import { ListStatusStatisticResponse } from './model/ListStatusStatisticResponse';
import { ListTemplatesRequest } from './model/ListTemplatesRequest';
import { ListTemplatesResponse } from './model/ListTemplatesResponse';
import { ListWorkTableIssueRequestV4RequestBody } from './model/ListWorkTableIssueRequestV4RequestBody';
import { ListWorkitemStatusRecordsV4Request } from './model/ListWorkitemStatusRecordsV4Request';
import { ListWorkitemStatusRecordsV4Response } from './model/ListWorkitemStatusRecordsV4Response';
import { ListWorkitemsRequest } from './model/ListWorkitemsRequest';
import { ListWorkitemsResponse } from './model/ListWorkitemsResponse';
import { MemberListV4Members } from './model/MemberListV4Members';
import { MetricRequest2 } from './model/MetricRequest2';
import { MetricRequest2Dividend } from './model/MetricRequest2Dividend';
import { MetricRequest3 } from './model/MetricRequest3';
import { MetricRequest3Dividend } from './model/MetricRequest3Dividend';
import { MetricRequestV2 } from './model/MetricRequestV2';
import { MetricRequestV2Dividend } from './model/MetricRequestV2Dividend';
import { MetricRequestV2DividendCustomFields } from './model/MetricRequestV2DividendCustomFields';
import { ModuleOwner } from './model/ModuleOwner';
import { NewCustomField } from './model/NewCustomField';
import { OptionEntity } from './model/OptionEntity';
import { PageVO } from './model/PageVO';
import { ProjectChildModule } from './model/ProjectChildModule';
import { ProjectModule } from './model/ProjectModule';
import { RemoveProjectRequest } from './model/RemoveProjectRequest';
import { RemoveProjectResponse } from './model/RemoveProjectResponse';
import { ScrumCustomField } from './model/ScrumCustomField';
import { ScrumStatusFlowDirectToVo } from './model/ScrumStatusFlowDirectToVo';
import { ScrumStatusFlowVo } from './model/ScrumStatusFlowVo';
import { SearchIssuesRequest } from './model/SearchIssuesRequest';
import { SearchIssuesResponse } from './model/SearchIssuesResponse';
import { ShowBugDensityV2Request } from './model/ShowBugDensityV2Request';
import { ShowBugDensityV2Response } from './model/ShowBugDensityV2Response';
import { ShowBugsPerDeveloperRequest } from './model/ShowBugsPerDeveloperRequest';
import { ShowBugsPerDeveloperResponse } from './model/ShowBugsPerDeveloperResponse';
import { ShowCompletionRateRequest } from './model/ShowCompletionRateRequest';
import { ShowCompletionRateResponse } from './model/ShowCompletionRateResponse';
import { ShowCurUserInfoRequest } from './model/ShowCurUserInfoRequest';
import { ShowCurUserInfoResponse } from './model/ShowCurUserInfoResponse';
import { ShowCurUserRoleRequest } from './model/ShowCurUserRoleRequest';
import { ShowCurUserRoleResponse } from './model/ShowCurUserRoleResponse';
import { ShowIssueCompletionRateRequest } from './model/ShowIssueCompletionRateRequest';
import { ShowIssueCompletionRateResponse } from './model/ShowIssueCompletionRateResponse';
import { ShowIssueConfigFieldsRequest } from './model/ShowIssueConfigFieldsRequest';
import { ShowIssueConfigFieldsResponse } from './model/ShowIssueConfigFieldsResponse';
import { ShowIssueDetailRequest } from './model/ShowIssueDetailRequest';
import { ShowIssueDetailResponse } from './model/ShowIssueDetailResponse';
import { ShowIssueV4Request } from './model/ShowIssueV4Request';
import { ShowIssueV4Response } from './model/ShowIssueV4Response';
import { ShowIssuesWrokFlowConfigRequest } from './model/ShowIssuesWrokFlowConfigRequest';
import { ShowIssuesWrokFlowConfigResponse } from './model/ShowIssuesWrokFlowConfigResponse';
import { ShowIterationV4Request } from './model/ShowIterationV4Request';
import { ShowIterationV4Response } from './model/ShowIterationV4Response';
import { ShowProjectInfoV4Request } from './model/ShowProjectInfoV4Request';
import { ShowProjectInfoV4Response } from './model/ShowProjectInfoV4Response';
import { ShowProjectSummaryV4Request } from './model/ShowProjectSummaryV4Request';
import { ShowProjectSummaryV4Response } from './model/ShowProjectSummaryV4Response';
import { ShowProjectWorkHoursRequest } from './model/ShowProjectWorkHoursRequest';
import { ShowProjectWorkHoursRequestBody } from './model/ShowProjectWorkHoursRequestBody';
import { ShowProjectWorkHoursResponse } from './model/ShowProjectWorkHoursResponse';
import { ShowProjectWorkHoursResponseBodyWorkHours } from './model/ShowProjectWorkHoursResponseBodyWorkHours';
import { ShowWorkItemWrokflowConfigRequest } from './model/ShowWorkItemWrokflowConfigRequest';
import { ShowWorkItemWrokflowConfigResponse } from './model/ShowWorkItemWrokflowConfigResponse';
import { ShowWorkflowTemplateRequest } from './model/ShowWorkflowTemplateRequest';
import { ShowWorkflowTemplateResponse } from './model/ShowWorkflowTemplateResponse';
import { SimpleProject } from './model/SimpleProject';
import { SimpleUser } from './model/SimpleUser';
import { SimpleUserIn } from './model/SimpleUserIn';
import { StatusAttribute } from './model/StatusAttribute';
import { StatusFlowDirectToVo } from './model/StatusFlowDirectToVo';
import { StatusVo } from './model/StatusVo';
import { TemplateListV4ResponseBodyTemplates } from './model/TemplateListV4ResponseBodyTemplates';
import { TransferWorkItemFlowRequest } from './model/TransferWorkItemFlowRequest';
import { TransferWorkItemFlowResponse } from './model/TransferWorkItemFlowResponse';
import { UpdateChildUserNickNameRequestBody } from './model/UpdateChildUserNickNameRequestBody';
import { UpdateIssueV4Request } from './model/UpdateIssueV4Request';
import { UpdateIssueV4Response } from './model/UpdateIssueV4Response';
import { UpdateIterationRequestV4 } from './model/UpdateIterationRequestV4';
import { UpdateIterationV4Request } from './model/UpdateIterationV4Request';
import { UpdateIterationV4Response } from './model/UpdateIterationV4Response';
import { UpdateMembesRoleV4Request } from './model/UpdateMembesRoleV4Request';
import { UpdateMembesRoleV4RequestBody } from './model/UpdateMembesRoleV4RequestBody';
import { UpdateMembesRoleV4Response } from './model/UpdateMembesRoleV4Response';
import { UpdateNickNameV4Request } from './model/UpdateNickNameV4Request';
import { UpdateNickNameV4Response } from './model/UpdateNickNameV4Response';
import { UpdateProjectDomainRequest } from './model/UpdateProjectDomainRequest';
import { UpdateProjectDomainResponse } from './model/UpdateProjectDomainResponse';
import { UpdateProjectModuleRequest } from './model/UpdateProjectModuleRequest';
import { UpdateProjectModuleRequestBody } from './model/UpdateProjectModuleRequestBody';
import { UpdateProjectModuleResponse } from './model/UpdateProjectModuleResponse';
import { UpdateProjectRequestV4 } from './model/UpdateProjectRequestV4';
import { UpdateProjectV4Request } from './model/UpdateProjectV4Request';
import { UpdateProjectV4Response } from './model/UpdateProjectV4Response';
import { UpdateUserNickNameRequestV4 } from './model/UpdateUserNickNameRequestV4';
import { UploadAttachmentsRequest } from './model/UploadAttachmentsRequest';
import { UploadAttachmentsRequestBody } from './model/UploadAttachmentsRequestBody';
import { UploadAttachmentsResponse } from './model/UploadAttachmentsResponse';
import { UploadIssueImgRequest } from './model/UploadIssueImgRequest';
import { UploadIssueImgRequestBody } from './model/UploadIssueImgRequestBody';
import { UploadIssueImgResponse } from './model/UploadIssueImgResponse';
import { UserRequest } from './model/UserRequest';
import { UserStatusStatistic } from './model/UserStatusStatistic';
import { WorkHoursType } from './model/WorkHoursType';
import { WorkItemFlowRequestBody } from './model/WorkItemFlowRequestBody';
import { WorkItemStatusFlowVo } from './model/WorkItemStatusFlowVo';
import { WorkTableIssuseListResponseBodyDomain } from './model/WorkTableIssuseListResponseBodyDomain';
import { WorkTableIssuseListResponseBodyIssueList } from './model/WorkTableIssuseListResponseBodyIssueList';
import { WorkTableIssuseListResponseBodyModule } from './model/WorkTableIssuseListResponseBodyModule';
import { WorkTableIssuseListResponseBodyOrder } from './model/WorkTableIssuseListResponseBodyOrder';
import { WorkTableIssuseListResponseBodyParentIssue } from './model/WorkTableIssuseListResponseBodyParentIssue';
import { WorkTableIssuseListResponseBodyPriority } from './model/WorkTableIssuseListResponseBodyPriority';
import { WorkTableIssuseListResponseBodyProject } from './model/WorkTableIssuseListResponseBodyProject';
import { WorkTableIssuseListResponseBodySeverity } from './model/WorkTableIssuseListResponseBodySeverity';
import { WorkTableIssuseListResponseBodyStatus } from './model/WorkTableIssuseListResponseBodyStatus';
import { WorkTableIssuseListResponseBodyTracker } from './model/WorkTableIssuseListResponseBodyTracker';
import { WorkflowTemplateConfigsVO } from './model/WorkflowTemplateConfigsVO';
import { WorkflowTemplateFlowsVO } from './model/WorkflowTemplateFlowsVO';
import { WorkflowTemplateNodesVO } from './model/WorkflowTemplateNodesVO';
import { WorkflowTemplateVO } from './model/WorkflowTemplateVO';
import { WorkitemCustomField } from './model/WorkitemCustomField';
import { WorkitemStatus } from './model/WorkitemStatus';
import { WorkitemStatusRecords } from './model/WorkitemStatusRecords';
import { WorkitemStatusStatus } from './model/WorkitemStatusStatus';
import { WorkitemUser } from './model/WorkitemUser';
import { Workitems } from './model/Workitems';
import { WorkitemsDomain } from './model/WorkitemsDomain';
import { WorkitemsIteration } from './model/WorkitemsIteration';
import { WorkitemsModule } from './model/WorkitemsModule';
import { WorkitemsStatus } from './model/WorkitemsStatus';
import { WorkitemsTags } from './model/WorkitemsTags';

export class ProjectManClient {
    public static newBuilder(): ClientBuilder<ProjectManClient> {
            let client = new ClientBuilder<ProjectManClient>(newClient);
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
     * AGC调用 当前用户申请加入项目, 申请的用户id写在header中
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary AGC调用 当前用户申请加入项目
     * @param {string} domainId 租户id
     * @param {string} userId 用户id
     * @param {string} projectId devcloud项目的32位id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addApplyJoinProjectForAgc(addApplyJoinProjectForAgcRequest?: AddApplyJoinProjectForAgcRequest): Promise<AddApplyJoinProjectForAgcResponse> {
        const options = ParamCreater().addApplyJoinProjectForAgc(addApplyJoinProjectForAgcRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加项目成员,可以添加跨租户成员
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加项目成员
     * @param {string} projectId devcloud项目的32位id
     * @param {AddMemberRequestV4} addMemberV4RequestBody 添加的成员实体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addMemberV4(addMemberV4Request?: AddMemberV4Request): Promise<AddMemberV4Response> {
        const options = ParamCreater().addMemberV4(addMemberV4Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量添加项目成员，只能添加和项目创建者同一租户下的成员，不正确的用户id会略过，添加的用户超过权限的，默认角色设置为7
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加项目成员
     * @param {string} projectId devcloud项目的32位id
     * @param {BatchAddMembersV4RequestBody} batchAddMembersV4RequestBody 批量添加的成员实体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchAddMembersV4(batchAddMembersV4Request?: BatchAddMembersV4Request): Promise<BatchAddMembersV4Response> {
        const options = ParamCreater().batchAddMembersV4(batchAddMembersV4Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除项目成员
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除项目成员
     * @param {string} projectId devcloud项目的32位id
     * @param {BatchDeleteMembersV4RequestBody} batchDeleteMembersV4RequestBody 删除的用户id列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteMembersV4(batchDeleteMembersV4Request?: BatchDeleteMembersV4Request): Promise<BatchDeleteMembersV4Response> {
        const options = ParamCreater().batchDeleteMembersV4(batchDeleteMembersV4Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 拥有te_admin角色的用户可以更新其他用户的昵称
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新子用户昵称
     * @param {BatchUpdateChildUserNickNamesRequestBody} batchUpdateChildNickNamesRequestbody 更新用户昵称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUpdateChildNickNames(batchUpdateChildNickNamesRequest?: BatchUpdateChildNickNamesRequest): Promise<BatchUpdateChildNickNamesResponse> {
        const options = ParamCreater().batchUpdateChildNickNames(batchUpdateChildNickNamesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 检查项目名称是否存在
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 检查项目名称是否存在
     * @param {CheckProjectNameRequestV4} checkProjectNameV4RequestBody 项目名实体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkProjectNameV4(checkProjectNameV4Request?: CheckProjectNameV4Request): Promise<CheckProjectNameV4Response> {
        const options = ParamCreater().checkProjectNameV4(checkProjectNameV4Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建项目
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建项目
     * @param {CreateProjectV4RequestBody} createProjectV4RequestBody 请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createProjectV4(createProjectV4Request?: CreateProjectV4Request): Promise<CreateProjectV4Response> {
        const options = ParamCreater().createProjectV4(createProjectV4Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除项目
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除项目
     * @param {string} projectId devcloud项目的32位id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteProjectV4(deleteProjectV4Request?: DeleteProjectV4Request): Promise<DeleteProjectV4Response> {
        const options = ParamCreater().deleteProjectV4(deleteProjectV4Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取租户没有加入的项目
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取租户没有加入的项目
     * @param {number} [offset] 分页索引，偏移量,offset是limit的整数倍，limit&#x3D;10,offset&#x3D;0,10,20...
     * @param {number} [limit] 每页显示的数量,每页最多显示100条
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDomainNotAddedProjectsV4(listDomainNotAddedProjectsV4Request?: ListDomainNotAddedProjectsV4Request): Promise<ListDomainNotAddedProjectsV4Response> {
        const options = ParamCreater().listDomainNotAddedProjectsV4(listDomainNotAddedProjectsV4Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取bug统计信息，按模块统计
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取bug统计信息
     * @param {string} projectId devcloud项目的32位id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProjectBugStaticsV4(listProjectBugStaticsV4Request?: ListProjectBugStaticsV4Request): Promise<ListProjectBugStaticsV4Response> {
        const options = ParamCreater().listProjectBugStaticsV4(listProjectBugStaticsV4Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取需求统计信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取需求统计信息
     * @param {string} projectId devcloud项目的32位id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProjectDemandStaticV4(listProjectDemandStaticV4Request?: ListProjectDemandStaticV4Request): Promise<ListProjectDemandStaticV4Response> {
        const options = ParamCreater().listProjectDemandStaticV4(listProjectDemandStaticV4Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取项目成员列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定项目的成员用户列表
     * @param {string} projectId devcloud项目的32位id
     * @param {number} [offset] 分页索引，偏移量,offset是limit的整数倍，limit&#x3D;10,offset&#x3D;0,10,20...
     * @param {number} [limit] 每页显示的数量,每页最多显示100条
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProjectMembersV4(listProjectMembersV4Request?: ListProjectMembersV4Request): Promise<ListProjectMembersV4Response> {
        const options = ParamCreater().listProjectMembersV4(listProjectMembersV4Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询项目列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目列表
     * @param {number} offset 偏移量 从0开始
     * @param {number} limit 条数 最小1条,最大1000
     * @param {string} [search] 模糊查询项目名称或描述,不支持通配符等高级查询
     * @param {string} [projectType] 项目类型 scrum|xboard
     * @param {string} [sort] 排序条件 默认创建时间降序(name|created_on)(asc|desc)
     * @param {string} [archive] 是否归档 true已归档|false未归档
     * @param {string} [queryType] 默认返回当前用户参与的项目列表,domain_projects租户下的所有项目列表,absent返回当前用户未参与的租户项目列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProjectsV4(listProjectsV4Request?: ListProjectsV4Request): Promise<ListProjectsV4Response> {
        const options = ParamCreater().listProjectsV4(listProjectsV4Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询项目模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目模板
     * @param {string} projectId 项目id
     * @param {string} [trackerId] 工作项类型id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTemplates(listTemplatesRequest?: ListTemplatesRequest): Promise<ListTemplatesResponse> {
        const options = ParamCreater().listTemplates(listTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 分页查询看板项目下工作项的状态历史记录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询看板项目下工作项的状态历史记录
     * @param {string} projectId devcloud项目的32位id
     * @param {number} [offset] 偏移量 从0开始
     * @param {number} [limit] 每页数量 最小1,最大100
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listWorkitemStatusRecordsV4(listWorkitemStatusRecordsV4Request?: ListWorkitemStatusRecordsV4Request): Promise<ListWorkitemStatusRecordsV4Response> {
        const options = ParamCreater().listWorkitemStatusRecordsV4(listWorkitemStatusRecordsV4Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询看板项目下的工作项
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询看板项目下的工作项
     * @param {string} projectId devcloud项目的32位id
     * @param {number} [offset] 偏移量 从0开始
     * @param {number} [limit] 每页数量 最小1,最大100
     * @param {string} [createdTimeInterval] 创建工作项的时间(查询的起始时间,查询的结束时间)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listWorkitems(listWorkitemsRequest?: ListWorkitemsRequest): Promise<ListWorkitemsResponse> {
        const options = ParamCreater().listWorkitems(listWorkitemsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 项目成员主动退出项目，项目创建者不能退出
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 主动退出项目
     * @param {string} projectId devcloud项目的32位id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public removeProject(removeProjectRequest?: RemoveProjectRequest): Promise<RemoveProjectResponse> {
        const options = ParamCreater().removeProject(removeProjectRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询缺陷密度
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询缺陷密度
     * @param {string} projectId devcloud项目的32位id
     * @param {MetricRequestV2} showBugDensityV2RequestBody 查询缺陷密度请求体，查询条件是与的关系
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBugDensityV2(showBugDensityV2Request?: ShowBugDensityV2Request): Promise<ShowBugDensityV2Response> {
        const options = ParamCreater().showBugDensityV2(showBugDensityV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询人均bug
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询人均bug
     * @param {string} projectId devcloud项目的32位id
     * @param {MetricRequest2} showBugsPerDeveloperRequestBody ShowBugsPerDeveloperRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBugsPerDeveloper(showBugsPerDeveloperRequest?: ShowBugsPerDeveloperRequest): Promise<ShowBugsPerDeveloperResponse> {
        const options = ParamCreater().showBugsPerDeveloper(showBugsPerDeveloperRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询需求按时完成率
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询需求按时完成率
     * @param {string} projectId devcloud项目的32位id
     * @param {MetricRequest3} showCompletionRateRequestBody ShowCompletionRateRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCompletionRate(showCompletionRateRequest?: ShowCompletionRateRequest): Promise<ShowCompletionRateResponse> {
        const options = ParamCreater().showCompletionRate(showCompletionRateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取当前用户信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取当前用户信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCurUserInfo(showCurUserInfoRequest?: ShowCurUserInfoRequest): Promise<ShowCurUserInfoResponse> {
        const options = ParamCreater().showCurUserInfo();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取用户在项目中的角色
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取当前用户角色
     * @param {string} projectId devcloud项目的32位id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCurUserRole(showCurUserRoleRequest?: ShowCurUserRoleRequest): Promise<ShowCurUserRoleResponse> {
        const options = ParamCreater().showCurUserRole(showCurUserRoleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取项目详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取项目详情
     * @param {string} projectId devcloud项目的32位id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showProjectInfoV4(showProjectInfoV4Request?: ShowProjectInfoV4Request): Promise<ShowProjectInfoV4Response> {
        const options = ParamCreater().showProjectInfoV4(showProjectInfoV4Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取项目概览
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取项目概览
     * @param {string} projectId devcloud项目的32位id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showProjectSummaryV4(showProjectSummaryV4Request?: ShowProjectSummaryV4Request): Promise<ShowProjectSummaryV4Response> {
        const options = ParamCreater().showProjectSummaryV4(showProjectSummaryV4Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询看板项目的工作项流转配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询看板项目的工作项流转配置
     * @param {string} projectId devcloud项目的32位id
     * @param {string} boardId 看板id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showWorkItemWrokflowConfig(showWorkItemWrokflowConfigRequest?: ShowWorkItemWrokflowConfigRequest): Promise<ShowWorkItemWrokflowConfigResponse> {
        const options = ParamCreater().showWorkItemWrokflowConfig(showWorkItemWrokflowConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新成员在项目中的角色
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新成员在项目中的角色
     * @param {string} projectId devcloud项目的32位id
     * @param {UpdateMembesRoleV4RequestBody} updateMembesRoleV4RequestBody 请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateMembesRoleV4(updateMembesRoleV4Request?: UpdateMembesRoleV4Request): Promise<UpdateMembesRoleV4Response> {
        const options = ParamCreater().updateMembesRoleV4(updateMembesRoleV4Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新用户昵称
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新用户昵称
     * @param {UpdateUserNickNameRequestV4} updateNickNameV4RequestBody 更新用户昵称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateNickNameV4(updateNickNameV4Request?: UpdateNickNameV4Request): Promise<UpdateNickNameV4Response> {
        const options = ParamCreater().updateNickNameV4(updateNickNameV4Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新项目
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新项目
     * @param {string} projectId devcloud项目的32位id
     * @param {UpdateProjectRequestV4} updateProjectV4RequestBody 更新项目实体对象,实体属性不能都为空
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateProjectV4(updateProjectV4Request?: UpdateProjectV4Request): Promise<UpdateProjectV4Response> {
        const options = ParamCreater().updateProjectV4(updateProjectV4Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 工作项类型中查询字段模板列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询字段模板列表
     * @param {string} projectId devcloud项目的32位id
     * @param {string} categoryId 工作项类型5位id
     * @param {number} page 页码
     * @param {number} size 每页查询数据数量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listIssueFields(listIssueFieldsRequest?: ListIssueFieldsRequest): Promise<ListIssueFieldsResponse> {
        const options = ParamCreater().listIssueFields(listIssueFieldsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据工作项查询工作项下的状态信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询工作项状态
     * @param {string} projectId devcloud项目的32位id
     * @param {string} categoryId 工作项类型5位id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listIssueStatues(listIssueStatuesRequest?: ListIssueStatuesRequest): Promise<ListIssueStatuesResponse> {
        const options = ParamCreater().listIssueStatues(listIssueStatuesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询工作流字段配置信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询工作流字段配置信息
     * @param {string} projectId devcloud项目的32位id
     * @param {string} issueCategory 工作项类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showIssueConfigFields(showIssueConfigFieldsRequest?: ShowIssueConfigFieldsRequest): Promise<ShowIssueConfigFieldsResponse> {
        const options = ParamCreater().showIssueConfigFields(showIssueConfigFieldsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询工作项详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询工作项详情
     * @param {string} projectId devcloud项目的32位id
     * @param {string} issueId 工作项唯一Id
     * @param {string} issueType 工作项分类
     * @param {string} [domainId] 项目所属domainId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showIssueDetail(showIssueDetailRequest?: ShowIssueDetailRequest): Promise<ShowIssueDetailResponse> {
        const options = ParamCreater().showIssueDetail(showIssueDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取工作流的详情及每条流转线的详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取工作流的详情及每条流转线的详情
     * @param {string} projectId devcloud项目的32位id
     * @param {string} issueCategory 工作项类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showWorkflowTemplate(showWorkflowTemplateRequest?: ShowWorkflowTemplateRequest): Promise<ShowWorkflowTemplateResponse> {
        const options = ParamCreater().showWorkflowTemplate(showWorkflowTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 工作项流程流转
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改工作项的状态
     * @param {string} projectId devcloud项目的32位id
     * @param {WorkItemFlowRequestBody} [workItemFlowVO] 工作项流程信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public transferWorkItemFlow(transferWorkItemFlowRequest?: TransferWorkItemFlowRequest): Promise<TransferWorkItemFlowResponse> {
        const options = ParamCreater().transferWorkItemFlow(transferWorkItemFlowRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加指定工作项工时
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加指定工作项工时
     * @param {string} projectId 项目id
     * @param {number} issueId 工作项id
     * @param {AddIssueWorkHoursRequestBody} addIssueWorkHoursRequestBody 请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addIssueWorkHours(addIssueWorkHoursRequest?: AddIssueWorkHoursRequest): Promise<AddIssueWorkHoursResponse> {
        const options = ParamCreater().addIssueWorkHours(addIssueWorkHoursRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除工作项
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除工作项
     * @param {string} projectId devcloud项目的32位id
     * @param {BatchDelelteIssuesRequestV4} batchDeleteIssuesV4RequestBody 批量删除的工作项ids
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteIssuesV4(batchDeleteIssuesV4Request?: BatchDeleteIssuesV4Request): Promise<BatchDeleteIssuesV4Response> {
        const options = ParamCreater().batchDeleteIssuesV4(batchDeleteIssuesV4Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除项目的迭代
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除项目的迭代
     * @param {string} projectId devcloud项目的32位id
     * @param {BatchDeleteIterationsV4RequestBody} batchDeleteIterationsV4RequestBody 批量删除迭代ids
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteIterationsV4(batchDeleteIterationsV4Request?: BatchDeleteIterationsV4Request): Promise<BatchDeleteIterationsV4Response> {
        const options = ParamCreater().batchDeleteIterationsV4(batchDeleteIterationsV4Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询当前项目下已经关联的工作项
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询当前项目下已经关联的工作项
     * @param {string} projectId devcloud项目的32位id
     * @param {number} [limit] 每页数量
     * @param {number} [offset] 偏移量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchListAssociatedIssues(batchListAssociatedIssuesRequest?: BatchListAssociatedIssuesRequest): Promise<BatchListAssociatedIssuesResponse> {
        const options = ParamCreater().batchListAssociatedIssues(batchListAssociatedIssuesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 取消领域与项目的关联关系
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 取消领域与项目的关联关系
     * @param {string} projectId devcloud项目的32位id
     * @param {string} domainId 领域id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cancelProjectDomain(cancelProjectDomainRequest?: CancelProjectDomainRequest): Promise<CancelProjectDomainResponse> {
        const options = ParamCreater().cancelProjectDomain(cancelProjectDomainRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建工作项类型自定义字段
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建工作项类型自定义字段
     * @param {string} projectId devcloud项目的32位id
     * @param {CreateCustomfieldV1Req} createCustomFieldsRequestBody requestJson
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCustomfields(createCustomfieldsRequest?: CreateCustomfieldsRequest): Promise<CreateCustomfieldsResponse> {
        const options = ParamCreater().createCustomfields(createCustomfieldsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建工作项
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建工作项
     * @param {string} projectId devcloud项目的32位id
     * @param {CreateIssueRequestV4} createIssueV4RequestBody 创建工作项请求实体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createIssueV4(createIssueV4Request?: CreateIssueV4Request): Promise<CreateIssueV4Response> {
        const options = ParamCreater().createIssueV4(createIssueV4Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建Scrum项目迭代
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建Scrum项目迭代
     * @param {string} projectId devcloud项目的32位id
     * @param {CreateIterationRequestV4} createIterationV4RequestBody 创建迭代实体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createIterationV4(createIterationV4Request?: CreateIterationV4Request): Promise<CreateIterationV4Response> {
        const options = ParamCreater().createIterationV4(createIterationV4Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询项目的领域列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建项目的领域
     * @param {string} projectId devcloud项目的32位id
     * @param {CreateProjectDomainRequestBody} createProjectDomainRequestBody 创建领域请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createProjectDomain(createProjectDomainRequest?: CreateProjectDomainRequest): Promise<CreateProjectDomainResponse> {
        const options = ParamCreater().createProjectDomain(createProjectDomainRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询项目的模块列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建项目的模块
     * @param {string} projectId devcloud项目的32位id
     * @param {CreateProjectModuleRequestBody} createProjectModuleRequestBody 创建模块请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createProjectModule(createProjectModuleRequest?: CreateProjectModuleRequest): Promise<CreateProjectModuleResponse> {
        const options = ParamCreater().createProjectModule(createProjectModuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 拥有IAM细粒度权限（projectmanConfig:systemSettingField:set）且在devcloud项目中有创建工作项的权限的用户可以设置工作项的创建者
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 细粒度权限用户创建工作项
     * @param {string} projectId devcloud项目的32位id
     * @param {CreateSystemIssueRequestV4} createSystemIssueV4RequestBody 创建工作项请求实体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSystemIssueV4(createSystemIssueV4Request?: CreateSystemIssueV4Request): Promise<CreateSystemIssueV4Response> {
        const options = ParamCreater().createSystemIssueV4(createSystemIssueV4Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 取消工作项与附件关联，如附件为工作项页面上传则删除附件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除附件
     * @param {string} projectId devcloud项目的32位id
     * @param {string} issueId 工作项id
     * @param {string} attachmentId 附件id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAttachment(deleteAttachmentRequest?: DeleteAttachmentRequest): Promise<DeleteAttachmentResponse> {
        const options = ParamCreater().deleteAttachment(deleteAttachmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除工作项
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除工作项
     * @param {string} projectId devcloud项目的32位id
     * @param {number} issueId 工作项id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteIssueV4(deleteIssueV4Request?: DeleteIssueV4Request): Promise<DeleteIssueV4Response> {
        const options = ParamCreater().deleteIssueV4(deleteIssueV4Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除项目迭代
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除项目迭代
     * @param {string} projectId devcloud项目的32位id
     * @param {number} iterationId 迭代id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteIterationV4(deleteIterationV4Request?: DeleteIterationV4Request): Promise<DeleteIterationV4Response> {
        const options = ParamCreater().deleteIterationV4(deleteIterationV4Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除项目的模块
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除项目的模块
     * @param {string} projectId devcloud项目的32位id
     * @param {number} moduleId 模块id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteProjectModule(deleteProjectModuleRequest?: DeleteProjectModuleRequest): Promise<DeleteProjectModuleResponse> {
        const options = ParamCreater().deleteProjectModule(deleteProjectModuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 下载工作项附件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 下载工作项附件
     * @param {string} projectId devcloud项目的32位id
     * @param {string} issueId 工作项id
     * @param {string} attachmentId 附件id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public downloadAttachment(downloadAttachmentRequest?: DownloadAttachmentRequest): Promise<DownloadAttachmentResponse> {
        const options = ParamCreater().downloadAttachment(downloadAttachmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 下载图片
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 下载图片
     * @param {string} projectId devcloud项目的32位id
     * @param {string} imageUri 图片URI
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public downloadImageFile(downloadImageFileRequest?: DownloadImageFileRequest): Promise<DownloadImageFileResponse> {
        const options = ParamCreater().downloadImageFile(downloadImageFileRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询当前工作项已经关联的工作项
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询当前工作项已经关联的工作项
     * @param {string} projectId devcloud项目的32位id
     * @param {number} issueId 工作项ID
     * @param {number} [limit] 每页数量
     * @param {number} [offset] 偏移量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAssociatedIssues(listAssociatedIssuesRequest?: ListAssociatedIssuesRequest): Promise<ListAssociatedIssuesResponse> {
        const options = ParamCreater().listAssociatedIssues(listAssociatedIssuesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询关联用例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询关联用例
     * @param {string} projectId devcloud项目的32位id
     * @param {number} issueId 工作项ID
     * @param {number} [limit] 每页数量
     * @param {number} [offset] 偏移量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAssociatedTestCases(listAssociatedTestCasesRequest?: ListAssociatedTestCasesRequest): Promise<ListAssociatedTestCasesResponse> {
        const options = ParamCreater().listAssociatedTestCases(listAssociatedTestCasesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询当前工作项已经关联的关联Wiki
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询当前工作项已经关联的关联Wiki
     * @param {string} projectId devcloud项目的32位id
     * @param {number} issueId 工作项ID
     * @param {number} [limit] 每页数量
     * @param {number} [offset] 偏移量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAssociatedWikis(listAssociatedWikisRequest?: ListAssociatedWikisRequest): Promise<ListAssociatedWikisResponse> {
        const options = ParamCreater().listAssociatedWikis(listAssociatedWikisRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取子工作项
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取子工作项
     * @param {string} projectId devcloud项目的32位id
     * @param {number} issueId 工作项id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listChildIssuesV4(listChildIssuesV4Request?: ListChildIssuesV4Request): Promise<ListChildIssuesV4Response> {
        const options = ParamCreater().listChildIssuesV4(listChildIssuesV4Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询当前工作项已经关联的代码提交记录 / 分支创建记录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询当前工作项已经关联的代码提交记录 / 分支创建记录
     * @param {string} projectId devcloud项目的32位id
     * @param {number} issueId 工作项ID
     * @param {string} [type] 查询类型：commit（提交记录） || branch（分支记录）
     * @param {number} [limit] 每页数量
     * @param {number} [offset] 偏移量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listIssueAssociatedCommits(listIssueAssociatedCommitsRequest?: ListIssueAssociatedCommitsRequest): Promise<ListIssueAssociatedCommitsResponse> {
        const options = ParamCreater().listIssueAssociatedCommits(listIssueAssociatedCommitsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取工作项的评论
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定工作项的评论列表
     * @param {string} projectId devcloud项目的32位id
     * @param {number} issueId 工作项id
     * @param {number} [offset] 分页索引，偏移量
     * @param {number} [limit] 每页显示的条数,最大显示100条
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listIssueCommentsV4(listIssueCommentsV4Request?: ListIssueCommentsV4Request): Promise<ListIssueCommentsV4Response> {
        const options = ParamCreater().listIssueCommentsV4(listIssueCommentsV4Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Scrum工作项自定义字段的可选列表,符合custom_fields或者names条件的都返回,2个值都不传，返回所有的自定义字段列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Scrum工作项自定义字段
     * @param {string} projectId devcloud项目的32位id
     * @param {ListIssueCustomFieldsRequestBody} listIssueCustomFieldsRequestBody requestJson
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listIssueCustomFields(listIssueCustomFieldsRequest?: ListIssueCustomFieldsRequest): Promise<ListIssueCustomFieldsResponse> {
        const options = ParamCreater().listIssueCustomFields(listIssueCustomFieldsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取工作项历史记录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取工作项历史记录
     * @param {string} projectId devcloud项目的32位id
     * @param {number} issueId 工作项id
     * @param {number} [offset] 分页索引，偏移量,offset是limit的整数倍，limit&#x3D;10,offset&#x3D;0,10,20...
     * @param {number} [limit] 每页显示的数量,每页最多显示100条
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listIssueRecordsV4(listIssueRecordsV4Request?: ListIssueRecordsV4Request): Promise<ListIssueRecordsV4Response> {
        const options = ParamCreater().listIssueRecordsV4(listIssueRecordsV4Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 工作项类型id, 分页参数，创建时间查询项目的工作项
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目的工作项
     * @param {string} projectId devcloud项目的32位id
     * @param {number} [offset] 偏移量 从0开始
     * @param {number} [limit] 每页数量 最小1,最大100
     * @param {2 | 3 | 4 | 5 | 6 | 7} [trackerId] 工作项类型
     * @param {string} [createdTimeInterval] 创建工作项的时间(查询的起始时间,查询的结束时间)
     * @param {string} [updatedTimeInterval] 更新工作项的时间(查询的起始时间,查询的结束时间)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listIssuesSfV4(listIssuesSfV4Request?: ListIssuesSfV4Request): Promise<ListIssuesSfV4Response> {
        const options = ParamCreater().listIssuesSfV4(listIssuesSfV4Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据筛选条件查询工作项
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 高级查询工作项
     * @param {string} projectId devcloud项目的32位id
     * @param {ListIssueRequestV4} [listIssuesV4RequestBody] 筛查条件
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listIssuesV4(listIssuesV4Request?: ListIssuesV4Request): Promise<ListIssuesV4Response> {
        const options = ParamCreater().listIssuesV4(listIssuesV4Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看迭代历史记录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看迭代历史记录
     * @param {number} iterationId 迭代id
     * @param {number} [offset] 偏移量
     * @param {number} [limit] 每页数量，最大为100
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listIterationHistories(listIterationHistoriesRequest?: ListIterationHistoriesRequest): Promise<ListIterationHistoriesResponse> {
        const options = ParamCreater().listIterationHistories(listIterationHistoriesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询项目的领域列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目的领域列表
     * @param {string} projectId devcloud项目的32位id
     * @param {number} [offset] 查询偏移量
     * @param {number} [limit] 一次返回的数据,最小1,最大100
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProjectDomains(listProjectDomainsRequest?: ListProjectDomainsRequest): Promise<ListProjectDomainsResponse> {
        const options = ParamCreater().listProjectDomains(listProjectDomainsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询项目下所有工作项的历史记录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目下所有工作项的历史记录
     * @param {string} projectId devcloud项目的32位id
     * @param {number} [offset] 偏移量 从0开始,offset是limit的整数倍，limit&#x3D;10,offset&#x3D;0,10,20...
     * @param {number} [limit] 每页数量 最小1,最大100
     * @param {string} [operatedTimeInterval] 变更工作项的时间(查询的起始时间,查询的结束时间)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProjectIssuesRecordsV4(listProjectIssuesRecordsV4Request?: ListProjectIssuesRecordsV4Request): Promise<ListProjectIssuesRecordsV4Response> {
        const options = ParamCreater().listProjectIssuesRecordsV4(listProjectIssuesRecordsV4Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取项目迭代
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定项目的迭代列表
     * @param {string} projectId devcloud项目的32位id
     * @param {string} [updatedTimeInterval] 更新迭代的时间(查询的起始时间,查询的结束时间)
     * @param {boolean} [includeDeleted] 是否包含被删除的迭代,默认false不包含被删除的迭代
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProjectIterationsV4(listProjectIterationsV4Request?: ListProjectIterationsV4Request): Promise<ListProjectIterationsV4Response> {
        const options = ParamCreater().listProjectIterationsV4(listProjectIterationsV4Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询项目的模块列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目的模块列表
     * @param {string} projectId devcloud项目的32位id
     * @param {number} [offset] 查询偏移量
     * @param {number} [limit] 一次返回的数据,最小1,最大100
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProjectModules(listProjectModulesRequest?: ListProjectModulesRequest): Promise<ListProjectModulesResponse> {
        const options = ParamCreater().listProjectModules(listProjectModulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 按用户查询工时（多项目）
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 按用户查询工时（多项目）
     * @param {ListProjectWorkHoursRequestBody} listProjectWorkHoursRequestBody 请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProjectWorkHours(listProjectWorkHoursRequest?: ListProjectWorkHoursRequest): Promise<ListProjectWorkHoursResponse> {
        const options = ParamCreater().listProjectWorkHours(listProjectWorkHoursRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询项目下的工时类型
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目下的工时类型
     * @param {string} projectId 项目id
     * @param {number} [limit] 每页显示的数量，默认显示10条，最多显示100条
     * @param {number} [offset] 分页索引，偏移量offset是limit的整数倍，limit&#x3D;10,offset&#x3D;0,10,20...
     * @param {number} [status] 工时类型状态，支持按状态筛选查询，置空时查询所有工时类型，1表示查询启用的工时类型，2表示查询未启用的工时类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProjectWorkHoursType(listProjectWorkHoursTypeRequest?: ListProjectWorkHoursTypeRequest): Promise<ListProjectWorkHoursTypeResponse> {
        const options = ParamCreater().listProjectWorkHoursType(listProjectWorkHoursTypeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询项目的状态列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目的状态列表
     * @param {string} projectId devcloud项目的32位id
     * @param {number} [offset] 查询偏移量
     * @param {number} [limit] 一次返回的数据,最小1,最大100
     * @param {number} [trackerId] 自定义字段支持的工作项类型 2任务/Task,3缺陷/Bug,5Epic,6Feature,7Story
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listScrumProjectStatuses(listScrumProjectStatusesRequest?: ListScrumProjectStatusesRequest): Promise<ListScrumProjectStatusesResponse> {
        const options = ParamCreater().listScrumProjectStatuses(listScrumProjectStatusesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定工作项停留时间
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定工作项停留时间
     * @param {ListSpecIssueStayTimesRequestBody} listSpecIssueStayTimesRequest 请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSpecIssueStayTimes(listSpecIssueStayTimesRequest?: ListSpecIssueStayTimesRequest): Promise<ListSpecIssueStayTimesResponse> {
        const options = ParamCreater().listSpecIssueStayTimes(listSpecIssueStayTimesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询迭代下工作项状态的统计数据（处理人维度）
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询迭代下工作项状态的统计数据（处理人维度）
     * @param {string} projectId devcloud项目的32位id
     * @param {number} iterationId 迭代数字id
     * @param {number} trackerId 自定义字段支持的工作项类型 2任务/Task,3缺陷/Bug,7Story
     * @param {number} statusId 工作项状态数字id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listStatusStatistic(listStatusStatisticRequest?: ListStatusStatisticRequest): Promise<ListStatusStatisticResponse> {
        const options = ParamCreater().listStatusStatistic(listStatusStatisticRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 高级查询我的待办工作项
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 高级查询我的待办工作项
     * @param {ListWorkTableIssueRequestV4RequestBody} searchIssuesRequestBody 更新项目领域实体对象,实体属性不能都为空
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchIssues(searchIssuesRequest?: SearchIssuesRequest): Promise<SearchIssuesResponse> {
        const options = ParamCreater().searchIssues(searchIssuesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取工作项的完成率
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取工作项完成率
     * @param {string} projectId devcloud项目的32位id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showIssueCompletionRate(showIssueCompletionRateRequest?: ShowIssueCompletionRateRequest): Promise<ShowIssueCompletionRateResponse> {
        const options = ParamCreater().showIssueCompletionRate(showIssueCompletionRateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询工作项详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询工作项详情
     * @param {string} projectId devcloud项目的32位id
     * @param {number} issueId 工作项id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showIssueV4(showIssueV4Request?: ShowIssueV4Request): Promise<ShowIssueV4Response> {
        const options = ParamCreater().showIssueV4(showIssueV4Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Scrum项目的工作项流转配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Scrum项目的工作项流转配置
     * @param {string} projectId devcloud项目的32位id
     * @param {number} trackerId 工作项类型id [2,3,4,5,6,7]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showIssuesWrokFlowConfig(showIssuesWrokFlowConfigRequest?: ShowIssuesWrokFlowConfigRequest): Promise<ShowIssuesWrokFlowConfigResponse> {
        const options = ParamCreater().showIssuesWrokFlowConfig(showIssuesWrokFlowConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看迭代详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看迭代详情
     * @param {number} iterationId 迭代id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showIterationV4(showIterationV4Request?: ShowIterationV4Request): Promise<ShowIterationV4Response> {
        const options = ParamCreater().showIterationV4(showIterationV4Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 按用户查询工时（单项目）
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 按用户查询工时（单项目）
     * @param {string} projectId devcloud项目的32位id
     * @param {ShowProjectWorkHoursRequestBody} showProjectWorkHoursRequestBody 请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showProjectWorkHours(showProjectWorkHoursRequest?: ShowProjectWorkHoursRequest): Promise<ShowProjectWorkHoursResponse> {
        const options = ParamCreater().showProjectWorkHours(showProjectWorkHoursRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新工作项
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新工作项
     * @param {string} projectId devcloud项目的32位id
     * @param {number} issueId 工作项id
     * @param {IssueRequestV4} updateIssueV4RequestBody 更新工作项实体，实体中的属性至少更新一个值，不能全部为空
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateIssueV4(updateIssueV4Request?: UpdateIssueV4Request): Promise<UpdateIssueV4Response> {
        const options = ParamCreater().updateIssueV4(updateIssueV4Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新Scrum项目迭代
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新Scrum项目迭代
     * @param {string} projectId devcloud项目的32位id
     * @param {number} iterationId 迭代id
     * @param {UpdateIterationRequestV4} updateIterationV4RequestBody 更新迭代实体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateIterationV4(updateIterationV4Request?: UpdateIterationV4Request): Promise<UpdateIterationV4Response> {
        const options = ParamCreater().updateIterationV4(updateIterationV4Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新项目的领域
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新项目的领域
     * @param {string} projectId devcloud项目的32位id
     * @param {string} domainId 领域id
     * @param {CreateProjectDomainRequestBody} updateProjectDomainRequestBody 更新项目领域实体对象,实体属性不能都为空
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateProjectDomain(updateProjectDomainRequest?: UpdateProjectDomainRequest): Promise<UpdateProjectDomainResponse> {
        const options = ParamCreater().updateProjectDomain(updateProjectDomainRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新项目的模块
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新项目的模块
     * @param {string} projectId devcloud项目的32位id
     * @param {number} moduleId 模块id
     * @param {UpdateProjectModuleRequestBody} updateProjectModuleRequestBody 更新项目模块实体对象,实体属性不能都为空
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateProjectModule(updateProjectModuleRequest?: UpdateProjectModuleRequest): Promise<UpdateProjectModuleResponse> {
        const options = ParamCreater().updateProjectModule(updateProjectModuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 上传工作项附件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 上传工作项附件
     * @param {string} projectId 项目id
     * @param {string} issueId 工作项id
     * @param {any} attachment 附件文件， 最大上传大小为50M
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public uploadAttachments(uploadAttachmentsRequest?: UploadAttachmentsRequest): Promise<UploadAttachmentsResponse> {
        const options = ParamCreater().uploadAttachments(uploadAttachmentsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 上传图片
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 上传图片
     * @param {string} projectId devcloud项目的32位id
     * @param {any} file 图片文件
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public uploadIssueImg(uploadIssueImgRequest?: UploadIssueImgRequest): Promise<UploadIssueImgResponse> {
        const options = ParamCreater().uploadIssueImg(uploadIssueImgRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * AGC调用 当前用户申请加入项目, 申请的用户id写在header中
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addApplyJoinProjectForAgc(addApplyJoinProjectForAgcRequest?: AddApplyJoinProjectForAgcRequest) {
            const options = {
                method: "GET",
                url: "/v4/projects/{project_id}/members/agc-join",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let domainId;
            
            let userId;
            
            let projectId;

            if (addApplyJoinProjectForAgcRequest !== null && addApplyJoinProjectForAgcRequest !== undefined) {
                if (addApplyJoinProjectForAgcRequest instanceof AddApplyJoinProjectForAgcRequest) {
                    domainId = addApplyJoinProjectForAgcRequest.domainId;
                    userId = addApplyJoinProjectForAgcRequest.userId;
                    projectId = addApplyJoinProjectForAgcRequest.projectId;
                } else {
                    domainId = addApplyJoinProjectForAgcRequest['Domain-Id'];
                    userId = addApplyJoinProjectForAgcRequest['User-Id'];
                    projectId = addApplyJoinProjectForAgcRequest['project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling addApplyJoinProjectForAgc.');
            }
            if (domainId !== undefined && domainId !== null) {
                localVarHeaderParameter['Domain-Id'] = String(domainId);
            }
            if (userId !== undefined && userId !== null) {
                localVarHeaderParameter['User-Id'] = String(userId);
            }

            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加项目成员,可以添加跨租户成员
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addMemberV4(addMemberV4Request?: AddMemberV4Request) {
            const options = {
                method: "POST",
                url: "/v4/projects/{project_id}/member",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (addMemberV4Request !== null && addMemberV4Request !== undefined) {
                if (addMemberV4Request instanceof AddMemberV4Request) {
                    projectId = addMemberV4Request.projectId;
                    body = addMemberV4Request.body
                } else {
                    projectId = addMemberV4Request['project_id'];
                    body = addMemberV4Request['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling addMemberV4.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量添加项目成员，只能添加和项目创建者同一租户下的成员，不正确的用户id会略过，添加的用户超过权限的，默认角色设置为7
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchAddMembersV4(batchAddMembersV4Request?: BatchAddMembersV4Request) {
            const options = {
                method: "POST",
                url: "/v4/projects/{project_id}/members",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (batchAddMembersV4Request !== null && batchAddMembersV4Request !== undefined) {
                if (batchAddMembersV4Request instanceof BatchAddMembersV4Request) {
                    projectId = batchAddMembersV4Request.projectId;
                    body = batchAddMembersV4Request.body
                } else {
                    projectId = batchAddMembersV4Request['project_id'];
                    body = batchAddMembersV4Request['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling batchAddMembersV4.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除项目成员
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteMembersV4(batchDeleteMembersV4Request?: BatchDeleteMembersV4Request) {
            const options = {
                method: "DELETE",
                url: "/v4/projects/{project_id}/members",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (batchDeleteMembersV4Request !== null && batchDeleteMembersV4Request !== undefined) {
                if (batchDeleteMembersV4Request instanceof BatchDeleteMembersV4Request) {
                    projectId = batchDeleteMembersV4Request.projectId;
                    body = batchDeleteMembersV4Request.body
                } else {
                    projectId = batchDeleteMembersV4Request['project_id'];
                    body = batchDeleteMembersV4Request['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling batchDeleteMembersV4.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 拥有te_admin角色的用户可以更新其他用户的昵称
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUpdateChildNickNames(batchUpdateChildNickNamesRequest?: BatchUpdateChildNickNamesRequest) {
            const options = {
                method: "PUT",
                url: "/v4/domain/child-users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchUpdateChildNickNamesRequest !== null && batchUpdateChildNickNamesRequest !== undefined) {
                if (batchUpdateChildNickNamesRequest instanceof BatchUpdateChildNickNamesRequest) {
                    body = batchUpdateChildNickNamesRequest.body
                } else {
                    body = batchUpdateChildNickNamesRequest['body'];
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
         * 检查项目名称是否存在
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkProjectNameV4(checkProjectNameV4Request?: CheckProjectNameV4Request) {
            const options = {
                method: "POST",
                url: "/v4/projects/check-name",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (checkProjectNameV4Request !== null && checkProjectNameV4Request !== undefined) {
                if (checkProjectNameV4Request instanceof CheckProjectNameV4Request) {
                    body = checkProjectNameV4Request.body
                } else {
                    body = checkProjectNameV4Request['body'];
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
         * 创建项目
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createProjectV4(createProjectV4Request?: CreateProjectV4Request) {
            const options = {
                method: "POST",
                url: "/v4/project",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createProjectV4Request !== null && createProjectV4Request !== undefined) {
                if (createProjectV4Request instanceof CreateProjectV4Request) {
                    body = createProjectV4Request.body
                } else {
                    body = createProjectV4Request['body'];
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
         * 删除项目
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteProjectV4(deleteProjectV4Request?: DeleteProjectV4Request) {
            const options = {
                method: "DELETE",
                url: "/v4/projects/{project_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;

            if (deleteProjectV4Request !== null && deleteProjectV4Request !== undefined) {
                if (deleteProjectV4Request instanceof DeleteProjectV4Request) {
                    projectId = deleteProjectV4Request.projectId;
                } else {
                    projectId = deleteProjectV4Request['project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteProjectV4.');
            }

            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取租户没有加入的项目
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDomainNotAddedProjectsV4(listDomainNotAddedProjectsV4Request?: ListDomainNotAddedProjectsV4Request) {
            const options = {
                method: "GET",
                url: "/v4/projects/domain/not-added",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;

            if (listDomainNotAddedProjectsV4Request !== null && listDomainNotAddedProjectsV4Request !== undefined) {
                if (listDomainNotAddedProjectsV4Request instanceof ListDomainNotAddedProjectsV4Request) {
                    offset = listDomainNotAddedProjectsV4Request.offset;
                    limit = listDomainNotAddedProjectsV4Request.limit;
                } else {
                    offset = listDomainNotAddedProjectsV4Request['offset'];
                    limit = listDomainNotAddedProjectsV4Request['limit'];
                }
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
         * 获取bug统计信息，按模块统计
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProjectBugStaticsV4(listProjectBugStaticsV4Request?: ListProjectBugStaticsV4Request) {
            const options = {
                method: "GET",
                url: "/v4/projects/{project_id}/bug-statistic",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;

            if (listProjectBugStaticsV4Request !== null && listProjectBugStaticsV4Request !== undefined) {
                if (listProjectBugStaticsV4Request instanceof ListProjectBugStaticsV4Request) {
                    projectId = listProjectBugStaticsV4Request.projectId;
                } else {
                    projectId = listProjectBugStaticsV4Request['project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listProjectBugStaticsV4.');
            }

            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取需求统计信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProjectDemandStaticV4(listProjectDemandStaticV4Request?: ListProjectDemandStaticV4Request) {
            const options = {
                method: "GET",
                url: "/v4/projects/{project_id}/demand-statistic",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;

            if (listProjectDemandStaticV4Request !== null && listProjectDemandStaticV4Request !== undefined) {
                if (listProjectDemandStaticV4Request instanceof ListProjectDemandStaticV4Request) {
                    projectId = listProjectDemandStaticV4Request.projectId;
                } else {
                    projectId = listProjectDemandStaticV4Request['project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listProjectDemandStaticV4.');
            }

            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取项目成员列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProjectMembersV4(listProjectMembersV4Request?: ListProjectMembersV4Request) {
            const options = {
                method: "GET",
                url: "/v4/projects/{project_id}/members",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let offset;
            
            let limit;

            if (listProjectMembersV4Request !== null && listProjectMembersV4Request !== undefined) {
                if (listProjectMembersV4Request instanceof ListProjectMembersV4Request) {
                    projectId = listProjectMembersV4Request.projectId;
                    offset = listProjectMembersV4Request.offset;
                    limit = listProjectMembersV4Request.limit;
                } else {
                    projectId = listProjectMembersV4Request['project_id'];
                    offset = listProjectMembersV4Request['offset'];
                    limit = listProjectMembersV4Request['limit'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listProjectMembersV4.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询项目列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProjectsV4(listProjectsV4Request?: ListProjectsV4Request) {
            const options = {
                method: "GET",
                url: "/v4/projects",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let search;
            
            let projectType;
            
            let sort;
            
            let archive;
            
            let queryType;

            if (listProjectsV4Request !== null && listProjectsV4Request !== undefined) {
                if (listProjectsV4Request instanceof ListProjectsV4Request) {
                    offset = listProjectsV4Request.offset;
                    limit = listProjectsV4Request.limit;
                    search = listProjectsV4Request.search;
                    projectType = listProjectsV4Request.projectType;
                    sort = listProjectsV4Request.sort;
                    archive = listProjectsV4Request.archive;
                    queryType = listProjectsV4Request.queryType;
                } else {
                    offset = listProjectsV4Request['offset'];
                    limit = listProjectsV4Request['limit'];
                    search = listProjectsV4Request['search'];
                    projectType = listProjectsV4Request['project_type'];
                    sort = listProjectsV4Request['sort'];
                    archive = listProjectsV4Request['archive'];
                    queryType = listProjectsV4Request['query_type'];
                }
            }

        
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listProjectsV4.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listProjectsV4.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (search !== null && search !== undefined) {
                localVarQueryParameter['search'] = search;
            }
            if (projectType !== null && projectType !== undefined) {
                localVarQueryParameter['project_type'] = projectType;
            }
            if (sort !== null && sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }
            if (archive !== null && archive !== undefined) {
                localVarQueryParameter['archive'] = archive;
            }
            if (queryType !== null && queryType !== undefined) {
                localVarQueryParameter['query_type'] = queryType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询项目模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTemplates(listTemplatesRequest?: ListTemplatesRequest) {
            const options = {
                method: "GET",
                url: "/v4/projects/{project_id}/templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let trackerId;

            if (listTemplatesRequest !== null && listTemplatesRequest !== undefined) {
                if (listTemplatesRequest instanceof ListTemplatesRequest) {
                    projectId = listTemplatesRequest.projectId;
                    trackerId = listTemplatesRequest.trackerId;
                } else {
                    projectId = listTemplatesRequest['project_id'];
                    trackerId = listTemplatesRequest['tracker_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listTemplates.');
            }
            if (trackerId !== null && trackerId !== undefined) {
                localVarQueryParameter['tracker_id'] = trackerId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 分页查询看板项目下工作项的状态历史记录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWorkitemStatusRecordsV4(listWorkitemStatusRecordsV4Request?: ListWorkitemStatusRecordsV4Request) {
            const options = {
                method: "GET",
                url: "/v4/projects/{project_id}/work-items/status-records",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let offset;
            
            let limit;

            if (listWorkitemStatusRecordsV4Request !== null && listWorkitemStatusRecordsV4Request !== undefined) {
                if (listWorkitemStatusRecordsV4Request instanceof ListWorkitemStatusRecordsV4Request) {
                    projectId = listWorkitemStatusRecordsV4Request.projectId;
                    offset = listWorkitemStatusRecordsV4Request.offset;
                    limit = listWorkitemStatusRecordsV4Request.limit;
                } else {
                    projectId = listWorkitemStatusRecordsV4Request['project_id'];
                    offset = listWorkitemStatusRecordsV4Request['offset'];
                    limit = listWorkitemStatusRecordsV4Request['limit'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listWorkitemStatusRecordsV4.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询看板项目下的工作项
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWorkitems(listWorkitemsRequest?: ListWorkitemsRequest) {
            const options = {
                method: "GET",
                url: "/v4/projects/{project_id}/work-items",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let offset;
            
            let limit;
            
            let createdTimeInterval;

            if (listWorkitemsRequest !== null && listWorkitemsRequest !== undefined) {
                if (listWorkitemsRequest instanceof ListWorkitemsRequest) {
                    projectId = listWorkitemsRequest.projectId;
                    offset = listWorkitemsRequest.offset;
                    limit = listWorkitemsRequest.limit;
                    createdTimeInterval = listWorkitemsRequest.createdTimeInterval;
                } else {
                    projectId = listWorkitemsRequest['project_id'];
                    offset = listWorkitemsRequest['offset'];
                    limit = listWorkitemsRequest['limit'];
                    createdTimeInterval = listWorkitemsRequest['created_time_interval'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listWorkitems.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (createdTimeInterval !== null && createdTimeInterval !== undefined) {
                localVarQueryParameter['created_time_interval'] = createdTimeInterval;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 项目成员主动退出项目，项目创建者不能退出
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        removeProject(removeProjectRequest?: RemoveProjectRequest) {
            const options = {
                method: "DELETE",
                url: "/v4/projects/{project_id}/quit",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;

            if (removeProjectRequest !== null && removeProjectRequest !== undefined) {
                if (removeProjectRequest instanceof RemoveProjectRequest) {
                    projectId = removeProjectRequest.projectId;
                } else {
                    projectId = removeProjectRequest['project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling removeProject.');
            }

            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询缺陷密度
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBugDensityV2(showBugDensityV2Request?: ShowBugDensityV2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/bug-density/query",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (showBugDensityV2Request !== null && showBugDensityV2Request !== undefined) {
                if (showBugDensityV2Request instanceof ShowBugDensityV2Request) {
                    projectId = showBugDensityV2Request.projectId;
                    body = showBugDensityV2Request.body
                } else {
                    projectId = showBugDensityV2Request['project_id'];
                    body = showBugDensityV2Request['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showBugDensityV2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询人均bug
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBugsPerDeveloper(showBugsPerDeveloperRequest?: ShowBugsPerDeveloperRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/bugs-per-developer/query",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (showBugsPerDeveloperRequest !== null && showBugsPerDeveloperRequest !== undefined) {
                if (showBugsPerDeveloperRequest instanceof ShowBugsPerDeveloperRequest) {
                    projectId = showBugsPerDeveloperRequest.projectId;
                    body = showBugsPerDeveloperRequest.body
                } else {
                    projectId = showBugsPerDeveloperRequest['project_id'];
                    body = showBugsPerDeveloperRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showBugsPerDeveloper.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询需求按时完成率
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCompletionRate(showCompletionRateRequest?: ShowCompletionRateRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/completion-rate/query",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (showCompletionRateRequest !== null && showCompletionRateRequest !== undefined) {
                if (showCompletionRateRequest instanceof ShowCompletionRateRequest) {
                    projectId = showCompletionRateRequest.projectId;
                    body = showCompletionRateRequest.body
                } else {
                    projectId = showCompletionRateRequest['project_id'];
                    body = showCompletionRateRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showCompletionRate.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取当前用户信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCurUserInfo() {
            const options = {
                method: "GET",
                url: "/v4/user",
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
         * 获取用户在项目中的角色
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCurUserRole(showCurUserRoleRequest?: ShowCurUserRoleRequest) {
            const options = {
                method: "GET",
                url: "/v4/projects/{project_id}/user-role",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;

            if (showCurUserRoleRequest !== null && showCurUserRoleRequest !== undefined) {
                if (showCurUserRoleRequest instanceof ShowCurUserRoleRequest) {
                    projectId = showCurUserRoleRequest.projectId;
                } else {
                    projectId = showCurUserRoleRequest['project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showCurUserRole.');
            }

            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取项目详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showProjectInfoV4(showProjectInfoV4Request?: ShowProjectInfoV4Request) {
            const options = {
                method: "GET",
                url: "/v4/projects/{project_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;

            if (showProjectInfoV4Request !== null && showProjectInfoV4Request !== undefined) {
                if (showProjectInfoV4Request instanceof ShowProjectInfoV4Request) {
                    projectId = showProjectInfoV4Request.projectId;
                } else {
                    projectId = showProjectInfoV4Request['project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showProjectInfoV4.');
            }

            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取项目概览
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showProjectSummaryV4(showProjectSummaryV4Request?: ShowProjectSummaryV4Request) {
            const options = {
                method: "GET",
                url: "/v4/projects/{project_id}/summary",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;

            if (showProjectSummaryV4Request !== null && showProjectSummaryV4Request !== undefined) {
                if (showProjectSummaryV4Request instanceof ShowProjectSummaryV4Request) {
                    projectId = showProjectSummaryV4Request.projectId;
                } else {
                    projectId = showProjectSummaryV4Request['project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showProjectSummaryV4.');
            }

            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询看板项目的工作项流转配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showWorkItemWrokflowConfig(showWorkItemWrokflowConfigRequest?: ShowWorkItemWrokflowConfigRequest) {
            const options = {
                method: "GET",
                url: "/v4/projects/{project_id}/work-items/workflow/config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let boardId;

            if (showWorkItemWrokflowConfigRequest !== null && showWorkItemWrokflowConfigRequest !== undefined) {
                if (showWorkItemWrokflowConfigRequest instanceof ShowWorkItemWrokflowConfigRequest) {
                    projectId = showWorkItemWrokflowConfigRequest.projectId;
                    boardId = showWorkItemWrokflowConfigRequest.boardId;
                } else {
                    projectId = showWorkItemWrokflowConfigRequest['project_id'];
                    boardId = showWorkItemWrokflowConfigRequest['board_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showWorkItemWrokflowConfig.');
            }
            if (boardId === null || boardId === undefined) {
                throw new RequiredError('boardId','Required parameter boardId was null or undefined when calling showWorkItemWrokflowConfig.');
            }
            if (boardId !== null && boardId !== undefined) {
                localVarQueryParameter['board_id'] = boardId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新成员在项目中的角色
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateMembesRoleV4(updateMembesRoleV4Request?: UpdateMembesRoleV4Request) {
            const options = {
                method: "POST",
                url: "/v4/projects/{project_id}/members/role",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (updateMembesRoleV4Request !== null && updateMembesRoleV4Request !== undefined) {
                if (updateMembesRoleV4Request instanceof UpdateMembesRoleV4Request) {
                    projectId = updateMembesRoleV4Request.projectId;
                    body = updateMembesRoleV4Request.body
                } else {
                    projectId = updateMembesRoleV4Request['project_id'];
                    body = updateMembesRoleV4Request['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling updateMembesRoleV4.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新用户昵称
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateNickNameV4(updateNickNameV4Request?: UpdateNickNameV4Request) {
            const options = {
                method: "PUT",
                url: "/v4/user",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateNickNameV4Request !== null && updateNickNameV4Request !== undefined) {
                if (updateNickNameV4Request instanceof UpdateNickNameV4Request) {
                    body = updateNickNameV4Request.body
                } else {
                    body = updateNickNameV4Request['body'];
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
         * 更新项目
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateProjectV4(updateProjectV4Request?: UpdateProjectV4Request) {
            const options = {
                method: "PUT",
                url: "/v4/projects/{project_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (updateProjectV4Request !== null && updateProjectV4Request !== undefined) {
                if (updateProjectV4Request instanceof UpdateProjectV4Request) {
                    projectId = updateProjectV4Request.projectId;
                    body = updateProjectV4Request.body
                } else {
                    projectId = updateProjectV4Request['project_id'];
                    body = updateProjectV4Request['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling updateProjectV4.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 工作项类型中查询字段模板列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listIssueFields(listIssueFieldsRequest?: ListIssueFieldsRequest) {
            const options = {
                method: "GET",
                url: "/v1/ipdprojectservice/projects/{project_id}/categories/{category_id}/field/templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let categoryId;
            
            let page;
            
            let size;

            if (listIssueFieldsRequest !== null && listIssueFieldsRequest !== undefined) {
                if (listIssueFieldsRequest instanceof ListIssueFieldsRequest) {
                    projectId = listIssueFieldsRequest.projectId;
                    categoryId = listIssueFieldsRequest.categoryId;
                    page = listIssueFieldsRequest.page;
                    size = listIssueFieldsRequest.size;
                } else {
                    projectId = listIssueFieldsRequest['project_id'];
                    categoryId = listIssueFieldsRequest['category_id'];
                    page = listIssueFieldsRequest['page'];
                    size = listIssueFieldsRequest['size'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listIssueFields.');
            }
            if (categoryId === null || categoryId === undefined) {
            throw new RequiredError('categoryId','Required parameter categoryId was null or undefined when calling listIssueFields.');
            }
            if (page === null || page === undefined) {
                throw new RequiredError('page','Required parameter page was null or undefined when calling listIssueFields.');
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (size === null || size === undefined) {
                throw new RequiredError('size','Required parameter size was null or undefined when calling listIssueFields.');
            }
            if (size !== null && size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'category_id': categoryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据工作项查询工作项下的状态信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listIssueStatues(listIssueStatuesRequest?: ListIssueStatuesRequest) {
            const options = {
                method: "GET",
                url: "/v1/ipdprojectservice/projects/{project_id}/category/{category_id}/statuses",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;
            
            let categoryId;

            if (listIssueStatuesRequest !== null && listIssueStatuesRequest !== undefined) {
                if (listIssueStatuesRequest instanceof ListIssueStatuesRequest) {
                    projectId = listIssueStatuesRequest.projectId;
                    categoryId = listIssueStatuesRequest.categoryId;
                } else {
                    projectId = listIssueStatuesRequest['project_id'];
                    categoryId = listIssueStatuesRequest['category_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listIssueStatues.');
            }
            if (categoryId === null || categoryId === undefined) {
            throw new RequiredError('categoryId','Required parameter categoryId was null or undefined when calling listIssueStatues.');
            }

            options.pathParams = { 'project_id': projectId,'category_id': categoryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询工作流字段配置信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showIssueConfigFields(showIssueConfigFieldsRequest?: ShowIssueConfigFieldsRequest) {
            const options = {
                method: "GET",
                url: "/v1/ipdprojectservice/projects/{project_id}/workflow-template/issue/fields",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let issueCategory;

            if (showIssueConfigFieldsRequest !== null && showIssueConfigFieldsRequest !== undefined) {
                if (showIssueConfigFieldsRequest instanceof ShowIssueConfigFieldsRequest) {
                    projectId = showIssueConfigFieldsRequest.projectId;
                    issueCategory = showIssueConfigFieldsRequest.issueCategory;
                } else {
                    projectId = showIssueConfigFieldsRequest['project_id'];
                    issueCategory = showIssueConfigFieldsRequest['issue_category'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showIssueConfigFields.');
            }
            if (issueCategory === null || issueCategory === undefined) {
                throw new RequiredError('issueCategory','Required parameter issueCategory was null or undefined when calling showIssueConfigFields.');
            }
            if (issueCategory !== null && issueCategory !== undefined) {
                localVarQueryParameter['issue_category'] = issueCategory;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询工作项详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showIssueDetail(showIssueDetailRequest?: ShowIssueDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/ipdprojectservice/projects/{project_id}/issues/{issue_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let issueId;
            
            let issueType;
            
            let domainId;

            if (showIssueDetailRequest !== null && showIssueDetailRequest !== undefined) {
                if (showIssueDetailRequest instanceof ShowIssueDetailRequest) {
                    projectId = showIssueDetailRequest.projectId;
                    issueId = showIssueDetailRequest.issueId;
                    issueType = showIssueDetailRequest.issueType;
                    domainId = showIssueDetailRequest.domainId;
                } else {
                    projectId = showIssueDetailRequest['project_id'];
                    issueId = showIssueDetailRequest['issue_id'];
                    issueType = showIssueDetailRequest['issue_type'];
                    domainId = showIssueDetailRequest['domain_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showIssueDetail.');
            }
            if (issueId === null || issueId === undefined) {
            throw new RequiredError('issueId','Required parameter issueId was null or undefined when calling showIssueDetail.');
            }
            if (issueType === null || issueType === undefined) {
                throw new RequiredError('issueType','Required parameter issueType was null or undefined when calling showIssueDetail.');
            }
            if (issueType !== null && issueType !== undefined) {
                localVarQueryParameter['issue_type'] = issueType;
            }
            if (domainId !== null && domainId !== undefined) {
                localVarQueryParameter['domain_id'] = domainId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'issue_id': issueId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取工作流的详情及每条流转线的详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showWorkflowTemplate(showWorkflowTemplateRequest?: ShowWorkflowTemplateRequest) {
            const options = {
                method: "GET",
                url: "/v1/ipdprojectservice/projects/{project_id}/workflow-template",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let issueCategory;

            if (showWorkflowTemplateRequest !== null && showWorkflowTemplateRequest !== undefined) {
                if (showWorkflowTemplateRequest instanceof ShowWorkflowTemplateRequest) {
                    projectId = showWorkflowTemplateRequest.projectId;
                    issueCategory = showWorkflowTemplateRequest.issueCategory;
                } else {
                    projectId = showWorkflowTemplateRequest['project_id'];
                    issueCategory = showWorkflowTemplateRequest['issue_category'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showWorkflowTemplate.');
            }
            if (issueCategory === null || issueCategory === undefined) {
                throw new RequiredError('issueCategory','Required parameter issueCategory was null or undefined when calling showWorkflowTemplate.');
            }
            if (issueCategory !== null && issueCategory !== undefined) {
                localVarQueryParameter['issue_category'] = issueCategory;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 工作项流程流转
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        transferWorkItemFlow(transferWorkItemFlowRequest?: TransferWorkItemFlowRequest) {
            const options = {
                method: "POST",
                url: "/v1/ipdprojectservice/projects/{project_id}/work-item/flow/transfer",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (transferWorkItemFlowRequest !== null && transferWorkItemFlowRequest !== undefined) {
                if (transferWorkItemFlowRequest instanceof TransferWorkItemFlowRequest) {
                    projectId = transferWorkItemFlowRequest.projectId;
                    body = transferWorkItemFlowRequest.body
                } else {
                    projectId = transferWorkItemFlowRequest['project_id'];
                    body = transferWorkItemFlowRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling transferWorkItemFlow.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加指定工作项工时
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addIssueWorkHours(addIssueWorkHoursRequest?: AddIssueWorkHoursRequest) {
            const options = {
                method: "POST",
                url: "/v4/projects/{project_id}/issues/{issue_id}/work-hours",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;
            
            let issueId;

            if (addIssueWorkHoursRequest !== null && addIssueWorkHoursRequest !== undefined) {
                if (addIssueWorkHoursRequest instanceof AddIssueWorkHoursRequest) {
                    projectId = addIssueWorkHoursRequest.projectId;
                    issueId = addIssueWorkHoursRequest.issueId;
                    body = addIssueWorkHoursRequest.body
                } else {
                    projectId = addIssueWorkHoursRequest['project_id'];
                    issueId = addIssueWorkHoursRequest['issue_id'];
                    body = addIssueWorkHoursRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling addIssueWorkHours.');
            }
            if (issueId === null || issueId === undefined) {
            throw new RequiredError('issueId','Required parameter issueId was null or undefined when calling addIssueWorkHours.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'issue_id': issueId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除工作项
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteIssuesV4(batchDeleteIssuesV4Request?: BatchDeleteIssuesV4Request) {
            const options = {
                method: "DELETE",
                url: "/v4/projects/{project_id}/issues",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (batchDeleteIssuesV4Request !== null && batchDeleteIssuesV4Request !== undefined) {
                if (batchDeleteIssuesV4Request instanceof BatchDeleteIssuesV4Request) {
                    projectId = batchDeleteIssuesV4Request.projectId;
                    body = batchDeleteIssuesV4Request.body
                } else {
                    projectId = batchDeleteIssuesV4Request['project_id'];
                    body = batchDeleteIssuesV4Request['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling batchDeleteIssuesV4.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除项目的迭代
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteIterationsV4(batchDeleteIterationsV4Request?: BatchDeleteIterationsV4Request) {
            const options = {
                method: "DELETE",
                url: "/v4/projects/{project_id}/iterations",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (batchDeleteIterationsV4Request !== null && batchDeleteIterationsV4Request !== undefined) {
                if (batchDeleteIterationsV4Request instanceof BatchDeleteIterationsV4Request) {
                    projectId = batchDeleteIterationsV4Request.projectId;
                    body = batchDeleteIterationsV4Request.body
                } else {
                    projectId = batchDeleteIterationsV4Request['project_id'];
                    body = batchDeleteIterationsV4Request['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling batchDeleteIterationsV4.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询当前项目下已经关联的工作项
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchListAssociatedIssues(batchListAssociatedIssuesRequest?: BatchListAssociatedIssuesRequest) {
            const options = {
                method: "GET",
                url: "/v4/projects/{project_id}/issues/batch-associated-issues",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let limit;
            
            let offset;

            if (batchListAssociatedIssuesRequest !== null && batchListAssociatedIssuesRequest !== undefined) {
                if (batchListAssociatedIssuesRequest instanceof BatchListAssociatedIssuesRequest) {
                    projectId = batchListAssociatedIssuesRequest.projectId;
                    limit = batchListAssociatedIssuesRequest.limit;
                    offset = batchListAssociatedIssuesRequest.offset;
                } else {
                    projectId = batchListAssociatedIssuesRequest['project_id'];
                    limit = batchListAssociatedIssuesRequest['limit'];
                    offset = batchListAssociatedIssuesRequest['offset'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling batchListAssociatedIssues.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 取消领域与项目的关联关系
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        cancelProjectDomain(cancelProjectDomainRequest?: CancelProjectDomainRequest) {
            const options = {
                method: "DELETE",
                url: "/v4/projects/{project_id}/domains/{domain_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;
            
            let domainId;

            if (cancelProjectDomainRequest !== null && cancelProjectDomainRequest !== undefined) {
                if (cancelProjectDomainRequest instanceof CancelProjectDomainRequest) {
                    projectId = cancelProjectDomainRequest.projectId;
                    domainId = cancelProjectDomainRequest.domainId;
                } else {
                    projectId = cancelProjectDomainRequest['project_id'];
                    domainId = cancelProjectDomainRequest['domain_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling cancelProjectDomain.');
            }
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling cancelProjectDomain.');
            }

            options.pathParams = { 'project_id': projectId,'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建工作项类型自定义字段
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCustomfields(createCustomfieldsRequest?: CreateCustomfieldsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/custom-fields",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (createCustomfieldsRequest !== null && createCustomfieldsRequest !== undefined) {
                if (createCustomfieldsRequest instanceof CreateCustomfieldsRequest) {
                    projectId = createCustomfieldsRequest.projectId;
                    body = createCustomfieldsRequest.body
                } else {
                    projectId = createCustomfieldsRequest['project_id'];
                    body = createCustomfieldsRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling createCustomfields.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建工作项
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createIssueV4(createIssueV4Request?: CreateIssueV4Request) {
            const options = {
                method: "POST",
                url: "/v4/projects/{project_id}/issue",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (createIssueV4Request !== null && createIssueV4Request !== undefined) {
                if (createIssueV4Request instanceof CreateIssueV4Request) {
                    projectId = createIssueV4Request.projectId;
                    body = createIssueV4Request.body
                } else {
                    projectId = createIssueV4Request['project_id'];
                    body = createIssueV4Request['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling createIssueV4.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建Scrum项目迭代
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createIterationV4(createIterationV4Request?: CreateIterationV4Request) {
            const options = {
                method: "POST",
                url: "/v4/projects/{project_id}/iteration",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (createIterationV4Request !== null && createIterationV4Request !== undefined) {
                if (createIterationV4Request instanceof CreateIterationV4Request) {
                    projectId = createIterationV4Request.projectId;
                    body = createIterationV4Request.body
                } else {
                    projectId = createIterationV4Request['project_id'];
                    body = createIterationV4Request['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling createIterationV4.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询项目的领域列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createProjectDomain(createProjectDomainRequest?: CreateProjectDomainRequest) {
            const options = {
                method: "POST",
                url: "/v4/projects/{project_id}/domain",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (createProjectDomainRequest !== null && createProjectDomainRequest !== undefined) {
                if (createProjectDomainRequest instanceof CreateProjectDomainRequest) {
                    projectId = createProjectDomainRequest.projectId;
                    body = createProjectDomainRequest.body
                } else {
                    projectId = createProjectDomainRequest['project_id'];
                    body = createProjectDomainRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling createProjectDomain.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询项目的模块列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createProjectModule(createProjectModuleRequest?: CreateProjectModuleRequest) {
            const options = {
                method: "POST",
                url: "/v4/projects/{project_id}/module",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (createProjectModuleRequest !== null && createProjectModuleRequest !== undefined) {
                if (createProjectModuleRequest instanceof CreateProjectModuleRequest) {
                    projectId = createProjectModuleRequest.projectId;
                    body = createProjectModuleRequest.body
                } else {
                    projectId = createProjectModuleRequest['project_id'];
                    body = createProjectModuleRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling createProjectModule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 拥有IAM细粒度权限（projectmanConfig:systemSettingField:set）且在devcloud项目中有创建工作项的权限的用户可以设置工作项的创建者
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSystemIssueV4(createSystemIssueV4Request?: CreateSystemIssueV4Request) {
            const options = {
                method: "POST",
                url: "/v4/projects/{project_id}/system/issue",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (createSystemIssueV4Request !== null && createSystemIssueV4Request !== undefined) {
                if (createSystemIssueV4Request instanceof CreateSystemIssueV4Request) {
                    projectId = createSystemIssueV4Request.projectId;
                    body = createSystemIssueV4Request.body
                } else {
                    projectId = createSystemIssueV4Request['project_id'];
                    body = createSystemIssueV4Request['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling createSystemIssueV4.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 取消工作项与附件关联，如附件为工作项页面上传则删除附件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAttachment(deleteAttachmentRequest?: DeleteAttachmentRequest) {
            const options = {
                method: "DELETE",
                url: "/v4/projects/{project_id}/issues/{issue_id}/attachments/{attachment_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;
            
            let issueId;
            
            let attachmentId;

            if (deleteAttachmentRequest !== null && deleteAttachmentRequest !== undefined) {
                if (deleteAttachmentRequest instanceof DeleteAttachmentRequest) {
                    projectId = deleteAttachmentRequest.projectId;
                    issueId = deleteAttachmentRequest.issueId;
                    attachmentId = deleteAttachmentRequest.attachmentId;
                } else {
                    projectId = deleteAttachmentRequest['project_id'];
                    issueId = deleteAttachmentRequest['issue_id'];
                    attachmentId = deleteAttachmentRequest['attachment_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteAttachment.');
            }
            if (issueId === null || issueId === undefined) {
            throw new RequiredError('issueId','Required parameter issueId was null or undefined when calling deleteAttachment.');
            }
            if (attachmentId === null || attachmentId === undefined) {
            throw new RequiredError('attachmentId','Required parameter attachmentId was null or undefined when calling deleteAttachment.');
            }

            options.pathParams = { 'project_id': projectId,'issue_id': issueId,'attachment_id': attachmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除工作项
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteIssueV4(deleteIssueV4Request?: DeleteIssueV4Request) {
            const options = {
                method: "DELETE",
                url: "/v4/projects/{project_id}/issues/{issue_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;
            
            let issueId;

            if (deleteIssueV4Request !== null && deleteIssueV4Request !== undefined) {
                if (deleteIssueV4Request instanceof DeleteIssueV4Request) {
                    projectId = deleteIssueV4Request.projectId;
                    issueId = deleteIssueV4Request.issueId;
                } else {
                    projectId = deleteIssueV4Request['project_id'];
                    issueId = deleteIssueV4Request['issue_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteIssueV4.');
            }
            if (issueId === null || issueId === undefined) {
            throw new RequiredError('issueId','Required parameter issueId was null or undefined when calling deleteIssueV4.');
            }

            options.pathParams = { 'project_id': projectId,'issue_id': issueId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除项目迭代
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteIterationV4(deleteIterationV4Request?: DeleteIterationV4Request) {
            const options = {
                method: "DELETE",
                url: "/v4/projects/{project_id}/iterations/{iteration_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;
            
            let iterationId;

            if (deleteIterationV4Request !== null && deleteIterationV4Request !== undefined) {
                if (deleteIterationV4Request instanceof DeleteIterationV4Request) {
                    projectId = deleteIterationV4Request.projectId;
                    iterationId = deleteIterationV4Request.iterationId;
                } else {
                    projectId = deleteIterationV4Request['project_id'];
                    iterationId = deleteIterationV4Request['iteration_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteIterationV4.');
            }
            if (iterationId === null || iterationId === undefined) {
            throw new RequiredError('iterationId','Required parameter iterationId was null or undefined when calling deleteIterationV4.');
            }

            options.pathParams = { 'project_id': projectId,'iteration_id': iterationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除项目的模块
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteProjectModule(deleteProjectModuleRequest?: DeleteProjectModuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v4/projects/{project_id}/modules/{module_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;
            
            let moduleId;

            if (deleteProjectModuleRequest !== null && deleteProjectModuleRequest !== undefined) {
                if (deleteProjectModuleRequest instanceof DeleteProjectModuleRequest) {
                    projectId = deleteProjectModuleRequest.projectId;
                    moduleId = deleteProjectModuleRequest.moduleId;
                } else {
                    projectId = deleteProjectModuleRequest['project_id'];
                    moduleId = deleteProjectModuleRequest['module_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteProjectModule.');
            }
            if (moduleId === null || moduleId === undefined) {
            throw new RequiredError('moduleId','Required parameter moduleId was null or undefined when calling deleteProjectModule.');
            }

            options.pathParams = { 'project_id': projectId,'module_id': moduleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 下载工作项附件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        downloadAttachment(downloadAttachmentRequest?: DownloadAttachmentRequest) {
            const options = {
                method: "GET",
                url: "/v4/projects/{project_id}/issues/{issue_id}/attachments/{attachment_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;
            
            let issueId;
            
            let attachmentId;

            if (downloadAttachmentRequest !== null && downloadAttachmentRequest !== undefined) {
                if (downloadAttachmentRequest instanceof DownloadAttachmentRequest) {
                    projectId = downloadAttachmentRequest.projectId;
                    issueId = downloadAttachmentRequest.issueId;
                    attachmentId = downloadAttachmentRequest.attachmentId;
                } else {
                    projectId = downloadAttachmentRequest['project_id'];
                    issueId = downloadAttachmentRequest['issue_id'];
                    attachmentId = downloadAttachmentRequest['attachment_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling downloadAttachment.');
            }
            if (issueId === null || issueId === undefined) {
            throw new RequiredError('issueId','Required parameter issueId was null or undefined when calling downloadAttachment.');
            }
            if (attachmentId === null || attachmentId === undefined) {
            throw new RequiredError('attachmentId','Required parameter attachmentId was null or undefined when calling downloadAttachment.');
            }

            options.pathParams = { 'project_id': projectId,'issue_id': issueId,'attachment_id': attachmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 下载图片
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        downloadImageFile(downloadImageFileRequest?: DownloadImageFileRequest) {
            const options = {
                method: "GET",
                url: "/v4/projects/{project_id}/image-file",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let imageUri;

            if (downloadImageFileRequest !== null && downloadImageFileRequest !== undefined) {
                if (downloadImageFileRequest instanceof DownloadImageFileRequest) {
                    projectId = downloadImageFileRequest.projectId;
                    imageUri = downloadImageFileRequest.imageUri;
                } else {
                    projectId = downloadImageFileRequest['project_id'];
                    imageUri = downloadImageFileRequest['image_uri'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling downloadImageFile.');
            }
            if (imageUri === null || imageUri === undefined) {
                throw new RequiredError('imageUri','Required parameter imageUri was null or undefined when calling downloadImageFile.');
            }
            if (imageUri !== null && imageUri !== undefined) {
                localVarQueryParameter['image_uri'] = imageUri;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询当前工作项已经关联的工作项
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAssociatedIssues(listAssociatedIssuesRequest?: ListAssociatedIssuesRequest) {
            const options = {
                method: "GET",
                url: "/v4/projects/{project_id}/issues/{issue_id}/associated-issues",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let issueId;
            
            let limit;
            
            let offset;

            if (listAssociatedIssuesRequest !== null && listAssociatedIssuesRequest !== undefined) {
                if (listAssociatedIssuesRequest instanceof ListAssociatedIssuesRequest) {
                    projectId = listAssociatedIssuesRequest.projectId;
                    issueId = listAssociatedIssuesRequest.issueId;
                    limit = listAssociatedIssuesRequest.limit;
                    offset = listAssociatedIssuesRequest.offset;
                } else {
                    projectId = listAssociatedIssuesRequest['project_id'];
                    issueId = listAssociatedIssuesRequest['issue_id'];
                    limit = listAssociatedIssuesRequest['limit'];
                    offset = listAssociatedIssuesRequest['offset'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listAssociatedIssues.');
            }
            if (issueId === null || issueId === undefined) {
            throw new RequiredError('issueId','Required parameter issueId was null or undefined when calling listAssociatedIssues.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'issue_id': issueId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询关联用例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAssociatedTestCases(listAssociatedTestCasesRequest?: ListAssociatedTestCasesRequest) {
            const options = {
                method: "GET",
                url: "/v4/projects/{project_id}/issues/{issue_id}/associate-test-cases",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let issueId;
            
            let limit;
            
            let offset;

            if (listAssociatedTestCasesRequest !== null && listAssociatedTestCasesRequest !== undefined) {
                if (listAssociatedTestCasesRequest instanceof ListAssociatedTestCasesRequest) {
                    projectId = listAssociatedTestCasesRequest.projectId;
                    issueId = listAssociatedTestCasesRequest.issueId;
                    limit = listAssociatedTestCasesRequest.limit;
                    offset = listAssociatedTestCasesRequest.offset;
                } else {
                    projectId = listAssociatedTestCasesRequest['project_id'];
                    issueId = listAssociatedTestCasesRequest['issue_id'];
                    limit = listAssociatedTestCasesRequest['limit'];
                    offset = listAssociatedTestCasesRequest['offset'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listAssociatedTestCases.');
            }
            if (issueId === null || issueId === undefined) {
            throw new RequiredError('issueId','Required parameter issueId was null or undefined when calling listAssociatedTestCases.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'issue_id': issueId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询当前工作项已经关联的关联Wiki
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAssociatedWikis(listAssociatedWikisRequest?: ListAssociatedWikisRequest) {
            const options = {
                method: "GET",
                url: "/v4/projects/{project_id}/issues/{issue_id}/associated-wikis",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let issueId;
            
            let limit;
            
            let offset;

            if (listAssociatedWikisRequest !== null && listAssociatedWikisRequest !== undefined) {
                if (listAssociatedWikisRequest instanceof ListAssociatedWikisRequest) {
                    projectId = listAssociatedWikisRequest.projectId;
                    issueId = listAssociatedWikisRequest.issueId;
                    limit = listAssociatedWikisRequest.limit;
                    offset = listAssociatedWikisRequest.offset;
                } else {
                    projectId = listAssociatedWikisRequest['project_id'];
                    issueId = listAssociatedWikisRequest['issue_id'];
                    limit = listAssociatedWikisRequest['limit'];
                    offset = listAssociatedWikisRequest['offset'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listAssociatedWikis.');
            }
            if (issueId === null || issueId === undefined) {
            throw new RequiredError('issueId','Required parameter issueId was null or undefined when calling listAssociatedWikis.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'issue_id': issueId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取子工作项
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listChildIssuesV4(listChildIssuesV4Request?: ListChildIssuesV4Request) {
            const options = {
                method: "GET",
                url: "/v4/projects/{project_id}/issues/{issue_id}/child",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;
            
            let issueId;

            if (listChildIssuesV4Request !== null && listChildIssuesV4Request !== undefined) {
                if (listChildIssuesV4Request instanceof ListChildIssuesV4Request) {
                    projectId = listChildIssuesV4Request.projectId;
                    issueId = listChildIssuesV4Request.issueId;
                } else {
                    projectId = listChildIssuesV4Request['project_id'];
                    issueId = listChildIssuesV4Request['issue_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listChildIssuesV4.');
            }
            if (issueId === null || issueId === undefined) {
            throw new RequiredError('issueId','Required parameter issueId was null or undefined when calling listChildIssuesV4.');
            }

            options.pathParams = { 'project_id': projectId,'issue_id': issueId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询当前工作项已经关联的代码提交记录 / 分支创建记录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listIssueAssociatedCommits(listIssueAssociatedCommitsRequest?: ListIssueAssociatedCommitsRequest) {
            const options = {
                method: "GET",
                url: "/v4/projects/{project_id}/issues/{issue_id}/associated-commits",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let issueId;
            
            let type;
            
            let limit;
            
            let offset;

            if (listIssueAssociatedCommitsRequest !== null && listIssueAssociatedCommitsRequest !== undefined) {
                if (listIssueAssociatedCommitsRequest instanceof ListIssueAssociatedCommitsRequest) {
                    projectId = listIssueAssociatedCommitsRequest.projectId;
                    issueId = listIssueAssociatedCommitsRequest.issueId;
                    type = listIssueAssociatedCommitsRequest.type;
                    limit = listIssueAssociatedCommitsRequest.limit;
                    offset = listIssueAssociatedCommitsRequest.offset;
                } else {
                    projectId = listIssueAssociatedCommitsRequest['project_id'];
                    issueId = listIssueAssociatedCommitsRequest['issue_id'];
                    type = listIssueAssociatedCommitsRequest['type'];
                    limit = listIssueAssociatedCommitsRequest['limit'];
                    offset = listIssueAssociatedCommitsRequest['offset'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listIssueAssociatedCommits.');
            }
            if (issueId === null || issueId === undefined) {
            throw new RequiredError('issueId','Required parameter issueId was null or undefined when calling listIssueAssociatedCommits.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'issue_id': issueId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取工作项的评论
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listIssueCommentsV4(listIssueCommentsV4Request?: ListIssueCommentsV4Request) {
            const options = {
                method: "GET",
                url: "/v4/projects/{project_id}/issues/{issue_id}/comments",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let issueId;
            
            let offset;
            
            let limit;

            if (listIssueCommentsV4Request !== null && listIssueCommentsV4Request !== undefined) {
                if (listIssueCommentsV4Request instanceof ListIssueCommentsV4Request) {
                    projectId = listIssueCommentsV4Request.projectId;
                    issueId = listIssueCommentsV4Request.issueId;
                    offset = listIssueCommentsV4Request.offset;
                    limit = listIssueCommentsV4Request.limit;
                } else {
                    projectId = listIssueCommentsV4Request['project_id'];
                    issueId = listIssueCommentsV4Request['issue_id'];
                    offset = listIssueCommentsV4Request['offset'];
                    limit = listIssueCommentsV4Request['limit'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listIssueCommentsV4.');
            }
            if (issueId === null || issueId === undefined) {
            throw new RequiredError('issueId','Required parameter issueId was null or undefined when calling listIssueCommentsV4.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'issue_id': issueId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Scrum工作项自定义字段的可选列表,符合custom_fields或者names条件的都返回,2个值都不传，返回所有的自定义字段列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listIssueCustomFields(listIssueCustomFieldsRequest?: ListIssueCustomFieldsRequest) {
            const options = {
                method: "POST",
                url: "/v4/projects/{project_id}/issues/custom-fields",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (listIssueCustomFieldsRequest !== null && listIssueCustomFieldsRequest !== undefined) {
                if (listIssueCustomFieldsRequest instanceof ListIssueCustomFieldsRequest) {
                    projectId = listIssueCustomFieldsRequest.projectId;
                    body = listIssueCustomFieldsRequest.body
                } else {
                    projectId = listIssueCustomFieldsRequest['project_id'];
                    body = listIssueCustomFieldsRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listIssueCustomFields.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取工作项历史记录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listIssueRecordsV4(listIssueRecordsV4Request?: ListIssueRecordsV4Request) {
            const options = {
                method: "GET",
                url: "/v4/projects/{project_id}/issue/{issue_id}/records",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let issueId;
            
            let offset;
            
            let limit;

            if (listIssueRecordsV4Request !== null && listIssueRecordsV4Request !== undefined) {
                if (listIssueRecordsV4Request instanceof ListIssueRecordsV4Request) {
                    projectId = listIssueRecordsV4Request.projectId;
                    issueId = listIssueRecordsV4Request.issueId;
                    offset = listIssueRecordsV4Request.offset;
                    limit = listIssueRecordsV4Request.limit;
                } else {
                    projectId = listIssueRecordsV4Request['project_id'];
                    issueId = listIssueRecordsV4Request['issue_id'];
                    offset = listIssueRecordsV4Request['offset'];
                    limit = listIssueRecordsV4Request['limit'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listIssueRecordsV4.');
            }
            if (issueId === null || issueId === undefined) {
            throw new RequiredError('issueId','Required parameter issueId was null or undefined when calling listIssueRecordsV4.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'issue_id': issueId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 工作项类型id, 分页参数，创建时间查询项目的工作项
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listIssuesSfV4(listIssuesSfV4Request?: ListIssuesSfV4Request) {
            const options = {
                method: "GET",
                url: "/v4/projects/{project_id}/issues",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let offset;
            
            let limit;
            
            let trackerId;
            
            let createdTimeInterval;
            
            let updatedTimeInterval;

            if (listIssuesSfV4Request !== null && listIssuesSfV4Request !== undefined) {
                if (listIssuesSfV4Request instanceof ListIssuesSfV4Request) {
                    projectId = listIssuesSfV4Request.projectId;
                    offset = listIssuesSfV4Request.offset;
                    limit = listIssuesSfV4Request.limit;
                    trackerId = listIssuesSfV4Request.trackerId;
                    createdTimeInterval = listIssuesSfV4Request.createdTimeInterval;
                    updatedTimeInterval = listIssuesSfV4Request.updatedTimeInterval;
                } else {
                    projectId = listIssuesSfV4Request['project_id'];
                    offset = listIssuesSfV4Request['offset'];
                    limit = listIssuesSfV4Request['limit'];
                    trackerId = listIssuesSfV4Request['tracker_id'];
                    createdTimeInterval = listIssuesSfV4Request['created_time_interval'];
                    updatedTimeInterval = listIssuesSfV4Request['updated_time_interval'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listIssuesSfV4.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (trackerId !== null && trackerId !== undefined) {
                localVarQueryParameter['tracker_id'] = trackerId;
            }
            if (createdTimeInterval !== null && createdTimeInterval !== undefined) {
                localVarQueryParameter['created_time_interval'] = createdTimeInterval;
            }
            if (updatedTimeInterval !== null && updatedTimeInterval !== undefined) {
                localVarQueryParameter['updated_time_interval'] = updatedTimeInterval;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据筛选条件查询工作项
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listIssuesV4(listIssuesV4Request?: ListIssuesV4Request) {
            const options = {
                method: "POST",
                url: "/v4/projects/{project_id}/issues",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (listIssuesV4Request !== null && listIssuesV4Request !== undefined) {
                if (listIssuesV4Request instanceof ListIssuesV4Request) {
                    projectId = listIssuesV4Request.projectId;
                    body = listIssuesV4Request.body
                } else {
                    projectId = listIssuesV4Request['project_id'];
                    body = listIssuesV4Request['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listIssuesV4.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看迭代历史记录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listIterationHistories(listIterationHistoriesRequest?: ListIterationHistoriesRequest) {
            const options = {
                method: "GET",
                url: "/v4/iterations/{iteration_id}/histories",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let iterationId;
            
            let offset;
            
            let limit;

            if (listIterationHistoriesRequest !== null && listIterationHistoriesRequest !== undefined) {
                if (listIterationHistoriesRequest instanceof ListIterationHistoriesRequest) {
                    iterationId = listIterationHistoriesRequest.iterationId;
                    offset = listIterationHistoriesRequest.offset;
                    limit = listIterationHistoriesRequest.limit;
                } else {
                    iterationId = listIterationHistoriesRequest['iteration_id'];
                    offset = listIterationHistoriesRequest['offset'];
                    limit = listIterationHistoriesRequest['limit'];
                }
            }

        
            if (iterationId === null || iterationId === undefined) {
            throw new RequiredError('iterationId','Required parameter iterationId was null or undefined when calling listIterationHistories.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'iteration_id': iterationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询项目的领域列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProjectDomains(listProjectDomainsRequest?: ListProjectDomainsRequest) {
            const options = {
                method: "GET",
                url: "/v4/projects/{project_id}/domains",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let offset;
            
            let limit;

            if (listProjectDomainsRequest !== null && listProjectDomainsRequest !== undefined) {
                if (listProjectDomainsRequest instanceof ListProjectDomainsRequest) {
                    projectId = listProjectDomainsRequest.projectId;
                    offset = listProjectDomainsRequest.offset;
                    limit = listProjectDomainsRequest.limit;
                } else {
                    projectId = listProjectDomainsRequest['project_id'];
                    offset = listProjectDomainsRequest['offset'];
                    limit = listProjectDomainsRequest['limit'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listProjectDomains.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询项目下所有工作项的历史记录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProjectIssuesRecordsV4(listProjectIssuesRecordsV4Request?: ListProjectIssuesRecordsV4Request) {
            const options = {
                method: "GET",
                url: "/v4/projects/{project_id}/issues/records",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let offset;
            
            let limit;
            
            let operatedTimeInterval;

            if (listProjectIssuesRecordsV4Request !== null && listProjectIssuesRecordsV4Request !== undefined) {
                if (listProjectIssuesRecordsV4Request instanceof ListProjectIssuesRecordsV4Request) {
                    projectId = listProjectIssuesRecordsV4Request.projectId;
                    offset = listProjectIssuesRecordsV4Request.offset;
                    limit = listProjectIssuesRecordsV4Request.limit;
                    operatedTimeInterval = listProjectIssuesRecordsV4Request.operatedTimeInterval;
                } else {
                    projectId = listProjectIssuesRecordsV4Request['project_id'];
                    offset = listProjectIssuesRecordsV4Request['offset'];
                    limit = listProjectIssuesRecordsV4Request['limit'];
                    operatedTimeInterval = listProjectIssuesRecordsV4Request['operated_time_interval'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listProjectIssuesRecordsV4.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (operatedTimeInterval !== null && operatedTimeInterval !== undefined) {
                localVarQueryParameter['operated_time_interval'] = operatedTimeInterval;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取项目迭代
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProjectIterationsV4(listProjectIterationsV4Request?: ListProjectIterationsV4Request) {
            const options = {
                method: "GET",
                url: "/v4/projects/{project_id}/iterations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let updatedTimeInterval;
            
            let includeDeleted;

            if (listProjectIterationsV4Request !== null && listProjectIterationsV4Request !== undefined) {
                if (listProjectIterationsV4Request instanceof ListProjectIterationsV4Request) {
                    projectId = listProjectIterationsV4Request.projectId;
                    updatedTimeInterval = listProjectIterationsV4Request.updatedTimeInterval;
                    includeDeleted = listProjectIterationsV4Request.includeDeleted;
                } else {
                    projectId = listProjectIterationsV4Request['project_id'];
                    updatedTimeInterval = listProjectIterationsV4Request['updated_time_interval'];
                    includeDeleted = listProjectIterationsV4Request['include_deleted'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listProjectIterationsV4.');
            }
            if (updatedTimeInterval !== null && updatedTimeInterval !== undefined) {
                localVarQueryParameter['updated_time_interval'] = updatedTimeInterval;
            }
            if (includeDeleted !== null && includeDeleted !== undefined) {
                localVarQueryParameter['include_deleted'] = includeDeleted;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询项目的模块列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProjectModules(listProjectModulesRequest?: ListProjectModulesRequest) {
            const options = {
                method: "GET",
                url: "/v4/projects/{project_id}/modules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let offset;
            
            let limit;

            if (listProjectModulesRequest !== null && listProjectModulesRequest !== undefined) {
                if (listProjectModulesRequest instanceof ListProjectModulesRequest) {
                    projectId = listProjectModulesRequest.projectId;
                    offset = listProjectModulesRequest.offset;
                    limit = listProjectModulesRequest.limit;
                } else {
                    projectId = listProjectModulesRequest['project_id'];
                    offset = listProjectModulesRequest['offset'];
                    limit = listProjectModulesRequest['limit'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listProjectModules.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 按用户查询工时（多项目）
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProjectWorkHours(listProjectWorkHoursRequest?: ListProjectWorkHoursRequest) {
            const options = {
                method: "POST",
                url: "/v4/projects/work-hours",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (listProjectWorkHoursRequest !== null && listProjectWorkHoursRequest !== undefined) {
                if (listProjectWorkHoursRequest instanceof ListProjectWorkHoursRequest) {
                    body = listProjectWorkHoursRequest.body
                } else {
                    body = listProjectWorkHoursRequest['body'];
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
         * 查询项目下的工时类型
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProjectWorkHoursType(listProjectWorkHoursTypeRequest?: ListProjectWorkHoursTypeRequest) {
            const options = {
                method: "GET",
                url: "/v4/projects/{project_id}/work-hours-type",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let limit;
            
            let offset;
            
            let status;

            if (listProjectWorkHoursTypeRequest !== null && listProjectWorkHoursTypeRequest !== undefined) {
                if (listProjectWorkHoursTypeRequest instanceof ListProjectWorkHoursTypeRequest) {
                    projectId = listProjectWorkHoursTypeRequest.projectId;
                    limit = listProjectWorkHoursTypeRequest.limit;
                    offset = listProjectWorkHoursTypeRequest.offset;
                    status = listProjectWorkHoursTypeRequest.status;
                } else {
                    projectId = listProjectWorkHoursTypeRequest['project_id'];
                    limit = listProjectWorkHoursTypeRequest['limit'];
                    offset = listProjectWorkHoursTypeRequest['offset'];
                    status = listProjectWorkHoursTypeRequest['status'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listProjectWorkHoursType.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询项目的状态列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listScrumProjectStatuses(listScrumProjectStatusesRequest?: ListScrumProjectStatusesRequest) {
            const options = {
                method: "GET",
                url: "/v4/projects/{project_id}/statuses",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let offset;
            
            let limit;
            
            let trackerId;

            if (listScrumProjectStatusesRequest !== null && listScrumProjectStatusesRequest !== undefined) {
                if (listScrumProjectStatusesRequest instanceof ListScrumProjectStatusesRequest) {
                    projectId = listScrumProjectStatusesRequest.projectId;
                    offset = listScrumProjectStatusesRequest.offset;
                    limit = listScrumProjectStatusesRequest.limit;
                    trackerId = listScrumProjectStatusesRequest.trackerId;
                } else {
                    projectId = listScrumProjectStatusesRequest['project_id'];
                    offset = listScrumProjectStatusesRequest['offset'];
                    limit = listScrumProjectStatusesRequest['limit'];
                    trackerId = listScrumProjectStatusesRequest['tracker_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listScrumProjectStatuses.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (trackerId !== null && trackerId !== undefined) {
                localVarQueryParameter['tracker_id'] = trackerId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定工作项停留时间
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSpecIssueStayTimes(listSpecIssueStayTimesRequest?: ListSpecIssueStayTimesRequest) {
            const options = {
                method: "POST",
                url: "/v4/issues/duration",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (listSpecIssueStayTimesRequest !== null && listSpecIssueStayTimesRequest !== undefined) {
                if (listSpecIssueStayTimesRequest instanceof ListSpecIssueStayTimesRequest) {
                    body = listSpecIssueStayTimesRequest.body
                } else {
                    body = listSpecIssueStayTimesRequest['body'];
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
         * 查询迭代下工作项状态的统计数据（处理人维度）
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listStatusStatistic(listStatusStatisticRequest?: ListStatusStatisticRequest) {
            const options = {
                method: "GET",
                url: "/v4/projects/{project_id}/status-statistic",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let iterationId;
            
            let trackerId;
            
            let statusId;

            if (listStatusStatisticRequest !== null && listStatusStatisticRequest !== undefined) {
                if (listStatusStatisticRequest instanceof ListStatusStatisticRequest) {
                    projectId = listStatusStatisticRequest.projectId;
                    iterationId = listStatusStatisticRequest.iterationId;
                    trackerId = listStatusStatisticRequest.trackerId;
                    statusId = listStatusStatisticRequest.statusId;
                } else {
                    projectId = listStatusStatisticRequest['project_id'];
                    iterationId = listStatusStatisticRequest['iteration_id'];
                    trackerId = listStatusStatisticRequest['tracker_id'];
                    statusId = listStatusStatisticRequest['status_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listStatusStatistic.');
            }
            if (iterationId === null || iterationId === undefined) {
                throw new RequiredError('iterationId','Required parameter iterationId was null or undefined when calling listStatusStatistic.');
            }
            if (iterationId !== null && iterationId !== undefined) {
                localVarQueryParameter['iteration_id'] = iterationId;
            }
            if (trackerId === null || trackerId === undefined) {
                throw new RequiredError('trackerId','Required parameter trackerId was null or undefined when calling listStatusStatistic.');
            }
            if (trackerId !== null && trackerId !== undefined) {
                localVarQueryParameter['tracker_id'] = trackerId;
            }
            if (statusId === null || statusId === undefined) {
                throw new RequiredError('statusId','Required parameter statusId was null or undefined when calling listStatusStatistic.');
            }
            if (statusId !== null && statusId !== undefined) {
                localVarQueryParameter['status_id'] = statusId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 高级查询我的待办工作项
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchIssues(searchIssuesRequest?: SearchIssuesRequest) {
            const options = {
                method: "POST",
                url: "/v4/issues",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (searchIssuesRequest !== null && searchIssuesRequest !== undefined) {
                if (searchIssuesRequest instanceof SearchIssuesRequest) {
                    body = searchIssuesRequest.body
                } else {
                    body = searchIssuesRequest['body'];
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
         * 获取工作项的完成率
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showIssueCompletionRate(showIssueCompletionRateRequest?: ShowIssueCompletionRateRequest) {
            const options = {
                method: "GET",
                url: "/v4/projects/{project_id}/issue-completion-rate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;

            if (showIssueCompletionRateRequest !== null && showIssueCompletionRateRequest !== undefined) {
                if (showIssueCompletionRateRequest instanceof ShowIssueCompletionRateRequest) {
                    projectId = showIssueCompletionRateRequest.projectId;
                } else {
                    projectId = showIssueCompletionRateRequest['project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showIssueCompletionRate.');
            }

            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询工作项详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showIssueV4(showIssueV4Request?: ShowIssueV4Request) {
            const options = {
                method: "GET",
                url: "/v4/projects/{project_id}/issues/{issue_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;
            
            let issueId;

            if (showIssueV4Request !== null && showIssueV4Request !== undefined) {
                if (showIssueV4Request instanceof ShowIssueV4Request) {
                    projectId = showIssueV4Request.projectId;
                    issueId = showIssueV4Request.issueId;
                } else {
                    projectId = showIssueV4Request['project_id'];
                    issueId = showIssueV4Request['issue_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showIssueV4.');
            }
            if (issueId === null || issueId === undefined) {
            throw new RequiredError('issueId','Required parameter issueId was null or undefined when calling showIssueV4.');
            }

            options.pathParams = { 'project_id': projectId,'issue_id': issueId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Scrum项目的工作项流转配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showIssuesWrokFlowConfig(showIssuesWrokFlowConfigRequest?: ShowIssuesWrokFlowConfigRequest) {
            const options = {
                method: "GET",
                url: "/v4/projects/{project_id}/issues/workflow/config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let trackerId;

            if (showIssuesWrokFlowConfigRequest !== null && showIssuesWrokFlowConfigRequest !== undefined) {
                if (showIssuesWrokFlowConfigRequest instanceof ShowIssuesWrokFlowConfigRequest) {
                    projectId = showIssuesWrokFlowConfigRequest.projectId;
                    trackerId = showIssuesWrokFlowConfigRequest.trackerId;
                } else {
                    projectId = showIssuesWrokFlowConfigRequest['project_id'];
                    trackerId = showIssuesWrokFlowConfigRequest['tracker_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showIssuesWrokFlowConfig.');
            }
            if (trackerId === null || trackerId === undefined) {
                throw new RequiredError('trackerId','Required parameter trackerId was null or undefined when calling showIssuesWrokFlowConfig.');
            }
            if (trackerId !== null && trackerId !== undefined) {
                localVarQueryParameter['tracker_id'] = trackerId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看迭代详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showIterationV4(showIterationV4Request?: ShowIterationV4Request) {
            const options = {
                method: "GET",
                url: "/v4/iterations/{iteration_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let iterationId;

            if (showIterationV4Request !== null && showIterationV4Request !== undefined) {
                if (showIterationV4Request instanceof ShowIterationV4Request) {
                    iterationId = showIterationV4Request.iterationId;
                } else {
                    iterationId = showIterationV4Request['iteration_id'];
                }
            }

        
            if (iterationId === null || iterationId === undefined) {
            throw new RequiredError('iterationId','Required parameter iterationId was null or undefined when calling showIterationV4.');
            }

            options.pathParams = { 'iteration_id': iterationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 按用户查询工时（单项目）
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showProjectWorkHours(showProjectWorkHoursRequest?: ShowProjectWorkHoursRequest) {
            const options = {
                method: "POST",
                url: "/v4/projects/{project_id}/work-hours",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (showProjectWorkHoursRequest !== null && showProjectWorkHoursRequest !== undefined) {
                if (showProjectWorkHoursRequest instanceof ShowProjectWorkHoursRequest) {
                    projectId = showProjectWorkHoursRequest.projectId;
                    body = showProjectWorkHoursRequest.body
                } else {
                    projectId = showProjectWorkHoursRequest['project_id'];
                    body = showProjectWorkHoursRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showProjectWorkHours.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新工作项
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateIssueV4(updateIssueV4Request?: UpdateIssueV4Request) {
            const options = {
                method: "PUT",
                url: "/v4/projects/{project_id}/issues/{issue_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;
            
            let issueId;

            if (updateIssueV4Request !== null && updateIssueV4Request !== undefined) {
                if (updateIssueV4Request instanceof UpdateIssueV4Request) {
                    projectId = updateIssueV4Request.projectId;
                    issueId = updateIssueV4Request.issueId;
                    body = updateIssueV4Request.body
                } else {
                    projectId = updateIssueV4Request['project_id'];
                    issueId = updateIssueV4Request['issue_id'];
                    body = updateIssueV4Request['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling updateIssueV4.');
            }
            if (issueId === null || issueId === undefined) {
            throw new RequiredError('issueId','Required parameter issueId was null or undefined when calling updateIssueV4.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'issue_id': issueId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新Scrum项目迭代
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateIterationV4(updateIterationV4Request?: UpdateIterationV4Request) {
            const options = {
                method: "PUT",
                url: "/v4/projects/{project_id}/iterations/{iteration_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;
            
            let iterationId;

            if (updateIterationV4Request !== null && updateIterationV4Request !== undefined) {
                if (updateIterationV4Request instanceof UpdateIterationV4Request) {
                    projectId = updateIterationV4Request.projectId;
                    iterationId = updateIterationV4Request.iterationId;
                    body = updateIterationV4Request.body
                } else {
                    projectId = updateIterationV4Request['project_id'];
                    iterationId = updateIterationV4Request['iteration_id'];
                    body = updateIterationV4Request['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling updateIterationV4.');
            }
            if (iterationId === null || iterationId === undefined) {
            throw new RequiredError('iterationId','Required parameter iterationId was null or undefined when calling updateIterationV4.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'iteration_id': iterationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新项目的领域
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateProjectDomain(updateProjectDomainRequest?: UpdateProjectDomainRequest) {
            const options = {
                method: "PUT",
                url: "/v4/projects/{project_id}/domains/{domain_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;
            
            let domainId;

            if (updateProjectDomainRequest !== null && updateProjectDomainRequest !== undefined) {
                if (updateProjectDomainRequest instanceof UpdateProjectDomainRequest) {
                    projectId = updateProjectDomainRequest.projectId;
                    domainId = updateProjectDomainRequest.domainId;
                    body = updateProjectDomainRequest.body
                } else {
                    projectId = updateProjectDomainRequest['project_id'];
                    domainId = updateProjectDomainRequest['domain_id'];
                    body = updateProjectDomainRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling updateProjectDomain.');
            }
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling updateProjectDomain.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新项目的模块
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateProjectModule(updateProjectModuleRequest?: UpdateProjectModuleRequest) {
            const options = {
                method: "PUT",
                url: "/v4/projects/{project_id}/modules/{module_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;
            
            let moduleId;

            if (updateProjectModuleRequest !== null && updateProjectModuleRequest !== undefined) {
                if (updateProjectModuleRequest instanceof UpdateProjectModuleRequest) {
                    projectId = updateProjectModuleRequest.projectId;
                    moduleId = updateProjectModuleRequest.moduleId;
                    body = updateProjectModuleRequest.body
                } else {
                    projectId = updateProjectModuleRequest['project_id'];
                    moduleId = updateProjectModuleRequest['module_id'];
                    body = updateProjectModuleRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling updateProjectModule.');
            }
            if (moduleId === null || moduleId === undefined) {
            throw new RequiredError('moduleId','Required parameter moduleId was null or undefined when calling updateProjectModule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'module_id': moduleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 上传工作项附件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        uploadAttachments(uploadAttachmentsRequest?: UploadAttachmentsRequest) {
            const options = {
                method: "POST",
                url: "/v4/projects/{project_id}/issues/{issue_id}/attachments/upload",
                contentType: "multipart/form-data",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            const localVarFormParams = new FormData();
            
            let projectId;
            
            let issueId;
            let attachment;
            

            if (uploadAttachmentsRequest !== null && uploadAttachmentsRequest !== undefined) {
                if (uploadAttachmentsRequest instanceof UploadAttachmentsRequest) {
                    projectId = uploadAttachmentsRequest.projectId;
                    issueId = uploadAttachmentsRequest.issueId;
                    attachment = uploadAttachmentsRequest.body?.attachment;
                } else {
                    projectId = uploadAttachmentsRequest['project_id'];
                    issueId = uploadAttachmentsRequest['issue_id'];
                    attachment = uploadAttachmentsRequest['body']['attachment'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling uploadAttachments.');
            }
            if (issueId === null || issueId === undefined) {
            throw new RequiredError('issueId','Required parameter issueId was null or undefined when calling uploadAttachments.');
            }
            if (attachment === null || attachment === undefined) {
            throw new RequiredError('attachment','Required parameter attachment was null or undefined when calling uploadAttachments.');
            }
            if (attachment !== undefined) { 
                localVarFormParams.append('attachment', attachment as any);
            }
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            options.data = localVarFormParams;
            options.pathParams = { 'project_id': projectId,'issue_id': issueId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 上传图片
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        uploadIssueImg(uploadIssueImgRequest?: UploadIssueImgRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/img",
                contentType: "multipart/form-data",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            const localVarFormParams = new FormData();
            
            let projectId;
            let file;
            

            if (uploadIssueImgRequest !== null && uploadIssueImgRequest !== undefined) {
                if (uploadIssueImgRequest instanceof UploadIssueImgRequest) {
                    projectId = uploadIssueImgRequest.projectId;
                    file = uploadIssueImgRequest.body?.file;
                } else {
                    projectId = uploadIssueImgRequest['project_id'];
                    file = uploadIssueImgRequest['body']['file'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling uploadIssueImg.');
            }
            if (file === null || file === undefined) {
            throw new RequiredError('file','Required parameter file was null or undefined when calling uploadIssueImg.');
            }
            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            options.data = localVarFormParams;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): ProjectManClient {
    return new ProjectManClient(client);
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