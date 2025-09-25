
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RemoverFavouriteOfficialTemplateResponse extends SdkResponse {
    public status?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): RemoverFavouriteOfficialTemplateResponse {
        this['status'] = status;
        return this;
    }
}