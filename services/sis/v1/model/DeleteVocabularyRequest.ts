

export class DeleteVocabularyRequest {
    private 'vocabulary_id'?: string;
    public constructor(vocabularyId?: string) { 
        this['vocabulary_id'] = vocabularyId;
    }
    public withVocabularyId(vocabularyId: string): DeleteVocabularyRequest {
        this['vocabulary_id'] = vocabularyId;
        return this;
    }
    public set vocabularyId(vocabularyId: string  | undefined) {
        this['vocabulary_id'] = vocabularyId;
    }
    public get vocabularyId(): string | undefined {
        return this['vocabulary_id'];
    }
}