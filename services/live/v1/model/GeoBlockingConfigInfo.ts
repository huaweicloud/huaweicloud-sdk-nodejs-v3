

export class GeoBlockingConfigInfo {
    public app?: string;
    private 'area_whitelist'?: Array<string>;
    public constructor(app?: string) { 
        this['app'] = app;
    }
    public withApp(app: string): GeoBlockingConfigInfo {
        this['app'] = app;
        return this;
    }
    public withAreaWhitelist(areaWhitelist: Array<string>): GeoBlockingConfigInfo {
        this['area_whitelist'] = areaWhitelist;
        return this;
    }
    public set areaWhitelist(areaWhitelist: Array<string>  | undefined) {
        this['area_whitelist'] = areaWhitelist;
    }
    public get areaWhitelist(): Array<string> | undefined {
        return this['area_whitelist'];
    }
}