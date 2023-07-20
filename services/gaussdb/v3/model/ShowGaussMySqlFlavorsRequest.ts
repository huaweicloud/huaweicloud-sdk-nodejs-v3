

export class ShowGaussMySqlFlavorsRequest {
    private 'X-Language'?: string;
    private 'database_name'?: string;
    private 'version_name'?: string;
    private 'availability_zone_mode'?: string;
    private 'spec_code'?: string;
    public constructor(databaseName?: string, availabilityZoneMode?: string) { 
        this['database_name'] = databaseName;
        this['availability_zone_mode'] = availabilityZoneMode;
    }
    public withXLanguage(xLanguage: string): ShowGaussMySqlFlavorsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withDatabaseName(databaseName: string): ShowGaussMySqlFlavorsRequest {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withVersionName(versionName: string): ShowGaussMySqlFlavorsRequest {
        this['version_name'] = versionName;
        return this;
    }
    public set versionName(versionName: string  | undefined) {
        this['version_name'] = versionName;
    }
    public get versionName(): string | undefined {
        return this['version_name'];
    }
    public withAvailabilityZoneMode(availabilityZoneMode: string): ShowGaussMySqlFlavorsRequest {
        this['availability_zone_mode'] = availabilityZoneMode;
        return this;
    }
    public set availabilityZoneMode(availabilityZoneMode: string  | undefined) {
        this['availability_zone_mode'] = availabilityZoneMode;
    }
    public get availabilityZoneMode(): string | undefined {
        return this['availability_zone_mode'];
    }
    public withSpecCode(specCode: string): ShowGaussMySqlFlavorsRequest {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
}