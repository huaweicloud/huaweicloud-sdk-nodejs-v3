

export class ListImageWeakPwdUsersRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'image_type'?: string;
    public namespace?: string;
    private 'image_name'?: string;
    private 'tag_name'?: string;
    private 'image_id'?: string;
    private 'user_name'?: string;
    private 'instance_id'?: string;
    public constructor(imageType?: string) { 
        this['image_type'] = imageType;
    }
    public withRegion(region: string): ListImageWeakPwdUsersRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListImageWeakPwdUsersRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLimit(limit: number): ListImageWeakPwdUsersRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListImageWeakPwdUsersRequest {
        this['offset'] = offset;
        return this;
    }
    public withImageType(imageType: string): ListImageWeakPwdUsersRequest {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withNamespace(namespace: string): ListImageWeakPwdUsersRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withImageName(imageName: string): ListImageWeakPwdUsersRequest {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withTagName(tagName: string): ListImageWeakPwdUsersRequest {
        this['tag_name'] = tagName;
        return this;
    }
    public set tagName(tagName: string  | undefined) {
        this['tag_name'] = tagName;
    }
    public get tagName(): string | undefined {
        return this['tag_name'];
    }
    public withImageId(imageId: string): ListImageWeakPwdUsersRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withUserName(userName: string): ListImageWeakPwdUsersRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withInstanceId(instanceId: string): ListImageWeakPwdUsersRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
}