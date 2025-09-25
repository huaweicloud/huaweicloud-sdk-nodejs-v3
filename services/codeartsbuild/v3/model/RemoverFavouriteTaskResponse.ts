import { FavouriteResponseResult } from './FavouriteResponseResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RemoverFavouriteTaskResponse extends SdkResponse {
    public status?: string;
    public error?: object;
    public result?: FavouriteResponseResult;
    public constructor() { 
        super();
    }
    public withStatus(status: string): RemoverFavouriteTaskResponse {
        this['status'] = status;
        return this;
    }
    public withError(error: object): RemoverFavouriteTaskResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: FavouriteResponseResult): RemoverFavouriteTaskResponse {
        this['result'] = result;
        return this;
    }
}