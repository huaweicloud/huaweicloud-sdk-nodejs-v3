import { ObsDataRepositoryPolicy } from './ObsDataRepositoryPolicy';
import { ObsTargetAttributes } from './ObsTargetAttributes';


export class ObsDataRepository {
    public bucket?: string;
    public endpoint?: string;
    public policy?: ObsDataRepositoryPolicy;
    public attributes?: ObsTargetAttributes;
    public constructor(bucket?: string, endpoint?: string) { 
        this['bucket'] = bucket;
        this['endpoint'] = endpoint;
    }
    public withBucket(bucket: string): ObsDataRepository {
        this['bucket'] = bucket;
        return this;
    }
    public withEndpoint(endpoint: string): ObsDataRepository {
        this['endpoint'] = endpoint;
        return this;
    }
    public withPolicy(policy: ObsDataRepositoryPolicy): ObsDataRepository {
        this['policy'] = policy;
        return this;
    }
    public withAttributes(attributes: ObsTargetAttributes): ObsDataRepository {
        this['attributes'] = attributes;
        return this;
    }
}