import { CustomFieldV2 } from './CustomFieldV2';
import { IssueAccessoryV2 } from './IssueAccessoryV2';
import { IssueDetailCustomFieldV2 } from './IssueDetailCustomFieldV2';
import { IssueDetailResponseV2Domain } from './IssueDetailResponseV2Domain';
import { IssueDetailResponseV2Env } from './IssueDetailResponseV2Env';
import { IssueDetailResponseV2Iteration } from './IssueDetailResponseV2Iteration';
import { IssueDetailResponseV2Module } from './IssueDetailResponseV2Module';
import { IssueDetailResponseV2ParentIssue } from './IssueDetailResponseV2ParentIssue';
import { IssueDetailResponseV2Priority } from './IssueDetailResponseV2Priority';
import { IssueDetailResponseV2Severity } from './IssueDetailResponseV2Severity';
import { IssueDetailResponseV2Status } from './IssueDetailResponseV2Status';
import { IssueDetailResponseV2StoryPoint } from './IssueDetailResponseV2StoryPoint';
import { IssueDetailResponseV2Tracker } from './IssueDetailResponseV2Tracker';
import { ProjectVO } from './ProjectVO';
import { UserVO } from './UserVO';


export class IssueDetailResponseV2 {
    private 'actual_work_hours'?: number;
    private 'assigned_cc_user'?: Array<UserVO>;
    private 'assigned_to'?: UserVO;
    private 'start_date'?: string;
    private 'created_on'?: string;
    public author?: UserVO;
    private 'custom_fields'?: Array<CustomFieldV2>;
    private 'custom_value_new'?: IssueDetailCustomFieldV2;
    public developer?: UserVO;
    public domain?: IssueDetailResponseV2Domain;
    private 'done_ratio'?: number;
    private 'end_time'?: string;
    private 'expected_work_hours'?: number;
    public id?: number;
    public project?: ProjectVO;
    public iteration?: IssueDetailResponseV2Iteration;
    private 'story_point'?: IssueDetailResponseV2StoryPoint;
    public module?: IssueDetailResponseV2Module;
    public subject?: string;
    private 'parent_issue'?: IssueDetailResponseV2ParentIssue;
    public priority?: IssueDetailResponseV2Priority;
    public severity?: IssueDetailResponseV2Severity;
    public status?: IssueDetailResponseV2Status;
    private 'release_dev'?: string;
    private 'find_release_dev'?: string;
    public env?: IssueDetailResponseV2Env;
    public tracker?: IssueDetailResponseV2Tracker;
    private 'updated_on'?: string;
    private 'closed_time'?: string;
    public description?: string;
    private 'accessories_list'?: Array<IssueAccessoryV2>;
    private 'inner_text'?: string;
    public constructor() { 
    }
    public withActualWorkHours(actualWorkHours: number): IssueDetailResponseV2 {
        this['actual_work_hours'] = actualWorkHours;
        return this;
    }
    public set actualWorkHours(actualWorkHours: number  | undefined) {
        this['actual_work_hours'] = actualWorkHours;
    }
    public get actualWorkHours(): number | undefined {
        return this['actual_work_hours'];
    }
    public withAssignedCcUser(assignedCcUser: Array<UserVO>): IssueDetailResponseV2 {
        this['assigned_cc_user'] = assignedCcUser;
        return this;
    }
    public set assignedCcUser(assignedCcUser: Array<UserVO>  | undefined) {
        this['assigned_cc_user'] = assignedCcUser;
    }
    public get assignedCcUser(): Array<UserVO> | undefined {
        return this['assigned_cc_user'];
    }
    public withAssignedTo(assignedTo: UserVO): IssueDetailResponseV2 {
        this['assigned_to'] = assignedTo;
        return this;
    }
    public set assignedTo(assignedTo: UserVO  | undefined) {
        this['assigned_to'] = assignedTo;
    }
    public get assignedTo(): UserVO | undefined {
        return this['assigned_to'];
    }
    public withStartDate(startDate: string): IssueDetailResponseV2 {
        this['start_date'] = startDate;
        return this;
    }
    public set startDate(startDate: string  | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate(): string | undefined {
        return this['start_date'];
    }
    public withCreatedOn(createdOn: string): IssueDetailResponseV2 {
        this['created_on'] = createdOn;
        return this;
    }
    public set createdOn(createdOn: string  | undefined) {
        this['created_on'] = createdOn;
    }
    public get createdOn(): string | undefined {
        return this['created_on'];
    }
    public withAuthor(author: UserVO): IssueDetailResponseV2 {
        this['author'] = author;
        return this;
    }
    public withCustomFields(customFields: Array<CustomFieldV2>): IssueDetailResponseV2 {
        this['custom_fields'] = customFields;
        return this;
    }
    public set customFields(customFields: Array<CustomFieldV2>  | undefined) {
        this['custom_fields'] = customFields;
    }
    public get customFields(): Array<CustomFieldV2> | undefined {
        return this['custom_fields'];
    }
    public withCustomValueNew(customValueNew: IssueDetailCustomFieldV2): IssueDetailResponseV2 {
        this['custom_value_new'] = customValueNew;
        return this;
    }
    public set customValueNew(customValueNew: IssueDetailCustomFieldV2  | undefined) {
        this['custom_value_new'] = customValueNew;
    }
    public get customValueNew(): IssueDetailCustomFieldV2 | undefined {
        return this['custom_value_new'];
    }
    public withDeveloper(developer: UserVO): IssueDetailResponseV2 {
        this['developer'] = developer;
        return this;
    }
    public withDomain(domain: IssueDetailResponseV2Domain): IssueDetailResponseV2 {
        this['domain'] = domain;
        return this;
    }
    public withDoneRatio(doneRatio: number): IssueDetailResponseV2 {
        this['done_ratio'] = doneRatio;
        return this;
    }
    public set doneRatio(doneRatio: number  | undefined) {
        this['done_ratio'] = doneRatio;
    }
    public get doneRatio(): number | undefined {
        return this['done_ratio'];
    }
    public withEndTime(endTime: string): IssueDetailResponseV2 {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withExpectedWorkHours(expectedWorkHours: number): IssueDetailResponseV2 {
        this['expected_work_hours'] = expectedWorkHours;
        return this;
    }
    public set expectedWorkHours(expectedWorkHours: number  | undefined) {
        this['expected_work_hours'] = expectedWorkHours;
    }
    public get expectedWorkHours(): number | undefined {
        return this['expected_work_hours'];
    }
    public withId(id: number): IssueDetailResponseV2 {
        this['id'] = id;
        return this;
    }
    public withProject(project: ProjectVO): IssueDetailResponseV2 {
        this['project'] = project;
        return this;
    }
    public withIteration(iteration: IssueDetailResponseV2Iteration): IssueDetailResponseV2 {
        this['iteration'] = iteration;
        return this;
    }
    public withStoryPoint(storyPoint: IssueDetailResponseV2StoryPoint): IssueDetailResponseV2 {
        this['story_point'] = storyPoint;
        return this;
    }
    public set storyPoint(storyPoint: IssueDetailResponseV2StoryPoint  | undefined) {
        this['story_point'] = storyPoint;
    }
    public get storyPoint(): IssueDetailResponseV2StoryPoint | undefined {
        return this['story_point'];
    }
    public withModule(module: IssueDetailResponseV2Module): IssueDetailResponseV2 {
        this['module'] = module;
        return this;
    }
    public withSubject(subject: string): IssueDetailResponseV2 {
        this['subject'] = subject;
        return this;
    }
    public withParentIssue(parentIssue: IssueDetailResponseV2ParentIssue): IssueDetailResponseV2 {
        this['parent_issue'] = parentIssue;
        return this;
    }
    public set parentIssue(parentIssue: IssueDetailResponseV2ParentIssue  | undefined) {
        this['parent_issue'] = parentIssue;
    }
    public get parentIssue(): IssueDetailResponseV2ParentIssue | undefined {
        return this['parent_issue'];
    }
    public withPriority(priority: IssueDetailResponseV2Priority): IssueDetailResponseV2 {
        this['priority'] = priority;
        return this;
    }
    public withSeverity(severity: IssueDetailResponseV2Severity): IssueDetailResponseV2 {
        this['severity'] = severity;
        return this;
    }
    public withStatus(status: IssueDetailResponseV2Status): IssueDetailResponseV2 {
        this['status'] = status;
        return this;
    }
    public withReleaseDev(releaseDev: string): IssueDetailResponseV2 {
        this['release_dev'] = releaseDev;
        return this;
    }
    public set releaseDev(releaseDev: string  | undefined) {
        this['release_dev'] = releaseDev;
    }
    public get releaseDev(): string | undefined {
        return this['release_dev'];
    }
    public withFindReleaseDev(findReleaseDev: string): IssueDetailResponseV2 {
        this['find_release_dev'] = findReleaseDev;
        return this;
    }
    public set findReleaseDev(findReleaseDev: string  | undefined) {
        this['find_release_dev'] = findReleaseDev;
    }
    public get findReleaseDev(): string | undefined {
        return this['find_release_dev'];
    }
    public withEnv(env: IssueDetailResponseV2Env): IssueDetailResponseV2 {
        this['env'] = env;
        return this;
    }
    public withTracker(tracker: IssueDetailResponseV2Tracker): IssueDetailResponseV2 {
        this['tracker'] = tracker;
        return this;
    }
    public withUpdatedOn(updatedOn: string): IssueDetailResponseV2 {
        this['updated_on'] = updatedOn;
        return this;
    }
    public set updatedOn(updatedOn: string  | undefined) {
        this['updated_on'] = updatedOn;
    }
    public get updatedOn(): string | undefined {
        return this['updated_on'];
    }
    public withClosedTime(closedTime: string): IssueDetailResponseV2 {
        this['closed_time'] = closedTime;
        return this;
    }
    public set closedTime(closedTime: string  | undefined) {
        this['closed_time'] = closedTime;
    }
    public get closedTime(): string | undefined {
        return this['closed_time'];
    }
    public withDescription(description: string): IssueDetailResponseV2 {
        this['description'] = description;
        return this;
    }
    public withAccessoriesList(accessoriesList: Array<IssueAccessoryV2>): IssueDetailResponseV2 {
        this['accessories_list'] = accessoriesList;
        return this;
    }
    public set accessoriesList(accessoriesList: Array<IssueAccessoryV2>  | undefined) {
        this['accessories_list'] = accessoriesList;
    }
    public get accessoriesList(): Array<IssueAccessoryV2> | undefined {
        return this['accessories_list'];
    }
    public withInnerText(innerText: string): IssueDetailResponseV2 {
        this['inner_text'] = innerText;
        return this;
    }
    public set innerText(innerText: string  | undefined) {
        this['inner_text'] = innerText;
    }
    public get innerText(): string | undefined {
        return this['inner_text'];
    }
}