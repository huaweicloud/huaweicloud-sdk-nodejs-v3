import { UpdatePasswordlessConfigRequestBody } from './UpdatePasswordlessConfigRequestBody';


export class UpdatePasswordlessConfigRequest {
    private 'instance_id'?: string;
    public body?: UpdatePasswordlessConfigRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdatePasswordlessConfigRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpdatePasswordlessConfigRequestBody): UpdatePasswordlessConfigRequest {
        this['body'] = body;
        return this;
    }
}