import { CreateServerGroupOption } from './CreateServerGroupOption';


export class CreateServerGroupRequestBody {
    private 'server_group'?: CreateServerGroupOption;
    public constructor(serverGroup?: CreateServerGroupOption) { 
        this['server_group'] = serverGroup;
    }
    public withServerGroup(serverGroup: CreateServerGroupOption): CreateServerGroupRequestBody {
        this['server_group'] = serverGroup;
        return this;
    }
    public set serverGroup(serverGroup: CreateServerGroupOption  | undefined) {
        this['server_group'] = serverGroup;
    }
    public get serverGroup(): CreateServerGroupOption | undefined {
        return this['server_group'];
    }
}