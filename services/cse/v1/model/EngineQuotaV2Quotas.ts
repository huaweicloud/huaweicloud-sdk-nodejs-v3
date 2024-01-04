import { TenantQuotaUsed } from './TenantQuotaUsed';


export class EngineQuotaV2Quotas {
    public resources?: Array<TenantQuotaUsed>;
    public constructor() { 
    }
    public withResources(resources: Array<TenantQuotaUsed>): EngineQuotaV2Quotas {
        this['resources'] = resources;
        return this;
    }
}