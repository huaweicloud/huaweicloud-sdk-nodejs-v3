import { RequiredInput } from './RequiredInput';


export class CreateClusterConfRequest {
    public clusterid?: string;
    public body?: RequiredInput;
    public constructor(clusterid?: string) { 
        this['clusterid'] = clusterid;
    }
    public withClusterid(clusterid: string): CreateClusterConfRequest {
        this['clusterid'] = clusterid;
        return this;
    }
    public withBody(body: RequiredInput): CreateClusterConfRequest {
        this['body'] = body;
        return this;
    }
}