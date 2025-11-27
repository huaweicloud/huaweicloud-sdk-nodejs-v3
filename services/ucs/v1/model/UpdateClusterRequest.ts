import { UpdateClusterRequestBody } from './UpdateClusterRequestBody';


export class UpdateClusterRequest {
    public clusterid?: string;
    public body?: UpdateClusterRequestBody;
    public constructor(clusterid?: string) { 
        this['clusterid'] = clusterid;
    }
    public withClusterid(clusterid: string): UpdateClusterRequest {
        this['clusterid'] = clusterid;
        return this;
    }
    public withBody(body: UpdateClusterRequestBody): UpdateClusterRequest {
        this['body'] = body;
        return this;
    }
}