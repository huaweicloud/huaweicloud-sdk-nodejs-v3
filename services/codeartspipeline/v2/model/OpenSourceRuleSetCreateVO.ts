import { OpenSourceRuleContent } from './OpenSourceRuleContent';


export class OpenSourceRuleSetCreateVO {
    public name?: string;
    private 'parent_id'?: string;
    public content?: OpenSourceRuleContent;
    public constructor(name?: string, content?: OpenSourceRuleContent) { 
        this['name'] = name;
        this['content'] = content;
    }
    public withName(name: string): OpenSourceRuleSetCreateVO {
        this['name'] = name;
        return this;
    }
    public withParentId(parentId: string): OpenSourceRuleSetCreateVO {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withContent(content: OpenSourceRuleContent): OpenSourceRuleSetCreateVO {
        this['content'] = content;
        return this;
    }
}