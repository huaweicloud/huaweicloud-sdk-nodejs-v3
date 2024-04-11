import { CodeTableFieldValueUpdateVO } from './CodeTableFieldValueUpdateVO';


export class UpdateCodeTableValuesRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
    public id?: string;
    public body?: CodeTableFieldValueUpdateVO;
    public constructor(workspace?: string, id?: string) { 
        this['workspace'] = workspace;
        this['id'] = id;
    }
    public withWorkspace(workspace: string): UpdateCodeTableValuesRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): UpdateCodeTableValuesRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): UpdateCodeTableValuesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withId(id: string): UpdateCodeTableValuesRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: CodeTableFieldValueUpdateVO): UpdateCodeTableValuesRequest {
        this['body'] = body;
        return this;
    }
}