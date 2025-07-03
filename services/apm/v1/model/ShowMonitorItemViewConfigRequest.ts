

export class ShowMonitorItemViewConfigRequest {
    private 'env_id'?: number;
    private 'collector_id'?: number;
    private 'x-business-id'?: number;
    public constructor(envId?: number, collectorId?: number, xBusinessId?: number) { 
        this['env_id'] = envId;
        this['collector_id'] = collectorId;
        this['x-business-id'] = xBusinessId;
    }
    public withEnvId(envId: number): ShowMonitorItemViewConfigRequest {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: number  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): number | undefined {
        return this['env_id'];
    }
    public withCollectorId(collectorId: number): ShowMonitorItemViewConfigRequest {
        this['collector_id'] = collectorId;
        return this;
    }
    public set collectorId(collectorId: number  | undefined) {
        this['collector_id'] = collectorId;
    }
    public get collectorId(): number | undefined {
        return this['collector_id'];
    }
    public withXBusinessId(xBusinessId: number): ShowMonitorItemViewConfigRequest {
        this['x-business-id'] = xBusinessId;
        return this;
    }
    public set xBusinessId(xBusinessId: number  | undefined) {
        this['x-business-id'] = xBusinessId;
    }
    public get xBusinessId(): number | undefined {
        return this['x-business-id'];
    }
}