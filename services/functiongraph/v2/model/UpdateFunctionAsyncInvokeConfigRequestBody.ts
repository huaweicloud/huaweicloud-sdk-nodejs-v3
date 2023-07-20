import { FuncAsyncDestinationConfig } from './FuncAsyncDestinationConfig';


export class UpdateFunctionAsyncInvokeConfigRequestBody {
    private 'max_async_event_age_in_seconds'?: number;
    private 'max_async_retry_attempts'?: number;
    private 'destination_config'?: FuncAsyncDestinationConfig;
    private 'enable_async_status_log'?: boolean;
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
}