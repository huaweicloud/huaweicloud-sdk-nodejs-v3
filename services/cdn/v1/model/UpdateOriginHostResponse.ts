import { DomainOriginHost } from './DomainOriginHost';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateOriginHostResponse extends SdkResponse {
    private 'origin_host'?: DomainOriginHost;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withOriginHost(originHost: DomainOriginHost): UpdateOriginHostResponse {
        this['origin_host'] = originHost;
        return this;
    }
    public set originHost(originHost: DomainOriginHost  | undefined) {
        this['origin_host'] = originHost;
    }
    public get originHost(): DomainOriginHost | undefined {
        return this['origin_host'];
    }
    public withXRequestId(xRequestId: string): UpdateOriginHostResponse {
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