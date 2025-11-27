import { Job } from './Job';


export class JobSpec {
    public type?: string;
    public federationUID?: string;
    public resourceID?: string;
    public resourceName?: string;
    public extendparam?: string;
    public subJobs?: Array<Job>;
    public constructor() { 
    }
    public withType(type: string): JobSpec {
        this['type'] = type;
        return this;
    }
    public withFederationUID(federationUID: string): JobSpec {
        this['federationUID'] = federationUID;
        return this;
    }
    public withResourceID(resourceID: string): JobSpec {
        this['resourceID'] = resourceID;
        return this;
    }
    public withResourceName(resourceName: string): JobSpec {
        this['resourceName'] = resourceName;
        return this;
    }
    public withExtendparam(extendparam: string): JobSpec {
        this['extendparam'] = extendparam;
        return this;
    }
    public withSubJobs(subJobs: Array<Job>): JobSpec {
        this['subJobs'] = subJobs;
        return this;
    }
}