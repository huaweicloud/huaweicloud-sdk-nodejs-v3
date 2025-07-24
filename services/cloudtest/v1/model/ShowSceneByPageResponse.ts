import { BasePageInfoScene } from './BasePageInfoScene';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSceneByPageResponse extends SdkResponse {
    public code?: string;
    public data?: BasePageInfoScene;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ShowSceneByPageResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: BasePageInfoScene): ShowSceneByPageResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): ShowSceneByPageResponse {
        this['message'] = message;
        return this;
    }
}