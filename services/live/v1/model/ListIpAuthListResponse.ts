
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIpAuthListResponse extends SdkResponse {
    public domain?: string;
    private 'auth_type'?: ListIpAuthListResponseAuthTypeEnum | string;
    private 'ip_auth_list'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withDomain(domain: string): ListIpAuthListResponse {
        this['domain'] = domain;
        return this;
    }
    public withAuthType(authType: ListIpAuthListResponseAuthTypeEnum | string): ListIpAuthListResponse {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: ListIpAuthListResponseAuthTypeEnum | string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): ListIpAuthListResponseAuthTypeEnum | string | undefined {
        return this['auth_type'];
    }
    public withIpAuthList(ipAuthList: string): ListIpAuthListResponse {
        this['ip_auth_list'] = ipAuthList;
        return this;
    }
    public set ipAuthList(ipAuthList: string  | undefined) {
        this['ip_auth_list'] = ipAuthList;
    }
    public get ipAuthList(): string | undefined {
        return this['ip_auth_list'];
    }
    public withXRequestId(xRequestId: string): ListIpAuthListResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListIpAuthListResponseAuthTypeEnum {
    WHITE = 'WHITE',
    BLACK = 'BLACK',
    NONE = 'NONE'
}
