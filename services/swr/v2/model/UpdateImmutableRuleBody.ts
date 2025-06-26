import { RuleSelector } from './RuleSelector';


export class UpdateImmutableRuleBody {
    public priority?: number;
    public disabled?: boolean;
    public action?: string;
    public template?: string;
    private 'tag_selectors'?: Array<RuleSelector>;
    private 'scope_selectors'?: { [key: string]: Array<RuleSelector>; };
    public constructor(tagSelectors?: Array<RuleSelector>, scopeSelectors?: { [key: string]: Array<RuleSelector>; }) { 
        this['tag_selectors'] = tagSelectors;
        this['scope_selectors'] = scopeSelectors;
    }
    public withPriority(priority: number): UpdateImmutableRuleBody {
        this['priority'] = priority;
        return this;
    }
    public withDisabled(disabled: boolean): UpdateImmutableRuleBody {
        this['disabled'] = disabled;
        return this;
    }
    public withAction(action: string): UpdateImmutableRuleBody {
        this['action'] = action;
        return this;
    }
    public withTemplate(template: string): UpdateImmutableRuleBody {
        this['template'] = template;
        return this;
    }
    public withTagSelectors(tagSelectors: Array<RuleSelector>): UpdateImmutableRuleBody {
        this['tag_selectors'] = tagSelectors;
        return this;
    }
    public set tagSelectors(tagSelectors: Array<RuleSelector>  | undefined) {
        this['tag_selectors'] = tagSelectors;
    }
    public get tagSelectors(): Array<RuleSelector> | undefined {
        return this['tag_selectors'];
    }
    public withScopeSelectors(scopeSelectors: { [key: string]: Array<RuleSelector>; }): UpdateImmutableRuleBody {
        this['scope_selectors'] = scopeSelectors;
        return this;
    }
    public set scopeSelectors(scopeSelectors: { [key: string]: Array<RuleSelector>; }  | undefined) {
        this['scope_selectors'] = scopeSelectors;
    }
    public get scopeSelectors(): { [key: string]: Array<RuleSelector>; } | undefined {
        return this['scope_selectors'];
    }
}