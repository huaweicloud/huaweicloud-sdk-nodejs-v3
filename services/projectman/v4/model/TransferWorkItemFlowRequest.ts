import { WorkItemFlowRequestBody } from './WorkItemFlowRequestBody';


export class TransferWorkItemFlowRequest {
    private 'project_id'?: string;
    public body?: WorkItemFlowRequestBody;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): TransferWorkItemFlowRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: WorkItemFlowRequestBody): TransferWorkItemFlowRequest {
        this['body'] = body;
        return this;
    }
}