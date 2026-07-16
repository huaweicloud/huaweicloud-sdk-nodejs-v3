import { NodeLabels } from './NodeLabels';
import { NodeVOAnnotations } from './NodeVOAnnotations';


export class NodeMetadata {
    public name?: string;
    public creationTimestamp?: string;
    public labels?: NodeLabels;
    public annotations?: NodeVOAnnotations;
    public constructor() { 
    }
    public withName(name: string): NodeMetadata {
        this['name'] = name;
        return this;
    }
    public withCreationTimestamp(creationTimestamp: string): NodeMetadata {
        this['creationTimestamp'] = creationTimestamp;
        return this;
    }
    public withLabels(labels: NodeLabels): NodeMetadata {
        this['labels'] = labels;
        return this;
    }
    public withAnnotations(annotations: NodeVOAnnotations): NodeMetadata {
        this['annotations'] = annotations;
        return this;
    }
}