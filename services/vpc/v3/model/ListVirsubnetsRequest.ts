

export class ListVirsubnetsRequest {
    public limit?: number;
    public marker?: string;
    public id?: Array<string>;
    public name?: Array<string>;
    private 'vpc_id'?: Array<string>;
    public status?: string;
    public scope?: Array<string>;
    private 'zone_id'?: Array<string>;
    public description?: Array<string>;
    public constructor() { 
    }
    public withLimit(limit: number): ListVirsubnetsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListVirsubnetsRequest {
        this['marker'] = marker;
        return this;
    }
    public withId(id: Array<string>): ListVirsubnetsRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: Array<string>): ListVirsubnetsRequest {
        this['name'] = name;
        return this;
    }
    public withVpcId(vpcId: Array<string>): ListVirsubnetsRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: Array<string>  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): Array<string> | undefined {
        return this['vpc_id'];
    }
    public withStatus(status: string): ListVirsubnetsRequest {
        this['status'] = status;
        return this;
    }
    public withScope(scope: Array<string>): ListVirsubnetsRequest {
        this['scope'] = scope;
        return this;
    }
    public withZoneId(zoneId: Array<string>): ListVirsubnetsRequest {
        this['zone_id'] = zoneId;
        return this;
    }
    public set zoneId(zoneId: Array<string>  | undefined) {
        this['zone_id'] = zoneId;
    }
    public get zoneId(): Array<string> | undefined {
        return this['zone_id'];
    }
    public withDescription(description: Array<string>): ListVirsubnetsRequest {
        this['description'] = description;
        return this;
    }
}