import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AddSubtitle } from './model/AddSubtitle';
import { AssetDailySummaryResult } from './model/AssetDailySummaryResult';
import { AssetDetails } from './model/AssetDetails';
import { AssetInfo } from './model/AssetInfo';
import { AssetProcessReq } from './model/AssetProcessReq';
import { AssetReviewReq } from './model/AssetReviewReq';
import { AssetSummary } from './model/AssetSummary';
import { AudioInfo } from './model/AudioInfo';
import { AudioTemplateInfo } from './model/AudioTemplateInfo';
import { BaseInfo } from './model/BaseInfo';
import { CancelAssetTranscodeTaskRequest } from './model/CancelAssetTranscodeTaskRequest';
import { CancelAssetTranscodeTaskResponse } from './model/CancelAssetTranscodeTaskResponse';
import { CancelExtractAudioTaskRequest } from './model/CancelExtractAudioTaskRequest';
import { CancelExtractAudioTaskResponse } from './model/CancelExtractAudioTaskResponse';
import { CdnLog } from './model/CdnLog';
import { CheckMd5DuplicationRequest } from './model/CheckMd5DuplicationRequest';
import { CheckMd5DuplicationResponse } from './model/CheckMd5DuplicationResponse';
import { Common } from './model/Common';
import { CommonInfo } from './model/CommonInfo';
import { ConfirmAssetUploadReq } from './model/ConfirmAssetUploadReq';
import { ConfirmAssetUploadRequest } from './model/ConfirmAssetUploadRequest';
import { ConfirmAssetUploadResponse } from './model/ConfirmAssetUploadResponse';
import { ConfirmImageUploadReq } from './model/ConfirmImageUploadReq';
import { ConfirmImageUploadRequest } from './model/ConfirmImageUploadRequest';
import { ConfirmImageUploadResponse } from './model/ConfirmImageUploadResponse';
import { CoverInfo } from './model/CoverInfo';
import { CreateAssetByFileUploadReq } from './model/CreateAssetByFileUploadReq';
import { CreateAssetByFileUploadRequest } from './model/CreateAssetByFileUploadRequest';
import { CreateAssetByFileUploadResponse } from './model/CreateAssetByFileUploadResponse';
import { CreateAssetCategoryRequest } from './model/CreateAssetCategoryRequest';
import { CreateAssetCategoryResponse } from './model/CreateAssetCategoryResponse';
import { CreateAssetProcessTaskRequest } from './model/CreateAssetProcessTaskRequest';
import { CreateAssetProcessTaskResponse } from './model/CreateAssetProcessTaskResponse';
import { CreateAssetReviewTaskRequest } from './model/CreateAssetReviewTaskRequest';
import { CreateAssetReviewTaskResponse } from './model/CreateAssetReviewTaskResponse';
import { CreateCategoryReq } from './model/CreateCategoryReq';
import { CreateExtractAudioTaskRequest } from './model/CreateExtractAudioTaskRequest';
import { CreateExtractAudioTaskResponse } from './model/CreateExtractAudioTaskResponse';
import { CreatePreheatingAssetReq } from './model/CreatePreheatingAssetReq';
import { CreatePreheatingAssetRequest } from './model/CreatePreheatingAssetRequest';
import { CreatePreheatingAssetResponse } from './model/CreatePreheatingAssetResponse';
import { CreateTakeOverTaskReq } from './model/CreateTakeOverTaskReq';
import { CreateTakeOverTaskRequest } from './model/CreateTakeOverTaskRequest';
import { CreateTakeOverTaskResponse } from './model/CreateTakeOverTaskResponse';
import { CreateTemplateGroupCollectionRequest } from './model/CreateTemplateGroupCollectionRequest';
import { CreateTemplateGroupCollectionResponse } from './model/CreateTemplateGroupCollectionResponse';
import { CreateTemplateGroupRequest } from './model/CreateTemplateGroupRequest';
import { CreateTemplateGroupResponse } from './model/CreateTemplateGroupResponse';
import { CreateTranscodeTemplate } from './model/CreateTranscodeTemplate';
import { CreateTranscodeTemplateRequest } from './model/CreateTranscodeTemplateRequest';
import { CreateTranscodeTemplateResponse } from './model/CreateTranscodeTemplateResponse';
import { CreateWatermarkTemplateReq } from './model/CreateWatermarkTemplateReq';
import { CreateWatermarkTemplateRequest } from './model/CreateWatermarkTemplateRequest';
import { CreateWatermarkTemplateResponse } from './model/CreateWatermarkTemplateResponse';
import { DeleteAssetCategoryRequest } from './model/DeleteAssetCategoryRequest';
import { DeleteAssetCategoryResponse } from './model/DeleteAssetCategoryResponse';
import { DeleteAssetsRequest } from './model/DeleteAssetsRequest';
import { DeleteAssetsResponse } from './model/DeleteAssetsResponse';
import { DeleteResult } from './model/DeleteResult';
import { DeleteSubtitle } from './model/DeleteSubtitle';
import { DeleteTemplateGroupCollectionRequest } from './model/DeleteTemplateGroupCollectionRequest';
import { DeleteTemplateGroupCollectionResponse } from './model/DeleteTemplateGroupCollectionResponse';
import { DeleteTemplateGroupRequest } from './model/DeleteTemplateGroupRequest';
import { DeleteTemplateGroupResponse } from './model/DeleteTemplateGroupResponse';
import { DeleteTranscodeProductReq } from './model/DeleteTranscodeProductReq';
import { DeleteTranscodeProductRequest } from './model/DeleteTranscodeProductRequest';
import { DeleteTranscodeProductResponse } from './model/DeleteTranscodeProductResponse';
import { DeleteTranscodeTemplateRequest } from './model/DeleteTranscodeTemplateRequest';
import { DeleteTranscodeTemplateResponse } from './model/DeleteTranscodeTemplateResponse';
import { DeleteWatermarkTemplateRequest } from './model/DeleteWatermarkTemplateRequest';
import { DeleteWatermarkTemplateResponse } from './model/DeleteWatermarkTemplateResponse';
import { ExtractAudioTaskReq } from './model/ExtractAudioTaskReq';
import { FileAddr } from './model/FileAddr';
import { ListAssetCategoryRequest } from './model/ListAssetCategoryRequest';
import { ListAssetCategoryResponse } from './model/ListAssetCategoryResponse';
import { ListAssetDailySummaryLogRequest } from './model/ListAssetDailySummaryLogRequest';
import { ListAssetDailySummaryLogResponse } from './model/ListAssetDailySummaryLogResponse';
import { ListAssetListRequest } from './model/ListAssetListRequest';
import { ListAssetListResponse } from './model/ListAssetListResponse';
import { ListDomainLogsRequest } from './model/ListDomainLogsRequest';
import { ListDomainLogsResponse } from './model/ListDomainLogsResponse';
import { ListTakeOverTaskRequest } from './model/ListTakeOverTaskRequest';
import { ListTakeOverTaskResponse } from './model/ListTakeOverTaskResponse';
import { ListTemplateGroupCollectionRequest } from './model/ListTemplateGroupCollectionRequest';
import { ListTemplateGroupCollectionResponse } from './model/ListTemplateGroupCollectionResponse';
import { ListTemplateGroupRequest } from './model/ListTemplateGroupRequest';
import { ListTemplateGroupResponse } from './model/ListTemplateGroupResponse';
import { ListTopStatisticsRequest } from './model/ListTopStatisticsRequest';
import { ListTopStatisticsResponse } from './model/ListTopStatisticsResponse';
import { ListTranscodeTemplateRequest } from './model/ListTranscodeTemplateRequest';
import { ListTranscodeTemplateResponse } from './model/ListTranscodeTemplateResponse';
import { ListWatermarkTemplateRequest } from './model/ListWatermarkTemplateRequest';
import { ListWatermarkTemplateResponse } from './model/ListWatermarkTemplateResponse';
import { MetaData } from './model/MetaData';
import { ModifySubtitleRequest } from './model/ModifySubtitleRequest';
import { ModifySubtitleResponse } from './model/ModifySubtitleResponse';
import { ModifyTemplateGroupCollection } from './model/ModifyTemplateGroupCollection';
import { ModifyTransTemplate } from './model/ModifyTransTemplate';
import { ModifyTransTemplateGroup } from './model/ModifyTransTemplateGroup';
import { ObsInfo } from './model/ObsInfo';
import { Output } from './model/Output';
import { Parameter } from './model/Parameter';
import { PictureReviewRet } from './model/PictureReviewRet';
import { PlayInfo } from './model/PlayInfo';
import { PreheatingResult } from './model/PreheatingResult';
import { ProductDelFailInfo } from './model/ProductDelFailInfo';
import { ProductGroupDelFailInfo } from './model/ProductGroupDelFailInfo';
import { ProductGroupInfo } from './model/ProductGroupInfo';
import { ProductUrlInfo } from './model/ProductUrlInfo';
import { PublishAssetFromObsReq } from './model/PublishAssetFromObsReq';
import { PublishAssetFromObsRequest } from './model/PublishAssetFromObsRequest';
import { PublishAssetFromObsResponse } from './model/PublishAssetFromObsResponse';
import { PublishAssetReq } from './model/PublishAssetReq';
import { PublishAssetsRequest } from './model/PublishAssetsRequest';
import { PublishAssetsResponse } from './model/PublishAssetsResponse';
import { QualityInfo } from './model/QualityInfo';
import { QualityInfoList } from './model/QualityInfoList';
import { QueryCategoryRsp } from './model/QueryCategoryRsp';
import { Review } from './model/Review';
import { ReviewDetail } from './model/ReviewDetail';
import { ReviewInfo } from './model/ReviewInfo';
import { ShowAssetCipherRequest } from './model/ShowAssetCipherRequest';
import { ShowAssetCipherResponse } from './model/ShowAssetCipherResponse';
import { ShowAssetDetailRequest } from './model/ShowAssetDetailRequest';
import { ShowAssetDetailResponse } from './model/ShowAssetDetailResponse';
import { ShowAssetMetaRequest } from './model/ShowAssetMetaRequest';
import { ShowAssetMetaResponse } from './model/ShowAssetMetaResponse';
import { ShowAssetTempAuthorityRequest } from './model/ShowAssetTempAuthorityRequest';
import { ShowAssetTempAuthorityResponse } from './model/ShowAssetTempAuthorityResponse';
import { ShowCdnStatisticsRequest } from './model/ShowCdnStatisticsRequest';
import { ShowCdnStatisticsResponse } from './model/ShowCdnStatisticsResponse';
import { ShowPreheatingAssetRequest } from './model/ShowPreheatingAssetRequest';
import { ShowPreheatingAssetResponse } from './model/ShowPreheatingAssetResponse';
import { ShowStorageModeTypeRequest } from './model/ShowStorageModeTypeRequest';
import { ShowStorageModeTypeResponse } from './model/ShowStorageModeTypeResponse';
import { ShowTakeOverAssetDetailsRequest } from './model/ShowTakeOverAssetDetailsRequest';
import { ShowTakeOverAssetDetailsResponse } from './model/ShowTakeOverAssetDetailsResponse';
import { ShowTakeOverTaskDetailsRequest } from './model/ShowTakeOverTaskDetailsRequest';
import { ShowTakeOverTaskDetailsResponse } from './model/ShowTakeOverTaskDetailsResponse';
import { ShowVodRetrievalRequest } from './model/ShowVodRetrievalRequest';
import { ShowVodRetrievalResponse } from './model/ShowVodRetrievalResponse';
import { ShowVodStatisticsRequest } from './model/ShowVodStatisticsRequest';
import { ShowVodStatisticsResponse } from './model/ShowVodStatisticsResponse';
import { Subtitle } from './model/Subtitle';
import { SubtitleInfo } from './model/SubtitleInfo';
import { SubtitleModifyReq } from './model/SubtitleModifyReq';
import { TakeOverTask } from './model/TakeOverTask';
import { TaskResult } from './model/TaskResult';
import { TemplateGroup } from './model/TemplateGroup';
import { TemplateGroupCollection } from './model/TemplateGroupCollection';
import { TextReviewRet } from './model/TextReviewRet';
import { Thumbnail } from './model/Thumbnail';
import { ThumbnailInfo } from './model/ThumbnailInfo';
import { ThumbnailRsp } from './model/ThumbnailRsp';
import { TopUrl } from './model/TopUrl';
import { TransTemplateGroup } from './model/TransTemplateGroup';
import { TransTemplateGroupCollection } from './model/TransTemplateGroupCollection';
import { TransTemplateRsp } from './model/TransTemplateRsp';
import { TranscodeInfo } from './model/TranscodeInfo';
import { UnpublishAssetsRequest } from './model/UnpublishAssetsRequest';
import { UnpublishAssetsResponse } from './model/UnpublishAssetsResponse';
import { UpdateAssetCategoryRequest } from './model/UpdateAssetCategoryRequest';
import { UpdateAssetCategoryResponse } from './model/UpdateAssetCategoryResponse';
import { UpdateAssetMetaReq } from './model/UpdateAssetMetaReq';
import { UpdateAssetMetaRequest } from './model/UpdateAssetMetaRequest';
import { UpdateAssetMetaResponse } from './model/UpdateAssetMetaResponse';
import { UpdateAssetRequest } from './model/UpdateAssetRequest';
import { UpdateAssetResponse } from './model/UpdateAssetResponse';
import { UpdateBucketAuthorizedReq } from './model/UpdateBucketAuthorizedReq';
import { UpdateBucketAuthorizedRequest } from './model/UpdateBucketAuthorizedRequest';
import { UpdateBucketAuthorizedResponse } from './model/UpdateBucketAuthorizedResponse';
import { UpdateCategoryReq } from './model/UpdateCategoryReq';
import { UpdateCoverByThumbnailReq } from './model/UpdateCoverByThumbnailReq';
import { UpdateCoverByThumbnailRequest } from './model/UpdateCoverByThumbnailRequest';
import { UpdateCoverByThumbnailResponse } from './model/UpdateCoverByThumbnailResponse';
import { UpdateStorageModeReq } from './model/UpdateStorageModeReq';
import { UpdateStorageModeRequest } from './model/UpdateStorageModeRequest';
import { UpdateStorageModeResponse } from './model/UpdateStorageModeResponse';
import { UpdateStorageModeTypeReq } from './model/UpdateStorageModeTypeReq';
import { UpdateStorageModeTypeRequest } from './model/UpdateStorageModeTypeRequest';
import { UpdateStorageModeTypeResponse } from './model/UpdateStorageModeTypeResponse';
import { UpdateTemplateGroupCollectionRequest } from './model/UpdateTemplateGroupCollectionRequest';
import { UpdateTemplateGroupCollectionResponse } from './model/UpdateTemplateGroupCollectionResponse';
import { UpdateTemplateGroupRequest } from './model/UpdateTemplateGroupRequest';
import { UpdateTemplateGroupResponse } from './model/UpdateTemplateGroupResponse';
import { UpdateTranscodeTemplateRequest } from './model/UpdateTranscodeTemplateRequest';
import { UpdateTranscodeTemplateResponse } from './model/UpdateTranscodeTemplateResponse';
import { UpdateWatermarkTemplateReq } from './model/UpdateWatermarkTemplateReq';
import { UpdateWatermarkTemplateRequest } from './model/UpdateWatermarkTemplateRequest';
import { UpdateWatermarkTemplateResponse } from './model/UpdateWatermarkTemplateResponse';
import { UploadAsset } from './model/UploadAsset';
import { UploadAssetReq } from './model/UploadAssetReq';
import { UploadMetaDataByUrl } from './model/UploadMetaDataByUrl';
import { UploadMetaDataByUrlReq } from './model/UploadMetaDataByUrlReq';
import { UploadMetaDataByUrlRequest } from './model/UploadMetaDataByUrlRequest';
import { UploadMetaDataByUrlResponse } from './model/UploadMetaDataByUrlResponse';
import { VideoInfo } from './model/VideoInfo';
import { VideoTemplateInfo } from './model/VideoTemplateInfo';
import { VideoTypeRef } from './model/VideoTypeRef';
import { VodRetrievalData } from './model/VodRetrievalData';
import { VodSampleData } from './model/VodSampleData';
import { WatermarkTemplate } from './model/WatermarkTemplate';

export class VodClient {
    public static newBuilder(): ClientBuilder<VodClient> {
            let client = new ClientBuilder<VodClient>(newClient);
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
     * 取消媒资转码任务，只能取消排队中的转码任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 取消媒资转码任务
     * @param {string} assetId 媒资ID。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cancelAssetTranscodeTask(cancelAssetTranscodeTaskRequest?: CancelAssetTranscodeTaskRequest): Promise<CancelAssetTranscodeTaskResponse> {
        const options = ParamCreater().cancelAssetTranscodeTask(cancelAssetTranscodeTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 取消提取音频任务，只有排队中的提取音频任务才可以取消。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 取消提取音频任务
     * @param {string} assetId 媒资ID。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cancelExtractAudioTask(cancelExtractAudioTaskRequest?: CancelExtractAudioTaskRequest): Promise<CancelExtractAudioTaskResponse> {
        const options = ParamCreater().cancelExtractAudioTask(cancelExtractAudioTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 校验媒资文件是否已存储于视频点播服务中。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 上传检验
     * @param {number} size 文件大小
     * @param {string} md5 文件MD5。  建议参考[上传校验](https://support.huaweicloud.com/api-vod/vod_04_0212.html#vod_04_0212__section575102165412)生成对应的MD5值。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkMd5Duplication(checkMd5DuplicationRequest?: CheckMd5DuplicationRequest): Promise<CheckMd5DuplicationResponse> {
        const options = ParamCreater().checkMd5Duplication(checkMd5DuplicationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 媒资分段上传完成后，需要调用此接口通知点播服务媒资上传的状态，表示媒资上传创建完成。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 确认媒资上传
     * @param {ConfirmAssetUploadReq} confirmAssetUploadReq 确认媒资上传
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public confirmAssetUpload(confirmAssetUploadRequest?: ConfirmAssetUploadRequest): Promise<ConfirmAssetUploadResponse> {
        const options = ParamCreater().confirmAssetUpload(confirmAssetUploadRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 确认水印图片上传状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 确认水印图片上传
     * @param {ConfirmImageUploadReq} confirmImageUploadReq 上传方式创建媒资
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public confirmImageUpload(confirmImageUploadRequest?: ConfirmImageUploadRequest): Promise<ConfirmImageUploadResponse> {
        const options = ParamCreater().confirmImageUpload(confirmImageUploadRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 调用该接口创建媒资时，需要将对应的媒资文件上传到点播服务的OBS桶中。
     * 
     * 若上传的单媒资文件大小小于20M，则可以直接用PUT方法对该接口返回的地址进行上传。具体使用方法请参考[示例1：媒资上传（20M以下）](https://support.huaweicloud.com/api-vod/vod_04_0195.html)。
     * 
     * 若上传的单个媒资大小大于20M，则需要进行二进制流分割后上传，该接口的具体使用方法请参考[示例2：媒资分段上传（20M以上）](https://support.huaweicloud.com/api-vod/vod_04_0216.html)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建媒资：上传方式
     * @param {CreateAssetByFileUploadReq} createAssetByFileReq 上传方式创建媒资
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAssetByFileUpload(createAssetByFileUploadRequest?: CreateAssetByFileUploadRequest): Promise<CreateAssetByFileUploadResponse> {
        const options = ParamCreater().createAssetByFileUpload(createAssetByFileUploadRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建媒资分类。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建媒资分类
     * @param {CreateCategoryReq} createCategoryReq 创建媒资分类
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAssetCategory(createAssetCategoryRequest?: CreateAssetCategoryRequest): Promise<CreateAssetCategoryResponse> {
        const options = ParamCreater().createAssetCategory(createAssetCategoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 实现视频转码、截图、加密等处理。既可以同时启动多种操作，也可以只启动一种操作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 媒资处理
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {AssetProcessReq} [assetProcessReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAssetProcessTask(createAssetProcessTaskRequest?: CreateAssetProcessTaskRequest): Promise<CreateAssetProcessTaskResponse> {
        const options = ParamCreater().createAssetProcessTask(createAssetProcessTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 对上传的媒资进行审核。审核后，可以调用[查询媒资详细信息](https://support.huaweicloud.com/api-vod/vod_04_0202.html)接口查看审核结果。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建审核媒资任务
     * @param {AssetReviewReq} assetReviewReq 
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAssetReviewTask(createAssetReviewTaskRequest?: CreateAssetReviewTaskRequest): Promise<CreateAssetReviewTaskResponse> {
        const options = ParamCreater().createAssetReviewTask(createAssetReviewTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 本接口为异步接口，创建音频提取任务下发成功后会返回asset_id和提取的audio_asset_id，但此时音频提取任务并没有立即完成，可通过消息订阅界面配置的音频提取完成事件来获取音频提取任务完成与否。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 音频提取
     * @param {ExtractAudioTaskReq} extractAudioTaskReq 创建提取音频请求体
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createExtractAudioTask(createExtractAudioTaskRequest?: CreateExtractAudioTaskRequest): Promise<CreateExtractAudioTaskResponse> {
        const options = ParamCreater().createExtractAudioTask(createExtractAudioTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 媒资发布后，可通过指定媒资ID或URL向CDN预热。用户初次请求时，将由CDN节点提供请求媒资，加快用户下载缓存时间，提高用户体验。单租户每天最多预热1000个。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary CDN预热
     * @param {CreatePreheatingAssetReq} createPreheatingAssetReq CDN预热
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPreheatingAsset(createPreheatingAssetRequest?: CreatePreheatingAssetRequest): Promise<CreatePreheatingAssetResponse> {
        const options = ParamCreater().createPreheatingAsset(createPreheatingAssetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过存量托管的方式，将已存储在OBS桶中的音视频文件同步到点播服务。
     * 
     * OBS托管方式分为增量托管和存量托管，增量托管暂只支持通过视频点播控制台配置，配置后，若OBS有新增音视频文件，则会自动同步到点播服务中，具体请参见[增量托管](https://support.huaweicloud.com/usermanual-vod/vod010032.html)。两个托管方式都需要先将对应的OBS桶授权给点播服务，具体请参见[桶授权](https://support.huaweicloud.com/usermanual-vod/vod010031.html)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建媒资：OBS托管方式
     * @param {CreateTakeOverTaskReq} createTakeOverTaskReq 
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTakeOverTask(createTakeOverTaskRequest?: CreateTakeOverTaskRequest): Promise<CreateTakeOverTaskResponse> {
        const options = ParamCreater().createTakeOverTask(createTakeOverTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建自定义转码模板组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建自定义转码模板组
     * @param {TransTemplateGroup} transTemplateGroup 创建自定义模板组
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
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
     * 创建转码模板组集合
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建转码模板组集合
     * @param {TransTemplateGroupCollection} createTemplateGroupCollectionRequestBody 创建自定义模板组集合 
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTemplateGroupCollection(createTemplateGroupCollectionRequest?: CreateTemplateGroupCollectionRequest): Promise<CreateTemplateGroupCollectionResponse> {
        const options = ParamCreater().createTemplateGroupCollection(createTemplateGroupCollectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建自定义转码模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建自定义转码模板
     * @param {CreateTranscodeTemplate} createTranscodeTemplateRequestBody 创建自定义模板 
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTranscodeTemplate(createTranscodeTemplateRequest?: CreateTranscodeTemplateRequest): Promise<CreateTranscodeTemplateResponse> {
        const options = ParamCreater().createTranscodeTemplate(createTranscodeTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建水印模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建水印模板
     * @param {CreateWatermarkTemplateReq} createWatermarkTemplateReq 创建水印模板请求体
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
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
     * 删除媒资分类。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除媒资分类
     * @param {number} id 视频分类ID
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAssetCategory(deleteAssetCategoryRequest?: DeleteAssetCategoryRequest): Promise<DeleteAssetCategoryResponse> {
        const options = ParamCreater().deleteAssetCategory(deleteAssetCategoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除媒资。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除媒资
     * @param {Array<string>} assetId 媒资ID，支持一次删除多个媒资，批量删除时以逗号分隔。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {string} [deleteType] 删除类型，当值为origin时只删除源文件，保留转码后文件。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAssets(deleteAssetsRequest?: DeleteAssetsRequest): Promise<DeleteAssetsResponse> {
        const options = ParamCreater().deleteAssets(deleteAssetsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除自定义转码模板组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除自定义转码模板组
     * @param {string} groupId 模板组id
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
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
     * 删除转码模板组集合
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除转码模板组集合
     * @param {string} groupCollectionId 模板组集合id 
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTemplateGroupCollection(deleteTemplateGroupCollectionRequest?: DeleteTemplateGroupCollectionRequest): Promise<DeleteTemplateGroupCollectionResponse> {
        const options = ParamCreater().deleteTemplateGroupCollection(deleteTemplateGroupCollectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除转码产物。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除转码产物
     * @param {DeleteTranscodeProductReq} deleteTranscodeProductRequestBody 删除转码产物请求体 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTranscodeProduct(deleteTranscodeProductRequest?: DeleteTranscodeProductRequest): Promise<DeleteTranscodeProductResponse> {
        const options = ParamCreater().deleteTranscodeProduct(deleteTranscodeProductRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除自定义模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除自定义模板
     * @param {string} groupId 模板id 
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTranscodeTemplate(deleteTranscodeTemplateRequest?: DeleteTranscodeTemplateRequest): Promise<DeleteTranscodeTemplateResponse> {
        const options = ParamCreater().deleteTranscodeTemplate(deleteTranscodeTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除水印模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除水印模板
     * @param {string} id 水印模板配置id 
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
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
     * 查询指定分类信息，及其子分类（即下一级分类）的列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定分类信息
     * @param {number} id 视频分类ID。  若设置为0，则查询所有一级分类。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAssetCategory(listAssetCategoryRequest?: ListAssetCategoryRequest): Promise<ListAssetCategoryResponse> {
        const options = ParamCreater().listAssetCategory(listAssetCategoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询媒资日播放统计数据。
     * 
     * 使用媒资日播放统计查询API前，需要先提交工单开通统计功能，才能触发统计任务。
     * 
     * 支持查询最近一年的播放统计数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询媒资日播放统计数据
     * @param {string} startTime 查询开始时间。仅支持查询一年内的数据，且一次查询的日期跨度不能超过90天。  如果查询指定开始日期的数据，格式为：yyyyMMdd000000。
     * @param {string} endTime 查询结束时间。仅支持查询一年内的数据，且一次查询的日期跨度不能超过90天。  如果查询指定结束日期的数据，格式为：yyyyMMdd000000。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {number} [offset] 偏移量，表示查询该偏移量后面的记录。 
     * @param {number} [limit] 查询返回记录的数量限制。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAssetDailySummaryLog(listAssetDailySummaryLogRequest?: ListAssetDailySummaryLogRequest): Promise<ListAssetDailySummaryLogResponse> {
        const options = ParamCreater().listAssetDailySummaryLog(listAssetDailySummaryLogRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询媒资列表，列表中的每一条记录包含媒资的概要信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询媒资列表
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {Array<string>} [assetId] 媒资ID，最多同时查询10个。
     * @param {Array<'CREATING' | 'FAILED' | 'CREATED' | 'PUBLISHED' | 'WAITING_TRANSCODE' | 'TRANSCODING' | 'TRANSCODE_SUCCEED' | 'TRANSCODE_FAILED' | 'THUMBNAILING' | 'THUMBNAIL_SUCCEED' | 'THUMBNAIL_FAILED' | 'UN_REVIEW' | 'REVIEWING' | 'REVIEW_SUSPICIOUS' | 'REVIEW_PASSED' | 'REVIEW_FAILED' | 'REVIEW_BLOCKED'>} [status] 媒资状态，同时查询多个状态的媒资。  取值如下： - CREATING：上传中 - FAILED：上传失败 - CREATED：上传成功 - PUBLISHED：已发布 - TRANSCODING：转码中 - TRANSCODE_SUCCEED：转码成功 - TRANSCODE_FAILED：转码失败 - THUMBNAILING：截图中 - THUMBNAIL_SUCCEED：截图成功 - THUMBNAIL_FAILED：截图失败 - UN_REVIEW：未审核 - REVIEWING：审核中 - REVIEW_SUSPICIOUS ：审核不过，待人工复审 - REVIEW_PASSED：审核通过 - REVIEW_FAILED：审核任务失败 - REVIEW_BLOCKED：已屏蔽
     * @param {string} [startTime] 起始时间。  格式为yyyymmddhhm mss。必须是与时区无关的UTC时间。
     * @param {string} [endTime] 结束时间。  格式为yyyymmddhhm mss。必须是与时区无关的UTC时间。
     * @param {number} [categoryId] 分类ID。
     * @param {string} [tags] 媒资标签。 单个标签不超过16个字节， 最多不超过16 个标签。 多个用英文逗号分隔，UTF8编码。
     * @param {string} [queryString] 在媒资标题、 描述、分类名称中模糊查询的字符串。
     * @param {Array<string>} [mediaType] 音视频文件的格式，支持多格式查询，最多不超过20个。  取值如下： - 视频文件格式：MP4、TS、MOV、MXF、MPG、FLV、WMV、AVI、M4V、F4V、MPEG - 音频文件格式：MP3、OGG、WAV、WMA、APE、FLAC、AAC、AC3、MMF、AMR、M4A、M4R、WV、MP2
     * @param {number} [page] 分页编号。  默认值：0。
     * @param {number} [size] 每页记录数。  取值范围：[1,100]。  默认值：10。
     * @param {'asc' | 'desc'} [order] 查询顺序，按createTime顺序还是倒序
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAssetList(listAssetListRequest?: ListAssetListRequest): Promise<ListAssetListResponse> {
        const options = ParamCreater().listAssetList(listAssetListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定点播域名某段时间内在CDN的相关日志。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询域名播放日志
     * @param {string} domainName 加速域名，参考格式：www.test1.com。
     * @param {string} queryDate 查询开始时间，格式为yyyyMMddHHmmss。 - 查询结果为开始时间之后24小时内的日志数据 - 只能查最近一个月内的数据
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {number} [pageSize] 每页显示日志数量。 
     * @param {number} [pageNumber] 当前页数。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDomainLogs(listDomainLogsRequest?: ListDomainLogsRequest): Promise<ListDomainLogsResponse> {
        const options = ParamCreater().listDomainLogs(listDomainLogsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询转码模板组列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询转码模板组列表
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {string} [groupId] 模板组id
     * @param {string} [status] 模板启用状态
     * @param {number} [page] 分页编号。  默认为0，指定group_id时该参数无效。
     * @param {number} [size] 每页记录数。  默认为10，范围[1,100]。指定group_id时该参数无效。
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
     * 查询转码模板组集合
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询自定义模板组集合
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {string} [groupCollectionId] 模板组集合id 
     * @param {number} [offset] 偏移量。默认为0。指定group_collection_id时该参数无效。&lt;br/&gt; 
     * @param {number} [limit] 每页记录数。默认为10，范围[1,100]。指定group_collection_id时该参数无效。&lt;br/&gt; 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTemplateGroupCollection(listTemplateGroupCollectionRequest?: ListTemplateGroupCollectionRequest): Promise<ListTemplateGroupCollectionResponse> {
        const options = ParamCreater().listTemplateGroupCollection(listTemplateGroupCollectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定域名在指定日期播放次数排名Top 100的媒资统计数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询TopN媒资信息
     * @param {string} domain 查询域名，暂只支持查询单个或者全部域名。  取值如下： - 单个加速域名，格式：example.test1.com。 - ALL：表示查询名下全部域名。
     * @param {string} date 查询日期，格式为yyyymmdd - date必须为昨天或之前的日期。 - 最多只能查最近一个月内的数据。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTopStatistics(listTopStatisticsRequest?: ListTopStatisticsRequest): Promise<ListTopStatisticsResponse> {
        const options = ParamCreater().listTopStatistics(listTopStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询转码模板列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询转码模板列表
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {string} [groupId] 模板id 
     * @param {boolean} [isDefault] 是否默认 
     * @param {number} [offset] 偏移量。默认为0。指定group_id时该参数无效。&lt;br/&gt; 
     * @param {number} [limit] 每页记录数。默认为10，范围[1,100]。指定group_id时该参数无效。&lt;br/&gt; 
     * @param {string} [queryString] 按照模板名和描述模糊查询。指定group_id时该参数无效。&lt;br/&gt; 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTranscodeTemplate(listTranscodeTemplateRequest?: ListTranscodeTemplateRequest): Promise<ListTranscodeTemplateResponse> {
        const options = ParamCreater().listTranscodeTemplate(listTranscodeTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询水印模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询水印列表
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {Array<string>} [id] 水印模板配置id，一次最多10个。
     * @param {number} [page] 分页编号。  默认为0。指定id时该参数无效。
     * @param {number} [size] 每页记录数。  默认为10，范围[1,100]。指定id时该参数无效。
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
     * 多字幕封装，仅支持 HLS VTT格式
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 多字幕封装
     * @param {SubtitleModifyReq} subtitleModifyReq 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public modifySubtitle(modifySubtitleRequest?: ModifySubtitleRequest): Promise<ModifySubtitleResponse> {
        const options = ParamCreater().modifySubtitle(modifySubtitleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 若您在使用点播服务前，已经在OBS桶中存储了音视频文件，您可以使用该接口将存储在OBS桶中的音视频文件转存到点播服务中，使用点播服务的音视频管理功能。调用该接口前，您需要调用[桶授权](https://support.huaweicloud.com/api-vod/vod_04_0199.html)接口，将存储音视频文件的OBS桶授权给点播服务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建媒资：OBS转存方式
     * @param {PublishAssetFromObsReq} publishAssetFromObsReq 从OBS一键发布媒资
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public publishAssetFromObs(publishAssetFromObsRequest?: PublishAssetFromObsRequest): Promise<PublishAssetFromObsResponse> {
        const options = ParamCreater().publishAssetFromObs(publishAssetFromObsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将媒资设置为发布状态。支持批量发布。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 媒资发布
     * @param {PublishAssetReq} publishAssetReq 媒资发布
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public publishAssets(publishAssetsRequest?: PublishAssetsRequest): Promise<PublishAssetsResponse> {
        const options = ParamCreater().publishAssets(publishAssetsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 终端播放HLS加密视频时，向租户管理系统请求密钥，租户管理系统先查询其本地有没有已缓存的密钥，没有时则调用此接口向VOD查询。该接口的具体使用场景请参见[通过HLS加密防止视频泄露](https://support.huaweicloud.com/bestpractice-vod/vod_10_0004.html)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 密钥查询
     * @param {string} assetId 媒资ID。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAssetCipher(showAssetCipherRequest?: ShowAssetCipherRequest): Promise<ShowAssetCipherResponse> {
        const options = ParamCreater().showAssetCipher(showAssetCipherRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定媒资的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定媒资的详细信息
     * @param {string} assetId 媒资ID。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {Array<'base_info' | 'transcode_info' | 'thumbnail_info' | 'review_info'>} [categories] 查询的信息类型。 - 为空时表示查询所有信息。 - 不为空时支持同时查询一个或者多个类型的信息，取值如下： - - base_info：媒资基本信息。 - - transcode_info：转码结果信息。 - - thumbnail_info：截图结果信息。 - - review_info：审核结果信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAssetDetail(showAssetDetailRequest?: ShowAssetDetailRequest): Promise<ShowAssetDetailResponse> {
        const options = ParamCreater().showAssetDetail(showAssetDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询媒资信息，支持指定媒资ID、分类、状态、起止时间查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询媒资信息
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {Array<string>} [assetId] 媒资id，最多同时查询10个媒资。
     * @param {Array<'UNCREATED' | 'DELETED' | 'CANCELLED' | 'SERVER_ERROR' | 'UPLOAD_FAILED' | 'CREATING' | 'PUBLISHED' | 'WAITING_TRANSCODE' | 'TRANSCODING' | 'TRANSCODE_FAILED' | 'TRANSCODE_SUCCEED' | 'CREATED'>} [status] 媒资状态。  取值如下： - UNCREATED：未创建（媒资ID不存在 ） - DELETED：已删除 - CANCELLED：上传取消 - SERVER_ERROR：上传失败（点播服务端故障） - UPLOAD_FAILED：上传失败（向OBS上传失败） - CREATING：创建中 - PUBLISHED：已发布 - TRANSCODING：待发布（转码中） - TRANSCODE_FAILED：待发布（转码失败） - TRANSCODE_SUCCEED：待发布（转码成功） - CREATED：待发布（未转码）
     * @param {Array<'TRANSCODING' | 'TRANSCODE_FAILED' | 'TRANSCODE_SUCCEED' | 'UN_TRANSCODE' | 'WAITING_TRANSCODE'>} [transcodeStatus] 转码状态  取值如下： - TRANSCODING：转码中 - TRANSCODE_FAILED：转码失败 - TRANSCODE_SUCCEED：转码成功 - UN_TRANSCODE：未转码 - WAITING_TRANSCODE：等待转码
     * @param {Array<'PUBLISHED' | 'CREATED'>} [assetStatus] 媒资状态。  取值如下： - PUBLISHED：已发布 - CREATED：未发布
     * @param {string} [startTime] 起始时间，查询指定“**asset_id**”时，该参数无效。  格式为yyyymmddhhmmss。必须是与时区无关的UTC时间。
     * @param {string} [endTime] 结束时间，查询指定“**asset_id**”时，该参数无效。  格式为yyyymmddhhmmss。必须是与时区无关的UTC时间。
     * @param {number} [categoryId] 分类ID。
     * @param {string} [tags] 媒资标签。  单个标签不超过16个字节，最多不超过16个标签。  多个用逗号分隔，UTF8编码。
     * @param {string} [queryString] 在媒资标题、描述中模糊查询的字符串。
     * @param {number} [page] 分页编号，查询指定“asset_id”时，该参数无效。  默认值：0。
     * @param {number} [size] 每页记录数，查询指定“**asset_id**”时，该参数无效。  取值范围：[1,100]。  默认值：10。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAssetMeta(showAssetMetaRequest?: ShowAssetMetaRequest): Promise<ShowAssetMetaResponse> {
        const options = ParamCreater().showAssetMeta(showAssetMetaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 客户端请求创建媒资时，如果媒资文件超过20MB，需采用分段的方式向OBS上传，在每次与OBS交互前，客户端需通过此接口获取到授权方可与OBS交互。
     * 
     * 该接口可以获取[初始化多段上传任务](https://support.huaweicloud.com/api-obs/obs_04_0098.html)、[上传段](https://support.huaweicloud.com/api-obs/obs_04_0099.html)、[合并段](https://support.huaweicloud.com/api-obs/obs_04_0102.html)、[列举已上传段](https://support.huaweicloud.com/api-obs/obs_04_0101.html)、[取消段合并](https://support.huaweicloud.com/api-obs/obs_04_0103.html)的带有临时授权的URL，用户需要根据OBS的接口文档配置相应请求的HTTP请求方法、请求头、请求体，然后请求对应的带有临时授权的URL。
     * 
     * 视频分段上传方式和OBS的接口文档保持一致，包括HTTP请求方法、请求头、请求体等各种入参，此接口的作用是为用户生成带有鉴权信息的URL（鉴权信息即query_str），用来替换OBS接口中对应的URL，临时给用户开通向点播服务的桶上传文件的权限。
     * 
     * 调用获取授权接口时需要传入bucket、object_key、http_verb，其中bucket和object_key是由[创建媒资：上传方式](https://support.huaweicloud.com/api-vod/vod_04_0196.html)接口中返回的响应体中的target字段获得的bucket和object，http_verb需要根据指定的操作选择。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取分段上传授权
     * @param {string} httpVerb 分段上传时调用OBS接口的HTTP方法，具体操作需要的HTTP方法请参考OBS的接口文档。  - 初始化上传任务：POST - 上传段：PUT - 合并段：POST - 取消段：DELETE - 列举已上传段：GET
     * @param {string} bucket 桶名。  调用[创建媒资：上传方式](https://support.huaweicloud.com/api-vod/vod_04_0196.html)接口中返回的响应体中的target字段获得的bucket值。
     * @param {string} objectKey 对象名。  调用[创建媒资：上传方式](https://support.huaweicloud.com/api-vod/vod_04_0196.html)接口中返回的响应体中的target字段获得的object值。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {string} [contentType] 文件类型对应的content-type，如MP4对应video/mp4。
     * @param {string} [contentMd5] 上传段时每段的MD5。
     * @param {string} [uploadId] 每一个上传任务的id，是OBS进行初始段后OBS返回的。
     * @param {number} [partNumber] 上传段时每一段的id。  取值范围：[1,10000]。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAssetTempAuthority(showAssetTempAuthorityRequest?: ShowAssetTempAuthorityRequest): Promise<ShowAssetTempAuthorityResponse> {
        const options = ParamCreater().showAssetTempAuthority(showAssetTempAuthorityRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询CDN的统计数据，包括流量、峰值带宽、请求总数、请求命中率、流量命中率。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询CDN统计信息
     * @param {string} statType 统计数据类型。  取值如下： - cdn_bw：CDN峰值带宽 - cdn_flux：CDN流量 - req_num：请求总数 - req_hit_rate：请求命中率 - flux_hit_rate：流量命中率  每次只能查询一种统计数据。
     * @param {string} domain 域名列表，多个域名以逗号（半角）分隔。  示例：example.test1.com,example.test2.com。  ALL表示查询名下全部域名。一次最多查询100个域名。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {string} [startTime] 起始时间，格式为yyyymmddhhmmss。
     * @param {string} [endTime] 结束时间，格式为yyyymmddhhmmss。  - “**start_time**”、“**end_time**”均不存在时，“**start_time**”取当天零点，“end_time”取当前时间。  - “**start_time**”不存在、“**end_time**”存在，请求非法。  - “**start_time**”存在、“**end_time**”不存在，“**end_time**”取当前时间。  - 只能查询最近三个月内的数据，且时间跨度不能超过31天。  - 起始时间和结束时间会自动规整，起始时间规整为指定时间所在的整点时刻，结束时间规整为指定时间所在时间的下一小时整点时刻。
     * @param {number} [interval] 查询粒度间隔。  取值如下： - 时间跨度1天：5分钟、1小时、4小时、8小时，分别对应300秒、3600秒、14400秒和28800秒。 - 时间跨度2~7天：1小时、4小时、8小时、1天，分别对应3600秒、14400秒、28800秒和86400秒。 - 时间跨度8~31天：4小时、8小时、1天，分别对应14400秒、28800秒和86400秒。  单位：秒。  若不设置，默认取对应时间跨度的最小间隔。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCdnStatistics(showCdnStatisticsRequest?: ShowCdnStatisticsRequest): Promise<ShowCdnStatisticsResponse> {
        const options = ParamCreater().showCdnStatistics(showCdnStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询预热结果。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询CDN预热
     * @param {string} taskId 任务ID
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPreheatingAsset(showPreheatingAssetRequest?: ShowPreheatingAssetRequest): Promise<ShowPreheatingAssetResponse> {
        const options = ParamCreater().showPreheatingAsset(showPreheatingAssetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询媒资降冷配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询媒资降冷配置
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showStorageModeType(showStorageModeTypeRequest?: ShowStorageModeTypeRequest): Promise<ShowStorageModeTypeResponse> {
        const options = ParamCreater().showStorageModeType();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ## 典型场景 ##
     *  用于查询点播低频和归档取回量统计数据。&lt;br/&gt;
     * 
     * ## 接口功能 ##
     *  用于查询点播低频和归档取回量统计数据。&lt;br/&gt;
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询取回数据信息
     * @param {string} [startTime] 开始时间 
     * @param {string} [endTime] 结束时间 
     * @param {number} [interval] 采样间隔，单位：秒，取值说明： 时间跨度1天：1小时、4小时、8小时，分别对应3600秒、14400秒和28800秒。 时间跨度2~7天：1小时、4小时、8小时、1天，分别对应3600秒、14400秒、28800秒和86400秒。 时间跨度8~31天：4小时、8小时、1天，分别对应14400秒、28800秒和86400秒。 如果不传，默认取对应时间跨度的最小间隔。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVodRetrieval(showVodRetrievalRequest?: ShowVodRetrievalRequest): Promise<ShowVodRetrievalResponse> {
        const options = ParamCreater().showVodRetrieval(showVodRetrievalRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询点播源站的统计数据，包括存储空间、转码时长。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询源站统计信息
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {string} [startTime] 起始时间，格式为yyyymmddhhmmss。
     * @param {string} [endTime] 结束时间，格式为yyyymmddhhmmss。 - “start_time”、“end_time”均不存在时，“start_time”取当天零点，“end_time”取当前时间。 - “start_time”不存在、“end_time”存在，请求非法。 - “start_time”存在、“end_time”不存在，“end_time”取当前时间。 - 只能查询最近三个月内的数据，且时间跨度不能超过31天。 - 起始时间和结束时间会自动规整，起始时间规整为指定时间所在的整点时刻，结束时间规整为指定时间所在时间的下一小时整点时刻。
     * @param {number} [interval] 查询粒度间隔。  取值如下： - 时间跨度1天：1小时、4小时、8小时，分别对应3600秒、14400秒和28800秒。 - 时间跨度2~7天：1小时、4小时、8小时、1天，分别对应3600秒、14400秒、28800秒和86400秒。 - 时间跨度8~31天：4小时、8小时、1天，分别对应14400秒、28800秒和86400秒。  单位：秒。  若不设置，默认取对应时间跨度的最小间隔。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVodStatistics(showVodStatisticsRequest?: ShowVodStatisticsRequest): Promise<ShowVodStatisticsResponse> {
        const options = ParamCreater().showVodStatistics(showVodStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将媒资设置为未发布状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 媒资发布取消
     * @param {PublishAssetReq} unpublishAssetReq 媒资取消发布
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public unpublishAssets(unpublishAssetsRequest?: UnpublishAssetsRequest): Promise<UnpublishAssetsResponse> {
        const options = ParamCreater().unpublishAssets(unpublishAssetsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 媒资创建后，单独上传封面、更新视频文件或更新已有封面。
     * 
     * 如果是更新视频文件，更新完后要通过[确认媒资上传](https://support.huaweicloud.com/api-vod/vod_04_0198.html)接口通知点播服务。
     * 
     * 如果是更新封面或单独上传封面，则不需通知。
     * 
     * 更新视频可以使用分段上传，具体方式可以参考[示例2：媒资分段上传（20M以上）](https://support.huaweicloud.com/api-vod/vod_04_0216.html)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 视频更新
     * @param {UploadAssetReq} uploadAssetReq 更新媒资文件或封面
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAsset(updateAssetRequest?: UpdateAssetRequest): Promise<UpdateAssetResponse> {
        const options = ParamCreater().updateAsset(updateAssetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改媒资分类。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改媒资分类
     * @param {UpdateCategoryReq} updateCategoryReq 修改媒资分类
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAssetCategory(updateAssetCategoryRequest?: UpdateAssetCategoryRequest): Promise<UpdateAssetCategoryResponse> {
        const options = ParamCreater().updateAssetCategory(updateAssetCategoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改媒资属性。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改媒资属性
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {UpdateAssetMetaReq} [updateAssetMetaReq] 更新媒资信息的请求参数的封装
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAssetMeta(updateAssetMetaRequest?: UpdateAssetMetaRequest): Promise<UpdateAssetMetaResponse> {
        const options = ParamCreater().updateAssetMeta(updateAssetMetaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户可以通过该接口将OBS桶授权给点播服务或取消点播服务的授权。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 桶授权
     * @param {UpdateBucketAuthorizedReq} updateBucketAuthorizedReq 桶策略授权
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
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
     * 将视频截图生成的某张图片设置成封面。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置封面
     * @param {UpdateCoverByThumbnailReq} updateCoverByThumbnailReq 截图文件的URL。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateCoverByThumbnail(updateCoverByThumbnailRequest?: UpdateCoverByThumbnailRequest): Promise<UpdateCoverByThumbnailResponse> {
        const options = ParamCreater().updateCoverByThumbnail(updateCoverByThumbnailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ## 接口功能 ##
     *   修改媒资文件在obs的存储模式&lt;br/&gt;
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改媒资文件在obs的存储模式
     * @param {UpdateStorageModeReq} updateStorageModeRequestBody 修改存储模式请求体 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateStorageMode(updateStorageModeRequest?: UpdateStorageModeRequest): Promise<UpdateStorageModeResponse> {
        const options = ParamCreater().updateStorageMode(updateStorageModeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改媒资降冷粒度。
     * 
     * 默认为整个媒资粒度，支持转为仅原文件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改媒资降冷粒度
     * @param {UpdateStorageModeTypeReq} updateStorageModeTypeRequestBody 修改媒资存储方式
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateStorageModeType(updateStorageModeTypeRequest?: UpdateStorageModeTypeRequest): Promise<UpdateStorageModeTypeResponse> {
        const options = ParamCreater().updateStorageModeType(updateStorageModeTypeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改自定义转码模板组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改自定义转码模板组
     * @param {ModifyTransTemplateGroup} transTemplateGroup 修改模板组
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
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
     * 修改转码模板组结合
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改转码模板组集合
     * @param {ModifyTemplateGroupCollection} updateTemplateGroupCollectionRequestBody 修改自定义模板组集合 
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTemplateGroupCollection(updateTemplateGroupCollectionRequest?: UpdateTemplateGroupCollectionRequest): Promise<UpdateTemplateGroupCollectionResponse> {
        const options = ParamCreater().updateTemplateGroupCollection(updateTemplateGroupCollectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改转码模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改转码模板
     * @param {ModifyTransTemplate} updateTranscodeTemplateRequestBody 修改模板 
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTranscodeTemplate(updateTranscodeTemplateRequest?: UpdateTranscodeTemplateRequest): Promise<UpdateTranscodeTemplateResponse> {
        const options = ParamCreater().updateTranscodeTemplate(updateTranscodeTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改水印模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改水印模板
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {UpdateWatermarkTemplateReq} [updateWatermarkTemplateReq] 修改水印模板请求体 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateWatermarkTemplate(updateWatermarkTemplateRequest?: UpdateWatermarkTemplateRequest): Promise<UpdateWatermarkTemplateResponse> {
        const options = ParamCreater().updateWatermarkTemplate(updateWatermarkTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 基于音视频源文件URL，将音视频文件离线拉取上传到点播服务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建媒资：URL拉取注入
     * @param {UploadMetaDataByUrlReq} uploadMetaDataByUrlReq 创建媒资：URL拉取注入
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public uploadMetaDataByUrl(uploadMetaDataByUrlRequest?: UploadMetaDataByUrlRequest): Promise<UploadMetaDataByUrlResponse> {
        const options = ParamCreater().uploadMetaDataByUrl(uploadMetaDataByUrlRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询OBS存量托管任务列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询托管任务
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {string} [status] 任务状态。
     * @param {string} [taskId] 任务ID。
     * @param {number} [page] 分页编号，默认为0。
     * @param {number} [size] 每页记录数。  默认10，范围[1,100]，指定task_id时该参数无效。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTakeOverTask(listTakeOverTaskRequest?: ListTakeOverTaskRequest): Promise<ListTakeOverTaskResponse> {
        const options = ParamCreater().listTakeOverTask(listTakeOverTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询OBS托管媒资的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询托管媒资详情
     * @param {string} sourceBucket 媒资原始输入存放的桶。
     * @param {string} sourceObject 媒资原始输入的objectKey。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTakeOverAssetDetails(showTakeOverAssetDetailsRequest?: ShowTakeOverAssetDetailsRequest): Promise<ShowTakeOverAssetDetailsResponse> {
        const options = ParamCreater().showTakeOverAssetDetails(showTakeOverAssetDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询OBS存量托管任务详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询托管任务详情
     * @param {string} taskId 任务ID。
     * @param {string} [xSdkDate] 使用AK/SK方式认证时必选，请求的发生时间。 
     * @param {number} [page] 分页编号，默认为0。
     * @param {number} [size] 每页记录数。  默认10，范围[1,100]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTakeOverTaskDetails(showTakeOverTaskDetailsRequest?: ShowTakeOverTaskDetailsRequest): Promise<ShowTakeOverTaskDetailsResponse> {
        const options = ParamCreater().showTakeOverTaskDetails(showTakeOverTaskDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 取消媒资转码任务，只能取消排队中的转码任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        cancelAssetTranscodeTask(cancelAssetTranscodeTaskRequest?: CancelAssetTranscodeTaskRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.0/{project_id}/asset/process",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let assetId;
            
            let xSdkDate;

            if (cancelAssetTranscodeTaskRequest !== null && cancelAssetTranscodeTaskRequest !== undefined) {
                if (cancelAssetTranscodeTaskRequest instanceof CancelAssetTranscodeTaskRequest) {
                    assetId = cancelAssetTranscodeTaskRequest.assetId;
                    xSdkDate = cancelAssetTranscodeTaskRequest.xSdkDate;
                } else {
                    assetId = cancelAssetTranscodeTaskRequest['asset_id'];
                    xSdkDate = cancelAssetTranscodeTaskRequest['X-Sdk-Date'];
                }
            }

        
            if (assetId === null || assetId === undefined) {
                throw new RequiredError('assetId','Required parameter assetId was null or undefined when calling cancelAssetTranscodeTask.');
            }
            if (assetId !== null && assetId !== undefined) {
                localVarQueryParameter['asset_id'] = assetId;
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 取消提取音频任务，只有排队中的提取音频任务才可以取消。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        cancelExtractAudioTask(cancelExtractAudioTaskRequest?: CancelExtractAudioTaskRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.0/{project_id}/asset/extract_audio",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let assetId;
            
            let xSdkDate;

            if (cancelExtractAudioTaskRequest !== null && cancelExtractAudioTaskRequest !== undefined) {
                if (cancelExtractAudioTaskRequest instanceof CancelExtractAudioTaskRequest) {
                    assetId = cancelExtractAudioTaskRequest.assetId;
                    xSdkDate = cancelExtractAudioTaskRequest.xSdkDate;
                } else {
                    assetId = cancelExtractAudioTaskRequest['asset_id'];
                    xSdkDate = cancelExtractAudioTaskRequest['X-Sdk-Date'];
                }
            }

        
            if (assetId === null || assetId === undefined) {
                throw new RequiredError('assetId','Required parameter assetId was null or undefined when calling cancelExtractAudioTask.');
            }
            if (assetId !== null && assetId !== undefined) {
                localVarQueryParameter['asset_id'] = assetId;
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 校验媒资文件是否已存储于视频点播服务中。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkMd5Duplication(checkMd5DuplicationRequest?: CheckMd5DuplicationRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/asset/duplication",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let size;
            
            let md5;
            
            let xSdkDate;

            if (checkMd5DuplicationRequest !== null && checkMd5DuplicationRequest !== undefined) {
                if (checkMd5DuplicationRequest instanceof CheckMd5DuplicationRequest) {
                    size = checkMd5DuplicationRequest.size;
                    md5 = checkMd5DuplicationRequest.md5;
                    xSdkDate = checkMd5DuplicationRequest.xSdkDate;
                } else {
                    size = checkMd5DuplicationRequest['size'];
                    md5 = checkMd5DuplicationRequest['md5'];
                    xSdkDate = checkMd5DuplicationRequest['X-Sdk-Date'];
                }
            }

        
            if (size === null || size === undefined) {
                throw new RequiredError('size','Required parameter size was null or undefined when calling checkMd5Duplication.');
            }
            if (size !== null && size !== undefined) {
                localVarQueryParameter['size'] = size;
            }
            if (md5 === null || md5 === undefined) {
                throw new RequiredError('md5','Required parameter md5 was null or undefined when calling checkMd5Duplication.');
            }
            if (md5 !== null && md5 !== undefined) {
                localVarQueryParameter['md5'] = md5;
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 媒资分段上传完成后，需要调用此接口通知点播服务媒资上传的状态，表示媒资上传创建完成。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        confirmAssetUpload(confirmAssetUploadRequest?: ConfirmAssetUploadRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/asset/status/uploaded",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSdkDate;

            if (confirmAssetUploadRequest !== null && confirmAssetUploadRequest !== undefined) {
                if (confirmAssetUploadRequest instanceof ConfirmAssetUploadRequest) {
                    body = confirmAssetUploadRequest.body
                    xSdkDate = confirmAssetUploadRequest.xSdkDate;
                } else {
                    body = confirmAssetUploadRequest['body'];
                    xSdkDate = confirmAssetUploadRequest['X-Sdk-Date'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 确认水印图片上传状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        confirmImageUpload(confirmImageUploadRequest?: ConfirmImageUploadRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/watermark/status/uploaded",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSdkDate;

            if (confirmImageUploadRequest !== null && confirmImageUploadRequest !== undefined) {
                if (confirmImageUploadRequest instanceof ConfirmImageUploadRequest) {
                    body = confirmImageUploadRequest.body
                    xSdkDate = confirmImageUploadRequest.xSdkDate;
                } else {
                    body = confirmImageUploadRequest['body'];
                    xSdkDate = confirmImageUploadRequest['X-Sdk-Date'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 调用该接口创建媒资时，需要将对应的媒资文件上传到点播服务的OBS桶中。
         * 
         * 若上传的单媒资文件大小小于20M，则可以直接用PUT方法对该接口返回的地址进行上传。具体使用方法请参考[示例1：媒资上传（20M以下）](https://support.huaweicloud.com/api-vod/vod_04_0195.html)。
         * 
         * 若上传的单个媒资大小大于20M，则需要进行二进制流分割后上传，该接口的具体使用方法请参考[示例2：媒资分段上传（20M以上）](https://support.huaweicloud.com/api-vod/vod_04_0216.html)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAssetByFileUpload(createAssetByFileUploadRequest?: CreateAssetByFileUploadRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/asset",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSdkDate;

            if (createAssetByFileUploadRequest !== null && createAssetByFileUploadRequest !== undefined) {
                if (createAssetByFileUploadRequest instanceof CreateAssetByFileUploadRequest) {
                    body = createAssetByFileUploadRequest.body
                    xSdkDate = createAssetByFileUploadRequest.xSdkDate;
                } else {
                    body = createAssetByFileUploadRequest['body'];
                    xSdkDate = createAssetByFileUploadRequest['X-Sdk-Date'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建媒资分类。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAssetCategory(createAssetCategoryRequest?: CreateAssetCategoryRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/asset/category",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSdkDate;

            if (createAssetCategoryRequest !== null && createAssetCategoryRequest !== undefined) {
                if (createAssetCategoryRequest instanceof CreateAssetCategoryRequest) {
                    body = createAssetCategoryRequest.body
                    xSdkDate = createAssetCategoryRequest.xSdkDate;
                } else {
                    body = createAssetCategoryRequest['body'];
                    xSdkDate = createAssetCategoryRequest['X-Sdk-Date'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 实现视频转码、截图、加密等处理。既可以同时启动多种操作，也可以只启动一种操作。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAssetProcessTask(createAssetProcessTaskRequest?: CreateAssetProcessTaskRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/asset/process",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSdkDate;

            if (createAssetProcessTaskRequest !== null && createAssetProcessTaskRequest !== undefined) {
                if (createAssetProcessTaskRequest instanceof CreateAssetProcessTaskRequest) {
                    xSdkDate = createAssetProcessTaskRequest.xSdkDate;
                    body = createAssetProcessTaskRequest.body
                } else {
                    xSdkDate = createAssetProcessTaskRequest['X-Sdk-Date'];
                    body = createAssetProcessTaskRequest['body'];
                }
            }

        
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 对上传的媒资进行审核。审核后，可以调用[查询媒资详细信息](https://support.huaweicloud.com/api-vod/vod_04_0202.html)接口查看审核结果。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAssetReviewTask(createAssetReviewTaskRequest?: CreateAssetReviewTaskRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/asset/review",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSdkDate;

            if (createAssetReviewTaskRequest !== null && createAssetReviewTaskRequest !== undefined) {
                if (createAssetReviewTaskRequest instanceof CreateAssetReviewTaskRequest) {
                    body = createAssetReviewTaskRequest.body
                    xSdkDate = createAssetReviewTaskRequest.xSdkDate;
                } else {
                    body = createAssetReviewTaskRequest['body'];
                    xSdkDate = createAssetReviewTaskRequest['X-Sdk-Date'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 本接口为异步接口，创建音频提取任务下发成功后会返回asset_id和提取的audio_asset_id，但此时音频提取任务并没有立即完成，可通过消息订阅界面配置的音频提取完成事件来获取音频提取任务完成与否。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createExtractAudioTask(createExtractAudioTaskRequest?: CreateExtractAudioTaskRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/asset/extract_audio",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSdkDate;

            if (createExtractAudioTaskRequest !== null && createExtractAudioTaskRequest !== undefined) {
                if (createExtractAudioTaskRequest instanceof CreateExtractAudioTaskRequest) {
                    body = createExtractAudioTaskRequest.body
                    xSdkDate = createExtractAudioTaskRequest.xSdkDate;
                } else {
                    body = createExtractAudioTaskRequest['body'];
                    xSdkDate = createExtractAudioTaskRequest['X-Sdk-Date'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 媒资发布后，可通过指定媒资ID或URL向CDN预热。用户初次请求时，将由CDN节点提供请求媒资，加快用户下载缓存时间，提高用户体验。单租户每天最多预热1000个。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPreheatingAsset(createPreheatingAssetRequest?: CreatePreheatingAssetRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/asset/preheating",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSdkDate;

            if (createPreheatingAssetRequest !== null && createPreheatingAssetRequest !== undefined) {
                if (createPreheatingAssetRequest instanceof CreatePreheatingAssetRequest) {
                    body = createPreheatingAssetRequest.body
                    xSdkDate = createPreheatingAssetRequest.xSdkDate;
                } else {
                    body = createPreheatingAssetRequest['body'];
                    xSdkDate = createPreheatingAssetRequest['X-Sdk-Date'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过存量托管的方式，将已存储在OBS桶中的音视频文件同步到点播服务。
         * 
         * OBS托管方式分为增量托管和存量托管，增量托管暂只支持通过视频点播控制台配置，配置后，若OBS有新增音视频文件，则会自动同步到点播服务中，具体请参见[增量托管](https://support.huaweicloud.com/usermanual-vod/vod010032.html)。两个托管方式都需要先将对应的OBS桶授权给点播服务，具体请参见[桶授权](https://support.huaweicloud.com/usermanual-vod/vod010031.html)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTakeOverTask(createTakeOverTaskRequest?: CreateTakeOverTaskRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/asset/obs/host/stock/task",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSdkDate;

            if (createTakeOverTaskRequest !== null && createTakeOverTaskRequest !== undefined) {
                if (createTakeOverTaskRequest instanceof CreateTakeOverTaskRequest) {
                    body = createTakeOverTaskRequest.body
                    xSdkDate = createTakeOverTaskRequest.xSdkDate;
                } else {
                    body = createTakeOverTaskRequest['body'];
                    xSdkDate = createTakeOverTaskRequest['X-Sdk-Date'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建自定义转码模板组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTemplateGroup(createTemplateGroupRequest?: CreateTemplateGroupRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/asset/template_group/transcodings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSdkDate;

            if (createTemplateGroupRequest !== null && createTemplateGroupRequest !== undefined) {
                if (createTemplateGroupRequest instanceof CreateTemplateGroupRequest) {
                    body = createTemplateGroupRequest.body
                    xSdkDate = createTemplateGroupRequest.xSdkDate;
                } else {
                    body = createTemplateGroupRequest['body'];
                    xSdkDate = createTemplateGroupRequest['X-Sdk-Date'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建转码模板组集合
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTemplateGroupCollection(createTemplateGroupCollectionRequest?: CreateTemplateGroupCollectionRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/asset/template-collection/transcodings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSdkDate;

            if (createTemplateGroupCollectionRequest !== null && createTemplateGroupCollectionRequest !== undefined) {
                if (createTemplateGroupCollectionRequest instanceof CreateTemplateGroupCollectionRequest) {
                    body = createTemplateGroupCollectionRequest.body
                    xSdkDate = createTemplateGroupCollectionRequest.xSdkDate;
                } else {
                    body = createTemplateGroupCollectionRequest['body'];
                    xSdkDate = createTemplateGroupCollectionRequest['X-Sdk-Date'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建自定义转码模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTranscodeTemplate(createTranscodeTemplateRequest?: CreateTranscodeTemplateRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/asset/template/transcodings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSdkDate;

            if (createTranscodeTemplateRequest !== null && createTranscodeTemplateRequest !== undefined) {
                if (createTranscodeTemplateRequest instanceof CreateTranscodeTemplateRequest) {
                    body = createTranscodeTemplateRequest.body
                    xSdkDate = createTranscodeTemplateRequest.xSdkDate;
                } else {
                    body = createTranscodeTemplateRequest['body'];
                    xSdkDate = createTranscodeTemplateRequest['X-Sdk-Date'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建水印模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createWatermarkTemplate(createWatermarkTemplateRequest?: CreateWatermarkTemplateRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/template/watermark",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSdkDate;

            if (createWatermarkTemplateRequest !== null && createWatermarkTemplateRequest !== undefined) {
                if (createWatermarkTemplateRequest instanceof CreateWatermarkTemplateRequest) {
                    body = createWatermarkTemplateRequest.body
                    xSdkDate = createWatermarkTemplateRequest.xSdkDate;
                } else {
                    body = createWatermarkTemplateRequest['body'];
                    xSdkDate = createWatermarkTemplateRequest['X-Sdk-Date'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除媒资分类。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAssetCategory(deleteAssetCategoryRequest?: DeleteAssetCategoryRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.0/{project_id}/asset/category",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let id;
            
            let xSdkDate;

            if (deleteAssetCategoryRequest !== null && deleteAssetCategoryRequest !== undefined) {
                if (deleteAssetCategoryRequest instanceof DeleteAssetCategoryRequest) {
                    id = deleteAssetCategoryRequest.id;
                    xSdkDate = deleteAssetCategoryRequest.xSdkDate;
                } else {
                    id = deleteAssetCategoryRequest['id'];
                    xSdkDate = deleteAssetCategoryRequest['X-Sdk-Date'];
                }
            }

        
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteAssetCategory.');
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除媒资。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAssets(deleteAssetsRequest?: DeleteAssetsRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.0/{project_id}/asset",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let assetId;
            
            let xSdkDate;
            
            let deleteType;

            if (deleteAssetsRequest !== null && deleteAssetsRequest !== undefined) {
                if (deleteAssetsRequest instanceof DeleteAssetsRequest) {
                    assetId = deleteAssetsRequest.assetId;
                    xSdkDate = deleteAssetsRequest.xSdkDate;
                    deleteType = deleteAssetsRequest.deleteType;
                } else {
                    assetId = deleteAssetsRequest['asset_id'];
                    xSdkDate = deleteAssetsRequest['X-Sdk-Date'];
                    deleteType = deleteAssetsRequest['delete_type'];
                }
            }

        
            if (assetId === null || assetId === undefined) {
                throw new RequiredError('assetId','Required parameter assetId was null or undefined when calling deleteAssets.');
            }
            if (assetId !== null && assetId !== undefined) {
                localVarQueryParameter['asset_id'] = assetId;
            }
            if (deleteType !== null && deleteType !== undefined) {
                localVarQueryParameter['delete_type'] = deleteType;
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除自定义转码模板组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTemplateGroup(deleteTemplateGroupRequest?: DeleteTemplateGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.0/{project_id}/asset/template_group/transcodings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let groupId;
            
            let xSdkDate;

            if (deleteTemplateGroupRequest !== null && deleteTemplateGroupRequest !== undefined) {
                if (deleteTemplateGroupRequest instanceof DeleteTemplateGroupRequest) {
                    groupId = deleteTemplateGroupRequest.groupId;
                    xSdkDate = deleteTemplateGroupRequest.xSdkDate;
                } else {
                    groupId = deleteTemplateGroupRequest['group_id'];
                    xSdkDate = deleteTemplateGroupRequest['X-Sdk-Date'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
                throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling deleteTemplateGroup.');
            }
            if (groupId !== null && groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除转码模板组集合
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTemplateGroupCollection(deleteTemplateGroupCollectionRequest?: DeleteTemplateGroupCollectionRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.0/{project_id}/asset/template-collection/transcodings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let groupCollectionId;
            
            let xSdkDate;

            if (deleteTemplateGroupCollectionRequest !== null && deleteTemplateGroupCollectionRequest !== undefined) {
                if (deleteTemplateGroupCollectionRequest instanceof DeleteTemplateGroupCollectionRequest) {
                    groupCollectionId = deleteTemplateGroupCollectionRequest.groupCollectionId;
                    xSdkDate = deleteTemplateGroupCollectionRequest.xSdkDate;
                } else {
                    groupCollectionId = deleteTemplateGroupCollectionRequest['group_collection_id'];
                    xSdkDate = deleteTemplateGroupCollectionRequest['X-Sdk-Date'];
                }
            }

        
            if (groupCollectionId === null || groupCollectionId === undefined) {
                throw new RequiredError('groupCollectionId','Required parameter groupCollectionId was null or undefined when calling deleteTemplateGroupCollection.');
            }
            if (groupCollectionId !== null && groupCollectionId !== undefined) {
                localVarQueryParameter['group_collection_id'] = groupCollectionId;
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除转码产物。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTranscodeProduct(deleteTranscodeProductRequest?: DeleteTranscodeProductRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/asset/transcode-product",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (deleteTranscodeProductRequest !== null && deleteTranscodeProductRequest !== undefined) {
                if (deleteTranscodeProductRequest instanceof DeleteTranscodeProductRequest) {
                    body = deleteTranscodeProductRequest.body
                } else {
                    body = deleteTranscodeProductRequest['body'];
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
         * 删除自定义模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTranscodeTemplate(deleteTranscodeTemplateRequest?: DeleteTranscodeTemplateRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/asset/template/transcodings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let groupId;
            
            let xSdkDate;

            if (deleteTranscodeTemplateRequest !== null && deleteTranscodeTemplateRequest !== undefined) {
                if (deleteTranscodeTemplateRequest instanceof DeleteTranscodeTemplateRequest) {
                    groupId = deleteTranscodeTemplateRequest.groupId;
                    xSdkDate = deleteTranscodeTemplateRequest.xSdkDate;
                } else {
                    groupId = deleteTranscodeTemplateRequest['group_id'];
                    xSdkDate = deleteTranscodeTemplateRequest['X-Sdk-Date'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
                throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling deleteTranscodeTemplate.');
            }
            if (groupId !== null && groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除水印模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteWatermarkTemplate(deleteWatermarkTemplateRequest?: DeleteWatermarkTemplateRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.0/{project_id}/template/watermark",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let id;
            
            let xSdkDate;

            if (deleteWatermarkTemplateRequest !== null && deleteWatermarkTemplateRequest !== undefined) {
                if (deleteWatermarkTemplateRequest instanceof DeleteWatermarkTemplateRequest) {
                    id = deleteWatermarkTemplateRequest.id;
                    xSdkDate = deleteWatermarkTemplateRequest.xSdkDate;
                } else {
                    id = deleteWatermarkTemplateRequest['id'];
                    xSdkDate = deleteWatermarkTemplateRequest['X-Sdk-Date'];
                }
            }

        
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteWatermarkTemplate.');
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定分类信息，及其子分类（即下一级分类）的列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAssetCategory(listAssetCategoryRequest?: ListAssetCategoryRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/asset/category",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let id;
            
            let xSdkDate;

            if (listAssetCategoryRequest !== null && listAssetCategoryRequest !== undefined) {
                if (listAssetCategoryRequest instanceof ListAssetCategoryRequest) {
                    id = listAssetCategoryRequest.id;
                    xSdkDate = listAssetCategoryRequest.xSdkDate;
                } else {
                    id = listAssetCategoryRequest['id'];
                    xSdkDate = listAssetCategoryRequest['X-Sdk-Date'];
                }
            }

        
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling listAssetCategory.');
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询媒资日播放统计数据。
         * 
         * 使用媒资日播放统计查询API前，需要先提交工单开通统计功能，才能触发统计任务。
         * 
         * 支持查询最近一年的播放统计数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAssetDailySummaryLog(listAssetDailySummaryLogRequest?: ListAssetDailySummaryLogRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/asset/daily-summary",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let startTime;
            
            let endTime;
            
            let xSdkDate;
            
            let offset;
            
            let limit;

            if (listAssetDailySummaryLogRequest !== null && listAssetDailySummaryLogRequest !== undefined) {
                if (listAssetDailySummaryLogRequest instanceof ListAssetDailySummaryLogRequest) {
                    startTime = listAssetDailySummaryLogRequest.startTime;
                    endTime = listAssetDailySummaryLogRequest.endTime;
                    xSdkDate = listAssetDailySummaryLogRequest.xSdkDate;
                    offset = listAssetDailySummaryLogRequest.offset;
                    limit = listAssetDailySummaryLogRequest.limit;
                } else {
                    startTime = listAssetDailySummaryLogRequest['start_time'];
                    endTime = listAssetDailySummaryLogRequest['end_time'];
                    xSdkDate = listAssetDailySummaryLogRequest['X-Sdk-Date'];
                    offset = listAssetDailySummaryLogRequest['offset'];
                    limit = listAssetDailySummaryLogRequest['limit'];
                }
            }

        
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listAssetDailySummaryLog.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listAssetDailySummaryLog.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询媒资列表，列表中的每一条记录包含媒资的概要信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAssetList(listAssetListRequest?: ListAssetListRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/asset/list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xSdkDate;
            
            let assetId;
            
            let status;
            
            let startTime;
            
            let endTime;
            
            let categoryId;
            
            let tags;
            
            let queryString;
            
            let mediaType;
            
            let page;
            
            let size;
            
            let order;

            if (listAssetListRequest !== null && listAssetListRequest !== undefined) {
                if (listAssetListRequest instanceof ListAssetListRequest) {
                    xSdkDate = listAssetListRequest.xSdkDate;
                    assetId = listAssetListRequest.assetId;
                    status = listAssetListRequest.status;
                    startTime = listAssetListRequest.startTime;
                    endTime = listAssetListRequest.endTime;
                    categoryId = listAssetListRequest.categoryId;
                    tags = listAssetListRequest.tags;
                    queryString = listAssetListRequest.queryString;
                    mediaType = listAssetListRequest.mediaType;
                    page = listAssetListRequest.page;
                    size = listAssetListRequest.size;
                    order = listAssetListRequest.order;
                } else {
                    xSdkDate = listAssetListRequest['X-Sdk-Date'];
                    assetId = listAssetListRequest['asset_id'];
                    status = listAssetListRequest['status'];
                    startTime = listAssetListRequest['start_time'];
                    endTime = listAssetListRequest['end_time'];
                    categoryId = listAssetListRequest['category_id'];
                    tags = listAssetListRequest['tags'];
                    queryString = listAssetListRequest['query_string'];
                    mediaType = listAssetListRequest['media_type'];
                    page = listAssetListRequest['page'];
                    size = listAssetListRequest['size'];
                    order = listAssetListRequest['order'];
                }
            }

        
            if (assetId !== null && assetId !== undefined) {
                localVarQueryParameter['asset_id'] = assetId;
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
            if (categoryId !== null && categoryId !== undefined) {
                localVarQueryParameter['category_id'] = categoryId;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }
            if (queryString !== null && queryString !== undefined) {
                localVarQueryParameter['query_string'] = queryString;
            }
            if (mediaType !== null && mediaType !== undefined) {
                localVarQueryParameter['media_type'] = mediaType;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (size !== null && size !== undefined) {
                localVarQueryParameter['size'] = size;
            }
            if (order !== null && order !== undefined) {
                localVarQueryParameter['order'] = order;
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定点播域名某段时间内在CDN的相关日志。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDomainLogs(listDomainLogsRequest?: ListDomainLogsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/vod/cdn/logs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainName;
            
            let queryDate;
            
            let xSdkDate;
            
            let pageSize;
            
            let pageNumber;

            if (listDomainLogsRequest !== null && listDomainLogsRequest !== undefined) {
                if (listDomainLogsRequest instanceof ListDomainLogsRequest) {
                    domainName = listDomainLogsRequest.domainName;
                    queryDate = listDomainLogsRequest.queryDate;
                    xSdkDate = listDomainLogsRequest.xSdkDate;
                    pageSize = listDomainLogsRequest.pageSize;
                    pageNumber = listDomainLogsRequest.pageNumber;
                } else {
                    domainName = listDomainLogsRequest['domain_name'];
                    queryDate = listDomainLogsRequest['query_date'];
                    xSdkDate = listDomainLogsRequest['X-Sdk-Date'];
                    pageSize = listDomainLogsRequest['page_size'];
                    pageNumber = listDomainLogsRequest['page_number'];
                }
            }

        
            if (domainName === null || domainName === undefined) {
                throw new RequiredError('domainName','Required parameter domainName was null or undefined when calling listDomainLogs.');
            }
            if (domainName !== null && domainName !== undefined) {
                localVarQueryParameter['domain_name'] = domainName;
            }
            if (queryDate === null || queryDate === undefined) {
                throw new RequiredError('queryDate','Required parameter queryDate was null or undefined when calling listDomainLogs.');
            }
            if (queryDate !== null && queryDate !== undefined) {
                localVarQueryParameter['query_date'] = queryDate;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (pageNumber !== null && pageNumber !== undefined) {
                localVarQueryParameter['page_number'] = pageNumber;
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
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
                url: "/v1.0/{project_id}/asset/template_group/transcodings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xSdkDate;
            
            let groupId;
            
            let status;
            
            let page;
            
            let size;

            if (listTemplateGroupRequest !== null && listTemplateGroupRequest !== undefined) {
                if (listTemplateGroupRequest instanceof ListTemplateGroupRequest) {
                    xSdkDate = listTemplateGroupRequest.xSdkDate;
                    groupId = listTemplateGroupRequest.groupId;
                    status = listTemplateGroupRequest.status;
                    page = listTemplateGroupRequest.page;
                    size = listTemplateGroupRequest.size;
                } else {
                    xSdkDate = listTemplateGroupRequest['X-Sdk-Date'];
                    groupId = listTemplateGroupRequest['group_id'];
                    status = listTemplateGroupRequest['status'];
                    page = listTemplateGroupRequest['page'];
                    size = listTemplateGroupRequest['size'];
                }
            }

        
            if (groupId !== null && groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (size !== null && size !== undefined) {
                localVarQueryParameter['size'] = size;
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询转码模板组集合
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTemplateGroupCollection(listTemplateGroupCollectionRequest?: ListTemplateGroupCollectionRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/asset/template-collection/transcodings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xSdkDate;
            
            let groupCollectionId;
            
            let offset;
            
            let limit;

            if (listTemplateGroupCollectionRequest !== null && listTemplateGroupCollectionRequest !== undefined) {
                if (listTemplateGroupCollectionRequest instanceof ListTemplateGroupCollectionRequest) {
                    xSdkDate = listTemplateGroupCollectionRequest.xSdkDate;
                    groupCollectionId = listTemplateGroupCollectionRequest.groupCollectionId;
                    offset = listTemplateGroupCollectionRequest.offset;
                    limit = listTemplateGroupCollectionRequest.limit;
                } else {
                    xSdkDate = listTemplateGroupCollectionRequest['X-Sdk-Date'];
                    groupCollectionId = listTemplateGroupCollectionRequest['group_collection_id'];
                    offset = listTemplateGroupCollectionRequest['offset'];
                    limit = listTemplateGroupCollectionRequest['limit'];
                }
            }

        
            if (groupCollectionId !== null && groupCollectionId !== undefined) {
                localVarQueryParameter['group_collection_id'] = groupCollectionId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定域名在指定日期播放次数排名Top 100的媒资统计数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTopStatistics(listTopStatisticsRequest?: ListTopStatisticsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/asset/top-statistics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domain;
            
            let date;
            
            let xSdkDate;

            if (listTopStatisticsRequest !== null && listTopStatisticsRequest !== undefined) {
                if (listTopStatisticsRequest instanceof ListTopStatisticsRequest) {
                    domain = listTopStatisticsRequest.domain;
                    date = listTopStatisticsRequest.date;
                    xSdkDate = listTopStatisticsRequest.xSdkDate;
                } else {
                    domain = listTopStatisticsRequest['domain'];
                    date = listTopStatisticsRequest['date'];
                    xSdkDate = listTopStatisticsRequest['X-Sdk-Date'];
                }
            }

        
            if (domain === null || domain === undefined) {
                throw new RequiredError('domain','Required parameter domain was null or undefined when calling listTopStatistics.');
            }
            if (domain !== null && domain !== undefined) {
                localVarQueryParameter['domain'] = domain;
            }
            if (date === null || date === undefined) {
                throw new RequiredError('date','Required parameter date was null or undefined when calling listTopStatistics.');
            }
            if (date !== null && date !== undefined) {
                localVarQueryParameter['date'] = date;
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询转码模板列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTranscodeTemplate(listTranscodeTemplateRequest?: ListTranscodeTemplateRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/asset/template/transcodings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xSdkDate;
            
            let groupId;
            
            let isDefault;
            
            let offset;
            
            let limit;
            
            let queryString;

            if (listTranscodeTemplateRequest !== null && listTranscodeTemplateRequest !== undefined) {
                if (listTranscodeTemplateRequest instanceof ListTranscodeTemplateRequest) {
                    xSdkDate = listTranscodeTemplateRequest.xSdkDate;
                    groupId = listTranscodeTemplateRequest.groupId;
                    isDefault = listTranscodeTemplateRequest.isDefault;
                    offset = listTranscodeTemplateRequest.offset;
                    limit = listTranscodeTemplateRequest.limit;
                    queryString = listTranscodeTemplateRequest.queryString;
                } else {
                    xSdkDate = listTranscodeTemplateRequest['X-Sdk-Date'];
                    groupId = listTranscodeTemplateRequest['group_id'];
                    isDefault = listTranscodeTemplateRequest['is_default'];
                    offset = listTranscodeTemplateRequest['offset'];
                    limit = listTranscodeTemplateRequest['limit'];
                    queryString = listTranscodeTemplateRequest['query_string'];
                }
            }

        
            if (groupId !== null && groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (isDefault !== null && isDefault !== undefined) {
                localVarQueryParameter['is_default'] = isDefault;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (queryString !== null && queryString !== undefined) {
                localVarQueryParameter['query_string'] = queryString;
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询水印模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWatermarkTemplate(listWatermarkTemplateRequest?: ListWatermarkTemplateRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/template/watermark",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xSdkDate;
            
            let id;
            
            let page;
            
            let size;

            if (listWatermarkTemplateRequest !== null && listWatermarkTemplateRequest !== undefined) {
                if (listWatermarkTemplateRequest instanceof ListWatermarkTemplateRequest) {
                    xSdkDate = listWatermarkTemplateRequest.xSdkDate;
                    id = listWatermarkTemplateRequest.id;
                    page = listWatermarkTemplateRequest.page;
                    size = listWatermarkTemplateRequest.size;
                } else {
                    xSdkDate = listWatermarkTemplateRequest['X-Sdk-Date'];
                    id = listWatermarkTemplateRequest['id'];
                    page = listWatermarkTemplateRequest['page'];
                    size = listWatermarkTemplateRequest['size'];
                }
            }

        
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (size !== null && size !== undefined) {
                localVarQueryParameter['size'] = size;
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 多字幕封装，仅支持 HLS VTT格式
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        modifySubtitle(modifySubtitleRequest?: ModifySubtitleRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/asset/subtitles",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (modifySubtitleRequest !== null && modifySubtitleRequest !== undefined) {
                if (modifySubtitleRequest instanceof ModifySubtitleRequest) {
                    body = modifySubtitleRequest.body
                } else {
                    body = modifySubtitleRequest['body'];
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
         * 若您在使用点播服务前，已经在OBS桶中存储了音视频文件，您可以使用该接口将存储在OBS桶中的音视频文件转存到点播服务中，使用点播服务的音视频管理功能。调用该接口前，您需要调用[桶授权](https://support.huaweicloud.com/api-vod/vod_04_0199.html)接口，将存储音视频文件的OBS桶授权给点播服务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        publishAssetFromObs(publishAssetFromObsRequest?: PublishAssetFromObsRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/asset/reproduction",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSdkDate;

            if (publishAssetFromObsRequest !== null && publishAssetFromObsRequest !== undefined) {
                if (publishAssetFromObsRequest instanceof PublishAssetFromObsRequest) {
                    body = publishAssetFromObsRequest.body
                    xSdkDate = publishAssetFromObsRequest.xSdkDate;
                } else {
                    body = publishAssetFromObsRequest['body'];
                    xSdkDate = publishAssetFromObsRequest['X-Sdk-Date'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 将媒资设置为发布状态。支持批量发布。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        publishAssets(publishAssetsRequest?: PublishAssetsRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/asset/status/publish",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSdkDate;

            if (publishAssetsRequest !== null && publishAssetsRequest !== undefined) {
                if (publishAssetsRequest instanceof PublishAssetsRequest) {
                    body = publishAssetsRequest.body
                    xSdkDate = publishAssetsRequest.xSdkDate;
                } else {
                    body = publishAssetsRequest['body'];
                    xSdkDate = publishAssetsRequest['X-Sdk-Date'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 终端播放HLS加密视频时，向租户管理系统请求密钥，租户管理系统先查询其本地有没有已缓存的密钥，没有时则调用此接口向VOD查询。该接口的具体使用场景请参见[通过HLS加密防止视频泄露](https://support.huaweicloud.com/bestpractice-vod/vod_10_0004.html)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAssetCipher(showAssetCipherRequest?: ShowAssetCipherRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/asset/ciphers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let assetId;
            
            let xSdkDate;

            if (showAssetCipherRequest !== null && showAssetCipherRequest !== undefined) {
                if (showAssetCipherRequest instanceof ShowAssetCipherRequest) {
                    assetId = showAssetCipherRequest.assetId;
                    xSdkDate = showAssetCipherRequest.xSdkDate;
                } else {
                    assetId = showAssetCipherRequest['asset_id'];
                    xSdkDate = showAssetCipherRequest['X-Sdk-Date'];
                }
            }

        
            if (assetId === null || assetId === undefined) {
                throw new RequiredError('assetId','Required parameter assetId was null or undefined when calling showAssetCipher.');
            }
            if (assetId !== null && assetId !== undefined) {
                localVarQueryParameter['asset_id'] = assetId;
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定媒资的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAssetDetail(showAssetDetailRequest?: ShowAssetDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/asset/details",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let assetId;
            
            let xSdkDate;
            
            let categories;

            if (showAssetDetailRequest !== null && showAssetDetailRequest !== undefined) {
                if (showAssetDetailRequest instanceof ShowAssetDetailRequest) {
                    assetId = showAssetDetailRequest.assetId;
                    xSdkDate = showAssetDetailRequest.xSdkDate;
                    categories = showAssetDetailRequest.categories;
                } else {
                    assetId = showAssetDetailRequest['asset_id'];
                    xSdkDate = showAssetDetailRequest['X-Sdk-Date'];
                    categories = showAssetDetailRequest['categories'];
                }
            }

        
            if (assetId === null || assetId === undefined) {
                throw new RequiredError('assetId','Required parameter assetId was null or undefined when calling showAssetDetail.');
            }
            if (assetId !== null && assetId !== undefined) {
                localVarQueryParameter['asset_id'] = assetId;
            }
            if (categories !== null && categories !== undefined) {
                localVarQueryParameter['categories'] = categories;
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询媒资信息，支持指定媒资ID、分类、状态、起止时间查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAssetMeta(showAssetMetaRequest?: ShowAssetMetaRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/asset/info",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xSdkDate;
            
            let assetId;
            
            let status;
            
            let transcodeStatus;
            
            let assetStatus;
            
            let startTime;
            
            let endTime;
            
            let categoryId;
            
            let tags;
            
            let queryString;
            
            let page;
            
            let size;

            if (showAssetMetaRequest !== null && showAssetMetaRequest !== undefined) {
                if (showAssetMetaRequest instanceof ShowAssetMetaRequest) {
                    xSdkDate = showAssetMetaRequest.xSdkDate;
                    assetId = showAssetMetaRequest.assetId;
                    status = showAssetMetaRequest.status;
                    transcodeStatus = showAssetMetaRequest.transcodeStatus;
                    assetStatus = showAssetMetaRequest.assetStatus;
                    startTime = showAssetMetaRequest.startTime;
                    endTime = showAssetMetaRequest.endTime;
                    categoryId = showAssetMetaRequest.categoryId;
                    tags = showAssetMetaRequest.tags;
                    queryString = showAssetMetaRequest.queryString;
                    page = showAssetMetaRequest.page;
                    size = showAssetMetaRequest.size;
                } else {
                    xSdkDate = showAssetMetaRequest['X-Sdk-Date'];
                    assetId = showAssetMetaRequest['asset_id'];
                    status = showAssetMetaRequest['status'];
                    transcodeStatus = showAssetMetaRequest['transcodeStatus'];
                    assetStatus = showAssetMetaRequest['assetStatus'];
                    startTime = showAssetMetaRequest['start_time'];
                    endTime = showAssetMetaRequest['end_time'];
                    categoryId = showAssetMetaRequest['category_id'];
                    tags = showAssetMetaRequest['tags'];
                    queryString = showAssetMetaRequest['query_string'];
                    page = showAssetMetaRequest['page'];
                    size = showAssetMetaRequest['size'];
                }
            }

        
            if (assetId !== null && assetId !== undefined) {
                localVarQueryParameter['asset_id'] = assetId;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (transcodeStatus !== null && transcodeStatus !== undefined) {
                localVarQueryParameter['transcodeStatus'] = transcodeStatus;
            }
            if (assetStatus !== null && assetStatus !== undefined) {
                localVarQueryParameter['assetStatus'] = assetStatus;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (categoryId !== null && categoryId !== undefined) {
                localVarQueryParameter['category_id'] = categoryId;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }
            if (queryString !== null && queryString !== undefined) {
                localVarQueryParameter['query_string'] = queryString;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (size !== null && size !== undefined) {
                localVarQueryParameter['size'] = size;
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 客户端请求创建媒资时，如果媒资文件超过20MB，需采用分段的方式向OBS上传，在每次与OBS交互前，客户端需通过此接口获取到授权方可与OBS交互。
         * 
         * 该接口可以获取[初始化多段上传任务](https://support.huaweicloud.com/api-obs/obs_04_0098.html)、[上传段](https://support.huaweicloud.com/api-obs/obs_04_0099.html)、[合并段](https://support.huaweicloud.com/api-obs/obs_04_0102.html)、[列举已上传段](https://support.huaweicloud.com/api-obs/obs_04_0101.html)、[取消段合并](https://support.huaweicloud.com/api-obs/obs_04_0103.html)的带有临时授权的URL，用户需要根据OBS的接口文档配置相应请求的HTTP请求方法、请求头、请求体，然后请求对应的带有临时授权的URL。
         * 
         * 视频分段上传方式和OBS的接口文档保持一致，包括HTTP请求方法、请求头、请求体等各种入参，此接口的作用是为用户生成带有鉴权信息的URL（鉴权信息即query_str），用来替换OBS接口中对应的URL，临时给用户开通向点播服务的桶上传文件的权限。
         * 
         * 调用获取授权接口时需要传入bucket、object_key、http_verb，其中bucket和object_key是由[创建媒资：上传方式](https://support.huaweicloud.com/api-vod/vod_04_0196.html)接口中返回的响应体中的target字段获得的bucket和object，http_verb需要根据指定的操作选择。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAssetTempAuthority(showAssetTempAuthorityRequest?: ShowAssetTempAuthorityRequest) {
            const options = {
                method: "GET",
                url: "/v1.1/{project_id}/asset/authority",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let httpVerb;
            
            let bucket;
            
            let objectKey;
            
            let xSdkDate;
            
            let contentType;
            
            let contentMd5;
            
            let uploadId;
            
            let partNumber;

            if (showAssetTempAuthorityRequest !== null && showAssetTempAuthorityRequest !== undefined) {
                if (showAssetTempAuthorityRequest instanceof ShowAssetTempAuthorityRequest) {
                    httpVerb = showAssetTempAuthorityRequest.httpVerb;
                    bucket = showAssetTempAuthorityRequest.bucket;
                    objectKey = showAssetTempAuthorityRequest.objectKey;
                    xSdkDate = showAssetTempAuthorityRequest.xSdkDate;
                    contentType = showAssetTempAuthorityRequest.contentType;
                    contentMd5 = showAssetTempAuthorityRequest.contentMd5;
                    uploadId = showAssetTempAuthorityRequest.uploadId;
                    partNumber = showAssetTempAuthorityRequest.partNumber;
                } else {
                    httpVerb = showAssetTempAuthorityRequest['http_verb'];
                    bucket = showAssetTempAuthorityRequest['bucket'];
                    objectKey = showAssetTempAuthorityRequest['object_key'];
                    xSdkDate = showAssetTempAuthorityRequest['X-Sdk-Date'];
                    contentType = showAssetTempAuthorityRequest['content_type'];
                    contentMd5 = showAssetTempAuthorityRequest['content_md5'];
                    uploadId = showAssetTempAuthorityRequest['upload_id'];
                    partNumber = showAssetTempAuthorityRequest['part_number'];
                }
            }

        
            if (httpVerb === null || httpVerb === undefined) {
                throw new RequiredError('httpVerb','Required parameter httpVerb was null or undefined when calling showAssetTempAuthority.');
            }
            if (httpVerb !== null && httpVerb !== undefined) {
                localVarQueryParameter['http_verb'] = httpVerb;
            }
            if (bucket === null || bucket === undefined) {
                throw new RequiredError('bucket','Required parameter bucket was null or undefined when calling showAssetTempAuthority.');
            }
            if (bucket !== null && bucket !== undefined) {
                localVarQueryParameter['bucket'] = bucket;
            }
            if (objectKey === null || objectKey === undefined) {
                throw new RequiredError('objectKey','Required parameter objectKey was null or undefined when calling showAssetTempAuthority.');
            }
            if (objectKey !== null && objectKey !== undefined) {
                localVarQueryParameter['object_key'] = objectKey;
            }
            if (contentType !== null && contentType !== undefined) {
                localVarQueryParameter['content_type'] = contentType;
            }
            if (contentMd5 !== null && contentMd5 !== undefined) {
                localVarQueryParameter['content_md5'] = contentMd5;
            }
            if (uploadId !== null && uploadId !== undefined) {
                localVarQueryParameter['upload_id'] = uploadId;
            }
            if (partNumber !== null && partNumber !== undefined) {
                localVarQueryParameter['part_number'] = partNumber;
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询CDN的统计数据，包括流量、峰值带宽、请求总数、请求命中率、流量命中率。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCdnStatistics(showCdnStatisticsRequest?: ShowCdnStatisticsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/asset/cdn-statistics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let statType;
            
            let domain;
            
            let xSdkDate;
            
            let startTime;
            
            let endTime;
            
            let interval;

            if (showCdnStatisticsRequest !== null && showCdnStatisticsRequest !== undefined) {
                if (showCdnStatisticsRequest instanceof ShowCdnStatisticsRequest) {
                    statType = showCdnStatisticsRequest.statType;
                    domain = showCdnStatisticsRequest.domain;
                    xSdkDate = showCdnStatisticsRequest.xSdkDate;
                    startTime = showCdnStatisticsRequest.startTime;
                    endTime = showCdnStatisticsRequest.endTime;
                    interval = showCdnStatisticsRequest.interval;
                } else {
                    statType = showCdnStatisticsRequest['stat_type'];
                    domain = showCdnStatisticsRequest['domain'];
                    xSdkDate = showCdnStatisticsRequest['X-Sdk-Date'];
                    startTime = showCdnStatisticsRequest['start_time'];
                    endTime = showCdnStatisticsRequest['end_time'];
                    interval = showCdnStatisticsRequest['interval'];
                }
            }

        
            if (statType === null || statType === undefined) {
                throw new RequiredError('statType','Required parameter statType was null or undefined when calling showCdnStatistics.');
            }
            if (statType !== null && statType !== undefined) {
                localVarQueryParameter['stat_type'] = statType;
            }
            if (domain === null || domain === undefined) {
                throw new RequiredError('domain','Required parameter domain was null or undefined when calling showCdnStatistics.');
            }
            if (domain !== null && domain !== undefined) {
                localVarQueryParameter['domain'] = domain;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (interval !== null && interval !== undefined) {
                localVarQueryParameter['interval'] = interval;
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询预热结果。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPreheatingAsset(showPreheatingAssetRequest?: ShowPreheatingAssetRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/asset/preheating",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let taskId;
            
            let xSdkDate;

            if (showPreheatingAssetRequest !== null && showPreheatingAssetRequest !== undefined) {
                if (showPreheatingAssetRequest instanceof ShowPreheatingAssetRequest) {
                    taskId = showPreheatingAssetRequest.taskId;
                    xSdkDate = showPreheatingAssetRequest.xSdkDate;
                } else {
                    taskId = showPreheatingAssetRequest['task_id'];
                    xSdkDate = showPreheatingAssetRequest['X-Sdk-Date'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
                throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showPreheatingAsset.');
            }
            if (taskId !== null && taskId !== undefined) {
                localVarQueryParameter['task_id'] = taskId;
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询媒资降冷配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showStorageModeType() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/asset/storage-mode-type",
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
         * ## 典型场景 ##
         *  用于查询点播低频和归档取回量统计数据。&lt;br/&gt;
         * 
         * ## 接口功能 ##
         *  用于查询点播低频和归档取回量统计数据。&lt;br/&gt;
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVodRetrieval(showVodRetrievalRequest?: ShowVodRetrievalRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/asset/vod-retrieval",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let startTime;
            
            let endTime;
            
            let interval;

            if (showVodRetrievalRequest !== null && showVodRetrievalRequest !== undefined) {
                if (showVodRetrievalRequest instanceof ShowVodRetrievalRequest) {
                    startTime = showVodRetrievalRequest.startTime;
                    endTime = showVodRetrievalRequest.endTime;
                    interval = showVodRetrievalRequest.interval;
                } else {
                    startTime = showVodRetrievalRequest['start_time'];
                    endTime = showVodRetrievalRequest['end_time'];
                    interval = showVodRetrievalRequest['interval'];
                }
            }

        
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (interval !== null && interval !== undefined) {
                localVarQueryParameter['interval'] = interval;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询点播源站的统计数据，包括存储空间、转码时长。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVodStatistics(showVodStatisticsRequest?: ShowVodStatisticsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/asset/vod-statistics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xSdkDate;
            
            let startTime;
            
            let endTime;
            
            let interval;

            if (showVodStatisticsRequest !== null && showVodStatisticsRequest !== undefined) {
                if (showVodStatisticsRequest instanceof ShowVodStatisticsRequest) {
                    xSdkDate = showVodStatisticsRequest.xSdkDate;
                    startTime = showVodStatisticsRequest.startTime;
                    endTime = showVodStatisticsRequest.endTime;
                    interval = showVodStatisticsRequest.interval;
                } else {
                    xSdkDate = showVodStatisticsRequest['X-Sdk-Date'];
                    startTime = showVodStatisticsRequest['start_time'];
                    endTime = showVodStatisticsRequest['end_time'];
                    interval = showVodStatisticsRequest['interval'];
                }
            }

        
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (interval !== null && interval !== undefined) {
                localVarQueryParameter['interval'] = interval;
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 将媒资设置为未发布状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        unpublishAssets(unpublishAssetsRequest?: UnpublishAssetsRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/asset/status/unpublish",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSdkDate;

            if (unpublishAssetsRequest !== null && unpublishAssetsRequest !== undefined) {
                if (unpublishAssetsRequest instanceof UnpublishAssetsRequest) {
                    body = unpublishAssetsRequest.body
                    xSdkDate = unpublishAssetsRequest.xSdkDate;
                } else {
                    body = unpublishAssetsRequest['body'];
                    xSdkDate = unpublishAssetsRequest['X-Sdk-Date'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 媒资创建后，单独上传封面、更新视频文件或更新已有封面。
         * 
         * 如果是更新视频文件，更新完后要通过[确认媒资上传](https://support.huaweicloud.com/api-vod/vod_04_0198.html)接口通知点播服务。
         * 
         * 如果是更新封面或单独上传封面，则不需通知。
         * 
         * 更新视频可以使用分段上传，具体方式可以参考[示例2：媒资分段上传（20M以上）](https://support.huaweicloud.com/api-vod/vod_04_0216.html)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAsset(updateAssetRequest?: UpdateAssetRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/{project_id}/asset",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSdkDate;

            if (updateAssetRequest !== null && updateAssetRequest !== undefined) {
                if (updateAssetRequest instanceof UpdateAssetRequest) {
                    body = updateAssetRequest.body
                    xSdkDate = updateAssetRequest.xSdkDate;
                } else {
                    body = updateAssetRequest['body'];
                    xSdkDate = updateAssetRequest['X-Sdk-Date'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改媒资分类。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAssetCategory(updateAssetCategoryRequest?: UpdateAssetCategoryRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/{project_id}/asset/category",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSdkDate;

            if (updateAssetCategoryRequest !== null && updateAssetCategoryRequest !== undefined) {
                if (updateAssetCategoryRequest instanceof UpdateAssetCategoryRequest) {
                    body = updateAssetCategoryRequest.body
                    xSdkDate = updateAssetCategoryRequest.xSdkDate;
                } else {
                    body = updateAssetCategoryRequest['body'];
                    xSdkDate = updateAssetCategoryRequest['X-Sdk-Date'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改媒资属性。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAssetMeta(updateAssetMetaRequest?: UpdateAssetMetaRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/{project_id}/asset/info",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSdkDate;

            if (updateAssetMetaRequest !== null && updateAssetMetaRequest !== undefined) {
                if (updateAssetMetaRequest instanceof UpdateAssetMetaRequest) {
                    xSdkDate = updateAssetMetaRequest.xSdkDate;
                    body = updateAssetMetaRequest.body
                } else {
                    xSdkDate = updateAssetMetaRequest['X-Sdk-Date'];
                    body = updateAssetMetaRequest['body'];
                }
            }

        
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户可以通过该接口将OBS桶授权给点播服务或取消点播服务的授权。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateBucketAuthorized(updateBucketAuthorizedRequest?: UpdateBucketAuthorizedRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/{project_id}/asset/authority",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSdkDate;

            if (updateBucketAuthorizedRequest !== null && updateBucketAuthorizedRequest !== undefined) {
                if (updateBucketAuthorizedRequest instanceof UpdateBucketAuthorizedRequest) {
                    body = updateBucketAuthorizedRequest.body
                    xSdkDate = updateBucketAuthorizedRequest.xSdkDate;
                } else {
                    body = updateBucketAuthorizedRequest['body'];
                    xSdkDate = updateBucketAuthorizedRequest['X-Sdk-Date'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 将视频截图生成的某张图片设置成封面。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateCoverByThumbnail(updateCoverByThumbnailRequest?: UpdateCoverByThumbnailRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/{project_id}/asset/cover",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSdkDate;

            if (updateCoverByThumbnailRequest !== null && updateCoverByThumbnailRequest !== undefined) {
                if (updateCoverByThumbnailRequest instanceof UpdateCoverByThumbnailRequest) {
                    body = updateCoverByThumbnailRequest.body
                    xSdkDate = updateCoverByThumbnailRequest.xSdkDate;
                } else {
                    body = updateCoverByThumbnailRequest['body'];
                    xSdkDate = updateCoverByThumbnailRequest['X-Sdk-Date'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ## 接口功能 ##
         *   修改媒资文件在obs的存储模式&lt;br/&gt;
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateStorageMode(updateStorageModeRequest?: UpdateStorageModeRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/asset/storage-mode",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateStorageModeRequest !== null && updateStorageModeRequest !== undefined) {
                if (updateStorageModeRequest instanceof UpdateStorageModeRequest) {
                    body = updateStorageModeRequest.body
                } else {
                    body = updateStorageModeRequest['body'];
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
         * 修改媒资降冷粒度。
         * 
         * 默认为整个媒资粒度，支持转为仅原文件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateStorageModeType(updateStorageModeTypeRequest?: UpdateStorageModeTypeRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/asset/storage-mode-type",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateStorageModeTypeRequest !== null && updateStorageModeTypeRequest !== undefined) {
                if (updateStorageModeTypeRequest instanceof UpdateStorageModeTypeRequest) {
                    body = updateStorageModeTypeRequest.body
                } else {
                    body = updateStorageModeTypeRequest['body'];
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
         * 修改自定义转码模板组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTemplateGroup(updateTemplateGroupRequest?: UpdateTemplateGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/{project_id}/asset/template_group/transcodings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSdkDate;

            if (updateTemplateGroupRequest !== null && updateTemplateGroupRequest !== undefined) {
                if (updateTemplateGroupRequest instanceof UpdateTemplateGroupRequest) {
                    body = updateTemplateGroupRequest.body
                    xSdkDate = updateTemplateGroupRequest.xSdkDate;
                } else {
                    body = updateTemplateGroupRequest['body'];
                    xSdkDate = updateTemplateGroupRequest['X-Sdk-Date'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改转码模板组结合
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTemplateGroupCollection(updateTemplateGroupCollectionRequest?: UpdateTemplateGroupCollectionRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/{project_id}/asset/template-collection/transcodings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSdkDate;

            if (updateTemplateGroupCollectionRequest !== null && updateTemplateGroupCollectionRequest !== undefined) {
                if (updateTemplateGroupCollectionRequest instanceof UpdateTemplateGroupCollectionRequest) {
                    body = updateTemplateGroupCollectionRequest.body
                    xSdkDate = updateTemplateGroupCollectionRequest.xSdkDate;
                } else {
                    body = updateTemplateGroupCollectionRequest['body'];
                    xSdkDate = updateTemplateGroupCollectionRequest['X-Sdk-Date'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改转码模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTranscodeTemplate(updateTranscodeTemplateRequest?: UpdateTranscodeTemplateRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/asset/template/transcodings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSdkDate;

            if (updateTranscodeTemplateRequest !== null && updateTranscodeTemplateRequest !== undefined) {
                if (updateTranscodeTemplateRequest instanceof UpdateTranscodeTemplateRequest) {
                    body = updateTranscodeTemplateRequest.body
                    xSdkDate = updateTranscodeTemplateRequest.xSdkDate;
                } else {
                    body = updateTranscodeTemplateRequest['body'];
                    xSdkDate = updateTranscodeTemplateRequest['X-Sdk-Date'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改水印模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateWatermarkTemplate(updateWatermarkTemplateRequest?: UpdateWatermarkTemplateRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/{project_id}/template/watermark",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSdkDate;

            if (updateWatermarkTemplateRequest !== null && updateWatermarkTemplateRequest !== undefined) {
                if (updateWatermarkTemplateRequest instanceof UpdateWatermarkTemplateRequest) {
                    xSdkDate = updateWatermarkTemplateRequest.xSdkDate;
                    body = updateWatermarkTemplateRequest.body
                } else {
                    xSdkDate = updateWatermarkTemplateRequest['X-Sdk-Date'];
                    body = updateWatermarkTemplateRequest['body'];
                }
            }

        
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 基于音视频源文件URL，将音视频文件离线拉取上传到点播服务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        uploadMetaDataByUrl(uploadMetaDataByUrlRequest?: UploadMetaDataByUrlRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/asset/upload_by_url",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSdkDate;

            if (uploadMetaDataByUrlRequest !== null && uploadMetaDataByUrlRequest !== undefined) {
                if (uploadMetaDataByUrlRequest instanceof UploadMetaDataByUrlRequest) {
                    body = uploadMetaDataByUrlRequest.body
                    xSdkDate = uploadMetaDataByUrlRequest.xSdkDate;
                } else {
                    body = uploadMetaDataByUrlRequest['body'];
                    xSdkDate = uploadMetaDataByUrlRequest['X-Sdk-Date'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询OBS存量托管任务列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTakeOverTask(listTakeOverTaskRequest?: ListTakeOverTaskRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/asset/obs/host/stock/task",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xSdkDate;
            
            let status;
            
            let taskId;
            
            let page;
            
            let size;

            if (listTakeOverTaskRequest !== null && listTakeOverTaskRequest !== undefined) {
                if (listTakeOverTaskRequest instanceof ListTakeOverTaskRequest) {
                    xSdkDate = listTakeOverTaskRequest.xSdkDate;
                    status = listTakeOverTaskRequest.status;
                    taskId = listTakeOverTaskRequest.taskId;
                    page = listTakeOverTaskRequest.page;
                    size = listTakeOverTaskRequest.size;
                } else {
                    xSdkDate = listTakeOverTaskRequest['X-Sdk-Date'];
                    status = listTakeOverTaskRequest['status'];
                    taskId = listTakeOverTaskRequest['task_id'];
                    page = listTakeOverTaskRequest['page'];
                    size = listTakeOverTaskRequest['size'];
                }
            }

        
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (taskId !== null && taskId !== undefined) {
                localVarQueryParameter['task_id'] = taskId;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (size !== null && size !== undefined) {
                localVarQueryParameter['size'] = size;
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询OBS托管媒资的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTakeOverAssetDetails(showTakeOverAssetDetailsRequest?: ShowTakeOverAssetDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/asset/obs/host/task/details",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let sourceBucket;
            
            let sourceObject;
            
            let xSdkDate;

            if (showTakeOverAssetDetailsRequest !== null && showTakeOverAssetDetailsRequest !== undefined) {
                if (showTakeOverAssetDetailsRequest instanceof ShowTakeOverAssetDetailsRequest) {
                    sourceBucket = showTakeOverAssetDetailsRequest.sourceBucket;
                    sourceObject = showTakeOverAssetDetailsRequest.sourceObject;
                    xSdkDate = showTakeOverAssetDetailsRequest.xSdkDate;
                } else {
                    sourceBucket = showTakeOverAssetDetailsRequest['source_bucket'];
                    sourceObject = showTakeOverAssetDetailsRequest['source_object'];
                    xSdkDate = showTakeOverAssetDetailsRequest['X-Sdk-Date'];
                }
            }

        
            if (sourceBucket === null || sourceBucket === undefined) {
                throw new RequiredError('sourceBucket','Required parameter sourceBucket was null or undefined when calling showTakeOverAssetDetails.');
            }
            if (sourceBucket !== null && sourceBucket !== undefined) {
                localVarQueryParameter['source_bucket'] = sourceBucket;
            }
            if (sourceObject === null || sourceObject === undefined) {
                throw new RequiredError('sourceObject','Required parameter sourceObject was null or undefined when calling showTakeOverAssetDetails.');
            }
            if (sourceObject !== null && sourceObject !== undefined) {
                localVarQueryParameter['source_object'] = sourceObject;
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询OBS存量托管任务详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTakeOverTaskDetails(showTakeOverTaskDetailsRequest?: ShowTakeOverTaskDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/asset/obs/host/stock/task/details",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let taskId;
            
            let xSdkDate;
            
            let page;
            
            let size;

            if (showTakeOverTaskDetailsRequest !== null && showTakeOverTaskDetailsRequest !== undefined) {
                if (showTakeOverTaskDetailsRequest instanceof ShowTakeOverTaskDetailsRequest) {
                    taskId = showTakeOverTaskDetailsRequest.taskId;
                    xSdkDate = showTakeOverTaskDetailsRequest.xSdkDate;
                    page = showTakeOverTaskDetailsRequest.page;
                    size = showTakeOverTaskDetailsRequest.size;
                } else {
                    taskId = showTakeOverTaskDetailsRequest['task_id'];
                    xSdkDate = showTakeOverTaskDetailsRequest['X-Sdk-Date'];
                    page = showTakeOverTaskDetailsRequest['page'];
                    size = showTakeOverTaskDetailsRequest['size'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
                throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showTakeOverTaskDetails.');
            }
            if (taskId !== null && taskId !== undefined) {
                localVarQueryParameter['task_id'] = taskId;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (size !== null && size !== undefined) {
                localVarQueryParameter['size'] = size;
            }
            if (xSdkDate !== undefined && xSdkDate !== null) {
                localVarHeaderParameter['X-Sdk-Date'] = String(xSdkDate);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): VodClient {
    return new VodClient(client);
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