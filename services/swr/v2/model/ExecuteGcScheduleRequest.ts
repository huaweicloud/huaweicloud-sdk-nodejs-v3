import { ExecuteScheduleRequestBody } from './ExecuteScheduleRequestBody';


export class ExecuteGcScheduleRequest {
    private 'instance_id'?: string;
    public body?: ExecuteScheduleRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ExecuteGcScheduleRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ExecuteScheduleRequestBody): ExecuteGcScheduleRequest {
        this['body'] = body;
        return this;
    }
}