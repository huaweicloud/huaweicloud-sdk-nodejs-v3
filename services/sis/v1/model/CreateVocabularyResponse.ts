
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateVocabularyResponse extends SdkResponse {
    private 'vocabulary_id'?: string;
    public constructor() { 
        super();
    }
    public withVocabularyId(vocabularyId: string): CreateVocabularyResponse {
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