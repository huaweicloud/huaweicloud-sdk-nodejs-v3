import { HostedDirectConnect } from './HostedDirectConnect';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHostedDirectConnectsResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'hosted_connects'?: Array<HostedDirectConnect>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListHostedDirectConnectsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withHostedConnects(hostedConnects: Array<HostedDirectConnect>): ListHostedDirectConnectsResponse {
        this['hosted_connects'] = hostedConnects;
        return this;
    }
    public set hostedConnects(hostedConnects: Array<HostedDirectConnect>  | undefined) {
        this['hosted_connects'] = hostedConnects;
    }
    public get hostedConnects(): Array<HostedDirectConnect> | undefined {
        return this['hosted_connects'];
    }
    public withPageInfo(pageInfo: PageInfo): ListHostedDirectConnectsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}