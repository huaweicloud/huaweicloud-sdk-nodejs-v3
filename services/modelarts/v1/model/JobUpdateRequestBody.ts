import { JobEndpointsReq } from './JobEndpointsReq';
import { JobUpdateRequestBodyMetadata } from './JobUpdateRequestBodyMetadata';
import { JobUpdateRequestBodySpec } from './JobUpdateRequestBodySpec';


export class JobUpdateRequestBody {
    public description?: string;
    public spec?: JobUpdateRequestBodySpec;
    public endpoints?: JobEndpointsReq;
    public metadata?: JobUpdateRequestBodyMetadata;
    public constructor() { 
    }
    public withDescription(description: string): JobUpdateRequestBody {
        this['description'] = description;
        return this;
    }
    public withSpec(spec: JobUpdateRequestBodySpec): JobUpdateRequestBody {
        this['spec'] = spec;
        return this;
    }
    public withEndpoints(endpoints: JobEndpointsReq): JobUpdateRequestBody {
        this['endpoints'] = endpoints;
        return this;
    }
    public withMetadata(metadata: JobUpdateRequestBodyMetadata): JobUpdateRequestBody {
        this['metadata'] = metadata;
        return this;
    }
}