

export class ListServersDedicatedHostRequest {
    private 'dedicated_host_id'?: string;
    public limit?: number;
    public marker?: string;
    public constructor(dedicatedHostId?: string) { 
        this['dedicated_host_id'] = dedicatedHostId;
    }
    public withDedicatedHostId(dedicatedHostId: string): ListServersDedicatedHostRequest {
        this['dedicated_host_id'] = dedicatedHostId;
        return this;
    }
    public set dedicatedHostId(dedicatedHostId: string  | undefined) {
        this['dedicated_host_id'] = dedicatedHostId;
    }
    public get dedicatedHostId(): string | undefined {
        return this['dedicated_host_id'];
    }
    public withLimit(limit: number): ListServersDedicatedHostRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListServersDedicatedHostRequest {
        this['marker'] = marker;
        return this;
    }
}