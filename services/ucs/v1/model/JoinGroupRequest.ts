import { ClusterJoinGroupRequestBody } from './ClusterJoinGroupRequestBody';


export class JoinGroupRequest {
    public clusterid?: string;
    public body?: ClusterJoinGroupRequestBody;
    public constructor(clusterid?: string) { 
        this['clusterid'] = clusterid;
    }
    public withClusterid(clusterid: string): JoinGroupRequest {
        this['clusterid'] = clusterid;
        return this;
    }
    public withBody(body: ClusterJoinGroupRequestBody): JoinGroupRequest {
        this['body'] = body;
        return this;
    }
}