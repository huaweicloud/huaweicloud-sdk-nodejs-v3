import { PoliciesPeripheralsDeviceRedirection } from './PoliciesPeripheralsDeviceRedirection';
import { PoliciesPeripheralsSerialPortRedirection } from './PoliciesPeripheralsSerialPortRedirection';
import { PoliciesPeripheralsUsbDeviceCommon } from './PoliciesPeripheralsUsbDeviceCommon';
import { PoliciesPeripheralsUsbPortRedirection } from './PoliciesPeripheralsUsbPortRedirection';


export class PoliciesPeripherals {
    private 'usb_port_redirection'?: PoliciesPeripheralsUsbPortRedirection;
    private 'device_redirection'?: PoliciesPeripheralsDeviceRedirection;
    private 'usb_device_common'?: PoliciesPeripheralsUsbDeviceCommon;
    private 'serial_port_redirection'?: PoliciesPeripheralsSerialPortRedirection;
    public constructor() { 
    }
    public withUsbPortRedirection(usbPortRedirection: PoliciesPeripheralsUsbPortRedirection): PoliciesPeripherals {
        this['usb_port_redirection'] = usbPortRedirection;
        return this;
    }
    public set usbPortRedirection(usbPortRedirection: PoliciesPeripheralsUsbPortRedirection  | undefined) {
        this['usb_port_redirection'] = usbPortRedirection;
    }
    public get usbPortRedirection(): PoliciesPeripheralsUsbPortRedirection | undefined {
        return this['usb_port_redirection'];
    }
    public withDeviceRedirection(deviceRedirection: PoliciesPeripheralsDeviceRedirection): PoliciesPeripherals {
        this['device_redirection'] = deviceRedirection;
        return this;
    }
    public set deviceRedirection(deviceRedirection: PoliciesPeripheralsDeviceRedirection  | undefined) {
        this['device_redirection'] = deviceRedirection;
    }
    public get deviceRedirection(): PoliciesPeripheralsDeviceRedirection | undefined {
        return this['device_redirection'];
    }
    public withUsbDeviceCommon(usbDeviceCommon: PoliciesPeripheralsUsbDeviceCommon): PoliciesPeripherals {
        this['usb_device_common'] = usbDeviceCommon;
        return this;
    }
    public set usbDeviceCommon(usbDeviceCommon: PoliciesPeripheralsUsbDeviceCommon  | undefined) {
        this['usb_device_common'] = usbDeviceCommon;
    }
    public get usbDeviceCommon(): PoliciesPeripheralsUsbDeviceCommon | undefined {
        return this['usb_device_common'];
    }
    public withSerialPortRedirection(serialPortRedirection: PoliciesPeripheralsSerialPortRedirection): PoliciesPeripherals {
        this['serial_port_redirection'] = serialPortRedirection;
        return this;
    }
    public set serialPortRedirection(serialPortRedirection: PoliciesPeripheralsSerialPortRedirection  | undefined) {
        this['serial_port_redirection'] = serialPortRedirection;
    }
    public get serialPortRedirection(): PoliciesPeripheralsSerialPortRedirection | undefined {
        return this['serial_port_redirection'];
    }
}