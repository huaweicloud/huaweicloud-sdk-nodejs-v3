

export class QueryConnectionsResponse {
    private 'client_ip'?: string;
    public count?: number;
    public constructor(clientIp?: string, count?: number) { 
        this['client_ip'] = clientIp;
        this['count'] = count;
    }
    public withClientIp(clientIp: string): QueryConnectionsResponse {
        this['client_ip'] = clientIp;
        return this;
    }
    public set clientIp(clientIp: string  | undefined) {
        this['client_ip'] = clientIp;
    }
    public get clientIp(): string | undefined {
        return this['client_ip'];
    }
    public withCount(count: number): QueryConnectionsResponse {
        this['count'] = count;
        return this;
    }
}