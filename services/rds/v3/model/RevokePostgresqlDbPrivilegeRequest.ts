import { RevokePostgresqlDbPrivilegeRequestBody } from './RevokePostgresqlDbPrivilegeRequestBody';


export class RevokePostgresqlDbPrivilegeRequest {
    private 'instance_id'?: string;
    public body?: RevokePostgresqlDbPrivilegeRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): RevokePostgresqlDbPrivilegeRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: RevokePostgresqlDbPrivilegeRequestBody): RevokePostgresqlDbPrivilegeRequest {
        this['body'] = body;
        return this;
    }
}