import { QualityEnhanceTemplateInfo } from './QualityEnhanceTemplateInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListQualityEnhanceDefaultTemplateResponse extends SdkResponse {
    private 'task_array'?: Array<QualityEnhanceTemplateInfo>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withTaskArray(taskArray: Array<QualityEnhanceTemplateInfo>): ListQualityEnhanceDefaultTemplateResponse {
        this['task_array'] = taskArray;
        return this;
    }
    public set taskArray(taskArray: Array<QualityEnhanceTemplateInfo>  | undefined) {
        this['task_array'] = taskArray;
    }
    public get taskArray(): Array<QualityEnhanceTemplateInfo> | undefined {
        return this['task_array'];
    }
    public withTotal(total: number): ListQualityEnhanceDefaultTemplateResponse {
        this['total'] = total;
        return this;
    }
}