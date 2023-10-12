import { Info } from './Info';


export class ShowQuotasResponseBodyQuotas {
    public resources?: Array<Info>;
    public constructor() { 
    }
    public withResources(resources: Array<Info>): ShowQuotasResponseBodyQuotas {
        this['resources'] = resources;
        return this;
    }
}