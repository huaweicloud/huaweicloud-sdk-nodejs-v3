

export class LayoutCreateRequestPojo {
    public name?: string;
    public description?: string;
    private 'create_time'?: string;
    private 'creator_name'?: string;
    private 'cloud_pack_id'?: string;
    private 'cloud_pack_name'?: string;
    private 'cloud_pack_version'?: string;
    private 'is_built_in'?: boolean;
    private 'layout_json'?: object;
    private 'region_id'?: string;
    private 'domain_id'?: string;
    public thumbnail?: string;
    private 'used_by'?: string;
    private 'layout_type'?: string;
    private 'binding_id'?: string;
    private 'binding_code'?: string;
    private 'fields_sum'?: number;
    private 'wizards_sum'?: number;
    private 'sections_sum'?: number;
    private 'tabs_sum'?: number;
    private 'boa_version'?: string;
    public constructor(name?: string, usedBy?: string) { 
        this['name'] = name;
        this['used_by'] = usedBy;
    }
    public withName(name: string): LayoutCreateRequestPojo {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): LayoutCreateRequestPojo {
        this['description'] = description;
        return this;
    }
    public withCreateTime(createTime: string): LayoutCreateRequestPojo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withCreatorName(creatorName: string): LayoutCreateRequestPojo {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withCloudPackId(cloudPackId: string): LayoutCreateRequestPojo {
        this['cloud_pack_id'] = cloudPackId;
        return this;
    }
    public set cloudPackId(cloudPackId: string  | undefined) {
        this['cloud_pack_id'] = cloudPackId;
    }
    public get cloudPackId(): string | undefined {
        return this['cloud_pack_id'];
    }
    public withCloudPackName(cloudPackName: string): LayoutCreateRequestPojo {
        this['cloud_pack_name'] = cloudPackName;
        return this;
    }
    public set cloudPackName(cloudPackName: string  | undefined) {
        this['cloud_pack_name'] = cloudPackName;
    }
    public get cloudPackName(): string | undefined {
        return this['cloud_pack_name'];
    }
    public withCloudPackVersion(cloudPackVersion: string): LayoutCreateRequestPojo {
        this['cloud_pack_version'] = cloudPackVersion;
        return this;
    }
    public set cloudPackVersion(cloudPackVersion: string  | undefined) {
        this['cloud_pack_version'] = cloudPackVersion;
    }
    public get cloudPackVersion(): string | undefined {
        return this['cloud_pack_version'];
    }
    public withIsBuiltIn(isBuiltIn: boolean): LayoutCreateRequestPojo {
        this['is_built_in'] = isBuiltIn;
        return this;
    }
    public set isBuiltIn(isBuiltIn: boolean  | undefined) {
        this['is_built_in'] = isBuiltIn;
    }
    public get isBuiltIn(): boolean | undefined {
        return this['is_built_in'];
    }
    public withLayoutJson(layoutJson: object): LayoutCreateRequestPojo {
        this['layout_json'] = layoutJson;
        return this;
    }
    public set layoutJson(layoutJson: object  | undefined) {
        this['layout_json'] = layoutJson;
    }
    public get layoutJson(): object | undefined {
        return this['layout_json'];
    }
    public withRegionId(regionId: string): LayoutCreateRequestPojo {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withDomainId(domainId: string): LayoutCreateRequestPojo {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withThumbnail(thumbnail: string): LayoutCreateRequestPojo {
        this['thumbnail'] = thumbnail;
        return this;
    }
    public withUsedBy(usedBy: string): LayoutCreateRequestPojo {
        this['used_by'] = usedBy;
        return this;
    }
    public set usedBy(usedBy: string  | undefined) {
        this['used_by'] = usedBy;
    }
    public get usedBy(): string | undefined {
        return this['used_by'];
    }
    public withLayoutType(layoutType: string): LayoutCreateRequestPojo {
        this['layout_type'] = layoutType;
        return this;
    }
    public set layoutType(layoutType: string  | undefined) {
        this['layout_type'] = layoutType;
    }
    public get layoutType(): string | undefined {
        return this['layout_type'];
    }
    public withBindingId(bindingId: string): LayoutCreateRequestPojo {
        this['binding_id'] = bindingId;
        return this;
    }
    public set bindingId(bindingId: string  | undefined) {
        this['binding_id'] = bindingId;
    }
    public get bindingId(): string | undefined {
        return this['binding_id'];
    }
    public withBindingCode(bindingCode: string): LayoutCreateRequestPojo {
        this['binding_code'] = bindingCode;
        return this;
    }
    public set bindingCode(bindingCode: string  | undefined) {
        this['binding_code'] = bindingCode;
    }
    public get bindingCode(): string | undefined {
        return this['binding_code'];
    }
    public withFieldsSum(fieldsSum: number): LayoutCreateRequestPojo {
        this['fields_sum'] = fieldsSum;
        return this;
    }
    public set fieldsSum(fieldsSum: number  | undefined) {
        this['fields_sum'] = fieldsSum;
    }
    public get fieldsSum(): number | undefined {
        return this['fields_sum'];
    }
    public withWizardsSum(wizardsSum: number): LayoutCreateRequestPojo {
        this['wizards_sum'] = wizardsSum;
        return this;
    }
    public set wizardsSum(wizardsSum: number  | undefined) {
        this['wizards_sum'] = wizardsSum;
    }
    public get wizardsSum(): number | undefined {
        return this['wizards_sum'];
    }
    public withSectionsSum(sectionsSum: number): LayoutCreateRequestPojo {
        this['sections_sum'] = sectionsSum;
        return this;
    }
    public set sectionsSum(sectionsSum: number  | undefined) {
        this['sections_sum'] = sectionsSum;
    }
    public get sectionsSum(): number | undefined {
        return this['sections_sum'];
    }
    public withTabsSum(tabsSum: number): LayoutCreateRequestPojo {
        this['tabs_sum'] = tabsSum;
        return this;
    }
    public set tabsSum(tabsSum: number  | undefined) {
        this['tabs_sum'] = tabsSum;
    }
    public get tabsSum(): number | undefined {
        return this['tabs_sum'];
    }
    public withBoaVersion(boaVersion: string): LayoutCreateRequestPojo {
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