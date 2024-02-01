import { ModifyMySqlProxyRouteModeRequest } from './ModifyMySqlProxyRouteModeRequest';


export class ModifyRdSforMySqlProxyRouteModeRequest {
    private 'Content-Type'?: string;
    private 'instance_id'?: string;
    private 'proxy_id'?: string;
    private 'X-Language'?: string;
    public body?: ModifyMySqlProxyRouteModeRequest;
    public constructor(instanceId?: string, proxyId?: string) { 
        this['instance_id'] = instanceId;
        this['proxy_id'] = proxyId;
    }
    public withContentType(contentType: string): ModifyRdSforMySqlProxyRouteModeRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withInstanceId(instanceId: string): ModifyRdSforMySqlProxyRouteModeRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withProxyId(proxyId: string): ModifyRdSforMySqlProxyRouteModeRequest {
        this['proxy_id'] = proxyId;
        return this;
    }
    public set proxyId(proxyId: string  | undefined) {
        this['proxy_id'] = proxyId;
    }
    public get proxyId(): string | undefined {
        return this['proxy_id'];
    }
    public withXLanguage(xLanguage: string): ModifyRdSforMySqlProxyRouteModeRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: ModifyMySqlProxyRouteModeRequest): ModifyRdSforMySqlProxyRouteModeRequest {
        this['body'] = body;
        return this;
    }
}