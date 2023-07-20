import { UpdateHealthCheckOption } from './UpdateHealthCheckOption';


export class UpdateHealthCheckRequestBody {
    private 'health_check'?: UpdateHealthCheckOption;
    public constructor(healthCheck?: UpdateHealthCheckOption) { 
        this['health_check'] = healthCheck;
    }
    public withHealthCheck(healthCheck: UpdateHealthCheckOption): UpdateHealthCheckRequestBody {
        this['health_check'] = healthCheck;
        return this;
    }
    public set healthCheck(healthCheck: UpdateHealthCheckOption  | undefined) {
        this['health_check'] = healthCheck;
    }
    public get healthCheck(): UpdateHealthCheckOption | undefined {
        return this['health_check'];
    }
}