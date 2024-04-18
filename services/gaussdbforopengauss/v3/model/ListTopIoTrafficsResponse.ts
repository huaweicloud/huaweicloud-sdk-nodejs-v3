import { TopIoInfo } from './TopIoInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTopIoTrafficsResponse extends SdkResponse {
    private 'top_io_infos'?: Array<TopIoInfo>;
    public constructor() { 
        super();
    }
    public withTopIoInfos(topIoInfos: Array<TopIoInfo>): ListTopIoTrafficsResponse {
        this['top_io_infos'] = topIoInfos;
        return this;
    }
    public set topIoInfos(topIoInfos: Array<TopIoInfo>  | undefined) {
        this['top_io_infos'] = topIoInfos;
    }
    public get topIoInfos(): Array<TopIoInfo> | undefined {
        return this['top_io_infos'];
    }
}