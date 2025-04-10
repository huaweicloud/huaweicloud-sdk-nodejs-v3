

export class ListInstancesRequest {
    public id?: string;
    public name?: string;
    private 'datastore_type'?: string;
    public mode?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withId(id: string): ListInstancesRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListInstancesRequest {
        this['name'] = name;
        return this;
    }
    public withDatastoreType(datastoreType: string): ListInstancesRequest {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): string | undefined {
        return this['datastore_type'];
    }
    public withMode(mode: string): ListInstancesRequest {
        this['mode'] = mode;
        return this;
    }
    public withVpcId(vpcId: string): ListInstancesRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): ListInstancesRequest {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withOffset(offset: number): ListInstancesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListInstancesRequest {
        this['limit'] = limit;
        return this;
    }
}