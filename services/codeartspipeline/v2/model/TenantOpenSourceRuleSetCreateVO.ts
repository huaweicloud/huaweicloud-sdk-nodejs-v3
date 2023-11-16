import { OpenSourceRuleContent } from './OpenSourceRuleContent';


export class TenantOpenSourceRuleSetCreateVO {
    public name?: string;
    public content?: OpenSourceRuleContent;
    public constructor(name?: string, content?: OpenSourceRuleContent) { 
        this['name'] = name;
        this['content'] = content;
    }
    public withName(name: string): TenantOpenSourceRuleSetCreateVO {
        this['name'] = name;
        return this;
    }
    public withContent(content: OpenSourceRuleContent): TenantOpenSourceRuleSetCreateVO {
        this['content'] = content;
        return this;
    }
}