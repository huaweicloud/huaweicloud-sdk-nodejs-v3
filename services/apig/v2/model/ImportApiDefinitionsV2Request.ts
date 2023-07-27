import { ImportApiDefinitionsV2RequestBody } from './ImportApiDefinitionsV2RequestBody';


export class ImportApiDefinitionsV2Request {
    private 'instance_id'?: string;
    public body?: ImportApiDefinitionsV2RequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ImportApiDefinitionsV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ImportApiDefinitionsV2RequestBody): ImportApiDefinitionsV2Request {
        this['body'] = body;
        return this;
    }
}