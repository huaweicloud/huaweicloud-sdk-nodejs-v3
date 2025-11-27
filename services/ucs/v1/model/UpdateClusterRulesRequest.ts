import { UpdateAssociatedRulesRequest } from './UpdateAssociatedRulesRequest';


export class UpdateClusterRulesRequest {
    public clusterid?: string;
    public body?: UpdateAssociatedRulesRequest;
    public constructor(clusterid?: string) { 
        this['clusterid'] = clusterid;
    }
    public withClusterid(clusterid: string): UpdateClusterRulesRequest {
        this['clusterid'] = clusterid;
        return this;
    }
    public withBody(body: UpdateAssociatedRulesRequest): UpdateClusterRulesRequest {
        this['body'] = body;
        return this;
    }
}