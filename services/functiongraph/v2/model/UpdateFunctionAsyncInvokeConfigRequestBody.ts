import { FuncAsyncDestinationConfig } from './FuncAsyncDestinationConfig';


export class UpdateFunctionAsyncInvokeConfigRequestBody {
    private 'max_async_event_age_in_seconds'?: number | undefined;
    private 'max_async_retry_attempts'?: number | undefined;
    private 'destination_config'?: FuncAsyncDestinationConfig | undefined;
    private 'enable_async_status_log'?: boolean | undefined;
    public constructor() { 
    }
    public withMaxAsyncEventAgeInSeconds(maxAsyncEventAgeInSeconds: number): UpdateFunctionAsyncInvokeConfigRequestBody {
        this['max_async_event_age_in_seconds'] = maxAsyncEventAgeInSeconds;
        return this;
    }
    public set maxAsyncEventAgeInSeconds(maxAsyncEventAgeInSeconds: number | undefined) {
        this['max_async_event_age_in_seconds'] = maxAsyncEventAgeInSeconds;
    }
    public get maxAsyncEventAgeInSeconds() {
        return this['max_async_event_age_in_seconds'];
    }
    public withMaxAsyncRetryAttempts(maxAsyncRetryAttempts: number): UpdateFunctionAsyncInvokeConfigRequestBody {
        this['max_async_retry_attempts'] = maxAsyncRetryAttempts;
        return this;
    }
    public set maxAsyncRetryAttempts(maxAsyncRetryAttempts: number | undefined) {
        this['max_async_retry_attempts'] = maxAsyncRetryAttempts;
    }
    public get maxAsyncRetryAttempts() {
        return this['max_async_retry_attempts'];
    }
    public withDestinationConfig(destinationConfig: FuncAsyncDestinationConfig): UpdateFunctionAsyncInvokeConfigRequestBody {
        this['destination_config'] = destinationConfig;
        return this;
    }
    public set destinationConfig(destinationConfig: FuncAsyncDestinationConfig | undefined) {
        this['destination_config'] = destinationConfig;
    }
    public get destinationConfig() {
        return this['destination_config'];
    }
    public withEnableAsyncStatusLog(enableAsyncStatusLog: boolean): UpdateFunctionAsyncInvokeConfigRequestBody {
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