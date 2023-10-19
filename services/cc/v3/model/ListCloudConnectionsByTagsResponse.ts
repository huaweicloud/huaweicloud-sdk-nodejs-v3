import { CloudConnection } from './CloudConnection';
import { ListResponseBody } from './ListResponseBody';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCloudConnectionsByTagsResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'page_info'?: PageInfo;
    private 'cloud_connections'?: Array<CloudConnection>;
    public constructor(requestId?: string, cloudConnections?: Array<CloudConnection>) { 
        super();
        this['request_id'] = requestId;
        this['cloud_connections'] = cloudConnections;
    }
    public withRequestId(requestId: string): ListCloudConnectionsByTagsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPageInfo(pageInfo: PageInfo): ListCloudConnectionsByTagsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withCloudConnections(cloudConnections: Array<CloudConnection>): ListCloudConnectionsByTagsResponse {
        this['cloud_connections'] = cloudConnections;
        return this;
    }
    public set cloudConnections(cloudConnections: Array<CloudConnection>  | undefined) {
        this['cloud_connections'] = cloudConnections;
    }
    public get cloudConnections(): Array<CloudConnection> | undefined {
        return this['cloud_connections'];
    }
}