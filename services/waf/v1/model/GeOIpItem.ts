

export class GeOIpItem {
    public id?: string;
    public policyid?: string;
    public name?: string;
    public geoip?: string;
    public white?: number;
    public status?: number;
    public timestamp?: number;
    public constructor() { 
    }
    public withId(id: string): GeOIpItem {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): GeOIpItem {
        this['policyid'] = policyid;
        return this;
    }
    public withName(name: string): GeOIpItem {
        this['name'] = name;
        return this;
    }
    public withGeoip(geoip: string): GeOIpItem {
        this['geoip'] = geoip;
        return this;
    }
    public withWhite(white: number): GeOIpItem {
        this['white'] = white;
        return this;
    }
    public withStatus(status: number): GeOIpItem {
        this['status'] = status;
        return this;
    }
    public withTimestamp(timestamp: number): GeOIpItem {
        this['timestamp'] = timestamp;
        return this;
    }
}