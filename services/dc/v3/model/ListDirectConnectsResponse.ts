import { DirectConnect } from './DirectConnect';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDirectConnectsResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'direct_connects'?: Array<DirectConnect>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListDirectConnectsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withDirectConnects(directConnects: Array<DirectConnect>): ListDirectConnectsResponse {
        this['direct_connects'] = directConnects;
        return this;
    }
    public set directConnects(directConnects: Array<DirectConnect>  | undefined) {
        this['direct_connects'] = directConnects;
    }
    public get directConnects(): Array<DirectConnect> | undefined {
        return this['direct_connects'];
    }
    public withPageInfo(pageInfo: PageInfo): ListDirectConnectsResponse {
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