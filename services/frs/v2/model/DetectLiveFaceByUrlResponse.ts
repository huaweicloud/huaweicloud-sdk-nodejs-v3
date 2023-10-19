import { LiveDetectFaceRespResult } from './LiveDetectFaceRespResult';
import { WarningList } from './WarningList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DetectLiveFaceByUrlResponse extends SdkResponse {
    public result?: LiveDetectFaceRespResult;
    private 'warning-list'?: Array<WarningList>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withResult(result: LiveDetectFaceRespResult): DetectLiveFaceByUrlResponse {
        this['result'] = result;
        return this;
    }
    public withWarningList(warningList: Array<WarningList>): DetectLiveFaceByUrlResponse {
        this['warning-list'] = warningList;
        return this;
    }
    public set warningList(warningList: Array<WarningList>  | undefined) {
        this['warning-list'] = warningList;
    }
    public get warningList(): Array<WarningList> | undefined {
        return this['warning-list'];
    }
    public withXRequestId(xRequestId: string): DetectLiveFaceByUrlResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}