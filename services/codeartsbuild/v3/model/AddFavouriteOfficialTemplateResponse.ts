
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddFavouriteOfficialTemplateResponse extends SdkResponse {
    public status?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): AddFavouriteOfficialTemplateResponse {
        this['status'] = status;
        return this;
    }
}