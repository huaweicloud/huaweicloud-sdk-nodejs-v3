

export class ShowClusterRespClusterBrokers {
    public host?: string;
    public port?: number;
    private 'broker_id'?: string;
    private 'is_controller'?: boolean;
    public version?: string;
    private 'register_time'?: number;
    private 'is_health'?: boolean;
    public constructor() { 
    }
    public withHost(host: string): ShowClusterRespClusterBrokers {
        this['host'] = host;
        return this;
    }
    public withPort(port: number): ShowClusterRespClusterBrokers {
        this['port'] = port;
        return this;
    }
    public withBrokerId(brokerId: string): ShowClusterRespClusterBrokers {
        this['broker_id'] = brokerId;
        return this;
    }
    public set brokerId(brokerId: string  | undefined) {
        this['broker_id'] = brokerId;
    }
    public get brokerId(): string | undefined {
        return this['broker_id'];
    }
    public withIsController(isController: boolean): ShowClusterRespClusterBrokers {
        this['is_controller'] = isController;
        return this;
    }
    public set isController(isController: boolean  | undefined) {
        this['is_controller'] = isController;
    }
    public get isController(): boolean | undefined {
        return this['is_controller'];
    }
    public withVersion(version: string): ShowClusterRespClusterBrokers {
        this['version'] = version;
        return this;
    }
    public withRegisterTime(registerTime: number): ShowClusterRespClusterBrokers {
        this['register_time'] = registerTime;
        return this;
    }
    public set registerTime(registerTime: number  | undefined) {
        this['register_time'] = registerTime;
    }
    public get registerTime(): number | undefined {
        return this['register_time'];
    }
    public withIsHealth(isHealth: boolean): ShowClusterRespClusterBrokers {
        this['is_health'] = isHealth;
        return this;
    }
    public set isHealth(isHealth: boolean  | undefined) {
        this['is_health'] = isHealth;
    }
    public get isHealth(): boolean | undefined {
        return this['is_health'];
    }
}