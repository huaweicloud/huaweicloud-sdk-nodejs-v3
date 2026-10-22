import { AiguardCustomAnswersBatchDeleteBody } from './AiguardCustomAnswersBatchDeleteBody';


export class BatchDeleteCustomAnswersRequest {
    private 'Content-Type'?: string;
    public body?: AiguardCustomAnswersBatchDeleteBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): BatchDeleteCustomAnswersRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: AiguardCustomAnswersBatchDeleteBody): BatchDeleteCustomAnswersRequest {
        this['body'] = body;
        return this;
    }
}