import { PoliciesPeripheralsSerialPortRedirectionOptions } from './PoliciesPeripheralsSerialPortRedirectionOptions';


export class PoliciesPeripheralsSerialPortRedirection {
    private 'serial_port_enable'?: boolean;
    public options?: PoliciesPeripheralsSerialPortRedirectionOptions;
    public constructor() { 
    }
    public withSerialPortEnable(serialPortEnable: boolean): PoliciesPeripheralsSerialPortRedirection {
        this['serial_port_enable'] = serialPortEnable;
        return this;
    }
    public set serialPortEnable(serialPortEnable: boolean  | undefined) {
        this['serial_port_enable'] = serialPortEnable;
    }
    public get serialPortEnable(): boolean | undefined {
        return this['serial_port_enable'];
    }
    public withOptions(options: PoliciesPeripheralsSerialPortRedirectionOptions): PoliciesPeripheralsSerialPortRedirection {
        this['options'] = options;
        return this;
    }
}