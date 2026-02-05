

export class ListSqlBlackRequest {
    private 'instance_id'?: string;
    private 'logic_db_name'?: string;
    public constructor(instanceId?: string, logicDbName?: string) { 
        this['instance_id'] = instanceId;
        this['logic_db_name'] = logicDbName;
    }
    public withInstanceId(instanceId: string): ListSqlBlackRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withLogicDbName(logicDbName: string): ListSqlBlackRequest {
        this['logic_db_name'] = logicDbName;
        return this;
    }
    public set logicDbName(logicDbName: string  | undefined) {
        this['logic_db_name'] = logicDbName;
    }
    public get logicDbName(): string | undefined {
        return this['logic_db_name'];
    }
}