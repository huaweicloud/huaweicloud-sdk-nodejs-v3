

export class ListInstancesRequest {
    private 'X-Language'?: string;
    public id?: string;
    public name?: string;
    public type?: ListInstancesRequestTypeEnum | string;
    private 'datastore_type'?: ListInstancesRequestDatastoreTypeEnum | string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    public offset?: number;
    public limit?: number;
    public tags?: Array<string>;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): ListInstancesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withId(id: string): ListInstancesRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListInstancesRequest {
        this['name'] = name;
        return this;
    }
    public withType(type: ListInstancesRequestTypeEnum | string): ListInstancesRequest {
        this['type'] = type;
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
    public withTags(tags: Array<string>): ListInstancesRequest {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListInstancesRequestTypeEnum {
    ENTERPRISE = 'Enterprise',
    HA = 'Ha'
}
/**
    * @export
    * @enum {string}
    */
export enum ListInstancesRequestDatastoreTypeEnum {
    GAUSSDB_FOR_OPENGAUSS = 'GaussDB(for openGauss)',
    GAUSSDB = 'GaussDB'
}
