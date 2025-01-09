

export class PoliciesPeripheralsUsbDeviceCommonCommonOptions {
    private 'remove_smart_card_disconnect_enable'?: boolean;
    public constructor() { 
    }
    public withRemoveSmartCardDisconnectEnable(removeSmartCardDisconnectEnable: boolean): PoliciesPeripheralsUsbDeviceCommonCommonOptions {
        this['remove_smart_card_disconnect_enable'] = removeSmartCardDisconnectEnable;
        return this;
    }
    public set removeSmartCardDisconnectEnable(removeSmartCardDisconnectEnable: boolean  | undefined) {
        this['remove_smart_card_disconnect_enable'] = removeSmartCardDisconnectEnable;
    }
    public get removeSmartCardDisconnectEnable(): boolean | undefined {
        return this['remove_smart_card_disconnect_enable'];
    }
}