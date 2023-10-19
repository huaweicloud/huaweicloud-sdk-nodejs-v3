import { CloudConnectionRoute } from './CloudConnectionRoute';
import { ListResponseBody } from './ListResponseBody';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCloudConnectionRoutesResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'page_info'?: PageInfo;
    private 'cloud_connection_routes'?: Array<CloudConnectionRoute>;
    public constructor(requestId?: string, cloudConnectionRoutes?: Array<CloudConnectionRoute>) { 
        super();
        this['request_id'] = requestId;
        this['cloud_connection_routes'] = cloudConnectionRoutes;
    }
    public withRequestId(requestId: string): ListCloudConnectionRoutesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPageInfo(pageInfo: PageInfo): ListCloudConnectionRoutesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withCloudConnectionRoutes(cloudConnectionRoutes: Array<CloudConnectionRoute>): ListCloudConnectionRoutesResponse {
        this['cloud_connection_routes'] = cloudConnectionRoutes;
        return this;
    }
    public set cloudConnectionRoutes(cloudConnectionRoutes: Array<CloudConnectionRoute>  | undefined) {
        this['cloud_connection_routes'] = cloudConnectionRoutes;
    }
    public get cloudConnectionRoutes(): Array<CloudConnectionRoute> | undefined {
        return this['cloud_connection_routes'];
    }
}