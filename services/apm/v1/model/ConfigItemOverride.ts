

export class ConfigItemOverride {
    private 'env_tag_id'?: number;
    private 'env_tag_name'?: string;
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withEnvTagId(envTagId: number): ConfigItemOverride {
        this['env_tag_id'] = envTagId;
        return this;
    }
    public set envTagId(envTagId: number  | undefined) {
        this['env_tag_id'] = envTagId;
    }
    public get envTagId(): number | undefined {
        return this['env_tag_id'];
    }
    public withEnvTagName(envTagName: string): ConfigItemOverride {
        this['env_tag_name'] = envTagName;
        return this;
    }
    public set envTagName(envTagName: string  | undefined) {
        this['env_tag_name'] = envTagName;
    }
    public get envTagName(): string | undefined {
        return this['env_tag_name'];
    }
    public withKey(key: string): ConfigItemOverride {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ConfigItemOverride {
        this['value'] = value;
        return this;
    }
}