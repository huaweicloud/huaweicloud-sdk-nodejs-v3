import { UpdateBandwidthPolicyReq } from './UpdateBandwidthPolicyReq';


export class UpdateBandwidthPolicyRequest {
    private 'task_id'?: number;
    public body?: UpdateBandwidthPolicyReq;
    public constructor(taskId?: number) { 
        this['task_id'] = taskId;
    }
    public withTaskId(taskId: number): UpdateBandwidthPolicyRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: number  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): number | undefined {
        return this['task_id'];
    }
    public withBody(body: UpdateBandwidthPolicyReq): UpdateBandwidthPolicyRequest {
        this['body'] = body;
        return this;
    }
}