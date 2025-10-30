import { ServerStatus } from './ServerStatus';


export class ListServersRequest {
    private 'edge_site_id'?: string;
    public limit?: number;
    public marker?: string;
    public status?: Array<ServerStatus>;
    public id?: Array<string>;
    public constructor() { 
    }
    public withEdgeSiteId(edgeSiteId: string): ListServersRequest {
        this['edge_site_id'] = edgeSiteId;
        return this;
    }
    public set edgeSiteId(edgeSiteId: string  | undefined) {
        this['edge_site_id'] = edgeSiteId;
    }
    public get edgeSiteId(): string | undefined {
        return this['edge_site_id'];
    }
    public withLimit(limit: number): ListServersRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListServersRequest {
        this['marker'] = marker;
        return this;
    }
    public withStatus(status: Array<ServerStatus>): ListServersRequest {
        this['status'] = status;
        return this;
    }
    public withId(id: Array<string>): ListServersRequest {
        this['id'] = id;
        return this;
    }
}