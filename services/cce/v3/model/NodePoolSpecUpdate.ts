import { ExtensionScaleGroup } from './ExtensionScaleGroup';
import { NodeManagement } from './NodeManagement';
import { NodePoolNodeAutoscaling } from './NodePoolNodeAutoscaling';
import { NodeSpecUpdate } from './NodeSpecUpdate';


export class NodePoolSpecUpdate {
    public nodeTemplate?: NodeSpecUpdate;
    public initialNodeCount?: number;
    public ignoreInitialNodeCount?: boolean;
    public autoscaling?: NodePoolNodeAutoscaling;
    public nodeManagementUpdate?: NodeManagement;
    public taintPolicyOnExistingNodes?: string;
    public labelPolicyOnExistingNodes?: string;
    public userTagsPolicyOnExistingNodes?: string;
    public extensionScaleGroups?: Array<ExtensionScaleGroup>;
    public constructor(initialNodeCount?: number) { 
        this['initialNodeCount'] = initialNodeCount;
    }
    public withNodeTemplate(nodeTemplate: NodeSpecUpdate): NodePoolSpecUpdate {
        this['nodeTemplate'] = nodeTemplate;
        return this;
    }
    public withInitialNodeCount(initialNodeCount: number): NodePoolSpecUpdate {
        this['initialNodeCount'] = initialNodeCount;
        return this;
    }
    public withIgnoreInitialNodeCount(ignoreInitialNodeCount: boolean): NodePoolSpecUpdate {
        this['ignoreInitialNodeCount'] = ignoreInitialNodeCount;
        return this;
    }
    public withAutoscaling(autoscaling: NodePoolNodeAutoscaling): NodePoolSpecUpdate {
        this['autoscaling'] = autoscaling;
        return this;
    }
    public withNodeManagementUpdate(nodeManagementUpdate: NodeManagement): NodePoolSpecUpdate {
        this['nodeManagementUpdate'] = nodeManagementUpdate;
        return this;
    }
    public withTaintPolicyOnExistingNodes(taintPolicyOnExistingNodes: string): NodePoolSpecUpdate {
        this['taintPolicyOnExistingNodes'] = taintPolicyOnExistingNodes;
        return this;
    }
    public withLabelPolicyOnExistingNodes(labelPolicyOnExistingNodes: string): NodePoolSpecUpdate {
        this['labelPolicyOnExistingNodes'] = labelPolicyOnExistingNodes;
        return this;
    }
    public withUserTagsPolicyOnExistingNodes(userTagsPolicyOnExistingNodes: string): NodePoolSpecUpdate {
        this['userTagsPolicyOnExistingNodes'] = userTagsPolicyOnExistingNodes;
        return this;
    }
    public withExtensionScaleGroups(extensionScaleGroups: Array<ExtensionScaleGroup>): NodePoolSpecUpdate {
        this['extensionScaleGroups'] = extensionScaleGroups;
        return this;
    }
}