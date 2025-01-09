import { InternetInfo } from './InternetInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInternetResponse extends SdkResponse {
    private 'internet_infos'?: Array<InternetInfo>;
    public constructor() { 
        super();
    }
    public withInternetInfos(internetInfos: Array<InternetInfo>): ListInternetResponse {
        this['internet_infos'] = internetInfos;
        return this;
    }
    public set internetInfos(internetInfos: Array<InternetInfo>  | undefined) {
        this['internet_infos'] = internetInfos;
    }
    public get internetInfos(): Array<InternetInfo> | undefined {
        return this['internet_infos'];
    }
}