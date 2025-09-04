

export class TcpSocketDTO {
    public port?: number;
    public constructor(port?: number) { 
        this['port'] = port;
    }
    public withPort(port: number): TcpSocketDTO {
        this['port'] = port;
        return this;
    }
}