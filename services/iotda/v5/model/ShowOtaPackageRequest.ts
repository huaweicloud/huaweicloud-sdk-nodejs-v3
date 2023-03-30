

export class ShowOtaPackageRequest {
    private 'Instance-Id'?: string | undefined;
    private 'package_id': string | undefined;
    public constructor(packageId?: any) { 
        this['package_id'] = packageId;
    }
    public withInstanceId(instanceId: string): ShowOtaPackageRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withPackageId(packageId: string): ShowOtaPackageRequest {
        this['package_id'] = packageId;
        return this;
    }
    public set packageId(packageId: string | undefined) {
        this['package_id'] = packageId;
    }
    public get packageId() {
        return this['package_id'];
    }
}