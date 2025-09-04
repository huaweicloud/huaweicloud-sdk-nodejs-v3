
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddFavouriteCustomTemplateResponse extends SdkResponse {
    public status?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): AddFavouriteCustomTemplateResponse {
        this['status'] = status;
        return this;
    }
}