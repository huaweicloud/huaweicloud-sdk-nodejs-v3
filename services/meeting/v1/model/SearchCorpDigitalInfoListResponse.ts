import { CorpDigitalInfo } from './CorpDigitalInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchCorpDigitalInfoListResponse extends SdkResponse {
    public returnCode?: number;
    public returnDesc?: string;
    public corpDigitalInfoList?: Array<CorpDigitalInfo>;
    public constructor() { 
        super();
    }
    public withReturnCode(returnCode: number): SearchCorpDigitalInfoListResponse {
        this['returnCode'] = returnCode;
        return this;
    }
    public withReturnDesc(returnDesc: string): SearchCorpDigitalInfoListResponse {
        this['returnDesc'] = returnDesc;
        return this;
    }
    public withCorpDigitalInfoList(corpDigitalInfoList: Array<CorpDigitalInfo>): SearchCorpDigitalInfoListResponse {
        this['corpDigitalInfoList'] = corpDigitalInfoList;
        return this;
    }
}