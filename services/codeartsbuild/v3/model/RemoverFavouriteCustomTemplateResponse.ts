
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RemoverFavouriteCustomTemplateResponse extends SdkResponse {
    public status?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): RemoverFavouriteCustomTemplateResponse {
        this['status'] = status;
        return this;
    }
}