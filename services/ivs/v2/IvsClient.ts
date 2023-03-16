import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { ActionsList } from './model/ActionsList';
import { DetectExtentionByIdCardImageRequest } from './model/DetectExtentionByIdCardImageRequest';
import { DetectExtentionByIdCardImageResponse } from './model/DetectExtentionByIdCardImageResponse';
import { DetectExtentionByNameAndIdRequest } from './model/DetectExtentionByNameAndIdRequest';
import { DetectExtentionByNameAndIdResponse } from './model/DetectExtentionByNameAndIdResponse';
import { DetectStandardByIdCardImageRequest } from './model/DetectStandardByIdCardImageRequest';
import { DetectStandardByIdCardImageResponse } from './model/DetectStandardByIdCardImageResponse';
import { DetectStandardByNameAndIdRequest } from './model/DetectStandardByNameAndIdRequest';
import { DetectStandardByNameAndIdResponse } from './model/DetectStandardByNameAndIdResponse';
import { DetectStandardByVideoAndIdCardImageRequest } from './model/DetectStandardByVideoAndIdCardImageRequest';
import { DetectStandardByVideoAndIdCardImageResponse } from './model/DetectStandardByVideoAndIdCardImageResponse';
import { DetectStandardByVideoAndNameAndIdRequest } from './model/DetectStandardByVideoAndNameAndIdRequest';
import { DetectStandardByVideoAndNameAndIdResponse } from './model/DetectStandardByVideoAndNameAndIdResponse';
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
import { IvsStandardByVideoAndIdCardImageRequestBody } from './model/IvsStandardByVideoAndIdCardImageRequestBody';
import { IvsStandardByVideoAndIdCardImageRequestBodyData } from './model/IvsStandardByVideoAndIdCardImageRequestBodyData';
import { IvsStandardByVideoAndIdCardImageResponseBodyResult } from './model/IvsStandardByVideoAndIdCardImageResponseBodyResult';
import { IvsStandardByVideoAndNameAndIdRequestBody } from './model/IvsStandardByVideoAndNameAndIdRequestBody';
import { IvsStandardByVideoAndNameAndIdRequestBodyData } from './model/IvsStandardByVideoAndNameAndIdRequestBodyData';
import { IvsStandardByVideoAndNameAndIdResponseBodyResult } from './model/IvsStandardByVideoAndNameAndIdResponseBodyResult';
import { Meta } from './model/Meta';
import { ReqDataByIdCardImage } from './model/ReqDataByIdCardImage';
import { ReqDataByVideoAndIdCardImage } from './model/ReqDataByVideoAndIdCardImage';
import { RespDataByIdCardImage } from './model/RespDataByIdCardImage';
import { RespDataByVideoAndIdCardImage } from './model/RespDataByVideoAndIdCardImage';
import { StandardReqDataByNameAndId } from './model/StandardReqDataByNameAndId';
import { StandardReqDataByVideoAndNameAndId } from './model/StandardReqDataByVideoAndNameAndId';
import { StandardRespDataByNameAndId } from './model/StandardRespDataByNameAndId';
import { StandardRespDataByVideoAndNameAndId } from './model/StandardRespDataByVideoAndNameAndId';
import { VideoResult } from './model/VideoResult';

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
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 人证核身证件版（二要素）
     * @param {IvsExtentionByIdCardImageRequestBody} ivsExtentionByIdCardImageRequestBody This is a auto create Body Object
     * @param {string} [enterpriseProjectId] 企业项目ID。IVS支持通过企业项目管理（EPS）对不同用户组和用户的资源使用，进行分账。  获取方法：进入“[企业项目管理](https://console.huaweicloud.com/eps/?region&#x3D;cn-north-4#/projects/list)”页面，单击企业项目名称，在企业项目详情页获取Enterprise-Project-Id（企业项目ID）。  企业项目创建步骤请参见用户指南。 &gt; 说明： 创建企业项目后，在传参时，有以下三类场景。 - 携带正确的ID，正常使用IVS服务，账单归到企业ID对应的企业项目中。 - 携带错误的ID，正常使用IVS服务，账单的企业项目会被分类为“未归集”。 - 不携带ID，正常使用IVS服务，账单的企业项目会被分类为“未归集”。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public detectExtentionByIdCardImage(detectExtentionByIdCardImageRequest?: DetectExtentionByIdCardImageRequest): Promise<DetectExtentionByIdCardImageResponse> {
        const options = ParamCreater().detectExtentionByIdCardImage(detectExtentionByIdCardImageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 使用姓名、身份证号码二要素进行身份审核。身份验证时，传入的数据为身份证信息。提取身份证信息时，可以使用身份证正反面图片，也可以直接输入姓名、身份证号文本。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 人证核身证件版（二要素）
     * @param {IvsExtentionByNameAndIdRequestBody} ivsExtentionByNameAndIdRequestBody This is a auto create Body Object
     * @param {string} [enterpriseProjectId] 企业项目ID。IVS支持通过企业项目管理（EPS）对不同用户组和用户的资源使用，进行分账。  获取方法：进入“[企业项目管理](https://console.huaweicloud.com/eps/?region&#x3D;cn-north-4#/projects/list)”页面，单击企业项目名称，在企业项目详情页获取Enterprise-Project-Id（企业项目ID）。  企业项目创建步骤请参见用户指南。 &gt; 说明： 创建企业项目后，在传参时，有以下三类场景。 - 携带正确的ID，正常使用IVS服务，账单归到企业ID对应的企业项目中。 - 携带错误的ID，正常使用IVS服务，账单的企业项目会被分类为“未归集”。 - 不携带ID，正常使用IVS服务，账单的企业项目会被分类为“未归集”。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public detectExtentionByNameAndId(detectExtentionByNameAndIdRequest?: DetectExtentionByNameAndIdRequest): Promise<DetectExtentionByNameAndIdResponse> {
        const options = ParamCreater().detectExtentionByNameAndId(detectExtentionByNameAndIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 使用身份证正反面图片提取姓名和身份证号码，与人脸图片进行三要素身份审核。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 人证核身标准版（三要素）
     * @param {IvsStandardByIdCardImageRequestBody} ivsStandardByIdCardImageRequestBody This is a auto create Body Object
     * @param {string} [enterpriseProjectId] 企业项目ID。IVS支持通过企业项目管理（EPS）对不同用户组和用户的资源使用，进行分账。  获取方法：进入“[企业项目管理](https://console.huaweicloud.com/eps/?region&#x3D;cn-north-4#/projects/list)”页面，单击企业项目名称，在企业项目详情页获取Enterprise-Project-Id（企业项目ID）。  企业项目创建步骤请参见用户指南。 &gt; 说明： 创建企业项目后，在传参时，有以下三类场景。 - 携带正确的ID，正常使用IVS服务，账单归到企业ID对应的企业项目中。 - 携带错误的ID，正常使用IVS服务，账单的企业项目会被分类为“未归集”。 - 不携带ID，正常使用IVS服务，账单的企业项目会被分类为“未归集”。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public detectStandardByIdCardImage(detectStandardByIdCardImageRequest?: DetectStandardByIdCardImageRequest): Promise<DetectStandardByIdCardImageResponse> {
        const options = ParamCreater().detectStandardByIdCardImage(detectStandardByIdCardImageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 使用姓名、身份证号文本和人脸图片进行三要素身份审核。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 人证核身标准版（三要素）
     * @param {IvsStandardByNameAndIdRequestBody} ivsStandardByNameAndIdRequestBody This is a auto create Body Object
     * @param {string} [enterpriseProjectId] 企业项目ID。IVS支持通过企业项目管理（EPS）对不同用户组和用户的资源使用，进行分账。  获取方法：进入“[企业项目管理](https://console.huaweicloud.com/eps/?region&#x3D;cn-north-4#/projects/list)”页面，单击企业项目名称，在企业项目详情页获取Enterprise-Project-Id（企业项目ID）。  企业项目创建步骤请参见用户指南。 &gt; 说明： 创建企业项目后，在传参时，有以下三类场景。 - 携带正确的ID，正常使用IVS服务，账单归到企业ID对应的企业项目中。 - 携带错误的ID，正常使用IVS服务，账单的企业项目会被分类为“未归集”。 - 不携带ID，正常使用IVS服务，账单的企业项目会被分类为“未归集”。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public detectStandardByNameAndId(detectStandardByNameAndIdRequest?: DetectStandardByNameAndIdRequest): Promise<DetectStandardByNameAndIdResponse> {
        const options = ParamCreater().detectStandardByNameAndId(detectStandardByNameAndIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 从身份证正反面图片中提取姓名和身份证号码，并对视频做活体检测后提取人脸图片，以此进行三要素身份审核。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 人证核身标准版（三要素）
     * @param {IvsStandardByVideoAndIdCardImageRequestBody} ivsStandardByVideoAndIdCardImageRequestBody This is a auto create Body Object
     * @param {string} [enterpriseProjectId] 企业项目ID。IVS支持通过企业项目管理（EPS）对不同用户组和用户的资源使用，进行分账。  获取方法：进入“[企业项目管理](https://console.huaweicloud.com/eps/?region&#x3D;cn-north-4#/projects/list)”页面，单击企业项目名称，在企业项目详情页获取Enterprise-Project-Id（企业项目ID）。  企业项目创建步骤请参见用户指南。 &gt; 说明： 创建企业项目后，在传参时，有以下三类场景。 - 携带正确的ID，正常使用IVS服务，账单归到企业ID对应的企业项目中。 - 携带错误的ID，正常使用IVS服务，账单的企业项目会被分类为“未归集”。 - 不携带ID，正常使用IVS服务，账单的企业项目会被分类为“未归集”。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public detectStandardByVideoAndIdCardImage(detectStandardByVideoAndIdCardImageRequest?: DetectStandardByVideoAndIdCardImageRequest): Promise<DetectStandardByVideoAndIdCardImageResponse> {
        const options = ParamCreater().detectStandardByVideoAndIdCardImage(detectStandardByVideoAndIdCardImageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 使用姓名、身份证号文本，并对视频做活体检测后提取人脸图片，以此进行三要素身份审核。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 人证核身标准版（三要素）
     * @param {IvsStandardByVideoAndNameAndIdRequestBody} ivsStandardByVideoAndNameAndIdRequestBody This is a auto create Body Object
     * @param {string} [enterpriseProjectId] 企业项目ID。IVS支持通过企业项目管理（EPS）对不同用户组和用户的资源使用，进行分账。  获取方法：进入“[企业项目管理](https://console.huaweicloud.com/eps/?region&#x3D;cn-north-4#/projects/list)”页面，单击企业项目名称，在企业项目详情页获取Enterprise-Project-Id（企业项目ID）。  企业项目创建步骤请参见用户指南。 &gt; 说明： 创建企业项目后，在传参时，有以下三类场景。 - 携带正确的ID，正常使用IVS服务，账单归到企业ID对应的企业项目中。 - 携带错误的ID，正常使用IVS服务，账单的企业项目会被分类为“未归集”。 - 不携带ID，正常使用IVS服务，账单的企业项目会被分类为“未归集”。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public detectStandardByVideoAndNameAndId(detectStandardByVideoAndNameAndIdRequest?: DetectStandardByVideoAndNameAndIdRequest): Promise<DetectStandardByVideoAndNameAndIdResponse> {
        const options = ParamCreater().detectStandardByVideoAndNameAndId(detectStandardByVideoAndNameAndIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 使用姓名、身份证号码二要素进行身份审核。身份验证时，传入的数据为身份证信息。提取身份证信息时，可以使用身份证正反面图片，也可以直接输入姓名、身份证号文本。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
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
            
            let enterpriseProjectId;

            if (detectExtentionByIdCardImageRequest !== null && detectExtentionByIdCardImageRequest !== undefined) {
                if (detectExtentionByIdCardImageRequest instanceof DetectExtentionByIdCardImageRequest) {
                    body = detectExtentionByIdCardImageRequest.body
                    enterpriseProjectId = detectExtentionByIdCardImageRequest.enterpriseProjectId;
                } else {
                    body = detectExtentionByIdCardImageRequest['body'];
                    enterpriseProjectId = detectExtentionByIdCardImageRequest['Enterprise-Project-Id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== undefined && enterpriseProjectId !== null) {
                localVarHeaderParameter['Enterprise-Project-Id'] = String(enterpriseProjectId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 使用姓名、身份证号码二要素进行身份审核。身份验证时，传入的数据为身份证信息。提取身份证信息时，可以使用身份证正反面图片，也可以直接输入姓名、身份证号文本。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
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
            
            let enterpriseProjectId;

            if (detectExtentionByNameAndIdRequest !== null && detectExtentionByNameAndIdRequest !== undefined) {
                if (detectExtentionByNameAndIdRequest instanceof DetectExtentionByNameAndIdRequest) {
                    body = detectExtentionByNameAndIdRequest.body
                    enterpriseProjectId = detectExtentionByNameAndIdRequest.enterpriseProjectId;
                } else {
                    body = detectExtentionByNameAndIdRequest['body'];
                    enterpriseProjectId = detectExtentionByNameAndIdRequest['Enterprise-Project-Id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== undefined && enterpriseProjectId !== null) {
                localVarHeaderParameter['Enterprise-Project-Id'] = String(enterpriseProjectId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 使用身份证正反面图片提取姓名和身份证号码，与人脸图片进行三要素身份审核。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
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
            
            let enterpriseProjectId;

            if (detectStandardByIdCardImageRequest !== null && detectStandardByIdCardImageRequest !== undefined) {
                if (detectStandardByIdCardImageRequest instanceof DetectStandardByIdCardImageRequest) {
                    body = detectStandardByIdCardImageRequest.body
                    enterpriseProjectId = detectStandardByIdCardImageRequest.enterpriseProjectId;
                } else {
                    body = detectStandardByIdCardImageRequest['body'];
                    enterpriseProjectId = detectStandardByIdCardImageRequest['Enterprise-Project-Id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== undefined && enterpriseProjectId !== null) {
                localVarHeaderParameter['Enterprise-Project-Id'] = String(enterpriseProjectId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 使用姓名、身份证号文本和人脸图片进行三要素身份审核。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
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
            
            let enterpriseProjectId;

            if (detectStandardByNameAndIdRequest !== null && detectStandardByNameAndIdRequest !== undefined) {
                if (detectStandardByNameAndIdRequest instanceof DetectStandardByNameAndIdRequest) {
                    body = detectStandardByNameAndIdRequest.body
                    enterpriseProjectId = detectStandardByNameAndIdRequest.enterpriseProjectId;
                } else {
                    body = detectStandardByNameAndIdRequest['body'];
                    enterpriseProjectId = detectStandardByNameAndIdRequest['Enterprise-Project-Id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== undefined && enterpriseProjectId !== null) {
                localVarHeaderParameter['Enterprise-Project-Id'] = String(enterpriseProjectId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 从身份证正反面图片中提取姓名和身份证号码，并对视频做活体检测后提取人脸图片，以此进行三要素身份审核。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        detectStandardByVideoAndIdCardImage(detectStandardByVideoAndIdCardImageRequest?: DetectStandardByVideoAndIdCardImageRequest) {
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
            
            let enterpriseProjectId;

            if (detectStandardByVideoAndIdCardImageRequest !== null && detectStandardByVideoAndIdCardImageRequest !== undefined) {
                if (detectStandardByVideoAndIdCardImageRequest instanceof DetectStandardByVideoAndIdCardImageRequest) {
                    body = detectStandardByVideoAndIdCardImageRequest.body
                    enterpriseProjectId = detectStandardByVideoAndIdCardImageRequest.enterpriseProjectId;
                } else {
                    body = detectStandardByVideoAndIdCardImageRequest['body'];
                    enterpriseProjectId = detectStandardByVideoAndIdCardImageRequest['Enterprise-Project-Id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== undefined && enterpriseProjectId !== null) {
                localVarHeaderParameter['Enterprise-Project-Id'] = String(enterpriseProjectId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 使用姓名、身份证号文本，并对视频做活体检测后提取人脸图片，以此进行三要素身份审核。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        detectStandardByVideoAndNameAndId(detectStandardByVideoAndNameAndIdRequest?: DetectStandardByVideoAndNameAndIdRequest) {
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
            
            let enterpriseProjectId;

            if (detectStandardByVideoAndNameAndIdRequest !== null && detectStandardByVideoAndNameAndIdRequest !== undefined) {
                if (detectStandardByVideoAndNameAndIdRequest instanceof DetectStandardByVideoAndNameAndIdRequest) {
                    body = detectStandardByVideoAndNameAndIdRequest.body
                    enterpriseProjectId = detectStandardByVideoAndNameAndIdRequest.enterpriseProjectId;
                } else {
                    body = detectStandardByVideoAndNameAndIdRequest['body'];
                    enterpriseProjectId = detectStandardByVideoAndNameAndIdRequest['Enterprise-Project-Id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== undefined && enterpriseProjectId !== null) {
                localVarHeaderParameter['Enterprise-Project-Id'] = String(enterpriseProjectId);
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