import { NetworkDeviceStatus } from './NetworkDeviceStatus';


export class ListNetworkDevicesRequest {
    private 'edge_site_id'?: string;
    public limit?: number;
    public marker?: string;
    public status?: Array<NetworkDeviceStatus>;
    public id?: Array<string>;
    public constructor() { 
    }
    public withEdgeSiteId(edgeSiteId: string): ListNetworkDevicesRequest {
        this['edge_site_id'] = edgeSiteId;
        return this;
    }
    public set edgeSiteId(edgeSiteId: string  | undefined) {
        this['edge_site_id'] = edgeSiteId;
    }
    public get edgeSiteId(): string | undefined {
        return this['edge_site_id'];
    }
    public withLimit(limit: number): ListNetworkDevicesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListNetworkDevicesRequest {
        this['marker'] = marker;
        return this;
    }
    public withStatus(status: Array<NetworkDeviceStatus>): ListNetworkDevicesRequest {
        this['status'] = status;
        return this;
    }
    public withId(id: Array<string>): ListNetworkDevicesRequest {
        this['id'] = id;
        return this;
    }
}