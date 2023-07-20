import { LiveDetectRespVideoresult } from './LiveDetectRespVideoresult';
import { WarningList } from './WarningList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DetectLiveByUrlIntlResponse extends SdkResponse {
    private 'video-result'?: LiveDetectRespVideoresult;
    private 'warning-list'?: Array<WarningList>;
    public constructor() { 
        super();
    }
    public withVideoResult(videoResult: LiveDetectRespVideoresult): DetectLiveByUrlIntlResponse {
        this['video-result'] = videoResult;
        return this;
    }
    public set videoResult(videoResult: LiveDetectRespVideoresult  | undefined) {
        this['video-result'] = videoResult;
    }
    public get videoResult(): LiveDetectRespVideoresult | undefined {
        return this['video-result'];
    }
    public withWarningList(warningList: Array<WarningList>): DetectLiveByUrlIntlResponse {
        this['warning-list'] = warningList;
        return this;
    }
    public set warningList(warningList: Array<WarningList>  | undefined) {
        this['warning-list'] = warningList;
    }
    public get warningList(): Array<WarningList> | undefined {
        return this['warning-list'];
    }
}