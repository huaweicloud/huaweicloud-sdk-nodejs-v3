import { SparkJobTemplate } from './SparkJobTemplate';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSparkJobTemplatesResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    public count?: number;
    public templates?: Array<SparkJobTemplate>;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ListSparkJobTemplatesResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ListSparkJobTemplatesResponse {
        this['message'] = message;
        return this;
    }
    public withCount(count: number): ListSparkJobTemplatesResponse {
        this['count'] = count;
        return this;
    }
    public withTemplates(templates: Array<SparkJobTemplate>): ListSparkJobTemplatesResponse {
        this['templates'] = templates;
        return this;
    }
}