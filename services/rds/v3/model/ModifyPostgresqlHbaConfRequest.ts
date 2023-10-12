import { PostgresqlHbaConf } from './PostgresqlHbaConf';


export class ModifyPostgresqlHbaConfRequest {
    private 'instance_id'?: string;
    public body?: Array<PostgresqlHbaConf>;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ModifyPostgresqlHbaConfRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: Array<PostgresqlHbaConf>): ModifyPostgresqlHbaConfRequest {
        this['body'] = body;
        return this;
    }
}