import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { BatchSendDiffSmsRequest } from './model/BatchSendDiffSmsRequest';
import { BatchSendDiffSmsRequestBody } from './model/BatchSendDiffSmsRequestBody';
import { BatchSendDiffSmsResponse } from './model/BatchSendDiffSmsResponse';
import { BatchSendSmsRequest } from './model/BatchSendSmsRequest';
import { BatchSendSmsRequestBody } from './model/BatchSendSmsRequestBody';
import { BatchSendSmsResponse } from './model/BatchSendSmsResponse';
import { SmsContent } from './model/SmsContent';
import { SmsID } from './model/SmsID';

export class SMSApiClient {
    public static newBuilder(): ClientBuilder<SMSApiClient> {
            let client = new ClientBuilder<SMSApiClient>(newClient, 'SMSApiCredentials');
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
     * 发送分批短信
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 发送分批短信
     * @param {BatchSendDiffSmsRequestBody} bean 请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchSendDiffSms(batchSendDiffSmsRequest?: BatchSendDiffSmsRequest): Promise<BatchSendDiffSmsResponse> {
        const options = ParamCreater().batchSendDiffSms(batchSendDiffSmsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ## 典型场景 ##
     *  SP调用此接口发送短信。
     * ## 接口功能 ##
     *  该接口用于SP请求短信平台向指定用户发送短信。
     * ## 使用说明 ##
     *      前提条件
     *   i.  已在短信平台获取该短信能力开放应用的app_key、app_secret。
     * 
     *     注意事项
     *   a.  群发短信时，如果“to”参数携带的号码中包含除数字和+之外的其他字符，则无法向该参数携带的所有号码发送短信。如果“to”参数携带的所有号码只包含数字和+，但部分号码不符合号码规则要求，则在响应消息中会通过状态码标识发送失败的号码，不影响其他正常号码的短信发送。号码之间以英文逗号分隔，每个号码最大长度为21位，最多允许携带500个号码。
     *   b. 本接口支持特殊AK/SK认证。
     *   c.  X-Sdk-Date不能与发送请求时的本地时间相差太大（15分钟），否则会导致鉴权失败。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 发送短信
     * @param {string} [from] 短信发送方的号码
     * @param {string} [to] 短信接收方的号码
     * @param {string} [templateId] 短信模板ID
     * @param {string} [templateParas] 短信模板的变量值
     * @param {string} [statusCallback] SP的回调地址
     * @param {string} [extend] 扩展参数，在状态报告中会原样返回。
     * @param {string} [signature] 短信签名
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchSendSms(batchSendSmsRequest?: BatchSendSmsRequest): Promise<BatchSendSmsResponse> {
        const options = ParamCreater().batchSendSms(batchSendSmsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 发送分批短信
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchSendDiffSms(batchSendDiffSmsRequest?: BatchSendDiffSmsRequest) {
            const options = {
                method: "POST",
                url: "/sms/batchSendDiffSms/v1",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchSendDiffSmsRequest !== null && batchSendDiffSmsRequest !== undefined) {
                if (batchSendDiffSmsRequest instanceof BatchSendDiffSmsRequest) {
                    body = batchSendDiffSmsRequest.body
                } else {
                    body = batchSendDiffSmsRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ## 典型场景 ##
         *  SP调用此接口发送短信。
         * ## 接口功能 ##
         *  该接口用于SP请求短信平台向指定用户发送短信。
         * ## 使用说明 ##
         *      前提条件
         *   i.  已在短信平台获取该短信能力开放应用的app_key、app_secret。
         * 
         *     注意事项
         *   a.  群发短信时，如果“to”参数携带的号码中包含除数字和+之外的其他字符，则无法向该参数携带的所有号码发送短信。如果“to”参数携带的所有号码只包含数字和+，但部分号码不符合号码规则要求，则在响应消息中会通过状态码标识发送失败的号码，不影响其他正常号码的短信发送。号码之间以英文逗号分隔，每个号码最大长度为21位，最多允许携带500个号码。
         *   b. 本接口支持特殊AK/SK认证。
         *   c.  X-Sdk-Date不能与发送请求时的本地时间相差太大（15分钟），否则会导致鉴权失败。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchSendSms(batchSendSmsRequest?: BatchSendSmsRequest) {
            const options = {
                method: "POST",
                url: "/sms/batchSendSms/v1",
                contentType: "application/x-www-form-urlencoded",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            const localVarFormParams = new URLSearchParams();
            let from;
            
            let to;
            
            let templateId;
            
            let templateParas;
            
            let statusCallback;
            
            let extend;
            
            let signature;
            

            if (batchSendSmsRequest !== null && batchSendSmsRequest !== undefined) {
                if (batchSendSmsRequest instanceof BatchSendSmsRequest) {
                    from = batchSendSmsRequest.body?.from;
                    to = batchSendSmsRequest.body?.to;
                    templateId = batchSendSmsRequest.body?.templateId;
                    templateParas = batchSendSmsRequest.body?.templateParas;
                    statusCallback = batchSendSmsRequest.body?.statusCallback;
                    extend = batchSendSmsRequest.body?.extend;
                    signature = batchSendSmsRequest.body?.signature;
                } else {
                    from = batchSendSmsRequest['body']['from'];
                    to = batchSendSmsRequest['body']['to'];
                    templateId = batchSendSmsRequest['body']['templateId'];
                    templateParas = batchSendSmsRequest['body']['templateParas'];
                    statusCallback = batchSendSmsRequest['body']['statusCallback'];
                    extend = batchSendSmsRequest['body']['extend'];
                    signature = batchSendSmsRequest['body']['signature'];
                }
            }

        
            if (from !== undefined) { 
                localVarFormParams.set('from', from as any);
            }
            if (to !== undefined) { 
                localVarFormParams.set('to', to as any);
            }
            if (templateId !== undefined) { 
                localVarFormParams.set('templateId', templateId as any);
            }
            if (templateParas !== undefined) { 
                localVarFormParams.set('templateParas', templateParas as any);
            }
            if (statusCallback !== undefined) { 
                localVarFormParams.set('statusCallback', statusCallback as any);
            }
            if (extend !== undefined) { 
                localVarFormParams.set('extend', extend as any);
            }
            if (signature !== undefined) { 
                localVarFormParams.set('signature', signature as any);
            }
            options.data = localVarFormParams.toString();
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): SMSApiClient {
    return new SMSApiClient(client);
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