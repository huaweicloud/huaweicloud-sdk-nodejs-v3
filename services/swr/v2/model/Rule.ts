import { TagSelector } from './TagSelector';


export class Rule {
    public template?: RuleTemplateEnum | string;
    public params?: object;
    private 'tag_selectors'?: Array<TagSelector>;
    public constructor(template?: string, params?: object, tagSelectors?: Array<TagSelector>) { 
        this['template'] = template;
        this['params'] = params;
        this['tag_selectors'] = tagSelectors;
    }
    public withTemplate(template: RuleTemplateEnum | string): Rule {
        this['template'] = template;
        return this;
    }
    public withParams(params: object): Rule {
        this['params'] = params;
        return this;
    }
    public withTagSelectors(tagSelectors: Array<TagSelector>): Rule {
        this['tag_selectors'] = tagSelectors;
        return this;
    }
    public set tagSelectors(tagSelectors: Array<TagSelector>  | undefined) {
        this['tag_selectors'] = tagSelectors;
    }
    public get tagSelectors(): Array<TagSelector> | undefined {
        return this['tag_selectors'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RuleTemplateEnum {
    DATE_RULE = 'date_rule',
    TAG_RULE = 'tag_rule'
}
