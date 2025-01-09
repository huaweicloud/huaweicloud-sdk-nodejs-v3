

export class PoliciesPeripheralsDeviceRedirectionSessionPrinterOptions {
    private 'session_printer_customization_policy'?: string;
    public constructor() { 
    }
    public withSessionPrinterCustomizationPolicy(sessionPrinterCustomizationPolicy: string): PoliciesPeripheralsDeviceRedirectionSessionPrinterOptions {
        this['session_printer_customization_policy'] = sessionPrinterCustomizationPolicy;
        return this;
    }
    public set sessionPrinterCustomizationPolicy(sessionPrinterCustomizationPolicy: string  | undefined) {
        this['session_printer_customization_policy'] = sessionPrinterCustomizationPolicy;
    }
    public get sessionPrinterCustomizationPolicy(): string | undefined {
        return this['session_printer_customization_policy'];
    }
}