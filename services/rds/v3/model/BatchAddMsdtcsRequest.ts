import { AddMsdtcRequestBody } from './AddMsdtcRequestBody';


export class BatchAddMsdtcsRequest {
    private 'instance_id'?: string;
    public body?: AddMsdtcRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): BatchAddMsdtcsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: AddMsdtcRequestBody): BatchAddMsdtcsRequest {
        this['body'] = body;
        return this;
    }
}