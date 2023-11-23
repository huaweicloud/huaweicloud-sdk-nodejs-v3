import { ListCassandraSlowLogsRequestBody } from './ListCassandraSlowLogsRequestBody';


export class ListCassandraSlowLogsRequest {
    private 'instance_id'?: string;
    public body?: ListCassandraSlowLogsRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListCassandraSlowLogsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ListCassandraSlowLogsRequestBody): ListCassandraSlowLogsRequest {
        this['body'] = body;
        return this;
    }
}