import { SimpleUserIn } from './SimpleUserIn';
import { WorkTableIssuseListResponseBodyDomain } from './WorkTableIssuseListResponseBodyDomain';
import { WorkTableIssuseListResponseBodyModule } from './WorkTableIssuseListResponseBodyModule';
import { WorkTableIssuseListResponseBodyOrder } from './WorkTableIssuseListResponseBodyOrder';
import { WorkTableIssuseListResponseBodyParentIssue } from './WorkTableIssuseListResponseBodyParentIssue';
import { WorkTableIssuseListResponseBodyPriority } from './WorkTableIssuseListResponseBodyPriority';
import { WorkTableIssuseListResponseBodyProject } from './WorkTableIssuseListResponseBodyProject';
import { WorkTableIssuseListResponseBodySeverity } from './WorkTableIssuseListResponseBodySeverity';
import { WorkTableIssuseListResponseBodyStatus } from './WorkTableIssuseListResponseBodyStatus';
import { WorkTableIssuseListResponseBodyTracker } from './WorkTableIssuseListResponseBodyTracker';


export class WorkTableIssuseListResponseBodyIssueList {
    public id?: number;
    public subject?: string;
    private 'parent_issue_id'?: number;
    private 'parent_issue'?: WorkTableIssuseListResponseBodyParentIssue;
    public project?: WorkTableIssuseListResponseBodyProject;
    private 'release_dev'?: string;
    private 'find_release_dev'?: string;
    private 'done_ratio'?: number;
    private 'expected_work_hours'?: number;
    private 'actual_work_hours'?: number;
    public tracker?: WorkTableIssuseListResponseBodyTracker;
    public order?: WorkTableIssuseListResponseBodyOrder;
    public severity?: WorkTableIssuseListResponseBodySeverity;
    public priority?: WorkTableIssuseListResponseBodyPriority;
    public domain?: WorkTableIssuseListResponseBodyDomain;
    public position?: number;
    public module?: WorkTableIssuseListResponseBodyModule;
    private 'assigned_to'?: SimpleUserIn;
    public author?: SimpleUserIn;
    public developer?: SimpleUserIn;
    public closeder?: SimpleUserIn;
    public status?: WorkTableIssuseListResponseBodyStatus;
    public deleted?: boolean;
    private 'is_watcher'?: boolean;
    private 'closed_flag'?: number;
    private 'created_on'?: string;
    private 'updated_on'?: string;
    private 'due_date'?: string;
    public constructor() { 
    }
    public withId(id: number): WorkTableIssuseListResponseBodyIssueList {
        this['id'] = id;
        return this;
    }
    public withSubject(subject: string): WorkTableIssuseListResponseBodyIssueList {
        this['subject'] = subject;
        return this;
    }
    public withParentIssueId(parentIssueId: number): WorkTableIssuseListResponseBodyIssueList {
        this['parent_issue_id'] = parentIssueId;
        return this;
    }
    public set parentIssueId(parentIssueId: number  | undefined) {
        this['parent_issue_id'] = parentIssueId;
    }
    public get parentIssueId(): number | undefined {
        return this['parent_issue_id'];
    }
    public withParentIssue(parentIssue: WorkTableIssuseListResponseBodyParentIssue): WorkTableIssuseListResponseBodyIssueList {
        this['parent_issue'] = parentIssue;
        return this;
    }
    public set parentIssue(parentIssue: WorkTableIssuseListResponseBodyParentIssue  | undefined) {
        this['parent_issue'] = parentIssue;
    }
    public get parentIssue(): WorkTableIssuseListResponseBodyParentIssue | undefined {
        return this['parent_issue'];
    }
    public withProject(project: WorkTableIssuseListResponseBodyProject): WorkTableIssuseListResponseBodyIssueList {
        this['project'] = project;
        return this;
    }
    public withReleaseDev(releaseDev: string): WorkTableIssuseListResponseBodyIssueList {
        this['release_dev'] = releaseDev;
        return this;
    }
    public set releaseDev(releaseDev: string  | undefined) {
        this['release_dev'] = releaseDev;
    }
    public get releaseDev(): string | undefined {
        return this['release_dev'];
    }
    public withFindReleaseDev(findReleaseDev: string): WorkTableIssuseListResponseBodyIssueList {
        this['find_release_dev'] = findReleaseDev;
        return this;
    }
    public set findReleaseDev(findReleaseDev: string  | undefined) {
        this['find_release_dev'] = findReleaseDev;
    }
    public get findReleaseDev(): string | undefined {
        return this['find_release_dev'];
    }
    public withDoneRatio(doneRatio: number): WorkTableIssuseListResponseBodyIssueList {
        this['done_ratio'] = doneRatio;
        return this;
    }
    public set doneRatio(doneRatio: number  | undefined) {
        this['done_ratio'] = doneRatio;
    }
    public get doneRatio(): number | undefined {
        return this['done_ratio'];
    }
    public withExpectedWorkHours(expectedWorkHours: number): WorkTableIssuseListResponseBodyIssueList {
        this['expected_work_hours'] = expectedWorkHours;
        return this;
    }
    public set expectedWorkHours(expectedWorkHours: number  | undefined) {
        this['expected_work_hours'] = expectedWorkHours;
    }
    public get expectedWorkHours(): number | undefined {
        return this['expected_work_hours'];
    }
    public withActualWorkHours(actualWorkHours: number): WorkTableIssuseListResponseBodyIssueList {
        this['actual_work_hours'] = actualWorkHours;
        return this;
    }
    public set actualWorkHours(actualWorkHours: number  | undefined) {
        this['actual_work_hours'] = actualWorkHours;
    }
    public get actualWorkHours(): number | undefined {
        return this['actual_work_hours'];
    }
    public withTracker(tracker: WorkTableIssuseListResponseBodyTracker): WorkTableIssuseListResponseBodyIssueList {
        this['tracker'] = tracker;
        return this;
    }
    public withOrder(order: WorkTableIssuseListResponseBodyOrder): WorkTableIssuseListResponseBodyIssueList {
        this['order'] = order;
        return this;
    }
    public withSeverity(severity: WorkTableIssuseListResponseBodySeverity): WorkTableIssuseListResponseBodyIssueList {
        this['severity'] = severity;
        return this;
    }
    public withPriority(priority: WorkTableIssuseListResponseBodyPriority): WorkTableIssuseListResponseBodyIssueList {
        this['priority'] = priority;
        return this;
    }
    public withDomain(domain: WorkTableIssuseListResponseBodyDomain): WorkTableIssuseListResponseBodyIssueList {
        this['domain'] = domain;
        return this;
    }
    public withPosition(position: number): WorkTableIssuseListResponseBodyIssueList {
        this['position'] = position;
        return this;
    }
    public withModule(module: WorkTableIssuseListResponseBodyModule): WorkTableIssuseListResponseBodyIssueList {
        this['module'] = module;
        return this;
    }
    public withAssignedTo(assignedTo: SimpleUserIn): WorkTableIssuseListResponseBodyIssueList {
        this['assigned_to'] = assignedTo;
        return this;
    }
    public set assignedTo(assignedTo: SimpleUserIn  | undefined) {
        this['assigned_to'] = assignedTo;
    }
    public get assignedTo(): SimpleUserIn | undefined {
        return this['assigned_to'];
    }
    public withAuthor(author: SimpleUserIn): WorkTableIssuseListResponseBodyIssueList {
        this['author'] = author;
        return this;
    }
    public withDeveloper(developer: SimpleUserIn): WorkTableIssuseListResponseBodyIssueList {
        this['developer'] = developer;
        return this;
    }
    public withCloseder(closeder: SimpleUserIn): WorkTableIssuseListResponseBodyIssueList {
        this['closeder'] = closeder;
        return this;
    }
    public withStatus(status: WorkTableIssuseListResponseBodyStatus): WorkTableIssuseListResponseBodyIssueList {
        this['status'] = status;
        return this;
    }
    public withDeleted(deleted: boolean): WorkTableIssuseListResponseBodyIssueList {
        this['deleted'] = deleted;
        return this;
    }
    public withIsWatcher(isWatcher: boolean): WorkTableIssuseListResponseBodyIssueList {
        this['is_watcher'] = isWatcher;
        return this;
    }
    public set isWatcher(isWatcher: boolean  | undefined) {
        this['is_watcher'] = isWatcher;
    }
    public get isWatcher(): boolean | undefined {
        return this['is_watcher'];
    }
    public withClosedFlag(closedFlag: number): WorkTableIssuseListResponseBodyIssueList {
        this['closed_flag'] = closedFlag;
        return this;
    }
    public set closedFlag(closedFlag: number  | undefined) {
        this['closed_flag'] = closedFlag;
    }
    public get closedFlag(): number | undefined {
        return this['closed_flag'];
    }
    public withCreatedOn(createdOn: string): WorkTableIssuseListResponseBodyIssueList {
        this['created_on'] = createdOn;
        return this;
    }
    public set createdOn(createdOn: string  | undefined) {
        this['created_on'] = createdOn;
    }
    public get createdOn(): string | undefined {
        return this['created_on'];
    }
    public withUpdatedOn(updatedOn: string): WorkTableIssuseListResponseBodyIssueList {
        this['updated_on'] = updatedOn;
        return this;
    }
    public set updatedOn(updatedOn: string  | undefined) {
        this['updated_on'] = updatedOn;
    }
    public get updatedOn(): string | undefined {
        return this['updated_on'];
    }
    public withDueDate(dueDate: string): WorkTableIssuseListResponseBodyIssueList {
        this['due_date'] = dueDate;
        return this;
    }
    public set dueDate(dueDate: string  | undefined) {
        this['due_date'] = dueDate;
    }
    public get dueDate(): string | undefined {
        return this['due_date'];
    }
}