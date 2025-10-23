
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteProjectMergeRequestTemplateResponse extends SdkResponse {
    public id?: number;
    public constructor() { 
        super();
    }
    public withId(id: number): DeleteProjectMergeRequestTemplateResponse {
        this['id'] = id;
        return this;
    }
}