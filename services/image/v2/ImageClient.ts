import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { BoundingBox } from './model/BoundingBox';
import { CelebrityRecognitionReq } from './model/CelebrityRecognitionReq';
import { CelebrityRecognitionResultBody } from './model/CelebrityRecognitionResultBody';
import { ImageMainObjectDetectionInstance } from './model/ImageMainObjectDetectionInstance';
import { ImageMainObjectDetectionReq } from './model/ImageMainObjectDetectionReq';
import { ImageMediaTaggingDetInstance } from './model/ImageMediaTaggingDetInstance';
import { ImageMediaTaggingDetItemBody } from './model/ImageMediaTaggingDetItemBody';
import { ImageMediaTaggingDetItemBodyI18nTag } from './model/ImageMediaTaggingDetItemBodyI18nTag';
import { ImageMediaTaggingDetReq } from './model/ImageMediaTaggingDetReq';
import { ImageMediaTaggingDetResponseResult } from './model/ImageMediaTaggingDetResponseResult';
import { ImageMediaTaggingInstance } from './model/ImageMediaTaggingInstance';
import { ImageMediaTaggingItemBody } from './model/ImageMediaTaggingItemBody';
import { ImageMediaTaggingItemBodyI18nTag } from './model/ImageMediaTaggingItemBodyI18nTag';
import { ImageMediaTaggingItemBodyI18nType } from './model/ImageMediaTaggingItemBodyI18nType';
import { ImageMediaTaggingReq } from './model/ImageMediaTaggingReq';
import { ImageMediaTaggingResponseResult } from './model/ImageMediaTaggingResponseResult';
import { ImageTaggingBoundingBox } from './model/ImageTaggingBoundingBox';
import { ImageTaggingInstance } from './model/ImageTaggingInstance';
import { ImageTaggingItemBody } from './model/ImageTaggingItemBody';
import { ImageTaggingItemBodyI18nTag } from './model/ImageTaggingItemBodyI18nTag';
import { ImageTaggingItemBodyI18nType } from './model/ImageTaggingItemBodyI18nType';
import { ImageTaggingReq } from './model/ImageTaggingReq';
import { ImageTaggingResponseResult } from './model/ImageTaggingResponseResult';
import { RecaptureDetectReq } from './model/RecaptureDetectReq';
import { RecaptureDetectResponseResult } from './model/RecaptureDetectResponseResult';
import { RecaptureDetectResponseResultDetail } from './model/RecaptureDetectResponseResultDetail';
import { RunCelebrityRecognitionRequest } from './model/RunCelebrityRecognitionRequest';
import { RunCelebrityRecognitionResponse } from './model/RunCelebrityRecognitionResponse';
import { RunImageMainObjectDetectionRequest } from './model/RunImageMainObjectDetectionRequest';
import { RunImageMainObjectDetectionResponse } from './model/RunImageMainObjectDetectionResponse';
import { RunImageMediaTaggingDetRequest } from './model/RunImageMediaTaggingDetRequest';
import { RunImageMediaTaggingDetResponse } from './model/RunImageMediaTaggingDetResponse';
import { RunImageMediaTaggingRequest } from './model/RunImageMediaTaggingRequest';
import { RunImageMediaTaggingResponse } from './model/RunImageMediaTaggingResponse';
import { RunImageTaggingRequest } from './model/RunImageTaggingRequest';
import { RunImageTaggingResponse } from './model/RunImageTaggingResponse';
import { RunRecaptureDetectRequest } from './model/RunRecaptureDetectRequest';
import { RunRecaptureDetectResponse } from './model/RunRecaptureDetectResponse';

export class ImageClient {
    public static newBuilder(): ClientBuilder<ImageClient> {
            let client = new ClientBuilder<ImageClient>(newClient);
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
     * 分析并识别图片中包含的政治人物、明星及网红人物，返回人物信息及人脸坐标。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 名人识别
     * @param {CelebrityRecognitionReq} runCelebrityRecognitionRequestBody 名人识别接口请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runCelebrityRecognition(runCelebrityRecognitionRequest?: RunCelebrityRecognitionRequest): Promise<RunCelebrityRecognitionResponse> {
        const options = ParamCreater().runCelebrityRecognition(runCelebrityRecognitionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 检测图像中的主要内容，返回主要内容的坐标信息，这里的主要内容包括两方面：bounding_box和main_object_box
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 主体识别
     * @param {ImageMainObjectDetectionReq} runImageMainObjectDetectionRequestBody 图像主体识别接口请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runImageMainObjectDetection(runImageMainObjectDetectionRequest?: RunImageMainObjectDetectionRequest): Promise<RunImageMainObjectDetectionResponse> {
        const options = ParamCreater().runImageMainObjectDetection(runImageMainObjectDetectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 自然图像的语义内容非常丰富，一个图像包含多个标签内容，图像标签服务准确识别自然图片中数百种场景、上千种通用物体及其属性，让智能相册管理、照片检索和分类、基于场景内容或者物体的广告推荐等功能更加直观。使用时用户发送待处理图片，返回图片标签内容及相应置信度。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 标签识别
     * @param {ImageMediaTaggingReq} runImageMediaTaggingRequestBody 媒资图像标签（分类）接口请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runImageMediaTagging(runImageMediaTaggingRequest?: RunImageMediaTaggingRequest): Promise<RunImageMediaTaggingResponse> {
        const options = ParamCreater().runImageMediaTagging(runImageMediaTaggingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 自然图像的语义内容非常丰富，一个图像包含多个标签内容，图像标签服务准确识别自然图片中数百种场景、上千种通用物体及其属性，让智能相册管理、照片检索和分类、基于场景内容或者物体的广告推荐等功能更加直观。使用时用户发送待处理图片，返回图片标签内容及相应的位置坐标。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 媒资图像标签检测
     * @param {ImageMediaTaggingDetReq} runImageMediaTaggingDetRequestBody 媒资图像标签检测版接口请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runImageMediaTaggingDet(runImageMediaTaggingDetRequest?: RunImageMediaTaggingDetRequest): Promise<RunImageMediaTaggingDetResponse> {
        const options = ParamCreater().runImageMediaTaggingDet(runImageMediaTaggingDetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 自然图像的语义内容非常丰富，一个图像包含多个标签内容，图像标签服务准确识别自然图片中数百种场景、上千种通用物体及其属性，让智能相册管理、照片检索和分类、基于场景内容或者物体的广告推荐等功能更加直观。使用时用户发送待处理图片，返回图片标签内容及相应置信度。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 图像标签
     * @param {ImageTaggingReq} runImageTaggingRequestBody 图像标签接口请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runImageTagging(runImageTaggingRequest?: RunImageTaggingRequest): Promise<RunImageTaggingResponse> {
        const options = ParamCreater().runImageTagging(runImageTaggingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 零售行业通常根据零售店的销售量进行销售奖励，拍摄售出商品的条形码上传后台是常用的统计方式。翻拍识别利用深度神经网络算法判断条形码图片为原始拍摄，还是经过二次翻拍、打印翻拍等手法二次处理的图片。利用翻拍识别，可以检测出经过二次处理的不合规范图片，使得统计数据更准确、有效。。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 翻拍识别
     * @param {RecaptureDetectReq} runRecaptureDetectRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runRecaptureDetect(runRecaptureDetectRequest?: RunRecaptureDetectRequest): Promise<RunRecaptureDetectResponse> {
        const options = ParamCreater().runRecaptureDetect(runRecaptureDetectRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 分析并识别图片中包含的政治人物、明星及网红人物，返回人物信息及人脸坐标。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
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

            let body: any;

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
         * 检测图像中的主要内容，返回主要内容的坐标信息，这里的主要内容包括两方面：bounding_box和main_object_box
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
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

            let body: any;

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
         * Please refer to HUAWEI cloud API Explorer for details.
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

            let body: any;

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
         * 自然图像的语义内容非常丰富，一个图像包含多个标签内容，图像标签服务准确识别自然图片中数百种场景、上千种通用物体及其属性，让智能相册管理、照片检索和分类、基于场景内容或者物体的广告推荐等功能更加直观。使用时用户发送待处理图片，返回图片标签内容及相应的位置坐标。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        runImageMediaTaggingDet(runImageMediaTaggingDetRequest?: RunImageMediaTaggingDetRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/image/media-tagging-det",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (runImageMediaTaggingDetRequest !== null && runImageMediaTaggingDetRequest !== undefined) {
                if (runImageMediaTaggingDetRequest instanceof RunImageMediaTaggingDetRequest) {
                    body = runImageMediaTaggingDetRequest.body
                } else {
                    body = runImageMediaTaggingDetRequest['body'];
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
         * Please refer to HUAWEI cloud API Explorer for details.
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

            let body: any;

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
    
        /**
         * 零售行业通常根据零售店的销售量进行销售奖励，拍摄售出商品的条形码上传后台是常用的统计方式。翻拍识别利用深度神经网络算法判断条形码图片为原始拍摄，还是经过二次翻拍、打印翻拍等手法二次处理的图片。利用翻拍识别，可以检测出经过二次处理的不合规范图片，使得统计数据更准确、有效。。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        runRecaptureDetect(runRecaptureDetectRequest?: RunRecaptureDetectRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/image/recapture-detect",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (runRecaptureDetectRequest !== null && runRecaptureDetectRequest !== undefined) {
                if (runRecaptureDetectRequest instanceof RunRecaptureDetectRequest) {
                    body = runRecaptureDetectRequest.body
                } else {
                    body = runRecaptureDetectRequest['body'];
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