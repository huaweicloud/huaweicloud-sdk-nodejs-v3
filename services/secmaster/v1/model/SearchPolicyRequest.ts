import { SearchPolicyRequestBody } from './SearchPolicyRequestBody';


export class SearchPolicyRequest {
    private 'Content-Type'?: string;
    private 'X-Secmaster-Version'?: string;
    private 'workspace_id'?: string;
    public body?: SearchPolicyRequestBody;
    public constructor(contentType?: string, xSecmasterVersion?: string, workspaceId?: string) { 
        this['Content-Type'] = contentType;
        this['X-Secmaster-Version'] = xSecmasterVersion;
        this['workspace_id'] = workspaceId;
    }
    public withContentType(contentType: string): SearchPolicyRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withXSecmasterVersion(xSecmasterVersion: string): SearchPolicyRequest {
        this['X-Secmaster-Version'] = xSecmasterVersion;
        return this;
    }
    public set xSecmasterVersion(xSecmasterVersion: string  | undefined) {
        this['X-Secmaster-Version'] = xSecmasterVersion;
    }
    public get xSecmasterVersion(): string | undefined {
        return this['X-Secmaster-Version'];
    }
    public withWorkspaceId(workspaceId: string): SearchPolicyRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: SearchPolicyRequestBody): SearchPolicyRequest {
        this['body'] = body;
        return this;
    }
}