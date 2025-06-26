

export class RelativeResource {
    private 'relative_resource_id'?: string;
    private 'relative_resource_name'?: string;
    private 'relative_type'?: number;
    private 'relative_cloud_service_type'?: string;
    private 'relative_resource_type'?: string;
    private 'extend_params'?: string;
    public constructor() { 
    }
    public withRelativeResourceId(relativeResourceId: string): RelativeResource {
        this['relative_resource_id'] = relativeResourceId;
        return this;
    }
    public set relativeResourceId(relativeResourceId: string  | undefined) {
        this['relative_resource_id'] = relativeResourceId;
    }
    public get relativeResourceId(): string | undefined {
        return this['relative_resource_id'];
    }
    public withRelativeResourceName(relativeResourceName: string): RelativeResource {
        this['relative_resource_name'] = relativeResourceName;
        return this;
    }
    public set relativeResourceName(relativeResourceName: string  | undefined) {
        this['relative_resource_name'] = relativeResourceName;
    }
    public get relativeResourceName(): string | undefined {
        return this['relative_resource_name'];
    }
    public withRelativeType(relativeType: number): RelativeResource {
        this['relative_type'] = relativeType;
        return this;
    }
    public set relativeType(relativeType: number  | undefined) {
        this['relative_type'] = relativeType;
    }
    public get relativeType(): number | undefined {
        return this['relative_type'];
    }
    public withRelativeCloudServiceType(relativeCloudServiceType: string): RelativeResource {
        this['relative_cloud_service_type'] = relativeCloudServiceType;
        return this;
    }
    public set relativeCloudServiceType(relativeCloudServiceType: string  | undefined) {
        this['relative_cloud_service_type'] = relativeCloudServiceType;
    }
    public get relativeCloudServiceType(): string | undefined {
        return this['relative_cloud_service_type'];
    }
    public withRelativeResourceType(relativeResourceType: string): RelativeResource {
        this['relative_resource_type'] = relativeResourceType;
        return this;
    }
    public set relativeResourceType(relativeResourceType: string  | undefined) {
        this['relative_resource_type'] = relativeResourceType;
    }
    public get relativeResourceType(): string | undefined {
        return this['relative_resource_type'];
    }
    public withExtendParams(extendParams: string): RelativeResource {
        this['extend_params'] = extendParams;
        return this;
    }
    public set extendParams(extendParams: string  | undefined) {
        this['extend_params'] = extendParams;
    }
    public get extendParams(): string | undefined {
        return this['extend_params'];
    }
}