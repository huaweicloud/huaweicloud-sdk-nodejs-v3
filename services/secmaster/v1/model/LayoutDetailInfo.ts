

export class LayoutDetailInfo {
    private 'cloud_pack_id'?: string;
    private 'cloud_pack_name'?: string;
    private 'cloud_pack_version'?: string;
    private 'is_built_in'?: boolean;
    private 'is_template'?: boolean;
    private 'create_time'?: string;
    private 'creator_id'?: string;
    private 'parent_id'?: string;
    private 'creator_name'?: string;
    public description?: string;
    private 'en_description'?: string;
    public id?: string;
    public name?: string;
    private 'en_name'?: string;
    private 'layout_json'?: string;
    private 'project_id'?: string;
    private 'update_time'?: string;
    private 'workspace_id'?: string;
    private 'region_id'?: string;
    private 'domain_id'?: string;
    public thumbnail?: string;
    private 'used_by'?: string;
    private 'layout_cfg'?: string;
    private 'layout_type'?: string;
    private 'binding_id'?: string;
    private 'binding_name'?: string;
    private 'binding_code'?: string;
    private 'fields_sum'?: number;
    private 'wizards_sum'?: number;
    private 'sections_sum'?: number;
    private 'modules_sum'?: number;
    private 'tabs_sum'?: number;
    public version?: string;
    private 'boa_version'?: string;
    public constructor() { 
    }
    public withCloudPackId(cloudPackId: string): LayoutDetailInfo {
        this['cloud_pack_id'] = cloudPackId;
        return this;
    }
    public set cloudPackId(cloudPackId: string  | undefined) {
        this['cloud_pack_id'] = cloudPackId;
    }
    public get cloudPackId(): string | undefined {
        return this['cloud_pack_id'];
    }
    public withCloudPackName(cloudPackName: string): LayoutDetailInfo {
        this['cloud_pack_name'] = cloudPackName;
        return this;
    }
    public set cloudPackName(cloudPackName: string  | undefined) {
        this['cloud_pack_name'] = cloudPackName;
    }
    public get cloudPackName(): string | undefined {
        return this['cloud_pack_name'];
    }
    public withCloudPackVersion(cloudPackVersion: string): LayoutDetailInfo {
        this['cloud_pack_version'] = cloudPackVersion;
        return this;
    }
    public set cloudPackVersion(cloudPackVersion: string  | undefined) {
        this['cloud_pack_version'] = cloudPackVersion;
    }
    public get cloudPackVersion(): string | undefined {
        return this['cloud_pack_version'];
    }
    public withIsBuiltIn(isBuiltIn: boolean): LayoutDetailInfo {
        this['is_built_in'] = isBuiltIn;
        return this;
    }
    public set isBuiltIn(isBuiltIn: boolean  | undefined) {
        this['is_built_in'] = isBuiltIn;
    }
    public get isBuiltIn(): boolean | undefined {
        return this['is_built_in'];
    }
    public withIsTemplate(isTemplate: boolean): LayoutDetailInfo {
        this['is_template'] = isTemplate;
        return this;
    }
    public set isTemplate(isTemplate: boolean  | undefined) {
        this['is_template'] = isTemplate;
    }
    public get isTemplate(): boolean | undefined {
        return this['is_template'];
    }
    public withCreateTime(createTime: string): LayoutDetailInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withCreatorId(creatorId: string): LayoutDetailInfo {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withParentId(parentId: string): LayoutDetailInfo {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withCreatorName(creatorName: string): LayoutDetailInfo {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withDescription(description: string): LayoutDetailInfo {
        this['description'] = description;
        return this;
    }
    public withEnDescription(enDescription: string): LayoutDetailInfo {
        this['en_description'] = enDescription;
        return this;
    }
    public set enDescription(enDescription: string  | undefined) {
        this['en_description'] = enDescription;
    }
    public get enDescription(): string | undefined {
        return this['en_description'];
    }
    public withId(id: string): LayoutDetailInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): LayoutDetailInfo {
        this['name'] = name;
        return this;
    }
    public withEnName(enName: string): LayoutDetailInfo {
        this['en_name'] = enName;
        return this;
    }
    public set enName(enName: string  | undefined) {
        this['en_name'] = enName;
    }
    public get enName(): string | undefined {
        return this['en_name'];
    }
    public withLayoutJson(layoutJson: string): LayoutDetailInfo {
        this['layout_json'] = layoutJson;
        return this;
    }
    public set layoutJson(layoutJson: string  | undefined) {
        this['layout_json'] = layoutJson;
    }
    public get layoutJson(): string | undefined {
        return this['layout_json'];
    }
    public withProjectId(projectId: string): LayoutDetailInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withUpdateTime(updateTime: string): LayoutDetailInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withWorkspaceId(workspaceId: string): LayoutDetailInfo {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withRegionId(regionId: string): LayoutDetailInfo {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withDomainId(domainId: string): LayoutDetailInfo {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withThumbnail(thumbnail: string): LayoutDetailInfo {
        this['thumbnail'] = thumbnail;
        return this;
    }
    public withUsedBy(usedBy: string): LayoutDetailInfo {
        this['used_by'] = usedBy;
        return this;
    }
    public set usedBy(usedBy: string  | undefined) {
        this['used_by'] = usedBy;
    }
    public get usedBy(): string | undefined {
        return this['used_by'];
    }
    public withLayoutCfg(layoutCfg: string): LayoutDetailInfo {
        this['layout_cfg'] = layoutCfg;
        return this;
    }
    public set layoutCfg(layoutCfg: string  | undefined) {
        this['layout_cfg'] = layoutCfg;
    }
    public get layoutCfg(): string | undefined {
        return this['layout_cfg'];
    }
    public withLayoutType(layoutType: string): LayoutDetailInfo {
        this['layout_type'] = layoutType;
        return this;
    }
    public set layoutType(layoutType: string  | undefined) {
        this['layout_type'] = layoutType;
    }
    public get layoutType(): string | undefined {
        return this['layout_type'];
    }
    public withBindingId(bindingId: string): LayoutDetailInfo {
        this['binding_id'] = bindingId;
        return this;
    }
    public set bindingId(bindingId: string  | undefined) {
        this['binding_id'] = bindingId;
    }
    public get bindingId(): string | undefined {
        return this['binding_id'];
    }
    public withBindingName(bindingName: string): LayoutDetailInfo {
        this['binding_name'] = bindingName;
        return this;
    }
    public set bindingName(bindingName: string  | undefined) {
        this['binding_name'] = bindingName;
    }
    public get bindingName(): string | undefined {
        return this['binding_name'];
    }
    public withBindingCode(bindingCode: string): LayoutDetailInfo {
        this['binding_code'] = bindingCode;
        return this;
    }
    public set bindingCode(bindingCode: string  | undefined) {
        this['binding_code'] = bindingCode;
    }
    public get bindingCode(): string | undefined {
        return this['binding_code'];
    }
    public withFieldsSum(fieldsSum: number): LayoutDetailInfo {
        this['fields_sum'] = fieldsSum;
        return this;
    }
    public set fieldsSum(fieldsSum: number  | undefined) {
        this['fields_sum'] = fieldsSum;
    }
    public get fieldsSum(): number | undefined {
        return this['fields_sum'];
    }
    public withWizardsSum(wizardsSum: number): LayoutDetailInfo {
        this['wizards_sum'] = wizardsSum;
        return this;
    }
    public set wizardsSum(wizardsSum: number  | undefined) {
        this['wizards_sum'] = wizardsSum;
    }
    public get wizardsSum(): number | undefined {
        return this['wizards_sum'];
    }
    public withSectionsSum(sectionsSum: number): LayoutDetailInfo {
        this['sections_sum'] = sectionsSum;
        return this;
    }
    public set sectionsSum(sectionsSum: number  | undefined) {
        this['sections_sum'] = sectionsSum;
    }
    public get sectionsSum(): number | undefined {
        return this['sections_sum'];
    }
    public withModulesSum(modulesSum: number): LayoutDetailInfo {
        this['modules_sum'] = modulesSum;
        return this;
    }
    public set modulesSum(modulesSum: number  | undefined) {
        this['modules_sum'] = modulesSum;
    }
    public get modulesSum(): number | undefined {
        return this['modules_sum'];
    }
    public withTabsSum(tabsSum: number): LayoutDetailInfo {
        this['tabs_sum'] = tabsSum;
        return this;
    }
    public set tabsSum(tabsSum: number  | undefined) {
        this['tabs_sum'] = tabsSum;
    }
    public get tabsSum(): number | undefined {
        return this['tabs_sum'];
    }
    public withVersion(version: string): LayoutDetailInfo {
        this['version'] = version;
        return this;
    }
    public withBoaVersion(boaVersion: string): LayoutDetailInfo {
        this['boa_version'] = boaVersion;
        return this;
    }
    public set boaVersion(boaVersion: string  | undefined) {
        this['boa_version'] = boaVersion;
    }
    public get boaVersion(): string | undefined {
        return this['boa_version'];
    }
}