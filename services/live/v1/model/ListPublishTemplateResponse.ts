
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPublishTemplateResponse extends SdkResponse {
    public url?: string;
    private 'auth_sign_key'?: string;
    private 'call_back_area'?: ListPublishTemplateResponseCallBackAreaEnum | string;
    public constructor() { 
        super();
    }
    public withUrl(url: string): ListPublishTemplateResponse {
        this['url'] = url;
        return this;
    }
    public withAuthSignKey(authSignKey: string): ListPublishTemplateResponse {
        this['auth_sign_key'] = authSignKey;
        return this;
    }
    public set authSignKey(authSignKey: string  | undefined) {
        this['auth_sign_key'] = authSignKey;
    }
    public get authSignKey(): string | undefined {
        return this['auth_sign_key'];
    }
    public withCallBackArea(callBackArea: ListPublishTemplateResponseCallBackAreaEnum | string): ListPublishTemplateResponse {
        this['call_back_area'] = callBackArea;
        return this;
    }
    public set callBackArea(callBackArea: ListPublishTemplateResponseCallBackAreaEnum | string  | undefined) {
        this['call_back_area'] = callBackArea;
    }
    public get callBackArea(): ListPublishTemplateResponseCallBackAreaEnum | string | undefined {
        return this['call_back_area'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListPublishTemplateResponseCallBackAreaEnum {
    MAINLAND_CHINA = 'mainland_china',
    OUTSIDE_MAINLAND_CHINA = 'outside_mainland_china'
}
