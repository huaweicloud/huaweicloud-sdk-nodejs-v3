

export class CreatePolicyRequestBody {
    public name?: string;
    private 'package_id'?: string;
    public description?: string;
    public constructor(name?: string, packageId?: string) { 
        this['name'] = name;
        this['package_id'] = packageId;
    }
    public withName(name: string): CreatePolicyRequestBody {
        this['name'] = name;
        return this;
    }
    public withPackageId(packageId: string): CreatePolicyRequestBody {
        this['package_id'] = packageId;
        return this;
    }
    public set packageId(packageId: string  | undefined) {
        this['package_id'] = packageId;
    }
    public get packageId(): string | undefined {
        return this['package_id'];
    }
    public withDescription(description: string): CreatePolicyRequestBody {
        this['description'] = description;
        return this;
    }
}