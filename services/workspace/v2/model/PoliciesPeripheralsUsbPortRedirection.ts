import { PoliciesPeripheralsUsbPortRedirectionOptions } from './PoliciesPeripheralsUsbPortRedirectionOptions';


export class PoliciesPeripheralsUsbPortRedirection {
    private 'usb_enable'?: boolean;
    public options?: PoliciesPeripheralsUsbPortRedirectionOptions;
    public constructor() { 
    }
    public withUsbEnable(usbEnable: boolean): PoliciesPeripheralsUsbPortRedirection {
        this['usb_enable'] = usbEnable;
        return this;
    }
    public set usbEnable(usbEnable: boolean  | undefined) {
        this['usb_enable'] = usbEnable;
    }
    public get usbEnable(): boolean | undefined {
        return this['usb_enable'];
    }
    public withOptions(options: PoliciesPeripheralsUsbPortRedirectionOptions): PoliciesPeripheralsUsbPortRedirection {
        this['options'] = options;
        return this;
    }
}