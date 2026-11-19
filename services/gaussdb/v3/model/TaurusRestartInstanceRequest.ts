

export class TaurusRestartInstanceRequest {
    public delay?: boolean;
    private 'max_connections'?: number;
    public constructor() { 
    }
    public withDelay(delay: boolean): TaurusRestartInstanceRequest {
        this['delay'] = delay;
        return this;
    }
    public withMaxConnections(maxConnections: number): TaurusRestartInstanceRequest {
        this['max_connections'] = maxConnections;
        return this;
    }
    public set maxConnections(maxConnections: number  | undefined) {
        this['max_connections'] = maxConnections;
    }
    public get maxConnections(): number | undefined {
        return this['max_connections'];
    }
}