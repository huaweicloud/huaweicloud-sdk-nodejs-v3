

export class LiveWarningItem {
    private 'warning_type'?: LiveWarningItemWarningTypeEnum | string;
    public constructor() { 
    }
    public withWarningType(warningType: LiveWarningItemWarningTypeEnum | string): LiveWarningItem {
        this['warning_type'] = warningType;
        return this;
    }
    public set warningType(warningType: LiveWarningItemWarningTypeEnum | string  | undefined) {
        this['warning_type'] = warningType;
    }
    public get warningType(): LiveWarningItemWarningTypeEnum | string | undefined {
        return this['warning_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum LiveWarningItemWarningTypeEnum {
    TOO_LESSS_SCRIPT_ITEMS = 'TOO_LESSS_SCRIPT_ITEMS',
    TOO_SHORT_SCRIPT_TIME = 'TOO_SHORT_SCRIPT_TIME',
    TOO_LESS_DANMAKU_RULES = 'TOO_LESS_DANMAKU_RULES',
    RANDOM_PLAY_CLOSED = 'RANDOM_PLAY_CLOSED',
    ROTATION_MODEL_CLOSED = 'ROTATION_MODEL_CLOSED'
}
