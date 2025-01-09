

export class PoliciesClientClientTypeOptions {
    private 'sc_type_window'?: boolean;
    private 'sc_type_mac'?: boolean;
    private 'sc_type_android'?: boolean;
    private 'sc_type_linux'?: boolean;
    private 'sc_type_h5'?: boolean;
    private 'sc_type_ios'?: boolean;
    private 'sc_type_harmony_os'?: boolean;
    private 'tc_type_all'?: boolean;
    public constructor() { 
    }
    public withScTypeWindow(scTypeWindow: boolean): PoliciesClientClientTypeOptions {
        this['sc_type_window'] = scTypeWindow;
        return this;
    }
    public set scTypeWindow(scTypeWindow: boolean  | undefined) {
        this['sc_type_window'] = scTypeWindow;
    }
    public get scTypeWindow(): boolean | undefined {
        return this['sc_type_window'];
    }
    public withScTypeMac(scTypeMac: boolean): PoliciesClientClientTypeOptions {
        this['sc_type_mac'] = scTypeMac;
        return this;
    }
    public set scTypeMac(scTypeMac: boolean  | undefined) {
        this['sc_type_mac'] = scTypeMac;
    }
    public get scTypeMac(): boolean | undefined {
        return this['sc_type_mac'];
    }
    public withScTypeAndroid(scTypeAndroid: boolean): PoliciesClientClientTypeOptions {
        this['sc_type_android'] = scTypeAndroid;
        return this;
    }
    public set scTypeAndroid(scTypeAndroid: boolean  | undefined) {
        this['sc_type_android'] = scTypeAndroid;
    }
    public get scTypeAndroid(): boolean | undefined {
        return this['sc_type_android'];
    }
    public withScTypeLinux(scTypeLinux: boolean): PoliciesClientClientTypeOptions {
        this['sc_type_linux'] = scTypeLinux;
        return this;
    }
    public set scTypeLinux(scTypeLinux: boolean  | undefined) {
        this['sc_type_linux'] = scTypeLinux;
    }
    public get scTypeLinux(): boolean | undefined {
        return this['sc_type_linux'];
    }
    public withScTypeH5(scTypeH5: boolean): PoliciesClientClientTypeOptions {
        this['sc_type_h5'] = scTypeH5;
        return this;
    }
    public set scTypeH5(scTypeH5: boolean  | undefined) {
        this['sc_type_h5'] = scTypeH5;
    }
    public get scTypeH5(): boolean | undefined {
        return this['sc_type_h5'];
    }
    public withScTypeIos(scTypeIos: boolean): PoliciesClientClientTypeOptions {
        this['sc_type_ios'] = scTypeIos;
        return this;
    }
    public set scTypeIos(scTypeIos: boolean  | undefined) {
        this['sc_type_ios'] = scTypeIos;
    }
    public get scTypeIos(): boolean | undefined {
        return this['sc_type_ios'];
    }
    public withScTypeHarmonyOs(scTypeHarmonyOs: boolean): PoliciesClientClientTypeOptions {
        this['sc_type_harmony_os'] = scTypeHarmonyOs;
        return this;
    }
    public set scTypeHarmonyOs(scTypeHarmonyOs: boolean  | undefined) {
        this['sc_type_harmony_os'] = scTypeHarmonyOs;
    }
    public get scTypeHarmonyOs(): boolean | undefined {
        return this['sc_type_harmony_os'];
    }
    public withTcTypeAll(tcTypeAll: boolean): PoliciesClientClientTypeOptions {
        this['tc_type_all'] = tcTypeAll;
        return this;
    }
    public set tcTypeAll(tcTypeAll: boolean  | undefined) {
        this['tc_type_all'] = tcTypeAll;
    }
    public get tcTypeAll(): boolean | undefined {
        return this['tc_type_all'];
    }
}