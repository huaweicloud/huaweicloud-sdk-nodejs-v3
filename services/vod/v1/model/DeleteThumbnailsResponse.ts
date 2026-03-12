import { DeleteThumbnailResult } from './DeleteThumbnailResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteThumbnailsResponse extends SdkResponse {
    private 'delete_result_array'?: Array<DeleteThumbnailResult>;
    public constructor() { 
        super();
    }
    public withDeleteResultArray(deleteResultArray: Array<DeleteThumbnailResult>): DeleteThumbnailsResponse {
        this['delete_result_array'] = deleteResultArray;
        return this;
    }
    public set deleteResultArray(deleteResultArray: Array<DeleteThumbnailResult>  | undefined) {
        this['delete_result_array'] = deleteResultArray;
    }
    public get deleteResultArray(): Array<DeleteThumbnailResult> | undefined {
        return this['delete_result_array'];
    }
}