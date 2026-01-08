import { TopologyEdge } from './TopologyEdge';
import { TopologyLabels } from './TopologyLabels';
import { TopologyNodes } from './TopologyNodes';


export class LoadBalancerTopologyResult {
    public nodes?: TopologyNodes;
    public edges?: Array<TopologyEdge>;
    public labels?: TopologyLabels;
    public constructor(nodes?: TopologyNodes, edges?: Array<TopologyEdge>, labels?: TopologyLabels) { 
        this['nodes'] = nodes;
        this['edges'] = edges;
        this['labels'] = labels;
    }
    public withNodes(nodes: TopologyNodes): LoadBalancerTopologyResult {
        this['nodes'] = nodes;
        return this;
    }
    public withEdges(edges: Array<TopologyEdge>): LoadBalancerTopologyResult {
        this['edges'] = edges;
        return this;
    }
    public withLabels(labels: TopologyLabels): LoadBalancerTopologyResult {
        this['labels'] = labels;
        return this;
    }
}