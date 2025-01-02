import { CorpDigitalInfo } from './CorpDigitalInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchPrivateCorpDigitalInfoResponse extends SdkResponse {
    public returnCode?: number;
    public returnDesc?: string;
    public corpDigitalInfoList?: Array<CorpDigitalInfo>;
    public constructor() { 
        super();
    }
    public withReturnCode(returnCode: number): SearchPrivateCorpDigitalInfoResponse {
        this['returnCode'] = returnCode;
        return this;
    }
    public withReturnDesc(returnDesc: string): SearchPrivateCorpDigitalInfoResponse {
        this['returnDesc'] = returnDesc;
        return this;
    }
    public withCorpDigitalInfoList(corpDigitalInfoList: Array<CorpDigitalInfo>): SearchPrivateCorpDigitalInfoResponse {
        this['corpDigitalInfoList'] = corpDigitalInfoList;
        return this;
    }
}