

export class SubTemplate {
    private 'sub_type': SubTemplateSubTypeEnum | undefined;
    public content: string;
    public constructor(subType?: any, content?: any) { 
        this['sub_type'] = subType;
        this['content'] = content;
    }
    public withSubType(subType: SubTemplateSubTypeEnum): SubTemplate {
        this['sub_type'] = subType;
        return this;
    }
    public set subType(subType: SubTemplateSubTypeEnum | undefined) {
        this['sub_type'] = subType;
    }
    public get subType() {
        return this['sub_type'];
    }
    public withContent(content: string): SubTemplate {
        this['content'] = content;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SubTemplateSubTypeEnum {
    SMS = 'sms',
    DINGDING = 'dingding',
    WECHAT = 'wechat',
    WEBHOOK = 'webhook',
    EMAIL = 'email'
}
