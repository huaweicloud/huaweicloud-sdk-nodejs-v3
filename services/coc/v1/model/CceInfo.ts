

export class CceInfo {
    public id?: string;
    private 'cce_id'?: string;
    private 'cce_name'?: string;
    private 'compliant_count'?: string;
    private 'non_compliant_count'?: string;
    public constructor() { 
    }
    public withId(id: string): CceInfo {
        this['id'] = id;
        return this;
    }
    public withCceId(cceId: string): CceInfo {
        this['cce_id'] = cceId;
        return this;
    }
    public set cceId(cceId: string  | undefined) {
        this['cce_id'] = cceId;
    }
    public get cceId(): string | undefined {
        return this['cce_id'];
    }
    public withCceName(cceName: string): CceInfo {
        this['cce_name'] = cceName;
        return this;
    }
    public set cceName(cceName: string  | undefined) {
        this['cce_name'] = cceName;
    }
    public get cceName(): string | undefined {
        return this['cce_name'];
    }
    public withCompliantCount(compliantCount: string): CceInfo {
        this['compliant_count'] = compliantCount;
        return this;
    }
    public set compliantCount(compliantCount: string  | undefined) {
        this['compliant_count'] = compliantCount;
    }
    public get compliantCount(): string | undefined {
        return this['compliant_count'];
    }
    public withNonCompliantCount(nonCompliantCount: string): CceInfo {
        this['non_compliant_count'] = nonCompliantCount;
        return this;
    }
    public set nonCompliantCount(nonCompliantCount: string  | undefined) {
        this['non_compliant_count'] = nonCompliantCount;
    }
    public get nonCompliantCount(): string | undefined {
        return this['non_compliant_count'];
    }
}