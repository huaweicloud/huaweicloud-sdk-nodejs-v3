

export class PrinterRedirectionOptions {
    private 'sync_client_default_printer_enable'?: boolean;
    private 'universal_printer_driver'?: PrinterRedirectionOptionsUniversalPrinterDriverEnum | string;
    public constructor() { 
    }
    public withSyncClientDefaultPrinterEnable(syncClientDefaultPrinterEnable: boolean): PrinterRedirectionOptions {
        this['sync_client_default_printer_enable'] = syncClientDefaultPrinterEnable;
        return this;
    }
    public set syncClientDefaultPrinterEnable(syncClientDefaultPrinterEnable: boolean  | undefined) {
        this['sync_client_default_printer_enable'] = syncClientDefaultPrinterEnable;
    }
    public get syncClientDefaultPrinterEnable(): boolean | undefined {
        return this['sync_client_default_printer_enable'];
    }
    public withUniversalPrinterDriver(universalPrinterDriver: PrinterRedirectionOptionsUniversalPrinterDriverEnum | string): PrinterRedirectionOptions {
        this['universal_printer_driver'] = universalPrinterDriver;
        return this;
    }
    public set universalPrinterDriver(universalPrinterDriver: PrinterRedirectionOptionsUniversalPrinterDriverEnum | string  | undefined) {
        this['universal_printer_driver'] = universalPrinterDriver;
    }
    public get universalPrinterDriver(): PrinterRedirectionOptionsUniversalPrinterDriverEnum | string | undefined {
        return this['universal_printer_driver'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PrinterRedirectionOptionsUniversalPrinterDriverEnum {
    DEFAULT = 'Default',
    HDP_XPSDRV_DRIVER = 'HDP XPSDrv Driver',
    UNIVERSAL_PRINTING_PCL_5 = 'Universal Printing PCL 5',
    UNIVERSAL_PRINTING_PCL_6 = 'Universal Printing PCL 6',
    UNIVERSAL_PRINTING_PS = 'Universal Printing PS'
}
