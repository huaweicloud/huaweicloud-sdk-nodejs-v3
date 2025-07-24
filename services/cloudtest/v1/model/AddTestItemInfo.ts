

export class AddTestItemInfo {
    public comment?: string;
    public name?: string;
    private 'number'?: string;
    public owner?: string;
    private 'is_feature'?: string;
    private 'project_uuid'?: string;
    private 'parent_uri'?: string;
    private 'version_uri'?: string;
    private 'ignore_duplicate_name'?: boolean;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withComment(comment: string): AddTestItemInfo {
        this['comment'] = comment;
        return this;
    }
    public withName(name: string): AddTestItemInfo {
        this['name'] = name;
        return this;
    }
    public withModelNumber(modelNumber: string): AddTestItemInfo {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withOwner(owner: string): AddTestItemInfo {
        this['owner'] = owner;
        return this;
    }
    public withIsFeature(isFeature: string): AddTestItemInfo {
        this['is_feature'] = isFeature;
        return this;
    }
    public set isFeature(isFeature: string  | undefined) {
        this['is_feature'] = isFeature;
    }
    public get isFeature(): string | undefined {
        return this['is_feature'];
    }
    public withProjectUuid(projectUuid: string): AddTestItemInfo {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withParentUri(parentUri: string): AddTestItemInfo {
        this['parent_uri'] = parentUri;
        return this;
    }
    public set parentUri(parentUri: string  | undefined) {
        this['parent_uri'] = parentUri;
    }
    public get parentUri(): string | undefined {
        return this['parent_uri'];
    }
    public withVersionUri(versionUri: string): AddTestItemInfo {
        this['version_uri'] = versionUri;
        return this;
    }
    public set versionUri(versionUri: string  | undefined) {
        this['version_uri'] = versionUri;
    }
    public get versionUri(): string | undefined {
        return this['version_uri'];
    }
    public withIgnoreDuplicateName(ignoreDuplicateName: boolean): AddTestItemInfo {
        this['ignore_duplicate_name'] = ignoreDuplicateName;
        return this;
    }
    public set ignoreDuplicateName(ignoreDuplicateName: boolean  | undefined) {
        this['ignore_duplicate_name'] = ignoreDuplicateName;
    }
    public get ignoreDuplicateName(): boolean | undefined {
        return this['ignore_duplicate_name'];
    }
}