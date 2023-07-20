import { NodeSqlFilterRule } from './NodeSqlFilterRule';


export class NodeSqlFilterRuleInfo {
    private 'node_id'?: string;
    public rules?: Array<NodeSqlFilterRule>;
    public constructor(nodeId?: string, rules?: Array<NodeSqlFilterRule>) { 
        this['node_id'] = nodeId;
        this['rules'] = rules;
    }
    public withNodeId(nodeId: string): NodeSqlFilterRuleInfo {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withRules(rules: Array<NodeSqlFilterRule>): NodeSqlFilterRuleInfo {
        this['rules'] = rules;
        return this;
    }
}