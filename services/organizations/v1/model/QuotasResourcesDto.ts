import { QuotaDto } from './QuotaDto';


export class QuotasResourcesDto {
    public resources?: Array<QuotaDto>;
    public constructor(resources?: Array<QuotaDto>) { 
        this['resources'] = resources;
    }
    public withResources(resources: Array<QuotaDto>): QuotasResourcesDto {
        this['resources'] = resources;
        return this;
    }
}