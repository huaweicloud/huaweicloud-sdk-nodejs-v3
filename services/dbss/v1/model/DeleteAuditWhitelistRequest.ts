import { WhitelistBatchDeleteRequest } from './WhitelistBatchDeleteRequest';


export class DeleteAuditWhitelistRequest {
    private 'instance_id'?: string;
    public body?: WhitelistBatchDeleteRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): DeleteAuditWhitelistRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: WhitelistBatchDeleteRequest): DeleteAuditWhitelistRequest {
        this['body'] = body;
        return this;
    }
}