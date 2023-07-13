import { UpdateEnterpriseRouter } from './UpdateEnterpriseRouter';


export class UpdateEnterpriseRouterRequestBody {
    public instance?: UpdateEnterpriseRouter;
    public constructor() { 
    }
    public withInstance(instance: UpdateEnterpriseRouter): UpdateEnterpriseRouterRequestBody {
        this['instance'] = instance;
        return this;
    }
}