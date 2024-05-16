import { CreateKnowledgeIntentReq } from './CreateKnowledgeIntentReq';
import { KnowledgeQuestionCreateInfo } from './KnowledgeQuestionCreateInfo';


export class CreateIntentAndQuestionReq {
    public name?: string;
    public answer?: string;
    private 'skill_id'?: string;
    private 'question_list'?: Array<KnowledgeQuestionCreateInfo>;
    public constructor(name?: string, answer?: string, skillId?: string) { 
        this['name'] = name;
        this['answer'] = answer;
        this['skill_id'] = skillId;
    }
    public withName(name: string): CreateIntentAndQuestionReq {
        this['name'] = name;
        return this;
    }
    public withAnswer(answer: string): CreateIntentAndQuestionReq {
        this['answer'] = answer;
        return this;
    }
    public withSkillId(skillId: string): CreateIntentAndQuestionReq {
        this['skill_id'] = skillId;
        return this;
    }
    public set skillId(skillId: string  | undefined) {
        this['skill_id'] = skillId;
    }
    public get skillId(): string | undefined {
        return this['skill_id'];
    }
    public withQuestionList(questionList: Array<KnowledgeQuestionCreateInfo>): CreateIntentAndQuestionReq {
        this['question_list'] = questionList;
        return this;
    }
    public set questionList(questionList: Array<KnowledgeQuestionCreateInfo>  | undefined) {
        this['question_list'] = questionList;
    }
    public get questionList(): Array<KnowledgeQuestionCreateInfo> | undefined {
        return this['question_list'];
    }
}