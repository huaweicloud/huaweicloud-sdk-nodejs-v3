
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteMergeRequestTemplateResponse extends SdkResponse {
    public id?: number;
    public constructor() { 
        super();
    }
    public withId(id: number): DeleteMergeRequestTemplateResponse {
        this['id'] = id;
        return this;
    }
}