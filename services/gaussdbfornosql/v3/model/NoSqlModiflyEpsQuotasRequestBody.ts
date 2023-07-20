import { NoSqlRequestEpsQuota } from './NoSqlRequestEpsQuota';


export class NoSqlModiflyEpsQuotasRequestBody {
    public quotas?: Array<NoSqlRequestEpsQuota>;
    public constructor(quotas?: Array<NoSqlRequestEpsQuota>) { 
        this['quotas'] = quotas;
    }
    public withQuotas(quotas: Array<NoSqlRequestEpsQuota>): NoSqlModiflyEpsQuotasRequestBody {
        this['quotas'] = quotas;
        return this;
    }
}