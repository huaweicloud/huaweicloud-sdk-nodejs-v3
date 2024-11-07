import { RequestId } from './RequestId';
import { SiteConnection } from './SiteConnection';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateSiteNetworkBandwidthSizeResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'site_connection'?: SiteConnection;
    public constructor(requestId?: string, siteConnection?: SiteConnection) { 
        super();
        this['request_id'] = requestId;
        this['site_connection'] = siteConnection;
    }
    public withRequestId(requestId: string): UpdateSiteNetworkBandwidthSizeResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withSiteConnection(siteConnection: SiteConnection): UpdateSiteNetworkBandwidthSizeResponse {
        this['site_connection'] = siteConnection;
        return this;
    }
    public set siteConnection(siteConnection: SiteConnection  | undefined) {
        this['site_connection'] = siteConnection;
    }
    public get siteConnection(): SiteConnection | undefined {
        return this['site_connection'];
    }
}