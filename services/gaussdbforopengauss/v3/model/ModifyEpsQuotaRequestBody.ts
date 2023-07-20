import { EpsQuotasOption } from './EpsQuotasOption';


export class ModifyEpsQuotaRequestBody {
    private 'eps_quotas'?: Array<EpsQuotasOption>;
    public constructor(epsQuotas?: Array<EpsQuotasOption>) { 
        this['eps_quotas'] = epsQuotas;
    }
    public withEpsQuotas(epsQuotas: Array<EpsQuotasOption>): ModifyEpsQuotaRequestBody {
        this['eps_quotas'] = epsQuotas;
        return this;
    }
    public set epsQuotas(epsQuotas: Array<EpsQuotasOption>  | undefined) {
        this['eps_quotas'] = epsQuotas;
    }
    public get epsQuotas(): Array<EpsQuotasOption> | undefined {
        return this['eps_quotas'];
    }
}