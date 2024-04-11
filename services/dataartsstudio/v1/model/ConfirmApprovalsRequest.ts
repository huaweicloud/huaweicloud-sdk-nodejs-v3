import { ApprovalInfoParam } from './ApprovalInfoParam';


export class ConfirmApprovalsRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
    private 'action-id'?: ConfirmApprovalsRequestActionIdEnum | string;
    public body?: ApprovalInfoParam;
    public constructor(workspace?: string, actionId?: string) { 
        this['workspace'] = workspace;
        this['action-id'] = actionId;
    }
    public withWorkspace(workspace: string): ConfirmApprovalsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): ConfirmApprovalsRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): ConfirmApprovalsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withActionId(actionId: ConfirmApprovalsRequestActionIdEnum | string): ConfirmApprovalsRequest {
        this['action-id'] = actionId;
        return this;
    }
    public set actionId(actionId: ConfirmApprovalsRequestActionIdEnum | string  | undefined) {
        this['action-id'] = actionId;
    }
    public get actionId(): ConfirmApprovalsRequestActionIdEnum | string | undefined {
        return this['action-id'];
    }
    public withBody(body: ApprovalInfoParam): ConfirmApprovalsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ConfirmApprovalsRequestActionIdEnum {
    REJECT = 'reject',
    RESOLVE = 'resolve'
}
