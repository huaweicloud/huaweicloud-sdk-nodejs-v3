

export class ListDatabaseInstancesRequest {
    private 'X-Language'?: string;
    public id?: string;
    public name?: string;
    public type?: ListDatabaseInstancesRequestTypeEnum | string;
    private 'datastore_type'?: ListDatabaseInstancesRequestDatastoreTypeEnum | string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    public offset?: number;
    public limit?: number;
    public tags?: Array<string>;
    private 'charge_mode'?: ListDatabaseInstancesRequestChargeModeEnum | string;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): ListDatabaseInstancesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withId(id: string): ListDatabaseInstancesRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListDatabaseInstancesRequest {
        this['name'] = name;
        return this;
    }
    public withType(type: ListDatabaseInstancesRequestTypeEnum | string): ListDatabaseInstancesRequest {
        this['type'] = type;
        return this;
    }
    public withDatastoreType(datastoreType: ListDatabaseInstancesRequestDatastoreTypeEnum | string): ListDatabaseInstancesRequest {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: ListDatabaseInstancesRequestDatastoreTypeEnum | string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): ListDatabaseInstancesRequestDatastoreTypeEnum | string | undefined {
        return this['datastore_type'];
    }
    public withVpcId(vpcId: string): ListDatabaseInstancesRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): ListDatabaseInstancesRequest {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withOffset(offset: number): ListDatabaseInstancesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDatabaseInstancesRequest {
        this['limit'] = limit;
        return this;
    }
    public withTags(tags: Array<string>): ListDatabaseInstancesRequest {
        this['tags'] = tags;
        return this;
    }
    public withChargeMode(chargeMode: ListDatabaseInstancesRequestChargeModeEnum | string): ListDatabaseInstancesRequest {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: ListDatabaseInstancesRequestChargeModeEnum | string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): ListDatabaseInstancesRequestChargeModeEnum | string | undefined {
        return this['charge_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListDatabaseInstancesRequestTypeEnum {
    ENTERPRISE = 'Enterprise',
    HA = 'Ha'
}
/**
    * @export
    * @enum {string}
    */
export enum ListDatabaseInstancesRequestDatastoreTypeEnum {
    GAUSSDB = 'GaussDB'
}
/**
    * @export
    * @enum {string}
    */
export enum ListDatabaseInstancesRequestChargeModeEnum {
    POSTPAID = 'postPaid',
    PREPAID = 'prePaid'
}
