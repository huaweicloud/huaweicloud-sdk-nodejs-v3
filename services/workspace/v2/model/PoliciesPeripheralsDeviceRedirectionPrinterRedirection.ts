import { PoliciesPeripheralsDeviceRedirectionPrinterRedirectionOptions } from './PoliciesPeripheralsDeviceRedirectionPrinterRedirectionOptions';


export class PoliciesPeripheralsDeviceRedirectionPrinterRedirection {
    private 'printer_enable'?: boolean;
    public options?: PoliciesPeripheralsDeviceRedirectionPrinterRedirectionOptions;
    public constructor() { 
    }
    public withPrinterEnable(printerEnable: boolean): PoliciesPeripheralsDeviceRedirectionPrinterRedirection {
        this['printer_enable'] = printerEnable;
        return this;
    }
    public set printerEnable(printerEnable: boolean  | undefined) {
        this['printer_enable'] = printerEnable;
    }
    public get printerEnable(): boolean | undefined {
        return this['printer_enable'];
    }
    public withOptions(options: PoliciesPeripheralsDeviceRedirectionPrinterRedirectionOptions): PoliciesPeripheralsDeviceRedirectionPrinterRedirection {
        this['options'] = options;
        return this;
    }
}