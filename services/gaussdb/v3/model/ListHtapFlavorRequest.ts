

export class ListHtapFlavorRequest {
    private 'engine_name'?: string;
    private 'availability_zone_mode'?: string;
    private 'spec_code'?: string;
    private 'X-Language'?: string;
    private 'version_name'?: string;
    public constructor(engineName?: string) { 
        this['engine_name'] = engineName;
    }
    public withEngineName(engineName: string): ListHtapFlavorRequest {
        this['engine_name'] = engineName;
        return this;
    }
    public set engineName(engineName: string  | undefined) {
        this['engine_name'] = engineName;
    }
    public get engineName(): string | undefined {
        return this['engine_name'];
    }
    public withAvailabilityZoneMode(availabilityZoneMode: string): ListHtapFlavorRequest {
        this['availability_zone_mode'] = availabilityZoneMode;
        return this;
    }
    public set availabilityZoneMode(availabilityZoneMode: string  | undefined) {
        this['availability_zone_mode'] = availabilityZoneMode;
    }
    public get availabilityZoneMode(): string | undefined {
        return this['availability_zone_mode'];
    }
    public withSpecCode(specCode: string): ListHtapFlavorRequest {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
    public withXLanguage(xLanguage: string): ListHtapFlavorRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withVersionName(versionName: string): ListHtapFlavorRequest {
        this['version_name'] = versionName;
        return this;
    }
    public set versionName(versionName: string  | undefined) {
        this['version_name'] = versionName;
    }
    public get versionName(): string | undefined {
        return this['version_name'];
    }
}