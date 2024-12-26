
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SaveTtscVocabularyConfigsResponse extends SdkResponse {
    public id?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): SaveTtscVocabularyConfigsResponse {
        this['id'] = id;
        return this;
    }
}