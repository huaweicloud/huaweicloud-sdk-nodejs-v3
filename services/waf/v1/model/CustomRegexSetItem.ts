import { ReferencedRule } from './ReferencedRule';


export class CustomRegexSetItem {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'regex_count'?: number;
    private 'referenced_rules'?: Array<ReferencedRule>;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public constructor() { 
    }
    public withId(id: string): CustomRegexSetItem {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CustomRegexSetItem {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CustomRegexSetItem {
        this['description'] = description;
        return this;
    }
    public withRegexCount(regexCount: number): CustomRegexSetItem {
        this['regex_count'] = regexCount;
        return this;
    }
    public set regexCount(regexCount: number  | undefined) {
        this['regex_count'] = regexCount;
    }
    public get regexCount(): number | undefined {
        return this['regex_count'];
    }
    public withReferencedRules(referencedRules: Array<ReferencedRule>): CustomRegexSetItem {
        this['referenced_rules'] = referencedRules;
        return this;
    }
    public set referencedRules(referencedRules: Array<ReferencedRule>  | undefined) {
        this['referenced_rules'] = referencedRules;
    }
    public get referencedRules(): Array<ReferencedRule> | undefined {
        return this['referenced_rules'];
    }
    public withCreateTime(createTime: number): CustomRegexSetItem {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): CustomRegexSetItem {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
}