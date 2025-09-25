import { FavouriteResponseResult } from './FavouriteResponseResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddFavouriteTaskResponse extends SdkResponse {
    public status?: string;
    public error?: object;
    public result?: FavouriteResponseResult;
    public constructor() { 
        super();
    }
    public withStatus(status: string): AddFavouriteTaskResponse {
        this['status'] = status;
        return this;
    }
    public withError(error: object): AddFavouriteTaskResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: FavouriteResponseResult): AddFavouriteTaskResponse {
        this['result'] = result;
        return this;
    }
}