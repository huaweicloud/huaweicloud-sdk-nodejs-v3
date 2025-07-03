import { TemplateTag } from './TemplateTag';


export class TemplateTagOptions {
    public tags?: Array<TemplateTag>;
    public constructor() { 
    }
    public withTags(tags: Array<TemplateTag>): TemplateTagOptions {
        this['tags'] = tags;
        return this;
    }
}