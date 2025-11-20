import { UserQuotaInfo } from './UserQuotaInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUserQuotasResponse extends SdkResponse {
    public count?: number;
    public assets?: Array<UserQuotaInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListUserQuotasResponse {
        this['count'] = count;
        return this;
    }
    public withAssets(assets: Array<UserQuotaInfo>): ListUserQuotasResponse {
        this['assets'] = assets;
        return this;
    }
    public withXRequestId(xRequestId: string): ListUserQuotasResponse {
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