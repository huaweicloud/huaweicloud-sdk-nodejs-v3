import { DeleteNodeSqlFilterRule } from './DeleteNodeSqlFilterRule';


export class DeleteNodeSqlFilterRuleInfo {
    private 'node_id'?: string;
    public rules?: Array<DeleteNodeSqlFilterRule>;
    public constructor(nodeId?: string, rules?: Array<DeleteNodeSqlFilterRule>) { 
        this['node_id'] = nodeId;
        this['rules'] = rules;
    }
    public withNodeId(nodeId: string): DeleteNodeSqlFilterRuleInfo {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withRules(rules: Array<DeleteNodeSqlFilterRule>): DeleteNodeSqlFilterRuleInfo {
        this['rules'] = rules;
        return this;
    }
}