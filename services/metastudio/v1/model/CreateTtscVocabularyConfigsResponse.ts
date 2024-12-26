
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateTtscVocabularyConfigsResponse extends SdkResponse {
    public id?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateTtscVocabularyConfigsResponse {
        this['id'] = id;
        return this;
    }
}