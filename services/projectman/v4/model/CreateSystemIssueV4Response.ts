import { CreateIssueResponseV4Domain } from './CreateIssueResponseV4Domain';
import { CreateIssueResponseV4ParentIssue } from './CreateIssueResponseV4ParentIssue';
import { CreateIssueResponseV4Tracker } from './CreateIssueResponseV4Tracker';
import { CustomField } from './CustomField';
import { IssueItemSfV4Iteration } from './IssueItemSfV4Iteration';
import { IssueItemSfV4Module } from './IssueItemSfV4Module';
import { IssueItemSfV4Priority } from './IssueItemSfV4Priority';
import { IssueItemSfV4Severity } from './IssueItemSfV4Severity';
import { IssueItemSfV4Status } from './IssueItemSfV4Status';
import { IssueProjectResponseV4 } from './IssueProjectResponseV4';
import { IssueUser } from './IssueUser';
import { NewCustomField } from './NewCustomField';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSystemIssueV4Response extends SdkResponse {
    private 'actual_work_hours'?: number;
    private 'assigned_cc_user'?: Array<IssueUser>;
    private 'assigned_user'?: IssueUser;
    private 'begin_time'?: string;
    public creator?: IssueUser;
    private 'custom_fields'?: Array<CustomField>;
    private 'new_custom_fields'?: Array<NewCustomField>;
    public developer?: IssueUser;
    public domain?: CreateIssueResponseV4Domain;
    private 'done_ratio'?: number;
    private 'end_time'?: string;
    private 'expected_work_hours'?: number;
    public id?: number;
    public project?: IssueProjectResponseV4;
    public iteration?: IssueItemSfV4Iteration;
    public module?: IssueItemSfV4Module;
    private 'parent_issue'?: CreateIssueResponseV4ParentIssue;
    public priority?: IssueItemSfV4Priority;
    public severity?: IssueItemSfV4Severity;
    public status?: IssueItemSfV4Status;
    public tracker?: CreateIssueResponseV4Tracker;
    public constructor() { 
        super();
    }
    public withActualWorkHours(actualWorkHours: number): CreateSystemIssueV4Response {
        this['actual_work_hours'] = actualWorkHours;
        return this;
    }
    public set actualWorkHours(actualWorkHours: number  | undefined) {
        this['actual_work_hours'] = actualWorkHours;
    }
    public get actualWorkHours(): number | undefined {
        return this['actual_work_hours'];
    }
    public withAssignedCcUser(assignedCcUser: Array<IssueUser>): CreateSystemIssueV4Response {
        this['assigned_cc_user'] = assignedCcUser;
        return this;
    }
    public set assignedCcUser(assignedCcUser: Array<IssueUser>  | undefined) {
        this['assigned_cc_user'] = assignedCcUser;
    }
    public get assignedCcUser(): Array<IssueUser> | undefined {
        return this['assigned_cc_user'];
    }
    public withAssignedUser(assignedUser: IssueUser): CreateSystemIssueV4Response {
        this['assigned_user'] = assignedUser;
        return this;
    }
    public set assignedUser(assignedUser: IssueUser  | undefined) {
        this['assigned_user'] = assignedUser;
    }
    public get assignedUser(): IssueUser | undefined {
        return this['assigned_user'];
    }
    public withBeginTime(beginTime: string): CreateSystemIssueV4Response {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withCreator(creator: IssueUser): CreateSystemIssueV4Response {
        this['creator'] = creator;
        return this;
    }
    public withCustomFields(customFields: Array<CustomField>): CreateSystemIssueV4Response {
        this['custom_fields'] = customFields;
        return this;
    }
    public set customFields(customFields: Array<CustomField>  | undefined) {
        this['custom_fields'] = customFields;
    }
    public get customFields(): Array<CustomField> | undefined {
        return this['custom_fields'];
    }
    public withNewCustomFields(newCustomFields: Array<NewCustomField>): CreateSystemIssueV4Response {
        this['new_custom_fields'] = newCustomFields;
        return this;
    }
    public set newCustomFields(newCustomFields: Array<NewCustomField>  | undefined) {
        this['new_custom_fields'] = newCustomFields;
    }
    public get newCustomFields(): Array<NewCustomField> | undefined {
        return this['new_custom_fields'];
    }
    public withDeveloper(developer: IssueUser): CreateSystemIssueV4Response {
        this['developer'] = developer;
        return this;
    }
    public withDomain(domain: CreateIssueResponseV4Domain): CreateSystemIssueV4Response {
        this['domain'] = domain;
        return this;
    }
    public withDoneRatio(doneRatio: number): CreateSystemIssueV4Response {
        this['done_ratio'] = doneRatio;
        return this;
    }
    public set doneRatio(doneRatio: number  | undefined) {
        this['done_ratio'] = doneRatio;
    }
    public get doneRatio(): number | undefined {
        return this['done_ratio'];
    }
    public withEndTime(endTime: string): CreateSystemIssueV4Response {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withExpectedWorkHours(expectedWorkHours: number): CreateSystemIssueV4Response {
        this['expected_work_hours'] = expectedWorkHours;
        return this;
    }
    public set expectedWorkHours(expectedWorkHours: number  | undefined) {
        this['expected_work_hours'] = expectedWorkHours;
    }
    public get expectedWorkHours(): number | undefined {
        return this['expected_work_hours'];
    }
    public withId(id: number): CreateSystemIssueV4Response {
        this['id'] = id;
        return this;
    }
    public withProject(project: IssueProjectResponseV4): CreateSystemIssueV4Response {
        this['project'] = project;
        return this;
    }
    public withIteration(iteration: IssueItemSfV4Iteration): CreateSystemIssueV4Response {
        this['iteration'] = iteration;
        return this;
    }
    public withModule(module: IssueItemSfV4Module): CreateSystemIssueV4Response {
        this['module'] = module;
        return this;
    }
    public withParentIssue(parentIssue: CreateIssueResponseV4ParentIssue): CreateSystemIssueV4Response {
        this['parent_issue'] = parentIssue;
        return this;
    }
    public set parentIssue(parentIssue: CreateIssueResponseV4ParentIssue  | undefined) {
        this['parent_issue'] = parentIssue;
    }
    public get parentIssue(): CreateIssueResponseV4ParentIssue | undefined {
        return this['parent_issue'];
    }
    public withPriority(priority: IssueItemSfV4Priority): CreateSystemIssueV4Response {
        this['priority'] = priority;
        return this;
    }
    public withSeverity(severity: IssueItemSfV4Severity): CreateSystemIssueV4Response {
        this['severity'] = severity;
        return this;
    }
    public withStatus(status: IssueItemSfV4Status): CreateSystemIssueV4Response {
        this['status'] = status;
        return this;
    }
    public withTracker(tracker: CreateIssueResponseV4Tracker): CreateSystemIssueV4Response {
        this['tracker'] = tracker;
        return this;
    }
}