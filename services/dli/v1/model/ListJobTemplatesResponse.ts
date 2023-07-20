import { JobTemplateInfo } from './JobTemplateInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListJobTemplatesResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    public count?: number;
    public templates?: Array<JobTemplateInfo>;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ListJobTemplatesResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ListJobTemplatesResponse {
        this['message'] = message;
        return this;
    }
    public withCount(count: number): ListJobTemplatesResponse {
        this['count'] = count;
        return this;
    }
    public withTemplates(templates: Array<JobTemplateInfo>): ListJobTemplatesResponse {
        this['templates'] = templates;
        return this;
    }
}