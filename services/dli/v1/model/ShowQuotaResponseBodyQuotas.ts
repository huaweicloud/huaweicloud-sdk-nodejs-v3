import { QuotaInfo } from './QuotaInfo';


export class ShowQuotaResponseBodyQuotas {
    public projectId?: string;
    public resources?: Array<QuotaInfo>;
    public constructor() { 
    }
    public withProjectId(projectId: string): ShowQuotaResponseBodyQuotas {
        this['projectId'] = projectId;
        return this;
    }
    public withResources(resources: Array<QuotaInfo>): ShowQuotaResponseBodyQuotas {
        this['resources'] = resources;
        return this;
    }
}