import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { RunTextModerationRequest } from './model/RunTextModerationRequest';
import { RunTextModerationResponse } from './model/RunTextModerationResponse';
import { SegmentResult } from './model/SegmentResult';
import { TextDetectionDataReq } from './model/TextDetectionDataReq';
import { TextDetectionReq } from './model/TextDetectionReq';
import { TextDetectionResult } from './model/TextDetectionResult';
import { TextDetectionResultDetail } from './model/TextDetectionResultDetail';

export class ModerationClient {
    public static newBuilder(): ClientBuilder<ModerationClient> {
        return new ClientBuilder<ModerationClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 分析并识别用户上传的文本内容是否有敏感内容（如色情、政治等），并将识别结果返回给用户
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 文本内容审核
     * @param {TextDetectionReq} runTextModerationRequestBody 文本内容审核请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runTextModeration(runTextModerationRequest?: RunTextModerationRequest): Promise<RunTextModerationResponse> {
        const options = ParamCreater().runTextModeration(runTextModerationRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 分析并识别用户上传的文本内容是否有敏感内容（如色情、政治等），并将识别结果返回给用户
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        runTextModeration(runTextModerationRequest?: RunTextModerationRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/moderation/text",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (runTextModerationRequest !== null && runTextModerationRequest !== undefined) {
                if (runTextModerationRequest instanceof RunTextModerationRequest) {
                    body = runTextModerationRequest.body
                } else {
                    body = runTextModerationRequest['body'];
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
    
    }
};

function newClient(client: HcClient): ModerationClient {
    return new ModerationClient(client);
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