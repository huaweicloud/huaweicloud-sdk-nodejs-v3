

export class ListMembersRequest {
    private 'pool_id'?: string;
    public limit?: number;
    public marker?: string;
    private 'page_reverse'?: boolean;
    public id?: string;
    public name?: string;
    public address?: string;
    private 'protocol_port'?: number;
    private 'subnet_id'?: string;
    private 'admin_state_up'?: boolean;
    public weight?: number;
    public constructor(poolId?: string) { 
        this['pool_id'] = poolId;
    }
    public withPoolId(poolId: string): ListMembersRequest {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withLimit(limit: number): ListMembersRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListMembersRequest {
        this['marker'] = marker;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListMembersRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean  | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse(): boolean | undefined {
        return this['page_reverse'];
    }
    public withId(id: string): ListMembersRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListMembersRequest {
        this['name'] = name;
        return this;
    }
    public withAddress(address: string): ListMembersRequest {
        this['address'] = address;
        return this;
    }
    public withProtocolPort(protocolPort: number): ListMembersRequest {
        this['protocol_port'] = protocolPort;
        return this;
    }
    public set protocolPort(protocolPort: number  | undefined) {
        this['protocol_port'] = protocolPort;
    }
    public get protocolPort(): number | undefined {
        return this['protocol_port'];
    }
    public withSubnetId(subnetId: string): ListMembersRequest {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withAdminStateUp(adminStateUp: boolean): ListMembersRequest {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withWeight(weight: number): ListMembersRequest {
        this['weight'] = weight;
        return this;
    }
}