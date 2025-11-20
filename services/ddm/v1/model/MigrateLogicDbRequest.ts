import { MigrateLogicDbOpenReq } from './MigrateLogicDbOpenReq';


export class MigrateLogicDbRequest {
    private 'instance_id'?: string;
    private 'db_name'?: string;
    public body?: MigrateLogicDbOpenReq;
    public constructor(instanceId?: string, dbName?: string) { 
        this['instance_id'] = instanceId;
        this['db_name'] = dbName;
    }
    public withInstanceId(instanceId: string): MigrateLogicDbRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDbName(dbName: string): MigrateLogicDbRequest {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withBody(body: MigrateLogicDbOpenReq): MigrateLogicDbRequest {
        this['body'] = body;
        return this;
    }
}