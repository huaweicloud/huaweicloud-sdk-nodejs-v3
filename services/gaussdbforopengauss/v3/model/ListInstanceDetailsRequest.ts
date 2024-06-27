

export class ListInstanceDetailsRequest {
    private 'X-Language'?: string;
    public id?: string;
    public name?: string;
    public type?: ListInstanceDetailsRequestTypeEnum | string;
    private 'datastore_type'?: ListInstanceDetailsRequestDatastoreTypeEnum | string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    public offset?: number;
    public limit?: number;
    public tags?: Array<string>;
    private 'charge_mode'?: ListInstanceDetailsRequestChargeModeEnum | string;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): ListInstanceDetailsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withId(id: string): ListInstanceDetailsRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListInstanceDetailsRequest {
        this['name'] = name;
        return this;
    }
    public withType(type: ListInstanceDetailsRequestTypeEnum | string): ListInstanceDetailsRequest {
        this['type'] = type;
        return this;
    }
    public withDatastoreType(datastoreType: ListInstanceDetailsRequestDatastoreTypeEnum | string): ListInstanceDetailsRequest {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: ListInstanceDetailsRequestDatastoreTypeEnum | string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): ListInstanceDetailsRequestDatastoreTypeEnum | string | undefined {
        return this['datastore_type'];
    }
    public withVpcId(vpcId: string): ListInstanceDetailsRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): ListInstanceDetailsRequest {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withOffset(offset: number): ListInstanceDetailsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListInstanceDetailsRequest {
        this['limit'] = limit;
        return this;
    }
    public withTags(tags: Array<string>): ListInstanceDetailsRequest {
        this['tags'] = tags;
        return this;
    }
    public withChargeMode(chargeMode: ListInstanceDetailsRequestChargeModeEnum | string): ListInstanceDetailsRequest {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: ListInstanceDetailsRequestChargeModeEnum | string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): ListInstanceDetailsRequestChargeModeEnum | string | undefined {
        return this['charge_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListInstanceDetailsRequestTypeEnum {
    ENTERPRISE = 'Enterprise',
    HA = 'Ha'
}
/**
    * @export
    * @enum {string}
    */
export enum ListInstanceDetailsRequestDatastoreTypeEnum {
    GAUSSDB = 'GaussDB'
}
/**
    * @export
    * @enum {string}
    */
export enum ListInstanceDetailsRequestChargeModeEnum {
    POSTPAID = 'postPaid',
    PREPAID = 'prePaid'
}
