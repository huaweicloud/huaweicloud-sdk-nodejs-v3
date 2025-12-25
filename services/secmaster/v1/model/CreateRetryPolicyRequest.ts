import { CreateRetryPolicyRequestBody } from './CreateRetryPolicyRequestBody';


export class CreateRetryPolicyRequest {
    private 'Content-Type'?: string;
    private 'X-Secmaster-Version'?: string;
    private 'workspace_id'?: string;
    private 'action_type'?: CreateRetryPolicyRequestActionTypeEnum | string;
    public body?: CreateRetryPolicyRequestBody;
    public constructor(contentType?: string, xSecmasterVersion?: string, workspaceId?: string, actionType?: string) { 
        this['Content-Type'] = contentType;
        this['X-Secmaster-Version'] = xSecmasterVersion;
        this['workspace_id'] = workspaceId;
        this['action_type'] = actionType;
    }
    public withContentType(contentType: string): CreateRetryPolicyRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withXSecmasterVersion(xSecmasterVersion: string): CreateRetryPolicyRequest {
        this['X-Secmaster-Version'] = xSecmasterVersion;
        return this;
    }
    public set xSecmasterVersion(xSecmasterVersion: string  | undefined) {
        this['X-Secmaster-Version'] = xSecmasterVersion;
    }
    public get xSecmasterVersion(): string | undefined {
        return this['X-Secmaster-Version'];
    }
    public withWorkspaceId(workspaceId: string): CreateRetryPolicyRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withActionType(actionType: CreateRetryPolicyRequestActionTypeEnum | string): CreateRetryPolicyRequest {
        this['action_type'] = actionType;
        return this;
    }
    public set actionType(actionType: CreateRetryPolicyRequestActionTypeEnum | string  | undefined) {
        this['action_type'] = actionType;
    }
    public get actionType(): CreateRetryPolicyRequestActionTypeEnum | string | undefined {
        return this['action_type'];
    }
    public withBody(body: CreateRetryPolicyRequestBody): CreateRetryPolicyRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateRetryPolicyRequestActionTypeEnum {
    CREATE = 'create',
    RETRY = 'retry'
}
