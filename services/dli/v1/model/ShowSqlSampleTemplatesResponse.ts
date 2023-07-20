import { SqlsSampleResp } from './SqlsSampleResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSqlSampleTemplatesResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    public sqls?: Array<SqlsSampleResp>;
    public sqlCount?: number;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ShowSqlSampleTemplatesResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ShowSqlSampleTemplatesResponse {
        this['message'] = message;
        return this;
    }
    public withSqls(sqls: Array<SqlsSampleResp>): ShowSqlSampleTemplatesResponse {
        this['sqls'] = sqls;
        return this;
    }
    public withSqlCount(sqlCount: number): ShowSqlSampleTemplatesResponse {
        this['sqlCount'] = sqlCount;
        return this;
    }
}