

export class ShowFactoryPackageDetailRequest {
    private 'package_id'?: string;
    public workspace?: string;
    private 'Content-Type'?: string;
    public constructor(packageId?: string) { 
        this['package_id'] = packageId;
    }
    public withPackageId(packageId: string): ShowFactoryPackageDetailRequest {
        this['package_id'] = packageId;
        return this;
    }
    public set packageId(packageId: string  | undefined) {
        this['package_id'] = packageId;
    }
    public get packageId(): string | undefined {
        return this['package_id'];
    }
    public withWorkspace(workspace: string): ShowFactoryPackageDetailRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withContentType(contentType: string): ShowFactoryPackageDetailRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
}