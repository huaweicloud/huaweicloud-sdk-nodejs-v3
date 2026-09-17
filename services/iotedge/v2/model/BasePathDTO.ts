

export class BasePathDTO {
    private 'log_base_path'?: string;
    private 'config_base_path'?: string;
    private 'db_base_path'?: string;
    public constructor() { 
    }
    public withLogBasePath(logBasePath: string): BasePathDTO {
        this['log_base_path'] = logBasePath;
        return this;
    }
    public set logBasePath(logBasePath: string  | undefined) {
        this['log_base_path'] = logBasePath;
    }
    public get logBasePath(): string | undefined {
        return this['log_base_path'];
    }
    public withConfigBasePath(configBasePath: string): BasePathDTO {
        this['config_base_path'] = configBasePath;
        return this;
    }
    public set configBasePath(configBasePath: string  | undefined) {
        this['config_base_path'] = configBasePath;
    }
    public get configBasePath(): string | undefined {
        return this['config_base_path'];
    }
    public withDbBasePath(dbBasePath: string): BasePathDTO {
        this['db_base_path'] = dbBasePath;
        return this;
    }
    public set dbBasePath(dbBasePath: string  | undefined) {
        this['db_base_path'] = dbBasePath;
    }
    public get dbBasePath(): string | undefined {
        return this['db_base_path'];
    }
}