import { AnswerBlockList } from './AnswerBlockList';


export class MathInfo {
    private 'question_number'?: string | undefined;
    private 'answer_block_count'?: number | undefined;
    private 'answer_block_list'?: Array<AnswerBlockList> | undefined;
    public constructor() { 
    }
    public withQuestionNumber(questionNumber: string): MathInfo {
        this['question_number'] = questionNumber;
        return this;
    }
    public set questionNumber(questionNumber: string | undefined) {
        this['question_number'] = questionNumber;
    }
    public get questionNumber() {
        return this['question_number'];
    }
    public withAnswerBlockCount(answerBlockCount: number): MathInfo {
        this['answer_block_count'] = answerBlockCount;
        return this;
    }
    public set answerBlockCount(answerBlockCount: number | undefined) {
        this['answer_block_count'] = answerBlockCount;
    }
    public get answerBlockCount() {
        return this['answer_block_count'];
    }
    public withAnswerBlockList(answerBlockList: Array<AnswerBlockList>): MathInfo {
        this['answer_block_list'] = answerBlockList;
        return this;
    }
    public set answerBlockList(answerBlockList: Array<AnswerBlockList> | undefined) {
        this['answer_block_list'] = answerBlockList;
    }
    public get answerBlockList() {
        return this['answer_block_list'];
    }
}