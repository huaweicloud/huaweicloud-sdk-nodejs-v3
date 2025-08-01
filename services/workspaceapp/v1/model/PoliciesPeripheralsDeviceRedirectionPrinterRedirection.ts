import { PrinterRedirectionOptions } from './PrinterRedirectionOptions';


export class PoliciesPeripheralsDeviceRedirectionPrinterRedirection {
    private 'printer_enable'?: boolean;
    public options?: PrinterRedirectionOptions;
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
    public withOptions(options: PrinterRedirectionOptions): PoliciesPeripheralsDeviceRedirectionPrinterRedirection {
        this['options'] = options;
        return this;
    }
}