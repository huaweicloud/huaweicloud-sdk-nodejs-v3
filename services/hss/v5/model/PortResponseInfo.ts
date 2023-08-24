

export class PortResponseInfo {
    private 'host_id'?: string;
    public laddr?: string;
    public status?: string;
    public port?: number;
    public type?: string;
    public pid?: number;
    public path?: string;
    public constructor() { 
    }
    public withHostId(hostId: string): PortResponseInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withLaddr(laddr: string): PortResponseInfo {
        this['laddr'] = laddr;
        return this;
    }
    public withStatus(status: string): PortResponseInfo {
        this['status'] = status;
        return this;
    }
    public withPort(port: number): PortResponseInfo {
        this['port'] = port;
        return this;
    }
    public withType(type: string): PortResponseInfo {
        this['type'] = type;
        return this;
    }
    public withPid(pid: number): PortResponseInfo {
        this['pid'] = pid;
        return this;
    }
    public withPath(path: string): PortResponseInfo {
        this['path'] = path;
        return this;
    }
}