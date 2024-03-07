import { UpdateDatabasesRequestBody } from './UpdateDatabasesRequestBody';


export class UpdateDatabasesRequest {
    private 'instance_id'?: string;
    public body?: UpdateDatabasesRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateDatabasesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpdateDatabasesRequestBody): UpdateDatabasesRequest {
        this['body'] = body;
        return this;
    }
}