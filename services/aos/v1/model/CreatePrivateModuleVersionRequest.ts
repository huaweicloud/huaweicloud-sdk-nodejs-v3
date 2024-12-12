import { CreatePrivateModuleVersionRequestBody } from './CreatePrivateModuleVersionRequestBody';


export class CreatePrivateModuleVersionRequest {
    private 'Client-Request-Id'?: string;
    private 'module_name'?: string;
    public body?: CreatePrivateModuleVersionRequestBody;
    public constructor(clientRequestId?: string, moduleName?: string) { 
        this['Client-Request-Id'] = clientRequestId;
        this['module_name'] = moduleName;
    }
    public withClientRequestId(clientRequestId: string): CreatePrivateModuleVersionRequest {
        this['Client-Request-Id'] = clientRequestId;
        return this;
    }
    public set clientRequestId(clientRequestId: string  | undefined) {
        this['Client-Request-Id'] = clientRequestId;
    }
    public get clientRequestId(): string | undefined {
        return this['Client-Request-Id'];
    }
    public withModuleName(moduleName: string): CreatePrivateModuleVersionRequest {
        this['module_name'] = moduleName;
        return this;
    }
    public set moduleName(moduleName: string  | undefined) {
        this['module_name'] = moduleName;
    }
    public get moduleName(): string | undefined {
        return this['module_name'];
    }
    public withBody(body: CreatePrivateModuleVersionRequestBody): CreatePrivateModuleVersionRequest {
        this['body'] = body;
        return this;
    }
}