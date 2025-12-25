import { CreateReportRequestBody } from './CreateReportRequestBody';


export class CreateReportRequest {
    private 'Region'?: string;
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    public body?: CreateReportRequestBody;
    public constructor(region?: string, contentType?: string, workspaceId?: string) { 
        this['Region'] = region;
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
    }
    public withRegion(region: string): CreateReportRequest {
        this['Region'] = region;
        return this;
    }
    public set region(region: string  | undefined) {
        this['Region'] = region;
    }
    public get region(): string | undefined {
        return this['Region'];
    }
    public withContentType(contentType: string): CreateReportRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): CreateReportRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: CreateReportRequestBody): CreateReportRequest {
        this['body'] = body;
        return this;
    }
}