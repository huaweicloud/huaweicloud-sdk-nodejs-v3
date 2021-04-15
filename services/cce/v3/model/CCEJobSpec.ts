import { CCEJob } from './CCEJob';


export class CCEJobSpec {
    public clusterUID?: string;
    public extendParam?: { [key: string]: string; };
    public resourceID?: string;
    public resourceName?: string;
    public subJobs?: Array<CCEJob>;
    public type?: string;
    public constructor() { 
    }
    public withClusterUID(clusterUID: string): CCEJobSpec {
        this['clusterUID'] = clusterUID;
        return this;
    }
    public withExtendParam(extendParam: { [key: string]: string; }): CCEJobSpec {
        this['extendParam'] = extendParam;
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
    public withSubJobs(subJobs: Array<CCEJob>): CCEJobSpec {
        this['subJobs'] = subJobs;
        return this;
    }
    public withType(type: string): CCEJobSpec {
        this['type'] = type;
        return this;
    }
}