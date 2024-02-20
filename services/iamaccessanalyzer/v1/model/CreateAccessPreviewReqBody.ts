import { Configuration } from './Configuration';


export class CreateAccessPreviewReqBody {
    public configurations?: Configuration;
    private 'resource_urn'?: string;
    public constructor(configurations?: Configuration, resourceUrn?: string) { 
        this['configurations'] = configurations;
        this['resource_urn'] = resourceUrn;
    }
    public withConfigurations(configurations: Configuration): CreateAccessPreviewReqBody {
        this['configurations'] = configurations;
        return this;
    }
    public withResourceUrn(resourceUrn: string): CreateAccessPreviewReqBody {
        this['resource_urn'] = resourceUrn;
        return this;
    }
    public set resourceUrn(resourceUrn: string  | undefined) {
        this['resource_urn'] = resourceUrn;
    }
    public get resourceUrn(): string | undefined {
        return this['resource_urn'];
    }
}