import { ClusterCheckRequestBody } from './ClusterCheckRequestBody';


export class CheckClusterRequest {
    public body?: ClusterCheckRequestBody;
    public constructor() { 
    }
    public withBody(body: ClusterCheckRequestBody): CheckClusterRequest {
        this['body'] = body;
        return this;
    }
}