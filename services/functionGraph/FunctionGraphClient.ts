import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { CreateFunctionRequest } from "./model/CreateFunctionRequest";
import { CreateFunctionResponse } from "./model/CreateFunctionResponse";
import { GetFunctionListRequest } from "./model/GetFunctionListRequest";
import { GetFunctionListResponse } from "./model/GetFunctionListResponse";
import { UpdateFunctionRequest } from "./model/UpdateFunctionRequest";
import { UpdateFunctionResponse } from "./model/UpdateFunctionResponse";
import { DeleteFunctionRequest } from "./model/DeleteFunctionRequest";

export class FunctionGraphClient {
    public static newBuilder(): ClientBuilder<FunctionGraphClient> {
        return new ClientBuilder<FunctionGraphClient>(newClient);
    }
    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }
    public getPath() {
        return __dirname;
    }

    /**
     * 创建函数
     * @summary 创建函数
     * @param {CreateFunctionRequestBody}  
     * @throws {RequiredError}
     */
    public createFunction(createFunctionRequest: CreateFunctionRequest): Promise<CreateFunctionResponse> {
        const options = ParamCreater().createFunction(createFunctionRequest);
        options['responseHeader'] = [''];
        return this.hcClient.sendRequest(options);
    }
    /**
     * 更新函数
     * @param updateFuncionRequest 
     * @returns 
     */
    public updateFunction(updateFuncionRequest: UpdateFunctionRequest): Promise<UpdateFunctionResponse>{
        const options = ParamCreater().updateFunction(updateFuncionRequest);
        options['responseHeader'] = ['']
        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除函数
     * @param deleteFunctionRequest 
     */
    public deleteFunction(deleteFunctionRequest: DeleteFunctionRequest){
        const options = ParamCreater().deleteFunction(deleteFunctionRequest);
        options['responseHeader'] = [''];
        return this.hcClient.sendRequest(options);
    }
    /**
     * 获取函数列表
     * @summary 获取函数列表
     * @param {GetFunctionListRequest} 
     * @param {RequiredError}
     */
    public getFunctionList(getFunctionListRequest: GetFunctionListRequest): Promise<GetFunctionListResponse> {
        const options = ParamCreater().getFunctionList(getFunctionListRequest);
        options['responseHeader'] = [''];
        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
        /**
         * 此接口用于创建函数
         */
        createFunction(createFunctionRequest?: CreateFunctionRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/fgs/functions",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            }
            const localVarHeaderParameter = {} as any;
            var body: any;

            if (createFunctionRequest !== null && createFunctionRequest !== undefined) {
                if (createFunctionRequest instanceof CreateFunctionRequest) {
                    body = createFunctionRequest.body;
                } else {
                    body = createFunctionRequest['body'];
                }
            }

            if(body === null || body === undefined) {
                throw new RequiredError('body', 'Required parameter body')
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },

        /**
         * 更新函数
         */
        updateFunction(updateFunctionRequest?: UpdateFunctionRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/fgs/functions/{function_urn}/code",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            }
            const localVarHeaderParameter = {} as any;
            const localVarPathParameter = {} as any;
            let body: any;
            let func_urn: any;

            if (updateFunctionRequest !== null && updateFunctionRequest !== undefined) {
                if (updateFunctionRequest instanceof UpdateFunctionRequest) {
                    body = updateFunctionRequest.body;
                    func_urn = updateFunctionRequest.func_urn;
                } else {
                    body = updateFunctionRequest['body'];
                    func_urn = updateFunctionRequest['func_urn'];
                }
            }

            if(body === null || body === undefined) {
                throw new RequiredError('body', 'Required parameter body')
            }
            if(func_urn === null || func_urn === undefined) {
                throw new RequiredError('function_urn', 'Required parameter function_urn')
            }

            localVarPathParameter['function_urn'] = func_urn;
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            // options.data = {}
            // options.headers = localVarHeaderParameter;
            options.pathParams = { 'function_urn': func_urn}
            return options;
        },
        /**
         * 此接口用于获取函数列表
         */
        getFunctionList(getFunctionListRequest?: GetFunctionListRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/fgs/functions",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarQueryParameter = {} as any;
            let pkg;
            if(getFunctionListRequest !== null && getFunctionListRequest !== undefined) {
                if (getFunctionListRequest instanceof GetFunctionListRequest) {
                    pkg = getFunctionListRequest.package;
                }else{
                    pkg = getFunctionListRequest['package'];
                }
            }
            if (pkg !== null && pkg !== undefined) {
                localVarQueryParameter['package'] = pkg;
            }
            options.queryParams = localVarQueryParameter;
            return options;
        },

        /**
         * 此接口用于删除函数
         * @param deleteFunctionRequest 
         * @returns 
         */
        deleteFunction(deleteFunctionRequest: DeleteFunctionRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/fgs/functions/{function_urn}",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            let func_urn: any;
            if (deleteFunctionRequest !== null && deleteFunctionRequest !== undefined) {
                if (deleteFunctionRequest instanceof DeleteFunctionRequest) {
                    func_urn = deleteFunctionRequest.func_urn;
                } else {
                    func_urn = deleteFunctionRequest['func_urn'];
                }
            }
            if(func_urn === null || func_urn === undefined) {
                throw new RequiredError('function_urn', 'Required parameter function_urn')
            }
            options.pathParams = { 'function_urn': func_urn}
            return options;
        }
    }
}


function newClient(client: HcClient): FunctionGraphClient {
    return new FunctionGraphClient(client);
}

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
 export class RequiredError extends Error {
    name: "RequiredError" = "RequiredError";
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}