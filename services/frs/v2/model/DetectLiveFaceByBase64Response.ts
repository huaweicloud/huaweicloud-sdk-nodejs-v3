import { LiveDetectFaceRespResult } from './LiveDetectFaceRespResult';
import { WarningList } from './WarningList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DetectLiveFaceByBase64Response extends SdkResponse {
    public result?: LiveDetectFaceRespResult;
    private 'warning-list'?: Array<WarningList> | undefined;
    public constructor() { 
        super();
    }
    public withResult(result: LiveDetectFaceRespResult): DetectLiveFaceByBase64Response {
        this['result'] = result;
        return this;
    }
    public withWarningList(warningList: Array<WarningList>): DetectLiveFaceByBase64Response {
        this['warning-list'] = warningList;
        return this;
    }
    public set warningList(warningList: Array<WarningList> | undefined) {
        this['warning-list'] = warningList;
    }
    public get warningList() {
        return this['warning-list'];
    }
}