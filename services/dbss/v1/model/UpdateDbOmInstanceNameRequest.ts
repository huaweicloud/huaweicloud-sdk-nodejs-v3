import { ChangeNameRequest } from './ChangeNameRequest';


export class UpdateDbOmInstanceNameRequest {
    private 'instance_id'?: string;
    public body?: ChangeNameRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateDbOmInstanceNameRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ChangeNameRequest): UpdateDbOmInstanceNameRequest {
        this['body'] = body;
        return this;
    }
}