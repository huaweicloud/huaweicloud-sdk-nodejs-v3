import { UpdateWhitelistRequest } from './UpdateWhitelistRequest';


export class UpdateAuditWhitelistRequest {
    private 'instance_id'?: string;
    public id?: string;
    public body?: UpdateWhitelistRequest;
    public constructor(instanceId?: string, id?: string) { 
        this['instance_id'] = instanceId;
        this['id'] = id;
    }
    public withInstanceId(instanceId: string): UpdateAuditWhitelistRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withId(id: string): UpdateAuditWhitelistRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: UpdateWhitelistRequest): UpdateAuditWhitelistRequest {
        this['body'] = body;
        return this;
    }
}