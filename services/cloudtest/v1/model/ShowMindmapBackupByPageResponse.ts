import { BasePageInfoMindmapBackup } from './BasePageInfoMindmapBackup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMindmapBackupByPageResponse extends SdkResponse {
    public code?: string;
    public data?: BasePageInfoMindmapBackup;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ShowMindmapBackupByPageResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: BasePageInfoMindmapBackup): ShowMindmapBackupByPageResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): ShowMindmapBackupByPageResponse {
        this['message'] = message;
        return this;
    }
}