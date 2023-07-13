import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AnalysisInfo } from './model/AnalysisInfo';
import { AnalysisInfoResult } from './model/AnalysisInfoResult';
import { AudioConfig } from './model/AudioConfig';
import { CollectTranscriberJobRequest } from './model/CollectTranscriberJobRequest';
import { CollectTranscriberJobResponse } from './model/CollectTranscriberJobResponse';
import { Config } from './model/Config';
import { CreateVocabularyRequest } from './model/CreateVocabularyRequest';
import { CreateVocabularyResponse } from './model/CreateVocabularyResponse';
import { CustomResult } from './model/CustomResult';
import { DeleteVocabularyRequest } from './model/DeleteVocabularyRequest';
import { DeleteVocabularyResponse } from './model/DeleteVocabularyResponse';
import { FlashResult } from './model/FlashResult';
import { FlashScoreResult } from './model/FlashScoreResult';
import { Fluency } from './model/Fluency';
import { MultiModalConfig } from './model/MultiModalConfig';
import { Phoneme } from './model/Phoneme';
import { PhonemeFluency } from './model/PhonemeFluency';
import { PhonemePronunciation } from './model/PhonemePronunciation';
import { PostCreateVocabReq } from './model/PostCreateVocabReq';
import { PostCustomTTSReq } from './model/PostCustomTTSReq';
import { PostMultiModalAssessmentReq } from './model/PostMultiModalAssessmentReq';
import { PostShortAudioAssessmentReq } from './model/PostShortAudioAssessmentReq';
import { PostShortAudioReq } from './model/PostShortAudioReq';
import { PostTranscriberJobs } from './model/PostTranscriberJobs';
import { Pronunciation } from './model/Pronunciation';
import { PushTranscriberJobsRequest } from './model/PushTranscriberJobsRequest';
import { PushTranscriberJobsResponse } from './model/PushTranscriberJobsResponse';
import { PutUpdateVocabReq } from './model/PutUpdateVocabReq';
import { RecognizeFlashAsrRequest } from './model/RecognizeFlashAsrRequest';
import { RecognizeFlashAsrResponse } from './model/RecognizeFlashAsrResponse';
import { RecognizeShortAudioRequest } from './model/RecognizeShortAudioRequest';
import { RecognizeShortAudioResponse } from './model/RecognizeShortAudioResponse';
import { Result } from './model/Result';
import { RunAudioAssessmentRequest } from './model/RunAudioAssessmentRequest';
import { RunAudioAssessmentResponse } from './model/RunAudioAssessmentResponse';
import { RunMultiModalAssessmentRequest } from './model/RunMultiModalAssessmentRequest';
import { RunMultiModalAssessmentResponse } from './model/RunMultiModalAssessmentResponse';
import { RunTtsRequest } from './model/RunTtsRequest';
import { RunTtsResponse } from './model/RunTtsResponse';
import { Segment } from './model/Segment';
import { Sentences } from './model/Sentences';
import { ShowVocabulariesParams } from './model/ShowVocabulariesParams';
import { ShowVocabulariesRequest } from './model/ShowVocabulariesRequest';
import { ShowVocabulariesResponse } from './model/ShowVocabulariesResponse';
import { ShowVocabularyRequest } from './model/ShowVocabularyRequest';
import { ShowVocabularyResponse } from './model/ShowVocabularyResponse';
import { TranscriberConfig } from './model/TranscriberConfig';
import { TranscriberResult } from './model/TranscriberResult';
import { TtsConfig } from './model/TtsConfig';
import { UpdateVocabularyRequest } from './model/UpdateVocabularyRequest';
import { UpdateVocabularyResponse } from './model/UpdateVocabularyResponse';
import { VocabInfo } from './model/VocabInfo';
import { Word } from './model/Word';
import { WordFluency } from './model/WordFluency';
import { WordInfo } from './model/WordInfo';
import { WordPronunciation } from './model/WordPronunciation';

export class SisClient {
    public static newBuilder(): ClientBuilder<SisClient> {
            return new ClientBuilder<SisClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 该接口用于获取录音文件识别结果及识别状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取录音文件识别结果
     * @param {string} jobId 录音文件识别任务标识符。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public collectTranscriberJob(collectTranscriberJobRequest?: CollectTranscriberJobRequest): Promise<CollectTranscriberJobResponse> {
        const options = ParamCreater().collectTranscriberJob(collectTranscriberJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 新建一个热词表，创建成功返回id。每个用户限制创建10个热词表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建热词表
     * @param {PostCreateVocabReq} postCreateVocabReq 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVocabulary(createVocabularyRequest?: CreateVocabularyRequest): Promise<CreateVocabularyResponse> {
        const options = ParamCreater().createVocabulary(createVocabularyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过热词表id删除热词表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除热词表
     * @param {string} vocabularyId 热词表id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteVocabulary(deleteVocabularyRequest?: DeleteVocabularyRequest): Promise<DeleteVocabularyResponse> {
        const options = ParamCreater().deleteVocabulary(deleteVocabularyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * **录音文件识别**
     * 录音文件识别接口，用于识别长录音文件，录音文件放在华为云OBS（对象存储服务）上。
     * 
     * 由于录音文件识别通常会需要较长的时间，因此识别是异步的，也即接口分为创建识别任务和查询任务状态两个接口。创建识别任务接口创建任务完成后返回，然后用户通过调用查询任务状态接口来获得转写状态和结果。
     * 
     * **功能介绍**
     * 该接口用于提交录音文件识别任务，其中录音文件保存在用户的OBS桶中。用户开通录音识别服务时，需授权录音文件引擎读取用户OBS桶权限。
     * 
     * 接口约束
     * 录音时长不超过5小时，文件大小不超过300M，识别结果保存72小时（从识别完成的时间算起）。72小时后如果再访问，将会返回 \&quot;task id is not found\&quot;错误。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 提交录音文件识别任务
     * @param {string} [enterpriseProjectId] 企业项目ID。SIS支持通过企业项目管理（EPS）对不同用户组和用户的资源使用，进行分账。 获取方法：进入“[企业项目管理](https://console.huaweicloud.com/eps/?region&#x3D;cn-north-4#/projects/list)”页面，单击企业项目名称，在企业项目详情页获取Enterprise-Project-Id（企业项目ID）。 企业项目创建步骤请参见用户指南。 &gt; 说明： 创建企业项目后，在传参时，有以下三类场景。 - 携带正确的ID，正常使用SIS服务，账单归到企业ID对应的企业项目中。 - 携带错误的ID，正常使用SIS服务，账单的企业项目会被分类为“default”。 - 不携带ID，正常使用SIS服务，账单的企业项目会被分类为“default”。
     * @param {PostTranscriberJobs} [postTranscribe] 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public pushTranscriberJobs(pushTranscriberJobsRequest?: PushTranscriberJobsRequest): Promise<PushTranscriberJobsResponse> {
        const options = ParamCreater().pushTranscriberJobs(pushTranscriberJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 极速版ASR(Restful API 接口, 适用于音频(文件大小&lt;&#x3D;100M,语音时长&lt;&#x3D;30分钟)文件的同步识别。
     * 此接口以POST方式一次性上传整个音频或从华为OBS中下载音频， 识别结果将在请求响应中即刻返回，用于语音文件极速转写，质检分析的离线场景。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 录音文件识别极速版
     * @param {'chinese_8k_common' | 'chinese_16k_conversation'} property 所使用的模型特征串。通常是 “语种_采样率_领域”的形式。 采样率需要与音频采样率保持一致。 当前支持如下模型特征串： chinese_8k_common chinese_16k_conversation
     * @param {'wav' | 'mp3' | 'm4a' | 'aac' | 'opus'} audioFormat 音频格式，audio_format取值范围： wav,mp3,m4a,aac,opus
     * @param {'yes' | 'no'} [addPunc] 是否加标点， 可以为 yes, 默认no
     * @param {'yes' | 'no'} [digitNorm] 是否将音频中的数字使用阿拉伯数字的形式呈现，取值为yes，no，默认为yes
     * @param {'yes' | 'no'} [needWordInfo] 表示是否在识别结果中输出分词结果信息，取值为yes，no，默认no
     * @param {string} [vocabularyId] 热词表id
     * @param {string} [obsBucketName] obs桶名
     * @param {string} [obsObjectKey] obs对象key，经过urlencode编码，长度不超过1024个字符
     * @param {'yes' | 'no'} [firstChannelOnly] 表示是否在识别中只识别首个声道的音频数据，取值为“yes”和“no”，默认为“no”。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public recognizeFlashAsr(recognizeFlashAsrRequest?: RecognizeFlashAsrRequest): Promise<RecognizeFlashAsrResponse> {
        const options = ParamCreater().recognizeFlashAsr(recognizeFlashAsrRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 一句话识别接口，用于短语音的同步识别。一次性上传整个音频，响应中即返回识别结果。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 一句话识别
     * @param {PostShortAudioReq} postShortAudioReq 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public recognizeShortAudio(recognizeShortAudioRequest?: RecognizeShortAudioRequest): Promise<RecognizeShortAudioResponse> {
        const options = ParamCreater().recognizeShortAudio(recognizeShortAudioRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 口语评测接口，基于一小段朗读语音和预期文本，评价朗读者发音质量。当前仅支持华北-北京四。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 语音评测
     * @param {PostShortAudioAssessmentReq} postShortAudioAssessmentReq 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runAudioAssessment(runAudioAssessmentRequest?: RunAudioAssessmentRequest): Promise<RunAudioAssessmentResponse> {
        const options = ParamCreater().runAudioAssessment(runAudioAssessmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 多模态评测接口，根据朗读视频数据、视频对应的音频数据和试题文本，综合给出朗读者口语的评测分数。当前仅支持华北-北京四。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 多模态评测
     * @param {PostMultiModalAssessmentReq} postShortVideoAssessmentReq 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runMultiModalAssessment(runMultiModalAssessmentRequest?: RunMultiModalAssessmentRequest): Promise<RunMultiModalAssessmentResponse> {
        const options = ParamCreater().runMultiModalAssessment(runMultiModalAssessmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 语音合成，是一种将文本转换成逼真语音的服务。用户通过实时访问和调用API获取语音合成结果，将用户输入的文字合成为音频。通过音色选择、自定义音量、语速，为企业和个人提供个性化的发音服务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 语音合成
     * @param {PostCustomTTSReq} postCustomTTSReq 请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runTts(runTtsRequest?: RunTtsRequest): Promise<RunTtsResponse> {
        const options = ParamCreater().runTts(runTtsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户所有热词表列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询热词表列表
     * @param {number} [offset] 页码偏移量，表示从此页码偏移量开始查询，offset大于等于0。
     * @param {number} [limit] 每页显示的条目数量。
     * @param {ShowVocabulariesParams} [showVocabulariesParams] 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVocabularies(showVocabulariesRequest?: ShowVocabulariesRequest): Promise<ShowVocabulariesResponse> {
        const options = ParamCreater().showVocabularies(showVocabulariesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过热词表id查询热词表的信息和内容。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询热词表信息
     * @param {string} vocabularyId 热词表id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVocabulary(showVocabularyRequest?: ShowVocabularyRequest): Promise<ShowVocabularyResponse> {
        const options = ParamCreater().showVocabulary(showVocabularyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新一个热词表，更新成功返回id。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新热词表
     * @param {string} vocabularyId 被更新的热词表id。
     * @param {PutUpdateVocabReq} putUpdateVocabReq 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateVocabulary(updateVocabularyRequest?: UpdateVocabularyRequest): Promise<UpdateVocabularyResponse> {
        const options = ParamCreater().updateVocabulary(updateVocabularyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 该接口用于获取录音文件识别结果及识别状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        collectTranscriberJob(collectTranscriberJobRequest?: CollectTranscriberJobRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/asr/transcriber/jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (collectTranscriberJobRequest !== null && collectTranscriberJobRequest !== undefined) {
                if (collectTranscriberJobRequest instanceof CollectTranscriberJobRequest) {
                    jobId = collectTranscriberJobRequest.jobId;
                } else {
                    jobId = collectTranscriberJobRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling collectTranscriberJob.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 新建一个热词表，创建成功返回id。每个用户限制创建10个热词表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createVocabulary(createVocabularyRequest?: CreateVocabularyRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/asr/vocabularies",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createVocabularyRequest !== null && createVocabularyRequest !== undefined) {
                if (createVocabularyRequest instanceof CreateVocabularyRequest) {
                    body = createVocabularyRequest.body
                } else {
                    body = createVocabularyRequest['body'];
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
         * 通过热词表id删除热词表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteVocabulary(deleteVocabularyRequest?: DeleteVocabularyRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/asr/vocabularies/{vocabulary_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let vocabularyId;

            if (deleteVocabularyRequest !== null && deleteVocabularyRequest !== undefined) {
                if (deleteVocabularyRequest instanceof DeleteVocabularyRequest) {
                    vocabularyId = deleteVocabularyRequest.vocabularyId;
                } else {
                    vocabularyId = deleteVocabularyRequest['vocabulary_id'];
                }
            }

        
            if (vocabularyId === null || vocabularyId === undefined) {
            throw new RequiredError('vocabularyId','Required parameter vocabularyId was null or undefined when calling deleteVocabulary.');
            }

            options.pathParams = { 'vocabulary_id': vocabularyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * **录音文件识别**
         * 录音文件识别接口，用于识别长录音文件，录音文件放在华为云OBS（对象存储服务）上。
         * 
         * 由于录音文件识别通常会需要较长的时间，因此识别是异步的，也即接口分为创建识别任务和查询任务状态两个接口。创建识别任务接口创建任务完成后返回，然后用户通过调用查询任务状态接口来获得转写状态和结果。
         * 
         * **功能介绍**
         * 该接口用于提交录音文件识别任务，其中录音文件保存在用户的OBS桶中。用户开通录音识别服务时，需授权录音文件引擎读取用户OBS桶权限。
         * 
         * 接口约束
         * 录音时长不超过5小时，文件大小不超过300M，识别结果保存72小时（从识别完成的时间算起）。72小时后如果再访问，将会返回 \&quot;task id is not found\&quot;错误。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        pushTranscriberJobs(pushTranscriberJobsRequest?: PushTranscriberJobsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/asr/transcriber/jobs",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let enterpriseProjectId;

            if (pushTranscriberJobsRequest !== null && pushTranscriberJobsRequest !== undefined) {
                if (pushTranscriberJobsRequest instanceof PushTranscriberJobsRequest) {
                    enterpriseProjectId = pushTranscriberJobsRequest.enterpriseProjectId;
                    body = pushTranscriberJobsRequest.body
                } else {
                    enterpriseProjectId = pushTranscriberJobsRequest['Enterprise-Project-Id'];
                    body = pushTranscriberJobsRequest['body'];
                }
            }

        
            if (enterpriseProjectId !== undefined && enterpriseProjectId !== null) {
                localVarHeaderParameter['Enterprise-Project-Id'] = String(enterpriseProjectId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 极速版ASR(Restful API 接口, 适用于音频(文件大小&lt;&#x3D;100M,语音时长&lt;&#x3D;30分钟)文件的同步识别。
         * 此接口以POST方式一次性上传整个音频或从华为OBS中下载音频， 识别结果将在请求响应中即刻返回，用于语音文件极速转写，质检分析的离线场景。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        recognizeFlashAsr(recognizeFlashAsrRequest?: RecognizeFlashAsrRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/asr/flash",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let property;
            
            let audioFormat;
            
            let addPunc;
            
            let digitNorm;
            
            let needWordInfo;
            
            let vocabularyId;
            
            let obsBucketName;
            
            let obsObjectKey;
            
            let firstChannelOnly;

            if (recognizeFlashAsrRequest !== null && recognizeFlashAsrRequest !== undefined) {
                if (recognizeFlashAsrRequest instanceof RecognizeFlashAsrRequest) {
                    property = recognizeFlashAsrRequest.property;
                    audioFormat = recognizeFlashAsrRequest.audioFormat;
                    addPunc = recognizeFlashAsrRequest.addPunc;
                    digitNorm = recognizeFlashAsrRequest.digitNorm;
                    needWordInfo = recognizeFlashAsrRequest.needWordInfo;
                    vocabularyId = recognizeFlashAsrRequest.vocabularyId;
                    obsBucketName = recognizeFlashAsrRequest.obsBucketName;
                    obsObjectKey = recognizeFlashAsrRequest.obsObjectKey;
                    firstChannelOnly = recognizeFlashAsrRequest.firstChannelOnly;
                } else {
                    property = recognizeFlashAsrRequest['property'];
                    audioFormat = recognizeFlashAsrRequest['audio_format'];
                    addPunc = recognizeFlashAsrRequest['add_punc'];
                    digitNorm = recognizeFlashAsrRequest['digit_norm'];
                    needWordInfo = recognizeFlashAsrRequest['need_word_info'];
                    vocabularyId = recognizeFlashAsrRequest['vocabulary_id'];
                    obsBucketName = recognizeFlashAsrRequest['obs_bucket_name'];
                    obsObjectKey = recognizeFlashAsrRequest['obs_object_key'];
                    firstChannelOnly = recognizeFlashAsrRequest['first_channel_only'];
                }
            }

        
            if (property === null || property === undefined) {
                throw new RequiredError('property','Required parameter property was null or undefined when calling recognizeFlashAsr.');
            }
            if (property !== null && property !== undefined) {
                localVarQueryParameter['property'] = property;
            }
            if (audioFormat === null || audioFormat === undefined) {
                throw new RequiredError('audioFormat','Required parameter audioFormat was null or undefined when calling recognizeFlashAsr.');
            }
            if (audioFormat !== null && audioFormat !== undefined) {
                localVarQueryParameter['audio_format'] = audioFormat;
            }
            if (addPunc !== null && addPunc !== undefined) {
                localVarQueryParameter['add_punc'] = addPunc;
            }
            if (digitNorm !== null && digitNorm !== undefined) {
                localVarQueryParameter['digit_norm'] = digitNorm;
            }
            if (needWordInfo !== null && needWordInfo !== undefined) {
                localVarQueryParameter['need_word_info'] = needWordInfo;
            }
            if (vocabularyId !== null && vocabularyId !== undefined) {
                localVarQueryParameter['vocabulary_id'] = vocabularyId;
            }
            if (obsBucketName !== null && obsBucketName !== undefined) {
                localVarQueryParameter['obs_bucket_name'] = obsBucketName;
            }
            if (obsObjectKey !== null && obsObjectKey !== undefined) {
                localVarQueryParameter['obs_object_key'] = obsObjectKey;
            }
            if (firstChannelOnly !== null && firstChannelOnly !== undefined) {
                localVarQueryParameter['first_channel_only'] = firstChannelOnly;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 一句话识别接口，用于短语音的同步识别。一次性上传整个音频，响应中即返回识别结果。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        recognizeShortAudio(recognizeShortAudioRequest?: RecognizeShortAudioRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/asr/short-audio",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (recognizeShortAudioRequest !== null && recognizeShortAudioRequest !== undefined) {
                if (recognizeShortAudioRequest instanceof RecognizeShortAudioRequest) {
                    body = recognizeShortAudioRequest.body
                } else {
                    body = recognizeShortAudioRequest['body'];
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
         * 口语评测接口，基于一小段朗读语音和预期文本，评价朗读者发音质量。当前仅支持华北-北京四。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        runAudioAssessment(runAudioAssessmentRequest?: RunAudioAssessmentRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/assessment/audio",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (runAudioAssessmentRequest !== null && runAudioAssessmentRequest !== undefined) {
                if (runAudioAssessmentRequest instanceof RunAudioAssessmentRequest) {
                    body = runAudioAssessmentRequest.body
                } else {
                    body = runAudioAssessmentRequest['body'];
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
         * 多模态评测接口，根据朗读视频数据、视频对应的音频数据和试题文本，综合给出朗读者口语的评测分数。当前仅支持华北-北京四。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        runMultiModalAssessment(runMultiModalAssessmentRequest?: RunMultiModalAssessmentRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/assessment/video",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (runMultiModalAssessmentRequest !== null && runMultiModalAssessmentRequest !== undefined) {
                if (runMultiModalAssessmentRequest instanceof RunMultiModalAssessmentRequest) {
                    body = runMultiModalAssessmentRequest.body
                } else {
                    body = runMultiModalAssessmentRequest['body'];
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
         * 语音合成，是一种将文本转换成逼真语音的服务。用户通过实时访问和调用API获取语音合成结果，将用户输入的文字合成为音频。通过音色选择、自定义音量、语速，为企业和个人提供个性化的发音服务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        runTts(runTtsRequest?: RunTtsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/tts",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (runTtsRequest !== null && runTtsRequest !== undefined) {
                if (runTtsRequest instanceof RunTtsRequest) {
                    body = runTtsRequest.body
                } else {
                    body = runTtsRequest['body'];
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
         * 查询用户所有热词表列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVocabularies(showVocabulariesRequest?: ShowVocabulariesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/asr/vocabularies",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let offset;
            
            let limit;

            if (showVocabulariesRequest !== null && showVocabulariesRequest !== undefined) {
                if (showVocabulariesRequest instanceof ShowVocabulariesRequest) {
                    offset = showVocabulariesRequest.offset;
                    limit = showVocabulariesRequest.limit;
                    body = showVocabulariesRequest.body
                } else {
                    offset = showVocabulariesRequest['offset'];
                    limit = showVocabulariesRequest['limit'];
                    body = showVocabulariesRequest['body'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过热词表id查询热词表的信息和内容。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVocabulary(showVocabularyRequest?: ShowVocabularyRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/asr/vocabularies/{vocabulary_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let vocabularyId;

            if (showVocabularyRequest !== null && showVocabularyRequest !== undefined) {
                if (showVocabularyRequest instanceof ShowVocabularyRequest) {
                    vocabularyId = showVocabularyRequest.vocabularyId;
                } else {
                    vocabularyId = showVocabularyRequest['vocabulary_id'];
                }
            }

        
            if (vocabularyId === null || vocabularyId === undefined) {
            throw new RequiredError('vocabularyId','Required parameter vocabularyId was null or undefined when calling showVocabulary.');
            }

            options.pathParams = { 'vocabulary_id': vocabularyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新一个热词表，更新成功返回id。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateVocabulary(updateVocabularyRequest?: UpdateVocabularyRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/asr/vocabularies/{vocabulary_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let vocabularyId;

            if (updateVocabularyRequest !== null && updateVocabularyRequest !== undefined) {
                if (updateVocabularyRequest instanceof UpdateVocabularyRequest) {
                    vocabularyId = updateVocabularyRequest.vocabularyId;
                    body = updateVocabularyRequest.body
                } else {
                    vocabularyId = updateVocabularyRequest['vocabulary_id'];
                    body = updateVocabularyRequest['body'];
                }
            }

        
            if (vocabularyId === null || vocabularyId === undefined) {
            throw new RequiredError('vocabularyId','Required parameter vocabularyId was null or undefined when calling updateVocabulary.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vocabulary_id': vocabularyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): SisClient {
    return new SisClient(client);
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