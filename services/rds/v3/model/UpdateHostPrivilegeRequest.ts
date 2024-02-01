import { SetHostPrivilegeRequestV3 } from './SetHostPrivilegeRequestV3';


export class UpdateHostPrivilegeRequest {
    private 'instance_id'?: string;
    public body?: SetHostPrivilegeRequestV3;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateHostPrivilegeRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: SetHostPrivilegeRequestV3): UpdateHostPrivilegeRequest {
        this['body'] = body;
        return this;
    }
}