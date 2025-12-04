

export class ShowKakfaClusterResponseClusterBrokers {
    public health?: boolean;
    public host?: string;
    public port?: number;
    private 'broker_id'?: string;
    public constructor() { 
    }
    public withHealth(health: boolean): ShowKakfaClusterResponseClusterBrokers {
        this['health'] = health;
        return this;
    }
    public withHost(host: string): ShowKakfaClusterResponseClusterBrokers {
        this['host'] = host;
        return this;
    }
    public withPort(port: number): ShowKakfaClusterResponseClusterBrokers {
        this['port'] = port;
        return this;
    }
    public withBrokerId(brokerId: string): ShowKakfaClusterResponseClusterBrokers {
        this['broker_id'] = brokerId;
        return this;
    }
    public set brokerId(brokerId: string  | undefined) {
        this['broker_id'] = brokerId;
    }
    public get brokerId(): string | undefined {
        return this['broker_id'];
    }
}