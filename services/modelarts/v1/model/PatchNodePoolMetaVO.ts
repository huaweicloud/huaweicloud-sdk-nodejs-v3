import { PatchNodePoolAnnotations } from './PatchNodePoolAnnotations';


export class PatchNodePoolMetaVO {
    public annotations?: PatchNodePoolAnnotations;
    public constructor() { 
    }
    public withAnnotations(annotations: PatchNodePoolAnnotations): PatchNodePoolMetaVO {
        this['annotations'] = annotations;
        return this;
    }
}