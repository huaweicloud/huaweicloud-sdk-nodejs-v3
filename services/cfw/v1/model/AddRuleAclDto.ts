import { AddRuleAclDtoRules } from './AddRuleAclDtoRules';


export class AddRuleAclDto {
    private 'object_id': string | undefined;
    public type: AddRuleAclDtoTypeEnum;
    public rules: Array<AddRuleAclDtoRules>;
    public constructor(objectId?: any, type?: any, rules?: any) { 
        this['object_id'] = objectId;
        this['type'] = type;
        this['rules'] = rules;
    }
    public withObjectId(objectId: string): AddRuleAclDto {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId() {
        return this['object_id'];
    }
    public withType(type: AddRuleAclDtoTypeEnum): AddRuleAclDto {
        this['type'] = type;
        return this;
    }
    public withRules(rules: Array<AddRuleAclDtoRules>): AddRuleAclDto {
        this['rules'] = rules;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AddRuleAclDtoTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
