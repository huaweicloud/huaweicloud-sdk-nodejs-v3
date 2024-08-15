import { TicketInfoEnumData } from './TicketInfoEnumData';


export class CocIssuesTicketDetailInfoResponseData {
    private 'ticket_type'?: string;
    public level?: string;
    private 'impacted_cloud_services'?: string;
    private 'root_cause_cloud_service'?: string;
    private 'root_cause_type'?: string;
    private 'root_cause_comment'?: string;
    public solution?: string;
    private 'issue_contact_person'?: string;
    private 'reproduce_probability'?: string;
    private 'issue_version'?: string;
    public title?: string;
    private 'virtual_schedule_type'?: string;
    public regions?: string;
    public description?: string;
    private 'fount_time'?: number;
    private 'is_common_issue'?: boolean;
    private 'is_need_change'?: boolean;
    public creator?: string;
    public operator?: string;
    private 'ticket_id'?: string;
    public assignee?: string;
    private 'work_flow_status'?: string;
    public phase?: string;
    private 'update_time'?: number;
    private 'create_time'?: number;
    private 'is_deleted'?: boolean;
    private 'enum_data_list'?: Array<TicketInfoEnumData>;
    public constructor() { 
    }
    public withTicketType(ticketType: string): CocIssuesTicketDetailInfoResponseData {
        this['ticket_type'] = ticketType;
        return this;
    }
    public set ticketType(ticketType: string  | undefined) {
        this['ticket_type'] = ticketType;
    }
    public get ticketType(): string | undefined {
        return this['ticket_type'];
    }
    public withLevel(level: string): CocIssuesTicketDetailInfoResponseData {
        this['level'] = level;
        return this;
    }
    public withImpactedCloudServices(impactedCloudServices: string): CocIssuesTicketDetailInfoResponseData {
        this['impacted_cloud_services'] = impactedCloudServices;
        return this;
    }
    public set impactedCloudServices(impactedCloudServices: string  | undefined) {
        this['impacted_cloud_services'] = impactedCloudServices;
    }
    public get impactedCloudServices(): string | undefined {
        return this['impacted_cloud_services'];
    }
    public withRootCauseCloudService(rootCauseCloudService: string): CocIssuesTicketDetailInfoResponseData {
        this['root_cause_cloud_service'] = rootCauseCloudService;
        return this;
    }
    public set rootCauseCloudService(rootCauseCloudService: string  | undefined) {
        this['root_cause_cloud_service'] = rootCauseCloudService;
    }
    public get rootCauseCloudService(): string | undefined {
        return this['root_cause_cloud_service'];
    }
    public withRootCauseType(rootCauseType: string): CocIssuesTicketDetailInfoResponseData {
        this['root_cause_type'] = rootCauseType;
        return this;
    }
    public set rootCauseType(rootCauseType: string  | undefined) {
        this['root_cause_type'] = rootCauseType;
    }
    public get rootCauseType(): string | undefined {
        return this['root_cause_type'];
    }
    public withRootCauseComment(rootCauseComment: string): CocIssuesTicketDetailInfoResponseData {
        this['root_cause_comment'] = rootCauseComment;
        return this;
    }
    public set rootCauseComment(rootCauseComment: string  | undefined) {
        this['root_cause_comment'] = rootCauseComment;
    }
    public get rootCauseComment(): string | undefined {
        return this['root_cause_comment'];
    }
    public withSolution(solution: string): CocIssuesTicketDetailInfoResponseData {
        this['solution'] = solution;
        return this;
    }
    public withIssueContactPerson(issueContactPerson: string): CocIssuesTicketDetailInfoResponseData {
        this['issue_contact_person'] = issueContactPerson;
        return this;
    }
    public set issueContactPerson(issueContactPerson: string  | undefined) {
        this['issue_contact_person'] = issueContactPerson;
    }
    public get issueContactPerson(): string | undefined {
        return this['issue_contact_person'];
    }
    public withReproduceProbability(reproduceProbability: string): CocIssuesTicketDetailInfoResponseData {
        this['reproduce_probability'] = reproduceProbability;
        return this;
    }
    public set reproduceProbability(reproduceProbability: string  | undefined) {
        this['reproduce_probability'] = reproduceProbability;
    }
    public get reproduceProbability(): string | undefined {
        return this['reproduce_probability'];
    }
    public withIssueVersion(issueVersion: string): CocIssuesTicketDetailInfoResponseData {
        this['issue_version'] = issueVersion;
        return this;
    }
    public set issueVersion(issueVersion: string  | undefined) {
        this['issue_version'] = issueVersion;
    }
    public get issueVersion(): string | undefined {
        return this['issue_version'];
    }
    public withTitle(title: string): CocIssuesTicketDetailInfoResponseData {
        this['title'] = title;
        return this;
    }
    public withVirtualScheduleType(virtualScheduleType: string): CocIssuesTicketDetailInfoResponseData {
        this['virtual_schedule_type'] = virtualScheduleType;
        return this;
    }
    public set virtualScheduleType(virtualScheduleType: string  | undefined) {
        this['virtual_schedule_type'] = virtualScheduleType;
    }
    public get virtualScheduleType(): string | undefined {
        return this['virtual_schedule_type'];
    }
    public withRegions(regions: string): CocIssuesTicketDetailInfoResponseData {
        this['regions'] = regions;
        return this;
    }
    public withDescription(description: string): CocIssuesTicketDetailInfoResponseData {
        this['description'] = description;
        return this;
    }
    public withFountTime(fountTime: number): CocIssuesTicketDetailInfoResponseData {
        this['fount_time'] = fountTime;
        return this;
    }
    public set fountTime(fountTime: number  | undefined) {
        this['fount_time'] = fountTime;
    }
    public get fountTime(): number | undefined {
        return this['fount_time'];
    }
    public withIsCommonIssue(isCommonIssue: boolean): CocIssuesTicketDetailInfoResponseData {
        this['is_common_issue'] = isCommonIssue;
        return this;
    }
    public set isCommonIssue(isCommonIssue: boolean  | undefined) {
        this['is_common_issue'] = isCommonIssue;
    }
    public get isCommonIssue(): boolean | undefined {
        return this['is_common_issue'];
    }
    public withIsNeedChange(isNeedChange: boolean): CocIssuesTicketDetailInfoResponseData {
        this['is_need_change'] = isNeedChange;
        return this;
    }
    public set isNeedChange(isNeedChange: boolean  | undefined) {
        this['is_need_change'] = isNeedChange;
    }
    public get isNeedChange(): boolean | undefined {
        return this['is_need_change'];
    }
    public withCreator(creator: string): CocIssuesTicketDetailInfoResponseData {
        this['creator'] = creator;
        return this;
    }
    public withOperator(operator: string): CocIssuesTicketDetailInfoResponseData {
        this['operator'] = operator;
        return this;
    }
    public withTicketId(ticketId: string): CocIssuesTicketDetailInfoResponseData {
        this['ticket_id'] = ticketId;
        return this;
    }
    public set ticketId(ticketId: string  | undefined) {
        this['ticket_id'] = ticketId;
    }
    public get ticketId(): string | undefined {
        return this['ticket_id'];
    }
    public withAssignee(assignee: string): CocIssuesTicketDetailInfoResponseData {
        this['assignee'] = assignee;
        return this;
    }
    public withWorkFlowStatus(workFlowStatus: string): CocIssuesTicketDetailInfoResponseData {
        this['work_flow_status'] = workFlowStatus;
        return this;
    }
    public set workFlowStatus(workFlowStatus: string  | undefined) {
        this['work_flow_status'] = workFlowStatus;
    }
    public get workFlowStatus(): string | undefined {
        return this['work_flow_status'];
    }
    public withPhase(phase: string): CocIssuesTicketDetailInfoResponseData {
        this['phase'] = phase;
        return this;
    }
    public withUpdateTime(updateTime: number): CocIssuesTicketDetailInfoResponseData {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withCreateTime(createTime: number): CocIssuesTicketDetailInfoResponseData {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withIsDeleted(isDeleted: boolean): CocIssuesTicketDetailInfoResponseData {
        this['is_deleted'] = isDeleted;
        return this;
    }
    public set isDeleted(isDeleted: boolean  | undefined) {
        this['is_deleted'] = isDeleted;
    }
    public get isDeleted(): boolean | undefined {
        return this['is_deleted'];
    }
    public withEnumDataList(enumDataList: Array<TicketInfoEnumData>): CocIssuesTicketDetailInfoResponseData {
        this['enum_data_list'] = enumDataList;
        return this;
    }
    public set enumDataList(enumDataList: Array<TicketInfoEnumData>  | undefined) {
        this['enum_data_list'] = enumDataList;
    }
    public get enumDataList(): Array<TicketInfoEnumData> | undefined {
        return this['enum_data_list'];
    }
}