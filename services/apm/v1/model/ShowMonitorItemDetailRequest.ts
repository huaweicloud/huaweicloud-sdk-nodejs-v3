

export class ShowMonitorItemDetailRequest {
    private 'monitor_item_id'?: number;
    private 'env_id'?: number;
    private 'x-business-id'?: number;
    public constructor(monitorItemId?: number, envId?: number, xBusinessId?: number) { 
        this['monitor_item_id'] = monitorItemId;
        this['env_id'] = envId;
        this['x-business-id'] = xBusinessId;
    }
    public withMonitorItemId(monitorItemId: number): ShowMonitorItemDetailRequest {
        this['monitor_item_id'] = monitorItemId;
        return this;
    }
    public set monitorItemId(monitorItemId: number  | undefined) {
        this['monitor_item_id'] = monitorItemId;
    }
    public get monitorItemId(): number | undefined {
        return this['monitor_item_id'];
    }
    public withEnvId(envId: number): ShowMonitorItemDetailRequest {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: number  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): number | undefined {
        return this['env_id'];
    }
    public withXBusinessId(xBusinessId: number): ShowMonitorItemDetailRequest {
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