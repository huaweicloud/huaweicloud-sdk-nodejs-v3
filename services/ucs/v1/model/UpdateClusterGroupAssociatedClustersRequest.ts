import { UpdateClusterGroupAssociatedClustersRequestBody } from './UpdateClusterGroupAssociatedClustersRequestBody';


export class UpdateClusterGroupAssociatedClustersRequest {
    public clustergroupid?: string;
    public body?: UpdateClusterGroupAssociatedClustersRequestBody;
    public constructor(clustergroupid?: string) { 
        this['clustergroupid'] = clustergroupid;
    }
    public withClustergroupid(clustergroupid: string): UpdateClusterGroupAssociatedClustersRequest {
        this['clustergroupid'] = clustergroupid;
        return this;
    }
    public withBody(body: UpdateClusterGroupAssociatedClustersRequestBody): UpdateClusterGroupAssociatedClustersRequest {
        this['body'] = body;
        return this;
    }
}