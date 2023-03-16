import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { CelebrityRecognitionReq } from './model/CelebrityRecognitionReq';
import { CelebrityRecognitionResultBody } from './model/CelebrityRecognitionResultBody';
import { CreateImageHighresolutionMattingTaskRequest } from './model/CreateImageHighresolutionMattingTaskRequest';
import { CreateImageHighresolutionMattingTaskResponse } from './model/CreateImageHighresolutionMattingTaskResponse';
import { CreateImageToVideoTaskRequest } from './model/CreateImageToVideoTaskRequest';
import { CreateImageToVideoTaskResponse } from './model/CreateImageToVideoTaskResponse';
import { CreateImageTranslateTaskRequest } from './model/CreateImageTranslateTaskRequest';
import { CreateImageTranslateTaskResponse } from './model/CreateImageTranslateTaskResponse';
import { CreateImageVariationTaskRequest } from './model/CreateImageVariationTaskRequest';
import { CreateImageVariationTaskRequestBody } from './model/CreateImageVariationTaskRequestBody';
import { CreateImageVariationTaskResponse } from './model/CreateImageVariationTaskResponse';
import { CreateTextToImageTaskRequest } from './model/CreateTextToImageTaskRequest';
import { CreateTextToImageTaskRequestBody } from './model/CreateTextToImageTaskRequestBody';
import { CreateTextToImageTaskResponse } from './model/CreateTextToImageTaskResponse';
import { CreateVideoCoverAnalysisTaskRequest } from './model/CreateVideoCoverAnalysisTaskRequest';
import { CreateVideoCoverAnalysisTaskResponse } from './model/CreateVideoCoverAnalysisTaskResponse';
import { CreateVideoCuttingTaskRequest } from './model/CreateVideoCuttingTaskRequest';
import { CreateVideoCuttingTaskResponse } from './model/CreateVideoCuttingTaskResponse';
import { CreateVideoObjectMaskingTaskRequest } from './model/CreateVideoObjectMaskingTaskRequest';
import { CreateVideoObjectMaskingTaskRequestBody } from './model/CreateVideoObjectMaskingTaskRequestBody';
import { CreateVideoObjectMaskingTaskResponse } from './model/CreateVideoObjectMaskingTaskResponse';
import { CreateVideoShotSplitTaskRequest } from './model/CreateVideoShotSplitTaskRequest';
import { CreateVideoShotSplitTaskResponse } from './model/CreateVideoShotSplitTaskResponse';
import { CreateVideoSplitTaskRequestBody } from './model/CreateVideoSplitTaskRequestBody';
import { CreateVideoSummarizationAnalysisTaskRequest } from './model/CreateVideoSummarizationAnalysisTaskRequest';
import { CreateVideoSummarizationAnalysisTaskResponse } from './model/CreateVideoSummarizationAnalysisTaskResponse';
import { CreateVideoSynthesisTaskRequest } from './model/CreateVideoSynthesisTaskRequest';
import { CreateVideoSynthesisTaskResponse } from './model/CreateVideoSynthesisTaskResponse';
import { CreateVideoTranslateTaskRequest } from './model/CreateVideoTranslateTaskRequest';
import { CreateVideoTranslateTaskResponse } from './model/CreateVideoTranslateTaskResponse';
import { ImageDescriptionReq } from './model/ImageDescriptionReq';
import { ImageDescriptionResponseResult } from './model/ImageDescriptionResponseResult';
import { ImageHighresolutionMattingConfig } from './model/ImageHighresolutionMattingConfig';
import { ImageHighresolutionMattingConfigCommon } from './model/ImageHighresolutionMattingConfigCommon';
import { ImageHighresolutionMattingInference } from './model/ImageHighresolutionMattingInference';
import { ImageHighresolutionMattingRequestBody } from './model/ImageHighresolutionMattingRequestBody';
import { ImageMainObjectDetectionInstance } from './model/ImageMainObjectDetectionInstance';
import { ImageMainObjectDetectionReq } from './model/ImageMainObjectDetectionReq';
import { ImageMediaTaggingDetInstance } from './model/ImageMediaTaggingDetInstance';
import { ImageMediaTaggingDetItemBody } from './model/ImageMediaTaggingDetItemBody';
import { ImageMediaTaggingDetItemBodyI18nTag } from './model/ImageMediaTaggingDetItemBodyI18nTag';
import { ImageMediaTaggingDetReq } from './model/ImageMediaTaggingDetReq';
import { ImageMediaTaggingDetResponseResult } from './model/ImageMediaTaggingDetResponseResult';
import { ImageMediaTaggingItemBody } from './model/ImageMediaTaggingItemBody';
import { ImageMediaTaggingItemBodyI18nTag } from './model/ImageMediaTaggingItemBodyI18nTag';
import { ImageMediaTaggingItemBodyI18nType } from './model/ImageMediaTaggingItemBodyI18nType';
import { ImageMediaTaggingReq } from './model/ImageMediaTaggingReq';
import { ImageMediaTaggingResponseResult } from './model/ImageMediaTaggingResponseResult';
import { ImageSuperResolutionReq } from './model/ImageSuperResolutionReq';
import { ImageSuperResolutionResponseResult } from './model/ImageSuperResolutionResponseResult';
import { ImageTaggingInstance } from './model/ImageTaggingInstance';
import { ImageTaggingItemBody } from './model/ImageTaggingItemBody';
import { ImageTaggingItemBodyI18nTag } from './model/ImageTaggingItemBodyI18nTag';
import { ImageTaggingItemBodyI18nType } from './model/ImageTaggingItemBodyI18nType';
import { ImageTaggingReq } from './model/ImageTaggingReq';
import { ImageTaggingResponseResult } from './model/ImageTaggingResponseResult';
import { ImageToVideoConfig } from './model/ImageToVideoConfig';
import { ImageToVideoConfigCommon } from './model/ImageToVideoConfigCommon';
import { ImageToVideoInference } from './model/ImageToVideoInference';
import { ImageToVideoInfo } from './model/ImageToVideoInfo';
import { ImageToVideoRequestBody } from './model/ImageToVideoRequestBody';
import { ImageTranslateConfig } from './model/ImageTranslateConfig';
import { ImageTranslateConfigCommon } from './model/ImageTranslateConfigCommon';
import { ImageTranslateInference } from './model/ImageTranslateInference';
import { ImageTranslateRequestBody } from './model/ImageTranslateRequestBody';
import { ImageVariationInference } from './model/ImageVariationInference';
import { ImageVariationTaskConfig } from './model/ImageVariationTaskConfig';
import { ImageVariationTaskConfigCommon } from './model/ImageVariationTaskConfigCommon';
import { ImageWisedesignCropReq } from './model/ImageWisedesignCropReq';
import { ImageWisedesignCropResponseResult } from './model/ImageWisedesignCropResponseResult';
import { ImageWisedesignInpaintingReq } from './model/ImageWisedesignInpaintingReq';
import { ImageWisedesignInpaintingResponseResult } from './model/ImageWisedesignInpaintingResponseResult';
import { RecaptureDetectReq } from './model/RecaptureDetectReq';
import { RecaptureDetectResponseResult } from './model/RecaptureDetectResponseResult';
import { RecaptureDetectResponseResultDetail } from './model/RecaptureDetectResponseResultDetail';
import { RunCelebrityRecognitionRequest } from './model/RunCelebrityRecognitionRequest';
import { RunCelebrityRecognitionResponse } from './model/RunCelebrityRecognitionResponse';
import { RunDeleteCustomTagsRequest } from './model/RunDeleteCustomTagsRequest';
import { RunDeleteCustomTagsResponse } from './model/RunDeleteCustomTagsResponse';
import { RunImageDescriptionRequest } from './model/RunImageDescriptionRequest';
import { RunImageDescriptionResponse } from './model/RunImageDescriptionResponse';
import { RunImageMainObjectDetectionRequest } from './model/RunImageMainObjectDetectionRequest';
import { RunImageMainObjectDetectionResponse } from './model/RunImageMainObjectDetectionResponse';
import { RunImageMediaTaggingDetRequest } from './model/RunImageMediaTaggingDetRequest';
import { RunImageMediaTaggingDetResponse } from './model/RunImageMediaTaggingDetResponse';
import { RunImageMediaTaggingRequest } from './model/RunImageMediaTaggingRequest';
import { RunImageMediaTaggingResponse } from './model/RunImageMediaTaggingResponse';
import { RunImageSuperResolutionRequest } from './model/RunImageSuperResolutionRequest';
import { RunImageSuperResolutionResponse } from './model/RunImageSuperResolutionResponse';
import { RunImageTaggingRequest } from './model/RunImageTaggingRequest';
import { RunImageTaggingResponse } from './model/RunImageTaggingResponse';
import { RunImageWisedesignCropRequest } from './model/RunImageWisedesignCropRequest';
import { RunImageWisedesignCropResponse } from './model/RunImageWisedesignCropResponse';
import { RunImageWisedesignInpaintingRequest } from './model/RunImageWisedesignInpaintingRequest';
import { RunImageWisedesignInpaintingResponse } from './model/RunImageWisedesignInpaintingResponse';
import { RunQueryCustomTagsRequest } from './model/RunQueryCustomTagsRequest';
import { RunQueryCustomTagsResponse } from './model/RunQueryCustomTagsResponse';
import { RunRecaptureDetectRequest } from './model/RunRecaptureDetectRequest';
import { RunRecaptureDetectResponse } from './model/RunRecaptureDetectResponse';
import { ShowImageHighresolutionMattingTaskRequest } from './model/ShowImageHighresolutionMattingTaskRequest';
import { ShowImageHighresolutionMattingTaskResponse } from './model/ShowImageHighresolutionMattingTaskResponse';
import { ShowImageToVideoTaskRequest } from './model/ShowImageToVideoTaskRequest';
import { ShowImageToVideoTaskResponse } from './model/ShowImageToVideoTaskResponse';
import { ShowImageTranslateTaskRequest } from './model/ShowImageTranslateTaskRequest';
import { ShowImageTranslateTaskResponse } from './model/ShowImageTranslateTaskResponse';
import { ShowImageVariationTaskRequest } from './model/ShowImageVariationTaskRequest';
import { ShowImageVariationTaskResponse } from './model/ShowImageVariationTaskResponse';
import { ShowTextToImageTaskRequest } from './model/ShowTextToImageTaskRequest';
import { ShowTextToImageTaskResponse } from './model/ShowTextToImageTaskResponse';
import { ShowVideoCoverAnalysisTaskRequest } from './model/ShowVideoCoverAnalysisTaskRequest';
import { ShowVideoCoverAnalysisTaskResponse } from './model/ShowVideoCoverAnalysisTaskResponse';
import { ShowVideoCuttingTaskRequest } from './model/ShowVideoCuttingTaskRequest';
import { ShowVideoCuttingTaskResponse } from './model/ShowVideoCuttingTaskResponse';
import { ShowVideoObjectMaskingTaskRequest } from './model/ShowVideoObjectMaskingTaskRequest';
import { ShowVideoObjectMaskingTaskResponse } from './model/ShowVideoObjectMaskingTaskResponse';
import { ShowVideoShotSplitTaskRequest } from './model/ShowVideoShotSplitTaskRequest';
import { ShowVideoShotSplitTaskResponse } from './model/ShowVideoShotSplitTaskResponse';
import { ShowVideoSummarizationAnalysisTaskRequest } from './model/ShowVideoSummarizationAnalysisTaskRequest';
import { ShowVideoSummarizationAnalysisTaskResponse } from './model/ShowVideoSummarizationAnalysisTaskResponse';
import { ShowVideoSynthesisTaskRequest } from './model/ShowVideoSynthesisTaskRequest';
import { ShowVideoSynthesisTaskResponse } from './model/ShowVideoSynthesisTaskResponse';
import { ShowVideoTranslateTaskRequest } from './model/ShowVideoTranslateTaskRequest';
import { ShowVideoTranslateTaskResponse } from './model/ShowVideoTranslateTaskResponse';
import { SummarizationAnalysisConfig } from './model/SummarizationAnalysisConfig';
import { SummarizationAnalysisConfigCommon } from './model/SummarizationAnalysisConfigCommon';
import { SummarizationAnalysisInference } from './model/SummarizationAnalysisInference';
import { TaskCallback } from './model/TaskCallback';
import { TaskInput } from './model/TaskInput';
import { TaskInputData } from './model/TaskInputData';
import { TaskOutput } from './model/TaskOutput';
import { TaskOutputObs } from './model/TaskOutputObs';
import { TextToImageInference } from './model/TextToImageInference';
import { TextToImageTaskConfig } from './model/TextToImageTaskConfig';
import { TextToImageTaskConfigCommon } from './model/TextToImageTaskConfigCommon';
import { VideoCoverAnalysisConfig } from './model/VideoCoverAnalysisConfig';
import { VideoCoverAnalysisConfigCommon } from './model/VideoCoverAnalysisConfigCommon';
import { VideoCoverAnalysisCreateTaskRequestBody } from './model/VideoCoverAnalysisCreateTaskRequestBody';
import { VideoCoverAnalysisinference } from './model/VideoCoverAnalysisinference';
import { VideoCuttingConfig } from './model/VideoCuttingConfig';
import { VideoCuttingConfigCommon } from './model/VideoCuttingConfigCommon';
import { VideoCuttingInference } from './model/VideoCuttingInference';
import { VideoCuttingRequestBody } from './model/VideoCuttingRequestBody';
import { VideoObjectMaskingInference } from './model/VideoObjectMaskingInference';
import { VideoObjectMaskingTaskConfig } from './model/VideoObjectMaskingTaskConfig';
import { VideoObjectMaskingTaskConfigCommon } from './model/VideoObjectMaskingTaskConfigCommon';
import { VideoSegmentInfo } from './model/VideoSegmentInfo';
import { VideoSplitTaskInput } from './model/VideoSplitTaskInput';
import { VideoSplitTaskInputData } from './model/VideoSplitTaskInputData';
import { VideoSummarizationCreateTaskRequestBody } from './model/VideoSummarizationCreateTaskRequestBody';
import { VideoSynthesisConfig } from './model/VideoSynthesisConfig';
import { VideoSynthesisConfigCommon } from './model/VideoSynthesisConfigCommon';
import { VideoSynthesisInference } from './model/VideoSynthesisInference';
import { VideoSynthesisInfo } from './model/VideoSynthesisInfo';
import { VideoSynthesisRequestBody } from './model/VideoSynthesisRequestBody';
import { VideoTranslateConfig } from './model/VideoTranslateConfig';
import { VideoTranslateConfigCommon } from './model/VideoTranslateConfigCommon';
import { VideoTranslateInference } from './model/VideoTranslateInference';
import { VideoTranslateInferenceRewriteConfig } from './model/VideoTranslateInferenceRewriteConfig';
import { VideoTranslateInferenceRewriteConfigBackground } from './model/VideoTranslateInferenceRewriteConfigBackground';
import { VideoTranslateInferenceRewriteConfigStroke } from './model/VideoTranslateInferenceRewriteConfigStroke';
import { VideoTranslateRequestBody } from './model/VideoTranslateRequestBody';

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
     * Create Task
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建任务
     * @param {ImageHighresolutionMattingRequestBody} createTaskRequestBody Create task request body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createImageHighresolutionMattingTask(createImageHighresolutionMattingTaskRequest?: CreateImageHighresolutionMattingTaskRequest): Promise<CreateImageHighresolutionMattingTaskResponse> {
        const options = ParamCreater().createImageHighresolutionMattingTask(createImageHighresolutionMattingTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Create Task
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建任务
     * @param {ImageToVideoRequestBody} createTaskRequestBody Create task request body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createImageToVideoTask(createImageToVideoTaskRequest?: CreateImageToVideoTaskRequest): Promise<CreateImageToVideoTaskResponse> {
        const options = ParamCreater().createImageToVideoTask(createImageToVideoTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Create Task
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建任务
     * @param {ImageTranslateRequestBody} createTaskRequestBody Create task request body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createImageTranslateTask(createImageTranslateTaskRequest?: CreateImageTranslateTaskRequest): Promise<CreateImageTranslateTaskResponse> {
        const options = ParamCreater().createImageTranslateTask(createImageTranslateTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Create Task
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建图像重构任务
     * @param {CreateImageVariationTaskRequestBody} createImageVariationTaskRequestBody Create task request body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createImageVariationTask(createImageVariationTaskRequest?: CreateImageVariationTaskRequest): Promise<CreateImageVariationTaskResponse> {
        const options = ParamCreater().createImageVariationTask(createImageVariationTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Create Task
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建文生图任务
     * @param {CreateTextToImageTaskRequestBody} createTextToImageTaskRequestBody Create task request body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTextToImageTask(createTextToImageTaskRequest?: CreateTextToImageTaskRequest): Promise<CreateTextToImageTaskResponse> {
        const options = ParamCreater().createTextToImageTask(createTextToImageTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建视频封面任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建任务
     * @param {VideoCoverAnalysisCreateTaskRequestBody} createTaskRequestBody Create task request body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVideoCoverAnalysisTask(createVideoCoverAnalysisTaskRequest?: CreateVideoCoverAnalysisTaskRequest): Promise<CreateVideoCoverAnalysisTaskResponse> {
        const options = ParamCreater().createVideoCoverAnalysisTask(createVideoCoverAnalysisTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Create Task
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建任务
     * @param {VideoCuttingRequestBody} createTaskRequestBody Create task request body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVideoCuttingTask(createVideoCuttingTaskRequest?: CreateVideoCuttingTaskRequest): Promise<CreateVideoCuttingTaskResponse> {
        const options = ParamCreater().createVideoCuttingTask(createVideoCuttingTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Create Task
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建司乘敏感擦除任务
     * @param {CreateVideoObjectMaskingTaskRequestBody} createVideoObjectMaskingTaskRequestBody Create task request body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVideoObjectMaskingTask(createVideoObjectMaskingTaskRequest?: CreateVideoObjectMaskingTaskRequest): Promise<CreateVideoObjectMaskingTaskResponse> {
        const options = ParamCreater().createVideoObjectMaskingTask(createVideoObjectMaskingTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建视频拆条任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建任务
     * @param {CreateVideoSplitTaskRequestBody} createTaskRequestBody Create task request body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVideoShotSplitTask(createVideoShotSplitTaskRequest?: CreateVideoShotSplitTaskRequest): Promise<CreateVideoShotSplitTaskResponse> {
        const options = ParamCreater().createVideoShotSplitTask(createVideoShotSplitTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Create Task
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建任务
     * @param {VideoSummarizationCreateTaskRequestBody} createTaskRequestBody Create task request body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVideoSummarizationAnalysisTask(createVideoSummarizationAnalysisTaskRequest?: CreateVideoSummarizationAnalysisTaskRequest): Promise<CreateVideoSummarizationAnalysisTaskResponse> {
        const options = ParamCreater().createVideoSummarizationAnalysisTask(createVideoSummarizationAnalysisTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Create Task
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建任务
     * @param {VideoSynthesisRequestBody} createTaskRequestBody Create task request body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVideoSynthesisTask(createVideoSynthesisTaskRequest?: CreateVideoSynthesisTaskRequest): Promise<CreateVideoSynthesisTaskResponse> {
        const options = ParamCreater().createVideoSynthesisTask(createVideoSynthesisTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Create Task
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建任务
     * @param {VideoTranslateRequestBody} createTaskRequestBody Create task request body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVideoTranslateTask(createVideoTranslateTaskRequest?: CreateVideoTranslateTaskRequest): Promise<CreateVideoTranslateTaskResponse> {
        const options = ParamCreater().createVideoTranslateTask(createVideoTranslateTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
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
     * 用于用户删除自定义的标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除媒资图像标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runDeleteCustomTags(): Promise<RunDeleteCustomTagsResponse> {
        const options = ParamCreater().runDeleteCustomTags();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 图像描述
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 图像描述
     * @param {ImageDescriptionReq} runImageDescriptionRequestBody 图像描述接口请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runImageDescription(runImageDescriptionRequest?: RunImageDescriptionRequest): Promise<RunImageDescriptionResponse> {
        const options = ParamCreater().runImageDescription(runImageDescriptionRequest);

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
     * 图像数据，base64编码，输入图像范围200px ~ 1080px，支持JPG/PNG/BMP/JPEG/WEBP格式
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 图像超分
     * @param {ImageSuperResolutionReq} runImageSuperResolutionRequestBody 图像超分接口请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runImageSuperResolution(runImageSuperResolutionRequest?: RunImageSuperResolutionRequest): Promise<RunImageSuperResolutionResponse> {
        const options = ParamCreater().runImageSuperResolution(runImageSuperResolutionRequest);

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
     * 智能设计图像裁剪服务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 智能设计图像裁剪
     * @param {ImageWisedesignCropReq} runImageWisedesignCropRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runImageWisedesignCrop(runImageWisedesignCropRequest?: RunImageWisedesignCropRequest): Promise<RunImageWisedesignCropResponse> {
        const options = ParamCreater().runImageWisedesignCrop(runImageWisedesignCropRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 智能设计图像修复服务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 智能设计图像修复
     * @param {ImageWisedesignInpaintingReq} runImageWisedesignInpaintingRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runImageWisedesignInpainting(runImageWisedesignInpaintingRequest?: RunImageWisedesignInpaintingRequest): Promise<RunImageWisedesignInpaintingResponse> {
        const options = ParamCreater().runImageWisedesignInpainting(runImageWisedesignInpaintingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用于用户自查是否存在自定义的标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询媒资图像标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runQueryCustomTags(): Promise<RunQueryCustomTagsResponse> {
        const options = ParamCreater().runQueryCustomTags();

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

    /**
     * show task
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询任务
     * @param {string} taskId 任务id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showImageHighresolutionMattingTask(showImageHighresolutionMattingTaskRequest?: ShowImageHighresolutionMattingTaskRequest): Promise<ShowImageHighresolutionMattingTaskResponse> {
        const options = ParamCreater().showImageHighresolutionMattingTask(showImageHighresolutionMattingTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * show task
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询任务
     * @param {string} taskId 任务id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showImageToVideoTask(showImageToVideoTaskRequest?: ShowImageToVideoTaskRequest): Promise<ShowImageToVideoTaskResponse> {
        const options = ParamCreater().showImageToVideoTask(showImageToVideoTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * show task
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询任务
     * @param {string} taskId 任务id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showImageTranslateTask(showImageTranslateTaskRequest?: ShowImageTranslateTaskRequest): Promise<ShowImageTranslateTaskResponse> {
        const options = ParamCreater().showImageTranslateTask(showImageTranslateTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * show task
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary show task 查询任务信息
     * @param {string} taskId 任务ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showImageVariationTask(showImageVariationTaskRequest?: ShowImageVariationTaskRequest): Promise<ShowImageVariationTaskResponse> {
        const options = ParamCreater().showImageVariationTask(showImageVariationTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * show task
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary show task 查询任务信息
     * @param {string} taskId 任务ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTextToImageTask(showTextToImageTaskRequest?: ShowTextToImageTaskRequest): Promise<ShowTextToImageTaskResponse> {
        const options = ParamCreater().showTextToImageTask(showTextToImageTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询视频封面任务完成状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询任务
     * @param {string} taskId 任务id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVideoCoverAnalysisTask(showVideoCoverAnalysisTaskRequest?: ShowVideoCoverAnalysisTaskRequest): Promise<ShowVideoCoverAnalysisTaskResponse> {
        const options = ParamCreater().showVideoCoverAnalysisTask(showVideoCoverAnalysisTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * show task
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询任务
     * @param {string} taskId 任务id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVideoCuttingTask(showVideoCuttingTaskRequest?: ShowVideoCuttingTaskRequest): Promise<ShowVideoCuttingTaskResponse> {
        const options = ParamCreater().showVideoCuttingTask(showVideoCuttingTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * show task
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary show task 查询任务信息
     * @param {string} taskId 任务ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVideoObjectMaskingTask(showVideoObjectMaskingTaskRequest?: ShowVideoObjectMaskingTaskRequest): Promise<ShowVideoObjectMaskingTaskResponse> {
        const options = ParamCreater().showVideoObjectMaskingTask(showVideoObjectMaskingTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询拆条任务状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询任务
     * @param {string} taskId 待查询任务ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVideoShotSplitTask(showVideoShotSplitTaskRequest?: ShowVideoShotSplitTaskRequest): Promise<ShowVideoShotSplitTaskResponse> {
        const options = ParamCreater().showVideoShotSplitTask(showVideoShotSplitTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * show task
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询任务
     * @param {string} taskId 任务ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVideoSummarizationAnalysisTask(showVideoSummarizationAnalysisTaskRequest?: ShowVideoSummarizationAnalysisTaskRequest): Promise<ShowVideoSummarizationAnalysisTaskResponse> {
        const options = ParamCreater().showVideoSummarizationAnalysisTask(showVideoSummarizationAnalysisTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * show task
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询任务
     * @param {string} taskId 任务id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVideoSynthesisTask(showVideoSynthesisTaskRequest?: ShowVideoSynthesisTaskRequest): Promise<ShowVideoSynthesisTaskResponse> {
        const options = ParamCreater().showVideoSynthesisTask(showVideoSynthesisTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * show task
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询任务
     * @param {string} taskId 任务id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVideoTranslateTask(showVideoTranslateTaskRequest?: ShowVideoTranslateTaskRequest): Promise<ShowVideoTranslateTaskResponse> {
        const options = ParamCreater().showVideoTranslateTask(showVideoTranslateTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * Create Task
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createImageHighresolutionMattingTask(createImageHighresolutionMattingTaskRequest?: CreateImageHighresolutionMattingTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/image/image-highresolution-matting/tasks",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createImageHighresolutionMattingTaskRequest !== null && createImageHighresolutionMattingTaskRequest !== undefined) {
                if (createImageHighresolutionMattingTaskRequest instanceof CreateImageHighresolutionMattingTaskRequest) {
                    body = createImageHighresolutionMattingTaskRequest.body
                } else {
                    body = createImageHighresolutionMattingTaskRequest['body'];
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
         * Create Task
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createImageToVideoTask(createImageToVideoTaskRequest?: CreateImageToVideoTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/image/image-to-video/tasks",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createImageToVideoTaskRequest !== null && createImageToVideoTaskRequest !== undefined) {
                if (createImageToVideoTaskRequest instanceof CreateImageToVideoTaskRequest) {
                    body = createImageToVideoTaskRequest.body
                } else {
                    body = createImageToVideoTaskRequest['body'];
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
         * Create Task
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createImageTranslateTask(createImageTranslateTaskRequest?: CreateImageTranslateTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/image/image-wisedesign-translate/tasks",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createImageTranslateTaskRequest !== null && createImageTranslateTaskRequest !== undefined) {
                if (createImageTranslateTaskRequest instanceof CreateImageTranslateTaskRequest) {
                    body = createImageTranslateTaskRequest.body
                } else {
                    body = createImageTranslateTaskRequest['body'];
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
         * Create Task
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createImageVariationTask(createImageVariationTaskRequest?: CreateImageVariationTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/image/image-variation/tasks",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createImageVariationTaskRequest !== null && createImageVariationTaskRequest !== undefined) {
                if (createImageVariationTaskRequest instanceof CreateImageVariationTaskRequest) {
                    body = createImageVariationTaskRequest.body
                } else {
                    body = createImageVariationTaskRequest['body'];
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
         * Create Task
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTextToImageTask(createTextToImageTaskRequest?: CreateTextToImageTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/image/text-to-image/tasks",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createTextToImageTaskRequest !== null && createTextToImageTaskRequest !== undefined) {
                if (createTextToImageTaskRequest instanceof CreateTextToImageTaskRequest) {
                    body = createTextToImageTaskRequest.body
                } else {
                    body = createTextToImageTaskRequest['body'];
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
         * 创建视频封面任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createVideoCoverAnalysisTask(createVideoCoverAnalysisTaskRequest?: CreateVideoCoverAnalysisTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/image/video-cover-analysis/tasks",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createVideoCoverAnalysisTaskRequest !== null && createVideoCoverAnalysisTaskRequest !== undefined) {
                if (createVideoCoverAnalysisTaskRequest instanceof CreateVideoCoverAnalysisTaskRequest) {
                    body = createVideoCoverAnalysisTaskRequest.body
                } else {
                    body = createVideoCoverAnalysisTaskRequest['body'];
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
         * Create Task
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createVideoCuttingTask(createVideoCuttingTaskRequest?: CreateVideoCuttingTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/image/video-cutting/tasks",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createVideoCuttingTaskRequest !== null && createVideoCuttingTaskRequest !== undefined) {
                if (createVideoCuttingTaskRequest instanceof CreateVideoCuttingTaskRequest) {
                    body = createVideoCuttingTaskRequest.body
                } else {
                    body = createVideoCuttingTaskRequest['body'];
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
         * Create Task
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createVideoObjectMaskingTask(createVideoObjectMaskingTaskRequest?: CreateVideoObjectMaskingTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/image/video-object-masking/tasks",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createVideoObjectMaskingTaskRequest !== null && createVideoObjectMaskingTaskRequest !== undefined) {
                if (createVideoObjectMaskingTaskRequest instanceof CreateVideoObjectMaskingTaskRequest) {
                    body = createVideoObjectMaskingTaskRequest.body
                } else {
                    body = createVideoObjectMaskingTaskRequest['body'];
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
         * 创建视频拆条任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createVideoShotSplitTask(createVideoShotSplitTaskRequest?: CreateVideoShotSplitTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/image/video-shot-split/tasks",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createVideoShotSplitTaskRequest !== null && createVideoShotSplitTaskRequest !== undefined) {
                if (createVideoShotSplitTaskRequest instanceof CreateVideoShotSplitTaskRequest) {
                    body = createVideoShotSplitTaskRequest.body
                } else {
                    body = createVideoShotSplitTaskRequest['body'];
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
         * Create Task
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createVideoSummarizationAnalysisTask(createVideoSummarizationAnalysisTaskRequest?: CreateVideoSummarizationAnalysisTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/image/video-summarization-analysis/tasks",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createVideoSummarizationAnalysisTaskRequest !== null && createVideoSummarizationAnalysisTaskRequest !== undefined) {
                if (createVideoSummarizationAnalysisTaskRequest instanceof CreateVideoSummarizationAnalysisTaskRequest) {
                    body = createVideoSummarizationAnalysisTaskRequest.body
                } else {
                    body = createVideoSummarizationAnalysisTaskRequest['body'];
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
         * Create Task
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createVideoSynthesisTask(createVideoSynthesisTaskRequest?: CreateVideoSynthesisTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/image/video-synthesis/tasks",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createVideoSynthesisTaskRequest !== null && createVideoSynthesisTaskRequest !== undefined) {
                if (createVideoSynthesisTaskRequest instanceof CreateVideoSynthesisTaskRequest) {
                    body = createVideoSynthesisTaskRequest.body
                } else {
                    body = createVideoSynthesisTaskRequest['body'];
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
         * Create Task
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createVideoTranslateTask(createVideoTranslateTaskRequest?: CreateVideoTranslateTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/image/video-translate/tasks",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createVideoTranslateTaskRequest !== null && createVideoTranslateTaskRequest !== undefined) {
                if (createVideoTranslateTaskRequest instanceof CreateVideoTranslateTaskRequest) {
                    body = createVideoTranslateTaskRequest.body
                } else {
                    body = createVideoTranslateTaskRequest['body'];
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
         * 用于用户删除自定义的标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        runDeleteCustomTags() {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/image/media-tagging/custom-tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 图像描述
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
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

            var body: any;

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
         * 图像数据，base64编码，输入图像范围200px ~ 1080px，支持JPG/PNG/BMP/JPEG/WEBP格式
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        runImageSuperResolution(runImageSuperResolutionRequest?: RunImageSuperResolutionRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/image/image-super-resolution",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (runImageSuperResolutionRequest !== null && runImageSuperResolutionRequest !== undefined) {
                if (runImageSuperResolutionRequest instanceof RunImageSuperResolutionRequest) {
                    body = runImageSuperResolutionRequest.body
                } else {
                    body = runImageSuperResolutionRequest['body'];
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
    
        /**
         * 智能设计图像裁剪服务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        runImageWisedesignCrop(runImageWisedesignCropRequest?: RunImageWisedesignCropRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/image/image-wisedesign-crop",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (runImageWisedesignCropRequest !== null && runImageWisedesignCropRequest !== undefined) {
                if (runImageWisedesignCropRequest instanceof RunImageWisedesignCropRequest) {
                    body = runImageWisedesignCropRequest.body
                } else {
                    body = runImageWisedesignCropRequest['body'];
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
         * 智能设计图像修复服务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        runImageWisedesignInpainting(runImageWisedesignInpaintingRequest?: RunImageWisedesignInpaintingRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/image/image-wisedesign-inpainting",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (runImageWisedesignInpaintingRequest !== null && runImageWisedesignInpaintingRequest !== undefined) {
                if (runImageWisedesignInpaintingRequest instanceof RunImageWisedesignInpaintingRequest) {
                    body = runImageWisedesignInpaintingRequest.body
                } else {
                    body = runImageWisedesignInpaintingRequest['body'];
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
         * 用于用户自查是否存在自定义的标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        runQueryCustomTags() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/image/media-tagging/custom-tags/check",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;


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

            var body: any;

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
    
        /**
         * show task
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showImageHighresolutionMattingTask(showImageHighresolutionMattingTaskRequest?: ShowImageHighresolutionMattingTaskRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/image/image-highresolution-matting/tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;

            if (showImageHighresolutionMattingTaskRequest !== null && showImageHighresolutionMattingTaskRequest !== undefined) {
                if (showImageHighresolutionMattingTaskRequest instanceof ShowImageHighresolutionMattingTaskRequest) {
                    taskId = showImageHighresolutionMattingTaskRequest.taskId;
                } else {
                    taskId = showImageHighresolutionMattingTaskRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showImageHighresolutionMattingTask.');
            }

            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * show task
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showImageToVideoTask(showImageToVideoTaskRequest?: ShowImageToVideoTaskRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/image/image-to-video/tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;

            if (showImageToVideoTaskRequest !== null && showImageToVideoTaskRequest !== undefined) {
                if (showImageToVideoTaskRequest instanceof ShowImageToVideoTaskRequest) {
                    taskId = showImageToVideoTaskRequest.taskId;
                } else {
                    taskId = showImageToVideoTaskRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showImageToVideoTask.');
            }

            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * show task
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showImageTranslateTask(showImageTranslateTaskRequest?: ShowImageTranslateTaskRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/image/image-wisedesign-translate/tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;

            if (showImageTranslateTaskRequest !== null && showImageTranslateTaskRequest !== undefined) {
                if (showImageTranslateTaskRequest instanceof ShowImageTranslateTaskRequest) {
                    taskId = showImageTranslateTaskRequest.taskId;
                } else {
                    taskId = showImageTranslateTaskRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showImageTranslateTask.');
            }

            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * show task
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showImageVariationTask(showImageVariationTaskRequest?: ShowImageVariationTaskRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/image/image-variation/tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;

            if (showImageVariationTaskRequest !== null && showImageVariationTaskRequest !== undefined) {
                if (showImageVariationTaskRequest instanceof ShowImageVariationTaskRequest) {
                    taskId = showImageVariationTaskRequest.taskId;
                } else {
                    taskId = showImageVariationTaskRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showImageVariationTask.');
            }

            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * show task
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTextToImageTask(showTextToImageTaskRequest?: ShowTextToImageTaskRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/image/text-to-image/tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;

            if (showTextToImageTaskRequest !== null && showTextToImageTaskRequest !== undefined) {
                if (showTextToImageTaskRequest instanceof ShowTextToImageTaskRequest) {
                    taskId = showTextToImageTaskRequest.taskId;
                } else {
                    taskId = showTextToImageTaskRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showTextToImageTask.');
            }

            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询视频封面任务完成状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVideoCoverAnalysisTask(showVideoCoverAnalysisTaskRequest?: ShowVideoCoverAnalysisTaskRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/image/video-cover-analysis/tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;

            if (showVideoCoverAnalysisTaskRequest !== null && showVideoCoverAnalysisTaskRequest !== undefined) {
                if (showVideoCoverAnalysisTaskRequest instanceof ShowVideoCoverAnalysisTaskRequest) {
                    taskId = showVideoCoverAnalysisTaskRequest.taskId;
                } else {
                    taskId = showVideoCoverAnalysisTaskRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showVideoCoverAnalysisTask.');
            }

            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * show task
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVideoCuttingTask(showVideoCuttingTaskRequest?: ShowVideoCuttingTaskRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/image/video-cutting/tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;

            if (showVideoCuttingTaskRequest !== null && showVideoCuttingTaskRequest !== undefined) {
                if (showVideoCuttingTaskRequest instanceof ShowVideoCuttingTaskRequest) {
                    taskId = showVideoCuttingTaskRequest.taskId;
                } else {
                    taskId = showVideoCuttingTaskRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showVideoCuttingTask.');
            }

            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * show task
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVideoObjectMaskingTask(showVideoObjectMaskingTaskRequest?: ShowVideoObjectMaskingTaskRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/image/video-object-masking/tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;

            if (showVideoObjectMaskingTaskRequest !== null && showVideoObjectMaskingTaskRequest !== undefined) {
                if (showVideoObjectMaskingTaskRequest instanceof ShowVideoObjectMaskingTaskRequest) {
                    taskId = showVideoObjectMaskingTaskRequest.taskId;
                } else {
                    taskId = showVideoObjectMaskingTaskRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showVideoObjectMaskingTask.');
            }

            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询拆条任务状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVideoShotSplitTask(showVideoShotSplitTaskRequest?: ShowVideoShotSplitTaskRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/image/video-shot-split/tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;

            if (showVideoShotSplitTaskRequest !== null && showVideoShotSplitTaskRequest !== undefined) {
                if (showVideoShotSplitTaskRequest instanceof ShowVideoShotSplitTaskRequest) {
                    taskId = showVideoShotSplitTaskRequest.taskId;
                } else {
                    taskId = showVideoShotSplitTaskRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showVideoShotSplitTask.');
            }

            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * show task
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVideoSummarizationAnalysisTask(showVideoSummarizationAnalysisTaskRequest?: ShowVideoSummarizationAnalysisTaskRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/image/video-summarization-analysis/tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;

            if (showVideoSummarizationAnalysisTaskRequest !== null && showVideoSummarizationAnalysisTaskRequest !== undefined) {
                if (showVideoSummarizationAnalysisTaskRequest instanceof ShowVideoSummarizationAnalysisTaskRequest) {
                    taskId = showVideoSummarizationAnalysisTaskRequest.taskId;
                } else {
                    taskId = showVideoSummarizationAnalysisTaskRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showVideoSummarizationAnalysisTask.');
            }

            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * show task
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVideoSynthesisTask(showVideoSynthesisTaskRequest?: ShowVideoSynthesisTaskRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/image/video-synthesis/tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;

            if (showVideoSynthesisTaskRequest !== null && showVideoSynthesisTaskRequest !== undefined) {
                if (showVideoSynthesisTaskRequest instanceof ShowVideoSynthesisTaskRequest) {
                    taskId = showVideoSynthesisTaskRequest.taskId;
                } else {
                    taskId = showVideoSynthesisTaskRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showVideoSynthesisTask.');
            }

            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * show task
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVideoTranslateTask(showVideoTranslateTaskRequest?: ShowVideoTranslateTaskRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/image/video-translate/tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;

            if (showVideoTranslateTaskRequest !== null && showVideoTranslateTaskRequest !== undefined) {
                if (showVideoTranslateTaskRequest instanceof ShowVideoTranslateTaskRequest) {
                    taskId = showVideoTranslateTaskRequest.taskId;
                } else {
                    taskId = showVideoTranslateTaskRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showVideoTranslateTask.');
            }

            options.pathParams = { 'task_id': taskId, };
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