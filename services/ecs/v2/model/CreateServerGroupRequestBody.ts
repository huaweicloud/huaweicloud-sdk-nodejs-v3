import { CreateServerGroupOption } from './CreateServerGroupOption';


export class CreateServerGroupRequestBody {
    private 'server_group': CreateServerGroupOption | undefined;
    public constructor(serverGroup?: any) { 
        this['server_group'] = serverGroup;
    }
    public withServerGroup(serverGroup: CreateServerGroupOption): CreateServerGroupRequestBody {
        this['server_group'] = serverGroup;
        return this;
    }
    public set serverGroup(serverGroup: CreateServerGroupOption | undefined) {
        this['server_group'] = serverGroup;
    }
    public get serverGroup() {
        return this['server_group'];
    }
}