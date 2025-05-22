import { ListIssueRequestV4CustomFields } from './ListIssueRequestV4CustomFields';


export class ListIssueRequestV4 {
    private 'assigned_ids'?: Array<number>;
    private 'creator_ids'?: Array<number>;
    private 'developer_ids'?: Array<number>;
    private 'domain_ids'?: Array<number>;
    private 'done_ratios'?: Array<number>;
    private 'iteration_ids'?: Array<number>;
    public limit?: number;
    public offset?: number;
    private 'module_ids'?: Array<number>;
    private 'priority_ids'?: Array<number>;
    private 'query_type'?: string;
    private 'severity_ids'?: Array<number>;
    private 'status_ids'?: Array<number>;
    private 'story_point_ids'?: Array<number>;
    private 'tracker_ids'?: Array<number>;
    private 'include_deleted'?: boolean;
    private 'created_time_interval'?: string;
    private 'updated_time_interval'?: string;
    private 'closed_time_interval'?: string;
    private 'custom_fields'?: Array<ListIssueRequestV4CustomFields>;
    public constructor() { 
    }
    public withAssignedIds(assignedIds: Array<number>): ListIssueRequestV4 {
        this['assigned_ids'] = assignedIds;
        return this;
    }
    public set assignedIds(assignedIds: Array<number>  | undefined) {
        this['assigned_ids'] = assignedIds;
    }
    public get assignedIds(): Array<number> | undefined {
        return this['assigned_ids'];
    }
    public withCreatorIds(creatorIds: Array<number>): ListIssueRequestV4 {
        this['creator_ids'] = creatorIds;
        return this;
    }
    public set creatorIds(creatorIds: Array<number>  | undefined) {
        this['creator_ids'] = creatorIds;
    }
    public get creatorIds(): Array<number> | undefined {
        return this['creator_ids'];
    }
    public withDeveloperIds(developerIds: Array<number>): ListIssueRequestV4 {
        this['developer_ids'] = developerIds;
        return this;
    }
    public set developerIds(developerIds: Array<number>  | undefined) {
        this['developer_ids'] = developerIds;
    }
    public get developerIds(): Array<number> | undefined {
        return this['developer_ids'];
    }
    public withDomainIds(domainIds: Array<number>): ListIssueRequestV4 {
        this['domain_ids'] = domainIds;
        return this;
    }
    public set domainIds(domainIds: Array<number>  | undefined) {
        this['domain_ids'] = domainIds;
    }
    public get domainIds(): Array<number> | undefined {
        return this['domain_ids'];
    }
    public withDoneRatios(doneRatios: Array<number>): ListIssueRequestV4 {
        this['done_ratios'] = doneRatios;
        return this;
    }
    public set doneRatios(doneRatios: Array<number>  | undefined) {
        this['done_ratios'] = doneRatios;
    }
    public get doneRatios(): Array<number> | undefined {
        return this['done_ratios'];
    }
    public withIterationIds(iterationIds: Array<number>): ListIssueRequestV4 {
        this['iteration_ids'] = iterationIds;
        return this;
    }
    public set iterationIds(iterationIds: Array<number>  | undefined) {
        this['iteration_ids'] = iterationIds;
    }
    public get iterationIds(): Array<number> | undefined {
        return this['iteration_ids'];
    }
    public withLimit(limit: number): ListIssueRequestV4 {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListIssueRequestV4 {
        this['offset'] = offset;
        return this;
    }
    public withModuleIds(moduleIds: Array<number>): ListIssueRequestV4 {
        this['module_ids'] = moduleIds;
        return this;
    }
    public set moduleIds(moduleIds: Array<number>  | undefined) {
        this['module_ids'] = moduleIds;
    }
    public get moduleIds(): Array<number> | undefined {
        return this['module_ids'];
    }
    public withPriorityIds(priorityIds: Array<number>): ListIssueRequestV4 {
        this['priority_ids'] = priorityIds;
        return this;
    }
    public set priorityIds(priorityIds: Array<number>  | undefined) {
        this['priority_ids'] = priorityIds;
    }
    public get priorityIds(): Array<number> | undefined {
        return this['priority_ids'];
    }
    public withQueryType(queryType: string): ListIssueRequestV4 {
        this['query_type'] = queryType;
        return this;
    }
    public set queryType(queryType: string  | undefined) {
        this['query_type'] = queryType;
    }
    public get queryType(): string | undefined {
        return this['query_type'];
    }
    public withSeverityIds(severityIds: Array<number>): ListIssueRequestV4 {
        this['severity_ids'] = severityIds;
        return this;
    }
    public set severityIds(severityIds: Array<number>  | undefined) {
        this['severity_ids'] = severityIds;
    }
    public get severityIds(): Array<number> | undefined {
        return this['severity_ids'];
    }
    public withStatusIds(statusIds: Array<number>): ListIssueRequestV4 {
        this['status_ids'] = statusIds;
        return this;
    }
    public set statusIds(statusIds: Array<number>  | undefined) {
        this['status_ids'] = statusIds;
    }
    public get statusIds(): Array<number> | undefined {
        return this['status_ids'];
    }
    public withStoryPointIds(storyPointIds: Array<number>): ListIssueRequestV4 {
        this['story_point_ids'] = storyPointIds;
        return this;
    }
    public set storyPointIds(storyPointIds: Array<number>  | undefined) {
        this['story_point_ids'] = storyPointIds;
    }
    public get storyPointIds(): Array<number> | undefined {
        return this['story_point_ids'];
    }
    public withTrackerIds(trackerIds: Array<number>): ListIssueRequestV4 {
        this['tracker_ids'] = trackerIds;
        return this;
    }
    public set trackerIds(trackerIds: Array<number>  | undefined) {
        this['tracker_ids'] = trackerIds;
    }
    public get trackerIds(): Array<number> | undefined {
        return this['tracker_ids'];
    }
    public withIncludeDeleted(includeDeleted: boolean): ListIssueRequestV4 {
        this['include_deleted'] = includeDeleted;
        return this;
    }
    public set includeDeleted(includeDeleted: boolean  | undefined) {
        this['include_deleted'] = includeDeleted;
    }
    public get includeDeleted(): boolean | undefined {
        return this['include_deleted'];
    }
    public withCreatedTimeInterval(createdTimeInterval: string): ListIssueRequestV4 {
        this['created_time_interval'] = createdTimeInterval;
        return this;
    }
    public set createdTimeInterval(createdTimeInterval: string  | undefined) {
        this['created_time_interval'] = createdTimeInterval;
    }
    public get createdTimeInterval(): string | undefined {
        return this['created_time_interval'];
    }
    public withUpdatedTimeInterval(updatedTimeInterval: string): ListIssueRequestV4 {
        this['updated_time_interval'] = updatedTimeInterval;
        return this;
    }
    public set updatedTimeInterval(updatedTimeInterval: string  | undefined) {
        this['updated_time_interval'] = updatedTimeInterval;
    }
    public get updatedTimeInterval(): string | undefined {
        return this['updated_time_interval'];
    }
    public withClosedTimeInterval(closedTimeInterval: string): ListIssueRequestV4 {
        this['closed_time_interval'] = closedTimeInterval;
        return this;
    }
    public set closedTimeInterval(closedTimeInterval: string  | undefined) {
        this['closed_time_interval'] = closedTimeInterval;
    }
    public get closedTimeInterval(): string | undefined {
        return this['closed_time_interval'];
    }
    public withCustomFields(customFields: Array<ListIssueRequestV4CustomFields>): ListIssueRequestV4 {
        this['custom_fields'] = customFields;
        return this;
    }
    public set customFields(customFields: Array<ListIssueRequestV4CustomFields>  | undefined) {
        this['custom_fields'] = customFields;
    }
    public get customFields(): Array<ListIssueRequestV4CustomFields> | undefined {
        return this['custom_fields'];
    }
}