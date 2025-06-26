import { CorpConfigInfo } from './CorpConfigInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCorpConfigInfoResponse extends SdkResponse {
    private 'config_infos'?: Array<CorpConfigInfo>;
    public constructor() { 
        super();
    }
    public withConfigInfos(configInfos: Array<CorpConfigInfo>): ListCorpConfigInfoResponse {
        this['config_infos'] = configInfos;
        return this;
    }
    public set configInfos(configInfos: Array<CorpConfigInfo>  | undefined) {
        this['config_infos'] = configInfos;
    }
    public get configInfos(): Array<CorpConfigInfo> | undefined {
        return this['config_infos'];
    }
}