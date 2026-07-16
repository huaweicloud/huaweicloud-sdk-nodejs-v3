import { CreateNodePoolAnnotations } from './CreateNodePoolAnnotations';


export class CreateNodePoolMetaVO {
    public name?: string;
    public annotations?: CreateNodePoolAnnotations;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CreateNodePoolMetaVO {
        this['name'] = name;
        return this;
    }
    public withAnnotations(annotations: CreateNodePoolAnnotations): CreateNodePoolMetaVO {
        this['annotations'] = annotations;
        return this;
    }
}