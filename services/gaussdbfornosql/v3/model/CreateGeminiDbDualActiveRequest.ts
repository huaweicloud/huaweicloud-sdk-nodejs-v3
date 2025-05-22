import { DualActiveRequestBody } from './DualActiveRequestBody';


export class CreateGeminiDbDualActiveRequest {
    private 'instance_id'?: string;
    public body?: DualActiveRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateGeminiDbDualActiveRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: DualActiveRequestBody): CreateGeminiDbDualActiveRequest {
        this['body'] = body;
        return this;
    }
}