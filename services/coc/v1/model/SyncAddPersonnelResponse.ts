
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SyncAddPersonnelResponse extends SdkResponse {
    private 'added_ids'?: Array<string>;
    private 'error_ids'?: Array<string>;
    public constructor() { 
        super();
    }
    public withAddedIds(addedIds: Array<string>): SyncAddPersonnelResponse {
        this['added_ids'] = addedIds;
        return this;
    }
    public set addedIds(addedIds: Array<string>  | undefined) {
        this['added_ids'] = addedIds;
    }
    public get addedIds(): Array<string> | undefined {
        return this['added_ids'];
    }
    public withErrorIds(errorIds: Array<string>): SyncAddPersonnelResponse {
        this['error_ids'] = errorIds;
        return this;
    }
    public set errorIds(errorIds: Array<string>  | undefined) {
        this['error_ids'] = errorIds;
    }
    public get errorIds(): Array<string> | undefined {
        return this['error_ids'];
    }
}