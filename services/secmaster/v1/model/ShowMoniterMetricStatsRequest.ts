import { ShowMetricStatsRequestBody } from './ShowMetricStatsRequestBody';


export class ShowMoniterMetricStatsRequest {
    private 'workspace_id'?: string;
    public body?: ShowMetricStatsRequestBody;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): ShowMoniterMetricStatsRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: ShowMetricStatsRequestBody): ShowMoniterMetricStatsRequest {
        this['body'] = body;
        return this;
    }
}