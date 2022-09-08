import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AudioCreateRequest } from './model/AudioCreateRequest';
import { AudioInputBody } from './model/AudioInputBody';
import { AudioModerationResultDetail } from './model/AudioModerationResultDetail';
import { AudioModerationResultRequestParams } from './model/AudioModerationResultRequestParams';
import { AudioModerationResultRequestParamsData } from './model/AudioModerationResultRequestParamsData';
import { AudioModerationResultResult } from './model/AudioModerationResultResult';
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
     * 分析并识别用户上传的音频内容是否有敏感内容（如色情、政治等），并将识别结果返回给用户
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 创建音频内容审核作业
     * @param {AudioCreateRequest} runTextModerationRequestBody 音频内容审核请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runCreateAudioModerationJob(runCreateAudioModerationJobRequest?: RunCreateAudioModerationJobRequest): Promise<RunCreateAudioModerationJobResponse> {
        const options = ParamCreater().runCreateAudioModerationJob(runCreateAudioModerationJobRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建视频内容审核作业，创建成功会将作业ID返回给用户
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 创建视频内容审核作业
     * @param {VideoCreateRequest} runVideoModerationRequestBody 视频内容审核请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runCreateVideoModerationJob(runCreateVideoModerationJobRequest?: RunCreateVideoModerationJobRequest): Promise<RunCreateVideoModerationJobResponse> {
        const options = ParamCreater().runCreateVideoModerationJob(runCreateVideoModerationJobRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 查询音频内容审核作业
     * @param {string} jobId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runQueryAudioModerationJob(runQueryAudioModerationJobRequest?: RunQueryAudioModerationJobRequest): Promise<RunQueryAudioModerationJobResponse> {
        const options = ParamCreater().runQueryAudioModerationJob(runQueryAudioModerationJobRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询视频审核作业处理状态与结果，并将识别结果返回给用户
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 查询视频内容审核作业
     * @param {string} jobId 创建作业成功时，接口返回的job_id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runQueryVideoModerationJob(runQueryVideoModerationJobRequest?: RunQueryVideoModerationJobRequest): Promise<RunQueryVideoModerationJobResponse> {
        const options = ParamCreater().runQueryVideoModerationJob(runQueryVideoModerationJobRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
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
         * 分析并识别用户上传的音频内容是否有敏感内容（如色情、政治等），并将识别结果返回给用户
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
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

            var body: any;

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
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
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

            var body: any;

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
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        runQueryAudioModerationJob(runQueryAudioModerationJobRequest?: RunQueryAudioModerationJobRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/moderation/audio/jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
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
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        runQueryVideoModerationJob(runQueryVideoModerationJobRequest?: RunQueryVideoModerationJobRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/moderation/video/jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
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