import { RedisPriorityTable } from './RedisPriorityTable';


export class RedisPriorityConf {
    private 'db_name'?: string;
    public priority?: Array<RedisPriorityTable>;
    public constructor() { 
    }
    public withDbName(dbName: string): RedisPriorityConf {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withPriority(priority: Array<RedisPriorityTable>): RedisPriorityConf {
        this['priority'] = priority;
        return this;
    }
}