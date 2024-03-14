import { ResourceBody } from './ResourceBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateDomainOriginResponse extends SdkResponse {
    public origin?: ResourceBody;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withOrigin(origin: ResourceBody): UpdateDomainOriginResponse {
        this['origin'] = origin;
        return this;
    }
    public withXRequestId(xRequestId: string): UpdateDomainOriginResponse {
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