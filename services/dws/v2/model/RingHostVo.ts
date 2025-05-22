

export class RingHostVo {
    private 'host_name'?: string;
    public constructor(hostName?: string) { 
        this['host_name'] = hostName;
    }
    public withHostName(hostName: string): RingHostVo {
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