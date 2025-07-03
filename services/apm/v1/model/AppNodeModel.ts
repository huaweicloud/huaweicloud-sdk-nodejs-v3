

export class AppNodeModel {
    public id?: number;
    private 'gmt_create'?: string;
    private 'gmt_modify'?: string;
    public name?: string;
    private 'business_id'?: number;
    private 'sub_business_id'?: number;
    private 'inner_domain_id'?: number;
    public constructor() { 
    }
    public withId(id: number): AppNodeModel {
        this['id'] = id;
        return this;
    }
    public withGmtCreate(gmtCreate: string): AppNodeModel {
        this['gmt_create'] = gmtCreate;
        return this;
    }
    public set gmtCreate(gmtCreate: string  | undefined) {
        this['gmt_create'] = gmtCreate;
    }
    public get gmtCreate(): string | undefined {
        return this['gmt_create'];
    }
    public withGmtModify(gmtModify: string): AppNodeModel {
        this['gmt_modify'] = gmtModify;
        return this;
    }
    public set gmtModify(gmtModify: string  | undefined) {
        this['gmt_modify'] = gmtModify;
    }
    public get gmtModify(): string | undefined {
        return this['gmt_modify'];
    }
    public withName(name: string): AppNodeModel {
        this['name'] = name;
        return this;
    }
    public withBusinessId(businessId: number): AppNodeModel {
        this['business_id'] = businessId;
        return this;
    }
    public set businessId(businessId: number  | undefined) {
        this['business_id'] = businessId;
    }
    public get businessId(): number | undefined {
        return this['business_id'];
    }
    public withSubBusinessId(subBusinessId: number): AppNodeModel {
        this['sub_business_id'] = subBusinessId;
        return this;
    }
    public set subBusinessId(subBusinessId: number  | undefined) {
        this['sub_business_id'] = subBusinessId;
    }
    public get subBusinessId(): number | undefined {
        return this['sub_business_id'];
    }
    public withInnerDomainId(innerDomainId: number): AppNodeModel {
        this['inner_domain_id'] = innerDomainId;
        return this;
    }
    public set innerDomainId(innerDomainId: number  | undefined) {
        this['inner_domain_id'] = innerDomainId;
    }
    public get innerDomainId(): number | undefined {
        return this['inner_domain_id'];
    }
}