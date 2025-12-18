import { V2Job } from './V2Job';


export class V2JobSpec {
    public type?: string;
    public clusteruid?: string;
    public resourceid?: string;
    public resourcename?: string;
    public extendparam?: { [key: string]: string; };
    public subjobs?: Array<V2Job>;
    public constructor() { 
    }
    public withType(type: string): V2JobSpec {
        this['type'] = type;
        return this;
    }
    public withClusteruid(clusteruid: string): V2JobSpec {
        this['clusteruid'] = clusteruid;
        return this;
    }
    public withResourceid(resourceid: string): V2JobSpec {
        this['resourceid'] = resourceid;
        return this;
    }
    public withResourcename(resourcename: string): V2JobSpec {
        this['resourcename'] = resourcename;
        return this;
    }
    public withExtendparam(extendparam: { [key: string]: string; }): V2JobSpec {
        this['extendparam'] = extendparam;
        return this;
    }
    public withSubjobs(subjobs: Array<V2Job>): V2JobSpec {
        this['subjobs'] = subjobs;
        return this;
    }
}