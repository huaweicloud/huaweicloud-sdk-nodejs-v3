import { UpdateClusterGroupDescriptionRequest } from './UpdateClusterGroupDescriptionRequest';


export class UpdateClusterGroupRequest {
    public clustergroupid?: string;
    public body?: UpdateClusterGroupDescriptionRequest;
    public constructor(clustergroupid?: string) { 
        this['clustergroupid'] = clustergroupid;
    }
    public withClustergroupid(clustergroupid: string): UpdateClusterGroupRequest {
        this['clustergroupid'] = clustergroupid;
        return this;
    }
    public withBody(body: UpdateClusterGroupDescriptionRequest): UpdateClusterGroupRequest {
        this['body'] = body;
        return this;
    }
}