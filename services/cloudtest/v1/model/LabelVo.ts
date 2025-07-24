

export class LabelVo {
    public uri?: string;
    public region?: string;
    private 'label_name'?: string;
    private 'service_type'?: string;
    private 'resource_type'?: string;
    private 'project_id'?: string;
    public constructor() { 
    }
    public withUri(uri: string): LabelVo {
        this['uri'] = uri;
        return this;
    }
    public withRegion(region: string): LabelVo {
        this['region'] = region;
        return this;
    }
    public withLabelName(labelName: string): LabelVo {
        this['label_name'] = labelName;
        return this;
    }
    public set labelName(labelName: string  | undefined) {
        this['label_name'] = labelName;
    }
    public get labelName(): string | undefined {
        return this['label_name'];
    }
    public withServiceType(serviceType: string): LabelVo {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): string | undefined {
        return this['service_type'];
    }
    public withResourceType(resourceType: string): LabelVo {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withProjectId(projectId: string): LabelVo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
}