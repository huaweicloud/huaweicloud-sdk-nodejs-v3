import { SessionPrinterOptions } from './SessionPrinterOptions';


export class PoliciesPeripheralsDeviceRedirectionSessionPrinter {
    private 'session_printer_enable'?: boolean;
    public options?: SessionPrinterOptions;
    public constructor() { 
    }
    public withSessionPrinterEnable(sessionPrinterEnable: boolean): PoliciesPeripheralsDeviceRedirectionSessionPrinter {
        this['session_printer_enable'] = sessionPrinterEnable;
        return this;
    }
    public set sessionPrinterEnable(sessionPrinterEnable: boolean  | undefined) {
        this['session_printer_enable'] = sessionPrinterEnable;
    }
    public get sessionPrinterEnable(): boolean | undefined {
        return this['session_printer_enable'];
    }
    public withOptions(options: SessionPrinterOptions): PoliciesPeripheralsDeviceRedirectionSessionPrinter {
        this['options'] = options;
        return this;
    }
}