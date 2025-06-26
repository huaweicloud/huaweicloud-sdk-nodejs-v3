import { SignRuleSelector } from './SignRuleSelector';


export class SignScopeRule {
    private 'tag_selectors'?: Array<SignRuleSelector>;
    private 'scope_selectors'?: { [key: string]: Array<SignRuleSelector>; };
    private 'repo_scope_mode'?: string;
    public constructor(tagSelectors?: Array<SignRuleSelector>, scopeSelectors?: { [key: string]: Array<SignRuleSelector>; }, repoScopeMode?: string) { 
        this['tag_selectors'] = tagSelectors;
        this['scope_selectors'] = scopeSelectors;
        this['repo_scope_mode'] = repoScopeMode;
    }
    public withTagSelectors(tagSelectors: Array<SignRuleSelector>): SignScopeRule {
        this['tag_selectors'] = tagSelectors;
        return this;
    }
    public set tagSelectors(tagSelectors: Array<SignRuleSelector>  | undefined) {
        this['tag_selectors'] = tagSelectors;
    }
    public get tagSelectors(): Array<SignRuleSelector> | undefined {
        return this['tag_selectors'];
    }
    public withScopeSelectors(scopeSelectors: { [key: string]: Array<SignRuleSelector>; }): SignScopeRule {
        this['scope_selectors'] = scopeSelectors;
        return this;
    }
    public set scopeSelectors(scopeSelectors: { [key: string]: Array<SignRuleSelector>; }  | undefined) {
        this['scope_selectors'] = scopeSelectors;
    }
    public get scopeSelectors(): { [key: string]: Array<SignRuleSelector>; } | undefined {
        return this['scope_selectors'];
    }
    public withRepoScopeMode(repoScopeMode: string): SignScopeRule {
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