import { CreateIssueResponseV4ParentIssue } from './CreateIssueResponseV4ParentIssue';
import { CreateIssueResponseV4Tracker } from './CreateIssueResponseV4Tracker';
import { CustomField } from './CustomField';
import { IssueAccessory } from './IssueAccessory';
import { IssueDetailCustomField } from './IssueDetailCustomField';
import { IssueDetailResponseV4Env } from './IssueDetailResponseV4Env';
import { IssueDetailResponseV4StoryPoint } from './IssueDetailResponseV4StoryPoint';
import { IssueItemSfV4Domain } from './IssueItemSfV4Domain';
import { IssueItemSfV4Iteration } from './IssueItemSfV4Iteration';
import { IssueItemSfV4Module } from './IssueItemSfV4Module';
import { IssueItemSfV4Priority } from './IssueItemSfV4Priority';
import { IssueItemSfV4Severity } from './IssueItemSfV4Severity';
import { IssueItemSfV4Status } from './IssueItemSfV4Status';
import { IssueOrder } from './IssueOrder';
import { IssueProjectResponseV4 } from './IssueProjectResponseV4';
import { IssueUser } from './IssueUser';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowIssueV4Response extends SdkResponse {
    private 'actual_work_hours'?: number;
    private 'assigned_cc_user'?: Array<IssueUser>;
    private 'assigned_user'?: IssueUser;
    private 'begin_time'?: string;
    private 'created_time'?: string;
    public creator?: IssueUser;
    private 'custom_fields'?: Array<CustomField>;
    private 'new_custom_fields'?: Array<IssueDetailCustomField>;
    public developer?: IssueUser;
    public domain?: IssueItemSfV4Domain;
    private 'done_ratio'?: number;
    private 'end_time'?: string;
    private 'expected_work_hours'?: number;
    public id?: number;
    public project?: IssueProjectResponseV4;
    public iteration?: IssueItemSfV4Iteration;
    private 'story_point'?: IssueDetailResponseV4StoryPoint;
    public module?: IssueItemSfV4Module;
    public name?: string;
    private 'parent_issue'?: CreateIssueResponseV4ParentIssue;
    public priority?: IssueItemSfV4Priority;
    public severity?: IssueItemSfV4Severity;
    public status?: IssueItemSfV4Status;
    private 'release_dev'?: string;
    private 'find_release_dev'?: string;
    public env?: IssueDetailResponseV4Env;
    public tracker?: CreateIssueResponseV4Tracker;
    private 'updated_time'?: string;
    private 'closed_time'?: string;
    public description?: string;
    public order?: IssueOrder;
    public accessories?: Array<IssueAccessory>;
    public constructor() { 
        super();
    }
    public withActualWorkHours(actualWorkHours: number): ShowIssueV4Response {
        this['actual_work_hours'] = actualWorkHours;
        return this;
    }
    public set actualWorkHours(actualWorkHours: number  | undefined) {
        this['actual_work_hours'] = actualWorkHours;
    }
    public get actualWorkHours(): number | undefined {
        return this['actual_work_hours'];
    }
    public withAssignedCcUser(assignedCcUser: Array<IssueUser>): ShowIssueV4Response {
        this['assigned_cc_user'] = assignedCcUser;
        return this;
    }
    public set assignedCcUser(assignedCcUser: Array<IssueUser>  | undefined) {
        this['assigned_cc_user'] = assignedCcUser;
    }
    public get assignedCcUser(): Array<IssueUser> | undefined {
        return this['assigned_cc_user'];
    }
    public withAssignedUser(assignedUser: IssueUser): ShowIssueV4Response {
        this['assigned_user'] = assignedUser;
        return this;
    }
    public set assignedUser(assignedUser: IssueUser  | undefined) {
        this['assigned_user'] = assignedUser;
    }
    public get assignedUser(): IssueUser | undefined {
        return this['assigned_user'];
    }
    public withBeginTime(beginTime: string): ShowIssueV4Response {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withCreatedTime(createdTime: string): ShowIssueV4Response {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withCreator(creator: IssueUser): ShowIssueV4Response {
        this['creator'] = creator;
        return this;
    }
    public withCustomFields(customFields: Array<CustomField>): ShowIssueV4Response {
        this['custom_fields'] = customFields;
        return this;
    }
    public set customFields(customFields: Array<CustomField>  | undefined) {
        this['custom_fields'] = customFields;
    }
    public get customFields(): Array<CustomField> | undefined {
        return this['custom_fields'];
    }
    public withNewCustomFields(newCustomFields: Array<IssueDetailCustomField>): ShowIssueV4Response {
        this['new_custom_fields'] = newCustomFields;
        return this;
    }
    public set newCustomFields(newCustomFields: Array<IssueDetailCustomField>  | undefined) {
        this['new_custom_fields'] = newCustomFields;
    }
    public get newCustomFields(): Array<IssueDetailCustomField> | undefined {
        return this['new_custom_fields'];
    }
    public withDeveloper(developer: IssueUser): ShowIssueV4Response {
        this['developer'] = developer;
        return this;
    }
    public withDomain(domain: IssueItemSfV4Domain): ShowIssueV4Response {
        this['domain'] = domain;
        return this;
    }
    public withDoneRatio(doneRatio: number): ShowIssueV4Response {
        this['done_ratio'] = doneRatio;
        return this;
    }
    public set doneRatio(doneRatio: number  | undefined) {
        this['done_ratio'] = doneRatio;
    }
    public get doneRatio(): number | undefined {
        return this['done_ratio'];
    }
    public withEndTime(endTime: string): ShowIssueV4Response {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withExpectedWorkHours(expectedWorkHours: number): ShowIssueV4Response {
        this['expected_work_hours'] = expectedWorkHours;
        return this;
    }
    public set expectedWorkHours(expectedWorkHours: number  | undefined) {
        this['expected_work_hours'] = expectedWorkHours;
    }
    public get expectedWorkHours(): number | undefined {
        return this['expected_work_hours'];
    }
    public withId(id: number): ShowIssueV4Response {
        this['id'] = id;
        return this;
    }
    public withProject(project: IssueProjectResponseV4): ShowIssueV4Response {
        this['project'] = project;
        return this;
    }
    public withIteration(iteration: IssueItemSfV4Iteration): ShowIssueV4Response {
        this['iteration'] = iteration;
        return this;
    }
    public withStoryPoint(storyPoint: IssueDetailResponseV4StoryPoint): ShowIssueV4Response {
        this['story_point'] = storyPoint;
        return this;
    }
    public set storyPoint(storyPoint: IssueDetailResponseV4StoryPoint  | undefined) {
        this['story_point'] = storyPoint;
    }
    public get storyPoint(): IssueDetailResponseV4StoryPoint | undefined {
        return this['story_point'];
    }
    public withModule(module: IssueItemSfV4Module): ShowIssueV4Response {
        this['module'] = module;
        return this;
    }
    public withName(name: string): ShowIssueV4Response {
        this['name'] = name;
        return this;
    }
    public withParentIssue(parentIssue: CreateIssueResponseV4ParentIssue): ShowIssueV4Response {
        this['parent_issue'] = parentIssue;
        return this;
    }
    public set parentIssue(parentIssue: CreateIssueResponseV4ParentIssue  | undefined) {
        this['parent_issue'] = parentIssue;
    }
    public get parentIssue(): CreateIssueResponseV4ParentIssue | undefined {
        return this['parent_issue'];
    }
    public withPriority(priority: IssueItemSfV4Priority): ShowIssueV4Response {
        this['priority'] = priority;
        return this;
    }
    public withSeverity(severity: IssueItemSfV4Severity): ShowIssueV4Response {
        this['severity'] = severity;
        return this;
    }
    public withStatus(status: IssueItemSfV4Status): ShowIssueV4Response {
        this['status'] = status;
        return this;
    }
    public withReleaseDev(releaseDev: string): ShowIssueV4Response {
        this['release_dev'] = releaseDev;
        return this;
    }
    public set releaseDev(releaseDev: string  | undefined) {
        this['release_dev'] = releaseDev;
    }
    public get releaseDev(): string | undefined {
        return this['release_dev'];
    }
    public withFindReleaseDev(findReleaseDev: string): ShowIssueV4Response {
        this['find_release_dev'] = findReleaseDev;
        return this;
    }
    public set findReleaseDev(findReleaseDev: string  | undefined) {
        this['find_release_dev'] = findReleaseDev;
    }
    public get findReleaseDev(): string | undefined {
        return this['find_release_dev'];
    }
    public withEnv(env: IssueDetailResponseV4Env): ShowIssueV4Response {
        this['env'] = env;
        return this;
    }
    public withTracker(tracker: CreateIssueResponseV4Tracker): ShowIssueV4Response {
        this['tracker'] = tracker;
        return this;
    }
    public withUpdatedTime(updatedTime: string): ShowIssueV4Response {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: string  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): string | undefined {
        return this['updated_time'];
    }
    public withClosedTime(closedTime: string): ShowIssueV4Response {
        this['closed_time'] = closedTime;
        return this;
    }
    public set closedTime(closedTime: string  | undefined) {
        this['closed_time'] = closedTime;
    }
    public get closedTime(): string | undefined {
        return this['closed_time'];
    }
    public withDescription(description: string): ShowIssueV4Response {
        this['description'] = description;
        return this;
    }
    public withOrder(order: IssueOrder): ShowIssueV4Response {
        this['order'] = order;
        return this;
    }
    public withAccessories(accessories: Array<IssueAccessory>): ShowIssueV4Response {
        this['accessories'] = accessories;
        return this;
    }
}