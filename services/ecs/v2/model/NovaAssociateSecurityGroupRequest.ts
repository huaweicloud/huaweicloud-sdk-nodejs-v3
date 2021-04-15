import { NovaAssociateSecurityGroupRequestBody } from './NovaAssociateSecurityGroupRequestBody';


export class NovaAssociateSecurityGroupRequest {
    private 'server_id': string | undefined;
    public body?: NovaAssociateSecurityGroupRequestBody;
    public constructor(serverId?: any) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): NovaAssociateSecurityGroupRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId() {
        return this['server_id'];
    }
    public withBody(body: NovaAssociateSecurityGroupRequestBody): NovaAssociateSecurityGroupRequest {
        this['body'] = body;
        return this;
    }
}