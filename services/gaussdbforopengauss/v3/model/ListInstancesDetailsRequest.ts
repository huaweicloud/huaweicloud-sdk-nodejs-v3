

export class ListInstancesDetailsRequest {
    private 'X-Language'?: string;
    public id?: string;
    public name?: string;
    public type?: ListInstancesDetailsRequestTypeEnum | string;
    private 'datastore_type'?: ListInstancesDetailsRequestDatastoreTypeEnum | string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    public offset?: number;
    public limit?: number;
    public tags?: Array<string>;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): ListInstancesDetailsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withId(id: string): ListInstancesDetailsRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListInstancesDetailsRequest {
        this['name'] = name;
        return this;
    }
    public withType(type: ListInstancesDetailsRequestTypeEnum | string): ListInstancesDetailsRequest {
        this['type'] = type;
        return this;
    }
    public withDatastoreType(datastoreType: ListInstancesDetailsRequestDatastoreTypeEnum | string): ListInstancesDetailsRequest {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: ListInstancesDetailsRequestDatastoreTypeEnum | string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): ListInstancesDetailsRequestDatastoreTypeEnum | string | undefined {
        return this['datastore_type'];
    }
    public withVpcId(vpcId: string): ListInstancesDetailsRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): ListInstancesDetailsRequest {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withOffset(offset: number): ListInstancesDetailsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListInstancesDetailsRequest {
        this['limit'] = limit;
        return this;
    }
    public withTags(tags: Array<string>): ListInstancesDetailsRequest {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListInstancesDetailsRequestTypeEnum {
    ENTERPRISE = 'Enterprise',
    HA = 'Ha'
}
/**
    * @export
    * @enum {string}
    */
export enum ListInstancesDetailsRequestDatastoreTypeEnum {
    GAUSSDB = 'GaussDB'
}
