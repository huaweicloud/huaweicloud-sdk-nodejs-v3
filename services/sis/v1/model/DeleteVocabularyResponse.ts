
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteVocabularyResponse extends SdkResponse {
    private 'vocabulary_id'?: string;
    public message?: string;
    public constructor() { 
        super();
    }
    public withVocabularyId(vocabularyId: string): DeleteVocabularyResponse {
        this['vocabulary_id'] = vocabularyId;
        return this;
    }
    public set vocabularyId(vocabularyId: string  | undefined) {
        this['vocabulary_id'] = vocabularyId;
    }
    public get vocabularyId(): string | undefined {
        return this['vocabulary_id'];
    }
    public withMessage(message: string): DeleteVocabularyResponse {
        this['message'] = message;
        return this;
    }
}