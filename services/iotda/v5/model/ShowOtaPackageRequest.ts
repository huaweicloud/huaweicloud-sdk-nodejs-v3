

export class ShowOtaPackageRequest {
    private 'Instance-Id'?: string;
    private 'package_id'?: string;
    public constructor(packageId?: string) { 
        this['package_id'] = packageId;
    }
    public withInstanceId(instanceId: string): ShowOtaPackageRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withPackageId(packageId: string): ShowOtaPackageRequest {
        this['package_id'] = packageId;
        return this;
    }
    public set packageId(packageId: string  | undefined) {
        this['package_id'] = packageId;
    }
    public get packageId(): string | undefined {
        return this['package_id'];
    }
}