
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowOtaModuleResponse extends SdkResponse {
    private 'module_id'?: string;
    private 'app_id'?: string;
    private 'product_id'?: string;
    private 'product_name'?: string;
    private 'module_name'?: string;
    private 'alias_name'?: string;
    public description?: string;
    private 'create_time'?: string;
    public constructor() { 
        super();
    }
    public withModuleId(moduleId: string): ShowOtaModuleResponse {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: string  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): string | undefined {
        return this['module_id'];
    }
    public withAppId(appId: string): ShowOtaModuleResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withProductId(productId: string): ShowOtaModuleResponse {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withProductName(productName: string): ShowOtaModuleResponse {
        this['product_name'] = productName;
        return this;
    }
    public set productName(productName: string  | undefined) {
        this['product_name'] = productName;
    }
    public get productName(): string | undefined {
        return this['product_name'];
    }
    public withModuleName(moduleName: string): ShowOtaModuleResponse {
        this['module_name'] = moduleName;
        return this;
    }
    public set moduleName(moduleName: string  | undefined) {
        this['module_name'] = moduleName;
    }
    public get moduleName(): string | undefined {
        return this['module_name'];
    }
    public withAliasName(aliasName: string): ShowOtaModuleResponse {
        this['alias_name'] = aliasName;
        return this;
    }
    public set aliasName(aliasName: string  | undefined) {
        this['alias_name'] = aliasName;
    }
    public get aliasName(): string | undefined {
        return this['alias_name'];
    }
    public withDescription(description: string): ShowOtaModuleResponse {
        this['description'] = description;
        return this;
    }
    public withCreateTime(createTime: string): ShowOtaModuleResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
}