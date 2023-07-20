import { DropDatabaseV3Req } from './DropDatabaseV3Req';


export class DeleteSqlserverDatabaseRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    private 'db_name'?: string;
    public body?: DropDatabaseV3Req;
    public constructor(instanceId?: string, dbName?: string) { 
        this['instance_id'] = instanceId;
        this['db_name'] = dbName;
    }
    public withXLanguage(xLanguage: string): DeleteSqlserverDatabaseRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): DeleteSqlserverDatabaseRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDbName(dbName: string): DeleteSqlserverDatabaseRequest {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withBody(body: DropDatabaseV3Req): DeleteSqlserverDatabaseRequest {
        this['body'] = body;
        return this;
    }
}