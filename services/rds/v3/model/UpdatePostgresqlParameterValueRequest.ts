import { ModifyParamRequest } from './ModifyParamRequest';


export class UpdatePostgresqlParameterValueRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    public name?: string;
    public body?: ModifyParamRequest;
    public constructor(instanceId?: string, name?: string) { 
        this['instance_id'] = instanceId;
        this['name'] = name;
    }
    public withXLanguage(xLanguage: string): UpdatePostgresqlParameterValueRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): UpdatePostgresqlParameterValueRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withName(name: string): UpdatePostgresqlParameterValueRequest {
        this['name'] = name;
        return this;
    }
    public withBody(body: ModifyParamRequest): UpdatePostgresqlParameterValueRequest {
        this['body'] = body;
        return this;
    }
}