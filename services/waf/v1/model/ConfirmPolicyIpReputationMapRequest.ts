

export class ConfirmPolicyIpReputationMapRequest {
    private 'Content-Type'?: string;
    public lang?: ConfirmPolicyIpReputationMapRequestLangEnum | string;
    public type?: ConfirmPolicyIpReputationMapRequestTypeEnum | string;
    public constructor(contentType?: string, type?: string) { 
        this['Content-Type'] = contentType;
        this['type'] = type;
    }
    public withContentType(contentType: string): ConfirmPolicyIpReputationMapRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withLang(lang: ConfirmPolicyIpReputationMapRequestLangEnum | string): ConfirmPolicyIpReputationMapRequest {
        this['lang'] = lang;
        return this;
    }
    public withType(type: ConfirmPolicyIpReputationMapRequestTypeEnum | string): ConfirmPolicyIpReputationMapRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ConfirmPolicyIpReputationMapRequestLangEnum {
    CN = 'cn',
    EN = 'en'
}
/**
    * @export
    * @enum {string}
    */
export enum ConfirmPolicyIpReputationMapRequestTypeEnum {
    IDC = 'idc'
}
