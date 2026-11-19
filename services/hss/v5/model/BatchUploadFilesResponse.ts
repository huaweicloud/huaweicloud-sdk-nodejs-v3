import { BatchUploadFilesResponseInfoFailFileInfo } from './BatchUploadFilesResponseInfoFailFileInfo';
import { BatchUploadFilesResponseInfoSuccessFileInfo } from './BatchUploadFilesResponseInfoSuccessFileInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchUploadFilesResponse extends SdkResponse {
    private 'success_file_info'?: Array<BatchUploadFilesResponseInfoSuccessFileInfo>;
    private 'fail_file_info'?: Array<BatchUploadFilesResponseInfoFailFileInfo>;
    public constructor() { 
        super();
    }
    public withSuccessFileInfo(successFileInfo: Array<BatchUploadFilesResponseInfoSuccessFileInfo>): BatchUploadFilesResponse {
        this['success_file_info'] = successFileInfo;
        return this;
    }
    public set successFileInfo(successFileInfo: Array<BatchUploadFilesResponseInfoSuccessFileInfo>  | undefined) {
        this['success_file_info'] = successFileInfo;
    }
    public get successFileInfo(): Array<BatchUploadFilesResponseInfoSuccessFileInfo> | undefined {
        return this['success_file_info'];
    }
    public withFailFileInfo(failFileInfo: Array<BatchUploadFilesResponseInfoFailFileInfo>): BatchUploadFilesResponse {
        this['fail_file_info'] = failFileInfo;
        return this;
    }
    public set failFileInfo(failFileInfo: Array<BatchUploadFilesResponseInfoFailFileInfo>  | undefined) {
        this['fail_file_info'] = failFileInfo;
    }
    public get failFileInfo(): Array<BatchUploadFilesResponseInfoFailFileInfo> | undefined {
        return this['fail_file_info'];
    }
}