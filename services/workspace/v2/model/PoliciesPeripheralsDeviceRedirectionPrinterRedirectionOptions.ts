

export class PoliciesPeripheralsDeviceRedirectionPrinterRedirectionOptions {
    private 'mobile_printer_enable'?: boolean;
    private 'print_data_compression_mode'?: boolean;
    private 'sync_client_default_printer_enable'?: boolean;
    private 'universal_printer_driver'?: string;
    public constructor() { 
    }
    public withMobilePrinterEnable(mobilePrinterEnable: boolean): PoliciesPeripheralsDeviceRedirectionPrinterRedirectionOptions {
        this['mobile_printer_enable'] = mobilePrinterEnable;
        return this;
    }
    public set mobilePrinterEnable(mobilePrinterEnable: boolean  | undefined) {
        this['mobile_printer_enable'] = mobilePrinterEnable;
    }
    public get mobilePrinterEnable(): boolean | undefined {
        return this['mobile_printer_enable'];
    }
    public withPrintDataCompressionMode(printDataCompressionMode: boolean): PoliciesPeripheralsDeviceRedirectionPrinterRedirectionOptions {
        this['print_data_compression_mode'] = printDataCompressionMode;
        return this;
    }
    public set printDataCompressionMode(printDataCompressionMode: boolean  | undefined) {
        this['print_data_compression_mode'] = printDataCompressionMode;
    }
    public get printDataCompressionMode(): boolean | undefined {
        return this['print_data_compression_mode'];
    }
    public withSyncClientDefaultPrinterEnable(syncClientDefaultPrinterEnable: boolean): PoliciesPeripheralsDeviceRedirectionPrinterRedirectionOptions {
        this['sync_client_default_printer_enable'] = syncClientDefaultPrinterEnable;
        return this;
    }
    public set syncClientDefaultPrinterEnable(syncClientDefaultPrinterEnable: boolean  | undefined) {
        this['sync_client_default_printer_enable'] = syncClientDefaultPrinterEnable;
    }
    public get syncClientDefaultPrinterEnable(): boolean | undefined {
        return this['sync_client_default_printer_enable'];
    }
    public withUniversalPrinterDriver(universalPrinterDriver: string): PoliciesPeripheralsDeviceRedirectionPrinterRedirectionOptions {
        this['universal_printer_driver'] = universalPrinterDriver;
        return this;
    }
    public set universalPrinterDriver(universalPrinterDriver: string  | undefined) {
        this['universal_printer_driver'] = universalPrinterDriver;
    }
    public get universalPrinterDriver(): string | undefined {
        return this['universal_printer_driver'];
    }
}