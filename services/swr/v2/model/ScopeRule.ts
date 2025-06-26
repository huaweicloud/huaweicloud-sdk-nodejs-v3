import { RuleSelector } from './RuleSelector';


export class ScopeRule {
    private 'tag_selectors'?: Array<RuleSelector>;
    private 'scope_selectors'?: { [key: string]: Array<RuleSelector>; };
    private 'repo_scope_mode'?: string;
    public constructor(tagSelectors?: Array<RuleSelector>, scopeSelectors?: { [key: string]: Array<RuleSelector>; }, repoScopeMode?: string) { 
        this['tag_selectors'] = tagSelectors;
        this['scope_selectors'] = scopeSelectors;
        this['repo_scope_mode'] = repoScopeMode;
    }
    public withTagSelectors(tagSelectors: Array<RuleSelector>): ScopeRule {
        this['tag_selectors'] = tagSelectors;
        return this;
    }
    public set tagSelectors(tagSelectors: Array<RuleSelector>  | undefined) {
        this['tag_selectors'] = tagSelectors;
    }
    public get tagSelectors(): Array<RuleSelector> | undefined {
        return this['tag_selectors'];
    }
    public withScopeSelectors(scopeSelectors: { [key: string]: Array<RuleSelector>; }): ScopeRule {
        this['scope_selectors'] = scopeSelectors;
        return this;
    }
    public set scopeSelectors(scopeSelectors: { [key: string]: Array<RuleSelector>; }  | undefined) {
        this['scope_selectors'] = scopeSelectors;
    }
    public get scopeSelectors(): { [key: string]: Array<RuleSelector>; } | undefined {
        return this['scope_selectors'];
    }
    public withRepoScopeMode(repoScopeMode: string): ScopeRule {
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