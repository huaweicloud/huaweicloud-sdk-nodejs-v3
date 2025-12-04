

export class ListInstancesRequest {
    public id?: string;
    public name?: string;
    public mode?: ListInstancesRequestModeEnum | string;
    private 'datastore_type'?: ListInstancesRequestDatastoreTypeEnum | string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    public offset?: number;
    public limit?: number;
    public tags?: string;
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
    public withMode(mode: ListInstancesRequestModeEnum | string): ListInstancesRequest {
        this['mode'] = mode;
        return this;
    }
    public withDatastoreType(datastoreType: ListInstancesRequestDatastoreTypeEnum | string): ListInstancesRequest {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: ListInstancesRequestDatastoreTypeEnum | string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): ListInstancesRequestDatastoreTypeEnum | string | undefined {
        return this['datastore_type'];
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
    public withTags(tags: string): ListInstancesRequest {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListInstancesRequestModeEnum {
    SHARDING = 'Sharding',
    REPLICASET = 'ReplicaSet',
    SINGLE = 'Single'
}
/**
    * @export
    * @enum {string}
    */
export enum ListInstancesRequestDatastoreTypeEnum {
    DDS_COMMUNITY = 'DDS-Community',
    DDS_ENHANCED = 'DDS-Enhanced'
}
