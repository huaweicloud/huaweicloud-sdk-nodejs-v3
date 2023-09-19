import { CreateClusterBody } from './CreateClusterBody';


export class CreateClusterReq {
    public cluster?: CreateClusterBody;
    public constructor(cluster?: CreateClusterBody) { 
        this['cluster'] = cluster;
    }
    public withCluster(cluster: CreateClusterBody): CreateClusterReq {
        this['cluster'] = cluster;
        return this;
    }
}