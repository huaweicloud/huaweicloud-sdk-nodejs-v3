

export class DeleteServerGroupRequest {
    private 'server_group_id': string | undefined;
    public constructor(serverGroupId?: any) { 
        this['server_group_id'] = serverGroupId;
    }
    public withServerGroupId(serverGroupId: string): DeleteServerGroupRequest {
        this['server_group_id'] = serverGroupId;
        return this;
    }
    public set serverGroupId(serverGroupId: string | undefined) {
        this['server_group_id'] = serverGroupId;
    }
    public get serverGroupId() {
        return this['server_group_id'];
    }
}