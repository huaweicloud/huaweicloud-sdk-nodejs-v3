

export class ServerGroupItem {
    private 'server_group_id'?: string;
    private 'server_group_name'?: string;
    private 'host_num'?: number;
    public constructor() { 
    }
    public withServerGroupId(serverGroupId: string): ServerGroupItem {
        this['server_group_id'] = serverGroupId;
        return this;
    }
    public set serverGroupId(serverGroupId: string  | undefined) {
        this['server_group_id'] = serverGroupId;
    }
    public get serverGroupId(): string | undefined {
        return this['server_group_id'];
    }
    public withServerGroupName(serverGroupName: string): ServerGroupItem {
        this['server_group_name'] = serverGroupName;
        return this;
    }
    public set serverGroupName(serverGroupName: string  | undefined) {
        this['server_group_name'] = serverGroupName;
    }
    public get serverGroupName(): string | undefined {
        return this['server_group_name'];
    }
    public withHostNum(hostNum: number): ServerGroupItem {
        this['host_num'] = hostNum;
        return this;
    }
    public set hostNum(hostNum: number  | undefined) {
        this['host_num'] = hostNum;
    }
    public get hostNum(): number | undefined {
        return this['host_num'];
    }
}