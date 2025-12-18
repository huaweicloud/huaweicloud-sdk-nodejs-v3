import { NodeTemplate } from './NodeTemplate';


export class NodePoolUpgradeSpec {
    public maxUnavailable?: number;
    public force?: boolean;
    public retryTimes?: number;
    public skippedNodes?: Array<string>;
    public nodeIDs?: Array<string>;
    public nodePoolID?: string;
    public nodeTemplate?: NodeTemplate;
    public constructor(nodePoolID?: string) { 
        this['nodePoolID'] = nodePoolID;
    }
    public withMaxUnavailable(maxUnavailable: number): NodePoolUpgradeSpec {
        this['maxUnavailable'] = maxUnavailable;
        return this;
    }
    public withForce(force: boolean): NodePoolUpgradeSpec {
        this['force'] = force;
        return this;
    }
    public withRetryTimes(retryTimes: number): NodePoolUpgradeSpec {
        this['retryTimes'] = retryTimes;
        return this;
    }
    public withSkippedNodes(skippedNodes: Array<string>): NodePoolUpgradeSpec {
        this['skippedNodes'] = skippedNodes;
        return this;
    }
    public withNodeIDs(nodeIDs: Array<string>): NodePoolUpgradeSpec {
        this['nodeIDs'] = nodeIDs;
        return this;
    }
    public withNodePoolID(nodePoolID: string): NodePoolUpgradeSpec {
        this['nodePoolID'] = nodePoolID;
        return this;
    }
    public withNodeTemplate(nodeTemplate: NodeTemplate): NodePoolUpgradeSpec {
        this['nodeTemplate'] = nodeTemplate;
        return this;
    }
}