import { PoliciesPeripheralsDeviceRedirection } from './PoliciesPeripheralsDeviceRedirection';
import { PoliciesPeripheralsDriverInterfaceRedirection } from './PoliciesPeripheralsDriverInterfaceRedirection';
import { PoliciesPeripheralsParallelPortRedirection } from './PoliciesPeripheralsParallelPortRedirection';
import { PoliciesPeripheralsSerialPortRedirection } from './PoliciesPeripheralsSerialPortRedirection';
import { PoliciesPeripheralsUsbDeviceCommon } from './PoliciesPeripheralsUsbDeviceCommon';
import { PoliciesPeripheralsUsbPortRedirection } from './PoliciesPeripheralsUsbPortRedirection';


export class PoliciesPeripherals {
    private 'usb_custom_policy_debug'?: string;
    private 'usb_port_redirection'?: PoliciesPeripheralsUsbPortRedirection;
    private 'device_redirection'?: PoliciesPeripheralsDeviceRedirection;
    private 'usb_device_common'?: PoliciesPeripheralsUsbDeviceCommon;
    private 'serial_port_redirection'?: PoliciesPeripheralsSerialPortRedirection;
    private 'parallel_port_redirection'?: PoliciesPeripheralsParallelPortRedirection;
    private 'driver_interface_redirection'?: PoliciesPeripheralsDriverInterfaceRedirection;
    public constructor() { 
    }
    public withUsbCustomPolicyDebug(usbCustomPolicyDebug: string): PoliciesPeripherals {
        this['usb_custom_policy_debug'] = usbCustomPolicyDebug;
        return this;
    }
    public set usbCustomPolicyDebug(usbCustomPolicyDebug: string  | undefined) {
        this['usb_custom_policy_debug'] = usbCustomPolicyDebug;
    }
    public get usbCustomPolicyDebug(): string | undefined {
        return this['usb_custom_policy_debug'];
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
    public withParallelPortRedirection(parallelPortRedirection: PoliciesPeripheralsParallelPortRedirection): PoliciesPeripherals {
        this['parallel_port_redirection'] = parallelPortRedirection;
        return this;
    }
    public set parallelPortRedirection(parallelPortRedirection: PoliciesPeripheralsParallelPortRedirection  | undefined) {
        this['parallel_port_redirection'] = parallelPortRedirection;
    }
    public get parallelPortRedirection(): PoliciesPeripheralsParallelPortRedirection | undefined {
        return this['parallel_port_redirection'];
    }
    public withDriverInterfaceRedirection(driverInterfaceRedirection: PoliciesPeripheralsDriverInterfaceRedirection): PoliciesPeripherals {
        this['driver_interface_redirection'] = driverInterfaceRedirection;
        return this;
    }
    public set driverInterfaceRedirection(driverInterfaceRedirection: PoliciesPeripheralsDriverInterfaceRedirection  | undefined) {
        this['driver_interface_redirection'] = driverInterfaceRedirection;
    }
    public get driverInterfaceRedirection(): PoliciesPeripheralsDriverInterfaceRedirection | undefined {
        return this['driver_interface_redirection'];
    }
}