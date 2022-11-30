import { NodeExecution } from './NodeExecution';


export class NodeExecutionDetail {
    private 'node_id'?: string | undefined;
    private 'node_name'?: string | undefined;
    private 'execution_id'?: string | undefined;
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
    public withNodeName(nodeName: string): NodeExecutionDetail {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName() {
        return this['node_name'];
    }
    public withExecutionId(executionId: string): NodeExecutionDetail {
        this['execution_id'] = executionId;
        return this;
    }
    public set executionId(executionId: string | undefined) {
        this['execution_id'] = executionId;
    }
    public get executionId() {
        return this['execution_id'];
    }
    public withExecutions(executions: Array<NodeExecution>): NodeExecutionDetail {
        this['executions'] = executions;
        return this;
    }
}