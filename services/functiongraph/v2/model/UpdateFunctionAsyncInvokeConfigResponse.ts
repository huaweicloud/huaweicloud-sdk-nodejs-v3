import { FuncAsyncDestinationConfig } from './FuncAsyncDestinationConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateFunctionAsyncInvokeConfigResponse extends SdkResponse {
    private 'func_urn'?: string | undefined;
    private 'max_async_event_age_in_seconds'?: number | undefined;
    private 'max_async_retry_attempts'?: number | undefined;
    private 'destination_config'?: FuncAsyncDestinationConfig | undefined;
    private 'created_time'?: string | undefined;
    private 'last_modified'?: string | undefined;
    private 'enable_async_status_log'?: boolean | undefined;
    public constructor() { 
        super();
    }
    public withFuncUrn(funcUrn: string): UpdateFunctionAsyncInvokeConfigResponse {
        this['func_urn'] = funcUrn;
        return this;
    }
    public set funcUrn(funcUrn: string | undefined) {
        this['func_urn'] = funcUrn;
    }
    public get funcUrn() {
        return this['func_urn'];
    }
    public withMaxAsyncEventAgeInSeconds(maxAsyncEventAgeInSeconds: number): UpdateFunctionAsyncInvokeConfigResponse {
        this['max_async_event_age_in_seconds'] = maxAsyncEventAgeInSeconds;
        return this;
    }
    public set maxAsyncEventAgeInSeconds(maxAsyncEventAgeInSeconds: number | undefined) {
        this['max_async_event_age_in_seconds'] = maxAsyncEventAgeInSeconds;
    }
    public get maxAsyncEventAgeInSeconds() {
        return this['max_async_event_age_in_seconds'];
    }
    public withMaxAsyncRetryAttempts(maxAsyncRetryAttempts: number): UpdateFunctionAsyncInvokeConfigResponse {
        this['max_async_retry_attempts'] = maxAsyncRetryAttempts;
        return this;
    }
    public set maxAsyncRetryAttempts(maxAsyncRetryAttempts: number | undefined) {
        this['max_async_retry_attempts'] = maxAsyncRetryAttempts;
    }
    public get maxAsyncRetryAttempts() {
        return this['max_async_retry_attempts'];
    }
    public withDestinationConfig(destinationConfig: FuncAsyncDestinationConfig): UpdateFunctionAsyncInvokeConfigResponse {
        this['destination_config'] = destinationConfig;
        return this;
    }
    public set destinationConfig(destinationConfig: FuncAsyncDestinationConfig | undefined) {
        this['destination_config'] = destinationConfig;
    }
    public get destinationConfig() {
        return this['destination_config'];
    }
    public withCreatedTime(createdTime: string): UpdateFunctionAsyncInvokeConfigResponse {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime() {
        return this['created_time'];
    }
    public withLastModified(lastModified: string): UpdateFunctionAsyncInvokeConfigResponse {
        this['last_modified'] = lastModified;
        return this;
    }
    public set lastModified(lastModified: string | undefined) {
        this['last_modified'] = lastModified;
    }
    public get lastModified() {
        return this['last_modified'];
    }
    public withEnableAsyncStatusLog(enableAsyncStatusLog: boolean): UpdateFunctionAsyncInvokeConfigResponse {
        this['enable_async_status_log'] = enableAsyncStatusLog;
        return this;
    }
    public set enableAsyncStatusLog(enableAsyncStatusLog: boolean | undefined) {
        this['enable_async_status_log'] = enableAsyncStatusLog;
    }
    public get enableAsyncStatusLog() {
        return this['enable_async_status_log'];
    }
}