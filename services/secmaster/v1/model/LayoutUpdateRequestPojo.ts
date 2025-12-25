

export class LayoutUpdateRequestPojo {
    public name?: string;
    public description?: string;
    private 'cloud_pack_id'?: string;
    private 'cloud_pack_name'?: string;
    private 'cloud_pack_version'?: string;
    private 'is_built_in'?: boolean;
    private 'is_template'?: boolean;
    private 'layout_json'?: object;
    private 'fields_sum'?: number;
    private 'wizards_sum'?: number;
    private 'sections_sum'?: number;
    private 'tabs_sum'?: number;
    private 'boa_version'?: string;
    public constructor() { 
    }
    public withName(name: string): LayoutUpdateRequestPojo {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): LayoutUpdateRequestPojo {
        this['description'] = description;
        return this;
    }
    public withCloudPackId(cloudPackId: string): LayoutUpdateRequestPojo {
        this['cloud_pack_id'] = cloudPackId;
        return this;
    }
    public set cloudPackId(cloudPackId: string  | undefined) {
        this['cloud_pack_id'] = cloudPackId;
    }
    public get cloudPackId(): string | undefined {
        return this['cloud_pack_id'];
    }
    public withCloudPackName(cloudPackName: string): LayoutUpdateRequestPojo {
        this['cloud_pack_name'] = cloudPackName;
        return this;
    }
    public set cloudPackName(cloudPackName: string  | undefined) {
        this['cloud_pack_name'] = cloudPackName;
    }
    public get cloudPackName(): string | undefined {
        return this['cloud_pack_name'];
    }
    public withCloudPackVersion(cloudPackVersion: string): LayoutUpdateRequestPojo {
        this['cloud_pack_version'] = cloudPackVersion;
        return this;
    }
    public set cloudPackVersion(cloudPackVersion: string  | undefined) {
        this['cloud_pack_version'] = cloudPackVersion;
    }
    public get cloudPackVersion(): string | undefined {
        return this['cloud_pack_version'];
    }
    public withIsBuiltIn(isBuiltIn: boolean): LayoutUpdateRequestPojo {
        this['is_built_in'] = isBuiltIn;
        return this;
    }
    public set isBuiltIn(isBuiltIn: boolean  | undefined) {
        this['is_built_in'] = isBuiltIn;
    }
    public get isBuiltIn(): boolean | undefined {
        return this['is_built_in'];
    }
    public withIsTemplate(isTemplate: boolean): LayoutUpdateRequestPojo {
        this['is_template'] = isTemplate;
        return this;
    }
    public set isTemplate(isTemplate: boolean  | undefined) {
        this['is_template'] = isTemplate;
    }
    public get isTemplate(): boolean | undefined {
        return this['is_template'];
    }
    public withLayoutJson(layoutJson: object): LayoutUpdateRequestPojo {
        this['layout_json'] = layoutJson;
        return this;
    }
    public set layoutJson(layoutJson: object  | undefined) {
        this['layout_json'] = layoutJson;
    }
    public get layoutJson(): object | undefined {
        return this['layout_json'];
    }
    public withFieldsSum(fieldsSum: number): LayoutUpdateRequestPojo {
        this['fields_sum'] = fieldsSum;
        return this;
    }
    public set fieldsSum(fieldsSum: number  | undefined) {
        this['fields_sum'] = fieldsSum;
    }
    public get fieldsSum(): number | undefined {
        return this['fields_sum'];
    }
    public withWizardsSum(wizardsSum: number): LayoutUpdateRequestPojo {
        this['wizards_sum'] = wizardsSum;
        return this;
    }
    public set wizardsSum(wizardsSum: number  | undefined) {
        this['wizards_sum'] = wizardsSum;
    }
    public get wizardsSum(): number | undefined {
        return this['wizards_sum'];
    }
    public withSectionsSum(sectionsSum: number): LayoutUpdateRequestPojo {
        this['sections_sum'] = sectionsSum;
        return this;
    }
    public set sectionsSum(sectionsSum: number  | undefined) {
        this['sections_sum'] = sectionsSum;
    }
    public get sectionsSum(): number | undefined {
        return this['sections_sum'];
    }
    public withTabsSum(tabsSum: number): LayoutUpdateRequestPojo {
        this['tabs_sum'] = tabsSum;
        return this;
    }
    public set tabsSum(tabsSum: number  | undefined) {
        this['tabs_sum'] = tabsSum;
    }
    public get tabsSum(): number | undefined {
        return this['tabs_sum'];
    }
    public withBoaVersion(boaVersion: string): LayoutUpdateRequestPojo {
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