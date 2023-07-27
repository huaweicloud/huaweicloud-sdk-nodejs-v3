

export class ThrottleBindingBatchDelete {
    private 'throttle_bindings'?: Array<string>;
    public constructor() { 
    }
    public withThrottleBindings(throttleBindings: Array<string>): ThrottleBindingBatchDelete {
        this['throttle_bindings'] = throttleBindings;
        return this;
    }
    public set throttleBindings(throttleBindings: Array<string>  | undefined) {
        this['throttle_bindings'] = throttleBindings;
    }
    public get throttleBindings(): Array<string> | undefined {
        return this['throttle_bindings'];
    }
}