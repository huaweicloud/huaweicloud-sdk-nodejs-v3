import { UpdateScheduleRequestBody } from './UpdateScheduleRequestBody';


export class UpdateGcScheduleRequest {
    private 'instance_id'?: string;
    public body?: UpdateScheduleRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateGcScheduleRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpdateScheduleRequestBody): UpdateGcScheduleRequest {
        this['body'] = body;
        return this;
    }
}