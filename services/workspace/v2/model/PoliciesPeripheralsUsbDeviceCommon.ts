import { PoliciesPeripheralsUsbDeviceCommonCommonOptions } from './PoliciesPeripheralsUsbDeviceCommonCommonOptions';


export class PoliciesPeripheralsUsbDeviceCommon {
    private 'pcsc_smart_card_enable'?: PoliciesPeripheralsUsbDeviceCommonPcscSmartCardEnableEnum | string;
    private 'common_options'?: PoliciesPeripheralsUsbDeviceCommonCommonOptions;
    public constructor() { 
    }
    public withPcscSmartCardEnable(pcscSmartCardEnable: PoliciesPeripheralsUsbDeviceCommonPcscSmartCardEnableEnum | string): PoliciesPeripheralsUsbDeviceCommon {
        this['pcsc_smart_card_enable'] = pcscSmartCardEnable;
        return this;
    }
    public set pcscSmartCardEnable(pcscSmartCardEnable: PoliciesPeripheralsUsbDeviceCommonPcscSmartCardEnableEnum | string  | undefined) {
        this['pcsc_smart_card_enable'] = pcscSmartCardEnable;
    }
    public get pcscSmartCardEnable(): PoliciesPeripheralsUsbDeviceCommonPcscSmartCardEnableEnum | string | undefined {
        return this['pcsc_smart_card_enable'];
    }
    public withCommonOptions(commonOptions: PoliciesPeripheralsUsbDeviceCommonCommonOptions): PoliciesPeripheralsUsbDeviceCommon {
        this['common_options'] = commonOptions;
        return this;
    }
    public set commonOptions(commonOptions: PoliciesPeripheralsUsbDeviceCommonCommonOptions  | undefined) {
        this['common_options'] = commonOptions;
    }
    public get commonOptions(): PoliciesPeripheralsUsbDeviceCommonCommonOptions | undefined {
        return this['common_options'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PoliciesPeripheralsUsbDeviceCommonPcscSmartCardEnableEnum {
    ENABLE = 'Enable',
    CLOSED = 'Closed',
    DISABLE = 'Disable'
}
