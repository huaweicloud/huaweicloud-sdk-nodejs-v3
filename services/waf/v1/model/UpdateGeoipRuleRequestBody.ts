

export class UpdateGeoipRuleRequestBody {
    public name?: string;
    public description?: string;
    public geoip?: string;
    public white?: number;
    public constructor(geoip?: string, white?: number) { 
        this['geoip'] = geoip;
        this['white'] = white;
    }
    public withName(name: string): UpdateGeoipRuleRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateGeoipRuleRequestBody {
        this['description'] = description;
        return this;
    }
    public withGeoip(geoip: string): UpdateGeoipRuleRequestBody {
        this['geoip'] = geoip;
        return this;
    }
    public withWhite(white: number): UpdateGeoipRuleRequestBody {
        this['white'] = white;
        return this;
    }
}