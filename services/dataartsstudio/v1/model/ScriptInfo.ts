

export class ScriptInfo {
    public name?: string;
    public type?: ScriptInfoTypeEnum | string;
    public directory?: string;
    public id?: string;
    private 'create_user'?: string;
    private 'connection_name'?: string;
    public database?: string;
    private 'queue_name'?: string;
    public configuration?: object;
    public description?: string;
    public owner?: string;
    public version?: number;
    public constructor() { 
    }
    public withName(name: string): ScriptInfo {
        this['name'] = name;
        return this;
    }
    public withType(type: ScriptInfoTypeEnum | string): ScriptInfo {
        this['type'] = type;
        return this;
    }
    public withDirectory(directory: string): ScriptInfo {
        this['directory'] = directory;
        return this;
    }
    public withId(id: string): ScriptInfo {
        this['id'] = id;
        return this;
    }
    public withCreateUser(createUser: string): ScriptInfo {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withConnectionName(connectionName: string): ScriptInfo {
        this['connection_name'] = connectionName;
        return this;
    }
    public set connectionName(connectionName: string  | undefined) {
        this['connection_name'] = connectionName;
    }
    public get connectionName(): string | undefined {
        return this['connection_name'];
    }
    public withDatabase(database: string): ScriptInfo {
        this['database'] = database;
        return this;
    }
    public withQueueName(queueName: string): ScriptInfo {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withConfiguration(configuration: object): ScriptInfo {
        this['configuration'] = configuration;
        return this;
    }
    public withDescription(description: string): ScriptInfo {
        this['description'] = description;
        return this;
    }
    public withOwner(owner: string): ScriptInfo {
        this['owner'] = owner;
        return this;
    }
    public withVersion(version: number): ScriptInfo {
        this['version'] = version;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ScriptInfoTypeEnum {
    FLINKSQL = 'FlinkSQL',
    DLISQL = 'DLISQL',
    SPARKSQL = 'SparkSQL',
    HIVESQL = 'HiveSQL',
    DWSSQL = 'DWSSQL',
    RDSSQL = 'RDSSQL',
    SHELL = 'Shell',
    PYTHON = 'PYTHON',
    PRESTO = 'PRESTO',
    CLICKHOUSESQL = 'ClickHouseSQL',
    HETUENGINESQL = 'HetuEngineSQL',
    IMPALASQL = 'ImpalaSQL',
    SPARKPYTHON = 'SparkPython'
}
