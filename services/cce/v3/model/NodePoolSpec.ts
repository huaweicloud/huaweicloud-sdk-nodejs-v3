import { ExtensionScaleGroup } from './ExtensionScaleGroup';
import { NodeManagement } from './NodeManagement';
import { NodePoolNodeAutoscaling } from './NodePoolNodeAutoscaling';
import { NodeTemplate } from './NodeTemplate';
import { SecurityID } from './SecurityID';


export class NodePoolSpec {
    public type?: NodePoolSpecTypeEnum | string;
    public nodeTemplate?: NodeTemplate;
    public initialNodeCount?: number;
    public autoscaling?: NodePoolNodeAutoscaling;
    public nodeManagement?: NodeManagement;
    public podSecurityGroups?: Array<SecurityID>;
    public extensionScaleGroups?: Array<ExtensionScaleGroup>;
    public customSecurityGroups?: Array<string>;
    public taintPolicyOnExistingNodes?: string;
    public labelPolicyOnExistingNodes?: string;
    public userTagsPolicyOnExistingNodes?: string;
    public constructor(nodeTemplate?: NodeTemplate) { 
        this['nodeTemplate'] = nodeTemplate;
    }
    public withType(type: NodePoolSpecTypeEnum | string): NodePoolSpec {
        this['type'] = type;
        return this;
    }
    public withNodeTemplate(nodeTemplate: NodeTemplate): NodePoolSpec {
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
    public withExtensionScaleGroups(extensionScaleGroups: Array<ExtensionScaleGroup>): NodePoolSpec {
        this['extensionScaleGroups'] = extensionScaleGroups;
        return this;
    }
    public withCustomSecurityGroups(customSecurityGroups: Array<string>): NodePoolSpec {
        this['customSecurityGroups'] = customSecurityGroups;
        return this;
    }
    public withTaintPolicyOnExistingNodes(taintPolicyOnExistingNodes: string): NodePoolSpec {
        this['taintPolicyOnExistingNodes'] = taintPolicyOnExistingNodes;
        return this;
    }
    public withLabelPolicyOnExistingNodes(labelPolicyOnExistingNodes: string): NodePoolSpec {
        this['labelPolicyOnExistingNodes'] = labelPolicyOnExistingNodes;
        return this;
    }
    public withUserTagsPolicyOnExistingNodes(userTagsPolicyOnExistingNodes: string): NodePoolSpec {
        this['userTagsPolicyOnExistingNodes'] = userTagsPolicyOnExistingNodes;
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
