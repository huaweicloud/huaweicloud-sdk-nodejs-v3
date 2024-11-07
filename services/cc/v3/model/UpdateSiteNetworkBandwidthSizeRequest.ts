import { UpdateSiteConnectionBandwidthSizeRequestBody } from './UpdateSiteConnectionBandwidthSizeRequestBody';


export class UpdateSiteNetworkBandwidthSizeRequest {
    private 'site_network_id'?: string;
    private 'site_connection_id'?: string;
    public body?: UpdateSiteConnectionBandwidthSizeRequestBody;
    public constructor(siteNetworkId?: string, siteConnectionId?: string) { 
        this['site_network_id'] = siteNetworkId;
        this['site_connection_id'] = siteConnectionId;
    }
    public withSiteNetworkId(siteNetworkId: string): UpdateSiteNetworkBandwidthSizeRequest {
        this['site_network_id'] = siteNetworkId;
        return this;
    }
    public set siteNetworkId(siteNetworkId: string  | undefined) {
        this['site_network_id'] = siteNetworkId;
    }
    public get siteNetworkId(): string | undefined {
        return this['site_network_id'];
    }
    public withSiteConnectionId(siteConnectionId: string): UpdateSiteNetworkBandwidthSizeRequest {
        this['site_connection_id'] = siteConnectionId;
        return this;
    }
    public set siteConnectionId(siteConnectionId: string  | undefined) {
        this['site_connection_id'] = siteConnectionId;
    }
    public get siteConnectionId(): string | undefined {
        return this['site_connection_id'];
    }
    public withBody(body: UpdateSiteConnectionBandwidthSizeRequestBody): UpdateSiteNetworkBandwidthSizeRequest {
        this['body'] = body;
        return this;
    }
}