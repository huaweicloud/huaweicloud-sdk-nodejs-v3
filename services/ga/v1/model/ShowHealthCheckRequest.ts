

export class ShowHealthCheckRequest {
    private 'health_check_id': string | undefined;
    public constructor(healthCheckId?: any) { 
        this['health_check_id'] = healthCheckId;
    }
    public withHealthCheckId(healthCheckId: string): ShowHealthCheckRequest {
        this['health_check_id'] = healthCheckId;
        return this;
    }
    public set healthCheckId(healthCheckId: string | undefined) {
        this['health_check_id'] = healthCheckId;
    }
    public get healthCheckId() {
        return this['health_check_id'];
    }
}