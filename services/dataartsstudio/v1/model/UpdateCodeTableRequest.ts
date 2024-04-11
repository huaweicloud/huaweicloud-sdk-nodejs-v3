import { CodeTableVO } from './CodeTableVO';


export class UpdateCodeTableRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
    public id?: string;
    public body?: CodeTableVO;
    public constructor(workspace?: string, id?: string) { 
        this['workspace'] = workspace;
        this['id'] = id;
    }
    public withWorkspace(workspace: string): UpdateCodeTableRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): UpdateCodeTableRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): UpdateCodeTableRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withId(id: string): UpdateCodeTableRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: CodeTableVO): UpdateCodeTableRequest {
        this['body'] = body;
        return this;
    }
}