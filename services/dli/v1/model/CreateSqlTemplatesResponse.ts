
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSqlTemplatesResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    private 'sql_id'?: string;
    public group?: string;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): CreateSqlTemplatesResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): CreateSqlTemplatesResponse {
        this['message'] = message;
        return this;
    }
    public withSqlId(sqlId: string): CreateSqlTemplatesResponse {
        this['sql_id'] = sqlId;
        return this;
    }
    public set sqlId(sqlId: string  | undefined) {
        this['sql_id'] = sqlId;
    }
    public get sqlId(): string | undefined {
        return this['sql_id'];
    }
    public withGroup(group: string): CreateSqlTemplatesResponse {
        this['group'] = group;
        return this;
    }
}