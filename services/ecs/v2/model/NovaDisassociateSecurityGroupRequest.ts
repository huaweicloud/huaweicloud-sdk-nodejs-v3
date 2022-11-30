import { NovaDisassociateSecurityGroupRequestBody } from './NovaDisassociateSecurityGroupRequestBody';


export class NovaDisassociateSecurityGroupRequest {
    private 'server_id': string | undefined;
    public body?: NovaDisassociateSecurityGroupRequestBody;
    public constructor(serverId?: any) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): NovaDisassociateSecurityGroupRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId() {
        return this['server_id'];
    }
    public withBody(body: NovaDisassociateSecurityGroupRequestBody): NovaDisassociateSecurityGroupRequest {
        this['body'] = body;
        return this;
    }
}