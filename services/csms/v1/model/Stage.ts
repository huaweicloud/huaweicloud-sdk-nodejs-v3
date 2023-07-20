

export class Stage {
    public name?: string;
    private 'update_time'?: number;
    private 'secret_name'?: string;
    private 'version_id'?: string;
    public constructor() { 
    }
    public withName(name: string): Stage {
        this['name'] = name;
        return this;
    }
    public withUpdateTime(updateTime: number): Stage {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withSecretName(secretName: string): Stage {
        this['secret_name'] = secretName;
        return this;
    }
    public set secretName(secretName: string  | undefined) {
        this['secret_name'] = secretName;
    }
    public get secretName(): string | undefined {
        return this['secret_name'];
    }
    public withVersionId(versionId: string): Stage {
        this['version_id'] = versionId;
        return this;
    }
    public set versionId(versionId: string  | undefined) {
        this['version_id'] = versionId;
    }
    public get versionId(): string | undefined {
        return this['version_id'];
    }
}