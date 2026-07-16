import { NodeSelectorRequirement } from './NodeSelectorRequirement';


export class NodeSelectorTerm {
    public matchExpressions?: Array<NodeSelectorRequirement>;
    public matchFields?: Array<NodeSelectorRequirement>;
    public constructor() { 
    }
    public withMatchExpressions(matchExpressions: Array<NodeSelectorRequirement>): NodeSelectorTerm {
        this['matchExpressions'] = matchExpressions;
        return this;
    }
    public withMatchFields(matchFields: Array<NodeSelectorRequirement>): NodeSelectorTerm {
        this['matchFields'] = matchFields;
        return this;
    }
}