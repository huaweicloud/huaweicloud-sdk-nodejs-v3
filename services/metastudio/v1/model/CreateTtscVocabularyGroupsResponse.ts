
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateTtscVocabularyGroupsResponse extends SdkResponse {
    public id?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateTtscVocabularyGroupsResponse {
        this['id'] = id;
        return this;
    }
}