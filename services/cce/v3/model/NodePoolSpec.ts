import { ExtensionScaleGroup } from './ExtensionScaleGroup';
import { NodeManagement } from './NodeManagement';
import { NodePoolNodeAutoscaling } from './NodePoolNodeAutoscaling';
import { NodeSpec } from './NodeSpec';
import { SecurityID } from './SecurityID';


export class NodePoolSpec {
    public type?: NodePoolSpecTypeEnum | string;
    public nodeTemplate?: NodeSpec;
    public initialNodeCount?: number;
    public autoscaling?: NodePoolNodeAutoscaling;
    public nodeManagement?: NodeManagement;
    public podSecurityGroups?: Array<SecurityID>;
    public extensionScaleGroups?: ExtensionScaleGroup;
    public customSecurityGroups?: Array<string>;
    public constructor(nodeTemplate?: NodeSpec) { 
        this['nodeTemplate'] = nodeTemplate;
    }
    public withType(type: NodePoolSpecTypeEnum | string): NodePoolSpec {
        this['type'] = type;
        return this;
    }
    public withNodeTemplate(nodeTemplate: NodeSpec): NodePoolSpec {
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
    public withPodSecurityGroups(podSecurityGroups: Array<SecurityID>): NodePoolSpec {
        this['podSecurityGroups'] = podSecurityGroups;
        return this;
    }
    public withExtensionScaleGroups(extensionScaleGroups: ExtensionScaleGroup): NodePoolSpec {
        this['extensionScaleGroups'] = extensionScaleGroups;
        return this;
    }
    public withCustomSecurityGroups(customSecurityGroups: Array<string>): NodePoolSpec {
        this['customSecurityGroups'] = customSecurityGroups;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NodePoolSpecTypeEnum {
    VM = 'vm',
    ELASTICBMS = 'ElasticBMS',
    PM = 'pm'
}
