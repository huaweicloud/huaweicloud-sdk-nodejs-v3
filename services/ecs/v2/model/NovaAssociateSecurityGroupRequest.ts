import { NovaAssociateSecurityGroupRequestBody } from './NovaAssociateSecurityGroupRequestBody';


export class NovaAssociateSecurityGroupRequest {
    private 'server_id'?: string;
    public body?: NovaAssociateSecurityGroupRequestBody;
    public constructor(serverId?: string) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): NovaAssociateSecurityGroupRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withBody(body: NovaAssociateSecurityGroupRequestBody): NovaAssociateSecurityGroupRequest {
        this['body'] = body;
        return this;
    }
}