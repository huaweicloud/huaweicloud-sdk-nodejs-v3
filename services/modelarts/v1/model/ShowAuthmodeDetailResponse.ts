
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAuthmodeDetailResponse extends SdkResponse {
    private 'domain_id'?: string;
    public mode?: ShowAuthmodeDetailResponseModeEnum | string;
    public constructor() { 
        super();
    }
    public withDomainId(domainId: string): ShowAuthmodeDetailResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withMode(mode: ShowAuthmodeDetailResponseModeEnum | string): ShowAuthmodeDetailResponse {
        this['mode'] = mode;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowAuthmodeDetailResponseModeEnum {
    LOOSE = 'loose',
    STRICT = 'strict'
}
