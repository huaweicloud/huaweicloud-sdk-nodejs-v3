import { ShowVocabulariesParams } from './ShowVocabulariesParams';


export class ShowVocabulariesRequest {
    public body?: ShowVocabulariesParams;
    public constructor() { 
    }
    public withBody(body: ShowVocabulariesParams): ShowVocabulariesRequest {
        this['body'] = body;
        return this;
    }
}