

export class WafPolicyOptions {
    public cc?: boolean;
    public custom?: boolean;
    public geoip?: boolean;
    public whiteblackip?: boolean;
    private 'modulex_enabled'?: boolean;
    public constructor() { 
    }
    public withCc(cc: boolean): WafPolicyOptions {
        this['cc'] = cc;
        return this;
    }
    public withCustom(custom: boolean): WafPolicyOptions {
        this['custom'] = custom;
        return this;
    }
    public withGeoip(geoip: boolean): WafPolicyOptions {
        this['geoip'] = geoip;
        return this;
    }
    public withWhiteblackip(whiteblackip: boolean): WafPolicyOptions {
        this['whiteblackip'] = whiteblackip;
        return this;
    }
    public withModulexEnabled(modulexEnabled: boolean): WafPolicyOptions {
        this['modulex_enabled'] = modulexEnabled;
        return this;
    }
    public set modulexEnabled(modulexEnabled: boolean  | undefined) {
        this['modulex_enabled'] = modulexEnabled;
    }
    public get modulexEnabled(): boolean | undefined {
        return this['modulex_enabled'];
    }
}