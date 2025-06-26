

export class PoliciesKeyboardMouse {
    private 'mouse_feedback'?: PoliciesKeyboardMouseMouseFeedbackEnum | string;
    private 'mouse_simulation_mode'?: PoliciesKeyboardMouseMouseSimulationModeEnum | string;
    private 'external_cursor_feedback'?: boolean;
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
