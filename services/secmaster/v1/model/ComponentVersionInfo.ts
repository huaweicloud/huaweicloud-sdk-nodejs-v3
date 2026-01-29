

export class ComponentVersionInfo {
    public id?: string;
    private 'version_num'?: string;
    private 'version_desc'?: string;
    public status?: string;
    private 'package_name'?: string;
    private 'component_attachment_id'?: string;
    private 'sub_version_id'?: string;
    private 'connection_config'?: string;
    public constructor() { 
    }
    public withId(id: string): ComponentVersionInfo {
        this['id'] = id;
        return this;
    }
    public withVersionNum(versionNum: string): ComponentVersionInfo {
        this['version_num'] = versionNum;
        return this;
    }
    public set versionNum(versionNum: string  | undefined) {
        this['version_num'] = versionNum;
    }
    public get versionNum(): string | undefined {
        return this['version_num'];
    }
    public withVersionDesc(versionDesc: string): ComponentVersionInfo {
        this['version_desc'] = versionDesc;
        return this;
    }
    public set versionDesc(versionDesc: string  | undefined) {
        this['version_desc'] = versionDesc;
    }
    public get versionDesc(): string | undefined {
        return this['version_desc'];
    }
    public withStatus(status: string): ComponentVersionInfo {
        this['status'] = status;
        return this;
    }
    public withPackageName(packageName: string): ComponentVersionInfo {
        this['package_name'] = packageName;
        return this;
    }
    public set packageName(packageName: string  | undefined) {
        this['package_name'] = packageName;
    }
    public get packageName(): string | undefined {
        return this['package_name'];
    }
    public withComponentAttachmentId(componentAttachmentId: string): ComponentVersionInfo {
        this['component_attachment_id'] = componentAttachmentId;
        return this;
    }
    public set componentAttachmentId(componentAttachmentId: string  | undefined) {
        this['component_attachment_id'] = componentAttachmentId;
    }
    public get componentAttachmentId(): string | undefined {
        return this['component_attachment_id'];
    }
    public withSubVersionId(subVersionId: string): ComponentVersionInfo {
        this['sub_version_id'] = subVersionId;
        return this;
    }
    public set subVersionId(subVersionId: string  | undefined) {
        this['sub_version_id'] = subVersionId;
    }
    public get subVersionId(): string | undefined {
        return this['sub_version_id'];
    }
    public withConnectionConfig(connectionConfig: string): ComponentVersionInfo {
        this['connection_config'] = connectionConfig;
        return this;
    }
    public set connectionConfig(connectionConfig: string  | undefined) {
        this['connection_config'] = connectionConfig;
    }
    public get connectionConfig(): string | undefined {
        return this['connection_config'];
    }
}