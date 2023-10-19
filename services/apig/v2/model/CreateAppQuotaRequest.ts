import { AppQuotaCreate } from './AppQuotaCreate';


export class CreateAppQuotaRequest {
    private 'instance_id'?: string;
    public body?: AppQuotaCreate;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateAppQuotaRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: AppQuotaCreate): CreateAppQuotaRequest {
        this['body'] = body;
        return this;
    }
}