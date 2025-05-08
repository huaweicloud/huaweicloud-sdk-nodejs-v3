

export class DocumentVersionVo {
    public version?: string;
    private 'version_uuid'?: string;
    private 'create_time'?: string;
    public constructor() { 
    }
    public withVersion(version: string): DocumentVersionVo {
        this['version'] = version;
        return this;
    }
    public withVersionUuid(versionUuid: string): DocumentVersionVo {
        this['version_uuid'] = versionUuid;
        return this;
    }
    public set versionUuid(versionUuid: string  | undefined) {
        this['version_uuid'] = versionUuid;
    }
    public get versionUuid(): string | undefined {
        return this['version_uuid'];
    }
    public withCreateTime(createTime: string): DocumentVersionVo {
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