

export class ListHtapStorageTypeRequest {
    public database?: string;
    private 'version_name'?: string;
    private 'X-Language'?: string;
    public constructor(database?: string, versionName?: string) { 
        this['database'] = database;
        this['version_name'] = versionName;
    }
    public withDatabase(database: string): ListHtapStorageTypeRequest {
        this['database'] = database;
        return this;
    }
    public withVersionName(versionName: string): ListHtapStorageTypeRequest {
        this['version_name'] = versionName;
        return this;
    }
    public set versionName(versionName: string  | undefined) {
        this['version_name'] = versionName;
    }
    public get versionName(): string | undefined {
        return this['version_name'];
    }
    public withXLanguage(xLanguage: string): ListHtapStorageTypeRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
}