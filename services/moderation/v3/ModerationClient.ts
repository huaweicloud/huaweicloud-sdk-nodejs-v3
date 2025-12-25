import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AudioCreateRequest } from './model/AudioCreateRequest';
import { AudioInputBody } from './model/AudioInputBody';
import { AudioModerationResultDetail } from './model/AudioModerationResultDetail';
import { AudioModerationResultRequestParams } from './model/AudioModerationResultRequestParams';
import { AudioModerationResultRequestParamsData } from './model/AudioModerationResultRequestParamsData';
import { AudioModerationResultResult } from './model/AudioModerationResultResult';
import { BatchCheckImageSyncRequest } from './model/BatchCheckImageSyncRequest';
import { BatchCheckImageSyncResponse } from './model/BatchCheckImageSyncResponse';
import { CheckImageModerationRequest } from './model/CheckImageModerationRequest';
import { CheckImageModerationResponse } from './model/CheckImageModerationResponse';
import { FaceLocationDetail } from './model/FaceLocationDetail';
import { ImageBatchSyncDetectionResult } from './model/ImageBatchSyncDetectionResult';
import { ImageBatchSyncReq } from './model/ImageBatchSyncReq';
import { ImageBatchSyncReqImageTextConfig } from './model/ImageBatchSyncReqImageTextConfig';
import { ImageBatchSyncReqUrls } from './model/ImageBatchSyncReqUrls';
import { ImageDetectionReq } from './model/ImageDetectionReq';
import { ImageDetectionResult } from './model/ImageDetectionResult';
import { ImageDetectionResultDetail } from './model/ImageDetectionResultDetail';
import { ImgTextConfig } from './model/ImgTextConfig';
import { OCRTextDetail } from './model/OCRTextDetail';
import { QRLocationDetail } from './model/QRLocationDetail';
import { RunCreateAudioModerationJobRequest } from './model/RunCreateAudioModerationJobRequest';
import { RunCreateAudioModerationJobResponse } from './model/RunCreateAudioModerationJobResponse';
import { RunCreateVideoModerationJobRequest } from './model/RunCreateVideoModerationJobRequest';
import { RunCreateVideoModerationJobResponse } from './model/RunCreateVideoModerationJobResponse';
import { RunQueryAudioModerationJobRequest } from './model/RunQueryAudioModerationJobRequest';
import { RunQueryAudioModerationJobResponse } from './model/RunQueryAudioModerationJobResponse';
import { RunQueryVideoModerationJobRequest } from './model/RunQueryVideoModerationJobRequest';
import { RunQueryVideoModerationJobResponse } from './model/RunQueryVideoModerationJobResponse';
import { RunTextModerationRequest } from './model/RunTextModerationRequest';
import { RunTextModerationResponse } from './model/RunTextModerationResponse';
import { SegmentResult } from './model/SegmentResult';
import { TextDetectionDataReq } from './model/TextDetectionDataReq';
import { TextDetectionReq } from './model/TextDetectionReq';
import { TextDetectionResult } from './model/TextDetectionResult';
import { TextDetectionResultDetail } from './model/TextDetectionResultDetail';
import { VideoCreateRequest } from './model/VideoCreateRequest';
import { VideoCreateRequestData } from './model/VideoCreateRequestData';
import { VideoModerationAudioDetailList } from './model/VideoModerationAudioDetailList';
import { VideoModerationDetailSegment } from './model/VideoModerationDetailSegment';
import { VideoModerationImageDetail } from './model/VideoModerationImageDetail';
import { VideoModerationImageDetailList } from './model/VideoModerationImageDetailList';
import { VideoModerationImageDetailListFaceLocation } from './model/VideoModerationImageDetailListFaceLocation';
import { VideoModerationImageDetailListQrLocation } from './model/VideoModerationImageDetailListQrLocation';
import { VideoModerationResultRequestParams } from './model/VideoModerationResultRequestParams';
import { VideoModerationResultRequestParamsData } from './model/VideoModerationResultRequestParamsData';
import { VideoModerationResultResult } from './model/VideoModerationResultResult';
import { VideoModerationVideoDetail } from './model/VideoModerationVideoDetail';

export class ModerationClient {
    public static newBuilder(): ClientBuilder<ModerationClient> {
            let client = new ClientBuilder<ModerationClient>(newClient);
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
     * 图像审核批量同步接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 图像审核批量同步接口
     * @param {ImageBatchSyncReq} batchCheckImageSyncRequestBody 图像审核批量同步接口请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCheckImageSync(batchCheckImageSyncRequest?: BatchCheckImageSyncRequest): Promise<BatchCheckImageSyncResponse> {
        const options = ParamCreater().batchCheckImageSync(batchCheckImageSyncRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 分析并识别用户上传的图像内容是否有敏感内容（如涉及暴恐元素、涉黄内容等），并将识别结果返回给用户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 图像内容审核
     * @param {ImageDetectionReq} runImageModerationRequestBody 图像内容审核请求体
     * @param {string} [enterpriseProjectId] 企业项目ID。Moderation支持通过企业项目管理（EPS）对不同用户组和用户的资源使用，进行分账。 获取方法：[进入“[企业项目管理](https://console.huaweicloud.com/eps/?region&#x3D;cn-north-4#/projects/list)”页面,](tag:hc)[进入“[企业项目管理](https://console-intl.huaweicloud.com/eps/?region&#x3D;ap-southeast-1#/projects/list)”页面,](tag:hk)单击企业项目名称，在企业项目详情页获取Enterprise-Project-Id（企业项目ID）。 企业项目创建步骤请参见用户指南。 &gt; 说明： 创建企业项目后，在传参时，有以下三类场景。 - 携带正确的ID，正常使用Moderation服务，账单的企业项目会被分类到企业ID对应的企业项目中。 - 携带格式正确但不存在的ID，正常使用Moderation服务，账单的企业项目会显示对应不存在的企业项目ID。 - 不携带ID或格式错误ID（包含特殊字符等），正常使用Moderation服务，账单的企业项目会被分类到\&quot;default\&quot;中。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkImageModeration(checkImageModerationRequest?: CheckImageModerationRequest): Promise<CheckImageModerationResponse> {
        const options = ParamCreater().checkImageModeration(checkImageModerationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 分析并识别用户上传的音频内容是否有敏感内容（如色情、政治等），并将识别结果返回给用户
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建音频内容审核作业
     * @param {AudioCreateRequest} runCreateAudioModerationJobRequestBody 音频内容审核请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runCreateAudioModerationJob(runCreateAudioModerationJobRequest?: RunCreateAudioModerationJobRequest): Promise<RunCreateAudioModerationJobResponse> {
        const options = ParamCreater().runCreateAudioModerationJob(runCreateAudioModerationJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建视频内容审核作业，创建成功会将作业ID返回给用户
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建视频内容审核作业
     * @param {VideoCreateRequest} runVideoModerationRequestBody 视频内容审核请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runCreateVideoModerationJob(runCreateVideoModerationJobRequest?: RunCreateVideoModerationJobRequest): Promise<RunCreateVideoModerationJobResponse> {
        const options = ParamCreater().runCreateVideoModerationJob(runCreateVideoModerationJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询音频内容审核作业
     * @param {string} jobId 创建作业成功时，接口返回的job_id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runQueryAudioModerationJob(runQueryAudioModerationJobRequest?: RunQueryAudioModerationJobRequest): Promise<RunQueryAudioModerationJobResponse> {
        const options = ParamCreater().runQueryAudioModerationJob(runQueryAudioModerationJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询视频审核作业处理状态与结果，并将识别结果返回给用户
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询视频内容审核作业
     * @param {string} jobId 创建作业成功时，接口返回的job_id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runQueryVideoModerationJob(runQueryVideoModerationJobRequest?: RunQueryVideoModerationJobRequest): Promise<RunQueryVideoModerationJobResponse> {
        const options = ParamCreater().runQueryVideoModerationJob(runQueryVideoModerationJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 分析并识别用户上传的文本内容是否有敏感内容（如色情、政治等），并将识别结果返回给用户
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 文本内容审核
     * @param {TextDetectionReq} runTextModerationRequestBody 文本内容审核请求体
     * @param {string} [enterpriseProjectId] 企业项目ID。Moderation支持通过企业项目管理（EPS）对不同用户组和用户的资源使用，进行分账。 获取方法：[进入“[企业项目管理](https://console.huaweicloud.com/eps/?region&#x3D;cn-north-4#/projects/list)”页面,](tag:hc)[进入“[企业项目管理](https://console-intl.huaweicloud.com/eps/?region&#x3D;ap-southeast-1#/projects/list)”页面,](tag:hk)单击企业项目名称，在企业项目详情页获取Enterprise-Project-Id（企业项目ID）。 企业项目创建步骤请参见用户指南。 &gt; 说明： 创建企业项目后，在传参时，有以下三类场景。 - 携带正确的ID，正常使用Moderation服务，账单的企业项目会被分类到企业ID对应的企业项目中。 - 携带格式正确但不存在的ID，正常使用Moderation服务，账单的企业项目会显示对应不存在的企业项目ID。 - 不携带ID或格式错误ID（包含特殊字符等），正常使用Moderation服务，账单的企业项目会被分类到\&quot;default\&quot;中。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runTextModeration(runTextModerationRequest?: RunTextModerationRequest): Promise<RunTextModerationResponse> {
        const options = ParamCreater().runTextModeration(runTextModerationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 图像审核批量同步接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCheckImageSync(batchCheckImageSyncRequest?: BatchCheckImageSyncRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/moderation/image/batch",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchCheckImageSyncRequest !== null && batchCheckImageSyncRequest !== undefined) {
                if (batchCheckImageSyncRequest instanceof BatchCheckImageSyncRequest) {
                    body = batchCheckImageSyncRequest.body
                } else {
                    body = batchCheckImageSyncRequest['body'];
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
         * 分析并识别用户上传的图像内容是否有敏感内容（如涉及暴恐元素、涉黄内容等），并将识别结果返回给用户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkImageModeration(checkImageModerationRequest?: CheckImageModerationRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/moderation/image",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let enterpriseProjectId;

            if (checkImageModerationRequest !== null && checkImageModerationRequest !== undefined) {
                if (checkImageModerationRequest instanceof CheckImageModerationRequest) {
                    body = checkImageModerationRequest.body
                    enterpriseProjectId = checkImageModerationRequest.enterpriseProjectId;
                } else {
                    body = checkImageModerationRequest['body'];
                    enterpriseProjectId = checkImageModerationRequest['Enterprise-Project-Id'];
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
         * 分析并识别用户上传的音频内容是否有敏感内容（如色情、政治等），并将识别结果返回给用户
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        runCreateAudioModerationJob(runCreateAudioModerationJobRequest?: RunCreateAudioModerationJobRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/moderation/audio/jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (runCreateAudioModerationJobRequest !== null && runCreateAudioModerationJobRequest !== undefined) {
                if (runCreateAudioModerationJobRequest instanceof RunCreateAudioModerationJobRequest) {
                    body = runCreateAudioModerationJobRequest.body
                } else {
                    body = runCreateAudioModerationJobRequest['body'];
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
         * 创建视频内容审核作业，创建成功会将作业ID返回给用户
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        runCreateVideoModerationJob(runCreateVideoModerationJobRequest?: RunCreateVideoModerationJobRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/moderation/video/jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (runCreateVideoModerationJobRequest !== null && runCreateVideoModerationJobRequest !== undefined) {
                if (runCreateVideoModerationJobRequest instanceof RunCreateVideoModerationJobRequest) {
                    body = runCreateVideoModerationJobRequest.body
                } else {
                    body = runCreateVideoModerationJobRequest['body'];
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
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        runQueryAudioModerationJob(runQueryAudioModerationJobRequest?: RunQueryAudioModerationJobRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/moderation/audio/jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (runQueryAudioModerationJobRequest !== null && runQueryAudioModerationJobRequest !== undefined) {
                if (runQueryAudioModerationJobRequest instanceof RunQueryAudioModerationJobRequest) {
                    jobId = runQueryAudioModerationJobRequest.jobId;
                } else {
                    jobId = runQueryAudioModerationJobRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling runQueryAudioModerationJob.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询视频审核作业处理状态与结果，并将识别结果返回给用户
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        runQueryVideoModerationJob(runQueryVideoModerationJobRequest?: RunQueryVideoModerationJobRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/moderation/video/jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (runQueryVideoModerationJobRequest !== null && runQueryVideoModerationJobRequest !== undefined) {
                if (runQueryVideoModerationJobRequest instanceof RunQueryVideoModerationJobRequest) {
                    jobId = runQueryVideoModerationJobRequest.jobId;
                } else {
                    jobId = runQueryVideoModerationJobRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling runQueryVideoModerationJob.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 分析并识别用户上传的文本内容是否有敏感内容（如色情、政治等），并将识别结果返回给用户
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
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

            let body: any;
            
            let enterpriseProjectId;

            if (runTextModerationRequest !== null && runTextModerationRequest !== undefined) {
                if (runTextModerationRequest instanceof RunTextModerationRequest) {
                    body = runTextModerationRequest.body
                    enterpriseProjectId = runTextModerationRequest.enterpriseProjectId;
                } else {
                    body = runTextModerationRequest['body'];
                    enterpriseProjectId = runTextModerationRequest['Enterprise-Project-Id'];
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