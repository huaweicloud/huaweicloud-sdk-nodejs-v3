import { DimensionVO } from './DimensionVO';


export class UpdateDesignDimensionRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
    public body?: DimensionVO;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): UpdateDesignDimensionRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): UpdateDesignDimensionRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): UpdateDesignDimensionRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: DimensionVO): UpdateDesignDimensionRequest {
        this['body'] = body;
        return this;
    }
}