import { RetentionSelector } from './RetentionSelector';


export class RetentionRule {
    public priority?: number;
    public disabled?: boolean;
    public action?: string;
    public template?: string;
    public params?: { [key: string]: object; };
    private 'tag_selectors'?: Array<RetentionSelector>;
    private 'scope_selectors'?: { [key: string]: Array<RetentionSelector>; };
    private 'repo_scope_mode'?: string;
    public constructor(priority?: number, action?: string, template?: string, params?: { [key: string]: object; }, tagSelectors?: Array<RetentionSelector>, scopeSelectors?: { [key: string]: Array<RetentionSelector>; }, repoScopeMode?: string) { 
        this['priority'] = priority;
        this['action'] = action;
        this['template'] = template;
        this['params'] = params;
        this['tag_selectors'] = tagSelectors;
        this['scope_selectors'] = scopeSelectors;
        this['repo_scope_mode'] = repoScopeMode;
    }
    public withPriority(priority: number): RetentionRule {
        this['priority'] = priority;
        return this;
    }
    public withDisabled(disabled: boolean): RetentionRule {
        this['disabled'] = disabled;
        return this;
    }
    public withAction(action: string): RetentionRule {
        this['action'] = action;
        return this;
    }
    public withTemplate(template: string): RetentionRule {
        this['template'] = template;
        return this;
    }
    public withParams(params: { [key: string]: object; }): RetentionRule {
        this['params'] = params;
        return this;
    }
    public withTagSelectors(tagSelectors: Array<RetentionSelector>): RetentionRule {
        this['tag_selectors'] = tagSelectors;
        return this;
    }
    public set tagSelectors(tagSelectors: Array<RetentionSelector>  | undefined) {
        this['tag_selectors'] = tagSelectors;
    }
    public get tagSelectors(): Array<RetentionSelector> | undefined {
        return this['tag_selectors'];
    }
    public withScopeSelectors(scopeSelectors: { [key: string]: Array<RetentionSelector>; }): RetentionRule {
        this['scope_selectors'] = scopeSelectors;
        return this;
    }
    public set scopeSelectors(scopeSelectors: { [key: string]: Array<RetentionSelector>; }  | undefined) {
        this['scope_selectors'] = scopeSelectors;
    }
    public get scopeSelectors(): { [key: string]: Array<RetentionSelector>; } | undefined {
        return this['scope_selectors'];
    }
    public withRepoScopeMode(repoScopeMode: string): RetentionRule {
        this['repo_scope_mode'] = repoScopeMode;
        return this;
    }
    public set repoScopeMode(repoScopeMode: string  | undefined) {
        this['repo_scope_mode'] = repoScopeMode;
    }
    public get repoScopeMode(): string | undefined {
        return this['repo_scope_mode'];
    }
}