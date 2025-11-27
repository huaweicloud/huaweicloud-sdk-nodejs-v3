

export class ListWebTamperImageOptionsRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'registry_type'?: string;
    private 'image_namespace'?: string;
    private 'registry_name'?: string;
    private 'image_type'?: string;
    private 'image_name'?: string;
    public constructor(imageType?: string) { 
        this['image_type'] = imageType;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListWebTamperImageOptionsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListWebTamperImageOptionsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListWebTamperImageOptionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withRegistryType(registryType: string): ListWebTamperImageOptionsRequest {
        this['registry_type'] = registryType;
        return this;
    }
    public set registryType(registryType: string  | undefined) {
        this['registry_type'] = registryType;
    }
    public get registryType(): string | undefined {
        return this['registry_type'];
    }
    public withImageNamespace(imageNamespace: string): ListWebTamperImageOptionsRequest {
        this['image_namespace'] = imageNamespace;
        return this;
    }
    public set imageNamespace(imageNamespace: string  | undefined) {
        this['image_namespace'] = imageNamespace;
    }
    public get imageNamespace(): string | undefined {
        return this['image_namespace'];
    }
    public withRegistryName(registryName: string): ListWebTamperImageOptionsRequest {
        this['registry_name'] = registryName;
        return this;
    }
    public set registryName(registryName: string  | undefined) {
        this['registry_name'] = registryName;
    }
    public get registryName(): string | undefined {
        return this['registry_name'];
    }
    public withImageType(imageType: string): ListWebTamperImageOptionsRequest {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withImageName(imageName: string): ListWebTamperImageOptionsRequest {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
}