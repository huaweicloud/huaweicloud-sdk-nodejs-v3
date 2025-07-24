

export class DeleteRelationsByOneCaseInfo {
    private 'work_item_ids'?: Array<string>;
    private 'project_uuid'?: string;
    private 'version_uri'?: string;
    private 'relate_type'?: string;
    public constructor() { 
    }
    public withWorkItemIds(workItemIds: Array<string>): DeleteRelationsByOneCaseInfo {
        this['work_item_ids'] = workItemIds;
        return this;
    }
    public set workItemIds(workItemIds: Array<string>  | undefined) {
        this['work_item_ids'] = workItemIds;
    }
    public get workItemIds(): Array<string> | undefined {
        return this['work_item_ids'];
    }
    public withProjectUuid(projectUuid: string): DeleteRelationsByOneCaseInfo {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withVersionUri(versionUri: string): DeleteRelationsByOneCaseInfo {
        this['version_uri'] = versionUri;
        return this;
    }
    public set versionUri(versionUri: string  | undefined) {
        this['version_uri'] = versionUri;
    }
    public get versionUri(): string | undefined {
        return this['version_uri'];
    }
    public withRelateType(relateType: string): DeleteRelationsByOneCaseInfo {
        this['relate_type'] = relateType;
        return this;
    }
    public set relateType(relateType: string  | undefined) {
        this['relate_type'] = relateType;
    }
    public get relateType(): string | undefined {
        return this['relate_type'];
    }
}