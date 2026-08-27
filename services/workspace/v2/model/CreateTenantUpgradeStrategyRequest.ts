import { CreateTenantUpgradeStrategyRequestBody } from './CreateTenantUpgradeStrategyRequestBody';


export class CreateTenantUpgradeStrategyRequest {
    public body?: CreateTenantUpgradeStrategyRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateTenantUpgradeStrategyRequestBody): CreateTenantUpgradeStrategyRequest {
        this['body'] = body;
        return this;
    }
}