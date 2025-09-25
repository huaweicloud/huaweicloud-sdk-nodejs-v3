import { ImageFileInfo } from './ImageFileInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListImageFilesResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<ImageFileInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListImageFilesResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<ImageFileInfo>): ListImageFilesResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ImageFileInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ImageFileInfo> | undefined {
        return this['data_list'];
    }
}