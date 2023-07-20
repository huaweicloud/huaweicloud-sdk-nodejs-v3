import { UpdateBandwidthPolicyReq } from './UpdateBandwidthPolicyReq';


export class UpdateBandwidthPolicyRequest {
    private 'task_id'?: string;
    public body?: UpdateBandwidthPolicyReq;
    public constructor(taskId?: string) { 
        this['task_id'] = taskId;
    }
    public withTaskId(taskId: string): UpdateBandwidthPolicyRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withBody(body: UpdateBandwidthPolicyReq): UpdateBandwidthPolicyRequest {
        this['body'] = body;
        return this;
    }
}