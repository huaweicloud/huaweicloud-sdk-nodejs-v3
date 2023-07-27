

export class DeleteApiByVersionIdV2Request {
    private 'instance_id'?: string;
    private 'version_id'?: string;
    public constructor(instanceId?: string, versionId?: string) { 
        this['instance_id'] = instanceId;
        this['version_id'] = versionId;
    }
    public withInstanceId(instanceId: string): DeleteApiByVersionIdV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withVersionId(versionId: string): DeleteApiByVersionIdV2Request {
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