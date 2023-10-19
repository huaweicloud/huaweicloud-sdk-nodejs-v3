import { CloudConnectionRoute } from './CloudConnectionRoute';
import { RequestId } from './RequestId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCloudConnectionRoutesResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'cloud_connection_route'?: CloudConnectionRoute;
    public constructor(requestId?: string, cloudConnectionRoute?: CloudConnectionRoute) { 
        super();
        this['request_id'] = requestId;
        this['cloud_connection_route'] = cloudConnectionRoute;
    }
    public withRequestId(requestId: string): ShowCloudConnectionRoutesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withCloudConnectionRoute(cloudConnectionRoute: CloudConnectionRoute): ShowCloudConnectionRoutesResponse {
        this['cloud_connection_route'] = cloudConnectionRoute;
        return this;
    }
    public set cloudConnectionRoute(cloudConnectionRoute: CloudConnectionRoute  | undefined) {
        this['cloud_connection_route'] = cloudConnectionRoute;
    }
    public get cloudConnectionRoute(): CloudConnectionRoute | undefined {
        return this['cloud_connection_route'];
    }
}