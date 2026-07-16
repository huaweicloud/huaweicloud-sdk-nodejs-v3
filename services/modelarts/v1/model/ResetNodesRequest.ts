import { ResetNodesRequestNodeConfig } from './ResetNodesRequestNodeConfig';
import { ResetNodesRequestRollingConfig } from './ResetNodesRequestRollingConfig';


export class ResetNodesRequest {
    public nodeNames?: Array<string>;
    public rollingConfig?: ResetNodesRequestRollingConfig;
    public nodeConfig?: ResetNodesRequestNodeConfig;
    public constructor(nodeNames?: Array<string>, rollingConfig?: ResetNodesRequestRollingConfig) { 
        this['nodeNames'] = nodeNames;
        this['rollingConfig'] = rollingConfig;
    }
    public withNodeNames(nodeNames: Array<string>): ResetNodesRequest {
        this['nodeNames'] = nodeNames;
        return this;
    }
    public withRollingConfig(rollingConfig: ResetNodesRequestRollingConfig): ResetNodesRequest {
        this['rollingConfig'] = rollingConfig;
        return this;
    }
    public withNodeConfig(nodeConfig: ResetNodesRequestNodeConfig): ResetNodesRequest {
        this['nodeConfig'] = nodeConfig;
        return this;
    }
}