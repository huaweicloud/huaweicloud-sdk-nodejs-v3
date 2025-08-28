

export class EnlargeRequest {
    private 'flavor_id'?: string;
    private 'node_number'?: number;
    private 'group_id'?: string;
    private 'is_auto_pay'?: boolean;
    private 'available_zones'?: Array<string>;
    public constructor(flavorId?: string, nodeNumber?: number) { 
        this['flavor_id'] = flavorId;
        this['node_number'] = nodeNumber;
    }
    public withFlavorId(flavorId: string): EnlargeRequest {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: string  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): string | undefined {
        return this['flavor_id'];
    }
    public withNodeNumber(nodeNumber: number): EnlargeRequest {
        this['node_number'] = nodeNumber;
        return this;
    }
    public set nodeNumber(nodeNumber: number  | undefined) {
        this['node_number'] = nodeNumber;
    }
    public get nodeNumber(): number | undefined {
        return this['node_number'];
    }
    public withGroupId(groupId: string): EnlargeRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withIsAutoPay(isAutoPay: boolean): EnlargeRequest {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: boolean  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): boolean | undefined {
        return this['is_auto_pay'];
    }
    public withAvailableZones(availableZones: Array<string>): EnlargeRequest {
        this['available_zones'] = availableZones;
        return this;
    }
    public set availableZones(availableZones: Array<string>  | undefined) {
        this['available_zones'] = availableZones;
    }
    public get availableZones(): Array<string> | undefined {
        return this['available_zones'];
    }
}