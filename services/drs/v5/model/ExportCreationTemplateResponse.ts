
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExportCreationTemplateResponse extends SdkResponse {
    public id?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ExportCreationTemplateResponse {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): ExportCreationTemplateResponse {
        this['status'] = status;
        return this;
    }
}