import { NodeStageStatus } from './NodeStageStatus';


export class NodeCheckStatus {
    public phase?: string;
    public nodeStageStatus?: Array<NodeStageStatus>;
    public constructor() { 
    }
    public withPhase(phase: string): NodeCheckStatus {
        this['phase'] = phase;
        return this;
    }
    public withNodeStageStatus(nodeStageStatus: Array<NodeStageStatus>): NodeCheckStatus {
        this['nodeStageStatus'] = nodeStageStatus;
        return this;
    }
}