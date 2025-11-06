
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteGroupMergeRequestTemplateResponse extends SdkResponse {
    public id?: number;
    public constructor() { 
        super();
    }
    public withId(id: number): DeleteGroupMergeRequestTemplateResponse {
        this['id'] = id;
        return this;
    }
}