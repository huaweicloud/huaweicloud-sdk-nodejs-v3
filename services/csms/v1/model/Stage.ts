

export class Stage {
    public name?: string;
    private 'update_time'?: number | undefined;
    private 'secret_name'?: string | undefined;
    private 'version_id'?: string | undefined;
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
    public set updateTime(updateTime: number | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime() {
        return this['update_time'];
    }
    public withSecretName(secretName: string): Stage {
        this['secret_name'] = secretName;
        return this;
    }
    public set secretName(secretName: string | undefined) {
        this['secret_name'] = secretName;
    }
    public get secretName() {
        return this['secret_name'];
    }
    public withVersionId(versionId: string): Stage {
        this['version_id'] = versionId;
        return this;
    }
    public set versionId(versionId: string | undefined) {
        this['version_id'] = versionId;
    }
    public get versionId() {
        return this['version_id'];
    }
}