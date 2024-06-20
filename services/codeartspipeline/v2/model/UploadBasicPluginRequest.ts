import { UploadBasicPluginRequestBody } from './UploadBasicPluginRequestBody';


export class UploadBasicPluginRequest {
    private 'domain_id'?: string;
    private 'plugin_name'?: string;
    private 'business_type'?: string;
    public body?: UploadBasicPluginRequestBody;
    public constructor(domainId?: string, pluginName?: string, businessType?: string) { 
        this['domain_id'] = domainId;
        this['plugin_name'] = pluginName;
        this['business_type'] = businessType;
    }
    public withDomainId(domainId: string): UploadBasicPluginRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withPluginName(pluginName: string): UploadBasicPluginRequest {
        this['plugin_name'] = pluginName;
        return this;
    }
    public set pluginName(pluginName: string  | undefined) {
        this['plugin_name'] = pluginName;
    }
    public get pluginName(): string | undefined {
        return this['plugin_name'];
    }
    public withBusinessType(businessType: string): UploadBasicPluginRequest {
        this['business_type'] = businessType;
        return this;
    }
    public set businessType(businessType: string  | undefined) {
        this['business_type'] = businessType;
    }
    public get businessType(): string | undefined {
        return this['business_type'];
    }
    public withBody(body: UploadBasicPluginRequestBody): UploadBasicPluginRequest {
        this['body'] = body;
        return this;
    }
}