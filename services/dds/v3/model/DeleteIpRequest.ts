import { DeleteIpRequestBody } from './DeleteIpRequestBody';


export class DeleteIpRequest {
    private 'instance_id'?: string;
    public body?: DeleteIpRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): DeleteIpRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: DeleteIpRequestBody): DeleteIpRequest {
        this['body'] = body;
        return this;
    }
}