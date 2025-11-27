import { UpdateAssociatedRulesRequest } from './UpdateAssociatedRulesRequest';


export class UpdateClusterGroupAssociatedRulesRequest {
    public clustergroupid?: string;
    public body?: UpdateAssociatedRulesRequest;
    public constructor(clustergroupid?: string) { 
        this['clustergroupid'] = clustergroupid;
    }
    public withClustergroupid(clustergroupid: string): UpdateClusterGroupAssociatedRulesRequest {
        this['clustergroupid'] = clustergroupid;
        return this;
    }
    public withBody(body: UpdateAssociatedRulesRequest): UpdateClusterGroupAssociatedRulesRequest {
        this['body'] = body;
        return this;
    }
}