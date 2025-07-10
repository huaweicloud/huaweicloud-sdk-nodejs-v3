import { CocTicketDetailInfoResponseDataSubTickets } from './CocTicketDetailInfoResponseDataSubTickets';
import { IssuesTicketInfoEnumData } from './IssuesTicketInfoEnumData';


export class CocTicketDetailInfoResponseData {
    private 'issue_correlation_sla'?: string;
    public level?: string;
    private 'root_cause_cloud_service'?: string;
    private 'root_cause_type'?: string;
    private 'current_cloud_service_id'?: string;
    private 'issue_contact_person'?: string;
    private 'issue_version'?: string;
    public source?: string;
    private 'commit_upload_attachment'?: string;
    private 'source_id'?: string;
    private 'enterprise_project'?: string;
    private 'virtual_schedule_type'?: string;
    public title?: string;
    public regions?: string;
    public description?: string;
    private 'root_cause_comment'?: string;
    public solution?: string;
    private 'regions_serch'?: string;
    private 'level_approve_config'?: string;
    private 'suspension_approve_config'?: string;
    private 'handle_time'?: number;
    private 'fount_time'?: number;
    private 'is_common_issue'?: boolean;
    private 'is_need_change'?: boolean;
    private 'is_enable_suspension'?: boolean;
    private 'is_start_process_async'?: boolean;
    private 'is_update_null'?: boolean;
    public creator?: string;
    public operator?: string;
    private 'is_return_full_info'?: boolean;
    private 'is_start_process'?: boolean;
    private 'ticket_id'?: string;
    private 'real_ticket_id'?: string;
    public assignee?: string;
    public participator?: string;
    private 'work_flow_status'?: string;
    private 'engine_error_msg'?: string;
    private 'baseline_status'?: string;
    private 'ticket_type'?: string;
    public phase?: string;
    private 'sub_tickets'?: Array<CocTicketDetailInfoResponseDataSubTickets>;
    private 'enum_data_list'?: Array<IssuesTicketInfoEnumData>;
    public id?: string;
    private 'meta_data_version'?: number;
    private 'update_time'?: number;
    private 'create_time'?: number;
    private 'is_deleted'?: boolean;
    private 'ticket_type_id'?: string;
    private '_form_info'?: object;
    public constructor() { 
    }
    public withIssueCorrelationSla(issueCorrelationSla: string): CocTicketDetailInfoResponseData {
        this['issue_correlation_sla'] = issueCorrelationSla;
        return this;
    }
    public set issueCorrelationSla(issueCorrelationSla: string  | undefined) {
        this['issue_correlation_sla'] = issueCorrelationSla;
    }
    public get issueCorrelationSla(): string | undefined {
        return this['issue_correlation_sla'];
    }
    public withLevel(level: string): CocTicketDetailInfoResponseData {
        this['level'] = level;
        return this;
    }
    public withRootCauseCloudService(rootCauseCloudService: string): CocTicketDetailInfoResponseData {
        this['root_cause_cloud_service'] = rootCauseCloudService;
        return this;
    }
    public set rootCauseCloudService(rootCauseCloudService: string  | undefined) {
        this['root_cause_cloud_service'] = rootCauseCloudService;
    }
    public get rootCauseCloudService(): string | undefined {
        return this['root_cause_cloud_service'];
    }
    public withRootCauseType(rootCauseType: string): CocTicketDetailInfoResponseData {
        this['root_cause_type'] = rootCauseType;
        return this;
    }
    public set rootCauseType(rootCauseType: string  | undefined) {
        this['root_cause_type'] = rootCauseType;
    }
    public get rootCauseType(): string | undefined {
        return this['root_cause_type'];
    }
    public withCurrentCloudServiceId(currentCloudServiceId: string): CocTicketDetailInfoResponseData {
        this['current_cloud_service_id'] = currentCloudServiceId;
        return this;
    }
    public set currentCloudServiceId(currentCloudServiceId: string  | undefined) {
        this['current_cloud_service_id'] = currentCloudServiceId;
    }
    public get currentCloudServiceId(): string | undefined {
        return this['current_cloud_service_id'];
    }
    public withIssueContactPerson(issueContactPerson: string): CocTicketDetailInfoResponseData {
        this['issue_contact_person'] = issueContactPerson;
        return this;
    }
    public set issueContactPerson(issueContactPerson: string  | undefined) {
        this['issue_contact_person'] = issueContactPerson;
    }
    public get issueContactPerson(): string | undefined {
        return this['issue_contact_person'];
    }
    public withIssueVersion(issueVersion: string): CocTicketDetailInfoResponseData {
        this['issue_version'] = issueVersion;
        return this;
    }
    public set issueVersion(issueVersion: string  | undefined) {
        this['issue_version'] = issueVersion;
    }
    public get issueVersion(): string | undefined {
        return this['issue_version'];
    }
    public withSource(source: string): CocTicketDetailInfoResponseData {
        this['source'] = source;
        return this;
    }
    public withCommitUploadAttachment(commitUploadAttachment: string): CocTicketDetailInfoResponseData {
        this['commit_upload_attachment'] = commitUploadAttachment;
        return this;
    }
    public set commitUploadAttachment(commitUploadAttachment: string  | undefined) {
        this['commit_upload_attachment'] = commitUploadAttachment;
    }
    public get commitUploadAttachment(): string | undefined {
        return this['commit_upload_attachment'];
    }
    public withSourceId(sourceId: string): CocTicketDetailInfoResponseData {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: string  | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId(): string | undefined {
        return this['source_id'];
    }
    public withEnterpriseProject(enterpriseProject: string): CocTicketDetailInfoResponseData {
        this['enterprise_project'] = enterpriseProject;
        return this;
    }
    public set enterpriseProject(enterpriseProject: string  | undefined) {
        this['enterprise_project'] = enterpriseProject;
    }
    public get enterpriseProject(): string | undefined {
        return this['enterprise_project'];
    }
    public withVirtualScheduleType(virtualScheduleType: string): CocTicketDetailInfoResponseData {
        this['virtual_schedule_type'] = virtualScheduleType;
        return this;
    }
    public set virtualScheduleType(virtualScheduleType: string  | undefined) {
        this['virtual_schedule_type'] = virtualScheduleType;
    }
    public get virtualScheduleType(): string | undefined {
        return this['virtual_schedule_type'];
    }
    public withTitle(title: string): CocTicketDetailInfoResponseData {
        this['title'] = title;
        return this;
    }
    public withRegions(regions: string): CocTicketDetailInfoResponseData {
        this['regions'] = regions;
        return this;
    }
    public withDescription(description: string): CocTicketDetailInfoResponseData {
        this['description'] = description;
        return this;
    }
    public withRootCauseComment(rootCauseComment: string): CocTicketDetailInfoResponseData {
        this['root_cause_comment'] = rootCauseComment;
        return this;
    }
    public set rootCauseComment(rootCauseComment: string  | undefined) {
        this['root_cause_comment'] = rootCauseComment;
    }
    public get rootCauseComment(): string | undefined {
        return this['root_cause_comment'];
    }
    public withSolution(solution: string): CocTicketDetailInfoResponseData {
        this['solution'] = solution;
        return this;
    }
    public withRegionsSerch(regionsSerch: string): CocTicketDetailInfoResponseData {
        this['regions_serch'] = regionsSerch;
        return this;
    }
    public set regionsSerch(regionsSerch: string  | undefined) {
        this['regions_serch'] = regionsSerch;
    }
    public get regionsSerch(): string | undefined {
        return this['regions_serch'];
    }
    public withLevelApproveConfig(levelApproveConfig: string): CocTicketDetailInfoResponseData {
        this['level_approve_config'] = levelApproveConfig;
        return this;
    }
    public set levelApproveConfig(levelApproveConfig: string  | undefined) {
        this['level_approve_config'] = levelApproveConfig;
    }
    public get levelApproveConfig(): string | undefined {
        return this['level_approve_config'];
    }
    public withSuspensionApproveConfig(suspensionApproveConfig: string): CocTicketDetailInfoResponseData {
        this['suspension_approve_config'] = suspensionApproveConfig;
        return this;
    }
    public set suspensionApproveConfig(suspensionApproveConfig: string  | undefined) {
        this['suspension_approve_config'] = suspensionApproveConfig;
    }
    public get suspensionApproveConfig(): string | undefined {
        return this['suspension_approve_config'];
    }
    public withHandleTime(handleTime: number): CocTicketDetailInfoResponseData {
        this['handle_time'] = handleTime;
        return this;
    }
    public set handleTime(handleTime: number  | undefined) {
        this['handle_time'] = handleTime;
    }
    public get handleTime(): number | undefined {
        return this['handle_time'];
    }
    public withFountTime(fountTime: number): CocTicketDetailInfoResponseData {
        this['fount_time'] = fountTime;
        return this;
    }
    public set fountTime(fountTime: number  | undefined) {
        this['fount_time'] = fountTime;
    }
    public get fountTime(): number | undefined {
        return this['fount_time'];
    }
    public withIsCommonIssue(isCommonIssue: boolean): CocTicketDetailInfoResponseData {
        this['is_common_issue'] = isCommonIssue;
        return this;
    }
    public set isCommonIssue(isCommonIssue: boolean  | undefined) {
        this['is_common_issue'] = isCommonIssue;
    }
    public get isCommonIssue(): boolean | undefined {
        return this['is_common_issue'];
    }
    public withIsNeedChange(isNeedChange: boolean): CocTicketDetailInfoResponseData {
        this['is_need_change'] = isNeedChange;
        return this;
    }
    public set isNeedChange(isNeedChange: boolean  | undefined) {
        this['is_need_change'] = isNeedChange;
    }
    public get isNeedChange(): boolean | undefined {
        return this['is_need_change'];
    }
    public withIsEnableSuspension(isEnableSuspension: boolean): CocTicketDetailInfoResponseData {
        this['is_enable_suspension'] = isEnableSuspension;
        return this;
    }
    public set isEnableSuspension(isEnableSuspension: boolean  | undefined) {
        this['is_enable_suspension'] = isEnableSuspension;
    }
    public get isEnableSuspension(): boolean | undefined {
        return this['is_enable_suspension'];
    }
    public withIsStartProcessAsync(isStartProcessAsync: boolean): CocTicketDetailInfoResponseData {
        this['is_start_process_async'] = isStartProcessAsync;
        return this;
    }
    public set isStartProcessAsync(isStartProcessAsync: boolean  | undefined) {
        this['is_start_process_async'] = isStartProcessAsync;
    }
    public get isStartProcessAsync(): boolean | undefined {
        return this['is_start_process_async'];
    }
    public withIsUpdateNull(isUpdateNull: boolean): CocTicketDetailInfoResponseData {
        this['is_update_null'] = isUpdateNull;
        return this;
    }
    public set isUpdateNull(isUpdateNull: boolean  | undefined) {
        this['is_update_null'] = isUpdateNull;
    }
    public get isUpdateNull(): boolean | undefined {
        return this['is_update_null'];
    }
    public withCreator(creator: string): CocTicketDetailInfoResponseData {
        this['creator'] = creator;
        return this;
    }
    public withOperator(operator: string): CocTicketDetailInfoResponseData {
        this['operator'] = operator;
        return this;
    }
    public withIsReturnFullInfo(isReturnFullInfo: boolean): CocTicketDetailInfoResponseData {
        this['is_return_full_info'] = isReturnFullInfo;
        return this;
    }
    public set isReturnFullInfo(isReturnFullInfo: boolean  | undefined) {
        this['is_return_full_info'] = isReturnFullInfo;
    }
    public get isReturnFullInfo(): boolean | undefined {
        return this['is_return_full_info'];
    }
    public withIsStartProcess(isStartProcess: boolean): CocTicketDetailInfoResponseData {
        this['is_start_process'] = isStartProcess;
        return this;
    }
    public set isStartProcess(isStartProcess: boolean  | undefined) {
        this['is_start_process'] = isStartProcess;
    }
    public get isStartProcess(): boolean | undefined {
        return this['is_start_process'];
    }
    public withTicketId(ticketId: string): CocTicketDetailInfoResponseData {
        this['ticket_id'] = ticketId;
        return this;
    }
    public set ticketId(ticketId: string  | undefined) {
        this['ticket_id'] = ticketId;
    }
    public get ticketId(): string | undefined {
        return this['ticket_id'];
    }
    public withRealTicketId(realTicketId: string): CocTicketDetailInfoResponseData {
        this['real_ticket_id'] = realTicketId;
        return this;
    }
    public set realTicketId(realTicketId: string  | undefined) {
        this['real_ticket_id'] = realTicketId;
    }
    public get realTicketId(): string | undefined {
        return this['real_ticket_id'];
    }
    public withAssignee(assignee: string): CocTicketDetailInfoResponseData {
        this['assignee'] = assignee;
        return this;
    }
    public withParticipator(participator: string): CocTicketDetailInfoResponseData {
        this['participator'] = participator;
        return this;
    }
    public withWorkFlowStatus(workFlowStatus: string): CocTicketDetailInfoResponseData {
        this['work_flow_status'] = workFlowStatus;
        return this;
    }
    public set workFlowStatus(workFlowStatus: string  | undefined) {
        this['work_flow_status'] = workFlowStatus;
    }
    public get workFlowStatus(): string | undefined {
        return this['work_flow_status'];
    }
    public withEngineErrorMsg(engineErrorMsg: string): CocTicketDetailInfoResponseData {
        this['engine_error_msg'] = engineErrorMsg;
        return this;
    }
    public set engineErrorMsg(engineErrorMsg: string  | undefined) {
        this['engine_error_msg'] = engineErrorMsg;
    }
    public get engineErrorMsg(): string | undefined {
        return this['engine_error_msg'];
    }
    public withBaselineStatus(baselineStatus: string): CocTicketDetailInfoResponseData {
        this['baseline_status'] = baselineStatus;
        return this;
    }
    public set baselineStatus(baselineStatus: string  | undefined) {
        this['baseline_status'] = baselineStatus;
    }
    public get baselineStatus(): string | undefined {
        return this['baseline_status'];
    }
    public withTicketType(ticketType: string): CocTicketDetailInfoResponseData {
        this['ticket_type'] = ticketType;
        return this;
    }
    public set ticketType(ticketType: string  | undefined) {
        this['ticket_type'] = ticketType;
    }
    public get ticketType(): string | undefined {
        return this['ticket_type'];
    }
    public withPhase(phase: string): CocTicketDetailInfoResponseData {
        this['phase'] = phase;
        return this;
    }
    public withSubTickets(subTickets: Array<CocTicketDetailInfoResponseDataSubTickets>): CocTicketDetailInfoResponseData {
        this['sub_tickets'] = subTickets;
        return this;
    }
    public set subTickets(subTickets: Array<CocTicketDetailInfoResponseDataSubTickets>  | undefined) {
        this['sub_tickets'] = subTickets;
    }
    public get subTickets(): Array<CocTicketDetailInfoResponseDataSubTickets> | undefined {
        return this['sub_tickets'];
    }
    public withEnumDataList(enumDataList: Array<IssuesTicketInfoEnumData>): CocTicketDetailInfoResponseData {
        this['enum_data_list'] = enumDataList;
        return this;
    }
    public set enumDataList(enumDataList: Array<IssuesTicketInfoEnumData>  | undefined) {
        this['enum_data_list'] = enumDataList;
    }
    public get enumDataList(): Array<IssuesTicketInfoEnumData> | undefined {
        return this['enum_data_list'];
    }
    public withId(id: string): CocTicketDetailInfoResponseData {
        this['id'] = id;
        return this;
    }
    public withMetaDataVersion(metaDataVersion: number): CocTicketDetailInfoResponseData {
        this['meta_data_version'] = metaDataVersion;
        return this;
    }
    public set metaDataVersion(metaDataVersion: number  | undefined) {
        this['meta_data_version'] = metaDataVersion;
    }
    public get metaDataVersion(): number | undefined {
        return this['meta_data_version'];
    }
    public withUpdateTime(updateTime: number): CocTicketDetailInfoResponseData {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withCreateTime(createTime: number): CocTicketDetailInfoResponseData {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withIsDeleted(isDeleted: boolean): CocTicketDetailInfoResponseData {
        this['is_deleted'] = isDeleted;
        return this;
    }
    public set isDeleted(isDeleted: boolean  | undefined) {
        this['is_deleted'] = isDeleted;
    }
    public get isDeleted(): boolean | undefined {
        return this['is_deleted'];
    }
    public withTicketTypeId(ticketTypeId: string): CocTicketDetailInfoResponseData {
        this['ticket_type_id'] = ticketTypeId;
        return this;
    }
    public set ticketTypeId(ticketTypeId: string  | undefined) {
        this['ticket_type_id'] = ticketTypeId;
    }
    public get ticketTypeId(): string | undefined {
        return this['ticket_type_id'];
    }
    public withFormInfo(formInfo: object): CocTicketDetailInfoResponseData {
        this['_form_info'] = formInfo;
        return this;
    }
    public set formInfo(formInfo: object  | undefined) {
        this['_form_info'] = formInfo;
    }
    public get formInfo(): object | undefined {
        return this['_form_info'];
    }
}