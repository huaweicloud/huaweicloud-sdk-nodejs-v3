
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAuthModeResponse extends SdkResponse {
    private 'domain_id'?: string;
    public mode?: UpdateAuthModeResponseModeEnum | string;
    public constructor() { 
        super();
    }
    public withDomainId(domainId: string): UpdateAuthModeResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withMode(mode: UpdateAuthModeResponseModeEnum | string): UpdateAuthModeResponse {
        this['mode'] = mode;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateAuthModeResponseModeEnum {
    LOOSE = 'loose',
    STRICT = 'strict'
}
