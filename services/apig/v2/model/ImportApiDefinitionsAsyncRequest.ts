import { ImportApiDefinitionsAsyncRequestBody } from './ImportApiDefinitionsAsyncRequestBody';


export class ImportApiDefinitionsAsyncRequest {
    private 'instance_id'?: string;
    public body?: ImportApiDefinitionsAsyncRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ImportApiDefinitionsAsyncRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ImportApiDefinitionsAsyncRequestBody): ImportApiDefinitionsAsyncRequest {
        this['body'] = body;
        return this;
    }
}