import { ReferencedRule } from './ReferencedRule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateCustomAnswersResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public description?: string;
    public answers?: Array<string>;
    private 'referenced_rules'?: Array<ReferencedRule>;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateCustomAnswersResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateCustomAnswersResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateCustomAnswersResponse {
        this['description'] = description;
        return this;
    }
    public withAnswers(answers: Array<string>): CreateCustomAnswersResponse {
        this['answers'] = answers;
        return this;
    }
    public withReferencedRules(referencedRules: Array<ReferencedRule>): CreateCustomAnswersResponse {
        this['referenced_rules'] = referencedRules;
        return this;
    }
    public set referencedRules(referencedRules: Array<ReferencedRule>  | undefined) {
        this['referenced_rules'] = referencedRules;
    }
    public get referencedRules(): Array<ReferencedRule> | undefined {
        return this['referenced_rules'];
    }
    public withCreateTime(createTime: number): CreateCustomAnswersResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): CreateCustomAnswersResponse {
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