import { StopKillTaskRequestBody } from './StopKillTaskRequestBody';


export class StopKillTaskRequest {
    private 'instance_id'?: string;
    public body?: StopKillTaskRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): StopKillTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: StopKillTaskRequestBody): StopKillTaskRequest {
        this['body'] = body;
        return this;
    }
}