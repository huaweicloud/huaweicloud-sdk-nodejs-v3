import { UpdateRuleInstance } from './UpdateRuleInstance';


export class UpdateRuleSetReq {
    public name?: string;
    private 'parent_id'?: string;
    public rules?: Array<UpdateRuleInstance>;
    public constructor() { 
    }
    public withName(name: string): UpdateRuleSetReq {
        this['name'] = name;
        return this;
    }
    public withParentId(parentId: string): UpdateRuleSetReq {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withRules(rules: Array<UpdateRuleInstance>): UpdateRuleSetReq {
        this['rules'] = rules;
        return this;
    }
}