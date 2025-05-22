import { WorkitemCustomField } from './WorkitemCustomField';
import { WorkitemUser } from './WorkitemUser';
import { WorkitemsDomain } from './WorkitemsDomain';
import { WorkitemsIteration } from './WorkitemsIteration';
import { WorkitemsModule } from './WorkitemsModule';
import { WorkitemsStatus } from './WorkitemsStatus';
import { WorkitemsTags } from './WorkitemsTags';


export class Workitems {
    public id?: string;
    public description?: string;
    private 'actual_work_hours'?: number;
    private 'assigned_user'?: WorkitemUser;
    public author?: WorkitemUser;
    private 'begin_time'?: string;
    private 'created_time'?: string;
    public tags?: Array<WorkitemsTags>;
    public developer?: WorkitemUser;
    private 'assigned_cc_user'?: Array<WorkitemUser>;
    private 'discover_version'?: string;
    private 'end_time'?: string;
    private 'done_ratio'?: string;
    private 'expected_work_hours'?: number;
    public order?: string;
    private 'parent_work_item_id'?: string;
    private 'release_version'?: string;
    private 'story_point'?: string;
    public domain?: WorkitemsDomain;
    public iteration?: WorkitemsIteration;
    public module?: WorkitemsModule;
    public priority?: string;
    public severity?: string;
    public status?: WorkitemsStatus;
    public subject?: string;
    private 'updated_time'?: string;
    public sequence?: string;
    public important?: string;
    private 'custom_fields'?: Array<WorkitemCustomField>;
    public constructor() { 
    }
    public withId(id: string): Workitems {
        this['id'] = id;
        return this;
    }
    public withDescription(description: string): Workitems {
        this['description'] = description;
        return this;
    }
    public withActualWorkHours(actualWorkHours: number): Workitems {
        this['actual_work_hours'] = actualWorkHours;
        return this;
    }
    public set actualWorkHours(actualWorkHours: number  | undefined) {
        this['actual_work_hours'] = actualWorkHours;
    }
    public get actualWorkHours(): number | undefined {
        return this['actual_work_hours'];
    }
    public withAssignedUser(assignedUser: WorkitemUser): Workitems {
        this['assigned_user'] = assignedUser;
        return this;
    }
    public set assignedUser(assignedUser: WorkitemUser  | undefined) {
        this['assigned_user'] = assignedUser;
    }
    public get assignedUser(): WorkitemUser | undefined {
        return this['assigned_user'];
    }
    public withAuthor(author: WorkitemUser): Workitems {
        this['author'] = author;
        return this;
    }
    public withBeginTime(beginTime: string): Workitems {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withCreatedTime(createdTime: string): Workitems {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withTags(tags: Array<WorkitemsTags>): Workitems {
        this['tags'] = tags;
        return this;
    }
    public withDeveloper(developer: WorkitemUser): Workitems {
        this['developer'] = developer;
        return this;
    }
    public withAssignedCcUser(assignedCcUser: Array<WorkitemUser>): Workitems {
        this['assigned_cc_user'] = assignedCcUser;
        return this;
    }
    public set assignedCcUser(assignedCcUser: Array<WorkitemUser>  | undefined) {
        this['assigned_cc_user'] = assignedCcUser;
    }
    public get assignedCcUser(): Array<WorkitemUser> | undefined {
        return this['assigned_cc_user'];
    }
    public withDiscoverVersion(discoverVersion: string): Workitems {
        this['discover_version'] = discoverVersion;
        return this;
    }
    public set discoverVersion(discoverVersion: string  | undefined) {
        this['discover_version'] = discoverVersion;
    }
    public get discoverVersion(): string | undefined {
        return this['discover_version'];
    }
    public withEndTime(endTime: string): Workitems {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withDoneRatio(doneRatio: string): Workitems {
        this['done_ratio'] = doneRatio;
        return this;
    }
    public set doneRatio(doneRatio: string  | undefined) {
        this['done_ratio'] = doneRatio;
    }
    public get doneRatio(): string | undefined {
        return this['done_ratio'];
    }
    public withExpectedWorkHours(expectedWorkHours: number): Workitems {
        this['expected_work_hours'] = expectedWorkHours;
        return this;
    }
    public set expectedWorkHours(expectedWorkHours: number  | undefined) {
        this['expected_work_hours'] = expectedWorkHours;
    }
    public get expectedWorkHours(): number | undefined {
        return this['expected_work_hours'];
    }
    public withOrder(order: string): Workitems {
        this['order'] = order;
        return this;
    }
    public withParentWorkItemId(parentWorkItemId: string): Workitems {
        this['parent_work_item_id'] = parentWorkItemId;
        return this;
    }
    public set parentWorkItemId(parentWorkItemId: string  | undefined) {
        this['parent_work_item_id'] = parentWorkItemId;
    }
    public get parentWorkItemId(): string | undefined {
        return this['parent_work_item_id'];
    }
    public withReleaseVersion(releaseVersion: string): Workitems {
        this['release_version'] = releaseVersion;
        return this;
    }
    public set releaseVersion(releaseVersion: string  | undefined) {
        this['release_version'] = releaseVersion;
    }
    public get releaseVersion(): string | undefined {
        return this['release_version'];
    }
    public withStoryPoint(storyPoint: string): Workitems {
        this['story_point'] = storyPoint;
        return this;
    }
    public set storyPoint(storyPoint: string  | undefined) {
        this['story_point'] = storyPoint;
    }
    public get storyPoint(): string | undefined {
        return this['story_point'];
    }
    public withDomain(domain: WorkitemsDomain): Workitems {
        this['domain'] = domain;
        return this;
    }
    public withIteration(iteration: WorkitemsIteration): Workitems {
        this['iteration'] = iteration;
        return this;
    }
    public withModule(module: WorkitemsModule): Workitems {
        this['module'] = module;
        return this;
    }
    public withPriority(priority: string): Workitems {
        this['priority'] = priority;
        return this;
    }
    public withSeverity(severity: string): Workitems {
        this['severity'] = severity;
        return this;
    }
    public withStatus(status: WorkitemsStatus): Workitems {
        this['status'] = status;
        return this;
    }
    public withSubject(subject: string): Workitems {
        this['subject'] = subject;
        return this;
    }
    public withUpdatedTime(updatedTime: string): Workitems {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: string  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): string | undefined {
        return this['updated_time'];
    }
    public withSequence(sequence: string): Workitems {
        this['sequence'] = sequence;
        return this;
    }
    public withImportant(important: string): Workitems {
        this['important'] = important;
        return this;
    }
    public withCustomFields(customFields: Array<WorkitemCustomField>): Workitems {
        this['custom_fields'] = customFields;
        return this;
    }
    public set customFields(customFields: Array<WorkitemCustomField>  | undefined) {
        this['custom_fields'] = customFields;
    }
    public get customFields(): Array<WorkitemCustomField> | undefined {
        return this['custom_fields'];
    }
}