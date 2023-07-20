import { FuncDestinationConfig } from './FuncDestinationConfig';


export class FuncAsyncDestinationConfig {
    private 'on_success'?: FuncDestinationConfig;
    private 'on_failure'?: FuncDestinationConfig;
    public constructor() { 
    }
    public withOnSuccess(onSuccess: FuncDestinationConfig): FuncAsyncDestinationConfig {
        this['on_success'] = onSuccess;
        return this;
    }
    public set onSuccess(onSuccess: FuncDestinationConfig  | undefined) {
        this['on_success'] = onSuccess;
    }
    public get onSuccess(): FuncDestinationConfig | undefined {
        return this['on_success'];
    }
    public withOnFailure(onFailure: FuncDestinationConfig): FuncAsyncDestinationConfig {
        this['on_failure'] = onFailure;
        return this;
    }
    public set onFailure(onFailure: FuncDestinationConfig  | undefined) {
        this['on_failure'] = onFailure;
    }
    public get onFailure(): FuncDestinationConfig | undefined {
        return this['on_failure'];
    }
}