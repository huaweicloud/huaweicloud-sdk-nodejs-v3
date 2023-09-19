import { CloudConnection } from './CloudConnection';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCloudConnectionsResponse extends SdkResponse {
    private 'cloud_connections'?: Array<CloudConnection>;
    private 'page_info'?: PageInfo;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withCloudConnections(cloudConnections: Array<CloudConnection>): ListCloudConnectionsResponse {
        this['cloud_connections'] = cloudConnections;
        return this;
    }
    public set cloudConnections(cloudConnections: Array<CloudConnection>  | undefined) {
        this['cloud_connections'] = cloudConnections;
    }
    public get cloudConnections(): Array<CloudConnection> | undefined {
        return this['cloud_connections'];
    }
    public withPageInfo(pageInfo: PageInfo): ListCloudConnectionsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withRequestId(requestId: string): ListCloudConnectionsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}