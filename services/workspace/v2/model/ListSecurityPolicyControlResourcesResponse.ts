import { ModelPageResp } from './ModelPageResp';
import { SecurityPolicyControlResourceItemVO } from './SecurityPolicyControlResourceItemVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecurityPolicyControlResourcesResponse extends SdkResponse {
    public total?: number;
    public items?: Array<SecurityPolicyControlResourceItemVO>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListSecurityPolicyControlResourcesResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<SecurityPolicyControlResourceItemVO>): ListSecurityPolicyControlResourcesResponse {
        this['items'] = items;
        return this;
    }
    public withXRequestId(xRequestId: string): ListSecurityPolicyControlResourcesResponse {
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