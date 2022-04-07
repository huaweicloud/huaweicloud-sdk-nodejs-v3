import { NodePoolNodeAutoscaling } from './NodePoolNodeAutoscaling';
import { NodeSpecUpdate } from './NodeSpecUpdate';


export class NodePoolSpecUpdate {
    public nodeTemplate: NodeSpecUpdate;
    public initialNodeCount: number;
    public autoscaling: NodePoolNodeAutoscaling;
    public constructor(nodeTemplate?: any, initialNodeCount?: any, autoscaling?: any) { 
        this['nodeTemplate'] = nodeTemplate;
        this['initialNodeCount'] = initialNodeCount;
        this['autoscaling'] = autoscaling;
    }
    public withNodeTemplate(nodeTemplate: NodeSpecUpdate): NodePoolSpecUpdate {
        this['nodeTemplate'] = nodeTemplate;
        return this;
    }
    public withInitialNodeCount(initialNodeCount: number): NodePoolSpecUpdate {
        this['initialNodeCount'] = initialNodeCount;
        return this;
    }
    public withAutoscaling(autoscaling: NodePoolNodeAutoscaling): NodePoolSpecUpdate {
        this['autoscaling'] = autoscaling;
        return this;
    }
}