import { DerivativeIndexVO } from './DerivativeIndexVO';


export class UpdateDesignDerivativeIndexRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
    public body?: DerivativeIndexVO;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): UpdateDesignDerivativeIndexRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): UpdateDesignDerivativeIndexRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): UpdateDesignDerivativeIndexRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: DerivativeIndexVO): UpdateDesignDerivativeIndexRequest {
        this['body'] = body;
        return this;
    }
}