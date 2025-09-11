import { AddWhitelistRequest } from './AddWhitelistRequest';


export class BatchAddAuditWhitelistRequest {
    private 'instance_id'?: string;
    public body?: AddWhitelistRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): BatchAddAuditWhitelistRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: AddWhitelistRequest): BatchAddAuditWhitelistRequest {
        this['body'] = body;
        return this;
    }
}