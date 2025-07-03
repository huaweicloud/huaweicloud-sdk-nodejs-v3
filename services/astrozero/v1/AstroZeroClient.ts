import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { ShowOrderStatusReq } from './model/ShowOrderStatusReq';
import { ShowOrderStatusRequest } from './model/ShowOrderStatusRequest';
import { ShowOrderStatusResponse } from './model/ShowOrderStatusResponse';

export class AstroZeroClient {
    public static newBuilder(): ClientBuilder<AstroZeroClient> {
            let client = new ClientBuilder<AstroZeroClient>(newClient);
            return client;
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 查询活动时间租户开通情况
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询活动时间内租户开通情况
     * @param {ShowOrderStatusReq} [showOrderStatusReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showOrderStatus(showOrderStatusRequest?: ShowOrderStatusRequest): Promise<ShowOrderStatusResponse> {
        const options = ParamCreater().showOrderStatus(showOrderStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 查询活动时间租户开通情况
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showOrderStatus(showOrderStatusRequest?: ShowOrderStatusRequest) {
            const options = {
                method: "POST",
                url: "/rest/astro-zero/v1.0/service/queryTenant",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (showOrderStatusRequest !== null && showOrderStatusRequest !== undefined) {
                if (showOrderStatusRequest instanceof ShowOrderStatusRequest) {
                    body = showOrderStatusRequest.body
                } else {
                    body = showOrderStatusRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): AstroZeroClient {
    return new AstroZeroClient(client);
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