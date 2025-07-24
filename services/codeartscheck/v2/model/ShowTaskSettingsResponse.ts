import { TaskAdvancedSettings } from './TaskAdvancedSettings';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTaskSettingsResponse extends SdkResponse {
    public info?: Array<TaskAdvancedSettings>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withInfo(info: Array<TaskAdvancedSettings>): ShowTaskSettingsResponse {
        this['info'] = info;
        return this;
    }
    public withTotal(total: number): ShowTaskSettingsResponse {
        this['total'] = total;
        return this;
    }
}