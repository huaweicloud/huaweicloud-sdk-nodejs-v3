import { ShowVocabulariesParams } from './ShowVocabulariesParams';


export class ShowVocabulariesRequest {
    public offset?: number;
    public limit?: number;
    public body?: ShowVocabulariesParams;
    public constructor() { 
    }
    public withOffset(offset: number): ShowVocabulariesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowVocabulariesRequest {
        this['limit'] = limit;
        return this;
    }
    public withBody(body: ShowVocabulariesParams): ShowVocabulariesRequest {
        this['body'] = body;
        return this;
    }
}