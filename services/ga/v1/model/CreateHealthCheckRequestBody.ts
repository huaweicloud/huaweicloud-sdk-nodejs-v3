import { CreateHealthCheckOption } from './CreateHealthCheckOption';


export class CreateHealthCheckRequestBody {
    private 'health_check'?: CreateHealthCheckOption;
    public constructor(healthCheck?: CreateHealthCheckOption) { 
        this['health_check'] = healthCheck;
    }
    public withHealthCheck(healthCheck: CreateHealthCheckOption): CreateHealthCheckRequestBody {
        this['health_check'] = healthCheck;
        return this;
    }
    public set healthCheck(healthCheck: CreateHealthCheckOption  | undefined) {
        this['health_check'] = healthCheck;
    }
    public get healthCheck(): CreateHealthCheckOption | undefined {
        return this['health_check'];
    }
}