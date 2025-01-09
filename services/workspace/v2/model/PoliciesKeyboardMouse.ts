

export class PoliciesKeyboardMouse {
    private 'mouse_feedback'?: PoliciesKeyboardMouseMouseFeedbackEnum | string;
    private 'mouse_simulation_mode'?: PoliciesKeyboardMouseMouseSimulationModeEnum | string;
    private 'external_cursor_feedback'?: boolean;
    private 'selfhelp_console_enable'?: boolean;
    private 'client_mouse_send_interval'?: number;
    private 'windows_client_keyboard_mode'?: PoliciesKeyboardMouseWindowsClientKeyboardModeEnum | string;
    private 'windows_client_mouse_mode'?: PoliciesKeyboardMouseWindowsClientMouseModeEnum | string;
    private 'linux_client_keyboard_mode'?: PoliciesKeyboardMouseLinuxClientKeyboardModeEnum | string;
    private 'linux_client_mouse_mode'?: PoliciesKeyboardMouseLinuxClientMouseModeEnum | string;
    private 'special_keyboard'?: boolean;
    private 'joy_stick_flag'?: boolean;
    public constructor() { 
    }
    public withMouseFeedback(mouseFeedback: PoliciesKeyboardMouseMouseFeedbackEnum | string): PoliciesKeyboardMouse {
        this['mouse_feedback'] = mouseFeedback;
        return this;
    }
    public set mouseFeedback(mouseFeedback: PoliciesKeyboardMouseMouseFeedbackEnum | string  | undefined) {
        this['mouse_feedback'] = mouseFeedback;
    }
    public get mouseFeedback(): PoliciesKeyboardMouseMouseFeedbackEnum | string | undefined {
        return this['mouse_feedback'];
    }
    public withMouseSimulationMode(mouseSimulationMode: PoliciesKeyboardMouseMouseSimulationModeEnum | string): PoliciesKeyboardMouse {
        this['mouse_simulation_mode'] = mouseSimulationMode;
        return this;
    }
    public set mouseSimulationMode(mouseSimulationMode: PoliciesKeyboardMouseMouseSimulationModeEnum | string  | undefined) {
        this['mouse_simulation_mode'] = mouseSimulationMode;
    }
    public get mouseSimulationMode(): PoliciesKeyboardMouseMouseSimulationModeEnum | string | undefined {
        return this['mouse_simulation_mode'];
    }
    public withExternalCursorFeedback(externalCursorFeedback: boolean): PoliciesKeyboardMouse {
        this['external_cursor_feedback'] = externalCursorFeedback;
        return this;
    }
    public set externalCursorFeedback(externalCursorFeedback: boolean  | undefined) {
        this['external_cursor_feedback'] = externalCursorFeedback;
    }
    public get externalCursorFeedback(): boolean | undefined {
        return this['external_cursor_feedback'];
    }
    public withSelfhelpConsoleEnable(selfhelpConsoleEnable: boolean): PoliciesKeyboardMouse {
        this['selfhelp_console_enable'] = selfhelpConsoleEnable;
        return this;
    }
    public set selfhelpConsoleEnable(selfhelpConsoleEnable: boolean  | undefined) {
        this['selfhelp_console_enable'] = selfhelpConsoleEnable;
    }
    public get selfhelpConsoleEnable(): boolean | undefined {
        return this['selfhelp_console_enable'];
    }
    public withClientMouseSendInterval(clientMouseSendInterval: number): PoliciesKeyboardMouse {
        this['client_mouse_send_interval'] = clientMouseSendInterval;
        return this;
    }
    public set clientMouseSendInterval(clientMouseSendInterval: number  | undefined) {
        this['client_mouse_send_interval'] = clientMouseSendInterval;
    }
    public get clientMouseSendInterval(): number | undefined {
        return this['client_mouse_send_interval'];
    }
    public withWindowsClientKeyboardMode(windowsClientKeyboardMode: PoliciesKeyboardMouseWindowsClientKeyboardModeEnum | string): PoliciesKeyboardMouse {
        this['windows_client_keyboard_mode'] = windowsClientKeyboardMode;
        return this;
    }
    public set windowsClientKeyboardMode(windowsClientKeyboardMode: PoliciesKeyboardMouseWindowsClientKeyboardModeEnum | string  | undefined) {
        this['windows_client_keyboard_mode'] = windowsClientKeyboardMode;
    }
    public get windowsClientKeyboardMode(): PoliciesKeyboardMouseWindowsClientKeyboardModeEnum | string | undefined {
        return this['windows_client_keyboard_mode'];
    }
    public withWindowsClientMouseMode(windowsClientMouseMode: PoliciesKeyboardMouseWindowsClientMouseModeEnum | string): PoliciesKeyboardMouse {
        this['windows_client_mouse_mode'] = windowsClientMouseMode;
        return this;
    }
    public set windowsClientMouseMode(windowsClientMouseMode: PoliciesKeyboardMouseWindowsClientMouseModeEnum | string  | undefined) {
        this['windows_client_mouse_mode'] = windowsClientMouseMode;
    }
    public get windowsClientMouseMode(): PoliciesKeyboardMouseWindowsClientMouseModeEnum | string | undefined {
        return this['windows_client_mouse_mode'];
    }
    public withLinuxClientKeyboardMode(linuxClientKeyboardMode: PoliciesKeyboardMouseLinuxClientKeyboardModeEnum | string): PoliciesKeyboardMouse {
        this['linux_client_keyboard_mode'] = linuxClientKeyboardMode;
        return this;
    }
    public set linuxClientKeyboardMode(linuxClientKeyboardMode: PoliciesKeyboardMouseLinuxClientKeyboardModeEnum | string  | undefined) {
        this['linux_client_keyboard_mode'] = linuxClientKeyboardMode;
    }
    public get linuxClientKeyboardMode(): PoliciesKeyboardMouseLinuxClientKeyboardModeEnum | string | undefined {
        return this['linux_client_keyboard_mode'];
    }
    public withLinuxClientMouseMode(linuxClientMouseMode: PoliciesKeyboardMouseLinuxClientMouseModeEnum | string): PoliciesKeyboardMouse {
        this['linux_client_mouse_mode'] = linuxClientMouseMode;
        return this;
    }
    public set linuxClientMouseMode(linuxClientMouseMode: PoliciesKeyboardMouseLinuxClientMouseModeEnum | string  | undefined) {
        this['linux_client_mouse_mode'] = linuxClientMouseMode;
    }
    public get linuxClientMouseMode(): PoliciesKeyboardMouseLinuxClientMouseModeEnum | string | undefined {
        return this['linux_client_mouse_mode'];
    }
    public withSpecialKeyboard(specialKeyboard: boolean): PoliciesKeyboardMouse {
        this['special_keyboard'] = specialKeyboard;
        return this;
    }
    public set specialKeyboard(specialKeyboard: boolean  | undefined) {
        this['special_keyboard'] = specialKeyboard;
    }
    public get specialKeyboard(): boolean | undefined {
        return this['special_keyboard'];
    }
    public withJoyStickFlag(joyStickFlag: boolean): PoliciesKeyboardMouse {
        this['joy_stick_flag'] = joyStickFlag;
        return this;
    }
    public set joyStickFlag(joyStickFlag: boolean  | undefined) {
        this['joy_stick_flag'] = joyStickFlag;
    }
    public get joyStickFlag(): boolean | undefined {
        return this['joy_stick_flag'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PoliciesKeyboardMouseMouseFeedbackEnum {
    SELFADAPTION = 'SELFADAPTION',
    FORCE = 'FORCE',
    CLOSE = 'CLOSE'
}
/**
    * @export
    * @enum {string}
    */
export enum PoliciesKeyboardMouseMouseSimulationModeEnum {
    ABSOLUTE_POSITION = 'ABSOLUTE_POSITION',
    RELATIVE_POSITION = 'RELATIVE_POSITION'
}
/**
    * @export
    * @enum {string}
    */
export enum PoliciesKeyboardMouseWindowsClientKeyboardModeEnum {
    GLOBAL = 'GLOBAL',
    WINDOW = 'WINDOW'
}
/**
    * @export
    * @enum {string}
    */
export enum PoliciesKeyboardMouseWindowsClientMouseModeEnum {
    GLOBAL = 'GLOBAL',
    WINDOW = 'WINDOW'
}
/**
    * @export
    * @enum {string}
    */
export enum PoliciesKeyboardMouseLinuxClientKeyboardModeEnum {
    EVENT = 'EVENT',
    GRAPH = 'GRAPH'
}
/**
    * @export
    * @enum {string}
    */
export enum PoliciesKeyboardMouseLinuxClientMouseModeEnum {
    EVENT = 'EVENT',
    GRAPH = 'GRAPH'
}
