import { WorkItemFlowVO } from './WorkItemFlowVO';


export class BatchTransferIpdWorkItemFlowRequest {
    private 'project_id'?: string;
    private 'is_recover'?: boolean;
    public body?: WorkItemFlowVO;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): BatchTransferIpdWorkItemFlowRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withIsRecover(isRecover: boolean): BatchTransferIpdWorkItemFlowRequest {
        this['is_recover'] = isRecover;
        return this;
    }
    public set isRecover(isRecover: boolean  | undefined) {
        this['is_recover'] = isRecover;
    }
    public get isRecover(): boolean | undefined {
        return this['is_recover'];
    }
    public withBody(body: WorkItemFlowVO): BatchTransferIpdWorkItemFlowRequest {
        this['body'] = body;
        return this;
    }
}