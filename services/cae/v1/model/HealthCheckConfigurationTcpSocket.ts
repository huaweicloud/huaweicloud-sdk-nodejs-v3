

export class HealthCheckConfigurationTcpSocket {
    public port?: number;
    public constructor() { 
    }
    public withPort(port: number): HealthCheckConfigurationTcpSocket {
        this['port'] = port;
        return this;
    }
}