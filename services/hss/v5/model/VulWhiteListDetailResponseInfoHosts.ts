

export class VulWhiteListDetailResponseInfoHosts {
    private 'host_id'?: string;
    private 'host_name'?: string;
    public constructor() { 
    }
    public withHostId(hostId: string): VulWhiteListDetailResponseInfoHosts {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): VulWhiteListDetailResponseInfoHosts {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
}