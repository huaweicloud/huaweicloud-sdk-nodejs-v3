import { NodeSelector } from './NodeSelector';


export class NodePriority {
    public nodeSelector?: NodeSelector;
    public priority?: number;
    public constructor(nodeSelector?: NodeSelector, priority?: number) { 
        this['nodeSelector'] = nodeSelector;
        this['priority'] = priority;
    }
    public withNodeSelector(nodeSelector: NodeSelector): NodePriority {
        this['nodeSelector'] = nodeSelector;
        return this;
    }
    public withPriority(priority: number): NodePriority {
        this['priority'] = priority;
        return this;
    }
}