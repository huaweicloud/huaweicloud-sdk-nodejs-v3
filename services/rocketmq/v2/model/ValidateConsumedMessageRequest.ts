import { ResendReq } from './ResendReq';


export class ValidateConsumedMessageRequest {
    public engine?: string;
    private 'instance_id'?: string;
    public body?: ResendReq;
    public constructor(engine?: string, instanceId?: string) { 
        this['engine'] = engine;
        this['instance_id'] = instanceId;
    }
    public withEngine(engine: string): ValidateConsumedMessageRequest {
        this['engine'] = engine;
        return this;
    }
    public withInstanceId(instanceId: string): ValidateConsumedMessageRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ResendReq): ValidateConsumedMessageRequest {
        this['body'] = body;
        return this;
    }
}