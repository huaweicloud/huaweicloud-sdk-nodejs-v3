import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { DetectExtentionByIdCardImageRequest } from './model/DetectExtentionByIdCardImageRequest';
import { DetectExtentionByIdCardImageResponse } from './model/DetectExtentionByIdCardImageResponse';
import { DetectExtentionByNameAndIdRequest } from './model/DetectExtentionByNameAndIdRequest';
import { DetectExtentionByNameAndIdResponse } from './model/DetectExtentionByNameAndIdResponse';
import { DetectStandardByIdCardImageRequest } from './model/DetectStandardByIdCardImageRequest';
import { DetectStandardByIdCardImageResponse } from './model/DetectStandardByIdCardImageResponse';
import { DetectStandardByNameAndIdRequest } from './model/DetectStandardByNameAndIdRequest';
import { DetectStandardByNameAndIdResponse } from './model/DetectStandardByNameAndIdResponse';
import { ExtentionReqDataByIdCardImage } from './model/ExtentionReqDataByIdCardImage';
import { ExtentionReqDataByNameAndId } from './model/ExtentionReqDataByNameAndId';
import { ExtentionRespDataByIdCardImage } from './model/ExtentionRespDataByIdCardImage';
import { ExtentionRespDataByNameAndId } from './model/ExtentionRespDataByNameAndId';
import { IdcardResult } from './model/IdcardResult';
import { IvsExtentionByIdCardImageRequestBody } from './model/IvsExtentionByIdCardImageRequestBody';
import { IvsExtentionByIdCardImageRequestBodyData } from './model/IvsExtentionByIdCardImageRequestBodyData';
import { IvsExtentionByIdCardImageResponseBodyResult } from './model/IvsExtentionByIdCardImageResponseBodyResult';
import { IvsExtentionByNameAndIdRequestBody } from './model/IvsExtentionByNameAndIdRequestBody';
import { IvsExtentionByNameAndIdRequestBodyData } from './model/IvsExtentionByNameAndIdRequestBodyData';
import { IvsExtentionByNameAndIdResponseBodyResult } from './model/IvsExtentionByNameAndIdResponseBodyResult';
import { IvsStandardByIdCardImageRequestBody } from './model/IvsStandardByIdCardImageRequestBody';
import { IvsStandardByIdCardImageRequestBodyData } from './model/IvsStandardByIdCardImageRequestBodyData';
import { IvsStandardByIdCardImageResponseBodyResult } from './model/IvsStandardByIdCardImageResponseBodyResult';
import { IvsStandardByNameAndIdRequestBody } from './model/IvsStandardByNameAndIdRequestBody';
import { IvsStandardByNameAndIdRequestBodyData } from './model/IvsStandardByNameAndIdRequestBodyData';
import { IvsStandardByNameAndIdResponseBodyResult } from './model/IvsStandardByNameAndIdResponseBodyResult';
import { Meta } from './model/Meta';
import { ReqDataByIdCardImage } from './model/ReqDataByIdCardImage';
import { RespDataByIdCardImage } from './model/RespDataByIdCardImage';
import { StandardReqDataByNameAndId } from './model/StandardReqDataByNameAndId';
import { StandardRespDataByNameAndId } from './model/StandardRespDataByNameAndId';

export class IvsClient {
    public static newBuilder(): ClientBuilder<IvsClient> {
        return new ClientBuilder<IvsClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }

    /**
     * 使用姓名、身份证号码二要素进行身份审核。身份验证时，传入的数据为身份证信息。提取身份证信息时，可以使用身份证正反面图片，也可以直接输入姓名、身份证号文本。
     * @summary 人证核身证件版（二要素）
     * @param {IvsExtentionByIdCardImageRequestBody} ivsExtentionByIdCardImageRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public detectExtentionByIdCardImage(detectExtentionByIdCardImageRequest?: DetectExtentionByIdCardImageRequest): Promise<DetectExtentionByIdCardImageResponse> {
        const options = ParamCreater().detectExtentionByIdCardImage(detectExtentionByIdCardImageRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 使用姓名、身份证号码二要素进行身份审核。身份验证时，传入的数据为身份证信息。提取身份证信息时，可以使用身份证正反面图片，也可以直接输入姓名、身份证号文本。
     * @summary 人证核身证件版（二要素）
     * @param {IvsExtentionByNameAndIdRequestBody} ivsExtentionByNameAndIdRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public detectExtentionByNameAndId(detectExtentionByNameAndIdRequest?: DetectExtentionByNameAndIdRequest): Promise<DetectExtentionByNameAndIdResponse> {
        const options = ParamCreater().detectExtentionByNameAndId(detectExtentionByNameAndIdRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 使用姓名、身份证号码、人脸图片三要素进行身份审核。 身份验证时，传入的数据为人脸图片、身份证信息。提取身份证信息时，可以使用身份证正反面图片，也可以直接输入姓名、身份证号文本。
     * @summary 人证核身标准版（三要素）
     * @param {IvsStandardByIdCardImageRequestBody} ivsStandardByIdCardImageRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public detectStandardByIdCardImage(detectStandardByIdCardImageRequest?: DetectStandardByIdCardImageRequest): Promise<DetectStandardByIdCardImageResponse> {
        const options = ParamCreater().detectStandardByIdCardImage(detectStandardByIdCardImageRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 校验用户上传的身份证图片支持正反面同时上传 中的信息的真实性，输出最终的审核结果。 该接口也支持用户直接上传姓名和身份证号码进行合法性校验 。
     * @summary 人证核身标准版（三要素）
     * @param {IvsStandardByNameAndIdRequestBody} ivsStandardByNameAndIdRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public detectStandardByNameAndId(detectStandardByNameAndIdRequest?: DetectStandardByNameAndIdRequest): Promise<DetectStandardByNameAndIdResponse> {
        const options = ParamCreater().detectStandardByNameAndId(detectStandardByNameAndIdRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 使用姓名、身份证号码二要素进行身份审核。身份验证时，传入的数据为身份证信息。提取身份证信息时，可以使用身份证正反面图片，也可以直接输入姓名、身份证号文本。
         */
        detectExtentionByIdCardImage(detectExtentionByIdCardImageRequest?: DetectExtentionByIdCardImageRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/ivs-idcard-extention",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (detectExtentionByIdCardImageRequest !== null && detectExtentionByIdCardImageRequest !== undefined) {
                if (detectExtentionByIdCardImageRequest instanceof DetectExtentionByIdCardImageRequest) {
                    body = detectExtentionByIdCardImageRequest.body
                } else {
                    body = detectExtentionByIdCardImageRequest['body'];
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
         * 使用姓名、身份证号码二要素进行身份审核。身份验证时，传入的数据为身份证信息。提取身份证信息时，可以使用身份证正反面图片，也可以直接输入姓名、身份证号文本。
         */
        detectExtentionByNameAndId(detectExtentionByNameAndIdRequest?: DetectExtentionByNameAndIdRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/ivs-idcard-extention",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (detectExtentionByNameAndIdRequest !== null && detectExtentionByNameAndIdRequest !== undefined) {
                if (detectExtentionByNameAndIdRequest instanceof DetectExtentionByNameAndIdRequest) {
                    body = detectExtentionByNameAndIdRequest.body
                } else {
                    body = detectExtentionByNameAndIdRequest['body'];
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
         * 使用姓名、身份证号码、人脸图片三要素进行身份审核。 身份验证时，传入的数据为人脸图片、身份证信息。提取身份证信息时，可以使用身份证正反面图片，也可以直接输入姓名、身份证号文本。
         */
        detectStandardByIdCardImage(detectStandardByIdCardImageRequest?: DetectStandardByIdCardImageRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/ivs-standard",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (detectStandardByIdCardImageRequest !== null && detectStandardByIdCardImageRequest !== undefined) {
                if (detectStandardByIdCardImageRequest instanceof DetectStandardByIdCardImageRequest) {
                    body = detectStandardByIdCardImageRequest.body
                } else {
                    body = detectStandardByIdCardImageRequest['body'];
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
         * 校验用户上传的身份证图片支持正反面同时上传 中的信息的真实性，输出最终的审核结果。 该接口也支持用户直接上传姓名和身份证号码进行合法性校验 。
         */
        detectStandardByNameAndId(detectStandardByNameAndIdRequest?: DetectStandardByNameAndIdRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/ivs-standard",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (detectStandardByNameAndIdRequest !== null && detectStandardByNameAndIdRequest !== undefined) {
                if (detectStandardByNameAndIdRequest instanceof DetectStandardByNameAndIdRequest) {
                    body = detectStandardByNameAndIdRequest.body
                } else {
                    body = detectStandardByNameAndIdRequest['body'];
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

function newClient(client: HcClient): IvsClient {
    return new IvsClient(client);
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