import { NodeManagement } from './NodeManagement';
import { NodePoolNodeAutoscaling } from './NodePoolNodeAutoscaling';
import { V3NodeSpec } from './V3NodeSpec';


export class NodePoolSpec {
    public type?: NodePoolSpecTypeEnum;
    public nodeTemplate: V3NodeSpec;
    public initialNodeCount?: number;
    public autoscaling?: NodePoolNodeAutoscaling;
    public nodeManagement?: NodeManagement;
    public constructor(nodeTemplate?: any) { 
        this['nodeTemplate'] = nodeTemplate;
    }
    public withType(type: NodePoolSpecTypeEnum): NodePoolSpec {
        this['type'] = type;
        return this;
    }
    public withNodeTemplate(nodeTemplate: V3NodeSpec): NodePoolSpec {
        this['nodeTemplate'] = nodeTemplate;
        return this;
    }
    public withInitialNodeCount(initialNodeCount: number): NodePoolSpec {
        this['initialNodeCount'] = initialNodeCount;
        return this;
    }
    public withAutoscaling(autoscaling: NodePoolNodeAutoscaling): NodePoolSpec {
        this['autoscaling'] = autoscaling;
        return this;
    }
    public withNodeManagement(nodeManagement: NodeManagement): NodePoolSpec {
        this['nodeManagement'] = nodeManagement;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NodePoolSpecTypeEnum {
    VM = 'vm',
    ELASTICBMS = 'ElasticBMS'
}
