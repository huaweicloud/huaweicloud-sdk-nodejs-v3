

export class ListServersByHostIdRequest {
    private 'host_id'?: string;
    public constructor(hostId?: string) { 
        this['host_id'] = hostId;
    }
    public withHostId(hostId: string): ListServersByHostIdRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
}