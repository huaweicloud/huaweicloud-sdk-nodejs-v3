import { Job } from './Job';


export class JobSpec {
    public type?: string;
    public clusterUID?: string;
    public resourceID?: string;
    public resourceName?: string;
    public extendParam?: { [key: string]: string; };
    public subJobs?: Array<Job>;
    public constructor() { 
    }
    public withType(type: string): JobSpec {
        this['type'] = type;
        return this;
    }
    public withClusterUID(clusterUID: string): JobSpec {
        this['clusterUID'] = clusterUID;
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
    public withExtendParam(extendParam: { [key: string]: string; }): JobSpec {
        this['extendParam'] = extendParam;
        return this;
    }
    public withSubJobs(subJobs: Array<Job>): JobSpec {
        this['subJobs'] = subJobs;
        return this;
    }
}