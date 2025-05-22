import { RedisSchema } from './RedisSchema';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRedistributionSchemaResponse extends SdkResponse {
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public schemas?: Array<RedisSchema>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withErrorCode(errorCode: string): ListRedistributionSchemaResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): ListRedistributionSchemaResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withSchemas(schemas: Array<RedisSchema>): ListRedistributionSchemaResponse {
        this['schemas'] = schemas;
        return this;
    }
    public withCount(count: number): ListRedistributionSchemaResponse {
        this['count'] = count;
        return this;
    }
}