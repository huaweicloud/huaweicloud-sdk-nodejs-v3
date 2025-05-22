import { NewCustomField } from './NewCustomField';


export class IssueRequestV4 {
    private 'actual_work_hours'?: number;
    private 'assigned_id'?: number;
    private 'begin_time'?: string;
    public description?: string;
    private 'developer_id'?: number;
    private 'domain_id'?: number;
    private 'done_ratio'?: number;
    private 'end_time'?: string;
    private 'expected_work_hours'?: number;
    private 'iteration_id'?: number;
    private 'module_id'?: number;
    public name?: string;
    private 'parent_issue_id'?: number;
    private 'priority_id'?: number;
    private 'severity_id'?: number;
    private 'status_id'?: number;
    private 'tracker_id'?: number;
    private 'new_custom_fields'?: Array<NewCustomField>;
    public constructor() { 
    }
    public withActualWorkHours(actualWorkHours: number): IssueRequestV4 {
        this['actual_work_hours'] = actualWorkHours;
        return this;
    }
    public set actualWorkHours(actualWorkHours: number  | undefined) {
        this['actual_work_hours'] = actualWorkHours;
    }
    public get actualWorkHours(): number | undefined {
        return this['actual_work_hours'];
    }
    public withAssignedId(assignedId: number): IssueRequestV4 {
        this['assigned_id'] = assignedId;
        return this;
    }
    public set assignedId(assignedId: number  | undefined) {
        this['assigned_id'] = assignedId;
    }
    public get assignedId(): number | undefined {
        return this['assigned_id'];
    }
    public withBeginTime(beginTime: string): IssueRequestV4 {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withDescription(description: string): IssueRequestV4 {
        this['description'] = description;
        return this;
    }
    public withDeveloperId(developerId: number): IssueRequestV4 {
        this['developer_id'] = developerId;
        return this;
    }
    public set developerId(developerId: number  | undefined) {
        this['developer_id'] = developerId;
    }
    public get developerId(): number | undefined {
        return this['developer_id'];
    }
    public withDomainId(domainId: number): IssueRequestV4 {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: number  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): number | undefined {
        return this['domain_id'];
    }
    public withDoneRatio(doneRatio: number): IssueRequestV4 {
        this['done_ratio'] = doneRatio;
        return this;
    }
    public set doneRatio(doneRatio: number  | undefined) {
        this['done_ratio'] = doneRatio;
    }
    public get doneRatio(): number | undefined {
        return this['done_ratio'];
    }
    public withEndTime(endTime: string): IssueRequestV4 {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withExpectedWorkHours(expectedWorkHours: number): IssueRequestV4 {
        this['expected_work_hours'] = expectedWorkHours;
        return this;
    }
    public set expectedWorkHours(expectedWorkHours: number  | undefined) {
        this['expected_work_hours'] = expectedWorkHours;
    }
    public get expectedWorkHours(): number | undefined {
        return this['expected_work_hours'];
    }
    public withIterationId(iterationId: number): IssueRequestV4 {
        this['iteration_id'] = iterationId;
        return this;
    }
    public set iterationId(iterationId: number  | undefined) {
        this['iteration_id'] = iterationId;
    }
    public get iterationId(): number | undefined {
        return this['iteration_id'];
    }
    public withModuleId(moduleId: number): IssueRequestV4 {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: number  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): number | undefined {
        return this['module_id'];
    }
    public withName(name: string): IssueRequestV4 {
        this['name'] = name;
        return this;
    }
    public withParentIssueId(parentIssueId: number): IssueRequestV4 {
        this['parent_issue_id'] = parentIssueId;
        return this;
    }
    public set parentIssueId(parentIssueId: number  | undefined) {
        this['parent_issue_id'] = parentIssueId;
    }
    public get parentIssueId(): number | undefined {
        return this['parent_issue_id'];
    }
    public withPriorityId(priorityId: number): IssueRequestV4 {
        this['priority_id'] = priorityId;
        return this;
    }
    public set priorityId(priorityId: number  | undefined) {
        this['priority_id'] = priorityId;
    }
    public get priorityId(): number | undefined {
        return this['priority_id'];
    }
    public withSeverityId(severityId: number): IssueRequestV4 {
        this['severity_id'] = severityId;
        return this;
    }
    public set severityId(severityId: number  | undefined) {
        this['severity_id'] = severityId;
    }
    public get severityId(): number | undefined {
        return this['severity_id'];
    }
    public withStatusId(statusId: number): IssueRequestV4 {
        this['status_id'] = statusId;
        return this;
    }
    public set statusId(statusId: number  | undefined) {
        this['status_id'] = statusId;
    }
    public get statusId(): number | undefined {
        return this['status_id'];
    }
    public withTrackerId(trackerId: number): IssueRequestV4 {
        this['tracker_id'] = trackerId;
        return this;
    }
    public set trackerId(trackerId: number  | undefined) {
        this['tracker_id'] = trackerId;
    }
    public get trackerId(): number | undefined {
        return this['tracker_id'];
    }
    public withNewCustomFields(newCustomFields: Array<NewCustomField>): IssueRequestV4 {
        this['new_custom_fields'] = newCustomFields;
        return this;
    }
    public set newCustomFields(newCustomFields: Array<NewCustomField>  | undefined) {
        this['new_custom_fields'] = newCustomFields;
    }
    public get newCustomFields(): Array<NewCustomField> | undefined {
        return this['new_custom_fields'];
    }
}