

export class ListVulAffectImageAppsRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'image_id'?: string;
    private 'is_handled'?: boolean;
    private 'image_type'?: string;
    private 'vul_id'?: string;
    public constructor(imageId?: string, isHandled?: boolean, imageType?: string, vulId?: string) { 
        this['image_id'] = imageId;
        this['is_handled'] = isHandled;
        this['image_type'] = imageType;
        this['vul_id'] = vulId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListVulAffectImageAppsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListVulAffectImageAppsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListVulAffectImageAppsRequest {
        this['limit'] = limit;
        return this;
    }
    public withImageId(imageId: string): ListVulAffectImageAppsRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withIsHandled(isHandled: boolean): ListVulAffectImageAppsRequest {
        this['is_handled'] = isHandled;
        return this;
    }
    public set isHandled(isHandled: boolean  | undefined) {
        this['is_handled'] = isHandled;
    }
    public get isHandled(): boolean | undefined {
        return this['is_handled'];
    }
    public withImageType(imageType: string): ListVulAffectImageAppsRequest {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withVulId(vulId: string): ListVulAffectImageAppsRequest {
        this['vul_id'] = vulId;
        return this;
    }
    public set vulId(vulId: string  | undefined) {
        this['vul_id'] = vulId;
    }
    public get vulId(): string | undefined {
        return this['vul_id'];
    }
}