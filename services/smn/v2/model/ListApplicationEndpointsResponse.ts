import { ApplicationEndpoint } from './ApplicationEndpoint';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApplicationEndpointsResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'next_page_flag'?: boolean;
    public endpoints?: Array<ApplicationEndpoint>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListApplicationEndpointsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withNextPageFlag(nextPageFlag: boolean): ListApplicationEndpointsResponse {
        this['next_page_flag'] = nextPageFlag;
        return this;
    }
    public set nextPageFlag(nextPageFlag: boolean  | undefined) {
        this['next_page_flag'] = nextPageFlag;
    }
    public get nextPageFlag(): boolean | undefined {
        return this['next_page_flag'];
    }
    public withEndpoints(endpoints: Array<ApplicationEndpoint>): ListApplicationEndpointsResponse {
        this['endpoints'] = endpoints;
        return this;
    }
}