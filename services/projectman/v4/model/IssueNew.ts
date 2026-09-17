import { IssueNewAssignedTo } from './IssueNewAssignedTo';
import { IssueNewAuthor } from './IssueNewAuthor';
import { Priority } from './Priority';
import { Project } from './Project';
import { Severity } from './Severity';
import { Status } from './Status';
import { StatusAttributeVO } from './StatusAttributeVO';
import { StoryPoint } from './StoryPoint';
import { Tracker } from './Tracker';


export class IssueNew {
    private 'updated_on'?: string;
    private 'story_point'?: StoryPoint;
    public subject?: string;
    public project?: Project;
    public isParent?: boolean;
    private 'done_ratio'?: number;
    public findReleaseDev?: string;
    public tracker?: Tracker;
    public id?: number;
    private 'start_date'?: string;
    private 'assigned_to'?: IssueNewAssignedTo;
    private 'status_attribute'?: StatusAttributeVO;
    public severity?: Severity;
    public releaseDev?: string;
    public author?: IssueNewAuthor;
    public module?: object;
    private 'due_date'?: string;
    private 'expected_work_hours'?: number;
    public priority?: Priority;
    private 'actual_work_hours'?: number;
    private 'is_watcher'?: boolean;
    public deleted?: boolean;
    private 'fixed_version'?: object;
    private 'is_archived'?: boolean;
    private 'created_on'?: string;
    public domain?: object;
    public developer?: object;
    public closeder?: object;
    public position?: string;
    private 'closed_flag'?: number;
    private 'assigned_cc_user'?: string;
    private 'custom_value_new'?: object;
    public status?: Status;
    public constructor() { 
    }
    public withUpdatedOn(updatedOn: string): IssueNew {
        this['updated_on'] = updatedOn;
        return this;
    }
    public set updatedOn(updatedOn: string  | undefined) {
        this['updated_on'] = updatedOn;
    }
    public get updatedOn(): string | undefined {
        return this['updated_on'];
    }
    public withStoryPoint(storyPoint: StoryPoint): IssueNew {
        this['story_point'] = storyPoint;
        return this;
    }
    public set storyPoint(storyPoint: StoryPoint  | undefined) {
        this['story_point'] = storyPoint;
    }
    public get storyPoint(): StoryPoint | undefined {
        return this['story_point'];
    }
    public withSubject(subject: string): IssueNew {
        this['subject'] = subject;
        return this;
    }
    public withProject(project: Project): IssueNew {
        this['project'] = project;
        return this;
    }
    public withIsParent(isParent: boolean): IssueNew {
        this['isParent'] = isParent;
        return this;
    }
    public withDoneRatio(doneRatio: number): IssueNew {
        this['done_ratio'] = doneRatio;
        return this;
    }
    public set doneRatio(doneRatio: number  | undefined) {
        this['done_ratio'] = doneRatio;
    }
    public get doneRatio(): number | undefined {
        return this['done_ratio'];
    }
    public withFindReleaseDev(findReleaseDev: string): IssueNew {
        this['findReleaseDev'] = findReleaseDev;
        return this;
    }
    public withTracker(tracker: Tracker): IssueNew {
        this['tracker'] = tracker;
        return this;
    }
    public withId(id: number): IssueNew {
        this['id'] = id;
        return this;
    }
    public withStartDate(startDate: string): IssueNew {
        this['start_date'] = startDate;
        return this;
    }
    public set startDate(startDate: string  | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate(): string | undefined {
        return this['start_date'];
    }
    public withAssignedTo(assignedTo: IssueNewAssignedTo): IssueNew {
        this['assigned_to'] = assignedTo;
        return this;
    }
    public set assignedTo(assignedTo: IssueNewAssignedTo  | undefined) {
        this['assigned_to'] = assignedTo;
    }
    public get assignedTo(): IssueNewAssignedTo | undefined {
        return this['assigned_to'];
    }
    public withStatusAttribute(statusAttribute: StatusAttributeVO): IssueNew {
        this['status_attribute'] = statusAttribute;
        return this;
    }
    public set statusAttribute(statusAttribute: StatusAttributeVO  | undefined) {
        this['status_attribute'] = statusAttribute;
    }
    public get statusAttribute(): StatusAttributeVO | undefined {
        return this['status_attribute'];
    }
    public withSeverity(severity: Severity): IssueNew {
        this['severity'] = severity;
        return this;
    }
    public withReleaseDev(releaseDev: string): IssueNew {
        this['releaseDev'] = releaseDev;
        return this;
    }
    public withAuthor(author: IssueNewAuthor): IssueNew {
        this['author'] = author;
        return this;
    }
    public withModule(module: object): IssueNew {
        this['module'] = module;
        return this;
    }
    public withDueDate(dueDate: string): IssueNew {
        this['due_date'] = dueDate;
        return this;
    }
    public set dueDate(dueDate: string  | undefined) {
        this['due_date'] = dueDate;
    }
    public get dueDate(): string | undefined {
        return this['due_date'];
    }
    public withExpectedWorkHours(expectedWorkHours: number): IssueNew {
        this['expected_work_hours'] = expectedWorkHours;
        return this;
    }
    public set expectedWorkHours(expectedWorkHours: number  | undefined) {
        this['expected_work_hours'] = expectedWorkHours;
    }
    public get expectedWorkHours(): number | undefined {
        return this['expected_work_hours'];
    }
    public withPriority(priority: Priority): IssueNew {
        this['priority'] = priority;
        return this;
    }
    public withActualWorkHours(actualWorkHours: number): IssueNew {
        this['actual_work_hours'] = actualWorkHours;
        return this;
    }
    public set actualWorkHours(actualWorkHours: number  | undefined) {
        this['actual_work_hours'] = actualWorkHours;
    }
    public get actualWorkHours(): number | undefined {
        return this['actual_work_hours'];
    }
    public withIsWatcher(isWatcher: boolean): IssueNew {
        this['is_watcher'] = isWatcher;
        return this;
    }
    public set isWatcher(isWatcher: boolean  | undefined) {
        this['is_watcher'] = isWatcher;
    }
    public get isWatcher(): boolean | undefined {
        return this['is_watcher'];
    }
    public withDeleted(deleted: boolean): IssueNew {
        this['deleted'] = deleted;
        return this;
    }
    public withFixedVersion(fixedVersion: object): IssueNew {
        this['fixed_version'] = fixedVersion;
        return this;
    }
    public set fixedVersion(fixedVersion: object  | undefined) {
        this['fixed_version'] = fixedVersion;
    }
    public get fixedVersion(): object | undefined {
        return this['fixed_version'];
    }
    public withIsArchived(isArchived: boolean): IssueNew {
        this['is_archived'] = isArchived;
        return this;
    }
    public set isArchived(isArchived: boolean  | undefined) {
        this['is_archived'] = isArchived;
    }
    public get isArchived(): boolean | undefined {
        return this['is_archived'];
    }
    public withCreatedOn(createdOn: string): IssueNew {
        this['created_on'] = createdOn;
        return this;
    }
    public set createdOn(createdOn: string  | undefined) {
        this['created_on'] = createdOn;
    }
    public get createdOn(): string | undefined {
        return this['created_on'];
    }
    public withDomain(domain: object): IssueNew {
        this['domain'] = domain;
        return this;
    }
    public withDeveloper(developer: object): IssueNew {
        this['developer'] = developer;
        return this;
    }
    public withCloseder(closeder: object): IssueNew {
        this['closeder'] = closeder;
        return this;
    }
    public withPosition(position: string): IssueNew {
        this['position'] = position;
        return this;
    }
    public withClosedFlag(closedFlag: number): IssueNew {
        this['closed_flag'] = closedFlag;
        return this;
    }
    public set closedFlag(closedFlag: number  | undefined) {
        this['closed_flag'] = closedFlag;
    }
    public get closedFlag(): number | undefined {
        return this['closed_flag'];
    }
    public withAssignedCcUser(assignedCcUser: string): IssueNew {
        this['assigned_cc_user'] = assignedCcUser;
        return this;
    }
    public set assignedCcUser(assignedCcUser: string  | undefined) {
        this['assigned_cc_user'] = assignedCcUser;
    }
    public get assignedCcUser(): string | undefined {
        return this['assigned_cc_user'];
    }
    public withCustomValueNew(customValueNew: object): IssueNew {
        this['custom_value_new'] = customValueNew;
        return this;
    }
    public set customValueNew(customValueNew: object  | undefined) {
        this['custom_value_new'] = customValueNew;
    }
    public get customValueNew(): object | undefined {
        return this['custom_value_new'];
    }
    public withStatus(status: Status): IssueNew {
        this['status'] = status;
        return this;
    }
}