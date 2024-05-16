import { Tag } from './Tag';


export class CreateSqlJobRequestBody {
    public sql?: string;
    private 'engine_type'?: CreateSqlJobRequestBodyEngineTypeEnum | string;
    private 'current_catalog'?: string;
    public currentdb?: string;
    private 'queue_name'?: string;
    public conf?: Array<string>;
    public tags?: Array<Tag>;
    public constructor(sql?: string) { 
        this['sql'] = sql;
    }
    public withSql(sql: string): CreateSqlJobRequestBody {
        this['sql'] = sql;
        return this;
    }
    public withEngineType(engineType: CreateSqlJobRequestBodyEngineTypeEnum | string): CreateSqlJobRequestBody {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: CreateSqlJobRequestBodyEngineTypeEnum | string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): CreateSqlJobRequestBodyEngineTypeEnum | string | undefined {
        return this['engine_type'];
    }
    public withCurrentCatalog(currentCatalog: string): CreateSqlJobRequestBody {
        this['current_catalog'] = currentCatalog;
        return this;
    }
    public set currentCatalog(currentCatalog: string  | undefined) {
        this['current_catalog'] = currentCatalog;
    }
    public get currentCatalog(): string | undefined {
        return this['current_catalog'];
    }
    public withCurrentdb(currentdb: string): CreateSqlJobRequestBody {
        this['currentdb'] = currentdb;
        return this;
    }
    public withQueueName(queueName: string): CreateSqlJobRequestBody {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withConf(conf: Array<string>): CreateSqlJobRequestBody {
        this['conf'] = conf;
        return this;
    }
    public withTags(tags: Array<Tag>): CreateSqlJobRequestBody {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateSqlJobRequestBodyEngineTypeEnum {
    TRINO = 'trino',
    SPARK = 'spark'
}
