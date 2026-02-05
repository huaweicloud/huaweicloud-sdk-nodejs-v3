import { ConfigSqlBlacklistReqV3VO } from './ConfigSqlBlacklistReqV3VO';


export class ModifySqlBlackListRequest {
    private 'instance_id'?: string;
    private 'logic_db_name'?: string;
    public body?: ConfigSqlBlacklistReqV3VO;
    public constructor(instanceId?: string, logicDbName?: string) { 
        this['instance_id'] = instanceId;
        this['logic_db_name'] = logicDbName;
    }
    public withInstanceId(instanceId: string): ModifySqlBlackListRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withLogicDbName(logicDbName: string): ModifySqlBlackListRequest {
        this['logic_db_name'] = logicDbName;
        return this;
    }
    public set logicDbName(logicDbName: string  | undefined) {
        this['logic_db_name'] = logicDbName;
    }
    public get logicDbName(): string | undefined {
        return this['logic_db_name'];
    }
    public withBody(body: ConfigSqlBlacklistReqV3VO): ModifySqlBlackListRequest {
        this['body'] = body;
        return this;
    }
}