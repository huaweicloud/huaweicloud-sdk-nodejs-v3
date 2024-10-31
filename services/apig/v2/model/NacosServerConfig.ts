

export class NacosServerConfig {
    private 'ip_address'?: string;
    public port?: number;
    private 'grpc_port'?: number;
    public constructor(ipAddress?: string, port?: number) { 
        this['ip_address'] = ipAddress;
        this['port'] = port;
    }
    public withIpAddress(ipAddress: string): NacosServerConfig {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
    public withPort(port: number): NacosServerConfig {
        this['port'] = port;
        return this;
    }
    public withGrpcPort(grpcPort: number): NacosServerConfig {
        this['grpc_port'] = grpcPort;
        return this;
    }
    public set grpcPort(grpcPort: number  | undefined) {
        this['grpc_port'] = grpcPort;
    }
    public get grpcPort(): number | undefined {
        return this['grpc_port'];
    }
}