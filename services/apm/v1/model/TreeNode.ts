

export class TreeNode {
    public id?: string;
    public parent?: string;
    private 'real_id'?: number;
    public name?: string;
    private 'display_name'?: string;
    private 'app_name'?: string;
    private 'app_id'?: number;
    private 'is_admin'?: boolean;
    private 'is_root'?: boolean;
    private 'business_id'?: number;
    private 'node_type'?: TreeNodeNodeTypeEnum | string;
    public region?: string;
    private 'is_default'?: boolean;
    public constructor() { 
    }
    public withId(id: string): TreeNode {
        this['id'] = id;
        return this;
    }
    public withParent(parent: string): TreeNode {
        this['parent'] = parent;
        return this;
    }
    public withRealId(realId: number): TreeNode {
        this['real_id'] = realId;
        return this;
    }
    public set realId(realId: number  | undefined) {
        this['real_id'] = realId;
    }
    public get realId(): number | undefined {
        return this['real_id'];
    }
    public withName(name: string): TreeNode {
        this['name'] = name;
        return this;
    }
    public withDisplayName(displayName: string): TreeNode {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withAppName(appName: string): TreeNode {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withAppId(appId: number): TreeNode {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: number  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): number | undefined {
        return this['app_id'];
    }
    public withIsAdmin(isAdmin: boolean): TreeNode {
        this['is_admin'] = isAdmin;
        return this;
    }
    public set isAdmin(isAdmin: boolean  | undefined) {
        this['is_admin'] = isAdmin;
    }
    public get isAdmin(): boolean | undefined {
        return this['is_admin'];
    }
    public withIsRoot(isRoot: boolean): TreeNode {
        this['is_root'] = isRoot;
        return this;
    }
    public set isRoot(isRoot: boolean  | undefined) {
        this['is_root'] = isRoot;
    }
    public get isRoot(): boolean | undefined {
        return this['is_root'];
    }
    public withBusinessId(businessId: number): TreeNode {
        this['business_id'] = businessId;
        return this;
    }
    public set businessId(businessId: number  | undefined) {
        this['business_id'] = businessId;
    }
    public get businessId(): number | undefined {
        return this['business_id'];
    }
    public withNodeType(nodeType: TreeNodeNodeTypeEnum | string): TreeNode {
        this['node_type'] = nodeType;
        return this;
    }
    public set nodeType(nodeType: TreeNodeNodeTypeEnum | string  | undefined) {
        this['node_type'] = nodeType;
    }
    public get nodeType(): TreeNodeNodeTypeEnum | string | undefined {
        return this['node_type'];
    }
    public withRegion(region: string): TreeNode {
        this['region'] = region;
        return this;
    }
    public withIsDefault(isDefault: boolean): TreeNode {
        this['is_default'] = isDefault;
        return this;
    }
    public set isDefault(isDefault: boolean  | undefined) {
        this['is_default'] = isDefault;
    }
    public get isDefault(): boolean | undefined {
        return this['is_default'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TreeNodeNodeTypeEnum {
    BUSINESS = 'BUSINESS',
    SUB_BUSINESS = 'SUB_BUSINESS',
    APPLICATION = 'APPLICATION',
    ENVIRONMENT = 'ENVIRONMENT'
}
