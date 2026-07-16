import { JobResponse } from './JobResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTrainingJobsResponse extends SdkResponse {
    public total?: number;
    public count?: number;
    public limit?: number;
    public offset?: number;
    private 'sort_by'?: string;
    public order?: string;
    private 'group_by'?: string;
    private 'workspace_id'?: string;
    private 'ai_project'?: string;
    private 'train_type'?: string;
    public items?: Array<JobResponse>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListTrainingJobsResponse {
        this['total'] = total;
        return this;
    }
    public withCount(count: number): ListTrainingJobsResponse {
        this['count'] = count;
        return this;
    }
    public withLimit(limit: number): ListTrainingJobsResponse {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListTrainingJobsResponse {
        this['offset'] = offset;
        return this;
    }
    public withSortBy(sortBy: string): ListTrainingJobsResponse {
        this['sort_by'] = sortBy;
        return this;
    }
    public set sortBy(sortBy: string  | undefined) {
        this['sort_by'] = sortBy;
    }
    public get sortBy(): string | undefined {
        return this['sort_by'];
    }
    public withOrder(order: string): ListTrainingJobsResponse {
        this['order'] = order;
        return this;
    }
    public withGroupBy(groupBy: string): ListTrainingJobsResponse {
        this['group_by'] = groupBy;
        return this;
    }
    public set groupBy(groupBy: string  | undefined) {
        this['group_by'] = groupBy;
    }
    public get groupBy(): string | undefined {
        return this['group_by'];
    }
    public withWorkspaceId(workspaceId: string): ListTrainingJobsResponse {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withAiProject(aiProject: string): ListTrainingJobsResponse {
        this['ai_project'] = aiProject;
        return this;
    }
    public set aiProject(aiProject: string  | undefined) {
        this['ai_project'] = aiProject;
    }
    public get aiProject(): string | undefined {
        return this['ai_project'];
    }
    public withTrainType(trainType: string): ListTrainingJobsResponse {
        this['train_type'] = trainType;
        return this;
    }
    public set trainType(trainType: string  | undefined) {
        this['train_type'] = trainType;
    }
    public get trainType(): string | undefined {
        return this['train_type'];
    }
    public withItems(items: Array<JobResponse>): ListTrainingJobsResponse {
        this['items'] = items;
        return this;
    }
}