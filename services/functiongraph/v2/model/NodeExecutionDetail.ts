import { NodeExecution } from './NodeExecution';


export class NodeExecutionDetail {
    private 'node_id'?: string | undefined;
    public executions?: Array<NodeExecution>;
    public constructor() { 
    }
    public withNodeId(nodeId: string): NodeExecutionDetail {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId() {
        return this['node_id'];
    }
    public withExecutions(executions: Array<NodeExecution>): NodeExecutionDetail {
        this['executions'] = executions;
        return this;
    }
}