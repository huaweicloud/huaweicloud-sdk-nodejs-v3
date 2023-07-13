import { DeleteResult } from './DeleteResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteAssetsResponse extends SdkResponse {
    private 'delete_result_array'?: Array<DeleteResult> | undefined;
    public constructor() { 
        super();
    }
    public withDeleteResultArray(deleteResultArray: Array<DeleteResult>): DeleteAssetsResponse {
        this['delete_result_array'] = deleteResultArray;
        return this;
    }
    public set deleteResultArray(deleteResultArray: Array<DeleteResult> | undefined) {
        this['delete_result_array'] = deleteResultArray;
    }
    public get deleteResultArray() {
        return this['delete_result_array'];
    }
}