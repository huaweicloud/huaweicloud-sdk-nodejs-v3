import { AddRuleAclDtoRules } from './AddRuleAclDtoRules';


export class AddRuleAclDto {
    private 'object_id'?: string;
    public type?: AddRuleAclDtoTypeEnum | number;
    public rules?: Array<AddRuleAclDtoRules>;
    public constructor(objectId?: string, type?: number, rules?: Array<AddRuleAclDtoRules>) { 
        this['object_id'] = objectId;
        this['type'] = type;
        this['rules'] = rules;
    }
    public withObjectId(objectId: string): AddRuleAclDto {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withType(type: AddRuleAclDtoTypeEnum | number): AddRuleAclDto {
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
