import { TagSelector } from './TagSelector';


export class Rule {
    public template: RuleTemplateEnum;
    public params: object;
    private 'tag_selectors': Array<TagSelector> | undefined;
    public constructor(template?: any, params?: any, tagSelectors?: any) { 
        this['template'] = template;
        this['params'] = params;
        this['tag_selectors'] = tagSelectors;
    }
    public withTemplate(template: RuleTemplateEnum): Rule {
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
    public set tagSelectors(tagSelectors: Array<TagSelector> | undefined) {
        this['tag_selectors'] = tagSelectors;
    }
    public get tagSelectors() {
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
