

export class ExtensionsResponse {
    public name?: string;
    private 'database_name'?: string;
    public version?: string;
    private 'version_update'?: string;
    private 'shared_preload_libraries'?: string;
    public created?: boolean;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): ExtensionsResponse {
        this['name'] = name;
        return this;
    }
    public withDatabaseName(databaseName: string): ExtensionsResponse {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withVersion(version: string): ExtensionsResponse {
        this['version'] = version;
        return this;
    }
    public withVersionUpdate(versionUpdate: string): ExtensionsResponse {
        this['version_update'] = versionUpdate;
        return this;
    }
    public set versionUpdate(versionUpdate: string  | undefined) {
        this['version_update'] = versionUpdate;
    }
    public get versionUpdate(): string | undefined {
        return this['version_update'];
    }
    public withSharedPreloadLibraries(sharedPreloadLibraries: string): ExtensionsResponse {
        this['shared_preload_libraries'] = sharedPreloadLibraries;
        return this;
    }
    public set sharedPreloadLibraries(sharedPreloadLibraries: string  | undefined) {
        this['shared_preload_libraries'] = sharedPreloadLibraries;
    }
    public get sharedPreloadLibraries(): string | undefined {
        return this['shared_preload_libraries'];
    }
    public withCreated(created: boolean): ExtensionsResponse {
        this['created'] = created;
        return this;
    }
    public withDescription(description: string): ExtensionsResponse {
        this['description'] = description;
        return this;
    }
}