import { SerialPortRedirectionOptions } from './SerialPortRedirectionOptions';


export class PoliciesPeripheralsSerialPortRedirection {
    private 'serial_port_enable'?: boolean;
    public options?: SerialPortRedirectionOptions;
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
    public withOptions(options: SerialPortRedirectionOptions): PoliciesPeripheralsSerialPortRedirection {
        this['options'] = options;
        return this;
    }
}