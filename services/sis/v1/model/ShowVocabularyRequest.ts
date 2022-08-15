

export class ShowVocabularyRequest {
    private 'vocabulary_id': string | undefined;
    public constructor(vocabularyId?: any) { 
        this['vocabulary_id'] = vocabularyId;
    }
    public withVocabularyId(vocabularyId: string): ShowVocabularyRequest {
        this['vocabulary_id'] = vocabularyId;
        return this;
    }
    public set vocabularyId(vocabularyId: string | undefined) {
        this['vocabulary_id'] = vocabularyId;
    }
    public get vocabularyId() {
        return this['vocabulary_id'];
    }
}