import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { DedicatedCluster } from './model/DedicatedCluster';
import { HostProperties } from './model/HostProperties';
import { ShowResourceClustersRequest } from './model/ShowResourceClustersRequest';
import { ShowResourceClustersResponse } from './model/ShowResourceClustersResponse';

export class DccClient {
    public static newBuilder(): ClientBuilder<DccClient> {
            let client = new ClientBuilder<DccClient>(newClient);
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
     * 获取专属计算集群资源
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取专属计算集群资源
     * @param {string} [serviceType] 集群服务类型，取值范围：“ecs”或“bms”。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showResourceClusters(showResourceClustersRequest?: ShowResourceClustersRequest): Promise<ShowResourceClustersResponse> {
        const options = ParamCreater().showResourceClusters(showResourceClustersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 获取专属计算集群资源
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showResourceClusters(showResourceClustersRequest?: ShowResourceClustersRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dcc/resource_clusters",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let serviceType;

            if (showResourceClustersRequest !== null && showResourceClustersRequest !== undefined) {
                if (showResourceClustersRequest instanceof ShowResourceClustersRequest) {
                    serviceType = showResourceClustersRequest.serviceType;
                } else {
                    serviceType = showResourceClustersRequest['service_type'];
                }
            }

        
            if (serviceType !== null && serviceType !== undefined) {
                localVarQueryParameter['service_type'] = serviceType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): DccClient {
    return new DccClient(client);
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