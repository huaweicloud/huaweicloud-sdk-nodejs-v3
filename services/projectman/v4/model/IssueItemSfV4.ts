import { CustomFeildRecord } from './CustomFeildRecord';
import { IssueItemSfV4Domain } from './IssueItemSfV4Domain';
import { IssueItemSfV4Iteration } from './IssueItemSfV4Iteration';
import { IssueItemSfV4Module } from './IssueItemSfV4Module';
import { IssueItemSfV4Priority } from './IssueItemSfV4Priority';
import { IssueItemSfV4Severity } from './IssueItemSfV4Severity';
import { IssueItemSfV4Status } from './IssueItemSfV4Status';
import { IssueItemSfV4StoryPoint } from './IssueItemSfV4StoryPoint';
import { IssueItemSfV4Tracker } from './IssueItemSfV4Tracker';
import { IssueUser } from './IssueUser';


export class IssueItemSfV4 {
    private 'actual_work_hours'?: number;
    private 'assigned_user'?: IssueUser;
    public author?: IssueUser;
    private 'begin_time'?: number;
    private 'closed_time'?: number;
    private 'created_time'?: number;
    private 'custom_feilds'?: Array<CustomFeildRecord>;
    public developer?: IssueUser;
    private 'discover_version'?: string;
    private 'end_time'?: number;
    private 'done_ratio'?: number;
    private 'expected_work_hours'?: number;
    public order?: number;
    private 'parent_issue_id'?: number;
    private 'release_version'?: string;
    private 'root_issue_id'?: number;
    private 'story_point'?: IssueItemSfV4StoryPoint;
    public domain?: IssueItemSfV4Domain;
    public iteration?: IssueItemSfV4Iteration;
    public module?: IssueItemSfV4Module;
    public priority?: IssueItemSfV4Priority;
    public severity?: IssueItemSfV4Severity;
    public status?: IssueItemSfV4Status;
    public tracker?: IssueItemSfV4Tracker;
    public subject?: string;
    private 'updated_time'?: number;
    public constructor() { 
    }
    public withActualWorkHours(actualWorkHours: number): IssueItemSfV4 {
        this['actual_work_hours'] = actualWorkHours;
        return this;
    }
    public set actualWorkHours(actualWorkHours: number  | undefined) {
        this['actual_work_hours'] = actualWorkHours;
    }
    public get actualWorkHours(): number | undefined {
        return this['actual_work_hours'];
    }
    public withAssignedUser(assignedUser: IssueUser): IssueItemSfV4 {
        this['assigned_user'] = assignedUser;
        return this;
    }
    public set assignedUser(assignedUser: IssueUser  | undefined) {
        this['assigned_user'] = assignedUser;
    }
    public get assignedUser(): IssueUser | undefined {
        return this['assigned_user'];
    }
    public withAuthor(author: IssueUser): IssueItemSfV4 {
        this['author'] = author;
        return this;
    }
    public withBeginTime(beginTime: number): IssueItemSfV4 {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: number  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): number | undefined {
        return this['begin_time'];
    }
    public withClosedTime(closedTime: number): IssueItemSfV4 {
        this['closed_time'] = closedTime;
        return this;
    }
    public set closedTime(closedTime: number  | undefined) {
        this['closed_time'] = closedTime;
    }
    public get closedTime(): number | undefined {
        return this['closed_time'];
    }
    public withCreatedTime(createdTime: number): IssueItemSfV4 {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: number  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): number | undefined {
        return this['created_time'];
    }
    public withCustomFeilds(customFeilds: Array<CustomFeildRecord>): IssueItemSfV4 {
        this['custom_feilds'] = customFeilds;
        return this;
    }
    public set customFeilds(customFeilds: Array<CustomFeildRecord>  | undefined) {
        this['custom_feilds'] = customFeilds;
    }
    public get customFeilds(): Array<CustomFeildRecord> | undefined {
        return this['custom_feilds'];
    }
    public withDeveloper(developer: IssueUser): IssueItemSfV4 {
        this['developer'] = developer;
        return this;
    }
    public withDiscoverVersion(discoverVersion: string): IssueItemSfV4 {
        this['discover_version'] = discoverVersion;
        return this;
    }
    public set discoverVersion(discoverVersion: string  | undefined) {
        this['discover_version'] = discoverVersion;
    }
    public get discoverVersion(): string | undefined {
        return this['discover_version'];
    }
    public withEndTime(endTime: number): IssueItemSfV4 {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withDoneRatio(doneRatio: number): IssueItemSfV4 {
        this['done_ratio'] = doneRatio;
        return this;
    }
    public set doneRatio(doneRatio: number  | undefined) {
        this['done_ratio'] = doneRatio;
    }
    public get doneRatio(): number | undefined {
        return this['done_ratio'];
    }
    public withExpectedWorkHours(expectedWorkHours: number): IssueItemSfV4 {
        this['expected_work_hours'] = expectedWorkHours;
        return this;
    }
    public set expectedWorkHours(expectedWorkHours: number  | undefined) {
        this['expected_work_hours'] = expectedWorkHours;
    }
    public get expectedWorkHours(): number | undefined {
        return this['expected_work_hours'];
    }
    public withOrder(order: number): IssueItemSfV4 {
        this['order'] = order;
        return this;
    }
    public withParentIssueId(parentIssueId: number): IssueItemSfV4 {
        this['parent_issue_id'] = parentIssueId;
        return this;
    }
    public set parentIssueId(parentIssueId: number  | undefined) {
        this['parent_issue_id'] = parentIssueId;
    }
    public get parentIssueId(): number | undefined {
        return this['parent_issue_id'];
    }
    public withReleaseVersion(releaseVersion: string): IssueItemSfV4 {
        this['release_version'] = releaseVersion;
        return this;
    }
    public set releaseVersion(releaseVersion: string  | undefined) {
        this['release_version'] = releaseVersion;
    }
    public get releaseVersion(): string | undefined {
        return this['release_version'];
    }
    public withRootIssueId(rootIssueId: number): IssueItemSfV4 {
        this['root_issue_id'] = rootIssueId;
        return this;
    }
    public set rootIssueId(rootIssueId: number  | undefined) {
        this['root_issue_id'] = rootIssueId;
    }
    public get rootIssueId(): number | undefined {
        return this['root_issue_id'];
    }
    public withStoryPoint(storyPoint: IssueItemSfV4StoryPoint): IssueItemSfV4 {
        this['story_point'] = storyPoint;
        return this;
    }
    public set storyPoint(storyPoint: IssueItemSfV4StoryPoint  | undefined) {
        this['story_point'] = storyPoint;
    }
    public get storyPoint(): IssueItemSfV4StoryPoint | undefined {
        return this['story_point'];
    }
    public withDomain(domain: IssueItemSfV4Domain): IssueItemSfV4 {
        this['domain'] = domain;
        return this;
    }
    public withIteration(iteration: IssueItemSfV4Iteration): IssueItemSfV4 {
        this['iteration'] = iteration;
        return this;
    }
    public withModule(module: IssueItemSfV4Module): IssueItemSfV4 {
        this['module'] = module;
        return this;
    }
    public withPriority(priority: IssueItemSfV4Priority): IssueItemSfV4 {
        this['priority'] = priority;
        return this;
    }
    public withSeverity(severity: IssueItemSfV4Severity): IssueItemSfV4 {
        this['severity'] = severity;
        return this;
    }
    public withStatus(status: IssueItemSfV4Status): IssueItemSfV4 {
        this['status'] = status;
        return this;
    }
    public withTracker(tracker: IssueItemSfV4Tracker): IssueItemSfV4 {
        this['tracker'] = tracker;
        return this;
    }
    public withSubject(subject: string): IssueItemSfV4 {
        this['subject'] = subject;
        return this;
    }
    public withUpdatedTime(updatedTime: number): IssueItemSfV4 {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: number  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): number | undefined {
        return this['updated_time'];
    }
}