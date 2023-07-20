import { ModifyAliasRequest } from './ModifyAliasRequest';


export class UpdateGaussMySqlInstanceAliasRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    public body?: ModifyAliasRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: string): UpdateGaussMySqlInstanceAliasRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): UpdateGaussMySqlInstanceAliasRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ModifyAliasRequest): UpdateGaussMySqlInstanceAliasRequest {
        this['body'] = body;
        return this;
    }
}