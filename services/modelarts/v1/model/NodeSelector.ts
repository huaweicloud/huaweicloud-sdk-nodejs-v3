import { NodeSelectorTerm } from './NodeSelectorTerm';


export class NodeSelector {
    public nodeSelectorTerms?: Array<NodeSelectorTerm>;
    public constructor(nodeSelectorTerms?: Array<NodeSelectorTerm>) { 
        this['nodeSelectorTerms'] = nodeSelectorTerms;
    }
    public withNodeSelectorTerms(nodeSelectorTerms: Array<NodeSelectorTerm>): NodeSelector {
        this['nodeSelectorTerms'] = nodeSelectorTerms;
        return this;
    }
}