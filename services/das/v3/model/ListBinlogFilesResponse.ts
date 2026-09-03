import { BinlogFileInfo } from './BinlogFileInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBinlogFilesResponse extends SdkResponse {
    public total?: number;
    private 'file_list'?: Array<BinlogFileInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListBinlogFilesResponse {
        this['total'] = total;
        return this;
    }
    public withFileList(fileList: Array<BinlogFileInfo>): ListBinlogFilesResponse {
        this['file_list'] = fileList;
        return this;
    }
    public set fileList(fileList: Array<BinlogFileInfo>  | undefined) {
        this['file_list'] = fileList;
    }
    public get fileList(): Array<BinlogFileInfo> | undefined {
        return this['file_list'];
    }
}