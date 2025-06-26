import { RetentionSelector } from './RetentionSelector';


export class RetentionRuleResponseBody {
    public id?: number;
    public priority?: number;
    public disabled?: boolean;
    public action?: string;
    public template?: string;
    public params?: { [key: string]: object; };
    private 'tag_selectors'?: Array<RetentionSelector>;
    private 'scope_selectors'?: { [key: string]: Array<RetentionSelector>; };
    private 'repo_scope_mode'?: string;
    public constructor() { 
    }
    public withId(id: number): RetentionRuleResponseBody {
        this['id'] = id;
        return this;
    }
    public withPriority(priority: number): RetentionRuleResponseBody {
        this['priority'] = priority;
        return this;
    }
    public withDisabled(disabled: boolean): RetentionRuleResponseBody {
        this['disabled'] = disabled;
        return this;
    }
    public withAction(action: string): RetentionRuleResponseBody {
        this['action'] = action;
        return this;
    }
    public withTemplate(template: string): RetentionRuleResponseBody {
        this['template'] = template;
        return this;
    }
    public withParams(params: { [key: string]: object; }): RetentionRuleResponseBody {
        this['params'] = params;
        return this;
    }
    public withTagSelectors(tagSelectors: Array<RetentionSelector>): RetentionRuleResponseBody {
        this['tag_selectors'] = tagSelectors;
        return this;
    }
    public set tagSelectors(tagSelectors: Array<RetentionSelector>  | undefined) {
        this['tag_selectors'] = tagSelectors;
    }
    public get tagSelectors(): Array<RetentionSelector> | undefined {
        return this['tag_selectors'];
    }
    public withScopeSelectors(scopeSelectors: { [key: string]: Array<RetentionSelector>; }): RetentionRuleResponseBody {
        this['scope_selectors'] = scopeSelectors;
        return this;
    }
    public set scopeSelectors(scopeSelectors: { [key: string]: Array<RetentionSelector>; }  | undefined) {
        this['scope_selectors'] = scopeSelectors;
    }
    public get scopeSelectors(): { [key: string]: Array<RetentionSelector>; } | undefined {
        return this['scope_selectors'];
    }
    public withRepoScopeMode(repoScopeMode: string): RetentionRuleResponseBody {
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