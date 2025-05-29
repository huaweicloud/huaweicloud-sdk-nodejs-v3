import { ShowImageTemplateListResponseBodyResultImageTemplates } from './ShowImageTemplateListResponseBodyResultImageTemplates';


export class ShowImageTemplateListResponseBodyResult {
    private 'image_templates'?: Array<ShowImageTemplateListResponseBodyResultImageTemplates>;
    public constructor() { 
    }
    public withImageTemplates(imageTemplates: Array<ShowImageTemplateListResponseBodyResultImageTemplates>): ShowImageTemplateListResponseBodyResult {
        this['image_templates'] = imageTemplates;
        return this;
    }
    public set imageTemplates(imageTemplates: Array<ShowImageTemplateListResponseBodyResultImageTemplates>  | undefined) {
        this['image_templates'] = imageTemplates;
    }
    public get imageTemplates(): Array<ShowImageTemplateListResponseBodyResultImageTemplates> | undefined {
        return this['image_templates'];
    }
}