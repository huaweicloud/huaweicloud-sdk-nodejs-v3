import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { CheckProductHealthyRequest } from './model/CheckProductHealthyRequest';
import { CheckProductHealthyResponse } from './model/CheckProductHealthyResponse';
import { Compliance } from './model/Compliance';
import { DataSource } from './model/DataSource';
import { Environment } from './model/Environment';
import { Event } from './model/Event';
import { Events } from './model/Events';
import { Geo } from './model/Geo';
import { ImportEventsRequest } from './model/ImportEventsRequest';
import { ImportEventsResponse } from './model/ImportEventsResponse';
import { Malware } from './model/Malware';
import { MalwareProperties } from './model/MalwareProperties';
import { Network } from './model/Network';
import { ProductInfo } from './model/ProductInfo';
import { Remediation } from './model/Remediation';
import { Resource } from './model/Resource';
import { Severity } from './model/Severity';
import { ThreatIntel } from './model/ThreatIntel';
import { ThreatIntelProperties } from './model/ThreatIntelProperties';
import { Type } from './model/Type';
import { TypeProperties } from './model/TypeProperties';
import { VulnerabilityPatch } from './model/VulnerabilityPatch';

export class SecMasterClient {
    public static newBuilder(): ClientBuilder<SecMasterClient> {
            let client = new ClientBuilder<SecMasterClient>(newClient);
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
     * SA提供心跳接口，集成产品定时（每五分钟）发送心跳报文到态势感知，用来确认集成产品与态势感知之间的通路是否健康。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 检查心跳健康（仅支持华北-北京四使用）
     * @param {ProductInfo} checkProductHealthyRequestBody 健康状态上报请求体。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkProductHealthy(checkProductHealthyRequest?: CheckProductHealthyRequest): Promise<CheckProductHealthyResponse> {
        const options = ParamCreater().checkProductHealthy(checkProductHealthyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量数据上报，每批次最多不超过50条。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 上报安全产品数据（仅支持华北-北京四使用）
     * @param {Events} importEventsRequestBody event批量上传格式。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public importEvents(importEventsRequest?: ImportEventsRequest): Promise<ImportEventsResponse> {
        const options = ParamCreater().importEvents(importEventsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * SA提供心跳接口，集成产品定时（每五分钟）发送心跳报文到态势感知，用来确认集成产品与态势感知之间的通路是否健康。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkProductHealthy(checkProductHealthyRequest?: CheckProductHealthyRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/products/health-check",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (checkProductHealthyRequest !== null && checkProductHealthyRequest !== undefined) {
                if (checkProductHealthyRequest instanceof CheckProductHealthyRequest) {
                    body = checkProductHealthyRequest.body
                    xLanguage = checkProductHealthyRequest.xLanguage;
                } else {
                    body = checkProductHealthyRequest['body'];
                    xLanguage = checkProductHealthyRequest['X-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量数据上报，每批次最多不超过50条。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        importEvents(importEventsRequest?: ImportEventsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/events/import",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (importEventsRequest !== null && importEventsRequest !== undefined) {
                if (importEventsRequest instanceof ImportEventsRequest) {
                    body = importEventsRequest.body
                    xLanguage = importEventsRequest.xLanguage;
                } else {
                    body = importEventsRequest['body'];
                    xLanguage = importEventsRequest['X-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): SecMasterClient {
    return new SecMasterClient(client);
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