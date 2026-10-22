import { AiguardCustomAnswersUpdateBody } from './AiguardCustomAnswersUpdateBody';


export class UpdateCustomAnswersRequest {
    private 'Content-Type'?: string;
    private 'answer_id'?: string;
    public body?: AiguardCustomAnswersUpdateBody;
    public constructor(contentType?: string, answerId?: string) { 
        this['Content-Type'] = contentType;
        this['answer_id'] = answerId;
    }
    public withContentType(contentType: string): UpdateCustomAnswersRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withAnswerId(answerId: string): UpdateCustomAnswersRequest {
        this['answer_id'] = answerId;
        return this;
    }
    public set answerId(answerId: string  | undefined) {
        this['answer_id'] = answerId;
    }
    public get answerId(): string | undefined {
        return this['answer_id'];
    }
    public withBody(body: AiguardCustomAnswersUpdateBody): UpdateCustomAnswersRequest {
        this['body'] = body;
        return this;
    }
}