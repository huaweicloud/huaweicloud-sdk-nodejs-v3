import { ResourceDto } from './ResourceDto';


export class CreateCloudLogResourceRequestBody {
    private 'domain_id'?: string;
    public resources?: Array<ResourceDto>;
    public constructor(domainId?: string, resources?: Array<ResourceDto>) { 
        this['domain_id'] = domainId;
        this['resources'] = resources;
    }
    public withDomainId(domainId: string): CreateCloudLogResourceRequestBody {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withResources(resources: Array<ResourceDto>): CreateCloudLogResourceRequestBody {
        this['resources'] = resources;
        return this;
    }
}