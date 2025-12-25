import { ArgsVo } from './ArgsVo';
import { NodeStatus } from './NodeStatus';


export class NodeVo {
    public args?: Array<ArgsVo>;
    private 'node_id'?: string;
    private 'node_status'?: NodeStatus;
    public constructor() { 
    }
    public withArgs(args: Array<ArgsVo>): NodeVo {
        this['args'] = args;
        return this;
    }
    public withNodeId(nodeId: string): NodeVo {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withNodeStatus(nodeStatus: NodeStatus): NodeVo {
        this['node_status'] = nodeStatus;
        return this;
    }
    public set nodeStatus(nodeStatus: NodeStatus  | undefined) {
        this['node_status'] = nodeStatus;
    }
    public get nodeStatus(): NodeStatus | undefined {
        return this['node_status'];
    }
}