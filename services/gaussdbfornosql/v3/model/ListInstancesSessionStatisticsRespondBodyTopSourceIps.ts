

export class ListInstancesSessionStatisticsRespondBodyTopSourceIps {
    private 'client_ip'?: string;
    private 'connection_count'?: number;
    public constructor() { 
    }
    public withClientIp(clientIp: string): ListInstancesSessionStatisticsRespondBodyTopSourceIps {
        this['client_ip'] = clientIp;
        return this;
    }
    public set clientIp(clientIp: string  | undefined) {
        this['client_ip'] = clientIp;
    }
    public get clientIp(): string | undefined {
        return this['client_ip'];
    }
    public withConnectionCount(connectionCount: number): ListInstancesSessionStatisticsRespondBodyTopSourceIps {
        this['connection_count'] = connectionCount;
        return this;
    }
    public set connectionCount(connectionCount: number  | undefined) {
        this['connection_count'] = connectionCount;
    }
    public get connectionCount(): number | undefined {
        return this['connection_count'];
    }
}