import { PostCreateVocabReq } from './PostCreateVocabReq';


export class CreateVocabularyRequest {
    public body?: PostCreateVocabReq;
    public constructor() { 
    }
    public withBody(body: PostCreateVocabReq): CreateVocabularyRequest {
        this['body'] = body;
        return this;
    }
}