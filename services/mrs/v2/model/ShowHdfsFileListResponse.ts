import { FileStatusV2 } from './FileStatusV2';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHdfsFileListResponse extends SdkResponse {
    private 'total_count'?: number;
    public files?: Array<FileStatusV2>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ShowHdfsFileListResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withFiles(files: Array<FileStatusV2>): ShowHdfsFileListResponse {
        this['files'] = files;
        return this;
    }
}