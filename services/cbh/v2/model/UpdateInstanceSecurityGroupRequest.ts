import { ChangeInstanceSecurityGroups } from './ChangeInstanceSecurityGroups';


export class UpdateInstanceSecurityGroupRequest {
    private 'server_id'?: string;
    public body?: ChangeInstanceSecurityGroups;
    public constructor(serverId?: string) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): UpdateInstanceSecurityGroupRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withBody(body: ChangeInstanceSecurityGroups): UpdateInstanceSecurityGroupRequest {
        this['body'] = body;
        return this;
    }
}