

export class ListEndpointsRequest {
    public offset?: number;
    public limit?: number;
    public sort?: string;
    public type?: ListEndpointsRequestTypeEnum | string;
    public name?: string;
    private 'vpc_id'?: string;
    private 'fuzzy_name'?: string;
    private 'subnet_id'?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListEndpointsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListEndpointsRequest {
        this['limit'] = limit;
        return this;
    }
    public withSort(sort: string): ListEndpointsRequest {
        this['sort'] = sort;
        return this;
    }
    public withType(type: ListEndpointsRequestTypeEnum | string): ListEndpointsRequest {
        this['type'] = type;
        return this;
    }
    public withName(name: string): ListEndpointsRequest {
        this['name'] = name;
        return this;
    }
    public withVpcId(vpcId: string): ListEndpointsRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withFuzzyName(fuzzyName: string): ListEndpointsRequest {
        this['fuzzy_name'] = fuzzyName;
        return this;
    }
    public set fuzzyName(fuzzyName: string  | undefined) {
        this['fuzzy_name'] = fuzzyName;
    }
    public get fuzzyName(): string | undefined {
        return this['fuzzy_name'];
    }
    public withSubnetId(subnetId: string): ListEndpointsRequest {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListEndpointsRequestTypeEnum {
    PRIVATE = 'PRIVATE',
    PUBLIC = 'PUBLIC'
}
