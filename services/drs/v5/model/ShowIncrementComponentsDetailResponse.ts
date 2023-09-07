import { IncreComponentDetail } from './IncreComponentDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowIncrementComponentsDetailResponse extends SdkResponse {
    private 'update_time'?: string;
    private 'increment_components_list'?: Array<IncreComponentDetail>;
    public constructor() { 
        super();
    }
    public withUpdateTime(updateTime: string): ShowIncrementComponentsDetailResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withIncrementComponentsList(incrementComponentsList: Array<IncreComponentDetail>): ShowIncrementComponentsDetailResponse {
        this['increment_components_list'] = incrementComponentsList;
        return this;
    }
    public set incrementComponentsList(incrementComponentsList: Array<IncreComponentDetail>  | undefined) {
        this['increment_components_list'] = incrementComponentsList;
    }
    public get incrementComponentsList(): Array<IncreComponentDetail> | undefined {
        return this['increment_components_list'];
    }
}