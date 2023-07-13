

export class ShowVersionRequest {
    private 'version_id': string | undefined;
    public constructor(versionId?: any) { 
        this['version_id'] = versionId;
    }
    public withVersionId(versionId: string): ShowVersionRequest {
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