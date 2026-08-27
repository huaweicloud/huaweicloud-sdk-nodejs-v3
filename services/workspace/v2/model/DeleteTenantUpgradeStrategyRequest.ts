import { DeleteTenantUpgradeStrategyRequestBody } from './DeleteTenantUpgradeStrategyRequestBody';


export class DeleteTenantUpgradeStrategyRequest {
    public body?: DeleteTenantUpgradeStrategyRequestBody;
    public constructor() { 
    }
    public withBody(body: DeleteTenantUpgradeStrategyRequestBody): DeleteTenantUpgradeStrategyRequest {
        this['body'] = body;
        return this;
    }
}