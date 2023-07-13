

export class ListVpcsRequest {
    public limit?: number;
    public marker?: string;
    public id?: Array<string>;
    public name?: Array<string>;
    public description?: Array<string>;
    public cidr?: Array<string>;
    public constructor() { 
    }
    public withLimit(limit: number): ListVpcsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListVpcsRequest {
        this['marker'] = marker;
        return this;
    }
    public withId(id: Array<string>): ListVpcsRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: Array<string>): ListVpcsRequest {
        this['name'] = name;
        return this;
    }
    public withDescription(description: Array<string>): ListVpcsRequest {
        this['description'] = description;
        return this;
    }
    public withCidr(cidr: Array<string>): ListVpcsRequest {
        this['cidr'] = cidr;
        return this;
    }
}