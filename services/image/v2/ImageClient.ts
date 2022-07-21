import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { CelebrityRecognitionReq } from './model/CelebrityRecognitionReq';
import { CelebrityRecognitionResultBody } from './model/CelebrityRecognitionResultBody';
import { ImageDescriptionReq } from './model/ImageDescriptionReq';
import { ImageDescriptionResponseResult } from './model/ImageDescriptionResponseResult';
import { ImageMainObjectDetectionInstance } from './model/ImageMainObjectDetectionInstance';
import { ImageMainObjectDetectionReq } from './model/ImageMainObjectDetectionReq';
import { ImageMediaTaggingItemBody } from './model/ImageMediaTaggingItemBody';
import { ImageMediaTaggingItemBodyI18nTag } from './model/ImageMediaTaggingItemBodyI18nTag';
import { ImageMediaTaggingItemBodyI18nType } from './model/ImageMediaTaggingItemBodyI18nType';
import { ImageMediaTaggingReq } from './model/ImageMediaTaggingReq';
import { ImageMediaTaggingResponseResult } from './model/ImageMediaTaggingResponseResult';
import { ImageTaggingInstance } from './model/ImageTaggingInstance';
import { ImageTaggingItemBody } from './model/ImageTaggingItemBody';
import { ImageTaggingItemBodyI18nTag } from './model/ImageTaggingItemBodyI18nTag';
import { ImageTaggingItemBodyI18nType } from './model/ImageTaggingItemBodyI18nType';
import { ImageTaggingReq } from './model/ImageTaggingReq';
import { ImageTaggingResponseResult } from './model/ImageTaggingResponseResult';
import { RunCelebrityRecognitionRequest } from './model/RunCelebrityRecognitionRequest';
import { RunCelebrityRecognitionResponse } from './model/RunCelebrityRecognitionResponse';
import { RunImageDescriptionRequest } from './model/RunImageDescriptionRequest';
import { RunImageDescriptionResponse } from './model/RunImageDescriptionResponse';
import { RunImageMainObjectDetectionRequest } from './model/RunImageMainObjectDetectionRequest';
import { RunImageMainObjectDetectionResponse } from './model/RunImageMainObjectDetectionResponse';
import { RunImageMediaTaggingRequest } from './model/RunImageMediaTaggingRequest';
import { RunImageMediaTaggingResponse } from './model/RunImageMediaTaggingResponse';
import { RunImageTaggingRequest } from './model/RunImageTaggingRequest';
import { RunImageTaggingResponse } from './model/RunImageTaggingResponse';

export class ImageClient {
    public static newBuilder(): ClientBuilder<ImageClient> {
        return new ClientBuilder<ImageClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 分析并识别图片中包含的政治人物、明星及网红人物，返回人物信息及人脸坐标。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 名人识别
     * @param {CelebrityRecognitionReq} runCelebrityRecognitionRequestBody 名人识别接口请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runCelebrityRecognition(runCelebrityRecognitionRequest?: RunCelebrityRecognitionRequest): Promise<RunCelebrityRecognitionResponse> {
        const options = ParamCreater().runCelebrityRecognition(runCelebrityRecognitionRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 图像描述
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 图像描述
     * @param {ImageDescriptionReq} runImageDescriptionRequestBody 图像描述接口请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runImageDescription(runImageDescriptionRequest?: RunImageDescriptionRequest): Promise<RunImageDescriptionResponse> {
        const options = ParamCreater().runImageDescription(runImageDescriptionRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 检测图像中的主要内容，返回主要内容的坐标信息，这里的主要内容包括两方面：bounding_box和main_object_box
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 图像主体识别
     * @param {ImageMainObjectDetectionReq} runImageMainObjectDetectionRequestBody 图像主体识别接口请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runImageMainObjectDetection(runImageMainObjectDetectionRequest?: RunImageMainObjectDetectionRequest): Promise<RunImageMainObjectDetectionResponse> {
        const options = ParamCreater().runImageMainObjectDetection(runImageMainObjectDetectionRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 自然图像的语义内容非常丰富，一个图像包含多个标签内容，图像标签服务准确识别自然图片中数百种场景、上千种通用物体及其属性，让智能相册管理、照片检索和分类、基于场景内容或者物体的广告推荐等功能更加直观。使用时用户发送待处理图片，返回图片标签内容及相应置信度。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 媒资图像标签
     * @param {ImageMediaTaggingReq} runImageMediaTaggingRequestBody 媒资图像标签接口请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runImageMediaTagging(runImageMediaTaggingRequest?: RunImageMediaTaggingRequest): Promise<RunImageMediaTaggingResponse> {
        const options = ParamCreater().runImageMediaTagging(runImageMediaTaggingRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 自然图像的语义内容非常丰富，一个图像包含多个标签内容，图像标签服务准确识别自然图片中数百种场景、上千种通用物体及其属性，让智能相册管理、照片检索和分类、基于场景内容或者物体的广告推荐等功能更加直观。使用时用户发送待处理图片，返回图片标签内容及相应置信度。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 图像标签
     * @param {ImageTaggingReq} runImageTaggingRequestBody 图像标签接口请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runImageTagging(runImageTaggingRequest?: RunImageTaggingRequest): Promise<RunImageTaggingResponse> {
        const options = ParamCreater().runImageTagging(runImageTaggingRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 分析并识别图片中包含的政治人物、明星及网红人物，返回人物信息及人脸坐标。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        runCelebrityRecognition(runCelebrityRecognitionRequest?: RunCelebrityRecognitionRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/image/celebrity-recognition",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (runCelebrityRecognitionRequest !== null && runCelebrityRecognitionRequest !== undefined) {
                if (runCelebrityRecognitionRequest instanceof RunCelebrityRecognitionRequest) {
                    body = runCelebrityRecognitionRequest.body
                } else {
                    body = runCelebrityRecognitionRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 图像描述
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        runImageDescription(runImageDescriptionRequest?: RunImageDescriptionRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/image/description",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (runImageDescriptionRequest !== null && runImageDescriptionRequest !== undefined) {
                if (runImageDescriptionRequest instanceof RunImageDescriptionRequest) {
                    body = runImageDescriptionRequest.body
                } else {
                    body = runImageDescriptionRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 检测图像中的主要内容，返回主要内容的坐标信息，这里的主要内容包括两方面：bounding_box和main_object_box
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        runImageMainObjectDetection(runImageMainObjectDetectionRequest?: RunImageMainObjectDetectionRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/image/main-object-detection",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (runImageMainObjectDetectionRequest !== null && runImageMainObjectDetectionRequest !== undefined) {
                if (runImageMainObjectDetectionRequest instanceof RunImageMainObjectDetectionRequest) {
                    body = runImageMainObjectDetectionRequest.body
                } else {
                    body = runImageMainObjectDetectionRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 自然图像的语义内容非常丰富，一个图像包含多个标签内容，图像标签服务准确识别自然图片中数百种场景、上千种通用物体及其属性，让智能相册管理、照片检索和分类、基于场景内容或者物体的广告推荐等功能更加直观。使用时用户发送待处理图片，返回图片标签内容及相应置信度。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        runImageMediaTagging(runImageMediaTaggingRequest?: RunImageMediaTaggingRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/image/media-tagging",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (runImageMediaTaggingRequest !== null && runImageMediaTaggingRequest !== undefined) {
                if (runImageMediaTaggingRequest instanceof RunImageMediaTaggingRequest) {
                    body = runImageMediaTaggingRequest.body
                } else {
                    body = runImageMediaTaggingRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 自然图像的语义内容非常丰富，一个图像包含多个标签内容，图像标签服务准确识别自然图片中数百种场景、上千种通用物体及其属性，让智能相册管理、照片检索和分类、基于场景内容或者物体的广告推荐等功能更加直观。使用时用户发送待处理图片，返回图片标签内容及相应置信度。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        runImageTagging(runImageTaggingRequest?: RunImageTaggingRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/image/tagging",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (runImageTaggingRequest !== null && runImageTaggingRequest !== undefined) {
                if (runImageTaggingRequest instanceof RunImageTaggingRequest) {
                    body = runImageTaggingRequest.body
                } else {
                    body = runImageTaggingRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): ImageClient {
    return new ImageClient(client);
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