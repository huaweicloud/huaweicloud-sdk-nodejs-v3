import { CreateIssueResponseV4ParentIssue } from './CreateIssueResponseV4ParentIssue';
import { CreateIssueResponseV4Tracker } from './CreateIssueResponseV4Tracker';
import { CustomField } from './CustomField';
import { IssueDetailResponseV4Env } from './IssueDetailResponseV4Env';
import { IssueItemSfV4Domain } from './IssueItemSfV4Domain';
import { IssueItemSfV4Iteration } from './IssueItemSfV4Iteration';
import { IssueItemSfV4Module } from './IssueItemSfV4Module';
import { IssueItemSfV4Priority } from './IssueItemSfV4Priority';
import { IssueItemSfV4Severity } from './IssueItemSfV4Severity';
import { IssueItemSfV4Status } from './IssueItemSfV4Status';
import { IssueProjectResponseV4 } from './IssueProjectResponseV4';
import { IssueResponseV4Order } from './IssueResponseV4Order';
import { IssueUser } from './IssueUser';
import { NewCustomField } from './NewCustomField';


export class IssueResponseV4 {
    private 'actual_work_hours'?: number;
    private 'assigned_cc_user'?: Array<IssueUser>;
    private 'assigned_user'?: IssueUser;
    private 'begin_time'?: string;
    private 'created_time'?: string;
    public creator?: IssueUser;
    private 'custom_fields'?: Array<CustomField>;
    private 'new_custom_fields'?: Array<NewCustomField>;
    public developer?: IssueUser;
    public domain?: IssueItemSfV4Domain;
    private 'done_ratio'?: number;
    private 'end_time'?: string;
    private 'expected_work_hours'?: number;
    public id?: number;
    public project?: IssueProjectResponseV4;
    public iteration?: IssueItemSfV4Iteration;
    public module?: IssueItemSfV4Module;
    public name?: string;
    private 'parent_issue'?: CreateIssueResponseV4ParentIssue;
    public priority?: IssueItemSfV4Priority;
    public order?: IssueResponseV4Order;
    public severity?: IssueItemSfV4Severity;
    public status?: IssueItemSfV4Status;
    private 'release_dev'?: string;
    private 'find_release_dev'?: string;
    public env?: IssueDetailResponseV4Env;
    public tracker?: CreateIssueResponseV4Tracker;
    private 'updated_time'?: string;
    private 'closed_time'?: string;
    public constructor() { 
    }
    public withActualWorkHours(actualWorkHours: number): IssueResponseV4 {
        this['actual_work_hours'] = actualWorkHours;
        return this;
    }
    public set actualWorkHours(actualWorkHours: number  | undefined) {
        this['actual_work_hours'] = actualWorkHours;
    }
    public get actualWorkHours(): number | undefined {
        return this['actual_work_hours'];
    }
    public withAssignedCcUser(assignedCcUser: Array<IssueUser>): IssueResponseV4 {
        this['assigned_cc_user'] = assignedCcUser;
        return this;
    }
    public set assignedCcUser(assignedCcUser: Array<IssueUser>  | undefined) {
        this['assigned_cc_user'] = assignedCcUser;
    }
    public get assignedCcUser(): Array<IssueUser> | undefined {
        return this['assigned_cc_user'];
    }
    public withAssignedUser(assignedUser: IssueUser): IssueResponseV4 {
        this['assigned_user'] = assignedUser;
        return this;
    }
    public set assignedUser(assignedUser: IssueUser  | undefined) {
        this['assigned_user'] = assignedUser;
    }
    public get assignedUser(): IssueUser | undefined {
        return this['assigned_user'];
    }
    public withBeginTime(beginTime: string): IssueResponseV4 {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withCreatedTime(createdTime: string): IssueResponseV4 {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withCreator(creator: IssueUser): IssueResponseV4 {
        this['creator'] = creator;
        return this;
    }
    public withCustomFields(customFields: Array<CustomField>): IssueResponseV4 {
        this['custom_fields'] = customFields;
        return this;
    }
    public set customFields(customFields: Array<CustomField>  | undefined) {
        this['custom_fields'] = customFields;
    }
    public get customFields(): Array<CustomField> | undefined {
        return this['custom_fields'];
    }
    public withNewCustomFields(newCustomFields: Array<NewCustomField>): IssueResponseV4 {
        this['new_custom_fields'] = newCustomFields;
        return this;
    }
    public set newCustomFields(newCustomFields: Array<NewCustomField>  | undefined) {
        this['new_custom_fields'] = newCustomFields;
    }
    public get newCustomFields(): Array<NewCustomField> | undefined {
        return this['new_custom_fields'];
    }
    public withDeveloper(developer: IssueUser): IssueResponseV4 {
        this['developer'] = developer;
        return this;
    }
    public withDomain(domain: IssueItemSfV4Domain): IssueResponseV4 {
        this['domain'] = domain;
        return this;
    }
    public withDoneRatio(doneRatio: number): IssueResponseV4 {
        this['done_ratio'] = doneRatio;
        return this;
    }
    public set doneRatio(doneRatio: number  | undefined) {
        this['done_ratio'] = doneRatio;
    }
    public get doneRatio(): number | undefined {
        return this['done_ratio'];
    }
    public withEndTime(endTime: string): IssueResponseV4 {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withExpectedWorkHours(expectedWorkHours: number): IssueResponseV4 {
        this['expected_work_hours'] = expectedWorkHours;
        return this;
    }
    public set expectedWorkHours(expectedWorkHours: number  | undefined) {
        this['expected_work_hours'] = expectedWorkHours;
    }
    public get expectedWorkHours(): number | undefined {
        return this['expected_work_hours'];
    }
    public withId(id: number): IssueResponseV4 {
        this['id'] = id;
        return this;
    }
    public withProject(project: IssueProjectResponseV4): IssueResponseV4 {
        this['project'] = project;
        return this;
    }
    public withIteration(iteration: IssueItemSfV4Iteration): IssueResponseV4 {
        this['iteration'] = iteration;
        return this;
    }
    public withModule(module: IssueItemSfV4Module): IssueResponseV4 {
        this['module'] = module;
        return this;
    }
    public withName(name: string): IssueResponseV4 {
        this['name'] = name;
        return this;
    }
    public withParentIssue(parentIssue: CreateIssueResponseV4ParentIssue): IssueResponseV4 {
        this['parent_issue'] = parentIssue;
        return this;
    }
    public set parentIssue(parentIssue: CreateIssueResponseV4ParentIssue  | undefined) {
        this['parent_issue'] = parentIssue;
    }
    public get parentIssue(): CreateIssueResponseV4ParentIssue | undefined {
        return this['parent_issue'];
    }
    public withPriority(priority: IssueItemSfV4Priority): IssueResponseV4 {
        this['priority'] = priority;
        return this;
    }
    public withOrder(order: IssueResponseV4Order): IssueResponseV4 {
        this['order'] = order;
        return this;
    }
    public withSeverity(severity: IssueItemSfV4Severity): IssueResponseV4 {
        this['severity'] = severity;
        return this;
    }
    public withStatus(status: IssueItemSfV4Status): IssueResponseV4 {
        this['status'] = status;
        return this;
    }
    public withReleaseDev(releaseDev: string): IssueResponseV4 {
        this['release_dev'] = releaseDev;
        return this;
    }
    public set releaseDev(releaseDev: string  | undefined) {
        this['release_dev'] = releaseDev;
    }
    public get releaseDev(): string | undefined {
        return this['release_dev'];
    }
    public withFindReleaseDev(findReleaseDev: string): IssueResponseV4 {
        this['find_release_dev'] = findReleaseDev;
        return this;
    }
    public set findReleaseDev(findReleaseDev: string  | undefined) {
        this['find_release_dev'] = findReleaseDev;
    }
    public get findReleaseDev(): string | undefined {
        return this['find_release_dev'];
    }
    public withEnv(env: IssueDetailResponseV4Env): IssueResponseV4 {
        this['env'] = env;
        return this;
    }
    public withTracker(tracker: CreateIssueResponseV4Tracker): IssueResponseV4 {
        this['tracker'] = tracker;
        return this;
    }
    public withUpdatedTime(updatedTime: string): IssueResponseV4 {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: string  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): string | undefined {
        return this['updated_time'];
    }
    public withClosedTime(closedTime: string): IssueResponseV4 {
        this['closed_time'] = closedTime;
        return this;
    }
    public set closedTime(closedTime: string  | undefined) {
        this['closed_time'] = closedTime;
    }
    public get closedTime(): string | undefined {
        return this['closed_time'];
    }
}