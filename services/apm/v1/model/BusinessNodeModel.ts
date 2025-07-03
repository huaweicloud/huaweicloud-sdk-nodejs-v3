

export class BusinessNodeModel {
    private 'default'?: boolean;
    private 'display_name'?: string;
    private 'eps_id'?: string;
    private 'gmt_create'?: string;
    private 'gmt_modify'?: string;
    public id?: number;
    private 'inner_domain_id'?: number;
    private 'is_default'?: boolean;
    public name?: string;
    public constructor() { 
    }
    public withDefault(_default: boolean): BusinessNodeModel {
        this['default'] = _default;
        return this;
    }
    public set _default(_default: boolean  | undefined) {
        this['default'] = _default;
    }
    public get _default(): boolean | undefined {
        return this['default'];
    }
    public withDisplayName(displayName: string): BusinessNodeModel {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withEpsId(epsId: string): BusinessNodeModel {
        this['eps_id'] = epsId;
        return this;
    }
    public set epsId(epsId: string  | undefined) {
        this['eps_id'] = epsId;
    }
    public get epsId(): string | undefined {
        return this['eps_id'];
    }
    public withGmtCreate(gmtCreate: string): BusinessNodeModel {
        this['gmt_create'] = gmtCreate;
        return this;
    }
    public set gmtCreate(gmtCreate: string  | undefined) {
        this['gmt_create'] = gmtCreate;
    }
    public get gmtCreate(): string | undefined {
        return this['gmt_create'];
    }
    public withGmtModify(gmtModify: string): BusinessNodeModel {
        this['gmt_modify'] = gmtModify;
        return this;
    }
    public set gmtModify(gmtModify: string  | undefined) {
        this['gmt_modify'] = gmtModify;
    }
    public get gmtModify(): string | undefined {
        return this['gmt_modify'];
    }
    public withId(id: number): BusinessNodeModel {
        this['id'] = id;
        return this;
    }
    public withInnerDomainId(innerDomainId: number): BusinessNodeModel {
        this['inner_domain_id'] = innerDomainId;
        return this;
    }
    public set innerDomainId(innerDomainId: number  | undefined) {
        this['inner_domain_id'] = innerDomainId;
    }
    public get innerDomainId(): number | undefined {
        return this['inner_domain_id'];
    }
    public withIsDefault(isDefault: boolean): BusinessNodeModel {
        this['is_default'] = isDefault;
        return this;
    }
    public set isDefault(isDefault: boolean  | undefined) {
        this['is_default'] = isDefault;
    }
    public get isDefault(): boolean | undefined {
        return this['is_default'];
    }
    public withName(name: string): BusinessNodeModel {
        this['name'] = name;
        return this;
    }
}