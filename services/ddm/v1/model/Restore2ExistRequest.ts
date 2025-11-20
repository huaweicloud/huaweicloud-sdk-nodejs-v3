import { RestoreInst2ExistReq } from './RestoreInst2ExistReq';


export class Restore2ExistRequest {
    private 'instance_id'?: string;
    public body?: RestoreInst2ExistReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): Restore2ExistRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: RestoreInst2ExistReq): Restore2ExistRequest {
        this['body'] = body;
        return this;
    }
}