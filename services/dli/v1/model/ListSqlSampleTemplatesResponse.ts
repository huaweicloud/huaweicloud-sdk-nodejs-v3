import { SqlSampleTemplate } from './SqlSampleTemplate';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSqlSampleTemplatesResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    public sqls?: Array<SqlSampleTemplate>;
    public sqlCount?: number;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ListSqlSampleTemplatesResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ListSqlSampleTemplatesResponse {
        this['message'] = message;
        return this;
    }
    public withSqls(sqls: Array<SqlSampleTemplate>): ListSqlSampleTemplatesResponse {
        this['sqls'] = sqls;
        return this;
    }
    public withSqlCount(sqlCount: number): ListSqlSampleTemplatesResponse {
        this['sqlCount'] = sqlCount;
        return this;
    }
}