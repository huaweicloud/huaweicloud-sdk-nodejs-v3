import { AiguardCustomAnswersBody } from './AiguardCustomAnswersBody';


export class CreateCustomAnswersRequest {
    private 'Content-Type'?: string;
    public body?: AiguardCustomAnswersBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): CreateCustomAnswersRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: AiguardCustomAnswersBody): CreateCustomAnswersRequest {
        this['body'] = body;
        return this;
    }
}