import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AudioCreateRequest } from './model/AudioCreateRequest';
import { AudioCreateResponse } from './model/AudioCreateResponse';
import { AudioInputBody } from './model/AudioInputBody';
import { AudioModerationResultDetail } from './model/AudioModerationResultDetail';
import { AudioModerationResultRequestParams } from './model/AudioModerationResultRequestParams';
import { AudioModerationResultRequestParamsData } from './model/AudioModerationResultRequestParamsData';
import { AudioModerationResultResult } from './model/AudioModerationResultResult';
import { AudioStreamCreateRequest } from './model/AudioStreamCreateRequest';
import { AudioStreamCreateRequestData } from './model/AudioStreamCreateRequestData';
import { CheckImageModerationRequest } from './model/CheckImageModerationRequest';
import { CheckImageModerationResponse } from './model/CheckImageModerationResponse';
import { DocumentAudioDetail } from './model/DocumentAudioDetail';
import { DocumentCreateRequest } from './model/DocumentCreateRequest';
import { DocumentCreateRequestData } from './model/DocumentCreateRequestData';
import { DocumentQueryResponseRequestParams } from './model/DocumentQueryResponseRequestParams';
import { DocumentQueryResponseRequestParamsData } from './model/DocumentQueryResponseRequestParamsData';
import { DocumentQueryResponseResult } from './model/DocumentQueryResponseResult';
import { DocumentQueryResponseResultDetails } from './model/DocumentQueryResponseResultDetails';
import { DocumentQueryResponseResultSegments } from './model/DocumentQueryResponseResultSegments';
import { DocumentVideoImageDetail } from './model/DocumentVideoImageDetail';
import { DocumentVideoImageDetailSegments } from './model/DocumentVideoImageDetailSegments';
import { FaceLocationDetail } from './model/FaceLocationDetail';
import { ImageDetectionReq } from './model/ImageDetectionReq';
import { ImageDetectionResult } from './model/ImageDetectionResult';
import { ImageDetectionResultDetail } from './model/ImageDetectionResultDetail';
import { ImgTextConfig } from './model/ImgTextConfig';
import { OCRTextDetail } from './model/OCRTextDetail';
import { QRLocationDetail } from './model/QRLocationDetail';
import { RunCloseAudioStreamModerationJobRequest } from './model/RunCloseAudioStreamModerationJobRequest';
import { RunCloseAudioStreamModerationJobResponse } from './model/RunCloseAudioStreamModerationJobResponse';
import { RunCloseVideoStreamModerationJobRequest } from './model/RunCloseVideoStreamModerationJobRequest';
import { RunCloseVideoStreamModerationJobResponse } from './model/RunCloseVideoStreamModerationJobResponse';
import { RunCreateAudioModerationJobRequest } from './model/RunCreateAudioModerationJobRequest';
import { RunCreateAudioModerationJobResponse } from './model/RunCreateAudioModerationJobResponse';
import { RunCreateAudioStreamModerationJobRequest } from './model/RunCreateAudioStreamModerationJobRequest';
import { RunCreateAudioStreamModerationJobResponse } from './model/RunCreateAudioStreamModerationJobResponse';
import { RunCreateDocumentModerationJobRequest } from './model/RunCreateDocumentModerationJobRequest';
import { RunCreateDocumentModerationJobResponse } from './model/RunCreateDocumentModerationJobResponse';
import { RunCreateVideoModerationJobRequest } from './model/RunCreateVideoModerationJobRequest';
import { RunCreateVideoModerationJobResponse } from './model/RunCreateVideoModerationJobResponse';
import { RunCreateVideoStreamModerationJobRequest } from './model/RunCreateVideoStreamModerationJobRequest';
import { RunCreateVideoStreamModerationJobResponse } from './model/RunCreateVideoStreamModerationJobResponse';
import { RunQueryAudioModerationJobRequest } from './model/RunQueryAudioModerationJobRequest';
import { RunQueryAudioModerationJobResponse } from './model/RunQueryAudioModerationJobResponse';
import { RunQueryDocumentModerationJobRequest } from './model/RunQueryDocumentModerationJobRequest';
import { RunQueryDocumentModerationJobResponse } from './model/RunQueryDocumentModerationJobResponse';
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
import { VideoStreamCreateRequest } from './model/VideoStreamCreateRequest';
import { VideoStreamCreateRequestData } from './model/VideoStreamCreateRequestData';

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
     * 分析并识别用户上传的图像内容是否有敏感内容（如涉及暴恐元素、涉黄内容等），并将识别结果返回给用户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 图像内容审核
     * @param {ImageDetectionReq} runImageModerationRequestBody 图像内容审核请求体
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
     * 关闭音频流内容审核作业
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭音频流内容审核作业
     * @param {string} jobId 创建作业成功时，接口返回的job_id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runCloseAudioStreamModerationJob(runCloseAudioStreamModerationJobRequest?: RunCloseAudioStreamModerationJobRequest): Promise<RunCloseAudioStreamModerationJobResponse> {
        const options = ParamCreater().runCloseAudioStreamModerationJob(runCloseAudioStreamModerationJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 关闭视频流审核接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭视频流内容审核作业
     * @param {string} jobId 创建作业成功时，接口返回的job_id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runCloseVideoStreamModerationJob(runCloseVideoStreamModerationJobRequest?: RunCloseVideoStreamModerationJobRequest): Promise<RunCloseVideoStreamModerationJobResponse> {
        const options = ParamCreater().runCloseVideoStreamModerationJob(runCloseVideoStreamModerationJobRequest);

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
     * 创建音频流内容审核作业，创建成功会将作业ID返回给用户
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建音频流内容审核作业
     * @param {AudioStreamCreateRequest} runCreateAudioStreamModerationJobRequestBody 创建音频流内容审核作业请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runCreateAudioStreamModerationJob(runCreateAudioStreamModerationJobRequest?: RunCreateAudioStreamModerationJobRequest): Promise<RunCreateAudioStreamModerationJobResponse> {
        const options = ParamCreater().runCreateAudioStreamModerationJob(runCreateAudioStreamModerationJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建文档内容审核作业，创建成功会将作业ID返回给用户
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建文档内容审核作业
     * @param {DocumentCreateRequest} runDocumentModerationRequestBody 文档内容审核请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runCreateDocumentModerationJob(runCreateDocumentModerationJobRequest?: RunCreateDocumentModerationJobRequest): Promise<RunCreateDocumentModerationJobResponse> {
        const options = ParamCreater().runCreateDocumentModerationJob(runCreateDocumentModerationJobRequest);

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
     * 创建视频流内容审核作业，创建成功会将作业ID返回给用户
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建视频流内容审核作业
     * @param {VideoStreamCreateRequest} runCreateVideoStreamModerationJobRequestBody 创建视频流内容审核作业请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runCreateVideoStreamModerationJob(runCreateVideoStreamModerationJobRequest?: RunCreateVideoStreamModerationJobRequest): Promise<RunCreateVideoStreamModerationJobResponse> {
        const options = ParamCreater().runCreateVideoStreamModerationJob(runCreateVideoStreamModerationJobRequest);

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
     * 查询文档审核结果接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询文档审核作业结果
     * @param {string} jobId 创建作业成功时，接口返回的job_id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runQueryDocumentModerationJob(runQueryDocumentModerationJobRequest?: RunQueryDocumentModerationJobRequest): Promise<RunQueryDocumentModerationJobResponse> {
        const options = ParamCreater().runQueryDocumentModerationJob(runQueryDocumentModerationJobRequest);

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

            if (checkImageModerationRequest !== null && checkImageModerationRequest !== undefined) {
                if (checkImageModerationRequest instanceof CheckImageModerationRequest) {
                    body = checkImageModerationRequest.body
                } else {
                    body = checkImageModerationRequest['body'];
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
         * 关闭音频流内容审核作业
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        runCloseAudioStreamModerationJob(runCloseAudioStreamModerationJobRequest?: RunCloseAudioStreamModerationJobRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/moderation/audio-stream/jobs/stop/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (runCloseAudioStreamModerationJobRequest !== null && runCloseAudioStreamModerationJobRequest !== undefined) {
                if (runCloseAudioStreamModerationJobRequest instanceof RunCloseAudioStreamModerationJobRequest) {
                    jobId = runCloseAudioStreamModerationJobRequest.jobId;
                } else {
                    jobId = runCloseAudioStreamModerationJobRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling runCloseAudioStreamModerationJob.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 关闭视频流审核接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        runCloseVideoStreamModerationJob(runCloseVideoStreamModerationJobRequest?: RunCloseVideoStreamModerationJobRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/moderation/video-stream/jobs/stop/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (runCloseVideoStreamModerationJobRequest !== null && runCloseVideoStreamModerationJobRequest !== undefined) {
                if (runCloseVideoStreamModerationJobRequest instanceof RunCloseVideoStreamModerationJobRequest) {
                    jobId = runCloseVideoStreamModerationJobRequest.jobId;
                } else {
                    jobId = runCloseVideoStreamModerationJobRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling runCloseVideoStreamModerationJob.');
            }

            options.pathParams = { 'job_id': jobId, };
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
         * 创建音频流内容审核作业，创建成功会将作业ID返回给用户
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        runCreateAudioStreamModerationJob(runCreateAudioStreamModerationJobRequest?: RunCreateAudioStreamModerationJobRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/moderation/audio-stream/jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (runCreateAudioStreamModerationJobRequest !== null && runCreateAudioStreamModerationJobRequest !== undefined) {
                if (runCreateAudioStreamModerationJobRequest instanceof RunCreateAudioStreamModerationJobRequest) {
                    body = runCreateAudioStreamModerationJobRequest.body
                } else {
                    body = runCreateAudioStreamModerationJobRequest['body'];
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
         * 创建文档内容审核作业，创建成功会将作业ID返回给用户
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        runCreateDocumentModerationJob(runCreateDocumentModerationJobRequest?: RunCreateDocumentModerationJobRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/moderation/document/jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (runCreateDocumentModerationJobRequest !== null && runCreateDocumentModerationJobRequest !== undefined) {
                if (runCreateDocumentModerationJobRequest instanceof RunCreateDocumentModerationJobRequest) {
                    body = runCreateDocumentModerationJobRequest.body
                } else {
                    body = runCreateDocumentModerationJobRequest['body'];
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
         * 创建视频流内容审核作业，创建成功会将作业ID返回给用户
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        runCreateVideoStreamModerationJob(runCreateVideoStreamModerationJobRequest?: RunCreateVideoStreamModerationJobRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/moderation/video-stream/jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (runCreateVideoStreamModerationJobRequest !== null && runCreateVideoStreamModerationJobRequest !== undefined) {
                if (runCreateVideoStreamModerationJobRequest instanceof RunCreateVideoStreamModerationJobRequest) {
                    body = runCreateVideoStreamModerationJobRequest.body
                } else {
                    body = runCreateVideoStreamModerationJobRequest['body'];
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
         * 查询文档审核结果接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        runQueryDocumentModerationJob(runQueryDocumentModerationJobRequest?: RunQueryDocumentModerationJobRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/moderation/document/jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (runQueryDocumentModerationJobRequest !== null && runQueryDocumentModerationJobRequest !== undefined) {
                if (runQueryDocumentModerationJobRequest instanceof RunQueryDocumentModerationJobRequest) {
                    jobId = runQueryDocumentModerationJobRequest.jobId;
                } else {
                    jobId = runQueryDocumentModerationJobRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling runQueryDocumentModerationJob.');
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