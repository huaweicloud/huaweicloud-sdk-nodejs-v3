import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
import { RequiredError } from "../../core/auth/AKSKSigner";

import { CreateFunctionRequest } from "./model/CreateFunctionRequest";
import { CreateFunctionResponse } from "./model/CreateFunctionResponse";

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
     * @param {CreateFunctionRequestBody} securityGroup 
     * @throws {RequiredError}
     */
    public createFunction(createFunctionRequest: CreateFunctionRequest):Promise<CreateFunctionResponse> {
        const options = ParamCreater().createFunction(createFunctionRequest);
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
    }
}


function newClient(client: HcClient): FunctionGraphClient {
    return new FunctionGraphClient(client);
}