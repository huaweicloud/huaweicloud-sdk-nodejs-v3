import { ShowQuotaPropertiesBody } from './ShowQuotaPropertiesBody';


export class ShowQuotaResponseBodyQuotas {
    public projectId?: string;
    public resources?: Array<ShowQuotaPropertiesBody>;
    public constructor() { 
    }
    public withProjectId(projectId: string): ShowQuotaResponseBodyQuotas {
        this['projectId'] = projectId;
        return this;
    }
    public withResources(resources: Array<ShowQuotaPropertiesBody>): ShowQuotaResponseBodyQuotas {
        this['resources'] = resources;
        return this;
    }
}