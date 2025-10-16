

export class CreateOtaModule {
    private 'app_id'?: string;
    private 'product_id'?: string;
    private 'module_name'?: string;
    private 'alias_name'?: string;
    public description?: string;
    public constructor(appId?: string, productId?: string, moduleName?: string) { 
        this['app_id'] = appId;
        this['product_id'] = productId;
        this['module_name'] = moduleName;
    }
    public withAppId(appId: string): CreateOtaModule {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withProductId(productId: string): CreateOtaModule {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withModuleName(moduleName: string): CreateOtaModule {
        this['module_name'] = moduleName;
        return this;
    }
    public set moduleName(moduleName: string  | undefined) {
        this['module_name'] = moduleName;
    }
    public get moduleName(): string | undefined {
        return this['module_name'];
    }
    public withAliasName(aliasName: string): CreateOtaModule {
        this['alias_name'] = aliasName;
        return this;
    }
    public set aliasName(aliasName: string  | undefined) {
        this['alias_name'] = aliasName;
    }
    public get aliasName(): string | undefined {
        return this['alias_name'];
    }
    public withDescription(description: string): CreateOtaModule {
        this['description'] = description;
        return this;
    }
}