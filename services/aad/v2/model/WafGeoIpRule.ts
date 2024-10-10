

export class WafGeoIpRule {
    public geoip?: string;
    public id?: string;
    public name?: string;
    private 'overseas_type'?: number;
    public timestamp?: number;
    public white?: number;
    public constructor() { 
    }
    public withGeoip(geoip: string): WafGeoIpRule {
        this['geoip'] = geoip;
        return this;
    }
    public withId(id: string): WafGeoIpRule {
        this['id'] = id;
        return this;
    }
    public withName(name: string): WafGeoIpRule {
        this['name'] = name;
        return this;
    }
    public withOverseasType(overseasType: number): WafGeoIpRule {
        this['overseas_type'] = overseasType;
        return this;
    }
    public set overseasType(overseasType: number  | undefined) {
        this['overseas_type'] = overseasType;
    }
    public get overseasType(): number | undefined {
        return this['overseas_type'];
    }
    public withTimestamp(timestamp: number): WafGeoIpRule {
        this['timestamp'] = timestamp;
        return this;
    }
    public withWhite(white: number): WafGeoIpRule {
        this['white'] = white;
        return this;
    }
}