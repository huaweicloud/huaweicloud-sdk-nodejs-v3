

export class ListAddressGroupRequest {
    public limit?: number;
    public marker?: string;
    public id?: Array<string>;
    public name?: Array<string>;
    private 'ip_version'?: number | undefined;
    public description?: Array<string>;
    public constructor() { 
    }
    public withLimit(limit: number): ListAddressGroupRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListAddressGroupRequest {
        this['marker'] = marker;
        return this;
    }
    public withId(id: Array<string>): ListAddressGroupRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: Array<string>): ListAddressGroupRequest {
        this['name'] = name;
        return this;
    }
    public withIpVersion(ipVersion: number): ListAddressGroupRequest {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: number | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion() {
        return this['ip_version'];
    }
    public withDescription(description: Array<string>): ListAddressGroupRequest {
        this['description'] = description;
        return this;
    }
}