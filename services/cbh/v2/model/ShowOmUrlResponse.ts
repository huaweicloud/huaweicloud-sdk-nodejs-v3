
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowOmUrlResponse extends SdkResponse {
    public state?: ShowOmUrlResponseStateEnum | string;
    public description?: string;
    private 'login_url'?: string;
    public constructor() { 
        super();
    }
    public withState(state: ShowOmUrlResponseStateEnum | string): ShowOmUrlResponse {
        this['state'] = state;
        return this;
    }
    public withDescription(description: string): ShowOmUrlResponse {
        this['description'] = description;
        return this;
    }
    public withLoginUrl(loginUrl: string): ShowOmUrlResponse {
        this['login_url'] = loginUrl;
        return this;
    }
    public set loginUrl(loginUrl: string  | undefined) {
        this['login_url'] = loginUrl;
    }
    public get loginUrl(): string | undefined {
        return this['login_url'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowOmUrlResponseStateEnum {
    SUCCESS = 'SUCCESS',
    IAM_USER_CONFLICT = 'IAM_USER_CONFLICT',
    HOST_NOT_MANAGE = 'HOST_NOT_MANAGE',
    HOST_ACCOUNT_NOT_EXIST = 'HOST_ACCOUNT_NOT_EXIST',
    IAM_USER_NO_PERMISSION = 'IAM_USER_NO_PERMISSION',
    CUR_VERSION_NOT_SUPPORT_OPERATION = 'CUR_VERSION_NOT_SUPPORT_OPERATION',
    INS_WHITE_LIST_INITIALIZING = 'INS_WHITE_LIST_INITIALIZING',
    UNKNOWN_ERROR = 'UNKNOWN_ERROR'
}
