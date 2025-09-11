import { FuncAsyncDestinationConfig } from './FuncAsyncDestinationConfig';


export class UpdateFunctionAsyncInvokeConfigRequestBody {
    private 'max_async_event_age_in_seconds'?: number;
    private 'max_async_retry_attempts'?: number;
    private 'destination_config'?: FuncAsyncDestinationConfig;
    private 'enable_async_status_log'?: boolean;
    private 'log_group_id'?: string;
    private 'log_stream_id'?: string;
    private 'log_group_name'?: string;
    private 'log_stream_name'?: string;
    public constructor() { 
    }
    public withMaxAsyncEventAgeInSeconds(maxAsyncEventAgeInSeconds: number): UpdateFunctionAsyncInvokeConfigRequestBody {
        this['max_async_event_age_in_seconds'] = maxAsyncEventAgeInSeconds;
        return this;
    }
    public set maxAsyncEventAgeInSeconds(maxAsyncEventAgeInSeconds: number  | undefined) {
        this['max_async_event_age_in_seconds'] = maxAsyncEventAgeInSeconds;
    }
    public get maxAsyncEventAgeInSeconds(): number | undefined {
        return this['max_async_event_age_in_seconds'];
    }
    public withMaxAsyncRetryAttempts(maxAsyncRetryAttempts: number): UpdateFunctionAsyncInvokeConfigRequestBody {
        this['max_async_retry_attempts'] = maxAsyncRetryAttempts;
        return this;
    }
    public set maxAsyncRetryAttempts(maxAsyncRetryAttempts: number  | undefined) {
        this['max_async_retry_attempts'] = maxAsyncRetryAttempts;
    }
    public get maxAsyncRetryAttempts(): number | undefined {
        return this['max_async_retry_attempts'];
    }
    public withDestinationConfig(destinationConfig: FuncAsyncDestinationConfig): UpdateFunctionAsyncInvokeConfigRequestBody {
        this['destination_config'] = destinationConfig;
        return this;
    }
    public set destinationConfig(destinationConfig: FuncAsyncDestinationConfig  | undefined) {
        this['destination_config'] = destinationConfig;
    }
    public get destinationConfig(): FuncAsyncDestinationConfig | undefined {
        return this['destination_config'];
    }
    public withEnableAsyncStatusLog(enableAsyncStatusLog: boolean): UpdateFunctionAsyncInvokeConfigRequestBody {
        this['enable_async_status_log'] = enableAsyncStatusLog;
        return this;
    }
    public set enableAsyncStatusLog(enableAsyncStatusLog: boolean  | undefined) {
        this['enable_async_status_log'] = enableAsyncStatusLog;
    }
    public get enableAsyncStatusLog(): boolean | undefined {
        return this['enable_async_status_log'];
    }
    public withLogGroupId(logGroupId: string): UpdateFunctionAsyncInvokeConfigRequestBody {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withLogStreamId(logStreamId: string): UpdateFunctionAsyncInvokeConfigRequestBody {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string  | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId(): string | undefined {
        return this['log_stream_id'];
    }
    public withLogGroupName(logGroupName: string): UpdateFunctionAsyncInvokeConfigRequestBody {
        this['log_group_name'] = logGroupName;
        return this;
    }
    public set logGroupName(logGroupName: string  | undefined) {
        this['log_group_name'] = logGroupName;
    }
    public get logGroupName(): string | undefined {
        return this['log_group_name'];
    }
    public withLogStreamName(logStreamName: string): UpdateFunctionAsyncInvokeConfigRequestBody {
        this['log_stream_name'] = logStreamName;
        return this;
    }
    public set logStreamName(logStreamName: string  | undefined) {
        this['log_stream_name'] = logStreamName;
    }
    public get logStreamName(): string | undefined {
        return this['log_stream_name'];
    }
}