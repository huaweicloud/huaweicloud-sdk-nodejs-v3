

export class CreateGeoIpRuleRequestBody {
    public name?: string;
    public geoip: string;
    public white: number;
    public status?: number;
    public description?: string;
    public constructor(geoip?: any, white?: any) { 
        this['geoip'] = geoip;
        this['white'] = white;
    }
    public withName(name: string): CreateGeoIpRuleRequestBody {
        this['name'] = name;
        return this;
    }
    public withGeoip(geoip: string): CreateGeoIpRuleRequestBody {
        this['geoip'] = geoip;
        return this;
    }
    public withWhite(white: number): CreateGeoIpRuleRequestBody {
        this['white'] = white;
        return this;
    }
    public withStatus(status: number): CreateGeoIpRuleRequestBody {
        this['status'] = status;
        return this;
    }
    public withDescription(description: string): CreateGeoIpRuleRequestBody {
        this['description'] = description;
        return this;
    }
}