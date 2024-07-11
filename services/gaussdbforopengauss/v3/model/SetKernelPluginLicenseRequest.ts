import { SetKernelPluginLicenseRequestBody } from './SetKernelPluginLicenseRequestBody';


export class SetKernelPluginLicenseRequest {
    private 'X-Language'?: SetKernelPluginLicenseRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: SetKernelPluginLicenseRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: SetKernelPluginLicenseRequestXLanguageEnum | string): SetKernelPluginLicenseRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: SetKernelPluginLicenseRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): SetKernelPluginLicenseRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): SetKernelPluginLicenseRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: SetKernelPluginLicenseRequestBody): SetKernelPluginLicenseRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SetKernelPluginLicenseRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
