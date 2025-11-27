import { MutiWorkload } from './MutiWorkload';


export class CreateProxyUnitedWorkloadRequest {
    public clustergroupid?: string;
    public body?: MutiWorkload;
    public constructor(clustergroupid?: string) { 
        this['clustergroupid'] = clustergroupid;
    }
    public withClustergroupid(clustergroupid: string): CreateProxyUnitedWorkloadRequest {
        this['clustergroupid'] = clustergroupid;
        return this;
    }
    public withBody(body: MutiWorkload): CreateProxyUnitedWorkloadRequest {
        this['body'] = body;
        return this;
    }
}