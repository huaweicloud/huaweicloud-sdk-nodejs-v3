

export class UCSConstraintTemplateTagRequest {
    public tag?: string;
    public constructor() { 
    }
    public withTag(tag: string): UCSConstraintTemplateTagRequest {
        this['tag'] = tag;
        return this;
    }
}