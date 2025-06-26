import { RuleSelector } from './RuleSelector';


export class ImmutableRule {
    public id?: number;
    private 'namespace_id'?: number;
    private 'namespace_name'?: string;
    public priority?: number;
    public disabled?: boolean;
    public action?: string;
    public template?: string;
    private 'tag_selectors'?: Array<RuleSelector>;
    private 'scope_selectors'?: { [key: string]: Array<RuleSelector>; };
    public constructor() { 
    }
    public withId(id: number): ImmutableRule {
        this['id'] = id;
        return this;
    }
    public withNamespaceId(namespaceId: number): ImmutableRule {
        this['namespace_id'] = namespaceId;
        return this;
    }
    public set namespaceId(namespaceId: number  | undefined) {
        this['namespace_id'] = namespaceId;
    }
    public get namespaceId(): number | undefined {
        return this['namespace_id'];
    }
    public withNamespaceName(namespaceName: string): ImmutableRule {
        this['namespace_name'] = namespaceName;
        return this;
    }
    public set namespaceName(namespaceName: string  | undefined) {
        this['namespace_name'] = namespaceName;
    }
    public get namespaceName(): string | undefined {
        return this['namespace_name'];
    }
    public withPriority(priority: number): ImmutableRule {
        this['priority'] = priority;
        return this;
    }
    public withDisabled(disabled: boolean): ImmutableRule {
        this['disabled'] = disabled;
        return this;
    }
    public withAction(action: string): ImmutableRule {
        this['action'] = action;
        return this;
    }
    public withTemplate(template: string): ImmutableRule {
        this['template'] = template;
        return this;
    }
    public withTagSelectors(tagSelectors: Array<RuleSelector>): ImmutableRule {
        this['tag_selectors'] = tagSelectors;
        return this;
    }
    public set tagSelectors(tagSelectors: Array<RuleSelector>  | undefined) {
        this['tag_selectors'] = tagSelectors;
    }
    public get tagSelectors(): Array<RuleSelector> | undefined {
        return this['tag_selectors'];
    }
    public withScopeSelectors(scopeSelectors: { [key: string]: Array<RuleSelector>; }): ImmutableRule {
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