

export class AssociateHealthCheckReq {
    private 'health_check_id'?: string;
    public constructor(healthCheckId?: string) { 
        this['health_check_id'] = healthCheckId;
    }
    public withHealthCheckId(healthCheckId: string): AssociateHealthCheckReq {
        this['health_check_id'] = healthCheckId;
        return this;
    }
    public set healthCheckId(healthCheckId: string  | undefined) {
        this['health_check_id'] = healthCheckId;
    }
    public get healthCheckId(): string | undefined {
        return this['health_check_id'];
    }
}