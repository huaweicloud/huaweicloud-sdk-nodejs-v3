

export class UpdateObjectMeta {
    public annotations?: object;
    public constructor() { 
    }
    public withAnnotations(annotations: object): UpdateObjectMeta {
        this['annotations'] = annotations;
        return this;
    }
}