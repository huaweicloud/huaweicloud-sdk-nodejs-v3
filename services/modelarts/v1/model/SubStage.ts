

export class SubStage {
    public name?: string;
    private 'en_message'?: string;
    private 'zh_message'?: string;
    private 'create_time'?: string;
    public constructor() { 
    }
    public withName(name: string): SubStage {
        this['name'] = name;
        return this;
    }
    public withEnMessage(enMessage: string): SubStage {
        this['en_message'] = enMessage;
        return this;
    }
    public set enMessage(enMessage: string  | undefined) {
        this['en_message'] = enMessage;
    }
    public get enMessage(): string | undefined {
        return this['en_message'];
    }
    public withZhMessage(zhMessage: string): SubStage {
        this['zh_message'] = zhMessage;
        return this;
    }
    public set zhMessage(zhMessage: string  | undefined) {
        this['zh_message'] = zhMessage;
    }
    public get zhMessage(): string | undefined {
        return this['zh_message'];
    }
    public withCreateTime(createTime: string): SubStage {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
}