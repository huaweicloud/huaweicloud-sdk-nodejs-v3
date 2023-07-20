

export class ExtensionRequest {
    private 'database_name'?: string;
    private 'extension_name'?: string;
    public constructor(databaseName?: string, extensionName?: string) { 
        this['database_name'] = databaseName;
        this['extension_name'] = extensionName;
    }
    public withDatabaseName(databaseName: string): ExtensionRequest {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withExtensionName(extensionName: string): ExtensionRequest {
        this['extension_name'] = extensionName;
        return this;
    }
    public set extensionName(extensionName: string  | undefined) {
        this['extension_name'] = extensionName;
    }
    public get extensionName(): string | undefined {
        return this['extension_name'];
    }
}