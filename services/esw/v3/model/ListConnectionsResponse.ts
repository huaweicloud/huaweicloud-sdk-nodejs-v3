import { Connection } from './Connection';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListConnectionsResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'page_info'?: PageInfo;
    public connections?: Array<Connection>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListConnectionsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPageInfo(pageInfo: PageInfo): ListConnectionsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withConnections(connections: Array<Connection>): ListConnectionsResponse {
        this['connections'] = connections;
        return this;
    }
}