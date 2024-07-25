import { BatchSearchMetricHitsRequestBody } from './BatchSearchMetricHitsRequestBody';


export class BatchSearchMetricHitsRequest {
    private 'workspace_id'?: string;
    public timespan?: string;
    public cache?: boolean;
    public body?: BatchSearchMetricHitsRequestBody;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): BatchSearchMetricHitsRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withTimespan(timespan: string): BatchSearchMetricHitsRequest {
        this['timespan'] = timespan;
        return this;
    }
    public withCache(cache: boolean): BatchSearchMetricHitsRequest {
        this['cache'] = cache;
        return this;
    }
    public withBody(body: BatchSearchMetricHitsRequestBody): BatchSearchMetricHitsRequest {
        this['body'] = body;
        return this;
    }
}