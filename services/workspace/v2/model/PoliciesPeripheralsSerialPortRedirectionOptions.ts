

export class PoliciesPeripheralsSerialPortRedirectionOptions {
    private 'auto_connect_enable'?: boolean;
    public constructor() { 
    }
    public withAutoConnectEnable(autoConnectEnable: boolean): PoliciesPeripheralsSerialPortRedirectionOptions {
        this['auto_connect_enable'] = autoConnectEnable;
        return this;
    }
    public set autoConnectEnable(autoConnectEnable: boolean  | undefined) {
        this['auto_connect_enable'] = autoConnectEnable;
    }
    public get autoConnectEnable(): boolean | undefined {
        return this['auto_connect_enable'];
    }
}