import { ClusterNode } from './ClusterNode';


export class SpecClusterNode {
    public clusterNodes?: Array<ClusterNode>;
    public constructor() { 
    }
    public withClusterNodes(clusterNodes: Array<ClusterNode>): SpecClusterNode {
        this['clusterNodes'] = clusterNodes;
        return this;
    }
}