

export class VocabularyConfig {
    public id?: string;
    public key?: string;
    public value?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withId(id: string): VocabularyConfig {
        this['id'] = id;
        return this;
    }
    public withKey(key: string): VocabularyConfig {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): VocabularyConfig {
        this['value'] = value;
        return this;
    }
    public withCreateTime(createTime: string): VocabularyConfig {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): VocabularyConfig {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}