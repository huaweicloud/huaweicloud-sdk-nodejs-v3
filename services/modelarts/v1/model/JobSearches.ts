import { Filter } from './Filter';


export class JobSearches {
    public offset?: number;
    public limit?: number;
    private 'sort_by'?: string;
    public order?: string;
    private 'group_by'?: string;
    private 'workspace_id'?: string;
    private 'train_type'?: string;
    public filters?: Array<Filter>;
    public constructor() { 
    }
    public withOffset(offset: number): JobSearches {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): JobSearches {
        this['limit'] = limit;
        return this;
    }
    public withSortBy(sortBy: string): JobSearches {
        this['sort_by'] = sortBy;
        return this;
    }
    public set sortBy(sortBy: string  | undefined) {
        this['sort_by'] = sortBy;
    }
    public get sortBy(): string | undefined {
        return this['sort_by'];
    }
    public withOrder(order: string): JobSearches {
        this['order'] = order;
        return this;
    }
    public withGroupBy(groupBy: string): JobSearches {
        this['group_by'] = groupBy;
        return this;
    }
    public set groupBy(groupBy: string  | undefined) {
        this['group_by'] = groupBy;
    }
    public get groupBy(): string | undefined {
        return this['group_by'];
    }
    public withWorkspaceId(workspaceId: string): JobSearches {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withTrainType(trainType: string): JobSearches {
        this['train_type'] = trainType;
        return this;
    }
    public set trainType(trainType: string  | undefined) {
        this['train_type'] = trainType;
    }
    public get trainType(): string | undefined {
        return this['train_type'];
    }
    public withFilters(filters: Array<Filter>): JobSearches {
        this['filters'] = filters;
        return this;
    }
}