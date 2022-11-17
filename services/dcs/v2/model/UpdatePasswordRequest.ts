import { ModifyInstancePasswordBody } from './ModifyInstancePasswordBody';


export class UpdatePasswordRequest {
    private 'instance_id': string | undefined;
    public body?: ModifyInstancePasswordBody;
    public constructor(instanceId?: any) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdatePasswordRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withBody(body: ModifyInstancePasswordBody): UpdatePasswordRequest {
        this['body'] = body;
        return this;
    }
}