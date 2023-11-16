import { StartInstanceResizeCheckJobRequestBody } from './StartInstanceResizeCheckJobRequestBody';


export class StartInstanceResizeCheckJobRequest {
    private 'instance_id'?: string;
    public body?: StartInstanceResizeCheckJobRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): StartInstanceResizeCheckJobRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: StartInstanceResizeCheckJobRequestBody): StartInstanceResizeCheckJobRequest {
        this['body'] = body;
        return this;
    }
}