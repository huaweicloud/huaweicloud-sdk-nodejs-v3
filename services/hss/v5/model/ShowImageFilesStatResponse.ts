
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowImageFilesStatResponse extends SdkResponse {
    private 'total_files_num'?: number;
    private 'total_files_size'?: number;
    public constructor() { 
        super();
    }
    public withTotalFilesNum(totalFilesNum: number): ShowImageFilesStatResponse {
        this['total_files_num'] = totalFilesNum;
        return this;
    }
    public set totalFilesNum(totalFilesNum: number  | undefined) {
        this['total_files_num'] = totalFilesNum;
    }
    public get totalFilesNum(): number | undefined {
        return this['total_files_num'];
    }
    public withTotalFilesSize(totalFilesSize: number): ShowImageFilesStatResponse {
        this['total_files_size'] = totalFilesSize;
        return this;
    }
    public set totalFilesSize(totalFilesSize: number  | undefined) {
        this['total_files_size'] = totalFilesSize;
    }
    public get totalFilesSize(): number | undefined {
        return this['total_files_size'];
    }
}