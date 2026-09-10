

export class AssociateConnectionClusterReq {
    public clusters?: Array<string>;
    public constructor(clusters?: Array<string>) { 
        this['clusters'] = clusters;
    }
    public withClusters(clusters: Array<string>): AssociateConnectionClusterReq {
        this['clusters'] = clusters;
        return this;
    }
}