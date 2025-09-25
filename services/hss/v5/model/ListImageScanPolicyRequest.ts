

export class ListImageScanPolicyRequest {
    private 'enterprise_project_id'?: string;
    private 'global_image_type'?: string;
    public type?: ListImageScanPolicyRequestTypeEnum | string;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListImageScanPolicyRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withGlobalImageType(globalImageType: string): ListImageScanPolicyRequest {
        this['global_image_type'] = globalImageType;
        return this;
    }
    public set globalImageType(globalImageType: string  | undefined) {
        this['global_image_type'] = globalImageType;
    }
    public get globalImageType(): string | undefined {
        return this['global_image_type'];
    }
    public withType(type: ListImageScanPolicyRequestTypeEnum | string): ListImageScanPolicyRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListImageScanPolicyRequestTypeEnum {
    CYCLE = 'cycle',
    MANUAL = 'manual'
}
