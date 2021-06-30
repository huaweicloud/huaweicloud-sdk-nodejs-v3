import { CCEJob } from './CCEJob';


export class CCEJobSpec {
    public type?: string;
    public clusterUID?: string;
    public resourceID?: string;
    public resourceName?: string;
    public extendParam?: { [key: string]: string; };
    public subJobs?: Array<CCEJob>;
    public constructor() { 
    }
    public withType(type: string): CCEJobSpec {
        this['type'] = type;
        return this;
    }
    public withClusterUID(clusterUID: string): CCEJobSpec {
        this['clusterUID'] = clusterUID;
        return this;
    }
    public withResourceID(resourceID: string): CCEJobSpec {
        this['resourceID'] = resourceID;
        return this;
    }
    public withResourceName(resourceName: string): CCEJobSpec {
        this['resourceName'] = resourceName;
        return this;
    }
    public withExtendParam(extendParam: { [key: string]: string; }): CCEJobSpec {
        this['extendParam'] = extendParam;
        return this;
    }
    public withSubJobs(subJobs: Array<CCEJob>): CCEJobSpec {
        this['subJobs'] = subJobs;
        return this;
    }
}