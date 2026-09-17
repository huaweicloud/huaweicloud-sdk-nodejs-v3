import { CancelInstanceProcessRequestBody } from './CancelInstanceProcessRequestBody';


export class CancelInstanceProcessRequest {
    private 'instance_id'?: string;
    public body?: CancelInstanceProcessRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CancelInstanceProcessRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CancelInstanceProcessRequestBody): CancelInstanceProcessRequest {
        this['body'] = body;
        return this;
    }
}