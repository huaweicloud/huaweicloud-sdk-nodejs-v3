

export class ShowEnvMonitorItemsRequest {
    private 'env_id'?: number;
    private 'x-business-id'?: number;
    public constructor(envId?: number, xBusinessId?: number) { 
        this['env_id'] = envId;
        this['x-business-id'] = xBusinessId;
    }
    public withEnvId(envId: number): ShowEnvMonitorItemsRequest {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: number  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): number | undefined {
        return this['env_id'];
    }
    public withXBusinessId(xBusinessId: number): ShowEnvMonitorItemsRequest {
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