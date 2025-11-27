import { MutiWorkload } from './MutiWorkload';


export class UpdateProxyUnitedWorkloadRequest {
    public clustergroupid?: string;
    public body?: MutiWorkload;
    public constructor(clustergroupid?: string) { 
        this['clustergroupid'] = clustergroupid;
    }
    public withClustergroupid(clustergroupid: string): UpdateProxyUnitedWorkloadRequest {
        this['clustergroupid'] = clustergroupid;
        return this;
    }
    public withBody(body: MutiWorkload): UpdateProxyUnitedWorkloadRequest {
        this['body'] = body;
        return this;
    }
}