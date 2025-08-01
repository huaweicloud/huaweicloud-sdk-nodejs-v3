

export class SystemProperty {
    public action?: SystemPropertyActionEnum | string;
    public key?: SystemPropertyKeyEnum | string;
    public value?: string;
    public constructor() { 
    }
    public withAction(action: SystemPropertyActionEnum | string): SystemProperty {
        this['action'] = action;
        return this;
    }
    public withKey(key: SystemPropertyKeyEnum | string): SystemProperty {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): SystemProperty {
        this['value'] = value;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SystemPropertyActionEnum {
    ADD = 'ADD',
    DELETE = 'DELETE'
}
/**
    * @export
    * @enum {string}
    */
export enum SystemPropertyKeyEnum {
    STYLE_ID = 'STYLE_ID',
    DH_ID = 'DH_ID',
    PLATFORM_AVAILABLE = 'PLATFORM_AVAILABLE',
    RENDER_ENGINE = 'RENDER_ENGINE',
    BACKGROUND_IMG = 'BACKGROUND_IMG',
    BACKGROUND_SCENE = 'BACKGROUND_SCENE',
    CREATED_BY_PLATFORM = 'CREATED_BY_PLATFORM',
    MATERIAL_IMG = 'MATERIAL_IMG',
    MATERIAL_VIDEO = 'MATERIAL_VIDEO',
    DIGITAL_HUMAN_2D_VIDEO = 'DIGITAL_HUMAN_2D_VIDEO',
    DIGITAL_HUMAN_3D_VIDEO = 'DIGITAL_HUMAN_3D_VIDEO',
    BUSSINESS_CARD_VIDEO = 'BUSSINESS_CARD_VIDEO',
    BUSINESS_CARD_VIDEO = 'BUSINESS_CARD_VIDEO',
    PHOTO_VIDEO = 'PHOTO_VIDEO',
    TO_BE_TRANSLATED_VIDEO = 'TO_BE_TRANSLATED_VIDEO',
    TRANSLATED_VIDEO = 'TRANSLATED_VIDEO',
    LAYER_CONFIG_ENABLE = 'LAYER_CONFIG_ENABLE',
    MEITUAN_MATERIAL_APPROVED = 'MEITUAN_MATERIAL_APPROVED',
    IS_CONTROLLED = 'IS_CONTROLLED',
    LIVE_IS_AUTHORIZED = 'LIVE_IS_AUTHORIZED',
    VIDEO_IS_AUTHORIZED = 'VIDEO_IS_AUTHORIZED',
    CHAT_IS_AUTHORIZED = 'CHAT_IS_AUTHORIZED'
}
