import { DeployTemplateInfoScheduleInfo } from './DeployTemplateInfoScheduleInfo';
import { RuntimeRequestBody } from './RuntimeRequestBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAgentDaemonsetDeployTemplateResponse extends SdkResponse {
    private 'is_default'?: boolean;
    private 'runtime_info'?: Array<RuntimeRequestBody>;
    private 'schedule_info'?: DeployTemplateInfoScheduleInfo;
    public constructor() { 
        super();
    }
    public withIsDefault(isDefault: boolean): ShowAgentDaemonsetDeployTemplateResponse {
        this['is_default'] = isDefault;
        return this;
    }
    public set isDefault(isDefault: boolean  | undefined) {
        this['is_default'] = isDefault;
    }
    public get isDefault(): boolean | undefined {
        return this['is_default'];
    }
    public withRuntimeInfo(runtimeInfo: Array<RuntimeRequestBody>): ShowAgentDaemonsetDeployTemplateResponse {
        this['runtime_info'] = runtimeInfo;
        return this;
    }
    public set runtimeInfo(runtimeInfo: Array<RuntimeRequestBody>  | undefined) {
        this['runtime_info'] = runtimeInfo;
    }
    public get runtimeInfo(): Array<RuntimeRequestBody> | undefined {
        return this['runtime_info'];
    }
    public withScheduleInfo(scheduleInfo: DeployTemplateInfoScheduleInfo): ShowAgentDaemonsetDeployTemplateResponse {
        this['schedule_info'] = scheduleInfo;
        return this;
    }
    public set scheduleInfo(scheduleInfo: DeployTemplateInfoScheduleInfo  | undefined) {
        this['schedule_info'] = scheduleInfo;
    }
    public get scheduleInfo(): DeployTemplateInfoScheduleInfo | undefined {
        return this['schedule_info'];
    }
}