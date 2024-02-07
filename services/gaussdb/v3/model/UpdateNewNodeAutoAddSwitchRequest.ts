import { UpdateNewNodeAutoAddSwitchRequestBody } from './UpdateNewNodeAutoAddSwitchRequestBody';


export class UpdateNewNodeAutoAddSwitchRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    private 'proxy_id'?: string;
    public body?: UpdateNewNodeAutoAddSwitchRequestBody;
    public constructor(instanceId?: string, proxyId?: string) { 
        this['instance_id'] = instanceId;
        this['proxy_id'] = proxyId;
    }
    public withXLanguage(xLanguage: string): UpdateNewNodeAutoAddSwitchRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): UpdateNewNodeAutoAddSwitchRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withProxyId(proxyId: string): UpdateNewNodeAutoAddSwitchRequest {
        this['proxy_id'] = proxyId;
        return this;
    }
    public set proxyId(proxyId: string  | undefined) {
        this['proxy_id'] = proxyId;
    }
    public get proxyId(): string | undefined {
        return this['proxy_id'];
    }
    public withBody(body: UpdateNewNodeAutoAddSwitchRequestBody): UpdateNewNodeAutoAddSwitchRequest {
        this['body'] = body;
        return this;
    }
}