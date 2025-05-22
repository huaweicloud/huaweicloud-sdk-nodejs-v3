import { CreateIssueRequestV4 } from './CreateIssueRequestV4';
import { Creator } from './Creator';
import { NewCustomField } from './NewCustomField';
import { ScrumCustomField } from './ScrumCustomField';


export class CreateSystemIssueRequestV4 {
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
    public creator?: Creator;
    private 'custom_fields'?: Array<ScrumCustomField>;
    public constructor(name?: string, priorityId?: number, trackerId?: number, creator?: Creator) { 
        this['name'] = name;
        this['priority_id'] = priorityId;
        this['tracker_id'] = trackerId;
        this['creator'] = creator;
    }
    public withActualWorkHours(actualWorkHours: number): CreateSystemIssueRequestV4 {
        this['actual_work_hours'] = actualWorkHours;
        return this;
    }
    public set actualWorkHours(actualWorkHours: number  | undefined) {
        this['actual_work_hours'] = actualWorkHours;
    }
    public get actualWorkHours(): number | undefined {
        return this['actual_work_hours'];
    }
    public withAssignedId(assignedId: number): CreateSystemIssueRequestV4 {
        this['assigned_id'] = assignedId;
        return this;
    }
    public set assignedId(assignedId: number  | undefined) {
        this['assigned_id'] = assignedId;
    }
    public get assignedId(): number | undefined {
        return this['assigned_id'];
    }
    public withBeginTime(beginTime: string): CreateSystemIssueRequestV4 {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withDescription(description: string): CreateSystemIssueRequestV4 {
        this['description'] = description;
        return this;
    }
    public withDeveloperId(developerId: number): CreateSystemIssueRequestV4 {
        this['developer_id'] = developerId;
        return this;
    }
    public set developerId(developerId: number  | undefined) {
        this['developer_id'] = developerId;
    }
    public get developerId(): number | undefined {
        return this['developer_id'];
    }
    public withDomainId(domainId: number): CreateSystemIssueRequestV4 {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: number  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): number | undefined {
        return this['domain_id'];
    }
    public withDoneRatio(doneRatio: number): CreateSystemIssueRequestV4 {
        this['done_ratio'] = doneRatio;
        return this;
    }
    public set doneRatio(doneRatio: number  | undefined) {
        this['done_ratio'] = doneRatio;
    }
    public get doneRatio(): number | undefined {
        return this['done_ratio'];
    }
    public withEndTime(endTime: string): CreateSystemIssueRequestV4 {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withExpectedWorkHours(expectedWorkHours: number): CreateSystemIssueRequestV4 {
        this['expected_work_hours'] = expectedWorkHours;
        return this;
    }
    public set expectedWorkHours(expectedWorkHours: number  | undefined) {
        this['expected_work_hours'] = expectedWorkHours;
    }
    public get expectedWorkHours(): number | undefined {
        return this['expected_work_hours'];
    }
    public withIterationId(iterationId: number): CreateSystemIssueRequestV4 {
        this['iteration_id'] = iterationId;
        return this;
    }
    public set iterationId(iterationId: number  | undefined) {
        this['iteration_id'] = iterationId;
    }
    public get iterationId(): number | undefined {
        return this['iteration_id'];
    }
    public withModuleId(moduleId: number): CreateSystemIssueRequestV4 {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: number  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): number | undefined {
        return this['module_id'];
    }
    public withName(name: string): CreateSystemIssueRequestV4 {
        this['name'] = name;
        return this;
    }
    public withParentIssueId(parentIssueId: number): CreateSystemIssueRequestV4 {
        this['parent_issue_id'] = parentIssueId;
        return this;
    }
    public set parentIssueId(parentIssueId: number  | undefined) {
        this['parent_issue_id'] = parentIssueId;
    }
    public get parentIssueId(): number | undefined {
        return this['parent_issue_id'];
    }
    public withPriorityId(priorityId: number): CreateSystemIssueRequestV4 {
        this['priority_id'] = priorityId;
        return this;
    }
    public set priorityId(priorityId: number  | undefined) {
        this['priority_id'] = priorityId;
    }
    public get priorityId(): number | undefined {
        return this['priority_id'];
    }
    public withSeverityId(severityId: number): CreateSystemIssueRequestV4 {
        this['severity_id'] = severityId;
        return this;
    }
    public set severityId(severityId: number  | undefined) {
        this['severity_id'] = severityId;
    }
    public get severityId(): number | undefined {
        return this['severity_id'];
    }
    public withStatusId(statusId: number): CreateSystemIssueRequestV4 {
        this['status_id'] = statusId;
        return this;
    }
    public set statusId(statusId: number  | undefined) {
        this['status_id'] = statusId;
    }
    public get statusId(): number | undefined {
        return this['status_id'];
    }
    public withTrackerId(trackerId: number): CreateSystemIssueRequestV4 {
        this['tracker_id'] = trackerId;
        return this;
    }
    public set trackerId(trackerId: number  | undefined) {
        this['tracker_id'] = trackerId;
    }
    public get trackerId(): number | undefined {
        return this['tracker_id'];
    }
    public withNewCustomFields(newCustomFields: Array<NewCustomField>): CreateSystemIssueRequestV4 {
        this['new_custom_fields'] = newCustomFields;
        return this;
    }
    public set newCustomFields(newCustomFields: Array<NewCustomField>  | undefined) {
        this['new_custom_fields'] = newCustomFields;
    }
    public get newCustomFields(): Array<NewCustomField> | undefined {
        return this['new_custom_fields'];
    }
    public withCreator(creator: Creator): CreateSystemIssueRequestV4 {
        this['creator'] = creator;
        return this;
    }
    public withCustomFields(customFields: Array<ScrumCustomField>): CreateSystemIssueRequestV4 {
        this['custom_fields'] = customFields;
        return this;
    }
    public set customFields(customFields: Array<ScrumCustomField>  | undefined) {
        this['custom_fields'] = customFields;
    }
    public get customFields(): Array<ScrumCustomField> | undefined {
        return this['custom_fields'];
    }
}