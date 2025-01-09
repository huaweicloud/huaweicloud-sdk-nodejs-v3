import { PoliciesPeripheralsDeviceRedirectionHidRedirectionOptions } from './PoliciesPeripheralsDeviceRedirectionHidRedirectionOptions';


export class PoliciesPeripheralsDeviceRedirectionHidRedirection {
    private 'hid_redirection_enable'?: boolean;
    public options?: PoliciesPeripheralsDeviceRedirectionHidRedirectionOptions;
    public constructor() { 
    }
    public withHidRedirectionEnable(hidRedirectionEnable: boolean): PoliciesPeripheralsDeviceRedirectionHidRedirection {
        this['hid_redirection_enable'] = hidRedirectionEnable;
        return this;
    }
    public set hidRedirectionEnable(hidRedirectionEnable: boolean  | undefined) {
        this['hid_redirection_enable'] = hidRedirectionEnable;
    }
    public get hidRedirectionEnable(): boolean | undefined {
        return this['hid_redirection_enable'];
    }
    public withOptions(options: PoliciesPeripheralsDeviceRedirectionHidRedirectionOptions): PoliciesPeripheralsDeviceRedirectionHidRedirection {
        this['options'] = options;
        return this;
    }
}