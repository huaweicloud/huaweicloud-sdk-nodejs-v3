

export class ConnectionDetail {
    private 'client_ip'?: string;
    public count?: number;
    public constructor() { 
    }
    public withClientIp(clientIp: string): ConnectionDetail {
        this['client_ip'] = clientIp;
        return this;
    }
    public set clientIp(clientIp: string  | undefined) {
        this['client_ip'] = clientIp;
    }
    public get clientIp(): string | undefined {
        return this['client_ip'];
    }
    public withCount(count: number): ConnectionDetail {
        this['count'] = count;
        return this;
    }
}