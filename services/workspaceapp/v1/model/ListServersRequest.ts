

export class ListServersRequest {
    public offset?: number;
    public limit?: number;
    private 'server_group_id'?: string;
    private 'server_name'?: string;
    private 'machine_name'?: string;
    private 'ip_addr'?: string;
    private 'server_id'?: string;
    private 'maintain_status'?: string;
    private 'scaling_auto_create'?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListServersRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListServersRequest {
        this['limit'] = limit;
        return this;
    }
    public withServerGroupId(serverGroupId: string): ListServersRequest {
        this['server_group_id'] = serverGroupId;
        return this;
    }
    public set serverGroupId(serverGroupId: string  | undefined) {
        this['server_group_id'] = serverGroupId;
    }
    public get serverGroupId(): string | undefined {
        return this['server_group_id'];
    }
    public withServerName(serverName: string): ListServersRequest {
        this['server_name'] = serverName;
        return this;
    }
    public set serverName(serverName: string  | undefined) {
        this['server_name'] = serverName;
    }
    public get serverName(): string | undefined {
        return this['server_name'];
    }
    public withMachineName(machineName: string): ListServersRequest {
        this['machine_name'] = machineName;
        return this;
    }
    public set machineName(machineName: string  | undefined) {
        this['machine_name'] = machineName;
    }
    public get machineName(): string | undefined {
        return this['machine_name'];
    }
    public withIpAddr(ipAddr: string): ListServersRequest {
        this['ip_addr'] = ipAddr;
        return this;
    }
    public set ipAddr(ipAddr: string  | undefined) {
        this['ip_addr'] = ipAddr;
    }
    public get ipAddr(): string | undefined {
        return this['ip_addr'];
    }
    public withServerId(serverId: string): ListServersRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withMaintainStatus(maintainStatus: string): ListServersRequest {
        this['maintain_status'] = maintainStatus;
        return this;
    }
    public set maintainStatus(maintainStatus: string  | undefined) {
        this['maintain_status'] = maintainStatus;
    }
    public get maintainStatus(): string | undefined {
        return this['maintain_status'];
    }
    public withScalingAutoCreate(scalingAutoCreate: string): ListServersRequest {
        this['scaling_auto_create'] = scalingAutoCreate;
        return this;
    }
    public set scalingAutoCreate(scalingAutoCreate: string  | undefined) {
        this['scaling_auto_create'] = scalingAutoCreate;
    }
    public get scalingAutoCreate(): string | undefined {
        return this['scaling_auto_create'];
    }
}