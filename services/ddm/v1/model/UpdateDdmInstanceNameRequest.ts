import { UpdateDdmInstanceNameRequestBody } from './UpdateDdmInstanceNameRequestBody';


export class UpdateDdmInstanceNameRequest {
    private 'instance_id'?: string;
    public body?: UpdateDdmInstanceNameRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateDdmInstanceNameRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpdateDdmInstanceNameRequestBody): UpdateDdmInstanceNameRequest {
        this['body'] = body;
        return this;
    }
}