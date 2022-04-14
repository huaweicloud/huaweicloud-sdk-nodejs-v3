import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { CheckResultItemsBody } from './model/CheckResultItemsBody';
import { CheckResultResultBody } from './model/CheckResultResultBody';
import { CheckTaskJobsItemsBody } from './model/CheckTaskJobsItemsBody';
import { ImageBatchModerationReq } from './model/ImageBatchModerationReq';
import { ImageBatchModerationResultBody } from './model/ImageBatchModerationResultBody';
import { ImageDetectionReq } from './model/ImageDetectionReq';
import { ImageDetectionResultAdDetail } from './model/ImageDetectionResultAdDetail';
import { ImageDetectionResultBody } from './model/ImageDetectionResultBody';
import { ImageDetectionResultDetail } from './model/ImageDetectionResultDetail';
import { ImageDetectionResultDetailFaceDetail } from './model/ImageDetectionResultDetailFaceDetail';
import { ImageDetectionResultDetailPolitics } from './model/ImageDetectionResultDetailPolitics';
import { ImageDetectionResultSimpleDetail } from './model/ImageDetectionResultSimpleDetail';
import { PornModerationResultDetail } from './model/PornModerationResultDetail';
import { RunCheckResultRequest } from './model/RunCheckResultRequest';
import { RunCheckResultResponse } from './model/RunCheckResultResponse';
import { RunCheckTaskJobsRequest } from './model/RunCheckTaskJobsRequest';
import { RunCheckTaskJobsResponse } from './model/RunCheckTaskJobsResponse';
import { RunImageBatchModerationRequest } from './model/RunImageBatchModerationRequest';
import { RunImageBatchModerationResponse } from './model/RunImageBatchModerationResponse';
import { RunImageModerationRequest } from './model/RunImageModerationRequest';
import { RunImageModerationResponse } from './model/RunImageModerationResponse';
import { RunModerationAudioRequest } from './model/RunModerationAudioRequest';
import { RunModerationAudioRequestBody } from './model/RunModerationAudioRequestBody';
import { RunModerationAudioRequestBodyConfig } from './model/RunModerationAudioRequestBodyConfig';
import { RunModerationAudioResponse } from './model/RunModerationAudioResponse';
import { RunModerationAudioResponseBodyResult } from './model/RunModerationAudioResponseBodyResult';
import { RunModerationAudioResponseBodyResultDetail } from './model/RunModerationAudioResponseBodyResultDetail';
import { RunModerationAudioResponseBodyResultDetailAudio } from './model/RunModerationAudioResponseBodyResultDetailAudio';
import { RunTaskSumbitRequest } from './model/RunTaskSumbitRequest';
import { RunTaskSumbitResponse } from './model/RunTaskSumbitResponse';
import { RunTextModerationRequest } from './model/RunTextModerationRequest';
import { RunTextModerationResponse } from './model/RunTextModerationResponse';
import { TaskSumbitReq } from './model/TaskSumbitReq';
import { TaskSumbitResponseResult } from './model/TaskSumbitResponseResult';
import { TextDetectionItemsReq } from './model/TextDetectionItemsReq';
import { TextDetectionReq } from './model/TextDetectionReq';
import { TextDetectionResponseResult } from './model/TextDetectionResponseResult';

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
     * 分析并识别用户上传的图像内容是否有敏感内容（如涉及政治人物、暴恐元素、涉黄内容等），并将识别结果返回给用户。 > 任务最长保留时间为30分钟，过期后会被清理掉。建议在任务提交后，每30s进行一次周期查询。 
     * @summary 处理结果查询
     * @param {string} jobId 任务标识。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runCheckResult(runCheckResultRequest?: RunCheckResultRequest): Promise<RunCheckResultResponse> {
        const options = ParamCreater().runCheckResult(runCheckResultRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 查询批量图像内容审核任务列表，可通过指定任务状态查询来对任务列表进行过滤。
     * @summary 任务列表查询
     * @param {'created' | 'running' | 'finish' | 'failed'} [status] 图像内容审核任务处理状态如下：  - created 已创建  - running 正在处理  - finish 已完成  - failed 处理失败 
     * @param {number} [offset] 偏移量， 默认为0。
     * @param {number} [limit] 指定每一页返回的最大条目数，默认为符合查询条件的总任务数量。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runCheckTaskJobs(runCheckTaskJobsRequest?: RunCheckTaskJobsRequest): Promise<RunCheckTaskJobsResponse> {
        const options = ParamCreater().runCheckTaskJobs(runCheckTaskJobsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 分析并识别用户上传的图像内容是否有敏感内容（如涉及政治人物、暴恐元素、涉黄内容等），并将识别结果返回给用户。
     * @summary 图像内容审核（批量）
     * @param {ImageBatchModerationReq} runImageBatchModerationRequestBody 图像内容审核（批量）请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runImageBatchModeration(runImageBatchModerationRequest?: RunImageBatchModerationRequest): Promise<RunImageBatchModerationResponse> {
        const options = ParamCreater().runImageBatchModeration(runImageBatchModerationRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 分析并识别用户上传的图像内容是否有敏感内容（如涉及政治人物、暴恐元素、涉黄内容等），并将识别结果返回给用户。
     * @summary 图像内容审核
     * @param {ImageDetectionReq} runImageModerationRequestBody 图像内容审核请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runImageModeration(runImageModerationRequest?: RunImageModerationRequest): Promise<RunImageModerationResponse> {
        const options = ParamCreater().runImageModeration(runImageModerationRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 分析并识别用户上传的语音内容是否有敏感内容（如色情、政治等），并将识别结果 返回给用户。
     * @summary 语音内容审核
     * @param {RunModerationAudioRequestBody} runModerationAudioRequestBody 请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runModerationAudio(runModerationAudioRequest?: RunModerationAudioRequest): Promise<RunModerationAudioResponse> {
        const options = ParamCreater().runModerationAudio(runModerationAudioRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 提交批量图像内容审核任务，返回任务标识，任务标识可用于查询任务结果。此接口为异步接口，相对于批量接口，支持更大图片列表批次。
     * @summary 任务提交
     * @param {TaskSumbitReq} runTaskSumbitRequestBody 图像内容审核（批量）- 任务提交请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runTaskSumbit(runTaskSumbitRequest?: RunTaskSumbitRequest): Promise<RunTaskSumbitResponse> {
        const options = ParamCreater().runTaskSumbit(runTaskSumbitRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 分析并识别用户上传的文本内容是否有敏感内容（如色情、政治等），并将识别结果返回给用户。
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
         * 分析并识别用户上传的图像内容是否有敏感内容（如涉及政治人物、暴恐元素、涉黄内容等），并将识别结果返回给用户。 &gt; 任务最长保留时间为30分钟，过期后会被清理掉。建议在任务提交后，每30s进行一次周期查询。 
         */
        runCheckResult(runCheckResultRequest?: RunCheckResultRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/moderation/image/batch",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let jobId;

            if (runCheckResultRequest !== null && runCheckResultRequest !== undefined) {
                if (runCheckResultRequest instanceof RunCheckResultRequest) {
                    jobId = runCheckResultRequest.jobId;
                } else {
                    jobId = runCheckResultRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
                throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling runCheckResult.');
            }
            if (jobId !== null && jobId !== undefined) {
                localVarQueryParameter['job_id'] = jobId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询批量图像内容审核任务列表，可通过指定任务状态查询来对任务列表进行过滤。
         */
        runCheckTaskJobs(runCheckTaskJobsRequest?: RunCheckTaskJobsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/moderation/image/batch/jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let status;
            let offset;
            let limit;

            if (runCheckTaskJobsRequest !== null && runCheckTaskJobsRequest !== undefined) {
                if (runCheckTaskJobsRequest instanceof RunCheckTaskJobsRequest) {
                    status = runCheckTaskJobsRequest.status;
                    offset = runCheckTaskJobsRequest.offset;
                    limit = runCheckTaskJobsRequest.limit;
                } else {
                    status = runCheckTaskJobsRequest['status'];
                    offset = runCheckTaskJobsRequest['offset'];
                    limit = runCheckTaskJobsRequest['limit'];
                }
            }

        
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 分析并识别用户上传的图像内容是否有敏感内容（如涉及政治人物、暴恐元素、涉黄内容等），并将识别结果返回给用户。
         */
        runImageBatchModeration(runImageBatchModerationRequest?: RunImageBatchModerationRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/moderation/image/batch",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (runImageBatchModerationRequest !== null && runImageBatchModerationRequest !== undefined) {
                if (runImageBatchModerationRequest instanceof RunImageBatchModerationRequest) {
                    body = runImageBatchModerationRequest.body
                } else {
                    body = runImageBatchModerationRequest['body'];
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
         * 分析并识别用户上传的图像内容是否有敏感内容（如涉及政治人物、暴恐元素、涉黄内容等），并将识别结果返回给用户。
         */
        runImageModeration(runImageModerationRequest?: RunImageModerationRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/moderation/image",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (runImageModerationRequest !== null && runImageModerationRequest !== undefined) {
                if (runImageModerationRequest instanceof RunImageModerationRequest) {
                    body = runImageModerationRequest.body
                } else {
                    body = runImageModerationRequest['body'];
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
         * 分析并识别用户上传的语音内容是否有敏感内容（如色情、政治等），并将识别结果 返回给用户。
         */
        runModerationAudio(runModerationAudioRequest?: RunModerationAudioRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/moderation/voice",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (runModerationAudioRequest !== null && runModerationAudioRequest !== undefined) {
                if (runModerationAudioRequest instanceof RunModerationAudioRequest) {
                    body = runModerationAudioRequest.body
                } else {
                    body = runModerationAudioRequest['body'];
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
         * 提交批量图像内容审核任务，返回任务标识，任务标识可用于查询任务结果。此接口为异步接口，相对于批量接口，支持更大图片列表批次。
         */
        runTaskSumbit(runTaskSumbitRequest?: RunTaskSumbitRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/moderation/image/batch/jobs",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (runTaskSumbitRequest !== null && runTaskSumbitRequest !== undefined) {
                if (runTaskSumbitRequest instanceof RunTaskSumbitRequest) {
                    body = runTaskSumbitRequest.body
                } else {
                    body = runTaskSumbitRequest['body'];
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
         * 分析并识别用户上传的文本内容是否有敏感内容（如色情、政治等），并将识别结果返回给用户。
         */
        runTextModeration(runTextModerationRequest?: RunTextModerationRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/moderation/text",
                contentType: "application/json;charset=UTF-8",
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
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

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