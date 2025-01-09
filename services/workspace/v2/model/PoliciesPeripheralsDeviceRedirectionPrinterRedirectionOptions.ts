

export class PoliciesPeripheralsDeviceRedirectionPrinterRedirectionOptions {
    private 'mobile_printer_enable'?: boolean;
    private 'print_data_compression_mode'?: boolean;
    private 'sync_client_default_printer_enable'?: boolean;
    private 'universal_printer_driver'?: PoliciesPeripheralsDeviceRedirectionPrinterRedirectionOptionsUniversalPrinterDriverEnum | string;
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
    public withUniversalPrinterDriver(universalPrinterDriver: PoliciesPeripheralsDeviceRedirectionPrinterRedirectionOptionsUniversalPrinterDriverEnum | string): PoliciesPeripheralsDeviceRedirectionPrinterRedirectionOptions {
        this['universal_printer_driver'] = universalPrinterDriver;
        return this;
    }
    public set universalPrinterDriver(universalPrinterDriver: PoliciesPeripheralsDeviceRedirectionPrinterRedirectionOptionsUniversalPrinterDriverEnum | string  | undefined) {
        this['universal_printer_driver'] = universalPrinterDriver;
    }
    public get universalPrinterDriver(): PoliciesPeripheralsDeviceRedirectionPrinterRedirectionOptionsUniversalPrinterDriverEnum | string | undefined {
        return this['universal_printer_driver'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PoliciesPeripheralsDeviceRedirectionPrinterRedirectionOptionsUniversalPrinterDriverEnum {
    DEFAULT = 'Default',
    HDP_XPSDRV_DRIVER = 'HDP XPSDrv Driver',
    UNIVERSAL_PRINTING_PCL_5 = 'Universal Printing PCL 5',
    UNIVERSAL_PRINTING_PCL_6 = 'Universal Printing PCL 6',
    UNIVERSAL_PRINTING_PS = 'Universal Printing PS'
}
