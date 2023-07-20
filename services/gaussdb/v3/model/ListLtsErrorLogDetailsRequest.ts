import { LtsLogErrorQueryRequest } from './LtsLogErrorQueryRequest';


export class ListLtsErrorLogDetailsRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    public body?: LtsLogErrorQueryRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: string): ListLtsErrorLogDetailsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListLtsErrorLogDetailsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: LtsLogErrorQueryRequest): ListLtsErrorLogDetailsRequest {
        this['body'] = body;
        return this;
    }
}