import { UpStreamDetail } from './UpStreamDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUpStreamDetailResponse extends SdkResponse {
    private 'publish_domain'?: string;
    public app?: string;
    public stream?: string;
    public data?: Array<UpStreamDetail>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withPublishDomain(publishDomain: string): ListUpStreamDetailResponse {
        this['publish_domain'] = publishDomain;
        return this;
    }
    public set publishDomain(publishDomain: string  | undefined) {
        this['publish_domain'] = publishDomain;
    }
    public get publishDomain(): string | undefined {
        return this['publish_domain'];
    }
    public withApp(app: string): ListUpStreamDetailResponse {
        this['app'] = app;
        return this;
    }
    public withStream(stream: string): ListUpStreamDetailResponse {
        this['stream'] = stream;
        return this;
    }
    public withData(data: Array<UpStreamDetail>): ListUpStreamDetailResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): ListUpStreamDetailResponse {
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