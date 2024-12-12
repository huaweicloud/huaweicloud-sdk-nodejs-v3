import { UpdatePrivateModuleMetadataRequestBody } from './UpdatePrivateModuleMetadataRequestBody';


export class UpdatePrivateModuleMetadataRequest {
    private 'Client-Request-Id'?: string;
    private 'module_name'?: string;
    public body?: UpdatePrivateModuleMetadataRequestBody;
    public constructor(clientRequestId?: string, moduleName?: string) { 
        this['Client-Request-Id'] = clientRequestId;
        this['module_name'] = moduleName;
    }
    public withClientRequestId(clientRequestId: string): UpdatePrivateModuleMetadataRequest {
        this['Client-Request-Id'] = clientRequestId;
        return this;
    }
    public set clientRequestId(clientRequestId: string  | undefined) {
        this['Client-Request-Id'] = clientRequestId;
    }
    public get clientRequestId(): string | undefined {
        return this['Client-Request-Id'];
    }
    public withModuleName(moduleName: string): UpdatePrivateModuleMetadataRequest {
        this['module_name'] = moduleName;
        return this;
    }
    public set moduleName(moduleName: string  | undefined) {
        this['module_name'] = moduleName;
    }
    public get moduleName(): string | undefined {
        return this['module_name'];
    }
    public withBody(body: UpdatePrivateModuleMetadataRequestBody): UpdatePrivateModuleMetadataRequest {
        this['body'] = body;
        return this;
    }
}