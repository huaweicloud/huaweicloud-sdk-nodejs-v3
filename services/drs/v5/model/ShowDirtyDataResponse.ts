import { DirtyData } from './DirtyData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDirtyDataResponse extends SdkResponse {
    public count?: number;
    private 'dirty_data_list'?: Array<DirtyData>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ShowDirtyDataResponse {
        this['count'] = count;
        return this;
    }
    public withDirtyDataList(dirtyDataList: Array<DirtyData>): ShowDirtyDataResponse {
        this['dirty_data_list'] = dirtyDataList;
        return this;
    }
    public set dirtyDataList(dirtyDataList: Array<DirtyData>  | undefined) {
        this['dirty_data_list'] = dirtyDataList;
    }
    public get dirtyDataList(): Array<DirtyData> | undefined {
        return this['dirty_data_list'];
    }
}