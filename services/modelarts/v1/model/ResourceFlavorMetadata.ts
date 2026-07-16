import { ResourceFlavorAnnotation } from './ResourceFlavorAnnotation';
import { ResourceFlavorLabel } from './ResourceFlavorLabel';


export class ResourceFlavorMetadata {
    public name?: string;
    public labels?: ResourceFlavorLabel;
    public annotations?: ResourceFlavorAnnotation;
    public constructor(name?: string, labels?: ResourceFlavorLabel) { 
        this['name'] = name;
        this['labels'] = labels;
    }
    public withName(name: string): ResourceFlavorMetadata {
        this['name'] = name;
        return this;
    }
    public withLabels(labels: ResourceFlavorLabel): ResourceFlavorMetadata {
        this['labels'] = labels;
        return this;
    }
    public withAnnotations(annotations: ResourceFlavorAnnotation): ResourceFlavorMetadata {
        this['annotations'] = annotations;
        return this;
    }
}