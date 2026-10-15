import { FileInfo } from './FileInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFilesResponse extends SdkResponse {
    private 'total_count'?: number;
    public files?: Array<FileInfo>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ShowFilesResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withFiles(files: Array<FileInfo>): ShowFilesResponse {
        this['files'] = files;
        return this;
    }
}