import { RegisterCluster } from './RegisterCluster';


export class RegisterClusterRequest {
    public body?: RegisterCluster;
    public constructor() { 
    }
    public withBody(body: RegisterCluster): RegisterClusterRequest {
        this['body'] = body;
        return this;
    }
}