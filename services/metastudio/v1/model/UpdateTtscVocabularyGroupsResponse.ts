
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateTtscVocabularyGroupsResponse extends SdkResponse {
    public id?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateTtscVocabularyGroupsResponse {
        this['id'] = id;
        return this;
    }
}