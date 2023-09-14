import { CorsConfig } from './CorsConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateFunctionUrlResponse extends SdkResponse {
    private 'auth_type'?: string;
    public cors?: CorsConfig;
    private 'function_url'?: string;
    private 'create_time'?: string;
    private 'last_modified_time'?: string;
    public constructor() { 
        super();
    }
    public withAuthType(authType: string): CreateFunctionUrlResponse {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): string | undefined {
        return this['auth_type'];
    }
    public withCors(cors: CorsConfig): CreateFunctionUrlResponse {
        this['cors'] = cors;
        return this;
    }
    public withFunctionUrl(functionUrl: string): CreateFunctionUrlResponse {
        this['function_url'] = functionUrl;
        return this;
    }
    public set functionUrl(functionUrl: string  | undefined) {
        this['function_url'] = functionUrl;
    }
    public get functionUrl(): string | undefined {
        return this['function_url'];
    }
    public withCreateTime(createTime: string): CreateFunctionUrlResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withLastModifiedTime(lastModifiedTime: string): CreateFunctionUrlResponse {
        this['last_modified_time'] = lastModifiedTime;
        return this;
    }
    public set lastModifiedTime(lastModifiedTime: string  | undefined) {
        this['last_modified_time'] = lastModifiedTime;
    }
    public get lastModifiedTime(): string | undefined {
        return this['last_modified_time'];
    }
}