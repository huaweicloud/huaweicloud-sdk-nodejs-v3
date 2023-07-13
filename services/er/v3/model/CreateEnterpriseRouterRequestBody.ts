import { CreateEnterpriseRouter } from './CreateEnterpriseRouter';


export class CreateEnterpriseRouterRequestBody {
    public instance: CreateEnterpriseRouter;
    public constructor(instance?: any) { 
        this['instance'] = instance;
    }
    public withInstance(instance: CreateEnterpriseRouter): CreateEnterpriseRouterRequestBody {
        this['instance'] = instance;
        return this;
    }
}