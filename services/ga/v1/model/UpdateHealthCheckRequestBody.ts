import { UpdateHealthCheckOption } from './UpdateHealthCheckOption';


export class UpdateHealthCheckRequestBody {
    private 'health_check': UpdateHealthCheckOption | undefined;
    public constructor(healthCheck?: any) { 
        this['health_check'] = healthCheck;
    }
    public withHealthCheck(healthCheck: UpdateHealthCheckOption): UpdateHealthCheckRequestBody {
        this['health_check'] = healthCheck;
        return this;
    }
    public set healthCheck(healthCheck: UpdateHealthCheckOption | undefined) {
        this['health_check'] = healthCheck;
    }
    public get healthCheck() {
        return this['health_check'];
    }
}