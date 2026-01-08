import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AdditionalManifests } from './model/AdditionalManifests';
import { AgenciesTaskReq } from './model/AgenciesTaskReq';
import { AnimatedGraphicsOutputParam } from './model/AnimatedGraphicsOutputParam';
import { AnimatedGraphicsTask } from './model/AnimatedGraphicsTask';
import { Audio } from './model/Audio';
import { AudioFile } from './model/AudioFile';
import { AudioInfo } from './model/AudioInfo';
import { AudioProcess } from './model/AudioProcess';
import { AudioTrack } from './model/AudioTrack';
import { AvParameters } from './model/AvParameters';
import { BasicTaskInfo } from './model/BasicTaskInfo';
import { BasicWatermark } from './model/BasicWatermark';
import { BucketAuthorizedReq } from './model/BucketAuthorizedReq';
import { CancelRemuxTaskRequest } from './model/CancelRemuxTaskRequest';
import { CancelRemuxTaskResponse } from './model/CancelRemuxTaskResponse';
import { ClipInfo } from './model/ClipInfo';
import { Common } from './model/Common';
import { CommonCreateTaskReq } from './model/CommonCreateTaskReq';
import { CommonCreateTaskRsp } from './model/CommonCreateTaskRsp';
import { CommonQueryTaskRsp } from './model/CommonQueryTaskRsp';
import { CommonTask } from './model/CommonTask';
import { CommonTaskMeta } from './model/CommonTaskMeta';
import { ConcatInfo } from './model/ConcatInfo';
import { CreateAgenciesTaskRequest } from './model/CreateAgenciesTaskRequest';
import { CreateAgenciesTaskResponse } from './model/CreateAgenciesTaskResponse';
import { CreateAnimatedGraphicsTaskReq } from './model/CreateAnimatedGraphicsTaskReq';
import { CreateAnimatedGraphicsTaskRequest } from './model/CreateAnimatedGraphicsTaskRequest';
import { CreateAnimatedGraphicsTaskResponse } from './model/CreateAnimatedGraphicsTaskResponse';
import { CreateEditingJobReq } from './model/CreateEditingJobReq';
import { CreateEditingJobRequest } from './model/CreateEditingJobRequest';
import { CreateEditingJobResponse } from './model/CreateEditingJobResponse';
import { CreateExtractTaskReq } from './model/CreateExtractTaskReq';
import { CreateExtractTaskRequest } from './model/CreateExtractTaskRequest';
import { CreateExtractTaskResponse } from './model/CreateExtractTaskResponse';
import { CreateMbTasksReportRequest } from './model/CreateMbTasksReportRequest';
import { CreateMbTasksReportResponse } from './model/CreateMbTasksReportResponse';
import { CreateMediaProcessReq } from './model/CreateMediaProcessReq';
import { CreateMediaProcessTaskRequest } from './model/CreateMediaProcessTaskRequest';
import { CreateMediaProcessTaskResponse } from './model/CreateMediaProcessTaskResponse';
import { CreateMergeChannelsReq } from './model/CreateMergeChannelsReq';
import { CreateMergeChannelsTaskRequest } from './model/CreateMergeChannelsTaskRequest';
import { CreateMergeChannelsTaskResponse } from './model/CreateMergeChannelsTaskResponse';
import { CreateMpeCallBackRequest } from './model/CreateMpeCallBackRequest';
import { CreateMpeCallBackResponse } from './model/CreateMpeCallBackResponse';
import { CreateQualityEnhanceTemplateRequest } from './model/CreateQualityEnhanceTemplateRequest';
import { CreateQualityEnhanceTemplateResponse } from './model/CreateQualityEnhanceTemplateResponse';
import { CreateRemuxTaskReq } from './model/CreateRemuxTaskReq';
import { CreateRemuxTaskRequest } from './model/CreateRemuxTaskRequest';
import { CreateRemuxTaskResponse } from './model/CreateRemuxTaskResponse';
import { CreateResetTracksReq } from './model/CreateResetTracksReq';
import { CreateResetTracksTaskRequest } from './model/CreateResetTracksTaskRequest';
import { CreateResetTracksTaskResponse } from './model/CreateResetTracksTaskResponse';
import { CreateRetryRemuxTaskRequest } from './model/CreateRetryRemuxTaskRequest';
import { CreateRetryRemuxTaskResponse } from './model/CreateRetryRemuxTaskResponse';
import { CreateTemplateGroupRequest } from './model/CreateTemplateGroupRequest';
import { CreateTemplateGroupResponse } from './model/CreateTemplateGroupResponse';
import { CreateThumbReq } from './model/CreateThumbReq';
import { CreateThumbnailsTaskRequest } from './model/CreateThumbnailsTaskRequest';
import { CreateThumbnailsTaskResponse } from './model/CreateThumbnailsTaskResponse';
import { CreateTransTemplateRequest } from './model/CreateTransTemplateRequest';
import { CreateTransTemplateResponse } from './model/CreateTransTemplateResponse';
import { CreateTranscodingReq } from './model/CreateTranscodingReq';
import { CreateTranscodingTaskRequest } from './model/CreateTranscodingTaskRequest';
import { CreateTranscodingTaskResponse } from './model/CreateTranscodingTaskResponse';
import { CreateWatermarkTemplateRequest } from './model/CreateWatermarkTemplateRequest';
import { CreateWatermarkTemplateResponse } from './model/CreateWatermarkTemplateResponse';
import { Crop } from './model/Crop';
import { DeleteAnimatedGraphicsTaskRequest } from './model/DeleteAnimatedGraphicsTaskRequest';
import { DeleteAnimatedGraphicsTaskResponse } from './model/DeleteAnimatedGraphicsTaskResponse';
import { DeleteEditingJobRequest } from './model/DeleteEditingJobRequest';
import { DeleteEditingJobResponse } from './model/DeleteEditingJobResponse';
import { DeleteExtractTaskRequest } from './model/DeleteExtractTaskRequest';
import { DeleteExtractTaskResponse } from './model/DeleteExtractTaskResponse';
import { DeleteMediaProcessTaskRequest } from './model/DeleteMediaProcessTaskRequest';
import { DeleteMediaProcessTaskResponse } from './model/DeleteMediaProcessTaskResponse';
import { DeleteMergeChannelsTaskRequest } from './model/DeleteMergeChannelsTaskRequest';
import { DeleteMergeChannelsTaskResponse } from './model/DeleteMergeChannelsTaskResponse';
import { DeleteQualityEnhanceTemplateRequest } from './model/DeleteQualityEnhanceTemplateRequest';
import { DeleteQualityEnhanceTemplateResponse } from './model/DeleteQualityEnhanceTemplateResponse';
import { DeleteRemuxTaskRequest } from './model/DeleteRemuxTaskRequest';
import { DeleteRemuxTaskResponse } from './model/DeleteRemuxTaskResponse';
import { DeleteResetTracksTaskRequest } from './model/DeleteResetTracksTaskRequest';
import { DeleteResetTracksTaskResponse } from './model/DeleteResetTracksTaskResponse';
import { DeleteTemplateGroupRequest } from './model/DeleteTemplateGroupRequest';
import { DeleteTemplateGroupResponse } from './model/DeleteTemplateGroupResponse';
import { DeleteTemplateRequest } from './model/DeleteTemplateRequest';
import { DeleteTemplateResponse } from './model/DeleteTemplateResponse';
import { DeleteThumbnailsTaskRequest } from './model/DeleteThumbnailsTaskRequest';
import { DeleteThumbnailsTaskResponse } from './model/DeleteThumbnailsTaskResponse';
import { DeleteTranscodingTaskByConsoleRequest } from './model/DeleteTranscodingTaskByConsoleRequest';
import { DeleteTranscodingTaskByConsoleResponse } from './model/DeleteTranscodingTaskByConsoleResponse';
import { DeleteTranscodingTaskRequest } from './model/DeleteTranscodingTaskRequest';
import { DeleteTranscodingTaskResponse } from './model/DeleteTranscodingTaskResponse';
import { DeleteWatermarkTemplateRequest } from './model/DeleteWatermarkTemplateRequest';
import { DeleteWatermarkTemplateResponse } from './model/DeleteWatermarkTemplateResponse';
import { EditAudioInfo } from './model/EditAudioInfo';
import { EditHlsInfo } from './model/EditHlsInfo';
import { EditSetting } from './model/EditSetting';
import { EditVideoInfo } from './model/EditVideoInfo';
import { EditingJob } from './model/EditingJob';
import { Encryption } from './model/Encryption';
import { ErrorResponse } from './model/ErrorResponse';
import { ExtractTask } from './model/ExtractTask';
import { FileMetaData } from './model/FileMetaData';
import { HlsEncrypt } from './model/HlsEncrypt';
import { ImageSprite } from './model/ImageSprite';
import { ImageSpriteInfo } from './model/ImageSpriteInfo';
import { ImageSpritePara } from './model/ImageSpritePara';
import { ImageWatermark } from './model/ImageWatermark';
import { ImageWatermarkSetting } from './model/ImageWatermarkSetting';
import { InputSetting } from './model/InputSetting';
import { ListAllBucketsRequest } from './model/ListAllBucketsRequest';
import { ListAllBucketsResponse } from './model/ListAllBucketsResponse';
import { ListAllObsObjListRequest } from './model/ListAllObsObjListRequest';
import { ListAllObsObjListResponse } from './model/ListAllObsObjListResponse';
import { ListAnimatedGraphicsTaskRequest } from './model/ListAnimatedGraphicsTaskRequest';
import { ListAnimatedGraphicsTaskResponse } from './model/ListAnimatedGraphicsTaskResponse';
import { ListEditingJobRequest } from './model/ListEditingJobRequest';
import { ListEditingJobResponse } from './model/ListEditingJobResponse';
import { ListExtractTaskRequest } from './model/ListExtractTaskRequest';
import { ListExtractTaskResponse } from './model/ListExtractTaskResponse';
import { ListMediaProcessTaskRequest } from './model/ListMediaProcessTaskRequest';
import { ListMediaProcessTaskResponse } from './model/ListMediaProcessTaskResponse';
import { ListMergeChannelsTaskRequest } from './model/ListMergeChannelsTaskRequest';
import { ListMergeChannelsTaskResponse } from './model/ListMergeChannelsTaskResponse';
import { ListNotifyEventRequest } from './model/ListNotifyEventRequest';
import { ListNotifyEventResponse } from './model/ListNotifyEventResponse';
import { ListNotifySmnTopicConfigRequest } from './model/ListNotifySmnTopicConfigRequest';
import { ListNotifySmnTopicConfigResponse } from './model/ListNotifySmnTopicConfigResponse';
import { ListQualityEnhanceDefaultTemplateRequest } from './model/ListQualityEnhanceDefaultTemplateRequest';
import { ListQualityEnhanceDefaultTemplateResponse } from './model/ListQualityEnhanceDefaultTemplateResponse';
import { ListRemuxTaskRequest } from './model/ListRemuxTaskRequest';
import { ListRemuxTaskResponse } from './model/ListRemuxTaskResponse';
import { ListResetTracksTaskRequest } from './model/ListResetTracksTaskRequest';
import { ListResetTracksTaskResponse } from './model/ListResetTracksTaskResponse';
import { ListStatSummaryRequest } from './model/ListStatSummaryRequest';
import { ListStatSummaryResponse } from './model/ListStatSummaryResponse';
import { ListTemplateGroupRequest } from './model/ListTemplateGroupRequest';
import { ListTemplateGroupResponse } from './model/ListTemplateGroupResponse';
import { ListTemplateRequest } from './model/ListTemplateRequest';
import { ListTemplateResponse } from './model/ListTemplateResponse';
import { ListThumbnailsTaskRequest } from './model/ListThumbnailsTaskRequest';
import { ListThumbnailsTaskResponse } from './model/ListThumbnailsTaskResponse';
import { ListTranscodeDetailRequest } from './model/ListTranscodeDetailRequest';
import { ListTranscodeDetailResponse } from './model/ListTranscodeDetailResponse';
import { ListTranscodingTaskRequest } from './model/ListTranscodingTaskRequest';
import { ListTranscodingTaskResponse } from './model/ListTranscodingTaskResponse';
import { ListWatermarkTemplateRequest } from './model/ListWatermarkTemplateRequest';
import { ListWatermarkTemplateResponse } from './model/ListWatermarkTemplateResponse';
import { MbTaskParameter } from './model/MbTaskParameter';
import { MbTasksReportReq } from './model/MbTasksReportReq';
import { MediaDetail } from './model/MediaDetail';
import { MediaProcessTaskInfo } from './model/MediaProcessTaskInfo';
import { MergeChannelsTaskInfo } from './model/MergeChannelsTaskInfo';
import { MetaData } from './model/MetaData';
import { MixInfo } from './model/MixInfo';
import { MixInfoLayout } from './model/MixInfoLayout';
import { ModifyTransTemplateGroup } from './model/ModifyTransTemplateGroup';
import { ModifyTransTemplateReq } from './model/ModifyTransTemplateReq';
import { MosaicInfo } from './model/MosaicInfo';
import { MpcMultiAudio } from './model/MpcMultiAudio';
import { MpeCallBackReq } from './model/MpeCallBackReq';
import { MpeMetaData } from './model/MpeMetaData';
import { MulInputFileInfo } from './model/MulInputFileInfo';
import { MultiAudio } from './model/MultiAudio';
import { MultiConcatInfo } from './model/MultiConcatInfo';
import { MultiTaskInfo } from './model/MultiTaskInfo';
import { Notification } from './model/Notification';
import { NotificationConfigReq } from './model/NotificationConfigReq';
import { NotifySmnTopicConfigRequest } from './model/NotifySmnTopicConfigRequest';
import { NotifySmnTopicConfigResponse } from './model/NotifySmnTopicConfigResponse';
import { ObsBucket } from './model/ObsBucket';
import { ObsObjInfo } from './model/ObsObjInfo';
import { ObsObject } from './model/ObsObject';
import { OriginPara } from './model/OriginPara';
import { OutputFileInfo } from './model/OutputFileInfo';
import { OutputPolicy } from './model/OutputPolicy';
import { OutputSetting } from './model/OutputSetting';
import { OutputThumbnailPara } from './model/OutputThumbnailPara';
import { OutputVideoPara } from './model/OutputVideoPara';
import { OutputWatermarkPara } from './model/OutputWatermarkPara';
import { PaneSetting } from './model/PaneSetting';
import { PicInfo } from './model/PicInfo';
import { QualityEnhanceTemplate } from './model/QualityEnhanceTemplate';
import { QualityEnhanceTemplateInfo } from './model/QualityEnhanceTemplateInfo';
import { QualityEnhanceVideo } from './model/QualityEnhanceVideo';
import { QueryTransTemplate } from './model/QueryTransTemplate';
import { QueryTranscodingsTaskResponse } from './model/QueryTranscodingsTaskResponse';
import { RemuxOutputParam } from './model/RemuxOutputParam';
import { RemuxRetryReq } from './model/RemuxRetryReq';
import { RemuxTask } from './model/RemuxTask';
import { ResetTracksTaskInfo } from './model/ResetTracksTaskInfo';
import { ShowAgenciesTaskRequest } from './model/ShowAgenciesTaskRequest';
import { ShowAgenciesTaskResponse } from './model/ShowAgenciesTaskResponse';
import { ShowTenantAccessInfoRequest } from './model/ShowTenantAccessInfoRequest';
import { ShowTenantAccessInfoResponse } from './model/ShowTenantAccessInfoResponse';
import { SourceInfo } from './model/SourceInfo';
import { StatSummary } from './model/StatSummary';
import { SubAudioFile } from './model/SubAudioFile';
import { Subtitle } from './model/Subtitle';
import { TaskDetailInfo } from './model/TaskDetailInfo';
import { TaskInfo } from './model/TaskInfo';
import { TemplateGroup } from './model/TemplateGroup';
import { TemplateInfo } from './model/TemplateInfo';
import { TextWatermark } from './model/TextWatermark';
import { ThumbTask } from './model/ThumbTask';
import { Thumbnail } from './model/Thumbnail';
import { ThumbnailPara } from './model/ThumbnailPara';
import { ThumbnailsInfo } from './model/ThumbnailsInfo';
import { TracksInfo } from './model/TracksInfo';
import { TransIdTemplate } from './model/TransIdTemplate';
import { TransTemplate } from './model/TransTemplate';
import { TransTemplateGroup } from './model/TransTemplateGroup';
import { TranscodeDetail } from './model/TranscodeDetail';
import { UpdateBucketAuthorizedRequest } from './model/UpdateBucketAuthorizedRequest';
import { UpdateBucketAuthorizedResponse } from './model/UpdateBucketAuthorizedResponse';
import { UpdateQualityEnhanceTemplateReq } from './model/UpdateQualityEnhanceTemplateReq';
import { UpdateQualityEnhanceTemplateRequest } from './model/UpdateQualityEnhanceTemplateRequest';
import { UpdateQualityEnhanceTemplateResponse } from './model/UpdateQualityEnhanceTemplateResponse';
import { UpdateTemplateGroupRequest } from './model/UpdateTemplateGroupRequest';
import { UpdateTemplateGroupResponse } from './model/UpdateTemplateGroupResponse';
import { UpdateTenantAccessInfoReq } from './model/UpdateTenantAccessInfoReq';
import { UpdateTenantAccessInfoRequest } from './model/UpdateTenantAccessInfoRequest';
import { UpdateTenantAccessInfoResponse } from './model/UpdateTenantAccessInfoResponse';
import { UpdateTransTemplateRequest } from './model/UpdateTransTemplateRequest';
import { UpdateTransTemplateResponse } from './model/UpdateTransTemplateResponse';
import { UpdateWatermarkTemplateRequest } from './model/UpdateWatermarkTemplateRequest';
import { UpdateWatermarkTemplateResponse } from './model/UpdateWatermarkTemplateResponse';
import { Video } from './model/Video';
import { VideoAndTemplate } from './model/VideoAndTemplate';
import { VideoCommon } from './model/VideoCommon';
import { VideoContrast } from './model/VideoContrast';
import { VideoDeblock } from './model/VideoDeblock';
import { VideoDenoise } from './model/VideoDenoise';
import { VideoInfo } from './model/VideoInfo';
import { VideoObj } from './model/VideoObj';
import { VideoParameters } from './model/VideoParameters';
import { VideoProcess } from './model/VideoProcess';
import { VideoSaturation } from './model/VideoSaturation';
import { VideoSharp } from './model/VideoSharp';
import { VideoSuperresolution } from './model/VideoSuperresolution';
import { WatermarkRequest } from './model/WatermarkRequest';
import { WatermarkTemplate } from './model/WatermarkTemplate';
import { XCodeError } from './model/XCodeError';

export class MpcClient {
    public static newBuilder(): ClientBuilder<MpcClient> {
            let client = new ClientBuilder<MpcClient>(newClient);
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
     * 创建动图任务，用于将完整的视频文件或视频文件中的一部分转换为动态图文件，暂只支持输出GIF文件。
     * 待转动图的视频文件需要存储在与媒体处理服务同区域的OBS桶中，且该OBS桶已授权。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新建转动图任务
     * @param {CreateAnimatedGraphicsTaskReq} createAnimatedGraphicsTaskRequestBody 创建转动图请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAnimatedGraphicsTask(createAnimatedGraphicsTaskRequest?: CreateAnimatedGraphicsTaskRequest): Promise<CreateAnimatedGraphicsTaskResponse> {
        const options = ParamCreater().createAnimatedGraphicsTask(createAnimatedGraphicsTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 取消已下发的生成动图任务，仅支持取消正在排队中的任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 取消转动图任务
     * @param {string} taskId 任务ID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAnimatedGraphicsTask(deleteAnimatedGraphicsTaskRequest?: DeleteAnimatedGraphicsTaskRequest): Promise<DeleteAnimatedGraphicsTaskResponse> {
        const options = ParamCreater().deleteAnimatedGraphicsTask(deleteAnimatedGraphicsTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询动图任务的状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询转动图任务
     * @param {string} [xLanguage] 客户端语言
     * @param {Array<string>} [taskId] 任务ID。一次最多10个 
     * @param {'INIT' | 'WAITING' | 'PREPROCESSING' | 'SUCCEED' | 'FAILED' | 'CANCELED'} [status] 任务执行状态。  取值如下： - INIT：初始状态 - WAITING：待启动 - PREPROCESSING：处理中 - SUCCEED：处理成功 - FAILED：处理失败 - CANCELED：已取消 
     * @param {string} [startTime] 起始时间。格式为yyyymmddhhmmss。必须是与时区无关的UTC时间，指定task_id时该参数无效。 
     * @param {string} [endTime] 结束时间。格式为yyyymmddhhmmss。必须是与时区无关的UTC时间，指定task_id时该参数无效。 
     * @param {number} [page] 分页编号。查询指定“task_id”时，该参数无效。  默认值：0。 
     * @param {number} [size] 每页记录数。查询指定“task_id”时，该参数无效。  取值范围：[1,100]。  默认值：10。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAnimatedGraphicsTask(listAnimatedGraphicsTaskRequest?: ListAnimatedGraphicsTaskRequest): Promise<ListAnimatedGraphicsTaskResponse> {
        const options = ParamCreater().listAnimatedGraphicsTask(listAnimatedGraphicsTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启或关闭\&quot;委托授权\&quot;, 开启后，媒体处理服务将拥有您所有桶的读写权限，子账号不支持委托授权。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 请求委托任务
     * @param {AgenciesTaskReq} createAgenciesTaskRequestBody 创建委托授权请求
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAgenciesTask(createAgenciesTaskRequest?: CreateAgenciesTaskRequest): Promise<CreateAgenciesTaskResponse> {
        const options = ParamCreater().createAgenciesTask(createAgenciesTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 请求查询自己创建的指定的桶区域位置的桶列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询桶列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAllBuckets(listAllBucketsRequest?: ListAllBucketsRequest): Promise<ListAllBucketsResponse> {
        const options = ParamCreater().listAllBuckets();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询桶里的object。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询桶里的object
     * @param {string} bucket 桶名
     * @param {string} [prefix] 查询对象前缀
     * @param {string} [type] 查询对象文件类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAllObsObjList(listAllObsObjListRequest?: ListAllObsObjListRequest): Promise<ListAllObsObjListResponse> {
        const options = ParamCreater().listAllObsObjList(listAllObsObjListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询消息订阅功能板块, SMN主题的所有订阅事件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询转码服务端所有事件
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNotifyEvent(listNotifyEventRequest?: ListNotifyEventRequest): Promise<ListNotifyEventResponse> {
        const options = ParamCreater().listNotifyEvent();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询消息订阅功能板块, SMN主题的订阅事件的启用状态和订阅消息的启用状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询转码服务端事件通知
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNotifySmnTopicConfig(listNotifySmnTopicConfigRequest?: ListNotifySmnTopicConfigRequest): Promise<ListNotifySmnTopicConfigResponse> {
        const options = ParamCreater().listNotifySmnTopicConfig();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 配置转码服务端事件通知。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 配置转码服务端事件通知
     * @param {NotificationConfigReq} [notifySmnTopicConfigRequestBody] 配置消息通知请求
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public notifySmnTopicConfig(notifySmnTopicConfigRequest?: NotifySmnTopicConfigRequest): Promise<NotifySmnTopicConfigResponse> {
        const options = ParamCreater().notifySmnTopicConfig(notifySmnTopicConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询创建委托任务状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询创建委托任务状态
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAgenciesTask(showAgenciesTaskRequest?: ShowAgenciesTaskRequest): Promise<ShowAgenciesTaskResponse> {
        const options = ParamCreater().showAgenciesTask();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 对OBS桶进行授权或取消授权，媒体处理服务仅拥有已授权桶的读写权限。（暂不支持KMS加密桶的授权）
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 桶授权或取消授权
     * @param {BucketAuthorizedReq} updateBucketAuthorizedRequestBody 桶授权请求 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateBucketAuthorized(updateBucketAuthorizedRequest?: UpdateBucketAuthorizedRequest): Promise<UpdateBucketAuthorizedResponse> {
        const options = ParamCreater().updateBucketAuthorized(updateBucketAuthorizedRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建剪辑任务，用于将多个视频文件进行裁剪成多个视频分段，并且可以把这些视频分段合并成一个视频，剪切和拼接功能可以单独使用。
     * 待剪辑的视频文件需要存储在与媒体处理服务同区域的OBS桶中，且该OBS桶已授权。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新建剪辑任务
     * @param {CreateEditingJobReq} createEditingJobRequestBody 创建剪辑请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createEditingJob(createEditingJobRequest?: CreateEditingJobRequest): Promise<CreateEditingJobResponse> {
        const options = ParamCreater().createEditingJob(createEditingJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 取消已下发的生成剪辑任务，仅支持取消正在排队中的任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 取消剪辑任务
     * @param {string} jobId 任务ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteEditingJob(deleteEditingJobRequest?: DeleteEditingJobRequest): Promise<DeleteEditingJobResponse> {
        const options = ParamCreater().deleteEditingJob(deleteEditingJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询剪辑任务的状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询剪辑任务
     * @param {string} [xLanguage] 客户端语言
     * @param {Array<string>} [jobId] 任务ID。一次最多10个
     * @param {'INIT' | 'WAITING' | 'PREPROCESSING' | 'SUCCEED' | 'FAILED' | 'CANCELED'} [status] 任务执行状态。  取值如下： - INIT：初始状态 - WAITING：待启动 - PREPROCESSING：处理中 - SUCCEED：处理成功 - FAILED：处理失败 - CANCELED：已取消
     * @param {string} [startTime] 起始时间。格式为yyyymmddhhmmss。必须是与时区无关的UTC时间，指定task_id时该参数无效。
     * @param {string} [endTime] 结束时间。格式为yyyymmddhhmmss。必须是与时区无关的UTC时间，指定task_id时该参数无效。
     * @param {number} [page] 分页编号。查询指定“task_id”时，该参数无效。  默认值：0。
     * @param {number} [size] 每页记录数。查询指定“task_id”时，该参数无效。  取值范围：[1,100]。  默认值：10。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEditingJob(listEditingJobRequest?: ListEditingJobRequest): Promise<ListEditingJobResponse> {
        const options = ParamCreater().listEditingJob(listEditingJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建视频解析任务，解析视频元数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新建视频解析任务
     * @param {CreateExtractTaskReq} createExtractTaskRequestBody 创建解析请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createExtractTask(createExtractTaskRequest?: CreateExtractTaskRequest): Promise<CreateExtractTaskResponse> {
        const options = ParamCreater().createExtractTask(createExtractTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 取消已下发的视频解析任务，仅支持取消正在排队中的任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 取消视频解析任务
     * @param {string} taskId 任务ID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteExtractTask(deleteExtractTaskRequest?: DeleteExtractTaskRequest): Promise<DeleteExtractTaskResponse> {
        const options = ParamCreater().deleteExtractTask(deleteExtractTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询解析任务的状态和结果。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询视频解析任务
     * @param {string} [xLanguage] 客户端语言
     * @param {Array<string>} [taskId] 任务ID。一次最多10个 
     * @param {'INIT' | 'WAITING' | 'PREPROCESSING' | 'SUCCEED' | 'FAILED' | 'CANCELED'} [status] 任务执行状态。  取值如下： - INIT：初始状态 - WAITING：等待启动 - PREPROCESSING：处理中 - SUCCEED：处理成功 - FAILED：处理失败 - CANCELED：已取消 
     * @param {string} [startTime] 起始时间。格式为yyyymmddhhmmss。必须是与时区无关的UTC时间，指定task_id时该参数无效。 
     * @param {string} [endTime] 结束时间。格式为yyyymmddhhmmss。必须是与时区无关的UTC时间，指定task_id时该参数无效。 
     * @param {number} [page] 分页编号。查询指定“task_id”时，该参数无效。  默认值：0。 
     * @param {number} [size] 每页记录数。查询指定“task_id”时，该参数无效。  取值范围：[1,100]。  默认值：10。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listExtractTask(listExtractTaskRequest?: ListExtractTaskRequest): Promise<ListExtractTaskResponse> {
        const options = ParamCreater().listExtractTask(listExtractTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ## 典型场景 ##
     *   合并音频多声道文件任务、重置音频文件声轨任务上报结果接口。
     * ## 接口功能 ##
     *   合并音频多声道文件任务、重置音频文件声轨任务上报结果接口。
     * ## 接口约束 ##
     *   无。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 合并多声道任务、重置声轨任务上报接口
     * @param {MbTasksReportReq} createMbTasksReportRequestBody 创建合并音频多声道文件任务请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createMbTasksReport(createMbTasksReportRequest?: CreateMbTasksReportRequest): Promise<CreateMbTasksReportResponse> {
        const options = ParamCreater().createMbTasksReport(createMbTasksReportRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建声道合并任务，合并声道任务支持将每个声道各放一个文件中的片源，合并为单个音频文件。
     * 执行合并声道的源音频文件需要存储在与媒体处理服务同区域的OBS桶中，且该OBS桶已授权。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建声道合并任务
     * @param {CreateMergeChannelsReq} createMergeChannelsTaskRequestBody 创建音频多声道任务请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createMergeChannelsTask(createMergeChannelsTaskRequest?: CreateMergeChannelsTaskRequest): Promise<CreateMergeChannelsTaskResponse> {
        const options = ParamCreater().createMergeChannelsTask(createMergeChannelsTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建音轨重置任务，重置音轨任务支持按人工指定关系声道layout，语言标签，转封装片源，使其满足转码输入。
     * 执行音轨重置的源音频文件需要存储在与媒体处理服务同区域的OBS桶中，且该OBS桶已授权。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建音轨重置任务
     * @param {CreateResetTracksReq} createResetTracksTaskRequestBody 创建重置音频文件声轨请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createResetTracksTask(createResetTracksTaskRequest?: CreateResetTracksTaskRequest): Promise<CreateResetTracksTaskResponse> {
        const options = ParamCreater().createResetTracksTask(createResetTracksTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 取消合并音频多声道文件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 取消声道合并任务
     * @param {string} taskId 任务ID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteMergeChannelsTask(deleteMergeChannelsTaskRequest?: DeleteMergeChannelsTaskRequest): Promise<DeleteMergeChannelsTaskResponse> {
        const options = ParamCreater().deleteMergeChannelsTask(deleteMergeChannelsTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 取消重置音频文件声轨任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 取消音轨重置任务
     * @param {string} taskId 任务ID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteResetTracksTask(deleteResetTracksTaskRequest?: DeleteResetTracksTaskRequest): Promise<DeleteResetTracksTaskResponse> {
        const options = ParamCreater().deleteResetTracksTask(deleteResetTracksTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询声道合并任务的状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询声道合并任务
     * @param {Array<string>} [taskId] 任务ID。一次最多10个 
     * @param {'WAITING' | 'PROCESSING' | 'SUCCEEDED' | 'FAILED' | 'CANCELED'} [status] 任务执行状态 
     * @param {string} [startTime] 起始时间。格式为yyyymmddhhmmss。必须是与时区无关的UTC时间，指定task_id时该参数无效 
     * @param {string} [endTime] 结束时间。格式为yyyymmddhhmmss。必须是与时区无关的UTC时间，指定task_id时该参数无效 
     * @param {number} [page] 分页编号。查询指定“task_id”时，该参数无效。  默认值：0。 
     * @param {number} [size] 每页记录数。查询指定“task_id”时，该参数无效。  取值范围：[1,100]。  默认值：10。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMergeChannelsTask(listMergeChannelsTaskRequest?: ListMergeChannelsTaskRequest): Promise<ListMergeChannelsTaskResponse> {
        const options = ParamCreater().listMergeChannelsTask(listMergeChannelsTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询音轨重置任务的状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询音轨重置任务
     * @param {Array<string>} [taskId] 任务ID。一次最多10个 
     * @param {'WAITING' | 'PROCESSING' | 'SUCCEEDED' | 'FAILED' | 'CANCELED'} [status] 任务执行状态 
     * @param {string} [startTime] 起始时间。格式为yyyymmddhhmmss。必须是与时区无关的UTC时间，指定task_id时该参数无效 
     * @param {string} [endTime] 结束时间。格式为yyyymmddhhmmss。必须是与时区无关的UTC时间，指定task_id时该参数无效 
     * @param {number} [page] 分页编号。查询指定“task_id”时，该参数无效。  默认值：0。 
     * @param {number} [size] 每页记录数。查询指定“task_id”时，该参数无效。  取值范围：[1,100]。  默认值：10。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listResetTracksTask(listResetTracksTaskRequest?: ListResetTracksTaskRequest): Promise<ListResetTracksTaskResponse> {
        const options = ParamCreater().listResetTracksTask(listResetTracksTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ## 典型场景 ##
     *   创建视频增强任务。
     * 
     * ## 接口功能 ##
     *   创建视频增强任务。
     * 
     * ## 接口约束 ##
     *   无。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建视频增强任务
     * @param {CreateMediaProcessReq} createMediaProcessTaskRequestBody 创建视频增强请求体 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createMediaProcessTask(createMediaProcessTaskRequest?: CreateMediaProcessTaskRequest): Promise<CreateMediaProcessTaskResponse> {
        const options = ParamCreater().createMediaProcessTask(createMediaProcessTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ## 典型场景 ##
     *   取消视频增强任务。
     * 
     * ## 接口功能 ##
     *   取消视频增强任务。
     * 
     * ## 接口约束 ##
     *   仅可删除正在排队中的任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 取消视频增强任务
     * @param {string} taskId 任务ID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteMediaProcessTask(deleteMediaProcessTaskRequest?: DeleteMediaProcessTaskRequest): Promise<DeleteMediaProcessTaskResponse> {
        const options = ParamCreater().deleteMediaProcessTask(deleteMediaProcessTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ## 典型场景 ##
     *   查询视频增强任务。
     * 
     * ## 接口功能 ##
     *   查询视频增强任务。
     * 
     * ## 接口约束 ##
     *   无。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询视频增强任务
     * @param {Array<string>} [taskId] 独立加密任务ID。一次最多10个 
     * @param {'WAITING' | 'PROCESSING' | 'SUCCEEDED' | 'FAILED' | 'CANCELED'} [status] 任务状态。  取值如下： - WAITING：等待启动 - PROCESSING：处理中 - SUCCEEDED：处理成功 - FAILED：处理失败 - CANCELED：已取消 
     * @param {string} [startTime] 起始时间。格式为yyyymmddhhmmss。必须是与时区无关的UTC时间，指定task_id时该参数无效 
     * @param {string} [endTime] 结束时间。格式为yyyymmddhhmmss。必须是与时区无关的UTC时间，指定task_id时该参数无效 
     * @param {number} [page] 分页编号。查询指定“task_id”时，该参数无效。  默认值：0。 
     * @param {number} [size] 每页记录数。查询指定“task_id”时，该参数无效。  取值范围：[1,100]。  默认值：10。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMediaProcessTask(listMediaProcessTaskRequest?: ListMediaProcessTaskRequest): Promise<ListMediaProcessTaskResponse> {
        const options = ParamCreater().listMediaProcessTask(listMediaProcessTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ## 典型场景 ##
     *   mpe通知mpc。
     * ## 接口功能 ##
     *   mpe调用此接口通知mpc转封装等结果。
     * ## 接口约束 ##
     *   无。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary mpe通知mpc
     * @param {MpeCallBackReq} createMpeCallBackRequestBody 创建mpe回调通知请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createMpeCallBack(createMpeCallBackRequest?: CreateMpeCallBackRequest): Promise<CreateMpeCallBackResponse> {
        const options = ParamCreater().createMpeCallBack(createMpeCallBackRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建视频增强模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建视频增强模板
     * @param {QualityEnhanceTemplate} [createQualityEnhanceTemplateRequestBody] 创建视频增强模板
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createQualityEnhanceTemplate(createQualityEnhanceTemplateRequest?: CreateQualityEnhanceTemplateRequest): Promise<CreateQualityEnhanceTemplateResponse> {
        const options = ParamCreater().createQualityEnhanceTemplate(createQualityEnhanceTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除用户视频增强模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除用户视频增强模板
     * @param {number} templateId 模板ID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteQualityEnhanceTemplate(deleteQualityEnhanceTemplateRequest?: DeleteQualityEnhanceTemplateRequest): Promise<DeleteQualityEnhanceTemplateResponse> {
        const options = ParamCreater().deleteQualityEnhanceTemplate(deleteQualityEnhanceTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询视频增强预置模板，返回所有结果。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询视频增强预置模板
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listQualityEnhanceDefaultTemplate(listQualityEnhanceDefaultTemplateRequest?: ListQualityEnhanceDefaultTemplateRequest): Promise<ListQualityEnhanceDefaultTemplateResponse> {
        const options = ParamCreater().listQualityEnhanceDefaultTemplate();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新视频增强模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新视频增强模板
     * @param {UpdateQualityEnhanceTemplateReq} updateQualityEnhanceTemplateRequestBody 更新视频增强模板
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateQualityEnhanceTemplate(updateQualityEnhanceTemplateRequest?: UpdateQualityEnhanceTemplateRequest): Promise<UpdateQualityEnhanceTemplateResponse> {
        const options = ParamCreater().updateQualityEnhanceTemplate(updateQualityEnhanceTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询媒资转码详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询媒资转码详情
     * @param {Array<string>} [taskId] 转码服务接受任务后产生的任务ID。一次最多10个 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTranscodeDetail(listTranscodeDetailRequest?: ListTranscodeDetailRequest): Promise<ListTranscodeDetailResponse> {
        const options = ParamCreater().listTranscodeDetail(listTranscodeDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 取消已下发的转封装任务，仅支持取消正在排队中的任务。。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 取消转封装任务
     * @param {string} taskId 任务ID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cancelRemuxTask(cancelRemuxTaskRequest?: CancelRemuxTaskRequest): Promise<CancelRemuxTaskResponse> {
        const options = ParamCreater().cancelRemuxTask(cancelRemuxTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建转封装任务，转换音视频文件的格式，但不改变其分辨率和码率。
     * 待转封装的媒资文件需要存储在与媒体处理服务同区域的OBS桶中，且该OBS桶已授权。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新建转封装任务
     * @param {CreateRemuxTaskReq} createRemuxTaskRequestBody 创建转封装请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRemuxTask(createRemuxTaskRequest?: CreateRemuxTaskRequest): Promise<CreateRemuxTaskResponse> {
        const options = ParamCreater().createRemuxTask(createRemuxTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 对失败的转封装任务进行重试。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重试转封装任务
     * @param {RemuxRetryReq} createRetryRemuxTaskRequestBody 转封装重试请求 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRetryRemuxTask(createRetryRemuxTaskRequest?: CreateRetryRemuxTaskRequest): Promise<CreateRetryRemuxTaskResponse> {
        const options = ParamCreater().createRetryRemuxTask(createRetryRemuxTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除转封装任务记录，只能删除状态为“已取消”，“转码成功”，“转码失败”的任务记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除转封装任务记录
     * @param {string} taskId 任务ID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRemuxTask(deleteRemuxTaskRequest?: DeleteRemuxTaskRequest): Promise<DeleteRemuxTaskResponse> {
        const options = ParamCreater().deleteRemuxTask(deleteRemuxTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询转封装任务状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询转封装任务
     * @param {Array<string>} [taskId] 任务ID。一次最多10个 
     * @param {'INIT' | 'WAITING' | 'PROCESSING' | 'SUCCEED' | 'FAILED' | 'CANCELED'} [status] 任务执行状态。  取值如下： - INIT：初始状态 - WAITING：等待启动 - PROCESSING：处理中 - SUCCEED：处理成功 - FAILED：处理失败 - CANCELED：已取消 
     * @param {string} [startTime] 起始时间。格式为yyyymmddhhmmss。必须是与时区无关的UTC时间，指定task_id时该参数无效 
     * @param {string} [endTime] 结束时间。格式为yyyymmddhhmmss。必须是与时区无关的UTC时间，指定task_id时该参数无效 
     * @param {string} [inputBucket] 源文件存储桶。 
     * @param {string} [inputObject] 源对象名称. 
     * @param {number} [page] 分页编号。查询指定“task_id”时，该参数无效。  默认值：0。 
     * @param {number} [size] 每页记录数。查询指定“task_id”时，该参数无效。  取值范围：[1,100]。  默认值：10。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRemuxTask(listRemuxTaskRequest?: ListRemuxTaskRequest): Promise<ListRemuxTaskResponse> {
        const options = ParamCreater().listRemuxTask(listRemuxTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 新建转码模板组，最多支持一进六出。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新建转码模板组
     * @param {TransTemplateGroup} createTemplateGroupRequestBody 新建转码模板组 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTemplateGroup(createTemplateGroupRequest?: CreateTemplateGroupRequest): Promise<CreateTemplateGroupResponse> {
        const options = ParamCreater().createTemplateGroup(createTemplateGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除转码模板组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除转码模板组
     * @param {string} groupId 模板组id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTemplateGroup(deleteTemplateGroupRequest?: DeleteTemplateGroupRequest): Promise<DeleteTemplateGroupResponse> {
        const options = ParamCreater().deleteTemplateGroup(deleteTemplateGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询转码模板组列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询转码模板组
     * @param {Array<string>} [groupId] 转码模板组ID，最多10个 
     * @param {Array<string>} [groupName] 转码模板组名，最多10个 
     * @param {number} [page] 分页编号。查询指定“group_id”时，该参数无效。  默认值：0。 
     * @param {number} [size] 每页记录数。取值范围：[1,100]，指定group_id时该参数无效。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTemplateGroup(listTemplateGroupRequest?: ListTemplateGroupRequest): Promise<ListTemplateGroupResponse> {
        const options = ParamCreater().listTemplateGroup(listTemplateGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改模板组接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新转码模板组
     * @param {ModifyTransTemplateGroup} updateTemplateGroupRequestBody 修改模板组 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTemplateGroup(updateTemplateGroupRequest?: UpdateTemplateGroupRequest): Promise<UpdateTemplateGroupResponse> {
        const options = ParamCreater().updateTemplateGroup(updateTemplateGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 租户查询媒体转码服务开通状态信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 租户查询服务开通状态信息
     * @param {string} [xLanguage] 客户端语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTenantAccessInfo(showTenantAccessInfoRequest?: ShowTenantAccessInfoRequest): Promise<ShowTenantAccessInfoResponse> {
        const options = ParamCreater().showTenantAccessInfo(showTenantAccessInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 租户开通媒体转码服务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 租户开通媒体转码服务
     * @param {string} [xLanguage] 客户端语言
     * @param {UpdateTenantAccessInfoReq} [updateTenantAccessInfoRequestBody] 租户开通请求体 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTenantAccessInfo(updateTenantAccessInfoRequest?: UpdateTenantAccessInfoRequest): Promise<UpdateTenantAccessInfoResponse> {
        const options = ParamCreater().updateTenantAccessInfo(updateTenantAccessInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 新建截图任务，视频截图将从首帧开始，按设置的时间间隔截图，最后截取末帧。
     * 待截图的视频文件需要存储在与媒体处理服务同区域的OBS桶中，且该OBS桶已授权。
     * 
     * 约束：
     *   暂只支持生成JPG格式的图片文件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新建截图任务
     * @param {CreateThumbReq} createThumbnailsTaskRequestBody 创建截图任务请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createThumbnailsTask(createThumbnailsTaskRequest?: CreateThumbnailsTaskRequest): Promise<CreateThumbnailsTaskResponse> {
        const options = ParamCreater().createThumbnailsTask(createThumbnailsTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 取消已下发截图任务。
     * 只能取消已接受尚在队列中等待处理的任务，已完成或正在执行阶段的任务不能取消。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 取消截图任务
     * @param {string} taskId 任务ID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteThumbnailsTask(deleteThumbnailsTaskRequest?: DeleteThumbnailsTaskRequest): Promise<DeleteThumbnailsTaskResponse> {
        const options = ParamCreater().deleteThumbnailsTask(deleteThumbnailsTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询截图任务状态。返回任务执行结果，包括状态、输入、输出等信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询截图任务
     * @param {string} [xLanguage] 客户端语言
     * @param {Array<string>} [taskId] 截图服务接受任务后产生的任务ID。一次最多10个 
     * @param {'WAITING' | 'PROCESSING' | 'SUCCEEDED' | 'FAILED' | 'CANCELED'} [status] 任务状态。  取值如下： - WAITING: 等待启动 - PROCESSING：截图中 - SUCCEEDED：截图成功 - FAILED：截图失败 - CANCELED：已删除 
     * @param {string} [startTime] 起始时间。格式为yyyymmddhhmmss。必须是与时区无关的UTC时间，指定task_id时该参数无效 
     * @param {string} [endTime] 结束时间。格式为yyyymmddhhmmss。必须是与时区无关的UTC时间，指定task_id时该参数无效 
     * @param {number} [page] 分页编号。查询指定“task_id”时，该参数无效。  默认值：0。 
     * @param {number} [size] 每页记录数。查询指定“task_id”时，该参数无效。  取值范围：[1,100]。  默认值：10。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listThumbnailsTask(listThumbnailsTaskRequest?: ListThumbnailsTaskRequest): Promise<ListThumbnailsTaskResponse> {
        const options = ParamCreater().listThumbnailsTask(listThumbnailsTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 新建转码任务可以将视频进行转码，并在转码过程中压制水印、视频截图等。视频转码前需要配置转码模板。
     * 待转码的音视频需要存储在与媒体处理服务同区域的OBS桶中，且该OBS桶已授权。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新建转码任务
     * @param {CreateTranscodingReq} [createTranscodingTaskRequestBody] 创建转码任务
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTranscodingTask(createTranscodingTaskRequest?: CreateTranscodingTaskRequest): Promise<CreateTranscodingTaskResponse> {
        const options = ParamCreater().createTranscodingTask(createTranscodingTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 取消已下发转码任务。
     * 只能取消正在转码任务队列中排队的转码任务。已开始转码或已完成的转码任务不能取消。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 取消转码任务
     * @param {number} taskId 创建转码任务成功时返回的任务ID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTranscodingTask(deleteTranscodingTaskRequest?: DeleteTranscodingTaskRequest): Promise<DeleteTranscodingTaskResponse> {
        const options = ParamCreater().deleteTranscodingTask(deleteTranscodingTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除转码任务记录，只能删除状态为“已取消”，“转码成功”，“转码失败”的转码任务记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除转码任务记录
     * @param {number} taskId 任务ID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTranscodingTaskByConsole(deleteTranscodingTaskByConsoleRequest?: DeleteTranscodingTaskByConsoleRequest): Promise<DeleteTranscodingTaskByConsoleResponse> {
        const options = ParamCreater().deleteTranscodingTaskByConsole(deleteTranscodingTaskByConsoleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询最近一周，最近一月或者自定义时间段的“转码时长”，“调用转码API次数”。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询点播概览信息
     * @param {string} startTime 开始时间。格式为yyyymmdd。必须是与时区无关的UTC时间。 
     * @param {string} endTime 结束时间。格式为yyyymmdd。必须是与时区无关的UTC时间。 
     * @param {string} statType 支持的参数类型 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listStatSummary(listStatSummaryRequest?: ListStatSummaryRequest): Promise<ListStatSummaryResponse> {
        const options = ParamCreater().listStatSummary(listStatSummaryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询转码任务状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询转码任务
     * @param {string} [xLanguage] 客户端语言
     * @param {Array<number>} [taskId] 转码服务接受任务后产生的任务ID。一次最多10个 
     * @param {string} [status] 任务执行状态。  取值如下： - WAITING：等待启动 - TRANSCODING：转码中 - SUCCEEDED：转码成功 - FAILED：转码失败 - CANCELED：已删除 - NEED_TO_BE_AUDIT：片源待审核 
     * @param {string} [startTime] 起始时间  格式为yyyymmddhhmmss。必须是与时区无关的UTC时间，指定task_id时该参数无效 
     * @param {string} [endTime] 结束时间  格式为yyyymmddhhmmss。必须是与时区无关的UTC时间，指定task_id时该参数无效 
     * @param {number} [page] 分页编号。查询指定“task_id”时，该参数无效。  默认值：0。 
     * @param {number} [size] 每页记录数。查询指定“task_id”时，该参数无效。  取值范围：[1,100]。  默认值：10。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTranscodingTask(listTranscodingTaskRequest?: ListTranscodingTaskRequest): Promise<ListTranscodingTaskResponse> {
        const options = ParamCreater().listTranscodingTask(listTranscodingTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 新建转码模板，采用自定义的模板转码。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新建转码模板
     * @param {TransTemplate} [createTransTemplateRequestBody] 创建用户自定义转码配置模板
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTransTemplate(createTransTemplateRequest?: CreateTransTemplateRequest): Promise<CreateTransTemplateResponse> {
        const options = ParamCreater().createTransTemplate(createTransTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除转码模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除转码模板
     * @param {number} templateId 自定义转码模板ID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTemplate(deleteTemplateRequest?: DeleteTemplateRequest): Promise<DeleteTemplateResponse> {
        const options = ParamCreater().deleteTemplate(deleteTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户自定义转码配置模板。
     * 支持指定模板ID查询，或分页全量查询。转码配置模板ID，最多10个。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询转码模板
     * @param {Array<number>} [templateId] 自定义转码模板ID，最多10个 
     * @param {number} [page] 分页编号。查询指定“task_id”时，该参数无效。  默认值：0。 
     * @param {number} [size] 每页记录数。取值范围：[1,100]，指定template_id时该参数无效 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTemplate(listTemplateRequest?: ListTemplateRequest): Promise<ListTemplateResponse> {
        const options = ParamCreater().listTemplate(listTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新转码模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新转码模板
     * @param {ModifyTransTemplateReq} [updateTransTemplateRequestBody] 更新用户自定义转码配置模板
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTransTemplate(updateTransTemplateRequest?: UpdateTransTemplateRequest): Promise<UpdateTransTemplateResponse> {
        const options = ParamCreater().updateTransTemplate(updateTransTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 自定义水印模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新建水印模板
     * @param {WatermarkTemplate} [createWatermarkTemplateRequestBody] 创建用户自定义水印配置模板
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createWatermarkTemplate(createWatermarkTemplateRequest?: CreateWatermarkTemplateRequest): Promise<CreateWatermarkTemplateResponse> {
        const options = ParamCreater().createWatermarkTemplate(createWatermarkTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除自定义水印模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除水印模板
     * @param {number} templateId 水印模板ID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteWatermarkTemplate(deleteWatermarkTemplateRequest?: DeleteWatermarkTemplateRequest): Promise<DeleteWatermarkTemplateResponse> {
        const options = ParamCreater().deleteWatermarkTemplate(deleteWatermarkTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询自定义水印模板。支持指定模板ID查询，或分页全量查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询水印模板
     * @param {Array<number>} [templateId] 水印模板ID，最多10个 
     * @param {number} [page] 分页编号。查询指定“task_id”时，该参数无效。  默认值：0。 
     * @param {number} [size] 每页记录数。取值范围：[1,100]，指定template_id时该参数无效 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listWatermarkTemplate(listWatermarkTemplateRequest?: ListWatermarkTemplateRequest): Promise<ListWatermarkTemplateResponse> {
        const options = ParamCreater().listWatermarkTemplate(listWatermarkTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新自定义水印模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新水印模板
     * @param {WatermarkTemplate} [updateWatermarkTemplateRequestBody] 更新用户自定义水印配置模板
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateWatermarkTemplate(updateWatermarkTemplateRequest?: UpdateWatermarkTemplateRequest): Promise<UpdateWatermarkTemplateResponse> {
        const options = ParamCreater().updateWatermarkTemplate(updateWatermarkTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 创建动图任务，用于将完整的视频文件或视频文件中的一部分转换为动态图文件，暂只支持输出GIF文件。
         * 待转动图的视频文件需要存储在与媒体处理服务同区域的OBS桶中，且该OBS桶已授权。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAnimatedGraphicsTask(createAnimatedGraphicsTaskRequest?: CreateAnimatedGraphicsTaskRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/animated-graphics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createAnimatedGraphicsTaskRequest !== null && createAnimatedGraphicsTaskRequest !== undefined) {
                if (createAnimatedGraphicsTaskRequest instanceof CreateAnimatedGraphicsTaskRequest) {
                    body = createAnimatedGraphicsTaskRequest.body
                } else {
                    body = createAnimatedGraphicsTaskRequest['body'];
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
         * 取消已下发的生成动图任务，仅支持取消正在排队中的任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAnimatedGraphicsTask(deleteAnimatedGraphicsTaskRequest?: DeleteAnimatedGraphicsTaskRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/animated-graphics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let taskId;

            if (deleteAnimatedGraphicsTaskRequest !== null && deleteAnimatedGraphicsTaskRequest !== undefined) {
                if (deleteAnimatedGraphicsTaskRequest instanceof DeleteAnimatedGraphicsTaskRequest) {
                    taskId = deleteAnimatedGraphicsTaskRequest.taskId;
                } else {
                    taskId = deleteAnimatedGraphicsTaskRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
                throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling deleteAnimatedGraphicsTask.');
            }
            if (taskId !== null && taskId !== undefined) {
                localVarQueryParameter['task_id'] = taskId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询动图任务的状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAnimatedGraphicsTask(listAnimatedGraphicsTaskRequest?: ListAnimatedGraphicsTaskRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/animated-graphics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xLanguage;
            
            let taskId;
            
            let status;
            
            let startTime;
            
            let endTime;
            
            let page;
            
            let size;

            if (listAnimatedGraphicsTaskRequest !== null && listAnimatedGraphicsTaskRequest !== undefined) {
                if (listAnimatedGraphicsTaskRequest instanceof ListAnimatedGraphicsTaskRequest) {
                    xLanguage = listAnimatedGraphicsTaskRequest.xLanguage;
                    taskId = listAnimatedGraphicsTaskRequest.taskId;
                    status = listAnimatedGraphicsTaskRequest.status;
                    startTime = listAnimatedGraphicsTaskRequest.startTime;
                    endTime = listAnimatedGraphicsTaskRequest.endTime;
                    page = listAnimatedGraphicsTaskRequest.page;
                    size = listAnimatedGraphicsTaskRequest.size;
                } else {
                    xLanguage = listAnimatedGraphicsTaskRequest['x-language'];
                    taskId = listAnimatedGraphicsTaskRequest['task_id'];
                    status = listAnimatedGraphicsTaskRequest['status'];
                    startTime = listAnimatedGraphicsTaskRequest['start_time'];
                    endTime = listAnimatedGraphicsTaskRequest['end_time'];
                    page = listAnimatedGraphicsTaskRequest['page'];
                    size = listAnimatedGraphicsTaskRequest['size'];
                }
            }

        
            if (taskId !== null && taskId !== undefined) {
                localVarQueryParameter['task_id'] = taskId;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (size !== null && size !== undefined) {
                localVarQueryParameter['size'] = size;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['x-language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 开启或关闭\&quot;委托授权\&quot;, 开启后，媒体处理服务将拥有您所有桶的读写权限，子账号不支持委托授权。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAgenciesTask(createAgenciesTaskRequest?: CreateAgenciesTaskRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/agencies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createAgenciesTaskRequest !== null && createAgenciesTaskRequest !== undefined) {
                if (createAgenciesTaskRequest instanceof CreateAgenciesTaskRequest) {
                    body = createAgenciesTaskRequest.body
                } else {
                    body = createAgenciesTaskRequest['body'];
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
         * 请求查询自己创建的指定的桶区域位置的桶列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAllBuckets() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/buckets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询桶里的object。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAllObsObjList(listAllObsObjListRequest?: ListAllObsObjListRequest) {
            const options = {
                method: "GET",
                url: "/v1.0-ext/{project_id}/objects",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let bucket;
            
            let prefix;
            
            let type;

            if (listAllObsObjListRequest !== null && listAllObsObjListRequest !== undefined) {
                if (listAllObsObjListRequest instanceof ListAllObsObjListRequest) {
                    bucket = listAllObsObjListRequest.bucket;
                    prefix = listAllObsObjListRequest.prefix;
                    type = listAllObsObjListRequest.type;
                } else {
                    bucket = listAllObsObjListRequest['bucket'];
                    prefix = listAllObsObjListRequest['prefix'];
                    type = listAllObsObjListRequest['type'];
                }
            }

        
            if (bucket === null || bucket === undefined) {
                throw new RequiredError('bucket','Required parameter bucket was null or undefined when calling listAllObsObjList.');
            }
            if (bucket !== null && bucket !== undefined) {
                localVarQueryParameter['bucket'] = bucket;
            }
            if (prefix !== null && prefix !== undefined) {
                localVarQueryParameter['prefix'] = prefix;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询消息订阅功能板块, SMN主题的所有订阅事件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNotifyEvent() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/notification/event",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询消息订阅功能板块, SMN主题的订阅事件的启用状态和订阅消息的启用状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNotifySmnTopicConfig() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/notification",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 配置转码服务端事件通知。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        notifySmnTopicConfig(notifySmnTopicConfigRequest?: NotifySmnTopicConfigRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/notification",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (notifySmnTopicConfigRequest !== null && notifySmnTopicConfigRequest !== undefined) {
                if (notifySmnTopicConfigRequest instanceof NotifySmnTopicConfigRequest) {
                    body = notifySmnTopicConfigRequest.body
                } else {
                    body = notifySmnTopicConfigRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询创建委托任务状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAgenciesTask() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/agencies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 对OBS桶进行授权或取消授权，媒体处理服务仅拥有已授权桶的读写权限。（暂不支持KMS加密桶的授权）
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateBucketAuthorized(updateBucketAuthorizedRequest?: UpdateBucketAuthorizedRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/authority",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateBucketAuthorizedRequest !== null && updateBucketAuthorizedRequest !== undefined) {
                if (updateBucketAuthorizedRequest instanceof UpdateBucketAuthorizedRequest) {
                    body = updateBucketAuthorizedRequest.body
                } else {
                    body = updateBucketAuthorizedRequest['body'];
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
         * 创建剪辑任务，用于将多个视频文件进行裁剪成多个视频分段，并且可以把这些视频分段合并成一个视频，剪切和拼接功能可以单独使用。
         * 待剪辑的视频文件需要存储在与媒体处理服务同区域的OBS桶中，且该OBS桶已授权。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createEditingJob(createEditingJobRequest?: CreateEditingJobRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/editing/jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createEditingJobRequest !== null && createEditingJobRequest !== undefined) {
                if (createEditingJobRequest instanceof CreateEditingJobRequest) {
                    body = createEditingJobRequest.body
                } else {
                    body = createEditingJobRequest['body'];
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
         * 取消已下发的生成剪辑任务，仅支持取消正在排队中的任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteEditingJob(deleteEditingJobRequest?: DeleteEditingJobRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/editing/jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;

            if (deleteEditingJobRequest !== null && deleteEditingJobRequest !== undefined) {
                if (deleteEditingJobRequest instanceof DeleteEditingJobRequest) {
                    jobId = deleteEditingJobRequest.jobId;
                } else {
                    jobId = deleteEditingJobRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
                throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling deleteEditingJob.');
            }
            if (jobId !== null && jobId !== undefined) {
                localVarQueryParameter['job_id'] = jobId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询剪辑任务的状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEditingJob(listEditingJobRequest?: ListEditingJobRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/editing/jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xLanguage;
            
            let jobId;
            
            let status;
            
            let startTime;
            
            let endTime;
            
            let page;
            
            let size;

            if (listEditingJobRequest !== null && listEditingJobRequest !== undefined) {
                if (listEditingJobRequest instanceof ListEditingJobRequest) {
                    xLanguage = listEditingJobRequest.xLanguage;
                    jobId = listEditingJobRequest.jobId;
                    status = listEditingJobRequest.status;
                    startTime = listEditingJobRequest.startTime;
                    endTime = listEditingJobRequest.endTime;
                    page = listEditingJobRequest.page;
                    size = listEditingJobRequest.size;
                } else {
                    xLanguage = listEditingJobRequest['x-language'];
                    jobId = listEditingJobRequest['job_id'];
                    status = listEditingJobRequest['status'];
                    startTime = listEditingJobRequest['start_time'];
                    endTime = listEditingJobRequest['end_time'];
                    page = listEditingJobRequest['page'];
                    size = listEditingJobRequest['size'];
                }
            }

        
            if (jobId !== null && jobId !== undefined) {
                localVarQueryParameter['job_id'] = jobId;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (size !== null && size !== undefined) {
                localVarQueryParameter['size'] = size;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['x-language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建视频解析任务，解析视频元数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createExtractTask(createExtractTaskRequest?: CreateExtractTaskRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/extract-metadata",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createExtractTaskRequest !== null && createExtractTaskRequest !== undefined) {
                if (createExtractTaskRequest instanceof CreateExtractTaskRequest) {
                    body = createExtractTaskRequest.body
                } else {
                    body = createExtractTaskRequest['body'];
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
         * 取消已下发的视频解析任务，仅支持取消正在排队中的任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteExtractTask(deleteExtractTaskRequest?: DeleteExtractTaskRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/extract-metadata",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let taskId;

            if (deleteExtractTaskRequest !== null && deleteExtractTaskRequest !== undefined) {
                if (deleteExtractTaskRequest instanceof DeleteExtractTaskRequest) {
                    taskId = deleteExtractTaskRequest.taskId;
                } else {
                    taskId = deleteExtractTaskRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
                throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling deleteExtractTask.');
            }
            if (taskId !== null && taskId !== undefined) {
                localVarQueryParameter['task_id'] = taskId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询解析任务的状态和结果。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listExtractTask(listExtractTaskRequest?: ListExtractTaskRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/extract-metadata",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xLanguage;
            
            let taskId;
            
            let status;
            
            let startTime;
            
            let endTime;
            
            let page;
            
            let size;

            if (listExtractTaskRequest !== null && listExtractTaskRequest !== undefined) {
                if (listExtractTaskRequest instanceof ListExtractTaskRequest) {
                    xLanguage = listExtractTaskRequest.xLanguage;
                    taskId = listExtractTaskRequest.taskId;
                    status = listExtractTaskRequest.status;
                    startTime = listExtractTaskRequest.startTime;
                    endTime = listExtractTaskRequest.endTime;
                    page = listExtractTaskRequest.page;
                    size = listExtractTaskRequest.size;
                } else {
                    xLanguage = listExtractTaskRequest['x-language'];
                    taskId = listExtractTaskRequest['task_id'];
                    status = listExtractTaskRequest['status'];
                    startTime = listExtractTaskRequest['start_time'];
                    endTime = listExtractTaskRequest['end_time'];
                    page = listExtractTaskRequest['page'];
                    size = listExtractTaskRequest['size'];
                }
            }

        
            if (taskId !== null && taskId !== undefined) {
                localVarQueryParameter['task_id'] = taskId;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (size !== null && size !== undefined) {
                localVarQueryParameter['size'] = size;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['x-language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ## 典型场景 ##
         *   合并音频多声道文件任务、重置音频文件声轨任务上报结果接口。
         * ## 接口功能 ##
         *   合并音频多声道文件任务、重置音频文件声轨任务上报结果接口。
         * ## 接口约束 ##
         *   无。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createMbTasksReport(createMbTasksReportRequest?: CreateMbTasksReportRequest) {
            const options = {
                method: "PUT",
                url: "/v1/mediabox/tasks/report",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createMbTasksReportRequest !== null && createMbTasksReportRequest !== undefined) {
                if (createMbTasksReportRequest instanceof CreateMbTasksReportRequest) {
                    body = createMbTasksReportRequest.body
                } else {
                    body = createMbTasksReportRequest['body'];
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
         * 创建声道合并任务，合并声道任务支持将每个声道各放一个文件中的片源，合并为单个音频文件。
         * 执行合并声道的源音频文件需要存储在与媒体处理服务同区域的OBS桶中，且该OBS桶已授权。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createMergeChannelsTask(createMergeChannelsTaskRequest?: CreateMergeChannelsTaskRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/audio/services/merge_channels/task",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createMergeChannelsTaskRequest !== null && createMergeChannelsTaskRequest !== undefined) {
                if (createMergeChannelsTaskRequest instanceof CreateMergeChannelsTaskRequest) {
                    body = createMergeChannelsTaskRequest.body
                } else {
                    body = createMergeChannelsTaskRequest['body'];
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
         * 创建音轨重置任务，重置音轨任务支持按人工指定关系声道layout，语言标签，转封装片源，使其满足转码输入。
         * 执行音轨重置的源音频文件需要存储在与媒体处理服务同区域的OBS桶中，且该OBS桶已授权。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createResetTracksTask(createResetTracksTaskRequest?: CreateResetTracksTaskRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/audio/services/reset_tracks/task",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createResetTracksTaskRequest !== null && createResetTracksTaskRequest !== undefined) {
                if (createResetTracksTaskRequest instanceof CreateResetTracksTaskRequest) {
                    body = createResetTracksTaskRequest.body
                } else {
                    body = createResetTracksTaskRequest['body'];
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
         * 取消合并音频多声道文件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteMergeChannelsTask(deleteMergeChannelsTaskRequest?: DeleteMergeChannelsTaskRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/audio/services/merge_channels/task",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let taskId;

            if (deleteMergeChannelsTaskRequest !== null && deleteMergeChannelsTaskRequest !== undefined) {
                if (deleteMergeChannelsTaskRequest instanceof DeleteMergeChannelsTaskRequest) {
                    taskId = deleteMergeChannelsTaskRequest.taskId;
                } else {
                    taskId = deleteMergeChannelsTaskRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
                throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling deleteMergeChannelsTask.');
            }
            if (taskId !== null && taskId !== undefined) {
                localVarQueryParameter['task_id'] = taskId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 取消重置音频文件声轨任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteResetTracksTask(deleteResetTracksTaskRequest?: DeleteResetTracksTaskRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/audio/services/reset_tracks/task",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let taskId;

            if (deleteResetTracksTaskRequest !== null && deleteResetTracksTaskRequest !== undefined) {
                if (deleteResetTracksTaskRequest instanceof DeleteResetTracksTaskRequest) {
                    taskId = deleteResetTracksTaskRequest.taskId;
                } else {
                    taskId = deleteResetTracksTaskRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
                throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling deleteResetTracksTask.');
            }
            if (taskId !== null && taskId !== undefined) {
                localVarQueryParameter['task_id'] = taskId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询声道合并任务的状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMergeChannelsTask(listMergeChannelsTaskRequest?: ListMergeChannelsTaskRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/audio/services/merge_channels/task",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let taskId;
            
            let status;
            
            let startTime;
            
            let endTime;
            
            let page;
            
            let size;

            if (listMergeChannelsTaskRequest !== null && listMergeChannelsTaskRequest !== undefined) {
                if (listMergeChannelsTaskRequest instanceof ListMergeChannelsTaskRequest) {
                    taskId = listMergeChannelsTaskRequest.taskId;
                    status = listMergeChannelsTaskRequest.status;
                    startTime = listMergeChannelsTaskRequest.startTime;
                    endTime = listMergeChannelsTaskRequest.endTime;
                    page = listMergeChannelsTaskRequest.page;
                    size = listMergeChannelsTaskRequest.size;
                } else {
                    taskId = listMergeChannelsTaskRequest['task_id'];
                    status = listMergeChannelsTaskRequest['status'];
                    startTime = listMergeChannelsTaskRequest['start_time'];
                    endTime = listMergeChannelsTaskRequest['end_time'];
                    page = listMergeChannelsTaskRequest['page'];
                    size = listMergeChannelsTaskRequest['size'];
                }
            }

        
            if (taskId !== null && taskId !== undefined) {
                localVarQueryParameter['task_id'] = taskId;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (size !== null && size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询音轨重置任务的状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listResetTracksTask(listResetTracksTaskRequest?: ListResetTracksTaskRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/audio/services/reset_tracks/task",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let taskId;
            
            let status;
            
            let startTime;
            
            let endTime;
            
            let page;
            
            let size;

            if (listResetTracksTaskRequest !== null && listResetTracksTaskRequest !== undefined) {
                if (listResetTracksTaskRequest instanceof ListResetTracksTaskRequest) {
                    taskId = listResetTracksTaskRequest.taskId;
                    status = listResetTracksTaskRequest.status;
                    startTime = listResetTracksTaskRequest.startTime;
                    endTime = listResetTracksTaskRequest.endTime;
                    page = listResetTracksTaskRequest.page;
                    size = listResetTracksTaskRequest.size;
                } else {
                    taskId = listResetTracksTaskRequest['task_id'];
                    status = listResetTracksTaskRequest['status'];
                    startTime = listResetTracksTaskRequest['start_time'];
                    endTime = listResetTracksTaskRequest['end_time'];
                    page = listResetTracksTaskRequest['page'];
                    size = listResetTracksTaskRequest['size'];
                }
            }

        
            if (taskId !== null && taskId !== undefined) {
                localVarQueryParameter['task_id'] = taskId;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (size !== null && size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ## 典型场景 ##
         *   创建视频增强任务。
         * 
         * ## 接口功能 ##
         *   创建视频增强任务。
         * 
         * ## 接口约束 ##
         *   无。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createMediaProcessTask(createMediaProcessTaskRequest?: CreateMediaProcessTaskRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/enhancements",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createMediaProcessTaskRequest !== null && createMediaProcessTaskRequest !== undefined) {
                if (createMediaProcessTaskRequest instanceof CreateMediaProcessTaskRequest) {
                    body = createMediaProcessTaskRequest.body
                } else {
                    body = createMediaProcessTaskRequest['body'];
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
         * ## 典型场景 ##
         *   取消视频增强任务。
         * 
         * ## 接口功能 ##
         *   取消视频增强任务。
         * 
         * ## 接口约束 ##
         *   仅可删除正在排队中的任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteMediaProcessTask(deleteMediaProcessTaskRequest?: DeleteMediaProcessTaskRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/enhancements",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let taskId;

            if (deleteMediaProcessTaskRequest !== null && deleteMediaProcessTaskRequest !== undefined) {
                if (deleteMediaProcessTaskRequest instanceof DeleteMediaProcessTaskRequest) {
                    taskId = deleteMediaProcessTaskRequest.taskId;
                } else {
                    taskId = deleteMediaProcessTaskRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
                throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling deleteMediaProcessTask.');
            }
            if (taskId !== null && taskId !== undefined) {
                localVarQueryParameter['task_id'] = taskId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ## 典型场景 ##
         *   查询视频增强任务。
         * 
         * ## 接口功能 ##
         *   查询视频增强任务。
         * 
         * ## 接口约束 ##
         *   无。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMediaProcessTask(listMediaProcessTaskRequest?: ListMediaProcessTaskRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/enhancements",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let taskId;
            
            let status;
            
            let startTime;
            
            let endTime;
            
            let page;
            
            let size;

            if (listMediaProcessTaskRequest !== null && listMediaProcessTaskRequest !== undefined) {
                if (listMediaProcessTaskRequest instanceof ListMediaProcessTaskRequest) {
                    taskId = listMediaProcessTaskRequest.taskId;
                    status = listMediaProcessTaskRequest.status;
                    startTime = listMediaProcessTaskRequest.startTime;
                    endTime = listMediaProcessTaskRequest.endTime;
                    page = listMediaProcessTaskRequest.page;
                    size = listMediaProcessTaskRequest.size;
                } else {
                    taskId = listMediaProcessTaskRequest['task_id'];
                    status = listMediaProcessTaskRequest['status'];
                    startTime = listMediaProcessTaskRequest['start_time'];
                    endTime = listMediaProcessTaskRequest['end_time'];
                    page = listMediaProcessTaskRequest['page'];
                    size = listMediaProcessTaskRequest['size'];
                }
            }

        
            if (taskId !== null && taskId !== undefined) {
                localVarQueryParameter['task_id'] = taskId;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (size !== null && size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ## 典型场景 ##
         *   mpe通知mpc。
         * ## 接口功能 ##
         *   mpe调用此接口通知mpc转封装等结果。
         * ## 接口约束 ##
         *   无。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createMpeCallBack(createMpeCallBackRequest?: CreateMpeCallBackRequest) {
            const options = {
                method: "POST",
                url: "/v1/mpe/notification",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createMpeCallBackRequest !== null && createMpeCallBackRequest !== undefined) {
                if (createMpeCallBackRequest instanceof CreateMpeCallBackRequest) {
                    body = createMpeCallBackRequest.body
                } else {
                    body = createMpeCallBackRequest['body'];
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
         * 创建视频增强模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createQualityEnhanceTemplate(createQualityEnhanceTemplateRequest?: CreateQualityEnhanceTemplateRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/template/qualityenhance",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createQualityEnhanceTemplateRequest !== null && createQualityEnhanceTemplateRequest !== undefined) {
                if (createQualityEnhanceTemplateRequest instanceof CreateQualityEnhanceTemplateRequest) {
                    body = createQualityEnhanceTemplateRequest.body
                } else {
                    body = createQualityEnhanceTemplateRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除用户视频增强模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteQualityEnhanceTemplate(deleteQualityEnhanceTemplateRequest?: DeleteQualityEnhanceTemplateRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/template/qualityenhance",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let templateId;

            if (deleteQualityEnhanceTemplateRequest !== null && deleteQualityEnhanceTemplateRequest !== undefined) {
                if (deleteQualityEnhanceTemplateRequest instanceof DeleteQualityEnhanceTemplateRequest) {
                    templateId = deleteQualityEnhanceTemplateRequest.templateId;
                } else {
                    templateId = deleteQualityEnhanceTemplateRequest['template_id'];
                }
            }

        
            if (templateId === null || templateId === undefined) {
                throw new RequiredError('templateId','Required parameter templateId was null or undefined when calling deleteQualityEnhanceTemplate.');
            }
            if (templateId !== null && templateId !== undefined) {
                localVarQueryParameter['template_id'] = templateId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询视频增强预置模板，返回所有结果。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listQualityEnhanceDefaultTemplate() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/template/qualityenhance/default",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新视频增强模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateQualityEnhanceTemplate(updateQualityEnhanceTemplateRequest?: UpdateQualityEnhanceTemplateRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/template/qualityenhance",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateQualityEnhanceTemplateRequest !== null && updateQualityEnhanceTemplateRequest !== undefined) {
                if (updateQualityEnhanceTemplateRequest instanceof UpdateQualityEnhanceTemplateRequest) {
                    body = updateQualityEnhanceTemplateRequest.body
                } else {
                    body = updateQualityEnhanceTemplateRequest['body'];
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
         * 查询媒资转码详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTranscodeDetail(listTranscodeDetailRequest?: ListTranscodeDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/transcodings/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let taskId;

            if (listTranscodeDetailRequest !== null && listTranscodeDetailRequest !== undefined) {
                if (listTranscodeDetailRequest instanceof ListTranscodeDetailRequest) {
                    taskId = listTranscodeDetailRequest.taskId;
                } else {
                    taskId = listTranscodeDetailRequest['task_id'];
                }
            }

        
            if (taskId !== null && taskId !== undefined) {
                localVarQueryParameter['task_id'] = taskId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 取消已下发的转封装任务，仅支持取消正在排队中的任务。。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        cancelRemuxTask(cancelRemuxTaskRequest?: CancelRemuxTaskRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/remux",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let taskId;

            if (cancelRemuxTaskRequest !== null && cancelRemuxTaskRequest !== undefined) {
                if (cancelRemuxTaskRequest instanceof CancelRemuxTaskRequest) {
                    taskId = cancelRemuxTaskRequest.taskId;
                } else {
                    taskId = cancelRemuxTaskRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
                throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling cancelRemuxTask.');
            }
            if (taskId !== null && taskId !== undefined) {
                localVarQueryParameter['task_id'] = taskId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建转封装任务，转换音视频文件的格式，但不改变其分辨率和码率。
         * 待转封装的媒资文件需要存储在与媒体处理服务同区域的OBS桶中，且该OBS桶已授权。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRemuxTask(createRemuxTaskRequest?: CreateRemuxTaskRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/remux",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createRemuxTaskRequest !== null && createRemuxTaskRequest !== undefined) {
                if (createRemuxTaskRequest instanceof CreateRemuxTaskRequest) {
                    body = createRemuxTaskRequest.body
                } else {
                    body = createRemuxTaskRequest['body'];
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
         * 对失败的转封装任务进行重试。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRetryRemuxTask(createRetryRemuxTaskRequest?: CreateRetryRemuxTaskRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/remux",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createRetryRemuxTaskRequest !== null && createRetryRemuxTaskRequest !== undefined) {
                if (createRetryRemuxTaskRequest instanceof CreateRetryRemuxTaskRequest) {
                    body = createRetryRemuxTaskRequest.body
                } else {
                    body = createRetryRemuxTaskRequest['body'];
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
         * 删除转封装任务记录，只能删除状态为“已取消”，“转码成功”，“转码失败”的任务记录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRemuxTask(deleteRemuxTaskRequest?: DeleteRemuxTaskRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/remux/task",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let taskId;

            if (deleteRemuxTaskRequest !== null && deleteRemuxTaskRequest !== undefined) {
                if (deleteRemuxTaskRequest instanceof DeleteRemuxTaskRequest) {
                    taskId = deleteRemuxTaskRequest.taskId;
                } else {
                    taskId = deleteRemuxTaskRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
                throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling deleteRemuxTask.');
            }
            if (taskId !== null && taskId !== undefined) {
                localVarQueryParameter['task_id'] = taskId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询转封装任务状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRemuxTask(listRemuxTaskRequest?: ListRemuxTaskRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/remux",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let taskId;
            
            let status;
            
            let startTime;
            
            let endTime;
            
            let inputBucket;
            
            let inputObject;
            
            let page;
            
            let size;

            if (listRemuxTaskRequest !== null && listRemuxTaskRequest !== undefined) {
                if (listRemuxTaskRequest instanceof ListRemuxTaskRequest) {
                    taskId = listRemuxTaskRequest.taskId;
                    status = listRemuxTaskRequest.status;
                    startTime = listRemuxTaskRequest.startTime;
                    endTime = listRemuxTaskRequest.endTime;
                    inputBucket = listRemuxTaskRequest.inputBucket;
                    inputObject = listRemuxTaskRequest.inputObject;
                    page = listRemuxTaskRequest.page;
                    size = listRemuxTaskRequest.size;
                } else {
                    taskId = listRemuxTaskRequest['task_id'];
                    status = listRemuxTaskRequest['status'];
                    startTime = listRemuxTaskRequest['start_time'];
                    endTime = listRemuxTaskRequest['end_time'];
                    inputBucket = listRemuxTaskRequest['input_bucket'];
                    inputObject = listRemuxTaskRequest['input_object'];
                    page = listRemuxTaskRequest['page'];
                    size = listRemuxTaskRequest['size'];
                }
            }

        
            if (taskId !== null && taskId !== undefined) {
                localVarQueryParameter['task_id'] = taskId;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (inputBucket !== null && inputBucket !== undefined) {
                localVarQueryParameter['input_bucket'] = inputBucket;
            }
            if (inputObject !== null && inputObject !== undefined) {
                localVarQueryParameter['input_object'] = inputObject;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (size !== null && size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 新建转码模板组，最多支持一进六出。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTemplateGroup(createTemplateGroupRequest?: CreateTemplateGroupRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/template_group/transcodings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createTemplateGroupRequest !== null && createTemplateGroupRequest !== undefined) {
                if (createTemplateGroupRequest instanceof CreateTemplateGroupRequest) {
                    body = createTemplateGroupRequest.body
                } else {
                    body = createTemplateGroupRequest['body'];
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
         * 删除转码模板组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTemplateGroup(deleteTemplateGroupRequest?: DeleteTemplateGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/template_group/transcodings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let groupId;

            if (deleteTemplateGroupRequest !== null && deleteTemplateGroupRequest !== undefined) {
                if (deleteTemplateGroupRequest instanceof DeleteTemplateGroupRequest) {
                    groupId = deleteTemplateGroupRequest.groupId;
                } else {
                    groupId = deleteTemplateGroupRequest['group_id'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
                throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling deleteTemplateGroup.');
            }
            if (groupId !== null && groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询转码模板组列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTemplateGroup(listTemplateGroupRequest?: ListTemplateGroupRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/template_group/transcodings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let groupId;
            
            let groupName;
            
            let page;
            
            let size;

            if (listTemplateGroupRequest !== null && listTemplateGroupRequest !== undefined) {
                if (listTemplateGroupRequest instanceof ListTemplateGroupRequest) {
                    groupId = listTemplateGroupRequest.groupId;
                    groupName = listTemplateGroupRequest.groupName;
                    page = listTemplateGroupRequest.page;
                    size = listTemplateGroupRequest.size;
                } else {
                    groupId = listTemplateGroupRequest['group_id'];
                    groupName = listTemplateGroupRequest['group_name'];
                    page = listTemplateGroupRequest['page'];
                    size = listTemplateGroupRequest['size'];
                }
            }

        
            if (groupId !== null && groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (groupName !== null && groupName !== undefined) {
                localVarQueryParameter['group_name'] = groupName;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (size !== null && size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改模板组接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTemplateGroup(updateTemplateGroupRequest?: UpdateTemplateGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/template_group/transcodings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateTemplateGroupRequest !== null && updateTemplateGroupRequest !== undefined) {
                if (updateTemplateGroupRequest instanceof UpdateTemplateGroupRequest) {
                    body = updateTemplateGroupRequest.body
                } else {
                    body = updateTemplateGroupRequest['body'];
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
         * 租户查询媒体转码服务开通状态信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTenantAccessInfo(showTenantAccessInfoRequest?: ShowTenantAccessInfoRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/tenant/access",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xLanguage;

            if (showTenantAccessInfoRequest !== null && showTenantAccessInfoRequest !== undefined) {
                if (showTenantAccessInfoRequest instanceof ShowTenantAccessInfoRequest) {
                    xLanguage = showTenantAccessInfoRequest.xLanguage;
                } else {
                    xLanguage = showTenantAccessInfoRequest['x-language'];
                }
            }

        
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['x-language'] = String(xLanguage);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 租户开通媒体转码服务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTenantAccessInfo(updateTenantAccessInfoRequest?: UpdateTenantAccessInfoRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/tenant/access",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (updateTenantAccessInfoRequest !== null && updateTenantAccessInfoRequest !== undefined) {
                if (updateTenantAccessInfoRequest instanceof UpdateTenantAccessInfoRequest) {
                    xLanguage = updateTenantAccessInfoRequest.xLanguage;
                    body = updateTenantAccessInfoRequest.body
                } else {
                    xLanguage = updateTenantAccessInfoRequest['x-language'];
                    body = updateTenantAccessInfoRequest['body'];
                }
            }

        
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['x-language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 新建截图任务，视频截图将从首帧开始，按设置的时间间隔截图，最后截取末帧。
         * 待截图的视频文件需要存储在与媒体处理服务同区域的OBS桶中，且该OBS桶已授权。
         * 
         * 约束：
         *   暂只支持生成JPG格式的图片文件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createThumbnailsTask(createThumbnailsTaskRequest?: CreateThumbnailsTaskRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/thumbnails",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createThumbnailsTaskRequest !== null && createThumbnailsTaskRequest !== undefined) {
                if (createThumbnailsTaskRequest instanceof CreateThumbnailsTaskRequest) {
                    body = createThumbnailsTaskRequest.body
                } else {
                    body = createThumbnailsTaskRequest['body'];
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
         * 取消已下发截图任务。
         * 只能取消已接受尚在队列中等待处理的任务，已完成或正在执行阶段的任务不能取消。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteThumbnailsTask(deleteThumbnailsTaskRequest?: DeleteThumbnailsTaskRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/thumbnails",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let taskId;

            if (deleteThumbnailsTaskRequest !== null && deleteThumbnailsTaskRequest !== undefined) {
                if (deleteThumbnailsTaskRequest instanceof DeleteThumbnailsTaskRequest) {
                    taskId = deleteThumbnailsTaskRequest.taskId;
                } else {
                    taskId = deleteThumbnailsTaskRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
                throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling deleteThumbnailsTask.');
            }
            if (taskId !== null && taskId !== undefined) {
                localVarQueryParameter['task_id'] = taskId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询截图任务状态。返回任务执行结果，包括状态、输入、输出等信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listThumbnailsTask(listThumbnailsTaskRequest?: ListThumbnailsTaskRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/thumbnails",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xLanguage;
            
            let taskId;
            
            let status;
            
            let startTime;
            
            let endTime;
            
            let page;
            
            let size;

            if (listThumbnailsTaskRequest !== null && listThumbnailsTaskRequest !== undefined) {
                if (listThumbnailsTaskRequest instanceof ListThumbnailsTaskRequest) {
                    xLanguage = listThumbnailsTaskRequest.xLanguage;
                    taskId = listThumbnailsTaskRequest.taskId;
                    status = listThumbnailsTaskRequest.status;
                    startTime = listThumbnailsTaskRequest.startTime;
                    endTime = listThumbnailsTaskRequest.endTime;
                    page = listThumbnailsTaskRequest.page;
                    size = listThumbnailsTaskRequest.size;
                } else {
                    xLanguage = listThumbnailsTaskRequest['x-language'];
                    taskId = listThumbnailsTaskRequest['task_id'];
                    status = listThumbnailsTaskRequest['status'];
                    startTime = listThumbnailsTaskRequest['start_time'];
                    endTime = listThumbnailsTaskRequest['end_time'];
                    page = listThumbnailsTaskRequest['page'];
                    size = listThumbnailsTaskRequest['size'];
                }
            }

        
            if (taskId !== null && taskId !== undefined) {
                localVarQueryParameter['task_id'] = taskId;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (size !== null && size !== undefined) {
                localVarQueryParameter['size'] = size;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['x-language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 新建转码任务可以将视频进行转码，并在转码过程中压制水印、视频截图等。视频转码前需要配置转码模板。
         * 待转码的音视频需要存储在与媒体处理服务同区域的OBS桶中，且该OBS桶已授权。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTranscodingTask(createTranscodingTaskRequest?: CreateTranscodingTaskRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/transcodings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createTranscodingTaskRequest !== null && createTranscodingTaskRequest !== undefined) {
                if (createTranscodingTaskRequest instanceof CreateTranscodingTaskRequest) {
                    body = createTranscodingTaskRequest.body
                } else {
                    body = createTranscodingTaskRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 取消已下发转码任务。
         * 只能取消正在转码任务队列中排队的转码任务。已开始转码或已完成的转码任务不能取消。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTranscodingTask(deleteTranscodingTaskRequest?: DeleteTranscodingTaskRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/transcodings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let taskId;

            if (deleteTranscodingTaskRequest !== null && deleteTranscodingTaskRequest !== undefined) {
                if (deleteTranscodingTaskRequest instanceof DeleteTranscodingTaskRequest) {
                    taskId = deleteTranscodingTaskRequest.taskId;
                } else {
                    taskId = deleteTranscodingTaskRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
                throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling deleteTranscodingTask.');
            }
            if (taskId !== null && taskId !== undefined) {
                localVarQueryParameter['task_id'] = taskId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除转码任务记录，只能删除状态为“已取消”，“转码成功”，“转码失败”的转码任务记录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTranscodingTaskByConsole(deleteTranscodingTaskByConsoleRequest?: DeleteTranscodingTaskByConsoleRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/transcodings/task",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let taskId;

            if (deleteTranscodingTaskByConsoleRequest !== null && deleteTranscodingTaskByConsoleRequest !== undefined) {
                if (deleteTranscodingTaskByConsoleRequest instanceof DeleteTranscodingTaskByConsoleRequest) {
                    taskId = deleteTranscodingTaskByConsoleRequest.taskId;
                } else {
                    taskId = deleteTranscodingTaskByConsoleRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
                throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling deleteTranscodingTaskByConsole.');
            }
            if (taskId !== null && taskId !== undefined) {
                localVarQueryParameter['task_id'] = taskId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询最近一周，最近一月或者自定义时间段的“转码时长”，“调用转码API次数”。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listStatSummary(listStatSummaryRequest?: ListStatSummaryRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/transcodings/summaries",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let startTime;
            
            let endTime;
            
            let statType;

            if (listStatSummaryRequest !== null && listStatSummaryRequest !== undefined) {
                if (listStatSummaryRequest instanceof ListStatSummaryRequest) {
                    startTime = listStatSummaryRequest.startTime;
                    endTime = listStatSummaryRequest.endTime;
                    statType = listStatSummaryRequest.statType;
                } else {
                    startTime = listStatSummaryRequest['start_time'];
                    endTime = listStatSummaryRequest['end_time'];
                    statType = listStatSummaryRequest['stat_type'];
                }
            }

        
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listStatSummary.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listStatSummary.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (statType === null || statType === undefined) {
                throw new RequiredError('statType','Required parameter statType was null or undefined when calling listStatSummary.');
            }
            if (statType !== null && statType !== undefined) {
                localVarQueryParameter['stat_type'] = statType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询转码任务状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTranscodingTask(listTranscodingTaskRequest?: ListTranscodingTaskRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/transcodings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xLanguage;
            
            let taskId;
            
            let status;
            
            let startTime;
            
            let endTime;
            
            let page;
            
            let size;

            if (listTranscodingTaskRequest !== null && listTranscodingTaskRequest !== undefined) {
                if (listTranscodingTaskRequest instanceof ListTranscodingTaskRequest) {
                    xLanguage = listTranscodingTaskRequest.xLanguage;
                    taskId = listTranscodingTaskRequest.taskId;
                    status = listTranscodingTaskRequest.status;
                    startTime = listTranscodingTaskRequest.startTime;
                    endTime = listTranscodingTaskRequest.endTime;
                    page = listTranscodingTaskRequest.page;
                    size = listTranscodingTaskRequest.size;
                } else {
                    xLanguage = listTranscodingTaskRequest['x-language'];
                    taskId = listTranscodingTaskRequest['task_id'];
                    status = listTranscodingTaskRequest['status'];
                    startTime = listTranscodingTaskRequest['start_time'];
                    endTime = listTranscodingTaskRequest['end_time'];
                    page = listTranscodingTaskRequest['page'];
                    size = listTranscodingTaskRequest['size'];
                }
            }

        
            if (taskId !== null && taskId !== undefined) {
                localVarQueryParameter['task_id'] = taskId;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (size !== null && size !== undefined) {
                localVarQueryParameter['size'] = size;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['x-language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 新建转码模板，采用自定义的模板转码。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTransTemplate(createTransTemplateRequest?: CreateTransTemplateRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/template/transcodings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createTransTemplateRequest !== null && createTransTemplateRequest !== undefined) {
                if (createTransTemplateRequest instanceof CreateTransTemplateRequest) {
                    body = createTransTemplateRequest.body
                } else {
                    body = createTransTemplateRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除转码模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTemplate(deleteTemplateRequest?: DeleteTemplateRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/template/transcodings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let templateId;

            if (deleteTemplateRequest !== null && deleteTemplateRequest !== undefined) {
                if (deleteTemplateRequest instanceof DeleteTemplateRequest) {
                    templateId = deleteTemplateRequest.templateId;
                } else {
                    templateId = deleteTemplateRequest['template_id'];
                }
            }

        
            if (templateId === null || templateId === undefined) {
                throw new RequiredError('templateId','Required parameter templateId was null or undefined when calling deleteTemplate.');
            }
            if (templateId !== null && templateId !== undefined) {
                localVarQueryParameter['template_id'] = templateId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询用户自定义转码配置模板。
         * 支持指定模板ID查询，或分页全量查询。转码配置模板ID，最多10个。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTemplate(listTemplateRequest?: ListTemplateRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/template/transcodings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let templateId;
            
            let page;
            
            let size;

            if (listTemplateRequest !== null && listTemplateRequest !== undefined) {
                if (listTemplateRequest instanceof ListTemplateRequest) {
                    templateId = listTemplateRequest.templateId;
                    page = listTemplateRequest.page;
                    size = listTemplateRequest.size;
                } else {
                    templateId = listTemplateRequest['template_id'];
                    page = listTemplateRequest['page'];
                    size = listTemplateRequest['size'];
                }
            }

        
            if (templateId !== null && templateId !== undefined) {
                localVarQueryParameter['template_id'] = templateId;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (size !== null && size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新转码模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTransTemplate(updateTransTemplateRequest?: UpdateTransTemplateRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/template/transcodings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateTransTemplateRequest !== null && updateTransTemplateRequest !== undefined) {
                if (updateTransTemplateRequest instanceof UpdateTransTemplateRequest) {
                    body = updateTransTemplateRequest.body
                } else {
                    body = updateTransTemplateRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 自定义水印模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createWatermarkTemplate(createWatermarkTemplateRequest?: CreateWatermarkTemplateRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/template/watermark",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createWatermarkTemplateRequest !== null && createWatermarkTemplateRequest !== undefined) {
                if (createWatermarkTemplateRequest instanceof CreateWatermarkTemplateRequest) {
                    body = createWatermarkTemplateRequest.body
                } else {
                    body = createWatermarkTemplateRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除自定义水印模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteWatermarkTemplate(deleteWatermarkTemplateRequest?: DeleteWatermarkTemplateRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/template/watermark",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let templateId;

            if (deleteWatermarkTemplateRequest !== null && deleteWatermarkTemplateRequest !== undefined) {
                if (deleteWatermarkTemplateRequest instanceof DeleteWatermarkTemplateRequest) {
                    templateId = deleteWatermarkTemplateRequest.templateId;
                } else {
                    templateId = deleteWatermarkTemplateRequest['template_id'];
                }
            }

        
            if (templateId === null || templateId === undefined) {
                throw new RequiredError('templateId','Required parameter templateId was null or undefined when calling deleteWatermarkTemplate.');
            }
            if (templateId !== null && templateId !== undefined) {
                localVarQueryParameter['template_id'] = templateId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询自定义水印模板。支持指定模板ID查询，或分页全量查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWatermarkTemplate(listWatermarkTemplateRequest?: ListWatermarkTemplateRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/template/watermark",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let templateId;
            
            let page;
            
            let size;

            if (listWatermarkTemplateRequest !== null && listWatermarkTemplateRequest !== undefined) {
                if (listWatermarkTemplateRequest instanceof ListWatermarkTemplateRequest) {
                    templateId = listWatermarkTemplateRequest.templateId;
                    page = listWatermarkTemplateRequest.page;
                    size = listWatermarkTemplateRequest.size;
                } else {
                    templateId = listWatermarkTemplateRequest['template_id'];
                    page = listWatermarkTemplateRequest['page'];
                    size = listWatermarkTemplateRequest['size'];
                }
            }

        
            if (templateId !== null && templateId !== undefined) {
                localVarQueryParameter['template_id'] = templateId;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (size !== null && size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新自定义水印模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateWatermarkTemplate(updateWatermarkTemplateRequest?: UpdateWatermarkTemplateRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/template/watermark",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateWatermarkTemplateRequest !== null && updateWatermarkTemplateRequest !== undefined) {
                if (updateWatermarkTemplateRequest instanceof UpdateWatermarkTemplateRequest) {
                    body = updateWatermarkTemplateRequest.body
                } else {
                    body = updateWatermarkTemplateRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): MpcClient {
    return new MpcClient(client);
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