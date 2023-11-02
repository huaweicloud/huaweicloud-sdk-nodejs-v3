import { ApprovalInfoParam } from './ApprovalInfoParam';


export class ConfirmApprovalsRequest {
    public workspace?: string;
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
