import { PutUpdateVocabReq } from './PutUpdateVocabReq';


export class UpdateVocabularyRequest {
    private 'vocabulary_id': string | undefined;
    public body?: PutUpdateVocabReq;
    public constructor(vocabularyId?: any) { 
        this['vocabulary_id'] = vocabularyId;
    }
    public withVocabularyId(vocabularyId: string): UpdateVocabularyRequest {
        this['vocabulary_id'] = vocabularyId;
        return this;
    }
    public set vocabularyId(vocabularyId: string | undefined) {
        this['vocabulary_id'] = vocabularyId;
    }
    public get vocabularyId() {
        return this['vocabulary_id'];
    }
    public withBody(body: PutUpdateVocabReq): UpdateVocabularyRequest {
        this['body'] = body;
        return this;
    }
}