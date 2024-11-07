

export class ListFunctionsRequest {
    private 'Instance-Id'?: string;
    private 'Sp-Auth-Token'?: string;
    private 'Stage-Auth-Token'?: string;
    private 'app_id'?: string;
    private 'product_id'?: string;
    public constructor(productId?: string) { 
        this['product_id'] = productId;
    }
    public withInstanceId(instanceId: string): ListFunctionsRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withSpAuthToken(spAuthToken: string): ListFunctionsRequest {
        this['Sp-Auth-Token'] = spAuthToken;
        return this;
    }
    public set spAuthToken(spAuthToken: string  | undefined) {
        this['Sp-Auth-Token'] = spAuthToken;
    }
    public get spAuthToken(): string | undefined {
        return this['Sp-Auth-Token'];
    }
    public withStageAuthToken(stageAuthToken: string): ListFunctionsRequest {
        this['Stage-Auth-Token'] = stageAuthToken;
        return this;
    }
    public set stageAuthToken(stageAuthToken: string  | undefined) {
        this['Stage-Auth-Token'] = stageAuthToken;
    }
    public get stageAuthToken(): string | undefined {
        return this['Stage-Auth-Token'];
    }
    public withAppId(appId: string): ListFunctionsRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withProductId(productId: string): ListFunctionsRequest {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
}