

export class PolicyResponse {
    public id?: string;
    private 'package_id'?: string;
    private 'package_name'?: string;
    public name?: string;
    public description?: string;
    public region?: string;
    private 'clean_threshold'?: number;
    private 'num_protected_ip'?: number;
    public constructor(id?: string, packageId?: string, packageName?: string, name?: string, description?: string, region?: string, cleanThreshold?: number, numProtectedIp?: number) { 
        this['id'] = id;
        this['package_id'] = packageId;
        this['package_name'] = packageName;
        this['name'] = name;
        this['description'] = description;
        this['region'] = region;
        this['clean_threshold'] = cleanThreshold;
        this['num_protected_ip'] = numProtectedIp;
    }
    public withId(id: string): PolicyResponse {
        this['id'] = id;
        return this;
    }
    public withPackageId(packageId: string): PolicyResponse {
        this['package_id'] = packageId;
        return this;
    }
    public set packageId(packageId: string  | undefined) {
        this['package_id'] = packageId;
    }
    public get packageId(): string | undefined {
        return this['package_id'];
    }
    public withPackageName(packageName: string): PolicyResponse {
        this['package_name'] = packageName;
        return this;
    }
    public set packageName(packageName: string  | undefined) {
        this['package_name'] = packageName;
    }
    public get packageName(): string | undefined {
        return this['package_name'];
    }
    public withName(name: string): PolicyResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): PolicyResponse {
        this['description'] = description;
        return this;
    }
    public withRegion(region: string): PolicyResponse {
        this['region'] = region;
        return this;
    }
    public withCleanThreshold(cleanThreshold: number): PolicyResponse {
        this['clean_threshold'] = cleanThreshold;
        return this;
    }
    public set cleanThreshold(cleanThreshold: number  | undefined) {
        this['clean_threshold'] = cleanThreshold;
    }
    public get cleanThreshold(): number | undefined {
        return this['clean_threshold'];
    }
    public withNumProtectedIp(numProtectedIp: number): PolicyResponse {
        this['num_protected_ip'] = numProtectedIp;
        return this;
    }
    public set numProtectedIp(numProtectedIp: number  | undefined) {
        this['num_protected_ip'] = numProtectedIp;
    }
    public get numProtectedIp(): number | undefined {
        return this['num_protected_ip'];
    }
}