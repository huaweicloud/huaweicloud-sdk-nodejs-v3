

export class ListIpsWhitelistsRequest {
    private 'project_id'?: string;
    private 'fw_instance_id'?: string;
    private 'source_address'?: string;
    private 'dest_address'?: string;
    public name?: string;
    public limit?: number;
    public offset?: number;
    public constructor(projectId?: string, fwInstanceId?: string, limit?: number, offset?: number) { 
        this['project_id'] = projectId;
        this['fw_instance_id'] = fwInstanceId;
        this['limit'] = limit;
        this['offset'] = offset;
    }
    public withProjectId(projectId: string): ListIpsWhitelistsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): ListIpsWhitelistsRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withSourceAddress(sourceAddress: string): ListIpsWhitelistsRequest {
        this['source_address'] = sourceAddress;
        return this;
    }
    public set sourceAddress(sourceAddress: string  | undefined) {
        this['source_address'] = sourceAddress;
    }
    public get sourceAddress(): string | undefined {
        return this['source_address'];
    }
    public withDestAddress(destAddress: string): ListIpsWhitelistsRequest {
        this['dest_address'] = destAddress;
        return this;
    }
    public set destAddress(destAddress: string  | undefined) {
        this['dest_address'] = destAddress;
    }
    public get destAddress(): string | undefined {
        return this['dest_address'];
    }
    public withName(name: string): ListIpsWhitelistsRequest {
        this['name'] = name;
        return this;
    }
    public withLimit(limit: number): ListIpsWhitelistsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListIpsWhitelistsRequest {
        this['offset'] = offset;
        return this;
    }
}