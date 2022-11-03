import { CreateHealthCheckOption } from './CreateHealthCheckOption';


export class CreateHealthCheckRequestBody {
    private 'health_check': CreateHealthCheckOption | undefined;
    public constructor(healthCheck?: any) { 
        this['health_check'] = healthCheck;
    }
    public withHealthCheck(healthCheck: CreateHealthCheckOption): CreateHealthCheckRequestBody {
        this['health_check'] = healthCheck;
        return this;
    }
    public set healthCheck(healthCheck: CreateHealthCheckOption | undefined) {
        this['health_check'] = healthCheck;
    }
    public get healthCheck() {
        return this['health_check'];
    }
}