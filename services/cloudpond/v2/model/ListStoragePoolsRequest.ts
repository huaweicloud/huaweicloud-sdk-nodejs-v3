import { StoragePoolStatus } from './StoragePoolStatus';


export class ListStoragePoolsRequest {
    private 'edge_site_id'?: string;
    public limit?: number;
    public marker?: string;
    public status?: Array<StoragePoolStatus>;
    public constructor() { 
    }
    public withEdgeSiteId(edgeSiteId: string): ListStoragePoolsRequest {
        this['edge_site_id'] = edgeSiteId;
        return this;
    }
    public set edgeSiteId(edgeSiteId: string  | undefined) {
        this['edge_site_id'] = edgeSiteId;
    }
    public get edgeSiteId(): string | undefined {
        return this['edge_site_id'];
    }
    public withLimit(limit: number): ListStoragePoolsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListStoragePoolsRequest {
        this['marker'] = marker;
        return this;
    }
    public withStatus(status: Array<StoragePoolStatus>): ListStoragePoolsRequest {
        this['status'] = status;
        return this;
    }
}