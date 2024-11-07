
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddFunctionsResponse extends SdkResponse {
    private 'app_id'?: string;
    private 'product_id'?: string;
    private 'function_id'?: string;
    public urn?: string;
    public description?: string;
    private 'create_time'?: string;
    public constructor() { 
        super();
    }
    public withAppId(appId: string): AddFunctionsResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withProductId(productId: string): AddFunctionsResponse {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withFunctionId(functionId: string): AddFunctionsResponse {
        this['function_id'] = functionId;
        return this;
    }
    public set functionId(functionId: string  | undefined) {
        this['function_id'] = functionId;
    }
    public get functionId(): string | undefined {
        return this['function_id'];
    }
    public withUrn(urn: string): AddFunctionsResponse {
        this['urn'] = urn;
        return this;
    }
    public withDescription(description: string): AddFunctionsResponse {
        this['description'] = description;
        return this;
    }
    public withCreateTime(createTime: string): AddFunctionsResponse {
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