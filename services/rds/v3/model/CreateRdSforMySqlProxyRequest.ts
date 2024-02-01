import { CreateMysqlMultiProxyRequest } from './CreateMysqlMultiProxyRequest';


export class CreateRdSforMySqlProxyRequest {
    private 'Content-Type'?: string;
    private 'instance_id'?: string;
    private 'X-Language'?: string;
    public body?: CreateMysqlMultiProxyRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withContentType(contentType: string): CreateRdSforMySqlProxyRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withInstanceId(instanceId: string): CreateRdSforMySqlProxyRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: string): CreateRdSforMySqlProxyRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: CreateMysqlMultiProxyRequest): CreateRdSforMySqlProxyRequest {
        this['body'] = body;
        return this;
    }
}