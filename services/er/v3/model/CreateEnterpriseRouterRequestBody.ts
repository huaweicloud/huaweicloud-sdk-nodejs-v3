import { CreateEnterpriseRouter } from './CreateEnterpriseRouter';


export class CreateEnterpriseRouterRequestBody {
    public instance?: CreateEnterpriseRouter;
    public constructor(instance?: CreateEnterpriseRouter) { 
        this['instance'] = instance;
    }
    public withInstance(instance: CreateEnterpriseRouter): CreateEnterpriseRouterRequestBody {
        this['instance'] = instance;
        return this;
    }
}