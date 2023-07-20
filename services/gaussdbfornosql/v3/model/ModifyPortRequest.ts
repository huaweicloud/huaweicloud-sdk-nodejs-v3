import { ModifyPortRequestBody } from './ModifyPortRequestBody';


export class ModifyPortRequest {
    private 'instance_id'?: string;
    public body?: ModifyPortRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ModifyPortRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ModifyPortRequestBody): ModifyPortRequest {
        this['body'] = body;
        return this;
    }
}