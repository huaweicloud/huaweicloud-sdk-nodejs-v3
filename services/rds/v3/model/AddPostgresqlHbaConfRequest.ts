import { PostgresqlHbaConf } from './PostgresqlHbaConf';


export class AddPostgresqlHbaConfRequest {
    private 'instance_id'?: string;
    public body?: Array<PostgresqlHbaConf>;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): AddPostgresqlHbaConfRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: Array<PostgresqlHbaConf>): AddPostgresqlHbaConfRequest {
        this['body'] = body;
        return this;
    }
}