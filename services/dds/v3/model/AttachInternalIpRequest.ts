import { AttachInternalIpRequestBody } from './AttachInternalIpRequestBody';


export class AttachInternalIpRequest {
    private 'instance_id'?: string;
    public body?: AttachInternalIpRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): AttachInternalIpRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: AttachInternalIpRequestBody): AttachInternalIpRequest {
        this['body'] = body;
        return this;
    }
}