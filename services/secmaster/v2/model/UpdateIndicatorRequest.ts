import { UpdateIndicatorRequestBody } from './UpdateIndicatorRequestBody';


export class UpdateIndicatorRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    private 'indicator_id'?: string;
    public body?: UpdateIndicatorRequestBody;
    public constructor(contentType?: string, workspaceId?: string, indicatorId?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['indicator_id'] = indicatorId;
    }
    public withContentType(contentType: string): UpdateIndicatorRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): UpdateIndicatorRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withIndicatorId(indicatorId: string): UpdateIndicatorRequest {
        this['indicator_id'] = indicatorId;
        return this;
    }
    public set indicatorId(indicatorId: string  | undefined) {
        this['indicator_id'] = indicatorId;
    }
    public get indicatorId(): string | undefined {
        return this['indicator_id'];
    }
    public withBody(body: UpdateIndicatorRequestBody): UpdateIndicatorRequest {
        this['body'] = body;
        return this;
    }
}